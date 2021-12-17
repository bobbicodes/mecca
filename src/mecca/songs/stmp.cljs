(ns mecca.songs.stmp)

(defn cello1 [time]
  [{:time (+ time 0) :instrument 2, :pitch 55}
   {:time (+ time 0.5) :instrument 2, :pitch 55}
   {:time (+ time 1) :instrument 2, :pitch 55}
   {:time (+ time 2) :instrument 2, :pitch 55}
   {:time (+ time 4) :instrument 2, :pitch 60} 
   {:time (+ time 5) :instrument 2, :pitch 64} 
   {:time (+ time 6) :instrument 2, :pitch 62} 
   {:time (+ time 8) :instrument 2, :pitch 58}
   {:time (+ time 10) :instrument 2, :pitch 69} 
   {:time (+ time 12) :instrument 2, :pitch 67}
   {:time (+ time 12.5) :instrument 2, :pitch 67}
   {:time (+ time 13) :instrument 2, :pitch 67}
   {:time (+ time 14) :instrument 2, :pitch 67}
   {:time (+ time 16) :instrument 2, :pitch 67}
   {:time (+ time 16.5) :instrument 2, :pitch 67}
   {:time (+ time 17) :instrument 2, :pitch 67}
   {:time (+ time 20) :instrument 2, :pitch 65} 
   {:time (+ time 21) :instrument 2, :pitch 67} 
   {:time (+ time 22) :instrument 2, :pitch 69} 
   {:time (+ time 23) :instrument 2, :pitch 65} 
   {:time (+ time 24) :instrument 2, :pitch 67}
   {:time (+ time 24.5) :instrument 2, :pitch 67}
   {:time (+ time 25) :instrument 2, :pitch 67}
   {:time (+ time 25.5) :instrument 2, :pitch 67}
   {:time (+ time 27) :instrument 2, :pitch 65}
   {:time (+ time 27.5) :instrument 2, :pitch 65}
   {:time (+ time 28) :instrument 2, :pitch 65}
   {:time (+ time 28.5) :instrument 2, :pitch 65}
   {:time (+ time 30) :instrument 2, :pitch 64}
   {:time (+ time 30.5) :instrument 2, :pitch 64}
   {:time (+ time 31) :instrument 2, :pitch 64}
   {:time (+ time 31.5) :instrument 2, :pitch 64}
   {:time (+ time 33) :instrument 2, :pitch 64} 
   {:time (+ time 34) :instrument 2, :pitch 60} 
   {:time (+ time 35) :instrument 2, :pitch 64} 
   {:time (+ time 36) :instrument 2, :pitch 62}
   {:time (+ time 37) :instrument 2, :pitch 62}
   {:time (+ time 38) :instrument 2, :pitch 62}])

