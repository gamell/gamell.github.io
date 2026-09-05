// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('reagent.dom.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.impl.template');
goog.require('reagent.impl.util');
goog.require('goog.object');
goog.scope(function(){
reagent.dom.client.goog$module$goog$object = goog.module.get('goog.object');
});
reagent.dom.client.global$module$react = goog.global["React"];
reagent.dom.client.global$module$react_dom$client = goog.global["ReactDOM"];
/**
 * Create a React Root connected to given container DOM element.
 */
reagent.dom.client.create_root = (function reagent$dom$client$create_root(container){
return reagent.dom.client.global$module$react_dom$client.createRoot(container);
});
/**
 * Unmount the given React Root
 */
reagent.dom.client.unmount = (function reagent$dom$client$unmount(root){
return root.unmount();
});
reagent.dom.client.reagent_root = (function reagent$dom$client$reagent_root(js_props){
var el = reagent.dom.client.goog$module$goog$object.get.call(null,js_props,"comp");
var G__7354_7359 = (function (){
var _STAR_always_update_STAR__orig_val__7355 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__7356 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__7356);

try{reagent.impl.batching.flush_after_render();

return undefined;
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__7355);
}});
reagent.dom.client.global$module$react.useEffect(G__7354_7359);

var _STAR_always_update_STAR__orig_val__7357 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__7358 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__7358);

try{return (el.cljs$core$IFn$_invoke$arity$0 ? el.cljs$core$IFn$_invoke$arity$0() : el.call(null));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__7357);
}});
/**
 * Render the given Reagent element (i.e. Hiccup data)
 *   into a given React root.
 */
reagent.dom.client.render = (function reagent$dom$client$render(var_args){
var G__7361 = arguments.length;
switch (G__7361) {
case 2:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2 = (function (root,el){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3(root,el,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3 = (function (root,el,compiler){
var comp = (function (){
return reagent.impl.protocols.as_element(compiler,el);
});
return root.render((function (){var G__7362 = reagent.dom.client.reagent_root;
var G__7363 = ({"comp": comp});
return reagent.dom.client.global$module$react.createElement(G__7362,G__7363);
})());
}));

(reagent.dom.client.render.cljs$lang$maxFixedArity = 3);

reagent.dom.client.hydrate_root = (function reagent$dom$client$hydrate_root(var_args){
var G__7366 = arguments.length;
switch (G__7366) {
case 2:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2 = (function (container,el){
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3(container,el,null);
}));

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3 = (function (container,el,p__7367){
var map__7368 = p__7367;
var map__7368__$1 = cljs.core.__destructure_map(map__7368);
var compiler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7368__$1,cljs.core.cst$kw$compiler,reagent.impl.template._STAR_current_default_compiler_STAR_);
var on_recoverable_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7368__$1,cljs.core.cst$kw$on_DASH_recoverable_DASH_error);
var identifier_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7368__$1,cljs.core.cst$kw$identifier_DASH_prefix);
var comp = (function (){
return reagent.impl.protocols.as_element(compiler,el);
});
var G__7369 = container;
var G__7370 = (function (){var G__7371 = reagent.dom.client.reagent_root;
var G__7372 = ({"comp": comp});
return reagent.dom.client.global$module$react.createElement(G__7371,G__7372);
})();
return reagent.dom.client.global$module$react_dom$client.hydrateRoot(G__7369,G__7370);
}));

(reagent.dom.client.hydrate_root.cljs$lang$maxFixedArity = 3);

