goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_53643 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.object._id[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.object._id["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_53643(this$);
}
});

var shadow$object$IObject$_type$dyn_53644 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.object._type[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.object._type["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_53644(this$);
}
});

var shadow$object$IObject$_data$dyn_53646 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.object._data[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.object._data["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_53646(this$);
}
});

var shadow$object$IObject$_update$dyn_53647 = (function (this$,update_fn){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.object._update[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4522__auto__.call(null,this$,update_fn));
} else {
var m__4519__auto__ = (shadow.object._update["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4519__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_53647(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_53648 = (function (this$,cause){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4522__auto__.call(null,this$,cause));
} else {
var m__4519__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4519__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_53648(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__53128 = arguments.length;
switch (G__53128) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4223__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5753__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5753__auto__)){
var oid = temp__5753__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5753__auto__)){
var parent_id = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__53654 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__53654;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53136_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__53136_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__53138 = arguments.length;
switch (G__53138) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53139_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__53139_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__53140){
var map__53141 = p__53140;
var map__53141__$1 = cljs.core.__destructure_map(map__53141);
var oref = map__53141__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53141__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__53209 = arguments.length;
switch (G__53209) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53206_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__53206_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5751__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5751__auto__)){
var obj = temp__5751__auto__;
return obj;
} else {
var temp__5753__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__53657 = parent;
dom = G__53657;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53658 = arguments.length;
var i__4830__auto___53659 = (0);
while(true){
if((i__4830__auto___53659 < len__4829__auto___53658)){
args__4835__auto__.push((arguments[i__4830__auto___53659]));

var G__53660 = (i__4830__auto___53659 + (1));
i__4830__auto___53659 = G__53660;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5753__auto__)){
var reactions_to_trigger = temp__5753__auto__;
var seq__53226 = cljs.core.seq(reactions_to_trigger);
var chunk__53227 = null;
var count__53228 = (0);
var i__53229 = (0);
while(true){
if((i__53229 < count__53228)){
var rfn = chunk__53227.cljs$core$IIndexed$_nth$arity$2(null,i__53229);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__53661 = seq__53226;
var G__53662 = chunk__53227;
var G__53663 = count__53228;
var G__53664 = (i__53229 + (1));
seq__53226 = G__53661;
chunk__53227 = G__53662;
count__53228 = G__53663;
i__53229 = G__53664;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__53226);
if(temp__5753__auto____$1){
var seq__53226__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53226__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53226__$1);
var G__53665 = cljs.core.chunk_rest(seq__53226__$1);
var G__53666 = c__4649__auto__;
var G__53667 = cljs.core.count(c__4649__auto__);
var G__53668 = (0);
seq__53226 = G__53665;
chunk__53227 = G__53666;
count__53228 = G__53667;
i__53229 = G__53668;
continue;
} else {
var rfn = cljs.core.first(seq__53226__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__53669 = cljs.core.next(seq__53226__$1);
var G__53670 = null;
var G__53671 = (0);
var G__53672 = (0);
seq__53226 = G__53669;
chunk__53227 = G__53670;
count__53228 = G__53671;
i__53229 = G__53672;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq53223){
var G__53224 = cljs.core.first(seq53223);
var seq53223__$1 = cljs.core.next(seq53223);
var G__53225 = cljs.core.first(seq53223__$1);
var seq53223__$2 = cljs.core.next(seq53223__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53224,G__53225,seq53223__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__53230_53673 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__53231_53674 = null;
var count__53232_53675 = (0);
var i__53233_53676 = (0);
while(true){
if((i__53233_53676 < count__53232_53675)){
var child_53677 = chunk__53231_53674.cljs$core$IIndexed$_nth$arity$2(null,i__53233_53676);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_53677,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_53677,ev,notify_fn));


var G__53678 = seq__53230_53673;
var G__53679 = chunk__53231_53674;
var G__53680 = count__53232_53675;
var G__53681 = (i__53233_53676 + (1));
seq__53230_53673 = G__53678;
chunk__53231_53674 = G__53679;
count__53232_53675 = G__53680;
i__53233_53676 = G__53681;
continue;
} else {
var temp__5753__auto___53682 = cljs.core.seq(seq__53230_53673);
if(temp__5753__auto___53682){
var seq__53230_53683__$1 = temp__5753__auto___53682;
if(cljs.core.chunked_seq_QMARK_(seq__53230_53683__$1)){
var c__4649__auto___53684 = cljs.core.chunk_first(seq__53230_53683__$1);
var G__53685 = cljs.core.chunk_rest(seq__53230_53683__$1);
var G__53686 = c__4649__auto___53684;
var G__53687 = cljs.core.count(c__4649__auto___53684);
var G__53688 = (0);
seq__53230_53673 = G__53685;
chunk__53231_53674 = G__53686;
count__53232_53675 = G__53687;
i__53233_53676 = G__53688;
continue;
} else {
var child_53689 = cljs.core.first(seq__53230_53683__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_53689,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_53689,ev,notify_fn));


var G__53690 = cljs.core.next(seq__53230_53683__$1);
var G__53691 = null;
var G__53692 = (0);
var G__53693 = (0);
seq__53230_53673 = G__53690;
chunk__53231_53674 = G__53691;
count__53232_53675 = G__53692;
i__53233_53676 = G__53693;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53694 = arguments.length;
var i__4830__auto___53695 = (0);
while(true){
if((i__4830__auto___53695 < len__4829__auto___53694)){
args__4835__auto__.push((arguments[i__4830__auto___53695]));

var G__53696 = (i__4830__auto___53695 + (1));
i__4830__auto___53695 = G__53696;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq53234){
var G__53235 = cljs.core.first(seq53234);
var seq53234__$1 = cljs.core.next(seq53234);
var G__53236 = cljs.core.first(seq53234__$1);
var seq53234__$2 = cljs.core.next(seq53234__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53235,G__53236,seq53234__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53697 = arguments.length;
var i__4830__auto___53698 = (0);
while(true){
if((i__4830__auto___53698 < len__4829__auto___53697)){
args__4835__auto__.push((arguments[i__4830__auto___53698]));

var G__53699 = (i__4830__auto___53698 + (1));
i__4830__auto___53698 = G__53699;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__53700 = shadow.object.get_parent(current);
current = G__53700;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq53237){
var G__53238 = cljs.core.first(seq53237);
var seq53237__$1 = cljs.core.next(seq53237);
var G__53239 = cljs.core.first(seq53237__$1);
var seq53237__$2 = cljs.core.next(seq53237__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53238,G__53239,seq53237__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53701 = arguments.length;
var i__4830__auto___53702 = (0);
while(true){
if((i__4830__auto___53702 < len__4829__auto___53701)){
args__4835__auto__.push((arguments[i__4830__auto___53702]));

var G__53703 = (i__4830__auto___53702 + (1));
i__4830__auto___53702 = G__53703;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq53244){
var G__53245 = cljs.core.first(seq53244);
var seq53244__$1 = cljs.core.next(seq53244);
var G__53246 = cljs.core.first(seq53244__$1);
var seq53244__$2 = cljs.core.next(seq53244__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53245,G__53246,seq53244__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5751__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5751__auto__)){
var custom_remove = temp__5751__auto__;
var G__53252 = this$;
var G__53253 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__53252,G__53253) : custom_remove.call(null,G__53252,G__53253));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__53261 = arguments.length;
switch (G__53261) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__53430 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__53431 = null;
var count__53432 = (0);
var i__53433 = (0);
while(true){
if((i__53433 < count__53432)){
var vec__53455 = chunk__53431.cljs$core$IIndexed$_nth$arity$2(null,i__53433);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53455,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53455,(1),null);
var ev_def = vec__53455;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_53705__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__53430,chunk__53431,count__53432,i__53433,vec__53455,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__53430,chunk__53431,count__53432,i__53433,vec__53455,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__53430,chunk__53431,count__53432,i__53433,handler_53705__$1,vec__53455,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_53705__$1.cljs$core$IFn$_invoke$arity$3 ? handler_53705__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_53705__$1.call(null,oref,e,el));
});})(seq__53430,chunk__53431,count__53432,i__53433,handler_53705__$1,vec__53455,ev,handler,ev_def))
);


var G__53706 = seq__53430;
var G__53707 = chunk__53431;
var G__53708 = count__53432;
var G__53709 = (i__53433 + (1));
seq__53430 = G__53706;
chunk__53431 = G__53707;
count__53432 = G__53708;
i__53433 = G__53709;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53430);
if(temp__5753__auto__){
var seq__53430__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53430__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53430__$1);
var G__53710 = cljs.core.chunk_rest(seq__53430__$1);
var G__53711 = c__4649__auto__;
var G__53712 = cljs.core.count(c__4649__auto__);
var G__53713 = (0);
seq__53430 = G__53710;
chunk__53431 = G__53711;
count__53432 = G__53712;
i__53433 = G__53713;
continue;
} else {
var vec__53458 = cljs.core.first(seq__53430__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53458,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53458,(1),null);
var ev_def = vec__53458;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_53714__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__53430,chunk__53431,count__53432,i__53433,vec__53458,ev,handler,ev_def,seq__53430__$1,temp__5753__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__53430,chunk__53431,count__53432,i__53433,vec__53458,ev,handler,ev_def,seq__53430__$1,temp__5753__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__53430,chunk__53431,count__53432,i__53433,handler_53714__$1,vec__53458,ev,handler,ev_def,seq__53430__$1,temp__5753__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_53714__$1.cljs$core$IFn$_invoke$arity$3 ? handler_53714__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_53714__$1.call(null,oref,e,el));
});})(seq__53430,chunk__53431,count__53432,i__53433,handler_53714__$1,vec__53458,ev,handler,ev_def,seq__53430__$1,temp__5753__auto__))
);


