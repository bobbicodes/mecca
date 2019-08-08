// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_bach.synthesis');
goog.require('cljs.core');
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
var G__12215 = arguments.length;
switch (G__12215) {
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output], null);
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.call(null,singleton,singleton);
});

cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
cljs_bach.synthesis.source = (function cljs_bach$synthesis$source(node){
return cljs_bach.synthesis.subgraph.call(null,null,node);
});
/**
 * A graph of synthesis nodes without an output,
 *   so it can't connect to another graph.
 */
cljs_bach.synthesis.sink = (function cljs_bach$synthesis$sink(node){
return cljs_bach.synthesis.subgraph.call(null,node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
cljs_bach.synthesis.run_with = (function cljs_bach$synthesis$run_with(synth,context,at,duration){
return synth.call(null,context,at,duration);
});
goog.exportSymbol('cljs_bach.synthesis.run_with', cljs_bach.synthesis.run_with);
/**
 * The destination of the audio context i.e. the speakers.
 */
cljs_bach.synthesis.destination = (function cljs_bach$synthesis$destination(context,at,duration){
return cljs_bach.synthesis.sink.call(null,context.destination);
});
goog.exportSymbol('cljs_bach.synthesis.destination', cljs_bach.synthesis.destination);
cljs_bach.synthesis.plug = (function cljs_bach$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs_bach.synthesis.run_with.call(null,input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
cljs_bach.synthesis.gain = (function cljs_bach$synthesis$gain(level){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__12217 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__12217.gain,level,context,at,duration);

return G__12217;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.gain', cljs_bach.synthesis.gain);
/**
 * Pass the signal through unaltered.
 */
cljs_bach.synthesis.pass_through = cljs_bach.synthesis.gain.call(null,1.0);
goog.exportSymbol('cljs_bach.synthesis.pass_through', cljs_bach.synthesis.pass_through);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
cljs_bach.synthesis.envelope = (function cljs_bach$synthesis$envelope(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12225 = arguments.length;
var i__4532__auto___12226 = (0);
while(true){
if((i__4532__auto___12226 < len__4531__auto___12225)){
args__4534__auto__.push((arguments[i__4532__auto___12226]));

var G__12227 = (i__4532__auto___12226 + (1));
i__4532__auto___12226 = G__12227;
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

var x_12228 = at;
var coordinates_12229 = corners;
while(true){
var temp__5457__auto___12230 = coordinates_12229;
if(cljs.core.truth_(temp__5457__auto___12230)){
var vec__12219_12231 = temp__5457__auto___12230;
var seq__12220_12232 = cljs.core.seq.call(null,vec__12219_12231);
var first__12221_12233 = cljs.core.first.call(null,seq__12220_12232);
var seq__12220_12234__$1 = cljs.core.next.call(null,seq__12220_12232);
var vec__12222_12235 = first__12221_12233;
var dx_12236 = cljs.core.nth.call(null,vec__12222_12235,(0),null);
var y_12237 = cljs.core.nth.call(null,vec__12222_12235,(1),null);
var remaining_12238 = seq__12220_12234__$1;
audio_node.gain.linearRampToValueAtTime(y_12237,(x_12228 + dx_12236));

var G__12239 = (dx_12236 + x_12228);
var G__12240 = remaining_12238;
x_12228 = G__12239;
coordinates_12229 = G__12240;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq12218){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12218));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
cljs_bach.synthesis.adshr = (function cljs_bach$synthesis$adshr(attack,decay,sustain,hold,release){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null));
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
var node = cljs_bach.synthesis.adshr.call(null,attack,decay,sustain,hold,release);
return cljs_bach.synthesis.run_with.call(null,node,context,at,duration);
});
});
goog.exportSymbol('cljs_bach.synthesis.adsr', cljs_bach.synthesis.adsr);
/**
 * A simple envelope.
 */
cljs_bach.synthesis.percussive = (function cljs_bach$synthesis$percussive(attack,decay){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null));
});
goog.exportSymbol('cljs_bach.synthesis.percussive', cljs_bach.synthesis.percussive);
/**
 * Like apply, but for the node graphs synths produce.
 */
cljs_bach.synthesis.apply_to_graph = (function cljs_bach$synthesis$apply_to_graph(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12244 = arguments.length;
var i__4532__auto___12245 = (0);
while(true){
if((i__4532__auto___12245 < len__4531__auto___12244)){
args__4534__auto__.push((arguments[i__4532__auto___12245]));

var G__12246 = (i__4532__auto___12245 + (1));
i__4532__auto___12245 = G__12246;
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
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__12241_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__12241_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_bach.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq12242){
var G__12243 = cljs.core.first.call(null,seq12242);
var seq12242__$1 = cljs.core.next.call(null,seq12242);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12243,seq12242__$1);
});

cljs_bach.synthesis.join_in_series = (function cljs_bach$synthesis$join_in_series(graph1,graph2){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph1).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph2));

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph1),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph2));
});
/**
 * Use the output of one synth as the input to another.
 */
