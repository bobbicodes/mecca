(ns mecca.music
  (:require
   [clojure.string :as str]
   [cljs.core.async :refer [<! chan put! close!]]
   [mecca.songs.popcorn :refer [popcorn]]
   [mecca.songs.oohchild :refer [oohchild]]
   [re-frame.core :as rf :refer [subscribe dispatch]])
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]]))

(defn mario-jump []
  (let [beat (subscribe [:current-position])
        notes (subscribe [:notes])
        jump (subscribe [:mario-jump])]
    (when (and @(subscribe [:playing?])
               (zero? @jump))
      (if (< 0 (count (filter #(= (:time %) (inc @beat))
                              @notes)))
        (dispatch [:jump!])))))

(defn mario-move []
  (let [notes (subscribe [:notes])
        playing? @(subscribe [:playing?])
        now (.-currentTime @(subscribe [:audio-context]))
        length (apply max (map #(:time %) @notes))
        started (subscribe [:play-start])
        elapsed (- now @started)
        beat-length (/ 60 @(subscribe [:tempo]))
        end-time (+ @started (* beat-length 4))
        current-beat (/ elapsed beat-length)
        last-drawn-pos (subscribe [:current-position])]
    (when playing?
      (if (< length current-beat)
        (dispatch [:play-off])
        (if (< @last-drawn-pos current-beat)
          (do (dispatch [:move-mario])
              (dispatch [:advance-position])))))
    (mario-jump)))

(defn dispatch-timer-event []
  (dispatch [:tick!])
  (mario-move))

(defonce do-timer
  (js/setInterval dispatch-timer-event 60))

(defn load-sound [named-url]
  (let [out (chan)
        req (js/XMLHttpRequest.)]
    (set! (.-responseType req) "arraybuffer")
    (set! (.-onload req) (fn [e]
                           (if (= (.-status req) 200)
                             (do (put! out (assoc named-url :buffer (.-response req)))
                                 (close! out))
                             (close! out))))
    (.open req "GET" (:url named-url) true)
    (.send req)
    out))

(defn decode [named-url]
  (let [out (chan)]
    (if (:buffer named-url)
      (do
        (.decodeAudioData
         @(subscribe [:audio-context]) (:buffer named-url)
         (fn [decoded-buffer]
           (put! out (assoc named-url :decoded-buffer decoded-buffer))
           (close! out))
         (fn []
           (.error js/console "Error loading file " (prn named-url))
           (close! out))))
      (close! out))
    out))

(defn buffer-source [buffer]
  (let [source (.createBufferSource @(subscribe [:audio-context]))]
    (set! (.-buffer source) buffer)
    source))

(defn get-and-decode [named-url]
  (go
    (when-let [s (<! (load-sound named-url))]
      (<! (decode s)))))

(defn load-samples []
  (go-loop [result {}
            sounds (range 1 19)]
    (if-not (nil? (first sounds))
      (let [sound (first sounds)
            decoded-buffer (<! (get-and-decode {:url (str "/audio/" sound ".mp3")
                                                :sound sound}))]
        (prn sound)
        (prn decoded-buffer)
        (recur (assoc result sound decoded-buffer)
               (rest sounds)))
      result)))

(defonce loading-samples
  (go
    (dispatch [:load-samples  (<! (load-samples))])
    (prn "Samples loaded")))

(defn add-semitone [rate]
  (* rate (.pow js/Math 2 (/ 1 12))))

(defn sub-semitone [rate]
  (* rate (.pow js/Math 2 (/ -1 12))))

(defn inc-rate [semis]
  (reduce add-semitone (repeat semis 1)))

(defn dec-rate [semis]
  (reduce sub-semitone (repeat semis 1)))

(defn pitch->rate [midi-num]
  (if (< 66 midi-num)
    (inc-rate (- midi-num 66))
    (dec-rate (- 68 midi-num))))

(defn play-note [pitch]
  (let [context       @(subscribe [:audio-context])
        samples       (subscribe [:samples])
        instrument    (subscribe [:instrument])
        audio-buffer  (:decoded-buffer (get @samples @instrument))
        sample-source (.createBufferSource context)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-playbackRate sample-source)
     (pitch->rate pitch)
     (.-currentTime context))
    (.connect sample-source (.-destination context))
    (.start sample-source)
    sample-source))

(defn play-sample [instrument pitch]
  (let [context (subscribe [:audio-context])
        samples (subscribe [:samples])
        audio-buffer (:decoded-buffer (get @samples instrument))
        sample-source (.createBufferSource @context)
        compressor (.createDynamicsCompressor @context)
        analyser (.createAnalyser @context)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-playbackRate sample-source)
     (pitch->rate pitch)
     (.-currentTime @context))
    (.connect sample-source analyser)
    (.connect sample-source (.-destination @context))
    (.start sample-source)
    sample-source))