var G__53715 = cljs.core.next(seq__53430__$1);
var G__53716 = null;
var G__53717 = (0);
var G__53718 = (0);
seq__53430 = G__53715;
chunk__53431 = G__53716;
count__53432 = G__53717;
i__53433 = G__53718;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__53465){
var vec__53466 = p__53465;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53466,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53466,(1),null);
if(cljs.core.truth_((function (){var and__4221__auto__ = event;
if(cljs.core.truth_(and__4221__auto__)){
return handler;
} else {
return and__4221__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53719 = arguments.length;
var i__4830__auto___53720 = (0);
while(true){
if((i__4830__auto___53720 < len__4829__auto___53719)){
args__4835__auto__.push((arguments[i__4830__auto___53720]));

var G__53721 = (i__4830__auto___53720 + (1));
i__4830__auto___53720 = G__53721;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e53477){if((e53477 instanceof Object)){
var e = e53477;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e53477;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq53475){
var G__53476 = cljs.core.first(seq53475);
var seq53475__$1 = cljs.core.next(seq53475);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53476,seq53475__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__53479 = arguments.length;
switch (G__53479) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__53480 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__53480) : shadow.dom.build.call(null,G__53480));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k53482,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__53486 = k53482;
var G__53486__$1 = (((G__53486 instanceof cljs.core.Keyword))?G__53486.fqn:null);
switch (G__53486__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53482,else__4475__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__53487){
var vec__53488 = p__53487;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53488,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53488,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.object.Watch{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53481){
var self__ = this;
var G__53481__$1 = this;
return (new cljs.core.RecordIter((0),G__53481__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53483,other53484){
var self__ = this;
var this53483__$1 = this;
return (((!((other53484 == null)))) && ((((this53483__$1.constructor === other53484.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53483__$1.key,other53484.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53483__$1.handler,other53484.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53483__$1.__extmap,other53484.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k53482){
var self__ = this;
var this__4479__auto____$1 = this;
var G__53491 = k53482;
var G__53491__$1 = (((G__53491 instanceof cljs.core.Keyword))?G__53491.fqn:null);
switch (G__53491__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53482);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__53481){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__53492 = cljs.core.keyword_identical_QMARK_;
var expr__53493 = k__4481__auto__;
if(cljs.core.truth_((pred__53492.cljs$core$IFn$_invoke$arity$2 ? pred__53492.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__53493) : pred__53492.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__53493)))){
return (new shadow.object.Watch(G__53481,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53492.cljs$core$IFn$_invoke$arity$2 ? pred__53492.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__53493) : pred__53492.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__53493)))){
return (new shadow.object.Watch(self__.key,G__53481,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__53481),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__53481){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__53481,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__53485){
var extmap__4512__auto__ = (function (){var G__53495 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53485,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__53485)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53495);
} else {
return G__53495;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__53485),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__53485),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53496_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__53496_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__53497 = cljs.core.seq(self__.watches);
var chunk__53498 = null;
var count__53499 = (0);
var i__53500 = (0);
while(true){
if((i__53500 < count__53499)){
var map__53503 = chunk__53498.cljs$core$IIndexed$_nth$arity$2(null,i__53500);
var map__53503__$1 = cljs.core.__destructure_map(map__53503);
var watch = map__53503__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53503__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53503__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__53729 = seq__53497;
var G__53730 = chunk__53498;
var G__53731 = count__53499;
var G__53732 = (i__53500 + (1));
seq__53497 = G__53729;
chunk__53498 = G__53730;
count__53499 = G__53731;
i__53500 = G__53732;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53497);
if(temp__5753__auto__){
var seq__53497__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53497__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53497__$1);
var G__53733 = cljs.core.chunk_rest(seq__53497__$1);
var G__53734 = c__4649__auto__;
var G__53735 = cljs.core.count(c__4649__auto__);
var G__53736 = (0);
seq__53497 = G__53733;
chunk__53498 = G__53734;
count__53499 = G__53735;
i__53500 = G__53736;
continue;
} else {
var map__53504 = cljs.core.first(seq__53497__$1);
var map__53504__$1 = cljs.core.__destructure_map(map__53504);
var watch = map__53504__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53504__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53504__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__53737 = cljs.core.next(seq__53497__$1);
var G__53738 = null;
var G__53739 = (0);
var G__53740 = (0);
seq__53497 = G__53737;
chunk__53498 = G__53738;
count__53499 = G__53739;
i__53500 = G__53740;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__53508_53741 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__53509_53742 = null;
var count__53510_53743 = (0);
var i__53511_53744 = (0);
while(true){
if((i__53511_53744 < count__53510_53743)){
var child_53745 = chunk__53509_53742.cljs$core$IIndexed$_nth$arity$2(null,i__53511_53744);
shadow.object._destroy_BANG_(child_53745,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__53746 = seq__53508_53741;
var G__53747 = chunk__53509_53742;
var G__53748 = count__53510_53743;
var G__53749 = (i__53511_53744 + (1));
seq__53508_53741 = G__53746;
chunk__53509_53742 = G__53747;
count__53510_53743 = G__53748;
i__53511_53744 = G__53749;
continue;
} else {
var temp__5753__auto___53750 = cljs.core.seq(seq__53508_53741);
if(temp__5753__auto___53750){
var seq__53508_53751__$1 = temp__5753__auto___53750;
if(cljs.core.chunked_seq_QMARK_(seq__53508_53751__$1)){
var c__4649__auto___53752 = cljs.core.chunk_first(seq__53508_53751__$1);
var G__53753 = cljs.core.chunk_rest(seq__53508_53751__$1);
var G__53754 = c__4649__auto___53752;
var G__53755 = cljs.core.count(c__4649__auto___53752);
var G__53756 = (0);
seq__53508_53741 = G__53753;
chunk__53509_53742 = G__53754;
count__53510_53743 = G__53755;
i__53511_53744 = G__53756;
continue;
} else {
var child_53757 = cljs.core.first(seq__53508_53751__$1);
shadow.object._destroy_BANG_(child_53757,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__53758 = cljs.core.next(seq__53508_53751__$1);
var G__53759 = null;
var G__53760 = (0);
var G__53761 = (0);
seq__53508_53741 = G__53758;
chunk__53509_53742 = G__53759;
count__53510_53743 = G__53760;
i__53511_53744 = G__53761;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_53762 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_53762 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_53762);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__53519 = arguments.length;
switch (G__53519) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__53521 = arguments.length;
switch (G__53521) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53766 = arguments.length;
var i__4830__auto___53767 = (0);
while(true){
if((i__4830__auto___53767 < len__4829__auto___53766)){
args__4835__auto__.push((arguments[i__4830__auto___53767]));

var G__53768 = (i__4830__auto___53767 + (1));
i__4830__auto___53767 = G__53768;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_53781 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5751__auto___53782 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5751__auto___53782)){
var dom_53783 = temp__5751__auto___53782;
shadow.dom.set_data(dom_53783,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_53783,dom_events_53781);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_53783], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_53783], 0));
} else {
var temp__5753__auto___53784 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___53784)){
var dom_fn_53785 = temp__5753__auto___53784;
var dom_53786 = (function (){var G__53526 = (dom_fn_53785.cljs$core$IFn$_invoke$arity$2 ? dom_fn_53785.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_53785.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__53526) : shadow.dom.build.call(null,G__53526));
})();
shadow.dom.set_data(dom_53786,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_53786], 0));

shadow.object.bind_dom_events(oref,dom_53786,dom_events_53781);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_53786], 0));
} else {
}
}

var temp__5753__auto___53787 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___53787)){
var watches_53788 = temp__5753__auto___53787;
var seq__53527_53789 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_53788));
var chunk__53528_53790 = null;
var count__53529_53791 = (0);
var i__53530_53792 = (0);
while(true){
if((i__53530_53792 < count__53529_53791)){
var vec__53542_53793 = chunk__53528_53790.cljs$core$IIndexed$_nth$arity$2(null,i__53530_53792);
var attr_53794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53542_53793,(0),null);
var handler_53795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53542_53793,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_53794,((function (seq__53527_53789,chunk__53528_53790,count__53529_53791,i__53530_53792,vec__53542_53793,attr_53794,handler_53795,watches_53788,temp__5753__auto___53787,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_53795.cljs$core$IFn$_invoke$arity$3 ? handler_53795.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_53795.call(null,oref,old,new$));
});})(seq__53527_53789,chunk__53528_53790,count__53529_53791,i__53530_53792,vec__53542_53793,attr_53794,handler_53795,watches_53788,temp__5753__auto___53787,oid,parent,result_chan,odef,obj,oref))
);


