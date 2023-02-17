goog.provide('mecca.core');
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));
mecca.core.start = (function mecca$core$start(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.mecca], null),document.getElementById("app"));
});
mecca.core.init = (function mecca$core$init(){
return mecca.core.start();
});
goog.exportSymbol('mecca.core.init', mecca.core.init);

//# sourceMappingURL=mecca.core.js.map
