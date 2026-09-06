// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('goog.object');
goog.scope(function(){
reagent.impl.component.goog$module$goog$object = goog.module.get('goog.object');
});
reagent.impl.component.global$module$react = goog.global["React"];
reagent.impl.component.extract_props = (function reagent$impl$component$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.component.extract_children = (function reagent$impl$component$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_(p))))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.component.props_argv = (function reagent$impl$component$props_argv(c,p){
var temp__5825__auto__ = p.argv;
if((temp__5825__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,reagent.impl.util.shallow_obj_to_map(p)], null);
} else {
var a = temp__5825__auto__;
return a;
}
});
reagent.impl.component.get_argv = (function reagent$impl$component$get_argv(c){
return reagent.impl.component.props_argv(c,c.props);
});
reagent.impl.component.get_props = (function reagent$impl$component$get_props(c){
var p = c.props;
var temp__5825__auto__ = p.argv;
if((temp__5825__auto__ == null)){
return reagent.impl.util.shallow_obj_to_map(p);
} else {
var v = temp__5825__auto__;
return reagent.impl.component.extract_props(v);
}
});
reagent.impl.component.get_children = (function reagent$impl$component$get_children(c){
var p = c.props;
var temp__5825__auto__ = p.argv;
if((temp__5825__auto__ == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__5881 = p.children;
return reagent.impl.component.global$module$react.Children.toArray(G__5881);
})());
} else {
var v = temp__5825__auto__;
return reagent.impl.component.extract_children(v);
}
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__5882 = c;
var G__5882__$1 = (((G__5882 == null))?null:G__5882.prototype);
if((G__5882__$1 == null)){
return null;
} else {
return G__5882__$1.reagentRender;
}
})() == null)))));
});
reagent.impl.component.react_class_QMARK_ = (function reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_(c)) && ((!(((function (){var G__5883 = c;
var G__5883__$1 = (((G__5883 == null))?null:G__5883.prototype);
if((G__5883__$1 == null)){
return null;
} else {
return G__5883__$1.render;
}
})() == null)))));
});
reagent.impl.component.reagent_component_QMARK_ = (function reagent$impl$component$reagent_component_QMARK_(c){
return (!((c.reagentRender == null)));
});
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = this$.cljsState;
if((!((sa == null)))){
return sa;
} else {
return (this$.cljsState = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
/**
 * Calls the render function of the component `c`.  If result `res` evaluates to a:
 *   1) Vector (form-1 component) - Treats the vector as hiccup and returns
 *      a react element with a render function based on that hiccup
 *   2) Function (form-2 component) - updates the render function to `res` i.e. the internal function
 *      and calls wrap-render again (`recur`), until the render result doesn't evaluate to a function.
 *   3) Anything else - Returns the result of evaluating `c`
 */
reagent.impl.component.wrap_render = (function reagent$impl$component$wrap_render(c,compiler){
while(true){
var f = c.reagentRender;
var _ = null;
var res = ((c.cljsLegacyRender === true)?f.call(c,c):(function (){var v = reagent.impl.component.get_argv(c);
var n = cljs.core.count(v);
var G__5884 = n;
switch (G__5884) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.protocols.as_element(compiler,res);
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_(res))?((function (c,compiler,f,_,res){
return (function() { 
var G__5886__delegate = function (args){
return reagent.impl.protocols.as_element(compiler,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__5886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5887__i = 0, G__5887__a = new Array(arguments.length -  0);
while (G__5887__i < G__5887__a.length) {G__5887__a[G__5887__i] = arguments[G__5887__i + 0]; ++G__5887__i;}
  args = new cljs.core.IndexedSeq(G__5887__a,0,null);
} 
return G__5886__delegate.call(this,args);};
G__5886.cljs$lang$maxFixedArity = 0;
G__5886.cljs$lang$applyTo = (function (arglist__5888){
var args = cljs.core.seq(arglist__5888);
return G__5886__delegate(args);
});
G__5886.cljs$core$IFn$_invoke$arity$variadic = G__5886__delegate;
return G__5886;
})()
;})(c,compiler,f,_,res))
:res);
(c.reagentRender = f__$1);

var G__5889 = c;
var G__5890 = compiler;
c = G__5889;
compiler = G__5890;
continue;
} else {
return res;

}
}
break;
}
});
reagent.impl.component.component_name = (function reagent$impl$component$component_name(c){
var or__5162__auto__ = (function (){var G__5891 = c;
var G__5891__$1 = (((G__5891 == null))?null:G__5891.constructor);
if((G__5891__$1 == null)){
return null;
} else {
return G__5891__$1.displayName;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var G__5892 = c;
var G__5892__$1 = (((G__5892 == null))?null:G__5892.constructor);
if((G__5892__$1 == null)){
return null;
} else {
return G__5892__$1.name;
}
}
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
return "";

});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c,compiler){
var _STAR_current_component_STAR__orig_val__5893 = reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__5894 = c;
(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__5894);

try{return reagent.impl.component.wrap_render(c,compiler);
}finally {(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__5893);
}});
reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$no_DASH_cache,true], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__5895 = key;
var G__5895__$1 = (((G__5895 instanceof cljs.core.Keyword))?G__5895.fqn:null);
switch (G__5895__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getDerivedStateFromProps":
return (function reagent$impl$component$custom_wrapper_$_getDerivedStateFromProps(props,state){
return f.call(null,(function (){var temp__5825__auto__ = props.argv;
if((temp__5825__auto__ == null)){
return props;
} else {
var a = temp__5825__auto__;
return reagent.impl.component.extract_props(a);
}
})(),state);
});

break;
case "getInitialState":
return (function reagent$impl$component$custom_wrapper_$_getInitialState(c){
return cljs.core.reset_BANG_(reagent.impl.component.state_atom(c),f.call(c,c));
});

break;
case "getSnapshotBeforeUpdate":
return (function reagent$impl$component$custom_wrapper_$_getSnapshotBeforeUpdate(oldprops,oldstate){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,oldprops),oldstate);
});

