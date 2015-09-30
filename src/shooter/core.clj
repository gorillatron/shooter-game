(ns shooter.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [clojure.core.async :refer [go put! take! chan <! >! timeout]]
            [shooter.game.engine :as engine])
  (:gen-class))

(defn -main [& args]
  (q/defsketch game-renderer
    :setup engine/setup
    :draw engine/draw
    :size engine/map-size-vec
    :mouse-clicked engine/on-mouse-clicked
    :key-pressed engine/on-key-down
    :key-released engine/on-key-up))
