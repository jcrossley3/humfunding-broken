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

;#(.log js/console (-> (.getElementById js/document "leave-selector") .-value))

(defn home-page []
  [:div.container
   [:div.jumbotron
    [:h1 "BYU Humanities Funding Administration"]
    [:p "Welcome to the BYU Humanities College funding administration website. Here you can view the submissions for each category."]]
   [:div.row.requests.leave-requests
    [:h3 "Leave Requests"]
    [:p "Select the Leave Requests you would like to browse"]
    (leave/leave-request-dropdown)
    ]
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
  (leave/get-requests category :init)
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
