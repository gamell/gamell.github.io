// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.events');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flush_DASH_dom,(function (f){
var G__7376 = (function (){
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(f) : re_frame.interop.next_tick.call(null,f));
});
return (re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1(G__7376) : re_frame.interop.after_render.call(null,G__7376));
}),cljs.core.cst$kw$yield,re_frame.interop.next_tick], null);

/**
 * @interface
 */
re_frame.router.IEventQueue = function(){};

var re_frame$router$IEventQueue$push$dyn_7377 = (function (this$,event){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router.push[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5520__auto__.call(null,this$,event));
} else {
var m__5518__auto__ = (re_frame.router.push["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5518__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
});
re_frame.router.push = (function re_frame$router$push(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$push$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$push$dyn_7377(this$,event);
}
});

var re_frame$router$IEventQueue$add_post_event_callback$dyn_7378 = (function (this$,id,callback_fn){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router.add_post_event_callback[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback_fn) : m__5520__auto__.call(null,this$,id,callback_fn));
} else {
var m__5518__auto__ = (re_frame.router.add_post_event_callback["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback_fn) : m__5518__auto__.call(null,this$,id,callback_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
});
re_frame.router.add_post_event_callback = (function re_frame$router$add_post_event_callback(this$,id,callback_fn){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))))){
return this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callback_fn);
} else {
return re_frame$router$IEventQueue$add_post_event_callback$dyn_7378(this$,id,callback_fn);
}
});

var re_frame$router$IEventQueue$remove_post_event_callback$dyn_7379 = (function (this$,id){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router.remove_post_event_callback[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5520__auto__.call(null,this$,id));
} else {
var m__5518__auto__ = (re_frame.router.remove_post_event_callback["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5518__auto__.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
});
re_frame.router.remove_post_event_callback = (function re_frame$router$remove_post_event_callback(this$,id){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,id);
} else {
return re_frame$router$IEventQueue$remove_post_event_callback$dyn_7379(this$,id);
}
});

var re_frame$router$IEventQueue$purge$dyn_7380 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router.purge[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (re_frame.router.purge["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.purge",this$);
}
}
});
re_frame.router.purge = (function re_frame$router$purge(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$purge$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$purge$arity$1(this$);
} else {
return re_frame$router$IEventQueue$purge$dyn_7380(this$);
}
});

var re_frame$router$IEventQueue$_fsm_trigger$dyn_7381 = (function (this$,trigger,arg){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5520__auto__.call(null,this$,trigger,arg));
} else {
var m__5518__auto__ = (re_frame.router._fsm_trigger["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5518__auto__.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
});
re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
return re_frame$router$IEventQueue$_fsm_trigger$dyn_7381(this$,trigger,arg);
}
});

var re_frame$router$IEventQueue$_add_event$dyn_7382 = (function (this$,event){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router._add_event[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5520__auto__.call(null,this$,event));
} else {
var m__5518__auto__ = (re_frame.router._add_event["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5518__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
});
re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$_add_event$dyn_7382(this$,event);
}
});

var re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_7383 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router._process_1st_event_in_queue[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (re_frame.router._process_1st_event_in_queue["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue",this$);
}
}
});
re_frame.router._process_1st_event_in_queue = (function re_frame$router$_process_1st_event_in_queue(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_process_1st_event_in_queue$dyn_7383(this$);
}
});

var re_frame$router$IEventQueue$_run_next_tick$dyn_7384 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (re_frame.router._run_next_tick["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
});
re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_run_next_tick$dyn_7384(this$);
}
});

var re_frame$router$IEventQueue$_run_queue$dyn_7385 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router._run_queue[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (re_frame.router._run_queue["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
});
re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_run_queue$dyn_7385(this$);
}
});

var re_frame$router$IEventQueue$_exception$dyn_7386 = (function (this$,ex){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router._exception[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5520__auto__.call(null,this$,ex));
} else {
var m__5518__auto__ = (re_frame.router._exception["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5518__auto__.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
});
re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
return re_frame$router$IEventQueue$_exception$dyn_7386(this$,ex);
}
});

var re_frame$router$IEventQueue$_pause$dyn_7387 = (function (this$,later_fn){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router._pause[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5520__auto__.call(null,this$,later_fn));
} else {
var m__5518__auto__ = (re_frame.router._pause["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5518__auto__.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
});
re_frame.router._pause = (function re_frame$router$_pause(this$,later_fn){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_pause$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
return re_frame$router$IEventQueue$_pause$dyn_7387(this$,later_fn);
}
});

var re_frame$router$IEventQueue$_resume$dyn_7388 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router._resume[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (re_frame.router._resume["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
});
re_frame.router._resume = (function re_frame$router$_resume(this$){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_resume$arity$1 == null)))))){
return this$.re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
return re_frame$router$IEventQueue$_resume$dyn_7388(this$);
}
});

