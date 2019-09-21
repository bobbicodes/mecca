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

mecca.music.actions.Play.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k10981,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__10985 = k10981;
var G__10985__$1 = (((G__10985 instanceof cljs.core.Keyword))?G__10985.fqn:null);
switch (G__10985__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10981,else__4206__auto__);

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

mecca.music.actions.Play.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10980){
var self__ = this;
var G__10980__$1 = this;
return (new cljs.core.RecordIter((0),G__10980__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

mecca.music.actions.Play.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10982,other10983){
var self__ = this;
var this10982__$1 = this;
return ((!((other10983 == null))) && ((this10982__$1.constructor === other10983.constructor)) && (cljs.core._EQ_.call(null,this10982__$1.target,other10983.target)) && (cljs.core._EQ_.call(null,this10982__$1.__extmap,other10983.__extmap)));
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

mecca.music.actions.Play.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__10980){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__10986 = cljs.core.keyword_identical_QMARK_;
var expr__10987 = k__4211__auto__;
if(cljs.core.truth_(pred__10986.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__10987))){
return (new mecca.music.actions.Play(G__10980,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Play(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__10980),null));
}
});

mecca.music.actions.Play.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Play.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__10980){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Play(self__.target,G__10980,self__.__extmap,self__.__hash));
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
mecca.music.actions.map__GT_Play = (function mecca$music$actions$map__GT_Play(G__10984){
var extmap__4236__auto__ = (function (){var G__10989 = cljs.core.dissoc.call(null,G__10984,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__10984)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__10989);
} else {
return G__10989;
}
})();
return (new mecca.music.actions.Play(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__10984),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
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

mecca.music.actions.PlayOnce.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k10992,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__10996 = k10992;
var G__10996__$1 = (((G__10996 instanceof cljs.core.Keyword))?G__10996.fqn:null);
switch (G__10996__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10992,else__4206__auto__);

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

mecca.music.actions.PlayOnce.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10991){
var self__ = this;
var G__10991__$1 = this;
return (new cljs.core.RecordIter((0),G__10991__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

mecca.music.actions.PlayOnce.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10993,other10994){
var self__ = this;
var this10993__$1 = this;
return ((!((other10994 == null))) && ((this10993__$1.constructor === other10994.constructor)) && (cljs.core._EQ_.call(null,this10993__$1.target,other10994.target)) && (cljs.core._EQ_.call(null,this10993__$1.__extmap,other10994.__extmap)));
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

mecca.music.actions.PlayOnce.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__10991){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__10997 = cljs.core.keyword_identical_QMARK_;
var expr__10998 = k__4211__auto__;
if(cljs.core.truth_(pred__10997.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__10998))){
return (new mecca.music.actions.PlayOnce(G__10991,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.PlayOnce(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__10991),null));
}
});

mecca.music.actions.PlayOnce.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.PlayOnce.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__10991){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.PlayOnce(self__.target,G__10991,self__.__extmap,self__.__hash));
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
mecca.music.actions.map__GT_PlayOnce = (function mecca$music$actions$map__GT_PlayOnce(G__10995){
var extmap__4236__auto__ = (function (){var G__11000 = cljs.core.dissoc.call(null,G__10995,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__10995)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11000);
} else {
return G__11000;
}
})();
return (new mecca.music.actions.PlayOnce(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__10995),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
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

mecca.music.actions.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k11003,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__11007 = k11003;
var G__11007__$1 = (((G__11007 instanceof cljs.core.Keyword))?G__11007.fqn:null);
switch (G__11007__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11003,else__4206__auto__);

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

mecca.music.actions.Loop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11002){
var self__ = this;
var G__11002__$1 = this;
return (new cljs.core.RecordIter((0),G__11002__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

mecca.music.actions.Loop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11004,other11005){
var self__ = this;
var this11004__$1 = this;
return ((!((other11005 == null))) && ((this11004__$1.constructor === other11005.constructor)) && (cljs.core._EQ_.call(null,this11004__$1.target,other11005.target)) && (cljs.core._EQ_.call(null,this11004__$1.__extmap,other11005.__extmap)));
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

mecca.music.actions.Loop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__11002){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__11008 = cljs.core.keyword_identical_QMARK_;
var expr__11009 = k__4211__auto__;
if(cljs.core.truth_(pred__11008.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__11009))){
return (new mecca.music.actions.Loop(G__11002,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Loop(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__11002),null));
}
});

mecca.music.actions.Loop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Loop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__11002){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Loop(self__.target,G__11002,self__.__extmap,self__.__hash));
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
mecca.music.actions.map__GT_Loop = (function mecca$music$actions$map__GT_Loop(G__11006){
var extmap__4236__auto__ = (function (){var G__11011 = cljs.core.dissoc.call(null,G__11006,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__11006)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11011);
} else {
return G__11011;
}
})();
return (new mecca.music.actions.Loop(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__11006),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
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

mecca.music.actions.Stop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k11014,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__11018 = k11014;
var G__11018__$1 = (((G__11018 instanceof cljs.core.Keyword))?G__11018.fqn:null);
switch (G__11018__$1) {
case "target":
return self__.target;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11014,else__4206__auto__);

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

mecca.music.actions.Stop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11013){
var self__ = this;
var G__11013__$1 = this;
return (new cljs.core.RecordIter((0),G__11013__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

mecca.music.actions.Stop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11015,other11016){
var self__ = this;
var this11015__$1 = this;
return ((!((other11016 == null))) && ((this11015__$1.constructor === other11016.constructor)) && (cljs.core._EQ_.call(null,this11015__$1.target,other11016.target)) && (cljs.core._EQ_.call(null,this11015__$1.__extmap,other11016.__extmap)));
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

mecca.music.actions.Stop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__11013){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__11019 = cljs.core.keyword_identical_QMARK_;
var expr__11020 = k__4211__auto__;
if(cljs.core.truth_(pred__11019.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__11020))){
return (new mecca.music.actions.Stop(G__11013,self__.__meta,self__.__extmap,null));
} else {
return (new mecca.music.actions.Stop(self__.target,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__11013),null));
}
});

mecca.music.actions.Stop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
});

mecca.music.actions.Stop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__11013){
var self__ = this;
var this__4202__auto____$1 = this;
return (new mecca.music.actions.Stop(self__.target,G__11013,self__.__extmap,self__.__hash));
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
mecca.music.actions.map__GT_Stop = (function mecca$music$actions$map__GT_Stop(G__11017){
var extmap__4236__auto__ = (function (){var G__11022 = cljs.core.dissoc.call(null,G__11017,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.record_QMARK_.call(null,G__11017)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11022);
} else {
return G__11022;
}
})();
return (new mecca.music.actions.Stop(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__11017),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


//# sourceMappingURL=actions.js.map
