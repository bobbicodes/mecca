goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__58315 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__58316 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__58316);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__58317 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__58318 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__58318);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__58317);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__58315);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__58320 = arguments.length;
switch (G__58320) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__58321 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58321,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58321,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
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
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__58324_58341 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__58325_58342 = null;
var count__58326_58343 = (0);
var i__58327_58344 = (0);
while(true){
if((i__58327_58344 < count__58326_58343)){
var vec__58334_58345 = chunk__58325_58342.cljs$core$IIndexed$_nth$arity$2(null,i__58327_58344);
var container_58346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58334_58345,(0),null);
var comp_58347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58334_58345,(1),null);
reagent.dom.re_render_component(comp_58347,container_58346);


var G__58348 = seq__58324_58341;
var G__58349 = chunk__58325_58342;
var G__58350 = count__58326_58343;
var G__58351 = (i__58327_58344 + (1));
seq__58324_58341 = G__58348;
chunk__58325_58342 = G__58349;
count__58326_58343 = G__58350;
i__58327_58344 = G__58351;
continue;
} else {
var temp__5753__auto___58352 = cljs.core.seq(seq__58324_58341);
if(temp__5753__auto___58352){
var seq__58324_58353__$1 = temp__5753__auto___58352;
if(cljs.core.chunked_seq_QMARK_(seq__58324_58353__$1)){
var c__4649__auto___58354 = cljs.core.chunk_first(seq__58324_58353__$1);
var G__58355 = cljs.core.chunk_rest(seq__58324_58353__$1);
var G__58356 = c__4649__auto___58354;
var G__58357 = cljs.core.count(c__4649__auto___58354);
var G__58358 = (0);
seq__58324_58341 = G__58355;
chunk__58325_58342 = G__58356;
count__58326_58343 = G__58357;
i__58327_58344 = G__58358;
continue;
} else {
var vec__58337_58359 = cljs.core.first(seq__58324_58353__$1);
var container_58360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58337_58359,(0),null);
var comp_58361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58337_58359,(1),null);
reagent.dom.re_render_component(comp_58361,container_58360);


var G__58362 = cljs.core.next(seq__58324_58353__$1);
var G__58363 = null;
var G__58364 = (0);
var G__58365 = (0);
seq__58324_58341 = G__58362;
chunk__58325_58342 = G__58363;
count__58326_58343 = G__58364;
i__58327_58344 = G__58365;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
