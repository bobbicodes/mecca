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
var G__20853 = arguments.length;
switch (G__20853) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20854 = (function (f,blockable,meta20855){
this.f = f;
this.blockable = blockable;
this.meta20855 = meta20855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20856,meta20855__$1){
var self__ = this;
var _20856__$1 = this;
return (new cljs.core.async.t_cljs$core$async20854(self__.f,self__.blockable,meta20855__$1));
});

cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20856){
var self__ = this;
var _20856__$1 = this;
return self__.meta20855;
});

cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20854.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta20855], null);
});

cljs.core.async.t_cljs$core$async20854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20854";

cljs.core.async.t_cljs$core$async20854.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async20854");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20854.
 */
cljs.core.async.__GT_t_cljs$core$async20854 = (function cljs$core$async$__GT_t_cljs$core$async20854(f__$1,blockable__$1,meta20855){
return (new cljs.core.async.t_cljs$core$async20854(f__$1,blockable__$1,meta20855));
});

}

return (new cljs.core.async.t_cljs$core$async20854(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20860 = arguments.length;
switch (G__20860) {
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
var G__20863 = arguments.length;
switch (G__20863) {
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
var G__20866 = arguments.length;
switch (G__20866) {
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
var val_20868 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20868) : fn1.call(null,val_20868));
} else {
cljs.core.async.impl.dispatch.run(((function (val_20868,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20868) : fn1.call(null,val_20868));
});})(val_20868,ret))
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
var G__20870 = arguments.length;
switch (G__20870) {
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
var n__4408__auto___20872 = n;
var x_20873 = (0);
while(true){
if((x_20873 < n__4408__auto___20872)){
(a[x_20873] = x_20873);

var G__20874 = (x_20873 + (1));
x_20873 = G__20874;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20875 = (function (flag,meta20876){
this.flag = flag;
this.meta20876 = meta20876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20877,meta20876__$1){
var self__ = this;
var _20877__$1 = this;
return (new cljs.core.async.t_cljs$core$async20875(self__.flag,meta20876__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20877){
var self__ = this;
var _20877__$1 = this;
return self__.meta20876;
});})(flag))
;

cljs.core.async.t_cljs$core$async20875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20875.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta20876], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20875";

cljs.core.async.t_cljs$core$async20875.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async20875");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20875.
 */
cljs.core.async.__GT_t_cljs$core$async20875 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20875(flag__$1,meta20876){
return (new cljs.core.async.t_cljs$core$async20875(flag__$1,meta20876));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20875(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20878 = (function (flag,cb,meta20879){
this.flag = flag;
this.cb = cb;
this.meta20879 = meta20879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20880,meta20879__$1){
var self__ = this;
var _20880__$1 = this;
return (new cljs.core.async.t_cljs$core$async20878(self__.flag,self__.cb,meta20879__$1));
});

cljs.core.async.t_cljs$core$async20878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20880){
var self__ = this;
var _20880__$1 = this;
return self__.meta20879;
});

cljs.core.async.t_cljs$core$async20878.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20878.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async20878.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20878.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta20879], null);
});

cljs.core.async.t_cljs$core$async20878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20878";

cljs.core.async.t_cljs$core$async20878.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async20878");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20878.
 */
cljs.core.async.__GT_t_cljs$core$async20878 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20878(flag__$1,cb__$1,meta20879){
return (new cljs.core.async.t_cljs$core$async20878(flag__$1,cb__$1,meta20879));
});

}

