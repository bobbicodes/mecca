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
var _STAR_current_trace_STAR__orig_val__37312 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37313 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37313);

try{try{var seq__37318 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37319 = null;
var count__37320 = (0);
var i__37321 = (0);
while(true){
if((i__37321 < count__37320)){
var vec__37328 = chunk__37319.cljs$core$IIndexed$_nth$arity$2(null,i__37321);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37328,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37328,(1),null);
var temp__5733__auto___37386 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37386)){
var effect_fn_37387 = temp__5733__auto___37386;
(effect_fn_37387.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37387.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37387.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37388 = seq__37318;
var G__37389 = chunk__37319;
var G__37390 = count__37320;
var G__37391 = (i__37321 + (1));
seq__37318 = G__37388;
chunk__37319 = G__37389;
count__37320 = G__37390;
i__37321 = G__37391;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37318);
if(temp__5735__auto__){
var seq__37318__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37318__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37318__$1);
var G__37392 = cljs.core.chunk_rest(seq__37318__$1);
var G__37393 = c__4609__auto__;
var G__37394 = cljs.core.count(c__4609__auto__);
var G__37395 = (0);
seq__37318 = G__37392;
chunk__37319 = G__37393;
count__37320 = G__37394;
i__37321 = G__37395;
continue;
} else {
var vec__37331 = cljs.core.first(seq__37318__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37331,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37331,(1),null);
var temp__5733__auto___37396 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37396)){
var effect_fn_37397 = temp__5733__auto___37396;
(effect_fn_37397.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37397.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37397.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37398 = cljs.core.next(seq__37318__$1);
var G__37399 = null;
var G__37400 = (0);
var G__37401 = (0);
seq__37318 = G__37398;
chunk__37319 = G__37399;
count__37320 = G__37400;
i__37321 = G__37401;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37008__auto___37402 = re_frame.interop.now();
var duration__37009__auto___37403 = (end__37008__auto___37402 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37009__auto___37403,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37008__auto___37402);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37312);
}} else {
var seq__37334 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37335 = null;
var count__37336 = (0);
var i__37337 = (0);
while(true){
if((i__37337 < count__37336)){
var vec__37345 = chunk__37335.cljs$core$IIndexed$_nth$arity$2(null,i__37337);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37345,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37345,(1),null);
var temp__5733__auto___37404 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37404)){
var effect_fn_37405 = temp__5733__auto___37404;
(effect_fn_37405.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37405.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37405.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37406 = seq__37334;
var G__37407 = chunk__37335;
var G__37408 = count__37336;
var G__37409 = (i__37337 + (1));
seq__37334 = G__37406;
chunk__37335 = G__37407;
count__37336 = G__37408;
i__37337 = G__37409;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37334);
if(temp__5735__auto__){
var seq__37334__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37334__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37334__$1);
var G__37410 = cljs.core.chunk_rest(seq__37334__$1);
var G__37411 = c__4609__auto__;
var G__37412 = cljs.core.count(c__4609__auto__);
var G__37413 = (0);
seq__37334 = G__37410;
chunk__37335 = G__37411;
count__37336 = G__37412;
i__37337 = G__37413;
continue;
} else {
var vec__37348 = cljs.core.first(seq__37334__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37348,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37348,(1),null);
var temp__5733__auto___37414 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37414)){
var effect_fn_37415 = temp__5733__auto___37414;
(effect_fn_37415.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37415.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37415.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37416 = cljs.core.next(seq__37334__$1);
var G__37417 = null;
var G__37418 = (0);
var G__37419 = (0);
seq__37334 = G__37416;
chunk__37335 = G__37417;
count__37336 = G__37418;
i__37337 = G__37419;
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
var seq__37353 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37354 = null;
var count__37355 = (0);
var i__37356 = (0);
while(true){
if((i__37356 < count__37355)){
var map__37362 = chunk__37354.cljs$core$IIndexed$_nth$arity$2(null,i__37356);
var map__37362__$1 = (((((!((map__37362 == null))))?(((((map__37362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37362):map__37362);
var effect = map__37362__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37362__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37362__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37353,chunk__37354,count__37355,i__37356,map__37362,map__37362__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37353,chunk__37354,count__37355,i__37356,map__37362,map__37362__$1,effect,ms,dispatch))
,ms);
}


var G__37420 = seq__37353;
var G__37421 = chunk__37354;
var G__37422 = count__37355;
var G__37423 = (i__37356 + (1));
seq__37353 = G__37420;
chunk__37354 = G__37421;
count__37355 = G__37422;
i__37356 = G__37423;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37353);
if(temp__5735__auto__){
var seq__37353__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37353__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37353__$1);
var G__37424 = cljs.core.chunk_rest(seq__37353__$1);
var G__37425 = c__4609__auto__;
var G__37426 = cljs.core.count(c__4609__auto__);
var G__37427 = (0);
seq__37353 = G__37424;
chunk__37354 = G__37425;
count__37355 = G__37426;
i__37356 = G__37427;
continue;
} else {
var map__37364 = cljs.core.first(seq__37353__$1);
var map__37364__$1 = (((((!((map__37364 == null))))?(((((map__37364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37364):map__37364);
var effect = map__37364__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37364__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37364__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__37353,chunk__37354,count__37355,i__37356,map__37364,map__37364__$1,effect,ms,dispatch,seq__37353__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__37353,chunk__37354,count__37355,i__37356,map__37364,map__37364__$1,effect,ms,dispatch,seq__37353__$1,temp__5735__auto__))
,ms);
}


var G__37428 = cljs.core.next(seq__37353__$1);
var G__37429 = null;
var G__37430 = (0);
var G__37431 = (0);
seq__37353 = G__37428;
chunk__37354 = G__37429;
count__37355 = G__37430;
i__37356 = G__37431;
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
var seq__37370 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37371 = null;
var count__37372 = (0);
var i__37373 = (0);
while(true){
if((i__37373 < count__37372)){
var event = chunk__37371.cljs$core$IIndexed$_nth$arity$2(null,i__37373);
re_frame.router.dispatch(event);


var G__37432 = seq__37370;
var G__37433 = chunk__37371;
var G__37434 = count__37372;
var G__37435 = (i__37373 + (1));
seq__37370 = G__37432;
chunk__37371 = G__37433;
count__37372 = G__37434;
i__37373 = G__37435;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37370);
if(temp__5735__auto__){
var seq__37370__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37370__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37370__$1);
var G__37436 = cljs.core.chunk_rest(seq__37370__$1);
var G__37437 = c__4609__auto__;
var G__37438 = cljs.core.count(c__4609__auto__);
var G__37439 = (0);
seq__37370 = G__37436;
chunk__37371 = G__37437;
count__37372 = G__37438;
i__37373 = G__37439;
continue;
} else {
var event = cljs.core.first(seq__37370__$1);
re_frame.router.dispatch(event);


var G__37440 = cljs.core.next(seq__37370__$1);
var G__37441 = null;
var G__37442 = (0);
var G__37443 = (0);
seq__37370 = G__37440;
chunk__37371 = G__37441;
count__37372 = G__37442;
i__37373 = G__37443;
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
var seq__37382 = cljs.core.seq(value);
var chunk__37383 = null;
var count__37384 = (0);
var i__37385 = (0);
while(true){
if((i__37385 < count__37384)){
var event = chunk__37383.cljs$core$IIndexed$_nth$arity$2(null,i__37385);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37444 = seq__37382;
var G__37445 = chunk__37383;
var G__37446 = count__37384;
var G__37447 = (i__37385 + (1));
seq__37382 = G__37444;
chunk__37383 = G__37445;
count__37384 = G__37446;
i__37385 = G__37447;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37382);
if(temp__5735__auto__){
var seq__37382__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37382__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37382__$1);
var G__37448 = cljs.core.chunk_rest(seq__37382__$1);
var G__37449 = c__4609__auto__;
var G__37450 = cljs.core.count(c__4609__auto__);
var G__37451 = (0);
seq__37382 = G__37448;
chunk__37383 = G__37449;
count__37384 = G__37450;
i__37385 = G__37451;
continue;
} else {
var event = cljs.core.first(seq__37382__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__37452 = cljs.core.next(seq__37382__$1);
var G__37453 = null;
var G__37454 = (0);
var G__37455 = (0);
seq__37382 = G__37452;
chunk__37383 = G__37453;
count__37384 = G__37454;
i__37385 = G__37455;
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
