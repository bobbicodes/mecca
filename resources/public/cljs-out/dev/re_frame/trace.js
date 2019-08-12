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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__11843){
var map__11844 = p__11843;
var map__11844__$1 = ((((!((map__11844 == null)))?(((((map__11844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11844):map__11844);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11844__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11844__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11844__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11844__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__11846_11860 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__11847_11861 = null;
var count__11848_11862 = (0);
var i__11849_11863 = (0);
while(true){
if((i__11849_11863 < count__11848_11862)){
var vec__11850_11864 = chunk__11847_11861.cljs$core$IIndexed$_nth$arity$2(null,i__11849_11863);
var k_11865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850_11864,(0),null);
var cb_11866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850_11864,(1),null);
try{var G__11854_11867 = cljs.core.deref(re_frame.trace.traces);
(cb_11866.cljs$core$IFn$_invoke$arity$1 ? cb_11866.cljs$core$IFn$_invoke$arity$1(G__11854_11867) : cb_11866.call(null,G__11854_11867));
}catch (e11853){var e_11868 = e11853;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11865,"while storing",cljs.core.deref(re_frame.trace.traces),e_11868], 0));
}

var G__11869 = seq__11846_11860;
var G__11870 = chunk__11847_11861;
var G__11871 = count__11848_11862;
var G__11872 = (i__11849_11863 + (1));
seq__11846_11860 = G__11869;
chunk__11847_11861 = G__11870;
count__11848_11862 = G__11871;
i__11849_11863 = G__11872;
continue;
} else {
var temp__5457__auto___11873 = cljs.core.seq(seq__11846_11860);
if(temp__5457__auto___11873){
var seq__11846_11874__$1 = temp__5457__auto___11873;
if(cljs.core.chunked_seq_QMARK_(seq__11846_11874__$1)){
var c__4351__auto___11875 = cljs.core.chunk_first(seq__11846_11874__$1);
var G__11876 = cljs.core.chunk_rest(seq__11846_11874__$1);
var G__11877 = c__4351__auto___11875;
var G__11878 = cljs.core.count(c__4351__auto___11875);
var G__11879 = (0);
seq__11846_11860 = G__11876;
chunk__11847_11861 = G__11877;
count__11848_11862 = G__11878;
i__11849_11863 = G__11879;
continue;
} else {
var vec__11855_11880 = cljs.core.first(seq__11846_11874__$1);
var k_11881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11855_11880,(0),null);
var cb_11882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11855_11880,(1),null);
try{var G__11859_11883 = cljs.core.deref(re_frame.trace.traces);
(cb_11882.cljs$core$IFn$_invoke$arity$1 ? cb_11882.cljs$core$IFn$_invoke$arity$1(G__11859_11883) : cb_11882.call(null,G__11859_11883));
}catch (e11858){var e_11884 = e11858;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11881,"while storing",cljs.core.deref(re_frame.trace.traces),e_11884], 0));
}

var G__11885 = cljs.core.next(seq__11846_11874__$1);
var G__11886 = null;
var G__11887 = (0);
var G__11888 = (0);
seq__11846_11860 = G__11885;
chunk__11847_11861 = G__11886;
count__11848_11862 = G__11887;
i__11849_11863 = G__11888;
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
