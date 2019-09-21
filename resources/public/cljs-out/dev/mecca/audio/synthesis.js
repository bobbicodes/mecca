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
var G__12585 = arguments.length;
switch (G__12585) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12587 = context.createGain();
mecca.audio.synthesis.plug(G__12587.gain,level,context,at,duration);

return G__12587;
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
var len__4531__auto___12595 = arguments.length;
var i__4532__auto___12596 = (0);
while(true){
if((i__4532__auto___12596 < len__4531__auto___12595)){
args__4534__auto__.push((arguments[i__4532__auto___12596]));

var G__12597 = (i__4532__auto___12596 + (1));
i__4532__auto___12596 = G__12597;
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

var x_12598 = at;
var coordinates_12599 = corners;
while(true){
var temp__5457__auto___12600 = coordinates_12599;
if(cljs.core.truth_(temp__5457__auto___12600)){
var vec__12589_12601 = temp__5457__auto___12600;
var seq__12590_12602 = cljs.core.seq(vec__12589_12601);
var first__12591_12603 = cljs.core.first(seq__12590_12602);
var seq__12590_12604__$1 = cljs.core.next(seq__12590_12602);
var vec__12592_12605 = first__12591_12603;
var dx_12606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592_12605,(0),null);
var y_12607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592_12605,(1),null);
var remaining_12608 = seq__12590_12604__$1;
audio_node.gain.linearRampToValueAtTime(y_12607,(x_12598 + dx_12606));

var G__12609 = (dx_12606 + x_12598);
var G__12610 = remaining_12608;
x_12598 = G__12609;
coordinates_12599 = G__12610;
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
mecca.audio.synthesis.envelope.cljs$lang$applyTo = (function (seq12588){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12588));
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
var len__4531__auto___12614 = arguments.length;
var i__4532__auto___12615 = (0);
while(true){
if((i__4532__auto___12615 < len__4531__auto___12614)){
args__4534__auto__.push((arguments[i__4532__auto___12615]));

var G__12616 = (i__4532__auto___12615 + (1));
i__4532__auto___12615 = G__12616;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12611_SHARP_){
return mecca.audio.synthesis.run_with(p1__12611_SHARP_,context,at,duration);
}),synths));
});
});

mecca.audio.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq12612){
var G__12613 = cljs.core.first(seq12612);
var seq12612__$1 = cljs.core.next(seq12612);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12613,seq12612__$1);
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
var len__4531__auto___12618 = arguments.length;
var i__4532__auto___12619 = (0);
while(true){
if((i__4532__auto___12619 < len__4531__auto___12618)){
args__4534__auto__.push((arguments[i__4532__auto___12619]));

var G__12620 = (i__4532__auto___12619 + (1));
i__4532__auto___12619 = G__12620;
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
mecca.audio.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq12617){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12617));
});

mecca.audio.synthesis.join_in_parallel = (function mecca$audio$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12628 = arguments.length;
var i__4532__auto___12629 = (0);
while(true){
if((i__4532__auto___12629 < len__4531__auto___12628)){
args__4534__auto__.push((arguments[i__4532__auto___12629]));

var G__12630 = (i__4532__auto___12629 + (1));
i__4532__auto___12629 = G__12630;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.audio.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__12624_12631 = cljs.core.seq(graphs);
var chunk__12625_12632 = null;
var count__12626_12633 = (0);
var i__12627_12634 = (0);
while(true){
if((i__12627_12634 < count__12626_12633)){
var graph_12635 = chunk__12625_12632.cljs$core$IIndexed$_nth$arity$2(null,i__12627_12634);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_12635).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12635))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12635));
} else {
}


var G__12636 = seq__12624_12631;
var G__12637 = chunk__12625_12632;
var G__12638 = count__12626_12633;
var G__12639 = (i__12627_12634 + (1));
seq__12624_12631 = G__12636;
chunk__12625_12632 = G__12637;
count__12626_12633 = G__12638;
i__12627_12634 = G__12639;
continue;
} else {
var temp__5457__auto___12640 = cljs.core.seq(seq__12624_12631);
if(temp__5457__auto___12640){
var seq__12624_12641__$1 = temp__5457__auto___12640;
if(cljs.core.chunked_seq_QMARK_(seq__12624_12641__$1)){
var c__4351__auto___12642 = cljs.core.chunk_first(seq__12624_12641__$1);
var G__12643 = cljs.core.chunk_rest(seq__12624_12641__$1);
var G__12644 = c__4351__auto___12642;
var G__12645 = cljs.core.count(c__4351__auto___12642);
var G__12646 = (0);
seq__12624_12631 = G__12643;
chunk__12625_12632 = G__12644;
count__12626_12633 = G__12645;
i__12627_12634 = G__12646;
continue;
} else {
var graph_12647 = cljs.core.first(seq__12624_12641__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_12647).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12647))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_12647));
} else {
}


