// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music.synthesis');
goog.require('cljs.core');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
mecca.music.synthesis.audio_context = (function mecca$music$synthesis$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('mecca.music.synthesis.audio_context', mecca.music.synthesis.audio_context);
/**
 * Return the current time as recorded by the audio context.
 */
mecca.music.synthesis.current_time = (function mecca$music$synthesis$current_time(context){
return context.currentTime;
});
goog.exportSymbol('mecca.music.synthesis.current_time', mecca.music.synthesis.current_time);
mecca.music.synthesis.subgraph = (function mecca$music$synthesis$subgraph(var_args){
var G__9657 = arguments.length;
switch (G__9657) {
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
return mecca.music.synthesis.subgraph.call(null,(function (){var G__9659 = context.createGain();
mecca.music.synthesis.plug.call(null,G__9659.gain,level,context,at,duration);

return G__9659;
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
var len__4531__auto___9667 = arguments.length;
var i__4532__auto___9668 = (0);
while(true){
if((i__4532__auto___9668 < len__4531__auto___9667)){
args__4534__auto__.push((arguments[i__4532__auto___9668]));

var G__9669 = (i__4532__auto___9668 + (1));
i__4532__auto___9668 = G__9669;
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

var x_9670 = at;
var coordinates_9671 = corners;
while(true){
var temp__5457__auto___9672 = coordinates_9671;
if(cljs.core.truth_(temp__5457__auto___9672)){
var vec__9661_9673 = temp__5457__auto___9672;
var seq__9662_9674 = cljs.core.seq.call(null,vec__9661_9673);
var first__9663_9675 = cljs.core.first.call(null,seq__9662_9674);
var seq__9662_9676__$1 = cljs.core.next.call(null,seq__9662_9674);
var vec__9664_9677 = first__9663_9675;
var dx_9678 = cljs.core.nth.call(null,vec__9664_9677,(0),null);
var y_9679 = cljs.core.nth.call(null,vec__9664_9677,(1),null);
var remaining_9680 = seq__9662_9676__$1;
audio_node.gain.linearRampToValueAtTime(y_9679,(x_9670 + dx_9678));

var G__9681 = (dx_9678 + x_9670);
var G__9682 = remaining_9680;
x_9670 = G__9681;
coordinates_9671 = G__9682;
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
mecca.music.synthesis.envelope.cljs$lang$applyTo = (function (seq9660){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9660));
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
var len__4531__auto___9686 = arguments.length;
var i__4532__auto___9687 = (0);
while(true){
if((i__4532__auto___9687 < len__4531__auto___9686)){
args__4534__auto__.push((arguments[i__4532__auto___9687]));

var G__9688 = (i__4532__auto___9687 + (1));
i__4532__auto___9687 = G__9688;
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
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__9683_SHARP_){
return mecca.music.synthesis.run_with.call(null,p1__9683_SHARP_,context,at,duration);
}),synths));
});
});

mecca.music.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.music.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq9684){
var G__9685 = cljs.core.first.call(null,seq9684);
var seq9684__$1 = cljs.core.next.call(null,seq9684);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9685,seq9684__$1);
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
var len__4531__auto___9690 = arguments.length;
var i__4532__auto___9691 = (0);
while(true){
if((i__4532__auto___9691 < len__4531__auto___9690)){
args__4534__auto__.push((arguments[i__4532__auto___9691]));

var G__9692 = (i__4532__auto___9691 + (1));
i__4532__auto___9691 = G__9692;
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
mecca.music.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq9689){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9689));
});

mecca.music.synthesis.join_in_parallel = (function mecca$music$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9700 = arguments.length;
var i__4532__auto___9701 = (0);
while(true){
if((i__4532__auto___9701 < len__4531__auto___9700)){
args__4534__auto__.push((arguments[i__4532__auto___9701]));

var G__9702 = (i__4532__auto___9701 + (1));
i__4532__auto___9701 = G__9702;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.music.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.music.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__9696_9703 = cljs.core.seq.call(null,graphs);
var chunk__9697_9704 = null;
var count__9698_9705 = (0);
var i__9699_9706 = (0);
while(true){
if((i__9699_9706 < count__9698_9705)){
var graph_9707 = cljs.core._nth.call(null,chunk__9697_9704,i__9699_9706);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_9707).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_9707))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_9707));
} else {
}


var G__9708 = seq__9696_9703;
var G__9709 = chunk__9697_9704;
var G__9710 = count__9698_9705;
var G__9711 = (i__9699_9706 + (1));
seq__9696_9703 = G__9708;
chunk__9697_9704 = G__9709;
count__9698_9705 = G__9710;
i__9699_9706 = G__9711;
continue;
} else {
var temp__5457__auto___9712 = cljs.core.seq.call(null,seq__9696_9703);
if(temp__5457__auto___9712){
var seq__9696_9713__$1 = temp__5457__auto___9712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9696_9713__$1)){
var c__4351__auto___9714 = cljs.core.chunk_first.call(null,seq__9696_9713__$1);
var G__9715 = cljs.core.chunk_rest.call(null,seq__9696_9713__$1);
var G__9716 = c__4351__auto___9714;
var G__9717 = cljs.core.count.call(null,c__4351__auto___9714);
var G__9718 = (0);
seq__9696_9703 = G__9715;
chunk__9697_9704 = G__9716;
count__9698_9705 = G__9717;
i__9699_9706 = G__9718;
continue;
} else {
var graph_9719 = cljs.core.first.call(null,seq__9696_9713__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_9719).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_9719))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_9719));
} else {
}


