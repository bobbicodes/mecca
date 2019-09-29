// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.music');
goog.require('mecca.subs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('mecca.notation');
goog.require('mecca.castle');
goog.require('mecca.key');
goog.require('mecca.editor');
goog.require('mecca.mario');
mecca.view.bar_number = (function mecca$view$bar_number(n,x,y,scale){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),cljs.core.cst$kw$stroke,"#000000",cljs.core.cst$kw$d,(function (){var G__19834 = n;
switch (G__19834) {
case (0):
return "M3 0h6M3 1h6M3 2h6M0 3h3M9 3h3M0 4h3M9 4h3M0 5h3M9 5h3M0 6h3M9 6h3M0 7h3M9 7h3M0 8h3M9 8h3M0 9h3M9 9h3M0 10h3M9 10h3M0 11h3M9 11h3M0 12h3M9 12h3M0 13h3M9 13h3M0 14h3M9 14h3M0 15h3M9 15h3M0 16h3M9 16h3M0 17h3M9 17h3M3 18h6M3 19h6M3 20h6";

break;
case (1):
return "M3 0h3M3 1h3M3 2h3M0 3h6M0 4h6M0 5h6M3 6h3M3 7h3M3 8h3M3 9h3M3 10h3M3 11h3M3 12h3M3 13h3M3 14h3M3 15h3M3 16h3M3 17h3M0 18h9M0 19h9M0 20h9";

break;
case (2):
return "M3 0h6M3 1h6M3 2h6M0 3h3M9 3h3M0 4h3M9 4h3M0 5h3M9 5h3M0 6h3M9 6h3M0 7h3M9 7h3M0 8h3M9 8h3M6 9h3M6 10h3M6 11h3M3 12h3M3 13h3M3 14h3M0 15h3M0 16h3M0 17h3M0 18h12M0 19h12M0 20h12";

break;
case (3):
return "M3 0h6M3 1h6M3 2h6M0 3h3M9 3h3M0 4h3M9 4h3M0 5h3M9 5h3M9 6h3M9 7h3M9 8h3M3 9h6M3 10h6M3 11h6M9 12h3M9 13h3M9 14h3M0 15h3M9 15h3M0 16h3M9 16h3M0 17h3M9 17h3M3 18h6M3 19h6M3 20h6";

break;
case (4):
return "M9 0h3M9 1h3M9 2h3M6 3h6M6 4h6M6 5h6M3 6h3M9 6h3M3 7h3M9 7h3M3 8h3M9 8h3M0 9h3M9 9h3M0 10h3M9 10h3M0 11h3M9 11h3M0 12h15M0 13h15M0 14h15M9 15h3M9 16h3M9 17h3M9 18h3M9 19h3M9 20h3";

break;
case (5):
return "M0 0h12M0 1h12M0 2h12M0 3h3M0 4h3M0 5h3M0 6h9M0 7h9M0 8h9M9 9h3M9 10h3M9 11h3M9 12h3M9 13h3M9 14h3M0 15h3M9 15h3M0 16h3M9 16h3M0 17h3M9 17h3M3 18h6M3 19h6M3 20h6";

break;
case (6):
return "M3 0h6M3 1h6M3 2h6M0 3h3M9 3h3M0 4h3M9 4h3M0 5h3M9 5h3M0 6h3M0 7h3M0 8h3M0 9h9M0 10h9M0 11h9M0 12h3M9 12h3M0 13h3M9 13h3M0 14h3M9 14h3M0 15h3M9 15h3M0 16h3M9 16h3M0 17h3M9 17h3M3 18h6M3 19h6M3 20h6";

break;
case (7):
return "M0 0h12M0 1h12M0 2h12M0 3h3M9 3h3M0 4h3M9 4h3M0 5h3M9 5h3M9 6h3M9 7h3M9 8h3M6 9h3M6 10h3M6 11h3M6 12h3M6 13h3M6 14h3M3 15h3M3 16h3M3 17h3M3 18h3M3 19h3M3 20h3";

break;
case (8):
return "M3 0h6M3 1h6M3 2h6M0 3h3M9 3h3M0 4h3M9 4h3M0 5h3M9 5h3M0 6h3M9 6h3M0 7h3M9 7h3M0 8h3M9 8h3M3 9h6M3 10h6M3 11h6M0 12h3M9 12h3M0 13h3M9 13h3M0 14h3M9 14h3M0 15h3M9 15h3M0 16h3M9 16h3M0 17h3M9 17h3M3 18h6M3 19h6M3 20h6";

break;
case (9):
return "M3 0h6M3 1h6M3 2h6M0 3h3M9 3h3M0 4h3M9 4h3M0 5h3M9 5h3M0 6h3M9 6h3M0 7h3M9 7h3M0 8h3M9 8h3M3 9h9M3 10h9M3 11h9M9 12h3M9 13h3M9 14h3M0 15h3M9 15h3M0 16h3M9 16h3M0 17h3M9 17h3M3 18h6M3 19h6M3 20h6";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19834)].join('')));

}
})()], null)], null);
});
mecca.view.note_guides = (function mecca$view$note_guides(){
var editor_x = (function (){var G__19836 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19836) : re_frame.core.subscribe.call(null,G__19836));
})();
return ((function (editor_x){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (editor_x){
return (function mecca$view$note_guides_$_iter__19837(s__19838){
return (new cljs.core.LazySeq(null,((function (editor_x){
return (function (){
var s__19838__$1 = s__19838;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19838__$1);
if(temp__5457__auto__){
var s__19838__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19838__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19838__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19840 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19839 = (0);
while(true){
if((i__19839 < size__4323__auto__)){
var beat = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19839);
cljs.core.chunk_append(b__19840,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(beat,(4))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.bar_number,(beat / (4)),((296) + ((120) * cljs.core.mod(beat,(8)))),(64),0.05], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((14) + ((6) * cljs.core.mod(beat,(8)))),cljs.core.cst$kw$x2,((14) + ((6) * cljs.core.mod(beat,(8)))),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((14) + ((6) * cljs.core.mod(beat,(8)))),cljs.core.cst$kw$x2,((14) + ((6) * cljs.core.mod(beat,(8)))),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.075,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)));

var G__19841 = (i__19839 + (1));
i__19839 = G__19841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19840),mecca$view$note_guides_$_iter__19837(cljs.core.chunk_rest(s__19838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19840),null);
}
} else {
var beat = cljs.core.first(s__19838__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(beat,(4))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.bar_number,(beat / (4)),((296) + ((120) * cljs.core.mod(beat,(8)))),(64),0.05], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((14) + ((6) * cljs.core.mod(beat,(8)))),cljs.core.cst$kw$x2,((14) + ((6) * cljs.core.mod(beat,(8)))),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((14) + ((6) * cljs.core.mod(beat,(8)))),cljs.core.cst$kw$x2,((14) + ((6) * cljs.core.mod(beat,(8)))),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.075,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)),mecca$view$note_guides_$_iter__19837(cljs.core.rest(s__19838__$2)));
}
} else {
return null;
}
break;
}
});})(editor_x))
,null,null));
});})(editor_x))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(editor_x),((8) + cljs.core.deref(editor_x)),0.5));
})());
});
;})(editor_x))
});
mecca.view.note_targets = (function mecca$view$note_targets(){
var instrument = (function (){var G__19842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19842) : re_frame.core.subscribe.call(null,G__19842));
})();
var editor_x = (function (){var G__19843 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19843) : re_frame.core.subscribe.call(null,G__19843));
})();
return ((function (instrument,editor_x){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (instrument,editor_x){
return (function mecca$view$note_targets_$_iter__19844(s__19845){
return (new cljs.core.LazySeq(null,((function (instrument,editor_x){
return (function (){
var s__19845__$1 = s__19845;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19845__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var time = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__19845__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function mecca$view$note_targets_$_iter__19844_$_iter__19846(s__19847){
return (new cljs.core.LazySeq(null,((function (s__19845__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var s__19847__$1 = s__19847;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__19847__$1);
if(temp__5457__auto____$1){
var s__19847__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19847__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19847__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19849 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19848 = (0);
while(true){
if((i__19848 < size__4323__auto__)){
var pitch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19848);
cljs.core.chunk_append(b__19849,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + pitch),"black","translate(6.5,4)",((function (i__19848,s__19845__$1,pitch,c__4322__auto__,size__4323__auto__,b__19849,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19850) : re_frame.core.dispatch.call(null,G__19850));
});})(i__19848,s__19845__$1,pitch,c__4322__auto__,size__4323__auto__,b__19849,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,"gray",(3),((function (i__19848,s__19845__$1,pitch,c__4322__auto__,size__4323__auto__,b__19849,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19851 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),(pitch + (7))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19851) : re_frame.core.dispatch.call(null,G__19851));
});})(i__19848,s__19845__$1,pitch,c__4322__auto__,size__4323__auto__,b__19849,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,0.2,0.2,((function (i__19848,s__19845__$1,pitch,c__4322__auto__,size__4323__auto__,b__19849,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19852) : re_frame.core.dispatch.call(null,G__19852));
});})(i__19848,s__19845__$1,pitch,c__4322__auto__,size__4323__auto__,b__19849,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,((6) * time),"all","visible",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__19856 = (i__19848 + (1));
i__19848 = G__19856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19849),mecca$view$note_targets_$_iter__19844_$_iter__19846(cljs.core.chunk_rest(s__19847__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19849),null);
}
} else {
var pitch = cljs.core.first(s__19847__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + pitch),"black","translate(6.5,4)",((function (s__19845__$1,pitch,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19853) : re_frame.core.dispatch.call(null,G__19853));
});})(s__19845__$1,pitch,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,"gray",(3),((function (s__19845__$1,pitch,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19854 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),(pitch + (7))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19854) : re_frame.core.dispatch.call(null,G__19854));
});})(s__19845__$1,pitch,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,0.2,0.2,((function (s__19845__$1,pitch,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19855) : re_frame.core.dispatch.call(null,G__19855));
});})(s__19845__$1,pitch,s__19847__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,((6) * time),"all","visible",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$note_targets_$_iter__19844_$_iter__19846(cljs.core.rest(s__19847__$2)));
}
} else {
return null;
}
break;
}
});})(s__19845__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,null,null));
});})(s__19845__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((15))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$note_targets_$_iter__19844(cljs.core.rest(s__19845__$1)));
} else {
var G__19857 = cljs.core.rest(s__19845__$1);
s__19845__$1 = G__19857;
continue;
}
} else {
return null;
}
break;
}
});})(instrument,editor_x))
,null,null));
});})(instrument,editor_x))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(editor_x),((8) + cljs.core.deref(editor_x)),0.5));
})());
});
;})(instrument,editor_x))
});
mecca.view.editor = (function mecca$view$editor(){
var instruments = (function (){var G__19858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19858) : re_frame.core.subscribe.call(null,G__19858));
})();
var focused = (function (){var G__19859 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19859) : re_frame.core.subscribe.call(null,G__19859));
})();
var current_position = (function (){var G__19860 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19860) : re_frame.core.subscribe.call(null,G__19860));
})();
var editor_x = (function (){var G__19861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19861) : re_frame.core.subscribe.call(null,G__19861));
})();
var playing_QMARK_ = (function (){var G__19862 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19862) : re_frame.core.subscribe.call(null,G__19862));
})();
var mario_run = (function (){var G__19863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19863) : re_frame.core.subscribe.call(null,G__19863));
})();
var mario_jump = (function (){var G__19864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19864) : re_frame.core.subscribe.call(null,G__19864));
})();
var instrument = (function (){var G__19865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19865) : re_frame.core.subscribe.call(null,G__19865));
})();
return ((function (instruments,focused,current_position,editor_x,playing_QMARK_,mario_run,mario_jump,instrument){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__19866_19881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19866_19881) : re_frame.core.dispatch.call(null,G__19866_19881));
} else {
}

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 35"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_face,(363),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_face,(348),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.current_note_display,(47),(0),0.22], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.note_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.2,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(20),cljs.core.cst$kw$width,63.5,cljs.core.cst$kw$x,0.25,cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(0,13.5) scale(1)",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)))?"url(./images/hand.png),crosshair":"none")], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.staff_lines], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(editor_x)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.retract_editor,(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.bar_line,32.7], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.bar_line,31.5], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.treble_clef,2.65,6.3], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.advance_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.bar_line,(59)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_guides], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)))?null:(function (){var vec__19867 = cljs.core.deref(focused);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19867,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19867,(1),null);
var G__19870 = cljs.core.deref(instrument);
switch (G__19870) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_icon,((2) + ((30) * x)),(((5) * y) + (14)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * x)),(((5) * y) + (18)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * x)),(((5) * y) + (16)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * x)),(((5) * y) + (17)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * x)),(((5) * y) + (16)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * x)),(((5) * y) + (18)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * x)),(((5) * y) + (18)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * x)),(((5) * y) + (18)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * x)),(((5) * y) + (18)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * x)),(((5) * y) + (16)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * x)),(((5) * y) + (17)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * x)),(((5) * y) + (20)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * x)),(((5) * y) + (18)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * x)),(((5) * y) + (19)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * x)),(((5) * y) + (19)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19870)].join('')));

}
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (instruments,focused,current_position,editor_x,playing_QMARK_,mario_run,mario_jump,instrument){
return (function mecca$view$editor_$_iter__19871(s__19872){
return (new cljs.core.LazySeq(null,((function (instruments,focused,current_position,editor_x,playing_QMARK_,mario_run,mario_jump,instrument){
return (function (){
var s__19872__$1 = s__19872;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19872__$1);
if(temp__5457__auto__){
var s__19872__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19872__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19872__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19874 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19873 = (0);
while(true){
if((i__19873 < size__4323__auto__)){
var map__19875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19873);
var map__19875__$1 = ((((!((map__19875 == null)))?(((((map__19875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19875):map__19875);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19875__$1,cljs.core.cst$kw$time);
var instrument__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19875__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19875__$1,cljs.core.cst$kw$pitch);
if((((cljs.core.deref(editor_x) <= time)) && ((time <= ((16) + cljs.core.deref(editor_x)))))){
cljs.core.chunk_append(b__19874,(function (){var G__19877 = instrument__$1;
switch (G__19877) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * time)),(((5) * ((77) - pitch)) - (21)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (18)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (18)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (15)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (16)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (16)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19877)].join('')));

}
})());

var G__19884 = (i__19873 + (1));
i__19873 = G__19884;
continue;
} else {
var G__19885 = (i__19873 + (1));
i__19873 = G__19885;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19874),mecca$view$editor_$_iter__19871(cljs.core.chunk_rest(s__19872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19874),null);
}
} else {
var map__19878 = cljs.core.first(s__19872__$2);
var map__19878__$1 = ((((!((map__19878 == null)))?(((((map__19878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19878):map__19878);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19878__$1,cljs.core.cst$kw$time);
var instrument__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19878__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19878__$1,cljs.core.cst$kw$pitch);
if((((cljs.core.deref(editor_x) <= time)) && ((time <= ((16) + cljs.core.deref(editor_x)))))){
return cljs.core.cons((function (){var G__19880 = instrument__$1;
switch (G__19880) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * time)),(((5) * ((77) - pitch)) - (21)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (18)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (18)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (15)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (16)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * time)),(((5) * ((77) - pitch)) - (16)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19880)].join('')));

}
})(),mecca$view$editor_$_iter__19871(cljs.core.rest(s__19872__$2)));
} else {
var G__19887 = cljs.core.rest(s__19872__$2);
s__19872__$1 = G__19887;
continue;
}
}
} else {
return null;
}
break;
}
});})(instruments,focused,current_position,editor_x,playing_QMARK_,mario_run,mario_jump,instrument))
,null,null));
});})(instruments,focused,current_position,editor_x,playing_QMARK_,mario_run,mario_jump,instrument))
;
return iter__4324__auto__(cljs.core.deref(instruments));
})())], null)], null);
});
;})(instruments,focused,current_position,editor_x,playing_QMARK_,mario_run,mario_jump,instrument))
});
mecca.view.debug_info = (function mecca$view$debug_info(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19888) : re_frame.core.subscribe.call(null,G__19888));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Notes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19889) : re_frame.core.subscribe.call(null,G__19889));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19890 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19890) : re_frame.core.subscribe.call(null,G__19890));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario jump: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19891) : re_frame.core.subscribe.call(null,G__19891));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Instrument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19892) : re_frame.core.subscribe.call(null,G__19892));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,(function (){var mouse_pos = (function (){var G__19893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19893) : re_frame.core.subscribe.call(null,G__19893));
})();
return ["Beat: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(mouse_pos)))," Pitch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.deref(mouse_pos)))].join('');
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19894) : re_frame.core.subscribe.call(null,G__19894));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19895 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19895) : re_frame.core.subscribe.call(null,G__19895));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19896) : re_frame.core.subscribe.call(null,G__19896));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.controls], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});
