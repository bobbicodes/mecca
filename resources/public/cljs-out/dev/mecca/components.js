// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.components');
goog.require('cljs.core');
goog.require('mecca.music');
goog.require('mecca.subs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('leipzig.melody');
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),e.target.value], null));
})], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__27738(s__27739){
return (new cljs.core.LazySeq(null,(function (){
var s__27739__$1 = s__27739;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27739__$1);
if(temp__5457__auto__){
var s__27739__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27739__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27739__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27741 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27740 = (0);
while(true){
if((i__27740 < size__4323__auto__)){
var scale = cljs.core._nth.call(null,c__4322__auto__,i__27740);
cljs.core.chunk_append.call(null,b__27741,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)));

var G__27742 = (i__27740 + (1));
i__27740 = G__27742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27741),mecca$components$scale_picker_$_iter__27738.call(null,cljs.core.chunk_rest.call(null,s__27739__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27741),null);
}
} else {
var scale = cljs.core.first.call(null,s__27739__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)),mecca$components$scale_picker_$_iter__27738.call(null,cljs.core.rest.call(null,s__27739__$2)));
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
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__27743(s__27744){
return (new cljs.core.LazySeq(null,(function (){
var s__27744__$1 = s__27744;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27744__$1);
if(temp__5457__auto__){
var s__27744__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27744__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27744__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27746 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27745 = (0);
while(true){
if((i__27745 < size__4323__auto__)){
var note = cljs.core._nth.call(null,c__4322__auto__,i__27745);
cljs.core.chunk_append.call(null,b__27746,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)));

var G__27747 = (i__27745 + (1));
i__27745 = G__27747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27746),mecca$components$key_picker_$_iter__27743.call(null,cljs.core.chunk_rest.call(null,s__27744__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27746),null);
}
} else {
var note = cljs.core.first.call(null,s__27744__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)),mecca$components$key_picker_$_iter__27743.call(null,cljs.core.rest.call(null,s__27744__$2)));
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
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-octave","set-octave",378200257),e.target.value], null));
})], null)], null)], null);
});
mecca.components.tempo_input = (function mecca$components$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"8%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),e.target.value], null));
})], null)], null)], null);
});
mecca.components.blank = (function mecca$components$blank(p__27748){
var vec__27749 = p__27748;
var x = cljs.core.nth.call(null,vec__27749,(0),null);
var y = cljs.core.nth.call(null,vec__27749,(1),null);
var focused_QMARK_ = cljs.core.atom.call(null,false);
return ((function (focused_QMARK_,vec__27749,x,y){
return (function (p__27752){
var vec__27753 = p__27752;
var x__$1 = cljs.core.nth.call(null,vec__27753,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__27753,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(y__$1 * 0.75),"black",((function (vec__27753,x__$1,y__$1,focused_QMARK_,vec__27749,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__27753,x__$1,y__$1,focused_QMARK_,vec__27749,x,y))
,(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"violet":((clojure.string.includes_QMARK_.call(null,mecca.music.midi_num__GT_note.call(null,y__$1),"#"))?"pink":"white"
)),(1),((function (vec__27753,x__$1,y__$1,focused_QMARK_,vec__27749,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)], null));
});})(vec__27753,x__$1,y__$1,focused_QMARK_,vec__27749,x,y))
,0.05,((function (vec__27753,x__$1,y__$1,focused_QMARK_,vec__27749,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__27753,x__$1,y__$1,focused_QMARK_,vec__27749,x,y))
,((1) + x__$1),0.75])], null);
});
;})(focused_QMARK_,vec__27749,x,y))
});
mecca.components.note_label = (function mecca$components$note_label(y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0.5 + (y * 0.75)),new cljs.core.Keyword(null,"height","height",1025178622),0.75,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"left",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),0.5], null),mecca.music.midi_num__GT_note.call(null,y)], null);
});
mecca.components.grid_lines = (function mecca$components$grid_lines(p__27756){
var vec__27757 = p__27756;
var x = cljs.core.nth.call(null,vec__27757,(0),null);
var y = cljs.core.nth.call(null,vec__27757,(1),null);
var line_focused_QMARK_ = cljs.core.atom.call(null,false);
var notes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
var note_endings = cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (line_focused_QMARK_,notes,vec__27757,x,y){
return (function mecca$components$grid_lines_$_iter__27760(s__27761){
return (new cljs.core.LazySeq(null,((function (line_focused_QMARK_,notes,vec__27757,x,y){
return (function (){
var s__27761__$1 = s__27761;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27761__$1);
if(temp__5457__auto__){
var s__27761__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27761__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27761__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27763 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27762 = (0);
while(true){
if((i__27762 < size__4323__auto__)){
var map__27764 = cljs.core._nth.call(null,c__4322__auto__,i__27762);
var map__27764__$1 = ((((!((map__27764 == null)))?(((((map__27764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27764):map__27764);
var time = cljs.core.get.call(null,map__27764__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__27764__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__27764__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__27763,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null));

var G__27772 = (i__27762 + (1));
i__27762 = G__27772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27763),mecca$components$grid_lines_$_iter__27760.call(null,cljs.core.chunk_rest.call(null,s__27761__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27763),null);
}
} else {
var map__27766 = cljs.core.first.call(null,s__27761__$2);
var map__27766__$1 = ((((!((map__27766 == null)))?(((((map__27766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27766):map__27766);
var time = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null),mecca$components$grid_lines_$_iter__27760.call(null,cljs.core.rest.call(null,s__27761__$2)));
}
} else {
return null;
}
break;
}
});})(line_focused_QMARK_,notes,vec__27757,x,y))
,null,null));
});})(line_focused_QMARK_,notes,vec__27757,x,y))
;
return iter__4324__auto__.call(null,notes);
})());
return ((function (line_focused_QMARK_,notes,note_endings,vec__27757,x,y){
return (function (p__27768){
var vec__27769 = p__27768;
var x__$1 = cljs.core.nth.call(null,vec__27769,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__27769,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,note_endings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?"black":"lightgrey"
)),((function (vec__27769,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__27757,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__27769,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__27757,x,y))
,(- y__$1),mecca.events.mouse_down_handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(cljs.core.deref.call(null,line_focused_QMARK_))?"ew-resize":null)], null),((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?0.075:0.04),((function (vec__27769,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__27757,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__27769,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__27757,x,y))
,x__$1,(y__$1 - (1)),x__$1])], null);
});
;})(line_focused_QMARK_,notes,note_endings,vec__27757,x,y))
});
mecca.components.note = (function mecca$components$note(p__27773){
var vec__27774 = p__27773;
var x = cljs.core.nth.call(null,vec__27774,(0),null);
var y = cljs.core.nth.call(null,vec__27774,(1),null);
var focused_QMARK_ = cljs.core.atom.call(null,false);
var bassline = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null)));
return ((function (focused_QMARK_,bassline,vec__27774,x,y){
return (function (p__27777){
var vec__27778 = p__27777;
var x__$1 = cljs.core.nth.call(null,vec__27778,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__27778,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.75 * y__$1),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,mecca.events.selected),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":null),((function (vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y))
,"blue",(((4) * bassline.call(null,x__$1)) - 0.05),((function (vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,null], null)], null));
});})(vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y))
,0.1,((function (vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y))
,((1) + x__$1),0.75])], null),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1.5 + x__$1)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 + (0.75 * y__$1))),") ","scale(0.15)"].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,null], null)], null));
});})(vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__27778,x__$1,y__$1,focused_QMARK_,bassline,vec__27774,x,y))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(-1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null)], null):null)], null);
});
;})(focused_QMARK_,bassline,vec__27774,x,y))
});
mecca.components.note_stem = (function mecca$components$note_stem(p__27781){
var vec__27782 = p__27781;
var x = cljs.core.nth.call(null,vec__27782,(0),null);
var y = cljs.core.nth.call(null,vec__27782,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.35,new cljs.core.Keyword(null,"x1","x1",-1863922247),((((10) > y))?(9.1 + (5.25 * x)):(10.9 + (5.25 * x))),new cljs.core.Keyword(null,"x2","x2",-1362513475),((((10) > y))?(9.1 + (5.25 * x)):(10.9 + (5.25 * x))),new cljs.core.Keyword(null,"y1","y1",589123466),((((10) > y))?(y - 4.25):((y - (5)) - 4.25)),new cljs.core.Keyword(null,"y2","y2",-718691301),((((10) > y))?(((5) + y) - 4.25):(y - 4.25))], null)], null)], null);
});
mecca.components.note_head = (function mecca$components$note_head(p__27785){
var vec__27786 = p__27785;
var x = cljs.core.nth.call(null,vec__27786,(0),null);
var y = cljs.core.nth.call(null,vec__27786,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),((10) + (5.25 * x)),new cljs.core.Keyword(null,"cy","cy",755331060),((0.74 * y) - 2.1),new cljs.core.Keyword(null,"rx","rx",1627208482),1.15,new cljs.core.Keyword(null,"ry","ry",-334598563),0.8], null)], null)], null);
});
mecca.components.staff = (function mecca$components$staff(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 100 10"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.028,0.028)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M95,0C46.286,0,20,35.035,20,68c0,16.393,5.134,30.499,14.848,40.794C44.851,119.396,58.736,125,75,125\n\t\tc16.569,0,30-13.431,30-30S91.569,65,75,65c-9.828,0-18.551,4.726-24.023,12.028C50.234,73.834,50,70.676,50,68\n\t\tc0-18.884,15.457-38,45-38c37.664,0,65,35.748,65,85c0,47.058-20.573,76.48-37.831,92.875C100.995,227.991,72.146,240,45,240v30\n\t\tc35.164,0,70.822-14.716,97.831-40.375C173.248,200.729,190,160.02,190,115c0-31.97-9.544-61.113-26.874-82.062\n\t\tC145.554,11.698,121.36,0,95,0z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(235),new cljs.core.Keyword(null,"cy","cy",755331060),(54),new cljs.core.Keyword(null,"r","r",-471384190),(15)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(235),new cljs.core.Keyword(null,"cy","cy",755331060),(114),new cljs.core.Keyword(null,"r","r",-471384190),(15)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$staff_$_iter__27789(s__27790){
return (new cljs.core.LazySeq(null,(function (){
var s__27790__$1 = s__27790;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27790__$1);
if(temp__5457__auto__){
var s__27790__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27790__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27790__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27792 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27791 = (0);
while(true){
if((i__27791 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__27791);
cljs.core.chunk_append.call(null,b__27792,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(100),new cljs.core.Keyword(null,"y2","y2",-718691301),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__27801 = (i__27791 + (1));
i__27791 = G__27801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27792),mecca$components$staff_$_iter__27789.call(null,cljs.core.chunk_rest.call(null,s__27790__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27792),null);
}
} else {
var y = cljs.core.first.call(null,s__27790__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(100),new cljs.core.Keyword(null,"y2","y2",-718691301),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$components$staff_$_iter__27789.call(null,cljs.core.rest.call(null,s__27790__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(5)));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$staff_$_iter__27793(s__27794){
return (new cljs.core.LazySeq(null,(function (){
var s__27794__$1 = s__27794;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27794__$1);
if(temp__5457__auto__){
var s__27794__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27794__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27794__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27796 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27795 = (0);
while(true){
if((i__27795 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__27795);
var y = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__27796,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_head,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__27802 = (i__27795 + (1));
i__27795 = G__27802;
continue;
} else {
var G__27803 = (i__27795 + (1));
i__27795 = G__27803;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27796),mecca$components$staff_$_iter__27793.call(null,cljs.core.chunk_rest.call(null,s__27794__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27796),null);
}
} else {
var x = cljs.core.first.call(null,s__27794__$2);
var y = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_head,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$staff_$_iter__27793.call(null,cljs.core.rest.call(null,s__27794__$2)));
} else {
var G__27804 = cljs.core.rest.call(null,s__27794__$2);
s__27794__$1 = G__27804;
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,(16)));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$staff_$_iter__27797(s__27798){
return (new cljs.core.LazySeq(null,(function (){
var s__27798__$1 = s__27798;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27798__$1);
if(temp__5457__auto__){
var s__27798__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27798__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27798__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27800 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27799 = (0);
while(true){
if((i__27799 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__27799);
var y = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__27800,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_stem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__27805 = (i__27799 + (1));
i__27799 = G__27805;
continue;
} else {
var G__27806 = (i__27799 + (1));
i__27799 = G__27806;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27800),mecca$components$staff_$_iter__27797.call(null,cljs.core.chunk_rest.call(null,s__27798__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27800),null);
}
} else {
var x = cljs.core.first.call(null,s__27798__$2);
var y = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_stem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$staff_$_iter__27797.call(null,cljs.core.rest.call(null,s__27798__$2)));
} else {
var G__27807 = cljs.core.rest.call(null,s__27798__$2);
s__27798__$1 = G__27807;
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,(16)));
})())], null);
});
mecca.components.mecca = (function mecca$components$mecca(){
var active = reagent.core.atom.call(null,null);
return ((function (active){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"MECCA Music Platform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The Music Education, Composition & Creation Application"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mario","div.mario",-1368725782)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.staff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active){
return (function (e){
return mecca.music.play_bassline_BANG_.call(null);
});})(active))
], null),"Play Bassline"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Patterns: ",cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (active){
return (function mecca$components$mecca_$_iter__27808(s__27809){
return (new cljs.core.LazySeq(null,((function (active){
return (function (){
var s__27809__$1 = s__27809;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27809__$1);
if(temp__5457__auto__){
var s__27809__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27809__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__27809__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__27811 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__27810 = (0);
while(true){
if((i__27810 < size__4323__auto__)){
var vec__27812 = cljs.core._nth.call(null,c__4322__auto__,i__27810);
var x = cljs.core.nth.call(null,vec__27812,(0),null);
var pattern = cljs.core.nth.call(null,vec__27812,(1),null);
cljs.core.chunk_append.call(null,b__27811,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27810,vec__27812,x,pattern,c__4322__auto__,size__4323__auto__,b__27811,s__27809__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,pattern)))], null));

return cljs.core.reset_BANG_.call(null,active,x);
});})(i__27810,vec__27812,x,pattern,c__4322__auto__,size__4323__auto__,b__27811,s__27809__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,x,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__27818 = (i__27810 + (1));
i__27810 = G__27818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27811),mecca$components$mecca_$_iter__27808.call(null,cljs.core.chunk_rest.call(null,s__27809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27811),null);
}
} else {
var vec__27815 = cljs.core.first.call(null,s__27809__$2);
var x = cljs.core.nth.call(null,vec__27815,(0),null);
var pattern = cljs.core.nth.call(null,vec__27815,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27815,x,pattern,s__27809__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,pattern)))], null));

return cljs.core.reset_BANG_.call(null,active,x);
});})(vec__27815,x,pattern,s__27809__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,x,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$mecca_$_iter__27808.call(null,cljs.core.rest.call(null,s__27809__$2)));
}
} else {
return null;
}
break;
}
});})(active))
,null,null));
});})(active))
;
return iter__4324__auto__.call(null,cljs.core.seq.call(null,mecca.music.basslines));
})())], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Scale: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Octave: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))))].join('')], null)], null)], null);
});
;})(active))
});

//# sourceMappingURL=components.js.map
