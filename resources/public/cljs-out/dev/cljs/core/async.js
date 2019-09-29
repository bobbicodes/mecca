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
var G__17656 = arguments.length;
switch (G__17656) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17657 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17657 = (function (f,blockable,meta17658){
this.f = f;
this.blockable = blockable;
this.meta17658 = meta17658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17659,meta17658__$1){
var self__ = this;
var _17659__$1 = this;
return (new cljs.core.async.t_cljs$core$async17657(self__.f,self__.blockable,meta17658__$1));
});

cljs.core.async.t_cljs$core$async17657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17659){
var self__ = this;
var _17659__$1 = this;
return self__.meta17658;
});

cljs.core.async.t_cljs$core$async17657.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17657.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17658], null);
});

cljs.core.async.t_cljs$core$async17657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17657";

cljs.core.async.t_cljs$core$async17657.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17657");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17657.
 */
cljs.core.async.__GT_t_cljs$core$async17657 = (function cljs$core$async$__GT_t_cljs$core$async17657(f__$1,blockable__$1,meta17658){
return (new cljs.core.async.t_cljs$core$async17657(f__$1,blockable__$1,meta17658));
});

}

return (new cljs.core.async.t_cljs$core$async17657(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17663 = arguments.length;
switch (G__17663) {
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
var G__17666 = arguments.length;
switch (G__17666) {
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
var G__17669 = arguments.length;
switch (G__17669) {
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
var val_17671 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17671) : fn1.call(null,val_17671));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17671,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17671) : fn1.call(null,val_17671));
});})(val_17671,ret))
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
var G__17673 = arguments.length;
switch (G__17673) {
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
var n__4408__auto___17675 = n;
var x_17676 = (0);
while(true){
if((x_17676 < n__4408__auto___17675)){
(a[x_17676] = x_17676);

var G__17677 = (x_17676 + (1));
x_17676 = G__17677;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17678 = (function (flag,meta17679){
this.flag = flag;
this.meta17679 = meta17679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17680,meta17679__$1){
var self__ = this;
var _17680__$1 = this;
return (new cljs.core.async.t_cljs$core$async17678(self__.flag,meta17679__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17680){
var self__ = this;
var _17680__$1 = this;
return self__.meta17679;
});})(flag))
;

cljs.core.async.t_cljs$core$async17678.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17678.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17678.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17679], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17678";

cljs.core.async.t_cljs$core$async17678.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17678");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17678.
 */
cljs.core.async.__GT_t_cljs$core$async17678 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17678(flag__$1,meta17679){
return (new cljs.core.async.t_cljs$core$async17678(flag__$1,meta17679));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17678(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17681 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17681 = (function (flag,cb,meta17682){
this.flag = flag;
this.cb = cb;
this.meta17682 = meta17682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17683,meta17682__$1){
var self__ = this;
var _17683__$1 = this;
return (new cljs.core.async.t_cljs$core$async17681(self__.flag,self__.cb,meta17682__$1));
});

cljs.core.async.t_cljs$core$async17681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17683){
var self__ = this;
var _17683__$1 = this;
return self__.meta17682;
});

cljs.core.async.t_cljs$core$async17681.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17681.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17682], null);
});

cljs.core.async.t_cljs$core$async17681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17681";

cljs.core.async.t_cljs$core$async17681.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17681");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17681.
 */
cljs.core.async.__GT_t_cljs$core$async17681 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17681(flag__$1,cb__$1,meta17682){
return (new cljs.core.async.t_cljs$core$async17681(flag__$1,cb__$1,meta17682));
});

}

