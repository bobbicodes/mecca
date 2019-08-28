(ns ^:figwheel-hooks mecca.components
  (:require [mecca.music :as music]
            [mecca.subs :as subs]
            [reagent.core :as r]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events :refer [mouse-pos mouse-down-handler selected]]
            [mecca.music.melody :as melody]
            [mecca.music.scale :as scale]
            [mecca.mario :refer [editor-bg mario]]))

(defn scale-picker []
  [:label
   "Scale: "
   [:select
    {:value @(subscribe [:scale])
     :on-change
     (fn [e]
       (.preventDefault e)
       (dispatch [:set-scale (-> e .-target .-value)]))}
    (doall
     (for [scale (keys music/scales)]
       ^{:key scale}
       [:option scale]))]])

(defn key-picker []
  [:label " Key: "
   [:select {:value @(subscribe [:key])
             :on-change
             (fn [e]
               (.preventDefault e)
               (dispatch [:set-key (-> e .-target .-value)]))}
    (for [note music/notes]
      ^{:key note}
      [:option note])]])

(defn octave-input []
  [:label " Octave: "
   [:input
    {:style {:width "6%"
             :background-color "lightgray"}
     :type "number"
     :value @(subscribe [:octave])
     :on-change (fn [e]
                  (.preventDefault e)
                  (dispatch [:set-octave (-> e .-target .-value)]))}]])

(defn tempo-input []
  [:label " Tempo: "
   [:input
    {:style {:width "8%"
             :background-color "lightgray"}
     :type "number"
     :value @(subscribe [:tempo])
     :on-change (fn [e]
                  (.preventDefault e)
                  (dispatch [:set-tempo
                             (-> e .-target .-value)]))}]])

(defn brace []
  [:path {:transform "scale (2,2.15) translate (0,1.95)"
          :d "m 0.792,10.271 c 0,1.044 -0.408,2.064 -0.408,3.06 0,0.54 0.12,1.044 0.516,1.44 0.06,0.06 -0.036,0.156 -0.096,0.096 -0.528,-0.54 -0.708,-1.248 -0.708,-2.004 0,-1.068 0.432,-2.112 0.432,-3.12 0,-0.54 -0.132,-1.044 -0.516,-1.44 C 0,8.291 0,8.291 0,8.279 0,8.267 0,8.267 0.012,8.255 c 0.384,-0.396 0.516,-0.9 0.516,-1.44 0,-1.008 -0.432,-2.052 -0.432,-3.12 0,-0.756 0.18,-1.464 0.708,-2.004 0.06,-0.06 0.156,0.036 0.096,0.096 -0.396,0.396 -0.516,0.9 -0.516,1.44 0,0.996 0.408,2.016 0.408,3.06 0,0.744 -0.18,1.452 -0.696,1.992 0.516,0.54 0.696,1.248 0.696,1.992 z"}])

(defn bar-line [x]
  [:line {:transform "translate(3.825,-0.09)"
          :x1 x :x2 x :y1 8 :y2 36.19 :stroke "black"
          :stroke-width 0.35}])

(defn bar-line-dotted [x]
  [:line {:transform "translate(14,0)"
          :x1 x :x2 x :y1 6 :y2 38 :stroke "orange"
          :stroke-width 0.25
          :stroke-dasharray 0.5}])

(defn beat-line [x]
  [:line {:transform "translate(14,0)"
          :x1 x :x2 x :y1 6 :y2 38 :stroke "black"
          :stroke-width 0.075
          :stroke-dasharray 0.5}])

(defn ending-bar []
  [:g {:transform "translate(1.2,0.06)"}
   [:rect {:x 22.25 :y 3 :width 0.24 :height 11.25 :ry 0 :fill "black"}]
   [:line {:x1 22.125 :x2 22.125 :y1 3 :y2 14.25 :stroke "black"
           :stroke-width 0.1}]])

(defn ending-bar-repeat []
  [:g 
   [:rect {:x 62.5 :y 8 :width 1 :height 28 :ry 0 :fill "black"}]
   [:line {:x1 61.8 :x2 61.8 :y1 8 :y2 36 :stroke "black"
           :stroke-width 0.35}]
   [:circle {:cx 60.8 :cy 11 :r 0.4}]
   [:circle {:cx 60.8 :cy 13 :r 0.4}]
   [:circle {:cx 60.8 :cy 23 :r 0.4}]
   [:circle {:cx 60.8 :cy 25 :r 0.4}]
   [:circle {:cx 60.8 :cy 33 :r 0.4}]
   [:circle {:cx 60.8 :cy 35 :r 0.4}]])

