// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('re_frame.flow.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.trace');
goog.require('reagent.core');
re_frame.flow.alpha.db_path_QMARK_ = cljs.core.vector_QMARK_;
re_frame.flow.alpha.flow_QMARK_ = cljs.core.map_QMARK_;
re_frame.flow.alpha.flow_LT___QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_flow_LT__DASH_);
re_frame.flow.alpha.flows = re_frame.interop.ratom(cljs.core.PersistentArrayMap.EMPTY);
re_frame.flow.alpha.flow_states = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame.flow.alpha.input_ids = (function re_frame$flow$alpha$input_ids(p__7658){
var map__7659 = p__7658;
var map__7659__$1 = cljs.core.__destructure_map(map__7659);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7659__$1,cljs.core.cst$kw$inputs);
var live_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7659__$1,cljs.core.cst$kw$live_DASH_inputs);
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(re_frame.flow.alpha.db_path_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__7657_SHARP_){
var or__5162__auto__ = cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_flow_LT__DASH_.cljs$core$IFn$_invoke$arity$1(p1__7657_SHARP_);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return p1__7657_SHARP_;
}
}))),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(inputs),cljs.core.vals(live_inputs)))));
});
re_frame.flow.alpha.topsort = (function re_frame$flow$alpha$topsort(flows){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(flows,cljs.core.reverse(re_frame.utils.topsort_kahn(re_frame.utils.remove_orphans(re_frame.utils.map_vals(re_frame.flow.alpha.input_ids,flows)))));
});
re_frame.flow.alpha.topsort_STAR_ = re_frame.utils.memoize_one(re_frame.flow.alpha.topsort);
re_frame.flow.alpha.default$ = (function re_frame$flow$alpha$default(id){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$path,((cljs.core.sequential_QMARK_(id))?cljs.core.vec(id):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)),cljs.core.cst$kw$inputs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$output,cljs.core.constantly(true),cljs.core.cst$kw$live_QMARK_,cljs.core.constantly(true),cljs.core.cst$kw$live_DASH_inputs,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cleanup,re_frame.utils.deep_dissoc], null);
});
re_frame.flow.alpha.stale_in_flows = (function re_frame$flow$alpha$stale_in_flows(flows,p__7660){
var map__7661 = p__7660;
var map__7661__$1 = cljs.core.__destructure_map(map__7661);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7661__$1,cljs.core.cst$kw$inputs);
return cljs.core.reduce_kv((function (m,k,p__7662){
var map__7663 = p__7662;
var map__7663__$1 = cljs.core.__destructure_map(map__7663);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7663__$1,cljs.core.cst$kw$path);
var G__7664 = m;
if(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.vals(inputs)),path)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__7664,k,path);
} else {
return G__7664;
}
}),cljs.core.PersistentArrayMap.EMPTY,flows);
});
re_frame.flow.alpha.stale_out_flows = (function re_frame$flow$alpha$stale_out_flows(flows,p__7665){
var map__7666 = p__7665;
var map__7666__$1 = cljs.core.__destructure_map(map__7666);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7666__$1,cljs.core.cst$kw$path);
return cljs.core.reduce_kv((function (m,k,p__7667){
var map__7668 = p__7667;
var map__7668__$1 = cljs.core.__destructure_map(map__7668);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7668__$1,cljs.core.cst$kw$inputs);
var bad_inputs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([path]),cljs.core.val)),inputs);
var G__7669 = m;
if(cljs.core.seq(bad_inputs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__7669,k,bad_inputs);
} else {
return G__7669;
}
}),cljs.core.PersistentArrayMap.EMPTY,flows);
});
re_frame.flow.alpha.validate_inputs = (function re_frame$flow$alpha$validate_inputs(p__7670){
var map__7671 = p__7670;
var map__7671__$1 = cljs.core.__destructure_map(map__7671);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7671__$1,cljs.core.cst$kw$inputs);
if(cljs.core.truth_(cljs.core.some((function (p__7672){
var vec__7673 = p__7672;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7673,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7673,(1),null);
return cljs.core.not((function (){var fexpr__7676 = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.db_path_QMARK_,re_frame.flow.alpha.flow_LT___QMARK_);
return (fexpr__7676.cljs$core$IFn$_invoke$arity$1 ? fexpr__7676.cljs$core$IFn$_invoke$arity$1(input) : fexpr__7676.call(null,input));
})());
}),inputs))){
throw (new Error("bad input"));
} else {
return null;
}
});
re_frame.flow.alpha.warn_stale_dependencies = (function re_frame$flow$alpha$warn_stale_dependencies(flows,new_flow){
var ins = re_frame.flow.alpha.stale_in_flows(flows,new_flow);
var outs = re_frame.flow.alpha.stale_out_flows(flows,new_flow);
var warn_ins = (function (p__7677){
var vec__7678 = p__7677;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7678,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7678,(1),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Input",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)),"matches the output path of",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),".\n","  For an explicit dependency, change it to (re-frame/flow<-",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+")."),"\n"], null);
});
var warn_outs = (function (p__7681){
var vec__7682 = p__7681;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7682,(0),null);
var inputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7682,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__7685){
var vec__7686 = p__7685;
var input_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7686,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7686,(1),null);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Output",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(new_flow))),"matches the input",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_id)),"of the flow",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".\n"),"  For an explicit dependency, change that input to","(re-frame/flow<-",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_flow))+")."),"\n"], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inputs], 0));
});
var warnings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(warn_ins,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ins], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(warn_outs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([outs], 0)));
if(cljs.core.seq(warnings)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(re_frame.loggers.console,cljs.core.cst$kw$warn,"Warning: You called `reg-flow` with the flow",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_flow))),"but this created stale dependencies.\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Your flows may not evaluate in the correct order.\n",warnings], 0));
} else {
return null;
}
});
re_frame.flow.alpha.reg_flow = (function re_frame$flow$alpha$reg_flow(var_args){
var G__7690 = arguments.length;
switch (G__7690) {
case 2:
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2 = (function (k,m){
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$id,k));
}));

