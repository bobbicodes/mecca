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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__13087){
var vec__13088 = p__13087;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13088,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13088,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13088,_,bassline){
return (function mecca$events$iter__13091(s__13092){
return (new cljs.core.LazySeq(null,((function (vec__13088,_,bassline){
return (function (){
var s__13092__$1 = s__13092;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13092__$1);
if(temp__5457__auto__){
var s__13092__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13092__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13092__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13094 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13093 = (0);
while(true){
if((i__13093 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13093);
cljs.core.chunk_append(b__13094,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13095 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13095) : re_frame.core.subscribe.call(null,G__13095));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13097 = (i__13093 + (1));
i__13093 = G__13097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13094),mecca$events$iter__13091(cljs.core.chunk_rest(s__13092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13094),null);
}
} else {
var interval = cljs.core.first(s__13092__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13096 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13096) : re_frame.core.subscribe.call(null,G__13096));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13091(cljs.core.rest(s__13092__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13088,_,bassline))
,null,null));
});})(vec__13088,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_note,(function (db,p__13098){
var vec__13099 = p__13098;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13099,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13099,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13099,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,cljs.core.deref((function (){var G__13102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13102) : re_frame.core.subscribe.call(null,G__13102));
})()),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remove_DASH_note,(function (db,p__13104){
var vec__13105 = p__13104;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13105,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13105,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13105,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),((function (vec__13105,_,x,y){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__13105,_,x,y){
return (function (p1__13103_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__13103_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - y),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__13103_SHARP_))));
});})(vec__13105,_,x,y))
,notes);
});})(vec__13105,_,x,y))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__13108){
var vec__13109 = p__13108;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__13112){
var vec__13113 = p__13112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13113,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13113,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13113,_,bassline){
return (function mecca$events$iter__13116(s__13117){
return (new cljs.core.LazySeq(null,((function (vec__13113,_,bassline){
return (function (){
var s__13117__$1 = s__13117;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13117__$1);
if(temp__5457__auto__){
var s__13117__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13117__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13117__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13119 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13118 = (0);
while(true){
if((i__13118 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13118);
cljs.core.chunk_append(b__13119,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13120) : re_frame.core.subscribe.call(null,G__13120));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13122 = (i__13118 + (1));
i__13118 = G__13122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13119),mecca$events$iter__13116(cljs.core.chunk_rest(s__13117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13119),null);
}
} else {
var interval = cljs.core.first(s__13117__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13121) : re_frame.core.subscribe.call(null,G__13121));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13116(cljs.core.rest(s__13117__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13113,_,bassline))
,null,null));
});})(vec__13113,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__13123){
var vec__13124 = p__13123;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13124,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13124,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__13127){
var vec__13128 = p__13127;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13128,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13128,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_note_DASH_value,(function (db,p__13131){
var vec__13132 = p__13131;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13132,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13132,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_note_DASH_value,value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__13135){
var vec__13136 = p__13135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13136,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13136,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__13139){
var vec__13140 = p__13139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13140,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13140,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__13143){
var vec__13144 = p__13143;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13144,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13144,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__13147){
var vec__13148 = p__13147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13148,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13148,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__13151){
var vec__13152 = p__13151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13152,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13152,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__13155){
var vec__13156 = p__13155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13156,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13156,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__13159){
var vec__13160 = p__13159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13160,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13160,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__13163){
var vec__13164 = p__13163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__13167){
var vec__13168 = p__13167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13168,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13168,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__13172){
var vec__13173 = p__13172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13173,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13173,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__13173,_,___$1){
return (function (p1__13171_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13171_SHARP_,(42))){
return (0);
} else {
return (p1__13171_SHARP_ + (1));
}
});})(vec__13173,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__13176){
var vec__13177 = p__13176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13177,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13177,(1),null);
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
var map__13180 = mecca.events.get_client_rect(e);
var map__13180__$1 = ((((!((map__13180 == null)))?(((((map__13180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13180):map__13180);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13180__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13180__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__13182 = window;
var G__13183 = goog.events.EventType.MOUSEUP;
var G__13184 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__13182,G__13183,G__13184);
});
