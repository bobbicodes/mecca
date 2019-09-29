// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.audio.synthesis');
goog.require('cljs.core');
/**
 * Return the current time as recorded by the audio context.
 */
mecca.audio.synthesis.current_time = (function mecca$audio$synthesis$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.audio.synthesis.current_time', mecca.audio.synthesis.current_time);
mecca.audio.synthesis.subgraph = (function mecca$audio$synthesis$subgraph(var_args){
var G__11859 = arguments.length;
switch (G__11859) {
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output], null);
});

mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return mecca.audio.synthesis.subgraph.call(null,singleton,singleton);
});

mecca.audio.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
mecca.audio.synthesis.source = (function mecca$audio$synthesis$source(node){
return mecca.audio.synthesis.subgraph.call(null,null,node);
});
/**
 * A graph of synthesis nodes without an output,
 *   so it can't connect to another graph.
 */
mecca.audio.synthesis.sink = (function mecca$audio$synthesis$sink(node){
return mecca.audio.synthesis.subgraph.call(null,node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
mecca.audio.synthesis.run_with = (function mecca$audio$synthesis$run_with(synth,context,at,duration){
return synth.call(null,context,at,duration);
});
goog.exportSymbol('mecca.audio.synthesis.run_with', mecca.audio.synthesis.run_with);
/**
 * The destination of the audio context i.e. the speakers.
 */
mecca.audio.synthesis.destination = (function mecca$audio$synthesis$destination(context,at,duration){
return mecca.audio.synthesis.sink.call(null,context.destination);
});
goog.exportSymbol('mecca.audio.synthesis.destination', mecca.audio.synthesis.destination);
mecca.audio.synthesis.plug = (function mecca$audio$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(mecca.audio.synthesis.run_with.call(null,input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
mecca.audio.synthesis.gain = (function mecca$audio$synthesis$gain(level){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.call(null,(function (){var G__11861 = context.createGain();
mecca.audio.synthesis.plug.call(null,G__11861.gain,level,context,at,duration);

return G__11861;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.gain', mecca.audio.synthesis.gain);
/**
 * Pass the signal through unaltered.
 */
mecca.audio.synthesis.pass_through = mecca.audio.synthesis.gain.call(null,1.0);
goog.exportSymbol('mecca.audio.synthesis.pass_through', mecca.audio.synthesis.pass_through);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
mecca.audio.synthesis.envelope = (function mecca$audio$synthesis$envelope(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11869 = arguments.length;
var i__4532__auto___11870 = (0);
while(true){
if((i__4532__auto___11870 < len__4531__auto___11869)){
args__4534__auto__.push((arguments[i__4532__auto___11870]));

var G__11871 = (i__4532__auto___11870 + (1));
i__4532__auto___11870 = G__11871;
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

var x_11872 = at;
var coordinates_11873 = corners;
while(true){
var temp__5457__auto___11874 = coordinates_11873;
if(cljs.core.truth_(temp__5457__auto___11874)){
var vec__11863_11875 = temp__5457__auto___11874;
var seq__11864_11876 = cljs.core.seq.call(null,vec__11863_11875);
var first__11865_11877 = cljs.core.first.call(null,seq__11864_11876);
var seq__11864_11878__$1 = cljs.core.next.call(null,seq__11864_11876);
var vec__11866_11879 = first__11865_11877;
var dx_11880 = cljs.core.nth.call(null,vec__11866_11879,(0),null);
var y_11881 = cljs.core.nth.call(null,vec__11866_11879,(1),null);
var remaining_11882 = seq__11864_11878__$1;
audio_node.gain.linearRampToValueAtTime(y_11881,(x_11872 + dx_11880));

var G__11883 = (dx_11880 + x_11872);
var G__11884 = remaining_11882;
x_11872 = G__11883;
coordinates_11873 = G__11884;
continue;
} else {
}
break;
}

return mecca.audio.synthesis.subgraph.call(null,audio_node);
});
});

mecca.audio.synthesis.envelope.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.audio.synthesis.envelope.cljs$lang$applyTo = (function (seq11862){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11862));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
mecca.audio.synthesis.adshr = (function mecca$audio$synthesis$adshr(attack,decay,sustain,hold,release){
return mecca.audio.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null));
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
var node = mecca.audio.synthesis.adshr.call(null,attack,decay,sustain,hold,release);
return mecca.audio.synthesis.run_with.call(null,node,context,at,duration);
});
});
goog.exportSymbol('mecca.audio.synthesis.adsr', mecca.audio.synthesis.adsr);
/**
 * A simple envelope.
 */
mecca.audio.synthesis.percussive = (function mecca$audio$synthesis$percussive(attack,decay){
return mecca.audio.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null));
});
goog.exportSymbol('mecca.audio.synthesis.percussive', mecca.audio.synthesis.percussive);
/**
 * Like apply, but for the node graphs synths produce.
 */
mecca.audio.synthesis.apply_to_graph = (function mecca$audio$synthesis$apply_to_graph(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11888 = arguments.length;
var i__4532__auto___11889 = (0);
while(true){
if((i__4532__auto___11889 < len__4531__auto___11888)){
args__4534__auto__.push((arguments[i__4532__auto___11889]));

var G__11890 = (i__4532__auto___11889 + (1));
i__4532__auto___11889 = G__11890;
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
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__11885_SHARP_){
return mecca.audio.synthesis.run_with.call(null,p1__11885_SHARP_,context,at,duration);
}),synths));
});
});

mecca.audio.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq11886){
var G__11887 = cljs.core.first.call(null,seq11886);
var seq11886__$1 = cljs.core.next.call(null,seq11886);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11887,seq11886__$1);
});

