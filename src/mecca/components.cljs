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
  [:rect {:transform "scale (12.9,12.9) translate(12.6,6.9)"
           :x x :y 0 :width 0.1 :height 14 :ry 0 :fill "black"}])

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
  [:path {:transform "translate(18, 256) scale(0.05, -0.05)" :d "M490 -250h-92c-6 0 -10 4 -10 10v480c0 6 4 10 10 10h92c6 0 10 -4 10 -10v-480c0 -6 -4 -10 -10 -10zM270 -250h-93c-6 0 -10 4 -10 10v480c0 6 4 10 10 10h93c6 0 10 -4 10 -10v-480c0 -6 -4 -10 -10 -10z" :fill "black"}])

(defn bass-clef []
  (fn []
    [:g {:transform "scale(1.9,1.9) translate(5.5,86.7)"}
     [:path {:d "M18.3 9C18.4 11.9 17.1 14.6 15.1 16.6 12.6 19.1 9.4 20.6 6.1 21.7 5.6 21.9 5 21.6 5.7 21.3 7 20.7 8.4 20.2 9.6 19.3 12.3 17.7 14.6 15 15.2 11.8 15.5 9.8 15.4 7.8 14.9 5.8 14.6 4.4 13.6 3 12 2.8 10.6 2.5 9.1 3 8.1 4 7.8 4.3 7.3 5.1 7.4 5.9 8 5.4 8 5.5 8.5 5.3 9.6 4.8 11.1 5.5 11.4 6.7 11.7 7.9 11.5 9.4 10.3 10 9.1 10.6 7.4 10.3 6.7 9.1 5.6 7.1 6.2 4.4 8 3.1 9.8 1.6 12.4 1.5 14.6 2.3 16.8 3.1 18.1 5.4 18.3 7.6 18.3 8.1 18.3 8.6 18.3 9z"}]
     [:circle {:cx 20 :cy 5.5 :r 1.25}] [:circle {:cx 20 :cy 9.5 :r 1.25}]]))

