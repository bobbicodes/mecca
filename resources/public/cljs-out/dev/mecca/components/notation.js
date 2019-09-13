// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.components.notation');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
mecca.components.notation.brace = (function mecca$components$notation$brace(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate (0.7,7.825) scale(0.6, 0.91)",cljs.core.cst$kw$d,"M1.731 28.982H1.576v-.084-.084h-.113-.113v-.113-.113h-.113-.113v-.225-.225h-.113-.113v-.225-.225h-.113-.113v-.225-.225H.562.45V26.787 26.337H.338.225v-1.914-1.914h.113.113v-.562-.562h.113.113v-.675-.675h.113.113v-.788-.788h.113.113v-.675-.675h-.113-.113v-.562-.562h-.113-.113v-.338-.338h-.113-.113v-.113-.113H.338.225v-.225-.225H.113 0v-.225-.225h.113.113v-.113-.113h.113.113v-.225-.225h.113.113v-.225-.225h.113.113v-.562-.562h.113.113V11.255 10.58H1.013.901V9.792 9.004H.788.675V8.329 7.654H.562.45V7.09 6.528H.338.225V4.614 2.702h.113.113V2.251 1.801h.113.113v-.225-.225h.113.113v-.225-.225h.113.113v-.225-.225h.113.113V.338.225h.113.113V.113 0H1.731 1.885V.113.225H1.843 1.801v.113.113h-.113-.113v.225.225h-.113-.113v.113.113h-.113-.113v.338.338h-.113-.113v1.801 1.801h.113.113v.675.675h.113.113v.562.562h.113.113v2.026 2.026h-.113-.113v.45.45h-.113-.113v.225.225h-.113-.113v.225.225h-.113-.113v.225.225h-.113-.113v.113.113H.338.225v.113.113h.113.113v.113.113h.113.113v.225.225h.113.113v.225.225h.113.113v.225.225h.113.113v.338.338h.113.113v2.026 2.026h-.113-.113v.675.675h-.113-.113v.675.675h-.113-.113v1.801 1.801h.113.113v.225.225h.113.113v.225.225h.113.113v.225.225h.154.154v.197.197z"], null)], null);
});
mecca.components.notation.bar_line = (function mecca$components$notation$bar_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"translate(3.825,-0.09)",cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y1,(8),cljs.core.cst$kw$y2,34.19,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null);
});
mecca.components.notation.bar_number = (function mecca$components$notation$bar_number(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.3 + ((24) * (n - (1))))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(6.3),")"].join(''),cljs.core.cst$kw$d,(function (){var G__13043 = n;
switch (G__13043) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13043)].join('')));

}
})()], null)], null);
});
mecca.components.notation.beat_line = (function mecca$components$notation$beat_line(x,n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(14,0)"], null),(((cljs.core.mod(n,(4)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.bar_number,((x / (4)) + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,(x * (6)),cljs.core.cst$kw$x2,(x * (6)),cljs.core.cst$kw$y1,(6),cljs.core.cst$kw$y2,(34),cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,(x * (6)),cljs.core.cst$kw$x2,(x * (6)),cljs.core.cst$kw$y1,(6),cljs.core.cst$kw$y2,(34),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.075,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null))], null);
});
mecca.components.notation.ending_bar = (function mecca$components$notation$ending_bar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(1.2,0.06)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,22.25,cljs.core.cst$kw$y,(3),cljs.core.cst$kw$width,0.24,cljs.core.cst$kw$height,11.25,cljs.core.cst$kw$ry,(0),cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,22.125,cljs.core.cst$kw$x2,22.125,cljs.core.cst$kw$y1,(3),cljs.core.cst$kw$y2,14.25,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.1], null)], null)], null);
});
mecca.components.notation.ending_bar_repeat = (function mecca$components$notation$ending_bar_repeat(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,62.5,cljs.core.cst$kw$y,(8),cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,(28),cljs.core.cst$kw$ry,(0),cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,61.8,cljs.core.cst$kw$x2,61.8,cljs.core.cst$kw$y1,(8),cljs.core.cst$kw$y2,(36),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(11),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(13),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(23),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(25),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(33),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(35),cljs.core.cst$kw$r,0.4], null)], null)], null);
});
mecca.components.notation.eighth_note_flag = (function mecca$components$notation$eighth_note_flag(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?"0.1)":"0.1,-0.1)")),"translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?(24):(2))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?(-61):(-57))),")"].join(''),cljs.core.cst$kw$d,"M1-8v15h-1v-15h1zM1-8c0 12 12 19 12 31 0 4-1 8-2 12 0 0-1 1-1 1-1 0-2-1-1-2 2-4 2-7 2-11 0-6-6-12-10-16v-15z"], null)], null);
});
mecca.components.notation.beam = (function mecca$components$notation$beam(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$points,"2981,475 3499,424 3499,484 2981,535"], null)], null);
});
mecca.components.notation.kill_note = (function mecca$components$notation$kill_note(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$d,"M 0.75,0.3 L 1.75,-0.7 M 1.75,0.3 L 0.75,-0.7",cljs.core.cst$kw$stroke,"red",cljs.core.cst$kw$stroke_DASH_linecap,"round",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null);
});
mecca.components.notation.drum_hit = (function mecca$components$notation$drum_hit(duration,p__13045){
var vec__13046 = p__13045;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13046,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13046,(1),null);
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_,vec__13046,x,y){
return (function (color,p__13049){
var vec__13050 = p__13049;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13050,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__13050,x__$1,y__$1,mouseover_QMARK_,vec__13046,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(vec__13050,x__$1,y__$1,mouseover_QMARK_,vec__13046,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__13050,x__$1,y__$1,mouseover_QMARK_,vec__13046,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(vec__13050,x__$1,y__$1,mouseover_QMARK_,vec__13046,x,y))
,cljs.core.cst$kw$on_DASH_click,((function (vec__13050,x__$1,y__$1,mouseover_QMARK_,vec__13046,x,y){
return (function (){
var G__13053 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_note,x__$1,y__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13053) : re_frame.core.dispatch.call(null,G__13053));
});})(vec__13050,x__$1,y__$1,mouseover_QMARK_,vec__13046,x,y))
,cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((12.78 + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((31) < y__$1))?2.2:(0)),cljs.core.cst$kw$y,((((31) < y__$1))?-6.3:0.8),cljs.core.cst$kw$height,5.5,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"black"], null)], null),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__13046,x,y))
});
mecca.components.notation.ledger_line = (function mecca$components$notation$ledger_line(p__13054){
var vec__13055 = p__13054;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13055,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13055,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform,["scale (1,1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((8.875 + (6.9 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((25.0375 - y)),") "].join(''),cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null)], null);
});
mecca.components.notation.note = (function mecca$components$notation$note(value,p__13058){
var vec__13059 = p__13058;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13059,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13059,(1),null);
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_,vec__13059,x,y){
return (function (value__$1,p__13062){
var vec__13063 = p__13062;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__13063,x__$1,y__$1,mouseover_QMARK_,vec__13059,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(vec__13063,x__$1,y__$1,mouseover_QMARK_,vec__13059,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__13063,x__$1,y__$1,mouseover_QMARK_,vec__13059,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(vec__13063,x__$1,y__$1,mouseover_QMARK_,vec__13059,x,y))
,cljs.core.cst$kw$on_DASH_click,((function (vec__13063,x__$1,y__$1,mouseover_QMARK_,vec__13059,x,y){
return (function (){
var G__13066 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_note,x__$1,y__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13066) : re_frame.core.dispatch.call(null,G__13066));
});})(vec__13063,x__$1,y__$1,mouseover_QMARK_,vec__13059,x,y))
,cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((13) + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?2.15:0.02),cljs.core.cst$kw$y,((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?-7.1:(0)),cljs.core.cst$kw$height,6.794,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"black"], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(17))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform,"scale (1.75,1.75)",cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,-0.334,cljs.core.cst$kw$y,-0.1], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,0.5))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.eighth_note_flag,x__$1,y__$1], null):null)),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__13059,x,y))
});
mecca.components.notation.drum_clef = (function mecca$components$notation$drum_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transform,"translate(3.75,31.334)",cljs.core.cst$kw$d,"M2.5-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1zM.8-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1z",cljs.core.cst$kw$fill,"black"], null)], null);
});
mecca.components.notation.bass_clef = (function mecca$components$notation$bass_clef(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(2.5,20)",cljs.core.cst$kw$d,"M.187 6.323H0V6.244 6.165H.094.187V6.072 5.978H.467.747v-.094-.094h.187.187v-.094-.094h.094.094v-.094-.094h.094.094v-.094-.094h.187.187v-.094-.094h.094.094v-.094-.094h.094.094v-.094-.094h.094.094v-.187-.187h.094.094v-.094-.094h.094.094v-.187-.187h.094.094V3.456 3.176h.094.094V2.428 1.681H3.083 2.989V1.308.934H2.896 2.802V.841.747H2.709 2.616V.654.56H2.523 2.428V.467.373H1.868 1.308V.467.56H1.121.934V.654.747H.841.747V.934 1.121H1.215 1.681v.094.094h.094.094v.56.56h-.094-.094v.094.094H1.121.56V2.523 2.428H.467.373V2.241 2.055H.28.187V1.681 1.308H.28.373V1.028.747H.467.56V.654.56H.654.747V.467.373H.841.934V.28.187H1.121 1.308V.094 0H1.961 2.616V.094.187h.28.28v.094.094h.094.094v.094.094h.094.094v.094.094h.094.094v.094.094h.094.094v.187.187h.094.094v.934.934h-.094-.094v.187.187h-.094-.094v.187.187h-.094-.094v.187.187h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.187-.187v.094.094h-.094-.094v.094.094h-.187-.187v.094.094H1.495 1.308v.094.094H1.121.934v.094.094H.654.373v.079.079z\n                 M4.844 1.721H4.588V1.636 1.551H4.503 4.418V1.295 1.038h.086.086V.953.868h.256.256v.086.086h.086.086V1.295 1.551h-.086-.086v.086.086z\n                 M4.801 3.289H4.548V3.205 3.12H4.463 4.378V2.867 2.613h.085.085V2.529 2.445h.252.252v.085.085h.085.085V2.867 3.12h-.085-.085v.085.085z"], null)], null);
});
});
mecca.components.notation.treble_clef = (function mecca$components$notation$treble_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(2.65,6.3)",cljs.core.cst$kw$d,"M2.214 12.37H1.55v-.097-.097h-.221-.221v-.111-.111h-.111-.111v-.553-.553h.111.111v-.111-.111h.111.111v-.111-.111h.332.332v.111.111h.111.111v.111.111h.111.111v.332.332h-.111-.111v.111.111h-.111-.111v.111.111h.443.443v-.111-.111h.111.111v-.996-.996h-.111-.111v-.111-.111H2.214 1.55v-.111-.111h-.221-.221v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.111-.111H.332.221v-.221-.221H.111 0v-.996-.996h.111.111v-.221-.221h.111.111v-.221-.221h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111V3.653 3.321H1.66 1.55V2.324 1.328h.111.111V.996.664h.111.111V.443.221h.111.111V.111 0h.332.332v.111.111h.111.111v.221.221h.111.111v.332.332h.111.111v.664.664h-.111-.111v.443.443h-.111-.111v.221.221h-.111-.111v.221.221h-.111-.111v.111.111h-.111-.111v.553.553h.111.111v.111.111h.443.443v.111.111h.111.111v.111.111h.111.111v.111.111h.111.111v.221.221h.069.069v.664.664h-.069-.069v.221.221h-.111-.111v.111.111h-.111-.111v.111.111h-.221-.221v.443.443h.111.111v.775.775h-.111-.111v.221.221h-.221-.221v.097.097zM1.992 9.077h.664v-.553-.553h-.111-.111v-.553-.553h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.332.332h.111.111v.221.221h.221.221v.111.111H2.103 1.771v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.221-.221h-.111-.111v-.332-.332h.111.111v-.221-.221h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h-.111-.111v-.332-.332h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.221.221h-.111-.111v.111.111h-.111-.111v.332.332h-.111-.111v.332.332h.111.111v.332.332h.111.111v.111.111h.111.111v.111.111h.111.111v.111.111zm1.328-.221h.221v-.221-.221h.111.111v-.443-.443h-.111-.111v-.221-.221h-.221-.221v-.111-.111h-.111-.111v.553.553h.111.111v.443.443zM2.214 3.321h.221v-.221-.221h.111.111v-.111-.111h.111.111v-.221-.221h.111.111V1.66 1.107H2.767 2.435v.221.221h-.111-.111v.221.221h-.111-.111v.664.664z"], null)], null);
});
mecca.components.notation.sharp = (function mecca$components$notation$sharp(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + y)),")"].join(''),cljs.core.cst$kw$d,"M.18.04V-.91l.4-.11v.95zM.98-.19.7-.11V-1.05l.28-.08v-.39l-.28.08V-2.42h-.11v1l-.4.12V-2.24h-.11v.98l-.28.08v.39l.28-.08v.95l-.28.08V.55L.08.47v.96h.11V.43l.4-.11v.94h.11V.29L.98.21Z"], null)], null);
});
mecca.components.notation.flat = (function mecca$components$notation$flat(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"m .94 1.62s-.06-1.2-.06-2c0-.32.02-.56.04-.64.08-.24.6-.68.88-.84.18-.1.36-.14.52-.14.2 0 .38.08.5.22.2.22.32.56.32.94 0 .36-.1.78-.34 1.2-.26.48-.84 1.12-1.44 1.5-.08.04-.14.06-.2.06-.18 0-.22-.2-.22-.3m-.7 1.78c.06.08.12.1.18.1s.12-.04.12-.04c.6-.34 1.08-.88 1.58-1.22 1.78-1.24 2.4-2.46 2.4-3.38 0-1.14-.88-1.86-1.8-1.92-.14 0-.28.02-.42.06-.22.06-.46.14-.68.28-.12.1-.34.28-.44.28-.04 0-.06 0-.1-.02-.14-.06-.22-.2-.22-.34.02-.44.14-5.24.14-5.64 0-.22-.18-.34-.38-.34-.28 0-.6.2-.62.56 0 0 .08 11.42.24 11.62"], null)], null);
});
mecca.components.notation.c_sharp_minor = (function mecca$components$notation$c_sharp_minor(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.sharp,6.6,(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.sharp,7.4,(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.sharp,8.2,(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.sharp,(9),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.sharp,9.8,(13)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.sharp,10.6,(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.sharp,11.4,(12)], null)], null);
});
mecca.components.notation.note_button = (function mecca$components$notation$note_button(value,x){
var mario_run = (function (){var G__13067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13067) : re_frame.core.subscribe.call(null,G__13067));
})();
var selected = (function (){var G__13068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13068) : re_frame.core.subscribe.call(null,G__13068));
})();
return ((function (mario_run,selected){
return (function (value__$1,x__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((((((38) < cljs.core.deref(mario_run))) && ((cljs.core.deref(mario_run) < (42))))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,"quarter-rest"))))))?-2.5:(0))),")"].join(''),cljs.core.cst$kw$on_DASH_click,((function (mario_run,selected){
return (function (){
var G__13069 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_note_DASH_value,value__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13069) : re_frame.core.dispatch.call(null,G__13069));
});})(mario_run,selected))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,((((((38) < cljs.core.deref(mario_run))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected)),"-rest"].join(''))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,cljs.core.deref(selected)))))))?"#e6b08e":"#c0c0c0"),cljs.core.cst$kw$d,"M 2,14 H 1 V 8 2 H 1.5 2 V 1.5 1 h 6 6 V 2 3 H 13.5 13 V 2.5 2 H 8 3 V 2.5 3 H 2.5 2 v 5 5 H 2.5 3 v 0.5 0.5 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,((((((38) < cljs.core.deref(mario_run))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,cljs.core.deref(selected)))))?"#b78160":"#707070"),cljs.core.cst$kw$d,"m8 15h-6v-.5-.5h5.5 5.5v-.5-.5h.5.5V7.5 1.999h.5.5V8 14h-.5-.5v.5.5zM4.5 12h-.5v-.5-.5h.5.5v.5.5zm2-2h-.5v-.5-.5h.5.5v.5.5z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,((((((38) < cljs.core.deref(mario_run))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,cljs.core.deref(selected)))))?"#fed5bc":"#e8f0f8"),cljs.core.cst$kw$d,"M 8,14 H 3 C 3.1867279,13.094942 2.825439,13.334551 2.5,13 H 2 V 8 3 H 2.5 3 V 2.5 2 h 3 c 2.6672423,0.00718 4.526189,0 7,0 V 2.5 3 h 0.5 0.5 v 5 5 H 13.5 13 v 0.5 0.5 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,(function (){var G__13070 = value__$1;
switch (G__13070) {
case "half":
return "M8 16H2V16 15H1 1V15 14H0 0V8 2H0 1V1 1H1 2V0 0H8 14V0 1H15 15V1 2H16 16V8 14H16 15V15 15H15 14V16 16ZM8 15H14V15 14H15 15V8 2H15 14V1 1H8 2V1 2H1 1V8 14H1 2V15 15ZM6 13H4V13 12H3 3V11 10H3 4V10 9H4 5V9 8H7 9V5 2H10 10V6 11H10 9V12 12H9 8V13 13ZM5 12H7V12 11H7 8V10 9H7 6V10 10H5 4V11 12Z";

break;
case "dotted-half":
return "M 8,16 H 2 V 15.5 15 H 1.5 1 V 14.5 14 H 0.5 0 V 8 2 H 0.5 1 V 1.5 1 H 1.5 2 V 0.5 0 h 6 6 V 0.5 1 H 14.5 15 V 1.5 2 h 0.5 0.5 v 6 6 H 15.5 15 V 14.5 15 H 14.5 14 v 0.5 0.5 z m 0,-1 h 6 V 14.5 14 H 14.5 15 V 8 2 H 14.5 14 V 1.5 1 H 8 2 V 1.5 2 H 1.5 1 v 6 6 H 1.5 2 V 14.5 15 Z M 5.5,13 H 4 V 12.5 12 H 3.5 3 V 11 10 H 3.5 4 v -0.4999997 -0.5 H 4.5 5 v -0.5 V 8 H 7 9 V 5 2 H 9.5 10 V 6.5 11 H 9.5 9 V 11.5 12 H 8 7 v 0.5 0.5 z m 0,-1 H 7 V 11.5 11 H 7.5 8 V 10 9.0000003 H 7 6 v 0.5 V 10 H 5 4 v 1 1 z m 6.277778,-0.333333 H 11.333333 V 11.555556 11.444444 H 11.166667 11 V 11.166667 10.888889 H 10.777778 10.555556 V 10.5 10.111111 h 0.111111 0.111111 V 9.9444443 9.7777783 H 10.888889 11 v -0.222222 -0.222223 h 0.166667 0.166666 v -0.111111 -0.111111 h 0.388889 0.388889 v 0.166667 0.166666 h 0.222222 0.222223 v 0.166667 0.166667 h 0.166666 0.166667 v 0.166666 0.1666667 H 13 13.111111 v 0.333333 0.333334 h -0.166667 -0.166666 v 0.119047 0.119048 l -0.15873,0.15873 -0.15873,0.15873 H 12.34127 12.222222 V 11.5 11.666667 Z";

break;
case "whole":
return "M 7.9999918,16 H 1.9999979 V 15.5 15 H 1.4999985 0.99999897 V 14.5 14 H 0.49999953 0 V 8 2 H 0.49999953 0.99999897 V 1.5 1 H 1.4999989 1.9999987 V 0.5 0 H 7.9999918 13.999986 V 0.5 1 h 0.500004 0.500003 V 1.5 2 H 15.499997 16 v 6 6 H 15.499997 14.999993 V 14.5 15 H 14.49999 13.999986 v 0.5 0.5 z m 0,-1 H 13.999986 V 14.5 14 h 0.500004 0.500003 V 8 2 H 14.499985 13.999986 V 1.5 1 H 7.9999918 1.9999979 V 1.5 2 H 1.499998 0.99999816 v 6 6 H 1.499998 1.9999979 V 14.5 15 Z M 7.1666594,11.44444 H 6.3333268 V 11.27778 11.11111 H 5.6666606 4.9999944 V 10.94444 10.77778 H 4.833328 4.6666617 V 10.61111 10.44444 H 4.3333291 3.9999964 V 10.27778 10.11111 H 3.8333301 3.6666637 V 9.94444 9.77778 H 3.4999974 3.3333311 V 9.61111 9.44444 H 3.1666648 2.9999984 v -1 -1 H 3.1666648 3.3333311 V 7.11111 6.77778 H 3.6666637 3.9999964 V 6.61111 6.44444 H 4.1666627 4.3333291 V 6.27778 6.11111 H 4.6666617 4.9999944 V 5.94444 5.77778 H 5.333327 5.6666597 V 5.61111 5.44444 H 7.4999923 9.3333234 V 5.61111 5.77778 H 9.8333269 10.33333 v 0.16666 0.16667 h 0.333333 0.333333 v 0.16667 0.16666 h 0.166671 0.166661 v 0.16667 0.16667 h 0.166671 0.166671 v 0.16666 0.16667 h 0.166662 0.166671 V 8.27778 9.44444 H 11.833332 11.66667 v 0.16667 0.16667 h -0.166671 -0.166671 v 0.16666 0.16667 h -0.166661 -0.166671 v 0.16667 0.16666 h -0.166671 -0.166662 v 0.16667 0.16667 H 10.33333 9.9999978 v 0.16666 0.16667 h -1.000007 -0.999999 v 0.16667 0.16666 z m 0.9999989,-1 H 8.6666582 V 10.27778 10.11111 H 8.8333243 8.9999908 V 9.94444 9.77778 H 9.1666616 9.3333234 V 8.94444 8.11111 H 9.1666571 8.9999908 V 7.77778 7.44444 H 8.8333244 8.6666581 V 7.27778 7.11111 H 8.4999918 8.3333255 V 6.94444 6.77778 H 8.1666591 7.9999928 V 6.61111 6.44444 H 7.1666594 6.3333268 V 6.61111 6.77778 H 6.1666605 5.9999942 V 7.11111 7.44444 H 5.8333278 5.6666615 v 0.5 0.5 h 0.1666663 0.1666664 v 0.33334 0.33333 h 0.1666663 0.1666663 v 0.33333 0.33334 h 0.3333327 0.3333326 v 0.16666 0.16667 h 0.3333327 0.3333335 v 0.16667 0.16666 z";

break;
case (1):
return "m 7.9988327,16.028278 -5.9916801,-0.01109 9.284e-4,-0.499305 9.286e-4,-0.499306 -0.4993069,-9.3e-4 -0.4993064,-9.26e-4 9.285e-4,-0.499307 9.285e-4,-0.499306 -0.49930685,-9.29e-4 -0.49930663,-9.27e-4 0.01107984,-5.9916817 0.01107983,-5.9916804 0.4993068,9.269e-4 0.49930651,9.27e-4 9.284e-4,-0.4993062 9.284e-4,-0.499308 0.4993068,9.286e-4 0.4993065,9.27e-4 9.286e-4,-0.49930791 9.284e-4,-0.49930629 5.9916799,0.01109091 5.9916802,0.01109092 -9.23e-4,0.49930629 -9.2e-4,0.49930628 0.499307,9.286e-4 0.499305,9.271e-4 -9.21e-4,0.4993062 -9.21e-4,0.4993064 0.499305,9.286e-4 0.499308,9.27e-4 -0.01108,5.9916821 -0.01108,5.9916806 -0.499307,-9.27e-4 -0.499308,-9.28e-4 -9.2e-4,0.499307 -9.22e-4,0.499308 -0.499306,-9.27e-4 -0.499307,-9.29e-4 -9.23e-4,0.499308 -9.22e-4,0.499307 z m 0.00185,-0.998615 5.9916783,0.01109 9.21e-4,-0.499306 9.23e-4,-0.499306 0.499307,9.27e-4 0.499306,9.26e-4 0.01108,-5.9916812 0.01108,-5.9916805 -0.499308,-9.326e-4 -0.499307,-9.27e-4 9.22e-4,-0.4993063 9.21e-4,-0.4993063 -5.9916744,-0.011088 -5.9916803,-0.011091 -9.286e-4,0.4993063 -9.284e-4,0.4993063 -0.4993065,-9.269e-4 -0.4993066,-9.271e-4 -0.01108,5.9916822 -0.01108,5.9916821 0.4993065,9.27e-4 0.4993069,9.27e-4 -9.286e-4,0.499307 -9.284e-4,0.499308 z m -2.4928394,-2.001843 -1.4979201,-0.0029 9.285e-4,-0.499308 9.285e-4,-0.499306 -0.4993067,-9.26e-4 -0.4993068,-9.28e-4 0.00185,-0.998614 0.00185,-0.998615 0.4993064,9.23e-4 0.4993069,9.2e-4 9.284e-4,-0.4993062 9.285e-4,-0.4993063 0.4993064,9.205e-4 0.4993069,9.203e-4 9.285e-4,-0.499308 9.284e-4,-0.4993062 1.9972268,0.00364 1.9972266,0.00364 0.00554,-2.9958411 0.00554,-2.9958394 0.4993068,9.27e-4 0.4993057,9.269e-4 -0.0083,4.4937617 -0.0083,4.4937608 -0.4993065,-9.2e-4 -0.4993064,-9.2e-4 -9.286e-4,0.499306 -9.284e-4,0.499306 -0.9986136,-0.0018 -0.9986131,-0.0018 -9.286e-4,0.499307 -9.284e-4,0.499307 z";

break;
case "dotted-quarter":
return "M 8,16 H 2 V 15.5 15 H 1.5 1 V 14.5 14 H 0.5 0 V 8 2 H 0.5 1 V 1.5 1 H 1.5 2 V 0.5 0 h 6 6 V 0.5 1 H 14.5 15 V 1.5 2 h 0.5 0.5 v 6 6 H 15.5 15 V 14.5 15 H 14.5 14 v 0.5 0.5 z m 0,-1 h 6 V 14.5 14 H 14.5 15 V 8 2 H 14.5 14 V 1.5 1 H 8 2 V 1.5 2 H 1.5 1 v 6 6 H 1.5 2 V 14.5 15 Z M 5.5,13 H 4 V 12.5 12 H 3.5 3 V 11 10 H 3.5 4 V 9.5 9 H 4.5 5 V 8.5 8 H 7 9 V 5 2 H 9.5 10 V 6.5 11 H 9.5 9 V 11.5 12 H 8 7 V 12.5 13 Z M 12,11.777778 H 11.555555 V 11.666667 11.555556 H 11.388889 11.222222 V 11.277778 11 H 11 10.777778 V 10.611111 10.222222 H 10.888889 11 V 10.055556 9.888889 h 0.111111 0.111111 V 9.666667 9.444444 h 0.166667 0.166666 V 9.333333 9.222222 h 0.388889 0.388889 v 0.166667 0.166667 h 0.222223 0.222222 v 0.166666 0.166667 h 0.166666 0.166667 v 0.166667 0.166666 h 0.111111 0.111111 v 0.333334 0.333333 H 13.166667 13 v 0.119048 0.119047 l -0.15873,0.15873 -0.15873,0.15873 h -0.119048 -0.119048 v 0.166667 0.166667 z";

break;
case 0.5:
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13070)].join('')));

}
})()], null)], null)], null);
});
;})(mario_run,selected))
});
mecca.components.notation.staff_lines = (function mecca$components$notation$staff_lines(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_lines,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$components$notation$staff_lines_$_iter__13072(s__13073){
return (new cljs.core.LazySeq(null,(function (){
var s__13073__$1 = s__13073;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13073__$1);
if(temp__5457__auto__){
var s__13073__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13073__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13073__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13075 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13074 = (0);
while(true){
if((i__13074 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13074);
cljs.core.chunk_append(b__13075,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.06:0.15),2.25,y,(63),(((((y > (7))) && (cljs.core.even_QMARK_(y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)));

var G__13076 = (i__13074 + (1));
i__13074 = G__13076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13075),mecca$components$notation$staff_lines_$_iter__13072(cljs.core.chunk_rest(s__13073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13075),null);
}
} else {
var y = cljs.core.first(s__13073__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.06:0.15),2.25,y,(63),(((((y > (7))) && (cljs.core.even_QMARK_(y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)),mecca$components$notation$staff_lines_$_iter__13072(cljs.core.rest(s__13073__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((34)));
})())], null);
});
