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
var ok_QMARK_ = (function mecca$music$processing$well_formed_QMARK__$_ok_QMARK_(p__10532){
var map__10533 = p__10532;
var map__10533__$1 = ((((!((map__10533 == null)))?(((((map__10533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10533):map__10533);
var time = cljs.core.get.call(null,map__10533__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__10533__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
mecca.music.processing.check = (function mecca$music$processing$check(p__10535,ok_QMARK_){
var map__10536 = p__10535;
var map__10536__$1 = ((((!((map__10536 == null)))?(((((map__10536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10536):map__10536);
var return$ = map__10536__$1;
var value = cljs.core.get.call(null,map__10536__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__10536__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.call(null,return$,new cljs.core.Keyword(null,"error","error",-978969032),ok_QMARK_.call(null,value));
}
});
mecca.music.actions.Stop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Stop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__10538,handle_BANG_,state){
var map__10539 = p__10538;
var map__10539__$1 = ((((!((map__10539 == null)))?(((((map__10539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10539):map__10539);
var pane = cljs.core.get.call(null,map__10539__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__10541 = this;
var map__10541__$1 = ((((!((map__10541 == null)))?(((((map__10541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10541):map__10541);
var pane__$1 = cljs.core.get.call(null,map__10541__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),false);
});

mecca.music.actions.Play.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Play.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__10543,handle_BANG_,state){
var map__10544 = p__10543;
var map__10544__$1 = ((((!((map__10544 == null)))?(((((map__10544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10544):map__10544);
var this$ = map__10544__$1;
var pane = cljs.core.get.call(null,map__10544__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__10546 = this;
var map__10546__$1 = ((((!((map__10546 == null)))?(((((map__10546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10546):map__10546);
var this$__$1 = map__10546__$1;
var pane__$1 = cljs.core.get.call(null,map__10546__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(!((Date.now() < cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"sync","sync",-624148946)], null))))){
return mecca.music.framework.process.call(null,mecca.music.actions.__GT_Loop.call(null,pane__$1),handle_BANG_,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),true));
} else {
return state;
}
});

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__10548,handle_BANG_,p__10549){
var map__10550 = p__10548;
var map__10550__$1 = ((((!((map__10550 == null)))?(((((map__10550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10550):map__10550);
var this$ = map__10550__$1;
var pane = cljs.core.get.call(null,map__10550__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__10551 = p__10549;
var map__10551__$1 = ((((!((map__10551 == null)))?(((((map__10551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10551):map__10551);
var state = map__10551__$1;
var audiocontext = cljs.core.get.call(null,map__10551__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__10554 = this;
var map__10554__$1 = ((((!((map__10554 == null)))?(((((map__10554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10554):map__10554);
var this$__$1 = map__10554__$1;
var pane__$1 = cljs.core.get.call(null,map__10554__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__10556 = pane__$1.call(null,state);
var map__10556__$1 = ((((!((map__10556 == null)))?(((((map__10556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10556):map__10556);
var value = cljs.core.get.call(null,map__10556__$1,new cljs.core.Keyword(null,"value","value",305978217));
mecca.music.synthesis.play_BANG_.call(null,audiocontext,value);

return state;
});

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__10558,handle_BANG_,p__10559){
var map__10560 = p__10558;
var map__10560__$1 = ((((!((map__10560 == null)))?(((((map__10560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10560):map__10560);
var this$ = map__10560__$1;
var pane = cljs.core.get.call(null,map__10560__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__10561 = p__10559;
var map__10561__$1 = ((((!((map__10561 == null)))?(((((map__10561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10561):map__10561);
var state = map__10561__$1;
var audiocontext = cljs.core.get.call(null,map__10561__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__10564 = this;
var map__10564__$1 = ((((!((map__10564 == null)))?(((((map__10564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10564):map__10564);
var this$__$1 = map__10564__$1;
var pane__$1 = cljs.core.get.call(null,map__10564__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__10566 = pane__$1.call(null,state);
var map__10566__$1 = ((((!((map__10566 == null)))?(((((map__10566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10566):map__10566);
var value = cljs.core.get.call(null,map__10566__$1,new cljs.core.Keyword(null,"value","value",305978217));
var looping_QMARK_ = cljs.core.get.call(null,map__10566__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245));
var audio_sync = cljs.core.get.call(null,map__10566__$1,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174),audiocontext.currentTime);
var duration = leipzig.melody.duration.call(null,value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.music.synthesis.play_from_BANG_.call(null,audiocontext,audio_sync,value);

mecca.music.processing.schedule_BANG_.call(null,((function (map__10566,map__10566__$1,value,looping_QMARK_,audio_sync,duration,map__10564,map__10564__$1,this$__$1,pane__$1,map__10560,map__10560__$1,this$,pane,map__10561,map__10561__$1,state,audiocontext){
return (function (){
return handle_BANG_.call(null,this$__$1);
});})(map__10566,map__10566__$1,value,looping_QMARK_,audio_sync,duration,map__10564,map__10564__$1,this$__$1,pane__$1,map__10560,map__10560__$1,this$,pane,map__10561,map__10561__$1,state,audiocontext))
,duration);

return mecca.music.processing.update_syncs.call(null,state,pane__$1,audio_sync,duration);
} else {
return mecca.music.processing.clear_syncs.call(null,state,pane__$1);
}
});

//# sourceMappingURL=processing.js.map
