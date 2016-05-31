(ns humfunding.xml
  (require [hiccup.core :as hc]
           [net.cgrand.enlive-html :as en]))

(def _dean-respondent "Scott Miller")
(def leave-xml (clojure.java.io/file "resources/leave_template.xml"))
(en/deftemplate leave-template leave-xml [& [{:keys [request-date
                                                     netid
                                                     byuid
                                                     rank
                                                     cfs?
                                                     given-name
                                                     surname
                                                     chair-name
                                                     chair-email
                                                     chair-status
                                                     chair-response-date
                                                     chair-response-content
                                                     dept-key
                                                     dept-content
                                                     project-title
                                                     project-tech?
                                                     project-paper-accepted?
                                                     project-invited?
                                                     project-peer-reviewed?
                                                     project-priority
                                                     project-description
                                                     project-start-date
                                                     project-end-date
                                                     leave-time
                                                     leave-type
                                                     leave-last-leave
                                                     leave-last-leave-end
                                                     leave-last-leave-type
                                                     dean-status
                                                     dean-response-date
                                                     dean-respondent
                                                     dean-response-content
                                                     budget-requested
                                                     budget-supplies-amt
                                                     budget-supplies-content
                                                     budget-travel-amt
                                                     budget-travel-content
                                                     budget-salary-amt
                                                     budget-other-amt
                                                     budget-other-content
                                                     budget-wages-amt
                                        ; budget-yearly-breakdown
                                                     awarded-budget-total
                                                     awarded-budget-travel
                                                     awarded-budget-other
                                                     awarded-budget-salary
                                                     ]
                                              :or {project-tech? "no"
                                                   project-paper-accepted ""
                                                   project-invited? ""
                                                   project-peer-reviewed? ""
                                                   project-priority ""
                                                   project-description ""
                                                   project-start-date ""
                                                   project-end-date ""
                                                   leave-time "full-time"
                                                   leave-type "professional"
                                                   leave-last-leave ""
                                                   leave-last-leave-end ""
                                                   leave-last-leave-type ""
                                                   chair-status "yes"
                                                   chair-response-date "2016-04-18" ; "" ;; TODO
                                                   chair-response-content ""
                                                   dean-status "yes"
                                                   dean-response-date "2016-05-25" ;"" ;; TODO not available from Formstack API?
                                                   dean-respondent _dean-respondent ;; TODO not available from Formstack API?
                                                   dean-response-content "" ;; TODO not available from Formstack API?
                                                   budget-requested "$0.00"
                                                   budget-supplies-amt "$0.00"
                                                   budget-supplies-content ""
                                                   budget-travel-amt "$0.00"
                                                   budget-travel-content "$0.00"
                                                   budget-salary-amt "$0.00"
                                                   budget-other-amt "$0.00"
                                                   budget-other-content ""
                                                   budget-wages-amt "$0.00"
                                        ; budget-yearly-breakdown "$"
                                                   awarded-budget-total "$0.00"
                                                   awarded-budget-travel "$0.00"
                                                   awarded-budget-other "$0.00"
                                                   awarded-budget-salary "$0.00"}}
                                             ]]
  [:fundingRequest] (en/set-attr "requestDate" request-date)
  [:fundingRequest :requestor] (en/set-attr "netid" netid
                                            "byuid" byuid
                                            "rank" rank
                                            "cfs" cfs?)
  [:fundingRequest :requestor :givenName] (en/content given-name)
  [:fundingRequest :requestor :surname] (en/content surname)
  [:fundingRequest :requestor :department] (en/set-attr "chair" chair-name
                                                        "chair_email" chair-email
                                                        "key" dept-key)
  [:fundingRequest :requestor :department] (en/content (or dept-content
                                                           dept-key))
  [:fundingRequest :project] (en/set-attr "title" project-title
                                          "technology" project-tech?
                                          "paper_accepted" project-paper-accepted?
                                          "invited" project-invited?
                                          "peer_reviewed" project-peer-reviewed?
                                          "priority" project-priority)
  [:fundingRequest :project :description] (en/content project-description)
  [:fundingRequest :project :startDate] (en/set-attr "value" project-start-date)
  [:fundingRequest :project :endDate] (en/set-attr "value" project-end-date)
  [:fundingRequest :project :leaveDetails] (en/set-attr "time" leave-time
                                                        "type" leave-type
                                                        "lastleave" leave-last-leave
                                                        "lastleaveend" leave-last-leave-end
                                                        "lastleavetype" leave-last-leave-type)
  [:fundingRequest :approval :deaneryResponse] (en/set-attr "status" dean-status
                                                            "responseDate" dean-response-date
                                                            "resp" dean-respondent)
  [:fundingRequest :approval :deaneryResponse] (en/content dean-response-content)
  [:fundingRequest :approval :chairResponse] (en/set-attr "status" chair-status
                                                  "responseDate" chair-response-date
                                                  "resp" chair-name)
  [:fundingRequest :approval :chairResponse] (en/content chair-response-content)
  [:fundingRequest :budget :requestedBudget] (en/set-attr "total" budget-requested) ;; TODO
  [:fundingRequest :budget :requestedBudget :supplies] (en/set-attr "amt" budget-supplies-amt)
  [:fundingRequest :budget :requestedBudget :supplies] (en/content budget-supplies-content)
  [:fundingRequest :budget :requestedBudget :travel] (en/set-attr "amt" budget-travel-amt)
  [:fundingRequest :budget :requestedBudget :travel] (en/content budget-travel-content)
  [:fundingRequest :budget :requestedBudget :salary] (en/set-attr "amt" budget-salary-amt)
  [:fundingRequest :budget :requestedBudget :other] (en/set-attr "amt" budget-other-amt)
  [:fundingRequest :budget :requestedBudget :other] (en/content budget-other-content)
  [:fundingRequest :budget :requestedBudget :wages] (en/set-attr "amt" budget-wages-amt)
  ;; [:fundingRequest :budget :requestedBudgetBreakdown] (en/set-attr "amt" budget-wages-amt) ;; TODO
  [:fundingRequest :budget :awardedBudget] (en/set-attr "total" awarded-budget-total)
  [:fundingRequest :budget :awardedBudget :travel] (en/set-attr "amt" awarded-budget-travel)
  [:fundingRequest :budget :awardedBudget :other] (en/set-attr "amt" awarded-budget-other)  
  [:fundingRequest :budget :awardedBudget :salary] (en/set-attr "amt" awarded-budget-salary))

(defn generate-xml [val-map]
  (->> val-map leave-template (apply str)))

(defn output-xml
  "create file from output of generate-xml"
  [xml out]
  (spit out xml))
