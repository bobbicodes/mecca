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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__24490){
var vec__24491 = p__24490;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24491,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24491,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__24494 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__24494);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__24497){
var map__24498 = p__24497;
var map__24498__$1 = ((((!((map__24498 == null)))?(((((map__24498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24498):map__24498);
var request = map__24498__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24498__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24498__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__24498,map__24498__$1,request,on_success,on_failure){
return (function (p1__24495_SHARP_){
var G__24500 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__24495_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24500) : re_frame.core.dispatch.call(null,G__24500));
});})(api,map__24498,map__24498__$1,request,on_success,on_failure))
,((function (api,map__24498,map__24498__$1,request,on_success,on_failure){
return (function (p1__24496_SHARP_){
var G__24501 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__24496_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24501) : re_frame.core.dispatch.call(null,G__24501));
});})(api,map__24498,map__24498__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__24502 = cljs.core.seq(seq_request_maps);
var chunk__24503 = null;
var count__24504 = (0);
var i__24505 = (0);
while(true){
if((i__24505 < count__24504)){
var request__$1 = chunk__24503.cljs$core$IIndexed$_nth$arity$2(null,i__24505);
var G__24506_24508 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__24506_24508) : ajax.core.ajax_request.call(null,G__24506_24508));


var G__24509 = seq__24502;
var G__24510 = chunk__24503;
var G__24511 = count__24504;
var G__24512 = (i__24505 + (1));
seq__24502 = G__24509;
chunk__24503 = G__24510;
count__24504 = G__24511;
i__24505 = G__24512;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__24502);
if(temp__5457__auto__){
var seq__24502__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24502__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__24502__$1);
var G__24513 = cljs.core.chunk_rest(seq__24502__$1);
var G__24514 = c__4351__auto__;
var G__24515 = cljs.core.count(c__4351__auto__);
var G__24516 = (0);
seq__24502 = G__24513;
chunk__24503 = G__24514;
count__24504 = G__24515;
i__24505 = G__24516;
continue;
} else {
var request__$1 = cljs.core.first(seq__24502__$1);
var G__24507_24517 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__24507_24517) : ajax.core.ajax_request.call(null,G__24507_24517));


var G__24518 = cljs.core.next(seq__24502__$1);
var G__24519 = null;
var G__24520 = (0);
var G__24521 = (0);
seq__24502 = G__24518;
chunk__24503 = G__24519;
count__24504 = G__24520;
i__24505 = G__24521;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__24522_24524 = cljs.core.cst$kw$http_DASH_xhrio;
var G__24523_24525 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__24522_24524,G__24523_24525) : re_frame.core.reg_fx.call(null,G__24522_24524,G__24523_24525));
