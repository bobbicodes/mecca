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
var G__14010 = arguments.length;
switch (G__14010) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14012 = context.createGain();
mecca.audio.synthesis.plug(G__14012.gain,level,context,at,duration);

return G__14012;
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
var len__4531__auto___14020 = arguments.length;
var i__4532__auto___14021 = (0);
while(true){
if((i__4532__auto___14021 < len__4531__auto___14020)){
args__4534__auto__.push((arguments[i__4532__auto___14021]));

var G__14022 = (i__4532__auto___14021 + (1));
i__4532__auto___14021 = G__14022;
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

var x_14023 = at;
var coordinates_14024 = corners;
while(true){
var temp__5457__auto___14025 = coordinates_14024;
if(cljs.core.truth_(temp__5457__auto___14025)){
var vec__14014_14026 = temp__5457__auto___14025;
var seq__14015_14027 = cljs.core.seq(vec__14014_14026);
var first__14016_14028 = cljs.core.first(seq__14015_14027);
var seq__14015_14029__$1 = cljs.core.next(seq__14015_14027);
var vec__14017_14030 = first__14016_14028;
var dx_14031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14017_14030,(0),null);
var y_14032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14017_14030,(1),null);
var remaining_14033 = seq__14015_14029__$1;
audio_node.gain.linearRampToValueAtTime(y_14032,(x_14023 + dx_14031));

var G__14034 = (dx_14031 + x_14023);
var G__14035 = remaining_14033;
x_14023 = G__14034;
coordinates_14024 = G__14035;
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
mecca.audio.synthesis.envelope.cljs$lang$applyTo = (function (seq14013){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14013));
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
var len__4531__auto___14039 = arguments.length;
var i__4532__auto___14040 = (0);
while(true){
if((i__4532__auto___14040 < len__4531__auto___14039)){
args__4534__auto__.push((arguments[i__4532__auto___14040]));

var G__14041 = (i__4532__auto___14040 + (1));
i__4532__auto___14040 = G__14041;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14036_SHARP_){
return mecca.audio.synthesis.run_with(p1__14036_SHARP_,context,at,duration);
}),synths));
});
});

mecca.audio.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq14037){
var G__14038 = cljs.core.first(seq14037);
var seq14037__$1 = cljs.core.next(seq14037);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14038,seq14037__$1);
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
var len__4531__auto___14043 = arguments.length;
var i__4532__auto___14044 = (0);
while(true){
if((i__4532__auto___14044 < len__4531__auto___14043)){
args__4534__auto__.push((arguments[i__4532__auto___14044]));

var G__14045 = (i__4532__auto___14044 + (1));
i__4532__auto___14044 = G__14045;
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
mecca.audio.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq14042){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14042));
});

mecca.audio.synthesis.join_in_parallel = (function mecca$audio$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14053 = arguments.length;
var i__4532__auto___14054 = (0);
while(true){
if((i__4532__auto___14054 < len__4531__auto___14053)){
args__4534__auto__.push((arguments[i__4532__auto___14054]));

var G__14055 = (i__4532__auto___14054 + (1));
i__4532__auto___14054 = G__14055;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__14049_14056 = cljs.core.seq(graphs);
var chunk__14050_14057 = null;
var count__14051_14058 = (0);
var i__14052_14059 = (0);
while(true){
if((i__14052_14059 < count__14051_14058)){
var graph_14060 = chunk__14050_14057.cljs$core$IIndexed$_nth$arity$2(null,i__14052_14059);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_14060).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14060))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14060));
} else {
}


var G__14061 = seq__14049_14056;
var G__14062 = chunk__14050_14057;
var G__14063 = count__14051_14058;
var G__14064 = (i__14052_14059 + (1));
seq__14049_14056 = G__14061;
chunk__14050_14057 = G__14062;
count__14051_14058 = G__14063;
i__14052_14059 = G__14064;
continue;
} else {
var temp__5457__auto___14065 = cljs.core.seq(seq__14049_14056);
if(temp__5457__auto___14065){
var seq__14049_14066__$1 = temp__5457__auto___14065;
if(cljs.core.chunked_seq_QMARK_(seq__14049_14066__$1)){
var c__4351__auto___14067 = cljs.core.chunk_first(seq__14049_14066__$1);
var G__14068 = cljs.core.chunk_rest(seq__14049_14066__$1);
var G__14069 = c__4351__auto___14067;
var G__14070 = cljs.core.count(c__4351__auto___14067);
var G__14071 = (0);
seq__14049_14056 = G__14068;
chunk__14050_14057 = G__14069;
count__14051_14058 = G__14070;
i__14052_14059 = G__14071;
continue;
} else {
var graph_14072 = cljs.core.first(seq__14049_14066__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_14072).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14072))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_14072));
} else {
}


