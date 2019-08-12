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
var ok_QMARK_ = (function mecca$music$processing$well_formed_QMARK__$_ok_QMARK_(p__16225){
var map__16226 = p__16225;
var map__16226__$1 = ((((!((map__16226 == null)))?(((((map__16226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16226):map__16226);
var time = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
mecca.music.processing.check = (function mecca$music$processing$check(p__16228,ok_QMARK_){
var map__16229 = p__16228;
var map__16229__$1 = ((((!((map__16229 == null)))?(((((map__16229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16229):map__16229);
var return$ = map__16229__$1;
var value = cljs.core.get.call(null,map__16229__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__16229__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.call(null,return$,new cljs.core.Keyword(null,"error","error",-978969032),ok_QMARK_.call(null,value));
}
});
mecca.music.actions.Stop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Stop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__16231,handle_BANG_,state){
var map__16232 = p__16231;
var map__16232__$1 = ((((!((map__16232 == null)))?(((((map__16232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16232):map__16232);
var pane = cljs.core.get.call(null,map__16232__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__16234 = this;
var map__16234__$1 = ((((!((map__16234 == null)))?(((((map__16234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16234):map__16234);
var pane__$1 = cljs.core.get.call(null,map__16234__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),false);
});

mecca.music.actions.Play.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Play.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__16236,handle_BANG_,state){
var map__16237 = p__16236;
var map__16237__$1 = ((((!((map__16237 == null)))?(((((map__16237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16237):map__16237);
var this$ = map__16237__$1;
var pane = cljs.core.get.call(null,map__16237__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__16239 = this;
var map__16239__$1 = ((((!((map__16239 == null)))?(((((map__16239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16239):map__16239);
var this$__$1 = map__16239__$1;
var pane__$1 = cljs.core.get.call(null,map__16239__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(!((Date.now() < cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"sync","sync",-624148946)], null))))){
return mecca.music.framework.process.call(null,mecca.music.actions.__GT_Loop.call(null,pane__$1),handle_BANG_,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),true));
} else {
return state;
}
});

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.PlayOnce.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__16241,handle_BANG_,p__16242){
var map__16243 = p__16241;
var map__16243__$1 = ((((!((map__16243 == null)))?(((((map__16243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16243):map__16243);
var this$ = map__16243__$1;
var pane = cljs.core.get.call(null,map__16243__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__16244 = p__16242;
var map__16244__$1 = ((((!((map__16244 == null)))?(((((map__16244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16244):map__16244);
var state = map__16244__$1;
var audiocontext = cljs.core.get.call(null,map__16244__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__16247 = this;
var map__16247__$1 = ((((!((map__16247 == null)))?(((((map__16247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16247):map__16247);
var this$__$1 = map__16247__$1;
var pane__$1 = cljs.core.get.call(null,map__16247__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__16249 = pane__$1.call(null,state);
var map__16249__$1 = ((((!((map__16249 == null)))?(((((map__16249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16249):map__16249);
var value = cljs.core.get.call(null,map__16249__$1,new cljs.core.Keyword(null,"value","value",305978217));
mecca.music.synthesis.play_BANG_.call(null,audiocontext,value);

return state;
});

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.music.actions.Loop.prototype.mecca$music$framework$Action$process$arity$3 = (function (p__16251,handle_BANG_,p__16252){
var map__16253 = p__16251;
var map__16253__$1 = ((((!((map__16253 == null)))?(((((map__16253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16253):map__16253);
var this$ = map__16253__$1;
var pane = cljs.core.get.call(null,map__16253__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__16254 = p__16252;
var map__16254__$1 = ((((!((map__16254 == null)))?(((((map__16254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16254):map__16254);
var state = map__16254__$1;
var audiocontext = cljs.core.get.call(null,map__16254__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__16257 = this;
var map__16257__$1 = ((((!((map__16257 == null)))?(((((map__16257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16257):map__16257);
var this$__$1 = map__16257__$1;
var pane__$1 = cljs.core.get.call(null,map__16257__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__16259 = pane__$1.call(null,state);
var map__16259__$1 = ((((!((map__16259 == null)))?(((((map__16259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16259):map__16259);
var value = cljs.core.get.call(null,map__16259__$1,new cljs.core.Keyword(null,"value","value",305978217));
var looping_QMARK_ = cljs.core.get.call(null,map__16259__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245));
var audio_sync = cljs.core.get.call(null,map__16259__$1,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174),audiocontext.currentTime);
var duration = leipzig.melody.duration.call(null,value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.music.synthesis.play_from_BANG_.call(null,audiocontext,audio_sync,value);

mecca.music.processing.schedule_BANG_.call(null,((function (map__16259,map__16259__$1,value,looping_QMARK_,audio_sync,duration,map__16257,map__16257__$1,this$__$1,pane__$1,map__16253,map__16253__$1,this$,pane,map__16254,map__16254__$1,state,audiocontext){
return (function (){
return handle_BANG_.call(null,this$__$1);
});})(map__16259,map__16259__$1,value,looping_QMARK_,audio_sync,duration,map__16257,map__16257__$1,this$__$1,pane__$1,map__16253,map__16253__$1,this$,pane,map__16254,map__16254__$1,state,audiocontext))
,duration);

return mecca.music.processing.update_syncs.call(null,state,pane__$1,audio_sync,duration);
} else {
return mecca.music.processing.clear_syncs.call(null,state,pane__$1);
}
});

//# sourceMappingURL=processing.js.map
