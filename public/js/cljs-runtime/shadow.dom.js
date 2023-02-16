goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_52951 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_52951(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_52953 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_52953(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__51612 = coll;
var G__51613 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__51612,G__51613) : shadow.dom.lazy_native_coll_seq.call(null,G__51612,G__51613));
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
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
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
var G__51634 = arguments.length;
switch (G__51634) {
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
var G__51639 = arguments.length;
switch (G__51639) {
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
var G__51641 = arguments.length;
switch (G__51641) {
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
var G__51643 = arguments.length;
switch (G__51643) {
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
var G__51663 = arguments.length;
switch (G__51663) {
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
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__51668 = arguments.length;
switch (G__51668) {
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
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e51725){if((e51725 instanceof Object)){
var e = e51725;
return console.log("didnt support attachEvent",el,e);
} else {
throw e51725;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__51762 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__51763 = null;
var count__51764 = (0);
var i__51765 = (0);
while(true){
if((i__51765 < count__51764)){
var el = chunk__51763.cljs$core$IIndexed$_nth$arity$2(null,i__51765);
var handler_52963__$1 = ((function (seq__51762,chunk__51763,count__51764,i__51765,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51762,chunk__51763,count__51764,i__51765,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52963__$1);


var G__52964 = seq__51762;
var G__52965 = chunk__51763;
var G__52966 = count__51764;
var G__52967 = (i__51765 + (1));
seq__51762 = G__52964;
chunk__51763 = G__52965;
count__51764 = G__52966;
i__51765 = G__52967;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51762);
if(temp__5753__auto__){
var seq__51762__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51762__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51762__$1);
var G__52968 = cljs.core.chunk_rest(seq__51762__$1);
var G__52969 = c__4649__auto__;
var G__52970 = cljs.core.count(c__4649__auto__);
var G__52971 = (0);
seq__51762 = G__52968;
chunk__51763 = G__52969;
count__51764 = G__52970;
i__51765 = G__52971;
continue;
} else {
var el = cljs.core.first(seq__51762__$1);
var handler_52972__$1 = ((function (seq__51762,chunk__51763,count__51764,i__51765,el,seq__51762__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51762,chunk__51763,count__51764,i__51765,el,seq__51762__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52972__$1);


var G__52973 = cljs.core.next(seq__51762__$1);
var G__52974 = null;
var G__52975 = (0);
var G__52976 = (0);
seq__51762 = G__52973;
chunk__51763 = G__52974;
count__51764 = G__52975;
i__51765 = G__52976;
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
var G__51799 = arguments.length;
switch (G__51799) {
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
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__51804 = cljs.core.seq(events);
var chunk__51805 = null;
var count__51806 = (0);
var i__51807 = (0);
while(true){
if((i__51807 < count__51806)){
var vec__51821 = chunk__51805.cljs$core$IIndexed$_nth$arity$2(null,i__51807);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51821,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52978 = seq__51804;
var G__52979 = chunk__51805;
var G__52980 = count__51806;
var G__52981 = (i__51807 + (1));
seq__51804 = G__52978;
chunk__51805 = G__52979;
count__51806 = G__52980;
i__51807 = G__52981;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51804);
if(temp__5753__auto__){
var seq__51804__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51804__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51804__$1);
var G__52982 = cljs.core.chunk_rest(seq__51804__$1);
var G__52983 = c__4649__auto__;
var G__52984 = cljs.core.count(c__4649__auto__);
var G__52985 = (0);
seq__51804 = G__52982;
chunk__51805 = G__52983;
count__51806 = G__52984;
i__51807 = G__52985;
continue;
} else {
var vec__51842 = cljs.core.first(seq__51804__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51842,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52986 = cljs.core.next(seq__51804__$1);
var G__52987 = null;
var G__52988 = (0);
var G__52989 = (0);
seq__51804 = G__52986;
chunk__51805 = G__52987;
count__51806 = G__52988;
i__51807 = G__52989;
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
var seq__51849 = cljs.core.seq(styles);
var chunk__51850 = null;
var count__51851 = (0);
var i__51852 = (0);
while(true){
if((i__51852 < count__51851)){
var vec__51864 = chunk__51850.cljs$core$IIndexed$_nth$arity$2(null,i__51852);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51864,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51864,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52990 = seq__51849;
var G__52991 = chunk__51850;
var G__52992 = count__51851;
var G__52993 = (i__51852 + (1));
seq__51849 = G__52990;
chunk__51850 = G__52991;
count__51851 = G__52992;
i__51852 = G__52993;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51849);
if(temp__5753__auto__){
var seq__51849__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51849__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51849__$1);
var G__52994 = cljs.core.chunk_rest(seq__51849__$1);
var G__52995 = c__4649__auto__;
var G__52996 = cljs.core.count(c__4649__auto__);
var G__52997 = (0);
seq__51849 = G__52994;
chunk__51850 = G__52995;
count__51851 = G__52996;
i__51852 = G__52997;
continue;
} else {
var vec__51868 = cljs.core.first(seq__51849__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51868,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51868,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52998 = cljs.core.next(seq__51849__$1);
var G__52999 = null;
var G__53000 = (0);
var G__53001 = (0);
seq__51849 = G__52998;
chunk__51850 = G__52999;
count__51851 = G__53000;
i__51852 = G__53001;
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
var G__51875_53002 = key;
var G__51875_53003__$1 = (((G__51875_53002 instanceof cljs.core.Keyword))?G__51875_53002.fqn:null);
switch (G__51875_53003__$1) {
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
var ks_53005 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_53005,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_53005,"aria-");
}
})())){
el.setAttribute(ks_53005,value);
} else {
(el[ks_53005] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51938){
var map__51939 = p__51938;
var map__51939__$1 = cljs.core.__destructure_map(map__51939);
var props = map__51939__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51939__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51941 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51941,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51941,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51941,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51944 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51944,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51944;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51946 = arguments.length;
switch (G__51946) {
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51951){
var vec__51955 = p__51951;
var seq__51956 = cljs.core.seq(vec__51955);
var first__51957 = cljs.core.first(seq__51956);
var seq__51956__$1 = cljs.core.next(seq__51956);
var nn = first__51957;
var first__51957__$1 = cljs.core.first(seq__51956__$1);
var seq__51956__$2 = cljs.core.next(seq__51956__$1);
var np = first__51957__$1;
var nc = seq__51956__$2;
var node = vec__51955;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51959 = nn;
var G__51960 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51959,G__51960) : create_fn.call(null,G__51959,G__51960));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51963 = nn;
var G__51964 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51963,G__51964) : create_fn.call(null,G__51963,G__51964));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51966 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51966,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51966,(1),null);
var seq__52096_53016 = cljs.core.seq(node_children);
var chunk__52097_53017 = null;
var count__52098_53018 = (0);
var i__52099_53019 = (0);
while(true){
if((i__52099_53019 < count__52098_53018)){
var child_struct_53021 = chunk__52097_53017.cljs$core$IIndexed$_nth$arity$2(null,i__52099_53019);
var children_53022 = shadow.dom.dom_node(child_struct_53021);
if(cljs.core.seq_QMARK_(children_53022)){
var seq__52149_53023 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53022));
var chunk__52151_53024 = null;
var count__52152_53025 = (0);
var i__52153_53026 = (0);
while(true){
if((i__52153_53026 < count__52152_53025)){
var child_53027 = chunk__52151_53024.cljs$core$IIndexed$_nth$arity$2(null,i__52153_53026);
if(cljs.core.truth_(child_53027)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53027);


var G__53028 = seq__52149_53023;
var G__53029 = chunk__52151_53024;
var G__53030 = count__52152_53025;
var G__53031 = (i__52153_53026 + (1));
seq__52149_53023 = G__53028;
chunk__52151_53024 = G__53029;
count__52152_53025 = G__53030;
i__52153_53026 = G__53031;
continue;
} else {
var G__53032 = seq__52149_53023;
var G__53033 = chunk__52151_53024;
var G__53034 = count__52152_53025;
var G__53035 = (i__52153_53026 + (1));
seq__52149_53023 = G__53032;
chunk__52151_53024 = G__53033;
count__52152_53025 = G__53034;
i__52153_53026 = G__53035;
continue;
}
} else {
var temp__5753__auto___53036 = cljs.core.seq(seq__52149_53023);
if(temp__5753__auto___53036){
var seq__52149_53038__$1 = temp__5753__auto___53036;
if(cljs.core.chunked_seq_QMARK_(seq__52149_53038__$1)){
var c__4649__auto___53039 = cljs.core.chunk_first(seq__52149_53038__$1);
var G__53041 = cljs.core.chunk_rest(seq__52149_53038__$1);
var G__53042 = c__4649__auto___53039;
var G__53043 = cljs.core.count(c__4649__auto___53039);
var G__53044 = (0);
seq__52149_53023 = G__53041;
chunk__52151_53024 = G__53042;
count__52152_53025 = G__53043;
i__52153_53026 = G__53044;
continue;
} else {
var child_53045 = cljs.core.first(seq__52149_53038__$1);
if(cljs.core.truth_(child_53045)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53045);


var G__53046 = cljs.core.next(seq__52149_53038__$1);
var G__53047 = null;
var G__53048 = (0);
var G__53049 = (0);
seq__52149_53023 = G__53046;
chunk__52151_53024 = G__53047;
count__52152_53025 = G__53048;
i__52153_53026 = G__53049;
continue;
} else {
var G__53050 = cljs.core.next(seq__52149_53038__$1);
var G__53051 = null;
var G__53052 = (0);
var G__53053 = (0);
seq__52149_53023 = G__53050;
chunk__52151_53024 = G__53051;
count__52152_53025 = G__53052;
i__52153_53026 = G__53053;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53022);
}


var G__53055 = seq__52096_53016;
var G__53056 = chunk__52097_53017;
var G__53057 = count__52098_53018;
var G__53058 = (i__52099_53019 + (1));
seq__52096_53016 = G__53055;
chunk__52097_53017 = G__53056;
count__52098_53018 = G__53057;
i__52099_53019 = G__53058;
continue;
} else {
var temp__5753__auto___53059 = cljs.core.seq(seq__52096_53016);
if(temp__5753__auto___53059){
var seq__52096_53060__$1 = temp__5753__auto___53059;
if(cljs.core.chunked_seq_QMARK_(seq__52096_53060__$1)){
var c__4649__auto___53061 = cljs.core.chunk_first(seq__52096_53060__$1);
var G__53062 = cljs.core.chunk_rest(seq__52096_53060__$1);
var G__53063 = c__4649__auto___53061;
var G__53064 = cljs.core.count(c__4649__auto___53061);
var G__53065 = (0);
seq__52096_53016 = G__53062;
chunk__52097_53017 = G__53063;
count__52098_53018 = G__53064;
i__52099_53019 = G__53065;
continue;
} else {
var child_struct_53066 = cljs.core.first(seq__52096_53060__$1);
var children_53068 = shadow.dom.dom_node(child_struct_53066);
if(cljs.core.seq_QMARK_(children_53068)){
var seq__52157_53069 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53068));
var chunk__52159_53070 = null;
var count__52160_53071 = (0);
var i__52161_53072 = (0);
while(true){
if((i__52161_53072 < count__52160_53071)){
var child_53073 = chunk__52159_53070.cljs$core$IIndexed$_nth$arity$2(null,i__52161_53072);
if(cljs.core.truth_(child_53073)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53073);


var G__53074 = seq__52157_53069;
var G__53075 = chunk__52159_53070;
var G__53076 = count__52160_53071;
var G__53077 = (i__52161_53072 + (1));
seq__52157_53069 = G__53074;
chunk__52159_53070 = G__53075;
count__52160_53071 = G__53076;
i__52161_53072 = G__53077;
continue;
} else {
var G__53078 = seq__52157_53069;
var G__53079 = chunk__52159_53070;
var G__53080 = count__52160_53071;
var G__53081 = (i__52161_53072 + (1));
seq__52157_53069 = G__53078;
chunk__52159_53070 = G__53079;
count__52160_53071 = G__53080;
i__52161_53072 = G__53081;
continue;
}
} else {
var temp__5753__auto___53082__$1 = cljs.core.seq(seq__52157_53069);
if(temp__5753__auto___53082__$1){
var seq__52157_53083__$1 = temp__5753__auto___53082__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52157_53083__$1)){
var c__4649__auto___53084 = cljs.core.chunk_first(seq__52157_53083__$1);
var G__53085 = cljs.core.chunk_rest(seq__52157_53083__$1);
var G__53086 = c__4649__auto___53084;
var G__53087 = cljs.core.count(c__4649__auto___53084);
var G__53088 = (0);
seq__52157_53069 = G__53085;
chunk__52159_53070 = G__53086;
count__52160_53071 = G__53087;
i__52161_53072 = G__53088;
continue;
} else {
var child_53090 = cljs.core.first(seq__52157_53083__$1);
if(cljs.core.truth_(child_53090)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53090);


var G__53091 = cljs.core.next(seq__52157_53083__$1);
var G__53092 = null;
var G__53093 = (0);
var G__53094 = (0);
seq__52157_53069 = G__53091;
chunk__52159_53070 = G__53092;
count__52160_53071 = G__53093;
i__52161_53072 = G__53094;
continue;
} else {
var G__53095 = cljs.core.next(seq__52157_53083__$1);
var G__53096 = null;
var G__53097 = (0);
var G__53098 = (0);
seq__52157_53069 = G__53095;
chunk__52159_53070 = G__53096;
count__52160_53071 = G__53097;
i__52161_53072 = G__53098;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53068);
}


var G__53099 = cljs.core.next(seq__52096_53060__$1);
var G__53100 = null;
var G__53101 = (0);
var G__53102 = (0);
seq__52096_53016 = G__53099;
chunk__52097_53017 = G__53100;
count__52098_53018 = G__53101;
i__52099_53019 = G__53102;
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
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__52393 = cljs.core.seq(node);
var chunk__52394 = null;
var count__52395 = (0);
var i__52396 = (0);
while(true){
if((i__52396 < count__52395)){
var n = chunk__52394.cljs$core$IIndexed$_nth$arity$2(null,i__52396);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53105 = seq__52393;
var G__53106 = chunk__52394;
var G__53107 = count__52395;
var G__53108 = (i__52396 + (1));
seq__52393 = G__53105;
chunk__52394 = G__53106;
count__52395 = G__53107;
i__52396 = G__53108;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52393);
if(temp__5753__auto__){
var seq__52393__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52393__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52393__$1);
var G__53110 = cljs.core.chunk_rest(seq__52393__$1);
var G__53111 = c__4649__auto__;
var G__53112 = cljs.core.count(c__4649__auto__);
var G__53113 = (0);
seq__52393 = G__53110;
chunk__52394 = G__53111;
count__52395 = G__53112;
i__52396 = G__53113;
continue;
} else {
var n = cljs.core.first(seq__52393__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53116 = cljs.core.next(seq__52393__$1);
var G__53117 = null;
var G__53118 = (0);
var G__53119 = (0);
seq__52393 = G__53116;
chunk__52394 = G__53117;
count__52395 = G__53118;
i__52396 = G__53119;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__52399 = arguments.length;
switch (G__52399) {
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
var G__52410 = arguments.length;
switch (G__52410) {
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
var G__52415 = arguments.length;
switch (G__52415) {
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
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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
var args__4835__auto__ = [];
var len__4829__auto___53144 = arguments.length;
var i__4830__auto___53145 = (0);
while(true){
if((i__4830__auto___53145 < len__4829__auto___53144)){
args__4835__auto__.push((arguments[i__4830__auto___53145]));

var G__53146 = (i__4830__auto___53145 + (1));
i__4830__auto___53145 = G__53146;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__52430_53147 = cljs.core.seq(nodes);
var chunk__52431_53148 = null;
var count__52432_53149 = (0);
var i__52433_53150 = (0);
while(true){
if((i__52433_53150 < count__52432_53149)){
var node_53151 = chunk__52431_53148.cljs$core$IIndexed$_nth$arity$2(null,i__52433_53150);
fragment.appendChild(shadow.dom._to_dom(node_53151));


var G__53152 = seq__52430_53147;
var G__53153 = chunk__52431_53148;
var G__53154 = count__52432_53149;
var G__53155 = (i__52433_53150 + (1));
seq__52430_53147 = G__53152;
chunk__52431_53148 = G__53153;
count__52432_53149 = G__53154;
i__52433_53150 = G__53155;
continue;
} else {
var temp__5753__auto___53156 = cljs.core.seq(seq__52430_53147);
if(temp__5753__auto___53156){
var seq__52430_53157__$1 = temp__5753__auto___53156;
if(cljs.core.chunked_seq_QMARK_(seq__52430_53157__$1)){
var c__4649__auto___53158 = cljs.core.chunk_first(seq__52430_53157__$1);
var G__53159 = cljs.core.chunk_rest(seq__52430_53157__$1);
var G__53160 = c__4649__auto___53158;
var G__53161 = cljs.core.count(c__4649__auto___53158);
var G__53162 = (0);
seq__52430_53147 = G__53159;
chunk__52431_53148 = G__53160;
count__52432_53149 = G__53161;
i__52433_53150 = G__53162;
continue;
} else {
var node_53163 = cljs.core.first(seq__52430_53157__$1);
fragment.appendChild(shadow.dom._to_dom(node_53163));


var G__53164 = cljs.core.next(seq__52430_53157__$1);
var G__53165 = null;
var G__53166 = (0);
var G__53167 = (0);
seq__52430_53147 = G__53164;
chunk__52431_53148 = G__53165;
count__52432_53149 = G__53166;
i__52433_53150 = G__53167;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq52429){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52429));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__52516_53168 = cljs.core.seq(scripts);
var chunk__52517_53169 = null;
var count__52518_53170 = (0);
var i__52519_53171 = (0);
while(true){
if((i__52519_53171 < count__52518_53170)){
var vec__52530_53172 = chunk__52517_53169.cljs$core$IIndexed$_nth$arity$2(null,i__52519_53171);
var script_tag_53173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52530_53172,(0),null);
var script_body_53174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52530_53172,(1),null);
eval(script_body_53174);


var G__53175 = seq__52516_53168;
var G__53176 = chunk__52517_53169;
var G__53177 = count__52518_53170;
var G__53178 = (i__52519_53171 + (1));
seq__52516_53168 = G__53175;
chunk__52517_53169 = G__53176;
count__52518_53170 = G__53177;
i__52519_53171 = G__53178;
continue;
} else {
var temp__5753__auto___53179 = cljs.core.seq(seq__52516_53168);
if(temp__5753__auto___53179){
var seq__52516_53180__$1 = temp__5753__auto___53179;
if(cljs.core.chunked_seq_QMARK_(seq__52516_53180__$1)){
var c__4649__auto___53181 = cljs.core.chunk_first(seq__52516_53180__$1);
var G__53182 = cljs.core.chunk_rest(seq__52516_53180__$1);
var G__53183 = c__4649__auto___53181;
var G__53184 = cljs.core.count(c__4649__auto___53181);
var G__53185 = (0);
seq__52516_53168 = G__53182;
chunk__52517_53169 = G__53183;
count__52518_53170 = G__53184;
i__52519_53171 = G__53185;
continue;
} else {
var vec__52535_53186 = cljs.core.first(seq__52516_53180__$1);
var script_tag_53187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52535_53186,(0),null);
var script_body_53188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52535_53186,(1),null);
eval(script_body_53188);


var G__53189 = cljs.core.next(seq__52516_53180__$1);
var G__53190 = null;
var G__53191 = (0);
var G__53192 = (0);
seq__52516_53168 = G__53189;
chunk__52517_53169 = G__53190;
count__52518_53170 = G__53191;
i__52519_53171 = G__53192;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__52538){
var vec__52539 = p__52538;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52539,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52539,(1),null);
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
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__52550 = arguments.length;
switch (G__52550) {
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
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__52554 = cljs.core.seq(style_keys);
var chunk__52555 = null;
var count__52556 = (0);
var i__52557 = (0);
while(true){
if((i__52557 < count__52556)){
var it = chunk__52555.cljs$core$IIndexed$_nth$arity$2(null,i__52557);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53194 = seq__52554;
var G__53195 = chunk__52555;
var G__53196 = count__52556;
var G__53197 = (i__52557 + (1));
seq__52554 = G__53194;
chunk__52555 = G__53195;
count__52556 = G__53196;
i__52557 = G__53197;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52554);
if(temp__5753__auto__){
var seq__52554__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52554__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52554__$1);
var G__53198 = cljs.core.chunk_rest(seq__52554__$1);
var G__53199 = c__4649__auto__;
var G__53200 = cljs.core.count(c__4649__auto__);
var G__53201 = (0);
seq__52554 = G__53198;
chunk__52555 = G__53199;
count__52556 = G__53200;
i__52557 = G__53201;
continue;
} else {
var it = cljs.core.first(seq__52554__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53202 = cljs.core.next(seq__52554__$1);
var G__53203 = null;
var G__53204 = (0);
var G__53205 = (0);
seq__52554 = G__53202;
chunk__52555 = G__53203;
count__52556 = G__53204;
i__52557 = G__53205;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52679,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52691 = k52679;
var G__52691__$1 = (((G__52691 instanceof cljs.core.Keyword))?G__52691.fqn:null);
switch (G__52691__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52679,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52697){
var vec__52714 = p__52697;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52714,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52714,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52678){
var self__ = this;
var G__52678__$1 = this;
return (new cljs.core.RecordIter((0),G__52678__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52680,other52681){
var self__ = this;
var this52680__$1 = this;
return (((!((other52681 == null)))) && ((((this52680__$1.constructor === other52681.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52680__$1.x,other52681.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52680__$1.y,other52681.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52680__$1.__extmap,other52681.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52679){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52717 = k52679;
var G__52717__$1 = (((G__52717 instanceof cljs.core.Keyword))?G__52717.fqn:null);
switch (G__52717__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52679);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52678){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52718 = cljs.core.keyword_identical_QMARK_;
var expr__52719 = k__4481__auto__;
if(cljs.core.truth_((pred__52718.cljs$core$IFn$_invoke$arity$2 ? pred__52718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__52719) : pred__52718.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__52719)))){
return (new shadow.dom.Coordinate(G__52678,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52718.cljs$core$IFn$_invoke$arity$2 ? pred__52718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__52719) : pred__52718.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__52719)))){
return (new shadow.dom.Coordinate(self__.x,G__52678,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52678),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52678){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__52678,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__52686){
var extmap__4512__auto__ = (function (){var G__52723 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52686,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__52686)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52723);
} else {
return G__52723;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__52686),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__52686),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k52728,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__52732 = k52728;
var G__52732__$1 = (((G__52732 instanceof cljs.core.Keyword))?G__52732.fqn:null);
switch (G__52732__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52728,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__52733){
var vec__52734 = p__52733;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52734,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52734,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52727){
var self__ = this;
var G__52727__$1 = this;
return (new cljs.core.RecordIter((0),G__52727__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52729,other52730){
var self__ = this;
var this52729__$1 = this;
return (((!((other52730 == null)))) && ((((this52729__$1.constructor === other52730.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52729__$1.w,other52730.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52729__$1.h,other52730.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52729__$1.__extmap,other52730.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k52728){
var self__ = this;
var this__4479__auto____$1 = this;
var G__52737 = k52728;
var G__52737__$1 = (((G__52737 instanceof cljs.core.Keyword))?G__52737.fqn:null);
switch (G__52737__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52728);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__52727){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__52738 = cljs.core.keyword_identical_QMARK_;
var expr__52739 = k__4481__auto__;
if(cljs.core.truth_((pred__52738.cljs$core$IFn$_invoke$arity$2 ? pred__52738.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__52739) : pred__52738.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__52739)))){
return (new shadow.dom.Size(G__52727,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52738.cljs$core$IFn$_invoke$arity$2 ? pred__52738.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__52739) : pred__52738.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__52739)))){
return (new shadow.dom.Size(self__.w,G__52727,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__52727),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__52727){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__52727,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__52731){
var extmap__4512__auto__ = (function (){var G__52741 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52731,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__52731)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52741);
} else {
return G__52741;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__52731),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__52731),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
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
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__53241 = (i + (1));
var G__53242 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__53241;
ret = G__53242;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52809){
var vec__52810 = p__52809;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52810,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52810,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__52817 = arguments.length;
switch (G__52817) {
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
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
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
var G__53258 = ps;
var G__53259 = (i + (1));
el__$1 = G__53258;
i = G__53259;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
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
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__52821 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52821,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52821,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52821,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__52831_53267 = cljs.core.seq(props);
var chunk__52832_53268 = null;
var count__52833_53269 = (0);
var i__52834_53270 = (0);
while(true){
if((i__52834_53270 < count__52833_53269)){
var vec__52845_53271 = chunk__52832_53268.cljs$core$IIndexed$_nth$arity$2(null,i__52834_53270);
var k_53272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52845_53271,(0),null);
var v_53273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52845_53271,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_53272);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53272),v_53273);


var G__53275 = seq__52831_53267;
var G__53276 = chunk__52832_53268;
var G__53277 = count__52833_53269;
var G__53278 = (i__52834_53270 + (1));
seq__52831_53267 = G__53275;
chunk__52832_53268 = G__53276;
count__52833_53269 = G__53277;
i__52834_53270 = G__53278;
continue;
} else {
var temp__5753__auto___53279 = cljs.core.seq(seq__52831_53267);
if(temp__5753__auto___53279){
var seq__52831_53280__$1 = temp__5753__auto___53279;
if(cljs.core.chunked_seq_QMARK_(seq__52831_53280__$1)){
var c__4649__auto___53281 = cljs.core.chunk_first(seq__52831_53280__$1);
var G__53282 = cljs.core.chunk_rest(seq__52831_53280__$1);
var G__53283 = c__4649__auto___53281;
var G__53284 = cljs.core.count(c__4649__auto___53281);
var G__53285 = (0);
seq__52831_53267 = G__53282;
chunk__52832_53268 = G__53283;
count__52833_53269 = G__53284;
i__52834_53270 = G__53285;
continue;
} else {
var vec__52852_53286 = cljs.core.first(seq__52831_53280__$1);
var k_53287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52852_53286,(0),null);
var v_53288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52852_53286,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_53287);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53287),v_53288);


var G__53289 = cljs.core.next(seq__52831_53280__$1);
var G__53290 = null;
var G__53291 = (0);
var G__53292 = (0);
seq__52831_53267 = G__53289;
chunk__52832_53268 = G__53290;
count__52833_53269 = G__53291;
i__52834_53270 = G__53292;
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
var vec__52861 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52861,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52861,(1),null);
var seq__52864_53297 = cljs.core.seq(node_children);
var chunk__52866_53298 = null;
var count__52867_53299 = (0);
var i__52868_53300 = (0);
while(true){
if((i__52868_53300 < count__52867_53299)){
var child_struct_53301 = chunk__52866_53298.cljs$core$IIndexed$_nth$arity$2(null,i__52868_53300);
if((!((child_struct_53301 == null)))){
if(typeof child_struct_53301 === 'string'){
var text_53302 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53302),child_struct_53301].join(''));
} else {
var children_53303 = shadow.dom.svg_node(child_struct_53301);
if(cljs.core.seq_QMARK_(children_53303)){
var seq__52891_53304 = cljs.core.seq(children_53303);
var chunk__52893_53305 = null;
var count__52894_53306 = (0);
var i__52895_53307 = (0);
while(true){
if((i__52895_53307 < count__52894_53306)){
var child_53309 = chunk__52893_53305.cljs$core$IIndexed$_nth$arity$2(null,i__52895_53307);
if(cljs.core.truth_(child_53309)){
node.appendChild(child_53309);


var G__53310 = seq__52891_53304;
var G__53311 = chunk__52893_53305;
var G__53312 = count__52894_53306;
var G__53313 = (i__52895_53307 + (1));
seq__52891_53304 = G__53310;
chunk__52893_53305 = G__53311;
count__52894_53306 = G__53312;
i__52895_53307 = G__53313;
continue;
} else {
var G__53314 = seq__52891_53304;
var G__53315 = chunk__52893_53305;
var G__53316 = count__52894_53306;
var G__53317 = (i__52895_53307 + (1));
seq__52891_53304 = G__53314;
chunk__52893_53305 = G__53315;
count__52894_53306 = G__53316;
i__52895_53307 = G__53317;
continue;
}
} else {
var temp__5753__auto___53318 = cljs.core.seq(seq__52891_53304);
if(temp__5753__auto___53318){
var seq__52891_53319__$1 = temp__5753__auto___53318;
if(cljs.core.chunked_seq_QMARK_(seq__52891_53319__$1)){
var c__4649__auto___53320 = cljs.core.chunk_first(seq__52891_53319__$1);
var G__53321 = cljs.core.chunk_rest(seq__52891_53319__$1);
var G__53322 = c__4649__auto___53320;
var G__53323 = cljs.core.count(c__4649__auto___53320);
var G__53324 = (0);
seq__52891_53304 = G__53321;
chunk__52893_53305 = G__53322;
count__52894_53306 = G__53323;
i__52895_53307 = G__53324;
continue;
} else {
var child_53325 = cljs.core.first(seq__52891_53319__$1);
if(cljs.core.truth_(child_53325)){
node.appendChild(child_53325);


var G__53326 = cljs.core.next(seq__52891_53319__$1);
var G__53327 = null;
var G__53328 = (0);
var G__53329 = (0);
seq__52891_53304 = G__53326;
chunk__52893_53305 = G__53327;
count__52894_53306 = G__53328;
i__52895_53307 = G__53329;
continue;
} else {
var G__53330 = cljs.core.next(seq__52891_53319__$1);
var G__53331 = null;
var G__53332 = (0);
var G__53333 = (0);
seq__52891_53304 = G__53330;
chunk__52893_53305 = G__53331;
count__52894_53306 = G__53332;
i__52895_53307 = G__53333;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53303);
}
}


var G__53338 = seq__52864_53297;
var G__53339 = chunk__52866_53298;
var G__53340 = count__52867_53299;
var G__53341 = (i__52868_53300 + (1));
seq__52864_53297 = G__53338;
chunk__52866_53298 = G__53339;
count__52867_53299 = G__53340;
i__52868_53300 = G__53341;
continue;
} else {
var G__53342 = seq__52864_53297;
var G__53343 = chunk__52866_53298;
var G__53344 = count__52867_53299;
var G__53345 = (i__52868_53300 + (1));
seq__52864_53297 = G__53342;
chunk__52866_53298 = G__53343;
count__52867_53299 = G__53344;
i__52868_53300 = G__53345;
continue;
}
} else {
var temp__5753__auto___53346 = cljs.core.seq(seq__52864_53297);
if(temp__5753__auto___53346){
var seq__52864_53347__$1 = temp__5753__auto___53346;
if(cljs.core.chunked_seq_QMARK_(seq__52864_53347__$1)){
var c__4649__auto___53348 = cljs.core.chunk_first(seq__52864_53347__$1);
var G__53349 = cljs.core.chunk_rest(seq__52864_53347__$1);
var G__53350 = c__4649__auto___53348;
var G__53351 = cljs.core.count(c__4649__auto___53348);
var G__53352 = (0);
seq__52864_53297 = G__53349;
chunk__52866_53298 = G__53350;
count__52867_53299 = G__53351;
i__52868_53300 = G__53352;
continue;
} else {
var child_struct_53353 = cljs.core.first(seq__52864_53347__$1);
if((!((child_struct_53353 == null)))){
if(typeof child_struct_53353 === 'string'){
var text_53354 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53354),child_struct_53353].join(''));
} else {
var children_53355 = shadow.dom.svg_node(child_struct_53353);
if(cljs.core.seq_QMARK_(children_53355)){
var seq__52904_53357 = cljs.core.seq(children_53355);
var chunk__52906_53358 = null;
var count__52907_53359 = (0);
var i__52908_53360 = (0);
while(true){
if((i__52908_53360 < count__52907_53359)){
var child_53361 = chunk__52906_53358.cljs$core$IIndexed$_nth$arity$2(null,i__52908_53360);
if(cljs.core.truth_(child_53361)){
node.appendChild(child_53361);


var G__53362 = seq__52904_53357;
var G__53363 = chunk__52906_53358;
var G__53364 = count__52907_53359;
var G__53365 = (i__52908_53360 + (1));
seq__52904_53357 = G__53362;
chunk__52906_53358 = G__53363;
count__52907_53359 = G__53364;
i__52908_53360 = G__53365;
continue;
} else {
var G__53366 = seq__52904_53357;
var G__53367 = chunk__52906_53358;
var G__53368 = count__52907_53359;
var G__53369 = (i__52908_53360 + (1));
seq__52904_53357 = G__53366;
chunk__52906_53358 = G__53367;
count__52907_53359 = G__53368;
i__52908_53360 = G__53369;
continue;
}
} else {
var temp__5753__auto___53370__$1 = cljs.core.seq(seq__52904_53357);
if(temp__5753__auto___53370__$1){
var seq__52904_53371__$1 = temp__5753__auto___53370__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52904_53371__$1)){
var c__4649__auto___53372 = cljs.core.chunk_first(seq__52904_53371__$1);
var G__53374 = cljs.core.chunk_rest(seq__52904_53371__$1);
var G__53375 = c__4649__auto___53372;
var G__53376 = cljs.core.count(c__4649__auto___53372);
var G__53377 = (0);
seq__52904_53357 = G__53374;
chunk__52906_53358 = G__53375;
count__52907_53359 = G__53376;
i__52908_53360 = G__53377;
continue;
} else {
var child_53379 = cljs.core.first(seq__52904_53371__$1);
if(cljs.core.truth_(child_53379)){
node.appendChild(child_53379);


var G__53380 = cljs.core.next(seq__52904_53371__$1);
var G__53381 = null;
var G__53382 = (0);
var G__53383 = (0);
seq__52904_53357 = G__53380;
chunk__52906_53358 = G__53381;
count__52907_53359 = G__53382;
i__52908_53360 = G__53383;
continue;
} else {
var G__53384 = cljs.core.next(seq__52904_53371__$1);
var G__53385 = null;
var G__53386 = (0);
var G__53387 = (0);
seq__52904_53357 = G__53384;
chunk__52906_53358 = G__53385;
count__52907_53359 = G__53386;
i__52908_53360 = G__53387;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53355);
}
}


var G__53388 = cljs.core.next(seq__52864_53347__$1);
var G__53389 = null;
var G__53390 = (0);
var G__53391 = (0);
seq__52864_53297 = G__53388;
chunk__52866_53298 = G__53389;
count__52867_53299 = G__53390;
i__52868_53300 = G__53391;
continue;
} else {
var G__53394 = cljs.core.next(seq__52864_53347__$1);
var G__53395 = null;
var G__53396 = (0);
var G__53397 = (0);
seq__52864_53297 = G__53394;
chunk__52866_53298 = G__53395;
count__52867_53299 = G__53396;
i__52868_53300 = G__53397;
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

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

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

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53400 = arguments.length;
var i__4830__auto___53401 = (0);
while(true){
if((i__4830__auto___53401 < len__4829__auto___53400)){
args__4835__auto__.push((arguments[i__4830__auto___53401]));

var G__53402 = (i__4830__auto___53401 + (1));
i__4830__auto___53401 = G__53402;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq52915){
var G__52916 = cljs.core.first(seq52915);
var seq52915__$1 = cljs.core.next(seq52915);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52916,seq52915__$1);
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
var G__52919 = arguments.length;
switch (G__52919) {
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
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__49039__auto___53408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_52927){
var state_val_52928 = (state_52927[(1)]);
if((state_val_52928 === (1))){
var state_52927__$1 = state_52927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52927__$1,(2),once_or_cleanup);
} else {
if((state_val_52928 === (2))){
var inst_52924 = (state_52927[(2)]);
var inst_52925 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_52927__$1 = (function (){var statearr_52929 = state_52927;
(statearr_52929[(7)] = inst_52924);

return statearr_52929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52927__$1,inst_52925);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48932__auto__ = null;
var shadow$dom$state_machine__48932__auto____0 = (function (){
var statearr_52930 = [null,null,null,null,null,null,null,null];
(statearr_52930[(0)] = shadow$dom$state_machine__48932__auto__);

(statearr_52930[(1)] = (1));

return statearr_52930;
});
var shadow$dom$state_machine__48932__auto____1 = (function (state_52927){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_52927);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e52931){var ex__48935__auto__ = e52931;
var statearr_52932_53422 = state_52927;
(statearr_52932_53422[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_52927[(4)]))){
var statearr_52933_53423 = state_52927;
(statearr_52933_53423[(1)] = cljs.core.first((state_52927[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53424 = state_52927;
state_52927 = G__53424;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
shadow$dom$state_machine__48932__auto__ = function(state_52927){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48932__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48932__auto____1.call(this,state_52927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48932__auto____0;
shadow$dom$state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48932__auto____1;
return shadow$dom$state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_52936 = f__49040__auto__();
(statearr_52936[(6)] = c__49039__auto___53408);

return statearr_52936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
