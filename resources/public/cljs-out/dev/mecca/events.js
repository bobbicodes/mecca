// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mecca.music');
goog.require('mecca.music.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"scale","scale",-230427353),"Minor",new cljs.core.Keyword(null,"octave","octave",1066197953),(3),new cljs.core.Keyword(null,"key","key",-1516042587),"C",new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(100),new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(48),(55),(51),(55),(48),(55),(51),(55),(48),(55),(51),(55),(48),(55),(51),(55)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),(function (db,p__15737){
var vec__15738 = p__15737;
var _ = cljs.core.nth.call(null,vec__15738,(0),null);
var bassline = cljs.core.nth.call(null,vec__15738,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__15738,_,bassline){
return (function mecca$events$iter__15741(s__15742){
return (new cljs.core.LazySeq(null,((function (vec__15738,_,bassline){
return (function (){
var s__15742__$1 = s__15742;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15742__$1);
if(temp__5457__auto__){
var s__15742__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15742__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15742__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15744 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15743 = (0);
while(true){
if((i__15743 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__15743);
cljs.core.chunk_append.call(null,b__15744,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__15745 = (i__15743 + (1));
i__15743 = G__15745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15744),mecca$events$iter__15741.call(null,cljs.core.chunk_rest.call(null,s__15742__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15744),null);
}
} else {
var interval = cljs.core.first.call(null,s__15742__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__15741.call(null,cljs.core.rest.call(null,s__15742__$2)));
}
} else {
return null;
}
break;
}
});})(vec__15738,_,bassline))
,null,null));
});})(vec__15738,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),(function (db,p__15746){
var vec__15747 = p__15746;
var _ = cljs.core.nth.call(null,vec__15747,(0),null);
var scale = cljs.core.nth.call(null,vec__15747,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__15750){
var vec__15751 = p__15750;
var _ = cljs.core.nth.call(null,vec__15751,(0),null);
var tempo = cljs.core.nth.call(null,vec__15751,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-octave","set-octave",378200257),(function (db,p__15754){
var vec__15755 = p__15754;
var _ = cljs.core.nth.call(null,vec__15755,(0),null);
var octave = cljs.core.nth.call(null,vec__15755,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"octave","octave",1066197953),octave);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__15758){
var vec__15759 = p__15758;
var _ = cljs.core.nth.call(null,vec__15759,(0),null);
var key = cljs.core.nth.call(null,vec__15759,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"key","key",-1516042587),key);
}));
mecca.events.mouse_pos = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null));
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
var map__15762 = mecca.events.get_client_rect.call(null,e);
var map__15762__$1 = ((((!((map__15762 == null)))?(((((map__15762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15762):map__15762);
var left = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__15762__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.events.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=events.js.map
