// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.loggers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
re_frame.loggers.loggers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$log,console.log.bind(console),cljs.core.cst$kw$warn,console.warn.bind(console),cljs.core.cst$kw$error,console.error.bind(console),cljs.core.cst$kw$debug,console.debug.bind(console),cljs.core.cst$kw$group,(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),cljs.core.cst$kw$groupEnd,(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null));
re_frame.loggers.console = (function re_frame$loggers$console(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5613 = arguments.length;
var i__4737__auto___5614 = (0);
while(true){
if((i__4737__auto___5614 < len__4736__auto___5613)){
args__4742__auto__.push((arguments[i__4737__auto___5614]));

var G__5615 = (i__4737__auto___5614 + (1));
i__4737__auto___5614 = G__5615;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__5612 = cljs.core.deref(re_frame.loggers.loggers);
return (level.cljs$core$IFn$_invoke$arity$1 ? level.cljs$core$IFn$_invoke$arity$1(G__5612) : level.call(null,G__5612));
})(),args);
}));

(re_frame.loggers.console.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.loggers.console.cljs$lang$applyTo = (function (seq5610){
var G__5611 = cljs.core.first(seq5610);
var seq5610__$1 = cljs.core.next(seq5610);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5611,seq5610__$1);
}));

re_frame.loggers.set_loggers_BANG_ = (function re_frame$loggers$set_loggers_BANG_(new_loggers){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
/**
 * Get the current logging functions used by re-frame.
 */
re_frame.loggers.get_loggers = (function re_frame$loggers$get_loggers(){
return cljs.core.deref(re_frame.loggers.loggers);
});
