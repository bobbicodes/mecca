(ns mecca.view
  (:require [mecca.music :as music]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [reagent.core :as r]
            [mecca.castle :as castle]
            [mecca.transport :as transport]
            [mecca.editor :as editor :refer [svg-paths]]
            [mecca.mario :as mario]
            [sci.core :as sci]
            [mecca.sci-editor :as sci-editor :refer [!points points]]
            [clojure.pprint :as pp]
            [goog.object :as o]
            [clojure.edn :as edn]))

(defn note-guides []
  (let [editor-x (subscribe [:editor-beat-start])]
    (fn []
      (into [:g]
            (for [beat (range 0 9 0.5)]
              (if (= 0
                     (mod (+ (dec @editor-x) beat) 4))
                [:g
                 ;[bar-number (/ beat 4) (+ 296 (* 120 (mod beat 8))) 64 0.05]
                 [:line {:x1 (+ 8 (* 6 beat)) :x2 (+ 8 (* 6 beat))
                         :y1 4 :y2 21 :stroke "orange"
                         :stroke-width 0.25
                         :stroke-dasharray 0.5}]]
                [:line {:x1 (+ 8 (* 6 beat)) :x2 (+ 8 (* 6 beat))
                        :y1 4 :y2 21 :stroke "black"
                        :stroke-width 0.075
                        :stroke-dasharray 0.5}]))))))


(defn note-targets []
  (let [instrument (subscribe [:instrument])
        editor-x (subscribe [:editor-beat-start])
        sharp? (subscribe [:sharp?])]
    (fn []
      (into [:g]
            (for [time (range 0 9 0.5)
                  pitch (range 19)]
              ^{:key [time pitch]}
              [:rect {:transform "translate(6.5,4)"
                      :x (* 6 time)
                      :y (- pitch 1)
                      :height 1 :width 3
                      :stroke "black"
                      :stroke-width 0.2
                      :fill "gray"
                      :visibility "hidden"
                      :opacity 0.2
                      :pointer-events "all"
                      :on-mouse-over #(if-not (and 
                                               @sharp?
                                               (or (= pitch 12)
                                                   (= pitch 15)
                                                   (= pitch 8)
                                                   (= pitch 5)
                                                   (= pitch 1)
                                                   (= pitch 0)))
                                        (dispatch [:update-focus-note [time pitch]]))
                      :on-mouse-out #(dispatch [:update-focus-note [nil nil]])
                      :on-click (let [pitches [84 83 81 79 77 76 74 72 71 69 67 65 64 62 60 59 57 55 53]]
                                  (cond
                                    @(subscribe [:eraser?])
                                    #(do (music/play-sample 18 63)
                                       (dispatch [:remove-note (+ time (dec @editor-x))
                                                  (get pitches pitch)]))
                                    @(subscribe [:repeat?])
                                    #(dispatch [:set-loop-end time])
                                    :else
                                    #(do
                                      (dispatch [:add-note @instrument
                                                  (+ time (dec @editor-x))
                                                  (get pitches pitch)])
                                       (sci-editor/update-editor! 
                                        (str (conj @(subscribe [:notes]) 
                                                   {:instrument @instrument
                                                    :time       (+ time (dec @editor-x))
                                                    :pitch      (get pitches pitch)}))))))}])))))

