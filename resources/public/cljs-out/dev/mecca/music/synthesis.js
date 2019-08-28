// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music.synthesis');
goog.require('cljs.core');
/**
 * Return the current time as recorded by the audio context.
 */
mecca.music.synthesis.current_time = (function mecca$music$synthesis$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.synthesis.current_time', mecca.music.synthesis.current_time);
mecca.music.synthesis.subgraph = (function mecca$music$synthesis$subgraph(var_args){
var G__16881 = arguments.length;
switch (G__16881) {
case 2:
return mecca.music.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return mecca.music.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.music.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output], null);
});

mecca.music.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return mecca.music.synthesis.subgraph.call(null,singleton,singleton);
});

mecca.music.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
mecca.music.synthesis.source = (function mecca$music$synthesis$source(node){
return mecca.music.synthesis.subgraph.call(null,null,node);
});
/**
 * A graph of synthesis nodes without an output,
 *   so it can't connect to another graph.
 */
mecca.music.synthesis.sink = (function mecca$music$synthesis$sink(node){
return mecca.music.synthesis.subgraph.call(null,node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
mecca.music.synthesis.run_with = (function mecca$music$synthesis$run_with(synth,context,at,duration){
return synth.call(null,context,at,duration);
});
goog.exportSymbol('mecca.music.synthesis.run_with', mecca.music.synthesis.run_with);
/**
 * The destination of the audio context i.e. the speakers.
 */
mecca.music.synthesis.destination = (function mecca$music$synthesis$destination(context,at,duration){
return mecca.music.synthesis.sink.call(null,context.destination);
});
goog.exportSymbol('mecca.music.synthesis.destination', mecca.music.synthesis.destination);
mecca.music.synthesis.plug = (function mecca$music$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(mecca.music.synthesis.run_with.call(null,input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
mecca.music.synthesis.gain = (function mecca$music$synthesis$gain(level){
return (function (context,at,duration){
return mecca.music.synthesis.subgraph.call(null,(function (){var G__16883 = context.createGain();
mecca.music.synthesis.plug.call(null,G__16883.gain,level,context,at,duration);

return G__16883;
})());
});
});
goog.exportSymbol('mecca.music.synthesis.gain', mecca.music.synthesis.gain);
/**
 * Pass the signal through unaltered.
 */
mecca.music.synthesis.pass_through = mecca.music.synthesis.gain.call(null,1.0);
goog.exportSymbol('mecca.music.synthesis.pass_through', mecca.music.synthesis.pass_through);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
mecca.music.synthesis.envelope = (function mecca$music$synthesis$envelope(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16891 = arguments.length;
var i__4532__auto___16892 = (0);
while(true){
if((i__4532__auto___16892 < len__4531__auto___16891)){
args__4534__auto__.push((arguments[i__4532__auto___16892]));

var G__16893 = (i__4532__auto___16892 + (1));
i__4532__auto___16892 = G__16893;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.music.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mecca.music.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_16894 = at;
var coordinates_16895 = corners;
while(true){
var temp__5457__auto___16896 = coordinates_16895;
if(cljs.core.truth_(temp__5457__auto___16896)){
var vec__16885_16897 = temp__5457__auto___16896;
var seq__16886_16898 = cljs.core.seq.call(null,vec__16885_16897);
var first__16887_16899 = cljs.core.first.call(null,seq__16886_16898);
var seq__16886_16900__$1 = cljs.core.next.call(null,seq__16886_16898);
var vec__16888_16901 = first__16887_16899;
var dx_16902 = cljs.core.nth.call(null,vec__16888_16901,(0),null);
var y_16903 = cljs.core.nth.call(null,vec__16888_16901,(1),null);
var remaining_16904 = seq__16886_16900__$1;
audio_node.gain.linearRampToValueAtTime(y_16903,(x_16894 + dx_16902));

var G__16905 = (dx_16902 + x_16894);
var G__16906 = remaining_16904;
x_16894 = G__16905;
coordinates_16895 = G__16906;
continue;
} else {
}
break;
}

return mecca.music.synthesis.subgraph.call(null,audio_node);
});
});

mecca.music.synthesis.envelope.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.music.synthesis.envelope.cljs$lang$applyTo = (function (seq16884){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16884));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
mecca.music.synthesis.adshr = (function mecca$music$synthesis$adshr(attack,decay,sustain,hold,release){
return mecca.music.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null));
});
/**
 * A four-stage envelope.
 */
mecca.music.synthesis.adsr = (function mecca$music$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - release);
var hold = (function (){var x__4037__auto__ = 0.0;
var y__4038__auto__ = remainder;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var node = mecca.music.synthesis.adshr.call(null,attack,decay,sustain,hold,release);
return mecca.music.synthesis.run_with.call(null,node,context,at,duration);
});
});
goog.exportSymbol('mecca.music.synthesis.adsr', mecca.music.synthesis.adsr);
/**
 * A simple envelope.
 */
mecca.music.synthesis.percussive = (function mecca$music$synthesis$percussive(attack,decay){
return mecca.music.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null));
});
goog.exportSymbol('mecca.music.synthesis.percussive', mecca.music.synthesis.percussive);
/**
 * Like apply, but for the node graphs synths produce.
 */
