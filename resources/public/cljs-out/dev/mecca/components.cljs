(ns ^:figwheel-hooks mecca.components
  (:require [mecca.music :as music]
            [mecca.subs :as subs]
            [reagent.core :as r]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events :refer [mouse-pos mouse-down-handler selected]]
            [mecca.music.melody :as melody]
            [mecca.music.scale :as scale]
   [mecca.music.mario :refer [editor-bg]]))

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

(defn bar-line-solid []
  [:line {:transform "scale (2.5,2.5) translate(2,-2.8)"
          :x1 11.625 :x2 11.625 :y1 6 :y2 17.2 :stroke "black"
          :stroke-width 0.1}])

(defn bar-line [x]
  [:line {:transform "scale (2.5,2.5) translate(4,-2.8)"
          :x1 x :x2 x :y1 5.5 :y2 18 :stroke "orange"
          :stroke-width 0.1
          :stroke-dasharray 0.15}])

(defn ending-bar []
  [:g {:transform "scale (2.5,2.5) translate(3,0.2)"}
   [:rect {:x 22.25 :y 3 :width 0.24 :height 11.25 :ry 0 :fill "black"}]
   [:line {:x1 22.125 :x2 22.125 :y1 3 :y2 14.25 :stroke "black"
           :stroke-width 0.1}]])

(defn ending-bar-repeat []
  [:g {:transform "scale (2.5,2.5) translate(3,0.2)"}
   [:rect {:x 22.25 :y 3 :width 0.24 :height 11.25 :ry 0 :fill "black"}]
   [:line {:x1 22.125 :x2 22.125 :y1 3 :y2 14.25 :stroke "black"
           :stroke-width 0.1}]
   [:circle {:cx 21.8 :cy 4.3 :r 0.14}]
   [:circle {:cx 21.8 :cy 4.9 :r 0.14}]
   [:circle {:cx 21.8 :cy 9.1 :r 0.14}]
   [:circle {:cx 21.8 :cy 9.7 :r 0.14}]
   [:circle {:cx 21.8 :cy 13.1 :r 0.14}]
   [:circle {:cx 21.8 :cy 13.7 :r 0.14}]])

(defn beat-line [x]
  [:line {:transform "scale (2.5,2.5) translate(4,-2.8)"
          :x1 x :x2 x :y1 5.5 :y2 18 :stroke "black"
          :stroke-width 0.03
          :stroke-dasharray 0.15}])

(defn eighth-note-flag []
    [:path {:transform "scale(0.007,-0.007)" :d "M179 -646c15 29 28.5449 55.0752 46 102c18.3213 49.2549 30 108.298 30 138c0 105 -80 173 -168 200c-18 5 -47 9 -87 16v190h22c8 0 33 -61 71 -95c4 -3 -2 3 61 -56c62 -58 122 -137 122 -241c0 -37.5245 -12.6807 -106.071 -35 -163 c-19.9111 -50.7861 -43 -99 -66 -132c-6 -5 -10 -7 -13 -7s-5 2 -5 5l4 10c1.17241 2.93103 13.7644 24.8111 18 33z"}])

(defn beam []
  [:polygon {:points "2981,475 3499,424 3499,484 2981,535"}])

