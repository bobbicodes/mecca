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
var _STAR_current_trace_STAR_15171 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__15172 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__15173 = null;
var count__15174 = (0);
var i__15175 = (0);
while(true){
if((i__15175 < count__15174)){
var vec__15176 = chunk__15173.cljs$core$IIndexed$_nth$arity$2(null,i__15175);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15176,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15176,(1),null);
var temp__5455__auto___15192 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___15192)){
var effect_fn_15193 = temp__5455__auto___15192;
(effect_fn_15193.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15193.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15193.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15194 = seq__15172;
var G__15195 = chunk__15173;
var G__15196 = count__15174;
var G__15197 = (i__15175 + (1));
seq__15172 = G__15194;
chunk__15173 = G__15195;
count__15174 = G__15196;
i__15175 = G__15197;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__15172);
if(temp__5457__auto__){
var seq__15172__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15172__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__15172__$1);
var G__15198 = cljs.core.chunk_rest(seq__15172__$1);
var G__15199 = c__4351__auto__;
var G__15200 = cljs.core.count(c__4351__auto__);
var G__15201 = (0);
seq__15172 = G__15198;
chunk__15173 = G__15199;
count__15174 = G__15200;
i__15175 = G__15201;
continue;
} else {
var vec__15179 = cljs.core.first(seq__15172__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15179,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15179,(1),null);
var temp__5455__auto___15202 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___15202)){
var effect_fn_15203 = temp__5455__auto___15202;
(effect_fn_15203.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15203.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15203.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15204 = cljs.core.next(seq__15172__$1);
var G__15205 = null;
var G__15206 = (0);
var G__15207 = (0);
seq__15172 = G__15204;
chunk__15173 = G__15205;
count__15174 = G__15206;
i__15175 = G__15207;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14740__auto___15208 = re_frame.interop.now();
var duration__14741__auto___15209 = (end__14740__auto___15208 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14741__auto___15209,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14740__auto___15208);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_15171;
}} else {
var seq__15182 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__15183 = null;
var count__15184 = (0);
var i__15185 = (0);
while(true){
if((i__15185 < count__15184)){
var vec__15186 = chunk__15183.cljs$core$IIndexed$_nth$arity$2(null,i__15185);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15186,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15186,(1),null);
var temp__5455__auto___15210 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___15210)){
var effect_fn_15211 = temp__5455__auto___15210;
(effect_fn_15211.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15211.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15211.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15212 = seq__15182;
var G__15213 = chunk__15183;
var G__15214 = count__15184;
var G__15215 = (i__15185 + (1));
seq__15182 = G__15212;
chunk__15183 = G__15213;
count__15184 = G__15214;
i__15185 = G__15215;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__15182);
if(temp__5457__auto__){
var seq__15182__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15182__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__15182__$1);
var G__15216 = cljs.core.chunk_rest(seq__15182__$1);
var G__15217 = c__4351__auto__;
var G__15218 = cljs.core.count(c__4351__auto__);
var G__15219 = (0);
seq__15182 = G__15216;
chunk__15183 = G__15217;
count__15184 = G__15218;
i__15185 = G__15219;
continue;
} else {
var vec__15189 = cljs.core.first(seq__15182__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15189,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15189,(1),null);
var temp__5455__auto___15220 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___15220)){
var effect_fn_15221 = temp__5455__auto___15220;
(effect_fn_15221.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15221.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15221.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__15222 = cljs.core.next(seq__15182__$1);
var G__15223 = null;
var G__15224 = (0);
var G__15225 = (0);
seq__15182 = G__15222;
chunk__15183 = G__15223;
count__15184 = G__15224;
i__15185 = G__15225;
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
var seq__15226 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15227 = null;
var count__15228 = (0);
var i__15229 = (0);
while(true){
if((i__15229 < count__15228)){
var map__15230 = chunk__15227.cljs$core$IIndexed$_nth$arity$2(null,i__15229);
var map__15230__$1 = ((((!((map__15230 == null)))?(((((map__15230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15230):map__15230);
var effect = map__15230__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15230__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15230__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__15226,chunk__15227,count__15228,i__15229,map__15230,map__15230__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__15226,chunk__15227,count__15228,i__15229,map__15230,map__15230__$1,effect,ms,dispatch))
,ms);
}


var G__15234 = seq__15226;
var G__15235 = chunk__15227;
var G__15236 = count__15228;
var G__15237 = (i__15229 + (1));
seq__15226 = G__15234;
chunk__15227 = G__15235;
count__15228 = G__15236;
i__15229 = G__15237;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__15226);
if(temp__5457__auto__){
var seq__15226__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15226__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__15226__$1);
var G__15238 = cljs.core.chunk_rest(seq__15226__$1);
var G__15239 = c__4351__auto__;
var G__15240 = cljs.core.count(c__4351__auto__);
var G__15241 = (0);
seq__15226 = G__15238;
chunk__15227 = G__15239;
count__15228 = G__15240;
i__15229 = G__15241;
continue;
} else {
var map__15232 = cljs.core.first(seq__15226__$1);
var map__15232__$1 = ((((!((map__15232 == null)))?(((((map__15232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15232):map__15232);
var effect = map__15232__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15232__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15232__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__15226,chunk__15227,count__15228,i__15229,map__15232,map__15232__$1,effect,ms,dispatch,seq__15226__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__15226,chunk__15227,count__15228,i__15229,map__15232,map__15232__$1,effect,ms,dispatch,seq__15226__$1,temp__5457__auto__))
,ms);
}


var G__15242 = cljs.core.next(seq__15226__$1);
var G__15243 = null;
var G__15244 = (0);
var G__15245 = (0);
seq__15226 = G__15242;
chunk__15227 = G__15243;
count__15228 = G__15244;
i__15229 = G__15245;
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
var seq__15246 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__15247 = null;
var count__15248 = (0);
var i__15249 = (0);
while(true){
if((i__15249 < count__15248)){
var event = chunk__15247.cljs$core$IIndexed$_nth$arity$2(null,i__15249);
re_frame.router.dispatch(event);


var G__15250 = seq__15246;
var G__15251 = chunk__15247;
var G__15252 = count__15248;
var G__15253 = (i__15249 + (1));
seq__15246 = G__15250;
chunk__15247 = G__15251;
count__15248 = G__15252;
i__15249 = G__15253;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__15246);
if(temp__5457__auto__){
var seq__15246__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15246__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__15246__$1);
var G__15254 = cljs.core.chunk_rest(seq__15246__$1);
var G__15255 = c__4351__auto__;
var G__15256 = cljs.core.count(c__4351__auto__);
var G__15257 = (0);
seq__15246 = G__15254;
chunk__15247 = G__15255;
count__15248 = G__15256;
i__15249 = G__15257;
continue;
} else {
var event = cljs.core.first(seq__15246__$1);
re_frame.router.dispatch(event);


var G__15258 = cljs.core.next(seq__15246__$1);
var G__15259 = null;
var G__15260 = (0);
var G__15261 = (0);
seq__15246 = G__15258;
chunk__15247 = G__15259;
count__15248 = G__15260;
i__15249 = G__15261;
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
var seq__15262 = cljs.core.seq(value);
var chunk__15263 = null;
var count__15264 = (0);
var i__15265 = (0);
while(true){
if((i__15265 < count__15264)){
var event = chunk__15263.cljs$core$IIndexed$_nth$arity$2(null,i__15265);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__15266 = seq__15262;
var G__15267 = chunk__15263;
var G__15268 = count__15264;
var G__15269 = (i__15265 + (1));
seq__15262 = G__15266;
chunk__15263 = G__15267;
count__15264 = G__15268;
i__15265 = G__15269;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__15262);
if(temp__5457__auto__){
var seq__15262__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15262__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__15262__$1);
var G__15270 = cljs.core.chunk_rest(seq__15262__$1);
var G__15271 = c__4351__auto__;
var G__15272 = cljs.core.count(c__4351__auto__);
var G__15273 = (0);
seq__15262 = G__15270;
chunk__15263 = G__15271;
count__15264 = G__15272;
i__15265 = G__15273;
continue;
} else {
var event = cljs.core.first(seq__15262__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__15274 = cljs.core.next(seq__15262__$1);
var G__15275 = null;
var G__15276 = (0);
var G__15277 = (0);
seq__15262 = G__15274;
chunk__15263 = G__15275;
count__15264 = G__15276;
i__15265 = G__15277;
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