mecca.music.synthesis.apply_to_graph = (function mecca$music$synthesis$apply_to_graph(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16910 = arguments.length;
var i__4532__auto___16911 = (0);
while(true){
if((i__4532__auto___16911 < len__4531__auto___16910)){
args__4534__auto__.push((arguments[i__4532__auto___16911]));

var G__16912 = (i__4532__auto___16911 + (1));
i__4532__auto___16911 = G__16912;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mecca.music.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mecca.music.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__16907_SHARP_){
return mecca.music.synthesis.run_with.call(null,p1__16907_SHARP_,context,at,duration);
}),synths));
});
});

mecca.music.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.music.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq16908){
var G__16909 = cljs.core.first.call(null,seq16908);
var seq16908__$1 = cljs.core.next.call(null,seq16908);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16909,seq16908__$1);
});

mecca.music.synthesis.join_in_series = (function mecca$music$synthesis$join_in_series(graph1,graph2){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph1).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph2));

return mecca.music.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph1),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph2));
});
/**
 * Use the output of one synth as the input to another.
 */
mecca.music.synthesis.connect = (function mecca$music$synthesis$connect(upstream_synth,downstream_synth){
return mecca.music.synthesis.apply_to_graph.call(null,mecca.music.synthesis.join_in_series,upstream_synth,downstream_synth);
});
goog.exportSymbol('mecca.music.synthesis.connect', mecca.music.synthesis.connect);
/**
 * Connect synths in series.
 */
mecca.music.synthesis.connect__GT_ = (function mecca$music$synthesis$connect__GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16914 = arguments.length;
var i__4532__auto___16915 = (0);
while(true){
if((i__4532__auto___16915 < len__4531__auto___16914)){
args__4534__auto__.push((arguments[i__4532__auto___16915]));

var G__16916 = (i__4532__auto___16915 + (1));
i__4532__auto___16915 = G__16916;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.music.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mecca.music.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.call(null,mecca.music.synthesis.connect,nodes);
});

mecca.music.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.music.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq16913){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16913));
});

mecca.music.synthesis.join_in_parallel = (function mecca$music$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16924 = arguments.length;
var i__4532__auto___16925 = (0);
while(true){
if((i__4532__auto___16925 < len__4531__auto___16924)){
args__4534__auto__.push((arguments[i__4532__auto___16925]));

var G__16926 = (i__4532__auto___16925 + (1));
i__4532__auto___16925 = G__16926;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.music.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.music.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__16920_16927 = cljs.core.seq.call(null,graphs);
var chunk__16921_16928 = null;
var count__16922_16929 = (0);
var i__16923_16930 = (0);
while(true){
if((i__16923_16930 < count__16922_16929)){
var graph_16931 = cljs.core._nth.call(null,chunk__16921_16928,i__16923_16930);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_16931).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_16931))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_16931));
} else {
}


