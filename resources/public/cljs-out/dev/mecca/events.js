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
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$mario,cljs.core.cst$kw$key,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$bassline,cljs.core.cst$kw$selected_DASH_note,cljs.core.cst$kw$lead,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$current_DASH_position],[(1),cljs.core.PersistentVector.EMPTY,"C",(0),(0),(1),false,41.5,cljs.core.PersistentVector.EMPTY,"mario",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(180),cljs.core.PersistentVector.EMPTY,(54),(0)]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__14128){
var vec__14129 = p__14128;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14129,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14129,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__14129,_,bassline){
return (function mecca$events$iter__14132(s__14133){
return (new cljs.core.LazySeq(null,((function (vec__14129,_,bassline){
return (function (){
var s__14133__$1 = s__14133;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14133__$1);
if(temp__5457__auto__){
var s__14133__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14133__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14133__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14135 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14134 = (0);
while(true){
if((i__14134 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14134);
cljs.core.chunk_append(b__14135,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14136) : re_frame.core.subscribe.call(null,G__14136));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__14138 = (i__14134 + (1));
i__14134 = G__14138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14135),mecca$events$iter__14132(cljs.core.chunk_rest(s__14133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14135),null);
}
} else {
var interval = cljs.core.first(s__14133__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14137) : re_frame.core.subscribe.call(null,G__14137));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__14132(cljs.core.rest(s__14133__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14129,_,bassline))
,null,null));
});})(vec__14129,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__14139){
var vec__14140 = p__14139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14140,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14140,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14140,(2),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14140,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,instrument,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,0.5,cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__14144){
var vec__14145 = p__14144;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14145,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14145,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14145,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),((function (vec__14145,_,x,y){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__14145,_,x,y){
return (function (p1__14143_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__14143_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - y),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__14143_SHARP_))));
});})(vec__14145,_,x,y))
,notes);
});})(vec__14145,_,x,y))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__14148){
var vec__14149 = p__14148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14149,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14149,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14149,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__14152){
var vec__14153 = p__14152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14153,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14153,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__14153,_,bassline){
return (function mecca$events$iter__14156(s__14157){
return (new cljs.core.LazySeq(null,((function (vec__14153,_,bassline){
return (function (){
var s__14157__$1 = s__14157;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14157__$1);
if(temp__5457__auto__){
var s__14157__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14157__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14157__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14159 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14158 = (0);
while(true){
if((i__14158 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14158);
cljs.core.chunk_append(b__14159,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14160 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14160) : re_frame.core.subscribe.call(null,G__14160));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__14162 = (i__14158 + (1));
i__14158 = G__14162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14159),mecca$events$iter__14156(cljs.core.chunk_rest(s__14157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14159),null);
}
} else {
var interval = cljs.core.first(s__14157__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14161 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14161) : re_frame.core.subscribe.call(null,G__14161));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__14156(cljs.core.rest(s__14157__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14153,_,bassline))
,null,null));
});})(vec__14153,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__14163){
var vec__14164 = p__14163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14164,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14164,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__14167){
var vec__14168 = p__14167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14168,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14168,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_toggle,(function (db,p__14171){
var vec__14172 = p__14171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14172,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14172,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__14175){
var vec__14176 = p__14175;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14176,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14176,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_note,(function (db,p__14179){
var vec__14180 = p__14179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180,(0),null);
var note = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14180,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_note,cljs.core.cst$kw$remove_DASH_note);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__14183){
var vec__14184 = p__14183;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14184,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14184,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__14187){
var vec__14188 = p__14187;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14188,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14188,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__14191){
var vec__14192 = p__14191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14192,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14192,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__14195){
var vec__14196 = p__14195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14196,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14196,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__14199){
var vec__14200 = p__14199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14200,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14200,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__14203){
var vec__14204 = p__14203;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14204,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14204,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__14207){
var vec__14208 = p__14207;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14208,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14208,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__14211){
var vec__14212 = p__14211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14212,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14212,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__14215){
var vec__14216 = p__14215;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14216,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14216,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__14220){
var vec__14221 = p__14220;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14221,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14221,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__14221,_,___$1){
return (function (p1__14219_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__14219_SHARP_,(3))){
return (1);
} else {
return (p1__14219_SHARP_ + (1));
}
});})(vec__14221,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__14224){
var vec__14225 = p__14224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14225,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14225,(1),null);
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
var map__14228 = mecca.events.get_client_rect(e);
var map__14228__$1 = ((((!((map__14228 == null)))?(((((map__14228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14228):map__14228);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14228__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14228__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__14230 = window;
var G__14231 = goog.events.EventType.MOUSEUP;
var G__14232 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__14230,G__14231,G__14232);
});
