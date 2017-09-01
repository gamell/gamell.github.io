// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__10440 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10441 = null;
var count__10442 = (0);
var i__10443 = (0);
while(true){
if((i__10443 < count__10442)){
var vec__10444 = cljs.core._nth.call(null,chunk__10441,i__10443);
var effect_key = cljs.core.nth.call(null,vec__10444,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10444,(1),null);
var temp__4655__auto___10450 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___10450)){
var effect_fn_10451 = temp__4655__auto___10450;
effect_fn_10451.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__10452 = seq__10440;
var G__10453 = chunk__10441;
var G__10454 = count__10442;
var G__10455 = (i__10443 + (1));
seq__10440 = G__10452;
chunk__10441 = G__10453;
count__10442 = G__10454;
i__10443 = G__10455;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10440);
if(temp__4657__auto__){
var seq__10440__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10440__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__10440__$1);
var G__10456 = cljs.core.chunk_rest.call(null,seq__10440__$1);
var G__10457 = c__8484__auto__;
var G__10458 = cljs.core.count.call(null,c__8484__auto__);
var G__10459 = (0);
seq__10440 = G__10456;
chunk__10441 = G__10457;
count__10442 = G__10458;
i__10443 = G__10459;
continue;
} else {
var vec__10447 = cljs.core.first.call(null,seq__10440__$1);
var effect_key = cljs.core.nth.call(null,vec__10447,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10447,(1),null);
var temp__4655__auto___10460 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___10460)){
var effect_fn_10461 = temp__4655__auto___10460;
effect_fn_10461.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__10462 = cljs.core.next.call(null,seq__10440__$1);
var G__10463 = null;
var G__10464 = (0);
var G__10465 = (0);
seq__10440 = G__10462;
chunk__10441 = G__10463;
count__10442 = G__10464;
i__10443 = G__10465;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__10466 = cljs.core.seq.call(null,value);
var chunk__10467 = null;
var count__10468 = (0);
var i__10469 = (0);
while(true){
if((i__10469 < count__10468)){
var map__10470 = cljs.core._nth.call(null,chunk__10467,i__10469);
var map__10470__$1 = ((((!((map__10470 == null)))?((((map__10470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10470):map__10470);
var effect = map__10470__$1;
var ms = cljs.core.get.call(null,map__10470__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10470__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10466,chunk__10467,count__10468,i__10469,map__10470,map__10470__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10466,chunk__10467,count__10468,i__10469,map__10470,map__10470__$1,effect,ms,dispatch))
,ms);
}

var G__10474 = seq__10466;
var G__10475 = chunk__10467;
var G__10476 = count__10468;
var G__10477 = (i__10469 + (1));
seq__10466 = G__10474;
chunk__10467 = G__10475;
count__10468 = G__10476;
i__10469 = G__10477;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10466);
if(temp__4657__auto__){
var seq__10466__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10466__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__10466__$1);
var G__10478 = cljs.core.chunk_rest.call(null,seq__10466__$1);
var G__10479 = c__8484__auto__;
var G__10480 = cljs.core.count.call(null,c__8484__auto__);
var G__10481 = (0);
seq__10466 = G__10478;
chunk__10467 = G__10479;
count__10468 = G__10480;
i__10469 = G__10481;
continue;
} else {
var map__10472 = cljs.core.first.call(null,seq__10466__$1);
var map__10472__$1 = ((((!((map__10472 == null)))?((((map__10472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10472):map__10472);
var effect = map__10472__$1;
var ms = cljs.core.get.call(null,map__10472__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10472__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10466,chunk__10467,count__10468,i__10469,map__10472,map__10472__$1,effect,ms,dispatch,seq__10466__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10466,chunk__10467,count__10468,i__10469,map__10472,map__10472__$1,effect,ms,dispatch,seq__10466__$1,temp__4657__auto__))
,ms);
}

var G__10482 = cljs.core.next.call(null,seq__10466__$1);
var G__10483 = null;
var G__10484 = (0);
var G__10485 = (0);
seq__10466 = G__10482;
chunk__10467 = G__10483;
count__10468 = G__10484;
i__10469 = G__10485;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__10486 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10487 = null;
var count__10488 = (0);
var i__10489 = (0);
while(true){
if((i__10489 < count__10488)){
var event = cljs.core._nth.call(null,chunk__10487,i__10489);
re_frame.router.dispatch.call(null,event);

var G__10490 = seq__10486;
var G__10491 = chunk__10487;
var G__10492 = count__10488;
var G__10493 = (i__10489 + (1));
seq__10486 = G__10490;
chunk__10487 = G__10491;
count__10488 = G__10492;
i__10489 = G__10493;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10486);
if(temp__4657__auto__){
var seq__10486__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10486__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__10486__$1);
var G__10494 = cljs.core.chunk_rest.call(null,seq__10486__$1);
var G__10495 = c__8484__auto__;
var G__10496 = cljs.core.count.call(null,c__8484__auto__);
var G__10497 = (0);
seq__10486 = G__10494;
chunk__10487 = G__10495;
count__10488 = G__10496;
i__10489 = G__10497;
continue;
} else {
var event = cljs.core.first.call(null,seq__10486__$1);
re_frame.router.dispatch.call(null,event);

var G__10498 = cljs.core.next.call(null,seq__10486__$1);
var G__10499 = null;
var G__10500 = (0);
var G__10501 = (0);
seq__10486 = G__10498;
chunk__10487 = G__10499;
count__10488 = G__10500;
i__10489 = G__10501;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__10502 = cljs.core.seq.call(null,value);
var chunk__10503 = null;
var count__10504 = (0);
var i__10505 = (0);
while(true){
if((i__10505 < count__10504)){
var event = cljs.core._nth.call(null,chunk__10503,i__10505);
clear_event.call(null,event);

var G__10506 = seq__10502;
var G__10507 = chunk__10503;
var G__10508 = count__10504;
var G__10509 = (i__10505 + (1));
seq__10502 = G__10506;
chunk__10503 = G__10507;
count__10504 = G__10508;
i__10505 = G__10509;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10502);
if(temp__4657__auto__){
var seq__10502__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10502__$1)){
var c__8484__auto__ = cljs.core.chunk_first.call(null,seq__10502__$1);
var G__10510 = cljs.core.chunk_rest.call(null,seq__10502__$1);
var G__10511 = c__8484__auto__;
var G__10512 = cljs.core.count.call(null,c__8484__auto__);
var G__10513 = (0);
seq__10502 = G__10510;
chunk__10503 = G__10511;
count__10504 = G__10512;
i__10505 = G__10513;
continue;
} else {
var event = cljs.core.first.call(null,seq__10502__$1);
clear_event.call(null,event);

var G__10514 = cljs.core.next.call(null,seq__10502__$1);
var G__10515 = null;
var G__10516 = (0);
var G__10517 = (0);
seq__10502 = G__10514;
chunk__10503 = G__10515;
count__10504 = G__10516;
i__10505 = G__10517;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1504247915608