var G__16932 = seq__16920_16927;
var G__16933 = chunk__16921_16928;
var G__16934 = count__16922_16929;
var G__16935 = (i__16923_16930 + (1));
seq__16920_16927 = G__16932;
chunk__16921_16928 = G__16933;
count__16922_16929 = G__16934;
i__16923_16930 = G__16935;
continue;
} else {
var temp__5457__auto___16936 = cljs.core.seq.call(null,seq__16920_16927);
if(temp__5457__auto___16936){
var seq__16920_16937__$1 = temp__5457__auto___16936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16920_16937__$1)){
var c__4351__auto___16938 = cljs.core.chunk_first.call(null,seq__16920_16937__$1);
var G__16939 = cljs.core.chunk_rest.call(null,seq__16920_16937__$1);
var G__16940 = c__4351__auto___16938;
var G__16941 = cljs.core.count.call(null,c__4351__auto___16938);
var G__16942 = (0);
seq__16920_16927 = G__16939;
chunk__16921_16928 = G__16940;
count__16922_16929 = G__16941;
i__16923_16930 = G__16942;
continue;
} else {
var graph_16943 = cljs.core.first.call(null,seq__16920_16937__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_16943).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_16943))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_16943));
} else {
}


var G__16944 = cljs.core.next.call(null,seq__16920_16937__$1);
var G__16945 = null;
var G__16946 = (0);
var G__16947 = (0);
seq__16920_16927 = G__16944;
chunk__16921_16928 = G__16945;
count__16922_16929 = G__16946;
i__16923_16930 = G__16947;
continue;
}
} else {
}
}
break;
}

return mecca.music.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(upstream),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(downstream));
});

mecca.music.synthesis.join_in_parallel.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mecca.music.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq16917){
var G__16918 = cljs.core.first.call(null,seq16917);
var seq16917__$1 = cljs.core.next.call(null,seq16917);
var G__16919 = cljs.core.first.call(null,seq16917__$1);
var seq16917__$2 = cljs.core.next.call(null,seq16917__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16918,G__16919,seq16917__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.music.synthesis.add = (function mecca$music$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16949 = arguments.length;
var i__4532__auto___16950 = (0);
while(true){
if((i__4532__auto___16950 < len__4531__auto___16949)){
args__4534__auto__.push((arguments[i__4532__auto___16950]));

var G__16951 = (i__4532__auto___16950 + (1));
i__4532__auto___16950 = G__16951;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.music.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});
goog.exportSymbol('mecca.music.synthesis.add', mecca.music.synthesis.add);

mecca.music.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.call(null,mecca.music.synthesis.apply_to_graph,mecca.music.synthesis.join_in_parallel,mecca.music.synthesis.pass_through,mecca.music.synthesis.pass_through,synths);
});

mecca.music.synthesis.add.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.music.synthesis.add.cljs$lang$applyTo = (function (seq16948){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16948));
});

