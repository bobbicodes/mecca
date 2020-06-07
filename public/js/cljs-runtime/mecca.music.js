goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__43162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43162) : re_frame.core.subscribe.call(null,G__43162));
})();
var notes = (function (){var G__43163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43163) : re_frame.core.subscribe.call(null,G__43163));
})();
var jump = (function (){var G__43164 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43164) : re_frame.core.subscribe.call(null,G__43164));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__43167 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43167) : re_frame.core.subscribe.call(null,G__43167));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43161_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__43161_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__43168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43168) : re_frame.core.dispatch.call(null,G__43168));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__43170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43170) : re_frame.core.subscribe.call(null,G__43170));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__43171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43171) : re_frame.core.subscribe.call(null,G__43171));
})());
var now = cljs.core.deref((function (){var G__43172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43172) : re_frame.core.subscribe.call(null,G__43172));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43169_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__43169_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__43173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43173) : re_frame.core.subscribe.call(null,G__43173));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__43174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43174) : re_frame.core.subscribe.call(null,G__43174));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__43175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43175) : re_frame.core.subscribe.call(null,G__43175));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__43176_43342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43176_43342) : re_frame.core.dispatch.call(null,G__43176_43342));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__43177_43343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43177_43343) : re_frame.core.dispatch.call(null,G__43177_43343));

