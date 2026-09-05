// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('re_frame.registrar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.settings');
re_frame.registrar.kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$sub,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$error,null,cljs.core.cst$kw$cofx,null,cljs.core.cst$kw$fx,null], null), null);
if((typeof re_frame !== 'undefined') && (typeof re_frame.registrar !== 'undefined') && (typeof re_frame.registrar.kind__GT_id__GT_handler !== 'undefined')){
} else {
re_frame.registrar.kind__GT_id__GT_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
re_frame.registrar.get_handler = (function re_frame$registrar$get_handler(var_args){
var G__7230 = arguments.length;
switch (G__7230) {
case 1:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1 = (function (kind){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind);
}));

(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind),id);
}));

(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3 = (function (kind,id,required_QMARK_){
var handler = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(kind,id);
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_((function (){var and__5160__auto__ = required_QMARK_;
if(cljs.core.truth_(and__5160__auto__)){
return (handler == null);
} else {
return and__5160__auto__;
}
})())){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)),"handler registered for:",id], 0));
} else {
}
} else {
}

return handler;
}));

(re_frame.registrar.get_handler.cljs$lang$maxFixedArity = 3);

re_frame.registrar.register_handler = (function re_frame$registrar$register_handler(kind,id,handler_fn){
if(cljs.core.truth_((function (){var and__5160__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(kind,id,false);
if(cljs.core.truth_(and__5160__auto__)){
return (((!(re_frame.interop.debug_enabled_QMARK_))) || (cljs.core.not(re_frame.settings.loaded_QMARK_())));
} else {
return and__5160__auto__;
}
})())){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: overwriting",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)),"handler for:",id], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.registrar.kind__GT_id__GT_handler,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null),handler_fn);

return handler_fn;
});
/**
 * Re-register the handler at [kind id] with `src-meta` attached as
 * metadata. Used by the reg-event-db / reg-event-fx / reg-event-ctx /
 * reg-sub / reg-fx macros to bake the call-site {:file :line} onto
 * the registered value so `(meta (get-handler kind id))` returns it.
 * 
 * No-op when the handler isn't registered. If the registered value
 * doesn't implement IObj (some opaque IFn shapes), the with-meta call
 * throws and we silently skip — the macro contract is best-effort.
 * 
 * The leading dash signals 'internal, but reachable' — users opt in
 * via the macros, not by calling this directly.
 */
re_frame.registrar._decorate_handler_meta_BANG_ = (function re_frame$registrar$_decorate_handler_meta_BANG_(kind,id,src_meta){
var temp__5823__auto___7233 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(kind,id);
if(cljs.core.truth_(temp__5823__auto___7233)){
var handler_7234 = temp__5823__auto___7233;
try{var chain_or_fn_7235 = ((((cljs.core.seq_QMARK_(handler_7234)) && ((!(cljs.core.vector_QMARK_(handler_7234))))))?cljs.core.vec(handler_7234):handler_7234);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.registrar.kind__GT_id__GT_handler,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null),cljs.core.with_meta(chain_or_fn_7235,src_meta));
}catch (e7232){var __7236 = e7232;
}} else {
}

return null;
});
re_frame.registrar.clear_handlers = (function re_frame$registrar$clear_handlers(var_args){
var G__7238 = arguments.length;
switch (G__7238) {
case 0:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.reset_BANG_(re_frame.registrar.kind__GT_id__GT_handler,cljs.core.PersistentArrayMap.EMPTY);
}));

(re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1 = (function (kind){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.registrar.kind__GT_id__GT_handler,cljs.core.dissoc,kind);
}));

(re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){

if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(kind,id))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.registrar.kind__GT_id__GT_handler,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: can't clear",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)),"handler for",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+". Handler not found.")], 0));
}
}));

(re_frame.registrar.clear_handlers.cljs$lang$maxFixedArity = 2);

