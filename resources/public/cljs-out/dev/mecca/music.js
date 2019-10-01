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
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = cljs.core.deref((function (){var G__19395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19395) : re_frame.core.subscribe.call(null,G__19395));
})());
if(((0) < cljs.core.deref((function (){var G__19396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19396) : re_frame.core.subscribe.call(null,G__19396));
})()))){
if(cljs.core.int_QMARK_(beat)){
var G__19397 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$down_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19397) : re_frame.core.dispatch.call(null,G__19397));
} else {
var G__19398 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19398) : re_frame.core.dispatch.call(null,G__19398));
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var playing_QMARK_ = cljs.core.deref((function (){var G__19399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19399) : re_frame.core.subscribe.call(null,G__19399));
})());
var beat = cljs.core.deref((function (){var G__19400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19400) : re_frame.core.subscribe.call(null,G__19400));
})());
if(cljs.core.truth_(playing_QMARK_)){
var G__19401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario,((10) * beat)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19401) : re_frame.core.dispatch.call(null,G__19401));
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__19403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19403) : re_frame.core.subscribe.call(null,G__19403));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__19404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19404) : re_frame.core.subscribe.call(null,G__19404));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__19402_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19402_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = cljs.core.deref((function (){var G__19405 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19405) : re_frame.core.subscribe.call(null,G__19405));
})());
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - started);
var beat_length = ((60) / cljs.core.deref((function (){var G__19406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19406) : re_frame.core.subscribe.call(null,G__19406));
})()));
var current_beat = (elapsed / beat_length);
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__19407_19409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19407_19409) : re_frame.core.dispatch.call(null,G__19407_19409));
} else {
if(((started + beat_length) < now)){
var G__19408_19410 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19408_19410) : re_frame.core.dispatch.call(null,G__19408_19410));
} else {
}
}
} else {
}

mecca.music.mario_move();

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__19411_19412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19411_19412) : re_frame.core.dispatch.call(null,G__19411_19412));