var re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_7389 = (function (this$,event){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (re_frame.router._call_post_event_callbacks[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5520__auto__.call(null,this$,event));
} else {
var m__5518__auto__ = (re_frame.router._call_post_event_callbacks["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5518__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks",this$);
}
}
});
re_frame.router._call_post_event_callbacks = (function re_frame$router$_call_post_event_callbacks(this$,event){
if((((!((this$ == null)))) && ((!((this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))))){
return this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
return re_frame$router$IEventQueue$_call_post_event_callbacks$dyn_7389(this$,event);
}
});


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$finish_DASH_run,null);
} else {
var temp__5821__auto__ = cljs.core.some(re_frame.router.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__5821__auto__)){
var later_fn = temp__5821__auto__;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$pause,later_fn);
} else {
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

var G__7415 = (n - (1));
n = G__7415;
continue;
}
}
break;
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: could not remove post event call back with id:",id], 0));
} else {
return (self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id));
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return (self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$add_DASH_event,event);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__7390 = (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$run_DASH_queue,null);
});
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__7390) : re_frame.interop.next_tick.call(null,G__7390));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7391 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7392 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$re_DASH_frame$router_SLASH_fsm_DASH_trigger], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7392);

try{try{var vec__7393 = (function (){var G__7396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,cljs.core.cst$kw$add_DASH_event], null),G__7396)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__7396)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,(function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__7396)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause], null),G__7396)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,(function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$resume], null),G__7396)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$run_DASH_queue], null),G__7396)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__7396)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__7396)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__7396)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"re-frame: router state transition not found. "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fsm_DASH_state,self__.fsm_state,cljs.core.cst$kw$trigger,trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7393,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7393,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7416 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7416);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7092__auto___7417 = re_frame.interop.now();
var duration__7093__auto___7418 = (end__7092__auto___7417 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__7094__auto___7419 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7093__auto___7418,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,end__7092__auto___7417], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__7094__auto___7419);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__7094__auto___7419);

re_frame.trace.run_tracing_callbacks_BANG_(end__7092__auto___7417);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7391);
}} else {
var vec__7397 = (function (){var G__7400 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,cljs.core.cst$kw$add_DASH_event], null),G__7400)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__7400)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,(function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__7400)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause], null),G__7400)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,(function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$resume], null),G__7400)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$run_DASH_queue], null),G__7400)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__7400)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__7400)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__7400)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,(function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"re-frame: router state transition not found. "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fsm_DASH_state,self__.fsm_state,cljs.core.cst$kw$trigger,trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7397,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7397,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__7095__auto___7420 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null),cljs.core.cst$kw$tags)], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__7095__auto___7420);

} else {
}

(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__7401 = (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$resume,null);
});
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__7401) : later_fn.call(null,G__7401));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: overwriting existing post event call back with id:",id], 0));
} else {
}

return (self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn));
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{var _STAR_handling_STAR__orig_val__7403_7421 = re_frame.events._STAR_handling_STAR_;
var _STAR_current_dispatch_id_STAR__orig_val__7404_7422 = re_frame.events._STAR_current_dispatch_id_STAR_;
var _STAR_on_dispatch_id_STAR__orig_val__7405_7423 = re_frame.events._STAR_on_dispatch_id_STAR_;
var _STAR_current_trace_STAR__orig_val__7406_7424 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_handling_STAR__temp_val__7407_7425 = null;
var _STAR_current_dispatch_id_STAR__temp_val__7408_7426 = null;
var _STAR_on_dispatch_id_STAR__temp_val__7409_7427 = null;
var _STAR_current_trace_STAR__temp_val__7410_7428 = null;
(re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__temp_val__7407_7425);

(re_frame.events._STAR_current_dispatch_id_STAR_ = _STAR_current_dispatch_id_STAR__temp_val__7408_7426);

(re_frame.events._STAR_on_dispatch_id_STAR_ = _STAR_on_dispatch_id_STAR__temp_val__7409_7427);

(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7410_7428);

try{re_frame.events.handle(event_v);
}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7406_7424);

(re_frame.events._STAR_on_dispatch_id_STAR_ = _STAR_on_dispatch_id_STAR__orig_val__7405_7423);

(re_frame.events._STAR_current_dispatch_id_STAR_ = _STAR_current_dispatch_id_STAR__orig_val__7404_7422);

(re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__orig_val__7403_7421);
}
(self__.queue = cljs.core.pop(self__.queue));

