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
var ok_QMARK_ = (function mecca$music$processing$well_formed_QMARK__$_ok_QMARK_(p__11266){
var map__11267 = p__11266;
var map__11267__$1 = ((((!((map__11267 == null)))?(((((map__11267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11267):map__11267);
var time = cljs.core.get.call(null,map__11267__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__11267__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
mecca.music.processing.check = (function mecca$music$processing$check(p__11269,ok_QMARK_){
var map__11270 = p__11269;
var map__11270__$1 = ((((!((map__11270 == null)))?(((((map__11270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11270):map__11270);
var return$ = map__11270__$1;
var value = cljs.core.get.call(null,map__11270__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__11270__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.call(null,return$,new cljs.core.Keyword(null,"error","error",-978969032),ok_QMARK_.call(null,value));
}
});
mecca.music.actions.Stop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Stop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__11272,handle_BANG_,state){
var map__11273 = p__11272;
var map__11273__$1 = ((((!((map__11273 == null)))?(((((map__11273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11273):map__11273);
var pane = cljs.core.get.call(null,map__11273__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__11275 = this;
var map__11275__$1 = ((((!((map__11275 == null)))?(((((map__11275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11275):map__11275);
var pane__$1 = cljs.core.get.call(null,map__11275__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),false);
});

mecca.music.actions.Play.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Play.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__11277,handle_BANG_,state){
var map__11278 = p__11277;
var map__11278__$1 = ((((!((map__11278 == null)))?(((((map__11278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11278):map__11278);
var this$ = map__11278__$1;
var pane = cljs.core.get.call(null,map__11278__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__11280 = this;
var map__11280__$1 = ((((!((map__11280 == null)))?(((((map__11280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11280):map__11280);
var this$__$1 = map__11280__$1;
var pane__$1 = cljs.core.get.call(null,map__11280__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(!((Date.now() < cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"sync","sync",-624148946)], null))))){
return mecca.music.framework.process.call(null,mecca.music.actions.__GT_Loop.call(null,pane__$1),handle_BANG_,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),true));
} else {
return state;
}
});

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__11282,handle_BANG_,p__11283){
var map__11284 = p__11282;
var map__11284__$1 = ((((!((map__11284 == null)))?(((((map__11284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11284):map__11284);
var this$ = map__11284__$1;
var pane = cljs.core.get.call(null,map__11284__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__11285 = p__11283;
var map__11285__$1 = ((((!((map__11285 == null)))?(((((map__11285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11285):map__11285);
var state = map__11285__$1;
var audiocontext = cljs.core.get.call(null,map__11285__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__11288 = this;
var map__11288__$1 = ((((!((map__11288 == null)))?(((((map__11288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11288):map__11288);
var this$__$1 = map__11288__$1;
var pane__$1 = cljs.core.get.call(null,map__11288__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__11290 = pane__$1.call(null,state);
var map__11290__$1 = ((((!((map__11290 == null)))?(((((map__11290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11290):map__11290);
var value = cljs.core.get.call(null,map__11290__$1,new cljs.core.Keyword(null,"value","value",305978217));
mecca.music.synthesis.play_BANG_.call(null,audiocontext,value);

return state;
});

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__11292,handle_BANG_,p__11293){
var map__11294 = p__11292;
var map__11294__$1 = ((((!((map__11294 == null)))?(((((map__11294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11294):map__11294);
var this$ = map__11294__$1;
var pane = cljs.core.get.call(null,map__11294__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__11295 = p__11293;
var map__11295__$1 = ((((!((map__11295 == null)))?(((((map__11295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11295):map__11295);
var state = map__11295__$1;
var audiocontext = cljs.core.get.call(null,map__11295__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__11298 = this;
var map__11298__$1 = ((((!((map__11298 == null)))?(((((map__11298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11298):map__11298);
var this$__$1 = map__11298__$1;
var pane__$1 = cljs.core.get.call(null,map__11298__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__11300 = pane__$1.call(null,state);
var map__11300__$1 = ((((!((map__11300 == null)))?(((((map__11300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11300):map__11300);
var value = cljs.core.get.call(null,map__11300__$1,new cljs.core.Keyword(null,"value","value",305978217));
var looping_QMARK_ = cljs.core.get.call(null,map__11300__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245));
var audio_sync = cljs.core.get.call(null,map__11300__$1,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174),audiocontext.currentTime);
var duration = leipzig.melody.duration.call(null,value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.music.synthesis.play_from_BANG_.call(null,audiocontext,audio_sync,value);

mecca.music.processing.schedule_BANG_.call(null,((function (map__11300,map__11300__$1,value,looping_QMARK_,audio_sync,duration,map__11298,map__11298__$1,this$__$1,pane__$1,map__11294,map__11294__$1,this$,pane,map__11295,map__11295__$1,state,audiocontext){
return (function (){
return handle_BANG_.call(null,this$__$1);
});})(map__11300,map__11300__$1,value,looping_QMARK_,audio_sync,duration,map__11298,map__11298__$1,this$__$1,pane__$1,map__11294,map__11294__$1,this$,pane,map__11295,map__11295__$1,state,audiocontext))
,duration);

return mecca.music.processing.update_syncs.call(null,state,pane__$1,audio_sync,duration);
} else {
return mecca.music.processing.clear_syncs.call(null,state,pane__$1);
}
});

//# sourceMappingURL=processing.js.map
