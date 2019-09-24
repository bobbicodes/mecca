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
var G__13817 = arguments.length;
switch (G__13817) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13819 = context.createGain();
mecca.audio.synthesis.plug(G__13819.gain,level,context,at,duration);

return G__13819;
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
var len__4531__auto___13827 = arguments.length;
var i__4532__auto___13828 = (0);
while(true){
if((i__4532__auto___13828 < len__4531__auto___13827)){
args__4534__auto__.push((arguments[i__4532__auto___13828]));

var G__13829 = (i__4532__auto___13828 + (1));
i__4532__auto___13828 = G__13829;
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

var x_13830 = at;
var coordinates_13831 = corners;
while(true){
var temp__5457__auto___13832 = coordinates_13831;
if(cljs.core.truth_(temp__5457__auto___13832)){
var vec__13821_13833 = temp__5457__auto___13832;
var seq__13822_13834 = cljs.core.seq(vec__13821_13833);
var first__13823_13835 = cljs.core.first(seq__13822_13834);
var seq__13822_13836__$1 = cljs.core.next(seq__13822_13834);
var vec__13824_13837 = first__13823_13835;
var dx_13838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13824_13837,(0),null);
var y_13839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13824_13837,(1),null);
var remaining_13840 = seq__13822_13836__$1;
audio_node.gain.linearRampToValueAtTime(y_13839,(x_13830 + dx_13838));

var G__13841 = (dx_13838 + x_13830);
var G__13842 = remaining_13840;
x_13830 = G__13841;
coordinates_13831 = G__13842;
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
mecca.audio.synthesis.envelope.cljs$lang$applyTo = (function (seq13820){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13820));
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
var len__4531__auto___13846 = arguments.length;
var i__4532__auto___13847 = (0);
while(true){
if((i__4532__auto___13847 < len__4531__auto___13846)){
args__4534__auto__.push((arguments[i__4532__auto___13847]));

var G__13848 = (i__4532__auto___13847 + (1));
i__4532__auto___13847 = G__13848;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13843_SHARP_){
return mecca.audio.synthesis.run_with(p1__13843_SHARP_,context,at,duration);
}),synths));
});
});

mecca.audio.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq13844){
var G__13845 = cljs.core.first(seq13844);
var seq13844__$1 = cljs.core.next(seq13844);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13845,seq13844__$1);
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
var len__4531__auto___13850 = arguments.length;
var i__4532__auto___13851 = (0);
while(true){
if((i__4532__auto___13851 < len__4531__auto___13850)){
args__4534__auto__.push((arguments[i__4532__auto___13851]));

var G__13852 = (i__4532__auto___13851 + (1));
i__4532__auto___13851 = G__13852;
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
mecca.audio.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq13849){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13849));
});

mecca.audio.synthesis.join_in_parallel = (function mecca$audio$synthesis$join_in_parallel(var_args){
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

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__13856_13863 = cljs.core.seq(graphs);
var chunk__13857_13864 = null;
var count__13858_13865 = (0);
var i__13859_13866 = (0);
while(true){
if((i__13859_13866 < count__13858_13865)){
var graph_13867 = chunk__13857_13864.cljs$core$IIndexed$_nth$arity$2(null,i__13859_13866);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_13867).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13867))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13867));
} else {
}


var G__13868 = seq__13856_13863;
var G__13869 = chunk__13857_13864;
var G__13870 = count__13858_13865;
var G__13871 = (i__13859_13866 + (1));
seq__13856_13863 = G__13868;
chunk__13857_13864 = G__13869;
count__13858_13865 = G__13870;
i__13859_13866 = G__13871;
continue;
} else {
var temp__5457__auto___13872 = cljs.core.seq(seq__13856_13863);
if(temp__5457__auto___13872){
var seq__13856_13873__$1 = temp__5457__auto___13872;
if(cljs.core.chunked_seq_QMARK_(seq__13856_13873__$1)){
var c__4351__auto___13874 = cljs.core.chunk_first(seq__13856_13873__$1);
var G__13875 = cljs.core.chunk_rest(seq__13856_13873__$1);
var G__13876 = c__4351__auto___13874;
var G__13877 = cljs.core.count(c__4351__auto___13874);
var G__13878 = (0);
seq__13856_13863 = G__13875;
chunk__13857_13864 = G__13876;
count__13858_13865 = G__13877;
i__13859_13866 = G__13878;
continue;
} else {
var graph_13879 = cljs.core.first(seq__13856_13873__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_13879).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13879))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_13879));
} else {
}