(re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1 = (function (m){
re_frame.flow.alpha.validate_inputs(m);

re_frame.flow.alpha.warn_stale_dependencies(cljs.core.deref(re_frame.flow.alpha.flows),m);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flow_states,cljs.core.update,cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_registered,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(m)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.flow.alpha.flows,cljs.core.assoc,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(m),cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frame.flow.alpha.default$(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(m)),m], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_ref,reagent.ratom.make_reaction((function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(m));
}))], null)));
}));

(re_frame.flow.alpha.reg_flow.cljs$lang$maxFixedArity = 2);

re_frame.flow.alpha.clear_flow = (function re_frame$flow$alpha$clear_flow(var_args){
var G__7693 = arguments.length;
switch (G__7693) {
case 0:
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0 = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flows,cljs.core.empty);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flow_states,cljs.core.update,cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_cleared,cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(re_frame.flow.alpha.flows)], 0));
}));

(re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1 = (function (id){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.flow.alpha.flows),id);
if(cljs.core.truth_(temp__5823__auto__)){
var flow = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.flows,cljs.core.dissoc,id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flow_states,cljs.core.update,cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_cleared,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(flow),flow], 0));
} else {
return null;
}
}));

(re_frame.flow.alpha.clear_flow.cljs$lang$maxFixedArity = 1);