var G__53796 = seq__53527_53789;
var G__53797 = chunk__53528_53790;
var G__53798 = count__53529_53791;
var G__53799 = (i__53530_53792 + (1));
seq__53527_53789 = G__53796;
chunk__53528_53790 = G__53797;
count__53529_53791 = G__53798;
i__53530_53792 = G__53799;
continue;
} else {
var temp__5753__auto___53800__$1 = cljs.core.seq(seq__53527_53789);
if(temp__5753__auto___53800__$1){
var seq__53527_53801__$1 = temp__5753__auto___53800__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53527_53801__$1)){
var c__4649__auto___53802 = cljs.core.chunk_first(seq__53527_53801__$1);
var G__53803 = cljs.core.chunk_rest(seq__53527_53801__$1);
var G__53804 = c__4649__auto___53802;
var G__53805 = cljs.core.count(c__4649__auto___53802);
var G__53806 = (0);
seq__53527_53789 = G__53803;
chunk__53528_53790 = G__53804;
count__53529_53791 = G__53805;
i__53530_53792 = G__53806;
continue;
} else {
var vec__53549_53807 = cljs.core.first(seq__53527_53801__$1);
var attr_53808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53549_53807,(0),null);
var handler_53809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53549_53807,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_53808,((function (seq__53527_53789,chunk__53528_53790,count__53529_53791,i__53530_53792,vec__53549_53807,attr_53808,handler_53809,seq__53527_53801__$1,temp__5753__auto___53800__$1,watches_53788,temp__5753__auto___53787,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_53809.cljs$core$IFn$_invoke$arity$3 ? handler_53809.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_53809.call(null,oref,old,new$));
});})(seq__53527_53789,chunk__53528_53790,count__53529_53791,i__53530_53792,vec__53549_53807,attr_53808,handler_53809,seq__53527_53801__$1,temp__5753__auto___53800__$1,watches_53788,temp__5753__auto___53787,oid,parent,result_chan,odef,obj,oref))
);


