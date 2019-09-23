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

mecca.audio.actions.Play.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12852,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12856 = k12852;
var G__12856__$1 = (((G__12856 instanceof cljs.core.Keyword))?G__12856.fqn:null);
switch (G__12856__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12852,else__4206__auto__);

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

mecca.audio.actions.Play.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12851){
var self__ = this;
var G__12851__$1 = this;
return (new cljs.core.RecordIter((0),G__12851__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4061__auto____$1 = (function (){var fexpr__12857 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1016465899 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__12857(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Play.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12853,other12854){
var self__ = this;
var this12853__$1 = this;
return ((!((other12854 == null))) && ((this12853__$1.constructor === other12854.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12853__$1.target,other12854.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12853__$1.__extmap,other12854.__extmap)));
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

mecca.audio.actions.Play.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12851){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12858 = cljs.core.keyword_identical_QMARK_;
var expr__12859 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__12861 = cljs.core.cst$kw$target;
var G__12862 = expr__12859;
return (pred__12858.cljs$core$IFn$_invoke$arity$2 ? pred__12858.cljs$core$IFn$_invoke$arity$2(G__12861,G__12862) : pred__12858.call(null,G__12861,G__12862));
})())){
return (new mecca.audio.actions.Play(G__12851,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Play(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__12851),null));
}
});

mecca.audio.actions.Play.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Play.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12851){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Play(self__.target,G__12851,self__.__extmap,self__.__hash));
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
mecca.audio.actions.map__GT_Play = (function mecca$audio$actions$map__GT_Play(G__12855){
var extmap__4236__auto__ = (function (){var G__12863 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12855,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__12855)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12863);
} else {
return G__12863;
}
})();
return (new mecca.audio.actions.Play(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__12855),null,cljs.core.not_empty(extmap__4236__auto__),null));
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

mecca.audio.actions.PlayOnce.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12866,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12870 = k12866;
var G__12870__$1 = (((G__12870 instanceof cljs.core.Keyword))?G__12870.fqn:null);
switch (G__12870__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12866,else__4206__auto__);

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

mecca.audio.actions.PlayOnce.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12865){
var self__ = this;
var G__12865__$1 = this;
return (new cljs.core.RecordIter((0),G__12865__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4061__auto____$1 = (function (){var fexpr__12871 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (904884220 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__12871(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12867,other12868){
var self__ = this;
var this12867__$1 = this;
return ((!((other12868 == null))) && ((this12867__$1.constructor === other12868.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12867__$1.target,other12868.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12867__$1.__extmap,other12868.__extmap)));
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

mecca.audio.actions.PlayOnce.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12865){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12872 = cljs.core.keyword_identical_QMARK_;
var expr__12873 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__12875 = cljs.core.cst$kw$target;
var G__12876 = expr__12873;
return (pred__12872.cljs$core$IFn$_invoke$arity$2 ? pred__12872.cljs$core$IFn$_invoke$arity$2(G__12875,G__12876) : pred__12872.call(null,G__12875,G__12876));
})())){
return (new mecca.audio.actions.PlayOnce(G__12865,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.PlayOnce(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__12865),null));
}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12865){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.PlayOnce(self__.target,G__12865,self__.__extmap,self__.__hash));
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
mecca.audio.actions.map__GT_PlayOnce = (function mecca$audio$actions$map__GT_PlayOnce(G__12869){
var extmap__4236__auto__ = (function (){var G__12877 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12869,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__12869)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12877);
} else {
return G__12877;
}
})();
return (new mecca.audio.actions.PlayOnce(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__12869),null,cljs.core.not_empty(extmap__4236__auto__),null));
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

mecca.audio.actions.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12880,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12884 = k12880;
var G__12884__$1 = (((G__12884 instanceof cljs.core.Keyword))?G__12884.fqn:null);
switch (G__12884__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12880,else__4206__auto__);

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

mecca.audio.actions.Loop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12879){
var self__ = this;
var G__12879__$1 = this;
return (new cljs.core.RecordIter((0),G__12879__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4061__auto____$1 = (function (){var fexpr__12885 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1500233508 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__12885(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Loop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12881,other12882){
var self__ = this;
var this12881__$1 = this;
return ((!((other12882 == null))) && ((this12881__$1.constructor === other12882.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12881__$1.target,other12882.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12881__$1.__extmap,other12882.__extmap)));
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

mecca.audio.actions.Loop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12879){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12886 = cljs.core.keyword_identical_QMARK_;
var expr__12887 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__12889 = cljs.core.cst$kw$target;
var G__12890 = expr__12887;
return (pred__12886.cljs$core$IFn$_invoke$arity$2 ? pred__12886.cljs$core$IFn$_invoke$arity$2(G__12889,G__12890) : pred__12886.call(null,G__12889,G__12890));
})())){
return (new mecca.audio.actions.Loop(G__12879,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Loop(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__12879),null));
}
});

mecca.audio.actions.Loop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Loop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12879){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Loop(self__.target,G__12879,self__.__extmap,self__.__hash));
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
mecca.audio.actions.map__GT_Loop = (function mecca$audio$actions$map__GT_Loop(G__12883){
var extmap__4236__auto__ = (function (){var G__12891 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12883,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__12883)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12891);
} else {
return G__12891;
}
})();
return (new mecca.audio.actions.Loop(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__12883),null,cljs.core.not_empty(extmap__4236__auto__),null));
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

mecca.audio.actions.Stop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12894,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12898 = k12894;
var G__12898__$1 = (((G__12898 instanceof cljs.core.Keyword))?G__12898.fqn:null);
switch (G__12898__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12894,else__4206__auto__);

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

mecca.audio.actions.Stop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12893){
var self__ = this;
var G__12893__$1 = this;
return (new cljs.core.RecordIter((0),G__12893__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$target], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4061__auto____$1 = (function (){var fexpr__12899 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1066667590 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__12899(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Stop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12895,other12896){
var self__ = this;
var this12895__$1 = this;
return ((!((other12896 == null))) && ((this12895__$1.constructor === other12896.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12895__$1.target,other12896.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12895__$1.__extmap,other12896.__extmap)));
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

mecca.audio.actions.Stop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12893){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12900 = cljs.core.keyword_identical_QMARK_;
var expr__12901 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__12903 = cljs.core.cst$kw$target;
var G__12904 = expr__12901;
return (pred__12900.cljs$core$IFn$_invoke$arity$2 ? pred__12900.cljs$core$IFn$_invoke$arity$2(G__12903,G__12904) : pred__12900.call(null,G__12903,G__12904));
})())){
return (new mecca.audio.actions.Stop(G__12893,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Stop(self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__12893),null));
}
});

mecca.audio.actions.Stop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$target,self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Stop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12893){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Stop(self__.target,G__12893,self__.__extmap,self__.__hash));
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
mecca.audio.actions.map__GT_Stop = (function mecca$audio$actions$map__GT_Stop(G__12897){
var extmap__4236__auto__ = (function (){var G__12905 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12897,cljs.core.cst$kw$target);
if(cljs.core.record_QMARK_(G__12897)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12905);
} else {
return G__12905;
}
})();
return (new mecca.audio.actions.Stop(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(G__12897),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

