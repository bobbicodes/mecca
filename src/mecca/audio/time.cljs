(ns mecca.audio.time)

; Adapted from Dave Yarwood's "Chronoid" library
; https://github.com/daveyarwood/chronoid

; TODO: this seems to be overkill, simplify to fit our relevant use case.

(def ^:dynamic *audio-context*
  (let [ctx (or js/window.AudioContext
                js/window.webkitAudioContext)]
    (ctx.)))

(def default-options
  {:context *audio-context*
   :tolerance-late  100 ; ms
   :tolerance-early 1}) ; ms

(def ^:dynamic *clocks* {})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; For all of the public functions, the `clock` arguments are atom references to
; maps representing clocks. The `clock` function returns such a clock atom,
; providing a convenient abstraction so that callers need not worry about atoms.

(defn clock
  [& {:as attrs}]
  (let [id           (gensym "clock")
        clock        (merge default-options
                            attrs
                            {:id      id
                             :events  []
                             :started false})
        atomic-clock (atom clock)]
    (set! *clocks* (assoc *clocks* id atomic-clock))
    atomic-clock))

(defn- current-time*
  "Internal implementation for the public function current-time, which works
   on atom-wrapped clocks.
   This internal version works on non-atom-wrapped clocks."
  [{:keys [context] :as clock}]
  (* 1000 (.-currentTime context)))

(defn current-time
  "Returns the current time of a clock's audio context, in milliseconds."
  [clock]
  (current-time* @clock))

(defn- absolute-time
  "Converts from relative -> absolute time."
  [clock rel-time]
  (+ rel-time (current-time* clock)))

(defn- relative-time
  "Converts from absolute -> relative time."
  [clock abs-time]
  (- abs-time (current-time* clock)))

