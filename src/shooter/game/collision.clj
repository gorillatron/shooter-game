(ns shooter.game.collision)


(defn intersects? [rect-a rect-b]
  (let [{ax :x ay :y asize :size} rect-a
        {bx :x by :y bsize :size} rect-b]
    (or
      (> ax (+ bx bsize))
      (< (+ ax asize) bx)
      (> ay (+ by bsize))
      (< (+ ay asize) by))))


(defn block-intersections [rect blocks blocksize]
  (for [block blocks]
    (intersects? rect {:x (:x block) :y (:y block) :size blocksize})))


(defn rect-intersects-blocks? [rect blocks blocksize]
  (let [intersections (block-intersections rect blocks blocksize)
        nri (count (filter false? intersections))]
    (< 0 nri)))


(defn rect-intersects-rects? [rect rects]
  (let [intersections (for [rect-cand rects]
    (intersects? rect rect-cand))
        nri (count (filter false? intersections))]
    (< 0 nri)))



(defn rect-intersects-boundary? [rect map]
  (let [{px :x py :y psize :size} rect
        [mw mh] (:size map)]
    (or
      (< px 0)
      (< py 0)
      (> (+ px psize) mw)
      (> (+ py psize) mh))))
