// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.util.throw_error = (function ajax$util$throw_error(args){

throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('')));
});
ajax.util.get_content_type = (function ajax$util$get_content_type(response){
var or__3949__auto__ = ajax.protocols._get_response_header(response,"Content-Type");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
});
ajax.util.to_utf8_writer = (function ajax$util$to_utf8_writer(to_str){

return to_str;
});
/**
 * A set of successful response types derived from `goog.net.HttpStatus.isSuccess`.
 */
ajax.util.successful_response_codes_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [(206),null,(204),null,(304),null,(1223),null,(201),null,(202),null,(200),null], null), null);
ajax.util.success_QMARK_ = (function ajax$util$success_QMARK_(status){

return cljs.core.contains_QMARK_(ajax.util.successful_response_codes_set,status);
});
