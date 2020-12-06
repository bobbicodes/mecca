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
var _STAR_current_trace_STAR__orig_val__41541 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41542 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41542);

try{try{var seq__41545 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41546 = null;
var count__41547 = (0);
var i__41548 = (0);
while(true){
if((i__41548 < count__41547)){
var vec__41555 = chunk__41546.cljs$core$IIndexed$_nth$arity$2(null,i__41548);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41555,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41555,(1),null);
var temp__5733__auto___41613 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41613)){
var effect_fn_41614 = temp__5733__auto___41613;
(effect_fn_41614.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41614.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41614.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41615 = seq__41545;
var G__41616 = chunk__41546;
var G__41617 = count__41547;
var G__41618 = (i__41548 + (1));
seq__41545 = G__41615;
chunk__41546 = G__41616;
count__41547 = G__41617;
i__41548 = G__41618;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41545);
if(temp__5735__auto__){
var seq__41545__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41545__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41545__$1);
var G__41619 = cljs.core.chunk_rest(seq__41545__$1);
var G__41620 = c__4609__auto__;
var G__41621 = cljs.core.count(c__4609__auto__);
var G__41622 = (0);
seq__41545 = G__41619;
chunk__41546 = G__41620;
count__41547 = G__41621;
i__41548 = G__41622;
continue;
} else {
var vec__41559 = cljs.core.first(seq__41545__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41559,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41559,(1),null);
var temp__5733__auto___41623 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41623)){
var effect_fn_41624 = temp__5733__auto___41623;
(effect_fn_41624.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41624.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41624.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41625 = cljs.core.next(seq__41545__$1);
var G__41626 = null;
var G__41627 = (0);
var G__41628 = (0);
seq__41545 = G__41625;
chunk__41546 = G__41626;
count__41547 = G__41627;
i__41548 = G__41628;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__41244__auto___41629 = re_frame.interop.now();
var duration__41245__auto___41630 = (end__41244__auto___41629 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41245__auto___41630,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__41244__auto___41629);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41541);
}} else {
var seq__41562 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41563 = null;
var count__41564 = (0);
var i__41565 = (0);
while(true){
if((i__41565 < count__41564)){
var vec__41572 = chunk__41563.cljs$core$IIndexed$_nth$arity$2(null,i__41565);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41572,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41572,(1),null);
var temp__5733__auto___41634 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41634)){
var effect_fn_41635 = temp__5733__auto___41634;
(effect_fn_41635.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41635.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41635.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41636 = seq__41562;
var G__41637 = chunk__41563;
var G__41638 = count__41564;
var G__41639 = (i__41565 + (1));
seq__41562 = G__41636;
chunk__41563 = G__41637;
count__41564 = G__41638;
i__41565 = G__41639;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41562);
if(temp__5735__auto__){
var seq__41562__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41562__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41562__$1);
var G__41640 = cljs.core.chunk_rest(seq__41562__$1);
var G__41641 = c__4609__auto__;
var G__41642 = cljs.core.count(c__4609__auto__);
var G__41643 = (0);
seq__41562 = G__41640;
chunk__41563 = G__41641;
count__41564 = G__41642;
i__41565 = G__41643;
continue;
} else {
var vec__41575 = cljs.core.first(seq__41562__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41575,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41575,(1),null);
var temp__5733__auto___41644 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41644)){
var effect_fn_41645 = temp__5733__auto___41644;
(effect_fn_41645.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41645.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41645.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41646 = cljs.core.next(seq__41562__$1);
var G__41647 = null;
var G__41648 = (0);
var G__41649 = (0);
seq__41562 = G__41646;
chunk__41563 = G__41647;
count__41564 = G__41648;
i__41565 = G__41649;
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
var seq__41578 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41579 = null;
var count__41580 = (0);
var i__41581 = (0);
while(true){
if((i__41581 < count__41580)){
var map__41591 = chunk__41579.cljs$core$IIndexed$_nth$arity$2(null,i__41581);
var map__41591__$1 = (((((!((map__41591 == null))))?(((((map__41591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41591):map__41591);
var effect = map__41591__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41591__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41591__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__41578,chunk__41579,count__41580,i__41581,map__41591,map__41591__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__41578,chunk__41579,count__41580,i__41581,map__41591,map__41591__$1,effect,ms,dispatch))
,ms);
}


var G__41653 = seq__41578;
var G__41654 = chunk__41579;
var G__41655 = count__41580;
var G__41656 = (i__41581 + (1));
seq__41578 = G__41653;
chunk__41579 = G__41654;
count__41580 = G__41655;
i__41581 = G__41656;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41578);
if(temp__5735__auto__){
var seq__41578__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41578__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41578__$1);
var G__41657 = cljs.core.chunk_rest(seq__41578__$1);
var G__41658 = c__4609__auto__;
var G__41659 = cljs.core.count(c__4609__auto__);
var G__41660 = (0);
seq__41578 = G__41657;
chunk__41579 = G__41658;
count__41580 = G__41659;
i__41581 = G__41660;
continue;
} else {
var map__41593 = cljs.core.first(seq__41578__$1);
var map__41593__$1 = (((((!((map__41593 == null))))?(((((map__41593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41593):map__41593);
var effect = map__41593__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41593__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41593__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__41578,chunk__41579,count__41580,i__41581,map__41593,map__41593__$1,effect,ms,dispatch,seq__41578__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__41578,chunk__41579,count__41580,i__41581,map__41593,map__41593__$1,effect,ms,dispatch,seq__41578__$1,temp__5735__auto__))
,ms);
}


var G__41661 = cljs.core.next(seq__41578__$1);
var G__41662 = null;
var G__41663 = (0);
var G__41664 = (0);
seq__41578 = G__41661;
chunk__41579 = G__41662;
count__41580 = G__41663;
i__41581 = G__41664;
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
var seq__41595 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41596 = null;
var count__41597 = (0);
var i__41598 = (0);
while(true){
if((i__41598 < count__41597)){
var event = chunk__41596.cljs$core$IIndexed$_nth$arity$2(null,i__41598);
re_frame.router.dispatch(event);


var G__41668 = seq__41595;
var G__41669 = chunk__41596;
var G__41670 = count__41597;
var G__41671 = (i__41598 + (1));
seq__41595 = G__41668;
chunk__41596 = G__41669;
count__41597 = G__41670;
i__41598 = G__41671;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41595);
if(temp__5735__auto__){
var seq__41595__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41595__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41595__$1);
var G__41672 = cljs.core.chunk_rest(seq__41595__$1);
var G__41673 = c__4609__auto__;
var G__41674 = cljs.core.count(c__4609__auto__);
var G__41675 = (0);
seq__41595 = G__41672;
chunk__41596 = G__41673;
count__41597 = G__41674;
i__41598 = G__41675;
continue;
} else {
var event = cljs.core.first(seq__41595__$1);
re_frame.router.dispatch(event);


var G__41676 = cljs.core.next(seq__41595__$1);
var G__41677 = null;
var G__41678 = (0);
var G__41679 = (0);
seq__41595 = G__41676;
chunk__41596 = G__41677;
count__41597 = G__41678;
i__41598 = G__41679;
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
var seq__41605 = cljs.core.seq(value);
var chunk__41606 = null;
var count__41607 = (0);
var i__41608 = (0);
while(true){
if((i__41608 < count__41607)){
var event = chunk__41606.cljs$core$IIndexed$_nth$arity$2(null,i__41608);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__41680 = seq__41605;
var G__41681 = chunk__41606;
var G__41682 = count__41607;
var G__41683 = (i__41608 + (1));
seq__41605 = G__41680;
chunk__41606 = G__41681;
count__41607 = G__41682;
i__41608 = G__41683;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41605);
if(temp__5735__auto__){
var seq__41605__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41605__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41605__$1);
var G__41684 = cljs.core.chunk_rest(seq__41605__$1);
var G__41685 = c__4609__auto__;
var G__41686 = cljs.core.count(c__4609__auto__);
var G__41687 = (0);
seq__41605 = G__41684;
chunk__41606 = G__41685;
count__41607 = G__41686;
i__41608 = G__41687;
continue;
} else {
var event = cljs.core.first(seq__41605__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__41688 = cljs.core.next(seq__41605__$1);
var G__41689 = null;
var G__41690 = (0);
var G__41691 = (0);
seq__41605 = G__41688;
chunk__41606 = G__41689;
count__41607 = G__41690;
i__41608 = G__41691;
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