mecca.music.synthesis.raw_buffer = (function mecca$music$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__16952_16956 = cljs.core.seq.call(null,cljs.core.range.call(null,frame_count));
var chunk__16953_16957 = null;
var count__16954_16958 = (0);
var i__16955_16959 = (0);
while(true){
if((i__16955_16959 < count__16954_16958)){
var i_16960 = cljs.core._nth.call(null,chunk__16953_16957,i__16955_16959);
(data[i_16960] = generate_bit_BANG_.call(null,i_16960));


var G__16961 = seq__16952_16956;
var G__16962 = chunk__16953_16957;
var G__16963 = count__16954_16958;
var G__16964 = (i__16955_16959 + (1));
seq__16952_16956 = G__16961;
chunk__16953_16957 = G__16962;
count__16954_16958 = G__16963;
i__16955_16959 = G__16964;
continue;
} else {
var temp__5457__auto___16965 = cljs.core.seq.call(null,seq__16952_16956);
if(temp__5457__auto___16965){
var seq__16952_16966__$1 = temp__5457__auto___16965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16952_16966__$1)){
var c__4351__auto___16967 = cljs.core.chunk_first.call(null,seq__16952_16966__$1);
var G__16968 = cljs.core.chunk_rest.call(null,seq__16952_16966__$1);
var G__16969 = c__4351__auto___16967;
var G__16970 = cljs.core.count.call(null,c__4351__auto___16967);
var G__16971 = (0);
seq__16952_16956 = G__16968;
chunk__16953_16957 = G__16969;
count__16954_16958 = G__16970;
i__16955_16959 = G__16971;
continue;
} else {
var i_16972 = cljs.core.first.call(null,seq__16952_16966__$1);
(data[i_16972] = generate_bit_BANG_.call(null,i_16972));


var G__16973 = cljs.core.next.call(null,seq__16952_16966__$1);
var G__16974 = null;
var G__16975 = (0);
var G__16976 = (0);
seq__16952_16956 = G__16973;
chunk__16953_16957 = G__16974;
count__16954_16958 = G__16975;
i__16955_16959 = G__16976;
continue;
}
} else {
}
}
break;
}

return buffer;
});
mecca.music.synthesis.buffer = cljs.core.memoize.call(null,mecca.music.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
mecca.music.synthesis.noise = (function mecca$music$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.music.synthesis.source.call(null,(function (){var G__16977 = context.createBufferSource();
G__16977.buffer = mecca.music.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__16977.start(at);

return G__16977;
})());
});
});
/**
 * Random noise.
 */
mecca.music.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return mecca.music.synthesis.noise.call(null,white);
})();
goog.exportSymbol('mecca.music.synthesis.white_noise', mecca.music.synthesis.white_noise);
/**
 * Make a constant value by creating noise with a fixed value.
 */
mecca.music.synthesis.constant = (function mecca$music$synthesis$constant(x){
return mecca.music.synthesis.noise.call(null,cljs.core.constantly.call(null,x));
});
goog.exportSymbol('mecca.music.synthesis.constant', mecca.music.synthesis.constant);
/**
 * A periodic wave.
 */
mecca.music.synthesis.oscillator = (function mecca$music$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return mecca.music.synthesis.source.call(null,(function (){var G__16978 = context.createOscillator();
G__16978.frequency.value = (0);

mecca.music.synthesis.plug.call(null,G__16978.frequency,freq,context,at,duration);

G__16978.type = type;

G__16978.start(at);

G__16978.stop(((at + duration) + 1.0));

return G__16978;
})());
});
});
mecca.music.synthesis.sine = cljs.core.partial.call(null,mecca.music.synthesis.oscillator,"sine");
goog.exportSymbol('mecca.music.synthesis.sine', mecca.music.synthesis.sine);
mecca.music.synthesis.sawtooth = cljs.core.partial.call(null,mecca.music.synthesis.oscillator,"sawtooth");
goog.exportSymbol('mecca.music.synthesis.sawtooth', mecca.music.synthesis.sawtooth);
mecca.music.synthesis.square = cljs.core.partial.call(null,mecca.music.synthesis.oscillator,"square");
goog.exportSymbol('mecca.music.synthesis.square', mecca.music.synthesis.square);
mecca.music.synthesis.triangle = cljs.core.partial.call(null,mecca.music.synthesis.oscillator,"triangle");
goog.exportSymbol('mecca.music.synthesis.triangle', mecca.music.synthesis.triangle);
/**
 * Attenuate frequencies beyond the cutoff, and intensify
 *   the cutoff frequency based on the value of q.
 */
