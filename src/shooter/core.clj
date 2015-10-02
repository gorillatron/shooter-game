(ns shooter.core
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [shooter.game.client :as client])
  (:gen-class))

(defn -main [& args]
  (client/create))
