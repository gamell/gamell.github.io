// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * Per-fx-execution-frame override map. Bound by `do-fx-after`
 * from the current event's `:re-frame/fx-overrides` metadata.
 */
re_frame.fx._STAR_current_overrides_STAR_ = null;
/**
 * Resolve an fx handler: prefer an override from
 * `*current-overrides*` (set by do-fx-after for the active
 * dispatch); fall back to the global registrar.
 */
re_frame.fx.effect_handler = (function re_frame$fx$effect_handler(effect_key){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frame.fx._STAR_current_overrides_STAR_,effect_key);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
}
});
/**
 * Apply the `:db` effect first, then every other effect via
 * `effect-handler`. Extracted so `do-fx-after` can call it with OR
 * without a `*current-overrides*` binding pushed — the no-overrides
 * hot path skips the binding entirely.
 */
re_frame.fx.run_effects_BANG_ = (function re_frame$fx$run_effects_BANG_(effects,effects_without_db){
var temp__5823__auto___7540 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___7540)){
var new_db_7541 = temp__5823__auto___7540;
var fexpr__7523_7542 = re_frame.fx.effect_handler(cljs.core.cst$kw$db);
(fexpr__7523_7542.cljs$core$IFn$_invoke$arity$1 ? fexpr__7523_7542.cljs$core$IFn$_invoke$arity$1(new_db_7541) : fexpr__7523_7542.call(null,new_db_7541));
} else {
}

var seq__7524 = cljs.core.seq(effects_without_db);
var chunk__7525 = null;
var count__7526 = (0);
var i__7527 = (0);
while(true){
if((i__7527 < count__7526)){
var vec__7534 = chunk__7525.cljs$core$IIndexed$_nth$arity$2(null,i__7527);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7534,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7534,(1),null);
var temp__5821__auto___7543 = re_frame.fx.effect_handler(effect_key);
if(cljs.core.truth_(temp__5821__auto___7543)){
var effect_fn_7544 = temp__5821__auto___7543;
(effect_fn_7544.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7544.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7544.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$event,effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/FAQs/use-cofx-as-fx/"):null)], 0));
}


var G__7545 = seq__7524;
var G__7546 = chunk__7525;
var G__7547 = count__7526;
var G__7548 = (i__7527 + (1));
seq__7524 = G__7545;
chunk__7525 = G__7546;
count__7526 = G__7547;
i__7527 = G__7548;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7524);
if(temp__5823__auto__){
var seq__7524__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7524__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__7524__$1);
var G__7549 = cljs.core.chunk_rest(seq__7524__$1);
var G__7550 = c__5694__auto__;
var G__7551 = cljs.core.count(c__5694__auto__);
var G__7552 = (0);
seq__7524 = G__7549;
chunk__7525 = G__7550;
count__7526 = G__7551;
i__7527 = G__7552;
continue;
} else {
var vec__7537 = cljs.core.first(seq__7524__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7537,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7537,(1),null);
var temp__5821__auto___7553 = re_frame.fx.effect_handler(effect_key);
if(cljs.core.truth_(temp__5821__auto___7553)){
var effect_fn_7554 = temp__5821__auto___7553;
(effect_fn_7554.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7554.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7554.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$event,effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/FAQs/use-cofx-as-fx/"):null)], 0));
}


var G__7555 = cljs.core.next(seq__7524__$1);
var G__7556 = null;
var G__7557 = (0);
var G__7558 = (0);
seq__7524 = G__7555;
chunk__7525 = G__7556;
count__7526 = G__7557;
i__7527 = G__7558;
continue;
}
} else {
return null;
}
}
break;
}
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
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7559 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7560 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7560);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$coeffects,cljs.core.cst$kw$event], null));
var overrides = cljs.core.cst$kw$re_DASH_frame_SLASH_fx_DASH_overrides.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(event));
if(cljs.core.truth_(overrides)){
var _STAR_current_overrides_STAR__orig_val__7561 = re_frame.fx._STAR_current_overrides_STAR_;
var _STAR_current_overrides_STAR__temp_val__7562 = overrides;
(re_frame.fx._STAR_current_overrides_STAR_ = _STAR_current_overrides_STAR__temp_val__7562);

try{return re_frame.fx.run_effects_BANG_(effects,effects_without_db);
}finally {(re_frame.fx._STAR_current_overrides_STAR_ = _STAR_current_overrides_STAR__orig_val__7561);
}} else {
return re_frame.fx.run_effects_BANG_(effects,effects_without_db);
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7092__auto___7565 = re_frame.interop.now();
var duration__7093__auto___7566 = (end__7092__auto___7565 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__7094__auto___7567 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7093__auto___7566,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,end__7092__auto___7565], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__7094__auto___7567);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__7094__auto___7567);

