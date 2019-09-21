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
var _STAR_current_trace_STAR_11787 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11788 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11789 = null;
var count__11790 = (0);
var i__11791 = (0);
while(true){
if((i__11791 < count__11790)){
var vec__11792 = chunk__11789.cljs$core$IIndexed$_nth$arity$2(null,i__11791);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11792,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11792,(1),null);
var temp__5455__auto___11808 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11808)){
var effect_fn_11809 = temp__5455__auto___11808;
(effect_fn_11809.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11809.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11809.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11810 = seq__11788;
var G__11811 = chunk__11789;
var G__11812 = count__11790;
var G__11813 = (i__11791 + (1));
seq__11788 = G__11810;
chunk__11789 = G__11811;
count__11790 = G__11812;
i__11791 = G__11813;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11788);
if(temp__5457__auto__){
var seq__11788__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11788__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11788__$1);
var G__11814 = cljs.core.chunk_rest(seq__11788__$1);
var G__11815 = c__4351__auto__;
var G__11816 = cljs.core.count(c__4351__auto__);
var G__11817 = (0);
seq__11788 = G__11814;
chunk__11789 = G__11815;
count__11790 = G__11816;
i__11791 = G__11817;
continue;
} else {
var vec__11795 = cljs.core.first(seq__11788__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11795,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11795,(1),null);
var temp__5455__auto___11818 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11818)){
var effect_fn_11819 = temp__5455__auto___11818;
(effect_fn_11819.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11819.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11819.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11820 = cljs.core.next(seq__11788__$1);
var G__11821 = null;
var G__11822 = (0);
var G__11823 = (0);
seq__11788 = G__11820;
chunk__11789 = G__11821;
count__11790 = G__11822;
i__11791 = G__11823;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11352__auto___11824 = re_frame.interop.now();
var duration__11353__auto___11825 = (end__11352__auto___11824 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11353__auto___11825,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11352__auto___11824);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11787;
}} else {
var seq__11798 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11799 = null;
var count__11800 = (0);
var i__11801 = (0);
while(true){
if((i__11801 < count__11800)){
var vec__11802 = chunk__11799.cljs$core$IIndexed$_nth$arity$2(null,i__11801);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11802,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11802,(1),null);
var temp__5455__auto___11826 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11826)){
var effect_fn_11827 = temp__5455__auto___11826;
(effect_fn_11827.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11827.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11827.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11828 = seq__11798;
var G__11829 = chunk__11799;
var G__11830 = count__11800;
var G__11831 = (i__11801 + (1));
seq__11798 = G__11828;
chunk__11799 = G__11829;
count__11800 = G__11830;
i__11801 = G__11831;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11798);
if(temp__5457__auto__){
var seq__11798__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11798__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11798__$1);
var G__11832 = cljs.core.chunk_rest(seq__11798__$1);
var G__11833 = c__4351__auto__;
var G__11834 = cljs.core.count(c__4351__auto__);
var G__11835 = (0);
seq__11798 = G__11832;
chunk__11799 = G__11833;
count__11800 = G__11834;
i__11801 = G__11835;
continue;
} else {
var vec__11805 = cljs.core.first(seq__11798__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11805,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11805,(1),null);
var temp__5455__auto___11836 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11836)){
var effect_fn_11837 = temp__5455__auto___11836;
(effect_fn_11837.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11837.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11837.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11838 = cljs.core.next(seq__11798__$1);
var G__11839 = null;
var G__11840 = (0);
var G__11841 = (0);
seq__11798 = G__11838;
chunk__11799 = G__11839;
count__11800 = G__11840;
i__11801 = G__11841;
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
var seq__11842 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11843 = null;
var count__11844 = (0);
var i__11845 = (0);
while(true){
if((i__11845 < count__11844)){
var map__11846 = chunk__11843.cljs$core$IIndexed$_nth$arity$2(null,i__11845);
var map__11846__$1 = ((((!((map__11846 == null)))?(((((map__11846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11846):map__11846);
var effect = map__11846__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11846__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11846__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11842,chunk__11843,count__11844,i__11845,map__11846,map__11846__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11842,chunk__11843,count__11844,i__11845,map__11846,map__11846__$1,effect,ms,dispatch))
,ms);
}


var G__11850 = seq__11842;
var G__11851 = chunk__11843;
var G__11852 = count__11844;
var G__11853 = (i__11845 + (1));
seq__11842 = G__11850;
chunk__11843 = G__11851;
count__11844 = G__11852;
i__11845 = G__11853;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11842);
if(temp__5457__auto__){
var seq__11842__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11842__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11842__$1);
var G__11854 = cljs.core.chunk_rest(seq__11842__$1);
var G__11855 = c__4351__auto__;
var G__11856 = cljs.core.count(c__4351__auto__);
var G__11857 = (0);
seq__11842 = G__11854;
chunk__11843 = G__11855;
count__11844 = G__11856;
i__11845 = G__11857;
continue;
} else {
var map__11848 = cljs.core.first(seq__11842__$1);
var map__11848__$1 = ((((!((map__11848 == null)))?(((((map__11848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11848):map__11848);
var effect = map__11848__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11848__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11848__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11842,chunk__11843,count__11844,i__11845,map__11848,map__11848__$1,effect,ms,dispatch,seq__11842__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11842,chunk__11843,count__11844,i__11845,map__11848,map__11848__$1,effect,ms,dispatch,seq__11842__$1,temp__5457__auto__))
,ms);
}


var G__11858 = cljs.core.next(seq__11842__$1);
var G__11859 = null;
var G__11860 = (0);
var G__11861 = (0);
seq__11842 = G__11858;
chunk__11843 = G__11859;
count__11844 = G__11860;
i__11845 = G__11861;
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
var seq__11862 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11863 = null;
var count__11864 = (0);
var i__11865 = (0);
while(true){
if((i__11865 < count__11864)){
var event = chunk__11863.cljs$core$IIndexed$_nth$arity$2(null,i__11865);
re_frame.router.dispatch(event);


var G__11866 = seq__11862;
var G__11867 = chunk__11863;
var G__11868 = count__11864;
var G__11869 = (i__11865 + (1));
seq__11862 = G__11866;
chunk__11863 = G__11867;
count__11864 = G__11868;
i__11865 = G__11869;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11862);
if(temp__5457__auto__){
var seq__11862__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11862__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11862__$1);
var G__11870 = cljs.core.chunk_rest(seq__11862__$1);
var G__11871 = c__4351__auto__;
var G__11872 = cljs.core.count(c__4351__auto__);
var G__11873 = (0);
seq__11862 = G__11870;
chunk__11863 = G__11871;
count__11864 = G__11872;
i__11865 = G__11873;
continue;
} else {
var event = cljs.core.first(seq__11862__$1);
re_frame.router.dispatch(event);


var G__11874 = cljs.core.next(seq__11862__$1);
var G__11875 = null;
var G__11876 = (0);
var G__11877 = (0);
seq__11862 = G__11874;
chunk__11863 = G__11875;
count__11864 = G__11876;
i__11865 = G__11877;
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
var seq__11878 = cljs.core.seq(value);
var chunk__11879 = null;
var count__11880 = (0);
var i__11881 = (0);
while(true){
if((i__11881 < count__11880)){
var event = chunk__11879.cljs$core$IIndexed$_nth$arity$2(null,i__11881);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11882 = seq__11878;
var G__11883 = chunk__11879;
var G__11884 = count__11880;
var G__11885 = (i__11881 + (1));
seq__11878 = G__11882;
chunk__11879 = G__11883;
count__11880 = G__11884;
i__11881 = G__11885;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11878);
if(temp__5457__auto__){
var seq__11878__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11878__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11878__$1);
var G__11886 = cljs.core.chunk_rest(seq__11878__$1);
var G__11887 = c__4351__auto__;
var G__11888 = cljs.core.count(c__4351__auto__);
var G__11889 = (0);
seq__11878 = G__11886;
chunk__11879 = G__11887;
count__11880 = G__11888;
i__11881 = G__11889;
continue;
} else {
var event = cljs.core.first(seq__11878__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__11890 = cljs.core.next(seq__11878__$1);
var G__11891 = null;
var G__11892 = (0);
var G__11893 = (0);
seq__11878 = G__11890;
chunk__11879 = G__11891;
count__11880 = G__11892;
i__11881 = G__11893;
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
