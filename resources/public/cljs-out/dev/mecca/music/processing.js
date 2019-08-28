// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music.processing');
goog.require('cljs.core');
goog.require('mecca.music.synthesis');
goog.require('mecca.music.actions');
goog.require('mecca.music.framework');
goog.require('leipzig.melody');
mecca.music.processing.milli = (function mecca$music$processing$milli(n){
return (n * (1000));
});
mecca.music.processing.schedule_BANG_ = (function mecca$music$processing$schedule_BANG_(callback_BANG_,duration){
var margin = (150);
return setTimeout(callback_BANG_,(mecca.music.processing.milli.call(null,duration) - margin));
});
mecca.music.processing.clear_syncs = (function mecca$music$processing$clear_syncs(state,pane){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,new cljs.core.Keyword(null,"sync","sync",-624148946)], null),cljs.core.dissoc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174)], null),cljs.core.dissoc);
});
mecca.music.processing.update_syncs = (function mecca$music$processing$update_syncs(state,pane,audio_sync,duration){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,new cljs.core.Keyword(null,"sync","sync",-624148946)], null),(Date.now() + mecca.music.processing.milli.call(null,duration))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174)], null),(audio_sync + duration));
});
mecca.music.processing.too_many_QMARK_ = (function mecca$music$processing$too_many_QMARK_(value){
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
mecca.music.processing.well_formed_QMARK_ = (function mecca$music$processing$well_formed_QMARK_(value){
var ok_QMARK_ = (function mecca$music$processing$well_formed_QMARK__$_ok_QMARK_(p__17017){
var map__17018 = p__17017;
var map__17018__$1 = ((((!((map__17018 == null)))?(((((map__17018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17018):map__17018);
var time = cljs.core.get.call(null,map__17018__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__17018__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
mecca.music.processing.check = (function mecca$music$processing$check(p__17020,ok_QMARK_){
var map__17021 = p__17020;
var map__17021__$1 = ((((!((map__17021 == null)))?(((((map__17021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17021):map__17021);
var return$ = map__17021__$1;
var value = cljs.core.get.call(null,map__17021__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__17021__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.call(null,return$,new cljs.core.Keyword(null,"error","error",-978969032),ok_QMARK_.call(null,value));
}
});
mecca.music.actions.Stop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Stop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__17023,handle_BANG_,state){
var map__17024 = p__17023;
var map__17024__$1 = ((((!((map__17024 == null)))?(((((map__17024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17024):map__17024);
var pane = cljs.core.get.call(null,map__17024__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__17026 = this;
var map__17026__$1 = ((((!((map__17026 == null)))?(((((map__17026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17026):map__17026);
var pane__$1 = cljs.core.get.call(null,map__17026__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),false);
});

mecca.music.actions.Play.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Play.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__17028,handle_BANG_,state){
var map__17029 = p__17028;
var map__17029__$1 = ((((!((map__17029 == null)))?(((((map__17029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17029):map__17029);
var this$ = map__17029__$1;
var pane = cljs.core.get.call(null,map__17029__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__17031 = this;
var map__17031__$1 = ((((!((map__17031 == null)))?(((((map__17031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17031):map__17031);
var this$__$1 = map__17031__$1;
var pane__$1 = cljs.core.get.call(null,map__17031__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(!((Date.now() < cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"sync","sync",-624148946)], null))))){
return mecca.music.framework.process.call(null,mecca.music.actions.__GT_Loop.call(null,pane__$1),handle_BANG_,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),true));
} else {
return state;
}
});

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__17033,handle_BANG_,p__17034){
var map__17035 = p__17033;
var map__17035__$1 = ((((!((map__17035 == null)))?(((((map__17035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17035):map__17035);
var this$ = map__17035__$1;
var pane = cljs.core.get.call(null,map__17035__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__17036 = p__17034;
var map__17036__$1 = ((((!((map__17036 == null)))?(((((map__17036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17036):map__17036);
var state = map__17036__$1;
var audiocontext = cljs.core.get.call(null,map__17036__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__17039 = this;
var map__17039__$1 = ((((!((map__17039 == null)))?(((((map__17039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17039):map__17039);
var this$__$1 = map__17039__$1;
var pane__$1 = cljs.core.get.call(null,map__17039__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__17041 = pane__$1.call(null,state);
var map__17041__$1 = ((((!((map__17041 == null)))?(((((map__17041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17041):map__17041);
var value = cljs.core.get.call(null,map__17041__$1,new cljs.core.Keyword(null,"value","value",305978217));
mecca.music.synthesis.play_BANG_.call(null,audiocontext,value);

return state;
});

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__17043,handle_BANG_,p__17044){
var map__17045 = p__17043;
var map__17045__$1 = ((((!((map__17045 == null)))?(((((map__17045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17045):map__17045);
var this$ = map__17045__$1;
var pane = cljs.core.get.call(null,map__17045__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__17046 = p__17044;
var map__17046__$1 = ((((!((map__17046 == null)))?(((((map__17046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17046):map__17046);
var state = map__17046__$1;
var audiocontext = cljs.core.get.call(null,map__17046__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__17049 = this;
var map__17049__$1 = ((((!((map__17049 == null)))?(((((map__17049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17049):map__17049);
var this$__$1 = map__17049__$1;
var pane__$1 = cljs.core.get.call(null,map__17049__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__17051 = pane__$1.call(null,state);
var map__17051__$1 = ((((!((map__17051 == null)))?(((((map__17051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17051):map__17051);
var value = cljs.core.get.call(null,map__17051__$1,new cljs.core.Keyword(null,"value","value",305978217));
var looping_QMARK_ = cljs.core.get.call(null,map__17051__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245));
var audio_sync = cljs.core.get.call(null,map__17051__$1,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174),audiocontext.currentTime);
var duration = leipzig.melody.duration.call(null,value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.music.synthesis.play_from_BANG_.call(null,audiocontext,audio_sync,value);

mecca.music.processing.schedule_BANG_.call(null,((function (map__17051,map__17051__$1,value,looping_QMARK_,audio_sync,duration,map__17049,map__17049__$1,this$__$1,pane__$1,map__17045,map__17045__$1,this$,pane,map__17046,map__17046__$1,state,audiocontext){
return (function (){
return handle_BANG_.call(null,this$__$1);
});})(map__17051,map__17051__$1,value,looping_QMARK_,audio_sync,duration,map__17049,map__17049__$1,this$__$1,pane__$1,map__17045,map__17045__$1,this$,pane,map__17046,map__17046__$1,state,audiocontext))
,duration);

return mecca.music.processing.update_syncs.call(null,state,pane__$1,audio_sync,duration);
} else {
return mecca.music.processing.clear_syncs.call(null,state,pane__$1);
}
});

//# sourceMappingURL=processing.js.map