cljs_bach.synthesis.connect = (function cljs_bach$synthesis$connect(upstream_synth,downstream_synth){
return cljs_bach.synthesis.apply_to_graph.call(null,cljs_bach.synthesis.join_in_series,upstream_synth,downstream_synth);
});
goog.exportSymbol('cljs_bach.synthesis.connect', cljs_bach.synthesis.connect);
/**
 * Connect synths in series.
 */
cljs_bach.synthesis.connect__GT_ = (function cljs_bach$synthesis$connect__GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12248 = arguments.length;
var i__4532__auto___12249 = (0);
while(true){
if((i__4532__auto___12249 < len__4531__auto___12248)){
args__4534__auto__.push((arguments[i__4532__auto___12249]));

var G__12250 = (i__4532__auto___12249 + (1));
i__4532__auto___12249 = G__12250;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.call(null,cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq12247){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12247));
});

cljs_bach.synthesis.join_in_parallel = (function cljs_bach$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12258 = arguments.length;
var i__4532__auto___12259 = (0);
while(true){
if((i__4532__auto___12259 < len__4531__auto___12258)){
args__4534__auto__.push((arguments[i__4532__auto___12259]));

var G__12260 = (i__4532__auto___12259 + (1));
i__4532__auto___12259 = G__12260;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__12254_12261 = cljs.core.seq.call(null,graphs);
var chunk__12255_12262 = null;
var count__12256_12263 = (0);
var i__12257_12264 = (0);
while(true){
if((i__12257_12264 < count__12256_12263)){
var graph_12265 = cljs.core._nth.call(null,chunk__12255_12262,i__12257_12264);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_12265).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_12265))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_12265));
} else {
}


var G__12266 = seq__12254_12261;
var G__12267 = chunk__12255_12262;
var G__12268 = count__12256_12263;
var G__12269 = (i__12257_12264 + (1));
seq__12254_12261 = G__12266;
chunk__12255_12262 = G__12267;
count__12256_12263 = G__12268;
i__12257_12264 = G__12269;
continue;
} else {
var temp__5457__auto___12270 = cljs.core.seq.call(null,seq__12254_12261);
if(temp__5457__auto___12270){
var seq__12254_12271__$1 = temp__5457__auto___12270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12254_12271__$1)){
var c__4351__auto___12272 = cljs.core.chunk_first.call(null,seq__12254_12271__$1);
var G__12273 = cljs.core.chunk_rest.call(null,seq__12254_12271__$1);
var G__12274 = c__4351__auto___12272;
var G__12275 = cljs.core.count.call(null,c__4351__auto___12272);
var G__12276 = (0);
seq__12254_12261 = G__12273;
chunk__12255_12262 = G__12274;
count__12256_12263 = G__12275;
i__12257_12264 = G__12276;
continue;
} else {
var graph_12277 = cljs.core.first.call(null,seq__12254_12271__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_12277).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_12277))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_12277));
} else {
}


var G__12278 = cljs.core.next.call(null,seq__12254_12271__$1);
var G__12279 = null;
var G__12280 = (0);
var G__12281 = (0);
seq__12254_12261 = G__12278;
chunk__12255_12262 = G__12279;
count__12256_12263 = G__12280;
i__12257_12264 = G__12281;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(upstream),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(downstream));
});

