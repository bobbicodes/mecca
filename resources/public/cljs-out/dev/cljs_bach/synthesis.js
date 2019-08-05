// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs_bach.synthesis');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('ajax.protocols');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
cljs_bach.synthesis.audio_context = (function cljs_bach$synthesis$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('cljs_bach.synthesis.audio_context', cljs_bach.synthesis.audio_context);
/**
 * Return the current time as recorded by the audio context.
 */
cljs_bach.synthesis.current_time = (function cljs_bach$synthesis$current_time(context){
return context.currentTime;
});
goog.exportSymbol('cljs_bach.synthesis.current_time', cljs_bach.synthesis.current_time);
cljs_bach.synthesis.subgraph = (function cljs_bach$synthesis$subgraph(var_args){
var G__11282 = arguments.length;
switch (G__11282) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,input,cljs.core.cst$kw$output,output], null);
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(singleton,singleton);
});

cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
cljs_bach.synthesis.source = (function cljs_bach$synthesis$source(node){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(null,node);
});
/**
 * A graph of synthesis nodes without an output,
 *   so it can't connect to another graph.
 */
cljs_bach.synthesis.sink = (function cljs_bach$synthesis$sink(node){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
cljs_bach.synthesis.run_with = (function cljs_bach$synthesis$run_with(synth,context,at,duration){
return (synth.cljs$core$IFn$_invoke$arity$3 ? synth.cljs$core$IFn$_invoke$arity$3(context,at,duration) : synth.call(null,context,at,duration));
});
goog.exportSymbol('cljs_bach.synthesis.run_with', cljs_bach.synthesis.run_with);
/**
 * The destination of the audio context i.e. the speakers.
 */
cljs_bach.synthesis.destination = (function cljs_bach$synthesis$destination(context,at,duration){
return cljs_bach.synthesis.sink(context.destination);
});
goog.exportSymbol('cljs_bach.synthesis.destination', cljs_bach.synthesis.destination);
cljs_bach.synthesis.plug = (function cljs_bach$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(cljs_bach.synthesis.run_with(input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
cljs_bach.synthesis.gain = (function cljs_bach$synthesis$gain(level){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__11284 = context.createGain();
cljs_bach.synthesis.plug(G__11284.gain,level,context,at,duration);

return G__11284;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.gain', cljs_bach.synthesis.gain);
/**
 * Pass the signal through unaltered.
 */
cljs_bach.synthesis.pass_through = cljs_bach.synthesis.gain(1.0);
goog.exportSymbol('cljs_bach.synthesis.pass_through', cljs_bach.synthesis.pass_through);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
cljs_bach.synthesis.envelope = (function cljs_bach$synthesis$envelope(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11292 = arguments.length;
var i__4532__auto___11293 = (0);
while(true){
if((i__4532__auto___11293 < len__4531__auto___11292)){
args__4534__auto__.push((arguments[i__4532__auto___11293]));

var G__11294 = (i__4532__auto___11293 + (1));
i__4532__auto___11293 = G__11294;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_11295 = at;
var coordinates_11296 = corners;
while(true){
var temp__5457__auto___11297 = coordinates_11296;
if(cljs.core.truth_(temp__5457__auto___11297)){
var vec__11286_11298 = temp__5457__auto___11297;
var seq__11287_11299 = cljs.core.seq(vec__11286_11298);
var first__11288_11300 = cljs.core.first(seq__11287_11299);
var seq__11287_11301__$1 = cljs.core.next(seq__11287_11299);
var vec__11289_11302 = first__11288_11300;
var dx_11303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11289_11302,(0),null);
var y_11304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11289_11302,(1),null);
var remaining_11305 = seq__11287_11301__$1;
audio_node.gain.linearRampToValueAtTime(y_11304,(x_11295 + dx_11303));

var G__11306 = (dx_11303 + x_11295);
var G__11307 = remaining_11305;
x_11295 = G__11306;
coordinates_11296 = G__11307;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1(audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq11285){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11285));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
cljs_bach.synthesis.adshr = (function cljs_bach$synthesis$adshr(attack,decay,sustain,hold,release){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null)], 0));
});
/**
 * A four-stage envelope.
 */
cljs_bach.synthesis.adsr = (function cljs_bach$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - release);
var hold = (function (){var x__4037__auto__ = 0.0;
var y__4038__auto__ = remainder;
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})();
var node = cljs_bach.synthesis.adshr(attack,decay,sustain,hold,release);
return cljs_bach.synthesis.run_with(node,context,at,duration);
});
});
goog.exportSymbol('cljs_bach.synthesis.adsr', cljs_bach.synthesis.adsr);
/**
 * A simple envelope.
 */
cljs_bach.synthesis.percussive = (function cljs_bach$synthesis$percussive(attack,decay){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null)], 0));
});
goog.exportSymbol('cljs_bach.synthesis.percussive', cljs_bach.synthesis.percussive);
/**
 * Like apply, but for the node graphs synths produce.
 */
