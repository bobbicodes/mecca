(ns ^:figwheel-hooks mecca.castle)

(defn mortar-row [x y width]
  [:line {:x1 x :x2 (+ x (* width 8))
          :y1 (+ y 3.5) :y2 (+ y 3.5)
          :stroke "black"}])

(defn brick-row [x y width offset]
  [:line {:x1 x :x2 (+ x (* 8 width))
          :y1 (+ 1.5 y) :y2 (+ 1.5 y)
          :stroke-width 3
          :stroke-dasharray "7 1"
          :stroke-dashoffset offset
          :stroke "#c74a0a"}])

(defn mortar-columns [x y width offset]
  [:line {:x1 x :x2 (+ x (* 8 width))
          :y1 (+ 1.5 y) :y2 (+ 1.5 y)
          :stroke-width 3
          :stroke-dasharray "1 7"
          :stroke-dashoffset offset
          :stroke "black"}])

(defn brick-row-pair [x y width]
  [:g
   [brick-row x y width 0]
   [mortar-columns x y width 1]
   [mortar-row x y width]
   [brick-row x (+ y 4) width 4]
   [mortar-columns x (+ y 4) width 5]
   [mortar-row x (+ y 4) width]])

(defn castle-arch [x y]
  [:g (for [[dy dx] [[16.5 3] [17.5 5] [18.5 6] [20.5 7] [21.5 7] [22.5 8]]]
        ^{:key [dy dx]}
        [:line {:x1 (+ x (- 40 dx)) :x2 (+ x 40 dx)
                :y1 (+ 48.5 dy) :y2 (+ 48.5 dy)
                :stroke "black"
                :stroke-width 2.1}])])

(defn castle-door [x y]
  [:g
   [:rect {:x x :y y
           :width 16
           :height 24
           :fill "black"}]
   [castle-arch (- x 32) y]])

(defn castle-roof [x y width]
  [:g
   [:line {:x1 x :x2 (+ x width)
           :y1 (+ y 0.5) :y2 (+ y 0.5)
           :stroke-width 1
           :stroke-dasharray "9 7"
           :stroke-dashoffset -11
           :stroke "#fbbbaf"}]
   [:line {:x1 x :x2 (+ x width)
           :y1 (+ y 4) :y2 (+ y 4)
           :stroke-width 6
           :stroke-dasharray "1 7"
           :stroke-dashoffset 5
           :stroke "#fbbbaf"}]
   [:line {:x1 x :x2 (+ x width)
           :y1 (+ y 4) :y2 (+ y 4)
           :stroke-width 6
           :stroke-dasharray "7 9"
           :stroke-dashoffset 4
           :stroke "#c74a0a"}]
   [:line {:x1 x :x2 (+ x width)
           :y1 (+ y 7.5) :y2 (+ y 7.5)
           :stroke-width 1
           :stroke-dasharray "9 7"
           :stroke-dashoffset -11
           :stroke "black"}]
   [:line {:x1 x :x2 (+ x width)
           :y1 (+ y 7.5) :y2 (+ y 7.5)
           :stroke-width 1
           :stroke-dasharray "9 7"
           :stroke-dashoffset 13
           :stroke "#fbbbaf"}]])

(defn brick-face [x y width]
  [:g {:transform "scale (0.15)"
       :opacity 1}
   [castle-roof x y (* 8 width)]
   [brick-row-pair x (+ y 8) width]
   [brick-row-pair x (+ y 16) width]
   [brick-row-pair x (+ y 24) width]
   [brick-row-pair x (+ y 32) width]
   [brick-row-pair x (+ y 40) width]
   (if (= width 10)
     [castle-door (+ 32 x) (+ y 24)])])