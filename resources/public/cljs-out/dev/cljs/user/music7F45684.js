// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music');
goog.require('cljs.core');
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
mecca.music.audiocontext = reagent.core.atom.call(null,mecca.music.audio_context.call(null));
}
mecca.music.current_time = (function mecca$music$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.current_time', mecca.music.current_time);
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null));
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(150));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.call(null);
var req = (new XMLHttpRequest());
req.responseType = "arraybuffer";

req.onload = ((function (out,req){
return (function (e){
if(cljs.core._EQ_.call(null,req.status,(200))){
cljs.core.async.put_BANG_.call(null,out,cljs.core.assoc.call(null,named_url,new cljs.core.Keyword(null,"buffer","buffer",617295198),req.response));

return cljs.core.async.close_BANG_.call(null,out);
} else {
return cljs.core.async.close_BANG_.call(null,out);
}
});})(out,req))
;

req.open("GET",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.call(null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref.call(null,mecca.music.audiocontext).decodeAudioData(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url),((function (out){
return (function (decoded_buffer){
cljs.core.async.put_BANG_.call(null,out,cljs.core.assoc.call(null,named_url,new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700),decoded_buffer));

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
,((function (out){
return (function (){
console.error("Error loading file ",cljs.core.prn.call(null,named_url));

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
} else {
cljs.core.async.close_BANG_.call(null,out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref.call(null,mecca.music.audiocontext).createBufferSource();
source.buffer = buffer;

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__13771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13771__auto__){
return (function (){
var f__13772__auto__ = (function (){var switch__13612__auto__ = ((function (c__13771__auto__){
return (function (state_45589){
var state_val_45590 = (state_45589[(1)]);
if((state_val_45590 === (1))){
var inst_45578 = mecca.music.load_sound.call(null,named_url);
var state_45589__$1 = state_45589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45589__$1,(2),inst_45578);
} else {
if((state_val_45590 === (2))){
var inst_45580 = (state_45589[(7)]);
var inst_45580__$1 = (state_45589[(2)]);
var state_45589__$1 = (function (){var statearr_45591 = state_45589;
(statearr_45591[(7)] = inst_45580__$1);

return statearr_45591;
})();
if(cljs.core.truth_(inst_45580__$1)){
var statearr_45592_45600 = state_45589__$1;
(statearr_45592_45600[(1)] = (3));

} else {
var statearr_45593_45601 = state_45589__$1;
(statearr_45593_45601[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45590 === (3))){
var inst_45580 = (state_45589[(7)]);
var inst_45582 = mecca.music.decode.call(null,inst_45580);
var state_45589__$1 = state_45589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45589__$1,(6),inst_45582);
} else {
if((state_val_45590 === (4))){
var state_45589__$1 = state_45589;
var statearr_45594_45602 = state_45589__$1;
(statearr_45594_45602[(2)] = null);

(statearr_45594_45602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45590 === (5))){
var inst_45587 = (state_45589[(2)]);
var state_45589__$1 = state_45589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45589__$1,inst_45587);
} else {
if((state_val_45590 === (6))){
var inst_45584 = (state_45589[(2)]);
var state_45589__$1 = state_45589;
var statearr_45595_45603 = state_45589__$1;
(statearr_45595_45603[(2)] = inst_45584);

(statearr_45595_45603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__13771__auto__))
;
return ((function (switch__13612__auto__,c__13771__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__13613__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__13613__auto____0 = (function (){
var statearr_45596 = [null,null,null,null,null,null,null,null];
(statearr_45596[(0)] = mecca$music$get_and_decode_$_state_machine__13613__auto__);

(statearr_45596[(1)] = (1));

return statearr_45596;
});
var mecca$music$get_and_decode_$_state_machine__13613__auto____1 = (function (state_45589){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__.call(null,state_45589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e45597){if((e45597 instanceof Object)){
var ex__13616__auto__ = e45597;
var statearr_45598_45604 = state_45589;
(statearr_45598_45604[(5)] = ex__13616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45605 = state_45589;
state_45589 = G__45605;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__13613__auto__ = function(state_45589){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__13613__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__13613__auto____1.call(this,state_45589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__13613__auto____0;
mecca$music$get_and_decode_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__13613__auto____1;
return mecca$music$get_and_decode_$_state_machine__13613__auto__;
})()
;})(switch__13612__auto__,c__13771__auto__))
})();
var state__13773__auto__ = (function (){var statearr_45599 = f__13772__auto__.call(null);
(statearr_45599[(6)] = c__13771__auto__);

return statearr_45599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13773__auto__);
});})(c__13771__auto__))
);

return c__13771__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__13771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13771__auto__){
return (function (){
var f__13772__auto__ = (function (){var switch__13612__auto__ = ((function (c__13771__auto__){
return (function (state_45634){
var state_val_45635 = (state_45634[(1)]);
if((state_val_45635 === (1))){
var inst_45606 = cljs.core.PersistentHashMap.EMPTY;
var inst_45607 = cljs.core.range.call(null,(1),(27));
var inst_45608 = inst_45606;
var inst_45609 = inst_45607;
var state_45634__$1 = (function (){var statearr_45636 = state_45634;
(statearr_45636[(7)] = inst_45608);

(statearr_45636[(8)] = inst_45609);

return statearr_45636;
})();
var statearr_45637_45649 = state_45634__$1;
(statearr_45637_45649[(2)] = null);

(statearr_45637_45649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (2))){
var inst_45609 = (state_45634[(8)]);
var inst_45611 = cljs.core.first.call(null,inst_45609);
var inst_45612 = (inst_45611 == null);
var inst_45613 = cljs.core.not.call(null,inst_45612);
var state_45634__$1 = state_45634;
if(inst_45613){
var statearr_45638_45650 = state_45634__$1;
(statearr_45638_45650[(1)] = (4));

} else {
var statearr_45639_45651 = state_45634__$1;
(statearr_45639_45651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (3))){
var inst_45632 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45634__$1,inst_45632);
} else {
if((state_val_45635 === (4))){
var inst_45615 = (state_45634[(9)]);
var inst_45609 = (state_45634[(8)]);
var inst_45615__$1 = cljs.core.first.call(null,inst_45609);
var inst_45616 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_45617 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45615__$1),".mp3"].join('');
var inst_45618 = [inst_45617,inst_45615__$1];
var inst_45619 = cljs.core.PersistentHashMap.fromArrays(inst_45616,inst_45618);
var inst_45620 = mecca.music.get_and_decode.call(null,inst_45619);
var state_45634__$1 = (function (){var statearr_45640 = state_45634;
(statearr_45640[(9)] = inst_45615__$1);

return statearr_45640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45634__$1,(7),inst_45620);
} else {
if((state_val_45635 === (5))){
var inst_45608 = (state_45634[(7)]);
var state_45634__$1 = state_45634;
var statearr_45641_45652 = state_45634__$1;
(statearr_45641_45652[(2)] = inst_45608);

(statearr_45641_45652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (6))){
var inst_45630 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
var statearr_45642_45653 = state_45634__$1;
(statearr_45642_45653[(2)] = inst_45630);

(statearr_45642_45653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (7))){
var inst_45608 = (state_45634[(7)]);
var inst_45615 = (state_45634[(9)]);
var inst_45609 = (state_45634[(8)]);
var inst_45622 = (state_45634[(2)]);
var inst_45623 = cljs.core.prn.call(null,inst_45615);
var inst_45624 = cljs.core.prn.call(null,inst_45622);
var inst_45625 = cljs.core.assoc.call(null,inst_45608,inst_45615,inst_45622);
var inst_45626 = cljs.core.rest.call(null,inst_45609);
var inst_45608__$1 = inst_45625;
var inst_45609__$1 = inst_45626;
var state_45634__$1 = (function (){var statearr_45643 = state_45634;
(statearr_45643[(7)] = inst_45608__$1);

(statearr_45643[(10)] = inst_45623);

(statearr_45643[(11)] = inst_45624);

(statearr_45643[(8)] = inst_45609__$1);

return statearr_45643;
})();
var statearr_45644_45654 = state_45634__$1;
(statearr_45644_45654[(2)] = null);

(statearr_45644_45654[(1)] = (2));


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
});})(c__13771__auto__))
;
return ((function (switch__13612__auto__,c__13771__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__13613__auto__ = null;
var mecca$music$load_samples_$_state_machine__13613__auto____0 = (function (){
var statearr_45645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45645[(0)] = mecca$music$load_samples_$_state_machine__13613__auto__);

(statearr_45645[(1)] = (1));

return statearr_45645;
});
var mecca$music$load_samples_$_state_machine__13613__auto____1 = (function (state_45634){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__.call(null,state_45634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e45646){if((e45646 instanceof Object)){
var ex__13616__auto__ = e45646;
var statearr_45647_45655 = state_45634;
(statearr_45647_45655[(5)] = ex__13616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45656 = state_45634;
state_45634 = G__45656;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__13613__auto__ = function(state_45634){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__13613__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__13613__auto____1.call(this,state_45634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__13613__auto____0;
mecca$music$load_samples_$_state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__13613__auto____1;
return mecca$music$load_samples_$_state_machine__13613__auto__;
})()
;})(switch__13612__auto__,c__13771__auto__))
})();
var state__13773__auto__ = (function (){var statearr_45648 = f__13772__auto__.call(null);
(statearr_45648[(6)] = c__13771__auto__);

return statearr_45648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13773__auto__);
});})(c__13771__auto__))
);

return c__13771__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__13771__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13771__auto__){
return (function (){
var f__13772__auto__ = (function (){var switch__13612__auto__ = ((function (c__13771__auto__){
return (function (state_45663){
var state_val_45664 = (state_45663[(1)]);
if((state_val_45664 === (1))){
var inst_45657 = mecca.music.load_samples.call(null);
var state_45663__$1 = state_45663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45663__$1,(2),inst_45657);
} else {
if((state_val_45664 === (2))){
var inst_45659 = (state_45663[(2)]);
var inst_45660 = mecca.music.samples = inst_45659;
var inst_45661 = cljs.core.prn.call(null,"Samples loaded");
var state_45663__$1 = (function (){var statearr_45665 = state_45663;
(statearr_45665[(7)] = inst_45660);

return statearr_45665;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45663__$1,inst_45661);
} else {
return null;
}
}
});})(c__13771__auto__))
;
return ((function (switch__13612__auto__,c__13771__auto__){
return (function() {
var mecca$music$state_machine__13613__auto__ = null;
var mecca$music$state_machine__13613__auto____0 = (function (){
var statearr_45666 = [null,null,null,null,null,null,null,null];
(statearr_45666[(0)] = mecca$music$state_machine__13613__auto__);

(statearr_45666[(1)] = (1));

return statearr_45666;
});
var mecca$music$state_machine__13613__auto____1 = (function (state_45663){
while(true){
var ret_value__13614__auto__ = (function (){try{while(true){
var result__13615__auto__ = switch__13612__auto__.call(null,state_45663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13615__auto__;
}
break;
}
}catch (e45667){if((e45667 instanceof Object)){
var ex__13616__auto__ = e45667;
var statearr_45668_45670 = state_45663;
(statearr_45668_45670[(5)] = ex__13616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45671 = state_45663;
state_45663 = G__45671;
continue;
} else {
return ret_value__13614__auto__;
}
break;
}
});
mecca$music$state_machine__13613__auto__ = function(state_45663){
switch(arguments.length){
case 0:
return mecca$music$state_machine__13613__auto____0.call(this);
case 1:
return mecca$music$state_machine__13613__auto____1.call(this,state_45663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__13613__auto____0;
mecca$music$state_machine__13613__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__13613__auto____1;
return mecca$music$state_machine__13613__auto__;
})()
;})(switch__13612__auto__,c__13771__auto__))
})();
var state__13773__auto__ = (function (){var statearr_45669 = f__13772__auto__.call(null);
(statearr_45669[(6)] = c__13771__auto__);

return statearr_45669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13773__auto__);
});})(c__13771__auto__))
);

return c__13771__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__45672 = midi_num;
switch (G__45672) {
case (56):
return 0.52;

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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45672)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,mecca.music.samples,instrument));
var sample_source = cljs.core.deref.call(null,context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate.call(null,((77) - pitch)),cljs.core.deref.call(null,context).currentTime);

sample_source.connect(cljs.core.deref.call(null,context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = mecca.music.audiocontext;
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,mecca.music.samples,instrument));
var sample_source = cljs.core.deref.call(null,context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate.call(null,pitch),time);

sample_source.connect(cljs.core.deref.call(null,context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.lookahead = 25.0;
mecca.music.schedule_ahead_time = 0.1;
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instruments","instruments",-69874543)], null));
var now = cljs.core.deref.call(null,mecca.music.audiocontext).currentTime;
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__45674(s__45675){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__45675__$1 = s__45675;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45675__$1);
if(temp__5457__auto__){
var s__45675__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45675__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__45675__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__45677 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__45676 = (0);
while(true){
if((i__45676 < size__4323__auto__)){
var map__45678 = cljs.core._nth.call(null,c__4322__auto__,i__45676);
var map__45678__$1 = ((((!((map__45678 == null)))?(((((map__45678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45678):map__45678);
var time = cljs.core.get.call(null,map__45678__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__45678__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__45678__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__45677,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))));

var G__45682 = (i__45676 + (1));
i__45676 = G__45682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45677),mecca$music$play_song_BANG__$_iter__45674.call(null,cljs.core.chunk_rest.call(null,s__45675__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45677),null);
}
} else {
var map__45680 = cljs.core.first.call(null,s__45675__$2);
var map__45680__$1 = ((((!((map__45680 == null)))?(((((map__45680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45680):map__45680);
var time = cljs.core.get.call(null,map__45680__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__45680__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__45680__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))),mecca$music$play_song_BANG__$_iter__45674.call(null,cljs.core.rest.call(null,s__45675__$2)));
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
return iter__4324__auto__.call(null,cljs.core.deref.call(null,notes));
})());
});

//# sourceMappingURL=music7F45684.js.map
