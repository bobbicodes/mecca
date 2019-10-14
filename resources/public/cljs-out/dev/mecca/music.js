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
var next_note_time = (function (){var G__19882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19882) : re_frame.core.subscribe.call(null,G__19882));
})();
var current_note = (function (){var G__19883 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_note], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19883) : re_frame.core.subscribe.call(null,G__19883));
})();
if((cljs.core.deref(next_note_time) < (mecca.music.scheduleAheadTime + mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext))))){
var G__19884 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schedule_DASH_note,cljs.core.deref(current_note),cljs.core.deref(next_note_time)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19884) : re_frame.core.dispatch.call(null,G__19884));
} else {
var G__19885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$next_DASH_note], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19885) : re_frame.core.dispatch.call(null,G__19885));
}
});
mecca.music.mm = (function mecca$music$mm(time,instrument,pitch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,pitch], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(time + (1)),cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,pitch], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time,(1.5 + time),cljs.core.cst$kw$instrument,instrument,cljs.core.cst$kw$pitch,pitch], null)], null);
});
mecca.music.mm8 = (function mecca$music$mm8(time,instrument,pitch){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4324__auto__ = (function mecca$music$mm8_$_iter__19886(s__19887){
return (new cljs.core.LazySeq(null,(function (){
var s__19887__$1 = s__19887;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19887__$1);
if(temp__5457__auto__){
var s__19887__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19887__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19887__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19889 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19888 = (0);
while(true){
if((i__19888 < size__4323__auto__)){
var beat = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19888);
cljs.core.chunk_append(b__19889,mecca.music.mm((beat + time),instrument,pitch));

var G__19890 = (i__19888 + (1));
i__19888 = G__19890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19889),mecca$music$mm8_$_iter__19886(cljs.core.chunk_rest(s__19887__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19889),null);
}
} else {
var beat = cljs.core.first(s__19887__$2);
return cljs.core.cons(mecca.music.mm((beat + time),instrument,pitch),mecca$music$mm8_$_iter__19886(cljs.core.rest(s__19887__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(8),(2)));
})());
});
mecca.music.mmbass = (function mecca$music$mmbass(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(mecca.music.mm8((0),(6),(60)),mecca.music.mm8((8),(6),(60)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mecca.music.mm8((16),(6),(56)),mecca.music.mm8((24),(6),(56)),mecca.music.mm8((32),(6),(58)),mecca.music.mm8((40),(6),(58)),mecca.music.mm8((48),(6),(60)),mecca.music.mm8((56),(6),(60))], 0));
});
mecca.music.mario_jump_QMARK_ = (function mecca$music$mario_jump_QMARK_(){
var beat = (function (){var G__19892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19892) : re_frame.core.subscribe.call(null,G__19892));
})();
var notes = (function (){var G__19893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19893) : re_frame.core.subscribe.call(null,G__19893));
})();
if(cljs.core.truth_(cljs.core.deref((function (){var G__19894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19894) : re_frame.core.subscribe.call(null,G__19894));
})()))){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (beat,notes){
return (function (p1__19891_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19891_SHARP_),(cljs.core.deref(beat) + 1.5));
});})(beat,notes))
,cljs.core.deref(notes))))){
var G__19895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19895) : re_frame.core.dispatch.call(null,G__19895));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var playing_QMARK_ = cljs.core.deref((function (){var G__19896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19896) : re_frame.core.subscribe.call(null,G__19896));
})());
var beat = cljs.core.deref((function (){var G__19897 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19897) : re_frame.core.subscribe.call(null,G__19897));
})());
if(cljs.core.truth_(playing_QMARK_)){
var G__19898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$move_DASH_mario,((40) * beat)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19898) : re_frame.core.dispatch.call(null,G__19898));
} else {
return null;
}
});
mecca.music.song_done_QMARK_ = (function mecca$music$song_done_QMARK_(){
var notes = (function (){var G__19900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19900) : re_frame.core.subscribe.call(null,G__19900));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__19901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19901) : re_frame.core.subscribe.call(null,G__19901));
})());
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (notes,playing_QMARK_,now){
return (function (p1__19899_SHARP_){
return cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(p1__19899_SHARP_);
});})(notes,playing_QMARK_,now))
,cljs.core.deref(notes)));
var started = cljs.core.deref((function (){var G__19902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19902) : re_frame.core.subscribe.call(null,G__19902));
})());
var elapsed = (mecca.music.current_time(cljs.core.deref(mecca.music.audiocontext)) - started);
var beat_length = ((60) / cljs.core.deref((function (){var G__19903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19903) : re_frame.core.subscribe.call(null,G__19903));
})()));
var current_beat = (elapsed / beat_length);
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__19904_19906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_off], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19904_19906) : re_frame.core.dispatch.call(null,G__19904_19906));
} else {
if(((started + beat_length) < now)){
var G__19905_19907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19905_19907) : re_frame.core.dispatch.call(null,G__19905_19907));
} else {
}
}
} else {
}

