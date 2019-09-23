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
var ok_QMARK_ = (function mecca$audio$processing$well_formed_QMARK__$_ok_QMARK_(p__12914){
var map__12915 = p__12914;
var map__12915__$1 = ((((!((map__12915 == null)))?(((((map__12915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12915):map__12915);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12915__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12915__$1,cljs.core.cst$kw$duration);
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
mecca.audio.processing.check = (function mecca$audio$processing$check(p__12917,ok_QMARK_){
var map__12918 = p__12917;
var map__12918__$1 = ((((!((map__12918 == null)))?(((((map__12918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12918):map__12918);
var return$ = map__12918__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12918__$1,cljs.core.cst$kw$value);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12918__$1,cljs.core.cst$kw$error);
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(return$,cljs.core.cst$kw$error,(ok_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ok_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : ok_QMARK_.call(null,value)));
}
});
mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12920,handle_BANG_,state){
var map__12921 = p__12920;
var map__12921__$1 = ((((!((map__12921 == null)))?(((((map__12921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12921):map__12921);
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12921__$1,cljs.core.cst$kw$target);
var map__12923 = this;
var map__12923__$1 = ((((!((map__12923 == null)))?(((((map__12923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12923):map__12923);
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12923__$1,cljs.core.cst$kw$target);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$looping_QMARK_], null),false);
});

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12925,handle_BANG_,state){
var map__12926 = p__12925;
var map__12926__$1 = ((((!((map__12926 == null)))?(((((map__12926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12926):map__12926);
var this$ = map__12926__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12926__$1,cljs.core.cst$kw$target);
var map__12928 = this;
var map__12928__$1 = ((((!((map__12928 == null)))?(((((map__12928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12928):map__12928);
var this$__$1 = map__12928__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12928__$1,cljs.core.cst$kw$target);
if(!((Date.now() < cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$sync], null))))){
return mecca.audio.framework.process(mecca.audio.actions.__GT_Loop(pane__$1),handle_BANG_,cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$looping_QMARK_], null),true));
} else {
return state;
}
});

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12930,handle_BANG_,p__12931){
var map__12932 = p__12930;
var map__12932__$1 = ((((!((map__12932 == null)))?(((((map__12932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12932):map__12932);
var this$ = map__12932__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12932__$1,cljs.core.cst$kw$target);
var map__12933 = p__12931;
var map__12933__$1 = ((((!((map__12933 == null)))?(((((map__12933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12933):map__12933);
var state = map__12933__$1;
var audiocontext = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12933__$1,cljs.core.cst$kw$audiocontext);
var map__12936 = this;
var map__12936__$1 = ((((!((map__12936 == null)))?(((((map__12936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12936):map__12936);
var this$__$1 = map__12936__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12936__$1,cljs.core.cst$kw$target);
var map__12938 = (pane__$1.cljs$core$IFn$_invoke$arity$1 ? pane__$1.cljs$core$IFn$_invoke$arity$1(state) : pane__$1.call(null,state));
var map__12938__$1 = ((((!((map__12938 == null)))?(((((map__12938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12938):map__12938);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12938__$1,cljs.core.cst$kw$value);
mecca.audio.synthesis.play_BANG_(audiocontext,value);

return state;
});

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12940,handle_BANG_,p__12941){
var map__12942 = p__12940;
var map__12942__$1 = ((((!((map__12942 == null)))?(((((map__12942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12942):map__12942);
var this$ = map__12942__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12942__$1,cljs.core.cst$kw$target);
var map__12943 = p__12941;
var map__12943__$1 = ((((!((map__12943 == null)))?(((((map__12943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12943):map__12943);
var state = map__12943__$1;
var audiocontext = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12943__$1,cljs.core.cst$kw$audiocontext);
var map__12946 = this;
var map__12946__$1 = ((((!((map__12946 == null)))?(((((map__12946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12946):map__12946);
var this$__$1 = map__12946__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12946__$1,cljs.core.cst$kw$target);
var map__12948 = (pane__$1.cljs$core$IFn$_invoke$arity$1 ? pane__$1.cljs$core$IFn$_invoke$arity$1(state) : pane__$1.call(null,state));
var map__12948__$1 = ((((!((map__12948 == null)))?(((((map__12948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12948):map__12948);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12948__$1,cljs.core.cst$kw$value);
var looping_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12948__$1,cljs.core.cst$kw$looping_QMARK_);
var audio_sync = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12948__$1,cljs.core.cst$kw$audio_DASH_sync,audiocontext.currentTime);
var duration = mecca.audio.melody.duration(value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.audio.synthesis.play_from_BANG_(audiocontext,audio_sync,value);

mecca.audio.processing.schedule_BANG_(((function (map__12948,map__12948__$1,value,looping_QMARK_,audio_sync,duration,map__12946,map__12946__$1,this$__$1,pane__$1,map__12942,map__12942__$1,this$,pane,map__12943,map__12943__$1,state,audiocontext){
return (function (){
return (handle_BANG_.cljs$core$IFn$_invoke$arity$1 ? handle_BANG_.cljs$core$IFn$_invoke$arity$1(this$__$1) : handle_BANG_.call(null,this$__$1));
});})(map__12948,map__12948__$1,value,looping_QMARK_,audio_sync,duration,map__12946,map__12946__$1,this$__$1,pane__$1,map__12942,map__12942__$1,this$,pane,map__12943,map__12943__$1,state,audiocontext))
,duration);

return mecca.audio.processing.update_syncs(state,pane__$1,audio_sync,duration);
} else {
return mecca.audio.processing.clear_syncs(state,pane__$1);
}
});
