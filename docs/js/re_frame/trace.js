// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__6102){
var map__6103 = p__6102;
var map__6103__$1 = (((((!((map__6103 == null))))?(((((map__6103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6103):map__6103);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6103__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6103__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6103__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6103__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__6105_6129 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__6106_6130 = null;
var count__6107_6131 = (0);
var i__6108_6132 = (0);
while(true){
if((i__6108_6132 < count__6107_6131)){
var vec__6119_6133 = chunk__6106_6130.cljs$core$IIndexed$_nth$arity$2(null,i__6108_6132);
var k_6134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6119_6133,(0),null);
var cb_6135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6119_6133,(1),null);
try{var G__6123_6136 = cljs.core.deref(re_frame.trace.traces);
(cb_6135.cljs$core$IFn$_invoke$arity$1 ? cb_6135.cljs$core$IFn$_invoke$arity$1(G__6123_6136) : cb_6135.call(null,G__6123_6136));
}catch (e6122){var e_6137 = e6122;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6134,"while storing",cljs.core.deref(re_frame.trace.traces),e_6137], 0));
}

var G__6138 = seq__6105_6129;
var G__6139 = chunk__6106_6130;
var G__6140 = count__6107_6131;
var G__6141 = (i__6108_6132 + (1));
seq__6105_6129 = G__6138;
chunk__6106_6130 = G__6139;
count__6107_6131 = G__6140;
i__6108_6132 = G__6141;
continue;
} else {
var temp__5735__auto___6142 = cljs.core.seq(seq__6105_6129);
if(temp__5735__auto___6142){
var seq__6105_6143__$1 = temp__5735__auto___6142;
if(cljs.core.chunked_seq_QMARK_(seq__6105_6143__$1)){
var c__4556__auto___6144 = cljs.core.chunk_first(seq__6105_6143__$1);
var G__6145 = cljs.core.chunk_rest(seq__6105_6143__$1);
var G__6146 = c__4556__auto___6144;
var G__6147 = cljs.core.count(c__4556__auto___6144);
var G__6148 = (0);
seq__6105_6129 = G__6145;
chunk__6106_6130 = G__6146;
count__6107_6131 = G__6147;
i__6108_6132 = G__6148;
continue;
} else {
var vec__6124_6149 = cljs.core.first(seq__6105_6143__$1);
var k_6150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6124_6149,(0),null);
var cb_6151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6124_6149,(1),null);
try{var G__6128_6152 = cljs.core.deref(re_frame.trace.traces);
(cb_6151.cljs$core$IFn$_invoke$arity$1 ? cb_6151.cljs$core$IFn$_invoke$arity$1(G__6128_6152) : cb_6151.call(null,G__6128_6152));
}catch (e6127){var e_6153 = e6127;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6150,"while storing",cljs.core.deref(re_frame.trace.traces),e_6153], 0));
}

var G__6154 = cljs.core.next(seq__6105_6143__$1);
var G__6155 = null;
var G__6156 = (0);
var G__6157 = (0);
seq__6105_6129 = G__6154;
chunk__6106_6130 = G__6155;
count__6107_6131 = G__6156;
i__6108_6132 = G__6157;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
