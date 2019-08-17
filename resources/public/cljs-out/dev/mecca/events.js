// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mecca.music');
goog.require('mecca.music.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scale","scale",-230427353),"Minor",new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0),new cljs.core.Keyword(null,"octave","octave",1066197953),(3),new cljs.core.Keyword(null,"key","key",-1516042587),"C",new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(180),new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(48),(55),(51),(55),(48),(55),(51),(55),(48),(55),(51),(55),(48),(55),(51),(55)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),(function (db,p__16236){
var vec__16237 = p__16236;
var _ = cljs.core.nth.call(null,vec__16237,(0),null);
var bassline = cljs.core.nth.call(null,vec__16237,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__16237,_,bassline){
return (function mecca$events$iter__16240(s__16241){
return (new cljs.core.LazySeq(null,((function (vec__16237,_,bassline){
return (function (){
var s__16241__$1 = s__16241;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16241__$1);
if(temp__5457__auto__){
var s__16241__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16241__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16241__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16243 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16242 = (0);
while(true){
if((i__16242 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__16242);
cljs.core.chunk_append.call(null,b__16243,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__16244 = (i__16242 + (1));
i__16242 = G__16244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16243),mecca$events$iter__16240.call(null,cljs.core.chunk_rest.call(null,s__16241__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16243),null);
}
} else {
var interval = cljs.core.first.call(null,s__16241__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__16240.call(null,cljs.core.rest.call(null,s__16241__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16237,_,bassline))
,null,null));
});})(vec__16237,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-note","move-note",873805465),(function (db,p__16245){
var vec__16246 = p__16245;
var _ = cljs.core.nth.call(null,vec__16246,(0),null);
var bassline = cljs.core.nth.call(null,vec__16246,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__16246,_,bassline){
return (function mecca$events$iter__16249(s__16250){
return (new cljs.core.LazySeq(null,((function (vec__16246,_,bassline){
return (function (){
var s__16250__$1 = s__16250;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16250__$1);
if(temp__5457__auto__){
var s__16250__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16250__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16250__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16252 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16251 = (0);
while(true){
if((i__16251 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__16251);
cljs.core.chunk_append.call(null,b__16252,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__16253 = (i__16251 + (1));
i__16251 = G__16253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16252),mecca$events$iter__16249.call(null,cljs.core.chunk_rest.call(null,s__16250__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16252),null);
}
} else {
var interval = cljs.core.first.call(null,s__16250__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__16249.call(null,cljs.core.rest.call(null,s__16250__$2)));
}
} else {
return null;
}
break;
}
});})(vec__16246,_,bassline))
,null,null));
});})(vec__16246,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),(function (db,p__16254){
var vec__16255 = p__16254;
var _ = cljs.core.nth.call(null,vec__16255,(0),null);
var scale = cljs.core.nth.call(null,vec__16255,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__16258){
var vec__16259 = p__16258;
var _ = cljs.core.nth.call(null,vec__16259,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16259,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-position","reset-position",-804750860),(function (db,p__16262){
var vec__16263 = p__16262;
var _ = cljs.core.nth.call(null,vec__16263,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__16263,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__16266){
var vec__16267 = p__16266;
var _ = cljs.core.nth.call(null,vec__16267,(0),null);
var tempo = cljs.core.nth.call(null,vec__16267,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-octave","set-octave",378200257),(function (db,p__16270){
var vec__16271 = p__16270;
var _ = cljs.core.nth.call(null,vec__16271,(0),null);
var octave = cljs.core.nth.call(null,vec__16271,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"octave","octave",1066197953),octave);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__16274){
var vec__16275 = p__16274;
var _ = cljs.core.nth.call(null,vec__16275,(0),null);
var key = cljs.core.nth.call(null,vec__16275,(1),null);
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
var map__16278 = mecca.events.get_client_rect.call(null,e);
var map__16278__$1 = ((((!((map__16278 == null)))?(((((map__16278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16278):map__16278);
var left = cljs.core.get.call(null,map__16278__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__16278__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.events.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=events.js.map
