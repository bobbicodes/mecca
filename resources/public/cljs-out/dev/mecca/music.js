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
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__19400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19400) : re_frame.core.subscribe.call(null,G__19400));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,now){
return (function (p1__19399_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19399_SHARP_);
});})(notes,now))
,cljs.core.deref(notes)));
var started = cljs.core.deref((function (){var G__19401 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19401) : re_frame.core.subscribe.call(null,G__19401));
})());
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - started);
var beat_length = ((60) / cljs.core.deref((function (){var G__19402 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19402) : re_frame.core.subscribe.call(null,G__19402));
})()));
var current_beat = (elapsed / beat_length);
if((length < current_beat)){
var G__19403_19405 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19403_19405) : re_frame.core.dispatch.call(null,G__19403_19405));
} else {
if(((started + beat_length) < now)){
var G__19404_19406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19404_19406) : re_frame.core.dispatch.call(null,G__19404_19406));
} else {
}
}

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__19407_19408 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19407_19408) : re_frame.core.dispatch.call(null,G__19407_19408));

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
return (function (state_19420){
var state_val_19421 = (state_19420[(1)]);
if((state_val_19421 === (1))){
var inst_19409 = mecca.music.load_sound(named_url);
var state_19420__$1 = state_19420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19420__$1,(2),inst_19409);
} else {
if((state_val_19421 === (2))){
var inst_19411 = (state_19420[(7)]);
var inst_19411__$1 = (state_19420[(2)]);
var state_19420__$1 = (function (){var statearr_19422 = state_19420;
(statearr_19422[(7)] = inst_19411__$1);

return statearr_19422;
})();
if(cljs.core.truth_(inst_19411__$1)){
var statearr_19423_19431 = state_19420__$1;
(statearr_19423_19431[(1)] = (3));

} else {
var statearr_19424_19432 = state_19420__$1;
(statearr_19424_19432[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19421 === (3))){
var inst_19411 = (state_19420[(7)]);
var inst_19413 = mecca.music.decode(inst_19411);
var state_19420__$1 = state_19420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19420__$1,(6),inst_19413);
} else {
if((state_val_19421 === (4))){
var state_19420__$1 = state_19420;
var statearr_19425_19433 = state_19420__$1;
(statearr_19425_19433[(2)] = null);

(statearr_19425_19433[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19421 === (5))){
var inst_19418 = (state_19420[(2)]);
var state_19420__$1 = state_19420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19420__$1,inst_19418);
} else {
if((state_val_19421 === (6))){
var inst_19415 = (state_19420[(2)]);
var state_19420__$1 = state_19420;
var statearr_19426_19434 = state_19420__$1;
(statearr_19426_19434[(2)] = inst_19415);

(statearr_19426_19434[(1)] = (5));


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
var statearr_19427 = [null,null,null,null,null,null,null,null];
(statearr_19427[(0)] = mecca$music$get_and_decode_$_state_machine__15401__auto__);

(statearr_19427[(1)] = (1));

return statearr_19427;
});
var mecca$music$get_and_decode_$_state_machine__15401__auto____1 = (function (state_19420){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19420);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19428){if((e19428 instanceof Object)){
var ex__15404__auto__ = e19428;
var statearr_19429_19435 = state_19420;
(statearr_19429_19435[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19420);

return cljs.core.cst$kw$recur;
} else {
throw e19428;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19436 = state_19420;
state_19420 = G__19436;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__15401__auto__ = function(state_19420){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__15401__auto____1.call(this,state_19420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__15401__auto____0;
mecca$music$get_and_decode_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__15401__auto____1;
return mecca$music$get_and_decode_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19430 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19430[(6)] = c__15583__auto__);

return statearr_19430;
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
return (function (state_19465){
var state_val_19466 = (state_19465[(1)]);
if((state_val_19466 === (1))){
var inst_19437 = cljs.core.PersistentHashMap.EMPTY;
var inst_19438 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_19439 = inst_19437;
var inst_19440 = inst_19438;
var state_19465__$1 = (function (){var statearr_19467 = state_19465;
(statearr_19467[(7)] = inst_19440);

(statearr_19467[(8)] = inst_19439);

return statearr_19467;
})();
var statearr_19468_19480 = state_19465__$1;
(statearr_19468_19480[(2)] = null);

(statearr_19468_19480[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19466 === (2))){
var inst_19440 = (state_19465[(7)]);
var inst_19442 = cljs.core.first(inst_19440);
var inst_19443 = (inst_19442 == null);
var inst_19444 = cljs.core.not(inst_19443);
var state_19465__$1 = state_19465;
if(inst_19444){
var statearr_19469_19481 = state_19465__$1;
(statearr_19469_19481[(1)] = (4));

} else {
var statearr_19470_19482 = state_19465__$1;
(statearr_19470_19482[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19466 === (3))){
var inst_19463 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19465__$1,inst_19463);
} else {
if((state_val_19466 === (4))){
var inst_19440 = (state_19465[(7)]);
var inst_19446 = (state_19465[(9)]);
var inst_19446__$1 = cljs.core.first(inst_19440);
var inst_19447 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_19448 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19446__$1),".mp3"].join('');
var inst_19449 = [inst_19448,inst_19446__$1];
var inst_19450 = cljs.core.PersistentHashMap.fromArrays(inst_19447,inst_19449);
var inst_19451 = mecca.music.get_and_decode(inst_19450);
var state_19465__$1 = (function (){var statearr_19471 = state_19465;
(statearr_19471[(9)] = inst_19446__$1);

return statearr_19471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19465__$1,(7),inst_19451);
} else {
if((state_val_19466 === (5))){
var inst_19439 = (state_19465[(8)]);
var state_19465__$1 = state_19465;
var statearr_19472_19483 = state_19465__$1;
(statearr_19472_19483[(2)] = inst_19439);

(statearr_19472_19483[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19466 === (6))){
var inst_19461 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19473_19484 = state_19465__$1;
(statearr_19473_19484[(2)] = inst_19461);

(statearr_19473_19484[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19466 === (7))){
var inst_19440 = (state_19465[(7)]);
var inst_19446 = (state_19465[(9)]);
var inst_19439 = (state_19465[(8)]);
var inst_19453 = (state_19465[(2)]);
var inst_19454 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19446], 0));
var inst_19455 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19453], 0));
var inst_19456 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_19439,inst_19446,inst_19453);
var inst_19457 = cljs.core.rest(inst_19440);
var inst_19439__$1 = inst_19456;
var inst_19440__$1 = inst_19457;
var state_19465__$1 = (function (){var statearr_19474 = state_19465;
(statearr_19474[(7)] = inst_19440__$1);

(statearr_19474[(10)] = inst_19454);

(statearr_19474[(8)] = inst_19439__$1);

(statearr_19474[(11)] = inst_19455);

return statearr_19474;
})();
var statearr_19475_19485 = state_19465__$1;
(statearr_19475_19485[(2)] = null);

(statearr_19475_19485[(1)] = (2));


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
var statearr_19476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19476[(0)] = mecca$music$load_samples_$_state_machine__15401__auto__);

(statearr_19476[(1)] = (1));

return statearr_19476;
});
var mecca$music$load_samples_$_state_machine__15401__auto____1 = (function (state_19465){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19465);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19477){if((e19477 instanceof Object)){
var ex__15404__auto__ = e19477;
var statearr_19478_19486 = state_19465;
(statearr_19478_19486[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19465);

return cljs.core.cst$kw$recur;
} else {
throw e19477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19487 = state_19465;
state_19465 = G__19487;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__15401__auto__ = function(state_19465){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__15401__auto____1.call(this,state_19465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__15401__auto____0;
mecca$music$load_samples_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__15401__auto____1;
return mecca$music$load_samples_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19479 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19479[(6)] = c__15583__auto__);

return statearr_19479;
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
return (function (state_19494){
var state_val_19495 = (state_19494[(1)]);
if((state_val_19495 === (1))){
var inst_19488 = mecca.music.load_samples();
var state_19494__$1 = state_19494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19494__$1,(2),inst_19488);
} else {
if((state_val_19495 === (2))){
var inst_19490 = (state_19494[(2)]);
var inst_19491 = mecca.music.samples = inst_19490;
var inst_19492 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_19494__$1 = (function (){var statearr_19496 = state_19494;
(statearr_19496[(7)] = inst_19491);

return statearr_19496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19494__$1,inst_19492);
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
var statearr_19497 = [null,null,null,null,null,null,null,null];
(statearr_19497[(0)] = mecca$music$state_machine__15401__auto__);

(statearr_19497[(1)] = (1));

return statearr_19497;
});
var mecca$music$state_machine__15401__auto____1 = (function (state_19494){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19494);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19498){if((e19498 instanceof Object)){
var ex__15404__auto__ = e19498;
var statearr_19499_19501 = state_19494;
(statearr_19499_19501[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19494);

return cljs.core.cst$kw$recur;
} else {
throw e19498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19502 = state_19494;
state_19494 = G__19502;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$state_machine__15401__auto__ = function(state_19494){
switch(arguments.length){
case 0:
return mecca$music$state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$state_machine__15401__auto____1.call(this,state_19494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__15401__auto____0;
mecca$music$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__15401__auto____1;
return mecca$music$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19500 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19500[(6)] = c__15583__auto__);

return statearr_19500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto__))
);

return c__15583__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__19503 = midi_num;
switch (G__19503) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19503)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(((77) - pitch)),cljs.core.deref(context).currentTime);

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
mecca.music.lookahead = 25.0;
mecca.music.schedule_ahead_time = 0.1;
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__19505 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19505) : re_frame.core.subscribe.call(null,G__19505));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__19506 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19506) : re_frame.core.subscribe.call(null,G__19506));
})();
var G__19507_19516 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19507_19516) : re_frame.core.dispatch.call(null,G__19507_19516));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__19508(s__19509){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__19509__$1 = s__19509;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19509__$1);
if(temp__5457__auto__){
var s__19509__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19509__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19509__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19511 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19510 = (0);
while(true){
if((i__19510 < size__4323__auto__)){
var map__19512 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19510);
var map__19512__$1 = ((((!((map__19512 == null)))?(((((map__19512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19512):map__19512);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19512__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19512__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19512__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__19511,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__19517 = (i__19510 + (1));
i__19510 = G__19517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19511),mecca$music$play_song_BANG__$_iter__19508(cljs.core.chunk_rest(s__19509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19511),null);
}
} else {
var map__19514 = cljs.core.first(s__19509__$2);
var map__19514__$1 = ((((!((map__19514 == null)))?(((((map__19514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19514):map__19514);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19514__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19514__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19514__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__19508(cljs.core.rest(s__19509__$2)));
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
