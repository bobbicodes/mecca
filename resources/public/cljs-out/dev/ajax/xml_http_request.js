// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__16600 = e.target.readyState;
var fexpr__16599 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__16599.cljs$core$IFn$_invoke$arity$1 ? fexpr__16599.cljs$core$IFn$_invoke$arity$1(G__16600) : fexpr__16599.call(null,G__16600));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__16602,handler){
var map__16603 = p__16602;
var map__16603__$1 = ((((!((map__16603 == null)))?(((((map__16603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16603):map__16603);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16603__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16603__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16603__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16603__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16603__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16603__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16603__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__16603,map__16603__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__16601_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__16601_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__16603,map__16603__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___16615 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___16615)){
var response_type_16616 = temp__5457__auto___16615;
this$__$1.responseType = cljs.core.name(response_type_16616);
} else {
}

var seq__16605_16617 = cljs.core.seq(headers);
var chunk__16606_16618 = null;
var count__16607_16619 = (0);
var i__16608_16620 = (0);
while(true){
if((i__16608_16620 < count__16607_16619)){
var vec__16609_16621 = chunk__16606_16618.cljs$core$IIndexed$_nth$arity$2(null,i__16608_16620);
var k_16622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16609_16621,(0),null);
var v_16623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16609_16621,(1),null);
this$__$1.setRequestHeader(k_16622,v_16623);


var G__16624 = seq__16605_16617;
var G__16625 = chunk__16606_16618;
var G__16626 = count__16607_16619;
var G__16627 = (i__16608_16620 + (1));
seq__16605_16617 = G__16624;
chunk__16606_16618 = G__16625;
count__16607_16619 = G__16626;
i__16608_16620 = G__16627;
continue;
} else {
var temp__5457__auto___16628 = cljs.core.seq(seq__16605_16617);
if(temp__5457__auto___16628){
var seq__16605_16629__$1 = temp__5457__auto___16628;
if(cljs.core.chunked_seq_QMARK_(seq__16605_16629__$1)){
var c__4351__auto___16630 = cljs.core.chunk_first(seq__16605_16629__$1);
var G__16631 = cljs.core.chunk_rest(seq__16605_16629__$1);
var G__16632 = c__4351__auto___16630;
var G__16633 = cljs.core.count(c__4351__auto___16630);
var G__16634 = (0);
seq__16605_16617 = G__16631;
chunk__16606_16618 = G__16632;
count__16607_16619 = G__16633;
i__16608_16620 = G__16634;
continue;
} else {
var vec__16612_16635 = cljs.core.first(seq__16605_16629__$1);
var k_16636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612_16635,(0),null);
var v_16637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16612_16635,(1),null);
this$__$1.setRequestHeader(k_16636,v_16637);


var G__16638 = cljs.core.next(seq__16605_16629__$1);
var G__16639 = null;
var G__16640 = (0);
var G__16641 = (0);
seq__16605_16617 = G__16638;
chunk__16606_16618 = G__16639;
count__16607_16619 = G__16640;
i__16608_16620 = G__16641;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
