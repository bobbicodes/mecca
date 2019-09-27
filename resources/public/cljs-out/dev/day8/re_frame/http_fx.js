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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__14452){
var vec__14453 = p__14452;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14453,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14453,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__14456 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__14456);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__14459){
var map__14460 = p__14459;
var map__14460__$1 = ((((!((map__14460 == null)))?(((((map__14460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14460):map__14460);
var request = map__14460__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14460__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14460__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__14460,map__14460__$1,request,on_success,on_failure){
return (function (p1__14457_SHARP_){
var G__14462 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__14457_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14462) : re_frame.core.dispatch.call(null,G__14462));
});})(api,map__14460,map__14460__$1,request,on_success,on_failure))
,((function (api,map__14460,map__14460__$1,request,on_success,on_failure){
return (function (p1__14458_SHARP_){
var G__14463 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__14458_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14463) : re_frame.core.dispatch.call(null,G__14463));
});})(api,map__14460,map__14460__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__14464 = cljs.core.seq(seq_request_maps);
var chunk__14465 = null;
var count__14466 = (0);
var i__14467 = (0);
while(true){
if((i__14467 < count__14466)){
var request__$1 = chunk__14465.cljs$core$IIndexed$_nth$arity$2(null,i__14467);
var G__14468_14470 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__14468_14470) : ajax.core.ajax_request.call(null,G__14468_14470));


var G__14471 = seq__14464;
var G__14472 = chunk__14465;
var G__14473 = count__14466;
var G__14474 = (i__14467 + (1));
seq__14464 = G__14471;
chunk__14465 = G__14472;
count__14466 = G__14473;
i__14467 = G__14474;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14464);
if(temp__5457__auto__){
var seq__14464__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14464__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14464__$1);
var G__14475 = cljs.core.chunk_rest(seq__14464__$1);
var G__14476 = c__4351__auto__;
var G__14477 = cljs.core.count(c__4351__auto__);
var G__14478 = (0);
seq__14464 = G__14475;
chunk__14465 = G__14476;
count__14466 = G__14477;
i__14467 = G__14478;
continue;
} else {
var request__$1 = cljs.core.first(seq__14464__$1);
var G__14469_14479 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__14469_14479) : ajax.core.ajax_request.call(null,G__14469_14479));


var G__14480 = cljs.core.next(seq__14464__$1);
var G__14481 = null;
var G__14482 = (0);
var G__14483 = (0);
seq__14464 = G__14480;
chunk__14465 = G__14481;
count__14466 = G__14482;
i__14467 = G__14483;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__14484_14486 = cljs.core.cst$kw$http_DASH_xhrio;
var G__14485_14487 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__14484_14486,G__14485_14487) : re_frame.core.reg_fx.call(null,G__14484_14486,G__14485_14487));
