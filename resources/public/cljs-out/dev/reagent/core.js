// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('react');
goog.require('reagent.impl.template');
goog.require('reagent.impl.component');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.dom');
reagent.core.global$module$react = goog.global["React"];
reagent.core.is_client = reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
reagent.core.create_element = (function reagent$core$create_element(var_args){
var G__9457 = arguments.length;
switch (G__9457) {
case 1:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___9459 = arguments.length;
var i__4532__auto___9460 = (0);
while(true){
if((i__4532__auto___9460 < len__4531__auto___9459)){
args_arr__4546__auto__.push((arguments[i__4532__auto___9460]));

var G__9461 = (i__4532__auto___9460 + (1));
i__4532__auto___9460 = G__9461;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.call(null,type,null);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,props))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return reagent.core.global$module$react.createElement.call(null,type,props);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,props))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return reagent.core.global$module$react.createElement.call(null,type,props,child);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if(!(cljs.core.map_QMARK_.call(null,props))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,props))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.call(null,reagent.core.global$module$react.createElement,type,props,child,children);
});

/** @this {Function} */
reagent.core.create_element.cljs$lang$applyTo = (function (seq9453){
var G__9454 = cljs.core.first.call(null,seq9453);
var seq9453__$1 = cljs.core.next.call(null,seq9453);
var G__9455 = cljs.core.first.call(null,seq9453__$1);
var seq9453__$2 = cljs.core.next.call(null,seq9453__$1);
var G__9456 = cljs.core.first.call(null,seq9453__$2);
var seq9453__$3 = cljs.core.next.call(null,seq9453__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9454,G__9455,G__9456,seq9453__$3);
});

reagent.core.create_element.cljs$lang$maxFixedArity = (3);

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(form){
return reagent.impl.template.as_element.call(null,form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Component"," must not be nil"].join('')),"\n","c"].join('')));
}

return reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Component"," must not be nil"].join('')),"\n","c"].join('')));
}

return reagent.impl.component.reactify_component.call(null,c);
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
reagent.core.render = (function reagent$core$render(var_args){
var G__9463 = arguments.length;
switch (G__9463) {
case 2:
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container);
});

reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return reagent.dom.render.call(null,comp,container,callback);
});

reagent.core.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.dom.unmount_component_at_node.call(null,container);
});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
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
reagent.core.force_update_all = (function reagent$core$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

reagent.dom.force_update_all.call(null);

return reagent.impl.batching.flush_after_render.call(null);
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.component.create_class.call(null,spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
reagent.core.state = (function reagent$core$state(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref.call(null,reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a valid new state, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new_state))].join('')),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_.call(null,reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a valid new state, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new_state))].join('')),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.call(null,reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
reagent.core.force_update = (function reagent$core$force_update(var_args){
var G__9466 = arguments.length;
switch (G__9466) {
case 1:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return reagent.core.force_update.call(null,this$,false);
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
reagent.ratom.flush_BANG_.call(null);

reagent.impl.util.force_update.call(null,this$,deep);

return reagent.impl.batching.flush_after_render.call(null);
});

reagent.core.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_argv.call(null,this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return reagent.dom.dom_node.call(null,this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
reagent.core.merge_props = (function reagent$core$merge_props(defaults,props){
return reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
var G__9471 = arguments.length;
switch (G__9471) {
case 1:
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___9473 = arguments.length;
var i__4532__auto___9474 = (0);
while(true){
if((i__4532__auto___9474 < len__4531__auto___9473)){
args_arr__4546__auto__.push((arguments[i__4532__auto___9474]));

var G__9475 = (i__4532__auto___9474 + (1));
i__4532__auto___9474 = G__9475;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((1)),(0),null));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4547__auto__);

}
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.call(null,x);
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
});

/** @this {Function} */
reagent.core.atom.cljs$lang$applyTo = (function (seq9469){
var G__9470 = cljs.core.first.call(null,seq9469);
var seq9469__$1 = cljs.core.next.call(null,seq9469);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9470,seq9469__$1);
});

reagent.core.atom.cljs$lang$maxFixedArity = (1);

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
reagent.core.track = (function reagent$core$track(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9478 = arguments.length;
var i__4532__auto___9479 = (0);
while(true){
if((i__4532__auto___9479 < len__4531__auto___9478)){
args__4534__auto__.push((arguments[i__4532__auto___9479]));

var G__9480 = (i__4532__auto___9479 + (1));
i__4532__auto___9479 = G__9480;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track.call(null,f,args);
});

reagent.core.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.core.track.cljs$lang$applyTo = (function (seq9476){
var G__9477 = cljs.core.first.call(null,seq9476);
var seq9476__$1 = cljs.core.next.call(null,seq9476);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9477,seq9476__$1);
});

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
reagent.core.track_BANG_ = (function reagent$core$track_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9483 = arguments.length;
var i__4532__auto___9484 = (0);
while(true){
if((i__4532__auto___9484 < len__4531__auto___9483)){
args__4534__auto__.push((arguments[i__4532__auto___9484]));

var G__9485 = (i__4532__auto___9484 + (1));
i__4532__auto___9484 = G__9485;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_.call(null,f,args);
});

reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq9481){
var G__9482 = cljs.core.first.call(null,seq9481);
var seq9481__$1 = cljs.core.next.call(null,seq9481);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9482,seq9481__$1);
});

/**
 * Stop the result of track! from updating.
 */
reagent.core.dispose_BANG_ = (function reagent$core$dispose_BANG_(x){
return reagent.ratom.dispose_BANG_.call(null,x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9489 = arguments.length;
var i__4532__auto___9490 = (0);
while(true){
if((i__4532__auto___9490 < len__4531__auto___9489)){
args__4534__auto__.push((arguments[i__4532__auto___9490]));

var G__9491 = (i__4532__auto___9490 + (1));
i__4532__auto___9490 = G__9491;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,reset_fn))].join('')),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
});

