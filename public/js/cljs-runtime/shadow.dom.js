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
return cljs.core.cons((coll[idx]),(function (){var G__36543 = coll;
var G__36544 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36543,G__36544) : shadow.dom.lazy_native_coll_seq.call(null,G__36543,G__36544));
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
var G__36547 = arguments.length;
switch (G__36547) {
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
var G__36549 = arguments.length;
switch (G__36549) {
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
var G__36551 = arguments.length;
switch (G__36551) {
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
var G__36564 = arguments.length;
switch (G__36564) {
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
var G__36569 = arguments.length;
switch (G__36569) {
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
var G__36571 = document;
var G__36572 = shadow.dom.dom_node(el);
return goog.dom.contains(G__36571,G__36572);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__36573 = shadow.dom.dom_node(parent);
var G__36574 = shadow.dom.dom_node(el);
return goog.dom.contains(G__36573,G__36574);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__36577 = shadow.dom.dom_node(el);
var G__36578 = cls;
return goog.dom.classlist.add(G__36577,G__36578);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__36579 = shadow.dom.dom_node(el);
var G__36580 = cls;
return goog.dom.classlist.remove(G__36579,G__36580);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36589 = arguments.length;
switch (G__36589) {
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
var G__36616 = shadow.dom.dom_node(el);
var G__36617 = cls;
return goog.dom.classlist.toggle(G__36616,G__36617);
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
}catch (e36624){if((e36624 instanceof Object)){
var e = e36624;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36624;

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
var seq__36631 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36632 = null;
var count__36633 = (0);
var i__36634 = (0);
while(true){
if((i__36634 < count__36633)){
var el = chunk__36632.cljs$core$IIndexed$_nth$arity$2(null,i__36634);
var handler_37311__$1 = ((function (seq__36631,chunk__36632,count__36633,i__36634,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36631,chunk__36632,count__36633,i__36634,el))
;
var G__36686_37312 = el;
var G__36687_37313 = cljs.core.name(ev);
var G__36688_37314 = handler_37311__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__36686_37312,G__36687_37313,G__36688_37314) : shadow.dom.dom_listen.call(null,G__36686_37312,G__36687_37313,G__36688_37314));


var G__37315 = seq__36631;
var G__37316 = chunk__36632;
var G__37317 = count__36633;
var G__37318 = (i__36634 + (1));
seq__36631 = G__37315;
chunk__36632 = G__37316;
count__36633 = G__37317;
i__36634 = G__37318;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36631);
if(temp__5735__auto__){
var seq__36631__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36631__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36631__$1);
var G__37320 = cljs.core.chunk_rest(seq__36631__$1);
var G__37321 = c__4609__auto__;
var G__37322 = cljs.core.count(c__4609__auto__);
var G__37323 = (0);
seq__36631 = G__37320;
chunk__36632 = G__37321;
count__36633 = G__37322;
i__36634 = G__37323;
continue;
} else {
var el = cljs.core.first(seq__36631__$1);
var handler_37327__$1 = ((function (seq__36631,chunk__36632,count__36633,i__36634,el,seq__36631__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36631,chunk__36632,count__36633,i__36634,el,seq__36631__$1,temp__5735__auto__))
;
var G__36689_37328 = el;
var G__36690_37329 = cljs.core.name(ev);
var G__36691_37330 = handler_37327__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__36689_37328,G__36690_37329,G__36691_37330) : shadow.dom.dom_listen.call(null,G__36689_37328,G__36690_37329,G__36691_37330));


var G__37332 = cljs.core.next(seq__36631__$1);
var G__37333 = null;
var G__37334 = (0);
var G__37335 = (0);
seq__36631 = G__37332;
chunk__36632 = G__37333;
count__36633 = G__37334;
i__36634 = G__37335;
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
var G__36693 = arguments.length;
switch (G__36693) {
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
var G__36694 = shadow.dom.dom_node(el);
var G__36695 = cljs.core.name(ev);
var G__36696 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__36694,G__36695,G__36696) : shadow.dom.dom_listen.call(null,G__36694,G__36695,G__36696));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__36697 = shadow.dom.dom_node(el);
var G__36698 = cljs.core.name(ev);
var G__36699 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__36697,G__36698,G__36699) : shadow.dom.dom_listen_remove.call(null,G__36697,G__36698,G__36699));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36700 = cljs.core.seq(events);
var chunk__36701 = null;
var count__36702 = (0);
var i__36703 = (0);
while(true){
if((i__36703 < count__36702)){
var vec__36710 = chunk__36701.cljs$core$IIndexed$_nth$arity$2(null,i__36703);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36710,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37342 = seq__36700;
var G__37343 = chunk__36701;
var G__37344 = count__36702;
var G__37345 = (i__36703 + (1));
seq__36700 = G__37342;
chunk__36701 = G__37343;
count__36702 = G__37344;
i__36703 = G__37345;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36700);
if(temp__5735__auto__){
var seq__36700__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36700__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36700__$1);
var G__37349 = cljs.core.chunk_rest(seq__36700__$1);
var G__37350 = c__4609__auto__;
var G__37351 = cljs.core.count(c__4609__auto__);
var G__37352 = (0);
seq__36700 = G__37349;
chunk__36701 = G__37350;
count__36702 = G__37351;
i__36703 = G__37352;
continue;
} else {
var vec__36713 = cljs.core.first(seq__36700__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36713,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37353 = cljs.core.next(seq__36700__$1);
var G__37354 = null;
var G__37355 = (0);
var G__37356 = (0);
seq__36700 = G__37353;
chunk__36701 = G__37354;
count__36702 = G__37355;
i__36703 = G__37356;
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
var seq__36716 = cljs.core.seq(styles);
var chunk__36717 = null;
var count__36718 = (0);
var i__36719 = (0);
while(true){
if((i__36719 < count__36718)){
var vec__36732 = chunk__36717.cljs$core$IIndexed$_nth$arity$2(null,i__36719);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36732,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36732,(1),null);
var G__36735_37357 = dom;
var G__36736_37358 = cljs.core.name(k);
var G__36737_37359 = (((v == null))?"":v);
goog.style.setStyle(G__36735_37357,G__36736_37358,G__36737_37359);


var G__37360 = seq__36716;
var G__37361 = chunk__36717;
var G__37362 = count__36718;
var G__37363 = (i__36719 + (1));
seq__36716 = G__37360;
chunk__36717 = G__37361;
count__36718 = G__37362;
i__36719 = G__37363;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36716);
if(temp__5735__auto__){
var seq__36716__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36716__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36716__$1);
var G__37364 = cljs.core.chunk_rest(seq__36716__$1);
var G__37365 = c__4609__auto__;
var G__37366 = cljs.core.count(c__4609__auto__);
var G__37367 = (0);
seq__36716 = G__37364;
chunk__36717 = G__37365;
count__36718 = G__37366;
i__36719 = G__37367;
continue;
} else {
var vec__36738 = cljs.core.first(seq__36716__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36738,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36738,(1),null);
var G__36741_37368 = dom;
var G__36742_37369 = cljs.core.name(k);
var G__36743_37370 = (((v == null))?"":v);
goog.style.setStyle(G__36741_37368,G__36742_37369,G__36743_37370);


var G__37371 = cljs.core.next(seq__36716__$1);
var G__37372 = null;
var G__37373 = (0);
var G__37374 = (0);
seq__36716 = G__37371;
chunk__36717 = G__37372;
count__36718 = G__37373;
i__36719 = G__37374;
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
var G__36744_37375 = key;
var G__36744_37376__$1 = (((G__36744_37375 instanceof cljs.core.Keyword))?G__36744_37375.fqn:null);
switch (G__36744_37376__$1) {
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
var ks_37378 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_37378,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_37378,"aria-");
}
})())){
el.setAttribute(ks_37378,value);
} else {
(el[ks_37378] = value);
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
var G__36745 = shadow.dom.dom_node(el);
var G__36746 = cls;
return goog.dom.classlist.contains(G__36745,G__36746);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36789){
var map__36790 = p__36789;
var map__36790__$1 = (((((!((map__36790 == null))))?(((((map__36790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36790):map__36790);
var props = map__36790__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36790__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36792 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36792,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36792,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36792,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36795 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36795,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36795;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36797 = arguments.length;
switch (G__36797) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36798){
var vec__36799 = p__36798;
var seq__36800 = cljs.core.seq(vec__36799);
var first__36801 = cljs.core.first(seq__36800);
var seq__36800__$1 = cljs.core.next(seq__36800);
var nn = first__36801;
var first__36801__$1 = cljs.core.first(seq__36800__$1);
var seq__36800__$2 = cljs.core.next(seq__36800__$1);
var np = first__36801__$1;
var nc = seq__36800__$2;
var node = vec__36799;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36802 = nn;
var G__36803 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36802,G__36803) : create_fn.call(null,G__36802,G__36803));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36804 = nn;
var G__36805 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36804,G__36805) : create_fn.call(null,G__36804,G__36805));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36806 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36806,(1),null);
var seq__36809_37393 = cljs.core.seq(node_children);
var chunk__36810_37394 = null;
var count__36811_37395 = (0);
var i__36812_37396 = (0);
while(true){
if((i__36812_37396 < count__36811_37395)){
var child_struct_37397 = chunk__36810_37394.cljs$core$IIndexed$_nth$arity$2(null,i__36812_37396);
var children_37398 = shadow.dom.dom_node(child_struct_37397);
if(cljs.core.seq_QMARK_(children_37398)){
var seq__36825_37399 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37398));
var chunk__36827_37400 = null;
var count__36828_37401 = (0);
var i__36829_37402 = (0);
while(true){
if((i__36829_37402 < count__36828_37401)){
var child_37403 = chunk__36827_37400.cljs$core$IIndexed$_nth$arity$2(null,i__36829_37402);
if(cljs.core.truth_(child_37403)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37403);


var G__37404 = seq__36825_37399;
var G__37405 = chunk__36827_37400;
var G__37406 = count__36828_37401;
var G__37407 = (i__36829_37402 + (1));
seq__36825_37399 = G__37404;
chunk__36827_37400 = G__37405;
count__36828_37401 = G__37406;
i__36829_37402 = G__37407;
continue;
} else {
var G__37408 = seq__36825_37399;
var G__37409 = chunk__36827_37400;
var G__37410 = count__36828_37401;
var G__37411 = (i__36829_37402 + (1));
seq__36825_37399 = G__37408;
chunk__36827_37400 = G__37409;
count__36828_37401 = G__37410;
i__36829_37402 = G__37411;
continue;
}
} else {
var temp__5735__auto___37412 = cljs.core.seq(seq__36825_37399);
if(temp__5735__auto___37412){
var seq__36825_37414__$1 = temp__5735__auto___37412;
if(cljs.core.chunked_seq_QMARK_(seq__36825_37414__$1)){
var c__4609__auto___37415 = cljs.core.chunk_first(seq__36825_37414__$1);
var G__37416 = cljs.core.chunk_rest(seq__36825_37414__$1);
var G__37417 = c__4609__auto___37415;
var G__37418 = cljs.core.count(c__4609__auto___37415);
var G__37419 = (0);
seq__36825_37399 = G__37416;
chunk__36827_37400 = G__37417;
count__36828_37401 = G__37418;
i__36829_37402 = G__37419;
continue;
} else {
var child_37420 = cljs.core.first(seq__36825_37414__$1);
if(cljs.core.truth_(child_37420)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37420);


var G__37422 = cljs.core.next(seq__36825_37414__$1);
var G__37423 = null;
var G__37424 = (0);
var G__37425 = (0);
seq__36825_37399 = G__37422;
chunk__36827_37400 = G__37423;
count__36828_37401 = G__37424;
i__36829_37402 = G__37425;
continue;
} else {
var G__37426 = cljs.core.next(seq__36825_37414__$1);
var G__37427 = null;
var G__37428 = (0);
var G__37429 = (0);
seq__36825_37399 = G__37426;
chunk__36827_37400 = G__37427;
count__36828_37401 = G__37428;
i__36829_37402 = G__37429;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37398);
}


var G__37431 = seq__36809_37393;
var G__37432 = chunk__36810_37394;
var G__37433 = count__36811_37395;
var G__37434 = (i__36812_37396 + (1));
seq__36809_37393 = G__37431;
chunk__36810_37394 = G__37432;
count__36811_37395 = G__37433;
i__36812_37396 = G__37434;
continue;
} else {
var temp__5735__auto___37435 = cljs.core.seq(seq__36809_37393);
if(temp__5735__auto___37435){
var seq__36809_37439__$1 = temp__5735__auto___37435;
if(cljs.core.chunked_seq_QMARK_(seq__36809_37439__$1)){
var c__4609__auto___37440 = cljs.core.chunk_first(seq__36809_37439__$1);
var G__37441 = cljs.core.chunk_rest(seq__36809_37439__$1);
var G__37442 = c__4609__auto___37440;
var G__37443 = cljs.core.count(c__4609__auto___37440);
var G__37444 = (0);
seq__36809_37393 = G__37441;
chunk__36810_37394 = G__37442;
count__36811_37395 = G__37443;
i__36812_37396 = G__37444;
continue;
} else {
var child_struct_37445 = cljs.core.first(seq__36809_37439__$1);
var children_37446 = shadow.dom.dom_node(child_struct_37445);
if(cljs.core.seq_QMARK_(children_37446)){
var seq__36831_37447 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37446));
var chunk__36833_37448 = null;
var count__36834_37449 = (0);
var i__36835_37450 = (0);
while(true){
if((i__36835_37450 < count__36834_37449)){
var child_37451 = chunk__36833_37448.cljs$core$IIndexed$_nth$arity$2(null,i__36835_37450);
if(cljs.core.truth_(child_37451)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37451);


var G__37452 = seq__36831_37447;
var G__37453 = chunk__36833_37448;
var G__37454 = count__36834_37449;
var G__37455 = (i__36835_37450 + (1));
seq__36831_37447 = G__37452;
chunk__36833_37448 = G__37453;
count__36834_37449 = G__37454;
i__36835_37450 = G__37455;
continue;
} else {
var G__37456 = seq__36831_37447;
var G__37457 = chunk__36833_37448;
var G__37458 = count__36834_37449;
var G__37459 = (i__36835_37450 + (1));
seq__36831_37447 = G__37456;
chunk__36833_37448 = G__37457;
count__36834_37449 = G__37458;
i__36835_37450 = G__37459;
continue;
}
} else {
var temp__5735__auto___37460__$1 = cljs.core.seq(seq__36831_37447);
if(temp__5735__auto___37460__$1){
var seq__36831_37461__$1 = temp__5735__auto___37460__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36831_37461__$1)){
var c__4609__auto___37462 = cljs.core.chunk_first(seq__36831_37461__$1);
var G__37463 = cljs.core.chunk_rest(seq__36831_37461__$1);
var G__37464 = c__4609__auto___37462;
var G__37465 = cljs.core.count(c__4609__auto___37462);
var G__37466 = (0);
seq__36831_37447 = G__37463;
chunk__36833_37448 = G__37464;
count__36834_37449 = G__37465;
i__36835_37450 = G__37466;
continue;
} else {
var child_37467 = cljs.core.first(seq__36831_37461__$1);
if(cljs.core.truth_(child_37467)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37467);


var G__37468 = cljs.core.next(seq__36831_37461__$1);
var G__37469 = null;
var G__37470 = (0);
var G__37471 = (0);
seq__36831_37447 = G__37468;
chunk__36833_37448 = G__37469;
count__36834_37449 = G__37470;
i__36835_37450 = G__37471;
continue;
} else {
var G__37472 = cljs.core.next(seq__36831_37461__$1);
var G__37473 = null;
var G__37474 = (0);
var G__37475 = (0);
seq__36831_37447 = G__37472;
chunk__36833_37448 = G__37473;
count__36834_37449 = G__37474;
i__36835_37450 = G__37475;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37446);
}


var G__37476 = cljs.core.next(seq__36809_37439__$1);
var G__37477 = null;
var G__37478 = (0);
var G__37479 = (0);
seq__36809_37393 = G__37476;
chunk__36810_37394 = G__37477;
count__36811_37395 = G__37478;
i__36812_37396 = G__37479;
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
var G__36837 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__36837);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36839 = cljs.core.seq(node);
var chunk__36840 = null;
var count__36841 = (0);
var i__36842 = (0);
while(true){
if((i__36842 < count__36841)){
var n = chunk__36840.cljs$core$IIndexed$_nth$arity$2(null,i__36842);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37480 = seq__36839;
var G__37481 = chunk__36840;
var G__37482 = count__36841;
var G__37483 = (i__36842 + (1));
seq__36839 = G__37480;
chunk__36840 = G__37481;
count__36841 = G__37482;
i__36842 = G__37483;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36839);
if(temp__5735__auto__){
var seq__36839__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36839__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36839__$1);
var G__37484 = cljs.core.chunk_rest(seq__36839__$1);
var G__37485 = c__4609__auto__;
var G__37486 = cljs.core.count(c__4609__auto__);
var G__37487 = (0);
seq__36839 = G__37484;
chunk__36840 = G__37485;
count__36841 = G__37486;
i__36842 = G__37487;
continue;
} else {
var n = cljs.core.first(seq__36839__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37488 = cljs.core.next(seq__36839__$1);
var G__37489 = null;
var G__37490 = (0);
var G__37491 = (0);
seq__36839 = G__37488;
chunk__36840 = G__37489;
count__36841 = G__37490;
i__36842 = G__37491;
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
var G__36852 = shadow.dom.dom_node(new$);
var G__36853 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__36852,G__36853);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36856 = arguments.length;
switch (G__36856) {
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
var G__36864 = arguments.length;
switch (G__36864) {
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
var G__36877 = arguments.length;
switch (G__36877) {
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
var len__4789__auto___37504 = arguments.length;
var i__4790__auto___37506 = (0);
while(true){
if((i__4790__auto___37506 < len__4789__auto___37504)){
args__4795__auto__.push((arguments[i__4790__auto___37506]));

var G__37507 = (i__4790__auto___37506 + (1));
i__4790__auto___37506 = G__37507;
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
var seq__36884_37509 = cljs.core.seq(nodes);
var chunk__36885_37510 = null;
var count__36886_37511 = (0);
var i__36887_37512 = (0);
while(true){
if((i__36887_37512 < count__36886_37511)){
var node_37513 = chunk__36885_37510.cljs$core$IIndexed$_nth$arity$2(null,i__36887_37512);
fragment.appendChild(shadow.dom._to_dom(node_37513));


var G__37514 = seq__36884_37509;
var G__37515 = chunk__36885_37510;
var G__37516 = count__36886_37511;
var G__37517 = (i__36887_37512 + (1));
seq__36884_37509 = G__37514;
chunk__36885_37510 = G__37515;
count__36886_37511 = G__37516;
i__36887_37512 = G__37517;
continue;
} else {
var temp__5735__auto___37518 = cljs.core.seq(seq__36884_37509);
if(temp__5735__auto___37518){
var seq__36884_37519__$1 = temp__5735__auto___37518;
if(cljs.core.chunked_seq_QMARK_(seq__36884_37519__$1)){
var c__4609__auto___37520 = cljs.core.chunk_first(seq__36884_37519__$1);
var G__37521 = cljs.core.chunk_rest(seq__36884_37519__$1);
var G__37522 = c__4609__auto___37520;
var G__37523 = cljs.core.count(c__4609__auto___37520);
var G__37524 = (0);
seq__36884_37509 = G__37521;
chunk__36885_37510 = G__37522;
count__36886_37511 = G__37523;
i__36887_37512 = G__37524;
continue;
} else {
var node_37525 = cljs.core.first(seq__36884_37519__$1);
fragment.appendChild(shadow.dom._to_dom(node_37525));


var G__37526 = cljs.core.next(seq__36884_37519__$1);
var G__37527 = null;
var G__37528 = (0);
var G__37529 = (0);
seq__36884_37509 = G__37526;
chunk__36885_37510 = G__37527;
count__36886_37511 = G__37528;
i__36887_37512 = G__37529;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36883){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36883));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36890_37530 = cljs.core.seq(scripts);
var chunk__36891_37531 = null;
var count__36892_37532 = (0);
var i__36893_37533 = (0);
while(true){
if((i__36893_37533 < count__36892_37532)){
var vec__36904_37534 = chunk__36891_37531.cljs$core$IIndexed$_nth$arity$2(null,i__36893_37533);
var script_tag_37535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36904_37534,(0),null);
var script_body_37536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36904_37534,(1),null);
eval(script_body_37536);


var G__37537 = seq__36890_37530;
var G__37538 = chunk__36891_37531;
var G__37539 = count__36892_37532;
var G__37540 = (i__36893_37533 + (1));
seq__36890_37530 = G__37537;
chunk__36891_37531 = G__37538;
count__36892_37532 = G__37539;
i__36893_37533 = G__37540;
continue;
} else {
var temp__5735__auto___37541 = cljs.core.seq(seq__36890_37530);
if(temp__5735__auto___37541){
var seq__36890_37542__$1 = temp__5735__auto___37541;
if(cljs.core.chunked_seq_QMARK_(seq__36890_37542__$1)){
var c__4609__auto___37543 = cljs.core.chunk_first(seq__36890_37542__$1);
var G__37544 = cljs.core.chunk_rest(seq__36890_37542__$1);
var G__37545 = c__4609__auto___37543;
var G__37546 = cljs.core.count(c__4609__auto___37543);
var G__37547 = (0);
seq__36890_37530 = G__37544;
chunk__36891_37531 = G__37545;
count__36892_37532 = G__37546;
i__36893_37533 = G__37547;
continue;
} else {
var vec__36907_37548 = cljs.core.first(seq__36890_37542__$1);
var script_tag_37549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36907_37548,(0),null);
var script_body_37550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36907_37548,(1),null);
eval(script_body_37550);


var G__37551 = cljs.core.next(seq__36890_37542__$1);
var G__37552 = null;
var G__37553 = (0);
var G__37554 = (0);
seq__36890_37530 = G__37551;
chunk__36891_37531 = G__37552;
count__36892_37532 = G__37553;
i__36893_37533 = G__37554;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36910){
var vec__36911 = p__36910;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36911,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36911,(1),null);
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
var G__36914 = shadow.dom.dom_node(el);
var G__36915 = cls;
return goog.dom.getAncestorByClass(G__36914,G__36915);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36917 = arguments.length;
switch (G__36917) {
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
var G__36918 = shadow.dom.dom_node(el);
var G__36919 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__36918,G__36919);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__36920 = shadow.dom.dom_node(el);
var G__36921 = cljs.core.name(tag);
var G__36922 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__36920,G__36921,G__36922);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__36923 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__36923);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__36924 = shadow.dom.dom_node(dom);
var G__36925 = value;
return goog.dom.forms.setValue(G__36924,G__36925);
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
var seq__36934 = cljs.core.seq(style_keys);
var chunk__36935 = null;
var count__36936 = (0);
var i__36937 = (0);
while(true){
if((i__36937 < count__36936)){
var it = chunk__36935.cljs$core$IIndexed$_nth$arity$2(null,i__36937);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37556 = seq__36934;
var G__37557 = chunk__36935;
var G__37558 = count__36936;
var G__37559 = (i__36937 + (1));
seq__36934 = G__37556;
chunk__36935 = G__37557;
count__36936 = G__37558;
i__36937 = G__37559;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36934);
if(temp__5735__auto__){
var seq__36934__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36934__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36934__$1);
var G__37560 = cljs.core.chunk_rest(seq__36934__$1);
var G__37561 = c__4609__auto__;
var G__37562 = cljs.core.count(c__4609__auto__);
var G__37563 = (0);
seq__36934 = G__37560;
chunk__36935 = G__37561;
count__36936 = G__37562;
i__36937 = G__37563;
continue;
} else {
var it = cljs.core.first(seq__36934__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37564 = cljs.core.next(seq__36934__$1);
var G__37565 = null;
var G__37566 = (0);
var G__37567 = (0);
seq__36934 = G__37564;
chunk__36935 = G__37565;
count__36936 = G__37566;
i__36937 = G__37567;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k36946,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__36955 = k36946;
var G__36955__$1 = (((G__36955 instanceof cljs.core.Keyword))?G__36955.fqn:null);
switch (G__36955__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36946,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__36958){
var vec__36959 = p__36958;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36959,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36959,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36945){
var self__ = this;
var G__36945__$1 = this;
return (new cljs.core.RecordIter((0),G__36945__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__36972 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__36972(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36947,other36948){
var self__ = this;
var this36947__$1 = this;
return (((!((other36948 == null)))) && ((this36947__$1.constructor === other36948.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36947__$1.x,other36948.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36947__$1.y,other36948.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36947__$1.__extmap,other36948.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__36945){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__36977 = cljs.core.keyword_identical_QMARK_;
var expr__36978 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__36981 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__36982 = expr__36978;
return (pred__36977.cljs$core$IFn$_invoke$arity$2 ? pred__36977.cljs$core$IFn$_invoke$arity$2(G__36981,G__36982) : pred__36977.call(null,G__36981,G__36982));
})())){
return (new shadow.dom.Coordinate(G__36945,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36983 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__36984 = expr__36978;
return (pred__36977.cljs$core$IFn$_invoke$arity$2 ? pred__36977.cljs$core$IFn$_invoke$arity$2(G__36983,G__36984) : pred__36977.call(null,G__36983,G__36984));
})())){
return (new shadow.dom.Coordinate(self__.x,G__36945,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__36945),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__36945){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36945,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36951){
var extmap__4478__auto__ = (function (){var G__36997 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36951,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36951)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36997);
} else {
return G__36997;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36951),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36951),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__36998 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__36998);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__36999 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__36999);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__37000 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__37000);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37002,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37007 = k37002;
var G__37007__$1 = (((G__37007 instanceof cljs.core.Keyword))?G__37007.fqn:null);
switch (G__37007__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37002,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37008){
var vec__37009 = p__37008;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37009,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37009,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37001){
var self__ = this;
var G__37001__$1 = this;
return (new cljs.core.RecordIter((0),G__37001__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__37013 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__37013(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37003,other37004){
var self__ = this;
var this37003__$1 = this;
return (((!((other37004 == null)))) && ((this37003__$1.constructor === other37004.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37003__$1.w,other37004.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37003__$1.h,other37004.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37003__$1.__extmap,other37004.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37001){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37014 = cljs.core.keyword_identical_QMARK_;
var expr__37015 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__37017 = new cljs.core.Keyword(null,"w","w",354169001);
var G__37018 = expr__37015;
return (pred__37014.cljs$core$IFn$_invoke$arity$2 ? pred__37014.cljs$core$IFn$_invoke$arity$2(G__37017,G__37018) : pred__37014.call(null,G__37017,G__37018));
})())){
return (new shadow.dom.Size(G__37001,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37019 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__37020 = expr__37015;
return (pred__37014.cljs$core$IFn$_invoke$arity$2 ? pred__37014.cljs$core$IFn$_invoke$arity$2(G__37019,G__37020) : pred__37014.call(null,G__37019,G__37020));
})())){
return (new shadow.dom.Size(self__.w,G__37001,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37001),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37001){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37001,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37005){
var extmap__4478__auto__ = (function (){var G__37034 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37005,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37005)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37034);
} else {
return G__37034;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37005),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37005),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__37039 = shadow.dom.dom_node(el);
return goog.style.getSize(G__37039);
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
var G__37579 = (i + (1));
var G__37580 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37579;
ret = G__37580;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37052){
var vec__37053 = p__37052;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37053,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37053,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37059 = arguments.length;
switch (G__37059) {
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
var G__37062_37582 = new_node;
var G__37063_37583 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__37062_37582,G__37063_37583);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__37064_37584 = new_node;
var G__37065_37585 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__37064_37584,G__37065_37585);

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
var G__37586 = ps;
var G__37587 = (i + (1));
el__$1 = G__37586;
i = G__37587;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__37066 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__37066);
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
var G__37085 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__37085);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__37087 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__37087);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37088 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37088,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37088,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37088,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37097_37588 = cljs.core.seq(props);
var chunk__37098_37589 = null;
var count__37099_37590 = (0);
var i__37100_37591 = (0);
while(true){
if((i__37100_37591 < count__37099_37590)){
var vec__37111_37592 = chunk__37098_37589.cljs$core$IIndexed$_nth$arity$2(null,i__37100_37591);
var k_37593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111_37592,(0),null);
var v_37594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111_37592,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_37593);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37593),v_37594);


var G__37596 = seq__37097_37588;
var G__37597 = chunk__37098_37589;
var G__37598 = count__37099_37590;
var G__37599 = (i__37100_37591 + (1));
seq__37097_37588 = G__37596;
chunk__37098_37589 = G__37597;
count__37099_37590 = G__37598;
i__37100_37591 = G__37599;
continue;
} else {
var temp__5735__auto___37601 = cljs.core.seq(seq__37097_37588);
if(temp__5735__auto___37601){
var seq__37097_37602__$1 = temp__5735__auto___37601;
if(cljs.core.chunked_seq_QMARK_(seq__37097_37602__$1)){
var c__4609__auto___37603 = cljs.core.chunk_first(seq__37097_37602__$1);
var G__37604 = cljs.core.chunk_rest(seq__37097_37602__$1);
var G__37605 = c__4609__auto___37603;
var G__37606 = cljs.core.count(c__4609__auto___37603);
var G__37607 = (0);
seq__37097_37588 = G__37604;
chunk__37098_37589 = G__37605;
count__37099_37590 = G__37606;
i__37100_37591 = G__37607;
continue;
} else {
var vec__37122_37608 = cljs.core.first(seq__37097_37602__$1);
var k_37609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37122_37608,(0),null);
var v_37610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37122_37608,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_37609);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37609),v_37610);


var G__37614 = cljs.core.next(seq__37097_37602__$1);
var G__37615 = null;
var G__37616 = (0);
var G__37617 = (0);
seq__37097_37588 = G__37614;
chunk__37098_37589 = G__37615;
count__37099_37590 = G__37616;
i__37100_37591 = G__37617;
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
var vec__37133 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37133,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37133,(1),null);
var seq__37136_37624 = cljs.core.seq(node_children);
var chunk__37138_37625 = null;
var count__37139_37626 = (0);
var i__37140_37627 = (0);
while(true){
if((i__37140_37627 < count__37139_37626)){
var child_struct_37628 = chunk__37138_37625.cljs$core$IIndexed$_nth$arity$2(null,i__37140_37627);
if((!((child_struct_37628 == null)))){
if(typeof child_struct_37628 === 'string'){
var text_37629 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37629),child_struct_37628].join(''));
} else {
var children_37630 = shadow.dom.svg_node(child_struct_37628);
if(cljs.core.seq_QMARK_(children_37630)){
var seq__37158_37631 = cljs.core.seq(children_37630);
var chunk__37160_37632 = null;
var count__37161_37633 = (0);
var i__37162_37634 = (0);
while(true){
if((i__37162_37634 < count__37161_37633)){
var child_37635 = chunk__37160_37632.cljs$core$IIndexed$_nth$arity$2(null,i__37162_37634);
if(cljs.core.truth_(child_37635)){
node.appendChild(child_37635);


var G__37636 = seq__37158_37631;
var G__37637 = chunk__37160_37632;
var G__37638 = count__37161_37633;
var G__37639 = (i__37162_37634 + (1));
seq__37158_37631 = G__37636;
chunk__37160_37632 = G__37637;
count__37161_37633 = G__37638;
i__37162_37634 = G__37639;
continue;
} else {
var G__37640 = seq__37158_37631;
var G__37641 = chunk__37160_37632;
var G__37642 = count__37161_37633;
var G__37643 = (i__37162_37634 + (1));
seq__37158_37631 = G__37640;
chunk__37160_37632 = G__37641;
count__37161_37633 = G__37642;
i__37162_37634 = G__37643;
continue;
}
} else {
var temp__5735__auto___37644 = cljs.core.seq(seq__37158_37631);
if(temp__5735__auto___37644){
var seq__37158_37645__$1 = temp__5735__auto___37644;
if(cljs.core.chunked_seq_QMARK_(seq__37158_37645__$1)){
var c__4609__auto___37646 = cljs.core.chunk_first(seq__37158_37645__$1);
var G__37647 = cljs.core.chunk_rest(seq__37158_37645__$1);
var G__37648 = c__4609__auto___37646;
var G__37649 = cljs.core.count(c__4609__auto___37646);
var G__37650 = (0);
seq__37158_37631 = G__37647;
chunk__37160_37632 = G__37648;
count__37161_37633 = G__37649;
i__37162_37634 = G__37650;
continue;
} else {
var child_37651 = cljs.core.first(seq__37158_37645__$1);
if(cljs.core.truth_(child_37651)){
node.appendChild(child_37651);


var G__37652 = cljs.core.next(seq__37158_37645__$1);
var G__37653 = null;
var G__37654 = (0);
var G__37655 = (0);
seq__37158_37631 = G__37652;
chunk__37160_37632 = G__37653;
count__37161_37633 = G__37654;
i__37162_37634 = G__37655;
continue;
} else {
var G__37656 = cljs.core.next(seq__37158_37645__$1);
var G__37657 = null;
var G__37658 = (0);
var G__37659 = (0);
seq__37158_37631 = G__37656;
chunk__37160_37632 = G__37657;
count__37161_37633 = G__37658;
i__37162_37634 = G__37659;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37630);
}
}


var G__37660 = seq__37136_37624;
var G__37661 = chunk__37138_37625;
var G__37662 = count__37139_37626;
var G__37663 = (i__37140_37627 + (1));
seq__37136_37624 = G__37660;
chunk__37138_37625 = G__37661;
count__37139_37626 = G__37662;
i__37140_37627 = G__37663;
continue;
} else {
var G__37664 = seq__37136_37624;
var G__37665 = chunk__37138_37625;
var G__37666 = count__37139_37626;
var G__37667 = (i__37140_37627 + (1));
seq__37136_37624 = G__37664;
chunk__37138_37625 = G__37665;
count__37139_37626 = G__37666;
i__37140_37627 = G__37667;
continue;
}
} else {
var temp__5735__auto___37668 = cljs.core.seq(seq__37136_37624);
if(temp__5735__auto___37668){
var seq__37136_37669__$1 = temp__5735__auto___37668;
if(cljs.core.chunked_seq_QMARK_(seq__37136_37669__$1)){
var c__4609__auto___37670 = cljs.core.chunk_first(seq__37136_37669__$1);
var G__37671 = cljs.core.chunk_rest(seq__37136_37669__$1);
var G__37672 = c__4609__auto___37670;
var G__37673 = cljs.core.count(c__4609__auto___37670);
var G__37674 = (0);
seq__37136_37624 = G__37671;
chunk__37138_37625 = G__37672;
count__37139_37626 = G__37673;
i__37140_37627 = G__37674;
continue;
} else {
var child_struct_37679 = cljs.core.first(seq__37136_37669__$1);
if((!((child_struct_37679 == null)))){
if(typeof child_struct_37679 === 'string'){
var text_37680 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37680),child_struct_37679].join(''));
} else {
var children_37683 = shadow.dom.svg_node(child_struct_37679);
if(cljs.core.seq_QMARK_(children_37683)){
var seq__37210_37684 = cljs.core.seq(children_37683);
var chunk__37212_37685 = null;
var count__37213_37686 = (0);
var i__37214_37687 = (0);
while(true){
if((i__37214_37687 < count__37213_37686)){
var child_37688 = chunk__37212_37685.cljs$core$IIndexed$_nth$arity$2(null,i__37214_37687);
if(cljs.core.truth_(child_37688)){
node.appendChild(child_37688);


var G__37690 = seq__37210_37684;
var G__37691 = chunk__37212_37685;
var G__37692 = count__37213_37686;
var G__37693 = (i__37214_37687 + (1));
seq__37210_37684 = G__37690;
chunk__37212_37685 = G__37691;
count__37213_37686 = G__37692;
i__37214_37687 = G__37693;
continue;
} else {
var G__37694 = seq__37210_37684;
var G__37695 = chunk__37212_37685;
var G__37696 = count__37213_37686;
var G__37697 = (i__37214_37687 + (1));
seq__37210_37684 = G__37694;
chunk__37212_37685 = G__37695;
count__37213_37686 = G__37696;
i__37214_37687 = G__37697;
continue;
}
} else {
var temp__5735__auto___37699__$1 = cljs.core.seq(seq__37210_37684);
if(temp__5735__auto___37699__$1){
var seq__37210_37700__$1 = temp__5735__auto___37699__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37210_37700__$1)){
var c__4609__auto___37701 = cljs.core.chunk_first(seq__37210_37700__$1);
var G__37702 = cljs.core.chunk_rest(seq__37210_37700__$1);
var G__37703 = c__4609__auto___37701;
var G__37704 = cljs.core.count(c__4609__auto___37701);
var G__37705 = (0);
seq__37210_37684 = G__37702;
chunk__37212_37685 = G__37703;
count__37213_37686 = G__37704;
i__37214_37687 = G__37705;
continue;
} else {
var child_37706 = cljs.core.first(seq__37210_37700__$1);
if(cljs.core.truth_(child_37706)){
node.appendChild(child_37706);


var G__37708 = cljs.core.next(seq__37210_37700__$1);
var G__37709 = null;
var G__37710 = (0);
var G__37711 = (0);
seq__37210_37684 = G__37708;
chunk__37212_37685 = G__37709;
count__37213_37686 = G__37710;
i__37214_37687 = G__37711;
continue;
} else {
var G__37715 = cljs.core.next(seq__37210_37700__$1);
var G__37716 = null;
var G__37717 = (0);
var G__37718 = (0);
seq__37210_37684 = G__37715;
chunk__37212_37685 = G__37716;
count__37213_37686 = G__37717;
i__37214_37687 = G__37718;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37683);
}
}


var G__37719 = cljs.core.next(seq__37136_37669__$1);
var G__37720 = null;
var G__37721 = (0);
var G__37722 = (0);
seq__37136_37624 = G__37719;
chunk__37138_37625 = G__37720;
count__37139_37626 = G__37721;
i__37140_37627 = G__37722;
continue;
} else {
var G__37723 = cljs.core.next(seq__37136_37669__$1);
var G__37724 = null;
var G__37725 = (0);
var G__37726 = (0);
seq__37136_37624 = G__37723;
chunk__37138_37625 = G__37724;
count__37139_37626 = G__37725;
i__37140_37627 = G__37726;
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

var G__37216_37730 = shadow.dom._to_svg;
var G__37217_37731 = "string";
var G__37218_37732 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__37216_37730,G__37217_37731,G__37218_37732);

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

var G__37219_37739 = shadow.dom._to_svg;
var G__37220_37740 = "null";
var G__37221_37741 = (function (_){
return null;
});
goog.object.set(G__37219_37739,G__37220_37740,G__37221_37741);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37742 = arguments.length;
var i__4790__auto___37744 = (0);
while(true){
if((i__4790__auto___37744 < len__4789__auto___37742)){
args__4795__auto__.push((arguments[i__4790__auto___37744]));

var G__37745 = (i__4790__auto___37744 + (1));
i__4790__auto___37744 = G__37745;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37222){
var G__37223 = cljs.core.first(seq37222);
var seq37222__$1 = cljs.core.next(seq37222);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37223,seq37222__$1);
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
var G__37231 = arguments.length;
switch (G__37231) {
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
var G__37237_37769 = shadow.dom.dom_node(el);
var G__37238_37770 = cljs.core.name(event);
var G__37239_37771 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37237_37769,G__37238_37770,G__37239_37771) : shadow.dom.dom_listen.call(null,G__37237_37769,G__37238_37770,G__37239_37771));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__34280__auto___37772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_37245){
var state_val_37246 = (state_37245[(1)]);
if((state_val_37246 === (1))){
var state_37245__$1 = state_37245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37245__$1,(2),once_or_cleanup);
} else {
if((state_val_37246 === (2))){
var inst_37242 = (state_37245[(2)]);
var inst_37243 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37245__$1 = (function (){var statearr_37249 = state_37245;
(statearr_37249[(7)] = inst_37242);

return statearr_37249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37245__$1,inst_37243);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33893__auto__ = null;
var shadow$dom$state_machine__33893__auto____0 = (function (){
var statearr_37260 = [null,null,null,null,null,null,null,null];
(statearr_37260[(0)] = shadow$dom$state_machine__33893__auto__);

(statearr_37260[(1)] = (1));

return statearr_37260;
});
var shadow$dom$state_machine__33893__auto____1 = (function (state_37245){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_37245);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e37261){if((e37261 instanceof Object)){
var ex__33896__auto__ = e37261;
var statearr_37263_37773 = state_37245;
(statearr_37263_37773[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37774 = state_37245;
state_37245 = G__37774;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
shadow$dom$state_machine__33893__auto__ = function(state_37245){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33893__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33893__auto____1.call(this,state_37245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33893__auto____0;
shadow$dom$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33893__auto____1;
return shadow$dom$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_37265 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_37265[(6)] = c__34280__auto___37772);

return statearr_37265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