cljs_bach.synthesis.apply_to_graph = (function cljs_bach$synthesis$apply_to_graph(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11311 = arguments.length;
var i__4532__auto___11312 = (0);
while(true){
if((i__4532__auto___11312 < len__4531__auto___11311)){
args__4534__auto__.push((arguments[i__4532__auto___11312]));

var G__11313 = (i__4532__auto___11312 + (1));
i__4532__auto___11312 = G__11313;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11308_SHARP_){
return cljs_bach.synthesis.run_with(p1__11308_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_bach.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq11309){
var G__11310 = cljs.core.first(seq11309);
var seq11309__$1 = cljs.core.next(seq11309);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11310,seq11309__$1);
});

cljs_bach.synthesis.join_in_series = (function cljs_bach$synthesis$join_in_series(graph1,graph2){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph1).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph2));

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph1),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph2));
});
/**
 * Use the output of one synth as the input to another.
 */
cljs_bach.synthesis.connect = (function cljs_bach$synthesis$connect(upstream_synth,downstream_synth){
return cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic(cljs_bach.synthesis.join_in_series,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upstream_synth,downstream_synth], 0));
});
goog.exportSymbol('cljs_bach.synthesis.connect', cljs_bach.synthesis.connect);
/**
 * Connect synths in series.
 */
cljs_bach.synthesis.connect__GT_ = (function cljs_bach$synthesis$connect__GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11315 = arguments.length;
var i__4532__auto___11316 = (0);
while(true){
if((i__4532__auto___11316 < len__4531__auto___11315)){
args__4534__auto__.push((arguments[i__4532__auto___11316]));

var G__11317 = (i__4532__auto___11316 + (1));
i__4532__auto___11316 = G__11317;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq11314){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11314));
});

cljs_bach.synthesis.join_in_parallel = (function cljs_bach$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11325 = arguments.length;
var i__4532__auto___11326 = (0);
while(true){
if((i__4532__auto___11326 < len__4531__auto___11325)){
args__4534__auto__.push((arguments[i__4532__auto___11326]));

var G__11327 = (i__4532__auto___11326 + (1));
i__4532__auto___11326 = G__11327;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__11321_11328 = cljs.core.seq(graphs);
var chunk__11322_11329 = null;
var count__11323_11330 = (0);
var i__11324_11331 = (0);
while(true){
if((i__11324_11331 < count__11323_11330)){
var graph_11332 = chunk__11322_11329.cljs$core$IIndexed$_nth$arity$2(null,i__11324_11331);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_11332).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_11332))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_11332));
} else {
}


var G__11333 = seq__11321_11328;
var G__11334 = chunk__11322_11329;
var G__11335 = count__11323_11330;
var G__11336 = (i__11324_11331 + (1));
seq__11321_11328 = G__11333;
chunk__11322_11329 = G__11334;
count__11323_11330 = G__11335;
i__11324_11331 = G__11336;
continue;
} else {
var temp__5457__auto___11337 = cljs.core.seq(seq__11321_11328);
if(temp__5457__auto___11337){
var seq__11321_11338__$1 = temp__5457__auto___11337;
if(cljs.core.chunked_seq_QMARK_(seq__11321_11338__$1)){
var c__4351__auto___11339 = cljs.core.chunk_first(seq__11321_11338__$1);
var G__11340 = cljs.core.chunk_rest(seq__11321_11338__$1);
var G__11341 = c__4351__auto___11339;
var G__11342 = cljs.core.count(c__4351__auto___11339);
var G__11343 = (0);
seq__11321_11328 = G__11340;
chunk__11322_11329 = G__11341;
count__11323_11330 = G__11342;
i__11324_11331 = G__11343;
continue;
} else {
var graph_11344 = cljs.core.first(seq__11321_11338__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_11344).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_11344))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_11344));
} else {
}


var G__11345 = cljs.core.next(seq__11321_11338__$1);
var G__11346 = null;
var G__11347 = (0);
var G__11348 = (0);
seq__11321_11328 = G__11345;
chunk__11322_11329 = G__11346;
count__11323_11330 = G__11347;
i__11324_11331 = G__11348;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(upstream),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(downstream));
});

