// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.music.actions');
goog.require('cljs.core');
goog.require('cljs.core.constants');

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

mecca.music.actions.Play.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k9829,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__9833 = k9829;
var G__9833__$1 = (((G__9833 instanceof cljs.core.Keyword))?G__9833.fqn:null);
switch (G__9833__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9829,else__4206__auto__);

}
});

mecca.music.actions.Play.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.Play{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$target,self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.Play.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9828){
var self__ = this;
var G__9828__$1 = this;
return (new cljs.core.RecordIter((0),G__9828__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (1 + cljs.core.count(self__.__extmap));
});

mecca.music.actions.Play.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__9834 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-775948522 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__9834(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.Play.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9830,other9831){
var self__ = this;
var this9830__$1 = this;
return ((!((other9831 == null))) && ((this9830__$1.constructor === other9831.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9830__$1.target,other9831.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9830__$1.__extmap,other9831.__extmap)));
});

mecca.music.actions.Play.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.Play(self__.target,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.Play.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__9828){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__9835 = cljs.core.keyword_identical_QMARK_;
var expr__9836 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__9838 = cljs.core.cst$kw$target;
var G__9839 = expr__9836;
return (pred__9835.cljs$core$IFn$_invoke$arity$2 ? pred__9835.cljs$core$IFn$_invoke$arity$2(G__9838,G__9839) : pred__9835.call(null,G__9838,G__9839));
})())){
return (new mecca.music.actions.Play(G__9828,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Play(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__9828),null));
}
});

mecca.music.actions.Play.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Play.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__9828){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Play(self__.target,G__9828,self__.__extmap,self__.__hash));
});

mecca.music.actions.Play.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.Play.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$target], null);
});

mecca.music.actions.Play.cljs$lang$type = true;

mecca.music.actions.Play.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/Play",null,(1),null));
});

mecca.music.actions.Play.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"mecca.music.actions/Play");
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
mecca.music.actions.map__GT_Play = (function mecca$music$actions$map__GT_Play(G__9832){
var extmap__4236__auto__ = (function (){var G__9840 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__9832,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__9832)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__9840);
} else {
return G__9840;
}
})();
return (new mecca.music.actions.Play(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__9832),null,cljs.core.not_empty(extmap__4236__auto__),null));
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

mecca.music.actions.PlayOnce.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k9843,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__9847 = k9843;
var G__9847__$1 = (((G__9847 instanceof cljs.core.Keyword))?G__9847.fqn:null);
switch (G__9847__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9843,else__4206__auto__);

}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.PlayOnce{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$target,self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9842){
var self__ = this;
var G__9842__$1 = this;
return (new cljs.core.RecordIter((0),G__9842__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (1 + cljs.core.count(self__.__extmap));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__9848 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-50980257 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__9848(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9844,other9845){
var self__ = this;
var this9844__$1 = this;
return ((!((other9845 == null))) && ((this9844__$1.constructor === other9845.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9844__$1.target,other9845.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9844__$1.__extmap,other9845.__extmap)));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.PlayOnce(self__.target,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__9842){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__9849 = cljs.core.keyword_identical_QMARK_;
var expr__9850 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__9852 = cljs.core.cst$kw$target;
var G__9853 = expr__9850;
return (pred__9849.cljs$core$IFn$_invoke$arity$2 ? pred__9849.cljs$core$IFn$_invoke$arity$2(G__9852,G__9853) : pred__9849.call(null,G__9852,G__9853));
})())){
return (new mecca.music.actions.PlayOnce(G__9842,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.PlayOnce(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__9842),null));
}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__9842){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.PlayOnce(self__.target,G__9842,self__.__extmap,self__.__hash));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.PlayOnce.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$target], null);
});

mecca.music.actions.PlayOnce.cljs$lang$type = true;

mecca.music.actions.PlayOnce.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/PlayOnce",null,(1),null));
});

mecca.music.actions.PlayOnce.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"mecca.music.actions/PlayOnce");
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
mecca.music.actions.map__GT_PlayOnce = (function mecca$music$actions$map__GT_PlayOnce(G__9846){
var extmap__4236__auto__ = (function (){var G__9854 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__9846,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__9846)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__9854);
} else {
return G__9854;
}
})();
return (new mecca.music.actions.PlayOnce(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__9846),null,cljs.core.not_empty(extmap__4236__auto__),null));
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

