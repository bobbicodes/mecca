// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.components');
goog.require('cljs.core');
goog.require('mecca.music');
goog.require('reagent.core');
goog.require('mecca.events');
goog.require('leipzig.melody');
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.call(null,mecca.music.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"scale","scale",-230427353),e.target.value);
})], null),(function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__18666(s__18667){
return (new cljs.core.LazySeq(null,(function (){
var s__18667__$1 = s__18667;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18667__$1);
if(temp__5457__auto__){
var s__18667__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18667__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18667__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18669 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18668 = (0);
while(true){
if((i__18668 < size__4323__auto__)){
var scale = cljs.core._nth.call(null,c__4322__auto__,i__18668);
cljs.core.chunk_append.call(null,b__18669,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)));

var G__18670 = (i__18668 + (1));
i__18668 = G__18670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18669),mecca$components$scale_picker_$_iter__18666.call(null,cljs.core.chunk_rest.call(null,s__18667__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18669),null);
}
} else {
var scale = cljs.core.first.call(null,s__18667__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)),mecca$components$scale_picker_$_iter__18666.call(null,cljs.core.rest.call(null,s__18667__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.keys.call(null,mecca.music.scales));
})()], null)], null);
});
mecca.components.key_picker = (function mecca$components$key_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Key: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.call(null,mecca.music.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587),e.target.value);
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__18671(s__18672){
return (new cljs.core.LazySeq(null,(function (){
var s__18672__$1 = s__18672;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18672__$1);
if(temp__5457__auto__){
var s__18672__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18672__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18672__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18674 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18673 = (0);
while(true){
if((i__18673 < size__4323__auto__)){
var note = cljs.core._nth.call(null,c__4322__auto__,i__18673);
cljs.core.chunk_append.call(null,b__18674,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)));

var G__18675 = (i__18673 + (1));
i__18673 = G__18675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18674),mecca$components$key_picker_$_iter__18671.call(null,cljs.core.chunk_rest.call(null,s__18672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18674),null);
}
} else {
var note = cljs.core.first.call(null,s__18672__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)),mecca$components$key_picker_$_iter__18671.call(null,cljs.core.rest.call(null,s__18672__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Octave: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"6%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"octave","octave",1066197953).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.call(null,mecca.music.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"octave","octave",1066197953),e.target.value);
})], null)], null)], null);
});
mecca.components.tempo_input = (function mecca$components$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"8%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgray"], null),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"tempo","tempo",-1555208453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.call(null,mecca.music.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),e.target.value);
})], null)], null)], null);
});
mecca.components.blank = (function mecca$components$blank(p__18676){
var vec__18677 = p__18676;
var x = cljs.core.nth.call(null,vec__18677,(0),null);
var y = cljs.core.nth.call(null,vec__18677,(1),null);
var focused_QMARK_ = cljs.core.atom.call(null,false);
return ((function (focused_QMARK_,vec__18677,x,y){
return (function (p__18680){
var vec__18681 = p__18680;
var x__$1 = cljs.core.nth.call(null,vec__18681,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__18681,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(y__$1 * 0.75),"black",((function (vec__18681,x__$1,y__$1,focused_QMARK_,vec__18677,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__18681,x__$1,y__$1,focused_QMARK_,vec__18677,x,y))
,(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?"violet":((clojure.string.includes_QMARK_.call(null,mecca.music.midi_num__GT_note.call(null,mecca.music.y__GT_midi.call(null,y__$1)),"#"))?"pink":"white"
)),(1),((function (vec__18681,x__$1,y__$1,focused_QMARK_,vec__18677,x,y){
return (function (e){
cljs.core.swap_BANG_.call(null,mecca.music.pitches,cljs.core.assoc,x__$1,y__$1);

return cljs.core.swap_BANG_.call(null,mecca.music.durations,cljs.core.assoc,x__$1,0.25);
});})(vec__18681,x__$1,y__$1,focused_QMARK_,vec__18677,x,y))
,0.05,((function (vec__18681,x__$1,y__$1,focused_QMARK_,vec__18677,x,y){
return (function (e){
cljs.core.reset_BANG_.call(null,focused_QMARK_,true);

return cljs.core.reset_BANG_.call(null,mecca.events.focused,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
});})(vec__18681,x__$1,y__$1,focused_QMARK_,vec__18677,x,y))
,((1) + x__$1),0.75])], null);
});
;})(focused_QMARK_,vec__18677,x,y))
});
mecca.components.note_label = (function mecca$components$note_label(y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0.5 + (y * 0.75)),new cljs.core.Keyword(null,"height","height",1025178622),0.75,new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"left",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),0.5], null),mecca.music.midi_num__GT_note.call(null,mecca.music.y__GT_midi.call(null,y))], null);
});
mecca.components.grid_lines = (function mecca$components$grid_lines(p__18684){
var vec__18685 = p__18684;
var x = cljs.core.nth.call(null,vec__18685,(0),null);
var y = cljs.core.nth.call(null,vec__18685,(1),null);
var line_focused_QMARK_ = cljs.core.atom.call(null,false);
var notes = leipzig.melody.phrase.call(null,cljs.core.deref.call(null,mecca.music.durations),cljs.core.deref.call(null,mecca.music.pitches));
var note_endings = cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (line_focused_QMARK_,notes,vec__18685,x,y){
return (function mecca$components$grid_lines_$_iter__18688(s__18689){
return (new cljs.core.LazySeq(null,((function (line_focused_QMARK_,notes,vec__18685,x,y){
return (function (){
var s__18689__$1 = s__18689;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18689__$1);
if(temp__5457__auto__){
var s__18689__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18689__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18689__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18691 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18690 = (0);
while(true){
if((i__18690 < size__4323__auto__)){
var map__18692 = cljs.core._nth.call(null,c__4322__auto__,i__18690);
var map__18692__$1 = ((((!((map__18692 == null)))?(((((map__18692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18692):map__18692);
var time = cljs.core.get.call(null,map__18692__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__18692__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__18692__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__18691,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null));

var G__18700 = (i__18690 + (1));
i__18690 = G__18700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18691),mecca$components$grid_lines_$_iter__18688.call(null,cljs.core.chunk_rest.call(null,s__18689__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18691),null);
}
} else {
var map__18694 = cljs.core.first.call(null,s__18689__$2);
var map__18694__$1 = ((((!((map__18694 == null)))?(((((map__18694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18694):map__18694);
var time = cljs.core.get.call(null,map__18694__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var duration = cljs.core.get.call(null,map__18694__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var pitch = cljs.core.get.call(null,map__18694__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((time + duration) + (1)),pitch], null),mecca$components$grid_lines_$_iter__18688.call(null,cljs.core.rest.call(null,s__18689__$2)));
}
} else {
return null;
}
break;
}
});})(line_focused_QMARK_,notes,vec__18685,x,y))
,null,null));
});})(line_focused_QMARK_,notes,vec__18685,x,y))
;
return iter__4324__auto__.call(null,notes);
})());
return ((function (line_focused_QMARK_,notes,note_endings,vec__18685,x,y){
return (function (p__18696){
var vec__18697 = p__18696;
var x__$1 = cljs.core.nth.call(null,vec__18697,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__18697,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],[((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,note_endings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?"black":"lightgrey"
)),((function (vec__18697,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__18685,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__18697,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__18685,x,y))
,(- y__$1),mecca.events.mouse_down_handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(cljs.core.deref.call(null,line_focused_QMARK_))?"ew-resize":null)], null),((cljs.core._EQ_.call(null,(1),cljs.core.mod.call(null,x__$1,(4))))?0.075:0.04),((function (vec__18697,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__18685,x,y){
return (function (e){
return cljs.core.swap_BANG_.call(null,line_focused_QMARK_,cljs.core.not);
});})(vec__18697,x__$1,y__$1,line_focused_QMARK_,notes,note_endings,vec__18685,x,y))
,x__$1,(y__$1 - (1)),x__$1])], null);
});
;})(line_focused_QMARK_,notes,note_endings,vec__18685,x,y))
});
mecca.components.note = (function mecca$components$note(p__18701){
var vec__18702 = p__18701;
var x = cljs.core.nth.call(null,vec__18702,(0),null);
var y = cljs.core.nth.call(null,vec__18702,(1),null);
var focused_QMARK_ = cljs.core.atom.call(null,false);
return ((function (focused_QMARK_,vec__18702,x,y){
return (function (p__18705){
var vec__18706 = p__18705;
var x__$1 = cljs.core.nth.call(null,vec__18706,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__18706,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(0.75 * y__$1),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,mecca.events.selected),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?"red":null),((function (vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y))
,"blue",(((4) * cljs.core.get.call(null,cljs.core.deref.call(null,mecca.music.durations),x__$1)) - 0.05),((function (vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y){
return (function (e){
cljs.core.swap_BANG_.call(null,mecca.music.pitches,cljs.core.assoc,x__$1,null);

return cljs.core.swap_BANG_.call(null,mecca.music.durations,cljs.core.assoc,x__$1,(0));
});})(vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y))
,0.1,((function (vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y))
,((1) + x__$1),0.75])], null),(cljs.core.truth_(cljs.core.deref.call(null,focused_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1.5 + x__$1)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 + (0.75 * y__$1))),") ","scale(0.15)"].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,true);
});})(vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y){
return (function (e){
cljs.core.swap_BANG_.call(null,mecca.music.pitches,cljs.core.assoc,x__$1,null);

return cljs.core.swap_BANG_.call(null,mecca.music.durations,cljs.core.assoc,x__$1,(0));
});})(vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y){
return (function (e){
return cljs.core.reset_BANG_.call(null,focused_QMARK_,false);
});})(vec__18706,x__$1,y__$1,focused_QMARK_,vec__18702,x,y))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(-1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null)], null):null)], null);
});
;})(focused_QMARK_,vec__18702,x,y))
});
mecca.components.note_grid = (function mecca$components$note_grid(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((mecca.music.bar_length + (1)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.75 * (((2) * cljs.core.count.call(null,cljs.core.get.call(null,mecca.music.scales,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state))))) - (1))))].join('')], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$note_grid_$_iter__18709(s__18710){
return (new cljs.core.LazySeq(null,(function (){
var s__18710__$1 = s__18710;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18710__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__18710__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function mecca$components$note_grid_$_iter__18709_$_iter__18711(s__18712){
return (new cljs.core.LazySeq(null,((function (s__18710__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__18712__$1 = s__18712;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__18712__$1);
if(temp__5457__auto____$1){
var s__18712__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18712__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18712__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18714 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18713 = (0);
while(true){
if((i__18713 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__18713);
cljs.core.chunk_append.call(null,b__18714,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.blank,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__18729 = (i__18713 + (1));
i__18713 = G__18729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18714),mecca$components$note_grid_$_iter__18709_$_iter__18711.call(null,cljs.core.chunk_rest.call(null,s__18712__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18714),null);
}
} else {
var y = cljs.core.first.call(null,s__18712__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.blank,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$note_grid_$_iter__18709_$_iter__18711.call(null,cljs.core.rest.call(null,s__18712__$2)));
}
} else {
return null;
}
break;
}
});})(s__18710__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__18710__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,cljs.core.get.call(null,mecca.music.scales,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state))))) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$note_grid_$_iter__18709.call(null,cljs.core.rest.call(null,s__18710__$1)));
} else {
var G__18730 = cljs.core.rest.call(null,s__18710__$1);
s__18710__$1 = G__18730;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,mecca.music.bar_length));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$note_grid_$_iter__18715(s__18716){
return (new cljs.core.LazySeq(null,(function (){
var s__18716__$1 = s__18716;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18716__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__18716__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function mecca$components$note_grid_$_iter__18715_$_iter__18717(s__18718){
return (new cljs.core.LazySeq(null,((function (s__18716__$1,x,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__18718__$1 = s__18718;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__18718__$1);
if(temp__5457__auto____$1){
var s__18718__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18718__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18718__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18720 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18719 = (0);
while(true){
if((i__18719 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__18719);
cljs.core.chunk_append.call(null,b__18720,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__18731 = (i__18719 + (1));
i__18719 = G__18731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18720),mecca$components$note_grid_$_iter__18715_$_iter__18717.call(null,cljs.core.chunk_rest.call(null,s__18718__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18720),null);
}
} else {
var y = cljs.core.first.call(null,s__18718__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.grid_lines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$note_grid_$_iter__18715_$_iter__18717.call(null,cljs.core.rest.call(null,s__18718__$2)));
}
} else {
return null;
}
break;
}
});})(s__18716__$1,x,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__18716__$1,x,xs__6012__auto__,temp__5457__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(((2) * cljs.core.count.call(null,cljs.core.get.call(null,mecca.music.scales,new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.app_state))))) - (1)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$note_grid_$_iter__18715.call(null,cljs.core.rest.call(null,s__18716__$1)));
} else {
var G__18732 = cljs.core.rest.call(null,s__18716__$1);
s__18716__$1 = G__18732;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),((4) * mecca.music.bar_length),0.25));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$note_grid_$_iter__18721(s__18722){
return (new cljs.core.LazySeq(null,(function (){
var s__18722__$1 = s__18722;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18722__$1);
if(temp__5457__auto__){
var s__18722__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18722__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18722__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18724 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18723 = (0);
while(true){
if((i__18723 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__18723);
var y = cljs.core.get.call(null,cljs.core.deref.call(null,mecca.music.pitches),x);
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__18724,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__18733 = (i__18723 + (1));
i__18723 = G__18733;
continue;
} else {
var G__18734 = (i__18723 + (1));
i__18723 = G__18734;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18724),mecca$components$note_grid_$_iter__18721.call(null,cljs.core.chunk_rest.call(null,s__18722__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18724),null);
}
} else {
var x = cljs.core.first.call(null,s__18722__$2);
var y = cljs.core.get.call(null,cljs.core.deref.call(null,mecca.music.pitches),x);
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$note_grid_$_iter__18721.call(null,cljs.core.rest.call(null,s__18722__$2)));
} else {
var G__18735 = cljs.core.rest.call(null,s__18722__$2);
s__18722__$1 = G__18735;
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,mecca.music.bar_length));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$note_grid_$_iter__18725(s__18726){
return (new cljs.core.LazySeq(null,(function (){
var s__18726__$1 = s__18726;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18726__$1);
if(temp__5457__auto__){
var s__18726__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18726__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18726__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18728 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18727 = (0);
while(true){
if((i__18727 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__18727);
cljs.core.chunk_append.call(null,b__18728,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_label,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__18736 = (i__18727 + (1));
i__18727 = G__18736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18728),mecca$components$note_grid_$_iter__18725.call(null,cljs.core.chunk_rest.call(null,s__18726__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18728),null);
}
} else {
var y = cljs.core.first.call(null,s__18726__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_label,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$components$note_grid_$_iter__18725.call(null,cljs.core.rest.call(null,s__18726__$2)));
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
mecca.components.note_stem = (function mecca$components$note_stem(p__18743){
var vec__18744 = p__18743;
var x = cljs.core.nth.call(null,vec__18744,(0),null);
var y = cljs.core.nth.call(null,vec__18744,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3,new cljs.core.Keyword(null,"x1","x1",-1863922247),(10.75 + (5.25 * x)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(10.75 + (5.25 * x)),new cljs.core.Keyword(null,"y1","y1",589123466),((((10) > y))?(y - 3.5):((y - (5)) - 3.5)),new cljs.core.Keyword(null,"y2","y2",-718691301),((((10) > y))?(((5) + y) - 3.5):(y - 3.5))], null)], null)], null);
});
mecca.components.note_head = (function mecca$components$note_head(p__18752){
var vec__18753 = p__18752;
var x = cljs.core.nth.call(null,vec__18753,(0),null);
var y = cljs.core.nth.call(null,vec__18753,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),((10) + (5.25 * x)),new cljs.core.Keyword(null,"cy","cy",755331060),((0.75 * y) - 2.1),new cljs.core.Keyword(null,"rx","rx",1627208482),1.15,new cljs.core.Keyword(null,"ry","ry",-334598563),0.8], null)], null)], null);
});
mecca.components.staff = (function mecca$components$staff(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 100 10"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.028,0.028)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M95,0C46.286,0,20,35.035,20,68c0,16.393,5.134,30.499,14.848,40.794C44.851,119.396,58.736,125,75,125\n\t\tc16.569,0,30-13.431,30-30S91.569,65,75,65c-9.828,0-18.551,4.726-24.023,12.028C50.234,73.834,50,70.676,50,68\n\t\tc0-18.884,15.457-38,45-38c37.664,0,65,35.748,65,85c0,47.058-20.573,76.48-37.831,92.875C100.995,227.991,72.146,240,45,240v30\n\t\tc35.164,0,70.822-14.716,97.831-40.375C173.248,200.729,190,160.02,190,115c0-31.97-9.544-61.113-26.874-82.062\n\t\tC145.554,11.698,121.36,0,95,0z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(235),new cljs.core.Keyword(null,"cy","cy",755331060),(54),new cljs.core.Keyword(null,"r","r",-471384190),(15)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(235),new cljs.core.Keyword(null,"cy","cy",755331060),(114),new cljs.core.Keyword(null,"r","r",-471384190),(15)], null)], null)], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$staff_$_iter__18757(s__18758){
return (new cljs.core.LazySeq(null,(function (){
var s__18758__$1 = s__18758;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18758__$1);
if(temp__5457__auto__){
var s__18758__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18758__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18758__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18760 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18759 = (0);
while(true){
if((i__18759 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__18759);
cljs.core.chunk_append.call(null,b__18760,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(100),new cljs.core.Keyword(null,"y2","y2",-718691301),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__18787 = (i__18759 + (1));
i__18759 = G__18787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18760),mecca$components$staff_$_iter__18757.call(null,cljs.core.chunk_rest.call(null,s__18758__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18760),null);
}
} else {
var y = cljs.core.first.call(null,s__18758__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(100),new cljs.core.Keyword(null,"y2","y2",-718691301),(0.25 + ((2) * y)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$components$staff_$_iter__18757.call(null,cljs.core.rest.call(null,s__18758__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(5)));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$staff_$_iter__18769(s__18770){
return (new cljs.core.LazySeq(null,(function (){
var s__18770__$1 = s__18770;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18770__$1);
if(temp__5457__auto__){
var s__18770__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18770__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18770__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18772 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18771 = (0);
while(true){
if((i__18771 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__18771);
var y = cljs.core.get.call(null,cljs.core.deref.call(null,mecca.music.pitches),x);
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__18772,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_head,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__18794 = (i__18771 + (1));
i__18771 = G__18794;
continue;
} else {
var G__18795 = (i__18771 + (1));
i__18771 = G__18795;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18772),mecca$components$staff_$_iter__18769.call(null,cljs.core.chunk_rest.call(null,s__18770__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18772),null);
}
} else {
var x = cljs.core.first.call(null,s__18770__$2);
var y = cljs.core.get.call(null,cljs.core.deref.call(null,mecca.music.pitches),x);
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_head,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$staff_$_iter__18769.call(null,cljs.core.rest.call(null,s__18770__$2)));
} else {
var G__18796 = cljs.core.rest.call(null,s__18770__$2);
s__18770__$1 = G__18796;
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,mecca.music.bar_length));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$staff_$_iter__18773(s__18774){
return (new cljs.core.LazySeq(null,(function (){
var s__18774__$1 = s__18774;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18774__$1);
if(temp__5457__auto__){
var s__18774__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18774__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18774__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18776 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18775 = (0);
while(true){
if((i__18775 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__18775);
var y = cljs.core.get.call(null,cljs.core.deref.call(null,mecca.music.pitches),x);
if(typeof y === 'number'){
cljs.core.chunk_append.call(null,b__18776,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_stem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__18797 = (i__18775 + (1));
i__18775 = G__18797;
continue;
} else {
var G__18798 = (i__18775 + (1));
i__18775 = G__18798;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18776),mecca$components$staff_$_iter__18773.call(null,cljs.core.chunk_rest.call(null,s__18774__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18776),null);
}
} else {
var x = cljs.core.first.call(null,s__18774__$2);
var y = cljs.core.get.call(null,cljs.core.deref.call(null,mecca.music.pitches),x);
if(typeof y === 'number'){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_stem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),mecca$components$staff_$_iter__18773.call(null,cljs.core.rest.call(null,s__18774__$2)));
} else {
var G__18799 = cljs.core.rest.call(null,s__18774__$2);
s__18774__$1 = G__18799;
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
return iter__4324__auto__.call(null,cljs.core.range.call(null,mecca.music.bar_length));
})())], null);
});
mecca.components.mecca = (function mecca$components$mecca(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"MECCA Music Platform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The Music Education, Composition & Creation Application"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mario","div.mario",-1368725782)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.staff], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return mecca.music.play_BANG_.call(null,mecca.music.context,leipzig.melody.all.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),mecca.music.bass,mecca.music.melody.call(null)));
})], null),"Play"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.note_grid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Mouse-pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.events.mouse_pos))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Presets: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
cljs.core.reset_BANG_.call(null,mecca.music.pitches,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(7),(9),(7),(10),(7),(9),(7),(10),(7),(9),(7),(10),(7),(9),(7)], null));

return cljs.core.reset_BANG_.call(null,mecca.music.durations,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25], null));
})], null),"Alberti-bass"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Pitches: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.pitches))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Durations: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mecca.music.durations))].join('')], null)], null)], null);
});

//# sourceMappingURL=components892F7BF.js.map
