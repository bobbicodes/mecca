goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__37294 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37295 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37295);

try{try{var seq__37296 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37297 = null;
var count__37298 = (0);
var i__37299 = (0);
while(true){
if((i__37299 < count__37298)){
var vec__37306 = chunk__37297.cljs$core$IIndexed$_nth$arity$2(null,i__37299);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37306,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37306,(1),null);
var temp__5733__auto___37365 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37365)){
var effect_fn_37366 = temp__5733__auto___37365;
(effect_fn_37366.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37366.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37366.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37367 = seq__37296;
var G__37368 = chunk__37297;
var G__37369 = count__37298;
var G__37370 = (i__37299 + (1));
seq__37296 = G__37367;
chunk__37297 = G__37368;
count__37298 = G__37369;
i__37299 = G__37370;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37296);
if(temp__5735__auto__){
var seq__37296__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37296__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37296__$1);
var G__37371 = cljs.core.chunk_rest(seq__37296__$1);
var G__37372 = c__4609__auto__;
var G__37373 = cljs.core.count(c__4609__auto__);
var G__37374 = (0);
seq__37296 = G__37371;
chunk__37297 = G__37372;
count__37298 = G__37373;
i__37299 = G__37374;
continue;
} else {
var vec__37310 = cljs.core.first(seq__37296__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37310,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37310,(1),null);
var temp__5733__auto___37375 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37375)){
var effect_fn_37376 = temp__5733__auto___37375;
(effect_fn_37376.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37376.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37376.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37377 = cljs.core.next(seq__37296__$1);
var G__37378 = null;
var G__37379 = (0);
var G__37380 = (0);
seq__37296 = G__37377;
chunk__37297 = G__37378;
count__37298 = G__37379;
i__37299 = G__37380;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36987__auto___37381 = re_frame.interop.now();
var duration__36988__auto___37382 = (end__36987__auto___37381 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36988__auto___37382,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36987__auto___37381);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37294);
}} else {
var seq__37313 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37314 = null;
var count__37315 = (0);
var i__37316 = (0);
while(true){
if((i__37316 < count__37315)){
var vec__37323 = chunk__37314.cljs$core$IIndexed$_nth$arity$2(null,i__37316);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37323,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37323,(1),null);
var temp__5733__auto___37383 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37383)){
var effect_fn_37384 = temp__5733__auto___37383;
(effect_fn_37384.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37384.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37384.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37385 = seq__37313;
var G__37386 = chunk__37314;
var G__37387 = count__37315;
var G__37388 = (i__37316 + (1));
seq__37313 = G__37385;
chunk__37314 = G__37386;
count__37315 = G__37387;
i__37316 = G__37388;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37313);
if(temp__5735__auto__){
var seq__37313__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37313__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37313__$1);
var G__37389 = cljs.core.chunk_rest(seq__37313__$1);
var G__37390 = c__4609__auto__;
var G__37391 = cljs.core.count(c__4609__auto__);
var G__37392 = (0);
seq__37313 = G__37389;
chunk__37314 = G__37390;
count__37315 = G__37391;
i__37316 = G__37392;
continue;
} else {
var vec__37326 = cljs.core.first(seq__37313__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37326,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37326,(1),null);
var temp__5733__auto___37393 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37393)){
var effect_fn_37394 = temp__5733__auto___37393;
(effect_fn_37394.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37394.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37394.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37395 = cljs.core.next(seq__37313__$1);
var G__37396 = null;
var G__37397 = (0);
var G__37398 = (0);
seq__37313 = G__37395;
chunk__37314 = G__37396;
count__37315 = G__37397;
i__37316 = G__37398;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__37330 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37331 = null;
var count__37332 = (0);
var i__37333 = (0);
while(true){
if((i__37333 < count__37332)){
var map__37340 = chunk__37331.cljs$core$IIndexed$_nth$arity$2(null,i__37333);
var map__37340__$1 = (((((!((map__37340 == null))))?(((((map__37340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37340):map__37340);
var effect = map__37340__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37330,chunk__37331,count__37332,i__37333,map__37340,map__37340__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37330,chunk__37331,count__37332,i__37333,map__37340,map__37340__$1,effect,ms,dispatch))
,ms);
}


var G__37399 = seq__37330;
var G__37400 = chunk__37331;
var G__37401 = count__37332;
var G__37402 = (i__37333 + (1));
seq__37330 = G__37399;
chunk__37331 = G__37400;
count__37332 = G__37401;
i__37333 = G__37402;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37330);
if(temp__5735__auto__){
var seq__37330__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37330__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37330__$1);
var G__37403 = cljs.core.chunk_rest(seq__37330__$1);
var G__37404 = c__4609__auto__;
var G__37405 = cljs.core.count(c__4609__auto__);
var G__37406 = (0);
seq__37330 = G__37403;
chunk__37331 = G__37404;
count__37332 = G__37405;
i__37333 = G__37406;
continue;
} else {
var map__37343 = cljs.core.first(seq__37330__$1);
var map__37343__$1 = (((((!((map__37343 == null))))?(((((map__37343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37343):map__37343);
var effect = map__37343__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37343__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37343__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37330,chunk__37331,count__37332,i__37333,map__37343,map__37343__$1,effect,ms,dispatch,seq__37330__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37330,chunk__37331,count__37332,i__37333,map__37343,map__37343__$1,effect,ms,dispatch,seq__37330__$1,temp__5735__auto__))
,ms);
}


var G__37407 = cljs.core.next(seq__37330__$1);
var G__37408 = null;
var G__37409 = (0);
var G__37410 = (0);
seq__37330 = G__37407;
chunk__37331 = G__37408;
count__37332 = G__37409;
i__37333 = G__37410;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__37345 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37346 = null;
var count__37347 = (0);
var i__37348 = (0);
while(true){
if((i__37348 < count__37347)){
var event = chunk__37346.cljs$core$IIndexed$_nth$arity$2(null,i__37348);
re_frame.router.dispatch(event);


var G__37411 = seq__37345;
var G__37412 = chunk__37346;
var G__37413 = count__37347;
var G__37414 = (i__37348 + (1));
seq__37345 = G__37411;
chunk__37346 = G__37412;
count__37347 = G__37413;
i__37348 = G__37414;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37345);
if(temp__5735__auto__){
var seq__37345__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37345__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37345__$1);
var G__37415 = cljs.core.chunk_rest(seq__37345__$1);
var G__37416 = c__4609__auto__;
var G__37417 = cljs.core.count(c__4609__auto__);
var G__37418 = (0);
seq__37345 = G__37415;
chunk__37346 = G__37416;
count__37347 = G__37417;
i__37348 = G__37418;
continue;
} else {
var event = cljs.core.first(seq__37345__$1);
re_frame.router.dispatch(event);


var G__37419 = cljs.core.next(seq__37345__$1);
var G__37420 = null;
var G__37421 = (0);
var G__37422 = (0);
seq__37345 = G__37419;
chunk__37346 = G__37420;
count__37347 = G__37421;
i__37348 = G__37422;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__37357 = cljs.core.seq(value);
var chunk__37358 = null;
var count__37359 = (0);
var i__37360 = (0);
while(true){
if((i__37360 < count__37359)){
var event = chunk__37358.cljs$core$IIndexed$_nth$arity$2(null,i__37360);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37423 = seq__37357;
var G__37424 = chunk__37358;
var G__37425 = count__37359;
var G__37426 = (i__37360 + (1));
seq__37357 = G__37423;
chunk__37358 = G__37424;
count__37359 = G__37425;
i__37360 = G__37426;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37357);
if(temp__5735__auto__){
var seq__37357__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37357__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37357__$1);
var G__37427 = cljs.core.chunk_rest(seq__37357__$1);
var G__37428 = c__4609__auto__;
var G__37429 = cljs.core.count(c__4609__auto__);
var G__37430 = (0);
seq__37357 = G__37427;
chunk__37358 = G__37428;
count__37359 = G__37429;
i__37360 = G__37430;
continue;
} else {
var event = cljs.core.first(seq__37357__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37431 = cljs.core.next(seq__37357__$1);
var G__37432 = null;
var G__37433 = (0);
var G__37434 = (0);
seq__37357 = G__37431;
chunk__37358 = G__37432;
count__37359 = G__37433;
i__37360 = G__37434;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
