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
var ok_QMARK_ = (function mecca$music$processing$well_formed_QMARK__$_ok_QMARK_(p__9795){
var map__9796 = p__9795;
var map__9796__$1 = ((((!((map__9796 == null)))?(((((map__9796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9796):map__9796);
var time = cljs.core.get.call(null,map__9796__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__9796__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
mecca.music.processing.check = (function mecca$music$processing$check(p__9798,ok_QMARK_){
var map__9799 = p__9798;
var map__9799__$1 = ((((!((map__9799 == null)))?(((((map__9799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9799):map__9799);
var return$ = map__9799__$1;
var value = cljs.core.get.call(null,map__9799__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__9799__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.call(null,return$,new cljs.core.Keyword(null,"error","error",-978969032),ok_QMARK_.call(null,value));
}
});
mecca.music.actions.Stop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Stop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__9801,handle_BANG_,state){
var map__9802 = p__9801;
var map__9802__$1 = ((((!((map__9802 == null)))?(((((map__9802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9802):map__9802);
var pane = cljs.core.get.call(null,map__9802__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__9804 = this;
var map__9804__$1 = ((((!((map__9804 == null)))?(((((map__9804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9804):map__9804);
var pane__$1 = cljs.core.get.call(null,map__9804__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),false);
});

mecca.music.actions.Play.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Play.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__9806,handle_BANG_,state){
var map__9807 = p__9806;
var map__9807__$1 = ((((!((map__9807 == null)))?(((((map__9807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9807):map__9807);
var this$ = map__9807__$1;
var pane = cljs.core.get.call(null,map__9807__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__9809 = this;
var map__9809__$1 = ((((!((map__9809 == null)))?(((((map__9809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9809):map__9809);
var this$__$1 = map__9809__$1;
var pane__$1 = cljs.core.get.call(null,map__9809__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(!((Date.now() < cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"sync","sync",-624148946)], null))))){
return mecca.music.framework.process.call(null,mecca.music.actions.__GT_Loop.call(null,pane__$1),handle_BANG_,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),true));
} else {
return state;
}
});

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__9811,handle_BANG_,p__9812){
var map__9813 = p__9811;
var map__9813__$1 = ((((!((map__9813 == null)))?(((((map__9813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9813):map__9813);
var this$ = map__9813__$1;
var pane = cljs.core.get.call(null,map__9813__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__9814 = p__9812;
var map__9814__$1 = ((((!((map__9814 == null)))?(((((map__9814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9814):map__9814);
var state = map__9814__$1;
var audiocontext = cljs.core.get.call(null,map__9814__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__9817 = this;
var map__9817__$1 = ((((!((map__9817 == null)))?(((((map__9817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9817):map__9817);
var this$__$1 = map__9817__$1;
var pane__$1 = cljs.core.get.call(null,map__9817__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__9819 = pane__$1.call(null,state);
var map__9819__$1 = ((((!((map__9819 == null)))?(((((map__9819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9819):map__9819);
var value = cljs.core.get.call(null,map__9819__$1,new cljs.core.Keyword(null,"value","value",305978217));
mecca.music.synthesis.play_BANG_.call(null,audiocontext,value);

return state;
});

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__9821,handle_BANG_,p__9822){
var map__9823 = p__9821;
var map__9823__$1 = ((((!((map__9823 == null)))?(((((map__9823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9823):map__9823);
var this$ = map__9823__$1;
var pane = cljs.core.get.call(null,map__9823__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__9824 = p__9822;
var map__9824__$1 = ((((!((map__9824 == null)))?(((((map__9824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9824):map__9824);
var state = map__9824__$1;
var audiocontext = cljs.core.get.call(null,map__9824__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__9827 = this;
var map__9827__$1 = ((((!((map__9827 == null)))?(((((map__9827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9827):map__9827);
var this$__$1 = map__9827__$1;
var pane__$1 = cljs.core.get.call(null,map__9827__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__9829 = pane__$1.call(null,state);
var map__9829__$1 = ((((!((map__9829 == null)))?(((((map__9829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9829):map__9829);
var value = cljs.core.get.call(null,map__9829__$1,new cljs.core.Keyword(null,"value","value",305978217));
var looping_QMARK_ = cljs.core.get.call(null,map__9829__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245));
var audio_sync = cljs.core.get.call(null,map__9829__$1,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174),audiocontext.currentTime);
var duration = leipzig.melody.duration.call(null,value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.music.synthesis.play_from_BANG_.call(null,audiocontext,audio_sync,value);

mecca.music.processing.schedule_BANG_.call(null,((function (map__9829,map__9829__$1,value,looping_QMARK_,audio_sync,duration,map__9827,map__9827__$1,this$__$1,pane__$1,map__9823,map__9823__$1,this$,pane,map__9824,map__9824__$1,state,audiocontext){
return (function (){
return handle_BANG_.call(null,this$__$1);
});})(map__9829,map__9829__$1,value,looping_QMARK_,audio_sync,duration,map__9827,map__9827__$1,this$__$1,pane__$1,map__9823,map__9823__$1,this$,pane,map__9824,map__9824__$1,state,audiocontext))
,duration);

return mecca.music.processing.update_syncs.call(null,state,pane__$1,audio_sync,duration);
} else {
return mecca.music.processing.clear_syncs.call(null,state,pane__$1);
}
});

//# sourceMappingURL=processing.js.map
