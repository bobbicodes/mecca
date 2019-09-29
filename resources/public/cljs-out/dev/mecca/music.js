// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('ajax.protocols');
goog.require('mecca.audio.scale');
goog.require('mecca.audio.synthesis');
goog.require('mecca.audio.melody');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
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
/**
 * Return the current time as recorded by the audio context.
 */
mecca.music.current_time = (function mecca$music$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.current_time', mecca.music.current_time);
/**
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
mecca.music.run_with = (function mecca$music$run_with(synth,context,at,duration){
return (synth.cljs$core$IFn$_invoke$arity$3 ? synth.cljs$core$IFn$_invoke$arity$3(context,at,duration) : synth.call(null,context,at,duration));
});
goog.exportSymbol('mecca.music.run_with', mecca.music.run_with);
mecca.music.plug = (function mecca$music$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(mecca.music.run_with(input,context,at,duration)).connect(param);
}
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__19599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19599) : re_frame.core.dispatch.call(null,G__19599));
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(200));
}
mecca.music.play_noise_BANG_ = (function mecca$music$play_noise_BANG_(start,duration){
var context = mecca.music.audiocontext;
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = cljs.core.deref(context).createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var noise = cljs.core.deref(context).createBufferSource();
var now = mecca.music.current_time(cljs.core.deref(context));
var seq__19600_19604 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__19601_19605 = null;
var count__19602_19606 = (0);
var i__19603_19607 = (0);
while(true){
if((i__19603_19607 < count__19602_19606)){
var i_19608 = chunk__19601_19605.cljs$core$IIndexed$_nth$arity$2(null,i__19603_19607);
(data[i_19608] = ((Math.random() * 2.0) - 1.0));


var G__19609 = seq__19600_19604;
var G__19610 = chunk__19601_19605;
var G__19611 = count__19602_19606;
var G__19612 = (i__19603_19607 + (1));
seq__19600_19604 = G__19609;
chunk__19601_19605 = G__19610;
count__19602_19606 = G__19611;
i__19603_19607 = G__19612;
continue;
} else {
var temp__5457__auto___19613 = cljs.core.seq(seq__19600_19604);
if(temp__5457__auto___19613){
var seq__19600_19614__$1 = temp__5457__auto___19613;
if(cljs.core.chunked_seq_QMARK_(seq__19600_19614__$1)){
var c__4351__auto___19615 = cljs.core.chunk_first(seq__19600_19614__$1);
var G__19616 = cljs.core.chunk_rest(seq__19600_19614__$1);
var G__19617 = c__4351__auto___19615;
var G__19618 = cljs.core.count(c__4351__auto___19615);
var G__19619 = (0);
seq__19600_19604 = G__19616;
chunk__19601_19605 = G__19617;
count__19602_19606 = G__19618;
i__19603_19607 = G__19619;
continue;
} else {
var i_19620 = cljs.core.first(seq__19600_19614__$1);
(data[i_19620] = ((Math.random() * 2.0) - 1.0));


var G__19621 = cljs.core.next(seq__19600_19614__$1);
var G__19622 = null;
var G__19623 = (0);
var G__19624 = (0);
seq__19600_19604 = G__19621;
chunk__19601_19605 = G__19622;
count__19602_19606 = G__19623;
i__19603_19607 = G__19624;
continue;
}
} else {
}
}
break;
}

noise.buffer = buffer;

noise.connect(context.destination);

noise.start((now + start));

return noise.stop(((now + start) + duration));
});
mecca.music.play_sample_BANG_ = (function mecca$music$play_sample_BANG_(instrument,pitch){
var context = mecca.music.audiocontext;
var now = mecca.music.current_time(cljs.core.deref(context));
var buffer = (function (){var G__19625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sample_DASH_buffer,instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19625) : re_frame.core.subscribe.call(null,G__19625));
})();
var sample_source = cljs.core.deref(context).createBufferSource();
var playback_rate = (pitch / (2));
sample_source.buffer = cljs.core.deref(buffer);

sample_source.playbackRate.setValueAtTime(playback_rate,now);

sample_source.connect(cljs.core.deref(context).destination);

return sample_source.start();
});
mecca.music.subgraph = (function mecca$music$subgraph(var_args){
var G__19627 = arguments.length;
switch (G__19627) {
case 2:
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,input,cljs.core.cst$kw$output,output], null);
});

mecca.music.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2(singleton,singleton);
});

mecca.music.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * Multiply the signal by level.
 */
mecca.music.gain = (function mecca$music$gain(level){
return (function (context,at,duration){
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__19629 = context.createGain();
mecca.music.plug(G__19629.gain,level,context,at,duration);

return G__19629;
})());
});
});
goog.exportSymbol('mecca.music.gain', mecca.music.gain);
/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
mecca.music.source = (function mecca$music$source(node){
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2(null,node);
});
/**
 * A graph of synthesis nodes without an output,
 *   so it can't connect to another graph.
 */
