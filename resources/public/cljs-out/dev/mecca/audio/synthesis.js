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
var G__12653 = arguments.length;
switch (G__12653) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12655 = context.createGain();
mecca.audio.synthesis.plug(G__12655.gain,level,context,at,duration);

return G__12655;
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
var len__4531__auto___12663 = arguments.length;
var i__4532__auto___12664 = (0);
while(true){
if((i__4532__auto___12664 < len__4531__auto___12663)){
args__4534__auto__.push((arguments[i__4532__auto___12664]));

var G__12665 = (i__4532__auto___12664 + (1));
i__4532__auto___12664 = G__12665;
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

var x_12666 = at;
var coordinates_12667 = corners;
while(true){
var temp__5457__auto___12668 = coordinates_12667;
if(cljs.core.truth_(temp__5457__auto___12668)){
var vec__12657_12669 = temp__5457__auto___12668;
var seq__12658_12670 = cljs.core.seq(vec__12657_12669);
var first__12659_12671 = cljs.core.first(seq__12658_12670);
var seq__12658_12672__$1 = cljs.core.next(seq__12658_12670);
var vec__12660_12673 = first__12659_12671;
var dx_12674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660_12673,(0),null);
var y_12675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660_12673,(1),null);
var remaining_12676 = seq__12658_12672__$1;
audio_node.gain.linearRampToValueAtTime(y_12675,(x_12666 + dx_12674));

var G__12677 = (dx_12674 + x_12666);
var G__12678 = remaining_12676;
x_12666 = G__12677;
coordinates_12667 = G__12678;
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
mecca.audio.synthesis.envelope.cljs$lang$applyTo = (function (seq12656){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12656));
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
var len__4531__auto___12682 = arguments.length;
var i__4532__auto___12683 = (0);
while(true){
if((i__4532__auto___12683 < len__4531__auto___12682)){
args__4534__auto__.push((arguments[i__4532__auto___12683]));

var G__12684 = (i__4532__auto___12683 + (1));
i__4532__auto___12683 = G__12684;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12679_SHARP_){
return mecca.audio.synthesis.run_with(p1__12679_SHARP_,context,at,duration);
}),synths));
});
});

mecca.audio.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq12680){
var G__12681 = cljs.core.first(seq12680);
var seq12680__$1 = cljs.core.next(seq12680);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12681,seq12680__$1);
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
var len__4531__auto___12686 = arguments.length;
var i__4532__auto___12687 = (0);
while(true){
if((i__4532__auto___12687 < len__4531__auto___12686)){
args__4534__auto__.push((arguments[i__4532__auto___12687]));

var G__12688 = (i__4532__auto___12687 + (1));
i__4532__auto___12687 = G__12688;
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
mecca.audio.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq12685){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12685));
});

mecca.audio.synthesis.join_in_parallel = (function mecca$audio$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12696 = arguments.length;
var i__4532__auto___12697 = (0);
while(true){
if((i__4532__auto___12697 < len__4531__auto___12696)){
args__4534__auto__.push((arguments[i__4532__auto___12697]));

var G__12698 = (i__4532__auto___12697 + (1));
i__4532__auto___12697 = G__12698;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__12692_12699 = cljs.core.seq(graphs);
var chunk__12693_12700 = null;
var count__12694_12701 = (0);
var i__12695_12702 = (0);
while(true){
if((i__12695_12702 < count__12694_12701)){
var graph_12703 = chunk__12693_12700.cljs$core$IIndexed$_nth$arity$2(null,i__12695_12702);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_12703).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12703))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12703));
} else {
}


var G__12704 = seq__12692_12699;
var G__12705 = chunk__12693_12700;
var G__12706 = count__12694_12701;
var G__12707 = (i__12695_12702 + (1));
seq__12692_12699 = G__12704;
chunk__12693_12700 = G__12705;
count__12694_12701 = G__12706;
i__12695_12702 = G__12707;
continue;
} else {
var temp__5457__auto___12708 = cljs.core.seq(seq__12692_12699);
if(temp__5457__auto___12708){
var seq__12692_12709__$1 = temp__5457__auto___12708;
if(cljs.core.chunked_seq_QMARK_(seq__12692_12709__$1)){
var c__4351__auto___12710 = cljs.core.chunk_first(seq__12692_12709__$1);
var G__12711 = cljs.core.chunk_rest(seq__12692_12709__$1);
var G__12712 = c__4351__auto___12710;
var G__12713 = cljs.core.count(c__4351__auto___12710);
var G__12714 = (0);
seq__12692_12699 = G__12711;
chunk__12693_12700 = G__12712;
count__12694_12701 = G__12713;
i__12695_12702 = G__12714;
continue;
} else {
var graph_12715 = cljs.core.first(seq__12692_12709__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_12715).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12715))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12715));
} else {
}


