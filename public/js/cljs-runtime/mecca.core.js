goog.provide('mecca.core');
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),"keydown"], null));
mecca.core.eval_all = (function mecca$core$eval_all(s){
try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"js","js",-886355190,null),goog.global,new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null));
}catch (e73340){var e = e73340;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
}});
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval-result","eval-result",937286342)], null)));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-result","set-result",766028711),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.core.eval_all(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__73344 = cljs.core.deref(mecca.sci_editor._BANG_points);
var G__73344__$1 = (((G__73344 == null))?null:G__73344.state);
var G__73344__$2 = (((G__73344__$1 == null))?null:G__73344__$1.doc);
if((G__73344__$2 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73344__$2);
}
})())))], null));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-keys","event-keys",-835966631),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-result","set-result",766028711),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.core.eval_all(cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__73348 = cljs.core.deref(mecca.sci_editor._BANG_points);
var G__73348__$1 = (((G__73348 == null))?null:G__73348.state);
var G__73348__$2 = (((G__73348__$1 == null))?null:G__73348__$1.doc);
if((G__73348__$2 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73348__$2);
}
})())))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(13),new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),true], null)], null)], null)], null),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(13),new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),true], null)], null),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),(13),new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),true], null)], null)], null)], null));
mecca.core.start = (function mecca$core$start(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.mecca], null),document.getElementById("app"));
});
mecca.core.init = (function mecca$core$init(){
return mecca.core.start();
});
goog.exportSymbol('mecca.core.init', mecca.core.init);

//# sourceMappingURL=mecca.core.js.map
