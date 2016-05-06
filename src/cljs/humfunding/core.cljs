(ns humfunding.core
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [humfunding.ajax :refer [load-interceptors!]]
            [ajax.core :refer [GET POST]]
            [humfunding.shared :refer [hum-link nav-link navbar]]
            [humfunding.leave :as leave])
  (:import goog.History))

(defn home-page []
  [:div.container
   [:div.jumbotron
    [:h1 "BYU Humanities Funding Administration"]
    [:p "Welcome to the BYU Humanities College funding administration website. Here you can view the submissions for each category."]]
   [:div.row
    [:div.col-md-12.funding-type
     "Right now only College Submissions are available."
     [:div.button-holder
      [:a.btn.btn-inactive {:href "#"} "College Research Requests"]]
     [:div.button-holder
      [:a.btn.btn-inactive {:href "#"} "College Travel Requests"]]
     [:div.button-holder
      [:a.btn.btn-primary {:href "#/leave/dean"} "College Leave Requests"]]
     ]]
   ])

(def pages
  {:home #'home-page
   :leave #'leave/leave-page})

(defn page []
  [(pages (session/get :page))])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute home-route "/" []
  (session/put! :page :home))

(secretary/defroute leave-route "/leave/:category" [category]
  (session/put! :category category)
  (leave/get-requests category)
  (session/put! :page :leave))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          HistoryEventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app
;; (defn fetch-docs! []
;;   (GET (str js/context "/docs") {:handler #(session/put! :docs %)}))

(defn mount-components []
  (r/render [#'navbar] (.getElementById js/document "navbar"))
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)
  ;; (fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