mecca.music.actions.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k9857,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__9861 = k9857;
var G__9861__$1 = (((G__9861 instanceof cljs.core.Keyword))?G__9861.fqn:null);
switch (G__9861__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9857,else__4206__auto__);

}
});

mecca.music.actions.Loop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.Loop{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$target,self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.Loop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9856){
var self__ = this;
var G__9856__$1 = this;
return (new cljs.core.RecordIter((0),G__9856__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (1 + cljs.core.count(self__.__extmap));
});

mecca.music.actions.Loop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__9862 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-2045201359 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__9862(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.Loop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9858,other9859){
var self__ = this;
var this9858__$1 = this;
return ((!((other9859 == null))) && ((this9858__$1.constructor === other9859.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9858__$1.target,other9859.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9858__$1.__extmap,other9859.__extmap)));
});

mecca.music.actions.Loop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.Loop(self__.target,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.Loop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__9856){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__9863 = cljs.core.keyword_identical_QMARK_;
var expr__9864 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__9866 = cljs.core.cst$kw$target;
var G__9867 = expr__9864;
return (pred__9863.cljs$core$IFn$_invoke$arity$2 ? pred__9863.cljs$core$IFn$_invoke$arity$2(G__9866,G__9867) : pred__9863.call(null,G__9866,G__9867));
})())){
return (new mecca.music.actions.Loop(G__9856,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Loop(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__9856),null));
}
});

mecca.music.actions.Loop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Loop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__9856){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Loop(self__.target,G__9856,self__.__extmap,self__.__hash));
});

mecca.music.actions.Loop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.Loop.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$target], null);
});

mecca.music.actions.Loop.cljs$lang$type = true;

mecca.music.actions.Loop.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/Loop",null,(1),null));
});

mecca.music.actions.Loop.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"mecca.music.actions/Loop");
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
mecca.music.actions.map__GT_Loop = (function mecca$music$actions$map__GT_Loop(G__9860){
var extmap__4236__auto__ = (function (){var G__9868 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__9860,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__9860)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__9868);
} else {
return G__9868;
}
})();
return (new mecca.music.actions.Loop(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__9860),null,cljs.core.not_empty(extmap__4236__auto__),null));
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

mecca.music.actions.Stop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k9871,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__9875 = k9871;
var G__9875__$1 = (((G__9875 instanceof cljs.core.Keyword))?G__9875.fqn:null);
switch (G__9875__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9871,else__4206__auto__);

}
});

mecca.music.actions.Stop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#mecca.music.actions.Stop{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$target,self__.target],null))], null),self__.__extmap));
});

mecca.music.actions.Stop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9870){
var self__ = this;
var G__9870__$1 = this;
return (new cljs.core.RecordIter((0),G__9870__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (1 + cljs.core.count(self__.__extmap));
});

mecca.music.actions.Stop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__9876 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1786047875 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__9876(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.music.actions.Stop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9872,other9873){
var self__ = this;
var this9872__$1 = this;
return ((!((other9873 == null))) && ((this9872__$1.constructor === other9873.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9872__$1.target,other9873.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this9872__$1.__extmap,other9873.__extmap)));
});

mecca.music.actions.Stop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.music.actions.Stop(self__.target,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

mecca.music.actions.Stop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__9870){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__9877 = cljs.core.keyword_identical_QMARK_;
var expr__9878 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__9880 = cljs.core.cst$kw$target;
var G__9881 = expr__9878;
return (pred__9877.cljs$core$IFn$_invoke$arity$2 ? pred__9877.cljs$core$IFn$_invoke$arity$2(G__9880,G__9881) : pred__9877.call(null,G__9880,G__9881));
})())){
return (new mecca.music.actions.Stop(G__9870,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Stop(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__9870),null));
}
});

mecca.music.actions.Stop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Stop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__9870){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Stop(self__.target,G__9870,self__.__extmap,self__.__hash));
});

mecca.music.actions.Stop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.music.actions.Stop.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$target], null);
});

mecca.music.actions.Stop.cljs$lang$type = true;

mecca.music.actions.Stop.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.music.actions/Stop",null,(1),null));
});

mecca.music.actions.Stop.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"mecca.music.actions/Stop");
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
mecca.music.actions.map__GT_Stop = (function mecca$music$actions$map__GT_Stop(G__9874){
var extmap__4236__auto__ = (function (){var G__9882 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__9874,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__9874)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__9882);
} else {
return G__9882;
}
})();
return (new mecca.music.actions.Stop(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__9874),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

