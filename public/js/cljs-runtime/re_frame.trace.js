goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
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
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__41264){
var map__41265 = p__41264;
var map__41265__$1 = (((((!((map__41265 == null))))?(((((map__41265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41265):map__41265);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41265__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41265__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41265__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41265__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var seq__41267_41310 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__41268_41311 = null;
var count__41269_41312 = (0);
var i__41270_41313 = (0);
while(true){
if((i__41270_41313 < count__41269_41312)){
var vec__41281_41314 = chunk__41268_41311.cljs$core$IIndexed$_nth$arity$2(null,i__41270_41313);
var k_41315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41281_41314,(0),null);
var cb_41316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41281_41314,(1),null);
try{var G__41285_41317 = cljs.core.deref(re_frame.trace.traces);
(cb_41316.cljs$core$IFn$_invoke$arity$1 ? cb_41316.cljs$core$IFn$_invoke$arity$1(G__41285_41317) : cb_41316.call(null,G__41285_41317));
}catch (e41284){var e_41318 = e41284;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_41315,"while storing",cljs.core.deref(re_frame.trace.traces),e_41318], 0));
}

var G__41319 = seq__41267_41310;
var G__41320 = chunk__41268_41311;
var G__41321 = count__41269_41312;
var G__41322 = (i__41270_41313 + (1));
seq__41267_41310 = G__41319;
chunk__41268_41311 = G__41320;
count__41269_41312 = G__41321;
i__41270_41313 = G__41322;
continue;
} else {
var temp__5735__auto___41323 = cljs.core.seq(seq__41267_41310);
if(temp__5735__auto___41323){
var seq__41267_41324__$1 = temp__5735__auto___41323;
if(cljs.core.chunked_seq_QMARK_(seq__41267_41324__$1)){
var c__4609__auto___41325 = cljs.core.chunk_first(seq__41267_41324__$1);
var G__41326 = cljs.core.chunk_rest(seq__41267_41324__$1);
var G__41327 = c__4609__auto___41325;
var G__41328 = cljs.core.count(c__4609__auto___41325);
var G__41329 = (0);
seq__41267_41310 = G__41326;
chunk__41268_41311 = G__41327;
count__41269_41312 = G__41328;
i__41270_41313 = G__41329;
continue;
} else {
var vec__41286_41330 = cljs.core.first(seq__41267_41324__$1);
var k_41331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41286_41330,(0),null);
var cb_41332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41286_41330,(1),null);
try{var G__41290_41333 = cljs.core.deref(re_frame.trace.traces);
(cb_41332.cljs$core$IFn$_invoke$arity$1 ? cb_41332.cljs$core$IFn$_invoke$arity$1(G__41290_41333) : cb_41332.call(null,G__41290_41333));
}catch (e41289){var e_41334 = e41289;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_41331,"while storing",cljs.core.deref(re_frame.trace.traces),e_41334], 0));
}

var G__41335 = cljs.core.next(seq__41267_41324__$1);
var G__41336 = null;
var G__41337 = (0);
var G__41338 = (0);
seq__41267_41310 = G__41335;
chunk__41268_41311 = G__41336;
count__41269_41312 = G__41337;
i__41270_41313 = G__41338;
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