(defn eighth-note-flag []
    [:path {:transform "scale(0.007,-0.007)" :d "M179 -646c15 29 28.5449 55.0752 46 102c18.3213 49.2549 30 108.298 30 138c0 105 -80 173 -168 200c-18 5 -47 9 -87 16v190h22c8 0 33 -61 71 -95c4 -3 -2 3 61 -56c62 -58 122 -137 122 -241c0 -37.5245 -12.6807 -106.071 -35 -163 c-19.9111 -50.7861 -43 -99 -66 -132c-6 -5 -10 -7 -13 -7s-5 2 -5 5l4 10c1.17241 2.93103 13.7644 24.8111 18 33z"}])

(defn beam []
  [:polygon {:points "2981,475 3499,424 3499,484 2981,535"}])

(defn kill-note []
  [:path {:d "M 0.75,0.3 L 1.75,-0.7 M 1.75,0.3 L 0.75,-0.7"
          :stroke "red"
          :stroke-linecap "round"
          :stroke-width 0.35}])

(defn drum-hit [color [x y]]
    (let [mouseover? (r/atom false)]
      (fn [color [x y]]
        [:g {:on-mouse-over #(reset! mouseover? true)
             :on-mouse-out #(reset! mouseover? false)
             :on-click #(dispatch [:remove-note x y])
             :transform (str "translate(" (+ 12.78 (* 6 x)) "," (inc y) ") ")}
         [:path {:d "m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z"
                 :fill color}]
         [:rect {:x (if (< 31 y)
                      2.2 0)
                 :y (if (< 31 y)
                      -6.3
                      0.8)
                 :height 5.5 :width 0.25
                 :fill color}]
         (if @mouseover?
           [kill-note])])))

(defn ledger-line [[x y]]
  [:rect {:transform (str "scale (1,1) translate(" (+ 8.875 (* 6.9 x)) "," (- 25.0375 y) ") ")
          :height 0.2
          :width 2.085
          :ry 0.1
          :x x :y y}])

(defn quarter-note [color [x y]]
  (let [mouseover? (r/atom false)]
    (fn [color [x y]]
      [:g {:on-mouse-over #(reset! mouseover? true)
           :on-mouse-out #(reset! mouseover? false)
           :on-click #(dispatch [:remove-note x y])
           :transform (str "translate(" (+ 13 (* 6 x)) "," (inc y) ") ")}
       [:path {:d "m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z"
               :fill color}]
       [:rect {:x (if (or (< 11 y 18) (< 23 y))
                    2.15 0.02)
               :y (if (or (< 11 y 18) (< 23 y))
                    -7.1 0)
               :height 6.794 :width 0.25
               :fill color}]
       (if (or (= y -5)
               (= y 7)
               (= y 19))
         [:rect {:transform "scale (1.75,1.75)"
                 :height 0.2
                 :width 2.085
                 :ry 0.1
                 :x -0.334 :y -0.1}])
       (if @mouseover?
        [kill-note])])))

(defn drum-clef []
  [:path {:transform "translate(4,33.334)"
          :d "M2.5-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1zM.8-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1z" :fill "black"}])

(defn bass-clef []
  (fn []
    [:g {:transform "translate(2.5,22)"}
     [:path {:d "M4 .2C4 1.1 3.6 1.9 3 2.5 2.2 3.3 1.3 3.7.2 4.1.1 4.1-.1 4 .1 3.9.5 3.8 1 3.6 1.3 3.3 2.1 2.8 2.8 2 3 1 3.1.4 3.1-.2 2.9-.8 2.8-1.2 2.5-1.6 2-1.7 1.6-1.8 1.2-1.6.9-1.3.8-1.2.6-1 .6-.7.8-.9.8-.9 1-.9 1.3-1.1 1.8-.9 1.9-.5 1.9-.1 1.9.3 1.5.5 1.2.7 .6.6 .4.2 .1-.4.3-1.2.8-1.6 1.4-2.1 2.2-2.1 2.8-1.8 3.5-1.6 3.9-.9 4-.2 4-.1 4 .1 4 .2z"}]
     [:circle {:cx 4.5 :cy -1 :r 0.4}] [:circle {:cx 4.5 :cy 1 :r 0.4}]]))