var G__53810 = cljs.core.next(seq__53527_53801__$1);
var G__53811 = null;
var G__53812 = (0);
var G__53813 = (0);
seq__53527_53789 = G__53810;
chunk__53528_53790 = G__53811;
count__53529_53791 = G__53812;
i__53530_53792 = G__53813;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq53523){
var G__53524 = cljs.core.first(seq53523);
var seq53523__$1 = cljs.core.next(seq53523);
var G__53525 = cljs.core.first(seq53523__$1);
var seq53523__$2 = cljs.core.next(seq53523__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53524,G__53525,seq53523__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__53555 = arguments.length;
switch (G__53555) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__53553_SHARP_){
var G__53556 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__53553_SHARP_) : node_gen.call(null,p1__53553_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__53556) : shadow.dom.build.call(null,G__53556));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__53557_53821 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__53558_53822 = null;
var count__53559_53823 = (0);
var i__53560_53824 = (0);
while(true){
if((i__53560_53824 < count__53559_53823)){
var obj_53825 = chunk__53558_53822.cljs$core$IIndexed$_nth$arity$2(null,i__53560_53824);
var obj_53826__$1 = shadow.object.get_from_dom(obj_53825);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_53826__$1);


var G__53827 = seq__53557_53821;
var G__53828 = chunk__53558_53822;
var G__53829 = count__53559_53823;
var G__53830 = (i__53560_53824 + (1));
seq__53557_53821 = G__53827;
chunk__53558_53822 = G__53828;
count__53559_53823 = G__53829;
i__53560_53824 = G__53830;
continue;
} else {
var temp__5753__auto___53831 = cljs.core.seq(seq__53557_53821);
if(temp__5753__auto___53831){
var seq__53557_53832__$1 = temp__5753__auto___53831;
if(cljs.core.chunked_seq_QMARK_(seq__53557_53832__$1)){
var c__4649__auto___53833 = cljs.core.chunk_first(seq__53557_53832__$1);
var G__53834 = cljs.core.chunk_rest(seq__53557_53832__$1);
var G__53835 = c__4649__auto___53833;
var G__53836 = cljs.core.count(c__4649__auto___53833);
var G__53837 = (0);
seq__53557_53821 = G__53834;
chunk__53558_53822 = G__53835;
count__53559_53823 = G__53836;
i__53560_53824 = G__53837;
continue;
} else {
var obj_53838 = cljs.core.first(seq__53557_53832__$1);
var obj_53839__$1 = shadow.object.get_from_dom(obj_53838);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_53839__$1);


var G__53840 = cljs.core.next(seq__53557_53832__$1);
var G__53841 = null;
var G__53842 = (0);
var G__53843 = (0);
seq__53557_53821 = G__53840;
chunk__53558_53822 = G__53841;
count__53559_53823 = G__53842;
i__53560_53824 = G__53843;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__53565 = arguments.length;
switch (G__53565) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__53563_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__53563_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__53567){
var vec__53568 = p__53567;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53568,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53568,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__53571_53847 = cljs.core.seq((function (){var G__53578 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__53578) : coll_transform.call(null,G__53578));
})());
var chunk__53572_53848 = null;
var count__53573_53849 = (0);
var i__53574_53850 = (0);
while(true){
if((i__53574_53850 < count__53573_53849)){
var item_53851 = chunk__53572_53848.cljs$core$IIndexed$_nth$arity$2(null,i__53574_53850);
shadow.object.dom_enter(coll_dom,make_item_fn(item_53851));


var G__53852 = seq__53571_53847;
var G__53853 = chunk__53572_53848;
var G__53854 = count__53573_53849;
var G__53855 = (i__53574_53850 + (1));
seq__53571_53847 = G__53852;
chunk__53572_53848 = G__53853;
count__53573_53849 = G__53854;
i__53574_53850 = G__53855;
continue;
} else {
var temp__5753__auto___53856 = cljs.core.seq(seq__53571_53847);
if(temp__5753__auto___53856){
var seq__53571_53857__$1 = temp__5753__auto___53856;
if(cljs.core.chunked_seq_QMARK_(seq__53571_53857__$1)){
var c__4649__auto___53858 = cljs.core.chunk_first(seq__53571_53857__$1);
var G__53859 = cljs.core.chunk_rest(seq__53571_53857__$1);
var G__53860 = c__4649__auto___53858;
var G__53861 = cljs.core.count(c__4649__auto___53858);
var G__53862 = (0);
seq__53571_53847 = G__53859;
chunk__53572_53848 = G__53860;
count__53573_53849 = G__53861;
i__53574_53850 = G__53862;
continue;
} else {
var item_53863 = cljs.core.first(seq__53571_53857__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_53863));


var G__53864 = cljs.core.next(seq__53571_53857__$1);
var G__53865 = null;
var G__53866 = (0);
var G__53867 = (0);
seq__53571_53847 = G__53864;
chunk__53572_53848 = G__53865;
count__53573_53849 = G__53866;
i__53574_53850 = G__53867;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4309__auto__ = count_new;
var y__4310__auto__ = count_children;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var n__4706__auto___53869 = count_children__$1;
var idx_53870 = (0);
while(true){
if((idx_53870 < n__4706__auto___53869)){
var cn_53871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_53870);
var cc_53872 = shadow.object.get_from_dom(cn_53871);
var ckey_53873 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_53872);
var cval_53874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_53872,item_key);
var vec__53581_53875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_53870);
var nkey_53876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53581_53875,(0),null);
var nval_53877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53581_53875,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_53873,nkey_53876)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_53874,nval_53877)))){
} else {
var new_obj_53878 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_53876,nval_53877], null));
shadow.dom.replace_node(cn_53871,new_obj_53878);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_53872);

