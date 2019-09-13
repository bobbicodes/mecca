// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.components.editor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.components.notation');
goog.require('mecca.components.key');
mecca.components.editor.tempo_input = (function mecca$components$editor$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"8%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref((function (){var G__13079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13079) : re_frame.core.subscribe.call(null,G__13079));
})()),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

var G__13080 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_tempo,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13080) : re_frame.core.dispatch.call(null,G__13080));
})], null)], null)], null);
});
mecca.components.editor.scroll_cue_left = (function mecca$components$editor$scroll_cue_left(x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$fade,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$x1,x,cljs.core.cst$kw$y1,y,cljs.core.cst$kw$x2,(x - (1)),cljs.core.cst$kw$y2,(y + (1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$x1,(x - (1)),cljs.core.cst$kw$y1,(y + (1)),cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y2,((2) + y)], null)], null)], null);
});
mecca.components.editor.scroll_cue_right = (function mecca$components$editor$scroll_cue_right(x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g$fade,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$x1,x,cljs.core.cst$kw$y1,y,cljs.core.cst$kw$x2,(x + (1)),cljs.core.cst$kw$y2,(y + (1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$x1,(x + (1)),cljs.core.cst$kw$y1,(y + (1)),cljs.core.cst$kw$x2,x,cljs.core.cst$kw$y2,((2) + y)], null)], null)], null);
});
mecca.components.editor.advance_editor = (function mecca$components$editor$advance_editor(){
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(5),((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(mouseover_QMARK_))
,(6),((function (mouseover_QMARK_){
return (function (){
var G__13081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$advance_DASH_editor], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13081) : re_frame.core.dispatch.call(null,G__13081));
});})(mouseover_QMARK_))
,((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(mouseover_QMARK_))
,(58),"all","hidden",(32)])], null),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_right,61.5,(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_right,61.5,(14)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_right,61.5,(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_right,61.5,(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_right,61.5,(32)], null)], null):null)], null);
});
;})(mouseover_QMARK_))
});
mecca.components.editor.retract_editor = (function mecca$components$editor$retract_editor(x){
var mouseover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (mouseover_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$visibility,cljs.core.cst$kw$height],[(5),((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(mouseover_QMARK_))
,(6),((function (mouseover_QMARK_){
return (function (){
var G__13082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$retract_DASH_editor], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13082) : re_frame.core.dispatch.call(null,G__13082));
});})(mouseover_QMARK_))
,((function (mouseover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(mouseover_QMARK_))
,x,"all","hidden",(32)])], null),(cljs.core.truth_(cljs.core.deref(mouseover_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_left,((3) + x),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_left,((3) + x),(14)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_left,((3) + x),(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_left,((3) + x),(26)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor.scroll_cue_left,((3) + x),(32)], null)], null):null)], null);
});
;})(mouseover_QMARK_))
});
mecca.components.editor.note_guides = (function mecca$components$editor$note_guides(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.beat_line,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.beat_line,(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.beat_line,(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.beat_line,(3),(3)], null)], null);
});
mecca.components.editor.tempo_slider = (function mecca$components$editor$tempo_slider(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M37.867 10.655 37.43 10.643 37.001 10.186 36.572 9.728V9.332 8.935L37.04 8.468 37.507 8H37.906 38.304L38.772 8.468 39.239 8.935V9.333 9.732L38.772 10.199 38.304 10.667 37.867 10.655Z\n;M37.873 10.278 38.315 10.286 38.587 10.014 38.859 9.742V9.334 8.925L38.587 8.653 38.314 8.381H37.906 37.498L37.226 8.653 36.954 8.925V9.328 9.73L37.192 10.001 37.43 10.271 37.872 10.279Z\nM37.907 9.524H37.335V9.333 9.143H37.906 38.478V9.333 9.524Z\nM59.582 10.655 59.145 10.643 58.716 10.186 58.288 9.728V9.332 8.935L58.755 8.468 59.223 8H59.621 60.019L60.487 8.468 60.954 8.935V9.333 9.732L60.487 10.199 60.019 10.667 59.582 10.655Z\nM59.588 10.278 60.03 10.286 60.302 10.014 60.575 9.742V9.334 8.925L60.302 8.653 60.03 8.381H59.621 59.213L58.941 8.653 58.669 8.926V9.328 9.731L58.907 10.001 59.145 10.272 59.587 10.279Z\nM59.588 9.898 59.527 9.89 59.278 9.608 59.03 9.327 59.326 9.03 59.622 8.734 59.922 9.033 60.221 9.333 59.935 9.619 59.649 9.904 59.588 9.896Z\nM48.765 9.905H41.145V9.524 9.143H48.764 56.383V9.524 9.905Z"], null)], null);
});
mecca.components.editor.stop_button_label = (function mecca$components$editor$stop_button_label(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M4.572 5.714H3.81V5.524 5.333H4.381 4.953V5.143 4.952H4.381 3.81V4.381 3.81H4.572 5.334V4 4.191H4.762 4.191V4.381 4.571H4.762 5.334V5.143 5.714Z\nM6.667 5.714H6.476V4.952 4.191H6.095 5.714V4 3.81H6.667 7.619V4 4.191H7.238 6.857V4.952 5.714Z\nM8.762 5.714H8V4.762 3.81H8.762 9.524V4.762 5.714Z\nM8.762 5.333H9.143V4.762 4.191H8.762 8.381V4.762 5.333Z\nM10.095 5.714H9.905V4.762 3.81H10.667 11.429V4.381 4.952H10.857 10.286V5.333 5.714Z\nM10.667 4.571H11.048V4.381 4.191H10.667 10.286V4.381 4.571Z"], null)], null);
});
mecca.components.editor.play_button_label = (function mecca$components$editor$play_button_label(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M16.191 5.714H16V4.762 3.81H16.762 17.524V4.381 4.952H16.953 16.381V5.333 5.714Z\nM16.762 4.571H17.143V4.381 4.191H16.762 16.381V4.381 4.571Z\nM18.667 5.714H17.905V4.762 3.81H18.095 18.286V4.571 5.333H18.857 19.429V5.524 5.714Z\nM20 5.714H19.81V5.034 4.354L20.082 4.082 20.354 3.81H20.572 20.789L21.061 4.082 21.334 4.354V5.034 5.714H21.143 20.953V5.333 4.952H20.572 20.191V5.333 5.714Z\nM20.572 4.571H20.953V4.381 4.191H20.572 20.191V4.381 4.571Z\nM22.667 5.714H22.476V5.213 4.711L22.065 4.355 21.653 3.998 21.778 3.873 21.903 3.749 22.285 4.189 22.667 4.63 23.049 4.189 23.431 3.749 23.556 3.873 23.68 3.998 23.269 4.355 22.857 4.711V5.213 5.714Z"], null)], null);
});
mecca.components.editor.loop_button_label = (function mecca$components$editor$loop_button_label(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M28.953 5.714H28.191V4.762 3.81H28.381 28.572V4.571 5.333H29.143 29.715V5.524 5.714Z\nM30.857 5.714H30.095V4.762 3.81H30.857 31.619V4.762 5.714Z\nM30.857 5.333H31.238V4.762 4.191H30.857 30.476V4.762 5.333Z\nM32.762 5.714H32V4.762 3.81H32.762 33.524V4.762 5.714Z\nM32.762 5.333H33.143V4.762 4.191H32.762 32.381V4.762 5.333Z\nM34.095 5.714H33.905V4.762 3.81H34.667 35.429V4.381 4.952H34.857 34.286V5.333 5.714Z\nM34.667 4.571H35.048V4.381 4.191H34.667 34.286V4.381 4.571Z"], null)], null);
});
mecca.components.editor.controls = (function mecca$components$editor$controls(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$view_DASH_box,"0 0 64 16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$d,"M63.5 2V14L62 15.5H2L0.5 14V2L2 0.5H62Z",cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke_DASH_width,0.5,cljs.core.cst$kw$stroke,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$d,"M62 3V13L61 14H3L2 13V3L3 2H61Z",cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke_DASH_width,0.25,cljs.core.cst$kw$stroke,"black"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key.circle_of_fifths], null)], null);
});
mecca.components.editor.note_blocks = (function mecca$components$editor$note_blocks(){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_notes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.2) translate(8,0)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"whole",(80)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"dotted-half",(96)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"half",(112)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"dotted-quarter",(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,(1),(144)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"dotted-eighth",(160)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"q-triplets",(176)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,0.5,(192)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"dotted-sixteenth",(208)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"e-triplets",(224)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"sixteenth",(240)], null)], null);
});
mecca.components.editor.rest_blocks = (function mecca$components$editor$rest_blocks(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g_SHARP_rests,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.2) translate(8,16)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"whole-rest",(80)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"half-rest",(112)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"quarter-rest",(144)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"eighth-rest",(192)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.notation.note_button,"sixteenth-rest",(240)], null)], null);
});
