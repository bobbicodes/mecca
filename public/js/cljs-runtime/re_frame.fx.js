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
var _STAR_current_trace_STAR__orig_val__40606 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40607 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40607);

try{try{var seq__40608 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__40609 = null;
var count__40610 = (0);
var i__40611 = (0);
while(true){
if((i__40611 < count__40610)){
var vec__40620 = chunk__40609.cljs$core$IIndexed$_nth$arity$2(null,i__40611);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40620,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40620,(1),null);
var temp__5733__auto___40670 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40670)){
var effect_fn_40671 = temp__5733__auto___40670;
(effect_fn_40671.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40671.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40671.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40672 = seq__40608;
var G__40673 = chunk__40609;
var G__40674 = count__40610;
var G__40675 = (i__40611 + (1));
seq__40608 = G__40672;
chunk__40609 = G__40673;
count__40610 = G__40674;
i__40611 = G__40675;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40608);
if(temp__5735__auto__){
var seq__40608__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40608__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40608__$1);
var G__40676 = cljs.core.chunk_rest(seq__40608__$1);
var G__40677 = c__4609__auto__;
var G__40678 = cljs.core.count(c__4609__auto__);
var G__40679 = (0);
seq__40608 = G__40676;
chunk__40609 = G__40677;
count__40610 = G__40678;
i__40611 = G__40679;
continue;
} else {
var vec__40623 = cljs.core.first(seq__40608__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40623,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40623,(1),null);
var temp__5733__auto___40681 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40681)){
var effect_fn_40682 = temp__5733__auto___40681;
(effect_fn_40682.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40682.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40682.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40683 = cljs.core.next(seq__40608__$1);
var G__40684 = null;
var G__40685 = (0);
var G__40686 = (0);
seq__40608 = G__40683;
chunk__40609 = G__40684;
count__40610 = G__40685;
i__40611 = G__40686;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40362__auto___40687 = re_frame.interop.now();
var duration__40363__auto___40688 = (end__40362__auto___40687 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40363__auto___40688,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40362__auto___40687);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40606);
}} else {
var seq__40626 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__40627 = null;
var count__40628 = (0);
var i__40629 = (0);
while(true){
if((i__40629 < count__40628)){
var vec__40639 = chunk__40627.cljs$core$IIndexed$_nth$arity$2(null,i__40629);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40639,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40639,(1),null);
var temp__5733__auto___40689 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40689)){
var effect_fn_40690 = temp__5733__auto___40689;
(effect_fn_40690.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40690.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40690.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40691 = seq__40626;
var G__40692 = chunk__40627;
var G__40693 = count__40628;
var G__40694 = (i__40629 + (1));
seq__40626 = G__40691;
chunk__40627 = G__40692;
count__40628 = G__40693;
i__40629 = G__40694;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40626);
if(temp__5735__auto__){
var seq__40626__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40626__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40626__$1);
var G__40695 = cljs.core.chunk_rest(seq__40626__$1);
var G__40696 = c__4609__auto__;
var G__40697 = cljs.core.count(c__4609__auto__);
var G__40698 = (0);
seq__40626 = G__40695;
chunk__40627 = G__40696;
count__40628 = G__40697;
i__40629 = G__40698;
continue;
} else {
var vec__40642 = cljs.core.first(seq__40626__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40642,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40642,(1),null);
var temp__5733__auto___40699 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40699)){
var effect_fn_40700 = temp__5733__auto___40699;
(effect_fn_40700.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40700.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40700.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40701 = cljs.core.next(seq__40626__$1);
var G__40702 = null;
var G__40703 = (0);
var G__40704 = (0);
seq__40626 = G__40701;
chunk__40627 = G__40702;
count__40628 = G__40703;
i__40629 = G__40704;
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
var seq__40645 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40646 = null;
var count__40647 = (0);
var i__40648 = (0);
while(true){
if((i__40648 < count__40647)){
var map__40653 = chunk__40646.cljs$core$IIndexed$_nth$arity$2(null,i__40648);
var map__40653__$1 = (((((!((map__40653 == null))))?(((((map__40653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40653):map__40653);
var effect = map__40653__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40653__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40653__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__40645,chunk__40646,count__40647,i__40648,map__40653,map__40653__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__40645,chunk__40646,count__40647,i__40648,map__40653,map__40653__$1,effect,ms,dispatch))
,ms);
}


var G__40706 = seq__40645;
var G__40707 = chunk__40646;
var G__40708 = count__40647;
var G__40709 = (i__40648 + (1));
seq__40645 = G__40706;
chunk__40646 = G__40707;
count__40647 = G__40708;
i__40648 = G__40709;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40645);
if(temp__5735__auto__){
var seq__40645__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40645__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40645__$1);
var G__40710 = cljs.core.chunk_rest(seq__40645__$1);
var G__40711 = c__4609__auto__;
var G__40712 = cljs.core.count(c__4609__auto__);
var G__40713 = (0);
seq__40645 = G__40710;
chunk__40646 = G__40711;
count__40647 = G__40712;
i__40648 = G__40713;
continue;
} else {
var map__40655 = cljs.core.first(seq__40645__$1);
var map__40655__$1 = (((((!((map__40655 == null))))?(((((map__40655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40655):map__40655);
var effect = map__40655__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40655__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40655__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__40645,chunk__40646,count__40647,i__40648,map__40655,map__40655__$1,effect,ms,dispatch,seq__40645__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__40645,chunk__40646,count__40647,i__40648,map__40655,map__40655__$1,effect,ms,dispatch,seq__40645__$1,temp__5735__auto__))
,ms);
}


var G__40734 = cljs.core.next(seq__40645__$1);
var G__40735 = null;
var G__40736 = (0);
var G__40737 = (0);
seq__40645 = G__40734;
chunk__40646 = G__40735;
count__40647 = G__40736;
i__40648 = G__40737;
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
var seq__40657 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40658 = null;
var count__40659 = (0);
var i__40660 = (0);
while(true){
if((i__40660 < count__40659)){
var event = chunk__40658.cljs$core$IIndexed$_nth$arity$2(null,i__40660);
re_frame.router.dispatch(event);


var G__40743 = seq__40657;
var G__40744 = chunk__40658;
var G__40745 = count__40659;
var G__40746 = (i__40660 + (1));
seq__40657 = G__40743;
chunk__40658 = G__40744;
count__40659 = G__40745;
i__40660 = G__40746;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40657);
if(temp__5735__auto__){
var seq__40657__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40657__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40657__$1);
var G__40752 = cljs.core.chunk_rest(seq__40657__$1);
var G__40753 = c__4609__auto__;
var G__40754 = cljs.core.count(c__4609__auto__);
var G__40755 = (0);
seq__40657 = G__40752;
chunk__40658 = G__40753;
count__40659 = G__40754;
i__40660 = G__40755;
continue;
} else {
var event = cljs.core.first(seq__40657__$1);
re_frame.router.dispatch(event);


var G__40756 = cljs.core.next(seq__40657__$1);
var G__40757 = null;
var G__40758 = (0);
var G__40759 = (0);
seq__40657 = G__40756;
chunk__40658 = G__40757;
count__40659 = G__40758;
i__40660 = G__40759;
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
var seq__40665 = cljs.core.seq(value);
var chunk__40666 = null;
var count__40667 = (0);
var i__40668 = (0);
while(true){
if((i__40668 < count__40667)){
var event = chunk__40666.cljs$core$IIndexed$_nth$arity$2(null,i__40668);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__40771 = seq__40665;
var G__40772 = chunk__40666;
var G__40773 = count__40667;
var G__40774 = (i__40668 + (1));
seq__40665 = G__40771;
chunk__40666 = G__40772;
count__40667 = G__40773;
i__40668 = G__40774;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40665);
if(temp__5735__auto__){
var seq__40665__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40665__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40665__$1);
var G__40775 = cljs.core.chunk_rest(seq__40665__$1);
var G__40776 = c__4609__auto__;
var G__40777 = cljs.core.count(c__4609__auto__);
var G__40778 = (0);
seq__40665 = G__40775;
chunk__40666 = G__40776;
count__40667 = G__40777;
i__40668 = G__40778;
continue;
} else {
var event = cljs.core.first(seq__40665__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__40779 = cljs.core.next(seq__40665__$1);
var G__40780 = null;
var G__40781 = (0);
var G__40782 = (0);
seq__40665 = G__40779;
chunk__40666 = G__40780;
count__40667 = G__40781;
i__40668 = G__40782;
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
