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
return cljs.core.cons((coll[idx]),(function (){var G__32505 = coll;
var G__32506 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32505,G__32506) : shadow.dom.lazy_native_coll_seq.call(null,G__32505,G__32506));
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
var G__32528 = arguments.length;
switch (G__32528) {
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
var G__32541 = arguments.length;
switch (G__32541) {
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
var G__32551 = arguments.length;
switch (G__32551) {
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
var G__32564 = arguments.length;
switch (G__32564) {
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
var G__32580 = arguments.length;
switch (G__32580) {
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
var G__32582 = document;
var G__32583 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32582,G__32583);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32584 = shadow.dom.dom_node(parent);
var G__32585 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32584,G__32585);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32588 = shadow.dom.dom_node(el);
var G__32589 = cls;
return goog.dom.classlist.add(G__32588,G__32589);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32596 = shadow.dom.dom_node(el);
var G__32597 = cls;
return goog.dom.classlist.remove(G__32596,G__32597);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32607 = arguments.length;
switch (G__32607) {
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
var G__32620 = shadow.dom.dom_node(el);
var G__32621 = cls;
return goog.dom.classlist.toggle(G__32620,G__32621);
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
}catch (e32631){if((e32631 instanceof Object)){
var e = e32631;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32631;

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
var seq__32645 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32646 = null;
var count__32647 = (0);
var i__32648 = (0);
while(true){
if((i__32648 < count__32647)){
var el = chunk__32646.cljs$core$IIndexed$_nth$arity$2(null,i__32648);
var handler_33263__$1 = ((function (seq__32645,chunk__32646,count__32647,i__32648,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32645,chunk__32646,count__32647,i__32648,el))
;
var G__32661_33264 = el;
var G__32662_33265 = cljs.core.name(ev);
var G__32663_33266 = handler_33263__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32661_33264,G__32662_33265,G__32663_33266) : shadow.dom.dom_listen.call(null,G__32661_33264,G__32662_33265,G__32663_33266));


var G__33267 = seq__32645;
var G__33268 = chunk__32646;
var G__33269 = count__32647;
var G__33270 = (i__32648 + (1));
seq__32645 = G__33267;
chunk__32646 = G__33268;
count__32647 = G__33269;
i__32648 = G__33270;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32645);
if(temp__5735__auto__){
var seq__32645__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32645__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32645__$1);
var G__33274 = cljs.core.chunk_rest(seq__32645__$1);
var G__33275 = c__4609__auto__;
var G__33276 = cljs.core.count(c__4609__auto__);
var G__33277 = (0);
seq__32645 = G__33274;
chunk__32646 = G__33275;
count__32647 = G__33276;
i__32648 = G__33277;
continue;
} else {
var el = cljs.core.first(seq__32645__$1);
var handler_33279__$1 = ((function (seq__32645,chunk__32646,count__32647,i__32648,el,seq__32645__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32645,chunk__32646,count__32647,i__32648,el,seq__32645__$1,temp__5735__auto__))
;
var G__32665_33280 = el;
var G__32666_33281 = cljs.core.name(ev);
var G__32667_33282 = handler_33279__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32665_33280,G__32666_33281,G__32667_33282) : shadow.dom.dom_listen.call(null,G__32665_33280,G__32666_33281,G__32667_33282));


var G__33285 = cljs.core.next(seq__32645__$1);
var G__33286 = null;
var G__33287 = (0);
var G__33288 = (0);
seq__32645 = G__33285;
chunk__32646 = G__33286;
count__32647 = G__33287;
i__32648 = G__33288;
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
var G__32671 = arguments.length;
switch (G__32671) {
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
var G__32688 = shadow.dom.dom_node(el);
var G__32689 = cljs.core.name(ev);
var G__32690 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32688,G__32689,G__32690) : shadow.dom.dom_listen.call(null,G__32688,G__32689,G__32690));
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
var seq__32699 = cljs.core.seq(events);
var chunk__32700 = null;
var count__32701 = (0);
var i__32702 = (0);
while(true){
if((i__32702 < count__32701)){
var vec__32711 = chunk__32700.cljs$core$IIndexed$_nth$arity$2(null,i__32702);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32711,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32711,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33293 = seq__32699;
var G__33294 = chunk__32700;
var G__33295 = count__32701;
var G__33296 = (i__32702 + (1));
seq__32699 = G__33293;
chunk__32700 = G__33294;
count__32701 = G__33295;
i__32702 = G__33296;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32699);
if(temp__5735__auto__){
var seq__32699__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32699__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32699__$1);
var G__33298 = cljs.core.chunk_rest(seq__32699__$1);
var G__33299 = c__4609__auto__;
var G__33300 = cljs.core.count(c__4609__auto__);
var G__33301 = (0);
seq__32699 = G__33298;
chunk__32700 = G__33299;
count__32701 = G__33300;
i__32702 = G__33301;
continue;
} else {
var vec__32714 = cljs.core.first(seq__32699__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32714,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33303 = cljs.core.next(seq__32699__$1);
var G__33304 = null;
var G__33305 = (0);
var G__33306 = (0);
seq__32699 = G__33303;
chunk__32700 = G__33304;
count__32701 = G__33305;
i__32702 = G__33306;
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
var seq__32717 = cljs.core.seq(styles);
var chunk__32718 = null;
var count__32719 = (0);
var i__32720 = (0);
while(true){
if((i__32720 < count__32719)){
var vec__32737 = chunk__32718.cljs$core$IIndexed$_nth$arity$2(null,i__32720);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(1),null);
var G__32740_33308 = dom;
var G__32741_33309 = cljs.core.name(k);
var G__32742_33310 = (((v == null))?"":v);
goog.style.setStyle(G__32740_33308,G__32741_33309,G__32742_33310);


var G__33311 = seq__32717;
var G__33312 = chunk__32718;
var G__33313 = count__32719;
var G__33314 = (i__32720 + (1));
seq__32717 = G__33311;
chunk__32718 = G__33312;
count__32719 = G__33313;
i__32720 = G__33314;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32717);
if(temp__5735__auto__){
var seq__32717__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32717__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32717__$1);
var G__33317 = cljs.core.chunk_rest(seq__32717__$1);
var G__33318 = c__4609__auto__;
var G__33319 = cljs.core.count(c__4609__auto__);
var G__33320 = (0);
seq__32717 = G__33317;
chunk__32718 = G__33318;
count__32719 = G__33319;
i__32720 = G__33320;
continue;
} else {
var vec__32745 = cljs.core.first(seq__32717__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32745,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32745,(1),null);
var G__32748_33321 = dom;
var G__32749_33322 = cljs.core.name(k);
var G__32750_33323 = (((v == null))?"":v);
goog.style.setStyle(G__32748_33321,G__32749_33322,G__32750_33323);


var G__33324 = cljs.core.next(seq__32717__$1);
var G__33325 = null;
var G__33326 = (0);
var G__33327 = (0);
seq__32717 = G__33324;
chunk__32718 = G__33325;
count__32719 = G__33326;
i__32720 = G__33327;
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
var G__32756_33329 = key;
var G__32756_33330__$1 = (((G__32756_33329 instanceof cljs.core.Keyword))?G__32756_33329.fqn:null);
switch (G__32756_33330__$1) {
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
var ks_33334 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33334,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33334,"aria-");
}
})())){
el.setAttribute(ks_33334,value);
} else {
(el[ks_33334] = value);
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
var G__32773 = shadow.dom.dom_node(el);
var G__32774 = cls;
return goog.dom.classlist.contains(G__32773,G__32774);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32786){
var map__32787 = p__32786;
var map__32787__$1 = (((((!((map__32787 == null))))?(((((map__32787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32787):map__32787);
var props = map__32787__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32787__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32790 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32794 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32794,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32794;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32802 = arguments.length;
switch (G__32802) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32812){
var vec__32813 = p__32812;
var seq__32814 = cljs.core.seq(vec__32813);
var first__32815 = cljs.core.first(seq__32814);
var seq__32814__$1 = cljs.core.next(seq__32814);
var nn = first__32815;
var first__32815__$1 = cljs.core.first(seq__32814__$1);
var seq__32814__$2 = cljs.core.next(seq__32814__$1);
var np = first__32815__$1;
var nc = seq__32814__$2;
var node = vec__32813;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32819 = nn;
var G__32820 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32819,G__32820) : create_fn.call(null,G__32819,G__32820));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32823 = nn;
var G__32824 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32823,G__32824) : create_fn.call(null,G__32823,G__32824));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32828 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32828,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32828,(1),null);
var seq__32832_33349 = cljs.core.seq(node_children);
var chunk__32833_33350 = null;
var count__32834_33351 = (0);
var i__32835_33352 = (0);
while(true){
if((i__32835_33352 < count__32834_33351)){
var child_struct_33353 = chunk__32833_33350.cljs$core$IIndexed$_nth$arity$2(null,i__32835_33352);
var children_33355 = shadow.dom.dom_node(child_struct_33353);
if(cljs.core.seq_QMARK_(children_33355)){
var seq__32856_33356 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33355));
var chunk__32858_33357 = null;
var count__32859_33358 = (0);
var i__32860_33359 = (0);
while(true){
if((i__32860_33359 < count__32859_33358)){
var child_33361 = chunk__32858_33357.cljs$core$IIndexed$_nth$arity$2(null,i__32860_33359);
if(cljs.core.truth_(child_33361)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33361);


var G__33362 = seq__32856_33356;
var G__33363 = chunk__32858_33357;
var G__33364 = count__32859_33358;
var G__33365 = (i__32860_33359 + (1));
seq__32856_33356 = G__33362;
chunk__32858_33357 = G__33363;
count__32859_33358 = G__33364;
i__32860_33359 = G__33365;
continue;
} else {
var G__33366 = seq__32856_33356;
var G__33367 = chunk__32858_33357;
var G__33368 = count__32859_33358;
var G__33369 = (i__32860_33359 + (1));
seq__32856_33356 = G__33366;
chunk__32858_33357 = G__33367;
count__32859_33358 = G__33368;
i__32860_33359 = G__33369;
continue;
}
} else {
var temp__5735__auto___33370 = cljs.core.seq(seq__32856_33356);
if(temp__5735__auto___33370){
var seq__32856_33372__$1 = temp__5735__auto___33370;
if(cljs.core.chunked_seq_QMARK_(seq__32856_33372__$1)){
var c__4609__auto___33373 = cljs.core.chunk_first(seq__32856_33372__$1);
var G__33374 = cljs.core.chunk_rest(seq__32856_33372__$1);
var G__33375 = c__4609__auto___33373;
var G__33376 = cljs.core.count(c__4609__auto___33373);
var G__33377 = (0);
seq__32856_33356 = G__33374;
chunk__32858_33357 = G__33375;
count__32859_33358 = G__33376;
i__32860_33359 = G__33377;
continue;
} else {
var child_33379 = cljs.core.first(seq__32856_33372__$1);
if(cljs.core.truth_(child_33379)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33379);


var G__33380 = cljs.core.next(seq__32856_33372__$1);
var G__33381 = null;
var G__33382 = (0);
var G__33383 = (0);
seq__32856_33356 = G__33380;
chunk__32858_33357 = G__33381;
count__32859_33358 = G__33382;
i__32860_33359 = G__33383;
continue;
} else {
var G__33384 = cljs.core.next(seq__32856_33372__$1);
var G__33385 = null;
var G__33386 = (0);
var G__33387 = (0);
seq__32856_33356 = G__33384;
chunk__32858_33357 = G__33385;
count__32859_33358 = G__33386;
i__32860_33359 = G__33387;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33355);
}


var G__33388 = seq__32832_33349;
var G__33389 = chunk__32833_33350;
var G__33390 = count__32834_33351;
var G__33391 = (i__32835_33352 + (1));
seq__32832_33349 = G__33388;
chunk__32833_33350 = G__33389;
count__32834_33351 = G__33390;
i__32835_33352 = G__33391;
continue;
} else {
var temp__5735__auto___33392 = cljs.core.seq(seq__32832_33349);
if(temp__5735__auto___33392){
var seq__32832_33393__$1 = temp__5735__auto___33392;
if(cljs.core.chunked_seq_QMARK_(seq__32832_33393__$1)){
var c__4609__auto___33394 = cljs.core.chunk_first(seq__32832_33393__$1);
var G__33395 = cljs.core.chunk_rest(seq__32832_33393__$1);
var G__33396 = c__4609__auto___33394;
var G__33397 = cljs.core.count(c__4609__auto___33394);
var G__33398 = (0);
seq__32832_33349 = G__33395;
chunk__32833_33350 = G__33396;
count__32834_33351 = G__33397;
i__32835_33352 = G__33398;
continue;
} else {
var child_struct_33399 = cljs.core.first(seq__32832_33393__$1);
var children_33400 = shadow.dom.dom_node(child_struct_33399);
if(cljs.core.seq_QMARK_(children_33400)){
var seq__32862_33401 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33400));
var chunk__32864_33402 = null;
var count__32865_33403 = (0);
var i__32866_33404 = (0);
while(true){
if((i__32866_33404 < count__32865_33403)){
var child_33405 = chunk__32864_33402.cljs$core$IIndexed$_nth$arity$2(null,i__32866_33404);
if(cljs.core.truth_(child_33405)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33405);


var G__33406 = seq__32862_33401;
var G__33407 = chunk__32864_33402;
var G__33408 = count__32865_33403;
var G__33409 = (i__32866_33404 + (1));
seq__32862_33401 = G__33406;
chunk__32864_33402 = G__33407;
count__32865_33403 = G__33408;
i__32866_33404 = G__33409;
continue;
} else {
var G__33410 = seq__32862_33401;
var G__33411 = chunk__32864_33402;
var G__33412 = count__32865_33403;
var G__33413 = (i__32866_33404 + (1));
seq__32862_33401 = G__33410;
chunk__32864_33402 = G__33411;
count__32865_33403 = G__33412;
i__32866_33404 = G__33413;
continue;
}
} else {
var temp__5735__auto___33414__$1 = cljs.core.seq(seq__32862_33401);
if(temp__5735__auto___33414__$1){
var seq__32862_33415__$1 = temp__5735__auto___33414__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32862_33415__$1)){
var c__4609__auto___33416 = cljs.core.chunk_first(seq__32862_33415__$1);
var G__33417 = cljs.core.chunk_rest(seq__32862_33415__$1);
var G__33418 = c__4609__auto___33416;
var G__33419 = cljs.core.count(c__4609__auto___33416);
var G__33420 = (0);
seq__32862_33401 = G__33417;
chunk__32864_33402 = G__33418;
count__32865_33403 = G__33419;
i__32866_33404 = G__33420;
continue;
} else {
var child_33421 = cljs.core.first(seq__32862_33415__$1);
if(cljs.core.truth_(child_33421)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33421);


var G__33422 = cljs.core.next(seq__32862_33415__$1);
var G__33423 = null;
var G__33424 = (0);
var G__33425 = (0);
seq__32862_33401 = G__33422;
chunk__32864_33402 = G__33423;
count__32865_33403 = G__33424;
i__32866_33404 = G__33425;
continue;
} else {
var G__33426 = cljs.core.next(seq__32862_33415__$1);
var G__33427 = null;
var G__33428 = (0);
var G__33429 = (0);
seq__32862_33401 = G__33426;
chunk__32864_33402 = G__33427;
count__32865_33403 = G__33428;
i__32866_33404 = G__33429;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33400);
}


var G__33430 = cljs.core.next(seq__32832_33393__$1);
var G__33431 = null;
var G__33432 = (0);
var G__33433 = (0);
seq__32832_33349 = G__33430;
chunk__32833_33350 = G__33431;
count__32834_33351 = G__33432;
i__32835_33352 = G__33433;
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
var G__32874 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32874);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32876 = cljs.core.seq(node);
var chunk__32877 = null;
var count__32878 = (0);
var i__32879 = (0);
while(true){
if((i__32879 < count__32878)){
var n = chunk__32877.cljs$core$IIndexed$_nth$arity$2(null,i__32879);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33436 = seq__32876;
var G__33437 = chunk__32877;
var G__33438 = count__32878;
var G__33439 = (i__32879 + (1));
seq__32876 = G__33436;
chunk__32877 = G__33437;
count__32878 = G__33438;
i__32879 = G__33439;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32876);
if(temp__5735__auto__){
var seq__32876__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32876__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32876__$1);
var G__33440 = cljs.core.chunk_rest(seq__32876__$1);
var G__33441 = c__4609__auto__;
var G__33442 = cljs.core.count(c__4609__auto__);
var G__33443 = (0);
seq__32876 = G__33440;
chunk__32877 = G__33441;
count__32878 = G__33442;
i__32879 = G__33443;
continue;
} else {
var n = cljs.core.first(seq__32876__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33444 = cljs.core.next(seq__32876__$1);
var G__33445 = null;
var G__33446 = (0);
var G__33447 = (0);
seq__32876 = G__33444;
chunk__32877 = G__33445;
count__32878 = G__33446;
i__32879 = G__33447;
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
var G__32880 = shadow.dom.dom_node(new$);
var G__32881 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32880,G__32881);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32883 = arguments.length;
switch (G__32883) {
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
var G__32885 = arguments.length;
switch (G__32885) {
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
var G__32887 = arguments.length;
switch (G__32887) {
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
var len__4789__auto___33454 = arguments.length;
var i__4790__auto___33455 = (0);
while(true){
if((i__4790__auto___33455 < len__4789__auto___33454)){
args__4795__auto__.push((arguments[i__4790__auto___33455]));

var G__33456 = (i__4790__auto___33455 + (1));
i__4790__auto___33455 = G__33456;
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
var seq__32893_33457 = cljs.core.seq(nodes);
var chunk__32894_33458 = null;
var count__32895_33459 = (0);
var i__32896_33460 = (0);
while(true){
if((i__32896_33460 < count__32895_33459)){
var node_33462 = chunk__32894_33458.cljs$core$IIndexed$_nth$arity$2(null,i__32896_33460);
fragment.appendChild(shadow.dom._to_dom(node_33462));


var G__33463 = seq__32893_33457;
var G__33464 = chunk__32894_33458;
var G__33465 = count__32895_33459;
var G__33466 = (i__32896_33460 + (1));
seq__32893_33457 = G__33463;
chunk__32894_33458 = G__33464;
count__32895_33459 = G__33465;
i__32896_33460 = G__33466;
continue;
} else {
var temp__5735__auto___33468 = cljs.core.seq(seq__32893_33457);
if(temp__5735__auto___33468){
var seq__32893_33469__$1 = temp__5735__auto___33468;
if(cljs.core.chunked_seq_QMARK_(seq__32893_33469__$1)){
var c__4609__auto___33470 = cljs.core.chunk_first(seq__32893_33469__$1);
var G__33471 = cljs.core.chunk_rest(seq__32893_33469__$1);
var G__33472 = c__4609__auto___33470;
var G__33473 = cljs.core.count(c__4609__auto___33470);
var G__33474 = (0);
seq__32893_33457 = G__33471;
chunk__32894_33458 = G__33472;
count__32895_33459 = G__33473;
i__32896_33460 = G__33474;
continue;
} else {
var node_33475 = cljs.core.first(seq__32893_33469__$1);
fragment.appendChild(shadow.dom._to_dom(node_33475));


var G__33476 = cljs.core.next(seq__32893_33469__$1);
var G__33477 = null;
var G__33478 = (0);
var G__33479 = (0);
seq__32893_33457 = G__33476;
chunk__32894_33458 = G__33477;
count__32895_33459 = G__33478;
i__32896_33460 = G__33479;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32890){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32890));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32903_33480 = cljs.core.seq(scripts);
var chunk__32904_33481 = null;
var count__32905_33482 = (0);
var i__32906_33483 = (0);
while(true){
if((i__32906_33483 < count__32905_33482)){
var vec__32920_33484 = chunk__32904_33481.cljs$core$IIndexed$_nth$arity$2(null,i__32906_33483);
var script_tag_33485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32920_33484,(0),null);
var script_body_33486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32920_33484,(1),null);
eval(script_body_33486);


var G__33488 = seq__32903_33480;
var G__33489 = chunk__32904_33481;
var G__33490 = count__32905_33482;
var G__33491 = (i__32906_33483 + (1));
seq__32903_33480 = G__33488;
chunk__32904_33481 = G__33489;
count__32905_33482 = G__33490;
i__32906_33483 = G__33491;
continue;
} else {
var temp__5735__auto___33492 = cljs.core.seq(seq__32903_33480);
if(temp__5735__auto___33492){
var seq__32903_33493__$1 = temp__5735__auto___33492;
if(cljs.core.chunked_seq_QMARK_(seq__32903_33493__$1)){
var c__4609__auto___33494 = cljs.core.chunk_first(seq__32903_33493__$1);
var G__33495 = cljs.core.chunk_rest(seq__32903_33493__$1);
var G__33496 = c__4609__auto___33494;
var G__33497 = cljs.core.count(c__4609__auto___33494);
var G__33498 = (0);
seq__32903_33480 = G__33495;
chunk__32904_33481 = G__33496;
count__32905_33482 = G__33497;
i__32906_33483 = G__33498;
continue;
} else {
var vec__32925_33499 = cljs.core.first(seq__32903_33493__$1);
var script_tag_33500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32925_33499,(0),null);
var script_body_33501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32925_33499,(1),null);
eval(script_body_33501);


var G__33502 = cljs.core.next(seq__32903_33493__$1);
var G__33503 = null;
var G__33504 = (0);
var G__33505 = (0);
seq__32903_33480 = G__33502;
chunk__32904_33481 = G__33503;
count__32905_33482 = G__33504;
i__32906_33483 = G__33505;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32929){
var vec__32931 = p__32929;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32931,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32931,(1),null);
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
var G__32944 = shadow.dom.dom_node(el);
var G__32945 = cls;
return goog.dom.getAncestorByClass(G__32944,G__32945);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32952 = arguments.length;
switch (G__32952) {
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
var G__32959 = shadow.dom.dom_node(el);
var G__32960 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32959,G__32960);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32961 = shadow.dom.dom_node(el);
var G__32962 = cljs.core.name(tag);
var G__32963 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32961,G__32962,G__32963);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32969 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32969);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32971 = shadow.dom.dom_node(dom);
var G__32972 = value;
return goog.dom.forms.setValue(G__32971,G__32972);
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
var seq__32975 = cljs.core.seq(style_keys);
var chunk__32976 = null;
var count__32977 = (0);
var i__32978 = (0);
while(true){
if((i__32978 < count__32977)){
var it = chunk__32976.cljs$core$IIndexed$_nth$arity$2(null,i__32978);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33513 = seq__32975;
var G__33514 = chunk__32976;
var G__33515 = count__32977;
var G__33516 = (i__32978 + (1));
seq__32975 = G__33513;
chunk__32976 = G__33514;
count__32977 = G__33515;
i__32978 = G__33516;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32975);
if(temp__5735__auto__){
var seq__32975__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32975__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32975__$1);
var G__33517 = cljs.core.chunk_rest(seq__32975__$1);
var G__33518 = c__4609__auto__;
var G__33519 = cljs.core.count(c__4609__auto__);
var G__33520 = (0);
seq__32975 = G__33517;
chunk__32976 = G__33518;
count__32977 = G__33519;
i__32978 = G__33520;
continue;
} else {
var it = cljs.core.first(seq__32975__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33521 = cljs.core.next(seq__32975__$1);
var G__33522 = null;
var G__33523 = (0);
var G__33524 = (0);
seq__32975 = G__33521;
chunk__32976 = G__33522;
count__32977 = G__33523;
i__32978 = G__33524;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32980,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32984 = k32980;
var G__32984__$1 = (((G__32984 instanceof cljs.core.Keyword))?G__32984.fqn:null);
switch (G__32984__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32980,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32985){
var vec__32986 = p__32985;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32986,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32986,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32979){
var self__ = this;
var G__32979__$1 = this;
return (new cljs.core.RecordIter((0),G__32979__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__32989 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32989(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32981,other32982){
var self__ = this;
var this32981__$1 = this;
return (((!((other32982 == null)))) && ((this32981__$1.constructor === other32982.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32981__$1.x,other32982.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32981__$1.y,other32982.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32981__$1.__extmap,other32982.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32979){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32991 = cljs.core.keyword_identical_QMARK_;
var expr__32992 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32994 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__32995 = expr__32992;
return (pred__32991.cljs$core$IFn$_invoke$arity$2 ? pred__32991.cljs$core$IFn$_invoke$arity$2(G__32994,G__32995) : pred__32991.call(null,G__32994,G__32995));
})())){
return (new shadow.dom.Coordinate(G__32979,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32996 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__32997 = expr__32992;
return (pred__32991.cljs$core$IFn$_invoke$arity$2 ? pred__32991.cljs$core$IFn$_invoke$arity$2(G__32996,G__32997) : pred__32991.call(null,G__32996,G__32997));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32979,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32979),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32979){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32979,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32983){
var extmap__4478__auto__ = (function (){var G__33003 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32983,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32983)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33003);
} else {
return G__33003;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32983),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32983),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33008 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33008);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33013 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33013);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33015 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33015);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33019,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33026 = k33019;
var G__33026__$1 = (((G__33026 instanceof cljs.core.Keyword))?G__33026.fqn:null);
switch (G__33026__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33019,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33030){
var vec__33031 = p__33030;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33031,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33031,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33018){
var self__ = this;
var G__33018__$1 = this;
return (new cljs.core.RecordIter((0),G__33018__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__33041 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__33041(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33020,other33021){
var self__ = this;
var this33020__$1 = this;
return (((!((other33021 == null)))) && ((this33020__$1.constructor === other33021.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33020__$1.w,other33021.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33020__$1.h,other33021.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33020__$1.__extmap,other33021.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33018){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33045 = cljs.core.keyword_identical_QMARK_;
var expr__33046 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__33048 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33049 = expr__33046;
return (pred__33045.cljs$core$IFn$_invoke$arity$2 ? pred__33045.cljs$core$IFn$_invoke$arity$2(G__33048,G__33049) : pred__33045.call(null,G__33048,G__33049));
})())){
return (new shadow.dom.Size(G__33018,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33050 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33051 = expr__33046;
return (pred__33045.cljs$core$IFn$_invoke$arity$2 ? pred__33045.cljs$core$IFn$_invoke$arity$2(G__33050,G__33051) : pred__33045.call(null,G__33050,G__33051));
})())){
return (new shadow.dom.Size(self__.w,G__33018,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33018),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33018){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33018,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33022){
var extmap__4478__auto__ = (function (){var G__33057 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33022,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33022)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33057);
} else {
return G__33057;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33022),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33022),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33064 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33064);
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
var G__33547 = (i + (1));
var G__33548 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33547;
ret = G__33548;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33076){
var vec__33077 = p__33076;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33077,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33081 = arguments.length;
switch (G__33081) {
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
var G__33086_33550 = new_node;
var G__33087_33551 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33086_33550,G__33087_33551);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33090_33552 = new_node;
var G__33091_33553 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33090_33552,G__33091_33553);

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
var G__33556 = ps;
var G__33557 = (i + (1));
el__$1 = G__33556;
i = G__33557;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33099 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33099);
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
var G__33106 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33106);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33110 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33110,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33110,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33110,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33114_33560 = cljs.core.seq(props);
var chunk__33115_33561 = null;
var count__33116_33562 = (0);
var i__33117_33563 = (0);
while(true){
if((i__33117_33563 < count__33116_33562)){
var vec__33130_33568 = chunk__33115_33561.cljs$core$IIndexed$_nth$arity$2(null,i__33117_33563);
var k_33569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130_33568,(0),null);
var v_33570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33130_33568,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33569);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33569),v_33570);


var G__33574 = seq__33114_33560;
var G__33575 = chunk__33115_33561;
var G__33576 = count__33116_33562;
var G__33577 = (i__33117_33563 + (1));
seq__33114_33560 = G__33574;
chunk__33115_33561 = G__33575;
count__33116_33562 = G__33576;
i__33117_33563 = G__33577;
continue;
} else {
var temp__5735__auto___33578 = cljs.core.seq(seq__33114_33560);
if(temp__5735__auto___33578){
var seq__33114_33579__$1 = temp__5735__auto___33578;
if(cljs.core.chunked_seq_QMARK_(seq__33114_33579__$1)){
var c__4609__auto___33580 = cljs.core.chunk_first(seq__33114_33579__$1);
var G__33581 = cljs.core.chunk_rest(seq__33114_33579__$1);
var G__33582 = c__4609__auto___33580;
var G__33583 = cljs.core.count(c__4609__auto___33580);
var G__33584 = (0);
seq__33114_33560 = G__33581;
chunk__33115_33561 = G__33582;
count__33116_33562 = G__33583;
i__33117_33563 = G__33584;
continue;
} else {
var vec__33135_33585 = cljs.core.first(seq__33114_33579__$1);
var k_33586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33135_33585,(0),null);
var v_33587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33135_33585,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33586);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33586),v_33587);


var G__33588 = cljs.core.next(seq__33114_33579__$1);
var G__33589 = null;
var G__33590 = (0);
var G__33591 = (0);
seq__33114_33560 = G__33588;
chunk__33115_33561 = G__33589;
count__33116_33562 = G__33590;
i__33117_33563 = G__33591;
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
var seq__33142_33595 = cljs.core.seq(node_children);
var chunk__33144_33596 = null;
var count__33145_33597 = (0);
var i__33146_33598 = (0);
while(true){
if((i__33146_33598 < count__33145_33597)){
var child_struct_33599 = chunk__33144_33596.cljs$core$IIndexed$_nth$arity$2(null,i__33146_33598);
if((!((child_struct_33599 == null)))){
if(typeof child_struct_33599 === 'string'){
var text_33600 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33600),child_struct_33599].join(''));
} else {
var children_33601 = shadow.dom.svg_node(child_struct_33599);
if(cljs.core.seq_QMARK_(children_33601)){
var seq__33160_33602 = cljs.core.seq(children_33601);
var chunk__33162_33603 = null;
var count__33163_33604 = (0);
var i__33164_33605 = (0);
while(true){
if((i__33164_33605 < count__33163_33604)){
var child_33606 = chunk__33162_33603.cljs$core$IIndexed$_nth$arity$2(null,i__33164_33605);
if(cljs.core.truth_(child_33606)){
node.appendChild(child_33606);


var G__33607 = seq__33160_33602;
var G__33608 = chunk__33162_33603;
var G__33609 = count__33163_33604;
var G__33610 = (i__33164_33605 + (1));
seq__33160_33602 = G__33607;
chunk__33162_33603 = G__33608;
count__33163_33604 = G__33609;
i__33164_33605 = G__33610;
continue;
} else {
var G__33611 = seq__33160_33602;
var G__33612 = chunk__33162_33603;
var G__33613 = count__33163_33604;
var G__33614 = (i__33164_33605 + (1));
seq__33160_33602 = G__33611;
chunk__33162_33603 = G__33612;
count__33163_33604 = G__33613;
i__33164_33605 = G__33614;
continue;
}
} else {
var temp__5735__auto___33615 = cljs.core.seq(seq__33160_33602);
if(temp__5735__auto___33615){
var seq__33160_33619__$1 = temp__5735__auto___33615;
if(cljs.core.chunked_seq_QMARK_(seq__33160_33619__$1)){
var c__4609__auto___33620 = cljs.core.chunk_first(seq__33160_33619__$1);
var G__33621 = cljs.core.chunk_rest(seq__33160_33619__$1);
var G__33622 = c__4609__auto___33620;
var G__33623 = cljs.core.count(c__4609__auto___33620);
var G__33624 = (0);
seq__33160_33602 = G__33621;
chunk__33162_33603 = G__33622;
count__33163_33604 = G__33623;
i__33164_33605 = G__33624;
continue;
} else {
var child_33625 = cljs.core.first(seq__33160_33619__$1);
if(cljs.core.truth_(child_33625)){
node.appendChild(child_33625);


var G__33626 = cljs.core.next(seq__33160_33619__$1);
var G__33627 = null;
var G__33628 = (0);
var G__33629 = (0);
seq__33160_33602 = G__33626;
chunk__33162_33603 = G__33627;
count__33163_33604 = G__33628;
i__33164_33605 = G__33629;
continue;
} else {
var G__33630 = cljs.core.next(seq__33160_33619__$1);
var G__33631 = null;
var G__33632 = (0);
var G__33633 = (0);
seq__33160_33602 = G__33630;
chunk__33162_33603 = G__33631;
count__33163_33604 = G__33632;
i__33164_33605 = G__33633;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33601);
}
}


var G__33634 = seq__33142_33595;
var G__33635 = chunk__33144_33596;
var G__33636 = count__33145_33597;
var G__33637 = (i__33146_33598 + (1));
seq__33142_33595 = G__33634;
chunk__33144_33596 = G__33635;
count__33145_33597 = G__33636;
i__33146_33598 = G__33637;
continue;
} else {
var G__33638 = seq__33142_33595;
var G__33639 = chunk__33144_33596;
var G__33640 = count__33145_33597;
var G__33641 = (i__33146_33598 + (1));
seq__33142_33595 = G__33638;
chunk__33144_33596 = G__33639;
count__33145_33597 = G__33640;
i__33146_33598 = G__33641;
continue;
}
} else {
var temp__5735__auto___33642 = cljs.core.seq(seq__33142_33595);
if(temp__5735__auto___33642){
var seq__33142_33643__$1 = temp__5735__auto___33642;
if(cljs.core.chunked_seq_QMARK_(seq__33142_33643__$1)){
var c__4609__auto___33644 = cljs.core.chunk_first(seq__33142_33643__$1);
var G__33645 = cljs.core.chunk_rest(seq__33142_33643__$1);
var G__33646 = c__4609__auto___33644;
var G__33647 = cljs.core.count(c__4609__auto___33644);
var G__33648 = (0);
seq__33142_33595 = G__33645;
chunk__33144_33596 = G__33646;
count__33145_33597 = G__33647;
i__33146_33598 = G__33648;
continue;
} else {
var child_struct_33649 = cljs.core.first(seq__33142_33643__$1);
if((!((child_struct_33649 == null)))){
if(typeof child_struct_33649 === 'string'){
var text_33650 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33650),child_struct_33649].join(''));
} else {
var children_33654 = shadow.dom.svg_node(child_struct_33649);
if(cljs.core.seq_QMARK_(children_33654)){
var seq__33174_33655 = cljs.core.seq(children_33654);
var chunk__33176_33656 = null;
var count__33177_33657 = (0);
var i__33178_33658 = (0);
while(true){
if((i__33178_33658 < count__33177_33657)){
var child_33659 = chunk__33176_33656.cljs$core$IIndexed$_nth$arity$2(null,i__33178_33658);
if(cljs.core.truth_(child_33659)){
node.appendChild(child_33659);


var G__33660 = seq__33174_33655;
var G__33661 = chunk__33176_33656;
var G__33662 = count__33177_33657;
var G__33663 = (i__33178_33658 + (1));
seq__33174_33655 = G__33660;
chunk__33176_33656 = G__33661;
count__33177_33657 = G__33662;
i__33178_33658 = G__33663;
continue;
} else {
var G__33664 = seq__33174_33655;
var G__33665 = chunk__33176_33656;
var G__33666 = count__33177_33657;
var G__33667 = (i__33178_33658 + (1));
seq__33174_33655 = G__33664;
chunk__33176_33656 = G__33665;
count__33177_33657 = G__33666;
i__33178_33658 = G__33667;
continue;
}
} else {
var temp__5735__auto___33668__$1 = cljs.core.seq(seq__33174_33655);
if(temp__5735__auto___33668__$1){
var seq__33174_33669__$1 = temp__5735__auto___33668__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33174_33669__$1)){
var c__4609__auto___33670 = cljs.core.chunk_first(seq__33174_33669__$1);
var G__33671 = cljs.core.chunk_rest(seq__33174_33669__$1);
var G__33672 = c__4609__auto___33670;
var G__33673 = cljs.core.count(c__4609__auto___33670);
var G__33674 = (0);
seq__33174_33655 = G__33671;
chunk__33176_33656 = G__33672;
count__33177_33657 = G__33673;
i__33178_33658 = G__33674;
continue;
} else {
var child_33675 = cljs.core.first(seq__33174_33669__$1);
if(cljs.core.truth_(child_33675)){
node.appendChild(child_33675);


var G__33676 = cljs.core.next(seq__33174_33669__$1);
var G__33677 = null;
var G__33678 = (0);
var G__33679 = (0);
seq__33174_33655 = G__33676;
chunk__33176_33656 = G__33677;
count__33177_33657 = G__33678;
i__33178_33658 = G__33679;
continue;
} else {
var G__33680 = cljs.core.next(seq__33174_33669__$1);
var G__33681 = null;
var G__33682 = (0);
var G__33683 = (0);
seq__33174_33655 = G__33680;
chunk__33176_33656 = G__33681;
count__33177_33657 = G__33682;
i__33178_33658 = G__33683;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33654);
}
}


var G__33684 = cljs.core.next(seq__33142_33643__$1);
var G__33685 = null;
var G__33686 = (0);
var G__33687 = (0);
seq__33142_33595 = G__33684;
chunk__33144_33596 = G__33685;
count__33145_33597 = G__33686;
i__33146_33598 = G__33687;
continue;
} else {
var G__33688 = cljs.core.next(seq__33142_33643__$1);
var G__33689 = null;
var G__33690 = (0);
var G__33691 = (0);
seq__33142_33595 = G__33688;
chunk__33144_33596 = G__33689;
count__33145_33597 = G__33690;
i__33146_33598 = G__33691;
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

var G__33186_33692 = shadow.dom._to_svg;
var G__33187_33693 = "string";
var G__33188_33694 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__33186_33692,G__33187_33693,G__33188_33694);

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

var G__33191_33699 = shadow.dom._to_svg;
var G__33192_33700 = "null";
var G__33193_33701 = (function (_){
return null;
});
goog.object.set(G__33191_33699,G__33192_33700,G__33193_33701);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33702 = arguments.length;
var i__4790__auto___33703 = (0);
while(true){
if((i__4790__auto___33703 < len__4789__auto___33702)){
args__4795__auto__.push((arguments[i__4790__auto___33703]));

var G__33704 = (i__4790__auto___33703 + (1));
i__4790__auto___33703 = G__33704;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33196){
var G__33197 = cljs.core.first(seq33196);
var seq33196__$1 = cljs.core.next(seq33196);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33197,seq33196__$1);
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
var G__33205 = arguments.length;
switch (G__33205) {
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
var G__33211_33706 = shadow.dom.dom_node(el);
var G__33212_33707 = cljs.core.name(event);
var G__33213_33708 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33211_33706,G__33212_33707,G__33213_33708) : shadow.dom.dom_listen.call(null,G__33211_33706,G__33212_33707,G__33213_33708));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29967__auto___33709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29968__auto__ = (function (){var switch__29657__auto__ = (function (state_33220){
var state_val_33221 = (state_33220[(1)]);
if((state_val_33221 === (1))){
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33220__$1,(2),once_or_cleanup);
} else {
if((state_val_33221 === (2))){
var inst_33217 = (state_33220[(2)]);
var inst_33218 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33220__$1 = (function (){var statearr_33228 = state_33220;
(statearr_33228[(7)] = inst_33217);

return statearr_33228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33220__$1,inst_33218);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29658__auto__ = null;
var shadow$dom$state_machine__29658__auto____0 = (function (){
var statearr_33229 = [null,null,null,null,null,null,null,null];
(statearr_33229[(0)] = shadow$dom$state_machine__29658__auto__);

(statearr_33229[(1)] = (1));

return statearr_33229;
});
var shadow$dom$state_machine__29658__auto____1 = (function (state_33220){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__(state_33220);
if(cljs.core.keyword_identical_QMARK_(result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e33230){if((e33230 instanceof Object)){
var ex__29661__auto__ = e33230;
var statearr_33233_33712 = state_33220;
(statearr_33233_33712[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33713 = state_33220;
state_33220 = G__33713;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
shadow$dom$state_machine__29658__auto__ = function(state_33220){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29658__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29658__auto____1.call(this,state_33220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29658__auto____0;
shadow$dom$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29658__auto____1;
return shadow$dom$state_machine__29658__auto__;
})()
})();
var state__29969__auto__ = (function (){var statearr_33234 = (f__29968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29968__auto__.cljs$core$IFn$_invoke$arity$0() : f__29968__auto__.call(null));
(statearr_33234[(6)] = c__29967__auto___33709);

return statearr_33234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29969__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
