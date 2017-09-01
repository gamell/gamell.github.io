// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__31127 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__31128 = null;
var count__31129 = (0);
var i__31130 = (0);
while(true){
if((i__31130 < count__31129)){
var vec__31131 = cljs.core._nth.call(null,chunk__31128,i__31130);
var effect_key = cljs.core.nth.call(null,vec__31131,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31131,(1),null);
var temp__4655__auto___31137 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31137)){
var effect_fn_31138 = temp__4655__auto___31137;
effect_fn_31138.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31139 = seq__31127;
var G__31140 = chunk__31128;
var G__31141 = count__31129;
var G__31142 = (i__31130 + (1));
seq__31127 = G__31139;
chunk__31128 = G__31140;
count__31129 = G__31141;
i__31130 = G__31142;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31127);
if(temp__4657__auto__){
var seq__31127__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31127__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31127__$1);
var G__31143 = cljs.core.chunk_rest.call(null,seq__31127__$1);
var G__31144 = c__29125__auto__;
var G__31145 = cljs.core.count.call(null,c__29125__auto__);
var G__31146 = (0);
seq__31127 = G__31143;
chunk__31128 = G__31144;
count__31129 = G__31145;
i__31130 = G__31146;
continue;
} else {
var vec__31134 = cljs.core.first.call(null,seq__31127__$1);
var effect_key = cljs.core.nth.call(null,vec__31134,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31134,(1),null);
var temp__4655__auto___31147 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31147)){
var effect_fn_31148 = temp__4655__auto___31147;
effect_fn_31148.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__31149 = cljs.core.next.call(null,seq__31127__$1);
var G__31150 = null;
var G__31151 = (0);
var G__31152 = (0);
seq__31127 = G__31149;
chunk__31128 = G__31150;
count__31129 = G__31151;
i__31130 = G__31152;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__31153 = cljs.core.seq.call(null,value);
var chunk__31154 = null;
var count__31155 = (0);
var i__31156 = (0);
while(true){
if((i__31156 < count__31155)){
var map__31157 = cljs.core._nth.call(null,chunk__31154,i__31156);
var map__31157__$1 = ((((!((map__31157 == null)))?((((map__31157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31157):map__31157);
var effect = map__31157__$1;
var ms = cljs.core.get.call(null,map__31157__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31157__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31153,chunk__31154,count__31155,i__31156,map__31157,map__31157__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31153,chunk__31154,count__31155,i__31156,map__31157,map__31157__$1,effect,ms,dispatch))
,ms);
}

var G__31161 = seq__31153;
var G__31162 = chunk__31154;
var G__31163 = count__31155;
var G__31164 = (i__31156 + (1));
seq__31153 = G__31161;
chunk__31154 = G__31162;
count__31155 = G__31163;
i__31156 = G__31164;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31153);
if(temp__4657__auto__){
var seq__31153__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31153__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31153__$1);
var G__31165 = cljs.core.chunk_rest.call(null,seq__31153__$1);
var G__31166 = c__29125__auto__;
var G__31167 = cljs.core.count.call(null,c__29125__auto__);
var G__31168 = (0);
seq__31153 = G__31165;
chunk__31154 = G__31166;
count__31155 = G__31167;
i__31156 = G__31168;
continue;
} else {
var map__31159 = cljs.core.first.call(null,seq__31153__$1);
var map__31159__$1 = ((((!((map__31159 == null)))?((((map__31159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31159):map__31159);
var effect = map__31159__$1;
var ms = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31153,chunk__31154,count__31155,i__31156,map__31159,map__31159__$1,effect,ms,dispatch,seq__31153__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31153,chunk__31154,count__31155,i__31156,map__31159,map__31159__$1,effect,ms,dispatch,seq__31153__$1,temp__4657__auto__))
,ms);
}

var G__31169 = cljs.core.next.call(null,seq__31153__$1);
var G__31170 = null;
var G__31171 = (0);
var G__31172 = (0);
seq__31153 = G__31169;
chunk__31154 = G__31170;
count__31155 = G__31171;
i__31156 = G__31172;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__31173 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__31174 = null;
var count__31175 = (0);
var i__31176 = (0);
while(true){
if((i__31176 < count__31175)){
var event = cljs.core._nth.call(null,chunk__31174,i__31176);
re_frame.router.dispatch.call(null,event);

var G__31177 = seq__31173;
var G__31178 = chunk__31174;
var G__31179 = count__31175;
var G__31180 = (i__31176 + (1));
seq__31173 = G__31177;
chunk__31174 = G__31178;
count__31175 = G__31179;
i__31176 = G__31180;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31173);
if(temp__4657__auto__){
var seq__31173__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31173__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31173__$1);
var G__31181 = cljs.core.chunk_rest.call(null,seq__31173__$1);
var G__31182 = c__29125__auto__;
var G__31183 = cljs.core.count.call(null,c__29125__auto__);
var G__31184 = (0);
seq__31173 = G__31181;
chunk__31174 = G__31182;
count__31175 = G__31183;
i__31176 = G__31184;
continue;
} else {
var event = cljs.core.first.call(null,seq__31173__$1);
re_frame.router.dispatch.call(null,event);

var G__31185 = cljs.core.next.call(null,seq__31173__$1);
var G__31186 = null;
var G__31187 = (0);
var G__31188 = (0);
seq__31173 = G__31185;
chunk__31174 = G__31186;
count__31175 = G__31187;
i__31176 = G__31188;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__31189 = cljs.core.seq.call(null,value);
var chunk__31190 = null;
var count__31191 = (0);
var i__31192 = (0);
while(true){
if((i__31192 < count__31191)){
var event = cljs.core._nth.call(null,chunk__31190,i__31192);
clear_event.call(null,event);

var G__31193 = seq__31189;
var G__31194 = chunk__31190;
var G__31195 = count__31191;
var G__31196 = (i__31192 + (1));
seq__31189 = G__31193;
chunk__31190 = G__31194;
count__31191 = G__31195;
i__31192 = G__31196;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31189);
if(temp__4657__auto__){
var seq__31189__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31189__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__31189__$1);
var G__31197 = cljs.core.chunk_rest.call(null,seq__31189__$1);
var G__31198 = c__29125__auto__;
var G__31199 = cljs.core.count.call(null,c__29125__auto__);
var G__31200 = (0);
seq__31189 = G__31197;
chunk__31190 = G__31198;
count__31191 = G__31199;
i__31192 = G__31200;
continue;
} else {
var event = cljs.core.first.call(null,seq__31189__$1);
clear_event.call(null,event);

var G__31201 = cljs.core.next.call(null,seq__31189__$1);
var G__31202 = null;
var G__31203 = (0);
var G__31204 = (0);
seq__31189 = G__31201;
chunk__31190 = G__31202;
count__31191 = G__31203;
i__31192 = G__31204;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1504275001610
