// Compiled by ClojureScript 1.7.48 {}
goog.provide('shooter.jsclient.client');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('shooter.jsclient.gamecomponent');
cljs.core.enable_console_print_BANG_.call(null);
shooter.jsclient.client.comm = cljs.core.async.chan.call(null);
shooter.jsclient.client.app = (function shooter$jsclient$client$app(state,owner){
if(typeof shooter.jsclient.client.t28298 !== 'undefined'){
} else {

/**
* @constructor
*/
shooter.jsclient.client.t28298 = (function (app,state,owner,meta28299){
this.app = app;
this.state = state;
this.owner = owner;
this.meta28299 = meta28299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shooter.jsclient.client.t28298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28300,meta28299__$1){
var self__ = this;
var _28300__$1 = this;
return (new shooter.jsclient.client.t28298(self__.app,self__.state,self__.owner,meta28299__$1));
});

shooter.jsclient.client.t28298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28300){
var self__ = this;
var _28300__$1 = this;
return self__.meta28299;
});

shooter.jsclient.client.t28298.prototype.om$core$IWillMount$ = true;

shooter.jsclient.client.t28298.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__20600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20600__auto__,___$1){
return (function (){
var f__20601__auto__ = (function (){var switch__20535__auto__ = ((function (c__20600__auto__,___$1){
return (function (state_28315){
var state_val_28316 = (state_28315[(1)]);
if((state_val_28316 === (1))){
var state_28315__$1 = state_28315;
var statearr_28317_28331 = state_28315__$1;
(statearr_28317_28331[(2)] = null);

(statearr_28317_28331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (2))){
var state_28315__$1 = state_28315;
var statearr_28318_28332 = state_28315__$1;
(statearr_28318_28332[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (3))){
var inst_28313 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28315__$1,inst_28313);
} else {
if((state_val_28316 === (4))){
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28315__$1,(7),shooter.jsclient.client.comm);
} else {
if((state_val_28316 === (5))){
var state_28315__$1 = state_28315;
var statearr_28320_28333 = state_28315__$1;
(statearr_28320_28333[(2)] = null);

(statearr_28320_28333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (6))){
var inst_28311 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
var statearr_28321_28334 = state_28315__$1;
(statearr_28321_28334[(2)] = inst_28311);

(statearr_28321_28334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (7))){
var inst_28304 = (state_28315[(2)]);
var inst_28305 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_28304);
var inst_28306 = (function (){var event = inst_28304;
var newstate = inst_28305;
return ((function (event,newstate,inst_28304,inst_28305,state_val_28316,c__20600__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_28304,inst_28305,state_val_28316,c__20600__auto__,___$1))
})();
var inst_28307 = om.core.update_state_BANG_.call(null,self__.owner,inst_28306);
var state_28315__$1 = (function (){var statearr_28322 = state_28315;
(statearr_28322[(7)] = inst_28307);

return statearr_28322;
})();
var statearr_28323_28335 = state_28315__$1;
(statearr_28323_28335[(2)] = null);

(statearr_28323_28335[(1)] = (2));


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
});})(c__20600__auto__,___$1))
;
return ((function (switch__20535__auto__,c__20600__auto__,___$1){
return (function() {
var shooter$jsclient$client$app_$_state_machine__20536__auto__ = null;
var shooter$jsclient$client$app_$_state_machine__20536__auto____0 = (function (){
var statearr_28327 = [null,null,null,null,null,null,null,null];
(statearr_28327[(0)] = shooter$jsclient$client$app_$_state_machine__20536__auto__);

(statearr_28327[(1)] = (1));

return statearr_28327;
});
var shooter$jsclient$client$app_$_state_machine__20536__auto____1 = (function (state_28315){
while(true){
var ret_value__20537__auto__ = (function (){try{while(true){
var result__20538__auto__ = switch__20535__auto__.call(null,state_28315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20538__auto__;
}
break;
}
}catch (e28328){if((e28328 instanceof Object)){
var ex__20539__auto__ = e28328;
var statearr_28329_28336 = state_28315;
(statearr_28329_28336[(5)] = ex__20539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28337 = state_28315;
state_28315 = G__28337;
continue;
} else {
return ret_value__20537__auto__;
}
break;
}
});
shooter$jsclient$client$app_$_state_machine__20536__auto__ = function(state_28315){
switch(arguments.length){
case 0:
return shooter$jsclient$client$app_$_state_machine__20536__auto____0.call(this);
case 1:
return shooter$jsclient$client$app_$_state_machine__20536__auto____1.call(this,state_28315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shooter$jsclient$client$app_$_state_machine__20536__auto__.cljs$core$IFn$_invoke$arity$0 = shooter$jsclient$client$app_$_state_machine__20536__auto____0;
shooter$jsclient$client$app_$_state_machine__20536__auto__.cljs$core$IFn$_invoke$arity$1 = shooter$jsclient$client$app_$_state_machine__20536__auto____1;
return shooter$jsclient$client$app_$_state_machine__20536__auto__;
})()
;})(switch__20535__auto__,c__20600__auto__,___$1))
})();
var state__20602__auto__ = (function (){var statearr_28330 = f__20601__auto__.call(null);
(statearr_28330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20600__auto__);

return statearr_28330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20602__auto__);
});})(c__20600__auto__,___$1))
);

return c__20600__auto__;
});

shooter.jsclient.client.t28298.prototype.om$core$IRenderState$ = true;

shooter.jsclient.client.t28298.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.core.build.call(null,shooter.jsclient.gamecomponent.game_component,null));
});

shooter.jsclient.client.t28298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28299","meta28299",-1405050116,null)], null);
});

shooter.jsclient.client.t28298.cljs$lang$type = true;

shooter.jsclient.client.t28298.cljs$lang$ctorStr = "shooter.jsclient.client/t28298";

shooter.jsclient.client.t28298.cljs$lang$ctorPrWriter = (function (this__17101__auto__,writer__17102__auto__,opt__17103__auto__){
return cljs.core._write.call(null,writer__17102__auto__,"shooter.jsclient.client/t28298");
});

shooter.jsclient.client.__GT_t28298 = (function shooter$jsclient$client$app_$___GT_t28298(app__$1,state__$1,owner__$1,meta28299){
return (new shooter.jsclient.client.t28298(app__$1,state__$1,owner__$1,meta28299));
});

}

return (new shooter.jsclient.client.t28298(shooter$jsclient$client$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,shooter.jsclient.client.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=client.js.map