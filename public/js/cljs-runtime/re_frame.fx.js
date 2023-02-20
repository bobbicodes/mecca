goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
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
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__55303 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__55304 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__55304);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___55404 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___55404)){
var new_db_55405 = temp__5753__auto___55404;
var fexpr__55305_55406 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__55305_55406.cljs$core$IFn$_invoke$arity$1 ? fexpr__55305_55406.cljs$core$IFn$_invoke$arity$1(new_db_55405) : fexpr__55305_55406.call(null,new_db_55405));
} else {
}

var seq__55306 = cljs.core.seq(effects_without_db);
var chunk__55307 = null;
var count__55308 = (0);
var i__55309 = (0);
while(true){
if((i__55309 < count__55308)){
var vec__55318 = chunk__55307.cljs$core$IIndexed$_nth$arity$2(null,i__55309);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55318,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55318,(1),null);
var temp__5751__auto___55410 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55410)){
var effect_fn_55411 = temp__5751__auto___55410;
(effect_fn_55411.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55411.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55411.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55412 = seq__55306;
var G__55413 = chunk__55307;
var G__55414 = count__55308;
var G__55415 = (i__55309 + (1));
seq__55306 = G__55412;
chunk__55307 = G__55413;
count__55308 = G__55414;
i__55309 = G__55415;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55306);
if(temp__5753__auto__){
var seq__55306__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55306__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55306__$1);
var G__55418 = cljs.core.chunk_rest(seq__55306__$1);
var G__55419 = c__4649__auto__;
var G__55420 = cljs.core.count(c__4649__auto__);
var G__55421 = (0);
seq__55306 = G__55418;
chunk__55307 = G__55419;
count__55308 = G__55420;
i__55309 = G__55421;
continue;
} else {
var vec__55321 = cljs.core.first(seq__55306__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55321,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55321,(1),null);
var temp__5751__auto___55422 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55422)){
var effect_fn_55423 = temp__5751__auto___55422;
(effect_fn_55423.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55423.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55423.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55424 = cljs.core.next(seq__55306__$1);
var G__55425 = null;
var G__55426 = (0);
var G__55427 = (0);
seq__55306 = G__55424;
chunk__55307 = G__55425;
count__55308 = G__55426;
i__55309 = G__55427;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__54976__auto___55430 = re_frame.interop.now();
var duration__54977__auto___55431 = (end__54976__auto___55430 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__54977__auto___55431,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__54976__auto___55430);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__55303);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___55433 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___55433)){
var new_db_55434 = temp__5753__auto___55433;
var fexpr__55324_55435 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__55324_55435.cljs$core$IFn$_invoke$arity$1 ? fexpr__55324_55435.cljs$core$IFn$_invoke$arity$1(new_db_55434) : fexpr__55324_55435.call(null,new_db_55434));
} else {
}

