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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__11746){
var map__11747 = p__11746;
var map__11747__$1 = ((((!((map__11747 == null)))?(((((map__11747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11747):map__11747);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11747__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11747__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11747__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11747__$1,cljs.core.cst$kw$child_DASH_of);
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
var seq__11749_11763 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__11750_11764 = null;
var count__11751_11765 = (0);
var i__11752_11766 = (0);
while(true){
if((i__11752_11766 < count__11751_11765)){
var vec__11753_11767 = chunk__11750_11764.cljs$core$IIndexed$_nth$arity$2(null,i__11752_11766);
var k_11768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11753_11767,(0),null);
var cb_11769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11753_11767,(1),null);
try{var G__11757_11770 = cljs.core.deref(re_frame.trace.traces);
(cb_11769.cljs$core$IFn$_invoke$arity$1 ? cb_11769.cljs$core$IFn$_invoke$arity$1(G__11757_11770) : cb_11769.call(null,G__11757_11770));
}catch (e11756){var e_11771 = e11756;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11768,"while storing",cljs.core.deref(re_frame.trace.traces),e_11771], 0));
}

var G__11772 = seq__11749_11763;
var G__11773 = chunk__11750_11764;
var G__11774 = count__11751_11765;
var G__11775 = (i__11752_11766 + (1));
seq__11749_11763 = G__11772;
chunk__11750_11764 = G__11773;
count__11751_11765 = G__11774;
i__11752_11766 = G__11775;
continue;
} else {
var temp__5457__auto___11776 = cljs.core.seq(seq__11749_11763);
if(temp__5457__auto___11776){
var seq__11749_11777__$1 = temp__5457__auto___11776;
if(cljs.core.chunked_seq_QMARK_(seq__11749_11777__$1)){
var c__4351__auto___11778 = cljs.core.chunk_first(seq__11749_11777__$1);
var G__11779 = cljs.core.chunk_rest(seq__11749_11777__$1);
var G__11780 = c__4351__auto___11778;
var G__11781 = cljs.core.count(c__4351__auto___11778);
var G__11782 = (0);
seq__11749_11763 = G__11779;
chunk__11750_11764 = G__11780;
count__11751_11765 = G__11781;
i__11752_11766 = G__11782;
continue;
} else {
var vec__11758_11783 = cljs.core.first(seq__11749_11777__$1);
var k_11784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11758_11783,(0),null);
var cb_11785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11758_11783,(1),null);
try{var G__11762_11786 = cljs.core.deref(re_frame.trace.traces);
(cb_11785.cljs$core$IFn$_invoke$arity$1 ? cb_11785.cljs$core$IFn$_invoke$arity$1(G__11762_11786) : cb_11785.call(null,G__11762_11786));
}catch (e11761){var e_11787 = e11761;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_11784,"while storing",cljs.core.deref(re_frame.trace.traces),e_11787], 0));
}

var G__11788 = cljs.core.next(seq__11749_11777__$1);
var G__11789 = null;
var G__11790 = (0);
var G__11791 = (0);
seq__11749_11763 = G__11788;
chunk__11750_11764 = G__11789;
count__11751_11765 = G__11790;
i__11752_11766 = G__11791;
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
