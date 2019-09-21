// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('mecca.mario');
goog.require('mecca.music');
goog.require('mecca.audio.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$octave,cljs.core.cst$kw$selected_DASH_note_DASH_value,cljs.core.cst$kw$key,cljs.core.cst$kw$scale,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$mario_DASH_run,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$mario_DASH_y,cljs.core.cst$kw$bassline,cljs.core.cst$kw$lead,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$mario_DASH_x,cljs.core.cst$kw$current_DASH_position],[(1),(3),(1),"C","Minor",(0),(0),(1),false,41.5,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(180),cljs.core.PersistentVector.EMPTY,(54),(0)]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__12999){
var vec__13000 = p__12999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13000,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13000,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13000,_,bassline){
return (function mecca$events$iter__13003(s__13004){
return (new cljs.core.LazySeq(null,((function (vec__13000,_,bassline){
return (function (){
var s__13004__$1 = s__13004;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13004__$1);
if(temp__5457__auto__){
var s__13004__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13004__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13004__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13006 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13005 = (0);
while(true){
if((i__13005 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13005);
cljs.core.chunk_append(b__13006,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13007) : re_frame.core.subscribe.call(null,G__13007));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13009 = (i__13005 + (1));
i__13005 = G__13009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13006),mecca$events$iter__13003(cljs.core.chunk_rest(s__13004__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13006),null);
}
} else {
var interval = cljs.core.first(s__13004__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13008) : re_frame.core.subscribe.call(null,G__13008));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13003(cljs.core.rest(s__13004__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13000,_,bassline))
,null,null));
});})(vec__13000,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_note,(function (db,p__13010){
var vec__13011 = p__13010;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13011,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13011,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13011,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,cljs.core.deref((function (){var G__13014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13014) : re_frame.core.subscribe.call(null,G__13014));
})()),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remove_DASH_note,(function (db,p__13016){
var vec__13017 = p__13016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13017,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13017,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13017,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),((function (vec__13017,_,x,y){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__13017,_,x,y){
return (function (p1__13015_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__13015_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - y),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__13015_SHARP_))));
});})(vec__13017,_,x,y))
,notes);
});})(vec__13017,_,x,y))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__13020){
var vec__13021 = p__13020;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13021,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13021,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13021,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__13024){
var vec__13025 = p__13024;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13025,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13025,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13025,_,bassline){
return (function mecca$events$iter__13028(s__13029){
return (new cljs.core.LazySeq(null,((function (vec__13025,_,bassline){
return (function (){
var s__13029__$1 = s__13029;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13029__$1);
if(temp__5457__auto__){
var s__13029__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13029__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13029__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13031 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13030 = (0);
while(true){
if((i__13030 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13030);
cljs.core.chunk_append(b__13031,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13032) : re_frame.core.subscribe.call(null,G__13032));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13034 = (i__13030 + (1));
i__13030 = G__13034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13031),mecca$events$iter__13028(cljs.core.chunk_rest(s__13029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13031),null);
}
} else {
var interval = cljs.core.first(s__13029__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13033) : re_frame.core.subscribe.call(null,G__13033));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13028(cljs.core.rest(s__13029__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13025,_,bassline))
,null,null));
});})(vec__13025,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__13035){
var vec__13036 = p__13035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__13039){
var vec__13040 = p__13039;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13040,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13040,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_note_DASH_value,(function (db,p__13043){
var vec__13044 = p__13043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13044,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13044,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_note_DASH_value,value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__13047){
var vec__13048 = p__13047;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13048,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13048,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__13051){
var vec__13052 = p__13051;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13052,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13052,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__13055){
var vec__13056 = p__13055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__13059){
var vec__13060 = p__13059;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13060,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13060,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__13063){
var vec__13064 = p__13063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13064,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13064,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__13067){
var vec__13068 = p__13067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13068,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13068,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__13071){
var vec__13072 = p__13071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13072,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13072,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__13075){
var vec__13076 = p__13075;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13076,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13076,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__13079){
var vec__13080 = p__13079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13080,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13080,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__13084){
var vec__13085 = p__13084;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13085,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13085,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__13085,_,___$1){
return (function (p1__13083_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13083_SHARP_,(3))){
return (1);
} else {
return (p1__13083_SHARP_ + (1));
}
});})(vec__13085,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__13088){
var vec__13089 = p__13088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13089,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13089,(1),null);
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
var map__13092 = mecca.events.get_client_rect(e);
var map__13092__$1 = ((((!((map__13092 == null)))?(((((map__13092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13092):map__13092);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13092__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13092__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__13094 = window;
var G__13095 = goog.events.EventType.MOUSEUP;
var G__13096 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__13094,G__13095,G__13096);
});
