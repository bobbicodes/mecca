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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__19957){
var vec__19958 = p__19957;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19958,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19958,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__19961 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__19961);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__19964){
var map__19965 = p__19964;
var map__19965__$1 = ((((!((map__19965 == null)))?(((((map__19965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19965):map__19965);
var request = map__19965__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19965__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19965__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__19965,map__19965__$1,request,on_success,on_failure){
return (function (p1__19962_SHARP_){
var G__19967 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__19962_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19967) : re_frame.core.dispatch.call(null,G__19967));
});})(api,map__19965,map__19965__$1,request,on_success,on_failure))
,((function (api,map__19965,map__19965__$1,request,on_success,on_failure){
return (function (p1__19963_SHARP_){
var G__19968 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__19963_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19968) : re_frame.core.dispatch.call(null,G__19968));
});})(api,map__19965,map__19965__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__19969 = cljs.core.seq(seq_request_maps);
var chunk__19970 = null;
var count__19971 = (0);
var i__19972 = (0);
while(true){
if((i__19972 < count__19971)){
var request__$1 = chunk__19970.cljs$core$IIndexed$_nth$arity$2(null,i__19972);
var G__19973_19975 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19973_19975) : ajax.core.ajax_request.call(null,G__19973_19975));


var G__19976 = seq__19969;
var G__19977 = chunk__19970;
var G__19978 = count__19971;
var G__19979 = (i__19972 + (1));
seq__19969 = G__19976;
chunk__19970 = G__19977;
count__19971 = G__19978;
i__19972 = G__19979;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19969);
if(temp__5457__auto__){
var seq__19969__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19969__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19969__$1);
var G__19980 = cljs.core.chunk_rest(seq__19969__$1);
var G__19981 = c__4351__auto__;
var G__19982 = cljs.core.count(c__4351__auto__);
var G__19983 = (0);
seq__19969 = G__19980;
chunk__19970 = G__19981;
count__19971 = G__19982;
i__19972 = G__19983;
continue;
} else {
var request__$1 = cljs.core.first(seq__19969__$1);
var G__19974_19984 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19974_19984) : ajax.core.ajax_request.call(null,G__19974_19984));


var G__19985 = cljs.core.next(seq__19969__$1);
var G__19986 = null;
var G__19987 = (0);
var G__19988 = (0);
seq__19969 = G__19985;
chunk__19970 = G__19986;
count__19971 = G__19987;
i__19972 = G__19988;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__19989_19991 = cljs.core.cst$kw$http_DASH_xhrio;
var G__19990_19992 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19989_19991,G__19990_19992) : re_frame.core.reg_fx.call(null,G__19989_19991,G__19990_19992));
