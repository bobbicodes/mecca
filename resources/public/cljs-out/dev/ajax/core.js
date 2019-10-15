// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort(this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.success_QMARK_ = ajax.util.success_QMARK_;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19518 = arguments.length;
var i__4532__auto___19519 = (0);
while(true){
if((i__4532__auto___19519 < len__4531__auto___19518)){
args__4534__auto__.push((arguments[i__4532__auto___19519]));

var G__19520 = (i__4532__auto___19519 + (1));
i__4532__auto___19519 = G__19520;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18751__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"GET",(((f__18751__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18751__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.GET.cljs$lang$applyTo = (function (seq19516){
var G__19517 = cljs.core.first(seq19516);
var seq19516__$1 = cljs.core.next(seq19516);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19517,seq19516__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19523 = arguments.length;
var i__4532__auto___19524 = (0);
while(true){
if((i__4532__auto___19524 < len__4531__auto___19523)){
args__4534__auto__.push((arguments[i__4532__auto___19524]));

var G__19525 = (i__4532__auto___19524 + (1));
i__4532__auto___19524 = G__19525;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18751__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"HEAD",(((f__18751__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18751__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.HEAD.cljs$lang$applyTo = (function (seq19521){
var G__19522 = cljs.core.first(seq19521);
var seq19521__$1 = cljs.core.next(seq19521);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19522,seq19521__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19528 = arguments.length;
var i__4532__auto___19529 = (0);
while(true){
if((i__4532__auto___19529 < len__4531__auto___19528)){
args__4534__auto__.push((arguments[i__4532__auto___19529]));

var G__19530 = (i__4532__auto___19529 + (1));
i__4532__auto___19529 = G__19530;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18751__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"POST",(((f__18751__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18751__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.POST.cljs$lang$applyTo = (function (seq19526){
var G__19527 = cljs.core.first(seq19526);
var seq19526__$1 = cljs.core.next(seq19526);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19527,seq19526__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19533 = arguments.length;
var i__4532__auto___19534 = (0);
while(true){
if((i__4532__auto___19534 < len__4531__auto___19533)){
args__4534__auto__.push((arguments[i__4532__auto___19534]));

var G__19535 = (i__4532__auto___19534 + (1));
i__4532__auto___19534 = G__19535;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18751__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PUT",(((f__18751__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18751__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PUT.cljs$lang$applyTo = (function (seq19531){
var G__19532 = cljs.core.first(seq19531);
var seq19531__$1 = cljs.core.next(seq19531);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19532,seq19531__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19538 = arguments.length;
var i__4532__auto___19539 = (0);
while(true){
if((i__4532__auto___19539 < len__4531__auto___19538)){
args__4534__auto__.push((arguments[i__4532__auto___19539]));

var G__19540 = (i__4532__auto___19539 + (1));
i__4532__auto___19539 = G__19540;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18751__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"DELETE",(((f__18751__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18751__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.DELETE.cljs$lang$applyTo = (function (seq19536){
var G__19537 = cljs.core.first(seq19536);
var seq19536__$1 = cljs.core.next(seq19536);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19537,seq19536__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19543 = arguments.length;
var i__4532__auto___19544 = (0);
while(true){
if((i__4532__auto___19544 < len__4531__auto___19543)){
args__4534__auto__.push((arguments[i__4532__auto___19544]));

var G__19545 = (i__4532__auto___19544 + (1));
i__4532__auto___19544 = G__19545;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18751__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"OPTIONS",(((f__18751__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18751__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq19541){
var G__19542 = cljs.core.first(seq19541);
var seq19541__$1 = cljs.core.next(seq19541);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19542,seq19541__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19548 = arguments.length;
var i__4532__auto___19549 = (0);
while(true){
if((i__4532__auto___19549 < len__4531__auto___19548)){
args__4534__auto__.push((arguments[i__4532__auto___19549]));

var G__19550 = (i__4532__auto___19549 + (1));
i__4532__auto___19549 = G__19550;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18751__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"TRACE",(((f__18751__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18751__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.TRACE.cljs$lang$applyTo = (function (seq19546){
var G__19547 = cljs.core.first(seq19546);
var seq19546__$1 = cljs.core.next(seq19546);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19547,seq19546__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19553 = arguments.length;
var i__4532__auto___19554 = (0);
while(true){
if((i__4532__auto___19554 < len__4531__auto___19553)){
args__4534__auto__.push((arguments[i__4532__auto___19554]));

var G__19555 = (i__4532__auto___19554 + (1));
i__4532__auto___19554 = G__19555;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18751__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PATCH",(((f__18751__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18751__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PATCH.cljs$lang$applyTo = (function (seq19551){
var G__19552 = cljs.core.first(seq19551);
var seq19551__$1 = cljs.core.next(seq19551);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19552,seq19551__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19558 = arguments.length;
var i__4532__auto___19559 = (0);
while(true){
if((i__4532__auto___19559 < len__4531__auto___19558)){
args__4534__auto__.push((arguments[i__4532__auto___19559]));

var G__19560 = (i__4532__auto___19559 + (1));
i__4532__auto___19559 = G__19560;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__18751__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PURGE",(((f__18751__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__18751__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ajax.core.PURGE.cljs$lang$applyTo = (function (seq19556){
var G__19557 = cljs.core.first(seq19556);
var seq19556__$1 = cljs.core.next(seq19556);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19557,seq19556__$1);
});

