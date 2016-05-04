(ns humfunding.app
  (:require [humfunding.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
