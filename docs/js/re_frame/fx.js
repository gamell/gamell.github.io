// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :elide-asserts true}
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__6294 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__6295 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__6295);

try{try{var seq__6296 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__6297 = null;
var count__6298 = (0);
var i__6299 = (0);
while(true){
if((i__6299 < count__6298)){
var vec__6306 = chunk__6297.cljs$core$IIndexed$_nth$arity$2(null,i__6299);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6306,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6306,(1),null);
var temp__5733__auto___6328 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___6328)){
var effect_fn_6329 = temp__5733__auto___6328;
(effect_fn_6329.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6329.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6329.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6330 = seq__6296;
var G__6331 = chunk__6297;
var G__6332 = count__6298;
var G__6333 = (i__6299 + (1));
seq__6296 = G__6330;
chunk__6297 = G__6331;
count__6298 = G__6332;
i__6299 = G__6333;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__6296);
if(temp__5735__auto__){
var seq__6296__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6296__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__6296__$1);
var G__6334 = cljs.core.chunk_rest(seq__6296__$1);
var G__6335 = c__4556__auto__;
var G__6336 = cljs.core.count(c__4556__auto__);
var G__6337 = (0);
seq__6296 = G__6334;
chunk__6297 = G__6335;
count__6298 = G__6336;
i__6299 = G__6337;
continue;
} else {
var vec__6309 = cljs.core.first(seq__6296__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6309,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6309,(1),null);
var temp__5733__auto___6338 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___6338)){
var effect_fn_6339 = temp__5733__auto___6338;
(effect_fn_6339.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6339.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6339.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6340 = cljs.core.next(seq__6296__$1);
var G__6341 = null;
var G__6342 = (0);
var G__6343 = (0);
seq__6296 = G__6340;
chunk__6297 = G__6341;
count__6298 = G__6342;
i__6299 = G__6343;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6080__auto___6344 = re_frame.interop.now();
var duration__6081__auto___6345 = (end__6080__auto___6344 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__6081__auto___6345,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6080__auto___6344);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__6294);
}} else {
var seq__6312 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__6313 = null;
var count__6314 = (0);
var i__6315 = (0);
while(true){
if((i__6315 < count__6314)){
var vec__6322 = chunk__6313.cljs$core$IIndexed$_nth$arity$2(null,i__6315);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6322,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6322,(1),null);
var temp__5733__auto___6346 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___6346)){
var effect_fn_6347 = temp__5733__auto___6346;
(effect_fn_6347.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6347.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6347.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6348 = seq__6312;
var G__6349 = chunk__6313;
var G__6350 = count__6314;
var G__6351 = (i__6315 + (1));
seq__6312 = G__6348;
chunk__6313 = G__6349;
count__6314 = G__6350;
i__6315 = G__6351;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__6312);
if(temp__5735__auto__){
var seq__6312__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6312__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__6312__$1);
var G__6352 = cljs.core.chunk_rest(seq__6312__$1);
var G__6353 = c__4556__auto__;
var G__6354 = cljs.core.count(c__4556__auto__);
var G__6355 = (0);
seq__6312 = G__6352;
chunk__6313 = G__6353;
count__6314 = G__6354;
i__6315 = G__6355;
continue;
} else {
var vec__6325 = cljs.core.first(seq__6312__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6325,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6325,(1),null);
var temp__5733__auto___6356 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___6356)){
var effect_fn_6357 = temp__5733__auto___6356;
(effect_fn_6357.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6357.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6357.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6358 = cljs.core.next(seq__6312__$1);
var G__6359 = null;
var G__6360 = (0);
var G__6361 = (0);
seq__6312 = G__6358;
chunk__6313 = G__6359;
count__6314 = G__6360;
i__6315 = G__6361;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__6362 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__6363 = null;
var count__6364 = (0);
var i__6365 = (0);
while(true){
if((i__6365 < count__6364)){
var map__6370 = chunk__6363.cljs$core$IIndexed$_nth$arity$2(null,i__6365);
var map__6370__$1 = (((((!((map__6370 == null))))?(((((map__6370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6370):map__6370);
var effect = map__6370__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6370__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6370__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6362,chunk__6363,count__6364,i__6365,map__6370,map__6370__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6362,chunk__6363,count__6364,i__6365,map__6370,map__6370__$1,effect,ms,dispatch))
,ms);
}


var G__6374 = seq__6362;
var G__6375 = chunk__6363;
var G__6376 = count__6364;
var G__6377 = (i__6365 + (1));
seq__6362 = G__6374;
chunk__6363 = G__6375;
count__6364 = G__6376;
i__6365 = G__6377;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__6362);
if(temp__5735__auto__){
var seq__6362__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6362__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__6362__$1);
var G__6378 = cljs.core.chunk_rest(seq__6362__$1);
var G__6379 = c__4556__auto__;
var G__6380 = cljs.core.count(c__4556__auto__);
var G__6381 = (0);
seq__6362 = G__6378;
chunk__6363 = G__6379;
count__6364 = G__6380;
i__6365 = G__6381;
continue;
} else {
var map__6372 = cljs.core.first(seq__6362__$1);
var map__6372__$1 = (((((!((map__6372 == null))))?(((((map__6372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6372):map__6372);
var effect = map__6372__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6372__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6372__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6362,chunk__6363,count__6364,i__6365,map__6372,map__6372__$1,effect,ms,dispatch,seq__6362__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6362,chunk__6363,count__6364,i__6365,map__6372,map__6372__$1,effect,ms,dispatch,seq__6362__$1,temp__5735__auto__))
,ms);
}


var G__6382 = cljs.core.next(seq__6362__$1);
var G__6383 = null;
var G__6384 = (0);
var G__6385 = (0);
seq__6362 = G__6382;
chunk__6363 = G__6383;
count__6364 = G__6384;
i__6365 = G__6385;
continue;
}
} else {
return null;
}
}
break;
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
var seq__6386 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__6387 = null;
var count__6388 = (0);
var i__6389 = (0);
while(true){
if((i__6389 < count__6388)){
var event = chunk__6387.cljs$core$IIndexed$_nth$arity$2(null,i__6389);
re_frame.router.dispatch(event);


var G__6390 = seq__6386;
var G__6391 = chunk__6387;
var G__6392 = count__6388;
var G__6393 = (i__6389 + (1));
seq__6386 = G__6390;
chunk__6387 = G__6391;
count__6388 = G__6392;
i__6389 = G__6393;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__6386);
if(temp__5735__auto__){
var seq__6386__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6386__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__6386__$1);
var G__6394 = cljs.core.chunk_rest(seq__6386__$1);
var G__6395 = c__4556__auto__;
var G__6396 = cljs.core.count(c__4556__auto__);
var G__6397 = (0);
seq__6386 = G__6394;
chunk__6387 = G__6395;
count__6388 = G__6396;
i__6389 = G__6397;
continue;
} else {
var event = cljs.core.first(seq__6386__$1);
re_frame.router.dispatch(event);


var G__6398 = cljs.core.next(seq__6386__$1);
var G__6399 = null;
var G__6400 = (0);
var G__6401 = (0);
seq__6386 = G__6398;
chunk__6387 = G__6399;
count__6388 = G__6400;
i__6389 = G__6401;
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
var seq__6402 = cljs.core.seq(value);
var chunk__6403 = null;
var count__6404 = (0);
var i__6405 = (0);
while(true){
if((i__6405 < count__6404)){
var event = chunk__6403.cljs$core$IIndexed$_nth$arity$2(null,i__6405);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6406 = seq__6402;
var G__6407 = chunk__6403;
var G__6408 = count__6404;
var G__6409 = (i__6405 + (1));
seq__6402 = G__6406;
chunk__6403 = G__6407;
count__6404 = G__6408;
i__6405 = G__6409;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__6402);
if(temp__5735__auto__){
var seq__6402__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6402__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__6402__$1);
var G__6410 = cljs.core.chunk_rest(seq__6402__$1);
var G__6411 = c__4556__auto__;
var G__6412 = cljs.core.count(c__4556__auto__);
var G__6413 = (0);
seq__6402 = G__6410;
chunk__6403 = G__6411;
count__6404 = G__6412;
i__6405 = G__6413;
continue;
} else {
var event = cljs.core.first(seq__6402__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6414 = cljs.core.next(seq__6402__$1);
var G__6415 = null;
var G__6416 = (0);
var G__6417 = (0);
seq__6402 = G__6414;
chunk__6403 = G__6415;
count__6404 = G__6416;
i__6405 = G__6417;
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
return null;
}
}));
