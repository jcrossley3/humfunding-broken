(ns humfunding.env
  (:require 
            [clojure.tools.logging :as log]
            [humfunding.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[humfunding started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[humfunding has shutdown successfully]=-"))
   :middleware wrap-dev})
