// Compiled by ClojureScript 1.7.48 {}
goog.provide('shooter.game.engine');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('shooter.game.collision');
goog.require('shooter.game.level');
shooter.game.engine.wallsm = cljs.core.memoize.call(null,shooter.game.level.walls);
shooter.game.engine.apply_controlls = (function shooter$game$engine$apply_controlls(state,controlls){

if(cljs.core.empty_QMARK_.call(null,controlls)){
return state;
} else {
var map__27965 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__27965__$1 = ((((!((map__27965 == null)))?((((map__27965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27965):map__27965);
var x = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__27965__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__27965,map__27965__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__27967 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__27967) {
case "up":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._,speed);

break;
case "down":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,speed);

break;
case "left":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._,speed);

break;
case "right":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,speed);

break;
default:
return state__$1;

}
})();
if(cljs.core.truth_((function (){var or__16522__auto__ = shooter.game.collision.rect_intersects_blocks_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),shooter.game.level.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1)),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1)));
if(cljs.core.truth_(or__16522__auto__)){
return or__16522__auto__;
} else {
return shooter.game.collision.rect_intersects_boundary_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1));
}
})())){
return state__$1;
} else {
return newstate;
}
});})(map__27965,map__27965__$1,x,y,speed))
,state,controlls);
return newstate;
}
});
shooter.game.engine.update_bullet_location = (function shooter$game$engine$update_bullet_location(bullet){
var map__27973 = bullet;
var map__27973__$1 = ((((!((map__27973 == null)))?((((map__27973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27973):map__27973);
var speed = cljs.core.get.call(null,map__27973__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__27974 = cljs.core.get.call(null,map__27973__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__27974,(0),null);
var by = cljs.core.nth.call(null,vec__27974,(1),null);
var lx = cljs.core.get.call(null,map__27973__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__27973__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__27975 = cljs.core.get.call(null,map__27973__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__27975,(0),null);
var gy = cljs.core.nth.call(null,vec__27975,(1),null);
var dx = (gx - bx);
var dy = (gy - by);
var goal_dist = Math.sqrt(((dx * dx) + (dy * dy)));
var ratio = (speed / goal_dist);
var xm = (ratio * dx);
var ym = (ratio * dy);
var nx = (xm + lx);
var ny = (ym + ly);
return cljs.core.assoc.call(null,bullet,new cljs.core.Keyword(null,"x","x",2099068185),nx,new cljs.core.Keyword(null,"y","y",-1757859776),ny);
});
shooter.game.engine.bullet_intersects_QMARK_ = (function shooter$game$engine$bullet_intersects_QMARK_(state,bullet){
return cljs.core.not.call(null,(function (){var or__16522__auto__ = shooter.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,shooter.game.engine.wallsm.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(or__16522__auto__)){
return or__16522__auto__;
} else {
return shooter.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
}
})());
});
shooter.game.engine.update_bullets = (function shooter$game$engine$update_bullets(state,path){
return cljs.core.filterv.call(null,cljs.core.partial.call(null,shooter.game.engine.bullet_intersects_QMARK_,state),cljs.core.mapv.call(null,shooter.game.engine.update_bullet_location,state.call(null,path)));
});
shooter.game.engine.update_bullet_locations = (function shooter$game$engine$update_bullet_locations(state,path){
return cljs.core.assoc.call(null,state,path,shooter.game.engine.update_bullets.call(null,state,path));
});
shooter.game.engine.update_objects = (function shooter$game$engine$update_objects(state){
var oldstate = state;
var new_state = shooter.game.engine.update_bullet_locations.call(null,shooter.game.engine.update_bullet_locations.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024)),new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516));
return new_state;
});
shooter.game.engine.player_event__GT_bullet = (function shooter$game$engine$player_event__GT_bullet(player,event){
var map__27981 = event;
var map__27981__$1 = ((((!((map__27981 == null)))?((((map__27981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27981):map__27981);
var mx = cljs.core.get.call(null,map__27981__$1,new cljs.core.Keyword(null,"mx","mx",-199887020));
var my = cljs.core.get.call(null,map__27981__$1,new cljs.core.Keyword(null,"my","my",-1055703269));
var map__27982 = player;
var map__27982__$1 = ((((!((map__27982 == null)))?((((map__27982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27982):map__27982);
var px = cljs.core.get.call(null,map__27982__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__27982__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__27982__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"fired-by","fired-by",988297261),player,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),1.3,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null);
});
shooter.game.engine.player_fired_bullet = (function shooter$game$engine$player_fired_bullet(state,event){
var bullet = shooter.game.engine.player_event__GT_bullet.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state),event);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullets","bullets",1734809024)], null),cljs.core.conj,bullet);
});
shooter.game.engine.remote_player_change = (function shooter$game$engine$remote_player_change(state,event){
var remote_player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(event));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(remote_player)], null),remote_player);
});
shooter.game.engine.remote_bullet_fired = (function shooter$game$engine$remote_bullet_fired(state,event){
var bullet = new cljs.core.Keyword(null,"bullet","bullet",726988937).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(event));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516)], null),cljs.core.conj,bullet);
});
shooter.game.engine.apply_events = (function shooter$game$engine$apply_events(state,events){
return cljs.core.reduce.call(null,(function (state__$1,event){
var G__27986 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event);
switch (G__27986) {
case "remote-bullet-fired":
return shooter.game.engine.remote_bullet_fired.call(null,state__$1,event);

break;
case "remote-player-change":
return shooter.game.engine.remote_player_change.call(null,state__$1,event);

break;
case "player-fired-bullet":
return shooter.game.engine.player_fired_bullet.call(null,state__$1,event);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event))].join('')));

}
}),state,events);
});
shooter.game.engine.create_initial_state = (function shooter$game$engine$create_initial_state(state){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null),state);
});
shooter.game.engine.send_updates_BANG_ = (function shooter$game$engine$send_updates_BANG_(channel,old_state,new_state,events){
var oplayer = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(old_state);
var nplayer = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(new_state);
return shooter.game.engine.go.call(null,(function (){
if(cljs.core.not_EQ_.call(null,oplayer,nplayer)){
cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"update","update",1045576396),"player-change",new cljs.core.Keyword(null,"player","player",-97687400),nplayer], null));
} else {
}

var seq__27992 = cljs.core.seq.call(null,events);
var chunk__27993 = null;
var count__27994 = (0);
var i__27995 = (0);
while(true){
if((i__27995 < count__27994)){
var event = cljs.core._nth.call(null,chunk__27993,i__27995);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event),"player-fired-bullet")){
cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"update","update",1045576396),"bullet-fired",new cljs.core.Keyword(null,"bullet","bullet",726988937),shooter.game.engine.player_event__GT_bullet.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(old_state),event)], null));
} else {
}

