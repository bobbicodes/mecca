(ns ^:figwheel-hooks mecca.components
  (:require [mecca.music :as music]
            [mecca.subs :as subs]
            [reagent.core :as r]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events :refer [mouse-pos mouse-down-handler selected]]
            [leipzig.melody :as melody]))

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
     :on-change (fn [e] (dispatch [:set-octave
                                   (-> e .-target .-value)]))}]])

(defn tempo-input []
  [:label " Tempo: "
   [:input
    {:style {:width "8%"
             :background-color "lightgray"}
     :type "number"
     :value @(subscribe [:tempo])
     :on-change (fn [e] (dispatch [:set-tempo
                                   (-> e .-target .-value)]))}]])

(defn blank [[x y]]
  (let [focused? (atom false)]
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
        :on-click
        #(dispatch [:bassline [x y]])}])))

(defn note-label [y]
  [:text
   {:x 0 :width 1
    :y (+ 0.5 (* y 0.75)) :height 0.75
    :text-anchor "left"
    :font-size 0.5}
   (music/midi-num->note y)])

(defn grid-lines [[x y]]
  (let [line-focused? (atom false)
        notes (subscribe [:bassline])
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
        {:width (- (* 4 (bassline x)) 0.05) :height 0.75
         :x (+ 1 x) :y (+ (* 0.75 y))
         :stroke (if (= @selected [x y])
                   "red")
         :stroke-width 0.1
         :fill "blue"
         :on-mouse-over (fn [e] (reset! focused? true))
         :on-click
         #(dispatch [:bassline [x nil]])
         :on-mouse-out (fn [e] (reset! focused? false))}]
       (if @focused? [:g {:stroke "red"
                          :stroke-width 0.4
                          :stroke-linecap "round"
                          :transform
                          (str "translate(" (+ 1.5 x) "," (+ 0.375 (* 0.75 y)) ") "
                               "scale(0.15)")
                          :on-mouse-over (fn [e] (reset! focused? true))
                          :on-click
                          #(dispatch [:bassline [x nil]])
                          :on-mouse-out (fn [e] (reset! focused? false))}
                      [:line {:x1 -1 :y1 -1 :x2 1 :y2 1}]
                      [:line {:x1 1 :y1 -1 :x2 -1 :y2 1}]])])))

#_(defn note-grid []
  (let [scale-name @(subscribe [:scale])
        scale-notes (get music/scales (str scale-name))]
    (fn []
      [:svg
       {:view-box (str "0 0 17 " (* 0.75 (dec (* 2 (count scale-notes)))))}
       (doall
         (for [x (range 16)
               y (range (dec (* 2 (count scale-notes))))]
           ^{:key [x y]}
           [blank [x y]]))
       #_(doall
         (for [x (range 1 (* 4 16) 0.25)
               y (range (dec (* 2 (count scale-notes))))]
           ^{:key [x y]}
           [grid-lines [x y]]))
       #_(doall (for [x (range 16)
                    :let [y @(subscribe [:bassline])]
                    :when (number? y)]
                ^{:key x}
                [note [x y]]))
       #_(doall
         (for [y (range (dec (* 2 (count scale-notes))))]
           ^{:key y}
           [note-label y]))])))

(defn note-stem [[x y]]
  [:g
   [:line
    {:stroke "black" :stroke-width 0.35
     :x1 (if (> 10 y)
           (+ 9.1 (* 5.25 x))
           (+ 10.9 (* 5.25 x)))
     :x2 (if (> 10 y)
           (+ 9.1 (* 5.25 x))
           (+ 10.9 (* 5.25 x)))
     :y1 (if (> 10 y)
           (- y 4.25) (- (- y 5) 4.25))
     :y2 (if (> 10 y)
           (- (+ 5 y) 4.25) (- y 4.25))}]])

(defn note-head [[x y]]
  [:g
   [:ellipse
    {:cx (+ 10 (* 5.25 x)) :cy (- (* 0.74 y) 2.1)
     :rx 1.15 :ry 0.8}]])

(defn staff []
  [:svg {:view-box "0 0 100 10"}
   [:g {:transform "scale(0.028,0.028)"}
    [:path {:d "M95,0C46.286,0,20,35.035,20,68c0,16.393,5.134,30.499,14.848,40.794C44.851,119.396,58.736,125,75,125
		c16.569,0,30-13.431,30-30S91.569,65,75,65c-9.828,0-18.551,4.726-24.023,12.028C50.234,73.834,50,70.676,50,68
		c0-18.884,15.457-38,45-38c37.664,0,65,35.748,65,85c0,47.058-20.573,76.48-37.831,92.875C100.995,227.991,72.146,240,45,240v30
		c35.164,0,70.822-14.716,97.831-40.375C173.248,200.729,190,160.02,190,115c0-31.97-9.544-61.113-26.874-82.062
		C145.554,11.698,121.36,0,95,0z"}]
    [:circle {:cx 235 :cy 54 :r 15}] [:circle {:cx 235 :cy 114 :r 15}]]
   (doall
    (for [y (range 5)]
      ^{:key y}
      [:line {:x1 0 :y1 (+ 0.25 (* 2 y)) :x2 100 :y2 (+ 0.25 (* 2 y)) :stroke "black" :stroke-width 0.4}]))
   (doall (for [x (range 16)
                :let [y (subscribe [:bassline])]
                :when (number? y)]
            ^{:key x}
            [note-head [x y]]))
   (doall (for [x (range 16)
                :let [y (subscribe [:bassline])]
                :when (number? y)]
            ^{:key x}
            [note-stem [x y]]))])

(defn mecca []
  (let [active (r/atom nil)]
    (fn []
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
        [:button
         {:on-click
          (fn [e]
            (music/play-bassline!))}
         "Play Bassline"]
        [:p]
        ;[note-grid]
        ;[:p (str "Mouse-pos: " @mouse-pos)]
        [:p]
        [:div
         [:label "Patterns: "
          (doall (for [[x pattern] (seq music/basslines)]
                   ^{:key x}
                   [:button
                    {:on-click
                     (fn [e]
                       (dispatch [:set-bassline (vec (take 16 (cycle pattern)))])
                       (reset! active x))
                     :style {:background-color (if (= x @active)
                                                 "lightgreen" "violet")}}
                    x]))]]
        [:p]
        [:p (str "Bassline: " @(subscribe [:bassline]))]
        [:p (str "Scale: " @(subscribe [:scale]))]
        [:p (str "Key: " @(subscribe [:key]))]
        [:p (str "Octave: " @(subscribe [:octave]))]
        [:p (str "Tempo: " @(subscribe [:tempo]))]]])))