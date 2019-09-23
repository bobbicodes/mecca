// Compiled by ClojureScript 1.10.339 {}
goog.provide('rewrite_clj.node.uneval');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {rewrite_clj.node.uneval.Object}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.uneval.UnevalNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.uneval.UnevalNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k10438,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__10442 = k10438;
var G__10442__$1 = (((G__10442 instanceof cljs.core.Keyword))?G__10442.fqn:null);
switch (G__10442__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10438,else__4206__auto__);

}
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#rewrite-clj.node.uneval.UnevalNode{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10437){
var self__ = this;
var G__10437__$1 = this;
return (new cljs.core.RecordIter((0),G__10437__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new rewrite_clj.node.uneval.UnevalNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1883175395 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10439,other10440){
var self__ = this;
var this10439__$1 = this;
return ((!((other10440 == null))) && ((this10439__$1.constructor === other10440.constructor)) && (cljs.core._EQ_.call(null,this10439__$1.children,other10440.children)) && (cljs.core._EQ_.call(null,this10439__$1.__extmap,other10440.__extmap)));
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"uneval","uneval",1932037707);
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw (new Error("Unsupported operation for unevalnode"));
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((2) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children))].join('');
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new rewrite_clj.node.uneval.UnevalNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

rewrite_clj.node.uneval.UnevalNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_single_sexpr.call(null,children_SINGLEQUOTE_);

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__10437){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__10443 = cljs.core.keyword_identical_QMARK_;
var expr__10444 = k__4211__auto__;
if(cljs.core.truth_(pred__10443.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__10444))){
return (new rewrite_clj.node.uneval.UnevalNode(G__10437,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.uneval.UnevalNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__10437),null));
}
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__10437){
var self__ = this;
var this__4202__auto____$1 = this;
return (new rewrite_clj.node.uneval.UnevalNode(self__.children,G__10437,self__.__extmap,self__.__hash));
});

rewrite_clj.node.uneval.UnevalNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

rewrite_clj.node.uneval.UnevalNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.uneval.UnevalNode.cljs$lang$type = true;

rewrite_clj.node.uneval.UnevalNode.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.uneval/UnevalNode",null,(1),null));
});

rewrite_clj.node.uneval.UnevalNode.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"rewrite-clj.node.uneval/UnevalNode");
});

/**
 * Positional factory function for rewrite-clj.node.uneval/UnevalNode.
 */
rewrite_clj.node.uneval.__GT_UnevalNode = (function rewrite_clj$node$uneval$__GT_UnevalNode(children){
return (new rewrite_clj.node.uneval.UnevalNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.uneval/UnevalNode, taking a map of keywords to field values.
 */
rewrite_clj.node.uneval.map__GT_UnevalNode = (function rewrite_clj$node$uneval$map__GT_UnevalNode(G__10441){
var extmap__4236__auto__ = (function (){var G__10446 = cljs.core.dissoc.call(null,G__10441,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_.call(null,G__10441)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10446);
} else {
return G__10446;
}
})();
return (new rewrite_clj.node.uneval.UnevalNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__10441),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

/**
 * Create node representing an EDN uneval `#_` form.
 */
rewrite_clj.node.uneval.uneval_node = (function rewrite_clj$node$uneval$uneval_node(children){
while(true){
if(cljs.core.sequential_QMARK_.call(null,children)){
rewrite_clj.node.protocols.assert_single_sexpr.call(null,children);

return rewrite_clj.node.uneval.__GT_UnevalNode.call(null,children);
} else {
var G__10448 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__10448;
continue;
}
break;
}
});

//# sourceMappingURL=uneval.js.map
