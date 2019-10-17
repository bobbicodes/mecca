// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
mecca.music.audio_context = (function mecca$music$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('mecca.music.audio_context', mecca.music.audio_context);
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.audiocontext !== 'undefined')){
} else {
mecca.music.audiocontext = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(mecca.music.audio_context());
}
mecca.music.current_time = (function mecca$music$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.current_time', mecca.music.current_time);
mecca.music.lookahead = 25.0;
mecca.music.scheduleAheadTime = 0.1;
mecca.music.scheduler = (function mecca$music$scheduler(){
var next_note_time = (function (){var G__14251 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14251) : re_frame.core.subscribe.call(null,G__14251));
})();
var current_note = (function (){var G__14252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14252) : re_frame.core.subscribe.call(null,G__14252));
})();
if((cljs.core.deref(next_note_time) < (mecca.music.scheduleAheadTime + mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext))))){
var G__14253 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schedule_DASH_note,cljs.core.deref(current_note),cljs.core.deref(next_note_time)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14253) : re_frame.core.dispatch.call(null,G__14253));
} else {
var G__14254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14254) : re_frame.core.dispatch.call(null,G__14254));
}
});
mecca.music.mmbass_minor_triad = (function mecca$music$mmbass_minor_triad(time,root){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 1.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (2)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (3))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (3)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (7))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 4.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (5)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 5.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (6)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (3))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (7)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (7))], null)], null);
});
mecca.music.mmbass_major_triad = (function mecca$music$mmbass_major_triad(time,root){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 1.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (2)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (4))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (3)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (7))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 4.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (5)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + 5.5),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,root], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (6)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (4))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (7)),cljs.core.cst$kw$instrument,(15),cljs.core.cst$kw$pitch,(root + (7))], null)], null);
});
mecca.music.mm8 = (function mecca$music$mm8(time,pitch){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4324__auto__ = (function mecca$music$mm8_$_iter__14255(s__14256){
return (new cljs.core.LazySeq(null,(function (){
var s__14256__$1 = s__14256;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14256__$1);
if(temp__5457__auto__){
var s__14256__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14256__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14256__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14258 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14257 = (0);
while(true){
if((i__14257 < size__4323__auto__)){
var beat = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14257);
cljs.core.chunk_append(b__14258,mecca.music.mmbass_minor_triad((beat + time),pitch));

var G__14259 = (i__14257 + (1));
i__14257 = G__14259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14258),mecca$music$mm8_$_iter__14255(cljs.core.chunk_rest(s__14256__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14258),null);
}
} else {
var beat = cljs.core.first(s__14256__$2);
return cljs.core.cons(mecca.music.mmbass_minor_triad((beat + time),pitch),mecca$music$mm8_$_iter__14255(cljs.core.rest(s__14256__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(8),(2)));
})());
});
mecca.music.mmbass = (function mecca$music$mmbass(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(mecca.music.mmbass_minor_triad((0),(64)),mecca.music.mmbass_major_triad((8),(60)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mecca.music.mmbass_major_triad((16),(62)),mecca.music.mmbass_minor_triad((24),(64))], 0));
});
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = (function (){var G__14261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14261) : re_frame.core.subscribe.call(null,G__14261));
})();
var notes = (function (){var G__14262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14262) : re_frame.core.subscribe.call(null,G__14262));
})();
var jump = (function (){var G__14263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14263) : re_frame.core.subscribe.call(null,G__14263));
})();
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref((function (){var G__14265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14265) : re_frame.core.subscribe.call(null,G__14265));
})());
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__3938__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes,jump){
return (function (p1__14260_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__14260_SHARP_),(cljs.core.deref(beat) + (1)));
});})(beat,notes,jump))
,cljs.core.deref(notes))))){
var G__14266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14266) : re_frame.core.dispatch.call(null,G__14266));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__14268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14268) : re_frame.core.subscribe.call(null,G__14268));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__14269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14269) : re_frame.core.subscribe.call(null,G__14269));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__14267_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__14267_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = (function (){var G__14270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14270) : re_frame.core.subscribe.call(null,G__14270));
})();
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__14271 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14271) : re_frame.core.subscribe.call(null,G__14271));
})()));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__14272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14272) : re_frame.core.subscribe.call(null,G__14272));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__14273_14276 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14273_14276) : re_frame.core.dispatch.call(null,G__14273_14276));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__14274_14277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14274_14277) : re_frame.core.dispatch.call(null,G__14274_14277));

