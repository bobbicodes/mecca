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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__11801){
var vec__11802 = p__11801;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11802,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11802,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__11802,_,bassline){
return (function mecca$events$iter__11805(s__11806){
return (new cljs.core.LazySeq(null,((function (vec__11802,_,bassline){
return (function (){
var s__11806__$1 = s__11806;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11806__$1);
if(temp__5457__auto__){
var s__11806__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11806__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11806__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11808 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11807 = (0);
while(true){
if((i__11807 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11807);
cljs.core.chunk_append(b__11808,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__11809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11809) : re_frame.core.subscribe.call(null,G__11809));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__11811 = (i__11807 + (1));
i__11807 = G__11811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11808),mecca$events$iter__11805(cljs.core.chunk_rest(s__11806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11808),null);
}
} else {
var interval = cljs.core.first(s__11806__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__11810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11810) : re_frame.core.subscribe.call(null,G__11810));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__11805(cljs.core.rest(s__11806__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11802,_,bassline))
,null,null));
});})(vec__11802,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("add note"),(function (db,p__11812){
var vec__11813 = p__11812;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11813,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11813,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11813,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,cljs.core.deref((function (){var G__11816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11816) : re_frame.core.subscribe.call(null,G__11816));
})()),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$remove_DASH_note,day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("remove note"),(function (db,p__11818){
var vec__11819 = p__11818;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11819,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11819,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11819,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),((function (vec__11819,_,x,y){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__11819,_,x,y){
return (function (p1__11817_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__11817_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - y),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__11817_SHARP_))));
});})(vec__11819,_,x,y))
,notes);
});})(vec__11819,_,x,y))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__11822){
var vec__11823 = p__11822;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11823,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11823,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11823,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__11826){
var vec__11827 = p__11826;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11827,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11827,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__11827,_,bassline){
return (function mecca$events$iter__11830(s__11831){
return (new cljs.core.LazySeq(null,((function (vec__11827,_,bassline){
return (function (){
var s__11831__$1 = s__11831;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__11831__$1);
if(temp__5457__auto__){
var s__11831__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11831__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__11831__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__11833 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__11832 = (0);
while(true){
if((i__11832 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__11832);
cljs.core.chunk_append(b__11833,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__11834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11834) : re_frame.core.subscribe.call(null,G__11834));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__11836 = (i__11832 + (1));
i__11832 = G__11836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11833),mecca$events$iter__11830(cljs.core.chunk_rest(s__11831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11833),null);
}
} else {
var interval = cljs.core.first(s__11831__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__11835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__11835) : re_frame.core.subscribe.call(null,G__11835));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__11830(cljs.core.rest(s__11831__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11827,_,bassline))
,null,null));
});})(vec__11827,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__11837){
var vec__11838 = p__11837;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11838,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11838,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__11841){
var vec__11842 = p__11841;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11842,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11842,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_toggle,(function (db,p__11845){
var vec__11846 = p__11845;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_focus_DASH_note,(function (db,p__11849){
var vec__11850 = p__11849;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$focused_DASH_note_DASH_pos,pos);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_note_DASH_value,(function (db,p__11853){
var vec__11854 = p__11853;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11854,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11854,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_note_DASH_value,value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__11857){
var vec__11858 = p__11857;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11858,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11858,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__11861){
var vec__11862 = p__11861;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11862,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11862,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__11865){
var vec__11866 = p__11865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11866,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11866,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__11869){
var vec__11870 = p__11869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11870,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11870,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__11873){
var vec__11874 = p__11873;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11874,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11874,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__11877){
var vec__11878 = p__11877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11878,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11878,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__11881){
var vec__11882 = p__11881;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11882,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11882,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__11885){
var vec__11886 = p__11885;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11886,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11886,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__11889){
var vec__11890 = p__11889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11890,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11890,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__11894){
var vec__11895 = p__11894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11895,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11895,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__11895,_,___$1){
return (function (p1__11893_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11893_SHARP_,(3))){
return (1);
} else {
return (p1__11893_SHARP_ + (1));
}
});})(vec__11895,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__11898){
var vec__11899 = p__11898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11899,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11899,(1),null);
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
var map__11902 = mecca.events.get_client_rect(e);
var map__11902__$1 = ((((!((map__11902 == null)))?(((((map__11902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11902):map__11902);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11902__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11902__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__11904 = window;
var G__11905 = goog.events.EventType.MOUSEUP;
var G__11906 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__11904,G__11905,G__11906);
});
