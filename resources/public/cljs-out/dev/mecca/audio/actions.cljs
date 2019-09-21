(ns ^:figwheel-hooks mecca.audio.actions)

(defrecord Play [target])
(defrecord PlayOnce [target])
(defrecord Loop [target])
(defrecord Stop [target])