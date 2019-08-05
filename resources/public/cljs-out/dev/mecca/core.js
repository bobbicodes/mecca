// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs_bach.synthesis');
goog.require('leipzig.melody');
goog.require('leipzig.scale');
goog.require('leipzig.temperament');
goog.require('goog.events');
goog.require('mecca.components');
goog.require('mecca.music');
goog.require('goog.events.EventType');
mecca.core.get_app_element = (function mecca$core$get_app_element(){
return goog.dom.getElement("app");
});
mecca.core.bar_length = (16);
mecca.core.mouse_pos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(100),cljs.core.cst$kw$y,(100)], null));
mecca.core.get_client_rect = (function mecca$core$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$top,r.top], null);
});
mecca.core.mouse_move_handler = (function mecca$core$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(offset));
return cljs.core.reset_BANG_(mecca.core.mouse_pos,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null));
});
});
mecca.core.mouse_up_handler = (function mecca$core$mouse_up_handler(on_move){
return (function mecca$core$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
mecca.core.mouse_down_handler = (function mecca$core$mouse_down_handler(e){
var map__12263 = mecca.core.get_client_rect(e);
var map__12263__$1 = ((((!((map__12263 == null)))?(((((map__12263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12263):map__12263);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12263__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12263__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = mecca.core.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__12265 = window;
var G__12266 = goog.events.EventType.MOUSEUP;
var G__12267 = mecca.core.mouse_up_handler(on_move);
return goog.events.listen(G__12265,G__12266,G__12267);
});
mecca.core.mouse_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
if((typeof mecca !== 'undefined') && (typeof mecca.core !== 'undefined') && (typeof mecca.core.focused !== 'undefined')){
} else {
mecca.core.focused = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
}
mecca.core.blank = (function mecca$core$blank(p__12268){
var vec__12269 = p__12268;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12269,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12269,(1),null);
var focused_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (focused_QMARK_,vec__12269,x,y){
return (function (p__12272){
var vec__12273 = p__12272;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12273,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12273,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$height],[(y__$1 * 0.75),"black",((function (vec__12273,x__$1,y__$1,focused_QMARK_,vec__12269,x,y){
return (function (){
return cljs.core.reset_BANG_(focused_QMARK_,false);
});})(vec__12273,x__$1,y__$1,focused_QMARK_,vec__12269,x,y))
,(cljs.core.truth_(cljs.core.deref(focused_QMARK_))?"violet":((clojure.string.includes_QMARK_(mecca.music.midi_num__GT_note(mecca.music.y__GT_midi(y__$1)),"#"))?"pink":"white"
)),(1),((function (vec__12273,x__$1,y__$1,focused_QMARK_,vec__12269,x,y){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mecca.music.pitches,cljs.core.assoc,x__$1,y__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mecca.music.durations,cljs.core.assoc,x__$1,0.25);
});})(vec__12273,x__$1,y__$1,focused_QMARK_,vec__12269,x,y))
,0.05,((function (vec__12273,x__$1,y__$1,focused_QMARK_,vec__12269,x,y){
return (function (e){
cljs.core.reset_BANG_(focused_QMARK_,true);

return cljs.core.reset_BANG_(mecca.core.focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
});})(vec__12273,x__$1,y__$1,focused_QMARK_,vec__12269,x,y))
,((1) + x__$1),0.75])], null);
});
;})(focused_QMARK_,vec__12269,x,y))
});
mecca.core.note_label = (function mecca$core$note_label(y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$width,(1),cljs.core.cst$kw$y,(0.5 + (y * 0.75)),cljs.core.cst$kw$height,0.75,cljs.core.cst$kw$text_DASH_anchor,"left",cljs.core.cst$kw$font_DASH_size,0.5], null),mecca.music.midi_num__GT_note(mecca.music.y__GT_midi(y))], null);
});
mecca.core.grid_lines = (function mecca$core$grid_lines(p__12276){
var vec__12277 = p__12276;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12277,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12277,(1),null);
var line_focused_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var notes = leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.durations),cljs.core.deref(mecca.music.pitches));
var note_endings = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (line_focused_QMARK_,notes,vec__12277,x,y){
return (function mecca$core$grid_lines_$_iter__12280(s__12281){
return (new cljs.core.LazySeq(null,((function (line_focused_QMARK_,notes,vec__12277,x,y){
return (function (){
var s__12281__$1 = s__12281;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12281__$1);
if(temp__5457__auto__){
var s__12281__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12281__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12281__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12283 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12282 = (0);
while(true){
if((i__12282 < size__4323__auto__)){
var map__12284 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12282);
var map__12284__$1 = ((((!((map__12284 == null)))?(((((map__12284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12284):map__12284);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12284__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12284__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12284__$1,cljs.core.cst$kw$pitch);
cljs.core.chunk_append(b__12283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null));

var G__12292 = (i__12282 + (1));
i__12282 = G__12292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12283),mecca$core$grid_lines_$_iter__12280(cljs.core.chunk_rest(s__12281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12283),null);
}
} else {
var map__12286 = cljs.core.first(s__12281__$2);
var map__12286__$1 = ((((!((map__12286 == null)))?(((((map__12286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12286):map__12286);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12286__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12286__$1,cljs.core.cst$kw$duration);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12286__$1,cljs.core.cst$kw$pitch);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null),mecca$core$grid_lines_$_iter__12280(cljs.core.rest(s__12281__$2)));
}
} else {
return null;
}
break;
}
});})(line_focused_QMARK_,notes,vec__12277,x,y))
,null,null));
});})(line_focused_QMARK_,notes,vec__12277,x,y))
;
return iter__4324__auto__(notes);
})());
return ((function (line_focused_QMARK_,notes,note_endings,vec__12277,x,y){
return (function (p__12288){
var vec__12289 = p__12288;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12289,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12289,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$y1,cljs.core.cst$kw$on_DASH_mouse_DASH_down,cljs.core.cst$kw$style,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x1,cljs.core.cst$kw$y2,cljs.core.cst$kw$x2],[((cljs.core.contains_QMARK_(cljs.core.set(note_endings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.mod(x__$1,(4))))?"black":"lightgrey"
)),((function (vec__12289,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__12277,x,y){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(line_focused_QMARK_,cljs.core.not);
});})(vec__12289,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__12277,x,y))
,(- y__$1),mecca.core.mouse_down_handler,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,(cljs.core.truth_(cljs.core.deref(line_focused_QMARK_))?"ew-resize":null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.mod(x__$1,(4))))?0.075:0.04),((function (vec__12289,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__12277,x,y){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(line_focused_QMARK_,cljs.core.not);
});})(vec__12289,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__12277,x,y))
,x__$1,(y__$1 - (1)),x__$1])], null);
});
;})(line_focused_QMARK_,notes,note_endings,vec__12277,x,y))
});
mecca.core.note = (function mecca$core$note(p__12293){
var vec__12294 = p__12293;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12294,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12294,(1),null);
var focused_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (focused_QMARK_,vec__12294,x,y){
return (function (p__12297){
var vec__12298 = p__12297;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12298,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12298,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$stroke,cljs.core.cst$kw$on_DASH_mouse_DASH_out,cljs.core.cst$kw$fill,cljs.core.cst$kw$width,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$stroke_DASH_width,cljs.core.cst$kw$on_DASH_mouse_DASH_over,cljs.core.cst$kw$x,cljs.core.cst$kw$height],[(0.75 * y__$1),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.selected_note),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":null),((function (vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y){
return (function (e){
return cljs.core.reset_BANG_(focused_QMARK_,false);
});})(vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y))
,"blue",(((4) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.durations),x__$1)) - 0.05),((function (vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mecca.music.pitches,cljs.core.assoc,x__$1,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mecca.music.durations,cljs.core.assoc,x__$1,(0));
});})(vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y))
,0.1,((function (vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y){
return (function (e){
return cljs.core.reset_BANG_(focused_QMARK_,true);
});})(vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y))
,((1) + x__$1),0.75])], null),(cljs.core.truth_(cljs.core.deref(focused_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$stroke,"red",cljs.core.cst$kw$stroke_DASH_width,0.4,cljs.core.cst$kw$stroke_DASH_linecap,"round",cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1.5 + x__$1)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 + (0.75 * y__$1))),") ","scale(0.15)"].join(''),cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y){
return (function (e){
return cljs.core.reset_BANG_(focused_QMARK_,true);
});})(vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y))
,cljs.core.cst$kw$on_DASH_click,((function (vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mecca.music.pitches,cljs.core.assoc,x__$1,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mecca.music.durations,cljs.core.assoc,x__$1,(0));
});})(vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y){
return (function (e){
return cljs.core.reset_BANG_(focused_QMARK_,false);
});})(vec__12298,x__$1,y__$1,focused_QMARK_,vec__12294,x,y))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,(-1),cljs.core.cst$kw$y1,(-1),cljs.core.cst$kw$x2,(1),cljs.core.cst$kw$y2,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,(1),cljs.core.cst$kw$y1,(-1),cljs.core.cst$kw$x2,(-1),cljs.core.cst$kw$y2,(1)], null)], null)], null):null)], null);
});
;})(focused_QMARK_,vec__12294,x,y))
});
mecca.core.note_grid = (function mecca$core$note_grid(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view_DASH_box,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((mecca.core.bar_length + (1)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.75 * (((2) * cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state))))) - (1))))].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$core$note_grid_$_iter__12301(s__12302){
return (new cljs.core.LazySeq(null,(function (){
var s__12302__$1 = s__12302;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12302__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__12302__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function mecca$core$note_grid_$_iter__12301_$_iter__12303(s__12304){
return (new cljs.core.LazySeq(null,((function (s__12302__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__12304__$1 = s__12304;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__12304__$1);
if(temp__5457__auto____$1){
var s__12304__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12304__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12304__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12306 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12305 = (0);
while(true){
if((i__12305 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12305);
cljs.core.chunk_append(b__12306,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.blank,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__12321 = (i__12305 + (1));
i__12305 = G__12321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12306),mecca$core$note_grid_$_iter__12301_$_iter__12303(cljs.core.chunk_rest(s__12304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12306),null);
}
} else {
var y = cljs.core.first(s__12304__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.blank,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$core$note_grid_$_iter__12301_$_iter__12303(cljs.core.rest(s__12304__$2)));
}
} else {
return null;
}
break;
}
});})(s__12302__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__12302__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((((2) * cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state))))) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$core$note_grid_$_iter__12301(cljs.core.rest(s__12302__$1)));
} else {
var G__12322 = cljs.core.rest(s__12302__$1);
s__12302__$1 = G__12322;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(mecca.core.bar_length));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$core$note_grid_$_iter__12307(s__12308){
return (new cljs.core.LazySeq(null,(function (){
var s__12308__$1 = s__12308;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12308__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__12308__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function mecca$core$note_grid_$_iter__12307_$_iter__12309(s__12310){
return (new cljs.core.LazySeq(null,((function (s__12308__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__12310__$1 = s__12310;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__12310__$1);
if(temp__5457__auto____$1){
var s__12310__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12310__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12310__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12312 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12311 = (0);
while(true){
if((i__12311 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12311);
cljs.core.chunk_append(b__12312,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__12323 = (i__12311 + (1));
i__12311 = G__12323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12312),mecca$core$note_grid_$_iter__12307_$_iter__12309(cljs.core.chunk_rest(s__12310__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12312),null);
}
} else {
var y = cljs.core.first(s__12310__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$core$note_grid_$_iter__12307_$_iter__12309(cljs.core.rest(s__12310__$2)));
}
} else {
return null;
}
break;
}
});})(s__12308__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__12308__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((((2) * cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state))))) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,mecca$core$note_grid_$_iter__12307(cljs.core.rest(s__12308__$1)));
} else {
var G__12324 = cljs.core.rest(s__12308__$1);
s__12308__$1 = G__12324;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((1),((4) * mecca.core.bar_length),0.25));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$core$note_grid_$_iter__12313(s__12314){
return (new cljs.core.LazySeq(null,(function (){
var s__12314__$1 = s__12314;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12314__$1);
if(temp__5457__auto__){
var s__12314__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12314__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12314__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12316 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12315 = (0);
while(true){
if((i__12315 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12315);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.pitches),x);
if(typeof y === 'number'){
cljs.core.chunk_append(b__12316,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null)));

var G__12325 = (i__12315 + (1));
i__12315 = G__12325;
continue;
} else {
var G__12326 = (i__12315 + (1));
i__12315 = G__12326;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12316),mecca$core$note_grid_$_iter__12313(cljs.core.chunk_rest(s__12314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12316),null);
}
} else {
var x = cljs.core.first(s__12314__$2);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mecca.music.pitches),x);
if(typeof y === 'number'){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null)),mecca$core$note_grid_$_iter__12313(cljs.core.rest(s__12314__$2)));
} else {
var G__12327 = cljs.core.rest(s__12314__$2);
s__12314__$1 = G__12327;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(mecca.core.bar_length));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$core$note_grid_$_iter__12317(s__12318){
return (new cljs.core.LazySeq(null,(function (){
var s__12318__$1 = s__12318;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12318__$1);
if(temp__5457__auto__){
var s__12318__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12318__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12318__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12320 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12319 = (0);
while(true){
if((i__12319 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12319);
cljs.core.chunk_append(b__12320,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.note_label,y], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)));

var G__12328 = (i__12319 + (1));
i__12319 = G__12328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12320),mecca$core$note_grid_$_iter__12317(cljs.core.chunk_rest(s__12318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12320),null);
}
} else {
var y = cljs.core.first(s__12318__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.note_label,y], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)),mecca$core$note_grid_$_iter__12317(cljs.core.rest(s__12318__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((((2) * cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mecca.music.scales,cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state))))) - (1))));
})())], null);
});
/**
 * Take a sequence of notes and play them from a set point in an audiocontext.
 */