mecca.music.sink = (function mecca$music$sink(node){
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2(node,null);
});
/**
 * The destination of the audio context i.e. the speakers.
 */
mecca.music.destination = (function mecca$music$destination(context,at,duration){
return mecca.music.sink(context.destination);
});
goog.exportSymbol('mecca.music.destination', mecca.music.destination);
/**
 * Like apply, but for the node graphs synths produce.
 */
mecca.music.apply_to_graph = (function mecca$music$apply_to_graph(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19633 = arguments.length;
var i__4532__auto___19634 = (0);
while(true){
if((i__4532__auto___19634 < len__4531__auto___19633)){
args__4534__auto__.push((arguments[i__4532__auto___19634]));

var G__19635 = (i__4532__auto___19634 + (1));
i__4532__auto___19634 = G__19635;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mecca.music.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mecca.music.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19630_SHARP_){
return mecca.music.run_with(p1__19630_SHARP_,context,at,duration);
}),synths));
});
});

mecca.music.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.music.apply_to_graph.cljs$lang$applyTo = (function (seq19631){
var G__19632 = cljs.core.first(seq19631);
var seq19631__$1 = cljs.core.next(seq19631);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19632,seq19631__$1);
});

mecca.music.join_in_series = (function mecca$music$join_in_series(graph1,graph2){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph1).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph2));

return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph1),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph2));
});
/**
 * Use the output of one synth as the input to another.
 */
mecca.music.connect = (function mecca$music$connect(upstream_synth,downstream_synth){
return mecca.music.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic(mecca.music.join_in_series,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upstream_synth,downstream_synth], 0));
});
goog.exportSymbol('mecca.music.connect', mecca.music.connect);
mecca.music.get_mp3 = (function mecca$music$get_mp3(uri,callback){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$response_DASH_format,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$arraybuffer,cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"audio",cljs.core.cst$kw$content_DASH_type,"audio/mpeg"], null),cljs.core.cst$kw$handler,callback], null)], 0));
});
/**
 * Play a sample addressed via a URI. Until fetching and decoding is complete, it will play silence.
 */
