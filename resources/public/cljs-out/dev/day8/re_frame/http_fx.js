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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__21461){
var vec__21462 = p__21461;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21462,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21462,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__21465 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__21465);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__21468){
var map__21469 = p__21468;
var map__21469__$1 = ((((!((map__21469 == null)))?(((((map__21469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21469):map__21469);
var request = map__21469__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21469__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21469__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__21469,map__21469__$1,request,on_success,on_failure){
return (function (p1__21466_SHARP_){
var G__21471 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__21466_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21471) : re_frame.core.dispatch.call(null,G__21471));
});})(api,map__21469,map__21469__$1,request,on_success,on_failure))
,((function (api,map__21469,map__21469__$1,request,on_success,on_failure){
return (function (p1__21467_SHARP_){
var G__21472 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__21467_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21472) : re_frame.core.dispatch.call(null,G__21472));
});})(api,map__21469,map__21469__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__21473 = cljs.core.seq(seq_request_maps);
var chunk__21474 = null;
var count__21475 = (0);
var i__21476 = (0);
while(true){
if((i__21476 < count__21475)){
var request__$1 = chunk__21474.cljs$core$IIndexed$_nth$arity$2(null,i__21476);
var G__21477_21479 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__21477_21479) : ajax.core.ajax_request.call(null,G__21477_21479));


var G__21480 = seq__21473;
var G__21481 = chunk__21474;
var G__21482 = count__21475;
var G__21483 = (i__21476 + (1));
seq__21473 = G__21480;
chunk__21474 = G__21481;
count__21475 = G__21482;
i__21476 = G__21483;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21473);
if(temp__5457__auto__){
var seq__21473__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21473__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21473__$1);
var G__21484 = cljs.core.chunk_rest(seq__21473__$1);
var G__21485 = c__4351__auto__;
var G__21486 = cljs.core.count(c__4351__auto__);
var G__21487 = (0);
seq__21473 = G__21484;
chunk__21474 = G__21485;
count__21475 = G__21486;
i__21476 = G__21487;
continue;
} else {
var request__$1 = cljs.core.first(seq__21473__$1);
var G__21478_21488 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__21478_21488) : ajax.core.ajax_request.call(null,G__21478_21488));


var G__21489 = cljs.core.next(seq__21473__$1);
var G__21490 = null;
var G__21491 = (0);
var G__21492 = (0);
seq__21473 = G__21489;
chunk__21474 = G__21490;
count__21475 = G__21491;
i__21476 = G__21492;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__21493_21495 = cljs.core.cst$kw$http_DASH_xhrio;
var G__21494_21496 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21493_21495,G__21494_21496) : re_frame.core.reg_fx.call(null,G__21493_21495,G__21494_21496));
