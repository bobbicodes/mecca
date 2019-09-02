// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.music');
goog.require('mecca.subs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('mecca.music.melody');
goog.require('mecca.music.scale');
goog.require('mecca.mario');
mecca.components.brace = (function mecca$components$brace(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate (0.7,7.825) scale(0.6, 0.91)",cljs.core.cst$kw$d,"M1.731 28.982H1.576v-.084-.084h-.113-.113v-.113-.113h-.113-.113v-.225-.225h-.113-.113v-.225-.225h-.113-.113v-.225-.225H.562.45V26.787 26.337H.338.225v-1.914-1.914h.113.113v-.562-.562h.113.113v-.675-.675h.113.113v-.788-.788h.113.113v-.675-.675h-.113-.113v-.562-.562h-.113-.113v-.338-.338h-.113-.113v-.113-.113H.338.225v-.225-.225H.113 0v-.225-.225h.113.113v-.113-.113h.113.113v-.225-.225h.113.113v-.225-.225h.113.113v-.562-.562h.113.113V11.255 10.58H1.013.901V9.792 9.004H.788.675V8.329 7.654H.562.45V7.09 6.528H.338.225V4.614 2.702h.113.113V2.251 1.801h.113.113v-.225-.225h.113.113v-.225-.225h.113.113v-.225-.225h.113.113V.338.225h.113.113V.113 0H1.731 1.885V.113.225H1.843 1.801v.113.113h-.113-.113v.225.225h-.113-.113v.113.113h-.113-.113v.338.338h-.113-.113v1.801 1.801h.113.113v.675.675h.113.113v.562.562h.113.113v2.026 2.026h-.113-.113v.45.45h-.113-.113v.225.225h-.113-.113v.225.225h-.113-.113v.225.225h-.113-.113v.113.113H.338.225v.113.113h.113.113v.113.113h.113.113v.225.225h.113.113v.225.225h.113.113v.225.225h.113.113v.338.338h.113.113v2.026 2.026h-.113-.113v.675.675h-.113-.113v.675.675h-.113-.113v1.801 1.801h.113.113v.225.225h.113.113v.225.225h.113.113v.225.225h.154.154v.197.197z"], null)], null);
});
mecca.components.bar_line = (function mecca$components$bar_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"translate(3.825,-0.09)",cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y1,(8),cljs.core.cst$kw$y2,34.19,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null);
});
mecca.components.bar_number = (function mecca$components$bar_number(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.3 + ((24) * (n - (1))))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(6.3),")"].join(''),cljs.core.cst$kw$d,(function (){var G__13184 = n;
switch (G__13184) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13184)].join('')));

}
})()], null)], null);
});
mecca.components.bar_line_dotted = (function mecca$components$bar_line_dotted(x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(14,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_number,(((x / (6)) / (4)) + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y1,(6),cljs.core.cst$kw$y2,(36),cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)], null);
});
mecca.components.beat_line = (function mecca$components$beat_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$transform,"translate(14,0)",cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y1,(6),cljs.core.cst$kw$y2,(36),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.075,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null);
});
mecca.components.ending_bar = (function mecca$components$ending_bar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(1.2,0.06)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,22.25,cljs.core.cst$kw$y,(3),cljs.core.cst$kw$width,0.24,cljs.core.cst$kw$height,11.25,cljs.core.cst$kw$ry,(0),cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,22.125,cljs.core.cst$kw$x2,22.125,cljs.core.cst$kw$y1,(3),cljs.core.cst$kw$y2,14.25,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.1], null)], null)], null);
});
mecca.components.ending_bar_repeat = (function mecca$components$ending_bar_repeat(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,62.5,cljs.core.cst$kw$y,(8),cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,(28),cljs.core.cst$kw$ry,(0),cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,61.8,cljs.core.cst$kw$x2,61.8,cljs.core.cst$kw$y1,(8),cljs.core.cst$kw$y2,(36),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(11),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(13),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(23),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(25),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(33),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(35),cljs.core.cst$kw$r,0.4], null)], null)], null);
});
mecca.components.eighth_note_flag = (function mecca$components$eighth_note_flag(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"scale(0.007,-0.007)",cljs.core.cst$kw$d,"M179 -646c15 29 28.5449 55.0752 46 102c18.3213 49.2549 30 108.298 30 138c0 105 -80 173 -168 200c-18 5 -47 9 -87 16v190h22c8 0 33 -61 71 -95c4 -3 -2 3 61 -56c62 -58 122 -137 122 -241c0 -37.5245 -12.6807 -106.071 -35 -163 c-19.9111 -50.7861 -43 -99 -66 -132c-6 -5 -10 -7 -13 -7s-5 2 -5 5l4 10c1.17241 2.93103 13.7644 24.8111 18 33z"], null)], null);
});
mecca.components.beam = (function mecca$components$beam(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$points,"2981,475 3499,424 3499,484 2981,535"], null)], null);
});
mecca.components.kill_note = (function mecca$components$kill_note(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$d,"M 0.75,0.3 L 1.75,-0.7 M 1.75,0.3 L 0.75,-0.7",cljs.core.cst$kw$stroke,"red",cljs.core.cst$kw$stroke_DASH_linecap,"round",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null);
});
mecca.components.drum_hit = (function mecca$components$drum_hit(color,p__13186){
var vec__13187 = p__13186;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13187,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13187,(1),null);
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_,vec__13187,x,y){
return (function (color__$1,p__13190){
var vec__13191 = p__13190;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13191,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13191,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__13191,x__$1,y__$1,mouseover_QMARK_,vec__13187,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(vec__13191,x__$1,y__$1,mouseover_QMARK_,vec__13187,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__13191,x__$1,y__$1,mouseover_QMARK_,vec__13187,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(vec__13191,x__$1,y__$1,mouseover_QMARK_,vec__13187,x,y))
,cljs.core.cst$kw$on_DASH_click,((function (vec__13191,x__$1,y__$1,mouseover_QMARK_,vec__13187,x,y){
return (function (){
var G__13194 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_note,x__$1,y__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13194) : re_frame.core.dispatch.call(null,G__13194));
});})(vec__13191,x__$1,y__$1,mouseover_QMARK_,vec__13187,x,y))
,cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((12.78 + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",cljs.core.cst$kw$fill,color__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((31) < y__$1))?2.2:(0)),cljs.core.cst$kw$y,((((31) < y__$1))?-6.3:0.8),cljs.core.cst$kw$height,5.5,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,color__$1], null)], null),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__13187,x,y))
});
mecca.components.ledger_line = (function mecca$components$ledger_line(p__13195){
var vec__13196 = p__13195;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13196,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13196,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform,["scale (1,1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((8.875 + (6.9 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((25.0375 - y)),") "].join(''),cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null)], null);
});
mecca.components.quarter_note = (function mecca$components$quarter_note(color,p__13199){
var vec__13200 = p__13199;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13200,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13200,(1),null);
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_,vec__13200,x,y){
return (function (color__$1,p__13203){
var vec__13204 = p__13203;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13204,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13204,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__13204,x__$1,y__$1,mouseover_QMARK_,vec__13200,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(vec__13204,x__$1,y__$1,mouseover_QMARK_,vec__13200,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__13204,x__$1,y__$1,mouseover_QMARK_,vec__13200,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(vec__13204,x__$1,y__$1,mouseover_QMARK_,vec__13200,x,y))
,cljs.core.cst$kw$on_DASH_click,((function (vec__13204,x__$1,y__$1,mouseover_QMARK_,vec__13200,x,y){
return (function (){
var G__13207 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_note,x__$1,y__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13207) : re_frame.core.dispatch.call(null,G__13207));
});})(vec__13204,x__$1,y__$1,mouseover_QMARK_,vec__13200,x,y))
,cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((13) + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",cljs.core.cst$kw$fill,color__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?2.15:0.02),cljs.core.cst$kw$y,((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?-7.1:(0)),cljs.core.cst$kw$height,6.794,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,color__$1], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(17))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform,"scale (1.75,1.75)",cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,-0.334,cljs.core.cst$kw$y,-0.1], null)], null):null),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__13200,x,y))
});
mecca.components.drum_clef = (function mecca$components$drum_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transform,"scale(0.75, 0.5) translate(5.5,65.334)",cljs.core.cst$kw$d,"M2.5-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1zM.8-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1z",cljs.core.cst$kw$fill,"black"], null)], null);
});
mecca.components.bass_clef = (function mecca$components$bass_clef(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(2.5,20)",cljs.core.cst$kw$d,"M.187 6.323H0V6.244 6.165H.094.187V6.072 5.978H.467.747v-.094-.094h.187.187v-.094-.094h.094.094v-.094-.094h.094.094v-.094-.094h.187.187v-.094-.094h.094.094v-.094-.094h.094.094v-.094-.094h.094.094v-.187-.187h.094.094v-.094-.094h.094.094v-.187-.187h.094.094V3.456 3.176h.094.094V2.428 1.681H3.083 2.989V1.308.934H2.896 2.802V.841.747H2.709 2.616V.654.56H2.523 2.428V.467.373H1.868 1.308V.467.56H1.121.934V.654.747H.841.747V.934 1.121H1.215 1.681v.094.094h.094.094v.56.56h-.094-.094v.094.094H1.121.56V2.523 2.428H.467.373V2.241 2.055H.28.187V1.681 1.308H.28.373V1.028.747H.467.56V.654.56H.654.747V.467.373H.841.934V.28.187H1.121 1.308V.094 0H1.961 2.616V.094.187h.28.28v.094.094h.094.094v.094.094h.094.094v.094.094h.094.094v.094.094h.094.094v.187.187h.094.094v.934.934h-.094-.094v.187.187h-.094-.094v.187.187h-.094-.094v.187.187h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.187-.187v.094.094h-.094-.094v.094.094h-.187-.187v.094.094H1.495 1.308v.094.094H1.121.934v.094.094H.654.373v.079.079z\n                 M4.844 1.721H4.588V1.636 1.551H4.503 4.418V1.295 1.038h.086.086V.953.868h.256.256v.086.086h.086.086V1.295 1.551h-.086-.086v.086.086z\n                 M4.801 3.289H4.548V3.205 3.12H4.463 4.378V2.867 2.613h.085.085V2.529 2.445h.252.252v.085.085h.085.085V2.867 3.12h-.085-.085v.085.085z"], null)], null);
});
});
mecca.components.treble_clef = (function mecca$components$treble_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(2.65,6.3)",cljs.core.cst$kw$d,"M2.214 12.37H1.55v-.097-.097h-.221-.221v-.111-.111h-.111-.111v-.553-.553h.111.111v-.111-.111h.111.111v-.111-.111h.332.332v.111.111h.111.111v.111.111h.111.111v.332.332h-.111-.111v.111.111h-.111-.111v.111.111h.443.443v-.111-.111h.111.111v-.996-.996h-.111-.111v-.111-.111H2.214 1.55v-.111-.111h-.221-.221v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.111-.111H.332.221v-.221-.221H.111 0v-.996-.996h.111.111v-.221-.221h.111.111v-.221-.221h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111V3.653 3.321H1.66 1.55V2.324 1.328h.111.111V.996.664h.111.111V.443.221h.111.111V.111 0h.332.332v.111.111h.111.111v.221.221h.111.111v.332.332h.111.111v.664.664h-.111-.111v.443.443h-.111-.111v.221.221h-.111-.111v.221.221h-.111-.111v.111.111h-.111-.111v.553.553h.111.111v.111.111h.443.443v.111.111h.111.111v.111.111h.111.111v.111.111h.111.111v.221.221h.069.069v.664.664h-.069-.069v.221.221h-.111-.111v.111.111h-.111-.111v.111.111h-.221-.221v.443.443h.111.111v.775.775h-.111-.111v.221.221h-.221-.221v.097.097zM1.992 9.077h.664v-.553-.553h-.111-.111v-.553-.553h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.332.332h.111.111v.221.221h.221.221v.111.111H2.103 1.771v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.221-.221h-.111-.111v-.332-.332h.111.111v-.221-.221h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h-.111-.111v-.332-.332h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.221.221h-.111-.111v.111.111h-.111-.111v.332.332h-.111-.111v.332.332h.111.111v.332.332h.111.111v.111.111h.111.111v.111.111h.111.111v.111.111zm1.328-.221h.221v-.221-.221h.111.111v-.443-.443h-.111-.111v-.221-.221h-.221-.221v-.111-.111h-.111-.111v.553.553h.111.111v.443.443zM2.214 3.321h.221v-.221-.221h.111.111v-.111-.111h.111.111v-.221-.221h.111.111V1.66 1.107H2.767 2.435v.221.221h-.111-.111v.221.221h-.111-.111v.664.664z"], null)], null);
});
mecca.components.sharp = (function mecca$components$sharp(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + y)),")"].join(''),cljs.core.cst$kw$d,"M.18.04V-.91l.4-.11v.95zM.98-.19.7-.11V-1.05l.28-.08v-.39l-.28.08V-2.42h-.11v1l-.4.12V-2.24h-.11v.98l-.28.08v.39l.28-.08v.95l-.28.08V.55L.08.47v.96h.11V.43l.4-.11v.94h.11V.29L.98.21Z"], null)], null);
});
mecca.components.flat = (function mecca$components$flat(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"m .94 1.62s-.06-1.2-.06-2c0-.32.02-.56.04-.64.08-.24.6-.68.88-.84.18-.1.36-.14.52-.14.2 0 .38.08.5.22.2.22.32.56.32.94 0 .36-.1.78-.34 1.2-.26.48-.84 1.12-1.44 1.5-.08.04-.14.06-.2.06-.18 0-.22-.2-.22-.3m-.7 1.78c.06.08.12.1.18.1s.12-.04.12-.04c.6-.34 1.08-.88 1.58-1.22 1.78-1.24 2.4-2.46 2.4-3.38 0-1.14-.88-1.86-1.8-1.92-.14 0-.28.02-.42.06-.22.06-.46.14-.68.28-.12.1-.34.28-.44.28-.04 0-.06 0-.1-.02-.14-.06-.22-.2-.22-.34.02-.44.14-5.24.14-5.64 0-.22-.18-.34-.38-.34-.28 0-.6.2-.62.56 0 0 .08 11.42.24 11.62"], null)], null);
});
mecca.components.c_sharp_minor = (function mecca$components$c_sharp_minor(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,6.6,(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,7.4,(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,8.2,(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,(9),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,9.8,(13)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,10.6,(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,11.4,(12)], null)], null);
});
mecca.components.note_button = (function mecca$components$note_button(value,color,x){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",0)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,"pink"))?"#e6b08e":"#c0c0c0"),cljs.core.cst$kw$d,"M 2,14 H 1 V 8 2 H 1.5 2 V 1.5 1 h 6 6 V 2 3 H 13.5 13 V 2.5 2 H 8 3 V 2.5 3 H 2.5 2 v 5 5 H 2.5 3 v 0.5 0.5 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,"pink"))?"#b78160":"#707070"),cljs.core.cst$kw$d,"m8 15h-6v-.5-.5h5.5 5.5v-.5-.5h.5.5V7.5 1.999h.5.5V8 14h-.5-.5v.5.5zM4.5 12h-.5v-.5-.5h.5.5v.5.5zm2-2h-.5v-.5-.5h.5.5v.5.5z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,"pink"))?"#fed5bc":"#e8f0f8"),cljs.core.cst$kw$d,"M 8,14 H 3 C 3.1867279,13.094942 2.825439,13.334551 2.5,13 H 2 V 8 3 H 2.5 3 V 2.5 2 h 3 c 2.6672423,0.00718 4.526189,0 7,0 V 2.5 3 h 0.5 0.5 v 5 5 H 13.5 13 v 0.5 0.5 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,(function (){var G__13208 = value;
switch (G__13208) {
case "half":
return "M8 16H2V16 15H1 1V15 14H0 0V8 2H0 1V1 1H1 2V0 0H8 14V0 1H15 15V1 2H16 16V8 14H16 15V15 15H15 14V16 16ZM8 15H14V15 14H15 15V8 2H15 14V1 1H8 2V1 2H1 1V8 14H1 2V15 15ZM6 13H4V13 12H3 3V11 10H3 4V10 9H4 5V9 8H7 9V5 2H10 10V6 11H10 9V12 12H9 8V13 13ZM5 12H7V12 11H7 8V10 9H7 6V10 10H5 4V11 12Z";

break;
case "dotted-half":
return "M 8,16 H 2 V 15.5 15 H 1.5 1 V 14.5 14 H 0.5 0 V 8 2 H 0.5 1 V 1.5 1 H 1.5 2 V 0.5 0 h 6 6 V 0.5 1 H 14.5 15 V 1.5 2 h 0.5 0.5 v 6 6 H 15.5 15 V 14.5 15 H 14.5 14 v 0.5 0.5 z m 0,-1 h 6 V 14.5 14 H 14.5 15 V 8 2 H 14.5 14 V 1.5 1 H 8 2 V 1.5 2 H 1.5 1 v 6 6 H 1.5 2 V 14.5 15 Z M 5.5,13 H 4 V 12.5 12 H 3.5 3 V 11 10 H 3.5 4 v -0.4999997 -0.5 H 4.5 5 v -0.5 V 8 H 7 9 V 5 2 H 9.5 10 V 6.5 11 H 9.5 9 V 11.5 12 H 8 7 v 0.5 0.5 z m 0,-1 H 7 V 11.5 11 H 7.5 8 V 10 9.0000003 H 7 6 v 0.5 V 10 H 5 4 v 1 1 z m 6.277778,-0.333333 H 11.333333 V 11.555556 11.444444 H 11.166667 11 V 11.166667 10.888889 H 10.777778 10.555556 V 10.5 10.111111 h 0.111111 0.111111 V 9.9444443 9.7777783 H 10.888889 11 v -0.222222 -0.222223 h 0.166667 0.166666 v -0.111111 -0.111111 h 0.388889 0.388889 v 0.166667 0.166666 h 0.222222 0.222223 v 0.166667 0.166667 h 0.166666 0.166667 v 0.166666 0.1666667 H 13 13.111111 v 0.333333 0.333334 h -0.166667 -0.166666 v 0.119047 0.119048 l -0.15873,0.15873 -0.15873,0.15873 H 12.34127 12.222222 V 11.5 11.666667 Z";

break;
case "whole":
return "M 7.9999918,16 H 1.9999979 V 15.5 15 H 1.4999985 0.99999897 V 14.5 14 H 0.49999953 0 V 8 2 H 0.49999953 0.99999897 V 1.5 1 H 1.4999989 1.9999987 V 0.5 0 H 7.9999918 13.999986 V 0.5 1 h 0.500004 0.500003 V 1.5 2 H 15.499997 16 v 6 6 H 15.499997 14.999993 V 14.5 15 H 14.49999 13.999986 v 0.5 0.5 z m 0,-1 H 13.999986 V 14.5 14 h 0.500004 0.500003 V 8 2 H 14.499985 13.999986 V 1.5 1 H 7.9999918 1.9999979 V 1.5 2 H 1.499998 0.99999816 v 6 6 H 1.499998 1.9999979 V 14.5 15 Z M 7.1666594,11.44444 H 6.3333268 V 11.27778 11.11111 H 5.6666606 4.9999944 V 10.94444 10.77778 H 4.833328 4.6666617 V 10.61111 10.44444 H 4.3333291 3.9999964 V 10.27778 10.11111 H 3.8333301 3.6666637 V 9.94444 9.77778 H 3.4999974 3.3333311 V 9.61111 9.44444 H 3.1666648 2.9999984 v -1 -1 H 3.1666648 3.3333311 V 7.11111 6.77778 H 3.6666637 3.9999964 V 6.61111 6.44444 H 4.1666627 4.3333291 V 6.27778 6.11111 H 4.6666617 4.9999944 V 5.94444 5.77778 H 5.333327 5.6666597 V 5.61111 5.44444 H 7.4999923 9.3333234 V 5.61111 5.77778 H 9.8333269 10.33333 v 0.16666 0.16667 h 0.333333 0.333333 v 0.16667 0.16666 h 0.166671 0.166661 v 0.16667 0.16667 h 0.166671 0.166671 v 0.16666 0.16667 h 0.166662 0.166671 V 8.27778 9.44444 H 11.833332 11.66667 v 0.16667 0.16667 h -0.166671 -0.166671 v 0.16666 0.16667 h -0.166661 -0.166671 v 0.16667 0.16666 h -0.166671 -0.166662 v 0.16667 0.16667 H 10.33333 9.9999978 v 0.16666 0.16667 h -1.000007 -0.999999 v 0.16667 0.16666 z m 0.9999989,-1 H 8.6666582 V 10.27778 10.11111 H 8.8333243 8.9999908 V 9.94444 9.77778 H 9.1666616 9.3333234 V 8.94444 8.11111 H 9.1666571 8.9999908 V 7.77778 7.44444 H 8.8333244 8.6666581 V 7.27778 7.11111 H 8.4999918 8.3333255 V 6.94444 6.77778 H 8.1666591 7.9999928 V 6.61111 6.44444 H 7.1666594 6.3333268 V 6.61111 6.77778 H 6.1666605 5.9999942 V 7.11111 7.44444 H 5.8333278 5.6666615 v 0.5 0.5 h 0.1666663 0.1666664 v 0.33334 0.33333 h 0.1666663 0.1666663 v 0.33333 0.33334 h 0.3333327 0.3333326 v 0.16666 0.16667 h 0.3333327 0.3333335 v 0.16667 0.16666 z";

break;
case "quarter":
return "m 7.9988327,16.028278 -5.9916801,-0.01109 9.284e-4,-0.499305 9.286e-4,-0.499306 -0.4993069,-9.3e-4 -0.4993064,-9.26e-4 9.285e-4,-0.499307 9.285e-4,-0.499306 -0.49930685,-9.29e-4 -0.49930663,-9.27e-4 0.01107984,-5.9916817 0.01107983,-5.9916804 0.4993068,9.269e-4 0.49930651,9.27e-4 9.284e-4,-0.4993062 9.284e-4,-0.499308 0.4993068,9.286e-4 0.4993065,9.27e-4 9.286e-4,-0.49930791 9.284e-4,-0.49930629 5.9916799,0.01109091 5.9916802,0.01109092 -9.23e-4,0.49930629 -9.2e-4,0.49930628 0.499307,9.286e-4 0.499305,9.271e-4 -9.21e-4,0.4993062 -9.21e-4,0.4993064 0.499305,9.286e-4 0.499308,9.27e-4 -0.01108,5.9916821 -0.01108,5.9916806 -0.499307,-9.27e-4 -0.499308,-9.28e-4 -9.2e-4,0.499307 -9.22e-4,0.499308 -0.499306,-9.27e-4 -0.499307,-9.29e-4 -9.23e-4,0.499308 -9.22e-4,0.499307 z m 0.00185,-0.998615 5.9916783,0.01109 9.21e-4,-0.499306 9.23e-4,-0.499306 0.499307,9.27e-4 0.499306,9.26e-4 0.01108,-5.9916812 0.01108,-5.9916805 -0.499308,-9.326e-4 -0.499307,-9.27e-4 9.22e-4,-0.4993063 9.21e-4,-0.4993063 -5.9916744,-0.011088 -5.9916803,-0.011091 -9.286e-4,0.4993063 -9.284e-4,0.4993063 -0.4993065,-9.269e-4 -0.4993066,-9.271e-4 -0.01108,5.9916822 -0.01108,5.9916821 0.4993065,9.27e-4 0.4993069,9.27e-4 -9.286e-4,0.499307 -9.284e-4,0.499308 z m -2.4928394,-2.001843 -1.4979201,-0.0029 9.285e-4,-0.499308 9.285e-4,-0.499306 -0.4993067,-9.26e-4 -0.4993068,-9.28e-4 0.00185,-0.998614 0.00185,-0.998615 0.4993064,9.23e-4 0.4993069,9.2e-4 9.284e-4,-0.4993062 9.285e-4,-0.4993063 0.4993064,9.205e-4 0.4993069,9.203e-4 9.285e-4,-0.499308 9.284e-4,-0.4993062 1.9972268,0.00364 1.9972266,0.00364 0.00554,-2.9958411 0.00554,-2.9958394 0.4993068,9.27e-4 0.4993057,9.269e-4 -0.0083,4.4937617 -0.0083,4.4937608 -0.4993065,-9.2e-4 -0.4993064,-9.2e-4 -9.286e-4,0.499306 -9.284e-4,0.499306 -0.9986136,-0.0018 -0.9986131,-0.0018 -9.286e-4,0.499307 -9.284e-4,0.499307 z";

break;
case "dotted-quarter":
return "M 8,16 H 2 V 15.5 15 H 1.5 1 V 14.5 14 H 0.5 0 V 8 2 H 0.5 1 V 1.5 1 H 1.5 2 V 0.5 0 h 6 6 V 0.5 1 H 14.5 15 V 1.5 2 h 0.5 0.5 v 6 6 H 15.5 15 V 14.5 15 H 14.5 14 v 0.5 0.5 z m 0,-1 h 6 V 14.5 14 H 14.5 15 V 8 2 H 14.5 14 V 1.5 1 H 8 2 V 1.5 2 H 1.5 1 v 6 6 H 1.5 2 V 14.5 15 Z M 5.5,13 H 4 V 12.5 12 H 3.5 3 V 11 10 H 3.5 4 V 9.5 9 H 4.5 5 V 8.5 8 H 7 9 V 5 2 H 9.5 10 V 6.5 11 H 9.5 9 V 11.5 12 H 8 7 V 12.5 13 Z M 12,11.777778 H 11.555555 V 11.666667 11.555556 H 11.388889 11.222222 V 11.277778 11 H 11 10.777778 V 10.611111 10.222222 H 10.888889 11 V 10.055556 9.888889 h 0.111111 0.111111 V 9.666667 9.444444 h 0.166667 0.166666 V 9.333333 9.222222 h 0.388889 0.388889 v 0.166667 0.166667 h 0.222223 0.222222 v 0.166666 0.166667 h 0.166666 0.166667 v 0.166667 0.166666 h 0.111111 0.111111 v 0.333334 0.333333 H 13.166667 13 v 0.119048 0.119047 l -0.15873,0.15873 -0.15873,0.15873 h -0.119048 -0.119048 v 0.166667 0.166667 z";

break;
case "eighth":
return "M8 16H2V16 15H2 1V15 14H1 0V8 2H1 1V2 1H2 2V1 0H8 14V1 1H15 15V2 2H16 16V8 14H16 15V15 15H15 14V16 16ZM8 15H14V15 14H15 15V8 2H15 14V2 1H8 2V2 2H2 1V8 14H2 2V15 15ZM6 13H4V13 12H4 3V11 10H4 4V10 9H5 5V9 8H7 9V5 2H10 11V3 3H12 12V4 4H13 13V6 7H13 12V8 8H12 11V8 7H12 12V6 5H12 11V5 4H11 10V8 11H10 9V12 12H8 7V13 13Z";

break;
case "dotted-eighth":
return "M 8,15.999999 H 2 v -0.5 -0.5 H 1.5 1 v -0.5 -0.5 H 0.5 0 v -6 V 2 H 0.5 1 V 1.5 1 H 1.5 2 V 0.5 0 h 6 5.999999 V 0.5 1 h 0.5 0.5 V 1.5 2 h 0.5 H 16 v 5.999999 6 h -0.500001 -0.5 v 0.5 0.5 h -0.5 -0.5 v 0.5 0.5 z m 0,-1 h 5.999999 v -0.5 -0.5 h 0.5 0.5 v -6 V 2 h -0.5 -0.5 V 1.5 1 H 8 2 V 1.5 2 H 1.5 1 v 5.999999 6 H 1.5 2 v 0.5 0.5 z m -2.5,-2 H 4 v -0.5 -0.5 H 3.5 3 v -1 -1 H 3.5 4 v -0.5 -0.5 H 4.5 5 v -0.5 -0.5 H 7 9 V 5 2 h 1 1 V 2.5 3 H 11.5 12 V 3.5 4 H 12.5 13 V 5.5 7 H 12.5 12 V 7.5 7.999999 H 11.5 11 V 7.5 7 H 11.5 12 V 6 5 H 11.5 11 V 4.5 4 H 10.5 10 v 3.5 3.499999 H 9.5 9 v 0.5 0.5 H 8 7 v 0.5 0.5 z m 6.722222,-1.111111 H 11.777777 V 11.777777 11.666666 H 11.611111 11.444444 V 11.388888 11.11111 H 11.222222 11 v -0.388888 -0.388889 h 0.111111 0.111111 V 10.166666 9.999999 h 0.111111 0.111111 V 9.777777 9.555555 h 0.166667 0.166666 V 9.444444 9.333333 h 0.388889 0.388889 V 9.499999 9.666666 H 12.777777 13 v 0.166667 0.166666 h 0.166666 0.166667 v 0.166667 0.166667 h 0.111111 0.111111 v 0.333333 0.333333 h -0.166667 -0.166666 v 0.119048 0.119048 l -0.15873,0.15873 -0.15873,0.15873 h -0.119048 -0.119048 v 0.166666 0.166667 z";

break;
case "sixteenth":
return "M 8,16.000001 H 2 v -0.5 -0.5 H 1.5 1 v -0.5 -0.5 H 0.5 0 V 8 2 H 0.5 1 V 1.5 0.99999999 H 1.5 2 V 0.5 0 h 6 6 V 0.5 0.99999999 H 14.5 15 V 1.5 2 h 0.5 0.5 v 6 6.000001 H 15.5 15 v 0.5 0.5 H 14.5 14 v 0.5 0.5 z m 0,-1 h 6 v -0.5 -0.5 H 14.5 15 V 8 2 H 14.5 14 V 1.5 0.99999999 H 8 2 V 1.5 2 H 1.5 1 v 6 6.000001 H 1.5 2 v 0.5 0.5 z m -2.5,-2 H 4 v -0.5 -0.5 H 3.5 3 v -1 -1 H 3.5 4 V 9.5 9 H 4.5 5 V 8.5 8 H 7 8.9999995 V 5 2 h 1 H 11 V 2.5 3 H 11.5 12 V 3.5 4 H 12.5 13 V 6.6111111 9.2222222 H 12.5 12 V 8.6111111 8 H 11.5 11 V 7.5 7 H 10.5 9.9999995 v 2 2.000001 h -0.5 -0.5 v 0.5 0.5 H 8 7 v 0.5 0.5 z M 11.944444,7 h 0.5 V 6.5 6 H 12.222222 12 V 5.5 5 H 11.5 11 V 4.5 4 H 10.5 9.9999995 V 4.5 5 H 10.5 11 V 5.5 6 h 0.222222 0.222222 V 6.5 7 Z";

break;
case "dotted-sixteenth":
return "M 8,16 H 2 V 15.5 15 H 1.5 1 V 14.5 14 H 0.5 0 V 8 2 H 0.5 1 V 1.5 1 H 1.5 2 V 0.5 0 h 6 6 V 0.5 1 H 14.5 15 V 1.5 2 h 0.5 0.5 v 6 6 H 15.5 15 V 14.5 15 H 14.5 14 v 0.5 0.5 z m 0,-1 h 6 V 14.5 14 H 14.5 15 V 8 2 H 14.5 14 V 1.5 1 H 8 2 V 1.5 2 H 1.5 1 v 6 6 H 1.5 2 V 14.5 15 Z M 5.5,13 H 4 V 12.5 12 H 3.5 3 V 11 10 H 3.5 4 V 9.5 9 H 4.5 5 V 8.5 8 H 7 9 V 5 2 h 1 1 V 2.5 3 H 11.5 12 V 3.5 4 H 12.5 13 V 6.5555556 9.1111111 H 12.5 12 V 8.5555556 8 H 11.5 11 V 7.5 7 H 10.5 10 v 2 2 H 9.5 9 V 11.5 12 H 8 7 v 0.5 0.5 z m 6.44444,-6 h 0.5 V 6.5 6 H 12.22222 12 V 5.5 5 H 11.5 11 V 4.5 4 H 10.5 10 V 4.5 5 H 10.5 11 V 5.5 6 h 0.22222 0.22222 V 6.5 7 Z m 0.16667,5.444444 H 11.66667 V 12.333333 12.222222 H 11.5 11.33333 V 11.944444 11.666667 H 11.11111 10.88889 V 11.277778 10.888889 H 11 11.11111 v -0.166667 -0.166666 h 0.11111 0.11111 V 10.333333 10.111111 H 11.5 11.66667 V 10 9.8888889 h 0.38889 0.38888 v 0.1666671 0.166666 h 0.22223 0.22222 v 0.166667 0.166667 h 0.16667 0.16666 v 0.166666 0.166667 h 0.11111 0.11111 v 0.333333 0.333334 h -0.16666 -0.16667 v 0.119047 0.119048 l -0.15873,0.15873 -0.15873,0.15873 H 12.6746 12.55556 v 0.166667 0.166666 z";

break;
case "q-triplets":
return "M 8,16 H 2 V 15.5 15 H 1.5 1 V 14.5 14 H 0.5 0 V 8 2 H 0.5 1 V 1.5 1 H 1.5 2 V 0.5 0 h 6 6 V 0.5 1 H 14.5 15 V 1.5 2 h 0.5 0.5 v 6 6 H 15.5 15 V 14.5 15 H 14.5 14 v 0.5 0.5 z m 0,-1 h 6 V 14.5 14 H 14.5 15 V 8 2 H 14.5 14 V 1.5 1 H 8 2 V 1.5 2 H 1.5 1 v 6 6 H 1.5 2 V 14.5 15 Z M 3.666667,12.22222 H 3.111111 V 12 11.77778 H 2.888889 2.666667 v -0.43149 -0.43148 l 0.222222,-0.0581 0.222222,-0.0581 V 10.56599 10.33336 H 3.333333 3.555556 V 10.05559 9.77781 h 0.830108 0.830108 l 0.031,-1.47222 0.031,-1.47223 0.30793,-0.0354 0.307929,-0.0354 -0.03015,2.20205 -0.03015,2.20206 -0.388889,0.0556 -0.388888,0.0556 -0.03551,0.25 -0.03551,0.25 H 4.603373 4.222212 v 0.22222 0.22222 z m 7.111111,0 H 10.222222 V 12 11.77778 H 10 9.777778 V 11.34629 10.91481 L 10,10.85671 l 0.222222,-0.0581 v -0.23262 -0.23263 h 0.222222 0.222223 V 10.05559 9.77781 H 11.5 12.333333 v -1.5 -1.5 H 12.666667 13 v 2.14707 2.14707 l -0.416667,0.10293 -0.416666,0.10293 -0.03551,0.25 -0.03551,0.25 h -0.381162 -0.381161 v 0.22222 0.22222 z M 7.222222,12.11111 H 6.666667 V 11.88889 11.66667 H 6.444444 6.222222 V 11.23518 10.8037 L 6.444444,10.7456 6.666667,10.6875 V 10.45488 10.22225 H 6.888889 7.111111 V 9.94447 9.6667 H 7.944444 8.777778 V 8.22225 6.77781 h 0.388889 0.388889 v 2.16028 2.16027 l -0.472223,0.0342 -0.472222,0.0342 -0.03551,0.25 -0.03551,0.25 H 8.15893 7.777769 v 0.22222 0.22222 z M 13.444444,6.55556 H 13.111111 V 6.11111 5.66667 H 12.055556 11 V 5.33333 5 h 1.388889 1.388889 V 5.77778 6.55556 Z M 4.111111,6.33333 H 3.777778 V 5.66667 5 H 5.166667 6.555556 V 5.33333 5.66667 H 5.5 4.444444 V 6 6.33333 Z M 7.805556,5.95194 7.222222,6.02864 V 5.69142 5.3542 L 7.799069,5.2749 8.375916,5.1956 8.548077,5.02344 8.720238,4.85128 8.582341,4.80528 8.444444,4.75928 V 4.60187 4.44446 H 8.222222 8 V 4.11113 3.7778 H 8.277778 8.555556 V 3.56484 3.35187 L 8.694444,3.29587 8.833333,3.23987 8.416667,3.23087 8,3.22187 V 3.33298 3.44409 H 7.666667 7.333333 V 3.11076 2.77743 H 7.555556 7.777778 V 2.66632 2.55521 H 8.263889 8.75 l 0.347222,0.0694 0.347222,0.0694 V 2.84679 2.99957 H 9.555556 9.666667 V 3.3329 3.66624 H 9.444444 9.222222 V 3.8329 3.99957 h -0.0957 -0.0957 l 0.0531,0.27778 0.0531,0.27778 h 0.09816 0.09816 V 4.88846 5.22179 H 9.222231 9.11112 V 5.44401 5.66624 H 8.787046 8.462972 l -0.03704,0.10429 -0.03704,0.10429 z";

break;
case "e-triplets":
return "M 8.0000002,16 H 2 V 15.5 15 H 1.5 1 V 14.5 14 H 0.5 0 V 8.0000004 2.0000001 H 0.5 1 v -0.5 -0.5 H 1.5 2 v -0.5 V 0 H 8.0000002 14 v 0.5000001 0.5 h 0.5 0.5 v 0.5 0.5 H 15.5 16 V 8.0000004 14 H 15.5 15 V 14.5 15 H 14.5 14 v 0.5 0.5 z m 0,-1 H 14 V 14.5 14 H 14.5 15 V 8.0000004 2.0000001 H 14.5 14 v -0.5 -0.5 H 8.0000002 2 v 0.5 0.5 H 1.5 1 V 8.0000004 14 H 1.5 2 V 14.5 15 Z M 3.6666667,11.111111 H 3.3333334 V 10.833333 10.555555 H 3.1666667 3 V 10.111111 9.6666674 H 3.1666667 3.3333334 V 9.4444444 9.2222224 H 3.4444445 3.5555556 V 9.0000004 8.7777784 H 4.0000001 4.4444445 V 7.2222224 5.6666664 H 8.6111113 12.777778 V 7.8333334 10 H 12.5 12.222222 v 0.222222 0.222222 H 12 11.777778 V 10.722222 11 H 11.444445 11.111111 V 10.722222 10.444444 H 10.944445 10.777778 V 10 9.5555554 h 0.166667 0.166666 v -0.222222 -0.222222 h 0.111111 0.111112 v -0.222222 -0.222222 h 0.388888 0.388889 V 7.5555554 6.4444444 H 10.555556 9.0000002 V 8.2222224 10 H 8.8229313 8.6458625 l -0.058112,0.222222 -0.058113,0.222222 H 8.3203745 8.1111113 V 10.722222 11 H 7.7777779 7.4444446 V 10.722222 10.444444 H 7.2777779 7.1111112 V 10 9.5555554 H 7.2777779 7.4444446 V 9.3333334 9.1111114 H 7.5555557 7.6666668 V 8.8888894 8.6666674 H 8.0555557 8.4444446 V 7.5555554 6.4444444 H 6.6666668 4.888889 v 1.833334 1.8333326 H 4.6666667 4.4444445 v 0.222222 0.222222 H 4.2222223 4.0000001 v 0.277778 0.277778 z M 7.6944446,5.1078489 7.1111112,5.1845369 V 4.8473159 4.5100949 L 7.687958,4.4307579 8.2648048,4.3514209 8.4369661,4.1792599 8.6091272,4.0070986 8.4712303,3.9611331 8.3333335,3.9151674 V 3.7577601 3.6003526 H 8.1111113 7.888889 V 3.2670193 2.933686 H 8.1666668 8.4444446 V 2.7207229 2.5077601 L 8.5833335,2.4517172 8.7222224,2.3956743 8.3055557,2.3869021 7.888889,2.3781298 V 2.4892409 2.6003521 H 7.5555557 7.2222224 V 2.2670187 1.9336854 H 7.4444446 7.6666668 V 1.8225743 1.7114631 h 0.4861111 0.4861112 l 0.3472222,0.069445 0.3472222,0.069444 V 2.0031298 2.1559076 H 9.4444446 9.5555557 V 2.4892409 2.8225743 H 9.3333335 9.1111113 V 2.989241 3.1559076 h -0.095703 -0.095703 l 0.0531,0.2777778 0.053101,0.2777778 h 0.098158 0.098158 V 4.0447965 4.3781299 H 9.1111113 9.0000002 v 0.222222 0.222222 H 8.6759261 8.3518521 l -0.037037,0.104294 -0.037037,0.104293 z";

break;
case "whole-rest":
return "M 8.0000003,16 H 2.0000001 V 15.5 15 h -0.5 -0.5 V 14.5 14 H 0.5 0 V 8 2 H 0.5 1.0000001 V 1.5 1 h 0.5 0.5 V 0.5 0 H 8.0000003 14 V 0.5 1 H 14.5 15 V 1.5 2 h 0.5 0.5 v 6 6 H 15.5 15 V 14.5 15 H 14.5 14 v 0.5 0.5 z m 0,-1 H 14 V 14.5 14 H 14.5 15 V 8 2 H 14.5 14 V 1.5 1 H 8.0000003 2.0000001 V 1.5 2 h -0.5 -0.5 v 6 6 h 0.5 0.5 V 14.5 15 Z M 7.7777783,8.77778 H 6.1555553 L 6.0222223,8.64444 5.8888893,8.51111 v -0.7 -0.7 l -2.000841,-0.0104 -0.00481,-0.3991234 3.5431084,0.018726 4.129213,0 V 6.99996 7.11107 H 10.611112 9.6666683 v 0.7 0.7 L 9.5333343,8.6444 9.4000013,8.77774 Z";

break;
case "half-rest":
return "M 8.0000003,0 H 2.0000001 V 0.5 1 h -0.5 -0.5 V 1.5 2 H 0.5 0 v 6 6 h 0.5 0.5000001 v 0.5 0.5 h 0.5 0.5 V 15.5 16 H 8.0000003 14 V 15.5 15 H 14.5 15 V 14.5 14 H 15.5 16 V 8 2 H 15.5 15 V 1.5 1 H 14.5 14 V 0.5 0 Z m 0,1 H 14 V 1.5 2 h 0.5 0.5 v 6 6 H 14.5 14 V 14.5 15 H 8.0000003 2.0000001 V 14.5 14 h -0.5 -0.5 V 8 2 h 0.5 0.5 V 1.5 1 Z m -0.222222,5.7219033 h -1.622223 l -0.133333,0.13334 -0.133333,0.13333 v 0.7 0.7 l -2.000841,0.0104 -0.00481,0.3991234 3.5431084,-0.018726 H 11.55556 V 8.4997233 8.3886133 H 10.611112 9.6666683 v -0.7 -0.7 l -0.133334,-0.13333 -0.133333,-0.13334 z";

break;
case "quarter-rest":
return "M 8,16 H 2 V 15.5 15 H 1.5 1 V 14.5 14 H 0.5 0 V 8 2 H 0.5 1 V 1.5 1 H 1.5 2 V 0.5 0 h 6 6 V 0.5 1 H 14.5 15 V 1.5 2 h 0.5 0.5 v 6 6 H 15.5 15 V 14.5 15 H 14.5 14 v 0.5 0.5 z m 0,-1 h 6 V 14.5 14 H 14.5 15 V 8 2 H 14.5 14 V 1.5 1 H 8 2 V 1.5 2 H 1.5 1 v 6 6 H 1.5 2 V 14.5 15 Z M 6.975549,11.768262 6.944439,11.758762 6.555551,11.488556 6.166662,11.218349 5.866561,10.891312 5.566459,10.564274 5.446705,10.119541 5.326951,9.674807 5.484508,9.297721 5.642064,8.920635 6.133888,8.682547 6.625712,8.444459 H 6.806296 6.98688 L 7.04636,8.348209 7.10585,8.251959 6.691811,7.709319 6.277772,7.16668 6.194442,7.12964 6.111112,7.0926 6.117012,6.96297 6.122912,6.83334 7.061425,6.231671 7.999938,5.630001 V 5.533531 5.437061 L 7.71469,4.874151 7.429442,4.311241 7.487902,4.252781 7.546362,4.194321 7.856433,4.56282 8.166504,4.931318 8.392031,5.160105 8.617558,5.388892 8.817113,5.629106 9.016668,5.869319 8.236047,6.325227 7.455426,6.781134 7.396366,6.876684 7.337306,6.972234 7.671147,7.433088 8.004988,7.893941 8.196903,8.101369 8.388819,8.308798 8.74276,8.686659 9.096701,9.06452 8.298316,9.06232 7.49993,9.06012 7.130066,9.25963 6.760202,9.459141 6.590851,9.864454 6.4215,10.269767 l 0.05871,0.437697 0.05871,0.437696 0.233834,0.316278 0.233834,0.316277 -0.0311,-0.0095 z";

break;
case "eighth-rest":
return "M 8,16 H 2 V 15.5 15 H 1.5 1 V 14.5 14 H 0.5 0 V 8 2 H 0.5 1 V 1.5 1 H 1.5 2 V 0.5 0 h 6 6 V 0.5 1 H 14.5 15 V 1.5 2 h 0.5 0.5 v 6 6 H 15.5 15 V 14.5 15 H 14.5 14 v 0.5 0.5 z m 0,-1 h 6 V 14.5 14 H 14.5 15 V 8 2 H 14.5 14 V 1.5 1 H 8 2 V 1.5 2 H 1.5 1 v 6 6 H 1.5 2 V 14.5 15 Z M 7.5284321,11.33333 H 7.3333333 v -0.0975 -0.0975 L 7.5069419,10.70809 7.6805506,10.27786 7.8289373,9.94452 7.9773241,9.61119 8.1665436,9 8.3557629,8.38889 8.4715673,8.05556 8.5873718,7.72222 8.6382078,7.25 8.6890438,6.77778 H 8.4492793 8.2095156 L 7.7346851,6.89734 7.2598546,7.01691 6.657705,6.89065 6.0555556,6.76439 5.7479024,6.70259 5.4402493,6.64079 5.2201247,6.36099 5,6.08114 V 5.83557 5.59 L 5.2031934,5.40611 5.4063868,5.22222 h 0.13014 0.1301399 V 5.11111 5 h 0.452381 0.4523809 L 6.7126103,5.14118 6.853792,5.28236 6.9804934,5.51911 7.1071949,5.75585 6.9842379,6.10857 6.8612808,6.46128 6.9816858,6.58169 7.1020908,6.70209 7.8383866,6.50278 8.5746824,6.30348 8.7040079,6.14641 8.8333333,5.98933 9.0187631,5.80022 9.204193,5.61111 9.280809,5.30556 9.357424,5 H 9.5814898 9.8055556 L 9.7357266,5.34914 9.6658976,5.69829 9.5113876,5.82137 9.3568776,5.94444 9.2852256,6.33333 9.2135736,6.72222 9.1175466,7.37257 9.0215196,8.02292 8.8996479,8.14479 8.7777763,8.26667 8.7740063,8.55 8.7702363,8.83333 8.5555544,9.27778 8.3408725,9.72222 l -0.00377,0.12182 -0.00377,0.12182 -0.1528306,0.32262 -0.1528306,0.32263 -0.1520707,0.36111 -0.1520707,0.36111 z";

break;
case "sixteenth-rest":
return "M 8,16 H 2 V 15.5 15 H 1.5 1 V 14.5 14 H 0.5 0 V 8 2 H 0.5 1 V 1.5 1 H 1.5 2 V 0.5 0 h 6 6 V 0.5 1 H 14.5 15 V 1.5 2 h 0.5 0.5 v 6 6 H 15.5 15 V 14.5 15 H 14.5 14 v 0.5 0.5 z m 0,-1 h 6 V 14.5 14 H 14.5 15 V 8 2 H 14.5 14 V 1.5 1 H 8 2 V 1.5 2 H 1.5 1 v 6 6 H 1.5 2 V 14.5 15 Z M 6.9728766,12.33333 H 6.7777778 l 9.05e-5,-0.0833 9.05e-5,-0.0833 L 6.980797,11.63264 7.1836353,11.09856 7.3583381,10.89452 7.533041,10.69048 7.613453,10.4286 7.693865,10.16673 7.775256,10.05562 7.856647,9.9445 7.9803153,9.57704 8.1039838,9.20957 7.9131035,9.26647 7.7222231,9.32337 7.2132615,9.44796 6.704299,9.57246 6.1021494,9.4462 5.5,9.31995 5.1923469,9.25816 4.8846938,9.19638 4.6645691,8.91654 4.4444444,8.6367 V 8.39113 8.14555 L 4.6476379,7.96167 4.8508312,7.77778 h 0.13014 0.1301399 V 7.66667 7.55556 H 5.5634921 6.015873 L 6.1570548,7.69674 6.2982364,7.83792 6.4269119,8.07835 6.5555872,8.31878 6.4399254,8.623 6.3242636,8.92721 l 0.056603,0.14751 0.056603,0.1475 H 6.5874567 6.7374438 L 7.29486,9.05669 7.8522764,8.89115 8.0650268,8.69558 8.2777774,8.5 8.4325744,8.11111 8.5873714,7.72222 8.6382074,7.25 8.6890434,6.77778 H 8.4492793 8.2095156 L 7.7346851,6.89734 7.2598546,7.01691 6.657705,6.89065 6.0555556,6.76439 5.7479024,6.70259 5.4402493,6.64079 5.2201247,6.36099 5,6.08114 V 5.83557 5.59 L 5.2031934,5.40611 5.4063868,5.22222 h 0.13014 0.1301399 V 5.11111 5 h 0.452381 0.4523809 L 6.7126103,5.14118 6.853792,5.28236 6.9804934,5.51911 7.1071949,5.75585 6.9842379,6.10857 6.8612808,6.46128 6.9816858,6.58169 7.1020908,6.70209 7.8383866,6.50278 8.5746824,6.30348 8.7040079,6.14641 8.8333333,5.98933 9.0187631,5.80022 9.204193,5.61111 9.280809,5.30556 9.357424,5 H 9.5814898 9.805555 L 9.735727,5.34914 9.665898,5.69829 9.511388,5.82137 9.356878,5.94444 9.285226,6.33333 9.213574,6.72222 9.117547,7.37257 9.02152,8.02292 8.8996483,8.14479 8.7777767,8.26667 8.7740067,8.55 8.7702367,8.83333 8.5555548,9.27778 8.3408729,9.72222 l -0.00377,0.12182 -0.00377,0.12182 -0.1857406,0.37818 -0.1857405,0.37818 -0.070049,0.0556 -0.070049,0.0555 -0.1737842,0.38889 -0.1737842,0.38889 -0.1531056,0.36111 -0.1531055,0.36111 z";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13208)].join('')));

}
})()], null)], null)], null);
});
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13210 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13210) : re_frame.core.subscribe.call(null,G__13210));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_scale,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13211) : re_frame.core.dispatch.call(null,G__13211));
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__13212(s__13213){
return (new cljs.core.LazySeq(null,(function (){
var s__13213__$1 = s__13213;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13213__$1);
if(temp__5457__auto__){
var s__13213__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13213__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13213__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13215 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13214 = (0);
while(true){
if((i__13214 < size__4323__auto__)){
var scale = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13214);
cljs.core.chunk_append(b__13215,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,scale], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scale], null)));

var G__13216 = (i__13214 + (1));
i__13214 = G__13216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13215),mecca$components$scale_picker_$_iter__13212(cljs.core.chunk_rest(s__13213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13215),null);
}
} else {
var scale = cljs.core.first(s__13213__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,scale], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scale], null)),mecca$components$scale_picker_$_iter__13212(cljs.core.rest(s__13213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.keys(mecca.music.scales));
})())], null)], null);
});
mecca.components.key_picker = (function mecca$components$key_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Key: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13217) : re_frame.core.subscribe.call(null,G__13217));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_key,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13218) : re_frame.core.dispatch.call(null,G__13218));
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__13219(s__13220){
return (new cljs.core.LazySeq(null,(function (){
var s__13220__$1 = s__13220;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13220__$1);
if(temp__5457__auto__){
var s__13220__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13220__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13220__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13222 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13221 = (0);
while(true){
if((i__13221 < size__4323__auto__)){
var note = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13221);
cljs.core.chunk_append(b__13222,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,note], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,note], null)));

var G__13223 = (i__13221 + (1));
i__13221 = G__13223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13222),mecca$components$key_picker_$_iter__13219(cljs.core.chunk_rest(s__13220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13222),null);
}
} else {
var note = cljs.core.first(s__13220__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,note], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,note], null)),mecca$components$key_picker_$_iter__13219(cljs.core.rest(s__13220__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mecca.music.notes);
})()], null)], null);
});
mecca.components.octave_input = (function mecca$components$octave_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Octave: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13224 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13224) : re_frame.core.subscribe.call(null,G__13224));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_octave,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13225) : re_frame.core.dispatch.call(null,G__13225));
})], null)], null)], null);
});
mecca.components.tempo_input = (function mecca$components$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"8%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13226) : re_frame.core.subscribe.call(null,G__13226));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13227 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13227) : re_frame.core.dispatch.call(null,G__13227));
})], null)], null)], null);
});
mecca.components.staff = (function mecca$components$staff(){
var focused = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var lead = (function (){var G__13228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13228) : re_frame.core.subscribe.call(null,G__13228));
})();
var bassline = (function (){var G__13229 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13229) : re_frame.core.subscribe.call(null,G__13229));
})();
var drums = (function (){var G__13230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13230) : re_frame.core.subscribe.call(null,G__13230));
})();
var current_position = (function (){var G__13231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13231) : re_frame.core.subscribe.call(null,G__13231));
})();
return ((function (focused,lead,bassline,drums,current_position){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(0,9) scale(1)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_lines,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__13232(s__13233){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__13233__$1 = s__13233;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13233__$1);
if(temp__5457__auto__){
var s__13233__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13233__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13233__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13235 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13234 = (0);
while(true){
if((i__13234 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13234);
cljs.core.chunk_append(b__13235,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.06:0.15),2.25,y,(63),(((((y > (7))) && (cljs.core.even_QMARK_(y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)));

var G__13268 = (i__13234 + (1));
i__13234 = G__13268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13235),mecca$components$staff_$_iter__13232(cljs.core.chunk_rest(s__13233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13235),null);
}
} else {
var y = cljs.core.first(s__13233__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.06:0.15),2.25,y,(63),(((((y > (7))) && (cljs.core.even_QMARK_(y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)),mecca$components$staff_$_iter__13232(cljs.core.rest(s__13233__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position))
,null,null));
});})(focused,lead,bassline,drums,current_position))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((36)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_clef], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line_dotted,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(18)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,31.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line_dotted,(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(36)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(42)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,(59)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__13236(s__13237){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__13237__$1 = s__13237;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13237__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13237__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__13236_$_iter__13238(s__13239){
return (new cljs.core.LazySeq(null,((function (s__13237__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
var s__13239__$1 = s__13239;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13239__$1);
if(temp__5457__auto____$1){
var s__13239__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13239__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13239__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13241 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13240 = (0);
while(true){
if((i__13240 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13240);
cljs.core.chunk_append(b__13241,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(12.5,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),((function (i__13240,s__13237__$1,y,c__4322__auto__,size__4323__auto__,b__13241,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__13240,s__13237__$1,y,c__4322__auto__,size__4323__auto__,b__13241,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,"gray",(3),((function (i__13240,s__13237__$1,y,c__4322__auto__,size__4323__auto__,b__13241,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
var G__13242 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13242) : re_frame.core.dispatch.call(null,G__13242));
});})(i__13240,s__13237__$1,y,c__4322__auto__,size__4323__auto__,b__13241,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((function (i__13240,s__13237__$1,y,c__4322__auto__,size__4323__auto__,b__13241,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (e){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__13240,s__13237__$1,y,c__4322__auto__,size__4323__auto__,b__13241,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((6) * x),"all","hidden",(1)])], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?((((30) < y))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.35 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),") "].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((31) < y))?2.2:(0)),cljs.core.cst$kw$y,((((31) < y))?-6.3:0.8),cljs.core.cst$kw$height,5.5,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),")"].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?2.15:0.02),cljs.core.cst$kw$y,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?-7.1:(0)),cljs.core.cst$kw$height,6.794,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(17))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"scale (1.75)",cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,-0.334,cljs.core.cst$kw$y,-0.1,cljs.core.cst$kw$fill,"gray"], null)], null):null)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13269 = (i__13240 + (1));
i__13240 = G__13269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13241),mecca$components$staff_$_iter__13236_$_iter__13238(cljs.core.chunk_rest(s__13239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13241),null);
}
} else {
var y = cljs.core.first(s__13239__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(12.5,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),((function (s__13237__$1,y,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(s__13237__$1,y,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,"gray",(3),((function (s__13237__$1,y,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
var G__13243 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13243) : re_frame.core.dispatch.call(null,G__13243));
});})(s__13237__$1,y,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((function (s__13237__$1,y,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (e){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(s__13237__$1,y,s__13239__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((6) * x),"all","hidden",(1)])], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?((((30) < y))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.35 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),") "].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((31) < y))?2.2:(0)),cljs.core.cst$kw$y,((((31) < y))?-6.3:0.8),cljs.core.cst$kw$height,5.5,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),")"].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?2.15:0.02),cljs.core.cst$kw$y,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?-7.1:(0)),cljs.core.cst$kw$height,6.794,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(17))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"scale (1.75)",cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,-0.334,cljs.core.cst$kw$y,-0.1,cljs.core.cst$kw$fill,"gray"], null)], null):null)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$staff_$_iter__13236_$_iter__13238(cljs.core.rest(s__13239__$2)));
}
} else {
return null;
}
break;
}
});})(s__13237__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,null,null));
});})(s__13237__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.range.cljs$core$IFn$_invoke$arity$1((31)),(31),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(33),(35)], 0))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$components$staff_$_iter__13236(cljs.core.rest(s__13237__$1)));
} else {
var G__13270 = cljs.core.rest(s__13237__$1);
s__13237__$1 = G__13270;
continue;
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position))
,null,null));
});})(focused,lead,bassline,drums,current_position))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__13244(s__13245){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__13245__$1 = s__13245;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13245__$1);
if(temp__5457__auto__){
var s__13245__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13245__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13245__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13247 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13246 = (0);
while(true){
if((i__13246 < size__4323__auto__)){
var map__13248 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13246);
var map__13248__$1 = ((((!((map__13248 == null)))?(((((map__13248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13248):map__13248);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13248__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13248__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13247,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__13271 = (i__13246 + (1));
i__13246 = G__13271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13247),mecca$components$staff_$_iter__13244(cljs.core.chunk_rest(s__13245__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13247),null);
}
} else {
var map__13250 = cljs.core.first(s__13245__$2);
var map__13250__$1 = ((((!((map__13250 == null)))?(((((map__13250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13250):map__13250);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13250__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13250__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$components$staff_$_iter__13244(cljs.core.rest(s__13245__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position))
,null,null));
});})(focused,lead,bassline,drums,current_position))
;
return iter__4324__auto__(cljs.core.deref(lead));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__13252(s__13253){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__13253__$1 = s__13253;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13253__$1);
if(temp__5457__auto__){
var s__13253__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13253__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13253__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13255 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13254 = (0);
while(true){
if((i__13254 < size__4323__auto__)){
var map__13256 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13254);
var map__13256__$1 = ((((!((map__13256 == null)))?(((((map__13256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13256):map__13256);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13256__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13256__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13255,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__13272 = (i__13254 + (1));
i__13254 = G__13272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13255),mecca$components$staff_$_iter__13252(cljs.core.chunk_rest(s__13253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13255),null);
}
} else {
var map__13258 = cljs.core.first(s__13253__$2);
var map__13258__$1 = ((((!((map__13258 == null)))?(((((map__13258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13258):map__13258);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13258__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13258__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$components$staff_$_iter__13252(cljs.core.rest(s__13253__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position))
,null,null));
});})(focused,lead,bassline,drums,current_position))
;
return iter__4324__auto__(cljs.core.deref(bassline));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__13260(s__13261){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__13261__$1 = s__13261;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13261__$1);
if(temp__5457__auto__){
var s__13261__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13261__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13261__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13263 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13262 = (0);
while(true){
if((i__13262 < size__4323__auto__)){
var map__13264 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13262);
var map__13264__$1 = ((((!((map__13264 == null)))?(((((map__13264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13264):map__13264);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13264__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13264__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13263,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_hit,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__13273 = (i__13262 + (1));
i__13262 = G__13273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13263),mecca$components$staff_$_iter__13260(cljs.core.chunk_rest(s__13261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13263),null);
}
} else {
var map__13266 = cljs.core.first(s__13261__$2);
var map__13266__$1 = ((((!((map__13266 == null)))?(((((map__13266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13266):map__13266);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13266__$1,cljs.core.cst$kw$time);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13266__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_hit,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$components$staff_$_iter__13260(cljs.core.rest(s__13261__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position))
,null,null));
});})(focused,lead,bassline,drums,current_position))
;
return iter__4324__auto__(cljs.core.deref(drums));
})())], null);
});
;})(focused,lead,bassline,drums,current_position))
});
mecca.components.mortar_row = (function mecca$components$mortar_row(x,y,width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + (width * (8))),cljs.core.cst$kw$y1,(y + 3.5),cljs.core.cst$kw$y2,(y + 3.5),cljs.core.cst$kw$stroke,"black"], null)], null);
});
mecca.components.brick_row = (function mecca$components$brick_row(x,y,width,offset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + ((8) * width)),cljs.core.cst$kw$y1,(1.5 + y),cljs.core.cst$kw$y2,(1.5 + y),cljs.core.cst$kw$stroke_DASH_width,(3),cljs.core.cst$kw$stroke_DASH_dasharray,"7 1",cljs.core.cst$kw$stroke_DASH_dashoffset,offset,cljs.core.cst$kw$stroke,"#c74a0a"], null)], null);
});
mecca.components.mortar_columns = (function mecca$components$mortar_columns(x,y,width,offset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + ((8) * width)),cljs.core.cst$kw$y1,(1.5 + y),cljs.core.cst$kw$y2,(1.5 + y),cljs.core.cst$kw$stroke_DASH_width,(3),cljs.core.cst$kw$stroke_DASH_dasharray,"1 7",cljs.core.cst$kw$stroke_DASH_dashoffset,offset,cljs.core.cst$kw$stroke,"black"], null)], null);
});
mecca.components.brick_row_pair = (function mecca$components$brick_row_pair(x,y,width){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row,x,y,width,(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.mortar_columns,x,y,width,(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.mortar_row,x,y,width], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row,x,(y + (4)),width,(4)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.mortar_columns,x,(y + (4)),width,(5)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.mortar_row,x,(y + (4)),width], null)], null);
});
mecca.components.castle_arch = (function mecca$components$castle_arch(y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,(function (){var iter__4324__auto__ = (function mecca$components$castle_arch_$_iter__13274(s__13275){
return (new cljs.core.LazySeq(null,(function (){
var s__13275__$1 = s__13275;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13275__$1);
if(temp__5457__auto__){
var s__13275__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13275__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13275__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13277 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13276 = (0);
while(true){
if((i__13276 < size__4323__auto__)){
var vec__13278 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13276);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13278,(0),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13278,(1),null);
cljs.core.chunk_append(b__13277,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x1,((40) - dx),cljs.core.cst$kw$x2,((40) + dx),cljs.core.cst$kw$y1,((32) + dy),cljs.core.cst$kw$y2,((32) + dy),cljs.core.cst$kw$stroke,"black"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dy,dx], null)], null)));

var G__13284 = (i__13276 + (1));
i__13276 = G__13284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13277),mecca$components$castle_arch_$_iter__13274(cljs.core.chunk_rest(s__13275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13277),null);
}
} else {
var vec__13281 = cljs.core.first(s__13275__$2);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13281,(0),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13281,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x1,((40) - dx),cljs.core.cst$kw$x2,((40) + dx),cljs.core.cst$kw$y1,((32) + dy),cljs.core.cst$kw$y2,((32) + dy),cljs.core.cst$kw$stroke,"black"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dy,dx], null)], null)),mecca$components$castle_arch_$_iter__13274(cljs.core.rest(s__13275__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [16.5,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [17.5,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [18.5,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.5,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [21.5,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [22.5,(8)], null)], null));
})()], null);
});
mecca.components.castle_door = (function mecca$components$castle_door(x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle_arch,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$width,(16),cljs.core.cst$kw$height,(24),cljs.core.cst$kw$fill,"black"], null)], null)], null);
});
mecca.components.castle_roof = (function mecca$components$castle_roof(x,y,width){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + width),cljs.core.cst$kw$y1,(y + 0.5),cljs.core.cst$kw$y2,(y + 0.5),cljs.core.cst$kw$stroke_DASH_width,(1),cljs.core.cst$kw$stroke_DASH_dasharray,"9 7",cljs.core.cst$kw$stroke_DASH_dashoffset,(-11),cljs.core.cst$kw$stroke,"#fbbbaf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + width),cljs.core.cst$kw$y1,(y + (4)),cljs.core.cst$kw$y2,(y + (4)),cljs.core.cst$kw$stroke_DASH_width,(6),cljs.core.cst$kw$stroke_DASH_dasharray,"1 7",cljs.core.cst$kw$stroke_DASH_dashoffset,(5),cljs.core.cst$kw$stroke,"#fbbbaf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + width),cljs.core.cst$kw$y1,(y + (4)),cljs.core.cst$kw$y2,(y + (4)),cljs.core.cst$kw$stroke_DASH_width,(6),cljs.core.cst$kw$stroke_DASH_dasharray,"7 9",cljs.core.cst$kw$stroke_DASH_dashoffset,(4),cljs.core.cst$kw$stroke,"#c74a0a"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + width),cljs.core.cst$kw$y1,(y + 7.5),cljs.core.cst$kw$y2,(y + 7.5),cljs.core.cst$kw$stroke_DASH_width,(1),cljs.core.cst$kw$stroke_DASH_dasharray,"9 7",cljs.core.cst$kw$stroke_DASH_dashoffset,(-11),cljs.core.cst$kw$stroke,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + width),cljs.core.cst$kw$y1,(y + 7.5),cljs.core.cst$kw$y2,(y + 7.5),cljs.core.cst$kw$stroke_DASH_width,(1),cljs.core.cst$kw$stroke_DASH_dasharray,"9 7",cljs.core.cst$kw$stroke_DASH_dashoffset,(13),cljs.core.cst$kw$stroke,"#fbbbaf"], null)], null)], null);
});
mecca.components.brick_face = (function mecca$components$brick_face(x,y,width){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"scale (0.18)",cljs.core.cst$kw$opacity,(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle_roof,x,y,((8) * width)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row_pair,x,(y + (8)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row_pair,x,(y + (16)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row_pair,x,(y + (24)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row_pair,x,(y + (32)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row_pair,x,(y + (40)),width], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,(10)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle_door,(32),(y + (24))], null):null)], null);
});
mecca.components.controls = (function mecca$components$controls(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale (0.8) translate (24,58)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M 15.980521,7.613225 0.42857114,7.607391 0.21428596,7.378536 0,7.149667 V 3.808607 0.467532 L 0.23376627,0.233767 0.46753329,0 H 15.999999 31.532464 L 31.766239,0.233767 32,0.467532 V 3.809531 7.151509 L 31.766239,7.38529 31.532464,7.61905 15.980521,7.61325 Z m 0,-0.190477 15.361467,0.0058 0.233773,-0.233756 0.233758,-0.233772 V 3.809541 0.658023 L 31.575761,0.424258 31.341988,0.190492 H 15.999952 0.65796607 L 0.42419962,0.424258 0.1904332,0.658023 v 3.150596 3.15058 l 0.2142863,0.228874 0.21428465,0.22887 15.36146885,0.0058 z M 15.983521,6.66305 1.1908176,6.659128 1.0716125,6.524063 0.95256497,6.388844 V 3.806716 1.224461 L 1.0885172,1.088416 1.2245715,0.95236 h 14.7754815 14.7755 l 0.136057,0.136056 0.136055,0.136056 V 3.809505 6.394546 L 30.91161,6.530587 30.775553,6.666643 15.983047,6.662743 Z m 0,-0.190473 14.602041,0.0039 0.136051,-0.13605 0.136051,-0.136052 V 3.809561 1.414998 L 30.721142,1.278936 30.585104,1.142879 H 15.999952 1.4149235 L 1.2788678,1.278936 1.1428134,1.414988 v 2.391767 2.391778 l 0.1190484,0.135229 0.1190479,0.135206 14.6020393,0.0039 z M 18.933396,5.327509 18.714781,5.321709 18.500489,5.092841 18.286206,4.86399 V 4.665759 4.46755 L 18.51997,4.233798 18.753734,4.000017 H 18.952866 19.152 l 0.233772,0.233781 0.233763,0.233752 V 4.666688 4.865831 L 19.385772,5.099587 19.152,5.333365 18.933386,5.327565 Z m 0.003,-0.188272 0.221085,0.0039 0.136058,-0.136059 0.136046,-0.136044 V 4.666753 4.462671 L 19.293255,4.32658 19.157198,4.190523 H 18.953031 18.74895 L 18.612894,4.32658 18.476848,4.462631 V 4.66393 4.865227 l 0.119045,0.135217 0.119048,0.135216 0.22109,0.0039 z m 0.01703,-0.377311 h -0.285903 v -0.09526 -0.09523 h 0.285714 0.285723 v 0.09523 0.09526 z M 29.791068,5.327509 29.572455,5.321709 29.358167,5.092841 29.143886,4.863991 V 4.665773 4.467564 l 0.233762,-0.233753 0.233768,-0.233778 h 0.199133 0.199133 l 0.233764,0.233778 0.233769,0.233753 v 0.199139 0.199142 l -0.233769,0.233756 -0.233764,0.233778 -0.218614,-0.0058 z m 0.003,-0.188272 0.221083,0.0039 0.13606,-0.136059 0.136051,-0.136044 V 4.666803 4.462722 L 30.150858,4.3267 30.014802,4.190647 H 29.810588 29.606507 L 29.470453,4.3267 29.334396,4.46275 v 0.201294 0.2013 l 0.11905,0.135224 0.11905,0.135205 0.221082,0.0039 z m 0,-0.190464 -0.03059,-0.0039 -0.124269,-0.140807 -0.124276,-0.140812 0.148079,-0.148081 0.148089,-0.148091 0.149656,0.149667 0.149661,0.149652 -0.142854,0.142866 -0.142859,0.142846 -0.03054,-0.0039 z m -5.411572,0.0039 h -3.809978 v -0.1905 -0.190481 h 3.809518 3.809529 V 4.762184 4.95265 Z M 2.2858336,2.857164 H 1.90488 V 2.761934 2.666694 H 2.1905952 2.4763084 V 2.571454 2.476214 H 2.1905952 1.90488 V 2.190498 1.904786 h 0.3809536 0.3809525 v 0.09524 0.09524 H 2.3810716 2.0953564 v 0.09524 0.09524 h 0.2857152 0.2857145 v 0.285713 0.285713 z m 1.0476189,0 H 3.2382145 V 2.476213 2.09526 H 3.0475757 2.8571004 V 2.00002 1.90478 H 3.3332905 3.8094801 V 2.00002 2.09526 H 3.6190057 3.428528 v 0.380953 0.380951 z m 1.0476153,0 H 4.0001219 V 2.380974 1.904786 h 0.3809459 0.3809587 v 0.476188 0.47619 z m 0,-0.190476 h 0.190484 V 2.380974 2.09526 H 4.3809138 4.1904383 V 2.380974 2.666688 Z M 5.0477402,2.857164 H 4.9524931 V 2.380974 1.904786 H 5.3334577 5.7143995 V 2.190498 2.476213 H 5.4286836 5.1429702 V 2.666688 2.857164 Z M 5.3334577,2.285738 H 5.5239312 V 2.190498 2.095258 H 5.3332795 5.1428179 v 0.09524 0.09524 z M 8.0953554,2.857164 H 8.0001234 V 2.380974 1.904786 H 8.3810663 8.7620294 V 2.190498 2.476213 H 8.476319 8.1905885 V 2.666688 2.857164 Z M 8.3810667,2.285738 H 8.5715506 V 2.190498 2.095258 H 8.3809166 8.1904384 v 0.09524 0.09524 z m 0.952391,0.571426 H 8.9524899 V 2.380974 1.904786 h 0.095252 0.095228 v 0.380952 0.38095 h 0.2857134 0.2857159 v 0.09524 0.09523 z m 0.6666663,0 H 9.904874 V 2.517031 2.176895 l 0.13605,-0.136057 0.136064,-0.136052 h 0.108848 0.108842 l 0.136036,0.136052 0.136063,0.136057 v 0.340136 0.340133 h -0.09523 -0.09523 V 2.666688 2.476213 h -0.190476 -0.190486 v 0.190475 0.190476 z m 0.285717,-0.571426 h 0.190476 v -0.09524 -0.09524 h -0.190476 -0.190486 v 0.09524 0.09524 z m 1.047616,0.571426 h -0.09524 V 2.606429 2.355698 l -0.205744,-0.178439 -0.205758,-0.178446 0.06229,-0.06228 0.06227,-0.06228 0.191083,0.220318 0.191089,0.220322 0.191077,-0.220322 0.191084,-0.220318 0.06227,0.06228 0.06228,0.06228 -0.205743,0.178446 -0.205745,0.178439 v 0.250731 0.250735 z m 3.142858,0 H 14.095358 V 2.380974 1.904786 h 0.09523 0.09525 v 0.380952 0.38095 h 0.28571 0.285705 v 0.09524 0.09523 z m 0.952368,0 H 15.047742 V 2.380974 1.904786 h 0.380941 0.380965 v 0.476188 0.47619 z m 0,-0.190476 h 0.190479 V 2.380974 2.09526 h -0.190479 -0.19046 v 0.285714 0.285714 z m 0.952385,0.190476 H 16.000124 V 2.380974 1.904786 h 0.380944 0.380962 v 0.476188 0.47619 z m 0,-0.190476 H 16.57155 V 2.380974 2.09526 h -0.190482 -0.190479 v 0.285714 0.285714 z m 0.666674,0.190476 h -0.09525 V 2.380974 1.904786 h 0.380966 0.380941 V 2.190498 2.476213 H 17.428683 17.14297 v 0.190475 0.190476 z m 0.285716,-0.571426 h 0.190476 V 2.190498 2.095258 H 17.333458 17.14297 v 0.09524 0.09524 z m 5.047608,0.571426 h -0.09523 V 2.476213 2.09526 H 22.095349 21.904875 V 2.00002 1.90478 h 0.476187 0.47619 V 2.00002 2.09526 H 22.666777 22.47631 v 0.380953 0.380951 z m 1.047617,0 h -0.38094 V 2.380974 1.904786 h 0.38094 0.38096 v 0.09524 0.09524 h -0.285714 -0.28571 v 0.09524 0.09524 h 0.28571 0.285714 v 0.09524 0.09524 h -0.285714 -0.28571 v 0.09524 0.09524 h 0.28571 0.285714 v 0.09524 0.09523 z m 0.66667,0 h -0.09523 V 2.380974 1.904786 h 0.06024 0.06027 l 0.177834,0.205046 0.177847,0.205054 0.177836,-0.205054 0.177829,-0.205046 h 0.06026 0.06025 v 0.476188 0.47619 h -0.09523 -0.09523 V 2.571451 2.285738 h -0.08731 -0.0873 l -0.05555,0.11905 -0.05556,0.119048 -0.05556,-0.119048 -0.05555,-0.11905 h -0.0873 -0.08731 v 0.285713 0.285713 z m 1.142866,0 h -0.09525 V 2.380974 1.904786 h 0.380959 0.38095 v 0.285712 0.285715 h -0.285716 -0.285703 v 0.190475 0.190476 z m 0.28571,-0.571426 h 0.19047 v -0.09524 -0.09524 h -0.19047 -0.19047 v 0.09524 0.09524 z m 0.952385,0.571426 H 26.095353 V 2.380974 1.904786 h 0.380961 0.380942 v 0.476188 0.47619 z m 0,-0.190476 h 0.190468 V 2.380974 2.09526 H 26.476314 26.28584 v 0.285714 0.285714 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M 15.789998,7.234483 0.42852798,7.230773 0.30948065,7.095568 0.1904332,6.960342 V 3.809211 0.657999 L 0.42419962,0.424232 0.65796607,0.190466 H 15.904721 31.151477 l 0.233756,0.233766 0.233779,0.233767 v 3.05627 3.056295 L 31.385233,7.004314 31.151477,7.23809 15.789998,7.23419 Z m 0.09772,-0.190487 15.2687,0.0039 0.136053,-0.136057 0.136064,-0.136058 V 3.714311 0.653095 L 31.292469,0.517026 31.156416,0.38097 H 15.904721 0.65301777 l -0.1360539,0.136056 -0.1360543,0.136056 v 3.058437 3.058436 l 0.11904676,0.135226 0.11904782,0.13521 15.26871185,0.0039 z M 1.0713848,6.66305 0.99995617,6.659437 0.88090996,6.524211 0.76186204,6.389008 V 3.809211 1.229431 L 0.99562827,0.995666 1.229393,0.761895 h 14.770559 14.770565 l 0.233774,0.233767 0.233756,0.233765 v 2.582554 2.582576 l -0.147382,0.147391 -0.147403,0.147379 -0.06689,-0.072 -0.06689,-0.072 0.119046,-0.04254 0.119049,-0.04254 V 3.842391 1.224483 L 30.911519,1.088425 30.775472,0.95237 H 15.999952 1.2244463 L 1.0883921,1.088425 0.95233657,1.224481 V 3.850329 6.47617 h 0.095239 0.095238 v 0.09525 0.09523 l -0.071429,-0.004 z M 15.959146,6.476189 H 1.3332909 V 6.380949 6.285729 H 15.999952 30.666628 V 3.809533 1.33334 h 0.09523 0.09524 v 2.435371 2.435382 l -0.136054,0.136055 -0.136049,0.136043 z m 0.0408,-0.380943 H 1.523766 V 3.809531 1.523813 H 15.999952 30.476143 V 2.952381 4.38095 h -0.0742 -0.07422 L 30.190438,4.190479 30.053148,4.00001 H 29.83175 29.610351 L 29.376575,4.233771 29.142818,4.46753 v 0.199136 0.199142 l 0.233757,0.233758 0.233776,0.233777 h 0.221399 0.221398 l 0.13729,-0.190485 0.137285,-0.19048 h 0.07422 0.0742 v 0.57144 0.571428 z m 2.932905,-0.76774 0.21862,0.0058 0.23376,-0.233779 0.233774,-0.233756 V 4.666636 4.46751 L 19.385243,4.233738 19.151482,3.999986 h -0.199136 -0.199143 l -0.233759,0.233753 -0.233775,0.233776 v 0.198197 0.198217 l 0.214293,0.228866 0.214285,0.228861 z M 24.380907,4.952378 H 28.19043 V 4.761921 4.571439 H 24.380913 20.571376 V 4.761921 4.952378 Z M 3.8094801,3.047628 H 5.9047208 V 2.380954 1.71429 H 3.8094801 1.7142431 v 0.666664 0.666674 z m 6.095241,0 H 11.999953 V 2.380954 1.71429 H 9.9047211 7.8094763 v 0.666664 0.666674 z m 5.9999999,0 h 2 V 2.380954 1.71429 h -2 -2 v 0.666664 0.666674 z m 8.476194,0 h 2.666656 V 2.380954 1.71429 h -2.666656 -2.666672 v 0.666664 0.666674 z",cljs.core.cst$kw$fill,"#9fbfaf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"M 15.956661,7.428569 H 0.57138494 V 7.333339 7.238089 H 15.861422 31.151477 L 31.385233,7.004334 31.619012,6.770569 V 3.705974 0.641393 l -0.205753,-0.178441 -0.205742,-0.178443 0.05711,-0.05712 0.05712,-0.05712 0.24385,0.243867 0.243875,0.243867 V 3.809521 6.961034 L 31.575715,7.194801 31.341939,7.428559 Z M 1.2380522,6.285727 H 1.1428132 V 3.85034 1.41497 L 1.2788676,1.278917 1.4149233,1.142862 h 14.6258547 14.62585 v 0.09524 0.09524 H 15.999952 1.3332909 v 2.476193 2.476196 z",cljs.core.cst$kw$fill,"#777776"], null)], null)], null);
});
mecca.components.editor = (function mecca$components$editor(){
var current_position = (function (){var G__13285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13285) : re_frame.core.subscribe.call(null,G__13285));
})();
var playing_QMARK_ = (function (){var G__13286 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13286) : re_frame.core.subscribe.call(null,G__13286));
})();
var mario_sprite = (function (){var G__13287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_sprite], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13287) : re_frame.core.subscribe.call(null,G__13287));
})();
var jump = (function (){var G__13288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13288) : re_frame.core.subscribe.call(null,G__13288));
})();
var selected_note_value = (function (){var G__13289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13289) : re_frame.core.subscribe.call(null,G__13289));
})();
return ((function (current_position,playing_QMARK_,mario_sprite,jump,selected_note_value){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 64"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_face,(16),(0),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_face,(0),(32),(10)], null),((cljs.core.even_QMARK_(cljs.core.deref(mario_sprite)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,cljs.core.cst$kw$run1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1((32))),cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1((32)))),cljs.core.mod(cljs.core.deref(mario_sprite),(64)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,cljs.core.cst$kw$run2,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1((32))),cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1((32)))),cljs.core.mod(cljs.core.deref(mario_sprite),(64)))], null)),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_notes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.2) translate(8,0)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"whole","white",(80)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"dotted-half","white",(96)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"half","white",(112)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"dotted-quarter","white",(128)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"quarter","pink",(144)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"dotted-eighth","white",(160)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"q-triplets","white",(176)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"eighth","white",(192)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"dotted-sixteenth","white",(208)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"e-triplets","white",(224)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"sixteenth","white",(240)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_rests,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.2) translate(8,16)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"whole-rest","white",(80)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"half-rest","white",(112)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"quarter-rest","pink",(144)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"eighth-rest","white",(192)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"sixteenth-rest","white",(240)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.5,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(31),cljs.core.cst$kw$width,(64),cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.staff], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.controls], null)], null);
});
;})(current_position,playing_QMARK_,mario_sprite,jump,selected_note_value))
});
mecca.components.mecca = (function mecca$components$mecca(){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return mecca.music.play_bassline_BANG_();
})], null),"Play Bassline"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13291) : re_frame.core.subscribe.call(null,G__13291));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Lead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13292) : re_frame.core.subscribe.call(null,G__13292));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13293) : re_frame.core.subscribe.call(null,G__13293));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Drums: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13294 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13294) : re_frame.core.subscribe.call(null,G__13294));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario Sprite: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_sprite], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13295) : re_frame.core.subscribe.call(null,G__13295));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13296 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13296) : re_frame.core.subscribe.call(null,G__13296));
})()))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num())," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13297 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13297) : re_frame.core.subscribe.call(null,G__13297));
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13298 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13298) : re_frame.core.subscribe.call(null,G__13298));
})())),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13299 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13299) : re_frame.core.subscribe.call(null,G__13299));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13300) : re_frame.core.subscribe.call(null,G__13300));
})()))].join('')], null)], null);
});
