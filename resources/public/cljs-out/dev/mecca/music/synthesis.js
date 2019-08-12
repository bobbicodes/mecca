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
var G__15279 = arguments.length;
switch (G__15279) {
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
return mecca.music.synthesis.subgraph.call(null,(function (){var G__15281 = context.createGain();
mecca.music.synthesis.plug.call(null,G__15281.gain,level,context,at,duration);

return G__15281;
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
var len__4531__auto___15289 = arguments.length;
var i__4532__auto___15290 = (0);
while(true){
if((i__4532__auto___15290 < len__4531__auto___15289)){
args__4534__auto__.push((arguments[i__4532__auto___15290]));

var G__15291 = (i__4532__auto___15290 + (1));
i__4532__auto___15290 = G__15291;
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

var x_15292 = at;
var coordinates_15293 = corners;
while(true){
var temp__5457__auto___15294 = coordinates_15293;
if(cljs.core.truth_(temp__5457__auto___15294)){
var vec__15283_15295 = temp__5457__auto___15294;
var seq__15284_15296 = cljs.core.seq.call(null,vec__15283_15295);
var first__15285_15297 = cljs.core.first.call(null,seq__15284_15296);
var seq__15284_15298__$1 = cljs.core.next.call(null,seq__15284_15296);
var vec__15286_15299 = first__15285_15297;
var dx_15300 = cljs.core.nth.call(null,vec__15286_15299,(0),null);
var y_15301 = cljs.core.nth.call(null,vec__15286_15299,(1),null);
var remaining_15302 = seq__15284_15298__$1;
audio_node.gain.linearRampToValueAtTime(y_15301,(x_15292 + dx_15300));

var G__15303 = (dx_15300 + x_15292);
var G__15304 = remaining_15302;
x_15292 = G__15303;
coordinates_15293 = G__15304;
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
mecca.music.synthesis.envelope.cljs$lang$applyTo = (function (seq15282){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15282));
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
var len__4531__auto___15308 = arguments.length;
var i__4532__auto___15309 = (0);
while(true){
if((i__4532__auto___15309 < len__4531__auto___15308)){
args__4534__auto__.push((arguments[i__4532__auto___15309]));

var G__15310 = (i__4532__auto___15309 + (1));
i__4532__auto___15309 = G__15310;
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
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__15305_SHARP_){
return mecca.music.synthesis.run_with.call(null,p1__15305_SHARP_,context,at,duration);
}),synths));
});
});

mecca.music.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.music.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq15306){
var G__15307 = cljs.core.first.call(null,seq15306);
var seq15306__$1 = cljs.core.next.call(null,seq15306);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15307,seq15306__$1);
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
var len__4531__auto___15312 = arguments.length;
var i__4532__auto___15313 = (0);
while(true){
if((i__4532__auto___15313 < len__4531__auto___15312)){
args__4534__auto__.push((arguments[i__4532__auto___15313]));

var G__15314 = (i__4532__auto___15313 + (1));
i__4532__auto___15313 = G__15314;
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
mecca.music.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq15311){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15311));
});

mecca.music.synthesis.join_in_parallel = (function mecca$music$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15322 = arguments.length;
var i__4532__auto___15323 = (0);
while(true){
if((i__4532__auto___15323 < len__4531__auto___15322)){
args__4534__auto__.push((arguments[i__4532__auto___15323]));

var G__15324 = (i__4532__auto___15323 + (1));
i__4532__auto___15323 = G__15324;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.music.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.music.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__15318_15325 = cljs.core.seq.call(null,graphs);
var chunk__15319_15326 = null;
var count__15320_15327 = (0);
var i__15321_15328 = (0);
while(true){
if((i__15321_15328 < count__15320_15327)){
var graph_15329 = cljs.core._nth.call(null,chunk__15319_15326,i__15321_15328);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_15329).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_15329))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_15329));
} else {
}


