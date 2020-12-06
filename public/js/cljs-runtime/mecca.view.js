goog.provide('mecca.view');
goog.require('cljs.core');
goog.require('mecca.music');
goog.require('re_frame.core');
goog.require('mecca.castle');
goog.require('mecca.transport');
goog.require('mecca.editor');
goog.require('mecca.mario');
mecca.view.note_guides = (function mecca$view$note_guides(){
var editor_x = (function (){var G__37257 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37257) : re_frame.core.subscribe.call(null,G__37257));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4582__auto__ = (function mecca$view$note_guides_$_iter__37258(s__37259){
return (new cljs.core.LazySeq(null,(function (){
var s__37259__$1 = s__37259;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37259__$1);
if(temp__5735__auto__){
var s__37259__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37259__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37259__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37261 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37260 = (0);
while(true){
if((i__37260 < size__4581__auto__)){
var beat = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37260);
cljs.core.chunk_append(b__37261,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(((cljs.core.deref(editor_x) - (1)) + beat),(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((8) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((8) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(4),new cljs.core.Keyword(null,"y2","y2",-718691301),(21),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((8) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((8) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(4),new cljs.core.Keyword(null,"y2","y2",-718691301),(21),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.075,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)));

var G__37308 = (i__37260 + (1));
i__37260 = G__37308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37261),mecca$view$note_guides_$_iter__37258(cljs.core.chunk_rest(s__37259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37261),null);
}
} else {
var beat = cljs.core.first(s__37259__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(((cljs.core.deref(editor_x) - (1)) + beat),(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((8) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((8) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(4),new cljs.core.Keyword(null,"y2","y2",-718691301),(21),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((8) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((8) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(4),new cljs.core.Keyword(null,"y2","y2",-718691301),(21),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.075,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)),mecca$view$note_guides_$_iter__37258(cljs.core.rest(s__37259__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(5),0.5));
})());
});
mecca.view.note_targets = (function mecca$view$note_targets(){
var instrument = (function (){var G__37262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37262) : re_frame.core.subscribe.call(null,G__37262));
})();
var editor_x = (function (){var G__37263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37263) : re_frame.core.subscribe.call(null,G__37263));
})();
var sharp_QMARK_ = (function (){var G__37264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37264) : re_frame.core.subscribe.call(null,G__37264));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4582__auto__ = (function mecca$view$note_targets_$_iter__37265(s__37266){
return (new cljs.core.LazySeq(null,(function (){
var s__37266__$1 = s__37266;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37266__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var time = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__37266__$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function mecca$view$note_targets_$_iter__37265_$_iter__37267(s__37268){
return (new cljs.core.LazySeq(null,((function (s__37266__$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var s__37268__$1 = s__37268;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37268__$1);
if(temp__5735__auto____$1){
var s__37268__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37268__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37268__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37270 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37269 = (0);
while(true){
if((i__37269 < size__4581__auto__)){
var pitch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37269);
cljs.core.chunk_append(b__37270,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(pitch - (1)),"black","translate(6.5,4)",((function (i__37269,s__37266__$1,pitch,c__4580__auto__,size__4581__auto__,b__37270,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__37271 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37271) : re_frame.core.dispatch.call(null,G__37271));
});})(i__37269,s__37266__$1,pitch,c__4580__auto__,size__4581__auto__,b__37270,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))
,"gray",(3),(function (){var pitches = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55),(53)], null);
if(cljs.core.truth_(cljs.core.deref((function (){var G__37272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eraser?","eraser?",-561181785)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37272) : re_frame.core.subscribe.call(null,G__37272));
})()))){
return ((function (i__37269,s__37266__$1,pitches,pitch,c__4580__auto__,size__4581__auto__,b__37270,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
mecca.music.play_sample((18),(63));

var G__37273 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37273) : re_frame.core.dispatch.call(null,G__37273));
});
;})(i__37269,s__37266__$1,pitches,pitch,c__4580__auto__,size__4581__auto__,b__37270,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))
} else {
if(cljs.core.truth_(cljs.core.deref((function (){var G__37274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat?","repeat?",1245600428)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37274) : re_frame.core.subscribe.call(null,G__37274));
})()))){
return ((function (i__37269,s__37266__$1,pitches,pitch,c__4580__auto__,size__4581__auto__,b__37270,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__37275 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),time], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37275) : re_frame.core.dispatch.call(null,G__37275));
});
;})(i__37269,s__37266__$1,pitches,pitch,c__4580__auto__,size__4581__auto__,b__37270,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))
} else {
return ((function (i__37269,s__37266__$1,pitches,pitch,c__4580__auto__,size__4581__auto__,b__37270,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__37276 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-note","add-note",-926319985),cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37276) : re_frame.core.dispatch.call(null,G__37276));
});
;})(i__37269,s__37266__$1,pitches,pitch,c__4580__auto__,size__4581__auto__,b__37270,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))

}
}
})(),0.2,0.2,((function (i__37269,s__37266__$1,pitch,c__4580__auto__,size__4581__auto__,b__37270,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
if(cljs.core.not((function (){var and__4174__auto__ = cljs.core.deref(sharp_QMARK_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(12))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(15))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(8))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(0))));
} else {
return and__4174__auto__;
}
})())){
var G__37277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37277) : re_frame.core.dispatch.call(null,G__37277));
} else {
return null;
}
});})(i__37269,s__37266__$1,pitch,c__4580__auto__,size__4581__auto__,b__37270,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__37315 = (i__37269 + (1));
i__37269 = G__37315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37270),mecca$view$note_targets_$_iter__37265_$_iter__37267(cljs.core.chunk_rest(s__37268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37270),null);
}
} else {
var pitch = cljs.core.first(s__37268__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(pitch - (1)),"black","translate(6.5,4)",((function (s__37266__$1,pitch,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__37278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37278) : re_frame.core.dispatch.call(null,G__37278));
});})(s__37266__$1,pitch,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))
,"gray",(3),(function (){var pitches = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55),(53)], null);
if(cljs.core.truth_(cljs.core.deref((function (){var G__37279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eraser?","eraser?",-561181785)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37279) : re_frame.core.subscribe.call(null,G__37279));
})()))){
return ((function (s__37266__$1,pitches,pitch,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
mecca.music.play_sample((18),(63));

var G__37280 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37280) : re_frame.core.dispatch.call(null,G__37280));
});
;})(s__37266__$1,pitches,pitch,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))
} else {
if(cljs.core.truth_(cljs.core.deref((function (){var G__37281 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat?","repeat?",1245600428)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37281) : re_frame.core.subscribe.call(null,G__37281));
})()))){
return ((function (s__37266__$1,pitches,pitch,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__37282 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),time], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37282) : re_frame.core.dispatch.call(null,G__37282));
});
;})(s__37266__$1,pitches,pitch,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))
} else {
return ((function (s__37266__$1,pitches,pitch,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var G__37283 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-note","add-note",-926319985),cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37283) : re_frame.core.dispatch.call(null,G__37283));
});
;})(s__37266__$1,pitches,pitch,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))

}
}
})(),0.2,0.2,((function (s__37266__$1,pitch,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
if(cljs.core.not((function (){var and__4174__auto__ = cljs.core.deref(sharp_QMARK_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(12))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(15))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(8))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(5))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(0))));
} else {
return and__4174__auto__;
}
})())){
var G__37284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37284) : re_frame.core.dispatch.call(null,G__37284));
} else {
return null;
}
});})(s__37266__$1,pitch,s__37268__$2,temp__5735__auto____$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$note_targets_$_iter__37265_$_iter__37267(cljs.core.rest(s__37268__$2)));
}
} else {
return null;
}
break;
}
});})(s__37266__$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))
,null,null));
});})(s__37266__$1,time,xs__6292__auto__,temp__5735__auto__,instrument,editor_x,sharp_QMARK_))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((19))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,mecca$view$note_targets_$_iter__37265(cljs.core.rest(s__37266__$1)));
} else {
var G__37316 = cljs.core.rest(s__37266__$1);
s__37266__$1 = G__37316;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(5),0.5));
})());
});
mecca.view.note_cursor = (function mecca$view$note_cursor(){
var focused = (function (){var G__37285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37285) : re_frame.core.subscribe.call(null,G__37285));
})();
var instrument = (function (){var G__37286 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37286) : re_frame.core.subscribe.call(null,G__37286));
})();
var sharp_QMARK_ = (function (){var G__37287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37287) : re_frame.core.subscribe.call(null,G__37287));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null))){
return null;
} else {
var x = cljs.core.first(cljs.core.deref(focused));
var y = cljs.core.last(cljs.core.deref(focused));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(cljs.core.truth_(cljs.core.deref(sharp_QMARK_))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * y)),0.07):null),(cljs.core.truth_(cljs.core.deref((function (){var G__37288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eraser?","eraser?",-561181785)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37288) : re_frame.core.subscribe.call(null,G__37288));
})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.eraser_cursor,((36) + ((30) * x)),(((5) * y) + (20)),0.2], null):(cljs.core.truth_(cljs.core.deref((function (){var G__37289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat?","repeat?",1245600428)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37289) : re_frame.core.subscribe.call(null,G__37289));
})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.repeat_sign,((7) + ((6) * x)),(8),0.13], null):(function (){var G__37290 = cljs.core.deref(instrument);
switch (G__37290) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37290)].join('')));

}
})()
))], null);
}
});
mecca.view.score_notes = (function mecca$view$score_notes(){
var notes = (function (){var G__37291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37291) : re_frame.core.subscribe.call(null,G__37291));
})();
var editor_x = (function (){var G__37292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37292) : re_frame.core.subscribe.call(null,G__37292));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4582__auto__ = (function mecca$view$score_notes_$_iter__37293(s__37294){
return (new cljs.core.LazySeq(null,(function (){
var s__37294__$1 = s__37294;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37294__$1);
if(temp__5735__auto__){
var s__37294__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37294__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37294__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37296 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37295 = (0);
while(true){
if((i__37295 < size__4581__auto__)){
var map__37297 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37295);
var map__37297__$1 = (((((!((map__37297 == null))))?(((((map__37297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37297):map__37297);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
if(((((cljs.core.deref(editor_x) - (1)) <= time)) && ((time <= ((16) + (cljs.core.deref(editor_x) - (1))))))){
cljs.core.chunk_append(b__37296,(function (){var x = (time - (cljs.core.deref(editor_x) - (1)));
var pitch_map = cljs.core.zipmap(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55),(53)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((19)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch)))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1))))),0.07):null),(function (){var G__37299 = instrument;
switch (G__37299) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

}
})()], null);
})());

var G__37319 = (i__37295 + (1));
i__37295 = G__37319;
continue;
} else {
var G__37320 = (i__37295 + (1));
i__37295 = G__37320;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37296),mecca$view$score_notes_$_iter__37293(cljs.core.chunk_rest(s__37294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37296),null);
}
} else {
var map__37300 = cljs.core.first(s__37294__$2);
var map__37300__$1 = (((((!((map__37300 == null))))?(((((map__37300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37300):map__37300);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37300__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37300__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37300__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
if(((((cljs.core.deref(editor_x) - (1)) <= time)) && ((time <= ((16) + (cljs.core.deref(editor_x) - (1))))))){
return cljs.core.cons((function (){var x = (time - (cljs.core.deref(editor_x) - (1)));
var pitch_map = cljs.core.zipmap(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55),(53)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((19)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch)))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1))))),0.07):null),(function (){var G__37302 = instrument;
switch (G__37302) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

}
})()], null);
})(),mecca$view$score_notes_$_iter__37293(cljs.core.rest(s__37294__$2)));
} else {
var G__37322 = cljs.core.rest(s__37294__$2);
s__37294__$1 = G__37322;
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
return iter__4582__auto__(cljs.core.deref(notes));
})());
});
mecca.view.editor = (function mecca$view$editor(){
var editor_x = (function (){var G__37303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37303) : re_frame.core.subscribe.call(null,G__37303));
})();
var mario_run = (function (){var G__37304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37304) : re_frame.core.subscribe.call(null,G__37304));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
var G__37305_37323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump-reset","jump-reset",-1337123824)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__37305_37323) : re_frame.core.dispatch.call(null,G__37305_37323));
} else {
}

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 64 36",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"url(/images/hand.png),pointer"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(18)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_face,(170),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_face,(155),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_sm], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.current_note_display,(0),(0),0.22], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.note_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect#editorframe","rect#editorframe",1607762183),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.2,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),63.5,new cljs.core.Keyword(null,"x","x",2099068185),0.25,new cljs.core.Keyword(null,"y","y",-1757859776),14.5], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.staff","g.staff",1070451758),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,13.5) scale(1)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.staff_lines], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.treble_clef,(0.8 - ((6) * (cljs.core.deref(editor_x) - (1)))),6.3], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.advance_editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.advance_measure], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.advance_end], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_guides], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_cursor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.score_notes], null),(cljs.core.truth_(cljs.core.deref((function (){var G__37306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loop-end","loop-end",-88908047)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37306) : re_frame.core.subscribe.call(null,G__37306));
})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.repeat_sign,((7) + ((6) * cljs.core.deref((function (){var G__37307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loop-end","loop-end",-88908047)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__37307) : re_frame.core.subscribe.call(null,G__37307));
})()))),(8),0.13], null):null)], null)], null);
});
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.transport.transport,(140),(0),0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.toolbar,(71),(0)], null)], null);
});

//# sourceMappingURL=mecca.view.js.map
