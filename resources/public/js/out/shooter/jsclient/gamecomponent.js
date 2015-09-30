// Compiled by ClojureScript 1.7.48 {}
goog.provide('shooter.jsclient.gamecomponent');
goog.require('cljs.core');
goog.require('shooter.game.levels.level1');
goog.require('shooter.game.engine');
goog.require('om.dom');
goog.require('quil.core');
goog.require('shooter.game.level');
goog.require('cljs.core.async');
goog.require('quil.middleware');
goog.require('om.core');

/**
* @constructor
* @param {*} player
* @param {*} remote_players
* @param {*} bullets
* @param {*} map
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
shooter.jsclient.gamecomponent.GameState = (function (player,remote_players,bullets,map,__meta,__extmap,__hash){
this.player = player;
this.remote_players = remote_players;
this.bullets = bullets;
this.map = map;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17117__auto__,k__17118__auto__){
var self__ = this;
var this__17117__auto____$1 = this;
return cljs.core._lookup.call(null,this__17117__auto____$1,k__17118__auto__,null);
});

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17119__auto__,k28015,else__17120__auto__){
var self__ = this;
var this__17119__auto____$1 = this;
var G__28017 = (((k28015 instanceof cljs.core.Keyword))?k28015.fqn:null);
switch (G__28017) {
case "player":
return self__.player;

break;
case "remote-players":
return self__.remote_players;

break;
case "bullets":
return self__.bullets;

break;
case "map":
return self__.map;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28015,else__17120__auto__);

}
});

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17131__auto__,writer__17132__auto__,opts__17133__auto__){
var self__ = this;
var this__17131__auto____$1 = this;
var pr_pair__17134__auto__ = ((function (this__17131__auto____$1){
return (function (keyval__17135__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17132__auto__,cljs.core.pr_writer,""," ","",opts__17133__auto__,keyval__17135__auto__);
});})(this__17131__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17132__auto__,pr_pair__17134__auto__,"#shooter.jsclient.gamecomponent.GameState{",", ","}",opts__17133__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player","player",-97687400),self__.player],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),self__.remote_players],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bullets","bullets",1734809024),self__.bullets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map","map",1371690461),self__.map],null))], null),self__.__extmap));
});

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$IIterable$ = true;

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28014){
var self__ = this;
var G__28014__$1 = this;
return (new cljs.core.RecordIter((0),G__28014__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17115__auto__){
var self__ = this;
var this__17115__auto____$1 = this;
return self__.__meta;
});

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17111__auto__){
var self__ = this;
var this__17111__auto____$1 = this;
return (new shooter.jsclient.gamecomponent.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,self__.__hash));
});

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17121__auto__){
var self__ = this;
var this__17121__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17112__auto__){
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

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17113__auto__,other__17114__auto__){
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

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17126__auto__,k__17127__auto__){
var self__ = this;
var this__17126__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bullets","bullets",1734809024),null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),null,new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),k__17127__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17126__auto____$1),self__.__meta),k__17127__auto__);
} else {
return (new shooter.jsclient.gamecomponent.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17127__auto__)),null));
}
});

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17124__auto__,k__17125__auto__,G__28014){
var self__ = this;
var this__17124__auto____$1 = this;
var pred__28018 = cljs.core.keyword_identical_QMARK_;
var expr__28019 = k__17125__auto__;
if(cljs.core.truth_(pred__28018.call(null,new cljs.core.Keyword(null,"player","player",-97687400),expr__28019))){
return (new shooter.jsclient.gamecomponent.GameState(G__28014,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28018.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),expr__28019))){
return (new shooter.jsclient.gamecomponent.GameState(self__.player,G__28014,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28018.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),expr__28019))){
return (new shooter.jsclient.gamecomponent.GameState(self__.player,self__.remote_players,G__28014,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28018.call(null,new cljs.core.Keyword(null,"map","map",1371690461),expr__28019))){
return (new shooter.jsclient.gamecomponent.GameState(self__.player,self__.remote_players,self__.bullets,G__28014,self__.__meta,self__.__extmap,null));
} else {
return (new shooter.jsclient.gamecomponent.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17125__auto__,G__28014),null));
}
}
}
}
});

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17129__auto__){
var self__ = this;
var this__17129__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player","player",-97687400),self__.player],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),self__.remote_players],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bullets","bullets",1734809024),self__.bullets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map","map",1371690461),self__.map],null))], null),self__.__extmap));
});

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17116__auto__,G__28014){
var self__ = this;
var this__17116__auto____$1 = this;
return (new shooter.jsclient.gamecomponent.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,G__28014,self__.__extmap,self__.__hash));
});

shooter.jsclient.gamecomponent.GameState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17122__auto__,entry__17123__auto__){
var self__ = this;
var this__17122__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17123__auto__)){
return cljs.core._assoc.call(null,this__17122__auto____$1,cljs.core._nth.call(null,entry__17123__auto__,(0)),cljs.core._nth.call(null,entry__17123__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17122__auto____$1,entry__17123__auto__);
}
});

shooter.jsclient.gamecomponent.GameState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"remote-players","remote-players",-1207501111,null),new cljs.core.Symbol(null,"bullets","bullets",-919626745,null),new cljs.core.Symbol(null,"map","map",-1282745308,null)], null);
});

shooter.jsclient.gamecomponent.GameState.cljs$lang$type = true;

shooter.jsclient.gamecomponent.GameState.cljs$lang$ctorPrSeq = (function (this__17151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"shooter.jsclient.gamecomponent/GameState");
});

shooter.jsclient.gamecomponent.GameState.cljs$lang$ctorPrWriter = (function (this__17151__auto__,writer__17152__auto__){
return cljs.core._write.call(null,writer__17152__auto__,"shooter.jsclient.gamecomponent/GameState");
});

shooter.jsclient.gamecomponent.__GT_GameState = (function shooter$jsclient$gamecomponent$__GT_GameState(player,remote_players,bullets,map){
return (new shooter.jsclient.gamecomponent.GameState(player,remote_players,bullets,map,null,null,null));
});

shooter.jsclient.gamecomponent.map__GT_GameState = (function shooter$jsclient$gamecomponent$map__GT_GameState(G__28016){
return (new shooter.jsclient.gamecomponent.GameState(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(G__28016),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(G__28016),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(G__28016),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(G__28016),null,cljs.core.dissoc.call(null,G__28016,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)),null));
});


/**
* @constructor
* @param {*} name
* @param {*} x
* @param {*} y
* @param {*} size
* @param {*} speed
* @param {*} hp
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
shooter.jsclient.gamecomponent.Player = (function (name,x,y,size,speed,hp,__meta,__extmap,__hash){
this.name = name;
this.x = x;
this.y = y;
this.size = size;
this.speed = speed;
this.hp = hp;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
shooter.jsclient.gamecomponent.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17117__auto__,k__17118__auto__){
var self__ = this;
var this__17117__auto____$1 = this;
return cljs.core._lookup.call(null,this__17117__auto____$1,k__17118__auto__,null);
});

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17119__auto__,k28023,else__17120__auto__){
var self__ = this;
var this__17119__auto____$1 = this;
var G__28025 = (((k28023 instanceof cljs.core.Keyword))?k28023.fqn:null);
switch (G__28025) {
case "name":
return self__.name;

break;
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "size":
return self__.size;

break;
case "speed":
return self__.speed;

break;
case "hp":
return self__.hp;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28023,else__17120__auto__);

}
});

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17131__auto__,writer__17132__auto__,opts__17133__auto__){
var self__ = this;
var this__17131__auto____$1 = this;
var pr_pair__17134__auto__ = ((function (this__17131__auto____$1){
return (function (keyval__17135__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17132__auto__,cljs.core.pr_writer,""," ","",opts__17133__auto__,keyval__17135__auto__);
});})(this__17131__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17132__auto__,pr_pair__17134__auto__,"#shooter.jsclient.gamecomponent.Player{",", ","}",opts__17133__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hp","hp",-1541237831),self__.hp],null))], null),self__.__extmap));
});

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$IIterable$ = true;

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28022){
var self__ = this;
var G__28022__$1 = this;
return (new cljs.core.RecordIter((0),G__28022__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17115__auto__){
var self__ = this;
var this__17115__auto____$1 = this;
return self__.__meta;
});

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17111__auto__){
var self__ = this;
var this__17111__auto____$1 = this;
return (new shooter.jsclient.gamecomponent.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.hp,self__.__meta,self__.__extmap,self__.__hash));
});

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17121__auto__){
var self__ = this;
var this__17121__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17112__auto__){
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

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17113__auto__,other__17114__auto__){
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

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17126__auto__,k__17127__auto__){
var self__ = this;
var this__17126__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"hp","hp",-1541237831),null], null), null),k__17127__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17126__auto____$1),self__.__meta),k__17127__auto__);
} else {
return (new shooter.jsclient.gamecomponent.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.hp,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17127__auto__)),null));
}
});

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17124__auto__,k__17125__auto__,G__28022){
var self__ = this;
var this__17124__auto____$1 = this;
var pred__28026 = cljs.core.keyword_identical_QMARK_;
var expr__28027 = k__17125__auto__;
if(cljs.core.truth_(pred__28026.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__28027))){
return (new shooter.jsclient.gamecomponent.Player(G__28022,self__.x,self__.y,self__.size,self__.speed,self__.hp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28026.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__28027))){
return (new shooter.jsclient.gamecomponent.Player(self__.name,G__28022,self__.y,self__.size,self__.speed,self__.hp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28026.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__28027))){
return (new shooter.jsclient.gamecomponent.Player(self__.name,self__.x,G__28022,self__.size,self__.speed,self__.hp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28026.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__28027))){
return (new shooter.jsclient.gamecomponent.Player(self__.name,self__.x,self__.y,G__28022,self__.speed,self__.hp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28026.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__28027))){
return (new shooter.jsclient.gamecomponent.Player(self__.name,self__.x,self__.y,self__.size,G__28022,self__.hp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28026.call(null,new cljs.core.Keyword(null,"hp","hp",-1541237831),expr__28027))){
return (new shooter.jsclient.gamecomponent.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__28022,self__.__meta,self__.__extmap,null));
} else {
return (new shooter.jsclient.gamecomponent.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.hp,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17125__auto__,G__28022),null));
}
}
}
}
}
}
});

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17129__auto__){
var self__ = this;
var this__17129__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hp","hp",-1541237831),self__.hp],null))], null),self__.__extmap));
});

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17116__auto__,G__28022){
var self__ = this;
var this__17116__auto____$1 = this;
return (new shooter.jsclient.gamecomponent.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.hp,G__28022,self__.__extmap,self__.__hash));
});

shooter.jsclient.gamecomponent.Player.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17122__auto__,entry__17123__auto__){
var self__ = this;
var this__17122__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17123__auto__)){
return cljs.core._assoc.call(null,this__17122__auto____$1,cljs.core._nth.call(null,entry__17123__auto__,(0)),cljs.core._nth.call(null,entry__17123__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17122__auto____$1,entry__17123__auto__);
}
});

shooter.jsclient.gamecomponent.Player.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null),new cljs.core.Symbol(null,"hp","hp",99293696,null)], null);
});

shooter.jsclient.gamecomponent.Player.cljs$lang$type = true;

shooter.jsclient.gamecomponent.Player.cljs$lang$ctorPrSeq = (function (this__17151__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"shooter.jsclient.gamecomponent/Player");
});

shooter.jsclient.gamecomponent.Player.cljs$lang$ctorPrWriter = (function (this__17151__auto__,writer__17152__auto__){
return cljs.core._write.call(null,writer__17152__auto__,"shooter.jsclient.gamecomponent/Player");
});

shooter.jsclient.gamecomponent.__GT_Player = (function shooter$jsclient$gamecomponent$__GT_Player(name,x,y,size,speed,hp){
return (new shooter.jsclient.gamecomponent.Player(name,x,y,size,speed,hp,null,null,null));
});

shooter.jsclient.gamecomponent.map__GT_Player = (function shooter$jsclient$gamecomponent$map__GT_Player(G__28024){
return (new shooter.jsclient.gamecomponent.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__28024),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28024),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28024),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__28024),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__28024),new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(G__28024),null,cljs.core.dissoc.call(null,G__28024,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"hp","hp",-1541237831)),null));
});

shooter.jsclient.gamecomponent.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
shooter.jsclient.gamecomponent.game_simulation = shooter.game.engine.create_simulation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),(new shooter.jsclient.gamecomponent.Player([cljs.core.str("gorilla"),cljs.core.str(cljs.core.rand.call(null,(100)))].join(''),cljs.core.rand.call(null,(100)),cljs.core.rand.call(null,(100)),(10),(1),(150),null,null,null)),new cljs.core.Keyword(null,"map","map",1371690461),shooter.game.levels.level1.level1], null));
shooter.jsclient.gamecomponent.next_frame = new cljs.core.Keyword(null,"next-frame","next-frame",-636070893).cljs$core$IFn$_invoke$arity$1(shooter.jsclient.gamecomponent.game_simulation);
shooter.jsclient.gamecomponent.controller = new cljs.core.Keyword(null,"controller","controller",2013778659).cljs$core$IFn$_invoke$arity$1(shooter.jsclient.gamecomponent.game_simulation);
shooter.jsclient.gamecomponent.add_event = new cljs.core.Keyword(null,"add-event","add-event",938429088).cljs$core$IFn$_invoke$arity$1(shooter.jsclient.gamecomponent.game_simulation);
shooter.jsclient.gamecomponent.update_channel = new cljs.core.Keyword(null,"update-channel","update-channel",579422).cljs$core$IFn$_invoke$arity$1(shooter.jsclient.gamecomponent.game_simulation);
shooter.jsclient.gamecomponent.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
var c__20600__auto___28060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20600__auto___28060){
return (function (){
var f__20601__auto__ = (function (){var switch__20535__auto__ = ((function (c__20600__auto___28060){
return (function (state_28044){
var state_val_28045 = (state_28044[(1)]);
if((state_val_28045 === (1))){
var state_28044__$1 = state_28044;
var statearr_28046_28061 = state_28044__$1;
(statearr_28046_28061[(2)] = null);

(statearr_28046_28061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (2))){
var state_28044__$1 = state_28044;
var statearr_28047_28062 = state_28044__$1;
(statearr_28047_28062[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (3))){
var inst_28042 = (state_28044[(2)]);
var state_28044__$1 = state_28044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28044__$1,inst_28042);
} else {
if((state_val_28045 === (4))){
var state_28044__$1 = state_28044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28044__$1,(7),shooter.jsclient.gamecomponent.update_channel);
} else {
if((state_val_28045 === (5))){
var state_28044__$1 = state_28044;
var statearr_28049_28063 = state_28044__$1;
(statearr_28049_28063[(2)] = null);

(statearr_28049_28063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (6))){
var inst_28040 = (state_28044[(2)]);
var state_28044__$1 = state_28044;
var statearr_28050_28064 = state_28044__$1;
(statearr_28050_28064[(2)] = inst_28040);

(statearr_28050_28064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (7))){
var inst_28033 = (state_28044[(2)]);
var inst_28034 = cljs.core.clj__GT_js.call(null,inst_28033);
var inst_28035 = JSON.stringify(inst_28034);
var inst_28036 = shooter.jsclient.gamecomponent.socket.send(inst_28035);
var state_28044__$1 = (function (){var statearr_28051 = state_28044;
(statearr_28051[(7)] = inst_28036);

return statearr_28051;
})();
var statearr_28052_28065 = state_28044__$1;
(statearr_28052_28065[(2)] = null);

(statearr_28052_28065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20600__auto___28060))
;
return ((function (switch__20535__auto__,c__20600__auto___28060){
return (function() {
var shooter$jsclient$gamecomponent$state_machine__20536__auto__ = null;
var shooter$jsclient$gamecomponent$state_machine__20536__auto____0 = (function (){
var statearr_28056 = [null,null,null,null,null,null,null,null];
(statearr_28056[(0)] = shooter$jsclient$gamecomponent$state_machine__20536__auto__);

(statearr_28056[(1)] = (1));

return statearr_28056;
});
var shooter$jsclient$gamecomponent$state_machine__20536__auto____1 = (function (state_28044){
while(true){
var ret_value__20537__auto__ = (function (){try{while(true){
var result__20538__auto__ = switch__20535__auto__.call(null,state_28044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20538__auto__;
}
break;
}
}catch (e28057){if((e28057 instanceof Object)){
var ex__20539__auto__ = e28057;
var statearr_28058_28066 = state_28044;
(statearr_28058_28066[(5)] = ex__20539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28067 = state_28044;
state_28044 = G__28067;
continue;
} else {
return ret_value__20537__auto__;
}
break;
}
});
shooter$jsclient$gamecomponent$state_machine__20536__auto__ = function(state_28044){
switch(arguments.length){
case 0:
return shooter$jsclient$gamecomponent$state_machine__20536__auto____0.call(this);
case 1:
return shooter$jsclient$gamecomponent$state_machine__20536__auto____1.call(this,state_28044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shooter$jsclient$gamecomponent$state_machine__20536__auto__.cljs$core$IFn$_invoke$arity$0 = shooter$jsclient$gamecomponent$state_machine__20536__auto____0;
shooter$jsclient$gamecomponent$state_machine__20536__auto__.cljs$core$IFn$_invoke$arity$1 = shooter$jsclient$gamecomponent$state_machine__20536__auto____1;
return shooter$jsclient$gamecomponent$state_machine__20536__auto__;
})()
;})(switch__20535__auto__,c__20600__auto___28060))
})();
var state__20602__auto__ = (function (){var statearr_28059 = f__20601__auto__.call(null);
(statearr_28059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20600__auto___28060);

return statearr_28059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20602__auto__);
});})(c__20600__auto___28060))
);

(shooter.jsclient.gamecomponent.socket["onmessage"] = (function (message){
var event = cljs.core.js__GT_clj.call(null,JSON.parse(message.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return shooter.jsclient.gamecomponent.add_event.call(null,event);
}));
shooter.jsclient.gamecomponent.setup = (function shooter$jsclient$gamecomponent$setup(){
quil.core.smooth.call(null);

return quil.core.frame_rate.call(null,(60));
});
shooter.jsclient.gamecomponent.draw = (function shooter$jsclient$gamecomponent$draw(){
var state = shooter.jsclient.gamecomponent.next_frame.call(null);
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var bullets = new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state);
var remote_players = cljs.core.vals.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var remote_bullets = new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516).cljs$core$IFn$_invoke$arity$1(state);
var hp = new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(player);
var walls = shooter.game.level.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
if((hp < (0))){
quil.core.background.call(null,(230),(40),(40));

quil.core.text_size.call(null,(40));

return quil.core.text.call(null,"GAME OVER",(100),(100));
} else {
quil.core.background.call(null,(255));

quil.core.stroke.call(null,(50),(200),(50));

quil.core.fill.call(null,(80),(250),(80));

quil.core.rect.call(null,(5),(350),hp,(5));

quil.core.stroke.call(null,(0),(0),(0));

quil.core.fill.call(null,(200),(200),(200));

var seq__28098_28128 = cljs.core.seq.call(null,walls);
var chunk__28099_28129 = null;
var count__28100_28130 = (0);
var i__28101_28131 = (0);
while(true){
if((i__28101_28131 < count__28100_28130)){
var wall_28132 = cljs.core._nth.call(null,chunk__28099_28129,i__28101_28131);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_28132),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_28132),(20),(20));

var G__28133 = seq__28098_28128;
var G__28134 = chunk__28099_28129;
var G__28135 = count__28100_28130;
var G__28136 = (i__28101_28131 + (1));
seq__28098_28128 = G__28133;
chunk__28099_28129 = G__28134;
count__28100_28130 = G__28135;
i__28101_28131 = G__28136;
continue;
} else {
var temp__4425__auto___28137 = cljs.core.seq.call(null,seq__28098_28128);
if(temp__4425__auto___28137){
var seq__28098_28138__$1 = temp__4425__auto___28137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28098_28138__$1)){
var c__17306__auto___28139 = cljs.core.chunk_first.call(null,seq__28098_28138__$1);
var G__28140 = cljs.core.chunk_rest.call(null,seq__28098_28138__$1);
var G__28141 = c__17306__auto___28139;
var G__28142 = cljs.core.count.call(null,c__17306__auto___28139);
var G__28143 = (0);
seq__28098_28128 = G__28140;
chunk__28099_28129 = G__28141;
count__28100_28130 = G__28142;
i__28101_28131 = G__28143;
continue;
} else {
var wall_28144 = cljs.core.first.call(null,seq__28098_28138__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_28144),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_28144),(20),(20));

var G__28145 = cljs.core.next.call(null,seq__28098_28138__$1);
var G__28146 = null;
var G__28147 = (0);
var G__28148 = (0);
seq__28098_28128 = G__28145;
chunk__28099_28129 = G__28146;
count__28100_28130 = G__28147;
i__28101_28131 = G__28148;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__28102_28149 = player;
var map__28102_28150__$1 = ((((!((map__28102_28149 == null)))?((((map__28102_28149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28102_28149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28102_28149):map__28102_28149);
var x_28151 = cljs.core.get.call(null,map__28102_28150__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_28152 = cljs.core.get.call(null,map__28102_28150__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_28153 = cljs.core.get.call(null,map__28102_28150__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_28151,y_28152,size_28153,size_28153);

var seq__28104_28154 = cljs.core.seq.call(null,bullets);
var chunk__28105_28155 = null;
var count__28106_28156 = (0);
var i__28107_28157 = (0);
while(true){
if((i__28107_28157 < count__28106_28156)){
var bullet_28158 = cljs.core._nth.call(null,chunk__28105_28155,i__28107_28157);
var map__28108_28159 = bullet_28158;
var map__28108_28160__$1 = ((((!((map__28108_28159 == null)))?((((map__28108_28159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28108_28159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28108_28159):map__28108_28159);
var bx_28161 = cljs.core.get.call(null,map__28108_28160__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_28162 = cljs.core.get.call(null,map__28108_28160__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_28163 = cljs.core.get.call(null,map__28108_28160__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_28161,by_28162,size_28163,size_28163);

var G__28164 = seq__28104_28154;
var G__28165 = chunk__28105_28155;
var G__28166 = count__28106_28156;
var G__28167 = (i__28107_28157 + (1));
seq__28104_28154 = G__28164;
chunk__28105_28155 = G__28165;
count__28106_28156 = G__28166;
i__28107_28157 = G__28167;
continue;
} else {
var temp__4425__auto___28168 = cljs.core.seq.call(null,seq__28104_28154);
if(temp__4425__auto___28168){
var seq__28104_28169__$1 = temp__4425__auto___28168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28104_28169__$1)){
var c__17306__auto___28170 = cljs.core.chunk_first.call(null,seq__28104_28169__$1);
var G__28171 = cljs.core.chunk_rest.call(null,seq__28104_28169__$1);
var G__28172 = c__17306__auto___28170;
var G__28173 = cljs.core.count.call(null,c__17306__auto___28170);
var G__28174 = (0);
seq__28104_28154 = G__28171;
chunk__28105_28155 = G__28172;
count__28106_28156 = G__28173;
i__28107_28157 = G__28174;
continue;
} else {
var bullet_28175 = cljs.core.first.call(null,seq__28104_28169__$1);
var map__28110_28176 = bullet_28175;
var map__28110_28177__$1 = ((((!((map__28110_28176 == null)))?((((map__28110_28176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28110_28176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28110_28176):map__28110_28176);
var bx_28178 = cljs.core.get.call(null,map__28110_28177__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_28179 = cljs.core.get.call(null,map__28110_28177__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_28180 = cljs.core.get.call(null,map__28110_28177__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_28178,by_28179,size_28180,size_28180);

var G__28181 = cljs.core.next.call(null,seq__28104_28169__$1);
var G__28182 = null;
var G__28183 = (0);
var G__28184 = (0);
seq__28104_28154 = G__28181;
chunk__28105_28155 = G__28182;
count__28106_28156 = G__28183;
i__28107_28157 = G__28184;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(200),(30),(30));

quil.core.stroke.call(null,(200),(30),(30));

var seq__28112_28185 = cljs.core.seq.call(null,remote_players);
var chunk__28113_28186 = null;
var count__28114_28187 = (0);
var i__28115_28188 = (0);
while(true){
if((i__28115_28188 < count__28114_28187)){
var remote_player_28189 = cljs.core._nth.call(null,chunk__28113_28186,i__28115_28188);
var map__28116_28190 = remote_player_28189;
var map__28116_28191__$1 = ((((!((map__28116_28190 == null)))?((((map__28116_28190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28116_28190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28116_28190):map__28116_28190);
var x_28192 = cljs.core.get.call(null,map__28116_28191__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_28193 = cljs.core.get.call(null,map__28116_28191__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_28194 = cljs.core.get.call(null,map__28116_28191__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var hp_28195__$1 = cljs.core.get.call(null,map__28116_28191__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
if((hp_28195__$1 > (0))){
quil.core.rect.call(null,x_28192,y_28193,size_28194,size_28194);
} else {
}

var G__28196 = seq__28112_28185;
var G__28197 = chunk__28113_28186;
var G__28198 = count__28114_28187;
var G__28199 = (i__28115_28188 + (1));
seq__28112_28185 = G__28196;
chunk__28113_28186 = G__28197;
count__28114_28187 = G__28198;
i__28115_28188 = G__28199;
continue;
} else {
var temp__4425__auto___28200 = cljs.core.seq.call(null,seq__28112_28185);
if(temp__4425__auto___28200){
var seq__28112_28201__$1 = temp__4425__auto___28200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28112_28201__$1)){
var c__17306__auto___28202 = cljs.core.chunk_first.call(null,seq__28112_28201__$1);
var G__28203 = cljs.core.chunk_rest.call(null,seq__28112_28201__$1);
var G__28204 = c__17306__auto___28202;
var G__28205 = cljs.core.count.call(null,c__17306__auto___28202);
var G__28206 = (0);
seq__28112_28185 = G__28203;
chunk__28113_28186 = G__28204;
count__28114_28187 = G__28205;
i__28115_28188 = G__28206;
continue;
} else {
var remote_player_28207 = cljs.core.first.call(null,seq__28112_28201__$1);
var map__28118_28208 = remote_player_28207;
var map__28118_28209__$1 = ((((!((map__28118_28208 == null)))?((((map__28118_28208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28118_28208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28118_28208):map__28118_28208);
var x_28210 = cljs.core.get.call(null,map__28118_28209__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_28211 = cljs.core.get.call(null,map__28118_28209__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_28212 = cljs.core.get.call(null,map__28118_28209__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var hp_28213__$1 = cljs.core.get.call(null,map__28118_28209__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
if((hp_28213__$1 > (0))){
quil.core.rect.call(null,x_28210,y_28211,size_28212,size_28212);
} else {
}

var G__28214 = cljs.core.next.call(null,seq__28112_28201__$1);
var G__28215 = null;
var G__28216 = (0);
var G__28217 = (0);
seq__28112_28185 = G__28214;
chunk__28113_28186 = G__28215;
count__28114_28187 = G__28216;
i__28115_28188 = G__28217;
continue;
}
} else {
}
}
break;
}

var seq__28120 = cljs.core.seq.call(null,remote_bullets);
var chunk__28121 = null;
var count__28122 = (0);
var i__28123 = (0);
while(true){
if((i__28123 < count__28122)){
var bullet = cljs.core._nth.call(null,chunk__28121,i__28123);
var map__28124_28218 = bullet;
var map__28124_28219__$1 = ((((!((map__28124_28218 == null)))?((((map__28124_28218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28124_28218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28124_28218):map__28124_28218);
var bx_28220 = cljs.core.get.call(null,map__28124_28219__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_28221 = cljs.core.get.call(null,map__28124_28219__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_28222 = cljs.core.get.call(null,map__28124_28219__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_28220,by_28221,size_28222,size_28222);

var G__28223 = seq__28120;
var G__28224 = chunk__28121;
var G__28225 = count__28122;
var G__28226 = (i__28123 + (1));
seq__28120 = G__28223;
chunk__28121 = G__28224;
count__28122 = G__28225;
i__28123 = G__28226;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28120);
if(temp__4425__auto__){
var seq__28120__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28120__$1)){
var c__17306__auto__ = cljs.core.chunk_first.call(null,seq__28120__$1);
var G__28227 = cljs.core.chunk_rest.call(null,seq__28120__$1);
var G__28228 = c__17306__auto__;
var G__28229 = cljs.core.count.call(null,c__17306__auto__);
var G__28230 = (0);
seq__28120 = G__28227;
chunk__28121 = G__28228;
count__28122 = G__28229;
i__28123 = G__28230;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__28120__$1);
var map__28126_28231 = bullet;
var map__28126_28232__$1 = ((((!((map__28126_28231 == null)))?((((map__28126_28231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28126_28231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28126_28231):map__28126_28231);
var bx_28233 = cljs.core.get.call(null,map__28126_28232__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_28234 = cljs.core.get.call(null,map__28126_28232__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_28235 = cljs.core.get.call(null,map__28126_28232__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_28233,by_28234,size_28235,size_28235);

var G__28236 = cljs.core.next.call(null,seq__28120__$1);
var G__28237 = null;
var G__28238 = (0);
var G__28239 = (0);
seq__28120 = G__28236;
chunk__28121 = G__28237;
count__28122 = G__28238;
i__28123 = G__28239;
continue;
}
} else {
return null;
}
}
break;
}
}
});
shooter.jsclient.gamecomponent.on_key_down = (function shooter$jsclient$gamecomponent$on_key_down(){
return shooter.jsclient.gamecomponent.controller.call(null,(function (p1__28240_SHARP_){
return cljs.core.conj.call(null,p1__28240_SHARP_,quil.core.key_as_keyword.call(null).call(null,shooter.jsclient.gamecomponent.controll_mapping));
}));
});
shooter.jsclient.gamecomponent.on_key_up = (function shooter$jsclient$gamecomponent$on_key_up(){
return shooter.jsclient.gamecomponent.controller.call(null,(function (p1__28241_SHARP_){
return cljs.core.disj.call(null,p1__28241_SHARP_,quil.core.key_as_keyword.call(null).call(null,shooter.jsclient.gamecomponent.controll_mapping));
}));
});
shooter.jsclient.gamecomponent.on_mouse_clicked = (function shooter$jsclient$gamecomponent$on_mouse_clicked(){
var mx = quil.core.mouse_x.call(null);
var my = quil.core.mouse_y.call(null);
var event = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"player-fired-bullet",new cljs.core.Keyword(null,"mx","mx",-199887020),mx,new cljs.core.Keyword(null,"my","my",-1055703269),my], null);
return shooter.jsclient.gamecomponent.add_event.call(null,event);
});
shooter.jsclient.gamecomponent.game_renderer = (function shooter$jsclient$gamecomponent$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,shooter.jsclient.gamecomponent.on_mouse_clicked))?(function() { 
var G__28242__delegate = function (args){
return cljs.core.apply.call(null,shooter.jsclient.gamecomponent.on_mouse_clicked,args);
};
var G__28242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28243__i = 0, G__28243__a = new Array(arguments.length -  0);
while (G__28243__i < G__28243__a.length) {G__28243__a[G__28243__i] = arguments[G__28243__i + 0]; ++G__28243__i;}
  args = new cljs.core.IndexedSeq(G__28243__a,0);
} 
return G__28242__delegate.call(this,args);};
G__28242.cljs$lang$maxFixedArity = 0;
G__28242.cljs$lang$applyTo = (function (arglist__28244){
var args = cljs.core.seq(arglist__28244);
return G__28242__delegate(args);
});
G__28242.cljs$core$IFn$_invoke$arity$variadic = G__28242__delegate;
return G__28242;
})()
:shooter.jsclient.gamecomponent.on_mouse_clicked),new cljs.core.Keyword(null,"size","size",1098693007),shooter.game.level.map_size.call(null,shooter.game.levels.level1.level1),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,shooter.jsclient.gamecomponent.setup))?(function() { 
var G__28245__delegate = function (args){
return cljs.core.apply.call(null,shooter.jsclient.gamecomponent.setup,args);
};
var G__28245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28246__i = 0, G__28246__a = new Array(arguments.length -  0);
while (G__28246__i < G__28246__a.length) {G__28246__a[G__28246__i] = arguments[G__28246__i + 0]; ++G__28246__i;}
  args = new cljs.core.IndexedSeq(G__28246__a,0);
} 
return G__28245__delegate.call(this,args);};
G__28245.cljs$lang$maxFixedArity = 0;
G__28245.cljs$lang$applyTo = (function (arglist__28247){
var args = cljs.core.seq(arglist__28247);
return G__28245__delegate(args);
});
G__28245.cljs$core$IFn$_invoke$arity$variadic = G__28245__delegate;
return G__28245;
})()
:shooter.jsclient.gamecomponent.setup),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,shooter.jsclient.gamecomponent.on_key_down))?(function() { 
var G__28248__delegate = function (args){
return cljs.core.apply.call(null,shooter.jsclient.gamecomponent.on_key_down,args);
};
var G__28248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28249__i = 0, G__28249__a = new Array(arguments.length -  0);
while (G__28249__i < G__28249__a.length) {G__28249__a[G__28249__i] = arguments[G__28249__i + 0]; ++G__28249__i;}
  args = new cljs.core.IndexedSeq(G__28249__a,0);
} 
return G__28248__delegate.call(this,args);};
G__28248.cljs$lang$maxFixedArity = 0;
G__28248.cljs$lang$applyTo = (function (arglist__28250){
var args = cljs.core.seq(arglist__28250);
return G__28248__delegate(args);
});
G__28248.cljs$core$IFn$_invoke$arity$variadic = G__28248__delegate;
return G__28248;
})()
:shooter.jsclient.gamecomponent.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,shooter.jsclient.gamecomponent.on_key_up))?(function() { 
var G__28251__delegate = function (args){
return cljs.core.apply.call(null,shooter.jsclient.gamecomponent.on_key_up,args);
};
var G__28251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28252__i = 0, G__28252__a = new Array(arguments.length -  0);
while (G__28252__i < G__28252__a.length) {G__28252__a[G__28252__i] = arguments[G__28252__i + 0]; ++G__28252__i;}
  args = new cljs.core.IndexedSeq(G__28252__a,0);
} 
return G__28251__delegate.call(this,args);};
G__28251.cljs$lang$maxFixedArity = 0;
G__28251.cljs$lang$applyTo = (function (arglist__28253){
var args = cljs.core.seq(arglist__28253);
return G__28251__delegate(args);
});
G__28251.cljs$core$IFn$_invoke$arity$variadic = G__28251__delegate;
return G__28251;
})()
:shooter.jsclient.gamecomponent.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,shooter.jsclient.gamecomponent.draw))?(function() { 
var G__28254__delegate = function (args){
return cljs.core.apply.call(null,shooter.jsclient.gamecomponent.draw,args);
};
var G__28254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28255__i = 0, G__28255__a = new Array(arguments.length -  0);
while (G__28255__i < G__28255__a.length) {G__28255__a[G__28255__i] = arguments[G__28255__i + 0]; ++G__28255__i;}
  args = new cljs.core.IndexedSeq(G__28255__a,0);
} 
return G__28254__delegate.call(this,args);};
G__28254.cljs$lang$maxFixedArity = 0;
G__28254.cljs$lang$applyTo = (function (arglist__28256){
var args = cljs.core.seq(arglist__28256);
return G__28254__delegate(args);
});
G__28254.cljs$core$IFn$_invoke$arity$variadic = G__28254__delegate;
return G__28254;
})()
:shooter.jsclient.gamecomponent.draw));
});
goog.exportSymbol('shooter.jsclient.gamecomponent.game_renderer', shooter.jsclient.gamecomponent.game_renderer);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22928__22929__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__22928__22929__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),shooter.jsclient.gamecomponent.game_renderer,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
shooter.jsclient.gamecomponent.game_component = (function shooter$jsclient$gamecomponent$game_component(){
if(typeof shooter.jsclient.gamecomponent.t28260 !== 'undefined'){
} else {

/**
* @constructor
*/
shooter.jsclient.gamecomponent.t28260 = (function (game_component,meta28261){
this.game_component = game_component;
this.meta28261 = meta28261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shooter.jsclient.gamecomponent.t28260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28262,meta28261__$1){
var self__ = this;
var _28262__$1 = this;
return (new shooter.jsclient.gamecomponent.t28260(self__.game_component,meta28261__$1));
});

