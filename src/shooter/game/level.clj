(ns shooter.game.level)


(defrecord Map [blocksize matrix])


(defn map-size [map]
  "Calculate a vector for the size of a map"
  (let [{matrix :matrix blocksize :blocksize} map
        x (* blocksize (count (first matrix)))
        y (* blocksize (count matrix))]
    [x y]))


(defn block-of-type [type map]
  "Get all blocks of a certain typ in the map"
  (let [{blocksize :blocksize matrix :matrix} map]
    (remove nil?
      (flatten
        (map-indexed (fn [ydx row]
          (map-indexed (fn [xdx block]
            (let [y (* ydx blocksize)
                  x (* xdx blocksize)]
              (if (= type (:type block))
                {:x x :y y}))) row)) matrix)))))


(defn walls [map]
  "Get all the walls in the map"
  (block-of-type :w map))


(defn construct-map [blocksize matrix]
  "Map factory function"
  (let [map (new Map blocksize matrix)]
    (assoc map :size (map-size map))))
