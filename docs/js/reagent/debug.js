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
var G__5502__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5503__i = 0, G__5503__a = new Array(arguments.length -  0);
while (G__5503__i < G__5503__a.length) {G__5503__a[G__5503__i] = arguments[G__5503__i + 0]; ++G__5503__i;}
  args = new cljs.core.IndexedSeq(G__5503__a,0,null);
} 
return G__5502__delegate.call(this,args);};
G__5502.cljs$lang$maxFixedArity = 0;
G__5502.cljs$lang$applyTo = (function (arglist__5504){
var args = cljs.core.seq(arglist__5504);
return G__5502__delegate(args);
});
G__5502.cljs$core$IFn$_invoke$arity$variadic = G__5502__delegate;
return G__5502;
})()
);

(o.error = (function() { 
var G__5505__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5506__i = 0, G__5506__a = new Array(arguments.length -  0);
while (G__5506__i < G__5506__a.length) {G__5506__a[G__5506__i] = arguments[G__5506__i + 0]; ++G__5506__i;}
  args = new cljs.core.IndexedSeq(G__5506__a,0,null);
} 
return G__5505__delegate.call(this,args);};
G__5505.cljs$lang$maxFixedArity = 0;
G__5505.cljs$lang$applyTo = (function (arglist__5507){
var args = cljs.core.seq(arglist__5507);
return G__5505__delegate(args);
});
G__5505.cljs$core$IFn$_invoke$arity$variadic = G__5505__delegate;
return G__5505;
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