return (new cljs.core.async.t_cljs$core$async17681(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17684_SHARP_){
var G__17686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17684_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17686) : fret.call(null,G__17686));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17685_SHARP_){
var G__17687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17685_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17687) : fret.call(null,G__17687));
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
var G__17688 = (i + (1));
i = G__17688;
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
var len__4531__auto___17694 = arguments.length;
var i__4532__auto___17695 = (0);
while(true){
if((i__4532__auto___17695 < len__4531__auto___17694)){
args__4534__auto__.push((arguments[i__4532__auto___17695]));

var G__17696 = (i__4532__auto___17695 + (1));
i__4532__auto___17695 = G__17696;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17691){
var map__17692 = p__17691;
var map__17692__$1 = ((((!((map__17692 == null)))?(((((map__17692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17692):map__17692);
var opts = map__17692__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17689){
var G__17690 = cljs.core.first(seq17689);
var seq17689__$1 = cljs.core.next(seq17689);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17690,seq17689__$1);
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
var G__17698 = arguments.length;
switch (G__17698) {
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
var c__15729__auto___17744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___17744){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___17744){
return (function (state_17722){
var state_val_17723 = (state_17722[(1)]);
if((state_val_17723 === (7))){
var inst_17718 = (state_17722[(2)]);
var state_17722__$1 = state_17722;
var statearr_17724_17745 = state_17722__$1;
(statearr_17724_17745[(2)] = inst_17718);

(statearr_17724_17745[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17723 === (1))){
var state_17722__$1 = state_17722;
var statearr_17725_17746 = state_17722__$1;
(statearr_17725_17746[(2)] = null);

(statearr_17725_17746[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17723 === (4))){
var inst_17701 = (state_17722[(7)]);
var inst_17701__$1 = (state_17722[(2)]);
var inst_17702 = (inst_17701__$1 == null);
var state_17722__$1 = (function (){var statearr_17726 = state_17722;
(statearr_17726[(7)] = inst_17701__$1);

return statearr_17726;
})();
if(cljs.core.truth_(inst_17702)){
var statearr_17727_17747 = state_17722__$1;
(statearr_17727_17747[(1)] = (5));

} else {
var statearr_17728_17748 = state_17722__$1;
(statearr_17728_17748[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17723 === (13))){
var state_17722__$1 = state_17722;
var statearr_17729_17749 = state_17722__$1;
(statearr_17729_17749[(2)] = null);

(statearr_17729_17749[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17723 === (6))){
var inst_17701 = (state_17722[(7)]);
var state_17722__$1 = state_17722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17722__$1,(11),to,inst_17701);
} else {
if((state_val_17723 === (3))){
var inst_17720 = (state_17722[(2)]);
var state_17722__$1 = state_17722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17722__$1,inst_17720);
} else {
if((state_val_17723 === (12))){
var state_17722__$1 = state_17722;
var statearr_17730_17750 = state_17722__$1;
(statearr_17730_17750[(2)] = null);

(statearr_17730_17750[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17723 === (2))){
var state_17722__$1 = state_17722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17722__$1,(4),from);
} else {
if((state_val_17723 === (11))){
var inst_17711 = (state_17722[(2)]);
var state_17722__$1 = state_17722;
if(cljs.core.truth_(inst_17711)){
var statearr_17731_17751 = state_17722__$1;
(statearr_17731_17751[(1)] = (12));

} else {
var statearr_17732_17752 = state_17722__$1;
(statearr_17732_17752[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17723 === (9))){
var state_17722__$1 = state_17722;
var statearr_17733_17753 = state_17722__$1;
(statearr_17733_17753[(2)] = null);

(statearr_17733_17753[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17723 === (5))){
var state_17722__$1 = state_17722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17734_17754 = state_17722__$1;
(statearr_17734_17754[(1)] = (8));

} else {
var statearr_17735_17755 = state_17722__$1;
(statearr_17735_17755[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17723 === (14))){
var inst_17716 = (state_17722[(2)]);
var state_17722__$1 = state_17722;
var statearr_17736_17756 = state_17722__$1;
(statearr_17736_17756[(2)] = inst_17716);

(statearr_17736_17756[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17723 === (10))){
var inst_17708 = (state_17722[(2)]);
var state_17722__$1 = state_17722;
var statearr_17737_17757 = state_17722__$1;
(statearr_17737_17757[(2)] = inst_17708);

(statearr_17737_17757[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17723 === (8))){
var inst_17705 = cljs.core.async.close_BANG_(to);
var state_17722__$1 = state_17722;
var statearr_17738_17758 = state_17722__$1;
(statearr_17738_17758[(2)] = inst_17705);

(statearr_17738_17758[(1)] = (10));


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
});})(c__15729__auto___17744))
;
return ((function (switch__15546__auto__,c__15729__auto___17744){
return (function() {
var cljs$core$async$state_machine__15547__auto__ = null;
var cljs$core$async$state_machine__15547__auto____0 = (function (){
var statearr_17739 = [null,null,null,null,null,null,null,null];
(statearr_17739[(0)] = cljs$core$async$state_machine__15547__auto__);

(statearr_17739[(1)] = (1));

return statearr_17739;
});
var cljs$core$async$state_machine__15547__auto____1 = (function (state_17722){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_17722);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e17740){if((e17740 instanceof Object)){
var ex__15550__auto__ = e17740;
var statearr_17741_17759 = state_17722;
(statearr_17741_17759[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17722);

return cljs.core.cst$kw$recur;
} else {
throw e17740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__17760 = state_17722;
state_17722 = G__17760;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$state_machine__15547__auto__ = function(state_17722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15547__auto____1.call(this,state_17722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15547__auto____0;
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15547__auto____1;
return cljs$core$async$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___17744))
})();
var state__15731__auto__ = (function (){var statearr_17742 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_17742[(6)] = c__15729__auto___17744);

return statearr_17742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___17744))
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
return (function (p__17761){
var vec__17762 = p__17761;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17762,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17762,(1),null);
var job = vec__17762;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15729__auto___17933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___17933,res,vec__17762,v,p,job,jobs,results){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___17933,res,vec__17762,v,p,job,jobs,results){
return (function (state_17769){
var state_val_17770 = (state_17769[(1)]);
if((state_val_17770 === (1))){
var state_17769__$1 = state_17769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17769__$1,(2),res,v);
} else {
if((state_val_17770 === (2))){
var inst_17766 = (state_17769[(2)]);
var inst_17767 = cljs.core.async.close_BANG_(res);
var state_17769__$1 = (function (){var statearr_17771 = state_17769;
(statearr_17771[(7)] = inst_17766);

return statearr_17771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17769__$1,inst_17767);
} else {
return null;
}
}
});})(c__15729__auto___17933,res,vec__17762,v,p,job,jobs,results))
;
return ((function (switch__15546__auto__,c__15729__auto___17933,res,vec__17762,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0 = (function (){
var statearr_17772 = [null,null,null,null,null,null,null,null];
(statearr_17772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__);

(statearr_17772[(1)] = (1));

return statearr_17772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1 = (function (state_17769){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_17769);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e17773){if((e17773 instanceof Object)){
var ex__15550__auto__ = e17773;
var statearr_17774_17934 = state_17769;
(statearr_17774_17934[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17769);

return cljs.core.cst$kw$recur;
} else {
throw e17773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__17935 = state_17769;
state_17769 = G__17935;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__ = function(state_17769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1.call(this,state_17769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___17933,res,vec__17762,v,p,job,jobs,results))
})();
var state__15731__auto__ = (function (){var statearr_17775 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_17775[(6)] = c__15729__auto___17933);

return statearr_17775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___17933,res,vec__17762,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17776){
var vec__17777 = p__17776;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17777,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17777,(1),null);
var job = vec__17777;
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
var n__4408__auto___17936 = n;
var __17937 = (0);
while(true){
if((__17937 < n__4408__auto___17936)){
var G__17780_17938 = type;
var G__17780_17939__$1 = (((G__17780_17938 instanceof cljs.core.Keyword))?G__17780_17938.fqn:null);
switch (G__17780_17939__$1) {
case "compute":
var c__15729__auto___17941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17937,c__15729__auto___17941,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (__17937,c__15729__auto___17941,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async){
return (function (state_17793){
var state_val_17794 = (state_17793[(1)]);
if((state_val_17794 === (1))){
var state_17793__$1 = state_17793;
var statearr_17795_17942 = state_17793__$1;
(statearr_17795_17942[(2)] = null);

(statearr_17795_17942[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17794 === (2))){
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17793__$1,(4),jobs);
} else {
if((state_val_17794 === (3))){
var inst_17791 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17793__$1,inst_17791);
} else {
if((state_val_17794 === (4))){
var inst_17783 = (state_17793[(2)]);
var inst_17784 = process(inst_17783);
var state_17793__$1 = state_17793;
if(cljs.core.truth_(inst_17784)){
var statearr_17796_17943 = state_17793__$1;
(statearr_17796_17943[(1)] = (5));

} else {
var statearr_17797_17944 = state_17793__$1;
(statearr_17797_17944[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17794 === (5))){
var state_17793__$1 = state_17793;
var statearr_17798_17945 = state_17793__$1;
(statearr_17798_17945[(2)] = null);

(statearr_17798_17945[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17794 === (6))){
var state_17793__$1 = state_17793;
var statearr_17799_17946 = state_17793__$1;
(statearr_17799_17946[(2)] = null);

(statearr_17799_17946[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17794 === (7))){
var inst_17789 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17800_17947 = state_17793__$1;
(statearr_17800_17947[(2)] = inst_17789);

(statearr_17800_17947[(1)] = (3));


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
});})(__17937,c__15729__auto___17941,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async))
;
return ((function (__17937,switch__15546__auto__,c__15729__auto___17941,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0 = (function (){
var statearr_17801 = [null,null,null,null,null,null,null];
(statearr_17801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__);

(statearr_17801[(1)] = (1));

return statearr_17801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1 = (function (state_17793){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_17793);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e17802){if((e17802 instanceof Object)){
var ex__15550__auto__ = e17802;
var statearr_17803_17948 = state_17793;
(statearr_17803_17948[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17793);

return cljs.core.cst$kw$recur;
} else {
throw e17802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__17949 = state_17793;
state_17793 = G__17949;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__ = function(state_17793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1.call(this,state_17793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__;
})()
;})(__17937,switch__15546__auto__,c__15729__auto___17941,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async))
})();
var state__15731__auto__ = (function (){var statearr_17804 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_17804[(6)] = c__15729__auto___17941);

return statearr_17804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(__17937,c__15729__auto___17941,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async))
);


break;
case "async":
var c__15729__auto___17950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17937,c__15729__auto___17950,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (__17937,c__15729__auto___17950,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async){
return (function (state_17817){
var state_val_17818 = (state_17817[(1)]);
if((state_val_17818 === (1))){
var state_17817__$1 = state_17817;
var statearr_17819_17951 = state_17817__$1;
(statearr_17819_17951[(2)] = null);

(statearr_17819_17951[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17818 === (2))){
var state_17817__$1 = state_17817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17817__$1,(4),jobs);
} else {
if((state_val_17818 === (3))){
var inst_17815 = (state_17817[(2)]);
var state_17817__$1 = state_17817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17817__$1,inst_17815);
} else {
if((state_val_17818 === (4))){
var inst_17807 = (state_17817[(2)]);
var inst_17808 = async(inst_17807);
var state_17817__$1 = state_17817;
if(cljs.core.truth_(inst_17808)){
var statearr_17820_17952 = state_17817__$1;
(statearr_17820_17952[(1)] = (5));

} else {
var statearr_17821_17953 = state_17817__$1;
(statearr_17821_17953[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17818 === (5))){
var state_17817__$1 = state_17817;
var statearr_17822_17954 = state_17817__$1;
(statearr_17822_17954[(2)] = null);

(statearr_17822_17954[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17818 === (6))){
var state_17817__$1 = state_17817;
var statearr_17823_17955 = state_17817__$1;
(statearr_17823_17955[(2)] = null);

(statearr_17823_17955[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17818 === (7))){
var inst_17813 = (state_17817[(2)]);
var state_17817__$1 = state_17817;
var statearr_17824_17956 = state_17817__$1;
(statearr_17824_17956[(2)] = inst_17813);

(statearr_17824_17956[(1)] = (3));


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
});})(__17937,c__15729__auto___17950,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async))
;
return ((function (__17937,switch__15546__auto__,c__15729__auto___17950,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0 = (function (){
var statearr_17825 = [null,null,null,null,null,null,null];
(statearr_17825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__);

(statearr_17825[(1)] = (1));

return statearr_17825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1 = (function (state_17817){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_17817);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e17826){if((e17826 instanceof Object)){
var ex__15550__auto__ = e17826;
var statearr_17827_17957 = state_17817;
(statearr_17827_17957[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17817);

return cljs.core.cst$kw$recur;
} else {
throw e17826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__17958 = state_17817;
state_17817 = G__17958;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__ = function(state_17817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1.call(this,state_17817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__;
})()
;})(__17937,switch__15546__auto__,c__15729__auto___17950,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async))
})();
var state__15731__auto__ = (function (){var statearr_17828 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_17828[(6)] = c__15729__auto___17950);

return statearr_17828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(__17937,c__15729__auto___17950,G__17780_17938,G__17780_17939__$1,n__4408__auto___17936,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17780_17939__$1)].join('')));

}

var G__17959 = (__17937 + (1));
__17937 = G__17959;
continue;
} else {
}
break;
}

var c__15729__auto___17960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___17960,jobs,results,process,async){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___17960,jobs,results,process,async){
return (function (state_17850){
var state_val_17851 = (state_17850[(1)]);
if((state_val_17851 === (1))){
var state_17850__$1 = state_17850;
var statearr_17852_17961 = state_17850__$1;
(statearr_17852_17961[(2)] = null);

(statearr_17852_17961[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (2))){
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17850__$1,(4),from);
} else {
if((state_val_17851 === (3))){
var inst_17848 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17850__$1,inst_17848);
} else {
if((state_val_17851 === (4))){
var inst_17831 = (state_17850[(7)]);
var inst_17831__$1 = (state_17850[(2)]);
var inst_17832 = (inst_17831__$1 == null);
var state_17850__$1 = (function (){var statearr_17853 = state_17850;
(statearr_17853[(7)] = inst_17831__$1);

return statearr_17853;
})();
if(cljs.core.truth_(inst_17832)){
var statearr_17854_17962 = state_17850__$1;
(statearr_17854_17962[(1)] = (5));

} else {
var statearr_17855_17963 = state_17850__$1;
(statearr_17855_17963[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (5))){
var inst_17834 = cljs.core.async.close_BANG_(jobs);
var state_17850__$1 = state_17850;
var statearr_17856_17964 = state_17850__$1;
(statearr_17856_17964[(2)] = inst_17834);

(statearr_17856_17964[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (6))){
var inst_17836 = (state_17850[(8)]);
var inst_17831 = (state_17850[(7)]);
var inst_17836__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17838 = [inst_17831,inst_17836__$1];
var inst_17839 = (new cljs.core.PersistentVector(null,2,(5),inst_17837,inst_17838,null));
var state_17850__$1 = (function (){var statearr_17857 = state_17850;
(statearr_17857[(8)] = inst_17836__$1);

return statearr_17857;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17850__$1,(8),jobs,inst_17839);
} else {
if((state_val_17851 === (7))){
var inst_17846 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17858_17965 = state_17850__$1;
(statearr_17858_17965[(2)] = inst_17846);

(statearr_17858_17965[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (8))){
var inst_17836 = (state_17850[(8)]);
var inst_17841 = (state_17850[(2)]);
var state_17850__$1 = (function (){var statearr_17859 = state_17850;
(statearr_17859[(9)] = inst_17841);

return statearr_17859;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17850__$1,(9),results,inst_17836);
} else {
if((state_val_17851 === (9))){
var inst_17843 = (state_17850[(2)]);
var state_17850__$1 = (function (){var statearr_17860 = state_17850;
(statearr_17860[(10)] = inst_17843);

return statearr_17860;
})();
var statearr_17861_17966 = state_17850__$1;
(statearr_17861_17966[(2)] = null);

(statearr_17861_17966[(1)] = (2));


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
});})(c__15729__auto___17960,jobs,results,process,async))
;
return ((function (switch__15546__auto__,c__15729__auto___17960,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0 = (function (){
var statearr_17862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__);

(statearr_17862[(1)] = (1));

return statearr_17862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1 = (function (state_17850){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_17850);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e17863){if((e17863 instanceof Object)){
var ex__15550__auto__ = e17863;
var statearr_17864_17967 = state_17850;
(statearr_17864_17967[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17850);

return cljs.core.cst$kw$recur;
} else {
throw e17863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__17968 = state_17850;
state_17850 = G__17968;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__ = function(state_17850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1.call(this,state_17850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___17960,jobs,results,process,async))
})();
var state__15731__auto__ = (function (){var statearr_17865 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_17865[(6)] = c__15729__auto___17960);

return statearr_17865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___17960,jobs,results,process,async))
);


var c__15729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto__,jobs,results,process,async){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto__,jobs,results,process,async){
return (function (state_17903){
var state_val_17904 = (state_17903[(1)]);
if((state_val_17904 === (7))){
var inst_17899 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17905_17969 = state_17903__$1;
(statearr_17905_17969[(2)] = inst_17899);

(statearr_17905_17969[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (20))){
var state_17903__$1 = state_17903;
var statearr_17906_17970 = state_17903__$1;
(statearr_17906_17970[(2)] = null);

(statearr_17906_17970[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (1))){
var state_17903__$1 = state_17903;
var statearr_17907_17971 = state_17903__$1;
(statearr_17907_17971[(2)] = null);

(statearr_17907_17971[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (4))){
var inst_17868 = (state_17903[(7)]);
var inst_17868__$1 = (state_17903[(2)]);
var inst_17869 = (inst_17868__$1 == null);
var state_17903__$1 = (function (){var statearr_17908 = state_17903;
(statearr_17908[(7)] = inst_17868__$1);

return statearr_17908;
})();
if(cljs.core.truth_(inst_17869)){
var statearr_17909_17972 = state_17903__$1;
(statearr_17909_17972[(1)] = (5));

} else {
var statearr_17910_17973 = state_17903__$1;
(statearr_17910_17973[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (15))){
var inst_17881 = (state_17903[(8)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17903__$1,(18),to,inst_17881);
} else {
if((state_val_17904 === (21))){
var inst_17894 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17911_17974 = state_17903__$1;
(statearr_17911_17974[(2)] = inst_17894);

(statearr_17911_17974[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (13))){
var inst_17896 = (state_17903[(2)]);
var state_17903__$1 = (function (){var statearr_17912 = state_17903;
(statearr_17912[(9)] = inst_17896);

return statearr_17912;
})();
var statearr_17913_17975 = state_17903__$1;
(statearr_17913_17975[(2)] = null);

(statearr_17913_17975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (6))){
var inst_17868 = (state_17903[(7)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17903__$1,(11),inst_17868);
} else {
if((state_val_17904 === (17))){
var inst_17889 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
if(cljs.core.truth_(inst_17889)){
var statearr_17914_17976 = state_17903__$1;
(statearr_17914_17976[(1)] = (19));

} else {
var statearr_17915_17977 = state_17903__$1;
(statearr_17915_17977[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (3))){
var inst_17901 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17903__$1,inst_17901);
} else {
if((state_val_17904 === (12))){
var inst_17878 = (state_17903[(10)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17903__$1,(14),inst_17878);
} else {
if((state_val_17904 === (2))){
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17903__$1,(4),results);
} else {
if((state_val_17904 === (19))){
var state_17903__$1 = state_17903;
var statearr_17916_17978 = state_17903__$1;
(statearr_17916_17978[(2)] = null);

(statearr_17916_17978[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (11))){
var inst_17878 = (state_17903[(2)]);
var state_17903__$1 = (function (){var statearr_17917 = state_17903;
(statearr_17917[(10)] = inst_17878);

return statearr_17917;
})();
var statearr_17918_17979 = state_17903__$1;
(statearr_17918_17979[(2)] = null);

(statearr_17918_17979[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (9))){
var state_17903__$1 = state_17903;
var statearr_17919_17980 = state_17903__$1;
(statearr_17919_17980[(2)] = null);

(statearr_17919_17980[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (5))){
var state_17903__$1 = state_17903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17920_17981 = state_17903__$1;
(statearr_17920_17981[(1)] = (8));

} else {
var statearr_17921_17982 = state_17903__$1;
(statearr_17921_17982[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (14))){
var inst_17881 = (state_17903[(8)]);
var inst_17883 = (state_17903[(11)]);
var inst_17881__$1 = (state_17903[(2)]);
var inst_17882 = (inst_17881__$1 == null);
var inst_17883__$1 = cljs.core.not(inst_17882);
var state_17903__$1 = (function (){var statearr_17922 = state_17903;
(statearr_17922[(8)] = inst_17881__$1);

(statearr_17922[(11)] = inst_17883__$1);

return statearr_17922;
})();
if(inst_17883__$1){
var statearr_17923_17983 = state_17903__$1;
(statearr_17923_17983[(1)] = (15));

} else {
var statearr_17924_17984 = state_17903__$1;
(statearr_17924_17984[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (16))){
var inst_17883 = (state_17903[(11)]);
var state_17903__$1 = state_17903;
var statearr_17925_17985 = state_17903__$1;
(statearr_17925_17985[(2)] = inst_17883);

(statearr_17925_17985[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (10))){
var inst_17875 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17926_17986 = state_17903__$1;
(statearr_17926_17986[(2)] = inst_17875);

(statearr_17926_17986[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (18))){
var inst_17886 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17927_17987 = state_17903__$1;
(statearr_17927_17987[(2)] = inst_17886);

(statearr_17927_17987[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17904 === (8))){
var inst_17872 = cljs.core.async.close_BANG_(to);
var state_17903__$1 = state_17903;
var statearr_17928_17988 = state_17903__$1;
(statearr_17928_17988[(2)] = inst_17872);

(statearr_17928_17988[(1)] = (10));


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
});})(c__15729__auto__,jobs,results,process,async))
;
return ((function (switch__15546__auto__,c__15729__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0 = (function (){
var statearr_17929 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__);

(statearr_17929[(1)] = (1));

return statearr_17929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1 = (function (state_17903){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_17903);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e17930){if((e17930 instanceof Object)){
var ex__15550__auto__ = e17930;
var statearr_17931_17989 = state_17903;
(statearr_17931_17989[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17903);

return cljs.core.cst$kw$recur;
} else {
throw e17930;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__17990 = state_17903;
state_17903 = G__17990;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__ = function(state_17903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1.call(this,state_17903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15547__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto__,jobs,results,process,async))
})();
var state__15731__auto__ = (function (){var statearr_17932 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_17932[(6)] = c__15729__auto__);

return statearr_17932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto__,jobs,results,process,async))
);

return c__15729__auto__;
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
var G__17992 = arguments.length;
switch (G__17992) {
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
var G__17995 = arguments.length;
switch (G__17995) {
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
var G__17998 = arguments.length;
switch (G__17998) {
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
var c__15729__auto___18047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___18047,tc,fc){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___18047,tc,fc){
return (function (state_18024){
var state_val_18025 = (state_18024[(1)]);
if((state_val_18025 === (7))){
var inst_18020 = (state_18024[(2)]);
var state_18024__$1 = state_18024;
var statearr_18026_18048 = state_18024__$1;
(statearr_18026_18048[(2)] = inst_18020);

(statearr_18026_18048[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18025 === (1))){
var state_18024__$1 = state_18024;
var statearr_18027_18049 = state_18024__$1;
(statearr_18027_18049[(2)] = null);

(statearr_18027_18049[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18025 === (4))){
var inst_18001 = (state_18024[(7)]);
var inst_18001__$1 = (state_18024[(2)]);
var inst_18002 = (inst_18001__$1 == null);
var state_18024__$1 = (function (){var statearr_18028 = state_18024;
(statearr_18028[(7)] = inst_18001__$1);

return statearr_18028;
})();
if(cljs.core.truth_(inst_18002)){
var statearr_18029_18050 = state_18024__$1;
(statearr_18029_18050[(1)] = (5));

} else {
var statearr_18030_18051 = state_18024__$1;
(statearr_18030_18051[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18025 === (13))){
var state_18024__$1 = state_18024;
var statearr_18031_18052 = state_18024__$1;
(statearr_18031_18052[(2)] = null);

(statearr_18031_18052[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18025 === (6))){
var inst_18001 = (state_18024[(7)]);
var inst_18007 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18001) : p.call(null,inst_18001));
var state_18024__$1 = state_18024;
if(cljs.core.truth_(inst_18007)){
var statearr_18032_18053 = state_18024__$1;
(statearr_18032_18053[(1)] = (9));

} else {
var statearr_18033_18054 = state_18024__$1;
(statearr_18033_18054[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18025 === (3))){
var inst_18022 = (state_18024[(2)]);
var state_18024__$1 = state_18024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18024__$1,inst_18022);
} else {
if((state_val_18025 === (12))){
var state_18024__$1 = state_18024;
var statearr_18034_18055 = state_18024__$1;
(statearr_18034_18055[(2)] = null);

(statearr_18034_18055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18025 === (2))){
var state_18024__$1 = state_18024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18024__$1,(4),ch);
} else {
if((state_val_18025 === (11))){
var inst_18001 = (state_18024[(7)]);
var inst_18011 = (state_18024[(2)]);
var state_18024__$1 = state_18024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18024__$1,(8),inst_18011,inst_18001);
} else {
if((state_val_18025 === (9))){
var state_18024__$1 = state_18024;
var statearr_18035_18056 = state_18024__$1;
(statearr_18035_18056[(2)] = tc);

(statearr_18035_18056[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18025 === (5))){
var inst_18004 = cljs.core.async.close_BANG_(tc);
var inst_18005 = cljs.core.async.close_BANG_(fc);
var state_18024__$1 = (function (){var statearr_18036 = state_18024;
(statearr_18036[(8)] = inst_18004);

return statearr_18036;
})();
var statearr_18037_18057 = state_18024__$1;
(statearr_18037_18057[(2)] = inst_18005);

(statearr_18037_18057[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18025 === (14))){
var inst_18018 = (state_18024[(2)]);
var state_18024__$1 = state_18024;
var statearr_18038_18058 = state_18024__$1;
(statearr_18038_18058[(2)] = inst_18018);

(statearr_18038_18058[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18025 === (10))){
var state_18024__$1 = state_18024;
var statearr_18039_18059 = state_18024__$1;
(statearr_18039_18059[(2)] = fc);

(statearr_18039_18059[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18025 === (8))){
var inst_18013 = (state_18024[(2)]);
var state_18024__$1 = state_18024;
if(cljs.core.truth_(inst_18013)){
var statearr_18040_18060 = state_18024__$1;
(statearr_18040_18060[(1)] = (12));

} else {
var statearr_18041_18061 = state_18024__$1;
(statearr_18041_18061[(1)] = (13));

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
});})(c__15729__auto___18047,tc,fc))
;
return ((function (switch__15546__auto__,c__15729__auto___18047,tc,fc){
return (function() {
var cljs$core$async$state_machine__15547__auto__ = null;
var cljs$core$async$state_machine__15547__auto____0 = (function (){
var statearr_18042 = [null,null,null,null,null,null,null,null,null];
(statearr_18042[(0)] = cljs$core$async$state_machine__15547__auto__);

(statearr_18042[(1)] = (1));

return statearr_18042;
});
var cljs$core$async$state_machine__15547__auto____1 = (function (state_18024){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_18024);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e18043){if((e18043 instanceof Object)){
var ex__15550__auto__ = e18043;
var statearr_18044_18062 = state_18024;
(statearr_18044_18062[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18024);

return cljs.core.cst$kw$recur;
} else {
throw e18043;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__18063 = state_18024;
state_18024 = G__18063;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$state_machine__15547__auto__ = function(state_18024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15547__auto____1.call(this,state_18024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15547__auto____0;
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15547__auto____1;
return cljs$core$async$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___18047,tc,fc))
})();
var state__15731__auto__ = (function (){var statearr_18045 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_18045[(6)] = c__15729__auto___18047);

return statearr_18045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___18047,tc,fc))
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
var c__15729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto__){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto__){
return (function (state_18084){
var state_val_18085 = (state_18084[(1)]);
if((state_val_18085 === (7))){
var inst_18080 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18086_18104 = state_18084__$1;
(statearr_18086_18104[(2)] = inst_18080);

(statearr_18086_18104[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (1))){
var inst_18064 = init;
var state_18084__$1 = (function (){var statearr_18087 = state_18084;
(statearr_18087[(7)] = inst_18064);

return statearr_18087;
})();
var statearr_18088_18105 = state_18084__$1;
(statearr_18088_18105[(2)] = null);

(statearr_18088_18105[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (4))){
var inst_18067 = (state_18084[(8)]);
var inst_18067__$1 = (state_18084[(2)]);
var inst_18068 = (inst_18067__$1 == null);
var state_18084__$1 = (function (){var statearr_18089 = state_18084;
(statearr_18089[(8)] = inst_18067__$1);

return statearr_18089;
})();
if(cljs.core.truth_(inst_18068)){
var statearr_18090_18106 = state_18084__$1;
(statearr_18090_18106[(1)] = (5));

} else {
var statearr_18091_18107 = state_18084__$1;
(statearr_18091_18107[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (6))){
var inst_18067 = (state_18084[(8)]);
var inst_18071 = (state_18084[(9)]);
var inst_18064 = (state_18084[(7)]);
var inst_18071__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18064,inst_18067) : f.call(null,inst_18064,inst_18067));
var inst_18072 = cljs.core.reduced_QMARK_(inst_18071__$1);
var state_18084__$1 = (function (){var statearr_18092 = state_18084;
(statearr_18092[(9)] = inst_18071__$1);

return statearr_18092;
})();
if(inst_18072){
var statearr_18093_18108 = state_18084__$1;
(statearr_18093_18108[(1)] = (8));

} else {
var statearr_18094_18109 = state_18084__$1;
(statearr_18094_18109[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (3))){
var inst_18082 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18084__$1,inst_18082);
} else {
if((state_val_18085 === (2))){
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18084__$1,(4),ch);
} else {
if((state_val_18085 === (9))){
var inst_18071 = (state_18084[(9)]);
var inst_18064 = inst_18071;
var state_18084__$1 = (function (){var statearr_18095 = state_18084;
(statearr_18095[(7)] = inst_18064);

return statearr_18095;
})();
var statearr_18096_18110 = state_18084__$1;
(statearr_18096_18110[(2)] = null);

(statearr_18096_18110[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (5))){
var inst_18064 = (state_18084[(7)]);
var state_18084__$1 = state_18084;
var statearr_18097_18111 = state_18084__$1;
(statearr_18097_18111[(2)] = inst_18064);

(statearr_18097_18111[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (10))){
var inst_18078 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18098_18112 = state_18084__$1;
(statearr_18098_18112[(2)] = inst_18078);

(statearr_18098_18112[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18085 === (8))){
var inst_18071 = (state_18084[(9)]);
var inst_18074 = cljs.core.deref(inst_18071);
var state_18084__$1 = state_18084;
var statearr_18099_18113 = state_18084__$1;
(statearr_18099_18113[(2)] = inst_18074);

(statearr_18099_18113[(1)] = (10));


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
});})(c__15729__auto__))
;
return ((function (switch__15546__auto__,c__15729__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15547__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15547__auto____0 = (function (){
var statearr_18100 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18100[(0)] = cljs$core$async$reduce_$_state_machine__15547__auto__);

(statearr_18100[(1)] = (1));

return statearr_18100;
});
var cljs$core$async$reduce_$_state_machine__15547__auto____1 = (function (state_18084){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_18084);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e18101){if((e18101 instanceof Object)){
var ex__15550__auto__ = e18101;
var statearr_18102_18114 = state_18084;
(statearr_18102_18114[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18084);

return cljs.core.cst$kw$recur;
} else {
throw e18101;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__18115 = state_18084;
state_18084 = G__18115;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15547__auto__ = function(state_18084){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15547__auto____1.call(this,state_18084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15547__auto____0;
cljs$core$async$reduce_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15547__auto____1;
return cljs$core$async$reduce_$_state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto__))
})();
var state__15731__auto__ = (function (){var statearr_18103 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_18103[(6)] = c__15729__auto__);

return statearr_18103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto__))
);

return c__15729__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto__,f__$1){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto__,f__$1){
return (function (state_18121){
var state_val_18122 = (state_18121[(1)]);
if((state_val_18122 === (1))){
var inst_18116 = cljs.core.async.reduce(f__$1,init,ch);
var state_18121__$1 = state_18121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18121__$1,(2),inst_18116);
} else {
if((state_val_18122 === (2))){
var inst_18118 = (state_18121[(2)]);
var inst_18119 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18118) : f__$1.call(null,inst_18118));
var state_18121__$1 = state_18121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18121__$1,inst_18119);
} else {
return null;
}
}
});})(c__15729__auto__,f__$1))
;
return ((function (switch__15546__auto__,c__15729__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15547__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15547__auto____0 = (function (){
var statearr_18123 = [null,null,null,null,null,null,null];
(statearr_18123[(0)] = cljs$core$async$transduce_$_state_machine__15547__auto__);

(statearr_18123[(1)] = (1));

return statearr_18123;
});
var cljs$core$async$transduce_$_state_machine__15547__auto____1 = (function (state_18121){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_18121);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e18124){if((e18124 instanceof Object)){
var ex__15550__auto__ = e18124;
var statearr_18125_18127 = state_18121;
(statearr_18125_18127[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18121);

return cljs.core.cst$kw$recur;
} else {
throw e18124;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__18128 = state_18121;
state_18121 = G__18128;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15547__auto__ = function(state_18121){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15547__auto____1.call(this,state_18121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15547__auto____0;
cljs$core$async$transduce_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15547__auto____1;
return cljs$core$async$transduce_$_state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto__,f__$1))
})();
var state__15731__auto__ = (function (){var statearr_18126 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_18126[(6)] = c__15729__auto__);

return statearr_18126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto__,f__$1))
);

return c__15729__auto__;
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
var G__18130 = arguments.length;
switch (G__18130) {
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
var c__15729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto__){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto__){
return (function (state_18155){
var state_val_18156 = (state_18155[(1)]);
if((state_val_18156 === (7))){
var inst_18137 = (state_18155[(2)]);
var state_18155__$1 = state_18155;
var statearr_18157_18178 = state_18155__$1;
(statearr_18157_18178[(2)] = inst_18137);

(statearr_18157_18178[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18156 === (1))){
var inst_18131 = cljs.core.seq(coll);
var inst_18132 = inst_18131;
var state_18155__$1 = (function (){var statearr_18158 = state_18155;
(statearr_18158[(7)] = inst_18132);

return statearr_18158;
})();
var statearr_18159_18179 = state_18155__$1;
(statearr_18159_18179[(2)] = null);

(statearr_18159_18179[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18156 === (4))){
var inst_18132 = (state_18155[(7)]);
var inst_18135 = cljs.core.first(inst_18132);
var state_18155__$1 = state_18155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18155__$1,(7),ch,inst_18135);
} else {
if((state_val_18156 === (13))){
var inst_18149 = (state_18155[(2)]);
var state_18155__$1 = state_18155;
var statearr_18160_18180 = state_18155__$1;
(statearr_18160_18180[(2)] = inst_18149);

(statearr_18160_18180[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18156 === (6))){
var inst_18140 = (state_18155[(2)]);
var state_18155__$1 = state_18155;
if(cljs.core.truth_(inst_18140)){
var statearr_18161_18181 = state_18155__$1;
(statearr_18161_18181[(1)] = (8));

} else {
var statearr_18162_18182 = state_18155__$1;
(statearr_18162_18182[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18156 === (3))){
var inst_18153 = (state_18155[(2)]);
var state_18155__$1 = state_18155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18155__$1,inst_18153);
} else {
if((state_val_18156 === (12))){
var state_18155__$1 = state_18155;
var statearr_18163_18183 = state_18155__$1;
(statearr_18163_18183[(2)] = null);

(statearr_18163_18183[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18156 === (2))){
var inst_18132 = (state_18155[(7)]);
var state_18155__$1 = state_18155;
if(cljs.core.truth_(inst_18132)){
var statearr_18164_18184 = state_18155__$1;
(statearr_18164_18184[(1)] = (4));

} else {
var statearr_18165_18185 = state_18155__$1;
(statearr_18165_18185[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18156 === (11))){
var inst_18146 = cljs.core.async.close_BANG_(ch);
var state_18155__$1 = state_18155;
var statearr_18166_18186 = state_18155__$1;
(statearr_18166_18186[(2)] = inst_18146);

(statearr_18166_18186[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18156 === (9))){
var state_18155__$1 = state_18155;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18167_18187 = state_18155__$1;
(statearr_18167_18187[(1)] = (11));

} else {
var statearr_18168_18188 = state_18155__$1;
(statearr_18168_18188[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18156 === (5))){
var inst_18132 = (state_18155[(7)]);
var state_18155__$1 = state_18155;
var statearr_18169_18189 = state_18155__$1;
(statearr_18169_18189[(2)] = inst_18132);

(statearr_18169_18189[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18156 === (10))){
var inst_18151 = (state_18155[(2)]);
var state_18155__$1 = state_18155;
var statearr_18170_18190 = state_18155__$1;
(statearr_18170_18190[(2)] = inst_18151);

(statearr_18170_18190[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18156 === (8))){
var inst_18132 = (state_18155[(7)]);
var inst_18142 = cljs.core.next(inst_18132);
var inst_18132__$1 = inst_18142;
var state_18155__$1 = (function (){var statearr_18171 = state_18155;
(statearr_18171[(7)] = inst_18132__$1);

return statearr_18171;
})();
var statearr_18172_18191 = state_18155__$1;
(statearr_18172_18191[(2)] = null);

(statearr_18172_18191[(1)] = (2));


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
});})(c__15729__auto__))
;
return ((function (switch__15546__auto__,c__15729__auto__){
return (function() {
var cljs$core$async$state_machine__15547__auto__ = null;
var cljs$core$async$state_machine__15547__auto____0 = (function (){
var statearr_18173 = [null,null,null,null,null,null,null,null];
(statearr_18173[(0)] = cljs$core$async$state_machine__15547__auto__);

(statearr_18173[(1)] = (1));

return statearr_18173;
});
var cljs$core$async$state_machine__15547__auto____1 = (function (state_18155){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_18155);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e18174){if((e18174 instanceof Object)){
var ex__15550__auto__ = e18174;
var statearr_18175_18192 = state_18155;
(statearr_18175_18192[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18155);

return cljs.core.cst$kw$recur;
} else {
throw e18174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__18193 = state_18155;
state_18155 = G__18193;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$state_machine__15547__auto__ = function(state_18155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15547__auto____1.call(this,state_18155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15547__auto____0;
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15547__auto____1;
return cljs$core$async$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto__))
})();
var state__15731__auto__ = (function (){var statearr_18176 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_18176[(6)] = c__15729__auto__);

return statearr_18176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto__))
);

return c__15729__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18194 = (function (ch,cs,meta18195){
this.ch = ch;
this.cs = cs;
this.meta18195 = meta18195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18196,meta18195__$1){
var self__ = this;
var _18196__$1 = this;
return (new cljs.core.async.t_cljs$core$async18194(self__.ch,self__.cs,meta18195__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18196){
var self__ = this;
var _18196__$1 = this;
return self__.meta18195;
});})(cs))
;

cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18194.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18194.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18195], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18194";

cljs.core.async.t_cljs$core$async18194.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18194");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18194.
 */
cljs.core.async.__GT_t_cljs$core$async18194 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18194(ch__$1,cs__$1,meta18195){
return (new cljs.core.async.t_cljs$core$async18194(ch__$1,cs__$1,meta18195));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18194(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15729__auto___18416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___18416,cs,m,dchan,dctr,done){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___18416,cs,m,dchan,dctr,done){
return (function (state_18331){
var state_val_18332 = (state_18331[(1)]);
if((state_val_18332 === (7))){
var inst_18327 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
var statearr_18333_18417 = state_18331__$1;
(statearr_18333_18417[(2)] = inst_18327);

(statearr_18333_18417[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (20))){
var inst_18230 = (state_18331[(7)]);
var inst_18242 = cljs.core.first(inst_18230);
var inst_18243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18242,(0),null);
var inst_18244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18242,(1),null);
var state_18331__$1 = (function (){var statearr_18334 = state_18331;
(statearr_18334[(8)] = inst_18243);

return statearr_18334;
})();
if(cljs.core.truth_(inst_18244)){
var statearr_18335_18418 = state_18331__$1;
(statearr_18335_18418[(1)] = (22));

} else {
var statearr_18336_18419 = state_18331__$1;
(statearr_18336_18419[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (27))){
var inst_18272 = (state_18331[(9)]);
var inst_18279 = (state_18331[(10)]);
var inst_18274 = (state_18331[(11)]);
var inst_18199 = (state_18331[(12)]);
var inst_18279__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18272,inst_18274);
var inst_18280 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18279__$1,inst_18199,done);
var state_18331__$1 = (function (){var statearr_18337 = state_18331;
(statearr_18337[(10)] = inst_18279__$1);

return statearr_18337;
})();
if(cljs.core.truth_(inst_18280)){
var statearr_18338_18420 = state_18331__$1;
(statearr_18338_18420[(1)] = (30));

} else {
var statearr_18339_18421 = state_18331__$1;
(statearr_18339_18421[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (1))){
var state_18331__$1 = state_18331;
var statearr_18340_18422 = state_18331__$1;
(statearr_18340_18422[(2)] = null);

(statearr_18340_18422[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (24))){
var inst_18230 = (state_18331[(7)]);
var inst_18249 = (state_18331[(2)]);
var inst_18250 = cljs.core.next(inst_18230);
var inst_18208 = inst_18250;
var inst_18209 = null;
var inst_18210 = (0);
var inst_18211 = (0);
var state_18331__$1 = (function (){var statearr_18341 = state_18331;
(statearr_18341[(13)] = inst_18249);

(statearr_18341[(14)] = inst_18211);

(statearr_18341[(15)] = inst_18208);

(statearr_18341[(16)] = inst_18209);

(statearr_18341[(17)] = inst_18210);

return statearr_18341;
})();
var statearr_18342_18423 = state_18331__$1;
(statearr_18342_18423[(2)] = null);

(statearr_18342_18423[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (39))){
var state_18331__$1 = state_18331;
var statearr_18346_18424 = state_18331__$1;
(statearr_18346_18424[(2)] = null);

(statearr_18346_18424[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (4))){
var inst_18199 = (state_18331[(12)]);
var inst_18199__$1 = (state_18331[(2)]);
var inst_18200 = (inst_18199__$1 == null);
var state_18331__$1 = (function (){var statearr_18347 = state_18331;
(statearr_18347[(12)] = inst_18199__$1);

return statearr_18347;
})();
if(cljs.core.truth_(inst_18200)){
var statearr_18348_18425 = state_18331__$1;
(statearr_18348_18425[(1)] = (5));

} else {
var statearr_18349_18426 = state_18331__$1;
(statearr_18349_18426[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (15))){
var inst_18211 = (state_18331[(14)]);
var inst_18208 = (state_18331[(15)]);
var inst_18209 = (state_18331[(16)]);
var inst_18210 = (state_18331[(17)]);
var inst_18226 = (state_18331[(2)]);
var inst_18227 = (inst_18211 + (1));
var tmp18343 = inst_18208;
var tmp18344 = inst_18209;
var tmp18345 = inst_18210;
var inst_18208__$1 = tmp18343;
var inst_18209__$1 = tmp18344;
var inst_18210__$1 = tmp18345;
var inst_18211__$1 = inst_18227;
var state_18331__$1 = (function (){var statearr_18350 = state_18331;
(statearr_18350[(14)] = inst_18211__$1);

(statearr_18350[(15)] = inst_18208__$1);

(statearr_18350[(16)] = inst_18209__$1);

(statearr_18350[(17)] = inst_18210__$1);

(statearr_18350[(18)] = inst_18226);

return statearr_18350;
})();
var statearr_18351_18427 = state_18331__$1;
(statearr_18351_18427[(2)] = null);

(statearr_18351_18427[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (21))){
var inst_18253 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
var statearr_18355_18428 = state_18331__$1;
(statearr_18355_18428[(2)] = inst_18253);

(statearr_18355_18428[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (31))){
var inst_18279 = (state_18331[(10)]);
var inst_18283 = done(null);
var inst_18284 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18279);
var state_18331__$1 = (function (){var statearr_18356 = state_18331;
(statearr_18356[(19)] = inst_18283);

return statearr_18356;
})();
var statearr_18357_18429 = state_18331__$1;
(statearr_18357_18429[(2)] = inst_18284);

(statearr_18357_18429[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (32))){
var inst_18272 = (state_18331[(9)]);
var inst_18273 = (state_18331[(20)]);
var inst_18274 = (state_18331[(11)]);
var inst_18271 = (state_18331[(21)]);
var inst_18286 = (state_18331[(2)]);
var inst_18287 = (inst_18274 + (1));
var tmp18352 = inst_18272;
var tmp18353 = inst_18273;
var tmp18354 = inst_18271;
var inst_18271__$1 = tmp18354;
var inst_18272__$1 = tmp18352;
var inst_18273__$1 = tmp18353;
var inst_18274__$1 = inst_18287;
var state_18331__$1 = (function (){var statearr_18358 = state_18331;
(statearr_18358[(22)] = inst_18286);

(statearr_18358[(9)] = inst_18272__$1);

(statearr_18358[(20)] = inst_18273__$1);

(statearr_18358[(11)] = inst_18274__$1);

(statearr_18358[(21)] = inst_18271__$1);

return statearr_18358;
})();
var statearr_18359_18430 = state_18331__$1;
(statearr_18359_18430[(2)] = null);

(statearr_18359_18430[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (40))){
var inst_18299 = (state_18331[(23)]);
var inst_18303 = done(null);
var inst_18304 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18299);
var state_18331__$1 = (function (){var statearr_18360 = state_18331;
(statearr_18360[(24)] = inst_18303);

return statearr_18360;
})();
var statearr_18361_18431 = state_18331__$1;
(statearr_18361_18431[(2)] = inst_18304);

(statearr_18361_18431[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (33))){
var inst_18290 = (state_18331[(25)]);
var inst_18292 = cljs.core.chunked_seq_QMARK_(inst_18290);
var state_18331__$1 = state_18331;
if(inst_18292){
var statearr_18362_18432 = state_18331__$1;
(statearr_18362_18432[(1)] = (36));

} else {
var statearr_18363_18433 = state_18331__$1;
(statearr_18363_18433[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (13))){
var inst_18220 = (state_18331[(26)]);
var inst_18223 = cljs.core.async.close_BANG_(inst_18220);
var state_18331__$1 = state_18331;
var statearr_18364_18434 = state_18331__$1;
(statearr_18364_18434[(2)] = inst_18223);

(statearr_18364_18434[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (22))){
var inst_18243 = (state_18331[(8)]);
var inst_18246 = cljs.core.async.close_BANG_(inst_18243);
var state_18331__$1 = state_18331;
var statearr_18365_18435 = state_18331__$1;
(statearr_18365_18435[(2)] = inst_18246);

(statearr_18365_18435[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (36))){
var inst_18290 = (state_18331[(25)]);
var inst_18294 = cljs.core.chunk_first(inst_18290);
var inst_18295 = cljs.core.chunk_rest(inst_18290);
var inst_18296 = cljs.core.count(inst_18294);
var inst_18271 = inst_18295;
var inst_18272 = inst_18294;
var inst_18273 = inst_18296;
var inst_18274 = (0);
var state_18331__$1 = (function (){var statearr_18366 = state_18331;
(statearr_18366[(9)] = inst_18272);

(statearr_18366[(20)] = inst_18273);

(statearr_18366[(11)] = inst_18274);

(statearr_18366[(21)] = inst_18271);

return statearr_18366;
})();
var statearr_18367_18436 = state_18331__$1;
(statearr_18367_18436[(2)] = null);

(statearr_18367_18436[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (41))){
var inst_18290 = (state_18331[(25)]);
var inst_18306 = (state_18331[(2)]);
var inst_18307 = cljs.core.next(inst_18290);
var inst_18271 = inst_18307;
var inst_18272 = null;
var inst_18273 = (0);
var inst_18274 = (0);
var state_18331__$1 = (function (){var statearr_18368 = state_18331;
(statearr_18368[(27)] = inst_18306);

(statearr_18368[(9)] = inst_18272);

(statearr_18368[(20)] = inst_18273);

(statearr_18368[(11)] = inst_18274);

(statearr_18368[(21)] = inst_18271);

return statearr_18368;
})();
var statearr_18369_18437 = state_18331__$1;
(statearr_18369_18437[(2)] = null);

(statearr_18369_18437[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (43))){
var state_18331__$1 = state_18331;
var statearr_18370_18438 = state_18331__$1;
(statearr_18370_18438[(2)] = null);

(statearr_18370_18438[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (29))){
var inst_18315 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
var statearr_18371_18439 = state_18331__$1;
(statearr_18371_18439[(2)] = inst_18315);

(statearr_18371_18439[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (44))){
var inst_18324 = (state_18331[(2)]);
var state_18331__$1 = (function (){var statearr_18372 = state_18331;
(statearr_18372[(28)] = inst_18324);

return statearr_18372;
})();
var statearr_18373_18440 = state_18331__$1;
(statearr_18373_18440[(2)] = null);

(statearr_18373_18440[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (6))){
var inst_18263 = (state_18331[(29)]);
var inst_18262 = cljs.core.deref(cs);
var inst_18263__$1 = cljs.core.keys(inst_18262);
var inst_18264 = cljs.core.count(inst_18263__$1);
var inst_18265 = cljs.core.reset_BANG_(dctr,inst_18264);
var inst_18270 = cljs.core.seq(inst_18263__$1);
var inst_18271 = inst_18270;
var inst_18272 = null;
var inst_18273 = (0);
var inst_18274 = (0);
var state_18331__$1 = (function (){var statearr_18374 = state_18331;
(statearr_18374[(9)] = inst_18272);

(statearr_18374[(29)] = inst_18263__$1);

(statearr_18374[(20)] = inst_18273);

(statearr_18374[(11)] = inst_18274);

(statearr_18374[(30)] = inst_18265);

(statearr_18374[(21)] = inst_18271);

return statearr_18374;
})();
var statearr_18375_18441 = state_18331__$1;
(statearr_18375_18441[(2)] = null);

(statearr_18375_18441[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (28))){
var inst_18290 = (state_18331[(25)]);
var inst_18271 = (state_18331[(21)]);
var inst_18290__$1 = cljs.core.seq(inst_18271);
var state_18331__$1 = (function (){var statearr_18376 = state_18331;
(statearr_18376[(25)] = inst_18290__$1);

return statearr_18376;
})();
if(inst_18290__$1){
var statearr_18377_18442 = state_18331__$1;
(statearr_18377_18442[(1)] = (33));

} else {
var statearr_18378_18443 = state_18331__$1;
(statearr_18378_18443[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (25))){
var inst_18273 = (state_18331[(20)]);
var inst_18274 = (state_18331[(11)]);
var inst_18276 = (inst_18274 < inst_18273);
var inst_18277 = inst_18276;
var state_18331__$1 = state_18331;
if(cljs.core.truth_(inst_18277)){
var statearr_18379_18444 = state_18331__$1;
(statearr_18379_18444[(1)] = (27));

} else {
var statearr_18380_18445 = state_18331__$1;
(statearr_18380_18445[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (34))){
var state_18331__$1 = state_18331;
var statearr_18381_18446 = state_18331__$1;
(statearr_18381_18446[(2)] = null);

(statearr_18381_18446[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (17))){
var state_18331__$1 = state_18331;
var statearr_18382_18447 = state_18331__$1;
(statearr_18382_18447[(2)] = null);

(statearr_18382_18447[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (3))){
var inst_18329 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18331__$1,inst_18329);
} else {
if((state_val_18332 === (12))){
var inst_18258 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
var statearr_18383_18448 = state_18331__$1;
(statearr_18383_18448[(2)] = inst_18258);

(statearr_18383_18448[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (2))){
var state_18331__$1 = state_18331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18331__$1,(4),ch);
} else {
if((state_val_18332 === (23))){
var state_18331__$1 = state_18331;
var statearr_18384_18449 = state_18331__$1;
(statearr_18384_18449[(2)] = null);

(statearr_18384_18449[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (35))){
var inst_18313 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
var statearr_18385_18450 = state_18331__$1;
(statearr_18385_18450[(2)] = inst_18313);

(statearr_18385_18450[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (19))){
var inst_18230 = (state_18331[(7)]);
var inst_18234 = cljs.core.chunk_first(inst_18230);
var inst_18235 = cljs.core.chunk_rest(inst_18230);
var inst_18236 = cljs.core.count(inst_18234);
var inst_18208 = inst_18235;
var inst_18209 = inst_18234;
var inst_18210 = inst_18236;
var inst_18211 = (0);
var state_18331__$1 = (function (){var statearr_18386 = state_18331;
(statearr_18386[(14)] = inst_18211);

(statearr_18386[(15)] = inst_18208);

(statearr_18386[(16)] = inst_18209);

(statearr_18386[(17)] = inst_18210);

return statearr_18386;
})();
var statearr_18387_18451 = state_18331__$1;
(statearr_18387_18451[(2)] = null);

(statearr_18387_18451[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (11))){
var inst_18230 = (state_18331[(7)]);
var inst_18208 = (state_18331[(15)]);
var inst_18230__$1 = cljs.core.seq(inst_18208);
var state_18331__$1 = (function (){var statearr_18388 = state_18331;
(statearr_18388[(7)] = inst_18230__$1);

return statearr_18388;
})();
if(inst_18230__$1){
var statearr_18389_18452 = state_18331__$1;
(statearr_18389_18452[(1)] = (16));

} else {
var statearr_18390_18453 = state_18331__$1;
(statearr_18390_18453[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (9))){
var inst_18260 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
var statearr_18391_18454 = state_18331__$1;
(statearr_18391_18454[(2)] = inst_18260);

(statearr_18391_18454[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (5))){
var inst_18206 = cljs.core.deref(cs);
var inst_18207 = cljs.core.seq(inst_18206);
var inst_18208 = inst_18207;
var inst_18209 = null;
var inst_18210 = (0);
var inst_18211 = (0);
var state_18331__$1 = (function (){var statearr_18392 = state_18331;
(statearr_18392[(14)] = inst_18211);

(statearr_18392[(15)] = inst_18208);

(statearr_18392[(16)] = inst_18209);

(statearr_18392[(17)] = inst_18210);

return statearr_18392;
})();
var statearr_18393_18455 = state_18331__$1;
(statearr_18393_18455[(2)] = null);

(statearr_18393_18455[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (14))){
var state_18331__$1 = state_18331;
var statearr_18394_18456 = state_18331__$1;
(statearr_18394_18456[(2)] = null);

(statearr_18394_18456[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (45))){
var inst_18321 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
var statearr_18395_18457 = state_18331__$1;
(statearr_18395_18457[(2)] = inst_18321);

(statearr_18395_18457[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (26))){
var inst_18263 = (state_18331[(29)]);
var inst_18317 = (state_18331[(2)]);
var inst_18318 = cljs.core.seq(inst_18263);
var state_18331__$1 = (function (){var statearr_18396 = state_18331;
(statearr_18396[(31)] = inst_18317);

return statearr_18396;
})();
if(inst_18318){
var statearr_18397_18458 = state_18331__$1;
(statearr_18397_18458[(1)] = (42));

} else {
var statearr_18398_18459 = state_18331__$1;
(statearr_18398_18459[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (16))){
var inst_18230 = (state_18331[(7)]);
var inst_18232 = cljs.core.chunked_seq_QMARK_(inst_18230);
var state_18331__$1 = state_18331;
if(inst_18232){
var statearr_18399_18460 = state_18331__$1;
(statearr_18399_18460[(1)] = (19));

} else {
var statearr_18400_18461 = state_18331__$1;
(statearr_18400_18461[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (38))){
var inst_18310 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
var statearr_18401_18462 = state_18331__$1;
(statearr_18401_18462[(2)] = inst_18310);

(statearr_18401_18462[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (30))){
var state_18331__$1 = state_18331;
var statearr_18402_18463 = state_18331__$1;
(statearr_18402_18463[(2)] = null);

(statearr_18402_18463[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (10))){
var inst_18211 = (state_18331[(14)]);
var inst_18209 = (state_18331[(16)]);
var inst_18219 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18209,inst_18211);
var inst_18220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18219,(0),null);
var inst_18221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18219,(1),null);
var state_18331__$1 = (function (){var statearr_18403 = state_18331;
(statearr_18403[(26)] = inst_18220);

return statearr_18403;
})();
if(cljs.core.truth_(inst_18221)){
var statearr_18404_18464 = state_18331__$1;
(statearr_18404_18464[(1)] = (13));

} else {
var statearr_18405_18465 = state_18331__$1;
(statearr_18405_18465[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (18))){
var inst_18256 = (state_18331[(2)]);
var state_18331__$1 = state_18331;
var statearr_18406_18466 = state_18331__$1;
(statearr_18406_18466[(2)] = inst_18256);

(statearr_18406_18466[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (42))){
var state_18331__$1 = state_18331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18331__$1,(45),dchan);
} else {
if((state_val_18332 === (37))){
var inst_18290 = (state_18331[(25)]);
var inst_18299 = (state_18331[(23)]);
var inst_18199 = (state_18331[(12)]);
var inst_18299__$1 = cljs.core.first(inst_18290);
var inst_18300 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18299__$1,inst_18199,done);
var state_18331__$1 = (function (){var statearr_18407 = state_18331;
(statearr_18407[(23)] = inst_18299__$1);

return statearr_18407;
})();
if(cljs.core.truth_(inst_18300)){
var statearr_18408_18467 = state_18331__$1;
(statearr_18408_18467[(1)] = (39));

} else {
var statearr_18409_18468 = state_18331__$1;
(statearr_18409_18468[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18332 === (8))){
var inst_18211 = (state_18331[(14)]);
var inst_18210 = (state_18331[(17)]);
var inst_18213 = (inst_18211 < inst_18210);
var inst_18214 = inst_18213;
var state_18331__$1 = state_18331;
if(cljs.core.truth_(inst_18214)){
var statearr_18410_18469 = state_18331__$1;
(statearr_18410_18469[(1)] = (10));

} else {
var statearr_18411_18470 = state_18331__$1;
(statearr_18411_18470[(1)] = (11));

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
});})(c__15729__auto___18416,cs,m,dchan,dctr,done))
;
return ((function (switch__15546__auto__,c__15729__auto___18416,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15547__auto__ = null;
var cljs$core$async$mult_$_state_machine__15547__auto____0 = (function (){
var statearr_18412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18412[(0)] = cljs$core$async$mult_$_state_machine__15547__auto__);

(statearr_18412[(1)] = (1));

return statearr_18412;
});
var cljs$core$async$mult_$_state_machine__15547__auto____1 = (function (state_18331){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_18331);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e18413){if((e18413 instanceof Object)){
var ex__15550__auto__ = e18413;
var statearr_18414_18471 = state_18331;
(statearr_18414_18471[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18331);

return cljs.core.cst$kw$recur;
} else {
throw e18413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__18472 = state_18331;
state_18331 = G__18472;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15547__auto__ = function(state_18331){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15547__auto____1.call(this,state_18331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15547__auto____0;
cljs$core$async$mult_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15547__auto____1;
return cljs$core$async$mult_$_state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___18416,cs,m,dchan,dctr,done))
})();
var state__15731__auto__ = (function (){var statearr_18415 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_18415[(6)] = c__15729__auto___18416);

return statearr_18415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___18416,cs,m,dchan,dctr,done))
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
var G__18474 = arguments.length;
switch (G__18474) {
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
var len__4531__auto___18486 = arguments.length;
var i__4532__auto___18487 = (0);
while(true){
if((i__4532__auto___18487 < len__4531__auto___18486)){
args__4534__auto__.push((arguments[i__4532__auto___18487]));

var G__18488 = (i__4532__auto___18487 + (1));
i__4532__auto___18487 = G__18488;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18480){
var map__18481 = p__18480;
var map__18481__$1 = ((((!((map__18481 == null)))?(((((map__18481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18481):map__18481);
var opts = map__18481__$1;
var statearr_18483_18489 = state;
(statearr_18483_18489[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18481,map__18481__$1,opts){
return (function (val){
var statearr_18484_18490 = state;
(statearr_18484_18490[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18481,map__18481__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18485_18491 = state;
(statearr_18485_18491[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18476){
var G__18477 = cljs.core.first(seq18476);
var seq18476__$1 = cljs.core.next(seq18476);
var G__18478 = cljs.core.first(seq18476__$1);
var seq18476__$2 = cljs.core.next(seq18476__$1);
var G__18479 = cljs.core.first(seq18476__$2);
var seq18476__$3 = cljs.core.next(seq18476__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18477,G__18478,G__18479,seq18476__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18492 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18493){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18493 = meta18493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18494,meta18493__$1){
var self__ = this;
var _18494__$1 = this;
return (new cljs.core.async.t_cljs$core$async18492(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18493__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18494){
var self__ = this;
var _18494__$1 = this;
return self__.meta18493;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18492.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18492.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18492.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18492.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18492.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18492.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18492.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18492.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18493], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18492";

cljs.core.async.t_cljs$core$async18492.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18492");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18492.
 */
cljs.core.async.__GT_t_cljs$core$async18492 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18492(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18493){
return (new cljs.core.async.t_cljs$core$async18492(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18493));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18492(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15729__auto___18656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___18656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___18656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18596){
var state_val_18597 = (state_18596[(1)]);
if((state_val_18597 === (7))){
var inst_18511 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18598_18657 = state_18596__$1;
(statearr_18598_18657[(2)] = inst_18511);

(statearr_18598_18657[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (20))){
var inst_18523 = (state_18596[(7)]);
var state_18596__$1 = state_18596;
var statearr_18599_18658 = state_18596__$1;
(statearr_18599_18658[(2)] = inst_18523);

(statearr_18599_18658[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (27))){
var state_18596__$1 = state_18596;
var statearr_18600_18659 = state_18596__$1;
(statearr_18600_18659[(2)] = null);

(statearr_18600_18659[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (1))){
var inst_18498 = (state_18596[(8)]);
var inst_18498__$1 = calc_state();
var inst_18500 = (inst_18498__$1 == null);
var inst_18501 = cljs.core.not(inst_18500);
var state_18596__$1 = (function (){var statearr_18601 = state_18596;
(statearr_18601[(8)] = inst_18498__$1);

return statearr_18601;
})();
if(inst_18501){
var statearr_18602_18660 = state_18596__$1;
(statearr_18602_18660[(1)] = (2));

} else {
var statearr_18603_18661 = state_18596__$1;
(statearr_18603_18661[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (24))){
var inst_18547 = (state_18596[(9)]);
var inst_18556 = (state_18596[(10)]);
var inst_18570 = (state_18596[(11)]);
var inst_18570__$1 = (inst_18547.cljs$core$IFn$_invoke$arity$1 ? inst_18547.cljs$core$IFn$_invoke$arity$1(inst_18556) : inst_18547.call(null,inst_18556));
var state_18596__$1 = (function (){var statearr_18604 = state_18596;
(statearr_18604[(11)] = inst_18570__$1);

return statearr_18604;
})();
if(cljs.core.truth_(inst_18570__$1)){
var statearr_18605_18662 = state_18596__$1;
(statearr_18605_18662[(1)] = (29));

} else {
var statearr_18606_18663 = state_18596__$1;
(statearr_18606_18663[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (4))){
var inst_18514 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
if(cljs.core.truth_(inst_18514)){
var statearr_18607_18664 = state_18596__$1;
(statearr_18607_18664[(1)] = (8));

} else {
var statearr_18608_18665 = state_18596__$1;
(statearr_18608_18665[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (15))){
var inst_18541 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
if(cljs.core.truth_(inst_18541)){
var statearr_18609_18666 = state_18596__$1;
(statearr_18609_18666[(1)] = (19));

} else {
var statearr_18610_18667 = state_18596__$1;
(statearr_18610_18667[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (21))){
var inst_18546 = (state_18596[(12)]);
var inst_18546__$1 = (state_18596[(2)]);
var inst_18547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18546__$1,cljs.core.cst$kw$solos);
var inst_18548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18546__$1,cljs.core.cst$kw$mutes);
var inst_18549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18546__$1,cljs.core.cst$kw$reads);
var state_18596__$1 = (function (){var statearr_18611 = state_18596;
(statearr_18611[(9)] = inst_18547);

(statearr_18611[(12)] = inst_18546__$1);

(statearr_18611[(13)] = inst_18548);

return statearr_18611;
})();
return cljs.core.async.ioc_alts_BANG_(state_18596__$1,(22),inst_18549);
} else {
if((state_val_18597 === (31))){
var inst_18578 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
if(cljs.core.truth_(inst_18578)){
var statearr_18612_18668 = state_18596__$1;
(statearr_18612_18668[(1)] = (32));

} else {
var statearr_18613_18669 = state_18596__$1;
(statearr_18613_18669[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (32))){
var inst_18555 = (state_18596[(14)]);
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18596__$1,(35),out,inst_18555);
} else {
if((state_val_18597 === (33))){
var inst_18546 = (state_18596[(12)]);
var inst_18523 = inst_18546;
var state_18596__$1 = (function (){var statearr_18614 = state_18596;
(statearr_18614[(7)] = inst_18523);

return statearr_18614;
})();
var statearr_18615_18670 = state_18596__$1;
(statearr_18615_18670[(2)] = null);

(statearr_18615_18670[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (13))){
var inst_18523 = (state_18596[(7)]);
var inst_18530 = inst_18523.cljs$lang$protocol_mask$partition0$;
var inst_18531 = (inst_18530 & (64));
var inst_18532 = inst_18523.cljs$core$ISeq$;
var inst_18533 = (cljs.core.PROTOCOL_SENTINEL === inst_18532);
var inst_18534 = ((inst_18531) || (inst_18533));
var state_18596__$1 = state_18596;
if(cljs.core.truth_(inst_18534)){
var statearr_18616_18671 = state_18596__$1;
(statearr_18616_18671[(1)] = (16));

} else {
var statearr_18617_18672 = state_18596__$1;
(statearr_18617_18672[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (22))){
var inst_18556 = (state_18596[(10)]);
var inst_18555 = (state_18596[(14)]);
var inst_18554 = (state_18596[(2)]);
var inst_18555__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18554,(0),null);
var inst_18556__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18554,(1),null);
var inst_18557 = (inst_18555__$1 == null);
var inst_18558 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18556__$1,change);
var inst_18559 = ((inst_18557) || (inst_18558));
var state_18596__$1 = (function (){var statearr_18618 = state_18596;
(statearr_18618[(10)] = inst_18556__$1);

(statearr_18618[(14)] = inst_18555__$1);

return statearr_18618;
})();
if(cljs.core.truth_(inst_18559)){
var statearr_18619_18673 = state_18596__$1;
(statearr_18619_18673[(1)] = (23));

} else {
var statearr_18620_18674 = state_18596__$1;
(statearr_18620_18674[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (36))){
var inst_18546 = (state_18596[(12)]);
var inst_18523 = inst_18546;
var state_18596__$1 = (function (){var statearr_18621 = state_18596;
(statearr_18621[(7)] = inst_18523);

return statearr_18621;
})();
var statearr_18622_18675 = state_18596__$1;
(statearr_18622_18675[(2)] = null);

(statearr_18622_18675[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (29))){
var inst_18570 = (state_18596[(11)]);
var state_18596__$1 = state_18596;
var statearr_18623_18676 = state_18596__$1;
(statearr_18623_18676[(2)] = inst_18570);

(statearr_18623_18676[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (6))){
var state_18596__$1 = state_18596;
var statearr_18624_18677 = state_18596__$1;
(statearr_18624_18677[(2)] = false);

(statearr_18624_18677[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (28))){
var inst_18566 = (state_18596[(2)]);
var inst_18567 = calc_state();
var inst_18523 = inst_18567;
var state_18596__$1 = (function (){var statearr_18625 = state_18596;
(statearr_18625[(15)] = inst_18566);

(statearr_18625[(7)] = inst_18523);

return statearr_18625;
})();
var statearr_18626_18678 = state_18596__$1;
(statearr_18626_18678[(2)] = null);

(statearr_18626_18678[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (25))){
var inst_18592 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18627_18679 = state_18596__$1;
(statearr_18627_18679[(2)] = inst_18592);

(statearr_18627_18679[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (34))){
var inst_18590 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18628_18680 = state_18596__$1;
(statearr_18628_18680[(2)] = inst_18590);

(statearr_18628_18680[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (17))){
var state_18596__$1 = state_18596;
var statearr_18629_18681 = state_18596__$1;
(statearr_18629_18681[(2)] = false);

(statearr_18629_18681[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (3))){
var state_18596__$1 = state_18596;
var statearr_18630_18682 = state_18596__$1;
(statearr_18630_18682[(2)] = false);

(statearr_18630_18682[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (12))){
var inst_18594 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18596__$1,inst_18594);
} else {
if((state_val_18597 === (2))){
var inst_18498 = (state_18596[(8)]);
var inst_18503 = inst_18498.cljs$lang$protocol_mask$partition0$;
var inst_18504 = (inst_18503 & (64));
var inst_18505 = inst_18498.cljs$core$ISeq$;
var inst_18506 = (cljs.core.PROTOCOL_SENTINEL === inst_18505);
var inst_18507 = ((inst_18504) || (inst_18506));
var state_18596__$1 = state_18596;
if(cljs.core.truth_(inst_18507)){
var statearr_18631_18683 = state_18596__$1;
(statearr_18631_18683[(1)] = (5));

} else {
var statearr_18632_18684 = state_18596__$1;
(statearr_18632_18684[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (23))){
var inst_18555 = (state_18596[(14)]);
var inst_18561 = (inst_18555 == null);
var state_18596__$1 = state_18596;
if(cljs.core.truth_(inst_18561)){
var statearr_18633_18685 = state_18596__$1;
(statearr_18633_18685[(1)] = (26));

} else {
var statearr_18634_18686 = state_18596__$1;
(statearr_18634_18686[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (35))){
var inst_18581 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
if(cljs.core.truth_(inst_18581)){
var statearr_18635_18687 = state_18596__$1;
(statearr_18635_18687[(1)] = (36));

} else {
var statearr_18636_18688 = state_18596__$1;
(statearr_18636_18688[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (19))){
var inst_18523 = (state_18596[(7)]);
var inst_18543 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18523);
var state_18596__$1 = state_18596;
var statearr_18637_18689 = state_18596__$1;
(statearr_18637_18689[(2)] = inst_18543);

(statearr_18637_18689[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (11))){
var inst_18523 = (state_18596[(7)]);
var inst_18527 = (inst_18523 == null);
var inst_18528 = cljs.core.not(inst_18527);
var state_18596__$1 = state_18596;
if(inst_18528){
var statearr_18638_18690 = state_18596__$1;
(statearr_18638_18690[(1)] = (13));

} else {
var statearr_18639_18691 = state_18596__$1;
(statearr_18639_18691[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (9))){
var inst_18498 = (state_18596[(8)]);
var state_18596__$1 = state_18596;
var statearr_18640_18692 = state_18596__$1;
(statearr_18640_18692[(2)] = inst_18498);

(statearr_18640_18692[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (5))){
var state_18596__$1 = state_18596;
var statearr_18641_18693 = state_18596__$1;
(statearr_18641_18693[(2)] = true);

(statearr_18641_18693[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (14))){
var state_18596__$1 = state_18596;
var statearr_18642_18694 = state_18596__$1;
(statearr_18642_18694[(2)] = false);

(statearr_18642_18694[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (26))){
var inst_18556 = (state_18596[(10)]);
var inst_18563 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18556);
var state_18596__$1 = state_18596;
var statearr_18643_18695 = state_18596__$1;
(statearr_18643_18695[(2)] = inst_18563);

(statearr_18643_18695[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (16))){
var state_18596__$1 = state_18596;
var statearr_18644_18696 = state_18596__$1;
(statearr_18644_18696[(2)] = true);

(statearr_18644_18696[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (38))){
var inst_18586 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18645_18697 = state_18596__$1;
(statearr_18645_18697[(2)] = inst_18586);

(statearr_18645_18697[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (30))){
var inst_18547 = (state_18596[(9)]);
var inst_18556 = (state_18596[(10)]);
var inst_18548 = (state_18596[(13)]);
var inst_18573 = cljs.core.empty_QMARK_(inst_18547);
var inst_18574 = (inst_18548.cljs$core$IFn$_invoke$arity$1 ? inst_18548.cljs$core$IFn$_invoke$arity$1(inst_18556) : inst_18548.call(null,inst_18556));
var inst_18575 = cljs.core.not(inst_18574);
var inst_18576 = ((inst_18573) && (inst_18575));
var state_18596__$1 = state_18596;
var statearr_18646_18698 = state_18596__$1;
(statearr_18646_18698[(2)] = inst_18576);

(statearr_18646_18698[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (10))){
var inst_18498 = (state_18596[(8)]);
var inst_18519 = (state_18596[(2)]);
var inst_18520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18519,cljs.core.cst$kw$solos);
var inst_18521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18519,cljs.core.cst$kw$mutes);
var inst_18522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18519,cljs.core.cst$kw$reads);
var inst_18523 = inst_18498;
var state_18596__$1 = (function (){var statearr_18647 = state_18596;
(statearr_18647[(16)] = inst_18521);

(statearr_18647[(17)] = inst_18520);

(statearr_18647[(7)] = inst_18523);

(statearr_18647[(18)] = inst_18522);

return statearr_18647;
})();
var statearr_18648_18699 = state_18596__$1;
(statearr_18648_18699[(2)] = null);

(statearr_18648_18699[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (18))){
var inst_18538 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18649_18700 = state_18596__$1;
(statearr_18649_18700[(2)] = inst_18538);

(statearr_18649_18700[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (37))){
var state_18596__$1 = state_18596;
var statearr_18650_18701 = state_18596__$1;
(statearr_18650_18701[(2)] = null);

(statearr_18650_18701[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18597 === (8))){
var inst_18498 = (state_18596[(8)]);
var inst_18516 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18498);
var state_18596__$1 = state_18596;
var statearr_18651_18702 = state_18596__$1;
(statearr_18651_18702[(2)] = inst_18516);

(statearr_18651_18702[(1)] = (10));


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
});})(c__15729__auto___18656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15546__auto__,c__15729__auto___18656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15547__auto__ = null;
var cljs$core$async$mix_$_state_machine__15547__auto____0 = (function (){
var statearr_18652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18652[(0)] = cljs$core$async$mix_$_state_machine__15547__auto__);

(statearr_18652[(1)] = (1));

return statearr_18652;
});
var cljs$core$async$mix_$_state_machine__15547__auto____1 = (function (state_18596){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_18596);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e18653){if((e18653 instanceof Object)){
var ex__15550__auto__ = e18653;
var statearr_18654_18703 = state_18596;
(statearr_18654_18703[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18596);

return cljs.core.cst$kw$recur;
} else {
throw e18653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__18704 = state_18596;
state_18596 = G__18704;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15547__auto__ = function(state_18596){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15547__auto____1.call(this,state_18596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15547__auto____0;
cljs$core$async$mix_$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15547__auto____1;
return cljs$core$async$mix_$_state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___18656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15731__auto__ = (function (){var statearr_18655 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_18655[(6)] = c__15729__auto___18656);

return statearr_18655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___18656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__18706 = arguments.length;
switch (G__18706) {
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
var G__18710 = arguments.length;
switch (G__18710) {
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
return (function (p1__18708_SHARP_){
if(cljs.core.truth_((p1__18708_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18708_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18708_SHARP_.call(null,topic)))){
return p1__18708_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18708_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18711 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18712){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18712 = meta18712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18713,meta18712__$1){
var self__ = this;
var _18713__$1 = this;
return (new cljs.core.async.t_cljs$core$async18711(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18712__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18713){
var self__ = this;
var _18713__$1 = this;
return self__.meta18712;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18711.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18712], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18711";

cljs.core.async.t_cljs$core$async18711.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18711");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18711.
 */
cljs.core.async.__GT_t_cljs$core$async18711 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18711(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18712){
return (new cljs.core.async.t_cljs$core$async18711(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18712));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18711(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15729__auto___18831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___18831,mults,ensure_mult,p){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___18831,mults,ensure_mult,p){
return (function (state_18785){
var state_val_18786 = (state_18785[(1)]);
if((state_val_18786 === (7))){
var inst_18781 = (state_18785[(2)]);
var state_18785__$1 = state_18785;
var statearr_18787_18832 = state_18785__$1;
(statearr_18787_18832[(2)] = inst_18781);

(statearr_18787_18832[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (20))){
var state_18785__$1 = state_18785;
var statearr_18788_18833 = state_18785__$1;
(statearr_18788_18833[(2)] = null);

(statearr_18788_18833[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (1))){
var state_18785__$1 = state_18785;
var statearr_18789_18834 = state_18785__$1;
(statearr_18789_18834[(2)] = null);

(statearr_18789_18834[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (24))){
var inst_18764 = (state_18785[(7)]);
var inst_18773 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18764);
var state_18785__$1 = state_18785;
var statearr_18790_18835 = state_18785__$1;
(statearr_18790_18835[(2)] = inst_18773);

(statearr_18790_18835[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (4))){
var inst_18716 = (state_18785[(8)]);
var inst_18716__$1 = (state_18785[(2)]);
var inst_18717 = (inst_18716__$1 == null);
var state_18785__$1 = (function (){var statearr_18791 = state_18785;
(statearr_18791[(8)] = inst_18716__$1);

return statearr_18791;
})();
if(cljs.core.truth_(inst_18717)){
var statearr_18792_18836 = state_18785__$1;
(statearr_18792_18836[(1)] = (5));

} else {
var statearr_18793_18837 = state_18785__$1;
(statearr_18793_18837[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (15))){
var inst_18758 = (state_18785[(2)]);
var state_18785__$1 = state_18785;
var statearr_18794_18838 = state_18785__$1;
(statearr_18794_18838[(2)] = inst_18758);

(statearr_18794_18838[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (21))){
var inst_18778 = (state_18785[(2)]);
var state_18785__$1 = (function (){var statearr_18795 = state_18785;
(statearr_18795[(9)] = inst_18778);

return statearr_18795;
})();
var statearr_18796_18839 = state_18785__$1;
(statearr_18796_18839[(2)] = null);

(statearr_18796_18839[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (13))){
var inst_18740 = (state_18785[(10)]);
var inst_18742 = cljs.core.chunked_seq_QMARK_(inst_18740);
var state_18785__$1 = state_18785;
if(inst_18742){
var statearr_18797_18840 = state_18785__$1;
(statearr_18797_18840[(1)] = (16));

} else {
var statearr_18798_18841 = state_18785__$1;
(statearr_18798_18841[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (22))){
var inst_18770 = (state_18785[(2)]);
var state_18785__$1 = state_18785;
if(cljs.core.truth_(inst_18770)){
var statearr_18799_18842 = state_18785__$1;
(statearr_18799_18842[(1)] = (23));

} else {
var statearr_18800_18843 = state_18785__$1;
(statearr_18800_18843[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (6))){
var inst_18716 = (state_18785[(8)]);
var inst_18764 = (state_18785[(7)]);
var inst_18766 = (state_18785[(11)]);
var inst_18764__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18716) : topic_fn.call(null,inst_18716));
var inst_18765 = cljs.core.deref(mults);
var inst_18766__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18765,inst_18764__$1);
var state_18785__$1 = (function (){var statearr_18801 = state_18785;
(statearr_18801[(7)] = inst_18764__$1);

(statearr_18801[(11)] = inst_18766__$1);

return statearr_18801;
})();
if(cljs.core.truth_(inst_18766__$1)){
var statearr_18802_18844 = state_18785__$1;
(statearr_18802_18844[(1)] = (19));

} else {
var statearr_18803_18845 = state_18785__$1;
(statearr_18803_18845[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (25))){
var inst_18775 = (state_18785[(2)]);
var state_18785__$1 = state_18785;
var statearr_18804_18846 = state_18785__$1;
(statearr_18804_18846[(2)] = inst_18775);

(statearr_18804_18846[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (17))){
var inst_18740 = (state_18785[(10)]);
var inst_18749 = cljs.core.first(inst_18740);
var inst_18750 = cljs.core.async.muxch_STAR_(inst_18749);
var inst_18751 = cljs.core.async.close_BANG_(inst_18750);
var inst_18752 = cljs.core.next(inst_18740);
var inst_18726 = inst_18752;
var inst_18727 = null;
var inst_18728 = (0);
var inst_18729 = (0);
var state_18785__$1 = (function (){var statearr_18805 = state_18785;
(statearr_18805[(12)] = inst_18751);

(statearr_18805[(13)] = inst_18728);

(statearr_18805[(14)] = inst_18729);

(statearr_18805[(15)] = inst_18726);

(statearr_18805[(16)] = inst_18727);

return statearr_18805;
})();
var statearr_18806_18847 = state_18785__$1;
(statearr_18806_18847[(2)] = null);

(statearr_18806_18847[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (3))){
var inst_18783 = (state_18785[(2)]);
var state_18785__$1 = state_18785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18785__$1,inst_18783);
} else {
if((state_val_18786 === (12))){
var inst_18760 = (state_18785[(2)]);
var state_18785__$1 = state_18785;
var statearr_18807_18848 = state_18785__$1;
(statearr_18807_18848[(2)] = inst_18760);

(statearr_18807_18848[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (2))){
var state_18785__$1 = state_18785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18785__$1,(4),ch);
} else {
if((state_val_18786 === (23))){
var state_18785__$1 = state_18785;
var statearr_18808_18849 = state_18785__$1;
(statearr_18808_18849[(2)] = null);

(statearr_18808_18849[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (19))){
var inst_18716 = (state_18785[(8)]);
var inst_18766 = (state_18785[(11)]);
var inst_18768 = cljs.core.async.muxch_STAR_(inst_18766);
var state_18785__$1 = state_18785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18785__$1,(22),inst_18768,inst_18716);
} else {
if((state_val_18786 === (11))){
var inst_18740 = (state_18785[(10)]);
var inst_18726 = (state_18785[(15)]);
var inst_18740__$1 = cljs.core.seq(inst_18726);
var state_18785__$1 = (function (){var statearr_18809 = state_18785;
(statearr_18809[(10)] = inst_18740__$1);

return statearr_18809;
})();
if(inst_18740__$1){
var statearr_18810_18850 = state_18785__$1;
(statearr_18810_18850[(1)] = (13));

} else {
var statearr_18811_18851 = state_18785__$1;
(statearr_18811_18851[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (9))){
var inst_18762 = (state_18785[(2)]);
var state_18785__$1 = state_18785;
var statearr_18812_18852 = state_18785__$1;
(statearr_18812_18852[(2)] = inst_18762);

(statearr_18812_18852[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (5))){
var inst_18723 = cljs.core.deref(mults);
var inst_18724 = cljs.core.vals(inst_18723);
var inst_18725 = cljs.core.seq(inst_18724);
var inst_18726 = inst_18725;
var inst_18727 = null;
var inst_18728 = (0);
var inst_18729 = (0);
var state_18785__$1 = (function (){var statearr_18813 = state_18785;
(statearr_18813[(13)] = inst_18728);

(statearr_18813[(14)] = inst_18729);

(statearr_18813[(15)] = inst_18726);

(statearr_18813[(16)] = inst_18727);

return statearr_18813;
})();
var statearr_18814_18853 = state_18785__$1;
(statearr_18814_18853[(2)] = null);

(statearr_18814_18853[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (14))){
var state_18785__$1 = state_18785;
var statearr_18818_18854 = state_18785__$1;
(statearr_18818_18854[(2)] = null);

(statearr_18818_18854[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (16))){
var inst_18740 = (state_18785[(10)]);
var inst_18744 = cljs.core.chunk_first(inst_18740);
var inst_18745 = cljs.core.chunk_rest(inst_18740);
var inst_18746 = cljs.core.count(inst_18744);
var inst_18726 = inst_18745;
var inst_18727 = inst_18744;
var inst_18728 = inst_18746;
var inst_18729 = (0);
var state_18785__$1 = (function (){var statearr_18819 = state_18785;
(statearr_18819[(13)] = inst_18728);

(statearr_18819[(14)] = inst_18729);

(statearr_18819[(15)] = inst_18726);

(statearr_18819[(16)] = inst_18727);

return statearr_18819;
})();
var statearr_18820_18855 = state_18785__$1;
(statearr_18820_18855[(2)] = null);

(statearr_18820_18855[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (10))){
var inst_18728 = (state_18785[(13)]);
var inst_18729 = (state_18785[(14)]);
var inst_18726 = (state_18785[(15)]);
var inst_18727 = (state_18785[(16)]);
var inst_18734 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18727,inst_18729);
var inst_18735 = cljs.core.async.muxch_STAR_(inst_18734);
var inst_18736 = cljs.core.async.close_BANG_(inst_18735);
var inst_18737 = (inst_18729 + (1));
var tmp18815 = inst_18728;
var tmp18816 = inst_18726;
var tmp18817 = inst_18727;
var inst_18726__$1 = tmp18816;
var inst_18727__$1 = tmp18817;
var inst_18728__$1 = tmp18815;
var inst_18729__$1 = inst_18737;
var state_18785__$1 = (function (){var statearr_18821 = state_18785;
(statearr_18821[(13)] = inst_18728__$1);

(statearr_18821[(14)] = inst_18729__$1);

(statearr_18821[(15)] = inst_18726__$1);

(statearr_18821[(16)] = inst_18727__$1);

(statearr_18821[(17)] = inst_18736);

return statearr_18821;
})();
var statearr_18822_18856 = state_18785__$1;
(statearr_18822_18856[(2)] = null);

(statearr_18822_18856[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (18))){
var inst_18755 = (state_18785[(2)]);
var state_18785__$1 = state_18785;
var statearr_18823_18857 = state_18785__$1;
(statearr_18823_18857[(2)] = inst_18755);

(statearr_18823_18857[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18786 === (8))){
var inst_18728 = (state_18785[(13)]);
var inst_18729 = (state_18785[(14)]);
var inst_18731 = (inst_18729 < inst_18728);
var inst_18732 = inst_18731;
var state_18785__$1 = state_18785;
if(cljs.core.truth_(inst_18732)){
var statearr_18824_18858 = state_18785__$1;
(statearr_18824_18858[(1)] = (10));

} else {
var statearr_18825_18859 = state_18785__$1;
(statearr_18825_18859[(1)] = (11));

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
});})(c__15729__auto___18831,mults,ensure_mult,p))
;
return ((function (switch__15546__auto__,c__15729__auto___18831,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15547__auto__ = null;
var cljs$core$async$state_machine__15547__auto____0 = (function (){
var statearr_18826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18826[(0)] = cljs$core$async$state_machine__15547__auto__);

(statearr_18826[(1)] = (1));

return statearr_18826;
});
var cljs$core$async$state_machine__15547__auto____1 = (function (state_18785){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_18785);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e18827){if((e18827 instanceof Object)){
var ex__15550__auto__ = e18827;
var statearr_18828_18860 = state_18785;
(statearr_18828_18860[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18785);

return cljs.core.cst$kw$recur;
} else {
throw e18827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__18861 = state_18785;
state_18785 = G__18861;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$state_machine__15547__auto__ = function(state_18785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15547__auto____1.call(this,state_18785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15547__auto____0;
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15547__auto____1;
return cljs$core$async$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___18831,mults,ensure_mult,p))
})();
var state__15731__auto__ = (function (){var statearr_18829 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_18829[(6)] = c__15729__auto___18831);

return statearr_18829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___18831,mults,ensure_mult,p))
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
var G__18863 = arguments.length;
switch (G__18863) {
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
var G__18866 = arguments.length;
switch (G__18866) {
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
var G__18869 = arguments.length;
switch (G__18869) {
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
var c__15729__auto___18936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___18936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___18936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18908){
var state_val_18909 = (state_18908[(1)]);
if((state_val_18909 === (7))){
var state_18908__$1 = state_18908;
var statearr_18910_18937 = state_18908__$1;
(statearr_18910_18937[(2)] = null);

(statearr_18910_18937[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (1))){
var state_18908__$1 = state_18908;
var statearr_18911_18938 = state_18908__$1;
(statearr_18911_18938[(2)] = null);

(statearr_18911_18938[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (4))){
var inst_18872 = (state_18908[(7)]);
var inst_18874 = (inst_18872 < cnt);
var state_18908__$1 = state_18908;
if(cljs.core.truth_(inst_18874)){
var statearr_18912_18939 = state_18908__$1;
(statearr_18912_18939[(1)] = (6));

} else {
var statearr_18913_18940 = state_18908__$1;
(statearr_18913_18940[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (15))){
var inst_18904 = (state_18908[(2)]);
var state_18908__$1 = state_18908;
var statearr_18914_18941 = state_18908__$1;
(statearr_18914_18941[(2)] = inst_18904);

(statearr_18914_18941[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (13))){
var inst_18897 = cljs.core.async.close_BANG_(out);
var state_18908__$1 = state_18908;
var statearr_18915_18942 = state_18908__$1;
(statearr_18915_18942[(2)] = inst_18897);

(statearr_18915_18942[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (6))){
var state_18908__$1 = state_18908;
var statearr_18916_18943 = state_18908__$1;
(statearr_18916_18943[(2)] = null);

(statearr_18916_18943[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (3))){
var inst_18906 = (state_18908[(2)]);
var state_18908__$1 = state_18908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18908__$1,inst_18906);
} else {
if((state_val_18909 === (12))){
var inst_18894 = (state_18908[(8)]);
var inst_18894__$1 = (state_18908[(2)]);
var inst_18895 = cljs.core.some(cljs.core.nil_QMARK_,inst_18894__$1);
var state_18908__$1 = (function (){var statearr_18917 = state_18908;
(statearr_18917[(8)] = inst_18894__$1);

return statearr_18917;
})();
if(cljs.core.truth_(inst_18895)){
var statearr_18918_18944 = state_18908__$1;
(statearr_18918_18944[(1)] = (13));

} else {
var statearr_18919_18945 = state_18908__$1;
(statearr_18919_18945[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (2))){
var inst_18871 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18872 = (0);
var state_18908__$1 = (function (){var statearr_18920 = state_18908;
(statearr_18920[(7)] = inst_18872);

(statearr_18920[(9)] = inst_18871);

return statearr_18920;
})();
var statearr_18921_18946 = state_18908__$1;
(statearr_18921_18946[(2)] = null);

(statearr_18921_18946[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (11))){
var inst_18872 = (state_18908[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18908,(10),Object,null,(9));
var inst_18881 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18872) : chs__$1.call(null,inst_18872));
var inst_18882 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18872) : done.call(null,inst_18872));
var inst_18883 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18881,inst_18882);
var state_18908__$1 = state_18908;
var statearr_18922_18947 = state_18908__$1;
(statearr_18922_18947[(2)] = inst_18883);


cljs.core.async.impl.ioc_helpers.process_exception(state_18908__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (9))){
var inst_18872 = (state_18908[(7)]);
var inst_18885 = (state_18908[(2)]);
var inst_18886 = (inst_18872 + (1));
var inst_18872__$1 = inst_18886;
var state_18908__$1 = (function (){var statearr_18923 = state_18908;
(statearr_18923[(10)] = inst_18885);

(statearr_18923[(7)] = inst_18872__$1);

return statearr_18923;
})();
var statearr_18924_18948 = state_18908__$1;
(statearr_18924_18948[(2)] = null);

(statearr_18924_18948[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (5))){
var inst_18892 = (state_18908[(2)]);
var state_18908__$1 = (function (){var statearr_18925 = state_18908;
(statearr_18925[(11)] = inst_18892);

return statearr_18925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18908__$1,(12),dchan);
} else {
if((state_val_18909 === (14))){
var inst_18894 = (state_18908[(8)]);
var inst_18899 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18894);
var state_18908__$1 = state_18908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18908__$1,(16),out,inst_18899);
} else {
if((state_val_18909 === (16))){
var inst_18901 = (state_18908[(2)]);
var state_18908__$1 = (function (){var statearr_18926 = state_18908;
(statearr_18926[(12)] = inst_18901);

return statearr_18926;
})();
var statearr_18927_18949 = state_18908__$1;
(statearr_18927_18949[(2)] = null);

(statearr_18927_18949[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (10))){
var inst_18876 = (state_18908[(2)]);
var inst_18877 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18908__$1 = (function (){var statearr_18928 = state_18908;
(statearr_18928[(13)] = inst_18876);

return statearr_18928;
})();
var statearr_18929_18950 = state_18908__$1;
(statearr_18929_18950[(2)] = inst_18877);


cljs.core.async.impl.ioc_helpers.process_exception(state_18908__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18909 === (8))){
var inst_18890 = (state_18908[(2)]);
var state_18908__$1 = state_18908;
var statearr_18930_18951 = state_18908__$1;
(statearr_18930_18951[(2)] = inst_18890);

(statearr_18930_18951[(1)] = (5));


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
});})(c__15729__auto___18936,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15546__auto__,c__15729__auto___18936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15547__auto__ = null;
var cljs$core$async$state_machine__15547__auto____0 = (function (){
var statearr_18931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18931[(0)] = cljs$core$async$state_machine__15547__auto__);

(statearr_18931[(1)] = (1));

return statearr_18931;
});
var cljs$core$async$state_machine__15547__auto____1 = (function (state_18908){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_18908);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e18932){if((e18932 instanceof Object)){
var ex__15550__auto__ = e18932;
var statearr_18933_18952 = state_18908;
(statearr_18933_18952[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18908);

return cljs.core.cst$kw$recur;
} else {
throw e18932;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__18953 = state_18908;
state_18908 = G__18953;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$state_machine__15547__auto__ = function(state_18908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15547__auto____1.call(this,state_18908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15547__auto____0;
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15547__auto____1;
return cljs$core$async$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___18936,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15731__auto__ = (function (){var statearr_18934 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_18934[(6)] = c__15729__auto___18936);

return statearr_18934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___18936,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__18956 = arguments.length;
switch (G__18956) {
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
var c__15729__auto___19010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___19010,out){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___19010,out){
return (function (state_18988){
var state_val_18989 = (state_18988[(1)]);
if((state_val_18989 === (7))){
var inst_18967 = (state_18988[(7)]);
var inst_18968 = (state_18988[(8)]);
var inst_18967__$1 = (state_18988[(2)]);
var inst_18968__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18967__$1,(0),null);
var inst_18969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18967__$1,(1),null);
var inst_18970 = (inst_18968__$1 == null);
var state_18988__$1 = (function (){var statearr_18990 = state_18988;
(statearr_18990[(9)] = inst_18969);

(statearr_18990[(7)] = inst_18967__$1);

(statearr_18990[(8)] = inst_18968__$1);

return statearr_18990;
})();
if(cljs.core.truth_(inst_18970)){
var statearr_18991_19011 = state_18988__$1;
(statearr_18991_19011[(1)] = (8));

} else {
var statearr_18992_19012 = state_18988__$1;
(statearr_18992_19012[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18989 === (1))){
var inst_18957 = cljs.core.vec(chs);
var inst_18958 = inst_18957;
var state_18988__$1 = (function (){var statearr_18993 = state_18988;
(statearr_18993[(10)] = inst_18958);

return statearr_18993;
})();
var statearr_18994_19013 = state_18988__$1;
(statearr_18994_19013[(2)] = null);

(statearr_18994_19013[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18989 === (4))){
var inst_18958 = (state_18988[(10)]);
var state_18988__$1 = state_18988;
return cljs.core.async.ioc_alts_BANG_(state_18988__$1,(7),inst_18958);
} else {
if((state_val_18989 === (6))){
var inst_18984 = (state_18988[(2)]);
var state_18988__$1 = state_18988;
var statearr_18995_19014 = state_18988__$1;
(statearr_18995_19014[(2)] = inst_18984);

(statearr_18995_19014[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18989 === (3))){
var inst_18986 = (state_18988[(2)]);
var state_18988__$1 = state_18988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18988__$1,inst_18986);
} else {
if((state_val_18989 === (2))){
var inst_18958 = (state_18988[(10)]);
var inst_18960 = cljs.core.count(inst_18958);
var inst_18961 = (inst_18960 > (0));
var state_18988__$1 = state_18988;
if(cljs.core.truth_(inst_18961)){
var statearr_18997_19015 = state_18988__$1;
(statearr_18997_19015[(1)] = (4));

} else {
var statearr_18998_19016 = state_18988__$1;
(statearr_18998_19016[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18989 === (11))){
var inst_18958 = (state_18988[(10)]);
var inst_18977 = (state_18988[(2)]);
var tmp18996 = inst_18958;
var inst_18958__$1 = tmp18996;
var state_18988__$1 = (function (){var statearr_18999 = state_18988;
(statearr_18999[(10)] = inst_18958__$1);

(statearr_18999[(11)] = inst_18977);

return statearr_18999;
})();
var statearr_19000_19017 = state_18988__$1;
(statearr_19000_19017[(2)] = null);

(statearr_19000_19017[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18989 === (9))){
var inst_18968 = (state_18988[(8)]);
var state_18988__$1 = state_18988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18988__$1,(11),out,inst_18968);
} else {
if((state_val_18989 === (5))){
var inst_18982 = cljs.core.async.close_BANG_(out);
var state_18988__$1 = state_18988;
var statearr_19001_19018 = state_18988__$1;
(statearr_19001_19018[(2)] = inst_18982);

(statearr_19001_19018[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18989 === (10))){
var inst_18980 = (state_18988[(2)]);
var state_18988__$1 = state_18988;
var statearr_19002_19019 = state_18988__$1;
(statearr_19002_19019[(2)] = inst_18980);

(statearr_19002_19019[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18989 === (8))){
var inst_18958 = (state_18988[(10)]);
var inst_18969 = (state_18988[(9)]);
var inst_18967 = (state_18988[(7)]);
var inst_18968 = (state_18988[(8)]);
var inst_18972 = (function (){var cs = inst_18958;
var vec__18963 = inst_18967;
var v = inst_18968;
var c = inst_18969;
return ((function (cs,vec__18963,v,c,inst_18958,inst_18969,inst_18967,inst_18968,state_val_18989,c__15729__auto___19010,out){
return (function (p1__18954_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18954_SHARP_);
});
;})(cs,vec__18963,v,c,inst_18958,inst_18969,inst_18967,inst_18968,state_val_18989,c__15729__auto___19010,out))
})();
var inst_18973 = cljs.core.filterv(inst_18972,inst_18958);
var inst_18958__$1 = inst_18973;
var state_18988__$1 = (function (){var statearr_19003 = state_18988;
(statearr_19003[(10)] = inst_18958__$1);

return statearr_19003;
})();
var statearr_19004_19020 = state_18988__$1;
(statearr_19004_19020[(2)] = null);

(statearr_19004_19020[(1)] = (2));


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
});})(c__15729__auto___19010,out))
;
return ((function (switch__15546__auto__,c__15729__auto___19010,out){
return (function() {
var cljs$core$async$state_machine__15547__auto__ = null;
var cljs$core$async$state_machine__15547__auto____0 = (function (){
var statearr_19005 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19005[(0)] = cljs$core$async$state_machine__15547__auto__);

(statearr_19005[(1)] = (1));

return statearr_19005;
});
var cljs$core$async$state_machine__15547__auto____1 = (function (state_18988){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_18988);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e19006){if((e19006 instanceof Object)){
var ex__15550__auto__ = e19006;
var statearr_19007_19021 = state_18988;
(statearr_19007_19021[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18988);

return cljs.core.cst$kw$recur;
} else {
throw e19006;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__19022 = state_18988;
state_18988 = G__19022;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$state_machine__15547__auto__ = function(state_18988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15547__auto____1.call(this,state_18988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15547__auto____0;
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15547__auto____1;
return cljs$core$async$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___19010,out))
})();
var state__15731__auto__ = (function (){var statearr_19008 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_19008[(6)] = c__15729__auto___19010);

return statearr_19008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___19010,out))
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
var G__19024 = arguments.length;
switch (G__19024) {
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
var c__15729__auto___19069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___19069,out){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___19069,out){
return (function (state_19048){
var state_val_19049 = (state_19048[(1)]);
if((state_val_19049 === (7))){
var inst_19030 = (state_19048[(7)]);
var inst_19030__$1 = (state_19048[(2)]);
var inst_19031 = (inst_19030__$1 == null);
var inst_19032 = cljs.core.not(inst_19031);
var state_19048__$1 = (function (){var statearr_19050 = state_19048;
(statearr_19050[(7)] = inst_19030__$1);

return statearr_19050;
})();
if(inst_19032){
var statearr_19051_19070 = state_19048__$1;
(statearr_19051_19070[(1)] = (8));

} else {
var statearr_19052_19071 = state_19048__$1;
(statearr_19052_19071[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19049 === (1))){
var inst_19025 = (0);
var state_19048__$1 = (function (){var statearr_19053 = state_19048;
(statearr_19053[(8)] = inst_19025);

return statearr_19053;
})();
var statearr_19054_19072 = state_19048__$1;
(statearr_19054_19072[(2)] = null);

(statearr_19054_19072[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19049 === (4))){
var state_19048__$1 = state_19048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19048__$1,(7),ch);
} else {
if((state_val_19049 === (6))){
var inst_19043 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
var statearr_19055_19073 = state_19048__$1;
(statearr_19055_19073[(2)] = inst_19043);

(statearr_19055_19073[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19049 === (3))){
var inst_19045 = (state_19048[(2)]);
var inst_19046 = cljs.core.async.close_BANG_(out);
var state_19048__$1 = (function (){var statearr_19056 = state_19048;
(statearr_19056[(9)] = inst_19045);

return statearr_19056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19048__$1,inst_19046);
} else {
if((state_val_19049 === (2))){
var inst_19025 = (state_19048[(8)]);
var inst_19027 = (inst_19025 < n);
var state_19048__$1 = state_19048;
if(cljs.core.truth_(inst_19027)){
var statearr_19057_19074 = state_19048__$1;
(statearr_19057_19074[(1)] = (4));

} else {
var statearr_19058_19075 = state_19048__$1;
(statearr_19058_19075[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19049 === (11))){
var inst_19025 = (state_19048[(8)]);
var inst_19035 = (state_19048[(2)]);
var inst_19036 = (inst_19025 + (1));
var inst_19025__$1 = inst_19036;
var state_19048__$1 = (function (){var statearr_19059 = state_19048;
(statearr_19059[(10)] = inst_19035);

(statearr_19059[(8)] = inst_19025__$1);

return statearr_19059;
})();
var statearr_19060_19076 = state_19048__$1;
(statearr_19060_19076[(2)] = null);

(statearr_19060_19076[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19049 === (9))){
var state_19048__$1 = state_19048;
var statearr_19061_19077 = state_19048__$1;
(statearr_19061_19077[(2)] = null);

(statearr_19061_19077[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19049 === (5))){
var state_19048__$1 = state_19048;
var statearr_19062_19078 = state_19048__$1;
(statearr_19062_19078[(2)] = null);

(statearr_19062_19078[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19049 === (10))){
var inst_19040 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
var statearr_19063_19079 = state_19048__$1;
(statearr_19063_19079[(2)] = inst_19040);

(statearr_19063_19079[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19049 === (8))){
var inst_19030 = (state_19048[(7)]);
var state_19048__$1 = state_19048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19048__$1,(11),out,inst_19030);
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
});})(c__15729__auto___19069,out))
;
return ((function (switch__15546__auto__,c__15729__auto___19069,out){
return (function() {
var cljs$core$async$state_machine__15547__auto__ = null;
var cljs$core$async$state_machine__15547__auto____0 = (function (){
var statearr_19064 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19064[(0)] = cljs$core$async$state_machine__15547__auto__);

(statearr_19064[(1)] = (1));

return statearr_19064;
});
var cljs$core$async$state_machine__15547__auto____1 = (function (state_19048){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_19048);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e19065){if((e19065 instanceof Object)){
var ex__15550__auto__ = e19065;
var statearr_19066_19080 = state_19048;
(statearr_19066_19080[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19048);

return cljs.core.cst$kw$recur;
} else {
throw e19065;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__19081 = state_19048;
state_19048 = G__19081;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$state_machine__15547__auto__ = function(state_19048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15547__auto____1.call(this,state_19048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15547__auto____0;
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15547__auto____1;
return cljs$core$async$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___19069,out))
})();
var state__15731__auto__ = (function (){var statearr_19067 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_19067[(6)] = c__15729__auto___19069);

return statearr_19067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___19069,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19083 = (function (f,ch,meta19084){
this.f = f;
this.ch = ch;
this.meta19084 = meta19084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19085,meta19084__$1){
var self__ = this;
var _19085__$1 = this;
return (new cljs.core.async.t_cljs$core$async19083(self__.f,self__.ch,meta19084__$1));
});

cljs.core.async.t_cljs$core$async19083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19085){
var self__ = this;
var _19085__$1 = this;
return self__.meta19084;
});

cljs.core.async.t_cljs$core$async19083.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19083.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19083.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19086 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19086 = (function (f,ch,meta19084,_,fn1,meta19087){
this.f = f;
this.ch = ch;
this.meta19084 = meta19084;
this._ = _;
this.fn1 = fn1;
this.meta19087 = meta19087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19088,meta19087__$1){
var self__ = this;
var _19088__$1 = this;
return (new cljs.core.async.t_cljs$core$async19086(self__.f,self__.ch,self__.meta19084,self__._,self__.fn1,meta19087__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19088){
var self__ = this;
var _19088__$1 = this;
return self__.meta19087;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19082_SHARP_){
var G__19089 = (((p1__19082_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19082_SHARP_) : self__.f.call(null,p1__19082_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19089) : f1.call(null,G__19089));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19086.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19084,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19083], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19087], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19086";

cljs.core.async.t_cljs$core$async19086.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19086");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19086.
 */
cljs.core.async.__GT_t_cljs$core$async19086 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19086(f__$1,ch__$1,meta19084__$1,___$2,fn1__$1,meta19087){
return (new cljs.core.async.t_cljs$core$async19086(f__$1,ch__$1,meta19084__$1,___$2,fn1__$1,meta19087));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19086(self__.f,self__.ch,self__.meta19084,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19090 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19090) : self__.f.call(null,G__19090));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19083.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19083.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19084], null);
});

cljs.core.async.t_cljs$core$async19083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19083";

cljs.core.async.t_cljs$core$async19083.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19083");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19083.
 */
cljs.core.async.__GT_t_cljs$core$async19083 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19083(f__$1,ch__$1,meta19084){
return (new cljs.core.async.t_cljs$core$async19083(f__$1,ch__$1,meta19084));
});

}

return (new cljs.core.async.t_cljs$core$async19083(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19091 = (function (f,ch,meta19092){
this.f = f;
this.ch = ch;
this.meta19092 = meta19092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19093,meta19092__$1){
var self__ = this;
var _19093__$1 = this;
return (new cljs.core.async.t_cljs$core$async19091(self__.f,self__.ch,meta19092__$1));
});

cljs.core.async.t_cljs$core$async19091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19093){
var self__ = this;
var _19093__$1 = this;
return self__.meta19092;
});

cljs.core.async.t_cljs$core$async19091.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19091.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19091.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19091.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19091.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19091.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19092], null);
});

cljs.core.async.t_cljs$core$async19091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19091";

cljs.core.async.t_cljs$core$async19091.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19091");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19091.
 */
cljs.core.async.__GT_t_cljs$core$async19091 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19091(f__$1,ch__$1,meta19092){
return (new cljs.core.async.t_cljs$core$async19091(f__$1,ch__$1,meta19092));
});

}

return (new cljs.core.async.t_cljs$core$async19091(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19094 = (function (p,ch,meta19095){
this.p = p;
this.ch = ch;
this.meta19095 = meta19095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19096,meta19095__$1){
var self__ = this;
var _19096__$1 = this;
return (new cljs.core.async.t_cljs$core$async19094(self__.p,self__.ch,meta19095__$1));
});

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19096){
var self__ = this;
var _19096__$1 = this;
return self__.meta19095;
});

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19095], null);
});

cljs.core.async.t_cljs$core$async19094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19094";

cljs.core.async.t_cljs$core$async19094.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19094");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19094.
 */
cljs.core.async.__GT_t_cljs$core$async19094 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19094(p__$1,ch__$1,meta19095){
return (new cljs.core.async.t_cljs$core$async19094(p__$1,ch__$1,meta19095));
});

}

return (new cljs.core.async.t_cljs$core$async19094(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19098 = arguments.length;
switch (G__19098) {
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
var c__15729__auto___19138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___19138,out){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___19138,out){
return (function (state_19119){
var state_val_19120 = (state_19119[(1)]);
if((state_val_19120 === (7))){
var inst_19115 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19121_19139 = state_19119__$1;
(statearr_19121_19139[(2)] = inst_19115);

(statearr_19121_19139[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (1))){
var state_19119__$1 = state_19119;
var statearr_19122_19140 = state_19119__$1;
(statearr_19122_19140[(2)] = null);

(statearr_19122_19140[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (4))){
var inst_19101 = (state_19119[(7)]);
var inst_19101__$1 = (state_19119[(2)]);
var inst_19102 = (inst_19101__$1 == null);
var state_19119__$1 = (function (){var statearr_19123 = state_19119;
(statearr_19123[(7)] = inst_19101__$1);

return statearr_19123;
})();
if(cljs.core.truth_(inst_19102)){
var statearr_19124_19141 = state_19119__$1;
(statearr_19124_19141[(1)] = (5));

} else {
var statearr_19125_19142 = state_19119__$1;
(statearr_19125_19142[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (6))){
var inst_19101 = (state_19119[(7)]);
var inst_19106 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19101) : p.call(null,inst_19101));
var state_19119__$1 = state_19119;
if(cljs.core.truth_(inst_19106)){
var statearr_19126_19143 = state_19119__$1;
(statearr_19126_19143[(1)] = (8));

} else {
var statearr_19127_19144 = state_19119__$1;
(statearr_19127_19144[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (3))){
var inst_19117 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19119__$1,inst_19117);
} else {
if((state_val_19120 === (2))){
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19119__$1,(4),ch);
} else {
if((state_val_19120 === (11))){
var inst_19109 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19128_19145 = state_19119__$1;
(statearr_19128_19145[(2)] = inst_19109);

(statearr_19128_19145[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (9))){
var state_19119__$1 = state_19119;
var statearr_19129_19146 = state_19119__$1;
(statearr_19129_19146[(2)] = null);

(statearr_19129_19146[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (5))){
var inst_19104 = cljs.core.async.close_BANG_(out);
var state_19119__$1 = state_19119;
var statearr_19130_19147 = state_19119__$1;
(statearr_19130_19147[(2)] = inst_19104);

(statearr_19130_19147[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (10))){
var inst_19112 = (state_19119[(2)]);
var state_19119__$1 = (function (){var statearr_19131 = state_19119;
(statearr_19131[(8)] = inst_19112);

return statearr_19131;
})();
var statearr_19132_19148 = state_19119__$1;
(statearr_19132_19148[(2)] = null);

(statearr_19132_19148[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (8))){
var inst_19101 = (state_19119[(7)]);
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19119__$1,(11),out,inst_19101);
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
});})(c__15729__auto___19138,out))
;
return ((function (switch__15546__auto__,c__15729__auto___19138,out){
return (function() {
var cljs$core$async$state_machine__15547__auto__ = null;
var cljs$core$async$state_machine__15547__auto____0 = (function (){
var statearr_19133 = [null,null,null,null,null,null,null,null,null];
(statearr_19133[(0)] = cljs$core$async$state_machine__15547__auto__);

(statearr_19133[(1)] = (1));

return statearr_19133;
});
var cljs$core$async$state_machine__15547__auto____1 = (function (state_19119){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_19119);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e19134){if((e19134 instanceof Object)){
var ex__15550__auto__ = e19134;
var statearr_19135_19149 = state_19119;
(statearr_19135_19149[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19119);

return cljs.core.cst$kw$recur;
} else {
throw e19134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__19150 = state_19119;
state_19119 = G__19150;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$state_machine__15547__auto__ = function(state_19119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15547__auto____1.call(this,state_19119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15547__auto____0;
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15547__auto____1;
return cljs$core$async$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___19138,out))
})();
var state__15731__auto__ = (function (){var statearr_19136 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_19136[(6)] = c__15729__auto___19138);

return statearr_19136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___19138,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19152 = arguments.length;
switch (G__19152) {
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
var c__15729__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto__){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto__){
return (function (state_19215){
var state_val_19216 = (state_19215[(1)]);
if((state_val_19216 === (7))){
var inst_19211 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19217_19255 = state_19215__$1;
(statearr_19217_19255[(2)] = inst_19211);

(statearr_19217_19255[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (20))){
var inst_19181 = (state_19215[(7)]);
var inst_19192 = (state_19215[(2)]);
var inst_19193 = cljs.core.next(inst_19181);
var inst_19167 = inst_19193;
var inst_19168 = null;
var inst_19169 = (0);
var inst_19170 = (0);
var state_19215__$1 = (function (){var statearr_19218 = state_19215;
(statearr_19218[(8)] = inst_19170);

(statearr_19218[(9)] = inst_19167);

(statearr_19218[(10)] = inst_19168);

(statearr_19218[(11)] = inst_19169);

(statearr_19218[(12)] = inst_19192);

return statearr_19218;
})();
var statearr_19219_19256 = state_19215__$1;
(statearr_19219_19256[(2)] = null);

(statearr_19219_19256[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (1))){
var state_19215__$1 = state_19215;
var statearr_19220_19257 = state_19215__$1;
(statearr_19220_19257[(2)] = null);

(statearr_19220_19257[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (4))){
var inst_19156 = (state_19215[(13)]);
var inst_19156__$1 = (state_19215[(2)]);
var inst_19157 = (inst_19156__$1 == null);
var state_19215__$1 = (function (){var statearr_19221 = state_19215;
(statearr_19221[(13)] = inst_19156__$1);

return statearr_19221;
})();
if(cljs.core.truth_(inst_19157)){
var statearr_19222_19258 = state_19215__$1;
(statearr_19222_19258[(1)] = (5));

} else {
var statearr_19223_19259 = state_19215__$1;
(statearr_19223_19259[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (15))){
var state_19215__$1 = state_19215;
var statearr_19227_19260 = state_19215__$1;
(statearr_19227_19260[(2)] = null);

(statearr_19227_19260[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (21))){
var state_19215__$1 = state_19215;
var statearr_19228_19261 = state_19215__$1;
(statearr_19228_19261[(2)] = null);

(statearr_19228_19261[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (13))){
var inst_19170 = (state_19215[(8)]);
var inst_19167 = (state_19215[(9)]);
var inst_19168 = (state_19215[(10)]);
var inst_19169 = (state_19215[(11)]);
var inst_19177 = (state_19215[(2)]);
var inst_19178 = (inst_19170 + (1));
var tmp19224 = inst_19167;
var tmp19225 = inst_19168;
var tmp19226 = inst_19169;
var inst_19167__$1 = tmp19224;
var inst_19168__$1 = tmp19225;
var inst_19169__$1 = tmp19226;
var inst_19170__$1 = inst_19178;
var state_19215__$1 = (function (){var statearr_19229 = state_19215;
(statearr_19229[(8)] = inst_19170__$1);

(statearr_19229[(14)] = inst_19177);

(statearr_19229[(9)] = inst_19167__$1);

(statearr_19229[(10)] = inst_19168__$1);

(statearr_19229[(11)] = inst_19169__$1);

return statearr_19229;
})();
var statearr_19230_19262 = state_19215__$1;
(statearr_19230_19262[(2)] = null);

(statearr_19230_19262[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (22))){
var state_19215__$1 = state_19215;
var statearr_19231_19263 = state_19215__$1;
(statearr_19231_19263[(2)] = null);

(statearr_19231_19263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (6))){
var inst_19156 = (state_19215[(13)]);
var inst_19165 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19156) : f.call(null,inst_19156));
var inst_19166 = cljs.core.seq(inst_19165);
var inst_19167 = inst_19166;
var inst_19168 = null;
var inst_19169 = (0);
var inst_19170 = (0);
var state_19215__$1 = (function (){var statearr_19232 = state_19215;
(statearr_19232[(8)] = inst_19170);

(statearr_19232[(9)] = inst_19167);

(statearr_19232[(10)] = inst_19168);

(statearr_19232[(11)] = inst_19169);

return statearr_19232;
})();
var statearr_19233_19264 = state_19215__$1;
(statearr_19233_19264[(2)] = null);

(statearr_19233_19264[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (17))){
var inst_19181 = (state_19215[(7)]);
var inst_19185 = cljs.core.chunk_first(inst_19181);
var inst_19186 = cljs.core.chunk_rest(inst_19181);
var inst_19187 = cljs.core.count(inst_19185);
var inst_19167 = inst_19186;
var inst_19168 = inst_19185;
var inst_19169 = inst_19187;
var inst_19170 = (0);
var state_19215__$1 = (function (){var statearr_19234 = state_19215;
(statearr_19234[(8)] = inst_19170);

(statearr_19234[(9)] = inst_19167);

(statearr_19234[(10)] = inst_19168);

(statearr_19234[(11)] = inst_19169);

return statearr_19234;
})();
var statearr_19235_19265 = state_19215__$1;
(statearr_19235_19265[(2)] = null);

(statearr_19235_19265[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (3))){
var inst_19213 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19215__$1,inst_19213);
} else {
if((state_val_19216 === (12))){
var inst_19201 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19236_19266 = state_19215__$1;
(statearr_19236_19266[(2)] = inst_19201);

(statearr_19236_19266[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (2))){
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19215__$1,(4),in$);
} else {
if((state_val_19216 === (23))){
var inst_19209 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19237_19267 = state_19215__$1;
(statearr_19237_19267[(2)] = inst_19209);

(statearr_19237_19267[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (19))){
var inst_19196 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19238_19268 = state_19215__$1;
(statearr_19238_19268[(2)] = inst_19196);

(statearr_19238_19268[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (11))){
var inst_19167 = (state_19215[(9)]);
var inst_19181 = (state_19215[(7)]);
var inst_19181__$1 = cljs.core.seq(inst_19167);
var state_19215__$1 = (function (){var statearr_19239 = state_19215;
(statearr_19239[(7)] = inst_19181__$1);

return statearr_19239;
})();
if(inst_19181__$1){
var statearr_19240_19269 = state_19215__$1;
(statearr_19240_19269[(1)] = (14));

} else {
var statearr_19241_19270 = state_19215__$1;
(statearr_19241_19270[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (9))){
var inst_19203 = (state_19215[(2)]);
var inst_19204 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19215__$1 = (function (){var statearr_19242 = state_19215;
(statearr_19242[(15)] = inst_19203);

return statearr_19242;
})();
if(cljs.core.truth_(inst_19204)){
var statearr_19243_19271 = state_19215__$1;
(statearr_19243_19271[(1)] = (21));

} else {
var statearr_19244_19272 = state_19215__$1;
(statearr_19244_19272[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (5))){
var inst_19159 = cljs.core.async.close_BANG_(out);
var state_19215__$1 = state_19215;
var statearr_19245_19273 = state_19215__$1;
(statearr_19245_19273[(2)] = inst_19159);

(statearr_19245_19273[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (14))){
var inst_19181 = (state_19215[(7)]);
var inst_19183 = cljs.core.chunked_seq_QMARK_(inst_19181);
var state_19215__$1 = state_19215;
if(inst_19183){
var statearr_19246_19274 = state_19215__$1;
(statearr_19246_19274[(1)] = (17));

} else {
var statearr_19247_19275 = state_19215__$1;
(statearr_19247_19275[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (16))){
var inst_19199 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19248_19276 = state_19215__$1;
(statearr_19248_19276[(2)] = inst_19199);

(statearr_19248_19276[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19216 === (10))){
var inst_19170 = (state_19215[(8)]);
var inst_19168 = (state_19215[(10)]);
var inst_19175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19168,inst_19170);
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19215__$1,(13),out,inst_19175);
} else {
if((state_val_19216 === (18))){
var inst_19181 = (state_19215[(7)]);
var inst_19190 = cljs.core.first(inst_19181);
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19215__$1,(20),out,inst_19190);
} else {
if((state_val_19216 === (8))){
var inst_19170 = (state_19215[(8)]);
var inst_19169 = (state_19215[(11)]);
var inst_19172 = (inst_19170 < inst_19169);
var inst_19173 = inst_19172;
var state_19215__$1 = state_19215;
if(cljs.core.truth_(inst_19173)){
var statearr_19249_19277 = state_19215__$1;
(statearr_19249_19277[(1)] = (10));

} else {
var statearr_19250_19278 = state_19215__$1;
(statearr_19250_19278[(1)] = (11));

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
});})(c__15729__auto__))
;
return ((function (switch__15546__auto__,c__15729__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15547__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15547__auto____0 = (function (){
var statearr_19251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19251[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15547__auto__);

(statearr_19251[(1)] = (1));

return statearr_19251;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15547__auto____1 = (function (state_19215){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_19215);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e19252){if((e19252 instanceof Object)){
var ex__15550__auto__ = e19252;
var statearr_19253_19279 = state_19215;
(statearr_19253_19279[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19215);

return cljs.core.cst$kw$recur;
} else {
throw e19252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__19280 = state_19215;
state_19215 = G__19280;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15547__auto__ = function(state_19215){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15547__auto____1.call(this,state_19215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15547__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15547__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto__))
})();
var state__15731__auto__ = (function (){var statearr_19254 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_19254[(6)] = c__15729__auto__);

return statearr_19254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto__))
);

return c__15729__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19282 = arguments.length;
switch (G__19282) {
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
var G__19285 = arguments.length;
switch (G__19285) {
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
var G__19288 = arguments.length;
switch (G__19288) {
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
var c__15729__auto___19335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___19335,out){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___19335,out){
return (function (state_19312){
var state_val_19313 = (state_19312[(1)]);
if((state_val_19313 === (7))){
var inst_19307 = (state_19312[(2)]);
var state_19312__$1 = state_19312;
var statearr_19314_19336 = state_19312__$1;
(statearr_19314_19336[(2)] = inst_19307);

(statearr_19314_19336[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (1))){
var inst_19289 = null;
var state_19312__$1 = (function (){var statearr_19315 = state_19312;
(statearr_19315[(7)] = inst_19289);

return statearr_19315;
})();
var statearr_19316_19337 = state_19312__$1;
(statearr_19316_19337[(2)] = null);

(statearr_19316_19337[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (4))){
var inst_19292 = (state_19312[(8)]);
var inst_19292__$1 = (state_19312[(2)]);
var inst_19293 = (inst_19292__$1 == null);
var inst_19294 = cljs.core.not(inst_19293);
var state_19312__$1 = (function (){var statearr_19317 = state_19312;
(statearr_19317[(8)] = inst_19292__$1);

return statearr_19317;
})();
if(inst_19294){
var statearr_19318_19338 = state_19312__$1;
(statearr_19318_19338[(1)] = (5));

} else {
var statearr_19319_19339 = state_19312__$1;
(statearr_19319_19339[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (6))){
var state_19312__$1 = state_19312;
var statearr_19320_19340 = state_19312__$1;
(statearr_19320_19340[(2)] = null);

(statearr_19320_19340[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (3))){
var inst_19309 = (state_19312[(2)]);
var inst_19310 = cljs.core.async.close_BANG_(out);
var state_19312__$1 = (function (){var statearr_19321 = state_19312;
(statearr_19321[(9)] = inst_19309);

return statearr_19321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19312__$1,inst_19310);
} else {
if((state_val_19313 === (2))){
var state_19312__$1 = state_19312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19312__$1,(4),ch);
} else {
if((state_val_19313 === (11))){
var inst_19292 = (state_19312[(8)]);
var inst_19301 = (state_19312[(2)]);
var inst_19289 = inst_19292;
var state_19312__$1 = (function (){var statearr_19322 = state_19312;
(statearr_19322[(10)] = inst_19301);

(statearr_19322[(7)] = inst_19289);

return statearr_19322;
})();
var statearr_19323_19341 = state_19312__$1;
(statearr_19323_19341[(2)] = null);

(statearr_19323_19341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (9))){
var inst_19292 = (state_19312[(8)]);
var state_19312__$1 = state_19312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19312__$1,(11),out,inst_19292);
} else {
if((state_val_19313 === (5))){
var inst_19289 = (state_19312[(7)]);
var inst_19292 = (state_19312[(8)]);
var inst_19296 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19292,inst_19289);
var state_19312__$1 = state_19312;
if(inst_19296){
var statearr_19325_19342 = state_19312__$1;
(statearr_19325_19342[(1)] = (8));

} else {
var statearr_19326_19343 = state_19312__$1;
(statearr_19326_19343[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (10))){
var inst_19304 = (state_19312[(2)]);
var state_19312__$1 = state_19312;
var statearr_19327_19344 = state_19312__$1;
(statearr_19327_19344[(2)] = inst_19304);

(statearr_19327_19344[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19313 === (8))){
var inst_19289 = (state_19312[(7)]);
var tmp19324 = inst_19289;
var inst_19289__$1 = tmp19324;
var state_19312__$1 = (function (){var statearr_19328 = state_19312;
(statearr_19328[(7)] = inst_19289__$1);

return statearr_19328;
})();
var statearr_19329_19345 = state_19312__$1;
(statearr_19329_19345[(2)] = null);

(statearr_19329_19345[(1)] = (2));


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
});})(c__15729__auto___19335,out))
;
return ((function (switch__15546__auto__,c__15729__auto___19335,out){
return (function() {
var cljs$core$async$state_machine__15547__auto__ = null;
var cljs$core$async$state_machine__15547__auto____0 = (function (){
var statearr_19330 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19330[(0)] = cljs$core$async$state_machine__15547__auto__);

(statearr_19330[(1)] = (1));

return statearr_19330;
});
var cljs$core$async$state_machine__15547__auto____1 = (function (state_19312){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_19312);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e19331){if((e19331 instanceof Object)){
var ex__15550__auto__ = e19331;
var statearr_19332_19346 = state_19312;
(statearr_19332_19346[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19312);

return cljs.core.cst$kw$recur;
} else {
throw e19331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__19347 = state_19312;
state_19312 = G__19347;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$state_machine__15547__auto__ = function(state_19312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15547__auto____1.call(this,state_19312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15547__auto____0;
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15547__auto____1;
return cljs$core$async$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___19335,out))
})();
var state__15731__auto__ = (function (){var statearr_19333 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_19333[(6)] = c__15729__auto___19335);

return statearr_19333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___19335,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19349 = arguments.length;
switch (G__19349) {
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
var c__15729__auto___19415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___19415,out){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___19415,out){
return (function (state_19387){
var state_val_19388 = (state_19387[(1)]);
if((state_val_19388 === (7))){
var inst_19383 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
var statearr_19389_19416 = state_19387__$1;
(statearr_19389_19416[(2)] = inst_19383);

(statearr_19389_19416[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19388 === (1))){
var inst_19350 = (new Array(n));
var inst_19351 = inst_19350;
var inst_19352 = (0);
var state_19387__$1 = (function (){var statearr_19390 = state_19387;
(statearr_19390[(7)] = inst_19352);

(statearr_19390[(8)] = inst_19351);

return statearr_19390;
})();
var statearr_19391_19417 = state_19387__$1;
(statearr_19391_19417[(2)] = null);

(statearr_19391_19417[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19388 === (4))){
var inst_19355 = (state_19387[(9)]);
var inst_19355__$1 = (state_19387[(2)]);
var inst_19356 = (inst_19355__$1 == null);
var inst_19357 = cljs.core.not(inst_19356);
var state_19387__$1 = (function (){var statearr_19392 = state_19387;
(statearr_19392[(9)] = inst_19355__$1);

return statearr_19392;
})();
if(inst_19357){
var statearr_19393_19418 = state_19387__$1;
(statearr_19393_19418[(1)] = (5));

} else {
var statearr_19394_19419 = state_19387__$1;
(statearr_19394_19419[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19388 === (15))){
var inst_19377 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
var statearr_19395_19420 = state_19387__$1;
(statearr_19395_19420[(2)] = inst_19377);

(statearr_19395_19420[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19388 === (13))){
var state_19387__$1 = state_19387;
var statearr_19396_19421 = state_19387__$1;
(statearr_19396_19421[(2)] = null);

(statearr_19396_19421[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19388 === (6))){
var inst_19352 = (state_19387[(7)]);
var inst_19373 = (inst_19352 > (0));
var state_19387__$1 = state_19387;
if(cljs.core.truth_(inst_19373)){
var statearr_19397_19422 = state_19387__$1;
(statearr_19397_19422[(1)] = (12));

} else {
var statearr_19398_19423 = state_19387__$1;
(statearr_19398_19423[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19388 === (3))){
var inst_19385 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19387__$1,inst_19385);
} else {
if((state_val_19388 === (12))){
var inst_19351 = (state_19387[(8)]);
var inst_19375 = cljs.core.vec(inst_19351);
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19387__$1,(15),out,inst_19375);
} else {
if((state_val_19388 === (2))){
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19387__$1,(4),ch);
} else {
if((state_val_19388 === (11))){
var inst_19367 = (state_19387[(2)]);
var inst_19368 = (new Array(n));
var inst_19351 = inst_19368;
var inst_19352 = (0);
var state_19387__$1 = (function (){var statearr_19399 = state_19387;
(statearr_19399[(10)] = inst_19367);

(statearr_19399[(7)] = inst_19352);

(statearr_19399[(8)] = inst_19351);

return statearr_19399;
})();
var statearr_19400_19424 = state_19387__$1;
(statearr_19400_19424[(2)] = null);

(statearr_19400_19424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19388 === (9))){
var inst_19351 = (state_19387[(8)]);
var inst_19365 = cljs.core.vec(inst_19351);
var state_19387__$1 = state_19387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19387__$1,(11),out,inst_19365);
} else {
if((state_val_19388 === (5))){
var inst_19355 = (state_19387[(9)]);
var inst_19352 = (state_19387[(7)]);
var inst_19360 = (state_19387[(11)]);
var inst_19351 = (state_19387[(8)]);
var inst_19359 = (inst_19351[inst_19352] = inst_19355);
var inst_19360__$1 = (inst_19352 + (1));
var inst_19361 = (inst_19360__$1 < n);
var state_19387__$1 = (function (){var statearr_19401 = state_19387;
(statearr_19401[(12)] = inst_19359);

(statearr_19401[(11)] = inst_19360__$1);

return statearr_19401;
})();
if(cljs.core.truth_(inst_19361)){
var statearr_19402_19425 = state_19387__$1;
(statearr_19402_19425[(1)] = (8));

} else {
var statearr_19403_19426 = state_19387__$1;
(statearr_19403_19426[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19388 === (14))){
var inst_19380 = (state_19387[(2)]);
var inst_19381 = cljs.core.async.close_BANG_(out);
var state_19387__$1 = (function (){var statearr_19405 = state_19387;
(statearr_19405[(13)] = inst_19380);

return statearr_19405;
})();
var statearr_19406_19427 = state_19387__$1;
(statearr_19406_19427[(2)] = inst_19381);

(statearr_19406_19427[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19388 === (10))){
var inst_19371 = (state_19387[(2)]);
var state_19387__$1 = state_19387;
var statearr_19407_19428 = state_19387__$1;
(statearr_19407_19428[(2)] = inst_19371);

(statearr_19407_19428[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19388 === (8))){
var inst_19360 = (state_19387[(11)]);
var inst_19351 = (state_19387[(8)]);
var tmp19404 = inst_19351;
var inst_19351__$1 = tmp19404;
var inst_19352 = inst_19360;
var state_19387__$1 = (function (){var statearr_19408 = state_19387;
(statearr_19408[(7)] = inst_19352);

(statearr_19408[(8)] = inst_19351__$1);

return statearr_19408;
})();
var statearr_19409_19429 = state_19387__$1;
(statearr_19409_19429[(2)] = null);

(statearr_19409_19429[(1)] = (2));


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
});})(c__15729__auto___19415,out))
;
return ((function (switch__15546__auto__,c__15729__auto___19415,out){
return (function() {
var cljs$core$async$state_machine__15547__auto__ = null;
var cljs$core$async$state_machine__15547__auto____0 = (function (){
var statearr_19410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19410[(0)] = cljs$core$async$state_machine__15547__auto__);

(statearr_19410[(1)] = (1));

return statearr_19410;
});
var cljs$core$async$state_machine__15547__auto____1 = (function (state_19387){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_19387);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e19411){if((e19411 instanceof Object)){
var ex__15550__auto__ = e19411;
var statearr_19412_19430 = state_19387;
(statearr_19412_19430[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19387);

return cljs.core.cst$kw$recur;
} else {
throw e19411;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__19431 = state_19387;
state_19387 = G__19431;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$state_machine__15547__auto__ = function(state_19387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15547__auto____1.call(this,state_19387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15547__auto____0;
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15547__auto____1;
return cljs$core$async$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___19415,out))
})();
var state__15731__auto__ = (function (){var statearr_19413 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_19413[(6)] = c__15729__auto___19415);

return statearr_19413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___19415,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19433 = arguments.length;
switch (G__19433) {
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
var c__15729__auto___19503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15729__auto___19503,out){
return (function (){
var f__15730__auto__ = (function (){var switch__15546__auto__ = ((function (c__15729__auto___19503,out){
return (function (state_19475){
var state_val_19476 = (state_19475[(1)]);
if((state_val_19476 === (7))){
var inst_19471 = (state_19475[(2)]);
var state_19475__$1 = state_19475;
var statearr_19477_19504 = state_19475__$1;
(statearr_19477_19504[(2)] = inst_19471);

(statearr_19477_19504[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19476 === (1))){
var inst_19434 = [];
var inst_19435 = inst_19434;
var inst_19436 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19475__$1 = (function (){var statearr_19478 = state_19475;
(statearr_19478[(7)] = inst_19436);

(statearr_19478[(8)] = inst_19435);

return statearr_19478;
})();
var statearr_19479_19505 = state_19475__$1;
(statearr_19479_19505[(2)] = null);

(statearr_19479_19505[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19476 === (4))){
var inst_19439 = (state_19475[(9)]);
var inst_19439__$1 = (state_19475[(2)]);
var inst_19440 = (inst_19439__$1 == null);
var inst_19441 = cljs.core.not(inst_19440);
var state_19475__$1 = (function (){var statearr_19480 = state_19475;
(statearr_19480[(9)] = inst_19439__$1);

return statearr_19480;
})();
if(inst_19441){
var statearr_19481_19506 = state_19475__$1;
(statearr_19481_19506[(1)] = (5));

} else {
var statearr_19482_19507 = state_19475__$1;
(statearr_19482_19507[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19476 === (15))){
var inst_19465 = (state_19475[(2)]);
var state_19475__$1 = state_19475;
var statearr_19483_19508 = state_19475__$1;
(statearr_19483_19508[(2)] = inst_19465);

(statearr_19483_19508[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19476 === (13))){
var state_19475__$1 = state_19475;
var statearr_19484_19509 = state_19475__$1;
(statearr_19484_19509[(2)] = null);

(statearr_19484_19509[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19476 === (6))){
var inst_19435 = (state_19475[(8)]);
var inst_19460 = inst_19435.length;
var inst_19461 = (inst_19460 > (0));
var state_19475__$1 = state_19475;
if(cljs.core.truth_(inst_19461)){
var statearr_19485_19510 = state_19475__$1;
(statearr_19485_19510[(1)] = (12));

} else {
var statearr_19486_19511 = state_19475__$1;
(statearr_19486_19511[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19476 === (3))){
var inst_19473 = (state_19475[(2)]);
var state_19475__$1 = state_19475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19475__$1,inst_19473);
} else {
if((state_val_19476 === (12))){
var inst_19435 = (state_19475[(8)]);
var inst_19463 = cljs.core.vec(inst_19435);
var state_19475__$1 = state_19475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19475__$1,(15),out,inst_19463);
} else {
if((state_val_19476 === (2))){
var state_19475__$1 = state_19475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19475__$1,(4),ch);
} else {
if((state_val_19476 === (11))){
var inst_19439 = (state_19475[(9)]);
var inst_19443 = (state_19475[(10)]);
var inst_19453 = (state_19475[(2)]);
var inst_19454 = [];
var inst_19455 = inst_19454.push(inst_19439);
var inst_19435 = inst_19454;
var inst_19436 = inst_19443;
var state_19475__$1 = (function (){var statearr_19487 = state_19475;
(statearr_19487[(7)] = inst_19436);

(statearr_19487[(11)] = inst_19453);

(statearr_19487[(12)] = inst_19455);

(statearr_19487[(8)] = inst_19435);

return statearr_19487;
})();
var statearr_19488_19512 = state_19475__$1;
(statearr_19488_19512[(2)] = null);

(statearr_19488_19512[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19476 === (9))){
var inst_19435 = (state_19475[(8)]);
var inst_19451 = cljs.core.vec(inst_19435);
var state_19475__$1 = state_19475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19475__$1,(11),out,inst_19451);
} else {
if((state_val_19476 === (5))){
var inst_19436 = (state_19475[(7)]);
var inst_19439 = (state_19475[(9)]);
var inst_19443 = (state_19475[(10)]);
var inst_19443__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19439) : f.call(null,inst_19439));
var inst_19444 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19443__$1,inst_19436);
var inst_19445 = cljs.core.keyword_identical_QMARK_(inst_19436,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19446 = ((inst_19444) || (inst_19445));
var state_19475__$1 = (function (){var statearr_19489 = state_19475;
(statearr_19489[(10)] = inst_19443__$1);

return statearr_19489;
})();
if(cljs.core.truth_(inst_19446)){
var statearr_19490_19513 = state_19475__$1;
(statearr_19490_19513[(1)] = (8));

} else {
var statearr_19491_19514 = state_19475__$1;
(statearr_19491_19514[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19476 === (14))){
var inst_19468 = (state_19475[(2)]);
var inst_19469 = cljs.core.async.close_BANG_(out);
var state_19475__$1 = (function (){var statearr_19493 = state_19475;
(statearr_19493[(13)] = inst_19468);

return statearr_19493;
})();
var statearr_19494_19515 = state_19475__$1;
(statearr_19494_19515[(2)] = inst_19469);

(statearr_19494_19515[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19476 === (10))){
var inst_19458 = (state_19475[(2)]);
var state_19475__$1 = state_19475;
var statearr_19495_19516 = state_19475__$1;
(statearr_19495_19516[(2)] = inst_19458);

(statearr_19495_19516[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19476 === (8))){
var inst_19439 = (state_19475[(9)]);
var inst_19435 = (state_19475[(8)]);
var inst_19443 = (state_19475[(10)]);
var inst_19448 = inst_19435.push(inst_19439);
var tmp19492 = inst_19435;
var inst_19435__$1 = tmp19492;
var inst_19436 = inst_19443;
var state_19475__$1 = (function (){var statearr_19496 = state_19475;
(statearr_19496[(7)] = inst_19436);

(statearr_19496[(8)] = inst_19435__$1);

(statearr_19496[(14)] = inst_19448);

return statearr_19496;
})();
var statearr_19497_19517 = state_19475__$1;
(statearr_19497_19517[(2)] = null);

(statearr_19497_19517[(1)] = (2));


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
});})(c__15729__auto___19503,out))
;
return ((function (switch__15546__auto__,c__15729__auto___19503,out){
return (function() {
var cljs$core$async$state_machine__15547__auto__ = null;
var cljs$core$async$state_machine__15547__auto____0 = (function (){
var statearr_19498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19498[(0)] = cljs$core$async$state_machine__15547__auto__);

(statearr_19498[(1)] = (1));

return statearr_19498;
});
var cljs$core$async$state_machine__15547__auto____1 = (function (state_19475){
while(true){
var ret_value__15548__auto__ = (function (){try{while(true){
var result__15549__auto__ = switch__15546__auto__(state_19475);
if(cljs.core.keyword_identical_QMARK_(result__15549__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15549__auto__;
}
break;
}
}catch (e19499){if((e19499 instanceof Object)){
var ex__15550__auto__ = e19499;
var statearr_19500_19518 = state_19475;
(statearr_19500_19518[(5)] = ex__15550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19475);

return cljs.core.cst$kw$recur;
} else {
throw e19499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15548__auto__,cljs.core.cst$kw$recur)){
var G__19519 = state_19475;
state_19475 = G__19519;
continue;
} else {
return ret_value__15548__auto__;
}
break;
}
});
cljs$core$async$state_machine__15547__auto__ = function(state_19475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15547__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15547__auto____1.call(this,state_19475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15547__auto____0;
cljs$core$async$state_machine__15547__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15547__auto____1;
return cljs$core$async$state_machine__15547__auto__;
})()
;})(switch__15546__auto__,c__15729__auto___19503,out))
})();
var state__15731__auto__ = (function (){var statearr_19501 = (f__15730__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15730__auto__.cljs$core$IFn$_invoke$arity$0() : f__15730__auto__.call(null));
(statearr_19501[(6)] = c__15729__auto___19503);

return statearr_19501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15731__auto__);
});})(c__15729__auto___19503,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

