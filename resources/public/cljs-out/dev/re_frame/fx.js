// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_11780 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11781 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11782 = null;
var count__11783 = (0);
var i__11784 = (0);
while(true){
if((i__11784 < count__11783)){
var vec__11785 = chunk__11782.cljs$core$IIndexed$_nth$arity$2(null,i__11784);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11785,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11785,(1),null);
var temp__5455__auto___11801 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11801)){
var effect_fn_11802 = temp__5455__auto___11801;
(effect_fn_11802.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11802.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11802.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11803 = seq__11781;
var G__11804 = chunk__11782;
var G__11805 = count__11783;
var G__11806 = (i__11784 + (1));
seq__11781 = G__11803;
chunk__11782 = G__11804;
count__11783 = G__11805;
i__11784 = G__11806;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11781);
if(temp__5457__auto__){
var seq__11781__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11781__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11781__$1);
var G__11807 = cljs.core.chunk_rest(seq__11781__$1);
var G__11808 = c__4351__auto__;
var G__11809 = cljs.core.count(c__4351__auto__);
var G__11810 = (0);
seq__11781 = G__11807;
chunk__11782 = G__11808;
count__11783 = G__11809;
i__11784 = G__11810;
continue;
} else {
var vec__11788 = cljs.core.first(seq__11781__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11788,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11788,(1),null);
var temp__5455__auto___11811 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11811)){
var effect_fn_11812 = temp__5455__auto___11811;
(effect_fn_11812.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11812.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11812.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11813 = cljs.core.next(seq__11781__$1);
var G__11814 = null;
var G__11815 = (0);
var G__11816 = (0);
seq__11781 = G__11813;
chunk__11782 = G__11814;
count__11783 = G__11815;
i__11784 = G__11816;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11349__auto___11817 = re_frame.interop.now();
var duration__11350__auto___11818 = (end__11349__auto___11817 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11350__auto___11818,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11349__auto___11817);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11780;
}} else {
var seq__11791 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11792 = null;
var count__11793 = (0);
var i__11794 = (0);
while(true){
if((i__11794 < count__11793)){
var vec__11795 = chunk__11792.cljs$core$IIndexed$_nth$arity$2(null,i__11794);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11795,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11795,(1),null);
var temp__5455__auto___11819 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11819)){
var effect_fn_11820 = temp__5455__auto___11819;
(effect_fn_11820.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11820.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11820.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11821 = seq__11791;
var G__11822 = chunk__11792;
var G__11823 = count__11793;
var G__11824 = (i__11794 + (1));
seq__11791 = G__11821;
chunk__11792 = G__11822;
count__11793 = G__11823;
i__11794 = G__11824;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11791);
if(temp__5457__auto__){
var seq__11791__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11791__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11791__$1);
var G__11825 = cljs.core.chunk_rest(seq__11791__$1);
var G__11826 = c__4351__auto__;
var G__11827 = cljs.core.count(c__4351__auto__);
var G__11828 = (0);
seq__11791 = G__11825;
chunk__11792 = G__11826;
count__11793 = G__11827;
i__11794 = G__11828;
continue;
} else {
var vec__11798 = cljs.core.first(seq__11791__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11798,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11798,(1),null);
var temp__5455__auto___11829 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11829)){
var effect_fn_11830 = temp__5455__auto___11829;
(effect_fn_11830.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11830.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11830.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11831 = cljs.core.next(seq__11791__$1);
var G__11832 = null;
var G__11833 = (0);
var G__11834 = (0);
seq__11791 = G__11831;
chunk__11792 = G__11832;
count__11793 = G__11833;
i__11794 = G__11834;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__11835 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11836 = null;
var count__11837 = (0);
var i__11838 = (0);
while(true){
if((i__11838 < count__11837)){
var map__11839 = chunk__11836.cljs$core$IIndexed$_nth$arity$2(null,i__11838);
var map__11839__$1 = ((((!((map__11839 == null)))?(((((map__11839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11839):map__11839);
var effect = map__11839__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11839__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11839__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11835,chunk__11836,count__11837,i__11838,map__11839,map__11839__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11835,chunk__11836,count__11837,i__11838,map__11839,map__11839__$1,effect,ms,dispatch))
,ms);
}


var G__11843 = seq__11835;
var G__11844 = chunk__11836;
var G__11845 = count__11837;
var G__11846 = (i__11838 + (1));
seq__11835 = G__11843;
chunk__11836 = G__11844;
count__11837 = G__11845;
i__11838 = G__11846;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11835);
if(temp__5457__auto__){
var seq__11835__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11835__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11835__$1);
var G__11847 = cljs.core.chunk_rest(seq__11835__$1);
var G__11848 = c__4351__auto__;
var G__11849 = cljs.core.count(c__4351__auto__);
var G__11850 = (0);
seq__11835 = G__11847;
chunk__11836 = G__11848;
count__11837 = G__11849;
i__11838 = G__11850;
continue;
} else {
var map__11841 = cljs.core.first(seq__11835__$1);
var map__11841__$1 = ((((!((map__11841 == null)))?(((((map__11841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11841):map__11841);
var effect = map__11841__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11841__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11841__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11835,chunk__11836,count__11837,i__11838,map__11841,map__11841__$1,effect,ms,dispatch,seq__11835__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11835,chunk__11836,count__11837,i__11838,map__11841,map__11841__$1,effect,ms,dispatch,seq__11835__$1,temp__5457__auto__))
,ms);
}


var G__11851 = cljs.core.next(seq__11835__$1);
var G__11852 = null;
var G__11853 = (0);
var G__11854 = (0);
seq__11835 = G__11851;
chunk__11836 = G__11852;
count__11837 = G__11853;
i__11838 = G__11854;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__11855 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11856 = null;
var count__11857 = (0);
var i__11858 = (0);
while(true){
if((i__11858 < count__11857)){
var event = chunk__11856.cljs$core$IIndexed$_nth$arity$2(null,i__11858);
re_frame.router.dispatch(event);


var G__11859 = seq__11855;
var G__11860 = chunk__11856;
var G__11861 = count__11857;
var G__11862 = (i__11858 + (1));
seq__11855 = G__11859;
chunk__11856 = G__11860;
count__11857 = G__11861;
i__11858 = G__11862;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11855);
if(temp__5457__auto__){
var seq__11855__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11855__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11855__$1);
var G__11863 = cljs.core.chunk_rest(seq__11855__$1);
var G__11864 = c__4351__auto__;
var G__11865 = cljs.core.count(c__4351__auto__);
var G__11866 = (0);
seq__11855 = G__11863;
chunk__11856 = G__11864;
count__11857 = G__11865;
i__11858 = G__11866;
continue;
} else {
var event = cljs.core.first(seq__11855__$1);
re_frame.router.dispatch(event);


var G__11867 = cljs.core.next(seq__11855__$1);
var G__11868 = null;
var G__11869 = (0);
var G__11870 = (0);
seq__11855 = G__11867;
chunk__11856 = G__11868;
count__11857 = G__11869;
i__11858 = G__11870;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__11871 = cljs.core.seq(value);
var chunk__11872 = null;
var count__11873 = (0);
var i__11874 = (0);
while(true){
if((i__11874 < count__11873)){
var event = chunk__11872.cljs$core$IIndexed$_nth$arity$2(null,i__11874);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11875 = seq__11871;
var G__11876 = chunk__11872;
var G__11877 = count__11873;
var G__11878 = (i__11874 + (1));
seq__11871 = G__11875;
chunk__11872 = G__11876;
count__11873 = G__11877;
i__11874 = G__11878;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11871);
if(temp__5457__auto__){
var seq__11871__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11871__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11871__$1);
var G__11879 = cljs.core.chunk_rest(seq__11871__$1);
var G__11880 = c__4351__auto__;
var G__11881 = cljs.core.count(c__4351__auto__);
var G__11882 = (0);
seq__11871 = G__11879;
chunk__11872 = G__11880;
count__11873 = G__11881;
i__11874 = G__11882;
continue;
} else {
var event = cljs.core.first(seq__11871__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11883 = cljs.core.next(seq__11871__$1);
var G__11884 = null;
var G__11885 = (0);
var G__11886 = (0);
seq__11871 = G__11883;
chunk__11872 = G__11884;
count__11873 = G__11885;
i__11874 = G__11886;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
