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
mecca.music.scheduleAheadTime = 0.1;
mecca.music.scheduler = (function mecca$music$scheduler(){
var next_note_time = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-note-time","next-note-time",-1117617128)], null));
var current_note = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-note","current-note",-1767945909)], null));
if((cljs.core.deref.call(null,next_note_time) < (mecca.music.scheduleAheadTime + mecca.music.current_time.call(null,cljs.core.deref.call(null,mecca.music.audiocontext))))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schedule-note","schedule-note",2064270583),cljs.core.deref.call(null,current_note),cljs.core.deref.call(null,next_note_time)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-note","next-note",-239967297)], null));
}
});
mecca.music.mm = (function mecca$music$mm(time,instrument,pitch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(time + (1)),new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),(1.5 + time),new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument,new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch], null)], null);
});
mecca.music.mm8 = (function mecca$music$mm8(time,instrument,pitch){
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4324__auto__ = (function mecca$music$mm8_$_iter__47495(s__47496){
return (new cljs.core.LazySeq(null,(function (){
var s__47496__$1 = s__47496;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__47496__$1);
if(temp__5457__auto__){
var s__47496__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47496__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__47496__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__47498 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__47497 = (0);
while(true){
if((i__47497 < size__4323__auto__)){
var beat = cljs.core._nth.call(null,c__4322__auto__,i__47497);
cljs.core.chunk_append.call(null,b__47498,mecca.music.mm.call(null,(beat + time),instrument,pitch));

var G__47499 = (i__47497 + (1));
i__47497 = G__47499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47498),mecca$music$mm8_$_iter__47495.call(null,cljs.core.chunk_rest.call(null,s__47496__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47498),null);
}
} else {
var beat = cljs.core.first.call(null,s__47496__$2);
return cljs.core.cons.call(null,mecca.music.mm.call(null,(beat + time),instrument,pitch),mecca$music$mm8_$_iter__47495.call(null,cljs.core.rest.call(null,s__47496__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(0),(8),(2)));
})());
});
mecca.music.mmbass = (function mecca$music$mmbass(){
return cljs.core.concat.call(null,mecca.music.mm8.call(null,(0),(6),(60)),mecca.music.mm8.call(null,(8),(6),(60)),mecca.music.mm8.call(null,(16),(6),(56)),mecca.music.mm8.call(null,(24),(6),(56)),mecca.music.mm8.call(null,(32),(6),(58)),mecca.music.mm8.call(null,(40),(6),(58)),mecca.music.mm8.call(null,(48),(6),(60)),mecca.music.mm8.call(null,(56),(6),(60)));
});
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null))))){
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,((function (beat,notes){
return (function (p1__47500_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__47500_SHARP_),(cljs.core.deref.call(null,beat) - (6)));
});})(beat,notes))
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
var playing_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
var beat = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null)));
if(cljs.core.truth_(playing_QMARK_)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908),((40) * beat)], null));
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var playing_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)));
var now = cljs.core.deref.call(null,mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (notes,playing_QMARK_,now){
return (function (p1__47501_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__47501_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref.call(null,notes)));
var started = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null)));
var elapsed = (mecca.music.current_time.call(null,cljs.core.deref.call(null,mecca.music.audiocontext)) - started);
var beat_length = ((60) / cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))));
var current_beat = (elapsed / beat_length);
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null));
} else {
if(((started + beat_length) < now)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null));
} else {
}
}
} else {
}

mecca.music.mario_move.call(null);

return mecca.music.mario_jump_QMARK_.call(null);
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null));

mecca.music.song_done_QMARK_.call(null);

