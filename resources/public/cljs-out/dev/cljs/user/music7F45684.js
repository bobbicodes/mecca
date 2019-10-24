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
mecca.music.lookahead = 25.0;
mecca.music.schedule_ahead_time = 0.1;
mecca.music.scheduler = (function mecca$music$scheduler(){
var next_note_time = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128)], null));
var current_note = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null));
if((cljs.core.deref.call(null,next_note_time) < (mecca.music.schedule_ahead_time + mecca.music.current_time.call(null,cljs.core.deref.call(null,mecca.music.audiocontext))))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),cljs.core.deref.call(null,current_note),cljs.core.deref.call(null,next_note_time)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-note","next-note",-239967297)], null));
}
});
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var jump = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null));
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref.call(null,jump) === (0));
} else {
return and__3938__auto__;
}
})())){
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,((function (beat,notes,jump){
return (function (p1__33112_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__33112_SHARP_),(cljs.core.deref.call(null,beat) + (1)));
});})(beat,notes,jump))
,cljs.core.deref.call(null,notes))))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var playing_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
var now = cljs.core.deref.call(null,mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (notes,playing_QMARK_,now){
return (function (p1__33113_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__33113_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref.call(null,notes)));
var started = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null));
var elapsed = (mecca.music.current_time.call(null,cljs.core.deref.call(null,mecca.music.audiocontext)) - cljs.core.deref.call(null,started));
var beat_length = ((60) / cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null));
} else {
if((cljs.core.deref.call(null,last_drawn_pos) < current_beat)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null));
} else {
}
}
} else {
}

return mecca.music.mario_jump.call(null);
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null));

