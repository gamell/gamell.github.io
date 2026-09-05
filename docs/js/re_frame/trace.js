// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.id !== 'undefined')){
} else {
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * Schema for `:tags` of every op-type re-frame emits. Entries:
 * 
 *     <op-type> {:required #{<key> ...}    ; tags every emit MUST carry
 *                :optional #{<key> ...}    ; tags an emit MAY carry
 *                :doc      "..."}        ; one-liner — what the trace marks
 * 
 * `:tags` is a map; keys not listed under `:required` or `:optional`
 * for the matching op-type are 'unknown' and (when
 * `(validate-trace?)` is true) raise a console warning so consumers
 * can spot drift early.
 * 
 * This schema is the load-bearing contract for downstream tooling.
 * Adding a key = additive, no version bump. Renaming or removing a
 * key = breaking, must be staged with a deprecation cycle. The
 * doc-only / opt-in posture means production builds pay zero cost
 * for the contract — the schema lives here as a reference, and
 * only flips on under explicit dev opt-in.
 */
re_frame.trace.tag_schema = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$raf_DASH_end,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$reagent_SLASH_quiescent,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$flow,cljs.core.cst$kw$re_DASH_frame$router_SLASH_fsm_DASH_trigger,cljs.core.cst$kw$sync,cljs.core.cst$kw$event_SLASH_handler,cljs.core.cst$kw$render,cljs.core.cst$kw$event,cljs.core.cst$kw$event_SLASH_do_DASH_fx,cljs.core.cst$kw$raf,cljs.core.cst$kw$sub_SLASH_dispose],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$optional,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$doc,"End of the reagent next-tick batch \u2014 emitted by re-frame-10x's batching patch."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,null,cljs.core.cst$kw$reaction,null], null), null),cljs.core.cst$kw$optional,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$dyn_DASH_v,null,cljs.core.cst$kw$value,null,cljs.core.cst$kw$input_DASH_query_DASH_vs,null,cljs.core.cst$kw$input_DASH_signals,null], null), null),cljs.core.cst$kw$doc,"Subscription compute fn ran. Result is in :value."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$optional,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$doc,"Reagent render queue is idle \u2014 emitted by re-frame-10x's batching patch."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,null], null), null),cljs.core.cst$kw$optional,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dyn_DASH_v,null,cljs.core.cst$kw$cached_QMARK_,null,cljs.core.cst$kw$reaction,null], null), null),cljs.core.cst$kw$doc,"Subscribe call \u2014 either resolves from the reaction cache (`:cached? true`) or builds a new reaction."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$id_DASH__GT_live_DASH_in,null,cljs.core.cst$kw$id_DASH__GT_in,null,cljs.core.cst$kw$transition,null,cljs.core.cst$kw$db,null,cljs.core.cst$kw$id_DASH__GT_old_DASH_in,null,cljs.core.cst$kw$flow_DASH_spec,null,cljs.core.cst$kw$new_DASH_db,null,cljs.core.cst$kw$id_DASH__GT_old_DASH_live_DASH_in,null], null), null),cljs.core.cst$kw$optional,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$doc,"Flow alpha transition \u2014 emitted when a registered flow updates its derived output."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$optional,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,null,cljs.core.cst$kw$new_DASH_state,null], null), null),cljs.core.cst$kw$doc,"Router queue state-machine transition. Fires as the dispatch queue changes state."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$optional,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$doc,"Synchronous dispatch boundary \u2014 emitted after dispatch-sync runs the event and post-event callbacks."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$optional,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dispatch_DASH_id,null,cljs.core.cst$kw$parent_DASH_dispatch_DASH_id,null,cljs.core.cst$kw$event,null], null), null),cljs.core.cst$kw$doc,"The user's reg-event-* fn body, fired inside the event interceptor chain."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$optional,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_name,null,cljs.core.cst$kw$reaction,null], null), null),cljs.core.cst$kw$doc,"Component render \u2014 emitted by re-frame-10x's reagent patch (NOT by re-frame core); included here so the schema covers what consumers actually read."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,null], null), null),cljs.core.cst$kw$optional,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$event_SLASH_original,null,cljs.core.cst$kw$app_DASH_db_DASH_after,null,cljs.core.cst$kw$app_DASH_db_DASH_before,null,cljs.core.cst$kw$dispatch_DASH_id,null,cljs.core.cst$kw$parent_DASH_dispatch_DASH_id,null,cljs.core.cst$kw$effects,null,cljs.core.cst$kw$code,null,cljs.core.cst$kw$coeffects,null,cljs.core.cst$kw$interceptors,null], null), null),cljs.core.cst$kw$doc,"Top-level dispatch \u2014 fired by re-frame.router/dispatch / dispatch-sync."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$optional,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch_DASH_id,null,cljs.core.cst$kw$parent_DASH_dispatch_DASH_id,null], null), null),cljs.core.cst$kw$doc,"do-fx interceptor \u2014 fires registered fx handlers for the event's :effects map."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$optional,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$doc,"Reagent next-tick boundary \u2014 emitted by re-frame-10x's batching patch."], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,null,cljs.core.cst$kw$reaction,null], null), null),cljs.core.cst$kw$optional,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$doc,"Reaction garbage-collected (Reagent on-dispose)."], null)]);
re_frame.trace.validate_trace_enabled_QMARK_ = false;
/**
 * True iff the runtime should validate that emitted trace `:tags`
 * conform to `tag-schema`. Off by default; toggle with
 * `set-validate-trace!`. Intended for dev / CI; production builds
 * should leave it off (the trace machinery is itself gated on
 * `is-trace-enabled?`, but validation adds a per-trace map-walk
 * that's not free).
 */
