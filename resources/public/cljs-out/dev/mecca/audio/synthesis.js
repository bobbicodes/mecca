// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.audio.synthesis');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Return the current time as recorded by the audio context.
 */
mecca.audio.synthesis.current_time = (function mecca$audio$synthesis$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.audio.synthesis.current_time', mecca.audio.synthesis.current_time);
mecca.audio.synthesis.subgraph = (function mecca$audio$synthesis$subgraph(var_args){
var G__13829 = arguments.length;
switch (G__13829) {
case 2:
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,input,cljs.core.cst$kw$output,output], null);
});

mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(singleton,singleton);
});

mecca.audio.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
mecca.audio.synthesis.source = (function mecca$audio$synthesis$source(node){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(null,node);
});
/**
 * A graph of synthesis nodes without an output,
 *   so it can't connect to another graph.
 */
mecca.audio.synthesis.sink = (function mecca$audio$synthesis$sink(node){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
mecca.audio.synthesis.run_with = (function mecca$audio$synthesis$run_with(synth,context,at,duration){
return (synth.cljs$core$IFn$_invoke$arity$3 ? synth.cljs$core$IFn$_invoke$arity$3(context,at,duration) : synth.call(null,context,at,duration));
});
goog.exportSymbol('mecca.audio.synthesis.run_with', mecca.audio.synthesis.run_with);
/**
 * The destination of the audio context i.e. the speakers.
 */
mecca.audio.synthesis.destination = (function mecca$audio$synthesis$destination(context,at,duration){
return mecca.audio.synthesis.sink(context.destination);
});
goog.exportSymbol('mecca.audio.synthesis.destination', mecca.audio.synthesis.destination);
mecca.audio.synthesis.plug = (function mecca$audio$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(mecca.audio.synthesis.run_with(input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
mecca.audio.synthesis.gain = (function mecca$audio$synthesis$gain(level){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13831 = context.createGain();
mecca.audio.synthesis.plug(G__13831.gain,level,context,at,duration);

return G__13831;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.gain', mecca.audio.synthesis.gain);
/**
 * Pass the signal through unaltered.
 */
mecca.audio.synthesis.pass_through = mecca.audio.synthesis.gain(1.0);
goog.exportSymbol('mecca.audio.synthesis.pass_through', mecca.audio.synthesis.pass_through);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
mecca.audio.synthesis.envelope = (function mecca$audio$synthesis$envelope(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13839 = arguments.length;
var i__4532__auto___13840 = (0);
while(true){
if((i__4532__auto___13840 < len__4531__auto___13839)){
args__4534__auto__.push((arguments[i__4532__auto___13840]));

var G__13841 = (i__4532__auto___13840 + (1));
i__4532__auto___13840 = G__13841;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.audio.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mecca.audio.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_13842 = at;
var coordinates_13843 = corners;
while(true){
var temp__5457__auto___13844 = coordinates_13843;
if(cljs.core.truth_(temp__5457__auto___13844)){
var vec__13833_13845 = temp__5457__auto___13844;
var seq__13834_13846 = cljs.core.seq(vec__13833_13845);
var first__13835_13847 = cljs.core.first(seq__13834_13846);
var seq__13834_13848__$1 = cljs.core.next(seq__13834_13846);
var vec__13836_13849 = first__13835_13847;
var dx_13850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13836_13849,(0),null);
var y_13851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13836_13849,(1),null);
var remaining_13852 = seq__13834_13848__$1;
audio_node.gain.linearRampToValueAtTime(y_13851,(x_13842 + dx_13850));

var G__13853 = (dx_13850 + x_13842);
var G__13854 = remaining_13852;
x_13842 = G__13853;
coordinates_13843 = G__13854;
continue;
} else {
}
break;
}

return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1(audio_node);
});
});

mecca.audio.synthesis.envelope.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.audio.synthesis.envelope.cljs$lang$applyTo = (function (seq13832){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13832));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
mecca.audio.synthesis.adshr = (function mecca$audio$synthesis$adshr(attack,decay,sustain,hold,release){
return mecca.audio.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null)], 0));
});
/**
 * A four-stage envelope.
 */
mecca.audio.synthesis.adsr = (function mecca$audio$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - release);
var hold = (function (){var x__4037__auto__ = 0.0;
var y__4038__auto__ = remainder;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var node = mecca.audio.synthesis.adshr(attack,decay,sustain,hold,release);
return mecca.audio.synthesis.run_with(node,context,at,duration);
});
});
goog.exportSymbol('mecca.audio.synthesis.adsr', mecca.audio.synthesis.adsr);
/**
 * A simple envelope.
 */
