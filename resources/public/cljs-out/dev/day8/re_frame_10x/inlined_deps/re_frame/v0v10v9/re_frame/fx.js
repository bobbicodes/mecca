// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v9.re-frame.registrar/kinds kind)"));
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v9$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_12376 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_;
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__12377 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__12378 = null;
var count__12379 = (0);
var i__12380 = (0);
while(true){
if((i__12380 < count__12379)){
var vec__12381 = cljs.core._nth.call(null,chunk__12378,i__12380);
var effect_key = cljs.core.nth.call(null,vec__12381,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12381,(1),null);
var temp__5455__auto___12397 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12397)){
var effect_fn_12398 = temp__5455__auto___12397;
effect_fn_12398.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12399 = seq__12377;
var G__12400 = chunk__12378;
var G__12401 = count__12379;
var G__12402 = (i__12380 + (1));
seq__12377 = G__12399;
chunk__12378 = G__12400;
count__12379 = G__12401;
i__12380 = G__12402;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12377);
if(temp__5457__auto__){
var seq__12377__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12377__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12377__$1);
var G__12403 = cljs.core.chunk_rest.call(null,seq__12377__$1);
var G__12404 = c__4351__auto__;
var G__12405 = cljs.core.count.call(null,c__4351__auto__);
var G__12406 = (0);
seq__12377 = G__12403;
chunk__12378 = G__12404;
count__12379 = G__12405;
i__12380 = G__12406;
continue;
} else {
var vec__12384 = cljs.core.first.call(null,seq__12377__$1);
var effect_key = cljs.core.nth.call(null,vec__12384,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12384,(1),null);
var temp__5455__auto___12407 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12407)){
var effect_fn_12408 = temp__5455__auto___12407;
effect_fn_12408.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12409 = cljs.core.next.call(null,seq__12377__$1);
var G__12410 = null;
var G__12411 = (0);
var G__12412 = (0);
seq__12377 = G__12409;
chunk__12378 = G__12410;
count__12379 = G__12411;
i__12380 = G__12412;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__12219__auto___12413 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null);
var duration__12220__auto___12414 = (end__12219__auto___12413 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12220__auto___12414,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__12219__auto___12413);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12376;
}} else {
var seq__12387 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__12388 = null;
var count__12389 = (0);
var i__12390 = (0);
while(true){
if((i__12390 < count__12389)){
var vec__12391 = cljs.core._nth.call(null,chunk__12388,i__12390);
var effect_key = cljs.core.nth.call(null,vec__12391,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12391,(1),null);
var temp__5455__auto___12415 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12415)){
var effect_fn_12416 = temp__5455__auto___12415;
effect_fn_12416.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12417 = seq__12387;
var G__12418 = chunk__12388;
var G__12419 = count__12389;
var G__12420 = (i__12390 + (1));
seq__12387 = G__12417;
chunk__12388 = G__12418;
count__12389 = G__12419;
i__12390 = G__12420;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12387);
if(temp__5457__auto__){
var seq__12387__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12387__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12387__$1);
var G__12421 = cljs.core.chunk_rest.call(null,seq__12387__$1);
var G__12422 = c__4351__auto__;
var G__12423 = cljs.core.count.call(null,c__4351__auto__);
var G__12424 = (0);
seq__12387 = G__12421;
chunk__12388 = G__12422;
count__12389 = G__12423;
i__12390 = G__12424;
continue;
} else {
var vec__12394 = cljs.core.first.call(null,seq__12387__$1);
var effect_key = cljs.core.nth.call(null,vec__12394,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12394,(1),null);
var temp__5455__auto___12425 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12425)){
var effect_fn_12426 = temp__5455__auto___12425;
effect_fn_12426.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12427 = cljs.core.next.call(null,seq__12387__$1);
var G__12428 = null;
var G__12429 = (0);
var G__12430 = (0);
seq__12387 = G__12427;
chunk__12388 = G__12428;
count__12389 = G__12429;
i__12390 = G__12430;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__12431 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__12432 = null;
var count__12433 = (0);
var i__12434 = (0);
while(true){
if((i__12434 < count__12433)){
var map__12435 = cljs.core._nth.call(null,chunk__12432,i__12434);
var map__12435__$1 = ((((!((map__12435 == null)))?(((((map__12435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12435):map__12435);
var effect = map__12435__$1;
var ms = cljs.core.get.call(null,map__12435__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__12435__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__12431,chunk__12432,count__12433,i__12434,map__12435,map__12435__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,dispatch);
});})(seq__12431,chunk__12432,count__12433,i__12434,map__12435,map__12435__$1,effect,ms,dispatch))
,ms);
}


var G__12439 = seq__12431;
var G__12440 = chunk__12432;
var G__12441 = count__12433;
var G__12442 = (i__12434 + (1));
seq__12431 = G__12439;
chunk__12432 = G__12440;
count__12433 = G__12441;
i__12434 = G__12442;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12431);
if(temp__5457__auto__){
var seq__12431__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12431__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12431__$1);
var G__12443 = cljs.core.chunk_rest.call(null,seq__12431__$1);
var G__12444 = c__4351__auto__;
var G__12445 = cljs.core.count.call(null,c__4351__auto__);
var G__12446 = (0);
seq__12431 = G__12443;
chunk__12432 = G__12444;
count__12433 = G__12445;
i__12434 = G__12446;
continue;
} else {
var map__12437 = cljs.core.first.call(null,seq__12431__$1);
var map__12437__$1 = ((((!((map__12437 == null)))?(((((map__12437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12437):map__12437);
var effect = map__12437__$1;
var ms = cljs.core.get.call(null,map__12437__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__12437__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__12431,chunk__12432,count__12433,i__12434,map__12437,map__12437__$1,effect,ms,dispatch,seq__12431__$1,temp__5457__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,dispatch);
});})(seq__12431,chunk__12432,count__12433,i__12434,map__12437,map__12437__$1,effect,ms,dispatch,seq__12431__$1,temp__5457__auto__))
,ms);
}