mecca.music.synthesis.biquad_filter = (function mecca$music$synthesis$biquad_filter(var_args){
var G__16980 = arguments.length;
switch (G__16980) {
case 2:
return mecca.music.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mecca.music.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.music.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return mecca.music.synthesis.biquad_filter.call(null,type,freq,1.0);
});

mecca.music.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return mecca.music.synthesis.subgraph.call(null,(function (){var G__16981 = context.createBiquadFilter();
G__16981.frequency.value = (0);

mecca.music.synthesis.plug.call(null,G__16981.frequency,freq,context,at,duration);

mecca.music.synthesis.plug.call(null,G__16981.Q,q,context,at,duration);

G__16981.type = type;

return G__16981;
})());
});
});

mecca.music.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

mecca.music.synthesis.low_pass = cljs.core.partial.call(null,mecca.music.synthesis.biquad_filter,"lowpass");
goog.exportSymbol('mecca.music.synthesis.low_pass', mecca.music.synthesis.low_pass);
mecca.music.synthesis.high_pass = cljs.core.partial.call(null,mecca.music.synthesis.biquad_filter,"highpass");
goog.exportSymbol('mecca.music.synthesis.high_pass', mecca.music.synthesis.high_pass);
/**
 * Pan the signal left (-1) or right (1).
 */
mecca.music.synthesis.stereo_panner = (function mecca$music$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return mecca.music.synthesis.subgraph.call(null,(function (){var G__16983 = context.createStereoPanner();
mecca.music.synthesis.plug.call(null,G__16983.pan,pan,context,at,duration);

return G__16983;
})());
});
});
goog.exportSymbol('mecca.music.synthesis.stereo_panner', mecca.music.synthesis.stereo_panner);
/**
 * Delay the signal.
 */
mecca.music.synthesis.delay_line = (function mecca$music$synthesis$delay_line(seconds){
return (function (context,at,duration){
return mecca.music.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__16984 = context.createDelay(maximum);
mecca.music.synthesis.plug.call(null,G__16984.delayTime,seconds,context,at,duration);

return G__16984;
})());
});
});
goog.exportSymbol('mecca.music.synthesis.delay_line', mecca.music.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.music.synthesis.convolver = (function mecca$music$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.music.synthesis.subgraph.call(null,(function (){var G__16985 = context.createConvolver();
G__16985.buffer = mecca.music.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__16985;
})());
});
});
/**
 * Crude reverb.
 */
mecca.music.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * Math.pow(((1) - (i / length)),decay));
});})(duration,decay,sample_rate,length))
;
return mecca.music.synthesis.convolver.call(null,logarithmic_decay);
})();
goog.exportSymbol('mecca.music.synthesis.reverb', mecca.music.synthesis.reverb);
/**
 * Mix the original signal with one with the effect applied.
 */
mecca.music.synthesis.enhance = (function mecca$music$synthesis$enhance(effect,level){
return mecca.music.synthesis.add.call(null,mecca.music.synthesis.pass_through,mecca.music.synthesis.connect__GT_.call(null,effect,mecca.music.synthesis.gain.call(null,level)));
});
goog.exportSymbol('mecca.music.synthesis.enhance', mecca.music.synthesis.enhance);
mecca.music.synthesis.align_concert_a = (function mecca$music$synthesis$align_concert_a(tuning){
return (function (midi){
return (tuning.call(null,midi) * ((440) / tuning.call(null,(69))));
});
});
mecca.music.synthesis.temper = (function mecca$music$synthesis$temper(midi,ratios){
if((midi < (0))){
return (((1) / (2)) * mecca.music.synthesis.temper.call(null,(midi + (12)),ratios));
} else {
if((midi > (11))){
return ((2) * mecca.music.synthesis.temper.call(null,(midi - (12)),ratios));
} else {
return cljs.core.nth.call(null,ratios,midi);

}
}
});
mecca.music.synthesis.tune = (function mecca$music$synthesis$tune(root,incremental_ratios){
var geometric_progression = cljs.core.partial.call(null,cljs.core.reductions,cljs.core._STAR_,(1));
var ratios = cljs.core.sort.call(null,cljs.core.map.call(null,((function (geometric_progression){
return (function mecca$music$synthesis$tune_$_normalise(ratio){
if((ratio < (2))){
return ratio;
} else {
return mecca$music$synthesis$tune_$_normalise.call(null,(ratio / (2)));
}
});})(geometric_progression))
,geometric_progression.call(null,incremental_ratios)));
var tuning = ((function (geometric_progression,ratios){
return (function (midi){
return mecca.music.synthesis.temper.call(null,(midi - root),ratios);
});})(geometric_progression,ratios))
;
return mecca.music.synthesis.align_concert_a.call(null,tuning);
});
/**
 * Converts midi to hertz using equal temperament.
 *   e.g. (equal 69)
 */
