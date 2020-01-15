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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__43186){
var map__43187 = p__43186;
var map__43187__$1 = (((((!((map__43187 == null))))?(((((map__43187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43187):map__43187);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__43189_43220 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__43190_43221 = null;
var count__43191_43222 = (0);
var i__43192_43223 = (0);
while(true){
if((i__43192_43223 < count__43191_43222)){
var vec__43203_43224 = chunk__43190_43221.cljs$core$IIndexed$_nth$arity$2(null,i__43192_43223);
var k_43225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43203_43224,(0),null);
var cb_43226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43203_43224,(1),null);
try{var G__43207_43227 = cljs.core.deref(re_frame.trace.traces);
(cb_43226.cljs$core$IFn$_invoke$arity$1 ? cb_43226.cljs$core$IFn$_invoke$arity$1(G__43207_43227) : cb_43226.call(null,G__43207_43227));
}catch (e43206){var e_43228 = e43206;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_43225,"while storing",cljs.core.deref(re_frame.trace.traces),e_43228], 0));
}

var G__43229 = seq__43189_43220;
var G__43230 = chunk__43190_43221;
var G__43231 = count__43191_43222;
var G__43232 = (i__43192_43223 + (1));
seq__43189_43220 = G__43229;
chunk__43190_43221 = G__43230;
count__43191_43222 = G__43231;
i__43192_43223 = G__43232;
continue;
} else {
var temp__5735__auto___43233 = cljs.core.seq(seq__43189_43220);
if(temp__5735__auto___43233){
var seq__43189_43234__$1 = temp__5735__auto___43233;
if(cljs.core.chunked_seq_QMARK_(seq__43189_43234__$1)){
var c__4609__auto___43235 = cljs.core.chunk_first(seq__43189_43234__$1);
var G__43236 = cljs.core.chunk_rest(seq__43189_43234__$1);
var G__43237 = c__4609__auto___43235;
var G__43238 = cljs.core.count(c__4609__auto___43235);
var G__43239 = (0);
seq__43189_43220 = G__43236;
chunk__43190_43221 = G__43237;
count__43191_43222 = G__43238;
i__43192_43223 = G__43239;
continue;
} else {
var vec__43208_43240 = cljs.core.first(seq__43189_43234__$1);
var k_43241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43208_43240,(0),null);
var cb_43242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43208_43240,(1),null);
try{var G__43212_43243 = cljs.core.deref(re_frame.trace.traces);
(cb_43242.cljs$core$IFn$_invoke$arity$1 ? cb_43242.cljs$core$IFn$_invoke$arity$1(G__43212_43243) : cb_43242.call(null,G__43212_43243));
}catch (e43211){var e_43244 = e43211;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_43241,"while storing",cljs.core.deref(re_frame.trace.traces),e_43244], 0));
}

var G__43245 = cljs.core.next(seq__43189_43234__$1);
var G__43246 = null;
var G__43247 = (0);
var G__43248 = (0);
seq__43189_43220 = G__43245;
chunk__43190_43221 = G__43246;
count__43191_43222 = G__43247;
i__43192_43223 = G__43248;
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
