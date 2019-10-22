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
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = (function (){var G__14256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14256) : re_frame.core.subscribe.call(null,G__14256));
})();
var notes = (function (){var G__14257 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14257) : re_frame.core.subscribe.call(null,G__14257));
})();
var jump = (function (){var G__14258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14258) : re_frame.core.subscribe.call(null,G__14258));
})();
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref((function (){var G__14260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14260) : re_frame.core.subscribe.call(null,G__14260));
})());
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__3938__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes,jump){
return (function (p1__14255_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__14255_SHARP_),(cljs.core.deref(beat) + (1)));
});})(beat,notes,jump))
,cljs.core.deref(notes))))){
var G__14261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14261) : re_frame.core.dispatch.call(null,G__14261));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__14263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14263) : re_frame.core.subscribe.call(null,G__14263));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__14264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14264) : re_frame.core.subscribe.call(null,G__14264));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__14262_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__14262_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = (function (){var G__14265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14265) : re_frame.core.subscribe.call(null,G__14265));
})();
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__14266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14266) : re_frame.core.subscribe.call(null,G__14266));
})()));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__14267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14267) : re_frame.core.subscribe.call(null,G__14267));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__14268_14271 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14268_14271) : re_frame.core.dispatch.call(null,G__14268_14271));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__14269_14272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14269_14272) : re_frame.core.dispatch.call(null,G__14269_14272));

var G__14270_14273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14270_14273) : re_frame.core.dispatch.call(null,G__14270_14273));
} else {
}
}
} else {
}

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__14274_14275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14274_14275) : re_frame.core.dispatch.call(null,G__14274_14275));

mecca.music.song_done_QMARK_();

