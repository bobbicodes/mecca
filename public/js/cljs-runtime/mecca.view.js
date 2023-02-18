goog.provide('mecca.view');
mecca.view.note_guides = (function mecca$view$note_guides(){
var editor_x = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4622__auto__ = (function mecca$view$note_guides_$_iter__59985(s__59986){
return (new cljs.core.LazySeq(null,(function (){
var s__59986__$1 = s__59986;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59986__$1);
if(temp__5753__auto__){
var s__59986__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59986__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__59986__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__59988 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__59987 = (0);
while(true){
if((i__59987 < size__4621__auto__)){
var beat = cljs.core._nth(c__4620__auto__,i__59987);
cljs.core.chunk_append(b__59988,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(((cljs.core.deref(editor_x) - (1)) + beat),(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((8) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((8) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(4),new cljs.core.Keyword(null,"y2","y2",-718691301),(21),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((8) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((8) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(4),new cljs.core.Keyword(null,"y2","y2",-718691301),(21),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.075,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)));

var G__60014 = (i__59987 + (1));
i__59987 = G__60014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59988),mecca$view$note_guides_$_iter__59985(cljs.core.chunk_rest(s__59986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59988),null);
}
} else {
var beat = cljs.core.first(s__59986__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(((cljs.core.deref(editor_x) - (1)) + beat),(4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((8) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((8) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(4),new cljs.core.Keyword(null,"y2","y2",-718691301),(21),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"orange",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.25,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),((8) + ((6) * beat)),new cljs.core.Keyword(null,"x2","x2",-1362513475),((8) + ((6) * beat)),new cljs.core.Keyword(null,"y1","y1",589123466),(4),new cljs.core.Keyword(null,"y2","y2",-718691301),(21),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.075,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),0.5], null)], null)),mecca$view$note_guides_$_iter__59985(cljs.core.rest(s__59986__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(9),0.5));
})());
});
});
mecca.view.eval_all = (function mecca$view$eval_all(s){
try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"js","js",-886355190,null),goog.global,new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null));
}catch (e59989){var e = e59989;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
}});
mecca.view.note_targets = (function mecca$view$note_targets(){
var instrument = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null));
var editor_x = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var sharp_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null));
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4622__auto__ = (function mecca$view$note_targets_$_iter__59990(s__59991){
return (new cljs.core.LazySeq(null,(function (){
var s__59991__$1 = s__59991;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59991__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var time = cljs.core.first(xs__6308__auto__);
var iterys__4618__auto__ = ((function (s__59991__$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function mecca$view$note_targets_$_iter__59990_$_iter__59992(s__59993){
return (new cljs.core.LazySeq(null,((function (s__59991__$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
var s__59993__$1 = s__59993;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__59993__$1);
if(temp__5753__auto____$1){
var s__59993__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59993__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__59993__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__59995 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__59994 = (0);
while(true){
if((i__59994 < size__4621__auto__)){
var pitch = cljs.core._nth(c__4620__auto__,i__59994);
cljs.core.chunk_append(b__59995,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(pitch - (1)),"black","translate(6.5,4)",((function (i__59994,s__59991__$1,pitch,c__4620__auto__,size__4621__auto__,b__59995,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null));
});})(i__59994,s__59991__$1,pitch,c__4620__auto__,size__4621__auto__,b__59995,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))
,"gray",(3),(function (){var pitches = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55),(53)], null);
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eraser?","eraser?",-561181785)], null))))){
return ((function (i__59994,s__59991__$1,pitches,pitch,c__4620__auto__,size__4621__auto__,b__59995,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
mecca.music.play_sample((18),(63));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null));
});
;})(i__59994,s__59991__$1,pitches,pitch,c__4620__auto__,size__4621__auto__,b__59995,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))
} else {
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat?","repeat?",1245600428)], null))))){
return ((function (i__59994,s__59991__$1,pitches,pitch,c__4620__auto__,size__4621__auto__,b__59995,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),time], null));
});
;})(i__59994,s__59991__$1,pitches,pitch,c__4620__auto__,size__4621__auto__,b__59995,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))
} else {
return ((function (i__59994,s__59991__$1,pitches,pitch,c__4620__auto__,size__4621__auto__,b__59995,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-note","add-note",-926319985),cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null));

mecca.sci_editor.update_editor_BANG_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),cljs.core.deref(instrument),new cljs.core.Keyword(null,"time","time",1385887882),(time + (cljs.core.deref(editor_x) - (1))),new cljs.core.Keyword(null,"pitch","pitch",1495126700),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null))));

return mecca.sci_editor.update_result_BANG_(["Output\uA789\u00A0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.eval_all(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__59999 = cljs.core.deref(mecca.sci_editor._BANG_points);
var G__59999__$1 = (((G__59999 == null))?null:G__59999.state);
var G__59999__$2 = (((G__59999__$1 == null))?null:G__59999__$1.doc);
if((G__59999__$2 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59999__$2);
}
})())))].join(''));
});
;})(i__59994,s__59991__$1,pitches,pitch,c__4620__auto__,size__4621__auto__,b__59995,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))

}
}
})(),0.2,0.2,((function (i__59994,s__59991__$1,pitch,c__4620__auto__,size__4621__auto__,b__59995,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
if(cljs.core.not((function (){var and__4221__auto__ = cljs.core.deref(sharp_QMARK_);
if(cljs.core.truth_(and__4221__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(12))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(15))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(8))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(5))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(0))))))))))));
} else {
return and__4221__auto__;
}
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null));
} else {
return null;
}
});})(i__59994,s__59991__$1,pitch,c__4620__auto__,size__4621__auto__,b__59995,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)));

