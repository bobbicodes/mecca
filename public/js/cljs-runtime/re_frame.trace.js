goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
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
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__54996){
var map__54997 = p__54996;
var map__54997__$1 = cljs.core.__destructure_map(map__54997);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54997__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54997__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54997__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54997__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__54998_55025 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__54999_55026 = null;
var count__55000_55027 = (0);
var i__55001_55028 = (0);
while(true){
if((i__55001_55028 < count__55000_55027)){
var vec__55012_55029 = chunk__54999_55026.cljs$core$IIndexed$_nth$arity$2(null,i__55001_55028);
var k_55030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55012_55029,(0),null);
var cb_55031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55012_55029,(1),null);
try{var G__55016_55032 = cljs.core.deref(re_frame.trace.traces);
(cb_55031.cljs$core$IFn$_invoke$arity$1 ? cb_55031.cljs$core$IFn$_invoke$arity$1(G__55016_55032) : cb_55031.call(null,G__55016_55032));
}catch (e55015){var e_55033 = e55015;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_55030,"while storing",cljs.core.deref(re_frame.trace.traces),e_55033], 0));
}

var G__55034 = seq__54998_55025;
var G__55035 = chunk__54999_55026;
var G__55036 = count__55000_55027;
var G__55037 = (i__55001_55028 + (1));
seq__54998_55025 = G__55034;
chunk__54999_55026 = G__55035;
count__55000_55027 = G__55036;
i__55001_55028 = G__55037;
continue;
} else {
var temp__5753__auto___55038 = cljs.core.seq(seq__54998_55025);
if(temp__5753__auto___55038){
var seq__54998_55039__$1 = temp__5753__auto___55038;
if(cljs.core.chunked_seq_QMARK_(seq__54998_55039__$1)){
var c__4649__auto___55040 = cljs.core.chunk_first(seq__54998_55039__$1);
var G__55041 = cljs.core.chunk_rest(seq__54998_55039__$1);
var G__55042 = c__4649__auto___55040;
var G__55043 = cljs.core.count(c__4649__auto___55040);
var G__55044 = (0);
seq__54998_55025 = G__55041;
chunk__54999_55026 = G__55042;
count__55000_55027 = G__55043;
i__55001_55028 = G__55044;
continue;
} else {
var vec__55017_55045 = cljs.core.first(seq__54998_55039__$1);
var k_55046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55017_55045,(0),null);
var cb_55047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55017_55045,(1),null);
try{var G__55021_55048 = cljs.core.deref(re_frame.trace.traces);
(cb_55047.cljs$core$IFn$_invoke$arity$1 ? cb_55047.cljs$core$IFn$_invoke$arity$1(G__55021_55048) : cb_55047.call(null,G__55021_55048));
}catch (e55020){var e_55049 = e55020;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_55046,"while storing",cljs.core.deref(re_frame.trace.traces),e_55049], 0));
}

var G__55050 = cljs.core.next(seq__54998_55039__$1);
var G__55051 = null;
var G__55052 = (0);
var G__55053 = (0);
seq__54998_55025 = G__55050;
chunk__54999_55026 = G__55051;
count__55000_55027 = G__55052;
i__55001_55028 = G__55053;
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

//# sourceMappingURL=re_frame.trace.js.map