mecca.audio.synthesis.percussive = (function mecca$audio$synthesis$percussive(attack,decay){
return mecca.audio.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null)], 0));
});
goog.exportSymbol('mecca.audio.synthesis.percussive', mecca.audio.synthesis.percussive);
/**
 * Like apply, but for the node graphs synths produce.
 */
mecca.audio.synthesis.apply_to_graph = (function mecca$audio$synthesis$apply_to_graph(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13858 = arguments.length;
var i__4532__auto___13859 = (0);
while(true){
if((i__4532__auto___13859 < len__4531__auto___13858)){
args__4534__auto__.push((arguments[i__4532__auto___13859]));

var G__13860 = (i__4532__auto___13859 + (1));
i__4532__auto___13859 = G__13860;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mecca.audio.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mecca.audio.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13855_SHARP_){
return mecca.audio.synthesis.run_with(p1__13855_SHARP_,context,at,duration);
}),synths));
});
});

mecca.audio.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq13856){
var G__13857 = cljs.core.first(seq13856);
var seq13856__$1 = cljs.core.next(seq13856);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13857,seq13856__$1);
});

mecca.audio.synthesis.join_in_series = (function mecca$audio$synthesis$join_in_series(graph1,graph2){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph1).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph2));

return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph1),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph2));
});
/**
 * Use the output of one synth as the input to another.
 */
mecca.audio.synthesis.connect = (function mecca$audio$synthesis$connect(upstream_synth,downstream_synth){
return mecca.audio.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic(mecca.audio.synthesis.join_in_series,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upstream_synth,downstream_synth], 0));
});
goog.exportSymbol('mecca.audio.synthesis.connect', mecca.audio.synthesis.connect);
/**
 * Connect synths in series.
 */
mecca.audio.synthesis.connect__GT_ = (function mecca$audio$synthesis$connect__GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13862 = arguments.length;
var i__4532__auto___13863 = (0);
while(true){
if((i__4532__auto___13863 < len__4531__auto___13862)){
args__4534__auto__.push((arguments[i__4532__auto___13863]));

var G__13864 = (i__4532__auto___13863 + (1));
i__4532__auto___13863 = G__13864;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.audio.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mecca.audio.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.connect,nodes);
});

mecca.audio.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.audio.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq13861){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13861));
});

mecca.audio.synthesis.join_in_parallel = (function mecca$audio$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13872 = arguments.length;
var i__4532__auto___13873 = (0);
while(true){
if((i__4532__auto___13873 < len__4531__auto___13872)){
args__4534__auto__.push((arguments[i__4532__auto___13873]));

var G__13874 = (i__4532__auto___13873 + (1));
i__4532__auto___13873 = G__13874;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__13868_13875 = cljs.core.seq(graphs);
var chunk__13869_13876 = null;
var count__13870_13877 = (0);
var i__13871_13878 = (0);
while(true){
if((i__13871_13878 < count__13870_13877)){
var graph_13879 = chunk__13869_13876.cljs$core$IIndexed$_nth$arity$2(null,i__13871_13878);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_13879).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13879))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13879));
} else {
}


