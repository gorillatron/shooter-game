(ns shooter.game
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [clojure.core.async :refer [go put! take! chan <! >! timeout]]
            [shooter.game.engine :as engine]))


(q/defsketch game-renderer
  :setup engine/setup
  :draw engine/draw
  :host "game-canvas"
  :size engine/map-size-vec
  :mouse-clicked engine/on-mouse-clicked
  :key-pressed engine/on-key-down
  :key-released engine/on-key-up)
