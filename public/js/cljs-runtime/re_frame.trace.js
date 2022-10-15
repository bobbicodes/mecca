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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37028){
var map__37029 = p__37028;
var map__37029__$1 = (((((!((map__37029 == null))))?(((((map__37029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37029):map__37029);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37029__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37029__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37029__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37029__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__37031_37058 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__37032_37059 = null;
var count__37033_37060 = (0);
var i__37034_37061 = (0);
while(true){
if((i__37034_37061 < count__37033_37060)){
var vec__37045_37062 = chunk__37032_37059.cljs$core$IIndexed$_nth$arity$2(null,i__37034_37061);
var k_37063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045_37062,(0),null);
var cb_37064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045_37062,(1),null);
try{var G__37049_37065 = cljs.core.deref(re_frame.trace.traces);
(cb_37064.cljs$core$IFn$_invoke$arity$1 ? cb_37064.cljs$core$IFn$_invoke$arity$1(G__37049_37065) : cb_37064.call(null,G__37049_37065));
}catch (e37048){var e_37066 = e37048;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37063,"while storing",cljs.core.deref(re_frame.trace.traces),e_37066], 0));
}

var G__37067 = seq__37031_37058;
var G__37068 = chunk__37032_37059;
var G__37069 = count__37033_37060;
var G__37070 = (i__37034_37061 + (1));
seq__37031_37058 = G__37067;
chunk__37032_37059 = G__37068;
count__37033_37060 = G__37069;
i__37034_37061 = G__37070;
continue;
} else {
var temp__5735__auto___37071 = cljs.core.seq(seq__37031_37058);
if(temp__5735__auto___37071){
var seq__37031_37072__$1 = temp__5735__auto___37071;
if(cljs.core.chunked_seq_QMARK_(seq__37031_37072__$1)){
var c__4609__auto___37073 = cljs.core.chunk_first(seq__37031_37072__$1);
var G__37074 = cljs.core.chunk_rest(seq__37031_37072__$1);
var G__37075 = c__4609__auto___37073;
var G__37076 = cljs.core.count(c__4609__auto___37073);
var G__37077 = (0);
seq__37031_37058 = G__37074;
chunk__37032_37059 = G__37075;
count__37033_37060 = G__37076;
i__37034_37061 = G__37077;
continue;
} else {
var vec__37050_37078 = cljs.core.first(seq__37031_37072__$1);
var k_37079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37050_37078,(0),null);
var cb_37080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37050_37078,(1),null);
try{var G__37054_37081 = cljs.core.deref(re_frame.trace.traces);
(cb_37080.cljs$core$IFn$_invoke$arity$1 ? cb_37080.cljs$core$IFn$_invoke$arity$1(G__37054_37081) : cb_37080.call(null,G__37054_37081));
}catch (e37053){var e_37082 = e37053;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37079,"while storing",cljs.core.deref(re_frame.trace.traces),e_37082], 0));
}

var G__37083 = cljs.core.next(seq__37031_37072__$1);
var G__37084 = null;
var G__37085 = (0);
var G__37086 = (0);
seq__37031_37058 = G__37083;
chunk__37032_37059 = G__37084;
count__37033_37060 = G__37085;
i__37034_37061 = G__37086;
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
