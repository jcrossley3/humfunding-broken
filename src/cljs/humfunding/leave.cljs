(ns humfunding.leave
   (:require [reagent.core :as r]
             [reagent.session :as session]
             [ajax.core :refer [GET POST]]
             [humfunding.shared :refer [hum-link nav-link navbar busy-indicator]]))

(defonce requests (r/atom []))
(def last-sorted-by (r/atom nil))
(def table-busy (r/atom nil))

(defn download-script [element-id]
  (let [uri (str "/pdf/" element-id)]
    (set! (.-location js/window) uri)))

(defn download-link [submission-id]
  (let [url (str "/pdf/" submission-id)
        label "PDF"]
    [:a {:on-click #(download-script submission-id)}
     label
     ]))

(defn generate-leave-row [r]
  [:div.row
   [:div.cell.date (r :request-date)]
   [:div.cell.name (str (r :surname) ", " (r :given-name))]
   [:div.cell.title (r :project-title)]
   [:div.cell.leave-date (r :project-start-date)]
   [:div.cell.pdf (download-link (r :submission-id))]
   ])

(defn sort-request [item]
  (let [sort-key (-> item .-target .-id keyword)]
    (if (= sort-key @last-sorted-by)
      ;; sort reverse, then clear last-sorted-by
      (do
        (.log js/console (str "Reversing on " sort-key))
        (swap! requests reverse)
        (reset! last-sorted-by nil))
      (do
        (.log js/console (str "Sorting on " sort-key))
        (swap! requests #(sort-by sort-key %))
        (reset! last-sorted-by sort-key))
      )))

(defn header-link [key-name text]
  [:a {:id key-name
       :on-click sort-request}
   text])

(defn format-requests []
  (if (not (empty? @requests))
    (let [table-skeleton [:div.table.col-md-12
                          [:div.row.headers
                           [:div.cell.date (header-link "request-date" "Submission Date")]
                           [:div.cell.name (header-link "surname" "Applicant")]
                           [:div.cell.title (header-link "project-title" "Project Title")]
                           [:div.cell.leave-date (header-link "project-start-date" "Project Start")]
                           [:div.cell.pdf "Form"]]]
          ]
      (into table-skeleton (for [r @requests] (generate-leave-row r))))
    (.log js/console "Requests is empty")))

(defn get-requests [category & [force-refresh]]
  (reset! table-busy (busy-indicator 8))
  (POST (str "/leave/" category)
        {:handler #(do                     
                     (reset! requests %)
                     (reset! table-busy nil))}))

(defn leave-page []
  [:div.container
   [:div.jumbotron
    [:h1 "College Professional Leave Requests"]
    [:p "Requests submitted at the college-level for professional leave."]]
   [:div.row
    [:div.col-md-12.leave-requests
     "Right now only College Leave submissions are available."
     (format-requests)]
    ]
   [:div.table-busy ;; TODO make this a shadow box that can dim the screen, for use with pdf generation time
    @table-busy]])