return mecca.music.song_done_QMARK_();
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
return (function (state_19424){
var state_val_19425 = (state_19424[(1)]);
if((state_val_19425 === (1))){
var inst_19413 = mecca.music.load_sound(named_url);
var state_19424__$1 = state_19424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19424__$1,(2),inst_19413);
} else {
if((state_val_19425 === (2))){
var inst_19415 = (state_19424[(7)]);
var inst_19415__$1 = (state_19424[(2)]);
var state_19424__$1 = (function (){var statearr_19426 = state_19424;
(statearr_19426[(7)] = inst_19415__$1);

return statearr_19426;
})();
if(cljs.core.truth_(inst_19415__$1)){
var statearr_19427_19435 = state_19424__$1;
(statearr_19427_19435[(1)] = (3));

} else {
var statearr_19428_19436 = state_19424__$1;
(statearr_19428_19436[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19425 === (3))){
var inst_19415 = (state_19424[(7)]);
var inst_19417 = mecca.music.decode(inst_19415);
var state_19424__$1 = state_19424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19424__$1,(6),inst_19417);
} else {
if((state_val_19425 === (4))){
var state_19424__$1 = state_19424;
var statearr_19429_19437 = state_19424__$1;
(statearr_19429_19437[(2)] = null);

(statearr_19429_19437[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19425 === (5))){
var inst_19422 = (state_19424[(2)]);
var state_19424__$1 = state_19424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19424__$1,inst_19422);
} else {
if((state_val_19425 === (6))){
var inst_19419 = (state_19424[(2)]);
var state_19424__$1 = state_19424;
var statearr_19430_19438 = state_19424__$1;
(statearr_19430_19438[(2)] = inst_19419);

(statearr_19430_19438[(1)] = (5));


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
var statearr_19431 = [null,null,null,null,null,null,null,null];
(statearr_19431[(0)] = mecca$music$get_and_decode_$_state_machine__15401__auto__);

(statearr_19431[(1)] = (1));

return statearr_19431;
});
var mecca$music$get_and_decode_$_state_machine__15401__auto____1 = (function (state_19424){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19424);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19432){if((e19432 instanceof Object)){
var ex__15404__auto__ = e19432;
var statearr_19433_19439 = state_19424;
(statearr_19433_19439[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19424);

return cljs.core.cst$kw$recur;
} else {
throw e19432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19440 = state_19424;
state_19424 = G__19440;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__15401__auto__ = function(state_19424){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__15401__auto____1.call(this,state_19424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__15401__auto____0;
mecca$music$get_and_decode_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__15401__auto____1;
return mecca$music$get_and_decode_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19434 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19434[(6)] = c__15583__auto__);

return statearr_19434;
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
return (function (state_19469){
var state_val_19470 = (state_19469[(1)]);
if((state_val_19470 === (1))){
var inst_19441 = cljs.core.PersistentHashMap.EMPTY;
var inst_19442 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_19443 = inst_19441;
var inst_19444 = inst_19442;
var state_19469__$1 = (function (){var statearr_19471 = state_19469;
(statearr_19471[(7)] = inst_19444);

(statearr_19471[(8)] = inst_19443);

return statearr_19471;
})();
var statearr_19472_19484 = state_19469__$1;
(statearr_19472_19484[(2)] = null);

(statearr_19472_19484[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (2))){
var inst_19444 = (state_19469[(7)]);
var inst_19446 = cljs.core.first(inst_19444);
var inst_19447 = (inst_19446 == null);
var inst_19448 = cljs.core.not(inst_19447);
var state_19469__$1 = state_19469;
if(inst_19448){
var statearr_19473_19485 = state_19469__$1;
(statearr_19473_19485[(1)] = (4));

} else {
var statearr_19474_19486 = state_19469__$1;
(statearr_19474_19486[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (3))){
var inst_19467 = (state_19469[(2)]);
var state_19469__$1 = state_19469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19469__$1,inst_19467);
} else {
if((state_val_19470 === (4))){
var inst_19444 = (state_19469[(7)]);
var inst_19450 = (state_19469[(9)]);
var inst_19450__$1 = cljs.core.first(inst_19444);
var inst_19451 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_19452 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19450__$1),".mp3"].join('');
var inst_19453 = [inst_19452,inst_19450__$1];
var inst_19454 = cljs.core.PersistentHashMap.fromArrays(inst_19451,inst_19453);
var inst_19455 = mecca.music.get_and_decode(inst_19454);
var state_19469__$1 = (function (){var statearr_19475 = state_19469;
(statearr_19475[(9)] = inst_19450__$1);

return statearr_19475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19469__$1,(7),inst_19455);
} else {
if((state_val_19470 === (5))){
var inst_19443 = (state_19469[(8)]);
var state_19469__$1 = state_19469;
var statearr_19476_19487 = state_19469__$1;
(statearr_19476_19487[(2)] = inst_19443);

(statearr_19476_19487[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (6))){
var inst_19465 = (state_19469[(2)]);
var state_19469__$1 = state_19469;
var statearr_19477_19488 = state_19469__$1;
(statearr_19477_19488[(2)] = inst_19465);

(statearr_19477_19488[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19470 === (7))){
var inst_19444 = (state_19469[(7)]);
var inst_19450 = (state_19469[(9)]);
var inst_19443 = (state_19469[(8)]);
var inst_19457 = (state_19469[(2)]);
var inst_19458 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19450], 0));
var inst_19459 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19457], 0));
var inst_19460 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_19443,inst_19450,inst_19457);
var inst_19461 = cljs.core.rest(inst_19444);
var inst_19443__$1 = inst_19460;
var inst_19444__$1 = inst_19461;
var state_19469__$1 = (function (){var statearr_19478 = state_19469;
(statearr_19478[(7)] = inst_19444__$1);

(statearr_19478[(10)] = inst_19459);

(statearr_19478[(11)] = inst_19458);

(statearr_19478[(8)] = inst_19443__$1);

return statearr_19478;
})();
var statearr_19479_19489 = state_19469__$1;
(statearr_19479_19489[(2)] = null);

(statearr_19479_19489[(1)] = (2));


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
var statearr_19480 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19480[(0)] = mecca$music$load_samples_$_state_machine__15401__auto__);

(statearr_19480[(1)] = (1));

return statearr_19480;
});
var mecca$music$load_samples_$_state_machine__15401__auto____1 = (function (state_19469){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19469);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19481){if((e19481 instanceof Object)){
var ex__15404__auto__ = e19481;
var statearr_19482_19490 = state_19469;
(statearr_19482_19490[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19469);

return cljs.core.cst$kw$recur;
} else {
throw e19481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19491 = state_19469;
state_19469 = G__19491;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__15401__auto__ = function(state_19469){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__15401__auto____1.call(this,state_19469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__15401__auto____0;
mecca$music$load_samples_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__15401__auto____1;
return mecca$music$load_samples_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19483 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19483[(6)] = c__15583__auto__);

return statearr_19483;
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
return (function (state_19498){
var state_val_19499 = (state_19498[(1)]);
if((state_val_19499 === (1))){
var inst_19492 = mecca.music.load_samples();
var state_19498__$1 = state_19498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19498__$1,(2),inst_19492);
} else {
if((state_val_19499 === (2))){
var inst_19494 = (state_19498[(2)]);
var inst_19495 = mecca.music.samples = inst_19494;
var inst_19496 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_19498__$1 = (function (){var statearr_19500 = state_19498;
(statearr_19500[(7)] = inst_19495);

return statearr_19500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19498__$1,inst_19496);
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
var statearr_19501 = [null,null,null,null,null,null,null,null];
(statearr_19501[(0)] = mecca$music$state_machine__15401__auto__);

(statearr_19501[(1)] = (1));

return statearr_19501;
});
var mecca$music$state_machine__15401__auto____1 = (function (state_19498){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19498);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19502){if((e19502 instanceof Object)){
var ex__15404__auto__ = e19502;
var statearr_19503_19505 = state_19498;
(statearr_19503_19505[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19498);

return cljs.core.cst$kw$recur;
} else {
throw e19502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19506 = state_19498;
state_19498 = G__19506;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$state_machine__15401__auto__ = function(state_19498){
switch(arguments.length){
case 0:
return mecca$music$state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$state_machine__15401__auto____1.call(this,state_19498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__15401__auto____0;
mecca$music$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__15401__auto____1;
return mecca$music$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19504 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19504[(6)] = c__15583__auto__);

return statearr_19504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto__))
);

return c__15583__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__19507 = midi_num;
switch (G__19507) {
case (56):
return 0.525;

break;
case (57):
return 0.55;

break;
case (58):
return 0.63;

break;
case (59):
return 0.7;

break;
case (60):
return 0.75;

break;
case (61):
return 0.85;

break;
case (62):
return 0.96;

break;
case (63):
return 1.06;

break;
case (64):
return 1.135;

break;
case (65):
return 1.28;

break;
case (66):
return 1.43;

break;
case (67):
return 1.5;

break;
case (68):
return 1.714285714285714;

break;
case (69):
return 1.89;

break;
case (70):
return (2);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19507)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
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

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__19509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19509) : re_frame.core.subscribe.call(null,G__19509));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__19510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19510) : re_frame.core.subscribe.call(null,G__19510));
})();
var G__19511_19520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19511_19520) : re_frame.core.dispatch.call(null,G__19511_19520));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__19512(s__19513){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__19513__$1 = s__19513;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19513__$1);
if(temp__5457__auto__){
var s__19513__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19513__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19513__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19515 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19514 = (0);
while(true){
if((i__19514 < size__4323__auto__)){
var map__19516 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19514);
var map__19516__$1 = ((((!((map__19516 == null)))?(((((map__19516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19516):map__19516);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19516__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19516__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19516__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__19515,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__19521 = (i__19514 + (1));
i__19514 = G__19521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19515),mecca$music$play_song_BANG__$_iter__19512(cljs.core.chunk_rest(s__19513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19515),null);
}
} else {
var map__19518 = cljs.core.first(s__19513__$2);
var map__19518__$1 = ((((!((map__19518 == null)))?(((((map__19518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19518):map__19518);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19518__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19518__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19518__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__19512(cljs.core.rest(s__19513__$2)));
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
