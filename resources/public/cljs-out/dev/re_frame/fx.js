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
var _STAR_current_trace_STAR_12104 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__12105 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12106 = null;
var count__12107 = (0);
var i__12108 = (0);
while(true){
if((i__12108 < count__12107)){
var vec__12109 = chunk__12106.cljs$core$IIndexed$_nth$arity$2(null,i__12108);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12109,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12109,(1),null);
var temp__5455__auto___12125 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12125)){
var effect_fn_12126 = temp__5455__auto___12125;
(effect_fn_12126.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12126.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12126.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12127 = seq__12105;
var G__12128 = chunk__12106;
var G__12129 = count__12107;
var G__12130 = (i__12108 + (1));
seq__12105 = G__12127;
chunk__12106 = G__12128;
count__12107 = G__12129;
i__12108 = G__12130;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12105);
if(temp__5457__auto__){
var seq__12105__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12105__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12105__$1);
var G__12131 = cljs.core.chunk_rest(seq__12105__$1);
var G__12132 = c__4351__auto__;
var G__12133 = cljs.core.count(c__4351__auto__);
var G__12134 = (0);
seq__12105 = G__12131;
chunk__12106 = G__12132;
count__12107 = G__12133;
i__12108 = G__12134;
continue;
} else {
var vec__12112 = cljs.core.first(seq__12105__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12112,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12112,(1),null);
var temp__5455__auto___12135 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12135)){
var effect_fn_12136 = temp__5455__auto___12135;
(effect_fn_12136.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12136.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12136.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12137 = cljs.core.next(seq__12105__$1);
var G__12138 = null;
var G__12139 = (0);
var G__12140 = (0);
seq__12105 = G__12137;
chunk__12106 = G__12138;
count__12107 = G__12139;
i__12108 = G__12140;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11673__auto___12141 = re_frame.interop.now();
var duration__11674__auto___12142 = (end__11673__auto___12141 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11674__auto___12142,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11673__auto___12141);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12104;
}} else {
var seq__12115 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12116 = null;
var count__12117 = (0);
var i__12118 = (0);
while(true){
if((i__12118 < count__12117)){
var vec__12119 = chunk__12116.cljs$core$IIndexed$_nth$arity$2(null,i__12118);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12119,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12119,(1),null);
var temp__5455__auto___12143 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12143)){
var effect_fn_12144 = temp__5455__auto___12143;
(effect_fn_12144.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12144.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12144.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12145 = seq__12115;
var G__12146 = chunk__12116;
var G__12147 = count__12117;
var G__12148 = (i__12118 + (1));
seq__12115 = G__12145;
chunk__12116 = G__12146;
count__12117 = G__12147;
i__12118 = G__12148;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12115);
if(temp__5457__auto__){
var seq__12115__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12115__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12115__$1);
var G__12149 = cljs.core.chunk_rest(seq__12115__$1);
var G__12150 = c__4351__auto__;
var G__12151 = cljs.core.count(c__4351__auto__);
var G__12152 = (0);
seq__12115 = G__12149;
chunk__12116 = G__12150;
count__12117 = G__12151;
i__12118 = G__12152;
continue;
} else {
var vec__12122 = cljs.core.first(seq__12115__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12122,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12122,(1),null);
var temp__5455__auto___12153 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12153)){
var effect_fn_12154 = temp__5455__auto___12153;
(effect_fn_12154.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12154.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12154.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12155 = cljs.core.next(seq__12115__$1);
var G__12156 = null;
var G__12157 = (0);
var G__12158 = (0);
seq__12115 = G__12155;
chunk__12116 = G__12156;
count__12117 = G__12157;
i__12118 = G__12158;
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
var seq__12159 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12160 = null;
var count__12161 = (0);
var i__12162 = (0);
while(true){
if((i__12162 < count__12161)){
var map__12163 = chunk__12160.cljs$core$IIndexed$_nth$arity$2(null,i__12162);
var map__12163__$1 = ((((!((map__12163 == null)))?(((((map__12163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12163):map__12163);
var effect = map__12163__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12163__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12163__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12159,chunk__12160,count__12161,i__12162,map__12163,map__12163__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12159,chunk__12160,count__12161,i__12162,map__12163,map__12163__$1,effect,ms,dispatch))
,ms);
}


var G__12167 = seq__12159;
var G__12168 = chunk__12160;
var G__12169 = count__12161;
var G__12170 = (i__12162 + (1));
seq__12159 = G__12167;
chunk__12160 = G__12168;
count__12161 = G__12169;
i__12162 = G__12170;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12159);
if(temp__5457__auto__){
var seq__12159__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12159__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12159__$1);
var G__12171 = cljs.core.chunk_rest(seq__12159__$1);
var G__12172 = c__4351__auto__;
var G__12173 = cljs.core.count(c__4351__auto__);
var G__12174 = (0);
seq__12159 = G__12171;
chunk__12160 = G__12172;
count__12161 = G__12173;
i__12162 = G__12174;
continue;
} else {
var map__12165 = cljs.core.first(seq__12159__$1);
var map__12165__$1 = ((((!((map__12165 == null)))?(((((map__12165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12165):map__12165);
var effect = map__12165__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12165__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12165__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12159,chunk__12160,count__12161,i__12162,map__12165,map__12165__$1,effect,ms,dispatch,seq__12159__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12159,chunk__12160,count__12161,i__12162,map__12165,map__12165__$1,effect,ms,dispatch,seq__12159__$1,temp__5457__auto__))
,ms);
}


var G__12175 = cljs.core.next(seq__12159__$1);
var G__12176 = null;
var G__12177 = (0);
var G__12178 = (0);
seq__12159 = G__12175;
chunk__12160 = G__12176;
count__12161 = G__12177;
i__12162 = G__12178;
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
var seq__12179 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12180 = null;
var count__12181 = (0);
var i__12182 = (0);
while(true){
if((i__12182 < count__12181)){
var event = chunk__12180.cljs$core$IIndexed$_nth$arity$2(null,i__12182);
re_frame.router.dispatch(event);


var G__12183 = seq__12179;
var G__12184 = chunk__12180;
var G__12185 = count__12181;
var G__12186 = (i__12182 + (1));
seq__12179 = G__12183;
chunk__12180 = G__12184;
count__12181 = G__12185;
i__12182 = G__12186;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12179);
if(temp__5457__auto__){
var seq__12179__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12179__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12179__$1);
var G__12187 = cljs.core.chunk_rest(seq__12179__$1);
var G__12188 = c__4351__auto__;
var G__12189 = cljs.core.count(c__4351__auto__);
var G__12190 = (0);
seq__12179 = G__12187;
chunk__12180 = G__12188;
count__12181 = G__12189;
i__12182 = G__12190;
continue;
} else {
var event = cljs.core.first(seq__12179__$1);
re_frame.router.dispatch(event);


var G__12191 = cljs.core.next(seq__12179__$1);
var G__12192 = null;
var G__12193 = (0);
var G__12194 = (0);
seq__12179 = G__12191;
chunk__12180 = G__12192;
count__12181 = G__12193;
i__12182 = G__12194;
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
var seq__12195 = cljs.core.seq(value);
var chunk__12196 = null;
var count__12197 = (0);
var i__12198 = (0);
while(true){
if((i__12198 < count__12197)){
var event = chunk__12196.cljs$core$IIndexed$_nth$arity$2(null,i__12198);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12199 = seq__12195;
var G__12200 = chunk__12196;
var G__12201 = count__12197;
var G__12202 = (i__12198 + (1));
seq__12195 = G__12199;
chunk__12196 = G__12200;
count__12197 = G__12201;
i__12198 = G__12202;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12195);
if(temp__5457__auto__){
var seq__12195__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12195__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12195__$1);
var G__12203 = cljs.core.chunk_rest(seq__12195__$1);
var G__12204 = c__4351__auto__;
var G__12205 = cljs.core.count(c__4351__auto__);
var G__12206 = (0);
seq__12195 = G__12203;
chunk__12196 = G__12204;
count__12197 = G__12205;
i__12198 = G__12206;
continue;
} else {
var event = cljs.core.first(seq__12195__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12207 = cljs.core.next(seq__12195__$1);
var G__12208 = null;
var G__12209 = (0);
var G__12210 = (0);
seq__12195 = G__12207;
chunk__12196 = G__12208;
count__12197 = G__12209;
i__12198 = G__12210;
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