return this$__$1.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);
}catch (e7402){var ex = e7402;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$exception,ex);
}}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__7411 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__7412 = null;
var count__7413 = (0);
var i__7414 = (0);
while(true){
if((i__7414 < count__7413)){
var callback = chunk__7412.cljs$core$IIndexed$_nth$arity$2(null,i__7414);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__7429 = seq__7411;
var G__7430 = chunk__7412;
var G__7431 = count__7413;
var G__7432 = (i__7414 + (1));
seq__7411 = G__7429;
chunk__7412 = G__7430;
count__7413 = G__7431;
i__7414 = G__7432;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7411);
if(temp__5823__auto__){
var seq__7411__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7411__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__7411__$1);
var G__7433 = cljs.core.chunk_rest(seq__7411__$1);
var G__7434 = c__5694__auto__;
var G__7435 = cljs.core.count(c__5694__auto__);
var G__7436 = (0);
seq__7411 = G__7433;
chunk__7412 = G__7434;
count__7413 = G__7435;
i__7414 = G__7436;
continue;
} else {
var callback = cljs.core.first(seq__7411__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__7437 = cljs.core.next(seq__7411__$1);
var G__7438 = null;
var G__7439 = (0);
var G__7440 = (0);
seq__7411 = G__7437;
chunk__7412 = G__7438;
count__7413 = G__7439;
i__7414 = G__7440;
continue;
}
} else {
return null;
}
}
break;
}
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$purge$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.queue = re_frame.interop.empty_queue);
}));

(re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (this$,ex){
var self__ = this;
var this$__$1 = this;
this$__$1.re_frame$router$IEventQueue$purge$arity$1(null);

throw ex;
}));

(re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fsm_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$queue,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$post_DASH_event_DASH_callback_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
}));

(re_frame.router.EventQueue.cljs$lang$type = true);

(re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue");

(re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"re-frame.router/EventQueue");
}));

/**
 * Positional factory function for re-frame.router/EventQueue.
 */
re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

re_frame.router.event_queue = re_frame.router.__GT_EventQueue(cljs.core.cst$kw$idle,re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
re_frame.router.can_carry_meta_QMARK_ = (function re_frame$router$can_carry_meta_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWithMeta$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x);
}
});
re_frame.router.inherit_event_meta = (function re_frame$router$inherit_event_meta(var_args){
var G__7443 = arguments.length;
switch (G__7443) {
case 3:
return re_frame.router.inherit_event_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_frame.router.inherit_event_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.router.inherit_event_meta.cljs$core$IFn$_invoke$arity$3 = (function (event,k,v){
return re_frame.router.inherit_event_meta.cljs$core$IFn$_invoke$arity$4(event,k,v,true);
}));

(re_frame.router.inherit_event_meta.cljs$core$IFn$_invoke$arity$4 = (function (event,k,v,overwrite_QMARK_){
if(cljs.core.truth_((function (){var or__5162__auto__ = (v == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = (function (){var and__5160__auto__ = cljs.core.not(overwrite_QMARK_);
if(and__5160__auto__){
var G__7444 = event;
var G__7444__$1 = (((G__7444 == null))?null:cljs.core.meta(G__7444));
if((G__7444__$1 == null)){
return null;
} else {
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__7444__$1) : k.call(null,G__7444__$1));
}
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return (!(re_frame.router.can_carry_meta_QMARK_(event)));
}
}
})())){
return event;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(event,cljs.core.assoc,k,v);
}
}));

(re_frame.router.inherit_event_meta.cljs$lang$maxFixedArity = 4);

re_frame.router.tag_with_parent_dispatch_id = (function re_frame$router$tag_with_parent_dispatch_id(event){
return re_frame.router.inherit_event_meta.cljs$core$IFn$_invoke$arity$3(event,cljs.core.cst$kw$re_DASH_frame_SLASH_parent_DASH_dispatch_DASH_id,re_frame.events._STAR_current_dispatch_id_STAR_);
});
re_frame.router.tag_with_fx_overrides = (function re_frame$router$tag_with_fx_overrides(event){
return re_frame.router.inherit_event_meta.cljs$core$IFn$_invoke$arity$4(event,cljs.core.cst$kw$re_DASH_frame_SLASH_fx_DASH_overrides,(function (){var G__7446 = re_frame.events._STAR_handling_STAR_;
var G__7446__$1 = (((G__7446 == null))?null:cljs.core.meta(G__7446));
if((G__7446__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$re_DASH_frame_SLASH_fx_DASH_overrides.cljs$core$IFn$_invoke$arity$1(G__7446__$1);
}
})(),false);
});
re_frame.router.dispatch = (function re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
re_frame.router.event_queue.re_frame$router$IEventQueue$push$arity$2(null,(function (){var G__7447 = event;
var G__7447__$1 = (cljs.core.truth_(re_frame.events._STAR_current_dispatch_id_STAR_)?re_frame.router.tag_with_parent_dispatch_id(G__7447):G__7447);
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.router.tag_with_fx_overrides(G__7447__$1);
} else {
return G__7447__$1;
}
})());
}

return null;
});
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.events.handle(event_v);

re_frame.router.event_queue.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7448_7450 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7449_7451 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sync], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7449_7451);

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__7092__auto___7452 = re_frame.interop.now();
var duration__7093__auto___7453 = (end__7092__auto___7452 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var finished__7094__auto___7454 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__7093__auto___7453,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,end__7092__auto___7452], 0));
if(re_frame.trace.validate_trace_enabled_QMARK_){
re_frame.trace.check_trace_against_schema(finished__7094__auto___7454);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,finished__7094__auto___7454);