var G__60015 = (i__59994 + (1));
i__59994 = G__60015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59995),mecca$view$note_targets_$_iter__59990_$_iter__59992(cljs.core.chunk_rest(s__59993__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59995),null);
}
} else {
var pitch = cljs.core.first(s__59993__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622)],[(pitch - (1)),"black","translate(6.5,4)",((function (s__59991__$1,pitch,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null));
});})(s__59991__$1,pitch,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))
,"gray",(3),(function (){var pitches = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55),(53)], null);
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eraser?","eraser?",-561181785)], null))))){
return ((function (s__59991__$1,pitches,pitch,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
mecca.music.play_sample((18),(63));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null));
});
;})(s__59991__$1,pitches,pitch,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))
} else {
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat?","repeat?",1245600428)], null))))){
return ((function (s__59991__$1,pitches,pitch,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-loop-end","set-loop-end",2098658713),time], null));
});
;})(s__59991__$1,pitches,pitch,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))
} else {
return ((function (s__59991__$1,pitches,pitch,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-note","add-note",-926319985),cljs.core.deref(instrument),(time + (cljs.core.deref(editor_x) - (1))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null));

mecca.sci_editor.update_editor_BANG_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),cljs.core.deref(instrument),new cljs.core.Keyword(null,"time","time",1385887882),(time + (cljs.core.deref(editor_x) - (1))),new cljs.core.Keyword(null,"pitch","pitch",1495126700),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitches,pitch)], null))));

