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
var G__14841 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_BANG_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14841) : re_frame.core.dispatch.call(null,G__14841));
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
var seq__14842_14846 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__14843_14847 = null;
var count__14844_14848 = (0);
var i__14845_14849 = (0);
while(true){
if((i__14845_14849 < count__14844_14848)){
var i_14850 = chunk__14843_14847.cljs$core$IIndexed$_nth$arity$2(null,i__14845_14849);
(data[i_14850] = ((Math.random() * 2.0) - 1.0));


var G__14851 = seq__14842_14846;
var G__14852 = chunk__14843_14847;
var G__14853 = count__14844_14848;
var G__14854 = (i__14845_14849 + (1));
seq__14842_14846 = G__14851;
chunk__14843_14847 = G__14852;
count__14844_14848 = G__14853;
i__14845_14849 = G__14854;
continue;
} else {
var temp__5457__auto___14855 = cljs.core.seq(seq__14842_14846);
if(temp__5457__auto___14855){
var seq__14842_14856__$1 = temp__5457__auto___14855;
if(cljs.core.chunked_seq_QMARK_(seq__14842_14856__$1)){
var c__4351__auto___14857 = cljs.core.chunk_first(seq__14842_14856__$1);
var G__14858 = cljs.core.chunk_rest(seq__14842_14856__$1);
var G__14859 = c__4351__auto___14857;
var G__14860 = cljs.core.count(c__4351__auto___14857);
var G__14861 = (0);
seq__14842_14846 = G__14858;
chunk__14843_14847 = G__14859;
count__14844_14848 = G__14860;
i__14845_14849 = G__14861;
continue;
} else {
var i_14862 = cljs.core.first(seq__14842_14856__$1);
(data[i_14862] = ((Math.random() * 2.0) - 1.0));


var G__14863 = cljs.core.next(seq__14842_14856__$1);
var G__14864 = null;
var G__14865 = (0);
var G__14866 = (0);
seq__14842_14846 = G__14863;
chunk__14843_14847 = G__14864;
count__14844_14848 = G__14865;
i__14845_14849 = G__14866;
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
var buffer = (function (){var G__14867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sample_DASH_buffer,instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14867) : re_frame.core.subscribe.call(null,G__14867));
})();
var sample_source = cljs.core.deref(context).createBufferSource();
var playback_rate = (pitch / (2));
sample_source.buffer = cljs.core.deref(buffer);

sample_source.playbackRate.setValueAtTime(playback_rate,now);

sample_source.connect(cljs.core.deref(context).destination);

return sample_source.start();
});
mecca.music.subgraph = (function mecca$music$subgraph(var_args){
var G__14869 = arguments.length;
switch (G__14869) {
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
return mecca.music.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14871 = context.createGain();
mecca.music.plug(G__14871.gain,level,context,at,duration);

return G__14871;
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
var len__4531__auto___14875 = arguments.length;
var i__4532__auto___14876 = (0);
while(true){
if((i__4532__auto___14876 < len__4531__auto___14875)){
args__4534__auto__.push((arguments[i__4532__auto___14876]));

var G__14877 = (i__4532__auto___14876 + (1));
i__4532__auto___14876 = G__14877;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14872_SHARP_){
return mecca.music.run_with(p1__14872_SHARP_,context,at,duration);
}),synths));
});
});

