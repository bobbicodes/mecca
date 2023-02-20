goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50841 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_50841(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50842 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_50842(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50399 = coll;
var G__50400 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50399,G__50400) : shadow.dom.lazy_native_coll_seq.call(null,G__50399,G__50400));
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
var G__50412 = arguments.length;
switch (G__50412) {
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
var G__50420 = arguments.length;
switch (G__50420) {
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
var G__50422 = arguments.length;
switch (G__50422) {
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
var G__50424 = arguments.length;
switch (G__50424) {
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
var G__50426 = arguments.length;
switch (G__50426) {
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
var G__50428 = arguments.length;
switch (G__50428) {
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
}catch (e50475){if((e50475 instanceof Object)){
var e = e50475;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50475;

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
var seq__50476 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50477 = null;
var count__50478 = (0);
var i__50479 = (0);
while(true){
if((i__50479 < count__50478)){
var el = chunk__50477.cljs$core$IIndexed$_nth$arity$2(null,i__50479);
var handler_50860__$1 = ((function (seq__50476,chunk__50477,count__50478,i__50479,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50476,chunk__50477,count__50478,i__50479,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50860__$1);


var G__50861 = seq__50476;
var G__50862 = chunk__50477;
var G__50863 = count__50478;
var G__50864 = (i__50479 + (1));
seq__50476 = G__50861;
chunk__50477 = G__50862;
count__50478 = G__50863;
i__50479 = G__50864;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50476);
if(temp__5753__auto__){
var seq__50476__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50476__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50476__$1);
var G__50865 = cljs.core.chunk_rest(seq__50476__$1);
var G__50866 = c__4649__auto__;
var G__50867 = cljs.core.count(c__4649__auto__);
var G__50868 = (0);
seq__50476 = G__50865;
chunk__50477 = G__50866;
count__50478 = G__50867;
i__50479 = G__50868;
continue;
} else {
var el = cljs.core.first(seq__50476__$1);
var handler_50869__$1 = ((function (seq__50476,chunk__50477,count__50478,i__50479,el,seq__50476__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50476,chunk__50477,count__50478,i__50479,el,seq__50476__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50869__$1);


var G__50872 = cljs.core.next(seq__50476__$1);
var G__50873 = null;
var G__50874 = (0);
var G__50875 = (0);
seq__50476 = G__50872;
chunk__50477 = G__50873;
count__50478 = G__50874;
i__50479 = G__50875;
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
var G__50494 = arguments.length;
switch (G__50494) {
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
var seq__50495 = cljs.core.seq(events);
var chunk__50496 = null;
var count__50497 = (0);
var i__50498 = (0);
while(true){
if((i__50498 < count__50497)){
var vec__50505 = chunk__50496.cljs$core$IIndexed$_nth$arity$2(null,i__50498);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50505,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50877 = seq__50495;
var G__50878 = chunk__50496;
var G__50879 = count__50497;
var G__50880 = (i__50498 + (1));
seq__50495 = G__50877;
chunk__50496 = G__50878;
count__50497 = G__50879;
i__50498 = G__50880;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50495);
if(temp__5753__auto__){
var seq__50495__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50495__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50495__$1);
var G__50881 = cljs.core.chunk_rest(seq__50495__$1);
var G__50882 = c__4649__auto__;
var G__50883 = cljs.core.count(c__4649__auto__);
var G__50884 = (0);
seq__50495 = G__50881;
chunk__50496 = G__50882;
count__50497 = G__50883;
i__50498 = G__50884;
continue;
} else {
var vec__50508 = cljs.core.first(seq__50495__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50508,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50508,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50885 = cljs.core.next(seq__50495__$1);
var G__50886 = null;
var G__50887 = (0);
var G__50888 = (0);
seq__50495 = G__50885;
chunk__50496 = G__50886;
count__50497 = G__50887;
i__50498 = G__50888;
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
var seq__50517 = cljs.core.seq(styles);
var chunk__50518 = null;
var count__50519 = (0);
var i__50520 = (0);
while(true){
if((i__50520 < count__50519)){
var vec__50529 = chunk__50518.cljs$core$IIndexed$_nth$arity$2(null,i__50520);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50529,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50529,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50889 = seq__50517;
var G__50890 = chunk__50518;
var G__50891 = count__50519;
var G__50892 = (i__50520 + (1));
seq__50517 = G__50889;
chunk__50518 = G__50890;
count__50519 = G__50891;
i__50520 = G__50892;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50517);
if(temp__5753__auto__){
var seq__50517__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50517__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50517__$1);
var G__50893 = cljs.core.chunk_rest(seq__50517__$1);
var G__50894 = c__4649__auto__;
var G__50895 = cljs.core.count(c__4649__auto__);
var G__50896 = (0);
seq__50517 = G__50893;
chunk__50518 = G__50894;
count__50519 = G__50895;
i__50520 = G__50896;
continue;
} else {
var vec__50534 = cljs.core.first(seq__50517__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50534,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50897 = cljs.core.next(seq__50517__$1);
var G__50898 = null;
var G__50899 = (0);
var G__50900 = (0);
seq__50517 = G__50897;
chunk__50518 = G__50898;
count__50519 = G__50899;
i__50520 = G__50900;
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
var G__50543_50901 = key;
var G__50543_50902__$1 = (((G__50543_50901 instanceof cljs.core.Keyword))?G__50543_50901.fqn:null);
switch (G__50543_50902__$1) {
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
var ks_50909 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_50909,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_50909,"aria-");
}
})())){
el.setAttribute(ks_50909,value);
} else {
(el[ks_50909] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50550){
var map__50551 = p__50550;
var map__50551__$1 = cljs.core.__destructure_map(map__50551);
var props = map__50551__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50551__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50552 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50552,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50552,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50552,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50555 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50555,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50555;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50557 = arguments.length;
switch (G__50557) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50558){
var vec__50559 = p__50558;
var seq__50560 = cljs.core.seq(vec__50559);
var first__50561 = cljs.core.first(seq__50560);
var seq__50560__$1 = cljs.core.next(seq__50560);
var nn = first__50561;
var first__50561__$1 = cljs.core.first(seq__50560__$1);
var seq__50560__$2 = cljs.core.next(seq__50560__$1);
var np = first__50561__$1;
var nc = seq__50560__$2;
var node = vec__50559;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50562 = nn;
var G__50563 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50562,G__50563) : create_fn.call(null,G__50562,G__50563));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50564 = nn;
var G__50565 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50564,G__50565) : create_fn.call(null,G__50564,G__50565));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50566 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50566,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50566,(1),null);
var seq__50569_50915 = cljs.core.seq(node_children);
var chunk__50570_50916 = null;
var count__50571_50917 = (0);
var i__50572_50918 = (0);
while(true){
if((i__50572_50918 < count__50571_50917)){
var child_struct_50919 = chunk__50570_50916.cljs$core$IIndexed$_nth$arity$2(null,i__50572_50918);
var children_50920 = shadow.dom.dom_node(child_struct_50919);
if(cljs.core.seq_QMARK_(children_50920)){
var seq__50585_50921 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50920));
var chunk__50587_50922 = null;
var count__50588_50923 = (0);
var i__50589_50924 = (0);
while(true){
if((i__50589_50924 < count__50588_50923)){
var child_50925 = chunk__50587_50922.cljs$core$IIndexed$_nth$arity$2(null,i__50589_50924);
if(cljs.core.truth_(child_50925)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50925);


var G__50926 = seq__50585_50921;
var G__50927 = chunk__50587_50922;
var G__50928 = count__50588_50923;
var G__50929 = (i__50589_50924 + (1));
seq__50585_50921 = G__50926;
chunk__50587_50922 = G__50927;
count__50588_50923 = G__50928;
i__50589_50924 = G__50929;
continue;
} else {
var G__50930 = seq__50585_50921;
var G__50931 = chunk__50587_50922;
var G__50932 = count__50588_50923;
var G__50933 = (i__50589_50924 + (1));
seq__50585_50921 = G__50930;
chunk__50587_50922 = G__50931;
count__50588_50923 = G__50932;
i__50589_50924 = G__50933;
continue;
}
} else {
var temp__5753__auto___50934 = cljs.core.seq(seq__50585_50921);
if(temp__5753__auto___50934){
var seq__50585_50935__$1 = temp__5753__auto___50934;
if(cljs.core.chunked_seq_QMARK_(seq__50585_50935__$1)){
var c__4649__auto___50936 = cljs.core.chunk_first(seq__50585_50935__$1);
var G__50937 = cljs.core.chunk_rest(seq__50585_50935__$1);
var G__50938 = c__4649__auto___50936;
var G__50939 = cljs.core.count(c__4649__auto___50936);
var G__50940 = (0);
seq__50585_50921 = G__50937;
chunk__50587_50922 = G__50938;
count__50588_50923 = G__50939;
i__50589_50924 = G__50940;
continue;
} else {
var child_50941 = cljs.core.first(seq__50585_50935__$1);
if(cljs.core.truth_(child_50941)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50941);


var G__50942 = cljs.core.next(seq__50585_50935__$1);
var G__50943 = null;
var G__50944 = (0);
var G__50945 = (0);
seq__50585_50921 = G__50942;
chunk__50587_50922 = G__50943;
count__50588_50923 = G__50944;
i__50589_50924 = G__50945;
continue;
} else {
var G__50946 = cljs.core.next(seq__50585_50935__$1);
var G__50947 = null;
var G__50948 = (0);
var G__50949 = (0);
seq__50585_50921 = G__50946;
chunk__50587_50922 = G__50947;
count__50588_50923 = G__50948;
i__50589_50924 = G__50949;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50920);
}


var G__50950 = seq__50569_50915;
var G__50951 = chunk__50570_50916;
var G__50952 = count__50571_50917;
var G__50953 = (i__50572_50918 + (1));
seq__50569_50915 = G__50950;
chunk__50570_50916 = G__50951;
count__50571_50917 = G__50952;
i__50572_50918 = G__50953;
continue;
} else {
var temp__5753__auto___50954 = cljs.core.seq(seq__50569_50915);
if(temp__5753__auto___50954){
var seq__50569_50955__$1 = temp__5753__auto___50954;
if(cljs.core.chunked_seq_QMARK_(seq__50569_50955__$1)){
var c__4649__auto___50956 = cljs.core.chunk_first(seq__50569_50955__$1);
var G__50957 = cljs.core.chunk_rest(seq__50569_50955__$1);
var G__50958 = c__4649__auto___50956;
var G__50959 = cljs.core.count(c__4649__auto___50956);
var G__50960 = (0);
seq__50569_50915 = G__50957;
chunk__50570_50916 = G__50958;
count__50571_50917 = G__50959;
i__50572_50918 = G__50960;
continue;
} else {
var child_struct_50961 = cljs.core.first(seq__50569_50955__$1);
var children_50962 = shadow.dom.dom_node(child_struct_50961);
if(cljs.core.seq_QMARK_(children_50962)){
var seq__50591_50963 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50962));
var chunk__50593_50964 = null;
var count__50594_50965 = (0);
var i__50595_50966 = (0);
while(true){
if((i__50595_50966 < count__50594_50965)){
var child_50967 = chunk__50593_50964.cljs$core$IIndexed$_nth$arity$2(null,i__50595_50966);
if(cljs.core.truth_(child_50967)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50967);


var G__50968 = seq__50591_50963;
var G__50969 = chunk__50593_50964;
var G__50970 = count__50594_50965;
var G__50971 = (i__50595_50966 + (1));
seq__50591_50963 = G__50968;
chunk__50593_50964 = G__50969;
count__50594_50965 = G__50970;
i__50595_50966 = G__50971;
continue;
} else {
var G__50972 = seq__50591_50963;
var G__50973 = chunk__50593_50964;
var G__50974 = count__50594_50965;
var G__50975 = (i__50595_50966 + (1));
seq__50591_50963 = G__50972;
chunk__50593_50964 = G__50973;
count__50594_50965 = G__50974;
i__50595_50966 = G__50975;
continue;
}
} else {
var temp__5753__auto___50976__$1 = cljs.core.seq(seq__50591_50963);
if(temp__5753__auto___50976__$1){
var seq__50591_50977__$1 = temp__5753__auto___50976__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50591_50977__$1)){
var c__4649__auto___50978 = cljs.core.chunk_first(seq__50591_50977__$1);
var G__50979 = cljs.core.chunk_rest(seq__50591_50977__$1);
var G__50980 = c__4649__auto___50978;
var G__50981 = cljs.core.count(c__4649__auto___50978);
var G__50982 = (0);
seq__50591_50963 = G__50979;
chunk__50593_50964 = G__50980;
count__50594_50965 = G__50981;
i__50595_50966 = G__50982;
continue;
} else {
var child_50983 = cljs.core.first(seq__50591_50977__$1);
if(cljs.core.truth_(child_50983)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50983);


var G__50984 = cljs.core.next(seq__50591_50977__$1);
var G__50985 = null;
var G__50986 = (0);
var G__50987 = (0);
seq__50591_50963 = G__50984;
chunk__50593_50964 = G__50985;
count__50594_50965 = G__50986;
i__50595_50966 = G__50987;
continue;
} else {
var G__50988 = cljs.core.next(seq__50591_50977__$1);
var G__50989 = null;
var G__50990 = (0);
var G__50991 = (0);
seq__50591_50963 = G__50988;
chunk__50593_50964 = G__50989;
count__50594_50965 = G__50990;
i__50595_50966 = G__50991;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50962);
}


var G__50992 = cljs.core.next(seq__50569_50955__$1);
var G__50993 = null;
var G__50994 = (0);
var G__50995 = (0);
seq__50569_50915 = G__50992;
chunk__50570_50916 = G__50993;
count__50571_50917 = G__50994;
i__50572_50918 = G__50995;
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
var seq__50598 = cljs.core.seq(node);
var chunk__50599 = null;
var count__50600 = (0);
var i__50601 = (0);
while(true){
if((i__50601 < count__50600)){
var n = chunk__50599.cljs$core$IIndexed$_nth$arity$2(null,i__50601);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50996 = seq__50598;
var G__50997 = chunk__50599;
var G__50998 = count__50600;
var G__50999 = (i__50601 + (1));
seq__50598 = G__50996;
chunk__50599 = G__50997;
count__50600 = G__50998;
i__50601 = G__50999;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50598);
if(temp__5753__auto__){
var seq__50598__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50598__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50598__$1);
var G__51000 = cljs.core.chunk_rest(seq__50598__$1);
var G__51001 = c__4649__auto__;
var G__51002 = cljs.core.count(c__4649__auto__);
var G__51003 = (0);
seq__50598 = G__51000;
chunk__50599 = G__51001;
count__50600 = G__51002;
i__50601 = G__51003;
continue;
} else {
var n = cljs.core.first(seq__50598__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51004 = cljs.core.next(seq__50598__$1);
var G__51005 = null;
var G__51006 = (0);
var G__51007 = (0);
seq__50598 = G__51004;
chunk__50599 = G__51005;
count__50600 = G__51006;
i__50601 = G__51007;
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
var G__50603 = arguments.length;
switch (G__50603) {
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
var G__50605 = arguments.length;
switch (G__50605) {
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
var G__50611 = arguments.length;
switch (G__50611) {
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
var len__4829__auto___51017 = arguments.length;
var i__4830__auto___51018 = (0);
while(true){
if((i__4830__auto___51018 < len__4829__auto___51017)){
args__4835__auto__.push((arguments[i__4830__auto___51018]));

var G__51019 = (i__4830__auto___51018 + (1));
i__4830__auto___51018 = G__51019;
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
var seq__50614_51020 = cljs.core.seq(nodes);
var chunk__50615_51021 = null;
var count__50616_51022 = (0);
var i__50617_51023 = (0);
while(true){
if((i__50617_51023 < count__50616_51022)){
var node_51025 = chunk__50615_51021.cljs$core$IIndexed$_nth$arity$2(null,i__50617_51023);
fragment.appendChild(shadow.dom._to_dom(node_51025));


var G__51026 = seq__50614_51020;
var G__51027 = chunk__50615_51021;
var G__51028 = count__50616_51022;
var G__51029 = (i__50617_51023 + (1));
seq__50614_51020 = G__51026;
chunk__50615_51021 = G__51027;
count__50616_51022 = G__51028;
i__50617_51023 = G__51029;
continue;
} else {
var temp__5753__auto___51030 = cljs.core.seq(seq__50614_51020);
if(temp__5753__auto___51030){
var seq__50614_51031__$1 = temp__5753__auto___51030;
if(cljs.core.chunked_seq_QMARK_(seq__50614_51031__$1)){
var c__4649__auto___51032 = cljs.core.chunk_first(seq__50614_51031__$1);
var G__51033 = cljs.core.chunk_rest(seq__50614_51031__$1);
var G__51034 = c__4649__auto___51032;
var G__51035 = cljs.core.count(c__4649__auto___51032);
var G__51036 = (0);
seq__50614_51020 = G__51033;
chunk__50615_51021 = G__51034;
count__50616_51022 = G__51035;
i__50617_51023 = G__51036;
continue;
} else {
var node_51037 = cljs.core.first(seq__50614_51031__$1);
fragment.appendChild(shadow.dom._to_dom(node_51037));


var G__51038 = cljs.core.next(seq__50614_51031__$1);
var G__51039 = null;
var G__51040 = (0);
var G__51041 = (0);
seq__50614_51020 = G__51038;
chunk__50615_51021 = G__51039;
count__50616_51022 = G__51040;
i__50617_51023 = G__51041;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50613){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50613));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50618_51042 = cljs.core.seq(scripts);
var chunk__50619_51043 = null;
var count__50620_51044 = (0);
var i__50621_51045 = (0);
while(true){
if((i__50621_51045 < count__50620_51044)){
var vec__50628_51046 = chunk__50619_51043.cljs$core$IIndexed$_nth$arity$2(null,i__50621_51045);
var script_tag_51047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50628_51046,(0),null);
var script_body_51048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50628_51046,(1),null);
eval(script_body_51048);


var G__51049 = seq__50618_51042;
var G__51050 = chunk__50619_51043;
var G__51051 = count__50620_51044;
var G__51052 = (i__50621_51045 + (1));
seq__50618_51042 = G__51049;
chunk__50619_51043 = G__51050;
count__50620_51044 = G__51051;
i__50621_51045 = G__51052;
continue;
} else {
var temp__5753__auto___51053 = cljs.core.seq(seq__50618_51042);
if(temp__5753__auto___51053){
var seq__50618_51054__$1 = temp__5753__auto___51053;
if(cljs.core.chunked_seq_QMARK_(seq__50618_51054__$1)){
var c__4649__auto___51055 = cljs.core.chunk_first(seq__50618_51054__$1);
var G__51056 = cljs.core.chunk_rest(seq__50618_51054__$1);
var G__51057 = c__4649__auto___51055;
var G__51058 = cljs.core.count(c__4649__auto___51055);
var G__51059 = (0);
seq__50618_51042 = G__51056;
chunk__50619_51043 = G__51057;
count__50620_51044 = G__51058;
i__50621_51045 = G__51059;
continue;
} else {
var vec__50631_51060 = cljs.core.first(seq__50618_51054__$1);
var script_tag_51061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50631_51060,(0),null);
var script_body_51062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50631_51060,(1),null);
eval(script_body_51062);


var G__51063 = cljs.core.next(seq__50618_51054__$1);
var G__51064 = null;
var G__51065 = (0);
var G__51066 = (0);
seq__50618_51042 = G__51063;
chunk__50619_51043 = G__51064;
count__50620_51044 = G__51065;
i__50621_51045 = G__51066;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50634){
var vec__50635 = p__50634;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50635,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50635,(1),null);
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
var G__50639 = arguments.length;
switch (G__50639) {
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
var seq__50640 = cljs.core.seq(style_keys);
var chunk__50641 = null;
var count__50642 = (0);
var i__50643 = (0);
while(true){
if((i__50643 < count__50642)){
var it = chunk__50641.cljs$core$IIndexed$_nth$arity$2(null,i__50643);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51074 = seq__50640;
var G__51075 = chunk__50641;
var G__51076 = count__50642;
var G__51077 = (i__50643 + (1));
seq__50640 = G__51074;
chunk__50641 = G__51075;
count__50642 = G__51076;
i__50643 = G__51077;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50640);
if(temp__5753__auto__){
var seq__50640__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50640__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50640__$1);
var G__51078 = cljs.core.chunk_rest(seq__50640__$1);
var G__51079 = c__4649__auto__;
var G__51080 = cljs.core.count(c__4649__auto__);
var G__51081 = (0);
seq__50640 = G__51078;
chunk__50641 = G__51079;
count__50642 = G__51080;
i__50643 = G__51081;
continue;
} else {
var it = cljs.core.first(seq__50640__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51082 = cljs.core.next(seq__50640__$1);
var G__51083 = null;
var G__51084 = (0);
var G__51085 = (0);
seq__50640 = G__51082;
chunk__50641 = G__51083;
count__50642 = G__51084;
i__50643 = G__51085;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50645,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50649 = k50645;
var G__50649__$1 = (((G__50649 instanceof cljs.core.Keyword))?G__50649.fqn:null);
switch (G__50649__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50645,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50650){
var vec__50651 = p__50650;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50651,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50651,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50644){
var self__ = this;
var G__50644__$1 = this;
return (new cljs.core.RecordIter((0),G__50644__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50646,other50647){
var self__ = this;
var this50646__$1 = this;
return (((!((other50647 == null)))) && ((((this50646__$1.constructor === other50647.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50646__$1.x,other50647.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50646__$1.y,other50647.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50646__$1.__extmap,other50647.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50645){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50654 = k50645;
var G__50654__$1 = (((G__50654 instanceof cljs.core.Keyword))?G__50654.fqn:null);
switch (G__50654__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50645);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50644){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50655 = cljs.core.keyword_identical_QMARK_;
var expr__50656 = k__4481__auto__;
if(cljs.core.truth_((pred__50655.cljs$core$IFn$_invoke$arity$2 ? pred__50655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50656) : pred__50655.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50656)))){
return (new shadow.dom.Coordinate(G__50644,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50655.cljs$core$IFn$_invoke$arity$2 ? pred__50655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50656) : pred__50655.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50656)))){
return (new shadow.dom.Coordinate(self__.x,G__50644,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50644),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50644){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50644,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50648){
var extmap__4512__auto__ = (function (){var G__50658 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50648,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50648)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50658);
} else {
return G__50658;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50648),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50648),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50660,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50664 = k50660;
var G__50664__$1 = (((G__50664 instanceof cljs.core.Keyword))?G__50664.fqn:null);
switch (G__50664__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50660,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50665){
var vec__50666 = p__50665;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50666,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50666,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50659){
var self__ = this;
var G__50659__$1 = this;
return (new cljs.core.RecordIter((0),G__50659__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50661,other50662){
var self__ = this;
var this50661__$1 = this;
return (((!((other50662 == null)))) && ((((this50661__$1.constructor === other50662.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50661__$1.w,other50662.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50661__$1.h,other50662.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50661__$1.__extmap,other50662.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50660){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50673 = k50660;
var G__50673__$1 = (((G__50673 instanceof cljs.core.Keyword))?G__50673.fqn:null);
switch (G__50673__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50660);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50659){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50674 = cljs.core.keyword_identical_QMARK_;
var expr__50675 = k__4481__auto__;
if(cljs.core.truth_((pred__50674.cljs$core$IFn$_invoke$arity$2 ? pred__50674.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50675) : pred__50674.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50675)))){
return (new shadow.dom.Size(G__50659,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50674.cljs$core$IFn$_invoke$arity$2 ? pred__50674.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50675) : pred__50674.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50675)))){
return (new shadow.dom.Size(self__.w,G__50659,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50659),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50659){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50659,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50663){
var extmap__4512__auto__ = (function (){var G__50682 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50663,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50663)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50682);
} else {
return G__50682;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50663),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50663),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var G__51125 = (i + (1));
var G__51126 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51125;
ret = G__51126;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50691){
var vec__50692 = p__50691;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50692,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50692,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50700 = arguments.length;
switch (G__50700) {
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
var G__51131 = ps;
var G__51132 = (i + (1));
el__$1 = G__51131;
i = G__51132;
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
var vec__50714 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50714,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50714,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50714,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50717_51146 = cljs.core.seq(props);
var chunk__50718_51147 = null;
var count__50719_51148 = (0);
var i__50720_51149 = (0);
while(true){
if((i__50720_51149 < count__50719_51148)){
var vec__50734_51150 = chunk__50718_51147.cljs$core$IIndexed$_nth$arity$2(null,i__50720_51149);
var k_51151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50734_51150,(0),null);
var v_51152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50734_51150,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_51151);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51151),v_51152);


var G__51153 = seq__50717_51146;
var G__51154 = chunk__50718_51147;
var G__51155 = count__50719_51148;
var G__51156 = (i__50720_51149 + (1));
seq__50717_51146 = G__51153;
chunk__50718_51147 = G__51154;
count__50719_51148 = G__51155;
i__50720_51149 = G__51156;
continue;
} else {
var temp__5753__auto___51157 = cljs.core.seq(seq__50717_51146);
if(temp__5753__auto___51157){
var seq__50717_51158__$1 = temp__5753__auto___51157;
if(cljs.core.chunked_seq_QMARK_(seq__50717_51158__$1)){
var c__4649__auto___51159 = cljs.core.chunk_first(seq__50717_51158__$1);
var G__51160 = cljs.core.chunk_rest(seq__50717_51158__$1);
var G__51161 = c__4649__auto___51159;
var G__51162 = cljs.core.count(c__4649__auto___51159);
var G__51163 = (0);
seq__50717_51146 = G__51160;
chunk__50718_51147 = G__51161;
count__50719_51148 = G__51162;
i__50720_51149 = G__51163;
continue;
} else {
var vec__50740_51164 = cljs.core.first(seq__50717_51158__$1);
var k_51165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50740_51164,(0),null);
var v_51166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50740_51164,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_51165);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51165),v_51166);


var G__51167 = cljs.core.next(seq__50717_51158__$1);
var G__51168 = null;
var G__51169 = (0);
var G__51170 = (0);
seq__50717_51146 = G__51167;
chunk__50718_51147 = G__51168;
count__50719_51148 = G__51169;
i__50720_51149 = G__51170;
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
var vec__50744 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50744,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50744,(1),null);
var seq__50747_51171 = cljs.core.seq(node_children);
var chunk__50749_51172 = null;
var count__50750_51173 = (0);
var i__50751_51174 = (0);
while(true){
if((i__50751_51174 < count__50750_51173)){
var child_struct_51175 = chunk__50749_51172.cljs$core$IIndexed$_nth$arity$2(null,i__50751_51174);
if((!((child_struct_51175 == null)))){
if(typeof child_struct_51175 === 'string'){
var text_51176 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51176),child_struct_51175].join(''));
} else {
var children_51177 = shadow.dom.svg_node(child_struct_51175);
if(cljs.core.seq_QMARK_(children_51177)){
var seq__50787_51178 = cljs.core.seq(children_51177);
var chunk__50789_51179 = null;
var count__50790_51180 = (0);
var i__50791_51181 = (0);
while(true){
if((i__50791_51181 < count__50790_51180)){
var child_51182 = chunk__50789_51179.cljs$core$IIndexed$_nth$arity$2(null,i__50791_51181);
if(cljs.core.truth_(child_51182)){
node.appendChild(child_51182);


var G__51183 = seq__50787_51178;
var G__51184 = chunk__50789_51179;
var G__51185 = count__50790_51180;
var G__51186 = (i__50791_51181 + (1));
seq__50787_51178 = G__51183;
chunk__50789_51179 = G__51184;
count__50790_51180 = G__51185;
i__50791_51181 = G__51186;
continue;
} else {
var G__51187 = seq__50787_51178;
var G__51188 = chunk__50789_51179;
var G__51189 = count__50790_51180;
var G__51190 = (i__50791_51181 + (1));
seq__50787_51178 = G__51187;
chunk__50789_51179 = G__51188;
count__50790_51180 = G__51189;
i__50791_51181 = G__51190;
continue;
}
} else {
var temp__5753__auto___51191 = cljs.core.seq(seq__50787_51178);
if(temp__5753__auto___51191){
var seq__50787_51192__$1 = temp__5753__auto___51191;
if(cljs.core.chunked_seq_QMARK_(seq__50787_51192__$1)){
var c__4649__auto___51193 = cljs.core.chunk_first(seq__50787_51192__$1);
var G__51194 = cljs.core.chunk_rest(seq__50787_51192__$1);
var G__51195 = c__4649__auto___51193;
var G__51196 = cljs.core.count(c__4649__auto___51193);
var G__51197 = (0);
seq__50787_51178 = G__51194;
chunk__50789_51179 = G__51195;
count__50790_51180 = G__51196;
i__50791_51181 = G__51197;
continue;
} else {
var child_51198 = cljs.core.first(seq__50787_51192__$1);
if(cljs.core.truth_(child_51198)){
node.appendChild(child_51198);


var G__51199 = cljs.core.next(seq__50787_51192__$1);
var G__51200 = null;
var G__51201 = (0);
var G__51202 = (0);
seq__50787_51178 = G__51199;
chunk__50789_51179 = G__51200;
count__50790_51180 = G__51201;
i__50791_51181 = G__51202;
continue;
} else {
var G__51203 = cljs.core.next(seq__50787_51192__$1);
var G__51204 = null;
var G__51205 = (0);
var G__51206 = (0);
seq__50787_51178 = G__51203;
chunk__50789_51179 = G__51204;
count__50790_51180 = G__51205;
i__50791_51181 = G__51206;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51177);
}
}


var G__51207 = seq__50747_51171;
var G__51208 = chunk__50749_51172;
var G__51209 = count__50750_51173;
var G__51210 = (i__50751_51174 + (1));
seq__50747_51171 = G__51207;
chunk__50749_51172 = G__51208;
count__50750_51173 = G__51209;
i__50751_51174 = G__51210;
continue;
} else {
var G__51211 = seq__50747_51171;
var G__51212 = chunk__50749_51172;
var G__51213 = count__50750_51173;
var G__51214 = (i__50751_51174 + (1));
seq__50747_51171 = G__51211;
chunk__50749_51172 = G__51212;
count__50750_51173 = G__51213;
i__50751_51174 = G__51214;
continue;
}
} else {
var temp__5753__auto___51215 = cljs.core.seq(seq__50747_51171);
if(temp__5753__auto___51215){
var seq__50747_51216__$1 = temp__5753__auto___51215;
if(cljs.core.chunked_seq_QMARK_(seq__50747_51216__$1)){
var c__4649__auto___51218 = cljs.core.chunk_first(seq__50747_51216__$1);
var G__51220 = cljs.core.chunk_rest(seq__50747_51216__$1);
var G__51221 = c__4649__auto___51218;
var G__51222 = cljs.core.count(c__4649__auto___51218);
var G__51223 = (0);
seq__50747_51171 = G__51220;
chunk__50749_51172 = G__51221;
count__50750_51173 = G__51222;
i__50751_51174 = G__51223;
continue;
} else {
var child_struct_51225 = cljs.core.first(seq__50747_51216__$1);
if((!((child_struct_51225 == null)))){
if(typeof child_struct_51225 === 'string'){
var text_51226 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51226),child_struct_51225].join(''));
} else {
var children_51227 = shadow.dom.svg_node(child_struct_51225);
if(cljs.core.seq_QMARK_(children_51227)){
var seq__50797_51228 = cljs.core.seq(children_51227);
var chunk__50799_51229 = null;
var count__50800_51230 = (0);
var i__50801_51231 = (0);
while(true){
if((i__50801_51231 < count__50800_51230)){
var child_51234 = chunk__50799_51229.cljs$core$IIndexed$_nth$arity$2(null,i__50801_51231);
if(cljs.core.truth_(child_51234)){
node.appendChild(child_51234);


var G__51236 = seq__50797_51228;
var G__51237 = chunk__50799_51229;
var G__51238 = count__50800_51230;
var G__51239 = (i__50801_51231 + (1));
seq__50797_51228 = G__51236;
chunk__50799_51229 = G__51237;
count__50800_51230 = G__51238;
i__50801_51231 = G__51239;
continue;
} else {
var G__51240 = seq__50797_51228;
var G__51241 = chunk__50799_51229;
var G__51242 = count__50800_51230;
var G__51243 = (i__50801_51231 + (1));
seq__50797_51228 = G__51240;
chunk__50799_51229 = G__51241;
count__50800_51230 = G__51242;
i__50801_51231 = G__51243;
continue;
}
} else {
var temp__5753__auto___51244__$1 = cljs.core.seq(seq__50797_51228);
if(temp__5753__auto___51244__$1){
var seq__50797_51245__$1 = temp__5753__auto___51244__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50797_51245__$1)){
var c__4649__auto___51246 = cljs.core.chunk_first(seq__50797_51245__$1);
var G__51247 = cljs.core.chunk_rest(seq__50797_51245__$1);
var G__51248 = c__4649__auto___51246;
var G__51249 = cljs.core.count(c__4649__auto___51246);
var G__51250 = (0);
seq__50797_51228 = G__51247;
chunk__50799_51229 = G__51248;
count__50800_51230 = G__51249;
i__50801_51231 = G__51250;
continue;
} else {
var child_51251 = cljs.core.first(seq__50797_51245__$1);
if(cljs.core.truth_(child_51251)){
node.appendChild(child_51251);


var G__51253 = cljs.core.next(seq__50797_51245__$1);
var G__51254 = null;
var G__51255 = (0);
var G__51256 = (0);
seq__50797_51228 = G__51253;
chunk__50799_51229 = G__51254;
count__50800_51230 = G__51255;
i__50801_51231 = G__51256;
continue;
} else {
var G__51258 = cljs.core.next(seq__50797_51245__$1);
var G__51259 = null;
var G__51260 = (0);
var G__51261 = (0);
seq__50797_51228 = G__51258;
chunk__50799_51229 = G__51259;
count__50800_51230 = G__51260;
i__50801_51231 = G__51261;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51227);
}
}


var G__51263 = cljs.core.next(seq__50747_51216__$1);
var G__51264 = null;
var G__51265 = (0);
var G__51266 = (0);
seq__50747_51171 = G__51263;
chunk__50749_51172 = G__51264;
count__50750_51173 = G__51265;
i__50751_51174 = G__51266;
continue;
} else {
var G__51267 = cljs.core.next(seq__50747_51216__$1);
var G__51268 = null;
var G__51269 = (0);
var G__51270 = (0);
seq__50747_51171 = G__51267;
chunk__50749_51172 = G__51268;
count__50750_51173 = G__51269;
i__50751_51174 = G__51270;
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
var len__4829__auto___51274 = arguments.length;
var i__4830__auto___51275 = (0);
while(true){
if((i__4830__auto___51275 < len__4829__auto___51274)){
args__4835__auto__.push((arguments[i__4830__auto___51275]));

var G__51276 = (i__4830__auto___51275 + (1));
i__4830__auto___51275 = G__51276;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50807){
var G__50808 = cljs.core.first(seq50807);
var seq50807__$1 = cljs.core.next(seq50807);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50808,seq50807__$1);
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
var G__50815 = arguments.length;
switch (G__50815) {
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
var c__47337__auto___51286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47338__auto__ = (function (){var switch__47246__auto__ = (function (state_50824){
var state_val_50825 = (state_50824[(1)]);
if((state_val_50825 === (1))){
var state_50824__$1 = state_50824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50824__$1,(2),once_or_cleanup);
} else {
if((state_val_50825 === (2))){
var inst_50821 = (state_50824[(2)]);
var inst_50822 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50824__$1 = (function (){var statearr_50826 = state_50824;
(statearr_50826[(7)] = inst_50821);

return statearr_50826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50824__$1,inst_50822);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__47247__auto__ = null;
var shadow$dom$state_machine__47247__auto____0 = (function (){
var statearr_50827 = [null,null,null,null,null,null,null,null];
(statearr_50827[(0)] = shadow$dom$state_machine__47247__auto__);

(statearr_50827[(1)] = (1));

return statearr_50827;
});
var shadow$dom$state_machine__47247__auto____1 = (function (state_50824){
while(true){
var ret_value__47248__auto__ = (function (){try{while(true){
var result__47249__auto__ = switch__47246__auto__(state_50824);
if(cljs.core.keyword_identical_QMARK_(result__47249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47249__auto__;
}
break;
}
}catch (e50828){var ex__47250__auto__ = e50828;
var statearr_50829_51288 = state_50824;
(statearr_50829_51288[(2)] = ex__47250__auto__);


if(cljs.core.seq((state_50824[(4)]))){
var statearr_50830_51289 = state_50824;
(statearr_50830_51289[(1)] = cljs.core.first((state_50824[(4)])));

} else {
throw ex__47250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51291 = state_50824;
state_50824 = G__51291;
continue;
} else {
return ret_value__47248__auto__;
}
break;
}
});
shadow$dom$state_machine__47247__auto__ = function(state_50824){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__47247__auto____0.call(this);
case 1:
return shadow$dom$state_machine__47247__auto____1.call(this,state_50824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__47247__auto____0;
shadow$dom$state_machine__47247__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__47247__auto____1;
return shadow$dom$state_machine__47247__auto__;
})()
})();
var state__47339__auto__ = (function (){var statearr_50831 = f__47338__auto__();
(statearr_50831[(6)] = c__47337__auto___51286);

return statearr_50831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47339__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