return mecca.sci_editor.update_result_BANG_(["Output\uA789\u00A0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.view.eval_all(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__60003 = cljs.core.deref(mecca.sci_editor._BANG_points);
var G__60003__$1 = (((G__60003 == null))?null:G__60003.state);
var G__60003__$2 = (((G__60003__$1 == null))?null:G__60003__$1.doc);
if((G__60003__$2 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60003__$2);
}
})())))].join(''));
});
;})(s__59991__$1,pitches,pitch,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))

}
}
})(),0.2,0.2,((function (s__59991__$1,pitch,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_){
return (function (){
if(cljs.core.not((function (){var and__4221__auto__ = cljs.core.deref(sharp_QMARK_);
if(cljs.core.truth_(and__4221__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(12))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(15))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(8))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(5))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pitch,(0))))))))))));
} else {
return and__4221__auto__;
}
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-focus-note","update-focus-note",-40352556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null));
} else {
return null;
}
});})(s__59991__$1,pitch,s__59993__$2,temp__5753__auto____$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))
,((6) * time),"all","hidden",(1)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,pitch], null)], null)),mecca$view$note_targets_$_iter__59990_$_iter__59992(cljs.core.rest(s__59993__$2)));
}
} else {
return null;
}
break;
}
});})(s__59991__$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))
,null,null));
});})(s__59991__$1,time,xs__6308__auto__,temp__5753__auto__,instrument,editor_x,sharp_QMARK_))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((19))));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,mecca$view$note_targets_$_iter__59990(cljs.core.rest(s__59991__$1)));
} else {
var G__60016 = cljs.core.rest(s__59991__$1);
s__59991__$1 = G__60016;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(9),0.5));
})());
});
});
mecca.view.note_cursor = (function mecca$view$note_cursor(){
var focused = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focused-note-pos","focused-note-pos",-1443473576)], null));
var instrument = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null));
var sharp_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sharp?","sharp?",411396133)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(focused),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null))){
return null;
} else {
var x = cljs.core.first(cljs.core.deref(focused));
var y = cljs.core.last(cljs.core.deref(focused));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(cljs.core.truth_(cljs.core.deref(sharp_QMARK_))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * y)),0.07):null),(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eraser?","eraser?",-561181785)], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.eraser_cursor,((36) + ((30) * x)),(((5) * y) + (20)),0.2], null):(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat?","repeat?",1245600428)], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.repeat_sign,((7) + ((6) * x)),(8),0.13], null):(function (){var G__60004 = cljs.core.deref(instrument);
switch (G__60004) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60004)].join('')));

}
})()
))], null);
}
});
mecca.view.score_notes = (function mecca$view$score_notes(){
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null));
var editor_x = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),(function (){var iter__4622__auto__ = (function mecca$view$score_notes_$_iter__60005(s__60006){
return (new cljs.core.LazySeq(null,(function (){
var s__60006__$1 = s__60006;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60006__$1);
if(temp__5753__auto__){
var s__60006__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60006__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__60006__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__60008 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__60007 = (0);
while(true){
if((i__60007 < size__4621__auto__)){
var map__60009 = cljs.core._nth(c__4620__auto__,i__60007);
var map__60009__$1 = cljs.core.__destructure_map(map__60009);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60009__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60009__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60009__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
if(((((cljs.core.deref(editor_x) - (1)) <= time)) && ((time <= ((16) + (cljs.core.deref(editor_x) - (1))))))){
cljs.core.chunk_append(b__60008,(function (){var x = (time - (cljs.core.deref(editor_x) - (1)));
var pitch_map = cljs.core.zipmap(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55),(53)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((19)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch)))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1))))),0.07):null),(function (){var G__60010 = instrument;
switch (G__60010) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

}
})()], null);
})());

var G__60019 = (i__60007 + (1));
i__60007 = G__60019;
continue;
} else {
var G__60020 = (i__60007 + (1));
i__60007 = G__60020;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60008),mecca$view$score_notes_$_iter__60005(cljs.core.chunk_rest(s__60006__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60008),null);
}
} else {
var map__60011 = cljs.core.first(s__60006__$2);
var map__60011__$1 = cljs.core.__destructure_map(map__60011);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
if(((((cljs.core.deref(editor_x) - (1)) <= time)) && ((time <= ((16) + (cljs.core.deref(editor_x) - (1))))))){
return cljs.core.cons((function (){var x = (time - (cljs.core.deref(editor_x) - (1)));
var pitch_map = cljs.core.zipmap(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(84),(83),(81),(79),(77),(76),(74),(72),(71),(69),(67),(65),(64),(62),(60),(59),(57),(55),(53)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((19)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch)))?mecca.editor.svg_paths.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","M15 46C15 47 14 47 13 47 13 47 12 47 12 46V37L7 39V49C7 49 6 50 6 50 5 50 5 49 5 49V40L3 40C3 40 2 40 2 40 2 40 1 40 1 39V35C1 35 1 34 2 34L5 33V23L3 24C3 24 2 24 2 24 2 24 1 23 1 23V19C1 19 1 18 2 18L5 17V7C5 6 5 6 6 6 6 6 7 6 7 7V16L12 14V4C12 4 13 3 13 3 14 3 15 4 15 4V13L17 13C17 12 17 12 17 12 18 12 18 13 18 14V17C18 18 18 18 17 19L15 20V30L17 29C17 29 17 29 17 29 18 29 18 29 18 30V34C18 34 18 35 17 35L15 36V46ZM7 22V32L12 31V21Z"], null)], null),((68) + ((86) * x)),((18) + ((15) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1))))),0.07):null),(function (){var G__60012 = instrument;
switch (G__60012) {
case (1):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.shroom,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.yoshi,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.star,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.flower,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.gb,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (7):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.dog,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (8):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.kitty,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (9):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.pig,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (10):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.swan,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (11):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.face,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (10)),0.2], null);

break;
case (12):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.plane,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
case (13):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.boat,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (14):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.car,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (12)),0.2], null);