mecca.music.synthesis.equal = mecca.music.synthesis.tune.call(null,(69),cljs.core.repeat.call(null,(11),Math.pow((2),((1) / (12)))));
/**
 * Take a sequence of notes and play them from a set point in an audiocontext.
 */
mecca.music.synthesis.play_from_BANG_ = (function mecca$music$synthesis$play_from_BANG_(audiocontext,from,notes){
var seq__16986 = cljs.core.seq.call(null,notes);
var chunk__16987 = null;
var count__16988 = (0);
var i__16989 = (0);
while(true){
if((i__16989 < count__16988)){
var map__16990 = cljs.core._nth.call(null,chunk__16987,i__16989);
var map__16990__$1 = ((((!((map__16990 == null)))?(((((map__16990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16990):map__16990);
var note = map__16990__$1;
var time = cljs.core.get.call(null,map__16990__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__16990__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__16990__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_16994 = (time + from);
var synth_instance_16995 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),mecca.music.synthesis.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_16996 = mecca.music.synthesis.connect.call(null,synth_instance_16995,mecca.music.synthesis.destination);
connected_instance_16996.call(null,audiocontext,at_16994,duration);


var G__16997 = seq__16986;
var G__16998 = chunk__16987;
var G__16999 = count__16988;
var G__17000 = (i__16989 + (1));
seq__16986 = G__16997;
chunk__16987 = G__16998;
count__16988 = G__16999;
i__16989 = G__17000;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16986);
if(temp__5457__auto__){
var seq__16986__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16986__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__16986__$1);
var G__17001 = cljs.core.chunk_rest.call(null,seq__16986__$1);
var G__17002 = c__4351__auto__;
var G__17003 = cljs.core.count.call(null,c__4351__auto__);
var G__17004 = (0);
seq__16986 = G__17001;
chunk__16987 = G__17002;
count__16988 = G__17003;
i__16989 = G__17004;
continue;
} else {
var map__16992 = cljs.core.first.call(null,seq__16986__$1);
var map__16992__$1 = ((((!((map__16992 == null)))?(((((map__16992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16992):map__16992);
var note = map__16992__$1;
var time = cljs.core.get.call(null,map__16992__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__16992__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__16992__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_17005 = (time + from);
var synth_instance_17006 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),mecca.music.synthesis.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_17007 = mecca.music.synthesis.connect.call(null,synth_instance_17006,mecca.music.synthesis.destination);
connected_instance_17007.call(null,audiocontext,at_17005,duration);


var G__17008 = cljs.core.next.call(null,seq__16986__$1);
var G__17009 = null;
var G__17010 = (0);
var G__17011 = (0);
seq__16986 = G__17008;
chunk__16987 = G__17009;
count__16988 = G__17010;
i__16989 = G__17011;
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
mecca.music.synthesis.play_BANG_ = (function mecca$music$synthesis$play_BANG_(audiocontext,notes){
return mecca.music.synthesis.play_from_BANG_.call(null,audiocontext,mecca.music.synthesis.current_time.call(null,audiocontext),notes);
});

//# sourceMappingURL=synthesis.js.map
