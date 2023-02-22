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
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72226_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__72226_SHARP_),(cljs.core.deref(beat) + (1)));
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
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72228_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__72228_SHARP_);
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
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_72260){
var state_val_72261 = (state_72260[(1)]);
if((state_val_72261 === (1))){
var inst_72248 = mecca.music.load_sound(named_url);
var state_72260__$1 = state_72260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72260__$1,(2),inst_72248);
} else {
if((state_val_72261 === (2))){
var inst_72250 = (state_72260[(7)]);
var inst_72250__$1 = (state_72260[(2)]);
var state_72260__$1 = (function (){var statearr_72263 = state_72260;
(statearr_72263[(7)] = inst_72250__$1);

return statearr_72263;
})();
if(cljs.core.truth_(inst_72250__$1)){
var statearr_72264_72411 = state_72260__$1;
(statearr_72264_72411[(1)] = (3));

} else {
var statearr_72265_72412 = state_72260__$1;
(statearr_72265_72412[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72261 === (3))){
var inst_72250 = (state_72260[(7)]);
var inst_72253 = mecca.music.decode(inst_72250);
var state_72260__$1 = state_72260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72260__$1,(6),inst_72253);
} else {
if((state_val_72261 === (4))){
var state_72260__$1 = state_72260;
var statearr_72268_72413 = state_72260__$1;
(statearr_72268_72413[(2)] = null);

(statearr_72268_72413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72261 === (5))){
var inst_72258 = (state_72260[(2)]);
var state_72260__$1 = state_72260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72260__$1,inst_72258);
} else {
if((state_val_72261 === (6))){
var inst_72255 = (state_72260[(2)]);
var state_72260__$1 = state_72260;
var statearr_72269_72415 = state_72260__$1;
(statearr_72269_72415[(2)] = inst_72255);

(statearr_72269_72415[(1)] = (5));


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
var statearr_72270 = [null,null,null,null,null,null,null,null];
(statearr_72270[(0)] = mecca$music$get_and_decode_$_state_machine__47758__auto__);

(statearr_72270[(1)] = (1));

return statearr_72270;
});
var mecca$music$get_and_decode_$_state_machine__47758__auto____1 = (function (state_72260){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_72260);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e72271){var ex__47761__auto__ = e72271;
var statearr_72272_72423 = state_72260;
(statearr_72272_72423[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_72260[(4)]))){
var statearr_72273_72424 = state_72260;
(statearr_72273_72424[(1)] = cljs.core.first((state_72260[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72426 = state_72260;
state_72260 = G__72426;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__47758__auto__ = function(state_72260){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__47758__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__47758__auto____1.call(this,state_72260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__47758__auto____0;
mecca$music$get_and_decode_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__47758__auto____1;
return mecca$music$get_and_decode_$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_72274 = f__47943__auto__();
(statearr_72274[(6)] = c__47942__auto__);

return statearr_72274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));

return c__47942__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__47942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_72308){
var state_val_72309 = (state_72308[(1)]);
if((state_val_72309 === (1))){
var inst_72279 = cljs.core.PersistentHashMap.EMPTY;
var inst_72280 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_72281 = inst_72279;
var inst_72282 = inst_72280;
var state_72308__$1 = (function (){var statearr_72310 = state_72308;
(statearr_72310[(7)] = inst_72281);

(statearr_72310[(8)] = inst_72282);

return statearr_72310;
})();
var statearr_72311_72438 = state_72308__$1;
(statearr_72311_72438[(2)] = null);

(statearr_72311_72438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72309 === (2))){
var inst_72282 = (state_72308[(8)]);
var inst_72285 = cljs.core.first(inst_72282);
var inst_72286 = (inst_72285 == null);
var inst_72287 = cljs.core.not(inst_72286);
var state_72308__$1 = state_72308;
if(inst_72287){
var statearr_72312_72439 = state_72308__$1;
(statearr_72312_72439[(1)] = (4));

} else {
var statearr_72313_72441 = state_72308__$1;
(statearr_72313_72441[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72309 === (3))){
var inst_72306 = (state_72308[(2)]);
var state_72308__$1 = state_72308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72308__$1,inst_72306);
} else {
if((state_val_72309 === (4))){
var inst_72289 = (state_72308[(9)]);
var inst_72282 = (state_72308[(8)]);
var inst_72289__$1 = cljs.core.first(inst_72282);
var inst_72290 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_72291 = ["/mecca/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_72289__$1),".mp3"].join('');
var inst_72292 = [inst_72291,inst_72289__$1];
var inst_72293 = cljs.core.PersistentHashMap.fromArrays(inst_72290,inst_72292);
var inst_72294 = mecca.music.get_and_decode(inst_72293);
var state_72308__$1 = (function (){var statearr_72314 = state_72308;
(statearr_72314[(9)] = inst_72289__$1);

return statearr_72314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72308__$1,(7),inst_72294);
} else {
if((state_val_72309 === (5))){
var inst_72281 = (state_72308[(7)]);
var state_72308__$1 = state_72308;
var statearr_72315_72445 = state_72308__$1;
(statearr_72315_72445[(2)] = inst_72281);

(statearr_72315_72445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72309 === (6))){
var inst_72304 = (state_72308[(2)]);
var state_72308__$1 = state_72308;
var statearr_72316_72447 = state_72308__$1;
(statearr_72316_72447[(2)] = inst_72304);

(statearr_72316_72447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72309 === (7))){
var inst_72281 = (state_72308[(7)]);
var inst_72289 = (state_72308[(9)]);
var inst_72282 = (state_72308[(8)]);
var inst_72296 = (state_72308[(2)]);
var inst_72297 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72289], 0));
var inst_72298 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72296], 0));
var inst_72299 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_72281,inst_72289,inst_72296);
var inst_72300 = cljs.core.rest(inst_72282);
var inst_72281__$1 = inst_72299;
var inst_72282__$1 = inst_72300;
var state_72308__$1 = (function (){var statearr_72317 = state_72308;
(statearr_72317[(7)] = inst_72281__$1);

(statearr_72317[(10)] = inst_72298);

(statearr_72317[(11)] = inst_72297);

(statearr_72317[(8)] = inst_72282__$1);

return statearr_72317;
})();
var statearr_72318_72452 = state_72308__$1;
(statearr_72318_72452[(2)] = null);

(statearr_72318_72452[(1)] = (2));


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
var statearr_72319 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72319[(0)] = mecca$music$load_samples_$_state_machine__47758__auto__);

(statearr_72319[(1)] = (1));

return statearr_72319;
});
var mecca$music$load_samples_$_state_machine__47758__auto____1 = (function (state_72308){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_72308);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e72320){var ex__47761__auto__ = e72320;
var statearr_72321_72468 = state_72308;
(statearr_72321_72468[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_72308[(4)]))){
var statearr_72322_72470 = state_72308;
(statearr_72322_72470[(1)] = cljs.core.first((state_72308[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72474 = state_72308;
state_72308 = G__72474;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__47758__auto__ = function(state_72308){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__47758__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__47758__auto____1.call(this,state_72308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__47758__auto____0;
mecca$music$load_samples_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__47758__auto____1;
return mecca$music$load_samples_$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_72323 = f__47943__auto__();
(statearr_72323[(6)] = c__47942__auto__);

return statearr_72323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));

return c__47942__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__47942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_72333){
var state_val_72334 = (state_72333[(1)]);
if((state_val_72334 === (1))){
var inst_72324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72325 = mecca.music.load_samples();
var state_72333__$1 = (function (){var statearr_72338 = state_72333;
(statearr_72338[(7)] = inst_72324);

return statearr_72338;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72333__$1,(2),inst_72325);
} else {
if((state_val_72334 === (2))){
var inst_72324 = (state_72333[(7)]);
var inst_72327 = (state_72333[(2)]);
var inst_72328 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_72327];
var inst_72329 = (new cljs.core.PersistentVector(null,2,(5),inst_72324,inst_72328,null));
var inst_72330 = re_frame.core.dispatch(inst_72329);
var inst_72331 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_72333__$1 = (function (){var statearr_72343 = state_72333;
(statearr_72343[(8)] = inst_72330);

return statearr_72343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72333__$1,inst_72331);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__47758__auto__ = null;
var mecca$music$state_machine__47758__auto____0 = (function (){
var statearr_72344 = [null,null,null,null,null,null,null,null,null];
(statearr_72344[(0)] = mecca$music$state_machine__47758__auto__);

(statearr_72344[(1)] = (1));

return statearr_72344;
});
var mecca$music$state_machine__47758__auto____1 = (function (state_72333){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_72333);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e72345){var ex__47761__auto__ = e72345;
var statearr_72346_72485 = state_72333;
(statearr_72346_72485[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_72333[(4)]))){
var statearr_72355_72487 = state_72333;
(statearr_72355_72487[(1)] = cljs.core.first((state_72333[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72491 = state_72333;
state_72333 = G__72491;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
mecca$music$state_machine__47758__auto__ = function(state_72333){
switch(arguments.length){
case 0:
return mecca$music$state_machine__47758__auto____0.call(this);
case 1:
return mecca$music$state_machine__47758__auto____1.call(this,state_72333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__47758__auto____0;
mecca$music$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__47758__auto____1;
return mecca$music$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_72356 = f__47943__auto__();
(statearr_72356[(6)] = c__47942__auto__);

return statearr_72356;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__72363_SHARP_){
return (beats + p1__72363_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__72364_SHARP_){
return (p1__72364_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var started = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72365_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__72365_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__72365_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72366_SHARP_){
return mecca.music.advance_note(from,p1__72366_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$queue_section_$_iter__72367(s__72368){
return (new cljs.core.LazySeq(null,(function (){
var s__72368__$1 = s__72368;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72368__$1);
if(temp__5753__auto__){
var s__72368__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72368__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__72368__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__72370 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__72369 = (0);
while(true){
if((i__72369 < size__4621__auto__)){
var map__72371 = cljs.core._nth(c__4620__auto__,i__72369);
var map__72371__$1 = cljs.core.__destructure_map(map__72371);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72371__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72371__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72371__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__72370,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__72526 = (i__72369 + (1));
i__72369 = G__72526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72370),mecca$music$queue_section_$_iter__72367(cljs.core.chunk_rest(s__72368__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72370),null);
}
} else {
var map__72372 = cljs.core.first(s__72368__$2);
var map__72372__$1 = cljs.core.__destructure_map(map__72372);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72372__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72372__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72372__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__72367(cljs.core.rest(s__72368__$2)));
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
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72373_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__72373_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__72373_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72374_SHARP_){
return mecca.music.advance_note(from,p1__72374_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$play_section_$_iter__72375(s__72376){
return (new cljs.core.LazySeq(null,(function (){
var s__72376__$1 = s__72376;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72376__$1);
if(temp__5753__auto__){
var s__72376__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72376__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__72376__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__72378 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__72377 = (0);
while(true){
if((i__72377 < size__4621__auto__)){
var map__72379 = cljs.core._nth(c__4620__auto__,i__72377);
var map__72379__$1 = cljs.core.__destructure_map(map__72379);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72379__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72379__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72379__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__72378,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__72527 = (i__72377 + (1));
i__72377 = G__72527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72378),mecca$music$play_section_$_iter__72375(cljs.core.chunk_rest(s__72376__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72378),null);
}
} else {
var map__72380 = cljs.core.first(s__72376__$2);
var map__72380__$1 = cljs.core.__destructure_map(map__72380);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72380__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72380__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72380__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__72375(cljs.core.rest(s__72376__$2)));
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
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72381_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__72381_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$play_song_BANG__$_iter__72382(s__72383){
return (new cljs.core.LazySeq(null,(function (){
var s__72383__$1 = s__72383;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72383__$1);
if(temp__5753__auto__){
var s__72383__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72383__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__72383__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__72385 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__72384 = (0);
while(true){
if((i__72384 < size__4621__auto__)){
var map__72386 = cljs.core._nth(c__4620__auto__,i__72384);
var map__72386__$1 = cljs.core.__destructure_map(map__72386);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72386__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72386__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72386__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__72385,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__72541 = (i__72384 + (1));
i__72384 = G__72541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72385),mecca$music$play_song_BANG__$_iter__72382(cljs.core.chunk_rest(s__72383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72385),null);
}
} else {
var map__72387 = cljs.core.first(s__72383__$2);
var map__72387__$1 = cljs.core.__destructure_map(map__72387);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72387__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72387__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72387__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__72382(cljs.core.rest(s__72383__$2)));
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
