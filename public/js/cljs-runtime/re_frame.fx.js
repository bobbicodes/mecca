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
var _STAR_current_trace_STAR__orig_val__55625 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__55626 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__55626);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___55707 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___55707)){
var new_db_55708 = temp__5753__auto___55707;
var fexpr__55627_55709 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__55627_55709.cljs$core$IFn$_invoke$arity$1 ? fexpr__55627_55709.cljs$core$IFn$_invoke$arity$1(new_db_55708) : fexpr__55627_55709.call(null,new_db_55708));
} else {
}

var seq__55628 = cljs.core.seq(effects_without_db);
var chunk__55629 = null;
var count__55630 = (0);
var i__55631 = (0);
while(true){
if((i__55631 < count__55630)){
var vec__55642 = chunk__55629.cljs$core$IIndexed$_nth$arity$2(null,i__55631);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55642,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55642,(1),null);
var temp__5751__auto___55710 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55710)){
var effect_fn_55711 = temp__5751__auto___55710;
(effect_fn_55711.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55711.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55711.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55712 = seq__55628;
var G__55713 = chunk__55629;
var G__55714 = count__55630;
var G__55715 = (i__55631 + (1));
seq__55628 = G__55712;
chunk__55629 = G__55713;
count__55630 = G__55714;
i__55631 = G__55715;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55628);
if(temp__5753__auto__){
var seq__55628__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55628__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55628__$1);
var G__55716 = cljs.core.chunk_rest(seq__55628__$1);
var G__55717 = c__4649__auto__;
var G__55718 = cljs.core.count(c__4649__auto__);
var G__55719 = (0);
seq__55628 = G__55716;
chunk__55629 = G__55717;
count__55630 = G__55718;
i__55631 = G__55719;
continue;
} else {
var vec__55657 = cljs.core.first(seq__55628__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55657,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55657,(1),null);
var temp__5751__auto___55720 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55720)){
var effect_fn_55721 = temp__5751__auto___55720;
(effect_fn_55721.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55721.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55721.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55722 = cljs.core.next(seq__55628__$1);
var G__55723 = null;
var G__55724 = (0);
var G__55725 = (0);
seq__55628 = G__55722;
chunk__55629 = G__55723;
count__55630 = G__55724;
i__55631 = G__55725;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__55280__auto___55726 = re_frame.interop.now();
var duration__55281__auto___55727 = (end__55280__auto___55726 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__55281__auto___55727,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__55280__auto___55726);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__55625);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___55728 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___55728)){
var new_db_55729 = temp__5753__auto___55728;
var fexpr__55660_55730 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__55660_55730.cljs$core$IFn$_invoke$arity$1 ? fexpr__55660_55730.cljs$core$IFn$_invoke$arity$1(new_db_55729) : fexpr__55660_55730.call(null,new_db_55729));
} else {
}

