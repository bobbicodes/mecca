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
var ok_QMARK_ = (function mecca$audio$processing$well_formed_QMARK__$_ok_QMARK_(p__12851){
var map__12852 = p__12851;
var map__12852__$1 = ((((!((map__12852 == null)))?(((((map__12852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12852):map__12852);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12852__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12852__$1,cljs.core.cst$kw$duration);
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
mecca.audio.processing.check = (function mecca$audio$processing$check(p__12854,ok_QMARK_){
var map__12855 = p__12854;
var map__12855__$1 = ((((!((map__12855 == null)))?(((((map__12855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12855):map__12855);
var return$ = map__12855__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12855__$1,cljs.core.cst$kw$value);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12855__$1,cljs.core.cst$kw$error);
if(cljs.core.truth_(error)){
return return$;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(return$,cljs.core.cst$kw$error,(ok_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ok_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : ok_QMARK_.call(null,value)));
}
});
mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Stop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12857,handle_BANG_,state){
var map__12858 = p__12857;
var map__12858__$1 = ((((!((map__12858 == null)))?(((((map__12858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12858):map__12858);
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12858__$1,cljs.core.cst$kw$target);
var map__12860 = this;
var map__12860__$1 = ((((!((map__12860 == null)))?(((((map__12860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12860):map__12860);
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12860__$1,cljs.core.cst$kw$target);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$looping_QMARK_], null),false);
});

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Play.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12862,handle_BANG_,state){
var map__12863 = p__12862;
var map__12863__$1 = ((((!((map__12863 == null)))?(((((map__12863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12863):map__12863);
var this$ = map__12863__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12863__$1,cljs.core.cst$kw$target);
var map__12865 = this;
var map__12865__$1 = ((((!((map__12865 == null)))?(((((map__12865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12865):map__12865);
var this$__$1 = map__12865__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12865__$1,cljs.core.cst$kw$target);
if(!((Date.now() < cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$sync], null))))){
return mecca.audio.framework.process(mecca.audio.actions.__GT_Loop(pane__$1),handle_BANG_,cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane__$1,cljs.core.cst$kw$looping_QMARK_], null),true));
} else {
return state;
}
});

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.PlayOnce.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12867,handle_BANG_,p__12868){
var map__12869 = p__12867;
var map__12869__$1 = ((((!((map__12869 == null)))?(((((map__12869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12869):map__12869);
var this$ = map__12869__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12869__$1,cljs.core.cst$kw$target);
var map__12870 = p__12868;
var map__12870__$1 = ((((!((map__12870 == null)))?(((((map__12870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12870):map__12870);
var state = map__12870__$1;
var audiocontext = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12870__$1,cljs.core.cst$kw$audiocontext);
var map__12873 = this;
var map__12873__$1 = ((((!((map__12873 == null)))?(((((map__12873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12873):map__12873);
var this$__$1 = map__12873__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12873__$1,cljs.core.cst$kw$target);
var map__12875 = (pane__$1.cljs$core$IFn$_invoke$arity$1 ? pane__$1.cljs$core$IFn$_invoke$arity$1(state) : pane__$1.call(null,state));
var map__12875__$1 = ((((!((map__12875 == null)))?(((((map__12875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12875):map__12875);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12875__$1,cljs.core.cst$kw$value);
mecca.audio.synthesis.play_BANG_(audiocontext,value);

return state;
});

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$ = cljs.core.PROTOCOL_SENTINEL;

mecca.audio.actions.Loop.prototype.mecca$audio$framework$Action$process$arity$3 = (function (p__12877,handle_BANG_,p__12878){
var map__12879 = p__12877;
var map__12879__$1 = ((((!((map__12879 == null)))?(((((map__12879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12879):map__12879);
var this$ = map__12879__$1;
var pane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12879__$1,cljs.core.cst$kw$target);
var map__12880 = p__12878;
var map__12880__$1 = ((((!((map__12880 == null)))?(((((map__12880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12880):map__12880);
var state = map__12880__$1;
var audiocontext = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12880__$1,cljs.core.cst$kw$audiocontext);
var map__12883 = this;
var map__12883__$1 = ((((!((map__12883 == null)))?(((((map__12883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12883):map__12883);
var this$__$1 = map__12883__$1;
var pane__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12883__$1,cljs.core.cst$kw$target);
var map__12885 = (pane__$1.cljs$core$IFn$_invoke$arity$1 ? pane__$1.cljs$core$IFn$_invoke$arity$1(state) : pane__$1.call(null,state));
var map__12885__$1 = ((((!((map__12885 == null)))?(((((map__12885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12885):map__12885);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12885__$1,cljs.core.cst$kw$value);
var looping_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12885__$1,cljs.core.cst$kw$looping_QMARK_);
var audio_sync = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12885__$1,cljs.core.cst$kw$audio_DASH_sync,audiocontext.currentTime);
var duration = mecca.audio.melody.duration(value);
if(cljs.core.truth_(looping_QMARK_)){
mecca.audio.synthesis.play_from_BANG_(audiocontext,audio_sync,value);

mecca.audio.processing.schedule_BANG_(((function (map__12885,map__12885__$1,value,looping_QMARK_,audio_sync,duration,map__12883,map__12883__$1,this$__$1,pane__$1,map__12879,map__12879__$1,this$,pane,map__12880,map__12880__$1,state,audiocontext){
return (function (){
return (handle_BANG_.cljs$core$IFn$_invoke$arity$1 ? handle_BANG_.cljs$core$IFn$_invoke$arity$1(this$__$1) : handle_BANG_.call(null,this$__$1));
});})(map__12885,map__12885__$1,value,looping_QMARK_,audio_sync,duration,map__12883,map__12883__$1,this$__$1,pane__$1,map__12879,map__12879__$1,this$,pane,map__12880,map__12880__$1,state,audiocontext))
,duration);

return mecca.audio.processing.update_syncs(state,pane__$1,audio_sync,duration);
} else {
return mecca.audio.processing.clear_syncs(state,pane__$1);
}
});
