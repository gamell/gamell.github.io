// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = cljs.core.cst$kw$sub;
if((typeof re_frame !== 'undefined') && (typeof re_frame.subs !== 'undefined') && (typeof re_frame.subs.query__GT_reaction !== 'undefined')){
} else {
re_frame.subs.query__GT_reaction = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * calls `on-dispose` for each cached item,
 * which will cause the value to be removed from the cache
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__7799_7815 = cljs.core.seq(cljs.core.deref(re_frame.subs.query__GT_reaction));
var chunk__7800_7816 = null;
var count__7801_7817 = (0);
var i__7802_7818 = (0);
while(true){
if((i__7802_7818 < count__7801_7817)){
var vec__7809_7819 = chunk__7800_7816.cljs$core$IIndexed$_nth$arity$2(null,i__7802_7818);
var k_7820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7809_7819,(0),null);
var rxn_7821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7809_7819,(1),null);
re_frame.interop.dispose_BANG_(rxn_7821);


var G__7822 = seq__7799_7815;
var G__7823 = chunk__7800_7816;
var G__7824 = count__7801_7817;
var G__7825 = (i__7802_7818 + (1));
seq__7799_7815 = G__7822;
chunk__7800_7816 = G__7823;
count__7801_7817 = G__7824;
i__7802_7818 = G__7825;
continue;
} else {
var temp__5823__auto___7826 = cljs.core.seq(seq__7799_7815);
if(temp__5823__auto___7826){
var seq__7799_7827__$1 = temp__5823__auto___7826;
if(cljs.core.chunked_seq_QMARK_(seq__7799_7827__$1)){
var c__5694__auto___7828 = cljs.core.chunk_first(seq__7799_7827__$1);
var G__7829 = cljs.core.chunk_rest(seq__7799_7827__$1);
var G__7830 = c__5694__auto___7828;
var G__7831 = cljs.core.count(c__5694__auto___7828);
var G__7832 = (0);
seq__7799_7815 = G__7829;
chunk__7800_7816 = G__7830;
count__7801_7817 = G__7831;
i__7802_7818 = G__7832;
continue;
} else {
var vec__7812_7833 = cljs.core.first(seq__7799_7827__$1);
var k_7834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7812_7833,(0),null);
var rxn_7835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7812_7833,(1),null);
re_frame.interop.dispose_BANG_(rxn_7835);


var G__7836 = cljs.core.next(seq__7799_7827__$1);
var G__7837 = null;
var G__7838 = (0);
var G__7839 = (0);
seq__7799_7815 = G__7836;
chunk__7800_7816 = G__7837;
count__7801_7817 = G__7838;
i__7802_7818 = G__7839;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: The subscription cache isn't empty after being cleared"], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * Constructs a cache-key that is compatible with re-frame.subs/alpha. That way,
 *   an alpha subscription can look up the cached reaction of a core subscription, rather
 *   that needing to recalculate. Since this is core, we don't actually support lifecycles here.
 *   That's why `:reactive` is hard-coded, even though the user may have declared a lifecycle.
 */
re_frame.subs.cache_key = (function re_frame$subs$cache_key(p__7840,dynv){
var vec__7841 = p__7840;
var query_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7841,(0),null);
var query_v = vec__7841;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$re_DASH_frame_SLASH_query_DASH_v,query_v,cljs.core.cst$kw$re_DASH_frame_SLASH_q,query_id,cljs.core.cst$kw$re_DASH_frame_SLASH_lifecycle,cljs.core.cst$kw$reactive], null),dynv], null);
});
if((typeof re_frame !== 'undefined') && (typeof re_frame.subs !== 'undefined') && (typeof re_frame.subs.reaction__GT_query_v !== 'undefined')){
} else {
re_frame.subs.reaction__GT_query_v = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
re_frame.subs.remember_query_v_QMARK_ = (function re_frame$subs$remember_query_v_QMARK_(){
return ((re_frame.interop.debug_enabled_QMARK_) || (re_frame.trace.is_trace_enabled_QMARK_()));
});
re_frame.subs.remember_reaction_query_v_BANG_ = (function re_frame$subs$remember_reaction_query_v_BANG_(reaction,query_v){
if(re_frame.subs.remember_query_v_QMARK_()){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.reaction__GT_query_v,cljs.core.assoc,reaction,query_v);
} else {
return null;
}
});
re_frame.subs.forget_reaction_query_v_BANG_ = (function re_frame$subs$forget_reaction_query_v_BANG_(reaction){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.subs.reaction__GT_query_v,cljs.core.dissoc,reaction);
});
re_frame.subs.reaction_query_v = (function re_frame$subs$reaction_query_v(reaction){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.subs.reaction__GT_query_v),reaction);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var k = re_frame.subs.cache_key(query_v,dynv);
var rid = re_frame.interop.reagent_id(r);
re_frame.interop.add_on_dispose_BANG_(r,(function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7844 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7845 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_dispose,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_v,cljs.core.cst$kw$reaction,rid], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7845);

