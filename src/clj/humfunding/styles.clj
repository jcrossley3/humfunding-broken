(ns humfunding.styles
  "Garden styles following the BYU schemes"
  (:require [garden.def :refer [defstylesheet defstyles defkeyframes]]
            [garden.units :as u :refer [px]]
            [garden.color :as c :refer [hex->hsl hsl->hex]] ;:rename {hex->rgb hr, rgb->hex rh}]
            [garden.selectors :as s :refer [nth-child]]
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
(def nav-color {:text (ycolors :blue9)
                :hover (ycolors :blue7)})

(def nav-height 100)

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
   :color (ycolors :lightestblue)
   :line-height (px nav-height)})

(defn nav-hover-blue []
  (let [original (ycolor-obj :blue)]
    (assoc (nav-plain-blue) :background-color original)))

(defkeyframes f_fadeG
  [:from {:background-color (c/rgb 0 0 0)}]
  [:to {:background-color (c/rgb 255 255 255)}])

(defstyles main
  {:output-to "resources/public/css/humfunding.css"
   :vendors ["webkit" "moz" "o" "ms"]} ;; Not working with defstyles (must use (apply garden.core/css main))
  [:body
   {:background-color (ycolors :lightestblue)
    :font-size (px 16)
    :line-height 1.5}]
  [:div.navbar :nav.navbar (nav-plain-blue)
   [:a.navbar-brand {:color (ycolors :blue10)
                     :margin "0 5%"}
    [:img {:height (px nav-height)}]
    [:&:hover {:color "inherit"}]]
   [:ul.nav.navbar-nav [:li.nav-item
                        [:.nav-link {:color (nav-color :text)
                                     :display "inline-block"}]
                        [:a.nav-link:hover {:color (nav-color :hover)}]
                        [:.username {:display "inline-block"
                                     :padding-left "0.5em"
                                     :color (ycolors :lightestblue)}]]]]
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
   [:> [(nth-child :even) {:background-color (ycolors :blue10)}]]
   [:div.row {:display "table-row"}]
   [:div.headers {:font-weight "bold"
                  :text-decoration "underline"}]
   [:div.cell {:display "table-cell"
               :padding (px 10)
               :width "19%"}]
   [:a {:cursor "pointer"
        :padding "0 5px"}]]

  ;; Jumbotron styles
  [:h2.organization {:font-style "italic"
                     :text-decoration "underline"
                     ;:color (ycolors :blue10)
                     :font-weight 700}]

  ;; Circles for busy
  ;; http://cssload.net/en/spinners
  [:#floatingCirclesG {:position "relative"
                       :width (px 125)
                       :height (px 125)
                       :margin "auto"
                       }
   ^:prefix {:transform "scale(0.6)"}]
  [:.f_circleG {:position "absolute"
                :background-color "rgb(255,255,255)"
                :height (px 22)
                :width (px 22)}
   ^:prefix {:border-radius (px 12)
             :animation-name "f_fadeG"
             :animation-duration "1.2s"
             :animation-iteration-count "infinite"
             :animation-direction "normal"}]
  [:#frotateG_0 {:left (px 0)
                :top (px 51)}
   ^:prefix {:animation-delay "0.45s"}]
  [:#frotateG_1 {:left (px 15)
                :top (px 15)}
   ^:prefix {:animation-delay "0.6s"}]
  [:#frotateG_2 {:left (px 51)
                :top (px 0)}
   ^:prefix {:animation-delay "0.9s"}]
  [:#frotateG_3 {:right (px 15)
                :top (px 15)}
   ^:prefix {:animation-delay "0.9s"}]
  [:#frotateG_4 {:right (px 0)
                :top (px 51)}
   ^:prefix {:animation-delay "1.05s"}]    
  [:#frotateG_5 {:right (px 15)
                :bottom (px 15)}
   ^:prefix {:animation-delay "1.2s"}]
  [:#frotateG_6 {:left (px 51)
                :bottom (px 0)}
   ^:prefix {:animation-delay "1.35s"}]
  [:#frotateG_7 {:left (px 15)
                :bottom (px 15)}
   ^:prefix {:animation-delay "1.5s"}]
  f_fadeG
  )
