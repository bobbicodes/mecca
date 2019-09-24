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
var _STAR_current_trace_STAR_11929 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11930 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11931 = null;
var count__11932 = (0);
var i__11933 = (0);
while(true){
if((i__11933 < count__11932)){
var vec__11934 = chunk__11931.cljs$core$IIndexed$_nth$arity$2(null,i__11933);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934,(1),null);
var temp__5455__auto___11950 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11950)){
var effect_fn_11951 = temp__5455__auto___11950;
(effect_fn_11951.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11951.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11951.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11952 = seq__11930;
var G__11953 = chunk__11931;
var G__11954 = count__11932;
var G__11955 = (i__11933 + (1));
seq__11930 = G__11952;
chunk__11931 = G__11953;
count__11932 = G__11954;
i__11933 = G__11955;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11930);
if(temp__5457__auto__){
var seq__11930__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11930__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11930__$1);
var G__11956 = cljs.core.chunk_rest(seq__11930__$1);
var G__11957 = c__4351__auto__;
var G__11958 = cljs.core.count(c__4351__auto__);
var G__11959 = (0);
seq__11930 = G__11956;
chunk__11931 = G__11957;
count__11932 = G__11958;
i__11933 = G__11959;
continue;
} else {
var vec__11937 = cljs.core.first(seq__11930__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11937,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11937,(1),null);
var temp__5455__auto___11960 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11960)){
var effect_fn_11961 = temp__5455__auto___11960;
(effect_fn_11961.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11961.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11961.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11962 = cljs.core.next(seq__11930__$1);
var G__11963 = null;
var G__11964 = (0);
var G__11965 = (0);
seq__11930 = G__11962;
chunk__11931 = G__11963;
count__11932 = G__11964;
i__11933 = G__11965;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11498__auto___11966 = re_frame.interop.now();
var duration__11499__auto___11967 = (end__11498__auto___11966 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11499__auto___11967,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11498__auto___11966);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11929;
}} else {
var seq__11940 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11941 = null;
var count__11942 = (0);
var i__11943 = (0);
while(true){
if((i__11943 < count__11942)){
var vec__11944 = chunk__11941.cljs$core$IIndexed$_nth$arity$2(null,i__11943);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11944,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11944,(1),null);
var temp__5455__auto___11968 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11968)){
var effect_fn_11969 = temp__5455__auto___11968;
(effect_fn_11969.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11969.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11969.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11970 = seq__11940;
var G__11971 = chunk__11941;
var G__11972 = count__11942;
var G__11973 = (i__11943 + (1));
seq__11940 = G__11970;
chunk__11941 = G__11971;
count__11942 = G__11972;
i__11943 = G__11973;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11940);
if(temp__5457__auto__){
var seq__11940__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11940__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11940__$1);
var G__11974 = cljs.core.chunk_rest(seq__11940__$1);
var G__11975 = c__4351__auto__;
var G__11976 = cljs.core.count(c__4351__auto__);
var G__11977 = (0);
seq__11940 = G__11974;
chunk__11941 = G__11975;
count__11942 = G__11976;
i__11943 = G__11977;
continue;
} else {
var vec__11947 = cljs.core.first(seq__11940__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11947,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11947,(1),null);
var temp__5455__auto___11978 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11978)){
var effect_fn_11979 = temp__5455__auto___11978;
(effect_fn_11979.cljs$core$IFn$_invoke$arity$1 ? effect_fn_11979.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_11979.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__11980 = cljs.core.next(seq__11940__$1);
var G__11981 = null;
var G__11982 = (0);
var G__11983 = (0);
seq__11940 = G__11980;
chunk__11941 = G__11981;
count__11942 = G__11982;
i__11943 = G__11983;
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
var seq__11984 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__11985 = null;
var count__11986 = (0);
var i__11987 = (0);
while(true){
if((i__11987 < count__11986)){
var map__11988 = chunk__11985.cljs$core$IIndexed$_nth$arity$2(null,i__11987);
var map__11988__$1 = ((((!((map__11988 == null)))?(((((map__11988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11988):map__11988);
var effect = map__11988__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11988__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11988__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11984,chunk__11985,count__11986,i__11987,map__11988,map__11988__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11984,chunk__11985,count__11986,i__11987,map__11988,map__11988__$1,effect,ms,dispatch))
,ms);
}


var G__11992 = seq__11984;
var G__11993 = chunk__11985;
var G__11994 = count__11986;
var G__11995 = (i__11987 + (1));
seq__11984 = G__11992;
chunk__11985 = G__11993;
count__11986 = G__11994;
i__11987 = G__11995;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11984);
if(temp__5457__auto__){
var seq__11984__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11984__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11984__$1);
var G__11996 = cljs.core.chunk_rest(seq__11984__$1);
var G__11997 = c__4351__auto__;
var G__11998 = cljs.core.count(c__4351__auto__);
var G__11999 = (0);
seq__11984 = G__11996;
chunk__11985 = G__11997;
count__11986 = G__11998;
i__11987 = G__11999;
continue;
} else {
var map__11990 = cljs.core.first(seq__11984__$1);
var map__11990__$1 = ((((!((map__11990 == null)))?(((((map__11990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11990):map__11990);
var effect = map__11990__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11990__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11990__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__11984,chunk__11985,count__11986,i__11987,map__11990,map__11990__$1,effect,ms,dispatch,seq__11984__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__11984,chunk__11985,count__11986,i__11987,map__11990,map__11990__$1,effect,ms,dispatch,seq__11984__$1,temp__5457__auto__))
,ms);
}


var G__12000 = cljs.core.next(seq__11984__$1);
var G__12001 = null;
var G__12002 = (0);
var G__12003 = (0);
seq__11984 = G__12000;
chunk__11985 = G__12001;
count__11986 = G__12002;
i__11987 = G__12003;
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
var seq__12004 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12005 = null;
var count__12006 = (0);
var i__12007 = (0);
while(true){
if((i__12007 < count__12006)){
var event = chunk__12005.cljs$core$IIndexed$_nth$arity$2(null,i__12007);
re_frame.router.dispatch(event);


var G__12008 = seq__12004;
var G__12009 = chunk__12005;
var G__12010 = count__12006;
var G__12011 = (i__12007 + (1));
seq__12004 = G__12008;
chunk__12005 = G__12009;
count__12006 = G__12010;
i__12007 = G__12011;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12004);
if(temp__5457__auto__){
var seq__12004__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12004__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12004__$1);
var G__12012 = cljs.core.chunk_rest(seq__12004__$1);
var G__12013 = c__4351__auto__;
var G__12014 = cljs.core.count(c__4351__auto__);
var G__12015 = (0);
seq__12004 = G__12012;
chunk__12005 = G__12013;
count__12006 = G__12014;
i__12007 = G__12015;
continue;
} else {
var event = cljs.core.first(seq__12004__$1);
re_frame.router.dispatch(event);


var G__12016 = cljs.core.next(seq__12004__$1);
var G__12017 = null;
var G__12018 = (0);
var G__12019 = (0);
seq__12004 = G__12016;
chunk__12005 = G__12017;
count__12006 = G__12018;
i__12007 = G__12019;
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
var seq__12020 = cljs.core.seq(value);
var chunk__12021 = null;
var count__12022 = (0);
var i__12023 = (0);
while(true){
if((i__12023 < count__12022)){
var event = chunk__12021.cljs$core$IIndexed$_nth$arity$2(null,i__12023);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12024 = seq__12020;
var G__12025 = chunk__12021;
var G__12026 = count__12022;
var G__12027 = (i__12023 + (1));
seq__12020 = G__12024;
chunk__12021 = G__12025;
count__12022 = G__12026;
i__12023 = G__12027;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12020);
if(temp__5457__auto__){
var seq__12020__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12020__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12020__$1);
var G__12028 = cljs.core.chunk_rest(seq__12020__$1);
var G__12029 = c__4351__auto__;
var G__12030 = cljs.core.count(c__4351__auto__);
var G__12031 = (0);
seq__12020 = G__12028;
chunk__12021 = G__12029;
count__12022 = G__12030;
i__12023 = G__12031;
continue;
} else {
var event = cljs.core.first(seq__12020__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12032 = cljs.core.next(seq__12020__$1);
var G__12033 = null;
var G__12034 = (0);
var G__12035 = (0);
seq__12020 = G__12032;
chunk__12021 = G__12033;
count__12022 = G__12034;
i__12023 = G__12035;
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
