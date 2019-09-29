// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('day8.re_frame.undo');
goog.require('mecca.mario');
goog.require('mecca.music');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$key,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$time_DASH_signature,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$instruments,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$bassline,cljs.core.cst$kw$lead,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$current_DASH_position],[(1),(1),"C",(0),(0),(1),(4),false,cljs.core.PersistentVector.EMPTY,41.5,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(180),cljs.core.PersistentVector.EMPTY,(54),null,(0)]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__19565){
var vec__19566 = p__19565;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19566,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19566,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19566,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19566,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample(instrument,pitch);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$instruments,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,((77) - pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__19570){
var vec__19571 = p__19570;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19571,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19571,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19571,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19571,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instrument),((function (vec__19571,_,instrument,time,pitch){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__19571,_,instrument,time,pitch){
return (function (p1__19569_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19569_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - pitch),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__19569_SHARP_))));
});})(vec__19571,_,instrument,time,pitch))
,notes);
});})(vec__19571,_,instrument,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_time_DASH_signature,(function (db,p__19574){
var vec__19575 = p__19574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19575,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19575,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time_DASH_signature,beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__19578){
var vec__19579 = p__19578;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19579,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19579,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__19582){
var vec__19583 = p__19582;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19583,(0),null);
var _e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19583,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_toggle,(function (db,p__19586){
var vec__19587 = p__19586;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19587,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19587,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__19590){
var vec__19591 = p__19590;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19591,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19591,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__19594){
var vec__19595 = p__19594;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19595,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19595,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__19598){
var vec__19599 = p__19598;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19599,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19599,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__19602){
var vec__19603 = p__19602;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19603,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19603,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__19607){
var vec__19608 = p__19607;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19608,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19608,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__19608,_,___$1){
return (function (p1__19606_SHARP_){
return (0.5 + p1__19606_SHARP_);
});})(vec__19608,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__19612){
var vec__19613 = p__19612;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__19613,_,___$1){
return (function (p1__19611_SHARP_){
return (p1__19611_SHARP_ - 0.5);
});})(vec__19613,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__19616){
var vec__19617 = p__19616;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19617,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19617,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__19620){
var vec__19621 = p__19620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19621,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19621,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__19624){
var vec__19625 = p__19624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19625,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19625,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__19629){
var vec__19630 = p__19629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19630,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19630,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__19630,_,___$1){
return (function (p1__19628_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__19628_SHARP_,(3))){
return (1);
} else {
return (p1__19628_SHARP_ + (1));
}
});})(vec__19630,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__19633){
var vec__19634 = p__19633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19634,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19634,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(0));
}));
