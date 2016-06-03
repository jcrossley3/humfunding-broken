(ns humfunding.authentication
  (:require 
   [humfunding.config :refer [env]]))

;; TODO more sophisticated validation
(defn validate [user]
  (let [valid-users #{"torysa" "sh8"}
        ;valid-users (-> env :authorized-netids)
        ]
    (if (and user
             (valid-users user))
      true false)))
