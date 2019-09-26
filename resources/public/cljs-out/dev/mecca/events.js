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
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$samples,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$mario,cljs.core.cst$kw$key,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$bassline,cljs.core.cst$kw$selected_DASH_note,cljs.core.cst$kw$lead,cljs.core.cst$kw$focused_DASH_note_DASH_pos,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$current_DASH_position],[cljs.core.PersistentVector.EMPTY,(1),cljs.core.PersistentVector.EMPTY,"C",(0),(0),(1),false,41.5,cljs.core.PersistentVector.EMPTY,"mario",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),(180),cljs.core.PersistentVector.EMPTY,(54),(0)]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__14129){
var vec__14130 = p__14129;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14130,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14130,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__14130,_,bassline){
return (function mecca$events$iter__14133(s__14134){
return (new cljs.core.LazySeq(null,((function (vec__14130,_,bassline){
return (function (){
var s__14134__$1 = s__14134;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14134__$1);
if(temp__5457__auto__){
var s__14134__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14134__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14134__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14136 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14135 = (0);
while(true){
if((i__14135 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14135);
cljs.core.chunk_append(b__14136,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14137) : re_frame.core.subscribe.call(null,G__14137));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__14139 = (i__14135 + (1));
i__14135 = G__14139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14136),mecca$events$iter__14133(cljs.core.chunk_rest(s__14134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14136),null);
}
} else {
var interval = cljs.core.first(s__14134__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14138) : re_frame.core.subscribe.call(null,G__14138));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__14133(cljs.core.rest(s__14134__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14130,_,bassline))
,null,null));
});})(vec__14130,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__14140){
var vec__14141 = p__14140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14141,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14141,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14141,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14141,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

mecca.music.play_sample_BANG_(instrument,((77) - pitch));

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,instrument,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$duration,0.5,cljs.core.cst$kw$pitch,((77) - pitch)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__14145){
var vec__14146 = p__14145;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14146,(0),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14146,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14146,(2),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14146,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instrument),((function (vec__14146,_,instrument,time,pitch){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__14146,_,instrument,time,pitch){
return (function (p1__14144_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__14144_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - pitch),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__14144_SHARP_))));
});})(vec__14146,_,instrument,time,pitch))
,notes);
});})(vec__14146,_,instrument,time,pitch))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__14149){
var vec__14150 = p__14149;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14150,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14150,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14150,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__14153){
var vec__14154 = p__14153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14154,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14154,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__14154,_,bassline){
return (function mecca$events$iter__14157(s__14158){
return (new cljs.core.LazySeq(null,((function (vec__14154,_,bassline){
return (function (){
var s__14158__$1 = s__14158;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14158__$1);
if(temp__5457__auto__){
var s__14158__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14158__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14158__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14160 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14159 = (0);
while(true){
if((i__14159 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14159);
cljs.core.chunk_append(b__14160,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14161 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14161) : re_frame.core.subscribe.call(null,G__14161));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__14163 = (i__14159 + (1));
i__14159 = G__14163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14160),mecca$events$iter__14157(cljs.core.chunk_rest(s__14158__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14160),null);
}
} else {
var interval = cljs.core.first(s__14158__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__14162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14162) : re_frame.core.subscribe.call(null,G__14162));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__14157(cljs.core.rest(s__14158__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14154,_,bassline))
,null,null));
});})(vec__14154,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__14164){
var vec__14165 = p__14164;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14165,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14165,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__14168){
var vec__14169 = p__14168;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_toggle,(function (db,p__14172){
var vec__14173 = p__14172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.audiocontext).state,"suspended")){
cljs.core.deref(mecca.music.audiocontext).resume();
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__14176){
var vec__14177 = p__14176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14177,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14177,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_note,(function (db,p__14180){
var vec__14181 = p__14180;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14181,(0),null);
var note = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14181,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_note,note);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__14184){
var vec__14185 = p__14184;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__14188){
var vec__14189 = p__14188;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14189,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14189,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__14192){
var vec__14193 = p__14192;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14193,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14193,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__14196){
var vec__14197 = p__14196;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14197,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14197,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__14200){
var vec__14201 = p__14200;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14201,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14201,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__14204){
var vec__14205 = p__14204;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14205,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14205,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__14208){
var vec__14209 = p__14208;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14209,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14209,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__14212){
var vec__14213 = p__14212;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14213,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__14216){
var vec__14217 = p__14216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14217,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14217,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__14221){
var vec__14222 = p__14221;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14222,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14222,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__14222,_,___$1){
return (function (p1__14220_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__14220_SHARP_,(3))){
return (1);
} else {
return (p1__14220_SHARP_ + (1));
}
});})(vec__14222,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__14225){
var vec__14226 = p__14225;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14226,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14226,(1),null);
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
var map__14229 = mecca.events.get_client_rect(e);
var map__14229__$1 = ((((!((map__14229 == null)))?(((((map__14229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14229):map__14229);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14229__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14229__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__14231 = window;
var G__14232 = goog.events.EventType.MOUSEUP;
var G__14233 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__14231,G__14232,G__14233);
});
