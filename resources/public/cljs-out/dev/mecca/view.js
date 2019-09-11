// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.music');
goog.require('mecca.subs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('mecca.music.melody');
goog.require('mecca.music.scale');
goog.require('mecca.components.castle');
goog.require('mecca.components.key');
goog.require('mecca.mario');
mecca.view.brace = (function mecca$view$brace(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate (0.7,7.825) scale(0.6, 0.91)",cljs.core.cst$kw$d,"M1.731 28.982H1.576v-.084-.084h-.113-.113v-.113-.113h-.113-.113v-.225-.225h-.113-.113v-.225-.225h-.113-.113v-.225-.225H.562.45V26.787 26.337H.338.225v-1.914-1.914h.113.113v-.562-.562h.113.113v-.675-.675h.113.113v-.788-.788h.113.113v-.675-.675h-.113-.113v-.562-.562h-.113-.113v-.338-.338h-.113-.113v-.113-.113H.338.225v-.225-.225H.113 0v-.225-.225h.113.113v-.113-.113h.113.113v-.225-.225h.113.113v-.225-.225h.113.113v-.562-.562h.113.113V11.255 10.58H1.013.901V9.792 9.004H.788.675V8.329 7.654H.562.45V7.09 6.528H.338.225V4.614 2.702h.113.113V2.251 1.801h.113.113v-.225-.225h.113.113v-.225-.225h.113.113v-.225-.225h.113.113V.338.225h.113.113V.113 0H1.731 1.885V.113.225H1.843 1.801v.113.113h-.113-.113v.225.225h-.113-.113v.113.113h-.113-.113v.338.338h-.113-.113v1.801 1.801h.113.113v.675.675h.113.113v.562.562h.113.113v2.026 2.026h-.113-.113v.45.45h-.113-.113v.225.225h-.113-.113v.225.225h-.113-.113v.225.225h-.113-.113v.113.113H.338.225v.113.113h.113.113v.113.113h.113.113v.225.225h.113.113v.225.225h.113.113v.225.225h.113.113v.338.338h.113.113v2.026 2.026h-.113-.113v.675.675h-.113-.113v.675.675h-.113-.113v1.801 1.801h.113.113v.225.225h.113.113v.225.225h.113.113v.225.225h.154.154v.197.197z"], null)], null);
});
mecca.view.bar_line = (function mecca$view$bar_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"translate(3.825,-0.09)",cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y1,(8),cljs.core.cst$kw$y2,34.19,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null);
});
mecca.view.bar_number = (function mecca$view$bar_number(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.3 + ((24) * (n - (1))))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(6.3),")"].join(''),cljs.core.cst$kw$d,(function (){var G__13220 = n;
switch (G__13220) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13220)].join('')));

}
})()], null)], null);
});
mecca.view.beat_line = (function mecca$view$beat_line(x,n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(14,0)"], null),(((cljs.core.mod(n,(4)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.bar_number,((x / (4)) + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,(x * (6)),cljs.core.cst$kw$x2,(x * (6)),cljs.core.cst$kw$y1,(6),cljs.core.cst$kw$y2,(36),cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,(x * (6)),cljs.core.cst$kw$x2,(x * (6)),cljs.core.cst$kw$y1,(6),cljs.core.cst$kw$y2,(36),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.075,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null))], null);
});
mecca.view.ending_bar = (function mecca$view$ending_bar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(1.2,0.06)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,22.25,cljs.core.cst$kw$y,(3),cljs.core.cst$kw$width,0.24,cljs.core.cst$kw$height,11.25,cljs.core.cst$kw$ry,(0),cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,22.125,cljs.core.cst$kw$x2,22.125,cljs.core.cst$kw$y1,(3),cljs.core.cst$kw$y2,14.25,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.1], null)], null)], null);
});
mecca.view.ending_bar_repeat = (function mecca$view$ending_bar_repeat(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,62.5,cljs.core.cst$kw$y,(8),cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,(28),cljs.core.cst$kw$ry,(0),cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,61.8,cljs.core.cst$kw$x2,61.8,cljs.core.cst$kw$y1,(8),cljs.core.cst$kw$y2,(36),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(11),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(13),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(23),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(25),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(33),cljs.core.cst$kw$r,0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,60.8,cljs.core.cst$kw$cy,(35),cljs.core.cst$kw$r,0.4], null)], null)], null);
});
mecca.view.eighth_note_flag = (function mecca$view$eighth_note_flag(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?"0.1)":"0.1,-0.1)")),"translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?(24):(2))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?(-61):(-57))),")"].join(''),cljs.core.cst$kw$d,"M1-8v15h-1v-15h1zM1-8c0 12 12 19 12 31 0 4-1 8-2 12 0 0-1 1-1 1-1 0-2-1-1-2 2-4 2-7 2-11 0-6-6-12-10-16v-15z"], null)], null);
});
mecca.view.beam = (function mecca$view$beam(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$points,"2981,475 3499,424 3499,484 2981,535"], null)], null);
});
mecca.view.kill_note = (function mecca$view$kill_note(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$d,"M 0.75,0.3 L 1.75,-0.7 M 1.75,0.3 L 0.75,-0.7",cljs.core.cst$kw$stroke,"red",cljs.core.cst$kw$stroke_DASH_linecap,"round",cljs.core.cst$kw$stroke_DASH_width,0.35], null)], null);
});
mecca.view.drum_hit = (function mecca$view$drum_hit(color,p__13222){
var vec__13223 = p__13222;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13223,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13223,(1),null);
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_,vec__13223,x,y){
return (function (color__$1,p__13226){
var vec__13227 = p__13226;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13227,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13227,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__13227,x__$1,y__$1,mouseover_QMARK_,vec__13223,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(vec__13227,x__$1,y__$1,mouseover_QMARK_,vec__13223,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__13227,x__$1,y__$1,mouseover_QMARK_,vec__13223,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(vec__13227,x__$1,y__$1,mouseover_QMARK_,vec__13223,x,y))
,cljs.core.cst$kw$on_DASH_click,((function (vec__13227,x__$1,y__$1,mouseover_QMARK_,vec__13223,x,y){
return (function (){
var G__13230 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_note,x__$1,y__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13230) : re_frame.core.dispatch.call(null,G__13230));
});})(vec__13227,x__$1,y__$1,mouseover_QMARK_,vec__13223,x,y))
,cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((12.78 + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",cljs.core.cst$kw$fill,color__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((31) < y__$1))?2.2:(0)),cljs.core.cst$kw$y,((((31) < y__$1))?-6.3:0.8),cljs.core.cst$kw$height,5.5,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,color__$1], null)], null),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__13223,x,y))
});
mecca.view.ledger_line = (function mecca$view$ledger_line(p__13231){
var vec__13232 = p__13231;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13232,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13232,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform,["scale (1,1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((8.875 + (6.9 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((25.0375 - y)),") "].join(''),cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null)], null);
});
mecca.view.note = (function mecca$view$note(value,p__13235){
var vec__13236 = p__13235;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13236,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13236,(1),null);
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_,vec__13236,x,y){
return (function (value__$1,p__13239){
var vec__13240 = p__13239;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13240,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13240,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__13240,x__$1,y__$1,mouseover_QMARK_,vec__13236,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(vec__13240,x__$1,y__$1,mouseover_QMARK_,vec__13236,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__13240,x__$1,y__$1,mouseover_QMARK_,vec__13236,x,y){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(vec__13240,x__$1,y__$1,mouseover_QMARK_,vec__13236,x,y))
,cljs.core.cst$kw$on_DASH_click,((function (vec__13240,x__$1,y__$1,mouseover_QMARK_,vec__13236,x,y){
return (function (){
var G__13243 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_note,x__$1,y__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13243) : re_frame.core.dispatch.call(null,G__13243));
});})(vec__13240,x__$1,y__$1,mouseover_QMARK_,vec__13236,x,y))
,cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((13) + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?2.15:0.02),cljs.core.cst$kw$y,((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?-7.1:(0)),cljs.core.cst$kw$height,6.794,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"black"], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(17))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y__$1,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform,"scale (1.75,1.75)",cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,-0.334,cljs.core.cst$kw$y,-0.1], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,0.5))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.eighth_note_flag,x__$1,y__$1], null):null)),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__13236,x,y))
});
mecca.view.drum_clef = (function mecca$view$drum_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transform,"scale(0.75, 0.5) translate(5.5,65.334)",cljs.core.cst$kw$d,"M2.5-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1zM.8-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1z",cljs.core.cst$kw$fill,"black"], null)], null);
});
mecca.view.bass_clef = (function mecca$view$bass_clef(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(2.5,20)",cljs.core.cst$kw$d,"M.187 6.323H0V6.244 6.165H.094.187V6.072 5.978H.467.747v-.094-.094h.187.187v-.094-.094h.094.094v-.094-.094h.094.094v-.094-.094h.187.187v-.094-.094h.094.094v-.094-.094h.094.094v-.094-.094h.094.094v-.187-.187h.094.094v-.094-.094h.094.094v-.187-.187h.094.094V3.456 3.176h.094.094V2.428 1.681H3.083 2.989V1.308.934H2.896 2.802V.841.747H2.709 2.616V.654.56H2.523 2.428V.467.373H1.868 1.308V.467.56H1.121.934V.654.747H.841.747V.934 1.121H1.215 1.681v.094.094h.094.094v.56.56h-.094-.094v.094.094H1.121.56V2.523 2.428H.467.373V2.241 2.055H.28.187V1.681 1.308H.28.373V1.028.747H.467.56V.654.56H.654.747V.467.373H.841.934V.28.187H1.121 1.308V.094 0H1.961 2.616V.094.187h.28.28v.094.094h.094.094v.094.094h.094.094v.094.094h.094.094v.094.094h.094.094v.187.187h.094.094v.934.934h-.094-.094v.187.187h-.094-.094v.187.187h-.094-.094v.187.187h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.187-.187v.094.094h-.094-.094v.094.094h-.187-.187v.094.094H1.495 1.308v.094.094H1.121.934v.094.094H.654.373v.079.079z\n                 M4.844 1.721H4.588V1.636 1.551H4.503 4.418V1.295 1.038h.086.086V.953.868h.256.256v.086.086h.086.086V1.295 1.551h-.086-.086v.086.086z\n                 M4.801 3.289H4.548V3.205 3.12H4.463 4.378V2.867 2.613h.085.085V2.529 2.445h.252.252v.085.085h.085.085V2.867 3.12h-.085-.085v.085.085z"], null)], null);
});
});
mecca.view.treble_clef = (function mecca$view$treble_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(2.65,6.3)",cljs.core.cst$kw$d,"M2.214 12.37H1.55v-.097-.097h-.221-.221v-.111-.111h-.111-.111v-.553-.553h.111.111v-.111-.111h.111.111v-.111-.111h.332.332v.111.111h.111.111v.111.111h.111.111v.332.332h-.111-.111v.111.111h-.111-.111v.111.111h.443.443v-.111-.111h.111.111v-.996-.996h-.111-.111v-.111-.111H2.214 1.55v-.111-.111h-.221-.221v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.111-.111H.332.221v-.221-.221H.111 0v-.996-.996h.111.111v-.221-.221h.111.111v-.221-.221h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111V3.653 3.321H1.66 1.55V2.324 1.328h.111.111V.996.664h.111.111V.443.221h.111.111V.111 0h.332.332v.111.111h.111.111v.221.221h.111.111v.332.332h.111.111v.664.664h-.111-.111v.443.443h-.111-.111v.221.221h-.111-.111v.221.221h-.111-.111v.111.111h-.111-.111v.553.553h.111.111v.111.111h.443.443v.111.111h.111.111v.111.111h.111.111v.111.111h.111.111v.221.221h.069.069v.664.664h-.069-.069v.221.221h-.111-.111v.111.111h-.111-.111v.111.111h-.221-.221v.443.443h.111.111v.775.775h-.111-.111v.221.221h-.221-.221v.097.097zM1.992 9.077h.664v-.553-.553h-.111-.111v-.553-.553h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.332.332h.111.111v.221.221h.221.221v.111.111H2.103 1.771v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.221-.221h-.111-.111v-.332-.332h.111.111v-.221-.221h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h-.111-.111v-.332-.332h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.221.221h-.111-.111v.111.111h-.111-.111v.332.332h-.111-.111v.332.332h.111.111v.332.332h.111.111v.111.111h.111.111v.111.111h.111.111v.111.111zm1.328-.221h.221v-.221-.221h.111.111v-.443-.443h-.111-.111v-.221-.221h-.221-.221v-.111-.111h-.111-.111v.553.553h.111.111v.443.443zM2.214 3.321h.221v-.221-.221h.111.111v-.111-.111h.111.111v-.221-.221h.111.111V1.66 1.107H2.767 2.435v.221.221h-.111-.111v.221.221h-.111-.111v.664.664z"], null)], null);
});
mecca.view.sharp = (function mecca$view$sharp(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + y)),")"].join(''),cljs.core.cst$kw$d,"M.18.04V-.91l.4-.11v.95zM.98-.19.7-.11V-1.05l.28-.08v-.39l-.28.08V-2.42h-.11v1l-.4.12V-2.24h-.11v.98l-.28.08v.39l.28-.08v.95l-.28.08V.55L.08.47v.96h.11V.43l.4-.11v.94h.11V.29L.98.21Z"], null)], null);
});
mecca.view.flat = (function mecca$view$flat(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"m .94 1.62s-.06-1.2-.06-2c0-.32.02-.56.04-.64.08-.24.6-.68.88-.84.18-.1.36-.14.52-.14.2 0 .38.08.5.22.2.22.32.56.32.94 0 .36-.1.78-.34 1.2-.26.48-.84 1.12-1.44 1.5-.08.04-.14.06-.2.06-.18 0-.22-.2-.22-.3m-.7 1.78c.06.08.12.1.18.1s.12-.04.12-.04c.6-.34 1.08-.88 1.58-1.22 1.78-1.24 2.4-2.46 2.4-3.38 0-1.14-.88-1.86-1.8-1.92-.14 0-.28.02-.42.06-.22.06-.46.14-.68.28-.12.1-.34.28-.44.28-.04 0-.06 0-.1-.02-.14-.06-.22-.2-.22-.34.02-.44.14-5.24.14-5.64 0-.22-.18-.34-.38-.34-.28 0-.6.2-.62.56 0 0 .08 11.42.24 11.62"], null)], null);
});
mecca.view.c_sharp_minor = (function mecca$view$c_sharp_minor(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.sharp,6.6,(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.sharp,7.4,(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.sharp,8.2,(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.sharp,(9),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.sharp,9.8,(13)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.sharp,10.6,(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.sharp,11.4,(12)], null)], null);
});
mecca.view.note_button = (function mecca$view$note_button(value,x){
var mario_run = (function (){var G__13244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13244) : re_frame.core.subscribe.call(null,G__13244));
})();
var selected = (function (){var G__13245 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13245) : re_frame.core.subscribe.call(null,G__13245));
})();
return ((function (mario_run,selected){
return (function (value__$1,x__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((((((38) < cljs.core.deref(mario_run))) && ((cljs.core.deref(mario_run) < (42))))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,"quarter-rest"))))))?-2.5:(0))),")"].join(''),cljs.core.cst$kw$on_DASH_click,((function (mario_run,selected){
return (function (){
var G__13246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select_DASH_note_DASH_value,value__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13246) : re_frame.core.dispatch.call(null,G__13246));
});})(mario_run,selected))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,((((((38) < cljs.core.deref(mario_run))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected)),"-rest"].join(''))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,cljs.core.deref(selected)))))))?"#e6b08e":"#c0c0c0"),cljs.core.cst$kw$d,"M 2,14 H 1 V 8 2 H 1.5 2 V 1.5 1 h 6 6 V 2 3 H 13.5 13 V 2.5 2 H 8 3 V 2.5 3 H 2.5 2 v 5 5 H 2.5 3 v 0.5 0.5 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,((((((38) < cljs.core.deref(mario_run))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,cljs.core.deref(selected)))))?"#b78160":"#707070"),cljs.core.cst$kw$d,"m8 15h-6v-.5-.5h5.5 5.5v-.5-.5h.5.5V7.5 1.999h.5.5V8 14h-.5-.5v.5.5zM4.5 12h-.5v-.5-.5h.5.5v.5.5zm2-2h-.5v-.5-.5h.5.5v.5.5z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,((((((38) < cljs.core.deref(mario_run))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,cljs.core.deref(selected)))))?"#fed5bc":"#e8f0f8"),cljs.core.cst$kw$d,"M 8,14 H 3 C 3.1867279,13.094942 2.825439,13.334551 2.5,13 H 2 V 8 3 H 2.5 3 V 2.5 2 h 3 c 2.6672423,0.00718 4.526189,0 7,0 V 2.5 3 h 0.5 0.5 v 5 5 H 13.5 13 v 0.5 0.5 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,(function (){var G__13247 = value__$1;
switch (G__13247) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13247)].join('')));

}
})()], null)], null)], null);
});
;})(mario_run,selected))
});
mecca.view.scale_picker = (function mecca$view$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13249) : re_frame.core.subscribe.call(null,G__13249));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_scale,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13250) : re_frame.core.dispatch.call(null,G__13250));
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$view$scale_picker_$_iter__13251(s__13252){
return (new cljs.core.LazySeq(null,(function (){
var s__13252__$1 = s__13252;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13252__$1);
if(temp__5457__auto__){
var s__13252__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13252__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13252__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13254 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13253 = (0);
while(true){
if((i__13253 < size__4323__auto__)){
var scale = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13253);
cljs.core.chunk_append(b__13254,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,scale], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scale], null)));

var G__13255 = (i__13253 + (1));
i__13253 = G__13255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13254),mecca$view$scale_picker_$_iter__13251(cljs.core.chunk_rest(s__13252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13254),null);
}
} else {
var scale = cljs.core.first(s__13252__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,scale], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scale], null)),mecca$view$scale_picker_$_iter__13251(cljs.core.rest(s__13252__$2)));
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
mecca.view.key_picker = (function mecca$view$key_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Key: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13256) : re_frame.core.subscribe.call(null,G__13256));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_key,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13257) : re_frame.core.dispatch.call(null,G__13257));
})], null),(function (){var iter__4324__auto__ = (function mecca$view$key_picker_$_iter__13258(s__13259){
return (new cljs.core.LazySeq(null,(function (){
var s__13259__$1 = s__13259;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13259__$1);
if(temp__5457__auto__){
var s__13259__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13259__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13259__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13261 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13260 = (0);
while(true){
if((i__13260 < size__4323__auto__)){
var note = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13260);
cljs.core.chunk_append(b__13261,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,note], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,note], null)));

var G__13262 = (i__13260 + (1));
i__13260 = G__13262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13261),mecca$view$key_picker_$_iter__13258(cljs.core.chunk_rest(s__13259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13261),null);
}
} else {
var note = cljs.core.first(s__13259__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,note], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,note], null)),mecca$view$key_picker_$_iter__13258(cljs.core.rest(s__13259__$2)));
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
mecca.view.octave_input = (function mecca$view$octave_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Octave: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13263) : re_frame.core.subscribe.call(null,G__13263));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_octave,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13264) : re_frame.core.dispatch.call(null,G__13264));
})], null)], null)], null);
});
mecca.view.tempo_input = (function mecca$view$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"8%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13265) : re_frame.core.subscribe.call(null,G__13265));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13266) : re_frame.core.dispatch.call(null,G__13266));
})], null)], null)], null);
});
mecca.view.scroll_cue_left = (function mecca$view$scroll_cue_left(x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$fade,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$x1,x,cljs.core.cst$kw$y1,y,cljs.core.cst$kw$x2,(x - (1)),cljs.core.cst$kw$y2,(y + (1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$x1,(x - (1)),cljs.core.cst$kw$y1,(y + (1)),cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y2,((2) + y)], null)], null)], null);
});
mecca.view.scroll_cue_right = (function mecca$view$scroll_cue_right(x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$fade,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$x1,x,cljs.core.cst$kw$y1,y,cljs.core.cst$kw$x2,(x + (1)),cljs.core.cst$kw$y2,(y + (1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$x1,(x + (1)),cljs.core.cst$kw$y1,(y + (1)),cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y2,((2) + y)], null)], null)], null);
});
mecca.view.advance_editor = (function mecca$view$advance_editor(){
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(5),((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(mouseover_QMARK_))
,(6),((function (mouseover_QMARK_){
return (function (){
var G__13267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13267) : re_frame.core.dispatch.call(null,G__13267));
});})(mouseover_QMARK_))
,((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(mouseover_QMARK_))
,(58),"all","hidden",(32)])], null),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scroll_cue_right,61.5,(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scroll_cue_right,61.5,(14)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scroll_cue_right,61.5,(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scroll_cue_right,61.5,(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scroll_cue_right,61.5,(32)], null)], null):null)], null);
});
;})(mouseover_QMARK_))
});
mecca.view.retract_editor = (function mecca$view$retract_editor(x){
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(5),((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(mouseover_QMARK_))
,(6),((function (mouseover_QMARK_){
return (function (){
var G__13268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$retract_DASH_editor], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13268) : re_frame.core.dispatch.call(null,G__13268));
});})(mouseover_QMARK_))
,((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(mouseover_QMARK_))
,x,"all","hidden",(32)])], null),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scroll_cue_left,((3) + x),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scroll_cue_left,((3) + x),(14)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scroll_cue_left,((3) + x),(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scroll_cue_left,((3) + x),(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scroll_cue_left,((3) + x),(32)], null)], null):null)], null);
});
;})(mouseover_QMARK_))
});
mecca.view.staff = (function mecca$view$staff(){
var focused = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var lead = (function (){var G__13269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13269) : re_frame.core.subscribe.call(null,G__13269));
})();
var bassline = (function (){var G__13270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13270) : re_frame.core.subscribe.call(null,G__13270));
})();
var drums = (function (){var G__13271 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13271) : re_frame.core.subscribe.call(null,G__13271));
})();
var current_position = (function (){var G__13272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13272) : re_frame.core.subscribe.call(null,G__13272));
})();
var editor_beat_start = (function (){var G__13273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13273) : re_frame.core.subscribe.call(null,G__13273));
})();
var selected_note_value = (function (){var G__13274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13274) : re_frame.core.subscribe.call(null,G__13274));
})();
return ((function (focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(0,9) scale(1)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_lines,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function mecca$view$staff_$_iter__13275(s__13276){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (){
var s__13276__$1 = s__13276;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13276__$1);
if(temp__5457__auto__){
var s__13276__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13276__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13276__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13278 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13277 = (0);
while(true){
if((i__13277 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13277);
cljs.core.chunk_append(b__13278,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.06:0.15),2.25,y,(63),(((((y > (7))) && (cljs.core.even_QMARK_(y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)));

var G__13311 = (i__13277 + (1));
i__13277 = G__13311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13278),mecca$view$staff_$_iter__13275(cljs.core.chunk_rest(s__13276__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13278),null);
}
} else {
var y = cljs.core.first(s__13276__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke_DASH_dasharray,cljs.core.cst$kw$stroke,cljs.core.cst$kw$stroke_DASH_linejoin,cljs.core.cst$kw$y1,cljs.core.cst$kw$stroke_DASH_linecap,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$x2,cljs.core.cst$kw$visibility],[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(30))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(18)))))?0.06:0.15),2.25,y,(63),(((((y > (7))) && (cljs.core.even_QMARK_(y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)),mecca$view$staff_$_iter__13275(cljs.core.rest(s__13276__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,null,null));
});})(focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((36)));
})())], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(editor_beat_start)))?new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.drum_clef], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.retract_editor,(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.bar_line,31.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(7)], null)], null):new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(-1),cljs.core.deref(editor_beat_start)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(0),(cljs.core.deref(editor_beat_start) + (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(1),((2) + cljs.core.deref(editor_beat_start))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(2),((3) + cljs.core.deref(editor_beat_start))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(3),((4) + cljs.core.deref(editor_beat_start))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.bar_line,31.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(4),((5) + cljs.core.deref(editor_beat_start))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(5),((6) + cljs.core.deref(editor_beat_start))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(6),((7) + cljs.core.deref(editor_beat_start))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.beat_line,(7),((8) + cljs.core.deref(editor_beat_start))], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.advance_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.bar_line,(59)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function mecca$view$staff_$_iter__13279(s__13280){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (){
var s__13280__$1 = s__13280;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13280__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13280__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function mecca$view$staff_$_iter__13279_$_iter__13281(s__13282){
return (new cljs.core.LazySeq(null,((function (s__13280__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (){
var s__13282__$1 = s__13282;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__13282__$1);
if(temp__5457__auto____$1){
var s__13282__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13282__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13282__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13284 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13283 = (0);
while(true){
if((i__13283 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13283);
cljs.core.chunk_append(b__13284,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(12.5,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),((function (i__13283,s__13280__$1,y,c__4322__auto__,size__4323__auto__,b__13284,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__13283,s__13280__$1,y,c__4322__auto__,size__4323__auto__,b__13284,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,"gray",(3),((function (i__13283,s__13280__$1,y,c__4322__auto__,size__4323__auto__,b__13284,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (){
var G__13285 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13285) : re_frame.core.dispatch.call(null,G__13285));
});})(i__13283,s__13280__$1,y,c__4322__auto__,size__4323__auto__,b__13284,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,((function (i__13283,s__13280__$1,y,c__4322__auto__,size__4323__auto__,b__13284,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (e){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__13283,s__13280__$1,y,c__4322__auto__,size__4323__auto__,b__13284,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,((6) * x),"all","hidden",(1)])], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?((((30) < y))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.35 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),") "].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((31) < y))?2.2:(0)),cljs.core.cst$kw$y,((((31) < y))?-6.3:0.8),cljs.core.cst$kw$height,5.5,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),")"].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?2.15:0.02),cljs.core.cst$kw$y,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?-7.1:(0)),cljs.core.cst$kw$height,6.794,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(17))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"scale (1.75)",cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,-0.334,cljs.core.cst$kw$y,-0.1,cljs.core.cst$kw$fill,"gray"], null)], null):null)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13312 = (i__13283 + (1));
i__13283 = G__13312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13284),mecca$view$staff_$_iter__13279_$_iter__13281(cljs.core.chunk_rest(s__13282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13284),null);
}
} else {
var y = cljs.core.first(s__13282__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"translate(12.5,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + y),((function (s__13280__$1,y,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(s__13280__$1,y,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,"gray",(3),((function (s__13280__$1,y,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (){
var G__13286 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,x,y], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13286) : re_frame.core.dispatch.call(null,G__13286));
});})(s__13280__$1,y,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,((function (s__13280__$1,y,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (e){
return cljs.core.reset_BANG_(focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(s__13280__$1,y,s__13282__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,((6) * x),"all","hidden",(1)])], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?((((30) < y))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.35 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),") "].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((31) < y))?2.2:(0)),cljs.core.cst$kw$y,((((31) < y))?-6.3:0.8),cljs.core.cst$kw$height,5.5,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),")"].join(''),cljs.core.cst$kw$pointer_DASH_events,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$d,"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",cljs.core.cst$kw$fill,"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?2.15:0.02),cljs.core.cst$kw$y,((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?-7.1:(0)),cljs.core.cst$kw$height,6.794,cljs.core.cst$kw$width,0.25,cljs.core.cst$kw$fill,"gray"], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(3))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(17))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transform,"scale (1.75)",cljs.core.cst$kw$height,0.2,cljs.core.cst$kw$width,2.085,cljs.core.cst$kw$ry,0.1,cljs.core.cst$kw$x,-0.334,cljs.core.cst$kw$y,-0.1,cljs.core.cst$kw$fill,"gray"], null)], null):null)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$view$staff_$_iter__13279_$_iter__13281(cljs.core.rest(s__13282__$2)));
}
} else {
return null;
}
break;
}
});})(s__13280__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,null,null));
});})(s__13280__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.conj.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1((34)))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$staff_$_iter__13279(cljs.core.rest(s__13280__$1)));
} else {
var G__13313 = cljs.core.rest(s__13280__$1);
s__13280__$1 = G__13313;
continue;
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,null,null));
});})(focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function mecca$view$staff_$_iter__13287(s__13288){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (){
var s__13288__$1 = s__13288;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13288__$1);
if(temp__5457__auto__){
var s__13288__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13288__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13288__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13290 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13289 = (0);
while(true){
if((i__13289 < size__4323__auto__)){
var map__13291 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13289);
var map__13291__$1 = ((((!((map__13291 == null)))?(((((map__13291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13291):map__13291);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13291__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13291__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13291__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13290,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__13314 = (i__13289 + (1));
i__13289 = G__13314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13290),mecca$view$staff_$_iter__13287(cljs.core.chunk_rest(s__13288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13290),null);
}
} else {
var map__13293 = cljs.core.first(s__13288__$2);
var map__13293__$1 = ((((!((map__13293 == null)))?(((((map__13293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13293):map__13293);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13293__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13293__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13293__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$staff_$_iter__13287(cljs.core.rest(s__13288__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,null,null));
});})(focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
;
return iter__4324__auto__(cljs.core.deref(lead));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function mecca$view$staff_$_iter__13295(s__13296){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (){
var s__13296__$1 = s__13296;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13296__$1);
if(temp__5457__auto__){
var s__13296__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13296__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13296__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13298 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13297 = (0);
while(true){
if((i__13297 < size__4323__auto__)){
var map__13299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13297);
var map__13299__$1 = ((((!((map__13299 == null)))?(((((map__13299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13299):map__13299);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13299__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13299__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13299__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13298,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__13315 = (i__13297 + (1));
i__13297 = G__13315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13298),mecca$view$staff_$_iter__13295(cljs.core.chunk_rest(s__13296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13298),null);
}
} else {
var map__13301 = cljs.core.first(s__13296__$2);
var map__13301__$1 = ((((!((map__13301 == null)))?(((((map__13301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13301):map__13301);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13301__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13301__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13301__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$staff_$_iter__13295(cljs.core.rest(s__13296__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,null,null));
});})(focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
;
return iter__4324__auto__(cljs.core.deref(bassline));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function mecca$view$staff_$_iter__13303(s__13304){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value){
return (function (){
var s__13304__$1 = s__13304;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13304__$1);
if(temp__5457__auto__){
var s__13304__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13304__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__13304__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__13306 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__13305 = (0);
while(true){
if((i__13305 < size__4323__auto__)){
var map__13307 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__13305);
var map__13307__$1 = ((((!((map__13307 == null)))?(((((map__13307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13307):map__13307);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13307__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13307__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13307__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__13306,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)));

var G__13316 = (i__13305 + (1));
i__13305 = G__13316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13306),mecca$view$staff_$_iter__13303(cljs.core.chunk_rest(s__13304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13306),null);
}
} else {
var map__13309 = cljs.core.first(s__13304__$2);
var map__13309__$1 = ((((!((map__13309 == null)))?(((((map__13309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13309):map__13309);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13309__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13309__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13309__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.drum_hit,duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,duration,pitch], null)], null)),mecca$view$staff_$_iter__13303(cljs.core.rest(s__13304__$2)));
}
} else {
return null;
}
break;
}
});})(focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
,null,null));
});})(focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
;
return iter__4324__auto__(cljs.core.deref(drums));
})())], null);
});
;})(focused,lead,bassline,drums,current_position,editor_beat_start,selected_note_value))
});
mecca.view.tempo_slider = (function mecca$view$tempo_slider(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M37.867 10.655 37.43 10.643 37.001 10.186 36.572 9.728V9.332 8.935L37.04 8.468 37.507 8H37.906 38.304L38.772 8.468 39.239 8.935V9.333 9.732L38.772 10.199 38.304 10.667 37.867 10.655Z\n;M37.873 10.278 38.315 10.286 38.587 10.014 38.859 9.742V9.334 8.925L38.587 8.653 38.314 8.381H37.906 37.498L37.226 8.653 36.954 8.925V9.328 9.73L37.192 10.001 37.43 10.271 37.872 10.279Z\nM37.907 9.524H37.335V9.333 9.143H37.906 38.478V9.333 9.524Z\nM59.582 10.655 59.145 10.643 58.716 10.186 58.288 9.728V9.332 8.935L58.755 8.468 59.223 8H59.621 60.019L60.487 8.468 60.954 8.935V9.333 9.732L60.487 10.199 60.019 10.667 59.582 10.655Z\nM59.588 10.278 60.03 10.286 60.302 10.014 60.575 9.742V9.334 8.925L60.302 8.653 60.03 8.381H59.621 59.213L58.941 8.653 58.669 8.926V9.328 9.731L58.907 10.001 59.145 10.272 59.587 10.279Z\nM59.588 9.898 59.527 9.89 59.278 9.608 59.03 9.327 59.326 9.03 59.622 8.734 59.922 9.033 60.221 9.333 59.935 9.619 59.649 9.904 59.588 9.896Z\nM48.765 9.905H41.145V9.524 9.143H48.764 56.383V9.524 9.905Z"], null)], null);
});
mecca.view.stop_button_label = (function mecca$view$stop_button_label(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M4.572 5.714H3.81V5.524 5.333H4.381 4.953V5.143 4.952H4.381 3.81V4.381 3.81H4.572 5.334V4 4.191H4.762 4.191V4.381 4.571H4.762 5.334V5.143 5.714Z\nM6.667 5.714H6.476V4.952 4.191H6.095 5.714V4 3.81H6.667 7.619V4 4.191H7.238 6.857V4.952 5.714Z\nM8.762 5.714H8V4.762 3.81H8.762 9.524V4.762 5.714Z\nM8.762 5.333H9.143V4.762 4.191H8.762 8.381V4.762 5.333Z\nM10.095 5.714H9.905V4.762 3.81H10.667 11.429V4.381 4.952H10.857 10.286V5.333 5.714Z\nM10.667 4.571H11.048V4.381 4.191H10.667 10.286V4.381 4.571Z"], null)], null);
});
mecca.view.play_button_label = (function mecca$view$play_button_label(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M16.191 5.714H16V4.762 3.81H16.762 17.524V4.381 4.952H16.953 16.381V5.333 5.714Z\nM16.762 4.571H17.143V4.381 4.191H16.762 16.381V4.381 4.571Z\nM18.667 5.714H17.905V4.762 3.81H18.095 18.286V4.571 5.333H18.857 19.429V5.524 5.714Z\nM20 5.714H19.81V5.034 4.354L20.082 4.082 20.354 3.81H20.572 20.789L21.061 4.082 21.334 4.354V5.034 5.714H21.143 20.953V5.333 4.952H20.572 20.191V5.333 5.714Z\nM20.572 4.571H20.953V4.381 4.191H20.572 20.191V4.381 4.571Z\nM22.667 5.714H22.476V5.213 4.711L22.065 4.355 21.653 3.998 21.778 3.873 21.903 3.749 22.285 4.189 22.667 4.63 23.049 4.189 23.431 3.749 23.556 3.873 23.68 3.998 23.269 4.355 22.857 4.711V5.213 5.714Z"], null)], null);
});
mecca.view.loop_button_label = (function mecca$view$loop_button_label(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M28.953 5.714H28.191V4.762 3.81H28.381 28.572V4.571 5.333H29.143 29.715V5.524 5.714Z\nM30.857 5.714H30.095V4.762 3.81H30.857 31.619V4.762 5.714Z\nM30.857 5.333H31.238V4.762 4.191H30.857 30.476V4.762 5.333Z\nM32.762 5.714H32V4.762 3.81H32.762 33.524V4.762 5.714Z\nM32.762 5.333H33.143V4.762 4.191H32.762 32.381V4.762 5.333Z\nM34.095 5.714H33.905V4.762 3.81H34.667 35.429V4.381 4.952H34.857 34.286V5.333 5.714Z\nM34.667 4.571H35.048V4.381 4.191H34.667 34.286V4.381 4.571Z"], null)], null);
});
mecca.view.controls = (function mecca$view$controls(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$d,"M63.5 2V14L62 15.5H2L0.5 14V2L2 0.5H62Z",cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke_DASH_width,0.5,cljs.core.cst$kw$stroke,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$d,"M62 3V13L61 14H3L2 13V3L3 2H61Z",cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke,"black"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key.circle_of_fifths], null)], null);
});
mecca.view.editor = (function mecca$view$editor(){
var current_position = (function (){var G__13317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13317) : re_frame.core.subscribe.call(null,G__13317));
})();
var playing_QMARK_ = (function (){var G__13318 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13318) : re_frame.core.subscribe.call(null,G__13318));
})();
var mario_run = (function (){var G__13319 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13319) : re_frame.core.subscribe.call(null,G__13319));
})();
var mario_jump = (function (){var G__13320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13320) : re_frame.core.subscribe.call(null,G__13320));
})();
var selected_note_value = (function (){var G__13321 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_note_DASH_value], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13321) : re_frame.core.subscribe.call(null,G__13321));
})();
return ((function (current_position,playing_QMARK_,mario_run,mario_jump,selected_note_value){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__13322_13323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13322_13323) : re_frame.core.dispatch.call(null,G__13322_13323));
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 46"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(16),(0),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle.brick_face,(0),(32),(10)], null),(((cljs.core.deref(mario_jump) < (4)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,cljs.core.cst$kw$jump1], null):((((((3) < cljs.core.deref(mario_jump))) && ((cljs.core.deref(mario_jump) < (8)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,cljs.core.cst$kw$jump2], null):((cljs.core.odd_QMARK_(cljs.core.deref(mario_run)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,cljs.core.cst$kw$run1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,cljs.core.cst$kw$run2], null)
))),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_notes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.2) translate(8,0)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"whole",(80)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"dotted-half",(96)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"half",(112)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"dotted-quarter",(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,(1),(144)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"dotted-eighth",(160)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"q-triplets",(176)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,0.5,(192)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"dotted-sixteenth",(208)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"e-triplets",(224)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"sixteenth",(240)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_rests,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.2) translate(8,16)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"whole-rest",(80)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"half-rest",(112)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"quarter-rest",(144)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"eighth-rest",(192)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_button,"sixteenth-rest",(240)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.5,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(31),cljs.core.cst$kw$width,63.5,cljs.core.cst$kw$x,0.25,cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.staff], null)], null);
});
;})(current_position,playing_QMARK_,mario_run,mario_jump,selected_note_value))
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.controls], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.tempo_input], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return mecca.music.play_bassline_BANG_();
})], null),"Play Bassline"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13325) : re_frame.core.subscribe.call(null,G__13325));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Lead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lead], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13326) : re_frame.core.subscribe.call(null,G__13326));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13327 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bassline], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13327) : re_frame.core.subscribe.call(null,G__13327));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Drums: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$drums], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13328) : re_frame.core.subscribe.call(null,G__13328));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13329) : re_frame.core.subscribe.call(null,G__13329));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario jump: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13330) : re_frame.core.subscribe.call(null,G__13330));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13331 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scale], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13331) : re_frame.core.subscribe.call(null,G__13331));
})()))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num())," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13332) : re_frame.core.subscribe.call(null,G__13332));
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$octave], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13333) : re_frame.core.subscribe.call(null,G__13333));
})())),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13334 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13334) : re_frame.core.subscribe.call(null,G__13334));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13335) : re_frame.core.subscribe.call(null,G__13335));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__13336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13336) : re_frame.core.subscribe.call(null,G__13336));
})()))].join('')], null)], null);
});
