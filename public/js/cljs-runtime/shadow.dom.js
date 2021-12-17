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
return cljs.core.cons((coll[idx]),(function (){var G__35654 = coll;
var G__35655 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35654,G__35655) : shadow.dom.lazy_native_coll_seq.call(null,G__35654,G__35655));
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
var G__35658 = arguments.length;
switch (G__35658) {
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
var G__35660 = arguments.length;
switch (G__35660) {
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
var G__35665 = arguments.length;
switch (G__35665) {
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
var G__35667 = arguments.length;
switch (G__35667) {
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
var G__35670 = arguments.length;
switch (G__35670) {
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
var G__35671 = document;
var G__35672 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35671,G__35672);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35673 = shadow.dom.dom_node(parent);
var G__35674 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35673,G__35674);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35675 = shadow.dom.dom_node(el);
var G__35676 = cls;
return goog.dom.classlist.add(G__35675,G__35676);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35677 = shadow.dom.dom_node(el);
var G__35678 = cls;
return goog.dom.classlist.remove(G__35677,G__35678);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35681 = arguments.length;
switch (G__35681) {
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
var G__35684 = shadow.dom.dom_node(el);
var G__35685 = cls;
return goog.dom.classlist.toggle(G__35684,G__35685);
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
}catch (e35686){if((e35686 instanceof Object)){
var e = e35686;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35686;

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
var seq__35687 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35688 = null;
var count__35689 = (0);
var i__35690 = (0);
while(true){
if((i__35690 < count__35689)){
var el = chunk__35688.cljs$core$IIndexed$_nth$arity$2(null,i__35690);
var handler_36653__$1 = ((function (seq__35687,chunk__35688,count__35689,i__35690,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35687,chunk__35688,count__35689,i__35690,el))
;
var G__35700_36654 = el;
var G__35701_36655 = cljs.core.name(ev);
var G__35702_36656 = handler_36653__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35700_36654,G__35701_36655,G__35702_36656) : shadow.dom.dom_listen.call(null,G__35700_36654,G__35701_36655,G__35702_36656));


var G__36657 = seq__35687;
var G__36658 = chunk__35688;
var G__36659 = count__35689;
var G__36660 = (i__35690 + (1));
seq__35687 = G__36657;
chunk__35688 = G__36658;
count__35689 = G__36659;
i__35690 = G__36660;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35687);
if(temp__5735__auto__){
var seq__35687__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35687__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35687__$1);
var G__36661 = cljs.core.chunk_rest(seq__35687__$1);
var G__36662 = c__4609__auto__;
var G__36663 = cljs.core.count(c__4609__auto__);
var G__36664 = (0);
seq__35687 = G__36661;
chunk__35688 = G__36662;
count__35689 = G__36663;
i__35690 = G__36664;
continue;
} else {
var el = cljs.core.first(seq__35687__$1);
var handler_36665__$1 = ((function (seq__35687,chunk__35688,count__35689,i__35690,el,seq__35687__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35687,chunk__35688,count__35689,i__35690,el,seq__35687__$1,temp__5735__auto__))
;
var G__35704_36666 = el;
var G__35705_36667 = cljs.core.name(ev);
var G__35706_36668 = handler_36665__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35704_36666,G__35705_36667,G__35706_36668) : shadow.dom.dom_listen.call(null,G__35704_36666,G__35705_36667,G__35706_36668));


var G__36669 = cljs.core.next(seq__35687__$1);
var G__36670 = null;
var G__36671 = (0);
var G__36672 = (0);
seq__35687 = G__36669;
chunk__35688 = G__36670;
count__35689 = G__36671;
i__35690 = G__36672;
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
var G__35713 = arguments.length;
switch (G__35713) {
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
var G__35720 = shadow.dom.dom_node(el);
var G__35721 = cljs.core.name(ev);
var G__35722 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35720,G__35721,G__35722) : shadow.dom.dom_listen.call(null,G__35720,G__35721,G__35722));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35725 = shadow.dom.dom_node(el);
var G__35726 = cljs.core.name(ev);
var G__35727 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35725,G__35726,G__35727) : shadow.dom.dom_listen_remove.call(null,G__35725,G__35726,G__35727));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35728 = cljs.core.seq(events);
var chunk__35729 = null;
var count__35730 = (0);
var i__35731 = (0);
while(true){
if((i__35731 < count__35730)){
var vec__35749 = chunk__35729.cljs$core$IIndexed$_nth$arity$2(null,i__35731);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35749,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35749,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36674 = seq__35728;
var G__36675 = chunk__35729;
var G__36676 = count__35730;
var G__36677 = (i__35731 + (1));
seq__35728 = G__36674;
chunk__35729 = G__36675;
count__35730 = G__36676;
i__35731 = G__36677;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35728);
if(temp__5735__auto__){
var seq__35728__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35728__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35728__$1);
var G__36678 = cljs.core.chunk_rest(seq__35728__$1);
var G__36679 = c__4609__auto__;
var G__36680 = cljs.core.count(c__4609__auto__);
var G__36681 = (0);
seq__35728 = G__36678;
chunk__35729 = G__36679;
count__35730 = G__36680;
i__35731 = G__36681;
continue;
} else {
var vec__35752 = cljs.core.first(seq__35728__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35752,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35752,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36682 = cljs.core.next(seq__35728__$1);
var G__36683 = null;
var G__36684 = (0);
var G__36685 = (0);
seq__35728 = G__36682;
chunk__35729 = G__36683;
count__35730 = G__36684;
i__35731 = G__36685;
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
var seq__35758 = cljs.core.seq(styles);
var chunk__35759 = null;
var count__35760 = (0);
var i__35761 = (0);
while(true){
if((i__35761 < count__35760)){
var vec__35774 = chunk__35759.cljs$core$IIndexed$_nth$arity$2(null,i__35761);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35774,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35774,(1),null);
var G__35777_36686 = dom;
var G__35778_36687 = cljs.core.name(k);
var G__35779_36688 = (((v == null))?"":v);
goog.style.setStyle(G__35777_36686,G__35778_36687,G__35779_36688);


var G__36689 = seq__35758;
var G__36690 = chunk__35759;
var G__36691 = count__35760;
var G__36692 = (i__35761 + (1));
seq__35758 = G__36689;
chunk__35759 = G__36690;
count__35760 = G__36691;
i__35761 = G__36692;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35758);
if(temp__5735__auto__){
var seq__35758__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35758__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35758__$1);
var G__36693 = cljs.core.chunk_rest(seq__35758__$1);
var G__36694 = c__4609__auto__;
var G__36695 = cljs.core.count(c__4609__auto__);
var G__36696 = (0);
seq__35758 = G__36693;
chunk__35759 = G__36694;
count__35760 = G__36695;
i__35761 = G__36696;
continue;
} else {
var vec__35780 = cljs.core.first(seq__35758__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35780,(1),null);
var G__35783_36697 = dom;
var G__35784_36698 = cljs.core.name(k);
var G__35785_36699 = (((v == null))?"":v);
goog.style.setStyle(G__35783_36697,G__35784_36698,G__35785_36699);


var G__36700 = cljs.core.next(seq__35758__$1);
var G__36701 = null;
var G__36702 = (0);
var G__36703 = (0);
seq__35758 = G__36700;
chunk__35759 = G__36701;
count__35760 = G__36702;
i__35761 = G__36703;
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
var G__35792_36704 = key;
var G__35792_36705__$1 = (((G__35792_36704 instanceof cljs.core.Keyword))?G__35792_36704.fqn:null);
switch (G__35792_36705__$1) {
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
var ks_36707 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_36707,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_36707,"aria-");
}
})())){
el.setAttribute(ks_36707,value);
} else {
(el[ks_36707] = value);
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
var G__35805 = shadow.dom.dom_node(el);
var G__35806 = cls;
return goog.dom.classlist.contains(G__35805,G__35806);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35815){
var map__35816 = p__35815;
var map__35816__$1 = (((((!((map__35816 == null))))?(((((map__35816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35816):map__35816);
var props = map__35816__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35818 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35818,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35818,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35818,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35828 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35828,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35828;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35830 = arguments.length;
switch (G__35830) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35841){
var vec__35842 = p__35841;
var seq__35843 = cljs.core.seq(vec__35842);
var first__35844 = cljs.core.first(seq__35843);
var seq__35843__$1 = cljs.core.next(seq__35843);
var nn = first__35844;
var first__35844__$1 = cljs.core.first(seq__35843__$1);
var seq__35843__$2 = cljs.core.next(seq__35843__$1);
var np = first__35844__$1;
var nc = seq__35843__$2;
var node = vec__35842;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35845 = nn;
var G__35846 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35845,G__35846) : create_fn.call(null,G__35845,G__35846));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35847 = nn;
var G__35848 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35847,G__35848) : create_fn.call(null,G__35847,G__35848));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35853 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35853,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35853,(1),null);
var seq__35856_36711 = cljs.core.seq(node_children);
var chunk__35857_36712 = null;
var count__35858_36713 = (0);
var i__35859_36714 = (0);
while(true){
if((i__35859_36714 < count__35858_36713)){
var child_struct_36715 = chunk__35857_36712.cljs$core$IIndexed$_nth$arity$2(null,i__35859_36714);
var children_36716 = shadow.dom.dom_node(child_struct_36715);
if(cljs.core.seq_QMARK_(children_36716)){
var seq__35892_36717 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36716));
var chunk__35894_36718 = null;
var count__35895_36719 = (0);
var i__35896_36720 = (0);
while(true){
if((i__35896_36720 < count__35895_36719)){
var child_36721 = chunk__35894_36718.cljs$core$IIndexed$_nth$arity$2(null,i__35896_36720);
if(cljs.core.truth_(child_36721)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36721);


var G__36722 = seq__35892_36717;
var G__36723 = chunk__35894_36718;
var G__36724 = count__35895_36719;
var G__36725 = (i__35896_36720 + (1));
seq__35892_36717 = G__36722;
chunk__35894_36718 = G__36723;
count__35895_36719 = G__36724;
i__35896_36720 = G__36725;
continue;
} else {
var G__36726 = seq__35892_36717;
var G__36727 = chunk__35894_36718;
var G__36728 = count__35895_36719;
var G__36729 = (i__35896_36720 + (1));
seq__35892_36717 = G__36726;
chunk__35894_36718 = G__36727;
count__35895_36719 = G__36728;
i__35896_36720 = G__36729;
continue;
}
} else {
var temp__5735__auto___36730 = cljs.core.seq(seq__35892_36717);
if(temp__5735__auto___36730){
var seq__35892_36732__$1 = temp__5735__auto___36730;
if(cljs.core.chunked_seq_QMARK_(seq__35892_36732__$1)){
var c__4609__auto___36733 = cljs.core.chunk_first(seq__35892_36732__$1);
var G__36734 = cljs.core.chunk_rest(seq__35892_36732__$1);
var G__36735 = c__4609__auto___36733;
var G__36736 = cljs.core.count(c__4609__auto___36733);
var G__36737 = (0);
seq__35892_36717 = G__36734;
chunk__35894_36718 = G__36735;
count__35895_36719 = G__36736;
i__35896_36720 = G__36737;
continue;
} else {
var child_36738 = cljs.core.first(seq__35892_36732__$1);
if(cljs.core.truth_(child_36738)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36738);


var G__36739 = cljs.core.next(seq__35892_36732__$1);
var G__36740 = null;
var G__36741 = (0);
var G__36742 = (0);
seq__35892_36717 = G__36739;
chunk__35894_36718 = G__36740;
count__35895_36719 = G__36741;
i__35896_36720 = G__36742;
continue;
} else {
var G__36743 = cljs.core.next(seq__35892_36732__$1);
var G__36744 = null;
var G__36745 = (0);
var G__36746 = (0);
seq__35892_36717 = G__36743;
chunk__35894_36718 = G__36744;
count__35895_36719 = G__36745;
i__35896_36720 = G__36746;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36716);
}


var G__36747 = seq__35856_36711;
var G__36748 = chunk__35857_36712;
var G__36749 = count__35858_36713;
var G__36750 = (i__35859_36714 + (1));
seq__35856_36711 = G__36747;
chunk__35857_36712 = G__36748;
count__35858_36713 = G__36749;
i__35859_36714 = G__36750;
continue;
} else {
var temp__5735__auto___36751 = cljs.core.seq(seq__35856_36711);
if(temp__5735__auto___36751){
var seq__35856_36752__$1 = temp__5735__auto___36751;
if(cljs.core.chunked_seq_QMARK_(seq__35856_36752__$1)){
var c__4609__auto___36753 = cljs.core.chunk_first(seq__35856_36752__$1);
var G__36754 = cljs.core.chunk_rest(seq__35856_36752__$1);
var G__36755 = c__4609__auto___36753;
var G__36756 = cljs.core.count(c__4609__auto___36753);
var G__36757 = (0);
seq__35856_36711 = G__36754;
chunk__35857_36712 = G__36755;
count__35858_36713 = G__36756;
i__35859_36714 = G__36757;
continue;
} else {
var child_struct_36758 = cljs.core.first(seq__35856_36752__$1);
var children_36760 = shadow.dom.dom_node(child_struct_36758);
if(cljs.core.seq_QMARK_(children_36760)){
var seq__35902_36761 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36760));
var chunk__35904_36762 = null;
var count__35905_36763 = (0);
var i__35906_36764 = (0);
while(true){
if((i__35906_36764 < count__35905_36763)){
var child_36765 = chunk__35904_36762.cljs$core$IIndexed$_nth$arity$2(null,i__35906_36764);
if(cljs.core.truth_(child_36765)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36765);


var G__36767 = seq__35902_36761;
var G__36768 = chunk__35904_36762;
var G__36769 = count__35905_36763;
var G__36770 = (i__35906_36764 + (1));
seq__35902_36761 = G__36767;
chunk__35904_36762 = G__36768;
count__35905_36763 = G__36769;
i__35906_36764 = G__36770;
continue;
} else {
var G__36771 = seq__35902_36761;
var G__36772 = chunk__35904_36762;
var G__36773 = count__35905_36763;
var G__36774 = (i__35906_36764 + (1));
seq__35902_36761 = G__36771;
chunk__35904_36762 = G__36772;
count__35905_36763 = G__36773;
i__35906_36764 = G__36774;
continue;
}
} else {
var temp__5735__auto___36775__$1 = cljs.core.seq(seq__35902_36761);
if(temp__5735__auto___36775__$1){
var seq__35902_36776__$1 = temp__5735__auto___36775__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35902_36776__$1)){
var c__4609__auto___36777 = cljs.core.chunk_first(seq__35902_36776__$1);
var G__36778 = cljs.core.chunk_rest(seq__35902_36776__$1);
var G__36779 = c__4609__auto___36777;
var G__36780 = cljs.core.count(c__4609__auto___36777);
var G__36781 = (0);
seq__35902_36761 = G__36778;
chunk__35904_36762 = G__36779;
count__35905_36763 = G__36780;
i__35906_36764 = G__36781;
continue;
} else {
var child_36782 = cljs.core.first(seq__35902_36776__$1);
if(cljs.core.truth_(child_36782)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36782);


var G__36783 = cljs.core.next(seq__35902_36776__$1);
var G__36784 = null;
var G__36785 = (0);
var G__36786 = (0);
seq__35902_36761 = G__36783;
chunk__35904_36762 = G__36784;
count__35905_36763 = G__36785;
i__35906_36764 = G__36786;
continue;
} else {
var G__36787 = cljs.core.next(seq__35902_36776__$1);
var G__36788 = null;
var G__36789 = (0);
var G__36790 = (0);
seq__35902_36761 = G__36787;
chunk__35904_36762 = G__36788;
count__35905_36763 = G__36789;
i__35906_36764 = G__36790;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36760);
}


var G__36791 = cljs.core.next(seq__35856_36752__$1);
var G__36792 = null;
var G__36793 = (0);
var G__36794 = (0);
seq__35856_36711 = G__36791;
chunk__35857_36712 = G__36792;
count__35858_36713 = G__36793;
i__35859_36714 = G__36794;
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
var G__35929 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35929);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35933 = cljs.core.seq(node);
var chunk__35934 = null;
var count__35935 = (0);
var i__35936 = (0);
while(true){
if((i__35936 < count__35935)){
var n = chunk__35934.cljs$core$IIndexed$_nth$arity$2(null,i__35936);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36795 = seq__35933;
var G__36796 = chunk__35934;
var G__36797 = count__35935;
var G__36798 = (i__35936 + (1));
seq__35933 = G__36795;
chunk__35934 = G__36796;
count__35935 = G__36797;
i__35936 = G__36798;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35933);
if(temp__5735__auto__){
var seq__35933__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35933__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35933__$1);
var G__36799 = cljs.core.chunk_rest(seq__35933__$1);
var G__36800 = c__4609__auto__;
var G__36801 = cljs.core.count(c__4609__auto__);
var G__36802 = (0);
seq__35933 = G__36799;
chunk__35934 = G__36800;
count__35935 = G__36801;
i__35936 = G__36802;
continue;
} else {
var n = cljs.core.first(seq__35933__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36803 = cljs.core.next(seq__35933__$1);
var G__36804 = null;
var G__36805 = (0);
var G__36806 = (0);
seq__35933 = G__36803;
chunk__35934 = G__36804;
count__35935 = G__36805;
i__35936 = G__36806;
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
var G__35946 = shadow.dom.dom_node(new$);
var G__35947 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35946,G__35947);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35949 = arguments.length;
switch (G__35949) {
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
var G__35955 = arguments.length;
switch (G__35955) {
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
var G__35975 = arguments.length;
switch (G__35975) {
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
var len__4789__auto___36811 = arguments.length;
var i__4790__auto___36812 = (0);
while(true){
if((i__4790__auto___36812 < len__4789__auto___36811)){
args__4795__auto__.push((arguments[i__4790__auto___36812]));

var G__36813 = (i__4790__auto___36812 + (1));
i__4790__auto___36812 = G__36813;
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
var seq__36002_36814 = cljs.core.seq(nodes);
var chunk__36003_36815 = null;
var count__36004_36816 = (0);
var i__36005_36817 = (0);
while(true){
if((i__36005_36817 < count__36004_36816)){
var node_36818 = chunk__36003_36815.cljs$core$IIndexed$_nth$arity$2(null,i__36005_36817);
fragment.appendChild(shadow.dom._to_dom(node_36818));


var G__36819 = seq__36002_36814;
var G__36820 = chunk__36003_36815;
var G__36821 = count__36004_36816;
var G__36822 = (i__36005_36817 + (1));
seq__36002_36814 = G__36819;
chunk__36003_36815 = G__36820;
count__36004_36816 = G__36821;
i__36005_36817 = G__36822;
continue;
} else {
var temp__5735__auto___36823 = cljs.core.seq(seq__36002_36814);
if(temp__5735__auto___36823){
var seq__36002_36824__$1 = temp__5735__auto___36823;
if(cljs.core.chunked_seq_QMARK_(seq__36002_36824__$1)){
var c__4609__auto___36825 = cljs.core.chunk_first(seq__36002_36824__$1);
var G__36826 = cljs.core.chunk_rest(seq__36002_36824__$1);
var G__36827 = c__4609__auto___36825;
var G__36828 = cljs.core.count(c__4609__auto___36825);
var G__36829 = (0);
seq__36002_36814 = G__36826;
chunk__36003_36815 = G__36827;
count__36004_36816 = G__36828;
i__36005_36817 = G__36829;
continue;
} else {
var node_36830 = cljs.core.first(seq__36002_36824__$1);
fragment.appendChild(shadow.dom._to_dom(node_36830));


var G__36831 = cljs.core.next(seq__36002_36824__$1);
var G__36832 = null;
var G__36833 = (0);
var G__36834 = (0);
seq__36002_36814 = G__36831;
chunk__36003_36815 = G__36832;
count__36004_36816 = G__36833;
i__36005_36817 = G__36834;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36001){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36001));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36024_36835 = cljs.core.seq(scripts);
var chunk__36025_36836 = null;
var count__36026_36837 = (0);
var i__36027_36838 = (0);
while(true){
if((i__36027_36838 < count__36026_36837)){
var vec__36052_36839 = chunk__36025_36836.cljs$core$IIndexed$_nth$arity$2(null,i__36027_36838);
var script_tag_36840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052_36839,(0),null);
var script_body_36841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052_36839,(1),null);
eval(script_body_36841);


var G__36842 = seq__36024_36835;
var G__36843 = chunk__36025_36836;
var G__36844 = count__36026_36837;
var G__36845 = (i__36027_36838 + (1));
seq__36024_36835 = G__36842;
chunk__36025_36836 = G__36843;
count__36026_36837 = G__36844;
i__36027_36838 = G__36845;
continue;
} else {
var temp__5735__auto___36846 = cljs.core.seq(seq__36024_36835);
if(temp__5735__auto___36846){
var seq__36024_36847__$1 = temp__5735__auto___36846;
if(cljs.core.chunked_seq_QMARK_(seq__36024_36847__$1)){
var c__4609__auto___36848 = cljs.core.chunk_first(seq__36024_36847__$1);
var G__36849 = cljs.core.chunk_rest(seq__36024_36847__$1);
var G__36850 = c__4609__auto___36848;
var G__36851 = cljs.core.count(c__4609__auto___36848);
var G__36852 = (0);
seq__36024_36835 = G__36849;
chunk__36025_36836 = G__36850;
count__36026_36837 = G__36851;
i__36027_36838 = G__36852;
continue;
} else {
var vec__36062_36853 = cljs.core.first(seq__36024_36847__$1);
var script_tag_36854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062_36853,(0),null);
var script_body_36855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062_36853,(1),null);
eval(script_body_36855);


var G__36856 = cljs.core.next(seq__36024_36847__$1);
var G__36857 = null;
var G__36858 = (0);
var G__36859 = (0);
seq__36024_36835 = G__36856;
chunk__36025_36836 = G__36857;
count__36026_36837 = G__36858;
i__36027_36838 = G__36859;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36065){
var vec__36066 = p__36065;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(1),null);
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
var G__36074 = shadow.dom.dom_node(el);
var G__36075 = cls;
return goog.dom.getAncestorByClass(G__36074,G__36075);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36078 = arguments.length;
switch (G__36078) {
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
var G__36081 = shadow.dom.dom_node(el);
var G__36082 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__36081,G__36082);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__36085 = shadow.dom.dom_node(el);
var G__36086 = cljs.core.name(tag);
var G__36087 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__36085,G__36086,G__36087);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__36090 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__36090);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__36095 = shadow.dom.dom_node(dom);
var G__36096 = value;
return goog.dom.forms.setValue(G__36095,G__36096);
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
var seq__36149 = cljs.core.seq(style_keys);
var chunk__36150 = null;
var count__36151 = (0);
var i__36152 = (0);
while(true){
if((i__36152 < count__36151)){
var it = chunk__36150.cljs$core$IIndexed$_nth$arity$2(null,i__36152);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36861 = seq__36149;
var G__36862 = chunk__36150;
var G__36863 = count__36151;
var G__36864 = (i__36152 + (1));
seq__36149 = G__36861;
chunk__36150 = G__36862;
count__36151 = G__36863;
i__36152 = G__36864;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36149);
if(temp__5735__auto__){
var seq__36149__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36149__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36149__$1);
var G__36865 = cljs.core.chunk_rest(seq__36149__$1);
var G__36866 = c__4609__auto__;
var G__36867 = cljs.core.count(c__4609__auto__);
var G__36868 = (0);
seq__36149 = G__36865;
chunk__36150 = G__36866;
count__36151 = G__36867;
i__36152 = G__36868;
continue;
} else {
var it = cljs.core.first(seq__36149__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36869 = cljs.core.next(seq__36149__$1);
var G__36870 = null;
var G__36871 = (0);
var G__36872 = (0);
seq__36149 = G__36869;
chunk__36150 = G__36870;
count__36151 = G__36871;
i__36152 = G__36872;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k36189,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__36194 = k36189;
var G__36194__$1 = (((G__36194 instanceof cljs.core.Keyword))?G__36194.fqn:null);
switch (G__36194__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36189,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__36210){
var vec__36211 = p__36210;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36211,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36211,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36188){
var self__ = this;
var G__36188__$1 = this;
return (new cljs.core.RecordIter((0),G__36188__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__36224 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__36224(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36190,other36191){
var self__ = this;
var this36190__$1 = this;
return (((!((other36191 == null)))) && ((this36190__$1.constructor === other36191.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36190__$1.x,other36191.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36190__$1.y,other36191.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36190__$1.__extmap,other36191.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__36188){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__36234 = cljs.core.keyword_identical_QMARK_;
var expr__36235 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__36237 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__36238 = expr__36235;
return (pred__36234.cljs$core$IFn$_invoke$arity$2 ? pred__36234.cljs$core$IFn$_invoke$arity$2(G__36237,G__36238) : pred__36234.call(null,G__36237,G__36238));
})())){
return (new shadow.dom.Coordinate(G__36188,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36239 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__36240 = expr__36235;
return (pred__36234.cljs$core$IFn$_invoke$arity$2 ? pred__36234.cljs$core$IFn$_invoke$arity$2(G__36239,G__36240) : pred__36234.call(null,G__36239,G__36240));
})())){
return (new shadow.dom.Coordinate(self__.x,G__36188,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__36188),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__36188){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36188,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36192){
var extmap__4478__auto__ = (function (){var G__36241 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36192,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36192)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36241);
} else {
return G__36241;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36192),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36192),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__36242 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__36242);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__36243 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__36243);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__36257 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__36257);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k36260,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__36264 = k36260;
var G__36264__$1 = (((G__36264 instanceof cljs.core.Keyword))?G__36264.fqn:null);
switch (G__36264__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36260,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__36265){
var vec__36266 = p__36265;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36266,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36266,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36259){
var self__ = this;
var G__36259__$1 = this;
return (new cljs.core.RecordIter((0),G__36259__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__36276 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__36276(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36261,other36262){
var self__ = this;
var this36261__$1 = this;
return (((!((other36262 == null)))) && ((this36261__$1.constructor === other36262.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36261__$1.w,other36262.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36261__$1.h,other36262.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36261__$1.__extmap,other36262.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__36259){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__36279 = cljs.core.keyword_identical_QMARK_;
var expr__36280 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__36282 = new cljs.core.Keyword(null,"w","w",354169001);
var G__36283 = expr__36280;
return (pred__36279.cljs$core$IFn$_invoke$arity$2 ? pred__36279.cljs$core$IFn$_invoke$arity$2(G__36282,G__36283) : pred__36279.call(null,G__36282,G__36283));
})())){
return (new shadow.dom.Size(G__36259,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36284 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__36285 = expr__36280;
return (pred__36279.cljs$core$IFn$_invoke$arity$2 ? pred__36279.cljs$core$IFn$_invoke$arity$2(G__36284,G__36285) : pred__36279.call(null,G__36284,G__36285));
})())){
return (new shadow.dom.Size(self__.w,G__36259,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__36259),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__36259){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36259,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36263){
var extmap__4478__auto__ = (function (){var G__36341 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36263,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36263)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36341);
} else {
return G__36341;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36263),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36263),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__36343 = shadow.dom.dom_node(el);
return goog.style.getSize(G__36343);
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
var G__36885 = (i + (1));
var G__36886 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36885;
ret = G__36886;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36416){
var vec__36417 = p__36416;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36442 = arguments.length;
switch (G__36442) {
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
var G__36450_36888 = new_node;
var G__36451_36889 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__36450_36888,G__36451_36889);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__36452_36890 = new_node;
var G__36453_36891 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__36452_36890,G__36453_36891);

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
var G__36892 = ps;
var G__36893 = (i + (1));
el__$1 = G__36892;
i = G__36893;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__36476 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__36476);
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
var G__36477 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__36477);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__36478 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__36478);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36479 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36479,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36479,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36479,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36482_36894 = cljs.core.seq(props);
var chunk__36483_36895 = null;
var count__36484_36896 = (0);
var i__36485_36897 = (0);
while(true){
if((i__36485_36897 < count__36484_36896)){
var vec__36513_36898 = chunk__36483_36895.cljs$core$IIndexed$_nth$arity$2(null,i__36485_36897);
var k_36899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36513_36898,(0),null);
var v_36900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36513_36898,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36899);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36899),v_36900);


var G__36901 = seq__36482_36894;
var G__36902 = chunk__36483_36895;
var G__36903 = count__36484_36896;
var G__36904 = (i__36485_36897 + (1));
seq__36482_36894 = G__36901;
chunk__36483_36895 = G__36902;
count__36484_36896 = G__36903;
i__36485_36897 = G__36904;
continue;
} else {
var temp__5735__auto___36905 = cljs.core.seq(seq__36482_36894);
if(temp__5735__auto___36905){
var seq__36482_36906__$1 = temp__5735__auto___36905;
if(cljs.core.chunked_seq_QMARK_(seq__36482_36906__$1)){
var c__4609__auto___36907 = cljs.core.chunk_first(seq__36482_36906__$1);
var G__36908 = cljs.core.chunk_rest(seq__36482_36906__$1);
var G__36909 = c__4609__auto___36907;
var G__36910 = cljs.core.count(c__4609__auto___36907);
var G__36911 = (0);
seq__36482_36894 = G__36908;
chunk__36483_36895 = G__36909;
count__36484_36896 = G__36910;
i__36485_36897 = G__36911;
continue;
} else {
var vec__36516_36912 = cljs.core.first(seq__36482_36906__$1);
var k_36913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36516_36912,(0),null);
var v_36914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36516_36912,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36913);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36913),v_36914);


var G__36915 = cljs.core.next(seq__36482_36906__$1);
var G__36916 = null;
var G__36917 = (0);
var G__36918 = (0);
seq__36482_36894 = G__36915;
chunk__36483_36895 = G__36916;
count__36484_36896 = G__36917;
i__36485_36897 = G__36918;
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
var vec__36545 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36545,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36545,(1),null);
var seq__36549_36919 = cljs.core.seq(node_children);
var chunk__36551_36920 = null;
var count__36552_36921 = (0);
var i__36553_36922 = (0);
while(true){
if((i__36553_36922 < count__36552_36921)){
var child_struct_36923 = chunk__36551_36920.cljs$core$IIndexed$_nth$arity$2(null,i__36553_36922);
if((!((child_struct_36923 == null)))){
if(typeof child_struct_36923 === 'string'){
var text_36924 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36924),child_struct_36923].join(''));
} else {
var children_36925 = shadow.dom.svg_node(child_struct_36923);
if(cljs.core.seq_QMARK_(children_36925)){
var seq__36596_36926 = cljs.core.seq(children_36925);
var chunk__36598_36927 = null;
var count__36599_36928 = (0);
var i__36600_36929 = (0);
while(true){
if((i__36600_36929 < count__36599_36928)){
var child_36930 = chunk__36598_36927.cljs$core$IIndexed$_nth$arity$2(null,i__36600_36929);
if(cljs.core.truth_(child_36930)){
node.appendChild(child_36930);


var G__36931 = seq__36596_36926;
var G__36932 = chunk__36598_36927;
var G__36933 = count__36599_36928;
var G__36934 = (i__36600_36929 + (1));
seq__36596_36926 = G__36931;
chunk__36598_36927 = G__36932;
count__36599_36928 = G__36933;
i__36600_36929 = G__36934;
continue;
} else {
var G__36935 = seq__36596_36926;
var G__36936 = chunk__36598_36927;
var G__36937 = count__36599_36928;
var G__36938 = (i__36600_36929 + (1));
seq__36596_36926 = G__36935;
chunk__36598_36927 = G__36936;
count__36599_36928 = G__36937;
i__36600_36929 = G__36938;
continue;
}
} else {
var temp__5735__auto___36939 = cljs.core.seq(seq__36596_36926);
if(temp__5735__auto___36939){
var seq__36596_36940__$1 = temp__5735__auto___36939;
if(cljs.core.chunked_seq_QMARK_(seq__36596_36940__$1)){
var c__4609__auto___36941 = cljs.core.chunk_first(seq__36596_36940__$1);
var G__36942 = cljs.core.chunk_rest(seq__36596_36940__$1);
var G__36943 = c__4609__auto___36941;
var G__36944 = cljs.core.count(c__4609__auto___36941);
var G__36945 = (0);
seq__36596_36926 = G__36942;
chunk__36598_36927 = G__36943;
count__36599_36928 = G__36944;
i__36600_36929 = G__36945;
continue;
} else {
var child_36946 = cljs.core.first(seq__36596_36940__$1);
if(cljs.core.truth_(child_36946)){
node.appendChild(child_36946);


var G__36947 = cljs.core.next(seq__36596_36940__$1);
var G__36948 = null;
var G__36949 = (0);
var G__36950 = (0);
seq__36596_36926 = G__36947;
chunk__36598_36927 = G__36948;
count__36599_36928 = G__36949;
i__36600_36929 = G__36950;
continue;
} else {
var G__36951 = cljs.core.next(seq__36596_36940__$1);
var G__36952 = null;
var G__36953 = (0);
var G__36954 = (0);
seq__36596_36926 = G__36951;
chunk__36598_36927 = G__36952;
count__36599_36928 = G__36953;
i__36600_36929 = G__36954;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36925);
}
}


var G__36955 = seq__36549_36919;
var G__36956 = chunk__36551_36920;
var G__36957 = count__36552_36921;
var G__36958 = (i__36553_36922 + (1));
seq__36549_36919 = G__36955;
chunk__36551_36920 = G__36956;
count__36552_36921 = G__36957;
i__36553_36922 = G__36958;
continue;
} else {
var G__36959 = seq__36549_36919;
var G__36960 = chunk__36551_36920;
var G__36961 = count__36552_36921;
var G__36962 = (i__36553_36922 + (1));
seq__36549_36919 = G__36959;
chunk__36551_36920 = G__36960;
count__36552_36921 = G__36961;
i__36553_36922 = G__36962;
continue;
}
} else {
var temp__5735__auto___36963 = cljs.core.seq(seq__36549_36919);
if(temp__5735__auto___36963){
var seq__36549_36964__$1 = temp__5735__auto___36963;
if(cljs.core.chunked_seq_QMARK_(seq__36549_36964__$1)){
var c__4609__auto___36965 = cljs.core.chunk_first(seq__36549_36964__$1);
var G__36966 = cljs.core.chunk_rest(seq__36549_36964__$1);
var G__36967 = c__4609__auto___36965;
var G__36968 = cljs.core.count(c__4609__auto___36965);
var G__36969 = (0);
seq__36549_36919 = G__36966;
chunk__36551_36920 = G__36967;
count__36552_36921 = G__36968;
i__36553_36922 = G__36969;
continue;
} else {
var child_struct_36970 = cljs.core.first(seq__36549_36964__$1);
if((!((child_struct_36970 == null)))){
if(typeof child_struct_36970 === 'string'){
var text_36971 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36971),child_struct_36970].join(''));
} else {
var children_36972 = shadow.dom.svg_node(child_struct_36970);
if(cljs.core.seq_QMARK_(children_36972)){
var seq__36603_36973 = cljs.core.seq(children_36972);
var chunk__36605_36974 = null;
var count__36606_36975 = (0);
var i__36607_36976 = (0);
while(true){
if((i__36607_36976 < count__36606_36975)){
var child_36977 = chunk__36605_36974.cljs$core$IIndexed$_nth$arity$2(null,i__36607_36976);
if(cljs.core.truth_(child_36977)){
node.appendChild(child_36977);


var G__36978 = seq__36603_36973;
var G__36979 = chunk__36605_36974;
var G__36980 = count__36606_36975;
var G__36981 = (i__36607_36976 + (1));
seq__36603_36973 = G__36978;
chunk__36605_36974 = G__36979;
count__36606_36975 = G__36980;
i__36607_36976 = G__36981;
continue;
} else {
var G__36982 = seq__36603_36973;
var G__36983 = chunk__36605_36974;
var G__36984 = count__36606_36975;
var G__36985 = (i__36607_36976 + (1));
seq__36603_36973 = G__36982;
chunk__36605_36974 = G__36983;
count__36606_36975 = G__36984;
i__36607_36976 = G__36985;
continue;
}
} else {
var temp__5735__auto___36986__$1 = cljs.core.seq(seq__36603_36973);
if(temp__5735__auto___36986__$1){
var seq__36603_36987__$1 = temp__5735__auto___36986__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36603_36987__$1)){
var c__4609__auto___36988 = cljs.core.chunk_first(seq__36603_36987__$1);
var G__36989 = cljs.core.chunk_rest(seq__36603_36987__$1);
var G__36990 = c__4609__auto___36988;
var G__36991 = cljs.core.count(c__4609__auto___36988);
var G__36992 = (0);
seq__36603_36973 = G__36989;
chunk__36605_36974 = G__36990;
count__36606_36975 = G__36991;
i__36607_36976 = G__36992;
continue;
} else {
var child_36993 = cljs.core.first(seq__36603_36987__$1);
if(cljs.core.truth_(child_36993)){
node.appendChild(child_36993);


var G__36994 = cljs.core.next(seq__36603_36987__$1);
var G__36995 = null;
var G__36996 = (0);
var G__36997 = (0);
seq__36603_36973 = G__36994;
chunk__36605_36974 = G__36995;
count__36606_36975 = G__36996;
i__36607_36976 = G__36997;
continue;
} else {
var G__36998 = cljs.core.next(seq__36603_36987__$1);
var G__36999 = null;
var G__37000 = (0);
var G__37001 = (0);
seq__36603_36973 = G__36998;
chunk__36605_36974 = G__36999;
count__36606_36975 = G__37000;
i__36607_36976 = G__37001;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36972);
}
}


var G__37002 = cljs.core.next(seq__36549_36964__$1);
var G__37003 = null;
var G__37004 = (0);
var G__37005 = (0);
seq__36549_36919 = G__37002;
chunk__36551_36920 = G__37003;
count__36552_36921 = G__37004;
i__36553_36922 = G__37005;
continue;
} else {
var G__37006 = cljs.core.next(seq__36549_36964__$1);
var G__37007 = null;
var G__37008 = (0);
var G__37009 = (0);
seq__36549_36919 = G__37006;
chunk__36551_36920 = G__37007;
count__36552_36921 = G__37008;
i__36553_36922 = G__37009;
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

var G__36616_37010 = shadow.dom._to_svg;
var G__36617_37011 = "string";
var G__36618_37012 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__36616_37010,G__36617_37011,G__36618_37012);

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

var G__36626_37013 = shadow.dom._to_svg;
var G__36627_37014 = "null";
var G__36628_37015 = (function (_){
return null;
});
goog.object.set(G__36626_37013,G__36627_37014,G__36628_37015);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37016 = arguments.length;
var i__4790__auto___37017 = (0);
while(true){
if((i__4790__auto___37017 < len__4789__auto___37016)){
args__4795__auto__.push((arguments[i__4790__auto___37017]));

var G__37018 = (i__4790__auto___37017 + (1));
i__4790__auto___37017 = G__37018;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36629){
var G__36630 = cljs.core.first(seq36629);
var seq36629__$1 = cljs.core.next(seq36629);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36630,seq36629__$1);
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
var G__36632 = arguments.length;
switch (G__36632) {
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
var G__36633_37020 = shadow.dom.dom_node(el);
var G__36634_37021 = cljs.core.name(event);
var G__36635_37022 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__36633_37020,G__36634_37021,G__36635_37022) : shadow.dom.dom_listen.call(null,G__36633_37020,G__36634_37021,G__36635_37022));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__33209__auto___37023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33210__auto__ = (function (){var switch__32821__auto__ = (function (state_36640){
var state_val_36641 = (state_36640[(1)]);
if((state_val_36641 === (1))){
var state_36640__$1 = state_36640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36640__$1,(2),once_or_cleanup);
} else {
if((state_val_36641 === (2))){
var inst_36637 = (state_36640[(2)]);
var inst_36638 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36640__$1 = (function (){var statearr_36642 = state_36640;
(statearr_36642[(7)] = inst_36637);

return statearr_36642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36640__$1,inst_36638);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32822__auto__ = null;
var shadow$dom$state_machine__32822__auto____0 = (function (){
var statearr_36643 = [null,null,null,null,null,null,null,null];
(statearr_36643[(0)] = shadow$dom$state_machine__32822__auto__);

(statearr_36643[(1)] = (1));

return statearr_36643;
});
var shadow$dom$state_machine__32822__auto____1 = (function (state_36640){
while(true){
var ret_value__32823__auto__ = (function (){try{while(true){
var result__32824__auto__ = switch__32821__auto__(state_36640);
if(cljs.core.keyword_identical_QMARK_(result__32824__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32824__auto__;
}
break;
}
}catch (e36644){if((e36644 instanceof Object)){
var ex__32825__auto__ = e36644;
var statearr_36645_37024 = state_36640;
(statearr_36645_37024[(5)] = ex__32825__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36644;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37025 = state_36640;
state_36640 = G__37025;
continue;
} else {
return ret_value__32823__auto__;
}
break;
}
});
shadow$dom$state_machine__32822__auto__ = function(state_36640){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32822__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32822__auto____1.call(this,state_36640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32822__auto____0;
shadow$dom$state_machine__32822__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32822__auto____1;
return shadow$dom$state_machine__32822__auto__;
})()
})();
var state__33211__auto__ = (function (){var statearr_36646 = (f__33210__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33210__auto__.cljs$core$IFn$_invoke$arity$0() : f__33210__auto__.call(null));
(statearr_36646[(6)] = c__33209__auto___37023);

return statearr_36646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33211__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
