(ns humfunding.shared
  "Shared functionality between the funding types"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            ))

(def USERNAME (r/atom (-> (.getElementById js/document "netid") .-value)))

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
        [:a.navbar-brand {:href "http://humanities.byu.edu"}
         [:img.pull-left {:src "img/humanities-logo.png"
                          :alt "BYU Humanities Funding"}]]
        [:ul.nav.navbar-nav
         [nav-link "#/" "Home" :home collapsed?]
         [:li.nav-item.registered
          [:span.nav-link {:href "http://cas.byu.edu/logout"} "Logged in as"]
          [:span.username @USERNAME]]]]])))

(defn make-list [type & items]
  (into [type] (for [i items] [:li i])))

(defn make-sign-in
  "The `sign in' link that triggers & populates the initial form"
  [app-type]
  [:a.btn.btn-primary.signin {:href "#"} "Sign In"])

(defn busy-indicator 
  "Make a css-animated busy indicator"
  [num-circles]
  (let [circle-class "f_circleG"]
    (into [:div#floatingCirclesG]
          (for [n (range num-circles)]
            [:div {:class circle-class
                   :id (str "frotateG_" n)}]))))