reagent.core.wrap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.core.wrap.cljs$lang$applyTo = (function (seq9486){
var G__9487 = cljs.core.first.call(null,seq9486);
var seq9486__$1 = cljs.core.next.call(null,seq9486);
var G__9488 = cljs.core.first.call(null,seq9486__$1);
var seq9486__$2 = cljs.core.next.call(null,seq9486__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9487,G__9488,seq9486__$2);
});

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor.call(null,src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
reagent.core.rswap_BANG_ = (function reagent$core$rswap_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9498 = arguments.length;
var i__4532__auto___9499 = (0);
while(true){
if((i__4532__auto___9499 < len__4531__auto___9498)){
args__4534__auto__.push((arguments[i__4532__auto___9499]));

var G__9500 = (i__4532__auto___9499 + (1));
i__4532__auto___9499 = G__9500;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if(((!((a == null)))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__3949__auto__ = a.rswapfs;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__9492_SHARP_){
return cljs.core.apply.call(null,f,p1__9492_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
var temp__5459__auto__ = (function (){var G__9497 = a.rswapfs;
if((G__9497 == null)){
return null;
} else {
return G__9497.shift();
}
})();
if((temp__5459__auto__ == null)){
return s;
} else {
var sf = temp__5459__auto__;
var G__9501 = sf.call(null,s);
s = G__9501;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq9493){
var G__9494 = cljs.core.first.call(null,seq9493);
var seq9493__$1 = cljs.core.next.call(null,seq9493);
var G__9495 = cljs.core.first.call(null,seq9493__$1);
var seq9493__$2 = cljs.core.next.call(null,seq9493__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9494,G__9495,seq9493__$2);
});

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.do_before_flush.call(null,f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
reagent.core.after_render = (function reagent$core$after_render(f){
return reagent.impl.batching.do_after_render.call(null,f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9504 = arguments.length;
var i__4532__auto___9505 = (0);
while(true){
if((i__4532__auto___9505 < len__4531__auto___9504)){
args__4534__auto__.push((arguments[i__4532__auto___9505]));

var G__9506 = (i__4532__auto___9505 + (1));
i__4532__auto___9505 = G__9506;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return reagent.impl.util.make_partial_fn.call(null,f,args);
});

reagent.core.partial.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.core.partial.cljs$lang$applyTo = (function (seq9502){
var G__9503 = cljs.core.first.call(null,seq9502);
var seq9502__$1 = cljs.core.next.call(null,seq9502);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9503,seq9502__$1);
});

reagent.core.component_path = (function reagent$core$component_path(c){
return reagent.impl.component.component_path.call(null,c);
});

//# sourceMappingURL=core.js.map