(defn treble-clef []
    [:path {:transform "translate(2.65,10.5)"
            :d "m2.51 2.74c-.18.06-.34.18-.52.34-.14.18-.23.38-.23.58 0 .14.06 .29.14 .47.09 .18.23 .29.4 .34.06 0 .09.03 .09.09 0 .03-.03.03-.09.03-.29-.06-.52-.23-.69-.43-.18-.23-.26-.49-.29-.78 0-.32.11-.61.29-.87.18-.26.4-.47.69-.58l-.2-1.1c-.47.4-.83.81-1.16 1.21-.29.43-.47.9-.47 1.39 0 .23.06 .43.14 .63.09 .2.2 .4.38 .58.34 .34.78 .52 1.33.54 .18 0 .38-.06.61-.09l-.47-2.4zm.23-.03.47 2.34c.47-.2.69-.61.69-1.24-.03-.2-.09-.4-.2-.58-.09-.18-.23-.32-.4-.4-.18-.09-.38-.14-.58-.14zm-.63-3.18c.09-.06.23-.18.34-.32.11-.14.26-.32.38-.52.11-.2.2-.4.29-.61.06-.2.11-.4.11-.58 0-.09 0-.14-.03-.23 0-.11-.06-.2-.11-.26-.06-.06-.14-.09-.23-.09-.18 0-.34.11-.49.34-.11.2-.2.43-.29.69-.06.26-.11.52-.11.78 .03.29 .06.54 .14.76zm-.2.18c-.14-.49-.2-1.01-.23-1.5 0-.32.03-.63.09-.92.06-.29.14-.52.26-.76.11-.2.23-.38.4-.49.14-.09.23-.14.29-.14.03 0 .09.03 .11.03 .03.03 .06.09 .11.14 .38.52 .54 1.12.54 1.88 0 .34-.06.69-.14 1.01-.09.34-.23.67-.4.96-.18.29-.38.54-.63.78l.26 1.21c.14-.03.23-.03.29-.03.23 0 .43.06 .63.14 .2.09 .34.23 .49.4 .14.18 .23.34 .32.58 .06.2 .11.43 .11.67 0 .34-.09.69-.29.98-.2.29-.47.52-.87.67 .03.14 .06.38 .14.63 .06.29 .11.49 .14.67 .03.18 .03.32 .03.49 0 .23-.06.47-.18.63-.11.2-.29.34-.49.43-.2.11-.4.14-.67.14-.34 0-.63-.09-.87-.29-.26-.2-.38-.43-.4-.78 0-.14.03-.29.11-.4.06-.11.14-.23.26-.32.11-.09.23-.11.38-.14.11 0 .23.03 .34.09 .11.06 .2.14 .26.26 .06.11 .09.23 .09.38 0 .18-.06.34-.18.47-.11.11-.29.2-.47.2h-.06c.11.18 .32.29 .58.29 .14 0 .29-.03.4-.09.14-.06.26-.14.38-.23.09-.09.18-.2.2-.32.06-.11.09-.29.09-.52 0-.14-.03-.29-.03-.43-.03-.14-.06-.34-.11-.58-.06-.23-.09-.4-.11-.54-.18.06-.38.06-.58.06-.34 0-.63-.06-.96-.2-.29-.14-.54-.32-.78-.58-.23-.23-.4-.52-.52-.83-.11-.32-.18-.63-.2-.96 0-.32.06-.61.18-.9.11-.29.26-.54.43-.81.18-.26.34-.49.54-.69.2-.2.43-.47.76-.78z"}])

(defn sharp [x y]
  [:path {:transform (str "translate(" x "," (+ 0.5 y) ")") :d "M.18.04V-.91l.4-.11v.95zM.98-.19.7-.11V-1.05l.28-.08v-.39l-.28.08V-2.42h-.11v1l-.4.12V-2.24h-.11v.98l-.28.08v.39l.28-.08v.95l-.28.08V.55L.08.47v.96h.11V.43l.4-.11v.94h.11V.29L.98.21Z"}])

