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
var G__17846 = arguments.length;
switch (G__17846) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17847 = (function (f,blockable,meta17848){
this.f = f;
this.blockable = blockable;
this.meta17848 = meta17848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17849,meta17848__$1){
var self__ = this;
var _17849__$1 = this;
return (new cljs.core.async.t_cljs$core$async17847(self__.f,self__.blockable,meta17848__$1));
});

cljs.core.async.t_cljs$core$async17847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17849){
var self__ = this;
var _17849__$1 = this;
return self__.meta17848;
});

cljs.core.async.t_cljs$core$async17847.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17848], null);
});

cljs.core.async.t_cljs$core$async17847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17847";

cljs.core.async.t_cljs$core$async17847.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17847");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17847.
 */
cljs.core.async.__GT_t_cljs$core$async17847 = (function cljs$core$async$__GT_t_cljs$core$async17847(f__$1,blockable__$1,meta17848){
return (new cljs.core.async.t_cljs$core$async17847(f__$1,blockable__$1,meta17848));
});

}

return (new cljs.core.async.t_cljs$core$async17847(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17853 = arguments.length;
switch (G__17853) {
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
var G__17856 = arguments.length;
switch (G__17856) {
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
var G__17859 = arguments.length;
switch (G__17859) {
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
var val_17861 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17861) : fn1.call(null,val_17861));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17861,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17861) : fn1.call(null,val_17861));
});})(val_17861,ret))
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
var G__17863 = arguments.length;
switch (G__17863) {
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
var n__4408__auto___17865 = n;
var x_17866 = (0);
while(true){
if((x_17866 < n__4408__auto___17865)){
(a[x_17866] = x_17866);

var G__17867 = (x_17866 + (1));
x_17866 = G__17867;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17868 = (function (flag,meta17869){
this.flag = flag;
this.meta17869 = meta17869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17870,meta17869__$1){
var self__ = this;
var _17870__$1 = this;
return (new cljs.core.async.t_cljs$core$async17868(self__.flag,meta17869__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17870){
var self__ = this;
var _17870__$1 = this;
return self__.meta17869;
});})(flag))
;

cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17868.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17869], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17868";

cljs.core.async.t_cljs$core$async17868.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17868");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17868.
 */
cljs.core.async.__GT_t_cljs$core$async17868 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17868(flag__$1,meta17869){
return (new cljs.core.async.t_cljs$core$async17868(flag__$1,meta17869));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17868(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17871 = (function (flag,cb,meta17872){
this.flag = flag;
this.cb = cb;
this.meta17872 = meta17872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17873,meta17872__$1){
var self__ = this;
var _17873__$1 = this;
return (new cljs.core.async.t_cljs$core$async17871(self__.flag,self__.cb,meta17872__$1));
});

cljs.core.async.t_cljs$core$async17871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17873){
var self__ = this;
var _17873__$1 = this;
return self__.meta17872;
});

cljs.core.async.t_cljs$core$async17871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17872], null);
});

cljs.core.async.t_cljs$core$async17871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17871";

cljs.core.async.t_cljs$core$async17871.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17871");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17871.
 */
cljs.core.async.__GT_t_cljs$core$async17871 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17871(flag__$1,cb__$1,meta17872){
return (new cljs.core.async.t_cljs$core$async17871(flag__$1,cb__$1,meta17872));
});

}

