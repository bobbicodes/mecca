(ns debux.common.util
  "Utilities common for clojure and clojurescript"
  (:refer-clojure :exclude [coll?])
  (:require [clojure.string :as str]
            [clojure.pprint :as pp]
            [clojure.zip :as z]
            [clojure.walk :as walk]
            [cljs.analyzer.api :as ana]
            [clojure.repl :as repl]
            [re-frame.trace :as trace]))

;;; zipper
(defn sequential-zip [root]
  (z/zipper sequential?
            identity
            (fn [x children]
              (if (vector? x) (vec children) children))
            root))

(defn right-or-next [loc]
  (if-let [right (z/right loc)]
    ;; in case of (... (+ a b) c) or (... a b)
    right
    (if (sequential? (z/node loc))
      (let [rightmost (-> loc z/down z/rightmost)]
        (if (sequential? (z/node rightmost))
          ;; in case of (... (+ a (* b c)))
          (recur rightmost)

          ;; in case of (... (+ a b))
          (-> rightmost z/next)))

      ;; in case of (... a)
      (-> loc z/next))))


;; Tidy up macroexpansions

(def auto-gensym-pattern #"(.*)__\d+__auto__")              ;; form#
(def anon-gensym-pattern #"G__\d+")                         ;; (gensym)
(def named-gensym-pattern #"(.*?)\d{4,}")                   ;; (gensym 'form), must match at least 4 numbers so we don't catch symbols with trailing numbers
(def anon-param-pattern #"p(\d+)__\d+#")                    ;; #(%1 %2 %3)

(defn form-tree-seq [form]
  (tree-seq
    sequential?
    seq
    form))

(defn with-gensyms-names
  "Reverse gensym'd names to their original source form to make them easier to read."
  [form mapping]
  (let [gen-name (fn [result name]
                   (if-not (contains? result (str name "#"))
                     (str name "#")
                     (->> (iterate inc 2)
                          (map #(str name % "#"))
                          (filter #(not (contains? result %)))
                          (first))))
        name-for (fn [result sym-name]
                   (if-let [groups (re-matches auto-gensym-pattern sym-name)]
                     (gen-name result (second groups))
                     (if (re-matches anon-gensym-pattern sym-name)
                       (gen-name result "gensym")
                       (if-let [groups (re-matches named-gensym-pattern sym-name)]
                         (gen-name result (second groups))
                         (if-let [groups (re-matches anon-param-pattern sym-name)]
                           (str "%" (second groups)))))))]
    (reduce (fn [result sym-name]
              (if (contains? result sym-name)
                result
                (if-let [new-name (name-for result sym-name)]
                  (assoc result sym-name new-name)
                  result)))
            mapping
            (->> (form-tree-seq form)
                 (filter #(and (symbol? %) (nil? (namespace %))))
                 (map name)))))

(defn with-symbols-names
  "Tidy up fully qualified names that have aliases in the existing namespace."
  ;; TODO: handle FQN's other than clojure.core
  [form {:keys [context refers aliases] :as state} mapping]
  (reduce (fn [result sym]
            (if (= "clojure.core" (namespace sym))
              (assoc result (pr-str sym) (name sym))
              result))
          mapping
          (->> (form-tree-seq form)
               ;; TODO: use qualified-symbol? once we are on Clojure 1.9
               (filter #(and (symbol? %) (namespace %)))))

  #_(reduce (fn [result sym]
              (let [sym-ns (namespace sym)
                    alias  (get aliases sym-ns)
                    refers (get refers sym-ns)]
                (cond
                  ; Referred symbol, or from this ns
                  (or (= :all (:refer refers))
                      (contains? (:refer refers) (name sym))
                      (= (context/namespace context) sym-ns))
                  (assoc result (names/qualified-name sym) (name sym))
                  ; Aliased symbol
                  alias (assoc result (names/qualified-name sym) (str alias \/ (name sym)))
                  :else result)))
            mapping
            (->> (visible-tree-seq form)
                 (filter #(and (psi/symbol? %) (namespace %))))))

(defn tidy-macroexpanded-form
  "Takes a macroexpanded form and tidies it up to be more readable by
  unmapping gensyms and replacing fully qualified namespaces with aliases
  or nothing if the function is referred."
  [form state]
  ;; Mapping is a mapping of String:String which represent symbols
  (let [mapping (->> {}
                     (with-gensyms-names form)
                     (with-symbols-names form state))]
    (loop [loc (sequential-zip form)]
      (if (z/end? loc)
        (z/root loc)
        (if (symbol? (z/node loc))
          (recur (z/next (z/edit loc (fn [sym] (symbol (get mapping (pr-str sym) sym))))))
          (recur (z/next loc)))))))

;;

(defn send-form! [form]
  (trace/merge-trace! {:tags {:form form}}))

(defn send-trace! [code-trace]
  (let [code (get-in trace/*current-trace* [:tags :code] [])]
    ;; TODO: also capture macroexpanded form? Might be useful in some cases?
    (trace/merge-trace!
      {:tags {:code (conj code {:form (tidy-macroexpanded-form (:form code-trace) {}) :result (:result code-trace) :indent-level (:indent-level code-trace)})}})))

;;; For internal debugging
(defmacro d
  "The internal macro to debug dbg macro.
   <form any> a form to be evaluated"
  [form]
  `(let [return# ~form]
     (println ">> dbg_:" (pr-str '~form) "=>\n" (pr-str return#) "<<")
     return#))


;;; indent-level control
(def indent-level* (atom 1))

(defn reset-indent-level! []
  (reset! indent-level* 1))


;;; print-seq-length
(def print-seq-length* (atom 100))

(defn set-print-seq-length! [num]
  (reset! print-seq-length* num))


;;; general
(defmacro read-source [sym]
  `(-> (repl/source ~sym)
       with-out-str
       read-string))

(defn cljs-env? [env]
  (boolean (:ns env)))

(defn vec->map
  "Transsub-forms a vector into an array-map with key/value pairs.
  (def a 10)
  (def b 20)
  (vec-map [a b :c [30 40]])
  => {:a 10 :b 20 ::c :c :[30 40] [30 40]}"
  [v]
  (apply array-map
         (mapcat (fn [elm]
                   `[~(keyword (str elm)) ~elm])
                 v)))

(defn replace-& [v]
  (walk/postwalk-replace {'& ''&} v))



;;; symbol with namespace
#?(:clj
   (defn- var->symbol [v]
     (let [m    (meta v)
           ns   (str (ns-name (:ns m)))
           name (str (:name m))]
       (symbol ns name))))

#?(:clj
   (defn- ns-symbol-for-clj [sym]
     (if-let [v (resolve sym)]
       (var->symbol v)
       sym)))

#?(:clj
   (defn- ns-symbol-for-cljs [sym env]
     (if-let [meta (ana/resolve env sym)]
       ;; normal symbol
       (let [[ns name] (str/split (str (:name meta)) #"/")]
         ;; The special symbol `.` must be handled in the following special symbol part.
         ;; However, the special symbol `.` returns meta {:name / :ns nil}, which may be a bug.
         (if (nil? ns)
           sym
           (symbol ns name)))
       ;; special symbols except for `.`
       sym)))

#?(:clj
   (defn ns-symbol [sym & [env]]
     (if (symbol? sym)
       (if (cljs-env? env)
         (ns-symbol-for-cljs sym env)
         (ns-symbol-for-clj sym))
       sym)))


;;; print
(defn take-n-if-seq [n result]
  (if (seq? result)
    (take (or n @print-seq-length*) result)
    result))

(defn truncate [s]
  (if (> (count s) 70)
    (str (.substring s 0 70) " ...")
    s))

(defn- make-bars-
  [times]
  (apply str (repeat times "|")))

(def make-bars (memoize make-bars-))

(defn prepend-bars
  [line indent-level]
  (str (make-bars indent-level) " " line))

(defn print-form-with-indent
  [form indent-level]
  ;; TODO: trace this information somehow
  (println (prepend-bars form indent-level))
  (flush))

(defn form-header [form & [msg]]
  (str (truncate (pr-str form))
       (and msg (str "   <" msg ">"))
       " =>"))


(defn prepend-blanks
  [lines]
  (mapv #(str "  " %) lines))

(defn pprint-result-with-indent
  [result indent-level]
  ;; TODO: trace this information somehow
  (let [res    result
        result (with-out-str (pp/pprint res))
        pprint (str/trim result)]
    (println (->> (str/split pprint #"\n")
                  prepend-blanks
                  (mapv #(prepend-bars % indent-level))
                  (str/join "\n")))
    (flush)))

(defn insert-blank-line []
  (println " ")
  (flush))


;;; parse options
(defn parse-opts
  [opts]
  (loop [opts opts
         acc  {}]
    (let [f (first opts)
          s (second opts)]
      (cond
        (empty? opts)
        acc

        (number? f)
        (recur (next opts) (assoc acc :n f))

        (string? f)
        (recur (next opts) (assoc acc :msg f))

        (= f :if)
        (recur (nnext opts) (assoc acc :condition s))

        ;;; for clojurescript
        (= f :js)
        (recur (next opts) (assoc acc :js true))

        (#{:once :o} f)
        (recur (next opts) (assoc acc :once true))

        (#{:style :s} f)
        (recur (nnext opts) (assoc acc :style s))

        (= f :clog)
        (recur (next opts) (assoc acc :clog true))))))


;;; quote the value parts of a map
(defn quote-val [[k v]]
  `[~k '~v])

(defn quote-vals [m]
  (->> (map quote-val m)
       (into {})))


;;; for recur processing
(defn include-recur? [form]
  (((comp set flatten) form) 'recur))

#?(:clj
   (defn final-target? [sym targets env]
     (let [ns-sym (ns-symbol sym env)]
       (or (get targets ns-sym)
           (some #(= % ns-sym)
                 '[clojure.core/defn clojure.core/defn- clojure.core/fn
                   cljs.core/defn cljs.core/defn- cljs.core/fn])))))

(defn o-skip? [sym]
  (= 'debux.common.macro-specs/o-skip sym))

(declare remove-d)

;;; spy functions
(def spy-first
  (fn [result quoted-form indent]
    (assert (integer? indent) (str "indent was not correctly replaced for form " (prn-str quoted-form) "\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"))
    (send-trace! {:form (remove-d quoted-form 'dummy) :result result :indent-level indent})
    ;(print-form-with-indent (form-header quoted-form) indent)
    ;(pprint-result-with-indent (take-n-if-seq 100 result) indent)
    result))

(def spy-last
  (fn [quoted-form indent result]
    (assert (integer? indent) (str "indent was not correctly replaced for form " (prn-str quoted-form) "\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"))
    (send-trace! {:form (remove-d quoted-form 'dummy) :result result :indent-level indent})
    ;(print-form-with-indent (form-header quoted-form) indent)
    ;(pprint-result-with-indent (take-n-if-seq 100 result) indent)
    result))

(defn spy-comp [quoted-form indent form]
  (fn [& arg]
    (let [result (apply form arg)]
      (assert (integer? indent) (str "indent was not correctly replaced for form " (prn-str quoted-form) "\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"))
      (send-trace! {:form (remove-d quoted-form 'dummy) :result result :indent-level indent})
      ;(print-form-with-indent (form-header quoted-form) indent)
      ;(pprint-result-with-indent (take-n-if-seq 100 result) indent)
      result)))

;; Remove trace info

(defn debux-skip-symbol? [sym]
  (contains? #{'debux.common.macro-specs/skip-outer
               'debux.common.macro-specs/skip
               'debux.common.macro-specs/o-skip}
             sym))

(defn spy-first? [sym]
  (= 'debux.common.util/spy-first sym))

(defn third [coll]
  (first (next (next coll))))

(defn remove-d [form d-sym]
  ;; TODO: should we instead look to rewrite the quoted/spied forms
  ;; at macro compile time, rather than filtering them out
  ;; when the trace is being emitted?
  (loop [loc (sequential-zip form)]
    (let [node (z/node loc)]
      ;(ut/d node)
      (cond
        (z/end? loc) (z/root loc)

        ;; in case of (d ...)
        (and (seq? node)
             (or (= d-sym (first node))
                 (debux-skip-symbol? (first node))
                 (spy-first? (first node))))
        ;; We take the third node, because the first two are
        ;; (d <indent-level> ...)
        (recur (z/replace loc (third node)))

        ;; in case of spy-last
        (and (seq? node)
             (= `spy-last (first node)))
        (recur (z/replace loc (last node)))

        :else
        (recur (z/next loc))))))