(defn note-cursor []
  (let [focused (subscribe [:focused-note-pos])
        instrument (subscribe [:instrument])
        sharp? (subscribe [:sharp?])]
       (when-not (= @focused [nil nil])
         (let [x (first @focused) y (last @focused)]
           [:g
            (if @sharp? (svg-paths [["black" "M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"]]
                                   (+ 68 (* 86 x)) (+ 18 (* 15 y)) 0.07))
            (cond
              @(subscribe [:eraser?])
              [editor/eraser-cursor (+ 36 (* 30 x)) (+ (* 5 y) 20) 0.2]
              @(subscribe [:repeat?])
              [editor/repeat-sign (+ 7 (* 6 x)) 8 0.13]
              :else
              (case @instrument
                1 [mario/mario-icon (+ 2 (* 30 x)) (+ (* 5 y) 9) 0.2]
                2 [mario/shroom (+ 32 (* 30 x)) (+ (* 5 y) 12) 0.2]
                3 [mario/yoshi (+ 32 (* 30 x)) (+ (* 5 y) 10) 0.2]
                4 [mario/star (+ 32 (* 30 x)) (+ (* 5 y) 10) 0.2]
                5 [mario/flower (+ 32 (* 30 x)) (+ (* 5 y) 10) 0.2]
                6 [mario/gb (+ 32 (* 30 x)) (+ (* 5 y) 10) 0.2]
                7 [mario/dog (+ 32 (* 30 x)) (+ (* 5 y) 10) 0.2]
                8 [mario/kitty (+ 32 (* 30 x)) (+ (* 5 y) 10) 0.2]
                9 [mario/pig (+ 32 (* 30 x)) (+ (* 5 y) 10) 0.2]
                10 [mario/swan (+ 32 (* 30 x)) (+ (* 5 y) 10) 0.2]
                11 [mario/face (+ 32 (* 30 x)) (+ (* 5 y) 10) 0.2]
                12 [mario/plane (+ 32 (* 30 x)) (+ (* 5 y) 15) 0.2]
                13 [mario/boat (+ 32  (* 30 x)) (+ (* 5 y) 12) 0.2]
                14 [mario/car (+ 32 (* 30 x)) (+ (* 5 y) 12) 0.2]
                15 [mario/heart (+ 32 (* 30 x)) (+ (* 5 y) 15) 0.2]))]))))

(defn score-notes []
   (let [notes (subscribe [:notes])
         editor-x (subscribe [:editor-beat-start])]
     (into [:g]
           (for [{:keys [time instrument pitch]} @notes
                 :when (<= (dec @editor-x) time (+ 16 (dec @editor-x)))]
                    ^{:key [instrument time pitch]}
                    (let [x (- time (dec @editor-x))
                          pitch-map (zipmap [84 83 81 79 77 76 74 72 71 69 67 65 64 62 60 59 57 55 53]
                                            (range 19))]
                      [:g
                       (if-not (get pitch-map pitch)
                        (svg-paths [["black" "M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"]]
                                   (+ 68 (* 86 x)) (+ 18 (* 15 (get pitch-map (dec pitch)))) 0.07))
                      (case instrument
                        1 [mario/mario-note (+ 2 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 9) 0.2]
                        2 [mario/shroom (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 12) 0.2]
                        3 [mario/yoshi (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 10) 0.2]
                        4 [mario/star (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 10) 0.2]
                        5 [mario/flower (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 10) 0.2]
                        6 [mario/gb (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 10) 0.2]
                        7 [mario/dog (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 10) 0.2]
                        8 [mario/kitty (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 10) 0.2]
                        9 [mario/pig (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 10) 0.2]
                        10 [mario/swan (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 10) 0.2]
                        11 [mario/face (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 10) 0.2]
                        12 [mario/plane (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 15) 0.2]
                        13 [mario/boat (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 12) 0.2]
                        14 [mario/car (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 12) 0.2]
                        15 [mario/heart (+ 32 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 15) 0.2]
                        [mario/mario-note (+ 2 (* 30 x)) (+ (* 5 (or (get pitch-map pitch) (get pitch-map (dec pitch)))) 9) 0.2])])))))

(defn editor []
  (let [editor-x (subscribe [:editor-beat-start])
        mario-run (subscribe [:mario-run])]
    (fn []
      (when (= 20 @mario-run)
        (dispatch [:jump-reset]))
      [:svg {:width "100%"
             :view-box "0 0 64 36"
             :style {:cursor "url(/mecca/public/images/hand.png),pointer"}}
       [mario/cloud 1 1]
       [mario/hill 40]
       [castle/brick-face 363 18 6]
       [castle/brick-face 348 48 10]
       [mario/mario-sm]
       [editor/current-note-display 47 0 0.22]
       [editor/note-blocks]
       [mario/floor-tile 16]
       [:rect#editorframe
          {:stroke "black"
           :stroke-width 0.2
           :fill "none"
           :height 20 :width 63.5 :x 0.25 :y 14.5}]
       [:g.staff {:transform "translate(0,13.5) scale(1)"}
        [editor/staff-lines]
        [editor/retract-editor 2]
         [editor/treble-clef
          (- 0.8 (* 6 (dec @editor-x)))
          6.3]
        [editor/advance-editor]
        [editor/advance-measure]
        [editor/advance-end]
        [note-targets]
        [note-guides]
        [note-cursor]
        [score-notes]
        (when @(subscribe [:loop-end])
          [editor/repeat-sign (+ 7 (* 6 @(subscribe [:loop-end]))) 8 0.13])]])))

