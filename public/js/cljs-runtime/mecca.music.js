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
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55990_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__55990_SHARP_),(cljs.core.deref(beat) + (1)));
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
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55991_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__55991_SHARP_);
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
var c__49039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_56007){
var state_val_56008 = (state_56007[(1)]);
if((state_val_56008 === (1))){
var inst_55996 = mecca.music.load_sound(named_url);
var state_56007__$1 = state_56007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56007__$1,(2),inst_55996);
} else {
if((state_val_56008 === (2))){
var inst_55998 = (state_56007[(7)]);
var inst_55998__$1 = (state_56007[(2)]);
var state_56007__$1 = (function (){var statearr_56009 = state_56007;
(statearr_56009[(7)] = inst_55998__$1);

return statearr_56009;
})();
if(cljs.core.truth_(inst_55998__$1)){
var statearr_56010_56195 = state_56007__$1;
(statearr_56010_56195[(1)] = (3));

} else {
var statearr_56011_56196 = state_56007__$1;
(statearr_56011_56196[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56008 === (3))){
var inst_55998 = (state_56007[(7)]);
var inst_56000 = mecca.music.decode(inst_55998);
var state_56007__$1 = state_56007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56007__$1,(6),inst_56000);
} else {
if((state_val_56008 === (4))){
var state_56007__$1 = state_56007;
var statearr_56012_56197 = state_56007__$1;
(statearr_56012_56197[(2)] = null);

(statearr_56012_56197[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56008 === (5))){
var inst_56005 = (state_56007[(2)]);
var state_56007__$1 = state_56007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56007__$1,inst_56005);
} else {
if((state_val_56008 === (6))){
var inst_56002 = (state_56007[(2)]);
var state_56007__$1 = state_56007;
var statearr_56013_56198 = state_56007__$1;
(statearr_56013_56198[(2)] = inst_56002);

(statearr_56013_56198[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__48932__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__48932__auto____0 = (function (){
var statearr_56014 = [null,null,null,null,null,null,null,null];
(statearr_56014[(0)] = mecca$music$get_and_decode_$_state_machine__48932__auto__);

(statearr_56014[(1)] = (1));

return statearr_56014;
});
var mecca$music$get_and_decode_$_state_machine__48932__auto____1 = (function (state_56007){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_56007);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e56015){var ex__48935__auto__ = e56015;
var statearr_56016_56199 = state_56007;
(statearr_56016_56199[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_56007[(4)]))){
var statearr_56017_56200 = state_56007;
(statearr_56017_56200[(1)] = cljs.core.first((state_56007[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56201 = state_56007;
state_56007 = G__56201;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__48932__auto__ = function(state_56007){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__48932__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__48932__auto____1.call(this,state_56007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__48932__auto____0;
mecca$music$get_and_decode_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__48932__auto____1;
return mecca$music$get_and_decode_$_state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_56018 = f__49040__auto__();
(statearr_56018[(6)] = c__49039__auto__);

return statearr_56018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));

return c__49039__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__49039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_56047){
var state_val_56048 = (state_56047[(1)]);
if((state_val_56048 === (1))){
var inst_56019 = cljs.core.PersistentHashMap.EMPTY;
var inst_56020 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_56021 = inst_56019;
var inst_56022 = inst_56020;
var state_56047__$1 = (function (){var statearr_56049 = state_56047;
(statearr_56049[(7)] = inst_56021);

(statearr_56049[(8)] = inst_56022);

return statearr_56049;
})();
var statearr_56050_56202 = state_56047__$1;
(statearr_56050_56202[(2)] = null);

(statearr_56050_56202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (2))){
var inst_56022 = (state_56047[(8)]);
var inst_56024 = cljs.core.first(inst_56022);
var inst_56025 = (inst_56024 == null);
var inst_56026 = cljs.core.not(inst_56025);
var state_56047__$1 = state_56047;
if(inst_56026){
var statearr_56051_56203 = state_56047__$1;
(statearr_56051_56203[(1)] = (4));

} else {
var statearr_56052_56204 = state_56047__$1;
(statearr_56052_56204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (3))){
var inst_56045 = (state_56047[(2)]);
var state_56047__$1 = state_56047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56047__$1,inst_56045);
} else {
if((state_val_56048 === (4))){
var inst_56022 = (state_56047[(8)]);
var inst_56028 = (state_56047[(9)]);
var inst_56028__$1 = cljs.core.first(inst_56022);
var inst_56029 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_56030 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56028__$1),".mp3"].join('');
var inst_56031 = [inst_56030,inst_56028__$1];
var inst_56032 = cljs.core.PersistentHashMap.fromArrays(inst_56029,inst_56031);
var inst_56033 = mecca.music.get_and_decode(inst_56032);
var state_56047__$1 = (function (){var statearr_56053 = state_56047;
(statearr_56053[(9)] = inst_56028__$1);

return statearr_56053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56047__$1,(7),inst_56033);
} else {
if((state_val_56048 === (5))){
var inst_56021 = (state_56047[(7)]);
var state_56047__$1 = state_56047;
var statearr_56054_56207 = state_56047__$1;
(statearr_56054_56207[(2)] = inst_56021);

(statearr_56054_56207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (6))){
var inst_56043 = (state_56047[(2)]);
var state_56047__$1 = state_56047;
var statearr_56100_56208 = state_56047__$1;
(statearr_56100_56208[(2)] = inst_56043);

(statearr_56100_56208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (7))){
var inst_56021 = (state_56047[(7)]);
var inst_56022 = (state_56047[(8)]);
var inst_56028 = (state_56047[(9)]);
var inst_56035 = (state_56047[(2)]);
var inst_56036 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56028], 0));
var inst_56037 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56035], 0));
var inst_56038 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_56021,inst_56028,inst_56035);
var inst_56039 = cljs.core.rest(inst_56022);
var inst_56021__$1 = inst_56038;
var inst_56022__$1 = inst_56039;
var state_56047__$1 = (function (){var statearr_56104 = state_56047;
(statearr_56104[(10)] = inst_56036);

(statearr_56104[(7)] = inst_56021__$1);

(statearr_56104[(8)] = inst_56022__$1);

(statearr_56104[(11)] = inst_56037);

return statearr_56104;
})();
var statearr_56108_56210 = state_56047__$1;
(statearr_56108_56210[(2)] = null);

(statearr_56108_56210[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__48932__auto__ = null;
var mecca$music$load_samples_$_state_machine__48932__auto____0 = (function (){
var statearr_56109 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56109[(0)] = mecca$music$load_samples_$_state_machine__48932__auto__);

(statearr_56109[(1)] = (1));

return statearr_56109;
});
var mecca$music$load_samples_$_state_machine__48932__auto____1 = (function (state_56047){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_56047);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e56110){var ex__48935__auto__ = e56110;
var statearr_56111_56213 = state_56047;
(statearr_56111_56213[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_56047[(4)]))){
var statearr_56112_56214 = state_56047;
(statearr_56112_56214[(1)] = cljs.core.first((state_56047[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56215 = state_56047;
state_56047 = G__56215;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__48932__auto__ = function(state_56047){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__48932__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__48932__auto____1.call(this,state_56047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__48932__auto____0;
mecca$music$load_samples_$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__48932__auto____1;
return mecca$music$load_samples_$_state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_56113 = f__49040__auto__();
(statearr_56113[(6)] = c__49039__auto__);

return statearr_56113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));

return c__49039__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__49039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_56123){
var state_val_56124 = (state_56123[(1)]);
if((state_val_56124 === (1))){
var inst_56114 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56115 = mecca.music.load_samples();
var state_56123__$1 = (function (){var statearr_56125 = state_56123;
(statearr_56125[(7)] = inst_56114);

return statearr_56125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56123__$1,(2),inst_56115);
} else {
if((state_val_56124 === (2))){
var inst_56114 = (state_56123[(7)]);
var inst_56117 = (state_56123[(2)]);
var inst_56118 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_56117];
var inst_56119 = (new cljs.core.PersistentVector(null,2,(5),inst_56114,inst_56118,null));
var inst_56120 = re_frame.core.dispatch(inst_56119);
var inst_56121 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_56123__$1 = (function (){var statearr_56126 = state_56123;
(statearr_56126[(8)] = inst_56120);

return statearr_56126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56123__$1,inst_56121);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__48932__auto__ = null;
var mecca$music$state_machine__48932__auto____0 = (function (){
var statearr_56127 = [null,null,null,null,null,null,null,null,null];
(statearr_56127[(0)] = mecca$music$state_machine__48932__auto__);

(statearr_56127[(1)] = (1));

return statearr_56127;
});
var mecca$music$state_machine__48932__auto____1 = (function (state_56123){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_56123);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e56128){var ex__48935__auto__ = e56128;
var statearr_56129_56218 = state_56123;
(statearr_56129_56218[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_56123[(4)]))){
var statearr_56130_56219 = state_56123;
(statearr_56130_56219[(1)] = cljs.core.first((state_56123[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56220 = state_56123;
state_56123 = G__56220;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
mecca$music$state_machine__48932__auto__ = function(state_56123){
switch(arguments.length){
case 0:
return mecca$music$state_machine__48932__auto____0.call(this);
case 1:
return mecca$music$state_machine__48932__auto____1.call(this,state_56123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__48932__auto____0;
mecca$music$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__48932__auto____1;
return mecca$music$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_56131 = f__49040__auto__();
(statearr_56131[(6)] = c__49039__auto__);

return statearr_56131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));

return c__49039__auto__;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__56132_SHARP_){
return (beats + p1__56132_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__56133_SHARP_){
return (p1__56133_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var started = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56134_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56134_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56134_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56135_SHARP_){
return mecca.music.advance_note(from,p1__56135_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$queue_section_$_iter__56136(s__56137){
return (new cljs.core.LazySeq(null,(function (){
var s__56137__$1 = s__56137;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56137__$1);
if(temp__5753__auto__){
var s__56137__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56137__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__56137__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__56139 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__56138 = (0);
while(true){
if((i__56138 < size__4621__auto__)){
var map__56140 = cljs.core._nth(c__4620__auto__,i__56138);
var map__56140__$1 = cljs.core.__destructure_map(map__56140);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56140__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56140__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56140__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__56139,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__56223 = (i__56138 + (1));
i__56138 = G__56223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56139),mecca$music$queue_section_$_iter__56136(cljs.core.chunk_rest(s__56137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56139),null);
}
} else {
var map__56141 = cljs.core.first(s__56137__$2);
var map__56141__$1 = cljs.core.__destructure_map(map__56141);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56141__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56141__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56141__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__56136(cljs.core.rest(s__56137__$2)));
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
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56142_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56142_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56142_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56143_SHARP_){
return mecca.music.advance_note(from,p1__56143_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$play_section_$_iter__56147(s__56148){
return (new cljs.core.LazySeq(null,(function (){
var s__56148__$1 = s__56148;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56148__$1);
if(temp__5753__auto__){
var s__56148__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56148__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__56148__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__56150 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__56149 = (0);
while(true){
if((i__56149 < size__4621__auto__)){
var map__56154 = cljs.core._nth(c__4620__auto__,i__56149);
var map__56154__$1 = cljs.core.__destructure_map(map__56154);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56154__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56154__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56154__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__56150,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__56224 = (i__56149 + (1));
i__56149 = G__56224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56150),mecca$music$play_section_$_iter__56147(cljs.core.chunk_rest(s__56148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56150),null);
}
} else {
var map__56156 = cljs.core.first(s__56148__$2);
var map__56156__$1 = cljs.core.__destructure_map(map__56156);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__56147(cljs.core.rest(s__56148__$2)));
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
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56163_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__56163_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null))).currentTime;
var tempo = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function mecca$music$play_song_BANG__$_iter__56178(s__56179){
return (new cljs.core.LazySeq(null,(function (){
var s__56179__$1 = s__56179;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56179__$1);
if(temp__5753__auto__){
var s__56179__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56179__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__56179__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__56181 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__56180 = (0);
while(true){
if((i__56180 < size__4621__auto__)){
var map__56188 = cljs.core._nth(c__4620__auto__,i__56180);
var map__56188__$1 = cljs.core.__destructure_map(map__56188);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56188__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56188__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56188__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__56181,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__56225 = (i__56180 + (1));
i__56180 = G__56225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56181),mecca$music$play_song_BANG__$_iter__56178(cljs.core.chunk_rest(s__56179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56181),null);
}
} else {
var map__56191 = cljs.core.first(s__56179__$2);
var map__56191__$1 = cljs.core.__destructure_map(map__56191);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56191__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56191__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56191__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__56178(cljs.core.rest(s__56179__$2)));
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
