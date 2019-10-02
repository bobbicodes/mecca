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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__20099){
var vec__20100 = p__20099;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20100,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20100,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__20103 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__20103);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__20106){
var map__20107 = p__20106;
var map__20107__$1 = ((((!((map__20107 == null)))?(((((map__20107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20107):map__20107);
var request = map__20107__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20107__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20107__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__20107,map__20107__$1,request,on_success,on_failure){
return (function (p1__20104_SHARP_){
var G__20109 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__20104_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20109) : re_frame.core.dispatch.call(null,G__20109));
});})(api,map__20107,map__20107__$1,request,on_success,on_failure))
,((function (api,map__20107,map__20107__$1,request,on_success,on_failure){
return (function (p1__20105_SHARP_){
var G__20110 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__20105_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20110) : re_frame.core.dispatch.call(null,G__20110));
});})(api,map__20107,map__20107__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__20111 = cljs.core.seq(seq_request_maps);
var chunk__20112 = null;
var count__20113 = (0);
var i__20114 = (0);
while(true){
if((i__20114 < count__20113)){
var request__$1 = chunk__20112.cljs$core$IIndexed$_nth$arity$2(null,i__20114);
var G__20115_20117 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__20115_20117) : ajax.core.ajax_request.call(null,G__20115_20117));


var G__20118 = seq__20111;
var G__20119 = chunk__20112;
var G__20120 = count__20113;
var G__20121 = (i__20114 + (1));
seq__20111 = G__20118;
chunk__20112 = G__20119;
count__20113 = G__20120;
i__20114 = G__20121;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20111);
if(temp__5457__auto__){
var seq__20111__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20111__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20111__$1);
var G__20122 = cljs.core.chunk_rest(seq__20111__$1);
var G__20123 = c__4351__auto__;
var G__20124 = cljs.core.count(c__4351__auto__);
var G__20125 = (0);
seq__20111 = G__20122;
chunk__20112 = G__20123;
count__20113 = G__20124;
i__20114 = G__20125;
continue;
} else {
var request__$1 = cljs.core.first(seq__20111__$1);
var G__20116_20126 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__20116_20126) : ajax.core.ajax_request.call(null,G__20116_20126));


var G__20127 = cljs.core.next(seq__20111__$1);
var G__20128 = null;
var G__20129 = (0);
var G__20130 = (0);
seq__20111 = G__20127;
chunk__20112 = G__20128;
count__20113 = G__20129;
i__20114 = G__20130;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__20131_20133 = cljs.core.cst$kw$http_DASH_xhrio;
var G__20132_20134 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__20131_20133,G__20132_20134) : re_frame.core.reg_fx.call(null,G__20131_20133,G__20132_20134));
