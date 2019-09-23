// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__15205 = arguments.length;
switch (G__15205) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__15207 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__15208 = null;
var count__15209 = (0);
var i__15210 = (0);
while(true){
if((i__15210 < count__15209)){
var k = cljs.core._nth.call(null,chunk__15208,i__15210);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__15211 = seq__15207;
var G__15212 = chunk__15208;
var G__15213 = count__15209;
var G__15214 = (i__15210 + (1));
seq__15207 = G__15211;
chunk__15208 = G__15212;
count__15209 = G__15213;
i__15210 = G__15214;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__15207);
if(temp__5457__auto__){
var seq__15207__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15207__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__15207__$1);
var G__15215 = cljs.core.chunk_rest.call(null,seq__15207__$1);
var G__15216 = c__4351__auto__;
var G__15217 = cljs.core.count.call(null,c__4351__auto__);
var G__15218 = (0);
seq__15207 = G__15215;
chunk__15208 = G__15216;
count__15209 = G__15217;
i__15210 = G__15218;
continue;
} else {
var k = cljs.core.first.call(null,seq__15207__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__15219 = cljs.core.next.call(null,seq__15207__$1);
var G__15220 = null;
var G__15221 = (0);
var G__15222 = (0);
seq__15207 = G__15219;
chunk__15208 = G__15220;
count__15209 = G__15221;
i__15210 = G__15222;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map