break;
case "componentWillReceiveProps":
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops));
});

break;
case "UNSAFE_componentWillReceiveProps":
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops));
});

break;
case "shouldComponentUpdate":
return (function reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__5162__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var c = this;
var old_argv = c.props.argv;
var new_argv = nextprops.argv;
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
var or__5162__auto____$1 = noargv;
if(or__5162__auto____$1){
return or__5162__auto____$1;
} else {
try{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv);
}catch (e5896){var e = e5896;

return false;
}}
} else {
if(noargv){
return f.call(c,c,reagent.impl.component.get_argv(c),reagent.impl.component.props_argv(c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});

break;
case "componentWillUpdate":
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops,nextstate){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops),nextstate);
});

break;
case "UNSAFE_componentWillUpdate":
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops,nextstate){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops),nextstate);
});

break;
case "componentDidUpdate":
return (function reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops,oldstate,snapshot){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,oldprops),oldstate,snapshot);
});

break;
case "componentWillMount":
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
return f.call(c,c);
});

break;
case "UNSAFE_componentWillMount":
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentDidMount":
return (function reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentWillUnmount":
return (function reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__5897_5899 = reagent.impl.component.goog$module$goog$object.get.call(null,c,"cljsRatom");
if((G__5897_5899 == null)){
} else {
reagent.ratom.dispose_BANG_(G__5897_5899);
}

reagent.impl.batching.mark_rendered(c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidCatch":
return (function reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});

break;
default:
return null;

}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f){
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__5160__auto__ = wrap;
if(cljs.core.truth_(and__5160__auto__)){
return f;
} else {
return and__5160__auto__;
}
})())){
} else {
}