(defn- event*
  "Constructor for an event. Requires `action`, `clock` (as an atom) and
   `deadline` at the minimum.
   Assigns a randomly generated id for the event if an :id is not provided to
   the constructor. This is useful for removing and repeating events.
   The tolerance interval (:latest-time and :earliest-time) is calculated
   based on the deadline and :tolerance-early and :tolerance-late, which are
   either provided as keyword arguments, or taken from the clock's options."
  [{:keys [id clock-id clock deadline tolerance-early tolerance-late] :as event}]
  (let [clock    (if clock-id
                   (get *clocks* clock-id)
                   clock)
        id       (or id (gensym 'event))
        latest   (+ deadline (or tolerance-late  (:tolerance-late @clock)))
        earliest (- deadline (or tolerance-early (:tolerance-early @clock)))]
    (-> event
        (assoc :id id
               :clock-id (:id @clock)
               :latest-time latest
               :earliest-time earliest)
        (dissoc :clock))))

(declare execute! schedule*)

(defn- tick!
  "This function is ran periodically, and at each tick it executes
   events for which `currentTime` is included in their tolerance interval."
  [clock]
  (let [{:keys [events]} @clock
        current-time (current-time clock)
        execute-now? #(<= (:earliest-time %) current-time)
        now (take-while execute-now? events)]
    (doseq [event now] (execute! event))
    (swap! clock assoc :events (drop-while execute-now? (:events @clock))
                       :current-time current-time)))

(defn- index-by-time
  "Does a binary search to find the index of the first event whose deadline is
   >= `deadline`."
  [events deadline]
  (loop [low 0
         high (count events)
         mid (js/Math.floor (/ (+ low high) 2))]
    (if (< low high)
      (let [{:keys [earliest-time]} (nth events mid)
            action (if (< earliest-time deadline) :higher :lower)]
        (recur (if (= action :higher) (inc mid) low)
               (if (= action :lower) mid high)
               (js/Math.floor (/ (+ low high) 2))))
      low)))

(defn- insert-event
  "Insert an event into an event queue, properly sorted by deadline."
  [events {:keys [earliest-time] :as event}]
  (let [i (index-by-time events earliest-time)]
    (concat (take i events) [event] (drop i events))))

(defn- create-event!
  "Create an event and insert into a clock's event queue."
  [clock f deadline & [{:as opts}]]
  (let [event (event* (merge {:action   f
                              :clock    clock
                              :deadline deadline}
                             opts))]
    (swap! clock update :events insert-event event)
    event))

(defn- schedule*
  "Insert a copy of an event into an event queue with a new deadline."
  [events event new-deadline]
  (let [new-event (event* (assoc event :deadline new-deadline))]
    (insert-event events new-event)))

(defn- schedule!
  "Schedule a copy of an event with a new deadline."
  [{:keys [clock-id] :as event} new-deadline]
  (let [clock (get *clocks* clock-id)]
    (swap! clock update :events schedule* event new-deadline)
    (event* (assoc event :deadline new-deadline))))

(declare repeat!)

(defn- execute!
  [{:keys [action clock-id latest-time deadline repeat-time] :as event}]
  (let [clock (get *clocks* clock-id)]
    (when (< (current-time clock) latest-time)
      (action))
    (when repeat-time
      (repeat! event repeat-time))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn set-timeout!
  "Schedules `f` after `delay` milliseconds. Returns the event.
   `opts` may contain :tolerance-early and :tolerance-late for optionally
   overriding the clock's timing window for events."
  [clock f delay & {:as opts}]
  (create-event! clock f (absolute-time @clock delay) opts))

(defn callback-at-time!
  "Schedules `f` to run before `deadline`. Returns the event.
   `opts` may contain :tolerance-early and :tolerance-late for optionally
   overriding the clock's timing window for events."
  [clock f deadline & {:as opts}]
  (create-event! clock f deadline opts))

(defn clear!
  "Unschedules an event by removing it from its clock's event queue."
  [{:keys [clock-id] :as event}]
  (let [clock (get *clocks* clock-id)]
    (swap! clock update :events #(filter (fn [{:keys [id]}]
                                           (not= id (:id event)))
                                         %))
    event))

(defn repeat!
  "Sets the event to repeat every `time` milliseconds "
  [{:keys [deadline] :as event} time]
  {:pre [(pos? time)]}
  (-> event
      (assoc :repeat-time time)
      (schedule! (+ deadline time))))

(defn- time-stretch!*
  "Internal implementation for time-stretching a single event."
  [{:keys [repeat-time clock-id deadline earliest-time] :as event}
   time-reference
   ratio]
  (let [clock       (get *clocks* clock-id)
        deadline    (+ time-reference (* ratio (- deadline time-reference)))
        repeat-time (when repeat-time (* repeat-time ratio))
        repeats     (when repeat-time
                      (iterate (partial + repeat-time) deadline))]
    (clear! event)
    (schedule! (assoc event :repeat-time repeat-time)
               (if repeats
                 (first (drop-while #(>= (current-time clock)
                                         %)
                                    repeats))
                 deadline))))

(defn time-stretch!
  "Reschedules events according to a `time-reference` and a `ratio`.
   If the event is a repeating event, adjusts its repeat-time accordingly.
   The first argument can be either a single event or a list of events.
   Returns the rescheduled event, or a list of rescheduled events, depending
   on the input type.
   e.g.
   (time-stretch! e (current-time clock) 0.5)
   ^-- makes an event `e` occur twice as soon as it would otherwise
   If `time-reference` is omitted, the default value is the current time of the
   event's clock."
  ([e ratio]
    (let [{:keys [clock-id]} (if (sequential? e) (first e) e)
          clock (get *clocks* clock-id)]
      (time-stretch! e (current-time clock) ratio)))
  ([e time-reference ratio]
    (if (sequential? e)
      (doall (map #(time-stretch!* % time-reference ratio) e))
      (time-stretch!* e time-reference ratio))))

(defn start!
  "Remove all scheduled events and start the clock."
  [clock]
  (let [{:keys [context started]} @clock]
    (when-not started
      (swap! clock assoc :events [])
      (let [clock-node (doto (.createScriptProcessor context 256 1 1)
                         (.connect (.-destination context))
                         (aset "onaudioprocess" #(tick! clock)))]
        (swap! clock assoc :clock-node clock-node :started true)
        clock))))

(defn stop!
  "Stops the clock."
  [clock]
  (let [{:keys [started clock-node]} @clock]
    (when started
      (.disconnect clock-node)
      (swap! clock assoc :started false :clock-node nil)
      clock)))