return (new cljs.core.async.t_cljs$core$async20878(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20881_SHARP_){
var G__20883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20881_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20883) : fret.call(null,G__20883));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20882_SHARP_){
var G__20884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20882_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20884) : fret.call(null,G__20884));
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
var G__20885 = (i + (1));
i = G__20885;
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
var len__4531__auto___20891 = arguments.length;
var i__4532__auto___20892 = (0);
while(true){
if((i__4532__auto___20892 < len__4531__auto___20891)){
args__4534__auto__.push((arguments[i__4532__auto___20892]));

var G__20893 = (i__4532__auto___20892 + (1));
i__4532__auto___20892 = G__20893;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20888){
var map__20889 = p__20888;
var map__20889__$1 = ((((!((map__20889 == null)))?(((((map__20889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20889):map__20889);
var opts = map__20889__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20886){
var G__20887 = cljs.core.first(seq20886);
var seq20886__$1 = cljs.core.next(seq20886);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20887,seq20886__$1);
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
var G__20895 = arguments.length;
switch (G__20895) {
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
var c__18926__auto___20941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___20941){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___20941){
return (function (state_20919){
var state_val_20920 = (state_20919[(1)]);
if((state_val_20920 === (7))){
var inst_20915 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
var statearr_20921_20942 = state_20919__$1;
(statearr_20921_20942[(2)] = inst_20915);

(statearr_20921_20942[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20920 === (1))){
var state_20919__$1 = state_20919;
var statearr_20922_20943 = state_20919__$1;
(statearr_20922_20943[(2)] = null);

(statearr_20922_20943[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20920 === (4))){
var inst_20898 = (state_20919[(7)]);
var inst_20898__$1 = (state_20919[(2)]);
var inst_20899 = (inst_20898__$1 == null);
var state_20919__$1 = (function (){var statearr_20923 = state_20919;
(statearr_20923[(7)] = inst_20898__$1);

return statearr_20923;
})();
if(cljs.core.truth_(inst_20899)){
var statearr_20924_20944 = state_20919__$1;
(statearr_20924_20944[(1)] = (5));

} else {
var statearr_20925_20945 = state_20919__$1;
(statearr_20925_20945[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20920 === (13))){
var state_20919__$1 = state_20919;
var statearr_20926_20946 = state_20919__$1;
(statearr_20926_20946[(2)] = null);

(statearr_20926_20946[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20920 === (6))){
var inst_20898 = (state_20919[(7)]);
var state_20919__$1 = state_20919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20919__$1,(11),to,inst_20898);
} else {
if((state_val_20920 === (3))){
var inst_20917 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20919__$1,inst_20917);
} else {
if((state_val_20920 === (12))){
var state_20919__$1 = state_20919;
var statearr_20927_20947 = state_20919__$1;
(statearr_20927_20947[(2)] = null);

(statearr_20927_20947[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20920 === (2))){
var state_20919__$1 = state_20919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20919__$1,(4),from);
} else {
if((state_val_20920 === (11))){
var inst_20908 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
if(cljs.core.truth_(inst_20908)){
var statearr_20928_20948 = state_20919__$1;
(statearr_20928_20948[(1)] = (12));

} else {
var statearr_20929_20949 = state_20919__$1;
(statearr_20929_20949[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20920 === (9))){
var state_20919__$1 = state_20919;
var statearr_20930_20950 = state_20919__$1;
(statearr_20930_20950[(2)] = null);

(statearr_20930_20950[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20920 === (5))){
var state_20919__$1 = state_20919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20931_20951 = state_20919__$1;
(statearr_20931_20951[(1)] = (8));

} else {
var statearr_20932_20952 = state_20919__$1;
(statearr_20932_20952[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20920 === (14))){
var inst_20913 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
var statearr_20933_20953 = state_20919__$1;
(statearr_20933_20953[(2)] = inst_20913);

(statearr_20933_20953[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20920 === (10))){
var inst_20905 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
var statearr_20934_20954 = state_20919__$1;
(statearr_20934_20954[(2)] = inst_20905);

(statearr_20934_20954[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20920 === (8))){
var inst_20902 = cljs.core.async.close_BANG_(to);
var state_20919__$1 = state_20919;
var statearr_20935_20955 = state_20919__$1;
(statearr_20935_20955[(2)] = inst_20902);

(statearr_20935_20955[(1)] = (10));


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
});})(c__18926__auto___20941))
;
return ((function (switch__18743__auto__,c__18926__auto___20941){
return (function() {
var cljs$core$async$state_machine__18744__auto__ = null;
var cljs$core$async$state_machine__18744__auto____0 = (function (){
var statearr_20936 = [null,null,null,null,null,null,null,null];
(statearr_20936[(0)] = cljs$core$async$state_machine__18744__auto__);

(statearr_20936[(1)] = (1));

return statearr_20936;
});
var cljs$core$async$state_machine__18744__auto____1 = (function (state_20919){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_20919);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e20937){if((e20937 instanceof Object)){
var ex__18747__auto__ = e20937;
var statearr_20938_20956 = state_20919;
(statearr_20938_20956[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20919);

return cljs.core.cst$kw$recur;
} else {
throw e20937;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__20957 = state_20919;
state_20919 = G__20957;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$state_machine__18744__auto__ = function(state_20919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18744__auto____1.call(this,state_20919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18744__auto____0;
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18744__auto____1;
return cljs$core$async$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___20941))
})();
var state__18928__auto__ = (function (){var statearr_20939 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_20939[(6)] = c__18926__auto___20941);

return statearr_20939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___20941))
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
return (function (p__20958){
var vec__20959 = p__20958;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20959,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20959,(1),null);
var job = vec__20959;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18926__auto___21130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___21130,res,vec__20959,v,p,job,jobs,results){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___21130,res,vec__20959,v,p,job,jobs,results){
return (function (state_20966){
var state_val_20967 = (state_20966[(1)]);
if((state_val_20967 === (1))){
var state_20966__$1 = state_20966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20966__$1,(2),res,v);
} else {
if((state_val_20967 === (2))){
var inst_20963 = (state_20966[(2)]);
var inst_20964 = cljs.core.async.close_BANG_(res);
var state_20966__$1 = (function (){var statearr_20968 = state_20966;
(statearr_20968[(7)] = inst_20963);

return statearr_20968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20966__$1,inst_20964);
} else {
return null;
}
}
});})(c__18926__auto___21130,res,vec__20959,v,p,job,jobs,results))
;
return ((function (switch__18743__auto__,c__18926__auto___21130,res,vec__20959,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0 = (function (){
var statearr_20969 = [null,null,null,null,null,null,null,null];
(statearr_20969[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__);

(statearr_20969[(1)] = (1));

return statearr_20969;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1 = (function (state_20966){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_20966);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e20970){if((e20970 instanceof Object)){
var ex__18747__auto__ = e20970;
var statearr_20971_21131 = state_20966;
(statearr_20971_21131[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20966);

return cljs.core.cst$kw$recur;
} else {
throw e20970;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__21132 = state_20966;
state_20966 = G__21132;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__ = function(state_20966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1.call(this,state_20966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___21130,res,vec__20959,v,p,job,jobs,results))
})();
var state__18928__auto__ = (function (){var statearr_20972 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_20972[(6)] = c__18926__auto___21130);

return statearr_20972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___21130,res,vec__20959,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20973){
var vec__20974 = p__20973;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20974,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20974,(1),null);
var job = vec__20974;
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
var n__4408__auto___21133 = n;
var __21134 = (0);
while(true){
if((__21134 < n__4408__auto___21133)){
var G__20977_21135 = type;
var G__20977_21136__$1 = (((G__20977_21135 instanceof cljs.core.Keyword))?G__20977_21135.fqn:null);
switch (G__20977_21136__$1) {
case "compute":
var c__18926__auto___21138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21134,c__18926__auto___21138,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (__21134,c__18926__auto___21138,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async){
return (function (state_20990){
var state_val_20991 = (state_20990[(1)]);
if((state_val_20991 === (1))){
var state_20990__$1 = state_20990;
var statearr_20992_21139 = state_20990__$1;
(statearr_20992_21139[(2)] = null);

(statearr_20992_21139[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20991 === (2))){
var state_20990__$1 = state_20990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20990__$1,(4),jobs);
} else {
if((state_val_20991 === (3))){
var inst_20988 = (state_20990[(2)]);
var state_20990__$1 = state_20990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20990__$1,inst_20988);
} else {
if((state_val_20991 === (4))){
var inst_20980 = (state_20990[(2)]);
var inst_20981 = process(inst_20980);
var state_20990__$1 = state_20990;
if(cljs.core.truth_(inst_20981)){
var statearr_20993_21140 = state_20990__$1;
(statearr_20993_21140[(1)] = (5));

} else {
var statearr_20994_21141 = state_20990__$1;
(statearr_20994_21141[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20991 === (5))){
var state_20990__$1 = state_20990;
var statearr_20995_21142 = state_20990__$1;
(statearr_20995_21142[(2)] = null);

(statearr_20995_21142[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20991 === (6))){
var state_20990__$1 = state_20990;
var statearr_20996_21143 = state_20990__$1;
(statearr_20996_21143[(2)] = null);

(statearr_20996_21143[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20991 === (7))){
var inst_20986 = (state_20990[(2)]);
var state_20990__$1 = state_20990;
var statearr_20997_21144 = state_20990__$1;
(statearr_20997_21144[(2)] = inst_20986);

(statearr_20997_21144[(1)] = (3));


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
});})(__21134,c__18926__auto___21138,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async))
;
return ((function (__21134,switch__18743__auto__,c__18926__auto___21138,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0 = (function (){
var statearr_20998 = [null,null,null,null,null,null,null];
(statearr_20998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__);

(statearr_20998[(1)] = (1));

return statearr_20998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1 = (function (state_20990){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_20990);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e20999){if((e20999 instanceof Object)){
var ex__18747__auto__ = e20999;
var statearr_21000_21145 = state_20990;
(statearr_21000_21145[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20990);

return cljs.core.cst$kw$recur;
} else {
throw e20999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__21146 = state_20990;
state_20990 = G__21146;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__ = function(state_20990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1.call(this,state_20990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__;
})()
;})(__21134,switch__18743__auto__,c__18926__auto___21138,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async))
})();
var state__18928__auto__ = (function (){var statearr_21001 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_21001[(6)] = c__18926__auto___21138);

return statearr_21001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(__21134,c__18926__auto___21138,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async))
);


break;
case "async":
var c__18926__auto___21147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21134,c__18926__auto___21147,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (__21134,c__18926__auto___21147,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async){
return (function (state_21014){
var state_val_21015 = (state_21014[(1)]);
if((state_val_21015 === (1))){
var state_21014__$1 = state_21014;
var statearr_21016_21148 = state_21014__$1;
(statearr_21016_21148[(2)] = null);

(statearr_21016_21148[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21015 === (2))){
var state_21014__$1 = state_21014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21014__$1,(4),jobs);
} else {
if((state_val_21015 === (3))){
var inst_21012 = (state_21014[(2)]);
var state_21014__$1 = state_21014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21014__$1,inst_21012);
} else {
if((state_val_21015 === (4))){
var inst_21004 = (state_21014[(2)]);
var inst_21005 = async(inst_21004);
var state_21014__$1 = state_21014;
if(cljs.core.truth_(inst_21005)){
var statearr_21017_21149 = state_21014__$1;
(statearr_21017_21149[(1)] = (5));

} else {
var statearr_21018_21150 = state_21014__$1;
(statearr_21018_21150[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21015 === (5))){
var state_21014__$1 = state_21014;
var statearr_21019_21151 = state_21014__$1;
(statearr_21019_21151[(2)] = null);

(statearr_21019_21151[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21015 === (6))){
var state_21014__$1 = state_21014;
var statearr_21020_21152 = state_21014__$1;
(statearr_21020_21152[(2)] = null);

(statearr_21020_21152[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21015 === (7))){
var inst_21010 = (state_21014[(2)]);
var state_21014__$1 = state_21014;
var statearr_21021_21153 = state_21014__$1;
(statearr_21021_21153[(2)] = inst_21010);

(statearr_21021_21153[(1)] = (3));


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
});})(__21134,c__18926__auto___21147,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async))
;
return ((function (__21134,switch__18743__auto__,c__18926__auto___21147,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0 = (function (){
var statearr_21022 = [null,null,null,null,null,null,null];
(statearr_21022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__);

(statearr_21022[(1)] = (1));

return statearr_21022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1 = (function (state_21014){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_21014);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e21023){if((e21023 instanceof Object)){
var ex__18747__auto__ = e21023;
var statearr_21024_21154 = state_21014;
(statearr_21024_21154[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21014);

return cljs.core.cst$kw$recur;
} else {
throw e21023;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__21155 = state_21014;
state_21014 = G__21155;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__ = function(state_21014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1.call(this,state_21014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__;
})()
;})(__21134,switch__18743__auto__,c__18926__auto___21147,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async))
})();
var state__18928__auto__ = (function (){var statearr_21025 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_21025[(6)] = c__18926__auto___21147);

return statearr_21025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(__21134,c__18926__auto___21147,G__20977_21135,G__20977_21136__$1,n__4408__auto___21133,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20977_21136__$1)].join('')));

}

var G__21156 = (__21134 + (1));
__21134 = G__21156;
continue;
} else {
}
break;
}

var c__18926__auto___21157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___21157,jobs,results,process,async){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___21157,jobs,results,process,async){
return (function (state_21047){
var state_val_21048 = (state_21047[(1)]);
if((state_val_21048 === (1))){
var state_21047__$1 = state_21047;
var statearr_21049_21158 = state_21047__$1;
(statearr_21049_21158[(2)] = null);

(statearr_21049_21158[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21048 === (2))){
var state_21047__$1 = state_21047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21047__$1,(4),from);
} else {
if((state_val_21048 === (3))){
var inst_21045 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21047__$1,inst_21045);
} else {
if((state_val_21048 === (4))){
var inst_21028 = (state_21047[(7)]);
var inst_21028__$1 = (state_21047[(2)]);
var inst_21029 = (inst_21028__$1 == null);
var state_21047__$1 = (function (){var statearr_21050 = state_21047;
(statearr_21050[(7)] = inst_21028__$1);

return statearr_21050;
})();
if(cljs.core.truth_(inst_21029)){
var statearr_21051_21159 = state_21047__$1;
(statearr_21051_21159[(1)] = (5));

} else {
var statearr_21052_21160 = state_21047__$1;
(statearr_21052_21160[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21048 === (5))){
var inst_21031 = cljs.core.async.close_BANG_(jobs);
var state_21047__$1 = state_21047;
var statearr_21053_21161 = state_21047__$1;
(statearr_21053_21161[(2)] = inst_21031);

(statearr_21053_21161[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21048 === (6))){
var inst_21033 = (state_21047[(8)]);
var inst_21028 = (state_21047[(7)]);
var inst_21033__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21034 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21035 = [inst_21028,inst_21033__$1];
var inst_21036 = (new cljs.core.PersistentVector(null,2,(5),inst_21034,inst_21035,null));
var state_21047__$1 = (function (){var statearr_21054 = state_21047;
(statearr_21054[(8)] = inst_21033__$1);

return statearr_21054;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21047__$1,(8),jobs,inst_21036);
} else {
if((state_val_21048 === (7))){
var inst_21043 = (state_21047[(2)]);
var state_21047__$1 = state_21047;
var statearr_21055_21162 = state_21047__$1;
(statearr_21055_21162[(2)] = inst_21043);

(statearr_21055_21162[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21048 === (8))){
var inst_21033 = (state_21047[(8)]);
var inst_21038 = (state_21047[(2)]);
var state_21047__$1 = (function (){var statearr_21056 = state_21047;
(statearr_21056[(9)] = inst_21038);

return statearr_21056;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21047__$1,(9),results,inst_21033);
} else {
if((state_val_21048 === (9))){
var inst_21040 = (state_21047[(2)]);
var state_21047__$1 = (function (){var statearr_21057 = state_21047;
(statearr_21057[(10)] = inst_21040);

return statearr_21057;
})();
var statearr_21058_21163 = state_21047__$1;
(statearr_21058_21163[(2)] = null);

(statearr_21058_21163[(1)] = (2));


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
});})(c__18926__auto___21157,jobs,results,process,async))
;
return ((function (switch__18743__auto__,c__18926__auto___21157,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0 = (function (){
var statearr_21059 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21059[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__);

(statearr_21059[(1)] = (1));

return statearr_21059;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1 = (function (state_21047){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_21047);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e21060){if((e21060 instanceof Object)){
var ex__18747__auto__ = e21060;
var statearr_21061_21164 = state_21047;
(statearr_21061_21164[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21047);

return cljs.core.cst$kw$recur;
} else {
throw e21060;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__21165 = state_21047;
state_21047 = G__21165;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__ = function(state_21047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1.call(this,state_21047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___21157,jobs,results,process,async))
})();
var state__18928__auto__ = (function (){var statearr_21062 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_21062[(6)] = c__18926__auto___21157);

return statearr_21062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___21157,jobs,results,process,async))
);


var c__18926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto__,jobs,results,process,async){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto__,jobs,results,process,async){
return (function (state_21100){
var state_val_21101 = (state_21100[(1)]);
if((state_val_21101 === (7))){
var inst_21096 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
var statearr_21102_21166 = state_21100__$1;
(statearr_21102_21166[(2)] = inst_21096);

(statearr_21102_21166[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (20))){
var state_21100__$1 = state_21100;
var statearr_21103_21167 = state_21100__$1;
(statearr_21103_21167[(2)] = null);

(statearr_21103_21167[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (1))){
var state_21100__$1 = state_21100;
var statearr_21104_21168 = state_21100__$1;
(statearr_21104_21168[(2)] = null);

(statearr_21104_21168[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (4))){
var inst_21065 = (state_21100[(7)]);
var inst_21065__$1 = (state_21100[(2)]);
var inst_21066 = (inst_21065__$1 == null);
var state_21100__$1 = (function (){var statearr_21105 = state_21100;
(statearr_21105[(7)] = inst_21065__$1);

return statearr_21105;
})();
if(cljs.core.truth_(inst_21066)){
var statearr_21106_21169 = state_21100__$1;
(statearr_21106_21169[(1)] = (5));

} else {
var statearr_21107_21170 = state_21100__$1;
(statearr_21107_21170[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (15))){
var inst_21078 = (state_21100[(8)]);
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21100__$1,(18),to,inst_21078);
} else {
if((state_val_21101 === (21))){
var inst_21091 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
var statearr_21108_21171 = state_21100__$1;
(statearr_21108_21171[(2)] = inst_21091);

(statearr_21108_21171[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (13))){
var inst_21093 = (state_21100[(2)]);
var state_21100__$1 = (function (){var statearr_21109 = state_21100;
(statearr_21109[(9)] = inst_21093);

return statearr_21109;
})();
var statearr_21110_21172 = state_21100__$1;
(statearr_21110_21172[(2)] = null);

(statearr_21110_21172[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (6))){
var inst_21065 = (state_21100[(7)]);
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21100__$1,(11),inst_21065);
} else {
if((state_val_21101 === (17))){
var inst_21086 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
if(cljs.core.truth_(inst_21086)){
var statearr_21111_21173 = state_21100__$1;
(statearr_21111_21173[(1)] = (19));

} else {
var statearr_21112_21174 = state_21100__$1;
(statearr_21112_21174[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (3))){
var inst_21098 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21100__$1,inst_21098);
} else {
if((state_val_21101 === (12))){
var inst_21075 = (state_21100[(10)]);
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21100__$1,(14),inst_21075);
} else {
if((state_val_21101 === (2))){
var state_21100__$1 = state_21100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21100__$1,(4),results);
} else {
if((state_val_21101 === (19))){
var state_21100__$1 = state_21100;
var statearr_21113_21175 = state_21100__$1;
(statearr_21113_21175[(2)] = null);

(statearr_21113_21175[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (11))){
var inst_21075 = (state_21100[(2)]);
var state_21100__$1 = (function (){var statearr_21114 = state_21100;
(statearr_21114[(10)] = inst_21075);

return statearr_21114;
})();
var statearr_21115_21176 = state_21100__$1;
(statearr_21115_21176[(2)] = null);

(statearr_21115_21176[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (9))){
var state_21100__$1 = state_21100;
var statearr_21116_21177 = state_21100__$1;
(statearr_21116_21177[(2)] = null);

(statearr_21116_21177[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (5))){
var state_21100__$1 = state_21100;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21117_21178 = state_21100__$1;
(statearr_21117_21178[(1)] = (8));

} else {
var statearr_21118_21179 = state_21100__$1;
(statearr_21118_21179[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (14))){
var inst_21078 = (state_21100[(8)]);
var inst_21080 = (state_21100[(11)]);
var inst_21078__$1 = (state_21100[(2)]);
var inst_21079 = (inst_21078__$1 == null);
var inst_21080__$1 = cljs.core.not(inst_21079);
var state_21100__$1 = (function (){var statearr_21119 = state_21100;
(statearr_21119[(8)] = inst_21078__$1);

(statearr_21119[(11)] = inst_21080__$1);

return statearr_21119;
})();
if(inst_21080__$1){
var statearr_21120_21180 = state_21100__$1;
(statearr_21120_21180[(1)] = (15));

} else {
var statearr_21121_21181 = state_21100__$1;
(statearr_21121_21181[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (16))){
var inst_21080 = (state_21100[(11)]);
var state_21100__$1 = state_21100;
var statearr_21122_21182 = state_21100__$1;
(statearr_21122_21182[(2)] = inst_21080);

(statearr_21122_21182[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (10))){
var inst_21072 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
var statearr_21123_21183 = state_21100__$1;
(statearr_21123_21183[(2)] = inst_21072);

(statearr_21123_21183[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (18))){
var inst_21083 = (state_21100[(2)]);
var state_21100__$1 = state_21100;
var statearr_21124_21184 = state_21100__$1;
(statearr_21124_21184[(2)] = inst_21083);

(statearr_21124_21184[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21101 === (8))){
var inst_21069 = cljs.core.async.close_BANG_(to);
var state_21100__$1 = state_21100;
var statearr_21125_21185 = state_21100__$1;
(statearr_21125_21185[(2)] = inst_21069);

(statearr_21125_21185[(1)] = (10));


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
});})(c__18926__auto__,jobs,results,process,async))
;
return ((function (switch__18743__auto__,c__18926__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0 = (function (){
var statearr_21126 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__);

(statearr_21126[(1)] = (1));

return statearr_21126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1 = (function (state_21100){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_21100);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e21127){if((e21127 instanceof Object)){
var ex__18747__auto__ = e21127;
var statearr_21128_21186 = state_21100;
(statearr_21128_21186[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21100);

return cljs.core.cst$kw$recur;
} else {
throw e21127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__21187 = state_21100;
state_21100 = G__21187;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__ = function(state_21100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1.call(this,state_21100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto__,jobs,results,process,async))
})();
var state__18928__auto__ = (function (){var statearr_21129 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_21129[(6)] = c__18926__auto__);

return statearr_21129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto__,jobs,results,process,async))
);

return c__18926__auto__;
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
var G__21189 = arguments.length;
switch (G__21189) {
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
var G__21192 = arguments.length;
switch (G__21192) {
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
var G__21195 = arguments.length;
switch (G__21195) {
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
var c__18926__auto___21244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___21244,tc,fc){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___21244,tc,fc){
return (function (state_21221){
var state_val_21222 = (state_21221[(1)]);
if((state_val_21222 === (7))){
var inst_21217 = (state_21221[(2)]);
var state_21221__$1 = state_21221;
var statearr_21223_21245 = state_21221__$1;
(statearr_21223_21245[(2)] = inst_21217);

(statearr_21223_21245[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21222 === (1))){
var state_21221__$1 = state_21221;
var statearr_21224_21246 = state_21221__$1;
(statearr_21224_21246[(2)] = null);

(statearr_21224_21246[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21222 === (4))){
var inst_21198 = (state_21221[(7)]);
var inst_21198__$1 = (state_21221[(2)]);
var inst_21199 = (inst_21198__$1 == null);
var state_21221__$1 = (function (){var statearr_21225 = state_21221;
(statearr_21225[(7)] = inst_21198__$1);

return statearr_21225;
})();
if(cljs.core.truth_(inst_21199)){
var statearr_21226_21247 = state_21221__$1;
(statearr_21226_21247[(1)] = (5));

} else {
var statearr_21227_21248 = state_21221__$1;
(statearr_21227_21248[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21222 === (13))){
var state_21221__$1 = state_21221;
var statearr_21228_21249 = state_21221__$1;
(statearr_21228_21249[(2)] = null);

(statearr_21228_21249[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21222 === (6))){
var inst_21198 = (state_21221[(7)]);
var inst_21204 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21198) : p.call(null,inst_21198));
var state_21221__$1 = state_21221;
if(cljs.core.truth_(inst_21204)){
var statearr_21229_21250 = state_21221__$1;
(statearr_21229_21250[(1)] = (9));

} else {
var statearr_21230_21251 = state_21221__$1;
(statearr_21230_21251[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21222 === (3))){
var inst_21219 = (state_21221[(2)]);
var state_21221__$1 = state_21221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21221__$1,inst_21219);
} else {
if((state_val_21222 === (12))){
var state_21221__$1 = state_21221;
var statearr_21231_21252 = state_21221__$1;
(statearr_21231_21252[(2)] = null);

(statearr_21231_21252[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21222 === (2))){
var state_21221__$1 = state_21221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21221__$1,(4),ch);
} else {
if((state_val_21222 === (11))){
var inst_21198 = (state_21221[(7)]);
var inst_21208 = (state_21221[(2)]);
var state_21221__$1 = state_21221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21221__$1,(8),inst_21208,inst_21198);
} else {
if((state_val_21222 === (9))){
var state_21221__$1 = state_21221;
var statearr_21232_21253 = state_21221__$1;
(statearr_21232_21253[(2)] = tc);

(statearr_21232_21253[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21222 === (5))){
var inst_21201 = cljs.core.async.close_BANG_(tc);
var inst_21202 = cljs.core.async.close_BANG_(fc);
var state_21221__$1 = (function (){var statearr_21233 = state_21221;
(statearr_21233[(8)] = inst_21201);

return statearr_21233;
})();
var statearr_21234_21254 = state_21221__$1;
(statearr_21234_21254[(2)] = inst_21202);

(statearr_21234_21254[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21222 === (14))){
var inst_21215 = (state_21221[(2)]);
var state_21221__$1 = state_21221;
var statearr_21235_21255 = state_21221__$1;
(statearr_21235_21255[(2)] = inst_21215);

(statearr_21235_21255[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21222 === (10))){
var state_21221__$1 = state_21221;
var statearr_21236_21256 = state_21221__$1;
(statearr_21236_21256[(2)] = fc);

(statearr_21236_21256[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21222 === (8))){
var inst_21210 = (state_21221[(2)]);
var state_21221__$1 = state_21221;
if(cljs.core.truth_(inst_21210)){
var statearr_21237_21257 = state_21221__$1;
(statearr_21237_21257[(1)] = (12));

} else {
var statearr_21238_21258 = state_21221__$1;
(statearr_21238_21258[(1)] = (13));

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
});})(c__18926__auto___21244,tc,fc))
;
return ((function (switch__18743__auto__,c__18926__auto___21244,tc,fc){
return (function() {
var cljs$core$async$state_machine__18744__auto__ = null;
var cljs$core$async$state_machine__18744__auto____0 = (function (){
var statearr_21239 = [null,null,null,null,null,null,null,null,null];
(statearr_21239[(0)] = cljs$core$async$state_machine__18744__auto__);

(statearr_21239[(1)] = (1));

return statearr_21239;
});
var cljs$core$async$state_machine__18744__auto____1 = (function (state_21221){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_21221);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e21240){if((e21240 instanceof Object)){
var ex__18747__auto__ = e21240;
var statearr_21241_21259 = state_21221;
(statearr_21241_21259[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21221);

return cljs.core.cst$kw$recur;
} else {
throw e21240;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__21260 = state_21221;
state_21221 = G__21260;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$state_machine__18744__auto__ = function(state_21221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18744__auto____1.call(this,state_21221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18744__auto____0;
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18744__auto____1;
return cljs$core$async$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___21244,tc,fc))
})();
var state__18928__auto__ = (function (){var statearr_21242 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_21242[(6)] = c__18926__auto___21244);

return statearr_21242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___21244,tc,fc))
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
var c__18926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto__){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto__){
return (function (state_21281){
var state_val_21282 = (state_21281[(1)]);
if((state_val_21282 === (7))){
var inst_21277 = (state_21281[(2)]);
var state_21281__$1 = state_21281;
var statearr_21283_21301 = state_21281__$1;
(statearr_21283_21301[(2)] = inst_21277);

(statearr_21283_21301[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21282 === (1))){
var inst_21261 = init;
var state_21281__$1 = (function (){var statearr_21284 = state_21281;
(statearr_21284[(7)] = inst_21261);

return statearr_21284;
})();
var statearr_21285_21302 = state_21281__$1;
(statearr_21285_21302[(2)] = null);

(statearr_21285_21302[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21282 === (4))){
var inst_21264 = (state_21281[(8)]);
var inst_21264__$1 = (state_21281[(2)]);
var inst_21265 = (inst_21264__$1 == null);
var state_21281__$1 = (function (){var statearr_21286 = state_21281;
(statearr_21286[(8)] = inst_21264__$1);

return statearr_21286;
})();
if(cljs.core.truth_(inst_21265)){
var statearr_21287_21303 = state_21281__$1;
(statearr_21287_21303[(1)] = (5));

} else {
var statearr_21288_21304 = state_21281__$1;
(statearr_21288_21304[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21282 === (6))){
var inst_21268 = (state_21281[(9)]);
var inst_21261 = (state_21281[(7)]);
var inst_21264 = (state_21281[(8)]);
var inst_21268__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21261,inst_21264) : f.call(null,inst_21261,inst_21264));
var inst_21269 = cljs.core.reduced_QMARK_(inst_21268__$1);
var state_21281__$1 = (function (){var statearr_21289 = state_21281;
(statearr_21289[(9)] = inst_21268__$1);

return statearr_21289;
})();
if(inst_21269){
var statearr_21290_21305 = state_21281__$1;
(statearr_21290_21305[(1)] = (8));

} else {
var statearr_21291_21306 = state_21281__$1;
(statearr_21291_21306[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21282 === (3))){
var inst_21279 = (state_21281[(2)]);
var state_21281__$1 = state_21281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21281__$1,inst_21279);
} else {
if((state_val_21282 === (2))){
var state_21281__$1 = state_21281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21281__$1,(4),ch);
} else {
if((state_val_21282 === (9))){
var inst_21268 = (state_21281[(9)]);
var inst_21261 = inst_21268;
var state_21281__$1 = (function (){var statearr_21292 = state_21281;
(statearr_21292[(7)] = inst_21261);

return statearr_21292;
})();
var statearr_21293_21307 = state_21281__$1;
(statearr_21293_21307[(2)] = null);

(statearr_21293_21307[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21282 === (5))){
var inst_21261 = (state_21281[(7)]);
var state_21281__$1 = state_21281;
var statearr_21294_21308 = state_21281__$1;
(statearr_21294_21308[(2)] = inst_21261);

(statearr_21294_21308[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21282 === (10))){
var inst_21275 = (state_21281[(2)]);
var state_21281__$1 = state_21281;
var statearr_21295_21309 = state_21281__$1;
(statearr_21295_21309[(2)] = inst_21275);

(statearr_21295_21309[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21282 === (8))){
var inst_21268 = (state_21281[(9)]);
var inst_21271 = cljs.core.deref(inst_21268);
var state_21281__$1 = state_21281;
var statearr_21296_21310 = state_21281__$1;
(statearr_21296_21310[(2)] = inst_21271);

(statearr_21296_21310[(1)] = (10));


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
});})(c__18926__auto__))
;
return ((function (switch__18743__auto__,c__18926__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18744__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18744__auto____0 = (function (){
var statearr_21297 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21297[(0)] = cljs$core$async$reduce_$_state_machine__18744__auto__);

(statearr_21297[(1)] = (1));

return statearr_21297;
});
var cljs$core$async$reduce_$_state_machine__18744__auto____1 = (function (state_21281){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_21281);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e21298){if((e21298 instanceof Object)){
var ex__18747__auto__ = e21298;
var statearr_21299_21311 = state_21281;
(statearr_21299_21311[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21281);

return cljs.core.cst$kw$recur;
} else {
throw e21298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__21312 = state_21281;
state_21281 = G__21312;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18744__auto__ = function(state_21281){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18744__auto____1.call(this,state_21281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18744__auto____0;
cljs$core$async$reduce_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18744__auto____1;
return cljs$core$async$reduce_$_state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto__))
})();
var state__18928__auto__ = (function (){var statearr_21300 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_21300[(6)] = c__18926__auto__);

return statearr_21300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto__))
);

return c__18926__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto__,f__$1){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto__,f__$1){
return (function (state_21318){
var state_val_21319 = (state_21318[(1)]);
if((state_val_21319 === (1))){
var inst_21313 = cljs.core.async.reduce(f__$1,init,ch);
var state_21318__$1 = state_21318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21318__$1,(2),inst_21313);
} else {
if((state_val_21319 === (2))){
var inst_21315 = (state_21318[(2)]);
var inst_21316 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_21315) : f__$1.call(null,inst_21315));
var state_21318__$1 = state_21318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21318__$1,inst_21316);
} else {
return null;
}
}
});})(c__18926__auto__,f__$1))
;
return ((function (switch__18743__auto__,c__18926__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__18744__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18744__auto____0 = (function (){
var statearr_21320 = [null,null,null,null,null,null,null];
(statearr_21320[(0)] = cljs$core$async$transduce_$_state_machine__18744__auto__);

(statearr_21320[(1)] = (1));

return statearr_21320;
});
var cljs$core$async$transduce_$_state_machine__18744__auto____1 = (function (state_21318){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_21318);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e21321){if((e21321 instanceof Object)){
var ex__18747__auto__ = e21321;
var statearr_21322_21324 = state_21318;
(statearr_21322_21324[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21318);

return cljs.core.cst$kw$recur;
} else {
throw e21321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__21325 = state_21318;
state_21318 = G__21325;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18744__auto__ = function(state_21318){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18744__auto____1.call(this,state_21318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18744__auto____0;
cljs$core$async$transduce_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18744__auto____1;
return cljs$core$async$transduce_$_state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto__,f__$1))
})();
var state__18928__auto__ = (function (){var statearr_21323 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_21323[(6)] = c__18926__auto__);

return statearr_21323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto__,f__$1))
);

return c__18926__auto__;
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
var G__21327 = arguments.length;
switch (G__21327) {
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
var c__18926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto__){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto__){
return (function (state_21352){
var state_val_21353 = (state_21352[(1)]);
if((state_val_21353 === (7))){
var inst_21334 = (state_21352[(2)]);
var state_21352__$1 = state_21352;
var statearr_21354_21375 = state_21352__$1;
(statearr_21354_21375[(2)] = inst_21334);

(statearr_21354_21375[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21353 === (1))){
var inst_21328 = cljs.core.seq(coll);
var inst_21329 = inst_21328;
var state_21352__$1 = (function (){var statearr_21355 = state_21352;
(statearr_21355[(7)] = inst_21329);

return statearr_21355;
})();
var statearr_21356_21376 = state_21352__$1;
(statearr_21356_21376[(2)] = null);

(statearr_21356_21376[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21353 === (4))){
var inst_21329 = (state_21352[(7)]);
var inst_21332 = cljs.core.first(inst_21329);
var state_21352__$1 = state_21352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21352__$1,(7),ch,inst_21332);
} else {
if((state_val_21353 === (13))){
var inst_21346 = (state_21352[(2)]);
var state_21352__$1 = state_21352;
var statearr_21357_21377 = state_21352__$1;
(statearr_21357_21377[(2)] = inst_21346);

(statearr_21357_21377[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21353 === (6))){
var inst_21337 = (state_21352[(2)]);
var state_21352__$1 = state_21352;
if(cljs.core.truth_(inst_21337)){
var statearr_21358_21378 = state_21352__$1;
(statearr_21358_21378[(1)] = (8));

} else {
var statearr_21359_21379 = state_21352__$1;
(statearr_21359_21379[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21353 === (3))){
var inst_21350 = (state_21352[(2)]);
var state_21352__$1 = state_21352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21352__$1,inst_21350);
} else {
if((state_val_21353 === (12))){
var state_21352__$1 = state_21352;
var statearr_21360_21380 = state_21352__$1;
(statearr_21360_21380[(2)] = null);

(statearr_21360_21380[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21353 === (2))){
var inst_21329 = (state_21352[(7)]);
var state_21352__$1 = state_21352;
if(cljs.core.truth_(inst_21329)){
var statearr_21361_21381 = state_21352__$1;
(statearr_21361_21381[(1)] = (4));

} else {
var statearr_21362_21382 = state_21352__$1;
(statearr_21362_21382[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21353 === (11))){
var inst_21343 = cljs.core.async.close_BANG_(ch);
var state_21352__$1 = state_21352;
var statearr_21363_21383 = state_21352__$1;
(statearr_21363_21383[(2)] = inst_21343);

(statearr_21363_21383[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21353 === (9))){
var state_21352__$1 = state_21352;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21364_21384 = state_21352__$1;
(statearr_21364_21384[(1)] = (11));

} else {
var statearr_21365_21385 = state_21352__$1;
(statearr_21365_21385[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21353 === (5))){
var inst_21329 = (state_21352[(7)]);
var state_21352__$1 = state_21352;
var statearr_21366_21386 = state_21352__$1;
(statearr_21366_21386[(2)] = inst_21329);

(statearr_21366_21386[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21353 === (10))){
var inst_21348 = (state_21352[(2)]);
var state_21352__$1 = state_21352;
var statearr_21367_21387 = state_21352__$1;
(statearr_21367_21387[(2)] = inst_21348);

(statearr_21367_21387[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21353 === (8))){
var inst_21329 = (state_21352[(7)]);
var inst_21339 = cljs.core.next(inst_21329);
var inst_21329__$1 = inst_21339;
var state_21352__$1 = (function (){var statearr_21368 = state_21352;
(statearr_21368[(7)] = inst_21329__$1);

return statearr_21368;
})();
var statearr_21369_21388 = state_21352__$1;
(statearr_21369_21388[(2)] = null);

(statearr_21369_21388[(1)] = (2));


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
});})(c__18926__auto__))
;
return ((function (switch__18743__auto__,c__18926__auto__){
return (function() {
var cljs$core$async$state_machine__18744__auto__ = null;
var cljs$core$async$state_machine__18744__auto____0 = (function (){
var statearr_21370 = [null,null,null,null,null,null,null,null];
(statearr_21370[(0)] = cljs$core$async$state_machine__18744__auto__);

(statearr_21370[(1)] = (1));

return statearr_21370;
});
var cljs$core$async$state_machine__18744__auto____1 = (function (state_21352){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_21352);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e21371){if((e21371 instanceof Object)){
var ex__18747__auto__ = e21371;
var statearr_21372_21389 = state_21352;
(statearr_21372_21389[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21352);

return cljs.core.cst$kw$recur;
} else {
throw e21371;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__21390 = state_21352;
state_21352 = G__21390;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$state_machine__18744__auto__ = function(state_21352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18744__auto____1.call(this,state_21352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18744__auto____0;
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18744__auto____1;
return cljs$core$async$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto__))
})();
var state__18928__auto__ = (function (){var statearr_21373 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_21373[(6)] = c__18926__auto__);

return statearr_21373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto__))
);

return c__18926__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21391 = (function (ch,cs,meta21392){
this.ch = ch;
this.cs = cs;
this.meta21392 = meta21392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21393,meta21392__$1){
var self__ = this;
var _21393__$1 = this;
return (new cljs.core.async.t_cljs$core$async21391(self__.ch,self__.cs,meta21392__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21393){
var self__ = this;
var _21393__$1 = this;
return self__.meta21392;
});})(cs))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21391.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21391.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta21392], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21391";

cljs.core.async.t_cljs$core$async21391.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async21391");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21391.
 */
cljs.core.async.__GT_t_cljs$core$async21391 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21391(ch__$1,cs__$1,meta21392){
return (new cljs.core.async.t_cljs$core$async21391(ch__$1,cs__$1,meta21392));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21391(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18926__auto___21613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___21613,cs,m,dchan,dctr,done){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___21613,cs,m,dchan,dctr,done){
return (function (state_21528){
var state_val_21529 = (state_21528[(1)]);
if((state_val_21529 === (7))){
var inst_21524 = (state_21528[(2)]);
var state_21528__$1 = state_21528;
var statearr_21530_21614 = state_21528__$1;
(statearr_21530_21614[(2)] = inst_21524);

(statearr_21530_21614[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (20))){
var inst_21427 = (state_21528[(7)]);
var inst_21439 = cljs.core.first(inst_21427);
var inst_21440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21439,(0),null);
var inst_21441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21439,(1),null);
var state_21528__$1 = (function (){var statearr_21531 = state_21528;
(statearr_21531[(8)] = inst_21440);

return statearr_21531;
})();
if(cljs.core.truth_(inst_21441)){
var statearr_21532_21615 = state_21528__$1;
(statearr_21532_21615[(1)] = (22));

} else {
var statearr_21533_21616 = state_21528__$1;
(statearr_21533_21616[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (27))){
var inst_21471 = (state_21528[(9)]);
var inst_21476 = (state_21528[(10)]);
var inst_21469 = (state_21528[(11)]);
var inst_21396 = (state_21528[(12)]);
var inst_21476__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21469,inst_21471);
var inst_21477 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21476__$1,inst_21396,done);
var state_21528__$1 = (function (){var statearr_21534 = state_21528;
(statearr_21534[(10)] = inst_21476__$1);

return statearr_21534;
})();
if(cljs.core.truth_(inst_21477)){
var statearr_21535_21617 = state_21528__$1;
(statearr_21535_21617[(1)] = (30));

} else {
var statearr_21536_21618 = state_21528__$1;
(statearr_21536_21618[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (1))){
var state_21528__$1 = state_21528;
var statearr_21537_21619 = state_21528__$1;
(statearr_21537_21619[(2)] = null);

(statearr_21537_21619[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (24))){
var inst_21427 = (state_21528[(7)]);
var inst_21446 = (state_21528[(2)]);
var inst_21447 = cljs.core.next(inst_21427);
var inst_21405 = inst_21447;
var inst_21406 = null;
var inst_21407 = (0);
var inst_21408 = (0);
var state_21528__$1 = (function (){var statearr_21538 = state_21528;
(statearr_21538[(13)] = inst_21406);

(statearr_21538[(14)] = inst_21407);

(statearr_21538[(15)] = inst_21446);

(statearr_21538[(16)] = inst_21405);

(statearr_21538[(17)] = inst_21408);

return statearr_21538;
})();
var statearr_21539_21620 = state_21528__$1;
(statearr_21539_21620[(2)] = null);

(statearr_21539_21620[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (39))){
var state_21528__$1 = state_21528;
var statearr_21543_21621 = state_21528__$1;
(statearr_21543_21621[(2)] = null);

(statearr_21543_21621[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (4))){
var inst_21396 = (state_21528[(12)]);
var inst_21396__$1 = (state_21528[(2)]);
var inst_21397 = (inst_21396__$1 == null);
var state_21528__$1 = (function (){var statearr_21544 = state_21528;
(statearr_21544[(12)] = inst_21396__$1);

return statearr_21544;
})();
if(cljs.core.truth_(inst_21397)){
var statearr_21545_21622 = state_21528__$1;
(statearr_21545_21622[(1)] = (5));

} else {
var statearr_21546_21623 = state_21528__$1;
(statearr_21546_21623[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (15))){
var inst_21406 = (state_21528[(13)]);
var inst_21407 = (state_21528[(14)]);
var inst_21405 = (state_21528[(16)]);
var inst_21408 = (state_21528[(17)]);
var inst_21423 = (state_21528[(2)]);
var inst_21424 = (inst_21408 + (1));
var tmp21540 = inst_21406;
var tmp21541 = inst_21407;
var tmp21542 = inst_21405;
var inst_21405__$1 = tmp21542;
var inst_21406__$1 = tmp21540;
var inst_21407__$1 = tmp21541;
var inst_21408__$1 = inst_21424;
var state_21528__$1 = (function (){var statearr_21547 = state_21528;
(statearr_21547[(13)] = inst_21406__$1);

(statearr_21547[(18)] = inst_21423);

(statearr_21547[(14)] = inst_21407__$1);

(statearr_21547[(16)] = inst_21405__$1);

(statearr_21547[(17)] = inst_21408__$1);

return statearr_21547;
})();
var statearr_21548_21624 = state_21528__$1;
(statearr_21548_21624[(2)] = null);

(statearr_21548_21624[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (21))){
var inst_21450 = (state_21528[(2)]);
var state_21528__$1 = state_21528;
var statearr_21552_21625 = state_21528__$1;
(statearr_21552_21625[(2)] = inst_21450);

(statearr_21552_21625[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (31))){
var inst_21476 = (state_21528[(10)]);
var inst_21480 = done(null);
var inst_21481 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21476);
var state_21528__$1 = (function (){var statearr_21553 = state_21528;
(statearr_21553[(19)] = inst_21480);

return statearr_21553;
})();
var statearr_21554_21626 = state_21528__$1;
(statearr_21554_21626[(2)] = inst_21481);

(statearr_21554_21626[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (32))){
var inst_21471 = (state_21528[(9)]);
var inst_21469 = (state_21528[(11)]);
var inst_21470 = (state_21528[(20)]);
var inst_21468 = (state_21528[(21)]);
var inst_21483 = (state_21528[(2)]);
var inst_21484 = (inst_21471 + (1));
var tmp21549 = inst_21469;
var tmp21550 = inst_21470;
var tmp21551 = inst_21468;
var inst_21468__$1 = tmp21551;
var inst_21469__$1 = tmp21549;
var inst_21470__$1 = tmp21550;
var inst_21471__$1 = inst_21484;
var state_21528__$1 = (function (){var statearr_21555 = state_21528;
(statearr_21555[(9)] = inst_21471__$1);

(statearr_21555[(11)] = inst_21469__$1);

(statearr_21555[(20)] = inst_21470__$1);

(statearr_21555[(22)] = inst_21483);

(statearr_21555[(21)] = inst_21468__$1);

return statearr_21555;
})();
var statearr_21556_21627 = state_21528__$1;
(statearr_21556_21627[(2)] = null);

(statearr_21556_21627[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (40))){
var inst_21496 = (state_21528[(23)]);
var inst_21500 = done(null);
var inst_21501 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21496);
var state_21528__$1 = (function (){var statearr_21557 = state_21528;
(statearr_21557[(24)] = inst_21500);

return statearr_21557;
})();
var statearr_21558_21628 = state_21528__$1;
(statearr_21558_21628[(2)] = inst_21501);

(statearr_21558_21628[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (33))){
var inst_21487 = (state_21528[(25)]);
var inst_21489 = cljs.core.chunked_seq_QMARK_(inst_21487);
var state_21528__$1 = state_21528;
if(inst_21489){
var statearr_21559_21629 = state_21528__$1;
(statearr_21559_21629[(1)] = (36));

} else {
var statearr_21560_21630 = state_21528__$1;
(statearr_21560_21630[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (13))){
var inst_21417 = (state_21528[(26)]);
var inst_21420 = cljs.core.async.close_BANG_(inst_21417);
var state_21528__$1 = state_21528;
var statearr_21561_21631 = state_21528__$1;
(statearr_21561_21631[(2)] = inst_21420);

(statearr_21561_21631[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (22))){
var inst_21440 = (state_21528[(8)]);
var inst_21443 = cljs.core.async.close_BANG_(inst_21440);
var state_21528__$1 = state_21528;
var statearr_21562_21632 = state_21528__$1;
(statearr_21562_21632[(2)] = inst_21443);

(statearr_21562_21632[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (36))){
var inst_21487 = (state_21528[(25)]);
var inst_21491 = cljs.core.chunk_first(inst_21487);
var inst_21492 = cljs.core.chunk_rest(inst_21487);
var inst_21493 = cljs.core.count(inst_21491);
var inst_21468 = inst_21492;
var inst_21469 = inst_21491;
var inst_21470 = inst_21493;
var inst_21471 = (0);
var state_21528__$1 = (function (){var statearr_21563 = state_21528;
(statearr_21563[(9)] = inst_21471);

(statearr_21563[(11)] = inst_21469);

(statearr_21563[(20)] = inst_21470);

(statearr_21563[(21)] = inst_21468);

return statearr_21563;
})();
var statearr_21564_21633 = state_21528__$1;
(statearr_21564_21633[(2)] = null);

(statearr_21564_21633[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (41))){
var inst_21487 = (state_21528[(25)]);
var inst_21503 = (state_21528[(2)]);
var inst_21504 = cljs.core.next(inst_21487);
var inst_21468 = inst_21504;
var inst_21469 = null;
var inst_21470 = (0);
var inst_21471 = (0);
var state_21528__$1 = (function (){var statearr_21565 = state_21528;
(statearr_21565[(9)] = inst_21471);

(statearr_21565[(11)] = inst_21469);

(statearr_21565[(27)] = inst_21503);

(statearr_21565[(20)] = inst_21470);

(statearr_21565[(21)] = inst_21468);

return statearr_21565;
})();
var statearr_21566_21634 = state_21528__$1;
(statearr_21566_21634[(2)] = null);

(statearr_21566_21634[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (43))){
var state_21528__$1 = state_21528;
var statearr_21567_21635 = state_21528__$1;
(statearr_21567_21635[(2)] = null);

(statearr_21567_21635[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (29))){
var inst_21512 = (state_21528[(2)]);
var state_21528__$1 = state_21528;
var statearr_21568_21636 = state_21528__$1;
(statearr_21568_21636[(2)] = inst_21512);

(statearr_21568_21636[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (44))){
var inst_21521 = (state_21528[(2)]);
var state_21528__$1 = (function (){var statearr_21569 = state_21528;
(statearr_21569[(28)] = inst_21521);

return statearr_21569;
})();
var statearr_21570_21637 = state_21528__$1;
(statearr_21570_21637[(2)] = null);

(statearr_21570_21637[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (6))){
var inst_21460 = (state_21528[(29)]);
var inst_21459 = cljs.core.deref(cs);
var inst_21460__$1 = cljs.core.keys(inst_21459);
var inst_21461 = cljs.core.count(inst_21460__$1);
var inst_21462 = cljs.core.reset_BANG_(dctr,inst_21461);
var inst_21467 = cljs.core.seq(inst_21460__$1);
var inst_21468 = inst_21467;
var inst_21469 = null;
var inst_21470 = (0);
var inst_21471 = (0);
var state_21528__$1 = (function (){var statearr_21571 = state_21528;
(statearr_21571[(9)] = inst_21471);

(statearr_21571[(11)] = inst_21469);

(statearr_21571[(29)] = inst_21460__$1);

(statearr_21571[(20)] = inst_21470);

(statearr_21571[(21)] = inst_21468);

(statearr_21571[(30)] = inst_21462);

return statearr_21571;
})();
var statearr_21572_21638 = state_21528__$1;
(statearr_21572_21638[(2)] = null);

(statearr_21572_21638[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (28))){
var inst_21487 = (state_21528[(25)]);
var inst_21468 = (state_21528[(21)]);
var inst_21487__$1 = cljs.core.seq(inst_21468);
var state_21528__$1 = (function (){var statearr_21573 = state_21528;
(statearr_21573[(25)] = inst_21487__$1);

return statearr_21573;
})();
if(inst_21487__$1){
var statearr_21574_21639 = state_21528__$1;
(statearr_21574_21639[(1)] = (33));

} else {
var statearr_21575_21640 = state_21528__$1;
(statearr_21575_21640[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (25))){
var inst_21471 = (state_21528[(9)]);
var inst_21470 = (state_21528[(20)]);
var inst_21473 = (inst_21471 < inst_21470);
var inst_21474 = inst_21473;
var state_21528__$1 = state_21528;
if(cljs.core.truth_(inst_21474)){
var statearr_21576_21641 = state_21528__$1;
(statearr_21576_21641[(1)] = (27));

} else {
var statearr_21577_21642 = state_21528__$1;
(statearr_21577_21642[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (34))){
var state_21528__$1 = state_21528;
var statearr_21578_21643 = state_21528__$1;
(statearr_21578_21643[(2)] = null);

(statearr_21578_21643[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (17))){
var state_21528__$1 = state_21528;
var statearr_21579_21644 = state_21528__$1;
(statearr_21579_21644[(2)] = null);

(statearr_21579_21644[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (3))){
var inst_21526 = (state_21528[(2)]);
var state_21528__$1 = state_21528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21528__$1,inst_21526);
} else {
if((state_val_21529 === (12))){
var inst_21455 = (state_21528[(2)]);
var state_21528__$1 = state_21528;
var statearr_21580_21645 = state_21528__$1;
(statearr_21580_21645[(2)] = inst_21455);

(statearr_21580_21645[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (2))){
var state_21528__$1 = state_21528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21528__$1,(4),ch);
} else {
if((state_val_21529 === (23))){
var state_21528__$1 = state_21528;
var statearr_21581_21646 = state_21528__$1;
(statearr_21581_21646[(2)] = null);

(statearr_21581_21646[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (35))){
var inst_21510 = (state_21528[(2)]);
var state_21528__$1 = state_21528;
var statearr_21582_21647 = state_21528__$1;
(statearr_21582_21647[(2)] = inst_21510);

(statearr_21582_21647[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (19))){
var inst_21427 = (state_21528[(7)]);
var inst_21431 = cljs.core.chunk_first(inst_21427);
var inst_21432 = cljs.core.chunk_rest(inst_21427);
var inst_21433 = cljs.core.count(inst_21431);
var inst_21405 = inst_21432;
var inst_21406 = inst_21431;
var inst_21407 = inst_21433;
var inst_21408 = (0);
var state_21528__$1 = (function (){var statearr_21583 = state_21528;
(statearr_21583[(13)] = inst_21406);

(statearr_21583[(14)] = inst_21407);

(statearr_21583[(16)] = inst_21405);

(statearr_21583[(17)] = inst_21408);

return statearr_21583;
})();
var statearr_21584_21648 = state_21528__$1;
(statearr_21584_21648[(2)] = null);

(statearr_21584_21648[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (11))){
var inst_21405 = (state_21528[(16)]);
var inst_21427 = (state_21528[(7)]);
var inst_21427__$1 = cljs.core.seq(inst_21405);
var state_21528__$1 = (function (){var statearr_21585 = state_21528;
(statearr_21585[(7)] = inst_21427__$1);

return statearr_21585;
})();
if(inst_21427__$1){
var statearr_21586_21649 = state_21528__$1;
(statearr_21586_21649[(1)] = (16));

} else {
var statearr_21587_21650 = state_21528__$1;
(statearr_21587_21650[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (9))){
var inst_21457 = (state_21528[(2)]);
var state_21528__$1 = state_21528;
var statearr_21588_21651 = state_21528__$1;
(statearr_21588_21651[(2)] = inst_21457);

(statearr_21588_21651[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (5))){
var inst_21403 = cljs.core.deref(cs);
var inst_21404 = cljs.core.seq(inst_21403);
var inst_21405 = inst_21404;
var inst_21406 = null;
var inst_21407 = (0);
var inst_21408 = (0);
var state_21528__$1 = (function (){var statearr_21589 = state_21528;
(statearr_21589[(13)] = inst_21406);

(statearr_21589[(14)] = inst_21407);

(statearr_21589[(16)] = inst_21405);

(statearr_21589[(17)] = inst_21408);

return statearr_21589;
})();
var statearr_21590_21652 = state_21528__$1;
(statearr_21590_21652[(2)] = null);

(statearr_21590_21652[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (14))){
var state_21528__$1 = state_21528;
var statearr_21591_21653 = state_21528__$1;
(statearr_21591_21653[(2)] = null);

(statearr_21591_21653[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (45))){
var inst_21518 = (state_21528[(2)]);
var state_21528__$1 = state_21528;
var statearr_21592_21654 = state_21528__$1;
(statearr_21592_21654[(2)] = inst_21518);

(statearr_21592_21654[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (26))){
var inst_21460 = (state_21528[(29)]);
var inst_21514 = (state_21528[(2)]);
var inst_21515 = cljs.core.seq(inst_21460);
var state_21528__$1 = (function (){var statearr_21593 = state_21528;
(statearr_21593[(31)] = inst_21514);

return statearr_21593;
})();
if(inst_21515){
var statearr_21594_21655 = state_21528__$1;
(statearr_21594_21655[(1)] = (42));

} else {
var statearr_21595_21656 = state_21528__$1;
(statearr_21595_21656[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (16))){
var inst_21427 = (state_21528[(7)]);
var inst_21429 = cljs.core.chunked_seq_QMARK_(inst_21427);
var state_21528__$1 = state_21528;
if(inst_21429){
var statearr_21596_21657 = state_21528__$1;
(statearr_21596_21657[(1)] = (19));

} else {
var statearr_21597_21658 = state_21528__$1;
(statearr_21597_21658[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (38))){
var inst_21507 = (state_21528[(2)]);
var state_21528__$1 = state_21528;
var statearr_21598_21659 = state_21528__$1;
(statearr_21598_21659[(2)] = inst_21507);

(statearr_21598_21659[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (30))){
var state_21528__$1 = state_21528;
var statearr_21599_21660 = state_21528__$1;
(statearr_21599_21660[(2)] = null);

(statearr_21599_21660[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (10))){
var inst_21406 = (state_21528[(13)]);
var inst_21408 = (state_21528[(17)]);
var inst_21416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21406,inst_21408);
var inst_21417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21416,(0),null);
var inst_21418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21416,(1),null);
var state_21528__$1 = (function (){var statearr_21600 = state_21528;
(statearr_21600[(26)] = inst_21417);

return statearr_21600;
})();
if(cljs.core.truth_(inst_21418)){
var statearr_21601_21661 = state_21528__$1;
(statearr_21601_21661[(1)] = (13));

} else {
var statearr_21602_21662 = state_21528__$1;
(statearr_21602_21662[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (18))){
var inst_21453 = (state_21528[(2)]);
var state_21528__$1 = state_21528;
var statearr_21603_21663 = state_21528__$1;
(statearr_21603_21663[(2)] = inst_21453);

(statearr_21603_21663[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (42))){
var state_21528__$1 = state_21528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21528__$1,(45),dchan);
} else {
if((state_val_21529 === (37))){
var inst_21496 = (state_21528[(23)]);
var inst_21487 = (state_21528[(25)]);
var inst_21396 = (state_21528[(12)]);
var inst_21496__$1 = cljs.core.first(inst_21487);
var inst_21497 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21496__$1,inst_21396,done);
var state_21528__$1 = (function (){var statearr_21604 = state_21528;
(statearr_21604[(23)] = inst_21496__$1);

return statearr_21604;
})();
if(cljs.core.truth_(inst_21497)){
var statearr_21605_21664 = state_21528__$1;
(statearr_21605_21664[(1)] = (39));

} else {
var statearr_21606_21665 = state_21528__$1;
(statearr_21606_21665[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21529 === (8))){
var inst_21407 = (state_21528[(14)]);
var inst_21408 = (state_21528[(17)]);
var inst_21410 = (inst_21408 < inst_21407);
var inst_21411 = inst_21410;
var state_21528__$1 = state_21528;
if(cljs.core.truth_(inst_21411)){
var statearr_21607_21666 = state_21528__$1;
(statearr_21607_21666[(1)] = (10));

} else {
var statearr_21608_21667 = state_21528__$1;
(statearr_21608_21667[(1)] = (11));

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
});})(c__18926__auto___21613,cs,m,dchan,dctr,done))
;
return ((function (switch__18743__auto__,c__18926__auto___21613,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18744__auto__ = null;
var cljs$core$async$mult_$_state_machine__18744__auto____0 = (function (){
var statearr_21609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21609[(0)] = cljs$core$async$mult_$_state_machine__18744__auto__);

(statearr_21609[(1)] = (1));

return statearr_21609;
});
var cljs$core$async$mult_$_state_machine__18744__auto____1 = (function (state_21528){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_21528);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e21610){if((e21610 instanceof Object)){
var ex__18747__auto__ = e21610;
var statearr_21611_21668 = state_21528;
(statearr_21611_21668[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21528);

return cljs.core.cst$kw$recur;
} else {
throw e21610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__21669 = state_21528;
state_21528 = G__21669;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18744__auto__ = function(state_21528){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18744__auto____1.call(this,state_21528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18744__auto____0;
cljs$core$async$mult_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18744__auto____1;
return cljs$core$async$mult_$_state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___21613,cs,m,dchan,dctr,done))
})();
var state__18928__auto__ = (function (){var statearr_21612 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_21612[(6)] = c__18926__auto___21613);

return statearr_21612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___21613,cs,m,dchan,dctr,done))
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
var G__21671 = arguments.length;
switch (G__21671) {
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
var len__4531__auto___21683 = arguments.length;
var i__4532__auto___21684 = (0);
while(true){
if((i__4532__auto___21684 < len__4531__auto___21683)){
args__4534__auto__.push((arguments[i__4532__auto___21684]));

var G__21685 = (i__4532__auto___21684 + (1));
i__4532__auto___21684 = G__21685;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21677){
var map__21678 = p__21677;
var map__21678__$1 = ((((!((map__21678 == null)))?(((((map__21678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21678):map__21678);
var opts = map__21678__$1;
var statearr_21680_21686 = state;
(statearr_21680_21686[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__21678,map__21678__$1,opts){
return (function (val){
var statearr_21681_21687 = state;
(statearr_21681_21687[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__21678,map__21678__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_21682_21688 = state;
(statearr_21682_21688[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21673){
var G__21674 = cljs.core.first(seq21673);
var seq21673__$1 = cljs.core.next(seq21673);
var G__21675 = cljs.core.first(seq21673__$1);
var seq21673__$2 = cljs.core.next(seq21673__$1);
var G__21676 = cljs.core.first(seq21673__$2);
var seq21673__$3 = cljs.core.next(seq21673__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21674,G__21675,G__21676,seq21673__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21689 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta21690){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta21690 = meta21690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21691,meta21690__$1){
var self__ = this;
var _21691__$1 = this;
return (new cljs.core.async.t_cljs$core$async21689(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta21690__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21691){
var self__ = this;
var _21691__$1 = this;
return self__.meta21690;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21689.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21689.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21689.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21689.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21689.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21689.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21689.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async21689.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta21690], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21689";

cljs.core.async.t_cljs$core$async21689.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async21689");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21689.
 */
cljs.core.async.__GT_t_cljs$core$async21689 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21689(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21690){
return (new cljs.core.async.t_cljs$core$async21689(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta21690));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21689(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18926__auto___21853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___21853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___21853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21793){
var state_val_21794 = (state_21793[(1)]);
if((state_val_21794 === (7))){
var inst_21708 = (state_21793[(2)]);
var state_21793__$1 = state_21793;
var statearr_21795_21854 = state_21793__$1;
(statearr_21795_21854[(2)] = inst_21708);

(statearr_21795_21854[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (20))){
var inst_21720 = (state_21793[(7)]);
var state_21793__$1 = state_21793;
var statearr_21796_21855 = state_21793__$1;
(statearr_21796_21855[(2)] = inst_21720);

(statearr_21796_21855[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (27))){
var state_21793__$1 = state_21793;
var statearr_21797_21856 = state_21793__$1;
(statearr_21797_21856[(2)] = null);

(statearr_21797_21856[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (1))){
var inst_21695 = (state_21793[(8)]);
var inst_21695__$1 = calc_state();
var inst_21697 = (inst_21695__$1 == null);
var inst_21698 = cljs.core.not(inst_21697);
var state_21793__$1 = (function (){var statearr_21798 = state_21793;
(statearr_21798[(8)] = inst_21695__$1);

return statearr_21798;
})();
if(inst_21698){
var statearr_21799_21857 = state_21793__$1;
(statearr_21799_21857[(1)] = (2));

} else {
var statearr_21800_21858 = state_21793__$1;
(statearr_21800_21858[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (24))){
var inst_21767 = (state_21793[(9)]);
var inst_21753 = (state_21793[(10)]);
var inst_21744 = (state_21793[(11)]);
var inst_21767__$1 = (inst_21744.cljs$core$IFn$_invoke$arity$1 ? inst_21744.cljs$core$IFn$_invoke$arity$1(inst_21753) : inst_21744.call(null,inst_21753));
var state_21793__$1 = (function (){var statearr_21801 = state_21793;
(statearr_21801[(9)] = inst_21767__$1);

return statearr_21801;
})();
if(cljs.core.truth_(inst_21767__$1)){
var statearr_21802_21859 = state_21793__$1;
(statearr_21802_21859[(1)] = (29));

} else {
var statearr_21803_21860 = state_21793__$1;
(statearr_21803_21860[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (4))){
var inst_21711 = (state_21793[(2)]);
var state_21793__$1 = state_21793;
if(cljs.core.truth_(inst_21711)){
var statearr_21804_21861 = state_21793__$1;
(statearr_21804_21861[(1)] = (8));

} else {
var statearr_21805_21862 = state_21793__$1;
(statearr_21805_21862[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (15))){
var inst_21738 = (state_21793[(2)]);
var state_21793__$1 = state_21793;
if(cljs.core.truth_(inst_21738)){
var statearr_21806_21863 = state_21793__$1;
(statearr_21806_21863[(1)] = (19));

} else {
var statearr_21807_21864 = state_21793__$1;
(statearr_21807_21864[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (21))){
var inst_21743 = (state_21793[(12)]);
var inst_21743__$1 = (state_21793[(2)]);
var inst_21744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21743__$1,cljs.core.cst$kw$solos);
var inst_21745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21743__$1,cljs.core.cst$kw$mutes);
var inst_21746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21743__$1,cljs.core.cst$kw$reads);
var state_21793__$1 = (function (){var statearr_21808 = state_21793;
(statearr_21808[(11)] = inst_21744);

(statearr_21808[(13)] = inst_21745);

(statearr_21808[(12)] = inst_21743__$1);

return statearr_21808;
})();
return cljs.core.async.ioc_alts_BANG_(state_21793__$1,(22),inst_21746);
} else {
if((state_val_21794 === (31))){
var inst_21775 = (state_21793[(2)]);
var state_21793__$1 = state_21793;
if(cljs.core.truth_(inst_21775)){
var statearr_21809_21865 = state_21793__$1;
(statearr_21809_21865[(1)] = (32));

} else {
var statearr_21810_21866 = state_21793__$1;
(statearr_21810_21866[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (32))){
var inst_21752 = (state_21793[(14)]);
var state_21793__$1 = state_21793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21793__$1,(35),out,inst_21752);
} else {
if((state_val_21794 === (33))){
var inst_21743 = (state_21793[(12)]);
var inst_21720 = inst_21743;
var state_21793__$1 = (function (){var statearr_21811 = state_21793;
(statearr_21811[(7)] = inst_21720);

return statearr_21811;
})();
var statearr_21812_21867 = state_21793__$1;
(statearr_21812_21867[(2)] = null);

(statearr_21812_21867[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (13))){
var inst_21720 = (state_21793[(7)]);
var inst_21727 = inst_21720.cljs$lang$protocol_mask$partition0$;
var inst_21728 = (inst_21727 & (64));
var inst_21729 = inst_21720.cljs$core$ISeq$;
var inst_21730 = (cljs.core.PROTOCOL_SENTINEL === inst_21729);
var inst_21731 = ((inst_21728) || (inst_21730));
var state_21793__$1 = state_21793;
if(cljs.core.truth_(inst_21731)){
var statearr_21813_21868 = state_21793__$1;
(statearr_21813_21868[(1)] = (16));

} else {
var statearr_21814_21869 = state_21793__$1;
(statearr_21814_21869[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (22))){
var inst_21752 = (state_21793[(14)]);
var inst_21753 = (state_21793[(10)]);
var inst_21751 = (state_21793[(2)]);
var inst_21752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21751,(0),null);
var inst_21753__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21751,(1),null);
var inst_21754 = (inst_21752__$1 == null);
var inst_21755 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21753__$1,change);
var inst_21756 = ((inst_21754) || (inst_21755));
var state_21793__$1 = (function (){var statearr_21815 = state_21793;
(statearr_21815[(14)] = inst_21752__$1);

(statearr_21815[(10)] = inst_21753__$1);

return statearr_21815;
})();
if(cljs.core.truth_(inst_21756)){
var statearr_21816_21870 = state_21793__$1;
(statearr_21816_21870[(1)] = (23));

} else {
var statearr_21817_21871 = state_21793__$1;
(statearr_21817_21871[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (36))){
var inst_21743 = (state_21793[(12)]);
var inst_21720 = inst_21743;
var state_21793__$1 = (function (){var statearr_21818 = state_21793;
(statearr_21818[(7)] = inst_21720);

return statearr_21818;
})();
var statearr_21819_21872 = state_21793__$1;
(statearr_21819_21872[(2)] = null);

(statearr_21819_21872[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (29))){
var inst_21767 = (state_21793[(9)]);
var state_21793__$1 = state_21793;
var statearr_21820_21873 = state_21793__$1;
(statearr_21820_21873[(2)] = inst_21767);

(statearr_21820_21873[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (6))){
var state_21793__$1 = state_21793;
var statearr_21821_21874 = state_21793__$1;
(statearr_21821_21874[(2)] = false);

(statearr_21821_21874[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (28))){
var inst_21763 = (state_21793[(2)]);
var inst_21764 = calc_state();
var inst_21720 = inst_21764;
var state_21793__$1 = (function (){var statearr_21822 = state_21793;
(statearr_21822[(15)] = inst_21763);

(statearr_21822[(7)] = inst_21720);

return statearr_21822;
})();
var statearr_21823_21875 = state_21793__$1;
(statearr_21823_21875[(2)] = null);

(statearr_21823_21875[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (25))){
var inst_21789 = (state_21793[(2)]);
var state_21793__$1 = state_21793;
var statearr_21824_21876 = state_21793__$1;
(statearr_21824_21876[(2)] = inst_21789);

(statearr_21824_21876[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (34))){
var inst_21787 = (state_21793[(2)]);
var state_21793__$1 = state_21793;
var statearr_21825_21877 = state_21793__$1;
(statearr_21825_21877[(2)] = inst_21787);

(statearr_21825_21877[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (17))){
var state_21793__$1 = state_21793;
var statearr_21826_21878 = state_21793__$1;
(statearr_21826_21878[(2)] = false);

(statearr_21826_21878[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (3))){
var state_21793__$1 = state_21793;
var statearr_21827_21879 = state_21793__$1;
(statearr_21827_21879[(2)] = false);

(statearr_21827_21879[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (12))){
var inst_21791 = (state_21793[(2)]);
var state_21793__$1 = state_21793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21793__$1,inst_21791);
} else {
if((state_val_21794 === (2))){
var inst_21695 = (state_21793[(8)]);
var inst_21700 = inst_21695.cljs$lang$protocol_mask$partition0$;
var inst_21701 = (inst_21700 & (64));
var inst_21702 = inst_21695.cljs$core$ISeq$;
var inst_21703 = (cljs.core.PROTOCOL_SENTINEL === inst_21702);
var inst_21704 = ((inst_21701) || (inst_21703));
var state_21793__$1 = state_21793;
if(cljs.core.truth_(inst_21704)){
var statearr_21828_21880 = state_21793__$1;
(statearr_21828_21880[(1)] = (5));

} else {
var statearr_21829_21881 = state_21793__$1;
(statearr_21829_21881[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (23))){
var inst_21752 = (state_21793[(14)]);
var inst_21758 = (inst_21752 == null);
var state_21793__$1 = state_21793;
if(cljs.core.truth_(inst_21758)){
var statearr_21830_21882 = state_21793__$1;
(statearr_21830_21882[(1)] = (26));

} else {
var statearr_21831_21883 = state_21793__$1;
(statearr_21831_21883[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (35))){
var inst_21778 = (state_21793[(2)]);
var state_21793__$1 = state_21793;
if(cljs.core.truth_(inst_21778)){
var statearr_21832_21884 = state_21793__$1;
(statearr_21832_21884[(1)] = (36));

} else {
var statearr_21833_21885 = state_21793__$1;
(statearr_21833_21885[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (19))){
var inst_21720 = (state_21793[(7)]);
var inst_21740 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21720);
var state_21793__$1 = state_21793;
var statearr_21834_21886 = state_21793__$1;
(statearr_21834_21886[(2)] = inst_21740);

(statearr_21834_21886[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (11))){
var inst_21720 = (state_21793[(7)]);
var inst_21724 = (inst_21720 == null);
var inst_21725 = cljs.core.not(inst_21724);
var state_21793__$1 = state_21793;
if(inst_21725){
var statearr_21835_21887 = state_21793__$1;
(statearr_21835_21887[(1)] = (13));

} else {
var statearr_21836_21888 = state_21793__$1;
(statearr_21836_21888[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (9))){
var inst_21695 = (state_21793[(8)]);
var state_21793__$1 = state_21793;
var statearr_21837_21889 = state_21793__$1;
(statearr_21837_21889[(2)] = inst_21695);

(statearr_21837_21889[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (5))){
var state_21793__$1 = state_21793;
var statearr_21838_21890 = state_21793__$1;
(statearr_21838_21890[(2)] = true);

(statearr_21838_21890[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (14))){
var state_21793__$1 = state_21793;
var statearr_21839_21891 = state_21793__$1;
(statearr_21839_21891[(2)] = false);

(statearr_21839_21891[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (26))){
var inst_21753 = (state_21793[(10)]);
var inst_21760 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21753);
var state_21793__$1 = state_21793;
var statearr_21840_21892 = state_21793__$1;
(statearr_21840_21892[(2)] = inst_21760);

(statearr_21840_21892[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (16))){
var state_21793__$1 = state_21793;
var statearr_21841_21893 = state_21793__$1;
(statearr_21841_21893[(2)] = true);

(statearr_21841_21893[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (38))){
var inst_21783 = (state_21793[(2)]);
var state_21793__$1 = state_21793;
var statearr_21842_21894 = state_21793__$1;
(statearr_21842_21894[(2)] = inst_21783);

(statearr_21842_21894[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (30))){
var inst_21753 = (state_21793[(10)]);
var inst_21744 = (state_21793[(11)]);
var inst_21745 = (state_21793[(13)]);
var inst_21770 = cljs.core.empty_QMARK_(inst_21744);
var inst_21771 = (inst_21745.cljs$core$IFn$_invoke$arity$1 ? inst_21745.cljs$core$IFn$_invoke$arity$1(inst_21753) : inst_21745.call(null,inst_21753));
var inst_21772 = cljs.core.not(inst_21771);
var inst_21773 = ((inst_21770) && (inst_21772));
var state_21793__$1 = state_21793;
var statearr_21843_21895 = state_21793__$1;
(statearr_21843_21895[(2)] = inst_21773);

(statearr_21843_21895[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (10))){
var inst_21695 = (state_21793[(8)]);
var inst_21716 = (state_21793[(2)]);
var inst_21717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21716,cljs.core.cst$kw$solos);
var inst_21718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21716,cljs.core.cst$kw$mutes);
var inst_21719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21716,cljs.core.cst$kw$reads);
var inst_21720 = inst_21695;
var state_21793__$1 = (function (){var statearr_21844 = state_21793;
(statearr_21844[(16)] = inst_21717);

(statearr_21844[(17)] = inst_21719);

(statearr_21844[(18)] = inst_21718);

(statearr_21844[(7)] = inst_21720);

return statearr_21844;
})();
var statearr_21845_21896 = state_21793__$1;
(statearr_21845_21896[(2)] = null);

(statearr_21845_21896[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (18))){
var inst_21735 = (state_21793[(2)]);
var state_21793__$1 = state_21793;
var statearr_21846_21897 = state_21793__$1;
(statearr_21846_21897[(2)] = inst_21735);

(statearr_21846_21897[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (37))){
var state_21793__$1 = state_21793;
var statearr_21847_21898 = state_21793__$1;
(statearr_21847_21898[(2)] = null);

(statearr_21847_21898[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21794 === (8))){
var inst_21695 = (state_21793[(8)]);
var inst_21713 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21695);
var state_21793__$1 = state_21793;
var statearr_21848_21899 = state_21793__$1;
(statearr_21848_21899[(2)] = inst_21713);

(statearr_21848_21899[(1)] = (10));


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
});})(c__18926__auto___21853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18743__auto__,c__18926__auto___21853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18744__auto__ = null;
var cljs$core$async$mix_$_state_machine__18744__auto____0 = (function (){
var statearr_21849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21849[(0)] = cljs$core$async$mix_$_state_machine__18744__auto__);

(statearr_21849[(1)] = (1));

return statearr_21849;
});
var cljs$core$async$mix_$_state_machine__18744__auto____1 = (function (state_21793){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_21793);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e21850){if((e21850 instanceof Object)){
var ex__18747__auto__ = e21850;
var statearr_21851_21900 = state_21793;
(statearr_21851_21900[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21793);

return cljs.core.cst$kw$recur;
} else {
throw e21850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__21901 = state_21793;
state_21793 = G__21901;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18744__auto__ = function(state_21793){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18744__auto____1.call(this,state_21793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18744__auto____0;
cljs$core$async$mix_$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18744__auto____1;
return cljs$core$async$mix_$_state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___21853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18928__auto__ = (function (){var statearr_21852 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_21852[(6)] = c__18926__auto___21853);

return statearr_21852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___21853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__21903 = arguments.length;
switch (G__21903) {
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
var G__21907 = arguments.length;
switch (G__21907) {
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
return (function (p1__21905_SHARP_){
if(cljs.core.truth_((p1__21905_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21905_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__21905_SHARP_.call(null,topic)))){
return p1__21905_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21905_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21908 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21908 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21909){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21909 = meta21909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21910,meta21909__$1){
var self__ = this;
var _21910__$1 = this;
return (new cljs.core.async.t_cljs$core$async21908(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21909__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21910){
var self__ = this;
var _21910__$1 = this;
return self__.meta21909;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21908.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21908.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21908.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21908.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async21908.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21908.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21908.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta21909], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21908";

cljs.core.async.t_cljs$core$async21908.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async21908");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21908.
 */
cljs.core.async.__GT_t_cljs$core$async21908 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21908(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21909){
return (new cljs.core.async.t_cljs$core$async21908(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21909));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21908(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18926__auto___22028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___22028,mults,ensure_mult,p){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___22028,mults,ensure_mult,p){
return (function (state_21982){
var state_val_21983 = (state_21982[(1)]);
if((state_val_21983 === (7))){
var inst_21978 = (state_21982[(2)]);
var state_21982__$1 = state_21982;
var statearr_21984_22029 = state_21982__$1;
(statearr_21984_22029[(2)] = inst_21978);

(statearr_21984_22029[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (20))){
var state_21982__$1 = state_21982;
var statearr_21985_22030 = state_21982__$1;
(statearr_21985_22030[(2)] = null);

(statearr_21985_22030[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (1))){
var state_21982__$1 = state_21982;
var statearr_21986_22031 = state_21982__$1;
(statearr_21986_22031[(2)] = null);

(statearr_21986_22031[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (24))){
var inst_21961 = (state_21982[(7)]);
var inst_21970 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_21961);
var state_21982__$1 = state_21982;
var statearr_21987_22032 = state_21982__$1;
(statearr_21987_22032[(2)] = inst_21970);

(statearr_21987_22032[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (4))){
var inst_21913 = (state_21982[(8)]);
var inst_21913__$1 = (state_21982[(2)]);
var inst_21914 = (inst_21913__$1 == null);
var state_21982__$1 = (function (){var statearr_21988 = state_21982;
(statearr_21988[(8)] = inst_21913__$1);

return statearr_21988;
})();
if(cljs.core.truth_(inst_21914)){
var statearr_21989_22033 = state_21982__$1;
(statearr_21989_22033[(1)] = (5));

} else {
var statearr_21990_22034 = state_21982__$1;
(statearr_21990_22034[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (15))){
var inst_21955 = (state_21982[(2)]);
var state_21982__$1 = state_21982;
var statearr_21991_22035 = state_21982__$1;
(statearr_21991_22035[(2)] = inst_21955);

(statearr_21991_22035[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (21))){
var inst_21975 = (state_21982[(2)]);
var state_21982__$1 = (function (){var statearr_21992 = state_21982;
(statearr_21992[(9)] = inst_21975);

return statearr_21992;
})();
var statearr_21993_22036 = state_21982__$1;
(statearr_21993_22036[(2)] = null);

(statearr_21993_22036[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (13))){
var inst_21937 = (state_21982[(10)]);
var inst_21939 = cljs.core.chunked_seq_QMARK_(inst_21937);
var state_21982__$1 = state_21982;
if(inst_21939){
var statearr_21994_22037 = state_21982__$1;
(statearr_21994_22037[(1)] = (16));

} else {
var statearr_21995_22038 = state_21982__$1;
(statearr_21995_22038[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (22))){
var inst_21967 = (state_21982[(2)]);
var state_21982__$1 = state_21982;
if(cljs.core.truth_(inst_21967)){
var statearr_21996_22039 = state_21982__$1;
(statearr_21996_22039[(1)] = (23));

} else {
var statearr_21997_22040 = state_21982__$1;
(statearr_21997_22040[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (6))){
var inst_21913 = (state_21982[(8)]);
var inst_21961 = (state_21982[(7)]);
var inst_21963 = (state_21982[(11)]);
var inst_21961__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_21913) : topic_fn.call(null,inst_21913));
var inst_21962 = cljs.core.deref(mults);
var inst_21963__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21962,inst_21961__$1);
var state_21982__$1 = (function (){var statearr_21998 = state_21982;
(statearr_21998[(7)] = inst_21961__$1);

(statearr_21998[(11)] = inst_21963__$1);

return statearr_21998;
})();
if(cljs.core.truth_(inst_21963__$1)){
var statearr_21999_22041 = state_21982__$1;
(statearr_21999_22041[(1)] = (19));

} else {
var statearr_22000_22042 = state_21982__$1;
(statearr_22000_22042[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (25))){
var inst_21972 = (state_21982[(2)]);
var state_21982__$1 = state_21982;
var statearr_22001_22043 = state_21982__$1;
(statearr_22001_22043[(2)] = inst_21972);

(statearr_22001_22043[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (17))){
var inst_21937 = (state_21982[(10)]);
var inst_21946 = cljs.core.first(inst_21937);
var inst_21947 = cljs.core.async.muxch_STAR_(inst_21946);
var inst_21948 = cljs.core.async.close_BANG_(inst_21947);
var inst_21949 = cljs.core.next(inst_21937);
var inst_21923 = inst_21949;
var inst_21924 = null;
var inst_21925 = (0);
var inst_21926 = (0);
var state_21982__$1 = (function (){var statearr_22002 = state_21982;
(statearr_22002[(12)] = inst_21924);

(statearr_22002[(13)] = inst_21948);

(statearr_22002[(14)] = inst_21923);

(statearr_22002[(15)] = inst_21926);

(statearr_22002[(16)] = inst_21925);

return statearr_22002;
})();
var statearr_22003_22044 = state_21982__$1;
(statearr_22003_22044[(2)] = null);

(statearr_22003_22044[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (3))){
var inst_21980 = (state_21982[(2)]);
var state_21982__$1 = state_21982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21982__$1,inst_21980);
} else {
if((state_val_21983 === (12))){
var inst_21957 = (state_21982[(2)]);
var state_21982__$1 = state_21982;
var statearr_22004_22045 = state_21982__$1;
(statearr_22004_22045[(2)] = inst_21957);

(statearr_22004_22045[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (2))){
var state_21982__$1 = state_21982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21982__$1,(4),ch);
} else {
if((state_val_21983 === (23))){
var state_21982__$1 = state_21982;
var statearr_22005_22046 = state_21982__$1;
(statearr_22005_22046[(2)] = null);

(statearr_22005_22046[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (19))){
var inst_21913 = (state_21982[(8)]);
var inst_21963 = (state_21982[(11)]);
var inst_21965 = cljs.core.async.muxch_STAR_(inst_21963);
var state_21982__$1 = state_21982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21982__$1,(22),inst_21965,inst_21913);
} else {
if((state_val_21983 === (11))){
var inst_21923 = (state_21982[(14)]);
var inst_21937 = (state_21982[(10)]);
var inst_21937__$1 = cljs.core.seq(inst_21923);
var state_21982__$1 = (function (){var statearr_22006 = state_21982;
(statearr_22006[(10)] = inst_21937__$1);

return statearr_22006;
})();
if(inst_21937__$1){
var statearr_22007_22047 = state_21982__$1;
(statearr_22007_22047[(1)] = (13));

} else {
var statearr_22008_22048 = state_21982__$1;
(statearr_22008_22048[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (9))){
var inst_21959 = (state_21982[(2)]);
var state_21982__$1 = state_21982;
var statearr_22009_22049 = state_21982__$1;
(statearr_22009_22049[(2)] = inst_21959);

(statearr_22009_22049[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (5))){
var inst_21920 = cljs.core.deref(mults);
var inst_21921 = cljs.core.vals(inst_21920);
var inst_21922 = cljs.core.seq(inst_21921);
var inst_21923 = inst_21922;
var inst_21924 = null;
var inst_21925 = (0);
var inst_21926 = (0);
var state_21982__$1 = (function (){var statearr_22010 = state_21982;
(statearr_22010[(12)] = inst_21924);

(statearr_22010[(14)] = inst_21923);

(statearr_22010[(15)] = inst_21926);

(statearr_22010[(16)] = inst_21925);

return statearr_22010;
})();
var statearr_22011_22050 = state_21982__$1;
(statearr_22011_22050[(2)] = null);

(statearr_22011_22050[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (14))){
var state_21982__$1 = state_21982;
var statearr_22015_22051 = state_21982__$1;
(statearr_22015_22051[(2)] = null);

(statearr_22015_22051[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (16))){
var inst_21937 = (state_21982[(10)]);
var inst_21941 = cljs.core.chunk_first(inst_21937);
var inst_21942 = cljs.core.chunk_rest(inst_21937);
var inst_21943 = cljs.core.count(inst_21941);
var inst_21923 = inst_21942;
var inst_21924 = inst_21941;
var inst_21925 = inst_21943;
var inst_21926 = (0);
var state_21982__$1 = (function (){var statearr_22016 = state_21982;
(statearr_22016[(12)] = inst_21924);

(statearr_22016[(14)] = inst_21923);

(statearr_22016[(15)] = inst_21926);

(statearr_22016[(16)] = inst_21925);

return statearr_22016;
})();
var statearr_22017_22052 = state_21982__$1;
(statearr_22017_22052[(2)] = null);

(statearr_22017_22052[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (10))){
var inst_21924 = (state_21982[(12)]);
var inst_21923 = (state_21982[(14)]);
var inst_21926 = (state_21982[(15)]);
var inst_21925 = (state_21982[(16)]);
var inst_21931 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21924,inst_21926);
var inst_21932 = cljs.core.async.muxch_STAR_(inst_21931);
var inst_21933 = cljs.core.async.close_BANG_(inst_21932);
var inst_21934 = (inst_21926 + (1));
var tmp22012 = inst_21924;
var tmp22013 = inst_21923;
var tmp22014 = inst_21925;
var inst_21923__$1 = tmp22013;
var inst_21924__$1 = tmp22012;
var inst_21925__$1 = tmp22014;
var inst_21926__$1 = inst_21934;
var state_21982__$1 = (function (){var statearr_22018 = state_21982;
(statearr_22018[(12)] = inst_21924__$1);

(statearr_22018[(14)] = inst_21923__$1);

(statearr_22018[(15)] = inst_21926__$1);

(statearr_22018[(17)] = inst_21933);

(statearr_22018[(16)] = inst_21925__$1);

return statearr_22018;
})();
var statearr_22019_22053 = state_21982__$1;
(statearr_22019_22053[(2)] = null);

(statearr_22019_22053[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (18))){
var inst_21952 = (state_21982[(2)]);
var state_21982__$1 = state_21982;
var statearr_22020_22054 = state_21982__$1;
(statearr_22020_22054[(2)] = inst_21952);

(statearr_22020_22054[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21983 === (8))){
var inst_21926 = (state_21982[(15)]);
var inst_21925 = (state_21982[(16)]);
var inst_21928 = (inst_21926 < inst_21925);
var inst_21929 = inst_21928;
var state_21982__$1 = state_21982;
if(cljs.core.truth_(inst_21929)){
var statearr_22021_22055 = state_21982__$1;
(statearr_22021_22055[(1)] = (10));

} else {
var statearr_22022_22056 = state_21982__$1;
(statearr_22022_22056[(1)] = (11));

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
});})(c__18926__auto___22028,mults,ensure_mult,p))
;
return ((function (switch__18743__auto__,c__18926__auto___22028,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18744__auto__ = null;
var cljs$core$async$state_machine__18744__auto____0 = (function (){
var statearr_22023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22023[(0)] = cljs$core$async$state_machine__18744__auto__);

(statearr_22023[(1)] = (1));

return statearr_22023;
});
var cljs$core$async$state_machine__18744__auto____1 = (function (state_21982){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_21982);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22024){if((e22024 instanceof Object)){
var ex__18747__auto__ = e22024;
var statearr_22025_22057 = state_21982;
(statearr_22025_22057[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21982);

return cljs.core.cst$kw$recur;
} else {
throw e22024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22058 = state_21982;
state_21982 = G__22058;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$state_machine__18744__auto__ = function(state_21982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18744__auto____1.call(this,state_21982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18744__auto____0;
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18744__auto____1;
return cljs$core$async$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___22028,mults,ensure_mult,p))
})();
var state__18928__auto__ = (function (){var statearr_22026 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22026[(6)] = c__18926__auto___22028);

return statearr_22026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___22028,mults,ensure_mult,p))
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
var G__22060 = arguments.length;
switch (G__22060) {
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
var G__22063 = arguments.length;
switch (G__22063) {
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
var G__22066 = arguments.length;
switch (G__22066) {
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
var c__18926__auto___22133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22105){
var state_val_22106 = (state_22105[(1)]);
if((state_val_22106 === (7))){
var state_22105__$1 = state_22105;
var statearr_22107_22134 = state_22105__$1;
(statearr_22107_22134[(2)] = null);

(statearr_22107_22134[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (1))){
var state_22105__$1 = state_22105;
var statearr_22108_22135 = state_22105__$1;
(statearr_22108_22135[(2)] = null);

(statearr_22108_22135[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (4))){
var inst_22069 = (state_22105[(7)]);
var inst_22071 = (inst_22069 < cnt);
var state_22105__$1 = state_22105;
if(cljs.core.truth_(inst_22071)){
var statearr_22109_22136 = state_22105__$1;
(statearr_22109_22136[(1)] = (6));

} else {
var statearr_22110_22137 = state_22105__$1;
(statearr_22110_22137[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (15))){
var inst_22101 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
var statearr_22111_22138 = state_22105__$1;
(statearr_22111_22138[(2)] = inst_22101);

(statearr_22111_22138[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (13))){
var inst_22094 = cljs.core.async.close_BANG_(out);
var state_22105__$1 = state_22105;
var statearr_22112_22139 = state_22105__$1;
(statearr_22112_22139[(2)] = inst_22094);

(statearr_22112_22139[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (6))){
var state_22105__$1 = state_22105;
var statearr_22113_22140 = state_22105__$1;
(statearr_22113_22140[(2)] = null);

(statearr_22113_22140[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (3))){
var inst_22103 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22105__$1,inst_22103);
} else {
if((state_val_22106 === (12))){
var inst_22091 = (state_22105[(8)]);
var inst_22091__$1 = (state_22105[(2)]);
var inst_22092 = cljs.core.some(cljs.core.nil_QMARK_,inst_22091__$1);
var state_22105__$1 = (function (){var statearr_22114 = state_22105;
(statearr_22114[(8)] = inst_22091__$1);

return statearr_22114;
})();
if(cljs.core.truth_(inst_22092)){
var statearr_22115_22141 = state_22105__$1;
(statearr_22115_22141[(1)] = (13));

} else {
var statearr_22116_22142 = state_22105__$1;
(statearr_22116_22142[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (2))){
var inst_22068 = cljs.core.reset_BANG_(dctr,cnt);
var inst_22069 = (0);
var state_22105__$1 = (function (){var statearr_22117 = state_22105;
(statearr_22117[(9)] = inst_22068);

(statearr_22117[(7)] = inst_22069);

return statearr_22117;
})();
var statearr_22118_22143 = state_22105__$1;
(statearr_22118_22143[(2)] = null);

(statearr_22118_22143[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (11))){
var inst_22069 = (state_22105[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22105,(10),Object,null,(9));
var inst_22078 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22069) : chs__$1.call(null,inst_22069));
var inst_22079 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22069) : done.call(null,inst_22069));
var inst_22080 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22078,inst_22079);
var state_22105__$1 = state_22105;
var statearr_22119_22144 = state_22105__$1;
(statearr_22119_22144[(2)] = inst_22080);


cljs.core.async.impl.ioc_helpers.process_exception(state_22105__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (9))){
var inst_22069 = (state_22105[(7)]);
var inst_22082 = (state_22105[(2)]);
var inst_22083 = (inst_22069 + (1));
var inst_22069__$1 = inst_22083;
var state_22105__$1 = (function (){var statearr_22120 = state_22105;
(statearr_22120[(10)] = inst_22082);

(statearr_22120[(7)] = inst_22069__$1);

return statearr_22120;
})();
var statearr_22121_22145 = state_22105__$1;
(statearr_22121_22145[(2)] = null);

(statearr_22121_22145[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (5))){
var inst_22089 = (state_22105[(2)]);
var state_22105__$1 = (function (){var statearr_22122 = state_22105;
(statearr_22122[(11)] = inst_22089);

return statearr_22122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22105__$1,(12),dchan);
} else {
if((state_val_22106 === (14))){
var inst_22091 = (state_22105[(8)]);
var inst_22096 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22091);
var state_22105__$1 = state_22105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22105__$1,(16),out,inst_22096);
} else {
if((state_val_22106 === (16))){
var inst_22098 = (state_22105[(2)]);
var state_22105__$1 = (function (){var statearr_22123 = state_22105;
(statearr_22123[(12)] = inst_22098);

return statearr_22123;
})();
var statearr_22124_22146 = state_22105__$1;
(statearr_22124_22146[(2)] = null);

(statearr_22124_22146[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (10))){
var inst_22073 = (state_22105[(2)]);
var inst_22074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22105__$1 = (function (){var statearr_22125 = state_22105;
(statearr_22125[(13)] = inst_22073);

return statearr_22125;
})();
var statearr_22126_22147 = state_22105__$1;
(statearr_22126_22147[(2)] = inst_22074);


cljs.core.async.impl.ioc_helpers.process_exception(state_22105__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22106 === (8))){
var inst_22087 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
var statearr_22127_22148 = state_22105__$1;
(statearr_22127_22148[(2)] = inst_22087);

(statearr_22127_22148[(1)] = (5));


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
});})(c__18926__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18743__auto__,c__18926__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18744__auto__ = null;
var cljs$core$async$state_machine__18744__auto____0 = (function (){
var statearr_22128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22128[(0)] = cljs$core$async$state_machine__18744__auto__);

(statearr_22128[(1)] = (1));

return statearr_22128;
});
var cljs$core$async$state_machine__18744__auto____1 = (function (state_22105){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_22105);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22129){if((e22129 instanceof Object)){
var ex__18747__auto__ = e22129;
var statearr_22130_22149 = state_22105;
(statearr_22130_22149[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22105);

return cljs.core.cst$kw$recur;
} else {
throw e22129;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22150 = state_22105;
state_22105 = G__22150;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$state_machine__18744__auto__ = function(state_22105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18744__auto____1.call(this,state_22105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18744__auto____0;
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18744__auto____1;
return cljs$core$async$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18928__auto__ = (function (){var statearr_22131 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22131[(6)] = c__18926__auto___22133);

return statearr_22131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__22153 = arguments.length;
switch (G__22153) {
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
var c__18926__auto___22207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___22207,out){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___22207,out){
return (function (state_22185){
var state_val_22186 = (state_22185[(1)]);
if((state_val_22186 === (7))){
var inst_22164 = (state_22185[(7)]);
var inst_22165 = (state_22185[(8)]);
var inst_22164__$1 = (state_22185[(2)]);
var inst_22165__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22164__$1,(0),null);
var inst_22166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22164__$1,(1),null);
var inst_22167 = (inst_22165__$1 == null);
var state_22185__$1 = (function (){var statearr_22187 = state_22185;
(statearr_22187[(7)] = inst_22164__$1);

(statearr_22187[(9)] = inst_22166);

(statearr_22187[(8)] = inst_22165__$1);

return statearr_22187;
})();
if(cljs.core.truth_(inst_22167)){
var statearr_22188_22208 = state_22185__$1;
(statearr_22188_22208[(1)] = (8));

} else {
var statearr_22189_22209 = state_22185__$1;
(statearr_22189_22209[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22186 === (1))){
var inst_22154 = cljs.core.vec(chs);
var inst_22155 = inst_22154;
var state_22185__$1 = (function (){var statearr_22190 = state_22185;
(statearr_22190[(10)] = inst_22155);

return statearr_22190;
})();
var statearr_22191_22210 = state_22185__$1;
(statearr_22191_22210[(2)] = null);

(statearr_22191_22210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22186 === (4))){
var inst_22155 = (state_22185[(10)]);
var state_22185__$1 = state_22185;
return cljs.core.async.ioc_alts_BANG_(state_22185__$1,(7),inst_22155);
} else {
if((state_val_22186 === (6))){
var inst_22181 = (state_22185[(2)]);
var state_22185__$1 = state_22185;
var statearr_22192_22211 = state_22185__$1;
(statearr_22192_22211[(2)] = inst_22181);

(statearr_22192_22211[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22186 === (3))){
var inst_22183 = (state_22185[(2)]);
var state_22185__$1 = state_22185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22185__$1,inst_22183);
} else {
if((state_val_22186 === (2))){
var inst_22155 = (state_22185[(10)]);
var inst_22157 = cljs.core.count(inst_22155);
var inst_22158 = (inst_22157 > (0));
var state_22185__$1 = state_22185;
if(cljs.core.truth_(inst_22158)){
var statearr_22194_22212 = state_22185__$1;
(statearr_22194_22212[(1)] = (4));

} else {
var statearr_22195_22213 = state_22185__$1;
(statearr_22195_22213[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22186 === (11))){
var inst_22155 = (state_22185[(10)]);
var inst_22174 = (state_22185[(2)]);
var tmp22193 = inst_22155;
var inst_22155__$1 = tmp22193;
var state_22185__$1 = (function (){var statearr_22196 = state_22185;
(statearr_22196[(10)] = inst_22155__$1);

(statearr_22196[(11)] = inst_22174);

return statearr_22196;
})();
var statearr_22197_22214 = state_22185__$1;
(statearr_22197_22214[(2)] = null);

(statearr_22197_22214[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22186 === (9))){
var inst_22165 = (state_22185[(8)]);
var state_22185__$1 = state_22185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22185__$1,(11),out,inst_22165);
} else {
if((state_val_22186 === (5))){
var inst_22179 = cljs.core.async.close_BANG_(out);
var state_22185__$1 = state_22185;
var statearr_22198_22215 = state_22185__$1;
(statearr_22198_22215[(2)] = inst_22179);

(statearr_22198_22215[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22186 === (10))){
var inst_22177 = (state_22185[(2)]);
var state_22185__$1 = state_22185;
var statearr_22199_22216 = state_22185__$1;
(statearr_22199_22216[(2)] = inst_22177);

(statearr_22199_22216[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22186 === (8))){
var inst_22164 = (state_22185[(7)]);
var inst_22155 = (state_22185[(10)]);
var inst_22166 = (state_22185[(9)]);
var inst_22165 = (state_22185[(8)]);
var inst_22169 = (function (){var cs = inst_22155;
var vec__22160 = inst_22164;
var v = inst_22165;
var c = inst_22166;
return ((function (cs,vec__22160,v,c,inst_22164,inst_22155,inst_22166,inst_22165,state_val_22186,c__18926__auto___22207,out){
return (function (p1__22151_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22151_SHARP_);
});
;})(cs,vec__22160,v,c,inst_22164,inst_22155,inst_22166,inst_22165,state_val_22186,c__18926__auto___22207,out))
})();
var inst_22170 = cljs.core.filterv(inst_22169,inst_22155);
var inst_22155__$1 = inst_22170;
var state_22185__$1 = (function (){var statearr_22200 = state_22185;
(statearr_22200[(10)] = inst_22155__$1);

return statearr_22200;
})();
var statearr_22201_22217 = state_22185__$1;
(statearr_22201_22217[(2)] = null);

(statearr_22201_22217[(1)] = (2));


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
});})(c__18926__auto___22207,out))
;
return ((function (switch__18743__auto__,c__18926__auto___22207,out){
return (function() {
var cljs$core$async$state_machine__18744__auto__ = null;
var cljs$core$async$state_machine__18744__auto____0 = (function (){
var statearr_22202 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22202[(0)] = cljs$core$async$state_machine__18744__auto__);

(statearr_22202[(1)] = (1));

return statearr_22202;
});
var cljs$core$async$state_machine__18744__auto____1 = (function (state_22185){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_22185);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22203){if((e22203 instanceof Object)){
var ex__18747__auto__ = e22203;
var statearr_22204_22218 = state_22185;
(statearr_22204_22218[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22185);

return cljs.core.cst$kw$recur;
} else {
throw e22203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22219 = state_22185;
state_22185 = G__22219;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$state_machine__18744__auto__ = function(state_22185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18744__auto____1.call(this,state_22185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18744__auto____0;
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18744__auto____1;
return cljs$core$async$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___22207,out))
})();
var state__18928__auto__ = (function (){var statearr_22205 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22205[(6)] = c__18926__auto___22207);

return statearr_22205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___22207,out))
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
var G__22221 = arguments.length;
switch (G__22221) {
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
var c__18926__auto___22266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___22266,out){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___22266,out){
return (function (state_22245){
var state_val_22246 = (state_22245[(1)]);
if((state_val_22246 === (7))){
var inst_22227 = (state_22245[(7)]);
var inst_22227__$1 = (state_22245[(2)]);
var inst_22228 = (inst_22227__$1 == null);
var inst_22229 = cljs.core.not(inst_22228);
var state_22245__$1 = (function (){var statearr_22247 = state_22245;
(statearr_22247[(7)] = inst_22227__$1);

return statearr_22247;
})();
if(inst_22229){
var statearr_22248_22267 = state_22245__$1;
(statearr_22248_22267[(1)] = (8));

} else {
var statearr_22249_22268 = state_22245__$1;
(statearr_22249_22268[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22246 === (1))){
var inst_22222 = (0);
var state_22245__$1 = (function (){var statearr_22250 = state_22245;
(statearr_22250[(8)] = inst_22222);

return statearr_22250;
})();
var statearr_22251_22269 = state_22245__$1;
(statearr_22251_22269[(2)] = null);

(statearr_22251_22269[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22246 === (4))){
var state_22245__$1 = state_22245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22245__$1,(7),ch);
} else {
if((state_val_22246 === (6))){
var inst_22240 = (state_22245[(2)]);
var state_22245__$1 = state_22245;
var statearr_22252_22270 = state_22245__$1;
(statearr_22252_22270[(2)] = inst_22240);

(statearr_22252_22270[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22246 === (3))){
var inst_22242 = (state_22245[(2)]);
var inst_22243 = cljs.core.async.close_BANG_(out);
var state_22245__$1 = (function (){var statearr_22253 = state_22245;
(statearr_22253[(9)] = inst_22242);

return statearr_22253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22245__$1,inst_22243);
} else {
if((state_val_22246 === (2))){
var inst_22222 = (state_22245[(8)]);
var inst_22224 = (inst_22222 < n);
var state_22245__$1 = state_22245;
if(cljs.core.truth_(inst_22224)){
var statearr_22254_22271 = state_22245__$1;
(statearr_22254_22271[(1)] = (4));

} else {
var statearr_22255_22272 = state_22245__$1;
(statearr_22255_22272[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22246 === (11))){
var inst_22222 = (state_22245[(8)]);
var inst_22232 = (state_22245[(2)]);
var inst_22233 = (inst_22222 + (1));
var inst_22222__$1 = inst_22233;
var state_22245__$1 = (function (){var statearr_22256 = state_22245;
(statearr_22256[(10)] = inst_22232);

(statearr_22256[(8)] = inst_22222__$1);

return statearr_22256;
})();
var statearr_22257_22273 = state_22245__$1;
(statearr_22257_22273[(2)] = null);

(statearr_22257_22273[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22246 === (9))){
var state_22245__$1 = state_22245;
var statearr_22258_22274 = state_22245__$1;
(statearr_22258_22274[(2)] = null);

(statearr_22258_22274[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22246 === (5))){
var state_22245__$1 = state_22245;
var statearr_22259_22275 = state_22245__$1;
(statearr_22259_22275[(2)] = null);

(statearr_22259_22275[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22246 === (10))){
var inst_22237 = (state_22245[(2)]);
var state_22245__$1 = state_22245;
var statearr_22260_22276 = state_22245__$1;
(statearr_22260_22276[(2)] = inst_22237);

(statearr_22260_22276[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22246 === (8))){
var inst_22227 = (state_22245[(7)]);
var state_22245__$1 = state_22245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22245__$1,(11),out,inst_22227);
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
});})(c__18926__auto___22266,out))
;
return ((function (switch__18743__auto__,c__18926__auto___22266,out){
return (function() {
var cljs$core$async$state_machine__18744__auto__ = null;
var cljs$core$async$state_machine__18744__auto____0 = (function (){
var statearr_22261 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22261[(0)] = cljs$core$async$state_machine__18744__auto__);

(statearr_22261[(1)] = (1));

return statearr_22261;
});
var cljs$core$async$state_machine__18744__auto____1 = (function (state_22245){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_22245);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22262){if((e22262 instanceof Object)){
var ex__18747__auto__ = e22262;
var statearr_22263_22277 = state_22245;
(statearr_22263_22277[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22245);

return cljs.core.cst$kw$recur;
} else {
throw e22262;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22278 = state_22245;
state_22245 = G__22278;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$state_machine__18744__auto__ = function(state_22245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18744__auto____1.call(this,state_22245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18744__auto____0;
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18744__auto____1;
return cljs$core$async$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___22266,out))
})();
var state__18928__auto__ = (function (){var statearr_22264 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22264[(6)] = c__18926__auto___22266);

return statearr_22264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___22266,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22280 = (function (f,ch,meta22281){
this.f = f;
this.ch = ch;
this.meta22281 = meta22281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22282,meta22281__$1){
var self__ = this;
var _22282__$1 = this;
return (new cljs.core.async.t_cljs$core$async22280(self__.f,self__.ch,meta22281__$1));
});

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22282){
var self__ = this;
var _22282__$1 = this;
return self__.meta22281;
});

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22283 = (function (f,ch,meta22281,_,fn1,meta22284){
this.f = f;
this.ch = ch;
this.meta22281 = meta22281;
this._ = _;
this.fn1 = fn1;
this.meta22284 = meta22284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22285,meta22284__$1){
var self__ = this;
var _22285__$1 = this;
return (new cljs.core.async.t_cljs$core$async22283(self__.f,self__.ch,self__.meta22281,self__._,self__.fn1,meta22284__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22285){
var self__ = this;
var _22285__$1 = this;
return self__.meta22284;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22279_SHARP_){
var G__22286 = (((p1__22279_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22279_SHARP_) : self__.f.call(null,p1__22279_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22286) : f1.call(null,G__22286));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22283.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22281,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async22280], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta22284], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22283";

cljs.core.async.t_cljs$core$async22283.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async22283");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22283.
 */
cljs.core.async.__GT_t_cljs$core$async22283 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22283(f__$1,ch__$1,meta22281__$1,___$2,fn1__$1,meta22284){
return (new cljs.core.async.t_cljs$core$async22283(f__$1,ch__$1,meta22281__$1,___$2,fn1__$1,meta22284));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22283(self__.f,self__.ch,self__.meta22281,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22287 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22287) : self__.f.call(null,G__22287));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22281], null);
});

cljs.core.async.t_cljs$core$async22280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22280";

cljs.core.async.t_cljs$core$async22280.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async22280");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22280.
 */
cljs.core.async.__GT_t_cljs$core$async22280 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22280(f__$1,ch__$1,meta22281){
return (new cljs.core.async.t_cljs$core$async22280(f__$1,ch__$1,meta22281));
});

}

return (new cljs.core.async.t_cljs$core$async22280(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22288 = (function (f,ch,meta22289){
this.f = f;
this.ch = ch;
this.meta22289 = meta22289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22290,meta22289__$1){
var self__ = this;
var _22290__$1 = this;
return (new cljs.core.async.t_cljs$core$async22288(self__.f,self__.ch,meta22289__$1));
});

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22290){
var self__ = this;
var _22290__$1 = this;
return self__.meta22289;
});

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async22288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22289], null);
});

cljs.core.async.t_cljs$core$async22288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22288";

cljs.core.async.t_cljs$core$async22288.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async22288");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22288.
 */
cljs.core.async.__GT_t_cljs$core$async22288 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22288(f__$1,ch__$1,meta22289){
return (new cljs.core.async.t_cljs$core$async22288(f__$1,ch__$1,meta22289));
});

}

return (new cljs.core.async.t_cljs$core$async22288(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22291 = (function (p,ch,meta22292){
this.p = p;
this.ch = ch;
this.meta22292 = meta22292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22293,meta22292__$1){
var self__ = this;
var _22293__$1 = this;
return (new cljs.core.async.t_cljs$core$async22291(self__.p,self__.ch,meta22292__$1));
});

cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22293){
var self__ = this;
var _22293__$1 = this;
return self__.meta22292;
});

cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22292], null);
});

cljs.core.async.t_cljs$core$async22291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22291";

cljs.core.async.t_cljs$core$async22291.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async22291");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22291.
 */
cljs.core.async.__GT_t_cljs$core$async22291 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22291(p__$1,ch__$1,meta22292){
return (new cljs.core.async.t_cljs$core$async22291(p__$1,ch__$1,meta22292));
});

}

return (new cljs.core.async.t_cljs$core$async22291(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22295 = arguments.length;
switch (G__22295) {
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
var c__18926__auto___22335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___22335,out){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___22335,out){
return (function (state_22316){
var state_val_22317 = (state_22316[(1)]);
if((state_val_22317 === (7))){
var inst_22312 = (state_22316[(2)]);
var state_22316__$1 = state_22316;
var statearr_22318_22336 = state_22316__$1;
(statearr_22318_22336[(2)] = inst_22312);

(statearr_22318_22336[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22317 === (1))){
var state_22316__$1 = state_22316;
var statearr_22319_22337 = state_22316__$1;
(statearr_22319_22337[(2)] = null);

(statearr_22319_22337[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22317 === (4))){
var inst_22298 = (state_22316[(7)]);
var inst_22298__$1 = (state_22316[(2)]);
var inst_22299 = (inst_22298__$1 == null);
var state_22316__$1 = (function (){var statearr_22320 = state_22316;
(statearr_22320[(7)] = inst_22298__$1);

return statearr_22320;
})();
if(cljs.core.truth_(inst_22299)){
var statearr_22321_22338 = state_22316__$1;
(statearr_22321_22338[(1)] = (5));

} else {
var statearr_22322_22339 = state_22316__$1;
(statearr_22322_22339[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22317 === (6))){
var inst_22298 = (state_22316[(7)]);
var inst_22303 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22298) : p.call(null,inst_22298));
var state_22316__$1 = state_22316;
if(cljs.core.truth_(inst_22303)){
var statearr_22323_22340 = state_22316__$1;
(statearr_22323_22340[(1)] = (8));

} else {
var statearr_22324_22341 = state_22316__$1;
(statearr_22324_22341[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22317 === (3))){
var inst_22314 = (state_22316[(2)]);
var state_22316__$1 = state_22316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22316__$1,inst_22314);
} else {
if((state_val_22317 === (2))){
var state_22316__$1 = state_22316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22316__$1,(4),ch);
} else {
if((state_val_22317 === (11))){
var inst_22306 = (state_22316[(2)]);
var state_22316__$1 = state_22316;
var statearr_22325_22342 = state_22316__$1;
(statearr_22325_22342[(2)] = inst_22306);

(statearr_22325_22342[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22317 === (9))){
var state_22316__$1 = state_22316;
var statearr_22326_22343 = state_22316__$1;
(statearr_22326_22343[(2)] = null);

(statearr_22326_22343[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22317 === (5))){
var inst_22301 = cljs.core.async.close_BANG_(out);
var state_22316__$1 = state_22316;
var statearr_22327_22344 = state_22316__$1;
(statearr_22327_22344[(2)] = inst_22301);

(statearr_22327_22344[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22317 === (10))){
var inst_22309 = (state_22316[(2)]);
var state_22316__$1 = (function (){var statearr_22328 = state_22316;
(statearr_22328[(8)] = inst_22309);

return statearr_22328;
})();
var statearr_22329_22345 = state_22316__$1;
(statearr_22329_22345[(2)] = null);

(statearr_22329_22345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22317 === (8))){
var inst_22298 = (state_22316[(7)]);
var state_22316__$1 = state_22316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22316__$1,(11),out,inst_22298);
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
});})(c__18926__auto___22335,out))
;
return ((function (switch__18743__auto__,c__18926__auto___22335,out){
return (function() {
var cljs$core$async$state_machine__18744__auto__ = null;
var cljs$core$async$state_machine__18744__auto____0 = (function (){
var statearr_22330 = [null,null,null,null,null,null,null,null,null];
(statearr_22330[(0)] = cljs$core$async$state_machine__18744__auto__);

(statearr_22330[(1)] = (1));

return statearr_22330;
});
var cljs$core$async$state_machine__18744__auto____1 = (function (state_22316){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_22316);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22331){if((e22331 instanceof Object)){
var ex__18747__auto__ = e22331;
var statearr_22332_22346 = state_22316;
(statearr_22332_22346[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22316);

return cljs.core.cst$kw$recur;
} else {
throw e22331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22347 = state_22316;
state_22316 = G__22347;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$state_machine__18744__auto__ = function(state_22316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18744__auto____1.call(this,state_22316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18744__auto____0;
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18744__auto____1;
return cljs$core$async$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___22335,out))
})();
var state__18928__auto__ = (function (){var statearr_22333 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22333[(6)] = c__18926__auto___22335);

return statearr_22333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___22335,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22349 = arguments.length;
switch (G__22349) {
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
var c__18926__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto__){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto__){
return (function (state_22412){
var state_val_22413 = (state_22412[(1)]);
if((state_val_22413 === (7))){
var inst_22408 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22414_22452 = state_22412__$1;
(statearr_22414_22452[(2)] = inst_22408);

(statearr_22414_22452[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (20))){
var inst_22378 = (state_22412[(7)]);
var inst_22389 = (state_22412[(2)]);
var inst_22390 = cljs.core.next(inst_22378);
var inst_22364 = inst_22390;
var inst_22365 = null;
var inst_22366 = (0);
var inst_22367 = (0);
var state_22412__$1 = (function (){var statearr_22415 = state_22412;
(statearr_22415[(8)] = inst_22367);

(statearr_22415[(9)] = inst_22389);

(statearr_22415[(10)] = inst_22365);

(statearr_22415[(11)] = inst_22366);

(statearr_22415[(12)] = inst_22364);

return statearr_22415;
})();
var statearr_22416_22453 = state_22412__$1;
(statearr_22416_22453[(2)] = null);

(statearr_22416_22453[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (1))){
var state_22412__$1 = state_22412;
var statearr_22417_22454 = state_22412__$1;
(statearr_22417_22454[(2)] = null);

(statearr_22417_22454[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (4))){
var inst_22353 = (state_22412[(13)]);
var inst_22353__$1 = (state_22412[(2)]);
var inst_22354 = (inst_22353__$1 == null);
var state_22412__$1 = (function (){var statearr_22418 = state_22412;
(statearr_22418[(13)] = inst_22353__$1);

return statearr_22418;
})();
if(cljs.core.truth_(inst_22354)){
var statearr_22419_22455 = state_22412__$1;
(statearr_22419_22455[(1)] = (5));

} else {
var statearr_22420_22456 = state_22412__$1;
(statearr_22420_22456[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (15))){
var state_22412__$1 = state_22412;
var statearr_22424_22457 = state_22412__$1;
(statearr_22424_22457[(2)] = null);

(statearr_22424_22457[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (21))){
var state_22412__$1 = state_22412;
var statearr_22425_22458 = state_22412__$1;
(statearr_22425_22458[(2)] = null);

(statearr_22425_22458[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (13))){
var inst_22367 = (state_22412[(8)]);
var inst_22365 = (state_22412[(10)]);
var inst_22366 = (state_22412[(11)]);
var inst_22364 = (state_22412[(12)]);
var inst_22374 = (state_22412[(2)]);
var inst_22375 = (inst_22367 + (1));
var tmp22421 = inst_22365;
var tmp22422 = inst_22366;
var tmp22423 = inst_22364;
var inst_22364__$1 = tmp22423;
var inst_22365__$1 = tmp22421;
var inst_22366__$1 = tmp22422;
var inst_22367__$1 = inst_22375;
var state_22412__$1 = (function (){var statearr_22426 = state_22412;
(statearr_22426[(8)] = inst_22367__$1);

(statearr_22426[(14)] = inst_22374);

(statearr_22426[(10)] = inst_22365__$1);

(statearr_22426[(11)] = inst_22366__$1);

(statearr_22426[(12)] = inst_22364__$1);

return statearr_22426;
})();
var statearr_22427_22459 = state_22412__$1;
(statearr_22427_22459[(2)] = null);

(statearr_22427_22459[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (22))){
var state_22412__$1 = state_22412;
var statearr_22428_22460 = state_22412__$1;
(statearr_22428_22460[(2)] = null);

(statearr_22428_22460[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (6))){
var inst_22353 = (state_22412[(13)]);
var inst_22362 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22353) : f.call(null,inst_22353));
var inst_22363 = cljs.core.seq(inst_22362);
var inst_22364 = inst_22363;
var inst_22365 = null;
var inst_22366 = (0);
var inst_22367 = (0);
var state_22412__$1 = (function (){var statearr_22429 = state_22412;
(statearr_22429[(8)] = inst_22367);

(statearr_22429[(10)] = inst_22365);

(statearr_22429[(11)] = inst_22366);

(statearr_22429[(12)] = inst_22364);

return statearr_22429;
})();
var statearr_22430_22461 = state_22412__$1;
(statearr_22430_22461[(2)] = null);

(statearr_22430_22461[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (17))){
var inst_22378 = (state_22412[(7)]);
var inst_22382 = cljs.core.chunk_first(inst_22378);
var inst_22383 = cljs.core.chunk_rest(inst_22378);
var inst_22384 = cljs.core.count(inst_22382);
var inst_22364 = inst_22383;
var inst_22365 = inst_22382;
var inst_22366 = inst_22384;
var inst_22367 = (0);
var state_22412__$1 = (function (){var statearr_22431 = state_22412;
(statearr_22431[(8)] = inst_22367);

(statearr_22431[(10)] = inst_22365);

(statearr_22431[(11)] = inst_22366);

(statearr_22431[(12)] = inst_22364);

return statearr_22431;
})();
var statearr_22432_22462 = state_22412__$1;
(statearr_22432_22462[(2)] = null);

(statearr_22432_22462[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (3))){
var inst_22410 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22412__$1,inst_22410);
} else {
if((state_val_22413 === (12))){
var inst_22398 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22433_22463 = state_22412__$1;
(statearr_22433_22463[(2)] = inst_22398);

(statearr_22433_22463[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (2))){
var state_22412__$1 = state_22412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22412__$1,(4),in$);
} else {
if((state_val_22413 === (23))){
var inst_22406 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22434_22464 = state_22412__$1;
(statearr_22434_22464[(2)] = inst_22406);

(statearr_22434_22464[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (19))){
var inst_22393 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22435_22465 = state_22412__$1;
(statearr_22435_22465[(2)] = inst_22393);

(statearr_22435_22465[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (11))){
var inst_22378 = (state_22412[(7)]);
var inst_22364 = (state_22412[(12)]);
var inst_22378__$1 = cljs.core.seq(inst_22364);
var state_22412__$1 = (function (){var statearr_22436 = state_22412;
(statearr_22436[(7)] = inst_22378__$1);

return statearr_22436;
})();
if(inst_22378__$1){
var statearr_22437_22466 = state_22412__$1;
(statearr_22437_22466[(1)] = (14));

} else {
var statearr_22438_22467 = state_22412__$1;
(statearr_22438_22467[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (9))){
var inst_22400 = (state_22412[(2)]);
var inst_22401 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22412__$1 = (function (){var statearr_22439 = state_22412;
(statearr_22439[(15)] = inst_22400);

return statearr_22439;
})();
if(cljs.core.truth_(inst_22401)){
var statearr_22440_22468 = state_22412__$1;
(statearr_22440_22468[(1)] = (21));

} else {
var statearr_22441_22469 = state_22412__$1;
(statearr_22441_22469[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (5))){
var inst_22356 = cljs.core.async.close_BANG_(out);
var state_22412__$1 = state_22412;
var statearr_22442_22470 = state_22412__$1;
(statearr_22442_22470[(2)] = inst_22356);

(statearr_22442_22470[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (14))){
var inst_22378 = (state_22412[(7)]);
var inst_22380 = cljs.core.chunked_seq_QMARK_(inst_22378);
var state_22412__$1 = state_22412;
if(inst_22380){
var statearr_22443_22471 = state_22412__$1;
(statearr_22443_22471[(1)] = (17));

} else {
var statearr_22444_22472 = state_22412__$1;
(statearr_22444_22472[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (16))){
var inst_22396 = (state_22412[(2)]);
var state_22412__$1 = state_22412;
var statearr_22445_22473 = state_22412__$1;
(statearr_22445_22473[(2)] = inst_22396);

(statearr_22445_22473[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22413 === (10))){
var inst_22367 = (state_22412[(8)]);
var inst_22365 = (state_22412[(10)]);
var inst_22372 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22365,inst_22367);
var state_22412__$1 = state_22412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22412__$1,(13),out,inst_22372);
} else {
if((state_val_22413 === (18))){
var inst_22378 = (state_22412[(7)]);
var inst_22387 = cljs.core.first(inst_22378);
var state_22412__$1 = state_22412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22412__$1,(20),out,inst_22387);
} else {
if((state_val_22413 === (8))){
var inst_22367 = (state_22412[(8)]);
var inst_22366 = (state_22412[(11)]);
var inst_22369 = (inst_22367 < inst_22366);
var inst_22370 = inst_22369;
var state_22412__$1 = state_22412;
if(cljs.core.truth_(inst_22370)){
var statearr_22446_22474 = state_22412__$1;
(statearr_22446_22474[(1)] = (10));

} else {
var statearr_22447_22475 = state_22412__$1;
(statearr_22447_22475[(1)] = (11));

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
});})(c__18926__auto__))
;
return ((function (switch__18743__auto__,c__18926__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18744__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18744__auto____0 = (function (){
var statearr_22448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22448[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18744__auto__);

(statearr_22448[(1)] = (1));

return statearr_22448;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18744__auto____1 = (function (state_22412){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_22412);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22449){if((e22449 instanceof Object)){
var ex__18747__auto__ = e22449;
var statearr_22450_22476 = state_22412;
(statearr_22450_22476[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22412);

return cljs.core.cst$kw$recur;
} else {
throw e22449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22477 = state_22412;
state_22412 = G__22477;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18744__auto__ = function(state_22412){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18744__auto____1.call(this,state_22412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18744__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18744__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto__))
})();
var state__18928__auto__ = (function (){var statearr_22451 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22451[(6)] = c__18926__auto__);

return statearr_22451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto__))
);

return c__18926__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22479 = arguments.length;
switch (G__22479) {
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
var G__22482 = arguments.length;
switch (G__22482) {
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
var G__22485 = arguments.length;
switch (G__22485) {
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
var c__18926__auto___22532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___22532,out){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___22532,out){
return (function (state_22509){
var state_val_22510 = (state_22509[(1)]);
if((state_val_22510 === (7))){
var inst_22504 = (state_22509[(2)]);
var state_22509__$1 = state_22509;
var statearr_22511_22533 = state_22509__$1;
(statearr_22511_22533[(2)] = inst_22504);

(statearr_22511_22533[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22510 === (1))){
var inst_22486 = null;
var state_22509__$1 = (function (){var statearr_22512 = state_22509;
(statearr_22512[(7)] = inst_22486);

return statearr_22512;
})();
var statearr_22513_22534 = state_22509__$1;
(statearr_22513_22534[(2)] = null);

(statearr_22513_22534[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22510 === (4))){
var inst_22489 = (state_22509[(8)]);
var inst_22489__$1 = (state_22509[(2)]);
var inst_22490 = (inst_22489__$1 == null);
var inst_22491 = cljs.core.not(inst_22490);
var state_22509__$1 = (function (){var statearr_22514 = state_22509;
(statearr_22514[(8)] = inst_22489__$1);

return statearr_22514;
})();
if(inst_22491){
var statearr_22515_22535 = state_22509__$1;
(statearr_22515_22535[(1)] = (5));

} else {
var statearr_22516_22536 = state_22509__$1;
(statearr_22516_22536[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22510 === (6))){
var state_22509__$1 = state_22509;
var statearr_22517_22537 = state_22509__$1;
(statearr_22517_22537[(2)] = null);

(statearr_22517_22537[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22510 === (3))){
var inst_22506 = (state_22509[(2)]);
var inst_22507 = cljs.core.async.close_BANG_(out);
var state_22509__$1 = (function (){var statearr_22518 = state_22509;
(statearr_22518[(9)] = inst_22506);

return statearr_22518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22509__$1,inst_22507);
} else {
if((state_val_22510 === (2))){
var state_22509__$1 = state_22509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22509__$1,(4),ch);
} else {
if((state_val_22510 === (11))){
var inst_22489 = (state_22509[(8)]);
var inst_22498 = (state_22509[(2)]);
var inst_22486 = inst_22489;
var state_22509__$1 = (function (){var statearr_22519 = state_22509;
(statearr_22519[(7)] = inst_22486);

(statearr_22519[(10)] = inst_22498);

return statearr_22519;
})();
var statearr_22520_22538 = state_22509__$1;
(statearr_22520_22538[(2)] = null);

(statearr_22520_22538[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22510 === (9))){
var inst_22489 = (state_22509[(8)]);
var state_22509__$1 = state_22509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22509__$1,(11),out,inst_22489);
} else {
if((state_val_22510 === (5))){
var inst_22489 = (state_22509[(8)]);
var inst_22486 = (state_22509[(7)]);
var inst_22493 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22489,inst_22486);
var state_22509__$1 = state_22509;
if(inst_22493){
var statearr_22522_22539 = state_22509__$1;
(statearr_22522_22539[(1)] = (8));

} else {
var statearr_22523_22540 = state_22509__$1;
(statearr_22523_22540[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22510 === (10))){
var inst_22501 = (state_22509[(2)]);
var state_22509__$1 = state_22509;
var statearr_22524_22541 = state_22509__$1;
(statearr_22524_22541[(2)] = inst_22501);

(statearr_22524_22541[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22510 === (8))){
var inst_22486 = (state_22509[(7)]);
var tmp22521 = inst_22486;
var inst_22486__$1 = tmp22521;
var state_22509__$1 = (function (){var statearr_22525 = state_22509;
(statearr_22525[(7)] = inst_22486__$1);

return statearr_22525;
})();
var statearr_22526_22542 = state_22509__$1;
(statearr_22526_22542[(2)] = null);

(statearr_22526_22542[(1)] = (2));


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
});})(c__18926__auto___22532,out))
;
return ((function (switch__18743__auto__,c__18926__auto___22532,out){
return (function() {
var cljs$core$async$state_machine__18744__auto__ = null;
var cljs$core$async$state_machine__18744__auto____0 = (function (){
var statearr_22527 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22527[(0)] = cljs$core$async$state_machine__18744__auto__);

(statearr_22527[(1)] = (1));

return statearr_22527;
});
var cljs$core$async$state_machine__18744__auto____1 = (function (state_22509){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_22509);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22528){if((e22528 instanceof Object)){
var ex__18747__auto__ = e22528;
var statearr_22529_22543 = state_22509;
(statearr_22529_22543[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22509);

return cljs.core.cst$kw$recur;
} else {
throw e22528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22544 = state_22509;
state_22509 = G__22544;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$state_machine__18744__auto__ = function(state_22509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18744__auto____1.call(this,state_22509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18744__auto____0;
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18744__auto____1;
return cljs$core$async$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___22532,out))
})();
var state__18928__auto__ = (function (){var statearr_22530 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22530[(6)] = c__18926__auto___22532);

return statearr_22530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___22532,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22546 = arguments.length;
switch (G__22546) {
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
var c__18926__auto___22612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___22612,out){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___22612,out){
return (function (state_22584){
var state_val_22585 = (state_22584[(1)]);
if((state_val_22585 === (7))){
var inst_22580 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
var statearr_22586_22613 = state_22584__$1;
(statearr_22586_22613[(2)] = inst_22580);

(statearr_22586_22613[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22585 === (1))){
var inst_22547 = (new Array(n));
var inst_22548 = inst_22547;
var inst_22549 = (0);
var state_22584__$1 = (function (){var statearr_22587 = state_22584;
(statearr_22587[(7)] = inst_22549);

(statearr_22587[(8)] = inst_22548);

return statearr_22587;
})();
var statearr_22588_22614 = state_22584__$1;
(statearr_22588_22614[(2)] = null);

(statearr_22588_22614[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22585 === (4))){
var inst_22552 = (state_22584[(9)]);
var inst_22552__$1 = (state_22584[(2)]);
var inst_22553 = (inst_22552__$1 == null);
var inst_22554 = cljs.core.not(inst_22553);
var state_22584__$1 = (function (){var statearr_22589 = state_22584;
(statearr_22589[(9)] = inst_22552__$1);

return statearr_22589;
})();
if(inst_22554){
var statearr_22590_22615 = state_22584__$1;
(statearr_22590_22615[(1)] = (5));

} else {
var statearr_22591_22616 = state_22584__$1;
(statearr_22591_22616[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22585 === (15))){
var inst_22574 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
var statearr_22592_22617 = state_22584__$1;
(statearr_22592_22617[(2)] = inst_22574);

(statearr_22592_22617[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22585 === (13))){
var state_22584__$1 = state_22584;
var statearr_22593_22618 = state_22584__$1;
(statearr_22593_22618[(2)] = null);

(statearr_22593_22618[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22585 === (6))){
var inst_22549 = (state_22584[(7)]);
var inst_22570 = (inst_22549 > (0));
var state_22584__$1 = state_22584;
if(cljs.core.truth_(inst_22570)){
var statearr_22594_22619 = state_22584__$1;
(statearr_22594_22619[(1)] = (12));

} else {
var statearr_22595_22620 = state_22584__$1;
(statearr_22595_22620[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22585 === (3))){
var inst_22582 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22584__$1,inst_22582);
} else {
if((state_val_22585 === (12))){
var inst_22548 = (state_22584[(8)]);
var inst_22572 = cljs.core.vec(inst_22548);
var state_22584__$1 = state_22584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22584__$1,(15),out,inst_22572);
} else {
if((state_val_22585 === (2))){
var state_22584__$1 = state_22584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22584__$1,(4),ch);
} else {
if((state_val_22585 === (11))){
var inst_22564 = (state_22584[(2)]);
var inst_22565 = (new Array(n));
var inst_22548 = inst_22565;
var inst_22549 = (0);
var state_22584__$1 = (function (){var statearr_22596 = state_22584;
(statearr_22596[(7)] = inst_22549);

(statearr_22596[(10)] = inst_22564);

(statearr_22596[(8)] = inst_22548);

return statearr_22596;
})();
var statearr_22597_22621 = state_22584__$1;
(statearr_22597_22621[(2)] = null);

(statearr_22597_22621[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22585 === (9))){
var inst_22548 = (state_22584[(8)]);
var inst_22562 = cljs.core.vec(inst_22548);
var state_22584__$1 = state_22584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22584__$1,(11),out,inst_22562);
} else {
if((state_val_22585 === (5))){
var inst_22549 = (state_22584[(7)]);
var inst_22552 = (state_22584[(9)]);
var inst_22548 = (state_22584[(8)]);
var inst_22557 = (state_22584[(11)]);
var inst_22556 = (inst_22548[inst_22549] = inst_22552);
var inst_22557__$1 = (inst_22549 + (1));
var inst_22558 = (inst_22557__$1 < n);
var state_22584__$1 = (function (){var statearr_22598 = state_22584;
(statearr_22598[(12)] = inst_22556);

(statearr_22598[(11)] = inst_22557__$1);

return statearr_22598;
})();
if(cljs.core.truth_(inst_22558)){
var statearr_22599_22622 = state_22584__$1;
(statearr_22599_22622[(1)] = (8));

} else {
var statearr_22600_22623 = state_22584__$1;
(statearr_22600_22623[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22585 === (14))){
var inst_22577 = (state_22584[(2)]);
var inst_22578 = cljs.core.async.close_BANG_(out);
var state_22584__$1 = (function (){var statearr_22602 = state_22584;
(statearr_22602[(13)] = inst_22577);

return statearr_22602;
})();
var statearr_22603_22624 = state_22584__$1;
(statearr_22603_22624[(2)] = inst_22578);

(statearr_22603_22624[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22585 === (10))){
var inst_22568 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
var statearr_22604_22625 = state_22584__$1;
(statearr_22604_22625[(2)] = inst_22568);

(statearr_22604_22625[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22585 === (8))){
var inst_22548 = (state_22584[(8)]);
var inst_22557 = (state_22584[(11)]);
var tmp22601 = inst_22548;
var inst_22548__$1 = tmp22601;
var inst_22549 = inst_22557;
var state_22584__$1 = (function (){var statearr_22605 = state_22584;
(statearr_22605[(7)] = inst_22549);

(statearr_22605[(8)] = inst_22548__$1);

return statearr_22605;
})();
var statearr_22606_22626 = state_22584__$1;
(statearr_22606_22626[(2)] = null);

(statearr_22606_22626[(1)] = (2));


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
});})(c__18926__auto___22612,out))
;
return ((function (switch__18743__auto__,c__18926__auto___22612,out){
return (function() {
var cljs$core$async$state_machine__18744__auto__ = null;
var cljs$core$async$state_machine__18744__auto____0 = (function (){
var statearr_22607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22607[(0)] = cljs$core$async$state_machine__18744__auto__);

(statearr_22607[(1)] = (1));

return statearr_22607;
});
var cljs$core$async$state_machine__18744__auto____1 = (function (state_22584){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_22584);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22608){if((e22608 instanceof Object)){
var ex__18747__auto__ = e22608;
var statearr_22609_22627 = state_22584;
(statearr_22609_22627[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22584);

return cljs.core.cst$kw$recur;
} else {
throw e22608;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22628 = state_22584;
state_22584 = G__22628;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$state_machine__18744__auto__ = function(state_22584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18744__auto____1.call(this,state_22584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18744__auto____0;
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18744__auto____1;
return cljs$core$async$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___22612,out))
})();
var state__18928__auto__ = (function (){var statearr_22610 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22610[(6)] = c__18926__auto___22612);

return statearr_22610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___22612,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22630 = arguments.length;
switch (G__22630) {
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
var c__18926__auto___22700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18926__auto___22700,out){
return (function (){
var f__18927__auto__ = (function (){var switch__18743__auto__ = ((function (c__18926__auto___22700,out){
return (function (state_22672){
var state_val_22673 = (state_22672[(1)]);
if((state_val_22673 === (7))){
var inst_22668 = (state_22672[(2)]);
var state_22672__$1 = state_22672;
var statearr_22674_22701 = state_22672__$1;
(statearr_22674_22701[(2)] = inst_22668);

(statearr_22674_22701[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22673 === (1))){
var inst_22631 = [];
var inst_22632 = inst_22631;
var inst_22633 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_22672__$1 = (function (){var statearr_22675 = state_22672;
(statearr_22675[(7)] = inst_22632);

(statearr_22675[(8)] = inst_22633);

return statearr_22675;
})();
var statearr_22676_22702 = state_22672__$1;
(statearr_22676_22702[(2)] = null);

(statearr_22676_22702[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22673 === (4))){
var inst_22636 = (state_22672[(9)]);
var inst_22636__$1 = (state_22672[(2)]);
var inst_22637 = (inst_22636__$1 == null);
var inst_22638 = cljs.core.not(inst_22637);
var state_22672__$1 = (function (){var statearr_22677 = state_22672;
(statearr_22677[(9)] = inst_22636__$1);

return statearr_22677;
})();
if(inst_22638){
var statearr_22678_22703 = state_22672__$1;
(statearr_22678_22703[(1)] = (5));

} else {
var statearr_22679_22704 = state_22672__$1;
(statearr_22679_22704[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22673 === (15))){
var inst_22662 = (state_22672[(2)]);
var state_22672__$1 = state_22672;
var statearr_22680_22705 = state_22672__$1;
(statearr_22680_22705[(2)] = inst_22662);

(statearr_22680_22705[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22673 === (13))){
var state_22672__$1 = state_22672;
var statearr_22681_22706 = state_22672__$1;
(statearr_22681_22706[(2)] = null);

(statearr_22681_22706[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22673 === (6))){
var inst_22632 = (state_22672[(7)]);
var inst_22657 = inst_22632.length;
var inst_22658 = (inst_22657 > (0));
var state_22672__$1 = state_22672;
if(cljs.core.truth_(inst_22658)){
var statearr_22682_22707 = state_22672__$1;
(statearr_22682_22707[(1)] = (12));

} else {
var statearr_22683_22708 = state_22672__$1;
(statearr_22683_22708[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22673 === (3))){
var inst_22670 = (state_22672[(2)]);
var state_22672__$1 = state_22672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22672__$1,inst_22670);
} else {
if((state_val_22673 === (12))){
var inst_22632 = (state_22672[(7)]);
var inst_22660 = cljs.core.vec(inst_22632);
var state_22672__$1 = state_22672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22672__$1,(15),out,inst_22660);
} else {
if((state_val_22673 === (2))){
var state_22672__$1 = state_22672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22672__$1,(4),ch);
} else {
if((state_val_22673 === (11))){
var inst_22640 = (state_22672[(10)]);
var inst_22636 = (state_22672[(9)]);
var inst_22650 = (state_22672[(2)]);
var inst_22651 = [];
var inst_22652 = inst_22651.push(inst_22636);
var inst_22632 = inst_22651;
var inst_22633 = inst_22640;
var state_22672__$1 = (function (){var statearr_22684 = state_22672;
(statearr_22684[(11)] = inst_22650);

(statearr_22684[(7)] = inst_22632);

(statearr_22684[(12)] = inst_22652);

(statearr_22684[(8)] = inst_22633);

return statearr_22684;
})();
var statearr_22685_22709 = state_22672__$1;
(statearr_22685_22709[(2)] = null);

(statearr_22685_22709[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22673 === (9))){
var inst_22632 = (state_22672[(7)]);
var inst_22648 = cljs.core.vec(inst_22632);
var state_22672__$1 = state_22672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22672__$1,(11),out,inst_22648);
} else {
if((state_val_22673 === (5))){
var inst_22640 = (state_22672[(10)]);
var inst_22633 = (state_22672[(8)]);
var inst_22636 = (state_22672[(9)]);
var inst_22640__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22636) : f.call(null,inst_22636));
var inst_22641 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22640__$1,inst_22633);
var inst_22642 = cljs.core.keyword_identical_QMARK_(inst_22633,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_22643 = ((inst_22641) || (inst_22642));
var state_22672__$1 = (function (){var statearr_22686 = state_22672;
(statearr_22686[(10)] = inst_22640__$1);

return statearr_22686;
})();
if(cljs.core.truth_(inst_22643)){
var statearr_22687_22710 = state_22672__$1;
(statearr_22687_22710[(1)] = (8));

} else {
var statearr_22688_22711 = state_22672__$1;
(statearr_22688_22711[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22673 === (14))){
var inst_22665 = (state_22672[(2)]);
var inst_22666 = cljs.core.async.close_BANG_(out);
var state_22672__$1 = (function (){var statearr_22690 = state_22672;
(statearr_22690[(13)] = inst_22665);

return statearr_22690;
})();
var statearr_22691_22712 = state_22672__$1;
(statearr_22691_22712[(2)] = inst_22666);

(statearr_22691_22712[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22673 === (10))){
var inst_22655 = (state_22672[(2)]);
var state_22672__$1 = state_22672;
var statearr_22692_22713 = state_22672__$1;
(statearr_22692_22713[(2)] = inst_22655);

(statearr_22692_22713[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22673 === (8))){
var inst_22632 = (state_22672[(7)]);
var inst_22640 = (state_22672[(10)]);
var inst_22636 = (state_22672[(9)]);
var inst_22645 = inst_22632.push(inst_22636);
var tmp22689 = inst_22632;
var inst_22632__$1 = tmp22689;
var inst_22633 = inst_22640;
var state_22672__$1 = (function (){var statearr_22693 = state_22672;
(statearr_22693[(7)] = inst_22632__$1);

(statearr_22693[(8)] = inst_22633);

(statearr_22693[(14)] = inst_22645);

return statearr_22693;
})();
var statearr_22694_22714 = state_22672__$1;
(statearr_22694_22714[(2)] = null);

(statearr_22694_22714[(1)] = (2));


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
});})(c__18926__auto___22700,out))
;
return ((function (switch__18743__auto__,c__18926__auto___22700,out){
return (function() {
var cljs$core$async$state_machine__18744__auto__ = null;
var cljs$core$async$state_machine__18744__auto____0 = (function (){
var statearr_22695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22695[(0)] = cljs$core$async$state_machine__18744__auto__);

(statearr_22695[(1)] = (1));

return statearr_22695;
});
var cljs$core$async$state_machine__18744__auto____1 = (function (state_22672){
while(true){
var ret_value__18745__auto__ = (function (){try{while(true){
var result__18746__auto__ = switch__18743__auto__(state_22672);
if(cljs.core.keyword_identical_QMARK_(result__18746__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18746__auto__;
}
break;
}
}catch (e22696){if((e22696 instanceof Object)){
var ex__18747__auto__ = e22696;
var statearr_22697_22715 = state_22672;
(statearr_22697_22715[(5)] = ex__18747__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22672);

return cljs.core.cst$kw$recur;
} else {
throw e22696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18745__auto__,cljs.core.cst$kw$recur)){
var G__22716 = state_22672;
state_22672 = G__22716;
continue;
} else {
return ret_value__18745__auto__;
}
break;
}
});
cljs$core$async$state_machine__18744__auto__ = function(state_22672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18744__auto____1.call(this,state_22672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18744__auto____0;
cljs$core$async$state_machine__18744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18744__auto____1;
return cljs$core$async$state_machine__18744__auto__;
})()
;})(switch__18743__auto__,c__18926__auto___22700,out))
})();
var state__18928__auto__ = (function (){var statearr_22698 = (f__18927__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18927__auto__.cljs$core$IFn$_invoke$arity$0() : f__18927__auto__.call(null));
(statearr_22698[(6)] = c__18926__auto___22700);

return statearr_22698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18928__auto__);
});})(c__18926__auto___22700,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

