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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37007){
var map__37008 = p__37007;
var map__37008__$1 = (((((!((map__37008 == null))))?(((((map__37008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37008):map__37008);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37008__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37008__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37008__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37008__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__37010_37037 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__37011_37038 = null;
var count__37012_37039 = (0);
var i__37013_37040 = (0);
while(true){
if((i__37013_37040 < count__37012_37039)){
var vec__37024_37041 = chunk__37011_37038.cljs$core$IIndexed$_nth$arity$2(null,i__37013_37040);
var k_37042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024_37041,(0),null);
var cb_37043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024_37041,(1),null);
try{var G__37028_37044 = cljs.core.deref(re_frame.trace.traces);
(cb_37043.cljs$core$IFn$_invoke$arity$1 ? cb_37043.cljs$core$IFn$_invoke$arity$1(G__37028_37044) : cb_37043.call(null,G__37028_37044));
}catch (e37027){var e_37045 = e37027;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37042,"while storing",cljs.core.deref(re_frame.trace.traces),e_37045], 0));
}

var G__37046 = seq__37010_37037;
var G__37047 = chunk__37011_37038;
var G__37048 = count__37012_37039;
var G__37049 = (i__37013_37040 + (1));
seq__37010_37037 = G__37046;
chunk__37011_37038 = G__37047;
count__37012_37039 = G__37048;
i__37013_37040 = G__37049;
continue;
} else {
var temp__5735__auto___37050 = cljs.core.seq(seq__37010_37037);
if(temp__5735__auto___37050){
var seq__37010_37051__$1 = temp__5735__auto___37050;
if(cljs.core.chunked_seq_QMARK_(seq__37010_37051__$1)){
var c__4609__auto___37052 = cljs.core.chunk_first(seq__37010_37051__$1);
var G__37053 = cljs.core.chunk_rest(seq__37010_37051__$1);
var G__37054 = c__4609__auto___37052;
var G__37055 = cljs.core.count(c__4609__auto___37052);
var G__37056 = (0);
seq__37010_37037 = G__37053;
chunk__37011_37038 = G__37054;
count__37012_37039 = G__37055;
i__37013_37040 = G__37056;
continue;
} else {
var vec__37029_37057 = cljs.core.first(seq__37010_37051__$1);
var k_37058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37029_37057,(0),null);
var cb_37059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37029_37057,(1),null);
try{var G__37033_37060 = cljs.core.deref(re_frame.trace.traces);
(cb_37059.cljs$core$IFn$_invoke$arity$1 ? cb_37059.cljs$core$IFn$_invoke$arity$1(G__37033_37060) : cb_37059.call(null,G__37033_37060));
}catch (e37032){var e_37061 = e37032;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37058,"while storing",cljs.core.deref(re_frame.trace.traces),e_37061], 0));
}

var G__37062 = cljs.core.next(seq__37010_37051__$1);
var G__37063 = null;
var G__37064 = (0);
var G__37065 = (0);
seq__37010_37037 = G__37062;
chunk__37011_37038 = G__37063;
count__37012_37039 = G__37064;
i__37013_37040 = G__37065;
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