(def boat1
  [{:time 187.5, :instrument 13, :pitch 62} {:time 187, :instrument 13, :pitch 67} {:time 186.5, :instrument 13, :pitch 65} {:time 186, :instrument 13, :pitch 69} {:time 185.5, :instrument 13, :pitch 67} {:time 185, :instrument 13, :pitch 65} {:time 184.5, :instrument 13, :pitch 62} {:time 184, :instrument 13, :pitch 60} {:time 183.5, :instrument 13, :pitch 65} {:time 183, :instrument 13, :pitch 69} {:time 182.5, :instrument 13, :pitch 70} {:time 182, :instrument 13, :pitch 72} {:time 181.5, :instrument 13, :pitch 67} {:time 181, :instrument 13, :pitch 65} {:time 180.5, :instrument 13, :pitch 67} {:time 180, :instrument 13, :pitch 69} {:time 179.5, :instrument 13, :pitch 70} {:time 179, :instrument 13, :pitch 72} {:time 178.5, :instrument 13, :pitch 74} {:time 178, :instrument 13, :pitch 75} {:time 177.5, :instrument 13, :pitch 74} {:time 177, :instrument 13, :pitch 72} {:time 176.5, :instrument 13, :pitch 70} {:time 176, :instrument 13, :pitch 68} {:time 175.5, :instrument 13, :pitch 63} {:time 175, :instrument 13, :pitch 68} {:time 174.5, :instrument 13, :pitch 67} {:time 174, :instrument 13, :pitch 71} {:time 173.5, :instrument 13, :pitch 69} {:time 173, :instrument 13, :pitch 67} {:time 172.5, :instrument 13, :pitch 62} {:time 172, :instrument 13, :pitch 67} {:time 171.5, :instrument 13, :pitch 69} {:time 171, :instrument 13, :pitch 65} {:time 170.5, :instrument 13, :pitch 64} {:time 170, :instrument 13, :pitch 62} {:time 169.5, :instrument 13, :pitch 60} {:time 169, :instrument 13, :pitch 65} {:time 168.5, :instrument 13, :pitch 67} {:time 168, :instrument 13, :pitch 71} {:time 167.5, :instrument 13, :pitch 69} {:time 167, :instrument 13, :pitch 67} {:time 166.5, :instrument 13, :pitch 69} {:time 166, :instrument 13, :pitch 71} {:time 165.5, :instrument 13, :pitch 73} {:time 165, :instrument 13, :pitch 74} {:time 164.5, :instrument 13, :pitch 76} {:time 164, :instrument 13, :pitch 74} {:time 163.5, :instrument 13, :pitch 73} {:time 163, :instrument 13, :pitch 74} {:time 162.5, :instrument 13, :pitch 76} {:time 162, :instrument 13, :pitch 74} {:time 161.5, :instrument 13, :pitch 76} {:time 161, :instrument 13, :pitch 77} {:time 160.5, :instrument 13, :pitch 76} {:time 160, :instrument 13, :pitch 74} {:time 159.5, :instrument 13, :pitch 71} {:time 159, :instrument 13, :pitch 72} {:time 158.5, :instrument 13, :pitch 74} {:time 158, :instrument 13, :pitch 72} {:time 157.5, :instrument 13, :pitch 71} {:time 157, :instrument 13, :pitch 69} {:time 156.5, :instrument 13, :pitch 67} {:time 156, :instrument 13, :pitch 65} {:time 155.5, :instrument 13, :pitch 64} {:time 155, :instrument 13, :pitch 65} {:time 154.5, :instrument 13, :pitch 64} {:time 154, :instrument 13, :pitch 62} {:time 153.5, :instrument 13, :pitch 67} {:time 153, :instrument 13, :pitch 71} {:time 152.5, :instrument 13, :pitch 69} {:time 152, :instrument 13, :pitch 71} {:time 151.5, :instrument 13, :pitch 69} {:time 151, :instrument 13, :pitch 67} {:time 150.5, :instrument 13, :pitch 69} {:time 150, :instrument 13, :pitch 65} {:time 149.5, :instrument 13, :pitch 68} {:time 149, :instrument 13, :pitch 69} {:time 148.5, :instrument 13, :pitch 68} {:time 148, :instrument 13, :pitch 69} {:time 147.5, :instrument 13, :pitch 72} {:time 147, :instrument 13, :pitch 71} {:time 146.5, :instrument 13, :pitch 72} {:time 146, :instrument 13, :pitch 71} {:time 145.5, :instrument 13, :pitch 72} {:time 145, :instrument 13, :pitch 74} {:time 144.5, :instrument 13, :pitch 71} {:time 144, :instrument 13, :pitch 69} {:time 143.5, :instrument 13, :pitch 68} {:time 143, :instrument 13, :pitch 66} {:time 142.5, :instrument 13, :pitch 68} {:time 142, :instrument 13, :pitch 66} {:time 141.5, :instrument 13, :pitch 64} {:time 141, :instrument 13, :pitch 62} {:time 140.5, :instrument 13, :pitch 64} {:time 140, :instrument 13, :pitch 66} {:time 139.5, :instrument 13, :pitch 64} {:time 139, :instrument 13, :pitch 62} {:time 138.5, :instrument 13, :pitch 64} {:time 138, :instrument 13, :pitch 62} {:time 137, :instrument 13, :pitch 64} {:time 136, :instrument 13, :pitch 69} {:time 135, :instrument 13, :pitch 66} {:time 134, :instrument 13, :pitch 64} {:time 133, :instrument 13, :pitch 66} {:time 132, :instrument 13, :pitch 68} {:time 131, :instrument 13, :pitch 64} {:time 130, :instrument 13, :pitch 73} {:time 129, :instrument 13, :pitch 69} {:time 128, :instrument 13, :pitch 71} {:time 127, :instrument 13, :pitch 73} {:time 126, :instrument 13, :pitch 71} {:time 125, :instrument 13, :pitch 68} {:time 124, :instrument 13, :pitch 66} {:time 123, :instrument 13, :pitch 64} {:time 122, :instrument 13, :pitch 71} {:time 121, :instrument 13, :pitch 73} {:time 120, :instrument 13, :pitch 71} {:time 119, :instrument 13, :pitch 68} {:time 118, :instrument 13, :pitch 66} {:time 117, :instrument 13, :pitch 64} {:time 116, :instrument 13, :pitch 66} {:time 115, :instrument 13, :pitch 61} {:time 114, :instrument 13, :pitch 64} {:time 113, :instrument 13, :pitch 68} {:time 112, :instrument 13, :pitch 66} {:time 111, :instrument 13, :pitch 64} {:time 110, :instrument 13, :pitch 66} {:time 109, :instrument 13, :pitch 68} {:time 108, :instrument 13, :pitch 71} {:time 107, :instrument 13, :pitch 68} {:time 106, :instrument 13, :pitch 66} {:time 105, :instrument 13, :pitch 64} {:time 104, :instrument 13, :pitch 66} {:time 103, :instrument 13, :pitch 61} {:time 102, :instrument 13, :pitch 64} {:time 101, :instrument 13, :pitch 66} {:time 100, :instrument 13, :pitch 68} {:time 99, :instrument 13, :pitch 71} {:time 98, :instrument 13, :pitch 68} {:time 97, :instrument 13, :pitch 66} {:time 96, :instrument 13, :pitch 64}])

