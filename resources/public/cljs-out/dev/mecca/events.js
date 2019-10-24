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
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$sharp_QMARK_,cljs.core.cst$kw$eraser_QMARK_,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$play_DASH_start,cljs.core.cst$kw$current_DASH_note,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$repeat_QMARK_,cljs.core.cst$kw$file_DASH_upload,cljs.core.cst$kw$jumping_QMARK_,cljs.core.cst$kw$time_DASH_signature,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$loop_DASH_end,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$notes,cljs.core.cst$kw$next_DASH_note_DASH_time,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$xml,cljs.core.cst$kw$current_DASH_position,cljs.core.cst$kw$notes_DASH_in_DASH_queue],[(1),(1),false,false,(0),(0),(0),(0),(1),false,"",false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(120),(16),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__20191){
var vec__20192 = p__20191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20192,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20192,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20192,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,((function (vec__20192,_,time,pitch){
return (function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__20192,_,time,pitch){
return (function (p1__20190_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20190_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__20190_SHARP_))));
});})(vec__20192,_,time,pitch))
,note);
});})(vec__20192,_,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file_DASH_upload,(function (db,p__20195){
var vec__20196 = p__20195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20196,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20196,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$file_DASH_upload,file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_time_DASH_signature,(function (db,p__20199){
var vec__20200 = p__20199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20200,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20200,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time_DASH_signature,beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_notes,(function (db,p__20203){
var vec__20204 = p__20203;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20204,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20204,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__20207){
var vec__20208 = p__20207;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20208,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20208,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__20211){
var vec__20212 = p__20211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20212,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20212,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$play_DASH_start,cljs.core.deref(mecca.music.audiocontext).currentTime),cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_on,(function (db,p__20215){
var vec__20216 = p__20215;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20216,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20216,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_toggle,(function (db,p__20219){
var vec__20220 = p__20219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20220,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20220,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$eraser_DASH_toggle,(function (db,p__20223){
var vec__20224 = p__20223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20224,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20224,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$eraser_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_off,(function (db,p__20227){
var vec__20228 = p__20227;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20228,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20228,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,(function (db,p__20231){
var vec__20232 = p__20231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20232,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20232,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stop,(function (db,p__20235){
var vec__20236 = p__20235;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20236,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20236,(1),null);
var G__20239_20240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20239_20240) : re_frame.core.dispatch.call(null,G__20239_20240));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false),cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__20241){
var vec__20242 = p__20241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20242,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20242,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__20245){
var vec__20246 = p__20245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20246,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20246,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__20249){
var vec__20250 = p__20249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20250,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20250,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__20255){
var vec__20256 = p__20255;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20256,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20256,(1),null);
var notes = (function (){var G__20259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20259) : re_frame.core.subscribe.call(null,G__20259));
})();
var beat = (function (){var G__20260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20260) : re_frame.core.subscribe.call(null,G__20260));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__20256,_,___$1){
return (function (p1__20253_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20253_SHARP_));
});})(notes,beat,vec__20256,_,___$1))
,cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
var G__20261_20262 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor,0.5], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20261_20262) : re_frame.core.dispatch.call(null,G__20261_20262));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,((function (notes,beat,to_play,vec__20256,_,___$1){
return (function (p1__20254_SHARP_){
return (0.5 + p1__20254_SHARP_);
});})(notes,beat,to_play,vec__20256,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__20264){
var vec__20265 = p__20264;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20265,(0),null);
var beats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20265,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__20265,_,beats){
return (function (p1__20263_SHARP_){
return (beats + p1__20263_SHARP_);
});})(vec__20265,_,beats))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_mario,(function (db,p__20269){
var vec__20270 = p__20269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_x,((function (vec__20270,_,___$1){
return (function (p1__20268_SHARP_){
return ((10) + p1__20268_SHARP_);
});})(vec__20270,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_editor,(function (db,p__20273){
var vec__20274 = p__20273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20274,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20274,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,(1)),cljs.core.cst$kw$mario_DASH_x,(16));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__20278){
var vec__20279 = p__20278;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20279,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20279,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__20279,_,___$1){
return (function (p1__20277_SHARP_){
return (p1__20277_SHARP_ - 0.5);
});})(vec__20279,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__20282){
var vec__20283 = p__20282;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20283,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20283,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__20286){
var vec__20287 = p__20286;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20287,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20287,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_tempo,(function (db,p__20291){
var vec__20292 = p__20291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20292,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20292,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__20292,_,tempo){
return (function (p1__20290_SHARP_){
return ((8) + p1__20290_SHARP_);
});})(vec__20292,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_tempo,(function (db,p__20296){
var vec__20297 = p__20296;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20297,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20297,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__20297,_,tempo){
return (function (p1__20295_SHARP_){
return (p1__20295_SHARP_ - (8));
});})(vec__20297,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__20300){
var vec__20301 = p__20300;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20301,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20301,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$repeat_DASH_toggle,(function (db,p__20304){
var vec__20305 = p__20304;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20305,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20305,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$repeat_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_loop_DASH_end,(function (db,p__20308){
var vec__20309 = p__20308;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20309,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20309,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loop_DASH_end,x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_note,(function (db,p__20313){
var vec__20314 = p__20313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20314,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20314,(1),null);
var tempo = (function (){var G__20317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20317) : re_frame.core.subscribe.call(null,G__20317));
})();
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_note,cljs.core.inc),cljs.core.cst$kw$next_DASH_note_DASH_time,((function (tempo,seconds_per_beat,vec__20314,_,___$1){
return (function (p1__20312_SHARP_){
return (p1__20312_SHARP_ + seconds_per_beat);
});})(tempo,seconds_per_beat,vec__20314,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schedule_DASH_note,(function (db,p__20319){
var vec__20320 = p__20319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20320,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20320,(1),null);
var notes = (function (){var G__20323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20323) : re_frame.core.subscribe.call(null,G__20323));
})();
var beat = (function (){var G__20324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20324) : re_frame.core.subscribe.call(null,G__20324));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__20320,_,___$1){
return (function (p1__20318_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__20318_SHARP_));
});})(notes,beat,vec__20320,_,___$1))
,cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes_DASH_in_DASH_queue,cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__20325){
var vec__20326 = p__20325;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20326,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20326,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20326,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20326,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref((function (){var G__20329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20329) : re_frame.core.subscribe.call(null,G__20329));
})()))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,(cljs.core.truth_(cljs.core.deref((function (){var G__20330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20330) : re_frame.core.subscribe.call(null,G__20330));
})()))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__20334){
var vec__20335 = p__20334;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20335,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20335,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref((function (){var G__20340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20340) : re_frame.core.subscribe.call(null,G__20340));
})()));
if(and__3938__auto__){
return cljs.core.deref((function (){var G__20341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20341) : re_frame.core.subscribe.call(null,G__20341));
})());
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__20335,_,___$1){
return (function (p1__20331_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20331_SHARP_,(12))){
return (0);
} else {
return (p1__20331_SHARP_ + (1));
}
});})(vec__20335,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,((function (vec__20335,_,___$1){
return (function (p1__20332_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),p1__20332_SHARP_)){
return (0);
} else {
return (p1__20332_SHARP_ + (1));
}
});})(vec__20335,_,___$1))
),cljs.core.cst$kw$mario_DASH_y,((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(25),(30),(25),(15),(5)], null),cljs.core.deref((function (){var G__20342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20342) : re_frame.core.subscribe.call(null,G__20342));
})()))));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__20335,_,___$1){
return (function (p1__20333_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20333_SHARP_,(12))){
return (0);
} else {
return (p1__20333_SHARP_ + (1));
}
});})(vec__20335,_,___$1))
);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_BANG_,(function (db,p__20343){
var vec__20344 = p__20343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20344,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20344,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$submit_DASH_xml,(function (db,p__20347){
var vec__20348 = p__20347;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20348,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20348,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$xml,xml);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_song,(function (db,p__20351){
var vec__20352 = p__20351;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20352,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20352,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_megaman,(function (db,p__20355){
var vec__20356 = p__20355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20356,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20356,(1),null);
var G__20359_20360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(260)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20359_20360) : re_frame.core.dispatch.call(null,G__20359_20360));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.megaman.megaman);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_castle,(function (db,p__20361){
var vec__20362 = p__20361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20362,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20362,(1),null);
var G__20365_20366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(150)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20365_20366) : re_frame.core.dispatch.call(null,G__20365_20366));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.city.city);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_zelda,(function (db,p__20367){
var vec__20368 = p__20367;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20368,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20368,(1),null);
var G__20371_20372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(390)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20371_20372) : re_frame.core.dispatch.call(null,G__20371_20372));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.songs.zelda.zelda);
}));
