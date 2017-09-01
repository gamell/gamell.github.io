// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9427__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9428__i = 0, G__9428__a = new Array(arguments.length -  0);
while (G__9428__i < G__9428__a.length) {G__9428__a[G__9428__i] = arguments[G__9428__i + 0]; ++G__9428__i;}
  args = new cljs.core.IndexedSeq(G__9428__a,0,null);
} 
return G__9427__delegate.call(this,args);};
G__9427.cljs$lang$maxFixedArity = 0;
G__9427.cljs$lang$applyTo = (function (arglist__9429){
var args = cljs.core.seq(arglist__9429);
return G__9427__delegate(args);
});
G__9427.cljs$core$IFn$_invoke$arity$variadic = G__9427__delegate;
return G__9427;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9430__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9431__i = 0, G__9431__a = new Array(arguments.length -  0);
while (G__9431__i < G__9431__a.length) {G__9431__a[G__9431__i] = arguments[G__9431__i + 0]; ++G__9431__i;}
  args = new cljs.core.IndexedSeq(G__9431__a,0,null);
} 
return G__9430__delegate.call(this,args);};
G__9430.cljs$lang$maxFixedArity = 0;
G__9430.cljs$lang$applyTo = (function (arglist__9432){
var args = cljs.core.seq(arglist__9432);
return G__9430__delegate(args);
});
G__9430.cljs$core$IFn$_invoke$arity$variadic = G__9430__delegate;
return G__9430;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1504247912326
