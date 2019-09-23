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
var degrees = mecca.audio.melody.scale_degrees(cljs.core.deref((function (){var G__12798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12798) : re_frame.core.subscribe.call(null,G__12798));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__12799_SHARP_,p2__12800_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12799_SHARP_,k,p2__12800_SHARP_);
}),notes,values);
});
mecca.audio.melody.utter = (function mecca$audio$melody$utter(object,time,duration,velocity){
if(typeof object === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pitch,object,cljs.core.cst$kw$time,time,cljs.core.cst$kw$duration,duration,cljs.core.cst$kw$velocity,velocity], null)], null);
} else {
if(cljs.core.sequential_QMARK_(object)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__12801_SHARP_){
return (mecca.audio.melody.utter.cljs$core$IFn$_invoke$arity$4 ? mecca.audio.melody.utter.cljs$core$IFn$_invoke$arity$4(p1__12801_SHARP_,time,duration,velocity) : mecca.audio.melody.utter.call(null,p1__12801_SHARP_,time,duration,velocity));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object], 0));
} else {
if(cljs.core.map_QMARK_(object)){
var G__12802 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(object));
var G__12803 = time;
var G__12804 = duration;
var G__12805 = velocity;
return (mecca.audio.melody.utter.cljs$core$IFn$_invoke$arity$4 ? mecca.audio.melody.utter.cljs$core$IFn$_invoke$arity$4(G__12802,G__12803,G__12804,G__12805) : mecca.audio.melody.utter.call(null,G__12802,G__12803,G__12804,G__12805));
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
var G__12808 = arguments.length;
switch (G__12808) {
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12806_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__12806_SHARP_,cljs.core.cst$kw$velocity);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mecca.audio.melody.if_applicable(applies_QMARK_,(function (p1__12810_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__12810_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
})),notes);
});
/**
 * Applies f to the k key of each note in notes, ignoring missing keys.
 *   e.g. (->> notes (where :time (bpm 90)))
 */
mecca.audio.melody.where = (function mecca$audio$melody$where(k,f,notes){
return mecca.audio.melody.wherever((function (p1__12811_SHARP_){
return cljs.core.contains_QMARK_(p1__12811_SHARP_,k);
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
var G__12816 = arguments.length;
switch (G__12816) {
case 2:
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___12826 = arguments.length;
var i__4532__auto___12827 = (0);
while(true){
if((i__4532__auto___12827 < len__4531__auto___12826)){
args_arr__4546__auto__.push((arguments[i__4532__auto___12827]));

var G__12828 = (i__4532__auto___12827 + (1));
i__4532__auto___12827 = G__12828;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2 = (function (p__12817,p__12818){
var vec__12819 = p__12817;
var seq__12820 = cljs.core.seq(vec__12819);
var first__12821 = cljs.core.first(seq__12820);
var seq__12820__$1 = cljs.core.next(seq__12820);
var a = first__12821;
var other_as = seq__12820__$1;
var as = vec__12819;
var vec__12822 = p__12818;
var seq__12823 = cljs.core.seq(vec__12822);
var first__12824 = cljs.core.first(seq__12823);
var seq__12823__$1 = cljs.core.next(seq__12823);
var b = first__12824;
var other_bs = seq__12823__$1;
var bs = vec__12822;
if(cljs.core.empty_QMARK_(as)){
return bs;
} else {
if(cljs.core.empty_QMARK_(bs)){
return as;
} else {
if(cljs.core.truth_(mecca.audio.melody.before_QMARK_(a,b))){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,((function (vec__12819,seq__12820,first__12821,seq__12820__$1,a,other_as,as,vec__12822,seq__12823,first__12824,seq__12823__$1,b,other_bs,bs){
return (function (){
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2(other_as,bs);
});})(vec__12819,seq__12820,first__12821,seq__12820__$1,a,other_as,as,vec__12822,seq__12823,first__12824,seq__12823__$1,b,other_bs,bs))
,null,null)));
} else {
return cljs.core.cons(b,(new cljs.core.LazySeq(null,((function (vec__12819,seq__12820,first__12821,seq__12820__$1,a,other_as,as,vec__12822,seq__12823,first__12824,seq__12823__$1,b,other_bs,bs){
return (function (){
return mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$2(as,other_bs);
});})(vec__12819,seq__12820,first__12821,seq__12820__$1,a,other_as,as,vec__12822,seq__12823,first__12824,seq__12823__$1,b,other_bs,bs))
,null,null)));

}
}
}
});

mecca.audio.melody.with$.cljs$core$IFn$_invoke$arity$variadic = (function (as,bs,others){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.audio.melody.with$,cljs.core.cons(as,cljs.core.cons(bs,others)));
});

/** @this {Function} */
mecca.audio.melody.with$.cljs$lang$applyTo = (function (seq12813){
var G__12814 = cljs.core.first(seq12813);
var seq12813__$1 = cljs.core.next(seq12813);
var G__12815 = cljs.core.first(seq12813__$1);
var seq12813__$2 = cljs.core.next(seq12813__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12814,G__12815,seq12813__$2);
});

mecca.audio.melody.with$.cljs$lang$maxFixedArity = (2);

/**
 * Replaces part of a melody with another.
 *   e.g. (->> notes (but 2 4 variation))
 */
mecca.audio.melody.but = (function mecca$audio$melody$but(start,end,variation,notes){
var starts_in_QMARK_ = (function (p__12829){
var map__12830 = p__12829;
var map__12830__$1 = ((((!((map__12830 == null)))?(((((map__12830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12830):map__12830);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12830__$1,cljs.core.cst$kw$time);
return (((start <= time)) && ((time < end)));
});
var clip = ((function (starts_in_QMARK_){
return (function (p__12832){
var map__12833 = p__12832;
var map__12833__$1 = ((((!((map__12833 == null)))?(((((map__12833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12833):map__12833);
var note = map__12833__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12833__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12833__$1,cljs.core.cst$kw$duration);
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
var length = (function (p__12835){
var map__12836 = p__12835;
var map__12836__$1 = ((((!((map__12836 == null)))?(((((map__12836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12836):map__12836);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12836__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12836__$1,cljs.core.cst$kw$duration);
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
var len__4531__auto___12842 = arguments.length;
var i__4532__auto___12843 = (0);
while(true){
if((i__4532__auto___12843 < len__4531__auto___12842)){
args__4534__auto__.push((arguments[i__4532__auto___12843]));

var G__12844 = (i__4532__auto___12843 + (1));
i__4532__auto___12843 = G__12844;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mecca.audio.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mecca.audio.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic = (function (f,melodies){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__12839_SHARP_,p2__12838_SHARP_){
return mecca.audio.melody.then(p2__12838_SHARP_,p1__12839_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,melodies));
});

mecca.audio.melody.mapthen.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mecca.audio.melody.mapthen.cljs$lang$applyTo = (function (seq12840){
var G__12841 = cljs.core.first(seq12840);
var seq12840__$1 = cljs.core.next(seq12840);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12841,seq12840__$1);
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
return mecca.audio.melody.where(cljs.core.cst$kw$time,timing,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12845){
var map__12846 = p__12845;
var map__12846__$1 = ((((!((map__12846 == null)))?(((((map__12846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12846):map__12846);
var note = map__12846__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12846__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12846__$1,cljs.core.cst$kw$duration);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$duration,((function (){var G__12848 = (start + duration);
return (timing.cljs$core$IFn$_invoke$arity$1 ? timing.cljs$core$IFn$_invoke$arity$1(G__12848) : timing.call(null,G__12848));
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
