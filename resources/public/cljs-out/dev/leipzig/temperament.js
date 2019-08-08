// Compiled by ClojureScript 1.10.339 {}
goog.provide('leipzig.temperament');
goog.require('cljs.core');
leipzig.temperament.pow = (function leipzig$temperament$pow(p1__8754_SHARP_,p2__8755_SHARP_){
return Math.pow(p1__8754_SHARP_,p2__8755_SHARP_);
});
/**
 * The difference between an octave constructed out of pure fifths, and one constructed
 *   from a pure 2/1 ratio.
 */
leipzig.temperament.pythagorean_comma = ((531441) / (524288));
leipzig.temperament.align_concert_a = (function leipzig$temperament$align_concert_a(tuning){
return (function (midi){
return (tuning.call(null,midi) * ((440) / tuning.call(null,(69))));
});
});
leipzig.temperament.temper = (function leipzig$temperament$temper(midi,ratios){
if((midi < (0))){
return (((1) / (2)) * leipzig.temperament.temper.call(null,(midi + (12)),ratios));
} else {
if((midi > (11))){
return ((2) * leipzig.temperament.temper.call(null,(midi - (12)),ratios));
} else {
return cljs.core.nth.call(null,ratios,midi);

}
}
});
leipzig.temperament.tune = (function leipzig$temperament$tune(root,incremental_ratios){
var geometric_progression = cljs.core.partial.call(null,cljs.core.reductions,cljs.core._STAR_,(1));
var ratios = cljs.core.sort.call(null,cljs.core.map.call(null,((function (geometric_progression){
return (function leipzig$temperament$tune_$_normalise(ratio){
if((ratio < (2))){
return ratio;
} else {
return leipzig$temperament$tune_$_normalise.call(null,(ratio / (2)));
}
});})(geometric_progression))
,geometric_progression.call(null,incremental_ratios)));
var tuning = ((function (geometric_progression,ratios){
return (function (midi){
return leipzig.temperament.temper.call(null,(midi - root),ratios);
});})(geometric_progression,ratios))
;
return leipzig.temperament.align_concert_a.call(null,tuning);
});
/**
 * Converts midi to hertz using equal temperament.
 *   e.g. (equal 69)
 */
leipzig.temperament.equal = leipzig.temperament.tune.call(null,(69),cljs.core.repeat.call(null,(11),leipzig.temperament.pow.call(null,(2),((1) / (12)))));
/**
 * Returns a function that converts midi to hertz using Pythagorean temperament, measuring
 *   ratios relative to root. The wolf tone is the fifth from one midi above root.
 *   e.g. ((pythagorean 61) 69)
 */
leipzig.temperament.pythagorean = (function leipzig$temperament$pythagorean(root){
var pure = ((3) / (2));
var wolf = (pure / leipzig.temperament.pythagorean_comma);
var fifths = cljs.core.mapcat.call(null,cljs.core.repeat,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pure,wolf,pure], null));
return leipzig.temperament.tune.call(null,root,fifths);
});
leipzig.temperament.five_limit_just = (function leipzig$temperament$five_limit_just(root){

return leipzig.temperament.align_concert_a.call(null,(function (midi){
return leipzig.temperament.temper.call(null,(midi - root),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) / (1)),((135) / (128)),((9) / (8)),((6) / (5)),((5) / (4)),((4) / (3)),((45) / (32)),((3) / (2)),((8) / (5)),((27) / (16)),((9) / (5)),((15) / (8))], null));
}));
});
leipzig.temperament.seven_limit_just = (function leipzig$temperament$seven_limit_just(root){

return leipzig.temperament.align_concert_a.call(null,(function (midi){
return leipzig.temperament.temper.call(null,(midi - root),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) / (1)),((135) / (128)),((8) / (7)),((6) / (5)),((5) / (4)),((4) / (3)),((7) / (5)),((3) / (2)),((8) / (5)),((27) / (16)),((7) / (4)),((15) / (8))], null));
}));
});
/**
 * Returns a function that converts midi to hertz using just intonation, measuring ratios
 *   relative to root. See five-limit-just.
 *   e.g. ((just 61) 69)
 */
leipzig.temperament.just = leipzig.temperament.five_limit_just;
/**
 * Returns a function that converts midi to hertz using quarter-comma meantone tuning,
 *   measuring ratios relative to root. The major third is a pure 5/4 ratio, but there are
 *   many wolf tones.
 *   e.g. ((meantone 61) 69)
 */
leipzig.temperament.meantone = (function leipzig$temperament$meantone(root){
var narrow = leipzig.temperament.pow.call(null,(5),((1) / (4)));
var wolf = (narrow * ((128) / (125)));
var fifths = cljs.core.mapcat.call(null,cljs.core.repeat,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [narrow,wolf,narrow], null));
return leipzig.temperament.tune.call(null,root,fifths);
});
/**
 * Returns a function that converts midi to hertz using Werckmeister's well-temperament
 *   based on 1/4 comma divisions (Werkmeister I). Ratios are relative to root.
 *   e.g. ((werckmeister-i 61) 69)
 */
leipzig.temperament.werckmeister_i = (function leipzig$temperament$werckmeister_i(root){
var pure = ((3) / (2));
var narrow = (pure / leipzig.temperament.pow.call(null,leipzig.temperament.pythagorean_comma,((1) / (4))));
var fifths = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [narrow,narrow,narrow,pure,pure,narrow,pure,pure,pure,pure,pure], null);
return leipzig.temperament.tune.call(null,root,fifths);
});
/**
 * Returns a function that converts midi to hertz using Werckmeister's well-temperament
 *   based on 1/3 comma divisions (Werckmeister II). Ratios are relative to root.
 *   e.g. ((werckmeister-ii 61) 69)
 */
leipzig.temperament.werckmeister_ii = (function leipzig$temperament$werckmeister_ii(root){
var pure = ((3) / (2));
var narrow = (pure / leipzig.temperament.pow.call(null,leipzig.temperament.pythagorean_comma,((1) / (3))));
var wide = (pure * leipzig.temperament.pow.call(null,leipzig.temperament.pythagorean_comma,((1) / (3))));
var fifths = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [narrow,pure,narrow,pure,narrow,pure,narrow,pure,wide,wide,narrow], null);
return leipzig.temperament.tune.call(null,root,fifths);
});
/**
 * Returns a function that converts midi to hertz using Werckmeister's well-temperament
 *   based on 1/4 comma divisions (Werckmeister III). Ratios are relative to root.
 *   e.g. ((werckmeister-iii 61) 69)
 */
leipzig.temperament.werckmeister_iii = (function leipzig$temperament$werckmeister_iii(root){
var pure = ((3) / (2));
var narrow = (pure / leipzig.temperament.pow.call(null,leipzig.temperament.pythagorean_comma,((1) / (4))));
var wide = (pure * leipzig.temperament.pow.call(null,leipzig.temperament.pythagorean_comma,((1) / (4))));
var fifths = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [pure,pure,narrow,narrow,pure,pure,narrow,narrow,wide,pure,pure], null);
return leipzig.temperament.tune.call(null,root,fifths);
});
/**
 * Returns a function that converts midi to hertz using Werckmeister I well-temperament.
 *   See werckmeister-i.
 *   e.g. ((well 61) 69)
 */
leipzig.temperament.well = leipzig.temperament.werckmeister_i;

//# sourceMappingURL=temperament.js.map