re_frame.trace.run_tracing_callbacks_BANG_(end__7092__auto___7452);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7448_7450);
}} else {
}

return null;
});
re_frame.router.mk_deferred = (function re_frame$router$mk_deferred(){
var resolve_fn = cljs.core.volatile_BANG_(null);
var p = (new Promise((function (resolve,_reject){
return cljs.core.vreset_BANG_(resolve_fn,resolve);
})));
var done_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,p,cljs.core.cst$kw$resolve_BANG_,(function (v){
if(cljs.core.compare_and_set_BANG_(done_QMARK_,false,true)){
var fexpr__7455 = cljs.core.deref(resolve_fn);
return (fexpr__7455.cljs$core$IFn$_invoke$arity$1 ? fexpr__7455.cljs$core$IFn$_invoke$arity$1(v) : fexpr__7455.call(null,v));
} else {
return null;
}
})], null);
});

/**
 * @interface
 */
re_frame.router.ICascadeTracker = function(){};

var re_frame$router$ICascadeTracker$_register_BANG_$dyn_7456 = (function (_,on_cascade){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (re_frame.router._register_BANG_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(_,on_cascade) : m__5520__auto__.call(null,_,on_cascade));
} else {
var m__5518__auto__ = (re_frame.router._register_BANG_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(_,on_cascade) : m__5518__auto__.call(null,_,on_cascade));
} else {
throw cljs.core.missing_protocol("ICascadeTracker.-register!",_);
}
}
});
/**
 * Subscribe to event/epoch arrivals. Calls `on-cascade` once per
 *   delivery that contributed something to the cascade.
 */
re_frame.router._register_BANG_ = (function re_frame$router$_register_BANG_(_,on_cascade){
if((((!((_ == null)))) && ((!((_.re_frame$router$ICascadeTracker$_register_BANG_$arity$2 == null)))))){
return _.re_frame$router$ICascadeTracker$_register_BANG_$arity$2(_,on_cascade);
} else {
return re_frame$router$ICascadeTracker$_register_BANG_$dyn_7456(_,on_cascade);
}
});

var re_frame$router$ICascadeTracker$_unregister_BANG_$dyn_7457 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (re_frame.router._unregister_BANG_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (re_frame.router._unregister_BANG_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICascadeTracker.-unregister!",_);
}
}
});
/**
 * Tear down the subscription and reset internal collections.
 */
re_frame.router._unregister_BANG_ = (function re_frame$router$_unregister_BANG_(_){
if((((!((_ == null)))) && ((!((_.re_frame$router$ICascadeTracker$_unregister_BANG_$arity$1 == null)))))){
return _.re_frame$router$ICascadeTracker$_unregister_BANG_$arity$1(_);
} else {
return re_frame$router$ICascadeTracker$_unregister_BANG_$dyn_7457(_);
}
});

var re_frame$router$ICascadeTracker$_after_root_dispatched_BANG_$dyn_7458 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (re_frame.router._after_root_dispatched_BANG_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (re_frame.router._after_root_dispatched_BANG_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICascadeTracker.-after-root-dispatched!",_);
}
}
});
/**
 * Hook fired after `dispatch-sync` returns. Trackers that key off
 *   a captured root-id seed their bookkeeping here.
 */
re_frame.router._after_root_dispatched_BANG_ = (function re_frame$router$_after_root_dispatched_BANG_(_){
if((((!((_ == null)))) && ((!((_.re_frame$router$ICascadeTracker$_after_root_dispatched_BANG_$arity$1 == null)))))){
return _.re_frame$router$ICascadeTracker$_after_root_dispatched_BANG_$arity$1(_);
} else {
return re_frame$router$ICascadeTracker$_after_root_dispatched_BANG_$dyn_7458(_);
}
});

var re_frame$router$ICascadeTracker$_result$dyn_7459 = (function (_,include_cascaded_QMARK_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (re_frame.router._result[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(_,include_cascaded_QMARK_) : m__5520__auto__.call(null,_,include_cascaded_QMARK_));
} else {
var m__5518__auto__ = (re_frame.router._result["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(_,include_cascaded_QMARK_) : m__5518__auto__.call(null,_,include_cascaded_QMARK_));
} else {
throw cljs.core.missing_protocol("ICascadeTracker.-result",_);
}
}
});
/**
 * Build the success result map, or nil if the cascade hasn't started
 *   yet (root not seen). Honours `include-cascaded?`.
 */
re_frame.router._result = (function re_frame$router$_result(_,include_cascaded_QMARK_){
if((((!((_ == null)))) && ((!((_.re_frame$router$ICascadeTracker$_result$arity$2 == null)))))){
return _.re_frame$router$ICascadeTracker$_result$arity$2(_,include_cascaded_QMARK_);
} else {
return re_frame$router$ICascadeTracker$_result$dyn_7459(_,include_cascaded_QMARK_);
}
});

var re_frame$router$ICascadeTracker$_captured$dyn_7460 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (re_frame.router._captured[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (re_frame.router._captured["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICascadeTracker.-captured",_);
}
}
});
/**
 * Snapshot of collected records for the timeout result's
 *   `:captured-epochs` key.
 */
