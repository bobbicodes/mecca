(ns mecca.music
  (:require
   [cljs.core.async :refer [<! chan put! close!]]
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

(defn detune-cents [midi-num]
  (if (< 66 midi-num)
    (* 100 (- midi-num 66))
    (* -100 (- 68 midi-num))))

(defn computedPlaybackRate [detune playbackRate]
  (* playbackRate (.pow js/Math 2 (/ detune 1200))))

(detune-cents 72)

(defn play-note [pitch]
  (let [context       @(subscribe [:audio-context])
        samples       (subscribe [:samples])
        instrument    (subscribe [:instrument])
        audio-buffer  (:decoded-buffer (get @samples @instrument))
        sample-source (.createBufferSource context)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-detune sample-source)
     (detune-cents pitch)
     (.-currentTime context))
    (.setValueAtTime
     (.-playbackRate sample-source)
     (computedPlaybackRate (detune-cents pitch) 1)
     (.-currentTime context))
    (.connect sample-source (.-destination context))
    (.start sample-source)
    sample-source))

(computedPlaybackRate (detune-cents 72) (pitch->rate 72))


;; pitch shift via Delay-Line Modulation
;; ported from: https://github.com/cwilso/Audio-Input-Effects/blob/main/js/jungle.js
(defn createFadeBuffer [context activeTime fadeTime]
  (let [length1 (* activeTime (.-sampleRate context))
        length2 (* (- activeTime (* 2 fadeTime))
                   (.-sampleRate context))
        length (+ length1 length2)
        buffer (.createBuffer context
                              1
                              length
                              (.-sampleRate context))
        p (.getChannelData buffer 0)
        fadeLength (* fadeTime (.-sampleRate context))
        fadeIndex1 fadeLength
        fadeIndex2 (- length1 fadeLength)]
    (.log js/console (str "createFadeBuffer() length = " length))
    (doseq [i (range length1)]
     (cond (< i fadeIndex1)
           (aset p i (.sqrt js/Math (/ i fadeLength)))
           (>= i fadeIndex2)
           (aset p i (.sqrt js/Math
                            (- 1
                               (/ (- i fadeIndex2) fadeLength))))
           :else 
           (aset p i 1)))

    (doseq [i (range length1 length)]
      (aset p i 0))
    buffer))

(defn createDelayTimeBuffer [context activeTime fadeTime shiftUp]
  (let [length1 (* activeTime (.-sampleRate context))
        length2 (* (- activeTime (* 2 fadeTime))
                   (.-sampleRate context))
        length (+ length1 length2)
        buffer (.createBuffer context
                              1
                              length
                              (.-sampleRate context))
        p (.getChannelData buffer 0)]
    (.log js/console
          (str "createDelayTimeBuffer() length = " length))
    (doseq [i (range length1)]
      (if shiftUp
        (aset p i (/ (- length1 i) length))
        (aset p i (/ i length1))))
      (doseq [i (range length)] 
        (aset p i 0))
      buffer))

(def delayTime -1)

(def fadeTime 0.05)

(def bufferTime 2)

(def previousPitch -1)

(defn play-time-stretched [instrument pitch]
  (let [context         (subscribe [:audio-context])
        current-time    (.-currentTime @context)
        samples         (subscribe [:samples])
        audio-buffer    (:decoded-buffer (get @samples instrument))
        sample-source   (.createBufferSource @context)
        input           (.createGain @context)
        output          (.createGain @context)
        mod1            (.createBufferSource @context)
        mod2            (.createBufferSource @context)
        mod3            (.createBufferSource @context)
        mod4            (.createBufferSource @context)
        mod1Gain        (.createGain @context)
        mod2Gain        (.createGain @context)
        mod3Gain        (.createGain @context)
        mod4Gain        (.createGain @context)
        modGain1        (.createGain @context)
        modGain2        (.createGain @context)
        delay1          (.createDelay @context)
        delay2          (.createDelay @context)
        fade1           (.createBufferSource @context)
        fade2           (.createBufferSource @context)
        fadeBuffer      (createFadeBuffer @context bufferTime fadeTime)
        mix1            (.createGain @context)
        mix2            (.createGain @context)
        t               (+ (.-currentTime @context) 0.05)
        t2              (- (+ t bufferTime) fadeTime)
        shiftDownBuffer (createDelayTimeBuffer @context bufferTime fadeTime false)
        shiftUpBuffer   (createDelayTimeBuffer @context bufferTime fadeTime true)]
    (set! (.-buffer sample-source) audio-buffer)
    (set! (.-buffer mod1) shiftDownBuffer)
    (set! (.-buffer mod2) shiftDownBuffer)
    (set! (.-buffer mod3) shiftUpBuffer)
    (set! (.-buffer mod4) shiftUpBuffer)
    (set! (.-loop mod1) true)
    (set! (.-loop mod2) true)
    (set! (.-loop mod3) true)
    (set! (.-loop mod4) true)
    (set! (-> mod3Gain .-gain .-value) 0)
    (set! (-> mod4Gain .-gain .-value) 0)
    (.connect mod1 mod1Gain)
    (.connect mod2 mod2Gain)
    (.connect mod3 mod3Gain)
    (.connect mod4 mod4Gain)
    (.connect mod1Gain modGain1)
    (.connect mod2Gain modGain2)
    (.connect mod3Gain modGain1)
    (.connect mod4Gain modGain2)
    (.connect modGain1 (.-delayTime delay1))
    (.connect modGain2 (.-delayTime delay2))
    (set! (.-buffer fade1) fadeBuffer)
    (set! (.-buffer fade2) fadeBuffer)
    (set! (.-loop fade1) true)
    (set! (.-loop fade2) true)
    (set! (-> mix1 .-gain .-value) 0)
    (set! (-> mix2 .-gain .-value) 0)
    (.connect fade1 (.-gain mix1))
    (.connect fade2 (.-gain mix2))
    (.connect sample-source input)
    (.connect input delay1)
    (.connect input delay2)
    (.connect delay1 mix1)
    (.connect delay2 mix2)
    (.connect mix1 output)
    (.connect mix2 output)
    (.connect output (.-destination @context))
    (.start mod1 t)
    (.start mod2 t2)
    (.start mod3 t)
    (.start mod4 t2)
    (.start fade1 t)
    (.start fade2 t2)
    (.start sample-source)
    (set! (-> modGain1 .-gain .-value) 1)
    (set! (-> modGain2 .-gain .-value) 1)
    (.setTargetAtTime (.-gain modGain1) (* 1 delayTime) 0 0.01)
    (.setTargetAtTime (.-gain modGain2) (* 1 delayTime) 0 0.01)))

(play-time-stretched 1 70)

(defn play-sample [instrument pitch]
  (let [context (subscribe [:audio-context])
        samples (subscribe [:samples])
        audio-buffer (:decoded-buffer (get @samples instrument))
        sample-source (.createBufferSource @context)
        compressor (.createDynamicsCompressor @context)
        analyser (.createAnalyser @context)]
    (set! (.-buffer sample-source) audio-buffer)
    (.setValueAtTime
     (.-detune sample-source)
     (detune-cents pitch)
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
     (.-detune sample-source)
     (detune-cents pitch)
     time)
(.setValueAtTime
 (.-playbackRate sample-source)
 (computedPlaybackRate (detune-cents pitch) 1)
 time)
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
