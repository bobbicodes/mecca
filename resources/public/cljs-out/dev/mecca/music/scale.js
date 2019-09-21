// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music.scale');
goog.require('cljs.core');
mecca.music.scale.scale = (function mecca$music$scale$scale(var_args){
var G__11305 = arguments.length;
switch (G__11305) {
case 1:
return mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$1 = (function (intervals){
return cljs.core.reductions.call(null,cljs.core._PLUS_,cljs.core.cycle.call(null,intervals));
});

mecca.music.scale.scale.cljs$core$IFn$_invoke$arity$2 = (function (intervals,start){
return cljs.core.reductions.call(null,cljs.core._PLUS_,start,cljs.core.cycle.call(null,intervals));
});

mecca.music.scale.scale.cljs$lang$maxFixedArity = 2;

/**
 * Seven-tone scale, commonly used in Western music.
 */
mecca.music.scale.major = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1),(2),(2),(2),(1)], null);
/**
 * Six-tone scale, used for blues music.
 */
mecca.music.scale.blues = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(1),(3),(2)], null);
/**
 * Five-tone scale, common to East Asian music.
 */
mecca.music.scale.pentatonic = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(2),(3),(2)], null);
/**
 * Scale consisting of all twelve tones.
 */
mecca.music.scale.chromatic = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null);
mecca.music.scale.sharp = cljs.core.inc;
mecca.music.scale.flat = cljs.core.dec;
mecca.music.scale.mode = (function mecca$music$scale$mode(n){
var c = cljs.core.mod.call(null,n,(7));
return cljs.core.concat.call(null,cljs.core.drop.call(null,c,mecca.music.scale.major),cljs.core.take.call(null,c,mecca.music.scale.major));
});
mecca.music.scale.ionian = mecca.music.scale.mode.call(null,(0));
mecca.music.scale.dorian = mecca.music.scale.mode.call(null,(1));
mecca.music.scale.phrygian = mecca.music.scale.mode.call(null,(2));
mecca.music.scale.lydian = mecca.music.scale.mode.call(null,(3));
mecca.music.scale.mixolydian = mecca.music.scale.mode.call(null,(4));
mecca.music.scale.aeolian = mecca.music.scale.mode.call(null,(5));
mecca.music.scale.locrian = mecca.music.scale.mode.call(null,(6));
/**
 * Natural minor is another name for the Aeolian mode.
 */
mecca.music.scale.minor = mecca.music.scale.aeolian;
mecca.music.scale.harmonic_minor = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2),(2),(1),(3),(1)], null);
mecca.music.scale.double_harmonic_minor = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(1),(2),(1),(3),(1)], null);

//# sourceMappingURL=scale.js.map