var G__12648 = cljs.core.next(seq__12624_12641__$1);
var G__12649 = null;
var G__12650 = (0);
var G__12651 = (0);
seq__12624_12631 = G__12648;
chunk__12625_12632 = G__12649;
count__12626_12633 = G__12650;
i__12627_12634 = G__12651;
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
mecca.audio.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq12621){
var G__12622 = cljs.core.first(seq12621);
var seq12621__$1 = cljs.core.next(seq12621);
var G__12623 = cljs.core.first(seq12621__$1);
var seq12621__$2 = cljs.core.next(seq12621__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12622,G__12623,seq12621__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.audio.synthesis.add = (function mecca$audio$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12653 = arguments.length;
var i__4532__auto___12654 = (0);
while(true){
if((i__4532__auto___12654 < len__4531__auto___12653)){
args__4534__auto__.push((arguments[i__4532__auto___12654]));

var G__12655 = (i__4532__auto___12654 + (1));
i__4532__auto___12654 = G__12655;
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
mecca.audio.synthesis.add.cljs$lang$applyTo = (function (seq12652){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12652));
});

mecca.audio.synthesis.raw_buffer = (function mecca$audio$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__12656_12660 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__12657_12661 = null;
var count__12658_12662 = (0);
var i__12659_12663 = (0);
while(true){
if((i__12659_12663 < count__12658_12662)){
var i_12664 = chunk__12657_12661.cljs$core$IIndexed$_nth$arity$2(null,i__12659_12663);
(data[i_12664] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_12664) : generate_bit_BANG_.call(null,i_12664)));


var G__12665 = seq__12656_12660;
var G__12666 = chunk__12657_12661;
var G__12667 = count__12658_12662;
var G__12668 = (i__12659_12663 + (1));
seq__12656_12660 = G__12665;
chunk__12657_12661 = G__12666;
count__12658_12662 = G__12667;
i__12659_12663 = G__12668;
continue;
} else {
var temp__5457__auto___12669 = cljs.core.seq(seq__12656_12660);
if(temp__5457__auto___12669){
var seq__12656_12670__$1 = temp__5457__auto___12669;
if(cljs.core.chunked_seq_QMARK_(seq__12656_12670__$1)){
var c__4351__auto___12671 = cljs.core.chunk_first(seq__12656_12670__$1);
var G__12672 = cljs.core.chunk_rest(seq__12656_12670__$1);
var G__12673 = c__4351__auto___12671;
var G__12674 = cljs.core.count(c__4351__auto___12671);
var G__12675 = (0);
seq__12656_12660 = G__12672;
chunk__12657_12661 = G__12673;
count__12658_12662 = G__12674;
i__12659_12663 = G__12675;
continue;
} else {
var i_12676 = cljs.core.first(seq__12656_12670__$1);
(data[i_12676] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_12676) : generate_bit_BANG_.call(null,i_12676)));


var G__12677 = cljs.core.next(seq__12656_12670__$1);
var G__12678 = null;
var G__12679 = (0);
var G__12680 = (0);
seq__12656_12660 = G__12677;
chunk__12657_12661 = G__12678;
count__12658_12662 = G__12679;
i__12659_12663 = G__12680;
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
return mecca.audio.synthesis.source((function (){var G__12681 = context.createBufferSource();
G__12681.buffer = (function (){var G__12682 = generate_bit_BANG_;
var G__12683 = context;
var G__12684 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__12682,G__12683,G__12684) : mecca.audio.synthesis.buffer.call(null,G__12682,G__12683,G__12684));
})();

G__12681.start(at);

return G__12681;
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
return mecca.audio.synthesis.source((function (){var G__12685 = context.createOscillator();
G__12685.frequency.value = (0);

mecca.audio.synthesis.plug(G__12685.frequency,freq,context,at,duration);

G__12685.type = type;

G__12685.start(at);

G__12685.stop(((at + duration) + 1.0));

return G__12685;
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
var G__12687 = arguments.length;
switch (G__12687) {
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12688 = context.createBiquadFilter();
G__12688.frequency.value = (0);

mecca.audio.synthesis.plug(G__12688.frequency,freq,context,at,duration);

mecca.audio.synthesis.plug(G__12688.Q,q,context,at,duration);

G__12688.type = type;

return G__12688;
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
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12690 = context.createStereoPanner();
mecca.audio.synthesis.plug(G__12690.pan,pan,context,at,duration);

return G__12690;
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
var G__12691 = context.createDelay(maximum);
mecca.audio.synthesis.plug(G__12691.delayTime,seconds,context,at,duration);

return G__12691;
})());
});
});
goog.exportSymbol('mecca.audio.synthesis.delay_line', mecca.audio.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.audio.synthesis.convolver = (function mecca$audio$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.audio.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__12692 = context.createConvolver();
G__12692.buffer = (function (){var G__12693 = generate_bit_BANG_;
var G__12694 = context;
var G__12695 = (duration + 1.0);
return (mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? mecca.audio.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__12693,G__12694,G__12695) : mecca.audio.synthesis.buffer.call(null,G__12693,G__12694,G__12695));
})();

return G__12692;
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
return (((1) / (2)) * (function (){var G__12696 = (midi + (12));
var G__12697 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__12696,G__12697) : mecca.audio.synthesis.temper.call(null,G__12696,G__12697));
})());
} else {
if((midi > (11))){
return ((2) * (function (){var G__12698 = (midi - (12));
var G__12699 = ratios;
return (mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2 ? mecca.audio.synthesis.temper.cljs$core$IFn$_invoke$arity$2(G__12698,G__12699) : mecca.audio.synthesis.temper.call(null,G__12698,G__12699));
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
var seq__12700 = cljs.core.seq(notes);
var chunk__12701 = null;
var count__12702 = (0);
var i__12703 = (0);
while(true){
if((i__12703 < count__12702)){
var map__12704 = chunk__12701.cljs$core$IIndexed$_nth$arity$2(null,i__12703);
var map__12704__$1 = ((((!((map__12704 == null)))?(((((map__12704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12704):map__12704);
var note = map__12704__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12704__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12704__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12704__$1,cljs.core.cst$kw$instrument);
var at_12710 = (time + from);
var synth_instance_12711 = (function (){var G__12706 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__12706) : instrument.call(null,G__12706));
})();
var connected_instance_12712 = mecca.audio.synthesis.connect(synth_instance_12711,mecca.audio.synthesis.destination);
(connected_instance_12712.cljs$core$IFn$_invoke$arity$3 ? connected_instance_12712.cljs$core$IFn$_invoke$arity$3(audiocontext,at_12710,duration) : connected_instance_12712.call(null,audiocontext,at_12710,duration));


var G__12713 = seq__12700;
var G__12714 = chunk__12701;
var G__12715 = count__12702;
var G__12716 = (i__12703 + (1));
seq__12700 = G__12713;
chunk__12701 = G__12714;
count__12702 = G__12715;
i__12703 = G__12716;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12700);
if(temp__5457__auto__){
var seq__12700__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12700__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12700__$1);
var G__12717 = cljs.core.chunk_rest(seq__12700__$1);
var G__12718 = c__4351__auto__;
var G__12719 = cljs.core.count(c__4351__auto__);
var G__12720 = (0);
seq__12700 = G__12717;
chunk__12701 = G__12718;
count__12702 = G__12719;
i__12703 = G__12720;
continue;
} else {
var map__12707 = cljs.core.first(seq__12700__$1);
var map__12707__$1 = ((((!((map__12707 == null)))?(((((map__12707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12707):map__12707);
var note = map__12707__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12707__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12707__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12707__$1,cljs.core.cst$kw$instrument);
var at_12721 = (time + from);
var synth_instance_12722 = (function (){var G__12709 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,mecca.audio.synthesis.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__12709) : instrument.call(null,G__12709));
})();
var connected_instance_12723 = mecca.audio.synthesis.connect(synth_instance_12722,mecca.audio.synthesis.destination);
(connected_instance_12723.cljs$core$IFn$_invoke$arity$3 ? connected_instance_12723.cljs$core$IFn$_invoke$arity$3(audiocontext,at_12721,duration) : connected_instance_12723.call(null,audiocontext,at_12721,duration));


var G__12724 = cljs.core.next(seq__12700__$1);
var G__12725 = null;
var G__12726 = (0);
var G__12727 = (0);
seq__12700 = G__12724;
chunk__12701 = G__12725;
count__12702 = G__12726;
i__12703 = G__12727;
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
