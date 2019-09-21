// Compiled by ClojureScript 1.10.339 {}
goog.provide('ajax.formats');
goog.require('cljs.core');
goog.require('ajax.interceptors');
goog.require('ajax.util');
goog.require('ajax.protocols');
/**
 * This will literally return whatever the underlying implementation
 * considers has been sent. Obviously, this is highly implementation
 * dependent, gives different results depending on your platform but
 * is nonetheless really rather useful.
 */
ajax.formats.raw_response_format = (function ajax$formats$raw_response_format(var_args){
var G__8956 = arguments.length;
switch (G__8956) {
case 0:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.formats.raw_response_format.call(null);
});

ajax.formats.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.formats.text_request_format = (function ajax$formats$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.util.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain; charset=utf-8"], null);
});
ajax.formats.text_response_format = ajax.formats.raw_response_format;
ajax.formats.get_format = (function ajax$formats$get_format(var_args){
var G__8959 = arguments.length;
switch (G__8959) {
case 2:
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){

if((((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry)))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.formats.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.formats.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){

if((((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry)))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.formats.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.formats.get_format.cljs$lang$maxFixedArity = 2;

ajax.formats.get_accept_entries = (function ajax$formats$get_accept_entries(var_args){
var G__8962 = arguments.length;
switch (G__8962) {
case 2:
return ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.formats.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.formats.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.formats.get_accept_entries.cljs$lang$maxFixedArity = 2;

ajax.formats.content_type_matches = (function ajax$formats$content_type_matches(var_args){
var G__8965 = arguments.length;
switch (G__8965) {
case 2:
return ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return ((cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0))));
});

ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return ((cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0))));
});
});

ajax.formats.content_type_matches.cljs$lang$maxFixedArity = 2;

ajax.formats.detect_content_type = (function ajax$formats$detect_content_type(var_args){
var G__8968 = arguments.length;
switch (G__8968) {
case 3:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.formats.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.formats.content_type_matches.call(null,content_type),accept);
});

ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.formats.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.formats.content_type_matches.call(null,content_type),accept);
});
});

ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.formats.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.formats.content_type_matches.call(null,content_type),accept);
});
});

ajax.formats.detect_content_type.cljs$lang$maxFixedArity = 3;

ajax.formats.get_default_format = (function ajax$formats$get_default_format(response,p__8970){
var map__8971 = p__8970;
var map__8971__$1 = ((((!((map__8971 == null)))?(((((map__8971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8971):map__8971);
var request = map__8971__$1;
var response_format = cljs.core.get.call(null,map__8971__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.formats.detect_content_type.call(null,ajax.util.get_content_type.call(null,response),request);
return ajax.formats.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.formats.detect_response_format_read = (function ajax$formats$detect_response_format_read(var_args){
var G__8974 = arguments.length;
switch (G__8974) {
case 2:
return ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.formats.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.formats.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.formats.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.formats.accept_header = (function ajax$formats$accept_header(p__8976){
var map__8977 = p__8976;
var map__8977__$1 = ((((!((map__8977 == null)))?(((((map__8977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8977):map__8977);
var request = map__8977__$1;
var response_format = cljs.core.get.call(null,map__8977__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.formats.get_accept_entries.call(null,request),response_format);
} else {
return ajax.formats.get_accept_entries.call(null,request,response_format);
}
});
ajax.formats.detect_response_format = (function ajax$formats$detect_response_format(opts){

var accept = ajax.formats.accept_header.call(null,opts);
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.formats.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),["(from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(accept),")"].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

//# sourceMappingURL=formats.js.map
