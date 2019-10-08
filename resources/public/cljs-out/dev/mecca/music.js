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
var next_note_time = (function (){var G__19395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19395) : re_frame.core.subscribe.call(null,G__19395));
})();
var current_note = (function (){var G__19396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19396) : re_frame.core.subscribe.call(null,G__19396));
})();
if((cljs.core.deref(next_note_time) < (mecca.music.scheduleAheadTime + mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext))))){
var G__19397 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schedule_DASH_note,cljs.core.deref(current_note),cljs.core.deref(next_note_time)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19397) : re_frame.core.dispatch.call(null,G__19397));
} else {
var G__19398 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19398) : re_frame.core.dispatch.call(null,G__19398));
}
});
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = cljs.core.deref((function (){var G__19400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19400) : re_frame.core.subscribe.call(null,G__19400));
})());
var notes = cljs.core.deref((function (){var G__19401 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19401) : re_frame.core.subscribe.call(null,G__19401));
})());
if(cljs.core.truth_(cljs.core.deref((function (){var G__19402 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19402) : re_frame.core.subscribe.call(null,G__19402));
})()))){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes){
return (function (p1__19399_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19399_SHARP_),beat);
});})(beat,notes))
,cljs.core.deref((function (){var G__19403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19403) : re_frame.core.subscribe.call(null,G__19403));
})()))))){
var G__19404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19404) : re_frame.core.dispatch.call(null,G__19404));
} else {
var G__19405 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$down_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19405) : re_frame.core.dispatch.call(null,G__19405));
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var playing_QMARK_ = cljs.core.deref((function (){var G__19406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19406) : re_frame.core.subscribe.call(null,G__19406));
})());
var beat = cljs.core.deref((function (){var G__19407 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19407) : re_frame.core.subscribe.call(null,G__19407));
})());
if(cljs.core.truth_(playing_QMARK_)){
var G__19408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario,((40) * beat)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19408) : re_frame.core.dispatch.call(null,G__19408));
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__19410 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19410) : re_frame.core.subscribe.call(null,G__19410));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__19411 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19411) : re_frame.core.subscribe.call(null,G__19411));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__19409_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19409_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = cljs.core.deref((function (){var G__19412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19412) : re_frame.core.subscribe.call(null,G__19412));
})());
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - started);
var beat_length = ((60) / cljs.core.deref((function (){var G__19413 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19413) : re_frame.core.subscribe.call(null,G__19413));
})()));
var current_beat = (elapsed / beat_length);
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__19414_19416 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19414_19416) : re_frame.core.dispatch.call(null,G__19414_19416));
} else {
if(((started + beat_length) < now)){
var G__19415_19417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19415_19417) : re_frame.core.dispatch.call(null,G__19415_19417));
} else {
}
}
} else {
}

