// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.notation');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
mecca.notation.brace = (function mecca$notation$brace(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate (0.7,7.825) scale(0.6, 0.7)",cljs.core.cst$kw$d,"M1.731 28.982H1.576v-.084-.084h-.113-.113v-.113-.113h-.113-.113v-.225-.225h-.113-.113v-.225-.225h-.113-.113v-.225-.225H.562.45V26.787 26.337H.338.225v-1.914-1.914h.113.113v-.562-.562h.113.113v-.675-.675h.113.113v-.788-.788h.113.113v-.675-.675h-.113-.113v-.562-.562h-.113-.113v-.338-.338h-.113-.113v-.113-.113H.338.225v-.225-.225H.113 0v-.225-.225h.113.113v-.113-.113h.113.113v-.225-.225h.113.113v-.225-.225h.113.113v-.562-.562h.113.113V11.255 10.58H1.013.901V9.792 9.004H.788.675V8.329 7.654H.562.45V7.09 6.528H.338.225V4.614 2.702h.113.113V2.251 1.801h.113.113v-.225-.225h.113.113v-.225-.225h.113.113v-.225-.225h.113.113V.338.225h.113.113V.113 0H1.731 1.885V.113.225H1.843 1.801v.113.113h-.113-.113v.225.225h-.113-.113v.113.113h-.113-.113v.338.338h-.113-.113v1.801 1.801h.113.113v.675.675h.113.113v.562.562h.113.113v2.026 2.026h-.113-.113v.45.45h-.113-.113v.225.225h-.113-.113v.225.225h-.113-.113v.225.225h-.113-.113v.113.113H.338.225v.113.113h.113.113v.113.113h.113.113v.225.225h.113.113v.225.225h.113.113v.225.225h.113.113v.338.338h.113.113v2.026 2.026h-.113-.113v.675.675h-.113-.113v.675.675h-.113-.113v1.801 1.801h.113.113v.225.225h.113.113v.225.225h.113.113v.225.225h.154.154v.197.197z"], null)], null);
});
mecca.notation.bar_line = (function mecca$notation$bar_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"translate(3.825,-0.09)",cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y1,(8),cljs.core.cst$kw$y2,16.2,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null);
});
mecca.notation.bar_number = (function mecca$notation$bar_number(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.3 + ((24) * (n - (1))))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(6.3),")"].join(''),cljs.core.cst$kw$d,(function (){var G__20336 = n;
switch (G__20336) {
case (0):
return "M.286.999H.143V.928.857H.071 0V.5.143H.071.143V.071 0H.286.428V.071.143H.5.571V.5.857H.5.428V.928.999ZM.286.857H.428V.5.143H.286.143v.357.357z";

break;
case (1):
return "M.393 1.34H.106V1.245 1.149H.202.297V.765.383H.202.106V.287.191H.202.297V.096 0h.096.096v.574.574H.584.68V1.245 1.34Z";

break;
case (2):
return "M.542 1.337H.159V1.146.956H.255.35V.86.765H.446.542V.669.573H.637.733V.382.191H.542.35V.382.573H.255.159V.382.191H.255.35V.096 0h.191.191V.096.191H.828.924V.382.573H.828.733V.669.765H.637.542V.86.956H.446.35v.096.096h.287.287v.096.096z";

break;
case (3):
return "M6 21H3V19.5 18H1.5 0V16.5 15H1.5 3V16.5 18H6 9V15 12H6 3V10.5 9H6 9V6 3H6 3V4.5 6H1.5 0V4.5 3H1.5 3V1.5 0H6 9V1.5 3H10.5 12V6 9H10.5 9v1.5 1.5h1.5 1.5v3 3H10.5 9v1.5 1.5z";

break;
case (4):
return "M 10.5,21 H 9 V 18 15 H 4.5 0 V 12 9 H 1.5 3 V 7.5 6 H 4.5 6 V 4.5 3 H 7.5 9 V 1.5 0 h 1.5 1.5 v 6 6 H 13.5 15 V 13.5 15 H 13.5 12 v 3 3 z M 6,12 H 9 V 9 6 H 7.5 6 V 7.5 9 H 4.5 3 v 1.5 1.5 z";

break;
case (5):
return "M 0,15 H 1.5 3 V 16.5 18 H 6 9 V 13.5 9 H 4.5 0 V 4.5 0 h 6 6 V 1.5 3 H 7.5 3 V 4.5 6 H 6 9 V 7.5 9 H 10.5 12 V 13.5 18 H 10.5 9 V 19.5 21 H 6 3 V 19.5 18 H 1.5 0 v -1.5 z";

break;
case (6):
return "M 6,21 H 3 V 19.5 18 H 1.5 0 V 10.5 3 H 1.5 3 V 1.5 0 H 6 9 V 1.5 3 H 10.5 12 V 4.5 6 H 10.5 9 V 4.5 3 H 6 3 v 3 3 h 3 3 v 1.5 1.5 h 1.5 1.5 v 3 3 H 10.5 9 V 19.5 21 Z M 6,18 H 9 V 15 12 H 6 3 v 3 3 z";

break;
case (7):
return "M 4.5,21 H 3 V 18 15 H 4.5 6 V 12 9 H 7.5 9 V 6 3 H 6 3 V 4.5 6 H 1.5 0 V 3 0 h 6 6 V 4.5 9 H 10.5 9 v 3 3 H 7.5 6 v 3 3 z";

break;
case (8):
return "M 6,21 H 3 V 19.5 18 H 1.5 0 V 15 12 H 1.5 3 V 10.5 9 H 1.5 0 V 6 3 H 1.5 3 V 1.5 0 H 6 9 V 1.5 3 H 10.5 12 V 6 9 H 10.5 9 v 1.5 1.5 h 1.5 1.5 v 3 3 H 10.5 9 V 19.5 21 Z M 6,18 H 9 V 15 12 H 6 3 v 3 3 z M 6,9 H 9 V 6 3 H 6 3 v 3 3 z";

break;
case (9):
return "M 6,21 H 3 V 19.5 18 H 1.5 0 V 16.5 15 H 1.5 3 V 16.5 18 H 6 9 V 15 12 H 6 3 V 10.5 9 H 1.5 0 V 6 3 H 1.5 3 V 1.5 0 H 6 9 V 1.5 3 H 10.5 12 V 10.5 18 H 10.5 9 V 19.5 21 Z M 6,9 H 9 V 6 3 H 6 3 v 3 3 z";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20336)].join('')));

}
})()], null)], null);
});
mecca.notation.beat_line = (function mecca$notation$beat_line(x,n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(14,0)"], null),(((cljs.core.mod(n,(4)) === (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,(x * (6)),cljs.core.cst$kw$x2,(x * (6)),cljs.core.cst$kw$y1,(6),cljs.core.cst$kw$y2,(8),cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,(x * (6)),cljs.core.cst$kw$x2,(x * (6)),cljs.core.cst$kw$y1,(6),cljs.core.cst$kw$y2,(8),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.075,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null))], null);
});
mecca.notation.ending_bar = (function mecca$notation$ending_bar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(1.2,0.06)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,22.25,cljs.core.cst$kw$y,(3),cljs.core.cst$kw$width,0.24,cljs.core.cst$kw$height,11.25,cljs.core.cst$kw$ry,(0),cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,22.125,cljs.core.cst$kw$x2,22.125,cljs.core.cst$kw$y1,(3),cljs.core.cst$kw$y2,14.25,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.1], null)], null)], null);
});
mecca.notation.ending_bar_repeat = (function mecca$notation$ending_bar_repeat(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,62.5,cljs.core.cst$kw$y,(8),cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,(28),cljs.core.cst$kw$ry,(0),cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,61.8,cljs.core.cst$kw$x2,61.8,cljs.core.cst$kw$y1,(8),cljs.core.cst$kw$y2,(36),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(11),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(13),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(23),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(25),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(33),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(35),cljs.core.cst$kw$r,0.4], null)], null)], null);
});
mecca.notation.eighth_note_flag = (function mecca$notation$eighth_note_flag(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?"0.1)":"0.1,-0.1)")),"translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?(24):(2))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?(-61):(-57))),")"].join(''),cljs.core.cst$kw$d,"M1-8v15h-1v-15h1zM1-8c0 12 12 19 12 31 0 4-1 8-2 12 0 0-1 1-1 1-1 0-2-1-1-2 2-4 2-7 2-11 0-6-6-12-10-16v-15z"], null)], null);
});
mecca.notation.beam = (function mecca$notation$beam(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$points,"2981,475 3499,424 3499,484 2981,535"], null)], null);
});
mecca.notation.kill_note = (function mecca$notation$kill_note(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$d,"M 0.75,0.3 L 1.75,-0.7 M 1.75,0.3 L 0.75,-0.7",cljs.core.cst$kw$stroke,"red",cljs.core.cst$kw$stroke_DASH_linecap,"round",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null);
});
mecca.notation.drum_hit = (function mecca$notation$drum_hit(duration,p__20338){
var vec__20339 = p__20338;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(1),null);
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_,vec__20339,x,y){
return (function (color,p__20342){
var vec__20343 = p__20342;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20343,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20343,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__20343,x__$1,y__$1,mouseover_QMARK_,vec__20339,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(vec__20343,x__$1,y__$1,mouseover_QMARK_,vec__20339,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__20343,x__$1,y__$1,mouseover_QMARK_,vec__20339,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(vec__20343,x__$1,y__$1,mouseover_QMARK_,vec__20339,x,y))
,cljs.core.cst$kw$on_DASH_click,((function (vec__20343,x__$1,y__$1,mouseover_QMARK_,vec__20339,x,y){
return (function (){
var G__20346 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_note,x__$1,y__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20346) : re_frame.core.dispatch.call(null,G__20346));
});})(vec__20343,x__$1,y__$1,mouseover_QMARK_,vec__20339,x,y))
,cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((12.78 + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((31) < y__$1))?2.2:(0)),cljs.core.cst$kw$y,((((31) < y__$1))?-6.3:0.8),cljs.core.cst$kw$height,5.5,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"black"], null)], null),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__20339,x,y))
});
mecca.notation.ledger_line = (function mecca$notation$ledger_line(p__20347){
var vec__20348 = p__20347;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20348,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20348,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform,["scale (1,1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((8.875 + (6.9 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((25.0375 - y)),") "].join(''),cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null)], null);
});
mecca.notation.note = (function mecca$notation$note(value,p__20351){
var vec__20352 = p__20351;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20352,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20352,(1),null);
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_,vec__20352,x,y){
return (function (value__$1,p__20355){
var vec__20356 = p__20355;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20356,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20356,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__20356,x__$1,y__$1,mouseover_QMARK_,vec__20352,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(vec__20356,x__$1,y__$1,mouseover_QMARK_,vec__20352,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__20356,x__$1,y__$1,mouseover_QMARK_,vec__20352,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(vec__20356,x__$1,y__$1,mouseover_QMARK_,vec__20352,x,y))
,cljs.core.cst$kw$on_DASH_click,((function (vec__20356,x__$1,y__$1,mouseover_QMARK_,vec__20352,x,y){
return (function (){
var G__20359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_note,x__$1,y__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20359) : re_frame.core.dispatch.call(null,G__20359));
});})(vec__20356,x__$1,y__$1,mouseover_QMARK_,vec__20352,x,y))
,cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((13) + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?2.15:0.02),cljs.core.cst$kw$y,((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?-7.1:(0)),cljs.core.cst$kw$height,6.794,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"black"], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(17))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform,"scale (1.75,1.75)",cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,-0.334,cljs.core.cst$kw$y,-0.1], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,0.5))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.eighth_note_flag,x__$1,y__$1], null):null)),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__20352,x,y))
});
mecca.notation.drum_clef = (function mecca$notation$drum_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transform,"translate(3.75,31.334)",cljs.core.cst$kw$d,"M2.5-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1zM.8-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1z",cljs.core.cst$kw$fill,"black"], null)], null);
});
mecca.notation.bass_clef = (function mecca$notation$bass_clef(x,y){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),cljs.core.cst$kw$d,"M.187 6.323H0V6.244 6.165H.094.187V6.072 5.978H.467.747v-.094-.094h.187.187v-.094-.094h.094.094v-.094-.094h.094.094v-.094-.094h.187.187v-.094-.094h.094.094v-.094-.094h.094.094v-.094-.094h.094.094v-.187-.187h.094.094v-.094-.094h.094.094v-.187-.187h.094.094V3.456 3.176h.094.094V2.428 1.681H3.083 2.989V1.308.934H2.896 2.802V.841.747H2.709 2.616V.654.56H2.523 2.428V.467.373H1.868 1.308V.467.56H1.121.934V.654.747H.841.747V.934 1.121H1.215 1.681v.094.094h.094.094v.56.56h-.094-.094v.094.094H1.121.56V2.523 2.428H.467.373V2.241 2.055H.28.187V1.681 1.308H.28.373V1.028.747H.467.56V.654.56H.654.747V.467.373H.841.934V.28.187H1.121 1.308V.094 0H1.961 2.616V.094.187h.28.28v.094.094h.094.094v.094.094h.094.094v.094.094h.094.094v.094.094h.094.094v.187.187h.094.094v.934.934h-.094-.094v.187.187h-.094-.094v.187.187h-.094-.094v.187.187h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.187-.187v.094.094h-.094-.094v.094.094h-.187-.187v.094.094H1.495 1.308v.094.094H1.121.934v.094.094H.654.373v.079.079z\n                 M4.844 1.721H4.588V1.636 1.551H4.503 4.418V1.295 1.038h.086.086V.953.868h.256.256v.086.086h.086.086V1.295 1.551h-.086-.086v.086.086z\n                 M4.801 3.289H4.548V3.205 3.12H4.463 4.378V2.867 2.613h.085.085V2.529 2.445h.252.252v.085.085h.085.085V2.867 3.12h-.085-.085v.085.085z"], null)], null);
});
});
mecca.notation.treble_clef = (function mecca$notation$treble_clef(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),cljs.core.cst$kw$d,"M2.214 12.37H1.55v-.097-.097h-.221-.221v-.111-.111h-.111-.111v-.553-.553h.111.111v-.111-.111h.111.111v-.111-.111h.332.332v.111.111h.111.111v.111.111h.111.111v.332.332h-.111-.111v.111.111h-.111-.111v.111.111h.443.443v-.111-.111h.111.111v-.996-.996h-.111-.111v-.111-.111H2.214 1.55v-.111-.111h-.221-.221v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.111-.111H.332.221v-.221-.221H.111 0v-.996-.996h.111.111v-.221-.221h.111.111v-.221-.221h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111V3.653 3.321H1.66 1.55V2.324 1.328h.111.111V.996.664h.111.111V.443.221h.111.111V.111 0h.332.332v.111.111h.111.111v.221.221h.111.111v.332.332h.111.111v.664.664h-.111-.111v.443.443h-.111-.111v.221.221h-.111-.111v.221.221h-.111-.111v.111.111h-.111-.111v.553.553h.111.111v.111.111h.443.443v.111.111h.111.111v.111.111h.111.111v.111.111h.111.111v.221.221h.069.069v.664.664h-.069-.069v.221.221h-.111-.111v.111.111h-.111-.111v.111.111h-.221-.221v.443.443h.111.111v.775.775h-.111-.111v.221.221h-.221-.221v.097.097zM1.992 9.077h.664v-.553-.553h-.111-.111v-.553-.553h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.332.332h.111.111v.221.221h.221.221v.111.111H2.103 1.771v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.221-.221h-.111-.111v-.332-.332h.111.111v-.221-.221h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h-.111-.111v-.332-.332h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.221.221h-.111-.111v.111.111h-.111-.111v.332.332h-.111-.111v.332.332h.111.111v.332.332h.111.111v.111.111h.111.111v.111.111h.111.111v.111.111zm1.328-.221h.221v-.221-.221h.111.111v-.443-.443h-.111-.111v-.221-.221h-.221-.221v-.111-.111h-.111-.111v.553.553h.111.111v.443.443zM2.214 3.321h.221v-.221-.221h.111.111v-.111-.111h.111.111v-.221-.221h.111.111V1.66 1.107H2.767 2.435v.221.221h-.111-.111v.221.221h-.111-.111v.664.664z"], null)], null);
});
mecca.notation.sharp = (function mecca$notation$sharp(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + y)),")"].join(''),cljs.core.cst$kw$d,"M.18.04V-.91l.4-.11v.95zM.98-.19.7-.11V-1.05l.28-.08v-.39l-.28.08V-2.42h-.11v1l-.4.12V-2.24h-.11v.98l-.28.08v.39l.28-.08v.95l-.28.08V.55L.08.47v.96h.11V.43l.4-.11v.94h.11V.29L.98.21Z"], null)], null);
});
mecca.notation.flat = (function mecca$notation$flat(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"m .94 1.62s-.06-1.2-.06-2c0-.32.02-.56.04-.64.08-.24.6-.68.88-.84.18-.1.36-.14.52-.14.2 0 .38.08.5.22.2.22.32.56.32.94 0 .36-.1.78-.34 1.2-.26.48-.84 1.12-1.44 1.5-.08.04-.14.06-.2.06-.18 0-.22-.2-.22-.3m-.7 1.78c.06.08.12.1.18.1s.12-.04.12-.04c.6-.34 1.08-.88 1.58-1.22 1.78-1.24 2.4-2.46 2.4-3.38 0-1.14-.88-1.86-1.8-1.92-.14 0-.28.02-.42.06-.22.06-.46.14-.68.28-.12.1-.34.28-.44.28-.04 0-.06 0-.1-.02-.14-.06-.22-.2-.22-.34.02-.44.14-5.24.14-5.64 0-.22-.18-.34-.38-.34-.28 0-.6.2-.62.56 0 0 .08 11.42.24 11.62"], null)], null);
});
mecca.notation.c_sharp_minor = (function mecca$notation$c_sharp_minor(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.sharp,6.6,(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.sharp,7.4,(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.sharp,8.2,(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.sharp,(9),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.sharp,9.8,(13)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.sharp,10.6,(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.sharp,11.4,(12)], null)], null);
});
mecca.notation.staff_lines = (function mecca$notation$staff_lines(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_lines,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$notation$staff_lines_$_iter__20360(s__20361){
return (new cljs.core.LazySeq(null,(function (){
var s__20361__$1 = s__20361;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20361__$1);
if(temp__5457__auto__){
var s__20361__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20361__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20361__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20363 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20362 = (0);
while(true){
if((i__20362 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20362);
cljs.core.chunk_append(b__20363,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.06:0.15),(1),y,(63),(((((y > (7))) && (cljs.core.even_QMARK_(y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)));

var G__20364 = (i__20362 + (1));
i__20362 = G__20364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20363),mecca$notation$staff_lines_$_iter__20360(cljs.core.chunk_rest(s__20361__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20363),null);
}
} else {
var y = cljs.core.first(s__20361__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.06:0.15),(1),y,(63),(((((y > (7))) && (cljs.core.even_QMARK_(y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)),mecca$notation$staff_lines_$_iter__20360(cljs.core.rest(s__20361__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((18)));
})())], null);
});
