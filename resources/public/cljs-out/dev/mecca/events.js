// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mecca.music');
goog.require('mecca.music.scale');
goog.require('goog.events');
goog.require('goog.events.EventType');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scale","scale",-230427353),"Minor",new cljs.core.Keyword(null,"current-position","current-position",2031348254),(0),new cljs.core.Keyword(null,"octave","octave",1066197953),(3),new cljs.core.Keyword(null,"key","key",-1516042587),"C",new cljs.core.Keyword(null,"tempo","tempo",-1555208453),(80),new cljs.core.Keyword(null,"bassline","bassline",325787412),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(48),(55),(51),(55),(48),(55),(51),(55),(48),(55),(51),(55),(48),(55),(51),(55)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-bassline","set-bassline",-894568155),(function (db,p__15153){
var vec__15154 = p__15153;
var _ = cljs.core.nth.call(null,vec__15154,(0),null);
var bassline = cljs.core.nth.call(null,vec__15154,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__15154,_,bassline){
return (function mecca$events$iter__15157(s__15158){
return (new cljs.core.LazySeq(null,((function (vec__15154,_,bassline){
return (function (){
var s__15158__$1 = s__15158;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15158__$1);
if(temp__5457__auto__){
var s__15158__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15158__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15158__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15160 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15159 = (0);
while(true){
if((i__15159 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__15159);
cljs.core.chunk_append.call(null,b__15160,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__15161 = (i__15159 + (1));
i__15159 = G__15161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15160),mecca$events$iter__15157.call(null,cljs.core.chunk_rest.call(null,s__15158__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15160),null);
}
} else {
var interval = cljs.core.first.call(null,s__15158__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__15157.call(null,cljs.core.rest.call(null,s__15158__$2)));
}
} else {
return null;
}
break;
}
});})(vec__15154,_,bassline))
,null,null));
});})(vec__15154,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"move-note","move-note",873805465),(function (db,p__15162){
var vec__15163 = p__15162;
var _ = cljs.core.nth.call(null,vec__15163,(0),null);
var bassline = cljs.core.nth.call(null,vec__15163,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"bassline","bassline",325787412),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (vec__15163,_,bassline){
return (function mecca$events$iter__15166(s__15167){
return (new cljs.core.LazySeq(null,((function (vec__15163,_,bassline){
return (function (){
var s__15167__$1 = s__15167;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15167__$1);
if(temp__5457__auto__){
var s__15167__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15167__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15167__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15169 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15168 = (0);
while(true){
if((i__15168 < size__4323__auto__)){
var interval = cljs.core._nth.call(null,c__4322__auto__,i__15168);
cljs.core.chunk_append.call(null,b__15169,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))));

var G__15170 = (i__15168 + (1));
i__15168 = G__15170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15169),mecca$events$iter__15166.call(null,cljs.core.chunk_rest.call(null,s__15167__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15169),null);
}
} else {
var interval = cljs.core.first.call(null,s__15167__$2);
return cljs.core.cons.call(null,cljs.core.nth.call(null,cljs.core.take.call(null,(16),mecca.music.scale.scale.call(null,cljs.core.get.call(null,mecca.music.scales,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scale","scale",-230427353)], null)))),mecca.music.root_note_midi_num.call(null))),(interval - (1))),mecca$events$iter__15166.call(null,cljs.core.rest.call(null,s__15167__$2)));
}
} else {
return null;
}
break;
}
});})(vec__15163,_,bassline))
,null,null));
});})(vec__15163,_,bassline))
;
return iter__4324__auto__.call(null,bassline);
})()));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-scale","set-scale",-582286217),(function (db,p__15171){
var vec__15172 = p__15171;
var _ = cljs.core.nth.call(null,vec__15172,(0),null);
var scale = cljs.core.nth.call(null,vec__15172,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scale","scale",-230427353),scale);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"advance-position","advance-position",-23796893),(function (db,p__15175){
var vec__15176 = p__15175;
var _ = cljs.core.nth.call(null,vec__15176,(0),null);
var scale = cljs.core.nth.call(null,vec__15176,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-position","current-position",2031348254),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tempo","set-tempo",59409059),(function (db,p__15179){
var vec__15180 = p__15179;
var _ = cljs.core.nth.call(null,vec__15180,(0),null);
var tempo = cljs.core.nth.call(null,vec__15180,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tempo","tempo",-1555208453),tempo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-octave","set-octave",378200257),(function (db,p__15183){
var vec__15184 = p__15183;
var _ = cljs.core.nth.call(null,vec__15184,(0),null);
var octave = cljs.core.nth.call(null,vec__15184,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"octave","octave",1066197953),octave);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-key","set-key",-48186176),(function (db,p__15187){
var vec__15188 = p__15187;
var _ = cljs.core.nth.call(null,vec__15188,(0),null);
var key = cljs.core.nth.call(null,vec__15188,(1),null);
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
var map__15191 = mecca.events.get_client_rect.call(null,e);
var map__15191__$1 = ((((!((map__15191 == null)))?(((((map__15191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15191):map__15191);
var left = cljs.core.get.call(null,map__15191__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__15191__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = mecca.events.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,mecca.events.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=events.js.map
