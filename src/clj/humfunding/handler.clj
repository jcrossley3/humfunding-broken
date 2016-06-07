(ns humfunding.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [humfunding.layout :refer [error-page]]
            [humfunding.routes.home :refer [home-routes]]
            [compojure.route :as route]
            [humfunding.env :refer [defaults]]
            [mount.core :as mount]
            [humfunding.middleware :as middleware]
            [luminus.logger :as logger]
            [clojure.tools.logging :as log]
            [humfunding.config :refer [env]]))

(mount/defstate init-app
                :start ((or (:init defaults) identity))
                :stop  ((or (:stop defaults) identity)))

(mount/defstate log
                :start (logger/init (:log-config env)))


(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []
  (doseq [component (:started (mount/start))]
    (log/info component "started")))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (doseq [component (:stopped (mount/stop))]
    (log/info component "stopped"))
  (shutdown-agents)
  (log/info "humfunding has shutdown!"))

(def app-routes
  (routes
    (-> #'home-routes
        (wrap-routes middleware/wrap-csrf)
        (wrap-routes middleware/wrap-formats))
    (route/not-found
      (:body
        (error-page {:status 404
                     :title "page not found"})))))


(defn app [] (middleware/wrap-base #'app-routes))
;(def app (middleware/wrap-base #'app-routes))
