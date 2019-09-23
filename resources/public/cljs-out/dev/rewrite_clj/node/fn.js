// Compiled by ClojureScript 1.10.339 {}
goog.provide('rewrite_clj.node.fn');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('clojure.walk');
/**
 * Construct function form.
 */
rewrite_clj.node.fn.construct_fn = (function rewrite_clj$node$fn$construct_fn(syms,vararg,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.concat.call(null,syms,(cljs.core.truth_(vararg)?(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),(new cljs.core.List(null,vararg,null,(1),null)),(2),null)):null))),(new cljs.core.List(null,body,null,(1),null)),(2),null)),(3),null));
});
/**
 * Get index based on the substring following the parameter's `%`.
 * Zero means vararg.
 */
rewrite_clj.node.fn.sym_index = (function rewrite_clj$node$fn$sym_index(n){
if(cljs.core._EQ_.call(null,n,"&")){
return (0);
} else {
if(cljs.core._EQ_.call(null,n,"")){
return (1);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,n))){
return parseInt(n);
} else {
throw (new Error("arg literal must be %, %& or %integer."));

}
}
}
});
/**
 * If symbol starting with `%`, convert to respective gensym.
 */
rewrite_clj.node.fn.symbol__GT_gensym = (function rewrite_clj$node$fn$symbol__GT_gensym(sym_seq,vararg_QMARK_,max_n,sym){
if((sym instanceof cljs.core.Symbol)){
var nm = cljs.core.name.call(null,sym);
if(cljs.core._EQ_.call(null,nm.indexOf("%"),(0))){
var i = rewrite_clj.node.fn.sym_index.call(null,cljs.core.subs.call(null,nm,(1)));
cljs.core.swap_BANG_.call(null,max_n,cljs.core.max,i);

return cljs.core.nth.call(null,sym_seq,i);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Walk the form and create an expand function form.
 */
rewrite_clj.node.fn.fn_walk = (function rewrite_clj$node$fn$fn_walk(form){
var syms = (function (){var iter__4324__auto__ = (function rewrite_clj$node$fn$fn_walk_$_iter__10325(s__10326){
return (new cljs.core.LazySeq(null,(function (){
var s__10326__$1 = s__10326;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__10326__$1);
if(temp__5457__auto__){
var s__10326__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10326__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__10326__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__10328 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__10327 = (0);
while(true){
if((i__10327 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__10327);
var base = ((cljs.core._EQ_.call(null,i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));
cljs.core.chunk_append.call(null,b__10328,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"#"].join('')));

var G__10329 = (i__10327 + (1));
i__10327 = G__10329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10328),rewrite_clj$node$fn$fn_walk_$_iter__10325.call(null,cljs.core.chunk_rest.call(null,s__10326__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10328),null);
}
} else {
var i = cljs.core.first.call(null,s__10326__$2);
var base = ((cljs.core._EQ_.call(null,i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));
return cljs.core.cons.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"#"].join('')),rewrite_clj$node$fn$fn_walk_$_iter__10325.call(null,cljs.core.rest.call(null,s__10326__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null));
})();
var vararg_QMARK_ = false;
var max_n = cljs.core.atom.call(null,(0));
var body = clojure.walk.prewalk.call(null,((function (syms,vararg_QMARK_,max_n){
return (function (p1__10324_SHARP_){
var or__3949__auto__ = rewrite_clj.node.fn.symbol__GT_gensym.call(null,syms,vararg_QMARK_,max_n,p1__10324_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return p1__10324_SHARP_;
}
});})(syms,vararg_QMARK_,max_n))
,form);
return rewrite_clj.node.fn.construct_fn.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,max_n),cljs.core.rest.call(null,syms)),null,body);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.fn.Object}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.fn.FnNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.fn.FnNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k10331,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__10335 = k10331;
var G__10335__$1 = (((G__10335 instanceof cljs.core.Keyword))?G__10335.fqn:null);
switch (G__10335__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10331,else__4206__auto__);

}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#rewrite-clj.node.fn.FnNode{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10330){
var self__ = this;
var G__10330__$1 = this;
return (new cljs.core.RecordIter((0),G__10330__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1740346885 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10332,other10333){
var self__ = this;
var this10332__$1 = this;
return ((!((other10333 == null))) && ((this10332__$1.constructor === other10333.constructor)) && (cljs.core._EQ_.call(null,this10332__$1.children,other10333.children)) && (cljs.core._EQ_.call(null,this10332__$1.__extmap,other10333.__extmap)));
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.fn.fn_walk.call(null,rewrite_clj.node.protocols.sexprs.call(null,self__.children));
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((3) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children)),")"].join('');
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__10330){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__10336 = cljs.core.keyword_identical_QMARK_;
var expr__10337 = k__4211__auto__;
if(cljs.core.truth_(pred__10336.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__10337))){
return (new rewrite_clj.node.fn.FnNode(G__10330,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__10330),null));
}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__10330){
var self__ = this;
var this__4202__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,G__10330,self__.__extmap,self__.__hash));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

rewrite_clj.node.fn.FnNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.fn.FnNode.cljs$lang$type = true;

rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.fn/FnNode",null,(1),null));
});

rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"rewrite-clj.node.fn/FnNode");
});

/**
 * Positional factory function for rewrite-clj.node.fn/FnNode.
 */
rewrite_clj.node.fn.__GT_FnNode = (function rewrite_clj$node$fn$__GT_FnNode(children){
return (new rewrite_clj.node.fn.FnNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.fn/FnNode, taking a map of keywords to field values.
 */
rewrite_clj.node.fn.map__GT_FnNode = (function rewrite_clj$node$fn$map__GT_FnNode(G__10334){
var extmap__4236__auto__ = (function (){var G__10339 = cljs.core.dissoc.call(null,G__10334,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_.call(null,G__10334)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10339);
} else {
return G__10339;
}
})();
return (new rewrite_clj.node.fn.FnNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__10334),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

/**
 * Create node representing an anonymous function.
 */
rewrite_clj.node.fn.fn_node = (function rewrite_clj$node$fn$fn_node(children){
return rewrite_clj.node.fn.__GT_FnNode.call(null,children);
});

//# sourceMappingURL=fn.js.map