mecca.music.raw_sample = (function mecca$music$raw_sample(uri){
var psuedo_promise = {};
mecca.music.get_mp3(uri,((function (psuedo_promise){
return (function (p1__19636_SHARP_){
return psuedo_promise.data = p1__19636_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return mecca.music.source((function (){var node = (function (){var G__19639 = context.createBufferSource();
G__19639.start(at);

G__19639.stop((at + duration));

return G__19639;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5457__auto___19640 = psuedo_promise.data;
if(cljs.core.truth_(temp__5457__auto___19640)){
var data_19641 = temp__5457__auto___19640;
var temp__5455__auto___19642 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5455__auto___19642)){
var buffer_19643 = temp__5455__auto___19642;
set_buffer(buffer_19643);
} else {
context.decodeAudioData(data_19641,set_buffer);
}
} else {
}

return node;
})());
});
;})(psuedo_promise))
});
mecca.music.sample = cljs.core.memoize(mecca.music.raw_sample);
goog.exportSymbol('mecca.music.sample', mecca.music.sample);
mecca.music.play_mp3_BANG_ = (function mecca$music$play_mp3_BANG_(){
var context = mecca.music.audiocontext;
var now = mecca.music.current_time(cljs.core.deref(context));
var sample_source = cljs.core.deref(context).createBufferSource();
var set_buffer = sample_source.buffer = null;
var pitched = sample_source.playbackRate.setValueAtTime(0.7,now);
var mp3 = mecca.music.connect((mecca.music.sample.cljs$core$IFn$_invoke$arity$1 ? mecca.music.sample.cljs$core$IFn$_invoke$arity$1("/resources/public/audio/1.mp3") : mecca.music.sample.call(null,"/resources/public/audio/1.mp3")),mecca.music.destination);
return mecca.music.run_with(mp3,cljs.core.deref(context),now,0.5);
});
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
var c__15729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto__){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto__){
return (function (state_19655){
var state_val_19656 = (state_19655[(1)]);
if((state_val_19656 === (1))){
var inst_19644 = mecca.music.load_sound(named_url);
var state_19655__$1 = state_19655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19655__$1,(2),inst_19644);
} else {
if((state_val_19656 === (2))){
var inst_19646 = (state_19655[(7)]);
var inst_19646__$1 = (state_19655[(2)]);
var state_19655__$1 = (function (){var statearr_19657 = state_19655;
(statearr_19657[(7)] = inst_19646__$1);

return statearr_19657;
})();
if(cljs.core.truth_(inst_19646__$1)){
var statearr_19658_19666 = state_19655__$1;
(statearr_19658_19666[(1)] = (3));

} else {
var statearr_19659_19667 = state_19655__$1;
(statearr_19659_19667[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19656 === (3))){
var inst_19646 = (state_19655[(7)]);
var inst_19648 = mecca.music.decode(inst_19646);
var state_19655__$1 = state_19655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19655__$1,(6),inst_19648);
} else {
if((state_val_19656 === (4))){
var state_19655__$1 = state_19655;
var statearr_19660_19668 = state_19655__$1;
(statearr_19660_19668[(2)] = null);

(statearr_19660_19668[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19656 === (5))){
var inst_19653 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19655__$1,inst_19653);
} else {
if((state_val_19656 === (6))){
var inst_19650 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
var statearr_19661_19669 = state_19655__$1;
(statearr_19661_19669[(2)] = inst_19650);

(statearr_19661_19669[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__15729__auto__))
;
return ((function (switch__15546__auto__,c__15729__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__15547__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__15547__auto____0 = (function (){
var statearr_19662 = [null,null,null,null,null,null,null,null];
(statearr_19662[(0)] = mecca$music$get_and_decode_$_state_machine__15547__auto__);

(statearr_19662[(1)] = (1));

return statearr_19662;
});
var mecca$music$get_and_decode_$_state_machine__15547__auto____1 = (function (state_19655){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_19655);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e19663){if((e19663 instanceof Object)){
var ex__15550__auto__ = e19663;
var statearr_19664_19670 = state_19655;
(statearr_19664_19670[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19655);

return cljs.core.cst$kw$recur;
} else {
throw e19663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__19671 = state_19655;
state_19655 = G__19671;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__15547__auto__ = function(state_19655){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__15547__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__15547__auto____1.call(this,state_19655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__15547__auto____0;
mecca$music$get_and_decode_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__15547__auto____1;
return mecca$music$get_and_decode_$_state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto__))
})();
var state__15731__auto__ = (function (){var statearr_19665 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_19665[(6)] = c__15729__auto__);

return statearr_19665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto__))
);

return c__15729__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__15729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto__){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto__){
return (function (state_19700){
var state_val_19701 = (state_19700[(1)]);
if((state_val_19701 === (1))){
var inst_19672 = cljs.core.PersistentHashMap.EMPTY;
var inst_19673 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_19674 = inst_19672;
var inst_19675 = inst_19673;
var state_19700__$1 = (function (){var statearr_19702 = state_19700;
(statearr_19702[(7)] = inst_19675);

(statearr_19702[(8)] = inst_19674);

return statearr_19702;
})();
var statearr_19703_19715 = state_19700__$1;
(statearr_19703_19715[(2)] = null);

(statearr_19703_19715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19701 === (2))){
var inst_19675 = (state_19700[(7)]);
var inst_19677 = cljs.core.first(inst_19675);
var inst_19678 = (inst_19677 == null);
var inst_19679 = cljs.core.not(inst_19678);
var state_19700__$1 = state_19700;
if(inst_19679){
var statearr_19704_19716 = state_19700__$1;
(statearr_19704_19716[(1)] = (4));

} else {
var statearr_19705_19717 = state_19700__$1;
(statearr_19705_19717[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19701 === (3))){
var inst_19698 = (state_19700[(2)]);
var state_19700__$1 = state_19700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19700__$1,inst_19698);
} else {
if((state_val_19701 === (4))){
var inst_19675 = (state_19700[(7)]);
var inst_19681 = (state_19700[(9)]);
var inst_19681__$1 = cljs.core.first(inst_19675);
var inst_19682 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_19683 = ["/mecca/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19681__$1),".mp3"].join('');
var inst_19684 = [inst_19683,inst_19681__$1];
var inst_19685 = cljs.core.PersistentHashMap.fromArrays(inst_19682,inst_19684);
var inst_19686 = mecca.music.get_and_decode(inst_19685);
var state_19700__$1 = (function (){var statearr_19706 = state_19700;
(statearr_19706[(9)] = inst_19681__$1);

return statearr_19706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19700__$1,(7),inst_19686);
} else {
if((state_val_19701 === (5))){
var inst_19674 = (state_19700[(8)]);
var state_19700__$1 = state_19700;
var statearr_19707_19718 = state_19700__$1;
(statearr_19707_19718[(2)] = inst_19674);

(statearr_19707_19718[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19701 === (6))){
var inst_19696 = (state_19700[(2)]);
var state_19700__$1 = state_19700;
var statearr_19708_19719 = state_19700__$1;
(statearr_19708_19719[(2)] = inst_19696);

(statearr_19708_19719[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19701 === (7))){
var inst_19675 = (state_19700[(7)]);
var inst_19681 = (state_19700[(9)]);
var inst_19674 = (state_19700[(8)]);
var inst_19688 = (state_19700[(2)]);
var inst_19689 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19681], 0));
var inst_19690 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_19688], 0));
var inst_19691 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_19674,inst_19681,inst_19688);
var inst_19692 = cljs.core.rest(inst_19675);
var inst_19674__$1 = inst_19691;
var inst_19675__$1 = inst_19692;
var state_19700__$1 = (function (){var statearr_19709 = state_19700;
(statearr_19709[(7)] = inst_19675__$1);

(statearr_19709[(10)] = inst_19689);

(statearr_19709[(11)] = inst_19690);

(statearr_19709[(8)] = inst_19674__$1);

return statearr_19709;
})();
var statearr_19710_19720 = state_19700__$1;
(statearr_19710_19720[(2)] = null);

(statearr_19710_19720[(1)] = (2));


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
});})(c__15729__auto__))
;
return ((function (switch__15546__auto__,c__15729__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__15547__auto__ = null;
var mecca$music$load_samples_$_state_machine__15547__auto____0 = (function (){
var statearr_19711 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19711[(0)] = mecca$music$load_samples_$_state_machine__15547__auto__);

(statearr_19711[(1)] = (1));

return statearr_19711;
});
var mecca$music$load_samples_$_state_machine__15547__auto____1 = (function (state_19700){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_19700);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e19712){if((e19712 instanceof Object)){
var ex__15550__auto__ = e19712;
var statearr_19713_19721 = state_19700;
(statearr_19713_19721[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19700);

return cljs.core.cst$kw$recur;
} else {
throw e19712;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__19722 = state_19700;
state_19700 = G__19722;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__15547__auto__ = function(state_19700){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__15547__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__15547__auto____1.call(this,state_19700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__15547__auto____0;
mecca$music$load_samples_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__15547__auto____1;
return mecca$music$load_samples_$_state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto__))
})();
var state__15731__auto__ = (function (){var statearr_19714 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_19714[(6)] = c__15729__auto__);

return statearr_19714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto__))
);

return c__15729__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__15729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto__){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto__){
return (function (state_19729){
var state_val_19730 = (state_19729[(1)]);
if((state_val_19730 === (1))){
var inst_19723 = mecca.music.load_samples();
var state_19729__$1 = state_19729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19729__$1,(2),inst_19723);
} else {
if((state_val_19730 === (2))){
var inst_19725 = (state_19729[(2)]);
var inst_19726 = mecca.music.samples = inst_19725;
var inst_19727 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_19729__$1 = (function (){var statearr_19731 = state_19729;
(statearr_19731[(7)] = inst_19726);

return statearr_19731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19729__$1,inst_19727);
} else {
return null;
}
}
});})(c__15729__auto__))
;
return ((function (switch__15546__auto__,c__15729__auto__){
return (function() {
var mecca$music$state_machine__15547__auto__ = null;
var mecca$music$state_machine__15547__auto____0 = (function (){
var statearr_19732 = [null,null,null,null,null,null,null,null];
(statearr_19732[(0)] = mecca$music$state_machine__15547__auto__);

(statearr_19732[(1)] = (1));

return statearr_19732;
});
var mecca$music$state_machine__15547__auto____1 = (function (state_19729){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_19729);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e19733){if((e19733 instanceof Object)){
var ex__15550__auto__ = e19733;
var statearr_19734_19736 = state_19729;
(statearr_19734_19736[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19729);

return cljs.core.cst$kw$recur;
} else {
throw e19733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__19737 = state_19729;
state_19729 = G__19737;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
mecca$music$state_machine__15547__auto__ = function(state_19729){
switch(arguments.length){
case 0:
return mecca$music$state_machine__15547__auto____0.call(this);
case 1:
return mecca$music$state_machine__15547__auto____1.call(this,state_19729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__15547__auto____0;
mecca$music$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__15547__auto____1;
return mecca$music$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto__))
})();
var state__15731__auto__ = (function (){var statearr_19735 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_19735[(6)] = c__15729__auto__);

return statearr_19735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto__))
);

return c__15729__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__19738 = midi_num;
switch (G__19738) {
case (49):
return 0.25;

break;
case (50):
return 0.28;

break;
case (51):
return 0.31;

break;
case (52):
return 0.35;

break;
case (53):
return 0.375;

break;
case (54):
return 0.41;

break;
case (55):
return 0.46;

break;
case (56):
return 0.5;

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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19738)].join('')));

}
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = mecca.music.audiocontext;
var audio_buffer = cljs.core.cst$kw$decoded_DASH_buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.samples,instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
sample_source.buffer = audio_buffer;

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(((77) - pitch)),cljs.core.deref(context).currentTime);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