re_frame.trace.validate_trace_QMARK_ = (function re_frame$trace$validate_trace_QMARK_(){
return re_frame.trace.validate_trace_enabled_QMARK_;
});
/**
 * Enable / disable trace-tag validation. When true, every
 * `finish-trace` checks `:tags` against `tag-schema` and warns via
 * `console :warn` on missing required keys or unknown keys.
 */
re_frame.trace.set_validate_trace_BANG_ = (function re_frame$trace$set_validate_trace_BANG_(enabled_QMARK_){
return (re_frame.trace.validate_trace_enabled_QMARK_ = cljs.core.boolean$(enabled_QMARK_));
});
/**
 * Walk a finished trace map and warn about missing/unknown tag
 * keys for its op-type. No-op when op-type isn't in the schema —
 * third-party op-types stay unconstrained.
 * 
 * Public because `finish-trace` is a macro that expands in the
 * caller's namespace (`re-frame.events`, custom instrumentation,
 * etc.); a private var here would fail the var-resolution check
 * when the expansion's `(check-trace-against-schema ...)` form
 * compiles in the caller. Callers shouldn't invoke this directly
 * — it's part of the validation flow gated by
 * `validate-trace?`.
 */
re_frame.trace.check_trace_against_schema = (function re_frame$trace$check_trace_against_schema(trace){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frame.trace.tag_schema,cljs.core.cst$kw$op_DASH_type.cljs$core$IFn$_invoke$arity$1(trace));
if(cljs.core.truth_(temp__5823__auto__)){
var map__7115 = temp__5823__auto__;
var map__7115__$1 = cljs.core.__destructure_map(map__7115);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7115__$1,cljs.core.cst$kw$required);
var optional = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7115__$1,cljs.core.cst$kw$optional);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7115__$1,cljs.core.cst$kw$doc);
var tags = (function (){var or__5162__auto__ = cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(trace);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var present = cljs.core.set(cljs.core.keys(tags));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required,present);
var allowed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(required,optional);
var unknown = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(present,allowed);
if(cljs.core.seq(missing)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame.trace: trace",cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(trace),"of op-type",cljs.core.cst$kw$op_DASH_type.cljs$core$IFn$_invoke$arity$1(trace),"is missing required tag key(s)",missing,"\u2014 see re-frame.trace/tag-schema."], 0));
} else {
}

if(cljs.core.seq(unknown)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame.trace: trace",cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(trace),"of op-type",cljs.core.cst$kw$op_DASH_type.cljs$core$IFn$_invoke$arity$1(trace),"carries unknown tag key(s)",unknown,"\u2014 either register them in re-frame.trace/tag-schema","or treat them as not-part-of-the-public-contract."], 0));
} else {
return null;
}
} else {
return null;
}
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.trace_cbs !== 'undefined')){
} else {
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 * 
 *   See also: `register-epoch-cb` for assembled per-dispatch epoch
 *   records, and `tag-schema` for the documented `:tags` shape of
 *   emitted traces.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.epoch_cbs !== 'undefined')){
} else {
re_frame.trace.epoch_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Register a callback `f` keyed on `key` that will receive a
 * collection of one or more assembled EPOCH records — one per
 * `:event` trace in each delivery batch. See the namespace docstring
 * above `epoch-cbs` for the epoch shape and the four cascade /
 * assembly-location decisions.
 * 
 * Like `register-trace-cb`: gated on `trace-enabled?`; replaces an
 * existing cb sharing the same key; warns when tracing is disabled.
 */
re_frame.trace.register_epoch_cb = (function re_frame$trace$register_epoch_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.epoch_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame.trace: register-epoch-cb skipped \u2014 tracing is not enabled. Set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines."], 0));
}
});
re_frame.trace.remove_epoch_cb = (function re_frame$trace$remove_epoch_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.epoch_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__7116){
var map__7117 = p__7116;
var map__7117__$1 = cljs.core.__destructure_map(map__7117);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7117__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7117__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7117__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7117__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__5162__auto__ = child_of;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
/**
 * Walk a batch of finished traces; emit one epoch record per
 * `:event` trace. Child traces are partitioned via the
 * `:child-of` link `start-trace` already populates from
 * `*current-trace*`.
 * 
 * KNOWN LIMITATIONS
 * 
 * - `:render` traces fire on a later RAF tick (after the user's
 *   event handler has returned), with `*current-trace*` either
 *   unbound or in some outer scope. They typically have
 *   `:child-of` nil, so this assembly DOESN'T attach them to the
 *   parent epoch. Consumers that want renders should subscribe
 *   to `register-trace-cb` and correlate by time / op-type — same
 *   as 10x does today via its own batching patch.
 * 
 * - Only direct `:child-of` children are picked up. Grandchildren
 *   (e.g. a `:sub/run` whose ratom-deref triggers another
 *   `:sub/run`) live as separate `:sub/run` entries on this same
 *   epoch — flat, not nested. The trace tree's full shape is in
 *   the underlying trace stream for callers that want it.
 */
re_frame.trace.assemble_epochs = (function re_frame$trace$assemble_epochs(batch){
var by_parent = cljs.core.group_by(cljs.core.cst$kw$child_DASH_of,batch);
var events = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7118_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$event,cljs.core.cst$kw$op_DASH_type.cljs$core$IFn$_invoke$arity$1(p1__7118_SHARP_));
}),batch);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (event_tr){
var event_id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(event_tr);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$3(by_parent,event_id,cljs.core.PersistentVector.EMPTY);
var by_op = cljs.core.group_by(cljs.core.cst$kw$op_DASH_type,children);
var tags = cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(event_tr);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$event_SLASH_original,cljs.core.cst$kw$app_DASH_db_SLASH_before,cljs.core.cst$kw$event_DASH_handler,cljs.core.cst$kw$app_DASH_db_SLASH_after,cljs.core.cst$kw$sub_DASH_creates,cljs.core.cst$kw$event_DASH_do_DASH_fx,cljs.core.cst$kw$start,cljs.core.cst$kw$sub_DASH_runs,cljs.core.cst$kw$duration,cljs.core.cst$kw$dispatch_DASH_id,cljs.core.cst$kw$parent_DASH_dispatch_DASH_id,cljs.core.cst$kw$event,cljs.core.cst$kw$id,cljs.core.cst$kw$effects,cljs.core.cst$kw$coeffects,cljs.core.cst$kw$interceptors,cljs.core.cst$kw$end],[cljs.core.cst$kw$event_SLASH_original.cljs$core$IFn$_invoke$arity$1(tags),cljs.core.cst$kw$app_DASH_db_DASH_before.cljs$core$IFn$_invoke$arity$1(tags),cljs.core.first(cljs.core.cst$kw$event_SLASH_handler.cljs$core$IFn$_invoke$arity$1(by_op)),cljs.core.cst$kw$app_DASH_db_DASH_after.cljs$core$IFn$_invoke$arity$1(tags),cljs.core.vec(cljs.core.cst$kw$sub_SLASH_create.cljs$core$IFn$_invoke$arity$1(by_op)),cljs.core.first(cljs.core.cst$kw$event_SLASH_do_DASH_fx.cljs$core$IFn$_invoke$arity$1(by_op)),cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(event_tr),cljs.core.vec(cljs.core.cst$kw$sub_SLASH_run.cljs$core$IFn$_invoke$arity$1(by_op)),cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(event_tr),cljs.core.cst$kw$dispatch_DASH_id.cljs$core$IFn$_invoke$arity$1(tags),cljs.core.cst$kw$parent_DASH_dispatch_DASH_id.cljs$core$IFn$_invoke$arity$1(tags),cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(tags),event_id,cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(tags),cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(tags),cljs.core.cst$kw$interceptors.cljs$core$IFn$_invoke$arity$1(tags),cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(event_tr)]);
}),events);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var batch_7159 = cljs.core.deref(re_frame.trace.traces);
var seq__7119_7160 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__7120_7161 = null;
var count__7121_7162 = (0);
var i__7122_7163 = (0);
while(true){
if((i__7122_7163 < count__7121_7162)){
var vec__7131_7164 = chunk__7120_7161.cljs$core$IIndexed$_nth$arity$2(null,i__7122_7163);
var k_7165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7131_7164,(0),null);
var cb_7166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7131_7164,(1),null);
try{(cb_7166.cljs$core$IFn$_invoke$arity$1 ? cb_7166.cljs$core$IFn$_invoke$arity$1(batch_7159) : cb_7166.call(null,batch_7159));
}catch (e7134){var e_7167 = e7134;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_7165,"while storing",batch_7159,e_7167], 0));
}

