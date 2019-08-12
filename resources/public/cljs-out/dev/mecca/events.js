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
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$scale,"Minor",cljs.core.cst$kw$octave,(3),cljs.core.cst$kw$key,"C",cljs.core.cst$kw$tempo,(100),cljs.core.cst$kw$bassline,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(48),(55),(51),(55),(48),(55),(51),(55),(48),(55),(51),(55),(48),(55),(51),(55)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_bassline,(function (db,p__12970){
var vec__12971 = p__12970;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12971,(0),null);
var bassline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12971,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$bassline,cljs.core.vec((function (){var iter__4324__auto__ = ((function (vec__12971,_,bassline){
return (function mecca$events$iter__12974(s__12975){
return (new cljs.core.LazySeq(null,((function (vec__12971,_,bassline){
return (function (){
var s__12975__$1 = s__12975;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12975__$1);
if(temp__5457__auto__){
var s__12975__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12975__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12975__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12977 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12976 = (0);
while(true){
if((i__12976 < size__4323__auto__)){
var interval = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12976);
cljs.core.chunk_append(b__12977,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__12978 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12978) : re_frame.core.subscribe.call(null,G__12978));
})())),mecca.music.root_note_midi_num())),(interval - (1))));

var G__12980 = (i__12976 + (1));
i__12976 = G__12980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12977),mecca$events$iter__12974(cljs.core.chunk_rest(s__12975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12977),null);
}
} else {
var interval = cljs.core.first(s__12975__$2);
return cljs.core.cons(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.deref((function (){var G__12979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12979) : re_frame.core.subscribe.call(null,G__12979));
})())),mecca.music.root_note_midi_num())),(interval - (1))),mecca$events$iter__12974(cljs.core.rest(s__12975__$2)));
}
} else {
return null;
}
break;
}
});})(vec__12971,_,bassline))
,null,null));
});})(vec__12971,_,bassline))
;
return iter__4324__auto__(bassline);
})()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_scale,(function (db,p__12981){
var vec__12982 = p__12981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12982,(0),null);
var scale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12982,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$scale,scale);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_tempo,(function (db,p__12985){
var vec__12986 = p__12985;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12986,(0),null);
var tempo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12986,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$tempo,tempo);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_octave,(function (db,p__12989){
var vec__12990 = p__12989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12990,(0),null);
var octave = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12990,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$octave,octave);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_key,(function (db,p__12993){
var vec__12994 = p__12993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12994,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12994,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$key,key);
}));
mecca.events.mouse_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(100),cljs.core.cst$kw$y,(100)], null));
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
var map__12997 = mecca.events.get_client_rect(e);
var map__12997__$1 = ((((!((map__12997 == null)))?(((((map__12997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12997):map__12997);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12997__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12997__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__12999 = window;
var G__13000 = goog.events.EventType.MOUSEUP;
var G__13001 = mecca.events.mouse_up_handler(on_move);
return goog.events.listen(G__12999,G__13000,G__13001);
});
