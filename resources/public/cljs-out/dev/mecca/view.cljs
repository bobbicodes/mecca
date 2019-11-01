(ns ^:figwheel-hooks mecca.view
  (:require [mecca.music :as music]
            [mecca.subs :as subs]
            [re-frame.core :as rf :refer [subscribe dispatch]]
            [mecca.events :as events]
            [mecca.notation :as notation]
            [mecca.castle :as castle]
            [mecca.transport :as transport]
            [mecca.editor :as editor :refer [svg-paths]]
            [mecca.xml :as xml]
            [mecca.upload :as upload]
            [mecca.mario :as mario :refer [mario]]))

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
                                    #(dispatch [:add-note @instrument
                                                (+ time (dec @editor-x))
                                                (get pitches pitch)])))}])))))

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
  (let [notes (subscribe [:notes])
        focused (subscribe [:focused-note-pos])
        current-position (subscribe [:current-position])
        editor-x (subscribe [:editor-beat-start])
        play-start (subscribe [:play-start])
        mario-run (subscribe [:mario-run])
        mario-jump (subscribe [:mario-jump])
        instrument (subscribe [:instrument])]
    (fn []
      (if (= 20 @mario-run)
        (dispatch [:jump-reset]))
      [:svg {:width "100%"
             :view-box "0 0 64 36"
             :style {:cursor "url(/mario-music-composer/resources/public/images/hand.png),crosshair"}}
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
        [notation/staff-lines]
        [editor/retract-editor 2]
         [notation/treble-clef
          (- 0.8 (* 6 (dec @editor-x)))
          6.3]
        [editor/advance-editor]
        [editor/advance-measure]
        [editor/advance-end]
        [note-targets]
        [note-guides]
        [note-cursor]
        [score-notes]
        (if @(subscribe [:loop-end])
          [editor/repeat-sign (+ 7 (* 6 @(subscribe [:loop-end]))) 8 0.13])]])))

(defn mecca []
  [:div
   [editor]
   [transport/transport 140 0 0.5]
   [editor/toolbar 71 0]
   [:div
    [:input#input {:type "file"
                   :on-change
                   upload/put-upload}]]])
