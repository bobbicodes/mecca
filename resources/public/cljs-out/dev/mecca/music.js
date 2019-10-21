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
var next_note_time = (function (){var G__21614 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21614) : re_frame.core.subscribe.call(null,G__21614));
})();
var current_note = (function (){var G__21615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21615) : re_frame.core.subscribe.call(null,G__21615));
})();
if((cljs.core.deref(next_note_time) < (mecca.music.scheduleAheadTime + mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext))))){
var G__21616 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schedule_DASH_note,cljs.core.deref(current_note),cljs.core.deref(next_note_time)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21616) : re_frame.core.dispatch.call(null,G__21616));
} else {
var G__21617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21617) : re_frame.core.dispatch.call(null,G__21617));
}
});
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = (function (){var G__21619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21619) : re_frame.core.subscribe.call(null,G__21619));
})();
var notes = (function (){var G__21620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21620) : re_frame.core.subscribe.call(null,G__21620));
})();
var jump = (function (){var G__21621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21621) : re_frame.core.subscribe.call(null,G__21621));
})();
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref((function (){var G__21623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21623) : re_frame.core.subscribe.call(null,G__21623));
})());
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__3938__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes,jump){
return (function (p1__21618_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__21618_SHARP_),(cljs.core.deref(beat) + (1)));
});})(beat,notes,jump))
,cljs.core.deref(notes))))){
var G__21624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21624) : re_frame.core.dispatch.call(null,G__21624));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__21626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21626) : re_frame.core.subscribe.call(null,G__21626));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__21627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21627) : re_frame.core.subscribe.call(null,G__21627));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__21625_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__21625_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = (function (){var G__21628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21628) : re_frame.core.subscribe.call(null,G__21628));
})();
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__21629 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21629) : re_frame.core.subscribe.call(null,G__21629));
})()));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__21630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21630) : re_frame.core.subscribe.call(null,G__21630));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__21631_21634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21631_21634) : re_frame.core.dispatch.call(null,G__21631_21634));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__21632_21635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21632_21635) : re_frame.core.dispatch.call(null,G__21632_21635));

