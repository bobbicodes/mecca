// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.music.actions');
goog.require('cljs.core');

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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mecca.music.actions.Play = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.music.actions.Play.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.music.actions.Play.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15775,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15779 = k15775;
var G__15779__$1 = (((G__15779 instanceof cljs.core.Keyword))?G__15779.fqn:null);
switch (G__15779__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15775,else__4206__auto__);

}
});

mecca.music.actions.Play.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.Play{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.Play.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15774){
var self__ = this;
var G__15774__$1 = this;
return (new cljs.core.RecordIter((0),G__15774__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mecca.music.actions.Play.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.music.actions.Play.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.music.actions.Play(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.music.actions.Play.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.music.actions.Play.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-775948522 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.Play.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15776,other15777){
var self__ = this;
var this15776__$1 = this;
return ((!((other15777 == null))) && ((this15776__$1.constructor === other15777.constructor)) && (cljs.core._EQ_.call(null,this15776__$1.target,other15777.target)) && (cljs.core._EQ_.call(null,this15776__$1.__extmap,other15777.__extmap)));
});

mecca.music.actions.Play.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.Play(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.Play.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15774){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15780 = cljs.core.keyword_identical_QMARK_;
var expr__15781 = k__4211__auto__;
if(cljs.core.truth_(pred__15780.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__15781))){
return (new mecca.music.actions.Play(G__15774,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Play(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__15774),null));
}
});

mecca.music.actions.Play.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Play.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15774){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Play(self__.target,G__15774,self__.__extmap,self__.__hash));
});

mecca.music.actions.Play.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.Play.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.music.actions.Play.cljs$lang$type = true;

mecca.music.actions.Play.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/Play",null,(1),null));
});

mecca.music.actions.Play.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.music.actions/Play");
});

/**
 * Positional factory function for mecca.music.actions/Play.
 */
mecca.music.actions.__GT_Play = (function mecca$music$actions$__GT_Play(target){
return (new mecca.music.actions.Play(target,null,null,null));
});

/**
 * Factory function for mecca.music.actions/Play, taking a map of keywords to field values.
 */
mecca.music.actions.map__GT_Play = (function mecca$music$actions$map__GT_Play(G__15778){
var extmap__4236__auto__ = (function (){var G__15783 = cljs.core.dissoc.call(null,G__15778,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__15778)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__15783);
} else {
return G__15783;
}
})();
return (new mecca.music.actions.Play(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__15778),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mecca.music.actions.PlayOnce = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.music.actions.PlayOnce.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15786,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15790 = k15786;
var G__15790__$1 = (((G__15790 instanceof cljs.core.Keyword))?G__15790.fqn:null);
switch (G__15790__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15786,else__4206__auto__);

}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.PlayOnce{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15785){
var self__ = this;
var G__15785__$1 = this;
return (new cljs.core.RecordIter((0),G__15785__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.music.actions.PlayOnce(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-50980257 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15787,other15788){
var self__ = this;
var this15787__$1 = this;
return ((!((other15788 == null))) && ((this15787__$1.constructor === other15788.constructor)) && (cljs.core._EQ_.call(null,this15787__$1.target,other15788.target)) && (cljs.core._EQ_.call(null,this15787__$1.__extmap,other15788.__extmap)));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.PlayOnce(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15785){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15791 = cljs.core.keyword_identical_QMARK_;
var expr__15792 = k__4211__auto__;
if(cljs.core.truth_(pred__15791.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__15792))){
return (new mecca.music.actions.PlayOnce(G__15785,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.PlayOnce(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__15785),null));
}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15785){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.PlayOnce(self__.target,G__15785,self__.__extmap,self__.__hash));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.PlayOnce.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.music.actions.PlayOnce.cljs$lang$type = true;

mecca.music.actions.PlayOnce.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/PlayOnce",null,(1),null));
});

mecca.music.actions.PlayOnce.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.music.actions/PlayOnce");
});

/**
 * Positional factory function for mecca.music.actions/PlayOnce.
 */
mecca.music.actions.__GT_PlayOnce = (function mecca$music$actions$__GT_PlayOnce(target){
return (new mecca.music.actions.PlayOnce(target,null,null,null));
});

/**
 * Factory function for mecca.music.actions/PlayOnce, taking a map of keywords to field values.
 */
mecca.music.actions.map__GT_PlayOnce = (function mecca$music$actions$map__GT_PlayOnce(G__15789){
var extmap__4236__auto__ = (function (){var G__15794 = cljs.core.dissoc.call(null,G__15789,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__15789)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__15794);
} else {
return G__15794;
}
})();
return (new mecca.music.actions.PlayOnce(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__15789),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mecca.music.actions.Loop = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.music.actions.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.music.actions.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15797,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15801 = k15797;
var G__15801__$1 = (((G__15801 instanceof cljs.core.Keyword))?G__15801.fqn:null);
switch (G__15801__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15797,else__4206__auto__);

}
});

