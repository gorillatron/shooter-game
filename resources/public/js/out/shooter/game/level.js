// Compiled by ClojureScript 1.7.48 {}
goog.provide('shooter.game.level');
goog.require('cljs.core');

/**
* @constructor
* @param {*} blocksize
* @param {*} matrix
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
shooter.game.level.Map = (function (blocksize,matrix,__meta,__extmap,__hash){
this.blocksize = blocksize;
this.matrix = matrix;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
shooter.game.level.Map.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17117__auto__,k__17118__auto__){
var self__ = this;
var this__17117__auto____$1 = this;
return cljs.core._lookup.call(null,this__17117__auto____$1,k__17118__auto__,null);
});

shooter.game.level.Map.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17119__auto__,k26278,else__17120__auto__){
var self__ = this;
var this__17119__auto____$1 = this;
var G__26280 = (((k26278 instanceof cljs.core.Keyword))?k26278.fqn:null);
switch (G__26280) {
case "blocksize":
return self__.blocksize;

break;
case "matrix":
return self__.matrix;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26278,else__17120__auto__);

}
});

shooter.game.level.Map.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17131__auto__,writer__17132__auto__,opts__17133__auto__){
var self__ = this;
var this__17131__auto____$1 = this;
var pr_pair__17134__auto__ = ((function (this__17131__auto____$1){
return (function (keyval__17135__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17132__auto__,cljs.core.pr_writer,""," ","",opts__17133__auto__,keyval__17135__auto__);
});})(this__17131__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17132__auto__,pr_pair__17134__auto__,"#shooter.game.level.Map{",", ","}",opts__17133__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),self__.blocksize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matrix","matrix",803137200),self__.matrix],null))], null),self__.__extmap));
});

shooter.game.level.Map.prototype.cljs$core$IIterable$ = true;

shooter.game.level.Map.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26277){
var self__ = this;
var G__26277__$1 = this;
return (new cljs.core.RecordIter((0),G__26277__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),new cljs.core.Keyword(null,"matrix","matrix",803137200)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

shooter.game.level.Map.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17115__auto__){
var self__ = this;
var this__17115__auto____$1 = this;
return self__.__meta;
});

shooter.game.level.Map.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17111__auto__){
var self__ = this;
var this__17111__auto____$1 = this;
return (new shooter.game.level.Map(self__.blocksize,self__.matrix,self__.__meta,self__.__extmap,self__.__hash));
});

shooter.game.level.Map.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17121__auto__){
var self__ = this;
var this__17121__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

shooter.game.level.Map.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17112__auto__){
var self__ = this;
var this__17112__auto____$1 = this;
var h__16938__auto__ = self__.__hash;
if(!((h__16938__auto__ == null))){
return h__16938__auto__;
} else {
var h__16938__auto____$1 = cljs.core.hash_imap.call(null,this__17112__auto____$1);
self__.__hash = h__16938__auto____$1;

return h__16938__auto____$1;
}
});

shooter.game.level.Map.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17113__auto__,other__17114__auto__){
var self__ = this;
var this__17113__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16510__auto__ = other__17114__auto__;
if(cljs.core.truth_(and__16510__auto__)){
var and__16510__auto____$1 = (this__17113__auto____$1.constructor === other__17114__auto__.constructor);
if(and__16510__auto____$1){
return cljs.core.equiv_map.call(null,this__17113__auto____$1,other__17114__auto__);
} else {
return and__16510__auto____$1;
}
} else {
return and__16510__auto__;
}
})())){
return true;
} else {
return false;
}
});

shooter.game.level.Map.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17126__auto__,k__17127__auto__){
var self__ = this;
var this__17126__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"matrix","matrix",803137200),null,new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),null], null), null),k__17127__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17126__auto____$1),self__.__meta),k__17127__auto__);
} else {
return (new shooter.game.level.Map(self__.blocksize,self__.matrix,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17127__auto__)),null));
}
});

shooter.game.level.Map.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17124__auto__,k__17125__auto__,G__26277){
var self__ = this;
var this__17124__auto____$1 = this;
var pred__26281 = cljs.core.keyword_identical_QMARK_;
var expr__26282 = k__17125__auto__;
if(cljs.core.truth_(pred__26281.call(null,new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),expr__26282))){
return (new shooter.game.level.Map(G__26277,self__.matrix,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26281.call(null,new cljs.core.Keyword(null,"matrix","matrix",803137200),expr__26282))){
return (new shooter.game.level.Map(self__.blocksize,G__26277,self__.__meta,self__.__extmap,null));
} else {
return (new shooter.game.level.Map(self__.blocksize,self__.matrix,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17125__auto__,G__26277),null));
}
}
});

shooter.game.level.Map.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17129__auto__){
var self__ = this;
var this__17129__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),self__.blocksize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matrix","matrix",803137200),self__.matrix],null))], null),self__.__extmap));
});

shooter.game.level.Map.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17116__auto__,G__26277){
var self__ = this;
var this__17116__auto____$1 = this;
return (new shooter.game.level.Map(self__.blocksize,self__.matrix,G__26277,self__.__extmap,self__.__hash));
});

shooter.game.level.Map.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17122__auto__,entry__17123__auto__){
var self__ = this;
var this__17122__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17123__auto__)){
return cljs.core._assoc.call(null,this__17122__auto____$1,cljs.core._nth.call(null,entry__17123__auto__,(0)),cljs.core._nth.call(null,entry__17123__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17122__auto____$1,entry__17123__auto__);
}
});

shooter.game.level.Map.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocksize","blocksize",-97273704,null),new cljs.core.Symbol(null,"matrix","matrix",-1851298569,null)], null);
});

shooter.game.level.Map.cljs$lang$type = true;

shooter.game.level.Map.cljs$lang$ctorPrSeq = (function (this__17151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"shooter.game.level/Map");
});

shooter.game.level.Map.cljs$lang$ctorPrWriter = (function (this__17151__auto__,writer__17152__auto__){
return cljs.core._write.call(null,writer__17152__auto__,"shooter.game.level/Map");
});

shooter.game.level.__GT_Map = (function shooter$game$level$__GT_Map(blocksize,matrix){
return (new shooter.game.level.Map(blocksize,matrix,null,null,null));
});

shooter.game.level.map__GT_Map = (function shooter$game$level$map__GT_Map(G__26279){
return (new shooter.game.level.Map(new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(G__26279),new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(G__26279),null,cljs.core.dissoc.call(null,G__26279,new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231),new cljs.core.Keyword(null,"matrix","matrix",803137200)),null));
});

shooter.game.level.map_size = (function shooter$game$level$map_size(map){

var map__26287 = map;
var map__26287__$1 = ((((!((map__26287 == null)))?((((map__26287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26287):map__26287);
var matrix = cljs.core.get.call(null,map__26287__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
var blocksize = cljs.core.get.call(null,map__26287__$1,new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231));
var x = (blocksize * cljs.core.count.call(null,cljs.core.first.call(null,matrix)));
var y = (blocksize * cljs.core.count.call(null,matrix));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
shooter.game.level.block_of_type = (function shooter$game$level$block_of_type(type,map){

var map__26291 = map;
var map__26291__$1 = ((((!((map__26291 == null)))?((((map__26291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26291):map__26291);
var blocksize = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231));
var matrix = cljs.core.get.call(null,map__26291__$1,new cljs.core.Keyword(null,"matrix","matrix",803137200));
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.map_indexed.call(null,((function (map__26291,map__26291__$1,blocksize,matrix){
return (function (ydx,row){
return cljs.core.map_indexed.call(null,((function (map__26291,map__26291__$1,blocksize,matrix){
return (function (xdx,block){
var y = (ydx * blocksize);
var x = (xdx * blocksize);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
} else {
return null;
}
});})(map__26291,map__26291__$1,blocksize,matrix))
,row);
});})(map__26291,map__26291__$1,blocksize,matrix))
,matrix)));
});
shooter.game.level.walls = (function shooter$game$level$walls(map){

return shooter.game.level.block_of_type.call(null,new cljs.core.Keyword(null,"w","w",354169001),map);
});
shooter.game.level.construct_map = (function shooter$game$level$construct_map(blocksize,matrix){

var map = (new shooter.game.level.Map(blocksize,matrix,null,null,null));
return cljs.core.assoc.call(null,map,new cljs.core.Keyword(null,"size","size",1098693007),shooter.game.level.map_size.call(null,map));
});

//# sourceMappingURL=level.js.map