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
return cljs.core.cons((coll[idx]),(function (){var G__32585 = coll;
var G__32586 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32585,G__32586) : shadow.dom.lazy_native_coll_seq.call(null,G__32585,G__32586));
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
var G__32633 = arguments.length;
switch (G__32633) {
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
var G__32639 = arguments.length;
switch (G__32639) {
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
var G__32646 = arguments.length;
switch (G__32646) {
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
var G__32656 = arguments.length;
switch (G__32656) {
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
var G__32660 = arguments.length;
switch (G__32660) {
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
var G__32661 = document;
var G__32662 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32661,G__32662);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32663 = shadow.dom.dom_node(parent);
var G__32664 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32663,G__32664);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32665 = shadow.dom.dom_node(el);
var G__32666 = cls;
return goog.dom.classlist.add(G__32665,G__32666);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32667 = shadow.dom.dom_node(el);
var G__32668 = cls;
return goog.dom.classlist.remove(G__32667,G__32668);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32670 = arguments.length;
switch (G__32670) {
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
var G__32671 = shadow.dom.dom_node(el);
var G__32672 = cls;
return goog.dom.classlist.toggle(G__32671,G__32672);
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
}catch (e32677){if((e32677 instanceof Object)){
var e = e32677;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32677;

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
var seq__32685 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32686 = null;
var count__32687 = (0);
var i__32688 = (0);
while(true){
if((i__32688 < count__32687)){
var el = chunk__32686.cljs$core$IIndexed$_nth$arity$2(null,i__32688);
var handler_33278__$1 = ((function (seq__32685,chunk__32686,count__32687,i__32688,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32685,chunk__32686,count__32687,i__32688,el))
;
var G__32696_33279 = el;
var G__32697_33280 = cljs.core.name(ev);
var G__32698_33281 = handler_33278__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32696_33279,G__32697_33280,G__32698_33281) : shadow.dom.dom_listen.call(null,G__32696_33279,G__32697_33280,G__32698_33281));


var G__33282 = seq__32685;
var G__33283 = chunk__32686;
var G__33284 = count__32687;
var G__33285 = (i__32688 + (1));
seq__32685 = G__33282;
chunk__32686 = G__33283;
count__32687 = G__33284;
i__32688 = G__33285;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32685);
if(temp__5735__auto__){
var seq__32685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32685__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32685__$1);
var G__33286 = cljs.core.chunk_rest(seq__32685__$1);
var G__33287 = c__4609__auto__;
var G__33288 = cljs.core.count(c__4609__auto__);
var G__33289 = (0);
seq__32685 = G__33286;
chunk__32686 = G__33287;
count__32687 = G__33288;
i__32688 = G__33289;
continue;
} else {
var el = cljs.core.first(seq__32685__$1);
var handler_33290__$1 = ((function (seq__32685,chunk__32686,count__32687,i__32688,el,seq__32685__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32685,chunk__32686,count__32687,i__32688,el,seq__32685__$1,temp__5735__auto__))
;
var G__32701_33291 = el;
var G__32702_33292 = cljs.core.name(ev);
var G__32703_33293 = handler_33290__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32701_33291,G__32702_33292,G__32703_33293) : shadow.dom.dom_listen.call(null,G__32701_33291,G__32702_33292,G__32703_33293));


var G__33294 = cljs.core.next(seq__32685__$1);
var G__33295 = null;
var G__33296 = (0);
var G__33297 = (0);
seq__32685 = G__33294;
chunk__32686 = G__33295;
count__32687 = G__33296;
i__32688 = G__33297;
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
var G__32707 = arguments.length;
switch (G__32707) {
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
var G__32713 = shadow.dom.dom_node(el);
var G__32714 = cljs.core.name(ev);
var G__32715 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32713,G__32714,G__32715) : shadow.dom.dom_listen.call(null,G__32713,G__32714,G__32715));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32716 = shadow.dom.dom_node(el);
var G__32717 = cljs.core.name(ev);
var G__32718 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32716,G__32717,G__32718) : shadow.dom.dom_listen_remove.call(null,G__32716,G__32717,G__32718));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32720 = cljs.core.seq(events);
var chunk__32721 = null;
var count__32722 = (0);
var i__32723 = (0);
while(true){
if((i__32723 < count__32722)){
var vec__32734 = chunk__32721.cljs$core$IIndexed$_nth$arity$2(null,i__32723);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32734,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32734,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33299 = seq__32720;
var G__33300 = chunk__32721;
var G__33301 = count__32722;
var G__33302 = (i__32723 + (1));
seq__32720 = G__33299;
chunk__32721 = G__33300;
count__32722 = G__33301;
i__32723 = G__33302;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32720);
if(temp__5735__auto__){
var seq__32720__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32720__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32720__$1);
var G__33303 = cljs.core.chunk_rest(seq__32720__$1);
var G__33304 = c__4609__auto__;
var G__33305 = cljs.core.count(c__4609__auto__);
var G__33306 = (0);
seq__32720 = G__33303;
chunk__32721 = G__33304;
count__32722 = G__33305;
i__32723 = G__33306;
continue;
} else {
var vec__32739 = cljs.core.first(seq__32720__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32739,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32739,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33307 = cljs.core.next(seq__32720__$1);
var G__33308 = null;
var G__33309 = (0);
var G__33310 = (0);
seq__32720 = G__33307;
chunk__32721 = G__33308;
count__32722 = G__33309;
i__32723 = G__33310;
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
var seq__32746 = cljs.core.seq(styles);
var chunk__32747 = null;
var count__32748 = (0);
var i__32749 = (0);
while(true){
if((i__32749 < count__32748)){
var vec__32765 = chunk__32747.cljs$core$IIndexed$_nth$arity$2(null,i__32749);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32765,(1),null);
var G__32768_33311 = dom;
var G__32769_33312 = cljs.core.name(k);
var G__32770_33313 = (((v == null))?"":v);
goog.style.setStyle(G__32768_33311,G__32769_33312,G__32770_33313);


var G__33315 = seq__32746;
var G__33316 = chunk__32747;
var G__33317 = count__32748;
var G__33318 = (i__32749 + (1));
seq__32746 = G__33315;
chunk__32747 = G__33316;
count__32748 = G__33317;
i__32749 = G__33318;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32746);
if(temp__5735__auto__){
var seq__32746__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32746__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32746__$1);
var G__33320 = cljs.core.chunk_rest(seq__32746__$1);
var G__33321 = c__4609__auto__;
var G__33322 = cljs.core.count(c__4609__auto__);
var G__33323 = (0);
seq__32746 = G__33320;
chunk__32747 = G__33321;
count__32748 = G__33322;
i__32749 = G__33323;
continue;
} else {
var vec__32774 = cljs.core.first(seq__32746__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32774,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32774,(1),null);
var G__32778_33324 = dom;
var G__32779_33325 = cljs.core.name(k);
var G__32780_33326 = (((v == null))?"":v);
goog.style.setStyle(G__32778_33324,G__32779_33325,G__32780_33326);


var G__33327 = cljs.core.next(seq__32746__$1);
var G__33328 = null;
var G__33329 = (0);
var G__33330 = (0);
seq__32746 = G__33327;
chunk__32747 = G__33328;
count__32748 = G__33329;
i__32749 = G__33330;
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
var G__32783_33331 = key;
var G__32783_33332__$1 = (((G__32783_33331 instanceof cljs.core.Keyword))?G__32783_33331.fqn:null);
switch (G__32783_33332__$1) {
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
var G__32797 = shadow.dom.dom_node(el);
var G__32798 = cls;
return goog.dom.classlist.contains(G__32797,G__32798);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32803){
var map__32804 = p__32803;
var map__32804__$1 = (((((!((map__32804 == null))))?(((((map__32804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32804):map__32804);
var props = map__32804__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32804__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32806 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32806,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32806,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32806,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32809 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32809,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32809;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32811 = arguments.length;
switch (G__32811) {
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
var vec__32815 = p__32812;
var seq__32816 = cljs.core.seq(vec__32815);
var first__32817 = cljs.core.first(seq__32816);
var seq__32816__$1 = cljs.core.next(seq__32816);
var nn = first__32817;
var first__32817__$1 = cljs.core.first(seq__32816__$1);
var seq__32816__$2 = cljs.core.next(seq__32816__$1);
var np = first__32817__$1;
var nc = seq__32816__$2;
var node = vec__32815;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32822 = nn;
var G__32823 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32822,G__32823) : create_fn.call(null,G__32822,G__32823));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32826 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32826,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32826,(1),null);
var seq__32829_33341 = cljs.core.seq(node_children);
var chunk__32830_33342 = null;
var count__32831_33343 = (0);
var i__32832_33344 = (0);
while(true){
if((i__32832_33344 < count__32831_33343)){
var child_struct_33345 = chunk__32830_33342.cljs$core$IIndexed$_nth$arity$2(null,i__32832_33344);
var children_33346 = shadow.dom.dom_node(child_struct_33345);
if(cljs.core.seq_QMARK_(children_33346)){
var seq__32867_33347 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33346));
var chunk__32869_33348 = null;
var count__32870_33349 = (0);
var i__32871_33350 = (0);
while(true){
if((i__32871_33350 < count__32870_33349)){
var child_33351 = chunk__32869_33348.cljs$core$IIndexed$_nth$arity$2(null,i__32871_33350);
if(cljs.core.truth_(child_33351)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33351);


var G__33352 = seq__32867_33347;
var G__33353 = chunk__32869_33348;
var G__33354 = count__32870_33349;
var G__33355 = (i__32871_33350 + (1));
seq__32867_33347 = G__33352;
chunk__32869_33348 = G__33353;
count__32870_33349 = G__33354;
i__32871_33350 = G__33355;
continue;
} else {
var G__33357 = seq__32867_33347;
var G__33358 = chunk__32869_33348;
var G__33359 = count__32870_33349;
var G__33360 = (i__32871_33350 + (1));
seq__32867_33347 = G__33357;
chunk__32869_33348 = G__33358;
count__32870_33349 = G__33359;
i__32871_33350 = G__33360;
continue;
}
} else {
var temp__5735__auto___33361 = cljs.core.seq(seq__32867_33347);
if(temp__5735__auto___33361){
var seq__32867_33363__$1 = temp__5735__auto___33361;
if(cljs.core.chunked_seq_QMARK_(seq__32867_33363__$1)){
var c__4609__auto___33364 = cljs.core.chunk_first(seq__32867_33363__$1);
var G__33365 = cljs.core.chunk_rest(seq__32867_33363__$1);
var G__33366 = c__4609__auto___33364;
var G__33367 = cljs.core.count(c__4609__auto___33364);
var G__33368 = (0);
seq__32867_33347 = G__33365;
chunk__32869_33348 = G__33366;
count__32870_33349 = G__33367;
i__32871_33350 = G__33368;
continue;
} else {
var child_33369 = cljs.core.first(seq__32867_33363__$1);
if(cljs.core.truth_(child_33369)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33369);


var G__33370 = cljs.core.next(seq__32867_33363__$1);
var G__33371 = null;
var G__33372 = (0);
var G__33373 = (0);
seq__32867_33347 = G__33370;
chunk__32869_33348 = G__33371;
count__32870_33349 = G__33372;
i__32871_33350 = G__33373;
continue;
} else {
var G__33374 = cljs.core.next(seq__32867_33363__$1);
var G__33375 = null;
var G__33376 = (0);
var G__33377 = (0);
seq__32867_33347 = G__33374;
chunk__32869_33348 = G__33375;
count__32870_33349 = G__33376;
i__32871_33350 = G__33377;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33346);
}


var G__33378 = seq__32829_33341;
var G__33379 = chunk__32830_33342;
var G__33380 = count__32831_33343;
var G__33381 = (i__32832_33344 + (1));
seq__32829_33341 = G__33378;
chunk__32830_33342 = G__33379;
count__32831_33343 = G__33380;
i__32832_33344 = G__33381;
continue;
} else {
var temp__5735__auto___33382 = cljs.core.seq(seq__32829_33341);
if(temp__5735__auto___33382){
var seq__32829_33383__$1 = temp__5735__auto___33382;
if(cljs.core.chunked_seq_QMARK_(seq__32829_33383__$1)){
var c__4609__auto___33384 = cljs.core.chunk_first(seq__32829_33383__$1);
var G__33385 = cljs.core.chunk_rest(seq__32829_33383__$1);
var G__33386 = c__4609__auto___33384;
var G__33387 = cljs.core.count(c__4609__auto___33384);
var G__33388 = (0);
seq__32829_33341 = G__33385;
chunk__32830_33342 = G__33386;
count__32831_33343 = G__33387;
i__32832_33344 = G__33388;
continue;
} else {
var child_struct_33389 = cljs.core.first(seq__32829_33383__$1);
var children_33390 = shadow.dom.dom_node(child_struct_33389);
if(cljs.core.seq_QMARK_(children_33390)){
var seq__32880_33392 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33390));
var chunk__32882_33393 = null;
var count__32883_33394 = (0);
var i__32884_33395 = (0);
while(true){
if((i__32884_33395 < count__32883_33394)){
var child_33396 = chunk__32882_33393.cljs$core$IIndexed$_nth$arity$2(null,i__32884_33395);
if(cljs.core.truth_(child_33396)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33396);


var G__33397 = seq__32880_33392;
var G__33398 = chunk__32882_33393;
var G__33399 = count__32883_33394;
var G__33400 = (i__32884_33395 + (1));
seq__32880_33392 = G__33397;
chunk__32882_33393 = G__33398;
count__32883_33394 = G__33399;
i__32884_33395 = G__33400;
continue;
} else {
var G__33401 = seq__32880_33392;
var G__33402 = chunk__32882_33393;
var G__33403 = count__32883_33394;
var G__33404 = (i__32884_33395 + (1));
seq__32880_33392 = G__33401;
chunk__32882_33393 = G__33402;
count__32883_33394 = G__33403;
i__32884_33395 = G__33404;
continue;
}
} else {
var temp__5735__auto___33405__$1 = cljs.core.seq(seq__32880_33392);
if(temp__5735__auto___33405__$1){
var seq__32880_33406__$1 = temp__5735__auto___33405__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32880_33406__$1)){
var c__4609__auto___33407 = cljs.core.chunk_first(seq__32880_33406__$1);
var G__33408 = cljs.core.chunk_rest(seq__32880_33406__$1);
var G__33409 = c__4609__auto___33407;
var G__33410 = cljs.core.count(c__4609__auto___33407);
var G__33411 = (0);
seq__32880_33392 = G__33408;
chunk__32882_33393 = G__33409;
count__32883_33394 = G__33410;
i__32884_33395 = G__33411;
continue;
} else {
var child_33412 = cljs.core.first(seq__32880_33406__$1);
if(cljs.core.truth_(child_33412)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33412);


var G__33413 = cljs.core.next(seq__32880_33406__$1);
var G__33414 = null;
var G__33415 = (0);
var G__33416 = (0);
seq__32880_33392 = G__33413;
chunk__32882_33393 = G__33414;
count__32883_33394 = G__33415;
i__32884_33395 = G__33416;
continue;
} else {
var G__33417 = cljs.core.next(seq__32880_33406__$1);
var G__33418 = null;
var G__33419 = (0);
var G__33420 = (0);
seq__32880_33392 = G__33417;
chunk__32882_33393 = G__33418;
count__32883_33394 = G__33419;
i__32884_33395 = G__33420;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33390);
}


var G__33421 = cljs.core.next(seq__32829_33383__$1);
var G__33422 = null;
var G__33423 = (0);
var G__33424 = (0);
seq__32829_33341 = G__33421;
chunk__32830_33342 = G__33422;
count__32831_33343 = G__33423;
i__32832_33344 = G__33424;
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
var G__32906 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32906);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32908 = cljs.core.seq(node);
var chunk__32909 = null;
var count__32910 = (0);
var i__32911 = (0);
while(true){
if((i__32911 < count__32910)){
var n = chunk__32909.cljs$core$IIndexed$_nth$arity$2(null,i__32911);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33430 = seq__32908;
var G__33431 = chunk__32909;
var G__33432 = count__32910;
var G__33433 = (i__32911 + (1));
seq__32908 = G__33430;
chunk__32909 = G__33431;
count__32910 = G__33432;
i__32911 = G__33433;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32908);
if(temp__5735__auto__){
var seq__32908__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32908__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32908__$1);
var G__33434 = cljs.core.chunk_rest(seq__32908__$1);
var G__33435 = c__4609__auto__;
var G__33436 = cljs.core.count(c__4609__auto__);
var G__33437 = (0);
seq__32908 = G__33434;
chunk__32909 = G__33435;
count__32910 = G__33436;
i__32911 = G__33437;
continue;
} else {
var n = cljs.core.first(seq__32908__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33439 = cljs.core.next(seq__32908__$1);
var G__33440 = null;
var G__33441 = (0);
var G__33442 = (0);
seq__32908 = G__33439;
chunk__32909 = G__33440;
count__32910 = G__33441;
i__32911 = G__33442;
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
var G__32913 = shadow.dom.dom_node(new$);
var G__32914 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32913,G__32914);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32917 = arguments.length;
switch (G__32917) {
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
var G__32919 = arguments.length;
switch (G__32919) {
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
var G__32921 = arguments.length;
switch (G__32921) {
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
var len__4789__auto___33449 = arguments.length;
var i__4790__auto___33450 = (0);
while(true){
if((i__4790__auto___33450 < len__4789__auto___33449)){
args__4795__auto__.push((arguments[i__4790__auto___33450]));

var G__33451 = (i__4790__auto___33450 + (1));
i__4790__auto___33450 = G__33451;
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
var seq__32923_33452 = cljs.core.seq(nodes);
var chunk__32924_33453 = null;
var count__32925_33454 = (0);
var i__32926_33455 = (0);
while(true){
if((i__32926_33455 < count__32925_33454)){
var node_33456 = chunk__32924_33453.cljs$core$IIndexed$_nth$arity$2(null,i__32926_33455);
fragment.appendChild(shadow.dom._to_dom(node_33456));


var G__33457 = seq__32923_33452;
var G__33458 = chunk__32924_33453;
var G__33459 = count__32925_33454;
var G__33460 = (i__32926_33455 + (1));
seq__32923_33452 = G__33457;
chunk__32924_33453 = G__33458;
count__32925_33454 = G__33459;
i__32926_33455 = G__33460;
continue;
} else {
var temp__5735__auto___33461 = cljs.core.seq(seq__32923_33452);
if(temp__5735__auto___33461){
var seq__32923_33462__$1 = temp__5735__auto___33461;
if(cljs.core.chunked_seq_QMARK_(seq__32923_33462__$1)){
var c__4609__auto___33463 = cljs.core.chunk_first(seq__32923_33462__$1);
var G__33464 = cljs.core.chunk_rest(seq__32923_33462__$1);
var G__33465 = c__4609__auto___33463;
var G__33466 = cljs.core.count(c__4609__auto___33463);
var G__33467 = (0);
seq__32923_33452 = G__33464;
chunk__32924_33453 = G__33465;
count__32925_33454 = G__33466;
i__32926_33455 = G__33467;
continue;
} else {
var node_33468 = cljs.core.first(seq__32923_33462__$1);
fragment.appendChild(shadow.dom._to_dom(node_33468));


var G__33469 = cljs.core.next(seq__32923_33462__$1);
var G__33470 = null;
var G__33471 = (0);
var G__33472 = (0);
seq__32923_33452 = G__33469;
chunk__32924_33453 = G__33470;
count__32925_33454 = G__33471;
i__32926_33455 = G__33472;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32922){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32922));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32927_33473 = cljs.core.seq(scripts);
var chunk__32928_33474 = null;
var count__32929_33475 = (0);
var i__32930_33476 = (0);
while(true){
if((i__32930_33476 < count__32929_33475)){
var vec__32941_33477 = chunk__32928_33474.cljs$core$IIndexed$_nth$arity$2(null,i__32930_33476);
var script_tag_33478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32941_33477,(0),null);
var script_body_33479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32941_33477,(1),null);
eval(script_body_33479);


var G__33480 = seq__32927_33473;
var G__33481 = chunk__32928_33474;
var G__33482 = count__32929_33475;
var G__33483 = (i__32930_33476 + (1));
seq__32927_33473 = G__33480;
chunk__32928_33474 = G__33481;
count__32929_33475 = G__33482;
i__32930_33476 = G__33483;
continue;
} else {
var temp__5735__auto___33484 = cljs.core.seq(seq__32927_33473);
if(temp__5735__auto___33484){
var seq__32927_33489__$1 = temp__5735__auto___33484;
if(cljs.core.chunked_seq_QMARK_(seq__32927_33489__$1)){
var c__4609__auto___33490 = cljs.core.chunk_first(seq__32927_33489__$1);
var G__33491 = cljs.core.chunk_rest(seq__32927_33489__$1);
var G__33492 = c__4609__auto___33490;
var G__33493 = cljs.core.count(c__4609__auto___33490);
var G__33494 = (0);
seq__32927_33473 = G__33491;
chunk__32928_33474 = G__33492;
count__32929_33475 = G__33493;
i__32930_33476 = G__33494;
continue;
} else {
var vec__32947_33495 = cljs.core.first(seq__32927_33489__$1);
var script_tag_33496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32947_33495,(0),null);
var script_body_33497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32947_33495,(1),null);
eval(script_body_33497);


var G__33498 = cljs.core.next(seq__32927_33489__$1);
var G__33499 = null;
var G__33500 = (0);
var G__33501 = (0);
seq__32927_33473 = G__33498;
chunk__32928_33474 = G__33499;
count__32929_33475 = G__33500;
i__32930_33476 = G__33501;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32951){
var vec__32952 = p__32951;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32952,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32952,(1),null);
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
var G__32960 = shadow.dom.dom_node(el);
var G__32961 = cls;
return goog.dom.getAncestorByClass(G__32960,G__32961);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32965 = arguments.length;
switch (G__32965) {
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
var G__32967 = shadow.dom.dom_node(el);
var G__32968 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32967,G__32968);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32970 = shadow.dom.dom_node(el);
var G__32971 = cljs.core.name(tag);
var G__32972 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32970,G__32971,G__32972);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32975 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32975);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32979 = shadow.dom.dom_node(dom);
var G__32980 = value;
return goog.dom.forms.setValue(G__32979,G__32980);
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
var seq__32988 = cljs.core.seq(style_keys);
var chunk__32989 = null;
var count__32990 = (0);
var i__32991 = (0);
while(true){
if((i__32991 < count__32990)){
var it = chunk__32989.cljs$core$IIndexed$_nth$arity$2(null,i__32991);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33503 = seq__32988;
var G__33504 = chunk__32989;
var G__33505 = count__32990;
var G__33506 = (i__32991 + (1));
seq__32988 = G__33503;
chunk__32989 = G__33504;
count__32990 = G__33505;
i__32991 = G__33506;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32988);
if(temp__5735__auto__){
var seq__32988__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32988__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32988__$1);
var G__33507 = cljs.core.chunk_rest(seq__32988__$1);
var G__33508 = c__4609__auto__;
var G__33509 = cljs.core.count(c__4609__auto__);
var G__33510 = (0);
seq__32988 = G__33507;
chunk__32989 = G__33508;
count__32990 = G__33509;
i__32991 = G__33510;
continue;
} else {
var it = cljs.core.first(seq__32988__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33511 = cljs.core.next(seq__32988__$1);
var G__33512 = null;
var G__33513 = (0);
var G__33514 = (0);
seq__32988 = G__33511;
chunk__32989 = G__33512;
count__32990 = G__33513;
i__32991 = G__33514;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32996,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33002 = k32996;
var G__33002__$1 = (((G__33002 instanceof cljs.core.Keyword))?G__33002.fqn:null);
switch (G__33002__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32996,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33005){
var vec__33006 = p__33005;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33006,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33006,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32995){
var self__ = this;
var G__32995__$1 = this;
return (new cljs.core.RecordIter((0),G__32995__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__33019 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__33019(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32997,other32998){
var self__ = this;
var this32997__$1 = this;
return (((!((other32998 == null)))) && ((this32997__$1.constructor === other32998.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32997__$1.x,other32998.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32997__$1.y,other32998.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32997__$1.__extmap,other32998.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32995){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33025 = cljs.core.keyword_identical_QMARK_;
var expr__33026 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__33028 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33029 = expr__33026;
return (pred__33025.cljs$core$IFn$_invoke$arity$2 ? pred__33025.cljs$core$IFn$_invoke$arity$2(G__33028,G__33029) : pred__33025.call(null,G__33028,G__33029));
})())){
return (new shadow.dom.Coordinate(G__32995,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33031 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33032 = expr__33026;
return (pred__33025.cljs$core$IFn$_invoke$arity$2 ? pred__33025.cljs$core$IFn$_invoke$arity$2(G__33031,G__33032) : pred__33025.call(null,G__33031,G__33032));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32995,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32995),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32995){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32995,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33000){
var extmap__4478__auto__ = (function (){var G__33043 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33000,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33000)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33043);
} else {
return G__33043;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33000),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33000),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33046 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33046);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33049 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33049);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33050 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33050);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33053,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33062 = k33053;
var G__33062__$1 = (((G__33062 instanceof cljs.core.Keyword))?G__33062.fqn:null);
switch (G__33062__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33053,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33066){
var vec__33068 = p__33066;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33068,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33068,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33052){
var self__ = this;
var G__33052__$1 = this;
return (new cljs.core.RecordIter((0),G__33052__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33054,other33055){
var self__ = this;
var this33054__$1 = this;
return (((!((other33055 == null)))) && ((this33054__$1.constructor === other33055.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33054__$1.w,other33055.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33054__$1.h,other33055.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33054__$1.__extmap,other33055.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33052){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33076 = cljs.core.keyword_identical_QMARK_;
var expr__33077 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__33079 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33080 = expr__33077;
return (pred__33076.cljs$core$IFn$_invoke$arity$2 ? pred__33076.cljs$core$IFn$_invoke$arity$2(G__33079,G__33080) : pred__33076.call(null,G__33079,G__33080));
})())){
return (new shadow.dom.Size(G__33052,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33081 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33082 = expr__33077;
return (pred__33076.cljs$core$IFn$_invoke$arity$2 ? pred__33076.cljs$core$IFn$_invoke$arity$2(G__33081,G__33082) : pred__33076.call(null,G__33081,G__33082));
})())){
return (new shadow.dom.Size(self__.w,G__33052,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33052),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33052){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33052,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33057){
var extmap__4478__auto__ = (function (){var G__33083 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33057,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33057)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33083);
} else {
return G__33083;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33057),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33057),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33084 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33084);
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
var G__33532 = (i + (1));
var G__33533 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33532;
ret = G__33533;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33104){
var vec__33105 = p__33104;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33105,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33110 = arguments.length;
switch (G__33110) {
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
var G__33121_33537 = new_node;
var G__33122_33538 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33121_33537,G__33122_33538);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33125_33539 = new_node;
var G__33126_33540 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33125_33539,G__33126_33540);

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
var G__33545 = ps;
var G__33546 = (i + (1));
el__$1 = G__33545;
i = G__33546;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33136 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33136);
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
var G__33141 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33141);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33143 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33143);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33145 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33145,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33148_33553 = cljs.core.seq(props);
var chunk__33149_33554 = null;
var count__33150_33555 = (0);
var i__33151_33556 = (0);
while(true){
if((i__33151_33556 < count__33150_33555)){
var vec__33168_33557 = chunk__33149_33554.cljs$core$IIndexed$_nth$arity$2(null,i__33151_33556);
var k_33558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33168_33557,(0),null);
var v_33559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33168_33557,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33558);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33558),v_33559);


var G__33560 = seq__33148_33553;
var G__33561 = chunk__33149_33554;
var G__33562 = count__33150_33555;
var G__33563 = (i__33151_33556 + (1));
seq__33148_33553 = G__33560;
chunk__33149_33554 = G__33561;
count__33150_33555 = G__33562;
i__33151_33556 = G__33563;
continue;
} else {
var temp__5735__auto___33564 = cljs.core.seq(seq__33148_33553);
if(temp__5735__auto___33564){
var seq__33148_33565__$1 = temp__5735__auto___33564;
if(cljs.core.chunked_seq_QMARK_(seq__33148_33565__$1)){
var c__4609__auto___33566 = cljs.core.chunk_first(seq__33148_33565__$1);
var G__33567 = cljs.core.chunk_rest(seq__33148_33565__$1);
var G__33568 = c__4609__auto___33566;
var G__33569 = cljs.core.count(c__4609__auto___33566);
var G__33570 = (0);
seq__33148_33553 = G__33567;
chunk__33149_33554 = G__33568;
count__33150_33555 = G__33569;
i__33151_33556 = G__33570;
continue;
} else {
var vec__33173_33571 = cljs.core.first(seq__33148_33565__$1);
var k_33572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173_33571,(0),null);
var v_33573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173_33571,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33572);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33572),v_33573);


var G__33577 = cljs.core.next(seq__33148_33565__$1);
var G__33578 = null;
var G__33579 = (0);
var G__33580 = (0);
seq__33148_33553 = G__33577;
chunk__33149_33554 = G__33578;
count__33150_33555 = G__33579;
i__33151_33556 = G__33580;
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
var vec__33183 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33183,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33183,(1),null);
var seq__33186_33581 = cljs.core.seq(node_children);
var chunk__33188_33582 = null;
var count__33189_33583 = (0);
var i__33190_33584 = (0);
while(true){
if((i__33190_33584 < count__33189_33583)){
var child_struct_33585 = chunk__33188_33582.cljs$core$IIndexed$_nth$arity$2(null,i__33190_33584);
if((!((child_struct_33585 == null)))){
if(typeof child_struct_33585 === 'string'){
var text_33586 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33586),child_struct_33585].join(''));
} else {
var children_33587 = shadow.dom.svg_node(child_struct_33585);
if(cljs.core.seq_QMARK_(children_33587)){
var seq__33217_33588 = cljs.core.seq(children_33587);
var chunk__33219_33589 = null;
var count__33220_33590 = (0);
var i__33221_33591 = (0);
while(true){
if((i__33221_33591 < count__33220_33590)){
var child_33592 = chunk__33219_33589.cljs$core$IIndexed$_nth$arity$2(null,i__33221_33591);
if(cljs.core.truth_(child_33592)){
node.appendChild(child_33592);


var G__33596 = seq__33217_33588;
var G__33597 = chunk__33219_33589;
var G__33598 = count__33220_33590;
var G__33599 = (i__33221_33591 + (1));
seq__33217_33588 = G__33596;
chunk__33219_33589 = G__33597;
count__33220_33590 = G__33598;
i__33221_33591 = G__33599;
continue;
} else {
var G__33600 = seq__33217_33588;
var G__33601 = chunk__33219_33589;
var G__33602 = count__33220_33590;
var G__33603 = (i__33221_33591 + (1));
seq__33217_33588 = G__33600;
chunk__33219_33589 = G__33601;
count__33220_33590 = G__33602;
i__33221_33591 = G__33603;
continue;
}
} else {
var temp__5735__auto___33604 = cljs.core.seq(seq__33217_33588);
if(temp__5735__auto___33604){
var seq__33217_33605__$1 = temp__5735__auto___33604;
if(cljs.core.chunked_seq_QMARK_(seq__33217_33605__$1)){
var c__4609__auto___33606 = cljs.core.chunk_first(seq__33217_33605__$1);
var G__33607 = cljs.core.chunk_rest(seq__33217_33605__$1);
var G__33608 = c__4609__auto___33606;
var G__33609 = cljs.core.count(c__4609__auto___33606);
var G__33610 = (0);
seq__33217_33588 = G__33607;
chunk__33219_33589 = G__33608;
count__33220_33590 = G__33609;
i__33221_33591 = G__33610;
continue;
} else {
var child_33611 = cljs.core.first(seq__33217_33605__$1);
if(cljs.core.truth_(child_33611)){
node.appendChild(child_33611);


var G__33612 = cljs.core.next(seq__33217_33605__$1);
var G__33613 = null;
var G__33614 = (0);
var G__33615 = (0);
seq__33217_33588 = G__33612;
chunk__33219_33589 = G__33613;
count__33220_33590 = G__33614;
i__33221_33591 = G__33615;
continue;
} else {
var G__33617 = cljs.core.next(seq__33217_33605__$1);
var G__33618 = null;
var G__33619 = (0);
var G__33620 = (0);
seq__33217_33588 = G__33617;
chunk__33219_33589 = G__33618;
count__33220_33590 = G__33619;
i__33221_33591 = G__33620;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33587);
}
}


var G__33624 = seq__33186_33581;
var G__33625 = chunk__33188_33582;
var G__33626 = count__33189_33583;
var G__33627 = (i__33190_33584 + (1));
seq__33186_33581 = G__33624;
chunk__33188_33582 = G__33625;
count__33189_33583 = G__33626;
i__33190_33584 = G__33627;
continue;
} else {
var G__33628 = seq__33186_33581;
var G__33629 = chunk__33188_33582;
var G__33630 = count__33189_33583;
var G__33631 = (i__33190_33584 + (1));
seq__33186_33581 = G__33628;
chunk__33188_33582 = G__33629;
count__33189_33583 = G__33630;
i__33190_33584 = G__33631;
continue;
}
} else {
var temp__5735__auto___33632 = cljs.core.seq(seq__33186_33581);
if(temp__5735__auto___33632){
var seq__33186_33633__$1 = temp__5735__auto___33632;
if(cljs.core.chunked_seq_QMARK_(seq__33186_33633__$1)){
var c__4609__auto___33634 = cljs.core.chunk_first(seq__33186_33633__$1);
var G__33635 = cljs.core.chunk_rest(seq__33186_33633__$1);
var G__33636 = c__4609__auto___33634;
var G__33637 = cljs.core.count(c__4609__auto___33634);
var G__33638 = (0);
seq__33186_33581 = G__33635;
chunk__33188_33582 = G__33636;
count__33189_33583 = G__33637;
i__33190_33584 = G__33638;
continue;
} else {
var child_struct_33639 = cljs.core.first(seq__33186_33633__$1);
if((!((child_struct_33639 == null)))){
if(typeof child_struct_33639 === 'string'){
var text_33640 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33640),child_struct_33639].join(''));
} else {
var children_33641 = shadow.dom.svg_node(child_struct_33639);
if(cljs.core.seq_QMARK_(children_33641)){
var seq__33227_33642 = cljs.core.seq(children_33641);
var chunk__33229_33643 = null;
var count__33230_33644 = (0);
var i__33231_33645 = (0);
while(true){
if((i__33231_33645 < count__33230_33644)){
var child_33646 = chunk__33229_33643.cljs$core$IIndexed$_nth$arity$2(null,i__33231_33645);
if(cljs.core.truth_(child_33646)){
node.appendChild(child_33646);


var G__33647 = seq__33227_33642;
var G__33648 = chunk__33229_33643;
var G__33649 = count__33230_33644;
var G__33650 = (i__33231_33645 + (1));
seq__33227_33642 = G__33647;
chunk__33229_33643 = G__33648;
count__33230_33644 = G__33649;
i__33231_33645 = G__33650;
continue;
} else {
var G__33651 = seq__33227_33642;
var G__33652 = chunk__33229_33643;
var G__33653 = count__33230_33644;
var G__33654 = (i__33231_33645 + (1));
seq__33227_33642 = G__33651;
chunk__33229_33643 = G__33652;
count__33230_33644 = G__33653;
i__33231_33645 = G__33654;
continue;
}
} else {
var temp__5735__auto___33655__$1 = cljs.core.seq(seq__33227_33642);
if(temp__5735__auto___33655__$1){
var seq__33227_33656__$1 = temp__5735__auto___33655__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33227_33656__$1)){
var c__4609__auto___33657 = cljs.core.chunk_first(seq__33227_33656__$1);
var G__33658 = cljs.core.chunk_rest(seq__33227_33656__$1);
var G__33659 = c__4609__auto___33657;
var G__33660 = cljs.core.count(c__4609__auto___33657);
var G__33661 = (0);
seq__33227_33642 = G__33658;
chunk__33229_33643 = G__33659;
count__33230_33644 = G__33660;
i__33231_33645 = G__33661;
continue;
} else {
var child_33662 = cljs.core.first(seq__33227_33656__$1);
if(cljs.core.truth_(child_33662)){
node.appendChild(child_33662);


var G__33663 = cljs.core.next(seq__33227_33656__$1);
var G__33664 = null;
var G__33665 = (0);
var G__33666 = (0);
seq__33227_33642 = G__33663;
chunk__33229_33643 = G__33664;
count__33230_33644 = G__33665;
i__33231_33645 = G__33666;
continue;
} else {
var G__33667 = cljs.core.next(seq__33227_33656__$1);
var G__33668 = null;
var G__33669 = (0);
var G__33670 = (0);
seq__33227_33642 = G__33667;
chunk__33229_33643 = G__33668;
count__33230_33644 = G__33669;
i__33231_33645 = G__33670;
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


var G__33671 = cljs.core.next(seq__33186_33633__$1);
var G__33672 = null;
var G__33673 = (0);
var G__33674 = (0);
seq__33186_33581 = G__33671;
chunk__33188_33582 = G__33672;
count__33189_33583 = G__33673;
i__33190_33584 = G__33674;
continue;
} else {
var G__33675 = cljs.core.next(seq__33186_33633__$1);
var G__33676 = null;
var G__33677 = (0);
var G__33678 = (0);
seq__33186_33581 = G__33675;
chunk__33188_33582 = G__33676;
count__33189_33583 = G__33677;
i__33190_33584 = G__33678;
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

var G__33240_33679 = shadow.dom._to_svg;
var G__33241_33680 = "string";
var G__33242_33681 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__33240_33679,G__33241_33680,G__33242_33681);

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

var G__33245_33684 = shadow.dom._to_svg;
var G__33246_33685 = "null";
var G__33247_33686 = (function (_){
return null;
});
goog.object.set(G__33245_33684,G__33246_33685,G__33247_33686);
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33251){
var G__33252 = cljs.core.first(seq33251);
var seq33251__$1 = cljs.core.next(seq33251);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33252,seq33251__$1);
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
var c__29726__auto___33695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29727__auto__ = (function (){var switch__29479__auto__ = (function (state_33265){
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
var shadow$dom$state_machine__29480__auto__ = null;
var shadow$dom$state_machine__29480__auto____0 = (function (){
var statearr_33268 = [null,null,null,null,null,null,null,null];
(statearr_33268[(0)] = shadow$dom$state_machine__29480__auto__);

(statearr_33268[(1)] = (1));

return statearr_33268;
});
var shadow$dom$state_machine__29480__auto____1 = (function (state_33265){
while(true){
var ret_value__29481__auto__ = (function (){try{while(true){
var result__29482__auto__ = switch__29479__auto__(state_33265);
if(cljs.core.keyword_identical_QMARK_(result__29482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29482__auto__;
}
break;
}
}catch (e33269){if((e33269 instanceof Object)){
var ex__29483__auto__ = e33269;
var statearr_33270_33698 = state_33265;
(statearr_33270_33698[(5)] = ex__29483__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33269;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33699 = state_33265;
state_33265 = G__33699;
continue;
} else {
return ret_value__29481__auto__;
}
break;
}
});
shadow$dom$state_machine__29480__auto__ = function(state_33265){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29480__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29480__auto____1.call(this,state_33265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29480__auto____0;
shadow$dom$state_machine__29480__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29480__auto____1;
return shadow$dom$state_machine__29480__auto__;
})()
})();
var state__29728__auto__ = (function (){var statearr_33271 = (f__29727__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29727__auto__.cljs$core$IFn$_invoke$arity$0() : f__29727__auto__.call(null));
(statearr_33271[(6)] = c__29726__auto___33695);

return statearr_33271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29728__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
