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
goog.require('mecca.music.mario');
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),e.target.value], null));
})], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__15057(s__15058){
return (new cljs.core.LazySeq(null,(function (){
var s__15058__$1 = s__15058;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15058__$1);
if(temp__5457__auto__){
var s__15058__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15058__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15058__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15060 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15059 = (0);
while(true){
if((i__15059 < size__4323__auto__)){
var scale = cljs.core._nth.call(null,c__4322__auto__,i__15059);
cljs.core.chunk_append.call(null,b__15060,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)));

var G__15061 = (i__15059 + (1));
i__15059 = G__15061;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15060),mecca$components$scale_picker_$_iter__15057.call(null,cljs.core.chunk_rest.call(null,s__15058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15060),null);
}
} else {
var scale = cljs.core.first.call(null,s__15058__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),scale], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scale], null)),mecca$components$scale_picker_$_iter__15057.call(null,cljs.core.rest.call(null,s__15058__$2)));
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
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__15062(s__15063){
return (new cljs.core.LazySeq(null,(function (){
var s__15063__$1 = s__15063;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15063__$1);
if(temp__5457__auto__){
var s__15063__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15063__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15063__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15065 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15064 = (0);
while(true){
if((i__15064 < size__4323__auto__)){
var note = cljs.core._nth.call(null,c__4322__auto__,i__15064);
cljs.core.chunk_append.call(null,b__15065,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)));

var G__15066 = (i__15064 + (1));
i__15064 = G__15066;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15065),mecca$components$key_picker_$_iter__15062.call(null,cljs.core.chunk_rest.call(null,s__15063__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15065),null);
}
} else {
var note = cljs.core.first.call(null,s__15063__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),note], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),note], null)),mecca$components$key_picker_$_iter__15062.call(null,cljs.core.rest.call(null,s__15063__$2)));
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
mecca.components.bar_line_solid = (function mecca$components$bar_line_solid(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (2.5,2.5) translate(2,-2.8)",new cljs.core.Keyword(null,"x1","x1",-1863922247),11.625,new cljs.core.Keyword(null,"x2","x2",-1362513475),11.625,new cljs.core.Keyword(null,"y1","y1",589123466),(6),new cljs.core.Keyword(null,"y2","y2",-718691301),17.2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.1], null)], null);
});
mecca.components.bar_line = (function mecca$components$bar_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (2.5,2.5) translate(4,-2.8)",new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y1","y1",589123466),5.5,new cljs.core.Keyword(null,"y2","y2",-718691301),(18),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.1,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.15], null)], null);
});
mecca.components.ending_bar = (function mecca$components$ending_bar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (2.5,2.5) translate(3,0.2)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),22.25,new cljs.core.Keyword(null,"y","y",-1757859776),(3),new cljs.core.Keyword(null,"width","width",-384071477),0.24,new cljs.core.Keyword(null,"height","height",1025178622),11.25,new cljs.core.Keyword(null,"ry","ry",-334598563),(0),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),22.125,new cljs.core.Keyword(null,"x2","x2",-1362513475),22.125,new cljs.core.Keyword(null,"y1","y1",589123466),(3),new cljs.core.Keyword(null,"y2","y2",-718691301),14.25,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.1], null)], null)], null);
});
mecca.components.ending_bar_repeat = (function mecca$components$ending_bar_repeat(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (2.5,2.5) translate(3,0.2)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),22.25,new cljs.core.Keyword(null,"y","y",-1757859776),(3),new cljs.core.Keyword(null,"width","width",-384071477),0.24,new cljs.core.Keyword(null,"height","height",1025178622),11.25,new cljs.core.Keyword(null,"ry","ry",-334598563),(0),new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),22.125,new cljs.core.Keyword(null,"x2","x2",-1362513475),22.125,new cljs.core.Keyword(null,"y1","y1",589123466),(3),new cljs.core.Keyword(null,"y2","y2",-718691301),14.25,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),21.8,new cljs.core.Keyword(null,"cy","cy",755331060),4.3,new cljs.core.Keyword(null,"r","r",-471384190),0.14], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),21.8,new cljs.core.Keyword(null,"cy","cy",755331060),4.9,new cljs.core.Keyword(null,"r","r",-471384190),0.14], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),21.8,new cljs.core.Keyword(null,"cy","cy",755331060),9.1,new cljs.core.Keyword(null,"r","r",-471384190),0.14], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),21.8,new cljs.core.Keyword(null,"cy","cy",755331060),9.7,new cljs.core.Keyword(null,"r","r",-471384190),0.14], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),21.8,new cljs.core.Keyword(null,"cy","cy",755331060),13.1,new cljs.core.Keyword(null,"r","r",-471384190),0.14], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),21.8,new cljs.core.Keyword(null,"cy","cy",755331060),13.7,new cljs.core.Keyword(null,"r","r",-471384190),0.14], null)], null)], null);
});
mecca.components.beat_line = (function mecca$components$beat_line(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (2.5,2.5) translate(4,-2.8)",new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"x2","x2",-1362513475),x,new cljs.core.Keyword(null,"y1","y1",589123466),5.5,new cljs.core.Keyword(null,"y2","y2",-718691301),(18),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.03,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.15], null)], null);
});
mecca.components.eighth_note_flag = (function mecca$components$eighth_note_flag(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.007,-0.007)",new cljs.core.Keyword(null,"d","d",1972142424),"M179 -646c15 29 28.5449 55.0752 46 102c18.3213 49.2549 30 108.298 30 138c0 105 -80 173 -168 200c-18 5 -47 9 -87 16v190h22c8 0 33 -61 71 -95c4 -3 -2 3 61 -56c62 -58 122 -137 122 -241c0 -37.5245 -12.6807 -106.071 -35 -163 c-19.9111 -50.7861 -43 -99 -66 -132c-6 -5 -10 -7 -13 -7s-5 2 -5 5l4 10c1.17241 2.93103 13.7644 24.8111 18 33z"], null)], null);
});
mecca.components.beam = (function mecca$components$beam(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),"2981,475 3499,424 3499,484 2981,535"], null)], null);
});
mecca.components.drum_hit = (function mecca$components$drum_hit(color,p__15067){
var vec__15068 = p__15067;
var x = cljs.core.nth.call(null,vec__15068,(0),null);
var y = cljs.core.nth.call(null,vec__15068,(1),null);
var mouseover_QMARK_ = reagent.core.atom.call(null,false);
return ((function (mouseover_QMARK_,vec__15068,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((8.75 + (6.88 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((25.0375 - y)),") "].join(''),new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_(cljs.core.deref.call(null,mouseover_QMARK_))?"visible":"hidden"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"all",new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (mouseover_QMARK_,vec__15068,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true);
});})(mouseover_QMARK_,vec__15068,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (mouseover_QMARK_,vec__15068,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false);
});})(mouseover_QMARK_,vec__15068,x,y))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.24.27 .9.74c.02.01 .04.03 .07.03 .02 0 .05-.01.08-.03l.15-.12c.02-.02.04-.06.04-.09 0-.03-.02-.06-.04-.08L1.56 0 2.43-.71c.02-.02.04-.05.04-.08 0-.03-.02-.07-.04-.09l-.15-.12c-.02-.01-.05-.03-.08-.03-.02 0-.04.01-.07.03L1.24-.27.33-1.01c-.02-.01-.04-.03-.07-.03-.02 0-.05.01-.08.03l-.15.12c-.02.02-.04.06-.04.09 0 .03.02 .06.04 .08L.91 0 .04.71c-.02.02-.04.05-.04.08 0 .03.02 .07.04 .09l.15.12c.02.01 .05.03 .08.03 .02 0 .04-.01.07-.03z",new cljs.core.Keyword(null,"fill","fill",883462889),color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((y < (-8)))?2.2:(0)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y < (-8)))?-6.3:0.8),new cljs.core.Keyword(null,"height","height",1025178622),5.5,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),color], null)], null)], null);
});
;})(mouseover_QMARK_,vec__15068,x,y))
});
mecca.components.quarter_note = (function mecca$components$quarter_note(color,p__15071){
var vec__15072 = p__15071;
var x = cljs.core.nth.call(null,vec__15072,(0),null);
var y = cljs.core.nth.call(null,vec__15072,(1),null);
var mouseover_QMARK_ = reagent.core.atom.call(null,false);
return ((function (mouseover_QMARK_,vec__15072,x,y){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.deref.call(null,mouseover_QMARK_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,color,"black");
}
})())?"visible":"hidden"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"all",new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (mouseover_QMARK_,vec__15072,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true);
});})(mouseover_QMARK_,vec__15072,x,y))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (mouseover_QMARK_,vec__15072,x,y){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false);
});})(mouseover_QMARK_,vec__15072,x,y))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mouseover_QMARK_,vec__15072,x,y){
return (function (e){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-bass-note","add-bass-note",-2031433729),x,y], null));
});})(mouseover_QMARK_,vec__15072,x,y))
,new cljs.core.Keyword(null,"transform","transform",1381301764),["scale (1,1) translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((8.875 + (6.9 * x))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((25.0375 - y)),") "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m1.62-1.06c.41 0 .8.21 .8.67 0 .53-.41.89-.76 1.1-.27.16-.56.27-.86.27-.41 0-.8-.21-.8-.67 0-.53.41-.89.76-1.1.27-.16.56-.27.86-.27z",new cljs.core.Keyword(null,"fill","fill",883462889),color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((((y < (1))) || (((((7) < y)) && ((y < (13)))))))?2.15:0.02),new cljs.core.Keyword(null,"y","y",-1757859776),(((((y < (1))) || (((((7) < y)) && ((y < (13)))))))?-7.1:(0)),new cljs.core.Keyword(null,"height","height",1025178622),6.794,new cljs.core.Keyword(null,"width","width",-384071477),0.25,new cljs.core.Keyword(null,"fill","fill",883462889),color], null)], null)], null);
});
;})(mouseover_QMARK_,vec__15072,x,y))
});
mecca.components.drum_clef = (function mecca$components$drum_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(2,33.3) scale(0.009, 0.009)",new cljs.core.Keyword(null,"d","d",1972142424),"M281-143h-80c-5 0-9 3-9 9v415c0 5 3 9 9 9h80c5 0 9-3 9-9v-415c0-5-3-9-9-9zM91-143h-80c-5 0-9 3-9 9v415c0 5 3 9 9 9h80c5 0 9-3 9-9v-415c0-5-3-9-9-9z",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null);
});
mecca.components.bass_clef = (function mecca$components$bass_clef(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.0138,0.0138) translate(16,1596)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M287 14C289 78 260 138 216 182 161 237 91 270 18 294 7 298-6 292 9 285 38 272 69 261 95 241 154 206 205 146 218 76 225 32 223-12 212-56 205-87 183-118 148-122 117-129 84-118 62-96 55-89 44-72 47-54 60-65 60-63 71-67 95-78 128-63 135-36 141-10 137 23 110 36 84 50 47 43 31 16 7-28 20-87 60-116 99-149 157-151 205-133 254-116 282-65 287-17 287-6 287 5 287 14z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(340),new cljs.core.Keyword(null,"cy","cy",755331060),(-60),new cljs.core.Keyword(null,"r","r",-471384190),(26)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(340),new cljs.core.Keyword(null,"cy","cy",755331060),(60),new cljs.core.Keyword(null,"r","r",-471384190),(26)], null)], null)], null);
});
});
mecca.components.treble_clef = (function mecca$components$treble_clef(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.026,0.026) translate(25,420)",new cljs.core.Keyword(null,"d","d",1972142424),"m87 95c-6 2-12 6-18 12-5 6-8 13-8 20 0 5 2 10 5 16 3 6 8 10 14 12 2 0 3 1 3 3 0 1-1 1-3 1-10-2-18-8-24-15-6-8-9-17-10-27 0-11 4-21 10-30 6-9 14-16 24-20l-7-38c-16 14-29 28-40 42-10 15-16 31-16 48 0 8 2 15 5 22 3 7 7 14 13 20 12 12 27 18 46 19 6 0 13-2 21-3l-16-83zm8-1 16 81c16-7 24-21 24-43-1-7-3-14-7-20-3-6-8-11-14-14-6-3-13-5-20-5zm-22-110c3-2 8-6 12-11 4-5 9-11 13-18 4-7 7-14 10-21 2-7 4-14 4-20 0-3 0-5-1-8 0-4-2-7-4-9-2-2-5-3-8-3-6 0-12 4-17 12-4 7-7 15-10 24-2 9-4 18-4 27 1 10 2 19 5 26zm-7 6c-5-17-7-35-8-52 0-11 1-22 3-32 2-10 5-18 9-26 4-7 8-13 14-17 5-3 8-5 10-5 1 0 3 1 4 1 1 1 2 3 4 5 13 18 19 39 19 65 0 12-2 24-5 35-3 12-8 23-14 33-6 10-13 19-22 27l9 42c5-1 8-1 10-1 8 0 15 2 22 5 7 3 12 8 17 14 5 6 8 12 11 20 2 7 4 15 4 23 0 12-3 24-10 34-7 10-16 18-30 23 1 5 2 13 5 22 2 10 4 17 5 23 1 6 1 11 1 17 0 8-2 16-6 22-4 7-10 12-17 15-7 4-14 5-23 5-12 0-22-3-30-10-9-7-13-15-14-27 0-5 1-10 4-14 2-4 5-8 9-11 4-3 8-4 13-5 4 0 8 1 12 3 4 2 7 5 9 9 2 4 3 8 3 13 0 6-2 12-6 16-4 4-10 7-16 7h-2c4 6 11 10 20 10 5 0 10-1 14-3 5-2 9-5 13-8 3-3 6-7 7-11 2-4 3-10 3-18 0-5-1-10-1-15-1-5-2-12-4-20-2-8-3-14-4-19-6 2-13 2-20 2-12 0-22-2-33-7-10-5-19-11-27-20-8-8-14-18-18-29-4-11-6-22-7-33 0-11 2-21 6-31 4-10 9-19 15-28 6-9 12-17 19-24 7-7 15-16 26-27z"], null)], null);
});
mecca.components.quarter_note_button = (function mecca$components$quarter_note_button(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,0)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M 69.920725,132.90712 V 102.20693 H 99.12731 128.3339 v 30.70019 30.70021 H 99.12731 69.920725 Z m 8.344738,24.12159 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z m -22.94803,-5.48217 v -1.09644 h 2.08619 2.08618 v -1.09643 -1.09644 h 1.0431 1.04308 v -18.63941 -18.6394 h -1.04308 -1.0431 v -1.09645 -1.09643 h -1.04309 -1.04309 V 121.94277 135.1 h -7.301647 -7.301647 v 1.09643 1.09645 h -2.086184 -2.086185 v 1.09643 1.09643 h -1.043092 -1.043092 v 1.09645 1.09642 H 81.39474 80.351648 v 2.19288 2.19287 h 1.043092 1.043093 v 2.19287 2.19287 h 1.043092 1.043092 v 1.09644 1.09644 h 8.344739 8.344734 z m -22.948027,-42.761 v -2.19287 h -2.086184 -2.086185 v 2.19287 2.19288 h 2.086185 2.086184 z m 45.896057,0 v -2.19287 h -2.08618 -2.08619 v 2.19287 2.19288 h 2.08619 2.08618 z"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fab100",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.26735786], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m 64.40715,132.43769 v -32.0231 h 2.145117 2.145116 v -2.287373 -2.287361 h 30.031629 30.031628 v 2.287361 2.287373 H 98.729012 68.697383 v 32.0231 32.02313 H 66.552267 64.40715 Z m 21.451164,17.15525 v -1.14368 h -2.145117 -2.145115 v -1.14369 -1.14368 h -1.072559 -1.072558 v -2.28735 -2.28738 h 1.072558 1.072559 v -1.14367 -1.14369 h 1.072557 1.072558 v -1.14369 -1.14368 h 2.145117 2.145116 v -1.14368 -1.14368 h 7.507907 7.507913 v -13.72419 -13.7242 h 1.07255 1.07256 v 19.44262 19.44259 h -2.14511 -2.14512 v 1.14368 1.14369 h -3.217676 -3.217675 v 1.14368 1.14368 h -4.290232 -4.290233 z"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fa7500",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.27688742], null)], null)], null);
});
});
mecca.components.play_button = (function mecca$components$play_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (0.35,0.35) translate(285,893)",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return mecca.music.play_bassline_BANG_.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m 17.333333,38.666667 v -24 H 26.666667 36 V 18 21.333333 h 6 6 V 24 26.666667 h 6 6 V 30 33.333333 h 2.666667 2.666666 V 36 38.666667 H 62.666667 60 V 36 33.333333 H 54 48 V 30 26.666667 H 42 36 V 24 21.333333 H 30 24 V 42 62.666667 h -3.333333 -3.333334 z",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#c4e5dd"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m 24,54 v -3.333333 h 6 6 V 48 45.333333 h 6 6 V 42 38.666667 h 2.666667 2.666666 V 36 33.333333 H 56.666667 60 v 6 6 H 54 48 V 48 50.666667 H 42 36 V 54 57.333333 h -6 -6 z",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#cdcdcd"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m 17.333333,90 v -3.333333 h 6 6 V 84 81.333333 h 6 6 V 78 74.666667 h 6 6 V 72 69.333333 h 6 6 V 66 62.666667 H 68.666667 72 V 60 57.333333 h 2.666667 2.666666 v -6 -6 H 80.666667 84 v 6 6 H 80.666667 77.333333 V 60 62.666667 H 74.666667 72 V 66 69.333333 H 68.666667 65.333333 V 72 74.666667 h -6 -6 V 78 81.333333 h -6 -6 V 84 86.666667 h -6 -6 V 90 93.333333 h -6 -6 z m 0,-18 V 69.333333 H 20.666667 24 V 66 62.666667 h 6 6 V 60 57.333333 h 6 6 V 54 50.666667 h 6 6 V 48 45.333333 h 2.666667 2.666666 V 48 50.666667 H 62.666667 60 V 54 57.333333 H 54 48 V 60 62.666667 H 42 36 V 66 69.333333 H 30 24 V 72 74.666667 h -3.333333 -3.333334 z m 12,-36 V 26.666667 H 32.666667 36 V 30 33.333333 h 6 6 V 36 38.666667 H 42 36 V 42 45.333333 h -3.333333 -3.333334 z",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#a4a4a4"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M 17.333333,84 V 81.333333 H 20.666667 24 V 78 74.666667 h 6 6 V 72 69.333333 h 6 6 V 66 62.666667 h 6 6 V 60 57.333333 h 2.666667 2.666666 V 54 50.666667 H 68.666667 72 V 48 45.333333 h 2.666667 2.666666 v 6 6 H 74.666667 72 V 60 62.666667 H 68.666667 65.333333 V 66 69.333333 h -6 -6 V 72 74.666667 h -6 -6 V 78 81.333333 h -6 -6 V 84 86.666667 h -6 -6 z M 12,38.666667 V 2.6666667 h 6 6 V 6 9.3333333 h 6 6 V 12 14.666667 h 6 6 V 18 21.333333 h 6 6 V 24 26.666667 h 2.666667 2.666666 V 30 33.333333 H 68.666667 72 V 36 38.666667 H 68.666667 65.333333 V 42 45.333333 H 62.666667 60 V 48 50.666667 H 54 48 V 54 57.333333 H 42 36 V 60 62.666667 H 30 24 V 66 69.333333 H 20.666667 17.333333 V 72 74.666667 H 14.666667 12 Z M 24,60 v -2.666667 h 6 6 V 54 50.666667 h 6 6 V 48 45.333333 h 6 6 V 42 38.666667 h 2.666667 2.666666 V 36 33.333333 H 62.666667 60 V 30 26.666667 H 54 48 V 24 21.333333 H 42 36 V 18 14.666667 H 30 24 V 12 9.3333333 H 20.666667 17.333333 V 36 62.666667 H 20.666667 24 Z M 24,36 V 21.333333 h 6 6 V 24 26.666667 h 6 6 V 30 33.333333 h 2.666667 2.666666 V 36 38.666667 H 50.666667 48 V 42 45.333333 H 42 36 V 48 50.666667 h -6 -6 z m 12,6 v -3.333333 h 6 6 V 36 33.333333 H 42 36 V 30 26.666667 H 32.666667 29.333333 V 36 45.333333 H 32.666667 36 Z",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#727272"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M 17.333333,78 V 74.666667 H 20.666667 24 V 72 69.333333 h 6 6 V 66 62.666667 h 6 6 V 60 57.333333 h 6 6 V 54 50.666667 h 2.666667 2.666666 v -6 -6 H 68.666667 72 v 6 6 H 68.666667 65.333333 V 54 57.333333 H 62.666667 60 V 60 62.666667 H 54 48 V 66 69.333333 H 42 36 V 72 74.666667 H 30 24 V 78 81.333333 h -3.333333 -3.333334 z",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000000"], null)], null)], null)], null)], null);
});
});
mecca.components.play_button_on = (function mecca$components$play_button_on(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (0.35,0.35) translate(285,893)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M 12.655368,40.632764 V 25.966097 h 6 6 v 2.666667 2.666667 h 6 6 v 3.333333 3.333333 h 6 6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 z",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f6f600"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m 7.322035,64.632764 v -2.666667 h 2.6666667 2.6666663 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 6 6 v -3.333333 -3.333333 h 6 6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 H 9.9887017 7.322035 Z",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#f69300"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"m 7.322035,76.632764 v -2.666667 h 2.6666667 2.6666663 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 6 6 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 3.333334 3.333333 v -3.333333 -3.333333 h 6 6 v 3.333333 3.333333 h -3.333333 -3.333334 v 2.666667 2.666667 h -2.666666 -2.666667 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 z",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#727272"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),"M 0.65536833,40.632764 V 7.2994306 H 6.6553683 12.655368 v 3.3333334 3.333333 h 6 6 v 2.666667 2.666667 h 6 6 v 3.333333 3.333333 h 6 6 v 2.666667 2.666667 h 3.333334 3.333333 v 3.333333 3.333333 h 2.666667 2.666666 v 2.666667 2.666667 h -2.666666 -2.666667 v 3.333333 3.333333 h -3.333333 -3.333334 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 h -6 -6 v 2.666667 2.666667 h -6 -6 v 3.333333 3.333333 H 6.6553683 0.65536833 Z m 11.99999967,24 v -2.666667 h 6 6 v -3.333333 -3.333333 h 6 6 v -2.666667 -2.666667 h 6 6 v -3.333333 -3.333333 h 3.333334 3.333333 v -2.666667 -2.666667 h -3.333333 -3.333334 v -3.333333 -3.333333 h -6 -6 v -2.666667 -2.666667 h -6 -6 v -3.333333 -3.333333 h -6 -6 V 16.632764 13.966097 H 9.9887017 7.322035 v 26.666667 26.666667 h 2.6666667 2.6666663 z",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000000"], null)], null)], null)], null)], null);
});
});
mecca.components.basslines = (function mecca$components$basslines(){
var active = reagent.core.atom.call(null,"Alberti bass");
return ((function (active){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Try some well-known musical patterns: "], null),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (active){
return (function mecca$components$basslines_$_iter__15075(s__15076){
return (new cljs.core.LazySeq(null,((function (active){
return (function (){
var s__15076__$1 = s__15076;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15076__$1);
if(temp__5457__auto__){
var s__15076__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15076__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15076__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15078 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15077 = (0);
while(true){
if((i__15077 < size__4323__auto__)){
var map__15079 = cljs.core._nth.call(null,c__4322__auto__,i__15077);
var map__15079__$1 = ((((!((map__15079 == null)))?(((((map__15079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15079):map__15079);
var name = cljs.core.get.call(null,map__15079__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var notes = cljs.core.get.call(null,map__15079__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
var scales = cljs.core.get.call(null,map__15079__$1,new cljs.core.Keyword(null,"scales","scales",-1197224722));
cljs.core.chunk_append.call(null,b__15078,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__15077,map__15079,map__15079__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__15078,s__15076__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),cljs.core.first.call(null,scales)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,notes)))], null));

return cljs.core.reset_BANG_.call(null,active,name);
});})(i__15077,map__15079,map__15079__$1,name,notes,scales,c__4322__auto__,size__4323__auto__,b__15078,s__15076__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)));

var G__15083 = (i__15077 + (1));
i__15077 = G__15083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15078),mecca$components$basslines_$_iter__15075.call(null,cljs.core.chunk_rest.call(null,s__15076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15078),null);
}
} else {
var map__15081 = cljs.core.first.call(null,s__15076__$2);
var map__15081__$1 = ((((!((map__15081 == null)))?(((((map__15081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15081):map__15081);
var name = cljs.core.get.call(null,map__15081__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var notes = cljs.core.get.call(null,map__15081__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
var scales = cljs.core.get.call(null,map__15081__$1,new cljs.core.Keyword(null,"scales","scales",-1197224722));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__15081,map__15081__$1,name,notes,scales,s__15076__$2,temp__5457__auto__,active){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),cljs.core.first.call(null,scales)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),cljs.core.vec.call(null,cljs.core.take.call(null,(16),cljs.core.cycle.call(null,notes)))], null));

return cljs.core.reset_BANG_.call(null,active,name);
});})(map__15081,map__15081__$1,name,notes,scales,s__15076__$2,temp__5457__auto__,active))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,name,cljs.core.deref.call(null,active)))?"lightgreen":"violet")], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)),mecca$components$basslines_$_iter__15075.call(null,cljs.core.rest.call(null,s__15076__$2)));
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
})())], null);
});
;})(active))
});
mecca.components.staff = (function mecca$components$staff(){
var mouse_over = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var bassline = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null));
var current_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
return ((function (mouse_over,bassline,current_position){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.staff","g.staff",1070451758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale (7,7) translate(2.5,2)",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 450 160"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#lines","g#lines",1814887067),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__15084(s__15085){
return (new cljs.core.LazySeq(null,((function (mouse_over,bassline,current_position){
return (function (){
var s__15085__$1 = s__15085;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15085__$1);
if(temp__5457__auto__){
var s__15085__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15085__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15085__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15087 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15086 = (0);
while(true){
if((i__15086 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__15086);
cljs.core.chunk_append.call(null,b__15087,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"visibility","visibility",1338380893)],[((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.25:null),"black",((function (i__15086,y,c__4322__auto__,size__4323__auto__,b__15087,s__15085__$2,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(i__15086,y,c__4322__auto__,size__4323__auto__,b__15087,s__15085__$2,temp__5457__auto__,mouse_over,bassline,current_position))
,"bevel",y,"butt",((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.06:0.2),((function (i__15086,y,c__4322__auto__,size__4323__auto__,b__15087,s__15085__$2,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,y);
});})(i__15086,y,c__4322__auto__,size__4323__auto__,b__15087,s__15085__$2,temp__5457__auto__,mouse_over,bassline,current_position))
,(0),y,"all",63.7,(((((y > (7))) && (cljs.core.even_QMARK_.call(null,y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__15126 = (i__15086 + (1));
i__15086 = G__15126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15087),mecca$components$staff_$_iter__15084.call(null,cljs.core.chunk_rest.call(null,s__15085__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15087),null);
}
} else {
var y = cljs.core.first.call(null,s__15085__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"visibility","visibility",1338380893)],[((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.25:null),"black",((function (y,s__15085__$2,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
});})(y,s__15085__$2,temp__5457__auto__,mouse_over,bassline,current_position))
,"bevel",y,"butt",((((cljs.core._EQ_.call(null,y,(30))) || (cljs.core._EQ_.call(null,y,(18)))))?0.06:0.2),((function (y,s__15085__$2,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_over,y);
});})(y,s__15085__$2,temp__5457__auto__,mouse_over,bassline,current_position))
,(0),y,"all",63.7,(((((y > (7))) && (cljs.core.even_QMARK_.call(null,y)) && ((y < (42)))))?"visible":"hidden")])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),mecca$components$staff_$_iter__15084.call(null,cljs.core.rest.call(null,s__15085__$2)));
}
} else {
return null;
}
break;
}
});})(mouse_over,bassline,current_position))
,null,null));
});})(mouse_over,bassline,current_position))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(38)));
})())], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#clefs","g#clefs",-142950481),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bass_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.treble_clef], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_clef], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,2.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,5.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,8.25], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line_solid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.bar_line,(11)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,13.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,16.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.beat_line,19.25], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.ending_bar_repeat], null)], null),(function (){var notes = cljs.core.set.call(null,(function (){var iter__4324__auto__ = ((function (mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__15088(s__15089){
return (new cljs.core.LazySeq(null,((function (mouse_over,bassline,current_position){
return (function (){
var s__15089__$1 = s__15089;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15089__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__15089__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__15088_$_iter__15090(s__15091){
return (new cljs.core.LazySeq(null,((function (s__15089__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
var s__15091__$1 = s__15091;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__15091__$1);
if(temp__5457__auto____$1){
var s__15091__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15091__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15091__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15093 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15092 = (0);
while(true){
if((i__15092 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__15092);
cljs.core.chunk_append.call(null,b__15093,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__15127 = (i__15092 + (1));
i__15092 = G__15127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15093),mecca$components$staff_$_iter__15088_$_iter__15090.call(null,cljs.core.chunk_rest.call(null,s__15091__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15093),null);
}
} else {
var y = cljs.core.first.call(null,s__15091__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),mecca$components$staff_$_iter__15088_$_iter__15090.call(null,cljs.core.rest.call(null,s__15091__$2)));
}
} else {
return null;
}
break;
}
});})(s__15089__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position))
,null,null));
});})(s__15089__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(-6),(19))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$staff_$_iter__15088.call(null,cljs.core.rest.call(null,s__15089__$1)));
} else {
var G__15128 = cljs.core.rest.call(null,s__15089__$1);
s__15089__$1 = G__15128;
continue;
}
} else {
return null;
}
break;
}
});})(mouse_over,bassline,current_position))
,null,null));
});})(mouse_over,bassline,current_position))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(8)));
})());
return cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (notes,mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__15094(s__15095){
return (new cljs.core.LazySeq(null,((function (notes,mouse_over,bassline,current_position){
return (function (){
var s__15095__$1 = s__15095;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15095__$1);
if(temp__5457__auto__){
var s__15095__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15095__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15095__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15097 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15096 = (0);
while(true){
if((i__15096 < size__4323__auto__)){
var vec__15098 = cljs.core._nth.call(null,c__4322__auto__,i__15096);
var x = cljs.core.nth.call(null,vec__15098,(0),null);
var y = cljs.core.nth.call(null,vec__15098,(1),null);
cljs.core.chunk_append.call(null,b__15097,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"gray",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__15129 = (i__15096 + (1));
i__15096 = G__15129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15097),mecca$components$staff_$_iter__15094.call(null,cljs.core.chunk_rest.call(null,s__15095__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15097),null);
}
} else {
var vec__15101 = cljs.core.first.call(null,s__15095__$2);
var x = cljs.core.nth.call(null,vec__15101,(0),null);
var y = cljs.core.nth.call(null,vec__15101,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"gray",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$staff_$_iter__15094.call(null,cljs.core.rest.call(null,s__15095__$2)));
}
} else {
return null;
}
break;
}
});})(notes,mouse_over,bassline,current_position))
,null,null));
});})(notes,mouse_over,bassline,current_position))
;
return iter__4324__auto__.call(null,clojure.set.difference.call(null,notes,cljs.core.set.call(null,(function (){var iter__4324__auto____$1 = ((function (iter__4324__auto__,notes,mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__15104(s__15105){
return (new cljs.core.LazySeq(null,((function (iter__4324__auto__,notes,mouse_over,bassline,current_position){
return (function (){
var s__15105__$1 = s__15105;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15105__$1);
if(temp__5457__auto__){
var s__15105__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15105__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15105__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15107 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15106 = (0);
while(true){
if((i__15106 < size__4323__auto__)){
var map__15108 = cljs.core._nth.call(null,c__4322__auto__,i__15106);
var map__15108__$1 = ((((!((map__15108 == null)))?(((((map__15108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15108):map__15108);
var time = cljs.core.get.call(null,map__15108__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__15108__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__15107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,(pitch - (48))], null));

var G__15130 = (i__15106 + (1));
i__15106 = G__15130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15107),mecca$components$staff_$_iter__15104.call(null,cljs.core.chunk_rest.call(null,s__15105__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15107),null);
}
} else {
var map__15110 = cljs.core.first.call(null,s__15105__$2);
var map__15110__$1 = ((((!((map__15110 == null)))?(((((map__15110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15110):map__15110);
var time = cljs.core.get.call(null,map__15110__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__15110__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,(pitch - (48))], null),mecca$components$staff_$_iter__15104.call(null,cljs.core.rest.call(null,s__15105__$2)));
}
} else {
return null;
}
break;
}
});})(iter__4324__auto__,notes,mouse_over,bassline,current_position))
,null,null));
});})(iter__4324__auto__,notes,mouse_over,bassline,current_position))
;
return iter__4324__auto____$1.call(null,cljs.core.deref.call(null,bassline));
})())));
})());
})(),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__15112(s__15113){
return (new cljs.core.LazySeq(null,((function (mouse_over,bassline,current_position){
return (function (){
var s__15113__$1 = s__15113;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15113__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__15113__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__15112_$_iter__15114(s__15115){
return (new cljs.core.LazySeq(null,((function (s__15113__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position){
return (function (){
var s__15115__$1 = s__15115;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__15115__$1);
if(temp__5457__auto____$1){
var s__15115__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15115__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15115__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15117 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15116 = (0);
while(true){
if((i__15116 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__15116);
cljs.core.chunk_append.call(null,b__15117,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_hit,"gray",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__15131 = (i__15116 + (1));
i__15116 = G__15131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15117),mecca$components$staff_$_iter__15112_$_iter__15114.call(null,cljs.core.chunk_rest.call(null,s__15115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15117),null);
}
} else {
var y = cljs.core.first.call(null,s__15115__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.drum_hit,"gray",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),mecca$components$staff_$_iter__15112_$_iter__15114.call(null,cljs.core.rest.call(null,s__15115__$2)));
}
} else {
return null;
}
break;
}
});})(s__15113__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position))
,null,null));
});})(s__15113__$1,x,xs__6012__auto__,temp__5457__auto__,mouse_over,bassline,current_position))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(-11),(-6),(2))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,mecca$components$staff_$_iter__15112.call(null,cljs.core.rest.call(null,s__15113__$1)));
} else {
var G__15132 = cljs.core.rest.call(null,s__15113__$1);
s__15113__$1 = G__15132;
continue;
}
} else {
return null;
}
break;
}
});})(mouse_over,bassline,current_position))
,null,null));
});})(mouse_over,bassline,current_position))
;
return iter__4324__auto__.call(null,cljs.core.range.call(null,(8)));
})()),cljs.core.doall.call(null,(function (){var iter__4324__auto__ = ((function (mouse_over,bassline,current_position){
return (function mecca$components$staff_$_iter__15118(s__15119){
return (new cljs.core.LazySeq(null,((function (mouse_over,bassline,current_position){
return (function (){
var s__15119__$1 = s__15119;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15119__$1);
if(temp__5457__auto__){
var s__15119__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15119__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15119__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15121 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15120 = (0);
while(true){
if((i__15120 < size__4323__auto__)){
var map__15122 = cljs.core._nth.call(null,c__4322__auto__,i__15120);
var map__15122__$1 = ((((!((map__15122 == null)))?(((((map__15122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15122):map__15122);
var time = cljs.core.get.call(null,map__15122__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__15122__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append.call(null,b__15121,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,(pitch - (48))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__15133 = (i__15120 + (1));
i__15120 = G__15133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15121),mecca$components$staff_$_iter__15118.call(null,cljs.core.chunk_rest.call(null,s__15119__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15121),null);
}
} else {
var map__15124 = cljs.core.first.call(null,s__15119__$2);
var map__15124__$1 = ((((!((map__15124 == null)))?(((((map__15124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15124):map__15124);
var time = cljs.core.get.call(null,map__15124__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var pitch = cljs.core.get.call(null,map__15124__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.quarter_note,"black",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,(pitch - (48))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$components$staff_$_iter__15118.call(null,cljs.core.rest.call(null,s__15119__$2)));
}
} else {
return null;
}
break;
}
});})(mouse_over,bassline,current_position))
,null,null));
});})(mouse_over,bassline,current_position))
;
return iter__4324__auto__.call(null,cljs.core.deref.call(null,bassline));
})())], null);
});
;})(mouse_over,bassline,current_position))
});
mecca.components.editor = (function mecca$components$editor(){
var current_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
var playing_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null));
return ((function (current_position,playing_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 480 420"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.music.mario.editor_bg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.staff], null),(cljs.core.truth_(cljs.core.deref.call(null,playing_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.play_button_on], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.play_button], null))], null);
});
;})(current_position,playing_QMARK_))
});
mecca.components.mecca = (function mecca$components$mecca(){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"MECCA Music Platform"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The Music Education, Composition & Creation Application"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.scale_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.key_picker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.octave_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.tempo_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/mariodance72.gif"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.components.editor], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return mecca.music.play_bassline_BANG_.call(null);
})], null),"Play Bassline"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Bassline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null))))," scale from MIDI number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.root_note_midi_num.call(null))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"octave","octave",1066197953)], null)))),"):"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Tempo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Current position: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null))))].join('')], null)], null);
});

//# sourceMappingURL=components.js.map
