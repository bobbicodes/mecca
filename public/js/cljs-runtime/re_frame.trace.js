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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__41304){
var map__41305 = p__41304;
var map__41305__$1 = (((((!((map__41305 == null))))?(((((map__41305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41305):map__41305);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41305__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41305__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41305__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41305__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__41307_41334 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__41308_41335 = null;
var count__41309_41336 = (0);
var i__41310_41337 = (0);
while(true){
if((i__41310_41337 < count__41309_41336)){
var vec__41321_41338 = chunk__41308_41335.cljs$core$IIndexed$_nth$arity$2(null,i__41310_41337);
var k_41339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41321_41338,(0),null);
var cb_41340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41321_41338,(1),null);
try{var G__41325_41341 = cljs.core.deref(re_frame.trace.traces);
(cb_41340.cljs$core$IFn$_invoke$arity$1 ? cb_41340.cljs$core$IFn$_invoke$arity$1(G__41325_41341) : cb_41340.call(null,G__41325_41341));
}catch (e41324){var e_41342 = e41324;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_41339,"while storing",cljs.core.deref(re_frame.trace.traces),e_41342], 0));
}

var G__41343 = seq__41307_41334;
var G__41344 = chunk__41308_41335;
var G__41345 = count__41309_41336;
var G__41346 = (i__41310_41337 + (1));
seq__41307_41334 = G__41343;
chunk__41308_41335 = G__41344;
count__41309_41336 = G__41345;
i__41310_41337 = G__41346;
continue;
} else {
var temp__5735__auto___41347 = cljs.core.seq(seq__41307_41334);
if(temp__5735__auto___41347){
var seq__41307_41348__$1 = temp__5735__auto___41347;
if(cljs.core.chunked_seq_QMARK_(seq__41307_41348__$1)){
var c__4609__auto___41349 = cljs.core.chunk_first(seq__41307_41348__$1);
var G__41350 = cljs.core.chunk_rest(seq__41307_41348__$1);
var G__41351 = c__4609__auto___41349;
var G__41352 = cljs.core.count(c__4609__auto___41349);
var G__41353 = (0);
seq__41307_41334 = G__41350;
chunk__41308_41335 = G__41351;
count__41309_41336 = G__41352;
i__41310_41337 = G__41353;
continue;
} else {
var vec__41326_41354 = cljs.core.first(seq__41307_41348__$1);
var k_41355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41326_41354,(0),null);
var cb_41356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41326_41354,(1),null);
try{var G__41330_41357 = cljs.core.deref(re_frame.trace.traces);
(cb_41356.cljs$core$IFn$_invoke$arity$1 ? cb_41356.cljs$core$IFn$_invoke$arity$1(G__41330_41357) : cb_41356.call(null,G__41330_41357));
}catch (e41329){var e_41358 = e41329;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_41355,"while storing",cljs.core.deref(re_frame.trace.traces),e_41358], 0));
}

var G__41359 = cljs.core.next(seq__41307_41348__$1);
var G__41360 = null;
var G__41361 = (0);
var G__41362 = (0);
seq__41307_41334 = G__41359;
chunk__41308_41335 = G__41360;
count__41309_41336 = G__41361;
i__41310_41337 = G__41362;
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
