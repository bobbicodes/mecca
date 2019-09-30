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
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$key,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$play_DASH_start,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$jumping_QMARK_,cljs.core.cst$kw$time_DASH_signature,cljs.core.cst$kw$instruments,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$bassline,cljs.core.cst$kw$lead,cljs.core.cst$kw$next_DASH_note_DASH_time,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$current_DASH_position,cljs.core.cst$kw$notes_DASH_in_DASH_queue],[(1),(1),"C",(0),(0),(0),(1),false,(4),cljs.core.PersistentVector.EMPTY,(59),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(120),cljs.core.PersistentVector.EMPTY,(54),null,(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__19612){
var vec__19613 = p__19612;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample(instrument,pitch);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$instruments,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,((77) - pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_note,(function (db,p__19618){
var vec__19619 = p__19618;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19619,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19619,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$next_DASH_note_DASH_time,((function (vec__19619,_,___$1){
return (function (p1__19616_SHARP_){
return (((60) / cljs.core.deref((function (){var G__19622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19622) : re_frame.core.subscribe.call(null,G__19622));
})())) + p1__19616_SHARP_);
});})(vec__19619,_,___$1))
),cljs.core.cst$kw$current_DASH_position,((function (vec__19619,_,___$1){
return (function (p1__19617_SHARP_){
return (0.5 + p1__19617_SHARP_);
});})(vec__19619,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schedule_DASH_note,(function (db,p__19623){
var vec__19624 = p__19623;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624,(0),null);
var beat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19624,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes_DASH_in_DASH_queue,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$note,beat,cljs.core.cst$kw$time,time], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__19628){
var vec__19629 = p__19628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19629,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19629,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19629,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19629,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instrument),((function (vec__19629,_,instrument,time,pitch){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__19629,_,instrument,time,pitch){
return (function (p1__19627_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19627_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - pitch),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__19627_SHARP_))));
});})(vec__19629,_,instrument,time,pitch))
,notes);
});})(vec__19629,_,instrument,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_time_DASH_signature,(function (db,p__19632){
var vec__19633 = p__19632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19633,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19633,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time_DASH_signature,beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__19636){
var vec__19637 = p__19636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19637,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19637,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__19640){
var vec__19641 = p__19640;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19641,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19641,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$play_DASH_start,cljs.core.deref(mecca.music.audiocontext).currentTime);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__19644){
var vec__19645 = p__19644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19645,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19645,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__19648){
var vec__19649 = p__19648;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19649,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19649,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__19652){
var vec__19653 = p__19652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19653,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19653,(1),null);
var G__19656_19657 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19656_19657) : re_frame.core.dispatch.call(null,G__19656_19657));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$play_DASH_start,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__19659){
var vec__19660 = p__19659;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19660,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19660,(1),null);
if(((1) < cljs.core.deref((function (){var G__19663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19663) : re_frame.core.subscribe.call(null,G__19663));
})()))){
var G__19664_19666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19664_19666) : re_frame.core.dispatch.call(null,G__19664_19666));
} else {
var G__19665_19667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19665_19667) : re_frame.core.dispatch.call(null,G__19665_19667));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,((function (vec__19660,_,___$1){
return (function (p1__19658_SHARP_){
return (0.5 + p1__19658_SHARP_);
});})(vec__19660,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__19669){
var vec__19670 = p__19669;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19670,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19670,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__19670,_,___$1){
return (function (p1__19668_SHARP_){
return (0.5 + p1__19668_SHARP_);
});})(vec__19670,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_editor,(function (db,p__19673){
var vec__19674 = p__19673;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19674,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19674,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__19678){
var vec__19679 = p__19678;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19679,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19679,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__19679,_,___$1){
return (function (p1__19677_SHARP_){
return (p1__19677_SHARP_ - 0.5);
});})(vec__19679,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__19682){
var vec__19683 = p__19682;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19683,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19683,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__19686){
var vec__19687 = p__19686;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19687,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19687,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_tempo,(function (db,p__19691){
var vec__19692 = p__19691;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19692,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19692,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__19692,_,tempo){
return (function (p1__19690_SHARP_){
return ((8) + p1__19690_SHARP_);
});})(vec__19692,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_tempo,(function (db,p__19696){
var vec__19697 = p__19696;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19697,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19697,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__19697,_,tempo){
return (function (p1__19695_SHARP_){
return (p1__19695_SHARP_ - (8));
});})(vec__19697,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__19700){
var vec__19701 = p__19700;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__19705){
var vec__19706 = p__19705;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19706,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19706,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__19706,_,___$1){
return (function (p1__19704_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__19704_SHARP_,(3))){
return (1);
} else {
return (p1__19704_SHARP_ + (1));
}
});})(vec__19706,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__19709){
var vec__19710 = p__19709;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19710,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19710,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_BANG_,(function (db,p__19713){
var vec__19714 = p__19713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19714,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19714,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_y,(50));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$down_BANG_,(function (db,p__19717){
var vec__19718 = p__19717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_y,(59));
}));
