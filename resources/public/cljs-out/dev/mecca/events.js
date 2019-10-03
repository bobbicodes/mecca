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
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$instrument,cljs.core.cst$kw$sharp_QMARK_,cljs.core.cst$kw$key,cljs.core.cst$kw$eraser_QMARK_,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$play_DASH_start,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$jumping_QMARK_,cljs.core.cst$kw$time_DASH_signature,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$bassline,cljs.core.cst$kw$notes,cljs.core.cst$kw$lead,cljs.core.cst$kw$next_DASH_note_DASH_time,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$array_DASH_buffer,cljs.core.cst$kw$current_DASH_position,cljs.core.cst$kw$notes_DASH_in_DASH_queue],[(1),(1),false,"C",false,(0),(0),(0),(1),false,(4),false,(59),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,0.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(120),cljs.core.PersistentVector.EMPTY,(54),null,(0),cljs.core.PersistentVector.EMPTY]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__19617){
var vec__19618 = p__19617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19618,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19618,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19618,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19618,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample(instrument,(cljs.core.truth_(cljs.core.deref((function (){var G__19621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19621) : re_frame.core.subscribe.call(null,G__19621));
})()))?(0.5 + pitch):pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$notes,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,(cljs.core.truth_(cljs.core.deref((function (){var G__19622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19622) : re_frame.core.subscribe.call(null,G__19622));
})()))?(0.5 + pitch):pitch),cljs.core.cst$kw$sharp_QMARK_,cljs.core.deref((function (){var G__19623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19623) : re_frame.core.subscribe.call(null,G__19623));
})())], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_song,(function (db,p__19624){
var vec__19625 = p__19624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19625,(0),null);
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19625,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(1),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(3),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(4),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(5),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(7),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(8),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(9),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(11),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(12),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(13),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(14),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(15),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(16),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(17),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(65),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(19),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(21),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(22),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,67.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(23),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,68.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(24),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(69),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(25),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(70),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(27),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(65),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(28),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(29),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(65),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(30),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(31),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(65),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(32),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(33),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(35),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(36),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(37),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(39),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(40),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(41),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(43),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(44),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(45),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(46),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(47),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(48),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(49),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(63),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(51),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(53),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(54),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,67.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(55),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,68.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(56),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(69),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(57),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(70),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(59),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(63),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(60),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(61),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(63),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(62),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(63),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(63),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(64),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(65),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(69),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,70.5,cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(72),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,56.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,73.5,cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(76),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(77),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(78),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(58),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(79),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(80),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,60.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(81),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(84),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(85),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(86),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(63),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(87),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,64.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(88),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(65),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(89),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(93),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,94.5,cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(96),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(63),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(97),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(100),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(101),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(102),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(103),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(104),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,63.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(105),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,107.5,cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(109),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,110.5,cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(63),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(112),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(113),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,115.5,cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(117),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,119.5,cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(121),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(129),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(128),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,126.5,cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(131),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(132),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(133),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(135),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(136),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(137),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(141),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(143),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(145),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(147),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(148),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(58),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(149),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(151),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(152),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(153),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(157),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(159),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(161),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,58.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(165),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,58.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(168),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(169),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,60.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(172),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,61.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(173),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(175),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(63),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(177),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,61.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(181),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(183),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(184),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(185),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,60.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(187),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,60.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(188),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,60.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(189),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(191),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(192),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(60),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(193),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(193),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(197),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,198.5,cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(200),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,56.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,201.5,cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(204),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(205),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,57.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(206),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(58),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(207),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(59),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(208),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,60.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(209),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(212),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(213),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(214),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(63),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(215),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,64.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(216),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(65),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(217),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(221),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(61),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,222.5,cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(62),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(224),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,63.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(225),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(64),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(237),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,(66),cljs.core.cst$kw$sharp_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(241),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,65.5,cljs.core.cst$kw$sharp_QMARK_,true], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$time,(245),cljs.core.cst$kw$instrument,(14),cljs.core.cst$kw$pitch,63.5,cljs.core.cst$kw$sharp_QMARK_,true], null)], true));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__19629){
var vec__19630 = p__19629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19630,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19630,(1),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19630,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$notes,((function (vec__19630,_,time,pitch){
return (function (note){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__19630,_,time,pitch){
return (function (p1__19628_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19628_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__19628_SHARP_))));
});})(vec__19630,_,time,pitch))
,note);
});})(vec__19630,_,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_time_DASH_signature,(function (db,p__19633){
var vec__19634 = p__19633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19634,(0),null);
var beats_per_measure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19634,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time_DASH_signature,beats_per_measure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__19637){
var vec__19638 = p__19637;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19638,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19638,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__19641){
var vec__19642 = p__19641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19642,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19642,(1),null);
mecca.music.play_song_BANG_();

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$play_DASH_start,cljs.core.deref(mecca.music.audiocontext).currentTime),cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_on,(function (db,p__19645){
var vec__19646 = p__19645;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19646,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19646,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_toggle,(function (db,p__19649){
var vec__19650 = p__19649;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19650,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19650,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$eraser_DASH_toggle,(function (db,p__19653){
var vec__19654 = p__19653;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19654,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19654,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$eraser_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sharp_DASH_off,(function (db,p__19657){
var vec__19658 = p__19657;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19658,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19658,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$sharp_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pause,(function (db,p__19661){
var vec__19662 = p__19661;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19662,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19662,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stop,(function (db,p__19665){
var vec__19666 = p__19665;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(1),null);
var G__19669_19670 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19669_19670) : re_frame.core.dispatch.call(null,G__19669_19670));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false),cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__19671){
var vec__19672 = p__19671;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19672,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19672,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_instrument,(function (db,p__19675){
var vec__19676 = p__19675;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19676,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19676,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$instrument,instrument);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__19679){
var vec__19680 = p__19679;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19680,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19680,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__19685){
var vec__19686 = p__19685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19686,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19686,(1),null);
var notes = cljs.core.deref((function (){var G__19689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19689) : re_frame.core.subscribe.call(null,G__19689));
})());
var beat = cljs.core.deref((function (){var G__19690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19690) : re_frame.core.subscribe.call(null,G__19690));
})());
var to_play = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (notes,beat,vec__19686,_,___$1){
return (function (p1__19683_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((1) + beat),cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19683_SHARP_));
});})(notes,beat,vec__19686,_,___$1))
,notes);
if(((8) < beat)){
var G__19691_19692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19691_19692) : re_frame.core.dispatch.call(null,G__19691_19692));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,((function (notes,beat,to_play,vec__19686,_,___$1){
return (function (p1__19684_SHARP_){
return (0.5 + p1__19684_SHARP_);
});})(notes,beat,to_play,vec__19686,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__19694){
var vec__19695 = p__19694;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19695,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19695,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__19695,_,___$1){
return (function (p1__19693_SHARP_){
return (0.5 + p1__19693_SHARP_);
});})(vec__19695,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_mario,(function (db,p__19698){
var vec__19699 = p__19698;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19699,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19699,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_x,x);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_editor,(function (db,p__19702){
var vec__19703 = p__19702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,(1));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__19707){
var vec__19708 = p__19707;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19708,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19708,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,((function (vec__19708,_,___$1){
return (function (p1__19706_SHARP_){
return (p1__19706_SHARP_ - 0.5);
});})(vec__19708,_,___$1))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__19711){
var vec__19712 = p__19711;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19712,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19712,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__19715){
var vec__19716 = p__19715;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19716,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19716,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_tempo,(function (db,p__19720){
var vec__19721 = p__19720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19721,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19721,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__19721,_,tempo){
return (function (p1__19719_SHARP_){
return ((8) + p1__19719_SHARP_);
});})(vec__19721,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_tempo,(function (db,p__19725){
var vec__19726 = p__19725;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,((function (vec__19726,_,tempo){
return (function (p1__19724_SHARP_){
return (p1__19724_SHARP_ - (8));
});})(vec__19726,_,tempo))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__19729){
var vec__19730 = p__19729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19730,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19730,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__19734){
var vec__19735 = p__19734;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19735,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19735,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__19735,_,___$1){
return (function (p1__19733_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__19733_SHARP_,(3))){
return (1);
} else {
return (p1__19733_SHARP_ + (1));
}
});})(vec__19735,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__19738){
var vec__19739 = p__19738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19739,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19739,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_BANG_,(function (db,p__19742){
var vec__19743 = p__19742;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19743,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19743,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_y,(30));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$down_BANG_,(function (db,p__19746){
var vec__19747 = p__19746;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19747,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19747,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_y,(59));
}));