var G__13880 = seq__13868_13875;
var G__13881 = chunk__13869_13876;
var G__13882 = count__13870_13877;
var G__13883 = (i__13871_13878 + (1));
seq__13868_13875 = G__13880;
chunk__13869_13876 = G__13881;
count__13870_13877 = G__13882;
i__13871_13878 = G__13883;
continue;
} else {
var temp__5457__auto___13884 = cljs.core.seq(seq__13868_13875);
if(temp__5457__auto___13884){
var seq__13868_13885__$1 = temp__5457__auto___13884;
if(cljs.core.chunked_seq_QMARK_(seq__13868_13885__$1)){
var c__4351__auto___13886 = cljs.core.chunk_first(seq__13868_13885__$1);
var G__13887 = cljs.core.chunk_rest(seq__13868_13885__$1);
var G__13888 = c__4351__auto___13886;
var G__13889 = cljs.core.count(c__4351__auto___13886);
var G__13890 = (0);
seq__13868_13875 = G__13887;
chunk__13869_13876 = G__13888;
count__13870_13877 = G__13889;
i__13871_13878 = G__13890;
continue;
} else {
var graph_13891 = cljs.core.first(seq__13868_13885__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_13891).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13891))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13891));
} else {
}


var G__13892 = cljs.core.next(seq__13868_13885__$1);
var G__13893 = null;
var G__13894 = (0);
var G__13895 = (0);
seq__13868_13875 = G__13892;
chunk__13869_13876 = G__13893;
count__13870_13877 = G__13894;
i__13871_13878 = G__13895;
continue;
}
} else {
}
}
break;
}

return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(upstream),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(downstream));
});

mecca.audio.synthesis.join_in_parallel.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mecca.audio.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq13865){
var G__13866 = cljs.core.first(seq13865);
var seq13865__$1 = cljs.core.next(seq13865);
var G__13867 = cljs.core.first(seq13865__$1);
var seq13865__$2 = cljs.core.next(seq13865__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13866,G__13867,seq13865__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.audio.synthesis.add = (function mecca$audio$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13897 = arguments.length;
var i__4532__auto___13898 = (0);
while(true){
if((i__4532__auto___13898 < len__4531__auto___13897)){
args__4534__auto__.push((arguments[i__4532__auto___13898]));

var G__13899 = (i__4532__auto___13898 + (1));
i__4532__auto___13898 = G__13899;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.audio.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});
goog.exportSymbol('mecca.audio.synthesis.add', mecca.audio.synthesis.add);

mecca.audio.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(mecca.audio.synthesis.apply_to_graph,mecca.audio.synthesis.join_in_parallel,mecca.audio.synthesis.pass_through,mecca.audio.synthesis.pass_through,synths);
});

mecca.audio.synthesis.add.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.audio.synthesis.add.cljs$lang$applyTo = (function (seq13896){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13896));
});

mecca.audio.synthesis.raw_buffer = (function mecca$audio$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__13900_13904 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__13901_13905 = null;
var count__13902_13906 = (0);
var i__13903_13907 = (0);
while(true){
if((i__13903_13907 < count__13902_13906)){
var i_13908 = chunk__13901_13905.cljs$core$IIndexed$_nth$arity$2(null,i__13903_13907);
(data[i_13908] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_13908) : generate_bit_BANG_.call(null,i_13908)));


var G__13909 = seq__13900_13904;
var G__13910 = chunk__13901_13905;
var G__13911 = count__13902_13906;
var G__13912 = (i__13903_13907 + (1));
seq__13900_13904 = G__13909;
chunk__13901_13905 = G__13910;
count__13902_13906 = G__13911;
i__13903_13907 = G__13912;
continue;
} else {
var temp__5457__auto___13913 = cljs.core.seq(seq__13900_13904);
if(temp__5457__auto___13913){
var seq__13900_13914__$1 = temp__5457__auto___13913;
if(cljs.core.chunked_seq_QMARK_(seq__13900_13914__$1)){
var c__4351__auto___13915 = cljs.core.chunk_first(seq__13900_13914__$1);
var G__13916 = cljs.core.chunk_rest(seq__13900_13914__$1);
var G__13917 = c__4351__auto___13915;
var G__13918 = cljs.core.count(c__4351__auto___13915);
var G__13919 = (0);
seq__13900_13904 = G__13916;
chunk__13901_13905 = G__13917;
count__13902_13906 = G__13918;
i__13903_13907 = G__13919;
continue;
} else {
var i_13920 = cljs.core.first(seq__13900_13914__$1);
(data[i_13920] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_13920) : generate_bit_BANG_.call(null,i_13920)));


var G__13921 = cljs.core.next(seq__13900_13914__$1);
var G__13922 = null;
var G__13923 = (0);
var G__13924 = (0);
seq__13900_13904 = G__13921;
chunk__13901_13905 = G__13922;
count__13902_13906 = G__13923;
i__13903_13907 = G__13924;
continue;
}
} else {
}
}
break;
}