var G__27996 = seq__27992;
var G__27997 = chunk__27993;
var G__27998 = count__27994;
var G__27999 = (i__27995 + (1));
seq__27992 = G__27996;
chunk__27993 = G__27997;
count__27994 = G__27998;
i__27995 = G__27999;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27992);
if(temp__4425__auto__){
var seq__27992__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27992__$1)){
var c__17306__auto__ = cljs.core.chunk_first.call(null,seq__27992__$1);
var G__28000 = cljs.core.chunk_rest.call(null,seq__27992__$1);
var G__28001 = c__17306__auto__;
var G__28002 = cljs.core.count.call(null,c__17306__auto__);
var G__28003 = (0);
seq__27992 = G__28000;
chunk__27993 = G__28001;
count__27994 = G__28002;
i__27995 = G__28003;
continue;
} else {
var event = cljs.core.first.call(null,seq__27992__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event),"player-fired-bullet")){
cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"update","update",1045576396),"bullet-fired",new cljs.core.Keyword(null,"bullet","bullet",726988937),shooter.game.engine.player_event__GT_bullet.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(old_state),event)], null));
} else {
}

var G__28004 = cljs.core.next.call(null,seq__27992__$1);
var G__28005 = null;
var G__28006 = (0);
var G__28007 = (0);
seq__27992 = G__28004;
chunk__27993 = G__28005;
count__27994 = G__28006;
i__27995 = G__28007;
continue;
}
} else {
return null;
}
}
break;
}
})()
);
});
shooter.game.engine.take_hits = (function shooter$game$engine$take_hits(state){
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var remote_bullets = new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516).cljs$core$IFn$_invoke$arity$1(state);
var map__28010 = cljs.core.group_by.call(null,cljs.core.partial.call(null,shooter.game.collision.intersects_QMARK_,player),remote_bullets);
var map__28010__$1 = ((((!((map__28010 == null)))?((((map__28010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28010):map__28010);
var hits = cljs.core.get.call(null,map__28010__$1,false);
var misses = cljs.core.get.call(null,map__28010__$1,true);
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516),misses),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core._,((4) * cljs.core.count.call(null,hits)));
});
shooter.game.engine.create_simulation = (function shooter$game$engine$create_simulation(state){
var initial_state = shooter.game.engine.create_initial_state.call(null,state);
var old_state = cljs.core.atom.call(null,initial_state);
var controlls = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var events = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var update_channel = cljs.core.async.chan.call(null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"next-frame","next-frame",-636070893),((function (initial_state,old_state,controlls,events,update_channel){
return (function (){
var new_state = shooter.game.engine.apply_events.call(null,cljs.core.deref.call(null,old_state),cljs.core.deref.call(null,events));
var new_state__$1 = shooter.game.engine.apply_controlls.call(null,new_state,cljs.core.deref.call(null,controlls));
var new_state__$2 = shooter.game.engine.take_hits.call(null,new_state__$1);
var new_state__$3 = shooter.game.engine.update_objects.call(null,new_state__$2);
shooter.game.engine.send_updates_BANG_.call(null,update_channel,cljs.core.deref.call(null,old_state),new_state__$3,cljs.core.deref.call(null,events));

cljs.core.reset_BANG_.call(null,events,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,old_state,new_state__$3);

return new_state__$3;
});})(initial_state,old_state,controlls,events,update_channel))
,new cljs.core.Keyword(null,"update-channel","update-channel",579422),update_channel,new cljs.core.Keyword(null,"add-event","add-event",938429088),((function (initial_state,old_state,controlls,events,update_channel){
return (function (event){
return cljs.core.swap_BANG_.call(null,events,cljs.core.conj,event);
});})(initial_state,old_state,controlls,events,update_channel))
,new cljs.core.Keyword(null,"controller","controller",2013778659),((function (initial_state,old_state,controlls,events,update_channel){
return (function (mutator){
return cljs.core.reset_BANG_.call(null,controlls,mutator.call(null,cljs.core.deref.call(null,controlls)));
});})(initial_state,old_state,controlls,events,update_channel))
], null);
});

//# sourceMappingURL=engine.js.map