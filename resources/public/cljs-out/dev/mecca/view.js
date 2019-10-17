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
goog.require('mecca.transport');
goog.require('mecca.editor');
goog.require('mecca.xml');
goog.require('mecca.mario');
goog.require('cljs.reader');
mecca.view.note_guides = (function mecca$view$note_guides(){
var editor_x = (function (){var G__15587 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15587) : re_frame.core.subscribe.call(null,G__15587));
})();
return ((function (editor_x){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (editor_x){
return (function mecca$view$note_guides_$_iter__15588(s__15589){
return (new cljs.core.LazySeq(null,((function (editor_x){
return (function (){
var s__15589__$1 = s__15589;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__15589__$1);
if(temp__5457__auto__){
var s__15589__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15589__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__15589__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__15591 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__15590 = (0);
while(true){
if((i__15590 < size__4323__auto__)){
var beat = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__15590);
cljs.core.chunk_append(b__15591,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(((cljs.core.deref(editor_x) - (1)) + beat),(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((8) + ((6) * beat)),cljs.core.cst$kw$x2,((8) + ((6) * beat)),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((8) + ((6) * beat)),cljs.core.cst$kw$x2,((8) + ((6) * beat)),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.075,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)));

var G__15592 = (i__15590 + (1));
i__15590 = G__15592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15591),mecca$view$note_guides_$_iter__15588(cljs.core.chunk_rest(s__15589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15591),null);
}
} else {
var beat = cljs.core.first(s__15589__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(((cljs.core.deref(editor_x) - (1)) + beat),(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((8) + ((6) * beat)),cljs.core.cst$kw$x2,((8) + ((6) * beat)),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"orange",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$x1,((8) + ((6) * beat)),cljs.core.cst$kw$x2,((8) + ((6) * beat)),cljs.core.cst$kw$y1,(4),cljs.core.cst$kw$y2,(21),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.075,cljs.core.cst$kw$stroke_DASH_dasharray,0.5], null)], null)),mecca$view$note_guides_$_iter__15588(cljs.core.rest(s__15589__$2)));
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
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(9),0.5));
})());
});
;})(editor_x))
});
mecca.view.note_targets = (function mecca$view$note_targets(){
var instrument = (function (){var G__15593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15593) : re_frame.core.subscribe.call(null,G__15593));
})();
var editor_x = (function (){var G__15594 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15594) : re_frame.core.subscribe.call(null,G__15594));
})();
var sharp_QMARK_ = (function (){var G__15595 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15595) : re_frame.core.subscribe.call(null,G__15595));
})();
return ((function (instrument,editor_x,sharp_QMARK_){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (instrument,editor_x,sharp_QMARK_){
return (function mecca$view$note_targets_$_iter__15596(s__15597){
return (new cljs.core.LazySeq(null,((function (instrument,editor_x,sharp_QMARK_){
return (function (){
var s__15597__$1 = s__15597;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__15597__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var time = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__15597__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function mecca$view$note_targets_$_iter__15596_$_iter__15598(s__15599){
return (new cljs.core.LazySeq(null,((function (s__15597__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var s__15599__$1 = s__15599;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__15599__$1);
if(temp__5457__auto____$1){
var s__15599__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15599__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__15599__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__15601 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__15600 = (0);
while(true){
if((i__15600 < size__4323__auto__)){
var pitch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__15600);
cljs.core.chunk_append(b__15601,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(pitch - (1)),"black","translate(6.5,4)",((function (i__15600,s__15597__$1,pitch,c__4322__auto__,size__4323__auto__,b__15601,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__15602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15602) : re_frame.core.dispatch.call(null,G__15602));
});})(i__15600,s__15597__$1,pitch,c__4322__auto__,size__4323__auto__,b__15601,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))
,"gray",(3),(function (){var pitches = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55)], null);
if(cljs.core.truth_(cljs.core.deref((function (){var G__15603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eraser_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15603) : re_frame.core.subscribe.call(null,G__15603));
})()))){
return ((function (i__15600,s__15597__$1,pitches,pitch,c__4322__auto__,size__4323__auto__,b__15601,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
mecca.music.play_sample((18),(63));

var G__15604 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_note,(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15604) : re_frame.core.dispatch.call(null,G__15604));
});
;})(i__15600,s__15597__$1,pitches,pitch,c__4322__auto__,size__4323__auto__,b__15601,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))
} else {
if(cljs.core.truth_(cljs.core.deref((function (){var G__15605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repeat_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15605) : re_frame.core.subscribe.call(null,G__15605));
})()))){
return ((function (i__15600,s__15597__$1,pitches,pitch,c__4322__auto__,size__4323__auto__,b__15601,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__15606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_loop_DASH_end,time], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15606) : re_frame.core.dispatch.call(null,G__15606));
});
;})(i__15600,s__15597__$1,pitches,pitch,c__4322__auto__,size__4323__auto__,b__15601,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))
} else {
return ((function (i__15600,s__15597__$1,pitches,pitch,c__4322__auto__,size__4323__auto__,b__15601,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__15607 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15607) : re_frame.core.dispatch.call(null,G__15607));
});
;})(i__15600,s__15597__$1,pitches,pitch,c__4322__auto__,size__4323__auto__,b__15601,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))

}
}
})(),0.2,0.2,((function (i__15600,s__15597__$1,pitch,c__4322__auto__,size__4323__auto__,b__15601,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
if(cljs.core.not((function (){var and__3938__auto__ = cljs.core.deref(sharp_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(12))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(15))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(8))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(0))));
} else {
return and__3938__auto__;
}
})())){
var G__15608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15608) : re_frame.core.dispatch.call(null,G__15608));
} else {
return null;
}
});})(i__15600,s__15597__$1,pitch,c__4322__auto__,size__4323__auto__,b__15601,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__15616 = (i__15600 + (1));
i__15600 = G__15616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15601),mecca$view$note_targets_$_iter__15596_$_iter__15598(cljs.core.chunk_rest(s__15599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15601),null);
}
} else {
var pitch = cljs.core.first(s__15599__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$transform,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$opacity,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(pitch - (1)),"black","translate(6.5,4)",((function (s__15597__$1,pitch,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__15609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15609) : re_frame.core.dispatch.call(null,G__15609));
});})(s__15597__$1,pitch,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))
,"gray",(3),(function (){var pitches = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55)], null);
if(cljs.core.truth_(cljs.core.deref((function (){var G__15610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eraser_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15610) : re_frame.core.subscribe.call(null,G__15610));
})()))){
return ((function (s__15597__$1,pitches,pitch,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
mecca.music.play_sample((18),(63));

var G__15611 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remove_DASH_note,(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15611) : re_frame.core.dispatch.call(null,G__15611));
});
;})(s__15597__$1,pitches,pitch,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))
} else {
if(cljs.core.truth_(cljs.core.deref((function (){var G__15612 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repeat_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15612) : re_frame.core.subscribe.call(null,G__15612));
})()))){
return ((function (s__15597__$1,pitches,pitch,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__15613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_loop_DASH_end,time], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15613) : re_frame.core.dispatch.call(null,G__15613));
});
;})(s__15597__$1,pitches,pitch,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))
} else {
return ((function (s__15597__$1,pitches,pitch,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__15614 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_note,cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15614) : re_frame.core.dispatch.call(null,G__15614));
});
;})(s__15597__$1,pitches,pitch,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))

}
}
})(),0.2,0.2,((function (s__15597__$1,pitch,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
if(cljs.core.not((function (){var and__3938__auto__ = cljs.core.deref(sharp_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(12))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(15))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(8))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(0))));
} else {
return and__3938__auto__;
}
})())){
var G__15615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_focus_DASH_note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15615) : re_frame.core.dispatch.call(null,G__15615));
} else {
return null;
}
});})(s__15597__$1,pitch,s__15599__$2,temp__5457__auto____$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$note_targets_$_iter__15596_$_iter__15598(cljs.core.rest(s__15599__$2)));
}
} else {
return null;
}
break;
}
});})(s__15597__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))
,null,null));
});})(s__15597__$1,time,xs__6012__auto__,temp__5457__auto__,instrument,editor_x,sharp_QMARK_))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((18))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$view$note_targets_$_iter__15596(cljs.core.rest(s__15597__$1)));
} else {
var G__15617 = cljs.core.rest(s__15597__$1);
s__15597__$1 = G__15617;
continue;
}
} else {
return null;
}
break;
}
});})(instrument,editor_x,sharp_QMARK_))
,null,null));
});})(instrument,editor_x,sharp_QMARK_))
;
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(9),0.5));
})());
});
;})(instrument,editor_x,sharp_QMARK_))
});
mecca.view.note_cursor = (function mecca$view$note_cursor(){
var focused = (function (){var G__15618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15618) : re_frame.core.subscribe.call(null,G__15618));
})();
var instrument = (function (){var G__15619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15619) : re_frame.core.subscribe.call(null,G__15619));
})();
var sharp_QMARK_ = (function (){var G__15620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sharp_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15620) : re_frame.core.subscribe.call(null,G__15620));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null))){
return null;
} else {
var x = cljs.core.first(cljs.core.deref(focused));
var y = cljs.core.last(cljs.core.deref(focused));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,(cljs.core.truth_(cljs.core.deref(sharp_QMARK_))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * y)),0.07):null),(cljs.core.truth_(cljs.core.deref((function (){var G__15621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eraser_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15621) : re_frame.core.subscribe.call(null,G__15621));
})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.eraser_cursor,((36) + ((30) * x)),(((5) * y) + (20)),0.2], null):(cljs.core.truth_(cljs.core.deref((function (){var G__15622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repeat_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15622) : re_frame.core.subscribe.call(null,G__15622));
})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.repeat_sign,((7) + ((6) * x)),(8),0.13], null):(function (){var G__15623 = cljs.core.deref(instrument);
switch (G__15623) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_icon,((2) + ((30) * x)),(((5) * y) + (9)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * x)),(((5) * y) + (12)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * x)),(((5) * y) + (10)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * x)),(((5) * y) + (10)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * x)),(((5) * y) + (10)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * x)),(((5) * y) + (10)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * x)),(((5) * y) + (10)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * x)),(((5) * y) + (10)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * x)),(((5) * y) + (10)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * x)),(((5) * y) + (10)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * x)),(((5) * y) + (10)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * x)),(((5) * y) + (15)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * x)),(((5) * y) + (12)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * x)),(((5) * y) + (12)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * x)),(((5) * y) + (15)),0.2], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15623)].join('')));

}
})()
))], null);
}
});
mecca.view.score_notes = (function mecca$view$score_notes(){
var notes = (function (){var G__15625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15625) : re_frame.core.subscribe.call(null,G__15625));
})();
var editor_x = (function (){var G__15626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15626) : re_frame.core.subscribe.call(null,G__15626));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null),(function (){var iter__4324__auto__ = ((function (notes,editor_x){
return (function mecca$view$score_notes_$_iter__15627(s__15628){
return (new cljs.core.LazySeq(null,((function (notes,editor_x){
return (function (){
var s__15628__$1 = s__15628;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__15628__$1);
if(temp__5457__auto__){
var s__15628__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15628__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__15628__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__15630 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__15629 = (0);
while(true){
if((i__15629 < size__4323__auto__)){
var map__15631 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__15629);
var map__15631__$1 = ((((!((map__15631 == null)))?(((((map__15631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15631):map__15631);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15631__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15631__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15631__$1,cljs.core.cst$kw$pitch);
if(((((cljs.core.deref(editor_x) - (1)) <= time)) && ((time <= ((16) + (cljs.core.deref(editor_x) - (1))))))){
cljs.core.chunk_append(b__15630,(function (){var x = (time - (cljs.core.deref(editor_x) - (1)));
var pitch_map = cljs.core.zipmap(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((18)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch)))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1))))),0.07):null),(function (){var G__15633 = instrument;
switch (G__15633) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

}
})()], null);
})());

var G__15638 = (i__15629 + (1));
i__15629 = G__15638;
continue;
} else {
var G__15639 = (i__15629 + (1));
i__15629 = G__15639;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15630),mecca$view$score_notes_$_iter__15627(cljs.core.chunk_rest(s__15628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15630),null);
}
} else {
var map__15634 = cljs.core.first(s__15628__$2);
var map__15634__$1 = ((((!((map__15634 == null)))?(((((map__15634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15634):map__15634);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15634__$1,cljs.core.cst$kw$time);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15634__$1,cljs.core.cst$kw$instrument);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15634__$1,cljs.core.cst$kw$pitch);
if(((((cljs.core.deref(editor_x) - (1)) <= time)) && ((time <= ((16) + (cljs.core.deref(editor_x) - (1))))))){
return cljs.core.cons((function (){var x = (time - (cljs.core.deref(editor_x) - (1)));
var pitch_map = cljs.core.zipmap(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((18)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch)))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1))))),0.07):null),(function (){var G__15636 = instrument;
switch (G__15636) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

}
})()], null);
})(),mecca$view$score_notes_$_iter__15627(cljs.core.rest(s__15628__$2)));
} else {
var G__15641 = cljs.core.rest(s__15628__$2);
s__15628__$1 = G__15641;
continue;
}
}
} else {
return null;
}
break;
}
});})(notes,editor_x))
,null,null));
});})(notes,editor_x))
;
return iter__4324__auto__(cljs.core.deref(notes));
})());
});
mecca.view.editor = (function mecca$view$editor(){
var notes = (function (){var G__15642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15642) : re_frame.core.subscribe.call(null,G__15642));
})();
var focused = (function (){var G__15643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15643) : re_frame.core.subscribe.call(null,G__15643));
})();
var current_position = (function (){var G__15644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15644) : re_frame.core.subscribe.call(null,G__15644));
})();
var editor_x = (function (){var G__15645 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15645) : re_frame.core.subscribe.call(null,G__15645));
})();
var play_start = (function (){var G__15646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15646) : re_frame.core.subscribe.call(null,G__15646));
})();
var mario_run = (function (){var G__15647 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15647) : re_frame.core.subscribe.call(null,G__15647));
})();
var mario_jump = (function (){var G__15648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_jump], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15648) : re_frame.core.subscribe.call(null,G__15648));
})();
var instrument = (function (){var G__15649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instrument], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15649) : re_frame.core.subscribe.call(null,G__15649));
})();
return ((function (notes,focused,current_position,editor_x,play_start,mario_run,mario_jump,instrument){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__15650_15653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jump_DASH_reset], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15650_15653) : re_frame.core.dispatch.call(null,G__15650_15653));
} else {
}

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 36"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_face,(363),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_face,(348),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_sm], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.current_note_display,(47),(0),0.22], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.note_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect_SHARP_editorframe,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.2,cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$height,(20),cljs.core.cst$kw$width,63.5,cljs.core.cst$kw$x,0.25,cljs.core.cst$kw$y,14.5], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$staff,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"translate(0,13.5) scale(1)",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"url(/mecca/resources/public/images/hand.png),crosshair"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.staff_lines], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.notation.treble_clef,(0.8 - ((6) * (cljs.core.deref(editor_x) - (1)))),6.3], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.advance_editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_guides], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_cursor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.score_notes], null),(cljs.core.truth_(cljs.core.deref((function (){var G__15651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loop_DASH_end], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15651) : re_frame.core.subscribe.call(null,G__15651));
})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.repeat_sign,((7) + ((6) * cljs.core.deref((function (){var G__15652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loop_DASH_end], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15652) : re_frame.core.subscribe.call(null,G__15652));
})()))),(8),0.13], null):null)], null)], null);
});
;})(notes,focused,current_position,editor_x,play_start,mario_run,mario_jump,instrument))
});
mecca.view.debug_info = (function mecca$view$debug_info(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Play start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15654) : re_frame.core.subscribe.call(null,G__15654));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Song time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(mecca.music.audiocontext).currentTime - cljs.core.deref((function (){var G__15655 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$play_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15655) : re_frame.core.subscribe.call(null,G__15655));
})())))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Song data: "], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),(function (){var iter__4324__auto__ = (function mecca$view$debug_info_$_iter__15656(s__15657){
return (new cljs.core.LazySeq(null,(function (){
var s__15657__$1 = s__15657;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__15657__$1);
if(temp__5457__auto__){
var s__15657__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15657__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__15657__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__15659 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__15658 = (0);
while(true){
if((i__15658 < size__4323__auto__)){
var note = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__15658);
cljs.core.chunk_append(b__15659,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([note], 0)));

var G__15666 = (i__15658 + (1));
i__15658 = G__15666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15659),mecca$view$debug_info_$_iter__15656(cljs.core.chunk_rest(s__15657__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15659),null);
}
} else {
var note = cljs.core.first(s__15657__$2);
return cljs.core.cons(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([note], 0)),mecca$view$debug_info_$_iter__15656(cljs.core.rest(s__15657__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.deref((function (){var G__15660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$notes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15660) : re_frame.core.subscribe.call(null,G__15660));
})()));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mario run: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mario_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15661) : re_frame.core.subscribe.call(null,G__15661));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,(function (){var mouse_pos = (function (){var G__15662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$focused_DASH_note_DASH_pos], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15662) : re_frame.core.subscribe.call(null,G__15662));
})();
return ["Beat: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(mouse_pos)))," Pitch: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.deref(mouse_pos)))].join('');
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15663) : re_frame.core.subscribe.call(null,G__15663));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15664) : re_frame.core.subscribe.call(null,G__15664));
})()))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Editor beat start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__15665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor_DASH_beat_DASH_start], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15665) : re_frame.core.subscribe.call(null,G__15665));
})()))].join('')], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.transport.transport,(140),(0),0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.toolbar,(71),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.debug_info], null)], null);
});
