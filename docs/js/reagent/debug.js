// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :elide-asserts true}
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
var G__5096__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5097__i = 0, G__5097__a = new Array(arguments.length -  0);
while (G__5097__i < G__5097__a.length) {G__5097__a[G__5097__i] = arguments[G__5097__i + 0]; ++G__5097__i;}
  args = new cljs.core.IndexedSeq(G__5097__a,0,null);
} 
return G__5096__delegate.call(this,args);};
G__5096.cljs$lang$maxFixedArity = 0;
G__5096.cljs$lang$applyTo = (function (arglist__5098){
var args = cljs.core.seq(arglist__5098);
return G__5096__delegate(args);
});
G__5096.cljs$core$IFn$_invoke$arity$variadic = G__5096__delegate;
return G__5096;
})()
);

(o.error = (function() { 
var G__5099__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5100__i = 0, G__5100__a = new Array(arguments.length -  0);
while (G__5100__i < G__5100__a.length) {G__5100__a[G__5100__i] = arguments[G__5100__i + 0]; ++G__5100__i;}
  args = new cljs.core.IndexedSeq(G__5100__a,0,null);
} 
return G__5099__delegate.call(this,args);};
G__5099.cljs$lang$maxFixedArity = 0;
G__5099.cljs$lang$applyTo = (function (arglist__5101){
var args = cljs.core.seq(arglist__5101);
return G__5099__delegate(args);
});
G__5099.cljs$core$IFn$_invoke$arity$variadic = G__5099__delegate;
return G__5099;
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