var G__7168 = seq__7119_7160;
var G__7169 = chunk__7120_7161;
var G__7170 = count__7121_7162;
var G__7171 = (i__7122_7163 + (1));
seq__7119_7160 = G__7168;
chunk__7120_7161 = G__7169;
count__7121_7162 = G__7170;
i__7122_7163 = G__7171;
continue;
} else {
var temp__5823__auto___7172 = cljs.core.seq(seq__7119_7160);
if(temp__5823__auto___7172){
var seq__7119_7173__$1 = temp__5823__auto___7172;
if(cljs.core.chunked_seq_QMARK_(seq__7119_7173__$1)){
var c__5694__auto___7174 = cljs.core.chunk_first(seq__7119_7173__$1);
var G__7175 = cljs.core.chunk_rest(seq__7119_7173__$1);
var G__7176 = c__5694__auto___7174;
var G__7177 = cljs.core.count(c__5694__auto___7174);
var G__7178 = (0);
seq__7119_7160 = G__7175;
chunk__7120_7161 = G__7176;
count__7121_7162 = G__7177;
i__7122_7163 = G__7178;
continue;
} else {
var vec__7135_7179 = cljs.core.first(seq__7119_7173__$1);
var k_7180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7135_7179,(0),null);
var cb_7181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7135_7179,(1),null);
try{(cb_7181.cljs$core$IFn$_invoke$arity$1 ? cb_7181.cljs$core$IFn$_invoke$arity$1(batch_7159) : cb_7181.call(null,batch_7159));
}catch (e7138){var e_7182 = e7138;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_7180,"while storing",batch_7159,e_7182], 0));
}

