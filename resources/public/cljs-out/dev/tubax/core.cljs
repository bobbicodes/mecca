(ns tubax.core
  (:require ext.saxjs))

(defn- new-document []
  (list))

(defn- add-node-document
  [node document]
  (let [keytag (keyword (.-name node))
        att-map (js->clj (.-attributes node) :keywordize-keys true)
        node-value {:tag keytag :attributes att-map :content []}]
    (-> document (conj node-value))))

(defn- close-node-document
  [node document]
  (if (not (empty? (rest document)))
    (let [current-node    (first document)
          father-node     (first (rest document))
          father-children (:content father-node)
          new-father (assoc father-node :content (conj father-children current-node))]
      (conj (rest (rest document)) new-father))
    document))

(defn- add-text
  [text document]
  (if (not (empty? text))
    (let [current-node (first document)
          node-children (:content current-node)
          new-node-value (assoc current-node :content (conj node-children text))]
      (conj (rest document) new-node-value))
    document))

(defn- format-document
  [document]
  (first document))

(defn xml->clj
  ([source] (xml->clj source {}))
  ([source {:keys [strict trim normalize
                   lowercase xmlns position
                   strict-entities]
            :or {strict true
                 trim true
                 normalize false
                 lowercase true
                 position true
                 strict-entities false}}]
   (let [parser (.parser js/sax strict #js {"trim" trim
                                            "normalize" normalize
                                            "lowercase" lowercase
                                            "xmlns" xmlns
                                            "position" position
                                            "strictEntities" strict-entities})
         document (atom (new-document))
         result (atom nil)]
     ;; OPEN TAG
     (set! (.-onopentag parser)
           #(swap! document (partial add-node-document %)))

     ;; CLOSE TAG
     (set! (.-onclosetag parser)
           #(swap! document (partial close-node-document %)))

     ;; GET TEXT
     (set! (.-ontext parser)
           #(swap! document (partial add-text %)))

     ;; CDATA HANDLING
     (set! (.-oncdata parser)
           #(swap! document (partial add-text %)))

     ;; END PARSING
     (set! (.-onend parser)
           #(when (nil? @result)
              (reset! result {:success (format-document @document)})))

     ;; ERROR
     (set! (.-onerror parser)
           #(reset! result {:error (str %)}))

     (.write parser source)
     (.close parser)

     (or (:success @result)
         (throw (ex-info (str (:error @result)) {}))))))
