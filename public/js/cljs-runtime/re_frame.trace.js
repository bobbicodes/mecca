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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37020){
var map__37021 = p__37020;
var map__37021__$1 = (((((!((map__37021 == null))))?(((((map__37021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37021):map__37021);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__37025_37054 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__37026_37055 = null;
var count__37027_37056 = (0);
var i__37028_37057 = (0);
while(true){
if((i__37028_37057 < count__37027_37056)){
var vec__37040_37058 = chunk__37026_37055.cljs$core$IIndexed$_nth$arity$2(null,i__37028_37057);
var k_37059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37040_37058,(0),null);
var cb_37060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37040_37058,(1),null);
try{var G__37044_37061 = cljs.core.deref(re_frame.trace.traces);
(cb_37060.cljs$core$IFn$_invoke$arity$1 ? cb_37060.cljs$core$IFn$_invoke$arity$1(G__37044_37061) : cb_37060.call(null,G__37044_37061));
}catch (e37043){var e_37062 = e37043;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37059,"while storing",cljs.core.deref(re_frame.trace.traces),e_37062], 0));
}

var G__37063 = seq__37025_37054;
var G__37064 = chunk__37026_37055;
var G__37065 = count__37027_37056;
var G__37066 = (i__37028_37057 + (1));
seq__37025_37054 = G__37063;
chunk__37026_37055 = G__37064;
count__37027_37056 = G__37065;
i__37028_37057 = G__37066;
continue;
} else {
var temp__5735__auto___37067 = cljs.core.seq(seq__37025_37054);
if(temp__5735__auto___37067){
var seq__37025_37068__$1 = temp__5735__auto___37067;
if(cljs.core.chunked_seq_QMARK_(seq__37025_37068__$1)){
var c__4609__auto___37069 = cljs.core.chunk_first(seq__37025_37068__$1);
var G__37070 = cljs.core.chunk_rest(seq__37025_37068__$1);
var G__37071 = c__4609__auto___37069;
var G__37072 = cljs.core.count(c__4609__auto___37069);
var G__37073 = (0);
seq__37025_37054 = G__37070;
chunk__37026_37055 = G__37071;
count__37027_37056 = G__37072;
i__37028_37057 = G__37073;
continue;
} else {
var vec__37046_37074 = cljs.core.first(seq__37025_37068__$1);
var k_37075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37046_37074,(0),null);
var cb_37076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37046_37074,(1),null);
try{var G__37050_37077 = cljs.core.deref(re_frame.trace.traces);
(cb_37076.cljs$core$IFn$_invoke$arity$1 ? cb_37076.cljs$core$IFn$_invoke$arity$1(G__37050_37077) : cb_37076.call(null,G__37050_37077));
}catch (e37049){var e_37078 = e37049;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37075,"while storing",cljs.core.deref(re_frame.trace.traces),e_37078], 0));
}

var G__37079 = cljs.core.next(seq__37025_37068__$1);
var G__37080 = null;
var G__37081 = (0);
var G__37082 = (0);
seq__37025_37054 = G__37079;
chunk__37026_37055 = G__37080;
count__37027_37056 = G__37081;
i__37028_37057 = G__37082;
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
