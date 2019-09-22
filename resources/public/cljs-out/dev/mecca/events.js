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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__13032){
var vec__13033 = p__13032;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13033,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13033,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13033,_,bassline){
return (function mecca$events$iter__13036(s__13037){
return (new cljs.core.LazySeq(null,((function (vec__13033,_,bassline){
return (function (){
var s__13037__$1 = s__13037;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13037__$1);
if(temp__5457__auto__){
var s__13037__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13037__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13037__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13039 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13038 = (0);
while(true){
if((i__13038 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13038);
cljs.core.chunk_append(b__13039,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13040) : re_frame.core.subscribe.call(null,G__13040));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13042 = (i__13038 + (1));
i__13038 = G__13042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13039),mecca$events$iter__13036(cljs.core.chunk_rest(s__13037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13039),null);
}
} else {
var interval = cljs.core.first(s__13037__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13041) : re_frame.core.subscribe.call(null,G__13041));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13036(cljs.core.rest(s__13037__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13033,_,bassline))
,null,null));
});})(vec__13033,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_note,(function (db,p__13043){
var vec__13044 = p__13043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13044,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13044,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13044,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,cljs.core.deref((function (){var G__13047 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13047) : re_frame.core.subscribe.call(null,G__13047));
})()),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remove_DASH_note,(function (db,p__13049){
var vec__13050 = p__13049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),((function (vec__13050,_,x,y){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__13050,_,x,y){
return (function (p1__13048_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__13048_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - y),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__13048_SHARP_))));
});})(vec__13050,_,x,y))
,notes);
});})(vec__13050,_,x,y))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__13053){
var vec__13054 = p__13053;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13054,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13054,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13054,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__13057){
var vec__13058 = p__13057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13058,_,bassline){
return (function mecca$events$iter__13061(s__13062){
return (new cljs.core.LazySeq(null,((function (vec__13058,_,bassline){
return (function (){
var s__13062__$1 = s__13062;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13062__$1);
if(temp__5457__auto__){
var s__13062__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13062__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13062__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13064 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13063 = (0);
while(true){
if((i__13063 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13063);
cljs.core.chunk_append(b__13064,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13065 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13065) : re_frame.core.subscribe.call(null,G__13065));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13067 = (i__13063 + (1));
i__13063 = G__13067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13064),mecca$events$iter__13061(cljs.core.chunk_rest(s__13062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13064),null);
}
} else {
var interval = cljs.core.first(s__13062__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13066 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13066) : re_frame.core.subscribe.call(null,G__13066));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13061(cljs.core.rest(s__13062__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13058,_,bassline))
,null,null));
});})(vec__13058,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__13068){
var vec__13069 = p__13068;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13069,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13069,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__13072){
var vec__13073 = p__13072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13073,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13073,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select_DASH_note_DASH_value,(function (db,p__13076){
var vec__13077 = p__13076;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13077,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13077,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected_DASH_note_DASH_value,value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__13080){
var vec__13081 = p__13080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13081,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13081,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__13084){
var vec__13085 = p__13084;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13085,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13085,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__13088){
var vec__13089 = p__13088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13089,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13089,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_editor,(function (db,p__13092){
var vec__13093 = p__13092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$retract_DASH_editor,(function (db,p__13096){
var vec__13097 = p__13096;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13097,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13097,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__13100){
var vec__13101 = p__13100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13101,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13101,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__13104){
var vec__13105 = p__13104;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13105,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13105,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__13108){
var vec__13109 = p__13108;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__13112){
var vec__13113 = p__13112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13113,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13113,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__13117){
var vec__13118 = p__13117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13118,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13118,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_run,((function (vec__13118,_,___$1){
return (function (p1__13116_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13116_SHARP_,(3))){
return (1);
} else {
return (p1__13116_SHARP_ + (1));
}
});})(vec__13118,_,___$1))
),cljs.core.cst$kw$mario_DASH_jump,cljs.core.inc),cljs.core.cst$kw$time,mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$jump_DASH_reset,(function (db,p__13121){
var vec__13122 = p__13121;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13122,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13122,(1),null);
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
var map__13125 = mecca.events.get_client_rect(e);
var map__13125__$1 = ((((!((map__13125 == null)))?(((((map__13125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13125):map__13125);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13125__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13125__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__13127 = window;
var G__13128 = goog.events.EventType.MOUSEUP;
var G__13129 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__13127,G__13128,G__13129);
});
