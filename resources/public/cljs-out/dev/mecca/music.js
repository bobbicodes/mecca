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
var next_note_time = (function (){var G__19642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19642) : re_frame.core.subscribe.call(null,G__19642));
})();
var current_note = (function (){var G__19643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19643) : re_frame.core.subscribe.call(null,G__19643));
})();
if((cljs.core.deref(next_note_time) < (mecca.music.scheduleAheadTime + mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext))))){
var G__19644 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schedule_DASH_note,cljs.core.deref(current_note),cljs.core.deref(next_note_time)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19644) : re_frame.core.dispatch.call(null,G__19644));
} else {
var G__19645 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19645) : re_frame.core.dispatch.call(null,G__19645));
}
});
mecca.music.mm = (function mecca$music$mm(time,instrument,pitch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,pitch], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (1)),cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,pitch], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(1.5 + time),cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,pitch], null)], null);
});
mecca.music.mm8 = (function mecca$music$mm8(time,instrument,pitch){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4324__auto__ = (function mecca$music$mm8_$_iter__19646(s__19647){
return (new cljs.core.LazySeq(null,(function (){
var s__19647__$1 = s__19647;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19647__$1);
if(temp__5457__auto__){
var s__19647__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19647__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19647__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19649 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19648 = (0);
while(true){
if((i__19648 < size__4323__auto__)){
var beat = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19648);
cljs.core.chunk_append(b__19649,mecca.music.mm((beat + time),instrument,pitch));

var G__19650 = (i__19648 + (1));
i__19648 = G__19650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19649),mecca$music$mm8_$_iter__19646(cljs.core.chunk_rest(s__19647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19649),null);
}
} else {
var beat = cljs.core.first(s__19647__$2);
return cljs.core.cons(mecca.music.mm((beat + time),instrument,pitch),mecca$music$mm8_$_iter__19646(cljs.core.rest(s__19647__$2)));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(mecca.music.mm8((0),(6),(60)),mecca.music.mm8((8),(6),(60)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mecca.music.mm8((16),(6),(56)),mecca.music.mm8((24),(6),(56)),mecca.music.mm8((32),(6),(58)),mecca.music.mm8((40),(6),(58)),mecca.music.mm8((48),(6),(60)),mecca.music.mm8((56),(6),(60))], 0));
});
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = cljs.core.deref((function (){var G__19652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19652) : re_frame.core.subscribe.call(null,G__19652));
})());
var notes = cljs.core.deref((function (){var G__19653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19653) : re_frame.core.subscribe.call(null,G__19653));
})());
if(cljs.core.truth_(cljs.core.deref((function (){var G__19654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19654) : re_frame.core.subscribe.call(null,G__19654));
})()))){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes){
return (function (p1__19651_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19651_SHARP_),beat);
});})(beat,notes))
,cljs.core.deref((function (){var G__19655 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19655) : re_frame.core.subscribe.call(null,G__19655));
})()))))){
var G__19656 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19656) : re_frame.core.dispatch.call(null,G__19656));
} else {
var G__19657 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$down_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19657) : re_frame.core.dispatch.call(null,G__19657));
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var playing_QMARK_ = cljs.core.deref((function (){var G__19658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19658) : re_frame.core.subscribe.call(null,G__19658));
})());
var beat = cljs.core.deref((function (){var G__19659 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19659) : re_frame.core.subscribe.call(null,G__19659));
})());
if(cljs.core.truth_(playing_QMARK_)){
var G__19660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario,((40) * beat)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19660) : re_frame.core.dispatch.call(null,G__19660));
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__19662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19662) : re_frame.core.subscribe.call(null,G__19662));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__19663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19663) : re_frame.core.subscribe.call(null,G__19663));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__19661_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19661_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = cljs.core.deref((function (){var G__19664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19664) : re_frame.core.subscribe.call(null,G__19664));
})());
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - started);
var beat_length = ((60) / cljs.core.deref((function (){var G__19665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19665) : re_frame.core.subscribe.call(null,G__19665));
})()));
var current_beat = (elapsed / beat_length);
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__19666_19668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19666_19668) : re_frame.core.dispatch.call(null,G__19666_19668));
} else {
if(((started + beat_length) < now)){
var G__19667_19669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19667_19669) : re_frame.core.dispatch.call(null,G__19667_19669));
} else {
}
}
} else {
}

