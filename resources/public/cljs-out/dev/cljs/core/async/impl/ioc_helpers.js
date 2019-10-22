// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),cljs.core.cst$kw$finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612 = (function (f,meta14613){
this.f = f;
this.meta14613 = meta14613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14614,meta14613__$1){
var self__ = this;
var _14614__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612(self__.f,meta14613__$1));
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14614){
var self__ = this;
var _14614__$1 = this;
return self__.meta14613;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$meta14613], null);
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers14612";

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers14612");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers14612.
 */
cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers14612 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers14612(f__$1,meta14613){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612(f__$1,meta14613));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers14612(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__14615 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__14615.cljs$core$IFn$_invoke$arity$1 ? fexpr__14615.cljs$core$IFn$_invoke$arity$1(state) : fexpr__14615.call(null,state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e14616){if((e14616 instanceof Object)){
var ex = e14616;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e14616;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5455__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_14617_14619 = state;
(statearr_14617_14619[(2)] = x);

(statearr_14617_14619[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5455__auto__)){
var cb = temp__5455__auto__;
var statearr_14618_14620 = state;
(statearr_14618_14620[(2)] = cljs.core.deref(cb));

(statearr_14618_14620[(1)] = blk);


return cljs.core.cst$kw$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5455__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_14621_14623 = state;
(statearr_14621_14623[(2)] = ret_val);

(statearr_14621_14623[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5455__auto__)){
var cb = temp__5455__auto__;
var statearr_14622_14624 = state;
(statearr_14622_14624[(2)] = cljs.core.deref(cb));

(statearr_14622_14624[(1)] = blk);


return cljs.core.cst$kw$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k14626,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__14630 = k14626;
var G__14630__$1 = (((G__14630 instanceof cljs.core.Keyword))?G__14630.fqn:null);
switch (G__14630__$1) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14626,else__4206__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14625){
var self__ = this;
var G__14625__$1 = this;
return (new cljs.core.RecordIter((0),G__14625__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$catch_DASH_block,cljs.core.cst$kw$catch_DASH_exception,cljs.core.cst$kw$finally_DASH_block,cljs.core.cst$kw$continue_DASH_block,cljs.core.cst$kw$prev], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__14631 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (846900531 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__14631(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14627,other14628){
var self__ = this;
var this14627__$1 = this;
return ((!((other14628 == null))) && ((this14627__$1.constructor === other14628.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14627__$1.catch_block,other14628.catch_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14627__$1.catch_exception,other14628.catch_exception)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14627__$1.finally_block,other14628.finally_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14627__$1.continue_block,other14628.continue_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14627__$1.prev,other14628.prev)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14627__$1.__extmap,other14628.__extmap)));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$finally_DASH_block,null,cljs.core.cst$kw$catch_DASH_block,null,cljs.core.cst$kw$catch_DASH_exception,null,cljs.core.cst$kw$prev,null,cljs.core.cst$kw$continue_DASH_block,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__14625){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__14632 = cljs.core.keyword_identical_QMARK_;
var expr__14633 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__14635 = cljs.core.cst$kw$catch_DASH_block;
var G__14636 = expr__14633;
return (pred__14632.cljs$core$IFn$_invoke$arity$2 ? pred__14632.cljs$core$IFn$_invoke$arity$2(G__14635,G__14636) : pred__14632.call(null,G__14635,G__14636));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__14625,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14637 = cljs.core.cst$kw$catch_DASH_exception;
var G__14638 = expr__14633;
return (pred__14632.cljs$core$IFn$_invoke$arity$2 ? pred__14632.cljs$core$IFn$_invoke$arity$2(G__14637,G__14638) : pred__14632.call(null,G__14637,G__14638));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__14625,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14639 = cljs.core.cst$kw$finally_DASH_block;
var G__14640 = expr__14633;
return (pred__14632.cljs$core$IFn$_invoke$arity$2 ? pred__14632.cljs$core$IFn$_invoke$arity$2(G__14639,G__14640) : pred__14632.call(null,G__14639,G__14640));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__14625,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14641 = cljs.core.cst$kw$continue_DASH_block;
var G__14642 = expr__14633;
return (pred__14632.cljs$core$IFn$_invoke$arity$2 ? pred__14632.cljs$core$IFn$_invoke$arity$2(G__14641,G__14642) : pred__14632.call(null,G__14641,G__14642));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__14625,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14643 = cljs.core.cst$kw$prev;
var G__14644 = expr__14633;
return (pred__14632.cljs$core$IFn$_invoke$arity$2 ? pred__14632.cljs$core$IFn$_invoke$arity$2(G__14643,G__14644) : pred__14632.call(null,G__14643,G__14644));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__14625,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__14625),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$catch_DASH_block,self__.catch_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$catch_DASH_exception,self__.catch_exception,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$finally_DASH_block,self__.finally_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$continue_DASH_block,self__.continue_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$prev,self__.prev,null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__14625){
var self__ = this;
var this__4202__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__14625,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$catch_DASH_block,cljs.core.with_meta(cljs.core.cst$sym$catch_DASH_exception,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$Class], null)),cljs.core.cst$sym$finally_DASH_block,cljs.core.cst$sym$continue_DASH_block,cljs.core.cst$sym$prev], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-helpers/ExceptionFrame",null,(1),null));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/ExceptionFrame.
 */
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-helpers/ExceptionFrame, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__14629){
var extmap__4236__auto__ = (function (){var G__14645 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14629,cljs.core.cst$kw$catch_DASH_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$catch_DASH_exception,cljs.core.cst$kw$finally_DASH_block,cljs.core.cst$kw$continue_DASH_block,cljs.core.cst$kw$prev], 0));
if(cljs.core.record_QMARK_(G__14629)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14645);
} else {
return G__14645;
}
})();
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.cst$kw$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(G__14629),cljs.core.cst$kw$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(G__14629),cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(G__14629),cljs.core.cst$kw$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(G__14629),cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(G__14629),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_14647 = state;
(statearr_14647[(4)] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,(4))));

return statearr_14647;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,(4));
var catch_block = cljs.core.cst$kw$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.cst$kw$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,(5));
if(cljs.core.truth_((function (){var and__3938__auto__ = exception;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3938__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = exception;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = catch_block;
if(cljs.core.truth_(and__3938__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,catch_exception)) || ((exception instanceof catch_exception)));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
var statearr_14648 = state;
(statearr_14648[(1)] = catch_block);

(statearr_14648[(2)] = exception);

(statearr_14648[(5)] = null);

(statearr_14648[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.cst$kw$catch_DASH_block,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$catch_DASH_exception,null], 0)));

return statearr_14648;
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = exception;
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame))));
} else {
return and__3938__auto__;
}
})())){
var statearr_14649_14653 = state;
(statearr_14649_14653[(4)] = cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__14654 = state;
state = G__14654;
continue;
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = exception;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = cljs.core.not(catch_block);
if(and__3938__auto____$1){
return cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
var statearr_14650 = state;
(statearr_14650[(1)] = cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_14650[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.cst$kw$finally_DASH_block,null));

return statearr_14650;
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not(exception);
if(and__3938__auto__){
return cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3938__auto__;
}
})())){
var statearr_14651 = state;
(statearr_14651[(1)] = cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_14651[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.cst$kw$finally_DASH_block,null));

return statearr_14651;
} else {
if(((cljs.core.not(exception)) && (cljs.core.not(cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame))))){
var statearr_14652 = state;
(statearr_14652[(1)] = cljs.core.cst$kw$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_14652[(4)] = cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_14652;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
