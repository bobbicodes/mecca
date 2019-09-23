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
var G__12648 = arguments.length;
switch (G__12648) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12650 = context.createGain();
mecca.audio.synthesis.plug(G__12650.gain,level,context,at,duration);

return G__12650;
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
var len__4531__auto___12658 = arguments.length;
var i__4532__auto___12659 = (0);
while(true){
if((i__4532__auto___12659 < len__4531__auto___12658)){
args__4534__auto__.push((arguments[i__4532__auto___12659]));

var G__12660 = (i__4532__auto___12659 + (1));
i__4532__auto___12659 = G__12660;
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

var x_12661 = at;
var coordinates_12662 = corners;
while(true){
var temp__5457__auto___12663 = coordinates_12662;
if(cljs.core.truth_(temp__5457__auto___12663)){
var vec__12652_12664 = temp__5457__auto___12663;
var seq__12653_12665 = cljs.core.seq(vec__12652_12664);
var first__12654_12666 = cljs.core.first(seq__12653_12665);
var seq__12653_12667__$1 = cljs.core.next(seq__12653_12665);
var vec__12655_12668 = first__12654_12666;
var dx_12669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12655_12668,(0),null);
var y_12670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12655_12668,(1),null);
var remaining_12671 = seq__12653_12667__$1;
audio_node.gain.linearRampToValueAtTime(y_12670,(x_12661 + dx_12669));

var G__12672 = (dx_12669 + x_12661);
var G__12673 = remaining_12671;
x_12661 = G__12672;
coordinates_12662 = G__12673;
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
mecca.audio.synthesis.envelope.cljs$lang$applyTo = (function (seq12651){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12651));
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
var len__4531__auto___12677 = arguments.length;
var i__4532__auto___12678 = (0);
while(true){
if((i__4532__auto___12678 < len__4531__auto___12677)){
args__4534__auto__.push((arguments[i__4532__auto___12678]));

var G__12679 = (i__4532__auto___12678 + (1));
i__4532__auto___12678 = G__12679;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12674_SHARP_){
return mecca.audio.synthesis.run_with(p1__12674_SHARP_,context,at,duration);
}),synths));
});
});

mecca.audio.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq12675){
var G__12676 = cljs.core.first(seq12675);
var seq12675__$1 = cljs.core.next(seq12675);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12676,seq12675__$1);
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
var len__4531__auto___12681 = arguments.length;
var i__4532__auto___12682 = (0);
while(true){
if((i__4532__auto___12682 < len__4531__auto___12681)){
args__4534__auto__.push((arguments[i__4532__auto___12682]));

var G__12683 = (i__4532__auto___12682 + (1));
i__4532__auto___12682 = G__12683;
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
mecca.audio.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq12680){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12680));
});

mecca.audio.synthesis.join_in_parallel = (function mecca$audio$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12691 = arguments.length;
var i__4532__auto___12692 = (0);
while(true){
if((i__4532__auto___12692 < len__4531__auto___12691)){
args__4534__auto__.push((arguments[i__4532__auto___12692]));

var G__12693 = (i__4532__auto___12692 + (1));
i__4532__auto___12692 = G__12693;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__12687_12694 = cljs.core.seq(graphs);
var chunk__12688_12695 = null;
var count__12689_12696 = (0);
var i__12690_12697 = (0);
while(true){
if((i__12690_12697 < count__12689_12696)){
var graph_12698 = chunk__12688_12695.cljs$core$IIndexed$_nth$arity$2(null,i__12690_12697);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_12698).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12698))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12698));
} else {
}


var G__12699 = seq__12687_12694;
var G__12700 = chunk__12688_12695;
var G__12701 = count__12689_12696;
var G__12702 = (i__12690_12697 + (1));
seq__12687_12694 = G__12699;
chunk__12688_12695 = G__12700;
count__12689_12696 = G__12701;
i__12690_12697 = G__12702;
continue;
} else {
var temp__5457__auto___12703 = cljs.core.seq(seq__12687_12694);
if(temp__5457__auto___12703){
var seq__12687_12704__$1 = temp__5457__auto___12703;
if(cljs.core.chunked_seq_QMARK_(seq__12687_12704__$1)){
var c__4351__auto___12705 = cljs.core.chunk_first(seq__12687_12704__$1);
var G__12706 = cljs.core.chunk_rest(seq__12687_12704__$1);
var G__12707 = c__4351__auto___12705;
var G__12708 = cljs.core.count(c__4351__auto___12705);
var G__12709 = (0);
seq__12687_12694 = G__12706;
chunk__12688_12695 = G__12707;
count__12689_12696 = G__12708;
i__12690_12697 = G__12709;
continue;
} else {
var graph_12710 = cljs.core.first(seq__12687_12704__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_12710).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12710))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12710));
} else {
}


