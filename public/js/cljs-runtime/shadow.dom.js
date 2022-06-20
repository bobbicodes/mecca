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
return cljs.core.cons((coll[idx]),(function (){var G__32453 = coll;
var G__32454 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32453,G__32454) : shadow.dom.lazy_native_coll_seq.call(null,G__32453,G__32454));
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
var G__32507 = arguments.length;
switch (G__32507) {
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
var G__32524 = arguments.length;
switch (G__32524) {
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
var G__32529 = arguments.length;
switch (G__32529) {
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
var G__32540 = arguments.length;
switch (G__32540) {
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
var G__32554 = arguments.length;
switch (G__32554) {
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
var G__32557 = document;
var G__32558 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32557,G__32558);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32559 = shadow.dom.dom_node(parent);
var G__32560 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32559,G__32560);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32564 = shadow.dom.dom_node(el);
var G__32565 = cls;
return goog.dom.classlist.add(G__32564,G__32565);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32568 = shadow.dom.dom_node(el);
var G__32569 = cls;
return goog.dom.classlist.remove(G__32568,G__32569);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32572 = arguments.length;
switch (G__32572) {
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
var G__32573 = shadow.dom.dom_node(el);
var G__32574 = cls;
return goog.dom.classlist.toggle(G__32573,G__32574);
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
}catch (e32586){if((e32586 instanceof Object)){
var e = e32586;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32586;

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
var seq__32594 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32595 = null;
var count__32596 = (0);
var i__32597 = (0);
while(true){
if((i__32597 < count__32596)){
var el = chunk__32595.cljs$core$IIndexed$_nth$arity$2(null,i__32597);
var handler_33239__$1 = ((function (seq__32594,chunk__32595,count__32596,i__32597,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32594,chunk__32595,count__32596,i__32597,el))
;
var G__32615_33241 = el;
var G__32616_33242 = cljs.core.name(ev);
var G__32617_33243 = handler_33239__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32615_33241,G__32616_33242,G__32617_33243) : shadow.dom.dom_listen.call(null,G__32615_33241,G__32616_33242,G__32617_33243));


var G__33244 = seq__32594;
var G__33245 = chunk__32595;
var G__33246 = count__32596;
var G__33247 = (i__32597 + (1));
seq__32594 = G__33244;
chunk__32595 = G__33245;
count__32596 = G__33246;
i__32597 = G__33247;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32594);
if(temp__5735__auto__){
var seq__32594__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32594__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32594__$1);
var G__33248 = cljs.core.chunk_rest(seq__32594__$1);
var G__33249 = c__4609__auto__;
var G__33250 = cljs.core.count(c__4609__auto__);
var G__33251 = (0);
seq__32594 = G__33248;
chunk__32595 = G__33249;
count__32596 = G__33250;
i__32597 = G__33251;
continue;
} else {
var el = cljs.core.first(seq__32594__$1);
var handler_33253__$1 = ((function (seq__32594,chunk__32595,count__32596,i__32597,el,seq__32594__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32594,chunk__32595,count__32596,i__32597,el,seq__32594__$1,temp__5735__auto__))
;
var G__32620_33255 = el;
var G__32621_33256 = cljs.core.name(ev);
var G__32622_33257 = handler_33253__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32620_33255,G__32621_33256,G__32622_33257) : shadow.dom.dom_listen.call(null,G__32620_33255,G__32621_33256,G__32622_33257));


var G__33258 = cljs.core.next(seq__32594__$1);
var G__33259 = null;
var G__33260 = (0);
var G__33261 = (0);
seq__32594 = G__33258;
chunk__32595 = G__33259;
count__32596 = G__33260;
i__32597 = G__33261;
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
var G__32626 = arguments.length;
switch (G__32626) {
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
var G__32629 = shadow.dom.dom_node(el);
var G__32630 = cljs.core.name(ev);
var G__32631 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32629,G__32630,G__32631) : shadow.dom.dom_listen.call(null,G__32629,G__32630,G__32631));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32632 = shadow.dom.dom_node(el);
var G__32633 = cljs.core.name(ev);
var G__32634 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32632,G__32633,G__32634) : shadow.dom.dom_listen_remove.call(null,G__32632,G__32633,G__32634));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32636 = cljs.core.seq(events);
var chunk__32637 = null;
var count__32638 = (0);
var i__32639 = (0);
while(true){
if((i__32639 < count__32638)){
var vec__32652 = chunk__32637.cljs$core$IIndexed$_nth$arity$2(null,i__32639);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33269 = seq__32636;
var G__33270 = chunk__32637;
var G__33271 = count__32638;
var G__33272 = (i__32639 + (1));
seq__32636 = G__33269;
chunk__32637 = G__33270;
count__32638 = G__33271;
i__32639 = G__33272;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32636);
if(temp__5735__auto__){
var seq__32636__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32636__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32636__$1);
var G__33274 = cljs.core.chunk_rest(seq__32636__$1);
var G__33275 = c__4609__auto__;
var G__33276 = cljs.core.count(c__4609__auto__);
var G__33277 = (0);
seq__32636 = G__33274;
chunk__32637 = G__33275;
count__32638 = G__33276;
i__32639 = G__33277;
continue;
} else {
var vec__32658 = cljs.core.first(seq__32636__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32658,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32658,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33282 = cljs.core.next(seq__32636__$1);
var G__33283 = null;
var G__33284 = (0);
var G__33285 = (0);
seq__32636 = G__33282;
chunk__32637 = G__33283;
count__32638 = G__33284;
i__32639 = G__33285;
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
var seq__32663 = cljs.core.seq(styles);
var chunk__32664 = null;
var count__32665 = (0);
var i__32666 = (0);
while(true){
if((i__32666 < count__32665)){
var vec__32691 = chunk__32664.cljs$core$IIndexed$_nth$arity$2(null,i__32666);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32691,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32691,(1),null);
var G__32694_33288 = dom;
var G__32695_33289 = cljs.core.name(k);
var G__32696_33290 = (((v == null))?"":v);
goog.style.setStyle(G__32694_33288,G__32695_33289,G__32696_33290);


var G__33292 = seq__32663;
var G__33293 = chunk__32664;
var G__33294 = count__32665;
var G__33295 = (i__32666 + (1));
seq__32663 = G__33292;
chunk__32664 = G__33293;
count__32665 = G__33294;
i__32666 = G__33295;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32663);
if(temp__5735__auto__){
var seq__32663__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32663__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32663__$1);
var G__33298 = cljs.core.chunk_rest(seq__32663__$1);
var G__33299 = c__4609__auto__;
var G__33300 = cljs.core.count(c__4609__auto__);
var G__33301 = (0);
seq__32663 = G__33298;
chunk__32664 = G__33299;
count__32665 = G__33300;
i__32666 = G__33301;
continue;
} else {
var vec__32699 = cljs.core.first(seq__32663__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32699,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32699,(1),null);
var G__32702_33302 = dom;
var G__32703_33303 = cljs.core.name(k);
var G__32704_33304 = (((v == null))?"":v);
goog.style.setStyle(G__32702_33302,G__32703_33303,G__32704_33304);


var G__33305 = cljs.core.next(seq__32663__$1);
var G__33306 = null;
var G__33307 = (0);
var G__33308 = (0);
seq__32663 = G__33305;
chunk__32664 = G__33306;
count__32665 = G__33307;
i__32666 = G__33308;
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
var G__32717_33311 = key;
var G__32717_33312__$1 = (((G__32717_33311 instanceof cljs.core.Keyword))?G__32717_33311.fqn:null);
switch (G__32717_33312__$1) {
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
var ks_33315 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33315,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33315,"aria-");
}
})())){
el.setAttribute(ks_33315,value);
} else {
(el[ks_33315] = value);
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
var G__32724 = shadow.dom.dom_node(el);
var G__32725 = cls;
return goog.dom.classlist.contains(G__32724,G__32725);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32729){
var map__32730 = p__32729;
var map__32730__$1 = (((((!((map__32730 == null))))?(((((map__32730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32730):map__32730);
var props = map__32730__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32730__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32734 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32734,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32734,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32734,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32738 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32738,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32738;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32744 = arguments.length;
switch (G__32744) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32752){
var vec__32753 = p__32752;
var seq__32754 = cljs.core.seq(vec__32753);
var first__32755 = cljs.core.first(seq__32754);
var seq__32754__$1 = cljs.core.next(seq__32754);
var nn = first__32755;
var first__32755__$1 = cljs.core.first(seq__32754__$1);
var seq__32754__$2 = cljs.core.next(seq__32754__$1);
var np = first__32755__$1;
var nc = seq__32754__$2;
var node = vec__32753;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32756 = nn;
var G__32757 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32756,G__32757) : create_fn.call(null,G__32756,G__32757));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32758 = nn;
var G__32759 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32758,G__32759) : create_fn.call(null,G__32758,G__32759));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32761 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32761,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32761,(1),null);
var seq__32765_33332 = cljs.core.seq(node_children);
var chunk__32766_33333 = null;
var count__32767_33334 = (0);
var i__32768_33335 = (0);
while(true){
if((i__32768_33335 < count__32767_33334)){
var child_struct_33336 = chunk__32766_33333.cljs$core$IIndexed$_nth$arity$2(null,i__32768_33335);
var children_33337 = shadow.dom.dom_node(child_struct_33336);
if(cljs.core.seq_QMARK_(children_33337)){
var seq__32781_33338 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33337));
var chunk__32783_33339 = null;
var count__32784_33340 = (0);
var i__32785_33341 = (0);
while(true){
if((i__32785_33341 < count__32784_33340)){
var child_33344 = chunk__32783_33339.cljs$core$IIndexed$_nth$arity$2(null,i__32785_33341);
if(cljs.core.truth_(child_33344)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33344);


var G__33345 = seq__32781_33338;
var G__33346 = chunk__32783_33339;
var G__33347 = count__32784_33340;
var G__33348 = (i__32785_33341 + (1));
seq__32781_33338 = G__33345;
chunk__32783_33339 = G__33346;
count__32784_33340 = G__33347;
i__32785_33341 = G__33348;
continue;
} else {
var G__33349 = seq__32781_33338;
var G__33350 = chunk__32783_33339;
var G__33351 = count__32784_33340;
var G__33352 = (i__32785_33341 + (1));
seq__32781_33338 = G__33349;
chunk__32783_33339 = G__33350;
count__32784_33340 = G__33351;
i__32785_33341 = G__33352;
continue;
}
} else {
var temp__5735__auto___33353 = cljs.core.seq(seq__32781_33338);
if(temp__5735__auto___33353){
var seq__32781_33354__$1 = temp__5735__auto___33353;
if(cljs.core.chunked_seq_QMARK_(seq__32781_33354__$1)){
var c__4609__auto___33355 = cljs.core.chunk_first(seq__32781_33354__$1);
var G__33356 = cljs.core.chunk_rest(seq__32781_33354__$1);
var G__33357 = c__4609__auto___33355;
var G__33358 = cljs.core.count(c__4609__auto___33355);
var G__33359 = (0);
seq__32781_33338 = G__33356;
chunk__32783_33339 = G__33357;
count__32784_33340 = G__33358;
i__32785_33341 = G__33359;
continue;
} else {
var child_33360 = cljs.core.first(seq__32781_33354__$1);
if(cljs.core.truth_(child_33360)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33360);


var G__33361 = cljs.core.next(seq__32781_33354__$1);
var G__33362 = null;
var G__33363 = (0);
var G__33364 = (0);
seq__32781_33338 = G__33361;
chunk__32783_33339 = G__33362;
count__32784_33340 = G__33363;
i__32785_33341 = G__33364;
continue;
} else {
var G__33365 = cljs.core.next(seq__32781_33354__$1);
var G__33366 = null;
var G__33367 = (0);
var G__33368 = (0);
seq__32781_33338 = G__33365;
chunk__32783_33339 = G__33366;
count__32784_33340 = G__33367;
i__32785_33341 = G__33368;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33337);
}


var G__33369 = seq__32765_33332;
var G__33370 = chunk__32766_33333;
var G__33371 = count__32767_33334;
var G__33372 = (i__32768_33335 + (1));
seq__32765_33332 = G__33369;
chunk__32766_33333 = G__33370;
count__32767_33334 = G__33371;
i__32768_33335 = G__33372;
continue;
} else {
var temp__5735__auto___33373 = cljs.core.seq(seq__32765_33332);
if(temp__5735__auto___33373){
var seq__32765_33374__$1 = temp__5735__auto___33373;
if(cljs.core.chunked_seq_QMARK_(seq__32765_33374__$1)){
var c__4609__auto___33375 = cljs.core.chunk_first(seq__32765_33374__$1);
var G__33376 = cljs.core.chunk_rest(seq__32765_33374__$1);
var G__33377 = c__4609__auto___33375;
var G__33378 = cljs.core.count(c__4609__auto___33375);
var G__33379 = (0);
seq__32765_33332 = G__33376;
chunk__32766_33333 = G__33377;
count__32767_33334 = G__33378;
i__32768_33335 = G__33379;
continue;
} else {
var child_struct_33380 = cljs.core.first(seq__32765_33374__$1);
var children_33381 = shadow.dom.dom_node(child_struct_33380);
if(cljs.core.seq_QMARK_(children_33381)){
var seq__32787_33382 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33381));
var chunk__32789_33383 = null;
var count__32790_33384 = (0);
var i__32791_33385 = (0);
while(true){
if((i__32791_33385 < count__32790_33384)){
var child_33386 = chunk__32789_33383.cljs$core$IIndexed$_nth$arity$2(null,i__32791_33385);
if(cljs.core.truth_(child_33386)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33386);


var G__33387 = seq__32787_33382;
var G__33388 = chunk__32789_33383;
var G__33389 = count__32790_33384;
var G__33390 = (i__32791_33385 + (1));
seq__32787_33382 = G__33387;
chunk__32789_33383 = G__33388;
count__32790_33384 = G__33389;
i__32791_33385 = G__33390;
continue;
} else {
var G__33391 = seq__32787_33382;
var G__33392 = chunk__32789_33383;
var G__33393 = count__32790_33384;
var G__33394 = (i__32791_33385 + (1));
seq__32787_33382 = G__33391;
chunk__32789_33383 = G__33392;
count__32790_33384 = G__33393;
i__32791_33385 = G__33394;
continue;
}
} else {
var temp__5735__auto___33395__$1 = cljs.core.seq(seq__32787_33382);
if(temp__5735__auto___33395__$1){
var seq__32787_33396__$1 = temp__5735__auto___33395__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32787_33396__$1)){
var c__4609__auto___33397 = cljs.core.chunk_first(seq__32787_33396__$1);
var G__33398 = cljs.core.chunk_rest(seq__32787_33396__$1);
var G__33399 = c__4609__auto___33397;
var G__33400 = cljs.core.count(c__4609__auto___33397);
var G__33401 = (0);
seq__32787_33382 = G__33398;
chunk__32789_33383 = G__33399;
count__32790_33384 = G__33400;
i__32791_33385 = G__33401;
continue;
} else {
var child_33402 = cljs.core.first(seq__32787_33396__$1);
if(cljs.core.truth_(child_33402)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33402);


var G__33403 = cljs.core.next(seq__32787_33396__$1);
var G__33404 = null;
var G__33405 = (0);
var G__33406 = (0);
seq__32787_33382 = G__33403;
chunk__32789_33383 = G__33404;
count__32790_33384 = G__33405;
i__32791_33385 = G__33406;
continue;
} else {
var G__33407 = cljs.core.next(seq__32787_33396__$1);
var G__33408 = null;
var G__33409 = (0);
var G__33410 = (0);
seq__32787_33382 = G__33407;
chunk__32789_33383 = G__33408;
count__32790_33384 = G__33409;
i__32791_33385 = G__33410;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33381);
}


var G__33411 = cljs.core.next(seq__32765_33374__$1);
var G__33412 = null;
var G__33413 = (0);
var G__33414 = (0);
seq__32765_33332 = G__33411;
chunk__32766_33333 = G__33412;
count__32767_33334 = G__33413;
i__32768_33335 = G__33414;
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
var G__32806 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32806);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32810 = cljs.core.seq(node);
var chunk__32811 = null;
var count__32812 = (0);
var i__32813 = (0);
while(true){
if((i__32813 < count__32812)){
var n = chunk__32811.cljs$core$IIndexed$_nth$arity$2(null,i__32813);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33415 = seq__32810;
var G__33416 = chunk__32811;
var G__33417 = count__32812;
var G__33418 = (i__32813 + (1));
seq__32810 = G__33415;
chunk__32811 = G__33416;
count__32812 = G__33417;
i__32813 = G__33418;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32810);
if(temp__5735__auto__){
var seq__32810__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32810__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32810__$1);
var G__33419 = cljs.core.chunk_rest(seq__32810__$1);
var G__33420 = c__4609__auto__;
var G__33421 = cljs.core.count(c__4609__auto__);
var G__33422 = (0);
seq__32810 = G__33419;
chunk__32811 = G__33420;
count__32812 = G__33421;
i__32813 = G__33422;
continue;
} else {
var n = cljs.core.first(seq__32810__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33423 = cljs.core.next(seq__32810__$1);
var G__33424 = null;
var G__33425 = (0);
var G__33426 = (0);
seq__32810 = G__33423;
chunk__32811 = G__33424;
count__32812 = G__33425;
i__32813 = G__33426;
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
var G__32834 = shadow.dom.dom_node(new$);
var G__32835 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32834,G__32835);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32837 = arguments.length;
switch (G__32837) {
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
var G__32840 = arguments.length;
switch (G__32840) {
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
var G__32845 = arguments.length;
switch (G__32845) {
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
var len__4789__auto___33430 = arguments.length;
var i__4790__auto___33431 = (0);
while(true){
if((i__4790__auto___33431 < len__4789__auto___33430)){
args__4795__auto__.push((arguments[i__4790__auto___33431]));

var G__33432 = (i__4790__auto___33431 + (1));
i__4790__auto___33431 = G__33432;
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
var seq__32866_33433 = cljs.core.seq(nodes);
var chunk__32867_33434 = null;
var count__32868_33435 = (0);
var i__32869_33436 = (0);
while(true){
if((i__32869_33436 < count__32868_33435)){
var node_33437 = chunk__32867_33434.cljs$core$IIndexed$_nth$arity$2(null,i__32869_33436);
fragment.appendChild(shadow.dom._to_dom(node_33437));


var G__33438 = seq__32866_33433;
var G__33439 = chunk__32867_33434;
var G__33440 = count__32868_33435;
var G__33441 = (i__32869_33436 + (1));
seq__32866_33433 = G__33438;
chunk__32867_33434 = G__33439;
count__32868_33435 = G__33440;
i__32869_33436 = G__33441;
continue;
} else {
var temp__5735__auto___33442 = cljs.core.seq(seq__32866_33433);
if(temp__5735__auto___33442){
var seq__32866_33443__$1 = temp__5735__auto___33442;
if(cljs.core.chunked_seq_QMARK_(seq__32866_33443__$1)){
var c__4609__auto___33444 = cljs.core.chunk_first(seq__32866_33443__$1);
var G__33445 = cljs.core.chunk_rest(seq__32866_33443__$1);
var G__33446 = c__4609__auto___33444;
var G__33447 = cljs.core.count(c__4609__auto___33444);
var G__33448 = (0);
seq__32866_33433 = G__33445;
chunk__32867_33434 = G__33446;
count__32868_33435 = G__33447;
i__32869_33436 = G__33448;
continue;
} else {
var node_33449 = cljs.core.first(seq__32866_33443__$1);
fragment.appendChild(shadow.dom._to_dom(node_33449));


var G__33450 = cljs.core.next(seq__32866_33443__$1);
var G__33451 = null;
var G__33452 = (0);
var G__33453 = (0);
seq__32866_33433 = G__33450;
chunk__32867_33434 = G__33451;
count__32868_33435 = G__33452;
i__32869_33436 = G__33453;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32863){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32863));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32876_33454 = cljs.core.seq(scripts);
var chunk__32877_33455 = null;
var count__32878_33456 = (0);
var i__32879_33457 = (0);
while(true){
if((i__32879_33457 < count__32878_33456)){
var vec__32886_33458 = chunk__32877_33455.cljs$core$IIndexed$_nth$arity$2(null,i__32879_33457);
var script_tag_33459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32886_33458,(0),null);
var script_body_33460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32886_33458,(1),null);
eval(script_body_33460);


var G__33461 = seq__32876_33454;
var G__33462 = chunk__32877_33455;
var G__33463 = count__32878_33456;
var G__33464 = (i__32879_33457 + (1));
seq__32876_33454 = G__33461;
chunk__32877_33455 = G__33462;
count__32878_33456 = G__33463;
i__32879_33457 = G__33464;
continue;
} else {
var temp__5735__auto___33465 = cljs.core.seq(seq__32876_33454);
if(temp__5735__auto___33465){
var seq__32876_33466__$1 = temp__5735__auto___33465;
if(cljs.core.chunked_seq_QMARK_(seq__32876_33466__$1)){
var c__4609__auto___33467 = cljs.core.chunk_first(seq__32876_33466__$1);
var G__33468 = cljs.core.chunk_rest(seq__32876_33466__$1);
var G__33469 = c__4609__auto___33467;
var G__33470 = cljs.core.count(c__4609__auto___33467);
var G__33471 = (0);
seq__32876_33454 = G__33468;
chunk__32877_33455 = G__33469;
count__32878_33456 = G__33470;
i__32879_33457 = G__33471;
continue;
} else {
var vec__32889_33472 = cljs.core.first(seq__32876_33466__$1);
var script_tag_33473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32889_33472,(0),null);
var script_body_33474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32889_33472,(1),null);
eval(script_body_33474);


var G__33475 = cljs.core.next(seq__32876_33466__$1);
var G__33476 = null;
var G__33477 = (0);
var G__33478 = (0);
seq__32876_33454 = G__33475;
chunk__32877_33455 = G__33476;
count__32878_33456 = G__33477;
i__32879_33457 = G__33478;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32892){
var vec__32893 = p__32892;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32893,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32893,(1),null);
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
var G__32896 = shadow.dom.dom_node(el);
var G__32897 = cls;
return goog.dom.getAncestorByClass(G__32896,G__32897);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32899 = arguments.length;
switch (G__32899) {
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
var G__32902 = shadow.dom.dom_node(el);
var G__32903 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32902,G__32903);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32908 = shadow.dom.dom_node(el);
var G__32909 = cljs.core.name(tag);
var G__32910 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32908,G__32909,G__32910);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32917 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32917);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32920 = shadow.dom.dom_node(dom);
var G__32921 = value;
return goog.dom.forms.setValue(G__32920,G__32921);
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
var seq__32940 = cljs.core.seq(style_keys);
var chunk__32941 = null;
var count__32942 = (0);
var i__32943 = (0);
while(true){
if((i__32943 < count__32942)){
var it = chunk__32941.cljs$core$IIndexed$_nth$arity$2(null,i__32943);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33480 = seq__32940;
var G__33481 = chunk__32941;
var G__33482 = count__32942;
var G__33483 = (i__32943 + (1));
seq__32940 = G__33480;
chunk__32941 = G__33481;
count__32942 = G__33482;
i__32943 = G__33483;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32940);
if(temp__5735__auto__){
var seq__32940__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32940__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32940__$1);
var G__33484 = cljs.core.chunk_rest(seq__32940__$1);
var G__33485 = c__4609__auto__;
var G__33486 = cljs.core.count(c__4609__auto__);
var G__33487 = (0);
seq__32940 = G__33484;
chunk__32941 = G__33485;
count__32942 = G__33486;
i__32943 = G__33487;
continue;
} else {
var it = cljs.core.first(seq__32940__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33488 = cljs.core.next(seq__32940__$1);
var G__33489 = null;
var G__33490 = (0);
var G__33491 = (0);
seq__32940 = G__33488;
chunk__32941 = G__33489;
count__32942 = G__33490;
i__32943 = G__33491;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32956,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32966 = k32956;
var G__32966__$1 = (((G__32966 instanceof cljs.core.Keyword))?G__32966.fqn:null);
switch (G__32966__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32956,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32967){
var vec__32968 = p__32967;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32968,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32968,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32955){
var self__ = this;
var G__32955__$1 = this;
return (new cljs.core.RecordIter((0),G__32955__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__32972 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32972(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32957,other32958){
var self__ = this;
var this32957__$1 = this;
return (((!((other32958 == null)))) && ((this32957__$1.constructor === other32958.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32957__$1.x,other32958.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32957__$1.y,other32958.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32957__$1.__extmap,other32958.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32955){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32974 = cljs.core.keyword_identical_QMARK_;
var expr__32975 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32977 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__32978 = expr__32975;
return (pred__32974.cljs$core$IFn$_invoke$arity$2 ? pred__32974.cljs$core$IFn$_invoke$arity$2(G__32977,G__32978) : pred__32974.call(null,G__32977,G__32978));
})())){
return (new shadow.dom.Coordinate(G__32955,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32979 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__32980 = expr__32975;
return (pred__32974.cljs$core$IFn$_invoke$arity$2 ? pred__32974.cljs$core$IFn$_invoke$arity$2(G__32979,G__32980) : pred__32974.call(null,G__32979,G__32980));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32955,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32955),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32955){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32955,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32961){
var extmap__4478__auto__ = (function (){var G__32985 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32961,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32961)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32985);
} else {
return G__32985;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32961),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__32991 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__32991);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__32998 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__32998);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33002 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33002);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33005,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33015 = k33005;
var G__33015__$1 = (((G__33015 instanceof cljs.core.Keyword))?G__33015.fqn:null);
switch (G__33015__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33005,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33021){
var vec__33023 = p__33021;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33023,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33023,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33004){
var self__ = this;
var G__33004__$1 = this;
return (new cljs.core.RecordIter((0),G__33004__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__33038 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__33038(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33006,other33007){
var self__ = this;
var this33006__$1 = this;
return (((!((other33007 == null)))) && ((this33006__$1.constructor === other33007.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33006__$1.w,other33007.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33006__$1.h,other33007.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33006__$1.__extmap,other33007.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33004){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33046 = cljs.core.keyword_identical_QMARK_;
var expr__33047 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__33049 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33050 = expr__33047;
return (pred__33046.cljs$core$IFn$_invoke$arity$2 ? pred__33046.cljs$core$IFn$_invoke$arity$2(G__33049,G__33050) : pred__33046.call(null,G__33049,G__33050));
})())){
return (new shadow.dom.Size(G__33004,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33051 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33052 = expr__33047;
return (pred__33046.cljs$core$IFn$_invoke$arity$2 ? pred__33046.cljs$core$IFn$_invoke$arity$2(G__33051,G__33052) : pred__33046.call(null,G__33051,G__33052));
})())){
return (new shadow.dom.Size(self__.w,G__33004,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33004),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33004){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33004,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33010){
var extmap__4478__auto__ = (function (){var G__33063 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33010,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33010)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33063);
} else {
return G__33063;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33010),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33010),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33067 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33067);
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
var G__33494 = (i + (1));
var G__33495 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33494;
ret = G__33495;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33087){
var vec__33088 = p__33087;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33088,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33088,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33094 = arguments.length;
switch (G__33094) {
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
var G__33095_33497 = new_node;
var G__33096_33498 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33095_33497,G__33096_33498);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33097_33499 = new_node;
var G__33098_33500 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33097_33499,G__33098_33500);

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
var G__33501 = ps;
var G__33502 = (i + (1));
el__$1 = G__33501;
i = G__33502;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33100 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33100);
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
var G__33104 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33104);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33110 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33110);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33114 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33117_33503 = cljs.core.seq(props);
var chunk__33118_33504 = null;
var count__33119_33505 = (0);
var i__33120_33506 = (0);
while(true){
if((i__33120_33506 < count__33119_33505)){
var vec__33130_33507 = chunk__33118_33504.cljs$core$IIndexed$_nth$arity$2(null,i__33120_33506);
var k_33508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130_33507,(0),null);
var v_33509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130_33507,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33508);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33508),v_33509);


var G__33510 = seq__33117_33503;
var G__33511 = chunk__33118_33504;
var G__33512 = count__33119_33505;
var G__33513 = (i__33120_33506 + (1));
seq__33117_33503 = G__33510;
chunk__33118_33504 = G__33511;
count__33119_33505 = G__33512;
i__33120_33506 = G__33513;
continue;
} else {
var temp__5735__auto___33514 = cljs.core.seq(seq__33117_33503);
if(temp__5735__auto___33514){
var seq__33117_33515__$1 = temp__5735__auto___33514;
if(cljs.core.chunked_seq_QMARK_(seq__33117_33515__$1)){
var c__4609__auto___33516 = cljs.core.chunk_first(seq__33117_33515__$1);
var G__33517 = cljs.core.chunk_rest(seq__33117_33515__$1);
var G__33518 = c__4609__auto___33516;
var G__33519 = cljs.core.count(c__4609__auto___33516);
var G__33520 = (0);
seq__33117_33503 = G__33517;
chunk__33118_33504 = G__33518;
count__33119_33505 = G__33519;
i__33120_33506 = G__33520;
continue;
} else {
var vec__33133_33521 = cljs.core.first(seq__33117_33515__$1);
var k_33522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133_33521,(0),null);
var v_33523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133_33521,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33522);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33522),v_33523);


var G__33524 = cljs.core.next(seq__33117_33515__$1);
var G__33525 = null;
var G__33526 = (0);
var G__33527 = (0);
seq__33117_33503 = G__33524;
chunk__33118_33504 = G__33525;
count__33119_33505 = G__33526;
i__33120_33506 = G__33527;
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
var vec__33139 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33139,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33139,(1),null);
var seq__33142_33528 = cljs.core.seq(node_children);
var chunk__33144_33529 = null;
var count__33145_33530 = (0);
var i__33146_33531 = (0);
while(true){
if((i__33146_33531 < count__33145_33530)){
var child_struct_33532 = chunk__33144_33529.cljs$core$IIndexed$_nth$arity$2(null,i__33146_33531);
if((!((child_struct_33532 == null)))){
if(typeof child_struct_33532 === 'string'){
var text_33533 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33533),child_struct_33532].join(''));
} else {
var children_33534 = shadow.dom.svg_node(child_struct_33532);
if(cljs.core.seq_QMARK_(children_33534)){
var seq__33170_33535 = cljs.core.seq(children_33534);
var chunk__33172_33536 = null;
var count__33173_33537 = (0);
var i__33174_33538 = (0);
while(true){
if((i__33174_33538 < count__33173_33537)){
var child_33539 = chunk__33172_33536.cljs$core$IIndexed$_nth$arity$2(null,i__33174_33538);
if(cljs.core.truth_(child_33539)){
node.appendChild(child_33539);


var G__33540 = seq__33170_33535;
var G__33541 = chunk__33172_33536;
var G__33542 = count__33173_33537;
var G__33543 = (i__33174_33538 + (1));
seq__33170_33535 = G__33540;
chunk__33172_33536 = G__33541;
count__33173_33537 = G__33542;
i__33174_33538 = G__33543;
continue;
} else {
var G__33544 = seq__33170_33535;
var G__33545 = chunk__33172_33536;
var G__33546 = count__33173_33537;
var G__33547 = (i__33174_33538 + (1));
seq__33170_33535 = G__33544;
chunk__33172_33536 = G__33545;
count__33173_33537 = G__33546;
i__33174_33538 = G__33547;
continue;
}
} else {
var temp__5735__auto___33548 = cljs.core.seq(seq__33170_33535);
if(temp__5735__auto___33548){
var seq__33170_33549__$1 = temp__5735__auto___33548;
if(cljs.core.chunked_seq_QMARK_(seq__33170_33549__$1)){
var c__4609__auto___33550 = cljs.core.chunk_first(seq__33170_33549__$1);
var G__33551 = cljs.core.chunk_rest(seq__33170_33549__$1);
var G__33552 = c__4609__auto___33550;
var G__33553 = cljs.core.count(c__4609__auto___33550);
var G__33554 = (0);
seq__33170_33535 = G__33551;
chunk__33172_33536 = G__33552;
count__33173_33537 = G__33553;
i__33174_33538 = G__33554;
continue;
} else {
var child_33555 = cljs.core.first(seq__33170_33549__$1);
if(cljs.core.truth_(child_33555)){
node.appendChild(child_33555);


var G__33556 = cljs.core.next(seq__33170_33549__$1);
var G__33557 = null;
var G__33558 = (0);
var G__33559 = (0);
seq__33170_33535 = G__33556;
chunk__33172_33536 = G__33557;
count__33173_33537 = G__33558;
i__33174_33538 = G__33559;
continue;
} else {
var G__33560 = cljs.core.next(seq__33170_33549__$1);
var G__33561 = null;
var G__33562 = (0);
var G__33563 = (0);
seq__33170_33535 = G__33560;
chunk__33172_33536 = G__33561;
count__33173_33537 = G__33562;
i__33174_33538 = G__33563;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33534);
}
}


var G__33564 = seq__33142_33528;
var G__33565 = chunk__33144_33529;
var G__33566 = count__33145_33530;
var G__33567 = (i__33146_33531 + (1));
seq__33142_33528 = G__33564;
chunk__33144_33529 = G__33565;
count__33145_33530 = G__33566;
i__33146_33531 = G__33567;
continue;
} else {
var G__33568 = seq__33142_33528;
var G__33569 = chunk__33144_33529;
var G__33570 = count__33145_33530;
var G__33571 = (i__33146_33531 + (1));
seq__33142_33528 = G__33568;
chunk__33144_33529 = G__33569;
count__33145_33530 = G__33570;
i__33146_33531 = G__33571;
continue;
}
} else {
var temp__5735__auto___33572 = cljs.core.seq(seq__33142_33528);
if(temp__5735__auto___33572){
var seq__33142_33573__$1 = temp__5735__auto___33572;
if(cljs.core.chunked_seq_QMARK_(seq__33142_33573__$1)){
var c__4609__auto___33574 = cljs.core.chunk_first(seq__33142_33573__$1);
var G__33575 = cljs.core.chunk_rest(seq__33142_33573__$1);
var G__33576 = c__4609__auto___33574;
var G__33577 = cljs.core.count(c__4609__auto___33574);
var G__33578 = (0);
seq__33142_33528 = G__33575;
chunk__33144_33529 = G__33576;
count__33145_33530 = G__33577;
i__33146_33531 = G__33578;
continue;
} else {
var child_struct_33579 = cljs.core.first(seq__33142_33573__$1);
if((!((child_struct_33579 == null)))){
if(typeof child_struct_33579 === 'string'){
var text_33580 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33580),child_struct_33579].join(''));
} else {
var children_33581 = shadow.dom.svg_node(child_struct_33579);
if(cljs.core.seq_QMARK_(children_33581)){
var seq__33186_33582 = cljs.core.seq(children_33581);
var chunk__33188_33583 = null;
var count__33189_33584 = (0);
var i__33190_33585 = (0);
while(true){
if((i__33190_33585 < count__33189_33584)){
var child_33586 = chunk__33188_33583.cljs$core$IIndexed$_nth$arity$2(null,i__33190_33585);
if(cljs.core.truth_(child_33586)){
node.appendChild(child_33586);


var G__33587 = seq__33186_33582;
var G__33588 = chunk__33188_33583;
var G__33589 = count__33189_33584;
var G__33590 = (i__33190_33585 + (1));
seq__33186_33582 = G__33587;
chunk__33188_33583 = G__33588;
count__33189_33584 = G__33589;
i__33190_33585 = G__33590;
continue;
} else {
var G__33591 = seq__33186_33582;
var G__33592 = chunk__33188_33583;
var G__33593 = count__33189_33584;
var G__33594 = (i__33190_33585 + (1));
seq__33186_33582 = G__33591;
chunk__33188_33583 = G__33592;
count__33189_33584 = G__33593;
i__33190_33585 = G__33594;
continue;
}
} else {
var temp__5735__auto___33595__$1 = cljs.core.seq(seq__33186_33582);
if(temp__5735__auto___33595__$1){
var seq__33186_33596__$1 = temp__5735__auto___33595__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33186_33596__$1)){
var c__4609__auto___33597 = cljs.core.chunk_first(seq__33186_33596__$1);
var G__33598 = cljs.core.chunk_rest(seq__33186_33596__$1);
var G__33599 = c__4609__auto___33597;
var G__33600 = cljs.core.count(c__4609__auto___33597);
var G__33601 = (0);
seq__33186_33582 = G__33598;
chunk__33188_33583 = G__33599;
count__33189_33584 = G__33600;
i__33190_33585 = G__33601;
continue;
} else {
var child_33602 = cljs.core.first(seq__33186_33596__$1);
if(cljs.core.truth_(child_33602)){
node.appendChild(child_33602);


var G__33603 = cljs.core.next(seq__33186_33596__$1);
var G__33604 = null;
var G__33605 = (0);
var G__33606 = (0);
seq__33186_33582 = G__33603;
chunk__33188_33583 = G__33604;
count__33189_33584 = G__33605;
i__33190_33585 = G__33606;
continue;
} else {
var G__33607 = cljs.core.next(seq__33186_33596__$1);
var G__33608 = null;
var G__33609 = (0);
var G__33610 = (0);
seq__33186_33582 = G__33607;
chunk__33188_33583 = G__33608;
count__33189_33584 = G__33609;
i__33190_33585 = G__33610;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33581);
}
}


var G__33611 = cljs.core.next(seq__33142_33573__$1);
var G__33612 = null;
var G__33613 = (0);
var G__33614 = (0);
seq__33142_33528 = G__33611;
chunk__33144_33529 = G__33612;
count__33145_33530 = G__33613;
i__33146_33531 = G__33614;
continue;
} else {
var G__33615 = cljs.core.next(seq__33142_33573__$1);
var G__33616 = null;
var G__33617 = (0);
var G__33618 = (0);
seq__33142_33528 = G__33615;
chunk__33144_33529 = G__33616;
count__33145_33530 = G__33617;
i__33146_33531 = G__33618;
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

var G__33194_33619 = shadow.dom._to_svg;
var G__33195_33620 = "string";
var G__33196_33621 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__33194_33619,G__33195_33620,G__33196_33621);

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

var G__33200_33622 = shadow.dom._to_svg;
var G__33201_33623 = "null";
var G__33202_33624 = (function (_){
return null;
});
goog.object.set(G__33200_33622,G__33201_33623,G__33202_33624);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33625 = arguments.length;
var i__4790__auto___33626 = (0);
while(true){
if((i__4790__auto___33626 < len__4789__auto___33625)){
args__4795__auto__.push((arguments[i__4790__auto___33626]));

var G__33627 = (i__4790__auto___33626 + (1));
i__4790__auto___33626 = G__33627;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33203){
var G__33204 = cljs.core.first(seq33203);
var seq33203__$1 = cljs.core.next(seq33203);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33204,seq33203__$1);
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
var G__33206 = arguments.length;
switch (G__33206) {
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
var G__33207_33629 = shadow.dom.dom_node(el);
var G__33208_33630 = cljs.core.name(event);
var G__33209_33631 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33207_33629,G__33208_33630,G__33209_33631) : shadow.dom.dom_listen.call(null,G__33207_33629,G__33208_33630,G__33209_33631));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__30529__auto___33632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_33214){
var state_val_33215 = (state_33214[(1)]);
if((state_val_33215 === (1))){
var state_33214__$1 = state_33214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33214__$1,(2),once_or_cleanup);
} else {
if((state_val_33215 === (2))){
var inst_33211 = (state_33214[(2)]);
var inst_33212 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33214__$1 = (function (){var statearr_33217 = state_33214;
(statearr_33217[(7)] = inst_33211);

return statearr_33217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33214__$1,inst_33212);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30218__auto__ = null;
var shadow$dom$state_machine__30218__auto____0 = (function (){
var statearr_33218 = [null,null,null,null,null,null,null,null];
(statearr_33218[(0)] = shadow$dom$state_machine__30218__auto__);

(statearr_33218[(1)] = (1));

return statearr_33218;
});
var shadow$dom$state_machine__30218__auto____1 = (function (state_33214){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_33214);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e33219){if((e33219 instanceof Object)){
var ex__30221__auto__ = e33219;
var statearr_33220_33633 = state_33214;
(statearr_33220_33633[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33634 = state_33214;
state_33214 = G__33634;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
shadow$dom$state_machine__30218__auto__ = function(state_33214){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30218__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30218__auto____1.call(this,state_33214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30218__auto____0;
shadow$dom$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30218__auto____1;
return shadow$dom$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_33221 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_33221[(6)] = c__30529__auto___33632);

return statearr_33221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
