// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.core');
goog.require('cljs.core');
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
mecca.core.mouse_pos = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null));
mecca.core.get_client_rect = (function mecca$core$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"top","top",-1856271961),r.top], null);
});
mecca.core.mouse_move_handler = (function mecca$core$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset));
return cljs.core.reset_BANG_.call(null,mecca.core.mouse_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
});
mecca.core.mouse_up_handler = (function mecca$core$mouse_up_handler(on_move){
return (function mecca$core$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
mecca.core.mouse_down_handler = (function mecca$core$mouse_down_handler(e){
var map__13216 = mecca.core.get_client_rect.call(null,e);
var map__13216__$1 = ((((!((map__13216 == null)))?(((((map__13216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13216):map__13216);
var left = cljs.core.get.call(null,map__13216__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__13216__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.core.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.core.mouse_up_handler.call(null,on_move));
});
mecca.core.mouse_atom = reagent.core.atom.call(null,(0));
if((typeof mecca !== 'undefined') && (typeof mecca.core !== 'undefined') && (typeof mecca.core.focused !== 'undefined')){
} else {
mecca.core.focused = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
}
mecca.core.blank = (function mecca$core$blank(p__13218){
var vec__13219 = p__13218;
var x = cljs.core.nth.call(null,vec__13219,(0),null);
var y = cljs.core.nth.call(null,vec__13219,(1),null);
var focused_QMARK_ = reagent.core.atom.call(null,false);
return ((function (focused_QMARK_,vec__13219,x,y){
return (function (p__13222){
var vec__13223 = p__13222;
var x__$1 = cljs.core.nth.call(null,vec__13223,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__13223,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(y__$1 * 0.75),"black",((function (vec__13223,x__$1,y__$1,focused_QMARK_,vec__13219,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__13223,x__$1,y__$1,focused_QMARK_,vec__13219,x,y))
,(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"violet":((clojure.string.includes_QMARK_.call(null,mecca.music.midi_num__GT_note.call(null,mecca.music.y__GT_midi.call(null,y__$1)),"#"))?"pink":"white"
)),(1),((function (vec__13223,x__$1,y__$1,focused_QMARK_,vec__13219,x,y){
return (function (e){
cljs.core.swap_BANG_.call(null,mecca.music.pitches,cljs.core.assoc,x__$1,y__$1);

return cljs.core.swap_BANG_.call(null,mecca.music.durations,cljs.core.assoc,x__$1,0.25);
});})(vec__13223,x__$1,y__$1,focused_QMARK_,vec__13219,x,y))
,0.05,((function (vec__13223,x__$1,y__$1,focused_QMARK_,vec__13219,x,y){
return (function (e){
cljs.core.reset_BANG_.call(null,focused_QMARK_,true);

return cljs.core.reset_BANG_.call(null,mecca.core.focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
});})(vec__13223,x__$1,y__$1,focused_QMARK_,vec__13219,x,y))
,((1) + x__$1),0.75])], null);
});
;})(focused_QMARK_,vec__13219,x,y))
});
mecca.core.note_label = (function mecca$core$note_label(y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0.5 + (y * 0.75)),new cljs.core.Keyword(null,"height","height",1025178622),0.75,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"left",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),0.5], null),mecca.music.midi_num__GT_note.call(null,mecca.music.y__GT_midi.call(null,y))], null);
});
mecca.core.grid_lines = (function mecca$core$grid_lines(p__13226){
var vec__13227 = p__13226;
var x = cljs.core.nth.call(null,vec__13227,(0),null);
var y = cljs.core.nth.call(null,vec__13227,(1),null);
var line_focused_QMARK_ = reagent.core.atom.call(null,false);
var notes = leipzig.melody.phrase.call(null,cljs.core.deref.call(null,mecca.music.durations),cljs.core.deref.call(null,mecca.music.pitches));
var note_endings = cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (line_focused_QMARK_,notes,vec__13227,x,y){
return (function mecca$core$grid_lines_$_iter__13230(s__13231){
return (new cljs.core.LazySeq(null,((function (line_focused_QMARK_,notes,vec__13227,x,y){
return (function (){
var s__13231__$1 = s__13231;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13231__$1);
if(temp__5457__auto__){
var s__13231__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13231__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13231__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13233 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13232 = (0);
while(true){
if((i__13232 < size__4323__auto__)){
var map__13234 = cljs.core._nth.call(null,c__4322__auto__,i__13232);
var map__13234__$1 = ((((!((map__13234 == null)))?(((((map__13234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13234):map__13234);
var time = cljs.core.get.call(null,map__13234__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__13234__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__13234__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__13233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null));

var G__13242 = (i__13232 + (1));
i__13232 = G__13242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13233),mecca$core$grid_lines_$_iter__13230.call(null,cljs.core.chunk_rest.call(null,s__13231__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13233),null);
}
} else {
var map__13236 = cljs.core.first.call(null,s__13231__$2);
var map__13236__$1 = ((((!((map__13236 == null)))?(((((map__13236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13236):map__13236);
var time = cljs.core.get.call(null,map__13236__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__13236__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__13236__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null),mecca$core$grid_lines_$_iter__13230.call(null,cljs.core.rest.call(null,s__13231__$2)));
}
} else {
return null;
}
break;
}
});})(line_focused_QMARK_,notes,vec__13227,x,y))
,null,null));
});})(line_focused_QMARK_,notes,vec__13227,x,y))
;
return iter__4324__auto__.call(null,notes);
})());
return ((function (line_focused_QMARK_,notes,note_endings,vec__13227,x,y){
return (function (p__13238){
var vec__13239 = p__13238;
var x__$1 = cljs.core.nth.call(null,vec__13239,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__13239,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,note_endings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?"black":"lightgrey"
)),((function (vec__13239,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__13227,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__13239,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__13227,x,y))
,(- y__$1),mecca.core.mouse_down_handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(cljs.core.deref.call(null,line_focused_QMARK_))?"ew-resize":null)], null),((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?0.075:0.04),((function (vec__13239,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__13227,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__13239,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__13227,x,y))
,x__$1,(y__$1 - (1)),x__$1])], null);
});
;})(line_focused_QMARK_,notes,note_endings,vec__13227,x,y))
});
mecca.core.note = (function mecca$core$note(p__13243){
var vec__13244 = p__13243;
var x = cljs.core.nth.call(null,vec__13244,(0),null);
var y = cljs.core.nth.call(null,vec__13244,(1),null);
var focused_QMARK_ = reagent.core.atom.call(null,false);
return ((function (focused_QMARK_,vec__13244,x,y){
return (function (p__13247){
var vec__13248 = p__13247;
var x__$1 = cljs.core.nth.call(null,vec__13248,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__13248,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.75 * y__$1),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,mecca.music.selected_note),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":null),((function (vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y))
,"blue",(((4) * cljs.core.get.call(null,cljs.core.deref.call(null,mecca.music.durations),x__$1)) - 0.05),((function (vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y){
return (function (e){
cljs.core.swap_BANG_.call(null,mecca.music.pitches,cljs.core.assoc,x__$1,null);

return cljs.core.swap_BANG_.call(null,mecca.music.durations,cljs.core.assoc,x__$1,(0));
});})(vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y))
,0.1,((function (vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y))
,((1) + x__$1),0.75])], null),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1.5 + x__$1)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 + (0.75 * y__$1))),") ","scale(0.15)"].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y){
return (function (e){
cljs.core.swap_BANG_.call(null,mecca.music.pitches,cljs.core.assoc,x__$1,null);

return cljs.core.swap_BANG_.call(null,mecca.music.durations,cljs.core.assoc,x__$1,(0));
});})(vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__13248,x__$1,y__$1,focused_QMARK_,vec__13244,x,y))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(-1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null)], null):null)], null);
});
;})(focused_QMARK_,vec__13244,x,y))
});
mecca.core.note_grid = (function mecca$core$note_grid(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((mecca.core.bar_length + (1)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.75 * (((2) * cljs.core.count.call(null,cljs.core.get.call(null,mecca.music.scales,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state))))) - (1))))].join('')], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$core$note_grid_$_iter__13251(s__13252){
return (new cljs.core.LazySeq(null,(function (){
var s__13252__$1 = s__13252;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13252__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13252__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function mecca$core$note_grid_$_iter__13251_$_iter__13253(s__13254){
return (new cljs.core.LazySeq(null,((function (s__13252__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__13254__$1 = s__13254;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__13254__$1);
if(temp__5457__auto____$1){
var s__13254__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13254__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13254__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13256 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13255 = (0);
while(true){
if((i__13255 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__13255);
cljs.core.chunk_append.call(null,b__13256,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.blank,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13271 = (i__13255 + (1));
i__13255 = G__13271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13256),mecca$core$note_grid_$_iter__13251_$_iter__13253.call(null,cljs.core.chunk_rest.call(null,s__13254__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13256),null);
}
} else {
var y = cljs.core.first.call(null,s__13254__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.blank,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$core$note_grid_$_iter__13251_$_iter__13253.call(null,cljs.core.rest.call(null,s__13254__$2)));
}
} else {
return null;
}
break;
}
});})(s__13252__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__13252__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,cljs.core.get.call(null,mecca.music.scales,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state))))) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$core$note_grid_$_iter__13251.call(null,cljs.core.rest.call(null,s__13252__$1)));
} else {
var G__13272 = cljs.core.rest.call(null,s__13252__$1);
s__13252__$1 = G__13272;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,mecca.core.bar_length));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$core$note_grid_$_iter__13257(s__13258){
return (new cljs.core.LazySeq(null,(function (){
var s__13258__$1 = s__13258;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13258__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__13258__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function mecca$core$note_grid_$_iter__13257_$_iter__13259(s__13260){
return (new cljs.core.LazySeq(null,((function (s__13258__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__13260__$1 = s__13260;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__13260__$1);
if(temp__5457__auto____$1){
var s__13260__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13260__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13260__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13262 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13261 = (0);
while(true){
if((i__13261 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__13261);
cljs.core.chunk_append.call(null,b__13262,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__13273 = (i__13261 + (1));
i__13261 = G__13273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13262),mecca$core$note_grid_$_iter__13257_$_iter__13259.call(null,cljs.core.chunk_rest.call(null,s__13260__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13262),null);
}
} else {
var y = cljs.core.first.call(null,s__13260__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$core$note_grid_$_iter__13257_$_iter__13259.call(null,cljs.core.rest.call(null,s__13260__$2)));
}
} else {
return null;
}
break;
}
});})(s__13258__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__13258__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,cljs.core.get.call(null,mecca.music.scales,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state))))) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$core$note_grid_$_iter__13257.call(null,cljs.core.rest.call(null,s__13258__$1)));
} else {
var G__13274 = cljs.core.rest.call(null,s__13258__$1);
s__13258__$1 = G__13274;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((4) * mecca.core.bar_length),0.25));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$core$note_grid_$_iter__13263(s__13264){
return (new cljs.core.LazySeq(null,(function (){
var s__13264__$1 = s__13264;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13264__$1);
if(temp__5457__auto__){
var s__13264__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13264__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13264__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13266 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13265 = (0);
while(true){
if((i__13265 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__13265);
var y = cljs.core.get.call(null,cljs.core.deref.call(null,mecca.music.pitches),x);
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__13266,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__13275 = (i__13265 + (1));
i__13265 = G__13275;
continue;
} else {
var G__13276 = (i__13265 + (1));
i__13265 = G__13276;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13266),mecca$core$note_grid_$_iter__13263.call(null,cljs.core.chunk_rest.call(null,s__13264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13266),null);
}
} else {
var x = cljs.core.first.call(null,s__13264__$2);
var y = cljs.core.get.call(null,cljs.core.deref.call(null,mecca.music.pitches),x);
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$core$note_grid_$_iter__13263.call(null,cljs.core.rest.call(null,s__13264__$2)));
} else {
var G__13277 = cljs.core.rest.call(null,s__13264__$2);
s__13264__$1 = G__13277;
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,mecca.core.bar_length));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$core$note_grid_$_iter__13267(s__13268){
return (new cljs.core.LazySeq(null,(function (){
var s__13268__$1 = s__13268;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13268__$1);
if(temp__5457__auto__){
var s__13268__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13268__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13268__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13270 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13269 = (0);
while(true){
if((i__13269 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__13269);
cljs.core.chunk_append.call(null,b__13270,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.note_label,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__13278 = (i__13269 + (1));
i__13269 = G__13278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13270),mecca$core$note_grid_$_iter__13267.call(null,cljs.core.chunk_rest.call(null,s__13268__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13270),null);
}
} else {
var y = cljs.core.first.call(null,s__13268__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.note_label,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$core$note_grid_$_iter__13267.call(null,cljs.core.rest.call(null,s__13268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,cljs.core.get.call(null,mecca.music.scales,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state))))) - (1))));
})())], null);
});
/**
 * Take a sequence of notes and play them from a set point in an audiocontext.
 */
