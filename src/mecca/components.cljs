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

(defn cell [[x y]]
  (let [focused? (r/atom false)
        bassline (subscribe [:bassline])]
    (fn [[x y]]
      [:rect
       {:width 1 :height 0.75
        :x (+ 1 x) :y (+ (* y 0.75))
        :stroke-width 0.05
        :stroke "black"
        :fill (cond
                @focused?
                "violet"
                (clojure.string/includes? (music/midi-num->note y) "#")
                "pink"
                :else
                "white")
        :on-mouse-over
        #(reset! focused? true)
        :on-mouse-out
        #(reset! focused? false)
        :on-click #(dispatch [:set-bassline (assoc @bassline x y)])}])))

(defn note-label [y]
  [:text
   {:x 0 :width 1
    :y (+ 0.5 (* y 0.75)) :height 0.75
    :text-anchor "left"
    :font-size 0.5}
   (music/midi-num->note y)])

(defn grid-lines [[x y]]
  (let [line-focused? (r/atom false)
        notes @(subscribe [:bassline])
        note-endings (doall (for [{:keys [time duration pitch]} notes]
                              [(inc (+ time duration)) pitch]))]
    (fn [[x y]]
      [:line
       {:x1 x :y1 (- y) :x2 x :y2 (- y 1)
        :style {:cursor (if @line-focused? "ew-resize")}
        :stroke-width (if (= 1 (mod x 4)) 0.075 0.04)
        :on-mouse-over (fn [e] (swap! line-focused? not))
        :on-mouse-down mouse-down-handler
        :on-mouse-out (fn [e] (swap! line-focused? not))
        :stroke (cond
                  (contains? (set note-endings) [x y]) "red"
                  (= 1 (mod x 4)) "black"
                  :else "lightgrey")}])))

(defn note [[x y]]
  (let [focused? (atom false)
        bassline @(subscribe [:bassline])]
    (fn [[x y]]
      [:g
       [:rect
        {:width (- (* 4 (count bassline) x) 0.05) :height 0.75
         :x (+ 1 x) :y (+ (* 0.75 y))
         :stroke (if (= @selected [x y])
                   "red")
         :stroke-width 0.1
         :fill "blue"
         :on-mouse-over (fn [e] (reset! focused? true))
         :on-click
         #(dispatch [:set-bassline [x nil]])
         :on-mouse-out (fn [e] (reset! focused? false))}]
       (if @focused? [:g {:stroke "red"
                          :stroke-width 0.4
                          :stroke-linecap "round"
                          :transform
                          (str "translate(" (+ 1.5 x) "," (+ 0.375 (* 0.75 y)) ") "
                               "scale(0.15)")
                          :on-mouse-over (fn [e] (reset! focused? true))
                          :on-click
                          #(dispatch [:set-bassline [x nil]])
                          :on-mouse-out (fn [e] (reset! focused? false))}
                      [:line {:x1 -1 :y1 -1 :x2 1 :y2 1}]
                      [:line {:x1 1 :y1 -1 :x2 -1 :y2 1}]])])))

(defn note-grid []
  (let [scale-name (subscribe [:scale])
        scale-notes (get music/scales @scale-name)
        bassline (subscribe [:bassline])]
    (fn []
      [:svg
       {:view-box (str "0 0 17 " (* 0.75 (dec (* 2 (count scale-notes)))))}
       (doall
         (for [x (range 16)
               y (range (dec (* 2 (count scale-notes))))]
           ^{:key [x y]}
           [cell [x y]]))
       (doall
         (for [x (range 1 (* 4 16) 0.25)
               y (range (dec (* 2 (count scale-notes))))]
           ^{:key [x y]}
           [grid-lines [x y]]))
       (doall (for [x (range 16)
                    :let [y @bassline]
                    :when (number? y)]
                ^{:key x}
                [note [x y]]))
       #_(doall
        (let [midi-num (get (zipmap (into music/notes music/notes) (range 24 36)) @(subscribe [:key]))
              scale-intervals (get music/scales @(subscribe [:scale]))
              first-octave (map #(+ midi-num %) scale-intervals)]
          (for [y (into (map #(+ midi-num 12 %)
                             (rest scale-intervals))
                        (reverse first-octave))]
            ^{:key y}
            [note-label y])))])))

(defn bar-line [x]
  [:line {:transform "scale (2.5,2.5) translate(3,-2.8)"
          :x1 x :x2 x :y1 5.5 :y2 18 :stroke "orange"
          :stroke-width 0.1
          :stroke-dasharray 0.15}])

(defn ending-bar []
  [:g {:transform "scale (2.5,2.5) translate(3,0.2)"}
   [:rect {:x 22.25 :y 3 :width 0.24 :height 11.25 :ry 0 :fill "black"}]
   [:line {:x1 22.125 :x2 22.125 :y1 3 :y2 14.25 :stroke "black"
           :stroke-width 0.1}]])

(defn beat-line [x]
  [:line {:transform "scale (2.5,2.5) translate(3,-2.8)"
          :x1 x :x2 x :y1 5.5 :y2 18 :stroke "black"
          :stroke-width 0.03
          :stroke-dasharray 0.15}])

(defn eighth-note-flag []
    [:path {:transform "scale(0.007,-0.007)" :d "M179 -646c15 29 28.5449 55.0752 46 102c18.3213 49.2549 30 108.298 30 138c0 105 -80 173 -168 200c-18 5 -47 9 -87 16v190h22c8 0 33 -61 71 -95c4 -3 -2 3 61 -56c62 -58 122 -137 122 -241c0 -37.5245 -12.6807 -106.071 -35 -163 c-19.9111 -50.7861 -43 -99 -66 -132c-6 -5 -10 -7 -13 -7s-5 2 -5 5l4 10c1.17241 2.93103 13.7644 24.8111 18 33z"}])

(defn beam []
  [:polygon {:points "2981,475 3499,424 3499,484 2981,535"}])

(defn quarter-note []
    (fn [color [x y]]
      [:g {:transform (str "scale (7,7) translate(" (+ 7.75 (* 6.5 x)) "," (- y) ") ")}
       [:path {:d "M0 25.325c0-.567.608-1.433 1.667-1.433.55 0 .95.308 .95.792 0 .7-.883 1.425-1.817 1.425-.533 0-.8-.25-.8-.783Z"}]
       [:rect {:x (if (< y 1)
                    2.4 0) :y (if (< y 1)
                         (- (- 25 (* y 0.1433)) 6.794)
                         (- 25.588 (* y 0.1433)))
                         :height 6.794 :width 0.2}]]))

(defn drum-clef []
  [:path {:transform "translate(2,33.3) scale(0.009, 0.009)" :d "M281-143h-80c-5 0-9 3-9 9v415c0 5 3 9 9 9h80c5 0 9-3 9-9v-415c0-5-3-9-9-9zM91-143h-80c-5 0-9 3-9 9v415c0 5 3 9 9 9h80c5 0 9-3 9-9v-415c0-5-3-9-9-9z" :fill "black"}])

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
           [:line {:x1 0 :x2 69.5 :y1 y :y2 y
                   :stroke "black"
                   :stroke-width (if (or (= y 30) (= y 18)) 0.05 0.1)
                   :stroke-dasharray (if (or (= y 30) (= y 18)) 0.5)
                   :visibility (if (and (> y 7)
                                        (even? y)
                                        (< y 42)) "visible" "hidden")
                   :pointer-events "all"
                   :stroke-linecap "butt" :stroke-linejoin "bevel"
                   :on-mouse-over #(reset! mouse-over y)
                   :on-mouse-out #(reset! mouse-over [nil nil])
                   :on-click #(dispatch [:set-bassline])}]))]
       [:g#clefs
        [bass-clef]
        [treble-clef]
        [drum-clef]
        [bar-line 0]
        [beat-line 2.75]
        [beat-line 5.5]
        [beat-line 8.25]
        [bar-line 11]
        [beat-line 13.75]
        [beat-line 16.5]
        [beat-line 19.25]
        [bar-line 22]
        [ending-bar]]
        (doall (for [x (range 16)
                     :let [y (melody/chromatic->diatonic
                              (- (get @bassline x)
                                 (music/root-note-midi-num)))]
                     :when (number? y)]
                 ^{:key x}
                 [quarter-note (if (= @current-position (inc x)) "red" "black") [x y]]))])))

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