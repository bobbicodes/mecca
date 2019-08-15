(ns ^:figwheel-hooks mecca.components
  (:require [mecca.music :as music]
            [mecca.subs :as subs]
            [reagent.core :as r]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events :refer [mouse-pos mouse-down-handler selected]]
            [mecca.music.melody :as melody]
            [mecca.music.scale :as scale]))

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

(defn note-stem [[x y]]
  (let [stem-down? #(> % 1)]
    (fn [[x y]]
      [:g [:line
           (if (stem-down? y)
             {:stroke "black" :stroke-width 0.25
              :stroke-linecap "round"
              :stroke-linejoin "bevel"
              :x1 (+ 7.1 (* 6.5 x))
              :x2 (+ 7.1 (* 6.5 x))
              :y1 (- 13.5 (* 0.57 y))
              :y2 (- 19.2 (* 0.57 y))}
             {:stroke "black" :stroke-width 0.25
              :stroke-linecap "round" :stroke-linejoin "bevel"
              :x1 (+ 10 (* 6.5 x))
              :x2 (+ 10 (* 6.5 x))
              :y1 (- 6.1 (* 0.57 y))
              :y2 (- 12.5 (* 0.57 y))})]])))

(defn note-head [color [x y]]
      [:g
       [:ellipse
        {:transform (str "rotate(-28, " (+ 9 (* 6.5 x)) "," (- 14.2 (* 0.5 y)) ")")
         :cx (+ 9.1 (* 6.5 x)) :cy (- 13.1 (* 0.57 y))
         :rx 1.5 :ry 1
         :fill color}]
       [note-stem [x y]]])

(defn bass-clef []
  [:g {:transform "scale(0.36,0.36) translate(-4.5,22)"}
   [:path {:d "M18.3 9C18.4 11.9 17.1 14.6 15.1 16.6 12.6 19.1 9.4 20.6 6.1 21.7 5.6 21.9 5 21.6 5.7 21.3 7 20.7 8.4 20.2 9.6 19.3 12.3 17.7 14.6 15 15.2 11.8 15.5 9.8 15.4 7.8 14.9 5.8 14.6 4.4 13.6 3 12 2.8 10.6 2.5 9.1 3 8.1 4 7.8 4.3 7.3 5.1 7.4 5.9 8 5.4 8 5.5 8.5 5.3 9.6 4.8 11.1 5.5 11.4 6.7 11.7 7.9 11.5 9.4 10.3 10 9.1 10.6 7.4 10.3 6.7 9.1 5.6 7.1 6.2 4.4 8 3.1 9.8 1.6 12.4 1.5 14.6 2.3 16.8 3.1 18.1 5.4 18.3 7.6 18.3 8.1 18.3 8.6 18.3 9z"}]
   [:circle {:cx 20 :cy 5.5 :r 1.25}] [:circle {:cx 20 :cy 9.5 :r 1.25}]])

(defn staff []
  (let [bassline (subscribe [:bassline])
        mouse-over (r/atom [nil nil])
        current-position (subscribe [:current-position])]
    (fn []
      [:svg {:view-box "0 0 110 25"}
       [bass-clef]
       (doall
         (for [y (range 8 17)]
           ^{:key y}
           [:line {:x1 0 :x2 110 :y1 (+ 0.5 y) :y2 (+ 0.5 y)
                   :stroke "black"
                   :stroke-width (if (or (= y @mouse-over)
                                         (even? y)) 0.1 1.8)
                   :stroke-dasharray (if (odd? y) 0.5)
                   :visibility (if (or (= y @mouse-over)
                                       (even? y)) "visible" "hidden")
                   :pointer-events "all"
                   :stroke-linecap "butt" :stroke-linejoin "bevel"
                   :on-mouse-over #(reset! mouse-over y)
                   :on-mouse-out #(reset! mouse-over [nil nil])
                   :on-click #(dispatch [:set-bassline])}]))
       (doall (for [x (range 16) y (range 24)]
          ^{:key [x y]}
          [:rect {:height 0.2 :width 3 :ry 0.1 :x (+ 7 (* 6.5 x)) :y (+ 0.5 (* 2 y))
                  :visibility (cond
                                (and (not= [x y] @mouse-over)
                                     (< 7 y 17)) "hidden"
                                (= [x y] @mouse-over) "visible"
                                :else "hidden")
                  :pointer-events "all"
                  :on-mouse-over #(reset! mouse-over [x y])
                  :on-mouse-out #(reset! mouse-over [nil nil])}]))
       (doall (for [x (range 16)
                    :let [y (get @bassline x)]
                    :when (number? y)]
                ^{:key x}
                [note-head (if (= @current-position (inc x)) "red" "black") [x (- y 48)]]))])))

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

(defn mecca []
      [:center
       [:div
        [:h1 "MECCA Music Platform"]
        [:p "The Music Education, Composition & Creation Application"]
        [:p]
        [:div
         [scale-picker]
         [key-picker]
         [octave-input]
         [tempo-input]]
        [:p]
        [:div.mario]
        [staff]
        [basslines]
        [:button
         {:on-click
          (fn [e]
            (music/play-bassline!))}
         "Play Bassline"]
        [:p]
        [note-grid]
        ;[:p (str "Mouse-pos: " @mouse-pos)]
        [:p]
        [:p (str "Intervals: " @(subscribe [:bassline]))]
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
        [:p (str "Tempo: " @(subscribe [:tempo]))]]])