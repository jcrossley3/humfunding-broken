(ns humfunding.authentication)

(def valid-users
  #{"torysa"
    "shasta" ;; TODO gert her real netid
    }) ;; TODO make this env

;; Presently, check against a whitelist to see if it's Shasta or me.
;; TODO more sophisticated validation
(defn validate [user]
  (if (and user
           (valid-users user))
    true false))
