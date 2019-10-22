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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__21386){
var vec__21387 = p__21386;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21387,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21387,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__21390 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__21390);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__21393){
var map__21394 = p__21393;
var map__21394__$1 = ((((!((map__21394 == null)))?(((((map__21394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21394):map__21394);
var request = map__21394__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21394__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21394__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__21394,map__21394__$1,request,on_success,on_failure){
return (function (p1__21391_SHARP_){
var G__21396 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__21391_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21396) : re_frame.core.dispatch.call(null,G__21396));
});})(api,map__21394,map__21394__$1,request,on_success,on_failure))
,((function (api,map__21394,map__21394__$1,request,on_success,on_failure){
return (function (p1__21392_SHARP_){
var G__21397 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__21392_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21397) : re_frame.core.dispatch.call(null,G__21397));
});})(api,map__21394,map__21394__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__21398 = cljs.core.seq(seq_request_maps);
var chunk__21399 = null;
var count__21400 = (0);
var i__21401 = (0);
while(true){
if((i__21401 < count__21400)){
var request__$1 = chunk__21399.cljs$core$IIndexed$_nth$arity$2(null,i__21401);
var G__21402_21404 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__21402_21404) : ajax.core.ajax_request.call(null,G__21402_21404));


var G__21405 = seq__21398;
var G__21406 = chunk__21399;
var G__21407 = count__21400;
var G__21408 = (i__21401 + (1));
seq__21398 = G__21405;
chunk__21399 = G__21406;
count__21400 = G__21407;
i__21401 = G__21408;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21398);
if(temp__5457__auto__){
var seq__21398__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21398__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21398__$1);
var G__21409 = cljs.core.chunk_rest(seq__21398__$1);
var G__21410 = c__4351__auto__;
var G__21411 = cljs.core.count(c__4351__auto__);
var G__21412 = (0);
seq__21398 = G__21409;
chunk__21399 = G__21410;
count__21400 = G__21411;
i__21401 = G__21412;
continue;
} else {
var request__$1 = cljs.core.first(seq__21398__$1);
var G__21403_21413 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__21403_21413) : ajax.core.ajax_request.call(null,G__21403_21413));


var G__21414 = cljs.core.next(seq__21398__$1);
var G__21415 = null;
var G__21416 = (0);
var G__21417 = (0);
seq__21398 = G__21414;
chunk__21399 = G__21415;
count__21400 = G__21416;
i__21401 = G__21417;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__21418_21420 = cljs.core.cst$kw$http_DASH_xhrio;
var G__21419_21421 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21418_21420,G__21419_21421) : re_frame.core.reg_fx.call(null,G__21418_21420,G__21419_21421));