re_frame.trace.run_tracing_callbacks_BANG_(end__7092__auto___7565);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7559);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$coeffects,cljs.core.cst$kw$event], null));
var overrides = cljs.core.cst$kw$re_DASH_frame_SLASH_fx_DASH_overrides.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(event));
if(cljs.core.truth_(overrides)){
var _STAR_current_overrides_STAR__orig_val__7563 = re_frame.fx._STAR_current_overrides_STAR_;
var _STAR_current_overrides_STAR__temp_val__7564 = overrides;
(re_frame.fx._STAR_current_overrides_STAR_ = _STAR_current_overrides_STAR__temp_val__7564);

try{return re_frame.fx.run_effects_BANG_(effects,effects_without_db);
}finally {(re_frame.fx._STAR_current_overrides_STAR_ = _STAR_current_overrides_STAR__orig_val__7563);
}} else {
return re_frame.fx.run_effects_BANG_(effects,effects_without_db);
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__7568){
var map__7569 = p__7568;
var map__7569__$1 = cljs.core.__destructure_map(map__7569);
var effect = map__7569__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7569__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7569__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__7570 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__7571 = null;
var count__7572 = (0);
var i__7573 = (0);
while(true){
if((i__7573 < count__7572)){
var effect = chunk__7571.cljs$core$IIndexed$_nth$arity$2(null,i__7573);
re_frame.fx.dispatch_later(effect);


var G__7574 = seq__7570;
var G__7575 = chunk__7571;
var G__7576 = count__7572;
var G__7577 = (i__7573 + (1));
seq__7570 = G__7574;
chunk__7571 = G__7575;
count__7572 = G__7576;
i__7573 = G__7577;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7570);
if(temp__5823__auto__){
var seq__7570__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7570__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__7570__$1);
var G__7578 = cljs.core.chunk_rest(seq__7570__$1);
var G__7579 = c__5694__auto__;
var G__7580 = cljs.core.count(c__5694__auto__);
var G__7581 = (0);
seq__7570 = G__7578;
chunk__7571 = G__7579;
count__7572 = G__7580;
i__7573 = G__7581;
continue;
} else {
var effect = cljs.core.first(seq__7570__$1);
re_frame.fx.dispatch_later(effect);


var G__7582 = cljs.core.next(seq__7570__$1);
var G__7583 = null;
var G__7584 = (0);
var G__7585 = (0);
seq__7570 = G__7582;
chunk__7571 = G__7583;
count__7572 = G__7584;
i__7573 = G__7585;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$fx,(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__7586 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__7587 = null;
var count__7588 = (0);
var i__7589 = (0);
while(true){
if((i__7589 < count__7588)){
var vec__7596 = chunk__7587.cljs$core$IIndexed$_nth$arity$2(null,i__7589);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7596,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7596,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___7602 = re_frame.fx.effect_handler(effect_key);
if(cljs.core.truth_(temp__5821__auto___7602)){
var effect_fn_7603 = temp__5821__auto___7602;
(effect_fn_7603.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7603.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7603.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__7604 = seq__7586;
var G__7605 = chunk__7587;
var G__7606 = count__7588;
var G__7607 = (i__7589 + (1));
seq__7586 = G__7604;
chunk__7587 = G__7605;
count__7588 = G__7606;
i__7589 = G__7607;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7586);
if(temp__5823__auto__){
var seq__7586__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7586__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__7586__$1);
var G__7608 = cljs.core.chunk_rest(seq__7586__$1);
var G__7609 = c__5694__auto__;
var G__7610 = cljs.core.count(c__5694__auto__);
var G__7611 = (0);
seq__7586 = G__7608;
chunk__7587 = G__7609;
count__7588 = G__7610;
i__7589 = G__7611;
continue;
} else {
var vec__7599 = cljs.core.first(seq__7586__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7599,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7599,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___7612 = re_frame.fx.effect_handler(effect_key);
if(cljs.core.truth_(temp__5821__auto___7612)){
var effect_fn_7613 = temp__5821__auto___7612;
(effect_fn_7613.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7613.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7613.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__7614 = cljs.core.next(seq__7586__$1);
var G__7615 = null;
var G__7616 = (0);
var G__7617 = (0);
seq__7586 = G__7614;
chunk__7587 = G__7615;
count__7588 = G__7616;
i__7589 = G__7617;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__7618 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__7619 = null;
var count__7620 = (0);
var i__7621 = (0);
while(true){
if((i__7621 < count__7620)){
var event = chunk__7619.cljs$core$IIndexed$_nth$arity$2(null,i__7621);
re_frame.router.dispatch(event);


var G__7622 = seq__7618;
var G__7623 = chunk__7619;
var G__7624 = count__7620;
var G__7625 = (i__7621 + (1));
seq__7618 = G__7622;
chunk__7619 = G__7623;
count__7620 = G__7624;
i__7621 = G__7625;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7618);
if(temp__5823__auto__){
var seq__7618__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7618__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__7618__$1);
var G__7626 = cljs.core.chunk_rest(seq__7618__$1);
var G__7627 = c__5694__auto__;
var G__7628 = cljs.core.count(c__5694__auto__);
var G__7629 = (0);
seq__7618 = G__7626;
chunk__7619 = G__7627;
count__7620 = G__7628;
i__7621 = G__7629;
continue;
} else {
var event = cljs.core.first(seq__7618__$1);
re_frame.router.dispatch(event);


var G__7630 = cljs.core.next(seq__7618__$1);
var G__7631 = null;
var G__7632 = (0);
var G__7633 = (0);
seq__7618 = G__7630;
chunk__7619 = G__7631;
count__7620 = G__7632;
i__7621 = G__7633;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__7634 = cljs.core.seq(value);
var chunk__7635 = null;
var count__7636 = (0);
var i__7637 = (0);
while(true){
if((i__7637 < count__7636)){
var event = chunk__7635.cljs$core$IIndexed$_nth$arity$2(null,i__7637);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__7638 = seq__7634;
var G__7639 = chunk__7635;
var G__7640 = count__7636;
var G__7641 = (i__7637 + (1));
seq__7634 = G__7638;
chunk__7635 = G__7639;
count__7636 = G__7640;
i__7637 = G__7641;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7634);
if(temp__5823__auto__){
var seq__7634__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7634__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__7634__$1);
var G__7642 = cljs.core.chunk_rest(seq__7634__$1);
var G__7643 = c__5694__auto__;
var G__7644 = cljs.core.count(c__5694__auto__);
var G__7645 = (0);
seq__7634 = G__7642;
chunk__7635 = G__7643;
count__7636 = G__7644;
i__7637 = G__7645;
continue;
} else {
var event = cljs.core.first(seq__7634__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__7646 = cljs.core.next(seq__7634__$1);
var G__7647 = null;
var G__7648 = (0);
var G__7649 = (0);
seq__7634 = G__7646;
chunk__7635 = G__7647;
count__7636 = G__7648;
i__7637 = G__7649;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7650 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7651 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$reagent_SLASH_quiescent], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7651);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7092__auto___7652 = re_frame.interop.now();
var duration__7093__auto___7653 = (end__7092__auto___7652 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__7094__auto___7654 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7093__auto___7653,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,end__7092__auto___7652], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__7094__auto___7654);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__7094__auto___7654);

re_frame.trace.run_tracing_callbacks_BANG_(end__7092__auto___7652);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7650);
}} else {
return null;
}
}
}));