cljs_bach.synthesis.join_in_parallel.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs_bach.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq12251){
var G__12252 = cljs.core.first.call(null,seq12251);
var seq12251__$1 = cljs.core.next.call(null,seq12251);
var G__12253 = cljs.core.first.call(null,seq12251__$1);
var seq12251__$2 = cljs.core.next.call(null,seq12251__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12252,G__12253,seq12251__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12283 = arguments.length;
var i__4532__auto___12284 = (0);
while(true){
if((i__4532__auto___12284 < len__4531__auto___12283)){
args__4534__auto__.push((arguments[i__4532__auto___12284]));

var G__12285 = (i__4532__auto___12284 + (1));
i__4532__auto___12284 = G__12285;
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
return cljs.core.apply.call(null,cljs_bach.synthesis.apply_to_graph,cljs_bach.synthesis.join_in_parallel,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq12282){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12282));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__12286_12290 = cljs.core.seq.call(null,cljs.core.range.call(null,frame_count));
var chunk__12287_12291 = null;
var count__12288_12292 = (0);
var i__12289_12293 = (0);
while(true){
if((i__12289_12293 < count__12288_12292)){
var i_12294 = cljs.core._nth.call(null,chunk__12287_12291,i__12289_12293);
(data[i_12294] = generate_bit_BANG_.call(null,i_12294));


var G__12295 = seq__12286_12290;
var G__12296 = chunk__12287_12291;
var G__12297 = count__12288_12292;
var G__12298 = (i__12289_12293 + (1));
seq__12286_12290 = G__12295;
chunk__12287_12291 = G__12296;
count__12288_12292 = G__12297;
i__12289_12293 = G__12298;
continue;
} else {
var temp__5457__auto___12299 = cljs.core.seq.call(null,seq__12286_12290);
if(temp__5457__auto___12299){
var seq__12286_12300__$1 = temp__5457__auto___12299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12286_12300__$1)){
var c__4351__auto___12301 = cljs.core.chunk_first.call(null,seq__12286_12300__$1);
var G__12302 = cljs.core.chunk_rest.call(null,seq__12286_12300__$1);
var G__12303 = c__4351__auto___12301;
var G__12304 = cljs.core.count.call(null,c__4351__auto___12301);
var G__12305 = (0);
seq__12286_12290 = G__12302;
chunk__12287_12291 = G__12303;
count__12288_12292 = G__12304;
i__12289_12293 = G__12305;
continue;
} else {
var i_12306 = cljs.core.first.call(null,seq__12286_12300__$1);
(data[i_12306] = generate_bit_BANG_.call(null,i_12306));


var G__12307 = cljs.core.next.call(null,seq__12286_12300__$1);
var G__12308 = null;
var G__12309 = (0);
var G__12310 = (0);
seq__12286_12290 = G__12307;
chunk__12287_12291 = G__12308;
count__12288_12292 = G__12309;
i__12289_12293 = G__12310;
continue;
}
} else {
}
}
break;
}

return buffer;
});
cljs_bach.synthesis.buffer = cljs.core.memoize.call(null,cljs_bach.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
cljs_bach.synthesis.noise = (function cljs_bach$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__12311 = context.createBufferSource();
G__12311.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__12311.start(at);

return G__12311;
})());
});
});
/**
 * Random noise.
 */
cljs_bach.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return cljs_bach.synthesis.noise.call(null,white);
})();
goog.exportSymbol('cljs_bach.synthesis.white_noise', cljs_bach.synthesis.white_noise);
/**
 * Make a constant value by creating noise with a fixed value.
 */
cljs_bach.synthesis.constant = (function cljs_bach$synthesis$constant(x){
return cljs_bach.synthesis.noise.call(null,cljs.core.constantly.call(null,x));
});
goog.exportSymbol('cljs_bach.synthesis.constant', cljs_bach.synthesis.constant);
/**
 * A periodic wave.
 */
cljs_bach.synthesis.oscillator = (function cljs_bach$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__12312 = context.createOscillator();
G__12312.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__12312.frequency,freq,context,at,duration);

G__12312.type = type;

G__12312.start(at);

