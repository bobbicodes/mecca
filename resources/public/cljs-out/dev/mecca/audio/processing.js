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
var ok_QMARK_ = (function mecca$audio$processing$well_formed_QMARK__$_ok_QMARK_(p__12255){
var map__12256 = p__12255;
var map__12256__$1 = ((((!((map__12256 == null)))?(((((map__12256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12256):map__12256);
var time = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__12256__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
mecca.audio.processing.check = (function mecca$audio$processing$check(p__12258,ok_QMARK_){
var map__12259 = p__12258;
var map__12259__$1 = ((((!((map__12259 == null)))?(((((map__12259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12259):map__12259);
var return$ = map__12259__$1;
var value = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__12259__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.call(null,return$,new cljs.core.Keyword(null,"error","error",-978969032),ok_QMARK_.call(null,value));
}
});
mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12261,handle_BANG_,state){
var map__12262 = p__12261;
var map__12262__$1 = ((((!((map__12262 == null)))?(((((map__12262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12262):map__12262);
var pane = cljs.core.get.call(null,map__12262__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__12264 = this;
var map__12264__$1 = ((((!((map__12264 == null)))?(((((map__12264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12264):map__12264);
var pane__$1 = cljs.core.get.call(null,map__12264__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),false);
});

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12266,handle_BANG_,state){
var map__12267 = p__12266;
var map__12267__$1 = ((((!((map__12267 == null)))?(((((map__12267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12267):map__12267);
var this$ = map__12267__$1;
var pane = cljs.core.get.call(null,map__12267__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__12269 = this;
var map__12269__$1 = ((((!((map__12269 == null)))?(((((map__12269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12269):map__12269);
var this$__$1 = map__12269__$1;
var pane__$1 = cljs.core.get.call(null,map__12269__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(!((Date.now() < cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"sync","sync",-624148946)], null))))){
return mecca.audio.framework.process.call(null,mecca.audio.actions.__GT_Loop.call(null,pane__$1),handle_BANG_,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),true));
} else {
return state;
}
});

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12271,handle_BANG_,p__12272){
var map__12273 = p__12271;
var map__12273__$1 = ((((!((map__12273 == null)))?(((((map__12273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12273):map__12273);
var this$ = map__12273__$1;
var pane = cljs.core.get.call(null,map__12273__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__12274 = p__12272;
var map__12274__$1 = ((((!((map__12274 == null)))?(((((map__12274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12274):map__12274);
var state = map__12274__$1;
var audiocontext = cljs.core.get.call(null,map__12274__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__12277 = this;
var map__12277__$1 = ((((!((map__12277 == null)))?(((((map__12277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12277):map__12277);
var this$__$1 = map__12277__$1;
var pane__$1 = cljs.core.get.call(null,map__12277__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__12279 = pane__$1.call(null,state);
var map__12279__$1 = ((((!((map__12279 == null)))?(((((map__12279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12279):map__12279);
var value = cljs.core.get.call(null,map__12279__$1,new cljs.core.Keyword(null,"value","value",305978217));
mecca.audio.synthesis.play_BANG_.call(null,audiocontext,value);

return state;
});

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12281,handle_BANG_,p__12282){
var map__12283 = p__12281;
var map__12283__$1 = ((((!((map__12283 == null)))?(((((map__12283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12283):map__12283);
var this$ = map__12283__$1;
var pane = cljs.core.get.call(null,map__12283__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__12284 = p__12282;
var map__12284__$1 = ((((!((map__12284 == null)))?(((((map__12284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12284):map__12284);
var state = map__12284__$1;
var audiocontext = cljs.core.get.call(null,map__12284__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__12287 = this;
var map__12287__$1 = ((((!((map__12287 == null)))?(((((map__12287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12287):map__12287);
var this$__$1 = map__12287__$1;
var pane__$1 = cljs.core.get.call(null,map__12287__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__12289 = pane__$1.call(null,state);
var map__12289__$1 = ((((!((map__12289 == null)))?(((((map__12289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12289):map__12289);
var value = cljs.core.get.call(null,map__12289__$1,new cljs.core.Keyword(null,"value","value",305978217));
var looping_QMARK_ = cljs.core.get.call(null,map__12289__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245));
var audio_sync = cljs.core.get.call(null,map__12289__$1,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174),audiocontext.currentTime);
var duration = mecca.audio.melody.duration.call(null,value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.audio.synthesis.play_from_BANG_.call(null,audiocontext,audio_sync,value);

mecca.audio.processing.schedule_BANG_.call(null,((function (map__12289,map__12289__$1,value,looping_QMARK_,audio_sync,duration,map__12287,map__12287__$1,this$__$1,pane__$1,map__12283,map__12283__$1,this$,pane,map__12284,map__12284__$1,state,audiocontext){
return (function (){
return handle_BANG_.call(null,this$__$1);
});})(map__12289,map__12289__$1,value,looping_QMARK_,audio_sync,duration,map__12287,map__12287__$1,this$__$1,pane__$1,map__12283,map__12283__$1,this$,pane,map__12284,map__12284__$1,state,audiocontext))
,duration);

return mecca.audio.processing.update_syncs.call(null,state,pane__$1,audio_sync,duration);
} else {
return mecca.audio.processing.clear_syncs.call(null,state,pane__$1);
}
});

//# sourceMappingURL=processing.js.map
