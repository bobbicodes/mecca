// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music.processing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.music.synthesis');
goog.require('mecca.music.actions');
goog.require('mecca.music.framework');
goog.require('leipzig.melody');
mecca.music.processing.milli = (function mecca$music$processing$milli(n){
return (n * (1000));
});
mecca.music.processing.schedule_BANG_ = (function mecca$music$processing$schedule_BANG_(callback_BANG_,duration){
var margin = (150);
return setTimeout(callback_BANG_,(mecca.music.processing.milli(duration) - margin));
});
mecca.music.processing.clear_syncs = (function mecca$music$processing$clear_syncs(state,pane){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,cljs.core.cst$kw$sync], null),cljs.core.dissoc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,cljs.core.cst$kw$audio_DASH_sync], null),cljs.core.dissoc);
});
mecca.music.processing.update_syncs = (function mecca$music$processing$update_syncs(state,pane,audio_sync,duration){
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,cljs.core.cst$kw$sync], null),(Date.now() + mecca.music.processing.milli(duration))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,cljs.core.cst$kw$audio_DASH_sync], null),(audio_sync + duration));
});
mecca.music.processing.too_many_QMARK_ = (function mecca$music$processing$too_many_QMARK_(value){
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.seq_QMARK_(value);
if(and__3938__auto__){
return cljs.core.first(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1000),value));
} else {
return and__3938__auto__;
}
})())){
return "Too many notes - Klangmeister can't handle more than 1000.";
} else {
return null;
}
});
mecca.music.processing.well_formed_QMARK_ = (function mecca$music$processing$well_formed_QMARK_(value){
var ok_QMARK_ = (function mecca$music$processing$well_formed_QMARK__$_ok_QMARK_(p__11182){
var map__11183 = p__11182;
var map__11183__$1 = ((((!((map__11183 == null)))?(((((map__11183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11183):map__11183);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11183__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11183__$1,cljs.core.cst$kw$duration);
var and__3938__auto__ = time;
if(cljs.core.truth_(and__3938__auto__)){
return duration;
} else {
return and__3938__auto__;
}
});
if(((cljs.core.seq_QMARK_(value)) && (cljs.core.not_every_QMARK_(ok_QMARK_,value)))){
return "All notes must have a time and a duration.";
} else {
return null;
}
});
mecca.music.processing.check = (function mecca$music$processing$check(p__11185,ok_QMARK_){
var map__11186 = p__11185;
var map__11186__$1 = ((((!((map__11186 == null)))?(((((map__11186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11186):map__11186);
var return$ = map__11186__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11186__$1,cljs.core.cst$kw$value);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11186__$1,cljs.core.cst$kw$error);
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(return$,cljs.core.cst$kw$error,(ok_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ok_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : ok_QMARK_.call(null,value)));
}
});
mecca.music.actions.Stop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Stop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__11188,handle_BANG_,state){
var map__11189 = p__11188;
var map__11189__$1 = ((((!((map__11189 == null)))?(((((map__11189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11189):map__11189);
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11189__$1,cljs.core.cst$kw$target);
var map__11191 = this;
var map__11191__$1 = ((((!((map__11191 == null)))?(((((map__11191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11191):map__11191);
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11191__$1,cljs.core.cst$kw$target);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$looping_QMARK_], null),false);
});

mecca.music.actions.Play.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Play.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__11193,handle_BANG_,state){
var map__11194 = p__11193;
var map__11194__$1 = ((((!((map__11194 == null)))?(((((map__11194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11194):map__11194);
var this$ = map__11194__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11194__$1,cljs.core.cst$kw$target);
var map__11196 = this;
var map__11196__$1 = ((((!((map__11196 == null)))?(((((map__11196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11196):map__11196);
var this$__$1 = map__11196__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11196__$1,cljs.core.cst$kw$target);
if(!((Date.now() < cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$sync], null))))){
return mecca.music.framework.process(mecca.music.actions.__GT_Loop(pane__$1),handle_BANG_,cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$looping_QMARK_], null),true));
} else {
return state;
}
});

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__11198,handle_BANG_,p__11199){
var map__11200 = p__11198;
var map__11200__$1 = ((((!((map__11200 == null)))?(((((map__11200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11200):map__11200);
var this$ = map__11200__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11200__$1,cljs.core.cst$kw$target);
var map__11201 = p__11199;
var map__11201__$1 = ((((!((map__11201 == null)))?(((((map__11201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11201):map__11201);
var state = map__11201__$1;
var audiocontext = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11201__$1,cljs.core.cst$kw$audiocontext);
var map__11204 = this;
var map__11204__$1 = ((((!((map__11204 == null)))?(((((map__11204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11204):map__11204);
var this$__$1 = map__11204__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11204__$1,cljs.core.cst$kw$target);
var map__11206 = (pane__$1.cljs$core$IFn$_invoke$arity$1 ? pane__$1.cljs$core$IFn$_invoke$arity$1(state) : pane__$1.call(null,state));
var map__11206__$1 = ((((!((map__11206 == null)))?(((((map__11206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11206):map__11206);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11206__$1,cljs.core.cst$kw$value);
mecca.music.synthesis.play_BANG_(audiocontext,value);

return state;
});

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__11208,handle_BANG_,p__11209){
var map__11210 = p__11208;
var map__11210__$1 = ((((!((map__11210 == null)))?(((((map__11210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11210):map__11210);
var this$ = map__11210__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11210__$1,cljs.core.cst$kw$target);
var map__11211 = p__11209;
var map__11211__$1 = ((((!((map__11211 == null)))?(((((map__11211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11211):map__11211);
var state = map__11211__$1;
var audiocontext = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11211__$1,cljs.core.cst$kw$audiocontext);
var map__11214 = this;
var map__11214__$1 = ((((!((map__11214 == null)))?(((((map__11214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11214):map__11214);
var this$__$1 = map__11214__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11214__$1,cljs.core.cst$kw$target);
var map__11216 = (pane__$1.cljs$core$IFn$_invoke$arity$1 ? pane__$1.cljs$core$IFn$_invoke$arity$1(state) : pane__$1.call(null,state));
var map__11216__$1 = ((((!((map__11216 == null)))?(((((map__11216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11216):map__11216);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11216__$1,cljs.core.cst$kw$value);
var looping_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11216__$1,cljs.core.cst$kw$looping_QMARK_);
var audio_sync = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11216__$1,cljs.core.cst$kw$audio_DASH_sync,audiocontext.currentTime);
var duration = leipzig.melody.duration(value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.music.synthesis.play_from_BANG_(audiocontext,audio_sync,value);

mecca.music.processing.schedule_BANG_(((function (map__11216,map__11216__$1,value,looping_QMARK_,audio_sync,duration,map__11214,map__11214__$1,this$__$1,pane__$1,map__11210,map__11210__$1,this$,pane,map__11211,map__11211__$1,state,audiocontext){
return (function (){
return (handle_BANG_.cljs$core$IFn$_invoke$arity$1 ? handle_BANG_.cljs$core$IFn$_invoke$arity$1(this$__$1) : handle_BANG_.call(null,this$__$1));
});})(map__11216,map__11216__$1,value,looping_QMARK_,audio_sync,duration,map__11214,map__11214__$1,this$__$1,pane__$1,map__11210,map__11210__$1,this$,pane,map__11211,map__11211__$1,state,audiocontext))
,duration);

return mecca.music.processing.update_syncs(state,pane__$1,audio_sync,duration);
} else {
return mecca.music.processing.clear_syncs(state,pane__$1);
}
});
