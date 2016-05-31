(ns humfunding.leave
   (:require [reagent.core :as r]
             [reagent.session :as session]
             [secretary.core :as secretary :include-macros true]
             [ajax.core :refer [GET POST]]
             [humfunding.shared :refer [hum-link nav-link navbar busy-indicator]]))

(defonce requests (r/atom []))
(def last-sorted-by (r/atom nil))
(def table-busy (r/atom nil))
(defonce request-title (r/atom nil))
(defonce selected-request-option (r/atom 0)) ;; TODO call this from somewhere to get persistence on our list

(defn go-to-leave-page [e]
  (let [p (secretary/get-config :prefix)
        ls (.getElementById js/document "leave-selector")
        val (.-value ls)
        url (str p "/leave/" val)
        si (.-selectedIndex ls)
        content  (-> ls .-options (aget si) .-text)]
    (reset! request-title content)
    (reset! selected-request-option si)
    (set! (-> js/document .-location .-href) url)))

(defn leave-request-dropdown
  "Leave Request Selector"
  []
  (let [option-map [ ; "url" "title"
                    ["" ""]
                    ["all" "All"]
                    ["dean" "College"]
                    ["ane" "Asian & Near Eastern"]
                    ["cal" "Comparative Arts & Letters" ]
                    ["english" "English"]
                    ["frenital" "French & Italian"]
                    ["germruss" "German & Russian"]
                    ["linguistics" "Linguistics & English Language"]
                    ["philosophy" "Philosophy"]
                    ["spanport" "Spanish & Portuguese"]]]
    (into [:select#leave-selector {:on-change go-to-leave-page}]
          (for [[k n] option-map] [:option {:value k} n]))))

(defn download-script [element-id & refresh]
  (let [uri (str "/pdf/" element-id)
        refresh-uri (str uri "?refresh=true")]
    (set! (.-location js/window) (if-not refresh uri refresh-uri)))) ;; TODO make this secure (so links can't be emailed)

(defn download-link [submission-id]
  (let [url (str "/pdf/" submission-id)
        label "PDF"]
    [:span.pdf-links
     [:a {:on-click #(download-script submission-id)}
      label]
     [:a {:on-click #(download-script submission-id :refresh)}
      [:i.fa.fa-refresh]]]))

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
  (when force-refresh (reset! requests nil))
  (reset! table-busy (busy-indicator 8))
  (POST (str "/leave/" category)
        {:handler #(do                     
                     (reset! requests %)
                     (reset! table-busy nil))}))

(defn leave-page []
  [:div.container
   [:div.jumbotron
    [:h1 (str @request-title " Professional Leave Requests")]
    [:p "Requests submitted at the college-level for professional leave."]]
   [:div.row
    [:div.col-md-12.leave-requests
     (leave-request-dropdown)
     (format-requests)]
    ]
   [:div.table-busy ;; TODO make this a shadow box that can dim the screen, for use with pdf generation time
    @table-busy]])