G__12312.stop(((at + duration) + 1.0));

return G__12312;
})());
});
});
cljs_bach.synthesis.sine = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sine");
goog.exportSymbol('cljs_bach.synthesis.sine', cljs_bach.synthesis.sine);
cljs_bach.synthesis.sawtooth = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sawtooth");
goog.exportSymbol('cljs_bach.synthesis.sawtooth', cljs_bach.synthesis.sawtooth);
cljs_bach.synthesis.square = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"square");
goog.exportSymbol('cljs_bach.synthesis.square', cljs_bach.synthesis.square);
cljs_bach.synthesis.triangle = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"triangle");
goog.exportSymbol('cljs_bach.synthesis.triangle', cljs_bach.synthesis.triangle);
/**
 * Attenuate frequencies beyond the cutoff, and intensify
 *   the cutoff frequency based on the value of q.
 */
cljs_bach.synthesis.biquad_filter = (function cljs_bach$synthesis$biquad_filter(var_args){
var G__12314 = arguments.length;
switch (G__12314) {
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
return cljs_bach.synthesis.biquad_filter.call(null,type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__12315 = context.createBiquadFilter();
G__12315.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__12315.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__12315.Q,q,context,at,duration);

G__12315.type = type;

return G__12315;
})());
});
});

cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

cljs_bach.synthesis.low_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"lowpass");
goog.exportSymbol('cljs_bach.synthesis.low_pass', cljs_bach.synthesis.low_pass);
cljs_bach.synthesis.high_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"highpass");
goog.exportSymbol('cljs_bach.synthesis.high_pass', cljs_bach.synthesis.high_pass);
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__12317 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__12317.pan,pan,context,at,duration);

return G__12317;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.stereo_panner', cljs_bach.synthesis.stereo_panner);
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__12318 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__12318.delayTime,seconds,context,at,duration);

return G__12318;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.delay_line', cljs_bach.synthesis.delay_line);
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__12319 = context.createConvolver();
G__12319.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__12319;
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
return (((Math.random(i) * 2.0) - 1.0) * Math.pow(((1) - (i / length)),decay));
});})(duration,decay,sample_rate,length))
;
return cljs_bach.synthesis.convolver.call(null,logarithmic_decay);
})();
goog.exportSymbol('cljs_bach.synthesis.reverb', cljs_bach.synthesis.reverb);
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.call(null,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.call(null,effect,cljs_bach.synthesis.gain.call(null,level)));
});
goog.exportSymbol('cljs_bach.synthesis.enhance', cljs_bach.synthesis.enhance);
cljs_bach.synthesis.get_mp3 = (function cljs_bach$synthesis$get_mp3(uri,callback){
return ajax.core.GET.call(null,uri,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arraybuffer","arraybuffer",1394959763),new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"audio",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"audio/mpeg"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),callback], null));
});
/**
 * Play a sample addressed via a URI. Until fetching and decoding is complete, it will play silence.
 */
cljs_bach.synthesis.raw_sample = (function cljs_bach$synthesis$raw_sample(uri){
var psuedo_promise = {};
cljs_bach.synthesis.get_mp3.call(null,uri,((function (psuedo_promise){
return (function (p1__12320_SHARP_){
return psuedo_promise.data = p1__12320_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var node = (function (){var G__12323 = context.createBufferSource();
G__12323.start(at);

G__12323.stop((at + duration));

return G__12323;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5457__auto___12324 = psuedo_promise.data;
if(cljs.core.truth_(temp__5457__auto___12324)){
var data_12325 = temp__5457__auto___12324;
var temp__5455__auto___12326 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5455__auto___12326)){
var buffer_12327 = temp__5455__auto___12326;
set_buffer.call(null,buffer_12327);
} else {
context.decodeAudioData(data_12325,set_buffer);
}
} else {
}

return node;
})());
});
;})(psuedo_promise))
});
cljs_bach.synthesis.sample = cljs.core.memoize.call(null,cljs_bach.synthesis.raw_sample);
goog.exportSymbol('cljs_bach.synthesis.sample', cljs_bach.synthesis.sample);

//# sourceMappingURL=synthesis.js.map
