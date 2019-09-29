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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__19937){
var vec__19938 = p__19937;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19938,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19938,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__19941 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__19941);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__19944){
var map__19945 = p__19944;
var map__19945__$1 = ((((!((map__19945 == null)))?(((((map__19945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19945):map__19945);
var request = map__19945__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19945__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19945__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__19945,map__19945__$1,request,on_success,on_failure){
return (function (p1__19942_SHARP_){
var G__19947 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__19942_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19947) : re_frame.core.dispatch.call(null,G__19947));
});})(api,map__19945,map__19945__$1,request,on_success,on_failure))
,((function (api,map__19945,map__19945__$1,request,on_success,on_failure){
return (function (p1__19943_SHARP_){
var G__19948 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__19943_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19948) : re_frame.core.dispatch.call(null,G__19948));
});})(api,map__19945,map__19945__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__19949 = cljs.core.seq(seq_request_maps);
var chunk__19950 = null;
var count__19951 = (0);
var i__19952 = (0);
while(true){
if((i__19952 < count__19951)){
var request__$1 = chunk__19950.cljs$core$IIndexed$_nth$arity$2(null,i__19952);
var G__19953_19955 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19953_19955) : ajax.core.ajax_request.call(null,G__19953_19955));


var G__19956 = seq__19949;
var G__19957 = chunk__19950;
var G__19958 = count__19951;
var G__19959 = (i__19952 + (1));
seq__19949 = G__19956;
chunk__19950 = G__19957;
count__19951 = G__19958;
i__19952 = G__19959;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19949);
if(temp__5457__auto__){
var seq__19949__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19949__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19949__$1);
var G__19960 = cljs.core.chunk_rest(seq__19949__$1);
var G__19961 = c__4351__auto__;
var G__19962 = cljs.core.count(c__4351__auto__);
var G__19963 = (0);
seq__19949 = G__19960;
chunk__19950 = G__19961;
count__19951 = G__19962;
i__19952 = G__19963;
continue;
} else {
var request__$1 = cljs.core.first(seq__19949__$1);
var G__19954_19964 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__19954_19964) : ajax.core.ajax_request.call(null,G__19954_19964));


var G__19965 = cljs.core.next(seq__19949__$1);
var G__19966 = null;
var G__19967 = (0);
var G__19968 = (0);
seq__19949 = G__19965;
chunk__19950 = G__19966;
count__19951 = G__19967;
i__19952 = G__19968;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__19969_19971 = cljs.core.cst$kw$http_DASH_xhrio;
var G__19970_19972 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__19969_19971,G__19970_19972) : re_frame.core.reg_fx.call(null,G__19969_19971,G__19970_19972));
