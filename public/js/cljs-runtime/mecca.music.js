goog.provide('mecca.music');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var jump = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null));
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
if(cljs.core.truth_(and__4221__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4221__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71312_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71312_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var playing_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
var now = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71313_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71313_SHARP_);
}),cljs.core.deref(notes)));
var started = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null));

return mecca.music.mario_move();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(60));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var req = (new XMLHttpRequest());
(req.responseType = "arraybuffer");

(req.onload = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.status,(200))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,new cljs.core.Keyword(null,"buffer","buffer",617295198),req.response));

return cljs.core.async.close_BANG_(out);
} else {
return cljs.core.async.close_BANG_(out);
}
}));

req.open("GET",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).decodeAudioData(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url),(function (decoded_buffer){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700),decoded_buffer));

return cljs.core.async.close_BANG_(out);
}),(function (){
console.error("Error loading file ",cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_url], 0)));

return cljs.core.async.close_BANG_(out);
}));
} else {
cljs.core.async.close_BANG_(out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__47942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_71335){
var state_val_71336 = (state_71335[(1)]);
if((state_val_71336 === (1))){
var inst_71324 = mecca.music.load_sound(named_url);
var state_71335__$1 = state_71335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71335__$1,(2),inst_71324);
} else {
if((state_val_71336 === (2))){
var inst_71326 = (state_71335[(7)]);
var inst_71326__$1 = (state_71335[(2)]);
var state_71335__$1 = (function (){var statearr_71339 = state_71335;
(statearr_71339[(7)] = inst_71326__$1);

return statearr_71339;
})();
if(cljs.core.truth_(inst_71326__$1)){
var statearr_71340_71446 = state_71335__$1;
(statearr_71340_71446[(1)] = (3));

} else {
var statearr_71341_71447 = state_71335__$1;
(statearr_71341_71447[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71336 === (3))){
var inst_71326 = (state_71335[(7)]);
var inst_71328 = mecca.music.decode(inst_71326);
var state_71335__$1 = state_71335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71335__$1,(6),inst_71328);
} else {
if((state_val_71336 === (4))){
var state_71335__$1 = state_71335;
var statearr_71342_71448 = state_71335__$1;
(statearr_71342_71448[(2)] = null);

(statearr_71342_71448[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71336 === (5))){
var inst_71333 = (state_71335[(2)]);
var state_71335__$1 = state_71335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71335__$1,inst_71333);
} else {
if((state_val_71336 === (6))){
var inst_71330 = (state_71335[(2)]);
var state_71335__$1 = state_71335;
var statearr_71343_71449 = state_71335__$1;
(statearr_71343_71449[(2)] = inst_71330);

(statearr_71343_71449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var mecca$music$get_and_decode_$_state_machine__47758__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__47758__auto____0 = (function (){
var statearr_71344 = [null,null,null,null,null,null,null,null];
(statearr_71344[(0)] = mecca$music$get_and_decode_$_state_machine__47758__auto__);

(statearr_71344[(1)] = (1));

return statearr_71344;
});
var mecca$music$get_and_decode_$_state_machine__47758__auto____1 = (function (state_71335){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_71335);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e71349){var ex__47761__auto__ = e71349;
var statearr_71350_71450 = state_71335;
(statearr_71350_71450[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_71335[(4)]))){
var statearr_71351_71451 = state_71335;
(statearr_71351_71451[(1)] = cljs.core.first((state_71335[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71452 = state_71335;
state_71335 = G__71452;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__47758__auto__ = function(state_71335){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__47758__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__47758__auto____1.call(this,state_71335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__47758__auto____0;
mecca$music$get_and_decode_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__47758__auto____1;
return mecca$music$get_and_decode_$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_71355 = f__47943__auto__();
(statearr_71355[(6)] = c__47942__auto__);

return statearr_71355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));

return c__47942__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__47942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_71387){
var state_val_71388 = (state_71387[(1)]);
if((state_val_71388 === (1))){
var inst_71359 = cljs.core.PersistentHashMap.EMPTY;
var inst_71360 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_71361 = inst_71359;
var inst_71362 = inst_71360;
var state_71387__$1 = (function (){var statearr_71389 = state_71387;
(statearr_71389[(7)] = inst_71362);

(statearr_71389[(8)] = inst_71361);

return statearr_71389;
})();
var statearr_71390_71453 = state_71387__$1;
(statearr_71390_71453[(2)] = null);

(statearr_71390_71453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (2))){
var inst_71362 = (state_71387[(7)]);
var inst_71364 = cljs.core.first(inst_71362);
var inst_71365 = (inst_71364 == null);
var inst_71366 = cljs.core.not(inst_71365);
var state_71387__$1 = state_71387;
if(inst_71366){
var statearr_71391_71454 = state_71387__$1;
(statearr_71391_71454[(1)] = (4));

} else {
var statearr_71392_71455 = state_71387__$1;
(statearr_71392_71455[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (3))){
var inst_71385 = (state_71387[(2)]);
var state_71387__$1 = state_71387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71387__$1,inst_71385);
} else {
if((state_val_71388 === (4))){
var inst_71362 = (state_71387[(7)]);
var inst_71368 = (state_71387[(9)]);
var inst_71368__$1 = cljs.core.first(inst_71362);
var inst_71369 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_71370 = ["/mecca/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_71368__$1),".mp3"].join('');
var inst_71371 = [inst_71370,inst_71368__$1];
var inst_71372 = cljs.core.PersistentHashMap.fromArrays(inst_71369,inst_71371);
var inst_71373 = mecca.music.get_and_decode(inst_71372);
var state_71387__$1 = (function (){var statearr_71393 = state_71387;
(statearr_71393[(9)] = inst_71368__$1);

return statearr_71393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71387__$1,(7),inst_71373);
} else {
if((state_val_71388 === (5))){
var inst_71361 = (state_71387[(8)]);
var state_71387__$1 = state_71387;
var statearr_71394_71456 = state_71387__$1;
(statearr_71394_71456[(2)] = inst_71361);

(statearr_71394_71456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (6))){
var inst_71383 = (state_71387[(2)]);
var state_71387__$1 = state_71387;
var statearr_71395_71457 = state_71387__$1;
(statearr_71395_71457[(2)] = inst_71383);

(statearr_71395_71457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71388 === (7))){
var inst_71362 = (state_71387[(7)]);
var inst_71368 = (state_71387[(9)]);
var inst_71361 = (state_71387[(8)]);
var inst_71375 = (state_71387[(2)]);
var inst_71376 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_71368], 0));
var inst_71377 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_71375], 0));
var inst_71378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_71361,inst_71368,inst_71375);
var inst_71379 = cljs.core.rest(inst_71362);
var inst_71361__$1 = inst_71378;
var inst_71362__$1 = inst_71379;
var state_71387__$1 = (function (){var statearr_71396 = state_71387;
(statearr_71396[(10)] = inst_71377);

(statearr_71396[(7)] = inst_71362__$1);

(statearr_71396[(11)] = inst_71376);

(statearr_71396[(8)] = inst_71361__$1);

return statearr_71396;
})();
var statearr_71397_71458 = state_71387__$1;
(statearr_71397_71458[(2)] = null);

(statearr_71397_71458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var mecca$music$load_samples_$_state_machine__47758__auto__ = null;
var mecca$music$load_samples_$_state_machine__47758__auto____0 = (function (){
var statearr_71398 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71398[(0)] = mecca$music$load_samples_$_state_machine__47758__auto__);

(statearr_71398[(1)] = (1));

return statearr_71398;
});
var mecca$music$load_samples_$_state_machine__47758__auto____1 = (function (state_71387){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_71387);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e71399){var ex__47761__auto__ = e71399;
var statearr_71400_71459 = state_71387;
(statearr_71400_71459[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_71387[(4)]))){
var statearr_71401_71460 = state_71387;
(statearr_71401_71460[(1)] = cljs.core.first((state_71387[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71461 = state_71387;
state_71387 = G__71461;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__47758__auto__ = function(state_71387){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__47758__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__47758__auto____1.call(this,state_71387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__47758__auto____0;
mecca$music$load_samples_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__47758__auto____1;
return mecca$music$load_samples_$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_71402 = f__47943__auto__();
(statearr_71402[(6)] = c__47942__auto__);

return statearr_71402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));

return c__47942__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__47942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_71412){
var state_val_71413 = (state_71412[(1)]);
if((state_val_71413 === (1))){
var inst_71403 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71404 = mecca.music.load_samples();
var state_71412__$1 = (function (){var statearr_71414 = state_71412;
(statearr_71414[(7)] = inst_71403);

return statearr_71414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71412__$1,(2),inst_71404);
} else {
if((state_val_71413 === (2))){
var inst_71403 = (state_71412[(7)]);
var inst_71406 = (state_71412[(2)]);
var inst_71407 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_71406];
var inst_71408 = (new cljs.core.PersistentVector(null,2,(5),inst_71403,inst_71407,null));
var inst_71409 = re_frame.core.dispatch(inst_71408);
var inst_71410 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_71412__$1 = (function (){var statearr_71415 = state_71412;
(statearr_71415[(8)] = inst_71409);

return statearr_71415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71412__$1,inst_71410);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__47758__auto__ = null;
var mecca$music$state_machine__47758__auto____0 = (function (){
var statearr_71416 = [null,null,null,null,null,null,null,null,null];
(statearr_71416[(0)] = mecca$music$state_machine__47758__auto__);

(statearr_71416[(1)] = (1));

return statearr_71416;
});
var mecca$music$state_machine__47758__auto____1 = (function (state_71412){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_71412);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e71417){var ex__47761__auto__ = e71417;
var statearr_71418_71462 = state_71412;
(statearr_71418_71462[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_71412[(4)]))){
var statearr_71419_71463 = state_71412;
(statearr_71419_71463[(1)] = cljs.core.first((state_71412[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71464 = state_71412;
state_71412 = G__71464;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
mecca$music$state_machine__47758__auto__ = function(state_71412){
switch(arguments.length){
case 0:
return mecca$music$state_machine__47758__auto____0.call(this);
case 1:
return mecca$music$state_machine__47758__auto____1.call(this,state_71412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__47758__auto____0;
mecca$music$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__47758__auto____1;
return mecca$music$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_71420 = f__47943__auto__();
(statearr_71420[(6)] = c__47942__auto__);

return statearr_71420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));

return c__47942__auto__;
})();
}
mecca.music.add_semitone = (function mecca$music$add_semitone(rate){
return (rate * Math.pow((2),((1) / (12))));
});
mecca.music.sub_semitone = (function mecca$music$sub_semitone(rate){
return (rate * Math.pow((2),((-1) / (12))));
});
mecca.music.inc_rate = (function mecca$music$inc_rate(semis){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.music.add_semitone,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semis,(1)));
});
mecca.music.dec_rate = (function mecca$music$dec_rate(semis){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.music.sub_semitone,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semis,(1)));
});
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
if(((66) < midi_num)){
return mecca.music.inc_rate((midi_num - (66)));
} else {
return mecca.music.dec_rate(((68) - midi_num));
}
});
mecca.music.play_note = (function mecca$music$play_note(pitch){
var context = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null)));
var samples = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null));
var instrument = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null));
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),cljs.core.deref(instrument)));
var sample_source = context.createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),context.currentTime);

sample_source.connect(context.destination);

sample_source.start();

return sample_source;
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null));
var samples = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null));
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
var analyser = cljs.core.deref(context).createAnalyser();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

sample_source.connect(analyser);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null));
var samples = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null));
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__71421_SHARP_){
return (beats + p1__71421_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__71422_SHARP_){
return (p1__71422_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var started = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71423_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71423_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71423_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71424_SHARP_){
return mecca.music.advance_note(from,p1__71424_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$queue_section_$_iter__71425(s__71426){
return (new cljs.core.LazySeq(null,(function (){
var s__71426__$1 = s__71426;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71426__$1);
if(temp__5753__auto__){
var s__71426__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71426__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__71426__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__71428 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__71427 = (0);
while(true){
if((i__71427 < size__4621__auto__)){
var map__71429 = cljs.core._nth(c__4620__auto__,i__71427);
var map__71429__$1 = cljs.core.__destructure_map(map__71429);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71429__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71429__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71429__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__71428,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__71465 = (i__71427 + (1));
i__71427 = G__71465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71428),mecca$music$queue_section_$_iter__71425(cljs.core.chunk_rest(s__71426__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71428),null);
}
} else {
var map__71430 = cljs.core.first(s__71426__$2);
var map__71430__$1 = cljs.core.__destructure_map(map__71430);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71430__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71430__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71430__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__71425(cljs.core.rest(s__71426__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(section);
})());
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71431_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71431_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71431_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71432_SHARP_){
return mecca.music.advance_note(from,p1__71432_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$play_section_$_iter__71433(s__71434){
return (new cljs.core.LazySeq(null,(function (){
var s__71434__$1 = s__71434;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71434__$1);
if(temp__5753__auto__){
var s__71434__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71434__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__71434__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__71436 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__71435 = (0);
while(true){
if((i__71435 < size__4621__auto__)){
var map__71437 = cljs.core._nth(c__4620__auto__,i__71435);
var map__71437__$1 = cljs.core.__destructure_map(map__71437);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71437__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71437__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71437__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__71436,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__71466 = (i__71435 + (1));
i__71435 = G__71466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71436),mecca$music$play_section_$_iter__71433(cljs.core.chunk_rest(s__71434__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71436),null);
}
} else {
var map__71438 = cljs.core.first(s__71434__$2);
var map__71438__$1 = cljs.core.__destructure_map(map__71438);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71438__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71438__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71438__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__71433(cljs.core.rest(s__71434__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(advanced);
})());
});
mecca.music.play_notes = (function mecca$music$play_notes(n){
var editor_start = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var beat_length = ((60) / cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null)))));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var editor_start = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71439_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__71439_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$play_song_BANG__$_iter__71440(s__71441){
return (new cljs.core.LazySeq(null,(function (){
var s__71441__$1 = s__71441;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71441__$1);
if(temp__5753__auto__){
var s__71441__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71441__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__71441__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__71443 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__71442 = (0);
while(true){
if((i__71442 < size__4621__auto__)){
var map__71444 = cljs.core._nth(c__4620__auto__,i__71442);
var map__71444__$1 = cljs.core.__destructure_map(map__71444);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71444__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71444__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71444__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__71443,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__71467 = (i__71442 + (1));
i__71442 = G__71467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71443),mecca$music$play_song_BANG__$_iter__71440(cljs.core.chunk_rest(s__71441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71443),null);
}
} else {
var map__71445 = cljs.core.first(s__71441__$2);
var map__71445__$1 = cljs.core.__destructure_map(map__71445);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71445__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71445__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71445__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__71440(cljs.core.rest(s__71441__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});

//# sourceMappingURL=mecca.music.js.map