var G__12716 = cljs.core.next(seq__12692_12709__$1);
var G__12717 = null;
var G__12718 = (0);
var G__12719 = (0);
seq__12692_12699 = G__12716;
chunk__12693_12700 = G__12717;
count__12694_12701 = G__12718;
i__12695_12702 = G__12719;
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
mecca.audio.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq12689){
var G__12690 = cljs.core.first(seq12689);
var seq12689__$1 = cljs.core.next(seq12689);
var G__12691 = cljs.core.first(seq12689__$1);
var seq12689__$2 = cljs.core.next(seq12689__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12690,G__12691,seq12689__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.audio.synthesis.add = (function mecca$audio$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12721 = arguments.length;
var i__4532__auto___12722 = (0);
while(true){
if((i__4532__auto___12722 < len__4531__auto___12721)){
args__4534__auto__.push((arguments[i__4532__auto___12722]));

var G__12723 = (i__4532__auto___12722 + (1));
i__4532__auto___12722 = G__12723;
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
mecca.audio.synthesis.add.cljs$lang$applyTo = (function (seq12720){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12720));
});

mecca.audio.synthesis.raw_buffer = (function mecca$audio$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__12724_12728 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__12725_12729 = null;
var count__12726_12730 = (0);
var i__12727_12731 = (0);
while(true){
if((i__12727_12731 < count__12726_12730)){
var i_12732 = chunk__12725_12729.cljs$core$IIndexed$_nth$arity$2(null,i__12727_12731);
(data[i_12732] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_12732) : generate_bit_BANG_.call(null,i_12732)));


var G__12733 = seq__12724_12728;
var G__12734 = chunk__12725_12729;
var G__12735 = count__12726_12730;
var G__12736 = (i__12727_12731 + (1));
seq__12724_12728 = G__12733;
chunk__12725_12729 = G__12734;
count__12726_12730 = G__12735;
i__12727_12731 = G__12736;
continue;
} else {
var temp__5457__auto___12737 = cljs.core.seq(seq__12724_12728);
if(temp__5457__auto___12737){
var seq__12724_12738__$1 = temp__5457__auto___12737;
if(cljs.core.chunked_seq_QMARK_(seq__12724_12738__$1)){
var c__4351__auto___12739 = cljs.core.chunk_first(seq__12724_12738__$1);
var G__12740 = cljs.core.chunk_rest(seq__12724_12738__$1);
var G__12741 = c__4351__auto___12739;
var G__12742 = cljs.core.count(c__4351__auto___12739);
var G__12743 = (0);
seq__12724_12728 = G__12740;
chunk__12725_12729 = G__12741;
count__12726_12730 = G__12742;
i__12727_12731 = G__12743;
continue;
} else {
var i_12744 = cljs.core.first(seq__12724_12738__$1);
(data[i_12744] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_12744) : generate_bit_BANG_.call(null,i_12744)));


var G__12745 = cljs.core.next(seq__12724_12738__$1);
var G__12746 = null;
var G__12747 = (0);
var G__12748 = (0);
seq__12724_12728 = G__12745;
chunk__12725_12729 = G__12746;
count__12726_12730 = G__12747;
i__12727_12731 = G__12748;
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
return mecca.audio.synthesis.source((function (){var G__12749 = context.createBufferSource();
G__12749.buffer = (function (){var G__12750 = generate_bit_BANG_;
var G__12751 = context;
var G__12752 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__12750,G__12751,G__12752) : mecca.audio.synthesis.buffer.call(null,G__12750,G__12751,G__12752));
})();

G__12749.start(at);

return G__12749;
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
return mecca.audio.synthesis.source((function (){var G__12753 = context.createOscillator();
G__12753.frequency.value = (0);

mecca.audio.synthesis.plug(G__12753.frequency,freq,context,at,duration);

G__12753.type = type;

G__12753.start(at);

G__12753.stop(((at + duration) + 1.0));

return G__12753;
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
var G__12755 = arguments.length;
switch (G__12755) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12756 = context.createBiquadFilter();
G__12756.frequency.value = (0);

mecca.audio.synthesis.plug(G__12756.frequency,freq,context,at,duration);

mecca.audio.synthesis.plug(G__12756.Q,q,context,at,duration);

G__12756.type = type;

return G__12756;
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12758 = context.createStereoPanner();
mecca.audio.synthesis.plug(G__12758.pan,pan,context,at,duration);

return G__12758;
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
var G__12759 = context.createDelay(maximum);
mecca.audio.synthesis.plug(G__12759.delayTime,seconds,context,at,duration);

return G__12759;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.delay_line', mecca.audio.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.audio.synthesis.convolver = (function mecca$audio$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12760 = context.createConvolver();
G__12760.buffer = (function (){var G__12761 = generate_bit_BANG_;
var G__12762 = context;
var G__12763 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__12761,G__12762,G__12763) : mecca.audio.synthesis.buffer.call(null,G__12761,G__12762,G__12763));
})();

return G__12760;
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
return (((1) / (2)) * (function (){var G__12764 = (midi + (12));
var G__12765 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__12764,G__12765) : mecca.audio.synthesis.temper.call(null,G__12764,G__12765));
})());
} else {
if((midi > (11))){
return ((2) * (function (){var G__12766 = (midi - (12));
var G__12767 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__12766,G__12767) : mecca.audio.synthesis.temper.call(null,G__12766,G__12767));
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
var seq__12768 = cljs.core.seq(notes);
var chunk__12769 = null;
var count__12770 = (0);
var i__12771 = (0);
while(true){
if((i__12771 < count__12770)){
var map__12772 = chunk__12769.cljs$core$IIndexed$_nth$arity$2(null,i__12771);
var map__12772__$1 = ((((!((map__12772 == null)))?(((((map__12772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12772):map__12772);
var note = map__12772__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12772__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12772__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12772__$1,cljs.core.cst$kw$instrument);
var at_12778 = (time + from);
var synth_instance_12779 = (function (){var G__12774 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__12774) : instrument.call(null,G__12774));
})();
var connected_instance_12780 = mecca.audio.synthesis.connect(synth_instance_12779,mecca.audio.synthesis.destination);
(connected_instance_12780.cljs$core$IFn$_invoke$arity$3 ? connected_instance_12780.cljs$core$IFn$_invoke$arity$3(audiocontext,at_12778,duration) : connected_instance_12780.call(null,audiocontext,at_12778,duration));


var G__12781 = seq__12768;
var G__12782 = chunk__12769;
var G__12783 = count__12770;
var G__12784 = (i__12771 + (1));
seq__12768 = G__12781;
chunk__12769 = G__12782;
count__12770 = G__12783;
i__12771 = G__12784;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12768);
if(temp__5457__auto__){
var seq__12768__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12768__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12768__$1);
var G__12785 = cljs.core.chunk_rest(seq__12768__$1);
var G__12786 = c__4351__auto__;
var G__12787 = cljs.core.count(c__4351__auto__);
var G__12788 = (0);
seq__12768 = G__12785;
chunk__12769 = G__12786;
count__12770 = G__12787;
i__12771 = G__12788;
continue;
} else {
var map__12775 = cljs.core.first(seq__12768__$1);
var map__12775__$1 = ((((!((map__12775 == null)))?(((((map__12775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12775):map__12775);
var note = map__12775__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12775__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12775__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12775__$1,cljs.core.cst$kw$instrument);
var at_12789 = (time + from);
var synth_instance_12790 = (function (){var G__12777 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__12777) : instrument.call(null,G__12777));
})();
var connected_instance_12791 = mecca.audio.synthesis.connect(synth_instance_12790,mecca.audio.synthesis.destination);
(connected_instance_12791.cljs$core$IFn$_invoke$arity$3 ? connected_instance_12791.cljs$core$IFn$_invoke$arity$3(audiocontext,at_12789,duration) : connected_instance_12791.call(null,audiocontext,at_12789,duration));


var G__12792 = cljs.core.next(seq__12768__$1);
var G__12793 = null;
var G__12794 = (0);
var G__12795 = (0);
seq__12768 = G__12792;
chunk__12769 = G__12793;
count__12770 = G__12794;
i__12771 = G__12795;
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