try{try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.subs.query__GT_reaction,(function (query_cache){
if(((cljs.core.contains_QMARK_(query_cache,k)) && ((r === cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_cache,k))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query_cache,k);
} else {
return query_cache;
}
}));

return re_frame.subs.forget_reaction_query_v_BANG_(r);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7092__auto___7846 = re_frame.interop.now();
var duration__7093__auto___7847 = (end__7092__auto___7846 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__7094__auto___7848 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7093__auto___7847,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,end__7092__auto___7846], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__7094__auto___7848);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__7094__auto___7848);

re_frame.trace.run_tracing_callbacks_BANG_(end__7092__auto___7846);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7844);
}} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.subs.query__GT_reaction,(function (query_cache){
if(((cljs.core.contains_QMARK_(query_cache,k)) && ((r === cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_cache,k))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query_cache,k);
} else {
return query_cache;
}
}));

return re_frame.subs.forget_reaction_query_v_BANG_(r);
}
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.subs.query__GT_reaction,(function (query_cache){
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.contains_QMARK_(query_cache,k)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: Adding a new subscription to the cache while there is an existing subscription in the cache",k], 0));
} else {
}
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_cache,k,r);
}));

re_frame.subs.remember_reaction_query_v_BANG_(r,query_v);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7849 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,rid], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,rid], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7849);

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__7851 = arguments.length;
switch (G__7851) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
}));

(re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.subs.query__GT_reaction),re_frame.subs.cache_key(query_v,dyn_v));
}));

(re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2);

/**
 * Returns the query-v that produced `reaction`, or nil if the reaction
 * is unknown to re-frame's subscription cache (e.g. it was created
 * directly via `reagent.ratom/make-reaction` rather than via
 * `subscribe`, or it has already been disposed).
 * 
 * Useful for devtools and diagnostic recipes that hold a reaction
 * value and need to recover its provenance — "which sub produced
 * this?" — without walking trace history.
 * 
 * In :advanced CLJS production builds with tracing disabled, the
 * backing reverse map is never populated, so this fn always returns
 * nil. Devtools that call it run under debug, where the map IS
 * populated. CLJ remains hardcoded debug-on.
 */
re_frame.subs.query_v_for_reaction = (function re_frame$subs$query_v_for_reaction(reaction){
return re_frame.subs.reaction_query_v(reaction);
});
/**
 * Returns a sequence of all currently-live query-vectors — one entry
 * per active cached subscription, in unspecified order.
 * 
 * The sequence is a snapshot of the cache at call time; it does not
 * update reactively. Query-vectors carry any metadata that was on
 * them at subscription time (e.g. `:re-frame/source` from the
 * `re-frame.core-instrumented/subscribe` macro).
 * 
 * Useful for devtools and diagnostic tools that need to enumerate
 * what is currently subscribed without walking internal cache
 * structures whose shape is not a public contract.
 */