var or__5162__auto__ = wrap;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return f;
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$shouldComponentUpdate,null,cljs.core.cst$kw$componentWillUnmount,null], null);
reagent.impl.component.dash_to_method_name = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_method_name);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((reagent.impl.component.dash_to_method_name.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_method_name.cljs$core$IFn$_invoke$arity$1(k) : reagent.impl.component.dash_to_method_name.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap,compiler){


var render_fun = (function (){var or__5162__auto__ = cljs.core.cst$kw$reagentRender.cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (cljs.core.cst$kw$reagentRender.cljs$core$IFn$_invoke$arity$1(fmap) == null);
var name = (function (){var or__5162__auto__ = cljs.core.cst$kw$displayName.cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = reagent.impl.util.fun_name(render_fun);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent")));
}
}
})();
var fmap__$1 = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v));
}),cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fmap__$1,cljs.core.cst$kw$displayName,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cljsLegacyRender,legacy_render,cljs.core.cst$kw$reagentRender,render_fun,cljs.core.cst$kw$render,(function reagent$impl$component$wrap_funs_$_render(){
var c = this;
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render(c,compiler);
} else {
var rat = reagent.impl.component.goog$module$goog$object.get.call(null,c,"cljsRatom");
reagent.impl.batching.mark_rendered(c);

if((rat == null)){
return reagent.ratom.run_in_reaction((function (){
return reagent.impl.component.do_render(c,compiler);
}),c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], 0));
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__5900 = o;
reagent.impl.component.goog$module$goog$object.set.call(null,G__5900,cljs.core.name(k),v);

return G__5900;
}),({}),m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body,compiler){
return reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body)),compiler);
});
reagent.impl.component.built_in_static_method_names = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$childContextTypes,cljs.core.cst$kw$contextTypes,cljs.core.cst$kw$contextType,cljs.core.cst$kw$getDerivedStateFromProps,cljs.core.cst$kw$getDerivedStateFromError], null);
/**
 * Creates JS class based on provided Clojure map.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in kebab-case or camelCase.
 *   Constructor function is defined using key `:getInitialState`.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body,compiler){

var body__$1 = reagent.impl.component.cljsify(body,compiler);
var methods$ = reagent.impl.component.map_to_js(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc,body__$1,cljs.core.cst$kw$displayName,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$constructor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$render,cljs.core.cst$kw$reagentRender,reagent.impl.component.built_in_static_method_names], 0)));
var static_methods = reagent.impl.component.map_to_js(cljs.core.select_keys(body__$1,reagent.impl.component.built_in_static_method_names));
var display_name = cljs.core.cst$kw$displayName.cljs$core$IFn$_invoke$arity$1(body__$1);
var get_initial_state = cljs.core.cst$kw$getInitialState.cljs$core$IFn$_invoke$arity$1(body__$1);
var construct = cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(body__$1);
var cmp = (function (props,context,updater){
var this$ = this;
reagent.impl.component.global$module$react.Component.call(this$,props,context,updater);

if(cljs.core.truth_(construct)){
(construct.cljs$core$IFn$_invoke$arity$2 ? construct.cljs$core$IFn$_invoke$arity$2(this$,props) : construct.call(null,this$,props));
} else {
}

if(cljs.core.truth_(get_initial_state)){
(this$.state = (get_initial_state.cljs$core$IFn$_invoke$arity$1 ? get_initial_state.cljs$core$IFn$_invoke$arity$1(this$) : get_initial_state.call(null,this$)));
} else {
}

(this$.cljsMountOrder = reagent.impl.batching.next_mount_count());

return this$;
});
reagent.impl.component.goog$module$goog$object.extend.call(null,cmp.prototype,reagent.impl.component.global$module$react.Component.prototype,methods$);

if(cljs.core.truth_(cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.render = cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$reagentRender.cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.reagentRender = cljs.core.cst$kw$reagentRender.cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$cljsLegacyRender.cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.cljsLegacyRender = cljs.core.cst$kw$cljsLegacyRender.cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

reagent.impl.component.goog$module$goog$object.extend.call(null,cmp,reagent.impl.component.global$module$react.Component,static_methods);

if(cljs.core.truth_(display_name)){
(cmp.displayName = display_name);

(cmp.cljs$lang$ctorStr = display_name);

(cmp.cljs$lang$ctorPrWriter = (function (this$,writer,opt){
return cljs.core._write(writer,display_name);
}));

Object.defineProperty(cmp,"name",({"value": display_name, "writable": false}));
} else {
}

(cmp.cljs$lang$type = true);

(cmp.prototype.constructor = cmp);

return cmp;
});
reagent.impl.component.cached_react_class = (function reagent$impl$component$cached_react_class(compiler,c){
return reagent.impl.component.goog$module$goog$object.get.call(null,c,reagent.impl.protocols.get_id(compiler));
});
reagent.impl.component.cache_react_class = (function reagent$impl$component$cache_react_class(compiler,c,constructor$){
reagent.impl.component.goog$module$goog$object.set.call(null,c,reagent.impl.protocols.get_id(compiler),constructor$);

return constructor$;
});
reagent.impl.component.fn_to_class = (function reagent$impl$component$fn_to_class(compiler,f){


if(reagent.impl.component.reagent_class_QMARK_(f)){
return reagent.impl.component.cache_react_class(compiler,f,f);
} else {
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$reagent_DASH_render,f);
var res = reagent.impl.component.create_class(withrender,compiler);
return reagent.impl.component.cache_react_class(compiler,f,res);
}
});
reagent.impl.component.as_class = (function reagent$impl$component$as_class(tag,compiler){
var temp__5825__auto__ = reagent.impl.component.cached_react_class(compiler,tag);
if((temp__5825__auto__ == null)){
return reagent.impl.component.fn_to_class(compiler,tag);
} else {
var cached_class = temp__5825__auto__;
return cached_class;
}
});
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp,compiler){
if(reagent.impl.component.react_class_QMARK_(comp)){
return comp;
} else {
return reagent.impl.component.as_class(comp,compiler);
}
});
reagent.impl.component.functional_wrap_render = (function reagent$impl$component$functional_wrap_render(compiler,c){
while(true){
var f = c.reagentRender;
var _ = null;
var argv = c.argv;
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,argv);
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.protocols.as_element(compiler,res);
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_(res))?((function (compiler,c,f,_,argv,res){
return (function() { 
var G__5901__delegate = function (args){
return reagent.impl.protocols.as_element(compiler,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__5901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5902__i = 0, G__5902__a = new Array(arguments.length -  0);
while (G__5902__i < G__5902__a.length) {G__5902__a[G__5902__i] = arguments[G__5902__i + 0]; ++G__5902__i;}
  args = new cljs.core.IndexedSeq(G__5902__a,0,null);
} 
return G__5901__delegate.call(this,args);};
G__5901.cljs$lang$maxFixedArity = 0;
G__5901.cljs$lang$applyTo = (function (arglist__5903){
var args = cljs.core.seq(arglist__5903);
return G__5901__delegate(args);
});
G__5901.cljs$core$IFn$_invoke$arity$variadic = G__5901__delegate;
return G__5901;
})()
;})(compiler,c,f,_,argv,res))
:res);
(c.reagentRender = f__$1);

var G__5904 = compiler;
var G__5905 = c;
compiler = G__5904;
c = G__5905;
continue;
} else {
return res;

}
}
break;
}
});
reagent.impl.component.functional_do_render = (function reagent$impl$component$functional_do_render(compiler,c){
var _STAR_current_component_STAR__orig_val__5906 = reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__5907 = c;
(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__5907);

try{return reagent.impl.component.functional_wrap_render(compiler,c);
}finally {(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__5906);
}});
reagent.impl.component.functional_render = (function reagent$impl$component$functional_render(compiler,jsprops){
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.functional_do_render(compiler,jsprops);
} else {
var argv = jsprops.argv;
var tag = jsprops.reagentRender;
var vec__5908 = reagent.impl.component.global$module$react.useState((0));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5908,(0),null);
var update_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5908,(1),null);
var state_ref = reagent.impl.component.global$module$react.useRef();
var ___$1 = (cljs.core.truth_(state_ref.current)?null:(function (){var obj = ({});
(obj.forceUpdate = (function (){
return (update_count.cljs$core$IFn$_invoke$arity$1 ? update_count.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : update_count.call(null,cljs.core.inc));
}));

(obj.cljsMountOrder = reagent.impl.batching.next_mount_count());

(obj.constructor = tag);

(obj.reagentRender = tag);

return (state_ref.current = obj);
})());
var reagent_state = state_ref.current;
var rat = reagent.impl.component.goog$module$goog$object.get.call(null,reagent_state,"cljsRatom");
var G__5911_5914 = (function reagent$impl$component$functional_render_$_mount(){
return (function reagent$impl$component$functional_render_$_mount_$_unmount(){
var G__5913 = reagent.impl.component.goog$module$goog$object.get.call(null,reagent_state,"cljsRatom");
if((G__5913 == null)){
return null;
} else {
return reagent.ratom.dispose_BANG_(G__5913);
}
});
});
var G__5912_5915 = [];
reagent.impl.component.global$module$react.useEffect(G__5911_5914,G__5912_5915);

(reagent_state.argv = argv);

reagent.impl.batching.mark_rendered(reagent_state);

if((rat == null)){
return reagent.ratom.run_in_reaction((function (){
return reagent.impl.component.functional_do_render(compiler,reagent_state);
}),reagent_state,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
});
reagent.impl.component.functional_render_memo_fn = (function reagent$impl$component$functional_render_memo_fn(prev_props,next_props){
var old_argv = prev_props.argv;
var new_argv = next_props.argv;
var and__5160__auto__ = reagent.impl.util._STAR_always_update_STAR_ === false;
if(and__5160__auto__){
try{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv);
}catch (e5916){var e = e5916;

return false;
}} else {
return and__5160__auto__;
}
});
/**
 * Create copy of functional-render with displayName set to name of the
 *   original Reagent component.
 */
reagent.impl.component.functional_render_fn = (function reagent$impl$component$functional_render_fn(compiler,tag){
var or__5162__auto__ = reagent.impl.component.cached_react_class(compiler,tag);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var f = (function (jsprops){
return reagent.impl.component.functional_render(compiler,jsprops);
});
var display_name = reagent.impl.util.fun_name(tag);
var _ = (f.displayName = display_name);
var ___$1 = Object.defineProperty(f,"name",({"value": display_name, "writable": false}));
var f__$1 = reagent.impl.component.global$module$react.memo(f,reagent.impl.component.functional_render_memo_fn);
reagent.impl.component.cache_react_class(compiler,tag,f__$1);

return f__$1;
}
});
