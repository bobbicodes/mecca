// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17838 = arguments.length;
switch (G__17838) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17839 = (function (f,blockable,meta17840){
this.f = f;
this.blockable = blockable;
this.meta17840 = meta17840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17841,meta17840__$1){
var self__ = this;
var _17841__$1 = this;
return (new cljs.core.async.t_cljs$core$async17839(self__.f,self__.blockable,meta17840__$1));
});

cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17841){
var self__ = this;
var _17841__$1 = this;
return self__.meta17840;
});

cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17840], null);
});

cljs.core.async.t_cljs$core$async17839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17839";

cljs.core.async.t_cljs$core$async17839.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17839");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17839.
 */
cljs.core.async.__GT_t_cljs$core$async17839 = (function cljs$core$async$__GT_t_cljs$core$async17839(f__$1,blockable__$1,meta17840){
return (new cljs.core.async.t_cljs$core$async17839(f__$1,blockable__$1,meta17840));
});

}

return (new cljs.core.async.t_cljs$core$async17839(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17845 = arguments.length;
switch (G__17845) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17848 = arguments.length;
switch (G__17848) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17851 = arguments.length;
switch (G__17851) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17853 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17853) : fn1.call(null,val_17853));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17853,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17853) : fn1.call(null,val_17853));
});})(val_17853,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17855 = arguments.length;
switch (G__17855) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___17857 = n;
var x_17858 = (0);
while(true){
if((x_17858 < n__4408__auto___17857)){
(a[x_17858] = x_17858);

var G__17859 = (x_17858 + (1));
x_17858 = G__17859;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17860 = (function (flag,meta17861){
this.flag = flag;
this.meta17861 = meta17861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17862,meta17861__$1){
var self__ = this;
var _17862__$1 = this;
return (new cljs.core.async.t_cljs$core$async17860(self__.flag,meta17861__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17862){
var self__ = this;
var _17862__$1 = this;
return self__.meta17861;
});})(flag))
;

cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17860.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17861], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17860";

cljs.core.async.t_cljs$core$async17860.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17860");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17860.
 */
cljs.core.async.__GT_t_cljs$core$async17860 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17860(flag__$1,meta17861){
return (new cljs.core.async.t_cljs$core$async17860(flag__$1,meta17861));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17860(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17863 = (function (flag,cb,meta17864){
this.flag = flag;
this.cb = cb;
this.meta17864 = meta17864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17865,meta17864__$1){
var self__ = this;
var _17865__$1 = this;
return (new cljs.core.async.t_cljs$core$async17863(self__.flag,self__.cb,meta17864__$1));
});

cljs.core.async.t_cljs$core$async17863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17865){
var self__ = this;
var _17865__$1 = this;
return self__.meta17864;
});

cljs.core.async.t_cljs$core$async17863.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17864], null);
});

cljs.core.async.t_cljs$core$async17863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17863";

cljs.core.async.t_cljs$core$async17863.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17863");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17863.
 */
cljs.core.async.__GT_t_cljs$core$async17863 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17863(flag__$1,cb__$1,meta17864){
return (new cljs.core.async.t_cljs$core$async17863(flag__$1,cb__$1,meta17864));
});

}

