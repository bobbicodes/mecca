// Compiled by ClojureScript 1.10.339 {}
goog.provide('mecca.audio.actions');
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

mecca.audio.actions.Play.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12205,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12209 = k12205;
var G__12209__$1 = (((G__12209 instanceof cljs.core.Keyword))?G__12209.fqn:null);
switch (G__12209__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12205,else__4206__auto__);

}
});

mecca.audio.actions.Play.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.audio.actions.Play{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.audio.actions.Play.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12204){
var self__ = this;
var G__12204__$1 = this;
return (new cljs.core.RecordIter((0),G__12204__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.audio.actions.Play.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1016465899 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Play.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12206,other12207){
var self__ = this;
var this12206__$1 = this;
return ((!((other12207 == null))) && ((this12206__$1.constructor === other12207.constructor)) && (cljs.core._EQ_.call(null,this12206__$1.target,other12207.target)) && (cljs.core._EQ_.call(null,this12206__$1.__extmap,other12207.__extmap)));
});

mecca.audio.actions.Play.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.audio.actions.Play(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.audio.actions.Play.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12204){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12210 = cljs.core.keyword_identical_QMARK_;
var expr__12211 = k__4211__auto__;
if(cljs.core.truth_(pred__12210.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__12211))){
return (new mecca.audio.actions.Play(G__12204,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Play(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__12204),null));
}
});

mecca.audio.actions.Play.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Play.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12204){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Play(self__.target,G__12204,self__.__extmap,self__.__hash));
});

mecca.audio.actions.Play.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.audio.actions.Play.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.audio.actions.Play.cljs$lang$type = true;

mecca.audio.actions.Play.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.audio.actions/Play",null,(1),null));
});

mecca.audio.actions.Play.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.audio.actions/Play");
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
mecca.audio.actions.map__GT_Play = (function mecca$audio$actions$map__GT_Play(G__12208){
var extmap__4236__auto__ = (function (){var G__12213 = cljs.core.dissoc.call(null,G__12208,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__12208)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12213);
} else {
return G__12213;
}
})();
return (new mecca.audio.actions.Play(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__12208),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
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

mecca.audio.actions.PlayOnce.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12216,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12220 = k12216;
var G__12220__$1 = (((G__12220 instanceof cljs.core.Keyword))?G__12220.fqn:null);
switch (G__12220__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12216,else__4206__auto__);

}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.audio.actions.PlayOnce{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12215){
var self__ = this;
var G__12215__$1 = this;
return (new cljs.core.RecordIter((0),G__12215__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (904884220 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12217,other12218){
var self__ = this;
var this12217__$1 = this;
return ((!((other12218 == null))) && ((this12217__$1.constructor === other12218.constructor)) && (cljs.core._EQ_.call(null,this12217__$1.target,other12218.target)) && (cljs.core._EQ_.call(null,this12217__$1.__extmap,other12218.__extmap)));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.audio.actions.PlayOnce(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12215){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12221 = cljs.core.keyword_identical_QMARK_;
var expr__12222 = k__4211__auto__;
if(cljs.core.truth_(pred__12221.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__12222))){
return (new mecca.audio.actions.PlayOnce(G__12215,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.PlayOnce(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__12215),null));
}
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12215){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.PlayOnce(self__.target,G__12215,self__.__extmap,self__.__hash));
});

mecca.audio.actions.PlayOnce.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.audio.actions.PlayOnce.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.audio.actions.PlayOnce.cljs$lang$type = true;

mecca.audio.actions.PlayOnce.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.audio.actions/PlayOnce",null,(1),null));
});

mecca.audio.actions.PlayOnce.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.audio.actions/PlayOnce");
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
mecca.audio.actions.map__GT_PlayOnce = (function mecca$audio$actions$map__GT_PlayOnce(G__12219){
var extmap__4236__auto__ = (function (){var G__12224 = cljs.core.dissoc.call(null,G__12219,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__12219)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12224);
} else {
return G__12224;
}
})();
return (new mecca.audio.actions.PlayOnce(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__12219),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
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

mecca.audio.actions.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12227,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12231 = k12227;
var G__12231__$1 = (((G__12231 instanceof cljs.core.Keyword))?G__12231.fqn:null);
switch (G__12231__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12227,else__4206__auto__);

}
});