mecca.core.play_from_BANG_ = (function mecca$core$play_from_BANG_(audiocontext,from,notes){
var seq__13279 = cljs.core.seq.call(null,notes);
var chunk__13280 = null;
var count__13281 = (0);
var i__13282 = (0);
while(true){
if((i__13282 < count__13281)){
var map__13283 = cljs.core._nth.call(null,chunk__13280,i__13282);
var map__13283__$1 = ((((!((map__13283 == null)))?(((((map__13283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13283):map__13283);
var note = map__13283__$1;
var time = cljs.core.get.call(null,map__13283__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__13283__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__13283__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_13287 = (time + from);
var synth_instance_13288 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_13289 = cljs_bach.synthesis.connect.call(null,synth_instance_13288,cljs_bach.synthesis.destination);
connected_instance_13289.call(null,audiocontext,at_13287,duration);


var G__13290 = seq__13279;
var G__13291 = chunk__13280;
var G__13292 = count__13281;
var G__13293 = (i__13282 + (1));
seq__13279 = G__13290;
chunk__13280 = G__13291;
count__13281 = G__13292;
i__13282 = G__13293;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__13279);
if(temp__5457__auto__){
var seq__13279__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13279__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__13279__$1);
var G__13294 = cljs.core.chunk_rest.call(null,seq__13279__$1);
var G__13295 = c__4351__auto__;
var G__13296 = cljs.core.count.call(null,c__4351__auto__);
var G__13297 = (0);
seq__13279 = G__13294;
chunk__13280 = G__13295;
count__13281 = G__13296;
i__13282 = G__13297;
continue;
} else {
var map__13285 = cljs.core.first.call(null,seq__13279__$1);
var map__13285__$1 = ((((!((map__13285 == null)))?(((((map__13285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13285):map__13285);
var note = map__13285__$1;
var time = cljs.core.get.call(null,map__13285__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__13285__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var instrument = cljs.core.get.call(null,map__13285__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var at_13298 = (time + from);
var synth_instance_13299 = instrument.call(null,cljs.core.dissoc.call(null,cljs.core.update.call(null,note,new cljs.core.Keyword(null,"pitch","pitch",1495126700),leipzig.temperament.equal),new cljs.core.Keyword(null,"time","time",1385887882)));
var connected_instance_13300 = cljs_bach.synthesis.connect.call(null,synth_instance_13299,cljs_bach.synthesis.destination);
connected_instance_13300.call(null,audiocontext,at_13298,duration);


var G__13301 = cljs.core.next.call(null,seq__13279__$1);
var G__13302 = null;
var G__13303 = (0);
var G__13304 = (0);
seq__13279 = G__13301;
chunk__13280 = G__13302;
count__13281 = G__13303;
i__13282 = G__13304;
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
return mecca.core.play_from_BANG_.call(null,audiocontext,cljs_bach.synthesis.current_time.call(null,audiocontext),notes);
});
mecca.core.staff = (function mecca$core$staff(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 100 10"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.028,0.028)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M95,0C46.286,0,20,35.035,20,68c0,16.393,5.134,30.499,14.848,40.794C44.851,119.396,58.736,125,75,125\n\t\tc16.569,0,30-13.431,30-30S91.569,65,75,65c-9.828,0-18.551,4.726-24.023,12.028C50.234,73.834,50,70.676,50,68\n\t\tc0-18.884,15.457-38,45-38c37.664,0,65,35.748,65,85c0,47.058-20.573,76.48-37.831,92.875C100.995,227.991,72.146,240,45,240v30\n\t\tc35.164,0,70.822-14.716,97.831-40.375C173.248,200.729,190,160.02,190,115c0-31.97-9.544-61.113-26.874-82.062\n\t\tC145.554,11.698,121.36,0,95,0z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(235),new cljs.core.Keyword(null,"cy","cy",755331060),(54),new cljs.core.Keyword(null,"r","r",-471384190),(15)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(235),new cljs.core.Keyword(null,"cy","cy",755331060),(114),new cljs.core.Keyword(null,"r","r",-471384190),(15)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$core$staff_$_iter__13305(s__13306){
return (new cljs.core.LazySeq(null,(function (){
var s__13306__$1 = s__13306;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__13306__$1);
if(temp__5457__auto__){
var s__13306__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13306__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13306__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13308 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13307 = (0);
while(true){
if((i__13307 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__13307);
cljs.core.chunk_append.call(null,b__13308,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(100),new cljs.core.Keyword(null,"y2","y2",-718691301),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__13309 = (i__13307 + (1));
i__13307 = G__13309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13308),mecca$core$staff_$_iter__13305.call(null,cljs.core.chunk_rest.call(null,s__13306__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13308),null);
}
} else {
var y = cljs.core.first.call(null,s__13306__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(100),new cljs.core.Keyword(null,"y2","y2",-718691301),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$core$staff_$_iter__13305.call(null,cljs.core.rest.call(null,s__13306__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(5)));
})())], null);
});
mecca.core.mecca = (function mecca$core$mecca(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"MECCA Music Platform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The Music Education, Composition & Creation Application"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mario","div.mario",-1368725782)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.staff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return mecca.core.play_BANG_.call(null,mecca.music.context,leipzig.melody.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),mecca.music.bass,mecca.music.melody.call(null)));
})], null),"Play"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.note_grid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Mouse-pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.core.mouse_pos))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Presets: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
cljs.core.reset_BANG_.call(null,mecca.music.pitches,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(5),(10),(5),(10),(5),(10),(5),(10),(5),(10),(5),(10),(5),(10),(5)], null));

return cljs.core.reset_BANG_.call(null,mecca.music.durations,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25], null));
})], null),"Alberti-bass"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Pitches: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.pitches))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Durations: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.durations))].join('')], null)], null)], null);
});
mecca.core.mount = (function mecca$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.core.mecca], null),el);
});
mecca.core.mount_app_element = (function mecca$core$mount_app_element(){
var temp__5457__auto__ = mecca.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return mecca.core.mount.call(null,el);
} else {
return null;
}
});
mecca.core.mount_app_element.call(null);
mecca.core.on_reload = (function mecca$core$on_reload(){
return mecca.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
