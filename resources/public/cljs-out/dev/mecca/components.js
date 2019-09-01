// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.components');
goog.require('cljs.core');
goog.require('mecca.music');
goog.require('mecca.subs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('mecca.music.melody');
goog.require('mecca.music.scale');
goog.require('mecca.mario');
mecca.components.brace = (function mecca$components$brace(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate (0.7,7.825) scale(0.6, 0.91)",new cljs.core.Keyword(null,"d","d",1972142424),"M1.731 28.982H1.576v-.084-.084h-.113-.113v-.113-.113h-.113-.113v-.225-.225h-.113-.113v-.225-.225h-.113-.113v-.225-.225H.562.45V26.787 26.337H.338.225v-1.914-1.914h.113.113v-.562-.562h.113.113v-.675-.675h.113.113v-.788-.788h.113.113v-.675-.675h-.113-.113v-.562-.562h-.113-.113v-.338-.338h-.113-.113v-.113-.113H.338.225v-.225-.225H.113 0v-.225-.225h.113.113v-.113-.113h.113.113v-.225-.225h.113.113v-.225-.225h.113.113v-.562-.562h.113.113V11.255 10.58H1.013.901V9.792 9.004H.788.675V8.329 7.654H.562.45V7.09 6.528H.338.225V4.614 2.702h.113.113V2.251 1.801h.113.113v-.225-.225h.113.113v-.225-.225h.113.113v-.225-.225h.113.113V.338.225h.113.113V.113 0H1.731 1.885V.113.225H1.843 1.801v.113.113h-.113-.113v.225.225h-.113-.113v.113.113h-.113-.113v.338.338h-.113-.113v1.801 1.801h.113.113v.675.675h.113.113v.562.562h.113.113v2.026 2.026h-.113-.113v.45.45h-.113-.113v.225.225h-.113-.113v.225.225h-.113-.113v.225.225h-.113-.113v.113.113H.338.225v.113.113h.113.113v.113.113h.113.113v.225.225h.113.113v.225.225h.113.113v.225.225h.113.113v.338.338h.113.113v2.026 2.026h-.113-.113v.675.675h-.113-.113v.675.675h-.113-.113v1.801 1.801h.113.113v.225.225h.113.113v.225.225h.113.113v.225.225h.154.154v.197.197z"], null)], null);
});
mecca.components.bar_line = (function mecca$components$bar_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(3.825,-0.09)",new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y1","y1",589123466),(8),new cljs.core.Keyword(null,"y2","y2",-718691301),34.19,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.35], null)], null);
});
mecca.components.bar_number = (function mecca$components$bar_number(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.3 + ((24) * (n - (1))))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(6.3),")"].join(''),new cljs.core.Keyword(null,"d","d",1972142424),(function (){var G__57471 = n;
switch (G__57471) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57471)].join('')));

}
})()], null)], null);
});
mecca.components.bar_line_dotted = (function mecca$components$bar_line_dotted(x){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(14,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_number,(((x / (6)) / (4)) + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y1","y1",589123466),(6),new cljs.core.Keyword(null,"y2","y2",-718691301),(36),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)], null);
});
mecca.components.beat_line = (function mecca$components$beat_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(14,0)",new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y1","y1",589123466),(6),new cljs.core.Keyword(null,"y2","y2",-718691301),(36),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.075,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null);
});
mecca.components.ending_bar = (function mecca$components$ending_bar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(1.2,0.06)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),22.25,new cljs.core.Keyword(null,"y","y",-1757859776),(3),new cljs.core.Keyword(null,"width","width",-384071477),0.24,new cljs.core.Keyword(null,"height","height",1025178622),11.25,new cljs.core.Keyword(null,"ry","ry",-334598563),(0),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),22.125,new cljs.core.Keyword(null,"x2","x2",-1362513475),22.125,new cljs.core.Keyword(null,"y1","y1",589123466),(3),new cljs.core.Keyword(null,"y2","y2",-718691301),14.25,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.1], null)], null)], null);
});
mecca.components.ending_bar_repeat = (function mecca$components$ending_bar_repeat(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),62.5,new cljs.core.Keyword(null,"y","y",-1757859776),(8),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(28),new cljs.core.Keyword(null,"ry","ry",-334598563),(0),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),61.8,new cljs.core.Keyword(null,"x2","x2",-1362513475),61.8,new cljs.core.Keyword(null,"y1","y1",589123466),(8),new cljs.core.Keyword(null,"y2","y2",-718691301),(36),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.35], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(11),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(13),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(23),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(25),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(33),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),60.8,new cljs.core.Keyword(null,"cy","cy",755331060),(35),new cljs.core.Keyword(null,"r","r",-471384190),0.4], null)], null)], null);
});
mecca.components.eighth_note_flag = (function mecca$components$eighth_note_flag(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.007,-0.007)",new cljs.core.Keyword(null,"d","d",1972142424),"M179 -646c15 29 28.5449 55.0752 46 102c18.3213 49.2549 30 108.298 30 138c0 105 -80 173 -168 200c-18 5 -47 9 -87 16v190h22c8 0 33 -61 71 -95c4 -3 -2 3 61 -56c62 -58 122 -137 122 -241c0 -37.5245 -12.6807 -106.071 -35 -163 c-19.9111 -50.7861 -43 -99 -66 -132c-6 -5 -10 -7 -13 -7s-5 2 -5 5l4 10c1.17241 2.93103 13.7644 24.8111 18 33z"], null)], null);
});
mecca.components.beam = (function mecca$components$beam(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),"2981,475 3499,424 3499,484 2981,535"], null)], null);
});
mecca.components.kill_note = (function mecca$components$kill_note(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),"M 0.75,0.3 L 1.75,-0.7 M 1.75,0.3 L 0.75,-0.7",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.35], null)], null);
});
mecca.components.drum_hit = (function mecca$components$drum_hit(color,p__57473){
var vec__57474 = p__57473;
var x = cljs.core.nth.call(null,vec__57474,(0),null);
var y = cljs.core.nth.call(null,vec__57474,(1),null);
var mouseover_QMARK_ = reagent.core.atom.call(null,false);
return ((function (mouseover_QMARK_,vec__57474,x,y){
return (function (color__$1,p__57477){
var vec__57478 = p__57477;
var x__$1 = cljs.core.nth.call(null,vec__57478,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__57478,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__57478,x__$1,y__$1,mouseover_QMARK_,vec__57474,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true);
});})(vec__57478,x__$1,y__$1,mouseover_QMARK_,vec__57474,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__57478,x__$1,y__$1,mouseover_QMARK_,vec__57474,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false);
});})(vec__57478,x__$1,y__$1,mouseover_QMARK_,vec__57474,x,y))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57478,x__$1,y__$1,mouseover_QMARK_,vec__57474,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),x__$1,y__$1], null));
});})(vec__57478,x__$1,y__$1,mouseover_QMARK_,vec__57474,x,y))
,new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((12.78 + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((31) < y__$1))?2.2:(0)),new cljs.core.Keyword(null,"y","y",-1757859776),((((31) < y__$1))?-6.3:0.8),new cljs.core.Keyword(null,"height","height",1025178622),5.5,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__57474,x,y))
});
mecca.components.ledger_line = (function mecca$components$ledger_line(p__57481){
var vec__57482 = p__57481;
var x = cljs.core.nth.call(null,vec__57482,(0),null);
var y = cljs.core.nth.call(null,vec__57482,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transform","transform",1381301764),["scale (1,1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((8.875 + (6.9 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((25.0375 - y)),") "].join(''),new cljs.core.Keyword(null,"height","height",1025178622),0.2,new cljs.core.Keyword(null,"width","width",-384071477),2.085,new cljs.core.Keyword(null,"ry","ry",-334598563),0.1,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)], null);
});
mecca.components.quarter_note = (function mecca$components$quarter_note(color,p__57485){
var vec__57486 = p__57485;
var x = cljs.core.nth.call(null,vec__57486,(0),null);
var y = cljs.core.nth.call(null,vec__57486,(1),null);
var mouseover_QMARK_ = reagent.core.atom.call(null,false);
return ((function (mouseover_QMARK_,vec__57486,x,y){
return (function (color__$1,p__57489){
var vec__57490 = p__57489;
var x__$1 = cljs.core.nth.call(null,vec__57490,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__57490,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__57490,x__$1,y__$1,mouseover_QMARK_,vec__57486,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true);
});})(vec__57490,x__$1,y__$1,mouseover_QMARK_,vec__57486,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__57490,x__$1,y__$1,mouseover_QMARK_,vec__57486,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false);
});})(vec__57490,x__$1,y__$1,mouseover_QMARK_,vec__57486,x,y))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57490,x__$1,y__$1,mouseover_QMARK_,vec__57486,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),x__$1,y__$1], null));
});})(vec__57490,x__$1,y__$1,mouseover_QMARK_,vec__57486,x,y))
,new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((13) + ((6) * x__$1))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y__$1 + (1))),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?2.15:0.02),new cljs.core.Keyword(null,"y","y",-1757859776),((((((((11) < y__$1)) && ((y__$1 < (18))))) || (((23) < y__$1))))?-7.1:(0)),new cljs.core.Keyword(null,"height","height",1025178622),6.794,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null)], null),((((cljs.core._EQ_.call(null,y__$1,(1))) || (cljs.core._EQ_.call(null,y__$1,(3))) || (cljs.core._EQ_.call(null,y__$1,(5))) || (cljs.core._EQ_.call(null,y__$1,(17))) || (cljs.core._EQ_.call(null,y__$1,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (1.75,1.75)",new cljs.core.Keyword(null,"height","height",1025178622),0.2,new cljs.core.Keyword(null,"width","width",-384071477),2.085,new cljs.core.Keyword(null,"ry","ry",-334598563),0.1,new cljs.core.Keyword(null,"x","x",2099068185),-0.334,new cljs.core.Keyword(null,"y","y",-1757859776),-0.1], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,mouseover_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.kill_note], null):null)], null);
});
;})(mouseover_QMARK_,vec__57486,x,y))
});
mecca.components.drum_clef = (function mecca$components$drum_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.75, 0.5) translate(5.5,65.334)",new cljs.core.Keyword(null,"d","d",1972142424),"M2.5-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1zM.8-1.3h-.7c0 0-.1 0-.1.1v3.7c0 0 0 .1.1 .1h.7c0 0 .1 0 .1-.1v-3.7c0 0 0-.1-.1-.1z",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null);
});
mecca.components.bass_clef = (function mecca$components$bass_clef(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(2.5,20)",new cljs.core.Keyword(null,"d","d",1972142424),"M.187 6.323H0V6.244 6.165H.094.187V6.072 5.978H.467.747v-.094-.094h.187.187v-.094-.094h.094.094v-.094-.094h.094.094v-.094-.094h.187.187v-.094-.094h.094.094v-.094-.094h.094.094v-.094-.094h.094.094v-.187-.187h.094.094v-.094-.094h.094.094v-.187-.187h.094.094V3.456 3.176h.094.094V2.428 1.681H3.083 2.989V1.308.934H2.896 2.802V.841.747H2.709 2.616V.654.56H2.523 2.428V.467.373H1.868 1.308V.467.56H1.121.934V.654.747H.841.747V.934 1.121H1.215 1.681v.094.094h.094.094v.56.56h-.094-.094v.094.094H1.121.56V2.523 2.428H.467.373V2.241 2.055H.28.187V1.681 1.308H.28.373V1.028.747H.467.56V.654.56H.654.747V.467.373H.841.934V.28.187H1.121 1.308V.094 0H1.961 2.616V.094.187h.28.28v.094.094h.094.094v.094.094h.094.094v.094.094h.094.094v.094.094h.094.094v.187.187h.094.094v.934.934h-.094-.094v.187.187h-.094-.094v.187.187h-.094-.094v.187.187h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.094-.094v.094.094h-.187-.187v.094.094h-.094-.094v.094.094h-.187-.187v.094.094H1.495 1.308v.094.094H1.121.934v.094.094H.654.373v.079.079z\n                 M4.844 1.721H4.588V1.636 1.551H4.503 4.418V1.295 1.038h.086.086V.953.868h.256.256v.086.086h.086.086V1.295 1.551h-.086-.086v.086.086z\n                 M4.801 3.289H4.548V3.205 3.12H4.463 4.378V2.867 2.613h.085.085V2.529 2.445h.252.252v.085.085h.085.085V2.867 3.12h-.085-.085v.085.085z"], null)], null);
});
});
mecca.components.treble_clef = (function mecca$components$treble_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(2.65,6.3)",new cljs.core.Keyword(null,"d","d",1972142424),"M2.214 12.37H1.55v-.097-.097h-.221-.221v-.111-.111h-.111-.111v-.553-.553h.111.111v-.111-.111h.111.111v-.111-.111h.332.332v.111.111h.111.111v.111.111h.111.111v.332.332h-.111-.111v.111.111h-.111-.111v.111.111h.443.443v-.111-.111h.111.111v-.996-.996h-.111-.111v-.111-.111H2.214 1.55v-.111-.111h-.221-.221v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.111-.111H.332.221v-.221-.221H.111 0v-.996-.996h.111.111v-.221-.221h.111.111v-.221-.221h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111V3.653 3.321H1.66 1.55V2.324 1.328h.111.111V.996.664h.111.111V.443.221h.111.111V.111 0h.332.332v.111.111h.111.111v.221.221h.111.111v.332.332h.111.111v.664.664h-.111-.111v.443.443h-.111-.111v.221.221h-.111-.111v.221.221h-.111-.111v.111.111h-.111-.111v.553.553h.111.111v.111.111h.443.443v.111.111h.111.111v.111.111h.111.111v.111.111h.111.111v.221.221h.069.069v.664.664h-.069-.069v.221.221h-.111-.111v.111.111h-.111-.111v.111.111h-.221-.221v.443.443h.111.111v.775.775h-.111-.111v.221.221h-.221-.221v.097.097zM1.992 9.077h.664v-.553-.553h-.111-.111v-.553-.553h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.332.332h.111.111v.221.221h.221.221v.111.111H2.103 1.771v-.111-.111h-.111-.111v-.111-.111h-.111-.111v-.221-.221h-.111-.111v-.332-.332h.111.111v-.221-.221h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h.111.111v-.111-.111h-.111-.111v-.332-.332h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.111.111h-.111-.111v.221.221h-.111-.111v.111.111h-.111-.111v.332.332h-.111-.111v.332.332h.111.111v.332.332h.111.111v.111.111h.111.111v.111.111h.111.111v.111.111zm1.328-.221h.221v-.221-.221h.111.111v-.443-.443h-.111-.111v-.221-.221h-.221-.221v-.111-.111h-.111-.111v.553.553h.111.111v.443.443zM2.214 3.321h.221v-.221-.221h.111.111v-.111-.111h.111.111v-.221-.221h.111.111V1.66 1.107H2.767 2.435v.221.221h-.111-.111v.221.221h-.111-.111v.664.664z"], null)], null);
});
mecca.components.sharp = (function mecca$components$sharp(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + y)),")"].join(''),new cljs.core.Keyword(null,"d","d",1972142424),"M.18.04V-.91l.4-.11v.95zM.98-.19.7-.11V-1.05l.28-.08v-.39l-.28.08V-2.42h-.11v1l-.4.12V-2.24h-.11v.98l-.28.08v.39l.28-.08v.95l-.28.08V.55L.08.47v.96h.11V.43l.4-.11v.94h.11V.29L.98.21Z"], null)], null);
});
mecca.components.flat = (function mecca$components$flat(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m .94 1.62s-.06-1.2-.06-2c0-.32.02-.56.04-.64.08-.24.6-.68.88-.84.18-.1.36-.14.52-.14.2 0 .38.08.5.22.2.22.32.56.32.94 0 .36-.1.78-.34 1.2-.26.48-.84 1.12-1.44 1.5-.08.04-.14.06-.2.06-.18 0-.22-.2-.22-.3m-.7 1.78c.06.08.12.1.18.1s.12-.04.12-.04c.6-.34 1.08-.88 1.58-1.22 1.78-1.24 2.4-2.46 2.4-3.38 0-1.14-.88-1.86-1.8-1.92-.14 0-.28.02-.42.06-.22.06-.46.14-.68.28-.12.1-.34.28-.44.28-.04 0-.06 0-.1-.02-.14-.06-.22-.2-.22-.34.02-.44.14-5.24.14-5.64 0-.22-.18-.34-.38-.34-.28 0-.6.2-.62.56 0 0 .08 11.42.24 11.62"], null)], null);
});
mecca.components.c_sharp_minor = (function mecca$components$c_sharp_minor(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,6.6,(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,7.4,(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,8.2,(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,(9),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,9.8,(13)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,10.6,(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.sharp,11.4,(12)], null)], null);
});
mecca.components.note_button = (function mecca$components$note_button(value,color,x){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",0)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.call(null,color,"pink"))?"#e6b08e":"#c0c0c0"),new cljs.core.Keyword(null,"d","d",1972142424),"m2 14h-1v-6-6h.5.5v-.5-.5h6 6v1 1h-.5-.5v-.5-.5H8 3v.5.5h-.5-.5v5 5h.5.5v.5.5zm3.5-2h-.5v-.5-.5h-.5-.5v-.5-.5h.5.5V9.5 9h.5.5v.5.5h.5.5v.5.5h-.5-.5v.5.5zm0-1h.5v-.5-.5h-.5-.5v.5.5z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.call(null,color,"pink"))?"#b78160":"#707070"),new cljs.core.Keyword(null,"d","d",1972142424),"m8 15h-6v-.5-.5h5.5 5.5v-.5-.5h.5.5V7.5 1.999h.5.5V8 14h-.5-.5v.5.5zM4.5 12h-.5v-.5-.5h.5.5v.5.5zm2-2h-.5v-.5-.5h.5.5v.5.5z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.call(null,color,"pink"))?"#fed5bc":"#e8f0f8"),new cljs.core.Keyword(null,"d","d",1972142424),"M8 14H3V13.5 13h-.5-.5v-5-5h.5.5v-.5-.5h3 3v3 3h-1.5-1.5v.5.5H5 4V9.5 10h-.5-.5v1 1h.5.5v.5.5h1.5 1.5V12.5 12h1 1V11.5 11h.5.5v-4.5-4.5h1.5 1.5v.5.5h.5.5v5 5h-.5-.5v.5.5zm-2.5-3h-.5v-.5-.5h.5.5v.5.5z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),(function (){var G__57493 = value;
switch (G__57493) {
case "quarter":
return "M8 16H2v-.5-.5H1.5 1v-.5-.5H.5 0V8 2H.5 1V1.5 1H1.5 2V.5 0h6 6v.5.5h.5.5V1.5 2h.5.5v6 6h-.5-.5v.5.5h-.5-.5v.5.5zm0-1h6v-.5-.5h.5.5V8 2h-.5-.5V1.5 1H8 2V1.5 2H1.5 1v6 6H1.5 2v.5.5zm-2.5-2h-1.5v-.5-.5H3.5 3v-1-1h.5.5v-.5-.5h.5.5v.5.5h-.5-.5v1 1h1 1v-.5-.5h.5.5v-1-1h-.5-.5V8.5 8h1.5 1.5V5 2h.5.5v4.5 4.5h-.5-.5v.5.5h-1-1v.5.5z";

break;
case "eighth":
return "M8 16H2V15.5 15H1.5 1V14.5 14H.5 0V8 2H.5 1V1.5 1H1.5 2V.5 0H8 14V.5 1H14.5 15V1.5 2H15.5 16V8 14H15.5 15V14.5 15H14.5 14V15.5 16ZM8 15H14V14.5 14H14.5 15V8 2H14.5 14V1.5 1H8 2V1.5 2H1.5 1V8 14H1.5 2V14.5 15ZM5.5 13H4V12.5 12H3.5 3V11 10H3.5 4V9.5 9H4.5 5V9.5 10H4.5 4V11 12H5 6V11.5 11H6.5 7V10 9H6.5 6V8.5 8H7.5 9V5 2H10 11V2.5 3H11.5 12V3.5 4H12.5 13V5.5 7H12.5 12V7.5 8H11.5 11V7.5 7H11.5 12V6 5H11.5 11V4.5 4H10.5 10V7.5 11H9.5 9V11.5 12H8 7V12.5 13Z";

break;
case "sixteenth":
return "m8 16h-6v-.5-.5h-.5-.5v-.5-.5h-.5-.5v-6-6h.5.5v-.5-.5h.5.5v-.5-.5h6 6v.5.5h.5.5v.5.5h.5.5v6 6h-.5-.5v.5.5h-.5-.5v.5.5zm0-1h6v-.5-.5h.5.5v-6-6h-.5-.5v-.5-.5h-6-6v.5.5h-.5-.5v6 6h.5.5v.5.5zm-2.5-2h-1.5v-.5-.5h-.5-.5v-1-1h.5.5v-.5-.5h.5.5v.5.5h-.5-.5v1 1h1 1v-.5-.5h.5.5v-1-1h-.5-.5v-.5-.5h1.5 1.5v-3-3h1 1v.5.5h.5.5v.5.5h.5.5v3 3h-.5-.5v.5.5h-.5-.5v-.5-.5h.5.5v-1-1h-.5-.5v-.5-.5h-.5-.5v2 2h-.5-.5v.5.5h-1-1v.5.5zm6-7h.5v-.5-.5h-.5-.5v-.5-.5h-.5-.5v.5.5h.5.5v.5.5z";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57493)].join('')));

}
})()], null)], null)], null);
});
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),e.target.value], null));
})], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__57495(s__57496){
return (new cljs.core.LazySeq(null,(function (){
var s__57496__$1 = s__57496;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__57496__$1);
if(temp__5457__auto__){
var s__57496__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57496__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__57496__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__57498 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__57497 = (0);
while(true){
if((i__57497 < size__4323__auto__)){
var scale = cljs.core._nth.call(null,c__4322__auto__,i__57497);
cljs.core.chunk_append.call(null,b__57498,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)));

var G__57499 = (i__57497 + (1));
i__57497 = G__57499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57498),mecca$components$scale_picker_$_iter__57495.call(null,cljs.core.chunk_rest.call(null,s__57496__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57498),null);
}
} else {
var scale = cljs.core.first.call(null,s__57496__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)),mecca$components$scale_picker_$_iter__57495.call(null,cljs.core.rest.call(null,s__57496__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.keys.call(null,mecca.music.scales));
})())], null)], null);
});
mecca.components.key_picker = (function mecca$components$key_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Key: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-key","set-key",-48186176),e.target.value], null));
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__57500(s__57501){
return (new cljs.core.LazySeq(null,(function (){
var s__57501__$1 = s__57501;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__57501__$1);
if(temp__5457__auto__){
var s__57501__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57501__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__57501__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__57503 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__57502 = (0);
while(true){
if((i__57502 < size__4323__auto__)){
var note = cljs.core._nth.call(null,c__4322__auto__,i__57502);
cljs.core.chunk_append.call(null,b__57503,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)));

var G__57504 = (i__57502 + (1));
i__57502 = G__57504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57503),mecca$components$key_picker_$_iter__57500.call(null,cljs.core.chunk_rest.call(null,s__57501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57503),null);
}
} else {
var note = cljs.core.first.call(null,s__57501__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)),mecca$components$key_picker_$_iter__57500.call(null,cljs.core.rest.call(null,s__57501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,mecca.music.notes);
})()], null)], null);
});
mecca.components.octave_input = (function mecca$components$octave_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Octave: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"6%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-octave","set-octave",378200257),e.target.value], null));
})], null)], null)], null);
});
mecca.components.tempo_input = (function mecca$components$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"8%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),e.target.value], null));
})], null)], null)], null);
});
mecca.components.staff = (function mecca$components$staff(){
var focused = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var lead = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null));
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
var drums = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null));
var current_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
return ((function (focused,lead,bassline,drums,current_position){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.staff","g.staff",1070451758),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,9) scale(1)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#lines","g#lines",1814887067),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__57505(s__57506){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__57506__$1 = s__57506;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__57506__$1);
if(temp__5457__auto__){
var s__57506__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57506__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__57506__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__57508 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__57507 = (0);
while(true){
if((i__57507 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__57507);
cljs.core.chunk_append.call(null,b__57508,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"visibility","visibility",1338380893)],[((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.06:0.15),2.25,y,(63),(((((y > (7))) && (cljs.core.even_QMARK_.call(null,y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__57539 = (i__57507 + (1));
i__57507 = G__57539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57508),mecca$components$staff_$_iter__57505.call(null,cljs.core.chunk_rest.call(null,s__57506__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57508),null);
}
} else {
var y = cljs.core.first.call(null,s__57506__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"visibility","visibility",1338380893)],[((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.25:null),"black","bevel",y,"butt",((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.06:0.15),2.25,y,(63),(((((y > (7))) && (cljs.core.even_QMARK_.call(null,y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$components$staff_$_iter__57505.call(null,cljs.core.rest.call(null,s__57506__$2)));
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,(36)));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brace], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#clefs","g#clefs",-142950481),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_clef], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line_dotted,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(18)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,31.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line_dotted,(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(36)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,(42)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,(59)], null)], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__57509(s__57510){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__57510__$1 = s__57510;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__57510__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__57510__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__57509_$_iter__57511(s__57512){
return (new cljs.core.LazySeq(null,((function (s__57510__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
var s__57512__$1 = s__57512;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__57512__$1);
if(temp__5457__auto____$1){
var s__57512__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57512__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__57512__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__57514 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__57513 = (0);
while(true){
if((i__57513 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__57513);
cljs.core.chunk_append.call(null,b__57514,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(12.5,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.5 + y),((function (i__57513,s__57510__$1,y,c__4322__auto__,size__4323__auto__,b__57514,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__57513,s__57510__$1,y,c__4322__auto__,size__4323__auto__,b__57514,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,"gray",(3),((function (i__57513,s__57510__$1,y,c__4322__auto__,size__4323__auto__,b__57514,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-note","add-note",-926319985),x,y], null));
});})(i__57513,s__57510__$1,y,c__4322__auto__,size__4323__auto__,b__57514,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((function (i__57513,s__57510__$1,y,c__4322__auto__,size__4323__auto__,b__57514,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__57513,s__57510__$1,y,c__4322__auto__,size__4323__auto__,b__57514,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((6) * x),"all","hidden",(1)])], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?((((30) < y))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.35 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),") "].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((31) < y))?2.2:(0)),new cljs.core.Keyword(null,"y","y",-1757859776),((((31) < y))?-6.3:0.8),new cljs.core.Keyword(null,"height","height",1025178622),5.5,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),")"].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?2.15:0.02),new cljs.core.Keyword(null,"y","y",-1757859776),((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?-7.1:(0)),new cljs.core.Keyword(null,"height","height",1025178622),6.794,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null),((((cljs.core._EQ_.call(null,y,(1))) || (cljs.core._EQ_.call(null,y,(3))) || (cljs.core._EQ_.call(null,y,(5))) || (cljs.core._EQ_.call(null,y,(17))) || (cljs.core._EQ_.call(null,y,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (1.75)",new cljs.core.Keyword(null,"height","height",1025178622),0.2,new cljs.core.Keyword(null,"width","width",-384071477),2.085,new cljs.core.Keyword(null,"ry","ry",-334598563),0.1,new cljs.core.Keyword(null,"x","x",2099068185),-0.334,new cljs.core.Keyword(null,"y","y",-1757859776),-0.1,new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null):null)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__57540 = (i__57513 + (1));
i__57513 = G__57540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57514),mecca$components$staff_$_iter__57509_$_iter__57511.call(null,cljs.core.chunk_rest.call(null,s__57512__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57514),null);
}
} else {
var y = cljs.core.first.call(null,s__57512__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(12.5,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.5 + y),((function (s__57510__$1,y,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(s__57510__$1,y,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,"gray",(3),((function (s__57510__$1,y,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-note","add-note",-926319985),x,y], null));
});})(s__57510__$1,y,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((function (s__57510__$1,y,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(s__57510__$1,y,s__57512__$2,temp__5457__auto____$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,((6) * x),"all","hidden",(1)])], null),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?((((30) < y))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.35 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),") "].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((31) < y))?2.2:(0)),new cljs.core.Keyword(null,"y","y",-1757859776),((((31) < y))?-6.3:0.8),new cljs.core.Keyword(null,"height","height",1025178622),5.5,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + ((6) * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (1))),")"].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?2.15:0.02),new cljs.core.Keyword(null,"y","y",-1757859776),((((((((11) < y)) && ((y < (18))))) || (((23) < y))))?-7.1:(0)),new cljs.core.Keyword(null,"height","height",1025178622),6.794,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null),((((cljs.core._EQ_.call(null,y,(1))) || (cljs.core._EQ_.call(null,y,(3))) || (cljs.core._EQ_.call(null,y,(5))) || (cljs.core._EQ_.call(null,y,(17))) || (cljs.core._EQ_.call(null,y,(29)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (1.75)",new cljs.core.Keyword(null,"height","height",1025178622),0.2,new cljs.core.Keyword(null,"width","width",-384071477),2.085,new cljs.core.Keyword(null,"ry","ry",-334598563),0.1,new cljs.core.Keyword(null,"x","x",2099068185),-0.334,new cljs.core.Keyword(null,"y","y",-1757859776),-0.1,new cljs.core.Keyword(null,"fill","fill",883462889),"gray"], null)], null):null)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$staff_$_iter__57509_$_iter__57511.call(null,cljs.core.rest.call(null,s__57512__$2)));
}
} else {
return null;
}
break;
}
});})(s__57510__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
,null,null));
});})(s__57510__$1,x,xs__6012__auto__,temp__5457__auto__,focused,lead,bassline,drums,current_position))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.conj.call(null,cljs.core.range.call(null,(31)),(31),(33),(35))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$staff_$_iter__57509.call(null,cljs.core.rest.call(null,s__57510__$1)));
} else {
var G__57541 = cljs.core.rest.call(null,s__57510__$1);
s__57510__$1 = G__57541;
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,(8)));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__57515(s__57516){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__57516__$1 = s__57516;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__57516__$1);
if(temp__5457__auto__){
var s__57516__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57516__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__57516__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__57518 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__57517 = (0);
while(true){
if((i__57517 < size__4323__auto__)){
var map__57519 = cljs.core._nth.call(null,c__4322__auto__,i__57517);
var map__57519__$1 = ((((!((map__57519 == null)))?(((((map__57519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57519):map__57519);
var time = cljs.core.get.call(null,map__57519__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__57519__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__57518,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__57542 = (i__57517 + (1));
i__57517 = G__57542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57518),mecca$components$staff_$_iter__57515.call(null,cljs.core.chunk_rest.call(null,s__57516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57518),null);
}
} else {
var map__57521 = cljs.core.first.call(null,s__57516__$2);
var map__57521__$1 = ((((!((map__57521 == null)))?(((((map__57521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57521):map__57521);
var time = cljs.core.get.call(null,map__57521__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__57521__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$components$staff_$_iter__57515.call(null,cljs.core.rest.call(null,s__57516__$2)));
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
return iter__4324__auto__.call(null,cljs.core.deref.call(null,lead));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__57523(s__57524){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__57524__$1 = s__57524;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__57524__$1);
if(temp__5457__auto__){
var s__57524__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57524__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__57524__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__57526 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__57525 = (0);
while(true){
if((i__57525 < size__4323__auto__)){
var map__57527 = cljs.core._nth.call(null,c__4322__auto__,i__57525);
var map__57527__$1 = ((((!((map__57527 == null)))?(((((map__57527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57527):map__57527);
var time = cljs.core.get.call(null,map__57527__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__57527__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__57526,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__57543 = (i__57525 + (1));
i__57525 = G__57543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57526),mecca$components$staff_$_iter__57523.call(null,cljs.core.chunk_rest.call(null,s__57524__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57526),null);
}
} else {
var map__57529 = cljs.core.first.call(null,s__57524__$2);
var map__57529__$1 = ((((!((map__57529 == null)))?(((((map__57529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57529):map__57529);
var time = cljs.core.get.call(null,map__57529__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__57529__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$components$staff_$_iter__57523.call(null,cljs.core.rest.call(null,s__57524__$2)));
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
return iter__4324__auto__.call(null,cljs.core.deref.call(null,bassline));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (focused,lead,bassline,drums,current_position){
return (function mecca$components$staff_$_iter__57531(s__57532){
return (new cljs.core.LazySeq(null,((function (focused,lead,bassline,drums,current_position){
return (function (){
var s__57532__$1 = s__57532;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__57532__$1);
if(temp__5457__auto__){
var s__57532__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57532__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__57532__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__57534 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__57533 = (0);
while(true){
if((i__57533 < size__4323__auto__)){
var map__57535 = cljs.core._nth.call(null,c__4322__auto__,i__57533);
var map__57535__$1 = ((((!((map__57535 == null)))?(((((map__57535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57535):map__57535);
var time = cljs.core.get.call(null,map__57535__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__57535__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__57534,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_hit,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__57544 = (i__57533 + (1));
i__57533 = G__57544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57534),mecca$components$staff_$_iter__57531.call(null,cljs.core.chunk_rest.call(null,s__57532__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57534),null);
}
} else {
var map__57537 = cljs.core.first.call(null,s__57532__$2);
var map__57537__$1 = ((((!((map__57537 == null)))?(((((map__57537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57537):map__57537);
var time = cljs.core.get.call(null,map__57537__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__57537__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_hit,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,((77) - pitch)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$components$staff_$_iter__57531.call(null,cljs.core.rest.call(null,s__57532__$2)));
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
return iter__4324__auto__.call(null,cljs.core.deref.call(null,drums));
})())], null);
});
;})(focused,lead,bassline,drums,current_position))
});
mecca.components.mortar_row = (function mecca$components$mortar_row(x,y,width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + (width * (8))),new cljs.core.Keyword(null,"y1","y1",589123466),(y + 3.5),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + 3.5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null);
});
mecca.components.brick_row = (function mecca$components$brick_row(x,y,width,offset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + ((8) * width)),new cljs.core.Keyword(null,"y1","y1",589123466),(1.5 + y),new cljs.core.Keyword(null,"y2","y2",-718691301),(1.5 + y),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"7 1",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),offset,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c74a0a"], null)], null);
});
mecca.components.mortar_columns = (function mecca$components$mortar_columns(x,y,width,offset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + ((8) * width)),new cljs.core.Keyword(null,"y1","y1",589123466),(1.5 + y),new cljs.core.Keyword(null,"y2","y2",-718691301),(1.5 + y),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 7",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),offset,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null);
});
mecca.components.brick_row_pair = (function mecca$components$brick_row_pair(x,y,width){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row,x,y,width,(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.mortar_columns,x,y,width,(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.mortar_row,x,y,width], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row,x,(y + (4)),width,(4)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.mortar_columns,x,(y + (4)),width,(5)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.mortar_row,x,(y + (4)),width], null)], null);
});
mecca.components.castle_arch = (function mecca$components$castle_arch(y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var iter__4324__auto__ = (function mecca$components$castle_arch_$_iter__57545(s__57546){
return (new cljs.core.LazySeq(null,(function (){
var s__57546__$1 = s__57546;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__57546__$1);
if(temp__5457__auto__){
var s__57546__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57546__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__57546__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__57548 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__57547 = (0);
while(true){
if((i__57547 < size__4323__auto__)){
var vec__57549 = cljs.core._nth.call(null,c__4322__auto__,i__57547);
var dy = cljs.core.nth.call(null,vec__57549,(0),null);
var dx = cljs.core.nth.call(null,vec__57549,(1),null);
cljs.core.chunk_append.call(null,b__57548,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((40) - dx),new cljs.core.Keyword(null,"x2","x2",-1362513475),((40) + dx),new cljs.core.Keyword(null,"y1","y1",589123466),((32) + dy),new cljs.core.Keyword(null,"y2","y2",-718691301),((32) + dy),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dy,dx], null)], null)));

var G__57555 = (i__57547 + (1));
i__57547 = G__57555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57548),mecca$components$castle_arch_$_iter__57545.call(null,cljs.core.chunk_rest.call(null,s__57546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57548),null);
}
} else {
var vec__57552 = cljs.core.first.call(null,s__57546__$2);
var dy = cljs.core.nth.call(null,vec__57552,(0),null);
var dx = cljs.core.nth.call(null,vec__57552,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((40) - dx),new cljs.core.Keyword(null,"x2","x2",-1362513475),((40) + dx),new cljs.core.Keyword(null,"y1","y1",589123466),((32) + dy),new cljs.core.Keyword(null,"y2","y2",-718691301),((32) + dy),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dy,dx], null)], null)),mecca$components$castle_arch_$_iter__57545.call(null,cljs.core.rest.call(null,s__57546__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [16.5,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [17.5,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [18.5,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.5,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [21.5,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [22.5,(8)], null)], null));
})()], null);
});
mecca.components.castle_door = (function mecca$components$castle_door(x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle_arch,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null)], null);
});
mecca.components.castle_roof = (function mecca$components$castle_roof(x,y,width){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + width),new cljs.core.Keyword(null,"y1","y1",589123466),(y + 0.5),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + 0.5),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"9 7",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),(-11),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fbbbaf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + width),new cljs.core.Keyword(null,"y1","y1",589123466),(y + (4)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + (4)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(6),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"1 7",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),(5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fbbbaf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + width),new cljs.core.Keyword(null,"y1","y1",589123466),(y + (4)),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + (4)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(6),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"7 9",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),(4),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#c74a0a"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + width),new cljs.core.Keyword(null,"y1","y1",589123466),(y + 7.5),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + 7.5),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"9 7",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),(-11),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + width),new cljs.core.Keyword(null,"y1","y1",589123466),(y + 7.5),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + 7.5),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"9 7",new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),(13),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fbbbaf"], null)], null)], null);
});
mecca.components.brick_face = (function mecca$components$brick_face(x,y,width){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (0.18)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle_roof,x,y,((8) * width)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row_pair,x,(y + (8)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row_pair,x,(y + (16)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row_pair,x,(y + (24)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row_pair,x,(y + (32)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_row_pair,x,(y + (40)),width], null),((cljs.core._EQ_.call(null,width,(10)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.castle_door,(32),(y + (24))], null):null)], null);
});
mecca.components.controls = (function mecca$components$controls(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (0.8) translate (24,0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M 15.980521,7.613225 0.42857114,7.607391 0.21428596,7.378536 0,7.149667 V 3.808607 0.467532 L 0.23376627,0.233767 0.46753329,0 H 15.999999 31.532464 L 31.766239,0.233767 32,0.467532 V 3.809531 7.151509 L 31.766239,7.38529 31.532464,7.61905 15.980521,7.61325 Z m 0,-0.190477 15.361467,0.0058 0.233773,-0.233756 0.233758,-0.233772 V 3.809541 0.658023 L 31.575761,0.424258 31.341988,0.190492 H 15.999952 0.65796607 L 0.42419962,0.424258 0.1904332,0.658023 v 3.150596 3.15058 l 0.2142863,0.228874 0.21428465,0.22887 15.36146885,0.0058 z M 15.983521,6.66305 1.1908176,6.659128 1.0716125,6.524063 0.95256497,6.388844 V 3.806716 1.224461 L 1.0885172,1.088416 1.2245715,0.95236 h 14.7754815 14.7755 l 0.136057,0.136056 0.136055,0.136056 V 3.809505 6.394546 L 30.91161,6.530587 30.775553,6.666643 15.983047,6.662743 Z m 0,-0.190473 14.602041,0.0039 0.136051,-0.13605 0.136051,-0.136052 V 3.809561 1.414998 L 30.721142,1.278936 30.585104,1.142879 H 15.999952 1.4149235 L 1.2788678,1.278936 1.1428134,1.414988 v 2.391767 2.391778 l 0.1190484,0.135229 0.1190479,0.135206 14.6020393,0.0039 z M 18.933396,5.327509 18.714781,5.321709 18.500489,5.092841 18.286206,4.86399 V 4.665759 4.46755 L 18.51997,4.233798 18.753734,4.000017 H 18.952866 19.152 l 0.233772,0.233781 0.233763,0.233752 V 4.666688 4.865831 L 19.385772,5.099587 19.152,5.333365 18.933386,5.327565 Z m 0.003,-0.188272 0.221085,0.0039 0.136058,-0.136059 0.136046,-0.136044 V 4.666753 4.462671 L 19.293255,4.32658 19.157198,4.190523 H 18.953031 18.74895 L 18.612894,4.32658 18.476848,4.462631 V 4.66393 4.865227 l 0.119045,0.135217 0.119048,0.135216 0.22109,0.0039 z m 0.01703,-0.377311 h -0.285903 v -0.09526 -0.09523 h 0.285714 0.285723 v 0.09523 0.09526 z M 29.791068,5.327509 29.572455,5.321709 29.358167,5.092841 29.143886,4.863991 V 4.665773 4.467564 l 0.233762,-0.233753 0.233768,-0.233778 h 0.199133 0.199133 l 0.233764,0.233778 0.233769,0.233753 v 0.199139 0.199142 l -0.233769,0.233756 -0.233764,0.233778 -0.218614,-0.0058 z m 0.003,-0.188272 0.221083,0.0039 0.13606,-0.136059 0.136051,-0.136044 V 4.666803 4.462722 L 30.150858,4.3267 30.014802,4.190647 H 29.810588 29.606507 L 29.470453,4.3267 29.334396,4.46275 v 0.201294 0.2013 l 0.11905,0.135224 0.11905,0.135205 0.221082,0.0039 z m 0,-0.190464 -0.03059,-0.0039 -0.124269,-0.140807 -0.124276,-0.140812 0.148079,-0.148081 0.148089,-0.148091 0.149656,0.149667 0.149661,0.149652 -0.142854,0.142866 -0.142859,0.142846 -0.03054,-0.0039 z m -5.411572,0.0039 h -3.809978 v -0.1905 -0.190481 h 3.809518 3.809529 V 4.762184 4.95265 Z M 2.2858336,2.857164 H 1.90488 V 2.761934 2.666694 H 2.1905952 2.4763084 V 2.571454 2.476214 H 2.1905952 1.90488 V 2.190498 1.904786 h 0.3809536 0.3809525 v 0.09524 0.09524 H 2.3810716 2.0953564 v 0.09524 0.09524 h 0.2857152 0.2857145 v 0.285713 0.285713 z m 1.0476189,0 H 3.2382145 V 2.476213 2.09526 H 3.0475757 2.8571004 V 2.00002 1.90478 H 3.3332905 3.8094801 V 2.00002 2.09526 H 3.6190057 3.428528 v 0.380953 0.380951 z m 1.0476153,0 H 4.0001219 V 2.380974 1.904786 h 0.3809459 0.3809587 v 0.476188 0.47619 z m 0,-0.190476 h 0.190484 V 2.380974 2.09526 H 4.3809138 4.1904383 V 2.380974 2.666688 Z M 5.0477402,2.857164 H 4.9524931 V 2.380974 1.904786 H 5.3334577 5.7143995 V 2.190498 2.476213 H 5.4286836 5.1429702 V 2.666688 2.857164 Z M 5.3334577,2.285738 H 5.5239312 V 2.190498 2.095258 H 5.3332795 5.1428179 v 0.09524 0.09524 z M 8.0953554,2.857164 H 8.0001234 V 2.380974 1.904786 H 8.3810663 8.7620294 V 2.190498 2.476213 H 8.476319 8.1905885 V 2.666688 2.857164 Z M 8.3810667,2.285738 H 8.5715506 V 2.190498 2.095258 H 8.3809166 8.1904384 v 0.09524 0.09524 z m 0.952391,0.571426 H 8.9524899 V 2.380974 1.904786 h 0.095252 0.095228 v 0.380952 0.38095 h 0.2857134 0.2857159 v 0.09524 0.09523 z m 0.6666663,0 H 9.904874 V 2.517031 2.176895 l 0.13605,-0.136057 0.136064,-0.136052 h 0.108848 0.108842 l 0.136036,0.136052 0.136063,0.136057 v 0.340136 0.340133 h -0.09523 -0.09523 V 2.666688 2.476213 h -0.190476 -0.190486 v 0.190475 0.190476 z m 0.285717,-0.571426 h 0.190476 v -0.09524 -0.09524 h -0.190476 -0.190486 v 0.09524 0.09524 z m 1.047616,0.571426 h -0.09524 V 2.606429 2.355698 l -0.205744,-0.178439 -0.205758,-0.178446 0.06229,-0.06228 0.06227,-0.06228 0.191083,0.220318 0.191089,0.220322 0.191077,-0.220322 0.191084,-0.220318 0.06227,0.06228 0.06228,0.06228 -0.205743,0.178446 -0.205745,0.178439 v 0.250731 0.250735 z m 3.142858,0 H 14.095358 V 2.380974 1.904786 h 0.09523 0.09525 v 0.380952 0.38095 h 0.28571 0.285705 v 0.09524 0.09523 z m 0.952368,0 H 15.047742 V 2.380974 1.904786 h 0.380941 0.380965 v 0.476188 0.47619 z m 0,-0.190476 h 0.190479 V 2.380974 2.09526 h -0.190479 -0.19046 v 0.285714 0.285714 z m 0.952385,0.190476 H 16.000124 V 2.380974 1.904786 h 0.380944 0.380962 v 0.476188 0.47619 z m 0,-0.190476 H 16.57155 V 2.380974 2.09526 h -0.190482 -0.190479 v 0.285714 0.285714 z m 0.666674,0.190476 h -0.09525 V 2.380974 1.904786 h 0.380966 0.380941 V 2.190498 2.476213 H 17.428683 17.14297 v 0.190475 0.190476 z m 0.285716,-0.571426 h 0.190476 V 2.190498 2.095258 H 17.333458 17.14297 v 0.09524 0.09524 z m 5.047608,0.571426 h -0.09523 V 2.476213 2.09526 H 22.095349 21.904875 V 2.00002 1.90478 h 0.476187 0.47619 V 2.00002 2.09526 H 22.666777 22.47631 v 0.380953 0.380951 z m 1.047617,0 h -0.38094 V 2.380974 1.904786 h 0.38094 0.38096 v 0.09524 0.09524 h -0.285714 -0.28571 v 0.09524 0.09524 h 0.28571 0.285714 v 0.09524 0.09524 h -0.285714 -0.28571 v 0.09524 0.09524 h 0.28571 0.285714 v 0.09524 0.09523 z m 0.66667,0 h -0.09523 V 2.380974 1.904786 h 0.06024 0.06027 l 0.177834,0.205046 0.177847,0.205054 0.177836,-0.205054 0.177829,-0.205046 h 0.06026 0.06025 v 0.476188 0.47619 h -0.09523 -0.09523 V 2.571451 2.285738 h -0.08731 -0.0873 l -0.05555,0.11905 -0.05556,0.119048 -0.05556,-0.119048 -0.05555,-0.11905 h -0.0873 -0.08731 v 0.285713 0.285713 z m 1.142866,0 h -0.09525 V 2.380974 1.904786 h 0.380959 0.38095 v 0.285712 0.285715 h -0.285716 -0.285703 v 0.190475 0.190476 z m 0.28571,-0.571426 h 0.19047 v -0.09524 -0.09524 h -0.19047 -0.19047 v 0.09524 0.09524 z m 0.952385,0.571426 H 26.095353 V 2.380974 1.904786 h 0.380961 0.380942 v 0.476188 0.47619 z m 0,-0.190476 h 0.190468 V 2.380974 2.09526 H 26.476314 26.28584 v 0.285714 0.285714 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M 15.789998,7.234483 0.42852798,7.230773 0.30948065,7.095568 0.1904332,6.960342 V 3.809211 0.657999 L 0.42419962,0.424232 0.65796607,0.190466 H 15.904721 31.151477 l 0.233756,0.233766 0.233779,0.233767 v 3.05627 3.056295 L 31.385233,7.004314 31.151477,7.23809 15.789998,7.23419 Z m 0.09772,-0.190487 15.2687,0.0039 0.136053,-0.136057 0.136064,-0.136058 V 3.714311 0.653095 L 31.292469,0.517026 31.156416,0.38097 H 15.904721 0.65301777 l -0.1360539,0.136056 -0.1360543,0.136056 v 3.058437 3.058436 l 0.11904676,0.135226 0.11904782,0.13521 15.26871185,0.0039 z M 1.0713848,6.66305 0.99995617,6.659437 0.88090996,6.524211 0.76186204,6.389008 V 3.809211 1.229431 L 0.99562827,0.995666 1.229393,0.761895 h 14.770559 14.770565 l 0.233774,0.233767 0.233756,0.233765 v 2.582554 2.582576 l -0.147382,0.147391 -0.147403,0.147379 -0.06689,-0.072 -0.06689,-0.072 0.119046,-0.04254 0.119049,-0.04254 V 3.842391 1.224483 L 30.911519,1.088425 30.775472,0.95237 H 15.999952 1.2244463 L 1.0883921,1.088425 0.95233657,1.224481 V 3.850329 6.47617 h 0.095239 0.095238 v 0.09525 0.09523 l -0.071429,-0.004 z M 15.959146,6.476189 H 1.3332909 V 6.380949 6.285729 H 15.999952 30.666628 V 3.809533 1.33334 h 0.09523 0.09524 v 2.435371 2.435382 l -0.136054,0.136055 -0.136049,0.136043 z m 0.0408,-0.380943 H 1.523766 V 3.809531 1.523813 H 15.999952 30.476143 V 2.952381 4.38095 h -0.0742 -0.07422 L 30.190438,4.190479 30.053148,4.00001 H 29.83175 29.610351 L 29.376575,4.233771 29.142818,4.46753 v 0.199136 0.199142 l 0.233757,0.233758 0.233776,0.233777 h 0.221399 0.221398 l 0.13729,-0.190485 0.137285,-0.19048 h 0.07422 0.0742 v 0.57144 0.571428 z m 2.932905,-0.76774 0.21862,0.0058 0.23376,-0.233779 0.233774,-0.233756 V 4.666636 4.46751 L 19.385243,4.233738 19.151482,3.999986 h -0.199136 -0.199143 l -0.233759,0.233753 -0.233775,0.233776 v 0.198197 0.198217 l 0.214293,0.228866 0.214285,0.228861 z M 24.380907,4.952378 H 28.19043 V 4.761921 4.571439 H 24.380913 20.571376 V 4.761921 4.952378 Z M 3.8094801,3.047628 H 5.9047208 V 2.380954 1.71429 H 3.8094801 1.7142431 v 0.666664 0.666674 z m 6.095241,0 H 11.999953 V 2.380954 1.71429 H 9.9047211 7.8094763 v 0.666664 0.666674 z m 5.9999999,0 h 2 V 2.380954 1.71429 h -2 -2 v 0.666664 0.666674 z m 8.476194,0 h 2.666656 V 2.380954 1.71429 h -2.666656 -2.666672 v 0.666664 0.666674 z",new cljs.core.Keyword(null,"fill","fill",883462889),"#9fbfaf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M 15.956661,7.428569 H 0.57138494 V 7.333339 7.238089 H 15.861422 31.151477 L 31.385233,7.004334 31.619012,6.770569 V 3.705974 0.641393 l -0.205753,-0.178441 -0.205742,-0.178443 0.05711,-0.05712 0.05712,-0.05712 0.24385,0.243867 0.243875,0.243867 V 3.809521 6.961034 L 31.575715,7.194801 31.341939,7.428559 Z M 1.2380522,6.285727 H 1.1428132 V 3.85034 1.41497 L 1.2788676,1.278917 1.4149233,1.142862 h 14.6258547 14.62585 v 0.09524 0.09524 H 15.999952 1.3332909 v 2.476193 2.476196 z",new cljs.core.Keyword(null,"fill","fill",883462889),"#777776"], null)], null)], null);
});
mecca.components.editor = (function mecca$components$editor(){
var current_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var playing_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null));
var mario_sprite = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-sprite","mario-sprite",-1325469738)], null));
var jump = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null));
var selected_note_value = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-note-value","selected-note-value",-575447419)], null));
return ((function (current_position,playing_QMARK_,mario_sprite,jump,selected_note_value){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 64 64"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_face,(16),(0),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.brick_face,(0),(32),(10)], null),((cljs.core.even_QMARK_.call(null,cljs.core.deref.call(null,mario_sprite)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,new cljs.core.Keyword(null,"run1","run1",-335773478),cljs.core.nth.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,(32))),cljs.core.reverse.call(null,cljs.core.range.call(null,(32)))),cljs.core.mod.call(null,cljs.core.deref.call(null,mario_sprite),(64)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario,new cljs.core.Keyword(null,"run2","run2",-1491341138),cljs.core.nth.call(null,cljs.core.into.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,(32))),cljs.core.reverse.call(null,cljs.core.range.call(null,(32)))),cljs.core.mod.call(null,cljs.core.deref.call(null,mario_sprite),(64)))], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.2) translate(56,10)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"quarter","pink",(180)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"eighth","white",(196)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_button,"sixteenth","white",(212)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect#editorframe","rect#editorframe",1607762183),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.5,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"height","height",1025178622),(31),new cljs.core.Keyword(null,"width","width",-384071477),(64),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),14.5], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.staff], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.controls], null)], null);
});
;})(current_position,playing_QMARK_,mario_sprite,jump,selected_note_value))
});
mecca.components.mecca = (function mecca$components$mecca(){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return mecca.music.play_bassline_BANG_.call(null);
})], null),"Play Bassline"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Lead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Drums: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Mario Sprite: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-sprite","mario-sprite",-1325469738)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num.call(null))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953)], null)))),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null))))].join('')], null)], null);
});

//# sourceMappingURL=components.js.map
