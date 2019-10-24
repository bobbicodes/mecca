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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__21500){
var vec__21501 = p__21500;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21501,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21501,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__21504 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__21504);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__21507){
var map__21508 = p__21507;
var map__21508__$1 = ((((!((map__21508 == null)))?(((((map__21508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21508):map__21508);
var request = map__21508__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21508__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21508__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__21508,map__21508__$1,request,on_success,on_failure){
return (function (p1__21505_SHARP_){
var G__21510 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__21505_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21510) : re_frame.core.dispatch.call(null,G__21510));
});})(api,map__21508,map__21508__$1,request,on_success,on_failure))
,((function (api,map__21508,map__21508__$1,request,on_success,on_failure){
return (function (p1__21506_SHARP_){
var G__21511 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__21506_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21511) : re_frame.core.dispatch.call(null,G__21511));
});})(api,map__21508,map__21508__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__21512 = cljs.core.seq(seq_request_maps);
var chunk__21513 = null;
var count__21514 = (0);
var i__21515 = (0);
while(true){
if((i__21515 < count__21514)){
var request__$1 = chunk__21513.cljs$core$IIndexed$_nth$arity$2(null,i__21515);
var G__21516_21518 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__21516_21518) : ajax.core.ajax_request.call(null,G__21516_21518));


var G__21519 = seq__21512;
var G__21520 = chunk__21513;
var G__21521 = count__21514;
var G__21522 = (i__21515 + (1));
seq__21512 = G__21519;
chunk__21513 = G__21520;
count__21514 = G__21521;
i__21515 = G__21522;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21512);
if(temp__5457__auto__){
var seq__21512__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21512__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21512__$1);
var G__21523 = cljs.core.chunk_rest(seq__21512__$1);
var G__21524 = c__4351__auto__;
var G__21525 = cljs.core.count(c__4351__auto__);
var G__21526 = (0);
seq__21512 = G__21523;
chunk__21513 = G__21524;
count__21514 = G__21525;
i__21515 = G__21526;
continue;
} else {
var request__$1 = cljs.core.first(seq__21512__$1);
var G__21517_21527 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__21517_21527) : ajax.core.ajax_request.call(null,G__21517_21527));


var G__21528 = cljs.core.next(seq__21512__$1);
var G__21529 = null;
var G__21530 = (0);
var G__21531 = (0);
seq__21512 = G__21528;
chunk__21513 = G__21529;
count__21514 = G__21530;
i__21515 = G__21531;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__21532_21534 = cljs.core.cst$kw$http_DASH_xhrio;
var G__21533_21535 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21532_21534,G__21533_21535) : re_frame.core.reg_fx.call(null,G__21532_21534,G__21533_21535));