var G__7183 = cljs.core.next(seq__7119_7173__$1);
var G__7184 = null;
var G__7185 = (0);
var G__7186 = (0);
seq__7119_7160 = G__7183;
chunk__7120_7161 = G__7184;
count__7121_7162 = G__7185;
i__7122_7163 = G__7186;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(cljs.core.deref(re_frame.trace.epoch_cbs))){
var epochs_7187 = re_frame.trace.assemble_epochs(batch_7159);
var seq__7139_7188 = cljs.core.seq(cljs.core.deref(re_frame.trace.epoch_cbs));
var chunk__7140_7189 = null;
var count__7141_7190 = (0);
var i__7142_7191 = (0);
while(true){
if((i__7142_7191 < count__7141_7190)){
var vec__7151_7192 = chunk__7140_7189.cljs$core$IIndexed$_nth$arity$2(null,i__7142_7191);
var k_7193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7151_7192,(0),null);
var cb_7194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7151_7192,(1),null);
try{(cb_7194.cljs$core$IFn$_invoke$arity$1 ? cb_7194.cljs$core$IFn$_invoke$arity$1(epochs_7187) : cb_7194.call(null,epochs_7187));
}catch (e7154){var e_7195 = e7154;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from epoch cb",k_7193,"while delivering",cljs.core.count(epochs_7187),"epoch(s)",e_7195], 0));
}

var G__7196 = seq__7139_7188;
var G__7197 = chunk__7140_7189;
var G__7198 = count__7141_7190;
var G__7199 = (i__7142_7191 + (1));
seq__7139_7188 = G__7196;
chunk__7140_7189 = G__7197;
count__7141_7190 = G__7198;
i__7142_7191 = G__7199;
continue;
} else {
var temp__5823__auto___7200 = cljs.core.seq(seq__7139_7188);
if(temp__5823__auto___7200){
var seq__7139_7201__$1 = temp__5823__auto___7200;
if(cljs.core.chunked_seq_QMARK_(seq__7139_7201__$1)){
var c__5694__auto___7202 = cljs.core.chunk_first(seq__7139_7201__$1);
var G__7203 = cljs.core.chunk_rest(seq__7139_7201__$1);
var G__7204 = c__5694__auto___7202;
var G__7205 = cljs.core.count(c__5694__auto___7202);
var G__7206 = (0);
seq__7139_7188 = G__7203;
chunk__7140_7189 = G__7204;
count__7141_7190 = G__7205;
i__7142_7191 = G__7206;
continue;
} else {
var vec__7155_7207 = cljs.core.first(seq__7139_7201__$1);
var k_7208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7155_7207,(0),null);
var cb_7209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7155_7207,(1),null);
try{(cb_7209.cljs$core$IFn$_invoke$arity$1 ? cb_7209.cljs$core$IFn$_invoke$arity$1(epochs_7187) : cb_7209.call(null,epochs_7187));
}catch (e7158){var e_7210 = e7158;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from epoch cb",k_7208,"while delivering",cljs.core.count(epochs_7187),"epoch(s)",e_7210], 0));
}

var G__7211 = cljs.core.next(seq__7139_7201__$1);
var G__7212 = null;
var G__7213 = (0);
var G__7214 = (0);
seq__7139_7188 = G__7211;
chunk__7140_7189 = G__7212;
count__7141_7190 = G__7213;
i__7142_7191 = G__7214;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
