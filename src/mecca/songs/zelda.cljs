(ns mecca.songs.zelda)

(defn bass-triad [time pitch]
  [{:time time :instrument 15, :pitch pitch}
   {:time (+ time 4) :instrument 15, :pitch (+ pitch 7)} {:time (+ time 8) :instrument 15, :pitch (+ pitch 12)}])

(defn bass-ostinato [time pitch]
  [{:time (+ time 0,) :instrument 15, :pitch pitch}
  {:time (+ time 4,) :instrument 15, :pitch pitch}
  {:time (+ time 2,) :instrument 15, :pitch pitch}
  {:time (+ time 3,) :instrument 15, :pitch pitch}
  {:time (+ time 6,) :instrument 15, :pitch pitch}
  {:time (+ time 7,) :instrument 15, :pitch pitch}
  {:time (+ time 8,) :instrument 15, :pitch pitch}
  {:time (+ time 10) :instrument 15, :pitch pitch}
  {:time (+ time 11) :instrument 15, :pitch pitch}
  {:time (+ time 12) :instrument 15, :pitch pitch}
  {:time (+ time 14) :instrument 15, :pitch pitch}
  {:time (+ time 15) :instrument 15, :pitch pitch}])

(def bass1
  (concat
   (bass-triad 0 60)
   (bass-triad 16 58)
   (bass-triad 32 56)
   (bass-triad 48 55)))

(def bass2
   (concat
    (bass-ostinato 64 60)
    (bass-ostinato 80 60)
    (bass-ostinato 96 60)
    (bass-ostinato 112 58)
    (bass-ostinato 128 56)
    (bass-ostinato 144 55)
    (bass-ostinato 160 60)
    (bass-ostinato 176 58)
    (bass-ostinato 192 56)
    (bass-ostinato 208 63)
    (bass-ostinato 224 61)
    (bass-ostinato 240 60)
    (bass-ostinato 256 62)
    (bass-ostinato 272 55)
    (bass-ostinato 288 60)
    (bass-ostinato 304 58)
    (bass-ostinato 320 56)
    (bass-ostinato 336 55)))

(def zelda
  (into bass1 bass2))