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
var _STAR_current_trace_STAR_10797 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__10798 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10799 = null;
var count__10800 = (0);
var i__10801 = (0);
while(true){
if((i__10801 < count__10800)){
var vec__10802 = cljs.core._nth.call(null,chunk__10799,i__10801);
var effect_key = cljs.core.nth.call(null,vec__10802,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10802,(1),null);
var temp__5455__auto___10818 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10818)){
var effect_fn_10819 = temp__5455__auto___10818;
effect_fn_10819.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10820 = seq__10798;
var G__10821 = chunk__10799;
var G__10822 = count__10800;
var G__10823 = (i__10801 + (1));
seq__10798 = G__10820;
chunk__10799 = G__10821;
count__10800 = G__10822;
i__10801 = G__10823;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10798);
if(temp__5457__auto__){
var seq__10798__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10798__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10798__$1);
var G__10824 = cljs.core.chunk_rest.call(null,seq__10798__$1);
var G__10825 = c__4351__auto__;
var G__10826 = cljs.core.count.call(null,c__4351__auto__);
var G__10827 = (0);
seq__10798 = G__10824;
chunk__10799 = G__10825;
count__10800 = G__10826;
i__10801 = G__10827;
continue;
} else {
var vec__10805 = cljs.core.first.call(null,seq__10798__$1);
var effect_key = cljs.core.nth.call(null,vec__10805,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10805,(1),null);
var temp__5455__auto___10828 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10828)){
var effect_fn_10829 = temp__5455__auto___10828;
effect_fn_10829.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10830 = cljs.core.next.call(null,seq__10798__$1);
var G__10831 = null;
var G__10832 = (0);
var G__10833 = (0);
seq__10798 = G__10830;
chunk__10799 = G__10831;
count__10800 = G__10832;
i__10801 = G__10833;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10000__auto___10834 = re_frame.interop.now.call(null);
var duration__10001__auto___10835 = (end__10000__auto___10834 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10001__auto___10835,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__10000__auto___10834);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10797;
}} else {
var seq__10808 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10809 = null;
var count__10810 = (0);
var i__10811 = (0);
while(true){
if((i__10811 < count__10810)){
var vec__10812 = cljs.core._nth.call(null,chunk__10809,i__10811);
var effect_key = cljs.core.nth.call(null,vec__10812,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10812,(1),null);
var temp__5455__auto___10836 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10836)){
var effect_fn_10837 = temp__5455__auto___10836;
effect_fn_10837.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10838 = seq__10808;
var G__10839 = chunk__10809;
var G__10840 = count__10810;
var G__10841 = (i__10811 + (1));
seq__10808 = G__10838;
chunk__10809 = G__10839;
count__10810 = G__10840;
i__10811 = G__10841;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10808);
if(temp__5457__auto__){
var seq__10808__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10808__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10808__$1);
var G__10842 = cljs.core.chunk_rest.call(null,seq__10808__$1);
var G__10843 = c__4351__auto__;
var G__10844 = cljs.core.count.call(null,c__4351__auto__);
var G__10845 = (0);
seq__10808 = G__10842;
chunk__10809 = G__10843;
count__10810 = G__10844;
i__10811 = G__10845;
continue;
} else {
var vec__10815 = cljs.core.first.call(null,seq__10808__$1);
var effect_key = cljs.core.nth.call(null,vec__10815,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10815,(1),null);
var temp__5455__auto___10846 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10846)){
var effect_fn_10847 = temp__5455__auto___10846;
effect_fn_10847.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10848 = cljs.core.next.call(null,seq__10808__$1);
var G__10849 = null;
var G__10850 = (0);
var G__10851 = (0);
seq__10808 = G__10848;
chunk__10809 = G__10849;
count__10810 = G__10850;
i__10811 = G__10851;
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
var seq__10852 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10853 = null;
var count__10854 = (0);
var i__10855 = (0);
while(true){
if((i__10855 < count__10854)){
var map__10856 = cljs.core._nth.call(null,chunk__10853,i__10855);
var map__10856__$1 = ((((!((map__10856 == null)))?(((((map__10856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10856):map__10856);
var effect = map__10856__$1;
var ms = cljs.core.get.call(null,map__10856__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10856__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10852,chunk__10853,count__10854,i__10855,map__10856,map__10856__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10852,chunk__10853,count__10854,i__10855,map__10856,map__10856__$1,effect,ms,dispatch))
,ms);
}


var G__10860 = seq__10852;
var G__10861 = chunk__10853;
var G__10862 = count__10854;
var G__10863 = (i__10855 + (1));
seq__10852 = G__10860;
chunk__10853 = G__10861;
count__10854 = G__10862;
i__10855 = G__10863;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10852);
if(temp__5457__auto__){
var seq__10852__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10852__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10852__$1);
var G__10864 = cljs.core.chunk_rest.call(null,seq__10852__$1);
var G__10865 = c__4351__auto__;
var G__10866 = cljs.core.count.call(null,c__4351__auto__);
var G__10867 = (0);
seq__10852 = G__10864;
chunk__10853 = G__10865;
count__10854 = G__10866;
i__10855 = G__10867;
continue;
} else {
var map__10858 = cljs.core.first.call(null,seq__10852__$1);
var map__10858__$1 = ((((!((map__10858 == null)))?(((((map__10858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10858):map__10858);
var effect = map__10858__$1;
var ms = cljs.core.get.call(null,map__10858__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10858__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10852,chunk__10853,count__10854,i__10855,map__10858,map__10858__$1,effect,ms,dispatch,seq__10852__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10852,chunk__10853,count__10854,i__10855,map__10858,map__10858__$1,effect,ms,dispatch,seq__10852__$1,temp__5457__auto__))
,ms);
}


var G__10868 = cljs.core.next.call(null,seq__10852__$1);
var G__10869 = null;
var G__10870 = (0);
var G__10871 = (0);
seq__10852 = G__10868;
chunk__10853 = G__10869;
count__10854 = G__10870;
i__10855 = G__10871;
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
var seq__10872 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10873 = null;
var count__10874 = (0);
var i__10875 = (0);
while(true){
if((i__10875 < count__10874)){
var event = cljs.core._nth.call(null,chunk__10873,i__10875);
re_frame.router.dispatch.call(null,event);


var G__10876 = seq__10872;
var G__10877 = chunk__10873;
var G__10878 = count__10874;
var G__10879 = (i__10875 + (1));
seq__10872 = G__10876;
chunk__10873 = G__10877;
count__10874 = G__10878;
i__10875 = G__10879;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10872);
if(temp__5457__auto__){
var seq__10872__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10872__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10872__$1);
var G__10880 = cljs.core.chunk_rest.call(null,seq__10872__$1);
var G__10881 = c__4351__auto__;
var G__10882 = cljs.core.count.call(null,c__4351__auto__);
var G__10883 = (0);
seq__10872 = G__10880;
chunk__10873 = G__10881;
count__10874 = G__10882;
i__10875 = G__10883;
continue;
} else {
var event = cljs.core.first.call(null,seq__10872__$1);
re_frame.router.dispatch.call(null,event);


var G__10884 = cljs.core.next.call(null,seq__10872__$1);
var G__10885 = null;
var G__10886 = (0);
var G__10887 = (0);
seq__10872 = G__10884;
chunk__10873 = G__10885;
count__10874 = G__10886;
i__10875 = G__10887;
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
var seq__10888 = cljs.core.seq.call(null,value);
var chunk__10889 = null;
var count__10890 = (0);
var i__10891 = (0);
while(true){
if((i__10891 < count__10890)){
var event = cljs.core._nth.call(null,chunk__10889,i__10891);
clear_event.call(null,event);


var G__10892 = seq__10888;
var G__10893 = chunk__10889;
var G__10894 = count__10890;
var G__10895 = (i__10891 + (1));
seq__10888 = G__10892;
chunk__10889 = G__10893;
count__10890 = G__10894;
i__10891 = G__10895;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10888);
if(temp__5457__auto__){
var seq__10888__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10888__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10888__$1);
var G__10896 = cljs.core.chunk_rest.call(null,seq__10888__$1);
var G__10897 = c__4351__auto__;
var G__10898 = cljs.core.count.call(null,c__4351__auto__);
var G__10899 = (0);
seq__10888 = G__10896;
chunk__10889 = G__10897;
count__10890 = G__10898;
i__10891 = G__10899;
continue;
} else {
var event = cljs.core.first.call(null,seq__10888__$1);
clear_event.call(null,event);


var G__10900 = cljs.core.next.call(null,seq__10888__$1);
var G__10901 = null;
var G__10902 = (0);
var G__10903 = (0);
seq__10888 = G__10900;
chunk__10889 = G__10901;
count__10890 = G__10902;
i__10891 = G__10903;
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