return buffer;
});
mecca.audio.synthesis.buffer = cljs.core.memoize(mecca.audio.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
mecca.audio.synthesis.noise = (function mecca$audio$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.source((function (){var G__13925 = context.createBufferSource();
G__13925.buffer = (function (){var G__13926 = generate_bit_BANG_;
var G__13927 = context;
var G__13928 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__13926,G__13927,G__13928) : mecca.audio.synthesis.buffer.call(null,G__13926,G__13927,G__13928));
})();

G__13925.start(at);

return G__13925;
})());
});
});
/**
 * Random noise.
 */
mecca.audio.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return mecca.audio.synthesis.noise(white);
})();
goog.exportSymbol('mecca.audio.synthesis.white_noise', mecca.audio.synthesis.white_noise);
/**
 * Make a constant value by creating noise with a fixed value.
 */
mecca.audio.synthesis.constant = (function mecca$audio$synthesis$constant(x){
return mecca.audio.synthesis.noise(cljs.core.constantly(x));
});
goog.exportSymbol('mecca.audio.synthesis.constant', mecca.audio.synthesis.constant);
/**
 * A periodic wave.
 */
mecca.audio.synthesis.oscillator = (function mecca$audio$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return mecca.audio.synthesis.source((function (){var G__13929 = context.createOscillator();
G__13929.frequency.value = (0);

mecca.audio.synthesis.plug(G__13929.frequency,freq,context,at,duration);

G__13929.type = type;

G__13929.start(at);

G__13929.stop(((at + duration) + 1.0));

return G__13929;
})());
});
});
mecca.audio.synthesis.sine = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.oscillator,"sine");
goog.exportSymbol('mecca.audio.synthesis.sine', mecca.audio.synthesis.sine);
mecca.audio.synthesis.sawtooth = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.oscillator,"sawtooth");
goog.exportSymbol('mecca.audio.synthesis.sawtooth', mecca.audio.synthesis.sawtooth);
mecca.audio.synthesis.square = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.oscillator,"square");
goog.exportSymbol('mecca.audio.synthesis.square', mecca.audio.synthesis.square);
mecca.audio.synthesis.triangle = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.oscillator,"triangle");
goog.exportSymbol('mecca.audio.synthesis.triangle', mecca.audio.synthesis.triangle);
/**
 * Attenuate frequencies beyond the cutoff, and intensify
 *   the cutoff frequency based on the value of q.
 */
mecca.audio.synthesis.biquad_filter = (function mecca$audio$synthesis$biquad_filter(var_args){
var G__13931 = arguments.length;
switch (G__13931) {
case 2:
return mecca.audio.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mecca.audio.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.audio.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return mecca.audio.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3(type,freq,1.0);
});

mecca.audio.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13932 = context.createBiquadFilter();
G__13932.frequency.value = (0);

mecca.audio.synthesis.plug(G__13932.frequency,freq,context,at,duration);

mecca.audio.synthesis.plug(G__13932.Q,q,context,at,duration);

G__13932.type = type;

return G__13932;
})());
});
});

mecca.audio.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