(defn drum-hit [color [x y]]
  (let [mouseover? (r/atom false)]
    (fn []
      [:g {:transform (str "translate(" (+ 8.75 (* 6.88 x)) "," (- 25.0375 y) ") ")
           :visibility (if @mouseover?
                         "visible"
                         "hidden")
           :pointer-events "all"
           :on-mouse-over #(reset! mouseover? true)
           :on-mouse-out #(reset! mouseover? false)}
       [:path {:d "m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z"
               :fill color}]
       [:rect {:x (if (< y -8)
                    2.2 0)
               :y (if (< y -8)
                    -6.3
                    0.8)
               :height 5.5 :width 0.25
               :fill color}]])))

(defn quarter-note [color [x y]]
  (let [mouseover? (r/atom false)]
    (fn []
      [:g {:visibility (if (or @mouseover?
                            (= color "black"))
                         "visible"
                         "hidden")
           :pointer-events "all"
           :on-mouse-over #(reset! mouseover? true)
           :on-mouse-out #(reset! mouseover? false)
           :on-click
           (fn [e]
             (dispatch [:add-bass-note x y]))
           :transform (str "scale (1,1) translate(" (+ 8.875 (* 6.9 x)) "," (- 25.0375 y) ") ")}
       [:path {:d "m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z"
               :fill color}]
       [:rect {:x (if (or (< y 1)
                          (< 7 y 13))
                    2.15 0.02)
               :y (if (or (< y 1)
                          (< 7 y 13))
                    -7.1
                    0)
               :height 6.794 :width 0.25
               :fill color}]])))

(defn drum-clef []
  [:path {:transform "translate(2,33.3) scale(0.009, 0.009)"
          :d "M281-143h-80c-5 0-9 3-9 9v415c0 5 3 9 9 9h80c5 0 9-3 9-9v-415c0-5-3-9-9-9zM91-143h-80c-5 0-9 3-9 9v415c0 5 3 9 9 9h80c5 0 9-3 9-9v-415c0-5-3-9-9-9z" :fill "black"}])

(defn bass-clef []
  (fn []
    [:g {:transform "scale(0.0138,0.0138) translate(16,1596)"}
     [:path {:d "M287 14C289 78 260 138 216 182 161 237 91 270 18 294 7 298-6 292 9 285 38 272 69 261 95 241 154 206 205 146 218 76 225 32 223-12 212-56 205-87 183-118 148-122 117-129 84-118 62-96 55-89 44-72 47-54 60-65 60-63 71-67 95-78 128-63 135-36 141-10 137 23 110 36 84 50 47 43 31 16 7-28 20-87 60-116 99-149 157-151 205-133 254-116 282-65 287-17 287-6 287 5 287 14z"}]
     [:circle {:cx 340 :cy -60 :r 26}] [:circle {:cx 340 :cy 60 :r 26}]]))

(defn treble-clef []
    [:path {:transform "scale(0.026,0.026) translate(25,420)" :d "m87 95c-6 2-12 6-18 12-5 6-8 13-8 20 0 5 2 10 5 16 3 6 8 10 14 12 2 0 3 1 3 3 0 1-1 1-3 1-10-2-18-8-24-15-6-8-9-17-10-27 0-11 4-21 10-30 6-9 14-16 24-20l-7-38c-16 14-29 28-40 42-10 15-16 31-16 48 0 8 2 15 5 22 3 7 7 14 13 20 12 12 27 18 46 19 6 0 13-2 21-3l-16-83zm8-1 16 81c16-7 24-21 24-43-1-7-3-14-7-20-3-6-8-11-14-14-6-3-13-5-20-5zm-22-110c3-2 8-6 12-11 4-5 9-11 13-18 4-7 7-14 10-21 2-7 4-14 4-20 0-3 0-5-1-8 0-4-2-7-4-9-2-2-5-3-8-3-6 0-12 4-17 12-4 7-7 15-10 24-2 9-4 18-4 27 1 10 2 19 5 26zm-7 6c-5-17-7-35-8-52 0-11 1-22 3-32 2-10 5-18 9-26 4-7 8-13 14-17 5-3 8-5 10-5 1 0 3 1 4 1 1 1 2 3 4 5 13 18 19 39 19 65 0 12-2 24-5 35-3 12-8 23-14 33-6 10-13 19-22 27l9 42c5-1 8-1 10-1 8 0 15 2 22 5 7 3 12 8 17 14 5 6 8 12 11 20 2 7 4 15 4 23 0 12-3 24-10 34-7 10-16 18-30 23 1 5 2 13 5 22 2 10 4 17 5 23 1 6 1 11 1 17 0 8-2 16-6 22-4 7-10 12-17 15-7 4-14 5-23 5-12 0-22-3-30-10-9-7-13-15-14-27 0-5 1-10 4-14 2-4 5-8 9-11 4-3 8-4 13-5 4 0 8 1 12 3 4 2 7 5 9 9 2 4 3 8 3 13 0 6-2 12-6 16-4 4-10 7-16 7h-2c4 6 11 10 20 10 5 0 10-1 14-3 5-2 9-5 13-8 3-3 6-7 7-11 2-4 3-10 3-18 0-5-1-10-1-15-1-5-2-12-4-20-2-8-3-14-4-19-6 2-13 2-20 2-12 0-22-2-33-7-10-5-19-11-27-20-8-8-14-18-18-29-4-11-6-22-7-33 0-11 2-21 6-31 4-10 9-19 15-28 6-9 12-17 19-24 7-7 15-16 26-27z"}])

(defn quarter-note-button []
  (fn []
    [:g {:transform "translate(0,0)"}
     [:path {:d "M 69.920725,132.90712 V 102.20693 H 99.12731 128.3339 v 30.70019 30.70021 H 99.12731 69.920725 Z m 8.344738,24.12159 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z m -22.94803,-5.48217 v -1.09644 h 2.08619 2.08618 v -1.09643 -1.09644 h 1.0431 1.04308 v -18.63941 -18.6394 h -1.04308 -1.0431 v -1.09645 -1.09643 h -1.04309 -1.04309 V 121.94277 135.1 h -7.301647 -7.301647 v 1.09643 1.09645 h -2.086184 -2.086185 v 1.09643 1.09643 h -1.043092 -1.043092 v 1.09645 1.09642 H 81.39474 80.351648 v 2.19288 2.19287 h 1.043092 1.043093 v 2.19287 2.19287 h 1.043092 1.043092 v 1.09644 1.09644 h 8.344739 8.344734 z m -22.948027,-42.761 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z"}
      :style {:fill "#fab100" :stroke-width 0.26735786}]
     [:path {:d "m 64.40715,132.43769 v -32.0231 h 2.145117 2.145116 v -2.287373 -2.287361 h 30.031629 30.031628 v 2.287361 2.287373 H 98.729012 68.697383 v 32.0231 32.02313 H 66.552267 64.40715 Z m 21.451164,17.15525 v -1.14368 h -2.145117 -2.145115 v -1.14369 -1.14368 h -1.072559 -1.072558 v -2.28735 -2.28738 h 1.072558 1.072559 v -1.14367 -1.14369 h 1.072557 1.072558 v -1.14369 -1.14368 h 2.145117 2.145116 v -1.14368 -1.14368 h 7.507907 7.507913 v -13.72419 -13.7242 h 1.07255 1.07256 v 19.44262 19.44259 h -2.14511 -2.14512 v 1.14368 1.14369 h -3.217676 -3.217675 v 1.14368 1.14368 h -4.290232 -4.290233 z"}
      :style {:fill "#fa7500" :stroke-width 0.27688742}]]))

(defn play-button []
  (fn []
    [:svg 
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
              :style {:fill "#000000"}}]]]))

