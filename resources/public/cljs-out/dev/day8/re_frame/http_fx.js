// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__20138){
var vec__20139 = p__20138;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20139,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20139,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__20142 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__20142);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__20145){
var map__20146 = p__20145;
var map__20146__$1 = ((((!((map__20146 == null)))?(((((map__20146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20146):map__20146);
var request = map__20146__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20146__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20146__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__20146,map__20146__$1,request,on_success,on_failure){
return (function (p1__20143_SHARP_){
var G__20148 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__20143_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20148) : re_frame.core.dispatch.call(null,G__20148));
});})(api,map__20146,map__20146__$1,request,on_success,on_failure))
,((function (api,map__20146,map__20146__$1,request,on_success,on_failure){
return (function (p1__20144_SHARP_){
var G__20149 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__20144_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20149) : re_frame.core.dispatch.call(null,G__20149));
});})(api,map__20146,map__20146__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__20150 = cljs.core.seq(seq_request_maps);
var chunk__20151 = null;
var count__20152 = (0);
var i__20153 = (0);
while(true){
if((i__20153 < count__20152)){
var request__$1 = chunk__20151.cljs$core$IIndexed$_nth$arity$2(null,i__20153);
var G__20154_20156 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__20154_20156) : ajax.core.ajax_request.call(null,G__20154_20156));


var G__20157 = seq__20150;
var G__20158 = chunk__20151;
var G__20159 = count__20152;
var G__20160 = (i__20153 + (1));
seq__20150 = G__20157;
chunk__20151 = G__20158;
count__20152 = G__20159;
i__20153 = G__20160;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20150);
if(temp__5457__auto__){
var seq__20150__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20150__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20150__$1);
var G__20161 = cljs.core.chunk_rest(seq__20150__$1);
var G__20162 = c__4351__auto__;
var G__20163 = cljs.core.count(c__4351__auto__);
var G__20164 = (0);
seq__20150 = G__20161;
chunk__20151 = G__20162;
count__20152 = G__20163;
i__20153 = G__20164;
continue;
} else {
var request__$1 = cljs.core.first(seq__20150__$1);
var G__20155_20165 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__20155_20165) : ajax.core.ajax_request.call(null,G__20155_20165));


var G__20166 = cljs.core.next(seq__20150__$1);
var G__20167 = null;
var G__20168 = (0);
var G__20169 = (0);
seq__20150 = G__20166;
chunk__20151 = G__20167;
count__20152 = G__20168;
i__20153 = G__20169;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__20170_20172 = cljs.core.cst$kw$http_DASH_xhrio;
var G__20171_20173 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__20170_20172,G__20171_20173) : re_frame.core.reg_fx.call(null,G__20170_20172,G__20171_20173));
