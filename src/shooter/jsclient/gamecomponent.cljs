(ns shooter.jsclient.gamecomponent
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [cljs.core.async :refer [put! take! chan <! >! timeout]]
            [shooter.game.engine :refer [create-simulation]]
            [shooter.game.level :refer [block-of-type walls map-size]]
            [shooter.game.levels.level1 :refer [level1]]))


(defrecord GameState [player remote-players bullets map])

(defrecord Player [name x y size speed hp])

(def controll-mapping { :w :up
                        :s :down
                        :d :right
                        :a :left })

(def game-simulation (create-simulation { :player (new Player (str "gorilla" (rand 100)) (rand 100) (rand 100) 10 1 150)
                                          :map level1 }))

(def next-frame (:next-frame game-simulation))
(def controller (:controller game-simulation))
(def add-event (:add-event game-simulation))
(def update-channel (:update-channel game-simulation))

(def socket (js/WebSocket. "ws://localhost:8080/book-of-5-rinds/ws"))

(go (while true
  (let [update (<! update-channel)]
    (.send socket (js/JSON.stringify (clj->js update))))))

(aset socket "onmessage" (fn [message]
  (let [event (js->clj (js/JSON.parse (.-data message)) :keywordize-keys true)]
    (add-event event))))

(defn setup []
  (q/smooth)
  (q/frame-rate 60))

(defn draw []
  (let [state (next-frame)
        player (:player state)
        bullets (:bullets state)
        remote-players (vals (:remote-players state))
        remote-bullets (:remote-bullets state)
        hp (:hp player)
        walls (walls (:map state))]


    (if (< hp 0)

      ; GAME OVER
      (doseq []
        (q/background 230 40 40)
        (q/text-size 40)
        (q/text "GAME OVER" 100 100))

      ; CONTINUE
      (doseq []
        (q/background 255)

        (q/stroke 50 200 50)
        (q/fill 80 250 80)
        (q/rect 5 350 hp 5)


        (q/stroke 0 0 0)
        (q/fill 200 200 200)
        (doseq [wall walls]
          (q/rect (:x wall) (:y wall) 20 20))

        ; PLayer and player local objects
        (q/fill 50 120 190)
        (q/stroke 50 120 190)
        (let [{x :x y :y size :size} player]
          (q/rect x y size size))

        (doseq [bullet bullets]
          (let [{bx :x by :y size :size} bullet]
            (q/rect bx by size size)))

        ; Remote players and objects
        (q/fill 200 30 30)
        (q/stroke 200 30 30)
        (doseq [remote-player remote-players]
          (let [{x :x y :y size :size hp :hp} remote-player]
            (if (> hp 0) (q/rect x y size size))))

        (doseq [bullet remote-bullets]
          (let [{bx :x by :y size :size} bullet]
            (q/rect bx by size size)))
        ))

    ; (println (count (:hits-taken state)))

))

(defn on-key-down []
  (controller #(conj % ((q/key-as-keyword) controll-mapping))))


(defn on-key-up []
  (controller #(disj % ((q/key-as-keyword) controll-mapping))))


(defn on-mouse-clicked []
  (let [mx (q/mouse-x)
        my (q/mouse-y)
        event {:name "player-fired-bullet" :mx mx :my my}]
    (add-event event)))


(q/defsketch game-renderer
  :setup setup
  :draw draw
  :host "game-canvas"
  :size (map-size level1)
  :mouse-clicked on-mouse-clicked
  :key-pressed on-key-down
  :key-released on-key-up)


; React Components
(defn game-component []
  (reify
    om/IDidMount
    (did-mount [this]
      (game-renderer))
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h1 nil "game")
        (dom/canvas #js {:id "game-canvas" :style #js {:border "1px solid gray"}})))))