shadow.object.notify_tree_BANG_(new_obj_53878,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__53879 = (idx_53870 + (1));
idx_53870 = G__53879;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__53584_53880 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__53585_53881 = null;
var count__53586_53882 = (0);
var i__53587_53883 = (0);
while(true){
if((i__53587_53883 < count__53586_53882)){
var item_53884 = chunk__53585_53881.cljs$core$IIndexed$_nth$arity$2(null,i__53587_53883);
shadow.object.dom_enter(coll_dom,make_item_fn(item_53884));


var G__53885 = seq__53584_53880;
var G__53886 = chunk__53585_53881;
var G__53887 = count__53586_53882;
var G__53888 = (i__53587_53883 + (1));
seq__53584_53880 = G__53885;
chunk__53585_53881 = G__53886;
count__53586_53882 = G__53887;
i__53587_53883 = G__53888;
continue;
} else {
var temp__5753__auto___53889 = cljs.core.seq(seq__53584_53880);
if(temp__5753__auto___53889){
var seq__53584_53890__$1 = temp__5753__auto___53889;
if(cljs.core.chunked_seq_QMARK_(seq__53584_53890__$1)){
var c__4649__auto___53891 = cljs.core.chunk_first(seq__53584_53890__$1);
var G__53892 = cljs.core.chunk_rest(seq__53584_53890__$1);
var G__53893 = c__4649__auto___53891;
var G__53894 = cljs.core.count(c__4649__auto___53891);
var G__53895 = (0);
seq__53584_53880 = G__53892;
chunk__53585_53881 = G__53893;
count__53586_53882 = G__53894;
i__53587_53883 = G__53895;
continue;
} else {
var item_53896 = cljs.core.first(seq__53584_53890__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_53896));


var G__53897 = cljs.core.next(seq__53584_53890__$1);
var G__53898 = null;
var G__53899 = (0);
var G__53900 = (0);
seq__53584_53880 = G__53897;
chunk__53585_53881 = G__53898;
count__53586_53882 = G__53899;
i__53587_53883 = G__53900;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4221__auto__ = key;
if(cljs.core.truth_(and__4221__auto__)){
return path;
} else {
return and__4221__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__53591 = "inspect!";
var G__53592 = shadow.object._id(oref);
var G__53593 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__53594 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__53591,G__53592,G__53593,G__53594) : shadow.object.info.call(null,G__53591,G__53592,G__53593,G__53594));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__53595_53909 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__53596_53910 = null;
var count__53597_53911 = (0);
var i__53598_53912 = (0);
while(true){
if((i__53598_53912 < count__53597_53911)){
var vec__53614_53913 = chunk__53596_53910.cljs$core$IIndexed$_nth$arity$2(null,i__53598_53912);
var id_53914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53614_53913,(0),null);
var oref_53915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53614_53913,(1),null);
var G__53617_53916 = "dump";
var G__53618_53917 = id_53914;
var G__53619_53918 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_53915)], 0));
var G__53620_53919 = cljs.core.deref(shadow.object._data(oref_53915));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__53617_53916,G__53618_53917,G__53619_53918,G__53620_53919) : shadow.object.info.call(null,G__53617_53916,G__53618_53917,G__53619_53918,G__53620_53919));


