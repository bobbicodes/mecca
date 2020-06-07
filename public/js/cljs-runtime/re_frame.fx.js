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
var _STAR_current_trace_STAR__orig_val__41553 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41554 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41554);

try{try{var seq__41557 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41558 = null;
var count__41559 = (0);
var i__41560 = (0);
while(true){
if((i__41560 < count__41559)){
var vec__41587 = chunk__41558.cljs$core$IIndexed$_nth$arity$2(null,i__41560);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41587,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41587,(1),null);
var temp__5733__auto___41643 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41643)){
var effect_fn_41644 = temp__5733__auto___41643;
(effect_fn_41644.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41644.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41644.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41645 = seq__41557;
var G__41646 = chunk__41558;
var G__41647 = count__41559;
var G__41648 = (i__41560 + (1));
seq__41557 = G__41645;
chunk__41558 = G__41646;
count__41559 = G__41647;
i__41560 = G__41648;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41557);
if(temp__5735__auto__){
var seq__41557__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41557__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41557__$1);
var G__41649 = cljs.core.chunk_rest(seq__41557__$1);
var G__41650 = c__4609__auto__;
var G__41651 = cljs.core.count(c__4609__auto__);
var G__41652 = (0);
seq__41557 = G__41649;
chunk__41558 = G__41650;
count__41559 = G__41651;
i__41560 = G__41652;
continue;
} else {
var vec__41590 = cljs.core.first(seq__41557__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41590,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41590,(1),null);
var temp__5733__auto___41653 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41653)){
var effect_fn_41654 = temp__5733__auto___41653;
(effect_fn_41654.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41654.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41654.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41655 = cljs.core.next(seq__41557__$1);
var G__41656 = null;
var G__41657 = (0);
var G__41658 = (0);
seq__41557 = G__41655;
chunk__41558 = G__41656;
count__41559 = G__41657;
i__41560 = G__41658;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__41284__auto___41659 = re_frame.interop.now();
var duration__41285__auto___41660 = (end__41284__auto___41659 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41285__auto___41660,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__41284__auto___41659);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41553);
}} else {
var seq__41593 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41594 = null;
var count__41595 = (0);
var i__41596 = (0);
while(true){
if((i__41596 < count__41595)){
var vec__41603 = chunk__41594.cljs$core$IIndexed$_nth$arity$2(null,i__41596);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41603,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41603,(1),null);
var temp__5733__auto___41661 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41661)){
var effect_fn_41662 = temp__5733__auto___41661;
(effect_fn_41662.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41662.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41662.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41663 = seq__41593;
var G__41664 = chunk__41594;
var G__41665 = count__41595;
var G__41666 = (i__41596 + (1));
seq__41593 = G__41663;
chunk__41594 = G__41664;
count__41595 = G__41665;
i__41596 = G__41666;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41593);
if(temp__5735__auto__){
var seq__41593__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41593__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41593__$1);
var G__41667 = cljs.core.chunk_rest(seq__41593__$1);
var G__41668 = c__4609__auto__;
var G__41669 = cljs.core.count(c__4609__auto__);
var G__41670 = (0);
seq__41593 = G__41667;
chunk__41594 = G__41668;
count__41595 = G__41669;
i__41596 = G__41670;
continue;
} else {
var vec__41612 = cljs.core.first(seq__41593__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41612,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41612,(1),null);
var temp__5733__auto___41671 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41671)){
var effect_fn_41672 = temp__5733__auto___41671;
(effect_fn_41672.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41672.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41672.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41677 = cljs.core.next(seq__41593__$1);
var G__41678 = null;
var G__41679 = (0);
var G__41680 = (0);
seq__41593 = G__41677;
chunk__41594 = G__41678;
count__41595 = G__41679;
i__41596 = G__41680;
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
var seq__41615 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41616 = null;
var count__41617 = (0);
var i__41618 = (0);
while(true){
if((i__41618 < count__41617)){
var map__41623 = chunk__41616.cljs$core$IIndexed$_nth$arity$2(null,i__41618);
var map__41623__$1 = (((((!((map__41623 == null))))?(((((map__41623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41623):map__41623);
var effect = map__41623__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41623__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41623__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__41615,chunk__41616,count__41617,i__41618,map__41623,map__41623__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__41615,chunk__41616,count__41617,i__41618,map__41623,map__41623__$1,effect,ms,dispatch))
,ms);
}


var G__41681 = seq__41615;
var G__41682 = chunk__41616;
var G__41683 = count__41617;
var G__41684 = (i__41618 + (1));
seq__41615 = G__41681;
chunk__41616 = G__41682;
count__41617 = G__41683;
i__41618 = G__41684;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41615);
if(temp__5735__auto__){
var seq__41615__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41615__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41615__$1);
var G__41685 = cljs.core.chunk_rest(seq__41615__$1);
var G__41686 = c__4609__auto__;
var G__41687 = cljs.core.count(c__4609__auto__);
var G__41688 = (0);
seq__41615 = G__41685;
chunk__41616 = G__41686;
count__41617 = G__41687;
i__41618 = G__41688;
continue;
} else {
var map__41625 = cljs.core.first(seq__41615__$1);
var map__41625__$1 = (((((!((map__41625 == null))))?(((((map__41625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41625):map__41625);
var effect = map__41625__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41625__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41625__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__41615,chunk__41616,count__41617,i__41618,map__41625,map__41625__$1,effect,ms,dispatch,seq__41615__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__41615,chunk__41616,count__41617,i__41618,map__41625,map__41625__$1,effect,ms,dispatch,seq__41615__$1,temp__5735__auto__))
,ms);
}


var G__41689 = cljs.core.next(seq__41615__$1);
var G__41690 = null;
var G__41691 = (0);
var G__41692 = (0);
seq__41615 = G__41689;
chunk__41616 = G__41690;
count__41617 = G__41691;
i__41618 = G__41692;
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
var seq__41635 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41636 = null;
var count__41637 = (0);
var i__41638 = (0);
while(true){
if((i__41638 < count__41637)){
var event = chunk__41636.cljs$core$IIndexed$_nth$arity$2(null,i__41638);
re_frame.router.dispatch(event);


var G__41693 = seq__41635;
var G__41694 = chunk__41636;
var G__41695 = count__41637;
var G__41696 = (i__41638 + (1));
seq__41635 = G__41693;
chunk__41636 = G__41694;
count__41637 = G__41695;
i__41638 = G__41696;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41635);
if(temp__5735__auto__){
var seq__41635__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41635__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41635__$1);
var G__41697 = cljs.core.chunk_rest(seq__41635__$1);
var G__41698 = c__4609__auto__;
var G__41699 = cljs.core.count(c__4609__auto__);
var G__41700 = (0);
seq__41635 = G__41697;
chunk__41636 = G__41698;
count__41637 = G__41699;
i__41638 = G__41700;
continue;
} else {
var event = cljs.core.first(seq__41635__$1);
re_frame.router.dispatch(event);


var G__41701 = cljs.core.next(seq__41635__$1);
var G__41702 = null;
var G__41703 = (0);
var G__41704 = (0);
seq__41635 = G__41701;
chunk__41636 = G__41702;
count__41637 = G__41703;
i__41638 = G__41704;
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
var seq__41639 = cljs.core.seq(value);
var chunk__41640 = null;
var count__41641 = (0);
var i__41642 = (0);
while(true){
if((i__41642 < count__41641)){
var event = chunk__41640.cljs$core$IIndexed$_nth$arity$2(null,i__41642);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__41705 = seq__41639;
var G__41706 = chunk__41640;
var G__41707 = count__41641;
var G__41708 = (i__41642 + (1));
seq__41639 = G__41705;
chunk__41640 = G__41706;
count__41641 = G__41707;
i__41642 = G__41708;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41639);
if(temp__5735__auto__){
var seq__41639__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41639__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41639__$1);
var G__41709 = cljs.core.chunk_rest(seq__41639__$1);
var G__41710 = c__4609__auto__;
var G__41711 = cljs.core.count(c__4609__auto__);
var G__41712 = (0);
seq__41639 = G__41709;
chunk__41640 = G__41710;
count__41641 = G__41711;
i__41642 = G__41712;
continue;
} else {
var event = cljs.core.first(seq__41639__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__41713 = cljs.core.next(seq__41639__$1);
var G__41714 = null;
var G__41715 = (0);
var G__41716 = (0);
seq__41639 = G__41713;
chunk__41640 = G__41714;
count__41641 = G__41715;
i__41642 = G__41716;
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
