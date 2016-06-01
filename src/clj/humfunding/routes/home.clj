(ns humfunding.routes.home
  (:require [humfunding.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]
            [humfunding.formstack :as fs]
            [humfunding.ancillary :as ancillary]))

(defn _leave-request-raw 
  "Get the raw datastructures of APPROVED requests"
  [category]
  (println ">>>>> Requesting leave request for: " category)
  ;;(response/ok {:body "Requested leave!"})
  (let [form-id (-> (re-pattern (str category "_leave")) fs/get-forms-by-category first (get "id"))
        ;; sub-ids (map #(get % "id")
        ;;              (-> (fs/get-submissions form-id) (get "submissions")))
        approved-sub-ids (->> (-> (fs/get-submissions form-id) (get "submissions"))
                              (filter #(= "Approved" (get % "approval_status")))
                              (map #(get % "id")))
        requests (into [] (for [si approved-sub-ids]
                            (-> si fs/get-submission-vals fs/make-submission-valmap)))]
    ;; Return xml vals via transit
    requests
    ;(response/ok  requests)
    ))

(defmulti leave-requests-raw "Get all requests of a single category or a vector of categories"
  (fn [form-or-forms] (type form-or-forms)))

(defmethod leave-requests-raw clojure.lang.PersistentVector [form-names]
  (reduce into (doall (for [f form-names] (_leave-request-raw f)))))

(defmethod leave-requests-raw String [one-form-name]
  (_leave-request-raw one-form-name))

(defn home-page []
  (layout/hiccup-render-cljs-base))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/pdf/:sub-id" {{sub-id :sub-id
                        refresh :refresh} :params}
       (do
         (println ">>>>>>>>>>>>>>> Refresh is: " refresh "\n>>>>>>> and subid is " sub-id)
         (-> (fs/serve-pdf sub-id)
             response/ok
             (response/header "Content-Disposition" (str "attachment; filename=\"" (str sub-id ".pdf") "\""))
             (response/content-type "application/pdf")
             ))) ;; TODO invalid subids, and what format can be served
  (POST "/leave/all" [category] (response/ok (leave-requests-raw ancillary/all-depts)))
  (POST "/leave/:category" [category] (response/ok (leave-requests-raw category)))
  (GET "/docs" [] (response/ok (-> "docs/docs.md" io/resource slurp))))

