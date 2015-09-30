// Compiled by ClojureScript 1.7.48 {}
goog.provide('shooter.game.collision');
goog.require('cljs.core');
shooter.game.collision.intersects_QMARK_ = (function shooter$game$collision$intersects_QMARK_(rect_a,rect_b){
var map__26247 = rect_a;
var map__26247__$1 = ((((!((map__26247 == null)))?((((map__26247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26247):map__26247);
var ax = cljs.core.get.call(null,map__26247__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ay = cljs.core.get.call(null,map__26247__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var asize = cljs.core.get.call(null,map__26247__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__26248 = rect_b;
var map__26248__$1 = ((((!((map__26248 == null)))?((((map__26248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26248):map__26248);
var bx = cljs.core.get.call(null,map__26248__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by = cljs.core.get.call(null,map__26248__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var bsize = cljs.core.get.call(null,map__26248__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return ((ax > (bx + bsize))) || (((ax + asize) < bx)) || ((ay > (by + bsize))) || (((ay + asize) < by));
});
shooter.game.collision.block_intersections = (function shooter$game$collision$block_intersections(rect,blocks,blocksize){
var iter__17275__auto__ = (function shooter$game$collision$block_intersections_$_iter__26255(s__26256){
return (new cljs.core.LazySeq(null,(function (){
var s__26256__$1 = s__26256;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26256__$1);
if(temp__4425__auto__){
var s__26256__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26256__$2)){
var c__17273__auto__ = cljs.core.chunk_first.call(null,s__26256__$2);
var size__17274__auto__ = cljs.core.count.call(null,c__17273__auto__);
var b__26258 = cljs.core.chunk_buffer.call(null,size__17274__auto__);
if((function (){var i__26257 = (0);
while(true){
if((i__26257 < size__17274__auto__)){
var block = cljs.core._nth.call(null,c__17273__auto__,i__26257);
cljs.core.chunk_append.call(null,b__26258,shooter.game.collision.intersects_QMARK_.call(null,rect,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"size","size",1098693007),blocksize], null)));

var G__26259 = (i__26257 + (1));
i__26257 = G__26259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26258),shooter$game$collision$block_intersections_$_iter__26255.call(null,cljs.core.chunk_rest.call(null,s__26256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26258),null);
}
} else {
var block = cljs.core.first.call(null,s__26256__$2);
return cljs.core.cons.call(null,shooter.game.collision.intersects_QMARK_.call(null,rect,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"size","size",1098693007),blocksize], null)),shooter$game$collision$block_intersections_$_iter__26255.call(null,cljs.core.rest.call(null,s__26256__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17275__auto__.call(null,blocks);
});
shooter.game.collision.rect_intersects_blocks_QMARK_ = (function shooter$game$collision$rect_intersects_blocks_QMARK_(rect,blocks,blocksize){
var intersections = shooter.game.collision.block_intersections.call(null,rect,blocks,blocksize);
var nri = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.false_QMARK_,intersections));
return ((0) < nri);
});
shooter.game.collision.rect_intersects_rects_QMARK_ = (function shooter$game$collision$rect_intersects_rects_QMARK_(rect,rects){
var intersections = (function (){var iter__17275__auto__ = (function shooter$game$collision$rect_intersects_rects_QMARK__$_iter__26264(s__26265){
return (new cljs.core.LazySeq(null,(function (){
var s__26265__$1 = s__26265;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26265__$1);
if(temp__4425__auto__){
var s__26265__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26265__$2)){
var c__17273__auto__ = cljs.core.chunk_first.call(null,s__26265__$2);
var size__17274__auto__ = cljs.core.count.call(null,c__17273__auto__);
var b__26267 = cljs.core.chunk_buffer.call(null,size__17274__auto__);
if((function (){var i__26266 = (0);
while(true){
if((i__26266 < size__17274__auto__)){
var rect_cand = cljs.core._nth.call(null,c__17273__auto__,i__26266);
cljs.core.chunk_append.call(null,b__26267,shooter.game.collision.intersects_QMARK_.call(null,rect,rect_cand));

var G__26268 = (i__26266 + (1));
i__26266 = G__26268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26267),shooter$game$collision$rect_intersects_rects_QMARK__$_iter__26264.call(null,cljs.core.chunk_rest.call(null,s__26265__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26267),null);
}
} else {
var rect_cand = cljs.core.first.call(null,s__26265__$2);
return cljs.core.cons.call(null,shooter.game.collision.intersects_QMARK_.call(null,rect,rect_cand),shooter$game$collision$rect_intersects_rects_QMARK__$_iter__26264.call(null,cljs.core.rest.call(null,s__26265__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17275__auto__.call(null,rects);
})();
var nri = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.false_QMARK_,intersections));
return ((0) < nri);
});
shooter.game.collision.rect_intersects_boundary_QMARK_ = (function shooter$game$collision$rect_intersects_boundary_QMARK_(rect,map){
var map__26272 = rect;
var map__26272__$1 = ((((!((map__26272 == null)))?((((map__26272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26272):map__26272);
var px = cljs.core.get.call(null,map__26272__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__26272__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__26272__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__26273 = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(map);
var mw = cljs.core.nth.call(null,vec__26273,(0),null);
var mh = cljs.core.nth.call(null,vec__26273,(1),null);
return ((px < (0))) || ((py < (0))) || (((px + psize) > mw)) || (((py + psize) > mh));
});

//# sourceMappingURL=collision.js.map