var G__53920 = seq__53595_53909;
var G__53921 = chunk__53596_53910;
var G__53922 = count__53597_53911;
var G__53923 = (i__53598_53912 + (1));
seq__53595_53909 = G__53920;
chunk__53596_53910 = G__53921;
count__53597_53911 = G__53922;
i__53598_53912 = G__53923;
continue;
} else {
var temp__5753__auto___53924 = cljs.core.seq(seq__53595_53909);
if(temp__5753__auto___53924){
var seq__53595_53925__$1 = temp__5753__auto___53924;
if(cljs.core.chunked_seq_QMARK_(seq__53595_53925__$1)){
var c__4649__auto___53926 = cljs.core.chunk_first(seq__53595_53925__$1);
var G__53927 = cljs.core.chunk_rest(seq__53595_53925__$1);
var G__53928 = c__4649__auto___53926;
var G__53929 = cljs.core.count(c__4649__auto___53926);
var G__53930 = (0);
seq__53595_53909 = G__53927;
chunk__53596_53910 = G__53928;
count__53597_53911 = G__53929;
i__53598_53912 = G__53930;
continue;
} else {
var vec__53621_53931 = cljs.core.first(seq__53595_53925__$1);
var id_53932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53621_53931,(0),null);
var oref_53933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53621_53931,(1),null);
var G__53624_53934 = "dump";
var G__53625_53935 = id_53932;
var G__53626_53936 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_53933)], 0));
var G__53627_53937 = cljs.core.deref(shadow.object._data(oref_53933));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__53624_53934,G__53625_53935,G__53626_53936,G__53627_53937) : shadow.object.info.call(null,G__53624_53934,G__53625_53935,G__53626_53936,G__53627_53937));


var G__53938 = cljs.core.next(seq__53595_53925__$1);
var G__53939 = null;
var G__53940 = (0);
var G__53941 = (0);
seq__53595_53909 = G__53938;
chunk__53596_53910 = G__53939;
count__53597_53911 = G__53940;
i__53598_53912 = G__53941;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
