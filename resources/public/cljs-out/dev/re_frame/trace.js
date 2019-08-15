// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__10069){
var map__10070 = p__10069;
var map__10070__$1 = ((((!((map__10070 == null)))?(((((map__10070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10070):map__10070);
var operation = cljs.core.get.call(null,map__10070__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__10070__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__10070__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__10070__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__10072_10084 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10073_10085 = null;
var count__10074_10086 = (0);
var i__10075_10087 = (0);
while(true){
if((i__10075_10087 < count__10074_10086)){
var vec__10076_10088 = cljs.core._nth.call(null,chunk__10073_10085,i__10075_10087);
var k_10089 = cljs.core.nth.call(null,vec__10076_10088,(0),null);
var cb_10090 = cljs.core.nth.call(null,vec__10076_10088,(1),null);
try{cb_10090.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e10079){var e_10091 = e10079;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_10089,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_10091);
}

var G__10092 = seq__10072_10084;
var G__10093 = chunk__10073_10085;
var G__10094 = count__10074_10086;
var G__10095 = (i__10075_10087 + (1));
seq__10072_10084 = G__10092;
chunk__10073_10085 = G__10093;
count__10074_10086 = G__10094;
i__10075_10087 = G__10095;
continue;
} else {
var temp__5457__auto___10096 = cljs.core.seq.call(null,seq__10072_10084);
if(temp__5457__auto___10096){
var seq__10072_10097__$1 = temp__5457__auto___10096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10072_10097__$1)){
var c__4351__auto___10098 = cljs.core.chunk_first.call(null,seq__10072_10097__$1);
var G__10099 = cljs.core.chunk_rest.call(null,seq__10072_10097__$1);
var G__10100 = c__4351__auto___10098;
var G__10101 = cljs.core.count.call(null,c__4351__auto___10098);
var G__10102 = (0);
seq__10072_10084 = G__10099;
chunk__10073_10085 = G__10100;
count__10074_10086 = G__10101;
i__10075_10087 = G__10102;
continue;
} else {
var vec__10080_10103 = cljs.core.first.call(null,seq__10072_10097__$1);
var k_10104 = cljs.core.nth.call(null,vec__10080_10103,(0),null);
var cb_10105 = cljs.core.nth.call(null,vec__10080_10103,(1),null);
try{cb_10105.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e10083){var e_10106 = e10083;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_10104,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_10106);
}

var G__10107 = cljs.core.next.call(null,seq__10072_10097__$1);
var G__10108 = null;
var G__10109 = (0);
var G__10110 = (0);
seq__10072_10084 = G__10107;
chunk__10073_10085 = G__10108;
count__10074_10086 = G__10109;
i__10075_10087 = G__10110;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
