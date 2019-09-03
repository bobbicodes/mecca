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
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
mecca.events.audio_context = (function mecca$events$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('mecca.events.audio_context', mecca.events.audio_context);
/**
 * Return the current time as recorded by the audio context.
 */
mecca.events.current_time = (function mecca$events$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.events.current_time', mecca.events.current_time);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$editor_DASH_beat_DASH_start,cljs.core.cst$kw$octave,cljs.core.cst$kw$selected_DASH_note_DASH_value,cljs.core.cst$kw$key,cljs.core.cst$kw$audiocontext,cljs.core.cst$kw$scale,cljs.core.cst$kw$mario_DASH_jump,cljs.core.cst$kw$time,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$bassline,cljs.core.cst$kw$mario_DASH_sprite,cljs.core.cst$kw$lead,cljs.core.cst$kw$tempo,cljs.core.cst$kw$drums,cljs.core.cst$kw$current_DASH_position],[(1),(3),"quarter","C",mecca.events.audio_context(),"Minor",(0),(0),false,cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,(180),cljs.core.PersistentVector.EMPTY,(0)]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__13044){
var vec__13045 = p__13044;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13045,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13045,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13045,_,bassline){
return (function mecca$events$iter__13048(s__13049){
return (new cljs.core.LazySeq(null,((function (vec__13045,_,bassline){
return (function (){
var s__13049__$1 = s__13049;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13049__$1);
if(temp__5457__auto__){
var s__13049__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13049__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13049__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13051 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13050 = (0);
while(true){
if((i__13050 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13050);
cljs.core.chunk_append(b__13051,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13052) : re_frame.core.subscribe.call(null,G__13052));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13054 = (i__13050 + (1));
i__13050 = G__13054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13051),mecca$events$iter__13048(cljs.core.chunk_rest(s__13049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13051),null);
}
} else {
var interval = cljs.core.first(s__13049__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13053) : re_frame.core.subscribe.call(null,G__13053));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13048(cljs.core.rest(s__13049__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13045,_,bassline))
,null,null));
});})(vec__13045,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_note,(function (db,p__13055){
var vec__13056 = p__13055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remove_DASH_note,(function (db,p__13060){
var vec__13061 = p__13060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13061,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13061,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13061,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null):null))),((function (vec__13061,_,x,y){
return (function (notes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__13061,_,x,y){
return (function (p1__13059_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__13059_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((77) - y),cljs.core.cst$kw$pitch.cljs$core$IFn$_invoke$arity$1(p1__13059_SHARP_))));
});})(vec__13061,_,x,y))
,notes);
});})(vec__13061,_,x,y))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_drum_DASH_hit,(function (db,p__13064){
var vec__13065 = p__13064;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13065,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13065,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13065,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((77) - y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__13068){
var vec__13069 = p__13068;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13069,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13069,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__13069,_,bassline){
return (function mecca$events$iter__13072(s__13073){
return (new cljs.core.LazySeq(null,((function (vec__13069,_,bassline){
return (function (){
var s__13073__$1 = s__13073;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13073__$1);
if(temp__5457__auto__){
var s__13073__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13073__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13073__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13075 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13074 = (0);
while(true){
if((i__13074 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13074);
cljs.core.chunk_append(b__13075,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13076) : re_frame.core.subscribe.call(null,G__13076));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13078 = (i__13074 + (1));
i__13074 = G__13078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13075),mecca$events$iter__13072(cljs.core.chunk_rest(s__13073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13075),null);
}
} else {
var interval = cljs.core.first(s__13073__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13077 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13077) : re_frame.core.subscribe.call(null,G__13077));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13072(cljs.core.rest(s__13073__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13069,_,bassline))
,null,null));
});})(vec__13069,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__13079){
var vec__13080 = p__13079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13080,(0),null);
var new_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13080,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$time,new_time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__13083){
var vec__13084 = p__13083;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13084,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13084,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__13087){
var vec__13088 = p__13087;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13088,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13088,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__13091){
var vec__13092 = p__13091;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13092,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13092,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__13095){
var vec__13096 = p__13095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13096,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13096,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__13099){
var vec__13100 = p__13099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13100,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13100,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__13103){
var vec__13104 = p__13103;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13104,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13104,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__13107){
var vec__13108 = p__13107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13108,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13108,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__13111){
var vec__13112 = p__13111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13112,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13112,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick_BANG_,(function (db,p__13115){
var vec__13116 = p__13115;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13116,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13116,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mario_DASH_sprite,cljs.core.inc);
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
var map__13119 = mecca.events.get_client_rect(e);
var map__13119__$1 = ((((!((map__13119 == null)))?(((((map__13119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13119):map__13119);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13119__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13119__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__13121 = window;
var G__13122 = goog.events.EventType.MOUSEUP;
var G__13123 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__13121,G__13122,G__13123);
});