(defn eval-all [s]
  (try (sci/eval-string s {:classes {'js goog/global :allow :all}})
       (catch :default e
         (str e))))

(defn load-song []
  [:input#input
   {:type      "file"
    :on-change
    (fn [e]
      (let [dom    (o/get e "target")
            file   (o/getValueByKeys dom #js ["files" 0])
            reader (js/FileReader.)]
        (.readAsText reader file)
        (set! (.-onload reader)
              #(dispatch [:set-notes
                          (edn/read-string (-> % .-target .-result))]))))}])

(def demo "(defn bass1 [time]
  [{:time (+ time 0), :instrument 15, :pitch 71} {:time (+ time 1.5) :instrument 15, :pitch 71} {:time (+ time 2) :instrument 15, :pitch 71} {:time (+ time 3) :instrument 15, :pitch 73} {:time (+ time 3.5) :instrument 15, :pitch 69} {:time (+ time 4) :instrument 15, :pitch 69} {:time (+ time 5.5) :instrument 15, :pitch 69} {:time (+ time 6) :instrument 15, :pitch 69} {:time (+ time 8) :instrument 15, :pitch 64} {:time (+ time 9.5) :instrument 15, :pitch 64} {:time (+ time 10) :instrument 15, :pitch 64} {:time (+ time 12) :instrument 15, :pitch 64} {:time (+ time 13.5) :instrument 15, :pitch 64} {:time (+ time 14) :instrument 15, :pitch 64}])

(defn bass2 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 29.5, :instrument 15, :pitch 69} {:time 29, :instrument 15, :pitch 64} {:time 31, :instrument 15, :pitch 64} {:time 26, :instrument 15, :pitch 69} {:time 25.5, :instrument 15, :pitch 69} {:time 24, :instrument 15, :pitch 69} {:time 23, :instrument 15, :pitch 67} {:time 22.5, :instrument 15, :pitch 66} {:time 17.5, :instrument 15, :pitch 64} {:time 0, :instrument 15, :pitch 71} {:time 1.5, :instrument 15, :pitch 66} {:time 2, :instrument 15, :pitch 64} {:time 2.5, :instrument 15, :pitch 62} {:time 3.5, :instrument 15, :pitch 59} {:time 5.5, :instrument 15, :pitch 66} {:time 6, :instrument 15, :pitch 64} {:time 7, :instrument 15, :pitch 62} {:time 8, :instrument 15, :pitch 69} {:time 9.5, :instrument 15, :pitch 64} {:time 10, :instrument 15, :pitch 62} {:time 10.5, :instrument 15, :pitch 61} {:time 11.5, :instrument 15, :pitch 57} {:time 13.5, :instrument 15, :pitch 64} {:time 14, :instrument 15, :pitch 62} {:time 15, :instrument 15, :pitch 61} {:time 16, :instrument 15, :pitch 64} {:time 18.5, :instrument 15, :pitch 64} {:time 19, :instrument 15, :pitch 66} {:time 19.5, :instrument 15, :pitch 67} {:time 20.5, :instrument 15, :pitch 66} {:time 21, :instrument 15, :pitch 64} {:time 21.5, :instrument 15, :pitch 64}]))

