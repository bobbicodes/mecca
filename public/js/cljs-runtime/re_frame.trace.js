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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__40382){
var map__40383 = p__40382;
var map__40383__$1 = (((((!((map__40383 == null))))?(((((map__40383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40383):map__40383);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40383__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40383__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40383__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40383__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__40385_40420 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__40386_40421 = null;
var count__40387_40422 = (0);
var i__40388_40423 = (0);
while(true){
if((i__40388_40423 < count__40387_40422)){
var vec__40399_40427 = chunk__40386_40421.cljs$core$IIndexed$_nth$arity$2(null,i__40388_40423);
var k_40428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40399_40427,(0),null);
var cb_40429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40399_40427,(1),null);
try{var G__40403_40430 = cljs.core.deref(re_frame.trace.traces);
(cb_40429.cljs$core$IFn$_invoke$arity$1 ? cb_40429.cljs$core$IFn$_invoke$arity$1(G__40403_40430) : cb_40429.call(null,G__40403_40430));
}catch (e40402){var e_40431 = e40402;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40428,"while storing",cljs.core.deref(re_frame.trace.traces),e_40431], 0));
}

var G__40432 = seq__40385_40420;
var G__40433 = chunk__40386_40421;
var G__40434 = count__40387_40422;
var G__40435 = (i__40388_40423 + (1));
seq__40385_40420 = G__40432;
chunk__40386_40421 = G__40433;
count__40387_40422 = G__40434;
i__40388_40423 = G__40435;
continue;
} else {
var temp__5735__auto___40436 = cljs.core.seq(seq__40385_40420);
if(temp__5735__auto___40436){
var seq__40385_40437__$1 = temp__5735__auto___40436;
if(cljs.core.chunked_seq_QMARK_(seq__40385_40437__$1)){
var c__4609__auto___40438 = cljs.core.chunk_first(seq__40385_40437__$1);
var G__40439 = cljs.core.chunk_rest(seq__40385_40437__$1);
var G__40440 = c__4609__auto___40438;
var G__40441 = cljs.core.count(c__4609__auto___40438);
var G__40442 = (0);
seq__40385_40420 = G__40439;
chunk__40386_40421 = G__40440;
count__40387_40422 = G__40441;
i__40388_40423 = G__40442;
continue;
} else {
var vec__40404_40445 = cljs.core.first(seq__40385_40437__$1);
var k_40446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40404_40445,(0),null);
var cb_40447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40404_40445,(1),null);
try{var G__40408_40448 = cljs.core.deref(re_frame.trace.traces);
(cb_40447.cljs$core$IFn$_invoke$arity$1 ? cb_40447.cljs$core$IFn$_invoke$arity$1(G__40408_40448) : cb_40447.call(null,G__40408_40448));
}catch (e40407){var e_40449 = e40407;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40446,"while storing",cljs.core.deref(re_frame.trace.traces),e_40449], 0));
}

var G__40450 = cljs.core.next(seq__40385_40437__$1);
var G__40451 = null;
var G__40452 = (0);
var G__40453 = (0);
seq__40385_40420 = G__40450;
chunk__40386_40421 = G__40451;
count__40387_40422 = G__40452;
i__40388_40423 = G__40453;
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
