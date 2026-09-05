// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = cljs.core.cst$kw$event;
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__7335_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__7335_SHARP_));
});
if((!(re_frame.interop.debug_enabled_QMARK_))){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering",id,", expected a collection of interceptors, got:",interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering",id,", given an empty interceptor chain"], 0));
} else {
}

var temp__5823__auto___7336 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5823__auto___7336)){
var not_i_7337 = temp__5823__auto___7336;
if(cljs.core.fn_QMARK_(not_i_7337)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:",not_i_7337], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering",id,", expected interceptors, but got:",not_i_7337], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler(re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils(id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
re_frame.events._STAR_current_dispatch_id_STAR_ = null;
re_frame.events._STAR_on_dispatch_id_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var temp__5821__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5821__auto__)){
var interceptors = temp__5821__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling",re_frame.events._STAR_handling_STAR_,", dispatch-sync was called for",event_v,". You can't call dispatch-sync within an event handler."], 0));
} else {
var dispatch_id = ((re_frame.trace.is_trace_enabled_QMARK_())?re_frame.interop.new_uuid():null);
var parent_id = (cljs.core.truth_(dispatch_id)?cljs.core.cst$kw$re_DASH_frame_SLASH_parent_DASH_dispatch_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(event_v)):null);
if(cljs.core.truth_((function (){var and__5160__auto__ = dispatch_id;
if(cljs.core.truth_(and__5160__auto__)){
return re_frame.events._STAR_on_dispatch_id_STAR_;
} else {
return and__5160__auto__;
}
})())){
(re_frame.events._STAR_on_dispatch_id_STAR_.cljs$core$IFn$_invoke$arity$1 ? re_frame.events._STAR_on_dispatch_id_STAR_.cljs$core$IFn$_invoke$arity$1(dispatch_id) : re_frame.events._STAR_on_dispatch_id_STAR_.call(null,dispatch_id));
} else {
}

var _STAR_handling_STAR__orig_val__7338 = re_frame.events._STAR_handling_STAR_;
var _STAR_current_dispatch_id_STAR__orig_val__7339 = re_frame.events._STAR_current_dispatch_id_STAR_;
var _STAR_handling_STAR__temp_val__7340 = event_v;
var _STAR_current_dispatch_id_STAR__temp_val__7341 = dispatch_id;
(re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__temp_val__7340);

(re_frame.events._STAR_current_dispatch_id_STAR_ = _STAR_current_dispatch_id_STAR__temp_val__7341);

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7342 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7343 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,(function (){var G__7344 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null);
var G__7344__$1 = (cljs.core.truth_(dispatch_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__7344,cljs.core.cst$kw$event_SLASH_original,event_v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dispatch_DASH_id,dispatch_id], 0)):G__7344);
if(cljs.core.truth_(parent_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__7344__$1,cljs.core.cst$kw$parent_DASH_dispatch_DASH_id,parent_id);
} else {
return G__7344__$1;
}
})()], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7343);

try{try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7345 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db_DASH_before,cljs.core.deref(re_frame.db.app_db)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db_DASH_before,cljs.core.deref(re_frame.db.app_db)], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7345);

} else {
}

re_frame.interceptor.execute(event_v,interceptors);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7346 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db_DASH_after,cljs.core.deref(re_frame.db.app_db)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db_DASH_after,cljs.core.deref(re_frame.db.app_db)], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7346);

return null;
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7092__auto___7347 = re_frame.interop.now();
var duration__7093__auto___7348 = (end__7092__auto___7347 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__7094__auto___7349 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7093__auto___7348,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,end__7092__auto___7347], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__7094__auto___7349);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__7094__auto___7349);

re_frame.trace.run_tracing_callbacks_BANG_(end__7092__auto___7347);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7342);
}} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7350 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db_DASH_before,cljs.core.deref(re_frame.db.app_db)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db_DASH_before,cljs.core.deref(re_frame.db.app_db)], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7350);

} else {
}

re_frame.interceptor.execute(event_v,interceptors);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7351 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db_DASH_after,cljs.core.deref(re_frame.db.app_db)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$app_DASH_db_DASH_after,cljs.core.deref(re_frame.db.app_db)], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7351);

return null;
} else {
return null;
}
}
}finally {(re_frame.events._STAR_current_dispatch_id_STAR_ = _STAR_current_dispatch_id_STAR__orig_val__7339);

(re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__orig_val__7338);
}}
} else {
return null;
}
});