mecca.music.mario_move();

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__19670_19671 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19670_19671) : re_frame.core.dispatch.call(null,G__19670_19671));

mecca.music.song_done_QMARK_();

return mecca.music.scheduler();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(150));
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
var c__15830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto__){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto__){
return (function (state_19683){
var state_val_19684 = (state_19683[(1)]);
if((state_val_19684 === (1))){
var inst_19672 = mecca.music.load_sound(named_url);
var state_19683__$1 = state_19683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19683__$1,(2),inst_19672);
} else {
if((state_val_19684 === (2))){
var inst_19674 = (state_19683[(7)]);
var inst_19674__$1 = (state_19683[(2)]);
var state_19683__$1 = (function (){var statearr_19685 = state_19683;
(statearr_19685[(7)] = inst_19674__$1);

return statearr_19685;
})();
if(cljs.core.truth_(inst_19674__$1)){
var statearr_19686_19694 = state_19683__$1;
(statearr_19686_19694[(1)] = (3));

} else {
var statearr_19687_19695 = state_19683__$1;
(statearr_19687_19695[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19684 === (3))){
var inst_19674 = (state_19683[(7)]);
var inst_19676 = mecca.music.decode(inst_19674);
var state_19683__$1 = state_19683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19683__$1,(6),inst_19676);
} else {
if((state_val_19684 === (4))){
var state_19683__$1 = state_19683;
var statearr_19688_19696 = state_19683__$1;
(statearr_19688_19696[(2)] = null);

(statearr_19688_19696[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19684 === (5))){
var inst_19681 = (state_19683[(2)]);
var state_19683__$1 = state_19683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19683__$1,inst_19681);
} else {
if((state_val_19684 === (6))){
var inst_19678 = (state_19683[(2)]);
var state_19683__$1 = state_19683;
var statearr_19689_19697 = state_19683__$1;
(statearr_19689_19697[(2)] = inst_19678);

(statearr_19689_19697[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__15830__auto__))
;
return ((function (switch__15647__auto__,c__15830__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__15648__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__15648__auto____0 = (function (){
var statearr_19690 = [null,null,null,null,null,null,null,null];
(statearr_19690[(0)] = mecca$music$get_and_decode_$_state_machine__15648__auto__);

(statearr_19690[(1)] = (1));

return statearr_19690;
});
var mecca$music$get_and_decode_$_state_machine__15648__auto____1 = (function (state_19683){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_19683);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e19691){if((e19691 instanceof Object)){
var ex__15651__auto__ = e19691;
var statearr_19692_19698 = state_19683;
(statearr_19692_19698[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19683);

return cljs.core.cst$kw$recur;
} else {
throw e19691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__19699 = state_19683;
state_19683 = G__19699;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__15648__auto__ = function(state_19683){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__15648__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__15648__auto____1.call(this,state_19683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__15648__auto____0;
mecca$music$get_and_decode_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__15648__auto____1;
return mecca$music$get_and_decode_$_state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto__))
})();
var state__15832__auto__ = (function (){var statearr_19693 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_19693[(6)] = c__15830__auto__);

return statearr_19693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto__))
);

return c__15830__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__15830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto__){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto__){
return (function (state_19728){
var state_val_19729 = (state_19728[(1)]);
if((state_val_19729 === (1))){
var inst_19700 = cljs.core.PersistentHashMap.EMPTY;
var inst_19701 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_19702 = inst_19700;
var inst_19703 = inst_19701;
var state_19728__$1 = (function (){var statearr_19730 = state_19728;
(statearr_19730[(7)] = inst_19703);

(statearr_19730[(8)] = inst_19702);

return statearr_19730;
})();
var statearr_19731_19743 = state_19728__$1;
(statearr_19731_19743[(2)] = null);

(statearr_19731_19743[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (2))){
var inst_19703 = (state_19728[(7)]);
var inst_19705 = cljs.core.first(inst_19703);
var inst_19706 = (inst_19705 == null);
var inst_19707 = cljs.core.not(inst_19706);
var state_19728__$1 = state_19728;
if(inst_19707){
var statearr_19732_19744 = state_19728__$1;
(statearr_19732_19744[(1)] = (4));

} else {
var statearr_19733_19745 = state_19728__$1;
(statearr_19733_19745[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (3))){
var inst_19726 = (state_19728[(2)]);
var state_19728__$1 = state_19728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19728__$1,inst_19726);
} else {
if((state_val_19729 === (4))){
var inst_19703 = (state_19728[(7)]);
var inst_19709 = (state_19728[(9)]);
var inst_19709__$1 = cljs.core.first(inst_19703);
var inst_19710 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_19711 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19709__$1),".mp3"].join('');
var inst_19712 = [inst_19711,inst_19709__$1];
var inst_19713 = cljs.core.PersistentHashMap.fromArrays(inst_19710,inst_19712);
var inst_19714 = mecca.music.get_and_decode(inst_19713);
var state_19728__$1 = (function (){var statearr_19734 = state_19728;
(statearr_19734[(9)] = inst_19709__$1);

return statearr_19734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19728__$1,(7),inst_19714);
} else {
if((state_val_19729 === (5))){
var inst_19702 = (state_19728[(8)]);
var state_19728__$1 = state_19728;
var statearr_19735_19746 = state_19728__$1;
(statearr_19735_19746[(2)] = inst_19702);

(statearr_19735_19746[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (6))){
var inst_19724 = (state_19728[(2)]);
var state_19728__$1 = state_19728;
var statearr_19736_19747 = state_19728__$1;
(statearr_19736_19747[(2)] = inst_19724);

(statearr_19736_19747[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19729 === (7))){
var inst_19703 = (state_19728[(7)]);
var inst_19702 = (state_19728[(8)]);
var inst_19709 = (state_19728[(9)]);
var inst_19716 = (state_19728[(2)]);
var inst_19717 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19709], 0));
var inst_19718 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19716], 0));
var inst_19719 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_19702,inst_19709,inst_19716);
var inst_19720 = cljs.core.rest(inst_19703);
var inst_19702__$1 = inst_19719;
var inst_19703__$1 = inst_19720;
var state_19728__$1 = (function (){var statearr_19737 = state_19728;
(statearr_19737[(10)] = inst_19718);

(statearr_19737[(7)] = inst_19703__$1);

(statearr_19737[(8)] = inst_19702__$1);

(statearr_19737[(11)] = inst_19717);

return statearr_19737;
})();
var statearr_19738_19748 = state_19728__$1;
(statearr_19738_19748[(2)] = null);

(statearr_19738_19748[(1)] = (2));


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
});})(c__15830__auto__))
;
return ((function (switch__15647__auto__,c__15830__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__15648__auto__ = null;
var mecca$music$load_samples_$_state_machine__15648__auto____0 = (function (){
var statearr_19739 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19739[(0)] = mecca$music$load_samples_$_state_machine__15648__auto__);

(statearr_19739[(1)] = (1));

return statearr_19739;
});
var mecca$music$load_samples_$_state_machine__15648__auto____1 = (function (state_19728){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_19728);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e19740){if((e19740 instanceof Object)){
var ex__15651__auto__ = e19740;
var statearr_19741_19749 = state_19728;
(statearr_19741_19749[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19728);

return cljs.core.cst$kw$recur;
} else {
throw e19740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__19750 = state_19728;
state_19728 = G__19750;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__15648__auto__ = function(state_19728){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__15648__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__15648__auto____1.call(this,state_19728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__15648__auto____0;
mecca$music$load_samples_$_state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__15648__auto____1;
return mecca$music$load_samples_$_state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto__))
})();
var state__15832__auto__ = (function (){var statearr_19742 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_19742[(6)] = c__15830__auto__);

return statearr_19742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto__))
);

return c__15830__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__15830__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15830__auto__){
return (function (){
var f__15831__auto__ = (function (){var switch__15647__auto__ = ((function (c__15830__auto__){
return (function (state_19757){
var state_val_19758 = (state_19757[(1)]);
if((state_val_19758 === (1))){
var inst_19751 = mecca.music.load_samples();
var state_19757__$1 = state_19757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19757__$1,(2),inst_19751);
} else {
if((state_val_19758 === (2))){
var inst_19753 = (state_19757[(2)]);
var inst_19754 = mecca.music.samples = inst_19753;
var inst_19755 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_19757__$1 = (function (){var statearr_19759 = state_19757;
(statearr_19759[(7)] = inst_19754);

return statearr_19759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19757__$1,inst_19755);
} else {
return null;
}
}
});})(c__15830__auto__))
;
return ((function (switch__15647__auto__,c__15830__auto__){
return (function() {
var mecca$music$state_machine__15648__auto__ = null;
var mecca$music$state_machine__15648__auto____0 = (function (){
var statearr_19760 = [null,null,null,null,null,null,null,null];
(statearr_19760[(0)] = mecca$music$state_machine__15648__auto__);

(statearr_19760[(1)] = (1));

return statearr_19760;
});
var mecca$music$state_machine__15648__auto____1 = (function (state_19757){
while(true){
var ret_value__15649__auto__ = (function (){try{while(true){
var result__15650__auto__ = switch__15647__auto__(state_19757);
if(cljs.core.keyword_identical_QMARK_(result__15650__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15650__auto__;
}
break;
}
}catch (e19761){if((e19761 instanceof Object)){
var ex__15651__auto__ = e19761;
var statearr_19762_19764 = state_19757;
(statearr_19762_19764[(5)] = ex__15651__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19757);

return cljs.core.cst$kw$recur;
} else {
throw e19761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15649__auto__,cljs.core.cst$kw$recur)){
var G__19765 = state_19757;
state_19757 = G__19765;
continue;
} else {
return ret_value__15649__auto__;
}
break;
}
});
mecca$music$state_machine__15648__auto__ = function(state_19757){
switch(arguments.length){
case 0:
return mecca$music$state_machine__15648__auto____0.call(this);
case 1:
return mecca$music$state_machine__15648__auto____1.call(this,state_19757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__15648__auto____0;
mecca$music$state_machine__15648__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__15648__auto____1;
return mecca$music$state_machine__15648__auto__;
})()
;})(switch__15647__auto__,c__15830__auto__))
})();
var state__15832__auto__ = (function (){var statearr_19763 = (f__15831__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15831__auto__.cljs$core$IFn$_invoke$arity$0() : f__15831__auto__.call(null));
(statearr_19763[(6)] = c__15830__auto__);

return statearr_19763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15832__auto__);
});})(c__15830__auto__))
);

return c__15830__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__19766 = midi_num;
switch (G__19766) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19766)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

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
var notes = (function (){var G__19768 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19768) : re_frame.core.subscribe.call(null,G__19768));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__19769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19769) : re_frame.core.subscribe.call(null,G__19769));
})();
var G__19770_19779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19770_19779) : re_frame.core.dispatch.call(null,G__19770_19779));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__19771(s__19772){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__19772__$1 = s__19772;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19772__$1);
if(temp__5457__auto__){
var s__19772__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19772__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19772__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19774 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19773 = (0);
while(true){
if((i__19773 < size__4323__auto__)){
var map__19775 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19773);
var map__19775__$1 = ((((!((map__19775 == null)))?(((((map__19775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19775):map__19775);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19775__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19775__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19775__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__19774,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__19780 = (i__19773 + (1));
i__19773 = G__19780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19774),mecca$music$play_song_BANG__$_iter__19771(cljs.core.chunk_rest(s__19772__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19774),null);
}
} else {
var map__19777 = cljs.core.first(s__19772__$2);
var map__19777__$1 = ((((!((map__19777 == null)))?(((((map__19777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19777):map__19777);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19777__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19777__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19777__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__19771(cljs.core.rest(s__19772__$2)));
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