mecca.audio.synthesis.join_in_series = (function mecca$audio$synthesis$join_in_series(graph1,graph2){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph1).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph2));

return mecca.audio.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph1),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph2));
});
/**
 * Use the output of one synth as the input to another.
 */
mecca.audio.synthesis.connect = (function mecca$audio$synthesis$connect(upstream_synth,downstream_synth){
return mecca.audio.synthesis.apply_to_graph.call(null,mecca.audio.synthesis.join_in_series,upstream_synth,downstream_synth);
});
goog.exportSymbol('mecca.audio.synthesis.connect', mecca.audio.synthesis.connect);
/**
 * Connect synths in series.
 */
mecca.audio.synthesis.connect__GT_ = (function mecca$audio$synthesis$connect__GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11892 = arguments.length;
var i__4532__auto___11893 = (0);
while(true){
if((i__4532__auto___11893 < len__4531__auto___11892)){
args__4534__auto__.push((arguments[i__4532__auto___11893]));

var G__11894 = (i__4532__auto___11893 + (1));
i__4532__auto___11893 = G__11894;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mecca.audio.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mecca.audio.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.call(null,mecca.audio.synthesis.connect,nodes);
});

mecca.audio.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.audio.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq11891){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11891));
});

mecca.audio.synthesis.join_in_parallel = (function mecca$audio$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11902 = arguments.length;
var i__4532__auto___11903 = (0);
while(true){
if((i__4532__auto___11903 < len__4531__auto___11902)){
args__4534__auto__.push((arguments[i__4532__auto___11903]));

var G__11904 = (i__4532__auto___11903 + (1));
i__4532__auto___11903 = G__11904;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__11898_11905 = cljs.core.seq.call(null,graphs);
var chunk__11899_11906 = null;
var count__11900_11907 = (0);
var i__11901_11908 = (0);
while(true){
if((i__11901_11908 < count__11900_11907)){
var graph_11909 = cljs.core._nth.call(null,chunk__11899_11906,i__11901_11908);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_11909).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_11909))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_11909));
} else {
}


var G__11910 = seq__11898_11905;
var G__11911 = chunk__11899_11906;
var G__11912 = count__11900_11907;
var G__11913 = (i__11901_11908 + (1));
seq__11898_11905 = G__11910;
chunk__11899_11906 = G__11911;
count__11900_11907 = G__11912;
i__11901_11908 = G__11913;
continue;
} else {
var temp__5457__auto___11914 = cljs.core.seq.call(null,seq__11898_11905);
if(temp__5457__auto___11914){
var seq__11898_11915__$1 = temp__5457__auto___11914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11898_11915__$1)){
var c__4351__auto___11916 = cljs.core.chunk_first.call(null,seq__11898_11915__$1);
var G__11917 = cljs.core.chunk_rest.call(null,seq__11898_11915__$1);
var G__11918 = c__4351__auto___11916;
var G__11919 = cljs.core.count.call(null,c__4351__auto___11916);
var G__11920 = (0);
seq__11898_11905 = G__11917;
chunk__11899_11906 = G__11918;
count__11900_11907 = G__11919;
i__11901_11908 = G__11920;
continue;
} else {
var graph_11921 = cljs.core.first.call(null,seq__11898_11915__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_11921).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_11921))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_11921));
} else {
}