var G__9720 = cljs.core.next.call(null,seq__9696_9713__$1);
var G__9721 = null;
var G__9722 = (0);
var G__9723 = (0);
seq__9696_9703 = G__9720;
chunk__9697_9704 = G__9721;
count__9698_9705 = G__9722;
i__9699_9706 = G__9723;
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
mecca.music.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq9693){
var G__9694 = cljs.core.first.call(null,seq9693);
var seq9693__$1 = cljs.core.next.call(null,seq9693);
var G__9695 = cljs.core.first.call(null,seq9693__$1);
var seq9693__$2 = cljs.core.next.call(null,seq9693__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9694,G__9695,seq9693__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.music.synthesis.add = (function mecca$music$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9725 = arguments.length;
var i__4532__auto___9726 = (0);
while(true){
if((i__4532__auto___9726 < len__4531__auto___9725)){
args__4534__auto__.push((arguments[i__4532__auto___9726]));

var G__9727 = (i__4532__auto___9726 + (1));
i__4532__auto___9726 = G__9727;
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
mecca.music.synthesis.add.cljs$lang$applyTo = (function (seq9724){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9724));
});

mecca.music.synthesis.raw_buffer = (function mecca$music$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__9728_9732 = cljs.core.seq.call(null,cljs.core.range.call(null,frame_count));
var chunk__9729_9733 = null;
var count__9730_9734 = (0);
var i__9731_9735 = (0);
while(true){
if((i__9731_9735 < count__9730_9734)){
var i_9736 = cljs.core._nth.call(null,chunk__9729_9733,i__9731_9735);
(data[i_9736] = generate_bit_BANG_.call(null,i_9736));


var G__9737 = seq__9728_9732;
var G__9738 = chunk__9729_9733;
var G__9739 = count__9730_9734;
var G__9740 = (i__9731_9735 + (1));
seq__9728_9732 = G__9737;
chunk__9729_9733 = G__9738;
count__9730_9734 = G__9739;
i__9731_9735 = G__9740;
continue;
} else {
var temp__5457__auto___9741 = cljs.core.seq.call(null,seq__9728_9732);
if(temp__5457__auto___9741){
var seq__9728_9742__$1 = temp__5457__auto___9741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9728_9742__$1)){
var c__4351__auto___9743 = cljs.core.chunk_first.call(null,seq__9728_9742__$1);
var G__9744 = cljs.core.chunk_rest.call(null,seq__9728_9742__$1);
var G__9745 = c__4351__auto___9743;
var G__9746 = cljs.core.count.call(null,c__4351__auto___9743);
var G__9747 = (0);
seq__9728_9732 = G__9744;
chunk__9729_9733 = G__9745;
count__9730_9734 = G__9746;
i__9731_9735 = G__9747;
continue;
} else {
var i_9748 = cljs.core.first.call(null,seq__9728_9742__$1);
(data[i_9748] = generate_bit_BANG_.call(null,i_9748));


var G__9749 = cljs.core.next.call(null,seq__9728_9742__$1);
var G__9750 = null;
var G__9751 = (0);
var G__9752 = (0);
seq__9728_9732 = G__9749;
chunk__9729_9733 = G__9750;
count__9730_9734 = G__9751;
i__9731_9735 = G__9752;
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
return mecca.music.synthesis.source.call(null,(function (){var G__9753 = context.createBufferSource();
G__9753.buffer = mecca.music.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__9753.start(at);

return G__9753;
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
return mecca.music.synthesis.source.call(null,(function (){var G__9754 = context.createOscillator();
G__9754.frequency.value = (0);

mecca.music.synthesis.plug.call(null,G__9754.frequency,freq,context,at,duration);

G__9754.type = type;

G__9754.start(at);

G__9754.stop(((at + duration) + 1.0));

return G__9754;
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
var G__9756 = arguments.length;
switch (G__9756) {
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
return mecca.music.synthesis.subgraph.call(null,(function (){var G__9757 = context.createBiquadFilter();
G__9757.frequency.value = (0);

mecca.music.synthesis.plug.call(null,G__9757.frequency,freq,context,at,duration);

mecca.music.synthesis.plug.call(null,G__9757.Q,q,context,at,duration);

G__9757.type = type;

return G__9757;
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
return mecca.music.synthesis.subgraph.call(null,(function (){var G__9759 = context.createStereoPanner();
mecca.music.synthesis.plug.call(null,G__9759.pan,pan,context,at,duration);

return G__9759;
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
var G__9760 = context.createDelay(maximum);
mecca.music.synthesis.plug.call(null,G__9760.delayTime,seconds,context,at,duration);

return G__9760;
})());
});
});
goog.exportSymbol('mecca.music.synthesis.delay_line', mecca.music.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.music.synthesis.convolver = (function mecca$music$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.music.synthesis.subgraph.call(null,(function (){var G__9761 = context.createConvolver();
G__9761.buffer = mecca.music.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__9761;
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
var seq__9762 = cljs.core.seq.call(null,notes);
var chunk__9763 = null;
var count__9764 = (0);
var i__9765 = (0);
while(true){
if((i__9765 < count__9764)){
var map__9766 = cljs.core._nth.call(null,chunk__9763,i__9765);
var map__9766__$1 = ((((!((map__9766 == null)))?(((((map__9766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9766):map__9766);
var note = map__9766__$1;
var time = cljs.core.get.call(null,map__9766__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__9766__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__9766__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_9770 = (time + from);
var synth_instance_9771 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),mecca.music.synthesis.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_9772 = mecca.music.synthesis.connect.call(null,synth_instance_9771,mecca.music.synthesis.destination);
connected_instance_9772.call(null,audiocontext,at_9770,duration);


var G__9773 = seq__9762;
var G__9774 = chunk__9763;
var G__9775 = count__9764;
var G__9776 = (i__9765 + (1));
seq__9762 = G__9773;
chunk__9763 = G__9774;
count__9764 = G__9775;
i__9765 = G__9776;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9762);
if(temp__5457__auto__){
var seq__9762__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9762__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9762__$1);
var G__9777 = cljs.core.chunk_rest.call(null,seq__9762__$1);
var G__9778 = c__4351__auto__;
var G__9779 = cljs.core.count.call(null,c__4351__auto__);
var G__9780 = (0);
seq__9762 = G__9777;
chunk__9763 = G__9778;
count__9764 = G__9779;
i__9765 = G__9780;
continue;
} else {
var map__9768 = cljs.core.first.call(null,seq__9762__$1);
var map__9768__$1 = ((((!((map__9768 == null)))?(((((map__9768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9768):map__9768);
var note = map__9768__$1;
var time = cljs.core.get.call(null,map__9768__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__9768__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__9768__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_9781 = (time + from);
var synth_instance_9782 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),mecca.music.synthesis.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_9783 = mecca.music.synthesis.connect.call(null,synth_instance_9782,mecca.music.synthesis.destination);
connected_instance_9783.call(null,audiocontext,at_9781,duration);


var G__9784 = cljs.core.next.call(null,seq__9762__$1);
var G__9785 = null;
var G__9786 = (0);
var G__9787 = (0);
seq__9762 = G__9784;
chunk__9763 = G__9785;
count__9764 = G__9786;
i__9765 = G__9787;
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
