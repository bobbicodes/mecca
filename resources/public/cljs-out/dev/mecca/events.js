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
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$sharp_QMARK_,cljs.core.cst$kw$eraser_QMARK_,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$play_DASH_start,cljs.core.cst$kw$current_DASH_note,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$repeat_QMARK_,cljs.core.cst$kw$file_DASH_upload,cljs.core.cst$kw$jumping_QMARK_,cljs.core.cst$kw$time_DASH_signature,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$loop_DASH_end,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$notes,cljs.core.cst$kw$next_DASH_note_DASH_time,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$xml,cljs.core.cst$kw$current_DASH_position,cljs.core.cst$kw$notes_DASH_in_DASH_queue],[(1),(1),false,false,(0),(0),(0),(0),(1),false,"",false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(120),(54),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__20147){
var vec__20148 = p__20147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,((function (vec__20148,_,time,pitch){
return (function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__20148,_,time,pitch){
return (function (p1__20146_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20146_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__20146_SHARP_))));
});})(vec__20148,_,time,pitch))
,note);
});})(vec__20148,_,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$upload_DASH_file,(function (db,p__20151){
var vec__20152 = p__20151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20152,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20152,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$file_DASH_upload,file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_time_DASH_signature,(function (db,p__20155){
var vec__20156 = p__20155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time_DASH_signature,beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_notes,(function (db,p__20159){
var vec__20160 = p__20159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20160,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20160,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__20163){
var vec__20164 = p__20163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20164,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20164,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__20167){
var vec__20168 = p__20167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20168,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20168,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$play_DASH_start,cljs.core.deref(mecca.music.audiocontext).currentTime),cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_on,(function (db,p__20171){
var vec__20172 = p__20171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20172,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20172,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_toggle,(function (db,p__20175){
var vec__20176 = p__20175;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20176,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20176,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$eraser_DASH_toggle,(function (db,p__20179){
var vec__20180 = p__20179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20180,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20180,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$eraser_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_off,(function (db,p__20183){
var vec__20184 = p__20183;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20184,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20184,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,(function (db,p__20187){
var vec__20188 = p__20187;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20188,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20188,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stop,(function (db,p__20191){
var vec__20192 = p__20191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20192,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20192,(1),null);
var G__20195_20196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20195_20196) : re_frame.core.dispatch.call(null,G__20195_20196));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false),cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__20197){
var vec__20198 = p__20197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20198,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20198,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__20201){
var vec__20202 = p__20201;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20202,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20202,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__20205){
var vec__20206 = p__20205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20206,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20206,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__20211){
var vec__20212 = p__20211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20212,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20212,(1),null);
var notes = (function (){var G__20215 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20215) : re_frame.core.subscribe.call(null,G__20215));
})();
var beat = (function (){var G__20216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20216) : re_frame.core.subscribe.call(null,G__20216));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__20212,_,___$1){
return (function (p1__20209_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20209_SHARP_));
});})(notes,beat,vec__20212,_,___$1))
,cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
var G__20217_20218 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20217_20218) : re_frame.core.dispatch.call(null,G__20217_20218));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,((function (notes,beat,to_play,vec__20212,_,___$1){
return (function (p1__20210_SHARP_){
return (0.5 + p1__20210_SHARP_);
});})(notes,beat,to_play,vec__20212,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__20220){
var vec__20221 = p__20220;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20221,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20221,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__20221,_,___$1){
return (function (p1__20219_SHARP_){
return (0.5 + p1__20219_SHARP_);
});})(vec__20221,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_mario,(function (db,p__20225){
var vec__20226 = p__20225;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20226,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20226,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_x,((function (vec__20226,_,___$1){
return (function (p1__20224_SHARP_){
return ((10) + p1__20224_SHARP_);
});})(vec__20226,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_editor,(function (db,p__20229){
var vec__20230 = p__20229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20230,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20230,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__20234){
var vec__20235 = p__20234;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__20235,_,___$1){
return (function (p1__20233_SHARP_){
return (p1__20233_SHARP_ - 0.5);
});})(vec__20235,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__20238){
var vec__20239 = p__20238;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20239,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20239,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__20242){
var vec__20243 = p__20242;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20243,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20243,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_tempo,(function (db,p__20247){
var vec__20248 = p__20247;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20248,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20248,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__20248,_,tempo){
return (function (p1__20246_SHARP_){
return ((8) + p1__20246_SHARP_);
});})(vec__20248,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_tempo,(function (db,p__20252){
var vec__20253 = p__20252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20253,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20253,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__20253,_,tempo){
return (function (p1__20251_SHARP_){
return (p1__20251_SHARP_ - (8));
});})(vec__20253,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__20256){
var vec__20257 = p__20256;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20257,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20257,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$repeat_DASH_toggle,(function (db,p__20260){
var vec__20261 = p__20260;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20261,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20261,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$repeat_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_loop_DASH_end,(function (db,p__20264){
var vec__20265 = p__20264;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20265,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20265,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loop_DASH_end,x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_note,(function (db,p__20269){
var vec__20270 = p__20269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(1),null);
var tempo = (function (){var G__20273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20273) : re_frame.core.subscribe.call(null,G__20273));
})();
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_note,cljs.core.inc),cljs.core.cst$kw$next_DASH_note_DASH_time,((function (tempo,seconds_per_beat,vec__20270,_,___$1){
return (function (p1__20268_SHARP_){
return (p1__20268_SHARP_ + seconds_per_beat);
});})(tempo,seconds_per_beat,vec__20270,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schedule_DASH_note,(function (db,p__20275){
var vec__20276 = p__20275;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20276,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20276,(1),null);
var notes = (function (){var G__20279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20279) : re_frame.core.subscribe.call(null,G__20279));
})();
var beat = (function (){var G__20280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20280) : re_frame.core.subscribe.call(null,G__20280));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__20276,_,___$1){
return (function (p1__20274_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20274_SHARP_));
});})(notes,beat,vec__20276,_,___$1))
,cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes_DASH_in_DASH_queue,cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__20281){
var vec__20282 = p__20281;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20282,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20282,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20282,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20282,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref((function (){var G__20285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20285) : re_frame.core.subscribe.call(null,G__20285));
})()))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,(cljs.core.truth_(cljs.core.deref((function (){var G__20286 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20286) : re_frame.core.subscribe.call(null,G__20286));
})()))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__20290){
var vec__20291 = p__20290;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20291,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20291,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref((function (){var G__20296 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20296) : re_frame.core.subscribe.call(null,G__20296));
})()));
if(and__3938__auto__){
return cljs.core.deref((function (){var G__20297 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20297) : re_frame.core.subscribe.call(null,G__20297));
})());
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__20291,_,___$1){
return (function (p1__20287_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20287_SHARP_,(12))){
return (0);
} else {
return (p1__20287_SHARP_ + (1));
}
});})(vec__20291,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,((function (vec__20291,_,___$1){
return (function (p1__20288_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),p1__20288_SHARP_)){
return (0);
} else {
return (p1__20288_SHARP_ + (1));
}
});})(vec__20291,_,___$1))
),cljs.core.cst$kw$mario_DASH_y,((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref((function (){var G__20298 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20298) : re_frame.core.subscribe.call(null,G__20298));
})()))));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__20291,_,___$1){
return (function (p1__20289_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20289_SHARP_,(12))){
return (0);
} else {
return (p1__20289_SHARP_ + (1));
}
});})(vec__20291,_,___$1))
);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_BANG_,(function (db,p__20299){
var vec__20300 = p__20299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20300,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20300,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$submit_DASH_xml,(function (db,p__20303){
var vec__20304 = p__20303;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20304,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20304,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$xml,xml);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_song,(function (db,p__20307){
var vec__20308 = p__20307;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20308,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20308,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_megaman,(function (db,p__20311){
var vec__20312 = p__20311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20312,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20312,(1),null);
var G__20315_20316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(260)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20315_20316) : re_frame.core.dispatch.call(null,G__20315_20316));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_castle,(function (db,p__20317){
var vec__20318 = p__20317;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20318,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20318,(1),null);
var G__20321_20322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(150)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20321_20322) : re_frame.core.dispatch.call(null,G__20321_20322));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.city.city);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_zelda,(function (db,p__20323){
var vec__20324 = p__20323;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20324,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20324,(1),null);
var G__20327_20328 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(150)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20327_20328) : re_frame.core.dispatch.call(null,G__20327_20328));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.zelda.zelda);
}));
