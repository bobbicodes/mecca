// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('mecca.mario');
goog.require('mecca.music');
goog.require('mecca.music.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$octave,cljs.core.cst$kw$selected_DASH_note_DASH_value,cljs.core.cst$kw$key,cljs.core.cst$kw$scale,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$bassline,cljs.core.cst$kw$lead,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$current_DASH_position],[(1),(3),(1),"C","Minor",(0),(0),(0),false,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(180),cljs.core.PersistentVector.EMPTY,(0)]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__13038){
var vec__13039 = p__13038;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13039,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13039,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13039,_,bassline){
return (function mecca$events$iter__13042(s__13043){
return (new cljs.core.LazySeq(null,((function (vec__13039,_,bassline){
return (function (){
var s__13043__$1 = s__13043;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13043__$1);
if(temp__5457__auto__){
var s__13043__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13043__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13043__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13045 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13044 = (0);
while(true){
if((i__13044 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13044);
cljs.core.chunk_append(b__13045,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13046) : re_frame.core.subscribe.call(null,G__13046));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13048 = (i__13044 + (1));
i__13044 = G__13048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13045),mecca$events$iter__13042(cljs.core.chunk_rest(s__13043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13045),null);
}
} else {
var interval = cljs.core.first(s__13043__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13047 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13047) : re_frame.core.subscribe.call(null,G__13047));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13042(cljs.core.rest(s__13043__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13039,_,bassline))
,null,null));
});})(vec__13039,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_note,(function (db,p__13049){
var vec__13050 = p__13049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,cljs.core.deref((function (){var G__13053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13053) : re_frame.core.subscribe.call(null,G__13053));
})()),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remove_DASH_note,(function (db,p__13055){
var vec__13056 = p__13055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),((function (vec__13056,_,x,y){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__13056,_,x,y){
return (function (p1__13054_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__13054_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - y),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__13054_SHARP_))));
});})(vec__13056,_,x,y))
,notes);
});})(vec__13056,_,x,y))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__13059){
var vec__13060 = p__13059;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13060,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13060,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13060,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__13063){
var vec__13064 = p__13063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13064,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13064,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13064,_,bassline){
return (function mecca$events$iter__13067(s__13068){
return (new cljs.core.LazySeq(null,((function (vec__13064,_,bassline){
return (function (){
var s__13068__$1 = s__13068;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13068__$1);
if(temp__5457__auto__){
var s__13068__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13068__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13068__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13070 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13069 = (0);
while(true){
if((i__13069 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13069);
cljs.core.chunk_append(b__13070,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13071) : re_frame.core.subscribe.call(null,G__13071));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13073 = (i__13069 + (1));
i__13069 = G__13073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13070),mecca$events$iter__13067(cljs.core.chunk_rest(s__13068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13070),null);
}
} else {
var interval = cljs.core.first(s__13068__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13072) : re_frame.core.subscribe.call(null,G__13072));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13067(cljs.core.rest(s__13068__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13064,_,bassline))
,null,null));
});})(vec__13064,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__13074){
var vec__13075 = p__13074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13075,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13075,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__13078){
var vec__13079 = p__13078;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13079,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13079,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_note_DASH_value,(function (db,p__13082){
var vec__13083 = p__13082;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13083,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13083,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_note_DASH_value,value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__13086){
var vec__13087 = p__13086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__13090){
var vec__13091 = p__13090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__13094){
var vec__13095 = p__13094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13095,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13095,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__13098){
var vec__13099 = p__13098;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13099,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13099,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__13102){
var vec__13103 = p__13102;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13103,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13103,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__13106){
var vec__13107 = p__13106;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13107,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13107,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__13110){
var vec__13111 = p__13110;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13111,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13111,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__13114){
var vec__13115 = p__13114;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13115,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13115,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__13118){
var vec__13119 = p__13118;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13119,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13119,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__13123){
var vec__13124 = p__13123;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13124,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13124,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__13124,_,___$1){
return (function (p1__13122_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13122_SHARP_,(42))){
return (0);
} else {
return (p1__13122_SHARP_ + (1));
}
});})(vec__13124,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__13127){
var vec__13128 = p__13127;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13128,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13128,(1),null);
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
var map__13131 = mecca.events.get_client_rect(e);
var map__13131__$1 = ((((!((map__13131 == null)))?(((((map__13131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13131):map__13131);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13131__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13131__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__13133 = window;
var G__13134 = goog.events.EventType.MOUSEUP;
var G__13135 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__13133,G__13134,G__13135);
});