break;
case (15):
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.heart,((32) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (15)),0.2], null);

break;
default:
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_note,((2) + ((30) * x)),(((5) * (function (){var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,pitch);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pitch_map,(pitch - (1)));
}
})()) + (9)),0.2], null);

}
})()], null);
})(),mecca$view$score_notes_$_iter__60005(cljs.core.rest(s__60006__$2)));
} else {
var G__60022 = cljs.core.rest(s__60006__$2);
s__60006__$1 = G__60022;
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
return iter__4622__auto__(cljs.core.deref(notes));
})());
});
mecca.view.editor = (function mecca$view$editor(){
var editor_x = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null));
var mario_run = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628)], null));
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),cljs.core.deref(mario_run))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump-reset","jump-reset",-1337123824)], null));
} else {
}

return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 64 36",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"url(/mecca/public/images/hand.png),pointer"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.cloud,(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.hill,(40)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_face,(363),(18),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_face,(348),(48),(10)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.mario_sm], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.current_note_display,(47),(0),0.22], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.note_blocks], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.mario.floor_tile,(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect#editorframe","rect#editorframe",1607762183),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.2,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),63.5,new cljs.core.Keyword(null,"x","x",2099068185),0.25,new cljs.core.Keyword(null,"y","y",-1757859776),14.5], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.staff","g.staff",1070451758),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,13.5) scale(1)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.staff_lines], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.retract_editor,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.treble_clef,(0.8 - ((6) * (cljs.core.deref(editor_x) - (1)))),6.3], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.advance_editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.advance_measure], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.advance_end], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_targets], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_guides], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.note_cursor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.score_notes], null),(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loop-end","loop-end",-88908047)], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.repeat_sign,((7) + ((6) * cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loop-end","loop-end",-88908047)], null))))),(8),0.13], null):null)], null)], null);
});
});
mecca.view.load_song = (function mecca$view$load_song(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#input","input#input",-1134984774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var dom = goog.object.get(e,"target");
var file = goog.object.getValueByKeys(dom,["files",(0)]);
var reader = (new FileReader());
reader.readAsText(file);

return (reader.onload = (function (p1__60013_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-notes","set-notes",-1718182261),clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(p1__60013_SHARP_.target.result)], null));
}));
})], null)], null);
});
mecca.view.demo = "(defn bass1 [time]\n  [{:time (+ time 0), :instrument 15, :pitch 71} {:time (+ time 1.5) :instrument 15, :pitch 71} {:time (+ time 2) :instrument 15, :pitch 71} {:time (+ time 3) :instrument 15, :pitch 73} {:time (+ time 3.5) :instrument 15, :pitch 69} {:time (+ time 4) :instrument 15, :pitch 69} {:time (+ time 5.5) :instrument 15, :pitch 69} {:time (+ time 6) :instrument 15, :pitch 69} {:time (+ time 8) :instrument 15, :pitch 64} {:time (+ time 9.5) :instrument 15, :pitch 64} {:time (+ time 10) :instrument 15, :pitch 64} {:time (+ time 12) :instrument 15, :pitch 64} {:time (+ time 13.5) :instrument 15, :pitch 64} {:time (+ time 14) :instrument 15, :pitch 64}])\n\n(def bass-pat-1\n  (concat (bass1 0) (bass1 16)))\n\n(defn drums1 [time]\n  (map (fn [m] (update m :time #(+ % time)))\n    [{:time 15,:instrument 2,:pitch 67} {:time 14,:instrument 13,:pitch 77} {:time 13,:instrument 13,:pitch 77} {:time 12,:instrument 13,:pitch 77} {:time 11,:instrument 2,:pitch 67} {:time 10,:instrument 13,:pitch 77} {:time 9,:instrument 13,:pitch 77} {:time 8,:instrument 13,:pitch 77} {:time 7,:instrument 2,:pitch 67} {:time 6,:instrument 13,:pitch 77} {:time 5,:instrument 13,:pitch 77} {:time 4,:instrument 13,:pitch 77} {:time 3,:instrument 2,:pitch 67} {:time 2,:instrument 13,:pitch 77} {:time 1,:instrument 13,:pitch 77} {:time 0,:instrument 13,:pitch 77}]))\n\n(defn drums-pat-1 [time]\n  (map (fn [m] (update m :time #(+ % time)))\n       (concat (drums1 0) (drums1 16))))\n\n(defn glis [notes]\n  (let [chord (reverse (sort-by :pitch notes))\n        times (for [note (range (count chord))]\n                (update (nth chord note) :time #(+ % (* 0.1 note))))\n        pitches (for [note (range (count times))]\n                  (update (nth times note) :pitch #(- % note)))\n        last-note (repeat 3 (last pitches))\n        last-note (for [note (range 1 3)]\n                    (update (nth last-note note) :time #(+ % (/ note 10.0))))]\n    (concat pitches last-note)))\n\n(defn lead1 [time]\n  (map (fn [m] (update m :time #(+ % time)))\n       (concat [{:time 1.5, :instrument 14, :pitch 69} {:time 2, :instrument 14, :pitch 71} {:time 2.5, :instrument 14, :pitch 74} {:time 3, :instrument 14, :pitch 76} {:time 3.5, :instrument 14, :pitch 78} {:time 4, :instrument 14, :pitch 78} {:time 4.5, :instrument 14, :pitch 78} {:time 5, :instrument 14, :pitch 76} {:time 6, :instrument 14, :pitch 74} {:time 6.5, :instrument 14, :pitch 76} {:time 7.5, :instrument 14, :pitch 74} {:time 7.75, :instrument 14, :pitch 76} {:time 8, :instrument 14, :pitch 74} {:time 9, :instrument 14, :pitch 74} {:time 9.5, :instrument 14, :pitch 71}]\n               (glis (repeat 12 {:time 10 :instrument 14, :pitch 71}))\n               [{:time 12, :instrument 14, :pitch 74} {:time 12.5, :instrument 14, :pitch 74} {:time 13.5, :instrument 14, :pitch 74} {:time 14.5, :instrument 14, :pitch 71} {:time 15.5, :instrument 14, :pitch 69} {:time 16, :instrument 14, :pitch 71}]\n               (glis (repeat 8 {:time 16, :instrument 14, :pitch 71}))\n               [{:time 17.5, :instrument 14, :pitch 64} {:time 18, :instrument 14, :pitch 66} {:time 18.5, :instrument 14, :pitch 69} {:time 19, :instrument 14, :pitch 71} {:time 20, :instrument 14, :pitch 71} {:time 20.5, :instrument 14, :pitch 73} {:time 21.5, :instrument 14, :pitch 69} {:time 22.5, :instrument 14, :pitch 69} {:time 24, :instrument 14, :pitch 66} {:time 24.5, :instrument 14, :pitch 64} {:time 25.5, :instrument 14, :pitch 64}])))\n\n(def rhythm\n  (concat\n   bass-pat-1\n   (drums-pat-1 0)\n    (lead1 0)))\n\nrhythm";
mecca.view.mecca = (function mecca$view$mecca(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.editor], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-container","div.flex-container",-1859832494),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-item","div.flex-item",438695073),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.sci_editor.editor,mecca.view.demo,mecca.sci_editor._BANG_points,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval?","eval?",2053418525),true], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Evaluation results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.sci_editor.editor,cljs.core.deref(mecca.sci_editor.result),mecca.sci_editor._BANG_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval?","eval?",2053418525),true], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-item","div.flex-item",438695073),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.transport.transport,(0),-0.5,0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.editor.toolbar,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var file_blob = (new Blob(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null)))], null),({"type": "text/plain"})));
var link = document.createElement("a");
(link.href = URL.createObjectURL(file_blob));

link.setAttribute("download","mecca.txt");

document.body.appendChild(link);

link.click();

return document.body.removeChild(link);
})], null),"Download"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.load_song], null)], null)], null)], null);
});

//# sourceMappingURL=mecca.view.js.map