re_frame.router._captured = (function re_frame$router$_captured(_){
if((((!((_ == null)))) && ((!((_.re_frame$router$ICascadeTracker$_captured$arity$1 == null)))))){
return _.re_frame$router$ICascadeTracker$_captured$arity$1(_);
} else {
return re_frame$router$ICascadeTracker$_captured$dyn_7460(_);
}
});

/**
 * Return event vectors synchronously queued by re-frame's built-in
 * dispatch effects. `:dispatch-later` is intentionally excluded: it is
 * timer-driven async work, not part of dispatch-and-settle's synchronous
 * cascade contract.
 */
re_frame.router.immediate_dispatch_events = (function re_frame$router$immediate_dispatch_events(effects){
var event_vectors = (function re_frame$router$immediate_dispatch_events_$_event_vectors(effect_key,effect_value){
var G__7466 = effect_key;
var G__7466__$1 = (((G__7466 instanceof cljs.core.Keyword))?G__7466.fqn:null);
switch (G__7466__$1) {
case "dispatch":
if(cljs.core.vector_QMARK_(effect_value)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [effect_value], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}

break;
case "dispatch-n":
if(cljs.core.sequential_QMARK_(effect_value)){
return cljs.core.filterv(cljs.core.vector_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,effect_value));
} else {
return cljs.core.PersistentVector.EMPTY;
}

break;
case "fx":
if(cljs.core.sequential_QMARK_(effect_value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__7467){
var vec__7468 = p__7467;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7468,(1),null);
return re_frame$router$immediate_dispatch_events_$_event_vectors(k,v);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,effect_value)], 0));
} else {
return cljs.core.PersistentVector.EMPTY;
}

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
});
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__7471){
var vec__7472 = p__7471;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7472,(1),null);
return event_vectors(k,v);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([effects], 0)));
});
re_frame.router.decrement_pending_child = (function re_frame$router$decrement_pending_child(pending,parent_id){
if(cljs.core.truth_(parent_id)){
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(pending,parent_id,(0));
if((n > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pending,parent_id,(n - (1)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(pending,parent_id);
} else {
return pending;

}
}
} else {
return pending;
}
});
re_frame.router.trace_tracker_initial_state = (function re_frame$router$trace_tracker_initial_state(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cascade_DASH_ids,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$seen_DASH_ids,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$cascade_DASH_epochs,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$pending_DASH_children,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$unmatched_DASH_epochs,cljs.core.PersistentVector.EMPTY], null);
});
re_frame.router.trace_epoch_accepted_QMARK_ = (function re_frame$router$trace_epoch_accepted_QMARK_(root_id,state,epoch){
var id = cljs.core.cst$kw$dispatch_DASH_id.cljs$core$IFn$_invoke$arity$1(epoch);
var parent_id = cljs.core.cst$kw$parent_DASH_dispatch_DASH_id.cljs$core$IFn$_invoke$arity$1(epoch);
return (((!(cljs.core.contains_QMARK_(cljs.core.cst$kw$seen_DASH_ids.cljs$core$IFn$_invoke$arity$1(state),id)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root_id,id)) || (cljs.core.contains_QMARK_(cljs.core.cst$kw$cascade_DASH_ids.cljs$core$IFn$_invoke$arity$1(state),parent_id)))));
});
re_frame.router.accept_trace_epoch = (function re_frame$router$accept_trace_epoch(state,epoch){
var id = cljs.core.cst$kw$dispatch_DASH_id.cljs$core$IFn$_invoke$arity$1(epoch);
var parent_id = cljs.core.cst$kw$parent_DASH_dispatch_DASH_id.cljs$core$IFn$_invoke$arity$1(epoch);
var expected = cljs.core.count(re_frame.router.immediate_dispatch_events(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(epoch)));
var G__7476 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$seen_DASH_ids,cljs.core.conj,id),cljs.core.cst$kw$pending_DASH_children,re_frame.router.decrement_pending_child,parent_id),cljs.core.cst$kw$cascade_DASH_epochs,cljs.core.conj,epoch);
var G__7476__$1 = (((expected > (0)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__7476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pending_DASH_children,id], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(0)),expected):G__7476);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__7476__$1,cljs.core.cst$kw$cascade_DASH_ids,cljs.core.conj,id);

});
re_frame.router.process_trace_epochs = (function re_frame$router$process_trace_epochs(root_id,changed_QMARK_,state,epochs){
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$unmatched_DASH_epochs,cljs.core.into,epochs);
while(true){
var map__7478 = cljs.core.group_by(((function (state__$1){
return (function (p1__7477_SHARP_){
return re_frame.router.trace_epoch_accepted_QMARK_(root_id,state__$1,p1__7477_SHARP_);
});})(state__$1))
,cljs.core.cst$kw$unmatched_DASH_epochs.cljs$core$IFn$_invoke$arity$1(state__$1));
var map__7478__$1 = cljs.core.__destructure_map(map__7478);
var accepted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7478__$1,true);
var pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7478__$1,false);
if(cljs.core.seq(accepted)){
cljs.core.reset_BANG_(changed_QMARK_,true);

var G__7479 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frame.router.accept_trace_epoch,state__$1,accepted),cljs.core.cst$kw$unmatched_DASH_epochs,cljs.core.vec(pending));
state__$1 = G__7479;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$unmatched_DASH_epochs,cljs.core.vec(pending));
}
break;
}
});

