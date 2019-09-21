// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mecca.mario');
goog.require('mecca.music');
goog.require('mecca.audio.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),new cljs.core.Keyword(null,"octave","octave",1066197953),new cljs.core.Keyword(null,"selected-note-value","selected-note-value",-575447419),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"mario-y","mario-y",1718385780),new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.Keyword(null,"lead","lead",1214038903),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"drums","drums",641393692),new cljs.core.Keyword(null,"mario-x","mario-x",1743249500),new cljs.core.Keyword(null,"current-position","current-position",2031348254)],[(1),(3),(1),"C","Minor",(0),(0),(1),false,41.5,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(180),cljs.core.PersistentVector.EMPTY,(54),(0)]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),(function (db,p__15413){
var vec__15414 = p__15413;
var _ = cljs.core.nth.call(null,vec__15414,(0),null);
var bassline = cljs.core.nth.call(null,vec__15414,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__15414,_,bassline){
return (function mecca$events$iter__15417(s__15418){
return (new cljs.core.LazySeq(null,((function (vec__15414,_,bassline){
return (function (){
var s__15418__$1 = s__15418;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15418__$1);
if(temp__5457__auto__){
var s__15418__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15418__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15418__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15420 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15419 = (0);
while(true){
if((i__15419 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__15419);
cljs.core.chunk_append.call(null,b__15420,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.audio.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__15421 = (i__15419 + (1));
i__15419 = G__15421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15420),mecca$events$iter__15417.call(null,cljs.core.chunk_rest.call(null,s__15418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15420),null);
}
} else {
var interval = cljs.core.first.call(null,s__15418__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.audio.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__15417.call(null,cljs.core.rest.call(null,s__15418__$2)));
}
} else {
return null;
}
break;
}
});})(vec__15414,_,bassline))
,null,null));
});})(vec__15414,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-note","add-note",-926319985),(function (db,p__15422){
var vec__15423 = p__15422;
var _ = cljs.core.nth.call(null,vec__15423,(0),null);
var x = cljs.core.nth.call(null,vec__15423,(1),null);
var y = cljs.core.nth.call(null,vec__15423,(2),null);
return cljs.core.update_in.call(null,db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null):null))),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-note-value","selected-note-value",-575447419)], null))),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((77) - y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-note","remove-note",-1957283966),(function (db,p__15427){
var vec__15428 = p__15427;
var _ = cljs.core.nth.call(null,vec__15428,(0),null);
var x = cljs.core.nth.call(null,vec__15428,(1),null);
var y = cljs.core.nth.call(null,vec__15428,(2),null);
return cljs.core.update_in.call(null,db,(((y < (18)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lead","lead",1214038903)], null):((((((18) < y)) && ((y < (31)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null):((((30) < y))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null):null))),((function (vec__15428,_,x,y){
return (function (notes){
return cljs.core.remove.call(null,((function (vec__15428,_,x,y){
return (function (p1__15426_SHARP_){
return ((cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__15426_SHARP_))) && (cljs.core._EQ_.call(null,((77) - y),new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__15426_SHARP_))));
});})(vec__15428,_,x,y))
,notes);
});})(vec__15428,_,x,y))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-drum-hit","add-drum-hit",-259631030),(function (db,p__15431){
var vec__15432 = p__15431;
var _ = cljs.core.nth.call(null,vec__15432,(0),null);
var x = cljs.core.nth.call(null,vec__15432,(1),null);
var y = cljs.core.nth.call(null,vec__15432,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drums","drums",641393692)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((77) - y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-note","move-note",873805465),(function (db,p__15435){
var vec__15436 = p__15435;
var _ = cljs.core.nth.call(null,vec__15436,(0),null);
var bassline = cljs.core.nth.call(null,vec__15436,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__15436,_,bassline){
return (function mecca$events$iter__15439(s__15440){
return (new cljs.core.LazySeq(null,((function (vec__15436,_,bassline){
return (function (){
var s__15440__$1 = s__15440;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15440__$1);
if(temp__5457__auto__){
var s__15440__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15440__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15440__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15442 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15441 = (0);
while(true){
if((i__15441 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__15441);
cljs.core.chunk_append.call(null,b__15442,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.audio.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__15443 = (i__15441 + (1));
i__15441 = G__15443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15442),mecca$events$iter__15439.call(null,cljs.core.chunk_rest.call(null,s__15440__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15442),null);
}
} else {
var interval = cljs.core.first.call(null,s__15440__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.audio.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__15439.call(null,cljs.core.rest.call(null,s__15440__$2)));
}
} else {
return null;
}
break;
}
});})(vec__15436,_,bassline))
,null,null));
});})(vec__15436,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__15444){
var vec__15445 = p__15444;
var _ = cljs.core.nth.call(null,vec__15445,(0),null);
var new_time = cljs.core.nth.call(null,vec__15445,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__15448){
var vec__15449 = p__15448;
var _ = cljs.core.nth.call(null,vec__15449,(0),null);
var scale = cljs.core.nth.call(null,vec__15449,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-note-value","select-note-value",-1351124134),(function (db,p__15452){
var vec__15453 = p__15452;
var _ = cljs.core.nth.call(null,vec__15453,(0),null);
var value = cljs.core.nth.call(null,vec__15453,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-note-value","selected-note-value",-575447419),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__15456){
var vec__15457 = p__15456;
var _ = cljs.core.nth.call(null,vec__15457,(0),null);
var scale = cljs.core.nth.call(null,vec__15457,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),(function (db,p__15460){
var vec__15461 = p__15460;
var _ = cljs.core.nth.call(null,vec__15461,(0),null);
var scale = cljs.core.nth.call(null,vec__15461,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__15464){
var vec__15465 = p__15464;
var _ = cljs.core.nth.call(null,vec__15465,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__15465,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-editor","advance-editor",-224480492),(function (db,p__15468){
var vec__15469 = p__15468;
var _ = cljs.core.nth.call(null,vec__15469,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__15469,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"retract-editor","retract-editor",777879449),(function (db,p__15472){
var vec__15473 = p__15472;
var _ = cljs.core.nth.call(null,vec__15473,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__15473,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415),cljs.core.dec);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__15476){
var vec__15477 = p__15476;
var _ = cljs.core.nth.call(null,vec__15477,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__15477,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__15480){
var vec__15481 = p__15480;
var _ = cljs.core.nth.call(null,vec__15481,(0),null);
var tempo = cljs.core.nth.call(null,vec__15481,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-octave","set-octave",378200257),(function (db,p__15484){
var vec__15485 = p__15484;
var _ = cljs.core.nth.call(null,vec__15485,(0),null);
var octave = cljs.core.nth.call(null,vec__15485,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"octave","octave",1066197953),octave);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__15488){
var vec__15489 = p__15488;
var _ = cljs.core.nth.call(null,vec__15489,(0),null);
var key = cljs.core.nth.call(null,vec__15489,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tick!","tick!",68058958),(function (db,p__15493){
var vec__15494 = p__15493;
var _ = cljs.core.nth.call(null,vec__15494,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__15494,(1),null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"mario-run","mario-run",-1086168628),((function (vec__15494,_,___$1){
return (function (p1__15492_SHARP_){
if(cljs.core._EQ_.call(null,p1__15492_SHARP_,(3))){
return (1);
} else {
return (p1__15492_SHARP_ + (1));
}
});})(vec__15494,_,___$1))
),new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),cljs.core.inc),new cljs.core.Keyword(null,"time","time",1385887882),mecca.music.current_time.call(null,cljs.core.deref.call(null,mecca.music.audiocontext)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"jump-reset","jump-reset",-1337123824),(function (db,p__15497){
var vec__15498 = p__15497;
var _ = cljs.core.nth.call(null,vec__15498,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__15498,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289),(0));
}));
mecca.events.mouse_pos = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
mecca.events.selected = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
mecca.events.get_client_rect = (function mecca$events$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"top","top",-1856271961),r.top], null);
});
mecca.events.mouse_move_handler = (function mecca$events$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset));
return cljs.core.reset_BANG_.call(null,mecca.events.mouse_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
});
mecca.events.mouse_up_handler = (function mecca$events$mouse_up_handler(on_move){
return (function mecca$events$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
mecca.events.mouse_down_handler = (function mecca$events$mouse_down_handler(e){
var map__15501 = mecca.events.get_client_rect.call(null,e);
var map__15501__$1 = ((((!((map__15501 == null)))?(((((map__15501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15501):map__15501);
var left = cljs.core.get.call(null,map__15501__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__15501__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.events.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=events9123039.js.map