var G__43178_43344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43178_43344) : re_frame.core.dispatch.call(null,G__43178_43344));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__43179_43345 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43179_43345) : re_frame.core.dispatch.call(null,G__43179_43345));

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
cljs.core.deref((function (){var G__43180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43180) : re_frame.core.subscribe.call(null,G__43180));
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
var source = cljs.core.deref((function (){var G__43181 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43181) : re_frame.core.subscribe.call(null,G__43181));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__34784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_43193){
var state_val_43194 = (state_43193[(1)]);
if((state_val_43194 === (1))){
var inst_43182 = mecca.music.load_sound(named_url);
var state_43193__$1 = state_43193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43193__$1,(2),inst_43182);
} else {
if((state_val_43194 === (2))){
var inst_43184 = (state_43193[(7)]);
var inst_43184__$1 = (state_43193[(2)]);
var state_43193__$1 = (function (){var statearr_43195 = state_43193;
(statearr_43195[(7)] = inst_43184__$1);

return statearr_43195;
})();
if(cljs.core.truth_(inst_43184__$1)){
var statearr_43196_43346 = state_43193__$1;
(statearr_43196_43346[(1)] = (3));

} else {
var statearr_43197_43347 = state_43193__$1;
(statearr_43197_43347[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43194 === (3))){
var inst_43184 = (state_43193[(7)]);
var inst_43186 = mecca.music.decode(inst_43184);
var state_43193__$1 = state_43193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43193__$1,(6),inst_43186);
} else {
if((state_val_43194 === (4))){
var state_43193__$1 = state_43193;
var statearr_43198_43374 = state_43193__$1;
(statearr_43198_43374[(2)] = null);

(statearr_43198_43374[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43194 === (5))){
var inst_43191 = (state_43193[(2)]);
var state_43193__$1 = state_43193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43193__$1,inst_43191);
} else {
if((state_val_43194 === (6))){
var inst_43188 = (state_43193[(2)]);
var state_43193__$1 = state_43193;
var statearr_43199_43379 = state_43193__$1;
(statearr_43199_43379[(2)] = inst_43188);

(statearr_43199_43379[(1)] = (5));


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
var statearr_43200 = [null,null,null,null,null,null,null,null];
(statearr_43200[(0)] = mecca$music$get_and_decode_$_state_machine__34463__auto__);

(statearr_43200[(1)] = (1));

return statearr_43200;
});
var mecca$music$get_and_decode_$_state_machine__34463__auto____1 = (function (state_43193){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_43193);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e43201){if((e43201 instanceof Object)){
var ex__34466__auto__ = e43201;
var statearr_43202_43384 = state_43193;
(statearr_43202_43384[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43389 = state_43193;
state_43193 = G__43389;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__34463__auto__ = function(state_43193){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__34463__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__34463__auto____1.call(this,state_43193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__34463__auto____0;
mecca$music$get_and_decode_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__34463__auto____1;
return mecca$music$get_and_decode_$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_43203 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_43203[(6)] = c__34784__auto__);

return statearr_43203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

return c__34784__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__34784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_43232){
var state_val_43233 = (state_43232[(1)]);
if((state_val_43233 === (1))){
var inst_43204 = cljs.core.PersistentHashMap.EMPTY;
var inst_43205 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_43206 = inst_43204;
var inst_43207 = inst_43205;
var state_43232__$1 = (function (){var statearr_43234 = state_43232;
(statearr_43234[(7)] = inst_43207);

(statearr_43234[(8)] = inst_43206);

return statearr_43234;
})();
var statearr_43235_43390 = state_43232__$1;
(statearr_43235_43390[(2)] = null);

(statearr_43235_43390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43233 === (2))){
var inst_43207 = (state_43232[(7)]);
var inst_43209 = cljs.core.first(inst_43207);
var inst_43210 = (inst_43209 == null);
var inst_43211 = cljs.core.not(inst_43210);
var state_43232__$1 = state_43232;
if(inst_43211){
var statearr_43236_43391 = state_43232__$1;
(statearr_43236_43391[(1)] = (4));

} else {
var statearr_43237_43392 = state_43232__$1;
(statearr_43237_43392[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43233 === (3))){
var inst_43230 = (state_43232[(2)]);
var state_43232__$1 = state_43232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43232__$1,inst_43230);
} else {
if((state_val_43233 === (4))){
var inst_43213 = (state_43232[(9)]);
var inst_43207 = (state_43232[(7)]);
var inst_43213__$1 = cljs.core.first(inst_43207);
var inst_43214 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_43215 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43213__$1),".mp3"].join('');
var inst_43216 = [inst_43215,inst_43213__$1];
var inst_43217 = cljs.core.PersistentHashMap.fromArrays(inst_43214,inst_43216);
var inst_43218 = mecca.music.get_and_decode(inst_43217);
var state_43232__$1 = (function (){var statearr_43238 = state_43232;
(statearr_43238[(9)] = inst_43213__$1);

return statearr_43238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43232__$1,(7),inst_43218);
} else {
if((state_val_43233 === (5))){
var inst_43206 = (state_43232[(8)]);
var state_43232__$1 = state_43232;
var statearr_43239_43416 = state_43232__$1;
(statearr_43239_43416[(2)] = inst_43206);

(statearr_43239_43416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43233 === (6))){
var inst_43228 = (state_43232[(2)]);
var state_43232__$1 = state_43232;
var statearr_43240_43417 = state_43232__$1;
(statearr_43240_43417[(2)] = inst_43228);

(statearr_43240_43417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43233 === (7))){
var inst_43213 = (state_43232[(9)]);
var inst_43207 = (state_43232[(7)]);
var inst_43206 = (state_43232[(8)]);
var inst_43220 = (state_43232[(2)]);
var inst_43221 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43213], 0));
var inst_43222 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43220], 0));
var inst_43223 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_43206,inst_43213,inst_43220);
var inst_43224 = cljs.core.rest(inst_43207);
var inst_43206__$1 = inst_43223;
var inst_43207__$1 = inst_43224;
var state_43232__$1 = (function (){var statearr_43241 = state_43232;
(statearr_43241[(7)] = inst_43207__$1);

(statearr_43241[(10)] = inst_43222);

(statearr_43241[(11)] = inst_43221);

(statearr_43241[(8)] = inst_43206__$1);

return statearr_43241;
})();
var statearr_43242_43451 = state_43232__$1;
(statearr_43242_43451[(2)] = null);

(statearr_43242_43451[(1)] = (2));


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
var statearr_43243 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43243[(0)] = mecca$music$load_samples_$_state_machine__34463__auto__);

(statearr_43243[(1)] = (1));

return statearr_43243;
});
var mecca$music$load_samples_$_state_machine__34463__auto____1 = (function (state_43232){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_43232);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e43244){if((e43244 instanceof Object)){
var ex__34466__auto__ = e43244;
var statearr_43245_43452 = state_43232;
(statearr_43245_43452[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43453 = state_43232;
state_43232 = G__43453;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__34463__auto__ = function(state_43232){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__34463__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__34463__auto____1.call(this,state_43232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__34463__auto____0;
mecca$music$load_samples_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__34463__auto____1;
return mecca$music$load_samples_$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_43246 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_43246[(6)] = c__34784__auto__);

return statearr_43246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

return c__34784__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__34784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_43256){
var state_val_43257 = (state_43256[(1)]);
if((state_val_43257 === (1))){
var inst_43247 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43248 = mecca.music.load_samples();
var state_43256__$1 = (function (){var statearr_43258 = state_43256;
(statearr_43258[(7)] = inst_43247);

return statearr_43258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43256__$1,(2),inst_43248);
} else {
if((state_val_43257 === (2))){
var inst_43247 = (state_43256[(7)]);
var inst_43250 = (state_43256[(2)]);
var inst_43251 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_43250];
var inst_43252 = (new cljs.core.PersistentVector(null,2,(5),inst_43247,inst_43251,null));
var inst_43253 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_43252) : re_frame.core.dispatch.call(null,inst_43252));
var inst_43254 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_43256__$1 = (function (){var statearr_43259 = state_43256;
(statearr_43259[(8)] = inst_43253);

return statearr_43259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43256__$1,inst_43254);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__34463__auto__ = null;
var mecca$music$state_machine__34463__auto____0 = (function (){
var statearr_43260 = [null,null,null,null,null,null,null,null,null];
(statearr_43260[(0)] = mecca$music$state_machine__34463__auto__);

(statearr_43260[(1)] = (1));

return statearr_43260;
});
var mecca$music$state_machine__34463__auto____1 = (function (state_43256){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_43256);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e43261){if((e43261 instanceof Object)){
var ex__34466__auto__ = e43261;
var statearr_43262_43456 = state_43256;
(statearr_43262_43456[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43457 = state_43256;
state_43256 = G__43457;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
mecca$music$state_machine__34463__auto__ = function(state_43256){
switch(arguments.length){
case 0:
return mecca$music$state_machine__34463__auto____0.call(this);
case 1:
return mecca$music$state_machine__34463__auto____1.call(this,state_43256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__34463__auto____0;
mecca$music$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__34463__auto____1;
return mecca$music$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_43263 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_43263[(6)] = c__34784__auto__);

return statearr_43263;
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
var context = cljs.core.deref((function (){var G__43264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43264) : re_frame.core.subscribe.call(null,G__43264));
})());
var samples = (function (){var G__43265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43265) : re_frame.core.subscribe.call(null,G__43265));
})();
var instrument = (function (){var G__43266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43266) : re_frame.core.subscribe.call(null,G__43266));
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
var context = (function (){var G__43267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43267) : re_frame.core.subscribe.call(null,G__43267));
})();
var samples = (function (){var G__43268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43268) : re_frame.core.subscribe.call(null,G__43268));
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
var context = (function (){var G__43269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43269) : re_frame.core.subscribe.call(null,G__43269));
})();
var samples = (function (){var G__43270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43270) : re_frame.core.subscribe.call(null,G__43270));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__43271_SHARP_){
return (beats + p1__43271_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__43272_SHARP_){
return (p1__43272_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__43275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43275) : re_frame.core.subscribe.call(null,G__43275));
})();
var started = (function (){var G__43276 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43276) : re_frame.core.subscribe.call(null,G__43276));
})();
var tempo = (function (){var G__43277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43277) : re_frame.core.subscribe.call(null,G__43277));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43273_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__43273_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__43273_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43274_SHARP_){
return mecca.music.advance_note(from,p1__43274_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__43278(s__43279){
return (new cljs.core.LazySeq(null,(function (){
var s__43279__$1 = s__43279;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43279__$1);
if(temp__5735__auto__){
var s__43279__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43279__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43279__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43281 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43280 = (0);
while(true){
if((i__43280 < size__4581__auto__)){
var map__43282 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43280);
var map__43282__$1 = (((((!((map__43282 == null))))?(((((map__43282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43282):map__43282);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43282__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43282__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43282__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__43281,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__43543 = (i__43280 + (1));
i__43280 = G__43543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43281),mecca$music$queue_section_$_iter__43278(cljs.core.chunk_rest(s__43279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43281),null);
}
} else {
var map__43284 = cljs.core.first(s__43279__$2);
var map__43284__$1 = (((((!((map__43284 == null))))?(((((map__43284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43284):map__43284);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43284__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43284__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43284__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__43278(cljs.core.rest(s__43279__$2)));
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
var notes = (function (){var G__43288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43288) : re_frame.core.subscribe.call(null,G__43288));
})();
var now = cljs.core.deref((function (){var G__43289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43289) : re_frame.core.subscribe.call(null,G__43289));
})()).currentTime;
var tempo = (function (){var G__43290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43290) : re_frame.core.subscribe.call(null,G__43290));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43286_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__43286_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__43286_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43287_SHARP_){
return mecca.music.advance_note(from,p1__43287_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__43291(s__43292){
return (new cljs.core.LazySeq(null,(function (){
var s__43292__$1 = s__43292;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43292__$1);
if(temp__5735__auto__){
var s__43292__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43292__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43292__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43294 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43293 = (0);
while(true){
if((i__43293 < size__4581__auto__)){
var map__43295 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43293);
var map__43295__$1 = (((((!((map__43295 == null))))?(((((map__43295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43295):map__43295);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43295__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43295__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43295__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__43294,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__43545 = (i__43293 + (1));
i__43293 = G__43545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43294),mecca$music$play_section_$_iter__43291(cljs.core.chunk_rest(s__43292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43294),null);
}
} else {
var map__43297 = cljs.core.first(s__43292__$2);
var map__43297__$1 = (((((!((map__43297 == null))))?(((((map__43297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43297):map__43297);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__43291(cljs.core.rest(s__43292__$2)));
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
var editor_start = (function (){var G__43299 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43299) : re_frame.core.subscribe.call(null,G__43299));
})();
var tempo = (function (){var G__43300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43300) : re_frame.core.subscribe.call(null,G__43300));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__43301 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43301) : re_frame.core.subscribe.call(null,G__43301));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__43302 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43302) : re_frame.core.subscribe.call(null,G__43302));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__43304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43304) : re_frame.core.subscribe.call(null,G__43304));
})();
var editor_start = (function (){var G__43305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43305) : re_frame.core.subscribe.call(null,G__43305));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43303_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__43303_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__43306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43306) : re_frame.core.subscribe.call(null,G__43306));
})();
var now = cljs.core.deref((function (){var G__43307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43307) : re_frame.core.subscribe.call(null,G__43307));
})()).currentTime;
var tempo = (function (){var G__43308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43308) : re_frame.core.subscribe.call(null,G__43308));
})();
var G__43309_43548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43309_43548) : re_frame.core.dispatch.call(null,G__43309_43548));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__43310(s__43311){
return (new cljs.core.LazySeq(null,(function (){
var s__43311__$1 = s__43311;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43311__$1);
if(temp__5735__auto__){
var s__43311__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43311__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43311__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43313 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43312 = (0);
while(true){
if((i__43312 < size__4581__auto__)){
var map__43314 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43312);
var map__43314__$1 = (((((!((map__43314 == null))))?(((((map__43314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43314):map__43314);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43314__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43314__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43314__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__43313,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__43553 = (i__43312 + (1));
i__43312 = G__43553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43313),mecca$music$play_song_BANG__$_iter__43310(cljs.core.chunk_rest(s__43311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43313),null);
}
} else {
var map__43316 = cljs.core.first(s__43311__$2);
var map__43316__$1 = (((((!((map__43316 == null))))?(((((map__43316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43316):map__43316);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__43310(cljs.core.rest(s__43311__$2)));
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