return mecca.music.mario_move.call(null);
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(25));
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
var c__13328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13328__auto__){
return (function (){
var f__13329__auto__ = (function (){var switch__13169__auto__ = ((function (c__13328__auto__){
return (function (state_33132){
var state_val_33133 = (state_33132[(1)]);
if((state_val_33133 === (1))){
var inst_33121 = mecca.music.load_sound.call(null,named_url);
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33132__$1,(2),inst_33121);
} else {
if((state_val_33133 === (2))){
var inst_33123 = (state_33132[(7)]);
var inst_33123__$1 = (state_33132[(2)]);
var state_33132__$1 = (function (){var statearr_33134 = state_33132;
(statearr_33134[(7)] = inst_33123__$1);

return statearr_33134;
})();
if(cljs.core.truth_(inst_33123__$1)){
var statearr_33135_33143 = state_33132__$1;
(statearr_33135_33143[(1)] = (3));

} else {
var statearr_33136_33144 = state_33132__$1;
(statearr_33136_33144[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (3))){
var inst_33123 = (state_33132[(7)]);
var inst_33125 = mecca.music.decode.call(null,inst_33123);
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33132__$1,(6),inst_33125);
} else {
if((state_val_33133 === (4))){
var state_33132__$1 = state_33132;
var statearr_33137_33145 = state_33132__$1;
(statearr_33137_33145[(2)] = null);

(statearr_33137_33145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (5))){
var inst_33130 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33132__$1,inst_33130);
} else {
if((state_val_33133 === (6))){
var inst_33127 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
var statearr_33138_33146 = state_33132__$1;
(statearr_33138_33146[(2)] = inst_33127);

(statearr_33138_33146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__13328__auto__))
;
return ((function (switch__13169__auto__,c__13328__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__13170__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__13170__auto____0 = (function (){
var statearr_33139 = [null,null,null,null,null,null,null,null];
(statearr_33139[(0)] = mecca$music$get_and_decode_$_state_machine__13170__auto__);

(statearr_33139[(1)] = (1));

return statearr_33139;
});
var mecca$music$get_and_decode_$_state_machine__13170__auto____1 = (function (state_33132){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_33132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e33140){if((e33140 instanceof Object)){
var ex__13173__auto__ = e33140;
var statearr_33141_33147 = state_33132;
(statearr_33141_33147[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33148 = state_33132;
state_33132 = G__33148;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__13170__auto__ = function(state_33132){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__13170__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__13170__auto____1.call(this,state_33132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__13170__auto____0;
mecca$music$get_and_decode_$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__13170__auto____1;
return mecca$music$get_and_decode_$_state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13328__auto__))
})();
var state__13330__auto__ = (function (){var statearr_33142 = f__13329__auto__.call(null);
(statearr_33142[(6)] = c__13328__auto__);

return statearr_33142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13330__auto__);
});})(c__13328__auto__))
);

return c__13328__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__13328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13328__auto__){
return (function (){
var f__13329__auto__ = (function (){var switch__13169__auto__ = ((function (c__13328__auto__){
return (function (state_33177){
var state_val_33178 = (state_33177[(1)]);
if((state_val_33178 === (1))){
var inst_33149 = cljs.core.PersistentHashMap.EMPTY;
var inst_33150 = cljs.core.range.call(null,(1),(19));
var inst_33151 = inst_33149;
var inst_33152 = inst_33150;
var state_33177__$1 = (function (){var statearr_33179 = state_33177;
(statearr_33179[(7)] = inst_33151);

(statearr_33179[(8)] = inst_33152);

return statearr_33179;
})();
var statearr_33180_33201 = state_33177__$1;
(statearr_33180_33201[(2)] = null);

(statearr_33180_33201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (2))){
var inst_33152 = (state_33177[(8)]);
var inst_33154 = cljs.core.first.call(null,inst_33152);
var inst_33155 = (inst_33154 == null);
var inst_33156 = cljs.core.not.call(null,inst_33155);
var state_33177__$1 = state_33177;
if(inst_33156){
var statearr_33181_33206 = state_33177__$1;
(statearr_33181_33206[(1)] = (4));

} else {
var statearr_33182_33207 = state_33177__$1;
(statearr_33182_33207[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (3))){
var inst_33175 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33177__$1,inst_33175);
} else {
if((state_val_33178 === (4))){
var inst_33158 = (state_33177[(9)]);
var inst_33152 = (state_33177[(8)]);
var inst_33158__$1 = cljs.core.first.call(null,inst_33152);
var inst_33159 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_33160 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33158__$1),".mp3"].join('');
var inst_33161 = [inst_33160,inst_33158__$1];
var inst_33162 = cljs.core.PersistentHashMap.fromArrays(inst_33159,inst_33161);
var inst_33163 = mecca.music.get_and_decode.call(null,inst_33162);
var state_33177__$1 = (function (){var statearr_33183 = state_33177;
(statearr_33183[(9)] = inst_33158__$1);

return statearr_33183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(7),inst_33163);
} else {
if((state_val_33178 === (5))){
var inst_33151 = (state_33177[(7)]);
var state_33177__$1 = state_33177;
var statearr_33184_33212 = state_33177__$1;
(statearr_33184_33212[(2)] = inst_33151);

(statearr_33184_33212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (6))){
var inst_33173 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33185_33214 = state_33177__$1;
(statearr_33185_33214[(2)] = inst_33173);

(statearr_33185_33214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (7))){
var inst_33158 = (state_33177[(9)]);
var inst_33151 = (state_33177[(7)]);
var inst_33152 = (state_33177[(8)]);
var inst_33165 = (state_33177[(2)]);
var inst_33166 = cljs.core.prn.call(null,inst_33158);
var inst_33167 = cljs.core.prn.call(null,inst_33165);
var inst_33168 = cljs.core.assoc.call(null,inst_33151,inst_33158,inst_33165);
var inst_33169 = cljs.core.rest.call(null,inst_33152);
var inst_33151__$1 = inst_33168;
var inst_33152__$1 = inst_33169;
var state_33177__$1 = (function (){var statearr_33188 = state_33177;
(statearr_33188[(10)] = inst_33167);

(statearr_33188[(11)] = inst_33166);

(statearr_33188[(7)] = inst_33151__$1);

(statearr_33188[(8)] = inst_33152__$1);

return statearr_33188;
})();
var statearr_33189_33224 = state_33177__$1;
(statearr_33189_33224[(2)] = null);

(statearr_33189_33224[(1)] = (2));


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
});})(c__13328__auto__))
;
return ((function (switch__13169__auto__,c__13328__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__13170__auto__ = null;
var mecca$music$load_samples_$_state_machine__13170__auto____0 = (function (){
var statearr_33190 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33190[(0)] = mecca$music$load_samples_$_state_machine__13170__auto__);

(statearr_33190[(1)] = (1));

return statearr_33190;
});
var mecca$music$load_samples_$_state_machine__13170__auto____1 = (function (state_33177){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_33177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e33191){if((e33191 instanceof Object)){
var ex__13173__auto__ = e33191;
var statearr_33192_33225 = state_33177;
(statearr_33192_33225[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33227 = state_33177;
state_33177 = G__33227;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__13170__auto__ = function(state_33177){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__13170__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__13170__auto____1.call(this,state_33177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__13170__auto____0;
mecca$music$load_samples_$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__13170__auto____1;
return mecca$music$load_samples_$_state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13328__auto__))
})();
var state__13330__auto__ = (function (){var statearr_33200 = f__13329__auto__.call(null);
(statearr_33200[(6)] = c__13328__auto__);

return statearr_33200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13330__auto__);
});})(c__13328__auto__))
);

return c__13328__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__13328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13328__auto__){
return (function (){
var f__13329__auto__ = (function (){var switch__13169__auto__ = ((function (c__13328__auto__){
return (function (state_33237){
var state_val_33238 = (state_33237[(1)]);
if((state_val_33238 === (1))){
var inst_33231 = mecca.music.load_samples.call(null);
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33237__$1,(2),inst_33231);
} else {
if((state_val_33238 === (2))){
var inst_33233 = (state_33237[(2)]);
var inst_33234 = mecca.music.samples = inst_33233;
var inst_33235 = cljs.core.prn.call(null,"Samples loaded");
var state_33237__$1 = (function (){var statearr_33239 = state_33237;
(statearr_33239[(7)] = inst_33234);

return statearr_33239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33237__$1,inst_33235);
} else {
return null;
}
}
});})(c__13328__auto__))
;
return ((function (switch__13169__auto__,c__13328__auto__){
return (function() {
var mecca$music$state_machine__13170__auto__ = null;
var mecca$music$state_machine__13170__auto____0 = (function (){
var statearr_33240 = [null,null,null,null,null,null,null,null];
(statearr_33240[(0)] = mecca$music$state_machine__13170__auto__);

(statearr_33240[(1)] = (1));

return statearr_33240;
});
var mecca$music$state_machine__13170__auto____1 = (function (state_33237){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_33237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e33241){if((e33241 instanceof Object)){
var ex__13173__auto__ = e33241;
var statearr_33246_33271 = state_33237;
(statearr_33246_33271[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33276 = state_33237;
state_33237 = G__33276;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
mecca$music$state_machine__13170__auto__ = function(state_33237){
switch(arguments.length){
case 0:
return mecca$music$state_machine__13170__auto____0.call(this);
case 1:
return mecca$music$state_machine__13170__auto____1.call(this,state_33237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__13170__auto____0;
mecca$music$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__13170__auto____1;
return mecca$music$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13328__auto__))
})();
var state__13330__auto__ = (function (){var statearr_33247 = f__13329__auto__.call(null);
(statearr_33247[(6)] = c__13328__auto__);

return statearr_33247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13330__auto__);
});})(c__13328__auto__))
);

return c__13328__auto__;
})();
}
mecca.music.add_semitone = (function mecca$music$add_semitone(rate){
return (rate * Math.pow((2),((1) / (12))));
});
mecca.music.sub_semitone = (function mecca$music$sub_semitone(rate){
return (rate * Math.pow((2),((-1) / (12))));
});
mecca.music.inc_rate = (function mecca$music$inc_rate(semis){
return cljs.core.reduce.call(null,mecca.music.add_semitone,cljs.core.repeat.call(null,semis,(1)));
});
mecca.music.dec_rate = (function mecca$music$dec_rate(semis){
return cljs.core.reduce.call(null,mecca.music.sub_semitone,cljs.core.repeat.call(null,semis,(1)));
});
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
if(((66) < midi_num)){
return mecca.music.inc_rate.call(null,(midi_num - (66)));
} else {
return mecca.music.dec_rate.call(null,((68) - midi_num));
}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,mecca.music.samples,instrument));
var sample_source = cljs.core.deref.call(null,context).createBufferSource();
var compressor = cljs.core.deref.call(null,context).createDynamicsCompressor();
var analyser = cljs.core.deref.call(null,context).createAnalyser();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate.call(null,pitch),cljs.core.deref.call(null,context).currentTime);

sample_source.connect(analyser);

sample_source.connect(cljs.core.deref.call(null,context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = mecca.music.audiocontext;
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,mecca.music.samples,instrument));
var sample_source = cljs.core.deref.call(null,context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate.call(null,((((83) < pitch))?(pitch - (24)):pitch)),time);

sample_source.connect(cljs.core.deref.call(null,context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref.call(null,mecca.music.audiocontext).currentTime;
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
var section = cljs.core.filter.call(null,((function (notes,now,tempo){
return (function (p1__33334_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__33334_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__33334_SHARP_) <= to)));
});})(notes,now,tempo))
,cljs.core.deref.call(null,notes));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));

return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,now,tempo,section){
return (function mecca$music$play_section_$_iter__33339(s__33340){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo,section){
return (function (){
var s__33340__$1 = s__33340;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33340__$1);
if(temp__5457__auto__){
var s__33340__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33340__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__33340__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__33342 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__33341 = (0);
while(true){
if((i__33341 < size__4323__auto__)){
var map__33356 = cljs.core._nth.call(null,c__4322__auto__,i__33341);
var map__33356__$1 = ((((!((map__33356 == null)))?(((((map__33356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33356):map__33356);
var time = cljs.core.get.call(null,map__33356__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__33356__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__33356__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__33342,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))));

var G__33373 = (i__33341 + (1));
i__33341 = G__33373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33342),mecca$music$play_section_$_iter__33339.call(null,cljs.core.chunk_rest.call(null,s__33340__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33342),null);
}
} else {
var map__33363 = cljs.core.first.call(null,s__33340__$2);
var map__33363__$1 = ((((!((map__33363 == null)))?(((((map__33363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33363):map__33363);
var time = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__33363__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))),mecca$music$play_section_$_iter__33339.call(null,cljs.core.rest.call(null,s__33340__$2)));
}
} else {
return null;
}
break;
}
});})(notes,now,tempo,section))
,null,null));
});})(notes,now,tempo,section))
;
return iter__4324__auto__.call(null,section);
})());
});
mecca.music.play_measure = (function mecca$music$play_measure(n){
return mecca.music.play_section.call(null,((n * (4)) - (4)),((n * (4)) + (1)));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref.call(null,mecca.music.audiocontext).currentTime;
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));

return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__33389(s__33390){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__33390__$1 = s__33390;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33390__$1);
if(temp__5457__auto__){
var s__33390__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33390__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__33390__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__33392 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__33391 = (0);
while(true){
if((i__33391 < size__4323__auto__)){
var map__33393 = cljs.core._nth.call(null,c__4322__auto__,i__33391);
var map__33393__$1 = ((((!((map__33393 == null)))?(((((map__33393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33393):map__33393);
var time = cljs.core.get.call(null,map__33393__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__33393__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__33393__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__33392,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))));

var G__33413 = (i__33391 + (1));
i__33391 = G__33413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33392),mecca$music$play_song_BANG__$_iter__33389.call(null,cljs.core.chunk_rest.call(null,s__33390__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33392),null);
}
} else {
var map__33395 = cljs.core.first.call(null,s__33390__$2);
var map__33395__$1 = ((((!((map__33395 == null)))?(((((map__33395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33395):map__33395);
var time = cljs.core.get.call(null,map__33395__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__33395__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__33395__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))),mecca$music$play_song_BANG__$_iter__33389.call(null,cljs.core.rest.call(null,s__33390__$2)));
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
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});

//# sourceMappingURL=music7F45684.js.map
