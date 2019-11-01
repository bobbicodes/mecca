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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__20562){
var vec__20563 = p__20562;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20563,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20563,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__20566 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__20566);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__20569){
var map__20570 = p__20569;
var map__20570__$1 = ((((!((map__20570 == null)))?(((((map__20570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20570):map__20570);
var request = map__20570__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20570__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20570__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__20570,map__20570__$1,request,on_success,on_failure){
return (function (p1__20567_SHARP_){
var G__20572 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__20567_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20572) : re_frame.core.dispatch.call(null,G__20572));
});})(api,map__20570,map__20570__$1,request,on_success,on_failure))
,((function (api,map__20570,map__20570__$1,request,on_success,on_failure){
return (function (p1__20568_SHARP_){
var G__20573 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__20568_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20573) : re_frame.core.dispatch.call(null,G__20573));
});})(api,map__20570,map__20570__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__20574 = cljs.core.seq(seq_request_maps);
var chunk__20575 = null;
var count__20576 = (0);
var i__20577 = (0);
while(true){
if((i__20577 < count__20576)){
var request__$1 = chunk__20575.cljs$core$IIndexed$_nth$arity$2(null,i__20577);
var G__20578_20580 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__20578_20580) : ajax.core.ajax_request.call(null,G__20578_20580));


var G__20581 = seq__20574;
var G__20582 = chunk__20575;
var G__20583 = count__20576;
var G__20584 = (i__20577 + (1));
seq__20574 = G__20581;
chunk__20575 = G__20582;
count__20576 = G__20583;
i__20577 = G__20584;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20574);
if(temp__5457__auto__){
var seq__20574__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20574__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20574__$1);
var G__20585 = cljs.core.chunk_rest(seq__20574__$1);
var G__20586 = c__4351__auto__;
var G__20587 = cljs.core.count(c__4351__auto__);
var G__20588 = (0);
seq__20574 = G__20585;
chunk__20575 = G__20586;
count__20576 = G__20587;
i__20577 = G__20588;
continue;
} else {
var request__$1 = cljs.core.first(seq__20574__$1);
var G__20579_20589 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__20579_20589) : ajax.core.ajax_request.call(null,G__20579_20589));


var G__20590 = cljs.core.next(seq__20574__$1);
var G__20591 = null;
var G__20592 = (0);
var G__20593 = (0);
seq__20574 = G__20590;
chunk__20575 = G__20591;
count__20576 = G__20592;
i__20577 = G__20593;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__20594_20596 = cljs.core.cst$kw$http_DASH_xhrio;
var G__20595_20597 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__20594_20596,G__20595_20597) : re_frame.core.reg_fx.call(null,G__20594_20596,G__20595_20597));