var G__14275_14278 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14275_14278) : re_frame.core.dispatch.call(null,G__14275_14278));
} else {
}
}
} else {
}

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__14279_14280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14279_14280) : re_frame.core.dispatch.call(null,G__14279_14280));

mecca.music.song_done_QMARK_();

return mecca.music.scheduler();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(30));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var req = (new XMLHttpRequest());
req.responseType = "arraybuffer";

req.onload = ((function (out,req){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.status,(200))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,cljs.core.cst$kw$buffer,req.response));

return cljs.core.async.close_BANG_(out);
} else {
return cljs.core.async.close_BANG_(out);
}
});})(out,req))
;

req.open("GET",cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref(mecca.music.audiocontext).decodeAudioData(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(named_url),((function (out){
return (function (decoded_buffer){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,cljs.core.cst$kw$decoded_DASH_buffer,decoded_buffer));

return cljs.core.async.close_BANG_(out);
});})(out))
,((function (out){
return (function (){
console.error("Error loading file ",cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_url], 0)));

return cljs.core.async.close_BANG_(out);
});})(out))
);
} else {
cljs.core.async.close_BANG_(out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref(mecca.music.audiocontext).createBufferSource();
source.buffer = buffer;

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__12736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12736__auto__){
return (function (){
var f__12737__auto__ = (function (){var switch__12671__auto__ = ((function (c__12736__auto__){
return (function (state_14292){
var state_val_14293 = (state_14292[(1)]);
if((state_val_14293 === (1))){
var inst_14281 = mecca.music.load_sound(named_url);
var state_14292__$1 = state_14292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14292__$1,(2),inst_14281);
} else {
if((state_val_14293 === (2))){
var inst_14283 = (state_14292[(7)]);
var inst_14283__$1 = (state_14292[(2)]);
var state_14292__$1 = (function (){var statearr_14294 = state_14292;
(statearr_14294[(7)] = inst_14283__$1);

return statearr_14294;
})();
if(cljs.core.truth_(inst_14283__$1)){
var statearr_14295_14303 = state_14292__$1;
(statearr_14295_14303[(1)] = (3));

} else {
var statearr_14296_14304 = state_14292__$1;
(statearr_14296_14304[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14293 === (3))){
var inst_14283 = (state_14292[(7)]);
var inst_14285 = mecca.music.decode(inst_14283);
var state_14292__$1 = state_14292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14292__$1,(6),inst_14285);
} else {
if((state_val_14293 === (4))){
var state_14292__$1 = state_14292;
var statearr_14297_14305 = state_14292__$1;
(statearr_14297_14305[(2)] = null);

(statearr_14297_14305[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14293 === (5))){
var inst_14290 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14292__$1,inst_14290);
} else {
if((state_val_14293 === (6))){
var inst_14287 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
var statearr_14298_14306 = state_14292__$1;
(statearr_14298_14306[(2)] = inst_14287);

(statearr_14298_14306[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__12736__auto__))
;
return ((function (switch__12671__auto__,c__12736__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__12672__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__12672__auto____0 = (function (){
var statearr_14299 = [null,null,null,null,null,null,null,null];
(statearr_14299[(0)] = mecca$music$get_and_decode_$_state_machine__12672__auto__);

(statearr_14299[(1)] = (1));

return statearr_14299;
});
var mecca$music$get_and_decode_$_state_machine__12672__auto____1 = (function (state_14292){
while(true){
var ret_value__12673__auto__ = (function (){try{while(true){
var result__12674__auto__ = switch__12671__auto__(state_14292);
if(cljs.core.keyword_identical_QMARK_(result__12674__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12674__auto__;
}
break;
}
}catch (e14300){if((e14300 instanceof Object)){
var ex__12675__auto__ = e14300;
var statearr_14301_14307 = state_14292;
(statearr_14301_14307[(5)] = ex__12675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14292);

return cljs.core.cst$kw$recur;
} else {
throw e14300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12673__auto__,cljs.core.cst$kw$recur)){
var G__14308 = state_14292;
state_14292 = G__14308;
continue;
} else {
return ret_value__12673__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__12672__auto__ = function(state_14292){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__12672__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__12672__auto____1.call(this,state_14292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__12672__auto____0;
mecca$music$get_and_decode_$_state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__12672__auto____1;
return mecca$music$get_and_decode_$_state_machine__12672__auto__;
})()
;})(switch__12671__auto__,c__12736__auto__))
})();
var state__12738__auto__ = (function (){var statearr_14302 = (f__12737__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12737__auto__.cljs$core$IFn$_invoke$arity$0() : f__12737__auto__.call(null));
(statearr_14302[(6)] = c__12736__auto__);

return statearr_14302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12738__auto__);
});})(c__12736__auto__))
);

return c__12736__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__12736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12736__auto__){
return (function (){
var f__12737__auto__ = (function (){var switch__12671__auto__ = ((function (c__12736__auto__){
return (function (state_14337){
var state_val_14338 = (state_14337[(1)]);
if((state_val_14338 === (1))){
var inst_14309 = cljs.core.PersistentHashMap.EMPTY;
var inst_14310 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_14311 = inst_14309;
var inst_14312 = inst_14310;
var state_14337__$1 = (function (){var statearr_14339 = state_14337;
(statearr_14339[(7)] = inst_14311);

(statearr_14339[(8)] = inst_14312);

return statearr_14339;
})();
var statearr_14340_14352 = state_14337__$1;
(statearr_14340_14352[(2)] = null);

(statearr_14340_14352[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14338 === (2))){
var inst_14312 = (state_14337[(8)]);
var inst_14314 = cljs.core.first(inst_14312);
var inst_14315 = (inst_14314 == null);
var inst_14316 = cljs.core.not(inst_14315);
var state_14337__$1 = state_14337;
if(inst_14316){
var statearr_14341_14353 = state_14337__$1;
(statearr_14341_14353[(1)] = (4));

} else {
var statearr_14342_14354 = state_14337__$1;
(statearr_14342_14354[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14338 === (3))){
var inst_14335 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14337__$1,inst_14335);
} else {
if((state_val_14338 === (4))){
var inst_14312 = (state_14337[(8)]);
var inst_14318 = (state_14337[(9)]);
var inst_14318__$1 = cljs.core.first(inst_14312);
var inst_14319 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_14320 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14318__$1),".mp3"].join('');
var inst_14321 = [inst_14320,inst_14318__$1];
var inst_14322 = cljs.core.PersistentHashMap.fromArrays(inst_14319,inst_14321);
var inst_14323 = mecca.music.get_and_decode(inst_14322);
var state_14337__$1 = (function (){var statearr_14343 = state_14337;
(statearr_14343[(9)] = inst_14318__$1);

return statearr_14343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14337__$1,(7),inst_14323);
} else {
if((state_val_14338 === (5))){
var inst_14311 = (state_14337[(7)]);
var state_14337__$1 = state_14337;
var statearr_14344_14355 = state_14337__$1;
(statearr_14344_14355[(2)] = inst_14311);

(statearr_14344_14355[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14338 === (6))){
var inst_14333 = (state_14337[(2)]);
var state_14337__$1 = state_14337;
var statearr_14345_14356 = state_14337__$1;
(statearr_14345_14356[(2)] = inst_14333);

(statearr_14345_14356[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14338 === (7))){
var inst_14311 = (state_14337[(7)]);
var inst_14312 = (state_14337[(8)]);
var inst_14318 = (state_14337[(9)]);
var inst_14325 = (state_14337[(2)]);
var inst_14326 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14318], 0));
var inst_14327 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14325], 0));
var inst_14328 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_14311,inst_14318,inst_14325);
var inst_14329 = cljs.core.rest(inst_14312);
var inst_14311__$1 = inst_14328;
var inst_14312__$1 = inst_14329;
var state_14337__$1 = (function (){var statearr_14346 = state_14337;
(statearr_14346[(10)] = inst_14326);

(statearr_14346[(7)] = inst_14311__$1);

(statearr_14346[(8)] = inst_14312__$1);

(statearr_14346[(11)] = inst_14327);

return statearr_14346;
})();
var statearr_14347_14357 = state_14337__$1;
(statearr_14347_14357[(2)] = null);

(statearr_14347_14357[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__12736__auto__))
;
return ((function (switch__12671__auto__,c__12736__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__12672__auto__ = null;
var mecca$music$load_samples_$_state_machine__12672__auto____0 = (function (){
var statearr_14348 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14348[(0)] = mecca$music$load_samples_$_state_machine__12672__auto__);

(statearr_14348[(1)] = (1));

return statearr_14348;
});
var mecca$music$load_samples_$_state_machine__12672__auto____1 = (function (state_14337){
while(true){
var ret_value__12673__auto__ = (function (){try{while(true){
var result__12674__auto__ = switch__12671__auto__(state_14337);
if(cljs.core.keyword_identical_QMARK_(result__12674__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12674__auto__;
}
break;
}
}catch (e14349){if((e14349 instanceof Object)){
var ex__12675__auto__ = e14349;
var statearr_14350_14358 = state_14337;
(statearr_14350_14358[(5)] = ex__12675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14337);

return cljs.core.cst$kw$recur;
} else {
throw e14349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12673__auto__,cljs.core.cst$kw$recur)){
var G__14359 = state_14337;
state_14337 = G__14359;
continue;
} else {
return ret_value__12673__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__12672__auto__ = function(state_14337){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__12672__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__12672__auto____1.call(this,state_14337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__12672__auto____0;
mecca$music$load_samples_$_state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__12672__auto____1;
return mecca$music$load_samples_$_state_machine__12672__auto__;
})()
;})(switch__12671__auto__,c__12736__auto__))
})();
var state__12738__auto__ = (function (){var statearr_14351 = (f__12737__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12737__auto__.cljs$core$IFn$_invoke$arity$0() : f__12737__auto__.call(null));
(statearr_14351[(6)] = c__12736__auto__);

return statearr_14351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12738__auto__);
});})(c__12736__auto__))
);

return c__12736__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__12736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12736__auto__){
return (function (){
var f__12737__auto__ = (function (){var switch__12671__auto__ = ((function (c__12736__auto__){
return (function (state_14366){
var state_val_14367 = (state_14366[(1)]);
if((state_val_14367 === (1))){
var inst_14360 = mecca.music.load_samples();
var state_14366__$1 = state_14366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14366__$1,(2),inst_14360);
} else {
if((state_val_14367 === (2))){
var inst_14362 = (state_14366[(2)]);
var inst_14363 = mecca.music.samples = inst_14362;
var inst_14364 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_14366__$1 = (function (){var statearr_14368 = state_14366;
(statearr_14368[(7)] = inst_14363);

return statearr_14368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14366__$1,inst_14364);
} else {
return null;
}
}
});})(c__12736__auto__))
;
return ((function (switch__12671__auto__,c__12736__auto__){
return (function() {
var mecca$music$state_machine__12672__auto__ = null;
var mecca$music$state_machine__12672__auto____0 = (function (){
var statearr_14369 = [null,null,null,null,null,null,null,null];
(statearr_14369[(0)] = mecca$music$state_machine__12672__auto__);

(statearr_14369[(1)] = (1));

return statearr_14369;
});
var mecca$music$state_machine__12672__auto____1 = (function (state_14366){
while(true){
var ret_value__12673__auto__ = (function (){try{while(true){
var result__12674__auto__ = switch__12671__auto__(state_14366);
if(cljs.core.keyword_identical_QMARK_(result__12674__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12674__auto__;
}
break;
}
}catch (e14370){if((e14370 instanceof Object)){
var ex__12675__auto__ = e14370;
var statearr_14371_14373 = state_14366;
(statearr_14371_14373[(5)] = ex__12675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14366);

return cljs.core.cst$kw$recur;
} else {
throw e14370;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12673__auto__,cljs.core.cst$kw$recur)){
var G__14374 = state_14366;
state_14366 = G__14374;
continue;
} else {
return ret_value__12673__auto__;
}
break;
}
});
mecca$music$state_machine__12672__auto__ = function(state_14366){
switch(arguments.length){
case 0:
return mecca$music$state_machine__12672__auto____0.call(this);
case 1:
return mecca$music$state_machine__12672__auto____1.call(this,state_14366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__12672__auto____0;
mecca$music$state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__12672__auto____1;
return mecca$music$state_machine__12672__auto__;
})()
;})(switch__12671__auto__,c__12736__auto__))
})();
var state__12738__auto__ = (function (){var statearr_14372 = (f__12737__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12737__auto__.cljs$core$IFn$_invoke$arity$0() : f__12737__auto__.call(null));
(statearr_14372[(6)] = c__12736__auto__);

return statearr_14372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12738__auto__);
});})(c__12736__auto__))
);

return c__12736__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__14375 = midi_num;
switch (G__14375) {
case (55):
return 0.5;

break;
case (56):
return 0.5297315471796479;

break;
case (57):
return 0.5612310241546867;

break;
case (58):
return 0.5946035575013607;

break;
case (59):
return 0.6299605249474368;

break;
case (60):
return 0.6674199270850174;

break;
case (61):
return 0.7071067811865477;

break;
case (62):
return 0.7491535384383409;

break;
case (63):
return 0.7937005259840998;

break;
case (64):
return 0.8408964152537146;

break;
case (65):
return 0.8908987181403394;

break;
case (66):
return 0.9438743126816935;

break;
case (67):
return (1);

break;
case (68):
return 1.0594630943592953;

break;
case (69):
return 1.122462048309373;

break;
case (70):
return 1.1892071150027212;

break;
case (71):
return 1.2599210498948734;

break;
case (72):
return 1.3348398541700346;

break;
case (73):
return 1.4142135623730954;

break;
case (74):
return 1.498307076876682;

break;
case (75):
return 1.5874010519682;

break;
case (76):
return 1.6817928305074297;

break;
case (77):
return 1.7817974362806792;

break;
case (78):
return 1.8877486253633877;

break;
case (79):
return (2);

break;
case (80):
return 2.1189261887185906;

break;
case (81):
return 2.244924096618746;

break;
case (82):
return 2.3784142300054425;

break;
case (83):
return 2.519842099789747;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14375)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
var analyser = cljs.core.deref(context).createAnalyser();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

sample_source.connect(analyser);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(((((83) < pitch))?(pitch - (24)):pitch)),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__14377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14377) : re_frame.core.subscribe.call(null,G__14377));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__14378 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14378) : re_frame.core.subscribe.call(null,G__14378));
})();
var G__14379_14388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14379_14388) : re_frame.core.dispatch.call(null,G__14379_14388));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__14380(s__14381){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__14381__$1 = s__14381;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14381__$1);
if(temp__5457__auto__){
var s__14381__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14381__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14381__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14383 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14382 = (0);
while(true){
if((i__14382 < size__4323__auto__)){
var map__14384 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14382);
var map__14384__$1 = ((((!((map__14384 == null)))?(((((map__14384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14384):map__14384);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14384__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14384__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14384__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14383,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__14389 = (i__14382 + (1));
i__14382 = G__14389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14383),mecca$music$play_song_BANG__$_iter__14380(cljs.core.chunk_rest(s__14381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14383),null);
}
} else {
var map__14386 = cljs.core.first(s__14381__$2);
var map__14386__$1 = ((((!((map__14386 == null)))?(((((map__14386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14386):map__14386);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14386__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14386__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14386__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__14380(cljs.core.rest(s__14381__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo))
,null,null));
});})(notes,now,tempo))
;
return iter__4324__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});
