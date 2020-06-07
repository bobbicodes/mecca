goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__42071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42071) : re_frame.core.subscribe.call(null,G__42071));
})();
var notes = (function (){var G__42072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42072) : re_frame.core.subscribe.call(null,G__42072));
})();
var jump = (function (){var G__42073 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42073) : re_frame.core.subscribe.call(null,G__42073));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__42076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42076) : re_frame.core.subscribe.call(null,G__42076));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42070_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42070_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__42077 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42077) : re_frame.core.dispatch.call(null,G__42077));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__42079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42079) : re_frame.core.subscribe.call(null,G__42079));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__42080 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42080) : re_frame.core.subscribe.call(null,G__42080));
})());
var now = cljs.core.deref((function (){var G__42081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42081) : re_frame.core.subscribe.call(null,G__42081));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42078_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42078_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__42082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42082) : re_frame.core.subscribe.call(null,G__42082));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__42083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42083) : re_frame.core.subscribe.call(null,G__42083));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__42084 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42084) : re_frame.core.subscribe.call(null,G__42084));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__42085_42329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42085_42329) : re_frame.core.dispatch.call(null,G__42085_42329));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__42086_42332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42086_42332) : re_frame.core.dispatch.call(null,G__42086_42332));

var G__42087_42337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42087_42337) : re_frame.core.dispatch.call(null,G__42087_42337));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__42088_42340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42088_42340) : re_frame.core.dispatch.call(null,G__42088_42340));

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
cljs.core.deref((function (){var G__42089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42089) : re_frame.core.subscribe.call(null,G__42089));
})()).decodeAudioData(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url),(function (decoded_buffer){
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
var source = cljs.core.deref((function (){var G__42090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42090) : re_frame.core.subscribe.call(null,G__42090));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__34784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_42102){
var state_val_42103 = (state_42102[(1)]);
if((state_val_42103 === (1))){
var inst_42091 = mecca.music.load_sound(named_url);
var state_42102__$1 = state_42102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42102__$1,(2),inst_42091);
} else {
if((state_val_42103 === (2))){
var inst_42093 = (state_42102[(7)]);
var inst_42093__$1 = (state_42102[(2)]);
var state_42102__$1 = (function (){var statearr_42104 = state_42102;
(statearr_42104[(7)] = inst_42093__$1);

return statearr_42104;
})();
if(cljs.core.truth_(inst_42093__$1)){
var statearr_42105_42347 = state_42102__$1;
(statearr_42105_42347[(1)] = (3));

} else {
var statearr_42106_42348 = state_42102__$1;
(statearr_42106_42348[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42103 === (3))){
var inst_42093 = (state_42102[(7)]);
var inst_42095 = mecca.music.decode(inst_42093);
var state_42102__$1 = state_42102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42102__$1,(6),inst_42095);
} else {
if((state_val_42103 === (4))){
var state_42102__$1 = state_42102;
var statearr_42107_42349 = state_42102__$1;
(statearr_42107_42349[(2)] = null);

(statearr_42107_42349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42103 === (5))){
var inst_42100 = (state_42102[(2)]);
var state_42102__$1 = state_42102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42102__$1,inst_42100);
} else {
if((state_val_42103 === (6))){
var inst_42097 = (state_42102[(2)]);
var state_42102__$1 = state_42102;
var statearr_42108_42350 = state_42102__$1;
(statearr_42108_42350[(2)] = inst_42097);

(statearr_42108_42350[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__34463__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__34463__auto____0 = (function (){
var statearr_42109 = [null,null,null,null,null,null,null,null];
(statearr_42109[(0)] = mecca$music$get_and_decode_$_state_machine__34463__auto__);

(statearr_42109[(1)] = (1));

return statearr_42109;
});
var mecca$music$get_and_decode_$_state_machine__34463__auto____1 = (function (state_42102){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_42102);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e42110){if((e42110 instanceof Object)){
var ex__34466__auto__ = e42110;
var statearr_42111_42351 = state_42102;
(statearr_42111_42351[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42353 = state_42102;
state_42102 = G__42353;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__34463__auto__ = function(state_42102){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__34463__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__34463__auto____1.call(this,state_42102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__34463__auto____0;
mecca$music$get_and_decode_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__34463__auto____1;
return mecca$music$get_and_decode_$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_42112 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_42112[(6)] = c__34784__auto__);

return statearr_42112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

return c__34784__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__34784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_42141){
var state_val_42142 = (state_42141[(1)]);
if((state_val_42142 === (1))){
var inst_42113 = cljs.core.PersistentHashMap.EMPTY;
var inst_42114 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_42115 = inst_42113;
var inst_42116 = inst_42114;
var state_42141__$1 = (function (){var statearr_42143 = state_42141;
(statearr_42143[(7)] = inst_42116);

(statearr_42143[(8)] = inst_42115);

return statearr_42143;
})();
var statearr_42144_42358 = state_42141__$1;
(statearr_42144_42358[(2)] = null);

(statearr_42144_42358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (2))){
var inst_42116 = (state_42141[(7)]);
var inst_42118 = cljs.core.first(inst_42116);
var inst_42119 = (inst_42118 == null);
var inst_42120 = cljs.core.not(inst_42119);
var state_42141__$1 = state_42141;
if(inst_42120){
var statearr_42145_42363 = state_42141__$1;
(statearr_42145_42363[(1)] = (4));

} else {
var statearr_42146_42364 = state_42141__$1;
(statearr_42146_42364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (3))){
var inst_42139 = (state_42141[(2)]);
var state_42141__$1 = state_42141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42141__$1,inst_42139);
} else {
if((state_val_42142 === (4))){
var inst_42116 = (state_42141[(7)]);
var inst_42122 = (state_42141[(9)]);
var inst_42122__$1 = cljs.core.first(inst_42116);
var inst_42123 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_42124 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42122__$1),".mp3"].join('');
var inst_42125 = [inst_42124,inst_42122__$1];
var inst_42126 = cljs.core.PersistentHashMap.fromArrays(inst_42123,inst_42125);
var inst_42127 = mecca.music.get_and_decode(inst_42126);
var state_42141__$1 = (function (){var statearr_42147 = state_42141;
(statearr_42147[(9)] = inst_42122__$1);

return statearr_42147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42141__$1,(7),inst_42127);
} else {
if((state_val_42142 === (5))){
var inst_42115 = (state_42141[(8)]);
var state_42141__$1 = state_42141;
var statearr_42148_42365 = state_42141__$1;
(statearr_42148_42365[(2)] = inst_42115);

(statearr_42148_42365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (6))){
var inst_42137 = (state_42141[(2)]);
var state_42141__$1 = state_42141;
var statearr_42149_42366 = state_42141__$1;
(statearr_42149_42366[(2)] = inst_42137);

(statearr_42149_42366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42142 === (7))){
var inst_42116 = (state_42141[(7)]);
var inst_42115 = (state_42141[(8)]);
var inst_42122 = (state_42141[(9)]);
var inst_42129 = (state_42141[(2)]);
var inst_42130 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42122], 0));
var inst_42131 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42129], 0));
var inst_42132 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_42115,inst_42122,inst_42129);
var inst_42133 = cljs.core.rest(inst_42116);
var inst_42115__$1 = inst_42132;
var inst_42116__$1 = inst_42133;
var state_42141__$1 = (function (){var statearr_42150 = state_42141;
(statearr_42150[(10)] = inst_42131);

(statearr_42150[(7)] = inst_42116__$1);

(statearr_42150[(8)] = inst_42115__$1);

(statearr_42150[(11)] = inst_42130);

return statearr_42150;
})();
var statearr_42151_42367 = state_42141__$1;
(statearr_42151_42367[(2)] = null);

(statearr_42151_42367[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__34463__auto__ = null;
var mecca$music$load_samples_$_state_machine__34463__auto____0 = (function (){
var statearr_42152 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42152[(0)] = mecca$music$load_samples_$_state_machine__34463__auto__);

(statearr_42152[(1)] = (1));

return statearr_42152;
});
var mecca$music$load_samples_$_state_machine__34463__auto____1 = (function (state_42141){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_42141);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e42153){if((e42153 instanceof Object)){
var ex__34466__auto__ = e42153;
var statearr_42154_42368 = state_42141;
(statearr_42154_42368[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42369 = state_42141;
state_42141 = G__42369;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__34463__auto__ = function(state_42141){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__34463__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__34463__auto____1.call(this,state_42141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__34463__auto____0;
mecca$music$load_samples_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__34463__auto____1;
return mecca$music$load_samples_$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_42155 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_42155[(6)] = c__34784__auto__);

return statearr_42155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

return c__34784__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__34784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_42165){
var state_val_42166 = (state_42165[(1)]);
if((state_val_42166 === (1))){
var inst_42156 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42157 = mecca.music.load_samples();
var state_42165__$1 = (function (){var statearr_42167 = state_42165;
(statearr_42167[(7)] = inst_42156);

return statearr_42167;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42165__$1,(2),inst_42157);
} else {
if((state_val_42166 === (2))){
var inst_42156 = (state_42165[(7)]);
var inst_42159 = (state_42165[(2)]);
var inst_42160 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_42159];
var inst_42161 = (new cljs.core.PersistentVector(null,2,(5),inst_42156,inst_42160,null));
var inst_42162 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42161) : re_frame.core.dispatch.call(null,inst_42161));
var inst_42163 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_42165__$1 = (function (){var statearr_42168 = state_42165;
(statearr_42168[(8)] = inst_42162);

return statearr_42168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42165__$1,inst_42163);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__34463__auto__ = null;
var mecca$music$state_machine__34463__auto____0 = (function (){
var statearr_42169 = [null,null,null,null,null,null,null,null,null];
(statearr_42169[(0)] = mecca$music$state_machine__34463__auto__);

(statearr_42169[(1)] = (1));

return statearr_42169;
});
var mecca$music$state_machine__34463__auto____1 = (function (state_42165){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_42165);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e42170){if((e42170 instanceof Object)){
var ex__34466__auto__ = e42170;
var statearr_42171_42370 = state_42165;
(statearr_42171_42370[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42170;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42383 = state_42165;
state_42165 = G__42383;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
mecca$music$state_machine__34463__auto__ = function(state_42165){
switch(arguments.length){
case 0:
return mecca$music$state_machine__34463__auto____0.call(this);
case 1:
return mecca$music$state_machine__34463__auto____1.call(this,state_42165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__34463__auto____0;
mecca$music$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__34463__auto____1;
return mecca$music$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_42172 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_42172[(6)] = c__34784__auto__);

return statearr_42172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

return c__34784__auto__;
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
var context = cljs.core.deref((function (){var G__42173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42173) : re_frame.core.subscribe.call(null,G__42173));
})());
var samples = (function (){var G__42174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42174) : re_frame.core.subscribe.call(null,G__42174));
})();
var instrument = (function (){var G__42175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42175) : re_frame.core.subscribe.call(null,G__42175));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),cljs.core.deref(instrument)));
var sample_source = context.createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),context.currentTime);

sample_source.connect(context.destination);

sample_source.start();

return sample_source;
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = (function (){var G__42176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42176) : re_frame.core.subscribe.call(null,G__42176));
})();
var samples = (function (){var G__42177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42177) : re_frame.core.subscribe.call(null,G__42177));
})();
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
var context = (function (){var G__42178 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42178) : re_frame.core.subscribe.call(null,G__42178));
})();
var samples = (function (){var G__42179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42179) : re_frame.core.subscribe.call(null,G__42179));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__42180_SHARP_){
return (beats + p1__42180_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__42181_SHARP_){
return (p1__42181_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__42184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42184) : re_frame.core.subscribe.call(null,G__42184));
})();
var started = (function (){var G__42185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42185) : re_frame.core.subscribe.call(null,G__42185));
})();
var tempo = (function (){var G__42186 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42186) : re_frame.core.subscribe.call(null,G__42186));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42182_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42182_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42182_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42183_SHARP_){
return mecca.music.advance_note(from,p1__42183_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__42187(s__42188){
return (new cljs.core.LazySeq(null,(function (){
var s__42188__$1 = s__42188;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42188__$1);
if(temp__5735__auto__){
var s__42188__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42188__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42188__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42190 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42189 = (0);
while(true){
if((i__42189 < size__4581__auto__)){
var map__42191 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42189);
var map__42191__$1 = (((((!((map__42191 == null))))?(((((map__42191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42191):map__42191);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42191__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42191__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42191__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__42190,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__42418 = (i__42189 + (1));
i__42189 = G__42418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42190),mecca$music$queue_section_$_iter__42187(cljs.core.chunk_rest(s__42188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42190),null);
}
} else {
var map__42193 = cljs.core.first(s__42188__$2);
var map__42193__$1 = (((((!((map__42193 == null))))?(((((map__42193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42193):map__42193);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__42187(cljs.core.rest(s__42188__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(section);
})());
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = (function (){var G__42197 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42197) : re_frame.core.subscribe.call(null,G__42197));
})();
var now = cljs.core.deref((function (){var G__42198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42198) : re_frame.core.subscribe.call(null,G__42198));
})()).currentTime;
var tempo = (function (){var G__42199 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42199) : re_frame.core.subscribe.call(null,G__42199));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42195_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42195_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42195_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42196_SHARP_){
return mecca.music.advance_note(from,p1__42196_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__42200(s__42201){
return (new cljs.core.LazySeq(null,(function (){
var s__42201__$1 = s__42201;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42201__$1);
if(temp__5735__auto__){
var s__42201__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42201__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42201__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42203 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42202 = (0);
while(true){
if((i__42202 < size__4581__auto__)){
var map__42204 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42202);
var map__42204__$1 = (((((!((map__42204 == null))))?(((((map__42204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42204):map__42204);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42204__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42204__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42204__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__42203,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__42419 = (i__42202 + (1));
i__42202 = G__42419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42203),mecca$music$play_section_$_iter__42200(cljs.core.chunk_rest(s__42201__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42203),null);
}
} else {
var map__42206 = cljs.core.first(s__42201__$2);
var map__42206__$1 = (((((!((map__42206 == null))))?(((((map__42206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42206):map__42206);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42206__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42206__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42206__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__42200(cljs.core.rest(s__42201__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(advanced);
})());
});
mecca.music.play_notes = (function mecca$music$play_notes(n){
var editor_start = (function (){var G__42210 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42210) : re_frame.core.subscribe.call(null,G__42210));
})();
var tempo = (function (){var G__42213 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42213) : re_frame.core.subscribe.call(null,G__42213));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__42216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42216) : re_frame.core.subscribe.call(null,G__42216));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__42217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42217) : re_frame.core.subscribe.call(null,G__42217));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__42223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42223) : re_frame.core.subscribe.call(null,G__42223));
})();
var editor_start = (function (){var G__42226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42226) : re_frame.core.subscribe.call(null,G__42226));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42220_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42220_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__42263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42263) : re_frame.core.subscribe.call(null,G__42263));
})();
var now = cljs.core.deref((function (){var G__42264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42264) : re_frame.core.subscribe.call(null,G__42264));
})()).currentTime;
var tempo = (function (){var G__42267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42267) : re_frame.core.subscribe.call(null,G__42267));
})();
var G__42268_42443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42268_42443) : re_frame.core.dispatch.call(null,G__42268_42443));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__42279(s__42280){
return (new cljs.core.LazySeq(null,(function (){
var s__42280__$1 = s__42280;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42280__$1);
if(temp__5735__auto__){
var s__42280__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42280__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42280__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42282 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42281 = (0);
while(true){
if((i__42281 < size__4581__auto__)){
var map__42291 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42281);
var map__42291__$1 = (((((!((map__42291 == null))))?(((((map__42291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42291):map__42291);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42291__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42291__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42291__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__42282,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__42453 = (i__42281 + (1));
i__42281 = G__42453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42282),mecca$music$play_song_BANG__$_iter__42279(cljs.core.chunk_rest(s__42280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42282),null);
}
} else {
var map__42299 = cljs.core.first(s__42280__$2);
var map__42299__$1 = (((((!((map__42299 == null))))?(((((map__42299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42299):map__42299);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42299__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42299__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42299__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__42279(cljs.core.rest(s__42280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});

//# sourceMappingURL=mecca.music.js.map
