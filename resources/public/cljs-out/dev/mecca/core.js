// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mecca.events');
goog.require('mecca.subs');
goog.require('mecca.view');
var G__14399_14400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__14399_14400) : re_frame.core.dispatch_sync.call(null,G__14399_14400));
mecca.core.get_app_element = (function mecca$core$get_app_element(){
return goog.dom.getElement("app");
});
mecca.core.mount = (function mecca$core$mount(el){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

var G__14401 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.view.mecca], null);
var G__14402 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__14401,G__14402) : reagent.core.render_component.call(null,G__14401,G__14402));
});
mecca.core.mount_app_element = (function mecca$core$mount_app_element(){
var temp__5457__auto__ = mecca.core.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return mecca.core.mount(el);
} else {
return null;
}
});
mecca.core.mount_app_element();
mecca.core.on_reload = (function mecca$core$on_reload(){
return mecca.core.mount_app_element();
});
mecca.core.init = (function mecca$core$init(){
return mecca.core.mount_app_element();
});
goog.exportSymbol('mecca.core.init', mecca.core.init);
