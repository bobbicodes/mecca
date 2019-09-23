// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors');
goog.require('clojure.set');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.dispatch_sync = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch_sync;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.reg_sub;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.subscribe;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.clear_sub = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.clear_subscription_cache_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub_raw = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$reg_sub_raw(query_id,handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.kind,query_id,handler_fn);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.clear_fx = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.reg_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.inject_cofx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.inject_cofx;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.clear_cofx = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$reg_event_db(var_args){
var G__12625 = arguments.length;
switch (G__12625) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.call(null,id,null,handler);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.db_handler__GT_interceptor.call(null,handler)], null));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$reg_event_fx(var_args){
var G__12628 = arguments.length;
switch (G__12628) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.call(null,id,null,handler);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,handler)], null));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$reg_event_ctx(var_args){
var G__12631 = arguments.length;
switch (G__12631) {
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.call(null,id,null,handler);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx.inject_db,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx,interceptors,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.clear_event = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.kind);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.debug = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.debug;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.path = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.enrich = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.enrich;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.trim_v = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.trim_v;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.after = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.after;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.on_changes = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.__GT_interceptor = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.get_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.assoc_coeffect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_coeffect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.get_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.assoc_effect = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.enqueue = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.enqueue;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.set_loggers_BANG_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.set_loggers_BANG_;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.console = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.make_restore_fn = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_12637 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_12638 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.subs.query__GT_reaction)));
var seq__12633_12639 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_12638,original_subs_12637));
var chunk__12634_12640 = null;
var count__12635_12641 = (0);
var i__12636_12642 = (0);
while(true){
if((i__12636_12642 < count__12635_12641)){
var sub_12643 = cljs.core._nth.call(null,chunk__12634_12640,i__12636_12642);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.dispose_BANG_.call(null,sub_12643);


var G__12644 = seq__12633_12639;
var G__12645 = chunk__12634_12640;
var G__12646 = count__12635_12641;
var G__12647 = (i__12636_12642 + (1));
seq__12633_12639 = G__12644;
chunk__12634_12640 = G__12645;
count__12635_12641 = G__12646;
i__12636_12642 = G__12647;
continue;
} else {
var temp__5457__auto___12648 = cljs.core.seq.call(null,seq__12633_12639);
if(temp__5457__auto___12648){
var seq__12633_12649__$1 = temp__5457__auto___12648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12633_12649__$1)){
var c__4351__auto___12650 = cljs.core.chunk_first.call(null,seq__12633_12649__$1);
var G__12651 = cljs.core.chunk_rest.call(null,seq__12633_12649__$1);
var G__12652 = c__4351__auto___12650;
var G__12653 = cljs.core.count.call(null,c__4351__auto___12650);
var G__12654 = (0);
seq__12633_12639 = G__12651;
chunk__12634_12640 = G__12652;
count__12635_12641 = G__12653;
i__12636_12642 = G__12654;
continue;
} else {
var sub_12655 = cljs.core.first.call(null,seq__12633_12649__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.dispose_BANG_.call(null,sub_12655);


var G__12656 = cljs.core.next.call(null,seq__12633_12649__$1);
var G__12657 = null;
var G__12658 = (0);
var G__12659 = (0);
seq__12633_12639 = G__12656;
chunk__12634_12640 = G__12657;
count__12635_12641 = G__12658;
i__12636_12642 = G__12659;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Remove all events queued for processing
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.purge_event_queue = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$purge_event_queue(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.purge.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.event_queue);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$add_post_event_callback(var_args){
var G__12661 = arguments.length;
switch (G__12661) {
case 1:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.call(null,f,f);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.add_post_event_callback.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.event_queue,id,f);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.remove_post_event_callback = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$remove_post_event_callback(id){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.remove_post_event_callback.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.event_queue,id);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_handler = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$register_handler(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12664 = arguments.length;
var i__4532__auto___12665 = (0);
while(true){
if((i__4532__auto___12665 < len__4531__auto___12664)){
args__4534__auto__.push((arguments[i__4532__auto___12665]));

var G__12666 = (i__4532__auto___12665 + (1));
i__4532__auto___12665 = G__12666;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_event_db,args);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq12663){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12663));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_sub = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$core$register_sub(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12668 = arguments.length;
var i__4532__auto___12669 = (0);
while(true){
if((i__4532__auto___12669 < len__4531__auto___12668)){
args__4534__auto__.push((arguments[i__4532__auto___12669]));

var G__12670 = (i__4532__auto___12669 + (1));
i__4532__auto___12669 = G__12670;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.reg_sub_raw,args);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq12667){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12667));
});


//# sourceMappingURL=core.js.map
