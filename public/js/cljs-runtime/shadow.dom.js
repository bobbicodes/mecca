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
return cljs.core.cons((coll[idx]),(function (){var G__32550 = coll;
var G__32551 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32550,G__32551) : shadow.dom.lazy_native_coll_seq.call(null,G__32550,G__32551));
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
var G__32574 = arguments.length;
switch (G__32574) {
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
var G__32583 = arguments.length;
switch (G__32583) {
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
var G__32589 = arguments.length;
switch (G__32589) {
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
var G__32599 = arguments.length;
switch (G__32599) {
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
var G__32606 = arguments.length;
switch (G__32606) {
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
var G__32607 = document;
var G__32608 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32607,G__32608);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32609 = shadow.dom.dom_node(parent);
var G__32610 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32609,G__32610);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32611 = shadow.dom.dom_node(el);
var G__32612 = cls;
return goog.dom.classlist.add(G__32611,G__32612);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32613 = shadow.dom.dom_node(el);
var G__32614 = cls;
return goog.dom.classlist.remove(G__32613,G__32614);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32616 = arguments.length;
switch (G__32616) {
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
var G__32617 = shadow.dom.dom_node(el);
var G__32618 = cls;
return goog.dom.classlist.toggle(G__32617,G__32618);
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
}catch (e32626){if((e32626 instanceof Object)){
var e = e32626;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32626;

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
var seq__32627 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32628 = null;
var count__32629 = (0);
var i__32630 = (0);
while(true){
if((i__32630 < count__32629)){
var el = chunk__32628.cljs$core$IIndexed$_nth$arity$2(null,i__32630);
var handler_33291__$1 = ((function (seq__32627,chunk__32628,count__32629,i__32630,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32627,chunk__32628,count__32629,i__32630,el))
;
var G__32637_33292 = el;
var G__32638_33293 = cljs.core.name(ev);
var G__32639_33294 = handler_33291__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32637_33292,G__32638_33293,G__32639_33294) : shadow.dom.dom_listen.call(null,G__32637_33292,G__32638_33293,G__32639_33294));


var G__33295 = seq__32627;
var G__33296 = chunk__32628;
var G__33297 = count__32629;
var G__33298 = (i__32630 + (1));
seq__32627 = G__33295;
chunk__32628 = G__33296;
count__32629 = G__33297;
i__32630 = G__33298;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32627);
if(temp__5735__auto__){
var seq__32627__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32627__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32627__$1);
var G__33300 = cljs.core.chunk_rest(seq__32627__$1);
var G__33301 = c__4609__auto__;
var G__33302 = cljs.core.count(c__4609__auto__);
var G__33303 = (0);
seq__32627 = G__33300;
chunk__32628 = G__33301;
count__32629 = G__33302;
i__32630 = G__33303;
continue;
} else {
var el = cljs.core.first(seq__32627__$1);
var handler_33304__$1 = ((function (seq__32627,chunk__32628,count__32629,i__32630,el,seq__32627__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32627,chunk__32628,count__32629,i__32630,el,seq__32627__$1,temp__5735__auto__))
;
var G__32640_33305 = el;
var G__32641_33306 = cljs.core.name(ev);
var G__32642_33307 = handler_33304__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32640_33305,G__32641_33306,G__32642_33307) : shadow.dom.dom_listen.call(null,G__32640_33305,G__32641_33306,G__32642_33307));


var G__33308 = cljs.core.next(seq__32627__$1);
var G__33309 = null;
var G__33310 = (0);
var G__33311 = (0);
seq__32627 = G__33308;
chunk__32628 = G__33309;
count__32629 = G__33310;
i__32630 = G__33311;
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
var G__32644 = arguments.length;
switch (G__32644) {
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
var G__32648 = shadow.dom.dom_node(el);
var G__32649 = cljs.core.name(ev);
var G__32650 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32648,G__32649,G__32650) : shadow.dom.dom_listen.call(null,G__32648,G__32649,G__32650));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32653 = shadow.dom.dom_node(el);
var G__32654 = cljs.core.name(ev);
var G__32655 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32653,G__32654,G__32655) : shadow.dom.dom_listen_remove.call(null,G__32653,G__32654,G__32655));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32658 = cljs.core.seq(events);
var chunk__32659 = null;
var count__32660 = (0);
var i__32661 = (0);
while(true){
if((i__32661 < count__32660)){
var vec__32674 = chunk__32659.cljs$core$IIndexed$_nth$arity$2(null,i__32661);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32674,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32674,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33318 = seq__32658;
var G__33319 = chunk__32659;
var G__33320 = count__32660;
var G__33321 = (i__32661 + (1));
seq__32658 = G__33318;
chunk__32659 = G__33319;
count__32660 = G__33320;
i__32661 = G__33321;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32658);
if(temp__5735__auto__){
var seq__32658__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32658__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32658__$1);
var G__33323 = cljs.core.chunk_rest(seq__32658__$1);
var G__33324 = c__4609__auto__;
var G__33325 = cljs.core.count(c__4609__auto__);
var G__33326 = (0);
seq__32658 = G__33323;
chunk__32659 = G__33324;
count__32660 = G__33325;
i__32661 = G__33326;
continue;
} else {
var vec__32679 = cljs.core.first(seq__32658__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32679,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32679,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33328 = cljs.core.next(seq__32658__$1);
var G__33329 = null;
var G__33330 = (0);
var G__33331 = (0);
seq__32658 = G__33328;
chunk__32659 = G__33329;
count__32660 = G__33330;
i__32661 = G__33331;
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
var seq__32684 = cljs.core.seq(styles);
var chunk__32685 = null;
var count__32686 = (0);
var i__32687 = (0);
while(true){
if((i__32687 < count__32686)){
var vec__32721 = chunk__32685.cljs$core$IIndexed$_nth$arity$2(null,i__32687);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32721,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32721,(1),null);
var G__32724_33334 = dom;
var G__32725_33335 = cljs.core.name(k);
var G__32726_33336 = (((v == null))?"":v);
goog.style.setStyle(G__32724_33334,G__32725_33335,G__32726_33336);


var G__33337 = seq__32684;
var G__33338 = chunk__32685;
var G__33339 = count__32686;
var G__33340 = (i__32687 + (1));
seq__32684 = G__33337;
chunk__32685 = G__33338;
count__32686 = G__33339;
i__32687 = G__33340;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32684);
if(temp__5735__auto__){
var seq__32684__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32684__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32684__$1);
var G__33341 = cljs.core.chunk_rest(seq__32684__$1);
var G__33342 = c__4609__auto__;
var G__33343 = cljs.core.count(c__4609__auto__);
var G__33344 = (0);
seq__32684 = G__33341;
chunk__32685 = G__33342;
count__32686 = G__33343;
i__32687 = G__33344;
continue;
} else {
var vec__32728 = cljs.core.first(seq__32684__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32728,(1),null);
var G__32733_33345 = dom;
var G__32734_33346 = cljs.core.name(k);
var G__32735_33347 = (((v == null))?"":v);
goog.style.setStyle(G__32733_33345,G__32734_33346,G__32735_33347);


var G__33348 = cljs.core.next(seq__32684__$1);
var G__33349 = null;
var G__33350 = (0);
var G__33351 = (0);
seq__32684 = G__33348;
chunk__32685 = G__33349;
count__32686 = G__33350;
i__32687 = G__33351;
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
var G__32740_33352 = key;
var G__32740_33353__$1 = (((G__32740_33352 instanceof cljs.core.Keyword))?G__32740_33352.fqn:null);
switch (G__32740_33353__$1) {
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
var ks_33355 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33355,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33355,"aria-");
}
})())){
el.setAttribute(ks_33355,value);
} else {
(el[ks_33355] = value);
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
var G__32748 = shadow.dom.dom_node(el);
var G__32749 = cls;
return goog.dom.classlist.contains(G__32748,G__32749);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32763){
var map__32764 = p__32763;
var map__32764__$1 = (((((!((map__32764 == null))))?(((((map__32764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32764):map__32764);
var props = map__32764__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32764__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32768 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32768,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32768,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32768,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32771 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32771,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32771;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32773 = arguments.length;
switch (G__32773) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32774){
var vec__32775 = p__32774;
var seq__32776 = cljs.core.seq(vec__32775);
var first__32777 = cljs.core.first(seq__32776);
var seq__32776__$1 = cljs.core.next(seq__32776);
var nn = first__32777;
var first__32777__$1 = cljs.core.first(seq__32776__$1);
var seq__32776__$2 = cljs.core.next(seq__32776__$1);
var np = first__32777__$1;
var nc = seq__32776__$2;
var node = vec__32775;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32778 = nn;
var G__32779 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32778,G__32779) : create_fn.call(null,G__32778,G__32779));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32780 = nn;
var G__32781 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32780,G__32781) : create_fn.call(null,G__32780,G__32781));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32782 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32782,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32782,(1),null);
var seq__32785_33362 = cljs.core.seq(node_children);
var chunk__32786_33363 = null;
var count__32787_33364 = (0);
var i__32788_33365 = (0);
while(true){
if((i__32788_33365 < count__32787_33364)){
var child_struct_33366 = chunk__32786_33363.cljs$core$IIndexed$_nth$arity$2(null,i__32788_33365);
var children_33368 = shadow.dom.dom_node(child_struct_33366);
if(cljs.core.seq_QMARK_(children_33368)){
var seq__32801_33369 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33368));
var chunk__32803_33370 = null;
var count__32804_33371 = (0);
var i__32805_33372 = (0);
while(true){
if((i__32805_33372 < count__32804_33371)){
var child_33374 = chunk__32803_33370.cljs$core$IIndexed$_nth$arity$2(null,i__32805_33372);
if(cljs.core.truth_(child_33374)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33374);


var G__33375 = seq__32801_33369;
var G__33376 = chunk__32803_33370;
var G__33377 = count__32804_33371;
var G__33378 = (i__32805_33372 + (1));
seq__32801_33369 = G__33375;
chunk__32803_33370 = G__33376;
count__32804_33371 = G__33377;
i__32805_33372 = G__33378;
continue;
} else {
var G__33379 = seq__32801_33369;
var G__33380 = chunk__32803_33370;
var G__33381 = count__32804_33371;
var G__33382 = (i__32805_33372 + (1));
seq__32801_33369 = G__33379;
chunk__32803_33370 = G__33380;
count__32804_33371 = G__33381;
i__32805_33372 = G__33382;
continue;
}
} else {
var temp__5735__auto___33383 = cljs.core.seq(seq__32801_33369);
if(temp__5735__auto___33383){
var seq__32801_33384__$1 = temp__5735__auto___33383;
if(cljs.core.chunked_seq_QMARK_(seq__32801_33384__$1)){
var c__4609__auto___33385 = cljs.core.chunk_first(seq__32801_33384__$1);
var G__33386 = cljs.core.chunk_rest(seq__32801_33384__$1);
var G__33387 = c__4609__auto___33385;
var G__33388 = cljs.core.count(c__4609__auto___33385);
var G__33389 = (0);
seq__32801_33369 = G__33386;
chunk__32803_33370 = G__33387;
count__32804_33371 = G__33388;
i__32805_33372 = G__33389;
continue;
} else {
var child_33390 = cljs.core.first(seq__32801_33384__$1);
if(cljs.core.truth_(child_33390)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33390);


var G__33391 = cljs.core.next(seq__32801_33384__$1);
var G__33392 = null;
var G__33393 = (0);
var G__33394 = (0);
seq__32801_33369 = G__33391;
chunk__32803_33370 = G__33392;
count__32804_33371 = G__33393;
i__32805_33372 = G__33394;
continue;
} else {
var G__33396 = cljs.core.next(seq__32801_33384__$1);
var G__33397 = null;
var G__33398 = (0);
var G__33399 = (0);
seq__32801_33369 = G__33396;
chunk__32803_33370 = G__33397;
count__32804_33371 = G__33398;
i__32805_33372 = G__33399;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33368);
}


var G__33400 = seq__32785_33362;
var G__33401 = chunk__32786_33363;
var G__33402 = count__32787_33364;
var G__33403 = (i__32788_33365 + (1));
seq__32785_33362 = G__33400;
chunk__32786_33363 = G__33401;
count__32787_33364 = G__33402;
i__32788_33365 = G__33403;
continue;
} else {
var temp__5735__auto___33404 = cljs.core.seq(seq__32785_33362);
if(temp__5735__auto___33404){
var seq__32785_33405__$1 = temp__5735__auto___33404;
if(cljs.core.chunked_seq_QMARK_(seq__32785_33405__$1)){
var c__4609__auto___33406 = cljs.core.chunk_first(seq__32785_33405__$1);
var G__33407 = cljs.core.chunk_rest(seq__32785_33405__$1);
var G__33408 = c__4609__auto___33406;
var G__33409 = cljs.core.count(c__4609__auto___33406);
var G__33410 = (0);
seq__32785_33362 = G__33407;
chunk__32786_33363 = G__33408;
count__32787_33364 = G__33409;
i__32788_33365 = G__33410;
continue;
} else {
var child_struct_33411 = cljs.core.first(seq__32785_33405__$1);
var children_33412 = shadow.dom.dom_node(child_struct_33411);
if(cljs.core.seq_QMARK_(children_33412)){
var seq__32808_33413 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33412));
var chunk__32810_33414 = null;
var count__32811_33415 = (0);
var i__32812_33416 = (0);
while(true){
if((i__32812_33416 < count__32811_33415)){
var child_33419 = chunk__32810_33414.cljs$core$IIndexed$_nth$arity$2(null,i__32812_33416);
if(cljs.core.truth_(child_33419)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33419);


var G__33421 = seq__32808_33413;
var G__33422 = chunk__32810_33414;
var G__33423 = count__32811_33415;
var G__33424 = (i__32812_33416 + (1));
seq__32808_33413 = G__33421;
chunk__32810_33414 = G__33422;
count__32811_33415 = G__33423;
i__32812_33416 = G__33424;
continue;
} else {
var G__33448 = seq__32808_33413;
var G__33449 = chunk__32810_33414;
var G__33450 = count__32811_33415;
var G__33451 = (i__32812_33416 + (1));
seq__32808_33413 = G__33448;
chunk__32810_33414 = G__33449;
count__32811_33415 = G__33450;
i__32812_33416 = G__33451;
continue;
}
} else {
var temp__5735__auto___33452__$1 = cljs.core.seq(seq__32808_33413);
if(temp__5735__auto___33452__$1){
var seq__32808_33453__$1 = temp__5735__auto___33452__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32808_33453__$1)){
var c__4609__auto___33454 = cljs.core.chunk_first(seq__32808_33453__$1);
var G__33455 = cljs.core.chunk_rest(seq__32808_33453__$1);
var G__33456 = c__4609__auto___33454;
var G__33457 = cljs.core.count(c__4609__auto___33454);
var G__33458 = (0);
seq__32808_33413 = G__33455;
chunk__32810_33414 = G__33456;
count__32811_33415 = G__33457;
i__32812_33416 = G__33458;
continue;
} else {
var child_33459 = cljs.core.first(seq__32808_33453__$1);
if(cljs.core.truth_(child_33459)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33459);


var G__33460 = cljs.core.next(seq__32808_33453__$1);
var G__33461 = null;
var G__33462 = (0);
var G__33463 = (0);
seq__32808_33413 = G__33460;
chunk__32810_33414 = G__33461;
count__32811_33415 = G__33462;
i__32812_33416 = G__33463;
continue;
} else {
var G__33464 = cljs.core.next(seq__32808_33453__$1);
var G__33465 = null;
var G__33466 = (0);
var G__33467 = (0);
seq__32808_33413 = G__33464;
chunk__32810_33414 = G__33465;
count__32811_33415 = G__33466;
i__32812_33416 = G__33467;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33412);
}


var G__33468 = cljs.core.next(seq__32785_33405__$1);
var G__33469 = null;
var G__33470 = (0);
var G__33471 = (0);
seq__32785_33362 = G__33468;
chunk__32786_33363 = G__33469;
count__32787_33364 = G__33470;
i__32788_33365 = G__33471;
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
var G__32820 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32820);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32825 = cljs.core.seq(node);
var chunk__32826 = null;
var count__32827 = (0);
var i__32828 = (0);
while(true){
if((i__32828 < count__32827)){
var n = chunk__32826.cljs$core$IIndexed$_nth$arity$2(null,i__32828);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33472 = seq__32825;
var G__33473 = chunk__32826;
var G__33474 = count__32827;
var G__33475 = (i__32828 + (1));
seq__32825 = G__33472;
chunk__32826 = G__33473;
count__32827 = G__33474;
i__32828 = G__33475;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32825);
if(temp__5735__auto__){
var seq__32825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32825__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32825__$1);
var G__33476 = cljs.core.chunk_rest(seq__32825__$1);
var G__33477 = c__4609__auto__;
var G__33478 = cljs.core.count(c__4609__auto__);
var G__33479 = (0);
seq__32825 = G__33476;
chunk__32826 = G__33477;
count__32827 = G__33478;
i__32828 = G__33479;
continue;
} else {
var n = cljs.core.first(seq__32825__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33480 = cljs.core.next(seq__32825__$1);
var G__33481 = null;
var G__33482 = (0);
var G__33483 = (0);
seq__32825 = G__33480;
chunk__32826 = G__33481;
count__32827 = G__33482;
i__32828 = G__33483;
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
var G__32855 = shadow.dom.dom_node(new$);
var G__32856 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32855,G__32856);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32863 = arguments.length;
switch (G__32863) {
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
var G__32882 = arguments.length;
switch (G__32882) {
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
var G__32885 = arguments.length;
switch (G__32885) {
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
var len__4789__auto___33491 = arguments.length;
var i__4790__auto___33492 = (0);
while(true){
if((i__4790__auto___33492 < len__4789__auto___33491)){
args__4795__auto__.push((arguments[i__4790__auto___33492]));

var G__33497 = (i__4790__auto___33492 + (1));
i__4790__auto___33492 = G__33497;
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
var seq__32893_33501 = cljs.core.seq(nodes);
var chunk__32894_33502 = null;
var count__32895_33503 = (0);
var i__32896_33504 = (0);
while(true){
if((i__32896_33504 < count__32895_33503)){
var node_33505 = chunk__32894_33502.cljs$core$IIndexed$_nth$arity$2(null,i__32896_33504);
fragment.appendChild(shadow.dom._to_dom(node_33505));


var G__33506 = seq__32893_33501;
var G__33507 = chunk__32894_33502;
var G__33508 = count__32895_33503;
var G__33509 = (i__32896_33504 + (1));
seq__32893_33501 = G__33506;
chunk__32894_33502 = G__33507;
count__32895_33503 = G__33508;
i__32896_33504 = G__33509;
continue;
} else {
var temp__5735__auto___33510 = cljs.core.seq(seq__32893_33501);
if(temp__5735__auto___33510){
var seq__32893_33511__$1 = temp__5735__auto___33510;
if(cljs.core.chunked_seq_QMARK_(seq__32893_33511__$1)){
var c__4609__auto___33512 = cljs.core.chunk_first(seq__32893_33511__$1);
var G__33513 = cljs.core.chunk_rest(seq__32893_33511__$1);
var G__33514 = c__4609__auto___33512;
var G__33515 = cljs.core.count(c__4609__auto___33512);
var G__33516 = (0);
seq__32893_33501 = G__33513;
chunk__32894_33502 = G__33514;
count__32895_33503 = G__33515;
i__32896_33504 = G__33516;
continue;
} else {
var node_33517 = cljs.core.first(seq__32893_33511__$1);
fragment.appendChild(shadow.dom._to_dom(node_33517));


var G__33518 = cljs.core.next(seq__32893_33511__$1);
var G__33519 = null;
var G__33520 = (0);
var G__33521 = (0);
seq__32893_33501 = G__33518;
chunk__32894_33502 = G__33519;
count__32895_33503 = G__33520;
i__32896_33504 = G__33521;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32892){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32892));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32897_33522 = cljs.core.seq(scripts);
var chunk__32898_33523 = null;
var count__32899_33524 = (0);
var i__32900_33525 = (0);
while(true){
if((i__32900_33525 < count__32899_33524)){
var vec__32907_33526 = chunk__32898_33523.cljs$core$IIndexed$_nth$arity$2(null,i__32900_33525);
var script_tag_33527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907_33526,(0),null);
var script_body_33528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907_33526,(1),null);
eval(script_body_33528);


var G__33532 = seq__32897_33522;
var G__33533 = chunk__32898_33523;
var G__33534 = count__32899_33524;
var G__33535 = (i__32900_33525 + (1));
seq__32897_33522 = G__33532;
chunk__32898_33523 = G__33533;
count__32899_33524 = G__33534;
i__32900_33525 = G__33535;
continue;
} else {
var temp__5735__auto___33536 = cljs.core.seq(seq__32897_33522);
if(temp__5735__auto___33536){
var seq__32897_33537__$1 = temp__5735__auto___33536;
if(cljs.core.chunked_seq_QMARK_(seq__32897_33537__$1)){
var c__4609__auto___33538 = cljs.core.chunk_first(seq__32897_33537__$1);
var G__33539 = cljs.core.chunk_rest(seq__32897_33537__$1);
var G__33540 = c__4609__auto___33538;
var G__33541 = cljs.core.count(c__4609__auto___33538);
var G__33542 = (0);
seq__32897_33522 = G__33539;
chunk__32898_33523 = G__33540;
count__32899_33524 = G__33541;
i__32900_33525 = G__33542;
continue;
} else {
var vec__32910_33543 = cljs.core.first(seq__32897_33537__$1);
var script_tag_33544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910_33543,(0),null);
var script_body_33545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32910_33543,(1),null);
eval(script_body_33545);


var G__33546 = cljs.core.next(seq__32897_33537__$1);
var G__33547 = null;
var G__33548 = (0);
var G__33549 = (0);
seq__32897_33522 = G__33546;
chunk__32898_33523 = G__33547;
count__32899_33524 = G__33548;
i__32900_33525 = G__33549;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32913){
var vec__32914 = p__32913;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32914,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32914,(1),null);
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
var G__32917 = shadow.dom.dom_node(el);
var G__32918 = cls;
return goog.dom.getAncestorByClass(G__32917,G__32918);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32922 = arguments.length;
switch (G__32922) {
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
var G__32960 = shadow.dom.dom_node(el);
var G__32961 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32960,G__32961);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32965 = shadow.dom.dom_node(el);
var G__32966 = cljs.core.name(tag);
var G__32967 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32965,G__32966,G__32967);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32970 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32970);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32974 = shadow.dom.dom_node(dom);
var G__32975 = value;
return goog.dom.forms.setValue(G__32974,G__32975);
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
var seq__32978 = cljs.core.seq(style_keys);
var chunk__32979 = null;
var count__32980 = (0);
var i__32981 = (0);
while(true){
if((i__32981 < count__32980)){
var it = chunk__32979.cljs$core$IIndexed$_nth$arity$2(null,i__32981);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33557 = seq__32978;
var G__33558 = chunk__32979;
var G__33559 = count__32980;
var G__33560 = (i__32981 + (1));
seq__32978 = G__33557;
chunk__32979 = G__33558;
count__32980 = G__33559;
i__32981 = G__33560;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32978);
if(temp__5735__auto__){
var seq__32978__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32978__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32978__$1);
var G__33561 = cljs.core.chunk_rest(seq__32978__$1);
var G__33562 = c__4609__auto__;
var G__33563 = cljs.core.count(c__4609__auto__);
var G__33564 = (0);
seq__32978 = G__33561;
chunk__32979 = G__33562;
count__32980 = G__33563;
i__32981 = G__33564;
continue;
} else {
var it = cljs.core.first(seq__32978__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33565 = cljs.core.next(seq__32978__$1);
var G__33566 = null;
var G__33567 = (0);
var G__33568 = (0);
seq__32978 = G__33565;
chunk__32979 = G__33566;
count__32980 = G__33567;
i__32981 = G__33568;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32984,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32989 = k32984;
var G__32989__$1 = (((G__32989 instanceof cljs.core.Keyword))?G__32989.fqn:null);
switch (G__32989__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32984,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32990){
var vec__32991 = p__32990;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32991,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32991,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32983){
var self__ = this;
var G__32983__$1 = this;
return (new cljs.core.RecordIter((0),G__32983__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__32996 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32996(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32985,other32986){
var self__ = this;
var this32985__$1 = this;
return (((!((other32986 == null)))) && ((this32985__$1.constructor === other32986.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32985__$1.x,other32986.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32985__$1.y,other32986.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32985__$1.__extmap,other32986.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32983){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33004 = cljs.core.keyword_identical_QMARK_;
var expr__33005 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__33007 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33008 = expr__33005;
return (pred__33004.cljs$core$IFn$_invoke$arity$2 ? pred__33004.cljs$core$IFn$_invoke$arity$2(G__33007,G__33008) : pred__33004.call(null,G__33007,G__33008));
})())){
return (new shadow.dom.Coordinate(G__32983,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33011 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33012 = expr__33005;
return (pred__33004.cljs$core$IFn$_invoke$arity$2 ? pred__33004.cljs$core$IFn$_invoke$arity$2(G__33011,G__33012) : pred__33004.call(null,G__33011,G__33012));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32983,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32983),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32983){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32983,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32987){
var extmap__4478__auto__ = (function (){var G__33021 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32987,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32987)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33021);
} else {
return G__33021;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32987),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32987),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33025 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33025);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33028 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33028);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33030 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33030);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33032,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33040 = k33032;
var G__33040__$1 = (((G__33040 instanceof cljs.core.Keyword))?G__33040.fqn:null);
switch (G__33040__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33032,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33043){
var vec__33044 = p__33043;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33044,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33044,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33031){
var self__ = this;
var G__33031__$1 = this;
return (new cljs.core.RecordIter((0),G__33031__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__33050 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__33050(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33033,other33034){
var self__ = this;
var this33033__$1 = this;
return (((!((other33034 == null)))) && ((this33033__$1.constructor === other33034.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33033__$1.w,other33034.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33033__$1.h,other33034.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33033__$1.__extmap,other33034.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33031){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33059 = cljs.core.keyword_identical_QMARK_;
var expr__33060 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__33062 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33063 = expr__33060;
return (pred__33059.cljs$core$IFn$_invoke$arity$2 ? pred__33059.cljs$core$IFn$_invoke$arity$2(G__33062,G__33063) : pred__33059.call(null,G__33062,G__33063));
})())){
return (new shadow.dom.Size(G__33031,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33064 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33065 = expr__33060;
return (pred__33059.cljs$core$IFn$_invoke$arity$2 ? pred__33059.cljs$core$IFn$_invoke$arity$2(G__33064,G__33065) : pred__33059.call(null,G__33064,G__33065));
})())){
return (new shadow.dom.Size(self__.w,G__33031,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33031),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33031){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33031,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33036){
var extmap__4478__auto__ = (function (){var G__33071 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33036,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33036)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33071);
} else {
return G__33071;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33036),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33036),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33076 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33076);
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
var G__33592 = (i + (1));
var G__33593 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33592;
ret = G__33593;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33093){
var vec__33094 = p__33093;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33094,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33094,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33100 = arguments.length;
switch (G__33100) {
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
var G__33108_33602 = new_node;
var G__33109_33603 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33108_33602,G__33109_33603);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33113_33604 = new_node;
var G__33115_33605 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33113_33604,G__33115_33605);

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
var G__33606 = ps;
var G__33607 = (i + (1));
el__$1 = G__33606;
i = G__33607;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33120 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33120);
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
var G__33121 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33121);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33122 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33122);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33123 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33123,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33123,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33123,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33126_33609 = cljs.core.seq(props);
var chunk__33127_33610 = null;
var count__33128_33611 = (0);
var i__33129_33612 = (0);
while(true){
if((i__33129_33612 < count__33128_33611)){
var vec__33136_33613 = chunk__33127_33610.cljs$core$IIndexed$_nth$arity$2(null,i__33129_33612);
var k_33614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33136_33613,(0),null);
var v_33615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33136_33613,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33614);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33614),v_33615);


var G__33617 = seq__33126_33609;
var G__33618 = chunk__33127_33610;
var G__33619 = count__33128_33611;
var G__33620 = (i__33129_33612 + (1));
seq__33126_33609 = G__33617;
chunk__33127_33610 = G__33618;
count__33128_33611 = G__33619;
i__33129_33612 = G__33620;
continue;
} else {
var temp__5735__auto___33621 = cljs.core.seq(seq__33126_33609);
if(temp__5735__auto___33621){
var seq__33126_33622__$1 = temp__5735__auto___33621;
if(cljs.core.chunked_seq_QMARK_(seq__33126_33622__$1)){
var c__4609__auto___33623 = cljs.core.chunk_first(seq__33126_33622__$1);
var G__33624 = cljs.core.chunk_rest(seq__33126_33622__$1);
var G__33625 = c__4609__auto___33623;
var G__33626 = cljs.core.count(c__4609__auto___33623);
var G__33627 = (0);
seq__33126_33609 = G__33624;
chunk__33127_33610 = G__33625;
count__33128_33611 = G__33626;
i__33129_33612 = G__33627;
continue;
} else {
var vec__33140_33628 = cljs.core.first(seq__33126_33622__$1);
var k_33629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140_33628,(0),null);
var v_33630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140_33628,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33629);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33629),v_33630);


var G__33631 = cljs.core.next(seq__33126_33622__$1);
var G__33632 = null;
var G__33633 = (0);
var G__33634 = (0);
seq__33126_33609 = G__33631;
chunk__33127_33610 = G__33632;
count__33128_33611 = G__33633;
i__33129_33612 = G__33634;
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
var vec__33151 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33151,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33151,(1),null);
var seq__33156_33635 = cljs.core.seq(node_children);
var chunk__33158_33636 = null;
var count__33159_33637 = (0);
var i__33160_33638 = (0);
while(true){
if((i__33160_33638 < count__33159_33637)){
var child_struct_33639 = chunk__33158_33636.cljs$core$IIndexed$_nth$arity$2(null,i__33160_33638);
if((!((child_struct_33639 == null)))){
if(typeof child_struct_33639 === 'string'){
var text_33640 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33640),child_struct_33639].join(''));
} else {
var children_33641 = shadow.dom.svg_node(child_struct_33639);
if(cljs.core.seq_QMARK_(children_33641)){
var seq__33190_33642 = cljs.core.seq(children_33641);
var chunk__33192_33643 = null;
var count__33193_33644 = (0);
var i__33194_33645 = (0);
while(true){
if((i__33194_33645 < count__33193_33644)){
var child_33646 = chunk__33192_33643.cljs$core$IIndexed$_nth$arity$2(null,i__33194_33645);
if(cljs.core.truth_(child_33646)){
node.appendChild(child_33646);


var G__33647 = seq__33190_33642;
var G__33648 = chunk__33192_33643;
var G__33649 = count__33193_33644;
var G__33650 = (i__33194_33645 + (1));
seq__33190_33642 = G__33647;
chunk__33192_33643 = G__33648;
count__33193_33644 = G__33649;
i__33194_33645 = G__33650;
continue;
} else {
var G__33651 = seq__33190_33642;
var G__33652 = chunk__33192_33643;
var G__33653 = count__33193_33644;
var G__33654 = (i__33194_33645 + (1));
seq__33190_33642 = G__33651;
chunk__33192_33643 = G__33652;
count__33193_33644 = G__33653;
i__33194_33645 = G__33654;
continue;
}
} else {
var temp__5735__auto___33655 = cljs.core.seq(seq__33190_33642);
if(temp__5735__auto___33655){
var seq__33190_33656__$1 = temp__5735__auto___33655;
if(cljs.core.chunked_seq_QMARK_(seq__33190_33656__$1)){
var c__4609__auto___33657 = cljs.core.chunk_first(seq__33190_33656__$1);
var G__33658 = cljs.core.chunk_rest(seq__33190_33656__$1);
var G__33659 = c__4609__auto___33657;
var G__33660 = cljs.core.count(c__4609__auto___33657);
var G__33661 = (0);
seq__33190_33642 = G__33658;
chunk__33192_33643 = G__33659;
count__33193_33644 = G__33660;
i__33194_33645 = G__33661;
continue;
} else {
var child_33662 = cljs.core.first(seq__33190_33656__$1);
if(cljs.core.truth_(child_33662)){
node.appendChild(child_33662);


var G__33663 = cljs.core.next(seq__33190_33656__$1);
var G__33664 = null;
var G__33665 = (0);
var G__33666 = (0);
seq__33190_33642 = G__33663;
chunk__33192_33643 = G__33664;
count__33193_33644 = G__33665;
i__33194_33645 = G__33666;
continue;
} else {
var G__33667 = cljs.core.next(seq__33190_33656__$1);
var G__33668 = null;
var G__33669 = (0);
var G__33670 = (0);
seq__33190_33642 = G__33667;
chunk__33192_33643 = G__33668;
count__33193_33644 = G__33669;
i__33194_33645 = G__33670;
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


var G__33671 = seq__33156_33635;
var G__33672 = chunk__33158_33636;
var G__33673 = count__33159_33637;
var G__33674 = (i__33160_33638 + (1));
seq__33156_33635 = G__33671;
chunk__33158_33636 = G__33672;
count__33159_33637 = G__33673;
i__33160_33638 = G__33674;
continue;
} else {
var G__33675 = seq__33156_33635;
var G__33676 = chunk__33158_33636;
var G__33677 = count__33159_33637;
var G__33678 = (i__33160_33638 + (1));
seq__33156_33635 = G__33675;
chunk__33158_33636 = G__33676;
count__33159_33637 = G__33677;
i__33160_33638 = G__33678;
continue;
}
} else {
var temp__5735__auto___33679 = cljs.core.seq(seq__33156_33635);
if(temp__5735__auto___33679){
var seq__33156_33680__$1 = temp__5735__auto___33679;
if(cljs.core.chunked_seq_QMARK_(seq__33156_33680__$1)){
var c__4609__auto___33681 = cljs.core.chunk_first(seq__33156_33680__$1);
var G__33682 = cljs.core.chunk_rest(seq__33156_33680__$1);
var G__33683 = c__4609__auto___33681;
var G__33684 = cljs.core.count(c__4609__auto___33681);
var G__33685 = (0);
seq__33156_33635 = G__33682;
chunk__33158_33636 = G__33683;
count__33159_33637 = G__33684;
i__33160_33638 = G__33685;
continue;
} else {
var child_struct_33686 = cljs.core.first(seq__33156_33680__$1);
if((!((child_struct_33686 == null)))){
if(typeof child_struct_33686 === 'string'){
var text_33687 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33687),child_struct_33686].join(''));
} else {
var children_33688 = shadow.dom.svg_node(child_struct_33686);
if(cljs.core.seq_QMARK_(children_33688)){
var seq__33207_33689 = cljs.core.seq(children_33688);
var chunk__33209_33690 = null;
var count__33210_33691 = (0);
var i__33211_33692 = (0);
while(true){
if((i__33211_33692 < count__33210_33691)){
var child_33693 = chunk__33209_33690.cljs$core$IIndexed$_nth$arity$2(null,i__33211_33692);
if(cljs.core.truth_(child_33693)){
node.appendChild(child_33693);


var G__33694 = seq__33207_33689;
var G__33695 = chunk__33209_33690;
var G__33696 = count__33210_33691;
var G__33697 = (i__33211_33692 + (1));
seq__33207_33689 = G__33694;
chunk__33209_33690 = G__33695;
count__33210_33691 = G__33696;
i__33211_33692 = G__33697;
continue;
} else {
var G__33698 = seq__33207_33689;
var G__33699 = chunk__33209_33690;
var G__33700 = count__33210_33691;
var G__33701 = (i__33211_33692 + (1));
seq__33207_33689 = G__33698;
chunk__33209_33690 = G__33699;
count__33210_33691 = G__33700;
i__33211_33692 = G__33701;
continue;
}
} else {
var temp__5735__auto___33702__$1 = cljs.core.seq(seq__33207_33689);
if(temp__5735__auto___33702__$1){
var seq__33207_33703__$1 = temp__5735__auto___33702__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33207_33703__$1)){
var c__4609__auto___33704 = cljs.core.chunk_first(seq__33207_33703__$1);
var G__33705 = cljs.core.chunk_rest(seq__33207_33703__$1);
var G__33706 = c__4609__auto___33704;
var G__33707 = cljs.core.count(c__4609__auto___33704);
var G__33708 = (0);
seq__33207_33689 = G__33705;
chunk__33209_33690 = G__33706;
count__33210_33691 = G__33707;
i__33211_33692 = G__33708;
continue;
} else {
var child_33709 = cljs.core.first(seq__33207_33703__$1);
if(cljs.core.truth_(child_33709)){
node.appendChild(child_33709);


var G__33710 = cljs.core.next(seq__33207_33703__$1);
var G__33711 = null;
var G__33712 = (0);
var G__33713 = (0);
seq__33207_33689 = G__33710;
chunk__33209_33690 = G__33711;
count__33210_33691 = G__33712;
i__33211_33692 = G__33713;
continue;
} else {
var G__33714 = cljs.core.next(seq__33207_33703__$1);
var G__33715 = null;
var G__33716 = (0);
var G__33717 = (0);
seq__33207_33689 = G__33714;
chunk__33209_33690 = G__33715;
count__33210_33691 = G__33716;
i__33211_33692 = G__33717;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33688);
}
}


var G__33718 = cljs.core.next(seq__33156_33680__$1);
var G__33719 = null;
var G__33720 = (0);
var G__33721 = (0);
seq__33156_33635 = G__33718;
chunk__33158_33636 = G__33719;
count__33159_33637 = G__33720;
i__33160_33638 = G__33721;
continue;
} else {
var G__33722 = cljs.core.next(seq__33156_33680__$1);
var G__33723 = null;
var G__33724 = (0);
var G__33725 = (0);
seq__33156_33635 = G__33722;
chunk__33158_33636 = G__33723;
count__33159_33637 = G__33724;
i__33160_33638 = G__33725;
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

var G__33218_33726 = shadow.dom._to_svg;
var G__33219_33727 = "string";
var G__33220_33728 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__33218_33726,G__33219_33727,G__33220_33728);

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

var G__33225_33729 = shadow.dom._to_svg;
var G__33226_33730 = "null";
var G__33227_33731 = (function (_){
return null;
});
goog.object.set(G__33225_33729,G__33226_33730,G__33227_33731);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33732 = arguments.length;
var i__4790__auto___33733 = (0);
while(true){
if((i__4790__auto___33733 < len__4789__auto___33732)){
args__4795__auto__.push((arguments[i__4790__auto___33733]));

var G__33734 = (i__4790__auto___33733 + (1));
i__4790__auto___33733 = G__33734;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33229){
var G__33230 = cljs.core.first(seq33229);
var seq33229__$1 = cljs.core.next(seq33229);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33230,seq33229__$1);
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
var G__33240 = arguments.length;
switch (G__33240) {
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
var G__33245_33742 = shadow.dom.dom_node(el);
var G__33246_33743 = cljs.core.name(event);
var G__33247_33744 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33245_33742,G__33246_33743,G__33247_33744) : shadow.dom.dom_listen.call(null,G__33245_33742,G__33246_33743,G__33247_33744));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29789__auto___33745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29790__auto__ = (function (){var switch__29585__auto__ = (function (state_33253){
var state_val_33254 = (state_33253[(1)]);
if((state_val_33254 === (1))){
var state_33253__$1 = state_33253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33253__$1,(2),once_or_cleanup);
} else {
if((state_val_33254 === (2))){
var inst_33250 = (state_33253[(2)]);
var inst_33251 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33253__$1 = (function (){var statearr_33259 = state_33253;
(statearr_33259[(7)] = inst_33250);

return statearr_33259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33253__$1,inst_33251);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29586__auto__ = null;
var shadow$dom$state_machine__29586__auto____0 = (function (){
var statearr_33262 = [null,null,null,null,null,null,null,null];
(statearr_33262[(0)] = shadow$dom$state_machine__29586__auto__);

(statearr_33262[(1)] = (1));

return statearr_33262;
});
var shadow$dom$state_machine__29586__auto____1 = (function (state_33253){
while(true){
var ret_value__29587__auto__ = (function (){try{while(true){
var result__29588__auto__ = switch__29585__auto__(state_33253);
if(cljs.core.keyword_identical_QMARK_(result__29588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29588__auto__;
}
break;
}
}catch (e33264){if((e33264 instanceof Object)){
var ex__29589__auto__ = e33264;
var statearr_33265_33749 = state_33253;
(statearr_33265_33749[(5)] = ex__29589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33751 = state_33253;
state_33253 = G__33751;
continue;
} else {
return ret_value__29587__auto__;
}
break;
}
});
shadow$dom$state_machine__29586__auto__ = function(state_33253){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29586__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29586__auto____1.call(this,state_33253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29586__auto____0;
shadow$dom$state_machine__29586__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29586__auto____1;
return shadow$dom$state_machine__29586__auto__;
})()
})();
var state__29791__auto__ = (function (){var statearr_33267 = (f__29790__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29790__auto__.cljs$core$IFn$_invoke$arity$0() : f__29790__auto__.call(null));
(statearr_33267[(6)] = c__29789__auto___33745);

return statearr_33267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29791__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
