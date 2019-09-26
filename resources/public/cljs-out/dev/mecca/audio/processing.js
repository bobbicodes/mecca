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
var ok_QMARK_ = (function mecca$audio$processing$well_formed_QMARK__$_ok_QMARK_(p__15458){
var map__15459 = p__15458;
var map__15459__$1 = ((((!((map__15459 == null)))?(((((map__15459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15459):map__15459);
var time = cljs.core.get.call(null,map__15459__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__15459__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
mecca.audio.processing.check = (function mecca$audio$processing$check(p__15461,ok_QMARK_){
var map__15462 = p__15461;
var map__15462__$1 = ((((!((map__15462 == null)))?(((((map__15462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15462):map__15462);
var return$ = map__15462__$1;
var value = cljs.core.get.call(null,map__15462__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__15462__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.call(null,return$,new cljs.core.Keyword(null,"error","error",-978969032),ok_QMARK_.call(null,value));
}
});
mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__15464,handle_BANG_,state){
var map__15465 = p__15464;
var map__15465__$1 = ((((!((map__15465 == null)))?(((((map__15465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15465):map__15465);
var pane = cljs.core.get.call(null,map__15465__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__15467 = this;
var map__15467__$1 = ((((!((map__15467 == null)))?(((((map__15467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15467):map__15467);
var pane__$1 = cljs.core.get.call(null,map__15467__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),false);
});

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__15469,handle_BANG_,state){
var map__15470 = p__15469;
var map__15470__$1 = ((((!((map__15470 == null)))?(((((map__15470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15470):map__15470);
var this$ = map__15470__$1;
var pane = cljs.core.get.call(null,map__15470__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__15472 = this;
var map__15472__$1 = ((((!((map__15472 == null)))?(((((map__15472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15472):map__15472);
var this$__$1 = map__15472__$1;
var pane__$1 = cljs.core.get.call(null,map__15472__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(!((Date.now() < cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"sync","sync",-624148946)], null))))){
return mecca.audio.framework.process.call(null,mecca.audio.actions.__GT_Loop.call(null,pane__$1),handle_BANG_,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),true));
} else {
return state;
}
});

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__15474,handle_BANG_,p__15475){
var map__15476 = p__15474;
var map__15476__$1 = ((((!((map__15476 == null)))?(((((map__15476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15476):map__15476);
var this$ = map__15476__$1;
var pane = cljs.core.get.call(null,map__15476__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__15477 = p__15475;
var map__15477__$1 = ((((!((map__15477 == null)))?(((((map__15477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15477):map__15477);
var state = map__15477__$1;
var audiocontext = cljs.core.get.call(null,map__15477__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__15480 = this;
var map__15480__$1 = ((((!((map__15480 == null)))?(((((map__15480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15480):map__15480);
var this$__$1 = map__15480__$1;
var pane__$1 = cljs.core.get.call(null,map__15480__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__15482 = pane__$1.call(null,state);
var map__15482__$1 = ((((!((map__15482 == null)))?(((((map__15482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15482):map__15482);
var value = cljs.core.get.call(null,map__15482__$1,new cljs.core.Keyword(null,"value","value",305978217));
mecca.audio.synthesis.play_BANG_.call(null,audiocontext,value);

return state;
});

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__15484,handle_BANG_,p__15485){
var map__15486 = p__15484;
var map__15486__$1 = ((((!((map__15486 == null)))?(((((map__15486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15486):map__15486);
var this$ = map__15486__$1;
var pane = cljs.core.get.call(null,map__15486__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__15487 = p__15485;
var map__15487__$1 = ((((!((map__15487 == null)))?(((((map__15487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15487):map__15487);
var state = map__15487__$1;
var audiocontext = cljs.core.get.call(null,map__15487__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__15490 = this;
var map__15490__$1 = ((((!((map__15490 == null)))?(((((map__15490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15490):map__15490);
var this$__$1 = map__15490__$1;
var pane__$1 = cljs.core.get.call(null,map__15490__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__15492 = pane__$1.call(null,state);
var map__15492__$1 = ((((!((map__15492 == null)))?(((((map__15492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15492):map__15492);
var value = cljs.core.get.call(null,map__15492__$1,new cljs.core.Keyword(null,"value","value",305978217));
var looping_QMARK_ = cljs.core.get.call(null,map__15492__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245));
var audio_sync = cljs.core.get.call(null,map__15492__$1,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174),audiocontext.currentTime);
var duration = mecca.audio.melody.duration.call(null,value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.audio.synthesis.play_from_BANG_.call(null,audiocontext,audio_sync,value);

mecca.audio.processing.schedule_BANG_.call(null,((function (map__15492,map__15492__$1,value,looping_QMARK_,audio_sync,duration,map__15490,map__15490__$1,this$__$1,pane__$1,map__15486,map__15486__$1,this$,pane,map__15487,map__15487__$1,state,audiocontext){
return (function (){
return handle_BANG_.call(null,this$__$1);
});})(map__15492,map__15492__$1,value,looping_QMARK_,audio_sync,duration,map__15490,map__15490__$1,this$__$1,pane__$1,map__15486,map__15486__$1,this$,pane,map__15487,map__15487__$1,state,audiocontext))
,duration);

return mecca.audio.processing.update_syncs.call(null,state,pane__$1,audio_sync,duration);
} else {
return mecca.audio.processing.clear_syncs.call(null,state,pane__$1);
}
});

//# sourceMappingURL=processing.js.map
