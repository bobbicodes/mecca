(ns ^:figwheel-hooks mecca.music.processing
  (:require
    [mecca.music.synthesis :as synthesis]
    [mecca.music.actions :as action]
    [mecca.music.framework :as framework]
    [leipzig.melody :as melody]))

(defn milli [n]
  (* n 1000))

(defn schedule! [callback! duration]
  (let [margin 150]
    (js/setTimeout callback! (- (milli duration) margin))))

(defn clear-syncs [state pane]
  (-> state
      (update-in [pane :sync] dissoc)
      (update-in [pane :audio-sync] dissoc)))

(defn update-syncs [state pane audio-sync duration]
  (-> state
      (assoc-in [pane :sync] (+ (Date.now) (milli duration)))
      (assoc-in [pane :audio-sync] (+ audio-sync duration))))

(defn too-many? [value]
  (when (and (seq? value) (->> value (drop 1000) first))
    "Too many notes - Klangmeister can't handle more than 1000."))

(defn well-formed? [value]
  (letfn [(ok? [{:keys [time duration]}] (and time duration))]
    (when (and (seq? value) (not-every? ok? value))
      "All notes must have a time and a duration.")))

(defn check [{:keys [value error] :as return} ok?]
  (if error
    return
    (assoc return :error (ok? value))))

(extend-protocol framework/Action
  
  action/Stop
  (process [{pane :target} handle! state]
    (assoc-in state [pane :looping?] false))

  action/Play
  (process [{pane :target :as this} handle! state]
    (if-not (< (Date.now) (get-in state [pane :sync]))
      (framework/process (action/->Loop pane) handle! (assoc-in state [pane :looping?] true))
      state))

  action/PlayOnce
  (process [{pane :target :as this} handle! {:keys [audiocontext] :as state}]
    (let [{:keys [value]} (pane state)]
      (->> value
           (synthesis/play! audiocontext))
      state))

  action/Loop
  (process [{pane :target :as this} handle! {:keys [audiocontext] :as state}]
    (let [{:keys [value looping? audio-sync] :or {audio-sync (.-currentTime audiocontext)}} (pane state)
          duration (melody/duration value)]
      (if looping?
        (do (synthesis/play-from! audiocontext audio-sync value)
            (schedule! #(handle! this) duration)
            (-> state (update-syncs pane audio-sync duration)))
        (-> state (clear-syncs pane))))))
