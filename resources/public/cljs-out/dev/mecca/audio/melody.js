// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.audio.melody');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('mecca.audio.scale');
mecca.audio.melody.scales = new cljs.core.PersistentArrayMap(null, 6, ["Pentatonic",mecca.audio.scale.pentatonic,"Chromatic",mecca.audio.scale.chromatic,"Major",mecca.audio.scale.major,"Minor",mecca.audio.scale.minor,"Harmonic Minor",mecca.audio.scale.harmonic_minor,"Double Harmonic Minor",mecca.audio.scale.double_harmonic_minor], null);
mecca.audio.melody.scale_degrees = (function mecca$audio$melody$scale_degrees(scale){
return cljs.core.zipmap(cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.take.cljs$core$IFn$_invoke$arity$2((24),cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.audio.melody.scales,scale))),cljs.core.range.cljs$core$IFn$_invoke$arity$1((24)));
});
mecca.audio.melody.chromatic__GT_diatonic = (function mecca$audio$melody$chromatic__GT_diatonic(interval){
var degrees = mecca.audio.melody.scale_degrees(cljs.core.deref((function (){var G__13967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13967) : re_frame.core.subscribe.call(null,G__13967));
})()));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(degrees,interval);
});
/**
 * Returns a function that translates a beat number into seconds.
 *   e.g. ((bpm 90) 5)
 */
mecca.audio.melody.bpm = (function mecca$audio$melody$bpm(beats){
return (function (beat){
return ((beat / beats) * (60));
});
});
/**
 * Zips an arbitrary quality onto a melody.
 *   e.g. (->> (rhythm [1 1/2]) (having :drum [:kick :snare]))
 */