var seq__55661 = cljs.core.seq(effects_without_db);
var chunk__55662 = null;
var count__55663 = (0);
var i__55664 = (0);
while(true){
if((i__55664 < count__55663)){
var vec__55671 = chunk__55662.cljs$core$IIndexed$_nth$arity$2(null,i__55664);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55671,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55671,(1),null);
var temp__5751__auto___55731 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55731)){
var effect_fn_55732 = temp__5751__auto___55731;
(effect_fn_55732.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55732.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55732.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55733 = seq__55661;
var G__55734 = chunk__55662;
var G__55735 = count__55663;
var G__55736 = (i__55664 + (1));
seq__55661 = G__55733;
chunk__55662 = G__55734;
count__55663 = G__55735;
i__55664 = G__55736;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55661);
if(temp__5753__auto__){
var seq__55661__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55661__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55661__$1);
var G__55737 = cljs.core.chunk_rest(seq__55661__$1);
var G__55738 = c__4649__auto__;
var G__55739 = cljs.core.count(c__4649__auto__);
var G__55740 = (0);
seq__55661 = G__55737;
chunk__55662 = G__55738;
count__55663 = G__55739;
i__55664 = G__55740;
continue;
} else {
var vec__55674 = cljs.core.first(seq__55661__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55674,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55674,(1),null);
var temp__5751__auto___55741 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55741)){
var effect_fn_55742 = temp__5751__auto___55741;
(effect_fn_55742.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55742.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55742.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55743 = cljs.core.next(seq__55661__$1);
var G__55744 = null;
var G__55745 = (0);
var G__55746 = (0);
seq__55661 = G__55743;
chunk__55662 = G__55744;
count__55663 = G__55745;
i__55664 = G__55746;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__55677){
var map__55678 = p__55677;
var map__55678__$1 = cljs.core.__destructure_map(map__55678);
var effect = map__55678__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55678__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55678__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__55679 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__55680 = null;
var count__55681 = (0);
var i__55682 = (0);
while(true){
if((i__55682 < count__55681)){
var effect = chunk__55680.cljs$core$IIndexed$_nth$arity$2(null,i__55682);
re_frame.fx.dispatch_later(effect);


var G__55747 = seq__55679;
var G__55748 = chunk__55680;
var G__55749 = count__55681;
var G__55750 = (i__55682 + (1));
seq__55679 = G__55747;
chunk__55680 = G__55748;
count__55681 = G__55749;
i__55682 = G__55750;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55679);
if(temp__5753__auto__){
var seq__55679__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55679__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55679__$1);
var G__55751 = cljs.core.chunk_rest(seq__55679__$1);
var G__55752 = c__4649__auto__;
var G__55753 = cljs.core.count(c__4649__auto__);
var G__55754 = (0);
seq__55679 = G__55751;
chunk__55680 = G__55752;
count__55681 = G__55753;
i__55682 = G__55754;
continue;
} else {
var effect = cljs.core.first(seq__55679__$1);
re_frame.fx.dispatch_later(effect);


var G__55755 = cljs.core.next(seq__55679__$1);
var G__55756 = null;
var G__55757 = (0);
var G__55758 = (0);
seq__55679 = G__55755;
chunk__55680 = G__55756;
count__55681 = G__55757;
i__55682 = G__55758;
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
var seq__55683 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__55684 = null;
var count__55685 = (0);
var i__55686 = (0);
while(true){
if((i__55686 < count__55685)){
var vec__55693 = chunk__55684.cljs$core$IIndexed$_nth$arity$2(null,i__55686);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55693,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55693,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___55759 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55759)){
var effect_fn_55760 = temp__5751__auto___55759;
(effect_fn_55760.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55760.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55760.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__55761 = seq__55683;
var G__55762 = chunk__55684;
var G__55763 = count__55685;
var G__55764 = (i__55686 + (1));
seq__55683 = G__55761;
chunk__55684 = G__55762;
count__55685 = G__55763;
i__55686 = G__55764;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55683);
if(temp__5753__auto__){
var seq__55683__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55683__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55683__$1);
var G__55765 = cljs.core.chunk_rest(seq__55683__$1);
var G__55766 = c__4649__auto__;
var G__55767 = cljs.core.count(c__4649__auto__);
var G__55768 = (0);
seq__55683 = G__55765;
chunk__55684 = G__55766;
count__55685 = G__55767;
i__55686 = G__55768;
continue;
} else {
var vec__55696 = cljs.core.first(seq__55683__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55696,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55696,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___55769 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___55769)){
var effect_fn_55770 = temp__5751__auto___55769;
(effect_fn_55770.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55770.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55770.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__55771 = cljs.core.next(seq__55683__$1);
var G__55772 = null;
var G__55773 = (0);
var G__55774 = (0);
seq__55683 = G__55771;
chunk__55684 = G__55772;
count__55685 = G__55773;
i__55686 = G__55774;
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
var seq__55699 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__55700 = null;
var count__55701 = (0);
var i__55702 = (0);
while(true){
if((i__55702 < count__55701)){
var event = chunk__55700.cljs$core$IIndexed$_nth$arity$2(null,i__55702);
re_frame.router.dispatch(event);


var G__55775 = seq__55699;
var G__55776 = chunk__55700;
var G__55777 = count__55701;
var G__55778 = (i__55702 + (1));
seq__55699 = G__55775;
chunk__55700 = G__55776;
count__55701 = G__55777;
i__55702 = G__55778;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55699);
if(temp__5753__auto__){
var seq__55699__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55699__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55699__$1);
var G__55779 = cljs.core.chunk_rest(seq__55699__$1);
var G__55780 = c__4649__auto__;
var G__55781 = cljs.core.count(c__4649__auto__);
var G__55782 = (0);
seq__55699 = G__55779;
chunk__55700 = G__55780;
count__55701 = G__55781;
i__55702 = G__55782;
continue;
} else {
var event = cljs.core.first(seq__55699__$1);
re_frame.router.dispatch(event);


var G__55783 = cljs.core.next(seq__55699__$1);
var G__55784 = null;
var G__55785 = (0);
var G__55786 = (0);
seq__55699 = G__55783;
chunk__55700 = G__55784;
count__55701 = G__55785;
i__55702 = G__55786;
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
var seq__55703 = cljs.core.seq(value);
var chunk__55704 = null;
var count__55705 = (0);
var i__55706 = (0);
while(true){
if((i__55706 < count__55705)){
var event = chunk__55704.cljs$core$IIndexed$_nth$arity$2(null,i__55706);
clear_event(event);


var G__55787 = seq__55703;
var G__55788 = chunk__55704;
var G__55789 = count__55705;
var G__55790 = (i__55706 + (1));
seq__55703 = G__55787;
chunk__55704 = G__55788;
count__55705 = G__55789;
i__55706 = G__55790;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55703);
if(temp__5753__auto__){
var seq__55703__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55703__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__55703__$1);
var G__55791 = cljs.core.chunk_rest(seq__55703__$1);
var G__55792 = c__4649__auto__;
var G__55793 = cljs.core.count(c__4649__auto__);
var G__55794 = (0);
seq__55703 = G__55791;
chunk__55704 = G__55792;
count__55705 = G__55793;
i__55706 = G__55794;
continue;
} else {
var event = cljs.core.first(seq__55703__$1);
clear_event(event);


var G__55795 = cljs.core.next(seq__55703__$1);
var G__55796 = null;
var G__55797 = (0);
var G__55798 = (0);
seq__55703 = G__55795;
chunk__55704 = G__55796;
count__55705 = G__55797;
i__55706 = G__55798;
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
