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
var _STAR_current_trace_STAR__orig_val__69746 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__69747 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__69747);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___69832 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___69832)){
var new_db_69833 = temp__5753__auto___69832;
var fexpr__69749_69834 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__69749_69834.cljs$core$IFn$_invoke$arity$1 ? fexpr__69749_69834.cljs$core$IFn$_invoke$arity$1(new_db_69833) : fexpr__69749_69834.call(null,new_db_69833));
} else {
}

var seq__69750 = cljs.core.seq(effects_without_db);
var chunk__69751 = null;
var count__69752 = (0);
var i__69753 = (0);
while(true){
if((i__69753 < count__69752)){
var vec__69760 = chunk__69751.cljs$core$IIndexed$_nth$arity$2(null,i__69753);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69760,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69760,(1),null);
var temp__5751__auto___69835 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___69835)){
var effect_fn_69836 = temp__5751__auto___69835;
(effect_fn_69836.cljs$core$IFn$_invoke$arity$1 ? effect_fn_69836.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_69836.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__69837 = seq__69750;
var G__69838 = chunk__69751;
var G__69839 = count__69752;
var G__69840 = (i__69753 + (1));
seq__69750 = G__69837;
chunk__69751 = G__69838;
count__69752 = G__69839;
i__69753 = G__69840;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69750);
if(temp__5753__auto__){
var seq__69750__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69750__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__69750__$1);
var G__69841 = cljs.core.chunk_rest(seq__69750__$1);
var G__69842 = c__4649__auto__;
var G__69843 = cljs.core.count(c__4649__auto__);
var G__69844 = (0);
seq__69750 = G__69841;
chunk__69751 = G__69842;
count__69752 = G__69843;
i__69753 = G__69844;
continue;
} else {
var vec__69764 = cljs.core.first(seq__69750__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69764,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69764,(1),null);
var temp__5751__auto___69845 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___69845)){
var effect_fn_69846 = temp__5751__auto___69845;
(effect_fn_69846.cljs$core$IFn$_invoke$arity$1 ? effect_fn_69846.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_69846.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__69847 = cljs.core.next(seq__69750__$1);
var G__69848 = null;
var G__69849 = (0);
var G__69850 = (0);
seq__69750 = G__69847;
chunk__69751 = G__69848;
count__69752 = G__69849;
i__69753 = G__69850;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__69231__auto___69851 = re_frame.interop.now();
var duration__69232__auto___69852 = (end__69231__auto___69851 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__69232__auto___69852,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__69231__auto___69851);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__69746);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___69854 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___69854)){
var new_db_69855 = temp__5753__auto___69854;
var fexpr__69768_69856 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__69768_69856.cljs$core$IFn$_invoke$arity$1 ? fexpr__69768_69856.cljs$core$IFn$_invoke$arity$1(new_db_69855) : fexpr__69768_69856.call(null,new_db_69855));
} else {
}