/**
* @constructor
 * @implements {re_frame.router.ICascadeTracker}
*/
re_frame.router.TraceTracker = (function (cb_key,root_id,state){
this.cb_key = cb_key;
this.root_id = root_id;
this.state = state;
});
(re_frame.router.TraceTracker.prototype.re_frame$router$ICascadeTracker$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame.router.TraceTracker.prototype.re_frame$router$ICascadeTracker$_register_BANG_$arity$2 = (function (_,on_cascade){
var self__ = this;
var ___$1 = this;
return re_frame.trace.register_epoch_cb(self__.cb_key,(function (epochs){
var changed_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,(function (p1__7480_SHARP_){
return re_frame.router.process_trace_epochs(cljs.core.deref(self__.root_id),changed_QMARK_,p1__7480_SHARP_,epochs);
}));

if(cljs.core.truth_(cljs.core.deref(changed_QMARK_))){
return (on_cascade.cljs$core$IFn$_invoke$arity$0 ? on_cascade.cljs$core$IFn$_invoke$arity$0() : on_cascade.call(null));
} else {
return null;
}
}));
}));

(re_frame.router.TraceTracker.prototype.re_frame$router$ICascadeTracker$_unregister_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
re_frame.trace.remove_epoch_cb(self__.cb_key);

cljs.core.reset_BANG_(self__.state,re_frame.router.trace_tracker_initial_state());

return cljs.core.reset_BANG_(self__.root_id,null);
}));

(re_frame.router.TraceTracker.prototype.re_frame$router$ICascadeTracker$_after_root_dispatched_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = cljs.core.deref(self__.root_id);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update,cljs.core.cst$kw$cascade_DASH_ids,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
} else {
return null;
}
}));

(re_frame.router.TraceTracker.prototype.re_frame$router$ICascadeTracker$_result$arity$2 = (function (_,include_cascaded_QMARK_){
var self__ = this;
var ___$1 = this;
if((!((cljs.core.deref(self__.root_id) == null)))){
var map__7483 = cljs.core.deref(self__.state);
var map__7483__$1 = cljs.core.__destructure_map(map__7483);
var cascade_epochs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7483__$1,cljs.core.cst$kw$cascade_DASH_epochs);
var pending_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7483__$1,cljs.core.cst$kw$pending_DASH_children);
var eps = cascade_epochs;
var root_ep = cljs.core.some((function (p1__7481_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.root_id),cljs.core.cst$kw$dispatch_DASH_id.cljs$core$IFn$_invoke$arity$1(p1__7481_SHARP_))){
return p1__7481_SHARP_;
} else {
return null;
}
}),eps);
var cascaded = cljs.core.filterv((function (p1__7482_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.root_id),cljs.core.cst$kw$dispatch_DASH_id.cljs$core$IFn$_invoke$arity$1(p1__7482_SHARP_));
}),eps);
if(cljs.core.truth_((function (){var and__5160__auto__ = root_ep;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.empty_QMARK_(pending_children);
} else {
return and__5160__auto__;
}
})())){
var G__7484 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ok_QMARK_,true,cljs.core.cst$kw$root_DASH_epoch,root_ep], null);
if(cljs.core.truth_(include_cascaded_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__7484,cljs.core.cst$kw$cascaded_DASH_epochs,cascaded);
} else {
return G__7484;
}
} else {
return null;
}
} else {
return null;
}
}));

(re_frame.router.TraceTracker.prototype.re_frame$router$ICascadeTracker$_captured$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$cascade_DASH_epochs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
}));

(re_frame.router.TraceTracker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cb_DASH_key,cljs.core.cst$sym$root_DASH_id,cljs.core.cst$sym$state], null);
}));

(re_frame.router.TraceTracker.cljs$lang$type = true);

(re_frame.router.TraceTracker.cljs$lang$ctorStr = "re-frame.router/TraceTracker");

(re_frame.router.TraceTracker.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"re-frame.router/TraceTracker");
}));

/**
 * Positional factory function for re-frame.router/TraceTracker.
 */
re_frame.router.__GT_TraceTracker = (function re_frame$router$__GT_TraceTracker(cb_key,root_id,state){
return (new re_frame.router.TraceTracker(cb_key,root_id,state));
});