re_frame.flow.alpha.flow_LT__ = (function re_frame$flow$alpha$flow_LT__(id){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_flow_LT__DASH_,id], null);
});
re_frame.flow.alpha.flow_fx_ids = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$clear_DASH_flow,null,cljs.core.cst$kw$reg_DASH_flow,null], null), null);
re_frame.flow.alpha.do_effect = (function re_frame$flow$alpha$do_effect(p__7695){
var vec__7696 = p__7695;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7696,(1),null);
var handler = (function (){var G__7699 = k;
var G__7699__$1 = (((G__7699 instanceof cljs.core.Keyword))?G__7699.fqn:null);
switch (G__7699__$1) {
case "reg-flow":
return re_frame.flow.alpha.reg_flow;

break;
case "clear-flow":
return re_frame.flow.alpha.clear_flow;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7699__$1))));

}
})();
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(v) : handler.call(null,v));
});
re_frame.flow.alpha.remove_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flow_fx_ids,cljs.core.first));
re_frame.flow.alpha.dissoc_fx = (function re_frame$flow$alpha$dissoc_fx(p1__7701_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__7701_SHARP_,re_frame.flow.alpha.flow_fx_ids);
});
re_frame.flow.alpha.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_flow_DASH_fx,cljs.core.cst$kw$after,(function (p__7702){
var map__7703 = p__7702;
var map__7703__$1 = cljs.core.__destructure_map(map__7703);
var ctx = map__7703__$1;
var map__7704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7703__$1,cljs.core.cst$kw$effects);
var map__7704__$1 = cljs.core.__destructure_map(map__7704);
var effects = map__7704__$1;
var fx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7704__$1,cljs.core.cst$kw$fx);
var flow_fx = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(effects,re_frame.flow.alpha.flow_fx_ids),cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flow_fx_ids,cljs.core.first),fx));
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.do_effect,flow_fx));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$effects,cljs.core.cst$kw$fx], null),re_frame.flow.alpha.remove_fx),cljs.core.cst$kw$effects,re_frame.flow.alpha.dissoc_fx);
})], null)], 0));
re_frame.flow.alpha.resolve_input = (function re_frame$flow$alpha$resolve_input(db,flows,input){
if(cljs.core.vector_QMARK_(input)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,input);
} else {
var G__7705 = input;
var G__7705__$1 = (((G__7705 == null))?null:cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_flow_LT__DASH_.cljs$core$IFn$_invoke$arity$1(G__7705));
var G__7705__$2 = (((G__7705__$1 == null))?null:(flows.cljs$core$IFn$_invoke$arity$1 ? flows.cljs$core$IFn$_invoke$arity$1(G__7705__$1) : flows.call(null,G__7705__$1)));
var G__7705__$3 = (((G__7705__$2 == null))?null:cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__7705__$2));
if((G__7705__$3 == null)){
return null;
} else {
return (re_frame.flow.alpha.resolve_input.cljs$core$IFn$_invoke$arity$3 ? re_frame.flow.alpha.resolve_input.cljs$core$IFn$_invoke$arity$3(db,flows,G__7705__$3) : re_frame.flow.alpha.resolve_input.call(null,db,flows,G__7705__$3));
}
}
});
re_frame.flow.alpha.resolve_inputs = (function re_frame$flow$alpha$resolve_inputs(db,flows,inputs){
if(cljs.core.empty_QMARK_(inputs)){
return db;
} else {
return re_frame.utils.map_vals(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.resolve_input,db,flows),inputs);
}
});
re_frame.flow.alpha.run = (function re_frame$flow$alpha$run(ctx,p__7706){
var map__7707 = p__7706;
var map__7707__$1 = cljs.core.__destructure_map(map__7707);
var flow = map__7707__$1;
var live_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7707__$1,cljs.core.cst$kw$live_QMARK_);
var cleanup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7707__$1,cljs.core.cst$kw$cleanup);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7707__$1,cljs.core.cst$kw$path);
var cleared_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7707__$1,cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_cleared_QMARK_);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7707__$1,cljs.core.cst$kw$output);
var flow_fx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7707__$1,cljs.core.cst$kw$fx);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7707__$1,cljs.core.cst$kw$inputs);
var live_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7707__$1,cljs.core.cst$kw$live_DASH_inputs);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7707__$1,cljs.core.cst$kw$id);
var new_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_registered.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.flow.alpha.flow_states)),id);
var old_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,cljs.core.cst$kw$db);
var db = (function (){var or__5162__auto__ = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(ctx,cljs.core.cst$kw$db);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return old_db;
}
})();
var fx = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(ctx,cljs.core.cst$kw$fx);
var id__GT_old_in = re_frame.flow.alpha.resolve_inputs(old_db,cljs.core.cst$kw$flows.cljs$core$IFn$_invoke$arity$1(ctx),inputs);
var id__GT_in = re_frame.flow.alpha.resolve_inputs(db,cljs.core.cst$kw$flows.cljs$core$IFn$_invoke$arity$1(ctx),inputs);
var dirty_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id__GT_in,id__GT_old_in);
var id__GT_old_live_in = re_frame.flow.alpha.resolve_inputs(old_db,cljs.core.cst$kw$flows.cljs$core$IFn$_invoke$arity$1(ctx),live_inputs);
var id__GT_live_in = re_frame.flow.alpha.resolve_inputs(db,cljs.core.cst$kw$flows.cljs$core$IFn$_invoke$arity$1(ctx),live_inputs);
var old_output = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_db,path);
var bardo = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((new_QMARK_)?cljs.core.cst$kw$registered:(cljs.core.truth_((function (){var G__7708 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id__GT_old_live_in,cljs.core.cst$kw$db,old_db);
return (live_QMARK_.cljs$core$IFn$_invoke$arity$1 ? live_QMARK_.cljs$core$IFn$_invoke$arity$1(G__7708) : live_QMARK_.call(null,G__7708));
})())?cljs.core.cst$kw$live:cljs.core.cst$kw$dead
)),(cljs.core.truth_(cleared_QMARK_)?cljs.core.cst$kw$cleared:(cljs.core.truth_((function (){var G__7709 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id__GT_live_in,cljs.core.cst$kw$db,db);
return (live_QMARK_.cljs$core$IFn$_invoke$arity$1 ? live_QMARK_.cljs$core$IFn$_invoke$arity$1(G__7709) : live_QMARK_.call(null,G__7709));
})())?cljs.core.cst$kw$live:cljs.core.cst$kw$dead
))], null);
var new_db = (function (){var G__7710 = bardo;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$live,cljs.core.cst$kw$live], null),G__7710)){
var G__7711 = db;
if(dirty_QMARK_){
return cljs.core.assoc_in(G__7711,path,(output.cljs$core$IFn$_invoke$arity$3 ? output.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : output.call(null,id__GT_in,id__GT_old_in,old_output)));
} else {
return G__7711;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$live,cljs.core.cst$kw$dead], null),G__7710)){
return (cleanup.cljs$core$IFn$_invoke$arity$2 ? cleanup.cljs$core$IFn$_invoke$arity$2(db,path) : cleanup.call(null,db,path));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dead,cljs.core.cst$kw$live], null),G__7710)){
return cljs.core.assoc_in(db,path,(output.cljs$core$IFn$_invoke$arity$3 ? output.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : output.call(null,id__GT_in,id__GT_old_in,old_output)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$registered,cljs.core.cst$kw$live], null),G__7710)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flow_states,cljs.core.update,cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_registered,cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