shooter.jsclient.gamecomponent.t28260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28262){
var self__ = this;
var _28262__$1 = this;
return self__.meta28261;
});

shooter.jsclient.gamecomponent.t28260.prototype.om$core$IDidMount$ = true;

shooter.jsclient.gamecomponent.t28260.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shooter.jsclient.gamecomponent.game_renderer.call(null);
});

shooter.jsclient.gamecomponent.t28260.prototype.om$core$IRender$ = true;

shooter.jsclient.gamecomponent.t28260.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

shooter.jsclient.gamecomponent.t28260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta28261","meta28261",1157764972,null)], null);
});

shooter.jsclient.gamecomponent.t28260.cljs$lang$type = true;

shooter.jsclient.gamecomponent.t28260.cljs$lang$ctorStr = "shooter.jsclient.gamecomponent/t28260";

shooter.jsclient.gamecomponent.t28260.cljs$lang$ctorPrWriter = (function (this__17101__auto__,writer__17102__auto__,opt__17103__auto__){
return cljs.core._write.call(null,writer__17102__auto__,"shooter.jsclient.gamecomponent/t28260");
});

shooter.jsclient.gamecomponent.__GT_t28260 = (function shooter$jsclient$gamecomponent$game_component_$___GT_t28260(game_component__$1,meta28261){
return (new shooter.jsclient.gamecomponent.t28260(game_component__$1,meta28261));
});

}

return (new shooter.jsclient.gamecomponent.t28260(shooter$jsclient$gamecomponent$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=gamecomponent.js.map