/**
* @constructor
 * @implements {re_frame.router.ICascadeTracker}
*/
re_frame.router.PostEventTracker = (function (post_cb_key,cascade_events){
this.post_cb_key = post_cb_key;
this.cascade_events = cascade_events;
});
(re_frame.router.PostEventTracker.prototype.re_frame$router$ICascadeTracker$ = cljs.core.PROTOCOL_SENTINEL);

(re_frame.router.PostEventTracker.prototype.re_frame$router$ICascadeTracker$_register_BANG_$arity$2 = (function (_,on_cascade){
var self__ = this;
var ___$1 = this;
return re_frame.router.event_queue.re_frame$router$IEventQueue$add_post_event_callback$arity$3(null,self__.post_cb_key,(function (event_v,_queue){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cascade_events,cljs.core.conj,event_v);

return (on_cascade.cljs$core$IFn$_invoke$arity$0 ? on_cascade.cljs$core$IFn$_invoke$arity$0() : on_cascade.call(null));
}));
}));

(re_frame.router.PostEventTracker.prototype.re_frame$router$ICascadeTracker$_unregister_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
re_frame.router.event_queue.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null,self__.post_cb_key);

return cljs.core.reset_BANG_(self__.cascade_events,cljs.core.PersistentVector.EMPTY);
}));

(re_frame.router.PostEventTracker.prototype.re_frame$router$ICascadeTracker$_after_root_dispatched_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(re_frame.router.PostEventTracker.prototype.re_frame$router$ICascadeTracker$_result$arity$2 = (function (_,include_cascaded_QMARK_){
var self__ = this;
var ___$1 = this;
var evs = cljs.core.deref(self__.cascade_events);
if(cljs.core.seq(evs)){
var G__7485 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ok_QMARK_,true,cljs.core.cst$kw$root_DASH_epoch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,cljs.core.first(evs)], null)], null);
if(cljs.core.truth_(include_cascaded_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__7485,cljs.core.cst$kw$cascaded_DASH_epochs,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ev){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,ev], null);
}),cljs.core.rest(evs)));
} else {
return G__7485;
}
} else {
return null;
}
}));

(re_frame.router.PostEventTracker.prototype.re_frame$router$ICascadeTracker$_captured$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
}));

(re_frame.router.PostEventTracker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$post_DASH_cb_DASH_key,cljs.core.cst$sym$cascade_DASH_events], null);
}));

(re_frame.router.PostEventTracker.cljs$lang$type = true);

(re_frame.router.PostEventTracker.cljs$lang$ctorStr = "re-frame.router/PostEventTracker");

(re_frame.router.PostEventTracker.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"re-frame.router/PostEventTracker");
}));

/**
 * Positional factory function for re-frame.router/PostEventTracker.
 */
re_frame.router.__GT_PostEventTracker = (function re_frame$router$__GT_PostEventTracker(post_cb_key,cascade_events){
return (new re_frame.router.PostEventTracker(post_cb_key,cascade_events));
});

