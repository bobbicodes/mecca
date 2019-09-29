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
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__19395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19395) : re_frame.core.dispatch.call(null,G__19395));
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(200));
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
return (function (state_19407){
var state_val_19408 = (state_19407[(1)]);
if((state_val_19408 === (1))){
var inst_19396 = mecca.music.load_sound(named_url);
var state_19407__$1 = state_19407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19407__$1,(2),inst_19396);
} else {
if((state_val_19408 === (2))){
var inst_19398 = (state_19407[(7)]);
var inst_19398__$1 = (state_19407[(2)]);
var state_19407__$1 = (function (){var statearr_19409 = state_19407;
(statearr_19409[(7)] = inst_19398__$1);

return statearr_19409;
})();
if(cljs.core.truth_(inst_19398__$1)){
var statearr_19410_19418 = state_19407__$1;
(statearr_19410_19418[(1)] = (3));

} else {
var statearr_19411_19419 = state_19407__$1;
(statearr_19411_19419[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19408 === (3))){
var inst_19398 = (state_19407[(7)]);
var inst_19400 = mecca.music.decode(inst_19398);
var state_19407__$1 = state_19407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19407__$1,(6),inst_19400);
} else {
if((state_val_19408 === (4))){
var state_19407__$1 = state_19407;
var statearr_19412_19420 = state_19407__$1;
(statearr_19412_19420[(2)] = null);

(statearr_19412_19420[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19408 === (5))){
var inst_19405 = (state_19407[(2)]);
var state_19407__$1 = state_19407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19407__$1,inst_19405);
} else {
if((state_val_19408 === (6))){
var inst_19402 = (state_19407[(2)]);
var state_19407__$1 = state_19407;
var statearr_19413_19421 = state_19407__$1;
(statearr_19413_19421[(2)] = inst_19402);

(statearr_19413_19421[(1)] = (5));


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
var statearr_19414 = [null,null,null,null,null,null,null,null];
(statearr_19414[(0)] = mecca$music$get_and_decode_$_state_machine__15401__auto__);

(statearr_19414[(1)] = (1));

return statearr_19414;
});
var mecca$music$get_and_decode_$_state_machine__15401__auto____1 = (function (state_19407){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19407);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19415){if((e19415 instanceof Object)){
var ex__15404__auto__ = e19415;
var statearr_19416_19422 = state_19407;
(statearr_19416_19422[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19407);

return cljs.core.cst$kw$recur;
} else {
throw e19415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19423 = state_19407;
state_19407 = G__19423;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__15401__auto__ = function(state_19407){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__15401__auto____1.call(this,state_19407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__15401__auto____0;
mecca$music$get_and_decode_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__15401__auto____1;
return mecca$music$get_and_decode_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19417 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19417[(6)] = c__15583__auto__);

return statearr_19417;
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
return (function (state_19452){
var state_val_19453 = (state_19452[(1)]);
if((state_val_19453 === (1))){
var inst_19424 = cljs.core.PersistentHashMap.EMPTY;
var inst_19425 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_19426 = inst_19424;
var inst_19427 = inst_19425;
var state_19452__$1 = (function (){var statearr_19454 = state_19452;
(statearr_19454[(7)] = inst_19426);

(statearr_19454[(8)] = inst_19427);

return statearr_19454;
})();
var statearr_19455_19467 = state_19452__$1;
(statearr_19455_19467[(2)] = null);

(statearr_19455_19467[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19453 === (2))){
var inst_19427 = (state_19452[(8)]);
var inst_19429 = cljs.core.first(inst_19427);
var inst_19430 = (inst_19429 == null);
var inst_19431 = cljs.core.not(inst_19430);
var state_19452__$1 = state_19452;
if(inst_19431){
var statearr_19456_19468 = state_19452__$1;
(statearr_19456_19468[(1)] = (4));

} else {
var statearr_19457_19469 = state_19452__$1;
(statearr_19457_19469[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19453 === (3))){
var inst_19450 = (state_19452[(2)]);
var state_19452__$1 = state_19452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19452__$1,inst_19450);
} else {
if((state_val_19453 === (4))){
var inst_19433 = (state_19452[(9)]);
var inst_19427 = (state_19452[(8)]);
var inst_19433__$1 = cljs.core.first(inst_19427);
var inst_19434 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_19435 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19433__$1),".mp3"].join('');
var inst_19436 = [inst_19435,inst_19433__$1];
var inst_19437 = cljs.core.PersistentHashMap.fromArrays(inst_19434,inst_19436);
var inst_19438 = mecca.music.get_and_decode(inst_19437);
var state_19452__$1 = (function (){var statearr_19458 = state_19452;
(statearr_19458[(9)] = inst_19433__$1);

return statearr_19458;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19452__$1,(7),inst_19438);
} else {
if((state_val_19453 === (5))){
var inst_19426 = (state_19452[(7)]);
var state_19452__$1 = state_19452;
var statearr_19459_19470 = state_19452__$1;
(statearr_19459_19470[(2)] = inst_19426);

(statearr_19459_19470[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19453 === (6))){
var inst_19448 = (state_19452[(2)]);
var state_19452__$1 = state_19452;
var statearr_19460_19471 = state_19452__$1;
(statearr_19460_19471[(2)] = inst_19448);

(statearr_19460_19471[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19453 === (7))){
var inst_19426 = (state_19452[(7)]);
var inst_19433 = (state_19452[(9)]);
var inst_19427 = (state_19452[(8)]);
var inst_19440 = (state_19452[(2)]);
var inst_19441 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19433], 0));
var inst_19442 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19440], 0));
var inst_19443 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_19426,inst_19433,inst_19440);
var inst_19444 = cljs.core.rest(inst_19427);
var inst_19426__$1 = inst_19443;
var inst_19427__$1 = inst_19444;
var state_19452__$1 = (function (){var statearr_19461 = state_19452;
(statearr_19461[(10)] = inst_19442);

(statearr_19461[(7)] = inst_19426__$1);

(statearr_19461[(11)] = inst_19441);

(statearr_19461[(8)] = inst_19427__$1);

return statearr_19461;
})();
var statearr_19462_19472 = state_19452__$1;
(statearr_19462_19472[(2)] = null);

(statearr_19462_19472[(1)] = (2));


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
var statearr_19463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19463[(0)] = mecca$music$load_samples_$_state_machine__15401__auto__);

(statearr_19463[(1)] = (1));

return statearr_19463;
});
var mecca$music$load_samples_$_state_machine__15401__auto____1 = (function (state_19452){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19452);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19464){if((e19464 instanceof Object)){
var ex__15404__auto__ = e19464;
var statearr_19465_19473 = state_19452;
(statearr_19465_19473[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19452);

return cljs.core.cst$kw$recur;
} else {
throw e19464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19474 = state_19452;
state_19452 = G__19474;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__15401__auto__ = function(state_19452){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__15401__auto____1.call(this,state_19452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__15401__auto____0;
mecca$music$load_samples_$_state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__15401__auto____1;
return mecca$music$load_samples_$_state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19466 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19466[(6)] = c__15583__auto__);

return statearr_19466;
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
return (function (state_19481){
var state_val_19482 = (state_19481[(1)]);
if((state_val_19482 === (1))){
var inst_19475 = mecca.music.load_samples();
var state_19481__$1 = state_19481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19481__$1,(2),inst_19475);
} else {
if((state_val_19482 === (2))){
var inst_19477 = (state_19481[(2)]);
var inst_19478 = mecca.music.samples = inst_19477;
var inst_19479 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_19481__$1 = (function (){var statearr_19483 = state_19481;
(statearr_19483[(7)] = inst_19478);

return statearr_19483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19481__$1,inst_19479);
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
var statearr_19484 = [null,null,null,null,null,null,null,null];
(statearr_19484[(0)] = mecca$music$state_machine__15401__auto__);

(statearr_19484[(1)] = (1));

return statearr_19484;
});
var mecca$music$state_machine__15401__auto____1 = (function (state_19481){
while(true){
var ret_value__15402__auto__ = (function (){try{while(true){
var result__15403__auto__ = switch__15400__auto__(state_19481);
if(cljs.core.keyword_identical_QMARK_(result__15403__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15403__auto__;
}
break;
}
}catch (e19485){if((e19485 instanceof Object)){
var ex__15404__auto__ = e19485;
var statearr_19486_19488 = state_19481;
(statearr_19486_19488[(5)] = ex__15404__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19481);

return cljs.core.cst$kw$recur;
} else {
throw e19485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15402__auto__,cljs.core.cst$kw$recur)){
var G__19489 = state_19481;
state_19481 = G__19489;
continue;
} else {
return ret_value__15402__auto__;
}
break;
}
});
mecca$music$state_machine__15401__auto__ = function(state_19481){
switch(arguments.length){
case 0:
return mecca$music$state_machine__15401__auto____0.call(this);
case 1:
return mecca$music$state_machine__15401__auto____1.call(this,state_19481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__15401__auto____0;
mecca$music$state_machine__15401__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__15401__auto____1;
return mecca$music$state_machine__15401__auto__;
})()
;})(switch__15400__auto__,c__15583__auto__))
})();
var state__15585__auto__ = (function (){var statearr_19487 = (f__15584__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15584__auto__.cljs$core$IFn$_invoke$arity$0() : f__15584__auto__.call(null));
(statearr_19487[(6)] = c__15583__auto__);

return statearr_19487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15585__auto__);
});})(c__15583__auto__))
);

return c__15583__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__19490 = midi_num;
switch (G__19490) {
case (49):
return 0.25;

break;
case (50):
return 0.28;

break;
case (51):
return 0.31;

break;
case (52):
return 0.35;

break;
case (53):
return 0.375;

break;
case (54):
return 0.41;

break;
case (55):
return 0.46;

break;
case (56):
return 0.5;

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
return (1);

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
return 1.8571428571428568;

break;
case (70):
return (2);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19490)].join('')));

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
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__19492 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19492) : re_frame.core.subscribe.call(null,G__19492));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now){
return (function mecca$music$play_song_BANG__$_iter__19493(s__19494){
return (new cljs.core.LazySeq(null,((function (notes,now){
return (function (){
var s__19494__$1 = s__19494;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19494__$1);
if(temp__5457__auto__){
var s__19494__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19494__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19494__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19496 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19495 = (0);
while(true){
if((i__19495 < size__4323__auto__)){
var map__19497 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19495);
var map__19497__$1 = ((((!((map__19497 == null)))?(((((map__19497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19497):map__19497);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19497__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19497__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19497__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__19496,mecca.music.play_at(instrument,pitch,(now + time)));

var G__19501 = (i__19495 + (1));
i__19495 = G__19501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19496),mecca$music$play_song_BANG__$_iter__19493(cljs.core.chunk_rest(s__19494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19496),null);
}
} else {
var map__19499 = cljs.core.first(s__19494__$2);
var map__19499__$1 = ((((!((map__19499 == null)))?(((((map__19499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19499):map__19499);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19499__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19499__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19499__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + time)),mecca$music$play_song_BANG__$_iter__19493(cljs.core.rest(s__19494__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now))
,null,null));
});})(notes,now))
;
return iter__4324__auto__(cljs.core.deref(notes));
})());
});