return (new cljs.core.async.t_cljs$core$async17863(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17866_SHARP_){
var G__17868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17866_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17868) : fret.call(null,G__17868));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17867_SHARP_){
var G__17869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17867_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17869) : fret.call(null,G__17869));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17870 = (i + (1));
i = G__17870;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17876 = arguments.length;
var i__4532__auto___17877 = (0);
while(true){
if((i__4532__auto___17877 < len__4531__auto___17876)){
args__4534__auto__.push((arguments[i__4532__auto___17877]));

var G__17878 = (i__4532__auto___17877 + (1));
i__4532__auto___17877 = G__17878;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17873){
var map__17874 = p__17873;
var map__17874__$1 = ((((!((map__17874 == null)))?(((((map__17874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17874):map__17874);
var opts = map__17874__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17871){
var G__17872 = cljs.core.first(seq17871);
var seq17871__$1 = cljs.core.next(seq17871);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17872,seq17871__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17880 = arguments.length;
switch (G__17880) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15911__auto___17926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___17926){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___17926){
return (function (state_17904){
var state_val_17905 = (state_17904[(1)]);
if((state_val_17905 === (7))){
var inst_17900 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17906_17927 = state_17904__$1;
(statearr_17906_17927[(2)] = inst_17900);

(statearr_17906_17927[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (1))){
var state_17904__$1 = state_17904;
var statearr_17907_17928 = state_17904__$1;
(statearr_17907_17928[(2)] = null);

(statearr_17907_17928[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (4))){
var inst_17883 = (state_17904[(7)]);
var inst_17883__$1 = (state_17904[(2)]);
var inst_17884 = (inst_17883__$1 == null);
var state_17904__$1 = (function (){var statearr_17908 = state_17904;
(statearr_17908[(7)] = inst_17883__$1);

return statearr_17908;
})();
if(cljs.core.truth_(inst_17884)){
var statearr_17909_17929 = state_17904__$1;
(statearr_17909_17929[(1)] = (5));

} else {
var statearr_17910_17930 = state_17904__$1;
(statearr_17910_17930[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (13))){
var state_17904__$1 = state_17904;
var statearr_17911_17931 = state_17904__$1;
(statearr_17911_17931[(2)] = null);

(statearr_17911_17931[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (6))){
var inst_17883 = (state_17904[(7)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17904__$1,(11),to,inst_17883);
} else {
if((state_val_17905 === (3))){
var inst_17902 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17904__$1,inst_17902);
} else {
if((state_val_17905 === (12))){
var state_17904__$1 = state_17904;
var statearr_17912_17932 = state_17904__$1;
(statearr_17912_17932[(2)] = null);

(statearr_17912_17932[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (2))){
var state_17904__$1 = state_17904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17904__$1,(4),from);
} else {
if((state_val_17905 === (11))){
var inst_17893 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
if(cljs.core.truth_(inst_17893)){
var statearr_17913_17933 = state_17904__$1;
(statearr_17913_17933[(1)] = (12));

} else {
var statearr_17914_17934 = state_17904__$1;
(statearr_17914_17934[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (9))){
var state_17904__$1 = state_17904;
var statearr_17915_17935 = state_17904__$1;
(statearr_17915_17935[(2)] = null);

(statearr_17915_17935[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (5))){
var state_17904__$1 = state_17904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17916_17936 = state_17904__$1;
(statearr_17916_17936[(1)] = (8));

} else {
var statearr_17917_17937 = state_17904__$1;
(statearr_17917_17937[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (14))){
var inst_17898 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17918_17938 = state_17904__$1;
(statearr_17918_17938[(2)] = inst_17898);

(statearr_17918_17938[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (10))){
var inst_17890 = (state_17904[(2)]);
var state_17904__$1 = state_17904;
var statearr_17919_17939 = state_17904__$1;
(statearr_17919_17939[(2)] = inst_17890);

(statearr_17919_17939[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17905 === (8))){
var inst_17887 = cljs.core.async.close_BANG_(to);
var state_17904__$1 = state_17904;
var statearr_17920_17940 = state_17904__$1;
(statearr_17920_17940[(2)] = inst_17887);

(statearr_17920_17940[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___17926))
;
return ((function (switch__15728__auto__,c__15911__auto___17926){
return (function() {
var cljs$core$async$state_machine__15729__auto__ = null;
var cljs$core$async$state_machine__15729__auto____0 = (function (){
var statearr_17921 = [null,null,null,null,null,null,null,null];
(statearr_17921[(0)] = cljs$core$async$state_machine__15729__auto__);

(statearr_17921[(1)] = (1));

return statearr_17921;
});
var cljs$core$async$state_machine__15729__auto____1 = (function (state_17904){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_17904);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e17922){if((e17922 instanceof Object)){
var ex__15732__auto__ = e17922;
var statearr_17923_17941 = state_17904;
(statearr_17923_17941[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17904);

return cljs.core.cst$kw$recur;
} else {
throw e17922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__17942 = state_17904;
state_17904 = G__17942;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$state_machine__15729__auto__ = function(state_17904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15729__auto____1.call(this,state_17904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15729__auto____0;
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15729__auto____1;
return cljs$core$async$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___17926))
})();
var state__15913__auto__ = (function (){var statearr_17924 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_17924[(6)] = c__15911__auto___17926);

return statearr_17924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___17926))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17943){
var vec__17944 = p__17943;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17944,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17944,(1),null);
var job = vec__17944;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15911__auto___18115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___18115,res,vec__17944,v,p,job,jobs,results){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___18115,res,vec__17944,v,p,job,jobs,results){
return (function (state_17951){
var state_val_17952 = (state_17951[(1)]);
if((state_val_17952 === (1))){
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17951__$1,(2),res,v);
} else {
if((state_val_17952 === (2))){
var inst_17948 = (state_17951[(2)]);
var inst_17949 = cljs.core.async.close_BANG_(res);
var state_17951__$1 = (function (){var statearr_17953 = state_17951;
(statearr_17953[(7)] = inst_17948);

return statearr_17953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17951__$1,inst_17949);
} else {
return null;
}
}
});})(c__15911__auto___18115,res,vec__17944,v,p,job,jobs,results))
;
return ((function (switch__15728__auto__,c__15911__auto___18115,res,vec__17944,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0 = (function (){
var statearr_17954 = [null,null,null,null,null,null,null,null];
(statearr_17954[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__);

(statearr_17954[(1)] = (1));

return statearr_17954;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1 = (function (state_17951){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_17951);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e17955){if((e17955 instanceof Object)){
var ex__15732__auto__ = e17955;
var statearr_17956_18116 = state_17951;
(statearr_17956_18116[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17951);

return cljs.core.cst$kw$recur;
} else {
throw e17955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__18117 = state_17951;
state_17951 = G__18117;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__ = function(state_17951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1.call(this,state_17951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___18115,res,vec__17944,v,p,job,jobs,results))
})();
var state__15913__auto__ = (function (){var statearr_17957 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_17957[(6)] = c__15911__auto___18115);

return statearr_17957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___18115,res,vec__17944,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17958){
var vec__17959 = p__17958;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17959,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17959,(1),null);
var job = vec__17959;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___18118 = n;
var __18119 = (0);
while(true){
if((__18119 < n__4408__auto___18118)){
var G__17962_18120 = type;
var G__17962_18121__$1 = (((G__17962_18120 instanceof cljs.core.Keyword))?G__17962_18120.fqn:null);
switch (G__17962_18121__$1) {
case "compute":
var c__15911__auto___18123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18119,c__15911__auto___18123,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (__18119,c__15911__auto___18123,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async){
return (function (state_17975){
var state_val_17976 = (state_17975[(1)]);
if((state_val_17976 === (1))){
var state_17975__$1 = state_17975;
var statearr_17977_18124 = state_17975__$1;
(statearr_17977_18124[(2)] = null);

(statearr_17977_18124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (2))){
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17975__$1,(4),jobs);
} else {
if((state_val_17976 === (3))){
var inst_17973 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17975__$1,inst_17973);
} else {
if((state_val_17976 === (4))){
var inst_17965 = (state_17975[(2)]);
var inst_17966 = process(inst_17965);
var state_17975__$1 = state_17975;
if(cljs.core.truth_(inst_17966)){
var statearr_17978_18125 = state_17975__$1;
(statearr_17978_18125[(1)] = (5));

} else {
var statearr_17979_18126 = state_17975__$1;
(statearr_17979_18126[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (5))){
var state_17975__$1 = state_17975;
var statearr_17980_18127 = state_17975__$1;
(statearr_17980_18127[(2)] = null);

(statearr_17980_18127[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (6))){
var state_17975__$1 = state_17975;
var statearr_17981_18128 = state_17975__$1;
(statearr_17981_18128[(2)] = null);

(statearr_17981_18128[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (7))){
var inst_17971 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_17982_18129 = state_17975__$1;
(statearr_17982_18129[(2)] = inst_17971);

(statearr_17982_18129[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18119,c__15911__auto___18123,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async))
;
return ((function (__18119,switch__15728__auto__,c__15911__auto___18123,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0 = (function (){
var statearr_17983 = [null,null,null,null,null,null,null];
(statearr_17983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__);

(statearr_17983[(1)] = (1));

return statearr_17983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1 = (function (state_17975){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_17975);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e17984){if((e17984 instanceof Object)){
var ex__15732__auto__ = e17984;
var statearr_17985_18130 = state_17975;
(statearr_17985_18130[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17975);

return cljs.core.cst$kw$recur;
} else {
throw e17984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__18131 = state_17975;
state_17975 = G__18131;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__ = function(state_17975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1.call(this,state_17975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__;
})()
;})(__18119,switch__15728__auto__,c__15911__auto___18123,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async))
})();
var state__15913__auto__ = (function (){var statearr_17986 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_17986[(6)] = c__15911__auto___18123);

return statearr_17986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(__18119,c__15911__auto___18123,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async))
);


break;
case "async":
var c__15911__auto___18132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18119,c__15911__auto___18132,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (__18119,c__15911__auto___18132,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async){
return (function (state_17999){
var state_val_18000 = (state_17999[(1)]);
if((state_val_18000 === (1))){
var state_17999__$1 = state_17999;
var statearr_18001_18133 = state_17999__$1;
(statearr_18001_18133[(2)] = null);

(statearr_18001_18133[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18000 === (2))){
var state_17999__$1 = state_17999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17999__$1,(4),jobs);
} else {
if((state_val_18000 === (3))){
var inst_17997 = (state_17999[(2)]);
var state_17999__$1 = state_17999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17999__$1,inst_17997);
} else {
if((state_val_18000 === (4))){
var inst_17989 = (state_17999[(2)]);
var inst_17990 = async(inst_17989);
var state_17999__$1 = state_17999;
if(cljs.core.truth_(inst_17990)){
var statearr_18002_18134 = state_17999__$1;
(statearr_18002_18134[(1)] = (5));

} else {
var statearr_18003_18135 = state_17999__$1;
(statearr_18003_18135[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18000 === (5))){
var state_17999__$1 = state_17999;
var statearr_18004_18136 = state_17999__$1;
(statearr_18004_18136[(2)] = null);

(statearr_18004_18136[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18000 === (6))){
var state_17999__$1 = state_17999;
var statearr_18005_18137 = state_17999__$1;
(statearr_18005_18137[(2)] = null);

(statearr_18005_18137[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18000 === (7))){
var inst_17995 = (state_17999[(2)]);
var state_17999__$1 = state_17999;
var statearr_18006_18138 = state_17999__$1;
(statearr_18006_18138[(2)] = inst_17995);

(statearr_18006_18138[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18119,c__15911__auto___18132,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async))
;
return ((function (__18119,switch__15728__auto__,c__15911__auto___18132,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0 = (function (){
var statearr_18007 = [null,null,null,null,null,null,null];
(statearr_18007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__);

(statearr_18007[(1)] = (1));

return statearr_18007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1 = (function (state_17999){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_17999);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e18008){if((e18008 instanceof Object)){
var ex__15732__auto__ = e18008;
var statearr_18009_18139 = state_17999;
(statearr_18009_18139[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17999);

return cljs.core.cst$kw$recur;
} else {
throw e18008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__18140 = state_17999;
state_17999 = G__18140;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__ = function(state_17999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1.call(this,state_17999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__;
})()
;})(__18119,switch__15728__auto__,c__15911__auto___18132,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async))
})();
var state__15913__auto__ = (function (){var statearr_18010 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_18010[(6)] = c__15911__auto___18132);

return statearr_18010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(__18119,c__15911__auto___18132,G__17962_18120,G__17962_18121__$1,n__4408__auto___18118,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17962_18121__$1)].join('')));

}

var G__18141 = (__18119 + (1));
__18119 = G__18141;
continue;
} else {
}
break;
}

var c__15911__auto___18142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___18142,jobs,results,process,async){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___18142,jobs,results,process,async){
return (function (state_18032){
var state_val_18033 = (state_18032[(1)]);
if((state_val_18033 === (1))){
var state_18032__$1 = state_18032;
var statearr_18034_18143 = state_18032__$1;
(statearr_18034_18143[(2)] = null);

(statearr_18034_18143[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (2))){
var state_18032__$1 = state_18032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18032__$1,(4),from);
} else {
if((state_val_18033 === (3))){
var inst_18030 = (state_18032[(2)]);
var state_18032__$1 = state_18032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18032__$1,inst_18030);
} else {
if((state_val_18033 === (4))){
var inst_18013 = (state_18032[(7)]);
var inst_18013__$1 = (state_18032[(2)]);
var inst_18014 = (inst_18013__$1 == null);
var state_18032__$1 = (function (){var statearr_18035 = state_18032;
(statearr_18035[(7)] = inst_18013__$1);

return statearr_18035;
})();
if(cljs.core.truth_(inst_18014)){
var statearr_18036_18144 = state_18032__$1;
(statearr_18036_18144[(1)] = (5));

} else {
var statearr_18037_18145 = state_18032__$1;
(statearr_18037_18145[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (5))){
var inst_18016 = cljs.core.async.close_BANG_(jobs);
var state_18032__$1 = state_18032;
var statearr_18038_18146 = state_18032__$1;
(statearr_18038_18146[(2)] = inst_18016);

(statearr_18038_18146[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (6))){
var inst_18013 = (state_18032[(7)]);
var inst_18018 = (state_18032[(8)]);
var inst_18018__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18019 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18020 = [inst_18013,inst_18018__$1];
var inst_18021 = (new cljs.core.PersistentVector(null,2,(5),inst_18019,inst_18020,null));
var state_18032__$1 = (function (){var statearr_18039 = state_18032;
(statearr_18039[(8)] = inst_18018__$1);

return statearr_18039;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18032__$1,(8),jobs,inst_18021);
} else {
if((state_val_18033 === (7))){
var inst_18028 = (state_18032[(2)]);
var state_18032__$1 = state_18032;
var statearr_18040_18147 = state_18032__$1;
(statearr_18040_18147[(2)] = inst_18028);

(statearr_18040_18147[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18033 === (8))){
var inst_18018 = (state_18032[(8)]);
var inst_18023 = (state_18032[(2)]);
var state_18032__$1 = (function (){var statearr_18041 = state_18032;
(statearr_18041[(9)] = inst_18023);

return statearr_18041;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18032__$1,(9),results,inst_18018);
} else {
if((state_val_18033 === (9))){
var inst_18025 = (state_18032[(2)]);
var state_18032__$1 = (function (){var statearr_18042 = state_18032;
(statearr_18042[(10)] = inst_18025);

return statearr_18042;
})();
var statearr_18043_18148 = state_18032__$1;
(statearr_18043_18148[(2)] = null);

(statearr_18043_18148[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___18142,jobs,results,process,async))
;
return ((function (switch__15728__auto__,c__15911__auto___18142,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0 = (function (){
var statearr_18044 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__);

(statearr_18044[(1)] = (1));

return statearr_18044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1 = (function (state_18032){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_18032);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e18045){if((e18045 instanceof Object)){
var ex__15732__auto__ = e18045;
var statearr_18046_18149 = state_18032;
(statearr_18046_18149[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18032);

return cljs.core.cst$kw$recur;
} else {
throw e18045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__18150 = state_18032;
state_18032 = G__18150;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__ = function(state_18032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1.call(this,state_18032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___18142,jobs,results,process,async))
})();
var state__15913__auto__ = (function (){var statearr_18047 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_18047[(6)] = c__15911__auto___18142);

return statearr_18047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___18142,jobs,results,process,async))
);


var c__15911__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto__,jobs,results,process,async){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto__,jobs,results,process,async){
return (function (state_18085){
var state_val_18086 = (state_18085[(1)]);
if((state_val_18086 === (7))){
var inst_18081 = (state_18085[(2)]);
var state_18085__$1 = state_18085;
var statearr_18087_18151 = state_18085__$1;
(statearr_18087_18151[(2)] = inst_18081);

(statearr_18087_18151[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (20))){
var state_18085__$1 = state_18085;
var statearr_18088_18152 = state_18085__$1;
(statearr_18088_18152[(2)] = null);

(statearr_18088_18152[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (1))){
var state_18085__$1 = state_18085;
var statearr_18089_18153 = state_18085__$1;
(statearr_18089_18153[(2)] = null);

(statearr_18089_18153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (4))){
var inst_18050 = (state_18085[(7)]);
var inst_18050__$1 = (state_18085[(2)]);
var inst_18051 = (inst_18050__$1 == null);
var state_18085__$1 = (function (){var statearr_18090 = state_18085;
(statearr_18090[(7)] = inst_18050__$1);

return statearr_18090;
})();
if(cljs.core.truth_(inst_18051)){
var statearr_18091_18154 = state_18085__$1;
(statearr_18091_18154[(1)] = (5));

} else {
var statearr_18092_18155 = state_18085__$1;
(statearr_18092_18155[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (15))){
var inst_18063 = (state_18085[(8)]);
var state_18085__$1 = state_18085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18085__$1,(18),to,inst_18063);
} else {
if((state_val_18086 === (21))){
var inst_18076 = (state_18085[(2)]);
var state_18085__$1 = state_18085;
var statearr_18093_18156 = state_18085__$1;
(statearr_18093_18156[(2)] = inst_18076);

(statearr_18093_18156[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (13))){
var inst_18078 = (state_18085[(2)]);
var state_18085__$1 = (function (){var statearr_18094 = state_18085;
(statearr_18094[(9)] = inst_18078);

return statearr_18094;
})();
var statearr_18095_18157 = state_18085__$1;
(statearr_18095_18157[(2)] = null);

(statearr_18095_18157[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (6))){
var inst_18050 = (state_18085[(7)]);
var state_18085__$1 = state_18085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18085__$1,(11),inst_18050);
} else {
if((state_val_18086 === (17))){
var inst_18071 = (state_18085[(2)]);
var state_18085__$1 = state_18085;
if(cljs.core.truth_(inst_18071)){
var statearr_18096_18158 = state_18085__$1;
(statearr_18096_18158[(1)] = (19));

} else {
var statearr_18097_18159 = state_18085__$1;
(statearr_18097_18159[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (3))){
var inst_18083 = (state_18085[(2)]);
var state_18085__$1 = state_18085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18085__$1,inst_18083);
} else {
if((state_val_18086 === (12))){
var inst_18060 = (state_18085[(10)]);
var state_18085__$1 = state_18085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18085__$1,(14),inst_18060);
} else {
if((state_val_18086 === (2))){
var state_18085__$1 = state_18085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18085__$1,(4),results);
} else {
if((state_val_18086 === (19))){
var state_18085__$1 = state_18085;
var statearr_18098_18160 = state_18085__$1;
(statearr_18098_18160[(2)] = null);

(statearr_18098_18160[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (11))){
var inst_18060 = (state_18085[(2)]);
var state_18085__$1 = (function (){var statearr_18099 = state_18085;
(statearr_18099[(10)] = inst_18060);

return statearr_18099;
})();
var statearr_18100_18161 = state_18085__$1;
(statearr_18100_18161[(2)] = null);

(statearr_18100_18161[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (9))){
var state_18085__$1 = state_18085;
var statearr_18101_18162 = state_18085__$1;
(statearr_18101_18162[(2)] = null);

(statearr_18101_18162[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (5))){
var state_18085__$1 = state_18085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18102_18163 = state_18085__$1;
(statearr_18102_18163[(1)] = (8));

} else {
var statearr_18103_18164 = state_18085__$1;
(statearr_18103_18164[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (14))){
var inst_18063 = (state_18085[(8)]);
var inst_18065 = (state_18085[(11)]);
var inst_18063__$1 = (state_18085[(2)]);
var inst_18064 = (inst_18063__$1 == null);
var inst_18065__$1 = cljs.core.not(inst_18064);
var state_18085__$1 = (function (){var statearr_18104 = state_18085;
(statearr_18104[(8)] = inst_18063__$1);

(statearr_18104[(11)] = inst_18065__$1);

return statearr_18104;
})();
if(inst_18065__$1){
var statearr_18105_18165 = state_18085__$1;
(statearr_18105_18165[(1)] = (15));

} else {
var statearr_18106_18166 = state_18085__$1;
(statearr_18106_18166[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (16))){
var inst_18065 = (state_18085[(11)]);
var state_18085__$1 = state_18085;
var statearr_18107_18167 = state_18085__$1;
(statearr_18107_18167[(2)] = inst_18065);

(statearr_18107_18167[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (10))){
var inst_18057 = (state_18085[(2)]);
var state_18085__$1 = state_18085;
var statearr_18108_18168 = state_18085__$1;
(statearr_18108_18168[(2)] = inst_18057);

(statearr_18108_18168[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (18))){
var inst_18068 = (state_18085[(2)]);
var state_18085__$1 = state_18085;
var statearr_18109_18169 = state_18085__$1;
(statearr_18109_18169[(2)] = inst_18068);

(statearr_18109_18169[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18086 === (8))){
var inst_18054 = cljs.core.async.close_BANG_(to);
var state_18085__$1 = state_18085;
var statearr_18110_18170 = state_18085__$1;
(statearr_18110_18170[(2)] = inst_18054);

(statearr_18110_18170[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto__,jobs,results,process,async))
;
return ((function (switch__15728__auto__,c__15911__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0 = (function (){
var statearr_18111 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18111[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__);

(statearr_18111[(1)] = (1));

return statearr_18111;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1 = (function (state_18085){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_18085);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e18112){if((e18112 instanceof Object)){
var ex__15732__auto__ = e18112;
var statearr_18113_18171 = state_18085;
(statearr_18113_18171[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18085);

return cljs.core.cst$kw$recur;
} else {
throw e18112;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__18172 = state_18085;
state_18085 = G__18172;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__ = function(state_18085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1.call(this,state_18085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto__,jobs,results,process,async))
})();
var state__15913__auto__ = (function (){var statearr_18114 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_18114[(6)] = c__15911__auto__);

return statearr_18114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto__,jobs,results,process,async))
);

return c__15911__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18174 = arguments.length;
switch (G__18174) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18177 = arguments.length;
switch (G__18177) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18180 = arguments.length;
switch (G__18180) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15911__auto___18229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___18229,tc,fc){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___18229,tc,fc){
return (function (state_18206){
var state_val_18207 = (state_18206[(1)]);
if((state_val_18207 === (7))){
var inst_18202 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18208_18230 = state_18206__$1;
(statearr_18208_18230[(2)] = inst_18202);

(statearr_18208_18230[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (1))){
var state_18206__$1 = state_18206;
var statearr_18209_18231 = state_18206__$1;
(statearr_18209_18231[(2)] = null);

(statearr_18209_18231[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (4))){
var inst_18183 = (state_18206[(7)]);
var inst_18183__$1 = (state_18206[(2)]);
var inst_18184 = (inst_18183__$1 == null);
var state_18206__$1 = (function (){var statearr_18210 = state_18206;
(statearr_18210[(7)] = inst_18183__$1);

return statearr_18210;
})();
if(cljs.core.truth_(inst_18184)){
var statearr_18211_18232 = state_18206__$1;
(statearr_18211_18232[(1)] = (5));

} else {
var statearr_18212_18233 = state_18206__$1;
(statearr_18212_18233[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (13))){
var state_18206__$1 = state_18206;
var statearr_18213_18234 = state_18206__$1;
(statearr_18213_18234[(2)] = null);

(statearr_18213_18234[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (6))){
var inst_18183 = (state_18206[(7)]);
var inst_18189 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18183) : p.call(null,inst_18183));
var state_18206__$1 = state_18206;
if(cljs.core.truth_(inst_18189)){
var statearr_18214_18235 = state_18206__$1;
(statearr_18214_18235[(1)] = (9));

} else {
var statearr_18215_18236 = state_18206__$1;
(statearr_18215_18236[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (3))){
var inst_18204 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18206__$1,inst_18204);
} else {
if((state_val_18207 === (12))){
var state_18206__$1 = state_18206;
var statearr_18216_18237 = state_18206__$1;
(statearr_18216_18237[(2)] = null);

(statearr_18216_18237[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (2))){
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18206__$1,(4),ch);
} else {
if((state_val_18207 === (11))){
var inst_18183 = (state_18206[(7)]);
var inst_18193 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18206__$1,(8),inst_18193,inst_18183);
} else {
if((state_val_18207 === (9))){
var state_18206__$1 = state_18206;
var statearr_18217_18238 = state_18206__$1;
(statearr_18217_18238[(2)] = tc);

(statearr_18217_18238[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (5))){
var inst_18186 = cljs.core.async.close_BANG_(tc);
var inst_18187 = cljs.core.async.close_BANG_(fc);
var state_18206__$1 = (function (){var statearr_18218 = state_18206;
(statearr_18218[(8)] = inst_18186);

return statearr_18218;
})();
var statearr_18219_18239 = state_18206__$1;
(statearr_18219_18239[(2)] = inst_18187);

(statearr_18219_18239[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (14))){
var inst_18200 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18220_18240 = state_18206__$1;
(statearr_18220_18240[(2)] = inst_18200);

(statearr_18220_18240[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (10))){
var state_18206__$1 = state_18206;
var statearr_18221_18241 = state_18206__$1;
(statearr_18221_18241[(2)] = fc);

(statearr_18221_18241[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (8))){
var inst_18195 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
if(cljs.core.truth_(inst_18195)){
var statearr_18222_18242 = state_18206__$1;
(statearr_18222_18242[(1)] = (12));

} else {
var statearr_18223_18243 = state_18206__$1;
(statearr_18223_18243[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___18229,tc,fc))
;
return ((function (switch__15728__auto__,c__15911__auto___18229,tc,fc){
return (function() {
var cljs$core$async$state_machine__15729__auto__ = null;
var cljs$core$async$state_machine__15729__auto____0 = (function (){
var statearr_18224 = [null,null,null,null,null,null,null,null,null];
(statearr_18224[(0)] = cljs$core$async$state_machine__15729__auto__);

(statearr_18224[(1)] = (1));

return statearr_18224;
});
var cljs$core$async$state_machine__15729__auto____1 = (function (state_18206){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_18206);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e18225){if((e18225 instanceof Object)){
var ex__15732__auto__ = e18225;
var statearr_18226_18244 = state_18206;
(statearr_18226_18244[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18206);

return cljs.core.cst$kw$recur;
} else {
throw e18225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__18245 = state_18206;
state_18206 = G__18245;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$state_machine__15729__auto__ = function(state_18206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15729__auto____1.call(this,state_18206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15729__auto____0;
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15729__auto____1;
return cljs$core$async$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___18229,tc,fc))
})();
var state__15913__auto__ = (function (){var statearr_18227 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_18227[(6)] = c__15911__auto___18229);

return statearr_18227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___18229,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15911__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto__){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto__){
return (function (state_18266){
var state_val_18267 = (state_18266[(1)]);
if((state_val_18267 === (7))){
var inst_18262 = (state_18266[(2)]);
var state_18266__$1 = state_18266;
var statearr_18268_18286 = state_18266__$1;
(statearr_18268_18286[(2)] = inst_18262);

(statearr_18268_18286[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18267 === (1))){
var inst_18246 = init;
var state_18266__$1 = (function (){var statearr_18269 = state_18266;
(statearr_18269[(7)] = inst_18246);

return statearr_18269;
})();
var statearr_18270_18287 = state_18266__$1;
(statearr_18270_18287[(2)] = null);

(statearr_18270_18287[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18267 === (4))){
var inst_18249 = (state_18266[(8)]);
var inst_18249__$1 = (state_18266[(2)]);
var inst_18250 = (inst_18249__$1 == null);
var state_18266__$1 = (function (){var statearr_18271 = state_18266;
(statearr_18271[(8)] = inst_18249__$1);

return statearr_18271;
})();
if(cljs.core.truth_(inst_18250)){
var statearr_18272_18288 = state_18266__$1;
(statearr_18272_18288[(1)] = (5));

} else {
var statearr_18273_18289 = state_18266__$1;
(statearr_18273_18289[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18267 === (6))){
var inst_18249 = (state_18266[(8)]);
var inst_18253 = (state_18266[(9)]);
var inst_18246 = (state_18266[(7)]);
var inst_18253__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18246,inst_18249) : f.call(null,inst_18246,inst_18249));
var inst_18254 = cljs.core.reduced_QMARK_(inst_18253__$1);
var state_18266__$1 = (function (){var statearr_18274 = state_18266;
(statearr_18274[(9)] = inst_18253__$1);

return statearr_18274;
})();
if(inst_18254){
var statearr_18275_18290 = state_18266__$1;
(statearr_18275_18290[(1)] = (8));

} else {
var statearr_18276_18291 = state_18266__$1;
(statearr_18276_18291[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18267 === (3))){
var inst_18264 = (state_18266[(2)]);
var state_18266__$1 = state_18266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18266__$1,inst_18264);
} else {
if((state_val_18267 === (2))){
var state_18266__$1 = state_18266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18266__$1,(4),ch);
} else {
if((state_val_18267 === (9))){
var inst_18253 = (state_18266[(9)]);
var inst_18246 = inst_18253;
var state_18266__$1 = (function (){var statearr_18277 = state_18266;
(statearr_18277[(7)] = inst_18246);

return statearr_18277;
})();
var statearr_18278_18292 = state_18266__$1;
(statearr_18278_18292[(2)] = null);

(statearr_18278_18292[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18267 === (5))){
var inst_18246 = (state_18266[(7)]);
var state_18266__$1 = state_18266;
var statearr_18279_18293 = state_18266__$1;
(statearr_18279_18293[(2)] = inst_18246);

(statearr_18279_18293[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18267 === (10))){
var inst_18260 = (state_18266[(2)]);
var state_18266__$1 = state_18266;
var statearr_18280_18294 = state_18266__$1;
(statearr_18280_18294[(2)] = inst_18260);

(statearr_18280_18294[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18267 === (8))){
var inst_18253 = (state_18266[(9)]);
var inst_18256 = cljs.core.deref(inst_18253);
var state_18266__$1 = state_18266;
var statearr_18281_18295 = state_18266__$1;
(statearr_18281_18295[(2)] = inst_18256);

(statearr_18281_18295[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto__))
;
return ((function (switch__15728__auto__,c__15911__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15729__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15729__auto____0 = (function (){
var statearr_18282 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18282[(0)] = cljs$core$async$reduce_$_state_machine__15729__auto__);

(statearr_18282[(1)] = (1));

return statearr_18282;
});
var cljs$core$async$reduce_$_state_machine__15729__auto____1 = (function (state_18266){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_18266);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e18283){if((e18283 instanceof Object)){
var ex__15732__auto__ = e18283;
var statearr_18284_18296 = state_18266;
(statearr_18284_18296[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18266);

return cljs.core.cst$kw$recur;
} else {
throw e18283;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__18297 = state_18266;
state_18266 = G__18297;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15729__auto__ = function(state_18266){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15729__auto____1.call(this,state_18266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15729__auto____0;
cljs$core$async$reduce_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15729__auto____1;
return cljs$core$async$reduce_$_state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto__))
})();
var state__15913__auto__ = (function (){var statearr_18285 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_18285[(6)] = c__15911__auto__);

return statearr_18285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto__))
);

return c__15911__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15911__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto__,f__$1){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto__,f__$1){
return (function (state_18303){
var state_val_18304 = (state_18303[(1)]);
if((state_val_18304 === (1))){
var inst_18298 = cljs.core.async.reduce(f__$1,init,ch);
var state_18303__$1 = state_18303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18303__$1,(2),inst_18298);
} else {
if((state_val_18304 === (2))){
var inst_18300 = (state_18303[(2)]);
var inst_18301 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18300) : f__$1.call(null,inst_18300));
var state_18303__$1 = state_18303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18303__$1,inst_18301);
} else {
return null;
}
}
});})(c__15911__auto__,f__$1))
;
return ((function (switch__15728__auto__,c__15911__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15729__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15729__auto____0 = (function (){
var statearr_18305 = [null,null,null,null,null,null,null];
(statearr_18305[(0)] = cljs$core$async$transduce_$_state_machine__15729__auto__);

(statearr_18305[(1)] = (1));

return statearr_18305;
});
var cljs$core$async$transduce_$_state_machine__15729__auto____1 = (function (state_18303){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_18303);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e18306){if((e18306 instanceof Object)){
var ex__15732__auto__ = e18306;
var statearr_18307_18309 = state_18303;
(statearr_18307_18309[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18303);

return cljs.core.cst$kw$recur;
} else {
throw e18306;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__18310 = state_18303;
state_18303 = G__18310;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15729__auto__ = function(state_18303){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15729__auto____1.call(this,state_18303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15729__auto____0;
cljs$core$async$transduce_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15729__auto____1;
return cljs$core$async$transduce_$_state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto__,f__$1))
})();
var state__15913__auto__ = (function (){var statearr_18308 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_18308[(6)] = c__15911__auto__);

return statearr_18308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto__,f__$1))
);

return c__15911__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18312 = arguments.length;
switch (G__18312) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15911__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto__){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto__){
return (function (state_18337){
var state_val_18338 = (state_18337[(1)]);
if((state_val_18338 === (7))){
var inst_18319 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
var statearr_18339_18360 = state_18337__$1;
(statearr_18339_18360[(2)] = inst_18319);

(statearr_18339_18360[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18338 === (1))){
var inst_18313 = cljs.core.seq(coll);
var inst_18314 = inst_18313;
var state_18337__$1 = (function (){var statearr_18340 = state_18337;
(statearr_18340[(7)] = inst_18314);

return statearr_18340;
})();
var statearr_18341_18361 = state_18337__$1;
(statearr_18341_18361[(2)] = null);

(statearr_18341_18361[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18338 === (4))){
var inst_18314 = (state_18337[(7)]);
var inst_18317 = cljs.core.first(inst_18314);
var state_18337__$1 = state_18337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18337__$1,(7),ch,inst_18317);
} else {
if((state_val_18338 === (13))){
var inst_18331 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
var statearr_18342_18362 = state_18337__$1;
(statearr_18342_18362[(2)] = inst_18331);

(statearr_18342_18362[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18338 === (6))){
var inst_18322 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
if(cljs.core.truth_(inst_18322)){
var statearr_18343_18363 = state_18337__$1;
(statearr_18343_18363[(1)] = (8));

} else {
var statearr_18344_18364 = state_18337__$1;
(statearr_18344_18364[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18338 === (3))){
var inst_18335 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18337__$1,inst_18335);
} else {
if((state_val_18338 === (12))){
var state_18337__$1 = state_18337;
var statearr_18345_18365 = state_18337__$1;
(statearr_18345_18365[(2)] = null);

(statearr_18345_18365[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18338 === (2))){
var inst_18314 = (state_18337[(7)]);
var state_18337__$1 = state_18337;
if(cljs.core.truth_(inst_18314)){
var statearr_18346_18366 = state_18337__$1;
(statearr_18346_18366[(1)] = (4));

} else {
var statearr_18347_18367 = state_18337__$1;
(statearr_18347_18367[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18338 === (11))){
var inst_18328 = cljs.core.async.close_BANG_(ch);
var state_18337__$1 = state_18337;
var statearr_18348_18368 = state_18337__$1;
(statearr_18348_18368[(2)] = inst_18328);

(statearr_18348_18368[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18338 === (9))){
var state_18337__$1 = state_18337;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18349_18369 = state_18337__$1;
(statearr_18349_18369[(1)] = (11));

} else {
var statearr_18350_18370 = state_18337__$1;
(statearr_18350_18370[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18338 === (5))){
var inst_18314 = (state_18337[(7)]);
var state_18337__$1 = state_18337;
var statearr_18351_18371 = state_18337__$1;
(statearr_18351_18371[(2)] = inst_18314);

(statearr_18351_18371[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18338 === (10))){
var inst_18333 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
var statearr_18352_18372 = state_18337__$1;
(statearr_18352_18372[(2)] = inst_18333);

(statearr_18352_18372[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18338 === (8))){
var inst_18314 = (state_18337[(7)]);
var inst_18324 = cljs.core.next(inst_18314);
var inst_18314__$1 = inst_18324;
var state_18337__$1 = (function (){var statearr_18353 = state_18337;
(statearr_18353[(7)] = inst_18314__$1);

return statearr_18353;
})();
var statearr_18354_18373 = state_18337__$1;
(statearr_18354_18373[(2)] = null);

(statearr_18354_18373[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto__))
;
return ((function (switch__15728__auto__,c__15911__auto__){
return (function() {
var cljs$core$async$state_machine__15729__auto__ = null;
var cljs$core$async$state_machine__15729__auto____0 = (function (){
var statearr_18355 = [null,null,null,null,null,null,null,null];
(statearr_18355[(0)] = cljs$core$async$state_machine__15729__auto__);

(statearr_18355[(1)] = (1));

return statearr_18355;
});
var cljs$core$async$state_machine__15729__auto____1 = (function (state_18337){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_18337);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e18356){if((e18356 instanceof Object)){
var ex__15732__auto__ = e18356;
var statearr_18357_18374 = state_18337;
(statearr_18357_18374[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18337);

return cljs.core.cst$kw$recur;
} else {
throw e18356;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__18375 = state_18337;
state_18337 = G__18375;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$state_machine__15729__auto__ = function(state_18337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15729__auto____1.call(this,state_18337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15729__auto____0;
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15729__auto____1;
return cljs$core$async$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto__))
})();
var state__15913__auto__ = (function (){var statearr_18358 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_18358[(6)] = c__15911__auto__);

return statearr_18358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto__))
);

return c__15911__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18376 = (function (ch,cs,meta18377){
this.ch = ch;
this.cs = cs;
this.meta18377 = meta18377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18378,meta18377__$1){
var self__ = this;
var _18378__$1 = this;
return (new cljs.core.async.t_cljs$core$async18376(self__.ch,self__.cs,meta18377__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18378){
var self__ = this;
var _18378__$1 = this;
return self__.meta18377;
});})(cs))
;

cljs.core.async.t_cljs$core$async18376.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18376.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18376.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18376.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18376.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18376.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18376.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18377], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18376";

cljs.core.async.t_cljs$core$async18376.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18376");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18376.
 */
cljs.core.async.__GT_t_cljs$core$async18376 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18376(ch__$1,cs__$1,meta18377){
return (new cljs.core.async.t_cljs$core$async18376(ch__$1,cs__$1,meta18377));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18376(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15911__auto___18598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___18598,cs,m,dchan,dctr,done){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___18598,cs,m,dchan,dctr,done){
return (function (state_18513){
var state_val_18514 = (state_18513[(1)]);
if((state_val_18514 === (7))){
var inst_18509 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
var statearr_18515_18599 = state_18513__$1;
(statearr_18515_18599[(2)] = inst_18509);

(statearr_18515_18599[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (20))){
var inst_18412 = (state_18513[(7)]);
var inst_18424 = cljs.core.first(inst_18412);
var inst_18425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18424,(0),null);
var inst_18426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18424,(1),null);
var state_18513__$1 = (function (){var statearr_18516 = state_18513;
(statearr_18516[(8)] = inst_18425);

return statearr_18516;
})();
if(cljs.core.truth_(inst_18426)){
var statearr_18517_18600 = state_18513__$1;
(statearr_18517_18600[(1)] = (22));

} else {
var statearr_18518_18601 = state_18513__$1;
(statearr_18518_18601[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (27))){
var inst_18461 = (state_18513[(9)]);
var inst_18456 = (state_18513[(10)]);
var inst_18381 = (state_18513[(11)]);
var inst_18454 = (state_18513[(12)]);
var inst_18461__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18454,inst_18456);
var inst_18462 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18461__$1,inst_18381,done);
var state_18513__$1 = (function (){var statearr_18519 = state_18513;
(statearr_18519[(9)] = inst_18461__$1);

return statearr_18519;
})();
if(cljs.core.truth_(inst_18462)){
var statearr_18520_18602 = state_18513__$1;
(statearr_18520_18602[(1)] = (30));

} else {
var statearr_18521_18603 = state_18513__$1;
(statearr_18521_18603[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (1))){
var state_18513__$1 = state_18513;
var statearr_18522_18604 = state_18513__$1;
(statearr_18522_18604[(2)] = null);

(statearr_18522_18604[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (24))){
var inst_18412 = (state_18513[(7)]);
var inst_18431 = (state_18513[(2)]);
var inst_18432 = cljs.core.next(inst_18412);
var inst_18390 = inst_18432;
var inst_18391 = null;
var inst_18392 = (0);
var inst_18393 = (0);
var state_18513__$1 = (function (){var statearr_18523 = state_18513;
(statearr_18523[(13)] = inst_18393);

(statearr_18523[(14)] = inst_18391);

(statearr_18523[(15)] = inst_18392);

(statearr_18523[(16)] = inst_18431);

(statearr_18523[(17)] = inst_18390);

return statearr_18523;
})();
var statearr_18524_18605 = state_18513__$1;
(statearr_18524_18605[(2)] = null);

(statearr_18524_18605[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (39))){
var state_18513__$1 = state_18513;
var statearr_18528_18606 = state_18513__$1;
(statearr_18528_18606[(2)] = null);

(statearr_18528_18606[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (4))){
var inst_18381 = (state_18513[(11)]);
var inst_18381__$1 = (state_18513[(2)]);
var inst_18382 = (inst_18381__$1 == null);
var state_18513__$1 = (function (){var statearr_18529 = state_18513;
(statearr_18529[(11)] = inst_18381__$1);

return statearr_18529;
})();
if(cljs.core.truth_(inst_18382)){
var statearr_18530_18607 = state_18513__$1;
(statearr_18530_18607[(1)] = (5));

} else {
var statearr_18531_18608 = state_18513__$1;
(statearr_18531_18608[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (15))){
var inst_18393 = (state_18513[(13)]);
var inst_18391 = (state_18513[(14)]);
var inst_18392 = (state_18513[(15)]);
var inst_18390 = (state_18513[(17)]);
var inst_18408 = (state_18513[(2)]);
var inst_18409 = (inst_18393 + (1));
var tmp18525 = inst_18391;
var tmp18526 = inst_18392;
var tmp18527 = inst_18390;
var inst_18390__$1 = tmp18527;
var inst_18391__$1 = tmp18525;
var inst_18392__$1 = tmp18526;
var inst_18393__$1 = inst_18409;
var state_18513__$1 = (function (){var statearr_18532 = state_18513;
(statearr_18532[(18)] = inst_18408);

(statearr_18532[(13)] = inst_18393__$1);

(statearr_18532[(14)] = inst_18391__$1);

(statearr_18532[(15)] = inst_18392__$1);

(statearr_18532[(17)] = inst_18390__$1);

return statearr_18532;
})();
var statearr_18533_18609 = state_18513__$1;
(statearr_18533_18609[(2)] = null);

(statearr_18533_18609[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (21))){
var inst_18435 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
var statearr_18537_18610 = state_18513__$1;
(statearr_18537_18610[(2)] = inst_18435);

(statearr_18537_18610[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (31))){
var inst_18461 = (state_18513[(9)]);
var inst_18465 = done(null);
var inst_18466 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18461);
var state_18513__$1 = (function (){var statearr_18538 = state_18513;
(statearr_18538[(19)] = inst_18465);

return statearr_18538;
})();
var statearr_18539_18611 = state_18513__$1;
(statearr_18539_18611[(2)] = inst_18466);

(statearr_18539_18611[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (32))){
var inst_18456 = (state_18513[(10)]);
var inst_18453 = (state_18513[(20)]);
var inst_18455 = (state_18513[(21)]);
var inst_18454 = (state_18513[(12)]);
var inst_18468 = (state_18513[(2)]);
var inst_18469 = (inst_18456 + (1));
var tmp18534 = inst_18453;
var tmp18535 = inst_18455;
var tmp18536 = inst_18454;
var inst_18453__$1 = tmp18534;
var inst_18454__$1 = tmp18536;
var inst_18455__$1 = tmp18535;
var inst_18456__$1 = inst_18469;
var state_18513__$1 = (function (){var statearr_18540 = state_18513;
(statearr_18540[(10)] = inst_18456__$1);

(statearr_18540[(20)] = inst_18453__$1);

(statearr_18540[(21)] = inst_18455__$1);

(statearr_18540[(22)] = inst_18468);

(statearr_18540[(12)] = inst_18454__$1);

return statearr_18540;
})();
var statearr_18541_18612 = state_18513__$1;
(statearr_18541_18612[(2)] = null);

(statearr_18541_18612[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (40))){
var inst_18481 = (state_18513[(23)]);
var inst_18485 = done(null);
var inst_18486 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18481);
var state_18513__$1 = (function (){var statearr_18542 = state_18513;
(statearr_18542[(24)] = inst_18485);

return statearr_18542;
})();
var statearr_18543_18613 = state_18513__$1;
(statearr_18543_18613[(2)] = inst_18486);

(statearr_18543_18613[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (33))){
var inst_18472 = (state_18513[(25)]);
var inst_18474 = cljs.core.chunked_seq_QMARK_(inst_18472);
var state_18513__$1 = state_18513;
if(inst_18474){
var statearr_18544_18614 = state_18513__$1;
(statearr_18544_18614[(1)] = (36));

} else {
var statearr_18545_18615 = state_18513__$1;
(statearr_18545_18615[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (13))){
var inst_18402 = (state_18513[(26)]);
var inst_18405 = cljs.core.async.close_BANG_(inst_18402);
var state_18513__$1 = state_18513;
var statearr_18546_18616 = state_18513__$1;
(statearr_18546_18616[(2)] = inst_18405);

(statearr_18546_18616[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (22))){
var inst_18425 = (state_18513[(8)]);
var inst_18428 = cljs.core.async.close_BANG_(inst_18425);
var state_18513__$1 = state_18513;
var statearr_18547_18617 = state_18513__$1;
(statearr_18547_18617[(2)] = inst_18428);

(statearr_18547_18617[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (36))){
var inst_18472 = (state_18513[(25)]);
var inst_18476 = cljs.core.chunk_first(inst_18472);
var inst_18477 = cljs.core.chunk_rest(inst_18472);
var inst_18478 = cljs.core.count(inst_18476);
var inst_18453 = inst_18477;
var inst_18454 = inst_18476;
var inst_18455 = inst_18478;
var inst_18456 = (0);
var state_18513__$1 = (function (){var statearr_18548 = state_18513;
(statearr_18548[(10)] = inst_18456);

(statearr_18548[(20)] = inst_18453);

(statearr_18548[(21)] = inst_18455);

(statearr_18548[(12)] = inst_18454);

return statearr_18548;
})();
var statearr_18549_18618 = state_18513__$1;
(statearr_18549_18618[(2)] = null);

(statearr_18549_18618[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (41))){
var inst_18472 = (state_18513[(25)]);
var inst_18488 = (state_18513[(2)]);
var inst_18489 = cljs.core.next(inst_18472);
var inst_18453 = inst_18489;
var inst_18454 = null;
var inst_18455 = (0);
var inst_18456 = (0);
var state_18513__$1 = (function (){var statearr_18550 = state_18513;
(statearr_18550[(10)] = inst_18456);

(statearr_18550[(20)] = inst_18453);

(statearr_18550[(27)] = inst_18488);

(statearr_18550[(21)] = inst_18455);

(statearr_18550[(12)] = inst_18454);

return statearr_18550;
})();
var statearr_18551_18619 = state_18513__$1;
(statearr_18551_18619[(2)] = null);

(statearr_18551_18619[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (43))){
var state_18513__$1 = state_18513;
var statearr_18552_18620 = state_18513__$1;
(statearr_18552_18620[(2)] = null);

(statearr_18552_18620[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (29))){
var inst_18497 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
var statearr_18553_18621 = state_18513__$1;
(statearr_18553_18621[(2)] = inst_18497);

(statearr_18553_18621[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (44))){
var inst_18506 = (state_18513[(2)]);
var state_18513__$1 = (function (){var statearr_18554 = state_18513;
(statearr_18554[(28)] = inst_18506);

return statearr_18554;
})();
var statearr_18555_18622 = state_18513__$1;
(statearr_18555_18622[(2)] = null);

(statearr_18555_18622[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (6))){
var inst_18445 = (state_18513[(29)]);
var inst_18444 = cljs.core.deref(cs);
var inst_18445__$1 = cljs.core.keys(inst_18444);
var inst_18446 = cljs.core.count(inst_18445__$1);
var inst_18447 = cljs.core.reset_BANG_(dctr,inst_18446);
var inst_18452 = cljs.core.seq(inst_18445__$1);
var inst_18453 = inst_18452;
var inst_18454 = null;
var inst_18455 = (0);
var inst_18456 = (0);
var state_18513__$1 = (function (){var statearr_18556 = state_18513;
(statearr_18556[(29)] = inst_18445__$1);

(statearr_18556[(30)] = inst_18447);

(statearr_18556[(10)] = inst_18456);

(statearr_18556[(20)] = inst_18453);

(statearr_18556[(21)] = inst_18455);

(statearr_18556[(12)] = inst_18454);

return statearr_18556;
})();
var statearr_18557_18623 = state_18513__$1;
(statearr_18557_18623[(2)] = null);

(statearr_18557_18623[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (28))){
var inst_18453 = (state_18513[(20)]);
var inst_18472 = (state_18513[(25)]);
var inst_18472__$1 = cljs.core.seq(inst_18453);
var state_18513__$1 = (function (){var statearr_18558 = state_18513;
(statearr_18558[(25)] = inst_18472__$1);

return statearr_18558;
})();
if(inst_18472__$1){
var statearr_18559_18624 = state_18513__$1;
(statearr_18559_18624[(1)] = (33));

} else {
var statearr_18560_18625 = state_18513__$1;
(statearr_18560_18625[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (25))){
var inst_18456 = (state_18513[(10)]);
var inst_18455 = (state_18513[(21)]);
var inst_18458 = (inst_18456 < inst_18455);
var inst_18459 = inst_18458;
var state_18513__$1 = state_18513;
if(cljs.core.truth_(inst_18459)){
var statearr_18561_18626 = state_18513__$1;
(statearr_18561_18626[(1)] = (27));

} else {
var statearr_18562_18627 = state_18513__$1;
(statearr_18562_18627[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (34))){
var state_18513__$1 = state_18513;
var statearr_18563_18628 = state_18513__$1;
(statearr_18563_18628[(2)] = null);

(statearr_18563_18628[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (17))){
var state_18513__$1 = state_18513;
var statearr_18564_18629 = state_18513__$1;
(statearr_18564_18629[(2)] = null);

(statearr_18564_18629[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (3))){
var inst_18511 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18513__$1,inst_18511);
} else {
if((state_val_18514 === (12))){
var inst_18440 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
var statearr_18565_18630 = state_18513__$1;
(statearr_18565_18630[(2)] = inst_18440);

(statearr_18565_18630[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (2))){
var state_18513__$1 = state_18513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18513__$1,(4),ch);
} else {
if((state_val_18514 === (23))){
var state_18513__$1 = state_18513;
var statearr_18566_18631 = state_18513__$1;
(statearr_18566_18631[(2)] = null);

(statearr_18566_18631[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (35))){
var inst_18495 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
var statearr_18567_18632 = state_18513__$1;
(statearr_18567_18632[(2)] = inst_18495);

(statearr_18567_18632[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (19))){
var inst_18412 = (state_18513[(7)]);
var inst_18416 = cljs.core.chunk_first(inst_18412);
var inst_18417 = cljs.core.chunk_rest(inst_18412);
var inst_18418 = cljs.core.count(inst_18416);
var inst_18390 = inst_18417;
var inst_18391 = inst_18416;
var inst_18392 = inst_18418;
var inst_18393 = (0);
var state_18513__$1 = (function (){var statearr_18568 = state_18513;
(statearr_18568[(13)] = inst_18393);

(statearr_18568[(14)] = inst_18391);

(statearr_18568[(15)] = inst_18392);

(statearr_18568[(17)] = inst_18390);

return statearr_18568;
})();
var statearr_18569_18633 = state_18513__$1;
(statearr_18569_18633[(2)] = null);

(statearr_18569_18633[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (11))){
var inst_18412 = (state_18513[(7)]);
var inst_18390 = (state_18513[(17)]);
var inst_18412__$1 = cljs.core.seq(inst_18390);
var state_18513__$1 = (function (){var statearr_18570 = state_18513;
(statearr_18570[(7)] = inst_18412__$1);

return statearr_18570;
})();
if(inst_18412__$1){
var statearr_18571_18634 = state_18513__$1;
(statearr_18571_18634[(1)] = (16));

} else {
var statearr_18572_18635 = state_18513__$1;
(statearr_18572_18635[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (9))){
var inst_18442 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
var statearr_18573_18636 = state_18513__$1;
(statearr_18573_18636[(2)] = inst_18442);

(statearr_18573_18636[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (5))){
var inst_18388 = cljs.core.deref(cs);
var inst_18389 = cljs.core.seq(inst_18388);
var inst_18390 = inst_18389;
var inst_18391 = null;
var inst_18392 = (0);
var inst_18393 = (0);
var state_18513__$1 = (function (){var statearr_18574 = state_18513;
(statearr_18574[(13)] = inst_18393);

(statearr_18574[(14)] = inst_18391);

(statearr_18574[(15)] = inst_18392);

(statearr_18574[(17)] = inst_18390);

return statearr_18574;
})();
var statearr_18575_18637 = state_18513__$1;
(statearr_18575_18637[(2)] = null);

(statearr_18575_18637[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (14))){
var state_18513__$1 = state_18513;
var statearr_18576_18638 = state_18513__$1;
(statearr_18576_18638[(2)] = null);

(statearr_18576_18638[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (45))){
var inst_18503 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
var statearr_18577_18639 = state_18513__$1;
(statearr_18577_18639[(2)] = inst_18503);

(statearr_18577_18639[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (26))){
var inst_18445 = (state_18513[(29)]);
var inst_18499 = (state_18513[(2)]);
var inst_18500 = cljs.core.seq(inst_18445);
var state_18513__$1 = (function (){var statearr_18578 = state_18513;
(statearr_18578[(31)] = inst_18499);

return statearr_18578;
})();
if(inst_18500){
var statearr_18579_18640 = state_18513__$1;
(statearr_18579_18640[(1)] = (42));

} else {
var statearr_18580_18641 = state_18513__$1;
(statearr_18580_18641[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (16))){
var inst_18412 = (state_18513[(7)]);
var inst_18414 = cljs.core.chunked_seq_QMARK_(inst_18412);
var state_18513__$1 = state_18513;
if(inst_18414){
var statearr_18581_18642 = state_18513__$1;
(statearr_18581_18642[(1)] = (19));

} else {
var statearr_18582_18643 = state_18513__$1;
(statearr_18582_18643[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (38))){
var inst_18492 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
var statearr_18583_18644 = state_18513__$1;
(statearr_18583_18644[(2)] = inst_18492);

(statearr_18583_18644[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (30))){
var state_18513__$1 = state_18513;
var statearr_18584_18645 = state_18513__$1;
(statearr_18584_18645[(2)] = null);

(statearr_18584_18645[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (10))){
var inst_18393 = (state_18513[(13)]);
var inst_18391 = (state_18513[(14)]);
var inst_18401 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18391,inst_18393);
var inst_18402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18401,(0),null);
var inst_18403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18401,(1),null);
var state_18513__$1 = (function (){var statearr_18585 = state_18513;
(statearr_18585[(26)] = inst_18402);

return statearr_18585;
})();
if(cljs.core.truth_(inst_18403)){
var statearr_18586_18646 = state_18513__$1;
(statearr_18586_18646[(1)] = (13));

} else {
var statearr_18587_18647 = state_18513__$1;
(statearr_18587_18647[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (18))){
var inst_18438 = (state_18513[(2)]);
var state_18513__$1 = state_18513;
var statearr_18588_18648 = state_18513__$1;
(statearr_18588_18648[(2)] = inst_18438);

(statearr_18588_18648[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (42))){
var state_18513__$1 = state_18513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18513__$1,(45),dchan);
} else {
if((state_val_18514 === (37))){
var inst_18481 = (state_18513[(23)]);
var inst_18472 = (state_18513[(25)]);
var inst_18381 = (state_18513[(11)]);
var inst_18481__$1 = cljs.core.first(inst_18472);
var inst_18482 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18481__$1,inst_18381,done);
var state_18513__$1 = (function (){var statearr_18589 = state_18513;
(statearr_18589[(23)] = inst_18481__$1);

return statearr_18589;
})();
if(cljs.core.truth_(inst_18482)){
var statearr_18590_18649 = state_18513__$1;
(statearr_18590_18649[(1)] = (39));

} else {
var statearr_18591_18650 = state_18513__$1;
(statearr_18591_18650[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18514 === (8))){
var inst_18393 = (state_18513[(13)]);
var inst_18392 = (state_18513[(15)]);
var inst_18395 = (inst_18393 < inst_18392);
var inst_18396 = inst_18395;
var state_18513__$1 = state_18513;
if(cljs.core.truth_(inst_18396)){
var statearr_18592_18651 = state_18513__$1;
(statearr_18592_18651[(1)] = (10));

} else {
var statearr_18593_18652 = state_18513__$1;
(statearr_18593_18652[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___18598,cs,m,dchan,dctr,done))
;
return ((function (switch__15728__auto__,c__15911__auto___18598,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15729__auto__ = null;
var cljs$core$async$mult_$_state_machine__15729__auto____0 = (function (){
var statearr_18594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18594[(0)] = cljs$core$async$mult_$_state_machine__15729__auto__);

(statearr_18594[(1)] = (1));

return statearr_18594;
});
var cljs$core$async$mult_$_state_machine__15729__auto____1 = (function (state_18513){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_18513);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e18595){if((e18595 instanceof Object)){
var ex__15732__auto__ = e18595;
var statearr_18596_18653 = state_18513;
(statearr_18596_18653[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18513);

return cljs.core.cst$kw$recur;
} else {
throw e18595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__18654 = state_18513;
state_18513 = G__18654;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15729__auto__ = function(state_18513){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15729__auto____1.call(this,state_18513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15729__auto____0;
cljs$core$async$mult_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15729__auto____1;
return cljs$core$async$mult_$_state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___18598,cs,m,dchan,dctr,done))
})();
var state__15913__auto__ = (function (){var statearr_18597 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_18597[(6)] = c__15911__auto___18598);

return statearr_18597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___18598,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18656 = arguments.length;
switch (G__18656) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18668 = arguments.length;
var i__4532__auto___18669 = (0);
while(true){
if((i__4532__auto___18669 < len__4531__auto___18668)){
args__4534__auto__.push((arguments[i__4532__auto___18669]));

var G__18670 = (i__4532__auto___18669 + (1));
i__4532__auto___18669 = G__18670;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18662){
var map__18663 = p__18662;
var map__18663__$1 = ((((!((map__18663 == null)))?(((((map__18663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18663):map__18663);
var opts = map__18663__$1;
var statearr_18665_18671 = state;
(statearr_18665_18671[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18663,map__18663__$1,opts){
return (function (val){
var statearr_18666_18672 = state;
(statearr_18666_18672[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18663,map__18663__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18667_18673 = state;
(statearr_18667_18673[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18658){
var G__18659 = cljs.core.first(seq18658);
var seq18658__$1 = cljs.core.next(seq18658);
var G__18660 = cljs.core.first(seq18658__$1);
var seq18658__$2 = cljs.core.next(seq18658__$1);
var G__18661 = cljs.core.first(seq18658__$2);
var seq18658__$3 = cljs.core.next(seq18658__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18659,G__18660,G__18661,seq18658__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18674 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18675){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18675 = meta18675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18676,meta18675__$1){
var self__ = this;
var _18676__$1 = this;
return (new cljs.core.async.t_cljs$core$async18674(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18675__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18676){
var self__ = this;
var _18676__$1 = this;
return self__.meta18675;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18674.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18674.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18674.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18674.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18674.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18674.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18674.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18674.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18674.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18675], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18674";

cljs.core.async.t_cljs$core$async18674.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18674");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18674.
 */
cljs.core.async.__GT_t_cljs$core$async18674 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18674(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18675){
return (new cljs.core.async.t_cljs$core$async18674(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18675));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18674(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15911__auto___18838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___18838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___18838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18778){
var state_val_18779 = (state_18778[(1)]);
if((state_val_18779 === (7))){
var inst_18693 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
var statearr_18780_18839 = state_18778__$1;
(statearr_18780_18839[(2)] = inst_18693);

(statearr_18780_18839[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (20))){
var inst_18705 = (state_18778[(7)]);
var state_18778__$1 = state_18778;
var statearr_18781_18840 = state_18778__$1;
(statearr_18781_18840[(2)] = inst_18705);

(statearr_18781_18840[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (27))){
var state_18778__$1 = state_18778;
var statearr_18782_18841 = state_18778__$1;
(statearr_18782_18841[(2)] = null);

(statearr_18782_18841[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (1))){
var inst_18680 = (state_18778[(8)]);
var inst_18680__$1 = calc_state();
var inst_18682 = (inst_18680__$1 == null);
var inst_18683 = cljs.core.not(inst_18682);
var state_18778__$1 = (function (){var statearr_18783 = state_18778;
(statearr_18783[(8)] = inst_18680__$1);

return statearr_18783;
})();
if(inst_18683){
var statearr_18784_18842 = state_18778__$1;
(statearr_18784_18842[(1)] = (2));

} else {
var statearr_18785_18843 = state_18778__$1;
(statearr_18785_18843[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (24))){
var inst_18729 = (state_18778[(9)]);
var inst_18752 = (state_18778[(10)]);
var inst_18738 = (state_18778[(11)]);
var inst_18752__$1 = (inst_18729.cljs$core$IFn$_invoke$arity$1 ? inst_18729.cljs$core$IFn$_invoke$arity$1(inst_18738) : inst_18729.call(null,inst_18738));
var state_18778__$1 = (function (){var statearr_18786 = state_18778;
(statearr_18786[(10)] = inst_18752__$1);

return statearr_18786;
})();
if(cljs.core.truth_(inst_18752__$1)){
var statearr_18787_18844 = state_18778__$1;
(statearr_18787_18844[(1)] = (29));

} else {
var statearr_18788_18845 = state_18778__$1;
(statearr_18788_18845[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (4))){
var inst_18696 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
if(cljs.core.truth_(inst_18696)){
var statearr_18789_18846 = state_18778__$1;
(statearr_18789_18846[(1)] = (8));

} else {
var statearr_18790_18847 = state_18778__$1;
(statearr_18790_18847[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (15))){
var inst_18723 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
if(cljs.core.truth_(inst_18723)){
var statearr_18791_18848 = state_18778__$1;
(statearr_18791_18848[(1)] = (19));

} else {
var statearr_18792_18849 = state_18778__$1;
(statearr_18792_18849[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (21))){
var inst_18728 = (state_18778[(12)]);
var inst_18728__$1 = (state_18778[(2)]);
var inst_18729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18728__$1,cljs.core.cst$kw$solos);
var inst_18730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18728__$1,cljs.core.cst$kw$mutes);
var inst_18731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18728__$1,cljs.core.cst$kw$reads);
var state_18778__$1 = (function (){var statearr_18793 = state_18778;
(statearr_18793[(12)] = inst_18728__$1);

(statearr_18793[(9)] = inst_18729);

(statearr_18793[(13)] = inst_18730);

return statearr_18793;
})();
return cljs.core.async.ioc_alts_BANG_(state_18778__$1,(22),inst_18731);
} else {
if((state_val_18779 === (31))){
var inst_18760 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
if(cljs.core.truth_(inst_18760)){
var statearr_18794_18850 = state_18778__$1;
(statearr_18794_18850[(1)] = (32));

} else {
var statearr_18795_18851 = state_18778__$1;
(statearr_18795_18851[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (32))){
var inst_18737 = (state_18778[(14)]);
var state_18778__$1 = state_18778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18778__$1,(35),out,inst_18737);
} else {
if((state_val_18779 === (33))){
var inst_18728 = (state_18778[(12)]);
var inst_18705 = inst_18728;
var state_18778__$1 = (function (){var statearr_18796 = state_18778;
(statearr_18796[(7)] = inst_18705);

return statearr_18796;
})();
var statearr_18797_18852 = state_18778__$1;
(statearr_18797_18852[(2)] = null);

(statearr_18797_18852[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (13))){
var inst_18705 = (state_18778[(7)]);
var inst_18712 = inst_18705.cljs$lang$protocol_mask$partition0$;
var inst_18713 = (inst_18712 & (64));
var inst_18714 = inst_18705.cljs$core$ISeq$;
var inst_18715 = (cljs.core.PROTOCOL_SENTINEL === inst_18714);
var inst_18716 = ((inst_18713) || (inst_18715));
var state_18778__$1 = state_18778;
if(cljs.core.truth_(inst_18716)){
var statearr_18798_18853 = state_18778__$1;
(statearr_18798_18853[(1)] = (16));

} else {
var statearr_18799_18854 = state_18778__$1;
(statearr_18799_18854[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (22))){
var inst_18738 = (state_18778[(11)]);
var inst_18737 = (state_18778[(14)]);
var inst_18736 = (state_18778[(2)]);
var inst_18737__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18736,(0),null);
var inst_18738__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18736,(1),null);
var inst_18739 = (inst_18737__$1 == null);
var inst_18740 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18738__$1,change);
var inst_18741 = ((inst_18739) || (inst_18740));
var state_18778__$1 = (function (){var statearr_18800 = state_18778;
(statearr_18800[(11)] = inst_18738__$1);

(statearr_18800[(14)] = inst_18737__$1);

return statearr_18800;
})();
if(cljs.core.truth_(inst_18741)){
var statearr_18801_18855 = state_18778__$1;
(statearr_18801_18855[(1)] = (23));

} else {
var statearr_18802_18856 = state_18778__$1;
(statearr_18802_18856[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (36))){
var inst_18728 = (state_18778[(12)]);
var inst_18705 = inst_18728;
var state_18778__$1 = (function (){var statearr_18803 = state_18778;
(statearr_18803[(7)] = inst_18705);

return statearr_18803;
})();
var statearr_18804_18857 = state_18778__$1;
(statearr_18804_18857[(2)] = null);

(statearr_18804_18857[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (29))){
var inst_18752 = (state_18778[(10)]);
var state_18778__$1 = state_18778;
var statearr_18805_18858 = state_18778__$1;
(statearr_18805_18858[(2)] = inst_18752);

(statearr_18805_18858[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (6))){
var state_18778__$1 = state_18778;
var statearr_18806_18859 = state_18778__$1;
(statearr_18806_18859[(2)] = false);

(statearr_18806_18859[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (28))){
var inst_18748 = (state_18778[(2)]);
var inst_18749 = calc_state();
var inst_18705 = inst_18749;
var state_18778__$1 = (function (){var statearr_18807 = state_18778;
(statearr_18807[(15)] = inst_18748);

(statearr_18807[(7)] = inst_18705);

return statearr_18807;
})();
var statearr_18808_18860 = state_18778__$1;
(statearr_18808_18860[(2)] = null);

(statearr_18808_18860[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (25))){
var inst_18774 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
var statearr_18809_18861 = state_18778__$1;
(statearr_18809_18861[(2)] = inst_18774);

(statearr_18809_18861[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (34))){
var inst_18772 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
var statearr_18810_18862 = state_18778__$1;
(statearr_18810_18862[(2)] = inst_18772);

(statearr_18810_18862[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (17))){
var state_18778__$1 = state_18778;
var statearr_18811_18863 = state_18778__$1;
(statearr_18811_18863[(2)] = false);

(statearr_18811_18863[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (3))){
var state_18778__$1 = state_18778;
var statearr_18812_18864 = state_18778__$1;
(statearr_18812_18864[(2)] = false);

(statearr_18812_18864[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (12))){
var inst_18776 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18778__$1,inst_18776);
} else {
if((state_val_18779 === (2))){
var inst_18680 = (state_18778[(8)]);
var inst_18685 = inst_18680.cljs$lang$protocol_mask$partition0$;
var inst_18686 = (inst_18685 & (64));
var inst_18687 = inst_18680.cljs$core$ISeq$;
var inst_18688 = (cljs.core.PROTOCOL_SENTINEL === inst_18687);
var inst_18689 = ((inst_18686) || (inst_18688));
var state_18778__$1 = state_18778;
if(cljs.core.truth_(inst_18689)){
var statearr_18813_18865 = state_18778__$1;
(statearr_18813_18865[(1)] = (5));

} else {
var statearr_18814_18866 = state_18778__$1;
(statearr_18814_18866[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (23))){
var inst_18737 = (state_18778[(14)]);
var inst_18743 = (inst_18737 == null);
var state_18778__$1 = state_18778;
if(cljs.core.truth_(inst_18743)){
var statearr_18815_18867 = state_18778__$1;
(statearr_18815_18867[(1)] = (26));

} else {
var statearr_18816_18868 = state_18778__$1;
(statearr_18816_18868[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (35))){
var inst_18763 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
if(cljs.core.truth_(inst_18763)){
var statearr_18817_18869 = state_18778__$1;
(statearr_18817_18869[(1)] = (36));

} else {
var statearr_18818_18870 = state_18778__$1;
(statearr_18818_18870[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (19))){
var inst_18705 = (state_18778[(7)]);
var inst_18725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18705);
var state_18778__$1 = state_18778;
var statearr_18819_18871 = state_18778__$1;
(statearr_18819_18871[(2)] = inst_18725);

(statearr_18819_18871[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (11))){
var inst_18705 = (state_18778[(7)]);
var inst_18709 = (inst_18705 == null);
var inst_18710 = cljs.core.not(inst_18709);
var state_18778__$1 = state_18778;
if(inst_18710){
var statearr_18820_18872 = state_18778__$1;
(statearr_18820_18872[(1)] = (13));

} else {
var statearr_18821_18873 = state_18778__$1;
(statearr_18821_18873[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (9))){
var inst_18680 = (state_18778[(8)]);
var state_18778__$1 = state_18778;
var statearr_18822_18874 = state_18778__$1;
(statearr_18822_18874[(2)] = inst_18680);

(statearr_18822_18874[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (5))){
var state_18778__$1 = state_18778;
var statearr_18823_18875 = state_18778__$1;
(statearr_18823_18875[(2)] = true);

(statearr_18823_18875[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (14))){
var state_18778__$1 = state_18778;
var statearr_18824_18876 = state_18778__$1;
(statearr_18824_18876[(2)] = false);

(statearr_18824_18876[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (26))){
var inst_18738 = (state_18778[(11)]);
var inst_18745 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18738);
var state_18778__$1 = state_18778;
var statearr_18825_18877 = state_18778__$1;
(statearr_18825_18877[(2)] = inst_18745);

(statearr_18825_18877[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (16))){
var state_18778__$1 = state_18778;
var statearr_18826_18878 = state_18778__$1;
(statearr_18826_18878[(2)] = true);

(statearr_18826_18878[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (38))){
var inst_18768 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
var statearr_18827_18879 = state_18778__$1;
(statearr_18827_18879[(2)] = inst_18768);

(statearr_18827_18879[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (30))){
var inst_18729 = (state_18778[(9)]);
var inst_18738 = (state_18778[(11)]);
var inst_18730 = (state_18778[(13)]);
var inst_18755 = cljs.core.empty_QMARK_(inst_18729);
var inst_18756 = (inst_18730.cljs$core$IFn$_invoke$arity$1 ? inst_18730.cljs$core$IFn$_invoke$arity$1(inst_18738) : inst_18730.call(null,inst_18738));
var inst_18757 = cljs.core.not(inst_18756);
var inst_18758 = ((inst_18755) && (inst_18757));
var state_18778__$1 = state_18778;
var statearr_18828_18880 = state_18778__$1;
(statearr_18828_18880[(2)] = inst_18758);

(statearr_18828_18880[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (10))){
var inst_18680 = (state_18778[(8)]);
var inst_18701 = (state_18778[(2)]);
var inst_18702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18701,cljs.core.cst$kw$solos);
var inst_18703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18701,cljs.core.cst$kw$mutes);
var inst_18704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18701,cljs.core.cst$kw$reads);
var inst_18705 = inst_18680;
var state_18778__$1 = (function (){var statearr_18829 = state_18778;
(statearr_18829[(16)] = inst_18702);

(statearr_18829[(17)] = inst_18704);

(statearr_18829[(18)] = inst_18703);

(statearr_18829[(7)] = inst_18705);

return statearr_18829;
})();
var statearr_18830_18881 = state_18778__$1;
(statearr_18830_18881[(2)] = null);

(statearr_18830_18881[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (18))){
var inst_18720 = (state_18778[(2)]);
var state_18778__$1 = state_18778;
var statearr_18831_18882 = state_18778__$1;
(statearr_18831_18882[(2)] = inst_18720);

(statearr_18831_18882[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (37))){
var state_18778__$1 = state_18778;
var statearr_18832_18883 = state_18778__$1;
(statearr_18832_18883[(2)] = null);

(statearr_18832_18883[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18779 === (8))){
var inst_18680 = (state_18778[(8)]);
var inst_18698 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18680);
var state_18778__$1 = state_18778;
var statearr_18833_18884 = state_18778__$1;
(statearr_18833_18884[(2)] = inst_18698);

(statearr_18833_18884[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___18838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15728__auto__,c__15911__auto___18838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15729__auto__ = null;
var cljs$core$async$mix_$_state_machine__15729__auto____0 = (function (){
var statearr_18834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18834[(0)] = cljs$core$async$mix_$_state_machine__15729__auto__);

(statearr_18834[(1)] = (1));

return statearr_18834;
});
var cljs$core$async$mix_$_state_machine__15729__auto____1 = (function (state_18778){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_18778);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e18835){if((e18835 instanceof Object)){
var ex__15732__auto__ = e18835;
var statearr_18836_18885 = state_18778;
(statearr_18836_18885[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18778);

return cljs.core.cst$kw$recur;
} else {
throw e18835;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__18886 = state_18778;
state_18778 = G__18886;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15729__auto__ = function(state_18778){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15729__auto____1.call(this,state_18778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15729__auto____0;
cljs$core$async$mix_$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15729__auto____1;
return cljs$core$async$mix_$_state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___18838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15913__auto__ = (function (){var statearr_18837 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_18837[(6)] = c__15911__auto___18838);

return statearr_18837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___18838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18888 = arguments.length;
switch (G__18888) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18892 = arguments.length;
switch (G__18892) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__18890_SHARP_){
if(cljs.core.truth_((p1__18890_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18890_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18890_SHARP_.call(null,topic)))){
return p1__18890_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18890_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18893 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18894){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18894 = meta18894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18895,meta18894__$1){
var self__ = this;
var _18895__$1 = this;
return (new cljs.core.async.t_cljs$core$async18893(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18894__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18895){
var self__ = this;
var _18895__$1 = this;
return self__.meta18894;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18893.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18893.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18894], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18893";

cljs.core.async.t_cljs$core$async18893.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18893");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18893.
 */
cljs.core.async.__GT_t_cljs$core$async18893 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18893(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18894){
return (new cljs.core.async.t_cljs$core$async18893(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18894));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18893(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15911__auto___19013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___19013,mults,ensure_mult,p){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___19013,mults,ensure_mult,p){
return (function (state_18967){
var state_val_18968 = (state_18967[(1)]);
if((state_val_18968 === (7))){
var inst_18963 = (state_18967[(2)]);
var state_18967__$1 = state_18967;
var statearr_18969_19014 = state_18967__$1;
(statearr_18969_19014[(2)] = inst_18963);

(statearr_18969_19014[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (20))){
var state_18967__$1 = state_18967;
var statearr_18970_19015 = state_18967__$1;
(statearr_18970_19015[(2)] = null);

(statearr_18970_19015[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (1))){
var state_18967__$1 = state_18967;
var statearr_18971_19016 = state_18967__$1;
(statearr_18971_19016[(2)] = null);

(statearr_18971_19016[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (24))){
var inst_18946 = (state_18967[(7)]);
var inst_18955 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18946);
var state_18967__$1 = state_18967;
var statearr_18972_19017 = state_18967__$1;
(statearr_18972_19017[(2)] = inst_18955);

(statearr_18972_19017[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (4))){
var inst_18898 = (state_18967[(8)]);
var inst_18898__$1 = (state_18967[(2)]);
var inst_18899 = (inst_18898__$1 == null);
var state_18967__$1 = (function (){var statearr_18973 = state_18967;
(statearr_18973[(8)] = inst_18898__$1);

return statearr_18973;
})();
if(cljs.core.truth_(inst_18899)){
var statearr_18974_19018 = state_18967__$1;
(statearr_18974_19018[(1)] = (5));

} else {
var statearr_18975_19019 = state_18967__$1;
(statearr_18975_19019[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (15))){
var inst_18940 = (state_18967[(2)]);
var state_18967__$1 = state_18967;
var statearr_18976_19020 = state_18967__$1;
(statearr_18976_19020[(2)] = inst_18940);

(statearr_18976_19020[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (21))){
var inst_18960 = (state_18967[(2)]);
var state_18967__$1 = (function (){var statearr_18977 = state_18967;
(statearr_18977[(9)] = inst_18960);

return statearr_18977;
})();
var statearr_18978_19021 = state_18967__$1;
(statearr_18978_19021[(2)] = null);

(statearr_18978_19021[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (13))){
var inst_18922 = (state_18967[(10)]);
var inst_18924 = cljs.core.chunked_seq_QMARK_(inst_18922);
var state_18967__$1 = state_18967;
if(inst_18924){
var statearr_18979_19022 = state_18967__$1;
(statearr_18979_19022[(1)] = (16));

} else {
var statearr_18980_19023 = state_18967__$1;
(statearr_18980_19023[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (22))){
var inst_18952 = (state_18967[(2)]);
var state_18967__$1 = state_18967;
if(cljs.core.truth_(inst_18952)){
var statearr_18981_19024 = state_18967__$1;
(statearr_18981_19024[(1)] = (23));

} else {
var statearr_18982_19025 = state_18967__$1;
(statearr_18982_19025[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (6))){
var inst_18948 = (state_18967[(11)]);
var inst_18898 = (state_18967[(8)]);
var inst_18946 = (state_18967[(7)]);
var inst_18946__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18898) : topic_fn.call(null,inst_18898));
var inst_18947 = cljs.core.deref(mults);
var inst_18948__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18947,inst_18946__$1);
var state_18967__$1 = (function (){var statearr_18983 = state_18967;
(statearr_18983[(11)] = inst_18948__$1);

(statearr_18983[(7)] = inst_18946__$1);

return statearr_18983;
})();
if(cljs.core.truth_(inst_18948__$1)){
var statearr_18984_19026 = state_18967__$1;
(statearr_18984_19026[(1)] = (19));

} else {
var statearr_18985_19027 = state_18967__$1;
(statearr_18985_19027[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (25))){
var inst_18957 = (state_18967[(2)]);
var state_18967__$1 = state_18967;
var statearr_18986_19028 = state_18967__$1;
(statearr_18986_19028[(2)] = inst_18957);

(statearr_18986_19028[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (17))){
var inst_18922 = (state_18967[(10)]);
var inst_18931 = cljs.core.first(inst_18922);
var inst_18932 = cljs.core.async.muxch_STAR_(inst_18931);
var inst_18933 = cljs.core.async.close_BANG_(inst_18932);
var inst_18934 = cljs.core.next(inst_18922);
var inst_18908 = inst_18934;
var inst_18909 = null;
var inst_18910 = (0);
var inst_18911 = (0);
var state_18967__$1 = (function (){var statearr_18987 = state_18967;
(statearr_18987[(12)] = inst_18909);

(statearr_18987[(13)] = inst_18910);

(statearr_18987[(14)] = inst_18933);

(statearr_18987[(15)] = inst_18908);

(statearr_18987[(16)] = inst_18911);

return statearr_18987;
})();
var statearr_18988_19029 = state_18967__$1;
(statearr_18988_19029[(2)] = null);

(statearr_18988_19029[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (3))){
var inst_18965 = (state_18967[(2)]);
var state_18967__$1 = state_18967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18967__$1,inst_18965);
} else {
if((state_val_18968 === (12))){
var inst_18942 = (state_18967[(2)]);
var state_18967__$1 = state_18967;
var statearr_18989_19030 = state_18967__$1;
(statearr_18989_19030[(2)] = inst_18942);

(statearr_18989_19030[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (2))){
var state_18967__$1 = state_18967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18967__$1,(4),ch);
} else {
if((state_val_18968 === (23))){
var state_18967__$1 = state_18967;
var statearr_18990_19031 = state_18967__$1;
(statearr_18990_19031[(2)] = null);

(statearr_18990_19031[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (19))){
var inst_18948 = (state_18967[(11)]);
var inst_18898 = (state_18967[(8)]);
var inst_18950 = cljs.core.async.muxch_STAR_(inst_18948);
var state_18967__$1 = state_18967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18967__$1,(22),inst_18950,inst_18898);
} else {
if((state_val_18968 === (11))){
var inst_18922 = (state_18967[(10)]);
var inst_18908 = (state_18967[(15)]);
var inst_18922__$1 = cljs.core.seq(inst_18908);
var state_18967__$1 = (function (){var statearr_18991 = state_18967;
(statearr_18991[(10)] = inst_18922__$1);

return statearr_18991;
})();
if(inst_18922__$1){
var statearr_18992_19032 = state_18967__$1;
(statearr_18992_19032[(1)] = (13));

} else {
var statearr_18993_19033 = state_18967__$1;
(statearr_18993_19033[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (9))){
var inst_18944 = (state_18967[(2)]);
var state_18967__$1 = state_18967;
var statearr_18994_19034 = state_18967__$1;
(statearr_18994_19034[(2)] = inst_18944);

(statearr_18994_19034[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (5))){
var inst_18905 = cljs.core.deref(mults);
var inst_18906 = cljs.core.vals(inst_18905);
var inst_18907 = cljs.core.seq(inst_18906);
var inst_18908 = inst_18907;
var inst_18909 = null;
var inst_18910 = (0);
var inst_18911 = (0);
var state_18967__$1 = (function (){var statearr_18995 = state_18967;
(statearr_18995[(12)] = inst_18909);

(statearr_18995[(13)] = inst_18910);

(statearr_18995[(15)] = inst_18908);

(statearr_18995[(16)] = inst_18911);

return statearr_18995;
})();
var statearr_18996_19035 = state_18967__$1;
(statearr_18996_19035[(2)] = null);

(statearr_18996_19035[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (14))){
var state_18967__$1 = state_18967;
var statearr_19000_19036 = state_18967__$1;
(statearr_19000_19036[(2)] = null);

(statearr_19000_19036[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (16))){
var inst_18922 = (state_18967[(10)]);
var inst_18926 = cljs.core.chunk_first(inst_18922);
var inst_18927 = cljs.core.chunk_rest(inst_18922);
var inst_18928 = cljs.core.count(inst_18926);
var inst_18908 = inst_18927;
var inst_18909 = inst_18926;
var inst_18910 = inst_18928;
var inst_18911 = (0);
var state_18967__$1 = (function (){var statearr_19001 = state_18967;
(statearr_19001[(12)] = inst_18909);

(statearr_19001[(13)] = inst_18910);

(statearr_19001[(15)] = inst_18908);

(statearr_19001[(16)] = inst_18911);

return statearr_19001;
})();
var statearr_19002_19037 = state_18967__$1;
(statearr_19002_19037[(2)] = null);

(statearr_19002_19037[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (10))){
var inst_18909 = (state_18967[(12)]);
var inst_18910 = (state_18967[(13)]);
var inst_18908 = (state_18967[(15)]);
var inst_18911 = (state_18967[(16)]);
var inst_18916 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18909,inst_18911);
var inst_18917 = cljs.core.async.muxch_STAR_(inst_18916);
var inst_18918 = cljs.core.async.close_BANG_(inst_18917);
var inst_18919 = (inst_18911 + (1));
var tmp18997 = inst_18909;
var tmp18998 = inst_18910;
var tmp18999 = inst_18908;
var inst_18908__$1 = tmp18999;
var inst_18909__$1 = tmp18997;
var inst_18910__$1 = tmp18998;
var inst_18911__$1 = inst_18919;
var state_18967__$1 = (function (){var statearr_19003 = state_18967;
(statearr_19003[(12)] = inst_18909__$1);

(statearr_19003[(13)] = inst_18910__$1);

(statearr_19003[(17)] = inst_18918);

(statearr_19003[(15)] = inst_18908__$1);

(statearr_19003[(16)] = inst_18911__$1);

return statearr_19003;
})();
var statearr_19004_19038 = state_18967__$1;
(statearr_19004_19038[(2)] = null);

(statearr_19004_19038[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (18))){
var inst_18937 = (state_18967[(2)]);
var state_18967__$1 = state_18967;
var statearr_19005_19039 = state_18967__$1;
(statearr_19005_19039[(2)] = inst_18937);

(statearr_19005_19039[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18968 === (8))){
var inst_18910 = (state_18967[(13)]);
var inst_18911 = (state_18967[(16)]);
var inst_18913 = (inst_18911 < inst_18910);
var inst_18914 = inst_18913;
var state_18967__$1 = state_18967;
if(cljs.core.truth_(inst_18914)){
var statearr_19006_19040 = state_18967__$1;
(statearr_19006_19040[(1)] = (10));

} else {
var statearr_19007_19041 = state_18967__$1;
(statearr_19007_19041[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___19013,mults,ensure_mult,p))
;
return ((function (switch__15728__auto__,c__15911__auto___19013,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15729__auto__ = null;
var cljs$core$async$state_machine__15729__auto____0 = (function (){
var statearr_19008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19008[(0)] = cljs$core$async$state_machine__15729__auto__);

(statearr_19008[(1)] = (1));

return statearr_19008;
});
var cljs$core$async$state_machine__15729__auto____1 = (function (state_18967){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_18967);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19009){if((e19009 instanceof Object)){
var ex__15732__auto__ = e19009;
var statearr_19010_19042 = state_18967;
(statearr_19010_19042[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18967);

return cljs.core.cst$kw$recur;
} else {
throw e19009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19043 = state_18967;
state_18967 = G__19043;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$state_machine__15729__auto__ = function(state_18967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15729__auto____1.call(this,state_18967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15729__auto____0;
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15729__auto____1;
return cljs$core$async$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___19013,mults,ensure_mult,p))
})();
var state__15913__auto__ = (function (){var statearr_19011 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19011[(6)] = c__15911__auto___19013);

return statearr_19011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___19013,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19045 = arguments.length;
switch (G__19045) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19048 = arguments.length;
switch (G__19048) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19051 = arguments.length;
switch (G__19051) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15911__auto___19118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___19118,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___19118,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19090){
var state_val_19091 = (state_19090[(1)]);
if((state_val_19091 === (7))){
var state_19090__$1 = state_19090;
var statearr_19092_19119 = state_19090__$1;
(statearr_19092_19119[(2)] = null);

(statearr_19092_19119[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (1))){
var state_19090__$1 = state_19090;
var statearr_19093_19120 = state_19090__$1;
(statearr_19093_19120[(2)] = null);

(statearr_19093_19120[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (4))){
var inst_19054 = (state_19090[(7)]);
var inst_19056 = (inst_19054 < cnt);
var state_19090__$1 = state_19090;
if(cljs.core.truth_(inst_19056)){
var statearr_19094_19121 = state_19090__$1;
(statearr_19094_19121[(1)] = (6));

} else {
var statearr_19095_19122 = state_19090__$1;
(statearr_19095_19122[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (15))){
var inst_19086 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
var statearr_19096_19123 = state_19090__$1;
(statearr_19096_19123[(2)] = inst_19086);

(statearr_19096_19123[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (13))){
var inst_19079 = cljs.core.async.close_BANG_(out);
var state_19090__$1 = state_19090;
var statearr_19097_19124 = state_19090__$1;
(statearr_19097_19124[(2)] = inst_19079);

(statearr_19097_19124[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (6))){
var state_19090__$1 = state_19090;
var statearr_19098_19125 = state_19090__$1;
(statearr_19098_19125[(2)] = null);

(statearr_19098_19125[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (3))){
var inst_19088 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19090__$1,inst_19088);
} else {
if((state_val_19091 === (12))){
var inst_19076 = (state_19090[(8)]);
var inst_19076__$1 = (state_19090[(2)]);
var inst_19077 = cljs.core.some(cljs.core.nil_QMARK_,inst_19076__$1);
var state_19090__$1 = (function (){var statearr_19099 = state_19090;
(statearr_19099[(8)] = inst_19076__$1);

return statearr_19099;
})();
if(cljs.core.truth_(inst_19077)){
var statearr_19100_19126 = state_19090__$1;
(statearr_19100_19126[(1)] = (13));

} else {
var statearr_19101_19127 = state_19090__$1;
(statearr_19101_19127[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (2))){
var inst_19053 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19054 = (0);
var state_19090__$1 = (function (){var statearr_19102 = state_19090;
(statearr_19102[(9)] = inst_19053);

(statearr_19102[(7)] = inst_19054);

return statearr_19102;
})();
var statearr_19103_19128 = state_19090__$1;
(statearr_19103_19128[(2)] = null);

(statearr_19103_19128[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (11))){
var inst_19054 = (state_19090[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19090,(10),Object,null,(9));
var inst_19063 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19054) : chs__$1.call(null,inst_19054));
var inst_19064 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19054) : done.call(null,inst_19054));
var inst_19065 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19063,inst_19064);
var state_19090__$1 = state_19090;
var statearr_19104_19129 = state_19090__$1;
(statearr_19104_19129[(2)] = inst_19065);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (9))){
var inst_19054 = (state_19090[(7)]);
var inst_19067 = (state_19090[(2)]);
var inst_19068 = (inst_19054 + (1));
var inst_19054__$1 = inst_19068;
var state_19090__$1 = (function (){var statearr_19105 = state_19090;
(statearr_19105[(7)] = inst_19054__$1);

(statearr_19105[(10)] = inst_19067);

return statearr_19105;
})();
var statearr_19106_19130 = state_19090__$1;
(statearr_19106_19130[(2)] = null);

(statearr_19106_19130[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (5))){
var inst_19074 = (state_19090[(2)]);
var state_19090__$1 = (function (){var statearr_19107 = state_19090;
(statearr_19107[(11)] = inst_19074);

return statearr_19107;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19090__$1,(12),dchan);
} else {
if((state_val_19091 === (14))){
var inst_19076 = (state_19090[(8)]);
var inst_19081 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19076);
var state_19090__$1 = state_19090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19090__$1,(16),out,inst_19081);
} else {
if((state_val_19091 === (16))){
var inst_19083 = (state_19090[(2)]);
var state_19090__$1 = (function (){var statearr_19108 = state_19090;
(statearr_19108[(12)] = inst_19083);

return statearr_19108;
})();
var statearr_19109_19131 = state_19090__$1;
(statearr_19109_19131[(2)] = null);

(statearr_19109_19131[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (10))){
var inst_19058 = (state_19090[(2)]);
var inst_19059 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19090__$1 = (function (){var statearr_19110 = state_19090;
(statearr_19110[(13)] = inst_19058);

return statearr_19110;
})();
var statearr_19111_19132 = state_19090__$1;
(statearr_19111_19132[(2)] = inst_19059);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19091 === (8))){
var inst_19072 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
var statearr_19112_19133 = state_19090__$1;
(statearr_19112_19133[(2)] = inst_19072);

(statearr_19112_19133[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___19118,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15728__auto__,c__15911__auto___19118,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15729__auto__ = null;
var cljs$core$async$state_machine__15729__auto____0 = (function (){
var statearr_19113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19113[(0)] = cljs$core$async$state_machine__15729__auto__);

(statearr_19113[(1)] = (1));

return statearr_19113;
});
var cljs$core$async$state_machine__15729__auto____1 = (function (state_19090){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_19090);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19114){if((e19114 instanceof Object)){
var ex__15732__auto__ = e19114;
var statearr_19115_19134 = state_19090;
(statearr_19115_19134[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19090);

return cljs.core.cst$kw$recur;
} else {
throw e19114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19135 = state_19090;
state_19090 = G__19135;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$state_machine__15729__auto__ = function(state_19090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15729__auto____1.call(this,state_19090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15729__auto____0;
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15729__auto____1;
return cljs$core$async$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___19118,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15913__auto__ = (function (){var statearr_19116 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19116[(6)] = c__15911__auto___19118);

return statearr_19116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___19118,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19138 = arguments.length;
switch (G__19138) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15911__auto___19192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___19192,out){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___19192,out){
return (function (state_19170){
var state_val_19171 = (state_19170[(1)]);
if((state_val_19171 === (7))){
var inst_19150 = (state_19170[(7)]);
var inst_19149 = (state_19170[(8)]);
var inst_19149__$1 = (state_19170[(2)]);
var inst_19150__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19149__$1,(0),null);
var inst_19151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19149__$1,(1),null);
var inst_19152 = (inst_19150__$1 == null);
var state_19170__$1 = (function (){var statearr_19172 = state_19170;
(statearr_19172[(7)] = inst_19150__$1);

(statearr_19172[(8)] = inst_19149__$1);

(statearr_19172[(9)] = inst_19151);

return statearr_19172;
})();
if(cljs.core.truth_(inst_19152)){
var statearr_19173_19193 = state_19170__$1;
(statearr_19173_19193[(1)] = (8));

} else {
var statearr_19174_19194 = state_19170__$1;
(statearr_19174_19194[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19171 === (1))){
var inst_19139 = cljs.core.vec(chs);
var inst_19140 = inst_19139;
var state_19170__$1 = (function (){var statearr_19175 = state_19170;
(statearr_19175[(10)] = inst_19140);

return statearr_19175;
})();
var statearr_19176_19195 = state_19170__$1;
(statearr_19176_19195[(2)] = null);

(statearr_19176_19195[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19171 === (4))){
var inst_19140 = (state_19170[(10)]);
var state_19170__$1 = state_19170;
return cljs.core.async.ioc_alts_BANG_(state_19170__$1,(7),inst_19140);
} else {
if((state_val_19171 === (6))){
var inst_19166 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19177_19196 = state_19170__$1;
(statearr_19177_19196[(2)] = inst_19166);

(statearr_19177_19196[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19171 === (3))){
var inst_19168 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19170__$1,inst_19168);
} else {
if((state_val_19171 === (2))){
var inst_19140 = (state_19170[(10)]);
var inst_19142 = cljs.core.count(inst_19140);
var inst_19143 = (inst_19142 > (0));
var state_19170__$1 = state_19170;
if(cljs.core.truth_(inst_19143)){
var statearr_19179_19197 = state_19170__$1;
(statearr_19179_19197[(1)] = (4));

} else {
var statearr_19180_19198 = state_19170__$1;
(statearr_19180_19198[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19171 === (11))){
var inst_19140 = (state_19170[(10)]);
var inst_19159 = (state_19170[(2)]);
var tmp19178 = inst_19140;
var inst_19140__$1 = tmp19178;
var state_19170__$1 = (function (){var statearr_19181 = state_19170;
(statearr_19181[(11)] = inst_19159);

(statearr_19181[(10)] = inst_19140__$1);

return statearr_19181;
})();
var statearr_19182_19199 = state_19170__$1;
(statearr_19182_19199[(2)] = null);

(statearr_19182_19199[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19171 === (9))){
var inst_19150 = (state_19170[(7)]);
var state_19170__$1 = state_19170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19170__$1,(11),out,inst_19150);
} else {
if((state_val_19171 === (5))){
var inst_19164 = cljs.core.async.close_BANG_(out);
var state_19170__$1 = state_19170;
var statearr_19183_19200 = state_19170__$1;
(statearr_19183_19200[(2)] = inst_19164);

(statearr_19183_19200[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19171 === (10))){
var inst_19162 = (state_19170[(2)]);
var state_19170__$1 = state_19170;
var statearr_19184_19201 = state_19170__$1;
(statearr_19184_19201[(2)] = inst_19162);

(statearr_19184_19201[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19171 === (8))){
var inst_19150 = (state_19170[(7)]);
var inst_19149 = (state_19170[(8)]);
var inst_19140 = (state_19170[(10)]);
var inst_19151 = (state_19170[(9)]);
var inst_19154 = (function (){var cs = inst_19140;
var vec__19145 = inst_19149;
var v = inst_19150;
var c = inst_19151;
return ((function (cs,vec__19145,v,c,inst_19150,inst_19149,inst_19140,inst_19151,state_val_19171,c__15911__auto___19192,out){
return (function (p1__19136_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19136_SHARP_);
});
;})(cs,vec__19145,v,c,inst_19150,inst_19149,inst_19140,inst_19151,state_val_19171,c__15911__auto___19192,out))
})();
var inst_19155 = cljs.core.filterv(inst_19154,inst_19140);
var inst_19140__$1 = inst_19155;
var state_19170__$1 = (function (){var statearr_19185 = state_19170;
(statearr_19185[(10)] = inst_19140__$1);

return statearr_19185;
})();
var statearr_19186_19202 = state_19170__$1;
(statearr_19186_19202[(2)] = null);

(statearr_19186_19202[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___19192,out))
;
return ((function (switch__15728__auto__,c__15911__auto___19192,out){
return (function() {
var cljs$core$async$state_machine__15729__auto__ = null;
var cljs$core$async$state_machine__15729__auto____0 = (function (){
var statearr_19187 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19187[(0)] = cljs$core$async$state_machine__15729__auto__);

(statearr_19187[(1)] = (1));

return statearr_19187;
});
var cljs$core$async$state_machine__15729__auto____1 = (function (state_19170){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_19170);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19188){if((e19188 instanceof Object)){
var ex__15732__auto__ = e19188;
var statearr_19189_19203 = state_19170;
(statearr_19189_19203[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19170);

return cljs.core.cst$kw$recur;
} else {
throw e19188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19204 = state_19170;
state_19170 = G__19204;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$state_machine__15729__auto__ = function(state_19170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15729__auto____1.call(this,state_19170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15729__auto____0;
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15729__auto____1;
return cljs$core$async$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___19192,out))
})();
var state__15913__auto__ = (function (){var statearr_19190 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19190[(6)] = c__15911__auto___19192);

return statearr_19190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___19192,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19206 = arguments.length;
switch (G__19206) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15911__auto___19251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___19251,out){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___19251,out){
return (function (state_19230){
var state_val_19231 = (state_19230[(1)]);
if((state_val_19231 === (7))){
var inst_19212 = (state_19230[(7)]);
var inst_19212__$1 = (state_19230[(2)]);
var inst_19213 = (inst_19212__$1 == null);
var inst_19214 = cljs.core.not(inst_19213);
var state_19230__$1 = (function (){var statearr_19232 = state_19230;
(statearr_19232[(7)] = inst_19212__$1);

return statearr_19232;
})();
if(inst_19214){
var statearr_19233_19252 = state_19230__$1;
(statearr_19233_19252[(1)] = (8));

} else {
var statearr_19234_19253 = state_19230__$1;
(statearr_19234_19253[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (1))){
var inst_19207 = (0);
var state_19230__$1 = (function (){var statearr_19235 = state_19230;
(statearr_19235[(8)] = inst_19207);

return statearr_19235;
})();
var statearr_19236_19254 = state_19230__$1;
(statearr_19236_19254[(2)] = null);

(statearr_19236_19254[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (4))){
var state_19230__$1 = state_19230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19230__$1,(7),ch);
} else {
if((state_val_19231 === (6))){
var inst_19225 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
var statearr_19237_19255 = state_19230__$1;
(statearr_19237_19255[(2)] = inst_19225);

(statearr_19237_19255[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (3))){
var inst_19227 = (state_19230[(2)]);
var inst_19228 = cljs.core.async.close_BANG_(out);
var state_19230__$1 = (function (){var statearr_19238 = state_19230;
(statearr_19238[(9)] = inst_19227);

return statearr_19238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19230__$1,inst_19228);
} else {
if((state_val_19231 === (2))){
var inst_19207 = (state_19230[(8)]);
var inst_19209 = (inst_19207 < n);
var state_19230__$1 = state_19230;
if(cljs.core.truth_(inst_19209)){
var statearr_19239_19256 = state_19230__$1;
(statearr_19239_19256[(1)] = (4));

} else {
var statearr_19240_19257 = state_19230__$1;
(statearr_19240_19257[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (11))){
var inst_19207 = (state_19230[(8)]);
var inst_19217 = (state_19230[(2)]);
var inst_19218 = (inst_19207 + (1));
var inst_19207__$1 = inst_19218;
var state_19230__$1 = (function (){var statearr_19241 = state_19230;
(statearr_19241[(8)] = inst_19207__$1);

(statearr_19241[(10)] = inst_19217);

return statearr_19241;
})();
var statearr_19242_19258 = state_19230__$1;
(statearr_19242_19258[(2)] = null);

(statearr_19242_19258[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (9))){
var state_19230__$1 = state_19230;
var statearr_19243_19259 = state_19230__$1;
(statearr_19243_19259[(2)] = null);

(statearr_19243_19259[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (5))){
var state_19230__$1 = state_19230;
var statearr_19244_19260 = state_19230__$1;
(statearr_19244_19260[(2)] = null);

(statearr_19244_19260[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (10))){
var inst_19222 = (state_19230[(2)]);
var state_19230__$1 = state_19230;
var statearr_19245_19261 = state_19230__$1;
(statearr_19245_19261[(2)] = inst_19222);

(statearr_19245_19261[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19231 === (8))){
var inst_19212 = (state_19230[(7)]);
var state_19230__$1 = state_19230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19230__$1,(11),out,inst_19212);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___19251,out))
;
return ((function (switch__15728__auto__,c__15911__auto___19251,out){
return (function() {
var cljs$core$async$state_machine__15729__auto__ = null;
var cljs$core$async$state_machine__15729__auto____0 = (function (){
var statearr_19246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19246[(0)] = cljs$core$async$state_machine__15729__auto__);

(statearr_19246[(1)] = (1));

return statearr_19246;
});
var cljs$core$async$state_machine__15729__auto____1 = (function (state_19230){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_19230);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19247){if((e19247 instanceof Object)){
var ex__15732__auto__ = e19247;
var statearr_19248_19262 = state_19230;
(statearr_19248_19262[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19230);

return cljs.core.cst$kw$recur;
} else {
throw e19247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19263 = state_19230;
state_19230 = G__19263;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$state_machine__15729__auto__ = function(state_19230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15729__auto____1.call(this,state_19230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15729__auto____0;
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15729__auto____1;
return cljs$core$async$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___19251,out))
})();
var state__15913__auto__ = (function (){var statearr_19249 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19249[(6)] = c__15911__auto___19251);

return statearr_19249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___19251,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19265 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19265 = (function (f,ch,meta19266){
this.f = f;
this.ch = ch;
this.meta19266 = meta19266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19267,meta19266__$1){
var self__ = this;
var _19267__$1 = this;
return (new cljs.core.async.t_cljs$core$async19265(self__.f,self__.ch,meta19266__$1));
});

cljs.core.async.t_cljs$core$async19265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19267){
var self__ = this;
var _19267__$1 = this;
return self__.meta19266;
});

cljs.core.async.t_cljs$core$async19265.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19265.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19265.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19265.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19265.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19268 = (function (f,ch,meta19266,_,fn1,meta19269){
this.f = f;
this.ch = ch;
this.meta19266 = meta19266;
this._ = _;
this.fn1 = fn1;
this.meta19269 = meta19269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19270,meta19269__$1){
var self__ = this;
var _19270__$1 = this;
return (new cljs.core.async.t_cljs$core$async19268(self__.f,self__.ch,self__.meta19266,self__._,self__.fn1,meta19269__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19270){
var self__ = this;
var _19270__$1 = this;
return self__.meta19269;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19268.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19268.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19264_SHARP_){
var G__19271 = (((p1__19264_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19264_SHARP_) : self__.f.call(null,p1__19264_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19271) : f1.call(null,G__19271));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19268.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19266,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19265], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19269], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19268";

cljs.core.async.t_cljs$core$async19268.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19268");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19268.
 */
cljs.core.async.__GT_t_cljs$core$async19268 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19268(f__$1,ch__$1,meta19266__$1,___$2,fn1__$1,meta19269){
return (new cljs.core.async.t_cljs$core$async19268(f__$1,ch__$1,meta19266__$1,___$2,fn1__$1,meta19269));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19268(self__.f,self__.ch,self__.meta19266,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19272 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19272) : self__.f.call(null,G__19272));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19265.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19265.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19266], null);
});

cljs.core.async.t_cljs$core$async19265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19265";

cljs.core.async.t_cljs$core$async19265.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19265");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19265.
 */
cljs.core.async.__GT_t_cljs$core$async19265 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19265(f__$1,ch__$1,meta19266){
return (new cljs.core.async.t_cljs$core$async19265(f__$1,ch__$1,meta19266));
});

}

return (new cljs.core.async.t_cljs$core$async19265(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19273 = (function (f,ch,meta19274){
this.f = f;
this.ch = ch;
this.meta19274 = meta19274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19275,meta19274__$1){
var self__ = this;
var _19275__$1 = this;
return (new cljs.core.async.t_cljs$core$async19273(self__.f,self__.ch,meta19274__$1));
});

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19275){
var self__ = this;
var _19275__$1 = this;
return self__.meta19274;
});

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19274], null);
});

cljs.core.async.t_cljs$core$async19273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19273";

cljs.core.async.t_cljs$core$async19273.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19273");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19273.
 */
cljs.core.async.__GT_t_cljs$core$async19273 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19273(f__$1,ch__$1,meta19274){
return (new cljs.core.async.t_cljs$core$async19273(f__$1,ch__$1,meta19274));
});

}

return (new cljs.core.async.t_cljs$core$async19273(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19276 = (function (p,ch,meta19277){
this.p = p;
this.ch = ch;
this.meta19277 = meta19277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19278,meta19277__$1){
var self__ = this;
var _19278__$1 = this;
return (new cljs.core.async.t_cljs$core$async19276(self__.p,self__.ch,meta19277__$1));
});

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19278){
var self__ = this;
var _19278__$1 = this;
return self__.meta19277;
});

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19277], null);
});

cljs.core.async.t_cljs$core$async19276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19276";

cljs.core.async.t_cljs$core$async19276.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19276");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19276.
 */
cljs.core.async.__GT_t_cljs$core$async19276 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19276(p__$1,ch__$1,meta19277){
return (new cljs.core.async.t_cljs$core$async19276(p__$1,ch__$1,meta19277));
});

}

return (new cljs.core.async.t_cljs$core$async19276(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19280 = arguments.length;
switch (G__19280) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15911__auto___19320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___19320,out){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___19320,out){
return (function (state_19301){
var state_val_19302 = (state_19301[(1)]);
if((state_val_19302 === (7))){
var inst_19297 = (state_19301[(2)]);
var state_19301__$1 = state_19301;
var statearr_19303_19321 = state_19301__$1;
(statearr_19303_19321[(2)] = inst_19297);

(statearr_19303_19321[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19302 === (1))){
var state_19301__$1 = state_19301;
var statearr_19304_19322 = state_19301__$1;
(statearr_19304_19322[(2)] = null);

(statearr_19304_19322[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19302 === (4))){
var inst_19283 = (state_19301[(7)]);
var inst_19283__$1 = (state_19301[(2)]);
var inst_19284 = (inst_19283__$1 == null);
var state_19301__$1 = (function (){var statearr_19305 = state_19301;
(statearr_19305[(7)] = inst_19283__$1);

return statearr_19305;
})();
if(cljs.core.truth_(inst_19284)){
var statearr_19306_19323 = state_19301__$1;
(statearr_19306_19323[(1)] = (5));

} else {
var statearr_19307_19324 = state_19301__$1;
(statearr_19307_19324[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19302 === (6))){
var inst_19283 = (state_19301[(7)]);
var inst_19288 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19283) : p.call(null,inst_19283));
var state_19301__$1 = state_19301;
if(cljs.core.truth_(inst_19288)){
var statearr_19308_19325 = state_19301__$1;
(statearr_19308_19325[(1)] = (8));

} else {
var statearr_19309_19326 = state_19301__$1;
(statearr_19309_19326[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19302 === (3))){
var inst_19299 = (state_19301[(2)]);
var state_19301__$1 = state_19301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19301__$1,inst_19299);
} else {
if((state_val_19302 === (2))){
var state_19301__$1 = state_19301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19301__$1,(4),ch);
} else {
if((state_val_19302 === (11))){
var inst_19291 = (state_19301[(2)]);
var state_19301__$1 = state_19301;
var statearr_19310_19327 = state_19301__$1;
(statearr_19310_19327[(2)] = inst_19291);

(statearr_19310_19327[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19302 === (9))){
var state_19301__$1 = state_19301;
var statearr_19311_19328 = state_19301__$1;
(statearr_19311_19328[(2)] = null);

(statearr_19311_19328[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19302 === (5))){
var inst_19286 = cljs.core.async.close_BANG_(out);
var state_19301__$1 = state_19301;
var statearr_19312_19329 = state_19301__$1;
(statearr_19312_19329[(2)] = inst_19286);

(statearr_19312_19329[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19302 === (10))){
var inst_19294 = (state_19301[(2)]);
var state_19301__$1 = (function (){var statearr_19313 = state_19301;
(statearr_19313[(8)] = inst_19294);

return statearr_19313;
})();
var statearr_19314_19330 = state_19301__$1;
(statearr_19314_19330[(2)] = null);

(statearr_19314_19330[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19302 === (8))){
var inst_19283 = (state_19301[(7)]);
var state_19301__$1 = state_19301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19301__$1,(11),out,inst_19283);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___19320,out))
;
return ((function (switch__15728__auto__,c__15911__auto___19320,out){
return (function() {
var cljs$core$async$state_machine__15729__auto__ = null;
var cljs$core$async$state_machine__15729__auto____0 = (function (){
var statearr_19315 = [null,null,null,null,null,null,null,null,null];
(statearr_19315[(0)] = cljs$core$async$state_machine__15729__auto__);

(statearr_19315[(1)] = (1));

return statearr_19315;
});
var cljs$core$async$state_machine__15729__auto____1 = (function (state_19301){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_19301);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19316){if((e19316 instanceof Object)){
var ex__15732__auto__ = e19316;
var statearr_19317_19331 = state_19301;
(statearr_19317_19331[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19301);

return cljs.core.cst$kw$recur;
} else {
throw e19316;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19332 = state_19301;
state_19301 = G__19332;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$state_machine__15729__auto__ = function(state_19301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15729__auto____1.call(this,state_19301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15729__auto____0;
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15729__auto____1;
return cljs$core$async$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___19320,out))
})();
var state__15913__auto__ = (function (){var statearr_19318 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19318[(6)] = c__15911__auto___19320);

return statearr_19318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___19320,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19334 = arguments.length;
switch (G__19334) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15911__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto__){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto__){
return (function (state_19397){
var state_val_19398 = (state_19397[(1)]);
if((state_val_19398 === (7))){
var inst_19393 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
var statearr_19399_19437 = state_19397__$1;
(statearr_19399_19437[(2)] = inst_19393);

(statearr_19399_19437[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (20))){
var inst_19363 = (state_19397[(7)]);
var inst_19374 = (state_19397[(2)]);
var inst_19375 = cljs.core.next(inst_19363);
var inst_19349 = inst_19375;
var inst_19350 = null;
var inst_19351 = (0);
var inst_19352 = (0);
var state_19397__$1 = (function (){var statearr_19400 = state_19397;
(statearr_19400[(8)] = inst_19374);

(statearr_19400[(9)] = inst_19350);

(statearr_19400[(10)] = inst_19349);

(statearr_19400[(11)] = inst_19352);

(statearr_19400[(12)] = inst_19351);

return statearr_19400;
})();
var statearr_19401_19438 = state_19397__$1;
(statearr_19401_19438[(2)] = null);

(statearr_19401_19438[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (1))){
var state_19397__$1 = state_19397;
var statearr_19402_19439 = state_19397__$1;
(statearr_19402_19439[(2)] = null);

(statearr_19402_19439[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (4))){
var inst_19338 = (state_19397[(13)]);
var inst_19338__$1 = (state_19397[(2)]);
var inst_19339 = (inst_19338__$1 == null);
var state_19397__$1 = (function (){var statearr_19403 = state_19397;
(statearr_19403[(13)] = inst_19338__$1);

return statearr_19403;
})();
if(cljs.core.truth_(inst_19339)){
var statearr_19404_19440 = state_19397__$1;
(statearr_19404_19440[(1)] = (5));

} else {
var statearr_19405_19441 = state_19397__$1;
(statearr_19405_19441[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (15))){
var state_19397__$1 = state_19397;
var statearr_19409_19442 = state_19397__$1;
(statearr_19409_19442[(2)] = null);

(statearr_19409_19442[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (21))){
var state_19397__$1 = state_19397;
var statearr_19410_19443 = state_19397__$1;
(statearr_19410_19443[(2)] = null);

(statearr_19410_19443[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (13))){
var inst_19350 = (state_19397[(9)]);
var inst_19349 = (state_19397[(10)]);
var inst_19352 = (state_19397[(11)]);
var inst_19351 = (state_19397[(12)]);
var inst_19359 = (state_19397[(2)]);
var inst_19360 = (inst_19352 + (1));
var tmp19406 = inst_19350;
var tmp19407 = inst_19349;
var tmp19408 = inst_19351;
var inst_19349__$1 = tmp19407;
var inst_19350__$1 = tmp19406;
var inst_19351__$1 = tmp19408;
var inst_19352__$1 = inst_19360;
var state_19397__$1 = (function (){var statearr_19411 = state_19397;
(statearr_19411[(14)] = inst_19359);

(statearr_19411[(9)] = inst_19350__$1);

(statearr_19411[(10)] = inst_19349__$1);

(statearr_19411[(11)] = inst_19352__$1);

(statearr_19411[(12)] = inst_19351__$1);

return statearr_19411;
})();
var statearr_19412_19444 = state_19397__$1;
(statearr_19412_19444[(2)] = null);

(statearr_19412_19444[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (22))){
var state_19397__$1 = state_19397;
var statearr_19413_19445 = state_19397__$1;
(statearr_19413_19445[(2)] = null);

(statearr_19413_19445[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (6))){
var inst_19338 = (state_19397[(13)]);
var inst_19347 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19338) : f.call(null,inst_19338));
var inst_19348 = cljs.core.seq(inst_19347);
var inst_19349 = inst_19348;
var inst_19350 = null;
var inst_19351 = (0);
var inst_19352 = (0);
var state_19397__$1 = (function (){var statearr_19414 = state_19397;
(statearr_19414[(9)] = inst_19350);

(statearr_19414[(10)] = inst_19349);

(statearr_19414[(11)] = inst_19352);

(statearr_19414[(12)] = inst_19351);

return statearr_19414;
})();
var statearr_19415_19446 = state_19397__$1;
(statearr_19415_19446[(2)] = null);

(statearr_19415_19446[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (17))){
var inst_19363 = (state_19397[(7)]);
var inst_19367 = cljs.core.chunk_first(inst_19363);
var inst_19368 = cljs.core.chunk_rest(inst_19363);
var inst_19369 = cljs.core.count(inst_19367);
var inst_19349 = inst_19368;
var inst_19350 = inst_19367;
var inst_19351 = inst_19369;
var inst_19352 = (0);
var state_19397__$1 = (function (){var statearr_19416 = state_19397;
(statearr_19416[(9)] = inst_19350);

(statearr_19416[(10)] = inst_19349);

(statearr_19416[(11)] = inst_19352);

(statearr_19416[(12)] = inst_19351);

return statearr_19416;
})();
var statearr_19417_19447 = state_19397__$1;
(statearr_19417_19447[(2)] = null);

(statearr_19417_19447[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (3))){
var inst_19395 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19397__$1,inst_19395);
} else {
if((state_val_19398 === (12))){
var inst_19383 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
var statearr_19418_19448 = state_19397__$1;
(statearr_19418_19448[(2)] = inst_19383);

(statearr_19418_19448[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (2))){
var state_19397__$1 = state_19397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19397__$1,(4),in$);
} else {
if((state_val_19398 === (23))){
var inst_19391 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
var statearr_19419_19449 = state_19397__$1;
(statearr_19419_19449[(2)] = inst_19391);

(statearr_19419_19449[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (19))){
var inst_19378 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
var statearr_19420_19450 = state_19397__$1;
(statearr_19420_19450[(2)] = inst_19378);

(statearr_19420_19450[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (11))){
var inst_19349 = (state_19397[(10)]);
var inst_19363 = (state_19397[(7)]);
var inst_19363__$1 = cljs.core.seq(inst_19349);
var state_19397__$1 = (function (){var statearr_19421 = state_19397;
(statearr_19421[(7)] = inst_19363__$1);

return statearr_19421;
})();
if(inst_19363__$1){
var statearr_19422_19451 = state_19397__$1;
(statearr_19422_19451[(1)] = (14));

} else {
var statearr_19423_19452 = state_19397__$1;
(statearr_19423_19452[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (9))){
var inst_19385 = (state_19397[(2)]);
var inst_19386 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19397__$1 = (function (){var statearr_19424 = state_19397;
(statearr_19424[(15)] = inst_19385);

return statearr_19424;
})();
if(cljs.core.truth_(inst_19386)){
var statearr_19425_19453 = state_19397__$1;
(statearr_19425_19453[(1)] = (21));

} else {
var statearr_19426_19454 = state_19397__$1;
(statearr_19426_19454[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (5))){
var inst_19341 = cljs.core.async.close_BANG_(out);
var state_19397__$1 = state_19397;
var statearr_19427_19455 = state_19397__$1;
(statearr_19427_19455[(2)] = inst_19341);

(statearr_19427_19455[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (14))){
var inst_19363 = (state_19397[(7)]);
var inst_19365 = cljs.core.chunked_seq_QMARK_(inst_19363);
var state_19397__$1 = state_19397;
if(inst_19365){
var statearr_19428_19456 = state_19397__$1;
(statearr_19428_19456[(1)] = (17));

} else {
var statearr_19429_19457 = state_19397__$1;
(statearr_19429_19457[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (16))){
var inst_19381 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
var statearr_19430_19458 = state_19397__$1;
(statearr_19430_19458[(2)] = inst_19381);

(statearr_19430_19458[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19398 === (10))){
var inst_19350 = (state_19397[(9)]);
var inst_19352 = (state_19397[(11)]);
var inst_19357 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19350,inst_19352);
var state_19397__$1 = state_19397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19397__$1,(13),out,inst_19357);
} else {
if((state_val_19398 === (18))){
var inst_19363 = (state_19397[(7)]);
var inst_19372 = cljs.core.first(inst_19363);
var state_19397__$1 = state_19397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19397__$1,(20),out,inst_19372);
} else {
if((state_val_19398 === (8))){
var inst_19352 = (state_19397[(11)]);
var inst_19351 = (state_19397[(12)]);
var inst_19354 = (inst_19352 < inst_19351);
var inst_19355 = inst_19354;
var state_19397__$1 = state_19397;
if(cljs.core.truth_(inst_19355)){
var statearr_19431_19459 = state_19397__$1;
(statearr_19431_19459[(1)] = (10));

} else {
var statearr_19432_19460 = state_19397__$1;
(statearr_19432_19460[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto__))
;
return ((function (switch__15728__auto__,c__15911__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15729__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15729__auto____0 = (function (){
var statearr_19433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19433[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15729__auto__);

(statearr_19433[(1)] = (1));

return statearr_19433;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15729__auto____1 = (function (state_19397){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_19397);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19434){if((e19434 instanceof Object)){
var ex__15732__auto__ = e19434;
var statearr_19435_19461 = state_19397;
(statearr_19435_19461[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19397);

return cljs.core.cst$kw$recur;
} else {
throw e19434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19462 = state_19397;
state_19397 = G__19462;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15729__auto__ = function(state_19397){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15729__auto____1.call(this,state_19397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15729__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15729__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto__))
})();
var state__15913__auto__ = (function (){var statearr_19436 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19436[(6)] = c__15911__auto__);

return statearr_19436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto__))
);

return c__15911__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19464 = arguments.length;
switch (G__19464) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19467 = arguments.length;
switch (G__19467) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19470 = arguments.length;
switch (G__19470) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15911__auto___19517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___19517,out){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___19517,out){
return (function (state_19494){
var state_val_19495 = (state_19494[(1)]);
if((state_val_19495 === (7))){
var inst_19489 = (state_19494[(2)]);
var state_19494__$1 = state_19494;
var statearr_19496_19518 = state_19494__$1;
(statearr_19496_19518[(2)] = inst_19489);

(statearr_19496_19518[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19495 === (1))){
var inst_19471 = null;
var state_19494__$1 = (function (){var statearr_19497 = state_19494;
(statearr_19497[(7)] = inst_19471);

return statearr_19497;
})();
var statearr_19498_19519 = state_19494__$1;
(statearr_19498_19519[(2)] = null);

(statearr_19498_19519[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19495 === (4))){
var inst_19474 = (state_19494[(8)]);
var inst_19474__$1 = (state_19494[(2)]);
var inst_19475 = (inst_19474__$1 == null);
var inst_19476 = cljs.core.not(inst_19475);
var state_19494__$1 = (function (){var statearr_19499 = state_19494;
(statearr_19499[(8)] = inst_19474__$1);

return statearr_19499;
})();
if(inst_19476){
var statearr_19500_19520 = state_19494__$1;
(statearr_19500_19520[(1)] = (5));

} else {
var statearr_19501_19521 = state_19494__$1;
(statearr_19501_19521[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19495 === (6))){
var state_19494__$1 = state_19494;
var statearr_19502_19522 = state_19494__$1;
(statearr_19502_19522[(2)] = null);

(statearr_19502_19522[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19495 === (3))){
var inst_19491 = (state_19494[(2)]);
var inst_19492 = cljs.core.async.close_BANG_(out);
var state_19494__$1 = (function (){var statearr_19503 = state_19494;
(statearr_19503[(9)] = inst_19491);

return statearr_19503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19494__$1,inst_19492);
} else {
if((state_val_19495 === (2))){
var state_19494__$1 = state_19494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19494__$1,(4),ch);
} else {
if((state_val_19495 === (11))){
var inst_19474 = (state_19494[(8)]);
var inst_19483 = (state_19494[(2)]);
var inst_19471 = inst_19474;
var state_19494__$1 = (function (){var statearr_19504 = state_19494;
(statearr_19504[(10)] = inst_19483);

(statearr_19504[(7)] = inst_19471);

return statearr_19504;
})();
var statearr_19505_19523 = state_19494__$1;
(statearr_19505_19523[(2)] = null);

(statearr_19505_19523[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19495 === (9))){
var inst_19474 = (state_19494[(8)]);
var state_19494__$1 = state_19494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19494__$1,(11),out,inst_19474);
} else {
if((state_val_19495 === (5))){
var inst_19474 = (state_19494[(8)]);
var inst_19471 = (state_19494[(7)]);
var inst_19478 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19474,inst_19471);
var state_19494__$1 = state_19494;
if(inst_19478){
var statearr_19507_19524 = state_19494__$1;
(statearr_19507_19524[(1)] = (8));

} else {
var statearr_19508_19525 = state_19494__$1;
(statearr_19508_19525[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19495 === (10))){
var inst_19486 = (state_19494[(2)]);
var state_19494__$1 = state_19494;
var statearr_19509_19526 = state_19494__$1;
(statearr_19509_19526[(2)] = inst_19486);

(statearr_19509_19526[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19495 === (8))){
var inst_19471 = (state_19494[(7)]);
var tmp19506 = inst_19471;
var inst_19471__$1 = tmp19506;
var state_19494__$1 = (function (){var statearr_19510 = state_19494;
(statearr_19510[(7)] = inst_19471__$1);

return statearr_19510;
})();
var statearr_19511_19527 = state_19494__$1;
(statearr_19511_19527[(2)] = null);

(statearr_19511_19527[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___19517,out))
;
return ((function (switch__15728__auto__,c__15911__auto___19517,out){
return (function() {
var cljs$core$async$state_machine__15729__auto__ = null;
var cljs$core$async$state_machine__15729__auto____0 = (function (){
var statearr_19512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19512[(0)] = cljs$core$async$state_machine__15729__auto__);

(statearr_19512[(1)] = (1));

return statearr_19512;
});
var cljs$core$async$state_machine__15729__auto____1 = (function (state_19494){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_19494);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19513){if((e19513 instanceof Object)){
var ex__15732__auto__ = e19513;
var statearr_19514_19528 = state_19494;
(statearr_19514_19528[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19494);

return cljs.core.cst$kw$recur;
} else {
throw e19513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19529 = state_19494;
state_19494 = G__19529;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$state_machine__15729__auto__ = function(state_19494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15729__auto____1.call(this,state_19494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15729__auto____0;
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15729__auto____1;
return cljs$core$async$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___19517,out))
})();
var state__15913__auto__ = (function (){var statearr_19515 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19515[(6)] = c__15911__auto___19517);

return statearr_19515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___19517,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19531 = arguments.length;
switch (G__19531) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15911__auto___19597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___19597,out){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___19597,out){
return (function (state_19569){
var state_val_19570 = (state_19569[(1)]);
if((state_val_19570 === (7))){
var inst_19565 = (state_19569[(2)]);
var state_19569__$1 = state_19569;
var statearr_19571_19598 = state_19569__$1;
(statearr_19571_19598[(2)] = inst_19565);

(statearr_19571_19598[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19570 === (1))){
var inst_19532 = (new Array(n));
var inst_19533 = inst_19532;
var inst_19534 = (0);
var state_19569__$1 = (function (){var statearr_19572 = state_19569;
(statearr_19572[(7)] = inst_19534);

(statearr_19572[(8)] = inst_19533);

return statearr_19572;
})();
var statearr_19573_19599 = state_19569__$1;
(statearr_19573_19599[(2)] = null);

(statearr_19573_19599[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19570 === (4))){
var inst_19537 = (state_19569[(9)]);
var inst_19537__$1 = (state_19569[(2)]);
var inst_19538 = (inst_19537__$1 == null);
var inst_19539 = cljs.core.not(inst_19538);
var state_19569__$1 = (function (){var statearr_19574 = state_19569;
(statearr_19574[(9)] = inst_19537__$1);

return statearr_19574;
})();
if(inst_19539){
var statearr_19575_19600 = state_19569__$1;
(statearr_19575_19600[(1)] = (5));

} else {
var statearr_19576_19601 = state_19569__$1;
(statearr_19576_19601[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19570 === (15))){
var inst_19559 = (state_19569[(2)]);
var state_19569__$1 = state_19569;
var statearr_19577_19602 = state_19569__$1;
(statearr_19577_19602[(2)] = inst_19559);

(statearr_19577_19602[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19570 === (13))){
var state_19569__$1 = state_19569;
var statearr_19578_19603 = state_19569__$1;
(statearr_19578_19603[(2)] = null);

(statearr_19578_19603[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19570 === (6))){
var inst_19534 = (state_19569[(7)]);
var inst_19555 = (inst_19534 > (0));
var state_19569__$1 = state_19569;
if(cljs.core.truth_(inst_19555)){
var statearr_19579_19604 = state_19569__$1;
(statearr_19579_19604[(1)] = (12));

} else {
var statearr_19580_19605 = state_19569__$1;
(statearr_19580_19605[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19570 === (3))){
var inst_19567 = (state_19569[(2)]);
var state_19569__$1 = state_19569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19569__$1,inst_19567);
} else {
if((state_val_19570 === (12))){
var inst_19533 = (state_19569[(8)]);
var inst_19557 = cljs.core.vec(inst_19533);
var state_19569__$1 = state_19569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19569__$1,(15),out,inst_19557);
} else {
if((state_val_19570 === (2))){
var state_19569__$1 = state_19569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19569__$1,(4),ch);
} else {
if((state_val_19570 === (11))){
var inst_19549 = (state_19569[(2)]);
var inst_19550 = (new Array(n));
var inst_19533 = inst_19550;
var inst_19534 = (0);
var state_19569__$1 = (function (){var statearr_19581 = state_19569;
(statearr_19581[(7)] = inst_19534);

(statearr_19581[(8)] = inst_19533);

(statearr_19581[(10)] = inst_19549);

return statearr_19581;
})();
var statearr_19582_19606 = state_19569__$1;
(statearr_19582_19606[(2)] = null);

(statearr_19582_19606[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19570 === (9))){
var inst_19533 = (state_19569[(8)]);
var inst_19547 = cljs.core.vec(inst_19533);
var state_19569__$1 = state_19569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19569__$1,(11),out,inst_19547);
} else {
if((state_val_19570 === (5))){
var inst_19534 = (state_19569[(7)]);
var inst_19533 = (state_19569[(8)]);
var inst_19542 = (state_19569[(11)]);
var inst_19537 = (state_19569[(9)]);
var inst_19541 = (inst_19533[inst_19534] = inst_19537);
var inst_19542__$1 = (inst_19534 + (1));
var inst_19543 = (inst_19542__$1 < n);
var state_19569__$1 = (function (){var statearr_19583 = state_19569;
(statearr_19583[(11)] = inst_19542__$1);

(statearr_19583[(12)] = inst_19541);

return statearr_19583;
})();
if(cljs.core.truth_(inst_19543)){
var statearr_19584_19607 = state_19569__$1;
(statearr_19584_19607[(1)] = (8));

} else {
var statearr_19585_19608 = state_19569__$1;
(statearr_19585_19608[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19570 === (14))){
var inst_19562 = (state_19569[(2)]);
var inst_19563 = cljs.core.async.close_BANG_(out);
var state_19569__$1 = (function (){var statearr_19587 = state_19569;
(statearr_19587[(13)] = inst_19562);

return statearr_19587;
})();
var statearr_19588_19609 = state_19569__$1;
(statearr_19588_19609[(2)] = inst_19563);

(statearr_19588_19609[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19570 === (10))){
var inst_19553 = (state_19569[(2)]);
var state_19569__$1 = state_19569;
var statearr_19589_19610 = state_19569__$1;
(statearr_19589_19610[(2)] = inst_19553);

(statearr_19589_19610[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19570 === (8))){
var inst_19533 = (state_19569[(8)]);
var inst_19542 = (state_19569[(11)]);
var tmp19586 = inst_19533;
var inst_19533__$1 = tmp19586;
var inst_19534 = inst_19542;
var state_19569__$1 = (function (){var statearr_19590 = state_19569;
(statearr_19590[(7)] = inst_19534);

(statearr_19590[(8)] = inst_19533__$1);

return statearr_19590;
})();
var statearr_19591_19611 = state_19569__$1;
(statearr_19591_19611[(2)] = null);

(statearr_19591_19611[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___19597,out))
;
return ((function (switch__15728__auto__,c__15911__auto___19597,out){
return (function() {
var cljs$core$async$state_machine__15729__auto__ = null;
var cljs$core$async$state_machine__15729__auto____0 = (function (){
var statearr_19592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19592[(0)] = cljs$core$async$state_machine__15729__auto__);

(statearr_19592[(1)] = (1));

return statearr_19592;
});
var cljs$core$async$state_machine__15729__auto____1 = (function (state_19569){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_19569);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19593){if((e19593 instanceof Object)){
var ex__15732__auto__ = e19593;
var statearr_19594_19612 = state_19569;
(statearr_19594_19612[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19569);

return cljs.core.cst$kw$recur;
} else {
throw e19593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19613 = state_19569;
state_19569 = G__19613;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$state_machine__15729__auto__ = function(state_19569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15729__auto____1.call(this,state_19569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15729__auto____0;
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15729__auto____1;
return cljs$core$async$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___19597,out))
})();
var state__15913__auto__ = (function (){var statearr_19595 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19595[(6)] = c__15911__auto___19597);

return statearr_19595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___19597,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19615 = arguments.length;
switch (G__19615) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15911__auto___19685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15911__auto___19685,out){
return (function (){
var f__15912__auto__ = (function (){var switch__15728__auto__ = ((function (c__15911__auto___19685,out){
return (function (state_19657){
var state_val_19658 = (state_19657[(1)]);
if((state_val_19658 === (7))){
var inst_19653 = (state_19657[(2)]);
var state_19657__$1 = state_19657;
var statearr_19659_19686 = state_19657__$1;
(statearr_19659_19686[(2)] = inst_19653);

(statearr_19659_19686[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19658 === (1))){
var inst_19616 = [];
var inst_19617 = inst_19616;
var inst_19618 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19657__$1 = (function (){var statearr_19660 = state_19657;
(statearr_19660[(7)] = inst_19617);

(statearr_19660[(8)] = inst_19618);

return statearr_19660;
})();
var statearr_19661_19687 = state_19657__$1;
(statearr_19661_19687[(2)] = null);

(statearr_19661_19687[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19658 === (4))){
var inst_19621 = (state_19657[(9)]);
var inst_19621__$1 = (state_19657[(2)]);
var inst_19622 = (inst_19621__$1 == null);
var inst_19623 = cljs.core.not(inst_19622);
var state_19657__$1 = (function (){var statearr_19662 = state_19657;
(statearr_19662[(9)] = inst_19621__$1);

return statearr_19662;
})();
if(inst_19623){
var statearr_19663_19688 = state_19657__$1;
(statearr_19663_19688[(1)] = (5));

} else {
var statearr_19664_19689 = state_19657__$1;
(statearr_19664_19689[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19658 === (15))){
var inst_19647 = (state_19657[(2)]);
var state_19657__$1 = state_19657;
var statearr_19665_19690 = state_19657__$1;
(statearr_19665_19690[(2)] = inst_19647);

(statearr_19665_19690[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19658 === (13))){
var state_19657__$1 = state_19657;
var statearr_19666_19691 = state_19657__$1;
(statearr_19666_19691[(2)] = null);

(statearr_19666_19691[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19658 === (6))){
var inst_19617 = (state_19657[(7)]);
var inst_19642 = inst_19617.length;
var inst_19643 = (inst_19642 > (0));
var state_19657__$1 = state_19657;
if(cljs.core.truth_(inst_19643)){
var statearr_19667_19692 = state_19657__$1;
(statearr_19667_19692[(1)] = (12));

} else {
var statearr_19668_19693 = state_19657__$1;
(statearr_19668_19693[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19658 === (3))){
var inst_19655 = (state_19657[(2)]);
var state_19657__$1 = state_19657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19657__$1,inst_19655);
} else {
if((state_val_19658 === (12))){
var inst_19617 = (state_19657[(7)]);
var inst_19645 = cljs.core.vec(inst_19617);
var state_19657__$1 = state_19657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19657__$1,(15),out,inst_19645);
} else {
if((state_val_19658 === (2))){
var state_19657__$1 = state_19657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19657__$1,(4),ch);
} else {
if((state_val_19658 === (11))){
var inst_19621 = (state_19657[(9)]);
var inst_19625 = (state_19657[(10)]);
var inst_19635 = (state_19657[(2)]);
var inst_19636 = [];
var inst_19637 = inst_19636.push(inst_19621);
var inst_19617 = inst_19636;
var inst_19618 = inst_19625;
var state_19657__$1 = (function (){var statearr_19669 = state_19657;
(statearr_19669[(11)] = inst_19635);

(statearr_19669[(7)] = inst_19617);

(statearr_19669[(8)] = inst_19618);

(statearr_19669[(12)] = inst_19637);

return statearr_19669;
})();
var statearr_19670_19694 = state_19657__$1;
(statearr_19670_19694[(2)] = null);

(statearr_19670_19694[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19658 === (9))){
var inst_19617 = (state_19657[(7)]);
var inst_19633 = cljs.core.vec(inst_19617);
var state_19657__$1 = state_19657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19657__$1,(11),out,inst_19633);
} else {
if((state_val_19658 === (5))){
var inst_19621 = (state_19657[(9)]);
var inst_19625 = (state_19657[(10)]);
var inst_19618 = (state_19657[(8)]);
var inst_19625__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19621) : f.call(null,inst_19621));
var inst_19626 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19625__$1,inst_19618);
var inst_19627 = cljs.core.keyword_identical_QMARK_(inst_19618,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19628 = ((inst_19626) || (inst_19627));
var state_19657__$1 = (function (){var statearr_19671 = state_19657;
(statearr_19671[(10)] = inst_19625__$1);

return statearr_19671;
})();
if(cljs.core.truth_(inst_19628)){
var statearr_19672_19695 = state_19657__$1;
(statearr_19672_19695[(1)] = (8));

} else {
var statearr_19673_19696 = state_19657__$1;
(statearr_19673_19696[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19658 === (14))){
var inst_19650 = (state_19657[(2)]);
var inst_19651 = cljs.core.async.close_BANG_(out);
var state_19657__$1 = (function (){var statearr_19675 = state_19657;
(statearr_19675[(13)] = inst_19650);

return statearr_19675;
})();
var statearr_19676_19697 = state_19657__$1;
(statearr_19676_19697[(2)] = inst_19651);

(statearr_19676_19697[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19658 === (10))){
var inst_19640 = (state_19657[(2)]);
var state_19657__$1 = state_19657;
var statearr_19677_19698 = state_19657__$1;
(statearr_19677_19698[(2)] = inst_19640);

(statearr_19677_19698[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19658 === (8))){
var inst_19621 = (state_19657[(9)]);
var inst_19625 = (state_19657[(10)]);
var inst_19617 = (state_19657[(7)]);
var inst_19630 = inst_19617.push(inst_19621);
var tmp19674 = inst_19617;
var inst_19617__$1 = tmp19674;
var inst_19618 = inst_19625;
var state_19657__$1 = (function (){var statearr_19678 = state_19657;
(statearr_19678[(14)] = inst_19630);

(statearr_19678[(7)] = inst_19617__$1);

(statearr_19678[(8)] = inst_19618);

return statearr_19678;
})();
var statearr_19679_19699 = state_19657__$1;
(statearr_19679_19699[(2)] = null);

(statearr_19679_19699[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15911__auto___19685,out))
;
return ((function (switch__15728__auto__,c__15911__auto___19685,out){
return (function() {
var cljs$core$async$state_machine__15729__auto__ = null;
var cljs$core$async$state_machine__15729__auto____0 = (function (){
var statearr_19680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19680[(0)] = cljs$core$async$state_machine__15729__auto__);

(statearr_19680[(1)] = (1));

return statearr_19680;
});
var cljs$core$async$state_machine__15729__auto____1 = (function (state_19657){
while(true){
var ret_value__15730__auto__ = (function (){try{while(true){
var result__15731__auto__ = switch__15728__auto__(state_19657);
if(cljs.core.keyword_identical_QMARK_(result__15731__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15731__auto__;
}
break;
}
}catch (e19681){if((e19681 instanceof Object)){
var ex__15732__auto__ = e19681;
var statearr_19682_19700 = state_19657;
(statearr_19682_19700[(5)] = ex__15732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19657);

return cljs.core.cst$kw$recur;
} else {
throw e19681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15730__auto__,cljs.core.cst$kw$recur)){
var G__19701 = state_19657;
state_19657 = G__19701;
continue;
} else {
return ret_value__15730__auto__;
}
break;
}
});
cljs$core$async$state_machine__15729__auto__ = function(state_19657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15729__auto____1.call(this,state_19657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15729__auto____0;
cljs$core$async$state_machine__15729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15729__auto____1;
return cljs$core$async$state_machine__15729__auto__;
})()
;})(switch__15728__auto__,c__15911__auto___19685,out))
})();
var state__15913__auto__ = (function (){var statearr_19683 = (f__15912__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15912__auto__.cljs$core$IFn$_invoke$arity$0() : f__15912__auto__.call(null));
(statearr_19683[(6)] = c__15911__auto___19685);

return statearr_19683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15913__auto__);
});})(c__15911__auto___19685,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

