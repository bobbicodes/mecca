// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.audio.processing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.audio.synthesis');
goog.require('mecca.audio.actions');
goog.require('mecca.audio.framework');
goog.require('mecca.audio.melody');
mecca.audio.processing.milli = (function mecca$audio$processing$milli(n){
return (n * (1000));
});
mecca.audio.processing.schedule_BANG_ = (function mecca$audio$processing$schedule_BANG_(callback_BANG_,duration){
var margin = (150);
return setTimeout(callback_BANG_,(mecca.audio.processing.milli(duration) - margin));
});
mecca.audio.processing.clear_syncs = (function mecca$audio$processing$clear_syncs(state,pane){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,cljs.core.cst$kw$sync], null),cljs.core.dissoc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,cljs.core.cst$kw$audio_DASH_sync], null),cljs.core.dissoc);
});
mecca.audio.processing.update_syncs = (function mecca$audio$processing$update_syncs(state,pane,audio_sync,duration){
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,cljs.core.cst$kw$sync], null),(Date.now() + mecca.audio.processing.milli(duration))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,cljs.core.cst$kw$audio_DASH_sync], null),(audio_sync + duration));
});
mecca.audio.processing.too_many_QMARK_ = (function mecca$audio$processing$too_many_QMARK_(value){
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
mecca.audio.processing.well_formed_QMARK_ = (function mecca$audio$processing$well_formed_QMARK_(value){
var ok_QMARK_ = (function mecca$audio$processing$well_formed_QMARK__$_ok_QMARK_(p__14083){
var map__14084 = p__14083;
var map__14084__$1 = ((((!((map__14084 == null)))?(((((map__14084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14084):map__14084);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,cljs.core.cst$kw$duration);
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
mecca.audio.processing.check = (function mecca$audio$processing$check(p__14086,ok_QMARK_){
var map__14087 = p__14086;
var map__14087__$1 = ((((!((map__14087 == null)))?(((((map__14087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14087):map__14087);
var return$ = map__14087__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14087__$1,cljs.core.cst$kw$value);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14087__$1,cljs.core.cst$kw$error);
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(return$,cljs.core.cst$kw$error,(ok_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ok_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : ok_QMARK_.call(null,value)));
}
});
mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__14089,handle_BANG_,state){
var map__14090 = p__14089;
var map__14090__$1 = ((((!((map__14090 == null)))?(((((map__14090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14090):map__14090);
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14090__$1,cljs.core.cst$kw$target);
var map__14092 = this;
var map__14092__$1 = ((((!((map__14092 == null)))?(((((map__14092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14092):map__14092);
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14092__$1,cljs.core.cst$kw$target);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$looping_QMARK_], null),false);
});

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__14094,handle_BANG_,state){
var map__14095 = p__14094;
var map__14095__$1 = ((((!((map__14095 == null)))?(((((map__14095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14095):map__14095);
var this$ = map__14095__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,cljs.core.cst$kw$target);
var map__14097 = this;
var map__14097__$1 = ((((!((map__14097 == null)))?(((((map__14097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14097):map__14097);
var this$__$1 = map__14097__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14097__$1,cljs.core.cst$kw$target);
if(!((Date.now() < cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$sync], null))))){
return mecca.audio.framework.process(mecca.audio.actions.__GT_Loop(pane__$1),handle_BANG_,cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$looping_QMARK_], null),true));
} else {
return state;
}
});

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__14099,handle_BANG_,p__14100){
var map__14101 = p__14099;
var map__14101__$1 = ((((!((map__14101 == null)))?(((((map__14101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14101):map__14101);
var this$ = map__14101__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14101__$1,cljs.core.cst$kw$target);
var map__14102 = p__14100;
var map__14102__$1 = ((((!((map__14102 == null)))?(((((map__14102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14102):map__14102);
var state = map__14102__$1;
var audiocontext = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14102__$1,cljs.core.cst$kw$audiocontext);
var map__14105 = this;
var map__14105__$1 = ((((!((map__14105 == null)))?(((((map__14105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14105):map__14105);
var this$__$1 = map__14105__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14105__$1,cljs.core.cst$kw$target);
var map__14107 = (pane__$1.cljs$core$IFn$_invoke$arity$1 ? pane__$1.cljs$core$IFn$_invoke$arity$1(state) : pane__$1.call(null,state));
var map__14107__$1 = ((((!((map__14107 == null)))?(((((map__14107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14107):map__14107);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107__$1,cljs.core.cst$kw$value);
mecca.audio.synthesis.play_BANG_(audiocontext,value);

return state;
});

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__14109,handle_BANG_,p__14110){
var map__14111 = p__14109;
var map__14111__$1 = ((((!((map__14111 == null)))?(((((map__14111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14111):map__14111);
var this$ = map__14111__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14111__$1,cljs.core.cst$kw$target);
var map__14112 = p__14110;
var map__14112__$1 = ((((!((map__14112 == null)))?(((((map__14112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14112):map__14112);
var state = map__14112__$1;
var audiocontext = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14112__$1,cljs.core.cst$kw$audiocontext);
var map__14115 = this;
var map__14115__$1 = ((((!((map__14115 == null)))?(((((map__14115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14115):map__14115);
var this$__$1 = map__14115__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14115__$1,cljs.core.cst$kw$target);
var map__14117 = (pane__$1.cljs$core$IFn$_invoke$arity$1 ? pane__$1.cljs$core$IFn$_invoke$arity$1(state) : pane__$1.call(null,state));
var map__14117__$1 = ((((!((map__14117 == null)))?(((((map__14117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14117):map__14117);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14117__$1,cljs.core.cst$kw$value);
var looping_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14117__$1,cljs.core.cst$kw$looping_QMARK_);
var audio_sync = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14117__$1,cljs.core.cst$kw$audio_DASH_sync,audiocontext.currentTime);
var duration = mecca.audio.melody.duration(value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.audio.synthesis.play_from_BANG_(audiocontext,audio_sync,value);

mecca.audio.processing.schedule_BANG_(((function (map__14117,map__14117__$1,value,looping_QMARK_,audio_sync,duration,map__14115,map__14115__$1,this$__$1,pane__$1,map__14111,map__14111__$1,this$,pane,map__14112,map__14112__$1,state,audiocontext){
return (function (){
return (handle_BANG_.cljs$core$IFn$_invoke$arity$1 ? handle_BANG_.cljs$core$IFn$_invoke$arity$1(this$__$1) : handle_BANG_.call(null,this$__$1));
});})(map__14117,map__14117__$1,value,looping_QMARK_,audio_sync,duration,map__14115,map__14115__$1,this$__$1,pane__$1,map__14111,map__14111__$1,this$,pane,map__14112,map__14112__$1,state,audiocontext))
,duration);

return mecca.audio.processing.update_syncs(state,pane__$1,audio_sync,duration);
} else {
return mecca.audio.processing.clear_syncs(state,pane__$1);
}
});
