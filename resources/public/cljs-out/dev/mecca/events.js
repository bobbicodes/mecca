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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__13045){
var vec__13046 = p__13045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13046,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13046,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13046,_,bassline){
return (function mecca$events$iter__13049(s__13050){
return (new cljs.core.LazySeq(null,((function (vec__13046,_,bassline){
return (function (){
var s__13050__$1 = s__13050;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13050__$1);
if(temp__5457__auto__){
var s__13050__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13050__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13050__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13052 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13051 = (0);
while(true){
if((i__13051 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13051);
cljs.core.chunk_append(b__13052,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13053) : re_frame.core.subscribe.call(null,G__13053));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13055 = (i__13051 + (1));
i__13051 = G__13055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13052),mecca$events$iter__13049(cljs.core.chunk_rest(s__13050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13052),null);
}
} else {
var interval = cljs.core.first(s__13050__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13054 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13054) : re_frame.core.subscribe.call(null,G__13054));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13049(cljs.core.rest(s__13050__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13046,_,bassline))
,null,null));
});})(vec__13046,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_note,(function (db,p__13056){
var vec__13057 = p__13056;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13057,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13057,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13057,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,cljs.core.deref((function (){var G__13060 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13060) : re_frame.core.subscribe.call(null,G__13060));
})()),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remove_DASH_note,(function (db,p__13062){
var vec__13063 = p__13062;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),((function (vec__13063,_,x,y){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__13063,_,x,y){
return (function (p1__13061_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__13061_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - y),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__13061_SHARP_))));
});})(vec__13063,_,x,y))
,notes);
});})(vec__13063,_,x,y))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__13066){
var vec__13067 = p__13066;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__13070){
var vec__13071 = p__13070;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13071,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13071,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13071,_,bassline){
return (function mecca$events$iter__13074(s__13075){
return (new cljs.core.LazySeq(null,((function (vec__13071,_,bassline){
return (function (){
var s__13075__$1 = s__13075;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13075__$1);
if(temp__5457__auto__){
var s__13075__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13075__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13075__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13077 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13076 = (0);
while(true){
if((i__13076 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13076);
cljs.core.chunk_append(b__13077,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13078) : re_frame.core.subscribe.call(null,G__13078));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13080 = (i__13076 + (1));
i__13076 = G__13080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13077),mecca$events$iter__13074(cljs.core.chunk_rest(s__13075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13077),null);
}
} else {
var interval = cljs.core.first(s__13075__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13079) : re_frame.core.subscribe.call(null,G__13079));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13074(cljs.core.rest(s__13075__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13071,_,bassline))
,null,null));
});})(vec__13071,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__13081){
var vec__13082 = p__13081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13082,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13082,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__13085){
var vec__13086 = p__13085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13086,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13086,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_note_DASH_value,(function (db,p__13089){
var vec__13090 = p__13089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13090,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13090,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_note_DASH_value,value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__13093){
var vec__13094 = p__13093;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13094,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13094,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__13097){
var vec__13098 = p__13097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13098,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13098,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__13101){
var vec__13102 = p__13101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13102,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13102,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__13105){
var vec__13106 = p__13105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13106,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13106,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__13109){
var vec__13110 = p__13109;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13110,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13110,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__13113){
var vec__13114 = p__13113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13114,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13114,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__13117){
var vec__13118 = p__13117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13118,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13118,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__13121){
var vec__13122 = p__13121;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13122,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13122,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__13125){
var vec__13126 = p__13125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13126,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13126,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__13130){
var vec__13131 = p__13130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13131,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13131,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__13131,_,___$1){
return (function (p1__13129_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13129_SHARP_,(42))){
return (0);
} else {
return (p1__13129_SHARP_ + (1));
}
});})(vec__13131,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__13134){
var vec__13135 = p__13134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13135,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13135,(1),null);
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
var map__13138 = mecca.events.get_client_rect(e);
var map__13138__$1 = ((((!((map__13138 == null)))?(((((map__13138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13138):map__13138);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13138__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13138__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__13140 = window;
var G__13141 = goog.events.EventType.MOUSEUP;
var G__13142 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__13140,G__13141,G__13142);
});