var G__14073 = cljs.core.next(seq__14049_14066__$1);
var G__14074 = null;
var G__14075 = (0);
var G__14076 = (0);
seq__14049_14056 = G__14073;
chunk__14050_14057 = G__14074;
count__14051_14058 = G__14075;
i__14052_14059 = G__14076;
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
mecca.audio.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq14046){
var G__14047 = cljs.core.first(seq14046);
var seq14046__$1 = cljs.core.next(seq14046);
var G__14048 = cljs.core.first(seq14046__$1);
var seq14046__$2 = cljs.core.next(seq14046__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14047,G__14048,seq14046__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.audio.synthesis.add = (function mecca$audio$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14078 = arguments.length;
var i__4532__auto___14079 = (0);
while(true){
if((i__4532__auto___14079 < len__4531__auto___14078)){
args__4534__auto__.push((arguments[i__4532__auto___14079]));

var G__14080 = (i__4532__auto___14079 + (1));
i__4532__auto___14079 = G__14080;
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
mecca.audio.synthesis.add.cljs$lang$applyTo = (function (seq14077){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14077));
});

mecca.audio.synthesis.raw_buffer = (function mecca$audio$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__14081_14085 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__14082_14086 = null;
var count__14083_14087 = (0);
var i__14084_14088 = (0);
while(true){
if((i__14084_14088 < count__14083_14087)){
var i_14089 = chunk__14082_14086.cljs$core$IIndexed$_nth$arity$2(null,i__14084_14088);
(data[i_14089] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14089) : generate_bit_BANG_.call(null,i_14089)));


var G__14090 = seq__14081_14085;
var G__14091 = chunk__14082_14086;
var G__14092 = count__14083_14087;
var G__14093 = (i__14084_14088 + (1));
seq__14081_14085 = G__14090;
chunk__14082_14086 = G__14091;
count__14083_14087 = G__14092;
i__14084_14088 = G__14093;
continue;
} else {
var temp__5457__auto___14094 = cljs.core.seq(seq__14081_14085);
if(temp__5457__auto___14094){
var seq__14081_14095__$1 = temp__5457__auto___14094;
if(cljs.core.chunked_seq_QMARK_(seq__14081_14095__$1)){
var c__4351__auto___14096 = cljs.core.chunk_first(seq__14081_14095__$1);
var G__14097 = cljs.core.chunk_rest(seq__14081_14095__$1);
var G__14098 = c__4351__auto___14096;
var G__14099 = cljs.core.count(c__4351__auto___14096);
var G__14100 = (0);
seq__14081_14085 = G__14097;
chunk__14082_14086 = G__14098;
count__14083_14087 = G__14099;
i__14084_14088 = G__14100;
continue;
} else {
var i_14101 = cljs.core.first(seq__14081_14095__$1);
(data[i_14101] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_14101) : generate_bit_BANG_.call(null,i_14101)));


var G__14102 = cljs.core.next(seq__14081_14095__$1);
var G__14103 = null;
var G__14104 = (0);
var G__14105 = (0);
seq__14081_14085 = G__14102;
chunk__14082_14086 = G__14103;
count__14083_14087 = G__14104;
i__14084_14088 = G__14105;
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
return mecca.audio.synthesis.source((function (){var G__14106 = context.createBufferSource();
G__14106.buffer = (function (){var G__14107 = generate_bit_BANG_;
var G__14108 = context;
var G__14109 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__14107,G__14108,G__14109) : mecca.audio.synthesis.buffer.call(null,G__14107,G__14108,G__14109));
})();

G__14106.start(at);

return G__14106;
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
return mecca.audio.synthesis.source((function (){var G__14110 = context.createOscillator();
G__14110.frequency.value = (0);

mecca.audio.synthesis.plug(G__14110.frequency,freq,context,at,duration);

G__14110.type = type;

G__14110.start(at);

G__14110.stop(((at + duration) + 1.0));

return G__14110;
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
var G__14112 = arguments.length;
switch (G__14112) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14113 = context.createBiquadFilter();
G__14113.frequency.value = (0);

mecca.audio.synthesis.plug(G__14113.frequency,freq,context,at,duration);

mecca.audio.synthesis.plug(G__14113.Q,q,context,at,duration);

G__14113.type = type;

return G__14113;
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14115 = context.createStereoPanner();
mecca.audio.synthesis.plug(G__14115.pan,pan,context,at,duration);

return G__14115;
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
var G__14116 = context.createDelay(maximum);
mecca.audio.synthesis.plug(G__14116.delayTime,seconds,context,at,duration);

return G__14116;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.delay_line', mecca.audio.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.audio.synthesis.convolver = (function mecca$audio$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__14117 = context.createConvolver();
G__14117.buffer = (function (){var G__14118 = generate_bit_BANG_;
var G__14119 = context;
var G__14120 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__14118,G__14119,G__14120) : mecca.audio.synthesis.buffer.call(null,G__14118,G__14119,G__14120));
})();

return G__14117;
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
return (((1) / (2)) * (function (){var G__14121 = (midi + (12));
var G__14122 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__14121,G__14122) : mecca.audio.synthesis.temper.call(null,G__14121,G__14122));
})());
} else {
if((midi > (11))){
return ((2) * (function (){var G__14123 = (midi - (12));
var G__14124 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__14123,G__14124) : mecca.audio.synthesis.temper.call(null,G__14123,G__14124));
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
var seq__14125 = cljs.core.seq(notes);
var chunk__14126 = null;
var count__14127 = (0);
var i__14128 = (0);
while(true){
if((i__14128 < count__14127)){
var map__14129 = chunk__14126.cljs$core$IIndexed$_nth$arity$2(null,i__14128);
var map__14129__$1 = ((((!((map__14129 == null)))?(((((map__14129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14129):map__14129);
var note = map__14129__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14129__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14129__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14129__$1,cljs.core.cst$kw$instrument);
var at_14135 = (time + from);
var synth_instance_14136 = (function (){var G__14131 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__14131) : instrument.call(null,G__14131));
})();
var connected_instance_14137 = mecca.audio.synthesis.connect(synth_instance_14136,mecca.audio.synthesis.destination);
(connected_instance_14137.cljs$core$IFn$_invoke$arity$3 ? connected_instance_14137.cljs$core$IFn$_invoke$arity$3(audiocontext,at_14135,duration) : connected_instance_14137.call(null,audiocontext,at_14135,duration));


var G__14138 = seq__14125;
var G__14139 = chunk__14126;
var G__14140 = count__14127;
var G__14141 = (i__14128 + (1));
seq__14125 = G__14138;
chunk__14126 = G__14139;
count__14127 = G__14140;
i__14128 = G__14141;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14125);
if(temp__5457__auto__){
var seq__14125__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14125__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14125__$1);
var G__14142 = cljs.core.chunk_rest(seq__14125__$1);
var G__14143 = c__4351__auto__;
var G__14144 = cljs.core.count(c__4351__auto__);
var G__14145 = (0);
seq__14125 = G__14142;
chunk__14126 = G__14143;
count__14127 = G__14144;
i__14128 = G__14145;
continue;
} else {
var map__14132 = cljs.core.first(seq__14125__$1);
var map__14132__$1 = ((((!((map__14132 == null)))?(((((map__14132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14132):map__14132);
var note = map__14132__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14132__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14132__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14132__$1,cljs.core.cst$kw$instrument);
var at_14146 = (time + from);
var synth_instance_14147 = (function (){var G__14134 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__14134) : instrument.call(null,G__14134));
})();
var connected_instance_14148 = mecca.audio.synthesis.connect(synth_instance_14147,mecca.audio.synthesis.destination);
(connected_instance_14148.cljs$core$IFn$_invoke$arity$3 ? connected_instance_14148.cljs$core$IFn$_invoke$arity$3(audiocontext,at_14146,duration) : connected_instance_14148.call(null,audiocontext,at_14146,duration));


var G__14149 = cljs.core.next(seq__14125__$1);
var G__14150 = null;
var G__14151 = (0);
var G__14152 = (0);
seq__14125 = G__14149;
chunk__14126 = G__14150;
count__14127 = G__14151;
i__14128 = G__14152;
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