var G__21633_21636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21633_21636) : re_frame.core.dispatch.call(null,G__21633_21636));
} else {
}
}
} else {
}

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__21637_21638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21637_21638) : re_frame.core.dispatch.call(null,G__21637_21638));

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
var c__17802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto__){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto__){
return (function (state_21650){
var state_val_21651 = (state_21650[(1)]);
if((state_val_21651 === (1))){
var inst_21639 = mecca.music.load_sound(named_url);
var state_21650__$1 = state_21650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21650__$1,(2),inst_21639);
} else {
if((state_val_21651 === (2))){
var inst_21641 = (state_21650[(7)]);
var inst_21641__$1 = (state_21650[(2)]);
var state_21650__$1 = (function (){var statearr_21652 = state_21650;
(statearr_21652[(7)] = inst_21641__$1);

return statearr_21652;
})();
if(cljs.core.truth_(inst_21641__$1)){
var statearr_21653_21661 = state_21650__$1;
(statearr_21653_21661[(1)] = (3));

} else {
var statearr_21654_21662 = state_21650__$1;
(statearr_21654_21662[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21651 === (3))){
var inst_21641 = (state_21650[(7)]);
var inst_21643 = mecca.music.decode(inst_21641);
var state_21650__$1 = state_21650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21650__$1,(6),inst_21643);
} else {
if((state_val_21651 === (4))){
var state_21650__$1 = state_21650;
var statearr_21655_21663 = state_21650__$1;
(statearr_21655_21663[(2)] = null);

(statearr_21655_21663[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21651 === (5))){
var inst_21648 = (state_21650[(2)]);
var state_21650__$1 = state_21650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21650__$1,inst_21648);
} else {
if((state_val_21651 === (6))){
var inst_21645 = (state_21650[(2)]);
var state_21650__$1 = state_21650;
var statearr_21656_21664 = state_21650__$1;
(statearr_21656_21664[(2)] = inst_21645);

(statearr_21656_21664[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__17802__auto__))
;
return ((function (switch__17619__auto__,c__17802__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__17620__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__17620__auto____0 = (function (){
var statearr_21657 = [null,null,null,null,null,null,null,null];
(statearr_21657[(0)] = mecca$music$get_and_decode_$_state_machine__17620__auto__);

(statearr_21657[(1)] = (1));

return statearr_21657;
});
var mecca$music$get_and_decode_$_state_machine__17620__auto____1 = (function (state_21650){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_21650);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e21658){if((e21658 instanceof Object)){
var ex__17623__auto__ = e21658;
var statearr_21659_21665 = state_21650;
(statearr_21659_21665[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21650);

return cljs.core.cst$kw$recur;
} else {
throw e21658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__21666 = state_21650;
state_21650 = G__21666;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__17620__auto__ = function(state_21650){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__17620__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__17620__auto____1.call(this,state_21650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__17620__auto____0;
mecca$music$get_and_decode_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__17620__auto____1;
return mecca$music$get_and_decode_$_state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto__))
})();
var state__17804__auto__ = (function (){var statearr_21660 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_21660[(6)] = c__17802__auto__);

return statearr_21660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto__))
);

return c__17802__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__17802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto__){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto__){
return (function (state_21695){
var state_val_21696 = (state_21695[(1)]);
if((state_val_21696 === (1))){
var inst_21667 = cljs.core.PersistentHashMap.EMPTY;
var inst_21668 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_21669 = inst_21667;
var inst_21670 = inst_21668;
var state_21695__$1 = (function (){var statearr_21697 = state_21695;
(statearr_21697[(7)] = inst_21670);

(statearr_21697[(8)] = inst_21669);

return statearr_21697;
})();
var statearr_21698_21710 = state_21695__$1;
(statearr_21698_21710[(2)] = null);

(statearr_21698_21710[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21696 === (2))){
var inst_21670 = (state_21695[(7)]);
var inst_21672 = cljs.core.first(inst_21670);
var inst_21673 = (inst_21672 == null);
var inst_21674 = cljs.core.not(inst_21673);
var state_21695__$1 = state_21695;
if(inst_21674){
var statearr_21699_21711 = state_21695__$1;
(statearr_21699_21711[(1)] = (4));

} else {
var statearr_21700_21712 = state_21695__$1;
(statearr_21700_21712[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21696 === (3))){
var inst_21693 = (state_21695[(2)]);
var state_21695__$1 = state_21695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21695__$1,inst_21693);
} else {
if((state_val_21696 === (4))){
var inst_21670 = (state_21695[(7)]);
var inst_21676 = (state_21695[(9)]);
var inst_21676__$1 = cljs.core.first(inst_21670);
var inst_21677 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_21678 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21676__$1),".mp3"].join('');
var inst_21679 = [inst_21678,inst_21676__$1];
var inst_21680 = cljs.core.PersistentHashMap.fromArrays(inst_21677,inst_21679);
var inst_21681 = mecca.music.get_and_decode(inst_21680);
var state_21695__$1 = (function (){var statearr_21701 = state_21695;
(statearr_21701[(9)] = inst_21676__$1);

return statearr_21701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21695__$1,(7),inst_21681);
} else {
if((state_val_21696 === (5))){
var inst_21669 = (state_21695[(8)]);
var state_21695__$1 = state_21695;
var statearr_21702_21713 = state_21695__$1;
(statearr_21702_21713[(2)] = inst_21669);

(statearr_21702_21713[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21696 === (6))){
var inst_21691 = (state_21695[(2)]);
var state_21695__$1 = state_21695;
var statearr_21703_21714 = state_21695__$1;
(statearr_21703_21714[(2)] = inst_21691);

(statearr_21703_21714[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21696 === (7))){
var inst_21670 = (state_21695[(7)]);
var inst_21676 = (state_21695[(9)]);
var inst_21669 = (state_21695[(8)]);
var inst_21683 = (state_21695[(2)]);
var inst_21684 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21676], 0));
var inst_21685 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21683], 0));
var inst_21686 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_21669,inst_21676,inst_21683);
var inst_21687 = cljs.core.rest(inst_21670);
var inst_21669__$1 = inst_21686;
var inst_21670__$1 = inst_21687;
var state_21695__$1 = (function (){var statearr_21704 = state_21695;
(statearr_21704[(7)] = inst_21670__$1);

(statearr_21704[(10)] = inst_21684);

(statearr_21704[(8)] = inst_21669__$1);

(statearr_21704[(11)] = inst_21685);

return statearr_21704;
})();
var statearr_21705_21715 = state_21695__$1;
(statearr_21705_21715[(2)] = null);

(statearr_21705_21715[(1)] = (2));


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
});})(c__17802__auto__))
;
return ((function (switch__17619__auto__,c__17802__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__17620__auto__ = null;
var mecca$music$load_samples_$_state_machine__17620__auto____0 = (function (){
var statearr_21706 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21706[(0)] = mecca$music$load_samples_$_state_machine__17620__auto__);

(statearr_21706[(1)] = (1));

return statearr_21706;
});
var mecca$music$load_samples_$_state_machine__17620__auto____1 = (function (state_21695){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_21695);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e21707){if((e21707 instanceof Object)){
var ex__17623__auto__ = e21707;
var statearr_21708_21716 = state_21695;
(statearr_21708_21716[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21695);

return cljs.core.cst$kw$recur;
} else {
throw e21707;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__21717 = state_21695;
state_21695 = G__21717;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__17620__auto__ = function(state_21695){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__17620__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__17620__auto____1.call(this,state_21695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__17620__auto____0;
mecca$music$load_samples_$_state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__17620__auto____1;
return mecca$music$load_samples_$_state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto__))
})();
var state__17804__auto__ = (function (){var statearr_21709 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_21709[(6)] = c__17802__auto__);

return statearr_21709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto__))
);

return c__17802__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__17802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17802__auto__){
return (function (){
var f__17803__auto__ = (function (){var switch__17619__auto__ = ((function (c__17802__auto__){
return (function (state_21724){
var state_val_21725 = (state_21724[(1)]);
if((state_val_21725 === (1))){
var inst_21718 = mecca.music.load_samples();
var state_21724__$1 = state_21724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21724__$1,(2),inst_21718);
} else {
if((state_val_21725 === (2))){
var inst_21720 = (state_21724[(2)]);
var inst_21721 = mecca.music.samples = inst_21720;
var inst_21722 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_21724__$1 = (function (){var statearr_21726 = state_21724;
(statearr_21726[(7)] = inst_21721);

return statearr_21726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21724__$1,inst_21722);
} else {
return null;
}
}
});})(c__17802__auto__))
;
return ((function (switch__17619__auto__,c__17802__auto__){
return (function() {
var mecca$music$state_machine__17620__auto__ = null;
var mecca$music$state_machine__17620__auto____0 = (function (){
var statearr_21727 = [null,null,null,null,null,null,null,null];
(statearr_21727[(0)] = mecca$music$state_machine__17620__auto__);

(statearr_21727[(1)] = (1));

return statearr_21727;
});
var mecca$music$state_machine__17620__auto____1 = (function (state_21724){
while(true){
var ret_value__17621__auto__ = (function (){try{while(true){
var result__17622__auto__ = switch__17619__auto__(state_21724);
if(cljs.core.keyword_identical_QMARK_(result__17622__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17622__auto__;
}
break;
}
}catch (e21728){if((e21728 instanceof Object)){
var ex__17623__auto__ = e21728;
var statearr_21729_21731 = state_21724;
(statearr_21729_21731[(5)] = ex__17623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21724);

return cljs.core.cst$kw$recur;
} else {
throw e21728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17621__auto__,cljs.core.cst$kw$recur)){
var G__21732 = state_21724;
state_21724 = G__21732;
continue;
} else {
return ret_value__17621__auto__;
}
break;
}
});
mecca$music$state_machine__17620__auto__ = function(state_21724){
switch(arguments.length){
case 0:
return mecca$music$state_machine__17620__auto____0.call(this);
case 1:
return mecca$music$state_machine__17620__auto____1.call(this,state_21724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__17620__auto____0;
mecca$music$state_machine__17620__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__17620__auto____1;
return mecca$music$state_machine__17620__auto__;
})()
;})(switch__17619__auto__,c__17802__auto__))
})();
var state__17804__auto__ = (function (){var statearr_21730 = (f__17803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17803__auto__.cljs$core$IFn$_invoke$arity$0() : f__17803__auto__.call(null));
(statearr_21730[(6)] = c__17802__auto__);

return statearr_21730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17804__auto__);
});})(c__17802__auto__))
);

return c__17802__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__21733 = midi_num;
switch (G__21733) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21733)].join('')));

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
var notes = (function (){var G__21735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21735) : re_frame.core.subscribe.call(null,G__21735));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__21736 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21736) : re_frame.core.subscribe.call(null,G__21736));
})();
var G__21737_21746 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21737_21746) : re_frame.core.dispatch.call(null,G__21737_21746));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__21738(s__21739){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__21739__$1 = s__21739;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__21739__$1);
if(temp__5457__auto__){
var s__21739__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21739__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21739__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21741 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21740 = (0);
while(true){
if((i__21740 < size__4323__auto__)){
var map__21742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21740);
var map__21742__$1 = ((((!((map__21742 == null)))?(((((map__21742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21742):map__21742);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__21741,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__21747 = (i__21740 + (1));
i__21740 = G__21747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21741),mecca$music$play_song_BANG__$_iter__21738(cljs.core.chunk_rest(s__21739__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21741),null);
}
} else {
var map__21744 = cljs.core.first(s__21739__$2);
var map__21744__$1 = ((((!((map__21744 == null)))?(((((map__21744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21744):map__21744);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21744__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21744__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21744__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__21738(cljs.core.rest(s__21739__$2)));
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
