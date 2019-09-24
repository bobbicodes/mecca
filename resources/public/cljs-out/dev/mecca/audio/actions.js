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

mecca.audio.actions.Play.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14021,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14025 = k14021;
var G__14025__$1 = (((G__14025 instanceof cljs.core.Keyword))?G__14025.fqn:null);
switch (G__14025__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14021,else__4206__auto__);

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

mecca.audio.actions.Play.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14020){
var self__ = this;
var G__14020__$1 = this;
return (new cljs.core.RecordIter((0),G__14020__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4061__auto____$1 = (function (){var fexpr__14026 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1016465899 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14026(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Play.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14022,other14023){
var self__ = this;
var this14022__$1 = this;
return ((!((other14023 == null))) && ((this14022__$1.constructor === other14023.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14022__$1.target,other14023.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14022__$1.__extmap,other14023.__extmap)));
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

mecca.audio.actions.Play.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14020){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14027 = cljs.core.keyword_identical_QMARK_;
var expr__14028 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14030 = cljs.core.cst$kw$target;
var G__14031 = expr__14028;
return (pred__14027.cljs$core$IFn$_invoke$arity$2 ? pred__14027.cljs$core$IFn$_invoke$arity$2(G__14030,G__14031) : pred__14027.call(null,G__14030,G__14031));
})())){
return (new mecca.audio.actions.Play(G__14020,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Play(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14020),null));
}
});

mecca.audio.actions.Play.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Play.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14020){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Play(self__.target,G__14020,self__.__extmap,self__.__hash));
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
mecca.audio.actions.map__GT_Play = (function mecca$audio$actions$map__GT_Play(G__14024){
var extmap__4236__auto__ = (function (){var G__14032 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14024,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__14024)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14032);
} else {
return G__14032;
}
})();
return (new mecca.audio.actions.Play(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__14024),null,cljs.core.not_empty(extmap__4236__auto__),null));
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

mecca.audio.actions.PlayOnce.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14035,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14039 = k14035;
var G__14039__$1 = (((G__14039 instanceof cljs.core.Keyword))?G__14039.fqn:null);
switch (G__14039__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14035,else__4206__auto__);

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

mecca.audio.actions.PlayOnce.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14034){
var self__ = this;
var G__14034__$1 = this;
return (new cljs.core.RecordIter((0),G__14034__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4061__auto____$1 = (function (){var fexpr__14040 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (904884220 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14040(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14036,other14037){
var self__ = this;
var this14036__$1 = this;
return ((!((other14037 == null))) && ((this14036__$1.constructor === other14037.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14036__$1.target,other14037.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14036__$1.__extmap,other14037.__extmap)));
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

mecca.audio.actions.PlayOnce.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14034){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14041 = cljs.core.keyword_identical_QMARK_;
var expr__14042 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14044 = cljs.core.cst$kw$target;
var G__14045 = expr__14042;
return (pred__14041.cljs$core$IFn$_invoke$arity$2 ? pred__14041.cljs$core$IFn$_invoke$arity$2(G__14044,G__14045) : pred__14041.call(null,G__14044,G__14045));
})())){
return (new mecca.audio.actions.PlayOnce(G__14034,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.PlayOnce(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14034),null));
}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14034){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.PlayOnce(self__.target,G__14034,self__.__extmap,self__.__hash));
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
mecca.audio.actions.map__GT_PlayOnce = (function mecca$audio$actions$map__GT_PlayOnce(G__14038){
var extmap__4236__auto__ = (function (){var G__14046 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14038,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__14038)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14046);
} else {
return G__14046;
}
})();
return (new mecca.audio.actions.PlayOnce(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__14038),null,cljs.core.not_empty(extmap__4236__auto__),null));
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

mecca.audio.actions.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14049,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14053 = k14049;
var G__14053__$1 = (((G__14053 instanceof cljs.core.Keyword))?G__14053.fqn:null);
switch (G__14053__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14049,else__4206__auto__);

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

mecca.audio.actions.Loop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14048){
var self__ = this;
var G__14048__$1 = this;
return (new cljs.core.RecordIter((0),G__14048__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4061__auto____$1 = (function (){var fexpr__14054 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1500233508 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14054(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Loop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14050,other14051){
var self__ = this;
var this14050__$1 = this;
return ((!((other14051 == null))) && ((this14050__$1.constructor === other14051.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14050__$1.target,other14051.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14050__$1.__extmap,other14051.__extmap)));
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

mecca.audio.actions.Loop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14048){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14055 = cljs.core.keyword_identical_QMARK_;
var expr__14056 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14058 = cljs.core.cst$kw$target;
var G__14059 = expr__14056;
return (pred__14055.cljs$core$IFn$_invoke$arity$2 ? pred__14055.cljs$core$IFn$_invoke$arity$2(G__14058,G__14059) : pred__14055.call(null,G__14058,G__14059));
})())){
return (new mecca.audio.actions.Loop(G__14048,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Loop(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14048),null));
}
});

mecca.audio.actions.Loop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Loop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14048){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Loop(self__.target,G__14048,self__.__extmap,self__.__hash));
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
mecca.audio.actions.map__GT_Loop = (function mecca$audio$actions$map__GT_Loop(G__14052){
var extmap__4236__auto__ = (function (){var G__14060 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14052,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__14052)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14060);
} else {
return G__14060;
}
})();
return (new mecca.audio.actions.Loop(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__14052),null,cljs.core.not_empty(extmap__4236__auto__),null));
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

mecca.audio.actions.Stop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14063,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14067 = k14063;
var G__14067__$1 = (((G__14067 instanceof cljs.core.Keyword))?G__14067.fqn:null);
switch (G__14067__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14063,else__4206__auto__);

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

mecca.audio.actions.Stop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14062){
var self__ = this;
var G__14062__$1 = this;
return (new cljs.core.RecordIter((0),G__14062__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4061__auto____$1 = (function (){var fexpr__14068 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1066667590 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14068(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Stop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14064,other14065){
var self__ = this;
var this14064__$1 = this;
return ((!((other14065 == null))) && ((this14064__$1.constructor === other14065.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14064__$1.target,other14065.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14064__$1.__extmap,other14065.__extmap)));
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

mecca.audio.actions.Stop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14062){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14069 = cljs.core.keyword_identical_QMARK_;
var expr__14070 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14072 = cljs.core.cst$kw$target;
var G__14073 = expr__14070;
return (pred__14069.cljs$core$IFn$_invoke$arity$2 ? pred__14069.cljs$core$IFn$_invoke$arity$2(G__14072,G__14073) : pred__14069.call(null,G__14072,G__14073));
})())){
return (new mecca.audio.actions.Stop(G__14062,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Stop(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14062),null));
}
});

mecca.audio.actions.Stop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Stop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14062){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Stop(self__.target,G__14062,self__.__extmap,self__.__hash));
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
mecca.audio.actions.map__GT_Stop = (function mecca$audio$actions$map__GT_Stop(G__14066){
var extmap__4236__auto__ = (function (){var G__14074 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14066,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__14066)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14074);
} else {
return G__14074;
}
})();
return (new mecca.audio.actions.Stop(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__14066),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