var G__13880 = cljs.core.next(seq__13856_13873__$1);
var G__13881 = null;
var G__13882 = (0);
var G__13883 = (0);
seq__13856_13863 = G__13880;
chunk__13857_13864 = G__13881;
count__13858_13865 = G__13882;
i__13859_13866 = G__13883;
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
mecca.audio.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq13853){
var G__13854 = cljs.core.first(seq13853);
var seq13853__$1 = cljs.core.next(seq13853);
var G__13855 = cljs.core.first(seq13853__$1);
var seq13853__$2 = cljs.core.next(seq13853__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13854,G__13855,seq13853__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.audio.synthesis.add = (function mecca$audio$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13885 = arguments.length;
var i__4532__auto___13886 = (0);
while(true){
if((i__4532__auto___13886 < len__4531__auto___13885)){
args__4534__auto__.push((arguments[i__4532__auto___13886]));

var G__13887 = (i__4532__auto___13886 + (1));
i__4532__auto___13886 = G__13887;
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
mecca.audio.synthesis.add.cljs$lang$applyTo = (function (seq13884){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13884));
});

mecca.audio.synthesis.raw_buffer = (function mecca$audio$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__13888_13892 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__13889_13893 = null;
var count__13890_13894 = (0);
var i__13891_13895 = (0);
while(true){
if((i__13891_13895 < count__13890_13894)){
var i_13896 = chunk__13889_13893.cljs$core$IIndexed$_nth$arity$2(null,i__13891_13895);
(data[i_13896] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_13896) : generate_bit_BANG_.call(null,i_13896)));


var G__13897 = seq__13888_13892;
var G__13898 = chunk__13889_13893;
var G__13899 = count__13890_13894;
var G__13900 = (i__13891_13895 + (1));
seq__13888_13892 = G__13897;
chunk__13889_13893 = G__13898;
count__13890_13894 = G__13899;
i__13891_13895 = G__13900;
continue;
} else {
var temp__5457__auto___13901 = cljs.core.seq(seq__13888_13892);
if(temp__5457__auto___13901){
var seq__13888_13902__$1 = temp__5457__auto___13901;
if(cljs.core.chunked_seq_QMARK_(seq__13888_13902__$1)){
var c__4351__auto___13903 = cljs.core.chunk_first(seq__13888_13902__$1);
var G__13904 = cljs.core.chunk_rest(seq__13888_13902__$1);
var G__13905 = c__4351__auto___13903;
var G__13906 = cljs.core.count(c__4351__auto___13903);
var G__13907 = (0);
seq__13888_13892 = G__13904;
chunk__13889_13893 = G__13905;
count__13890_13894 = G__13906;
i__13891_13895 = G__13907;
continue;
} else {
var i_13908 = cljs.core.first(seq__13888_13902__$1);
(data[i_13908] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_13908) : generate_bit_BANG_.call(null,i_13908)));


var G__13909 = cljs.core.next(seq__13888_13902__$1);
var G__13910 = null;
var G__13911 = (0);
var G__13912 = (0);
seq__13888_13892 = G__13909;
chunk__13889_13893 = G__13910;
count__13890_13894 = G__13911;
i__13891_13895 = G__13912;
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
return mecca.audio.synthesis.source((function (){var G__13913 = context.createBufferSource();
G__13913.buffer = (function (){var G__13914 = generate_bit_BANG_;
var G__13915 = context;
var G__13916 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__13914,G__13915,G__13916) : mecca.audio.synthesis.buffer.call(null,G__13914,G__13915,G__13916));
})();

G__13913.start(at);

return G__13913;
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
return mecca.audio.synthesis.source((function (){var G__13917 = context.createOscillator();
G__13917.frequency.value = (0);

mecca.audio.synthesis.plug(G__13917.frequency,freq,context,at,duration);

G__13917.type = type;

G__13917.start(at);

G__13917.stop(((at + duration) + 1.0));

return G__13917;
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
var G__13919 = arguments.length;
switch (G__13919) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13920 = context.createBiquadFilter();
G__13920.frequency.value = (0);

mecca.audio.synthesis.plug(G__13920.frequency,freq,context,at,duration);

mecca.audio.synthesis.plug(G__13920.Q,q,context,at,duration);

G__13920.type = type;

return G__13920;
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13922 = context.createStereoPanner();
mecca.audio.synthesis.plug(G__13922.pan,pan,context,at,duration);

return G__13922;
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
var G__13923 = context.createDelay(maximum);
mecca.audio.synthesis.plug(G__13923.delayTime,seconds,context,at,duration);

return G__13923;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.delay_line', mecca.audio.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.audio.synthesis.convolver = (function mecca$audio$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__13924 = context.createConvolver();
G__13924.buffer = (function (){var G__13925 = generate_bit_BANG_;
var G__13926 = context;
var G__13927 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__13925,G__13926,G__13927) : mecca.audio.synthesis.buffer.call(null,G__13925,G__13926,G__13927));
})();

return G__13924;
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
return (((1) / (2)) * (function (){var G__13928 = (midi + (12));
var G__13929 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__13928,G__13929) : mecca.audio.synthesis.temper.call(null,G__13928,G__13929));
})());
} else {
if((midi > (11))){
return ((2) * (function (){var G__13930 = (midi - (12));
var G__13931 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__13930,G__13931) : mecca.audio.synthesis.temper.call(null,G__13930,G__13931));
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
var seq__13932 = cljs.core.seq(notes);
var chunk__13933 = null;
var count__13934 = (0);
var i__13935 = (0);
while(true){
if((i__13935 < count__13934)){
var map__13936 = chunk__13933.cljs$core$IIndexed$_nth$arity$2(null,i__13935);
var map__13936__$1 = ((((!((map__13936 == null)))?(((((map__13936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13936):map__13936);
var note = map__13936__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13936__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13936__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13936__$1,cljs.core.cst$kw$instrument);
var at_13942 = (time + from);
var synth_instance_13943 = (function (){var G__13938 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__13938) : instrument.call(null,G__13938));
})();
var connected_instance_13944 = mecca.audio.synthesis.connect(synth_instance_13943,mecca.audio.synthesis.destination);
(connected_instance_13944.cljs$core$IFn$_invoke$arity$3 ? connected_instance_13944.cljs$core$IFn$_invoke$arity$3(audiocontext,at_13942,duration) : connected_instance_13944.call(null,audiocontext,at_13942,duration));


var G__13945 = seq__13932;
var G__13946 = chunk__13933;
var G__13947 = count__13934;
var G__13948 = (i__13935 + (1));
seq__13932 = G__13945;
chunk__13933 = G__13946;
count__13934 = G__13947;
i__13935 = G__13948;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13932);
if(temp__5457__auto__){
var seq__13932__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13932__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__13932__$1);
var G__13949 = cljs.core.chunk_rest(seq__13932__$1);
var G__13950 = c__4351__auto__;
var G__13951 = cljs.core.count(c__4351__auto__);
var G__13952 = (0);
seq__13932 = G__13949;
chunk__13933 = G__13950;
count__13934 = G__13951;
i__13935 = G__13952;
continue;
} else {
var map__13939 = cljs.core.first(seq__13932__$1);
var map__13939__$1 = ((((!((map__13939 == null)))?(((((map__13939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13939):map__13939);
var note = map__13939__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13939__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13939__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13939__$1,cljs.core.cst$kw$instrument);
var at_13953 = (time + from);
var synth_instance_13954 = (function (){var G__13941 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__13941) : instrument.call(null,G__13941));
})();
var connected_instance_13955 = mecca.audio.synthesis.connect(synth_instance_13954,mecca.audio.synthesis.destination);
(connected_instance_13955.cljs$core$IFn$_invoke$arity$3 ? connected_instance_13955.cljs$core$IFn$_invoke$arity$3(audiocontext,at_13953,duration) : connected_instance_13955.call(null,audiocontext,at_13953,duration));


var G__13956 = cljs.core.next(seq__13932__$1);
var G__13957 = null;
var G__13958 = (0);
var G__13959 = (0);
seq__13932 = G__13956;
chunk__13933 = G__13957;
count__13934 = G__13958;
i__13935 = G__13959;
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