var G__12447 = cljs.core.next.call(null,seq__12431__$1);
var G__12448 = null;
var G__12449 = (0);
var G__12450 = (0);
seq__12431 = G__12447;
chunk__12432 = G__12448;
count__12433 = G__12449;
i__12434 = G__12450;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__12451 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__12452 = null;
var count__12453 = (0);
var i__12454 = (0);
while(true){
if((i__12454 < count__12453)){
var event = cljs.core._nth.call(null,chunk__12452,i__12454);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,event);


var G__12455 = seq__12451;
var G__12456 = chunk__12452;
var G__12457 = count__12453;
var G__12458 = (i__12454 + (1));
seq__12451 = G__12455;
chunk__12452 = G__12456;
count__12453 = G__12457;
i__12454 = G__12458;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12451);
if(temp__5457__auto__){
var seq__12451__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12451__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12451__$1);
var G__12459 = cljs.core.chunk_rest.call(null,seq__12451__$1);
var G__12460 = c__4351__auto__;
var G__12461 = cljs.core.count.call(null,c__4351__auto__);
var G__12462 = (0);
seq__12451 = G__12459;
chunk__12452 = G__12460;
count__12453 = G__12461;
i__12454 = G__12462;
continue;
} else {
var event = cljs.core.first.call(null,seq__12451__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.router.dispatch.call(null,event);


var G__12463 = cljs.core.next.call(null,seq__12451__$1);
var G__12464 = null;
var G__12465 = (0);
var G__12466 = (0);
seq__12451 = G__12463;
chunk__12452 = G__12464;
count__12453 = G__12465;
i__12454 = G__12466;
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
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__12467 = cljs.core.seq.call(null,value);
var chunk__12468 = null;
var count__12469 = (0);
var i__12470 = (0);
while(true){
if((i__12470 < count__12469)){
var event = cljs.core._nth.call(null,chunk__12468,i__12470);
clear_event.call(null,event);


var G__12471 = seq__12467;
var G__12472 = chunk__12468;
var G__12473 = count__12469;
var G__12474 = (i__12470 + (1));
seq__12467 = G__12471;
chunk__12468 = G__12472;
count__12469 = G__12473;
i__12470 = G__12474;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12467);
if(temp__5457__auto__){
var seq__12467__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12467__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12467__$1);
var G__12475 = cljs.core.chunk_rest.call(null,seq__12467__$1);
var G__12476 = c__4351__auto__;
var G__12477 = cljs.core.count.call(null,c__4351__auto__);
var G__12478 = (0);
seq__12467 = G__12475;
chunk__12468 = G__12476;
count__12469 = G__12477;
i__12470 = G__12478;
continue;
} else {
var event = cljs.core.first.call(null,seq__12467__$1);
clear_event.call(null,event);


var G__12479 = cljs.core.next.call(null,seq__12467__$1);
var G__12480 = null;
var G__12481 = (0);
var G__12482 = (0);
seq__12467 = G__12479;
chunk__12468 = G__12480;
count__12469 = G__12481;
i__12470 = G__12482;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