mecca.core.play_from_BANG_ = (function mecca$core$play_from_BANG_(audiocontext,from,notes){
var seq__12329 = cljs.core.seq(notes);
var chunk__12330 = null;
var count__12331 = (0);
var i__12332 = (0);
while(true){
if((i__12332 < count__12331)){
var map__12333 = chunk__12330.cljs$core$IIndexed$_nth$arity$2(null,i__12332);
var map__12333__$1 = ((((!((map__12333 == null)))?(((((map__12333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12333):map__12333);
var note = map__12333__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12333__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12333__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12333__$1,cljs.core.cst$kw$instrument);
var at_12339 = (time + from);
var synth_instance_12340 = (function (){var G__12335 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,leipzig.temperament.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__12335) : instrument.call(null,G__12335));
})();
var connected_instance_12341 = cljs_bach.synthesis.connect(synth_instance_12340,cljs_bach.synthesis.destination);
(connected_instance_12341.cljs$core$IFn$_invoke$arity$3 ? connected_instance_12341.cljs$core$IFn$_invoke$arity$3(audiocontext,at_12339,duration) : connected_instance_12341.call(null,audiocontext,at_12339,duration));


var G__12342 = seq__12329;
var G__12343 = chunk__12330;
var G__12344 = count__12331;
var G__12345 = (i__12332 + (1));
seq__12329 = G__12342;
chunk__12330 = G__12343;
count__12331 = G__12344;
i__12332 = G__12345;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12329);
if(temp__5457__auto__){
var seq__12329__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12329__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12329__$1);
var G__12346 = cljs.core.chunk_rest(seq__12329__$1);
var G__12347 = c__4351__auto__;
var G__12348 = cljs.core.count(c__4351__auto__);
var G__12349 = (0);
seq__12329 = G__12346;
chunk__12330 = G__12347;
count__12331 = G__12348;
i__12332 = G__12349;
continue;
} else {
var map__12336 = cljs.core.first(seq__12329__$1);
var map__12336__$1 = ((((!((map__12336 == null)))?(((((map__12336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12336):map__12336);
var note = map__12336__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12336__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12336__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12336__$1,cljs.core.cst$kw$instrument);
var at_12350 = (time + from);
var synth_instance_12351 = (function (){var G__12338 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$pitch,leipzig.temperament.equal),cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__12338) : instrument.call(null,G__12338));
})();
var connected_instance_12352 = cljs_bach.synthesis.connect(synth_instance_12351,cljs_bach.synthesis.destination);
(connected_instance_12352.cljs$core$IFn$_invoke$arity$3 ? connected_instance_12352.cljs$core$IFn$_invoke$arity$3(audiocontext,at_12350,duration) : connected_instance_12352.call(null,audiocontext,at_12350,duration));


var G__12353 = cljs.core.next(seq__12329__$1);
var G__12354 = null;
var G__12355 = (0);
var G__12356 = (0);
seq__12329 = G__12353;
chunk__12330 = G__12354;
count__12331 = G__12355;
i__12332 = G__12356;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Take a sequence of notes and play them in an audiocontext.
 */
mecca.core.play_BANG_ = (function mecca$core$play_BANG_(audiocontext,notes){
return mecca.core.play_from_BANG_(audiocontext,cljs_bach.synthesis.current_time(audiocontext),notes);
});
mecca.core.staff = (function mecca$core$staff(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$view_DASH_box,"0 0 100 10"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"scale(0.028,0.028)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M95,0C46.286,0,20,35.035,20,68c0,16.393,5.134,30.499,14.848,40.794C44.851,119.396,58.736,125,75,125\n\t\tc16.569,0,30-13.431,30-30S91.569,65,75,65c-9.828,0-18.551,4.726-24.023,12.028C50.234,73.834,50,70.676,50,68\n\t\tc0-18.884,15.457-38,45-38c37.664,0,65,35.748,65,85c0,47.058-20.573,76.48-37.831,92.875C100.995,227.991,72.146,240,45,240v30\n\t\tc35.164,0,70.822-14.716,97.831-40.375C173.248,200.729,190,160.02,190,115c0-31.97-9.544-61.113-26.874-82.062\n\t\tC145.554,11.698,121.36,0,95,0z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,(235),cljs.core.cst$kw$cy,(54),cljs.core.cst$kw$r,(15)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,(235),cljs.core.cst$kw$cy,(114),cljs.core.cst$kw$r,(15)], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function mecca$core$staff_$_iter__12357(s__12358){
return (new cljs.core.LazySeq(null,(function (){
var s__12358__$1 = s__12358;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12358__$1);
if(temp__5457__auto__){
var s__12358__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12358__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12358__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12360 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12359 = (0);
while(true){
if((i__12359 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12359);
cljs.core.chunk_append(b__12360,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,(0),cljs.core.cst$kw$y1,(0.25 + ((2) * y)),cljs.core.cst$kw$x2,(100),cljs.core.cst$kw$y2,(0.25 + ((2) * y)),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.4], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)));

var G__12361 = (i__12359 + (1));
i__12359 = G__12361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12360),mecca$core$staff_$_iter__12357(cljs.core.chunk_rest(s__12358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12360),null);
}
} else {
var y = cljs.core.first(s__12358__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,(0),cljs.core.cst$kw$y1,(0.25 + ((2) * y)),cljs.core.cst$kw$x2,(100),cljs.core.cst$kw$y2,(0.25 + ((2) * y)),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.4], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,y], null)),mecca$core$staff_$_iter__12357(cljs.core.rest(s__12358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null);
});
mecca.core.mecca = (function mecca$core$mecca(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"MECCA Music Platform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The Music Education, Composition & Creation Application"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mario], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.staff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
return mecca.core.play_BANG_(mecca.music.context,leipzig.melody.all(cljs.core.cst$kw$instrument,mecca.music.bass,mecca.music.melody()));
})], null),"Play"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.note_grid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Mouse-pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.core.mouse_pos))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Presets: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (e){
cljs.core.reset_BANG_(mecca.music.pitches,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(5),(10),(5),(10),(5),(10),(5),(10),(5),(10),(5),(10),(5),(10),(5)], null));

return cljs.core.reset_BANG_(mecca.music.durations,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25], null));
})], null),"Alberti-bass"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Pitches: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.pitches))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,["Durations: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.durations))].join('')], null)], null)], null);
});
mecca.core.mount = (function mecca$core$mount(el){
var G__12362 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.mecca], null);
var G__12363 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12362,G__12363) : reagent.core.render_component.call(null,G__12362,G__12363));
});
mecca.core.mount_app_element = (function mecca$core$mount_app_element(){
var temp__5457__auto__ = mecca.core.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return mecca.core.mount(el);
} else {
return null;
}
});
mecca.core.mount_app_element();
mecca.core.on_reload = (function mecca$core$on_reload(){
return mecca.core.mount_app_element();
});
