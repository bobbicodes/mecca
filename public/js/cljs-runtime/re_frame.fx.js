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
var _STAR_current_trace_STAR__orig_val__43447 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__43448 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__43448);

try{try{var seq__43449 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43450 = null;
var count__43451 = (0);
var i__43452 = (0);
while(true){
if((i__43452 < count__43451)){
var vec__43459 = chunk__43450.cljs$core$IIndexed$_nth$arity$2(null,i__43452);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43459,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43459,(1),null);
var temp__5733__auto___43503 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43503)){
var effect_fn_43504 = temp__5733__auto___43503;
(effect_fn_43504.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43504.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43504.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43505 = seq__43449;
var G__43506 = chunk__43450;
var G__43507 = count__43451;
var G__43508 = (i__43452 + (1));
seq__43449 = G__43505;
chunk__43450 = G__43506;
count__43451 = G__43507;
i__43452 = G__43508;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43449);
if(temp__5735__auto__){
var seq__43449__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43449__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__43449__$1);
var G__43509 = cljs.core.chunk_rest(seq__43449__$1);
var G__43510 = c__4609__auto__;
var G__43511 = cljs.core.count(c__4609__auto__);
var G__43512 = (0);
seq__43449 = G__43509;
chunk__43450 = G__43510;
count__43451 = G__43511;
i__43452 = G__43512;
continue;
} else {
var vec__43462 = cljs.core.first(seq__43449__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43462,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43462,(1),null);
var temp__5733__auto___43513 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43513)){
var effect_fn_43514 = temp__5733__auto___43513;
(effect_fn_43514.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43514.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43514.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43515 = cljs.core.next(seq__43449__$1);
var G__43516 = null;
var G__43517 = (0);
var G__43518 = (0);
seq__43449 = G__43515;
chunk__43450 = G__43516;
count__43451 = G__43517;
i__43452 = G__43518;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__43166__auto___43520 = re_frame.interop.now();
var duration__43167__auto___43521 = (end__43166__auto___43520 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__43167__auto___43521,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__43166__auto___43520);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__43447);
}} else {
var seq__43465 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43466 = null;
var count__43467 = (0);
var i__43468 = (0);
while(true){
if((i__43468 < count__43467)){
var vec__43475 = chunk__43466.cljs$core$IIndexed$_nth$arity$2(null,i__43468);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43475,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43475,(1),null);
var temp__5733__auto___43522 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43522)){
var effect_fn_43523 = temp__5733__auto___43522;
(effect_fn_43523.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43523.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43523.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43524 = seq__43465;
var G__43525 = chunk__43466;
var G__43526 = count__43467;
var G__43527 = (i__43468 + (1));
seq__43465 = G__43524;
chunk__43466 = G__43525;
count__43467 = G__43526;
i__43468 = G__43527;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43465);
if(temp__5735__auto__){
var seq__43465__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43465__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__43465__$1);
var G__43528 = cljs.core.chunk_rest(seq__43465__$1);
var G__43529 = c__4609__auto__;
var G__43530 = cljs.core.count(c__4609__auto__);
var G__43531 = (0);
seq__43465 = G__43528;
chunk__43466 = G__43529;
count__43467 = G__43530;
i__43468 = G__43531;
continue;
} else {
var vec__43478 = cljs.core.first(seq__43465__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43478,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43478,(1),null);
var temp__5733__auto___43532 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___43532)){
var effect_fn_43533 = temp__5733__auto___43532;
(effect_fn_43533.cljs$core$IFn$_invoke$arity$1 ? effect_fn_43533.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_43533.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__43534 = cljs.core.next(seq__43465__$1);
var G__43535 = null;
var G__43536 = (0);
var G__43537 = (0);
seq__43465 = G__43534;
chunk__43466 = G__43535;
count__43467 = G__43536;
i__43468 = G__43537;
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
var seq__43481 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43482 = null;
var count__43483 = (0);
var i__43484 = (0);
while(true){
if((i__43484 < count__43483)){
var map__43489 = chunk__43482.cljs$core$IIndexed$_nth$arity$2(null,i__43484);
var map__43489__$1 = (((((!((map__43489 == null))))?(((((map__43489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43489):map__43489);
var effect = map__43489__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43489__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43489__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__43481,chunk__43482,count__43483,i__43484,map__43489,map__43489__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__43481,chunk__43482,count__43483,i__43484,map__43489,map__43489__$1,effect,ms,dispatch))
,ms);
}


var G__43538 = seq__43481;
var G__43539 = chunk__43482;
var G__43540 = count__43483;
var G__43541 = (i__43484 + (1));
seq__43481 = G__43538;
chunk__43482 = G__43539;
count__43483 = G__43540;
i__43484 = G__43541;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43481);
if(temp__5735__auto__){
var seq__43481__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43481__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__43481__$1);
var G__43542 = cljs.core.chunk_rest(seq__43481__$1);
var G__43543 = c__4609__auto__;
var G__43544 = cljs.core.count(c__4609__auto__);
var G__43545 = (0);
seq__43481 = G__43542;
chunk__43482 = G__43543;
count__43483 = G__43544;
i__43484 = G__43545;
continue;
} else {
var map__43491 = cljs.core.first(seq__43481__$1);
var map__43491__$1 = (((((!((map__43491 == null))))?(((((map__43491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43491):map__43491);
var effect = map__43491__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43491__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43491__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__43481,chunk__43482,count__43483,i__43484,map__43491,map__43491__$1,effect,ms,dispatch,seq__43481__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__43481,chunk__43482,count__43483,i__43484,map__43491,map__43491__$1,effect,ms,dispatch,seq__43481__$1,temp__5735__auto__))
,ms);
}


var G__43546 = cljs.core.next(seq__43481__$1);
var G__43547 = null;
var G__43548 = (0);
var G__43549 = (0);
seq__43481 = G__43546;
chunk__43482 = G__43547;
count__43483 = G__43548;
i__43484 = G__43549;
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
var seq__43493 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__43494 = null;
var count__43495 = (0);
var i__43496 = (0);
while(true){
if((i__43496 < count__43495)){
var event = chunk__43494.cljs$core$IIndexed$_nth$arity$2(null,i__43496);
re_frame.router.dispatch(event);


var G__43550 = seq__43493;
var G__43551 = chunk__43494;
var G__43552 = count__43495;
var G__43553 = (i__43496 + (1));
seq__43493 = G__43550;
chunk__43494 = G__43551;
count__43495 = G__43552;
i__43496 = G__43553;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43493);
if(temp__5735__auto__){
var seq__43493__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43493__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__43493__$1);
var G__43554 = cljs.core.chunk_rest(seq__43493__$1);
var G__43555 = c__4609__auto__;
var G__43556 = cljs.core.count(c__4609__auto__);
var G__43557 = (0);
seq__43493 = G__43554;
chunk__43494 = G__43555;
count__43495 = G__43556;
i__43496 = G__43557;
continue;
} else {
var event = cljs.core.first(seq__43493__$1);
re_frame.router.dispatch(event);


var G__43558 = cljs.core.next(seq__43493__$1);
var G__43559 = null;
var G__43560 = (0);
var G__43561 = (0);
seq__43493 = G__43558;
chunk__43494 = G__43559;
count__43495 = G__43560;
i__43496 = G__43561;
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
var seq__43499 = cljs.core.seq(value);
var chunk__43500 = null;
var count__43501 = (0);
var i__43502 = (0);
while(true){
if((i__43502 < count__43501)){
var event = chunk__43500.cljs$core$IIndexed$_nth$arity$2(null,i__43502);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__43562 = seq__43499;
var G__43563 = chunk__43500;
var G__43564 = count__43501;
var G__43565 = (i__43502 + (1));
seq__43499 = G__43562;
chunk__43500 = G__43563;
count__43501 = G__43564;
i__43502 = G__43565;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43499);
if(temp__5735__auto__){
var seq__43499__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43499__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__43499__$1);
var G__43566 = cljs.core.chunk_rest(seq__43499__$1);
var G__43567 = c__4609__auto__;
var G__43568 = cljs.core.count(c__4609__auto__);
var G__43569 = (0);
seq__43499 = G__43566;
chunk__43500 = G__43567;
count__43501 = G__43568;
i__43502 = G__43569;
continue;
} else {
var event = cljs.core.first(seq__43499__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__43570 = cljs.core.next(seq__43499__$1);
var G__43571 = null;
var G__43572 = (0);
var G__43573 = (0);
seq__43499 = G__43570;
chunk__43500 = G__43571;
count__43501 = G__43572;
i__43502 = G__43573;
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
