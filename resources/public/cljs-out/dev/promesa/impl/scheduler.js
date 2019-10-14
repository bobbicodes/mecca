// Compiled by ClojureScript 1.10.339 {}
goog.provide('promesa.impl.scheduler');
goog.require('cljs.core');
goog.require('promesa.protocols');
promesa.impl.scheduler.scheduled_task = (function promesa$impl$scheduler$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_.call(null,false);
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler8569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {promesa.protocols.ICancellable}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler8569 = (function (cur,done_QMARK_,cancelled,meta8570){
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta8570 = meta8570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
promesa.impl.scheduler.t_promesa$impl$scheduler8569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cancelled){
return (function (_8571,meta8570__$1){
var self__ = this;
var _8571__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler8569(self__.cur,self__.done_QMARK_,self__.cancelled,meta8570__$1));
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler8569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cancelled){
return (function (_8571){
var self__ = this;
var _8571__$1 = this;
return self__.meta8570;
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler8569.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.done_QMARK_);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler8569.prototype.promesa$protocols$ICancellable$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler8569.prototype.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.cancelled);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler8569.prototype.promesa$protocols$ICancellable$_cancel$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.cancelled))){
return null;
} else {
cljs.core.vreset_BANG_.call(null,self__.cancelled,true);

return clearTimeout(self__.cur);
}
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler8569.getBasis = ((function (cancelled){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null),new cljs.core.Symbol(null,"cancelled","cancelled",2129257751,null),new cljs.core.Symbol(null,"meta8570","meta8570",573762079,null)], null);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler8569.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler8569.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler8569";

promesa.impl.scheduler.t_promesa$impl$scheduler8569.cljs$lang$ctorPrWriter = ((function (cancelled){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler8569");
});})(cancelled))
;

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler8569.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler8569 = ((function (cancelled){
return (function promesa$impl$scheduler$scheduled_task_$___GT_t_promesa$impl$scheduler8569(cur__$1,done_QMARK___$1,cancelled__$1,meta8570){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler8569(cur__$1,done_QMARK___$1,cancelled__$1,meta8570));
});})(cancelled))
;

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler8569(cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.impl.scheduler.scheduler = (function promesa$impl$scheduler$scheduler(){
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler8572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler8572 = (function (meta8573){
this.meta8573 = meta8573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
promesa.impl.scheduler.t_promesa$impl$scheduler8572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8574,meta8573__$1){
var self__ = this;
var _8574__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler8572(meta8573__$1));
});

promesa.impl.scheduler.t_promesa$impl$scheduler8572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8574){
var self__ = this;
var _8574__$1 = this;
return self__.meta8573;
});

promesa.impl.scheduler.t_promesa$impl$scheduler8572.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler8572.prototype.promesa$protocols$IScheduler$_schedule$arity$3 = (function (_,ms,func){
var self__ = this;
var ___$1 = this;
var done_QMARK_ = cljs.core.volatile_BANG_.call(null,false);
var task = ((function (done_QMARK_,___$1){
return (function (){
try{return func.call(null);
}finally {cljs.core.vreset_BANG_.call(null,done_QMARK_,true);
}});})(done_QMARK_,___$1))
;
var cur = setTimeout(task,ms);
return promesa.impl.scheduler.scheduled_task.call(null,cur,done_QMARK_);
});

promesa.impl.scheduler.t_promesa$impl$scheduler8572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8573","meta8573",1693345252,null)], null);
});

promesa.impl.scheduler.t_promesa$impl$scheduler8572.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler8572.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler8572";

promesa.impl.scheduler.t_promesa$impl$scheduler8572.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler8572");
});

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler8572.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler8572 = (function promesa$impl$scheduler$scheduler_$___GT_t_promesa$impl$scheduler8572(meta8573){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler8572(meta8573));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler8572(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A default lazy scheduler instance.
 */
promesa.impl.scheduler._PLUS_scheduler_PLUS_ = (new cljs.core.Delay((function (){
return promesa.impl.scheduler.scheduler.call(null);
}),null));
promesa.impl.scheduler.schedule = (function promesa$impl$scheduler$schedule(ms,func){
return promesa.protocols._schedule.call(null,cljs.core.deref.call(null,promesa.impl.scheduler._PLUS_scheduler_PLUS_),ms,func);
});

//# sourceMappingURL=scheduler.js.map
