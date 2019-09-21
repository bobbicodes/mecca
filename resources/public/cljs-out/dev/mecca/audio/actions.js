// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.audio.actions');
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
mecca.audio.actions.Play = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.audio.actions.Play.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.audio.actions.Play.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12789,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12793 = k12789;
var G__12793__$1 = (((G__12793 instanceof cljs.core.Keyword))?G__12793.fqn:null);
switch (G__12793__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12789,else__4206__auto__);

}
});

mecca.audio.actions.Play.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#mecca.audio.actions.Play{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$target,self__.target],null))], null),self__.__extmap));
});

mecca.audio.actions.Play.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12788){
var self__ = this;
var G__12788__$1 = this;
return (new cljs.core.RecordIter((0),G__12788__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

mecca.audio.actions.Play.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.audio.actions.Play.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.audio.actions.Play(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.audio.actions.Play.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

mecca.audio.actions.Play.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__12794 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1016465899 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__12794(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Play.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12790,other12791){
var self__ = this;
var this12790__$1 = this;
return ((!((other12791 == null))) && ((this12790__$1.constructor === other12791.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12790__$1.target,other12791.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12790__$1.__extmap,other12791.__extmap)));
});

mecca.audio.actions.Play.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.audio.actions.Play(self__.target,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

mecca.audio.actions.Play.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12788){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12795 = cljs.core.keyword_identical_QMARK_;
var expr__12796 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__12798 = cljs.core.cst$kw$target;
var G__12799 = expr__12796;
return (pred__12795.cljs$core$IFn$_invoke$arity$2 ? pred__12795.cljs$core$IFn$_invoke$arity$2(G__12798,G__12799) : pred__12795.call(null,G__12798,G__12799));
})())){
return (new mecca.audio.actions.Play(G__12788,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Play(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__12788),null));
}
});

mecca.audio.actions.Play.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Play.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12788){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Play(self__.target,G__12788,self__.__extmap,self__.__hash));
});

mecca.audio.actions.Play.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.audio.actions.Play.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$target], null);
});

mecca.audio.actions.Play.cljs$lang$type = true;

mecca.audio.actions.Play.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.audio.actions/Play",null,(1),null));
});

mecca.audio.actions.Play.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"mecca.audio.actions/Play");
});

/**
 * Positional factory function for mecca.audio.actions/Play.
 */
mecca.audio.actions.__GT_Play = (function mecca$audio$actions$__GT_Play(target){
return (new mecca.audio.actions.Play(target,null,null,null));
});

/**
 * Factory function for mecca.audio.actions/Play, taking a map of keywords to field values.
 */
mecca.audio.actions.map__GT_Play = (function mecca$audio$actions$map__GT_Play(G__12792){
var extmap__4236__auto__ = (function (){var G__12800 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12792,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__12792)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12800);
} else {
return G__12800;
}
})();
return (new mecca.audio.actions.Play(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__12792),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
mecca.audio.actions.PlayOnce = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.audio.actions.PlayOnce.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12803,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12807 = k12803;
var G__12807__$1 = (((G__12807 instanceof cljs.core.Keyword))?G__12807.fqn:null);
switch (G__12807__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12803,else__4206__auto__);

}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#mecca.audio.actions.PlayOnce{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$target,self__.target],null))], null),self__.__extmap));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12802){
var self__ = this;
var G__12802__$1 = this;
return (new cljs.core.RecordIter((0),G__12802__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.audio.actions.PlayOnce(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__12808 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (904884220 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__12808(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12804,other12805){
var self__ = this;
var this12804__$1 = this;
return ((!((other12805 == null))) && ((this12804__$1.constructor === other12805.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12804__$1.target,other12805.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12804__$1.__extmap,other12805.__extmap)));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.audio.actions.PlayOnce(self__.target,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12802){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12809 = cljs.core.keyword_identical_QMARK_;
var expr__12810 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__12812 = cljs.core.cst$kw$target;
var G__12813 = expr__12810;
return (pred__12809.cljs$core$IFn$_invoke$arity$2 ? pred__12809.cljs$core$IFn$_invoke$arity$2(G__12812,G__12813) : pred__12809.call(null,G__12812,G__12813));
})())){
return (new mecca.audio.actions.PlayOnce(G__12802,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.PlayOnce(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__12802),null));
}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12802){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.PlayOnce(self__.target,G__12802,self__.__extmap,self__.__hash));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.audio.actions.PlayOnce.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$target], null);
});

mecca.audio.actions.PlayOnce.cljs$lang$type = true;

mecca.audio.actions.PlayOnce.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.audio.actions/PlayOnce",null,(1),null));
});

mecca.audio.actions.PlayOnce.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"mecca.audio.actions/PlayOnce");
});

/**
 * Positional factory function for mecca.audio.actions/PlayOnce.
 */
mecca.audio.actions.__GT_PlayOnce = (function mecca$audio$actions$__GT_PlayOnce(target){
return (new mecca.audio.actions.PlayOnce(target,null,null,null));
});

/**
 * Factory function for mecca.audio.actions/PlayOnce, taking a map of keywords to field values.
 */
mecca.audio.actions.map__GT_PlayOnce = (function mecca$audio$actions$map__GT_PlayOnce(G__12806){
var extmap__4236__auto__ = (function (){var G__12814 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12806,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__12806)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12814);
} else {
return G__12814;
}
})();
return (new mecca.audio.actions.PlayOnce(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__12806),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
mecca.audio.actions.Loop = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.audio.actions.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.audio.actions.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12817,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12821 = k12817;
var G__12821__$1 = (((G__12821 instanceof cljs.core.Keyword))?G__12821.fqn:null);
switch (G__12821__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12817,else__4206__auto__);

}
});

