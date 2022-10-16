goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32566 = coll;
var G__32567 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32566,G__32567) : shadow.dom.lazy_native_coll_seq.call(null,G__32566,G__32567));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32596 = arguments.length;
switch (G__32596) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32604 = arguments.length;
switch (G__32604) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32607 = arguments.length;
switch (G__32607) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32610 = arguments.length;
switch (G__32610) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32641 = arguments.length;
switch (G__32641) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__32642 = document;
var G__32643 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32642,G__32643);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32644 = shadow.dom.dom_node(parent);
var G__32645 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32644,G__32645);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32646 = shadow.dom.dom_node(el);
var G__32647 = cls;
return goog.dom.classlist.add(G__32646,G__32647);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32650 = shadow.dom.dom_node(el);
var G__32651 = cls;
return goog.dom.classlist.remove(G__32650,G__32651);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32654 = arguments.length;
switch (G__32654) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__32655 = shadow.dom.dom_node(el);
var G__32656 = cls;
return goog.dom.classlist.toggle(G__32655,G__32656);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32659){if((e32659 instanceof Object)){
var e = e32659;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32659;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32671 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32672 = null;
var count__32673 = (0);
var i__32674 = (0);
while(true){
if((i__32674 < count__32673)){
var el = chunk__32672.cljs$core$IIndexed$_nth$arity$2(null,i__32674);
var handler_33278__$1 = ((function (seq__32671,chunk__32672,count__32673,i__32674,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32671,chunk__32672,count__32673,i__32674,el))
;
var G__32684_33279 = el;
var G__32685_33280 = cljs.core.name(ev);
var G__32686_33281 = handler_33278__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32684_33279,G__32685_33280,G__32686_33281) : shadow.dom.dom_listen.call(null,G__32684_33279,G__32685_33280,G__32686_33281));


var G__33282 = seq__32671;
var G__33283 = chunk__32672;
var G__33284 = count__32673;
var G__33285 = (i__32674 + (1));
seq__32671 = G__33282;
chunk__32672 = G__33283;
count__32673 = G__33284;
i__32674 = G__33285;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32671);
if(temp__5735__auto__){
var seq__32671__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32671__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32671__$1);
var G__33286 = cljs.core.chunk_rest(seq__32671__$1);
var G__33287 = c__4609__auto__;
var G__33288 = cljs.core.count(c__4609__auto__);
var G__33289 = (0);
seq__32671 = G__33286;
chunk__32672 = G__33287;
count__32673 = G__33288;
i__32674 = G__33289;
continue;
} else {
var el = cljs.core.first(seq__32671__$1);
var handler_33290__$1 = ((function (seq__32671,chunk__32672,count__32673,i__32674,el,seq__32671__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32671,chunk__32672,count__32673,i__32674,el,seq__32671__$1,temp__5735__auto__))
;
var G__32687_33291 = el;
var G__32688_33292 = cljs.core.name(ev);
var G__32689_33293 = handler_33290__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32687_33291,G__32688_33292,G__32689_33293) : shadow.dom.dom_listen.call(null,G__32687_33291,G__32688_33292,G__32689_33293));


var G__33294 = cljs.core.next(seq__32671__$1);
var G__33295 = null;
var G__33296 = (0);
var G__33297 = (0);
seq__32671 = G__33294;
chunk__32672 = G__33295;
count__32673 = G__33296;
i__32674 = G__33297;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32691 = arguments.length;
switch (G__32691) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__32692 = shadow.dom.dom_node(el);
var G__32693 = cljs.core.name(ev);
var G__32694 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32692,G__32693,G__32694) : shadow.dom.dom_listen.call(null,G__32692,G__32693,G__32694));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32695 = shadow.dom.dom_node(el);
var G__32696 = cljs.core.name(ev);
var G__32697 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32695,G__32696,G__32697) : shadow.dom.dom_listen_remove.call(null,G__32695,G__32696,G__32697));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32698 = cljs.core.seq(events);
var chunk__32699 = null;
var count__32700 = (0);
var i__32701 = (0);
while(true){
if((i__32701 < count__32700)){
var vec__32710 = chunk__32699.cljs$core$IIndexed$_nth$arity$2(null,i__32701);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33299 = seq__32698;
var G__33300 = chunk__32699;
var G__33301 = count__32700;
var G__33302 = (i__32701 + (1));
seq__32698 = G__33299;
chunk__32699 = G__33300;
count__32700 = G__33301;
i__32701 = G__33302;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32698);
if(temp__5735__auto__){
var seq__32698__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32698__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32698__$1);
var G__33303 = cljs.core.chunk_rest(seq__32698__$1);
var G__33304 = c__4609__auto__;
var G__33305 = cljs.core.count(c__4609__auto__);
var G__33306 = (0);
seq__32698 = G__33303;
chunk__32699 = G__33304;
count__32700 = G__33305;
i__32701 = G__33306;
continue;
} else {
var vec__32715 = cljs.core.first(seq__32698__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32715,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32715,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33307 = cljs.core.next(seq__32698__$1);
var G__33308 = null;
var G__33309 = (0);
var G__33310 = (0);
seq__32698 = G__33307;
chunk__32699 = G__33308;
count__32700 = G__33309;
i__32701 = G__33310;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32722 = cljs.core.seq(styles);
var chunk__32723 = null;
var count__32724 = (0);
var i__32725 = (0);
while(true){
if((i__32725 < count__32724)){
var vec__32744 = chunk__32723.cljs$core$IIndexed$_nth$arity$2(null,i__32725);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32744,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32744,(1),null);
var G__32747_33311 = dom;
var G__32748_33312 = cljs.core.name(k);
var G__32749_33313 = (((v == null))?"":v);
goog.style.setStyle(G__32747_33311,G__32748_33312,G__32749_33313);


var G__33314 = seq__32722;
var G__33315 = chunk__32723;
var G__33316 = count__32724;
var G__33317 = (i__32725 + (1));
seq__32722 = G__33314;
chunk__32723 = G__33315;
count__32724 = G__33316;
i__32725 = G__33317;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32722);
if(temp__5735__auto__){
var seq__32722__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32722__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32722__$1);
var G__33318 = cljs.core.chunk_rest(seq__32722__$1);
var G__33319 = c__4609__auto__;
var G__33320 = cljs.core.count(c__4609__auto__);
var G__33321 = (0);
seq__32722 = G__33318;
chunk__32723 = G__33319;
count__32724 = G__33320;
i__32725 = G__33321;
continue;
} else {
var vec__32751 = cljs.core.first(seq__32722__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32751,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32751,(1),null);
var G__32754_33322 = dom;
var G__32755_33323 = cljs.core.name(k);
var G__32756_33324 = (((v == null))?"":v);
goog.style.setStyle(G__32754_33322,G__32755_33323,G__32756_33324);


var G__33325 = cljs.core.next(seq__32722__$1);
var G__33326 = null;
var G__33327 = (0);
var G__33328 = (0);
seq__32722 = G__33325;
chunk__32723 = G__33326;
count__32724 = G__33327;
i__32725 = G__33328;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32762_33329 = key;
var G__32762_33330__$1 = (((G__32762_33329 instanceof cljs.core.Keyword))?G__32762_33329.fqn:null);
switch (G__32762_33330__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33332 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33332,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33332,"aria-");
}
})())){
el.setAttribute(ks_33332,value);
} else {
(el[ks_33332] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__32774 = shadow.dom.dom_node(el);
var G__32775 = cls;
return goog.dom.classlist.contains(G__32774,G__32775);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32787){
var map__32788 = p__32787;
var map__32788__$1 = (((((!((map__32788 == null))))?(((((map__32788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32788):map__32788);
var props = map__32788__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32788__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32791 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32791,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32791,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32791,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32798 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32798,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32798;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32804 = arguments.length;
switch (G__32804) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32811){
var vec__32812 = p__32811;
var seq__32813 = cljs.core.seq(vec__32812);
var first__32814 = cljs.core.first(seq__32813);
var seq__32813__$1 = cljs.core.next(seq__32813);
var nn = first__32814;
var first__32814__$1 = cljs.core.first(seq__32813__$1);
var seq__32813__$2 = cljs.core.next(seq__32813__$1);
var np = first__32814__$1;
var nc = seq__32813__$2;
var node = vec__32812;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32816 = nn;
var G__32817 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32816,G__32817) : create_fn.call(null,G__32816,G__32817));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32818 = nn;
var G__32819 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32818,G__32819) : create_fn.call(null,G__32818,G__32819));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32820 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32820,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32820,(1),null);
var seq__32823_33340 = cljs.core.seq(node_children);
var chunk__32824_33341 = null;
var count__32825_33342 = (0);
var i__32826_33343 = (0);
while(true){
if((i__32826_33343 < count__32825_33342)){
var child_struct_33344 = chunk__32824_33341.cljs$core$IIndexed$_nth$arity$2(null,i__32826_33343);
var children_33345 = shadow.dom.dom_node(child_struct_33344);
if(cljs.core.seq_QMARK_(children_33345)){
var seq__32845_33346 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33345));
var chunk__32847_33347 = null;
var count__32848_33348 = (0);
var i__32849_33349 = (0);
while(true){
if((i__32849_33349 < count__32848_33348)){
var child_33350 = chunk__32847_33347.cljs$core$IIndexed$_nth$arity$2(null,i__32849_33349);
if(cljs.core.truth_(child_33350)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33350);


var G__33351 = seq__32845_33346;
var G__33352 = chunk__32847_33347;
var G__33353 = count__32848_33348;
var G__33354 = (i__32849_33349 + (1));
seq__32845_33346 = G__33351;
chunk__32847_33347 = G__33352;
count__32848_33348 = G__33353;
i__32849_33349 = G__33354;
continue;
} else {
var G__33355 = seq__32845_33346;
var G__33356 = chunk__32847_33347;
var G__33357 = count__32848_33348;
var G__33358 = (i__32849_33349 + (1));
seq__32845_33346 = G__33355;
chunk__32847_33347 = G__33356;
count__32848_33348 = G__33357;
i__32849_33349 = G__33358;
continue;
}
} else {
var temp__5735__auto___33359 = cljs.core.seq(seq__32845_33346);
if(temp__5735__auto___33359){
var seq__32845_33360__$1 = temp__5735__auto___33359;
if(cljs.core.chunked_seq_QMARK_(seq__32845_33360__$1)){
var c__4609__auto___33361 = cljs.core.chunk_first(seq__32845_33360__$1);
var G__33362 = cljs.core.chunk_rest(seq__32845_33360__$1);
var G__33363 = c__4609__auto___33361;
var G__33364 = cljs.core.count(c__4609__auto___33361);
var G__33365 = (0);
seq__32845_33346 = G__33362;
chunk__32847_33347 = G__33363;
count__32848_33348 = G__33364;
i__32849_33349 = G__33365;
continue;
} else {
var child_33366 = cljs.core.first(seq__32845_33360__$1);
if(cljs.core.truth_(child_33366)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33366);


var G__33367 = cljs.core.next(seq__32845_33360__$1);
var G__33368 = null;
var G__33369 = (0);
var G__33370 = (0);
seq__32845_33346 = G__33367;
chunk__32847_33347 = G__33368;
count__32848_33348 = G__33369;
i__32849_33349 = G__33370;
continue;
} else {
var G__33371 = cljs.core.next(seq__32845_33360__$1);
var G__33372 = null;
var G__33373 = (0);
var G__33374 = (0);
seq__32845_33346 = G__33371;
chunk__32847_33347 = G__33372;
count__32848_33348 = G__33373;
i__32849_33349 = G__33374;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33345);
}


var G__33375 = seq__32823_33340;
var G__33376 = chunk__32824_33341;
var G__33377 = count__32825_33342;
var G__33378 = (i__32826_33343 + (1));
seq__32823_33340 = G__33375;
chunk__32824_33341 = G__33376;
count__32825_33342 = G__33377;
i__32826_33343 = G__33378;
continue;
} else {
var temp__5735__auto___33379 = cljs.core.seq(seq__32823_33340);
if(temp__5735__auto___33379){
var seq__32823_33380__$1 = temp__5735__auto___33379;
if(cljs.core.chunked_seq_QMARK_(seq__32823_33380__$1)){
var c__4609__auto___33381 = cljs.core.chunk_first(seq__32823_33380__$1);
var G__33382 = cljs.core.chunk_rest(seq__32823_33380__$1);
var G__33383 = c__4609__auto___33381;
var G__33384 = cljs.core.count(c__4609__auto___33381);
var G__33385 = (0);
seq__32823_33340 = G__33382;
chunk__32824_33341 = G__33383;
count__32825_33342 = G__33384;
i__32826_33343 = G__33385;
continue;
} else {
var child_struct_33386 = cljs.core.first(seq__32823_33380__$1);
var children_33387 = shadow.dom.dom_node(child_struct_33386);
if(cljs.core.seq_QMARK_(children_33387)){
var seq__32851_33388 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33387));
var chunk__32853_33389 = null;
var count__32854_33390 = (0);
var i__32855_33391 = (0);
while(true){
if((i__32855_33391 < count__32854_33390)){
var child_33392 = chunk__32853_33389.cljs$core$IIndexed$_nth$arity$2(null,i__32855_33391);
if(cljs.core.truth_(child_33392)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33392);


var G__33393 = seq__32851_33388;
var G__33394 = chunk__32853_33389;
var G__33395 = count__32854_33390;
var G__33396 = (i__32855_33391 + (1));
seq__32851_33388 = G__33393;
chunk__32853_33389 = G__33394;
count__32854_33390 = G__33395;
i__32855_33391 = G__33396;
continue;
} else {
var G__33397 = seq__32851_33388;
var G__33398 = chunk__32853_33389;
var G__33399 = count__32854_33390;
var G__33400 = (i__32855_33391 + (1));
seq__32851_33388 = G__33397;
chunk__32853_33389 = G__33398;
count__32854_33390 = G__33399;
i__32855_33391 = G__33400;
continue;
}
} else {
var temp__5735__auto___33401__$1 = cljs.core.seq(seq__32851_33388);
if(temp__5735__auto___33401__$1){
var seq__32851_33402__$1 = temp__5735__auto___33401__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32851_33402__$1)){
var c__4609__auto___33403 = cljs.core.chunk_first(seq__32851_33402__$1);
var G__33404 = cljs.core.chunk_rest(seq__32851_33402__$1);
var G__33405 = c__4609__auto___33403;
var G__33406 = cljs.core.count(c__4609__auto___33403);
var G__33407 = (0);
seq__32851_33388 = G__33404;
chunk__32853_33389 = G__33405;
count__32854_33390 = G__33406;
i__32855_33391 = G__33407;
continue;
} else {
var child_33408 = cljs.core.first(seq__32851_33402__$1);
if(cljs.core.truth_(child_33408)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33408);


var G__33409 = cljs.core.next(seq__32851_33402__$1);
var G__33410 = null;
var G__33411 = (0);
var G__33412 = (0);
seq__32851_33388 = G__33409;
chunk__32853_33389 = G__33410;
count__32854_33390 = G__33411;
i__32855_33391 = G__33412;
continue;
} else {
var G__33413 = cljs.core.next(seq__32851_33402__$1);
var G__33414 = null;
var G__33415 = (0);
var G__33416 = (0);
seq__32851_33388 = G__33413;
chunk__32853_33389 = G__33414;
count__32854_33390 = G__33415;
i__32855_33391 = G__33416;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33387);
}


var G__33417 = cljs.core.next(seq__32823_33380__$1);
var G__33418 = null;
var G__33419 = (0);
var G__33420 = (0);
seq__32823_33340 = G__33417;
chunk__32824_33341 = G__33418;
count__32825_33342 = G__33419;
i__32826_33343 = G__33420;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__32876 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32876);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32882 = cljs.core.seq(node);
var chunk__32883 = null;
var count__32884 = (0);
var i__32885 = (0);
while(true){
if((i__32885 < count__32884)){
var n = chunk__32883.cljs$core$IIndexed$_nth$arity$2(null,i__32885);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33421 = seq__32882;
var G__33422 = chunk__32883;
var G__33423 = count__32884;
var G__33424 = (i__32885 + (1));
seq__32882 = G__33421;
chunk__32883 = G__33422;
count__32884 = G__33423;
i__32885 = G__33424;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32882);
if(temp__5735__auto__){
var seq__32882__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32882__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32882__$1);
var G__33425 = cljs.core.chunk_rest(seq__32882__$1);
var G__33426 = c__4609__auto__;
var G__33427 = cljs.core.count(c__4609__auto__);
var G__33428 = (0);
seq__32882 = G__33425;
chunk__32883 = G__33426;
count__32884 = G__33427;
i__32885 = G__33428;
continue;
} else {
var n = cljs.core.first(seq__32882__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33429 = cljs.core.next(seq__32882__$1);
var G__33430 = null;
var G__33431 = (0);
var G__33432 = (0);
seq__32882 = G__33429;
chunk__32883 = G__33430;
count__32884 = G__33431;
i__32885 = G__33432;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__32898 = shadow.dom.dom_node(new$);
var G__32899 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32898,G__32899);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32906 = arguments.length;
switch (G__32906) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32913 = arguments.length;
switch (G__32913) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32920 = arguments.length;
switch (G__32920) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33439 = arguments.length;
var i__4790__auto___33440 = (0);
while(true){
if((i__4790__auto___33440 < len__4789__auto___33439)){
args__4795__auto__.push((arguments[i__4790__auto___33440]));

var G__33442 = (i__4790__auto___33440 + (1));
i__4790__auto___33440 = G__33442;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32928_33443 = cljs.core.seq(nodes);
var chunk__32929_33444 = null;
var count__32930_33445 = (0);
var i__32931_33446 = (0);
while(true){
if((i__32931_33446 < count__32930_33445)){
var node_33447 = chunk__32929_33444.cljs$core$IIndexed$_nth$arity$2(null,i__32931_33446);
fragment.appendChild(shadow.dom._to_dom(node_33447));


var G__33448 = seq__32928_33443;
var G__33449 = chunk__32929_33444;
var G__33450 = count__32930_33445;
var G__33451 = (i__32931_33446 + (1));
seq__32928_33443 = G__33448;
chunk__32929_33444 = G__33449;
count__32930_33445 = G__33450;
i__32931_33446 = G__33451;
continue;
} else {
var temp__5735__auto___33452 = cljs.core.seq(seq__32928_33443);
if(temp__5735__auto___33452){
var seq__32928_33453__$1 = temp__5735__auto___33452;
if(cljs.core.chunked_seq_QMARK_(seq__32928_33453__$1)){
var c__4609__auto___33454 = cljs.core.chunk_first(seq__32928_33453__$1);
var G__33455 = cljs.core.chunk_rest(seq__32928_33453__$1);
var G__33456 = c__4609__auto___33454;
var G__33457 = cljs.core.count(c__4609__auto___33454);
var G__33458 = (0);
seq__32928_33443 = G__33455;
chunk__32929_33444 = G__33456;
count__32930_33445 = G__33457;
i__32931_33446 = G__33458;
continue;
} else {
var node_33459 = cljs.core.first(seq__32928_33453__$1);
fragment.appendChild(shadow.dom._to_dom(node_33459));


var G__33460 = cljs.core.next(seq__32928_33453__$1);
var G__33461 = null;
var G__33462 = (0);
var G__33463 = (0);
seq__32928_33443 = G__33460;
chunk__32929_33444 = G__33461;
count__32930_33445 = G__33462;
i__32931_33446 = G__33463;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32923){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32923));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32944_33467 = cljs.core.seq(scripts);
var chunk__32945_33468 = null;
var count__32946_33469 = (0);
var i__32947_33470 = (0);
while(true){
if((i__32947_33470 < count__32946_33469)){
var vec__32958_33471 = chunk__32945_33468.cljs$core$IIndexed$_nth$arity$2(null,i__32947_33470);
var script_tag_33472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32958_33471,(0),null);
var script_body_33473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32958_33471,(1),null);
eval(script_body_33473);


var G__33474 = seq__32944_33467;
var G__33475 = chunk__32945_33468;
var G__33476 = count__32946_33469;
var G__33477 = (i__32947_33470 + (1));
seq__32944_33467 = G__33474;
chunk__32945_33468 = G__33475;
count__32946_33469 = G__33476;
i__32947_33470 = G__33477;
continue;
} else {
var temp__5735__auto___33478 = cljs.core.seq(seq__32944_33467);
if(temp__5735__auto___33478){
var seq__32944_33479__$1 = temp__5735__auto___33478;
if(cljs.core.chunked_seq_QMARK_(seq__32944_33479__$1)){
var c__4609__auto___33481 = cljs.core.chunk_first(seq__32944_33479__$1);
var G__33482 = cljs.core.chunk_rest(seq__32944_33479__$1);
var G__33483 = c__4609__auto___33481;
var G__33484 = cljs.core.count(c__4609__auto___33481);
var G__33485 = (0);
seq__32944_33467 = G__33482;
chunk__32945_33468 = G__33483;
count__32946_33469 = G__33484;
i__32947_33470 = G__33485;
continue;
} else {
var vec__32962_33486 = cljs.core.first(seq__32944_33479__$1);
var script_tag_33487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962_33486,(0),null);
var script_body_33488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962_33486,(1),null);
eval(script_body_33488);


var G__33490 = cljs.core.next(seq__32944_33479__$1);
var G__33491 = null;
var G__33492 = (0);
var G__33493 = (0);
seq__32944_33467 = G__33490;
chunk__32945_33468 = G__33491;
count__32946_33469 = G__33492;
i__32947_33470 = G__33493;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32967){
var vec__32968 = p__32967;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32968,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32968,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__32978 = shadow.dom.dom_node(el);
var G__32979 = cls;
return goog.dom.getAncestorByClass(G__32978,G__32979);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32982 = arguments.length;
switch (G__32982) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__32985 = shadow.dom.dom_node(el);
var G__32986 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32985,G__32986);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32987 = shadow.dom.dom_node(el);
var G__32988 = cljs.core.name(tag);
var G__32989 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32987,G__32988,G__32989);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32991 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32991);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32996 = shadow.dom.dom_node(dom);
var G__32997 = value;
return goog.dom.forms.setValue(G__32996,G__32997);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33009 = cljs.core.seq(style_keys);
var chunk__33010 = null;
var count__33011 = (0);
var i__33012 = (0);
while(true){
if((i__33012 < count__33011)){
var it = chunk__33010.cljs$core$IIndexed$_nth$arity$2(null,i__33012);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33499 = seq__33009;
var G__33500 = chunk__33010;
var G__33501 = count__33011;
var G__33502 = (i__33012 + (1));
seq__33009 = G__33499;
chunk__33010 = G__33500;
count__33011 = G__33501;
i__33012 = G__33502;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33009);
if(temp__5735__auto__){
var seq__33009__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33009__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33009__$1);
var G__33503 = cljs.core.chunk_rest(seq__33009__$1);
var G__33504 = c__4609__auto__;
var G__33505 = cljs.core.count(c__4609__auto__);
var G__33506 = (0);
seq__33009 = G__33503;
chunk__33010 = G__33504;
count__33011 = G__33505;
i__33012 = G__33506;
continue;
} else {
var it = cljs.core.first(seq__33009__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33507 = cljs.core.next(seq__33009__$1);
var G__33508 = null;
var G__33509 = (0);
var G__33510 = (0);
seq__33009 = G__33507;
chunk__33010 = G__33508;
count__33011 = G__33509;
i__33012 = G__33510;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33017,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33025 = k33017;
var G__33025__$1 = (((G__33025 instanceof cljs.core.Keyword))?G__33025.fqn:null);
switch (G__33025__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33017,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33027){
var vec__33030 = p__33027;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33030,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33030,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33016){
var self__ = this;
var G__33016__$1 = this;
return (new cljs.core.RecordIter((0),G__33016__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__33039 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__33039(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33018,other33019){
var self__ = this;
var this33018__$1 = this;
return (((!((other33019 == null)))) && ((this33018__$1.constructor === other33019.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33018__$1.x,other33019.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33018__$1.y,other33019.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33018__$1.__extmap,other33019.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33016){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33045 = cljs.core.keyword_identical_QMARK_;
var expr__33046 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__33049 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33050 = expr__33046;
return (pred__33045.cljs$core$IFn$_invoke$arity$2 ? pred__33045.cljs$core$IFn$_invoke$arity$2(G__33049,G__33050) : pred__33045.call(null,G__33049,G__33050));
})())){
return (new shadow.dom.Coordinate(G__33016,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33051 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33052 = expr__33046;
return (pred__33045.cljs$core$IFn$_invoke$arity$2 ? pred__33045.cljs$core$IFn$_invoke$arity$2(G__33051,G__33052) : pred__33045.call(null,G__33051,G__33052));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33016,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33016),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33016){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33016,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33021){
var extmap__4478__auto__ = (function (){var G__33059 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33021,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33021)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33059);
} else {
return G__33059;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33021),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33021),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33062 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33062);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33063 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33063);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33064 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33064);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33066,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33070 = k33066;
var G__33070__$1 = (((G__33070 instanceof cljs.core.Keyword))?G__33070.fqn:null);
switch (G__33070__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33066,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33071){
var vec__33072 = p__33071;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33072,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33072,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33065){
var self__ = this;
var G__33065__$1 = this;
return (new cljs.core.RecordIter((0),G__33065__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__33075 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__33075(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33067,other33068){
var self__ = this;
var this33067__$1 = this;
return (((!((other33068 == null)))) && ((this33067__$1.constructor === other33068.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33067__$1.w,other33068.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33067__$1.h,other33068.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33067__$1.__extmap,other33068.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33065){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33080 = cljs.core.keyword_identical_QMARK_;
var expr__33081 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__33083 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33084 = expr__33081;
return (pred__33080.cljs$core$IFn$_invoke$arity$2 ? pred__33080.cljs$core$IFn$_invoke$arity$2(G__33083,G__33084) : pred__33080.call(null,G__33083,G__33084));
})())){
return (new shadow.dom.Size(G__33065,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33086 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33087 = expr__33081;
return (pred__33080.cljs$core$IFn$_invoke$arity$2 ? pred__33080.cljs$core$IFn$_invoke$arity$2(G__33086,G__33087) : pred__33080.call(null,G__33086,G__33087));
})())){
return (new shadow.dom.Size(self__.w,G__33065,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33065),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33065){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33065,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33069){
var extmap__4478__auto__ = (function (){var G__33096 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33069,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33069)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33096);
} else {
return G__33096;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33069),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33069),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33099 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33099);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33534 = (i + (1));
var G__33535 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33534;
ret = G__33535;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33118){
var vec__33119 = p__33118;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33119,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33127 = arguments.length;
switch (G__33127) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33136_33544 = new_node;
var G__33137_33545 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33136_33544,G__33137_33545);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33139_33546 = new_node;
var G__33140_33547 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33139_33546,G__33140_33547);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33548 = ps;
var G__33549 = (i + (1));
el__$1 = G__33548;
i = G__33549;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33146 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33146);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33153 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33153);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33155 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33155);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33157 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33157,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33157,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33157,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33162_33556 = cljs.core.seq(props);
var chunk__33163_33557 = null;
var count__33164_33558 = (0);
var i__33165_33559 = (0);
while(true){
if((i__33165_33559 < count__33164_33558)){
var vec__33176_33560 = chunk__33163_33557.cljs$core$IIndexed$_nth$arity$2(null,i__33165_33559);
var k_33561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33176_33560,(0),null);
var v_33562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33176_33560,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33561);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33561),v_33562);


var G__33563 = seq__33162_33556;
var G__33564 = chunk__33163_33557;
var G__33565 = count__33164_33558;
var G__33566 = (i__33165_33559 + (1));
seq__33162_33556 = G__33563;
chunk__33163_33557 = G__33564;
count__33164_33558 = G__33565;
i__33165_33559 = G__33566;
continue;
} else {
var temp__5735__auto___33567 = cljs.core.seq(seq__33162_33556);
if(temp__5735__auto___33567){
var seq__33162_33568__$1 = temp__5735__auto___33567;
if(cljs.core.chunked_seq_QMARK_(seq__33162_33568__$1)){
var c__4609__auto___33569 = cljs.core.chunk_first(seq__33162_33568__$1);
var G__33570 = cljs.core.chunk_rest(seq__33162_33568__$1);
var G__33571 = c__4609__auto___33569;
var G__33572 = cljs.core.count(c__4609__auto___33569);
var G__33573 = (0);
seq__33162_33556 = G__33570;
chunk__33163_33557 = G__33571;
count__33164_33558 = G__33572;
i__33165_33559 = G__33573;
continue;
} else {
var vec__33183_33574 = cljs.core.first(seq__33162_33568__$1);
var k_33575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33183_33574,(0),null);
var v_33576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33183_33574,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33575);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33575),v_33576);


