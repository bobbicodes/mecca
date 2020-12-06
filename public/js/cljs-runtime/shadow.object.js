goog.provide('shadow.object');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.core.async.impl.protocols');
goog.require('shadow.util');
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

shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.object._id[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.object._id["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
}
});

shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.object._type[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.object._type["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
}
});

shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.object._data[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.object._data["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.object._update[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4488__auto__.call(null,this$,update_fn));
} else {
var m__4485__auto__ = (shadow.object._update["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4485__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
}
});

shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4488__auto__.call(null,this$,cause));
} else {
var m__4485__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4485__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__37893 = arguments.length;
switch (G__37893) {
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
var or__4185__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4185__auto__){
return or__4185__auto__;
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5735__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5735__auto__)){
var oid = temp__5735__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5735__auto__)){
var parent_id = temp__5735__auto__;
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
var G__38092 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__38092;
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37898_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__37898_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__37900 = arguments.length;
switch (G__37900) {
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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37901_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__37901_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__37902){
var map__37903 = p__37902;
var map__37903__$1 = (((((!((map__37903 == null))))?(((((map__37903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37903):map__37903);
var oref = map__37903__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
var G__37907 = arguments.length;
switch (G__37907) {
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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37905_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__37905_SHARP_));
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
var temp__5733__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5733__auto__)){
var obj = temp__5733__auto__;
return obj;
} else {
var temp__5735__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__38107 = parent;
dom = G__38107;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38110 = arguments.length;
var i__4790__auto___38112 = (0);
while(true){
if((i__4790__auto___38112 < len__4789__auto___38110)){
args__4795__auto__.push((arguments[i__4790__auto___38112]));

var G__38113 = (i__4790__auto___38112 + (1));
i__4790__auto___38112 = G__38113;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reactions_to_trigger = temp__5735__auto__;
var seq__37911 = cljs.core.seq(reactions_to_trigger);
var chunk__37912 = null;
var count__37913 = (0);
var i__37914 = (0);
while(true){
if((i__37914 < count__37913)){
var rfn = chunk__37912.cljs$core$IIndexed$_nth$arity$2(null,i__37914);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__38117 = seq__37911;
var G__38118 = chunk__37912;
var G__38119 = count__37913;
var G__38120 = (i__37914 + (1));
seq__37911 = G__38117;
chunk__37912 = G__38118;
count__37913 = G__38119;
i__37914 = G__38120;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37911);
if(temp__5735__auto____$1){
var seq__37911__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37911__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37911__$1);
var G__38121 = cljs.core.chunk_rest(seq__37911__$1);
var G__38122 = c__4609__auto__;
var G__38123 = cljs.core.count(c__4609__auto__);
var G__38124 = (0);
seq__37911 = G__38121;
chunk__37912 = G__38122;
count__37913 = G__38123;
i__37914 = G__38124;
continue;
} else {
var rfn = cljs.core.first(seq__37911__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__38125 = cljs.core.next(seq__37911__$1);
var G__38126 = null;
var G__38127 = (0);
var G__38128 = (0);
seq__37911 = G__38125;
chunk__37912 = G__38126;
count__37913 = G__38127;
i__37914 = G__38128;
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
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq37908){
var G__37909 = cljs.core.first(seq37908);
var seq37908__$1 = cljs.core.next(seq37908);
var G__37910 = cljs.core.first(seq37908__$1);
var seq37908__$2 = cljs.core.next(seq37908__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37909,G__37910,seq37908__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__37915_38129 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__37916_38130 = null;
var count__37917_38131 = (0);
var i__37918_38132 = (0);
while(true){
if((i__37918_38132 < count__37917_38131)){
var child_38133 = chunk__37916_38130.cljs$core$IIndexed$_nth$arity$2(null,i__37918_38132);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_38133,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_38133,ev,notify_fn));


var G__38134 = seq__37915_38129;
var G__38135 = chunk__37916_38130;
var G__38136 = count__37917_38131;
var G__38137 = (i__37918_38132 + (1));
seq__37915_38129 = G__38134;
chunk__37916_38130 = G__38135;
count__37917_38131 = G__38136;
i__37918_38132 = G__38137;
continue;
} else {
var temp__5735__auto___38138 = cljs.core.seq(seq__37915_38129);
if(temp__5735__auto___38138){
var seq__37915_38139__$1 = temp__5735__auto___38138;
if(cljs.core.chunked_seq_QMARK_(seq__37915_38139__$1)){
var c__4609__auto___38140 = cljs.core.chunk_first(seq__37915_38139__$1);
var G__38141 = cljs.core.chunk_rest(seq__37915_38139__$1);
var G__38142 = c__4609__auto___38140;
var G__38143 = cljs.core.count(c__4609__auto___38140);
var G__38144 = (0);
seq__37915_38129 = G__38141;
chunk__37916_38130 = G__38142;
count__37917_38131 = G__38143;
i__37918_38132 = G__38144;
continue;
} else {
var child_38145 = cljs.core.first(seq__37915_38139__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_38145,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_38145,ev,notify_fn));


var G__38146 = cljs.core.next(seq__37915_38139__$1);
var G__38147 = null;
var G__38148 = (0);
var G__38149 = (0);
seq__37915_38129 = G__38146;
chunk__37916_38130 = G__38147;
count__37917_38131 = G__38148;
i__37918_38132 = G__38149;
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
var args__4795__auto__ = [];
var len__4789__auto___38150 = arguments.length;
var i__4790__auto___38151 = (0);
while(true){
if((i__4790__auto___38151 < len__4789__auto___38150)){
args__4795__auto__.push((arguments[i__4790__auto___38151]));

var G__38152 = (i__4790__auto___38151 + (1));
i__4790__auto___38151 = G__38152;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq37919){
var G__37920 = cljs.core.first(seq37919);
var seq37919__$1 = cljs.core.next(seq37919);
var G__37921 = cljs.core.first(seq37919__$1);
var seq37919__$2 = cljs.core.next(seq37919__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37920,G__37921,seq37919__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38153 = arguments.length;
var i__4790__auto___38154 = (0);
while(true){
if((i__4790__auto___38154 < len__4789__auto___38153)){
args__4795__auto__.push((arguments[i__4790__auto___38154]));

var G__38155 = (i__4790__auto___38154 + (1));
i__4790__auto___38154 = G__38155;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__38156 = shadow.object.get_parent(current);
current = G__38156;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq37922){
var G__37923 = cljs.core.first(seq37922);
var seq37922__$1 = cljs.core.next(seq37922);
var G__37924 = cljs.core.first(seq37922__$1);
var seq37922__$2 = cljs.core.next(seq37922__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37923,G__37924,seq37922__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38157 = arguments.length;
var i__4790__auto___38158 = (0);
while(true){
if((i__4790__auto___38158 < len__4789__auto___38157)){
args__4795__auto__.push((arguments[i__4790__auto___38158]));

var G__38159 = (i__4790__auto___38158 + (1));
i__4790__auto___38158 = G__38159;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
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
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq37925){
var G__37926 = cljs.core.first(seq37925);
var seq37925__$1 = cljs.core.next(seq37925);
var G__37927 = cljs.core.first(seq37925__$1);
var seq37925__$2 = cljs.core.next(seq37925__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37926,G__37927,seq37925__$2);
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
var temp__5733__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5733__auto__)){
var custom_remove = temp__5733__auto__;
var G__37928 = this$;
var G__37929 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__37928,G__37929) : custom_remove.call(null,G__37928,G__37929));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__37931 = arguments.length;
switch (G__37931) {
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

var seq__37932 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__37933 = null;
var count__37934 = (0);
var i__37935 = (0);
while(true){
if((i__37935 < count__37934)){
var vec__37942 = chunk__37933.cljs$core$IIndexed$_nth$arity$2(null,i__37935);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37942,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37942,(1),null);
var ev_def = vec__37942;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_38174__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__37932,chunk__37933,count__37934,i__37935,vec__37942,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__37932,chunk__37933,count__37934,i__37935,vec__37942,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__37932,chunk__37933,count__37934,i__37935,handler_38174__$1,vec__37942,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_38174__$1.cljs$core$IFn$_invoke$arity$3 ? handler_38174__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_38174__$1.call(null,oref,e,el));
});})(seq__37932,chunk__37933,count__37934,i__37935,handler_38174__$1,vec__37942,ev,handler,ev_def))
);


var G__38178 = seq__37932;
var G__38179 = chunk__37933;
var G__38180 = count__37934;
var G__38181 = (i__37935 + (1));
seq__37932 = G__38178;
chunk__37933 = G__38179;
count__37934 = G__38180;
i__37935 = G__38181;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37932);
if(temp__5735__auto__){
var seq__37932__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37932__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37932__$1);
var G__38183 = cljs.core.chunk_rest(seq__37932__$1);
var G__38184 = c__4609__auto__;
var G__38185 = cljs.core.count(c__4609__auto__);
var G__38186 = (0);
seq__37932 = G__38183;
chunk__37933 = G__38184;
count__37934 = G__38185;
i__37935 = G__38186;
continue;
} else {
var vec__37945 = cljs.core.first(seq__37932__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37945,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37945,(1),null);
var ev_def = vec__37945;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_38187__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__37932,chunk__37933,count__37934,i__37935,vec__37945,ev,handler,ev_def,seq__37932__$1,temp__5735__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__37932,chunk__37933,count__37934,i__37935,vec__37945,ev,handler,ev_def,seq__37932__$1,temp__5735__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__37932,chunk__37933,count__37934,i__37935,handler_38187__$1,vec__37945,ev,handler,ev_def,seq__37932__$1,temp__5735__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_38187__$1.cljs$core$IFn$_invoke$arity$3 ? handler_38187__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_38187__$1.call(null,oref,e,el));
});})(seq__37932,chunk__37933,count__37934,i__37935,handler_38187__$1,vec__37945,ev,handler,ev_def,seq__37932__$1,temp__5735__auto__))
);


var G__38201 = cljs.core.next(seq__37932__$1);
var G__38202 = null;
var G__38203 = (0);
var G__38204 = (0);
seq__37932 = G__38201;
chunk__37933 = G__38202;
count__37934 = G__38203;
i__37935 = G__38204;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__37948){
var vec__37949 = p__37948;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37949,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37949,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = event;
if(cljs.core.truth_(and__4174__auto__)){
return handler;
} else {
return and__4174__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___38208 = arguments.length;
var i__4790__auto___38209 = (0);
while(true){
if((i__4790__auto___38209 < len__4789__auto___38208)){
args__4795__auto__.push((arguments[i__4790__auto___38209]));

var G__38210 = (i__4790__auto___38209 + (1));
i__4790__auto___38209 = G__38210;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
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
}catch (e37954){if((e37954 instanceof Object)){
var e = e37954;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e37954;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq37952){
var G__37953 = cljs.core.first(seq37952);
var seq37952__$1 = cljs.core.next(seq37952);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37953,seq37952__$1);
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
var G__37956 = arguments.length;
switch (G__37956) {
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
var dom = (function (){var G__37957 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__37957) : shadow.dom.build.call(null,G__37957));
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
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37959,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37963 = k37959;
var G__37963__$1 = (((G__37963 instanceof cljs.core.Keyword))?G__37963.fqn:null);
switch (G__37963__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37959,else__4442__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37964){
var vec__37965 = p__37964;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37965,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37965,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.object.Watch{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37958){
var self__ = this;
var G__37958__$1 = this;
return (new cljs.core.RecordIter((0),G__37958__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__37968 = (function (coll__4436__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__37968(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37960,other37961){
var self__ = this;
var this37960__$1 = this;
return (((!((other37961 == null)))) && ((this37960__$1.constructor === other37961.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37960__$1.key,other37961.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37960__$1.handler,other37961.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37960__$1.__extmap,other37961.__extmap)));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37958){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37969 = cljs.core.keyword_identical_QMARK_;
var expr__37970 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__37972 = new cljs.core.Keyword(null,"key","key",-1516042587);
var G__37973 = expr__37970;
return (pred__37969.cljs$core$IFn$_invoke$arity$2 ? pred__37969.cljs$core$IFn$_invoke$arity$2(G__37972,G__37973) : pred__37969.call(null,G__37972,G__37973));
})())){
return (new shadow.object.Watch(G__37958,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37974 = new cljs.core.Keyword(null,"handler","handler",-195596612);
var G__37975 = expr__37970;
return (pred__37969.cljs$core$IFn$_invoke$arity$2 ? pred__37969.cljs$core$IFn$_invoke$arity$2(G__37974,G__37975) : pred__37969.call(null,G__37974,G__37975));
})())){
return (new shadow.object.Watch(self__.key,G__37958,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37958),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37958){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__37958,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.object/Watch");
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
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__37962){
var extmap__4478__auto__ = (function (){var G__37976 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37962,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__37962)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37976);
} else {
return G__37976;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__37962),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__37962),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),other.shadow$object$IObject$_id$arity$1(null))));
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
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37977_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__37977_SHARP_));
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

var seq__37978 = cljs.core.seq(self__.watches);
var chunk__37979 = null;
var count__37980 = (0);
var i__37981 = (0);
while(true){
if((i__37981 < count__37980)){
var map__37986 = chunk__37979.cljs$core$IIndexed$_nth$arity$2(null,i__37981);
var map__37986__$1 = (((((!((map__37986 == null))))?(((((map__37986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37986):map__37986);
var watch = map__37986__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37986__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37986__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__38283 = seq__37978;
var G__38284 = chunk__37979;
var G__38285 = count__37980;
var G__38286 = (i__37981 + (1));
seq__37978 = G__38283;
chunk__37979 = G__38284;
count__37980 = G__38285;
i__37981 = G__38286;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37978);
if(temp__5735__auto__){
var seq__37978__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37978__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37978__$1);
var G__38292 = cljs.core.chunk_rest(seq__37978__$1);
var G__38293 = c__4609__auto__;
var G__38294 = cljs.core.count(c__4609__auto__);
var G__38295 = (0);
seq__37978 = G__38292;
chunk__37979 = G__38293;
count__37980 = G__38294;
i__37981 = G__38295;
continue;
} else {
var map__37988 = cljs.core.first(seq__37978__$1);
var map__37988__$1 = (((((!((map__37988 == null))))?(((((map__37988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37988):map__37988);
var watch = map__37988__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37988__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37988__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__38296 = cljs.core.next(seq__37978__$1);
var G__38297 = null;
var G__38298 = (0);
var G__38299 = (0);
seq__37978 = G__38296;
chunk__37979 = G__38297;
count__37980 = G__38298;
i__37981 = G__38299;
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
var seq__37990_38303 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__37991_38304 = null;
var count__37992_38305 = (0);
var i__37993_38306 = (0);
while(true){
if((i__37993_38306 < count__37992_38305)){
var child_38311 = chunk__37991_38304.cljs$core$IIndexed$_nth$arity$2(null,i__37993_38306);
shadow.object._destroy_BANG_(child_38311,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__38315 = seq__37990_38303;
var G__38316 = chunk__37991_38304;
var G__38317 = count__37992_38305;
var G__38318 = (i__37993_38306 + (1));
seq__37990_38303 = G__38315;
chunk__37991_38304 = G__38316;
count__37992_38305 = G__38317;
i__37993_38306 = G__38318;
continue;
} else {
var temp__5735__auto___38319 = cljs.core.seq(seq__37990_38303);
if(temp__5735__auto___38319){
var seq__37990_38320__$1 = temp__5735__auto___38319;
if(cljs.core.chunked_seq_QMARK_(seq__37990_38320__$1)){
var c__4609__auto___38321 = cljs.core.chunk_first(seq__37990_38320__$1);
var G__38340 = cljs.core.chunk_rest(seq__37990_38320__$1);
var G__38341 = c__4609__auto___38321;
var G__38342 = cljs.core.count(c__4609__auto___38321);
var G__38343 = (0);
seq__37990_38303 = G__38340;
chunk__37991_38304 = G__38341;
count__37992_38305 = G__38342;
i__37993_38306 = G__38343;
continue;
} else {
var child_38344 = cljs.core.first(seq__37990_38320__$1);
shadow.object._destroy_BANG_(child_38344,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__38345 = cljs.core.next(seq__37990_38320__$1);
var G__38346 = null;
var G__38347 = (0);
var G__38348 = (0);
seq__37990_38303 = G__38345;
chunk__37991_38304 = G__38346;
count__37992_38305 = G__38347;
i__37993_38306 = G__38348;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_38349 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_38349 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_38349);
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

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__37995 = arguments.length;
switch (G__37995) {
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
var G__37997 = arguments.length;
switch (G__37997) {
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
var args__4795__auto__ = [];
var len__4789__auto___38356 = arguments.length;
var i__4790__auto___38357 = (0);
while(true){
if((i__4790__auto___38357 < len__4789__auto___38356)){
args__4795__auto__.push((arguments[i__4790__auto___38357]));

var G__38358 = (i__4790__auto___38357 + (1));
i__4790__auto___38357 = G__38358;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
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

var dom_events_38359 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5733__auto___38360 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5733__auto___38360)){
var dom_38361 = temp__5733__auto___38360;
shadow.dom.set_data(dom_38361,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_38361,dom_events_38359);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_38361], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_38361], 0));
} else {
var temp__5735__auto___38362 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___38362)){
var dom_fn_38363 = temp__5735__auto___38362;
var dom_38364 = (function (){var G__38002 = (dom_fn_38363.cljs$core$IFn$_invoke$arity$2 ? dom_fn_38363.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_38363.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__38002) : shadow.dom.build.call(null,G__38002));
})();
shadow.dom.set_data(dom_38364,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_38364], 0));

shadow.object.bind_dom_events(oref,dom_38364,dom_events_38359);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_38364], 0));
} else {
}
}

var temp__5735__auto___38365 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___38365)){
var watches_38366 = temp__5735__auto___38365;
var seq__38003_38367 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_38366));
var chunk__38004_38368 = null;
var count__38005_38369 = (0);
var i__38006_38370 = (0);
while(true){
if((i__38006_38370 < count__38005_38369)){
var vec__38013_38371 = chunk__38004_38368.cljs$core$IIndexed$_nth$arity$2(null,i__38006_38370);
var attr_38372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38013_38371,(0),null);
var handler_38373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38013_38371,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_38372,((function (seq__38003_38367,chunk__38004_38368,count__38005_38369,i__38006_38370,vec__38013_38371,attr_38372,handler_38373,watches_38366,temp__5735__auto___38365,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_38373.cljs$core$IFn$_invoke$arity$3 ? handler_38373.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_38373.call(null,oref,old,new$));
});})(seq__38003_38367,chunk__38004_38368,count__38005_38369,i__38006_38370,vec__38013_38371,attr_38372,handler_38373,watches_38366,temp__5735__auto___38365,oid,parent,result_chan,odef,obj,oref))
);


var G__38374 = seq__38003_38367;
var G__38375 = chunk__38004_38368;
var G__38376 = count__38005_38369;
var G__38377 = (i__38006_38370 + (1));
seq__38003_38367 = G__38374;
chunk__38004_38368 = G__38375;
count__38005_38369 = G__38376;
i__38006_38370 = G__38377;
continue;
} else {
var temp__5735__auto___38378__$1 = cljs.core.seq(seq__38003_38367);
if(temp__5735__auto___38378__$1){
var seq__38003_38379__$1 = temp__5735__auto___38378__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38003_38379__$1)){
var c__4609__auto___38380 = cljs.core.chunk_first(seq__38003_38379__$1);
var G__38381 = cljs.core.chunk_rest(seq__38003_38379__$1);
var G__38382 = c__4609__auto___38380;
var G__38383 = cljs.core.count(c__4609__auto___38380);
var G__38384 = (0);
seq__38003_38367 = G__38381;
chunk__38004_38368 = G__38382;
count__38005_38369 = G__38383;
i__38006_38370 = G__38384;
continue;
} else {
var vec__38016_38385 = cljs.core.first(seq__38003_38379__$1);
var attr_38386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38016_38385,(0),null);
var handler_38387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38016_38385,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_38386,((function (seq__38003_38367,chunk__38004_38368,count__38005_38369,i__38006_38370,vec__38016_38385,attr_38386,handler_38387,seq__38003_38379__$1,temp__5735__auto___38378__$1,watches_38366,temp__5735__auto___38365,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_38387.cljs$core$IFn$_invoke$arity$3 ? handler_38387.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_38387.call(null,oref,old,new$));
});})(seq__38003_38367,chunk__38004_38368,count__38005_38369,i__38006_38370,vec__38016_38385,attr_38386,handler_38387,seq__38003_38379__$1,temp__5735__auto___38378__$1,watches_38366,temp__5735__auto___38365,oid,parent,result_chan,odef,obj,oref))
);


var G__38388 = cljs.core.next(seq__38003_38379__$1);
var G__38389 = null;
var G__38390 = (0);
var G__38391 = (0);
seq__38003_38367 = G__38388;
chunk__38004_38368 = G__38389;
count__38005_38369 = G__38390;
i__38006_38370 = G__38391;
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
(shadow.object.create.cljs$lang$applyTo = (function (seq37999){
var G__38000 = cljs.core.first(seq37999);
var seq37999__$1 = cljs.core.next(seq37999);
var G__38001 = cljs.core.first(seq37999__$1);
var seq37999__$2 = cljs.core.next(seq37999__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38000,G__38001,seq37999__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__38021 = arguments.length;
switch (G__38021) {
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
var node_get = (function (p1__38019_SHARP_){
var G__38022 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__38019_SHARP_) : node_gen.call(null,p1__38019_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__38022) : shadow.dom.build.call(null,G__38022));
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

var G__38023 = new_child;
var G__38024 = new cljs.core.Keyword("dom","entered","dom/entered",506699596);
return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(G__38023,G__38024) : shadow.object.notify_down_BANG_.call(null,G__38023,G__38024));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__38025_38394 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__38026_38395 = null;
var count__38027_38396 = (0);
var i__38028_38397 = (0);
while(true){
if((i__38028_38397 < count__38027_38396)){
var obj_38399 = chunk__38026_38395.cljs$core$IIndexed$_nth$arity$2(null,i__38028_38397);
var obj_38400__$1 = shadow.object.get_from_dom(obj_38399);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_38400__$1);


var G__38401 = seq__38025_38394;
var G__38402 = chunk__38026_38395;
var G__38403 = count__38027_38396;
var G__38404 = (i__38028_38397 + (1));
seq__38025_38394 = G__38401;
chunk__38026_38395 = G__38402;
count__38027_38396 = G__38403;
i__38028_38397 = G__38404;
continue;
} else {
var temp__5735__auto___38405 = cljs.core.seq(seq__38025_38394);
if(temp__5735__auto___38405){
var seq__38025_38406__$1 = temp__5735__auto___38405;
if(cljs.core.chunked_seq_QMARK_(seq__38025_38406__$1)){
var c__4609__auto___38407 = cljs.core.chunk_first(seq__38025_38406__$1);
var G__38408 = cljs.core.chunk_rest(seq__38025_38406__$1);
var G__38409 = c__4609__auto___38407;
var G__38410 = cljs.core.count(c__4609__auto___38407);
var G__38411 = (0);
seq__38025_38394 = G__38408;
chunk__38026_38395 = G__38409;
count__38027_38396 = G__38410;
i__38028_38397 = G__38411;
continue;
} else {
var obj_38412 = cljs.core.first(seq__38025_38406__$1);
var obj_38416__$1 = shadow.object.get_from_dom(obj_38412);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_38416__$1);


var G__38417 = cljs.core.next(seq__38025_38406__$1);
var G__38418 = null;
var G__38419 = (0);
var G__38420 = (0);
seq__38025_38394 = G__38417;
chunk__38026_38395 = G__38418;
count__38027_38396 = G__38419;
i__38028_38397 = G__38420;
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
var G__38031 = arguments.length;
switch (G__38031) {
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
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__38029_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__38029_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__38032){
var vec__38033 = p__38032;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38033,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38033,(1),null);
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
var seq__38036_38423 = cljs.core.seq((function (){var G__38041 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__38041) : coll_transform.call(null,G__38041));
})());
var chunk__38037_38424 = null;
var count__38038_38425 = (0);
var i__38039_38426 = (0);
while(true){
if((i__38039_38426 < count__38038_38425)){
var item_38427 = chunk__38037_38424.cljs$core$IIndexed$_nth$arity$2(null,i__38039_38426);
shadow.object.dom_enter(coll_dom,make_item_fn(item_38427));


var G__38428 = seq__38036_38423;
var G__38429 = chunk__38037_38424;
var G__38430 = count__38038_38425;
var G__38431 = (i__38039_38426 + (1));
seq__38036_38423 = G__38428;
chunk__38037_38424 = G__38429;
count__38038_38425 = G__38430;
i__38039_38426 = G__38431;
continue;
} else {
var temp__5735__auto___38432 = cljs.core.seq(seq__38036_38423);
if(temp__5735__auto___38432){
var seq__38036_38433__$1 = temp__5735__auto___38432;
if(cljs.core.chunked_seq_QMARK_(seq__38036_38433__$1)){
var c__4609__auto___38434 = cljs.core.chunk_first(seq__38036_38433__$1);
var G__38435 = cljs.core.chunk_rest(seq__38036_38433__$1);
var G__38436 = c__4609__auto___38434;
var G__38437 = cljs.core.count(c__4609__auto___38434);
var G__38438 = (0);
seq__38036_38423 = G__38435;
chunk__38037_38424 = G__38436;
count__38038_38425 = G__38437;
i__38039_38426 = G__38438;
continue;
} else {
var item_38439 = cljs.core.first(seq__38036_38433__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_38439));


var G__38441 = cljs.core.next(seq__38036_38433__$1);
var G__38442 = null;
var G__38443 = (0);
var G__38444 = (0);
seq__38036_38423 = G__38441;
chunk__38037_38424 = G__38442;
count__38038_38425 = G__38443;
i__38039_38426 = G__38444;
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
var count_children__$1 = (function (){var x__4276__auto__ = count_new;
var y__4277__auto__ = count_children;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var n__4666__auto___38445 = count_children__$1;
var idx_38446 = (0);
while(true){
if((idx_38446 < n__4666__auto___38445)){
var cn_38450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_38446);
var cc_38451 = shadow.object.get_from_dom(cn_38450);
var ckey_38452 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_38451);
var cval_38453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_38451,item_key);
var vec__38042_38454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_38446);
var nkey_38455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38042_38454,(0),null);
var nval_38456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38042_38454,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_38452,nkey_38455)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_38453,nval_38456)))){
} else {
var new_obj_38457 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_38455,nval_38456], null));
shadow.dom.replace_node(cn_38450,new_obj_38457);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_38451);