return cljs.core.assoc_in(db,path,(output.cljs$core$IFn$_invoke$arity$3 ? output.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : output.call(null,id__GT_in,id__GT_old_in,old_output)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$live,cljs.core.cst$kw$cleared], null),G__7710)){
return (cleanup.cljs$core$IFn$_invoke$arity$2 ? cleanup.cljs$core$IFn$_invoke$arity$2(db,path) : cleanup.call(null,db,path));
} else {
return null;

}
}
}
}
}
})();
var new_fx = (cljs.core.truth_(flow_fx)?(function (){var G__7712 = bardo;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$live,cljs.core.cst$kw$live], null),G__7712)){
if(dirty_QMARK_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fx,(flow_fx.cljs$core$IFn$_invoke$arity$3 ? flow_fx.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : flow_fx.call(null,id__GT_in,id__GT_old_in,old_output)));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dead,cljs.core.cst$kw$live], null),G__7712)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fx,(flow_fx.cljs$core$IFn$_invoke$arity$3 ? flow_fx.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : flow_fx.call(null,id__GT_in,id__GT_old_in,old_output)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$registered,cljs.core.cst$kw$live], null),G__7712)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fx,(flow_fx.cljs$core$IFn$_invoke$arity$3 ? flow_fx.cljs$core$IFn$_invoke$arity$3(id__GT_in,id__GT_old_in,old_output) : flow_fx.call(null,id__GT_in,id__GT_old_in,old_output)));
} else {
return null;

}
}
}
})():null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7713 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7714 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,id,cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$flow,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$flow_DASH_spec,flow,cljs.core.cst$kw$transition,bardo,cljs.core.cst$kw$db,db,cljs.core.cst$kw$new_DASH_db,new_db,cljs.core.cst$kw$id_DASH__GT_in,id__GT_in,cljs.core.cst$kw$id_DASH__GT_old_DASH_in,id__GT_old_in,cljs.core.cst$kw$id_DASH__GT_live_DASH_in,id__GT_live_in,cljs.core.cst$kw$id_DASH__GT_old_DASH_live_DASH_in,id__GT_old_live_in], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7714);

