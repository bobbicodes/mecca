goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__42031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42031) : re_frame.core.subscribe.call(null,G__42031));
})();
var notes = (function (){var G__42032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42032) : re_frame.core.subscribe.call(null,G__42032));
})();
var jump = (function (){var G__42033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42033) : re_frame.core.subscribe.call(null,G__42033));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__42036 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42036) : re_frame.core.subscribe.call(null,G__42036));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42030_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42030_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__42037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42037) : re_frame.core.dispatch.call(null,G__42037));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__42039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42039) : re_frame.core.subscribe.call(null,G__42039));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__42040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42040) : re_frame.core.subscribe.call(null,G__42040));
})());
var now = cljs.core.deref((function (){var G__42041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42041) : re_frame.core.subscribe.call(null,G__42041));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42038_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42038_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__42042 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42042) : re_frame.core.subscribe.call(null,G__42042));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__42043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42043) : re_frame.core.subscribe.call(null,G__42043));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__42044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42044) : re_frame.core.subscribe.call(null,G__42044));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__42045_42187 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42045_42187) : re_frame.core.dispatch.call(null,G__42045_42187));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__42046_42188 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42046_42188) : re_frame.core.dispatch.call(null,G__42046_42188));

var G__42047_42189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42047_42189) : re_frame.core.dispatch.call(null,G__42047_42189));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__42048_42190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42048_42190) : re_frame.core.dispatch.call(null,G__42048_42190));

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
cljs.core.deref((function (){var G__42049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42049) : re_frame.core.subscribe.call(null,G__42049));
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
var source = cljs.core.deref((function (){var G__42050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42050) : re_frame.core.subscribe.call(null,G__42050));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__34280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_42062){
var state_val_42063 = (state_42062[(1)]);
if((state_val_42063 === (1))){
var inst_42051 = mecca.music.load_sound(named_url);
var state_42062__$1 = state_42062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42062__$1,(2),inst_42051);
} else {
if((state_val_42063 === (2))){
var inst_42053 = (state_42062[(7)]);
var inst_42053__$1 = (state_42062[(2)]);
var state_42062__$1 = (function (){var statearr_42064 = state_42062;
(statearr_42064[(7)] = inst_42053__$1);

return statearr_42064;
})();
if(cljs.core.truth_(inst_42053__$1)){
var statearr_42065_42191 = state_42062__$1;
(statearr_42065_42191[(1)] = (3));

} else {
var statearr_42066_42192 = state_42062__$1;
(statearr_42066_42192[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42063 === (3))){
var inst_42053 = (state_42062[(7)]);
var inst_42055 = mecca.music.decode(inst_42053);
var state_42062__$1 = state_42062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42062__$1,(6),inst_42055);
} else {
if((state_val_42063 === (4))){
var state_42062__$1 = state_42062;
var statearr_42067_42193 = state_42062__$1;
(statearr_42067_42193[(2)] = null);

(statearr_42067_42193[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42063 === (5))){
var inst_42060 = (state_42062[(2)]);
var state_42062__$1 = state_42062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42062__$1,inst_42060);
} else {
if((state_val_42063 === (6))){
var inst_42057 = (state_42062[(2)]);
var state_42062__$1 = state_42062;
var statearr_42068_42194 = state_42062__$1;
(statearr_42068_42194[(2)] = inst_42057);

(statearr_42068_42194[(1)] = (5));


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
var mecca$music$get_and_decode_$_state_machine__33893__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__33893__auto____0 = (function (){
var statearr_42069 = [null,null,null,null,null,null,null,null];
(statearr_42069[(0)] = mecca$music$get_and_decode_$_state_machine__33893__auto__);

(statearr_42069[(1)] = (1));

return statearr_42069;
});
var mecca$music$get_and_decode_$_state_machine__33893__auto____1 = (function (state_42062){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_42062);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e42070){if((e42070 instanceof Object)){
var ex__33896__auto__ = e42070;
var statearr_42071_42195 = state_42062;
(statearr_42071_42195[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42196 = state_42062;
state_42062 = G__42196;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__33893__auto__ = function(state_42062){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__33893__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__33893__auto____1.call(this,state_42062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__33893__auto____0;
mecca$music$get_and_decode_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__33893__auto____1;
return mecca$music$get_and_decode_$_state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_42072 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_42072[(6)] = c__34280__auto__);

return statearr_42072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));

return c__34280__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__34280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_42101){
var state_val_42102 = (state_42101[(1)]);
if((state_val_42102 === (1))){
var inst_42073 = cljs.core.PersistentHashMap.EMPTY;
var inst_42074 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_42075 = inst_42073;
var inst_42076 = inst_42074;
var state_42101__$1 = (function (){var statearr_42103 = state_42101;
(statearr_42103[(7)] = inst_42076);

(statearr_42103[(8)] = inst_42075);

return statearr_42103;
})();
var statearr_42104_42197 = state_42101__$1;
(statearr_42104_42197[(2)] = null);

(statearr_42104_42197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42102 === (2))){
var inst_42076 = (state_42101[(7)]);
var inst_42078 = cljs.core.first(inst_42076);
var inst_42079 = (inst_42078 == null);
var inst_42080 = cljs.core.not(inst_42079);
var state_42101__$1 = state_42101;
if(inst_42080){
var statearr_42105_42198 = state_42101__$1;
(statearr_42105_42198[(1)] = (4));

} else {
var statearr_42106_42199 = state_42101__$1;
(statearr_42106_42199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42102 === (3))){
var inst_42099 = (state_42101[(2)]);
var state_42101__$1 = state_42101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42101__$1,inst_42099);
} else {
if((state_val_42102 === (4))){
var inst_42076 = (state_42101[(7)]);
var inst_42082 = (state_42101[(9)]);
var inst_42082__$1 = cljs.core.first(inst_42076);
var inst_42083 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_42084 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42082__$1),".mp3"].join('');
var inst_42085 = [inst_42084,inst_42082__$1];
var inst_42086 = cljs.core.PersistentHashMap.fromArrays(inst_42083,inst_42085);
var inst_42087 = mecca.music.get_and_decode(inst_42086);
var state_42101__$1 = (function (){var statearr_42107 = state_42101;
(statearr_42107[(9)] = inst_42082__$1);

return statearr_42107;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42101__$1,(7),inst_42087);
} else {
if((state_val_42102 === (5))){
var inst_42075 = (state_42101[(8)]);
var state_42101__$1 = state_42101;
var statearr_42108_42200 = state_42101__$1;
(statearr_42108_42200[(2)] = inst_42075);

(statearr_42108_42200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42102 === (6))){
var inst_42097 = (state_42101[(2)]);
var state_42101__$1 = state_42101;
var statearr_42109_42201 = state_42101__$1;
(statearr_42109_42201[(2)] = inst_42097);

(statearr_42109_42201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42102 === (7))){
var inst_42076 = (state_42101[(7)]);
var inst_42082 = (state_42101[(9)]);
var inst_42075 = (state_42101[(8)]);
var inst_42089 = (state_42101[(2)]);
var inst_42090 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42082], 0));
var inst_42091 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42089], 0));
var inst_42092 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_42075,inst_42082,inst_42089);
var inst_42093 = cljs.core.rest(inst_42076);
var inst_42075__$1 = inst_42092;
var inst_42076__$1 = inst_42093;
var state_42101__$1 = (function (){var statearr_42110 = state_42101;
(statearr_42110[(7)] = inst_42076__$1);

(statearr_42110[(10)] = inst_42091);

(statearr_42110[(11)] = inst_42090);

(statearr_42110[(8)] = inst_42075__$1);

return statearr_42110;
})();
var statearr_42111_42207 = state_42101__$1;
(statearr_42111_42207[(2)] = null);

(statearr_42111_42207[(1)] = (2));


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
var mecca$music$load_samples_$_state_machine__33893__auto__ = null;
var mecca$music$load_samples_$_state_machine__33893__auto____0 = (function (){
var statearr_42112 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42112[(0)] = mecca$music$load_samples_$_state_machine__33893__auto__);

(statearr_42112[(1)] = (1));

return statearr_42112;
});
var mecca$music$load_samples_$_state_machine__33893__auto____1 = (function (state_42101){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_42101);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e42113){if((e42113 instanceof Object)){
var ex__33896__auto__ = e42113;
var statearr_42114_42209 = state_42101;
(statearr_42114_42209[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42217 = state_42101;
state_42101 = G__42217;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__33893__auto__ = function(state_42101){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__33893__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__33893__auto____1.call(this,state_42101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__33893__auto____0;
mecca$music$load_samples_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__33893__auto____1;
return mecca$music$load_samples_$_state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_42115 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_42115[(6)] = c__34280__auto__);

return statearr_42115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));

return c__34280__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__34280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_42125){
var state_val_42126 = (state_42125[(1)]);
if((state_val_42126 === (1))){
var inst_42116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42117 = mecca.music.load_samples();
var state_42125__$1 = (function (){var statearr_42127 = state_42125;
(statearr_42127[(7)] = inst_42116);

return statearr_42127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42125__$1,(2),inst_42117);
} else {
if((state_val_42126 === (2))){
var inst_42116 = (state_42125[(7)]);
var inst_42119 = (state_42125[(2)]);
var inst_42120 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_42119];
var inst_42121 = (new cljs.core.PersistentVector(null,2,(5),inst_42116,inst_42120,null));
var inst_42122 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42121) : re_frame.core.dispatch.call(null,inst_42121));
var inst_42123 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_42125__$1 = (function (){var statearr_42128 = state_42125;
(statearr_42128[(8)] = inst_42122);

return statearr_42128;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42125__$1,inst_42123);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__33893__auto__ = null;
var mecca$music$state_machine__33893__auto____0 = (function (){
var statearr_42129 = [null,null,null,null,null,null,null,null,null];
(statearr_42129[(0)] = mecca$music$state_machine__33893__auto__);

(statearr_42129[(1)] = (1));

return statearr_42129;
});
var mecca$music$state_machine__33893__auto____1 = (function (state_42125){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_42125);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e42130){if((e42130 instanceof Object)){
var ex__33896__auto__ = e42130;
var statearr_42131_42218 = state_42125;
(statearr_42131_42218[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42219 = state_42125;
state_42125 = G__42219;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
mecca$music$state_machine__33893__auto__ = function(state_42125){
switch(arguments.length){
case 0:
return mecca$music$state_machine__33893__auto____0.call(this);
case 1:
return mecca$music$state_machine__33893__auto____1.call(this,state_42125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__33893__auto____0;
mecca$music$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__33893__auto____1;
return mecca$music$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_42132 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_42132[(6)] = c__34280__auto__);

return statearr_42132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));

return c__34280__auto__;
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
var context = cljs.core.deref((function (){var G__42133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42133) : re_frame.core.subscribe.call(null,G__42133));
})());
var samples = (function (){var G__42134 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42134) : re_frame.core.subscribe.call(null,G__42134));
})();
var instrument = (function (){var G__42135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42135) : re_frame.core.subscribe.call(null,G__42135));
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
var context = (function (){var G__42136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42136) : re_frame.core.subscribe.call(null,G__42136));
})();
var samples = (function (){var G__42137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42137) : re_frame.core.subscribe.call(null,G__42137));
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
var context = (function (){var G__42138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42138) : re_frame.core.subscribe.call(null,G__42138));
})();
var samples = (function (){var G__42139 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42139) : re_frame.core.subscribe.call(null,G__42139));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__42140_SHARP_){
return (beats + p1__42140_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__42141_SHARP_){
return (p1__42141_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__42144 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42144) : re_frame.core.subscribe.call(null,G__42144));
})();
var started = (function (){var G__42145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42145) : re_frame.core.subscribe.call(null,G__42145));
})();
var tempo = (function (){var G__42146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42146) : re_frame.core.subscribe.call(null,G__42146));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42142_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42142_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42142_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42143_SHARP_){
return mecca.music.advance_note(from,p1__42143_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__42147(s__42148){
return (new cljs.core.LazySeq(null,(function (){
var s__42148__$1 = s__42148;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42148__$1);
if(temp__5735__auto__){
var s__42148__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42148__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42148__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42150 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42149 = (0);
while(true){
if((i__42149 < size__4581__auto__)){
var map__42151 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42149);
var map__42151__$1 = (((((!((map__42151 == null))))?(((((map__42151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42151):map__42151);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42151__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42151__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42151__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__42150,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__42312 = (i__42149 + (1));
i__42149 = G__42312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42150),mecca$music$queue_section_$_iter__42147(cljs.core.chunk_rest(s__42148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42150),null);
}
} else {
var map__42153 = cljs.core.first(s__42148__$2);
var map__42153__$1 = (((((!((map__42153 == null))))?(((((map__42153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42153):map__42153);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42153__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42153__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42153__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__42147(cljs.core.rest(s__42148__$2)));
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
var notes = (function (){var G__42157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42157) : re_frame.core.subscribe.call(null,G__42157));
})();
var now = cljs.core.deref((function (){var G__42158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42158) : re_frame.core.subscribe.call(null,G__42158));
})()).currentTime;
var tempo = (function (){var G__42159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42159) : re_frame.core.subscribe.call(null,G__42159));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42155_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42155_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42155_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42156_SHARP_){
return mecca.music.advance_note(from,p1__42156_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__42160(s__42161){
return (new cljs.core.LazySeq(null,(function (){
var s__42161__$1 = s__42161;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42161__$1);
if(temp__5735__auto__){
var s__42161__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42161__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42161__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42163 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42162 = (0);
while(true){
if((i__42162 < size__4581__auto__)){
var map__42164 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42162);
var map__42164__$1 = (((((!((map__42164 == null))))?(((((map__42164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42164):map__42164);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42164__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42164__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42164__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__42163,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__42322 = (i__42162 + (1));
i__42162 = G__42322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42163),mecca$music$play_section_$_iter__42160(cljs.core.chunk_rest(s__42161__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42163),null);
}
} else {
var map__42166 = cljs.core.first(s__42161__$2);
var map__42166__$1 = (((((!((map__42166 == null))))?(((((map__42166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42166):map__42166);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42166__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42166__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42166__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__42160(cljs.core.rest(s__42161__$2)));
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
var editor_start = (function (){var G__42168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42168) : re_frame.core.subscribe.call(null,G__42168));
})();
var tempo = (function (){var G__42169 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42169) : re_frame.core.subscribe.call(null,G__42169));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__42170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42170) : re_frame.core.subscribe.call(null,G__42170));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__42171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42171) : re_frame.core.subscribe.call(null,G__42171));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__42173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42173) : re_frame.core.subscribe.call(null,G__42173));
})();
var editor_start = (function (){var G__42174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42174) : re_frame.core.subscribe.call(null,G__42174));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42172_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42172_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__42175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42175) : re_frame.core.subscribe.call(null,G__42175));
})();
var now = cljs.core.deref((function (){var G__42176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42176) : re_frame.core.subscribe.call(null,G__42176));
})()).currentTime;
var tempo = (function (){var G__42177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__42177) : re_frame.core.subscribe.call(null,G__42177));
})();
var G__42178_42323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__42178_42323) : re_frame.core.dispatch.call(null,G__42178_42323));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__42179(s__42180){
return (new cljs.core.LazySeq(null,(function (){
var s__42180__$1 = s__42180;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42180__$1);
if(temp__5735__auto__){
var s__42180__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42180__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42180__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42182 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42181 = (0);
while(true){
if((i__42181 < size__4581__auto__)){
var map__42183 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42181);
var map__42183__$1 = (((((!((map__42183 == null))))?(((((map__42183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42183):map__42183);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42183__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42183__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42183__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__42182,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__42324 = (i__42181 + (1));
i__42181 = G__42324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42182),mecca$music$play_song_BANG__$_iter__42179(cljs.core.chunk_rest(s__42180__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42182),null);
}
} else {
var map__42185 = cljs.core.first(s__42180__$2);
var map__42185__$1 = (((((!((map__42185 == null))))?(((((map__42185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42185):map__42185);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42185__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42185__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42185__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__42179(cljs.core.rest(s__42180__$2)));
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