mecca.music.mario_move();

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__19418_19419 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19418_19419) : re_frame.core.dispatch.call(null,G__19418_19419));

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
var c__15583__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto__){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto__){
return (function (state_19431){
var state_val_19432 = (state_19431[(1)]);
if((state_val_19432 === (1))){
var inst_19420 = mecca.music.load_sound(named_url);
var state_19431__$1 = state_19431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19431__$1,(2),inst_19420);
} else {
if((state_val_19432 === (2))){
var inst_19422 = (state_19431[(7)]);
var inst_19422__$1 = (state_19431[(2)]);
var state_19431__$1 = (function (){var statearr_19433 = state_19431;
(statearr_19433[(7)] = inst_19422__$1);

return statearr_19433;
})();
if(cljs.core.truth_(inst_19422__$1)){
var statearr_19434_19442 = state_19431__$1;
(statearr_19434_19442[(1)] = (3));

} else {
var statearr_19435_19443 = state_19431__$1;
(statearr_19435_19443[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19432 === (3))){
var inst_19422 = (state_19431[(7)]);
var inst_19424 = mecca.music.decode(inst_19422);
var state_19431__$1 = state_19431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19431__$1,(6),inst_19424);
} else {
if((state_val_19432 === (4))){
var state_19431__$1 = state_19431;
var statearr_19436_19444 = state_19431__$1;
(statearr_19436_19444[(2)] = null);

(statearr_19436_19444[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19432 === (5))){
var inst_19429 = (state_19431[(2)]);
var state_19431__$1 = state_19431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19431__$1,inst_19429);
} else {
if((state_val_19432 === (6))){
var inst_19426 = (state_19431[(2)]);
var state_19431__$1 = state_19431;
var statearr_19437_19445 = state_19431__$1;
(statearr_19437_19445[(2)] = inst_19426);

(statearr_19437_19445[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__15583__auto__))
;
return ((function (switch__15400__auto__,c__15583__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__15401__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__15401__auto____0 = (function (){
var statearr_19438 = [null,null,null,null,null,null,null,null];
(statearr_19438[(0)] = mecca$music$get_and_decode_$_state_machine__15401__auto__);

(statearr_19438[(1)] = (1));

return statearr_19438;
});
var mecca$music$get_and_decode_$_state_machine__15401__auto____1 = (function (state_19431){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19431);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19439){if((e19439 instanceof Object)){
var ex__15404__auto__ = e19439;
var statearr_19440_19446 = state_19431;
(statearr_19440_19446[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19431);

return cljs.core.cst$kw$recur;
} else {
throw e19439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19447 = state_19431;
state_19431 = G__19447;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__15401__auto__ = function(state_19431){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__15401__auto____1.call(this,state_19431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__15401__auto____0;
mecca$music$get_and_decode_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__15401__auto____1;
return mecca$music$get_and_decode_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19441 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19441[(6)] = c__15583__auto__);

return statearr_19441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto__))
);

return c__15583__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__15583__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto__){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto__){
return (function (state_19476){
var state_val_19477 = (state_19476[(1)]);
if((state_val_19477 === (1))){
var inst_19448 = cljs.core.PersistentHashMap.EMPTY;
var inst_19449 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_19450 = inst_19448;
var inst_19451 = inst_19449;
var state_19476__$1 = (function (){var statearr_19478 = state_19476;
(statearr_19478[(7)] = inst_19451);

(statearr_19478[(8)] = inst_19450);

return statearr_19478;
})();
var statearr_19479_19491 = state_19476__$1;
(statearr_19479_19491[(2)] = null);

(statearr_19479_19491[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19477 === (2))){
var inst_19451 = (state_19476[(7)]);
var inst_19453 = cljs.core.first(inst_19451);
var inst_19454 = (inst_19453 == null);
var inst_19455 = cljs.core.not(inst_19454);
var state_19476__$1 = state_19476;
if(inst_19455){
var statearr_19480_19492 = state_19476__$1;
(statearr_19480_19492[(1)] = (4));

} else {
var statearr_19481_19493 = state_19476__$1;
(statearr_19481_19493[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19477 === (3))){
var inst_19474 = (state_19476[(2)]);
var state_19476__$1 = state_19476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19476__$1,inst_19474);
} else {
if((state_val_19477 === (4))){
var inst_19451 = (state_19476[(7)]);
var inst_19457 = (state_19476[(9)]);
var inst_19457__$1 = cljs.core.first(inst_19451);
var inst_19458 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_19459 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19457__$1),".mp3"].join('');
var inst_19460 = [inst_19459,inst_19457__$1];
var inst_19461 = cljs.core.PersistentHashMap.fromArrays(inst_19458,inst_19460);
var inst_19462 = mecca.music.get_and_decode(inst_19461);
var state_19476__$1 = (function (){var statearr_19482 = state_19476;
(statearr_19482[(9)] = inst_19457__$1);

return statearr_19482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19476__$1,(7),inst_19462);
} else {
if((state_val_19477 === (5))){
var inst_19450 = (state_19476[(8)]);
var state_19476__$1 = state_19476;
var statearr_19483_19494 = state_19476__$1;
(statearr_19483_19494[(2)] = inst_19450);

(statearr_19483_19494[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19477 === (6))){
var inst_19472 = (state_19476[(2)]);
var state_19476__$1 = state_19476;
var statearr_19484_19495 = state_19476__$1;
(statearr_19484_19495[(2)] = inst_19472);

(statearr_19484_19495[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19477 === (7))){
var inst_19451 = (state_19476[(7)]);
var inst_19450 = (state_19476[(8)]);
var inst_19457 = (state_19476[(9)]);
var inst_19464 = (state_19476[(2)]);
var inst_19465 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19457], 0));
var inst_19466 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19464], 0));
var inst_19467 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_19450,inst_19457,inst_19464);
var inst_19468 = cljs.core.rest(inst_19451);
var inst_19450__$1 = inst_19467;
var inst_19451__$1 = inst_19468;
var state_19476__$1 = (function (){var statearr_19485 = state_19476;
(statearr_19485[(10)] = inst_19465);

(statearr_19485[(11)] = inst_19466);

(statearr_19485[(7)] = inst_19451__$1);

(statearr_19485[(8)] = inst_19450__$1);

return statearr_19485;
})();
var statearr_19486_19496 = state_19476__$1;
(statearr_19486_19496[(2)] = null);

(statearr_19486_19496[(1)] = (2));


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
});})(c__15583__auto__))
;
return ((function (switch__15400__auto__,c__15583__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__15401__auto__ = null;
var mecca$music$load_samples_$_state_machine__15401__auto____0 = (function (){
var statearr_19487 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19487[(0)] = mecca$music$load_samples_$_state_machine__15401__auto__);

(statearr_19487[(1)] = (1));

return statearr_19487;
});
var mecca$music$load_samples_$_state_machine__15401__auto____1 = (function (state_19476){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19476);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19488){if((e19488 instanceof Object)){
var ex__15404__auto__ = e19488;
var statearr_19489_19497 = state_19476;
(statearr_19489_19497[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19476);

return cljs.core.cst$kw$recur;
} else {
throw e19488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19498 = state_19476;
state_19476 = G__19498;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__15401__auto__ = function(state_19476){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__15401__auto____1.call(this,state_19476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__15401__auto____0;
mecca$music$load_samples_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__15401__auto____1;
return mecca$music$load_samples_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19490 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19490[(6)] = c__15583__auto__);

return statearr_19490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto__))
);

return c__15583__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__15583__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15583__auto__){
return (function (){
var f__15584__auto__ = (function (){var switch__15400__auto__ = ((function (c__15583__auto__){
return (function (state_19505){
var state_val_19506 = (state_19505[(1)]);
if((state_val_19506 === (1))){
var inst_19499 = mecca.music.load_samples();
var state_19505__$1 = state_19505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19505__$1,(2),inst_19499);
} else {
if((state_val_19506 === (2))){
var inst_19501 = (state_19505[(2)]);
var inst_19502 = mecca.music.samples = inst_19501;
var inst_19503 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_19505__$1 = (function (){var statearr_19507 = state_19505;
(statearr_19507[(7)] = inst_19502);

return statearr_19507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19505__$1,inst_19503);
} else {
return null;
}
}
});})(c__15583__auto__))
;
return ((function (switch__15400__auto__,c__15583__auto__){
return (function() {
var mecca$music$state_machine__15401__auto__ = null;
var mecca$music$state_machine__15401__auto____0 = (function (){
var statearr_19508 = [null,null,null,null,null,null,null,null];
(statearr_19508[(0)] = mecca$music$state_machine__15401__auto__);

(statearr_19508[(1)] = (1));

return statearr_19508;
});
var mecca$music$state_machine__15401__auto____1 = (function (state_19505){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19505);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19509){if((e19509 instanceof Object)){
var ex__15404__auto__ = e19509;
var statearr_19510_19512 = state_19505;
(statearr_19510_19512[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19505);

return cljs.core.cst$kw$recur;
} else {
throw e19509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19513 = state_19505;
state_19505 = G__19513;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$state_machine__15401__auto__ = function(state_19505){
switch(arguments.length){
case 0:
return mecca$music$state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$state_machine__15401__auto____1.call(this,state_19505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__15401__auto____0;
mecca$music$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__15401__auto____1;
return mecca$music$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19511 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19511[(6)] = c__15583__auto__);

return statearr_19511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto__))
);

return c__15583__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__19514 = midi_num;
switch (G__19514) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19514)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

sample_source.connect(compressor);

compressor.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__19516 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19516) : re_frame.core.subscribe.call(null,G__19516));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__19517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19517) : re_frame.core.subscribe.call(null,G__19517));
})();
var G__19518_19527 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19518_19527) : re_frame.core.dispatch.call(null,G__19518_19527));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__19519(s__19520){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__19520__$1 = s__19520;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19520__$1);
if(temp__5457__auto__){
var s__19520__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19520__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19520__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19522 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19521 = (0);
while(true){
if((i__19521 < size__4323__auto__)){
var map__19523 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19521);
var map__19523__$1 = ((((!((map__19523 == null)))?(((((map__19523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19523):map__19523);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19523__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19523__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19523__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__19522,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__19528 = (i__19521 + (1));
i__19521 = G__19528;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19522),mecca$music$play_song_BANG__$_iter__19519(cljs.core.chunk_rest(s__19520__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19522),null);
}
} else {
var map__19525 = cljs.core.first(s__19520__$2);
var map__19525__$1 = ((((!((map__19525 == null)))?(((((map__19525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19525):map__19525);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19525__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19525__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19525__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__19519(cljs.core.rest(s__19520__$2)));
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
