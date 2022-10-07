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
var _STAR_current_trace_STAR__orig_val__37287 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37288 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37288);

try{try{var seq__37289 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37290 = null;
var count__37291 = (0);
var i__37292 = (0);
while(true){
if((i__37292 < count__37291)){
var vec__37300 = chunk__37290.cljs$core$IIndexed$_nth$arity$2(null,i__37292);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37300,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37300,(1),null);
var temp__5733__auto___37375 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37375)){
var effect_fn_37376 = temp__5733__auto___37375;
(effect_fn_37376.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37376.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37376.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37378 = seq__37289;
var G__37379 = chunk__37290;
var G__37380 = count__37291;
var G__37381 = (i__37292 + (1));
seq__37289 = G__37378;
chunk__37290 = G__37379;
count__37291 = G__37380;
i__37292 = G__37381;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37289);
if(temp__5735__auto__){
var seq__37289__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37289__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37289__$1);
var G__37382 = cljs.core.chunk_rest(seq__37289__$1);
var G__37383 = c__4609__auto__;
var G__37384 = cljs.core.count(c__4609__auto__);
var G__37385 = (0);
seq__37289 = G__37382;
chunk__37290 = G__37383;
count__37291 = G__37384;
i__37292 = G__37385;
continue;
} else {
var vec__37304 = cljs.core.first(seq__37289__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37304,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37304,(1),null);
var temp__5733__auto___37386 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37386)){
var effect_fn_37387 = temp__5733__auto___37386;
(effect_fn_37387.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37387.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37387.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37389 = cljs.core.next(seq__37289__$1);
var G__37390 = null;
var G__37391 = (0);
var G__37392 = (0);
seq__37289 = G__37389;
chunk__37290 = G__37390;
count__37291 = G__37391;
i__37292 = G__37392;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36998__auto___37395 = re_frame.interop.now();
var duration__36999__auto___37396 = (end__36998__auto___37395 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36999__auto___37396,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36998__auto___37395);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37287);
}} else {
var seq__37307 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37308 = null;
var count__37309 = (0);
var i__37310 = (0);
while(true){
if((i__37310 < count__37309)){
var vec__37320 = chunk__37308.cljs$core$IIndexed$_nth$arity$2(null,i__37310);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37320,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37320,(1),null);
var temp__5733__auto___37397 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37397)){
var effect_fn_37398 = temp__5733__auto___37397;
(effect_fn_37398.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37398.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37398.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37399 = seq__37307;
var G__37400 = chunk__37308;
var G__37401 = count__37309;
var G__37402 = (i__37310 + (1));
seq__37307 = G__37399;
chunk__37308 = G__37400;
count__37309 = G__37401;
i__37310 = G__37402;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37307);
if(temp__5735__auto__){
var seq__37307__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37307__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37307__$1);
var G__37403 = cljs.core.chunk_rest(seq__37307__$1);
var G__37404 = c__4609__auto__;
var G__37405 = cljs.core.count(c__4609__auto__);
var G__37406 = (0);
seq__37307 = G__37403;
chunk__37308 = G__37404;
count__37309 = G__37405;
i__37310 = G__37406;
continue;
} else {
var vec__37328 = cljs.core.first(seq__37307__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37328,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37328,(1),null);
var temp__5733__auto___37407 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37407)){
var effect_fn_37408 = temp__5733__auto___37407;
(effect_fn_37408.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37408.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37408.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37409 = cljs.core.next(seq__37307__$1);
var G__37410 = null;
var G__37411 = (0);
var G__37412 = (0);
seq__37307 = G__37409;
chunk__37308 = G__37410;
count__37309 = G__37411;
i__37310 = G__37412;
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
var seq__37331 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37332 = null;
var count__37333 = (0);
var i__37334 = (0);
while(true){
if((i__37334 < count__37333)){
var map__37351 = chunk__37332.cljs$core$IIndexed$_nth$arity$2(null,i__37334);
var map__37351__$1 = (((((!((map__37351 == null))))?(((((map__37351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37351):map__37351);
var effect = map__37351__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37351__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37351__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37331,chunk__37332,count__37333,i__37334,map__37351,map__37351__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37331,chunk__37332,count__37333,i__37334,map__37351,map__37351__$1,effect,ms,dispatch))
,ms);
}


var G__37413 = seq__37331;
var G__37414 = chunk__37332;
var G__37415 = count__37333;
var G__37416 = (i__37334 + (1));
seq__37331 = G__37413;
chunk__37332 = G__37414;
count__37333 = G__37415;
i__37334 = G__37416;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37331);
if(temp__5735__auto__){
var seq__37331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37331__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37331__$1);
var G__37417 = cljs.core.chunk_rest(seq__37331__$1);
var G__37418 = c__4609__auto__;
var G__37419 = cljs.core.count(c__4609__auto__);
var G__37420 = (0);
seq__37331 = G__37417;
chunk__37332 = G__37418;
count__37333 = G__37419;
i__37334 = G__37420;
continue;
} else {
var map__37357 = cljs.core.first(seq__37331__$1);
var map__37357__$1 = (((((!((map__37357 == null))))?(((((map__37357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37357):map__37357);
var effect = map__37357__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37331,chunk__37332,count__37333,i__37334,map__37357,map__37357__$1,effect,ms,dispatch,seq__37331__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37331,chunk__37332,count__37333,i__37334,map__37357,map__37357__$1,effect,ms,dispatch,seq__37331__$1,temp__5735__auto__))
,ms);
}


var G__37424 = cljs.core.next(seq__37331__$1);
var G__37425 = null;
var G__37426 = (0);
var G__37427 = (0);
seq__37331 = G__37424;
chunk__37332 = G__37425;
count__37333 = G__37426;
i__37334 = G__37427;
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
var seq__37359 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37360 = null;
var count__37361 = (0);
var i__37362 = (0);
while(true){
if((i__37362 < count__37361)){
var event = chunk__37360.cljs$core$IIndexed$_nth$arity$2(null,i__37362);
re_frame.router.dispatch(event);


var G__37428 = seq__37359;
var G__37429 = chunk__37360;
var G__37430 = count__37361;
var G__37431 = (i__37362 + (1));
seq__37359 = G__37428;
chunk__37360 = G__37429;
count__37361 = G__37430;
i__37362 = G__37431;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37359);
if(temp__5735__auto__){
var seq__37359__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37359__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37359__$1);
var G__37432 = cljs.core.chunk_rest(seq__37359__$1);
var G__37433 = c__4609__auto__;
var G__37434 = cljs.core.count(c__4609__auto__);
var G__37435 = (0);
seq__37359 = G__37432;
chunk__37360 = G__37433;
count__37361 = G__37434;
i__37362 = G__37435;
continue;
} else {
var event = cljs.core.first(seq__37359__$1);
re_frame.router.dispatch(event);


var G__37436 = cljs.core.next(seq__37359__$1);
var G__37437 = null;
var G__37438 = (0);
var G__37439 = (0);
seq__37359 = G__37436;
chunk__37360 = G__37437;
count__37361 = G__37438;
i__37362 = G__37439;
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
var seq__37366 = cljs.core.seq(value);
var chunk__37367 = null;
var count__37368 = (0);
var i__37369 = (0);
while(true){
if((i__37369 < count__37368)){
var event = chunk__37367.cljs$core$IIndexed$_nth$arity$2(null,i__37369);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37440 = seq__37366;
var G__37441 = chunk__37367;
var G__37442 = count__37368;
var G__37443 = (i__37369 + (1));
seq__37366 = G__37440;
chunk__37367 = G__37441;
count__37368 = G__37442;
i__37369 = G__37443;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37366);
if(temp__5735__auto__){
var seq__37366__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37366__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37366__$1);
var G__37444 = cljs.core.chunk_rest(seq__37366__$1);
var G__37445 = c__4609__auto__;
var G__37446 = cljs.core.count(c__4609__auto__);
var G__37447 = (0);
seq__37366 = G__37444;
chunk__37367 = G__37445;
count__37368 = G__37446;
i__37369 = G__37447;
continue;
} else {
var event = cljs.core.first(seq__37366__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37448 = cljs.core.next(seq__37366__$1);
var G__37449 = null;
var G__37450 = (0);
var G__37451 = (0);
seq__37366 = G__37448;
chunk__37367 = G__37449;
count__37368 = G__37450;
i__37369 = G__37451;
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