re_frame.subs.live_query_vs = (function re_frame$subs$live_query_vs(){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__7853_SHARP_){
return cljs.core.cst$kw$re_DASH_frame_SLASH_query_DASH_v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__7853_SHARP_));
}),cljs.core.keys(cljs.core.deref(re_frame.subs.query__GT_reaction)));
});
re_frame.subs.legacy_query_id = (function re_frame$subs$legacy_query_id(q){
if(cljs.core.vector_QMARK_(q)){
return cljs.core.first(q);
} else {
return null;
}
});
re_frame.subs.q_id = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(re_frame.subs.legacy_query_id,cljs.core.cst$kw$re_DASH_frame_SLASH_q,(function (p1__7854_SHARP_){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"re-frame: can't find the query id. "+"expected a vector with at least one item, "+"or a :re-frame/q key, but got:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7854_SHARP_))], 0));
}));
re_frame.subs.warn_when_not_reactive = (function re_frame$subs$warn_when_not_reactive(){
if(((re_frame.interop.debug_enabled_QMARK_) && ((!(re_frame.interop.reactive_QMARK_()))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: Subscribe was called outside of a reactive context.\n","https://day8.github.io/re-frame/FAQs/UseASubscriptionInAnEventHandler/"], 0));
} else {
return null;
}
});
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__7856 = arguments.length;
switch (G__7856) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(cljs.core.map_QMARK_(query)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: can't pass a map to subscribe. Did you mean to use re-frame.alpha/sub?"], 0));
} else {
re_frame.subs.warn_when_not_reactive();

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7857 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7858 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,query], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7858);

try{try{var temp__5821__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5821__auto__)){
var cached = temp__5821__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7868 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7868);

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7869 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7869);

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7870 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7870);

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"re-frame: no subscription handler registered for: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id)+". Returning a nil subscription.")], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7092__auto___7871 = re_frame.interop.now();
var duration__7093__auto___7872 = (end__7092__auto___7871 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__7094__auto___7873 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7093__auto___7872,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,end__7092__auto___7871], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__7094__auto___7873);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__7094__auto___7873);

re_frame.trace.run_tracing_callbacks_BANG_(end__7092__auto___7871);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7857);
}} else {
var temp__5821__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5821__auto__)){
var cached = temp__5821__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7874 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7874);

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7875 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7875);

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7876 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7876);

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"re-frame: no subscription handler registered for: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id)+". Returning a nil subscription.")], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}
}
}));

(re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(cljs.core.map_QMARK_(query)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: can't pass a map to subscribe. Did you mean to use re-frame.alpha/sub?"], 0));
} else {
re_frame.subs.warn_when_not_reactive();

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7859 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7860 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query,cljs.core.cst$kw$dyn_DASH_v,dynv], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7860);

try{try{var temp__5821__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5821__auto__)){
var cached = temp__5821__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7877 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7877);

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7878 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7878);

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__5823__auto___7879 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5823__auto___7879)){
var not_reactive_7880 = temp__5823__auto___7879;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_7880], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7881 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7881);

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"re-frame: no subscription handler registered for: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id)+". Returning a nil subscription.")], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
}));
var sub = re_frame.interop.make_reaction((function (){
var G__7861 = re_frame.db.app_db;
var G__7862 = query;
var G__7863 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__7861,G__7862,G__7863) : handler_fn.call(null,G__7861,G__7862,G__7863));
}));
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction((function (){
return cljs.core.deref(cljs.core.deref(sub));
})));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7092__auto___7882 = re_frame.interop.now();
var duration__7093__auto___7883 = (end__7092__auto___7882 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__7094__auto___7884 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7093__auto___7883,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,end__7092__auto___7882], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__7094__auto___7884);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__7094__auto___7884);

re_frame.trace.run_tracing_callbacks_BANG_(end__7092__auto___7882);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7859);
}} else {
var temp__5821__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5821__auto__)){
var cached = temp__5821__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7885 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7885);

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7886 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7886);

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__5823__auto___7887 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5823__auto___7887)){
var not_reactive_7888 = temp__5823__auto___7887;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_7888], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7889 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7889);

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"re-frame: no subscription handler registered for: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id)+". Returning a nil subscription.")], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
}));
var sub = re_frame.interop.make_reaction((function (){
var G__7864 = re_frame.db.app_db;
var G__7865 = query;
var G__7866 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__7864,G__7865,G__7866) : handler_fn.call(null,G__7864,G__7865,G__7866));
}));
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction((function (){
return cljs.core.deref(cljs.core.deref(sub));
})));
}
}
}
}
}));

(re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2);

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__7890){
var vec__7891 = p__7890;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7891,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7891,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
/**
 * Runs f over signals. Signals may take several
 *   forms, this function handles all of them.
 */
re_frame.subs.map_signals = (function re_frame$subs$map_signals(f,signals){
if(cljs.core.sequential_QMARK_(signals)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,signals);
} else {
if(cljs.core.map_QMARK_(signals)){
return re_frame.subs.map_vals(f,signals);
} else {
if(re_frame.interop.deref_QMARK_(signals)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(signals) : f.call(null,signals));
} else {
return cljs.core.List.EMPTY;

}
}
}
});
/**
 * Coerces x to a seq if it isn't one already
 */
