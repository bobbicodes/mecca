goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
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
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905 = (function (f,meta33906){
this.f = f;
this.meta33906 = meta33906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33907,meta33906__$1){
var self__ = this;
var _33907__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905(self__.f,meta33906__$1));
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33907){
var self__ = this;
var _33907__$1 = this;
return self__.meta33906;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta33906","meta33906",998821243,null)], null);
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905.cljs$lang$type = true);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers33905");

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers33905");
}));

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers33905.
 */
cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers33905 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers33905(f__$1,meta33906){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905(f__$1,meta33906));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers33905(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__33908 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__33908.cljs$core$IFn$_invoke$arity$1 ? fexpr__33908.cljs$core$IFn$_invoke$arity$1(state) : fexpr__33908.call(null,state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e33909){if((e33909 instanceof Object)){
var ex = e33909;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e33909;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5733__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_33910_34020 = state;
(statearr_33910_34020[(2)] = x);

(statearr_33910_34020[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5733__auto__)){
var cb = temp__5733__auto__;
var statearr_33911_34021 = state;
(statearr_33911_34021[(2)] = cljs.core.deref(cb));

(statearr_33911_34021[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5733__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_33944_34023 = state;
(statearr_33944_34023[(2)] = ret_val);

(statearr_33944_34023[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5733__auto__)){
var cb = temp__5733__auto__;
var statearr_33949_34024 = state;
(statearr_33949_34024[(2)] = cljs.core.deref(cb));

(statearr_33949_34024[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (){
return null;
})));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33958,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33966 = k33958;
var G__33966__$1 = (((G__33966 instanceof cljs.core.Keyword))?G__33966.fqn:null);
switch (G__33966__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33958,else__4442__auto__);

}
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33970){
var vec__33971 = p__33970;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33957){
var self__ = this;
var G__33957__$1 = this;
return (new cljs.core.RecordIter((0),G__33957__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__33978 = (function (coll__4436__auto__){
return (846900531 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__33978(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33959,other33960){
var self__ = this;
var this33959__$1 = this;
return (((!((other33960 == null)))) && ((this33959__$1.constructor === other33960.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33959__$1.catch_block,other33960.catch_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33959__$1.catch_exception,other33960.catch_exception)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33959__$1.finally_block,other33960.finally_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33959__$1.continue_block,other33960.continue_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33959__$1.prev,other33960.prev)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33959__$1.__extmap,other33960.__extmap)));
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33957){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33985 = cljs.core.keyword_identical_QMARK_;
var expr__33986 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__33988 = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748);
var G__33989 = expr__33986;
return (pred__33985.cljs$core$IFn$_invoke$arity$2 ? pred__33985.cljs$core$IFn$_invoke$arity$2(G__33988,G__33989) : pred__33985.call(null,G__33988,G__33989));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__33957,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33990 = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795);
var G__33991 = expr__33986;
return (pred__33985.cljs$core$IFn$_invoke$arity$2 ? pred__33985.cljs$core$IFn$_invoke$arity$2(G__33990,G__33991) : pred__33985.call(null,G__33990,G__33991));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__33957,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33993 = new cljs.core.Keyword(null,"finally-block","finally-block",832982472);
var G__33994 = expr__33986;
return (pred__33985.cljs$core$IFn$_invoke$arity$2 ? pred__33985.cljs$core$IFn$_invoke$arity$2(G__33993,G__33994) : pred__33985.call(null,G__33993,G__33994));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__33957,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33995 = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850);
var G__33996 = expr__33986;
return (pred__33985.cljs$core$IFn$_invoke$arity$2 ? pred__33985.cljs$core$IFn$_invoke$arity$2(G__33995,G__33996) : pred__33985.call(null,G__33995,G__33996));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__33957,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33998 = new cljs.core.Keyword(null,"prev","prev",-1597069226);
var G__33999 = expr__33986;
return (pred__33985.cljs$core$IFn$_invoke$arity$2 ? pred__33985.cljs$core$IFn$_invoke$arity$2(G__33998,G__33999) : pred__33985.call(null,G__33998,G__33999));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__33957,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33957),null));
}
}
}
}
}
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev,null))], null),self__.__extmap));
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33957){
var self__ = this;
var this__4438__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__33957,self__.__extmap,self__.__hash));
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",-1479223021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"catch-exception","catch-exception",-356775268,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Class","Class",2064526977,null)], null)),new cljs.core.Symbol(null,"finally-block","finally-block",-1821453297,null),new cljs.core.Symbol(null,"continue-block","continue-block",-211516323,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true);

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"cljs.core.async.impl.ioc-helpers/ExceptionFrame",null,(1),null));
}));

(cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
}));

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/ExceptionFrame.
 */
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

/**
 * Factory function for cljs.core.async.impl.ioc-helpers/ExceptionFrame, taking a map of keywords to field values.
 */
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__33962){
var extmap__4478__auto__ = (function (){var G__34002 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33962,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], 0));
if(cljs.core.record_QMARK_(G__33962)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34002);
} else {
return G__34002;
}
})();
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__33962),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__33962),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__33962),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__33962),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__33962),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_34003 = state;
(statearr_34003[(4)] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,(4))));

return statearr_34003;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,(4));
var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,(5));
if(cljs.core.truth_((function (){var and__4174__auto__ = exception;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__4174__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = exception;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = catch_block;
if(cljs.core.truth_(and__4174__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),catch_exception)) || ((exception instanceof catch_exception)));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
var statearr_34004 = state;
(statearr_34004[(1)] = catch_block);

(statearr_34004[(2)] = exception);

(statearr_34004[(5)] = null);

(statearr_34004[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null], 0)));

return statearr_34004;
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = exception;
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(catch_block)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame))));
} else {
return and__4174__auto__;
}
})())){
var statearr_34005_34026 = state;
(statearr_34005_34026[(4)] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__34027 = state;
state = G__34027;
continue;
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = exception;
if(cljs.core.truth_(and__4174__auto__)){
if(cljs.core.not(catch_block)){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return false;
}
} else {
return and__4174__auto__;
}
})())){
var statearr_34006 = state;
(statearr_34006[(1)] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_34006[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_34006;
} else {
if(cljs.core.truth_(((cljs.core.not(exception))?new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame):false))){
var statearr_34007 = state;
(statearr_34007[(1)] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_34007[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_34007;
} else {
if(((cljs.core.not(exception)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame))))){
var statearr_34008 = state;
(statearr_34008[(1)] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_34008[(4)] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_34008;
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

//# sourceMappingURL=cljs.core.async.impl.ioc_helpers.js.map
