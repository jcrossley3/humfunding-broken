(ns humfunding.layout
  (:require ;; [selmer.parser :as parser]
   ;; [selmer.filters :as filters]
   [hiccup.core :as hc]
   [hiccup.page :as hp]
   [hiccup.util :refer [with-base-url]]
   [hiccup.element :refer [javascript-tag]]
   [markdown.core :refer [md-to-html-string]]
   [ring.util.http-response :refer [content-type ok]]
   [ring.util.anti-forgery :refer [anti-forgery-field]]
   [ring.middleware.anti-forgery :refer [*anti-forgery-token*]]))


(declare ^:dynamic *app-context*)

(def style-path "/css/")
(def script-path "/js/")

(defn anti-forgery-element []
  [:input {:id "token" :value *anti-forgery-token* :type "hidden"}
   (javascript-tag (str  "var csrfToken = '" *anti-forgery-token* "'"))])

(defn boiler-header [& [username]]
  [:head [:title "BYU Humanities Faculty Funding"]
   (javascript-tag (str "var USERNAME = '" username "'"))])

(defn cljs-app-base []
  [:div#app
   [:div.container]])

(defn boiler-plate []
  [:div#boiler-wrapper
   [:div#navbar]    
   ;; styles
   (hp/include-css (str "/assets/bootstrap/css/bootstrap.min.css"))
   (hp/include-css (str "/assets/font-awesome/css/font-awesome.min.css"))     
                                        ;(hp/include-css (str "/assets/bootstrap/css/bootstrap-theme.min.css"))
   (hp/include-css (str style-path "humfunding.css"))
   (hp/include-css (str style-path "screen.css"))])

(defn cljs-includes []
  ;; script
  [:div
   (hp/include-js (str script-path "out/goog/base.js"))
   (hp/include-js (str script-path "app.js")) ;; must precede the goog.require
   (hp/include-js "/assets/jquery/jquery.min.js")
   ;; (hp/include-js "/assets/jquery-ui/jquery-ui.min.js")
   (hp/include-js "/assets/tether/dist/js/tether.min.js") ;; had to examine the structure of the webjar to find this path
   (hp/include-js "/assets/bootstrap/js/bootstrap.min.js")
   [:script {:type "text/javascript"} "goog.require('humfunding.app')"]])

(defn hiccup-render-cljs-base
  "Hiccup rendering (no traditional template)"
  [& [username]]
  (content-type
   (ok
    (hp/html5
     (boiler-header username)
     (boiler-plate)
     (anti-forgery-element)
     (cljs-app-base)
     (cljs-includes))) ;; it makes a big difference to make sure the clojurescript is included last, so the DOM is rendered
   "text/html; charset=utf-8"))

(defn hiccup-render-unknown-user        ;TODO n/a
  "The user is not in the Database"
  [username]
  (content-type
   (ok
    (hp/html5
     [:h1 (format "Sorry %s, you have not been authorized to use humfunding." username)]))
   "text/html; charset=utf-8"))

(defn error-page
  "error-details should be a map containing the following keys:
   :status - error status
   :title - error title (optional)
   :message - detailed error message (optional)

   returns a response map with the error page as the body
   and the status specified by the status key"
  [error-details]
  {:status  (:status error-details)
   :headers {"Content-Type" "text/html; charset=utf-8"}
   :body (hp/html5
          (boiler-header)
          (boiler-plate)
          [:div.alert.alert-warning
           [:h1 (or (:title error-details) (str "Error " (:status error-details)))]
           [:div.error-details (:message error-details)]])})

(defn hiccup-render-cljs-base
  "Hiccup rendering (no traditional template)"
  [& [params]]
  (content-type
   (ok
    (hp/html5
     (boiler-header params)
     (boiler-plate)
     (anti-forgery-element)
     (cljs-app-base)
     (cljs-includes)))
   "text/html; charset=utf-8"))

(defn generate-leave-row [r]
  [:div.row
   [:div.cell.date (r :request-date)]
   [:div.cell.name (str (r :surname) ", " (r :given-name))]
   [:div.cell.title (r :project-title)]
   [:div.cell.leave-date (r :project-start-date)]
   [:div.cell.pdf "PDF TODO"]])

(defn requests-page
  "Generate the page of requests"
  [requests]
  ;; TODO generate any shared header
  ;; Generate the table of requests with info and links to pdf, etc
  (let [requests-table [:div.table
                        [:div.row.headers
                         [:div.cell.date "Submission Date"]
                         [:div.cell.name "Applicant"]
                         [:div.cell.title "Project Title"]
                         [:div.cell.title "Project Start"]
                         [:div.cell.file "Fi"]]
                        (for [r requests]
                          (generate-leave-row r))]]
    [:div.content
     requests-table]))

(defn render-boilerplate []
  [:head [:title "BYU Humanities Funding"]
   ;;(hp/include-css "assets/style.css")
   ])

(defn render-sediment []
  ;;(hp/include-js "/assets/jquery/jquery.min.js")
  ;; [:script {:type "text/javascript"} "goog.require('turbo_tenure.app')"]
  )

(def pages
  {:dean-requests requests-page})

(defn render
  "Create boilerplate and then insert the content for the keyed page"
  [page-key & [args]]
  (let [page-fn (page-key pages)]
    (content-type
     (ok
      (hp/html5
       (render-boilerplate)
       ;; main page content
       (page-fn args)
       ;; insert styles, scripts, etc
       (render-sediment)))
     "text/html; charset=utf-8")))
