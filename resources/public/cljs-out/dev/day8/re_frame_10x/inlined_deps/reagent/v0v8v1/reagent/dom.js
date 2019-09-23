// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.interop');
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.imported !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.imported = null;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots,cljs.core.dissoc,container);

return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_9923 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = true;

try{return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_9923){
return (function (){
var _STAR_always_update_STAR_9924 = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9924;
}});})(_STAR_always_update_STAR_9923))
);
}finally {day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9923;
}});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$render(var_args){
var G__9926 = arguments.length;
switch (G__9926) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.call(null,comp,container,null);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render_comp.call(null,f,container,callback);
});

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.render.cljs$lang$maxFixedArity = 3;

day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$dom_node(this$){
return day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.impl.template.find_dom_node = day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v1$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.ratom.flush_BANG_.call(null);

var seq__9928_9932 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.roots)));
var chunk__9929_9933 = null;
var count__9930_9934 = (0);
var i__9931_9935 = (0);
while(true){
if((i__9931_9935 < count__9930_9934)){
var v_9936 = cljs.core._nth.call(null,chunk__9929_9933,i__9931_9935);
cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.re_render_component,v_9936);


var G__9937 = seq__9928_9932;
var G__9938 = chunk__9929_9933;
var G__9939 = count__9930_9934;
var G__9940 = (i__9931_9935 + (1));
seq__9928_9932 = G__9937;
chunk__9929_9933 = G__9938;
count__9930_9934 = G__9939;
i__9931_9935 = G__9940;
continue;
} else {
var temp__5457__auto___9941 = cljs.core.seq.call(null,seq__9928_9932);
if(temp__5457__auto___9941){
var seq__9928_9942__$1 = temp__5457__auto___9941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9928_9942__$1)){
var c__4351__auto___9943 = cljs.core.chunk_first.call(null,seq__9928_9942__$1);
var G__9944 = cljs.core.chunk_rest.call(null,seq__9928_9942__$1);
var G__9945 = c__4351__auto___9943;
var G__9946 = cljs.core.count.call(null,c__4351__auto___9943);
var G__9947 = (0);
seq__9928_9932 = G__9944;
chunk__9929_9933 = G__9945;
count__9930_9934 = G__9946;
i__9931_9935 = G__9947;
continue;
} else {
var v_9948 = cljs.core.first.call(null,seq__9928_9942__$1);
cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v1.reagent.dom.re_render_component,v_9948);


var G__9949 = cljs.core.next.call(null,seq__9928_9942__$1);
var G__9950 = null;
var G__9951 = (0);
var G__9952 = (0);
seq__9928_9932 = G__9949;
chunk__9929_9933 = G__9950;
count__9930_9934 = G__9951;
i__9931_9935 = G__9952;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
