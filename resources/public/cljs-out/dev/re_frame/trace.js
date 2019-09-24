// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
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
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__11571){
var map__11572 = p__11571;
var map__11572__$1 = ((((!((map__11572 == null)))?(((((map__11572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11572):map__11572);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11572__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11572__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11572__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11572__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__11574_11588 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__11575_11589 = null;
var count__11576_11590 = (0);
var i__11577_11591 = (0);
while(true){
if((i__11577_11591 < count__11576_11590)){
var vec__11578_11592 = chunk__11575_11589.cljs$core$IIndexed$_nth$arity$2(null,i__11577_11591);
var k_11593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11578_11592,(0),null);
var cb_11594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11578_11592,(1),null);
try{var G__11582_11595 = cljs.core.deref(re_frame.trace.traces);
(cb_11594.cljs$core$IFn$_invoke$arity$1 ? cb_11594.cljs$core$IFn$_invoke$arity$1(G__11582_11595) : cb_11594.call(null,G__11582_11595));
}catch (e11581){var e_11596 = e11581;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11593,"while storing",cljs.core.deref(re_frame.trace.traces),e_11596], 0));
}

var G__11597 = seq__11574_11588;
var G__11598 = chunk__11575_11589;
var G__11599 = count__11576_11590;
var G__11600 = (i__11577_11591 + (1));
seq__11574_11588 = G__11597;
chunk__11575_11589 = G__11598;
count__11576_11590 = G__11599;
i__11577_11591 = G__11600;
continue;
} else {
var temp__5457__auto___11601 = cljs.core.seq(seq__11574_11588);
if(temp__5457__auto___11601){
var seq__11574_11602__$1 = temp__5457__auto___11601;
if(cljs.core.chunked_seq_QMARK_(seq__11574_11602__$1)){
var c__4351__auto___11603 = cljs.core.chunk_first(seq__11574_11602__$1);
var G__11604 = cljs.core.chunk_rest(seq__11574_11602__$1);
var G__11605 = c__4351__auto___11603;
var G__11606 = cljs.core.count(c__4351__auto___11603);
var G__11607 = (0);
seq__11574_11588 = G__11604;
chunk__11575_11589 = G__11605;
count__11576_11590 = G__11606;
i__11577_11591 = G__11607;
continue;
} else {
var vec__11583_11608 = cljs.core.first(seq__11574_11602__$1);
var k_11609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11583_11608,(0),null);
var cb_11610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11583_11608,(1),null);
try{var G__11587_11611 = cljs.core.deref(re_frame.trace.traces);
(cb_11610.cljs$core$IFn$_invoke$arity$1 ? cb_11610.cljs$core$IFn$_invoke$arity$1(G__11587_11611) : cb_11610.call(null,G__11587_11611));
}catch (e11586){var e_11612 = e11586;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11609,"while storing",cljs.core.deref(re_frame.trace.traces),e_11612], 0));
}

var G__11613 = cljs.core.next(seq__11574_11602__$1);
var G__11614 = null;
var G__11615 = (0);
var G__11616 = (0);
seq__11574_11588 = G__11613;
chunk__11575_11589 = G__11614;
count__11576_11590 = G__11615;
i__11577_11591 = G__11616;
continue;
}
} else {
}
}
break;
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