re_frame.subs.to_seq = (function re_frame$subs$to_seq(x){
if(cljs.core.sequential_QMARK_(x)){
return x;
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var dereffed_signals = re_frame.subs.map_signals(cljs.core.deref,signals);
if(cljs.core.sequential_QMARK_(signals)){
cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_(signals)){
re_frame.subs.map_vals(cljs.core.deref,signals);
} else {
if(re_frame.interop.deref_QMARK_(signals)){
cljs.core.deref(signals);
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for",query_id,", the input-signals function returns:",signals], 0));

}
}
}

if(re_frame.trace.is_trace_enabled_QMARK_()){
var input_ids_7894 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(re_frame.subs.to_seq(re_frame.subs.map_signals(re_frame.interop.reagent_id,signals)));
var input_qvs_7895 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(re_frame.subs.reaction_query_v,re_frame.subs.to_seq(re_frame.subs.map_signals(cljs.core.identity,signals)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7896 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input_DASH_signals,input_ids_7894,cljs.core.cst$kw$input_DASH_query_DASH_vs,input_qvs_7895], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input_DASH_signals,input_ids_7894,cljs.core.cst$kw$input_DASH_query_DASH_vs,input_qvs_7895], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7896);

} else {
}
} else {
}

return dereffed_signals;
});
re_frame.subs.sugar = (function re_frame$subs$sugar(var_args){
var args__5903__auto__ = [];
var len__5897__auto___7915 = arguments.length;
var i__5898__auto___7916 = (0);
while(true){
if((i__5898__auto___7916 < len__5897__auto___7915)){
args__5903__auto__.push((arguments[i__5898__auto___7916]));

var G__7917 = (i__5898__auto___7916 + (1));
i__5898__auto___7916 = G__7917;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return re_frame.subs.sugar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(re_frame.subs.sugar.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,sub_fn,query_QMARK_,args){
var error_header = (""+"re-frame: reg-sub for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id)+", ");
var vec__7901 = cljs.core.take_last((2),args);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7901,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7901,(1),null);
var comp_f = vec__7901;
var vec__7904 = (cljs.core.truth_((function (){var or__5162__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(comp_f));
if(or__5162__auto__){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = cljs.core.fn_QMARK_(op);
if(or__5162__auto____$1){
return or__5162__auto____$1;
} else {
return (query_QMARK_.cljs$core$IFn$_invoke$arity$1 ? query_QMARK_.cljs$core$IFn$_invoke$arity$1(op) : query_QMARK_.call(null,op));
}
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(args),cljs.core.last(args)], null):(function (){var args__$1 = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),args);
var G__7907 = op;
var G__7907__$1 = (((G__7907 instanceof cljs.core.Keyword))?G__7907.fqn:null);
switch (G__7907__$1) {
case "->":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args__$1,(function (db,_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(db) : f.call(null,db));
})], null);

break;
case "=>":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args__$1,(function (db,q){
if(cljs.core.map_QMARK_(q)){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,q) : f.call(null,db,q));
} else {
var vec__7908 = q;
var seq__7909 = cljs.core.seq(vec__7908);
var first__7910 = cljs.core.first(seq__7909);
var seq__7909__$1 = cljs.core.next(seq__7909);
var _ = first__7910;
var qs = seq__7909__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,qs);
}
})], null);

break;
default:
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_header,"expected :-> or :=> as second to last argument, got:",op], 0));

}
})());
var input_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7904,(0),null);
var computation_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7904,(1),null);
var inputs_fn = (function (){var G__7911 = cljs.core.count(input_args);
switch (G__7911) {
case (0):
return (function() {
var G__7920 = null;
var G__7920__1 = (function (_){
return re_frame.db.app_db;
});
var G__7920__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__7920 = function(_,___$1){
switch(arguments.length){
case 1:
return G__7920__1.call(this,_);
case 2:
return G__7920__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7920.cljs$core$IFn$_invoke$arity$1 = G__7920__1;
G__7920.cljs$core$IFn$_invoke$arity$2 = G__7920__2;
return G__7920;
})()

break;
case (1):
var f__$1 = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f__$1)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_header,"2nd argument expected to be an inputs function, got:",f__$1], 0));
}