(defn play-button-on []
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
  (let [mouse-over (r/atom [nil nil])
        bassline (subscribe [:bassline])
        current-position (subscribe [:current-position])]
    (fn []
      [:g.staff {:transform "scale (7,7) translate(2.5,2)"
                 :view-box "0 0 450 160"}
       [:g#lines
        (doall
         (for [y (range 38)]
           ^{:key y}
           [:line {:x1 0 :x2 63.7 :y1 y :y2 y
                   :stroke "black"
                   :stroke-width (if (or (= y 30) (= y 18)) 0.06 0.2)
                   :stroke-dasharray (if (or (= y 30) (= y 18)) 0.25)
                   :visibility (if (and (> y 7)
                                        (even? y)
                                        (< y 42)) "visible" "hidden")
                   :pointer-events "all"
                   :stroke-linecap "butt" :stroke-linejoin "bevel"
                   :on-mouse-over #(reset! mouse-over y)
                   :on-mouse-out #(reset! mouse-over [nil nil])}]))]
       [:g#clefs
        [bass-clef]
        [treble-clef]
        [drum-clef]
        [bar-line 0]
        [beat-line 2.75]
        [beat-line 5.5]
        [beat-line 8.25]
        [bar-line-solid]
        [bar-line 11]
        [beat-line 13.75]
        [beat-line 16.5]
        [beat-line 19.25]
        [ending-bar-repeat]]
       (let [notes (set (for [x (range 8)
                              y (range -6 19)]
                          [x y]))]
         (doall (for [[x y] (clojure.set/difference notes (set (for [{:keys [time pitch]} @bassline]
                                                                [time (- pitch 48)])))]
                  ^{:key [x y]}
                  [quarter-note "gray" [x y]])))
       (doall (for [x (range 8)
                    y (range -11 -6 2)]
                ^{:key [x y]}
                  [drum-hit "gray" [x y]]))
       (doall (for [{:keys [time pitch]} @bassline]
                ^{:key [time pitch]}
                [quarter-note "black" [time (- pitch 48)]]))
        #_(doall (for [x (range 8)
                     :let [y (melody/chromatic->diatonic
                              (- (get @bassline x)
                                 (music/root-note-midi-num)))]
                     :when (number? y)]
                 ^{:key x}
                 [quarter-note (if (= @current-position (inc x)) "red" "black") [x y]]))
        ])))

(defn editor []
  (let [current-position (subscribe [:current-position])
        playing? (subscribe [:playing?])]
      (fn []
        [:svg {:view-box "0 0 480 420"}
         [editor-bg]
         [staff]
         (if @playing?
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
   [:img
    {:src "/images/mariodance72.gif"}]
   [:br]
   [editor]
   ;[:img
   ; {:src "/images/mariowalk72.gif"}]
   ;[:div.mario]
   [:button
    {:on-click
     (fn [e]
       (music/play-bassline!))}
    "Play Bassline"]
   [:p]
   ;[note-grid]
   ;[:p (str "Mouse-pos: " @mouse-pos)]
   [:p]
   [:p (str "Bassline: " @(subscribe [:bassline]))]
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