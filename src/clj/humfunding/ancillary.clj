(ns humfunding.ancillary
  "Supplemental info and utils for humfunding"
  (:require [clj-time.core :as t]
            [clj-time.format :as f]))

(def chair-map { ;; TODO find all the name strings
                "Linguistics and English Language" {:name "Norman Evans"}
                "Spanish and Portuguese" {:name "David Phillip Laraway"
                                          :email "david_laraway@byu.edu"}
                "Asian and Near Eastern Languages" {:name "Dana Bourgerie"}
                })

(defn get-chair [skey]
  (let [chair (get chair-map skey)]
    (if chair chair {})))

(def translation-map {
                      "request date" :request-date
                      "abstract" :project-description                         
                      "type of leave?" :leave-type
                      "byu net id" :netid
                      "submission id" :submission-id

                      "other needs" :budget-other-amt                         
                      "percent of salary support" :budget-salary-amt
                      "travel" :budget-travel-amt
                      "travel funds usage" :budget-travel-content
                      "other funds usage" :budget-other-content
                      "supplies funds usage"  :budget-supplies-content
                      "supplies" :budget-supplies-amt
                      "outside funding" :budget-outside-funding
                      "wage funds usage" :budget-wages-amt
                      "requested salary support" :budget-salary-amt
                      "student wages" :budget-wages-amt
                      
                      "full- or part-time leave requested?" :leave-time
                      "date of last leave (start)" :leave-last-leave
                      "email" :email
                      ;; "chair email" ;; XXX will need a lookup? Not used in the PDF. 
                      ;; "chair awareness"  ;; XXX Default assumed. Not used in the PDF. 
                      "continuing faculty status?" :cfs?
                      "name" :given-name
                      ;; "recent copy of cv" ;; not in template now
                      "type of most recent leave?" :leave-last-leave-type                                                  
                      "date of last leave (end)" :leave-last-leave-end
                      ;; "attached narrative" ;; XXX
                      "title" :project-title
                      "department/unit" :dept-key
                      "byu employee id (from your id card)" :byuid
                      "current rank" :rank                         
                      "begin date" :project-start-date
                      "end date" :project-end-date
                      })

(defn make-budget-map
  "Logic (summing) on given budget values"
  [raw-map budget-fields]
  (let [budget-map (select-keys raw-map budget-fields)
        rt (->> budget-map
                vals;; get the nums
                (map #(clojure.string/replace % #"\$" ""));; strip the $ sign
                (map bigdec)
                (reduce +)
                str)]
    (merge budget-map {:budget-requested rt
                       :awarded-budget-total rt ; TODO shouldn't be assumed
                       })))