(defn flat [x y]
  [:path {:d "m .94 1.62s-.06-1.2-.06-2c0-.32.02-.56.04-.64.08-.24.6-.68.88-.84.18-.1.36-.14.52-.14.2 0 .38.08.5.22.2.22.32.56.32.94 0 .36-.1.78-.34 1.2-.26.48-.84 1.12-1.44 1.5-.08.04-.14.06-.2.06-.18 0-.22-.2-.22-.3m-.7 1.78c.06.08.12.1.18.1s.12-.04.12-.04c.6-.34 1.08-.88 1.58-1.22 1.78-1.24 2.4-2.46 2.4-3.38 0-1.14-.88-1.86-1.8-1.92-.14 0-.28.02-.42.06-.22.06-.46.14-.68.28-.12.1-.34.28-.44.28-.04 0-.06 0-.1-.02-.14-.06-.22-.2-.22-.34.02-.44.14-5.24.14-5.64 0-.22-.18-.34-.38-.34-.28 0-.6.2-.62.56 0 0 .08 11.42.24 11.62"}])

(defn c-sharp-minor []
  [:g [sharp 6.6 8]
   [sharp 7.4 11]
   [sharp 8.2 7]
   [sharp 9 10]
   [sharp 9.8 13]
   [sharp 10.6 9]
   [sharp 11.4 12]])

(defn quarter-note-button []
    [:g {:transform "translate(0,0)"}
     [:path {:d "M 69.920725,132.90712 V 102.20693 H 99.12731 128.3339 v 30.70019 30.70021 H 99.12731 69.920725 Z m 8.344738,24.12159 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z m -22.94803,-5.48217 v -1.09644 h 2.08619 2.08618 v -1.09643 -1.09644 h 1.0431 1.04308 v -18.63941 -18.6394 h -1.04308 -1.0431 v -1.09645 -1.09643 h -1.04309 -1.04309 V 121.94277 135.1 h -7.301647 -7.301647 v 1.09643 1.09645 h -2.086184 -2.086185 v 1.09643 1.09643 h -1.043092 -1.043092 v 1.09645 1.09642 H 81.39474 80.351648 v 2.19288 2.19287 h 1.043092 1.043093 v 2.19287 2.19287 h 1.043092 1.043092 v 1.09644 1.09644 h 8.344739 8.344734 z m -22.948027,-42.761 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z"}
      :style {:fill "#fab100" :stroke-width 0.26735786}]
     [:path {:d "m 64.40715,132.43769 v -32.0231 h 2.145117 2.145116 v -2.287373 -2.287361 h 30.031629 30.031628 v 2.287361 2.287373 H 98.729012 68.697383 v 32.0231 32.02313 H 66.552267 64.40715 Z m 21.451164,17.15525 v -1.14368 h -2.145117 -2.145115 v -1.14369 -1.14368 h -1.072559 -1.072558 v -2.28735 -2.28738 h 1.072558 1.072559 v -1.14367 -1.14369 h 1.072557 1.072558 v -1.14369 -1.14368 h 2.145117 2.145116 v -1.14368 -1.14368 h 7.507907 7.507913 v -13.72419 -13.7242 h 1.07255 1.07256 v 19.44262 19.44259 h -2.14511 -2.14512 v 1.14368 1.14369 h -3.217676 -3.217675 v 1.14368 1.14368 h -4.290232 -4.290233 z"}
      :style {:fill "#fa7500" :stroke-width 0.27688742}]])