cljs_bach.synthesis.join_in_parallel.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs_bach.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq11318){
var G__11319 = cljs.core.first(seq11318);
var seq11318__$1 = cljs.core.next(seq11318);
var G__11320 = cljs.core.first(seq11318__$1);
var seq11318__$2 = cljs.core.next(seq11318__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11319,G__11320,seq11318__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11350 = arguments.length;
var i__4532__auto___11351 = (0);
while(true){
if((i__4532__auto___11351 < len__4531__auto___11350)){
args__4534__auto__.push((arguments[i__4532__auto___11351]));

var G__11352 = (i__4532__auto___11351 + (1));
i__4532__auto___11351 = G__11352;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});
goog.exportSymbol('cljs_bach.synthesis.add', cljs_bach.synthesis.add);

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs_bach.synthesis.apply_to_graph,cljs_bach.synthesis.join_in_parallel,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq11349){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11349));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__11353_11357 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__11354_11358 = null;
var count__11355_11359 = (0);
var i__11356_11360 = (0);
while(true){
if((i__11356_11360 < count__11355_11359)){
var i_11361 = chunk__11354_11358.cljs$core$IIndexed$_nth$arity$2(null,i__11356_11360);
(data[i_11361] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_11361) : generate_bit_BANG_.call(null,i_11361)));


var G__11362 = seq__11353_11357;
var G__11363 = chunk__11354_11358;
var G__11364 = count__11355_11359;
var G__11365 = (i__11356_11360 + (1));
seq__11353_11357 = G__11362;
chunk__11354_11358 = G__11363;
count__11355_11359 = G__11364;
i__11356_11360 = G__11365;
continue;
} else {
var temp__5457__auto___11366 = cljs.core.seq(seq__11353_11357);
if(temp__5457__auto___11366){
var seq__11353_11367__$1 = temp__5457__auto___11366;
if(cljs.core.chunked_seq_QMARK_(seq__11353_11367__$1)){
var c__4351__auto___11368 = cljs.core.chunk_first(seq__11353_11367__$1);
var G__11369 = cljs.core.chunk_rest(seq__11353_11367__$1);
var G__11370 = c__4351__auto___11368;
var G__11371 = cljs.core.count(c__4351__auto___11368);
var G__11372 = (0);
seq__11353_11357 = G__11369;
chunk__11354_11358 = G__11370;
count__11355_11359 = G__11371;
i__11356_11360 = G__11372;
continue;
} else {
var i_11373 = cljs.core.first(seq__11353_11367__$1);
(data[i_11373] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_11373) : generate_bit_BANG_.call(null,i_11373)));


var G__11374 = cljs.core.next(seq__11353_11367__$1);
var G__11375 = null;
var G__11376 = (0);
var G__11377 = (0);
seq__11353_11357 = G__11374;
chunk__11354_11358 = G__11375;
count__11355_11359 = G__11376;
i__11356_11360 = G__11377;
continue;
}
} else {
}
}
break;
}

return buffer;
});
cljs_bach.synthesis.buffer = cljs.core.memoize(cljs_bach.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
cljs_bach.synthesis.noise = (function cljs_bach$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var G__11378 = context.createBufferSource();
G__11378.buffer = (function (){var G__11379 = generate_bit_BANG_;
var G__11380 = context;
var G__11381 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__11379,G__11380,G__11381) : cljs_bach.synthesis.buffer.call(null,G__11379,G__11380,G__11381));
})();

G__11378.start(at);

return G__11378;
})());
});
});
/**
 * Random noise.
 */
cljs_bach.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return cljs_bach.synthesis.noise(white);
})();
goog.exportSymbol('cljs_bach.synthesis.white_noise', cljs_bach.synthesis.white_noise);
/**
 * Make a constant value by creating noise with a fixed value.
 */
cljs_bach.synthesis.constant = (function cljs_bach$synthesis$constant(x){
return cljs_bach.synthesis.noise(cljs.core.constantly(x));
});
goog.exportSymbol('cljs_bach.synthesis.constant', cljs_bach.synthesis.constant);
/**
 * A periodic wave.
 */
