// Compiled by ClojureScript 1.10.339 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__8802,handler){
var map__8803 = p__8802;
var map__8803__$1 = ((((!((map__8803 == null)))?(((((map__8803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8803):map__8803);
var uri = cljs.core.get.call(null,map__8803__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__8803__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__8803__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__8803__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__8803__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__8803__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__8803__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__8803,map__8803__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__8801_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__8801_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__8803,map__8803__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___8815 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___8815)){
var response_type_8816 = temp__5457__auto___8815;
this$__$1.responseType = cljs.core.name.call(null,response_type_8816);
} else {
}

var seq__8805_8817 = cljs.core.seq.call(null,headers);
var chunk__8806_8818 = null;
var count__8807_8819 = (0);
var i__8808_8820 = (0);
while(true){
if((i__8808_8820 < count__8807_8819)){
var vec__8809_8821 = cljs.core._nth.call(null,chunk__8806_8818,i__8808_8820);
var k_8822 = cljs.core.nth.call(null,vec__8809_8821,(0),null);
var v_8823 = cljs.core.nth.call(null,vec__8809_8821,(1),null);
this$__$1.setRequestHeader(k_8822,v_8823);


var G__8824 = seq__8805_8817;
var G__8825 = chunk__8806_8818;
var G__8826 = count__8807_8819;
var G__8827 = (i__8808_8820 + (1));
seq__8805_8817 = G__8824;
chunk__8806_8818 = G__8825;
count__8807_8819 = G__8826;
i__8808_8820 = G__8827;
continue;
} else {
var temp__5457__auto___8828 = cljs.core.seq.call(null,seq__8805_8817);
if(temp__5457__auto___8828){
var seq__8805_8829__$1 = temp__5457__auto___8828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8805_8829__$1)){
var c__4351__auto___8830 = cljs.core.chunk_first.call(null,seq__8805_8829__$1);
var G__8831 = cljs.core.chunk_rest.call(null,seq__8805_8829__$1);
var G__8832 = c__4351__auto___8830;
var G__8833 = cljs.core.count.call(null,c__4351__auto___8830);
var G__8834 = (0);
seq__8805_8817 = G__8831;
chunk__8806_8818 = G__8832;
count__8807_8819 = G__8833;
i__8808_8820 = G__8834;
continue;
} else {
var vec__8812_8835 = cljs.core.first.call(null,seq__8805_8829__$1);
var k_8836 = cljs.core.nth.call(null,vec__8812_8835,(0),null);
var v_8837 = cljs.core.nth.call(null,vec__8812_8835,(1),null);
this$__$1.setRequestHeader(k_8836,v_8837);


var G__8838 = cljs.core.next.call(null,seq__8805_8829__$1);
var G__8839 = null;
var G__8840 = (0);
var G__8841 = (0);
seq__8805_8817 = G__8838;
chunk__8806_8818 = G__8839;
count__8807_8819 = G__8840;
i__8808_8820 = G__8841;
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

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map
