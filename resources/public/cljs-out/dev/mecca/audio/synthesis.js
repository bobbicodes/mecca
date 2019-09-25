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
var G__13831 = arguments.length;
switch (G__13831) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13833 = context.createGain();
mecca.audio.synthesis.plug(G__13833.gain,level,context,at,duration);

return G__13833;
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
var len__4531__auto___13841 = arguments.length;
var i__4532__auto___13842 = (0);
while(true){
if((i__4532__auto___13842 < len__4531__auto___13841)){
args__4534__auto__.push((arguments[i__4532__auto___13842]));

var G__13843 = (i__4532__auto___13842 + (1));
i__4532__auto___13842 = G__13843;
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

var x_13844 = at;
var coordinates_13845 = corners;
while(true){
var temp__5457__auto___13846 = coordinates_13845;
if(cljs.core.truth_(temp__5457__auto___13846)){
var vec__13835_13847 = temp__5457__auto___13846;
var seq__13836_13848 = cljs.core.seq(vec__13835_13847);
var first__13837_13849 = cljs.core.first(seq__13836_13848);
var seq__13836_13850__$1 = cljs.core.next(seq__13836_13848);
var vec__13838_13851 = first__13837_13849;
var dx_13852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13838_13851,(0),null);
var y_13853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13838_13851,(1),null);
var remaining_13854 = seq__13836_13850__$1;
audio_node.gain.linearRampToValueAtTime(y_13853,(x_13844 + dx_13852));

var G__13855 = (dx_13852 + x_13844);
var G__13856 = remaining_13854;
x_13844 = G__13855;
coordinates_13845 = G__13856;
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
mecca.audio.synthesis.envelope.cljs$lang$applyTo = (function (seq13834){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13834));
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
var len__4531__auto___13860 = arguments.length;
var i__4532__auto___13861 = (0);
while(true){
if((i__4532__auto___13861 < len__4531__auto___13860)){
args__4534__auto__.push((arguments[i__4532__auto___13861]));

var G__13862 = (i__4532__auto___13861 + (1));
i__4532__auto___13861 = G__13862;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13857_SHARP_){
return mecca.audio.synthesis.run_with(p1__13857_SHARP_,context,at,duration);
}),synths));
});
});

mecca.audio.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq13858){
var G__13859 = cljs.core.first(seq13858);
var seq13858__$1 = cljs.core.next(seq13858);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13859,seq13858__$1);
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
var len__4531__auto___13864 = arguments.length;
var i__4532__auto___13865 = (0);
while(true){
if((i__4532__auto___13865 < len__4531__auto___13864)){
args__4534__auto__.push((arguments[i__4532__auto___13865]));

var G__13866 = (i__4532__auto___13865 + (1));
i__4532__auto___13865 = G__13866;
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
mecca.audio.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq13863){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13863));
});

mecca.audio.synthesis.join_in_parallel = (function mecca$audio$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13874 = arguments.length;
var i__4532__auto___13875 = (0);
while(true){
if((i__4532__auto___13875 < len__4531__auto___13874)){
args__4534__auto__.push((arguments[i__4532__auto___13875]));

var G__13876 = (i__4532__auto___13875 + (1));
i__4532__auto___13875 = G__13876;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__13870_13877 = cljs.core.seq(graphs);
var chunk__13871_13878 = null;
var count__13872_13879 = (0);
var i__13873_13880 = (0);
while(true){
if((i__13873_13880 < count__13872_13879)){
var graph_13881 = chunk__13871_13878.cljs$core$IIndexed$_nth$arity$2(null,i__13873_13880);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_13881).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13881))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13881));
} else {
}


var G__13882 = seq__13870_13877;
var G__13883 = chunk__13871_13878;
var G__13884 = count__13872_13879;
var G__13885 = (i__13873_13880 + (1));
seq__13870_13877 = G__13882;
chunk__13871_13878 = G__13883;
count__13872_13879 = G__13884;
i__13873_13880 = G__13885;
continue;
} else {
var temp__5457__auto___13886 = cljs.core.seq(seq__13870_13877);
if(temp__5457__auto___13886){
var seq__13870_13887__$1 = temp__5457__auto___13886;
if(cljs.core.chunked_seq_QMARK_(seq__13870_13887__$1)){
var c__4351__auto___13888 = cljs.core.chunk_first(seq__13870_13887__$1);
var G__13889 = cljs.core.chunk_rest(seq__13870_13887__$1);
var G__13890 = c__4351__auto___13888;
var G__13891 = cljs.core.count(c__4351__auto___13888);
var G__13892 = (0);
seq__13870_13877 = G__13889;
chunk__13871_13878 = G__13890;
count__13872_13879 = G__13891;
i__13873_13880 = G__13892;
continue;
} else {
var graph_13893 = cljs.core.first(seq__13870_13887__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_13893).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13893))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13893));
} else {
}