(def heart1
  [{:time 188, :instrument 15, :pitch 67}  {:time 185, :instrument 15, :pitch 65} {:time 182, :instrument 15, :pitch 63}  {:time 179, :instrument 15, :pitch 60}  {:time 176, :instrument 15, :pitch 62}  {:time 173, :instrument 15, :pitch 65} {:time 170, :instrument 15, :pitch 65}  {:time 161, :instrument 15, :pitch 65} {:time 158, :instrument 15, :pitch 65}  {:time 152, :instrument 15, :pitch 65} {:time 146, :instrument 15, :pitch 65}  {:time 143, :instrument 15, :pitch 64} {:time 135, :instrument 15, :pitch 64}  {:time 132, :instrument 15, :pitch 64} {:time 129, :instrument 15, :pitch 61} {:time 126, :instrument 15, :pitch 59}  {:time 123, :instrument 15, :pitch 61}  {:time 120, :instrument 15, :pitch 64}  {:time 114, :instrument 15, :pitch 61} {:time 108, :instrument 15, :pitch 64}  {:time 102, :instrument 15, :pitch 61} {:time 96, :instrument 15, :pitch 64}])

(def mario [{:time 0, :instrument 1, :pitch 79} {:time 0, :instrument 1, :pitch 67} {:time 3, :instrument 1, :pitch 76} {:time 3, :instrument 1, :pitch 72} {:time 12, :instrument 1, :pitch 84} {:time 12, :instrument 1, :pitch 67} {:time 12, :instrument 1, :pitch 76} {:time 6, :instrument 1, :pitch 79} {:time 6, :instrument 1, :pitch 67} {:time 9, :instrument 1, :pitch 77} {:time 9, :instrument 1, :pitch 74} {:time 15, :instrument 1, :pitch 79} {:time 15, :instrument 1, :pitch 76} {:time 15, :instrument 1, :pitch 72} {:time 18, :instrument 1, :pitch 70} {:time 18, :instrument 1, :pitch 82} {:time 21, :instrument 1, :pitch 77} {:time 21, :instrument 1, :pitch 74} {:time 24, :instrument 1, :pitch 67} {:time 24, :instrument 1, :pitch 84} {:time 24, :instrument 1, :pitch 76} {:time 27, :instrument 1, :pitch 69} {:time 30, :instrument 1, :pitch 72} {:time 33, :instrument 1, :pitch 72} {:time 36, :instrument 1, :pitch 71} {:time 33, :instrument 1, :pitch 77} {:time 30, :instrument 1, :pitch 79} {:time 33, :instrument 1, :pitch 79} {:time 36, :instrument 1, :pitch 83} {:time 39, :instrument 1, :pitch 69} {:time 42, :instrument 1, :pitch 71} {:time 45, :instrument 1, :pitch 72} {:time 39, :instrument 1, :pitch 83} {:time 42, :instrument 1, :pitch 83} {:time 45, :instrument 1, :pitch 81} {:time 48, :instrument 1, :pitch 79} {:time 48, :instrument 1, :pitch 67} {:time 51, :instrument 1, :pitch 76} {:time 51, :instrument 1, :pitch 72} {:time 60, :instrument 1, :pitch 84} {:time 60, :instrument 1, :pitch 67} {:time 60, :instrument 1, :pitch 76} {:time 54, :instrument 1, :pitch 79} {:time 54, :instrument 1, :pitch 67} {:time 57, :instrument 1, :pitch 77} {:time 57, :instrument 1, :pitch 74} {:time 63, :instrument 1, :pitch 79} {:time 63, :instrument 1, :pitch 76} {:time 63, :instrument 1, :pitch 72} {:time 66, :instrument 1, :pitch 70} {:time 66, :instrument 1, :pitch 82} {:time 69, :instrument 1, :pitch 77} {:time 69, :instrument 1, :pitch 74} {:time 72, :instrument 1, :pitch 67} {:time 72, :instrument 1, :pitch 84} {:time 72, :instrument 1, :pitch 76} {:time 75, :instrument 1, :pitch 69} {:time 78, :instrument 1, :pitch 72} {:time 81, :instrument 1, :pitch 72} {:time 84, :instrument 1, :pitch 71} {:time 81, :instrument 1, :pitch 77} {:time 78, :instrument 1, :pitch 79} {:time 81, :instrument 1, :pitch 79} {:time 84, :instrument 1, :pitch 83} {:time 87, :instrument 1, :pitch 69} {:time 90, :instrument 1, :pitch 71} {:time 93, :instrument 1, :pitch 72} {:time 87, :instrument 1, :pitch 83} {:time 90, :instrument 1, :pitch 83} {:time 93, :instrument 1, :pitch 81}])

