// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.audio.processing');
goog.require('cljs.core');
goog.require('mecca.audio.synthesis');
goog.require('mecca.audio.actions');
goog.require('mecca.audio.framework');
goog.require('mecca.audio.melody');
mecca.audio.processing.milli = (function mecca$audio$processing$milli(n){
return (n * (1000));
});
mecca.audio.processing.schedule_BANG_ = (function mecca$audio$processing$schedule_BANG_(callback_BANG_,duration){
var margin = (150);
return setTimeout(callback_BANG_,(mecca.audio.processing.milli.call(null,duration) - margin));
});
mecca.audio.processing.clear_syncs = (function mecca$audio$processing$clear_syncs(state,pane){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,new cljs.core.Keyword(null,"sync","sync",-624148946)], null),cljs.core.dissoc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174)], null),cljs.core.dissoc);
});
mecca.audio.processing.update_syncs = (function mecca$audio$processing$update_syncs(state,pane,audio_sync,duration){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,new cljs.core.Keyword(null,"sync","sync",-624148946)], null),(Date.now() + mecca.audio.processing.milli.call(null,duration))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174)], null),(audio_sync + duration));
});
mecca.audio.processing.too_many_QMARK_ = (function mecca$audio$processing$too_many_QMARK_(value){
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.seq_QMARK_.call(null,value);
if(and__3938__auto__){
return cljs.core.first.call(null,cljs.core.drop.call(null,(1000),value));
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
var ok_QMARK_ = (function mecca$audio$processing$well_formed_QMARK__$_ok_QMARK_(p__21247){
var map__21248 = p__21247;
var map__21248__$1 = ((((!((map__21248 == null)))?(((((map__21248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21248):map__21248);
var time = cljs.core.get.call(null,map__21248__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__21248__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var and__3938__auto__ = time;
if(cljs.core.truth_(and__3938__auto__)){
return duration;
} else {
return and__3938__auto__;
}
});
if(((cljs.core.seq_QMARK_.call(null,value)) && (cljs.core.not_every_QMARK_.call(null,ok_QMARK_,value)))){
return "All notes must have a time and a duration.";
} else {
return null;
}
});
mecca.audio.processing.check = (function mecca$audio$processing$check(p__21250,ok_QMARK_){
var map__21251 = p__21250;
var map__21251__$1 = ((((!((map__21251 == null)))?(((((map__21251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21251):map__21251);
var return$ = map__21251__$1;
var value = cljs.core.get.call(null,map__21251__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__21251__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.call(null,return$,new cljs.core.Keyword(null,"error","error",-978969032),ok_QMARK_.call(null,value));
}
});
mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__21253,handle_BANG_,state){
var map__21254 = p__21253;
var map__21254__$1 = ((((!((map__21254 == null)))?(((((map__21254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21254):map__21254);
var pane = cljs.core.get.call(null,map__21254__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21256 = this;
var map__21256__$1 = ((((!((map__21256 == null)))?(((((map__21256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21256):map__21256);
var pane__$1 = cljs.core.get.call(null,map__21256__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),false);
});

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__21258,handle_BANG_,state){
var map__21259 = p__21258;
var map__21259__$1 = ((((!((map__21259 == null)))?(((((map__21259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21259):map__21259);
var this$ = map__21259__$1;
var pane = cljs.core.get.call(null,map__21259__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21261 = this;
var map__21261__$1 = ((((!((map__21261 == null)))?(((((map__21261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21261):map__21261);
var this$__$1 = map__21261__$1;
var pane__$1 = cljs.core.get.call(null,map__21261__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(!((Date.now() < cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"sync","sync",-624148946)], null))))){
return mecca.audio.framework.process.call(null,mecca.audio.actions.__GT_Loop.call(null,pane__$1),handle_BANG_,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),true));
} else {
return state;
}
});

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__21263,handle_BANG_,p__21264){
var map__21265 = p__21263;
var map__21265__$1 = ((((!((map__21265 == null)))?(((((map__21265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21265):map__21265);
var this$ = map__21265__$1;
var pane = cljs.core.get.call(null,map__21265__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21266 = p__21264;
var map__21266__$1 = ((((!((map__21266 == null)))?(((((map__21266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21266):map__21266);
var state = map__21266__$1;
var audiocontext = cljs.core.get.call(null,map__21266__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__21269 = this;
var map__21269__$1 = ((((!((map__21269 == null)))?(((((map__21269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21269):map__21269);
var this$__$1 = map__21269__$1;
var pane__$1 = cljs.core.get.call(null,map__21269__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21271 = pane__$1.call(null,state);
var map__21271__$1 = ((((!((map__21271 == null)))?(((((map__21271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21271):map__21271);
var value = cljs.core.get.call(null,map__21271__$1,new cljs.core.Keyword(null,"value","value",305978217));
mecca.audio.synthesis.play_BANG_.call(null,audiocontext,value);

return state;
});

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__21273,handle_BANG_,p__21274){
var map__21275 = p__21273;
var map__21275__$1 = ((((!((map__21275 == null)))?(((((map__21275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21275):map__21275);
var this$ = map__21275__$1;
var pane = cljs.core.get.call(null,map__21275__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21276 = p__21274;
var map__21276__$1 = ((((!((map__21276 == null)))?(((((map__21276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21276):map__21276);
var state = map__21276__$1;
var audiocontext = cljs.core.get.call(null,map__21276__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__21279 = this;
var map__21279__$1 = ((((!((map__21279 == null)))?(((((map__21279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21279):map__21279);
var this$__$1 = map__21279__$1;
var pane__$1 = cljs.core.get.call(null,map__21279__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21281 = pane__$1.call(null,state);
var map__21281__$1 = ((((!((map__21281 == null)))?(((((map__21281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21281):map__21281);
var value = cljs.core.get.call(null,map__21281__$1,new cljs.core.Keyword(null,"value","value",305978217));
var looping_QMARK_ = cljs.core.get.call(null,map__21281__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245));
var audio_sync = cljs.core.get.call(null,map__21281__$1,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174),audiocontext.currentTime);
var duration = mecca.audio.melody.duration.call(null,value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.audio.synthesis.play_from_BANG_.call(null,audiocontext,audio_sync,value);

mecca.audio.processing.schedule_BANG_.call(null,((function (map__21281,map__21281__$1,value,looping_QMARK_,audio_sync,duration,map__21279,map__21279__$1,this$__$1,pane__$1,map__21275,map__21275__$1,this$,pane,map__21276,map__21276__$1,state,audiocontext){
return (function (){
return handle_BANG_.call(null,this$__$1);
});})(map__21281,map__21281__$1,value,looping_QMARK_,audio_sync,duration,map__21279,map__21279__$1,this$__$1,pane__$1,map__21275,map__21275__$1,this$,pane,map__21276,map__21276__$1,state,audiocontext))
,duration);

return mecca.audio.processing.update_syncs.call(null,state,pane__$1,audio_sync,duration);
} else {
return mecca.audio.processing.clear_syncs.call(null,state,pane__$1);
}
});

//# sourceMappingURL=processing.js.map
