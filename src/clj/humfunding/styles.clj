(ns humfunding.styles
  "Garden styles following the BYU schemes"
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :as u :refer [px]]
            [garden.color :as c :refer [hex->hsl hsl->hex]] ;:rename {hex->rgb hr, rgb->hex rh}]
            ))

;;;;;;;;;;;;;;;;;;;;
;; COLOR PALLETTE ;;
;;;;;;;;;;;;;;;;;;;;
(def ycolors
  {:blue "#002255"
   :blue2 "#001948"
   :blue3 "#002255"
   :blue4 "#003366"
   :blue5 "#114477"
   :blue6 "#336699"
   :blue7 "#628CB6"
   :blue8 "#91B2D2"
   :blue9 "#ABC8E4"
   :blue10 "#D1E4F6"
   :blue11 "#E0EDF9"
   :blue12 "#EFF6FC"
   :blue13 "#F9FCFE"
   :gray "#A7A9AC"
   :offwhite "#FFFFEE"
   :lightestblue "#F9FCFE"
   :midblue "#628CB6"})
(def ycolor-obj (into {} (for [[k v] ycolors] {k (hex->hsl v)}))) ;; Object version of ycolors
;; (def yretrieve-hex [key]
;;   "Get the hex number from the ycolor-obj"
;;   (hsl->hex (key ycolor-obj)))


;;;;;;;;;;;;
;; STYLES ;;
;;;;;;;;;;;;
(defn gradient [col1 col2]
  "Takes two color hex-strings, returns the 'linear-gradient' command that can be put into a :background element"
  (str "linear-gradient(" col1 ", " col2 ")")
  )

(defn nav-plain-blue []
  {:background-image "none"
   :background-color (ycolors :blue)
   :background (gradient (ycolors :blue) (ycolors :blue5))
   :color (ycolors :lightestblue)})

(defn nav-hover-blue []
  (let [original (ycolor-obj :blue)]
    (assoc (nav-plain-blue) :background-color original)))

(defstyles main
  {:output-to "resources/public/css/turbo-tenure.css"}
  [:body
   {:background-color (ycolors :lightestblue)
    :font-size (px 16)
    :line-height 1.5}]
  [:div.navbar :nav.navbar (nav-plain-blue)]
  [:.navbar-inverse [:.navbar-nav [:> [:.active [:> [:a (nav-plain-blue)]]]]]]
  [:.navbar-inverse [:.navbar-nav [:> [:.active [:> [:a:hover (nav-hover-blue)]]]]]]
  [:.jumbotron {:background-color (ycolors :blue)
                :background (gradient (ycolors :blue5) (ycolors :blue6))
                :color (ycolors :lightestblue)}]
  [:div.doc {:display "inline-block"
             :margin (px 3)}]
  [:div.funding-type {:text-align "center"}
   [:a.btn {:display "block"
            :width "20%"
            :margin "0.5em auto"}]]
  [:div.table {:display "table"
               :margin (px 10)}
   [:div.row {:display "table-row"}]
   [:div.headers {:font-weight "bold"
                  :text-decoration "underline"}
    [:a {:cursor "pointer"}]]
   [:div.cell {:display "table-cell"
               :padding (px 10)
               :width "19%"}]])