#_(defn play-button []
     [:g {:transform "scale (0.35,0.35) translate(285,893)"
          :on-click #(music/play-bassline!)}
      [:path {:d "m 17.333333,38.666667 v -24 H 26.666667 36 V 18 21.333333 h 6 6 V 24 26.666667 h 6 6 V 30 33.333333 h 2.666667 2.666666 V 36 38.666667 H 62.666667 60 V 36 33.333333 H 54 48 V 30 26.666667 H 42 36 V 24 21.333333 H 30 24 V 42 62.666667 h -3.333333 -3.333334 z"
              :style {:fill "#c4e5dd"}}]
      [:path {:d "m 24,54 v -3.333333 h 6 6 V 48 45.333333 h 6 6 V 42 38.666667 h 2.666667 2.666666 V 36 33.333333 H 56.666667 60 v 6 6 H 54 48 V 48 50.666667 H 42 36 V 54 57.333333 h -6 -6 z"
              :style {:fill "#cdcdcd"}}]
      [:path {:d "m 17.333333,90 v -3.333333 h 6 6 V 84 81.333333 h 6 6 V 78 74.666667 h 6 6 V 72 69.333333 h 6 6 V 66 62.666667 H 68.666667 72 V 60 57.333333 h 2.666667 2.666666 v -6 -6 H 80.666667 84 v 6 6 H 80.666667 77.333333 V 60 62.666667 H 74.666667 72 V 66 69.333333 H 68.666667 65.333333 V 72 74.666667 h -6 -6 V 78 81.333333 h -6 -6 V 84 86.666667 h -6 -6 V 90 93.333333 h -6 -6 z m 0,-18 V 69.333333 H 20.666667 24 V 66 62.666667 h 6 6 V 60 57.333333 h 6 6 V 54 50.666667 h 6 6 V 48 45.333333 h 2.666667 2.666666 V 48 50.666667 H 62.666667 60 V 54 57.333333 H 54 48 V 60 62.666667 H 42 36 V 66 69.333333 H 30 24 V 72 74.666667 h -3.333333 -3.333334 z m 12,-36 V 26.666667 H 32.666667 36 V 30 33.333333 h 6 6 V 36 38.666667 H 42 36 V 42 45.333333 h -3.333333 -3.333334 z"
              :style {:fill "#a4a4a4"}}]
      [:path {:d "M 17.333333,84 V 81.333333 H 20.666667 24 V 78 74.666667 h 6 6 V 72 69.333333 h 6 6 V 66 62.666667 h 6 6 V 60 57.333333 h 2.666667 2.666666 V 54 50.666667 H 68.666667 72 V 48 45.333333 h 2.666667 2.666666 v 6 6 H 74.666667 72 V 60 62.666667 H 68.666667 65.333333 V 66 69.333333 h -6 -6 V 72 74.666667 h -6 -6 V 78 81.333333 h -6 -6 V 84 86.666667 h -6 -6 z M 12,38.666667 V 2.6666667 h 6 6 V 6 9.3333333 h 6 6 V 12 14.666667 h 6 6 V 18 21.333333 h 6 6 V 24 26.666667 h 2.666667 2.666666 V 30 33.333333 H 68.666667 72 V 36 38.666667 H 68.666667 65.333333 V 42 45.333333 H 62.666667 60 V 48 50.666667 H 54 48 V 54 57.333333 H 42 36 V 60 62.666667 H 30 24 V 66 69.333333 H 20.666667 17.333333 V 72 74.666667 H 14.666667 12 Z M 24,60 v -2.666667 h 6 6 V 54 50.666667 h 6 6 V 48 45.333333 h 6 6 V 42 38.666667 h 2.666667 2.666666 V 36 33.333333 H 62.666667 60 V 30 26.666667 H 54 48 V 24 21.333333 H 42 36 V 18 14.666667 H 30 24 V 12 9.3333333 H 20.666667 17.333333 V 36 62.666667 H 20.666667 24 Z M 24,36 V 21.333333 h 6 6 V 24 26.666667 h 6 6 V 30 33.333333 h 2.666667 2.666666 V 36 38.666667 H 50.666667 48 V 42 45.333333 H 42 36 V 48 50.666667 h -6 -6 z m 12,6 v -3.333333 h 6 6 V 36 33.333333 H 42 36 V 30 26.666667 H 32.666667 29.333333 V 36 45.333333 H 32.666667 36 Z"
              :style {:fill "#727272"}}]
      [:path {:d "M 17.333333,78 V 74.666667 H 20.666667 24 V 72 69.333333 h 6 6 V 66 62.666667 h 6 6 V 60 57.333333 h 6 6 V 54 50.666667 h 2.666667 2.666666 v -6 -6 H 68.666667 72 v 6 6 H 68.666667 65.333333 V 54 57.333333 H 62.666667 60 V 60 62.666667 H 54 48 V 66 69.333333 H 42 36 V 72 74.666667 H 30 24 V 78 81.333333 h -3.333333 -3.333334 z"
              :style {:fill "#000000"}}]])