var G__11922 = cljs.core.next.call(null,seq__11898_11915__$1);
var G__11923 = null;
var G__11924 = (0);
var G__11925 = (0);
seq__11898_11905 = G__11922;
chunk__11899_11906 = G__11923;
count__11900_11907 = G__11924;
i__11901_11908 = G__11925;
continue;
}
} else {
}
}
break;
}

return mecca.audio.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(upstream),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(downstream));
});

mecca.audio.synthesis.join_in_parallel.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mecca.audio.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq11895){
var G__11896 = cljs.core.first.call(null,seq11895);
var seq11895__$1 = cljs.core.next.call(null,seq11895);
var G__11897 = cljs.core.first.call(null,seq11895__$1);
var seq11895__$2 = cljs.core.next.call(null,seq11895__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11896,G__11897,seq11895__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.audio.synthesis.add = (function mecca$audio$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11927 = arguments.length;
var i__4532__auto___11928 = (0);
while(true){
if((i__4532__auto___11928 < len__4531__auto___11927)){
args__4534__auto__.push((arguments[i__4532__auto___11928]));

var G__11929 = (i__4532__auto___11928 + (1));
i__4532__auto___11928 = G__11929;
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
return cljs.core.apply.call(null,mecca.audio.synthesis.apply_to_graph,mecca.audio.synthesis.join_in_parallel,mecca.audio.synthesis.pass_through,mecca.audio.synthesis.pass_through,synths);
});

mecca.audio.synthesis.add.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mecca.audio.synthesis.add.cljs$lang$applyTo = (function (seq11926){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11926));
});

mecca.audio.synthesis.raw_buffer = (function mecca$audio$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__11930_11934 = cljs.core.seq.call(null,cljs.core.range.call(null,frame_count));
var chunk__11931_11935 = null;
var count__11932_11936 = (0);
var i__11933_11937 = (0);
while(true){
if((i__11933_11937 < count__11932_11936)){
var i_11938 = cljs.core._nth.call(null,chunk__11931_11935,i__11933_11937);
(data[i_11938] = generate_bit_BANG_.call(null,i_11938));


var G__11939 = seq__11930_11934;
var G__11940 = chunk__11931_11935;
var G__11941 = count__11932_11936;
var G__11942 = (i__11933_11937 + (1));
seq__11930_11934 = G__11939;
chunk__11931_11935 = G__11940;
count__11932_11936 = G__11941;
i__11933_11937 = G__11942;
continue;
} else {
var temp__5457__auto___11943 = cljs.core.seq.call(null,seq__11930_11934);
if(temp__5457__auto___11943){
var seq__11930_11944__$1 = temp__5457__auto___11943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11930_11944__$1)){
var c__4351__auto___11945 = cljs.core.chunk_first.call(null,seq__11930_11944__$1);
var G__11946 = cljs.core.chunk_rest.call(null,seq__11930_11944__$1);
var G__11947 = c__4351__auto___11945;
var G__11948 = cljs.core.count.call(null,c__4351__auto___11945);
var G__11949 = (0);
seq__11930_11934 = G__11946;
chunk__11931_11935 = G__11947;
count__11932_11936 = G__11948;
i__11933_11937 = G__11949;
continue;
} else {
var i_11950 = cljs.core.first.call(null,seq__11930_11944__$1);
(data[i_11950] = generate_bit_BANG_.call(null,i_11950));


var G__11951 = cljs.core.next.call(null,seq__11930_11944__$1);
var G__11952 = null;
var G__11953 = (0);
var G__11954 = (0);
seq__11930_11934 = G__11951;
chunk__11931_11935 = G__11952;
count__11932_11936 = G__11953;
i__11933_11937 = G__11954;
continue;
}
} else {
}
}
break;
}

return buffer;
});
mecca.audio.synthesis.buffer = cljs.core.memoize.call(null,mecca.audio.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
mecca.audio.synthesis.noise = (function mecca$audio$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.source.call(null,(function (){var G__11955 = context.createBufferSource();
G__11955.buffer = mecca.audio.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__11955.start(at);

return G__11955;
})());
});
});
/**
 * Random noise.
 */
mecca.audio.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return mecca.audio.synthesis.noise.call(null,white);
})();
goog.exportSymbol('mecca.audio.synthesis.white_noise', mecca.audio.synthesis.white_noise);
/**
 * Make a constant value by creating noise with a fixed value.
 */
mecca.audio.synthesis.constant = (function mecca$audio$synthesis$constant(x){
return mecca.audio.synthesis.noise.call(null,cljs.core.constantly.call(null,x));
});
goog.exportSymbol('mecca.audio.synthesis.constant', mecca.audio.synthesis.constant);
/**
 * A periodic wave.
 */