return (new cljs.core.async.t_cljs$core$async17871(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17874_SHARP_){
var G__17876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17874_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17876) : fret.call(null,G__17876));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17875_SHARP_){
var G__17877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17875_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17877) : fret.call(null,G__17877));
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
var G__17878 = (i + (1));
i = G__17878;
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
var len__4531__auto___17884 = arguments.length;
var i__4532__auto___17885 = (0);
while(true){
if((i__4532__auto___17885 < len__4531__auto___17884)){
args__4534__auto__.push((arguments[i__4532__auto___17885]));

var G__17886 = (i__4532__auto___17885 + (1));
i__4532__auto___17885 = G__17886;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17881){
var map__17882 = p__17881;
var map__17882__$1 = ((((!((map__17882 == null)))?(((((map__17882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17882):map__17882);
var opts = map__17882__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17879){
var G__17880 = cljs.core.first(seq17879);
var seq17879__$1 = cljs.core.next(seq17879);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17880,seq17879__$1);
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
var G__17888 = arguments.length;
switch (G__17888) {
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
var c__15919__auto___17934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___17934){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___17934){
return (function (state_17912){
var state_val_17913 = (state_17912[(1)]);
if((state_val_17913 === (7))){
var inst_17908 = (state_17912[(2)]);
var state_17912__$1 = state_17912;
var statearr_17914_17935 = state_17912__$1;
(statearr_17914_17935[(2)] = inst_17908);

(statearr_17914_17935[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17913 === (1))){
var state_17912__$1 = state_17912;
var statearr_17915_17936 = state_17912__$1;
(statearr_17915_17936[(2)] = null);

(statearr_17915_17936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17913 === (4))){
var inst_17891 = (state_17912[(7)]);
var inst_17891__$1 = (state_17912[(2)]);
var inst_17892 = (inst_17891__$1 == null);
var state_17912__$1 = (function (){var statearr_17916 = state_17912;
(statearr_17916[(7)] = inst_17891__$1);

return statearr_17916;
})();
if(cljs.core.truth_(inst_17892)){
var statearr_17917_17937 = state_17912__$1;
(statearr_17917_17937[(1)] = (5));

} else {
var statearr_17918_17938 = state_17912__$1;
(statearr_17918_17938[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17913 === (13))){
var state_17912__$1 = state_17912;
var statearr_17919_17939 = state_17912__$1;
(statearr_17919_17939[(2)] = null);

(statearr_17919_17939[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17913 === (6))){
var inst_17891 = (state_17912[(7)]);
var state_17912__$1 = state_17912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17912__$1,(11),to,inst_17891);
} else {
if((state_val_17913 === (3))){
var inst_17910 = (state_17912[(2)]);
var state_17912__$1 = state_17912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17912__$1,inst_17910);
} else {
if((state_val_17913 === (12))){
var state_17912__$1 = state_17912;
var statearr_17920_17940 = state_17912__$1;
(statearr_17920_17940[(2)] = null);

(statearr_17920_17940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17913 === (2))){
var state_17912__$1 = state_17912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17912__$1,(4),from);
} else {
if((state_val_17913 === (11))){
var inst_17901 = (state_17912[(2)]);
var state_17912__$1 = state_17912;
if(cljs.core.truth_(inst_17901)){
var statearr_17921_17941 = state_17912__$1;
(statearr_17921_17941[(1)] = (12));

} else {
var statearr_17922_17942 = state_17912__$1;
(statearr_17922_17942[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17913 === (9))){
var state_17912__$1 = state_17912;
var statearr_17923_17943 = state_17912__$1;
(statearr_17923_17943[(2)] = null);

(statearr_17923_17943[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17913 === (5))){
var state_17912__$1 = state_17912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17924_17944 = state_17912__$1;
(statearr_17924_17944[(1)] = (8));

} else {
var statearr_17925_17945 = state_17912__$1;
(statearr_17925_17945[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17913 === (14))){
var inst_17906 = (state_17912[(2)]);
var state_17912__$1 = state_17912;
var statearr_17926_17946 = state_17912__$1;
(statearr_17926_17946[(2)] = inst_17906);

(statearr_17926_17946[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17913 === (10))){
var inst_17898 = (state_17912[(2)]);
var state_17912__$1 = state_17912;
var statearr_17927_17947 = state_17912__$1;
(statearr_17927_17947[(2)] = inst_17898);

(statearr_17927_17947[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17913 === (8))){
var inst_17895 = cljs.core.async.close_BANG_(to);
var state_17912__$1 = state_17912;
var statearr_17928_17948 = state_17912__$1;
(statearr_17928_17948[(2)] = inst_17895);

(statearr_17928_17948[(1)] = (10));


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
});})(c__15919__auto___17934))
;
return ((function (switch__15736__auto__,c__15919__auto___17934){
return (function() {
var cljs$core$async$state_machine__15737__auto__ = null;
var cljs$core$async$state_machine__15737__auto____0 = (function (){
var statearr_17929 = [null,null,null,null,null,null,null,null];
(statearr_17929[(0)] = cljs$core$async$state_machine__15737__auto__);

(statearr_17929[(1)] = (1));

return statearr_17929;
});
var cljs$core$async$state_machine__15737__auto____1 = (function (state_17912){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_17912);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e17930){if((e17930 instanceof Object)){
var ex__15740__auto__ = e17930;
var statearr_17931_17949 = state_17912;
(statearr_17931_17949[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17912);

return cljs.core.cst$kw$recur;
} else {
throw e17930;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__17950 = state_17912;
state_17912 = G__17950;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$state_machine__15737__auto__ = function(state_17912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15737__auto____1.call(this,state_17912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15737__auto____0;
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15737__auto____1;
return cljs$core$async$state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___17934))
})();
var state__15921__auto__ = (function (){var statearr_17932 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_17932[(6)] = c__15919__auto___17934);

return statearr_17932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___17934))
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
return (function (p__17951){
var vec__17952 = p__17951;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17952,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17952,(1),null);
var job = vec__17952;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15919__auto___18123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___18123,res,vec__17952,v,p,job,jobs,results){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___18123,res,vec__17952,v,p,job,jobs,results){
return (function (state_17959){
var state_val_17960 = (state_17959[(1)]);
if((state_val_17960 === (1))){
var state_17959__$1 = state_17959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17959__$1,(2),res,v);
} else {
if((state_val_17960 === (2))){
var inst_17956 = (state_17959[(2)]);
var inst_17957 = cljs.core.async.close_BANG_(res);
var state_17959__$1 = (function (){var statearr_17961 = state_17959;
(statearr_17961[(7)] = inst_17956);

return statearr_17961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17959__$1,inst_17957);
} else {
return null;
}
}
});})(c__15919__auto___18123,res,vec__17952,v,p,job,jobs,results))
;
return ((function (switch__15736__auto__,c__15919__auto___18123,res,vec__17952,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0 = (function (){
var statearr_17962 = [null,null,null,null,null,null,null,null];
(statearr_17962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__);

(statearr_17962[(1)] = (1));

return statearr_17962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1 = (function (state_17959){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_17959);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e17963){if((e17963 instanceof Object)){
var ex__15740__auto__ = e17963;
var statearr_17964_18124 = state_17959;
(statearr_17964_18124[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17959);

return cljs.core.cst$kw$recur;
} else {
throw e17963;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__18125 = state_17959;
state_17959 = G__18125;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__ = function(state_17959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1.call(this,state_17959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___18123,res,vec__17952,v,p,job,jobs,results))
})();
var state__15921__auto__ = (function (){var statearr_17965 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_17965[(6)] = c__15919__auto___18123);

return statearr_17965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___18123,res,vec__17952,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17966){
var vec__17967 = p__17966;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17967,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17967,(1),null);
var job = vec__17967;
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
var n__4408__auto___18126 = n;
var __18127 = (0);
while(true){
if((__18127 < n__4408__auto___18126)){
var G__17970_18128 = type;
var G__17970_18129__$1 = (((G__17970_18128 instanceof cljs.core.Keyword))?G__17970_18128.fqn:null);
switch (G__17970_18129__$1) {
case "compute":
var c__15919__auto___18131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18127,c__15919__auto___18131,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (__18127,c__15919__auto___18131,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async){
return (function (state_17983){
var state_val_17984 = (state_17983[(1)]);
if((state_val_17984 === (1))){
var state_17983__$1 = state_17983;
var statearr_17985_18132 = state_17983__$1;
(statearr_17985_18132[(2)] = null);

(statearr_17985_18132[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (2))){
var state_17983__$1 = state_17983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17983__$1,(4),jobs);
} else {
if((state_val_17984 === (3))){
var inst_17981 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17983__$1,inst_17981);
} else {
if((state_val_17984 === (4))){
var inst_17973 = (state_17983[(2)]);
var inst_17974 = process(inst_17973);
var state_17983__$1 = state_17983;
if(cljs.core.truth_(inst_17974)){
var statearr_17986_18133 = state_17983__$1;
(statearr_17986_18133[(1)] = (5));

} else {
var statearr_17987_18134 = state_17983__$1;
(statearr_17987_18134[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (5))){
var state_17983__$1 = state_17983;
var statearr_17988_18135 = state_17983__$1;
(statearr_17988_18135[(2)] = null);

(statearr_17988_18135[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (6))){
var state_17983__$1 = state_17983;
var statearr_17989_18136 = state_17983__$1;
(statearr_17989_18136[(2)] = null);

(statearr_17989_18136[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17984 === (7))){
var inst_17979 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
var statearr_17990_18137 = state_17983__$1;
(statearr_17990_18137[(2)] = inst_17979);

(statearr_17990_18137[(1)] = (3));


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
});})(__18127,c__15919__auto___18131,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async))
;
return ((function (__18127,switch__15736__auto__,c__15919__auto___18131,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0 = (function (){
var statearr_17991 = [null,null,null,null,null,null,null];
(statearr_17991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__);

(statearr_17991[(1)] = (1));

return statearr_17991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1 = (function (state_17983){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_17983);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e17992){if((e17992 instanceof Object)){
var ex__15740__auto__ = e17992;
var statearr_17993_18138 = state_17983;
(statearr_17993_18138[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17983);

return cljs.core.cst$kw$recur;
} else {
throw e17992;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__18139 = state_17983;
state_17983 = G__18139;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__ = function(state_17983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1.call(this,state_17983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__;
})()
;})(__18127,switch__15736__auto__,c__15919__auto___18131,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async))
})();
var state__15921__auto__ = (function (){var statearr_17994 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_17994[(6)] = c__15919__auto___18131);

return statearr_17994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(__18127,c__15919__auto___18131,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async))
);


break;
case "async":
var c__15919__auto___18140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18127,c__15919__auto___18140,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (__18127,c__15919__auto___18140,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async){
return (function (state_18007){
var state_val_18008 = (state_18007[(1)]);
if((state_val_18008 === (1))){
var state_18007__$1 = state_18007;
var statearr_18009_18141 = state_18007__$1;
(statearr_18009_18141[(2)] = null);

(statearr_18009_18141[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (2))){
var state_18007__$1 = state_18007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18007__$1,(4),jobs);
} else {
if((state_val_18008 === (3))){
var inst_18005 = (state_18007[(2)]);
var state_18007__$1 = state_18007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18007__$1,inst_18005);
} else {
if((state_val_18008 === (4))){
var inst_17997 = (state_18007[(2)]);
var inst_17998 = async(inst_17997);
var state_18007__$1 = state_18007;
if(cljs.core.truth_(inst_17998)){
var statearr_18010_18142 = state_18007__$1;
(statearr_18010_18142[(1)] = (5));

} else {
var statearr_18011_18143 = state_18007__$1;
(statearr_18011_18143[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (5))){
var state_18007__$1 = state_18007;
var statearr_18012_18144 = state_18007__$1;
(statearr_18012_18144[(2)] = null);

(statearr_18012_18144[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (6))){
var state_18007__$1 = state_18007;
var statearr_18013_18145 = state_18007__$1;
(statearr_18013_18145[(2)] = null);

(statearr_18013_18145[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18008 === (7))){
var inst_18003 = (state_18007[(2)]);
var state_18007__$1 = state_18007;
var statearr_18014_18146 = state_18007__$1;
(statearr_18014_18146[(2)] = inst_18003);

(statearr_18014_18146[(1)] = (3));


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
});})(__18127,c__15919__auto___18140,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async))
;
return ((function (__18127,switch__15736__auto__,c__15919__auto___18140,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0 = (function (){
var statearr_18015 = [null,null,null,null,null,null,null];
(statearr_18015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__);

(statearr_18015[(1)] = (1));

return statearr_18015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1 = (function (state_18007){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_18007);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e18016){if((e18016 instanceof Object)){
var ex__15740__auto__ = e18016;
var statearr_18017_18147 = state_18007;
(statearr_18017_18147[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18007);

return cljs.core.cst$kw$recur;
} else {
throw e18016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__18148 = state_18007;
state_18007 = G__18148;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__ = function(state_18007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1.call(this,state_18007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__;
})()
;})(__18127,switch__15736__auto__,c__15919__auto___18140,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async))
})();
var state__15921__auto__ = (function (){var statearr_18018 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_18018[(6)] = c__15919__auto___18140);

return statearr_18018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(__18127,c__15919__auto___18140,G__17970_18128,G__17970_18129__$1,n__4408__auto___18126,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17970_18129__$1)].join('')));

}

var G__18149 = (__18127 + (1));
__18127 = G__18149;
continue;
} else {
}
break;
}

var c__15919__auto___18150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___18150,jobs,results,process,async){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___18150,jobs,results,process,async){
return (function (state_18040){
var state_val_18041 = (state_18040[(1)]);
if((state_val_18041 === (1))){
var state_18040__$1 = state_18040;
var statearr_18042_18151 = state_18040__$1;
(statearr_18042_18151[(2)] = null);

(statearr_18042_18151[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18041 === (2))){
var state_18040__$1 = state_18040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18040__$1,(4),from);
} else {
if((state_val_18041 === (3))){
var inst_18038 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18040__$1,inst_18038);
} else {
if((state_val_18041 === (4))){
var inst_18021 = (state_18040[(7)]);
var inst_18021__$1 = (state_18040[(2)]);
var inst_18022 = (inst_18021__$1 == null);
var state_18040__$1 = (function (){var statearr_18043 = state_18040;
(statearr_18043[(7)] = inst_18021__$1);

return statearr_18043;
})();
if(cljs.core.truth_(inst_18022)){
var statearr_18044_18152 = state_18040__$1;
(statearr_18044_18152[(1)] = (5));

} else {
var statearr_18045_18153 = state_18040__$1;
(statearr_18045_18153[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18041 === (5))){
var inst_18024 = cljs.core.async.close_BANG_(jobs);
var state_18040__$1 = state_18040;
var statearr_18046_18154 = state_18040__$1;
(statearr_18046_18154[(2)] = inst_18024);

(statearr_18046_18154[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18041 === (6))){
var inst_18026 = (state_18040[(8)]);
var inst_18021 = (state_18040[(7)]);
var inst_18026__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18027 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18028 = [inst_18021,inst_18026__$1];
var inst_18029 = (new cljs.core.PersistentVector(null,2,(5),inst_18027,inst_18028,null));
var state_18040__$1 = (function (){var statearr_18047 = state_18040;
(statearr_18047[(8)] = inst_18026__$1);

return statearr_18047;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18040__$1,(8),jobs,inst_18029);
} else {
if((state_val_18041 === (7))){
var inst_18036 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
var statearr_18048_18155 = state_18040__$1;
(statearr_18048_18155[(2)] = inst_18036);

(statearr_18048_18155[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18041 === (8))){
var inst_18026 = (state_18040[(8)]);
var inst_18031 = (state_18040[(2)]);
var state_18040__$1 = (function (){var statearr_18049 = state_18040;
(statearr_18049[(9)] = inst_18031);

return statearr_18049;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18040__$1,(9),results,inst_18026);
} else {
if((state_val_18041 === (9))){
var inst_18033 = (state_18040[(2)]);
var state_18040__$1 = (function (){var statearr_18050 = state_18040;
(statearr_18050[(10)] = inst_18033);

return statearr_18050;
})();
var statearr_18051_18156 = state_18040__$1;
(statearr_18051_18156[(2)] = null);

(statearr_18051_18156[(1)] = (2));


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
});})(c__15919__auto___18150,jobs,results,process,async))
;
return ((function (switch__15736__auto__,c__15919__auto___18150,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0 = (function (){
var statearr_18052 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__);

(statearr_18052[(1)] = (1));

return statearr_18052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1 = (function (state_18040){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_18040);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e18053){if((e18053 instanceof Object)){
var ex__15740__auto__ = e18053;
var statearr_18054_18157 = state_18040;
(statearr_18054_18157[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18040);

return cljs.core.cst$kw$recur;
} else {
throw e18053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__18158 = state_18040;
state_18040 = G__18158;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__ = function(state_18040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1.call(this,state_18040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___18150,jobs,results,process,async))
})();
var state__15921__auto__ = (function (){var statearr_18055 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_18055[(6)] = c__15919__auto___18150);

return statearr_18055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___18150,jobs,results,process,async))
);


var c__15919__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto__,jobs,results,process,async){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto__,jobs,results,process,async){
return (function (state_18093){
var state_val_18094 = (state_18093[(1)]);
if((state_val_18094 === (7))){
var inst_18089 = (state_18093[(2)]);
var state_18093__$1 = state_18093;
var statearr_18095_18159 = state_18093__$1;
(statearr_18095_18159[(2)] = inst_18089);

(statearr_18095_18159[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (20))){
var state_18093__$1 = state_18093;
var statearr_18096_18160 = state_18093__$1;
(statearr_18096_18160[(2)] = null);

(statearr_18096_18160[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (1))){
var state_18093__$1 = state_18093;
var statearr_18097_18161 = state_18093__$1;
(statearr_18097_18161[(2)] = null);

(statearr_18097_18161[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (4))){
var inst_18058 = (state_18093[(7)]);
var inst_18058__$1 = (state_18093[(2)]);
var inst_18059 = (inst_18058__$1 == null);
var state_18093__$1 = (function (){var statearr_18098 = state_18093;
(statearr_18098[(7)] = inst_18058__$1);

return statearr_18098;
})();
if(cljs.core.truth_(inst_18059)){
var statearr_18099_18162 = state_18093__$1;
(statearr_18099_18162[(1)] = (5));

} else {
var statearr_18100_18163 = state_18093__$1;
(statearr_18100_18163[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (15))){
var inst_18071 = (state_18093[(8)]);
var state_18093__$1 = state_18093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18093__$1,(18),to,inst_18071);
} else {
if((state_val_18094 === (21))){
var inst_18084 = (state_18093[(2)]);
var state_18093__$1 = state_18093;
var statearr_18101_18164 = state_18093__$1;
(statearr_18101_18164[(2)] = inst_18084);

(statearr_18101_18164[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (13))){
var inst_18086 = (state_18093[(2)]);
var state_18093__$1 = (function (){var statearr_18102 = state_18093;
(statearr_18102[(9)] = inst_18086);

return statearr_18102;
})();
var statearr_18103_18165 = state_18093__$1;
(statearr_18103_18165[(2)] = null);

(statearr_18103_18165[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (6))){
var inst_18058 = (state_18093[(7)]);
var state_18093__$1 = state_18093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18093__$1,(11),inst_18058);
} else {
if((state_val_18094 === (17))){
var inst_18079 = (state_18093[(2)]);
var state_18093__$1 = state_18093;
if(cljs.core.truth_(inst_18079)){
var statearr_18104_18166 = state_18093__$1;
(statearr_18104_18166[(1)] = (19));

} else {
var statearr_18105_18167 = state_18093__$1;
(statearr_18105_18167[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (3))){
var inst_18091 = (state_18093[(2)]);
var state_18093__$1 = state_18093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18093__$1,inst_18091);
} else {
if((state_val_18094 === (12))){
var inst_18068 = (state_18093[(10)]);
var state_18093__$1 = state_18093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18093__$1,(14),inst_18068);
} else {
if((state_val_18094 === (2))){
var state_18093__$1 = state_18093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18093__$1,(4),results);
} else {
if((state_val_18094 === (19))){
var state_18093__$1 = state_18093;
var statearr_18106_18168 = state_18093__$1;
(statearr_18106_18168[(2)] = null);

(statearr_18106_18168[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (11))){
var inst_18068 = (state_18093[(2)]);
var state_18093__$1 = (function (){var statearr_18107 = state_18093;
(statearr_18107[(10)] = inst_18068);

return statearr_18107;
})();
var statearr_18108_18169 = state_18093__$1;
(statearr_18108_18169[(2)] = null);

(statearr_18108_18169[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (9))){
var state_18093__$1 = state_18093;
var statearr_18109_18170 = state_18093__$1;
(statearr_18109_18170[(2)] = null);

(statearr_18109_18170[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (5))){
var state_18093__$1 = state_18093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18110_18171 = state_18093__$1;
(statearr_18110_18171[(1)] = (8));

} else {
var statearr_18111_18172 = state_18093__$1;
(statearr_18111_18172[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (14))){
var inst_18073 = (state_18093[(11)]);
var inst_18071 = (state_18093[(8)]);
var inst_18071__$1 = (state_18093[(2)]);
var inst_18072 = (inst_18071__$1 == null);
var inst_18073__$1 = cljs.core.not(inst_18072);
var state_18093__$1 = (function (){var statearr_18112 = state_18093;
(statearr_18112[(11)] = inst_18073__$1);

(statearr_18112[(8)] = inst_18071__$1);

return statearr_18112;
})();
if(inst_18073__$1){
var statearr_18113_18173 = state_18093__$1;
(statearr_18113_18173[(1)] = (15));

} else {
var statearr_18114_18174 = state_18093__$1;
(statearr_18114_18174[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (16))){
var inst_18073 = (state_18093[(11)]);
var state_18093__$1 = state_18093;
var statearr_18115_18175 = state_18093__$1;
(statearr_18115_18175[(2)] = inst_18073);

(statearr_18115_18175[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (10))){
var inst_18065 = (state_18093[(2)]);
var state_18093__$1 = state_18093;
var statearr_18116_18176 = state_18093__$1;
(statearr_18116_18176[(2)] = inst_18065);

(statearr_18116_18176[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (18))){
var inst_18076 = (state_18093[(2)]);
var state_18093__$1 = state_18093;
var statearr_18117_18177 = state_18093__$1;
(statearr_18117_18177[(2)] = inst_18076);

(statearr_18117_18177[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18094 === (8))){
var inst_18062 = cljs.core.async.close_BANG_(to);
var state_18093__$1 = state_18093;
var statearr_18118_18178 = state_18093__$1;
(statearr_18118_18178[(2)] = inst_18062);

(statearr_18118_18178[(1)] = (10));


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
});})(c__15919__auto__,jobs,results,process,async))
;
return ((function (switch__15736__auto__,c__15919__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0 = (function (){
var statearr_18119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__);

(statearr_18119[(1)] = (1));

return statearr_18119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1 = (function (state_18093){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_18093);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e18120){if((e18120 instanceof Object)){
var ex__15740__auto__ = e18120;
var statearr_18121_18179 = state_18093;
(statearr_18121_18179[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18093);

return cljs.core.cst$kw$recur;
} else {
throw e18120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__18180 = state_18093;
state_18093 = G__18180;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__ = function(state_18093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1.call(this,state_18093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15737__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto__,jobs,results,process,async))
})();
var state__15921__auto__ = (function (){var statearr_18122 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_18122[(6)] = c__15919__auto__);

return statearr_18122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto__,jobs,results,process,async))
);

return c__15919__auto__;
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
var G__18182 = arguments.length;
switch (G__18182) {
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
var G__18185 = arguments.length;
switch (G__18185) {
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
var G__18188 = arguments.length;
switch (G__18188) {
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
var c__15919__auto___18237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___18237,tc,fc){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___18237,tc,fc){
return (function (state_18214){
var state_val_18215 = (state_18214[(1)]);
if((state_val_18215 === (7))){
var inst_18210 = (state_18214[(2)]);
var state_18214__$1 = state_18214;
var statearr_18216_18238 = state_18214__$1;
(statearr_18216_18238[(2)] = inst_18210);

(statearr_18216_18238[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (1))){
var state_18214__$1 = state_18214;
var statearr_18217_18239 = state_18214__$1;
(statearr_18217_18239[(2)] = null);

(statearr_18217_18239[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (4))){
var inst_18191 = (state_18214[(7)]);
var inst_18191__$1 = (state_18214[(2)]);
var inst_18192 = (inst_18191__$1 == null);
var state_18214__$1 = (function (){var statearr_18218 = state_18214;
(statearr_18218[(7)] = inst_18191__$1);

return statearr_18218;
})();
if(cljs.core.truth_(inst_18192)){
var statearr_18219_18240 = state_18214__$1;
(statearr_18219_18240[(1)] = (5));

} else {
var statearr_18220_18241 = state_18214__$1;
(statearr_18220_18241[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (13))){
var state_18214__$1 = state_18214;
var statearr_18221_18242 = state_18214__$1;
(statearr_18221_18242[(2)] = null);

(statearr_18221_18242[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (6))){
var inst_18191 = (state_18214[(7)]);
var inst_18197 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18191) : p.call(null,inst_18191));
var state_18214__$1 = state_18214;
if(cljs.core.truth_(inst_18197)){
var statearr_18222_18243 = state_18214__$1;
(statearr_18222_18243[(1)] = (9));

} else {
var statearr_18223_18244 = state_18214__$1;
(statearr_18223_18244[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (3))){
var inst_18212 = (state_18214[(2)]);
var state_18214__$1 = state_18214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18214__$1,inst_18212);
} else {
if((state_val_18215 === (12))){
var state_18214__$1 = state_18214;
var statearr_18224_18245 = state_18214__$1;
(statearr_18224_18245[(2)] = null);

(statearr_18224_18245[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (2))){
var state_18214__$1 = state_18214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18214__$1,(4),ch);
} else {
if((state_val_18215 === (11))){
var inst_18191 = (state_18214[(7)]);
var inst_18201 = (state_18214[(2)]);
var state_18214__$1 = state_18214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18214__$1,(8),inst_18201,inst_18191);
} else {
if((state_val_18215 === (9))){
var state_18214__$1 = state_18214;
var statearr_18225_18246 = state_18214__$1;
(statearr_18225_18246[(2)] = tc);

(statearr_18225_18246[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (5))){
var inst_18194 = cljs.core.async.close_BANG_(tc);
var inst_18195 = cljs.core.async.close_BANG_(fc);
var state_18214__$1 = (function (){var statearr_18226 = state_18214;
(statearr_18226[(8)] = inst_18194);

return statearr_18226;
})();
var statearr_18227_18247 = state_18214__$1;
(statearr_18227_18247[(2)] = inst_18195);

(statearr_18227_18247[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (14))){
var inst_18208 = (state_18214[(2)]);
var state_18214__$1 = state_18214;
var statearr_18228_18248 = state_18214__$1;
(statearr_18228_18248[(2)] = inst_18208);

(statearr_18228_18248[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (10))){
var state_18214__$1 = state_18214;
var statearr_18229_18249 = state_18214__$1;
(statearr_18229_18249[(2)] = fc);

(statearr_18229_18249[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (8))){
var inst_18203 = (state_18214[(2)]);
var state_18214__$1 = state_18214;
if(cljs.core.truth_(inst_18203)){
var statearr_18230_18250 = state_18214__$1;
(statearr_18230_18250[(1)] = (12));

} else {
var statearr_18231_18251 = state_18214__$1;
(statearr_18231_18251[(1)] = (13));

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
});})(c__15919__auto___18237,tc,fc))
;
return ((function (switch__15736__auto__,c__15919__auto___18237,tc,fc){
return (function() {
var cljs$core$async$state_machine__15737__auto__ = null;
var cljs$core$async$state_machine__15737__auto____0 = (function (){
var statearr_18232 = [null,null,null,null,null,null,null,null,null];
(statearr_18232[(0)] = cljs$core$async$state_machine__15737__auto__);

(statearr_18232[(1)] = (1));

return statearr_18232;
});
var cljs$core$async$state_machine__15737__auto____1 = (function (state_18214){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_18214);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e18233){if((e18233 instanceof Object)){
var ex__15740__auto__ = e18233;
var statearr_18234_18252 = state_18214;
(statearr_18234_18252[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18214);

return cljs.core.cst$kw$recur;
} else {
throw e18233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__18253 = state_18214;
state_18214 = G__18253;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$state_machine__15737__auto__ = function(state_18214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15737__auto____1.call(this,state_18214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15737__auto____0;
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15737__auto____1;
return cljs$core$async$state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___18237,tc,fc))
})();
var state__15921__auto__ = (function (){var statearr_18235 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_18235[(6)] = c__15919__auto___18237);

return statearr_18235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___18237,tc,fc))
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
var c__15919__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto__){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto__){
return (function (state_18274){
var state_val_18275 = (state_18274[(1)]);
if((state_val_18275 === (7))){
var inst_18270 = (state_18274[(2)]);
var state_18274__$1 = state_18274;
var statearr_18276_18294 = state_18274__$1;
(statearr_18276_18294[(2)] = inst_18270);

(statearr_18276_18294[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18275 === (1))){
var inst_18254 = init;
var state_18274__$1 = (function (){var statearr_18277 = state_18274;
(statearr_18277[(7)] = inst_18254);

return statearr_18277;
})();
var statearr_18278_18295 = state_18274__$1;
(statearr_18278_18295[(2)] = null);

(statearr_18278_18295[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18275 === (4))){
var inst_18257 = (state_18274[(8)]);
var inst_18257__$1 = (state_18274[(2)]);
var inst_18258 = (inst_18257__$1 == null);
var state_18274__$1 = (function (){var statearr_18279 = state_18274;
(statearr_18279[(8)] = inst_18257__$1);

return statearr_18279;
})();
if(cljs.core.truth_(inst_18258)){
var statearr_18280_18296 = state_18274__$1;
(statearr_18280_18296[(1)] = (5));

} else {
var statearr_18281_18297 = state_18274__$1;
(statearr_18281_18297[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18275 === (6))){
var inst_18254 = (state_18274[(7)]);
var inst_18261 = (state_18274[(9)]);
var inst_18257 = (state_18274[(8)]);
var inst_18261__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18254,inst_18257) : f.call(null,inst_18254,inst_18257));
var inst_18262 = cljs.core.reduced_QMARK_(inst_18261__$1);
var state_18274__$1 = (function (){var statearr_18282 = state_18274;
(statearr_18282[(9)] = inst_18261__$1);

return statearr_18282;
})();
if(inst_18262){
var statearr_18283_18298 = state_18274__$1;
(statearr_18283_18298[(1)] = (8));

} else {
var statearr_18284_18299 = state_18274__$1;
(statearr_18284_18299[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18275 === (3))){
var inst_18272 = (state_18274[(2)]);
var state_18274__$1 = state_18274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18274__$1,inst_18272);
} else {
if((state_val_18275 === (2))){
var state_18274__$1 = state_18274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18274__$1,(4),ch);
} else {
if((state_val_18275 === (9))){
var inst_18261 = (state_18274[(9)]);
var inst_18254 = inst_18261;
var state_18274__$1 = (function (){var statearr_18285 = state_18274;
(statearr_18285[(7)] = inst_18254);

return statearr_18285;
})();
var statearr_18286_18300 = state_18274__$1;
(statearr_18286_18300[(2)] = null);

(statearr_18286_18300[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18275 === (5))){
var inst_18254 = (state_18274[(7)]);
var state_18274__$1 = state_18274;
var statearr_18287_18301 = state_18274__$1;
(statearr_18287_18301[(2)] = inst_18254);

(statearr_18287_18301[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18275 === (10))){
var inst_18268 = (state_18274[(2)]);
var state_18274__$1 = state_18274;
var statearr_18288_18302 = state_18274__$1;
(statearr_18288_18302[(2)] = inst_18268);

(statearr_18288_18302[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18275 === (8))){
var inst_18261 = (state_18274[(9)]);
var inst_18264 = cljs.core.deref(inst_18261);
var state_18274__$1 = state_18274;
var statearr_18289_18303 = state_18274__$1;
(statearr_18289_18303[(2)] = inst_18264);

(statearr_18289_18303[(1)] = (10));


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
});})(c__15919__auto__))
;
return ((function (switch__15736__auto__,c__15919__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15737__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15737__auto____0 = (function (){
var statearr_18290 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18290[(0)] = cljs$core$async$reduce_$_state_machine__15737__auto__);

(statearr_18290[(1)] = (1));

return statearr_18290;
});
var cljs$core$async$reduce_$_state_machine__15737__auto____1 = (function (state_18274){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_18274);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e18291){if((e18291 instanceof Object)){
var ex__15740__auto__ = e18291;
var statearr_18292_18304 = state_18274;
(statearr_18292_18304[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18274);

return cljs.core.cst$kw$recur;
} else {
throw e18291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__18305 = state_18274;
state_18274 = G__18305;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15737__auto__ = function(state_18274){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15737__auto____1.call(this,state_18274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15737__auto____0;
cljs$core$async$reduce_$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15737__auto____1;
return cljs$core$async$reduce_$_state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto__))
})();
var state__15921__auto__ = (function (){var statearr_18293 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_18293[(6)] = c__15919__auto__);

return statearr_18293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto__))
);

return c__15919__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15919__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto__,f__$1){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto__,f__$1){
return (function (state_18311){
var state_val_18312 = (state_18311[(1)]);
if((state_val_18312 === (1))){
var inst_18306 = cljs.core.async.reduce(f__$1,init,ch);
var state_18311__$1 = state_18311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18311__$1,(2),inst_18306);
} else {
if((state_val_18312 === (2))){
var inst_18308 = (state_18311[(2)]);
var inst_18309 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18308) : f__$1.call(null,inst_18308));
var state_18311__$1 = state_18311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18311__$1,inst_18309);
} else {
return null;
}
}
});})(c__15919__auto__,f__$1))
;
return ((function (switch__15736__auto__,c__15919__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15737__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15737__auto____0 = (function (){
var statearr_18313 = [null,null,null,null,null,null,null];
(statearr_18313[(0)] = cljs$core$async$transduce_$_state_machine__15737__auto__);

(statearr_18313[(1)] = (1));

return statearr_18313;
});
var cljs$core$async$transduce_$_state_machine__15737__auto____1 = (function (state_18311){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_18311);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e18314){if((e18314 instanceof Object)){
var ex__15740__auto__ = e18314;
var statearr_18315_18317 = state_18311;
(statearr_18315_18317[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18311);

return cljs.core.cst$kw$recur;
} else {
throw e18314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__18318 = state_18311;
state_18311 = G__18318;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15737__auto__ = function(state_18311){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15737__auto____1.call(this,state_18311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15737__auto____0;
cljs$core$async$transduce_$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15737__auto____1;
return cljs$core$async$transduce_$_state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto__,f__$1))
})();
var state__15921__auto__ = (function (){var statearr_18316 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_18316[(6)] = c__15919__auto__);

return statearr_18316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto__,f__$1))
);

return c__15919__auto__;
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
var G__18320 = arguments.length;
switch (G__18320) {
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
var c__15919__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto__){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto__){
return (function (state_18345){
var state_val_18346 = (state_18345[(1)]);
if((state_val_18346 === (7))){
var inst_18327 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18347_18368 = state_18345__$1;
(statearr_18347_18368[(2)] = inst_18327);

(statearr_18347_18368[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18346 === (1))){
var inst_18321 = cljs.core.seq(coll);
var inst_18322 = inst_18321;
var state_18345__$1 = (function (){var statearr_18348 = state_18345;
(statearr_18348[(7)] = inst_18322);

return statearr_18348;
})();
var statearr_18349_18369 = state_18345__$1;
(statearr_18349_18369[(2)] = null);

(statearr_18349_18369[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18346 === (4))){
var inst_18322 = (state_18345[(7)]);
var inst_18325 = cljs.core.first(inst_18322);
var state_18345__$1 = state_18345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18345__$1,(7),ch,inst_18325);
} else {
if((state_val_18346 === (13))){
var inst_18339 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18350_18370 = state_18345__$1;
(statearr_18350_18370[(2)] = inst_18339);

(statearr_18350_18370[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18346 === (6))){
var inst_18330 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
if(cljs.core.truth_(inst_18330)){
var statearr_18351_18371 = state_18345__$1;
(statearr_18351_18371[(1)] = (8));

} else {
var statearr_18352_18372 = state_18345__$1;
(statearr_18352_18372[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18346 === (3))){
var inst_18343 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18345__$1,inst_18343);
} else {
if((state_val_18346 === (12))){
var state_18345__$1 = state_18345;
var statearr_18353_18373 = state_18345__$1;
(statearr_18353_18373[(2)] = null);

(statearr_18353_18373[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18346 === (2))){
var inst_18322 = (state_18345[(7)]);
var state_18345__$1 = state_18345;
if(cljs.core.truth_(inst_18322)){
var statearr_18354_18374 = state_18345__$1;
(statearr_18354_18374[(1)] = (4));

} else {
var statearr_18355_18375 = state_18345__$1;
(statearr_18355_18375[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18346 === (11))){
var inst_18336 = cljs.core.async.close_BANG_(ch);
var state_18345__$1 = state_18345;
var statearr_18356_18376 = state_18345__$1;
(statearr_18356_18376[(2)] = inst_18336);

(statearr_18356_18376[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18346 === (9))){
var state_18345__$1 = state_18345;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18357_18377 = state_18345__$1;
(statearr_18357_18377[(1)] = (11));

} else {
var statearr_18358_18378 = state_18345__$1;
(statearr_18358_18378[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18346 === (5))){
var inst_18322 = (state_18345[(7)]);
var state_18345__$1 = state_18345;
var statearr_18359_18379 = state_18345__$1;
(statearr_18359_18379[(2)] = inst_18322);

(statearr_18359_18379[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18346 === (10))){
var inst_18341 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18360_18380 = state_18345__$1;
(statearr_18360_18380[(2)] = inst_18341);

(statearr_18360_18380[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18346 === (8))){
var inst_18322 = (state_18345[(7)]);
var inst_18332 = cljs.core.next(inst_18322);
var inst_18322__$1 = inst_18332;
var state_18345__$1 = (function (){var statearr_18361 = state_18345;
(statearr_18361[(7)] = inst_18322__$1);

return statearr_18361;
})();
var statearr_18362_18381 = state_18345__$1;
(statearr_18362_18381[(2)] = null);

(statearr_18362_18381[(1)] = (2));


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
});})(c__15919__auto__))
;
return ((function (switch__15736__auto__,c__15919__auto__){
return (function() {
var cljs$core$async$state_machine__15737__auto__ = null;
var cljs$core$async$state_machine__15737__auto____0 = (function (){
var statearr_18363 = [null,null,null,null,null,null,null,null];
(statearr_18363[(0)] = cljs$core$async$state_machine__15737__auto__);

(statearr_18363[(1)] = (1));

return statearr_18363;
});
var cljs$core$async$state_machine__15737__auto____1 = (function (state_18345){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_18345);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e18364){if((e18364 instanceof Object)){
var ex__15740__auto__ = e18364;
var statearr_18365_18382 = state_18345;
(statearr_18365_18382[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18345);

return cljs.core.cst$kw$recur;
} else {
throw e18364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__18383 = state_18345;
state_18345 = G__18383;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$state_machine__15737__auto__ = function(state_18345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15737__auto____1.call(this,state_18345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15737__auto____0;
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15737__auto____1;
return cljs$core$async$state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto__))
})();
var state__15921__auto__ = (function (){var statearr_18366 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_18366[(6)] = c__15919__auto__);

return statearr_18366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto__))
);

return c__15919__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18384 = (function (ch,cs,meta18385){
this.ch = ch;
this.cs = cs;
this.meta18385 = meta18385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18386,meta18385__$1){
var self__ = this;
var _18386__$1 = this;
return (new cljs.core.async.t_cljs$core$async18384(self__.ch,self__.cs,meta18385__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18386){
var self__ = this;
var _18386__$1 = this;
return self__.meta18385;
});})(cs))
;

cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18384.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18384.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18385], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18384";

cljs.core.async.t_cljs$core$async18384.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18384");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18384.
 */
cljs.core.async.__GT_t_cljs$core$async18384 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18384(ch__$1,cs__$1,meta18385){
return (new cljs.core.async.t_cljs$core$async18384(ch__$1,cs__$1,meta18385));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18384(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15919__auto___18606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___18606,cs,m,dchan,dctr,done){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___18606,cs,m,dchan,dctr,done){
return (function (state_18521){
var state_val_18522 = (state_18521[(1)]);
if((state_val_18522 === (7))){
var inst_18517 = (state_18521[(2)]);
var state_18521__$1 = state_18521;
var statearr_18523_18607 = state_18521__$1;
(statearr_18523_18607[(2)] = inst_18517);

(statearr_18523_18607[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (20))){
var inst_18420 = (state_18521[(7)]);
var inst_18432 = cljs.core.first(inst_18420);
var inst_18433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18432,(0),null);
var inst_18434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18432,(1),null);
var state_18521__$1 = (function (){var statearr_18524 = state_18521;
(statearr_18524[(8)] = inst_18433);

return statearr_18524;
})();
if(cljs.core.truth_(inst_18434)){
var statearr_18525_18608 = state_18521__$1;
(statearr_18525_18608[(1)] = (22));

} else {
var statearr_18526_18609 = state_18521__$1;
(statearr_18526_18609[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (27))){
var inst_18462 = (state_18521[(9)]);
var inst_18389 = (state_18521[(10)]);
var inst_18469 = (state_18521[(11)]);
var inst_18464 = (state_18521[(12)]);
var inst_18469__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18462,inst_18464);
var inst_18470 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18469__$1,inst_18389,done);
var state_18521__$1 = (function (){var statearr_18527 = state_18521;
(statearr_18527[(11)] = inst_18469__$1);

return statearr_18527;
})();
if(cljs.core.truth_(inst_18470)){
var statearr_18528_18610 = state_18521__$1;
(statearr_18528_18610[(1)] = (30));

} else {
var statearr_18529_18611 = state_18521__$1;
(statearr_18529_18611[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (1))){
var state_18521__$1 = state_18521;
var statearr_18530_18612 = state_18521__$1;
(statearr_18530_18612[(2)] = null);

(statearr_18530_18612[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (24))){
var inst_18420 = (state_18521[(7)]);
var inst_18439 = (state_18521[(2)]);
var inst_18440 = cljs.core.next(inst_18420);
var inst_18398 = inst_18440;
var inst_18399 = null;
var inst_18400 = (0);
var inst_18401 = (0);
var state_18521__$1 = (function (){var statearr_18531 = state_18521;
(statearr_18531[(13)] = inst_18439);

(statearr_18531[(14)] = inst_18401);

(statearr_18531[(15)] = inst_18398);

(statearr_18531[(16)] = inst_18400);

(statearr_18531[(17)] = inst_18399);

return statearr_18531;
})();
var statearr_18532_18613 = state_18521__$1;
(statearr_18532_18613[(2)] = null);

(statearr_18532_18613[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (39))){
var state_18521__$1 = state_18521;
var statearr_18536_18614 = state_18521__$1;
(statearr_18536_18614[(2)] = null);

(statearr_18536_18614[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (4))){
var inst_18389 = (state_18521[(10)]);
var inst_18389__$1 = (state_18521[(2)]);
var inst_18390 = (inst_18389__$1 == null);
var state_18521__$1 = (function (){var statearr_18537 = state_18521;
(statearr_18537[(10)] = inst_18389__$1);

return statearr_18537;
})();
if(cljs.core.truth_(inst_18390)){
var statearr_18538_18615 = state_18521__$1;
(statearr_18538_18615[(1)] = (5));

} else {
var statearr_18539_18616 = state_18521__$1;
(statearr_18539_18616[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (15))){
var inst_18401 = (state_18521[(14)]);
var inst_18398 = (state_18521[(15)]);
var inst_18400 = (state_18521[(16)]);
var inst_18399 = (state_18521[(17)]);
var inst_18416 = (state_18521[(2)]);
var inst_18417 = (inst_18401 + (1));
var tmp18533 = inst_18398;
var tmp18534 = inst_18400;
var tmp18535 = inst_18399;
var inst_18398__$1 = tmp18533;
var inst_18399__$1 = tmp18535;
var inst_18400__$1 = tmp18534;
var inst_18401__$1 = inst_18417;
var state_18521__$1 = (function (){var statearr_18540 = state_18521;
(statearr_18540[(14)] = inst_18401__$1);

(statearr_18540[(15)] = inst_18398__$1);

(statearr_18540[(16)] = inst_18400__$1);

(statearr_18540[(17)] = inst_18399__$1);

(statearr_18540[(18)] = inst_18416);

return statearr_18540;
})();
var statearr_18541_18617 = state_18521__$1;
(statearr_18541_18617[(2)] = null);

(statearr_18541_18617[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (21))){
var inst_18443 = (state_18521[(2)]);
var state_18521__$1 = state_18521;
var statearr_18545_18618 = state_18521__$1;
(statearr_18545_18618[(2)] = inst_18443);

(statearr_18545_18618[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (31))){
var inst_18469 = (state_18521[(11)]);
var inst_18473 = done(null);
var inst_18474 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18469);
var state_18521__$1 = (function (){var statearr_18546 = state_18521;
(statearr_18546[(19)] = inst_18473);

return statearr_18546;
})();
var statearr_18547_18619 = state_18521__$1;
(statearr_18547_18619[(2)] = inst_18474);

(statearr_18547_18619[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (32))){
var inst_18462 = (state_18521[(9)]);
var inst_18461 = (state_18521[(20)]);
var inst_18464 = (state_18521[(12)]);
var inst_18463 = (state_18521[(21)]);
var inst_18476 = (state_18521[(2)]);
var inst_18477 = (inst_18464 + (1));
var tmp18542 = inst_18462;
var tmp18543 = inst_18461;
var tmp18544 = inst_18463;
var inst_18461__$1 = tmp18543;
var inst_18462__$1 = tmp18542;
var inst_18463__$1 = tmp18544;
var inst_18464__$1 = inst_18477;
var state_18521__$1 = (function (){var statearr_18548 = state_18521;
(statearr_18548[(9)] = inst_18462__$1);

(statearr_18548[(20)] = inst_18461__$1);

(statearr_18548[(22)] = inst_18476);

(statearr_18548[(12)] = inst_18464__$1);

(statearr_18548[(21)] = inst_18463__$1);

return statearr_18548;
})();
var statearr_18549_18620 = state_18521__$1;
(statearr_18549_18620[(2)] = null);

(statearr_18549_18620[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (40))){
var inst_18489 = (state_18521[(23)]);
var inst_18493 = done(null);
var inst_18494 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18489);
var state_18521__$1 = (function (){var statearr_18550 = state_18521;
(statearr_18550[(24)] = inst_18493);

return statearr_18550;
})();
var statearr_18551_18621 = state_18521__$1;
(statearr_18551_18621[(2)] = inst_18494);

(statearr_18551_18621[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (33))){
var inst_18480 = (state_18521[(25)]);
var inst_18482 = cljs.core.chunked_seq_QMARK_(inst_18480);
var state_18521__$1 = state_18521;
if(inst_18482){
var statearr_18552_18622 = state_18521__$1;
(statearr_18552_18622[(1)] = (36));

} else {
var statearr_18553_18623 = state_18521__$1;
(statearr_18553_18623[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (13))){
var inst_18410 = (state_18521[(26)]);
var inst_18413 = cljs.core.async.close_BANG_(inst_18410);
var state_18521__$1 = state_18521;
var statearr_18554_18624 = state_18521__$1;
(statearr_18554_18624[(2)] = inst_18413);

(statearr_18554_18624[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (22))){
var inst_18433 = (state_18521[(8)]);
var inst_18436 = cljs.core.async.close_BANG_(inst_18433);
var state_18521__$1 = state_18521;
var statearr_18555_18625 = state_18521__$1;
(statearr_18555_18625[(2)] = inst_18436);

(statearr_18555_18625[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (36))){
var inst_18480 = (state_18521[(25)]);
var inst_18484 = cljs.core.chunk_first(inst_18480);
var inst_18485 = cljs.core.chunk_rest(inst_18480);
var inst_18486 = cljs.core.count(inst_18484);
var inst_18461 = inst_18485;
var inst_18462 = inst_18484;
var inst_18463 = inst_18486;
var inst_18464 = (0);
var state_18521__$1 = (function (){var statearr_18556 = state_18521;
(statearr_18556[(9)] = inst_18462);

(statearr_18556[(20)] = inst_18461);

(statearr_18556[(12)] = inst_18464);

(statearr_18556[(21)] = inst_18463);

return statearr_18556;
})();
var statearr_18557_18626 = state_18521__$1;
(statearr_18557_18626[(2)] = null);

(statearr_18557_18626[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (41))){
var inst_18480 = (state_18521[(25)]);
var inst_18496 = (state_18521[(2)]);
var inst_18497 = cljs.core.next(inst_18480);
var inst_18461 = inst_18497;
var inst_18462 = null;
var inst_18463 = (0);
var inst_18464 = (0);
var state_18521__$1 = (function (){var statearr_18558 = state_18521;
(statearr_18558[(9)] = inst_18462);

(statearr_18558[(20)] = inst_18461);

(statearr_18558[(12)] = inst_18464);

(statearr_18558[(21)] = inst_18463);

(statearr_18558[(27)] = inst_18496);

return statearr_18558;
})();
var statearr_18559_18627 = state_18521__$1;
(statearr_18559_18627[(2)] = null);

(statearr_18559_18627[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (43))){
var state_18521__$1 = state_18521;
var statearr_18560_18628 = state_18521__$1;
(statearr_18560_18628[(2)] = null);

(statearr_18560_18628[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (29))){
var inst_18505 = (state_18521[(2)]);
var state_18521__$1 = state_18521;
var statearr_18561_18629 = state_18521__$1;
(statearr_18561_18629[(2)] = inst_18505);

(statearr_18561_18629[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (44))){
var inst_18514 = (state_18521[(2)]);
var state_18521__$1 = (function (){var statearr_18562 = state_18521;
(statearr_18562[(28)] = inst_18514);

return statearr_18562;
})();
var statearr_18563_18630 = state_18521__$1;
(statearr_18563_18630[(2)] = null);

(statearr_18563_18630[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (6))){
var inst_18453 = (state_18521[(29)]);
var inst_18452 = cljs.core.deref(cs);
var inst_18453__$1 = cljs.core.keys(inst_18452);
var inst_18454 = cljs.core.count(inst_18453__$1);
var inst_18455 = cljs.core.reset_BANG_(dctr,inst_18454);
var inst_18460 = cljs.core.seq(inst_18453__$1);
var inst_18461 = inst_18460;
var inst_18462 = null;
var inst_18463 = (0);
var inst_18464 = (0);
var state_18521__$1 = (function (){var statearr_18564 = state_18521;
(statearr_18564[(9)] = inst_18462);

(statearr_18564[(20)] = inst_18461);

(statearr_18564[(29)] = inst_18453__$1);

(statearr_18564[(12)] = inst_18464);

(statearr_18564[(30)] = inst_18455);

(statearr_18564[(21)] = inst_18463);

return statearr_18564;
})();
var statearr_18565_18631 = state_18521__$1;
(statearr_18565_18631[(2)] = null);

(statearr_18565_18631[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (28))){
var inst_18461 = (state_18521[(20)]);
var inst_18480 = (state_18521[(25)]);
var inst_18480__$1 = cljs.core.seq(inst_18461);
var state_18521__$1 = (function (){var statearr_18566 = state_18521;
(statearr_18566[(25)] = inst_18480__$1);

return statearr_18566;
})();
if(inst_18480__$1){
var statearr_18567_18632 = state_18521__$1;
(statearr_18567_18632[(1)] = (33));

} else {
var statearr_18568_18633 = state_18521__$1;
(statearr_18568_18633[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (25))){
var inst_18464 = (state_18521[(12)]);
var inst_18463 = (state_18521[(21)]);
var inst_18466 = (inst_18464 < inst_18463);
var inst_18467 = inst_18466;
var state_18521__$1 = state_18521;
if(cljs.core.truth_(inst_18467)){
var statearr_18569_18634 = state_18521__$1;
(statearr_18569_18634[(1)] = (27));

} else {
var statearr_18570_18635 = state_18521__$1;
(statearr_18570_18635[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (34))){
var state_18521__$1 = state_18521;
var statearr_18571_18636 = state_18521__$1;
(statearr_18571_18636[(2)] = null);

(statearr_18571_18636[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (17))){
var state_18521__$1 = state_18521;
var statearr_18572_18637 = state_18521__$1;
(statearr_18572_18637[(2)] = null);

(statearr_18572_18637[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (3))){
var inst_18519 = (state_18521[(2)]);
var state_18521__$1 = state_18521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18521__$1,inst_18519);
} else {
if((state_val_18522 === (12))){
var inst_18448 = (state_18521[(2)]);
var state_18521__$1 = state_18521;
var statearr_18573_18638 = state_18521__$1;
(statearr_18573_18638[(2)] = inst_18448);

(statearr_18573_18638[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (2))){
var state_18521__$1 = state_18521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18521__$1,(4),ch);
} else {
if((state_val_18522 === (23))){
var state_18521__$1 = state_18521;
var statearr_18574_18639 = state_18521__$1;
(statearr_18574_18639[(2)] = null);

(statearr_18574_18639[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (35))){
var inst_18503 = (state_18521[(2)]);
var state_18521__$1 = state_18521;
var statearr_18575_18640 = state_18521__$1;
(statearr_18575_18640[(2)] = inst_18503);

(statearr_18575_18640[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (19))){
var inst_18420 = (state_18521[(7)]);
var inst_18424 = cljs.core.chunk_first(inst_18420);
var inst_18425 = cljs.core.chunk_rest(inst_18420);
var inst_18426 = cljs.core.count(inst_18424);
var inst_18398 = inst_18425;
var inst_18399 = inst_18424;
var inst_18400 = inst_18426;
var inst_18401 = (0);
var state_18521__$1 = (function (){var statearr_18576 = state_18521;
(statearr_18576[(14)] = inst_18401);

(statearr_18576[(15)] = inst_18398);

(statearr_18576[(16)] = inst_18400);

(statearr_18576[(17)] = inst_18399);

return statearr_18576;
})();
var statearr_18577_18641 = state_18521__$1;
(statearr_18577_18641[(2)] = null);

(statearr_18577_18641[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (11))){
var inst_18398 = (state_18521[(15)]);
var inst_18420 = (state_18521[(7)]);
var inst_18420__$1 = cljs.core.seq(inst_18398);
var state_18521__$1 = (function (){var statearr_18578 = state_18521;
(statearr_18578[(7)] = inst_18420__$1);

return statearr_18578;
})();
if(inst_18420__$1){
var statearr_18579_18642 = state_18521__$1;
(statearr_18579_18642[(1)] = (16));

} else {
var statearr_18580_18643 = state_18521__$1;
(statearr_18580_18643[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (9))){
var inst_18450 = (state_18521[(2)]);
var state_18521__$1 = state_18521;
var statearr_18581_18644 = state_18521__$1;
(statearr_18581_18644[(2)] = inst_18450);

(statearr_18581_18644[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (5))){
var inst_18396 = cljs.core.deref(cs);
var inst_18397 = cljs.core.seq(inst_18396);
var inst_18398 = inst_18397;
var inst_18399 = null;
var inst_18400 = (0);
var inst_18401 = (0);
var state_18521__$1 = (function (){var statearr_18582 = state_18521;
(statearr_18582[(14)] = inst_18401);

(statearr_18582[(15)] = inst_18398);

(statearr_18582[(16)] = inst_18400);

(statearr_18582[(17)] = inst_18399);

return statearr_18582;
})();
var statearr_18583_18645 = state_18521__$1;
(statearr_18583_18645[(2)] = null);

(statearr_18583_18645[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (14))){
var state_18521__$1 = state_18521;
var statearr_18584_18646 = state_18521__$1;
(statearr_18584_18646[(2)] = null);

(statearr_18584_18646[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (45))){
var inst_18511 = (state_18521[(2)]);
var state_18521__$1 = state_18521;
var statearr_18585_18647 = state_18521__$1;
(statearr_18585_18647[(2)] = inst_18511);

(statearr_18585_18647[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (26))){
var inst_18453 = (state_18521[(29)]);
var inst_18507 = (state_18521[(2)]);
var inst_18508 = cljs.core.seq(inst_18453);
var state_18521__$1 = (function (){var statearr_18586 = state_18521;
(statearr_18586[(31)] = inst_18507);

return statearr_18586;
})();
if(inst_18508){
var statearr_18587_18648 = state_18521__$1;
(statearr_18587_18648[(1)] = (42));

} else {
var statearr_18588_18649 = state_18521__$1;
(statearr_18588_18649[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (16))){
var inst_18420 = (state_18521[(7)]);
var inst_18422 = cljs.core.chunked_seq_QMARK_(inst_18420);
var state_18521__$1 = state_18521;
if(inst_18422){
var statearr_18589_18650 = state_18521__$1;
(statearr_18589_18650[(1)] = (19));

} else {
var statearr_18590_18651 = state_18521__$1;
(statearr_18590_18651[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (38))){
var inst_18500 = (state_18521[(2)]);
var state_18521__$1 = state_18521;
var statearr_18591_18652 = state_18521__$1;
(statearr_18591_18652[(2)] = inst_18500);

(statearr_18591_18652[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (30))){
var state_18521__$1 = state_18521;
var statearr_18592_18653 = state_18521__$1;
(statearr_18592_18653[(2)] = null);

(statearr_18592_18653[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (10))){
var inst_18401 = (state_18521[(14)]);
var inst_18399 = (state_18521[(17)]);
var inst_18409 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18399,inst_18401);
var inst_18410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18409,(0),null);
var inst_18411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18409,(1),null);
var state_18521__$1 = (function (){var statearr_18593 = state_18521;
(statearr_18593[(26)] = inst_18410);

return statearr_18593;
})();
if(cljs.core.truth_(inst_18411)){
var statearr_18594_18654 = state_18521__$1;
(statearr_18594_18654[(1)] = (13));

} else {
var statearr_18595_18655 = state_18521__$1;
(statearr_18595_18655[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (18))){
var inst_18446 = (state_18521[(2)]);
var state_18521__$1 = state_18521;
var statearr_18596_18656 = state_18521__$1;
(statearr_18596_18656[(2)] = inst_18446);

(statearr_18596_18656[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (42))){
var state_18521__$1 = state_18521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18521__$1,(45),dchan);
} else {
if((state_val_18522 === (37))){
var inst_18389 = (state_18521[(10)]);
var inst_18489 = (state_18521[(23)]);
var inst_18480 = (state_18521[(25)]);
var inst_18489__$1 = cljs.core.first(inst_18480);
var inst_18490 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18489__$1,inst_18389,done);
var state_18521__$1 = (function (){var statearr_18597 = state_18521;
(statearr_18597[(23)] = inst_18489__$1);

return statearr_18597;
})();
if(cljs.core.truth_(inst_18490)){
var statearr_18598_18657 = state_18521__$1;
(statearr_18598_18657[(1)] = (39));

} else {
var statearr_18599_18658 = state_18521__$1;
(statearr_18599_18658[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18522 === (8))){
var inst_18401 = (state_18521[(14)]);
var inst_18400 = (state_18521[(16)]);
var inst_18403 = (inst_18401 < inst_18400);
var inst_18404 = inst_18403;
var state_18521__$1 = state_18521;
if(cljs.core.truth_(inst_18404)){
var statearr_18600_18659 = state_18521__$1;
(statearr_18600_18659[(1)] = (10));

} else {
var statearr_18601_18660 = state_18521__$1;
(statearr_18601_18660[(1)] = (11));

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
});})(c__15919__auto___18606,cs,m,dchan,dctr,done))
;
return ((function (switch__15736__auto__,c__15919__auto___18606,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15737__auto__ = null;
var cljs$core$async$mult_$_state_machine__15737__auto____0 = (function (){
var statearr_18602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18602[(0)] = cljs$core$async$mult_$_state_machine__15737__auto__);

(statearr_18602[(1)] = (1));

return statearr_18602;
});
var cljs$core$async$mult_$_state_machine__15737__auto____1 = (function (state_18521){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_18521);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e18603){if((e18603 instanceof Object)){
var ex__15740__auto__ = e18603;
var statearr_18604_18661 = state_18521;
(statearr_18604_18661[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18521);

return cljs.core.cst$kw$recur;
} else {
throw e18603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__18662 = state_18521;
state_18521 = G__18662;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15737__auto__ = function(state_18521){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15737__auto____1.call(this,state_18521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15737__auto____0;
cljs$core$async$mult_$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15737__auto____1;
return cljs$core$async$mult_$_state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___18606,cs,m,dchan,dctr,done))
})();
var state__15921__auto__ = (function (){var statearr_18605 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_18605[(6)] = c__15919__auto___18606);

return statearr_18605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___18606,cs,m,dchan,dctr,done))
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
var G__18664 = arguments.length;
switch (G__18664) {
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
var len__4531__auto___18676 = arguments.length;
var i__4532__auto___18677 = (0);
while(true){
if((i__4532__auto___18677 < len__4531__auto___18676)){
args__4534__auto__.push((arguments[i__4532__auto___18677]));

var G__18678 = (i__4532__auto___18677 + (1));
i__4532__auto___18677 = G__18678;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18670){
var map__18671 = p__18670;
var map__18671__$1 = ((((!((map__18671 == null)))?(((((map__18671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18671):map__18671);
var opts = map__18671__$1;
var statearr_18673_18679 = state;
(statearr_18673_18679[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18671,map__18671__$1,opts){
return (function (val){
var statearr_18674_18680 = state;
(statearr_18674_18680[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18671,map__18671__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18675_18681 = state;
(statearr_18675_18681[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18666){
var G__18667 = cljs.core.first(seq18666);
var seq18666__$1 = cljs.core.next(seq18666);
var G__18668 = cljs.core.first(seq18666__$1);
var seq18666__$2 = cljs.core.next(seq18666__$1);
var G__18669 = cljs.core.first(seq18666__$2);
var seq18666__$3 = cljs.core.next(seq18666__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18667,G__18668,G__18669,seq18666__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18682 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18683){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18683 = meta18683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18684,meta18683__$1){
var self__ = this;
var _18684__$1 = this;
return (new cljs.core.async.t_cljs$core$async18682(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18683__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18684){
var self__ = this;
var _18684__$1 = this;
return self__.meta18683;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18682.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18682.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18683], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18682";

cljs.core.async.t_cljs$core$async18682.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18682");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18682.
 */
cljs.core.async.__GT_t_cljs$core$async18682 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18682(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18683){
return (new cljs.core.async.t_cljs$core$async18682(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18683));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18682(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15919__auto___18846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___18846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___18846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18786){
var state_val_18787 = (state_18786[(1)]);
if((state_val_18787 === (7))){
var inst_18701 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
var statearr_18788_18847 = state_18786__$1;
(statearr_18788_18847[(2)] = inst_18701);

(statearr_18788_18847[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (20))){
var inst_18713 = (state_18786[(7)]);
var state_18786__$1 = state_18786;
var statearr_18789_18848 = state_18786__$1;
(statearr_18789_18848[(2)] = inst_18713);

(statearr_18789_18848[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (27))){
var state_18786__$1 = state_18786;
var statearr_18790_18849 = state_18786__$1;
(statearr_18790_18849[(2)] = null);

(statearr_18790_18849[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (1))){
var inst_18688 = (state_18786[(8)]);
var inst_18688__$1 = calc_state();
var inst_18690 = (inst_18688__$1 == null);
var inst_18691 = cljs.core.not(inst_18690);
var state_18786__$1 = (function (){var statearr_18791 = state_18786;
(statearr_18791[(8)] = inst_18688__$1);

return statearr_18791;
})();
if(inst_18691){
var statearr_18792_18850 = state_18786__$1;
(statearr_18792_18850[(1)] = (2));

} else {
var statearr_18793_18851 = state_18786__$1;
(statearr_18793_18851[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (24))){
var inst_18760 = (state_18786[(9)]);
var inst_18746 = (state_18786[(10)]);
var inst_18737 = (state_18786[(11)]);
var inst_18760__$1 = (inst_18737.cljs$core$IFn$_invoke$arity$1 ? inst_18737.cljs$core$IFn$_invoke$arity$1(inst_18746) : inst_18737.call(null,inst_18746));
var state_18786__$1 = (function (){var statearr_18794 = state_18786;
(statearr_18794[(9)] = inst_18760__$1);

return statearr_18794;
})();
if(cljs.core.truth_(inst_18760__$1)){
var statearr_18795_18852 = state_18786__$1;
(statearr_18795_18852[(1)] = (29));

} else {
var statearr_18796_18853 = state_18786__$1;
(statearr_18796_18853[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (4))){
var inst_18704 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
if(cljs.core.truth_(inst_18704)){
var statearr_18797_18854 = state_18786__$1;
(statearr_18797_18854[(1)] = (8));

} else {
var statearr_18798_18855 = state_18786__$1;
(statearr_18798_18855[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (15))){
var inst_18731 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
if(cljs.core.truth_(inst_18731)){
var statearr_18799_18856 = state_18786__$1;
(statearr_18799_18856[(1)] = (19));

} else {
var statearr_18800_18857 = state_18786__$1;
(statearr_18800_18857[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (21))){
var inst_18736 = (state_18786[(12)]);
var inst_18736__$1 = (state_18786[(2)]);
var inst_18737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18736__$1,cljs.core.cst$kw$solos);
var inst_18738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18736__$1,cljs.core.cst$kw$mutes);
var inst_18739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18736__$1,cljs.core.cst$kw$reads);
var state_18786__$1 = (function (){var statearr_18801 = state_18786;
(statearr_18801[(13)] = inst_18738);

(statearr_18801[(12)] = inst_18736__$1);

(statearr_18801[(11)] = inst_18737);

return statearr_18801;
})();
return cljs.core.async.ioc_alts_BANG_(state_18786__$1,(22),inst_18739);
} else {
if((state_val_18787 === (31))){
var inst_18768 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
if(cljs.core.truth_(inst_18768)){
var statearr_18802_18858 = state_18786__$1;
(statearr_18802_18858[(1)] = (32));

} else {
var statearr_18803_18859 = state_18786__$1;
(statearr_18803_18859[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (32))){
var inst_18745 = (state_18786[(14)]);
var state_18786__$1 = state_18786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18786__$1,(35),out,inst_18745);
} else {
if((state_val_18787 === (33))){
var inst_18736 = (state_18786[(12)]);
var inst_18713 = inst_18736;
var state_18786__$1 = (function (){var statearr_18804 = state_18786;
(statearr_18804[(7)] = inst_18713);

return statearr_18804;
})();
var statearr_18805_18860 = state_18786__$1;
(statearr_18805_18860[(2)] = null);

(statearr_18805_18860[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (13))){
var inst_18713 = (state_18786[(7)]);
var inst_18720 = inst_18713.cljs$lang$protocol_mask$partition0$;
var inst_18721 = (inst_18720 & (64));
var inst_18722 = inst_18713.cljs$core$ISeq$;
var inst_18723 = (cljs.core.PROTOCOL_SENTINEL === inst_18722);
var inst_18724 = ((inst_18721) || (inst_18723));
var state_18786__$1 = state_18786;
if(cljs.core.truth_(inst_18724)){
var statearr_18806_18861 = state_18786__$1;
(statearr_18806_18861[(1)] = (16));

} else {
var statearr_18807_18862 = state_18786__$1;
(statearr_18807_18862[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (22))){
var inst_18745 = (state_18786[(14)]);
var inst_18746 = (state_18786[(10)]);
var inst_18744 = (state_18786[(2)]);
var inst_18745__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18744,(0),null);
var inst_18746__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18744,(1),null);
var inst_18747 = (inst_18745__$1 == null);
var inst_18748 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18746__$1,change);
var inst_18749 = ((inst_18747) || (inst_18748));
var state_18786__$1 = (function (){var statearr_18808 = state_18786;
(statearr_18808[(14)] = inst_18745__$1);

(statearr_18808[(10)] = inst_18746__$1);

return statearr_18808;
})();
if(cljs.core.truth_(inst_18749)){
var statearr_18809_18863 = state_18786__$1;
(statearr_18809_18863[(1)] = (23));

} else {
var statearr_18810_18864 = state_18786__$1;
(statearr_18810_18864[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (36))){
var inst_18736 = (state_18786[(12)]);
var inst_18713 = inst_18736;
var state_18786__$1 = (function (){var statearr_18811 = state_18786;
(statearr_18811[(7)] = inst_18713);

return statearr_18811;
})();
var statearr_18812_18865 = state_18786__$1;
(statearr_18812_18865[(2)] = null);

(statearr_18812_18865[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (29))){
var inst_18760 = (state_18786[(9)]);
var state_18786__$1 = state_18786;
var statearr_18813_18866 = state_18786__$1;
(statearr_18813_18866[(2)] = inst_18760);

(statearr_18813_18866[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (6))){
var state_18786__$1 = state_18786;
var statearr_18814_18867 = state_18786__$1;
(statearr_18814_18867[(2)] = false);

(statearr_18814_18867[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (28))){
var inst_18756 = (state_18786[(2)]);
var inst_18757 = calc_state();
var inst_18713 = inst_18757;
var state_18786__$1 = (function (){var statearr_18815 = state_18786;
(statearr_18815[(7)] = inst_18713);

(statearr_18815[(15)] = inst_18756);

return statearr_18815;
})();
var statearr_18816_18868 = state_18786__$1;
(statearr_18816_18868[(2)] = null);

(statearr_18816_18868[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (25))){
var inst_18782 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
var statearr_18817_18869 = state_18786__$1;
(statearr_18817_18869[(2)] = inst_18782);

(statearr_18817_18869[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (34))){
var inst_18780 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
var statearr_18818_18870 = state_18786__$1;
(statearr_18818_18870[(2)] = inst_18780);

(statearr_18818_18870[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (17))){
var state_18786__$1 = state_18786;
var statearr_18819_18871 = state_18786__$1;
(statearr_18819_18871[(2)] = false);

(statearr_18819_18871[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (3))){
var state_18786__$1 = state_18786;
var statearr_18820_18872 = state_18786__$1;
(statearr_18820_18872[(2)] = false);

(statearr_18820_18872[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (12))){
var inst_18784 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18786__$1,inst_18784);
} else {
if((state_val_18787 === (2))){
var inst_18688 = (state_18786[(8)]);
var inst_18693 = inst_18688.cljs$lang$protocol_mask$partition0$;
var inst_18694 = (inst_18693 & (64));
var inst_18695 = inst_18688.cljs$core$ISeq$;
var inst_18696 = (cljs.core.PROTOCOL_SENTINEL === inst_18695);
var inst_18697 = ((inst_18694) || (inst_18696));
var state_18786__$1 = state_18786;
if(cljs.core.truth_(inst_18697)){
var statearr_18821_18873 = state_18786__$1;
(statearr_18821_18873[(1)] = (5));

} else {
var statearr_18822_18874 = state_18786__$1;
(statearr_18822_18874[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (23))){
var inst_18745 = (state_18786[(14)]);
var inst_18751 = (inst_18745 == null);
var state_18786__$1 = state_18786;
if(cljs.core.truth_(inst_18751)){
var statearr_18823_18875 = state_18786__$1;
(statearr_18823_18875[(1)] = (26));

} else {
var statearr_18824_18876 = state_18786__$1;
(statearr_18824_18876[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (35))){
var inst_18771 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
if(cljs.core.truth_(inst_18771)){
var statearr_18825_18877 = state_18786__$1;
(statearr_18825_18877[(1)] = (36));

} else {
var statearr_18826_18878 = state_18786__$1;
(statearr_18826_18878[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (19))){
var inst_18713 = (state_18786[(7)]);
var inst_18733 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18713);
var state_18786__$1 = state_18786;
var statearr_18827_18879 = state_18786__$1;
(statearr_18827_18879[(2)] = inst_18733);

(statearr_18827_18879[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (11))){
var inst_18713 = (state_18786[(7)]);
var inst_18717 = (inst_18713 == null);
var inst_18718 = cljs.core.not(inst_18717);
var state_18786__$1 = state_18786;
if(inst_18718){
var statearr_18828_18880 = state_18786__$1;
(statearr_18828_18880[(1)] = (13));

} else {
var statearr_18829_18881 = state_18786__$1;
(statearr_18829_18881[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (9))){
var inst_18688 = (state_18786[(8)]);
var state_18786__$1 = state_18786;
var statearr_18830_18882 = state_18786__$1;
(statearr_18830_18882[(2)] = inst_18688);

(statearr_18830_18882[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (5))){
var state_18786__$1 = state_18786;
var statearr_18831_18883 = state_18786__$1;
(statearr_18831_18883[(2)] = true);

(statearr_18831_18883[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (14))){
var state_18786__$1 = state_18786;
var statearr_18832_18884 = state_18786__$1;
(statearr_18832_18884[(2)] = false);

(statearr_18832_18884[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (26))){
var inst_18746 = (state_18786[(10)]);
var inst_18753 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18746);
var state_18786__$1 = state_18786;
var statearr_18833_18885 = state_18786__$1;
(statearr_18833_18885[(2)] = inst_18753);

(statearr_18833_18885[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (16))){
var state_18786__$1 = state_18786;
var statearr_18834_18886 = state_18786__$1;
(statearr_18834_18886[(2)] = true);

(statearr_18834_18886[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (38))){
var inst_18776 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
var statearr_18835_18887 = state_18786__$1;
(statearr_18835_18887[(2)] = inst_18776);

(statearr_18835_18887[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (30))){
var inst_18746 = (state_18786[(10)]);
var inst_18738 = (state_18786[(13)]);
var inst_18737 = (state_18786[(11)]);
var inst_18763 = cljs.core.empty_QMARK_(inst_18737);
var inst_18764 = (inst_18738.cljs$core$IFn$_invoke$arity$1 ? inst_18738.cljs$core$IFn$_invoke$arity$1(inst_18746) : inst_18738.call(null,inst_18746));
var inst_18765 = cljs.core.not(inst_18764);
var inst_18766 = ((inst_18763) && (inst_18765));
var state_18786__$1 = state_18786;
var statearr_18836_18888 = state_18786__$1;
(statearr_18836_18888[(2)] = inst_18766);

(statearr_18836_18888[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (10))){
var inst_18688 = (state_18786[(8)]);
var inst_18709 = (state_18786[(2)]);
var inst_18710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18709,cljs.core.cst$kw$solos);
var inst_18711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18709,cljs.core.cst$kw$mutes);
var inst_18712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18709,cljs.core.cst$kw$reads);
var inst_18713 = inst_18688;
var state_18786__$1 = (function (){var statearr_18837 = state_18786;
(statearr_18837[(7)] = inst_18713);

(statearr_18837[(16)] = inst_18711);

(statearr_18837[(17)] = inst_18710);

(statearr_18837[(18)] = inst_18712);

return statearr_18837;
})();
var statearr_18838_18889 = state_18786__$1;
(statearr_18838_18889[(2)] = null);

(statearr_18838_18889[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (18))){
var inst_18728 = (state_18786[(2)]);
var state_18786__$1 = state_18786;
var statearr_18839_18890 = state_18786__$1;
(statearr_18839_18890[(2)] = inst_18728);

(statearr_18839_18890[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (37))){
var state_18786__$1 = state_18786;
var statearr_18840_18891 = state_18786__$1;
(statearr_18840_18891[(2)] = null);

(statearr_18840_18891[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18787 === (8))){
var inst_18688 = (state_18786[(8)]);
var inst_18706 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18688);
var state_18786__$1 = state_18786;
var statearr_18841_18892 = state_18786__$1;
(statearr_18841_18892[(2)] = inst_18706);

(statearr_18841_18892[(1)] = (10));


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
});})(c__15919__auto___18846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15736__auto__,c__15919__auto___18846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15737__auto__ = null;
var cljs$core$async$mix_$_state_machine__15737__auto____0 = (function (){
var statearr_18842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18842[(0)] = cljs$core$async$mix_$_state_machine__15737__auto__);

(statearr_18842[(1)] = (1));

return statearr_18842;
});
var cljs$core$async$mix_$_state_machine__15737__auto____1 = (function (state_18786){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_18786);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e18843){if((e18843 instanceof Object)){
var ex__15740__auto__ = e18843;
var statearr_18844_18893 = state_18786;
(statearr_18844_18893[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18786);

return cljs.core.cst$kw$recur;
} else {
throw e18843;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__18894 = state_18786;
state_18786 = G__18894;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15737__auto__ = function(state_18786){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15737__auto____1.call(this,state_18786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15737__auto____0;
cljs$core$async$mix_$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15737__auto____1;
return cljs$core$async$mix_$_state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___18846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15921__auto__ = (function (){var statearr_18845 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_18845[(6)] = c__15919__auto___18846);

return statearr_18845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___18846,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__18896 = arguments.length;
switch (G__18896) {
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
var G__18900 = arguments.length;
switch (G__18900) {
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
return (function (p1__18898_SHARP_){
if(cljs.core.truth_((p1__18898_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18898_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18898_SHARP_.call(null,topic)))){
return p1__18898_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18898_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18901 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18902){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18902 = meta18902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18903,meta18902__$1){
var self__ = this;
var _18903__$1 = this;
return (new cljs.core.async.t_cljs$core$async18901(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18902__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18903){
var self__ = this;
var _18903__$1 = this;
return self__.meta18902;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18901.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18901.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18901.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18901.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18901.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18901.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18901.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18902], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18901";

cljs.core.async.t_cljs$core$async18901.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18901");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18901.
 */
cljs.core.async.__GT_t_cljs$core$async18901 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18901(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18902){
return (new cljs.core.async.t_cljs$core$async18901(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18902));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18901(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15919__auto___19021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___19021,mults,ensure_mult,p){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___19021,mults,ensure_mult,p){
return (function (state_18975){
var state_val_18976 = (state_18975[(1)]);
if((state_val_18976 === (7))){
var inst_18971 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_18977_19022 = state_18975__$1;
(statearr_18977_19022[(2)] = inst_18971);

(statearr_18977_19022[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (20))){
var state_18975__$1 = state_18975;
var statearr_18978_19023 = state_18975__$1;
(statearr_18978_19023[(2)] = null);

(statearr_18978_19023[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (1))){
var state_18975__$1 = state_18975;
var statearr_18979_19024 = state_18975__$1;
(statearr_18979_19024[(2)] = null);

(statearr_18979_19024[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (24))){
var inst_18954 = (state_18975[(7)]);
var inst_18963 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18954);
var state_18975__$1 = state_18975;
var statearr_18980_19025 = state_18975__$1;
(statearr_18980_19025[(2)] = inst_18963);

(statearr_18980_19025[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (4))){
var inst_18906 = (state_18975[(8)]);
var inst_18906__$1 = (state_18975[(2)]);
var inst_18907 = (inst_18906__$1 == null);
var state_18975__$1 = (function (){var statearr_18981 = state_18975;
(statearr_18981[(8)] = inst_18906__$1);

return statearr_18981;
})();
if(cljs.core.truth_(inst_18907)){
var statearr_18982_19026 = state_18975__$1;
(statearr_18982_19026[(1)] = (5));

} else {
var statearr_18983_19027 = state_18975__$1;
(statearr_18983_19027[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (15))){
var inst_18948 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_18984_19028 = state_18975__$1;
(statearr_18984_19028[(2)] = inst_18948);

(statearr_18984_19028[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (21))){
var inst_18968 = (state_18975[(2)]);
var state_18975__$1 = (function (){var statearr_18985 = state_18975;
(statearr_18985[(9)] = inst_18968);

return statearr_18985;
})();
var statearr_18986_19029 = state_18975__$1;
(statearr_18986_19029[(2)] = null);

(statearr_18986_19029[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (13))){
var inst_18930 = (state_18975[(10)]);
var inst_18932 = cljs.core.chunked_seq_QMARK_(inst_18930);
var state_18975__$1 = state_18975;
if(inst_18932){
var statearr_18987_19030 = state_18975__$1;
(statearr_18987_19030[(1)] = (16));

} else {
var statearr_18988_19031 = state_18975__$1;
(statearr_18988_19031[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (22))){
var inst_18960 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
if(cljs.core.truth_(inst_18960)){
var statearr_18989_19032 = state_18975__$1;
(statearr_18989_19032[(1)] = (23));

} else {
var statearr_18990_19033 = state_18975__$1;
(statearr_18990_19033[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (6))){
var inst_18906 = (state_18975[(8)]);
var inst_18956 = (state_18975[(11)]);
var inst_18954 = (state_18975[(7)]);
var inst_18954__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18906) : topic_fn.call(null,inst_18906));
var inst_18955 = cljs.core.deref(mults);
var inst_18956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18955,inst_18954__$1);
var state_18975__$1 = (function (){var statearr_18991 = state_18975;
(statearr_18991[(11)] = inst_18956__$1);

(statearr_18991[(7)] = inst_18954__$1);

return statearr_18991;
})();
if(cljs.core.truth_(inst_18956__$1)){
var statearr_18992_19034 = state_18975__$1;
(statearr_18992_19034[(1)] = (19));

} else {
var statearr_18993_19035 = state_18975__$1;
(statearr_18993_19035[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (25))){
var inst_18965 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_18994_19036 = state_18975__$1;
(statearr_18994_19036[(2)] = inst_18965);

(statearr_18994_19036[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (17))){
var inst_18930 = (state_18975[(10)]);
var inst_18939 = cljs.core.first(inst_18930);
var inst_18940 = cljs.core.async.muxch_STAR_(inst_18939);
var inst_18941 = cljs.core.async.close_BANG_(inst_18940);
var inst_18942 = cljs.core.next(inst_18930);
var inst_18916 = inst_18942;
var inst_18917 = null;
var inst_18918 = (0);
var inst_18919 = (0);
var state_18975__$1 = (function (){var statearr_18995 = state_18975;
(statearr_18995[(12)] = inst_18917);

(statearr_18995[(13)] = inst_18941);

(statearr_18995[(14)] = inst_18918);

(statearr_18995[(15)] = inst_18919);

(statearr_18995[(16)] = inst_18916);

return statearr_18995;
})();
var statearr_18996_19037 = state_18975__$1;
(statearr_18996_19037[(2)] = null);

(statearr_18996_19037[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (3))){
var inst_18973 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18975__$1,inst_18973);
} else {
if((state_val_18976 === (12))){
var inst_18950 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_18997_19038 = state_18975__$1;
(statearr_18997_19038[(2)] = inst_18950);

(statearr_18997_19038[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (2))){
var state_18975__$1 = state_18975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18975__$1,(4),ch);
} else {
if((state_val_18976 === (23))){
var state_18975__$1 = state_18975;
var statearr_18998_19039 = state_18975__$1;
(statearr_18998_19039[(2)] = null);

(statearr_18998_19039[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (19))){
var inst_18906 = (state_18975[(8)]);
var inst_18956 = (state_18975[(11)]);
var inst_18958 = cljs.core.async.muxch_STAR_(inst_18956);
var state_18975__$1 = state_18975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18975__$1,(22),inst_18958,inst_18906);
} else {
if((state_val_18976 === (11))){
var inst_18930 = (state_18975[(10)]);
var inst_18916 = (state_18975[(16)]);
var inst_18930__$1 = cljs.core.seq(inst_18916);
var state_18975__$1 = (function (){var statearr_18999 = state_18975;
(statearr_18999[(10)] = inst_18930__$1);

return statearr_18999;
})();
if(inst_18930__$1){
var statearr_19000_19040 = state_18975__$1;
(statearr_19000_19040[(1)] = (13));

} else {
var statearr_19001_19041 = state_18975__$1;
(statearr_19001_19041[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (9))){
var inst_18952 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_19002_19042 = state_18975__$1;
(statearr_19002_19042[(2)] = inst_18952);

(statearr_19002_19042[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (5))){
var inst_18913 = cljs.core.deref(mults);
var inst_18914 = cljs.core.vals(inst_18913);
var inst_18915 = cljs.core.seq(inst_18914);
var inst_18916 = inst_18915;
var inst_18917 = null;
var inst_18918 = (0);
var inst_18919 = (0);
var state_18975__$1 = (function (){var statearr_19003 = state_18975;
(statearr_19003[(12)] = inst_18917);

(statearr_19003[(14)] = inst_18918);

(statearr_19003[(15)] = inst_18919);

(statearr_19003[(16)] = inst_18916);

return statearr_19003;
})();
var statearr_19004_19043 = state_18975__$1;
(statearr_19004_19043[(2)] = null);

(statearr_19004_19043[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (14))){
var state_18975__$1 = state_18975;
var statearr_19008_19044 = state_18975__$1;
(statearr_19008_19044[(2)] = null);

(statearr_19008_19044[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (16))){
var inst_18930 = (state_18975[(10)]);
var inst_18934 = cljs.core.chunk_first(inst_18930);
var inst_18935 = cljs.core.chunk_rest(inst_18930);
var inst_18936 = cljs.core.count(inst_18934);
var inst_18916 = inst_18935;
var inst_18917 = inst_18934;
var inst_18918 = inst_18936;
var inst_18919 = (0);
var state_18975__$1 = (function (){var statearr_19009 = state_18975;
(statearr_19009[(12)] = inst_18917);

(statearr_19009[(14)] = inst_18918);

(statearr_19009[(15)] = inst_18919);

(statearr_19009[(16)] = inst_18916);

return statearr_19009;
})();
var statearr_19010_19045 = state_18975__$1;
(statearr_19010_19045[(2)] = null);

(statearr_19010_19045[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (10))){
var inst_18917 = (state_18975[(12)]);
var inst_18918 = (state_18975[(14)]);
var inst_18919 = (state_18975[(15)]);
var inst_18916 = (state_18975[(16)]);
var inst_18924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18917,inst_18919);
var inst_18925 = cljs.core.async.muxch_STAR_(inst_18924);
var inst_18926 = cljs.core.async.close_BANG_(inst_18925);
var inst_18927 = (inst_18919 + (1));
var tmp19005 = inst_18917;
var tmp19006 = inst_18918;
var tmp19007 = inst_18916;
var inst_18916__$1 = tmp19007;
var inst_18917__$1 = tmp19005;
var inst_18918__$1 = tmp19006;
var inst_18919__$1 = inst_18927;
var state_18975__$1 = (function (){var statearr_19011 = state_18975;
(statearr_19011[(17)] = inst_18926);

(statearr_19011[(12)] = inst_18917__$1);

(statearr_19011[(14)] = inst_18918__$1);

(statearr_19011[(15)] = inst_18919__$1);

(statearr_19011[(16)] = inst_18916__$1);

return statearr_19011;
})();
var statearr_19012_19046 = state_18975__$1;
(statearr_19012_19046[(2)] = null);

(statearr_19012_19046[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (18))){
var inst_18945 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_19013_19047 = state_18975__$1;
(statearr_19013_19047[(2)] = inst_18945);

(statearr_19013_19047[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18976 === (8))){
var inst_18918 = (state_18975[(14)]);
var inst_18919 = (state_18975[(15)]);
var inst_18921 = (inst_18919 < inst_18918);
var inst_18922 = inst_18921;
var state_18975__$1 = state_18975;
if(cljs.core.truth_(inst_18922)){
var statearr_19014_19048 = state_18975__$1;
(statearr_19014_19048[(1)] = (10));

} else {
var statearr_19015_19049 = state_18975__$1;
(statearr_19015_19049[(1)] = (11));

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
});})(c__15919__auto___19021,mults,ensure_mult,p))
;
return ((function (switch__15736__auto__,c__15919__auto___19021,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15737__auto__ = null;
var cljs$core$async$state_machine__15737__auto____0 = (function (){
var statearr_19016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19016[(0)] = cljs$core$async$state_machine__15737__auto__);

(statearr_19016[(1)] = (1));

return statearr_19016;
});
var cljs$core$async$state_machine__15737__auto____1 = (function (state_18975){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_18975);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e19017){if((e19017 instanceof Object)){
var ex__15740__auto__ = e19017;
var statearr_19018_19050 = state_18975;
(statearr_19018_19050[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18975);

return cljs.core.cst$kw$recur;
} else {
throw e19017;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__19051 = state_18975;
state_18975 = G__19051;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$state_machine__15737__auto__ = function(state_18975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15737__auto____1.call(this,state_18975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15737__auto____0;
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15737__auto____1;
return cljs$core$async$state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___19021,mults,ensure_mult,p))
})();
var state__15921__auto__ = (function (){var statearr_19019 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_19019[(6)] = c__15919__auto___19021);

return statearr_19019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___19021,mults,ensure_mult,p))
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
var G__19053 = arguments.length;
switch (G__19053) {
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
var G__19056 = arguments.length;
switch (G__19056) {
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
var G__19059 = arguments.length;
switch (G__19059) {
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
var c__15919__auto___19126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___19126,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___19126,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19098){
var state_val_19099 = (state_19098[(1)]);
if((state_val_19099 === (7))){
var state_19098__$1 = state_19098;
var statearr_19100_19127 = state_19098__$1;
(statearr_19100_19127[(2)] = null);

(statearr_19100_19127[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (1))){
var state_19098__$1 = state_19098;
var statearr_19101_19128 = state_19098__$1;
(statearr_19101_19128[(2)] = null);

(statearr_19101_19128[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (4))){
var inst_19062 = (state_19098[(7)]);
var inst_19064 = (inst_19062 < cnt);
var state_19098__$1 = state_19098;
if(cljs.core.truth_(inst_19064)){
var statearr_19102_19129 = state_19098__$1;
(statearr_19102_19129[(1)] = (6));

} else {
var statearr_19103_19130 = state_19098__$1;
(statearr_19103_19130[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (15))){
var inst_19094 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19104_19131 = state_19098__$1;
(statearr_19104_19131[(2)] = inst_19094);

(statearr_19104_19131[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (13))){
var inst_19087 = cljs.core.async.close_BANG_(out);
var state_19098__$1 = state_19098;
var statearr_19105_19132 = state_19098__$1;
(statearr_19105_19132[(2)] = inst_19087);

(statearr_19105_19132[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (6))){
var state_19098__$1 = state_19098;
var statearr_19106_19133 = state_19098__$1;
(statearr_19106_19133[(2)] = null);

(statearr_19106_19133[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (3))){
var inst_19096 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19098__$1,inst_19096);
} else {
if((state_val_19099 === (12))){
var inst_19084 = (state_19098[(8)]);
var inst_19084__$1 = (state_19098[(2)]);
var inst_19085 = cljs.core.some(cljs.core.nil_QMARK_,inst_19084__$1);
var state_19098__$1 = (function (){var statearr_19107 = state_19098;
(statearr_19107[(8)] = inst_19084__$1);

return statearr_19107;
})();
if(cljs.core.truth_(inst_19085)){
var statearr_19108_19134 = state_19098__$1;
(statearr_19108_19134[(1)] = (13));

} else {
var statearr_19109_19135 = state_19098__$1;
(statearr_19109_19135[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (2))){
var inst_19061 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19062 = (0);
var state_19098__$1 = (function (){var statearr_19110 = state_19098;
(statearr_19110[(9)] = inst_19061);

(statearr_19110[(7)] = inst_19062);

return statearr_19110;
})();
var statearr_19111_19136 = state_19098__$1;
(statearr_19111_19136[(2)] = null);

(statearr_19111_19136[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (11))){
var inst_19062 = (state_19098[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19098,(10),Object,null,(9));
var inst_19071 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19062) : chs__$1.call(null,inst_19062));
var inst_19072 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19062) : done.call(null,inst_19062));
var inst_19073 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19071,inst_19072);
var state_19098__$1 = state_19098;
var statearr_19112_19137 = state_19098__$1;
(statearr_19112_19137[(2)] = inst_19073);


cljs.core.async.impl.ioc_helpers.process_exception(state_19098__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (9))){
var inst_19062 = (state_19098[(7)]);
var inst_19075 = (state_19098[(2)]);
var inst_19076 = (inst_19062 + (1));
var inst_19062__$1 = inst_19076;
var state_19098__$1 = (function (){var statearr_19113 = state_19098;
(statearr_19113[(10)] = inst_19075);

(statearr_19113[(7)] = inst_19062__$1);

return statearr_19113;
})();
var statearr_19114_19138 = state_19098__$1;
(statearr_19114_19138[(2)] = null);

(statearr_19114_19138[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (5))){
var inst_19082 = (state_19098[(2)]);
var state_19098__$1 = (function (){var statearr_19115 = state_19098;
(statearr_19115[(11)] = inst_19082);

return statearr_19115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19098__$1,(12),dchan);
} else {
if((state_val_19099 === (14))){
var inst_19084 = (state_19098[(8)]);
var inst_19089 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19084);
var state_19098__$1 = state_19098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19098__$1,(16),out,inst_19089);
} else {
if((state_val_19099 === (16))){
var inst_19091 = (state_19098[(2)]);
var state_19098__$1 = (function (){var statearr_19116 = state_19098;
(statearr_19116[(12)] = inst_19091);

return statearr_19116;
})();
var statearr_19117_19139 = state_19098__$1;
(statearr_19117_19139[(2)] = null);

(statearr_19117_19139[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (10))){
var inst_19066 = (state_19098[(2)]);
var inst_19067 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19098__$1 = (function (){var statearr_19118 = state_19098;
(statearr_19118[(13)] = inst_19066);

return statearr_19118;
})();
var statearr_19119_19140 = state_19098__$1;
(statearr_19119_19140[(2)] = inst_19067);


cljs.core.async.impl.ioc_helpers.process_exception(state_19098__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19099 === (8))){
var inst_19080 = (state_19098[(2)]);
var state_19098__$1 = state_19098;
var statearr_19120_19141 = state_19098__$1;
(statearr_19120_19141[(2)] = inst_19080);

(statearr_19120_19141[(1)] = (5));


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
});})(c__15919__auto___19126,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15736__auto__,c__15919__auto___19126,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15737__auto__ = null;
var cljs$core$async$state_machine__15737__auto____0 = (function (){
var statearr_19121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19121[(0)] = cljs$core$async$state_machine__15737__auto__);

(statearr_19121[(1)] = (1));

return statearr_19121;
});
var cljs$core$async$state_machine__15737__auto____1 = (function (state_19098){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_19098);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e19122){if((e19122 instanceof Object)){
var ex__15740__auto__ = e19122;
var statearr_19123_19142 = state_19098;
(statearr_19123_19142[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19098);

return cljs.core.cst$kw$recur;
} else {
throw e19122;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__19143 = state_19098;
state_19098 = G__19143;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$state_machine__15737__auto__ = function(state_19098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15737__auto____1.call(this,state_19098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15737__auto____0;
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15737__auto____1;
return cljs$core$async$state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___19126,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15921__auto__ = (function (){var statearr_19124 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_19124[(6)] = c__15919__auto___19126);

return statearr_19124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___19126,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19146 = arguments.length;
switch (G__19146) {
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
var c__15919__auto___19200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___19200,out){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___19200,out){
return (function (state_19178){
var state_val_19179 = (state_19178[(1)]);
if((state_val_19179 === (7))){
var inst_19157 = (state_19178[(7)]);
var inst_19158 = (state_19178[(8)]);
var inst_19157__$1 = (state_19178[(2)]);
var inst_19158__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19157__$1,(0),null);
var inst_19159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19157__$1,(1),null);
var inst_19160 = (inst_19158__$1 == null);
var state_19178__$1 = (function (){var statearr_19180 = state_19178;
(statearr_19180[(9)] = inst_19159);

(statearr_19180[(7)] = inst_19157__$1);

(statearr_19180[(8)] = inst_19158__$1);

return statearr_19180;
})();
if(cljs.core.truth_(inst_19160)){
var statearr_19181_19201 = state_19178__$1;
(statearr_19181_19201[(1)] = (8));

} else {
var statearr_19182_19202 = state_19178__$1;
(statearr_19182_19202[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19179 === (1))){
var inst_19147 = cljs.core.vec(chs);
var inst_19148 = inst_19147;
var state_19178__$1 = (function (){var statearr_19183 = state_19178;
(statearr_19183[(10)] = inst_19148);

return statearr_19183;
})();
var statearr_19184_19203 = state_19178__$1;
(statearr_19184_19203[(2)] = null);

(statearr_19184_19203[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19179 === (4))){
var inst_19148 = (state_19178[(10)]);
var state_19178__$1 = state_19178;
return cljs.core.async.ioc_alts_BANG_(state_19178__$1,(7),inst_19148);
} else {
if((state_val_19179 === (6))){
var inst_19174 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
var statearr_19185_19204 = state_19178__$1;
(statearr_19185_19204[(2)] = inst_19174);

(statearr_19185_19204[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19179 === (3))){
var inst_19176 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19178__$1,inst_19176);
} else {
if((state_val_19179 === (2))){
var inst_19148 = (state_19178[(10)]);
var inst_19150 = cljs.core.count(inst_19148);
var inst_19151 = (inst_19150 > (0));
var state_19178__$1 = state_19178;
if(cljs.core.truth_(inst_19151)){
var statearr_19187_19205 = state_19178__$1;
(statearr_19187_19205[(1)] = (4));

} else {
var statearr_19188_19206 = state_19178__$1;
(statearr_19188_19206[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19179 === (11))){
var inst_19148 = (state_19178[(10)]);
var inst_19167 = (state_19178[(2)]);
var tmp19186 = inst_19148;
var inst_19148__$1 = tmp19186;
var state_19178__$1 = (function (){var statearr_19189 = state_19178;
(statearr_19189[(11)] = inst_19167);

(statearr_19189[(10)] = inst_19148__$1);

return statearr_19189;
})();
var statearr_19190_19207 = state_19178__$1;
(statearr_19190_19207[(2)] = null);

(statearr_19190_19207[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19179 === (9))){
var inst_19158 = (state_19178[(8)]);
var state_19178__$1 = state_19178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19178__$1,(11),out,inst_19158);
} else {
if((state_val_19179 === (5))){
var inst_19172 = cljs.core.async.close_BANG_(out);
var state_19178__$1 = state_19178;
var statearr_19191_19208 = state_19178__$1;
(statearr_19191_19208[(2)] = inst_19172);

(statearr_19191_19208[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19179 === (10))){
var inst_19170 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
var statearr_19192_19209 = state_19178__$1;
(statearr_19192_19209[(2)] = inst_19170);

(statearr_19192_19209[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19179 === (8))){
var inst_19159 = (state_19178[(9)]);
var inst_19157 = (state_19178[(7)]);
var inst_19148 = (state_19178[(10)]);
var inst_19158 = (state_19178[(8)]);
var inst_19162 = (function (){var cs = inst_19148;
var vec__19153 = inst_19157;
var v = inst_19158;
var c = inst_19159;
return ((function (cs,vec__19153,v,c,inst_19159,inst_19157,inst_19148,inst_19158,state_val_19179,c__15919__auto___19200,out){
return (function (p1__19144_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19144_SHARP_);
});
;})(cs,vec__19153,v,c,inst_19159,inst_19157,inst_19148,inst_19158,state_val_19179,c__15919__auto___19200,out))
})();
var inst_19163 = cljs.core.filterv(inst_19162,inst_19148);
var inst_19148__$1 = inst_19163;
var state_19178__$1 = (function (){var statearr_19193 = state_19178;
(statearr_19193[(10)] = inst_19148__$1);

return statearr_19193;
})();
var statearr_19194_19210 = state_19178__$1;
(statearr_19194_19210[(2)] = null);

(statearr_19194_19210[(1)] = (2));


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
});})(c__15919__auto___19200,out))
;
return ((function (switch__15736__auto__,c__15919__auto___19200,out){
return (function() {
var cljs$core$async$state_machine__15737__auto__ = null;
var cljs$core$async$state_machine__15737__auto____0 = (function (){
var statearr_19195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19195[(0)] = cljs$core$async$state_machine__15737__auto__);

(statearr_19195[(1)] = (1));

return statearr_19195;
});
var cljs$core$async$state_machine__15737__auto____1 = (function (state_19178){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_19178);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e19196){if((e19196 instanceof Object)){
var ex__15740__auto__ = e19196;
var statearr_19197_19211 = state_19178;
(statearr_19197_19211[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19178);

return cljs.core.cst$kw$recur;
} else {
throw e19196;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__19212 = state_19178;
state_19178 = G__19212;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$state_machine__15737__auto__ = function(state_19178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15737__auto____1.call(this,state_19178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15737__auto____0;
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15737__auto____1;
return cljs$core$async$state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___19200,out))
})();
var state__15921__auto__ = (function (){var statearr_19198 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_19198[(6)] = c__15919__auto___19200);

return statearr_19198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___19200,out))
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
var G__19214 = arguments.length;
switch (G__19214) {
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
var c__15919__auto___19259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___19259,out){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___19259,out){
return (function (state_19238){
var state_val_19239 = (state_19238[(1)]);
if((state_val_19239 === (7))){
var inst_19220 = (state_19238[(7)]);
var inst_19220__$1 = (state_19238[(2)]);
var inst_19221 = (inst_19220__$1 == null);
var inst_19222 = cljs.core.not(inst_19221);
var state_19238__$1 = (function (){var statearr_19240 = state_19238;
(statearr_19240[(7)] = inst_19220__$1);

return statearr_19240;
})();
if(inst_19222){
var statearr_19241_19260 = state_19238__$1;
(statearr_19241_19260[(1)] = (8));

} else {
var statearr_19242_19261 = state_19238__$1;
(statearr_19242_19261[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19239 === (1))){
var inst_19215 = (0);
var state_19238__$1 = (function (){var statearr_19243 = state_19238;
(statearr_19243[(8)] = inst_19215);

return statearr_19243;
})();
var statearr_19244_19262 = state_19238__$1;
(statearr_19244_19262[(2)] = null);

(statearr_19244_19262[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19239 === (4))){
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19238__$1,(7),ch);
} else {
if((state_val_19239 === (6))){
var inst_19233 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19245_19263 = state_19238__$1;
(statearr_19245_19263[(2)] = inst_19233);

(statearr_19245_19263[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19239 === (3))){
var inst_19235 = (state_19238[(2)]);
var inst_19236 = cljs.core.async.close_BANG_(out);
var state_19238__$1 = (function (){var statearr_19246 = state_19238;
(statearr_19246[(9)] = inst_19235);

return statearr_19246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19238__$1,inst_19236);
} else {
if((state_val_19239 === (2))){
var inst_19215 = (state_19238[(8)]);
var inst_19217 = (inst_19215 < n);
var state_19238__$1 = state_19238;
if(cljs.core.truth_(inst_19217)){
var statearr_19247_19264 = state_19238__$1;
(statearr_19247_19264[(1)] = (4));

} else {
var statearr_19248_19265 = state_19238__$1;
(statearr_19248_19265[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19239 === (11))){
var inst_19215 = (state_19238[(8)]);
var inst_19225 = (state_19238[(2)]);
var inst_19226 = (inst_19215 + (1));
var inst_19215__$1 = inst_19226;
var state_19238__$1 = (function (){var statearr_19249 = state_19238;
(statearr_19249[(8)] = inst_19215__$1);

(statearr_19249[(10)] = inst_19225);

return statearr_19249;
})();
var statearr_19250_19266 = state_19238__$1;
(statearr_19250_19266[(2)] = null);

(statearr_19250_19266[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19239 === (9))){
var state_19238__$1 = state_19238;
var statearr_19251_19267 = state_19238__$1;
(statearr_19251_19267[(2)] = null);

(statearr_19251_19267[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19239 === (5))){
var state_19238__$1 = state_19238;
var statearr_19252_19268 = state_19238__$1;
(statearr_19252_19268[(2)] = null);

(statearr_19252_19268[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19239 === (10))){
var inst_19230 = (state_19238[(2)]);
var state_19238__$1 = state_19238;
var statearr_19253_19269 = state_19238__$1;
(statearr_19253_19269[(2)] = inst_19230);

(statearr_19253_19269[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19239 === (8))){
var inst_19220 = (state_19238[(7)]);
var state_19238__$1 = state_19238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19238__$1,(11),out,inst_19220);
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
});})(c__15919__auto___19259,out))
;
return ((function (switch__15736__auto__,c__15919__auto___19259,out){
return (function() {
var cljs$core$async$state_machine__15737__auto__ = null;
var cljs$core$async$state_machine__15737__auto____0 = (function (){
var statearr_19254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19254[(0)] = cljs$core$async$state_machine__15737__auto__);

(statearr_19254[(1)] = (1));

return statearr_19254;
});
var cljs$core$async$state_machine__15737__auto____1 = (function (state_19238){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_19238);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e19255){if((e19255 instanceof Object)){
var ex__15740__auto__ = e19255;
var statearr_19256_19270 = state_19238;
(statearr_19256_19270[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19238);

return cljs.core.cst$kw$recur;
} else {
throw e19255;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__19271 = state_19238;
state_19238 = G__19271;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$state_machine__15737__auto__ = function(state_19238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15737__auto____1.call(this,state_19238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15737__auto____0;
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15737__auto____1;
return cljs$core$async$state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___19259,out))
})();
var state__15921__auto__ = (function (){var statearr_19257 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_19257[(6)] = c__15919__auto___19259);

return statearr_19257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___19259,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
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

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19276 = (function (f,ch,meta19274,_,fn1,meta19277){
this.f = f;
this.ch = ch;
this.meta19274 = meta19274;
this._ = _;
this.fn1 = fn1;
this.meta19277 = meta19277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19278,meta19277__$1){
var self__ = this;
var _19278__$1 = this;
return (new cljs.core.async.t_cljs$core$async19276(self__.f,self__.ch,self__.meta19274,self__._,self__.fn1,meta19277__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19278){
var self__ = this;
var _19278__$1 = this;
return self__.meta19277;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19272_SHARP_){
var G__19279 = (((p1__19272_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19272_SHARP_) : self__.f.call(null,p1__19272_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19279) : f1.call(null,G__19279));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19276.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19274,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19273], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19277], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19276";

cljs.core.async.t_cljs$core$async19276.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19276");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19276.
 */
cljs.core.async.__GT_t_cljs$core$async19276 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19276(f__$1,ch__$1,meta19274__$1,___$2,fn1__$1,meta19277){
return (new cljs.core.async.t_cljs$core$async19276(f__$1,ch__$1,meta19274__$1,___$2,fn1__$1,meta19277));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19276(self__.f,self__.ch,self__.meta19274,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19280 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19280) : self__.f.call(null,G__19280));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19273.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
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
cljs.core.async.__GT_t_cljs$core$async19273 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19273(f__$1,ch__$1,meta19274){
return (new cljs.core.async.t_cljs$core$async19273(f__$1,ch__$1,meta19274));
});

}

return (new cljs.core.async.t_cljs$core$async19273(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19281 = (function (f,ch,meta19282){
this.f = f;
this.ch = ch;
this.meta19282 = meta19282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19283,meta19282__$1){
var self__ = this;
var _19283__$1 = this;
return (new cljs.core.async.t_cljs$core$async19281(self__.f,self__.ch,meta19282__$1));
});

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19283){
var self__ = this;
var _19283__$1 = this;
return self__.meta19282;
});

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19282], null);
});

cljs.core.async.t_cljs$core$async19281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19281";

cljs.core.async.t_cljs$core$async19281.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19281");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19281.
 */
cljs.core.async.__GT_t_cljs$core$async19281 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19281(f__$1,ch__$1,meta19282){
return (new cljs.core.async.t_cljs$core$async19281(f__$1,ch__$1,meta19282));
});

}

return (new cljs.core.async.t_cljs$core$async19281(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19284 = (function (p,ch,meta19285){
this.p = p;
this.ch = ch;
this.meta19285 = meta19285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19286,meta19285__$1){
var self__ = this;
var _19286__$1 = this;
return (new cljs.core.async.t_cljs$core$async19284(self__.p,self__.ch,meta19285__$1));
});

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19286){
var self__ = this;
var _19286__$1 = this;
return self__.meta19285;
});

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19284.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19285], null);
});

cljs.core.async.t_cljs$core$async19284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19284";

cljs.core.async.t_cljs$core$async19284.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async19284");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19284.
 */
cljs.core.async.__GT_t_cljs$core$async19284 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19284(p__$1,ch__$1,meta19285){
return (new cljs.core.async.t_cljs$core$async19284(p__$1,ch__$1,meta19285));
});

}

return (new cljs.core.async.t_cljs$core$async19284(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19288 = arguments.length;
switch (G__19288) {
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
var c__15919__auto___19328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___19328,out){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___19328,out){
return (function (state_19309){
var state_val_19310 = (state_19309[(1)]);
if((state_val_19310 === (7))){
var inst_19305 = (state_19309[(2)]);
var state_19309__$1 = state_19309;
var statearr_19311_19329 = state_19309__$1;
(statearr_19311_19329[(2)] = inst_19305);

(statearr_19311_19329[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19310 === (1))){
var state_19309__$1 = state_19309;
var statearr_19312_19330 = state_19309__$1;
(statearr_19312_19330[(2)] = null);

(statearr_19312_19330[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19310 === (4))){
var inst_19291 = (state_19309[(7)]);
var inst_19291__$1 = (state_19309[(2)]);
var inst_19292 = (inst_19291__$1 == null);
var state_19309__$1 = (function (){var statearr_19313 = state_19309;
(statearr_19313[(7)] = inst_19291__$1);

return statearr_19313;
})();
if(cljs.core.truth_(inst_19292)){
var statearr_19314_19331 = state_19309__$1;
(statearr_19314_19331[(1)] = (5));

} else {
var statearr_19315_19332 = state_19309__$1;
(statearr_19315_19332[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19310 === (6))){
var inst_19291 = (state_19309[(7)]);
var inst_19296 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19291) : p.call(null,inst_19291));
var state_19309__$1 = state_19309;
if(cljs.core.truth_(inst_19296)){
var statearr_19316_19333 = state_19309__$1;
(statearr_19316_19333[(1)] = (8));

} else {
var statearr_19317_19334 = state_19309__$1;
(statearr_19317_19334[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19310 === (3))){
var inst_19307 = (state_19309[(2)]);
var state_19309__$1 = state_19309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19309__$1,inst_19307);
} else {
if((state_val_19310 === (2))){
var state_19309__$1 = state_19309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19309__$1,(4),ch);
} else {
if((state_val_19310 === (11))){
var inst_19299 = (state_19309[(2)]);
var state_19309__$1 = state_19309;
var statearr_19318_19335 = state_19309__$1;
(statearr_19318_19335[(2)] = inst_19299);

(statearr_19318_19335[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19310 === (9))){
var state_19309__$1 = state_19309;
var statearr_19319_19336 = state_19309__$1;
(statearr_19319_19336[(2)] = null);

(statearr_19319_19336[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19310 === (5))){
var inst_19294 = cljs.core.async.close_BANG_(out);
var state_19309__$1 = state_19309;
var statearr_19320_19337 = state_19309__$1;
(statearr_19320_19337[(2)] = inst_19294);

(statearr_19320_19337[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19310 === (10))){
var inst_19302 = (state_19309[(2)]);
var state_19309__$1 = (function (){var statearr_19321 = state_19309;
(statearr_19321[(8)] = inst_19302);

return statearr_19321;
})();
var statearr_19322_19338 = state_19309__$1;
(statearr_19322_19338[(2)] = null);

(statearr_19322_19338[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19310 === (8))){
var inst_19291 = (state_19309[(7)]);
var state_19309__$1 = state_19309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19309__$1,(11),out,inst_19291);
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
});})(c__15919__auto___19328,out))
;
return ((function (switch__15736__auto__,c__15919__auto___19328,out){
return (function() {
var cljs$core$async$state_machine__15737__auto__ = null;
var cljs$core$async$state_machine__15737__auto____0 = (function (){
var statearr_19323 = [null,null,null,null,null,null,null,null,null];
(statearr_19323[(0)] = cljs$core$async$state_machine__15737__auto__);

(statearr_19323[(1)] = (1));

return statearr_19323;
});
var cljs$core$async$state_machine__15737__auto____1 = (function (state_19309){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_19309);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e19324){if((e19324 instanceof Object)){
var ex__15740__auto__ = e19324;
var statearr_19325_19339 = state_19309;
(statearr_19325_19339[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19309);

return cljs.core.cst$kw$recur;
} else {
throw e19324;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__19340 = state_19309;
state_19309 = G__19340;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$state_machine__15737__auto__ = function(state_19309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15737__auto____1.call(this,state_19309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15737__auto____0;
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15737__auto____1;
return cljs$core$async$state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___19328,out))
})();
var state__15921__auto__ = (function (){var statearr_19326 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_19326[(6)] = c__15919__auto___19328);

return statearr_19326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___19328,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19342 = arguments.length;
switch (G__19342) {
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
var c__15919__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto__){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto__){
return (function (state_19405){
var state_val_19406 = (state_19405[(1)]);
if((state_val_19406 === (7))){
var inst_19401 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19407_19445 = state_19405__$1;
(statearr_19407_19445[(2)] = inst_19401);

(statearr_19407_19445[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (20))){
var inst_19371 = (state_19405[(7)]);
var inst_19382 = (state_19405[(2)]);
var inst_19383 = cljs.core.next(inst_19371);
var inst_19357 = inst_19383;
var inst_19358 = null;
var inst_19359 = (0);
var inst_19360 = (0);
var state_19405__$1 = (function (){var statearr_19408 = state_19405;
(statearr_19408[(8)] = inst_19359);

(statearr_19408[(9)] = inst_19360);

(statearr_19408[(10)] = inst_19357);

(statearr_19408[(11)] = inst_19382);

(statearr_19408[(12)] = inst_19358);

return statearr_19408;
})();
var statearr_19409_19446 = state_19405__$1;
(statearr_19409_19446[(2)] = null);

(statearr_19409_19446[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (1))){
var state_19405__$1 = state_19405;
var statearr_19410_19447 = state_19405__$1;
(statearr_19410_19447[(2)] = null);

(statearr_19410_19447[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (4))){
var inst_19346 = (state_19405[(13)]);
var inst_19346__$1 = (state_19405[(2)]);
var inst_19347 = (inst_19346__$1 == null);
var state_19405__$1 = (function (){var statearr_19411 = state_19405;
(statearr_19411[(13)] = inst_19346__$1);

return statearr_19411;
})();
if(cljs.core.truth_(inst_19347)){
var statearr_19412_19448 = state_19405__$1;
(statearr_19412_19448[(1)] = (5));

} else {
var statearr_19413_19449 = state_19405__$1;
(statearr_19413_19449[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (15))){
var state_19405__$1 = state_19405;
var statearr_19417_19450 = state_19405__$1;
(statearr_19417_19450[(2)] = null);

(statearr_19417_19450[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (21))){
var state_19405__$1 = state_19405;
var statearr_19418_19451 = state_19405__$1;
(statearr_19418_19451[(2)] = null);

(statearr_19418_19451[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (13))){
var inst_19359 = (state_19405[(8)]);
var inst_19360 = (state_19405[(9)]);
var inst_19357 = (state_19405[(10)]);
var inst_19358 = (state_19405[(12)]);
var inst_19367 = (state_19405[(2)]);
var inst_19368 = (inst_19360 + (1));
var tmp19414 = inst_19359;
var tmp19415 = inst_19357;
var tmp19416 = inst_19358;
var inst_19357__$1 = tmp19415;
var inst_19358__$1 = tmp19416;
var inst_19359__$1 = tmp19414;
var inst_19360__$1 = inst_19368;
var state_19405__$1 = (function (){var statearr_19419 = state_19405;
(statearr_19419[(8)] = inst_19359__$1);

(statearr_19419[(14)] = inst_19367);

(statearr_19419[(9)] = inst_19360__$1);

(statearr_19419[(10)] = inst_19357__$1);

(statearr_19419[(12)] = inst_19358__$1);

return statearr_19419;
})();
var statearr_19420_19452 = state_19405__$1;
(statearr_19420_19452[(2)] = null);

(statearr_19420_19452[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (22))){
var state_19405__$1 = state_19405;
var statearr_19421_19453 = state_19405__$1;
(statearr_19421_19453[(2)] = null);

(statearr_19421_19453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (6))){
var inst_19346 = (state_19405[(13)]);
var inst_19355 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19346) : f.call(null,inst_19346));
var inst_19356 = cljs.core.seq(inst_19355);
var inst_19357 = inst_19356;
var inst_19358 = null;
var inst_19359 = (0);
var inst_19360 = (0);
var state_19405__$1 = (function (){var statearr_19422 = state_19405;
(statearr_19422[(8)] = inst_19359);

(statearr_19422[(9)] = inst_19360);

(statearr_19422[(10)] = inst_19357);

(statearr_19422[(12)] = inst_19358);

return statearr_19422;
})();
var statearr_19423_19454 = state_19405__$1;
(statearr_19423_19454[(2)] = null);

(statearr_19423_19454[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (17))){
var inst_19371 = (state_19405[(7)]);
var inst_19375 = cljs.core.chunk_first(inst_19371);
var inst_19376 = cljs.core.chunk_rest(inst_19371);
var inst_19377 = cljs.core.count(inst_19375);
var inst_19357 = inst_19376;
var inst_19358 = inst_19375;
var inst_19359 = inst_19377;
var inst_19360 = (0);
var state_19405__$1 = (function (){var statearr_19424 = state_19405;
(statearr_19424[(8)] = inst_19359);

(statearr_19424[(9)] = inst_19360);

(statearr_19424[(10)] = inst_19357);

(statearr_19424[(12)] = inst_19358);

return statearr_19424;
})();
var statearr_19425_19455 = state_19405__$1;
(statearr_19425_19455[(2)] = null);

(statearr_19425_19455[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (3))){
var inst_19403 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19405__$1,inst_19403);
} else {
if((state_val_19406 === (12))){
var inst_19391 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19426_19456 = state_19405__$1;
(statearr_19426_19456[(2)] = inst_19391);

(statearr_19426_19456[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (2))){
var state_19405__$1 = state_19405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19405__$1,(4),in$);
} else {
if((state_val_19406 === (23))){
var inst_19399 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19427_19457 = state_19405__$1;
(statearr_19427_19457[(2)] = inst_19399);

(statearr_19427_19457[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (19))){
var inst_19386 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19428_19458 = state_19405__$1;
(statearr_19428_19458[(2)] = inst_19386);

(statearr_19428_19458[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (11))){
var inst_19371 = (state_19405[(7)]);
var inst_19357 = (state_19405[(10)]);
var inst_19371__$1 = cljs.core.seq(inst_19357);
var state_19405__$1 = (function (){var statearr_19429 = state_19405;
(statearr_19429[(7)] = inst_19371__$1);

return statearr_19429;
})();
if(inst_19371__$1){
var statearr_19430_19459 = state_19405__$1;
(statearr_19430_19459[(1)] = (14));

} else {
var statearr_19431_19460 = state_19405__$1;
(statearr_19431_19460[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (9))){
var inst_19393 = (state_19405[(2)]);
var inst_19394 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19405__$1 = (function (){var statearr_19432 = state_19405;
(statearr_19432[(15)] = inst_19393);

return statearr_19432;
})();
if(cljs.core.truth_(inst_19394)){
var statearr_19433_19461 = state_19405__$1;
(statearr_19433_19461[(1)] = (21));

} else {
var statearr_19434_19462 = state_19405__$1;
(statearr_19434_19462[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (5))){
var inst_19349 = cljs.core.async.close_BANG_(out);
var state_19405__$1 = state_19405;
var statearr_19435_19463 = state_19405__$1;
(statearr_19435_19463[(2)] = inst_19349);

(statearr_19435_19463[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (14))){
var inst_19371 = (state_19405[(7)]);
var inst_19373 = cljs.core.chunked_seq_QMARK_(inst_19371);
var state_19405__$1 = state_19405;
if(inst_19373){
var statearr_19436_19464 = state_19405__$1;
(statearr_19436_19464[(1)] = (17));

} else {
var statearr_19437_19465 = state_19405__$1;
(statearr_19437_19465[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (16))){
var inst_19389 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19438_19466 = state_19405__$1;
(statearr_19438_19466[(2)] = inst_19389);

(statearr_19438_19466[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (10))){
var inst_19360 = (state_19405[(9)]);
var inst_19358 = (state_19405[(12)]);
var inst_19365 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19358,inst_19360);
var state_19405__$1 = state_19405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19405__$1,(13),out,inst_19365);
} else {
if((state_val_19406 === (18))){
var inst_19371 = (state_19405[(7)]);
var inst_19380 = cljs.core.first(inst_19371);
var state_19405__$1 = state_19405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19405__$1,(20),out,inst_19380);
} else {
if((state_val_19406 === (8))){
var inst_19359 = (state_19405[(8)]);
var inst_19360 = (state_19405[(9)]);
var inst_19362 = (inst_19360 < inst_19359);
var inst_19363 = inst_19362;
var state_19405__$1 = state_19405;
if(cljs.core.truth_(inst_19363)){
var statearr_19439_19467 = state_19405__$1;
(statearr_19439_19467[(1)] = (10));

} else {
var statearr_19440_19468 = state_19405__$1;
(statearr_19440_19468[(1)] = (11));

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
});})(c__15919__auto__))
;
return ((function (switch__15736__auto__,c__15919__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15737__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15737__auto____0 = (function (){
var statearr_19441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19441[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15737__auto__);

(statearr_19441[(1)] = (1));

return statearr_19441;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15737__auto____1 = (function (state_19405){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_19405);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e19442){if((e19442 instanceof Object)){
var ex__15740__auto__ = e19442;
var statearr_19443_19469 = state_19405;
(statearr_19443_19469[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19405);

return cljs.core.cst$kw$recur;
} else {
throw e19442;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__19470 = state_19405;
state_19405 = G__19470;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15737__auto__ = function(state_19405){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15737__auto____1.call(this,state_19405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15737__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15737__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto__))
})();
var state__15921__auto__ = (function (){var statearr_19444 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_19444[(6)] = c__15919__auto__);

return statearr_19444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto__))
);

return c__15919__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19472 = arguments.length;
switch (G__19472) {
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
var G__19475 = arguments.length;
switch (G__19475) {
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
var G__19478 = arguments.length;
switch (G__19478) {
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
var c__15919__auto___19525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___19525,out){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___19525,out){
return (function (state_19502){
var state_val_19503 = (state_19502[(1)]);
if((state_val_19503 === (7))){
var inst_19497 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
var statearr_19504_19526 = state_19502__$1;
(statearr_19504_19526[(2)] = inst_19497);

(statearr_19504_19526[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19503 === (1))){
var inst_19479 = null;
var state_19502__$1 = (function (){var statearr_19505 = state_19502;
(statearr_19505[(7)] = inst_19479);

return statearr_19505;
})();
var statearr_19506_19527 = state_19502__$1;
(statearr_19506_19527[(2)] = null);

(statearr_19506_19527[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19503 === (4))){
var inst_19482 = (state_19502[(8)]);
var inst_19482__$1 = (state_19502[(2)]);
var inst_19483 = (inst_19482__$1 == null);
var inst_19484 = cljs.core.not(inst_19483);
var state_19502__$1 = (function (){var statearr_19507 = state_19502;
(statearr_19507[(8)] = inst_19482__$1);

return statearr_19507;
})();
if(inst_19484){
var statearr_19508_19528 = state_19502__$1;
(statearr_19508_19528[(1)] = (5));

} else {
var statearr_19509_19529 = state_19502__$1;
(statearr_19509_19529[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19503 === (6))){
var state_19502__$1 = state_19502;
var statearr_19510_19530 = state_19502__$1;
(statearr_19510_19530[(2)] = null);

(statearr_19510_19530[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19503 === (3))){
var inst_19499 = (state_19502[(2)]);
var inst_19500 = cljs.core.async.close_BANG_(out);
var state_19502__$1 = (function (){var statearr_19511 = state_19502;
(statearr_19511[(9)] = inst_19499);

return statearr_19511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19502__$1,inst_19500);
} else {
if((state_val_19503 === (2))){
var state_19502__$1 = state_19502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19502__$1,(4),ch);
} else {
if((state_val_19503 === (11))){
var inst_19482 = (state_19502[(8)]);
var inst_19491 = (state_19502[(2)]);
var inst_19479 = inst_19482;
var state_19502__$1 = (function (){var statearr_19512 = state_19502;
(statearr_19512[(7)] = inst_19479);

(statearr_19512[(10)] = inst_19491);

return statearr_19512;
})();
var statearr_19513_19531 = state_19502__$1;
(statearr_19513_19531[(2)] = null);

(statearr_19513_19531[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19503 === (9))){
var inst_19482 = (state_19502[(8)]);
var state_19502__$1 = state_19502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19502__$1,(11),out,inst_19482);
} else {
if((state_val_19503 === (5))){
var inst_19482 = (state_19502[(8)]);
var inst_19479 = (state_19502[(7)]);
var inst_19486 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19482,inst_19479);
var state_19502__$1 = state_19502;
if(inst_19486){
var statearr_19515_19532 = state_19502__$1;
(statearr_19515_19532[(1)] = (8));

} else {
var statearr_19516_19533 = state_19502__$1;
(statearr_19516_19533[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19503 === (10))){
var inst_19494 = (state_19502[(2)]);
var state_19502__$1 = state_19502;
var statearr_19517_19534 = state_19502__$1;
(statearr_19517_19534[(2)] = inst_19494);

(statearr_19517_19534[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19503 === (8))){
var inst_19479 = (state_19502[(7)]);
var tmp19514 = inst_19479;
var inst_19479__$1 = tmp19514;
var state_19502__$1 = (function (){var statearr_19518 = state_19502;
(statearr_19518[(7)] = inst_19479__$1);

return statearr_19518;
})();
var statearr_19519_19535 = state_19502__$1;
(statearr_19519_19535[(2)] = null);

(statearr_19519_19535[(1)] = (2));


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
});})(c__15919__auto___19525,out))
;
return ((function (switch__15736__auto__,c__15919__auto___19525,out){
return (function() {
var cljs$core$async$state_machine__15737__auto__ = null;
var cljs$core$async$state_machine__15737__auto____0 = (function (){
var statearr_19520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19520[(0)] = cljs$core$async$state_machine__15737__auto__);

(statearr_19520[(1)] = (1));

return statearr_19520;
});
var cljs$core$async$state_machine__15737__auto____1 = (function (state_19502){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_19502);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e19521){if((e19521 instanceof Object)){
var ex__15740__auto__ = e19521;
var statearr_19522_19536 = state_19502;
(statearr_19522_19536[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19502);

return cljs.core.cst$kw$recur;
} else {
throw e19521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__19537 = state_19502;
state_19502 = G__19537;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$state_machine__15737__auto__ = function(state_19502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15737__auto____1.call(this,state_19502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15737__auto____0;
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15737__auto____1;
return cljs$core$async$state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___19525,out))
})();
var state__15921__auto__ = (function (){var statearr_19523 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_19523[(6)] = c__15919__auto___19525);

return statearr_19523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___19525,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19539 = arguments.length;
switch (G__19539) {
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
var c__15919__auto___19605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___19605,out){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___19605,out){
return (function (state_19577){
var state_val_19578 = (state_19577[(1)]);
if((state_val_19578 === (7))){
var inst_19573 = (state_19577[(2)]);
var state_19577__$1 = state_19577;
var statearr_19579_19606 = state_19577__$1;
(statearr_19579_19606[(2)] = inst_19573);

(statearr_19579_19606[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19578 === (1))){
var inst_19540 = (new Array(n));
var inst_19541 = inst_19540;
var inst_19542 = (0);
var state_19577__$1 = (function (){var statearr_19580 = state_19577;
(statearr_19580[(7)] = inst_19542);

(statearr_19580[(8)] = inst_19541);

return statearr_19580;
})();
var statearr_19581_19607 = state_19577__$1;
(statearr_19581_19607[(2)] = null);

(statearr_19581_19607[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19578 === (4))){
var inst_19545 = (state_19577[(9)]);
var inst_19545__$1 = (state_19577[(2)]);
var inst_19546 = (inst_19545__$1 == null);
var inst_19547 = cljs.core.not(inst_19546);
var state_19577__$1 = (function (){var statearr_19582 = state_19577;
(statearr_19582[(9)] = inst_19545__$1);

return statearr_19582;
})();
if(inst_19547){
var statearr_19583_19608 = state_19577__$1;
(statearr_19583_19608[(1)] = (5));

} else {
var statearr_19584_19609 = state_19577__$1;
(statearr_19584_19609[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19578 === (15))){
var inst_19567 = (state_19577[(2)]);
var state_19577__$1 = state_19577;
var statearr_19585_19610 = state_19577__$1;
(statearr_19585_19610[(2)] = inst_19567);

(statearr_19585_19610[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19578 === (13))){
var state_19577__$1 = state_19577;
var statearr_19586_19611 = state_19577__$1;
(statearr_19586_19611[(2)] = null);

(statearr_19586_19611[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19578 === (6))){
var inst_19542 = (state_19577[(7)]);
var inst_19563 = (inst_19542 > (0));
var state_19577__$1 = state_19577;
if(cljs.core.truth_(inst_19563)){
var statearr_19587_19612 = state_19577__$1;
(statearr_19587_19612[(1)] = (12));

} else {
var statearr_19588_19613 = state_19577__$1;
(statearr_19588_19613[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19578 === (3))){
var inst_19575 = (state_19577[(2)]);
var state_19577__$1 = state_19577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19577__$1,inst_19575);
} else {
if((state_val_19578 === (12))){
var inst_19541 = (state_19577[(8)]);
var inst_19565 = cljs.core.vec(inst_19541);
var state_19577__$1 = state_19577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19577__$1,(15),out,inst_19565);
} else {
if((state_val_19578 === (2))){
var state_19577__$1 = state_19577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19577__$1,(4),ch);
} else {
if((state_val_19578 === (11))){
var inst_19557 = (state_19577[(2)]);
var inst_19558 = (new Array(n));
var inst_19541 = inst_19558;
var inst_19542 = (0);
var state_19577__$1 = (function (){var statearr_19589 = state_19577;
(statearr_19589[(7)] = inst_19542);

(statearr_19589[(8)] = inst_19541);

(statearr_19589[(10)] = inst_19557);

return statearr_19589;
})();
var statearr_19590_19614 = state_19577__$1;
(statearr_19590_19614[(2)] = null);

(statearr_19590_19614[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19578 === (9))){
var inst_19541 = (state_19577[(8)]);
var inst_19555 = cljs.core.vec(inst_19541);
var state_19577__$1 = state_19577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19577__$1,(11),out,inst_19555);
} else {
if((state_val_19578 === (5))){
var inst_19542 = (state_19577[(7)]);
var inst_19541 = (state_19577[(8)]);
var inst_19550 = (state_19577[(11)]);
var inst_19545 = (state_19577[(9)]);
var inst_19549 = (inst_19541[inst_19542] = inst_19545);
var inst_19550__$1 = (inst_19542 + (1));
var inst_19551 = (inst_19550__$1 < n);
var state_19577__$1 = (function (){var statearr_19591 = state_19577;
(statearr_19591[(11)] = inst_19550__$1);

(statearr_19591[(12)] = inst_19549);

return statearr_19591;
})();
if(cljs.core.truth_(inst_19551)){
var statearr_19592_19615 = state_19577__$1;
(statearr_19592_19615[(1)] = (8));

} else {
var statearr_19593_19616 = state_19577__$1;
(statearr_19593_19616[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19578 === (14))){
var inst_19570 = (state_19577[(2)]);
var inst_19571 = cljs.core.async.close_BANG_(out);
var state_19577__$1 = (function (){var statearr_19595 = state_19577;
(statearr_19595[(13)] = inst_19570);

return statearr_19595;
})();
var statearr_19596_19617 = state_19577__$1;
(statearr_19596_19617[(2)] = inst_19571);

(statearr_19596_19617[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19578 === (10))){
var inst_19561 = (state_19577[(2)]);
var state_19577__$1 = state_19577;
var statearr_19597_19618 = state_19577__$1;
(statearr_19597_19618[(2)] = inst_19561);

(statearr_19597_19618[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19578 === (8))){
var inst_19541 = (state_19577[(8)]);
var inst_19550 = (state_19577[(11)]);
var tmp19594 = inst_19541;
var inst_19541__$1 = tmp19594;
var inst_19542 = inst_19550;
var state_19577__$1 = (function (){var statearr_19598 = state_19577;
(statearr_19598[(7)] = inst_19542);

(statearr_19598[(8)] = inst_19541__$1);

return statearr_19598;
})();
var statearr_19599_19619 = state_19577__$1;
(statearr_19599_19619[(2)] = null);

(statearr_19599_19619[(1)] = (2));


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
});})(c__15919__auto___19605,out))
;
return ((function (switch__15736__auto__,c__15919__auto___19605,out){
return (function() {
var cljs$core$async$state_machine__15737__auto__ = null;
var cljs$core$async$state_machine__15737__auto____0 = (function (){
var statearr_19600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19600[(0)] = cljs$core$async$state_machine__15737__auto__);

(statearr_19600[(1)] = (1));

return statearr_19600;
});
var cljs$core$async$state_machine__15737__auto____1 = (function (state_19577){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_19577);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e19601){if((e19601 instanceof Object)){
var ex__15740__auto__ = e19601;
var statearr_19602_19620 = state_19577;
(statearr_19602_19620[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19577);

return cljs.core.cst$kw$recur;
} else {
throw e19601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__19621 = state_19577;
state_19577 = G__19621;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$state_machine__15737__auto__ = function(state_19577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15737__auto____1.call(this,state_19577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15737__auto____0;
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15737__auto____1;
return cljs$core$async$state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___19605,out))
})();
var state__15921__auto__ = (function (){var statearr_19603 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_19603[(6)] = c__15919__auto___19605);

return statearr_19603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___19605,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19623 = arguments.length;
switch (G__19623) {
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
var c__15919__auto___19693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15919__auto___19693,out){
return (function (){
var f__15920__auto__ = (function (){var switch__15736__auto__ = ((function (c__15919__auto___19693,out){
return (function (state_19665){
var state_val_19666 = (state_19665[(1)]);
if((state_val_19666 === (7))){
var inst_19661 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
var statearr_19667_19694 = state_19665__$1;
(statearr_19667_19694[(2)] = inst_19661);

(statearr_19667_19694[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19666 === (1))){
var inst_19624 = [];
var inst_19625 = inst_19624;
var inst_19626 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19665__$1 = (function (){var statearr_19668 = state_19665;
(statearr_19668[(7)] = inst_19626);

(statearr_19668[(8)] = inst_19625);

return statearr_19668;
})();
var statearr_19669_19695 = state_19665__$1;
(statearr_19669_19695[(2)] = null);

(statearr_19669_19695[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19666 === (4))){
var inst_19629 = (state_19665[(9)]);
var inst_19629__$1 = (state_19665[(2)]);
var inst_19630 = (inst_19629__$1 == null);
var inst_19631 = cljs.core.not(inst_19630);
var state_19665__$1 = (function (){var statearr_19670 = state_19665;
(statearr_19670[(9)] = inst_19629__$1);

return statearr_19670;
})();
if(inst_19631){
var statearr_19671_19696 = state_19665__$1;
(statearr_19671_19696[(1)] = (5));

} else {
var statearr_19672_19697 = state_19665__$1;
(statearr_19672_19697[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19666 === (15))){
var inst_19655 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
var statearr_19673_19698 = state_19665__$1;
(statearr_19673_19698[(2)] = inst_19655);

(statearr_19673_19698[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19666 === (13))){
var state_19665__$1 = state_19665;
var statearr_19674_19699 = state_19665__$1;
(statearr_19674_19699[(2)] = null);

(statearr_19674_19699[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19666 === (6))){
var inst_19625 = (state_19665[(8)]);
var inst_19650 = inst_19625.length;
var inst_19651 = (inst_19650 > (0));
var state_19665__$1 = state_19665;
if(cljs.core.truth_(inst_19651)){
var statearr_19675_19700 = state_19665__$1;
(statearr_19675_19700[(1)] = (12));

} else {
var statearr_19676_19701 = state_19665__$1;
(statearr_19676_19701[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19666 === (3))){
var inst_19663 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19665__$1,inst_19663);
} else {
if((state_val_19666 === (12))){
var inst_19625 = (state_19665[(8)]);
var inst_19653 = cljs.core.vec(inst_19625);
var state_19665__$1 = state_19665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19665__$1,(15),out,inst_19653);
} else {
if((state_val_19666 === (2))){
var state_19665__$1 = state_19665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19665__$1,(4),ch);
} else {
if((state_val_19666 === (11))){
var inst_19629 = (state_19665[(9)]);
var inst_19633 = (state_19665[(10)]);
var inst_19643 = (state_19665[(2)]);
var inst_19644 = [];
var inst_19645 = inst_19644.push(inst_19629);
var inst_19625 = inst_19644;
var inst_19626 = inst_19633;
var state_19665__$1 = (function (){var statearr_19677 = state_19665;
(statearr_19677[(7)] = inst_19626);

(statearr_19677[(11)] = inst_19643);

(statearr_19677[(8)] = inst_19625);

(statearr_19677[(12)] = inst_19645);

return statearr_19677;
})();
var statearr_19678_19702 = state_19665__$1;
(statearr_19678_19702[(2)] = null);

(statearr_19678_19702[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19666 === (9))){
var inst_19625 = (state_19665[(8)]);
var inst_19641 = cljs.core.vec(inst_19625);
var state_19665__$1 = state_19665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19665__$1,(11),out,inst_19641);
} else {
if((state_val_19666 === (5))){
var inst_19626 = (state_19665[(7)]);
var inst_19629 = (state_19665[(9)]);
var inst_19633 = (state_19665[(10)]);
var inst_19633__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19629) : f.call(null,inst_19629));
var inst_19634 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19633__$1,inst_19626);
var inst_19635 = cljs.core.keyword_identical_QMARK_(inst_19626,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19636 = ((inst_19634) || (inst_19635));
var state_19665__$1 = (function (){var statearr_19679 = state_19665;
(statearr_19679[(10)] = inst_19633__$1);

return statearr_19679;
})();
if(cljs.core.truth_(inst_19636)){
var statearr_19680_19703 = state_19665__$1;
(statearr_19680_19703[(1)] = (8));

} else {
var statearr_19681_19704 = state_19665__$1;
(statearr_19681_19704[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19666 === (14))){
var inst_19658 = (state_19665[(2)]);
var inst_19659 = cljs.core.async.close_BANG_(out);
var state_19665__$1 = (function (){var statearr_19683 = state_19665;
(statearr_19683[(13)] = inst_19658);

return statearr_19683;
})();
var statearr_19684_19705 = state_19665__$1;
(statearr_19684_19705[(2)] = inst_19659);

(statearr_19684_19705[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19666 === (10))){
var inst_19648 = (state_19665[(2)]);
var state_19665__$1 = state_19665;
var statearr_19685_19706 = state_19665__$1;
(statearr_19685_19706[(2)] = inst_19648);

(statearr_19685_19706[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19666 === (8))){
var inst_19629 = (state_19665[(9)]);
var inst_19625 = (state_19665[(8)]);
var inst_19633 = (state_19665[(10)]);
var inst_19638 = inst_19625.push(inst_19629);
var tmp19682 = inst_19625;
var inst_19625__$1 = tmp19682;
var inst_19626 = inst_19633;
var state_19665__$1 = (function (){var statearr_19686 = state_19665;
(statearr_19686[(7)] = inst_19626);

(statearr_19686[(14)] = inst_19638);

(statearr_19686[(8)] = inst_19625__$1);

return statearr_19686;
})();
var statearr_19687_19707 = state_19665__$1;
(statearr_19687_19707[(2)] = null);

(statearr_19687_19707[(1)] = (2));


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
});})(c__15919__auto___19693,out))
;
return ((function (switch__15736__auto__,c__15919__auto___19693,out){
return (function() {
var cljs$core$async$state_machine__15737__auto__ = null;
var cljs$core$async$state_machine__15737__auto____0 = (function (){
var statearr_19688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19688[(0)] = cljs$core$async$state_machine__15737__auto__);

(statearr_19688[(1)] = (1));

return statearr_19688;
});
var cljs$core$async$state_machine__15737__auto____1 = (function (state_19665){
while(true){
var ret_value__15738__auto__ = (function (){try{while(true){
var result__15739__auto__ = switch__15736__auto__(state_19665);
if(cljs.core.keyword_identical_QMARK_(result__15739__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15739__auto__;
}
break;
}
}catch (e19689){if((e19689 instanceof Object)){
var ex__15740__auto__ = e19689;
var statearr_19690_19708 = state_19665;
(statearr_19690_19708[(5)] = ex__15740__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19665);

return cljs.core.cst$kw$recur;
} else {
throw e19689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15738__auto__,cljs.core.cst$kw$recur)){
var G__19709 = state_19665;
state_19665 = G__19709;
continue;
} else {
return ret_value__15738__auto__;
}
break;
}
});
cljs$core$async$state_machine__15737__auto__ = function(state_19665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15737__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15737__auto____1.call(this,state_19665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15737__auto____0;
cljs$core$async$state_machine__15737__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15737__auto____1;
return cljs$core$async$state_machine__15737__auto__;
})()
;})(switch__15736__auto__,c__15919__auto___19693,out))
})();
var state__15921__auto__ = (function (){var statearr_19691 = (f__15920__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15920__auto__.cljs$core$IFn$_invoke$arity$0() : f__15920__auto__.call(null));
(statearr_19691[(6)] = c__15919__auto___19693);

return statearr_19691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15921__auto__);
});})(c__15919__auto___19693,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

