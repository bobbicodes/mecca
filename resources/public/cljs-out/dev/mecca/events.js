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
goog.require('mecca.megaman');
goog.require('mecca.zelda');
goog.require('mecca.city');
goog.require('mecca.music');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$sharp_QMARK_,cljs.core.cst$kw$eraser_QMARK_,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$play_DASH_start,cljs.core.cst$kw$current_DASH_note,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$repeat_QMARK_,cljs.core.cst$kw$jumping_QMARK_,cljs.core.cst$kw$time_DASH_signature,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$loop_DASH_end,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$notes,cljs.core.cst$kw$next_DASH_note_DASH_time,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$xml,cljs.core.cst$kw$current_DASH_position,cljs.core.cst$kw$notes_DASH_in_DASH_queue],[(1),(1),false,false,(0),(0),(0),(0),(1),false,false,(4),false,null,(61),cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(120),(54),null,"",(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__23241){
var vec__23242 = p__23241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23242,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23242,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23242,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,((function (vec__23242,_,time,pitch){
return (function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__23242,_,time,pitch){
return (function (p1__23240_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__23240_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__23240_SHARP_))));
});})(vec__23242,_,time,pitch))
,note);
});})(vec__23242,_,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_time_DASH_signature,(function (db,p__23245){
var vec__23246 = p__23245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23246,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23246,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time_DASH_signature,beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_notes,(function (db,p__23249){
var vec__23250 = p__23249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23250,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23250,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__23253){
var vec__23254 = p__23253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23254,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23254,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__23257){
var vec__23258 = p__23257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23258,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23258,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$play_DASH_start,cljs.core.deref(mecca.music.audiocontext).currentTime),cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_on,(function (db,p__23261){
var vec__23262 = p__23261;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23262,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23262,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_toggle,(function (db,p__23265){
var vec__23266 = p__23265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23266,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23266,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$eraser_DASH_toggle,(function (db,p__23269){
var vec__23270 = p__23269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23270,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23270,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$eraser_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_off,(function (db,p__23273){
var vec__23274 = p__23273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23274,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23274,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,(function (db,p__23277){
var vec__23278 = p__23277;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23278,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23278,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stop,(function (db,p__23281){
var vec__23282 = p__23281;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23282,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23282,(1),null);
var G__23285_23286 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23285_23286) : re_frame.core.dispatch.call(null,G__23285_23286));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false),cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__23287){
var vec__23288 = p__23287;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23288,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23288,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__23291){
var vec__23292 = p__23291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23292,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23292,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__23295){
var vec__23296 = p__23295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23296,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23296,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__23301){
var vec__23302 = p__23301;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23302,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23302,(1),null);
var notes = (function (){var G__23305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23305) : re_frame.core.subscribe.call(null,G__23305));
})();
var beat = (function (){var G__23306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23306) : re_frame.core.subscribe.call(null,G__23306));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__23302,_,___$1){
return (function (p1__23299_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__23299_SHARP_));
});})(notes,beat,vec__23302,_,___$1))
,cljs.core.deref(notes));
if(((4) < cljs.core.deref(beat))){
var G__23307_23308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23307_23308) : re_frame.core.dispatch.call(null,G__23307_23308));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,((function (notes,beat,to_play,vec__23302,_,___$1){
return (function (p1__23300_SHARP_){
return (0.5 + p1__23300_SHARP_);
});})(notes,beat,to_play,vec__23302,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__23310){
var vec__23311 = p__23310;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23311,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23311,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__23311,_,___$1){
return (function (p1__23309_SHARP_){
return (0.5 + p1__23309_SHARP_);
});})(vec__23311,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_mario,(function (db,p__23315){
var vec__23316 = p__23315;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23316,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23316,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_x,((function (vec__23316,_,___$1){
return (function (p1__23314_SHARP_){
return ((10) + p1__23314_SHARP_);
});})(vec__23316,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_editor,(function (db,p__23319){
var vec__23320 = p__23319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23320,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23320,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__23324){
var vec__23325 = p__23324;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__23325,_,___$1){
return (function (p1__23323_SHARP_){
return (p1__23323_SHARP_ - 0.5);
});})(vec__23325,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__23328){
var vec__23329 = p__23328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23329,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23329,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__23332){
var vec__23333 = p__23332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23333,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23333,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_tempo,(function (db,p__23337){
var vec__23338 = p__23337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23338,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23338,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__23338,_,tempo){
return (function (p1__23336_SHARP_){
return ((8) + p1__23336_SHARP_);
});})(vec__23338,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_tempo,(function (db,p__23342){
var vec__23343 = p__23342;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23343,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23343,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__23343,_,tempo){
return (function (p1__23341_SHARP_){
return (p1__23341_SHARP_ - (8));
});})(vec__23343,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__23346){
var vec__23347 = p__23346;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23347,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23347,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$repeat_DASH_toggle,(function (db,p__23350){
var vec__23351 = p__23350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23351,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23351,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$repeat_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_loop_DASH_end,(function (db,p__23354){
var vec__23355 = p__23354;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23355,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23355,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loop_DASH_end,x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_note,(function (db,p__23359){
var vec__23360 = p__23359;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23360,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23360,(1),null);
var tempo = (function (){var G__23363 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23363) : re_frame.core.subscribe.call(null,G__23363));
})();
var seconds_per_beat = (60.0 / cljs.core.deref(tempo));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_note,cljs.core.inc),cljs.core.cst$kw$next_DASH_note_DASH_time,((function (tempo,seconds_per_beat,vec__23360,_,___$1){
return (function (p1__23358_SHARP_){
return (p1__23358_SHARP_ + seconds_per_beat);
});})(tempo,seconds_per_beat,vec__23360,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schedule_DASH_note,(function (db,p__23365){
var vec__23366 = p__23365;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23366,(1),null);
var notes = (function (){var G__23369 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23369) : re_frame.core.subscribe.call(null,G__23369));
})();
var beat = (function (){var G__23370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23370) : re_frame.core.subscribe.call(null,G__23370));
})();
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__23366,_,___$1){
return (function (p1__23364_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + cljs.core.deref(beat)),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__23364_SHARP_));
});})(notes,beat,vec__23366,_,___$1))
,cljs.core.deref(notes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes_DASH_in_DASH_queue,cljs.core.into,to_play);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__23371){
var vec__23372 = p__23371;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23372,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23372,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23372,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23372,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref((function (){var G__23375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23375) : re_frame.core.subscribe.call(null,G__23375));
})()))?(pitch + (1)):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,(cljs.core.truth_(cljs.core.deref((function (){var G__23376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23376) : re_frame.core.subscribe.call(null,G__23376));
})()))?(pitch + (1)):pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__23380){
var vec__23381 = p__23380;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23381,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23381,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.deref((function (){var G__23384 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23384) : re_frame.core.subscribe.call(null,G__23384));
})()))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__23381,_,___$1){
return (function (p1__23377_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__23377_SHARP_,(12))){
return (0);
} else {
return (p1__23377_SHARP_ + (1));
}
});})(vec__23381,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,((function (vec__23381,_,___$1){
return (function (p1__23378_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),p1__23378_SHARP_)){
return (0);
} else {
return (p1__23378_SHARP_ + (1));
}
});})(vec__23381,_,___$1))
),cljs.core.cst$kw$mario_DASH_y,((61) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15),(20),(24),(27),(29),(30),(30),(29),(27),(24),(20),(15),(10),(5)], null),cljs.core.deref((function (){var G__23385 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23385) : re_frame.core.subscribe.call(null,G__23385));
})()))));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__23381,_,___$1){
return (function (p1__23379_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__23379_SHARP_,(12))){
return (0);
} else {
return (p1__23379_SHARP_ + (1));
}
});})(vec__23381,_,___$1))
);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_BANG_,(function (db,p__23386){
var vec__23387 = p__23386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23387,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23387,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$submit_DASH_xml,(function (db,p__23390){
var vec__23391 = p__23390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23391,(0),null);
var xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23391,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$xml,xml);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_song,(function (db,p__23394){
var vec__23395 = p__23394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23395,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23395,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,notes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_megaman,(function (db,p__23398){
var vec__23399 = p__23398;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23399,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23399,(1),null);
var G__23402_23403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(180)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23402_23403) : re_frame.core.dispatch.call(null,G__23402_23403));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.megaman.megaman);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_castle,(function (db,p__23404){
var vec__23405 = p__23404;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23405,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23405,(1),null);
var G__23408_23409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(150)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23408_23409) : re_frame.core.dispatch.call(null,G__23408_23409));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.city.city);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_zelda,(function (db,p__23410){
var vec__23411 = p__23410;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23411,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23411,(1),null);
var G__23414_23415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,(150)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23414_23415) : re_frame.core.dispatch.call(null,G__23414_23415));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,mecca.zelda.zelda);
}));
