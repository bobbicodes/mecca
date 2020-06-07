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
return cljs.core.cons((coll[idx]),(function (){var G__36861 = coll;
var G__36862 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36861,G__36862) : shadow.dom.lazy_native_coll_seq.call(null,G__36861,G__36862));
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
var G__36906 = arguments.length;
switch (G__36906) {
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
var G__36915 = arguments.length;
switch (G__36915) {
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
var G__36934 = arguments.length;
switch (G__36934) {
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
var G__36937 = arguments.length;
switch (G__36937) {
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
var G__36943 = arguments.length;
switch (G__36943) {
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
var G__36947 = document;
var G__36948 = shadow.dom.dom_node(el);
return goog.dom.contains(G__36947,G__36948);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__36952 = shadow.dom.dom_node(parent);
var G__36953 = shadow.dom.dom_node(el);
return goog.dom.contains(G__36952,G__36953);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__36962 = shadow.dom.dom_node(el);
var G__36963 = cls;
return goog.dom.classlist.add(G__36962,G__36963);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__36964 = shadow.dom.dom_node(el);
var G__36965 = cls;
return goog.dom.classlist.remove(G__36964,G__36965);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36967 = arguments.length;
switch (G__36967) {
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
var G__36970 = shadow.dom.dom_node(el);
var G__36971 = cls;
return goog.dom.classlist.toggle(G__36970,G__36971);
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
}catch (e36981){if((e36981 instanceof Object)){
var e = e36981;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36981;

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
var seq__36986 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36987 = null;
var count__36988 = (0);
var i__36989 = (0);
while(true){
if((i__36989 < count__36988)){
var el = chunk__36987.cljs$core$IIndexed$_nth$arity$2(null,i__36989);
var handler_37575__$1 = ((function (seq__36986,chunk__36987,count__36988,i__36989,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36986,chunk__36987,count__36988,i__36989,el))
;
var G__37006_37576 = el;
var G__37007_37577 = cljs.core.name(ev);
var G__37008_37578 = handler_37575__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37006_37576,G__37007_37577,G__37008_37578) : shadow.dom.dom_listen.call(null,G__37006_37576,G__37007_37577,G__37008_37578));


var G__37579 = seq__36986;
var G__37580 = chunk__36987;
var G__37581 = count__36988;
var G__37582 = (i__36989 + (1));
seq__36986 = G__37579;
chunk__36987 = G__37580;
count__36988 = G__37581;
i__36989 = G__37582;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36986);
if(temp__5735__auto__){
var seq__36986__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36986__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36986__$1);
var G__37583 = cljs.core.chunk_rest(seq__36986__$1);
var G__37584 = c__4609__auto__;
var G__37585 = cljs.core.count(c__4609__auto__);
var G__37586 = (0);
seq__36986 = G__37583;
chunk__36987 = G__37584;
count__36988 = G__37585;
i__36989 = G__37586;
continue;
} else {
var el = cljs.core.first(seq__36986__$1);
var handler_37587__$1 = ((function (seq__36986,chunk__36987,count__36988,i__36989,el,seq__36986__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36986,chunk__36987,count__36988,i__36989,el,seq__36986__$1,temp__5735__auto__))
;
var G__37012_37588 = el;
var G__37013_37589 = cljs.core.name(ev);
var G__37014_37590 = handler_37587__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37012_37588,G__37013_37589,G__37014_37590) : shadow.dom.dom_listen.call(null,G__37012_37588,G__37013_37589,G__37014_37590));


var G__37591 = cljs.core.next(seq__36986__$1);
var G__37592 = null;
var G__37593 = (0);
var G__37594 = (0);
seq__36986 = G__37591;
chunk__36987 = G__37592;
count__36988 = G__37593;
i__36989 = G__37594;
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
var G__37020 = arguments.length;
switch (G__37020) {
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
var G__37025 = shadow.dom.dom_node(el);
var G__37026 = cljs.core.name(ev);
var G__37027 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37025,G__37026,G__37027) : shadow.dom.dom_listen.call(null,G__37025,G__37026,G__37027));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__37031 = shadow.dom.dom_node(el);
var G__37032 = cljs.core.name(ev);
var G__37033 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__37031,G__37032,G__37033) : shadow.dom.dom_listen_remove.call(null,G__37031,G__37032,G__37033));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37037 = cljs.core.seq(events);
var chunk__37038 = null;
var count__37039 = (0);
var i__37040 = (0);
while(true){
if((i__37040 < count__37039)){
var vec__37056 = chunk__37038.cljs$core$IIndexed$_nth$arity$2(null,i__37040);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37056,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37596 = seq__37037;
var G__37597 = chunk__37038;
var G__37598 = count__37039;
var G__37599 = (i__37040 + (1));
seq__37037 = G__37596;
chunk__37038 = G__37597;
count__37039 = G__37598;
i__37040 = G__37599;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37037);
if(temp__5735__auto__){
var seq__37037__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37037__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37037__$1);
var G__37600 = cljs.core.chunk_rest(seq__37037__$1);
var G__37601 = c__4609__auto__;
var G__37602 = cljs.core.count(c__4609__auto__);
var G__37603 = (0);
seq__37037 = G__37600;
chunk__37038 = G__37601;
count__37039 = G__37602;
i__37040 = G__37603;
continue;
} else {
var vec__37062 = cljs.core.first(seq__37037__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37062,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37062,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37604 = cljs.core.next(seq__37037__$1);
var G__37605 = null;
var G__37606 = (0);
var G__37607 = (0);
seq__37037 = G__37604;
chunk__37038 = G__37605;
count__37039 = G__37606;
i__37040 = G__37607;
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
var seq__37068 = cljs.core.seq(styles);
var chunk__37069 = null;
var count__37070 = (0);
var i__37071 = (0);
while(true){
if((i__37071 < count__37070)){
var vec__37085 = chunk__37069.cljs$core$IIndexed$_nth$arity$2(null,i__37071);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37085,(1),null);
var G__37088_37608 = dom;
var G__37089_37609 = cljs.core.name(k);
var G__37090_37610 = (((v == null))?"":v);
goog.style.setStyle(G__37088_37608,G__37089_37609,G__37090_37610);


var G__37611 = seq__37068;
var G__37612 = chunk__37069;
var G__37613 = count__37070;
var G__37614 = (i__37071 + (1));
seq__37068 = G__37611;
chunk__37069 = G__37612;
count__37070 = G__37613;
i__37071 = G__37614;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37068);
if(temp__5735__auto__){
var seq__37068__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37068__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37068__$1);
var G__37615 = cljs.core.chunk_rest(seq__37068__$1);
var G__37616 = c__4609__auto__;
var G__37617 = cljs.core.count(c__4609__auto__);
var G__37618 = (0);
seq__37068 = G__37615;
chunk__37069 = G__37616;
count__37070 = G__37617;
i__37071 = G__37618;
continue;
} else {
var vec__37091 = cljs.core.first(seq__37068__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37091,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37091,(1),null);
var G__37094_37619 = dom;
var G__37095_37620 = cljs.core.name(k);
var G__37096_37621 = (((v == null))?"":v);
goog.style.setStyle(G__37094_37619,G__37095_37620,G__37096_37621);


var G__37622 = cljs.core.next(seq__37068__$1);
var G__37623 = null;
var G__37624 = (0);
var G__37625 = (0);
seq__37068 = G__37622;
chunk__37069 = G__37623;
count__37070 = G__37624;
i__37071 = G__37625;
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
var G__37100_37626 = key;
var G__37100_37627__$1 = (((G__37100_37626 instanceof cljs.core.Keyword))?G__37100_37626.fqn:null);
switch (G__37100_37627__$1) {
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
var ks_37629 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_37629,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_37629,"aria-");
}
})())){
el.setAttribute(ks_37629,value);
} else {
(el[ks_37629] = value);
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
var G__37104 = shadow.dom.dom_node(el);
var G__37105 = cls;
return goog.dom.classlist.contains(G__37104,G__37105);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37106){
var map__37107 = p__37106;
var map__37107__$1 = (((((!((map__37107 == null))))?(((((map__37107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37107):map__37107);
var props = map__37107__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37107__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37112 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37112,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37112,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37112,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37116 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37116,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37116;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37123 = arguments.length;
switch (G__37123) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37132){
var vec__37133 = p__37132;
var seq__37134 = cljs.core.seq(vec__37133);
var first__37135 = cljs.core.first(seq__37134);
var seq__37134__$1 = cljs.core.next(seq__37134);
var nn = first__37135;
var first__37135__$1 = cljs.core.first(seq__37134__$1);
var seq__37134__$2 = cljs.core.next(seq__37134__$1);
var np = first__37135__$1;
var nc = seq__37134__$2;
var node = vec__37133;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37139 = nn;
var G__37140 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37139,G__37140) : create_fn.call(null,G__37139,G__37140));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37142 = nn;
var G__37143 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37142,G__37143) : create_fn.call(null,G__37142,G__37143));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37147 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37147,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37147,(1),null);
var seq__37151_37631 = cljs.core.seq(node_children);
var chunk__37152_37632 = null;
var count__37153_37633 = (0);
var i__37154_37634 = (0);
while(true){
if((i__37154_37634 < count__37153_37633)){
var child_struct_37635 = chunk__37152_37632.cljs$core$IIndexed$_nth$arity$2(null,i__37154_37634);
var children_37636 = shadow.dom.dom_node(child_struct_37635);
if(cljs.core.seq_QMARK_(children_37636)){
var seq__37189_37637 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37636));
var chunk__37191_37638 = null;
var count__37192_37639 = (0);
var i__37193_37640 = (0);
while(true){
if((i__37193_37640 < count__37192_37639)){
var child_37641 = chunk__37191_37638.cljs$core$IIndexed$_nth$arity$2(null,i__37193_37640);
if(cljs.core.truth_(child_37641)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37641);


var G__37642 = seq__37189_37637;
var G__37643 = chunk__37191_37638;
var G__37644 = count__37192_37639;
var G__37645 = (i__37193_37640 + (1));
seq__37189_37637 = G__37642;
chunk__37191_37638 = G__37643;
count__37192_37639 = G__37644;
i__37193_37640 = G__37645;
continue;
} else {
var G__37646 = seq__37189_37637;
var G__37647 = chunk__37191_37638;
var G__37648 = count__37192_37639;
var G__37649 = (i__37193_37640 + (1));
seq__37189_37637 = G__37646;
chunk__37191_37638 = G__37647;
count__37192_37639 = G__37648;
i__37193_37640 = G__37649;
continue;
}
} else {
var temp__5735__auto___37650 = cljs.core.seq(seq__37189_37637);
if(temp__5735__auto___37650){
var seq__37189_37651__$1 = temp__5735__auto___37650;
if(cljs.core.chunked_seq_QMARK_(seq__37189_37651__$1)){
var c__4609__auto___37652 = cljs.core.chunk_first(seq__37189_37651__$1);
var G__37653 = cljs.core.chunk_rest(seq__37189_37651__$1);
var G__37654 = c__4609__auto___37652;
var G__37655 = cljs.core.count(c__4609__auto___37652);
var G__37656 = (0);
seq__37189_37637 = G__37653;
chunk__37191_37638 = G__37654;
count__37192_37639 = G__37655;
i__37193_37640 = G__37656;
continue;
} else {
var child_37657 = cljs.core.first(seq__37189_37651__$1);
if(cljs.core.truth_(child_37657)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37657);


var G__37658 = cljs.core.next(seq__37189_37651__$1);
var G__37659 = null;
var G__37660 = (0);
var G__37661 = (0);
seq__37189_37637 = G__37658;
chunk__37191_37638 = G__37659;
count__37192_37639 = G__37660;
i__37193_37640 = G__37661;
continue;
} else {
var G__37662 = cljs.core.next(seq__37189_37651__$1);
var G__37663 = null;
var G__37664 = (0);
var G__37665 = (0);
seq__37189_37637 = G__37662;
chunk__37191_37638 = G__37663;
count__37192_37639 = G__37664;
i__37193_37640 = G__37665;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37636);
}


var G__37666 = seq__37151_37631;
var G__37667 = chunk__37152_37632;
var G__37668 = count__37153_37633;
var G__37669 = (i__37154_37634 + (1));
seq__37151_37631 = G__37666;
chunk__37152_37632 = G__37667;
count__37153_37633 = G__37668;
i__37154_37634 = G__37669;
continue;
} else {
var temp__5735__auto___37670 = cljs.core.seq(seq__37151_37631);
if(temp__5735__auto___37670){
var seq__37151_37671__$1 = temp__5735__auto___37670;
if(cljs.core.chunked_seq_QMARK_(seq__37151_37671__$1)){
var c__4609__auto___37672 = cljs.core.chunk_first(seq__37151_37671__$1);
var G__37673 = cljs.core.chunk_rest(seq__37151_37671__$1);
var G__37674 = c__4609__auto___37672;
var G__37675 = cljs.core.count(c__4609__auto___37672);
var G__37676 = (0);
seq__37151_37631 = G__37673;
chunk__37152_37632 = G__37674;
count__37153_37633 = G__37675;
i__37154_37634 = G__37676;
continue;
} else {
var child_struct_37677 = cljs.core.first(seq__37151_37671__$1);
var children_37678 = shadow.dom.dom_node(child_struct_37677);
if(cljs.core.seq_QMARK_(children_37678)){
var seq__37197_37679 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37678));
var chunk__37199_37680 = null;
var count__37200_37681 = (0);
var i__37201_37682 = (0);
while(true){
if((i__37201_37682 < count__37200_37681)){
var child_37683 = chunk__37199_37680.cljs$core$IIndexed$_nth$arity$2(null,i__37201_37682);
if(cljs.core.truth_(child_37683)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37683);


var G__37684 = seq__37197_37679;
var G__37685 = chunk__37199_37680;
var G__37686 = count__37200_37681;
var G__37687 = (i__37201_37682 + (1));
seq__37197_37679 = G__37684;
chunk__37199_37680 = G__37685;
count__37200_37681 = G__37686;
i__37201_37682 = G__37687;
continue;
} else {
var G__37688 = seq__37197_37679;
var G__37689 = chunk__37199_37680;
var G__37690 = count__37200_37681;
var G__37691 = (i__37201_37682 + (1));
seq__37197_37679 = G__37688;
chunk__37199_37680 = G__37689;
count__37200_37681 = G__37690;
i__37201_37682 = G__37691;
continue;
}
} else {
var temp__5735__auto___37692__$1 = cljs.core.seq(seq__37197_37679);
if(temp__5735__auto___37692__$1){
var seq__37197_37693__$1 = temp__5735__auto___37692__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37197_37693__$1)){
var c__4609__auto___37694 = cljs.core.chunk_first(seq__37197_37693__$1);
var G__37695 = cljs.core.chunk_rest(seq__37197_37693__$1);
var G__37696 = c__4609__auto___37694;
var G__37697 = cljs.core.count(c__4609__auto___37694);
var G__37698 = (0);
seq__37197_37679 = G__37695;
chunk__37199_37680 = G__37696;
count__37200_37681 = G__37697;
i__37201_37682 = G__37698;
continue;
} else {
var child_37699 = cljs.core.first(seq__37197_37693__$1);
if(cljs.core.truth_(child_37699)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37699);


var G__37700 = cljs.core.next(seq__37197_37693__$1);
var G__37701 = null;
var G__37702 = (0);
var G__37703 = (0);
seq__37197_37679 = G__37700;
chunk__37199_37680 = G__37701;
count__37200_37681 = G__37702;
i__37201_37682 = G__37703;
continue;
} else {
var G__37704 = cljs.core.next(seq__37197_37693__$1);
var G__37705 = null;
var G__37706 = (0);
var G__37707 = (0);
seq__37197_37679 = G__37704;
chunk__37199_37680 = G__37705;
count__37200_37681 = G__37706;
i__37201_37682 = G__37707;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37678);
}


var G__37708 = cljs.core.next(seq__37151_37671__$1);
var G__37709 = null;
var G__37710 = (0);
var G__37711 = (0);
seq__37151_37631 = G__37708;
chunk__37152_37632 = G__37709;
count__37153_37633 = G__37710;
i__37154_37634 = G__37711;
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
var G__37205 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__37205);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37210 = cljs.core.seq(node);
var chunk__37211 = null;
var count__37212 = (0);
var i__37213 = (0);
while(true){
if((i__37213 < count__37212)){
var n = chunk__37211.cljs$core$IIndexed$_nth$arity$2(null,i__37213);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37714 = seq__37210;
var G__37715 = chunk__37211;
var G__37716 = count__37212;
var G__37717 = (i__37213 + (1));
seq__37210 = G__37714;
chunk__37211 = G__37715;
count__37212 = G__37716;
i__37213 = G__37717;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37210);
if(temp__5735__auto__){
var seq__37210__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37210__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37210__$1);
var G__37718 = cljs.core.chunk_rest(seq__37210__$1);
var G__37719 = c__4609__auto__;
var G__37720 = cljs.core.count(c__4609__auto__);
var G__37721 = (0);
seq__37210 = G__37718;
chunk__37211 = G__37719;
count__37212 = G__37720;
i__37213 = G__37721;
continue;
} else {
var n = cljs.core.first(seq__37210__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37722 = cljs.core.next(seq__37210__$1);
var G__37723 = null;
var G__37724 = (0);
var G__37725 = (0);
seq__37210 = G__37722;
chunk__37211 = G__37723;
count__37212 = G__37724;
i__37213 = G__37725;
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
var G__37225 = shadow.dom.dom_node(new$);
var G__37226 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__37225,G__37226);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37230 = arguments.length;
switch (G__37230) {
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
var G__37238 = arguments.length;
switch (G__37238) {
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
var G__37247 = arguments.length;
switch (G__37247) {
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
var len__4789__auto___37732 = arguments.length;
var i__4790__auto___37733 = (0);
while(true){
if((i__4790__auto___37733 < len__4789__auto___37732)){
args__4795__auto__.push((arguments[i__4790__auto___37733]));

var G__37734 = (i__4790__auto___37733 + (1));
i__4790__auto___37733 = G__37734;
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
var seq__37265_37736 = cljs.core.seq(nodes);
var chunk__37266_37737 = null;
var count__37267_37738 = (0);
var i__37268_37739 = (0);
while(true){
if((i__37268_37739 < count__37267_37738)){
var node_37740 = chunk__37266_37737.cljs$core$IIndexed$_nth$arity$2(null,i__37268_37739);
fragment.appendChild(shadow.dom._to_dom(node_37740));


var G__37741 = seq__37265_37736;
var G__37742 = chunk__37266_37737;
var G__37743 = count__37267_37738;
var G__37744 = (i__37268_37739 + (1));
seq__37265_37736 = G__37741;
chunk__37266_37737 = G__37742;
count__37267_37738 = G__37743;
i__37268_37739 = G__37744;
continue;
} else {
var temp__5735__auto___37745 = cljs.core.seq(seq__37265_37736);
if(temp__5735__auto___37745){
var seq__37265_37746__$1 = temp__5735__auto___37745;
if(cljs.core.chunked_seq_QMARK_(seq__37265_37746__$1)){
var c__4609__auto___37747 = cljs.core.chunk_first(seq__37265_37746__$1);
var G__37748 = cljs.core.chunk_rest(seq__37265_37746__$1);
var G__37749 = c__4609__auto___37747;
var G__37750 = cljs.core.count(c__4609__auto___37747);
var G__37751 = (0);
seq__37265_37736 = G__37748;
chunk__37266_37737 = G__37749;
count__37267_37738 = G__37750;
i__37268_37739 = G__37751;
continue;
} else {
var node_37752 = cljs.core.first(seq__37265_37746__$1);
fragment.appendChild(shadow.dom._to_dom(node_37752));


var G__37753 = cljs.core.next(seq__37265_37746__$1);
var G__37754 = null;
var G__37755 = (0);
var G__37756 = (0);
seq__37265_37736 = G__37753;
chunk__37266_37737 = G__37754;
count__37267_37738 = G__37755;
i__37268_37739 = G__37756;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37261){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37261));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37275_37757 = cljs.core.seq(scripts);
var chunk__37276_37758 = null;
var count__37277_37759 = (0);
var i__37278_37760 = (0);
while(true){
if((i__37278_37760 < count__37277_37759)){
var vec__37297_37761 = chunk__37276_37758.cljs$core$IIndexed$_nth$arity$2(null,i__37278_37760);
var script_tag_37762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37297_37761,(0),null);
var script_body_37763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37297_37761,(1),null);
eval(script_body_37763);


var G__37764 = seq__37275_37757;
var G__37765 = chunk__37276_37758;
var G__37766 = count__37277_37759;
var G__37767 = (i__37278_37760 + (1));
seq__37275_37757 = G__37764;
chunk__37276_37758 = G__37765;
count__37277_37759 = G__37766;
i__37278_37760 = G__37767;
continue;
} else {
var temp__5735__auto___37768 = cljs.core.seq(seq__37275_37757);
if(temp__5735__auto___37768){
var seq__37275_37769__$1 = temp__5735__auto___37768;
if(cljs.core.chunked_seq_QMARK_(seq__37275_37769__$1)){
var c__4609__auto___37770 = cljs.core.chunk_first(seq__37275_37769__$1);
var G__37771 = cljs.core.chunk_rest(seq__37275_37769__$1);
var G__37772 = c__4609__auto___37770;
var G__37773 = cljs.core.count(c__4609__auto___37770);
var G__37774 = (0);
seq__37275_37757 = G__37771;
chunk__37276_37758 = G__37772;
count__37277_37759 = G__37773;
i__37278_37760 = G__37774;
continue;
} else {
var vec__37301_37776 = cljs.core.first(seq__37275_37769__$1);
var script_tag_37777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37301_37776,(0),null);
var script_body_37778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37301_37776,(1),null);
eval(script_body_37778);


var G__37779 = cljs.core.next(seq__37275_37769__$1);
var G__37780 = null;
var G__37781 = (0);
var G__37782 = (0);
seq__37275_37757 = G__37779;
chunk__37276_37758 = G__37780;
count__37277_37759 = G__37781;
i__37278_37760 = G__37782;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37304){
var vec__37305 = p__37304;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(1),null);
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
var G__37312 = shadow.dom.dom_node(el);
var G__37313 = cls;
return goog.dom.getAncestorByClass(G__37312,G__37313);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37318 = arguments.length;
switch (G__37318) {
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
var G__37322 = shadow.dom.dom_node(el);
var G__37323 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__37322,G__37323);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__37325 = shadow.dom.dom_node(el);
var G__37326 = cljs.core.name(tag);
var G__37327 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__37325,G__37326,G__37327);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__37331 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__37331);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__37334 = shadow.dom.dom_node(dom);
var G__37335 = value;
return goog.dom.forms.setValue(G__37334,G__37335);
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
var seq__37336 = cljs.core.seq(style_keys);
var chunk__37337 = null;
var count__37338 = (0);
var i__37339 = (0);
while(true){
if((i__37339 < count__37338)){
var it = chunk__37337.cljs$core$IIndexed$_nth$arity$2(null,i__37339);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37793 = seq__37336;
var G__37794 = chunk__37337;
var G__37795 = count__37338;
var G__37796 = (i__37339 + (1));
seq__37336 = G__37793;
chunk__37337 = G__37794;
count__37338 = G__37795;
i__37339 = G__37796;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37336);
if(temp__5735__auto__){
var seq__37336__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37336__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37336__$1);
var G__37797 = cljs.core.chunk_rest(seq__37336__$1);
var G__37798 = c__4609__auto__;
var G__37799 = cljs.core.count(c__4609__auto__);
var G__37800 = (0);
seq__37336 = G__37797;
chunk__37337 = G__37798;
count__37338 = G__37799;
i__37339 = G__37800;
continue;
} else {
var it = cljs.core.first(seq__37336__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37801 = cljs.core.next(seq__37336__$1);
var G__37802 = null;
var G__37803 = (0);
var G__37804 = (0);
seq__37336 = G__37801;
chunk__37337 = G__37802;
count__37338 = G__37803;
i__37339 = G__37804;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37341,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37345 = k37341;
var G__37345__$1 = (((G__37345 instanceof cljs.core.Keyword))?G__37345.fqn:null);
switch (G__37345__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37341,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37350){
var vec__37352 = p__37350;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37352,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37352,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37340){
var self__ = this;
var G__37340__$1 = this;
return (new cljs.core.RecordIter((0),G__37340__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__37365 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__37365(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37342,other37343){
var self__ = this;
var this37342__$1 = this;
return (((!((other37343 == null)))) && ((this37342__$1.constructor === other37343.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37342__$1.x,other37343.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37342__$1.y,other37343.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37342__$1.__extmap,other37343.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37340){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37372 = cljs.core.keyword_identical_QMARK_;
var expr__37373 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__37376 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__37377 = expr__37373;
return (pred__37372.cljs$core$IFn$_invoke$arity$2 ? pred__37372.cljs$core$IFn$_invoke$arity$2(G__37376,G__37377) : pred__37372.call(null,G__37376,G__37377));
})())){
return (new shadow.dom.Coordinate(G__37340,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37378 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__37379 = expr__37373;
return (pred__37372.cljs$core$IFn$_invoke$arity$2 ? pred__37372.cljs$core$IFn$_invoke$arity$2(G__37378,G__37379) : pred__37372.call(null,G__37378,G__37379));
})())){
return (new shadow.dom.Coordinate(self__.x,G__37340,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37340),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37340){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37340,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37344){
var extmap__4478__auto__ = (function (){var G__37392 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37344,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37344)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37392);
} else {
return G__37392;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37344),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37344),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__37396 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__37396);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__37399 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__37399);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__37402 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__37402);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37405,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37411 = k37405;
var G__37411__$1 = (((G__37411 instanceof cljs.core.Keyword))?G__37411.fqn:null);
switch (G__37411__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37405,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37414){
var vec__37416 = p__37414;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37416,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37416,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37404){
var self__ = this;
var G__37404__$1 = this;
return (new cljs.core.RecordIter((0),G__37404__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__37427 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__37427(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37406,other37407){
var self__ = this;
var this37406__$1 = this;
return (((!((other37407 == null)))) && ((this37406__$1.constructor === other37407.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37406__$1.w,other37407.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37406__$1.h,other37407.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37406__$1.__extmap,other37407.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37404){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37433 = cljs.core.keyword_identical_QMARK_;
var expr__37434 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__37437 = new cljs.core.Keyword(null,"w","w",354169001);
var G__37438 = expr__37434;
return (pred__37433.cljs$core$IFn$_invoke$arity$2 ? pred__37433.cljs$core$IFn$_invoke$arity$2(G__37437,G__37438) : pred__37433.call(null,G__37437,G__37438));
})())){
return (new shadow.dom.Size(G__37404,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37439 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__37440 = expr__37434;
return (pred__37433.cljs$core$IFn$_invoke$arity$2 ? pred__37433.cljs$core$IFn$_invoke$arity$2(G__37439,G__37440) : pred__37433.call(null,G__37439,G__37440));
})())){
return (new shadow.dom.Size(self__.w,G__37404,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37404),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37404){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37404,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37408){
var extmap__4478__auto__ = (function (){var G__37451 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37408,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37408)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37451);
} else {
return G__37451;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37408),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37408),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__37455 = shadow.dom.dom_node(el);
return goog.style.getSize(G__37455);
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
var G__37824 = (i + (1));
var G__37825 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37824;
ret = G__37825;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37471){
var vec__37472 = p__37471;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37472,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37477 = arguments.length;
switch (G__37477) {
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
var G__37485_37830 = new_node;
var G__37486_37831 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__37485_37830,G__37486_37831);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__37487_37832 = new_node;
var G__37488_37833 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__37487_37832,G__37488_37833);

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
var G__37834 = ps;
var G__37835 = (i + (1));
el__$1 = G__37834;
i = G__37835;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__37489 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__37489);
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
var G__37490 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__37490);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__37491 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__37491);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37492 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37492,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37492,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37492,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37495_37836 = cljs.core.seq(props);
var chunk__37496_37837 = null;
var count__37497_37838 = (0);
var i__37498_37839 = (0);
while(true){
if((i__37498_37839 < count__37497_37838)){
var vec__37505_37840 = chunk__37496_37837.cljs$core$IIndexed$_nth$arity$2(null,i__37498_37839);
var k_37841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37505_37840,(0),null);
var v_37842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37505_37840,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_37841);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37841),v_37842);


var G__37843 = seq__37495_37836;
var G__37844 = chunk__37496_37837;
var G__37845 = count__37497_37838;
var G__37846 = (i__37498_37839 + (1));
seq__37495_37836 = G__37843;
chunk__37496_37837 = G__37844;
count__37497_37838 = G__37845;
i__37498_37839 = G__37846;
continue;
} else {
var temp__5735__auto___37847 = cljs.core.seq(seq__37495_37836);
if(temp__5735__auto___37847){
var seq__37495_37848__$1 = temp__5735__auto___37847;
if(cljs.core.chunked_seq_QMARK_(seq__37495_37848__$1)){
var c__4609__auto___37849 = cljs.core.chunk_first(seq__37495_37848__$1);
var G__37850 = cljs.core.chunk_rest(seq__37495_37848__$1);
var G__37851 = c__4609__auto___37849;
var G__37852 = cljs.core.count(c__4609__auto___37849);
var G__37853 = (0);
seq__37495_37836 = G__37850;
chunk__37496_37837 = G__37851;
count__37497_37838 = G__37852;
i__37498_37839 = G__37853;
continue;
} else {
var vec__37508_37854 = cljs.core.first(seq__37495_37848__$1);
var k_37855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37508_37854,(0),null);
var v_37856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37508_37854,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_37855);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37855),v_37856);


var G__37857 = cljs.core.next(seq__37495_37848__$1);
var G__37858 = null;
var G__37859 = (0);
var G__37860 = (0);
seq__37495_37836 = G__37857;
chunk__37496_37837 = G__37858;
count__37497_37838 = G__37859;
i__37498_37839 = G__37860;
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
var vec__37512 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37512,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37512,(1),null);
var seq__37515_37861 = cljs.core.seq(node_children);
var chunk__37517_37862 = null;
var count__37518_37863 = (0);
var i__37519_37864 = (0);
while(true){
if((i__37519_37864 < count__37518_37863)){
var child_struct_37865 = chunk__37517_37862.cljs$core$IIndexed$_nth$arity$2(null,i__37519_37864);
if((!((child_struct_37865 == null)))){
if(typeof child_struct_37865 === 'string'){
var text_37866 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37866),child_struct_37865].join(''));
} else {
var children_37867 = shadow.dom.svg_node(child_struct_37865);
if(cljs.core.seq_QMARK_(children_37867)){
var seq__37533_37870 = cljs.core.seq(children_37867);
var chunk__37535_37871 = null;
var count__37536_37872 = (0);
var i__37537_37873 = (0);
while(true){
if((i__37537_37873 < count__37536_37872)){
var child_37874 = chunk__37535_37871.cljs$core$IIndexed$_nth$arity$2(null,i__37537_37873);
if(cljs.core.truth_(child_37874)){
node.appendChild(child_37874);


var G__37875 = seq__37533_37870;
var G__37876 = chunk__37535_37871;
var G__37877 = count__37536_37872;
var G__37878 = (i__37537_37873 + (1));
seq__37533_37870 = G__37875;
chunk__37535_37871 = G__37876;
count__37536_37872 = G__37877;
i__37537_37873 = G__37878;
continue;
} else {
var G__37879 = seq__37533_37870;
var G__37880 = chunk__37535_37871;
var G__37881 = count__37536_37872;
var G__37882 = (i__37537_37873 + (1));
seq__37533_37870 = G__37879;
chunk__37535_37871 = G__37880;
count__37536_37872 = G__37881;
i__37537_37873 = G__37882;
continue;
}
} else {
var temp__5735__auto___37883 = cljs.core.seq(seq__37533_37870);
if(temp__5735__auto___37883){
var seq__37533_37884__$1 = temp__5735__auto___37883;
if(cljs.core.chunked_seq_QMARK_(seq__37533_37884__$1)){
var c__4609__auto___37886 = cljs.core.chunk_first(seq__37533_37884__$1);
var G__37887 = cljs.core.chunk_rest(seq__37533_37884__$1);
var G__37888 = c__4609__auto___37886;
var G__37889 = cljs.core.count(c__4609__auto___37886);
var G__37890 = (0);
seq__37533_37870 = G__37887;
chunk__37535_37871 = G__37888;
count__37536_37872 = G__37889;
i__37537_37873 = G__37890;
continue;
} else {
var child_37891 = cljs.core.first(seq__37533_37884__$1);
if(cljs.core.truth_(child_37891)){
node.appendChild(child_37891);


var G__37892 = cljs.core.next(seq__37533_37884__$1);
var G__37893 = null;
var G__37894 = (0);
var G__37895 = (0);
seq__37533_37870 = G__37892;
chunk__37535_37871 = G__37893;
count__37536_37872 = G__37894;
i__37537_37873 = G__37895;
continue;
} else {
var G__37897 = cljs.core.next(seq__37533_37884__$1);
var G__37898 = null;
var G__37899 = (0);
var G__37900 = (0);
seq__37533_37870 = G__37897;
chunk__37535_37871 = G__37898;
count__37536_37872 = G__37899;
i__37537_37873 = G__37900;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37867);
}
}


var G__37901 = seq__37515_37861;
var G__37902 = chunk__37517_37862;
var G__37903 = count__37518_37863;
var G__37904 = (i__37519_37864 + (1));
seq__37515_37861 = G__37901;
chunk__37517_37862 = G__37902;
count__37518_37863 = G__37903;
i__37519_37864 = G__37904;
continue;
} else {
var G__37905 = seq__37515_37861;
var G__37906 = chunk__37517_37862;
var G__37907 = count__37518_37863;
var G__37908 = (i__37519_37864 + (1));
seq__37515_37861 = G__37905;
chunk__37517_37862 = G__37906;
count__37518_37863 = G__37907;
i__37519_37864 = G__37908;
continue;
}
} else {
var temp__5735__auto___37909 = cljs.core.seq(seq__37515_37861);
if(temp__5735__auto___37909){
var seq__37515_37910__$1 = temp__5735__auto___37909;
if(cljs.core.chunked_seq_QMARK_(seq__37515_37910__$1)){
var c__4609__auto___37911 = cljs.core.chunk_first(seq__37515_37910__$1);
var G__37912 = cljs.core.chunk_rest(seq__37515_37910__$1);
var G__37913 = c__4609__auto___37911;
var G__37914 = cljs.core.count(c__4609__auto___37911);
var G__37915 = (0);
seq__37515_37861 = G__37912;
chunk__37517_37862 = G__37913;
count__37518_37863 = G__37914;
i__37519_37864 = G__37915;
continue;
} else {
var child_struct_37916 = cljs.core.first(seq__37515_37910__$1);
if((!((child_struct_37916 == null)))){
if(typeof child_struct_37916 === 'string'){
var text_37917 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37917),child_struct_37916].join(''));
} else {
var children_37918 = shadow.dom.svg_node(child_struct_37916);
if(cljs.core.seq_QMARK_(children_37918)){
var seq__37539_37919 = cljs.core.seq(children_37918);
var chunk__37541_37920 = null;
var count__37542_37921 = (0);
var i__37543_37922 = (0);
while(true){
if((i__37543_37922 < count__37542_37921)){
var child_37923 = chunk__37541_37920.cljs$core$IIndexed$_nth$arity$2(null,i__37543_37922);
if(cljs.core.truth_(child_37923)){
node.appendChild(child_37923);


var G__37924 = seq__37539_37919;
var G__37925 = chunk__37541_37920;
var G__37926 = count__37542_37921;
var G__37927 = (i__37543_37922 + (1));
seq__37539_37919 = G__37924;
chunk__37541_37920 = G__37925;
count__37542_37921 = G__37926;
i__37543_37922 = G__37927;
continue;
} else {
var G__37928 = seq__37539_37919;
var G__37929 = chunk__37541_37920;
var G__37930 = count__37542_37921;
var G__37931 = (i__37543_37922 + (1));
seq__37539_37919 = G__37928;
chunk__37541_37920 = G__37929;
count__37542_37921 = G__37930;
i__37543_37922 = G__37931;
continue;
}
} else {
var temp__5735__auto___37932__$1 = cljs.core.seq(seq__37539_37919);
if(temp__5735__auto___37932__$1){
var seq__37539_37933__$1 = temp__5735__auto___37932__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37539_37933__$1)){
var c__4609__auto___37934 = cljs.core.chunk_first(seq__37539_37933__$1);
var G__37935 = cljs.core.chunk_rest(seq__37539_37933__$1);
var G__37936 = c__4609__auto___37934;
var G__37937 = cljs.core.count(c__4609__auto___37934);
var G__37938 = (0);
seq__37539_37919 = G__37935;
chunk__37541_37920 = G__37936;
count__37542_37921 = G__37937;
i__37543_37922 = G__37938;
continue;
} else {
var child_37939 = cljs.core.first(seq__37539_37933__$1);
if(cljs.core.truth_(child_37939)){
node.appendChild(child_37939);


var G__37940 = cljs.core.next(seq__37539_37933__$1);
var G__37941 = null;
var G__37942 = (0);
var G__37943 = (0);
seq__37539_37919 = G__37940;
chunk__37541_37920 = G__37941;
count__37542_37921 = G__37942;
i__37543_37922 = G__37943;
continue;
} else {
var G__37948 = cljs.core.next(seq__37539_37933__$1);
var G__37949 = null;
var G__37950 = (0);
var G__37951 = (0);
seq__37539_37919 = G__37948;
chunk__37541_37920 = G__37949;
count__37542_37921 = G__37950;
i__37543_37922 = G__37951;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37918);
}
}


var G__37952 = cljs.core.next(seq__37515_37910__$1);
var G__37953 = null;
var G__37954 = (0);
var G__37955 = (0);
seq__37515_37861 = G__37952;
chunk__37517_37862 = G__37953;
count__37518_37863 = G__37954;
i__37519_37864 = G__37955;
continue;
} else {
var G__37959 = cljs.core.next(seq__37515_37910__$1);
var G__37960 = null;
var G__37961 = (0);
var G__37962 = (0);
seq__37515_37861 = G__37959;
chunk__37517_37862 = G__37960;
count__37518_37863 = G__37961;
i__37519_37864 = G__37962;
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

var G__37545_37963 = shadow.dom._to_svg;
var G__37546_37964 = "string";
var G__37547_37965 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__37545_37963,G__37546_37964,G__37547_37965);

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

var G__37548_37966 = shadow.dom._to_svg;
var G__37549_37967 = "null";
var G__37550_37968 = (function (_){
return null;
});
goog.object.set(G__37548_37966,G__37549_37967,G__37550_37968);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37969 = arguments.length;
var i__4790__auto___37970 = (0);
while(true){
if((i__4790__auto___37970 < len__4789__auto___37969)){
args__4795__auto__.push((arguments[i__4790__auto___37970]));

var G__37971 = (i__4790__auto___37970 + (1));
i__4790__auto___37970 = G__37971;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37551){
var G__37552 = cljs.core.first(seq37551);
var seq37551__$1 = cljs.core.next(seq37551);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37552,seq37551__$1);
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
var G__37554 = arguments.length;
switch (G__37554) {
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
var G__37555_37979 = shadow.dom.dom_node(el);
var G__37556_37980 = cljs.core.name(event);
var G__37557_37981 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37555_37979,G__37556_37980,G__37557_37981) : shadow.dom.dom_listen.call(null,G__37555_37979,G__37556_37980,G__37557_37981));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__34784__auto___37982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_37562){
var state_val_37563 = (state_37562[(1)]);
if((state_val_37563 === (1))){
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37562__$1,(2),once_or_cleanup);
} else {
if((state_val_37563 === (2))){
var inst_37559 = (state_37562[(2)]);
var inst_37560 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37562__$1 = (function (){var statearr_37564 = state_37562;
(statearr_37564[(7)] = inst_37559);

return statearr_37564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37562__$1,inst_37560);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34463__auto__ = null;
var shadow$dom$state_machine__34463__auto____0 = (function (){
var statearr_37565 = [null,null,null,null,null,null,null,null];
(statearr_37565[(0)] = shadow$dom$state_machine__34463__auto__);

(statearr_37565[(1)] = (1));

return statearr_37565;
});
var shadow$dom$state_machine__34463__auto____1 = (function (state_37562){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_37562);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e37566){if((e37566 instanceof Object)){
var ex__34466__auto__ = e37566;
var statearr_37567_37986 = state_37562;
(statearr_37567_37986[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37987 = state_37562;
state_37562 = G__37987;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
shadow$dom$state_machine__34463__auto__ = function(state_37562){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34463__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34463__auto____1.call(this,state_37562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34463__auto____0;
shadow$dom$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34463__auto____1;
return shadow$dom$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_37568 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_37568[(6)] = c__34784__auto___37982);

return statearr_37568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
