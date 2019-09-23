// Compiled by ClojureScript 1.10.339 {}
goog.provide('rewrite_clj.node.keyword');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {rewrite_clj.node.keyword.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.keyword.KeywordNode = (function (k,namespaced_QMARK_,__meta,__extmap,__hash){
this.k = k;
this.namespaced_QMARK_ = namespaced_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.keyword.KeywordNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k10386,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__10390 = k10386;
var G__10390__$1 = (((G__10390 instanceof cljs.core.Keyword))?G__10390.fqn:null);
switch (G__10390__$1) {
case "k":
return self__.k;

break;
case "namespaced?":
return self__.namespaced_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10386,else__4206__auto__);

}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#rewrite-clj.node.keyword.KeywordNode{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),self__.namespaced_QMARK_],null))], null),self__.__extmap));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10385){
var self__ = this;
var G__10385__$1 = this;
return (new cljs.core.RecordIter((0),G__10385__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1681863292 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10387,other10388){
var self__ = this;
var this10387__$1 = this;
return ((!((other10388 == null))) && ((this10387__$1.constructor === other10388.constructor)) && (cljs.core._EQ_.call(null,this10387__$1.k,other10388.k)) && (cljs.core._EQ_.call(null,this10387__$1.namespaced_QMARK_,other10388.namespaced_QMARK_)) && (cljs.core._EQ_.call(null,this10387__$1.__extmap,other10388.__extmap)));
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__3938__auto__ = self__.namespaced_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,cljs.core.namespace.call(null,self__.k));
} else {
return and__3938__auto__;
}
})())){
throw (new Error("Namespaced keywords not supported !"));
} else {
return self__.k;
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c = (cljs.core.count.call(null,cljs.core.name.call(null,self__.k)) + (1));
if(cljs.core.truth_(self__.namespaced_QMARK_)){
return (c + (1));
} else {
var temp__5455__auto__ = cljs.core.namespace.call(null,self__.k);
if(cljs.core.truth_(temp__5455__auto__)){
var nspace = temp__5455__auto__;
return (((1) + c) + cljs.core.count.call(null,nspace));
} else {
return c;
}
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = cljs.core.pr_str.call(null,self__.k);
if(cljs.core.truth_(self__.namespaced_QMARK_)){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
} else {
return v;
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__10385){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__10391 = cljs.core.keyword_identical_QMARK_;
var expr__10392 = k__4211__auto__;
if(cljs.core.truth_(pred__10391.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__10392))){
return (new rewrite_clj.node.keyword.KeywordNode(G__10385,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10391.call(null,new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),expr__10392))){
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,G__10385,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__10385),null));
}
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),self__.namespaced_QMARK_,null))], null),self__.__extmap));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__10385){
var self__ = this;
var this__4202__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,G__10385,self__.__extmap,self__.__hash));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

rewrite_clj.node.keyword.KeywordNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"namespaced?","namespaced?",763218650,null)], null);
});

rewrite_clj.node.keyword.KeywordNode.cljs$lang$type = true;

rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.keyword/KeywordNode",null,(1),null));
});

rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"rewrite-clj.node.keyword/KeywordNode");
});

/**
 * Positional factory function for rewrite-clj.node.keyword/KeywordNode.
 */
rewrite_clj.node.keyword.__GT_KeywordNode = (function rewrite_clj$node$keyword$__GT_KeywordNode(k,namespaced_QMARK_){
return (new rewrite_clj.node.keyword.KeywordNode(k,namespaced_QMARK_,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.keyword/KeywordNode, taking a map of keywords to field values.
 */
rewrite_clj.node.keyword.map__GT_KeywordNode = (function rewrite_clj$node$keyword$map__GT_KeywordNode(G__10389){
var extmap__4236__auto__ = (function (){var G__10394 = cljs.core.dissoc.call(null,G__10389,new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877));
if(cljs.core.record_QMARK_.call(null,G__10389)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10394);
} else {
return G__10394;
}
})();
return (new rewrite_clj.node.keyword.KeywordNode(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__10389),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877).cljs$core$IFn$_invoke$arity$1(G__10389),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

/**
 * Create node representing a keyword. If `namespaced?` is given as `true`
 * a keyword à la `::x` or `::ns/x` (i.e. namespaced/aliased) is generated.
 */
rewrite_clj.node.keyword.keyword_node = (function rewrite_clj$node$keyword$keyword_node(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10402 = arguments.length;
var i__4532__auto___10403 = (0);
while(true){
if((i__4532__auto___10403 < len__4531__auto___10402)){
args__4534__auto__.push((arguments[i__4532__auto___10403]));

var G__10404 = (i__4532__auto___10403 + (1));
i__4532__auto___10403 = G__10404;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__10398){
var vec__10399 = p__10398;
var namespaced_QMARK_ = cljs.core.nth.call(null,vec__10399,(0),null);
if((k instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? k)"));
}

return rewrite_clj.node.keyword.__GT_KeywordNode.call(null,k,namespaced_QMARK_);
});

rewrite_clj.node.keyword.keyword_node.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
rewrite_clj.node.keyword.keyword_node.cljs$lang$applyTo = (function (seq10396){
var G__10397 = cljs.core.first.call(null,seq10396);
var seq10396__$1 = cljs.core.next.call(null,seq10396);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10397,seq10396__$1);
});


//# sourceMappingURL=keyword.js.map