(defn bass3 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 0, :instrument 15, :pitch 66} {:time 1.5, :instrument 15, :pitch 66} {:time 2, :instrument 15, :pitch 66} {:time 3, :instrument 15, :pitch 69} {:time 4, :instrument 15, :pitch 64} {:time 5.5, :instrument 15, :pitch 64} {:time 6, :instrument 15, :pitch 64} {:time 8, :instrument 15, :pitch 64} {:time 9.5, :instrument 15, :pitch 64} {:time 10, :instrument 15, :pitch 64} {:time 11, :instrument 15, :pitch 61} {:time 12, :instrument 15, :pitch 62} {:time 13.5, :instrument 15, :pitch 62} {:time 14, :instrument 15, :pitch 62} {:time 16, :instrument 15, :pitch 62} {:time 17.5, :instrument 15, :pitch 62} {:time 18, :instrument 15, :pitch 62} {:time 20, :instrument 15, :pitch 61} {:time 21.5, :instrument 15, :pitch 61} {:time 22, :instrument 15, :pitch 61} {:time 24, :instrument 15, :pitch 61} {:time 25.5, :instrument 15, :pitch 73} {:time 26.5, :instrument 15, :pitch 71} {:time 27, :instrument 15, :pitch 69} {:time 27.5, :instrument 15, :pitch 68}]))

(defn bass4 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 0, :instrument 15, :pitch 66} {:time 1.5, :instrument 15, :pitch 66} {:time 2, :instrument 15, :pitch 66} {:time 4, :instrument 15, :pitch 64} {:time 5.5, :instrument 15, :pitch 64} {:time 6, :instrument 15, :pitch 64} {:time 7, :instrument 15, :pitch 61} {:time 8, :instrument 15, :pitch 62} {:time 9.5, :instrument 15, :pitch 62} {:time 10, :instrument 15, :pitch 62} {:time 12, :instrument 15, :pitch 69} {:time 13.5, :instrument 15, :pitch 69} {:time 14, :instrument 15, :pitch 69}]))

(defn bass5 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 0, :instrument 15, :pitch 67} {:time 8, :instrument 15, :pitch 66} {:time 16, :instrument 15, :pitch 64} {:time 17, :instrument 15, :pitch 62} {:time 18, :instrument 15, :pitch 61} {:time 19, :instrument 15, :pitch 59}]))

(def bass-pat-1
  (concat (bass1 0) (bass1 16) (bass2 32) (bass3 64) (bass4 92) (bass4 108) (bass5 124)))

(defn bass6 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 0, :instrument 15, :pitch 71} {:time 1.5, :instrument 15, :pitch 66} {:time 2, :instrument 15, :pitch 71} {:time 2.5, :instrument 15, :pitch 66} {:time 3.5, :instrument 15, :pitch 66} {:time 4, :instrument 15, :pitch 69} {:time 5.5, :instrument 15, :pitch 69} {:time 6, :instrument 15, :pitch 69} {:time 8, :instrument 15, :pitch 68} {:time 9.5, :instrument 15, :pitch 64} {:time 10, :instrument 15, :pitch 68} {:time 10.5, :instrument 15, :pitch 64} {:time 11.5, :instrument 15, :pitch 64} {:time 12, :instrument 15, :pitch 66} {:time 13.5, :instrument 15, :pitch 66} {:time 14, :instrument 15, :pitch 66}]))

(defn bass7 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 0, :instrument 15, :pitch 67} {:time 1, :instrument 15, :pitch 62} {:time 1.5, :instrument 15, :pitch 64} {:time 2, :instrument 15, :pitch 67} {:time 2.5, :instrument 15, :pitch 62} {:time 3, :instrument 15, :pitch 67} {:time 3.5, :instrument 15, :pitch 67} {:time 4, :instrument 15, :pitch 66} {:time 5.5, :instrument 15, :pitch 66} {:time 6, :instrument 15, :pitch 66} {:time 8, :instrument 15, :pitch 67} {:time 9, :instrument 15, :pitch 62} {:time 9.5, :instrument 15, :pitch 64} {:time 10, :instrument 15, :pitch 67} {:time 10.5, :instrument 15, :pitch 62} {:time 11, :instrument 15, :pitch 67} {:time 11.5, :instrument 15, :pitch 66} {:time 12, :instrument 15, :pitch 64} {:time 13.5, :instrument 15, :pitch 64} {:time 14, :instrument 15, :pitch 64} {:time 16, :instrument 15, :pitch 64} {:time 17.5, :instrument 15, :pitch 64} {:time 18, :instrument 15, :pitch 64}]))

