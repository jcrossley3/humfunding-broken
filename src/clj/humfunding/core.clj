(ns humfunding.core
  (:require [humfunding.handler :as handler]
            [luminus.repl-server :as repl]
            [luminus.http-server :as http]
            [humfunding.config :refer [env]]
            [clojure.tools.cli :refer [parse-opts]]
            [clojure.tools.logging :as log]
            [luminus.logger :as logger]
            [mount.core :as mount])
  (:gen-class))

(def cli-options
  [["-p" "--port PORT" "Port number"
    :parse-fn #(Integer/parseInt %)]])

(mount/defstate ^{:on-reload :noop}
                http-server
                :start
                (http/start
                 (-> env
                     (assoc :host "127.0.0.1" :handler handler/app)
                     (assoc :handler (handler/app))
                     (update :port #(or (-> env :options :port) %))))
                :stop
                (http/stop http-server))

(mount/defstate ^{:on-reload :noop}
                repl-server
                :start
                (when-let [nrepl-port (env :nrepl-port)]
                  (repl/start {:port nrepl-port}))
                :stop
                (when repl-server
                  (repl/stop repl-server)))


(defn stop-app []
  (doseq [component (:stopped (mount/stop))]
    (log/info component "stopped"))
  (shutdown-agents))

(defn start-app [args]
  (doseq [component (-> args
                        (parse-opts cli-options)
                        mount/start-with-args
                        :started)]
    (log/info component "started"))
  (logger/init (:log-config env))
  (.addShutdownHook (Runtime/getRuntime) (Thread. stop-app)))

(defn -main [& args]
  (start-app args))

;;;;;;;;;;;;;;;;;;;;
;; Relocate later ;;
;;;;;;;;;;;;;;;;;;;;
;; (get-student-data {:service :schedule :param (str personid "/20121")}) for schedule, default for records

;;; uses byu-ws lib
;; (defn get-student-data [&[{:keys [service param netid]
;;                            :or {service :records
;;                                 param "081270232" ;; TODO, for records this is personid, for schedule this is personid/yearterm
;;                                 netid "torysa" ;; TODO
;;                                 }}]]
;;   (let [service-url (str (SERVICE-URLS service) param)
;;         auth-header (get-http-authorization-header {:api-key "0e4KkLXo6NgilKScIjh4" ;; TODO this is the "humanities" one for the schedule
;;                                                     :shared-secret "4mGgi8E1a-bGd-4rMWOgsS_2-S33i104JHHDIiYp" ;; TODO this is the "humanities" one for the schedule
;;                                                     :key-type "API" ;; Unnecessary
;;                                                     :encoding-type "Nonce"
;;                                                     :url service-url
;;                                                     :request-body ""
;;                                         ; :actor "torysa" ;; TODO from CAS
;;                                                     :content-type "application/json"
;;                                                     :http-method "GET"
;;                                                     :actor-in-hash true
;;                                                     })]
;;     (client/get service-url {:headers {:authorization auth-header}})))
