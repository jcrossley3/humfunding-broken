(ns user
  (:require [mount.core :as mount]
            [humfunding.figwheel :refer [start-fw stop-fw cljs]]
            humfunding.core))

(defn start []
  (mount/start-without #'humfunding.core/repl-server))

(defn stop []
  (mount/stop-except #'humfunding.core/repl-server))

(defn restart []
  (stop)
  (start))