(defn strum [notes]
  (let [chord (reverse (sort-by :pitch notes))]
    (for [note (range (count chord))]
      (update (nth chord note) :time #(- % (* 0.125 note))))))

(defn chord [time notes]
  (map (fn [n] {:time time :instrument 12, :pitch n})
       notes))

(defn harp1 [time]
  (concat
   (strum (chord (+ time 0) [68 71 76 80 83]))
   (strum (chord (+ time 6) [64 68 73 76 80]))
   (strum (chord (+ time 12) [68 71 76 80 83]))
   (strum (chord (+ time 18) [64 68 73 76 80]))
   (strum (chord (+ time 24) [68 71 76 80 83]))
   (strum (chord (+ time 27) [64 68 73 76 80 85]))
   (strum (chord (+ time 30) [62 66 71 74 78 83 86]))
   (strum (chord (+ time 33) [64 69 73 76 81 85]))
   (strum (chord (+ time 36) [68 71 76 80 83]))
   (strum (chord (+ time 39) [66 69 74 78 81]))
   (strum (chord (+ time 47) [66 69 74 78 81]))))

(defn harp2 [time]
  (concat
   (strum (chord (+ time 0) [65 69 72 77 81]))
   (strum (chord (+ time 6) [67 71 74 79 83]))
   (strum (chord (+ time 12) [65 69 72 77 81]))
   (strum (chord (+ time 15) [67 71 74 79 83]))
   (strum (chord (+ time 24) [67 71 74 79 83]))
   (strum (chord (+ time 27) [65 69 72 77 81]))
   (strum (chord (+ time 30) [67 71 74 79 83]))
   (strum (chord (+ time 33) [63 72 75 80 84]))
   (strum (chord (+ time 36) [63 70 75 79 82]))
   (strum (chord (+ time 39) [65 70 72 77 82]))
   (strum (chord (+ time 42) [65 69 72 77 81]))))

(def violin
  [{:time 188, :instrument 3, :pitch 67} {:time 187, :instrument 3, :pitch 65} {:time 186, :instrument 3, :pitch 69} {:time 185, :instrument 3, :pitch 70} {:time 183, :instrument 3, :pitch 70} {:time 182, :instrument 3, :pitch 70} {:time 180, :instrument 3, :pitch 72} {:time 179, :instrument 3, :pitch 72} {:time 177, :instrument 3, :pitch 71} {:time 176, :instrument 3, :pitch 71} {:time 174, :instrument 3, :pitch 69} {:time 173, :instrument 3, :pitch 69} {:time 163, :instrument 3, :pitch 67} {:time 162, :instrument 3, :pitch 67} {:time 161, :instrument 3, :pitch 67} {:time 160, :instrument 3, :pitch 65} {:time 159, :instrument 3, :pitch 69} {:time 158, :instrument 3, :pitch 69} {:time 157, :instrument 3, :pitch 71} {:time 156, :instrument 3, :pitch 74} {:time 155, :instrument 3, :pitch 67} {:time 154, :instrument 3, :pitch 67} {:time 153, :instrument 3, :pitch 67} {:time 152, :instrument 3, :pitch 67} {:time 151, :instrument 3, :pitch 65} {:time 149, :instrument 3, :pitch 69} {:time 148, :instrument 3, :pitch 69} {:time 147, :instrument 3, :pitch 69} {:time 146, :instrument 3, :pitch 69} {:time 138, :instrument 3, :pitch 69} {:time 137, :instrument 3, :pitch 69} {:time 136, :instrument 3, :pitch 69} {:time 135, :instrument 3, :pitch 69} {:time 134, :instrument 3, :pitch 71} {:time 133, :instrument 3, :pitch 64} {:time 132, :instrument 3, :pitch 71} {:time 130, :instrument 3, :pitch 73} {:time 129, :instrument 3, :pitch 73} {:time 127, :instrument 3, :pitch 74} {:time 126, :instrument 3, :pitch 74} {:time 124, :instrument 3, :pitch 73} {:time 123, :instrument 3, :pitch 73} {:time 121, :instrument 3, :pitch 71} {:time 120, :instrument 3, :pitch 71} {:time 116, :instrument 3, :pitch 68} {:time 115, :instrument 3, :pitch 68} {:time 114, :instrument 3, :pitch 68} {:time 113, :instrument 3, :pitch 59} {:time 110, :instrument 3, :pitch 71} {:time 109, :instrument 3, :pitch 71} {:time 108, :instrument 3, :pitch 71} {:time 107, :instrument 3, :pitch 73} {:time 106, :instrument 3, :pitch 64} {:time 104, :instrument 3, :pitch 68} {:time 103, :instrument 3, :pitch 68} {:time 102, :instrument 3, :pitch 68} {:time 101, :instrument 3, :pitch 59} {:time 98, :instrument 3, :pitch 71} {:time 97, :instrument 3, :pitch 71} {:time 96, :instrument 3, :pitch 71} {:time 95, :instrument 3, :pitch 69} {:time 94, :instrument 3, :pitch 62}])

(def stmp
  (concat mario (cello1 0)
          (cello1 48)
          (map #(assoc % :instrument 3) (cello1 48))
          (harp1 96)
          (harp2 (+ 96 50))
          boat1
          violin
          heart1))
