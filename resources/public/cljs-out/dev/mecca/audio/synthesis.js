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
var G__13826 = arguments.length;
switch (G__13826) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13828 = context.createGain();
mecca.audio.synthesis.plug(G__13828.gain,level,context,at,duration);

return G__13828;
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
var len__4531__auto___13836 = arguments.length;
var i__4532__auto___13837 = (0);
while(true){
if((i__4532__auto___13837 < len__4531__auto___13836)){
args__4534__auto__.push((arguments[i__4532__auto___13837]));

var G__13838 = (i__4532__auto___13837 + (1));
i__4532__auto___13837 = G__13838;
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

var x_13839 = at;
var coordinates_13840 = corners;
while(true){
var temp__5457__auto___13841 = coordinates_13840;
if(cljs.core.truth_(temp__5457__auto___13841)){
var vec__13830_13842 = temp__5457__auto___13841;
var seq__13831_13843 = cljs.core.seq(vec__13830_13842);
var first__13832_13844 = cljs.core.first(seq__13831_13843);
var seq__13831_13845__$1 = cljs.core.next(seq__13831_13843);
var vec__13833_13846 = first__13832_13844;
var dx_13847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13833_13846,(0),null);
var y_13848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13833_13846,(1),null);
var remaining_13849 = seq__13831_13845__$1;
audio_node.gain.linearRampToValueAtTime(y_13848,(x_13839 + dx_13847));

var G__13850 = (dx_13847 + x_13839);
var G__13851 = remaining_13849;
x_13839 = G__13850;
coordinates_13840 = G__13851;
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
mecca.audio.synthesis.envelope.cljs$lang$applyTo = (function (seq13829){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13829));
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
var len__4531__auto___13855 = arguments.length;
var i__4532__auto___13856 = (0);
while(true){
if((i__4532__auto___13856 < len__4531__auto___13855)){
args__4534__auto__.push((arguments[i__4532__auto___13856]));

var G__13857 = (i__4532__auto___13856 + (1));
i__4532__auto___13856 = G__13857;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13852_SHARP_){
return mecca.audio.synthesis.run_with(p1__13852_SHARP_,context,at,duration);
}),synths));
});
});

mecca.audio.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq13853){
var G__13854 = cljs.core.first(seq13853);
var seq13853__$1 = cljs.core.next(seq13853);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13854,seq13853__$1);
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
var len__4531__auto___13859 = arguments.length;
var i__4532__auto___13860 = (0);
while(true){
if((i__4532__auto___13860 < len__4531__auto___13859)){
args__4534__auto__.push((arguments[i__4532__auto___13860]));

var G__13861 = (i__4532__auto___13860 + (1));
i__4532__auto___13860 = G__13861;
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
mecca.audio.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq13858){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13858));
});

mecca.audio.synthesis.join_in_parallel = (function mecca$audio$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13869 = arguments.length;
var i__4532__auto___13870 = (0);
while(true){
if((i__4532__auto___13870 < len__4531__auto___13869)){
args__4534__auto__.push((arguments[i__4532__auto___13870]));

var G__13871 = (i__4532__auto___13870 + (1));
i__4532__auto___13870 = G__13871;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__13865_13872 = cljs.core.seq(graphs);
var chunk__13866_13873 = null;
var count__13867_13874 = (0);
var i__13868_13875 = (0);
while(true){
if((i__13868_13875 < count__13867_13874)){
var graph_13876 = chunk__13866_13873.cljs$core$IIndexed$_nth$arity$2(null,i__13868_13875);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_13876).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13876))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13876));
} else {
}


var G__13877 = seq__13865_13872;
var G__13878 = chunk__13866_13873;
var G__13879 = count__13867_13874;
var G__13880 = (i__13868_13875 + (1));
seq__13865_13872 = G__13877;
chunk__13866_13873 = G__13878;
count__13867_13874 = G__13879;
i__13868_13875 = G__13880;
continue;
} else {
var temp__5457__auto___13881 = cljs.core.seq(seq__13865_13872);
if(temp__5457__auto___13881){
var seq__13865_13882__$1 = temp__5457__auto___13881;
if(cljs.core.chunked_seq_QMARK_(seq__13865_13882__$1)){
var c__4351__auto___13883 = cljs.core.chunk_first(seq__13865_13882__$1);
var G__13884 = cljs.core.chunk_rest(seq__13865_13882__$1);
var G__13885 = c__4351__auto___13883;
var G__13886 = cljs.core.count(c__4351__auto___13883);
var G__13887 = (0);
seq__13865_13872 = G__13884;
chunk__13866_13873 = G__13885;
count__13867_13874 = G__13886;
i__13868_13875 = G__13887;
continue;
} else {
var graph_13888 = cljs.core.first(seq__13865_13882__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_13888).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13888))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13888));
} else {
}


