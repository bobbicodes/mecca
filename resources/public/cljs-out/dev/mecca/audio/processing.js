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
var ok_QMARK_ = (function mecca$audio$processing$well_formed_QMARK__$_ok_QMARK_(p__21251){
var map__21252 = p__21251;
var map__21252__$1 = ((((!((map__21252 == null)))?(((((map__21252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21252):map__21252);
var time = cljs.core.get.call(null,map__21252__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__21252__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
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
mecca.audio.processing.check = (function mecca$audio$processing$check(p__21254,ok_QMARK_){
var map__21255 = p__21254;
var map__21255__$1 = ((((!((map__21255 == null)))?(((((map__21255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21255):map__21255);
var return$ = map__21255__$1;
var value = cljs.core.get.call(null,map__21255__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__21255__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.call(null,return$,new cljs.core.Keyword(null,"error","error",-978969032),ok_QMARK_.call(null,value));
}
});
mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__21257,handle_BANG_,state){
var map__21258 = p__21257;
var map__21258__$1 = ((((!((map__21258 == null)))?(((((map__21258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21258):map__21258);
var pane = cljs.core.get.call(null,map__21258__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21260 = this;
var map__21260__$1 = ((((!((map__21260 == null)))?(((((map__21260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21260):map__21260);
var pane__$1 = cljs.core.get.call(null,map__21260__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),false);
});

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__21262,handle_BANG_,state){
var map__21263 = p__21262;
var map__21263__$1 = ((((!((map__21263 == null)))?(((((map__21263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21263):map__21263);
var this$ = map__21263__$1;
var pane = cljs.core.get.call(null,map__21263__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21265 = this;
var map__21265__$1 = ((((!((map__21265 == null)))?(((((map__21265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21265):map__21265);
var this$__$1 = map__21265__$1;
var pane__$1 = cljs.core.get.call(null,map__21265__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(!((Date.now() < cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"sync","sync",-624148946)], null))))){
return mecca.audio.framework.process.call(null,mecca.audio.actions.__GT_Loop.call(null,pane__$1),handle_BANG_,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245)], null),true));
} else {
return state;
}
});

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__21267,handle_BANG_,p__21268){
var map__21269 = p__21267;
var map__21269__$1 = ((((!((map__21269 == null)))?(((((map__21269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21269):map__21269);
var this$ = map__21269__$1;
var pane = cljs.core.get.call(null,map__21269__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21270 = p__21268;
var map__21270__$1 = ((((!((map__21270 == null)))?(((((map__21270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21270):map__21270);
var state = map__21270__$1;
var audiocontext = cljs.core.get.call(null,map__21270__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__21273 = this;
var map__21273__$1 = ((((!((map__21273 == null)))?(((((map__21273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21273):map__21273);
var this$__$1 = map__21273__$1;
var pane__$1 = cljs.core.get.call(null,map__21273__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21275 = pane__$1.call(null,state);
var map__21275__$1 = ((((!((map__21275 == null)))?(((((map__21275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21275):map__21275);
var value = cljs.core.get.call(null,map__21275__$1,new cljs.core.Keyword(null,"value","value",305978217));
mecca.audio.synthesis.play_BANG_.call(null,audiocontext,value);

return state;
});

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__21277,handle_BANG_,p__21278){
var map__21279 = p__21277;
var map__21279__$1 = ((((!((map__21279 == null)))?(((((map__21279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21279):map__21279);
var this$ = map__21279__$1;
var pane = cljs.core.get.call(null,map__21279__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21280 = p__21278;
var map__21280__$1 = ((((!((map__21280 == null)))?(((((map__21280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21280):map__21280);
var state = map__21280__$1;
var audiocontext = cljs.core.get.call(null,map__21280__$1,new cljs.core.Keyword(null,"audiocontext","audiocontext",1600179014));
var map__21283 = this;
var map__21283__$1 = ((((!((map__21283 == null)))?(((((map__21283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21283):map__21283);
var this$__$1 = map__21283__$1;
var pane__$1 = cljs.core.get.call(null,map__21283__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__21285 = pane__$1.call(null,state);
var map__21285__$1 = ((((!((map__21285 == null)))?(((((map__21285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21285):map__21285);
var value = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"value","value",305978217));
var looping_QMARK_ = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"looping?","looping?",78344245));
var audio_sync = cljs.core.get.call(null,map__21285__$1,new cljs.core.Keyword(null,"audio-sync","audio-sync",776758174),audiocontext.currentTime);
var duration = mecca.audio.melody.duration.call(null,value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.audio.synthesis.play_from_BANG_.call(null,audiocontext,audio_sync,value);

mecca.audio.processing.schedule_BANG_.call(null,((function (map__21285,map__21285__$1,value,looping_QMARK_,audio_sync,duration,map__21283,map__21283__$1,this$__$1,pane__$1,map__21279,map__21279__$1,this$,pane,map__21280,map__21280__$1,state,audiocontext){
return (function (){
return handle_BANG_.call(null,this$__$1);
});})(map__21285,map__21285__$1,value,looping_QMARK_,audio_sync,duration,map__21283,map__21283__$1,this$__$1,pane__$1,map__21279,map__21279__$1,this$,pane,map__21280,map__21280__$1,state,audiocontext))
,duration);

return mecca.audio.processing.update_syncs.call(null,state,pane__$1,audio_sync,duration);
} else {
return mecca.audio.processing.clear_syncs.call(null,state,pane__$1);
}
});

//# sourceMappingURL=processing.js.map