re_frame.router.mk_tracker = (function re_frame$router$mk_tracker(root_id){
if(re_frame.trace.is_trace_enabled_QMARK_()){
return re_frame.router.__GT_TraceTracker(re_frame.interop.new_uuid(),root_id,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(re_frame.router.trace_tracker_initial_state()));
} else {
return re_frame.router.__GT_PostEventTracker(re_frame.interop.new_uuid(),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
}
});
/**
 * Dispatch `event` synchronously, then await the cascade of
 * `:fx [:dispatch ...]` children. See the long comment above for
 * shape, semantics, and limitations.
 */
re_frame.router.dispatch_and_settle = (function re_frame$router$dispatch_and_settle(var_args){
var G__7488 = arguments.length;
switch (G__7488) {
case 1:
return re_frame.router.dispatch_and_settle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.router.dispatch_and_settle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.router.dispatch_and_settle.cljs$core$IFn$_invoke$arity$1 = (function (event){
return re_frame.router.dispatch_and_settle.cljs$core$IFn$_invoke$arity$2(event,cljs.core.PersistentArrayMap.EMPTY);
}));

(re_frame.router.dispatch_and_settle.cljs$core$IFn$_invoke$arity$2 = (function (event,opts){
var opts__$1 = (function (){var or__5162__auto__ = opts;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var map__7489 = opts__$1;
var map__7489__$1 = cljs.core.__destructure_map(map__7489);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7489__$1,cljs.core.cst$kw$timeout_DASH_ms,(5000));
var settle_window_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7489__$1,cljs.core.cst$kw$settle_DASH_window_DASH_ms,(100));
var include_cascaded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7489__$1,cljs.core.cst$kw$include_DASH_cascaded_QMARK_,true);
var dispatch_event = ((cljs.core.contains_QMARK_(opts__$1,cljs.core.cst$kw$overrides))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(event,cljs.core.assoc,cljs.core.cst$kw$re_DASH_frame_SLASH_fx_DASH_overrides,cljs.core.cst$kw$overrides.cljs$core$IFn$_invoke$arity$1(opts__$1)):event);
var map__7490 = re_frame.router.mk_deferred();
var map__7490__$1 = cljs.core.__destructure_map(map__7490);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7490__$1,cljs.core.cst$kw$value);
var resolve_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7490__$1,cljs.core.cst$kw$resolve_BANG_);
var root_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var tracker = re_frame.router.mk_tracker(root_id);
var settle_tick = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var cleaned_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var overall_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var settle_timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var finish_BANG_ = (function (result){
if(cljs.core.compare_and_set_BANG_(cleaned_QMARK_,false,true)){
re_frame.router._unregister_BANG_(tracker);

re_frame.interop.clear_timeout_BANG_(cljs.core.deref(overall_timer));

var seq__7491_7498 = cljs.core.seq(cljs.core.deref(settle_timers));
var chunk__7492_7499 = null;
var count__7493_7500 = (0);
var i__7494_7501 = (0);
while(true){
if((i__7494_7501 < count__7493_7500)){
var h_7502 = chunk__7492_7499.cljs$core$IIndexed$_nth$arity$2(null,i__7494_7501);
re_frame.interop.clear_timeout_BANG_(h_7502);


var G__7503 = seq__7491_7498;
var G__7504 = chunk__7492_7499;
var G__7505 = count__7493_7500;
var G__7506 = (i__7494_7501 + (1));
seq__7491_7498 = G__7503;
chunk__7492_7499 = G__7504;
count__7493_7500 = G__7505;
i__7494_7501 = G__7506;
continue;
} else {
var temp__5823__auto___7507 = cljs.core.seq(seq__7491_7498);
if(temp__5823__auto___7507){
var seq__7491_7508__$1 = temp__5823__auto___7507;
if(cljs.core.chunked_seq_QMARK_(seq__7491_7508__$1)){
var c__5694__auto___7509 = cljs.core.chunk_first(seq__7491_7508__$1);
var G__7510 = cljs.core.chunk_rest(seq__7491_7508__$1);
var G__7511 = c__5694__auto___7509;
var G__7512 = cljs.core.count(c__5694__auto___7509);
var G__7513 = (0);
seq__7491_7498 = G__7510;
chunk__7492_7499 = G__7511;
count__7493_7500 = G__7512;
i__7494_7501 = G__7513;
continue;
} else {
var h_7514 = cljs.core.first(seq__7491_7508__$1);
re_frame.interop.clear_timeout_BANG_(h_7514);


var G__7515 = cljs.core.next(seq__7491_7508__$1);
var G__7516 = null;
var G__7517 = (0);
var G__7518 = (0);
seq__7491_7498 = G__7515;
chunk__7492_7499 = G__7516;
count__7493_7500 = G__7517;
i__7494_7501 = G__7518;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(settle_timers,cljs.core.PersistentVector.EMPTY);
} else {
}

return (resolve_BANG_.cljs$core$IFn$_invoke$arity$1 ? resolve_BANG_.cljs$core$IFn$_invoke$arity$1(result) : resolve_BANG_.call(null,result));
});
var schedule_settle_check = (function re_frame$router$schedule_settle_check(){
var tick = cljs.core.deref(settle_tick);
var handle = re_frame.interop.set_timeout_BANG_((function (){
if(((cljs.core.not(cljs.core.deref(cleaned_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick,cljs.core.deref(settle_tick))))){
var temp__5823__auto__ = re_frame.router._result(tracker,include_cascaded_QMARK_);
if(cljs.core.truth_(temp__5823__auto__)){
var result = temp__5823__auto__;
return finish_BANG_(result);
} else {
return null;
}
} else {
return null;
}
}),settle_window_ms);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(settle_timers,cljs.core.conj,handle);
});
re_frame.router._register_BANG_(tracker,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(settle_tick,cljs.core.inc);

return schedule_settle_check();
}));

cljs.core.reset_BANG_(overall_timer,re_frame.interop.set_timeout_BANG_((function (){
return finish_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ok_QMARK_,false,cljs.core.cst$kw$reason,cljs.core.cst$kw$timeout,cljs.core.cst$kw$event,event,cljs.core.cst$kw$captured_DASH_epochs,re_frame.router._captured(tracker)], null));
}),timeout_ms));

var _STAR_on_dispatch_id_STAR__orig_val__7495_7519 = re_frame.events._STAR_on_dispatch_id_STAR_;
var _STAR_on_dispatch_id_STAR__temp_val__7496_7520 = (function (p1__7486_SHARP_){
return cljs.core.reset_BANG_(root_id,p1__7486_SHARP_);
});
(re_frame.events._STAR_on_dispatch_id_STAR_ = _STAR_on_dispatch_id_STAR__temp_val__7496_7520);

try{re_frame.router.dispatch_sync(dispatch_event);
}finally {(re_frame.events._STAR_on_dispatch_id_STAR_ = _STAR_on_dispatch_id_STAR__orig_val__7495_7519);
}
re_frame.router._after_root_dispatched_BANG_(tracker);

schedule_settle_check();

return value;
}));

(re_frame.router.dispatch_and_settle.cljs$lang$maxFixedArity = 2);