var G__12711 = cljs.core.next(seq__12687_12704__$1);
var G__12712 = null;
var G__12713 = (0);
var G__12714 = (0);
seq__12687_12694 = G__12711;
chunk__12688_12695 = G__12712;
count__12689_12696 = G__12713;
i__12690_12697 = G__12714;
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
mecca.audio.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq12684){
var G__12685 = cljs.core.first(seq12684);
var seq12684__$1 = cljs.core.next(seq12684);
var G__12686 = cljs.core.first(seq12684__$1);
var seq12684__$2 = cljs.core.next(seq12684__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12685,G__12686,seq12684__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.audio.synthesis.add = (function mecca$audio$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12716 = arguments.length;
var i__4532__auto___12717 = (0);
while(true){
if((i__4532__auto___12717 < len__4531__auto___12716)){
args__4534__auto__.push((arguments[i__4532__auto___12717]));

var G__12718 = (i__4532__auto___12717 + (1));
i__4532__auto___12717 = G__12718;
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
mecca.audio.synthesis.add.cljs$lang$applyTo = (function (seq12715){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12715));
});

mecca.audio.synthesis.raw_buffer = (function mecca$audio$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__12719_12723 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__12720_12724 = null;
var count__12721_12725 = (0);
var i__12722_12726 = (0);
while(true){
if((i__12722_12726 < count__12721_12725)){
var i_12727 = chunk__12720_12724.cljs$core$IIndexed$_nth$arity$2(null,i__12722_12726);
(data[i_12727] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_12727) : generate_bit_BANG_.call(null,i_12727)));


var G__12728 = seq__12719_12723;
var G__12729 = chunk__12720_12724;
var G__12730 = count__12721_12725;
var G__12731 = (i__12722_12726 + (1));
seq__12719_12723 = G__12728;
chunk__12720_12724 = G__12729;
count__12721_12725 = G__12730;
i__12722_12726 = G__12731;
continue;
} else {
var temp__5457__auto___12732 = cljs.core.seq(seq__12719_12723);
if(temp__5457__auto___12732){
var seq__12719_12733__$1 = temp__5457__auto___12732;
if(cljs.core.chunked_seq_QMARK_(seq__12719_12733__$1)){
var c__4351__auto___12734 = cljs.core.chunk_first(seq__12719_12733__$1);
var G__12735 = cljs.core.chunk_rest(seq__12719_12733__$1);
var G__12736 = c__4351__auto___12734;
var G__12737 = cljs.core.count(c__4351__auto___12734);
var G__12738 = (0);
seq__12719_12723 = G__12735;
chunk__12720_12724 = G__12736;
count__12721_12725 = G__12737;
i__12722_12726 = G__12738;
continue;
} else {
var i_12739 = cljs.core.first(seq__12719_12733__$1);
(data[i_12739] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_12739) : generate_bit_BANG_.call(null,i_12739)));


var G__12740 = cljs.core.next(seq__12719_12733__$1);
var G__12741 = null;
var G__12742 = (0);
var G__12743 = (0);
seq__12719_12723 = G__12740;
chunk__12720_12724 = G__12741;
count__12721_12725 = G__12742;
i__12722_12726 = G__12743;
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
return mecca.audio.synthesis.source((function (){var G__12744 = context.createBufferSource();
G__12744.buffer = (function (){var G__12745 = generate_bit_BANG_;
var G__12746 = context;
var G__12747 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__12745,G__12746,G__12747) : mecca.audio.synthesis.buffer.call(null,G__12745,G__12746,G__12747));
})();

G__12744.start(at);

return G__12744;
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
return mecca.audio.synthesis.source((function (){var G__12748 = context.createOscillator();
G__12748.frequency.value = (0);

mecca.audio.synthesis.plug(G__12748.frequency,freq,context,at,duration);

G__12748.type = type;

G__12748.start(at);

G__12748.stop(((at + duration) + 1.0));

return G__12748;
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
var G__12750 = arguments.length;
switch (G__12750) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12751 = context.createBiquadFilter();
G__12751.frequency.value = (0);

mecca.audio.synthesis.plug(G__12751.frequency,freq,context,at,duration);

mecca.audio.synthesis.plug(G__12751.Q,q,context,at,duration);

G__12751.type = type;

return G__12751;
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12753 = context.createStereoPanner();
mecca.audio.synthesis.plug(G__12753.pan,pan,context,at,duration);

return G__12753;
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
var G__12754 = context.createDelay(maximum);
mecca.audio.synthesis.plug(G__12754.delayTime,seconds,context,at,duration);

return G__12754;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.delay_line', mecca.audio.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.audio.synthesis.convolver = (function mecca$audio$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12755 = context.createConvolver();
G__12755.buffer = (function (){var G__12756 = generate_bit_BANG_;
var G__12757 = context;
var G__12758 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__12756,G__12757,G__12758) : mecca.audio.synthesis.buffer.call(null,G__12756,G__12757,G__12758));
})();

return G__12755;
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
return (((1) / (2)) * (function (){var G__12759 = (midi + (12));
var G__12760 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__12759,G__12760) : mecca.audio.synthesis.temper.call(null,G__12759,G__12760));
})());
} else {
if((midi > (11))){
return ((2) * (function (){var G__12761 = (midi - (12));
var G__12762 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__12761,G__12762) : mecca.audio.synthesis.temper.call(null,G__12761,G__12762));
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
var seq__12763 = cljs.core.seq(notes);
var chunk__12764 = null;
var count__12765 = (0);
var i__12766 = (0);
while(true){
if((i__12766 < count__12765)){
var map__12767 = chunk__12764.cljs$core$IIndexed$_nth$arity$2(null,i__12766);
var map__12767__$1 = ((((!((map__12767 == null)))?(((((map__12767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12767):map__12767);
var note = map__12767__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12767__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12767__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12767__$1,cljs.core.cst$kw$instrument);
var at_12773 = (time + from);
var synth_instance_12774 = (function (){var G__12769 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__12769) : instrument.call(null,G__12769));
})();
var connected_instance_12775 = mecca.audio.synthesis.connect(synth_instance_12774,mecca.audio.synthesis.destination);
(connected_instance_12775.cljs$core$IFn$_invoke$arity$3 ? connected_instance_12775.cljs$core$IFn$_invoke$arity$3(audiocontext,at_12773,duration) : connected_instance_12775.call(null,audiocontext,at_12773,duration));


var G__12776 = seq__12763;
var G__12777 = chunk__12764;
var G__12778 = count__12765;
var G__12779 = (i__12766 + (1));
seq__12763 = G__12776;
chunk__12764 = G__12777;
count__12765 = G__12778;
i__12766 = G__12779;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12763);
if(temp__5457__auto__){
var seq__12763__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12763__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12763__$1);
var G__12780 = cljs.core.chunk_rest(seq__12763__$1);
var G__12781 = c__4351__auto__;
var G__12782 = cljs.core.count(c__4351__auto__);
var G__12783 = (0);
seq__12763 = G__12780;
chunk__12764 = G__12781;
count__12765 = G__12782;
i__12766 = G__12783;
continue;
} else {
var map__12770 = cljs.core.first(seq__12763__$1);
var map__12770__$1 = ((((!((map__12770 == null)))?(((((map__12770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12770):map__12770);
var note = map__12770__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12770__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12770__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12770__$1,cljs.core.cst$kw$instrument);
var at_12784 = (time + from);
var synth_instance_12785 = (function (){var G__12772 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__12772) : instrument.call(null,G__12772));
})();
var connected_instance_12786 = mecca.audio.synthesis.connect(synth_instance_12785,mecca.audio.synthesis.destination);
(connected_instance_12786.cljs$core$IFn$_invoke$arity$3 ? connected_instance_12786.cljs$core$IFn$_invoke$arity$3(audiocontext,at_12784,duration) : connected_instance_12786.call(null,audiocontext,at_12784,duration));


var G__12787 = cljs.core.next(seq__12763__$1);
var G__12788 = null;
var G__12789 = (0);
var G__12790 = (0);
seq__12763 = G__12787;
chunk__12764 = G__12788;
count__12765 = G__12789;
i__12766 = G__12790;
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