(def bass-pat-2
  (concat (bass6 144) (bass6 160) (bass7 176) (bass1 196) (bass1 212)))

(defn drums1 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 15, :instrument 2, :pitch 67} {:time 14, :instrument 13, :pitch 77} {:time 13, :instrument 13, :pitch 77} {:time 12, :instrument 13, :pitch 77} {:time 11, :instrument 2, :pitch 67} {:time 10, :instrument 13, :pitch 77} {:time 9, :instrument 13, :pitch 77} {:time 8, :instrument 13, :pitch 77} {:time 7, :instrument 2, :pitch 67} {:time 6, :instrument 13, :pitch 77} {:time 5, :instrument 13, :pitch 77} {:time 4, :instrument 13, :pitch 77} {:time 3, :instrument 2, :pitch 67} {:time 2, :instrument 13, :pitch 77} {:time 1, :instrument 13, :pitch 77} {:time 0, :instrument 13, :pitch 77}]))

(defn drums2 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 7.5, :instrument 13, :pitch 77} {:time 7, :instrument 2, :pitch 67} {:time 6.5, :instrument 13, :pitch 77} {:time 6, :instrument 13, :pitch 77} {:time 5.5, :instrument 13, :pitch 77} {:time 5, :instrument 2, :pitch 67} {:time 4.5, :instrument 13, :pitch 77} {:time 4, :instrument 13, :pitch 77} {:time 3.5, :instrument 13, :pitch 77} {:time 3, :instrument 2, :pitch 67} {:time 2.5, :instrument 13, :pitch 77} {:time 2, :instrument 13, :pitch 77} {:time 1.5, :instrument 13, :pitch 77} {:time 1, :instrument 2, :pitch 67} {:time 0.5, :instrument 13, :pitch 77} {:time 0, :instrument 13, :pitch 77}]))