var G__15330 = seq__15318_15325;
var G__15331 = chunk__15319_15326;
var G__15332 = count__15320_15327;
var G__15333 = (i__15321_15328 + (1));
seq__15318_15325 = G__15330;
chunk__15319_15326 = G__15331;
count__15320_15327 = G__15332;
i__15321_15328 = G__15333;
continue;
} else {
var temp__5457__auto___15334 = cljs.core.seq.call(null,seq__15318_15325);
if(temp__5457__auto___15334){
var seq__15318_15335__$1 = temp__5457__auto___15334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15318_15335__$1)){
var c__4351__auto___15336 = cljs.core.chunk_first.call(null,seq__15318_15335__$1);
var G__15337 = cljs.core.chunk_rest.call(null,seq__15318_15335__$1);
var G__15338 = c__4351__auto___15336;
var G__15339 = cljs.core.count.call(null,c__4351__auto___15336);
var G__15340 = (0);
seq__15318_15325 = G__15337;
chunk__15319_15326 = G__15338;
count__15320_15327 = G__15339;
i__15321_15328 = G__15340;
continue;
} else {
var graph_15341 = cljs.core.first.call(null,seq__15318_15335__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_15341).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_15341))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_15341));
} else {
}


var G__15342 = cljs.core.next.call(null,seq__15318_15335__$1);
var G__15343 = null;
var G__15344 = (0);
var G__15345 = (0);
seq__15318_15325 = G__15342;
chunk__15319_15326 = G__15343;
count__15320_15327 = G__15344;
i__15321_15328 = G__15345;
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
mecca.music.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq15315){
var G__15316 = cljs.core.first.call(null,seq15315);
var seq15315__$1 = cljs.core.next.call(null,seq15315);
var G__15317 = cljs.core.first.call(null,seq15315__$1);
var seq15315__$2 = cljs.core.next.call(null,seq15315__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15316,G__15317,seq15315__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.music.synthesis.add = (function mecca$music$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15347 = arguments.length;
var i__4532__auto___15348 = (0);
while(true){
if((i__4532__auto___15348 < len__4531__auto___15347)){
args__4534__auto__.push((arguments[i__4532__auto___15348]));

var G__15349 = (i__4532__auto___15348 + (1));
i__4532__auto___15348 = G__15349;
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
mecca.music.synthesis.add.cljs$lang$applyTo = (function (seq15346){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15346));
});

mecca.music.synthesis.raw_buffer = (function mecca$music$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__15350_15354 = cljs.core.seq.call(null,cljs.core.range.call(null,frame_count));
var chunk__15351_15355 = null;
var count__15352_15356 = (0);
var i__15353_15357 = (0);
while(true){
if((i__15353_15357 < count__15352_15356)){
var i_15358 = cljs.core._nth.call(null,chunk__15351_15355,i__15353_15357);
(data[i_15358] = generate_bit_BANG_.call(null,i_15358));


var G__15359 = seq__15350_15354;
var G__15360 = chunk__15351_15355;
var G__15361 = count__15352_15356;
var G__15362 = (i__15353_15357 + (1));
seq__15350_15354 = G__15359;
chunk__15351_15355 = G__15360;
count__15352_15356 = G__15361;
i__15353_15357 = G__15362;
continue;
} else {
var temp__5457__auto___15363 = cljs.core.seq.call(null,seq__15350_15354);
if(temp__5457__auto___15363){
var seq__15350_15364__$1 = temp__5457__auto___15363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15350_15364__$1)){
var c__4351__auto___15365 = cljs.core.chunk_first.call(null,seq__15350_15364__$1);
var G__15366 = cljs.core.chunk_rest.call(null,seq__15350_15364__$1);
var G__15367 = c__4351__auto___15365;
var G__15368 = cljs.core.count.call(null,c__4351__auto___15365);
var G__15369 = (0);
seq__15350_15354 = G__15366;
chunk__15351_15355 = G__15367;
count__15352_15356 = G__15368;
i__15353_15357 = G__15369;
continue;
} else {
var i_15370 = cljs.core.first.call(null,seq__15350_15364__$1);
(data[i_15370] = generate_bit_BANG_.call(null,i_15370));


var G__15371 = cljs.core.next.call(null,seq__15350_15364__$1);
var G__15372 = null;
var G__15373 = (0);
var G__15374 = (0);
seq__15350_15354 = G__15371;
chunk__15351_15355 = G__15372;
count__15352_15356 = G__15373;
i__15353_15357 = G__15374;
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
return mecca.music.synthesis.source.call(null,(function (){var G__15375 = context.createBufferSource();
G__15375.buffer = mecca.music.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__15375.start(at);

return G__15375;
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
return mecca.music.synthesis.source.call(null,(function (){var G__15376 = context.createOscillator();
G__15376.frequency.value = (0);

mecca.music.synthesis.plug.call(null,G__15376.frequency,freq,context,at,duration);

G__15376.type = type;

G__15376.start(at);

G__15376.stop(((at + duration) + 1.0));

return G__15376;
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
var G__15378 = arguments.length;
switch (G__15378) {
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
return mecca.music.synthesis.subgraph.call(null,(function (){var G__15379 = context.createBiquadFilter();
G__15379.frequency.value = (0);

mecca.music.synthesis.plug.call(null,G__15379.frequency,freq,context,at,duration);

mecca.music.synthesis.plug.call(null,G__15379.Q,q,context,at,duration);

G__15379.type = type;

return G__15379;
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
return mecca.music.synthesis.subgraph.call(null,(function (){var G__15381 = context.createStereoPanner();
mecca.music.synthesis.plug.call(null,G__15381.pan,pan,context,at,duration);

return G__15381;
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
var G__15382 = context.createDelay(maximum);
mecca.music.synthesis.plug.call(null,G__15382.delayTime,seconds,context,at,duration);

return G__15382;
})());
});
});
goog.exportSymbol('mecca.music.synthesis.delay_line', mecca.music.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.music.synthesis.convolver = (function mecca$music$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.music.synthesis.subgraph.call(null,(function (){var G__15383 = context.createConvolver();
G__15383.buffer = mecca.music.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__15383;
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
var seq__15384 = cljs.core.seq.call(null,notes);
var chunk__15385 = null;
var count__15386 = (0);
var i__15387 = (0);
while(true){
if((i__15387 < count__15386)){
var map__15388 = cljs.core._nth.call(null,chunk__15385,i__15387);
var map__15388__$1 = ((((!((map__15388 == null)))?(((((map__15388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15388):map__15388);
var note = map__15388__$1;
var time = cljs.core.get.call(null,map__15388__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__15388__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__15388__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_15392 = (time + from);
var synth_instance_15393 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),mecca.music.synthesis.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_15394 = mecca.music.synthesis.connect.call(null,synth_instance_15393,mecca.music.synthesis.destination);
connected_instance_15394.call(null,audiocontext,at_15392,duration);


var G__15395 = seq__15384;
var G__15396 = chunk__15385;
var G__15397 = count__15386;
var G__15398 = (i__15387 + (1));
seq__15384 = G__15395;
chunk__15385 = G__15396;
count__15386 = G__15397;
i__15387 = G__15398;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__15384);
if(temp__5457__auto__){
var seq__15384__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15384__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__15384__$1);
var G__15399 = cljs.core.chunk_rest.call(null,seq__15384__$1);
var G__15400 = c__4351__auto__;
var G__15401 = cljs.core.count.call(null,c__4351__auto__);
var G__15402 = (0);
seq__15384 = G__15399;
chunk__15385 = G__15400;
count__15386 = G__15401;
i__15387 = G__15402;
continue;
} else {
var map__15390 = cljs.core.first.call(null,seq__15384__$1);
var map__15390__$1 = ((((!((map__15390 == null)))?(((((map__15390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15390):map__15390);
var note = map__15390__$1;
var time = cljs.core.get.call(null,map__15390__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__15390__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__15390__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_15403 = (time + from);
var synth_instance_15404 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),mecca.music.synthesis.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_15405 = mecca.music.synthesis.connect.call(null,synth_instance_15404,mecca.music.synthesis.destination);
connected_instance_15405.call(null,audiocontext,at_15403,duration);


var G__15406 = cljs.core.next.call(null,seq__15384__$1);
var G__15407 = null;
var G__15408 = (0);
var G__15409 = (0);
seq__15384 = G__15406;
chunk__15385 = G__15407;
count__15386 = G__15408;
i__15387 = G__15409;
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
