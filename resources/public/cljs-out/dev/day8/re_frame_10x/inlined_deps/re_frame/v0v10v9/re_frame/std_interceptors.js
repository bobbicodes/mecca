// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('clojure.data');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.cofx');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
/**
 * An interceptor which logs/instruments an event handler's actions to
 *   `js/console.debug`. See examples/todomvc/src/events.cljs for use.
 * 
 *   Output includes:
 *   1. the event vector
 *   2. a `clojure.data/diff` of db, before vs after, which shows
 *   the changes caused by the event handler.  You will absolutely have
 *   to understand https://clojuredocs.org/clojure.data/diff to
 *   understand the output.
 * 
 *   You'd typically include this interceptor after (to the right of) any
 *   path interceptor.
 * 
 *   Warning:  calling clojure.data/diff on large, complex data structures
 *   can be slow. So, you won't want this interceptor present in production
 *   code. So condition it out like this :
 * 
 *    (day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.core/reg-event-db
 *       :evt-id
 *       [(when ^boolean goog.DEBUG day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.core/debug)]  ;; <-- conditional
 *       (fn [db v]
 *         ...))
 * 
 *   To make this code fragment work, you'll also have to set goog.DEBUG to
 *   false in your production builds - look in `project.clj` of /examples/todomvc.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.debug = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$debug_before(context){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"Handling re-frame event:",day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442)));

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$debug_after(context){
var event = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/not-found",1222261479));
if(cljs.core._EQ_.call(null,new_db,new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/not-found",1222261479))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"No :db changes caused by:",event);
} else {
var vec__12585_12588 = clojure.data.diff.call(null,orig_db,new_db);
var only_before_12589 = cljs.core.nth.call(null,vec__12585_12588,(0),null);
var only_after_12590 = cljs.core.nth.call(null,vec__12585_12588,(1),null);
var db_changed_QMARK__12591 = ((!((only_before_12589 == null))) || (!((only_after_12590 == null))));
if(db_changed_QMARK__12591){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"group","group",582596132),"db clojure.data/diff for:",event);

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only before:",only_before_12589);

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only after :",only_after_12590);

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"no app-db changes caused by:",event);
}
}

return context;
}));
/**
 * An interceptor which removes the first element of the event vector,
 *   allowing you to write more aesthetically pleasing event handlers. No
 *   leading underscore on the event-v!
 *   Your event handlers will look like this:
 * 
 *    (defn my-handler
 *      [db [x y z]]    ;; <-- instead of [_ x y z]
 *      ....)
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.trim_v = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"trim-v","trim-v",-1274938640),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$trimv_before(context){
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null),cljs.core.subvec,(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","untrimmed-event","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/untrimmed-event",587621405)], null),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442)));
}),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$trimv_after(context){
return cljs.core.assoc_in.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.utils.dissoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","untrimmed-event","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/untrimmed-event",587621405)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","untrimmed-event","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/untrimmed-event",587621405)));
}));
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *    (fn [db event]
 *       ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.db_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$db_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"db-handler","db-handler",579530098),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$db_handler__GT_interceptor_$_db_handler_before(context){
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null))?(function (){var _STAR_current_trace_STAR_12592 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))], null));

try{try{var map__12593 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__12593__$1 = ((((!((map__12593 == null)))?(((((map__12593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12593):map__12593);
var db = cljs.core.get.call(null,map__12593__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.call(null,map__12593__$1,new cljs.core.Keyword(null,"event","event",301435442));
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),handler_fn.call(null,db,event));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__12219__auto___12597 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null);
var duration__12220__auto___12598 = (end__12219__auto___12597 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12220__auto___12598,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__12219__auto___12597);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12592;
}})():(function (){var map__12595 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__12595__$1 = ((((!((map__12595 == null)))?(((((map__12595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12595):map__12595);
var db = cljs.core.get.call(null,map__12595__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.call(null,map__12595__$1,new cljs.core.Keyword(null,"event","event",301435442));
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),handler_fn.call(null,db,event));
})());
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__12221__auto___12599 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__12221__auto___12599;

} else {
}

return new_context;
}));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *    (fn [coeffects event]
 *       {:db ...
 *        :dispatch ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.fx_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$fx_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$fx_handler__GT_interceptor_$_fx_handler_before(context){
var map__12600 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__12600__$1 = ((((!((map__12600 == null)))?(((((map__12600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12600):map__12600);
var coeffects = map__12600__$1;
var event = cljs.core.get.call(null,map__12600__$1,new cljs.core.Keyword(null,"event","event",301435442));
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null))?(function (){var _STAR_current_trace_STAR_12602 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))], null));

try{try{return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"effects","effects",-282369292),handler_fn.call(null,coeffects,event));
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__12219__auto___12603 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null);
var duration__12220__auto___12604 = (end__12219__auto___12603 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12220__auto___12604,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__12219__auto___12603);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12602;
}})():cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"effects","effects",-282369292),handler_fn.call(null,coeffects,event)));
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__12221__auto___12605 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__12221__auto___12605;

} else {
}

return new_context;
}));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 * 
 *    (fn [context]
 *       (enqueue context [more interceptors]))
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.ctx_handler__GT_interceptor = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$ctx_handler__GT_interceptor(handler_fn){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ctx-handler","ctx-handler",-1777672230),new cljs.core.Keyword(null,"before","before",-1633692388),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$ctx_handler__GT_interceptor_$_ctx_handler_before(context){
var new_context = ((day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null))?(function (){var _STAR_current_trace_STAR_12606 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null))], null));

try{try{return handler_fn.call(null,context);
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__12219__auto___12607 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null);
var duration__12220__auto___12608 = (end__12219__auto___12607 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12220__auto___12608,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__12219__auto___12607);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12606;
}})():handler_fn.call(null,context));
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__12221__auto___12609 = cljs.core.merge.call(null,cljs.core.update.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = new_trace__12221__auto___12609;

} else {
}

return new_context;
}));
});
/**
 * returns an interceptor whose `:before` substitutes the coeffects `:db` with
 *   a sub-path of `:db`. Within `:after` it grafts the handler's return value
 *   back into db, at the right path.
 * 
 *   So, its overall action is to make the event handler behave like the function
 *   you might give to clojure's `update-in`.
 * 
 *   Examples:
 * 
 *    (path :some :path)
 *    (path [:some :path])
 *    (path [:some :path] :to :here)
 *    (path [:some :path] [:to] :here)
 * 
 *   Example Use:
 * 
 *    (reg-event-db
 *      :event-id
 *      (path [:a :b])  ;; used here, in interceptor chain
 *      (fn [b v]       ;; 1st arg is now not db. Is the value from path [:a :b] within db
 *        ... new-b))   ;; returns a new value for that path (not the entire db)
 * 
 *   Notes:
 *  1. `path` may appear more than once in an interceptor chain. Progressive narrowing.
 *  2. if `:effects` contains no `:db` effect, can't graft a value back in.
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$path(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12611 = arguments.length;
var i__4532__auto___12612 = (0);
while(true){
if((i__4532__auto___12612 < len__4531__auto___12611)){
args__4534__auto__.push((arguments[i__4532__auto___12612]));

var G__12613 = (i__4532__auto___12612 + (1));
i__4532__auto___12612 = G__12613;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten.call(null,args);
var db_store_key = new cljs.core.Keyword("re-frame-path","db-store","re-frame-path/db-store",655758490);
if(cljs.core.empty_QMARK_.call(null,path)){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \"path\" interceptor given no params");
} else {
}

return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"before","before",-1633692388),((function (path,db_store_key){
return (function (context){
var original_db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_coeffect.call(null,cljs.core.update.call(null,context,db_store_key,cljs.core.conj,original_db),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.get_in.call(null,original_db,path));
});})(path,db_store_key))
,new cljs.core.Keyword(null,"after","after",594996914),((function (path,db_store_key){
return (function (context){
var db_store = db_store_key.cljs$core$IFn$_invoke$arity$1(context);
var original_db = cljs.core.peek.call(null,db_store);
var new_db_store = cljs.core.pop.call(null,db_store);
var context_SINGLEQUOTE_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_coeffect.call(null,cljs.core.assoc.call(null,context,db_store_key,new_db_store),new cljs.core.Keyword(null,"db","db",993250759),original_db);
var db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/not-found",1222261479));
if(cljs.core._EQ_.call(null,db,new cljs.core.Keyword("day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors","not-found","day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.std-interceptors/not-found",1222261479))){
return context_SINGLEQUOTE_;
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,original_db,path,db));
}
});})(path,db_store_key))
);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq12610){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12610));
});

/**
 * Interceptor factory which runs the given function `f` in the `after handler`
 *   position.  `f` is called with two arguments: `db` and `v`, and is expected to
 *   return a modified `db`.
 * 
 *   Unlike the `after` interceptor which is only about side effects, `enrich`
 *   expects `f` to process and alter the given `db` coeffect in some useful way,
 *   contributing to the derived data, flowing vibe.
 * 
 *   Example Use:
 *   ------------
 * 
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them via a warning
 *   at the bottom of the panel.
 * 
 *   Almost any user action (edit text, add new todo, remove a todo) requires a
 *   complete reassessment of duplication errors and warnings. Eg: that edit
 *   just made might have introduced a new duplicate, or removed one. Same with
 *   any todo removal. So we need to re-calculate warnings after any CRUD events
 *   associated with the todos list.
 * 
 *   Unless we are careful, we might end up coding subtly different checks
 *   for each kind of CRUD operation.  The duplicates check made after
 *   'delete todo' event might be subtly different to that done after an
 *   editing operation. Nice and efficient, but fiddly. A bug generator
 *   approach.
 * 
 *   So, instead, we create an `f` which recalculates ALL warnings from scratch
 *   every time there is ANY change. It will inspect all the todos, and
 *   reset ALL FLAGS every time (overwriting what was there previously)
 *   and fully recalculate the list of duplicates (displayed at the bottom?).
 * 
 *   https://twitter.com/nathanmarz/status/879722740776939520
 * 
 *   By applying `f` in an `:enrich` interceptor, after every CRUD event,
 *   we keep the handlers simple and yet we ensure this important step
 *   (of getting warnings right) is not missed on any change.
 * 
 *   We can test `f` easily - it is a pure function - independently of
 *   any CRUD operation.
 * 
 *   This brings huge simplicity at the expense of some re-computation
 *   each time. This may be a very satisfactory trade-off in many cases.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.enrich = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$enrich(f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enrich","enrich",-2108921925),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$enrich_$_enrich_after(context){
var event = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var db = ((cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759)):day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759)));
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),f.call(null,db,event));
}));
});
/**
 * returns an interceptor which runs a given function `f` in the `:after`
 *   position, presumably for side effects.
 * 
 *   `f` is called with two arguments: the `:effects` value for `:db`
 *   (or the `coeffect` value of db if no db effect is returned) and the event.
 *   Its return value is ignored, so `f` can only side-effect.
 * 
 *   Examples use can be seen in the /examples/todomvc:
 *   - `f` runs schema validation (reporting any errors found).
 *   - `f` writes to localstorage.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.after = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$after(f){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null)):cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)));
var event = cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null));
f.call(null,db,event);

return context;
}));
});
/**
 * Interceptor factory which acts a bit like `reaction`  (but it flows into
 *   `db`, rather than out). It observes N paths within `db` and if any of them
 *   test not identical? to their previous value  (as a result of a event handler
 *   being run) then it runs `f` to compute a new value, which is then assoc-ed
 *   into the given `out-path` within `db`.
 * 
 *   Usage:
 * 
 *    (defn my-f
 *      [a-val b-val]
 *      ... some computation on a and b in here)
 * 
 *    (on-changes my-f [:c]  [:a] [:b])
 * 
 *   Put this Interceptor on the right handlers (ones which might change :a or :b).
 *   It will:
 *   - call `f` each time the value at path [:a] or [:b] changes
 *   - call `f` with the values extracted from [:a] [:b]
 *   - assoc the return value from `f` into the path  [:c]
 *   
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$on_changes(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12619 = arguments.length;
var i__4532__auto___12620 = (0);
while(true){
if((i__4532__auto___12620 < len__4531__auto___12619)){
args__4534__auto__.push((arguments[i__4532__auto___12620]));

var G__12621 = (i__4532__auto___12620 + (1));
i__4532__auto___12620 = G__12621;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-changes","on-changes",1345912602),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$std_interceptors$on_change_after(context){
var new_db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var old_db = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var new_ins = cljs.core.map.call(null,((function (new_db,old_db){
return (function (p1__12614_SHARP_){
return cljs.core.get_in.call(null,new_db,p1__12614_SHARP_);
});})(new_db,old_db))
,in_paths);
var old_ins = cljs.core.map.call(null,((function (new_db,old_db,new_ins){
return (function (p1__12615_SHARP_){
return cljs.core.get_in.call(null,old_db,p1__12615_SHARP_);
});})(new_db,old_db,new_ins))
,in_paths);
var changed_ins_QMARK_ = (function (){var and__3938__auto__ = cljs.core.contains_QMARK_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.get_effect.call(null,context),new cljs.core.Keyword(null,"db","db",993250759));
if(and__3938__auto__){
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs.core.identical_QMARK_,new_ins,old_ins));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(changed_ins_QMARK_)){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new_db,out_path,cljs.core.apply.call(null,f,new_ins)));
} else {
return context;
}
}));
});

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq12616){
var G__12617 = cljs.core.first.call(null,seq12616);
var seq12616__$1 = cljs.core.next.call(null,seq12616);
var G__12618 = cljs.core.first.call(null,seq12616__$1);
var seq12616__$2 = cljs.core.next.call(null,seq12616__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12617,G__12618,seq12616__$2);
});


//# sourceMappingURL=std_interceptors.js.map