var G__13889 = cljs.core.next(seq__13865_13882__$1);
var G__13890 = null;
var G__13891 = (0);
var G__13892 = (0);
seq__13865_13872 = G__13889;
chunk__13866_13873 = G__13890;
count__13867_13874 = G__13891;
i__13868_13875 = G__13892;
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
mecca.audio.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq13862){
var G__13863 = cljs.core.first(seq13862);
var seq13862__$1 = cljs.core.next(seq13862);
var G__13864 = cljs.core.first(seq13862__$1);
var seq13862__$2 = cljs.core.next(seq13862__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13863,G__13864,seq13862__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.audio.synthesis.add = (function mecca$audio$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13894 = arguments.length;
var i__4532__auto___13895 = (0);
while(true){
if((i__4532__auto___13895 < len__4531__auto___13894)){
args__4534__auto__.push((arguments[i__4532__auto___13895]));

var G__13896 = (i__4532__auto___13895 + (1));
i__4532__auto___13895 = G__13896;
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
mecca.audio.synthesis.add.cljs$lang$applyTo = (function (seq13893){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13893));
});

mecca.audio.synthesis.raw_buffer = (function mecca$audio$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__13897_13901 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__13898_13902 = null;
var count__13899_13903 = (0);
var i__13900_13904 = (0);
while(true){
if((i__13900_13904 < count__13899_13903)){
var i_13905 = chunk__13898_13902.cljs$core$IIndexed$_nth$arity$2(null,i__13900_13904);
(data[i_13905] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_13905) : generate_bit_BANG_.call(null,i_13905)));


var G__13906 = seq__13897_13901;
var G__13907 = chunk__13898_13902;
var G__13908 = count__13899_13903;
var G__13909 = (i__13900_13904 + (1));
seq__13897_13901 = G__13906;
chunk__13898_13902 = G__13907;
count__13899_13903 = G__13908;
i__13900_13904 = G__13909;
continue;
} else {
var temp__5457__auto___13910 = cljs.core.seq(seq__13897_13901);
if(temp__5457__auto___13910){
var seq__13897_13911__$1 = temp__5457__auto___13910;
if(cljs.core.chunked_seq_QMARK_(seq__13897_13911__$1)){
var c__4351__auto___13912 = cljs.core.chunk_first(seq__13897_13911__$1);
var G__13913 = cljs.core.chunk_rest(seq__13897_13911__$1);
var G__13914 = c__4351__auto___13912;
var G__13915 = cljs.core.count(c__4351__auto___13912);
var G__13916 = (0);
seq__13897_13901 = G__13913;
chunk__13898_13902 = G__13914;
count__13899_13903 = G__13915;
i__13900_13904 = G__13916;
continue;
} else {
var i_13917 = cljs.core.first(seq__13897_13911__$1);
(data[i_13917] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_13917) : generate_bit_BANG_.call(null,i_13917)));


var G__13918 = cljs.core.next(seq__13897_13911__$1);
var G__13919 = null;
var G__13920 = (0);
var G__13921 = (0);
seq__13897_13901 = G__13918;
chunk__13898_13902 = G__13919;
count__13899_13903 = G__13920;
i__13900_13904 = G__13921;
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
return mecca.audio.synthesis.source((function (){var G__13922 = context.createBufferSource();
G__13922.buffer = (function (){var G__13923 = generate_bit_BANG_;
var G__13924 = context;
var G__13925 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__13923,G__13924,G__13925) : mecca.audio.synthesis.buffer.call(null,G__13923,G__13924,G__13925));
})();

G__13922.start(at);

return G__13922;
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
return mecca.audio.synthesis.source((function (){var G__13926 = context.createOscillator();
G__13926.frequency.value = (0);

mecca.audio.synthesis.plug(G__13926.frequency,freq,context,at,duration);

G__13926.type = type;

G__13926.start(at);

G__13926.stop(((at + duration) + 1.0));

return G__13926;
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
var G__13928 = arguments.length;
switch (G__13928) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13929 = context.createBiquadFilter();
G__13929.frequency.value = (0);

mecca.audio.synthesis.plug(G__13929.frequency,freq,context,at,duration);

mecca.audio.synthesis.plug(G__13929.Q,q,context,at,duration);

G__13929.type = type;

return G__13929;
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13931 = context.createStereoPanner();
mecca.audio.synthesis.plug(G__13931.pan,pan,context,at,duration);

return G__13931;
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
var G__13932 = context.createDelay(maximum);
mecca.audio.synthesis.plug(G__13932.delayTime,seconds,context,at,duration);

return G__13932;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.delay_line', mecca.audio.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.audio.synthesis.convolver = (function mecca$audio$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13933 = context.createConvolver();
G__13933.buffer = (function (){var G__13934 = generate_bit_BANG_;
var G__13935 = context;
var G__13936 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__13934,G__13935,G__13936) : mecca.audio.synthesis.buffer.call(null,G__13934,G__13935,G__13936));
})();

return G__13933;
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
return (((1) / (2)) * (function (){var G__13937 = (midi + (12));
var G__13938 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__13937,G__13938) : mecca.audio.synthesis.temper.call(null,G__13937,G__13938));
})());
} else {
if((midi > (11))){
return ((2) * (function (){var G__13939 = (midi - (12));
var G__13940 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__13939,G__13940) : mecca.audio.synthesis.temper.call(null,G__13939,G__13940));
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
var seq__13941 = cljs.core.seq(notes);
var chunk__13942 = null;
var count__13943 = (0);
var i__13944 = (0);
while(true){
if((i__13944 < count__13943)){
var map__13945 = chunk__13942.cljs$core$IIndexed$_nth$arity$2(null,i__13944);
var map__13945__$1 = ((((!((map__13945 == null)))?(((((map__13945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13945):map__13945);
var note = map__13945__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13945__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13945__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13945__$1,cljs.core.cst$kw$instrument);
var at_13951 = (time + from);
var synth_instance_13952 = (function (){var G__13947 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__13947) : instrument.call(null,G__13947));
})();
var connected_instance_13953 = mecca.audio.synthesis.connect(synth_instance_13952,mecca.audio.synthesis.destination);
(connected_instance_13953.cljs$core$IFn$_invoke$arity$3 ? connected_instance_13953.cljs$core$IFn$_invoke$arity$3(audiocontext,at_13951,duration) : connected_instance_13953.call(null,audiocontext,at_13951,duration));


var G__13954 = seq__13941;
var G__13955 = chunk__13942;
var G__13956 = count__13943;
var G__13957 = (i__13944 + (1));
seq__13941 = G__13954;
chunk__13942 = G__13955;
count__13943 = G__13956;
i__13944 = G__13957;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13941);
if(temp__5457__auto__){
var seq__13941__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13941__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13941__$1);
var G__13958 = cljs.core.chunk_rest(seq__13941__$1);
var G__13959 = c__4351__auto__;
var G__13960 = cljs.core.count(c__4351__auto__);
var G__13961 = (0);
seq__13941 = G__13958;
chunk__13942 = G__13959;
count__13943 = G__13960;
i__13944 = G__13961;
continue;
} else {
var map__13948 = cljs.core.first(seq__13941__$1);
var map__13948__$1 = ((((!((map__13948 == null)))?(((((map__13948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13948):map__13948);
var note = map__13948__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13948__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13948__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13948__$1,cljs.core.cst$kw$instrument);
var at_13962 = (time + from);
var synth_instance_13963 = (function (){var G__13950 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__13950) : instrument.call(null,G__13950));
})();
var connected_instance_13964 = mecca.audio.synthesis.connect(synth_instance_13963,mecca.audio.synthesis.destination);
(connected_instance_13964.cljs$core$IFn$_invoke$arity$3 ? connected_instance_13964.cljs$core$IFn$_invoke$arity$3(audiocontext,at_13962,duration) : connected_instance_13964.call(null,audiocontext,at_13962,duration));


var G__13965 = cljs.core.next(seq__13941__$1);
var G__13966 = null;
var G__13967 = (0);
var G__13968 = (0);
seq__13941 = G__13965;
chunk__13942 = G__13966;
count__13943 = G__13967;
i__13944 = G__13968;
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
