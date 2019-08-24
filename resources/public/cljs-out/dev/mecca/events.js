// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mecca.music');
goog.require('mecca.music.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"scale","scale",-230427353),"Minor",new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0),new cljs.core.Keyword(null,"octave","octave",1066197953),(3),new cljs.core.Keyword(null,"key","key",-1516042587),"C",new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(180),new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),(function (db,p__14542){
var vec__14543 = p__14542;
var _ = cljs.core.nth.call(null,vec__14543,(0),null);
var bassline = cljs.core.nth.call(null,vec__14543,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__14543,_,bassline){
return (function mecca$events$iter__14546(s__14547){
return (new cljs.core.LazySeq(null,((function (vec__14543,_,bassline){
return (function (){
var s__14547__$1 = s__14547;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14547__$1);
if(temp__5457__auto__){
var s__14547__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14547__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14547__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14549 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14548 = (0);
while(true){
if((i__14548 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__14548);
cljs.core.chunk_append.call(null,b__14549,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__14550 = (i__14548 + (1));
i__14548 = G__14550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14549),mecca$events$iter__14546.call(null,cljs.core.chunk_rest.call(null,s__14547__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14549),null);
}
} else {
var interval = cljs.core.first.call(null,s__14547__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__14546.call(null,cljs.core.rest.call(null,s__14547__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14543,_,bassline))
,null,null));
});})(vec__14543,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-bass-note","add-bass-note",-2031433729),(function (db,p__14551){
var vec__14552 = p__14551;
var _ = cljs.core.nth.call(null,vec__14552,(0),null);
var x = cljs.core.nth.call(null,vec__14552,(1),null);
var y = cljs.core.nth.call(null,vec__14552,(2),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bassline","bassline",325787412)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),x,new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"pitch","pitch",1495126700),((48) + y)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-note","move-note",873805465),(function (db,p__14555){
var vec__14556 = p__14555;
var _ = cljs.core.nth.call(null,vec__14556,(0),null);
var bassline = cljs.core.nth.call(null,vec__14556,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__14556,_,bassline){
return (function mecca$events$iter__14559(s__14560){
return (new cljs.core.LazySeq(null,((function (vec__14556,_,bassline){
return (function (){
var s__14560__$1 = s__14560;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__14560__$1);
if(temp__5457__auto__){
var s__14560__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14560__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__14560__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__14562 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__14561 = (0);
while(true){
if((i__14561 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__14561);
cljs.core.chunk_append.call(null,b__14562,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__14563 = (i__14561 + (1));
i__14561 = G__14563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14562),mecca$events$iter__14559.call(null,cljs.core.chunk_rest.call(null,s__14560__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14562),null);
}
} else {
var interval = cljs.core.first.call(null,s__14560__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__14559.call(null,cljs.core.rest.call(null,s__14560__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14556,_,bassline))
,null,null));
});})(vec__14556,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(function (db,p__14564){
var vec__14565 = p__14564;
var _ = cljs.core.nth.call(null,vec__14565,(0),null);
var scale = cljs.core.nth.call(null,vec__14565,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"play-off","play-off",2116693509),(function (db,p__14568){
var vec__14569 = p__14568;
var _ = cljs.core.nth.call(null,vec__14569,(0),null);
var scale = cljs.core.nth.call(null,vec__14569,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),(function (db,p__14572){
var vec__14573 = p__14572;
var _ = cljs.core.nth.call(null,vec__14573,(0),null);
var scale = cljs.core.nth.call(null,vec__14573,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__14576){
var vec__14577 = p__14576;
var _ = cljs.core.nth.call(null,vec__14577,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14577,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__14580){
var vec__14581 = p__14580;
var _ = cljs.core.nth.call(null,vec__14581,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__14581,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__14584){
var vec__14585 = p__14584;
var _ = cljs.core.nth.call(null,vec__14585,(0),null);
var tempo = cljs.core.nth.call(null,vec__14585,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-octave","set-octave",378200257),(function (db,p__14588){
var vec__14589 = p__14588;
var _ = cljs.core.nth.call(null,vec__14589,(0),null);
var octave = cljs.core.nth.call(null,vec__14589,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"octave","octave",1066197953),octave);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__14592){
var vec__14593 = p__14592;
var _ = cljs.core.nth.call(null,vec__14593,(0),null);
var key = cljs.core.nth.call(null,vec__14593,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
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
var map__14596 = mecca.events.get_client_rect.call(null,e);
var map__14596__$1 = ((((!((map__14596 == null)))?(((((map__14596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14596):map__14596);
var left = cljs.core.get.call(null,map__14596__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__14596__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.events.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=events.js.map
