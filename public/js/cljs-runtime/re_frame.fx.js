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
var _STAR_current_trace_STAR__orig_val__37284 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37285 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37285);

try{try{var seq__37286 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37287 = null;
var count__37288 = (0);
var i__37289 = (0);
while(true){
if((i__37289 < count__37288)){
var vec__37298 = chunk__37287.cljs$core$IIndexed$_nth$arity$2(null,i__37289);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(1),null);
var temp__5733__auto___37365 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37365)){
var effect_fn_37366 = temp__5733__auto___37365;
(effect_fn_37366.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37366.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37366.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37367 = seq__37286;
var G__37368 = chunk__37287;
var G__37369 = count__37288;
var G__37370 = (i__37289 + (1));
seq__37286 = G__37367;
chunk__37287 = G__37368;
count__37288 = G__37369;
i__37289 = G__37370;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37286);
if(temp__5735__auto__){
var seq__37286__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37286__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37286__$1);
var G__37371 = cljs.core.chunk_rest(seq__37286__$1);
var G__37372 = c__4609__auto__;
var G__37373 = cljs.core.count(c__4609__auto__);
var G__37374 = (0);
seq__37286 = G__37371;
chunk__37287 = G__37372;
count__37288 = G__37373;
i__37289 = G__37374;
continue;
} else {
var vec__37301 = cljs.core.first(seq__37286__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37301,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37301,(1),null);
var temp__5733__auto___37375 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37375)){
var effect_fn_37376 = temp__5733__auto___37375;
(effect_fn_37376.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37376.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37376.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37377 = cljs.core.next(seq__37286__$1);
var G__37378 = null;
var G__37379 = (0);
var G__37380 = (0);
seq__37286 = G__37377;
chunk__37287 = G__37378;
count__37288 = G__37379;
i__37289 = G__37380;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36981__auto___37381 = re_frame.interop.now();
var duration__36982__auto___37382 = (end__36981__auto___37381 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36982__auto___37382,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36981__auto___37381);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37284);
}} else {
var seq__37306 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37307 = null;
var count__37308 = (0);
var i__37309 = (0);
while(true){
if((i__37309 < count__37308)){
var vec__37317 = chunk__37307.cljs$core$IIndexed$_nth$arity$2(null,i__37309);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37317,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37317,(1),null);
var temp__5733__auto___37383 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37383)){
var effect_fn_37384 = temp__5733__auto___37383;
(effect_fn_37384.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37384.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37384.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37385 = seq__37306;
var G__37386 = chunk__37307;
var G__37387 = count__37308;
var G__37388 = (i__37309 + (1));
seq__37306 = G__37385;
chunk__37307 = G__37386;
count__37308 = G__37387;
i__37309 = G__37388;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37306);
if(temp__5735__auto__){
var seq__37306__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37306__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37306__$1);
var G__37389 = cljs.core.chunk_rest(seq__37306__$1);
var G__37390 = c__4609__auto__;
var G__37391 = cljs.core.count(c__4609__auto__);
var G__37392 = (0);
seq__37306 = G__37389;
chunk__37307 = G__37390;
count__37308 = G__37391;
i__37309 = G__37392;
continue;
} else {
var vec__37320 = cljs.core.first(seq__37306__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37320,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37320,(1),null);
var temp__5733__auto___37393 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37393)){
var effect_fn_37394 = temp__5733__auto___37393;
(effect_fn_37394.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37394.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37394.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37395 = cljs.core.next(seq__37306__$1);
var G__37396 = null;
var G__37397 = (0);
var G__37398 = (0);
seq__37306 = G__37395;
chunk__37307 = G__37396;
count__37308 = G__37397;
i__37309 = G__37398;
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
var seq__37323 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37324 = null;
var count__37325 = (0);
var i__37326 = (0);
while(true){
if((i__37326 < count__37325)){
var map__37344 = chunk__37324.cljs$core$IIndexed$_nth$arity$2(null,i__37326);
var map__37344__$1 = (((((!((map__37344 == null))))?(((((map__37344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37344):map__37344);
var effect = map__37344__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37344__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37344__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37323,chunk__37324,count__37325,i__37326,map__37344,map__37344__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37323,chunk__37324,count__37325,i__37326,map__37344,map__37344__$1,effect,ms,dispatch))
,ms);
}


var G__37399 = seq__37323;
var G__37400 = chunk__37324;
var G__37401 = count__37325;
var G__37402 = (i__37326 + (1));
seq__37323 = G__37399;
chunk__37324 = G__37400;
count__37325 = G__37401;
i__37326 = G__37402;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37323);
if(temp__5735__auto__){
var seq__37323__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37323__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37323__$1);
var G__37403 = cljs.core.chunk_rest(seq__37323__$1);
var G__37404 = c__4609__auto__;
var G__37405 = cljs.core.count(c__4609__auto__);
var G__37406 = (0);
seq__37323 = G__37403;
chunk__37324 = G__37404;
count__37325 = G__37405;
i__37326 = G__37406;
continue;
} else {
var map__37348 = cljs.core.first(seq__37323__$1);
var map__37348__$1 = (((((!((map__37348 == null))))?(((((map__37348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37348):map__37348);
var effect = map__37348__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37348__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37348__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37323,chunk__37324,count__37325,i__37326,map__37348,map__37348__$1,effect,ms,dispatch,seq__37323__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37323,chunk__37324,count__37325,i__37326,map__37348,map__37348__$1,effect,ms,dispatch,seq__37323__$1,temp__5735__auto__))
,ms);
}


var G__37407 = cljs.core.next(seq__37323__$1);
var G__37408 = null;
var G__37409 = (0);
var G__37410 = (0);
seq__37323 = G__37407;
chunk__37324 = G__37408;
count__37325 = G__37409;
i__37326 = G__37410;
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
var seq__37354 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37355 = null;
var count__37356 = (0);
var i__37357 = (0);
while(true){
if((i__37357 < count__37356)){
var event = chunk__37355.cljs$core$IIndexed$_nth$arity$2(null,i__37357);
re_frame.router.dispatch(event);


var G__37412 = seq__37354;
var G__37413 = chunk__37355;
var G__37414 = count__37356;
var G__37415 = (i__37357 + (1));
seq__37354 = G__37412;
chunk__37355 = G__37413;
count__37356 = G__37414;
i__37357 = G__37415;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37354);
if(temp__5735__auto__){
var seq__37354__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37354__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37354__$1);
var G__37417 = cljs.core.chunk_rest(seq__37354__$1);
var G__37418 = c__4609__auto__;
var G__37419 = cljs.core.count(c__4609__auto__);
var G__37420 = (0);
seq__37354 = G__37417;
chunk__37355 = G__37418;
count__37356 = G__37419;
i__37357 = G__37420;
continue;
} else {
var event = cljs.core.first(seq__37354__$1);
re_frame.router.dispatch(event);


var G__37421 = cljs.core.next(seq__37354__$1);
var G__37422 = null;
var G__37423 = (0);
var G__37424 = (0);
seq__37354 = G__37421;
chunk__37355 = G__37422;
count__37356 = G__37423;
i__37357 = G__37424;
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
var seq__37358 = cljs.core.seq(value);
var chunk__37359 = null;
var count__37360 = (0);
var i__37361 = (0);
while(true){
if((i__37361 < count__37360)){
var event = chunk__37359.cljs$core$IIndexed$_nth$arity$2(null,i__37361);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37426 = seq__37358;
var G__37427 = chunk__37359;
var G__37428 = count__37360;
var G__37429 = (i__37361 + (1));
seq__37358 = G__37426;
chunk__37359 = G__37427;
count__37360 = G__37428;
i__37361 = G__37429;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37358);
if(temp__5735__auto__){
var seq__37358__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37358__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37358__$1);
var G__37431 = cljs.core.chunk_rest(seq__37358__$1);
var G__37432 = c__4609__auto__;
var G__37433 = cljs.core.count(c__4609__auto__);
var G__37434 = (0);
seq__37358 = G__37431;
chunk__37359 = G__37432;
count__37360 = G__37433;
i__37361 = G__37434;
continue;
} else {
var event = cljs.core.first(seq__37358__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37435 = cljs.core.next(seq__37358__$1);
var G__37436 = null;
var G__37437 = (0);
var G__37438 = (0);
seq__37358 = G__37435;
chunk__37359 = G__37436;
count__37360 = G__37437;
i__37361 = G__37438;
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
