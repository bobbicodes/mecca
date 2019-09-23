// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.view.debug');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('day8.re_frame_10x.view.components');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
day8.re_frame_10x.view.debug.render = (function day8$re_frame_10x$view$debug$render(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1 1 auto",new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Number of epochs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531)], null)))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Beginning trace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null)))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Ending ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null)))))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["Current epoch ID ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null)))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Subscriptions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["debug-subs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"pre epoch"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pre-epoch-subs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"match state"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["match-state"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Epochs"], null),(function (){var current_match = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null)));
var iter__4324__auto__ = ((function (current_match){
return (function day8$re_frame_10x$view$debug$render_$_iter__15197(s__15198){
return (new cljs.core.LazySeq(null,((function (current_match){
return (function (){
var s__15198__$1 = s__15198;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15198__$1);
if(temp__5457__auto__){
var s__15198__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15198__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15198__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15200 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15199 = (0);
while(true){
if((i__15199 < size__4323__auto__)){
var match = cljs.core._nth.call(null,c__4322__auto__,i__15199);
var match_info = new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match);
cljs.core.chunk_append.call(null,b__15200,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((cljs.core._EQ_.call(null,current_match,match_info))?"bold":"normal")], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.call(null,cljs.core.map.call(null,((function (i__15199,match_info,match,c__4322__auto__,size__4323__auto__,b__15200,s__15198__$2,temp__5457__auto__,current_match){
return (function (event){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.prn_str.call(null,event)], null);
});})(i__15199,match_info,match,c__4322__auto__,size__4323__auto__,b__15200,s__15198__$2,temp__5457__auto__,current_match))
,day8.re_frame_10x.metamorphic.summarise_match.call(null,match_info)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,match_info))], null)));

var G__15201 = (i__15199 + (1));
i__15199 = G__15201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15200),day8$re_frame_10x$view$debug$render_$_iter__15197.call(null,cljs.core.chunk_rest.call(null,s__15198__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15200),null);
}
} else {
var match = cljs.core.first.call(null,s__15198__$2);
var match_info = new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),((cljs.core._EQ_.call(null,current_match,match_info))?"bold":"normal")], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.call(null,cljs.core.map.call(null,((function (match_info,match,s__15198__$2,temp__5457__auto__,current_match){
return (function (event){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.prn_str.call(null,event)], null);
});})(match_info,match,s__15198__$2,temp__5457__auto__,current_match))
,day8.re_frame_10x.metamorphic.summarise_match.call(null,match_info)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,match_info))], null)),day8$re_frame_10x$view$debug$render_$_iter__15197.call(null,cljs.core.rest.call(null,s__15198__$2)));
}
} else {
return null;
}
break;
}
});})(current_match))
,null,null));
});})(current_match))
;
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v9.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null)))));
})()], null)], null);
});

//# sourceMappingURL=debug.js.map
