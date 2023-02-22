goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51735 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_51735(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51736 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_51736(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50786 = coll;
var G__50787 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50786,G__50787) : shadow.dom.lazy_native_coll_seq.call(null,G__50786,G__50787));
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
var G__50799 = arguments.length;
switch (G__50799) {
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
var G__50830 = arguments.length;
switch (G__50830) {
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
var G__50837 = arguments.length;
switch (G__50837) {
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
var G__50842 = arguments.length;
switch (G__50842) {
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
var G__50906 = arguments.length;
switch (G__50906) {
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
var G__50934 = arguments.length;
switch (G__50934) {
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
}catch (e50949){if((e50949 instanceof Object)){
var e = e50949;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50949;

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
var seq__50992 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50993 = null;
var count__50994 = (0);
var i__50995 = (0);
while(true){
if((i__50995 < count__50994)){
var el = chunk__50993.cljs$core$IIndexed$_nth$arity$2(null,i__50995);
var handler_51745__$1 = ((function (seq__50992,chunk__50993,count__50994,i__50995,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50992,chunk__50993,count__50994,i__50995,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51745__$1);


var G__51746 = seq__50992;
var G__51747 = chunk__50993;
var G__51748 = count__50994;
var G__51749 = (i__50995 + (1));
seq__50992 = G__51746;
chunk__50993 = G__51747;
count__50994 = G__51748;
i__50995 = G__51749;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50992);
if(temp__5753__auto__){
var seq__50992__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50992__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50992__$1);
var G__51750 = cljs.core.chunk_rest(seq__50992__$1);
var G__51751 = c__4649__auto__;
var G__51752 = cljs.core.count(c__4649__auto__);
var G__51753 = (0);
seq__50992 = G__51750;
chunk__50993 = G__51751;
count__50994 = G__51752;
i__50995 = G__51753;
continue;
} else {
var el = cljs.core.first(seq__50992__$1);
var handler_51754__$1 = ((function (seq__50992,chunk__50993,count__50994,i__50995,el,seq__50992__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50992,chunk__50993,count__50994,i__50995,el,seq__50992__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51754__$1);


var G__51755 = cljs.core.next(seq__50992__$1);
var G__51756 = null;
var G__51757 = (0);
var G__51758 = (0);
seq__50992 = G__51755;
chunk__50993 = G__51756;
count__50994 = G__51757;
i__50995 = G__51758;
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
var G__51024 = arguments.length;
switch (G__51024) {
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
var seq__51038 = cljs.core.seq(events);
var chunk__51039 = null;
var count__51040 = (0);
var i__51041 = (0);
while(true){
if((i__51041 < count__51040)){
var vec__51048 = chunk__51039.cljs$core$IIndexed$_nth$arity$2(null,i__51041);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51048,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51048,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51760 = seq__51038;
var G__51761 = chunk__51039;
var G__51762 = count__51040;
var G__51763 = (i__51041 + (1));
seq__51038 = G__51760;
chunk__51039 = G__51761;
count__51040 = G__51762;
i__51041 = G__51763;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51038);
if(temp__5753__auto__){
var seq__51038__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51038__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51038__$1);
var G__51764 = cljs.core.chunk_rest(seq__51038__$1);
var G__51765 = c__4649__auto__;
var G__51766 = cljs.core.count(c__4649__auto__);
var G__51767 = (0);
seq__51038 = G__51764;
chunk__51039 = G__51765;
count__51040 = G__51766;
i__51041 = G__51767;
continue;
} else {
var vec__51051 = cljs.core.first(seq__51038__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51051,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51051,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51768 = cljs.core.next(seq__51038__$1);
var G__51769 = null;
var G__51770 = (0);
var G__51771 = (0);
seq__51038 = G__51768;
chunk__51039 = G__51769;
count__51040 = G__51770;
i__51041 = G__51771;
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
var seq__51057 = cljs.core.seq(styles);
var chunk__51058 = null;
var count__51059 = (0);
var i__51060 = (0);
while(true){
if((i__51060 < count__51059)){
var vec__51080 = chunk__51058.cljs$core$IIndexed$_nth$arity$2(null,i__51060);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51080,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51772 = seq__51057;
var G__51773 = chunk__51058;
var G__51774 = count__51059;
var G__51775 = (i__51060 + (1));
seq__51057 = G__51772;
chunk__51058 = G__51773;
count__51059 = G__51774;
i__51060 = G__51775;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51057);
if(temp__5753__auto__){
var seq__51057__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51057__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51057__$1);
var G__51776 = cljs.core.chunk_rest(seq__51057__$1);
var G__51777 = c__4649__auto__;
var G__51778 = cljs.core.count(c__4649__auto__);
var G__51779 = (0);
seq__51057 = G__51776;
chunk__51058 = G__51777;
count__51059 = G__51778;
i__51060 = G__51779;
continue;
} else {
var vec__51087 = cljs.core.first(seq__51057__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51087,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51087,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51780 = cljs.core.next(seq__51057__$1);
var G__51781 = null;
var G__51782 = (0);
var G__51783 = (0);
seq__51057 = G__51780;
chunk__51058 = G__51781;
count__51059 = G__51782;
i__51060 = G__51783;
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
var G__51186_51784 = key;
var G__51186_51785__$1 = (((G__51186_51784 instanceof cljs.core.Keyword))?G__51186_51784.fqn:null);
switch (G__51186_51785__$1) {
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
var ks_51787 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_51787,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_51787,"aria-");
}
})())){
el.setAttribute(ks_51787,value);
} else {
(el[ks_51787] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51229){
var map__51230 = p__51229;
var map__51230__$1 = cljs.core.__destructure_map(map__51230);
var props = map__51230__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51230__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51231 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51231,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51231,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51231,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51234 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51234,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51234;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51303 = arguments.length;
switch (G__51303) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51304){
var vec__51305 = p__51304;
var seq__51306 = cljs.core.seq(vec__51305);
var first__51307 = cljs.core.first(seq__51306);
var seq__51306__$1 = cljs.core.next(seq__51306);
var nn = first__51307;
var first__51307__$1 = cljs.core.first(seq__51306__$1);
var seq__51306__$2 = cljs.core.next(seq__51306__$1);
var np = first__51307__$1;
var nc = seq__51306__$2;
var node = vec__51305;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51308 = nn;
var G__51309 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51308,G__51309) : create_fn.call(null,G__51308,G__51309));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51310 = nn;
var G__51311 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51310,G__51311) : create_fn.call(null,G__51310,G__51311));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51312 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51312,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51312,(1),null);
var seq__51315_51790 = cljs.core.seq(node_children);
var chunk__51316_51791 = null;
var count__51317_51792 = (0);
var i__51318_51793 = (0);
while(true){
if((i__51318_51793 < count__51317_51792)){
var child_struct_51794 = chunk__51316_51791.cljs$core$IIndexed$_nth$arity$2(null,i__51318_51793);
var children_51795 = shadow.dom.dom_node(child_struct_51794);
if(cljs.core.seq_QMARK_(children_51795)){
var seq__51372_51796 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51795));
var chunk__51374_51797 = null;
var count__51375_51798 = (0);
var i__51376_51799 = (0);
while(true){
if((i__51376_51799 < count__51375_51798)){
var child_51800 = chunk__51374_51797.cljs$core$IIndexed$_nth$arity$2(null,i__51376_51799);
if(cljs.core.truth_(child_51800)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51800);


var G__51801 = seq__51372_51796;
var G__51802 = chunk__51374_51797;
var G__51803 = count__51375_51798;
var G__51804 = (i__51376_51799 + (1));
seq__51372_51796 = G__51801;
chunk__51374_51797 = G__51802;
count__51375_51798 = G__51803;
i__51376_51799 = G__51804;
continue;
} else {
var G__51805 = seq__51372_51796;
var G__51806 = chunk__51374_51797;
var G__51807 = count__51375_51798;
var G__51808 = (i__51376_51799 + (1));
seq__51372_51796 = G__51805;
chunk__51374_51797 = G__51806;
count__51375_51798 = G__51807;
i__51376_51799 = G__51808;
continue;
}
} else {
var temp__5753__auto___51809 = cljs.core.seq(seq__51372_51796);
if(temp__5753__auto___51809){
var seq__51372_51810__$1 = temp__5753__auto___51809;
if(cljs.core.chunked_seq_QMARK_(seq__51372_51810__$1)){
var c__4649__auto___51811 = cljs.core.chunk_first(seq__51372_51810__$1);
var G__51812 = cljs.core.chunk_rest(seq__51372_51810__$1);
var G__51813 = c__4649__auto___51811;
var G__51814 = cljs.core.count(c__4649__auto___51811);
var G__51815 = (0);
seq__51372_51796 = G__51812;
chunk__51374_51797 = G__51813;
count__51375_51798 = G__51814;
i__51376_51799 = G__51815;
continue;
} else {
var child_51816 = cljs.core.first(seq__51372_51810__$1);
if(cljs.core.truth_(child_51816)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51816);


var G__51817 = cljs.core.next(seq__51372_51810__$1);
var G__51818 = null;
var G__51819 = (0);
var G__51820 = (0);
seq__51372_51796 = G__51817;
chunk__51374_51797 = G__51818;
count__51375_51798 = G__51819;
i__51376_51799 = G__51820;
continue;
} else {
var G__51821 = cljs.core.next(seq__51372_51810__$1);
var G__51822 = null;
var G__51823 = (0);
var G__51824 = (0);
seq__51372_51796 = G__51821;
chunk__51374_51797 = G__51822;
count__51375_51798 = G__51823;
i__51376_51799 = G__51824;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51795);
}


var G__51825 = seq__51315_51790;
var G__51826 = chunk__51316_51791;
var G__51827 = count__51317_51792;
var G__51828 = (i__51318_51793 + (1));
seq__51315_51790 = G__51825;
chunk__51316_51791 = G__51826;
count__51317_51792 = G__51827;
i__51318_51793 = G__51828;
continue;
} else {
var temp__5753__auto___51829 = cljs.core.seq(seq__51315_51790);
if(temp__5753__auto___51829){
var seq__51315_51831__$1 = temp__5753__auto___51829;
if(cljs.core.chunked_seq_QMARK_(seq__51315_51831__$1)){
var c__4649__auto___51832 = cljs.core.chunk_first(seq__51315_51831__$1);
var G__51833 = cljs.core.chunk_rest(seq__51315_51831__$1);
var G__51834 = c__4649__auto___51832;
var G__51835 = cljs.core.count(c__4649__auto___51832);
var G__51836 = (0);
seq__51315_51790 = G__51833;
chunk__51316_51791 = G__51834;
count__51317_51792 = G__51835;
i__51318_51793 = G__51836;
continue;
} else {
var child_struct_51837 = cljs.core.first(seq__51315_51831__$1);
var children_51838 = shadow.dom.dom_node(child_struct_51837);
if(cljs.core.seq_QMARK_(children_51838)){
var seq__51393_51839 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51838));
var chunk__51396_51840 = null;
var count__51397_51841 = (0);
var i__51398_51842 = (0);
while(true){
if((i__51398_51842 < count__51397_51841)){
var child_51843 = chunk__51396_51840.cljs$core$IIndexed$_nth$arity$2(null,i__51398_51842);
if(cljs.core.truth_(child_51843)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51843);


var G__51844 = seq__51393_51839;
var G__51845 = chunk__51396_51840;
var G__51846 = count__51397_51841;
var G__51847 = (i__51398_51842 + (1));
seq__51393_51839 = G__51844;
chunk__51396_51840 = G__51845;
count__51397_51841 = G__51846;
i__51398_51842 = G__51847;
continue;
} else {
var G__51848 = seq__51393_51839;
var G__51849 = chunk__51396_51840;
var G__51850 = count__51397_51841;
var G__51851 = (i__51398_51842 + (1));
seq__51393_51839 = G__51848;
chunk__51396_51840 = G__51849;
count__51397_51841 = G__51850;
i__51398_51842 = G__51851;
continue;
}
} else {
var temp__5753__auto___51852__$1 = cljs.core.seq(seq__51393_51839);
if(temp__5753__auto___51852__$1){
var seq__51393_51853__$1 = temp__5753__auto___51852__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51393_51853__$1)){
var c__4649__auto___51854 = cljs.core.chunk_first(seq__51393_51853__$1);
var G__51855 = cljs.core.chunk_rest(seq__51393_51853__$1);
var G__51856 = c__4649__auto___51854;
var G__51857 = cljs.core.count(c__4649__auto___51854);
var G__51858 = (0);
seq__51393_51839 = G__51855;
chunk__51396_51840 = G__51856;
count__51397_51841 = G__51857;
i__51398_51842 = G__51858;
continue;
} else {
var child_51859 = cljs.core.first(seq__51393_51853__$1);
if(cljs.core.truth_(child_51859)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51859);


var G__51860 = cljs.core.next(seq__51393_51853__$1);
var G__51861 = null;
var G__51862 = (0);
var G__51863 = (0);
seq__51393_51839 = G__51860;
chunk__51396_51840 = G__51861;
count__51397_51841 = G__51862;
i__51398_51842 = G__51863;
continue;
} else {
var G__51864 = cljs.core.next(seq__51393_51853__$1);
var G__51865 = null;
var G__51866 = (0);
var G__51867 = (0);
seq__51393_51839 = G__51864;
chunk__51396_51840 = G__51865;
count__51397_51841 = G__51866;
i__51398_51842 = G__51867;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51838);
}


var G__51868 = cljs.core.next(seq__51315_51831__$1);
var G__51869 = null;
var G__51870 = (0);
var G__51871 = (0);
seq__51315_51790 = G__51868;
chunk__51316_51791 = G__51869;
count__51317_51792 = G__51870;
i__51318_51793 = G__51871;
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
var seq__51428 = cljs.core.seq(node);
var chunk__51429 = null;
var count__51430 = (0);
var i__51431 = (0);
while(true){
if((i__51431 < count__51430)){
var n = chunk__51429.cljs$core$IIndexed$_nth$arity$2(null,i__51431);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51872 = seq__51428;
var G__51873 = chunk__51429;
var G__51874 = count__51430;
var G__51875 = (i__51431 + (1));
seq__51428 = G__51872;
chunk__51429 = G__51873;
count__51430 = G__51874;
i__51431 = G__51875;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51428);
if(temp__5753__auto__){
var seq__51428__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51428__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51428__$1);
var G__51876 = cljs.core.chunk_rest(seq__51428__$1);
var G__51877 = c__4649__auto__;
var G__51878 = cljs.core.count(c__4649__auto__);
var G__51879 = (0);
seq__51428 = G__51876;
chunk__51429 = G__51877;
count__51430 = G__51878;
i__51431 = G__51879;
continue;
} else {
var n = cljs.core.first(seq__51428__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51880 = cljs.core.next(seq__51428__$1);
var G__51881 = null;
var G__51882 = (0);
var G__51883 = (0);
seq__51428 = G__51880;
chunk__51429 = G__51881;
count__51430 = G__51882;
i__51431 = G__51883;
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
var G__51434 = arguments.length;
switch (G__51434) {
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
var G__51436 = arguments.length;
switch (G__51436) {
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
var G__51438 = arguments.length;
switch (G__51438) {
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
var len__4829__auto___51891 = arguments.length;
var i__4830__auto___51892 = (0);
while(true){
if((i__4830__auto___51892 < len__4829__auto___51891)){
args__4835__auto__.push((arguments[i__4830__auto___51892]));

var G__51893 = (i__4830__auto___51892 + (1));
i__4830__auto___51892 = G__51893;
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
var seq__51459_51894 = cljs.core.seq(nodes);
var chunk__51460_51895 = null;
var count__51461_51896 = (0);
var i__51462_51897 = (0);
while(true){
if((i__51462_51897 < count__51461_51896)){
var node_51898 = chunk__51460_51895.cljs$core$IIndexed$_nth$arity$2(null,i__51462_51897);
fragment.appendChild(shadow.dom._to_dom(node_51898));


var G__51899 = seq__51459_51894;
var G__51900 = chunk__51460_51895;
var G__51901 = count__51461_51896;
var G__51902 = (i__51462_51897 + (1));
seq__51459_51894 = G__51899;
chunk__51460_51895 = G__51900;
count__51461_51896 = G__51901;
i__51462_51897 = G__51902;
continue;
} else {
var temp__5753__auto___51903 = cljs.core.seq(seq__51459_51894);
if(temp__5753__auto___51903){
var seq__51459_51904__$1 = temp__5753__auto___51903;
if(cljs.core.chunked_seq_QMARK_(seq__51459_51904__$1)){
var c__4649__auto___51905 = cljs.core.chunk_first(seq__51459_51904__$1);
var G__51906 = cljs.core.chunk_rest(seq__51459_51904__$1);
var G__51907 = c__4649__auto___51905;
var G__51908 = cljs.core.count(c__4649__auto___51905);
var G__51909 = (0);
seq__51459_51894 = G__51906;
chunk__51460_51895 = G__51907;
count__51461_51896 = G__51908;
i__51462_51897 = G__51909;
continue;
} else {
var node_51910 = cljs.core.first(seq__51459_51904__$1);
fragment.appendChild(shadow.dom._to_dom(node_51910));


var G__51911 = cljs.core.next(seq__51459_51904__$1);
var G__51912 = null;
var G__51913 = (0);
var G__51914 = (0);
seq__51459_51894 = G__51911;
chunk__51460_51895 = G__51912;
count__51461_51896 = G__51913;
i__51462_51897 = G__51914;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq51458){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51458));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51463_51915 = cljs.core.seq(scripts);
var chunk__51464_51916 = null;
var count__51465_51917 = (0);
var i__51466_51918 = (0);
while(true){
if((i__51466_51918 < count__51465_51917)){
var vec__51473_51919 = chunk__51464_51916.cljs$core$IIndexed$_nth$arity$2(null,i__51466_51918);
var script_tag_51920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51473_51919,(0),null);
var script_body_51921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51473_51919,(1),null);
eval(script_body_51921);


var G__51922 = seq__51463_51915;
var G__51923 = chunk__51464_51916;
var G__51924 = count__51465_51917;
var G__51925 = (i__51466_51918 + (1));
seq__51463_51915 = G__51922;
chunk__51464_51916 = G__51923;
count__51465_51917 = G__51924;
i__51466_51918 = G__51925;
continue;
} else {
var temp__5753__auto___51926 = cljs.core.seq(seq__51463_51915);
if(temp__5753__auto___51926){
var seq__51463_51927__$1 = temp__5753__auto___51926;
if(cljs.core.chunked_seq_QMARK_(seq__51463_51927__$1)){
var c__4649__auto___51928 = cljs.core.chunk_first(seq__51463_51927__$1);
var G__51929 = cljs.core.chunk_rest(seq__51463_51927__$1);
var G__51930 = c__4649__auto___51928;
var G__51931 = cljs.core.count(c__4649__auto___51928);
var G__51932 = (0);
seq__51463_51915 = G__51929;
chunk__51464_51916 = G__51930;
count__51465_51917 = G__51931;
i__51466_51918 = G__51932;
continue;
} else {
var vec__51476_51933 = cljs.core.first(seq__51463_51927__$1);
var script_tag_51934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51476_51933,(0),null);
var script_body_51935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51476_51933,(1),null);
eval(script_body_51935);


var G__51936 = cljs.core.next(seq__51463_51927__$1);
var G__51937 = null;
var G__51938 = (0);
var G__51939 = (0);
seq__51463_51915 = G__51936;
chunk__51464_51916 = G__51937;
count__51465_51917 = G__51938;
i__51466_51918 = G__51939;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__51479){
var vec__51480 = p__51479;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51480,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51480,(1),null);
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
var G__51484 = arguments.length;
switch (G__51484) {
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
var seq__51486 = cljs.core.seq(style_keys);
var chunk__51487 = null;
var count__51488 = (0);
var i__51489 = (0);
while(true){
if((i__51489 < count__51488)){
var it = chunk__51487.cljs$core$IIndexed$_nth$arity$2(null,i__51489);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51945 = seq__51486;
var G__51946 = chunk__51487;
var G__51947 = count__51488;
var G__51948 = (i__51489 + (1));
seq__51486 = G__51945;
chunk__51487 = G__51946;
count__51488 = G__51947;
i__51489 = G__51948;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51486);
if(temp__5753__auto__){
var seq__51486__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51486__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51486__$1);
var G__51949 = cljs.core.chunk_rest(seq__51486__$1);
var G__51950 = c__4649__auto__;
var G__51951 = cljs.core.count(c__4649__auto__);
var G__51952 = (0);
seq__51486 = G__51949;
chunk__51487 = G__51950;
count__51488 = G__51951;
i__51489 = G__51952;
continue;
} else {
var it = cljs.core.first(seq__51486__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51953 = cljs.core.next(seq__51486__$1);
var G__51954 = null;
var G__51955 = (0);
var G__51956 = (0);
seq__51486 = G__51953;
chunk__51487 = G__51954;
count__51488 = G__51955;
i__51489 = G__51956;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k51492,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__51496 = k51492;
var G__51496__$1 = (((G__51496 instanceof cljs.core.Keyword))?G__51496.fqn:null);
switch (G__51496__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51492,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__51497){
var vec__51498 = p__51497;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51498,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51498,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51491){
var self__ = this;
var G__51491__$1 = this;
return (new cljs.core.RecordIter((0),G__51491__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51493,other51494){
var self__ = this;
var this51493__$1 = this;
return (((!((other51494 == null)))) && ((((this51493__$1.constructor === other51494.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51493__$1.x,other51494.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51493__$1.y,other51494.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51493__$1.__extmap,other51494.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k51492){
var self__ = this;
var this__4479__auto____$1 = this;
var G__51501 = k51492;
var G__51501__$1 = (((G__51501 instanceof cljs.core.Keyword))?G__51501.fqn:null);
switch (G__51501__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51492);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__51491){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__51502 = cljs.core.keyword_identical_QMARK_;
var expr__51503 = k__4481__auto__;
if(cljs.core.truth_((pred__51502.cljs$core$IFn$_invoke$arity$2 ? pred__51502.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__51503) : pred__51502.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__51503)))){
return (new shadow.dom.Coordinate(G__51491,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51502.cljs$core$IFn$_invoke$arity$2 ? pred__51502.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__51503) : pred__51502.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__51503)))){
return (new shadow.dom.Coordinate(self__.x,G__51491,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__51491),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__51491){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51491,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__51495){
var extmap__4512__auto__ = (function (){var G__51505 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51495,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__51495)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51505);
} else {
return G__51505;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51495),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51495),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k51527,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__51536 = k51527;
var G__51536__$1 = (((G__51536 instanceof cljs.core.Keyword))?G__51536.fqn:null);
switch (G__51536__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51527,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__51537){
var vec__51538 = p__51537;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51538,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51538,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51526){
var self__ = this;
var G__51526__$1 = this;
return (new cljs.core.RecordIter((0),G__51526__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51528,other51529){
var self__ = this;
var this51528__$1 = this;
return (((!((other51529 == null)))) && ((((this51528__$1.constructor === other51529.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51528__$1.w,other51529.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51528__$1.h,other51529.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51528__$1.__extmap,other51529.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k51527){
var self__ = this;
var this__4479__auto____$1 = this;
var G__51541 = k51527;
var G__51541__$1 = (((G__51541 instanceof cljs.core.Keyword))?G__51541.fqn:null);
switch (G__51541__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51527);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__51526){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__51543 = cljs.core.keyword_identical_QMARK_;
var expr__51544 = k__4481__auto__;
if(cljs.core.truth_((pred__51543.cljs$core$IFn$_invoke$arity$2 ? pred__51543.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__51544) : pred__51543.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__51544)))){
return (new shadow.dom.Size(G__51526,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51543.cljs$core$IFn$_invoke$arity$2 ? pred__51543.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__51544) : pred__51543.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__51544)))){
return (new shadow.dom.Size(self__.w,G__51526,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__51526),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__51526){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__51526,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__51530){
var extmap__4512__auto__ = (function (){var G__51549 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51530,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__51530)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51549);
} else {
return G__51549;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__51530),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__51530),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var G__51973 = (i + (1));
var G__51974 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51973;
ret = G__51974;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51573){
var vec__51574 = p__51573;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51574,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51574,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51584 = arguments.length;
switch (G__51584) {
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
var G__51991 = ps;
var G__51992 = (i + (1));
el__$1 = G__51991;
i = G__51992;
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
var vec__51649 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51649,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51649,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51649,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51652_52011 = cljs.core.seq(props);
var chunk__51653_52012 = null;
var count__51654_52013 = (0);
var i__51655_52014 = (0);
while(true){
if((i__51655_52014 < count__51654_52013)){
var vec__51662_52015 = chunk__51653_52012.cljs$core$IIndexed$_nth$arity$2(null,i__51655_52014);
var k_52016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51662_52015,(0),null);
var v_52017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51662_52015,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_52016);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52016),v_52017);


var G__52019 = seq__51652_52011;
var G__52020 = chunk__51653_52012;
var G__52021 = count__51654_52013;
var G__52022 = (i__51655_52014 + (1));
seq__51652_52011 = G__52019;
chunk__51653_52012 = G__52020;
count__51654_52013 = G__52021;
i__51655_52014 = G__52022;
continue;
} else {
var temp__5753__auto___52023 = cljs.core.seq(seq__51652_52011);
if(temp__5753__auto___52023){
var seq__51652_52024__$1 = temp__5753__auto___52023;
if(cljs.core.chunked_seq_QMARK_(seq__51652_52024__$1)){
var c__4649__auto___52025 = cljs.core.chunk_first(seq__51652_52024__$1);
var G__52026 = cljs.core.chunk_rest(seq__51652_52024__$1);
var G__52027 = c__4649__auto___52025;
var G__52028 = cljs.core.count(c__4649__auto___52025);
var G__52029 = (0);
seq__51652_52011 = G__52026;
chunk__51653_52012 = G__52027;
count__51654_52013 = G__52028;
i__51655_52014 = G__52029;
continue;
} else {
var vec__51665_52031 = cljs.core.first(seq__51652_52024__$1);
var k_52032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51665_52031,(0),null);
var v_52033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51665_52031,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_52032);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52032),v_52033);


var G__52034 = cljs.core.next(seq__51652_52024__$1);
var G__52035 = null;
var G__52036 = (0);
var G__52037 = (0);
seq__51652_52011 = G__52034;
chunk__51653_52012 = G__52035;
count__51654_52013 = G__52036;
i__51655_52014 = G__52037;
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
var vec__51669 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51669,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51669,(1),null);
var seq__51672_52039 = cljs.core.seq(node_children);
var chunk__51674_52040 = null;
var count__51675_52041 = (0);
var i__51676_52042 = (0);
while(true){
if((i__51676_52042 < count__51675_52041)){
var child_struct_52043 = chunk__51674_52040.cljs$core$IIndexed$_nth$arity$2(null,i__51676_52042);
if((!((child_struct_52043 == null)))){
if(typeof child_struct_52043 === 'string'){
var text_52044 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52044),child_struct_52043].join(''));
} else {
var children_52045 = shadow.dom.svg_node(child_struct_52043);
if(cljs.core.seq_QMARK_(children_52045)){
var seq__51690_52050 = cljs.core.seq(children_52045);
var chunk__51692_52051 = null;
var count__51693_52052 = (0);
var i__51694_52053 = (0);
while(true){
if((i__51694_52053 < count__51693_52052)){
var child_52054 = chunk__51692_52051.cljs$core$IIndexed$_nth$arity$2(null,i__51694_52053);
if(cljs.core.truth_(child_52054)){
node.appendChild(child_52054);


var G__52055 = seq__51690_52050;
var G__52056 = chunk__51692_52051;
var G__52057 = count__51693_52052;
var G__52058 = (i__51694_52053 + (1));
seq__51690_52050 = G__52055;
chunk__51692_52051 = G__52056;
count__51693_52052 = G__52057;
i__51694_52053 = G__52058;
continue;
} else {
var G__52059 = seq__51690_52050;
var G__52060 = chunk__51692_52051;
var G__52061 = count__51693_52052;
var G__52062 = (i__51694_52053 + (1));
seq__51690_52050 = G__52059;
chunk__51692_52051 = G__52060;
count__51693_52052 = G__52061;
i__51694_52053 = G__52062;
continue;
}
} else {
var temp__5753__auto___52063 = cljs.core.seq(seq__51690_52050);
if(temp__5753__auto___52063){
var seq__51690_52067__$1 = temp__5753__auto___52063;
if(cljs.core.chunked_seq_QMARK_(seq__51690_52067__$1)){
var c__4649__auto___52068 = cljs.core.chunk_first(seq__51690_52067__$1);
var G__52069 = cljs.core.chunk_rest(seq__51690_52067__$1);
var G__52070 = c__4649__auto___52068;
var G__52071 = cljs.core.count(c__4649__auto___52068);
var G__52072 = (0);
seq__51690_52050 = G__52069;
chunk__51692_52051 = G__52070;
count__51693_52052 = G__52071;
i__51694_52053 = G__52072;
continue;
} else {
var child_52073 = cljs.core.first(seq__51690_52067__$1);
if(cljs.core.truth_(child_52073)){
node.appendChild(child_52073);


var G__52074 = cljs.core.next(seq__51690_52067__$1);
var G__52075 = null;
var G__52076 = (0);
var G__52077 = (0);
seq__51690_52050 = G__52074;
chunk__51692_52051 = G__52075;
count__51693_52052 = G__52076;
i__51694_52053 = G__52077;
continue;
} else {
var G__52078 = cljs.core.next(seq__51690_52067__$1);
var G__52079 = null;
var G__52080 = (0);
var G__52081 = (0);
seq__51690_52050 = G__52078;
chunk__51692_52051 = G__52079;
count__51693_52052 = G__52080;
i__51694_52053 = G__52081;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52045);
}
}


var G__52082 = seq__51672_52039;
var G__52083 = chunk__51674_52040;
var G__52084 = count__51675_52041;
var G__52085 = (i__51676_52042 + (1));
seq__51672_52039 = G__52082;
chunk__51674_52040 = G__52083;
count__51675_52041 = G__52084;
i__51676_52042 = G__52085;
continue;
} else {
var G__52086 = seq__51672_52039;
var G__52087 = chunk__51674_52040;
var G__52088 = count__51675_52041;
var G__52089 = (i__51676_52042 + (1));
seq__51672_52039 = G__52086;
chunk__51674_52040 = G__52087;
count__51675_52041 = G__52088;
i__51676_52042 = G__52089;
continue;
}
} else {
var temp__5753__auto___52090 = cljs.core.seq(seq__51672_52039);
if(temp__5753__auto___52090){
var seq__51672_52091__$1 = temp__5753__auto___52090;
if(cljs.core.chunked_seq_QMARK_(seq__51672_52091__$1)){
var c__4649__auto___52092 = cljs.core.chunk_first(seq__51672_52091__$1);
var G__52093 = cljs.core.chunk_rest(seq__51672_52091__$1);
var G__52094 = c__4649__auto___52092;
var G__52095 = cljs.core.count(c__4649__auto___52092);
var G__52096 = (0);
seq__51672_52039 = G__52093;
chunk__51674_52040 = G__52094;
count__51675_52041 = G__52095;
i__51676_52042 = G__52096;
continue;
} else {
var child_struct_52097 = cljs.core.first(seq__51672_52091__$1);
if((!((child_struct_52097 == null)))){
if(typeof child_struct_52097 === 'string'){
var text_52098 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52098),child_struct_52097].join(''));
} else {
var children_52099 = shadow.dom.svg_node(child_struct_52097);
if(cljs.core.seq_QMARK_(children_52099)){
var seq__51697_52100 = cljs.core.seq(children_52099);
var chunk__51699_52101 = null;
var count__51700_52102 = (0);
var i__51701_52103 = (0);
while(true){
if((i__51701_52103 < count__51700_52102)){
var child_52104 = chunk__51699_52101.cljs$core$IIndexed$_nth$arity$2(null,i__51701_52103);
if(cljs.core.truth_(child_52104)){
node.appendChild(child_52104);


var G__52105 = seq__51697_52100;
var G__52106 = chunk__51699_52101;
var G__52107 = count__51700_52102;
var G__52108 = (i__51701_52103 + (1));
seq__51697_52100 = G__52105;
chunk__51699_52101 = G__52106;
count__51700_52102 = G__52107;
i__51701_52103 = G__52108;
continue;
} else {
var G__52110 = seq__51697_52100;
var G__52111 = chunk__51699_52101;
var G__52112 = count__51700_52102;
var G__52113 = (i__51701_52103 + (1));
seq__51697_52100 = G__52110;
chunk__51699_52101 = G__52111;
count__51700_52102 = G__52112;
i__51701_52103 = G__52113;
continue;
}
} else {
var temp__5753__auto___52114__$1 = cljs.core.seq(seq__51697_52100);
if(temp__5753__auto___52114__$1){
var seq__51697_52115__$1 = temp__5753__auto___52114__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51697_52115__$1)){
var c__4649__auto___52116 = cljs.core.chunk_first(seq__51697_52115__$1);
var G__52117 = cljs.core.chunk_rest(seq__51697_52115__$1);
var G__52118 = c__4649__auto___52116;
var G__52119 = cljs.core.count(c__4649__auto___52116);
var G__52120 = (0);
seq__51697_52100 = G__52117;
chunk__51699_52101 = G__52118;
count__51700_52102 = G__52119;
i__51701_52103 = G__52120;
continue;
} else {
var child_52121 = cljs.core.first(seq__51697_52115__$1);
if(cljs.core.truth_(child_52121)){
node.appendChild(child_52121);


var G__52122 = cljs.core.next(seq__51697_52115__$1);
var G__52123 = null;
var G__52124 = (0);
var G__52125 = (0);
seq__51697_52100 = G__52122;
chunk__51699_52101 = G__52123;
count__51700_52102 = G__52124;
i__51701_52103 = G__52125;
continue;
} else {
var G__52126 = cljs.core.next(seq__51697_52115__$1);
var G__52127 = null;
var G__52128 = (0);
var G__52129 = (0);
seq__51697_52100 = G__52126;
chunk__51699_52101 = G__52127;
count__51700_52102 = G__52128;
i__51701_52103 = G__52129;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52099);
}
}


var G__52130 = cljs.core.next(seq__51672_52091__$1);
var G__52131 = null;
var G__52132 = (0);
var G__52133 = (0);
seq__51672_52039 = G__52130;
chunk__51674_52040 = G__52131;
count__51675_52041 = G__52132;
i__51676_52042 = G__52133;
continue;
} else {
var G__52134 = cljs.core.next(seq__51672_52091__$1);
var G__52135 = null;
var G__52136 = (0);
var G__52137 = (0);
seq__51672_52039 = G__52134;
chunk__51674_52040 = G__52135;
count__51675_52041 = G__52136;
i__51676_52042 = G__52137;
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
var len__4829__auto___52138 = arguments.length;
var i__4830__auto___52139 = (0);
while(true){
if((i__4830__auto___52139 < len__4829__auto___52138)){
args__4835__auto__.push((arguments[i__4830__auto___52139]));

var G__52140 = (i__4830__auto___52139 + (1));
i__4830__auto___52139 = G__52140;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51704){
var G__51705 = cljs.core.first(seq51704);
var seq51704__$1 = cljs.core.next(seq51704);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51705,seq51704__$1);
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
var G__51713 = arguments.length;
switch (G__51713) {
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
var c__47942__auto___52145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_51719){
var state_val_51720 = (state_51719[(1)]);
if((state_val_51720 === (1))){
var state_51719__$1 = state_51719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51719__$1,(2),once_or_cleanup);
} else {
if((state_val_51720 === (2))){
var inst_51716 = (state_51719[(2)]);
var inst_51717 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51719__$1 = (function (){var statearr_51722 = state_51719;
(statearr_51722[(7)] = inst_51716);

return statearr_51722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51719__$1,inst_51717);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__47758__auto__ = null;
var shadow$dom$state_machine__47758__auto____0 = (function (){
var statearr_51723 = [null,null,null,null,null,null,null,null];
(statearr_51723[(0)] = shadow$dom$state_machine__47758__auto__);

(statearr_51723[(1)] = (1));

return statearr_51723;
});
var shadow$dom$state_machine__47758__auto____1 = (function (state_51719){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_51719);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e51724){var ex__47761__auto__ = e51724;
var statearr_51725_52146 = state_51719;
(statearr_51725_52146[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_51719[(4)]))){
var statearr_51726_52147 = state_51719;
(statearr_51726_52147[(1)] = cljs.core.first((state_51719[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52148 = state_51719;
state_51719 = G__52148;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
shadow$dom$state_machine__47758__auto__ = function(state_51719){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__47758__auto____0.call(this);
case 1:
return shadow$dom$state_machine__47758__auto____1.call(this,state_51719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__47758__auto____0;
shadow$dom$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__47758__auto____1;
return shadow$dom$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_51728 = f__47943__auto__();
(statearr_51728[(6)] = c__47942__auto___52145);

return statearr_51728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
