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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__69259){
var map__69260 = p__69259;
var map__69260__$1 = cljs.core.__destructure_map(map__69260);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69260__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69260__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69260__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69260__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__69262_69292 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__69263_69293 = null;
var count__69264_69294 = (0);
var i__69265_69295 = (0);
while(true){
if((i__69265_69295 < count__69264_69294)){
var vec__69278_69297 = chunk__69263_69293.cljs$core$IIndexed$_nth$arity$2(null,i__69265_69295);
var k_69298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69278_69297,(0),null);
var cb_69299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69278_69297,(1),null);
try{var G__69282_69300 = cljs.core.deref(re_frame.trace.traces);
(cb_69299.cljs$core$IFn$_invoke$arity$1 ? cb_69299.cljs$core$IFn$_invoke$arity$1(G__69282_69300) : cb_69299.call(null,G__69282_69300));
}catch (e69281){var e_69301 = e69281;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_69298,"while storing",cljs.core.deref(re_frame.trace.traces),e_69301], 0));
}

var G__69302 = seq__69262_69292;
var G__69303 = chunk__69263_69293;
var G__69304 = count__69264_69294;
var G__69305 = (i__69265_69295 + (1));
seq__69262_69292 = G__69302;
chunk__69263_69293 = G__69303;
count__69264_69294 = G__69304;
i__69265_69295 = G__69305;
continue;
} else {
var temp__5753__auto___69306 = cljs.core.seq(seq__69262_69292);
if(temp__5753__auto___69306){
var seq__69262_69307__$1 = temp__5753__auto___69306;
if(cljs.core.chunked_seq_QMARK_(seq__69262_69307__$1)){
var c__4649__auto___69308 = cljs.core.chunk_first(seq__69262_69307__$1);
var G__69309 = cljs.core.chunk_rest(seq__69262_69307__$1);
var G__69310 = c__4649__auto___69308;
var G__69311 = cljs.core.count(c__4649__auto___69308);
var G__69312 = (0);
seq__69262_69292 = G__69309;
chunk__69263_69293 = G__69310;
count__69264_69294 = G__69311;
i__69265_69295 = G__69312;
continue;
} else {
var vec__69283_69313 = cljs.core.first(seq__69262_69307__$1);
var k_69314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69283_69313,(0),null);
var cb_69315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69283_69313,(1),null);
try{var G__69287_69316 = cljs.core.deref(re_frame.trace.traces);
(cb_69315.cljs$core$IFn$_invoke$arity$1 ? cb_69315.cljs$core$IFn$_invoke$arity$1(G__69287_69316) : cb_69315.call(null,G__69287_69316));
}catch (e69286){var e_69317 = e69286;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_69314,"while storing",cljs.core.deref(re_frame.trace.traces),e_69317], 0));
}

var G__69318 = cljs.core.next(seq__69262_69307__$1);
var G__69319 = null;
var G__69320 = (0);
var G__69321 = (0);
seq__69262_69292 = G__69318;
chunk__69263_69293 = G__69319;
count__69264_69294 = G__69320;
i__69265_69295 = G__69321;
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
