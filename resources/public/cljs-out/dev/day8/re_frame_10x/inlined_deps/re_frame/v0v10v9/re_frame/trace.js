// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('goog.functions');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.id = cljs.core.atom.call(null,(0));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$start_trace(p__12241){
var map__12242 = p__12241;
var map__12242__$1 = ((((!((map__12242 == null)))?(((((map__12242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12242):map__12242);
var operation = cljs.core.get.call(null,map__12242__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__12242__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__12242__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__12242__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce.call(null,(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$tracing_cb_debounced(){
var seq__12244_12256 = cljs.core.seq.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.trace_cbs));
var chunk__12245_12257 = null;
var count__12246_12258 = (0);
var i__12247_12259 = (0);
while(true){
if((i__12247_12259 < count__12246_12258)){
var vec__12248_12260 = cljs.core._nth.call(null,chunk__12245_12257,i__12247_12259);
var k_12261 = cljs.core.nth.call(null,vec__12248_12260,(0),null);
var cb_12262 = cljs.core.nth.call(null,vec__12248_12260,(1),null);
try{cb_12262.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces));
}catch (e12251){var e_12263 = e12251;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_12261,"while storing",cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces),e_12263);
}

var G__12264 = seq__12244_12256;
var G__12265 = chunk__12245_12257;
var G__12266 = count__12246_12258;
var G__12267 = (i__12247_12259 + (1));
seq__12244_12256 = G__12264;
chunk__12245_12257 = G__12265;
count__12246_12258 = G__12266;
i__12247_12259 = G__12267;
continue;
} else {
var temp__5457__auto___12268 = cljs.core.seq.call(null,seq__12244_12256);
if(temp__5457__auto___12268){
var seq__12244_12269__$1 = temp__5457__auto___12268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12244_12269__$1)){
var c__4351__auto___12270 = cljs.core.chunk_first.call(null,seq__12244_12269__$1);
var G__12271 = cljs.core.chunk_rest.call(null,seq__12244_12269__$1);
var G__12272 = c__4351__auto___12270;
var G__12273 = cljs.core.count.call(null,c__4351__auto___12270);
var G__12274 = (0);
seq__12244_12256 = G__12271;
chunk__12245_12257 = G__12272;
count__12246_12258 = G__12273;
i__12247_12259 = G__12274;
continue;
} else {
var vec__12252_12275 = cljs.core.first.call(null,seq__12244_12269__$1);
var k_12276 = cljs.core.nth.call(null,vec__12252_12275,(0),null);
var cb_12277 = cljs.core.nth.call(null,vec__12252_12275,(1),null);
try{cb_12277.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces));
}catch (e12255){var e_12278 = e12255;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_12276,"while storing",cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces),e_12278);
}

var G__12279 = cljs.core.next.call(null,seq__12244_12269__$1);
var G__12280 = null;
var G__12281 = (0);
var G__12282 = (0);
seq__12244_12256 = G__12279;
chunk__12245_12257 = G__12280;
count__12246_12258 = G__12281;
i__12247_12259 = G__12282;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery) - (25)) < now)){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
