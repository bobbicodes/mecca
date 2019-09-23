// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('day8.re_frame.undo');
goog.require('mecca.mario');
goog.require('mecca.music');
goog.require('mecca.audio.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$selected_DASH_note_DASH_value,cljs.core.cst$kw$key,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$bassline,cljs.core.cst$kw$lead,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$current_DASH_position],[(1),"mario","C",(0),(0),(1),false,41.5,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(180),cljs.core.PersistentVector.EMPTY,(54),(0)]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__13073){
var vec__13074 = p__13073;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13074,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13074,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13074,_,bassline){
return (function mecca$events$iter__13077(s__13078){
return (new cljs.core.LazySeq(null,((function (vec__13074,_,bassline){
return (function (){
var s__13078__$1 = s__13078;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13078__$1);
if(temp__5457__auto__){
var s__13078__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13078__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13078__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13080 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13079 = (0);
while(true){
if((i__13079 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13079);
cljs.core.chunk_append(b__13080,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13081) : re_frame.core.subscribe.call(null,G__13081));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13083 = (i__13079 + (1));
i__13079 = G__13083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13080),mecca$events$iter__13077(cljs.core.chunk_rest(s__13078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13080),null);
}
} else {
var interval = cljs.core.first(s__13078__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13082) : re_frame.core.subscribe.call(null,G__13082));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13077(cljs.core.rest(s__13078__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13074,_,bassline))
,null,null));
});})(vec__13074,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__13084){
var vec__13085 = p__13084;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13085,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13085,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13085,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,cljs.core.deref((function (){var G__13088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13088) : re_frame.core.subscribe.call(null,G__13088));
})()),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__13090){
var vec__13091 = p__13090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),((function (vec__13091,_,x,y){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__13091,_,x,y){
return (function (p1__13089_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__13089_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - y),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__13089_SHARP_))));
});})(vec__13091,_,x,y))
,notes);
});})(vec__13091,_,x,y))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__13094){
var vec__13095 = p__13094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13095,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13095,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13095,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__13098){
var vec__13099 = p__13098;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13099,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13099,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13099,_,bassline){
return (function mecca$events$iter__13102(s__13103){
return (new cljs.core.LazySeq(null,((function (vec__13099,_,bassline){
return (function (){
var s__13103__$1 = s__13103;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13103__$1);
if(temp__5457__auto__){
var s__13103__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13103__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13103__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13105 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13104 = (0);
while(true){
if((i__13104 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13104);
cljs.core.chunk_append(b__13105,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13106 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13106) : re_frame.core.subscribe.call(null,G__13106));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13108 = (i__13104 + (1));
i__13104 = G__13108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13105),mecca$events$iter__13102(cljs.core.chunk_rest(s__13103__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13105),null);
}
} else {
var interval = cljs.core.first(s__13103__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13107 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13107) : re_frame.core.subscribe.call(null,G__13107));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13102(cljs.core.rest(s__13103__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13099,_,bassline))
,null,null));
});})(vec__13099,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__13109){
var vec__13110 = p__13109;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13110,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13110,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__13113){
var vec__13114 = p__13113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13114,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13114,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_toggle,(function (db,p__13117){
var vec__13118 = p__13117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13118,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13118,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__13121){
var vec__13122 = p__13121;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13122,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13122,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_note_DASH_value,(function (db,p__13125){
var vec__13126 = p__13125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13126,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13126,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_note_DASH_value,value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__13129){
var vec__13130 = p__13129;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13130,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13130,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__13133){
var vec__13134 = p__13133;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13134,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13134,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__13137){
var vec__13138 = p__13137;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13138,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13138,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__13141){
var vec__13142 = p__13141;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13142,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13142,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__13145){
var vec__13146 = p__13145;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13146,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13146,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__13149){
var vec__13150 = p__13149;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13150,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13150,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__13153){
var vec__13154 = p__13153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13154,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13154,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__13157){
var vec__13158 = p__13157;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13158,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13158,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__13161){
var vec__13162 = p__13161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13162,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13162,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__13166){
var vec__13167 = p__13166;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13167,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13167,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__13167,_,___$1){
return (function (p1__13165_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13165_SHARP_,(3))){
return (1);
} else {
return (p1__13165_SHARP_ + (1));
}
});})(vec__13167,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__13170){
var vec__13171 = p__13170;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13171,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13171,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_jump,(0));
}));
mecca.events.mouse_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null));
mecca.events.selected = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
mecca.events.get_client_rect = (function mecca$events$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$top,r.top], null);
});
mecca.events.mouse_move_handler = (function mecca$events$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(offset));
return cljs.core.reset_BANG_(mecca.events.mouse_pos,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null));
});
});
mecca.events.mouse_up_handler = (function mecca$events$mouse_up_handler(on_move){
return (function mecca$events$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
mecca.events.mouse_down_handler = (function mecca$events$mouse_down_handler(e){
var map__13174 = mecca.events.get_client_rect(e);
var map__13174__$1 = ((((!((map__13174 == null)))?(((((map__13174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13174):map__13174);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13174__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13174__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__13176 = window;
var G__13177 = goog.events.EventType.MOUSEUP;
var G__13178 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__13176,G__13177,G__13178);
});