shadow.object.notify_tree_BANG_(new_obj_38457,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__38458 = (idx_38446 + (1));
idx_38446 = G__38458;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__38045_38459 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__38046_38460 = null;
var count__38047_38461 = (0);
var i__38048_38462 = (0);
while(true){
if((i__38048_38462 < count__38047_38461)){
var item_38463 = chunk__38046_38460.cljs$core$IIndexed$_nth$arity$2(null,i__38048_38462);
shadow.object.dom_enter(coll_dom,make_item_fn(item_38463));


var G__38464 = seq__38045_38459;
var G__38465 = chunk__38046_38460;
var G__38466 = count__38047_38461;
var G__38467 = (i__38048_38462 + (1));
seq__38045_38459 = G__38464;
chunk__38046_38460 = G__38465;
count__38047_38461 = G__38466;
i__38048_38462 = G__38467;
continue;
} else {
var temp__5735__auto___38468 = cljs.core.seq(seq__38045_38459);
if(temp__5735__auto___38468){
var seq__38045_38469__$1 = temp__5735__auto___38468;
if(cljs.core.chunked_seq_QMARK_(seq__38045_38469__$1)){
var c__4609__auto___38470 = cljs.core.chunk_first(seq__38045_38469__$1);
var G__38471 = cljs.core.chunk_rest(seq__38045_38469__$1);
var G__38472 = c__4609__auto___38470;
var G__38473 = cljs.core.count(c__4609__auto___38470);
var G__38474 = (0);
seq__38045_38459 = G__38471;
chunk__38046_38460 = G__38472;
count__38047_38461 = G__38473;
i__38048_38462 = G__38474;
continue;
} else {
var item_38475 = cljs.core.first(seq__38045_38469__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_38475));


var G__38476 = cljs.core.next(seq__38045_38469__$1);
var G__38477 = null;
var G__38478 = (0);
var G__38479 = (0);
seq__38045_38459 = G__38476;
chunk__38046_38460 = G__38477;
count__38047_38461 = G__38478;
i__38048_38462 = G__38479;
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
if(cljs.core.truth_((function (){var and__4174__auto__ = key;
if(cljs.core.truth_(and__4174__auto__)){
return path;
} else {
return and__4174__auto__;
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
var G__38049 = "inspect!";
var G__38050 = shadow.object._id(oref);
var G__38051 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__38052 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__38049,G__38050,G__38051,G__38052) : shadow.object.info.call(null,G__38049,G__38050,G__38051,G__38052));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__38053_38502 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__38054_38503 = null;
var count__38055_38504 = (0);
var i__38056_38505 = (0);
while(true){
if((i__38056_38505 < count__38055_38504)){
var vec__38071_38509 = chunk__38054_38503.cljs$core$IIndexed$_nth$arity$2(null,i__38056_38505);
var id_38510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38071_38509,(0),null);
var oref_38511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38071_38509,(1),null);
var G__38074_38513 = "dump";
var G__38075_38514 = id_38510;
var G__38076_38515 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_38511)], 0));
var G__38077_38516 = cljs.core.deref(shadow.object._data(oref_38511));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__38074_38513,G__38075_38514,G__38076_38515,G__38077_38516) : shadow.object.info.call(null,G__38074_38513,G__38075_38514,G__38076_38515,G__38077_38516));


var G__38521 = seq__38053_38502;
var G__38522 = chunk__38054_38503;
var G__38523 = count__38055_38504;
var G__38524 = (i__38056_38505 + (1));
seq__38053_38502 = G__38521;
chunk__38054_38503 = G__38522;
count__38055_38504 = G__38523;
i__38056_38505 = G__38524;
continue;
} else {
var temp__5735__auto___38525 = cljs.core.seq(seq__38053_38502);
if(temp__5735__auto___38525){
var seq__38053_38526__$1 = temp__5735__auto___38525;
if(cljs.core.chunked_seq_QMARK_(seq__38053_38526__$1)){
var c__4609__auto___38527 = cljs.core.chunk_first(seq__38053_38526__$1);
var G__38528 = cljs.core.chunk_rest(seq__38053_38526__$1);
var G__38529 = c__4609__auto___38527;
var G__38530 = cljs.core.count(c__4609__auto___38527);
var G__38531 = (0);
seq__38053_38502 = G__38528;
chunk__38054_38503 = G__38529;
count__38055_38504 = G__38530;
i__38056_38505 = G__38531;
continue;
} else {
var vec__38078_38532 = cljs.core.first(seq__38053_38526__$1);
var id_38533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38078_38532,(0),null);
var oref_38534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38078_38532,(1),null);
var G__38081_38535 = "dump";
var G__38082_38536 = id_38533;
var G__38083_38537 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_38534)], 0));
var G__38084_38538 = cljs.core.deref(shadow.object._data(oref_38534));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__38081_38535,G__38082_38536,G__38083_38537,G__38084_38538) : shadow.object.info.call(null,G__38081_38535,G__38082_38536,G__38083_38537,G__38084_38538));


var G__38540 = cljs.core.next(seq__38053_38526__$1);
var G__38541 = null;
var G__38542 = (0);
var G__38543 = (0);
seq__38053_38502 = G__38540;
chunk__38054_38503 = G__38541;
count__38055_38504 = G__38542;
i__38056_38505 = G__38543;
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
