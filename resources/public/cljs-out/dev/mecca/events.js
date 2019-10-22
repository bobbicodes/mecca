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
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$sharp_QMARK_,cljs.core.cst$kw$eraser_QMARK_,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$play_DASH_start,cljs.core.cst$kw$current_DASH_note,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$repeat_QMARK_,cljs.core.cst$kw$jumping_QMARK_,cljs.core.cst$kw$time_DASH_signature,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$loop_DASH_end,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$notes,cljs.core.cst$kw$next_DASH_note_DASH_time,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$xml,cljs.core.cst$kw$current_DASH_position,cljs.core.cst$kw$notes_DASH_in_DASH_queue],[(1),(1),false,false,(0),(0),(0),(0),(1),false,false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(120),(54),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__20218){
var vec__20219 = p__20218;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20219,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20219,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20219,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,((function (vec__20219,_,time,pitch){
return (function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__20219,_,time,pitch){
return (function (p1__20217_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20217_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__20217_SHARP_))));
});})(vec__20219,_,time,pitch))
,note);
});})(vec__20219,_,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_time_DASH_signature,(function (db,p__20222){
var vec__20223 = p__20222;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20223,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20223,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time_DASH_signature,beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_notes,(function (db,p__20226){
var vec__20227 = p__20226;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20227,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20227,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__20230){
var vec__20231 = p__20230;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20231,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20231,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__20234){
var vec__20235 = p__20234;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$play_DASH_start,cljs.core.deref(mecca.music.audiocontext).currentTime),cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_on,(function (db,p__20238){
var vec__20239 = p__20238;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20239,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20239,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_toggle,(function (db,p__20242){
var vec__20243 = p__20242;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20243,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20243,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$eraser_DASH_toggle,(function (db,p__20246){
var vec__20247 = p__20246;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20247,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20247,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$eraser_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_off,(function (db,p__20250){
var vec__20251 = p__20250;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20251,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20251,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,(function (db,p__20254){
var vec__20255 = p__20254;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20255,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20255,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stop,(function (db,p__20258){
var vec__20259 = p__20258;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20259,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20259,(1),null);
var G__20262_20263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20262_20263) : re_frame.core.dispatch.call(null,G__20262_20263));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false),cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__20264){
var vec__20265 = p__20264;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20265,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20265,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__20268){
var vec__20269 = p__20268;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20269,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20269,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__20272){
var vec__20273 = p__20272;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20273,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20273,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__20278){
var vec__20279 = p__20278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20279,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20279,(1),null);
var notes = (function (){var G__20282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20282) : re_frame.core.subscribe.call(null,G__20282));
})();
var beat = (function (){var G__20283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20283) : re_frame.core.subscribe.call(null,G__20283));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__20279,_,___$1){
return (function (p1__20276_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20276_SHARP_));
});})(notes,beat,vec__20279,_,___$1))
,cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
var G__20284_20285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20284_20285) : re_frame.core.dispatch.call(null,G__20284_20285));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,((function (notes,beat,to_play,vec__20279,_,___$1){
return (function (p1__20277_SHARP_){
return (0.5 + p1__20277_SHARP_);
});})(notes,beat,to_play,vec__20279,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__20287){
var vec__20288 = p__20287;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20288,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20288,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__20288,_,___$1){
return (function (p1__20286_SHARP_){
return (0.5 + p1__20286_SHARP_);
});})(vec__20288,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_mario,(function (db,p__20292){
var vec__20293 = p__20292;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20293,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20293,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_x,((function (vec__20293,_,___$1){
return (function (p1__20291_SHARP_){
return ((10) + p1__20291_SHARP_);
});})(vec__20293,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_editor,(function (db,p__20296){
var vec__20297 = p__20296;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20297,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20297,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__20301){
var vec__20302 = p__20301;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20302,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20302,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__20302,_,___$1){
return (function (p1__20300_SHARP_){
return (p1__20300_SHARP_ - 0.5);
});})(vec__20302,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__20305){
var vec__20306 = p__20305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20306,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20306,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__20309){
var vec__20310 = p__20309;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20310,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20310,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_tempo,(function (db,p__20314){
var vec__20315 = p__20314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20315,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20315,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__20315,_,tempo){
return (function (p1__20313_SHARP_){
return ((8) + p1__20313_SHARP_);
});})(vec__20315,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_tempo,(function (db,p__20319){
var vec__20320 = p__20319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20320,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20320,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__20320,_,tempo){
return (function (p1__20318_SHARP_){
return (p1__20318_SHARP_ - (8));
});})(vec__20320,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__20323){
var vec__20324 = p__20323;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20324,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20324,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$repeat_DASH_toggle,(function (db,p__20327){
var vec__20328 = p__20327;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20328,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20328,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$repeat_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_loop_DASH_end,(function (db,p__20331){
var vec__20332 = p__20331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20332,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20332,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loop_DASH_end,x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_note,(function (db,p__20336){
var vec__20337 = p__20336;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20337,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20337,(1),null);
var tempo = (function (){var G__20340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20340) : re_frame.core.subscribe.call(null,G__20340));
})();
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_note,cljs.core.inc),cljs.core.cst$kw$next_DASH_note_DASH_time,((function (tempo,seconds_per_beat,vec__20337,_,___$1){
return (function (p1__20335_SHARP_){
return (p1__20335_SHARP_ + seconds_per_beat);
});})(tempo,seconds_per_beat,vec__20337,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schedule_DASH_note,(function (db,p__20342){
var vec__20343 = p__20342;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20343,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20343,(1),null);
var notes = (function (){var G__20346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20346) : re_frame.core.subscribe.call(null,G__20346));
})();
var beat = (function (){var G__20347 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20347) : re_frame.core.subscribe.call(null,G__20347));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__20343,_,___$1){
return (function (p1__20341_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20341_SHARP_));
});})(notes,beat,vec__20343,_,___$1))
,cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes_DASH_in_DASH_queue,cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__20348){
var vec__20349 = p__20348;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20349,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20349,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20349,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20349,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref((function (){var G__20352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20352) : re_frame.core.subscribe.call(null,G__20352));
})()))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,(cljs.core.truth_(cljs.core.deref((function (){var G__20353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20353) : re_frame.core.subscribe.call(null,G__20353));
})()))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__20357){
var vec__20358 = p__20357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20358,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20358,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref((function (){var G__20363 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20363) : re_frame.core.subscribe.call(null,G__20363));
})()));
if(and__3938__auto__){
return cljs.core.deref((function (){var G__20364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20364) : re_frame.core.subscribe.call(null,G__20364));
})());
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__20358,_,___$1){
return (function (p1__20354_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20354_SHARP_,(12))){
return (0);
} else {
return (p1__20354_SHARP_ + (1));
}
});})(vec__20358,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,((function (vec__20358,_,___$1){
return (function (p1__20355_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),p1__20355_SHARP_)){
return (0);
} else {
return (p1__20355_SHARP_ + (1));
}
});})(vec__20358,_,___$1))
),cljs.core.cst$kw$mario_DASH_y,((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref((function (){var G__20365 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20365) : re_frame.core.subscribe.call(null,G__20365));
})()))));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__20358,_,___$1){
return (function (p1__20356_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20356_SHARP_,(12))){
return (0);
} else {
return (p1__20356_SHARP_ + (1));
}
});})(vec__20358,_,___$1))
);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_BANG_,(function (db,p__20366){
var vec__20367 = p__20366;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20367,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20367,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$submit_DASH_xml,(function (db,p__20370){
var vec__20371 = p__20370;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20371,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20371,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$xml,xml);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_song,(function (db,p__20374){
var vec__20375 = p__20374;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20375,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20375,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_megaman,(function (db,p__20378){
var vec__20379 = p__20378;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20379,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20379,(1),null);
var G__20382_20383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(260)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20382_20383) : re_frame.core.dispatch.call(null,G__20382_20383));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_castle,(function (db,p__20384){
var vec__20385 = p__20384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20385,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20385,(1),null);
var G__20388_20389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(150)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20388_20389) : re_frame.core.dispatch.call(null,G__20388_20389));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.city.city);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_zelda,(function (db,p__20390){
var vec__20391 = p__20390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20391,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20391,(1),null);
var G__20394_20395 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(150)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20394_20395) : re_frame.core.dispatch.call(null,G__20394_20395));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.zelda.zelda);
}));