mecca.audio.synthesis.low_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.biquad_filter,"lowpass");
goog.exportSymbol('mecca.audio.synthesis.low_pass', mecca.audio.synthesis.low_pass);
mecca.audio.synthesis.high_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mecca.audio.synthesis.biquad_filter,"highpass");
goog.exportSymbol('mecca.audio.synthesis.high_pass', mecca.audio.synthesis.high_pass);
/**
 * Pan the signal left (-1) or right (1).
 */
mecca.audio.synthesis.stereo_panner = (function mecca$audio$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13934 = context.createStereoPanner();
mecca.audio.synthesis.plug(G__13934.pan,pan,context,at,duration);

return G__13934;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.stereo_panner', mecca.audio.synthesis.stereo_panner);
/**
 * Delay the signal.
 */
mecca.audio.synthesis.delay_line = (function mecca$audio$synthesis$delay_line(seconds){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var maximum = (5);
var G__13935 = context.createDelay(maximum);
mecca.audio.synthesis.plug(G__13935.delayTime,seconds,context,at,duration);

return G__13935;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.delay_line', mecca.audio.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.audio.synthesis.convolver = (function mecca$audio$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13936 = context.createConvolver();
G__13936.buffer = (function (){var G__13937 = generate_bit_BANG_;
var G__13938 = context;
var G__13939 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__13937,G__13938,G__13939) : mecca.audio.synthesis.buffer.call(null,G__13937,G__13938,G__13939));
})();

return G__13936;
})());
});
});
/**
 * Crude reverb.
 */
mecca.audio.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * Math.pow(((1) - (i / length)),decay));
});})(duration,decay,sample_rate,length))
;
return mecca.audio.synthesis.convolver(logarithmic_decay);
})();
goog.exportSymbol('mecca.audio.synthesis.reverb', mecca.audio.synthesis.reverb);
/**
 * Mix the original signal with one with the effect applied.
 */
mecca.audio.synthesis.enhance = (function mecca$audio$synthesis$enhance(effect,level){
return mecca.audio.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mecca.audio.synthesis.pass_through,mecca.audio.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([effect,mecca.audio.synthesis.gain(level)], 0))], 0));
});
goog.exportSymbol('mecca.audio.synthesis.enhance', mecca.audio.synthesis.enhance);
mecca.audio.synthesis.align_concert_a = (function mecca$audio$synthesis$align_concert_a(tuning){
return (function (midi){
return ((tuning.cljs$core$IFn$_invoke$arity$1 ? tuning.cljs$core$IFn$_invoke$arity$1(midi) : tuning.call(null,midi)) * ((440) / (tuning.cljs$core$IFn$_invoke$arity$1 ? tuning.cljs$core$IFn$_invoke$arity$1((69)) : tuning.call(null,(69)))));
});
});
mecca.audio.synthesis.temper = (function mecca$audio$synthesis$temper(midi,ratios){
if((midi < (0))){
return (((1) / (2)) * (function (){var G__13940 = (midi + (12));
var G__13941 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__13940,G__13941) : mecca.audio.synthesis.temper.call(null,G__13940,G__13941));
})());
} else {
if((midi > (11))){
return ((2) * (function (){var G__13942 = (midi - (12));
var G__13943 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__13942,G__13943) : mecca.audio.synthesis.temper.call(null,G__13942,G__13943));
})());
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ratios,midi);

}
}
});
mecca.audio.synthesis.tune = (function mecca$audio$synthesis$tune(root,incremental_ratios){
var geometric_progression = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reductions,cljs.core._STAR_,(1));
var ratios = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (geometric_progression){
return (function mecca$audio$synthesis$tune_$_normalise(ratio){
if((ratio < (2))){
return ratio;
} else {
return mecca$audio$synthesis$tune_$_normalise((ratio / (2)));
}
});})(geometric_progression))
,(geometric_progression.cljs$core$IFn$_invoke$arity$1 ? geometric_progression.cljs$core$IFn$_invoke$arity$1(incremental_ratios) : geometric_progression.call(null,incremental_ratios))));
var tuning = ((function (geometric_progression,ratios){
return (function (midi){
return mecca.audio.synthesis.temper((midi - root),ratios);
});})(geometric_progression,ratios))
;
return mecca.audio.synthesis.align_concert_a(tuning);
});
/**
 * Converts midi to hertz using equal temperament.
 *   e.g. (equal 69)
 */