mecca.music.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.music.apply_to_graph.cljs$lang$applyTo = (function (seq14873){
var G__14874 = cljs.core.first(seq14873);
var seq14873__$1 = cljs.core.next(seq14873);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14874,seq14873__$1);
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
return (function (p1__14878_SHARP_){
return psuedo_promise.data = p1__14878_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return mecca.music.source((function (){var node = (function (){var G__14881 = context.createBufferSource();
G__14881.start(at);

G__14881.stop((at + duration));

return G__14881;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5457__auto___14882 = psuedo_promise.data;
if(cljs.core.truth_(temp__5457__auto___14882)){
var data_14883 = temp__5457__auto___14882;
var temp__5455__auto___14884 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5455__auto___14884)){
var buffer_14885 = temp__5455__auto___14884;
set_buffer(buffer_14885);
} else {
context.decodeAudioData(data_14883,set_buffer);
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
var c__13281__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13281__auto__){
return (function (){
var f__13282__auto__ = (function (){var switch__13216__auto__ = ((function (c__13281__auto__){
return (function (state_14897){
var state_val_14898 = (state_14897[(1)]);
if((state_val_14898 === (1))){
var inst_14886 = mecca.music.load_sound(named_url);
var state_14897__$1 = state_14897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14897__$1,(2),inst_14886);
} else {
if((state_val_14898 === (2))){
var inst_14888 = (state_14897[(7)]);
var inst_14888__$1 = (state_14897[(2)]);
var state_14897__$1 = (function (){var statearr_14899 = state_14897;
(statearr_14899[(7)] = inst_14888__$1);

return statearr_14899;
})();
if(cljs.core.truth_(inst_14888__$1)){
var statearr_14900_14908 = state_14897__$1;
(statearr_14900_14908[(1)] = (3));

} else {
var statearr_14901_14909 = state_14897__$1;
(statearr_14901_14909[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (3))){
var inst_14888 = (state_14897[(7)]);
var inst_14890 = mecca.music.decode(inst_14888);
var state_14897__$1 = state_14897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14897__$1,(6),inst_14890);
} else {
if((state_val_14898 === (4))){
var state_14897__$1 = state_14897;
var statearr_14902_14910 = state_14897__$1;
(statearr_14902_14910[(2)] = null);

(statearr_14902_14910[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (5))){
var inst_14895 = (state_14897[(2)]);
var state_14897__$1 = state_14897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14897__$1,inst_14895);
} else {
if((state_val_14898 === (6))){
var inst_14892 = (state_14897[(2)]);
var state_14897__$1 = state_14897;
var statearr_14903_14911 = state_14897__$1;
(statearr_14903_14911[(2)] = inst_14892);

(statearr_14903_14911[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__13281__auto__))
;
return ((function (switch__13216__auto__,c__13281__auto__){
return (function() {
var mecca$music$get_and_decode_$_state_machine__13217__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__13217__auto____0 = (function (){
var statearr_14904 = [null,null,null,null,null,null,null,null];
(statearr_14904[(0)] = mecca$music$get_and_decode_$_state_machine__13217__auto__);

(statearr_14904[(1)] = (1));

return statearr_14904;
});
var mecca$music$get_and_decode_$_state_machine__13217__auto____1 = (function (state_14897){
while(true){
var ret_value__13218__auto__ = (function (){try{while(true){
var result__13219__auto__ = switch__13216__auto__(state_14897);
if(cljs.core.keyword_identical_QMARK_(result__13219__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13219__auto__;
}
break;
}
}catch (e14905){if((e14905 instanceof Object)){
var ex__13220__auto__ = e14905;
var statearr_14906_14912 = state_14897;
(statearr_14906_14912[(5)] = ex__13220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14897);

return cljs.core.cst$kw$recur;
} else {
throw e14905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13218__auto__,cljs.core.cst$kw$recur)){
var G__14913 = state_14897;
state_14897 = G__14913;
continue;
} else {
return ret_value__13218__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__13217__auto__ = function(state_14897){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__13217__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__13217__auto____1.call(this,state_14897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__13217__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__13217__auto____0;
mecca$music$get_and_decode_$_state_machine__13217__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__13217__auto____1;
return mecca$music$get_and_decode_$_state_machine__13217__auto__;
})()
;})(switch__13216__auto__,c__13281__auto__))
})();
var state__13283__auto__ = (function (){var statearr_14907 = (f__13282__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13282__auto__.cljs$core$IFn$_invoke$arity$0() : f__13282__auto__.call(null));
(statearr_14907[(6)] = c__13281__auto__);

return statearr_14907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13283__auto__);
});})(c__13281__auto__))
);

return c__13281__auto__;
});
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__13281__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13281__auto__){
return (function (){
var f__13282__auto__ = (function (){var switch__13216__auto__ = ((function (c__13281__auto__){
return (function (state_14942){
var state_val_14943 = (state_14942[(1)]);
if((state_val_14943 === (1))){
var inst_14914 = cljs.core.PersistentHashMap.EMPTY;
var inst_14915 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(27));
var inst_14916 = inst_14914;
var inst_14917 = inst_14915;
var state_14942__$1 = (function (){var statearr_14944 = state_14942;
(statearr_14944[(7)] = inst_14917);

(statearr_14944[(8)] = inst_14916);

return statearr_14944;
})();
var statearr_14945_14957 = state_14942__$1;
(statearr_14945_14957[(2)] = null);

(statearr_14945_14957[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14943 === (2))){
var inst_14917 = (state_14942[(7)]);
var inst_14919 = cljs.core.first(inst_14917);
var inst_14920 = (inst_14919 == null);
var inst_14921 = cljs.core.not(inst_14920);
var state_14942__$1 = state_14942;
if(inst_14921){
var statearr_14946_14958 = state_14942__$1;
(statearr_14946_14958[(1)] = (4));

} else {
var statearr_14947_14959 = state_14942__$1;
(statearr_14947_14959[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14943 === (3))){
var inst_14940 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14942__$1,inst_14940);
} else {
if((state_val_14943 === (4))){
var inst_14917 = (state_14942[(7)]);
var inst_14923 = (state_14942[(9)]);
var inst_14923__$1 = cljs.core.first(inst_14917);
var inst_14924 = [cljs.core.cst$kw$url,cljs.core.cst$kw$sound];
var inst_14925 = ["/resources/public/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_14923__$1),".mp3"].join('');
var inst_14926 = [inst_14925,inst_14923__$1];
var inst_14927 = cljs.core.PersistentHashMap.fromArrays(inst_14924,inst_14926);
var inst_14928 = mecca.music.get_and_decode(inst_14927);
var state_14942__$1 = (function (){var statearr_14948 = state_14942;
(statearr_14948[(9)] = inst_14923__$1);

return statearr_14948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14942__$1,(7),inst_14928);
} else {
if((state_val_14943 === (5))){
var inst_14916 = (state_14942[(8)]);
var state_14942__$1 = state_14942;
var statearr_14949_14960 = state_14942__$1;
(statearr_14949_14960[(2)] = inst_14916);

(statearr_14949_14960[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14943 === (6))){
var inst_14938 = (state_14942[(2)]);
var state_14942__$1 = state_14942;
var statearr_14950_14961 = state_14942__$1;
(statearr_14950_14961[(2)] = inst_14938);

(statearr_14950_14961[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14943 === (7))){
var inst_14917 = (state_14942[(7)]);
var inst_14923 = (state_14942[(9)]);
var inst_14916 = (state_14942[(8)]);
var inst_14930 = (state_14942[(2)]);
var inst_14931 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14923], 0));
var inst_14932 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14930], 0));
var inst_14933 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_14916,inst_14923,inst_14930);
var inst_14934 = cljs.core.rest(inst_14917);
var inst_14916__$1 = inst_14933;
var inst_14917__$1 = inst_14934;
var state_14942__$1 = (function (){var statearr_14951 = state_14942;
(statearr_14951[(7)] = inst_14917__$1);

(statearr_14951[(10)] = inst_14932);

(statearr_14951[(11)] = inst_14931);

(statearr_14951[(8)] = inst_14916__$1);

return statearr_14951;
})();
var statearr_14952_14962 = state_14942__$1;
(statearr_14952_14962[(2)] = null);

(statearr_14952_14962[(1)] = (2));


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
});})(c__13281__auto__))
;
return ((function (switch__13216__auto__,c__13281__auto__){
return (function() {
var mecca$music$load_samples_$_state_machine__13217__auto__ = null;
var mecca$music$load_samples_$_state_machine__13217__auto____0 = (function (){
var statearr_14953 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14953[(0)] = mecca$music$load_samples_$_state_machine__13217__auto__);

(statearr_14953[(1)] = (1));

return statearr_14953;
});
var mecca$music$load_samples_$_state_machine__13217__auto____1 = (function (state_14942){
while(true){
var ret_value__13218__auto__ = (function (){try{while(true){
var result__13219__auto__ = switch__13216__auto__(state_14942);
if(cljs.core.keyword_identical_QMARK_(result__13219__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13219__auto__;
}
break;
}
}catch (e14954){if((e14954 instanceof Object)){
var ex__13220__auto__ = e14954;
var statearr_14955_14963 = state_14942;
(statearr_14955_14963[(5)] = ex__13220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14942);

return cljs.core.cst$kw$recur;
} else {
throw e14954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13218__auto__,cljs.core.cst$kw$recur)){
var G__14964 = state_14942;
state_14942 = G__14964;
continue;
} else {
return ret_value__13218__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__13217__auto__ = function(state_14942){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__13217__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__13217__auto____1.call(this,state_14942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__13217__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__13217__auto____0;
mecca$music$load_samples_$_state_machine__13217__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__13217__auto____1;
return mecca$music$load_samples_$_state_machine__13217__auto__;
})()
;})(switch__13216__auto__,c__13281__auto__))
})();
var state__13283__auto__ = (function (){var statearr_14956 = (f__13282__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13282__auto__.cljs$core$IFn$_invoke$arity$0() : f__13282__auto__.call(null));
(statearr_14956[(6)] = c__13281__auto__);

return statearr_14956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13283__auto__);
});})(c__13281__auto__))
);

return c__13281__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__13281__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13281__auto__){
return (function (){
var f__13282__auto__ = (function (){var switch__13216__auto__ = ((function (c__13281__auto__){
return (function (state_14971){
var state_val_14972 = (state_14971[(1)]);
if((state_val_14972 === (1))){
var inst_14965 = mecca.music.load_samples();
var state_14971__$1 = state_14971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14971__$1,(2),inst_14965);
} else {
if((state_val_14972 === (2))){
var inst_14967 = (state_14971[(2)]);
var inst_14968 = mecca.music.samples = inst_14967;
var inst_14969 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_14971__$1 = (function (){var statearr_14973 = state_14971;
(statearr_14973[(7)] = inst_14968);

return statearr_14973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14971__$1,inst_14969);
} else {
return null;
}
}
});})(c__13281__auto__))
;
return ((function (switch__13216__auto__,c__13281__auto__){
return (function() {
var mecca$music$state_machine__13217__auto__ = null;
var mecca$music$state_machine__13217__auto____0 = (function (){
var statearr_14974 = [null,null,null,null,null,null,null,null];
(statearr_14974[(0)] = mecca$music$state_machine__13217__auto__);

(statearr_14974[(1)] = (1));

return statearr_14974;
});
var mecca$music$state_machine__13217__auto____1 = (function (state_14971){
while(true){
var ret_value__13218__auto__ = (function (){try{while(true){
var result__13219__auto__ = switch__13216__auto__(state_14971);
if(cljs.core.keyword_identical_QMARK_(result__13219__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13219__auto__;
}
break;
}
}catch (e14975){if((e14975 instanceof Object)){
var ex__13220__auto__ = e14975;
var statearr_14976_14978 = state_14971;
(statearr_14976_14978[(5)] = ex__13220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14971);

return cljs.core.cst$kw$recur;
} else {
throw e14975;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13218__auto__,cljs.core.cst$kw$recur)){
var G__14979 = state_14971;
state_14971 = G__14979;
continue;
} else {
return ret_value__13218__auto__;
}
break;
}
});
mecca$music$state_machine__13217__auto__ = function(state_14971){
switch(arguments.length){
case 0:
return mecca$music$state_machine__13217__auto____0.call(this);
case 1:
return mecca$music$state_machine__13217__auto____1.call(this,state_14971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__13217__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__13217__auto____0;
mecca$music$state_machine__13217__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__13217__auto____1;
return mecca$music$state_machine__13217__auto__;
})()
;})(switch__13216__auto__,c__13281__auto__))
})();
var state__13283__auto__ = (function (){var statearr_14977 = (f__13282__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13282__auto__.cljs$core$IFn$_invoke$arity$0() : f__13282__auto__.call(null));
(statearr_14977[(6)] = c__13281__auto__);

return statearr_14977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13283__auto__);
});})(c__13281__auto__))
);

return c__13281__auto__;
})();
}
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
var G__14980 = midi_num;
switch (G__14980) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14980)].join('')));

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
