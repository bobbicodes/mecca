// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('re_pressed.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('day8.re_frame.undo');
goog.require('mecca.mario');
goog.require('mecca.songs.megaman');
goog.require('mecca.songs.zelda');
goog.require('mecca.songs.city');
goog.require('mecca.music');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$samples,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$sharp_QMARK_,cljs.core.cst$kw$eraser_QMARK_,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$play_DASH_start,cljs.core.cst$kw$current_DASH_note,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$repeat_QMARK_,cljs.core.cst$kw$file_DASH_upload,cljs.core.cst$kw$jumping_QMARK_,cljs.core.cst$kw$time_DASH_signature,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$loop_DASH_end,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$notes,cljs.core.cst$kw$next_DASH_note_DASH_time,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$audio_DASH_context,cljs.core.cst$kw$tempo,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$xml,cljs.core.cst$kw$current_DASH_position,cljs.core.cst$kw$notes_DASH_in_DASH_queue],[null,(1),(1),false,false,(0),(0),(0),(0),(1),false,"",false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(new AudioContext()),(120),(16),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__19957){
var vec__19958 = p__19957;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19958,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19958,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19958,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,((function (vec__19958,_,time,pitch){
return (function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__19958,_,time,pitch){
return (function (p1__19956_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19956_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__19956_SHARP_))));
});})(vec__19958,_,time,pitch))
,note);
});})(vec__19958,_,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file_DASH_upload,(function (db,p__19961){
var vec__19962 = p__19961;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19962,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19962,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$file_DASH_upload,file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_samples,(function (db,p__19965){
var vec__19966 = p__19965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19966,(0),null);
var samples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19966,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$samples,samples);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_time_DASH_signature,(function (db,p__19969){
var vec__19970 = p__19969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19970,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19970,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time_DASH_signature,beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_notes,(function (db,p__19973){
var vec__19974 = p__19973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19974,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19974,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__19977){
var vec__19978 = p__19977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19978,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19978,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__19981){
var vec__19982 = p__19981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19982,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19982,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$play_DASH_start,cljs.core.deref((function (){var G__19985 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19985) : re_frame.core.subscribe.call(null,G__19985));
})()).currentTime),cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_on,(function (db,p__19986){
var vec__19987 = p__19986;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19987,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19987,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_toggle,(function (db,p__19990){
var vec__19991 = p__19990;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19991,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19991,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$eraser_DASH_toggle,(function (db,p__19994){
var vec__19995 = p__19994;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19995,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19995,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$eraser_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_off,(function (db,p__19998){
var vec__19999 = p__19998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19999,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19999,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,(function (db,p__20002){
var vec__20003 = p__20002;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20003,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20003,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stop,(function (db,p__20006){
var vec__20007 = p__20006;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20007,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20007,(1),null);
var G__20010_20011 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20010_20011) : re_frame.core.dispatch.call(null,G__20010_20011));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false),cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__20012){
var vec__20013 = p__20012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20013,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20013,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__20016){
var vec__20017 = p__20016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20017,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20017,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__20020){
var vec__20021 = p__20020;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20021,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20021,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__20026){
var vec__20027 = p__20026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20027,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20027,(1),null);
var notes = (function (){var G__20030 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20030) : re_frame.core.subscribe.call(null,G__20030));
})();
var beat = (function (){var G__20031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20031) : re_frame.core.subscribe.call(null,G__20031));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__20027,_,___$1){
return (function (p1__20024_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20024_SHARP_));
});})(notes,beat,vec__20027,_,___$1))
,cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
var G__20032_20033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor,0.5], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20032_20033) : re_frame.core.dispatch.call(null,G__20032_20033));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,((function (notes,beat,to_play,vec__20027,_,___$1){
return (function (p1__20025_SHARP_){
return (0.5 + p1__20025_SHARP_);
});})(notes,beat,to_play,vec__20027,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__20035){
var vec__20036 = p__20035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20036,(0),null);
var beats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20036,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__20036,_,beats){
return (function (p1__20034_SHARP_){
return (beats + p1__20034_SHARP_);
});})(vec__20036,_,beats))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_mario,(function (db,p__20040){
var vec__20041 = p__20040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20041,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20041,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_x,((function (vec__20041,_,___$1){
return (function (p1__20039_SHARP_){
return ((10) + p1__20039_SHARP_);
});})(vec__20041,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_editor,(function (db,p__20044){
var vec__20045 = p__20044;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20045,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20045,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,(1)),cljs.core.cst$kw$mario_DASH_x,(16));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__20049){
var vec__20050 = p__20049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20050,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20050,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__20050,_,___$1){
return (function (p1__20048_SHARP_){
return (p1__20048_SHARP_ - 0.5);
});})(vec__20050,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__20053){
var vec__20054 = p__20053;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20054,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20054,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__20057){
var vec__20058 = p__20057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20058,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20058,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_tempo,(function (db,p__20062){
var vec__20063 = p__20062;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20063,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20063,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__20063,_,tempo){
return (function (p1__20061_SHARP_){
return ((8) + p1__20061_SHARP_);
});})(vec__20063,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_tempo,(function (db,p__20067){
var vec__20068 = p__20067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20068,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20068,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__20068,_,tempo){
return (function (p1__20066_SHARP_){
return (p1__20066_SHARP_ - (8));
});})(vec__20068,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__20071){
var vec__20072 = p__20071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20072,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20072,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$repeat_DASH_toggle,(function (db,p__20075){
var vec__20076 = p__20075;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20076,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20076,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$repeat_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_loop_DASH_end,(function (db,p__20079){
var vec__20080 = p__20079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20080,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20080,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loop_DASH_end,x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_note,(function (db,p__20084){
var vec__20085 = p__20084;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20085,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20085,(1),null);
var tempo = (function (){var G__20088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20088) : re_frame.core.subscribe.call(null,G__20088));
})();
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_note,cljs.core.inc),cljs.core.cst$kw$next_DASH_note_DASH_time,((function (tempo,seconds_per_beat,vec__20085,_,___$1){
return (function (p1__20083_SHARP_){
return (p1__20083_SHARP_ + seconds_per_beat);
});})(tempo,seconds_per_beat,vec__20085,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schedule_DASH_note,(function (db,p__20090){
var vec__20091 = p__20090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20091,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20091,(1),null);
var notes = (function (){var G__20094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20094) : re_frame.core.subscribe.call(null,G__20094));
})();
var beat = (function (){var G__20095 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20095) : re_frame.core.subscribe.call(null,G__20095));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__20091,_,___$1){
return (function (p1__20089_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20089_SHARP_));
});})(notes,beat,vec__20091,_,___$1))
,cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes_DASH_in_DASH_queue,cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__20096){
var vec__20097 = p__20096;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20097,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20097,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20097,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20097,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__20100 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20100) : re_frame.core.subscribe.call(null,G__20100));
})()).state,"suspended")){
cljs.core.deref((function (){var G__20101 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio_DASH_context], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20101) : re_frame.core.subscribe.call(null,G__20101));
})()).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref((function (){var G__20102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20102) : re_frame.core.subscribe.call(null,G__20102));
})()))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,(cljs.core.truth_(cljs.core.deref((function (){var G__20103 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20103) : re_frame.core.subscribe.call(null,G__20103));
})()))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__20107){
var vec__20108 = p__20107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20108,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20108,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref((function (){var G__20113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20113) : re_frame.core.subscribe.call(null,G__20113));
})()));
if(and__3938__auto__){
return cljs.core.deref((function (){var G__20114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20114) : re_frame.core.subscribe.call(null,G__20114));
})());
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__20108,_,___$1){
return (function (p1__20104_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20104_SHARP_,(12))){
return (0);
} else {
return (p1__20104_SHARP_ + (1));
}
});})(vec__20108,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,((function (vec__20108,_,___$1){
return (function (p1__20105_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),p1__20105_SHARP_)){
return (0);
} else {
return (p1__20105_SHARP_ + (1));
}
});})(vec__20108,_,___$1))
),cljs.core.cst$kw$mario_DASH_y,((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref((function (){var G__20115 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20115) : re_frame.core.subscribe.call(null,G__20115));
})()))));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__20108,_,___$1){
return (function (p1__20106_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20106_SHARP_,(12))){
return (0);
} else {
return (p1__20106_SHARP_ + (1));
}
});})(vec__20108,_,___$1))
);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_BANG_,(function (db,p__20116){
var vec__20117 = p__20116;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20117,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20117,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$submit_DASH_xml,(function (db,p__20120){
var vec__20121 = p__20120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20121,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20121,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$xml,xml);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_song,(function (db,p__20124){
var vec__20125 = p__20124;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20125,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20125,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_megaman,(function (db,p__20128){
var vec__20129 = p__20128;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20129,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20129,(1),null);
var G__20132_20133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(260)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20132_20133) : re_frame.core.dispatch.call(null,G__20132_20133));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_castle,(function (db,p__20134){
var vec__20135 = p__20134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20135,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20135,(1),null);
var G__20138_20139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(150)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20138_20139) : re_frame.core.dispatch.call(null,G__20138_20139));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.city.city);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_zelda,(function (db,p__20140){
var vec__20141 = p__20140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20141,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20141,(1),null);
var G__20144_20145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(390)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20144_20145) : re_frame.core.dispatch.call(null,G__20144_20145));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.zelda.zelda);
}));