cljs_bach.synthesis.oscillator = (function cljs_bach$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var G__11382 = context.createOscillator();
G__11382.frequency.value = (0);

cljs_bach.synthesis.plug(G__11382.frequency,freq,context,at,duration);

G__11382.type = type;

G__11382.start(at);

G__11382.stop(((at + duration) + 1.0));

return G__11382;
})());
});
});
cljs_bach.synthesis.sine = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"sine");
goog.exportSymbol('cljs_bach.synthesis.sine', cljs_bach.synthesis.sine);
cljs_bach.synthesis.sawtooth = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"sawtooth");
goog.exportSymbol('cljs_bach.synthesis.sawtooth', cljs_bach.synthesis.sawtooth);
cljs_bach.synthesis.square = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"square");
goog.exportSymbol('cljs_bach.synthesis.square', cljs_bach.synthesis.square);
cljs_bach.synthesis.triangle = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"triangle");
goog.exportSymbol('cljs_bach.synthesis.triangle', cljs_bach.synthesis.triangle);
/**
 * Attenuate frequencies beyond the cutoff, and intensify
 *   the cutoff frequency based on the value of q.
 */
cljs_bach.synthesis.biquad_filter = (function cljs_bach$synthesis$biquad_filter(var_args){
var G__11384 = arguments.length;
switch (G__11384) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3(type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__11385 = context.createBiquadFilter();
G__11385.frequency.value = (0);

cljs_bach.synthesis.plug(G__11385.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug(G__11385.Q,q,context,at,duration);

G__11385.type = type;

return G__11385;
})());
});
});

cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

cljs_bach.synthesis.low_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.biquad_filter,"lowpass");
goog.exportSymbol('cljs_bach.synthesis.low_pass', cljs_bach.synthesis.low_pass);
cljs_bach.synthesis.high_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.biquad_filter,"highpass");
goog.exportSymbol('cljs_bach.synthesis.high_pass', cljs_bach.synthesis.high_pass);
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__11387 = context.createStereoPanner();
cljs_bach.synthesis.plug(G__11387.pan,pan,context,at,duration);

return G__11387;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.stereo_panner', cljs_bach.synthesis.stereo_panner);
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var maximum = (5);
var G__11388 = context.createDelay(maximum);
cljs_bach.synthesis.plug(G__11388.delayTime,seconds,context,at,duration);

return G__11388;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.delay_line', cljs_bach.synthesis.delay_line);
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__11389 = context.createConvolver();
G__11389.buffer = (function (){var G__11390 = generate_bit_BANG_;
var G__11391 = context;
var G__11392 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__11390,G__11391,G__11392) : cljs_bach.synthesis.buffer.call(null,G__11390,G__11391,G__11392));
})();

return G__11389;
})());
});
});
/**
 * Crude reverb.
 */
cljs_bach.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * (function (){var G__11393 = ((1) - (i / length));
var G__11394 = decay;
return Math.pow(G__11393,G__11394);
})());
});})(duration,decay,sample_rate,length))
;
return cljs_bach.synthesis.convolver(logarithmic_decay);
})();
goog.exportSymbol('cljs_bach.synthesis.reverb', cljs_bach.synthesis.reverb);
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([effect,cljs_bach.synthesis.gain(level)], 0))], 0));
});
goog.exportSymbol('cljs_bach.synthesis.enhance', cljs_bach.synthesis.enhance);
cljs_bach.synthesis.get_mp3 = (function cljs_bach$synthesis$get_mp3(uri,callback){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$response_DASH_format,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$arraybuffer,cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"audio",cljs.core.cst$kw$content_DASH_type,"audio/mpeg"], null),cljs.core.cst$kw$handler,callback], null)], 0));
});
/**
 * Play a sample addressed via a URI. Until fetching and decoding is complete, it will play silence.
 */
cljs_bach.synthesis.raw_sample = (function cljs_bach$synthesis$raw_sample(uri){
var psuedo_promise = {};
cljs_bach.synthesis.get_mp3(uri,((function (psuedo_promise){
return (function (p1__11395_SHARP_){
return psuedo_promise.data = p1__11395_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var node = (function (){var G__11398 = context.createBufferSource();
G__11398.start(at);

G__11398.stop((at + duration));

return G__11398;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5457__auto___11399 = psuedo_promise.data;
if(cljs.core.truth_(temp__5457__auto___11399)){
var data_11400 = temp__5457__auto___11399;
var temp__5455__auto___11401 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5455__auto___11401)){
var buffer_11402 = temp__5455__auto___11401;
set_buffer(buffer_11402);
} else {
context.decodeAudioData(data_11400,set_buffer);
}
} else {
}

return node;
})());
});
;})(psuedo_promise))
});
cljs_bach.synthesis.sample = cljs.core.memoize(cljs_bach.synthesis.raw_sample);
goog.exportSymbol('cljs_bach.synthesis.sample', cljs_bach.synthesis.sample);