mecca.audio.synthesis.oscillator = (function mecca$audio$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return mecca.audio.synthesis.source.call(null,(function (){var G__11956 = context.createOscillator();
G__11956.frequency.value = (0);

mecca.audio.synthesis.plug.call(null,G__11956.frequency,freq,context,at,duration);

G__11956.type = type;

G__11956.start(at);

G__11956.stop(((at + duration) + 1.0));

return G__11956;
})());
});
});
mecca.audio.synthesis.sine = cljs.core.partial.call(null,mecca.audio.synthesis.oscillator,"sine");
goog.exportSymbol('mecca.audio.synthesis.sine', mecca.audio.synthesis.sine);
mecca.audio.synthesis.sawtooth = cljs.core.partial.call(null,mecca.audio.synthesis.oscillator,"sawtooth");
goog.exportSymbol('mecca.audio.synthesis.sawtooth', mecca.audio.synthesis.sawtooth);
mecca.audio.synthesis.square = cljs.core.partial.call(null,mecca.audio.synthesis.oscillator,"square");
goog.exportSymbol('mecca.audio.synthesis.square', mecca.audio.synthesis.square);
mecca.audio.synthesis.triangle = cljs.core.partial.call(null,mecca.audio.synthesis.oscillator,"triangle");
goog.exportSymbol('mecca.audio.synthesis.triangle', mecca.audio.synthesis.triangle);
/**
 * Attenuate frequencies beyond the cutoff, and intensify
 *   the cutoff frequency based on the value of q.
 */
mecca.audio.synthesis.biquad_filter = (function mecca$audio$synthesis$biquad_filter(var_args){
var G__11958 = arguments.length;
switch (G__11958) {
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
return mecca.audio.synthesis.biquad_filter.call(null,type,freq,1.0);
});

mecca.audio.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.call(null,(function (){var G__11959 = context.createBiquadFilter();
G__11959.frequency.value = (0);

mecca.audio.synthesis.plug.call(null,G__11959.frequency,freq,context,at,duration);

mecca.audio.synthesis.plug.call(null,G__11959.Q,q,context,at,duration);

G__11959.type = type;

return G__11959;
})());
});
});

mecca.audio.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

mecca.audio.synthesis.low_pass = cljs.core.partial.call(null,mecca.audio.synthesis.biquad_filter,"lowpass");
goog.exportSymbol('mecca.audio.synthesis.low_pass', mecca.audio.synthesis.low_pass);
mecca.audio.synthesis.high_pass = cljs.core.partial.call(null,mecca.audio.synthesis.biquad_filter,"highpass");
goog.exportSymbol('mecca.audio.synthesis.high_pass', mecca.audio.synthesis.high_pass);
/**
 * Pan the signal left (-1) or right (1).
 */
