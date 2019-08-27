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
var _STAR_current_trace_STAR_10750 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__10751 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10752 = null;
var count__10753 = (0);
var i__10754 = (0);
while(true){
if((i__10754 < count__10753)){
var vec__10755 = cljs.core._nth.call(null,chunk__10752,i__10754);
var effect_key = cljs.core.nth.call(null,vec__10755,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10755,(1),null);
var temp__5455__auto___10771 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10771)){
var effect_fn_10772 = temp__5455__auto___10771;
effect_fn_10772.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10773 = seq__10751;
var G__10774 = chunk__10752;
var G__10775 = count__10753;
var G__10776 = (i__10754 + (1));
seq__10751 = G__10773;
chunk__10752 = G__10774;
count__10753 = G__10775;
i__10754 = G__10776;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10751);
if(temp__5457__auto__){
var seq__10751__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10751__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10751__$1);
var G__10777 = cljs.core.chunk_rest.call(null,seq__10751__$1);
var G__10778 = c__4351__auto__;
var G__10779 = cljs.core.count.call(null,c__4351__auto__);
var G__10780 = (0);
seq__10751 = G__10777;
chunk__10752 = G__10778;
count__10753 = G__10779;
i__10754 = G__10780;
continue;
} else {
var vec__10758 = cljs.core.first.call(null,seq__10751__$1);
var effect_key = cljs.core.nth.call(null,vec__10758,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10758,(1),null);
var temp__5455__auto___10781 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10781)){
var effect_fn_10782 = temp__5455__auto___10781;
effect_fn_10782.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10783 = cljs.core.next.call(null,seq__10751__$1);
var G__10784 = null;
var G__10785 = (0);
var G__10786 = (0);
seq__10751 = G__10783;
chunk__10752 = G__10784;
count__10753 = G__10785;
i__10754 = G__10786;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10329__auto___10787 = re_frame.interop.now.call(null);
var duration__10330__auto___10788 = (end__10329__auto___10787 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10330__auto___10788,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__10329__auto___10787);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10750;
}} else {
var seq__10761 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10762 = null;
var count__10763 = (0);
var i__10764 = (0);
while(true){
if((i__10764 < count__10763)){
var vec__10765 = cljs.core._nth.call(null,chunk__10762,i__10764);
var effect_key = cljs.core.nth.call(null,vec__10765,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10765,(1),null);
var temp__5455__auto___10789 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10789)){
var effect_fn_10790 = temp__5455__auto___10789;
effect_fn_10790.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10791 = seq__10761;
var G__10792 = chunk__10762;
var G__10793 = count__10763;
var G__10794 = (i__10764 + (1));
seq__10761 = G__10791;
chunk__10762 = G__10792;
count__10763 = G__10793;
i__10764 = G__10794;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10761);
if(temp__5457__auto__){
var seq__10761__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10761__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10761__$1);
var G__10795 = cljs.core.chunk_rest.call(null,seq__10761__$1);
var G__10796 = c__4351__auto__;
var G__10797 = cljs.core.count.call(null,c__4351__auto__);
var G__10798 = (0);
seq__10761 = G__10795;
chunk__10762 = G__10796;
count__10763 = G__10797;
i__10764 = G__10798;
continue;
} else {
var vec__10768 = cljs.core.first.call(null,seq__10761__$1);
var effect_key = cljs.core.nth.call(null,vec__10768,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10768,(1),null);
var temp__5455__auto___10799 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10799)){
var effect_fn_10800 = temp__5455__auto___10799;
effect_fn_10800.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10801 = cljs.core.next.call(null,seq__10761__$1);
var G__10802 = null;
var G__10803 = (0);
var G__10804 = (0);
seq__10761 = G__10801;
chunk__10762 = G__10802;
count__10763 = G__10803;
i__10764 = G__10804;
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
var seq__10805 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10806 = null;
var count__10807 = (0);
var i__10808 = (0);
while(true){
if((i__10808 < count__10807)){
var map__10809 = cljs.core._nth.call(null,chunk__10806,i__10808);
var map__10809__$1 = ((((!((map__10809 == null)))?(((((map__10809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10809):map__10809);
var effect = map__10809__$1;
var ms = cljs.core.get.call(null,map__10809__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10809__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10805,chunk__10806,count__10807,i__10808,map__10809,map__10809__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10805,chunk__10806,count__10807,i__10808,map__10809,map__10809__$1,effect,ms,dispatch))
,ms);
}


var G__10813 = seq__10805;
var G__10814 = chunk__10806;
var G__10815 = count__10807;
var G__10816 = (i__10808 + (1));
seq__10805 = G__10813;
chunk__10806 = G__10814;
count__10807 = G__10815;
i__10808 = G__10816;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10805);
if(temp__5457__auto__){
var seq__10805__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10805__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10805__$1);
var G__10817 = cljs.core.chunk_rest.call(null,seq__10805__$1);
var G__10818 = c__4351__auto__;
var G__10819 = cljs.core.count.call(null,c__4351__auto__);
var G__10820 = (0);
seq__10805 = G__10817;
chunk__10806 = G__10818;
count__10807 = G__10819;
i__10808 = G__10820;
continue;
} else {
var map__10811 = cljs.core.first.call(null,seq__10805__$1);
var map__10811__$1 = ((((!((map__10811 == null)))?(((((map__10811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10811):map__10811);
var effect = map__10811__$1;
var ms = cljs.core.get.call(null,map__10811__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10811__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10805,chunk__10806,count__10807,i__10808,map__10811,map__10811__$1,effect,ms,dispatch,seq__10805__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10805,chunk__10806,count__10807,i__10808,map__10811,map__10811__$1,effect,ms,dispatch,seq__10805__$1,temp__5457__auto__))
,ms);
}


var G__10821 = cljs.core.next.call(null,seq__10805__$1);
var G__10822 = null;
var G__10823 = (0);
var G__10824 = (0);
seq__10805 = G__10821;
chunk__10806 = G__10822;
count__10807 = G__10823;
i__10808 = G__10824;
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
var seq__10825 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10826 = null;
var count__10827 = (0);
var i__10828 = (0);
while(true){
if((i__10828 < count__10827)){
var event = cljs.core._nth.call(null,chunk__10826,i__10828);
re_frame.router.dispatch.call(null,event);


var G__10829 = seq__10825;
var G__10830 = chunk__10826;
var G__10831 = count__10827;
var G__10832 = (i__10828 + (1));
seq__10825 = G__10829;
chunk__10826 = G__10830;
count__10827 = G__10831;
i__10828 = G__10832;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10825);
if(temp__5457__auto__){
var seq__10825__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10825__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10825__$1);
var G__10833 = cljs.core.chunk_rest.call(null,seq__10825__$1);
var G__10834 = c__4351__auto__;
var G__10835 = cljs.core.count.call(null,c__4351__auto__);
var G__10836 = (0);
seq__10825 = G__10833;
chunk__10826 = G__10834;
count__10827 = G__10835;
i__10828 = G__10836;
continue;
} else {
var event = cljs.core.first.call(null,seq__10825__$1);
re_frame.router.dispatch.call(null,event);


var G__10837 = cljs.core.next.call(null,seq__10825__$1);
var G__10838 = null;
var G__10839 = (0);
var G__10840 = (0);
seq__10825 = G__10837;
chunk__10826 = G__10838;
count__10827 = G__10839;
i__10828 = G__10840;
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
var seq__10841 = cljs.core.seq.call(null,value);
var chunk__10842 = null;
var count__10843 = (0);
var i__10844 = (0);
while(true){
if((i__10844 < count__10843)){
var event = cljs.core._nth.call(null,chunk__10842,i__10844);
clear_event.call(null,event);


var G__10845 = seq__10841;
var G__10846 = chunk__10842;
var G__10847 = count__10843;
var G__10848 = (i__10844 + (1));
seq__10841 = G__10845;
chunk__10842 = G__10846;
count__10843 = G__10847;
i__10844 = G__10848;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10841);
if(temp__5457__auto__){
var seq__10841__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10841__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10841__$1);
var G__10849 = cljs.core.chunk_rest.call(null,seq__10841__$1);
var G__10850 = c__4351__auto__;
var G__10851 = cljs.core.count.call(null,c__4351__auto__);
var G__10852 = (0);
seq__10841 = G__10849;
chunk__10842 = G__10850;
count__10843 = G__10851;
i__10844 = G__10852;
continue;
} else {
var event = cljs.core.first.call(null,seq__10841__$1);
clear_event.call(null,event);


var G__10853 = cljs.core.next.call(null,seq__10841__$1);
var G__10854 = null;
var G__10855 = (0);
var G__10856 = (0);
seq__10841 = G__10853;
chunk__10842 = G__10854;
count__10843 = G__10855;
i__10844 = G__10856;
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