#_(defn play-button-on []
  (fn []
    [:svg 
     [:g {:transform "scale (0.35,0.35) translate(285,893)"}
      [:path {:d "M 12.655368,40.632764 V 25.966097 h 6 6 v 2.666667 2.666667 h 6 6 v 3.333333 3.333333 h 6 6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 z"
              :style {:fill "#f6f600"}}]
      [:path {:d "m 7.322035,64.632764 v -2.666667 h 2.6666667 2.6666663 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 6 6 v -3.333333 -3.333333 h 6 6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 H 9.9887017 7.322035 Z"
              :style {:fill "#f69300"}}]
      [:path {:d "m 7.322035,76.632764 v -2.666667 h 2.6666667 2.6666663 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 6 6 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 3.333334 3.333333 v -3.333333 -3.333333 h 6 6 v 3.333333 3.333333 h -3.333333 -3.333334 v 2.666667 2.666667 h -2.666666 -2.666667 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 z"
              :style {:fill "#727272"}}]
      [:path {:d "M 0.65536833,40.632764 V 7.2994306 H 6.6553683 12.655368 v 3.3333334 3.333333 h 6 6 v 2.666667 2.666667 h 6 6 v 3.333333 3.333333 h 6 6 v 2.666667 2.666667 h 3.333334 3.333333 v 3.333333 3.333333 h 2.666667 2.666666 v 2.666667 2.666667 h -2.666666 -2.666667 v 3.333333 3.333333 h -3.333333 -3.333334 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 H 6.6553683 0.65536833 Z m 11.99999967,24 v -2.666667 h 6 6 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 6 6 v -3.333333 -3.333333 h 3.333334 3.333333 v -2.666667 -2.666667 h -3.333333 -3.333334 v -3.333333 -3.333333 h -6 -6 v -2.666667 -2.666667 h -6 -6 v -3.333333 -3.333333 h -6 -6 V 16.632764 13.966097 H 9.9887017 7.322035 v 26.666667 26.666667 h 2.6666667 2.6666663 z"
              :style {:fill "#000000"}}]]]))

(defn basslines []
  (let [active (r/atom "Alberti bass")]
    (fn []
      [:div
       [:p "Try some well-known musical patterns: "]
       (doall (for [{:keys [name notes scales]} (seq music/basslines)]
                ^{:key name}
                [:button
                 {:on-click
                  (fn [e]
                    (dispatch [:set-scale (first scales)])
                    (dispatch [:set-bassline (vec (take 16 (cycle notes)))])
                    (reset! active name))
                  :style {:background-color (if (= name @active)
                                              "lightgreen" "violet")}}
                 name]))])))