mecca.audio.actions.Loop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.audio.actions.Loop{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.audio.actions.Loop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12226){
var self__ = this;
var G__12226__$1 = this;
return (new cljs.core.RecordIter((0),G__12226__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.audio.actions.Loop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1500233508 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Loop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12228,other12229){
var self__ = this;
var this12228__$1 = this;
return ((!((other12229 == null))) && ((this12228__$1.constructor === other12229.constructor)) && (cljs.core._EQ_.call(null,this12228__$1.target,other12229.target)) && (cljs.core._EQ_.call(null,this12228__$1.__extmap,other12229.__extmap)));
});

mecca.audio.actions.Loop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.audio.actions.Loop(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.audio.actions.Loop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12226){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12232 = cljs.core.keyword_identical_QMARK_;
var expr__12233 = k__4211__auto__;
if(cljs.core.truth_(pred__12232.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__12233))){
return (new mecca.audio.actions.Loop(G__12226,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Loop(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__12226),null));
}
});

mecca.audio.actions.Loop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Loop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12226){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Loop(self__.target,G__12226,self__.__extmap,self__.__hash));
});

mecca.audio.actions.Loop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.audio.actions.Loop.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.audio.actions.Loop.cljs$lang$type = true;

mecca.audio.actions.Loop.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.audio.actions/Loop",null,(1),null));
});

mecca.audio.actions.Loop.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.audio.actions/Loop");
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
mecca.audio.actions.map__GT_Loop = (function mecca$audio$actions$map__GT_Loop(G__12230){
var extmap__4236__auto__ = (function (){var G__12235 = cljs.core.dissoc.call(null,G__12230,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__12230)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12235);
} else {
return G__12235;
}
})();
return (new mecca.audio.actions.Loop(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__12230),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
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

mecca.audio.actions.Stop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k12238,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__12242 = k12238;
var G__12242__$1 = (((G__12242 instanceof cljs.core.Keyword))?G__12242.fqn:null);
switch (G__12242__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12238,else__4206__auto__);

}
});

mecca.audio.actions.Stop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#mecca.audio.actions.Stop{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
});

mecca.audio.actions.Stop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12237){
var self__ = this;
var G__12237__$1 = this;
return (new cljs.core.RecordIter((0),G__12237__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mecca.audio.actions.Stop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1066667590 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

mecca.audio.actions.Stop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12239,other12240){
var self__ = this;
var this12239__$1 = this;
return ((!((other12240 == null))) && ((this12239__$1.constructor === other12240.constructor)) && (cljs.core._EQ_.call(null,this12239__$1.target,other12240.target)) && (cljs.core._EQ_.call(null,this12239__$1.__extmap,other12240.__extmap)));
});

mecca.audio.actions.Stop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new mecca.audio.actions.Stop(self__.target,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

mecca.audio.actions.Stop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__12237){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__12243 = cljs.core.keyword_identical_QMARK_;
var expr__12244 = k__4211__auto__;
if(cljs.core.truth_(pred__12243.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__12244))){
return (new mecca.audio.actions.Stop(G__12237,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.audio.actions.Stop(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__12237),null));
}
});

mecca.audio.actions.Stop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.audio.actions.Stop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__12237){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.audio.actions.Stop(self__.target,G__12237,self__.__extmap,self__.__hash));
});

mecca.audio.actions.Stop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

mecca.audio.actions.Stop.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
});

mecca.audio.actions.Stop.cljs$lang$type = true;

mecca.audio.actions.Stop.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"mecca.audio.actions/Stop",null,(1),null));
});

mecca.audio.actions.Stop.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"mecca.audio.actions/Stop");
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
mecca.audio.actions.map__GT_Stop = (function mecca$audio$actions$map__GT_Stop(G__12241){
var extmap__4236__auto__ = (function (){var G__12246 = cljs.core.dissoc.call(null,G__12241,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__12241)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12246);
} else {
return G__12246;
}
})();
return (new mecca.audio.actions.Stop(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__12241),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


//# sourceMappingURL=actions.js.map