var G__33580 = cljs.core.next(seq__33162_33568__$1);
var G__33581 = null;
var G__33582 = (0);
var G__33583 = (0);
seq__33162_33556 = G__33580;
chunk__33163_33557 = G__33581;
count__33164_33558 = G__33582;
i__33165_33559 = G__33583;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33192 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33192,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33192,(1),null);
var seq__33197_33584 = cljs.core.seq(node_children);
var chunk__33199_33585 = null;
var count__33200_33586 = (0);
var i__33201_33587 = (0);
while(true){
if((i__33201_33587 < count__33200_33586)){
var child_struct_33588 = chunk__33199_33585.cljs$core$IIndexed$_nth$arity$2(null,i__33201_33587);
if((!((child_struct_33588 == null)))){
if(typeof child_struct_33588 === 'string'){
var text_33589 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33589),child_struct_33588].join(''));
} else {
var children_33590 = shadow.dom.svg_node(child_struct_33588);
if(cljs.core.seq_QMARK_(children_33590)){
var seq__33228_33591 = cljs.core.seq(children_33590);
var chunk__33230_33592 = null;
var count__33231_33593 = (0);
var i__33232_33594 = (0);
while(true){
if((i__33232_33594 < count__33231_33593)){
var child_33596 = chunk__33230_33592.cljs$core$IIndexed$_nth$arity$2(null,i__33232_33594);
if(cljs.core.truth_(child_33596)){
node.appendChild(child_33596);


var G__33600 = seq__33228_33591;
var G__33601 = chunk__33230_33592;
var G__33602 = count__33231_33593;
var G__33603 = (i__33232_33594 + (1));
seq__33228_33591 = G__33600;
chunk__33230_33592 = G__33601;
count__33231_33593 = G__33602;
i__33232_33594 = G__33603;
continue;
} else {
var G__33604 = seq__33228_33591;
var G__33605 = chunk__33230_33592;
var G__33606 = count__33231_33593;
var G__33607 = (i__33232_33594 + (1));
seq__33228_33591 = G__33604;
chunk__33230_33592 = G__33605;
count__33231_33593 = G__33606;
i__33232_33594 = G__33607;
continue;
}
} else {
var temp__5735__auto___33608 = cljs.core.seq(seq__33228_33591);
if(temp__5735__auto___33608){
var seq__33228_33609__$1 = temp__5735__auto___33608;
if(cljs.core.chunked_seq_QMARK_(seq__33228_33609__$1)){
var c__4609__auto___33610 = cljs.core.chunk_first(seq__33228_33609__$1);
var G__33611 = cljs.core.chunk_rest(seq__33228_33609__$1);
var G__33612 = c__4609__auto___33610;
var G__33613 = cljs.core.count(c__4609__auto___33610);
var G__33614 = (0);
seq__33228_33591 = G__33611;
chunk__33230_33592 = G__33612;
count__33231_33593 = G__33613;
i__33232_33594 = G__33614;
continue;
} else {
var child_33615 = cljs.core.first(seq__33228_33609__$1);
if(cljs.core.truth_(child_33615)){
node.appendChild(child_33615);


var G__33616 = cljs.core.next(seq__33228_33609__$1);
var G__33617 = null;
var G__33618 = (0);
var G__33619 = (0);
seq__33228_33591 = G__33616;
chunk__33230_33592 = G__33617;
count__33231_33593 = G__33618;
i__33232_33594 = G__33619;
continue;
} else {
var G__33620 = cljs.core.next(seq__33228_33609__$1);
var G__33621 = null;
var G__33622 = (0);
var G__33623 = (0);
seq__33228_33591 = G__33620;
chunk__33230_33592 = G__33621;
count__33231_33593 = G__33622;
i__33232_33594 = G__33623;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33590);
}
}


var G__33624 = seq__33197_33584;
var G__33625 = chunk__33199_33585;
var G__33626 = count__33200_33586;
var G__33627 = (i__33201_33587 + (1));
seq__33197_33584 = G__33624;
chunk__33199_33585 = G__33625;
count__33200_33586 = G__33626;
i__33201_33587 = G__33627;
continue;
} else {
var G__33628 = seq__33197_33584;
var G__33629 = chunk__33199_33585;
var G__33630 = count__33200_33586;
var G__33631 = (i__33201_33587 + (1));
seq__33197_33584 = G__33628;
chunk__33199_33585 = G__33629;
count__33200_33586 = G__33630;
i__33201_33587 = G__33631;
continue;
}
} else {
var temp__5735__auto___33632 = cljs.core.seq(seq__33197_33584);
if(temp__5735__auto___33632){
var seq__33197_33633__$1 = temp__5735__auto___33632;
if(cljs.core.chunked_seq_QMARK_(seq__33197_33633__$1)){
var c__4609__auto___33634 = cljs.core.chunk_first(seq__33197_33633__$1);
var G__33635 = cljs.core.chunk_rest(seq__33197_33633__$1);
var G__33636 = c__4609__auto___33634;
var G__33637 = cljs.core.count(c__4609__auto___33634);
var G__33638 = (0);
seq__33197_33584 = G__33635;
chunk__33199_33585 = G__33636;
count__33200_33586 = G__33637;
i__33201_33587 = G__33638;
continue;
} else {
var child_struct_33639 = cljs.core.first(seq__33197_33633__$1);
if((!((child_struct_33639 == null)))){
if(typeof child_struct_33639 === 'string'){
var text_33640 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33640),child_struct_33639].join(''));
} else {
var children_33641 = shadow.dom.svg_node(child_struct_33639);
if(cljs.core.seq_QMARK_(children_33641)){
var seq__33240_33642 = cljs.core.seq(children_33641);
var chunk__33242_33643 = null;
var count__33243_33644 = (0);
var i__33244_33645 = (0);
while(true){
if((i__33244_33645 < count__33243_33644)){
var child_33646 = chunk__33242_33643.cljs$core$IIndexed$_nth$arity$2(null,i__33244_33645);
if(cljs.core.truth_(child_33646)){
node.appendChild(child_33646);


var G__33647 = seq__33240_33642;
var G__33648 = chunk__33242_33643;
var G__33649 = count__33243_33644;
var G__33650 = (i__33244_33645 + (1));
seq__33240_33642 = G__33647;
chunk__33242_33643 = G__33648;
count__33243_33644 = G__33649;
i__33244_33645 = G__33650;
continue;
} else {
var G__33651 = seq__33240_33642;
var G__33652 = chunk__33242_33643;
var G__33653 = count__33243_33644;
var G__33654 = (i__33244_33645 + (1));
seq__33240_33642 = G__33651;
chunk__33242_33643 = G__33652;
count__33243_33644 = G__33653;
i__33244_33645 = G__33654;
continue;
}
} else {
var temp__5735__auto___33655__$1 = cljs.core.seq(seq__33240_33642);
if(temp__5735__auto___33655__$1){
var seq__33240_33656__$1 = temp__5735__auto___33655__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33240_33656__$1)){
var c__4609__auto___33657 = cljs.core.chunk_first(seq__33240_33656__$1);
var G__33658 = cljs.core.chunk_rest(seq__33240_33656__$1);
var G__33659 = c__4609__auto___33657;
var G__33660 = cljs.core.count(c__4609__auto___33657);
var G__33661 = (0);
seq__33240_33642 = G__33658;
chunk__33242_33643 = G__33659;
count__33243_33644 = G__33660;
i__33244_33645 = G__33661;
continue;
} else {
var child_33662 = cljs.core.first(seq__33240_33656__$1);
if(cljs.core.truth_(child_33662)){
node.appendChild(child_33662);


var G__33663 = cljs.core.next(seq__33240_33656__$1);
var G__33664 = null;
var G__33665 = (0);
var G__33666 = (0);
seq__33240_33642 = G__33663;
chunk__33242_33643 = G__33664;
count__33243_33644 = G__33665;
i__33244_33645 = G__33666;
continue;
} else {
var G__33667 = cljs.core.next(seq__33240_33656__$1);
var G__33668 = null;
var G__33669 = (0);
var G__33670 = (0);
seq__33240_33642 = G__33667;
chunk__33242_33643 = G__33668;
count__33243_33644 = G__33669;
i__33244_33645 = G__33670;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33641);
}
}


var G__33671 = cljs.core.next(seq__33197_33633__$1);
var G__33672 = null;
var G__33673 = (0);
var G__33674 = (0);
seq__33197_33584 = G__33671;
chunk__33199_33585 = G__33672;
count__33200_33586 = G__33673;
i__33201_33587 = G__33674;
continue;
} else {
var G__33675 = cljs.core.next(seq__33197_33633__$1);
var G__33676 = null;
var G__33677 = (0);
var G__33678 = (0);
seq__33197_33584 = G__33675;
chunk__33199_33585 = G__33676;
count__33200_33586 = G__33677;
i__33201_33587 = G__33678;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33248_33679 = shadow.dom._to_svg;
var G__33249_33680 = "string";
var G__33250_33681 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__33248_33679,G__33249_33680,G__33250_33681);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33251_33684 = shadow.dom._to_svg;
var G__33252_33685 = "null";
var G__33253_33686 = (function (_){
return null;
});
goog.object.set(G__33251_33684,G__33252_33685,G__33253_33686);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33687 = arguments.length;
var i__4790__auto___33688 = (0);
while(true){
if((i__4790__auto___33688 < len__4789__auto___33687)){
args__4795__auto__.push((arguments[i__4790__auto___33688]));

var G__33689 = (i__4790__auto___33688 + (1));
i__4790__auto___33688 = G__33689;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33254){
var G__33255 = cljs.core.first(seq33254);
var seq33254__$1 = cljs.core.next(seq33254);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33255,seq33254__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33257 = arguments.length;
switch (G__33257) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__33258_33692 = shadow.dom.dom_node(el);
var G__33259_33693 = cljs.core.name(event);
var G__33260_33694 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33258_33692,G__33259_33693,G__33260_33694) : shadow.dom.dom_listen.call(null,G__33258_33692,G__33259_33693,G__33260_33694));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__30026__auto___33695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30027__auto__ = (function (){var switch__29676__auto__ = (function (state_33265){
var state_val_33266 = (state_33265[(1)]);
if((state_val_33266 === (1))){
var state_33265__$1 = state_33265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33265__$1,(2),once_or_cleanup);
} else {
if((state_val_33266 === (2))){
var inst_33262 = (state_33265[(2)]);
var inst_33263 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33265__$1 = (function (){var statearr_33267 = state_33265;
(statearr_33267[(7)] = inst_33262);

return statearr_33267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33265__$1,inst_33263);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29677__auto__ = null;
var shadow$dom$state_machine__29677__auto____0 = (function (){
var statearr_33268 = [null,null,null,null,null,null,null,null];
(statearr_33268[(0)] = shadow$dom$state_machine__29677__auto__);

(statearr_33268[(1)] = (1));

return statearr_33268;
});
var shadow$dom$state_machine__29677__auto____1 = (function (state_33265){
while(true){
var ret_value__29678__auto__ = (function (){try{while(true){
var result__29679__auto__ = switch__29676__auto__(state_33265);
if(cljs.core.keyword_identical_QMARK_(result__29679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29679__auto__;
}
break;
}
}catch (e33269){if((e33269 instanceof Object)){
var ex__29680__auto__ = e33269;
var statearr_33270_33696 = state_33265;
(statearr_33270_33696[(5)] = ex__29680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33269;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33697 = state_33265;
state_33265 = G__33697;
continue;
} else {
return ret_value__29678__auto__;
}
break;
}
});
shadow$dom$state_machine__29677__auto__ = function(state_33265){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29677__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29677__auto____1.call(this,state_33265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29677__auto____0;
shadow$dom$state_machine__29677__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29677__auto____1;
return shadow$dom$state_machine__29677__auto__;
})()
})();
var state__30028__auto__ = (function (){var statearr_33271 = (f__30027__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30027__auto__.cljs$core$IFn$_invoke$arity$0() : f__30027__auto__.call(null));
(statearr_33271[(6)] = c__30026__auto___33695);

return statearr_33271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30028__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
