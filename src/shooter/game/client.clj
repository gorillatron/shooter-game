(ns shooter.game.client
  (:require [quil.core :as q]
            [shooter.game.engine :as engine]
            [clojure.core.async :refer [go chan <! >! put!]]
            [shooter.game.server-connection :as sc])
  (:gen-class))

(defn create []
  (do

    (q/defsketch game-renderer
                 :setup engine/setup
                 :draw engine/draw
                 :size engine/map-size-vec
                 :mouse-clicked engine/on-mouse-clicked
                 :key-pressed engine/on-key-down
                 :key-released engine/on-key-up)
    (engine/join-game)))