mecca.audio.synthesis.equal = mecca.audio.synthesis.tune((69),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((11),Math.pow((2),((1) / (12)))));
/**
 * Take a sequence of notes and play them from a set point in an audiocontext.
 */
mecca.audio.synthesis.play_from_BANG_ = (function mecca$audio$synthesis$play_from_BANG_(audiocontext,from,notes){
var seq__13944 = cljs.core.seq(notes);
var chunk__13945 = null;
var count__13946 = (0);
var i__13947 = (0);
while(true){
if((i__13947 < count__13946)){
var map__13948 = chunk__13945.cljs$core$IIndexed$_nth$arity$2(null,i__13947);
var map__13948__$1 = ((((!((map__13948 == null)))?(((((map__13948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13948):map__13948);
var note = map__13948__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13948__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13948__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13948__$1,cljs.core.cst$kw$instrument);
var at_13954 = (time + from);
var synth_instance_13955 = (function (){var G__13950 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__13950) : instrument.call(null,G__13950));
})();
var connected_instance_13956 = mecca.audio.synthesis.connect(synth_instance_13955,mecca.audio.synthesis.destination);
(connected_instance_13956.cljs$core$IFn$_invoke$arity$3 ? connected_instance_13956.cljs$core$IFn$_invoke$arity$3(audiocontext,at_13954,duration) : connected_instance_13956.call(null,audiocontext,at_13954,duration));


var G__13957 = seq__13944;
var G__13958 = chunk__13945;
var G__13959 = count__13946;
var G__13960 = (i__13947 + (1));
seq__13944 = G__13957;
chunk__13945 = G__13958;
count__13946 = G__13959;
i__13947 = G__13960;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13944);
if(temp__5457__auto__){
var seq__13944__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13944__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13944__$1);
var G__13961 = cljs.core.chunk_rest(seq__13944__$1);
var G__13962 = c__4351__auto__;
var G__13963 = cljs.core.count(c__4351__auto__);
var G__13964 = (0);
seq__13944 = G__13961;
chunk__13945 = G__13962;
count__13946 = G__13963;
i__13947 = G__13964;
continue;
} else {
var map__13951 = cljs.core.first(seq__13944__$1);
var map__13951__$1 = ((((!((map__13951 == null)))?(((((map__13951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13951):map__13951);
var note = map__13951__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13951__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13951__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13951__$1,cljs.core.cst$kw$instrument);
var at_13965 = (time + from);
var synth_instance_13966 = (function (){var G__13953 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__13953) : instrument.call(null,G__13953));
})();
var connected_instance_13967 = mecca.audio.synthesis.connect(synth_instance_13966,mecca.audio.synthesis.destination);
(connected_instance_13967.cljs$core$IFn$_invoke$arity$3 ? connected_instance_13967.cljs$core$IFn$_invoke$arity$3(audiocontext,at_13965,duration) : connected_instance_13967.call(null,audiocontext,at_13965,duration));


var G__13968 = cljs.core.next(seq__13944__$1);
var G__13969 = null;
var G__13970 = (0);
var G__13971 = (0);
seq__13944 = G__13968;
chunk__13945 = G__13969;
count__13946 = G__13970;
i__13947 = G__13971;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Take a sequence of notes and play them in an audiocontext.
 */
mecca.audio.synthesis.play_BANG_ = (function mecca$audio$synthesis$play_BANG_(audiocontext,notes){
return mecca.audio.synthesis.play_from_BANG_(audiocontext,mecca.audio.synthesis.current_time(audiocontext),notes);
});