mecca.audio.synthesis.stereo_panner = (function mecca$audio$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.call(null,(function (){var G__11961 = context.createStereoPanner();
mecca.audio.synthesis.plug.call(null,G__11961.pan,pan,context,at,duration);

return G__11961;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.stereo_panner', mecca.audio.synthesis.stereo_panner);
/**
 * Delay the signal.
 */
mecca.audio.synthesis.delay_line = (function mecca$audio$synthesis$delay_line(seconds){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__11962 = context.createDelay(maximum);
mecca.audio.synthesis.plug.call(null,G__11962.delayTime,seconds,context,at,duration);

return G__11962;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.delay_line', mecca.audio.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.audio.synthesis.convolver = (function mecca$audio$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.call(null,(function (){var G__11963 = context.createConvolver();
G__11963.buffer = mecca.audio.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__11963;
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
return mecca.audio.synthesis.convolver.call(null,logarithmic_decay);
})();
goog.exportSymbol('mecca.audio.synthesis.reverb', mecca.audio.synthesis.reverb);
/**
 * Mix the original signal with one with the effect applied.
 */
mecca.audio.synthesis.enhance = (function mecca$audio$synthesis$enhance(effect,level){
return mecca.audio.synthesis.add.call(null,mecca.audio.synthesis.pass_through,mecca.audio.synthesis.connect__GT_.call(null,effect,mecca.audio.synthesis.gain.call(null,level)));
});
goog.exportSymbol('mecca.audio.synthesis.enhance', mecca.audio.synthesis.enhance);
mecca.audio.synthesis.align_concert_a = (function mecca$audio$synthesis$align_concert_a(tuning){
return (function (midi){
return (tuning.call(null,midi) * ((440) / tuning.call(null,(69))));
});
});
mecca.audio.synthesis.temper = (function mecca$audio$synthesis$temper(midi,ratios){
if((midi < (0))){
return (((1) / (2)) * mecca.audio.synthesis.temper.call(null,(midi + (12)),ratios));
} else {
if((midi > (11))){
return ((2) * mecca.audio.synthesis.temper.call(null,(midi - (12)),ratios));
} else {
return cljs.core.nth.call(null,ratios,midi);

}
}
});
mecca.audio.synthesis.tune = (function mecca$audio$synthesis$tune(root,incremental_ratios){
var geometric_progression = cljs.core.partial.call(null,cljs.core.reductions,cljs.core._STAR_,(1));
var ratios = cljs.core.sort.call(null,cljs.core.map.call(null,((function (geometric_progression){
return (function mecca$audio$synthesis$tune_$_normalise(ratio){
if((ratio < (2))){
return ratio;
} else {
return mecca$audio$synthesis$tune_$_normalise.call(null,(ratio / (2)));
}
});})(geometric_progression))
,geometric_progression.call(null,incremental_ratios)));
var tuning = ((function (geometric_progression,ratios){
return (function (midi){
return mecca.audio.synthesis.temper.call(null,(midi - root),ratios);
});})(geometric_progression,ratios))
;
return mecca.audio.synthesis.align_concert_a.call(null,tuning);
});
/**
 * Converts midi to hertz using equal temperament.
 *   e.g. (equal 69)
 */
mecca.audio.synthesis.equal = mecca.audio.synthesis.tune.call(null,(69),cljs.core.repeat.call(null,(11),Math.pow((2),((1) / (12)))));
/**
 * Take a sequence of notes and play them from a set point in an audiocontext.
 */
mecca.audio.synthesis.play_from_BANG_ = (function mecca$audio$synthesis$play_from_BANG_(audiocontext,from,notes){
var seq__11964 = cljs.core.seq.call(null,notes);
var chunk__11965 = null;
var count__11966 = (0);
var i__11967 = (0);
while(true){
if((i__11967 < count__11966)){
var map__11968 = cljs.core._nth.call(null,chunk__11965,i__11967);
var map__11968__$1 = ((((!((map__11968 == null)))?(((((map__11968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11968):map__11968);
var note = map__11968__$1;
var time = cljs.core.get.call(null,map__11968__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__11968__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__11968__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_11972 = (time + from);
var synth_instance_11973 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),mecca.audio.synthesis.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_11974 = mecca.audio.synthesis.connect.call(null,synth_instance_11973,mecca.audio.synthesis.destination);
connected_instance_11974.call(null,audiocontext,at_11972,duration);


var G__11975 = seq__11964;
var G__11976 = chunk__11965;
var G__11977 = count__11966;
var G__11978 = (i__11967 + (1));
seq__11964 = G__11975;
chunk__11965 = G__11976;
count__11966 = G__11977;
i__11967 = G__11978;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11964);
if(temp__5457__auto__){
var seq__11964__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11964__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11964__$1);
var G__11979 = cljs.core.chunk_rest.call(null,seq__11964__$1);
var G__11980 = c__4351__auto__;
var G__11981 = cljs.core.count.call(null,c__4351__auto__);
var G__11982 = (0);
seq__11964 = G__11979;
chunk__11965 = G__11980;
count__11966 = G__11981;
i__11967 = G__11982;
continue;
} else {
var map__11970 = cljs.core.first.call(null,seq__11964__$1);
var map__11970__$1 = ((((!((map__11970 == null)))?(((((map__11970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11970):map__11970);
var note = map__11970__$1;
var time = cljs.core.get.call(null,map__11970__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__11970__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__11970__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_11983 = (time + from);
var synth_instance_11984 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),mecca.audio.synthesis.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_11985 = mecca.audio.synthesis.connect.call(null,synth_instance_11984,mecca.audio.synthesis.destination);
connected_instance_11985.call(null,audiocontext,at_11983,duration);


var G__11986 = cljs.core.next.call(null,seq__11964__$1);
var G__11987 = null;
var G__11988 = (0);
var G__11989 = (0);
seq__11964 = G__11986;
chunk__11965 = G__11987;
count__11966 = G__11988;
i__11967 = G__11989;
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
return mecca.audio.synthesis.play_from_BANG_.call(null,audiocontext,mecca.audio.synthesis.current_time.call(null,audiocontext),notes);
});

//# sourceMappingURL=synthesis.js.map