(defn staff []
  (let [focused (r/atom [nil nil])
        lead (subscribe [:lead])
        bassline (subscribe [:bassline])
        drums (subscribe [:drums])
        current-position (subscribe [:current-position])]
    (fn []
      [:g.staff {:transform "translate(1.3,1) scale(0.96,0.96)"}
       [:g#lines
        (doall
         (for [y (range 38)]
           ^{:key y}
           [:line {:x1 2.25 :x2 63.5 :y1 y :y2 y
                   :stroke "black"
                   :stroke-width (if (or (= y 30) (= y 18)) 0.06 0.15)
                   :stroke-dasharray (if (or (= y 30) (= y 18)) 0.25)
                   :visibility (if (and (> y 7)
                                        (even? y)
                                        (< y 42)) "visible" "hidden")
                   :stroke-linecap "butt" :stroke-linejoin "bevel"}]))]
       [brace]
       [bar-line -1.68]
       [:g#clefs
        [bass-clef]
        [treble-clef]
        [drum-clef]
        ;[c-sharp-minor]
        [bar-line-dotted 0]
        [beat-line 6]
        [beat-line 12]
        [beat-line 18]
        [bar-line 31.5]
        [bar-line-dotted 24]
        [beat-line 30]
        [beat-line 36]
        [beat-line 42]
        [ending-bar-repeat]]
       (doall (for [x (range 8)
                    y (conj (range 31) 31 33 35)]
                ^{:key [x y]}
                [:g {:transform "translate(12.5,0)"}
                 [:rect {:x (* 6 x)
                         :y (+ 0.5 y)
                         :height 1 :width 3
                         :fill "gray"
                         :visibility "hidden"
                         :pointer-events "all"
                         :on-mouse-over (fn [e]
                                          (reset! focused [x y]))
                         :on-mouse-out #(reset! focused [nil nil])
                         :on-click #(dispatch [:add-note x y])}]
                 (if (= @focused [x y])
                   (if (< 30 y)
                     [:g {:transform (str "translate(" (+ 0.35 (* 6 x)) "," (inc y) ") ")
                          :pointer-events "none"}
                      [:path {:d "m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z"
                              :fill "gray"}]
                      [:rect {:x (if (< 31 y)
                                   2.2 0)
                              :y (if (< 31 y)
                                   -6.3
                                   0.8)
                              :height 5.5 :width 0.25
                              :fill "gray"}]]
                     [:g {:transform (str "translate(" (+ 0.5 (* 6 x)) "," (inc y) ")")
                          :pointer-events "none"}
                      [:path {:d "m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z"
                              :fill "gray"}]
                      [:rect {:x (if (or (< 11 y 18) (< 23 y))
                                   2.15 0.02)
                              :y (if (or (< 11 y 18) (< 23 y))
                                   -7.1 0)
                              :height 6.794 :width 0.25
                              :fill "gray"}]]))]))
       (doall (for [{:keys [time pitch]} @lead]
                ^{:key [time pitch]}
                [quarter-note "black" [time (- 77 pitch)]]))
       (doall (for [{:keys [time pitch]} @bassline]
                ^{:key [time pitch]}
                [quarter-note "black" [time (- 77 pitch)]]))
       (doall (for [{:keys [time pitch]} @drums]
                ^{:key [time pitch]}
                [drum-hit "black" [time (- 77 pitch)]]))
       #_(doall (for [x (range 8)
                      :let [y (melody/chromatic->diatonic
                               (- (get @bassline x)
                                  (music/root-note-midi-num)))]
                      :when (number? y)]
                  ^{:key x}
                  [quarter-note (if (= @current-position (inc x)) "red" "black") [x y]]))])))

(defn editor []
  (let [current-position (subscribe [:current-position])
        playing? (subscribe [:playing?])
        mario-sprite (subscribe [:mario-sprite])
        jump (subscribe [:mario-jump])]
      (fn []
        [:svg {:width "100%"
               :view-box "0 0 64 38"}
         (if (even? @mario-sprite)
           [mario :run1 (nth (into (reverse (range 32))
                                           (reverse (range 32)))
                                     (mod @mario-sprite 64))]
           [mario :run2 (nth (into (reverse (range 32))
                                      (reverse (range 32)))
                                (mod @mario-sprite 64))])
         [editor-bg]
         [staff]
         #_(if @playing?
           [play-button-on]
           [play-button])
         ;[quarter-note-button]
         ])))

(defn mecca []
  [:div
   [:div
    [:center
     [:h1 "MECCA Music Platform"]
     [:p "The Music Education, Composition & Creation Application"]
     [:p]
     [:div
      [scale-picker]
      [key-picker]
      [octave-input]
      [tempo-input]]
     [:p]]]
   [editor]
   [:button
    {:on-click
     (fn [e]
       (music/play-bassline!))}
    "Play Bassline"]
   [:p]
   ;[note-grid]
   ;[:p (str "Mouse-pos: " @mouse-pos)]
   [:p]
   [:p (str "Absolute time: " @(subscribe [:time]))]
   [:p (str "Lead: " @(subscribe [:lead]))]
   [:p (str "Bassline: " @(subscribe [:bassline]))]
   [:p (str "Drums: " @(subscribe [:drums]))]
   [:p (str "Mario Sprite: " @(subscribe [:mario-sprite]))]
   [:p (str @(subscribe [:scale])
            " scale from MIDI number "
            (music/root-note-midi-num) " ("
            @(subscribe [:key]) @(subscribe [:octave]) "):")]
   [:p #_(let [scale (subscribe [:scale])
               key (subscribe [:key])
               octave (subscribe [:octave])
               root (music/root-note-midi-num)
               intervals (subscribe [:bassline])
               scale-region (take 16 (scale/scale (get music/scales @scale) root))]
           (str (map #(nth scale-region (dec %)) @intervals)))]
   [:p (str "Tempo: " @(subscribe [:tempo]))]
    [:p (str "Current position: " @(subscribe [:current-position]))]])