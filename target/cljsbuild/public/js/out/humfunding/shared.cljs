(ns humfunding.shared
  "Shared functionality between the funding types"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            ))

(defn hum-link [target content]
  [:a.btn.btn-primary {:href target} content])

(defn nav-link [uri title page collapsed?]
  [:li.nav-item
   {:class (when (= page (session/get :page)) "active")}
   [:a.nav-link
    {:href uri
     :on-click #(reset! collapsed? true)} title]])

(defn navbar []
  (let [collapsed? (r/atom true)]
    (fn []
      [:nav.navbar.navbar-light.bg-faded
       [:button.navbar-toggler.hidden-sm-up
        {:on-click #(swap! collapsed? not)} "☰"]
       [:div.collapse.navbar-toggleable-xs
        (when-not @collapsed? {:class "in"})
        [:a.navbar-brand {:href "#/"} "BYU Humanities Funding"]
        [:ul.nav.navbar-nav
         [nav-link "#/" "Home" :home collapsed?]]]])))

(defn make-list [type & items]
  (into [type] (for [i items] [:li i])))

(defn make-sign-in
  "The `sign in' link that triggers & populates the initial form"
  [app-type]
  [:a.btn.btn-primary.signin {:href "#"} "Sign In"])