(defn treble-clef []
    [:path {:transform "scale(0.16,0.16) translate(130,490)" :d "m103.53 279.582c-7.14 1.99-13.578 6.438-19.548 13.227-5.97 6.906-8.896 14.515-8.896 22.709 0 5.15 1.756 11.003 5.15 17.207 3.395 6.321 8.545 10.886 15.217 13.813 2.224.468 3.278 1.639 3.278 3.278 0 .585-.819 1.171-2.809 1.639-10.652-2.692-19.431-8.428-26.22-16.973-6.789-8.662-10.301-18.495-10.535-29.732.351-12.057 3.98-23.294 10.886-33.595 7.023-10.418 16.037-17.792 27.04-22.123l-8.077-41.555c-18.027 14.983-32.658 30.551-44.013 46.939-11.354 16.271-17.207 33.946-17.675 53.026.234 8.545 1.99 16.856 5.267 24.816 3.278 8.077 8.194 15.334 14.749 22.006 13.227 13.227 30.434 20.134 51.387 20.836 7.14-.468 14.749-1.756 22.943-3.863l-18.144-91.654zm8.428-1.171 18.261 90.016c18.027-7.257 27.04-23.06 27.04-47.173-1.053-8.077-3.395-15.334-7.374-21.772-3.863-6.555-9.013-11.706-15.568-15.451-6.555-3.746-13.93-5.619-22.358-5.619zm-23.996-121.738c3.863-2.341 8.311-6.438 13.11-12.174 4.799-5.619 9.481-12.291 13.93-19.782 4.565-7.609 8.194-15.334 10.886-23.177 2.692-7.726 3.98-15.1 3.98-21.889 0-2.926-.234-5.853-.819-8.428-.468-4.214-1.756-7.492-3.98-9.716-2.224-2.107-5.033-3.278-8.545-3.278-7.023 0-13.344 4.331-18.963 12.993-4.331 7.492-7.96 16.388-10.535 26.455-2.692 10.184-4.214 20.251-4.448 30.434.585 11.588 2.458 21.07 5.385 28.561zm-7.374 6.789c-5.267-18.963-8.194-38.277-8.779-57.942.117-12.642 1.405-24.465 3.863-35.468 2.341-11.003 5.736-20.485 10.184-28.679 4.331-8.194 9.364-14.398 14.983-18.612 5.033-3.746 8.662-5.736 10.652-5.736 1.522 0 2.809.585 3.98 1.639 1.171 1.053 2.692 2.809 4.565 5.15 13.93 19.782 20.953 43.662 20.953 71.521 0 13.227-1.756 26.103-5.267 38.979-3.395 12.759-8.428 24.933-15.1 36.287-6.789 11.471-14.749 21.421-23.996 29.966l9.481 46.12c5.15-.585 8.662-1.053 10.652-1.053 8.896 0 16.856 1.873 24.23 5.619 7.374 3.746 13.695 8.779 18.846 15.217 5.15 6.321 9.13 13.578 11.94 21.772 2.692 8.194 4.214 16.739 4.214 25.635 0 13.813-3.629 26.455-10.886 37.809-7.257 11.354-18.144 19.665-32.775 25.05.936 5.736 2.575 14.047 5.033 24.699 2.341 10.769 4.097 19.314 5.267 25.635 1.171 6.321 1.639 12.408 1.639 18.378 0 9.247-2.224 17.441-6.672 24.699-4.565 7.257-10.652 12.876-18.378 16.856-7.609 3.98-16.037 5.97-25.167 5.97-12.876 0-24.113-3.629-33.712-10.769-9.599-7.257-14.749-16.973-15.217-29.381.351-5.502 1.639-10.652 3.98-15.568 2.341-4.916 5.502-8.896 9.599-11.94 3.98-3.16 8.779-4.799 14.281-5.15 4.565 0 8.896 1.288 12.993 3.746 3.98 2.575 7.257 5.97 9.716 10.301 2.341 4.331 3.629 9.13 3.629 14.281 0 6.906-2.341 12.759-7.023 17.558-4.682 4.799-10.652 7.257-17.792 7.257h-2.692c4.565 7.023 12.057 10.652 22.475 10.652 5.267 0 10.652-1.171 16.037-3.278 5.502-2.224 10.067-5.15 13.93-8.896 3.863-3.746 6.438-7.726 7.492-11.94 1.99-4.799 2.926-11.471 2.926-19.782 0-5.619-.585-11.237-1.639-16.856-1.053-5.502-2.692-12.876-4.916-22.006-2.224-9.013-3.863-16.037-4.799-20.836-7.023 1.756-14.281 2.692-21.889 2.692-12.759 0-24.816-2.575-36.17-7.843-11.354-5.267-21.304-12.525-29.966-21.889-8.545-9.364-15.217-19.899-20.016-31.839-4.682-11.823-7.14-24.23-7.257-37.107.468-11.94 2.692-23.411 6.906-34.18 4.214-10.886 9.599-21.187 16.271-30.786 6.672-9.599 13.578-18.378 20.719-26.22 7.257-7.726 16.739-17.675 28.679-29.732z"}])

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

(defn editor []
  (let [bassline (subscribe [:bassline])
        mouse-over (r/atom [nil nil])
        current-position (subscribe [:current-position])
        playing? (subscribe [:playing?])]
      (fn []
        [:svg {:view-box "0 0 480 420"}
         [editor-bg]
         [bass-clef]
         [treble-clef]
         [drum-clef]
         [bar-line 0]
         [bar-line 11]
         [bar-line 22]
         [:g#staff {:transform "scale (6.4,6.4) translate(3,6)"
                    :view-box "0 0 450 160"}
          (doall
           (for [y (range 38)]
             ^{:key y}
             [:line {:x1 0 :x2 69.5 :y1 y :y2 y
                     :stroke "black"
                     :stroke-width (if (or (= y 30)(= y 18)) 0.05 0.1)
                     :stroke-dasharray (if (or (= y 30) (= y 18)) 0.5)
                     :visibility (if (and (> y 7)
                                          (even? y)
                                          (< y 42)) "visible" "hidden")
                     :pointer-events "all"
                     :stroke-linecap "butt" :stroke-linejoin "bevel"
                     :on-mouse-over #(reset! mouse-over y)
                     :on-mouse-out #(reset! mouse-over [nil nil])
                     :on-click #(dispatch [:set-bassline])}]))
          (doall (for [x (range 16)
                       :let [y (melody/chromatic->diatonic
                                (- (get @bassline x)
                                   (music/root-note-midi-num)))]
                       :when (number? y)]
                   ^{:key x}
                   [quarter-note (if (= @current-position (inc x)) "red" "black") [x y]]))]
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
   ;[staff]
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