var seq__55325 = cljs.core.seq(effects_without_db);
var chunk__55326 = null;
var count__55327 = (0);
var i__55328 = (0);
while(true){
if((i__55328 < count__55327)){
var vec__55338 = chunk__55326.cljs$core$IIndexed$_nth$arity$2(null,i__55328);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55338,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55338,(1),null);
var temp__5751__auto___55436 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55436)){
var effect_fn_55437 = temp__5751__auto___55436;
(effect_fn_55437.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55437.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55437.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55438 = seq__55325;
var G__55439 = chunk__55326;
var G__55440 = count__55327;
var G__55441 = (i__55328 + (1));
seq__55325 = G__55438;
chunk__55326 = G__55439;
count__55327 = G__55440;
i__55328 = G__55441;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55325);
if(temp__5753__auto__){
var seq__55325__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55325__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55325__$1);
var G__55442 = cljs.core.chunk_rest(seq__55325__$1);
var G__55443 = c__4649__auto__;
var G__55444 = cljs.core.count(c__4649__auto__);
var G__55445 = (0);
seq__55325 = G__55442;
chunk__55326 = G__55443;
count__55327 = G__55444;
i__55328 = G__55445;
continue;
} else {
var vec__55341 = cljs.core.first(seq__55325__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55341,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55341,(1),null);
var temp__5751__auto___55446 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55446)){
var effect_fn_55447 = temp__5751__auto___55446;
(effect_fn_55447.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55447.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55447.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55448 = cljs.core.next(seq__55325__$1);
var G__55449 = null;
var G__55450 = (0);
var G__55451 = (0);
seq__55325 = G__55448;
chunk__55326 = G__55449;
count__55327 = G__55450;
i__55328 = G__55451;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__55349){
var map__55350 = p__55349;
var map__55350__$1 = cljs.core.__destructure_map(map__55350);
var effect = map__55350__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55350__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55350__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__55363 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__55364 = null;
var count__55365 = (0);
var i__55366 = (0);
while(true){
if((i__55366 < count__55365)){
var effect = chunk__55364.cljs$core$IIndexed$_nth$arity$2(null,i__55366);
re_frame.fx.dispatch_later(effect);


var G__55452 = seq__55363;
var G__55453 = chunk__55364;
var G__55454 = count__55365;
var G__55455 = (i__55366 + (1));
seq__55363 = G__55452;
chunk__55364 = G__55453;
count__55365 = G__55454;
i__55366 = G__55455;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55363);
if(temp__5753__auto__){
var seq__55363__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55363__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55363__$1);
var G__55456 = cljs.core.chunk_rest(seq__55363__$1);
var G__55457 = c__4649__auto__;
var G__55458 = cljs.core.count(c__4649__auto__);
var G__55459 = (0);
seq__55363 = G__55456;
chunk__55364 = G__55457;
count__55365 = G__55458;
i__55366 = G__55459;
continue;
} else {
var effect = cljs.core.first(seq__55363__$1);
re_frame.fx.dispatch_later(effect);


var G__55460 = cljs.core.next(seq__55363__$1);
var G__55461 = null;
var G__55462 = (0);
var G__55463 = (0);
seq__55363 = G__55460;
chunk__55364 = G__55461;
count__55365 = G__55462;
i__55366 = G__55463;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__55367 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__55368 = null;
var count__55369 = (0);
var i__55370 = (0);
while(true){
if((i__55370 < count__55369)){
var vec__55377 = chunk__55368.cljs$core$IIndexed$_nth$arity$2(null,i__55370);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55377,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55377,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___55464 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55464)){
var effect_fn_55465 = temp__5751__auto___55464;
(effect_fn_55465.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55465.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55465.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__55466 = seq__55367;
var G__55467 = chunk__55368;
var G__55468 = count__55369;
var G__55469 = (i__55370 + (1));
seq__55367 = G__55466;
chunk__55368 = G__55467;
count__55369 = G__55468;
i__55370 = G__55469;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55367);
if(temp__5753__auto__){
var seq__55367__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55367__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55367__$1);
var G__55470 = cljs.core.chunk_rest(seq__55367__$1);
var G__55471 = c__4649__auto__;
var G__55472 = cljs.core.count(c__4649__auto__);
var G__55473 = (0);
seq__55367 = G__55470;
chunk__55368 = G__55471;
count__55369 = G__55472;
i__55370 = G__55473;
continue;
} else {
var vec__55382 = cljs.core.first(seq__55367__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55382,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55382,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___55474 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55474)){
var effect_fn_55475 = temp__5751__auto___55474;
(effect_fn_55475.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55475.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55475.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__55476 = cljs.core.next(seq__55367__$1);
var G__55477 = null;
var G__55478 = (0);
var G__55479 = (0);
seq__55367 = G__55476;
chunk__55368 = G__55477;
count__55369 = G__55478;
i__55370 = G__55479;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__55394 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__55395 = null;
var count__55396 = (0);
var i__55397 = (0);
while(true){
if((i__55397 < count__55396)){
var event = chunk__55395.cljs$core$IIndexed$_nth$arity$2(null,i__55397);
re_frame.router.dispatch(event);


var G__55480 = seq__55394;
var G__55481 = chunk__55395;
var G__55482 = count__55396;
var G__55483 = (i__55397 + (1));
seq__55394 = G__55480;
chunk__55395 = G__55481;
count__55396 = G__55482;
i__55397 = G__55483;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55394);
if(temp__5753__auto__){
var seq__55394__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55394__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55394__$1);
var G__55484 = cljs.core.chunk_rest(seq__55394__$1);
var G__55485 = c__4649__auto__;
var G__55486 = cljs.core.count(c__4649__auto__);
var G__55487 = (0);
seq__55394 = G__55484;
chunk__55395 = G__55485;
count__55396 = G__55486;
i__55397 = G__55487;
continue;
} else {
var event = cljs.core.first(seq__55394__$1);
re_frame.router.dispatch(event);


var G__55488 = cljs.core.next(seq__55394__$1);
var G__55489 = null;
var G__55490 = (0);
var G__55491 = (0);
seq__55394 = G__55488;
chunk__55395 = G__55489;
count__55396 = G__55490;
i__55397 = G__55491;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__55399 = cljs.core.seq(value);
var chunk__55400 = null;
var count__55401 = (0);
var i__55402 = (0);
while(true){
if((i__55402 < count__55401)){
var event = chunk__55400.cljs$core$IIndexed$_nth$arity$2(null,i__55402);
clear_event(event);


var G__55492 = seq__55399;
var G__55493 = chunk__55400;
var G__55494 = count__55401;
var G__55495 = (i__55402 + (1));
seq__55399 = G__55492;
chunk__55400 = G__55493;
count__55401 = G__55494;
i__55402 = G__55495;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55399);
if(temp__5753__auto__){
var seq__55399__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55399__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55399__$1);
var G__55496 = cljs.core.chunk_rest(seq__55399__$1);
var G__55497 = c__4649__auto__;
var G__55498 = cljs.core.count(c__4649__auto__);
var G__55499 = (0);
seq__55399 = G__55496;
chunk__55400 = G__55497;
count__55401 = G__55498;
i__55402 = G__55499;
continue;
} else {
var event = cljs.core.first(seq__55399__$1);
clear_event(event);


var G__55500 = cljs.core.next(seq__55399__$1);
var G__55501 = null;
var G__55502 = (0);
var G__55503 = (0);
seq__55399 = G__55500;
chunk__55400 = G__55501;
count__55401 = G__55502;
i__55402 = G__55503;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
