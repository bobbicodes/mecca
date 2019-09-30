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
mecca.view.note_guides = (function mecca$view$note_guides(){
var editor_x = (function (){var G__19929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19929) : re_frame.core.subscribe.call(null,G__19929));
})();
return ((function (editor_x){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (editor_x){
return (function mecca$view$note_guides_$_iter__19930(s__19931){
return (new cljs.core.LazySeq(null,((function (editor_x){
return (function (){
var s__19931__$1 = s__19931;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19931__$1);
if(temp__5457__auto__){
var s__19931__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19931__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19931__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19933 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19932 = (0);
while(true){
if((i__19932 < size__4323__auto__)){
var beat = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19932);
cljs.core.chunk_append(b__19933,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__19934 = cljs.core.deref(editor_x);
switch (G__19934) {
case (1):
return (1);

break;
case 1.5:
return 0.5;

break;
default:
return (0);

}
})(),cljs.core.mod(beat,(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((8) + ((6) * beat)),cljs.core.cst$kw$x2,((8) + ((6) * beat)),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((8) + ((6) * beat)),cljs.core.cst$kw$x2,((8) + ((6) * beat)),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.075,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)));

var G__19938 = (i__19932 + (1));
i__19932 = G__19938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19933),mecca$view$note_guides_$_iter__19930(cljs.core.chunk_rest(s__19931__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19933),null);
}
} else {
var beat = cljs.core.first(s__19931__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__19935 = cljs.core.deref(editor_x);
switch (G__19935) {
case (1):
return (1);

break;
case 1.5:
return 0.5;

break;
default:
return (0);

}
})(),cljs.core.mod(beat,(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((8) + ((6) * beat)),cljs.core.cst$kw$x2,((8) + ((6) * beat)),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((8) + ((6) * beat)),cljs.core.cst$kw$x2,((8) + ((6) * beat)),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.075,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)),mecca$view$note_guides_$_iter__19930(cljs.core.rest(s__19931__$2)));
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
return iter__4324__auto__((function (){var G__19936 = cljs.core.deref(editor_x);
switch (G__19936) {
case (1):
return cljs.core.range.cljs$core$IFn$_invoke$arity$3((1),(9),0.5);

break;
case 1.5:
return cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.5,(9),0.5);

break;
default:
return cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(9),0.5);

}
})());
})());
});
;})(editor_x))
});
mecca.view.note_targets = (function mecca$view$note_targets(){
var instrument = (function (){var G__19941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19941) : re_frame.core.subscribe.call(null,G__19941));
})();
var editor_x = (function (){var G__19942 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19942) : re_frame.core.subscribe.call(null,G__19942));
})();
return ((function (instrument,editor_x){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (instrument,editor_x){
return (function mecca$view$note_targets_$_iter__19943(s__19944){
return (new cljs.core.LazySeq(null,((function (instrument,editor_x){
return (function (){
var s__19944__$1 = s__19944;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19944__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var time = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__19944__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function mecca$view$note_targets_$_iter__19943_$_iter__19945(s__19946){
return (new cljs.core.LazySeq(null,((function (s__19944__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var s__19946__$1 = s__19946;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__19946__$1);
if(temp__5457__auto____$1){
var s__19946__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19946__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19946__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19948 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19947 = (0);
while(true){
if((i__19947 < size__4323__auto__)){
var pitch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19947);
cljs.core.chunk_append(b__19948,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + pitch),"black","translate(6.5,4)",((function (i__19947,s__19944__$1,pitch,c__4322__auto__,size__4323__auto__,b__19948,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19949) : re_frame.core.dispatch.call(null,G__19949));
});})(i__19947,s__19944__$1,pitch,c__4322__auto__,size__4323__auto__,b__19948,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,"gray",(3),((function (i__19947,s__19944__$1,pitch,c__4322__auto__,size__4323__auto__,b__19948,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19950 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),(pitch + (7))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19950) : re_frame.core.dispatch.call(null,G__19950));
});})(i__19947,s__19944__$1,pitch,c__4322__auto__,size__4323__auto__,b__19948,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,0.2,0.2,((function (i__19947,s__19944__$1,pitch,c__4322__auto__,size__4323__auto__,b__19948,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19951 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19951) : re_frame.core.dispatch.call(null,G__19951));
});})(i__19947,s__19944__$1,pitch,c__4322__auto__,size__4323__auto__,b__19948,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__19956 = (i__19947 + (1));
i__19947 = G__19956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19948),mecca$view$note_targets_$_iter__19943_$_iter__19945(cljs.core.chunk_rest(s__19946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19948),null);
}
} else {
var pitch = cljs.core.first(s__19946__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(0.5 + pitch),"black","translate(6.5,4)",((function (s__19944__$1,pitch,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19952) : re_frame.core.dispatch.call(null,G__19952));
});})(s__19944__$1,pitch,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,"gray",(3),((function (s__19944__$1,pitch,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19953 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),(pitch + (7))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19953) : re_frame.core.dispatch.call(null,G__19953));
});})(s__19944__$1,pitch,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,0.2,0.2,((function (s__19944__$1,pitch,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x){
return (function (){
var G__19954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19954) : re_frame.core.dispatch.call(null,G__19954));
});})(s__19944__$1,pitch,s__19946__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$note_targets_$_iter__19943_$_iter__19945(cljs.core.rest(s__19946__$2)));
}
} else {
return null;
}
break;
}
});})(s__19944__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
,null,null));
});})(s__19944__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((15))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$note_targets_$_iter__19943(cljs.core.rest(s__19944__$1)));
} else {
var G__19957 = cljs.core.rest(s__19944__$1);
s__19944__$1 = G__19957;
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
return iter__4324__auto__((function (){var G__19955 = cljs.core.deref(editor_x);
switch (G__19955) {
case (1):
return cljs.core.range.cljs$core$IFn$_invoke$arity$3((1),(9),0.5);

break;
case 1.5:
return cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.5,(9),0.5);

break;
default:
return cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(9),0.5);

}
})());
})());
});
;})(instrument,editor_x))
});
mecca.view.editor = (function mecca$view$editor(){
var instruments = (function (){var G__19959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19959) : re_frame.core.subscribe.call(null,G__19959));
})();
var focused = (function (){var G__19960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19960) : re_frame.core.subscribe.call(null,G__19960));
})();
var current_position = (function (){var G__19961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19961) : re_frame.core.subscribe.call(null,G__19961));
})();
var editor_x = (function (){var G__19962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19962) : re_frame.core.subscribe.call(null,G__19962));
})();
var play_start = (function (){var G__19963 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19963) : re_frame.core.subscribe.call(null,G__19963));
})();
var mario_run = (function (){var G__19964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19964) : re_frame.core.subscribe.call(null,G__19964));
})();
var mario_jump = (function (){var G__19965 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19965) : re_frame.core.subscribe.call(null,G__19965));
})();
var instrument = (function (){var G__19966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19966) : re_frame.core.subscribe.call(null,G__19966));
})();
return ((function (instruments,focused,current_position,editor_x,play_start,mario_run,mario_jump,instrument){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__19967_19984 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19967_19984) : re_frame.core.dispatch.call(null,G__19967_19984));
} else {
}

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 35"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_face,(363),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_face,(348),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_sm], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.current_note_display,(47),(0),0.22], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.note_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.2,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(20),cljs.core.cst$kw$width,63.5,cljs.core.cst$kw$x,0.25,cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(0,13.5) scale(1)",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"url(./images/hand.png),crosshair"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.staff_lines], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(editor_x)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.bar_line,-1.68], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.bar_line,32.7], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.retract_editor,(2)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_clefs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.treble_clef,(2.65 - ((2) * (cljs.core.deref(editor_x) - (1)))),6.3], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.advance_editor], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.bar_line,((59) - ((6) * (cljs.core.deref(editor_x) - (1))))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_guides], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)))?null:(function (){var vec__19968 = cljs.core.deref(focused);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19968,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19968,(1),null);
var G__19971 = cljs.core.deref(instrument);
switch (G__19971) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19971)].join('')));

}
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (instruments,focused,current_position,editor_x,play_start,mario_run,mario_jump,instrument){
return (function mecca$view$editor_$_iter__19972(s__19973){
return (new cljs.core.LazySeq(null,((function (instruments,focused,current_position,editor_x,play_start,mario_run,mario_jump,instrument){
return (function (){
var s__19973__$1 = s__19973;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__19973__$1);
if(temp__5457__auto__){
var s__19973__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19973__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__19973__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__19975 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__19974 = (0);
while(true){
if((i__19974 < size__4323__auto__)){
var map__19976 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__19974);
var map__19976__$1 = ((((!((map__19976 == null)))?(((((map__19976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19976):map__19976);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19976__$1,cljs.core.cst$kw$time);
var instrument__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19976__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19976__$1,cljs.core.cst$kw$pitch);
if(cljs.core.truth_((function (){var G__19978 = cljs.core.deref(editor_x);
switch (G__19978) {
case (1):
return ((((1) <= time)) && ((time <= (16))));

break;
case 1.5:
return ((((1) <= time)) && ((time <= 16.5)));

break;
case (2):
return ((((1) <= time)) && ((time <= (17))));

break;
case 2.5:
return ((((1) <= time)) && ((time <= 17.5)));

break;
case (3):
return ((((1) <= time)) && ((time <= (18))));

break;
case 3.5:
return (((1.5 <= time)) && ((time <= 18.5)));

break;
default:
return ((((cljs.core.deref(editor_x) - (2)) <= time)) && ((time <= ((16) + (cljs.core.deref(editor_x) - (1))))));

}
})())){
cljs.core.chunk_append(b__19975,(function (){var x = (time - (cljs.core.deref(editor_x) - (1)));
var G__19979 = instrument__$1;
switch (G__19979) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * ((77) - pitch)) - (21)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (18)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (18)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (15)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (16)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (16)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19979)].join('')));

}
})());

var G__19988 = (i__19974 + (1));
i__19974 = G__19988;
continue;
} else {
var G__19989 = (i__19974 + (1));
i__19974 = G__19989;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19975),mecca$view$editor_$_iter__19972(cljs.core.chunk_rest(s__19973__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19975),null);
}
} else {
var map__19980 = cljs.core.first(s__19973__$2);
var map__19980__$1 = ((((!((map__19980 == null)))?(((((map__19980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19980):map__19980);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19980__$1,cljs.core.cst$kw$time);
var instrument__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19980__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19980__$1,cljs.core.cst$kw$pitch);
if(cljs.core.truth_((function (){var G__19982 = cljs.core.deref(editor_x);
switch (G__19982) {
case (1):
return ((((1) <= time)) && ((time <= (16))));

break;
case 1.5:
return ((((1) <= time)) && ((time <= 16.5)));

break;
case (2):
return ((((1) <= time)) && ((time <= (17))));

break;
case 2.5:
return ((((1) <= time)) && ((time <= 17.5)));

break;
case (3):
return ((((1) <= time)) && ((time <= (18))));

break;
case 3.5:
return (((1.5 <= time)) && ((time <= 18.5)));

break;
default:
return ((((cljs.core.deref(editor_x) - (2)) <= time)) && ((time <= ((16) + (cljs.core.deref(editor_x) - (1))))));

}
})())){
return cljs.core.cons((function (){var x = (time - (cljs.core.deref(editor_x) - (1)));
var G__19983 = instrument__$1;
switch (G__19983) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * ((77) - pitch)) - (21)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (18)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (19)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (18)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (15)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (17)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (16)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * x)),(((5) * ((77) - pitch)) - (16)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19983)].join('')));

}
})(),mecca$view$editor_$_iter__19972(cljs.core.rest(s__19973__$2)));
} else {
var G__19992 = cljs.core.rest(s__19973__$2);
s__19973__$1 = G__19992;
continue;
}
}
} else {
return null;
}
break;
}
});})(instruments,focused,current_position,editor_x,play_start,mario_run,mario_jump,instrument))
,null,null));
});})(instruments,focused,current_position,editor_x,play_start,mario_run,mario_jump,instrument))
;
return iter__4324__auto__(cljs.core.deref(instruments));
})())], null)], null);
});
;})(instruments,focused,current_position,editor_x,play_start,mario_run,mario_jump,instrument))
});
mecca.view.debug_info = (function mecca$view$debug_info(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Absolute time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19993) : re_frame.core.subscribe.call(null,G__19993));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Notes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instruments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19994) : re_frame.core.subscribe.call(null,G__19994));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19995 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19995) : re_frame.core.subscribe.call(null,G__19995));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario jump: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19996 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19996) : re_frame.core.subscribe.call(null,G__19996));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Instrument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19997) : re_frame.core.subscribe.call(null,G__19997));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,(function (){var mouse_pos = (function (){var G__19998 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19998) : re_frame.core.subscribe.call(null,G__19998));
})();
return ["Beat: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(mouse_pos)))," Pitch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.deref(mouse_pos)))].join('');
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__19999 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__19999) : re_frame.core.subscribe.call(null,G__19999));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20000) : re_frame.core.subscribe.call(null,G__20000));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__20001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20001) : re_frame.core.subscribe.call(null,G__20001));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.controls], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});
