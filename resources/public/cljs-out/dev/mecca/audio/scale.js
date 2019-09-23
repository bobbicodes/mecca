// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.audio.scale');
goog.require('cljs.core');
goog.require('cljs.core.constants');
mecca.audio.scale.scale = (function mecca$audio$scale$scale(var_args){
var G__12794 = arguments.length;
switch (G__12794) {
case 1:
return mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$1 = (function (intervals){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.cycle(intervals));
});

mecca.audio.scale.scale.cljs$core$IFn$_invoke$arity$2 = (function (intervals,start){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,start,cljs.core.cycle(intervals));
});

mecca.audio.scale.scale.cljs$lang$maxFixedArity = 2;

/**
 * Seven-tone scale, commonly used in Western music.
 */
mecca.audio.scale.major = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1),(2),(2),(2),(1)], null);
/**
 * Six-tone scale, used for blues music.
 */
mecca.audio.scale.blues = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1),(1),(3),(2)], null);
/**
 * Five-tone scale, common to East Asian music.
 */
mecca.audio.scale.pentatonic = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(2),(3),(2)], null);
/**
 * Scale consisting of all twelve tones.
 */
mecca.audio.scale.chromatic = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null);
mecca.audio.scale.sharp = cljs.core.inc;
mecca.audio.scale.flat = cljs.core.dec;
mecca.audio.scale.mode = (function mecca$audio$scale$mode(n){
var c = cljs.core.mod(n,(7));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(c,mecca.audio.scale.major),cljs.core.take.cljs$core$IFn$_invoke$arity$2(c,mecca.audio.scale.major));
});
mecca.audio.scale.ionian = mecca.audio.scale.mode((0));
mecca.audio.scale.dorian = mecca.audio.scale.mode((1));
mecca.audio.scale.phrygian = mecca.audio.scale.mode((2));
mecca.audio.scale.lydian = mecca.audio.scale.mode((3));
mecca.audio.scale.mixolydian = mecca.audio.scale.mode((4));
mecca.audio.scale.aeolian = mecca.audio.scale.mode((5));
mecca.audio.scale.locrian = mecca.audio.scale.mode((6));
/**
 * Natural minor is another name for the Aeolian mode.
 */
mecca.audio.scale.minor = mecca.audio.scale.aeolian;
mecca.audio.scale.harmonic_minor = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2),(2),(1),(3),(1)], null);
mecca.audio.scale.double_harmonic_minor = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(1),(2),(1),(3),(1)], null);
