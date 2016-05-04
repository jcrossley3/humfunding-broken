(ns humfunding.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[humfunding started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[humfunding has shutdown successfully]=-"))
   :middleware identity})
