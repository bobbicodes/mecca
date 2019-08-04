(ns ^:figwheel-hooks mecca.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [cljs-bach.synthesis :as synthesis]
   [leipzig.melody :as melody]
   [leipzig.scale :as scale]
   [leipzig.temperament :as temperament]
   [goog.events :as events]
   [mecca.components :as components]
   [mecca.music :refer [app-state pitches durations selected-note] :as music])
  (:import [goog.events EventType]))

(defn get-app-element []
  (gdom/getElement "app"))

(def bar-length 16)

(def mouse-pos (atom {:x 100 :y 100}))

(defn get-client-rect [evt]
  (let [r (.getBoundingClientRect (.-target evt))]
    {:left (.-left r), :top (.-top r)}))

(defn mouse-move-handler [offset]
  (fn [evt]
    (let [x (- (.-clientX evt) (:x offset))
          y (- (.-clientY evt) (:y offset))]
      (reset! mouse-pos {:x      x
                         :y      y})
      #_(cond
        (> (:x offset) 5)
        (swap! durations update (first @selected-note) + 0.0625)
        (< (:x offset) -5)
        (swap! durations update (first @selected-note) - 0.0625)))))


(defn mouse-up-handler [on-move]
  (fn me [evt]
    (events/unlisten js/window EventType.MOUSEMOVE
                     on-move)))


(defn mouse-down-handler [e]
  (let [{:keys [left top]} (get-client-rect e)
        offset             {:x (- (.-clientX e) left)
                            :y (- (.-clientY e) top)}
        on-move            (mouse-move-handler offset)]
    #_(cond
      (> (:x offset) 5)
      (swap! durations update (first @selected-note) + 0.0625)
      (< (:x offset) -5)
      (swap! durations update (first @selected-note) - 0.0625))
    (events/listen js/window EventType.MOUSEMOVE
                   on-move)
    (events/listen js/window EventType.MOUSEUP
                   (mouse-up-handler on-move))))

(def mouse-atom (atom 0))

(defonce focused (atom [nil nil]))

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
                (clojure.string/includes? (music/midi-num->note (music/y->midi y)) "#")
                "pink"
                :else
                "white")
        :on-mouse-over
        (fn [e]
          (reset! focused? true)
          (reset! focused [x y]))
        :on-mouse-out
        #(reset! focused? false)
        :on-click
        (fn [e]
          (swap! pitches assoc x y)
          (swap! durations assoc x 0.25))}])))

(defn note-label [y]
  [:text
   {:x 0 :width 1
    :y (+ 0.5 (* y 0.75)) :height 0.75
    :text-anchor "left"
    :font-size 0.5}
   (music/midi-num->note (music/y->midi y))])

(defn grid-lines [[x y]]
  (let [line-focused? (atom false)
        notes (melody/phrase @durations @pitches)
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
  (let [focused? (atom false)]
    (fn [[x y]]
      [:g
       [:rect
        {:width (- (* 4 (get @durations x)) 0.05) :height 0.75
         :x (+ 1 x) :y (+ (* 0.75 y))
         :stroke (if (= @selected-note [x y])
                   "red")
         :stroke-width 0.1
         :fill "blue"
         :on-mouse-over (fn [e] (reset! focused? true))
         :on-click
         (fn [e]
           (swap! pitches assoc x nil)
           (swap! durations assoc x 0))
         :on-mouse-out (fn [e] (reset! focused? false))}]
       (if @focused? [:g {:stroke "red"
                          :stroke-width 0.4
                          :stroke-linecap "round"
                          :transform
                          (str "translate(" (+ 1.5 x) "," (+ 0.375 (* 0.75 y)) ") "
                               "scale(0.15)")
                          :on-mouse-over (fn [e] (reset! focused? true))
                          :on-click
                          (fn [e]
                            (swap! pitches assoc x nil)
                            (swap! durations assoc x 0))
                          :on-mouse-out (fn [e] (reset! focused? false))}
                      [:line {:x1 -1 :y1 -1 :x2 1 :y2 1}]
                      [:line {:x1 1 :y1 -1 :x2 -1 :y2 1}]])])))

(defn note-grid []
  [:svg
   {:view-box (str "0 0 " (inc bar-length) " " (* 0.75 (dec (* 2 (count (get music/scales (:scale @app-state)))))))}
   (doall
    (for [x (range bar-length)
          y (range (dec (* 2 (count (get music/scales (:scale @app-state))))))]
      ^{:key [x y]}
      [blank [x y]]))
   (doall
     (for [x (range 1 (* 4 bar-length) 0.25)
           y (range (dec (* 2 (count (get music/scales (:scale @app-state))))))]
       ^{:key [x y]}
       [grid-lines [x y]]))
   (doall (for [x (range bar-length)
                :let [y (get @pitches x)]
                :when (number? y)]
            ^{:key x}
             [note [x y]]))
   (doall
     (for [y (range (dec (* 2 (count (get music/scales (:scale @app-state))))))]
       ^{:key y}
       [note-label y]))])

(defn play-from!
  "Take a sequence of notes and play them from a set point in an audiocontext."
  [audiocontext from notes]
  (doseq [{:keys [time duration instrument] :as note} notes]
    (let [at (+ time from)
          synth-instance (-> note
                             (update :pitch temperament/equal)
                             (dissoc :time)
                             instrument)
          connected-instance (synthesis/connect synth-instance synthesis/destination)]
      (connected-instance audiocontext at duration))))

(defn play!
  "Take a sequence of notes and play them in an audiocontext."
  [audiocontext notes]
  (play-from! audiocontext (synthesis/current-time audiocontext) notes))

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
      [:line {:x1 0 :y1 (+ 0.25 (* 2 y)) :x2 100 :y2 (+ 0.25 (* 2 y)) :stroke "black" :stroke-width 0.4}]))])

(defn mecca []
  [:center
   [:div
    [:h1 "MECCA Music Platform"]
    [:p "The Music Education, Composition & Creation Application"]
    [:p]
    [:div
     [components/scale-picker]
     [components/key-picker]
     [components/octave-input]
     [components/tempo-input]]
    [:p]
    [:div.mario]
    [staff]
    [:button
     {:on-click
      (fn [e]
        (play! music/context
               (->> (music/melody)
                    (melody/all :instrument music/bass))))}
     "Play"]
    [:p]
    [note-grid]
    [:p (str "Mouse-pos: " @mouse-pos)]
    [:div
     [:label "Presets: "
      [:button
       {:on-click
        (fn [e]
          (reset! pitches [10 5 10 5 10 5 10 5 10 5 10 5 10 5 10 5])
          (reset! durations [0.25 0.25 0.25 0.25 0.25 0.25 0.25 0.25 0.25 0.25 0.25 0.25 0.25 0.25 0.25 0.25]))}
       "Alberti-bass"]]]
    [:p (str "Pitches: " @pitches)]
    [:p (str "Durations: " @durations)]]])

(defn mount [el]
  (reagent/render-component [mecca] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