mecca.audio.actions.Loop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#mecca.audio.actions.Loop{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$target,self__.target],null))], null),self__.__extmap));
});

mecca.audio.actions.Loop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12816){
var self__ = this;
var G__12816__$1 = this;
return (new cljs.core.RecordIter((0),G__12816__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

mecca.audio.actions.Loop.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.audio.actions.Loop.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.audio.actions.Loop(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.audio.actions.Loop.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

mecca.audio.actions.Loop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__12822 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1500233508 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__12822(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Loop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12818,other12819){
var self__ = this;
var this12818__$1 = this;
return ((!((other12819 == null))) && ((this12818__$1.constructor === other12819.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12818__$1.target,other12819.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12818__$1.__extmap,other12819.__extmap)));
});

mecca.audio.actions.Loop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.audio.actions.Loop(self__.target,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

mecca.audio.actions.Loop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12816){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12823 = cljs.core.keyword_identical_QMARK_;
var expr__12824 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__12826 = cljs.core.cst$kw$target;
var G__12827 = expr__12824;
return (pred__12823.cljs$core$IFn$_invoke$arity$2 ? pred__12823.cljs$core$IFn$_invoke$arity$2(G__12826,G__12827) : pred__12823.call(null,G__12826,G__12827));
})())){
return (new mecca.audio.actions.Loop(G__12816,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Loop(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__12816),null));
}
});

mecca.audio.actions.Loop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Loop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12816){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Loop(self__.target,G__12816,self__.__extmap,self__.__hash));
});

mecca.audio.actions.Loop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.audio.actions.Loop.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$target], null);
});

mecca.audio.actions.Loop.cljs$lang$type = true;

mecca.audio.actions.Loop.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.audio.actions/Loop",null,(1),null));
});

mecca.audio.actions.Loop.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"mecca.audio.actions/Loop");
});

/**
 * Positional factory function for mecca.audio.actions/Loop.
 */
mecca.audio.actions.__GT_Loop = (function mecca$audio$actions$__GT_Loop(target){
return (new mecca.audio.actions.Loop(target,null,null,null));
});

/**
 * Factory function for mecca.audio.actions/Loop, taking a map of keywords to field values.
 */
mecca.audio.actions.map__GT_Loop = (function mecca$audio$actions$map__GT_Loop(G__12820){
var extmap__4236__auto__ = (function (){var G__12828 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12820,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__12820)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12828);
} else {
return G__12828;
}
})();
return (new mecca.audio.actions.Loop(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__12820),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
mecca.audio.actions.Stop = (function (target,__meta,__extmap,__hash){
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mecca.audio.actions.Stop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

mecca.audio.actions.Stop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12831,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12835 = k12831;
var G__12835__$1 = (((G__12835 instanceof cljs.core.Keyword))?G__12835.fqn:null);
switch (G__12835__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12831,else__4206__auto__);

}
});

mecca.audio.actions.Stop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#mecca.audio.actions.Stop{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$target,self__.target],null))], null),self__.__extmap));
});

mecca.audio.actions.Stop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12830){
var self__ = this;
var G__12830__$1 = this;
return (new cljs.core.RecordIter((0),G__12830__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

mecca.audio.actions.Stop.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

mecca.audio.actions.Stop.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new mecca.audio.actions.Stop(self__.target,self__.__meta,self__.__extmap,self__.__hash));
});

mecca.audio.actions.Stop.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

mecca.audio.actions.Stop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__12836 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1066667590 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__12836(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Stop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12832,other12833){
var self__ = this;
var this12832__$1 = this;
return ((!((other12833 == null))) && ((this12832__$1.constructor === other12833.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12832__$1.target,other12833.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12832__$1.__extmap,other12833.__extmap)));
});

mecca.audio.actions.Stop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.audio.actions.Stop(self__.target,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

mecca.audio.actions.Stop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12830){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12837 = cljs.core.keyword_identical_QMARK_;
var expr__12838 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__12840 = cljs.core.cst$kw$target;
var G__12841 = expr__12838;
return (pred__12837.cljs$core$IFn$_invoke$arity$2 ? pred__12837.cljs$core$IFn$_invoke$arity$2(G__12840,G__12841) : pred__12837.call(null,G__12840,G__12841));
})())){
return (new mecca.audio.actions.Stop(G__12830,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Stop(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__12830),null));
}
});

mecca.audio.actions.Stop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Stop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12830){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Stop(self__.target,G__12830,self__.__extmap,self__.__hash));
});

mecca.audio.actions.Stop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.audio.actions.Stop.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$target], null);
});

mecca.audio.actions.Stop.cljs$lang$type = true;

mecca.audio.actions.Stop.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.audio.actions/Stop",null,(1),null));
});

mecca.audio.actions.Stop.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"mecca.audio.actions/Stop");
});

/**
 * Positional factory function for mecca.audio.actions/Stop.
 */
mecca.audio.actions.__GT_Stop = (function mecca$audio$actions$__GT_Stop(target){
return (new mecca.audio.actions.Stop(target,null,null,null));
});

/**
 * Factory function for mecca.audio.actions/Stop, taking a map of keywords to field values.
 */
mecca.audio.actions.map__GT_Stop = (function mecca$audio$actions$map__GT_Stop(G__12834){
var extmap__4236__auto__ = (function (){var G__12842 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12834,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__12834)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12842);
} else {
return G__12842;
}
})();
return (new mecca.audio.actions.Stop(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__12834),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