mecca.music.actions.Loop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.Loop{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.Loop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15796){
var self__ = this;
var G__15796__$1 = this;
return (new cljs.core.RecordIter((0),G__15796__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mecca.music.actions.Loop.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.music.actions.Loop.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.music.actions.Loop(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.music.actions.Loop.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.music.actions.Loop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-2045201359 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.Loop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15798,other15799){
var self__ = this;
var this15798__$1 = this;
return ((!((other15799 == null))) && ((this15798__$1.constructor === other15799.constructor)) && (cljs.core._EQ_.call(null,this15798__$1.target,other15799.target)) && (cljs.core._EQ_.call(null,this15798__$1.__extmap,other15799.__extmap)));
});

mecca.music.actions.Loop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.Loop(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.Loop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15796){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15802 = cljs.core.keyword_identical_QMARK_;
var expr__15803 = k__4211__auto__;
if(cljs.core.truth_(pred__15802.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__15803))){
return (new mecca.music.actions.Loop(G__15796,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Loop(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__15796),null));
}
});

mecca.music.actions.Loop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Loop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15796){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Loop(self__.target,G__15796,self__.__extmap,self__.__hash));
});

mecca.music.actions.Loop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.Loop.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.music.actions.Loop.cljs$lang$type = true;

mecca.music.actions.Loop.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/Loop",null,(1),null));
});

mecca.music.actions.Loop.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.music.actions/Loop");
});

/**
 * Positional factory function for mecca.music.actions/Loop.
 */
mecca.music.actions.__GT_Loop = (function mecca$music$actions$__GT_Loop(target){
return (new mecca.music.actions.Loop(target,null,null,null));
});

/**
 * Factory function for mecca.music.actions/Loop, taking a map of keywords to field values.
 */
mecca.music.actions.map__GT_Loop = (function mecca$music$actions$map__GT_Loop(G__15800){
var extmap__4236__auto__ = (function (){var G__15805 = cljs.core.dissoc.call(null,G__15800,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__15800)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__15805);
} else {
return G__15805;
}
})();
return (new mecca.music.actions.Loop(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__15800),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mecca.music.actions.Stop = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.music.actions.Stop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.music.actions.Stop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15808,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15812 = k15808;
var G__15812__$1 = (((G__15812 instanceof cljs.core.Keyword))?G__15812.fqn:null);
switch (G__15812__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15808,else__4206__auto__);

}
});

mecca.music.actions.Stop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.Stop{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.Stop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15807){
var self__ = this;
var G__15807__$1 = this;
return (new cljs.core.RecordIter((0),G__15807__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mecca.music.actions.Stop.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.music.actions.Stop.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.music.actions.Stop(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.music.actions.Stop.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.music.actions.Stop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1786047875 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.Stop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15809,other15810){
var self__ = this;
var this15809__$1 = this;
return ((!((other15810 == null))) && ((this15809__$1.constructor === other15810.constructor)) && (cljs.core._EQ_.call(null,this15809__$1.target,other15810.target)) && (cljs.core._EQ_.call(null,this15809__$1.__extmap,other15810.__extmap)));
});

mecca.music.actions.Stop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.Stop(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.Stop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15807){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15813 = cljs.core.keyword_identical_QMARK_;
var expr__15814 = k__4211__auto__;
if(cljs.core.truth_(pred__15813.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__15814))){
return (new mecca.music.actions.Stop(G__15807,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Stop(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__15807),null));
}
});

mecca.music.actions.Stop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Stop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15807){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Stop(self__.target,G__15807,self__.__extmap,self__.__hash));
});

mecca.music.actions.Stop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.Stop.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.music.actions.Stop.cljs$lang$type = true;

mecca.music.actions.Stop.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/Stop",null,(1),null));
});

mecca.music.actions.Stop.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.music.actions/Stop");
});

/**
 * Positional factory function for mecca.music.actions/Stop.
 */
mecca.music.actions.__GT_Stop = (function mecca$music$actions$__GT_Stop(target){
return (new mecca.music.actions.Stop(target,null,null,null));
});

/**
 * Factory function for mecca.music.actions/Stop, taking a map of keywords to field values.
 */
mecca.music.actions.map__GT_Stop = (function mecca$music$actions$map__GT_Stop(G__15811){
var extmap__4236__auto__ = (function (){var G__15816 = cljs.core.dissoc.call(null,G__15811,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__15811)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__15816);
} else {
return G__15816;
}
})();
return (new mecca.music.actions.Stop(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__15811),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


//# sourceMappingURL=actions.js.map
