(ns ^:figwheel-hooks mecca.music.actions)

(defrecord Play [target])
(defrecord PlayOnce [target])
(defrecord Loop [target])
(defrecord Stop [target])