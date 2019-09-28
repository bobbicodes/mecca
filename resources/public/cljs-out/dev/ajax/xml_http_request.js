// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__13691 = e.target.readyState;
var fexpr__13690 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__13690.cljs$core$IFn$_invoke$arity$1 ? fexpr__13690.cljs$core$IFn$_invoke$arity$1(G__13691) : fexpr__13690.call(null,G__13691));
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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13693,handler){
var map__13694 = p__13693;
var map__13694__$1 = ((((!((map__13694 == null)))?(((((map__13694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13694):map__13694);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13694__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13694__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13694__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13694__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13694__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13694__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13694__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__13694,map__13694__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__13692_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__13692_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__13694,map__13694__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___13706 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___13706)){
var response_type_13707 = temp__5457__auto___13706;
this$__$1.responseType = cljs.core.name(response_type_13707);
} else {
}

var seq__13696_13708 = cljs.core.seq(headers);
var chunk__13697_13709 = null;
var count__13698_13710 = (0);
var i__13699_13711 = (0);
while(true){
if((i__13699_13711 < count__13698_13710)){
var vec__13700_13712 = chunk__13697_13709.cljs$core$IIndexed$_nth$arity$2(null,i__13699_13711);
var k_13713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13700_13712,(0),null);
var v_13714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13700_13712,(1),null);
this$__$1.setRequestHeader(k_13713,v_13714);


var G__13715 = seq__13696_13708;
var G__13716 = chunk__13697_13709;
var G__13717 = count__13698_13710;
var G__13718 = (i__13699_13711 + (1));
seq__13696_13708 = G__13715;
chunk__13697_13709 = G__13716;
count__13698_13710 = G__13717;
i__13699_13711 = G__13718;
continue;
} else {
var temp__5457__auto___13719 = cljs.core.seq(seq__13696_13708);
if(temp__5457__auto___13719){
var seq__13696_13720__$1 = temp__5457__auto___13719;
if(cljs.core.chunked_seq_QMARK_(seq__13696_13720__$1)){
var c__4351__auto___13721 = cljs.core.chunk_first(seq__13696_13720__$1);
var G__13722 = cljs.core.chunk_rest(seq__13696_13720__$1);
var G__13723 = c__4351__auto___13721;
var G__13724 = cljs.core.count(c__4351__auto___13721);
var G__13725 = (0);
seq__13696_13708 = G__13722;
chunk__13697_13709 = G__13723;
count__13698_13710 = G__13724;
i__13699_13711 = G__13725;
continue;
} else {
var vec__13703_13726 = cljs.core.first(seq__13696_13720__$1);
var k_13727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703_13726,(0),null);
var v_13728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703_13726,(1),null);
this$__$1.setRequestHeader(k_13727,v_13728);


var G__13729 = cljs.core.next(seq__13696_13720__$1);
var G__13730 = null;
var G__13731 = (0);
var G__13732 = (0);
seq__13696_13708 = G__13729;
chunk__13697_13709 = G__13730;
count__13698_13710 = G__13731;
i__13699_13711 = G__13732;
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