var seq__69769 = cljs.core.seq(effects_without_db);
var chunk__69770 = null;
var count__69771 = (0);
var i__69772 = (0);
while(true){
if((i__69772 < count__69771)){
var vec__69780 = chunk__69770.cljs$core$IIndexed$_nth$arity$2(null,i__69772);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69780,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69780,(1),null);
var temp__5751__auto___69859 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___69859)){
var effect_fn_69860 = temp__5751__auto___69859;
(effect_fn_69860.cljs$core$IFn$_invoke$arity$1 ? effect_fn_69860.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_69860.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__69861 = seq__69769;
var G__69862 = chunk__69770;
var G__69863 = count__69771;
var G__69864 = (i__69772 + (1));
seq__69769 = G__69861;
chunk__69770 = G__69862;
count__69771 = G__69863;
i__69772 = G__69864;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69769);
if(temp__5753__auto__){
var seq__69769__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69769__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__69769__$1);
var G__69865 = cljs.core.chunk_rest(seq__69769__$1);
var G__69866 = c__4649__auto__;
var G__69867 = cljs.core.count(c__4649__auto__);
var G__69868 = (0);
seq__69769 = G__69865;
chunk__69770 = G__69866;
count__69771 = G__69867;
i__69772 = G__69868;
continue;
} else {
var vec__69784 = cljs.core.first(seq__69769__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69784,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69784,(1),null);
var temp__5751__auto___69869 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___69869)){
var effect_fn_69870 = temp__5751__auto___69869;
(effect_fn_69870.cljs$core$IFn$_invoke$arity$1 ? effect_fn_69870.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_69870.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__69871 = cljs.core.next(seq__69769__$1);
var G__69872 = null;
var G__69873 = (0);
var G__69874 = (0);
seq__69769 = G__69871;
chunk__69770 = G__69872;
count__69771 = G__69873;
i__69772 = G__69874;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__69788){
var map__69789 = p__69788;
var map__69789__$1 = cljs.core.__destructure_map(map__69789);
var effect = map__69789__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69789__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69789__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__69791 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__69792 = null;
var count__69793 = (0);
var i__69794 = (0);
while(true){
if((i__69794 < count__69793)){
var effect = chunk__69792.cljs$core$IIndexed$_nth$arity$2(null,i__69794);
re_frame.fx.dispatch_later(effect);


var G__69875 = seq__69791;
var G__69876 = chunk__69792;
var G__69877 = count__69793;
var G__69878 = (i__69794 + (1));
seq__69791 = G__69875;
chunk__69792 = G__69876;
count__69793 = G__69877;
i__69794 = G__69878;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69791);
if(temp__5753__auto__){
var seq__69791__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69791__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__69791__$1);
var G__69879 = cljs.core.chunk_rest(seq__69791__$1);
var G__69880 = c__4649__auto__;
var G__69881 = cljs.core.count(c__4649__auto__);
var G__69882 = (0);
seq__69791 = G__69879;
chunk__69792 = G__69880;
count__69793 = G__69881;
i__69794 = G__69882;
continue;
} else {
var effect = cljs.core.first(seq__69791__$1);
re_frame.fx.dispatch_later(effect);


var G__69884 = cljs.core.next(seq__69791__$1);
var G__69885 = null;
var G__69886 = (0);
var G__69887 = (0);
seq__69791 = G__69884;
chunk__69792 = G__69885;
count__69793 = G__69886;
i__69794 = G__69887;
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
var seq__69797 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__69798 = null;
var count__69799 = (0);
var i__69800 = (0);
while(true){
if((i__69800 < count__69799)){
var vec__69809 = chunk__69798.cljs$core$IIndexed$_nth$arity$2(null,i__69800);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69809,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69809,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___69888 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___69888)){
var effect_fn_69889 = temp__5751__auto___69888;
(effect_fn_69889.cljs$core$IFn$_invoke$arity$1 ? effect_fn_69889.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_69889.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__69890 = seq__69797;
var G__69891 = chunk__69798;
var G__69892 = count__69799;
var G__69893 = (i__69800 + (1));
seq__69797 = G__69890;
chunk__69798 = G__69891;
count__69799 = G__69892;
i__69800 = G__69893;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69797);
if(temp__5753__auto__){
var seq__69797__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69797__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__69797__$1);
var G__69894 = cljs.core.chunk_rest(seq__69797__$1);
var G__69895 = c__4649__auto__;
var G__69896 = cljs.core.count(c__4649__auto__);
var G__69897 = (0);
seq__69797 = G__69894;
chunk__69798 = G__69895;
count__69799 = G__69896;
i__69800 = G__69897;
continue;
} else {
var vec__69813 = cljs.core.first(seq__69797__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69813,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69813,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___69898 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___69898)){
var effect_fn_69899 = temp__5751__auto___69898;
(effect_fn_69899.cljs$core$IFn$_invoke$arity$1 ? effect_fn_69899.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_69899.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__69900 = cljs.core.next(seq__69797__$1);
var G__69901 = null;
var G__69902 = (0);
var G__69903 = (0);
seq__69797 = G__69900;
chunk__69798 = G__69901;
count__69799 = G__69902;
i__69800 = G__69903;
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
var seq__69818 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__69819 = null;
var count__69820 = (0);
var i__69821 = (0);
while(true){
if((i__69821 < count__69820)){
var event = chunk__69819.cljs$core$IIndexed$_nth$arity$2(null,i__69821);
re_frame.router.dispatch(event);


var G__69904 = seq__69818;
var G__69905 = chunk__69819;
var G__69906 = count__69820;
var G__69907 = (i__69821 + (1));
seq__69818 = G__69904;
chunk__69819 = G__69905;
count__69820 = G__69906;
i__69821 = G__69907;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69818);
if(temp__5753__auto__){
var seq__69818__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69818__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__69818__$1);
var G__69908 = cljs.core.chunk_rest(seq__69818__$1);
var G__69909 = c__4649__auto__;
var G__69910 = cljs.core.count(c__4649__auto__);
var G__69911 = (0);
seq__69818 = G__69908;
chunk__69819 = G__69909;
count__69820 = G__69910;
i__69821 = G__69911;
continue;
} else {
var event = cljs.core.first(seq__69818__$1);
re_frame.router.dispatch(event);


var G__69912 = cljs.core.next(seq__69818__$1);
var G__69913 = null;
var G__69914 = (0);
var G__69915 = (0);
seq__69818 = G__69912;
chunk__69819 = G__69913;
count__69820 = G__69914;
i__69821 = G__69915;
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
var seq__69824 = cljs.core.seq(value);
var chunk__69825 = null;
var count__69826 = (0);
var i__69827 = (0);
while(true){
if((i__69827 < count__69826)){
var event = chunk__69825.cljs$core$IIndexed$_nth$arity$2(null,i__69827);
clear_event(event);


var G__69916 = seq__69824;
var G__69917 = chunk__69825;
var G__69918 = count__69826;
var G__69919 = (i__69827 + (1));
seq__69824 = G__69916;
chunk__69825 = G__69917;
count__69826 = G__69918;
i__69827 = G__69919;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69824);
if(temp__5753__auto__){
var seq__69824__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69824__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__69824__$1);
var G__69920 = cljs.core.chunk_rest(seq__69824__$1);
var G__69921 = c__4649__auto__;
var G__69922 = cljs.core.count(c__4649__auto__);
var G__69923 = (0);
seq__69824 = G__69920;
chunk__69825 = G__69921;
count__69826 = G__69922;
i__69827 = G__69923;
continue;
} else {
var event = cljs.core.first(seq__69824__$1);
clear_event(event);


var G__69925 = cljs.core.next(seq__69824__$1);
var G__69926 = null;
var G__69927 = (0);
var G__69928 = (0);
seq__69824 = G__69925;
chunk__69825 = G__69926;
count__69826 = G__69927;
i__69827 = G__69928;
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