(defn drums-pat-1 [time]
  (map (fn [m] (update m :time #(+ % time)))
       (concat (drums1 0) (drums1 16))))

(defn drums-pat-2 [time]
  (map (fn [m] (update m :time #(+ % time)))
       (concat
        (drums2 132)
        (drums2 140)
        (drums2 148)
        (drums2 156)
        (drums2 164)
        (drums2 172)
        (drums2 180)
        (drums2 188))))

(defn glis [notes]
  (let [chord (reverse (sort-by :pitch notes))
        times (for [note (range (count chord))]
                (update (nth chord note) :time #(+ % (* 0.1 note))))
        pitches (for [note (range (count times))]
                  (update (nth times note) :pitch #(- % note)))
        last-note (repeat 3 (last pitches))
        last-note (for [note (range 1 3)]
                    (update (nth last-note note) :time #(+ % (/ note 10.0))))]
    (concat pitches last-note)))

(defn lead1 [time]
  (map (fn [m] (update m :time #(+ % time)))
       (concat [{:time 1.5, :instrument 14, :pitch 69} {:time 2, :instrument 14, :pitch 71} {:time 2.5, :instrument 14, :pitch 74} {:time 3, :instrument 14, :pitch 76} {:time 3.5, :instrument 14, :pitch 78} {:time 4, :instrument 14, :pitch 78} {:time 4.5, :instrument 14, :pitch 78} {:time 5, :instrument 14, :pitch 76} {:time 6, :instrument 14, :pitch 74} {:time 6.5, :instrument 14, :pitch 76} {:time 7.5, :instrument 14, :pitch 74} {:time 7.75, :instrument 14, :pitch 76} {:time 8, :instrument 14, :pitch 74} {:time 9, :instrument 14, :pitch 74} {:time 9.5, :instrument 14, :pitch 71}]
               (glis (repeat 12 {:time 10 :instrument 14, :pitch 71}))
               [{:time 12, :instrument 14, :pitch 74} {:time 12.5, :instrument 14, :pitch 74} {:time 13.5, :instrument 14, :pitch 74} {:time 14.5, :instrument 14, :pitch 71} {:time 15.5, :instrument 14, :pitch 69} {:time 16, :instrument 14, :pitch 71}]
               (glis (repeat 8 {:time 16, :instrument 14, :pitch 71}))
               [{:time 17.5, :instrument 14, :pitch 64} {:time 18, :instrument 14, :pitch 66} {:time 18.5, :instrument 14, :pitch 69} {:time 19, :instrument 14, :pitch 71} {:time 20, :instrument 14, :pitch 71} {:time 20.5, :instrument 14, :pitch 73} {:time 21.5, :instrument 14, :pitch 69} {:time 22.5, :instrument 14, :pitch 69} {:time 24, :instrument 14, :pitch 66} {:time 24.5, :instrument 14, :pitch 64} {:time 25.5, :instrument 14, :pitch 64}])))

(defn lead2 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 0, :instrument 5, :pitch 66} {:time 1.5, :instrument 5, :pitch 71} {:time 7, :instrument 5, :pitch 71} {:time 8, :instrument 5, :pitch 71} {:time 8.5, :instrument 5, :pitch 69} {:time 9.5, :instrument 5, :pitch 64} {:time 15, :instrument 5, :pitch 66} {:time 16, :instrument 5, :pitch 67} {:time 16.5, :instrument 5, :pitch 64} {:time 17, :instrument 5, :pitch 59} {:time 17.5, :instrument 5, :pitch 64} {:time 21, :instrument 5, :pitch 61} {:time 21.5, :instrument 5, :pitch 61} {:time 22.5, :instrument 5, :pitch 62} {:time 24, :instrument 5, :pitch 66} {:time 25.5, :instrument 5, :pitch 64}]))

(defn lead3 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 65, :instrument 5, :pitch 73} {:time 65.5, :instrument 5, :pitch 73} {:time 67, :instrument 5, :pitch 73} {:time 68, :instrument 5, :pitch 73} {:time 69, :instrument 5, :pitch 74} {:time 69.5, :instrument 5, :pitch 71} {:time 73.5, :instrument 5, :pitch 71} {:time 74, :instrument 5, :pitch 71} {:time 75, :instrument 5, :pitch 71} {:time 76, :instrument 5, :pitch 71} {:time 76.5, :instrument 5, :pitch 73} {:time 77, :instrument 5, :pitch 71} {:time 77.5, :instrument 5, :pitch 69} {:time 81, :instrument 5, :pitch 69} {:time 81.5, :instrument 5, :pitch 69} {:time 82.5, :instrument 5, :pitch 68} {:time 83.5, :instrument 5, :pitch 66} {:time 84, :instrument 5, :pitch 68} {:time 85.5, :instrument 5, :pitch 66} {:time 88, :instrument 5, :pitch 65} {:time 88.5, :instrument 5, :pitch 66} {:time 89.5, :instrument 5, :pitch 68} {:time 92, :instrument 5, :pitch 69}]))

(defn lead4 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 93.5, :instrument 14, :pitch 64} {:time 94, :instrument 14, :pitch 66} {:time 94.5, :instrument 14, :pitch 69} {:time 95, :instrument 14, :pitch 71} {:time 95.5, :instrument 14, :pitch 73} {:time 97, :instrument 14, :pitch 71} {:time 98, :instrument 14, :pitch 69} {:time 98.5, :instrument 14, :pitch 71} {:time 99.5, :instrument 14, :pitch 69} {:time 99.75, :instrument 14, :pitch 71} {:time 100, :instrument 14, :pitch 69} {:time 101.5, :instrument 14, :pitch 66}]))

(defn gb1 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 102, :instrument 6, :pitch 66} {:time 103, :instrument 6, :pitch 74} {:time 104, :instrument 6, :pitch 73} {:time 118, :instrument 6, :pitch 66} {:time 119, :instrument 6, :pitch 74} {:time 120, :instrument 6, :pitch 73} {:time 125.5, :instrument 6, :pitch 71} {:time 126, :instrument 6, :pitch 71} {:time 126.5, :instrument 6, :pitch 71} {:time 128, :instrument 6, :pitch 71} {:time 128.5, :instrument 6, :pitch 73} {:time 129.5, :instrument 6, :pitch 69} {:time 133.5, :instrument 6, :pitch 69} {:time 134, :instrument 6, :pitch 69} {:time 135, :instrument 6, :pitch 66} {:time 136, :instrument 6, :pitch 69} {:time 137.5, :instrument 6, :pitch 68}]))

(defn lead5 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 93.5, :instrument 14, :pitch 64} {:time 94, :instrument 14, :pitch 66} {:time 94.5, :instrument 14, :pitch 69} {:time 95, :instrument 14, :pitch 71} {:time 95.5, :instrument 14, :pitch 73} {:time 97, :instrument 14, :pitch 71} {:time 98, :instrument 14, :pitch 69} {:time 98.5, :instrument 14, :pitch 71} {:time 99.5, :instrument 14, :pitch 69} {:time 99.75, :instrument 14, :pitch 71} {:time 100, :instrument 14, :pitch 69} {:time 101.5, :instrument 14, :pitch 66} {:time 105.5, :instrument 14, :pitch 69} {:time 106, :instrument 14, :pitch 69} {:time 106.5, :instrument 14, :pitch 69} {:time 107, :instrument 14, :pitch 68} {:time 107.5, :instrument 14, :pitch 68} {:time 108, :instrument 14, :pitch 66} {:time 105.5, :instrument 14, :pitch 57} {:time 106, :instrument 14, :pitch 57} {:time 106.5, :instrument 14, :pitch 57} {:time 107, :instrument 14, :pitch 56} {:time 107.5, :instrument 14, :pitch 56} {:time 108, :instrument 14, :pitch 54} {:time 110, :instrument 14, :pitch 78} {:time 110.5, :instrument 14, :pitch 76} {:time 111, :instrument 14, :pitch 73} {:time 111.5, :instrument 14, :pitch 71} {:time 112, :instrument 14, :pitch 73} {:time 114.5, :instrument 14, :pitch 71} {:time 115, :instrument 14, :pitch 73} {:time 115.5, :instrument 14, :pitch 71} {:time 116, :instrument 14, :pitch 71} {:time 116.5, :instrument 14, :pitch 69} {:time 117.5, :instrument 14, :pitch 69} {:time 118, :instrument 6, :pitch 66} {:time 119, :instrument 6, :pitch 74} {:time 120, :instrument 6, :pitch 73}]))

