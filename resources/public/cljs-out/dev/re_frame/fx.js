// Compiled by ClojureScript 1.10.339 {}
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
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
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
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14731 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__14732 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14733 = null;
var count__14734 = (0);
var i__14735 = (0);
while(true){
if((i__14735 < count__14734)){
var vec__14736 = cljs.core._nth.call(null,chunk__14733,i__14735);
var effect_key = cljs.core.nth.call(null,vec__14736,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14736,(1),null);
var temp__5455__auto___14752 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14752)){
var effect_fn_14753 = temp__5455__auto___14752;
effect_fn_14753.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14754 = seq__14732;
var G__14755 = chunk__14733;
var G__14756 = count__14734;
var G__14757 = (i__14735 + (1));
seq__14732 = G__14754;
chunk__14733 = G__14755;
count__14734 = G__14756;
i__14735 = G__14757;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14732);
if(temp__5457__auto__){
var seq__14732__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14732__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14732__$1);
var G__14758 = cljs.core.chunk_rest.call(null,seq__14732__$1);
var G__14759 = c__4351__auto__;
var G__14760 = cljs.core.count.call(null,c__4351__auto__);
var G__14761 = (0);
seq__14732 = G__14758;
chunk__14733 = G__14759;
count__14734 = G__14760;
i__14735 = G__14761;
continue;
} else {
var vec__14739 = cljs.core.first.call(null,seq__14732__$1);
var effect_key = cljs.core.nth.call(null,vec__14739,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14739,(1),null);
var temp__5455__auto___14762 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14762)){
var effect_fn_14763 = temp__5455__auto___14762;
effect_fn_14763.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14764 = cljs.core.next.call(null,seq__14732__$1);
var G__14765 = null;
var G__14766 = (0);
var G__14767 = (0);
seq__14732 = G__14764;
chunk__14733 = G__14765;
count__14734 = G__14766;
i__14735 = G__14767;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__14564__auto___14768 = re_frame.interop.now.call(null);
var duration__14565__auto___14769 = (end__14564__auto___14768 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__14565__auto___14769,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__14564__auto___14768);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14731;
}} else {
var seq__14742 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14743 = null;
var count__14744 = (0);
var i__14745 = (0);
while(true){
if((i__14745 < count__14744)){
var vec__14746 = cljs.core._nth.call(null,chunk__14743,i__14745);
var effect_key = cljs.core.nth.call(null,vec__14746,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14746,(1),null);
var temp__5455__auto___14770 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14770)){
var effect_fn_14771 = temp__5455__auto___14770;
effect_fn_14771.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14772 = seq__14742;
var G__14773 = chunk__14743;
var G__14774 = count__14744;
var G__14775 = (i__14745 + (1));
seq__14742 = G__14772;
chunk__14743 = G__14773;
count__14744 = G__14774;
i__14745 = G__14775;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14742);
if(temp__5457__auto__){
var seq__14742__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14742__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14742__$1);
var G__14776 = cljs.core.chunk_rest.call(null,seq__14742__$1);
var G__14777 = c__4351__auto__;
var G__14778 = cljs.core.count.call(null,c__4351__auto__);
var G__14779 = (0);
seq__14742 = G__14776;
chunk__14743 = G__14777;
count__14744 = G__14778;
i__14745 = G__14779;
continue;
} else {
var vec__14749 = cljs.core.first.call(null,seq__14742__$1);
var effect_key = cljs.core.nth.call(null,vec__14749,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14749,(1),null);
var temp__5455__auto___14780 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___14780)){
var effect_fn_14781 = temp__5455__auto___14780;
effect_fn_14781.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14782 = cljs.core.next.call(null,seq__14742__$1);
var G__14783 = null;
var G__14784 = (0);
var G__14785 = (0);
seq__14742 = G__14782;
chunk__14743 = G__14783;
count__14744 = G__14784;
i__14745 = G__14785;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__14786 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14787 = null;
var count__14788 = (0);
var i__14789 = (0);
while(true){
if((i__14789 < count__14788)){
var map__14790 = cljs.core._nth.call(null,chunk__14787,i__14789);
var map__14790__$1 = ((((!((map__14790 == null)))?(((((map__14790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14790):map__14790);
var effect = map__14790__$1;
var ms = cljs.core.get.call(null,map__14790__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14790__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14786,chunk__14787,count__14788,i__14789,map__14790,map__14790__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14786,chunk__14787,count__14788,i__14789,map__14790,map__14790__$1,effect,ms,dispatch))
,ms);
}


var G__14794 = seq__14786;
var G__14795 = chunk__14787;
var G__14796 = count__14788;
var G__14797 = (i__14789 + (1));
seq__14786 = G__14794;
chunk__14787 = G__14795;
count__14788 = G__14796;
i__14789 = G__14797;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14786);
if(temp__5457__auto__){
var seq__14786__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14786__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14786__$1);
var G__14798 = cljs.core.chunk_rest.call(null,seq__14786__$1);
var G__14799 = c__4351__auto__;
var G__14800 = cljs.core.count.call(null,c__4351__auto__);
var G__14801 = (0);
seq__14786 = G__14798;
chunk__14787 = G__14799;
count__14788 = G__14800;
i__14789 = G__14801;
continue;
} else {
var map__14792 = cljs.core.first.call(null,seq__14786__$1);
var map__14792__$1 = ((((!((map__14792 == null)))?(((((map__14792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14792):map__14792);
var effect = map__14792__$1;
var ms = cljs.core.get.call(null,map__14792__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14792__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14786,chunk__14787,count__14788,i__14789,map__14792,map__14792__$1,effect,ms,dispatch,seq__14786__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14786,chunk__14787,count__14788,i__14789,map__14792,map__14792__$1,effect,ms,dispatch,seq__14786__$1,temp__5457__auto__))
,ms);
}


var G__14802 = cljs.core.next.call(null,seq__14786__$1);
var G__14803 = null;
var G__14804 = (0);
var G__14805 = (0);
seq__14786 = G__14802;
chunk__14787 = G__14803;
count__14788 = G__14804;
i__14789 = G__14805;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__14806 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14807 = null;
var count__14808 = (0);
var i__14809 = (0);
while(true){
if((i__14809 < count__14808)){
var event = cljs.core._nth.call(null,chunk__14807,i__14809);
re_frame.router.dispatch.call(null,event);


var G__14810 = seq__14806;
var G__14811 = chunk__14807;
var G__14812 = count__14808;
var G__14813 = (i__14809 + (1));
seq__14806 = G__14810;
chunk__14807 = G__14811;
count__14808 = G__14812;
i__14809 = G__14813;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14806);
if(temp__5457__auto__){
var seq__14806__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14806__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14806__$1);
var G__14814 = cljs.core.chunk_rest.call(null,seq__14806__$1);
var G__14815 = c__4351__auto__;
var G__14816 = cljs.core.count.call(null,c__4351__auto__);
var G__14817 = (0);
seq__14806 = G__14814;
chunk__14807 = G__14815;
count__14808 = G__14816;
i__14809 = G__14817;
continue;
} else {
var event = cljs.core.first.call(null,seq__14806__$1);
re_frame.router.dispatch.call(null,event);


var G__14818 = cljs.core.next.call(null,seq__14806__$1);
var G__14819 = null;
var G__14820 = (0);
var G__14821 = (0);
seq__14806 = G__14818;
chunk__14807 = G__14819;
count__14808 = G__14820;
i__14809 = G__14821;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__14822 = cljs.core.seq.call(null,value);
var chunk__14823 = null;
var count__14824 = (0);
var i__14825 = (0);
while(true){
if((i__14825 < count__14824)){
var event = cljs.core._nth.call(null,chunk__14823,i__14825);
clear_event.call(null,event);


var G__14826 = seq__14822;
var G__14827 = chunk__14823;
var G__14828 = count__14824;
var G__14829 = (i__14825 + (1));
seq__14822 = G__14826;
chunk__14823 = G__14827;
count__14824 = G__14828;
i__14825 = G__14829;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14822);
if(temp__5457__auto__){
var seq__14822__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14822__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14822__$1);
var G__14830 = cljs.core.chunk_rest.call(null,seq__14822__$1);
var G__14831 = c__4351__auto__;
var G__14832 = cljs.core.count.call(null,c__4351__auto__);
var G__14833 = (0);
seq__14822 = G__14830;
chunk__14823 = G__14831;
count__14824 = G__14832;
i__14825 = G__14833;
continue;
} else {
var event = cljs.core.first.call(null,seq__14822__$1);
clear_event.call(null,event);


var G__14834 = cljs.core.next.call(null,seq__14822__$1);
var G__14835 = null;
var G__14836 = (0);
var G__14837 = (0);
seq__14822 = G__14834;
chunk__14823 = G__14835;
count__14824 = G__14836;
i__14825 = G__14837;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
