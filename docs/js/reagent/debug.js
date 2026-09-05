// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__5412__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5413__i = 0, G__5413__a = new Array(arguments.length -  0);
while (G__5413__i < G__5413__a.length) {G__5413__a[G__5413__i] = arguments[G__5413__i + 0]; ++G__5413__i;}
  args = new cljs.core.IndexedSeq(G__5413__a,0,null);
} 
return G__5412__delegate.call(this,args);};
G__5412.cljs$lang$maxFixedArity = 0;
G__5412.cljs$lang$applyTo = (function (arglist__5414){
var args = cljs.core.seq(arglist__5414);
return G__5412__delegate(args);
});
G__5412.cljs$core$IFn$_invoke$arity$variadic = G__5412__delegate;
return G__5412;
})()
);

(o.error = (function() { 
var G__5415__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5416__i = 0, G__5416__a = new Array(arguments.length -  0);
while (G__5416__i < G__5416__a.length) {G__5416__a[G__5416__i] = arguments[G__5416__i + 0]; ++G__5416__i;}
  args = new cljs.core.IndexedSeq(G__5416__a,0,null);
} 
return G__5415__delegate.call(this,args);};
G__5415.cljs$lang$maxFixedArity = 0;
G__5415.cljs$lang$applyTo = (function (arglist__5417){
var args = cljs.core.seq(arglist__5417);
return G__5415__delegate(args);
});
G__5415.cljs$core$IFn$_invoke$arity$variadic = G__5415__delegate;
return G__5415;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
