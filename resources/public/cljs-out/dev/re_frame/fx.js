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
var _STAR_current_trace_STAR_12205 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__12206 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12207 = null;
var count__12208 = (0);
var i__12209 = (0);
while(true){
if((i__12209 < count__12208)){
var vec__12210 = chunk__12207.cljs$core$IIndexed$_nth$arity$2(null,i__12209);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12210,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12210,(1),null);
var temp__5455__auto___12226 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12226)){
var effect_fn_12227 = temp__5455__auto___12226;
(effect_fn_12227.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12227.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12227.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12228 = seq__12206;
var G__12229 = chunk__12207;
var G__12230 = count__12208;
var G__12231 = (i__12209 + (1));
seq__12206 = G__12228;
chunk__12207 = G__12229;
count__12208 = G__12230;
i__12209 = G__12231;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12206);
if(temp__5457__auto__){
var seq__12206__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12206__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12206__$1);
var G__12232 = cljs.core.chunk_rest(seq__12206__$1);
var G__12233 = c__4351__auto__;
var G__12234 = cljs.core.count(c__4351__auto__);
var G__12235 = (0);
seq__12206 = G__12232;
chunk__12207 = G__12233;
count__12208 = G__12234;
i__12209 = G__12235;
continue;
} else {
var vec__12213 = cljs.core.first(seq__12206__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12213,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12213,(1),null);
var temp__5455__auto___12236 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12236)){
var effect_fn_12237 = temp__5455__auto___12236;
(effect_fn_12237.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12237.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12237.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12238 = cljs.core.next(seq__12206__$1);
var G__12239 = null;
var G__12240 = (0);
var G__12241 = (0);
seq__12206 = G__12238;
chunk__12207 = G__12239;
count__12208 = G__12240;
i__12209 = G__12241;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11770__auto___12242 = re_frame.interop.now();
var duration__11771__auto___12243 = (end__11770__auto___12242 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11771__auto___12243,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11770__auto___12242);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12205;
}} else {
var seq__12216 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__12217 = null;
var count__12218 = (0);
var i__12219 = (0);
while(true){
if((i__12219 < count__12218)){
var vec__12220 = chunk__12217.cljs$core$IIndexed$_nth$arity$2(null,i__12219);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12220,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12220,(1),null);
var temp__5455__auto___12244 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12244)){
var effect_fn_12245 = temp__5455__auto___12244;
(effect_fn_12245.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12245.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12245.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12246 = seq__12216;
var G__12247 = chunk__12217;
var G__12248 = count__12218;
var G__12249 = (i__12219 + (1));
seq__12216 = G__12246;
chunk__12217 = G__12247;
count__12218 = G__12248;
i__12219 = G__12249;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12216);
if(temp__5457__auto__){
var seq__12216__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12216__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12216__$1);
var G__12250 = cljs.core.chunk_rest(seq__12216__$1);
var G__12251 = c__4351__auto__;
var G__12252 = cljs.core.count(c__4351__auto__);
var G__12253 = (0);
seq__12216 = G__12250;
chunk__12217 = G__12251;
count__12218 = G__12252;
i__12219 = G__12253;
continue;
} else {
var vec__12223 = cljs.core.first(seq__12216__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12223,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12223,(1),null);
var temp__5455__auto___12254 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12254)){
var effect_fn_12255 = temp__5455__auto___12254;
(effect_fn_12255.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12255.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12255.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12256 = cljs.core.next(seq__12216__$1);
var G__12257 = null;
var G__12258 = (0);
var G__12259 = (0);
seq__12216 = G__12256;
chunk__12217 = G__12257;
count__12218 = G__12258;
i__12219 = G__12259;
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
var seq__12260 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12261 = null;
var count__12262 = (0);
var i__12263 = (0);
while(true){
if((i__12263 < count__12262)){
var map__12264 = chunk__12261.cljs$core$IIndexed$_nth$arity$2(null,i__12263);
var map__12264__$1 = ((((!((map__12264 == null)))?(((((map__12264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12264):map__12264);
var effect = map__12264__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12264__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12264__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12260,chunk__12261,count__12262,i__12263,map__12264,map__12264__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12260,chunk__12261,count__12262,i__12263,map__12264,map__12264__$1,effect,ms,dispatch))
,ms);
}


var G__12268 = seq__12260;
var G__12269 = chunk__12261;
var G__12270 = count__12262;
var G__12271 = (i__12263 + (1));
seq__12260 = G__12268;
chunk__12261 = G__12269;
count__12262 = G__12270;
i__12263 = G__12271;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12260);
if(temp__5457__auto__){
var seq__12260__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12260__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12260__$1);
var G__12272 = cljs.core.chunk_rest(seq__12260__$1);
var G__12273 = c__4351__auto__;
var G__12274 = cljs.core.count(c__4351__auto__);
var G__12275 = (0);
seq__12260 = G__12272;
chunk__12261 = G__12273;
count__12262 = G__12274;
i__12263 = G__12275;
continue;
} else {
var map__12266 = cljs.core.first(seq__12260__$1);
var map__12266__$1 = ((((!((map__12266 == null)))?(((((map__12266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12266):map__12266);
var effect = map__12266__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12266__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12266__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12260,chunk__12261,count__12262,i__12263,map__12266,map__12266__$1,effect,ms,dispatch,seq__12260__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12260,chunk__12261,count__12262,i__12263,map__12266,map__12266__$1,effect,ms,dispatch,seq__12260__$1,temp__5457__auto__))
,ms);
}


var G__12276 = cljs.core.next(seq__12260__$1);
var G__12277 = null;
var G__12278 = (0);
var G__12279 = (0);
seq__12260 = G__12276;
chunk__12261 = G__12277;
count__12262 = G__12278;
i__12263 = G__12279;
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
var seq__12280 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12281 = null;
var count__12282 = (0);
var i__12283 = (0);
while(true){
if((i__12283 < count__12282)){
var event = chunk__12281.cljs$core$IIndexed$_nth$arity$2(null,i__12283);
re_frame.router.dispatch(event);


var G__12284 = seq__12280;
var G__12285 = chunk__12281;
var G__12286 = count__12282;
var G__12287 = (i__12283 + (1));
seq__12280 = G__12284;
chunk__12281 = G__12285;
count__12282 = G__12286;
i__12283 = G__12287;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12280);
if(temp__5457__auto__){
var seq__12280__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12280__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12280__$1);
var G__12288 = cljs.core.chunk_rest(seq__12280__$1);
var G__12289 = c__4351__auto__;
var G__12290 = cljs.core.count(c__4351__auto__);
var G__12291 = (0);
seq__12280 = G__12288;
chunk__12281 = G__12289;
count__12282 = G__12290;
i__12283 = G__12291;
continue;
} else {
var event = cljs.core.first(seq__12280__$1);
re_frame.router.dispatch(event);


var G__12292 = cljs.core.next(seq__12280__$1);
var G__12293 = null;
var G__12294 = (0);
var G__12295 = (0);
seq__12280 = G__12292;
chunk__12281 = G__12293;
count__12282 = G__12294;
i__12283 = G__12295;
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
var seq__12296 = cljs.core.seq(value);
var chunk__12297 = null;
var count__12298 = (0);
var i__12299 = (0);
while(true){
if((i__12299 < count__12298)){
var event = chunk__12297.cljs$core$IIndexed$_nth$arity$2(null,i__12299);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12300 = seq__12296;
var G__12301 = chunk__12297;
var G__12302 = count__12298;
var G__12303 = (i__12299 + (1));
seq__12296 = G__12300;
chunk__12297 = G__12301;
count__12298 = G__12302;
i__12299 = G__12303;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12296);
if(temp__5457__auto__){
var seq__12296__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12296__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12296__$1);
var G__12304 = cljs.core.chunk_rest(seq__12296__$1);
var G__12305 = c__4351__auto__;
var G__12306 = cljs.core.count(c__4351__auto__);
var G__12307 = (0);
seq__12296 = G__12304;
chunk__12297 = G__12305;
count__12298 = G__12306;
i__12299 = G__12307;
continue;
} else {
var event = cljs.core.first(seq__12296__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12308 = cljs.core.next(seq__12296__$1);
var G__12309 = null;
var G__12310 = (0);
var G__12311 = (0);
seq__12296 = G__12308;
chunk__12297 = G__12309;
count__12298 = G__12310;
i__12299 = G__12311;
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