(defn play-at [instrument pitch time]
  (let [context (subscribe [:audio-context])
        samples (subscribe [:samples])
        audio-buffer (:decoded-buffer (get @samples instrument))
        sample-source (.createBufferSource @context)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-playbackRate sample-source)
     (pitch->rate pitch)
     time)
    (.connect sample-source (.-destination @context))
    (.start sample-source time)
    sample-source))

(defn delay-note [beats note]
  (update note :time #(+ beats %)))

(defn advance-note [beats note]
  (update note :time #(- % beats)))

(defn queue-section [from to]
  (let [notes (subscribe [:notes])
        started (subscribe [:play-start])
        tempo (subscribe [:tempo])
        section (filter #(<= from (:time %) to) @notes)
        advanced (map #(advance-note from %) section)]
    (doall (for [{:keys [time instrument pitch]} section]
             (play-at instrument pitch (+ @started (* (/ 60 @tempo) time)))))))

(defn play-section [from to]
  (let [notes (subscribe [:notes])
        now (.-currentTime @(subscribe [:audio-context]))
        tempo (subscribe [:tempo])
        section (filter #(<= from (:time %) to) @notes)
        advanced (map #(advance-note from %) section)]
    (doall (for [{:keys [time instrument pitch]} advanced]
             (play-at instrument pitch (+ now (* (/ 60 @tempo) time)))))))

(defn play-notes [n]
  (let [editor-start (subscribe [:editor-beat-start])
        tempo (subscribe [:tempo])
        beat-length (/ 60 @(subscribe [:tempo]))
        play-pos (if (< @editor-start 4)
                   @editor-start
                   (+ 4 @(subscribe [:editor-beat-start])))]
    (play-section (dec play-pos) (+ (dec play-pos) (* n 0.5)))))

(defn play-from-here []
  (let [notes (subscribe [:notes])
        editor-start (subscribe [:editor-beat-start])
        play-pos ;(if (< @editor-start 4)
        @editor-start
                  ; (+ 4 @(subscribe [:editor-beat-start])))
        length (apply max (map #(:time %) @notes))]
    (play-section (dec play-pos) (+ 16 play-pos))))

(defn play-song! []
  (let [notes (subscribe [:notes])
        now (.-currentTime @(subscribe [:audio-context]))
        tempo (subscribe [:tempo])]
    (dispatch [:reset-position])
    (doall (for [{:keys [time instrument pitch]} @notes]
             (play-at instrument pitch (+ now (* (/ 60 @tempo) time)))))))

(defn get-bytes! [analyser freq-data]
  (.getByteFrequencyData analyser freq-data)
  freq-data)

(filter #(= 13 (:instrument %))
        @(subscribe [:notes]))

(defn loop-notes [notes]
  (let [length (apply max (map #(:time %) notes))]
    (into notes
          (map #(delay-note (+ 0.5 length) %) notes))))

(defn bass1 [time root]
  [{:time time, :instrument 15, :pitch root}
   {:time (+ time 0.5), :instrument 15, :pitch (+ root 4)} 
   {:time (+ time 1), :instrument 15, :pitch (+ 7 root)} 
   {:time (+ time 1.5), :instrument 15, :pitch (+ root 4)}
   {:time (+ time 2), :instrument 15, :pitch root} 
   {:time (+ time 3), :instrument 15, :pitch (- root 1)} 
   {:time (+ time 3.5), :instrument 15, :pitch (- root 3)} 
   {:time (+ time 4), :instrument 15, :pitch (- root 5)} 
   {:time (+ time 6), :instrument 15, :pitch (- root 5)}  
   {:time (+ time 6.5), :instrument 15, :pitch (- root 3)}  
   {:time (+ time 7), :instrument 15, :pitch (- root 1)}  
   {:time (+ time 7.5), :instrument 15, :pitch root} 
   ])

(defn juno1 [time]
   [{:time (+ time 0), :instrument 1, :pitch 79} {:time (+ time 0), :instrument 1, :pitch 67} {:time (+ time 3), :instrument 1, :pitch 76} {:time (+ time 3), :instrument 1, :pitch 72} {:time (+ time 12), :instrument 1, :pitch 84} {:time (+ time 12), :instrument 1, :pitch 67} {:time (+ time 12), :instrument 1, :pitch 76} {:time (+ time 6), :instrument 1, :pitch 79} {:time (+ time 6), :instrument 1, :pitch 67} {:time (+ time 9), :instrument 1, :pitch 77} {:time (+ time 9), :instrument 1, :pitch 74} {:time (+ time 15), :instrument 1, :pitch 79} {:time (+ time 15), :instrument 1, :pitch 76} {:time (+ time 15), :instrument 1, :pitch 72} {:time (+ time 18), :instrument 1, :pitch 70} {:time (+ time 18), :instrument 1, :pitch 82} {:time (+ time 21), :instrument 1, :pitch 77} {:time (+ time 21), :instrument 1, :pitch 74} {:time (+ time 24), :instrument 1, :pitch 67} {:time (+ time 24), :instrument 1, :pitch 84} {:time (+ time 24), :instrument 1, :pitch 76} {:time (+ time 27), :instrument 1, :pitch 69} {:time (+ time 30), :instrument 1, :pitch 72} {:time (+ time 33), :instrument 1, :pitch 72} {:time (+ time 36), :instrument 1, :pitch 71} {:time (+ time 33), :instrument 1, :pitch 77} {:time (+ time 30), :instrument 1, :pitch 79} {:time (+ time 33), :instrument 1, :pitch 79} {:time (+ time 36), :instrument 1, :pitch 83} {:time (+ time 39), :instrument 1, :pitch 69} {:time (+ time 42), :instrument 1, :pitch 71} {:time (+ time 45), :instrument 1, :pitch 72} {:time (+ time 39), :instrument 1, :pitch 83} {:time (+ time 42), :instrument 1, :pitch 83} {:time (+ time 45), :instrument 1, :pitch 81}]
  )

(defn cello1 [time]
  [{:time (+ time 0) :instrument 2, :pitch 55} 
   {:time (+ time 0.5) :instrument 2, :pitch 55} 
   {:time (+ time 1) :instrument 2, :pitch 55} 
   {:time (+ time 2) :instrument 2, :pitch 55} 
   {:time (+ time 4) :instrument 2, :pitch 60} {:time (+ time 5) :instrument 2, :pitch 64} {:time (+ time 6) :instrument 2, :pitch 62} {:time (+ time 8) :instrument 2, :pitch 58} {:time (+ time 10) :instrument 2, :pitch 69} {:time (+ time 12) :instrument 2, :pitch 67} 
   {:time (+ time 12.5) :instrument 2, :pitch 67} 
   {:time (+ time 13) :instrument 2, :pitch 67} 
   {:time (+ time 14) :instrument 2, :pitch 67} 
   {:time (+ time 16) :instrument 2, :pitch 67} 
   {:time (+ time 16.5) :instrument 2, :pitch 67} 
   {:time (+ time 17) :instrument 2, :pitch 67} 
   {:time (+ time 20) :instrument 2, :pitch 65} {:time (+ time 21) :instrument 2, :pitch 67} {:time (+ time 22) :instrument 2, :pitch 69} {:time (+ time 23) :instrument 2, :pitch 65} {:time (+ time 24) :instrument 2, :pitch 67}
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
   {:time (+ time 33) :instrument 2, :pitch 64} {:time (+ time 34) :instrument 2, :pitch 60} {:time (+ time 35) :instrument 2, :pitch 64} {:time (+ time 36) :instrument 2, :pitch 62}
   {:time (+ time 37) :instrument 2, :pitch 62}
   {:time (+ time 38) :instrument 2, :pitch 62}])

(defn octave [notes]
  (update notes :pitch #(+ 12 %)))

(concat (cello1 0) (map octave (cello1 0)))


(cello1 0)

(def boat1
  [{:time 187.5, :instrument 13, :pitch 62} {:time 187, :instrument 13, :pitch 67} {:time 186.5, :instrument 13, :pitch 65} {:time 186, :instrument 13, :pitch 69} {:time 185.5, :instrument 13, :pitch 67} {:time 185, :instrument 13, :pitch 65} {:time 184.5, :instrument 13, :pitch 62} {:time 184, :instrument 13, :pitch 60} {:time 183.5, :instrument 13, :pitch 65} {:time 183, :instrument 13, :pitch 69} {:time 182.5, :instrument 13, :pitch 70} {:time 182, :instrument 13, :pitch 72} {:time 181.5, :instrument 13, :pitch 67} {:time 181, :instrument 13, :pitch 65} {:time 180.5, :instrument 13, :pitch 67} {:time 180, :instrument 13, :pitch 69} {:time 179.5, :instrument 13, :pitch 70} {:time 179, :instrument 13, :pitch 72} {:time 178.5, :instrument 13, :pitch 74} {:time 178, :instrument 13, :pitch 75} {:time 177.5, :instrument 13, :pitch 74} {:time 177, :instrument 13, :pitch 72} {:time 176.5, :instrument 13, :pitch 70} {:time 176, :instrument 13, :pitch 68} {:time 175.5, :instrument 13, :pitch 63} {:time 175, :instrument 13, :pitch 68} {:time 174.5, :instrument 13, :pitch 67} {:time 174, :instrument 13, :pitch 71} {:time 173.5, :instrument 13, :pitch 69} {:time 173, :instrument 13, :pitch 67} {:time 172.5, :instrument 13, :pitch 62} {:time 172, :instrument 13, :pitch 67} {:time 171.5, :instrument 13, :pitch 69} {:time 171, :instrument 13, :pitch 65} {:time 170.5, :instrument 13, :pitch 64} {:time 170, :instrument 13, :pitch 62} {:time 169.5, :instrument 13, :pitch 60} {:time 169, :instrument 13, :pitch 65} {:time 168.5, :instrument 13, :pitch 67} {:time 168, :instrument 13, :pitch 71} {:time 167.5, :instrument 13, :pitch 69} {:time 167, :instrument 13, :pitch 67} {:time 166.5, :instrument 13, :pitch 69} {:time 166, :instrument 13, :pitch 71} {:time 165.5, :instrument 13, :pitch 73} {:time 165, :instrument 13, :pitch 74} {:time 164.5, :instrument 13, :pitch 76} {:time 164, :instrument 13, :pitch 74} {:time 163.5, :instrument 13, :pitch 73} {:time 163, :instrument 13, :pitch 74} {:time 162.5, :instrument 13, :pitch 76} {:time 162, :instrument 13, :pitch 74} {:time 161.5, :instrument 13, :pitch 76} {:time 161, :instrument 13, :pitch 77} {:time 160.5, :instrument 13, :pitch 76} {:time 160, :instrument 13, :pitch 74} {:time 159.5, :instrument 13, :pitch 71} {:time 159, :instrument 13, :pitch 72} {:time 158.5, :instrument 13, :pitch 74} {:time 158, :instrument 13, :pitch 72} {:time 157.5, :instrument 13, :pitch 71} {:time 157, :instrument 13, :pitch 69} {:time 156.5, :instrument 13, :pitch 67} {:time 156, :instrument 13, :pitch 65} {:time 155.5, :instrument 13, :pitch 64} {:time 155, :instrument 13, :pitch 65} {:time 154.5, :instrument 13, :pitch 64} {:time 154, :instrument 13, :pitch 62} {:time 153.5, :instrument 13, :pitch 67} {:time 153, :instrument 13, :pitch 71} {:time 152.5, :instrument 13, :pitch 69} {:time 152, :instrument 13, :pitch 71} {:time 151.5, :instrument 13, :pitch 69} {:time 151, :instrument 13, :pitch 67} {:time 150.5, :instrument 13, :pitch 69} {:time 150, :instrument 13, :pitch 65} {:time 149.5, :instrument 13, :pitch 68} {:time 149, :instrument 13, :pitch 69} {:time 148.5, :instrument 13, :pitch 68} {:time 148, :instrument 13, :pitch 69} {:time 147.5, :instrument 13, :pitch 72} {:time 147, :instrument 13, :pitch 71} {:time 146.5, :instrument 13, :pitch 72} {:time 146, :instrument 13, :pitch 71} {:time 145.5, :instrument 13, :pitch 72} {:time 145, :instrument 13, :pitch 74} {:time 144.5, :instrument 13, :pitch 71} {:time 144, :instrument 13, :pitch 69} {:time 143.5, :instrument 13, :pitch 68} {:time 143, :instrument 13, :pitch 66} {:time 142.5, :instrument 13, :pitch 68} {:time 142, :instrument 13, :pitch 66} {:time 141.5, :instrument 13, :pitch 64} {:time 141, :instrument 13, :pitch 62} {:time 140.5, :instrument 13, :pitch 64} {:time 140, :instrument 13, :pitch 66} {:time 139.5, :instrument 13, :pitch 64} {:time 139, :instrument 13, :pitch 62} {:time 138.5, :instrument 13, :pitch 64} {:time 138, :instrument 13, :pitch 62} {:time 137, :instrument 13, :pitch 64} {:time 136, :instrument 13, :pitch 69} {:time 135, :instrument 13, :pitch 66} {:time 134, :instrument 13, :pitch 64} {:time 133, :instrument 13, :pitch 66} {:time 132, :instrument 13, :pitch 68} {:time 131, :instrument 13, :pitch 64} {:time 130, :instrument 13, :pitch 73} {:time 129, :instrument 13, :pitch 69} {:time 128, :instrument 13, :pitch 71} {:time 127, :instrument 13, :pitch 73} {:time 126, :instrument 13, :pitch 71} {:time 125, :instrument 13, :pitch 68} {:time 124, :instrument 13, :pitch 66} {:time 123, :instrument 13, :pitch 64} {:time 122, :instrument 13, :pitch 71} {:time 121, :instrument 13, :pitch 73} {:time 120, :instrument 13, :pitch 71} {:time 119, :instrument 13, :pitch 68} {:time 118, :instrument 13, :pitch 66} {:time 117, :instrument 13, :pitch 64} {:time 116, :instrument 13, :pitch 66} {:time 115, :instrument 13, :pitch 61} {:time 114, :instrument 13, :pitch 64} {:time 113, :instrument 13, :pitch 68} {:time 112, :instrument 13, :pitch 66} {:time 111, :instrument 13, :pitch 64} {:time 110, :instrument 13, :pitch 66} {:time 109, :instrument 13, :pitch 68} {:time 108, :instrument 13, :pitch 71} {:time 107, :instrument 13, :pitch 68} {:time 106, :instrument 13, :pitch 66} {:time 105, :instrument 13, :pitch 64} {:time 104, :instrument 13, :pitch 66} {:time 103, :instrument 13, :pitch 61} {:time 102, :instrument 13, :pitch 64} {:time 101, :instrument 13, :pitch 66} {:time 100, :instrument 13, :pitch 68} {:time 99, :instrument 13, :pitch 71} {:time 98, :instrument 13, :pitch 68} {:time 97, :instrument 13, :pitch 66} {:time 96, :instrument 13, :pitch 64}])

(def plane1 [{:time 189.5, :instrument 12, :pitch 67} {:time 189, :instrument 12, :pitch 71} {:time 189.5, :instrument 12, :pitch 79} {:time 186.5, :instrument 12, :pitch 67} {:time 187, :instrument 12, :pitch 69} {:time 187, :instrument 12, :pitch 72} {:time 187, :instrument 12, :pitch 74} {:time 187.5, :instrument 12, :pitch 79} {:time 185, :instrument 12, :pitch 65} {:time 185, :instrument 12, :pitch 77} {:time 183, :instrument 12, :pitch 69} {:time 182.5, :instrument 12, :pitch 72} {:time 183, :instrument 12, :pitch 77} {:time 183, :instrument 12, :pitch 81} {:time 181, :instrument 12, :pitch 77} {:time 180.5, :instrument 12, :pitch 72} {:time 181, :instrument 12, :pitch 82} {:time 181, :instrument 12, :pitch 70} {:time 177.5, :instrument 12, :pitch 70} {:time 178, :instrument 12, :pitch 75} {:time 178, :instrument 12, :pitch 79} {:time 178, :instrument 12, :pitch 82} {:time 175, :instrument 12, :pitch 84} {:time 175, :instrument 12, :pitch 80} {:time 175, :instrument 12, :pitch 75} {:time 174.5, :instrument 12, :pitch 72} {:time 172.5, :instrument 12, :pitch 83} {:time 172, :instrument 12, :pitch 79} {:time 172, :instrument 12, :pitch 74} {:time 171.5, :instrument 12, :pitch 71} {:time 169.5, :instrument 12, :pitch 81} {:time 169, :instrument 12, :pitch 77} {:time 169, :instrument 12, :pitch 72} {:time 168.5, :instrument 12, :pitch 69} {:time 166, :instrument 12, :pitch 71} {:time 166, :instrument 12, :pitch 67} {:time 165.5, :instrument 12, :pitch 74} {:time 160, :instrument 12, :pitch 79} {:time 160, :instrument 12, :pitch 74} {:time 160, :instrument 12, :pitch 71} {:time 159.5, :instrument 12, :pitch 67} {:time 159, :instrument 12, :pitch 77} {:time 158, :instrument 12, :pitch 69} {:time 157.5, :instrument 12, :pitch 81} {:time 157, :instrument 12, :pitch 77} {:time 157, :instrument 12, :pitch 72} {:time 156.5, :instrument 12, :pitch 69} {:time 156, :instrument 12, :pitch 83} {:time 155, :instrument 12, :pitch 74} {:time 150.5, :instrument 12, :pitch 67} {:time 151, :instrument 12, :pitch 71} {:time 151, :instrument 12, :pitch 74} {:time 151.5, :instrument 12, :pitch 79} {:time 150, :instrument 12, :pitch 77} {:time 149, :instrument 12, :pitch 69} {:time 143.5, :instrument 12, :pitch 72} {:time 144, :instrument 12, :pitch 77} {:time 143.5, :instrument 12, :pitch 69} {:time 144, :instrument 12, :pitch 81} {:time 143, :instrument 12, :pitch 83} {:time 142, :instrument 12, :pitch 74} {:time 141, :instrument 12, :pitch 81} {:time 141, :instrument 12, :pitch 78} {:time 140.5, :instrument 12, :pitch 74} {:time 140, :instrument 12, :pitch 69} {:time 135, :instrument 12, :pitch 78} {:time 135, :instrument 12, :pitch 81} {:time 135, :instrument 12, :pitch 69} {:time 134.5, :instrument 12, :pitch 74} {:time 134, :instrument 12, :pitch 83} {:time 133, :instrument 12, :pitch 76} {:time 132, :instrument 12, :pitch 80} {:time 132, :instrument 12, :pitch 74} {:time 131.5, :instrument 12, :pitch 71} {:time 132, :instrument 12, :pitch 83} {:time 129, :instrument 12, :pitch 81} {:time 128.5, :instrument 12, :pitch 76} {:time 129, :instrument 12, :pitch 73} {:time 129, :instrument 12, :pitch 85} {:time 126, :instrument 12, :pitch 81} {:time 125.5, :instrument 12, :pitch 78} {:time 126, :instrument 12, :pitch 74} {:time 123, :instrument 12, :pitch 85} {:time 123, :instrument 12, :pitch 80} {:time 123, :instrument 12, :pitch 76} {:time 122.5, :instrument 12, :pitch 73} {:time 120, :instrument 12, :pitch 80} {:time 120, :instrument 12, :pitch 83} {:time 120, :instrument 12, :pitch 76} {:time 119.5, :instrument 12, :pitch 71} {:time 114, :instrument 12, :pitch 73} {:time 114, :instrument 12, :pitch 76} {:time 114, :instrument 12, :pitch 80} {:time 113.5, :instrument 12, :pitch 68} {:time 113, :instrument 12, :pitch 71} {:time 108, :instrument 12, :pitch 80} {:time 108, :instrument 12, :pitch 83} {:time 108, :instrument 12, :pitch 76} {:time 107.5, :instrument 12, :pitch 71} {:time 107, :instrument 12, :pitch 85} {:time 106, :instrument 12, :pitch 76} {:time 101, :instrument 12, :pitch 71} {:time 102, :instrument 12, :pitch 76} {:time 102, :instrument 12, :pitch 73} {:time 102, :instrument 12, :pitch 80} {:time 101.5, :instrument 12, :pitch 68} {:time 96, :instrument 12, :pitch 71} {:time 95.5, :instrument 12, :pitch 68} {:time 95, :instrument 12, :pitch 64} {:time 93, :instrument 12, :pitch 69} {:time 93, :instrument 12, :pitch 65} {:time 93, :instrument 12, :pitch 62}])

(def heart1 
  [{:time 188, :instrument 15, :pitch 67}  {:time 185, :instrument 15, :pitch 65} {:time 182, :instrument 15, :pitch 63}  {:time 179, :instrument 15, :pitch 60}  {:time 176, :instrument 15, :pitch 62}  {:time 173, :instrument 15, :pitch 65} {:time 170, :instrument 15, :pitch 65}  {:time 161, :instrument 15, :pitch 65} {:time 158, :instrument 15, :pitch 65}  {:time 152, :instrument 15, :pitch 65} {:time 146, :instrument 15, :pitch 65}  {:time 143, :instrument 15, :pitch 64} {:time 135, :instrument 15, :pitch 64}  {:time 132, :instrument 15, :pitch 64} {:time 129, :instrument 15, :pitch 61} {:time 126, :instrument 15, :pitch 59}  {:time 123, :instrument 15, :pitch 61}  {:time 120, :instrument 15, :pitch 64}  {:time 114, :instrument 15, :pitch 61} {:time 108, :instrument 15, :pitch 64}  {:time 102, :instrument 15, :pitch 61} {:time 96, :instrument 15, :pitch 64}]
  )

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

@(subscribe [:tempo])
@(dispatch [:set-tempo 184])

(filter #(= 15 (:instrument %))
@(subscribe [:notes]))

(map :time plane1)

(map (fn [notes] (update notes :time #(- % 93)))(reverse plane1))



@(dispatch [:set-notes (concat mario (cello1 0)
                               (cello1 48)
                               (map #(assoc % :instrument 3) (cello1 48))
                               (harp1 96) 
                               (harp2 (+ 96 50))
                               boat1
                               violin
                               heart1
                               )])

(defn plane [time]
  (concat
   [{:time (+ time 0) :instrument 12, :pitch 62} {:time (+ time 0) :instrument 12, :pitch 65} {:time (+ time 0) :instrument 12, :pitch 69} ]
   (strum [{:time (+ time 3) :instrument 12, :pitch 64} {:time (+ time 3) :instrument 12, :pitch 68} {:time (+ time 3) :instrument 12, :pitch 71}])
   [{:time 8, :instrument 12, :pitch 71}]
   (strum [{:time 9, :instrument 12, :pitch 68} {:time 9, :instrument 12, :pitch 80} {:time 9, :instrument 12, :pitch 73} {:time 9, :instrument 12, :pitch 76}])))

(str/replace (str [{:time 15, :instrument 12, :pitch 76} {:time 14, :instrument 12, :pitch 85} {:time 15, :instrument 12, :pitch 71} {:time 15, :instrument 12, :pitch 76} {:time 15, :instrument 12, :pitch 83} {:time 15, :instrument 12, :pitch 80} {:time 20, :instrument 12, :pitch 71} {:time 20.5, :instrument 12, :pitch 68} {:time 21, :instrument 12, :pitch 80} {:time 21, :instrument 12, :pitch 76} {:time 21, :instrument 12, :pitch 73} {:time 26.5, :instrument 12, :pitch 71} {:time 27, :instrument 12, :pitch 76} {:time 27, :instrument 12, :pitch 83} {:time 27, :instrument 12, :pitch 80} {:time 29.5, :instrument 12, :pitch 73} {:time 30, :instrument 12, :pitch 76} {:time 30, :instrument 12, :pitch 80} {:time 30, :instrument 12, :pitch 85} {:time 33, :instrument 12, :pitch 74} {:time 32.5, :instrument 12, :pitch 78} {:time 33, :instrument 12, :pitch 81} {:time 36, :instrument 12, :pitch 85} {:time 36, :instrument 12, :pitch 73} {:time 35.5, :instrument 12, :pitch 76} {:time 36, :instrument 12, :pitch 81} {:time 39, :instrument 12, :pitch 83} {:time 38.5, :instrument 12, :pitch 71} {:time 39, :instrument 12, :pitch 74} {:time 39, :instrument 12, :pitch 80} {:time 40, :instrument 12, :pitch 76} {:time 41, :instrument 12, :pitch 83} {:time 41.5, :instrument 12, :pitch 74} {:time 42, :instrument 12, :pitch 69} {:time 42, :instrument 12, :pitch 81} {:time 42, :instrument 12, :pitch 78} {:time 47, :instrument 12, :pitch 69} {:time 47.5, :instrument 12, :pitch 74} {:time 48, :instrument 12, :pitch 78} {:time 48, :instrument 12, :pitch 81} {:time 49, :instrument 12, :pitch 74} {:time 50, :instrument 12, :pitch 83} {:time 51, :instrument 12, :pitch 81} {:time 50.5, :instrument 12, :pitch 69} {:time 51, :instrument 12, :pitch 77} {:time 50.5, :instrument 12, :pitch 72} {:time 56, :instrument 12, :pitch 69} {:time 57, :instrument 12, :pitch 77} {:time 58.5, :instrument 12, :pitch 79} {:time 58, :instrument 12, :pitch 74} {:time 58, :instrument 12, :pitch 71} {:time 57.5, :instrument 12, :pitch 67} {:time 62, :instrument 12, :pitch 74} {:time 63, :instrument 12, :pitch 83} {:time 63.5, :instrument 12, :pitch 69} {:time 64, :instrument 12, :pitch 72} {:time 64, :instrument 12, :pitch 77} {:time 64.5, :instrument 12, :pitch 81} {:time 65, :instrument 12, :pitch 69} {:time 66, :instrument 12, :pitch 77} {:time 66.5, :instrument 12, :pitch 67} {:time 67, :instrument 12, :pitch 71} {:time 67, :instrument 12, :pitch 74} {:time 67, :instrument 12, :pitch 79} {:time 72.5, :instrument 12, :pitch 74} {:time 73, :instrument 12, :pitch 67} {:time 73, :instrument 12, :pitch 71} {:time 75.5, :instrument 12, :pitch 69} {:time 76, :instrument 12, :pitch 72} {:time 76, :instrument 12, :pitch 77} {:time 76.5, :instrument 12, :pitch 81} {:time 78.5, :instrument 12, :pitch 71} {:time 79, :instrument 12, :pitch 74} {:time 79, :instrument 12, :pitch 79} {:time 79.5, :instrument 12, :pitch 83} {:time 81.5, :instrument 12, :pitch 72} {:time 82, :instrument 12, :pitch 75} {:time 82, :instrument 12, :pitch 80} {:time 82, :instrument 12, :pitch 84} {:time 85, :instrument 12, :pitch 82} {:time 85, :instrument 12, :pitch 79} {:time 85, :instrument 12, :pitch 75} {:time 84.5, :instrument 12, :pitch 70} {:time 88, :instrument 12, :pitch 70} {:time 88, :instrument 12, :pitch 82} {:time 87.5, :instrument 12, :pitch 72} {:time 88, :instrument 12, :pitch 77} {:time 90, :instrument 12, :pitch 81} {:time 90, :instrument 12, :pitch 77} {:time 89.5, :instrument 12, :pitch 72} {:time 90, :instrument 12, :pitch 69} {:time 92, :instrument 12, :pitch 77} {:time 92, :instrument 12, :pitch 65} {:time 94.5, :instrument 12, :pitch 79} {:time 94, :instrument 12, :pitch 74} {:time 94, :instrument 12, :pitch 72} {:time 94, :instrument 12, :pitch 69} {:time 93.5, :instrument 12, :pitch 67} {:time 96.5, :instrument 12, :pitch 79} {:time 96, :instrument 12, :pitch 71} {:time 96.5, :instrument 12, :pitch 67}]) #"(time )(\d+)"
     (fn [[_ b a]]
       (str b "(+ time " a ")")))

[{:time 15, :instrument 12, :pitch 76} {:time 14, :instrument 12, :pitch 85} {:time 15, :instrument 12, :pitch 71} {:time 15, :instrument 12, :pitch 76} {:time 15, :instrument 12, :pitch 83} {:time 15, :instrument 12, :pitch 80} {:time 20, :instrument 12, :pitch 71} {:time 20.5, :instrument 12, :pitch 68} {:time 21, :instrument 12, :pitch 80} {:time 21, :instrument 12, :pitch 76} {:time 21, :instrument 12, :pitch 73} {:time 26.5, :instrument 12, :pitch 71} {:time 27, :instrument 12, :pitch 76} {:time 27, :instrument 12, :pitch 83} {:time 27, :instrument 12, :pitch 80} {:time 29.5, :instrument 12, :pitch 73} {:time 30, :instrument 12, :pitch 76} {:time 30, :instrument 12, :pitch 80} {:time 30, :instrument 12, :pitch 85} {:time 33, :instrument 12, :pitch 74} {:time 32.5, :instrument 12, :pitch 78} {:time 33, :instrument 12, :pitch 81} {:time 36, :instrument 12, :pitch 85} {:time 36, :instrument 12, :pitch 73} {:time 35.5, :instrument 12, :pitch 76} {:time 36, :instrument 12, :pitch 81} {:time 39, :instrument 12, :pitch 83} {:time 38.5, :instrument 12, :pitch 71} {:time 39, :instrument 12, :pitch 74} {:time 39, :instrument 12, :pitch 80} {:time 40, :instrument 12, :pitch 76} {:time 41, :instrument 12, :pitch 83} {:time 41.5, :instrument 12, :pitch 74} {:time 42, :instrument 12, :pitch 69} {:time 42, :instrument 12, :pitch 81} {:time 42, :instrument 12, :pitch 78} {:time 47, :instrument 12, :pitch 69} {:time 47.5, :instrument 12, :pitch 74} {:time 48, :instrument 12, :pitch 78} {:time 48, :instrument 12, :pitch 81} {:time 49, :instrument 12, :pitch 74} {:time 50, :instrument 12, :pitch 83} {:time 51, :instrument 12, :pitch 81} {:time 50.5, :instrument 12, :pitch 69} {:time 51, :instrument 12, :pitch 77} {:time 50.5, :instrument 12, :pitch 72} {:time 56, :instrument 12, :pitch 69} {:time 57, :instrument 12, :pitch 77} {:time 58.5, :instrument 12, :pitch 79} {:time 58, :instrument 12, :pitch 74} {:time 58, :instrument 12, :pitch 71} {:time 57.5, :instrument 12, :pitch 67} {:time 62, :instrument 12, :pitch 74} {:time 63, :instrument 12, :pitch 83} {:time 63.5, :instrument 12, :pitch 69} {:time 64, :instrument 12, :pitch 72} {:time 64, :instrument 12, :pitch 77} {:time 64.5, :instrument 12, :pitch 81} {:time 65, :instrument 12, :pitch 69} {:time 66, :instrument 12, :pitch 77} {:time 66.5, :instrument 12, :pitch 67} {:time 67, :instrument 12, :pitch 71} {:time 67, :instrument 12, :pitch 74} {:time 67, :instrument 12, :pitch 79} {:time 72.5, :instrument 12, :pitch 74} {:time 73, :instrument 12, :pitch 67} {:time 73, :instrument 12, :pitch 71} {:time 75.5, :instrument 12, :pitch 69} {:time 76, :instrument 12, :pitch 72} {:time 76, :instrument 12, :pitch 77} {:time 76.5, :instrument 12, :pitch 81} {:time 78.5, :instrument 12, :pitch 71} {:time 79, :instrument 12, :pitch 74} {:time 79, :instrument 12, :pitch 79} {:time 79.5, :instrument 12, :pitch 83} {:time 81.5, :instrument 12, :pitch 72} {:time 82, :instrument 12, :pitch 75} {:time 82, :instrument 12, :pitch 80} {:time 82, :instrument 12, :pitch 84} {:time 85, :instrument 12, :pitch 82} {:time 85, :instrument 12, :pitch 79} {:time 85, :instrument 12, :pitch 75} {:time 84.5, :instrument 12, :pitch 70} {:time 88, :instrument 12, :pitch 70} {:time 88, :instrument 12, :pitch 82} {:time 87.5, :instrument 12, :pitch 72} {:time 88, :instrument 12, :pitch 77} {:time 90, :instrument 12, :pitch 81} {:time 90, :instrument 12, :pitch 77} {:time 89.5, :instrument 12, :pitch 72} {:time 90, :instrument 12, :pitch 69} {:time 92, :instrument 12, :pitch 77} {:time 92, :instrument 12, :pitch 65} {:time 94.5, :instrument 12, :pitch 79} {:time 94, :instrument 12, :pitch 74} {:time 94, :instrument 12, :pitch 72} {:time 94, :instrument 12, :pitch 69} {:time 93.5, :instrument 12, :pitch 67} {:time 96.5, :instrument 12, :pitch 79} {:time 96, :instrument 12, :pitch 71} {:time 96.5, :instrument 12, :pitch 67}]