return mecca.music.scheduler.call(null);
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(100));
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
var c__14004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14004__auto__){
return (function (){
var f__14005__auto__ = (function (){var switch__13845__auto__ = ((function (c__14004__auto__){
return (function (state_47515){
var state_val_47516 = (state_47515[(1)]);
if((state_val_47516 === (1))){
var inst_47504 = mecca.music.load_sound.call(null,named_url);
var state_47515__$1 = state_47515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47515__$1,(2),inst_47504);
} else {
if((state_val_47516 === (2))){
var inst_47506 = (state_47515[(7)]);
var inst_47506__$1 = (state_47515[(2)]);
var state_47515__$1 = (function (){var statearr_47517 = state_47515;
(statearr_47517[(7)] = inst_47506__$1);

return statearr_47517;
})();
if(cljs.core.truth_(inst_47506__$1)){
var statearr_47518_47526 = state_47515__$1;
(statearr_47518_47526[(1)] = (3));

} else {
var statearr_47519_47527 = state_47515__$1;
(statearr_47519_47527[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (3))){
var inst_47506 = (state_47515[(7)]);
var inst_47508 = mecca.music.decode.call(null,inst_47506);
var state_47515__$1 = state_47515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47515__$1,(6),inst_47508);
} else {
if((state_val_47516 === (4))){
var state_47515__$1 = state_47515;
var statearr_47520_47528 = state_47515__$1;
(statearr_47520_47528[(2)] = null);

(statearr_47520_47528[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (5))){
var inst_47513 = (state_47515[(2)]);
var state_47515__$1 = state_47515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47515__$1,inst_47513);
} else {
if((state_val_47516 === (6))){
var inst_47510 = (state_47515[(2)]);
var state_47515__$1 = state_47515;
var statearr_47521_47529 = state_47515__$1;
(statearr_47521_47529[(2)] = inst_47510);

(statearr_47521_47529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__14004__auto__))
;
return ((function (switch__13845__auto__,c__14004__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__13846__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__13846__auto____0 = (function (){
var statearr_47522 = [null,null,null,null,null,null,null,null];
(statearr_47522[(0)] = mecca$music$get_and_decode_$_state_machine__13846__auto__);

(statearr_47522[(1)] = (1));

return statearr_47522;
});
var mecca$music$get_and_decode_$_state_machine__13846__auto____1 = (function (state_47515){
while(true){
var ret_value__13847__auto__ = (function (){try{while(true){
var result__13848__auto__ = switch__13845__auto__.call(null,state_47515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13848__auto__;
}
break;
}
}catch (e47523){if((e47523 instanceof Object)){
var ex__13849__auto__ = e47523;
var statearr_47524_47530 = state_47515;
(statearr_47524_47530[(5)] = ex__13849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47531 = state_47515;
state_47515 = G__47531;
continue;
} else {
return ret_value__13847__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__13846__auto__ = function(state_47515){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__13846__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__13846__auto____1.call(this,state_47515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__13846__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__13846__auto____0;
mecca$music$get_and_decode_$_state_machine__13846__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__13846__auto____1;
return mecca$music$get_and_decode_$_state_machine__13846__auto__;
})()
;})(switch__13845__auto__,c__14004__auto__))
})();
var state__14006__auto__ = (function (){var statearr_47525 = f__14005__auto__.call(null);
(statearr_47525[(6)] = c__14004__auto__);

return statearr_47525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14006__auto__);
});})(c__14004__auto__))
);

return c__14004__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__14004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14004__auto__){
return (function (){
var f__14005__auto__ = (function (){var switch__13845__auto__ = ((function (c__14004__auto__){
return (function (state_47560){
var state_val_47561 = (state_47560[(1)]);
if((state_val_47561 === (1))){
var inst_47532 = cljs.core.PersistentHashMap.EMPTY;
var inst_47533 = cljs.core.range.call(null,(1),(27));
var inst_47534 = inst_47532;
var inst_47535 = inst_47533;
var state_47560__$1 = (function (){var statearr_47562 = state_47560;
(statearr_47562[(7)] = inst_47535);

(statearr_47562[(8)] = inst_47534);

return statearr_47562;
})();
var statearr_47563_47575 = state_47560__$1;
(statearr_47563_47575[(2)] = null);

(statearr_47563_47575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47561 === (2))){
var inst_47535 = (state_47560[(7)]);
var inst_47537 = cljs.core.first.call(null,inst_47535);
var inst_47538 = (inst_47537 == null);
var inst_47539 = cljs.core.not.call(null,inst_47538);
var state_47560__$1 = state_47560;
if(inst_47539){
var statearr_47564_47576 = state_47560__$1;
(statearr_47564_47576[(1)] = (4));

} else {
var statearr_47565_47577 = state_47560__$1;
(statearr_47565_47577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47561 === (3))){
var inst_47558 = (state_47560[(2)]);
var state_47560__$1 = state_47560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47560__$1,inst_47558);
} else {
if((state_val_47561 === (4))){
var inst_47535 = (state_47560[(7)]);
var inst_47541 = (state_47560[(9)]);
var inst_47541__$1 = cljs.core.first.call(null,inst_47535);
var inst_47542 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_47543 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47541__$1),".mp3"].join('');
var inst_47544 = [inst_47543,inst_47541__$1];
var inst_47545 = cljs.core.PersistentHashMap.fromArrays(inst_47542,inst_47544);
var inst_47546 = mecca.music.get_and_decode.call(null,inst_47545);
var state_47560__$1 = (function (){var statearr_47566 = state_47560;
(statearr_47566[(9)] = inst_47541__$1);

return statearr_47566;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47560__$1,(7),inst_47546);
} else {
if((state_val_47561 === (5))){
var inst_47534 = (state_47560[(8)]);
var state_47560__$1 = state_47560;
var statearr_47567_47578 = state_47560__$1;
(statearr_47567_47578[(2)] = inst_47534);

(statearr_47567_47578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47561 === (6))){
var inst_47556 = (state_47560[(2)]);
var state_47560__$1 = state_47560;
var statearr_47568_47579 = state_47560__$1;
(statearr_47568_47579[(2)] = inst_47556);

(statearr_47568_47579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47561 === (7))){
var inst_47535 = (state_47560[(7)]);
var inst_47541 = (state_47560[(9)]);
var inst_47534 = (state_47560[(8)]);
var inst_47548 = (state_47560[(2)]);
var inst_47549 = cljs.core.prn.call(null,inst_47541);
var inst_47550 = cljs.core.prn.call(null,inst_47548);
var inst_47551 = cljs.core.assoc.call(null,inst_47534,inst_47541,inst_47548);
var inst_47552 = cljs.core.rest.call(null,inst_47535);
var inst_47534__$1 = inst_47551;
var inst_47535__$1 = inst_47552;
var state_47560__$1 = (function (){var statearr_47569 = state_47560;
(statearr_47569[(7)] = inst_47535__$1);

(statearr_47569[(10)] = inst_47549);

(statearr_47569[(11)] = inst_47550);

(statearr_47569[(8)] = inst_47534__$1);

return statearr_47569;
})();
var statearr_47570_47580 = state_47560__$1;
(statearr_47570_47580[(2)] = null);

(statearr_47570_47580[(1)] = (2));


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
});})(c__14004__auto__))
;
return ((function (switch__13845__auto__,c__14004__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__13846__auto__ = null;
var mecca$music$load_samples_$_state_machine__13846__auto____0 = (function (){
var statearr_47571 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47571[(0)] = mecca$music$load_samples_$_state_machine__13846__auto__);

(statearr_47571[(1)] = (1));

return statearr_47571;
});
var mecca$music$load_samples_$_state_machine__13846__auto____1 = (function (state_47560){
while(true){
var ret_value__13847__auto__ = (function (){try{while(true){
var result__13848__auto__ = switch__13845__auto__.call(null,state_47560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13848__auto__;
}
break;
}
}catch (e47572){if((e47572 instanceof Object)){
var ex__13849__auto__ = e47572;
var statearr_47573_47581 = state_47560;
(statearr_47573_47581[(5)] = ex__13849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47582 = state_47560;
state_47560 = G__47582;
continue;
} else {
return ret_value__13847__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__13846__auto__ = function(state_47560){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__13846__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__13846__auto____1.call(this,state_47560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__13846__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__13846__auto____0;
mecca$music$load_samples_$_state_machine__13846__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__13846__auto____1;
return mecca$music$load_samples_$_state_machine__13846__auto__;
})()
;})(switch__13845__auto__,c__14004__auto__))
})();
var state__14006__auto__ = (function (){var statearr_47574 = f__14005__auto__.call(null);
(statearr_47574[(6)] = c__14004__auto__);

return statearr_47574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14006__auto__);
});})(c__14004__auto__))
);

return c__14004__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__14004__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14004__auto__){
return (function (){
var f__14005__auto__ = (function (){var switch__13845__auto__ = ((function (c__14004__auto__){
return (function (state_47589){
var state_val_47590 = (state_47589[(1)]);
if((state_val_47590 === (1))){
var inst_47583 = mecca.music.load_samples.call(null);
var state_47589__$1 = state_47589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47589__$1,(2),inst_47583);
} else {
if((state_val_47590 === (2))){
var inst_47585 = (state_47589[(2)]);
var inst_47586 = mecca.music.samples = inst_47585;
var inst_47587 = cljs.core.prn.call(null,"Samples loaded");
var state_47589__$1 = (function (){var statearr_47591 = state_47589;
(statearr_47591[(7)] = inst_47586);

return statearr_47591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47589__$1,inst_47587);
} else {
return null;
}
}
});})(c__14004__auto__))
;
return ((function (switch__13845__auto__,c__14004__auto__){
return (function() {
var mecca$music$state_machine__13846__auto__ = null;
var mecca$music$state_machine__13846__auto____0 = (function (){
var statearr_47592 = [null,null,null,null,null,null,null,null];
(statearr_47592[(0)] = mecca$music$state_machine__13846__auto__);

(statearr_47592[(1)] = (1));

return statearr_47592;
});
var mecca$music$state_machine__13846__auto____1 = (function (state_47589){
while(true){
var ret_value__13847__auto__ = (function (){try{while(true){
var result__13848__auto__ = switch__13845__auto__.call(null,state_47589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13848__auto__;
}
break;
}
}catch (e47593){if((e47593 instanceof Object)){
var ex__13849__auto__ = e47593;
var statearr_47594_47596 = state_47589;
(statearr_47594_47596[(5)] = ex__13849__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47597 = state_47589;
state_47589 = G__47597;
continue;
} else {
return ret_value__13847__auto__;
}
break;
}
});
mecca$music$state_machine__13846__auto__ = function(state_47589){
switch(arguments.length){
case 0:
return mecca$music$state_machine__13846__auto____0.call(this);
case 1:
return mecca$music$state_machine__13846__auto____1.call(this,state_47589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__13846__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__13846__auto____0;
mecca$music$state_machine__13846__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__13846__auto____1;
return mecca$music$state_machine__13846__auto__;
})()
;})(switch__13845__auto__,c__14004__auto__))
})();
var state__14006__auto__ = (function (){var statearr_47595 = f__14005__auto__.call(null);
(statearr_47595[(6)] = c__14004__auto__);

return statearr_47595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14006__auto__);
});})(c__14004__auto__))
);

return c__14004__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__47598 = midi_num;
switch (G__47598) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47598)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,mecca.music.samples,instrument));
var sample_source = cljs.core.deref.call(null,context).createBufferSource();
var compressor = cljs.core.deref.call(null,context).createDynamicsCompressor();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate.call(null,pitch),cljs.core.deref.call(null,context).currentTime);

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
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var now = cljs.core.deref.call(null,mecca.music.audiocontext).currentTime;
var tempo = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null));

return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__47602(s__47603){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__47603__$1 = s__47603;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__47603__$1);
if(temp__5457__auto__){
var s__47603__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47603__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__47603__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__47605 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__47604 = (0);
while(true){
if((i__47604 < size__4323__auto__)){
var map__47606 = cljs.core._nth.call(null,c__4322__auto__,i__47604);
var map__47606__$1 = ((((!((map__47606 == null)))?(((((map__47606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47606):map__47606);
var time = cljs.core.get.call(null,map__47606__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__47606__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__47606__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__47605,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))));

var G__47610 = (i__47604 + (1));
i__47604 = G__47610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47605),mecca$music$play_song_BANG__$_iter__47602.call(null,cljs.core.chunk_rest.call(null,s__47603__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47605),null);
}
} else {
var map__47608 = cljs.core.first.call(null,s__47603__$2);
var map__47608__$1 = ((((!((map__47608 == null)))?(((((map__47608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47608):map__47608);
var time = cljs.core.get.call(null,map__47608__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.call(null,map__47608__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.call(null,map__47608__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,mecca.music.play_at.call(null,instrument,pitch,(now + (((60) / cljs.core.deref.call(null,tempo)) * time))),mecca$music$play_song_BANG__$_iter__47602.call(null,cljs.core.rest.call(null,s__47603__$2)));
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
