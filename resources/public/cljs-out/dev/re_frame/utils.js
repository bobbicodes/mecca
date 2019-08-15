// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('re_frame.loggers');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to istelf if the path was never present
 */
re_frame.utils.dissoc_in = (function re_frame$utils$dissoc_in(m,p__10210){
var vec__10211 = p__10210;
var seq__10212 = cljs.core.seq.call(null,vec__10211);
var first__10213 = cljs.core.first.call(null,seq__10212);
var seq__10212__$1 = cljs.core.next.call(null,seq__10212);
var k = first__10213;
var ks = seq__10212__$1;
var keys = vec__10211;
if(ks){
var temp__5455__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var nextmap = temp__5455__auto__;
var newmap = re_frame.utils.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: expected a vector, but got:",v);
}
});

//# sourceMappingURL=utils.js.map
