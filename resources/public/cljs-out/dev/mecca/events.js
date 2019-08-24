// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('mecca.music');
goog.require('mecca.music.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$scale,"Minor",cljs.core.cst$kw$playing_QMARK_,false,cljs.core.cst$kw$current_DASH_position,(0),cljs.core.cst$kw$octave,(3),cljs.core.cst$kw$key,"C",cljs.core.cst$kw$tempo,(180),cljs.core.cst$kw$bassline,cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__12982){
var vec__12983 = p__12982;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12983,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12983,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__12983,_,bassline){
return (function mecca$events$iter__12986(s__12987){
return (new cljs.core.LazySeq(null,((function (vec__12983,_,bassline){
return (function (){
var s__12987__$1 = s__12987;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12987__$1);
if(temp__5457__auto__){
var s__12987__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12987__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12987__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12989 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12988 = (0);
while(true){
if((i__12988 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12988);
cljs.core.chunk_append(b__12989,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__12990 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12990) : re_frame.core.subscribe.call(null,G__12990));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__12992 = (i__12988 + (1));
i__12988 = G__12992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12989),mecca$events$iter__12986(cljs.core.chunk_rest(s__12987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12989),null);
}
} else {
var interval = cljs.core.first(s__12987__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__12991 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12991) : re_frame.core.subscribe.call(null,G__12991));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__12986(cljs.core.rest(s__12987__$2)));
}
} else {
return null;
}
break;
}
});})(vec__12983,_,bassline))
,null,null));
});})(vec__12983,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_bass_DASH_note,(function (db,p__12993){
var vec__12994 = p__12993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12994,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12994,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12994,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,x,cljs.core.cst$kw$duration,(1),cljs.core.cst$kw$pitch,((48) + y)], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$move_DASH_note,(function (db,p__12997){
var vec__12998 = p__12997;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12998,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12998,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__12998,_,bassline){
return (function mecca$events$iter__13001(s__13002){
return (new cljs.core.LazySeq(null,((function (vec__12998,_,bassline){
return (function (){
var s__13002__$1 = s__13002;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13002__$1);
if(temp__5457__auto__){
var s__13002__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13002__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13002__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13004 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13003 = (0);
while(true){
if((i__13003 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13003);
cljs.core.chunk_append(b__13004,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13005) : re_frame.core.subscribe.call(null,G__13005));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__13007 = (i__13003 + (1));
i__13003 = G__13007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13004),mecca$events$iter__13001(cljs.core.chunk_rest(s__13002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13004),null);
}
} else {
var interval = cljs.core.first(s__13002__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__13006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13006) : re_frame.core.subscribe.call(null,G__13006));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__13001(cljs.core.rest(s__13002__$2)));
}
} else {
return null;
}
break;
}
});})(vec__12998,_,bassline))
,null,null));
});})(vec__12998,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_on,(function (db,p__13008){
var vec__13009 = p__13008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13009,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13009,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$play_DASH_off,(function (db,p__13012){
var vec__13013 = p__13012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13013,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13013,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$playing_QMARK_,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__13016){
var vec__13017 = p__13016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13017,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13017,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$advance_DASH_position,(function (db,p__13020){
var vec__13021 = p__13020;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13021,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13021,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_position,(function (db,p__13024){
var vec__13025 = p__13024;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13025,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13025,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$current_DASH_position,(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__13028){
var vec__13029 = p__13028;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13029,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13029,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__13032){
var vec__13033 = p__13032;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13033,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13033,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__13036){
var vec__13037 = p__13036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13037,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13037,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
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
var map__13040 = mecca.events.get_client_rect(e);
var map__13040__$1 = ((((!((map__13040 == null)))?(((((map__13040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13040):map__13040);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13040__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13040__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__13042 = window;
var G__13043 = goog.events.EventType.MOUSEUP;
var G__13044 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__13042,G__13043,G__13044);
});