(defn plane1 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 125.5, :instrument 6, :pitch 74} {:time 126, :instrument 6, :pitch 74} {:time 126.5, :instrument 6, :pitch 74} {:time 128, :instrument 6, :pitch 74} {:time 128.5, :instrument 6, :pitch 76} {:time 129.5, :instrument 6, :pitch 73} {:time 133.5, :instrument 6, :pitch 73} {:time 134, :instrument 6, :pitch 73} {:time 135, :instrument 6, :pitch 69} {:time 136, :instrument 6, :pitch 73} {:time 137.5, :instrument 6, :pitch 71}]))

(defn flower1 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 144, :instrument 12, :pitch 78} {:time 144.5, :instrument 12, :pitch 74} {:time 145, :instrument 12, :pitch 71} {:time 145.5, :instrument 12, :pitch 78} {:time 146.5, :instrument 12, :pitch 74} {:time 147, :instrument 12, :pitch 71} {:time 147.5, :instrument 12, :pitch 76} {:time 148.5, :instrument 12, :pitch 73} {:time 149.5, :instrument 12, :pitch 71} {:time 150, :instrument 12, :pitch 69} {:time 152, :instrument 12, :pitch 80} {:time 152.5, :instrument 12, :pitch 76} {:time 153, :instrument 12, :pitch 73} {:time 153.5, :instrument 12, :pitch 80} {:time 154.5, :instrument 12, :pitch 76} {:time 155.5, :instrument 12, :pitch 78}]))

(defn star1 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 157, :instrument 4, :pitch 70} {:time 158, :instrument 4, :pitch 71} {:time 159, :instrument 4, :pitch 73} {:time 157, :instrument 6, :pitch 70} {:time 158, :instrument 6, :pitch 71} {:time 159, :instrument 6, :pitch 73}]))

