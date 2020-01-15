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
return cljs.core.cons((coll[idx]),(function (){var G__38545 = coll;
var G__38546 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38545,G__38546) : shadow.dom.lazy_native_coll_seq.call(null,G__38545,G__38546));
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
var G__38570 = arguments.length;
switch (G__38570) {
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
var G__38572 = arguments.length;
switch (G__38572) {
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
var G__38574 = arguments.length;
switch (G__38574) {
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
var G__38576 = arguments.length;
switch (G__38576) {
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
var G__38629 = arguments.length;
switch (G__38629) {
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
var G__38641 = document;
var G__38642 = shadow.dom.dom_node(el);
return goog.dom.contains(G__38641,G__38642);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__38645 = shadow.dom.dom_node(parent);
var G__38646 = shadow.dom.dom_node(el);
return goog.dom.contains(G__38645,G__38646);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__38649 = shadow.dom.dom_node(el);
var G__38650 = cls;
return goog.dom.classlist.add(G__38649,G__38650);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__38655 = shadow.dom.dom_node(el);
var G__38656 = cls;
return goog.dom.classlist.remove(G__38655,G__38656);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__38665 = arguments.length;
switch (G__38665) {
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
var G__38668 = shadow.dom.dom_node(el);
var G__38669 = cls;
return goog.dom.classlist.toggle(G__38668,G__38669);
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
}catch (e38671){if((e38671 instanceof Object)){
var e = e38671;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38671;

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
var seq__38678 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38679 = null;
var count__38680 = (0);
var i__38681 = (0);
while(true){
if((i__38681 < count__38680)){
var el = chunk__38679.cljs$core$IIndexed$_nth$arity$2(null,i__38681);
var handler_39276__$1 = ((function (seq__38678,chunk__38679,count__38680,i__38681,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38678,chunk__38679,count__38680,i__38681,el))
;
var G__38688_39277 = el;
var G__38689_39278 = cljs.core.name(ev);
var G__38690_39279 = handler_39276__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38688_39277,G__38689_39278,G__38690_39279) : shadow.dom.dom_listen.call(null,G__38688_39277,G__38689_39278,G__38690_39279));


var G__39280 = seq__38678;
var G__39281 = chunk__38679;
var G__39282 = count__38680;
var G__39283 = (i__38681 + (1));
seq__38678 = G__39280;
chunk__38679 = G__39281;
count__38680 = G__39282;
i__38681 = G__39283;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38678);
if(temp__5735__auto__){
var seq__38678__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38678__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38678__$1);
var G__39284 = cljs.core.chunk_rest(seq__38678__$1);
var G__39285 = c__4609__auto__;
var G__39286 = cljs.core.count(c__4609__auto__);
var G__39287 = (0);
seq__38678 = G__39284;
chunk__38679 = G__39285;
count__38680 = G__39286;
i__38681 = G__39287;
continue;
} else {
var el = cljs.core.first(seq__38678__$1);
var handler_39288__$1 = ((function (seq__38678,chunk__38679,count__38680,i__38681,el,seq__38678__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38678,chunk__38679,count__38680,i__38681,el,seq__38678__$1,temp__5735__auto__))
;
var G__38697_39289 = el;
var G__38698_39290 = cljs.core.name(ev);
var G__38699_39291 = handler_39288__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38697_39289,G__38698_39290,G__38699_39291) : shadow.dom.dom_listen.call(null,G__38697_39289,G__38698_39290,G__38699_39291));


var G__39292 = cljs.core.next(seq__38678__$1);
var G__39293 = null;
var G__39294 = (0);
var G__39295 = (0);
seq__38678 = G__39292;
chunk__38679 = G__39293;
count__38680 = G__39294;
i__38681 = G__39295;
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
var G__38710 = arguments.length;
switch (G__38710) {
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
var G__38739 = shadow.dom.dom_node(el);
var G__38740 = cljs.core.name(ev);
var G__38741 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38739,G__38740,G__38741) : shadow.dom.dom_listen.call(null,G__38739,G__38740,G__38741));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__38742 = shadow.dom.dom_node(el);
var G__38743 = cljs.core.name(ev);
var G__38744 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__38742,G__38743,G__38744) : shadow.dom.dom_listen_remove.call(null,G__38742,G__38743,G__38744));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__38749 = cljs.core.seq(events);
var chunk__38750 = null;
var count__38751 = (0);
var i__38752 = (0);
while(true){
if((i__38752 < count__38751)){
var vec__38761 = chunk__38750.cljs$core$IIndexed$_nth$arity$2(null,i__38752);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38761,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38761,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39297 = seq__38749;
var G__39298 = chunk__38750;
var G__39299 = count__38751;
var G__39300 = (i__38752 + (1));
seq__38749 = G__39297;
chunk__38750 = G__39298;
count__38751 = G__39299;
i__38752 = G__39300;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38749);
if(temp__5735__auto__){
var seq__38749__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38749__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38749__$1);
var G__39301 = cljs.core.chunk_rest(seq__38749__$1);
var G__39302 = c__4609__auto__;
var G__39303 = cljs.core.count(c__4609__auto__);
var G__39304 = (0);
seq__38749 = G__39301;
chunk__38750 = G__39302;
count__38751 = G__39303;
i__38752 = G__39304;
continue;
} else {
var vec__38764 = cljs.core.first(seq__38749__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38764,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39305 = cljs.core.next(seq__38749__$1);
var G__39306 = null;
var G__39307 = (0);
var G__39308 = (0);
seq__38749 = G__39305;
chunk__38750 = G__39306;
count__38751 = G__39307;
i__38752 = G__39308;
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
var seq__38768 = cljs.core.seq(styles);
var chunk__38769 = null;
var count__38770 = (0);
var i__38771 = (0);
while(true){
if((i__38771 < count__38770)){
var vec__38785 = chunk__38769.cljs$core$IIndexed$_nth$arity$2(null,i__38771);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38785,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38785,(1),null);
var G__38788_39309 = dom;
var G__38789_39310 = cljs.core.name(k);
var G__38790_39311 = (((v == null))?"":v);
goog.style.setStyle(G__38788_39309,G__38789_39310,G__38790_39311);


var G__39312 = seq__38768;
var G__39313 = chunk__38769;
var G__39314 = count__38770;
var G__39315 = (i__38771 + (1));
seq__38768 = G__39312;
chunk__38769 = G__39313;
count__38770 = G__39314;
i__38771 = G__39315;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38768);
if(temp__5735__auto__){
var seq__38768__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38768__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38768__$1);
var G__39316 = cljs.core.chunk_rest(seq__38768__$1);
var G__39317 = c__4609__auto__;
var G__39318 = cljs.core.count(c__4609__auto__);
var G__39319 = (0);
seq__38768 = G__39316;
chunk__38769 = G__39317;
count__38770 = G__39318;
i__38771 = G__39319;
continue;
} else {
var vec__38791 = cljs.core.first(seq__38768__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38791,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38791,(1),null);
var G__38794_39320 = dom;
var G__38795_39321 = cljs.core.name(k);
var G__38796_39322 = (((v == null))?"":v);
goog.style.setStyle(G__38794_39320,G__38795_39321,G__38796_39322);


var G__39323 = cljs.core.next(seq__38768__$1);
var G__39324 = null;
var G__39325 = (0);
var G__39326 = (0);
seq__38768 = G__39323;
chunk__38769 = G__39324;
count__38770 = G__39325;
i__38771 = G__39326;
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
var G__38797_39327 = key;
var G__38797_39328__$1 = (((G__38797_39327 instanceof cljs.core.Keyword))?G__38797_39327.fqn:null);
switch (G__38797_39328__$1) {
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
var ks_39330 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_39330,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_39330,"aria-");
}
})())){
el.setAttribute(ks_39330,value);
} else {
(el[ks_39330] = value);
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
var G__38798 = shadow.dom.dom_node(el);
var G__38799 = cls;
return goog.dom.classlist.contains(G__38798,G__38799);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38839){
var map__38840 = p__38839;
var map__38840__$1 = (((((!((map__38840 == null))))?(((((map__38840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38840):map__38840);
var props = map__38840__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38840__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38842 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38842,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38842,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38842,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38845 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38845,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38845;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38853 = arguments.length;
switch (G__38853) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38856){
var vec__38857 = p__38856;
var seq__38858 = cljs.core.seq(vec__38857);
var first__38859 = cljs.core.first(seq__38858);
var seq__38858__$1 = cljs.core.next(seq__38858);
var nn = first__38859;
var first__38859__$1 = cljs.core.first(seq__38858__$1);
var seq__38858__$2 = cljs.core.next(seq__38858__$1);
var np = first__38859__$1;
var nc = seq__38858__$2;
var node = vec__38857;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38860 = nn;
var G__38861 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38860,G__38861) : create_fn.call(null,G__38860,G__38861));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38865 = nn;
var G__38866 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38865,G__38866) : create_fn.call(null,G__38865,G__38866));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38867 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38867,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38867,(1),null);
var seq__38871_39332 = cljs.core.seq(node_children);
var chunk__38872_39333 = null;
var count__38873_39334 = (0);
var i__38874_39335 = (0);
while(true){
if((i__38874_39335 < count__38873_39334)){
var child_struct_39336 = chunk__38872_39333.cljs$core$IIndexed$_nth$arity$2(null,i__38874_39335);
var children_39337 = shadow.dom.dom_node(child_struct_39336);
if(cljs.core.seq_QMARK_(children_39337)){
var seq__38916_39338 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39337));
var chunk__38918_39339 = null;
var count__38919_39340 = (0);
var i__38920_39341 = (0);
while(true){
if((i__38920_39341 < count__38919_39340)){
var child_39342 = chunk__38918_39339.cljs$core$IIndexed$_nth$arity$2(null,i__38920_39341);
if(cljs.core.truth_(child_39342)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39342);


var G__39343 = seq__38916_39338;
var G__39344 = chunk__38918_39339;
var G__39345 = count__38919_39340;
var G__39346 = (i__38920_39341 + (1));
seq__38916_39338 = G__39343;
chunk__38918_39339 = G__39344;
count__38919_39340 = G__39345;
i__38920_39341 = G__39346;
continue;
} else {
var G__39347 = seq__38916_39338;
var G__39348 = chunk__38918_39339;
var G__39349 = count__38919_39340;
var G__39350 = (i__38920_39341 + (1));
seq__38916_39338 = G__39347;
chunk__38918_39339 = G__39348;
count__38919_39340 = G__39349;
i__38920_39341 = G__39350;
continue;
}
} else {
var temp__5735__auto___39351 = cljs.core.seq(seq__38916_39338);
if(temp__5735__auto___39351){
var seq__38916_39352__$1 = temp__5735__auto___39351;
if(cljs.core.chunked_seq_QMARK_(seq__38916_39352__$1)){
var c__4609__auto___39353 = cljs.core.chunk_first(seq__38916_39352__$1);
var G__39354 = cljs.core.chunk_rest(seq__38916_39352__$1);
var G__39355 = c__4609__auto___39353;
var G__39356 = cljs.core.count(c__4609__auto___39353);
var G__39357 = (0);
seq__38916_39338 = G__39354;
chunk__38918_39339 = G__39355;
count__38919_39340 = G__39356;
i__38920_39341 = G__39357;
continue;
} else {
var child_39358 = cljs.core.first(seq__38916_39352__$1);
if(cljs.core.truth_(child_39358)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39358);


var G__39359 = cljs.core.next(seq__38916_39352__$1);
var G__39360 = null;
var G__39361 = (0);
var G__39362 = (0);
seq__38916_39338 = G__39359;
chunk__38918_39339 = G__39360;
count__38919_39340 = G__39361;
i__38920_39341 = G__39362;
continue;
} else {
var G__39363 = cljs.core.next(seq__38916_39352__$1);
var G__39364 = null;
var G__39365 = (0);
var G__39366 = (0);
seq__38916_39338 = G__39363;
chunk__38918_39339 = G__39364;
count__38919_39340 = G__39365;
i__38920_39341 = G__39366;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39337);
}


var G__39367 = seq__38871_39332;
var G__39368 = chunk__38872_39333;
var G__39369 = count__38873_39334;
var G__39370 = (i__38874_39335 + (1));
seq__38871_39332 = G__39367;
chunk__38872_39333 = G__39368;
count__38873_39334 = G__39369;
i__38874_39335 = G__39370;
continue;
} else {
var temp__5735__auto___39371 = cljs.core.seq(seq__38871_39332);
if(temp__5735__auto___39371){
var seq__38871_39372__$1 = temp__5735__auto___39371;
if(cljs.core.chunked_seq_QMARK_(seq__38871_39372__$1)){
var c__4609__auto___39373 = cljs.core.chunk_first(seq__38871_39372__$1);
var G__39374 = cljs.core.chunk_rest(seq__38871_39372__$1);
var G__39375 = c__4609__auto___39373;
var G__39376 = cljs.core.count(c__4609__auto___39373);
var G__39377 = (0);
seq__38871_39332 = G__39374;
chunk__38872_39333 = G__39375;
count__38873_39334 = G__39376;
i__38874_39335 = G__39377;
continue;
} else {
var child_struct_39378 = cljs.core.first(seq__38871_39372__$1);
var children_39379 = shadow.dom.dom_node(child_struct_39378);
if(cljs.core.seq_QMARK_(children_39379)){
var seq__38922_39380 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39379));
var chunk__38924_39381 = null;
var count__38925_39382 = (0);
var i__38926_39383 = (0);
while(true){
if((i__38926_39383 < count__38925_39382)){
var child_39384 = chunk__38924_39381.cljs$core$IIndexed$_nth$arity$2(null,i__38926_39383);
if(cljs.core.truth_(child_39384)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39384);


var G__39385 = seq__38922_39380;
var G__39386 = chunk__38924_39381;
var G__39387 = count__38925_39382;
var G__39388 = (i__38926_39383 + (1));
seq__38922_39380 = G__39385;
chunk__38924_39381 = G__39386;
count__38925_39382 = G__39387;
i__38926_39383 = G__39388;
continue;
} else {
var G__39389 = seq__38922_39380;
var G__39390 = chunk__38924_39381;
var G__39391 = count__38925_39382;
var G__39392 = (i__38926_39383 + (1));
seq__38922_39380 = G__39389;
chunk__38924_39381 = G__39390;
count__38925_39382 = G__39391;
i__38926_39383 = G__39392;
continue;
}
} else {
var temp__5735__auto___39393__$1 = cljs.core.seq(seq__38922_39380);
if(temp__5735__auto___39393__$1){
var seq__38922_39394__$1 = temp__5735__auto___39393__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38922_39394__$1)){
var c__4609__auto___39395 = cljs.core.chunk_first(seq__38922_39394__$1);
var G__39396 = cljs.core.chunk_rest(seq__38922_39394__$1);
var G__39397 = c__4609__auto___39395;
var G__39398 = cljs.core.count(c__4609__auto___39395);
var G__39399 = (0);
seq__38922_39380 = G__39396;
chunk__38924_39381 = G__39397;
count__38925_39382 = G__39398;
i__38926_39383 = G__39399;
continue;
} else {
var child_39400 = cljs.core.first(seq__38922_39394__$1);
if(cljs.core.truth_(child_39400)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39400);


var G__39401 = cljs.core.next(seq__38922_39394__$1);
var G__39402 = null;
var G__39403 = (0);
var G__39404 = (0);
seq__38922_39380 = G__39401;
chunk__38924_39381 = G__39402;
count__38925_39382 = G__39403;
i__38926_39383 = G__39404;
continue;
} else {
var G__39405 = cljs.core.next(seq__38922_39394__$1);
var G__39406 = null;
var G__39407 = (0);
var G__39408 = (0);
seq__38922_39380 = G__39405;
chunk__38924_39381 = G__39406;
count__38925_39382 = G__39407;
i__38926_39383 = G__39408;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39379);
}


var G__39409 = cljs.core.next(seq__38871_39372__$1);
var G__39410 = null;
var G__39411 = (0);
var G__39412 = (0);
seq__38871_39332 = G__39409;
chunk__38872_39333 = G__39410;
count__38873_39334 = G__39411;
i__38874_39335 = G__39412;
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
var G__38928 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__38928);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__38930 = cljs.core.seq(node);
var chunk__38931 = null;
var count__38932 = (0);
var i__38933 = (0);
while(true){
if((i__38933 < count__38932)){
var n = chunk__38931.cljs$core$IIndexed$_nth$arity$2(null,i__38933);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39417 = seq__38930;
var G__39418 = chunk__38931;
var G__39419 = count__38932;
var G__39420 = (i__38933 + (1));
seq__38930 = G__39417;
chunk__38931 = G__39418;
count__38932 = G__39419;
i__38933 = G__39420;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38930);
if(temp__5735__auto__){
var seq__38930__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38930__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38930__$1);
var G__39421 = cljs.core.chunk_rest(seq__38930__$1);
var G__39422 = c__4609__auto__;
var G__39423 = cljs.core.count(c__4609__auto__);
var G__39424 = (0);
seq__38930 = G__39421;
chunk__38931 = G__39422;
count__38932 = G__39423;
i__38933 = G__39424;
continue;
} else {
var n = cljs.core.first(seq__38930__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39428 = cljs.core.next(seq__38930__$1);
var G__39429 = null;
var G__39430 = (0);
var G__39431 = (0);
seq__38930 = G__39428;
chunk__38931 = G__39429;
count__38932 = G__39430;
i__38933 = G__39431;
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
var G__38936 = shadow.dom.dom_node(new$);
var G__38937 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__38936,G__38937);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__38939 = arguments.length;
switch (G__38939) {
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
var G__38949 = arguments.length;
switch (G__38949) {
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
var G__38966 = arguments.length;
switch (G__38966) {
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
var len__4789__auto___39435 = arguments.length;
var i__4790__auto___39436 = (0);
while(true){
if((i__4790__auto___39436 < len__4789__auto___39435)){
args__4795__auto__.push((arguments[i__4790__auto___39436]));

var G__39437 = (i__4790__auto___39436 + (1));
i__4790__auto___39436 = G__39437;
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
var seq__38985_39440 = cljs.core.seq(nodes);
var chunk__38986_39441 = null;
var count__38987_39442 = (0);
var i__38988_39443 = (0);
while(true){
if((i__38988_39443 < count__38987_39442)){
var node_39444 = chunk__38986_39441.cljs$core$IIndexed$_nth$arity$2(null,i__38988_39443);
fragment.appendChild(shadow.dom._to_dom(node_39444));


var G__39445 = seq__38985_39440;
var G__39446 = chunk__38986_39441;
var G__39447 = count__38987_39442;
var G__39448 = (i__38988_39443 + (1));
seq__38985_39440 = G__39445;
chunk__38986_39441 = G__39446;
count__38987_39442 = G__39447;
i__38988_39443 = G__39448;
continue;
} else {
var temp__5735__auto___39449 = cljs.core.seq(seq__38985_39440);
if(temp__5735__auto___39449){
var seq__38985_39450__$1 = temp__5735__auto___39449;
if(cljs.core.chunked_seq_QMARK_(seq__38985_39450__$1)){
var c__4609__auto___39451 = cljs.core.chunk_first(seq__38985_39450__$1);
var G__39452 = cljs.core.chunk_rest(seq__38985_39450__$1);
var G__39453 = c__4609__auto___39451;
var G__39454 = cljs.core.count(c__4609__auto___39451);
var G__39455 = (0);
seq__38985_39440 = G__39452;
chunk__38986_39441 = G__39453;
count__38987_39442 = G__39454;
i__38988_39443 = G__39455;
continue;
} else {
var node_39456 = cljs.core.first(seq__38985_39450__$1);
fragment.appendChild(shadow.dom._to_dom(node_39456));


var G__39457 = cljs.core.next(seq__38985_39450__$1);
var G__39458 = null;
var G__39459 = (0);
var G__39460 = (0);
seq__38985_39440 = G__39457;
chunk__38986_39441 = G__39458;
count__38987_39442 = G__39459;
i__38988_39443 = G__39460;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38981){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38981));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39001_39461 = cljs.core.seq(scripts);
var chunk__39002_39462 = null;
var count__39003_39463 = (0);
var i__39004_39464 = (0);
while(true){
if((i__39004_39464 < count__39003_39463)){
var vec__39014_39465 = chunk__39002_39462.cljs$core$IIndexed$_nth$arity$2(null,i__39004_39464);
var script_tag_39466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39014_39465,(0),null);
var script_body_39467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39014_39465,(1),null);
eval(script_body_39467);


var G__39468 = seq__39001_39461;
var G__39469 = chunk__39002_39462;
var G__39470 = count__39003_39463;
var G__39471 = (i__39004_39464 + (1));
seq__39001_39461 = G__39468;
chunk__39002_39462 = G__39469;
count__39003_39463 = G__39470;
i__39004_39464 = G__39471;
continue;
} else {
var temp__5735__auto___39472 = cljs.core.seq(seq__39001_39461);
if(temp__5735__auto___39472){
var seq__39001_39473__$1 = temp__5735__auto___39472;
if(cljs.core.chunked_seq_QMARK_(seq__39001_39473__$1)){
var c__4609__auto___39474 = cljs.core.chunk_first(seq__39001_39473__$1);
var G__39475 = cljs.core.chunk_rest(seq__39001_39473__$1);
var G__39476 = c__4609__auto___39474;
var G__39477 = cljs.core.count(c__4609__auto___39474);
var G__39478 = (0);
seq__39001_39461 = G__39475;
chunk__39002_39462 = G__39476;
count__39003_39463 = G__39477;
i__39004_39464 = G__39478;
continue;
} else {
var vec__39018_39479 = cljs.core.first(seq__39001_39473__$1);
var script_tag_39480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39018_39479,(0),null);
var script_body_39481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39018_39479,(1),null);
eval(script_body_39481);


var G__39482 = cljs.core.next(seq__39001_39473__$1);
var G__39483 = null;
var G__39484 = (0);
var G__39485 = (0);
seq__39001_39461 = G__39482;
chunk__39002_39462 = G__39483;
count__39003_39463 = G__39484;
i__39004_39464 = G__39485;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39021){
var vec__39022 = p__39021;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39022,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39022,(1),null);
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
var G__39032 = shadow.dom.dom_node(el);
var G__39033 = cls;
return goog.dom.getAncestorByClass(G__39032,G__39033);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__39036 = arguments.length;
switch (G__39036) {
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
var G__39038 = shadow.dom.dom_node(el);
var G__39039 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__39038,G__39039);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__39043 = shadow.dom.dom_node(el);
var G__39044 = cljs.core.name(tag);
var G__39045 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__39043,G__39044,G__39045);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__39046 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__39046);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__39047 = shadow.dom.dom_node(dom);
var G__39048 = value;
return goog.dom.forms.setValue(G__39047,G__39048);
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
var seq__39072 = cljs.core.seq(style_keys);
var chunk__39073 = null;
var count__39074 = (0);
var i__39075 = (0);
while(true){
if((i__39075 < count__39074)){
var it = chunk__39073.cljs$core$IIndexed$_nth$arity$2(null,i__39075);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39493 = seq__39072;
var G__39494 = chunk__39073;
var G__39495 = count__39074;
var G__39496 = (i__39075 + (1));
seq__39072 = G__39493;
chunk__39073 = G__39494;
count__39074 = G__39495;
i__39075 = G__39496;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39072);
if(temp__5735__auto__){
var seq__39072__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39072__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39072__$1);
var G__39500 = cljs.core.chunk_rest(seq__39072__$1);
var G__39501 = c__4609__auto__;
var G__39502 = cljs.core.count(c__4609__auto__);
var G__39503 = (0);
seq__39072 = G__39500;
chunk__39073 = G__39501;
count__39074 = G__39502;
i__39075 = G__39503;
continue;
} else {
var it = cljs.core.first(seq__39072__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39504 = cljs.core.next(seq__39072__$1);
var G__39505 = null;
var G__39506 = (0);
var G__39507 = (0);
seq__39072 = G__39504;
chunk__39073 = G__39505;
count__39074 = G__39506;
i__39075 = G__39507;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k39077,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__39081 = k39077;
var G__39081__$1 = (((G__39081 instanceof cljs.core.Keyword))?G__39081.fqn:null);
switch (G__39081__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39077,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__39082){
var vec__39083 = p__39082;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39083,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39083,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39076){
var self__ = this;
var G__39076__$1 = this;
return (new cljs.core.RecordIter((0),G__39076__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__39086 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__39086(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39078,other39079){
var self__ = this;
var this39078__$1 = this;
return (((!((other39079 == null)))) && ((this39078__$1.constructor === other39079.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39078__$1.x,other39079.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39078__$1.y,other39079.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39078__$1.__extmap,other39079.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__39076){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__39087 = cljs.core.keyword_identical_QMARK_;
var expr__39088 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__39090 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__39091 = expr__39088;
return (pred__39087.cljs$core$IFn$_invoke$arity$2 ? pred__39087.cljs$core$IFn$_invoke$arity$2(G__39090,G__39091) : pred__39087.call(null,G__39090,G__39091));
})())){
return (new shadow.dom.Coordinate(G__39076,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39092 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__39093 = expr__39088;
return (pred__39087.cljs$core$IFn$_invoke$arity$2 ? pred__39087.cljs$core$IFn$_invoke$arity$2(G__39092,G__39093) : pred__39087.call(null,G__39092,G__39093));
})())){
return (new shadow.dom.Coordinate(self__.x,G__39076,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__39076),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__39076){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39076,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39080){
var extmap__4478__auto__ = (function (){var G__39094 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39080,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39080)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39094);
} else {
return G__39094;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39080),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39080),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__39095 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__39095);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__39096 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__39096);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__39097 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__39097);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k39099,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__39103 = k39099;
var G__39103__$1 = (((G__39103 instanceof cljs.core.Keyword))?G__39103.fqn:null);
switch (G__39103__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39099,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__39104){
var vec__39105 = p__39104;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39105,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39105,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39098){
var self__ = this;
var G__39098__$1 = this;
return (new cljs.core.RecordIter((0),G__39098__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__39108 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__39108(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39100,other39101){
var self__ = this;
var this39100__$1 = this;
return (((!((other39101 == null)))) && ((this39100__$1.constructor === other39101.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39100__$1.w,other39101.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39100__$1.h,other39101.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39100__$1.__extmap,other39101.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__39098){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__39109 = cljs.core.keyword_identical_QMARK_;
var expr__39110 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__39112 = new cljs.core.Keyword(null,"w","w",354169001);
var G__39113 = expr__39110;
return (pred__39109.cljs$core$IFn$_invoke$arity$2 ? pred__39109.cljs$core$IFn$_invoke$arity$2(G__39112,G__39113) : pred__39109.call(null,G__39112,G__39113));
})())){
return (new shadow.dom.Size(G__39098,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39114 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__39115 = expr__39110;
return (pred__39109.cljs$core$IFn$_invoke$arity$2 ? pred__39109.cljs$core$IFn$_invoke$arity$2(G__39114,G__39115) : pred__39109.call(null,G__39114,G__39115));
})())){
return (new shadow.dom.Size(self__.w,G__39098,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__39098),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__39098){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39098,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39102){
var extmap__4478__auto__ = (function (){var G__39116 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39102,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39102)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39116);
} else {
return G__39116;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39102),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39102),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__39117 = shadow.dom.dom_node(el);
return goog.style.getSize(G__39117);
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
var G__39547 = (i + (1));
var G__39548 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39547;
ret = G__39548;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39122){
var vec__39123 = p__39122;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39123,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39127 = arguments.length;
switch (G__39127) {
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
var G__39128_39552 = new_node;
var G__39129_39553 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__39128_39552,G__39129_39553);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__39130_39554 = new_node;
var G__39131_39555 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__39130_39554,G__39131_39555);

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
var G__39556 = ps;
var G__39557 = (i + (1));
el__$1 = G__39556;
i = G__39557;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__39132 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__39132);
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
var G__39133 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__39133);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__39134 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__39134);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__39135 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39135,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39135,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39135,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39138_39558 = cljs.core.seq(props);
var chunk__39139_39559 = null;
var count__39140_39560 = (0);
var i__39141_39561 = (0);
while(true){
if((i__39141_39561 < count__39140_39560)){
var vec__39148_39562 = chunk__39139_39559.cljs$core$IIndexed$_nth$arity$2(null,i__39141_39561);
var k_39563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39148_39562,(0),null);
var v_39564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39148_39562,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_39563);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39563),v_39564);


var G__39565 = seq__39138_39558;
var G__39566 = chunk__39139_39559;
var G__39567 = count__39140_39560;
var G__39568 = (i__39141_39561 + (1));
seq__39138_39558 = G__39565;
chunk__39139_39559 = G__39566;
count__39140_39560 = G__39567;
i__39141_39561 = G__39568;
continue;
} else {
var temp__5735__auto___39569 = cljs.core.seq(seq__39138_39558);
if(temp__5735__auto___39569){
var seq__39138_39570__$1 = temp__5735__auto___39569;
if(cljs.core.chunked_seq_QMARK_(seq__39138_39570__$1)){
var c__4609__auto___39571 = cljs.core.chunk_first(seq__39138_39570__$1);
var G__39572 = cljs.core.chunk_rest(seq__39138_39570__$1);
var G__39573 = c__4609__auto___39571;
var G__39574 = cljs.core.count(c__4609__auto___39571);
var G__39575 = (0);
seq__39138_39558 = G__39572;
chunk__39139_39559 = G__39573;
count__39140_39560 = G__39574;
i__39141_39561 = G__39575;
continue;
} else {
var vec__39151_39576 = cljs.core.first(seq__39138_39570__$1);
var k_39577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39151_39576,(0),null);
var v_39578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39151_39576,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_39577);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39577),v_39578);


var G__39579 = cljs.core.next(seq__39138_39570__$1);
var G__39580 = null;
var G__39581 = (0);
var G__39582 = (0);
seq__39138_39558 = G__39579;
chunk__39139_39559 = G__39580;
count__39140_39560 = G__39581;
i__39141_39561 = G__39582;
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
var vec__39155 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39155,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39155,(1),null);
var seq__39158_39584 = cljs.core.seq(node_children);
var chunk__39160_39585 = null;
var count__39161_39586 = (0);
var i__39162_39587 = (0);
while(true){
if((i__39162_39587 < count__39161_39586)){
var child_struct_39588 = chunk__39160_39585.cljs$core$IIndexed$_nth$arity$2(null,i__39162_39587);
if((!((child_struct_39588 == null)))){
if(typeof child_struct_39588 === 'string'){
var text_39589 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39589),child_struct_39588].join(''));
} else {
var children_39590 = shadow.dom.svg_node(child_struct_39588);
if(cljs.core.seq_QMARK_(children_39590)){
var seq__39176_39591 = cljs.core.seq(children_39590);
var chunk__39178_39592 = null;
var count__39179_39593 = (0);
var i__39180_39594 = (0);
while(true){
if((i__39180_39594 < count__39179_39593)){
var child_39595 = chunk__39178_39592.cljs$core$IIndexed$_nth$arity$2(null,i__39180_39594);
if(cljs.core.truth_(child_39595)){
node.appendChild(child_39595);


var G__39596 = seq__39176_39591;
var G__39597 = chunk__39178_39592;
var G__39598 = count__39179_39593;
var G__39599 = (i__39180_39594 + (1));
seq__39176_39591 = G__39596;
chunk__39178_39592 = G__39597;
count__39179_39593 = G__39598;
i__39180_39594 = G__39599;
continue;
} else {
var G__39600 = seq__39176_39591;
var G__39601 = chunk__39178_39592;
var G__39602 = count__39179_39593;
var G__39603 = (i__39180_39594 + (1));
seq__39176_39591 = G__39600;
chunk__39178_39592 = G__39601;
count__39179_39593 = G__39602;
i__39180_39594 = G__39603;
continue;
}
} else {
var temp__5735__auto___39604 = cljs.core.seq(seq__39176_39591);
if(temp__5735__auto___39604){
var seq__39176_39605__$1 = temp__5735__auto___39604;
if(cljs.core.chunked_seq_QMARK_(seq__39176_39605__$1)){
var c__4609__auto___39606 = cljs.core.chunk_first(seq__39176_39605__$1);
var G__39607 = cljs.core.chunk_rest(seq__39176_39605__$1);
var G__39608 = c__4609__auto___39606;
var G__39609 = cljs.core.count(c__4609__auto___39606);
var G__39610 = (0);
seq__39176_39591 = G__39607;
chunk__39178_39592 = G__39608;
count__39179_39593 = G__39609;
i__39180_39594 = G__39610;
continue;
} else {
var child_39611 = cljs.core.first(seq__39176_39605__$1);
if(cljs.core.truth_(child_39611)){
node.appendChild(child_39611);


var G__39612 = cljs.core.next(seq__39176_39605__$1);
var G__39613 = null;
var G__39614 = (0);
var G__39615 = (0);
seq__39176_39591 = G__39612;
chunk__39178_39592 = G__39613;
count__39179_39593 = G__39614;
i__39180_39594 = G__39615;
continue;
} else {
var G__39616 = cljs.core.next(seq__39176_39605__$1);
var G__39617 = null;
var G__39618 = (0);
var G__39619 = (0);
seq__39176_39591 = G__39616;
chunk__39178_39592 = G__39617;
count__39179_39593 = G__39618;
i__39180_39594 = G__39619;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39590);
}
}


var G__39620 = seq__39158_39584;
var G__39621 = chunk__39160_39585;
var G__39622 = count__39161_39586;
var G__39623 = (i__39162_39587 + (1));
seq__39158_39584 = G__39620;
chunk__39160_39585 = G__39621;
count__39161_39586 = G__39622;
i__39162_39587 = G__39623;
continue;
} else {
var G__39624 = seq__39158_39584;
var G__39625 = chunk__39160_39585;
var G__39626 = count__39161_39586;
var G__39627 = (i__39162_39587 + (1));
seq__39158_39584 = G__39624;
chunk__39160_39585 = G__39625;
count__39161_39586 = G__39626;
i__39162_39587 = G__39627;
continue;
}
} else {
var temp__5735__auto___39628 = cljs.core.seq(seq__39158_39584);
if(temp__5735__auto___39628){
var seq__39158_39629__$1 = temp__5735__auto___39628;
if(cljs.core.chunked_seq_QMARK_(seq__39158_39629__$1)){
var c__4609__auto___39630 = cljs.core.chunk_first(seq__39158_39629__$1);
var G__39631 = cljs.core.chunk_rest(seq__39158_39629__$1);
var G__39632 = c__4609__auto___39630;
var G__39633 = cljs.core.count(c__4609__auto___39630);
var G__39634 = (0);
seq__39158_39584 = G__39631;
chunk__39160_39585 = G__39632;
count__39161_39586 = G__39633;
i__39162_39587 = G__39634;
continue;
} else {
var child_struct_39635 = cljs.core.first(seq__39158_39629__$1);
if((!((child_struct_39635 == null)))){
if(typeof child_struct_39635 === 'string'){
var text_39636 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39636),child_struct_39635].join(''));
} else {
var children_39637 = shadow.dom.svg_node(child_struct_39635);
if(cljs.core.seq_QMARK_(children_39637)){
var seq__39182_39638 = cljs.core.seq(children_39637);
var chunk__39184_39639 = null;
var count__39185_39640 = (0);
var i__39186_39641 = (0);
while(true){
if((i__39186_39641 < count__39185_39640)){
var child_39642 = chunk__39184_39639.cljs$core$IIndexed$_nth$arity$2(null,i__39186_39641);
if(cljs.core.truth_(child_39642)){
node.appendChild(child_39642);


var G__39643 = seq__39182_39638;
var G__39644 = chunk__39184_39639;
var G__39645 = count__39185_39640;
var G__39646 = (i__39186_39641 + (1));
seq__39182_39638 = G__39643;
chunk__39184_39639 = G__39644;
count__39185_39640 = G__39645;
i__39186_39641 = G__39646;
continue;
} else {
var G__39647 = seq__39182_39638;
var G__39648 = chunk__39184_39639;
var G__39649 = count__39185_39640;
var G__39650 = (i__39186_39641 + (1));
seq__39182_39638 = G__39647;
chunk__39184_39639 = G__39648;
count__39185_39640 = G__39649;
i__39186_39641 = G__39650;
continue;
}
} else {
var temp__5735__auto___39651__$1 = cljs.core.seq(seq__39182_39638);
if(temp__5735__auto___39651__$1){
var seq__39182_39652__$1 = temp__5735__auto___39651__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39182_39652__$1)){
var c__4609__auto___39653 = cljs.core.chunk_first(seq__39182_39652__$1);
var G__39654 = cljs.core.chunk_rest(seq__39182_39652__$1);
var G__39655 = c__4609__auto___39653;
var G__39656 = cljs.core.count(c__4609__auto___39653);
var G__39657 = (0);
seq__39182_39638 = G__39654;
chunk__39184_39639 = G__39655;
count__39185_39640 = G__39656;
i__39186_39641 = G__39657;
continue;
} else {
var child_39658 = cljs.core.first(seq__39182_39652__$1);
if(cljs.core.truth_(child_39658)){
node.appendChild(child_39658);


var G__39659 = cljs.core.next(seq__39182_39652__$1);
var G__39660 = null;
var G__39661 = (0);
var G__39662 = (0);
seq__39182_39638 = G__39659;
chunk__39184_39639 = G__39660;
count__39185_39640 = G__39661;
i__39186_39641 = G__39662;
continue;
} else {
var G__39663 = cljs.core.next(seq__39182_39652__$1);
var G__39664 = null;
var G__39665 = (0);
var G__39666 = (0);
seq__39182_39638 = G__39663;
chunk__39184_39639 = G__39664;
count__39185_39640 = G__39665;
i__39186_39641 = G__39666;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39637);
}
}


var G__39667 = cljs.core.next(seq__39158_39629__$1);
var G__39668 = null;
var G__39669 = (0);
var G__39670 = (0);
seq__39158_39584 = G__39667;
chunk__39160_39585 = G__39668;
count__39161_39586 = G__39669;
i__39162_39587 = G__39670;
continue;
} else {
var G__39671 = cljs.core.next(seq__39158_39629__$1);
var G__39672 = null;
var G__39673 = (0);
var G__39674 = (0);
seq__39158_39584 = G__39671;
chunk__39160_39585 = G__39672;
count__39161_39586 = G__39673;
i__39162_39587 = G__39674;
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

var G__39188_39675 = shadow.dom._to_svg;
var G__39189_39676 = "string";
var G__39190_39677 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__39188_39675,G__39189_39676,G__39190_39677);

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

var G__39191_39678 = shadow.dom._to_svg;
var G__39192_39679 = "null";
var G__39193_39680 = (function (_){
return null;
});
goog.object.set(G__39191_39678,G__39192_39679,G__39193_39680);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39681 = arguments.length;
var i__4790__auto___39682 = (0);
while(true){
if((i__4790__auto___39682 < len__4789__auto___39681)){
args__4795__auto__.push((arguments[i__4790__auto___39682]));

var G__39683 = (i__4790__auto___39682 + (1));
i__4790__auto___39682 = G__39683;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39194){
var G__39195 = cljs.core.first(seq39194);
var seq39194__$1 = cljs.core.next(seq39194);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39195,seq39194__$1);
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
var G__39197 = arguments.length;
switch (G__39197) {
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
var G__39210_39685 = shadow.dom.dom_node(el);
var G__39211_39686 = cljs.core.name(event);
var G__39212_39687 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39210_39685,G__39211_39686,G__39212_39687) : shadow.dom.dom_listen.call(null,G__39210_39685,G__39211_39686,G__39212_39687));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__36933__auto___39688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36934__auto__ = (function (){var switch__36865__auto__ = (function (state_39222){
var state_val_39223 = (state_39222[(1)]);
if((state_val_39223 === (1))){
var state_39222__$1 = state_39222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39222__$1,(2),once_or_cleanup);
} else {
if((state_val_39223 === (2))){
var inst_39219 = (state_39222[(2)]);
var inst_39220 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39222__$1 = (function (){var statearr_39230 = state_39222;
(statearr_39230[(7)] = inst_39219);

return statearr_39230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39222__$1,inst_39220);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36866__auto__ = null;
var shadow$dom$state_machine__36866__auto____0 = (function (){
var statearr_39235 = [null,null,null,null,null,null,null,null];
(statearr_39235[(0)] = shadow$dom$state_machine__36866__auto__);

(statearr_39235[(1)] = (1));

return statearr_39235;
});
var shadow$dom$state_machine__36866__auto____1 = (function (state_39222){
while(true){
var ret_value__36867__auto__ = (function (){try{while(true){
var result__36868__auto__ = switch__36865__auto__(state_39222);
if(cljs.core.keyword_identical_QMARK_(result__36868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36868__auto__;
}
break;
}
}catch (e39242){if((e39242 instanceof Object)){
var ex__36869__auto__ = e39242;
var statearr_39243_39692 = state_39222;
(statearr_39243_39692[(5)] = ex__36869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39242;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39693 = state_39222;
state_39222 = G__39693;
continue;
} else {
return ret_value__36867__auto__;
}
break;
}
});
shadow$dom$state_machine__36866__auto__ = function(state_39222){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36866__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36866__auto____1.call(this,state_39222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36866__auto____0;
shadow$dom$state_machine__36866__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36866__auto____1;
return shadow$dom$state_machine__36866__auto__;
})()
})();
var state__36935__auto__ = (function (){var statearr_39251 = (f__36934__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36934__auto__.cljs$core$IFn$_invoke$arity$0() : f__36934__auto__.call(null));
(statearr_39251[(6)] = c__36933__auto___39688);

return statearr_39251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36935__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