mecca.audio.melody.having = (function mecca$audio$melody$having(k,values,notes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__13968_SHARP_,p2__13969_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13968_SHARP_,k,p2__13969_SHARP_);
}),notes,values);
});
mecca.audio.melody.utter = (function mecca$audio$melody$utter(object,time,duration,velocity){
if(typeof object === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pitch,object,cljs.core.cst$kw$time,time,cljs.core.cst$kw$duration,duration,cljs.core.cst$kw$velocity,velocity], null)], null);
} else {
if(cljs.core.sequential_QMARK_(object)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__13970_SHARP_){
return (mecca.audio.melody.utter.cljs$core$IFn$_invoke$arity$4 ? mecca.audio.melody.utter.cljs$core$IFn$_invoke$arity$4(p1__13970_SHARP_,time,duration,velocity) : mecca.audio.melody.utter.call(null,p1__13970_SHARP_,time,duration,velocity));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object], 0));
} else {
if(cljs.core.map_QMARK_(object)){
var G__13971 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(object));
var G__13972 = time;
var G__13973 = duration;
var G__13974 = velocity;
return (mecca.audio.melody.utter.cljs$core$IFn$_invoke$arity$4 ? mecca.audio.melody.utter.cljs$core$IFn$_invoke$arity$4(G__13971,G__13972,G__13973,G__13974) : mecca.audio.melody.utter.call(null,G__13971,G__13972,G__13973,G__13974));
} else {
if((object == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$duration,duration], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Translates a sequence of durations and pitches into a melody.
 *   nil pitches signify rests, vectors represent clusters, and maps
 *   represent chords. Vector durations represent repeated notes.
 *   e.g. (phrase [1/2 1/2 3/2 3/2] [0 1 nil 4])
 *   (phrase [1 1 2] [4 3 [0 2]])
 *   (phrase [1 [1 2]] [4 3])
 *   (phrase (repeat 4) (map #(-> triad (root %))) [0 3 4 3])
 */
mecca.audio.melody.phrase = (function mecca$audio$melody$phrase(var_args){
var G__13977 = arguments.length;
switch (G__13977) {
case 3:
return mecca.audio.melody.phrase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return mecca.audio.melody.phrase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.audio.melody.phrase.cljs$core$IFn$_invoke$arity$3 = (function (durations,pitches,velocities){
var wrap = (function (x){
if(cljs.core.sequential_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,wrap),durations);
var normalised_pitches = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([counts,pitches], 0));
var normalised_durations = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(wrap,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([durations], 0));
var times = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),normalised_durations);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(mecca.audio.melody.utter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([normalised_pitches,times,normalised_durations,velocities], 0));
});

mecca.audio.melody.phrase.cljs$core$IFn$_invoke$arity$2 = (function (durations,pitches){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13975_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13975_SHARP_,cljs.core.cst$kw$velocity);
}),mecca.audio.melody.phrase.cljs$core$IFn$_invoke$arity$3(durations,pitches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});

mecca.audio.melody.phrase.cljs$lang$maxFixedArity = 3;

/**
 * Translates a sequence of durations into a rhythm.
 *   e.g. (rhythm [1 1 2])
 */
mecca.audio.melody.rhythm = (function mecca$audio$melody$rhythm(durations){
return mecca.audio.melody.phrase.cljs$core$IFn$_invoke$arity$2(durations,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Synonym for constantly.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :bass)))
 */
mecca.audio.melody.is = cljs.core.constantly;
mecca.audio.melody.if_applicable = (function mecca$audio$melody$if_applicable(applies_QMARK_,f){
return (function (x){
if(cljs.core.truth_((applies_QMARK_.cljs$core$IFn$_invoke$arity$1 ? applies_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : applies_QMARK_.call(null,x)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
return x;
}
});
});
/**
 * Applies f to the k key of each note wherever condition? returns true.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :piano))
 */
mecca.audio.melody.wherever = (function mecca$audio$melody$wherever(applies_QMARK_,k,f,notes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mecca.audio.melody.if_applicable(applies_QMARK_,(function (p1__13979_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__13979_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
})),notes);
});
/**
 * Applies f to the k key of each note in notes, ignoring missing keys.
 *   e.g. (->> notes (where :time (bpm 90)))
 */
mecca.audio.melody.where = (function mecca$audio$melody$where(k,f,notes){
return mecca.audio.melody.wherever((function (p1__13980_SHARP_){
return cljs.core.contains_QMARK_(p1__13980_SHARP_,k);
}),k,f,notes);
});
/**
 * Sets a constant value for each note of a melody.
 *   e.g. (->> notes (all :part :drum))
 */
mecca.audio.melody.all = (function mecca$audio$melody$all(k,v,notes){
return mecca.audio.melody.wherever((mecca.audio.melody.is.cljs$core$IFn$_invoke$arity$1 ? mecca.audio.melody.is.cljs$core$IFn$_invoke$arity$1(true) : mecca.audio.melody.is.call(null,true)),k,(mecca.audio.melody.is.cljs$core$IFn$_invoke$arity$1 ? mecca.audio.melody.is.cljs$core$IFn$_invoke$arity$1(v) : mecca.audio.melody.is.call(null,v)),notes);
});
/**
 * Delay notes by wait.
 *   e.g. (->> melody (after 3))
 */
mecca.audio.melody.after = (function mecca$audio$melody$after(wait,notes){
return mecca.audio.melody.where(cljs.core.cst$kw$time,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,wait),notes);
});
mecca.audio.melody.before_QMARK_ = (function mecca$audio$melody$before_QMARK_(a,b){
return (cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(a) <= cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Blends melodies.
 *   e.g. (->> melody (with bass drums))
 */
mecca.audio.melody.with$ = (function mecca$audio$melody$with(var_args){
var G__13985 = arguments.length;
switch (G__13985) {
case 2:
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___13995 = arguments.length;
var i__4532__auto___13996 = (0);
while(true){
if((i__4532__auto___13996 < len__4531__auto___13995)){
args_arr__4546__auto__.push((arguments[i__4532__auto___13996]));

var G__13997 = (i__4532__auto___13996 + (1));
i__4532__auto___13996 = G__13997;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2 = (function (p__13986,p__13987){
var vec__13988 = p__13986;
var seq__13989 = cljs.core.seq(vec__13988);
var first__13990 = cljs.core.first(seq__13989);
var seq__13989__$1 = cljs.core.next(seq__13989);
var a = first__13990;
var other_as = seq__13989__$1;
var as = vec__13988;
var vec__13991 = p__13987;
var seq__13992 = cljs.core.seq(vec__13991);
var first__13993 = cljs.core.first(seq__13992);
var seq__13992__$1 = cljs.core.next(seq__13992);
var b = first__13993;
var other_bs = seq__13992__$1;
var bs = vec__13991;
if(cljs.core.empty_QMARK_(as)){
return bs;
} else {
if(cljs.core.empty_QMARK_(bs)){
return as;
} else {
if(cljs.core.truth_(mecca.audio.melody.before_QMARK_(a,b))){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,((function (vec__13988,seq__13989,first__13990,seq__13989__$1,a,other_as,as,vec__13991,seq__13992,first__13993,seq__13992__$1,b,other_bs,bs){
return (function (){
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2(other_as,bs);
});})(vec__13988,seq__13989,first__13990,seq__13989__$1,a,other_as,as,vec__13991,seq__13992,first__13993,seq__13992__$1,b,other_bs,bs))
,null,null)));
} else {
return cljs.core.cons(b,(new cljs.core.LazySeq(null,((function (vec__13988,seq__13989,first__13990,seq__13989__$1,a,other_as,as,vec__13991,seq__13992,first__13993,seq__13992__$1,b,other_bs,bs){
return (function (){
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2(as,other_bs);
});})(vec__13988,seq__13989,first__13990,seq__13989__$1,a,other_as,as,vec__13991,seq__13992,first__13993,seq__13992__$1,b,other_bs,bs))
,null,null)));

}
}
}
});

mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$variadic = (function (as,bs,others){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.audio.melody.with$,cljs.core.cons(as,cljs.core.cons(bs,others)));
});

/** @this {Function} */
mecca.audio.melody.with$.cljs$lang$applyTo = (function (seq13982){
var G__13983 = cljs.core.first(seq13982);
var seq13982__$1 = cljs.core.next(seq13982);
var G__13984 = cljs.core.first(seq13982__$1);
var seq13982__$2 = cljs.core.next(seq13982__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13983,G__13984,seq13982__$2);
});

mecca.audio.melody.with$.cljs$lang$maxFixedArity = (2);

/**
 * Replaces part of a melody with another.
 *   e.g. (->> notes (but 2 4 variation))
 */
mecca.audio.melody.but = (function mecca$audio$melody$but(start,end,variation,notes){
var starts_in_QMARK_ = (function (p__13998){
var map__13999 = p__13998;
var map__13999__$1 = ((((!((map__13999 == null)))?(((((map__13999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13999):map__13999);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13999__$1,cljs.core.cst$kw$time);
return (((start <= time)) && ((time < end)));
});
var clip = ((function (starts_in_QMARK_){
return (function (p__14001){
var map__14002 = p__14001;
var map__14002__$1 = ((((!((map__14002 == null)))?(((((map__14002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14002):map__14002);
var note = map__14002__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14002__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14002__$1,cljs.core.cst$kw$duration);
if((((time < start)) && ((start <= (time + duration))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$duration,(start - time));
} else {
return note;
}
});})(starts_in_QMARK_))
;
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2(mecca.audio.melody.after(start,variation),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clip,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(starts_in_QMARK_),notes)));
});
/**
 * Returns the total duration of notes.
 *   e.g. (->> melody duration)
 */
mecca.audio.melody.duration = (function mecca$audio$melody$duration(notes){
var length = (function (p__14004){
var map__14005 = p__14004;
var map__14005__$1 = ((((!((map__14005 == null)))?(((((map__14005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14005):map__14005);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14005__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14005__$1,cljs.core.cst$kw$duration);
return (time + duration);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(length,notes));
});
/**
 * Sequences later after earlier.
 *   e.g. (->> call (then response))
 */
mecca.audio.melody.then = (function mecca$audio$melody$then(later,earlier){
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2(earlier,mecca.audio.melody.after(mecca.audio.melody.duration(earlier),later));
});
mecca.audio.melody.mapthen = (function mecca$audio$melody$mapthen(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14011 = arguments.length;
var i__4532__auto___14012 = (0);
while(true){
if((i__4532__auto___14012 < len__4531__auto___14011)){
args__4534__auto__.push((arguments[i__4532__auto___14012]));

var G__14013 = (i__4532__auto___14012 + (1));
i__4532__auto___14012 = G__14013;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mecca.audio.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mecca.audio.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic = (function (f,melodies){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14008_SHARP_,p2__14007_SHARP_){
return mecca.audio.melody.then(p2__14007_SHARP_,p1__14008_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,melodies));
});

mecca.audio.melody.mapthen.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.melody.mapthen.cljs$lang$applyTo = (function (seq14009){
var G__14010 = cljs.core.first(seq14009);
var seq14009__$1 = cljs.core.next(seq14009);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14010,seq14009__$1);
});

/**
 * Repeats notes n times.
 *   e.g. (->> bassline (times 4))
 */
mecca.audio.melody.times = (function mecca$audio$melody$times(n,notes){
return mecca.audio.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,notes)], 0));
});
/**
 * Transform both :time and :duration according to timing.
 *   e.g. (->> notes (tempo (bpm 120)))
 */
mecca.audio.melody.tempo = (function mecca$audio$melody$tempo(timing,notes){
return mecca.audio.melody.where(cljs.core.cst$kw$time,timing,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14014){
var map__14015 = p__14014;
var map__14015__$1 = ((((!((map__14015 == null)))?(((((map__14015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14015):map__14015);
var note = map__14015__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14015__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14015__$1,cljs.core.cst$kw$duration);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$duration,((function (){var G__14017 = (start + duration);
return (timing.cljs$core$IFn$_invoke$arity$1 ? timing.cljs$core$IFn$_invoke$arity$1(G__14017) : timing.call(null,G__14017));
})() - (timing.cljs$core$IFn$_invoke$arity$1 ? timing.cljs$core$IFn$_invoke$arity$1(start) : timing.call(null,start))));
}),notes));
});
/**
 * Linearly interpolated change between from and to.
 *   e.g. (->> notes (tempo (accelerando 0 4 3/2))))
 */
mecca.audio.melody.accelerando = (function mecca$audio$melody$accelerando(from,to,by){
return (function mecca$audio$melody$accelerando_$_rate(t){
if((from >= t)){
return t;
} else {
if((to >= t)){
var duration = (to - from);
var position = (t - from);
var completion = (position / duration);
var extent = (by - (1));
var base = t;
var extra = (((position * 0.5) * completion) * extent);
return (base + extra);
} else {
return (mecca$audio$melody$accelerando_$_rate(to) + (by * (t - to)));

}
}
});
});
