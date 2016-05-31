(ns humfunding.formstack
  (:require [clj-http.client :as client]
            [clj-json [core :as json]]
            [humfunding.xml :as xml]
            [humfunding.ancillary :refer [get-chair translation-map make-budget-map]]
            [humfunding.fop :as fop]
            [clojure.string :refer [lower-case]]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clojure.java.io :as io])
  (:import [java.io StringReader]))

(def ^:dynamic *oauth1* "f3b5ec559ff83e6de0ef7812d7c1b5f9") ;; expires regularly
(def ^:dynamic *access-token* "74641c25860f55dc930c9ba036e08bdb") ;; oauth2, almost stable
(def _url-base "https://www.formstack.com/api/v2/")

(def client-id "13300")
(def headers {:headers {:Accept "application/json"
                        :Content-Type "application/json"
                        :Authorization (str "Bearer " *access-token*)}})
(def formstack-time-long (f/formatter "yyyy-MM-dd HH:mm:ss"))
(def formstack-time-short (f/formatter "MMM yyyy"))

(defn make-names [name-string]
  (map last (re-seq #"= (.*)" name-string)))

(defn convert-times [time-string input-format-key output-format-key] ;; output format like :date
  (let [input-formats {:short formstack-time-short
                       :long formstack-time-long}
        output-format (f/formatters output-format-key)]
    (if-not (empty? time-string)
      (->> time-string
           (f/parse (get input-formats input-format-key))
           (f/unparse output-format))
      "")))

(defn get-token ;; XXX doesn't work yet with the oauth2 system; bypass with hardcoded token
  "Get the *oauth2* token"
  [& {:keys [client-id redirect-uri authcode client-secret]
      :or {client-id "13300"
           redirect-uri "toryanderson.com"
           client-secret "42ae7ef62a"
           authcode *access-token*}}]
  (let [token-url (str _url-base "oauth2/token")
        rmap     (client/post token-url {:form-params {:client_id client-id
                                                       :redirect_uri "toryanderson.com"
                                                       :client_secret client-secret
                                                       :code authcode
                                                       :grant_type "authorization_code"}})]
    (-> rmap :body json/parse-string (get "access_token"))))

(defn get-forms []
  (let [form-request-url (str  _url-base "form.json?oauth_token=" *access-token*)
        response (client/get form-request-url)]
    (-> response :body json/parse-string (get "forms"))))

(defn _form-matches-category? [form regexp]
  (let [url (get form "url")]
    (re-find regexp url)))

(defmulti form-matches-category? "Find whether a form matches based on its URL"
  (fn [form form-category] (type form-category)))

(defmethod form-matches-category? java.util.regex.Pattern [form form-category]
  (_form-matches-category? form form-category))

(defmethod form-matches-category? java.lang.String
  [form form-category] ;; get the form url
  (let [cat-map {"dean" #"dean_"
                 "asian" #"ane_"
                 "cal" #"cal_"
                 "english" #"english_"
                 "french" #"frenital_"
                 "italian" #"frenital_"
                 "german" #"germruss_"
                 "russian" #"germruss_"
                 "slavic" #"germruss_"
                 "linguistics" #"linguistics_"
                 "philosophy" #"philosophy_"
                 "spanish" #"spanport_"
                 "portuguese" #"spanport_"}
        regexp (get cat-map form-category)]
    (_form-matches-category? form regexp)))

(defn get-forms-by-category [category]
  (let [forms (get-forms)]
    (filter #(form-matches-category? % category) forms)))

(defn get-form [form-id]
  (let [url (str _url-base "form/" form-id ".json")
        response (client/get url headers)]
    (-> response :body json/parse-string)))

(defn get-submissions [form-id]
  (let [url (str _url-base "form/" form-id "/submission.json")
        response (client/get url headers)]
    (-> response :body json/parse-string)))

(defn get-submission [submission-id]
  (let [url (str _url-base "submission/" submission-id ".json")
        response (client/get url headers)]
    (-> response :body json/parse-string)))

(defn field-map
  "make a map of the field id nums to their labels"
  [form-id]
  (let [form (get-form form-id)
        fields (get form "fields")]
    (into {} (for [field fields] [(get field "id") (get field "label")]))))

(defn get-submission-vals
  ([submission-id]
   (let [submission (get-submission submission-id)
         form-id (get submission "form")]
     (get-submission-vals submission form-id)))
  ([submission form-id]
   (let [fmap (field-map form-id)
         data (get submission "data")
         init-data {"request date" (get submission "timestamp")
                    "submission id" (get submission "id")}]
     (into init-data (for [d data] (let [target-key (-> d (get "field"))
                                         field (-> fmap (get target-key) clojure.string/lower-case)]
                                     [field (get d "value")]))))))

(defn make-submission-valmap
  "Make the key list for replacement in the XML template given a get-submission-vals"
  [values]
  (let [raw-map (into {} (for [[k v] values] [(get translation-map k) v]))
        [gn sn] (make-names (raw-map :given-name))
        dept (raw-map :dept-key)
        chair (get-chair dept)
        time-fields-date [[:request-date :long :date]
                          [:leave-last-leave :short :year-month]
                          [:leave-last-leave-end :short :year-month]
                          [:project-start-date :short :year-month]
                          [:project-end-date :short :year-month]]
        budget-fields-amt [:budget-other-amt                         
                           :budget-travel-amt
                           :budget-supplies-amt
                           :budget-wages-amt]
        budget-map  (make-budget-map raw-map budget-fields-amt)
        times-map (into {} (for [[tkey input-form output-form] time-fields-date]
                             [tkey (-> tkey raw-map (convert-times input-form output-form))]))
        names-map {:given-name gn
                   :surname sn
                   :chair-name (chair :name)}
        lc-fields [:cfs? :leave-last-leave-type :leave-time :leave-type]
        lc-map (into {} (for [l lc-fields] [l (-> l raw-map lower-case)]))]
    (merge raw-map times-map names-map lc-map budget-map)))

(defn full-xml-out "Full process, going in with form and submission id, out to an xml file"
  [form-id submission-id xml-out]
  (let [val-map (-> submission-id get-submission-vals make-submission-valmap)
        xml (xml/generate-xml val-map)]
    (xml/output-xml xml xml-out)
    xml-out))

(defn full-xml "Full process, going in with form and submission id, out to an xml stream"
  [submission-id]
  (let [val-map (-> submission-id get-submission-vals make-submission-valmap)]
    (xml/generate-xml val-map)))

(defn all-out-pdf "Full process out to a pdf"
  [submission-id pdf-out-loc]
  (let [xml (StringReader. (full-xml submission-id))]
    (fop/generate-leave-pdf-mem {:xml xml :pdf-file pdf-out-loc})))

(defn serve-pdf
  "Check whether pdf-id.pdf exists already;
  If not, create. Then, return it. "
  [submission-id & force]
  (let [pdf-name (str submission-id ".pdf")
        out-dir (-> "leave" io/resource io/file) ;; TODO create this if not exists
        pdf-file (-> (str (.getPath out-dir) (java.io.File/separator) pdf-name)
                     io/file)]
    (if (or (not (.exists pdf-file))
            force)
      (all-out-pdf submission-id (.getPath pdf-file)))
    pdf-file))
