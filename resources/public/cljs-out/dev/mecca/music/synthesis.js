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
var G__11128 = arguments.length;
switch (G__11128) {
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
return mecca.music.synthesis.subgraph.call(null,(function (){var G__11130 = context.createGain();
mecca.music.synthesis.plug.call(null,G__11130.gain,level,context,at,duration);

return G__11130;
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
var len__4531__auto___11138 = arguments.length;
var i__4532__auto___11139 = (0);
while(true){
if((i__4532__auto___11139 < len__4531__auto___11138)){
args__4534__auto__.push((arguments[i__4532__auto___11139]));

var G__11140 = (i__4532__auto___11139 + (1));
i__4532__auto___11139 = G__11140;
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

var x_11141 = at;
var coordinates_11142 = corners;
while(true){
var temp__5457__auto___11143 = coordinates_11142;
if(cljs.core.truth_(temp__5457__auto___11143)){
var vec__11132_11144 = temp__5457__auto___11143;
var seq__11133_11145 = cljs.core.seq.call(null,vec__11132_11144);
var first__11134_11146 = cljs.core.first.call(null,seq__11133_11145);
var seq__11133_11147__$1 = cljs.core.next.call(null,seq__11133_11145);
var vec__11135_11148 = first__11134_11146;
var dx_11149 = cljs.core.nth.call(null,vec__11135_11148,(0),null);
var y_11150 = cljs.core.nth.call(null,vec__11135_11148,(1),null);
var remaining_11151 = seq__11133_11147__$1;
audio_node.gain.linearRampToValueAtTime(y_11150,(x_11141 + dx_11149));

var G__11152 = (dx_11149 + x_11141);
var G__11153 = remaining_11151;
x_11141 = G__11152;
coordinates_11142 = G__11153;
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
mecca.music.synthesis.envelope.cljs$lang$applyTo = (function (seq11131){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11131));
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
var len__4531__auto___11157 = arguments.length;
var i__4532__auto___11158 = (0);
while(true){
if((i__4532__auto___11158 < len__4531__auto___11157)){
args__4534__auto__.push((arguments[i__4532__auto___11158]));

var G__11159 = (i__4532__auto___11158 + (1));
i__4532__auto___11158 = G__11159;
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
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__11154_SHARP_){
return mecca.music.synthesis.run_with.call(null,p1__11154_SHARP_,context,at,duration);
}),synths));
});
});

mecca.music.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.music.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq11155){
var G__11156 = cljs.core.first.call(null,seq11155);
var seq11155__$1 = cljs.core.next.call(null,seq11155);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11156,seq11155__$1);
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
var len__4531__auto___11161 = arguments.length;
var i__4532__auto___11162 = (0);
while(true){
if((i__4532__auto___11162 < len__4531__auto___11161)){
args__4534__auto__.push((arguments[i__4532__auto___11162]));

var G__11163 = (i__4532__auto___11162 + (1));
i__4532__auto___11162 = G__11163;
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
mecca.music.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq11160){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11160));
});

mecca.music.synthesis.join_in_parallel = (function mecca$music$synthesis$join_in_parallel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11171 = arguments.length;
var i__4532__auto___11172 = (0);
while(true){
if((i__4532__auto___11172 < len__4531__auto___11171)){
args__4534__auto__.push((arguments[i__4532__auto___11172]));

var G__11173 = (i__4532__auto___11172 + (1));
i__4532__auto___11172 = G__11173;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return mecca.music.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

mecca.music.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__11167_11174 = cljs.core.seq.call(null,graphs);
var chunk__11168_11175 = null;
var count__11169_11176 = (0);
var i__11170_11177 = (0);
while(true){
if((i__11170_11177 < count__11169_11176)){
var graph_11178 = cljs.core._nth.call(null,chunk__11168_11175,i__11170_11177);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_11178).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_11178))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_11178));
} else {
}