try{try{var G__7715 = ctx;
var G__7715__$1 = (cljs.core.truth_(new_db)?re_frame.interceptor.assoc_effect(G__7715,cljs.core.cst$kw$db,new_db):G__7715);
if(cljs.core.truth_(new_fx)){
return re_frame.interceptor.assoc_effect(G__7715__$1,cljs.core.cst$kw$fx,new_fx);
} else {
return G__7715__$1;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7092__auto___7717 = re_frame.interop.now();
var duration__7093__auto___7718 = (end__7092__auto___7717 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__7094__auto___7719 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7093__auto___7718,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,end__7092__auto___7717], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__7094__auto___7719);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__7094__auto___7719);

re_frame.trace.run_tracing_callbacks_BANG_(end__7092__auto___7717);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7713);
}} else {
var G__7716 = ctx;
var G__7716__$1 = (cljs.core.truth_(new_db)?re_frame.interceptor.assoc_effect(G__7716,cljs.core.cst$kw$db,new_db):G__7716);
if(cljs.core.truth_(new_fx)){
return re_frame.interceptor.assoc_effect(G__7716__$1,cljs.core.cst$kw$fx,new_fx);
} else {
return G__7716__$1;
}
}
});
re_frame.flow.alpha.with_cleared = (function re_frame$flow$alpha$with_cleared(m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_vals(cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_cleared.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.flow.alpha.flow_states)),(function (p1__7720_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7720_SHARP_,cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_cleared_QMARK_,true);
})),m], 0));
});
re_frame.flow.alpha.interceptor = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$flow,cljs.core.cst$kw$after,cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (ctx){
var all_flows = re_frame.flow.alpha.with_cleared(cljs.core.deref(re_frame.flow.alpha.flows));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.flow_states,cljs.core.dissoc,cljs.core.cst$kw$re_DASH_frame$flow$alpha_SLASH_cleared);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.run,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$flows,all_flows),(re_frame.flow.alpha.topsort_STAR_.cljs$core$IFn$_invoke$arity$1 ? re_frame.flow.alpha.topsort_STAR_.cljs$core$IFn$_invoke$arity$1(all_flows) : re_frame.flow.alpha.topsort_STAR_.call(null,all_flows)));
}),(function (p__7721){
var map__7722 = p__7721;
var map__7722__$1 = cljs.core.__destructure_map(map__7722);
var ctx = map__7722__$1;
var map__7723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7722__$1,cljs.core.cst$kw$effects);
var map__7723__$1 = cljs.core.__destructure_map(map__7723);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7723__$1,cljs.core.cst$kw$db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$re_DASH_frame_SLASH_pre_DASH_flow_DASH_db,db);
}))], null)], 0));