(defn lead6 [time]
  (map (fn [m] (update m :time #(+ % time)))
       [{:time 176, :instrument 12, :pitch 86} {:time 177, :instrument 12, :pitch 86} {:time 178, :instrument 12, :pitch 86} {:time 179.5, :instrument 12, :pitch 86} {:time 180.5, :instrument 12, :pitch 85} {:time 184, :instrument 12, :pitch 86} {:time 185, :instrument 12, :pitch 86} {:time 186, :instrument 12, :pitch 86} {:time 188, :instrument 12, :pitch 88} {:time 189, :instrument 12, :pitch 90} {:time 189.5, :instrument 12, :pitch 88} {:time 193.5, :instrument 12, :pitch 88} {:time 194, :instrument 12, :pitch 88} {:time 194.5, :instrument 12, :pitch 86} {:time 195, :instrument 12, :pitch 85} {:time 195.5, :instrument 12, :pitch 83}
        {:time 176, :instrument 4, :pitch 74} {:time 177, :instrument 4, :pitch 74} {:time 178, :instrument 4, :pitch 74} {:time 179.5, :instrument 4, :pitch 74} {:time 180.5, :instrument 4, :pitch 73} {:time 184, :instrument 4, :pitch 74} {:time 185, :instrument 4, :pitch 74} {:time 186, :instrument 4 :pitch 74} {:time 188, :instrument 4, :pitch 76} {:time 189, :instrument 4, :pitch 78} {:time 189.5, :instrument 4, :pitch 76} {:time 193.5, :instrument 4, :pitch 76} {:time 194, :instrument 4, :pitch 76} {:time 194.5, :instrument 4, :pitch 74} {:time 195, :instrument 4, :pitch 73} {:time 195.5, :instrument 4, :pitch 71}
        {:time 176, :instrument 6, :pitch 74} {:time 177, :instrument 6 :pitch 74} {:time 178, :instrument 6, :pitch 74} {:time 179.5, :instrument 6 :pitch 74} {:time 180.5, :instrument 6 :pitch 73} {:time 184, :instrument 6, :pitch 74} {:time 185, :instrument 6, :pitch 74} {:time 186, :instrument 6 :pitch 74} {:time 188, :instrument 6, :pitch 76} {:time 189, :instrument 6, :pitch 78} {:time 189.5, :instrument 6, :pitch 76} {:time 193.5, :instrument 6 :pitch 76} {:time 194, :instrument 6 :pitch 76} {:time 194.5, :instrument 6, :pitch 74} {:time 195, :instrument 6 :pitch 73} {:time 195.5, :instrument 6 :pitch 71}]))

(def rhythm
  (concat
   bass-pat-1 bass-pat-2
   (drums-pat-1 0)
   (drums-pat-1 32)
   (drums-pat-1 64)
   (drums-pat-1 96)
   (drums-pat-2 0)
   (drums-pat-1 196)
   (lead1 0) (lead2 32) (lead3 0) (lead4 0)
   (gb1 0)
   (lead5 0)
   (plane1 0)
   (flower1 0)
   (map (fn [m] (update m :time #(+ % 16)))
        (flower1 0))))


(concat rhythm
  (star1 0)
  (map (fn [m] (update m :time #(+ % 16)))
          (star1 0))
  (lead6 0)
  (lead1 196)
  (lead5 196))")

(defn mecca []
  [:div
   [editor]
   [:div.flex-container
    [:div.flex-item
     [sci-editor/editor demo !points {:eval? true}]]
    [:div.flex-item
     [transport/transport 0 -0.5 0.5]
    [editor/toolbar 0 0]
     [:button
      {:on-click #(let [file-blob (js/Blob. [@(subscribe [:notes])] #js {"type" "text/plain"})
                        link (.createElement js/document "a")]
                    (set! (.-href link) (.createObjectURL js/URL file-blob))
                    (.setAttribute link "download" "mecca.txt")
                    (.appendChild (.-body js/document) link)
                    (.click link)
                    (.removeChild (.-body js/document) link))}
      "Download"]
     [load-song]]]])