var G__11179 = seq__11167_11174;
var G__11180 = chunk__11168_11175;
var G__11181 = count__11169_11176;
var G__11182 = (i__11170_11177 + (1));
seq__11167_11174 = G__11179;
chunk__11168_11175 = G__11180;
count__11169_11176 = G__11181;
i__11170_11177 = G__11182;
continue;
} else {
var temp__5457__auto___11183 = cljs.core.seq.call(null,seq__11167_11174);
if(temp__5457__auto___11183){
var seq__11167_11184__$1 = temp__5457__auto___11183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11167_11184__$1)){
var c__4351__auto___11185 = cljs.core.chunk_first.call(null,seq__11167_11184__$1);
var G__11186 = cljs.core.chunk_rest.call(null,seq__11167_11184__$1);
var G__11187 = c__4351__auto___11185;
var G__11188 = cljs.core.count.call(null,c__4351__auto___11185);
var G__11189 = (0);
seq__11167_11174 = G__11186;
chunk__11168_11175 = G__11187;
count__11169_11176 = G__11188;
i__11170_11177 = G__11189;
continue;
} else {
var graph_11190 = cljs.core.first.call(null,seq__11167_11184__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_11190).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_11190))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_11190));
} else {
}


var G__11191 = cljs.core.next.call(null,seq__11167_11184__$1);
var G__11192 = null;
var G__11193 = (0);
var G__11194 = (0);
seq__11167_11174 = G__11191;
chunk__11168_11175 = G__11192;
count__11169_11176 = G__11193;
i__11170_11177 = G__11194;
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
mecca.music.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq11164){
var G__11165 = cljs.core.first.call(null,seq11164);
var seq11164__$1 = cljs.core.next.call(null,seq11164);
var G__11166 = cljs.core.first.call(null,seq11164__$1);
var seq11164__$2 = cljs.core.next.call(null,seq11164__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11165,G__11166,seq11164__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
mecca.music.synthesis.add = (function mecca$music$synthesis$add(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11196 = arguments.length;
var i__4532__auto___11197 = (0);
while(true){
if((i__4532__auto___11197 < len__4531__auto___11196)){
args__4534__auto__.push((arguments[i__4532__auto___11197]));

var G__11198 = (i__4532__auto___11197 + (1));
i__4532__auto___11197 = G__11198;
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
mecca.music.synthesis.add.cljs$lang$applyTo = (function (seq11195){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11195));
});

mecca.music.synthesis.raw_buffer = (function mecca$music$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__11199_11203 = cljs.core.seq.call(null,cljs.core.range.call(null,frame_count));
var chunk__11200_11204 = null;
var count__11201_11205 = (0);
var i__11202_11206 = (0);
while(true){
if((i__11202_11206 < count__11201_11205)){
var i_11207 = cljs.core._nth.call(null,chunk__11200_11204,i__11202_11206);
(data[i_11207] = generate_bit_BANG_.call(null,i_11207));


var G__11208 = seq__11199_11203;
var G__11209 = chunk__11200_11204;
var G__11210 = count__11201_11205;
var G__11211 = (i__11202_11206 + (1));
seq__11199_11203 = G__11208;
chunk__11200_11204 = G__11209;
count__11201_11205 = G__11210;
i__11202_11206 = G__11211;
continue;
} else {
var temp__5457__auto___11212 = cljs.core.seq.call(null,seq__11199_11203);
if(temp__5457__auto___11212){
var seq__11199_11213__$1 = temp__5457__auto___11212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11199_11213__$1)){
var c__4351__auto___11214 = cljs.core.chunk_first.call(null,seq__11199_11213__$1);
var G__11215 = cljs.core.chunk_rest.call(null,seq__11199_11213__$1);
var G__11216 = c__4351__auto___11214;
var G__11217 = cljs.core.count.call(null,c__4351__auto___11214);
var G__11218 = (0);
seq__11199_11203 = G__11215;
chunk__11200_11204 = G__11216;
count__11201_11205 = G__11217;
i__11202_11206 = G__11218;
continue;
} else {
var i_11219 = cljs.core.first.call(null,seq__11199_11213__$1);
(data[i_11219] = generate_bit_BANG_.call(null,i_11219));


var G__11220 = cljs.core.next.call(null,seq__11199_11213__$1);
var G__11221 = null;
var G__11222 = (0);
var G__11223 = (0);
seq__11199_11203 = G__11220;
chunk__11200_11204 = G__11221;
count__11201_11205 = G__11222;
i__11202_11206 = G__11223;
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
return mecca.music.synthesis.source.call(null,(function (){var G__11224 = context.createBufferSource();
G__11224.buffer = mecca.music.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__11224.start(at);

return G__11224;
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
return mecca.music.synthesis.source.call(null,(function (){var G__11225 = context.createOscillator();
G__11225.frequency.value = (0);

mecca.music.synthesis.plug.call(null,G__11225.frequency,freq,context,at,duration);

G__11225.type = type;

G__11225.start(at);

G__11225.stop(((at + duration) + 1.0));

return G__11225;
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
var G__11227 = arguments.length;
switch (G__11227) {
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
return mecca.music.synthesis.subgraph.call(null,(function (){var G__11228 = context.createBiquadFilter();
G__11228.frequency.value = (0);

mecca.music.synthesis.plug.call(null,G__11228.frequency,freq,context,at,duration);

mecca.music.synthesis.plug.call(null,G__11228.Q,q,context,at,duration);

G__11228.type = type;

return G__11228;
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
return mecca.music.synthesis.subgraph.call(null,(function (){var G__11230 = context.createStereoPanner();
mecca.music.synthesis.plug.call(null,G__11230.pan,pan,context,at,duration);

return G__11230;
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
var G__11231 = context.createDelay(maximum);
mecca.music.synthesis.plug.call(null,G__11231.delayTime,seconds,context,at,duration);

return G__11231;
})());
});
});
goog.exportSymbol('mecca.music.synthesis.delay_line', mecca.music.synthesis.delay_line);
/**
 * Linear convolution.
 */
mecca.music.synthesis.convolver = (function mecca$music$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return mecca.music.synthesis.subgraph.call(null,(function (){var G__11232 = context.createConvolver();
G__11232.buffer = mecca.music.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__11232;
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
var seq__11233 = cljs.core.seq.call(null,notes);
var chunk__11234 = null;
var count__11235 = (0);
var i__11236 = (0);
while(true){
if((i__11236 < count__11235)){
var map__11237 = cljs.core._nth.call(null,chunk__11234,i__11236);
var map__11237__$1 = ((((!((map__11237 == null)))?(((((map__11237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11237):map__11237);
var note = map__11237__$1;
var time = cljs.core.get.call(null,map__11237__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__11237__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__11237__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_11241 = (time + from);
var synth_instance_11242 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),mecca.music.synthesis.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_11243 = mecca.music.synthesis.connect.call(null,synth_instance_11242,mecca.music.synthesis.destination);
connected_instance_11243.call(null,audiocontext,at_11241,duration);


var G__11244 = seq__11233;
var G__11245 = chunk__11234;
var G__11246 = count__11235;
var G__11247 = (i__11236 + (1));
seq__11233 = G__11244;
chunk__11234 = G__11245;
count__11235 = G__11246;
i__11236 = G__11247;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11233);
if(temp__5457__auto__){
var seq__11233__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11233__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11233__$1);
var G__11248 = cljs.core.chunk_rest.call(null,seq__11233__$1);
var G__11249 = c__4351__auto__;
var G__11250 = cljs.core.count.call(null,c__4351__auto__);
var G__11251 = (0);
seq__11233 = G__11248;
chunk__11234 = G__11249;
count__11235 = G__11250;
i__11236 = G__11251;
continue;
} else {
var map__11239 = cljs.core.first.call(null,seq__11233__$1);
var map__11239__$1 = ((((!((map__11239 == null)))?(((((map__11239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11239):map__11239);
var note = map__11239__$1;
var time = cljs.core.get.call(null,map__11239__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__11239__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__11239__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_11252 = (time + from);
var synth_instance_11253 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),mecca.music.synthesis.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_11254 = mecca.music.synthesis.connect.call(null,synth_instance_11253,mecca.music.synthesis.destination);
connected_instance_11254.call(null,audiocontext,at_11252,duration);


var G__11255 = cljs.core.next.call(null,seq__11233__$1);
var G__11256 = null;
var G__11257 = (0);
var G__11258 = (0);
seq__11233 = G__11255;
chunk__11234 = G__11256;
count__11235 = G__11257;
i__11236 = G__11258;
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
