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
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$sharp_QMARK_,cljs.core.cst$kw$key,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$play_DASH_start,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$jumping_QMARK_,cljs.core.cst$kw$time_DASH_signature,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$instruments,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$bassline,cljs.core.cst$kw$lead,cljs.core.cst$kw$next_DASH_note_DASH_time,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$current_DASH_position,cljs.core.cst$kw$notes_DASH_in_DASH_queue],[(1),(1),false,"C",(0),(0),(0),(1),false,(4),false,cljs.core.PersistentVector.EMPTY,(59),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(120),cljs.core.PersistentVector.EMPTY,(54),null,(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__19614){
var vec__19615 = p__19614;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19615,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19615,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19615,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19615,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref((function (){var G__19618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19618) : re_frame.core.subscribe.call(null,G__19618));
})()))?(0.5 + pitch):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$instruments,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,(cljs.core.truth_(cljs.core.deref((function (){var G__19619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19619) : re_frame.core.subscribe.call(null,G__19619));
})()))?(0.5 + pitch):pitch),cljs.core.cst$kw$sharp_QMARK_,cljs.core.deref((function (){var G__19620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19620) : re_frame.core.subscribe.call(null,G__19620));
})())], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_song,(function (db,p__19621){
var vec__19622 = p__19621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19622,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19622,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instruments,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__19626){
var vec__19627 = p__19626;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19627,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19627,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19627,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19627,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instrument),((function (vec__19627,_,instrument,time,pitch){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__19627,_,instrument,time,pitch){
return (function (p1__19625_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19625_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - pitch),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__19625_SHARP_))));
});})(vec__19627,_,instrument,time,pitch))
,notes);
});})(vec__19627,_,instrument,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_time_DASH_signature,(function (db,p__19630){
var vec__19631 = p__19630;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19631,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19631,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time_DASH_signature,beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__19634){
var vec__19635 = p__19634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19635,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19635,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__19638){
var vec__19639 = p__19638;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$play_DASH_start,cljs.core.deref(mecca.music.audiocontext).currentTime),cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_on,(function (db,p__19642){
var vec__19643 = p__19642;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19643,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19643,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_toggle,(function (db,p__19646){
var vec__19647 = p__19646;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19647,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19647,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_off,(function (db,p__19650){
var vec__19651 = p__19650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19651,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19651,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,(function (db,p__19654){
var vec__19655 = p__19654;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19655,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19655,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stop,(function (db,p__19658){
var vec__19659 = p__19658;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19659,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19659,(1),null);
var G__19662_19663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19662_19663) : re_frame.core.dispatch.call(null,G__19662_19663));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false),cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__19664){
var vec__19665 = p__19664;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19665,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19665,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__19668){
var vec__19669 = p__19668;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19669,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19669,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__19672){
var vec__19673 = p__19672;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19673,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19673,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__19678){
var vec__19679 = p__19678;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19679,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19679,(1),null);
var notes = cljs.core.deref((function (){var G__19682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19682) : re_frame.core.subscribe.call(null,G__19682));
})());
var beat = cljs.core.deref((function (){var G__19683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19683) : re_frame.core.subscribe.call(null,G__19683));
})());
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__19679,_,___$1){
return (function (p1__19676_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + beat),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19676_SHARP_));
});})(notes,beat,vec__19679,_,___$1))
,notes);
if(((4) < beat)){
var G__19684_19685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19684_19685) : re_frame.core.dispatch.call(null,G__19684_19685));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,((function (notes,beat,to_play,vec__19679,_,___$1){
return (function (p1__19677_SHARP_){
return (0.5 + p1__19677_SHARP_);
});})(notes,beat,to_play,vec__19679,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__19687){
var vec__19688 = p__19687;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19688,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19688,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__19688,_,___$1){
return (function (p1__19686_SHARP_){
return ((1) + p1__19686_SHARP_);
});})(vec__19688,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_mario,(function (db,p__19691){
var vec__19692 = p__19691;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19692,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19692,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_x,x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_editor,(function (db,p__19695){
var vec__19696 = p__19695;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19696,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19696,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__19700){
var vec__19701 = p__19700;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__19701,_,___$1){
return (function (p1__19699_SHARP_){
return (p1__19699_SHARP_ - 0.5);
});})(vec__19701,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__19704){
var vec__19705 = p__19704;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19705,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19705,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__19708){
var vec__19709 = p__19708;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19709,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19709,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_tempo,(function (db,p__19713){
var vec__19714 = p__19713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19714,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19714,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__19714,_,tempo){
return (function (p1__19712_SHARP_){
return ((8) + p1__19712_SHARP_);
});})(vec__19714,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_tempo,(function (db,p__19718){
var vec__19719 = p__19718;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19719,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19719,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__19719,_,tempo){
return (function (p1__19717_SHARP_){
return (p1__19717_SHARP_ - (8));
});})(vec__19719,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__19722){
var vec__19723 = p__19722;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19723,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19723,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__19727){
var vec__19728 = p__19727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19728,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19728,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__19728,_,___$1){
return (function (p1__19726_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__19726_SHARP_,(3))){
return (1);
} else {
return (p1__19726_SHARP_ + (1));
}
});})(vec__19728,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__19731){
var vec__19732 = p__19731;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19732,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19732,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_BANG_,(function (db,p__19735){
var vec__19736 = p__19735;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19736,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_y,(30));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$down_BANG_,(function (db,p__19739){
var vec__19740 = p__19739;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19740,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19740,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_y,(59));
}));
