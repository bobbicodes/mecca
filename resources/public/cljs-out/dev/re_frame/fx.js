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
var _STAR_current_trace_STAR_12153 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__12154 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12155 = null;
var count__12156 = (0);
var i__12157 = (0);
while(true){
if((i__12157 < count__12156)){
var vec__12158 = chunk__12155.cljs$core$IIndexed$_nth$arity$2(null,i__12157);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12158,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12158,(1),null);
var temp__5455__auto___12174 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12174)){
var effect_fn_12175 = temp__5455__auto___12174;
(effect_fn_12175.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12175.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12175.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12176 = seq__12154;
var G__12177 = chunk__12155;
var G__12178 = count__12156;
var G__12179 = (i__12157 + (1));
seq__12154 = G__12176;
chunk__12155 = G__12177;
count__12156 = G__12178;
i__12157 = G__12179;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12154);
if(temp__5457__auto__){
var seq__12154__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12154__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12154__$1);
var G__12180 = cljs.core.chunk_rest(seq__12154__$1);
var G__12181 = c__4351__auto__;
var G__12182 = cljs.core.count(c__4351__auto__);
var G__12183 = (0);
seq__12154 = G__12180;
chunk__12155 = G__12181;
count__12156 = G__12182;
i__12157 = G__12183;
continue;
} else {
var vec__12161 = cljs.core.first(seq__12154__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12161,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12161,(1),null);
var temp__5455__auto___12184 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12184)){
var effect_fn_12185 = temp__5455__auto___12184;
(effect_fn_12185.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12185.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12185.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12186 = cljs.core.next(seq__12154__$1);
var G__12187 = null;
var G__12188 = (0);
var G__12189 = (0);
seq__12154 = G__12186;
chunk__12155 = G__12187;
count__12156 = G__12188;
i__12157 = G__12189;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11718__auto___12190 = re_frame.interop.now();
var duration__11719__auto___12191 = (end__11718__auto___12190 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11719__auto___12191,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11718__auto___12190);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12153;
}} else {
var seq__12164 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12165 = null;
var count__12166 = (0);
var i__12167 = (0);
while(true){
if((i__12167 < count__12166)){
var vec__12168 = chunk__12165.cljs$core$IIndexed$_nth$arity$2(null,i__12167);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12168,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12168,(1),null);
var temp__5455__auto___12192 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12192)){
var effect_fn_12193 = temp__5455__auto___12192;
(effect_fn_12193.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12193.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12193.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12194 = seq__12164;
var G__12195 = chunk__12165;
var G__12196 = count__12166;
var G__12197 = (i__12167 + (1));
seq__12164 = G__12194;
chunk__12165 = G__12195;
count__12166 = G__12196;
i__12167 = G__12197;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12164);
if(temp__5457__auto__){
var seq__12164__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12164__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12164__$1);
var G__12198 = cljs.core.chunk_rest(seq__12164__$1);
var G__12199 = c__4351__auto__;
var G__12200 = cljs.core.count(c__4351__auto__);
var G__12201 = (0);
seq__12164 = G__12198;
chunk__12165 = G__12199;
count__12166 = G__12200;
i__12167 = G__12201;
continue;
} else {
var vec__12171 = cljs.core.first(seq__12164__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12171,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12171,(1),null);
var temp__5455__auto___12202 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12202)){
var effect_fn_12203 = temp__5455__auto___12202;
(effect_fn_12203.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12203.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12203.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12204 = cljs.core.next(seq__12164__$1);
var G__12205 = null;
var G__12206 = (0);
var G__12207 = (0);
seq__12164 = G__12204;
chunk__12165 = G__12205;
count__12166 = G__12206;
i__12167 = G__12207;
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
var seq__12208 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12209 = null;
var count__12210 = (0);
var i__12211 = (0);
while(true){
if((i__12211 < count__12210)){
var map__12212 = chunk__12209.cljs$core$IIndexed$_nth$arity$2(null,i__12211);
var map__12212__$1 = ((((!((map__12212 == null)))?(((((map__12212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12212):map__12212);
var effect = map__12212__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12212__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12212__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12208,chunk__12209,count__12210,i__12211,map__12212,map__12212__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12208,chunk__12209,count__12210,i__12211,map__12212,map__12212__$1,effect,ms,dispatch))
,ms);
}


var G__12216 = seq__12208;
var G__12217 = chunk__12209;
var G__12218 = count__12210;
var G__12219 = (i__12211 + (1));
seq__12208 = G__12216;
chunk__12209 = G__12217;
count__12210 = G__12218;
i__12211 = G__12219;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12208);
if(temp__5457__auto__){
var seq__12208__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12208__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12208__$1);
var G__12220 = cljs.core.chunk_rest(seq__12208__$1);
var G__12221 = c__4351__auto__;
var G__12222 = cljs.core.count(c__4351__auto__);
var G__12223 = (0);
seq__12208 = G__12220;
chunk__12209 = G__12221;
count__12210 = G__12222;
i__12211 = G__12223;
continue;
} else {
var map__12214 = cljs.core.first(seq__12208__$1);
var map__12214__$1 = ((((!((map__12214 == null)))?(((((map__12214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12214):map__12214);
var effect = map__12214__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12214__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12214__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12208,chunk__12209,count__12210,i__12211,map__12214,map__12214__$1,effect,ms,dispatch,seq__12208__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12208,chunk__12209,count__12210,i__12211,map__12214,map__12214__$1,effect,ms,dispatch,seq__12208__$1,temp__5457__auto__))
,ms);
}


var G__12224 = cljs.core.next(seq__12208__$1);
var G__12225 = null;
var G__12226 = (0);
var G__12227 = (0);
seq__12208 = G__12224;
chunk__12209 = G__12225;
count__12210 = G__12226;
i__12211 = G__12227;
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
var seq__12228 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12229 = null;
var count__12230 = (0);
var i__12231 = (0);
while(true){
if((i__12231 < count__12230)){
var event = chunk__12229.cljs$core$IIndexed$_nth$arity$2(null,i__12231);
re_frame.router.dispatch(event);


var G__12232 = seq__12228;
var G__12233 = chunk__12229;
var G__12234 = count__12230;
var G__12235 = (i__12231 + (1));
seq__12228 = G__12232;
chunk__12229 = G__12233;
count__12230 = G__12234;
i__12231 = G__12235;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12228);
if(temp__5457__auto__){
var seq__12228__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12228__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12228__$1);
var G__12236 = cljs.core.chunk_rest(seq__12228__$1);
var G__12237 = c__4351__auto__;
var G__12238 = cljs.core.count(c__4351__auto__);
var G__12239 = (0);
seq__12228 = G__12236;
chunk__12229 = G__12237;
count__12230 = G__12238;
i__12231 = G__12239;
continue;
} else {
var event = cljs.core.first(seq__12228__$1);
re_frame.router.dispatch(event);


var G__12240 = cljs.core.next(seq__12228__$1);
var G__12241 = null;
var G__12242 = (0);
var G__12243 = (0);
seq__12228 = G__12240;
chunk__12229 = G__12241;
count__12230 = G__12242;
i__12231 = G__12243;
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
var seq__12244 = cljs.core.seq(value);
var chunk__12245 = null;
var count__12246 = (0);
var i__12247 = (0);
while(true){
if((i__12247 < count__12246)){
var event = chunk__12245.cljs$core$IIndexed$_nth$arity$2(null,i__12247);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12248 = seq__12244;
var G__12249 = chunk__12245;
var G__12250 = count__12246;
var G__12251 = (i__12247 + (1));
seq__12244 = G__12248;
chunk__12245 = G__12249;
count__12246 = G__12250;
i__12247 = G__12251;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12244);
if(temp__5457__auto__){
var seq__12244__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12244__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12244__$1);
var G__12252 = cljs.core.chunk_rest(seq__12244__$1);
var G__12253 = c__4351__auto__;
var G__12254 = cljs.core.count(c__4351__auto__);
var G__12255 = (0);
seq__12244 = G__12252;
chunk__12245 = G__12253;
count__12246 = G__12254;
i__12247 = G__12255;
continue;
} else {
var event = cljs.core.first(seq__12244__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12256 = cljs.core.next(seq__12244__$1);
var G__12257 = null;
var G__12258 = (0);
var G__12259 = (0);
seq__12244 = G__12256;
chunk__12245 = G__12257;
count__12246 = G__12258;
i__12247 = G__12259;
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