var G__13894 = cljs.core.next(seq__13870_13887__$1);
var G__13895 = null;
var G__13896 = (0);
var G__13897 = (0);
seq__13870_13877 = G__13894;
chunk__13871_13878 = G__13895;
count__13872_13879 = G__13896;
i__13873_13880 = G__13897;
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
mecca.audio.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq13867){
var G__13868 = cljs.core.first(seq13867);
var seq13867__$1 = cljs.core.next(seq13867);
var G__13869 = cljs.core.first(seq13867__$1);
var seq13867__$2 = cljs.core.next(seq13867__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13868,G__13869,seq13867__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.audio.synthesis.add = (function mecca$audio$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13899 = arguments.length;
var i__4532__auto___13900 = (0);
while(true){
if((i__4532__auto___13900 < len__4531__auto___13899)){
args__4534__auto__.push((arguments[i__4532__auto___13900]));

var G__13901 = (i__4532__auto___13900 + (1));
i__4532__auto___13900 = G__13901;
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
mecca.audio.synthesis.add.cljs$lang$applyTo = (function (seq13898){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13898));
});

mecca.audio.synthesis.raw_buffer = (function mecca$audio$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__13902_13906 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__13903_13907 = null;
var count__13904_13908 = (0);
var i__13905_13909 = (0);
while(true){
if((i__13905_13909 < count__13904_13908)){
var i_13910 = chunk__13903_13907.cljs$core$IIndexed$_nth$arity$2(null,i__13905_13909);
(data[i_13910] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_13910) : generate_bit_BANG_.call(null,i_13910)));


var G__13911 = seq__13902_13906;
var G__13912 = chunk__13903_13907;
var G__13913 = count__13904_13908;
var G__13914 = (i__13905_13909 + (1));
seq__13902_13906 = G__13911;
chunk__13903_13907 = G__13912;
count__13904_13908 = G__13913;
i__13905_13909 = G__13914;
continue;
} else {
var temp__5457__auto___13915 = cljs.core.seq(seq__13902_13906);
if(temp__5457__auto___13915){
var seq__13902_13916__$1 = temp__5457__auto___13915;
if(cljs.core.chunked_seq_QMARK_(seq__13902_13916__$1)){
var c__4351__auto___13917 = cljs.core.chunk_first(seq__13902_13916__$1);
var G__13918 = cljs.core.chunk_rest(seq__13902_13916__$1);
var G__13919 = c__4351__auto___13917;
var G__13920 = cljs.core.count(c__4351__auto___13917);
var G__13921 = (0);
seq__13902_13906 = G__13918;
chunk__13903_13907 = G__13919;
count__13904_13908 = G__13920;
i__13905_13909 = G__13921;
continue;
} else {
var i_13922 = cljs.core.first(seq__13902_13916__$1);
(data[i_13922] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_13922) : generate_bit_BANG_.call(null,i_13922)));


var G__13923 = cljs.core.next(seq__13902_13916__$1);
var G__13924 = null;
var G__13925 = (0);
var G__13926 = (0);
seq__13902_13906 = G__13923;
chunk__13903_13907 = G__13924;
count__13904_13908 = G__13925;
i__13905_13909 = G__13926;
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
return mecca.audio.synthesis.source((function (){var G__13927 = context.createBufferSource();
G__13927.buffer = (function (){var G__13928 = generate_bit_BANG_;
var G__13929 = context;
var G__13930 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__13928,G__13929,G__13930) : mecca.audio.synthesis.buffer.call(null,G__13928,G__13929,G__13930));
})();

G__13927.start(at);

return G__13927;
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
return mecca.audio.synthesis.source((function (){var G__13931 = context.createOscillator();
G__13931.frequency.value = (0);

mecca.audio.synthesis.plug(G__13931.frequency,freq,context,at,duration);

G__13931.type = type;

G__13931.start(at);

G__13931.stop(((at + duration) + 1.0));

return G__13931;
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
var G__13933 = arguments.length;
switch (G__13933) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13934 = context.createBiquadFilter();
G__13934.frequency.value = (0);

mecca.audio.synthesis.plug(G__13934.frequency,freq,context,at,duration);

mecca.audio.synthesis.plug(G__13934.Q,q,context,at,duration);

G__13934.type = type;

return G__13934;
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13936 = context.createStereoPanner();
mecca.audio.synthesis.plug(G__13936.pan,pan,context,at,duration);

return G__13936;
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
var G__13937 = context.createDelay(maximum);
mecca.audio.synthesis.plug(G__13937.delayTime,seconds,context,at,duration);

return G__13937;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.delay_line', mecca.audio.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.audio.synthesis.convolver = (function mecca$audio$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13938 = context.createConvolver();
G__13938.buffer = (function (){var G__13939 = generate_bit_BANG_;
var G__13940 = context;
var G__13941 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__13939,G__13940,G__13941) : mecca.audio.synthesis.buffer.call(null,G__13939,G__13940,G__13941));
})();

return G__13938;
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
return (((1) / (2)) * (function (){var G__13942 = (midi + (12));
var G__13943 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__13942,G__13943) : mecca.audio.synthesis.temper.call(null,G__13942,G__13943));
})());
} else {
if((midi > (11))){
return ((2) * (function (){var G__13944 = (midi - (12));
var G__13945 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__13944,G__13945) : mecca.audio.synthesis.temper.call(null,G__13944,G__13945));
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
var seq__13946 = cljs.core.seq(notes);
var chunk__13947 = null;
var count__13948 = (0);
var i__13949 = (0);
while(true){
if((i__13949 < count__13948)){
var map__13950 = chunk__13947.cljs$core$IIndexed$_nth$arity$2(null,i__13949);
var map__13950__$1 = ((((!((map__13950 == null)))?(((((map__13950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13950):map__13950);
var note = map__13950__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13950__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13950__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13950__$1,cljs.core.cst$kw$instrument);
var at_13956 = (time + from);
var synth_instance_13957 = (function (){var G__13952 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__13952) : instrument.call(null,G__13952));
})();
var connected_instance_13958 = mecca.audio.synthesis.connect(synth_instance_13957,mecca.audio.synthesis.destination);
(connected_instance_13958.cljs$core$IFn$_invoke$arity$3 ? connected_instance_13958.cljs$core$IFn$_invoke$arity$3(audiocontext,at_13956,duration) : connected_instance_13958.call(null,audiocontext,at_13956,duration));


var G__13959 = seq__13946;
var G__13960 = chunk__13947;
var G__13961 = count__13948;
var G__13962 = (i__13949 + (1));
seq__13946 = G__13959;
chunk__13947 = G__13960;
count__13948 = G__13961;
i__13949 = G__13962;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13946);
if(temp__5457__auto__){
var seq__13946__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13946__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13946__$1);
var G__13963 = cljs.core.chunk_rest(seq__13946__$1);
var G__13964 = c__4351__auto__;
var G__13965 = cljs.core.count(c__4351__auto__);
var G__13966 = (0);
seq__13946 = G__13963;
chunk__13947 = G__13964;
count__13948 = G__13965;
i__13949 = G__13966;
continue;
} else {
var map__13953 = cljs.core.first(seq__13946__$1);
var map__13953__$1 = ((((!((map__13953 == null)))?(((((map__13953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13953):map__13953);
var note = map__13953__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13953__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13953__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13953__$1,cljs.core.cst$kw$instrument);
var at_13967 = (time + from);
var synth_instance_13968 = (function (){var G__13955 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__13955) : instrument.call(null,G__13955));
})();
var connected_instance_13969 = mecca.audio.synthesis.connect(synth_instance_13968,mecca.audio.synthesis.destination);
(connected_instance_13969.cljs$core$IFn$_invoke$arity$3 ? connected_instance_13969.cljs$core$IFn$_invoke$arity$3(audiocontext,at_13967,duration) : connected_instance_13969.call(null,audiocontext,at_13967,duration));


var G__13970 = cljs.core.next(seq__13946__$1);
var G__13971 = null;
var G__13972 = (0);
var G__13973 = (0);
seq__13946 = G__13970;
chunk__13947 = G__13971;
count__13948 = G__13972;
i__13949 = G__13973;
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
