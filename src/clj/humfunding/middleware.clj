(ns humfunding.middleware
  (:require [humfunding.env :refer [defaults]]
            [clojure.tools.logging :as log]
            [humfunding.layout :refer [*app-context* error-page]]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
            [ring.middleware.webjars :refer [wrap-webjars]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [humfunding.config :refer [env]]
            [ring.middleware.flash :refer [wrap-flash]]
            [immutant.web.middleware :refer [wrap-session]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [clj-cas-client.core :refer [cas]]
            [humfunding.byucas :as byucas]
            [humfunding.authentication :as auth])
  (:import [javax.servlet ServletContext]))

(def CAS {:server #(str "https://cas.byu.edu/cas")
          :service #(str (-> env :site-url))})

(defn wrap-cas [handler]
  (byucas/cas handler (:server CAS) (:service CAS)))

(defn print-handler [handler]
  (fn [request]
    (println "PRINTING HANDLER-------------" (str request))
    (handler request)))

(defn wrap-context [handler]
  (fn [request]
    (binding [*app-context*
              (if-let [context (:servlet-context request)]
                ;; If we're not inside a servlet environment
                ;; (for example when using mock requests), then
                ;; .getContextPath might not exist
                (try (.getContextPath ^ServletContext context)
                     (catch IllegalArgumentException _ context))
                ;; if the context is not specified in the request
                ;; we check if one has been specified in the environment
                ;; instead
                (:app-context env))]
      (handler request))))

(defn wrap-wrong-user [handler]
  (fn [req]
    (let [username (:username req)]
      (if-not (auth/validate username)
        (error-page {:status 500
                     :title "Authentication Error"
                     :message (str "Sorry, " username ", You don't have permission for access. If you believe this is an error, please contact the BYU Office of Digital Humanities.")})
        (handler req)))))

(defn wrap-internal-error [handler]
  (fn [req]
    (try
      (handler req)
      (catch Throwable t
        (log/error t)
        (error-page {:status 500
                     :title "Internal Error"
                     :message "If you continue receiving this error, please contact tory_anderson@byu.edu"})))))

(defn wrap-csrf [handler]
  (wrap-anti-forgery
    handler
    {:error-response
     (error-page
       {:status 403
        :title "Invalid anti-forgery token"})}))

(defn wrap-formats [handler]
  (let [wrapped (wrap-restful-format
                  handler
                  {:formats [:json-kw :transit-json :transit-msgpack]})]
    (fn [request]
      ;; disable wrap-formats for websockets
      ;; since they're not compatible with this middleware
      ((if (:websocket? request) handler wrapped) request))))

(defn wrap-base [handler]
  (-> ((:middleware defaults) handler)
      wrap-flash      
      wrap-wrong-user
      wrap-cas
      (wrap-session {:cookie-attrs {:http-only true}})
      (wrap-defaults
        (-> site-defaults
            (assoc-in [:security :anti-forgery] false)
            (dissoc :session)))
      wrap-webjars
      wrap-context
      wrap-internal-error
      ))