return mecca.music.scheduler();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(25));
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
return (function (state_14287){
var state_val_14288 = (state_14287[(1)]);
if((state_val_14288 === (1))){
var inst_14276 = mecca.music.load_sound(named_url);
var state_14287__$1 = state_14287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14287__$1,(2),inst_14276);
} else {
if((state_val_14288 === (2))){
var inst_14278 = (state_14287[(7)]);
var inst_14278__$1 = (state_14287[(2)]);
var state_14287__$1 = (function (){var statearr_14289 = state_14287;
(statearr_14289[(7)] = inst_14278__$1);

return statearr_14289;
})();
if(cljs.core.truth_(inst_14278__$1)){
var statearr_14290_14298 = state_14287__$1;
(statearr_14290_14298[(1)] = (3));

} else {
var statearr_14291_14299 = state_14287__$1;
(statearr_14291_14299[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14288 === (3))){
var inst_14278 = (state_14287[(7)]);
var inst_14280 = mecca.music.decode(inst_14278);
var state_14287__$1 = state_14287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14287__$1,(6),inst_14280);
} else {
if((state_val_14288 === (4))){
var state_14287__$1 = state_14287;
var statearr_14292_14300 = state_14287__$1;
(statearr_14292_14300[(2)] = null);

(statearr_14292_14300[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14288 === (5))){
var inst_14285 = (state_14287[(2)]);
var state_14287__$1 = state_14287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14287__$1,inst_14285);
} else {
if((state_val_14288 === (6))){
var inst_14282 = (state_14287[(2)]);
var state_14287__$1 = state_14287;
var statearr_14293_14301 = state_14287__$1;
(statearr_14293_14301[(2)] = inst_14282);

(statearr_14293_14301[(1)] = (5));


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
var statearr_14294 = [null,null,null,null,null,null,null,null];
(statearr_14294[(0)] = mecca$music$get_and_decode_$_state_machine__12672__auto__);

(statearr_14294[(1)] = (1));

return statearr_14294;
});
var mecca$music$get_and_decode_$_state_machine__12672__auto____1 = (function (state_14287){
while(true){
var ret_value__12673__auto__ = (function (){try{while(true){
var result__12674__auto__ = switch__12671__auto__(state_14287);
if(cljs.core.keyword_identical_QMARK_(result__12674__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12674__auto__;
}
break;
}
}catch (e14295){if((e14295 instanceof Object)){
var ex__12675__auto__ = e14295;
var statearr_14296_14302 = state_14287;
(statearr_14296_14302[(5)] = ex__12675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14287);

return cljs.core.cst$kw$recur;
} else {
throw e14295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12673__auto__,cljs.core.cst$kw$recur)){
var G__14303 = state_14287;
state_14287 = G__14303;
continue;
} else {
return ret_value__12673__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__12672__auto__ = function(state_14287){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__12672__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__12672__auto____1.call(this,state_14287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__12672__auto____0;
mecca$music$get_and_decode_$_state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__12672__auto____1;
return mecca$music$get_and_decode_$_state_machine__12672__auto__;
})()
;})(switch__12671__auto__,c__12736__auto__))
})();
var state__12738__auto__ = (function (){var statearr_14297 = (f__12737__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12737__auto__.cljs$core$IFn$_invoke$arity$0() : f__12737__auto__.call(null));
(statearr_14297[(6)] = c__12736__auto__);

return statearr_14297;
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
return (function (state_14332){
var state_val_14333 = (state_14332[(1)]);
if((state_val_14333 === (1))){
var inst_14304 = cljs.core.PersistentHashMap.EMPTY;
var inst_14305 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_14306 = inst_14304;
var inst_14307 = inst_14305;
var state_14332__$1 = (function (){var statearr_14334 = state_14332;
(statearr_14334[(7)] = inst_14307);

(statearr_14334[(8)] = inst_14306);

return statearr_14334;
})();
var statearr_14335_14347 = state_14332__$1;
(statearr_14335_14347[(2)] = null);

(statearr_14335_14347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (2))){
var inst_14307 = (state_14332[(7)]);
var inst_14309 = cljs.core.first(inst_14307);
var inst_14310 = (inst_14309 == null);
var inst_14311 = cljs.core.not(inst_14310);
var state_14332__$1 = state_14332;
if(inst_14311){
var statearr_14336_14348 = state_14332__$1;
(statearr_14336_14348[(1)] = (4));

} else {
var statearr_14337_14349 = state_14332__$1;
(statearr_14337_14349[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (3))){
var inst_14330 = (state_14332[(2)]);
var state_14332__$1 = state_14332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14332__$1,inst_14330);
} else {
if((state_val_14333 === (4))){
var inst_14307 = (state_14332[(7)]);
var inst_14313 = (state_14332[(9)]);
var inst_14313__$1 = cljs.core.first(inst_14307);
var inst_14314 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_14315 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14313__$1),".mp3"].join('');
var inst_14316 = [inst_14315,inst_14313__$1];
var inst_14317 = cljs.core.PersistentHashMap.fromArrays(inst_14314,inst_14316);
var inst_14318 = mecca.music.get_and_decode(inst_14317);
var state_14332__$1 = (function (){var statearr_14338 = state_14332;
(statearr_14338[(9)] = inst_14313__$1);

return statearr_14338;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14332__$1,(7),inst_14318);
} else {
if((state_val_14333 === (5))){
var inst_14306 = (state_14332[(8)]);
var state_14332__$1 = state_14332;
var statearr_14339_14350 = state_14332__$1;
(statearr_14339_14350[(2)] = inst_14306);

(statearr_14339_14350[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (6))){
var inst_14328 = (state_14332[(2)]);
var state_14332__$1 = state_14332;
var statearr_14340_14351 = state_14332__$1;
(statearr_14340_14351[(2)] = inst_14328);

(statearr_14340_14351[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14333 === (7))){
var inst_14307 = (state_14332[(7)]);
var inst_14313 = (state_14332[(9)]);
var inst_14306 = (state_14332[(8)]);
var inst_14320 = (state_14332[(2)]);
var inst_14321 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14313], 0));
var inst_14322 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14320], 0));
var inst_14323 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_14306,inst_14313,inst_14320);
var inst_14324 = cljs.core.rest(inst_14307);
var inst_14306__$1 = inst_14323;
var inst_14307__$1 = inst_14324;
var state_14332__$1 = (function (){var statearr_14341 = state_14332;
(statearr_14341[(7)] = inst_14307__$1);

(statearr_14341[(10)] = inst_14322);

(statearr_14341[(11)] = inst_14321);

(statearr_14341[(8)] = inst_14306__$1);

return statearr_14341;
})();
var statearr_14342_14352 = state_14332__$1;
(statearr_14342_14352[(2)] = null);

(statearr_14342_14352[(1)] = (2));


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
var statearr_14343 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14343[(0)] = mecca$music$load_samples_$_state_machine__12672__auto__);

(statearr_14343[(1)] = (1));

return statearr_14343;
});
var mecca$music$load_samples_$_state_machine__12672__auto____1 = (function (state_14332){
while(true){
var ret_value__12673__auto__ = (function (){try{while(true){
var result__12674__auto__ = switch__12671__auto__(state_14332);
if(cljs.core.keyword_identical_QMARK_(result__12674__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12674__auto__;
}
break;
}
}catch (e14344){if((e14344 instanceof Object)){
var ex__12675__auto__ = e14344;
var statearr_14345_14353 = state_14332;
(statearr_14345_14353[(5)] = ex__12675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14332);

return cljs.core.cst$kw$recur;
} else {
throw e14344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12673__auto__,cljs.core.cst$kw$recur)){
var G__14354 = state_14332;
state_14332 = G__14354;
continue;
} else {
return ret_value__12673__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__12672__auto__ = function(state_14332){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__12672__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__12672__auto____1.call(this,state_14332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__12672__auto____0;
mecca$music$load_samples_$_state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__12672__auto____1;
return mecca$music$load_samples_$_state_machine__12672__auto__;
})()
;})(switch__12671__auto__,c__12736__auto__))
})();
var state__12738__auto__ = (function (){var statearr_14346 = (f__12737__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12737__auto__.cljs$core$IFn$_invoke$arity$0() : f__12737__auto__.call(null));
(statearr_14346[(6)] = c__12736__auto__);

return statearr_14346;
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
return (function (state_14361){
var state_val_14362 = (state_14361[(1)]);
if((state_val_14362 === (1))){
var inst_14355 = mecca.music.load_samples();
var state_14361__$1 = state_14361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14361__$1,(2),inst_14355);
} else {
if((state_val_14362 === (2))){
var inst_14357 = (state_14361[(2)]);
var inst_14358 = mecca.music.samples = inst_14357;
var inst_14359 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_14361__$1 = (function (){var statearr_14363 = state_14361;
(statearr_14363[(7)] = inst_14358);

return statearr_14363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14361__$1,inst_14359);
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
var statearr_14364 = [null,null,null,null,null,null,null,null];
(statearr_14364[(0)] = mecca$music$state_machine__12672__auto__);

(statearr_14364[(1)] = (1));

return statearr_14364;
});
var mecca$music$state_machine__12672__auto____1 = (function (state_14361){
while(true){
var ret_value__12673__auto__ = (function (){try{while(true){
var result__12674__auto__ = switch__12671__auto__(state_14361);
if(cljs.core.keyword_identical_QMARK_(result__12674__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12674__auto__;
}
break;
}
}catch (e14365){if((e14365 instanceof Object)){
var ex__12675__auto__ = e14365;
var statearr_14366_14368 = state_14361;
(statearr_14366_14368[(5)] = ex__12675__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14361);

return cljs.core.cst$kw$recur;
} else {
throw e14365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12673__auto__,cljs.core.cst$kw$recur)){
var G__14369 = state_14361;
state_14361 = G__14369;
continue;
} else {
return ret_value__12673__auto__;
}
break;
}
});
mecca$music$state_machine__12672__auto__ = function(state_14361){
switch(arguments.length){
case 0:
return mecca$music$state_machine__12672__auto____0.call(this);
case 1:
return mecca$music$state_machine__12672__auto____1.call(this,state_14361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__12672__auto____0;
mecca$music$state_machine__12672__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__12672__auto____1;
return mecca$music$state_machine__12672__auto__;
})()
;})(switch__12671__auto__,c__12736__auto__))
})();
var state__12738__auto__ = (function (){var statearr_14367 = (f__12737__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12737__auto__.cljs$core$IFn$_invoke$arity$0() : f__12737__auto__.call(null));
(statearr_14367[(6)] = c__12736__auto__);

return statearr_14367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12738__auto__);
});})(c__12736__auto__))
);

return c__12736__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__14370 = midi_num;
switch (G__14370) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14370)].join('')));

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
var notes = (function (){var G__14372 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14372) : re_frame.core.subscribe.call(null,G__14372));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__14373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14373) : re_frame.core.subscribe.call(null,G__14373));
})();
var G__14374_14383 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14374_14383) : re_frame.core.dispatch.call(null,G__14374_14383));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__14375(s__14376){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__14376__$1 = s__14376;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14376__$1);
if(temp__5457__auto__){
var s__14376__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14376__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14376__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14378 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14377 = (0);
while(true){
if((i__14377 < size__4323__auto__)){
var map__14379 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14377);
var map__14379__$1 = ((((!((map__14379 == null)))?(((((map__14379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14379):map__14379);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14379__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14379__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14379__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__14378,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__14384 = (i__14377 + (1));
i__14377 = G__14384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14378),mecca$music$play_song_BANG__$_iter__14375(cljs.core.chunk_rest(s__14376__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14378),null);
}
} else {
var map__14381 = cljs.core.first(s__14376__$2);
var map__14381__$1 = ((((!((map__14381 == null)))?(((((map__14381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14381):map__14381);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__14375(cljs.core.rest(s__14376__$2)));
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