mecca.music.mario_move();

return mecca.music.mario_jump_QMARK_();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__19908_19909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19908_19909) : re_frame.core.dispatch.call(null,G__19908_19909));

mecca.music.song_done_QMARK_();

return mecca.music.scheduler();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(60));
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
var c__16070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto__){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto__){
return (function (state_19921){
var state_val_19922 = (state_19921[(1)]);
if((state_val_19922 === (1))){
var inst_19910 = mecca.music.load_sound(named_url);
var state_19921__$1 = state_19921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19921__$1,(2),inst_19910);
} else {
if((state_val_19922 === (2))){
var inst_19912 = (state_19921[(7)]);
var inst_19912__$1 = (state_19921[(2)]);
var state_19921__$1 = (function (){var statearr_19923 = state_19921;
(statearr_19923[(7)] = inst_19912__$1);

return statearr_19923;
})();
if(cljs.core.truth_(inst_19912__$1)){
var statearr_19924_19932 = state_19921__$1;
(statearr_19924_19932[(1)] = (3));

} else {
var statearr_19925_19933 = state_19921__$1;
(statearr_19925_19933[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19922 === (3))){
var inst_19912 = (state_19921[(7)]);
var inst_19914 = mecca.music.decode(inst_19912);
var state_19921__$1 = state_19921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19921__$1,(6),inst_19914);
} else {
if((state_val_19922 === (4))){
var state_19921__$1 = state_19921;
var statearr_19926_19934 = state_19921__$1;
(statearr_19926_19934[(2)] = null);

(statearr_19926_19934[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19922 === (5))){
var inst_19919 = (state_19921[(2)]);
var state_19921__$1 = state_19921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19921__$1,inst_19919);
} else {
if((state_val_19922 === (6))){
var inst_19916 = (state_19921[(2)]);
var state_19921__$1 = state_19921;
var statearr_19927_19935 = state_19921__$1;
(statearr_19927_19935[(2)] = inst_19916);

(statearr_19927_19935[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__16070__auto__))
;
return ((function (switch__15887__auto__,c__16070__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__15888__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__15888__auto____0 = (function (){
var statearr_19928 = [null,null,null,null,null,null,null,null];
(statearr_19928[(0)] = mecca$music$get_and_decode_$_state_machine__15888__auto__);

(statearr_19928[(1)] = (1));

return statearr_19928;
});
var mecca$music$get_and_decode_$_state_machine__15888__auto____1 = (function (state_19921){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19921);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19929){if((e19929 instanceof Object)){
var ex__15891__auto__ = e19929;
var statearr_19930_19936 = state_19921;
(statearr_19930_19936[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19921);

return cljs.core.cst$kw$recur;
} else {
throw e19929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19937 = state_19921;
state_19921 = G__19937;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__15888__auto__ = function(state_19921){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__15888__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__15888__auto____1.call(this,state_19921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__15888__auto____0;
mecca$music$get_and_decode_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__15888__auto____1;
return mecca$music$get_and_decode_$_state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto__))
})();
var state__16072__auto__ = (function (){var statearr_19931 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_19931[(6)] = c__16070__auto__);

return statearr_19931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto__))
);

return c__16070__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__16070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto__){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto__){
return (function (state_19966){
var state_val_19967 = (state_19966[(1)]);
if((state_val_19967 === (1))){
var inst_19938 = cljs.core.PersistentHashMap.EMPTY;
var inst_19939 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_19940 = inst_19938;
var inst_19941 = inst_19939;
var state_19966__$1 = (function (){var statearr_19968 = state_19966;
(statearr_19968[(7)] = inst_19941);

(statearr_19968[(8)] = inst_19940);

return statearr_19968;
})();
var statearr_19969_19981 = state_19966__$1;
(statearr_19969_19981[(2)] = null);

(statearr_19969_19981[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19967 === (2))){
var inst_19941 = (state_19966[(7)]);
var inst_19943 = cljs.core.first(inst_19941);
var inst_19944 = (inst_19943 == null);
var inst_19945 = cljs.core.not(inst_19944);
var state_19966__$1 = state_19966;
if(inst_19945){
var statearr_19970_19982 = state_19966__$1;
(statearr_19970_19982[(1)] = (4));

} else {
var statearr_19971_19983 = state_19966__$1;
(statearr_19971_19983[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19967 === (3))){
var inst_19964 = (state_19966[(2)]);
var state_19966__$1 = state_19966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19966__$1,inst_19964);
} else {
if((state_val_19967 === (4))){
var inst_19947 = (state_19966[(9)]);
var inst_19941 = (state_19966[(7)]);
var inst_19947__$1 = cljs.core.first(inst_19941);
var inst_19948 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_19949 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19947__$1),".mp3"].join('');
var inst_19950 = [inst_19949,inst_19947__$1];
var inst_19951 = cljs.core.PersistentHashMap.fromArrays(inst_19948,inst_19950);
var inst_19952 = mecca.music.get_and_decode(inst_19951);
var state_19966__$1 = (function (){var statearr_19972 = state_19966;
(statearr_19972[(9)] = inst_19947__$1);

return statearr_19972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19966__$1,(7),inst_19952);
} else {
if((state_val_19967 === (5))){
var inst_19940 = (state_19966[(8)]);
var state_19966__$1 = state_19966;
var statearr_19973_19984 = state_19966__$1;
(statearr_19973_19984[(2)] = inst_19940);

(statearr_19973_19984[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19967 === (6))){
var inst_19962 = (state_19966[(2)]);
var state_19966__$1 = state_19966;
var statearr_19974_19985 = state_19966__$1;
(statearr_19974_19985[(2)] = inst_19962);

(statearr_19974_19985[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19967 === (7))){
var inst_19947 = (state_19966[(9)]);
var inst_19941 = (state_19966[(7)]);
var inst_19940 = (state_19966[(8)]);
var inst_19954 = (state_19966[(2)]);
var inst_19955 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19947], 0));
var inst_19956 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19954], 0));
var inst_19957 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_19940,inst_19947,inst_19954);
var inst_19958 = cljs.core.rest(inst_19941);
var inst_19940__$1 = inst_19957;
var inst_19941__$1 = inst_19958;
var state_19966__$1 = (function (){var statearr_19975 = state_19966;
(statearr_19975[(7)] = inst_19941__$1);

(statearr_19975[(8)] = inst_19940__$1);

(statearr_19975[(10)] = inst_19956);

(statearr_19975[(11)] = inst_19955);

return statearr_19975;
})();
var statearr_19976_19986 = state_19966__$1;
(statearr_19976_19986[(2)] = null);

(statearr_19976_19986[(1)] = (2));


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
});})(c__16070__auto__))
;
return ((function (switch__15887__auto__,c__16070__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__15888__auto__ = null;
var mecca$music$load_samples_$_state_machine__15888__auto____0 = (function (){
var statearr_19977 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19977[(0)] = mecca$music$load_samples_$_state_machine__15888__auto__);

(statearr_19977[(1)] = (1));

return statearr_19977;
});
var mecca$music$load_samples_$_state_machine__15888__auto____1 = (function (state_19966){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19966);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19978){if((e19978 instanceof Object)){
var ex__15891__auto__ = e19978;
var statearr_19979_19987 = state_19966;
(statearr_19979_19987[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19966);

return cljs.core.cst$kw$recur;
} else {
throw e19978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__19988 = state_19966;
state_19966 = G__19988;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__15888__auto__ = function(state_19966){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__15888__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__15888__auto____1.call(this,state_19966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__15888__auto____0;
mecca$music$load_samples_$_state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__15888__auto____1;
return mecca$music$load_samples_$_state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto__))
})();
var state__16072__auto__ = (function (){var statearr_19980 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_19980[(6)] = c__16070__auto__);

return statearr_19980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto__))
);

return c__16070__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__16070__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16070__auto__){
return (function (){
var f__16071__auto__ = (function (){var switch__15887__auto__ = ((function (c__16070__auto__){
return (function (state_19995){
var state_val_19996 = (state_19995[(1)]);
if((state_val_19996 === (1))){
var inst_19989 = mecca.music.load_samples();
var state_19995__$1 = state_19995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19995__$1,(2),inst_19989);
} else {
if((state_val_19996 === (2))){
var inst_19991 = (state_19995[(2)]);
var inst_19992 = mecca.music.samples = inst_19991;
var inst_19993 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_19995__$1 = (function (){var statearr_19997 = state_19995;
(statearr_19997[(7)] = inst_19992);

return statearr_19997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19995__$1,inst_19993);
} else {
return null;
}
}
});})(c__16070__auto__))
;
return ((function (switch__15887__auto__,c__16070__auto__){
return (function() {
var mecca$music$state_machine__15888__auto__ = null;
var mecca$music$state_machine__15888__auto____0 = (function (){
var statearr_19998 = [null,null,null,null,null,null,null,null];
(statearr_19998[(0)] = mecca$music$state_machine__15888__auto__);

(statearr_19998[(1)] = (1));

return statearr_19998;
});
var mecca$music$state_machine__15888__auto____1 = (function (state_19995){
while(true){
var ret_value__15889__auto__ = (function (){try{while(true){
var result__15890__auto__ = switch__15887__auto__(state_19995);
if(cljs.core.keyword_identical_QMARK_(result__15890__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15890__auto__;
}
break;
}
}catch (e19999){if((e19999 instanceof Object)){
var ex__15891__auto__ = e19999;
var statearr_20000_20002 = state_19995;
(statearr_20000_20002[(5)] = ex__15891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19995);

return cljs.core.cst$kw$recur;
} else {
throw e19999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15889__auto__,cljs.core.cst$kw$recur)){
var G__20003 = state_19995;
state_19995 = G__20003;
continue;
} else {
return ret_value__15889__auto__;
}
break;
}
});
mecca$music$state_machine__15888__auto__ = function(state_19995){
switch(arguments.length){
case 0:
return mecca$music$state_machine__15888__auto____0.call(this);
case 1:
return mecca$music$state_machine__15888__auto____1.call(this,state_19995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__15888__auto____0;
mecca$music$state_machine__15888__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__15888__auto____1;
return mecca$music$state_machine__15888__auto__;
})()
;})(switch__15887__auto__,c__16070__auto__))
})();
var state__16072__auto__ = (function (){var statearr_20001 = (f__16071__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16071__auto__.cljs$core$IFn$_invoke$arity$0() : f__16071__auto__.call(null));
(statearr_20001[(6)] = c__16070__auto__);

return statearr_20001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16072__auto__);
});})(c__16070__auto__))
);

return c__16070__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__20004 = midi_num;
switch (G__20004) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20004)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

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
var notes = (function (){var G__20006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20006) : re_frame.core.subscribe.call(null,G__20006));
})();
var now = cljs.core.deref(mecca.music.audiocontext).currentTime;
var tempo = (function (){var G__20007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20007) : re_frame.core.subscribe.call(null,G__20007));
})();
var G__20008_20017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_position], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20008_20017) : re_frame.core.dispatch.call(null,G__20008_20017));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (notes,now,tempo){
return (function mecca$music$play_song_BANG__$_iter__20009(s__20010){
return (new cljs.core.LazySeq(null,((function (notes,now,tempo){
return (function (){
var s__20010__$1 = s__20010;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20010__$1);
if(temp__5457__auto__){
var s__20010__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20010__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20010__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20012 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20011 = (0);
while(true){
if((i__20011 < size__4323__auto__)){
var map__20013 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20011);
var map__20013__$1 = ((((!((map__20013 == null)))?(((((map__20013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20013):map__20013);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20013__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20013__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20013__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__20012,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__20018 = (i__20011 + (1));
i__20011 = G__20018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20012),mecca$music$play_song_BANG__$_iter__20009(cljs.core.chunk_rest(s__20010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20012),null);
}
} else {
var map__20015 = cljs.core.first(s__20010__$2);
var map__20015__$1 = ((((!((map__20015 == null)))?(((((map__20015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20015):map__20015);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20015__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20015__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20015__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__20009(cljs.core.rest(s__20010__$2)));
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
