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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__20567){
var vec__20568 = p__20567;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20568,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20568,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__20571 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__20571);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__20574){
var map__20575 = p__20574;
var map__20575__$1 = ((((!((map__20575 == null)))?(((((map__20575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20575):map__20575);
var request = map__20575__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20575__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20575__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__20575,map__20575__$1,request,on_success,on_failure){
return (function (p1__20572_SHARP_){
var G__20577 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__20572_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20577) : re_frame.core.dispatch.call(null,G__20577));
});})(api,map__20575,map__20575__$1,request,on_success,on_failure))
,((function (api,map__20575,map__20575__$1,request,on_success,on_failure){
return (function (p1__20573_SHARP_){
var G__20578 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__20573_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20578) : re_frame.core.dispatch.call(null,G__20578));
});})(api,map__20575,map__20575__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__20579 = cljs.core.seq(seq_request_maps);
var chunk__20580 = null;
var count__20581 = (0);
var i__20582 = (0);
while(true){
if((i__20582 < count__20581)){
var request__$1 = chunk__20580.cljs$core$IIndexed$_nth$arity$2(null,i__20582);
var G__20583_20585 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__20583_20585) : ajax.core.ajax_request.call(null,G__20583_20585));


var G__20586 = seq__20579;
var G__20587 = chunk__20580;
var G__20588 = count__20581;
var G__20589 = (i__20582 + (1));
seq__20579 = G__20586;
chunk__20580 = G__20587;
count__20581 = G__20588;
i__20582 = G__20589;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20579);
if(temp__5457__auto__){
var seq__20579__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20579__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20579__$1);
var G__20590 = cljs.core.chunk_rest(seq__20579__$1);
var G__20591 = c__4351__auto__;
var G__20592 = cljs.core.count(c__4351__auto__);
var G__20593 = (0);
seq__20579 = G__20590;
chunk__20580 = G__20591;
count__20581 = G__20592;
i__20582 = G__20593;
continue;
} else {
var request__$1 = cljs.core.first(seq__20579__$1);
var G__20584_20594 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__20584_20594) : ajax.core.ajax_request.call(null,G__20584_20594));


var G__20595 = cljs.core.next(seq__20579__$1);
var G__20596 = null;
var G__20597 = (0);
var G__20598 = (0);
seq__20579 = G__20595;
chunk__20580 = G__20596;
count__20581 = G__20597;
i__20582 = G__20598;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__20599_20601 = cljs.core.cst$kw$http_DASH_xhrio;
var G__20600_20602 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__20599_20601,G__20600_20602) : re_frame.core.reg_fx.call(null,G__20599_20601,G__20600_20602));
