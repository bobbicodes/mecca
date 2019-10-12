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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__24230){
var vec__24231 = p__24230;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24231,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24231,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__24234 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__24234);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__24237){
var map__24238 = p__24237;
var map__24238__$1 = ((((!((map__24238 == null)))?(((((map__24238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24238):map__24238);
var request = map__24238__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24238__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24238__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__24238,map__24238__$1,request,on_success,on_failure){
return (function (p1__24235_SHARP_){
var G__24240 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__24235_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24240) : re_frame.core.dispatch.call(null,G__24240));
});})(api,map__24238,map__24238__$1,request,on_success,on_failure))
,((function (api,map__24238,map__24238__$1,request,on_success,on_failure){
return (function (p1__24236_SHARP_){
var G__24241 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__24236_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24241) : re_frame.core.dispatch.call(null,G__24241));
});})(api,map__24238,map__24238__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__24242 = cljs.core.seq(seq_request_maps);
var chunk__24243 = null;
var count__24244 = (0);
var i__24245 = (0);
while(true){
if((i__24245 < count__24244)){
var request__$1 = chunk__24243.cljs$core$IIndexed$_nth$arity$2(null,i__24245);
var G__24246_24248 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__24246_24248) : ajax.core.ajax_request.call(null,G__24246_24248));


var G__24249 = seq__24242;
var G__24250 = chunk__24243;
var G__24251 = count__24244;
var G__24252 = (i__24245 + (1));
seq__24242 = G__24249;
chunk__24243 = G__24250;
count__24244 = G__24251;
i__24245 = G__24252;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__24242);
if(temp__5457__auto__){
var seq__24242__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24242__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__24242__$1);
var G__24253 = cljs.core.chunk_rest(seq__24242__$1);
var G__24254 = c__4351__auto__;
var G__24255 = cljs.core.count(c__4351__auto__);
var G__24256 = (0);
seq__24242 = G__24253;
chunk__24243 = G__24254;
count__24244 = G__24255;
i__24245 = G__24256;
continue;
} else {
var request__$1 = cljs.core.first(seq__24242__$1);
var G__24247_24257 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__24247_24257) : ajax.core.ajax_request.call(null,G__24247_24257));


var G__24258 = cljs.core.next(seq__24242__$1);
var G__24259 = null;
var G__24260 = (0);
var G__24261 = (0);
seq__24242 = G__24258;
chunk__24243 = G__24259;
count__24244 = G__24260;
i__24245 = G__24261;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__24262_24264 = cljs.core.cst$kw$http_DASH_xhrio;
var G__24263_24265 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__24262_24264,G__24263_24265) : re_frame.core.reg_fx.call(null,G__24262_24264,G__24263_24265));