return f__$1;

break;
case (2):
var vec__7912 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7912,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7912,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT__DASH_,marker)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_header,"expected :<-, got:",marker], 0));
}

return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return (sub_fn.cljs$core$IFn$_invoke$arity$1 ? sub_fn.cljs$core$IFn$_invoke$arity$1(q) : sub_fn.call(null,q));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return (sub_fn.cljs$core$IFn$_invoke$arity$1 ? sub_fn.cljs$core$IFn$_invoke$arity$1(q) : sub_fn.call(null,q));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var q = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_LT__DASH_,null], null), null),markers)) && (cljs.core.every_QMARK_(query_QMARK_,q)))){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_fn,q);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_fn,q);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs_fn,computation_fn], null);
}));

(re_frame.subs.sugar.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(re_frame.subs.sugar.cljs$lang$applyTo = (function (seq7897){
var G__7898 = cljs.core.first(seq7897);
var seq7897__$1 = cljs.core.next(seq7897);
var G__7899 = cljs.core.first(seq7897__$1);
var seq7897__$2 = cljs.core.next(seq7897__$1);
var G__7900 = cljs.core.first(seq7897__$2);
var seq7897__$3 = cljs.core.next(seq7897__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7898,G__7899,G__7900,seq7897__$3);
}));

re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__5903__auto__ = [];
var len__5897__auto___7940 = arguments.length;
var i__5898__auto___7941 = (0);
while(true){
if((i__5898__auto___7941 < len__5897__auto___7940)){
args__5903__auto__.push((arguments[i__5898__auto___7941]));

var G__7942 = (i__5898__auto___7941 + (1));
i__5898__auto___7941 = G__7942;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var vec__7923 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(re_frame.subs.sugar,query_id,re_frame.subs.subscribe,cljs.core.vector_QMARK_,args);
var inputs_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7923,(0),null);
var computation_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7923,(1),null);
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,(function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,null) : inputs_fn.call(null,query_vec,null));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction((function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7926 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7927 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,(re_frame.subs.q_id.cljs$core$IFn$_invoke$arity$1 ? re_frame.subs.q_id.cljs$core$IFn$_invoke$arity$1(query_vec) : re_frame.subs.q_id.call(null,query_vec)),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7927);

try{try{var subscription = (function (){var G__7928 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__7929 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__7928,G__7929) : computation_fn.call(null,G__7928,G__7929));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7943 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7943);

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7092__auto___7944 = re_frame.interop.now();
var duration__7093__auto___7945 = (end__7092__auto___7944 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__7094__auto___7946 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7093__auto___7945,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,end__7092__auto___7944], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__7094__auto___7946);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__7094__auto___7946);

re_frame.trace.run_tracing_callbacks_BANG_(end__7092__auto___7944);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7926);
}} else {
var subscription = (function (){var G__7930 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__7931 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__7930,G__7931) : computation_fn.call(null,G__7930,G__7931));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7947 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7947);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction((function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7932 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7933 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,(re_frame.subs.q_id.cljs$core$IFn$_invoke$arity$1 ? re_frame.subs.q_id.cljs$core$IFn$_invoke$arity$1(query_vec) : re_frame.subs.q_id.call(null,query_vec)),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$dyn_DASH_v,dyn_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7933);

try{try{var subscription = (function (){var G__7934 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__7935 = query_vec;
var G__7936 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__7934,G__7935,G__7936) : computation_fn.call(null,G__7934,G__7935,G__7936));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7948 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7948);

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7092__auto___7949 = re_frame.interop.now();
var duration__7093__auto___7950 = (end__7092__auto___7949 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__7094__auto___7951 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7093__auto___7950,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,end__7092__auto___7949], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__7094__auto___7951);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__7094__auto___7951);

re_frame.trace.run_tracing_callbacks_BANG_(end__7092__auto___7949);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7932);
}} else {
var subscription = (function (){var G__7937 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__7938 = query_vec;
var G__7939 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__7937,G__7938,G__7939) : computation_fn.call(null,G__7937,G__7938,G__7939));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7952 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7952);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
);
}));

(re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq7921){
var G__7922 = cljs.core.first(seq7921);
var seq7921__$1 = cljs.core.next(seq7921);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7922,seq7921__$1);
}));

