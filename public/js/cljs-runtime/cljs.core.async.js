goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30600 = arguments.length;
switch (G__30600) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30606 = (function (f,blockable,meta30607){
this.f = f;
this.blockable = blockable;
this.meta30607 = meta30607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30608,meta30607__$1){
var self__ = this;
var _30608__$1 = this;
return (new cljs.core.async.t_cljs$core$async30606(self__.f,self__.blockable,meta30607__$1));
}));

(cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30608){
var self__ = this;
var _30608__$1 = this;
return self__.meta30607;
}));

(cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30607","meta30607",113593716,null)], null);
}));

(cljs.core.async.t_cljs$core$async30606.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30606");

(cljs.core.async.t_cljs$core$async30606.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30606");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30606.
 */
cljs.core.async.__GT_t_cljs$core$async30606 = (function cljs$core$async$__GT_t_cljs$core$async30606(f__$1,blockable__$1,meta30607){
return (new cljs.core.async.t_cljs$core$async30606(f__$1,blockable__$1,meta30607));
});

}

return (new cljs.core.async.t_cljs$core$async30606(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
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
var G__30644 = arguments.length;
switch (G__30644) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30670 = arguments.length;
switch (G__30670) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__30673 = arguments.length;
switch (G__30673) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32418 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32418) : fn1.call(null,val_32418));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32418) : fn1.call(null,val_32418));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__30703 = arguments.length;
switch (G__30703) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32430 = n;
var x_32431 = (0);
while(true){
if((x_32431 < n__4666__auto___32430)){
(a[x_32431] = x_32431);

var G__32432 = (x_32431 + (1));
x_32431 = G__32432;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30741 = (function (flag,meta30742){
this.flag = flag;
this.meta30742 = meta30742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30743,meta30742__$1){
var self__ = this;
var _30743__$1 = this;
return (new cljs.core.async.t_cljs$core$async30741(self__.flag,meta30742__$1));
}));

(cljs.core.async.t_cljs$core$async30741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30743){
var self__ = this;
var _30743__$1 = this;
return self__.meta30742;
}));

(cljs.core.async.t_cljs$core$async30741.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30742","meta30742",-990770185,null)], null);
}));

(cljs.core.async.t_cljs$core$async30741.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30741");

(cljs.core.async.t_cljs$core$async30741.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30741");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30741.
 */
cljs.core.async.__GT_t_cljs$core$async30741 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30741(flag__$1,meta30742){
return (new cljs.core.async.t_cljs$core$async30741(flag__$1,meta30742));
});

}

return (new cljs.core.async.t_cljs$core$async30741(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30761 = (function (flag,cb,meta30762){
this.flag = flag;
this.cb = cb;
this.meta30762 = meta30762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30763,meta30762__$1){
var self__ = this;
var _30763__$1 = this;
return (new cljs.core.async.t_cljs$core$async30761(self__.flag,self__.cb,meta30762__$1));
}));

(cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30763){
var self__ = this;
var _30763__$1 = this;
return self__.meta30762;
}));

(cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30762","meta30762",438168248,null)], null);
}));

(cljs.core.async.t_cljs$core$async30761.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30761");

(cljs.core.async.t_cljs$core$async30761.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30761");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30761.
 */
cljs.core.async.__GT_t_cljs$core$async30761 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30761(flag__$1,cb__$1,meta30762){
return (new cljs.core.async.t_cljs$core$async30761(flag__$1,cb__$1,meta30762));
});

}

return (new cljs.core.async.t_cljs$core$async30761(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30795_SHARP_){
var G__30798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30795_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30798) : fret.call(null,G__30798));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30797_SHARP_){
var G__30801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30797_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30801) : fret.call(null,G__30801));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32443 = (i + (1));
i = G__32443;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4795__auto__ = [];
var len__4789__auto___32444 = arguments.length;
var i__4790__auto___32445 = (0);
while(true){
if((i__4790__auto___32445 < len__4789__auto___32444)){
args__4795__auto__.push((arguments[i__4790__auto___32445]));

var G__32446 = (i__4790__auto___32445 + (1));
i__4790__auto___32445 = G__32446;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30820){
var map__30822 = p__30820;
var map__30822__$1 = (((((!((map__30822 == null))))?(((((map__30822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30822):map__30822);
var opts = map__30822__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30805){
var G__30806 = cljs.core.first(seq30805);
var seq30805__$1 = cljs.core.next(seq30805);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30806,seq30805__$1);
}));

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
var G__30841 = arguments.length;
switch (G__30841) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30529__auto___32452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_30893){
var state_val_30898 = (state_30893[(1)]);
if((state_val_30898 === (7))){
var inst_30889 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
var statearr_30910_32455 = state_30893__$1;
(statearr_30910_32455[(2)] = inst_30889);

(statearr_30910_32455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (1))){
var state_30893__$1 = state_30893;
var statearr_30911_32457 = state_30893__$1;
(statearr_30911_32457[(2)] = null);

(statearr_30911_32457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (4))){
var inst_30872 = (state_30893[(7)]);
var inst_30872__$1 = (state_30893[(2)]);
var inst_30873 = (inst_30872__$1 == null);
var state_30893__$1 = (function (){var statearr_30912 = state_30893;
(statearr_30912[(7)] = inst_30872__$1);

return statearr_30912;
})();
if(cljs.core.truth_(inst_30873)){
var statearr_30914_32458 = state_30893__$1;
(statearr_30914_32458[(1)] = (5));

} else {
var statearr_30915_32459 = state_30893__$1;
(statearr_30915_32459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (13))){
var state_30893__$1 = state_30893;
var statearr_30922_32460 = state_30893__$1;
(statearr_30922_32460[(2)] = null);

(statearr_30922_32460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (6))){
var inst_30872 = (state_30893[(7)]);
var state_30893__$1 = state_30893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30893__$1,(11),to,inst_30872);
} else {
if((state_val_30898 === (3))){
var inst_30891 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30893__$1,inst_30891);
} else {
if((state_val_30898 === (12))){
var state_30893__$1 = state_30893;
var statearr_30933_32467 = state_30893__$1;
(statearr_30933_32467[(2)] = null);

(statearr_30933_32467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (2))){
var state_30893__$1 = state_30893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30893__$1,(4),from);
} else {
if((state_val_30898 === (11))){
var inst_30882 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
if(cljs.core.truth_(inst_30882)){
var statearr_30934_32469 = state_30893__$1;
(statearr_30934_32469[(1)] = (12));

} else {
var statearr_30935_32470 = state_30893__$1;
(statearr_30935_32470[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (9))){
var state_30893__$1 = state_30893;
var statearr_30936_32472 = state_30893__$1;
(statearr_30936_32472[(2)] = null);

(statearr_30936_32472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (5))){
var state_30893__$1 = state_30893;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30937_32473 = state_30893__$1;
(statearr_30937_32473[(1)] = (8));

} else {
var statearr_30938_32474 = state_30893__$1;
(statearr_30938_32474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (14))){
var inst_30887 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
var statearr_30939_32475 = state_30893__$1;
(statearr_30939_32475[(2)] = inst_30887);

(statearr_30939_32475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (10))){
var inst_30879 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
var statearr_30940_32480 = state_30893__$1;
(statearr_30940_32480[(2)] = inst_30879);

(statearr_30940_32480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (8))){
var inst_30876 = cljs.core.async.close_BANG_(to);
var state_30893__$1 = state_30893;
var statearr_30942_32481 = state_30893__$1;
(statearr_30942_32481[(2)] = inst_30876);

(statearr_30942_32481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__30218__auto__ = null;
var cljs$core$async$state_machine__30218__auto____0 = (function (){
var statearr_30945 = [null,null,null,null,null,null,null,null];
(statearr_30945[(0)] = cljs$core$async$state_machine__30218__auto__);

(statearr_30945[(1)] = (1));

return statearr_30945;
});
var cljs$core$async$state_machine__30218__auto____1 = (function (state_30893){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_30893);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e30949){if((e30949 instanceof Object)){
var ex__30221__auto__ = e30949;
var statearr_30950_32485 = state_30893;
(statearr_30950_32485[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30949;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32486 = state_30893;
state_30893 = G__32486;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$state_machine__30218__auto__ = function(state_30893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30218__auto____1.call(this,state_30893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30218__auto____0;
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30218__auto____1;
return cljs$core$async$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_30951 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_30951[(6)] = c__30529__auto___32452);

return statearr_30951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30963){
var vec__30964 = p__30963;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30964,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30964,(1),null);
var job = vec__30964;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30529__auto___32491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_30971){
var state_val_30972 = (state_30971[(1)]);
if((state_val_30972 === (1))){
var state_30971__$1 = state_30971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30971__$1,(2),res,v);
} else {
if((state_val_30972 === (2))){
var inst_30968 = (state_30971[(2)]);
var inst_30969 = cljs.core.async.close_BANG_(res);
var state_30971__$1 = (function (){var statearr_30974 = state_30971;
(statearr_30974[(7)] = inst_30968);

return statearr_30974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30971__$1,inst_30969);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0 = (function (){
var statearr_30978 = [null,null,null,null,null,null,null,null];
(statearr_30978[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__);

(statearr_30978[(1)] = (1));

return statearr_30978;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1 = (function (state_30971){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_30971);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e30979){if((e30979 instanceof Object)){
var ex__30221__auto__ = e30979;
var statearr_30981_32496 = state_30971;
(statearr_30981_32496[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32497 = state_30971;
state_30971 = G__32497;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__ = function(state_30971){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1.call(this,state_30971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_30985 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_30985[(6)] = c__30529__auto___32491);

return statearr_30985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30989){
var vec__30990 = p__30989;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30990,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30990,(1),null);
var job = vec__30990;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32498 = n;
var __32499 = (0);
while(true){
if((__32499 < n__4666__auto___32498)){
var G__30996_32500 = type;
var G__30996_32501__$1 = (((G__30996_32500 instanceof cljs.core.Keyword))?G__30996_32500.fqn:null);
switch (G__30996_32501__$1) {
case "compute":
var c__30529__auto___32503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32499,c__30529__auto___32503,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async){
return (function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = ((function (__32499,c__30529__auto___32503,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async){
return (function (state_31012){
var state_val_31013 = (state_31012[(1)]);
if((state_val_31013 === (1))){
var state_31012__$1 = state_31012;
var statearr_31014_32504 = state_31012__$1;
(statearr_31014_32504[(2)] = null);

(statearr_31014_32504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (2))){
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31012__$1,(4),jobs);
} else {
if((state_val_31013 === (3))){
var inst_31010 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31012__$1,inst_31010);
} else {
if((state_val_31013 === (4))){
var inst_31002 = (state_31012[(2)]);
var inst_31003 = process(inst_31002);
var state_31012__$1 = state_31012;
if(cljs.core.truth_(inst_31003)){
var statearr_31015_32509 = state_31012__$1;
(statearr_31015_32509[(1)] = (5));

} else {
var statearr_31016_32510 = state_31012__$1;
(statearr_31016_32510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (5))){
var state_31012__$1 = state_31012;
var statearr_31017_32511 = state_31012__$1;
(statearr_31017_32511[(2)] = null);

(statearr_31017_32511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (6))){
var state_31012__$1 = state_31012;
var statearr_31018_32512 = state_31012__$1;
(statearr_31018_32512[(2)] = null);

(statearr_31018_32512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (7))){
var inst_31008 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31019_32515 = state_31012__$1;
(statearr_31019_32515[(2)] = inst_31008);

(statearr_31019_32515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32499,c__30529__auto___32503,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async))
;
return ((function (__32499,switch__30217__auto__,c__30529__auto___32503,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0 = (function (){
var statearr_31023 = [null,null,null,null,null,null,null];
(statearr_31023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__);

(statearr_31023[(1)] = (1));

return statearr_31023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1 = (function (state_31012){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31012);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31024){if((e31024 instanceof Object)){
var ex__30221__auto__ = e31024;
var statearr_31028_32519 = state_31012;
(statearr_31028_32519[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32523 = state_31012;
state_31012 = G__32523;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__ = function(state_31012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1.call(this,state_31012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__;
})()
;})(__32499,switch__30217__auto__,c__30529__auto___32503,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async))
})();
var state__30531__auto__ = (function (){var statearr_31030 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31030[(6)] = c__30529__auto___32503);

return statearr_31030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
});})(__32499,c__30529__auto___32503,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async))
);


break;
case "async":
var c__30529__auto___32525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32499,c__30529__auto___32525,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async){
return (function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = ((function (__32499,c__30529__auto___32525,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async){
return (function (state_31045){
var state_val_31046 = (state_31045[(1)]);
if((state_val_31046 === (1))){
var state_31045__$1 = state_31045;
var statearr_31047_32527 = state_31045__$1;
(statearr_31047_32527[(2)] = null);

(statearr_31047_32527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (2))){
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31045__$1,(4),jobs);
} else {
if((state_val_31046 === (3))){
var inst_31043 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31045__$1,inst_31043);
} else {
if((state_val_31046 === (4))){
var inst_31035 = (state_31045[(2)]);
var inst_31036 = async(inst_31035);
var state_31045__$1 = state_31045;
if(cljs.core.truth_(inst_31036)){
var statearr_31055_32530 = state_31045__$1;
(statearr_31055_32530[(1)] = (5));

} else {
var statearr_31060_32531 = state_31045__$1;
(statearr_31060_32531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (5))){
var state_31045__$1 = state_31045;
var statearr_31065_32532 = state_31045__$1;
(statearr_31065_32532[(2)] = null);

(statearr_31065_32532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (6))){
var state_31045__$1 = state_31045;
var statearr_31066_32535 = state_31045__$1;
(statearr_31066_32535[(2)] = null);

(statearr_31066_32535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31046 === (7))){
var inst_31041 = (state_31045[(2)]);
var state_31045__$1 = state_31045;
var statearr_31067_32536 = state_31045__$1;
(statearr_31067_32536[(2)] = inst_31041);

(statearr_31067_32536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32499,c__30529__auto___32525,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async))
;
return ((function (__32499,switch__30217__auto__,c__30529__auto___32525,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0 = (function (){
var statearr_31068 = [null,null,null,null,null,null,null];
(statearr_31068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__);

(statearr_31068[(1)] = (1));

return statearr_31068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1 = (function (state_31045){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31045);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31069){if((e31069 instanceof Object)){
var ex__30221__auto__ = e31069;
var statearr_31073_32544 = state_31045;
(statearr_31073_32544[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32546 = state_31045;
state_31045 = G__32546;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__ = function(state_31045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1.call(this,state_31045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__;
})()
;})(__32499,switch__30217__auto__,c__30529__auto___32525,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async))
})();
var state__30531__auto__ = (function (){var statearr_31077 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31077[(6)] = c__30529__auto___32525);

return statearr_31077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
});})(__32499,c__30529__auto___32525,G__30996_32500,G__30996_32501__$1,n__4666__auto___32498,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30996_32501__$1)].join('')));

}

var G__32547 = (__32499 + (1));
__32499 = G__32547;
continue;
} else {
}
break;
}

var c__30529__auto___32548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_31135){
var state_val_31136 = (state_31135[(1)]);
if((state_val_31136 === (7))){
var inst_31131 = (state_31135[(2)]);
var state_31135__$1 = state_31135;
var statearr_31137_32552 = state_31135__$1;
(statearr_31137_32552[(2)] = inst_31131);

(statearr_31137_32552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (1))){
var state_31135__$1 = state_31135;
var statearr_31138_32553 = state_31135__$1;
(statearr_31138_32553[(2)] = null);

(statearr_31138_32553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (4))){
var inst_31116 = (state_31135[(7)]);
var inst_31116__$1 = (state_31135[(2)]);
var inst_31117 = (inst_31116__$1 == null);
var state_31135__$1 = (function (){var statearr_31139 = state_31135;
(statearr_31139[(7)] = inst_31116__$1);

return statearr_31139;
})();
if(cljs.core.truth_(inst_31117)){
var statearr_31140_32561 = state_31135__$1;
(statearr_31140_32561[(1)] = (5));

} else {
var statearr_31141_32562 = state_31135__$1;
(statearr_31141_32562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (6))){
var inst_31116 = (state_31135[(7)]);
var inst_31121 = (state_31135[(8)]);
var inst_31121__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31122 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31123 = [inst_31116,inst_31121__$1];
var inst_31124 = (new cljs.core.PersistentVector(null,2,(5),inst_31122,inst_31123,null));
var state_31135__$1 = (function (){var statearr_31142 = state_31135;
(statearr_31142[(8)] = inst_31121__$1);

return statearr_31142;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31135__$1,(8),jobs,inst_31124);
} else {
if((state_val_31136 === (3))){
var inst_31133 = (state_31135[(2)]);
var state_31135__$1 = state_31135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31135__$1,inst_31133);
} else {
if((state_val_31136 === (2))){
var state_31135__$1 = state_31135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31135__$1,(4),from);
} else {
if((state_val_31136 === (9))){
var inst_31128 = (state_31135[(2)]);
var state_31135__$1 = (function (){var statearr_31143 = state_31135;
(statearr_31143[(9)] = inst_31128);

return statearr_31143;
})();
var statearr_31144_32567 = state_31135__$1;
(statearr_31144_32567[(2)] = null);

(statearr_31144_32567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (5))){
var inst_31119 = cljs.core.async.close_BANG_(jobs);
var state_31135__$1 = state_31135;
var statearr_31146_32570 = state_31135__$1;
(statearr_31146_32570[(2)] = inst_31119);

(statearr_31146_32570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (8))){
var inst_31121 = (state_31135[(8)]);
var inst_31126 = (state_31135[(2)]);
var state_31135__$1 = (function (){var statearr_31147 = state_31135;
(statearr_31147[(10)] = inst_31126);

return statearr_31147;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31135__$1,(9),results,inst_31121);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0 = (function (){
var statearr_31148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__);

(statearr_31148[(1)] = (1));

return statearr_31148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1 = (function (state_31135){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31135);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31149){if((e31149 instanceof Object)){
var ex__30221__auto__ = e31149;
var statearr_31150_32583 = state_31135;
(statearr_31150_32583[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32585 = state_31135;
state_31135 = G__32585;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__ = function(state_31135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1.call(this,state_31135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31151 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31151[(6)] = c__30529__auto___32548);

return statearr_31151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_31189){
var state_val_31190 = (state_31189[(1)]);
if((state_val_31190 === (7))){
var inst_31185 = (state_31189[(2)]);
var state_31189__$1 = state_31189;
var statearr_31191_32587 = state_31189__$1;
(statearr_31191_32587[(2)] = inst_31185);

(statearr_31191_32587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (20))){
var state_31189__$1 = state_31189;
var statearr_31192_32588 = state_31189__$1;
(statearr_31192_32588[(2)] = null);

(statearr_31192_32588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (1))){
var state_31189__$1 = state_31189;
var statearr_31193_32589 = state_31189__$1;
(statearr_31193_32589[(2)] = null);

(statearr_31193_32589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (4))){
var inst_31154 = (state_31189[(7)]);
var inst_31154__$1 = (state_31189[(2)]);
var inst_31155 = (inst_31154__$1 == null);
var state_31189__$1 = (function (){var statearr_31194 = state_31189;
(statearr_31194[(7)] = inst_31154__$1);

return statearr_31194;
})();
if(cljs.core.truth_(inst_31155)){
var statearr_31195_32590 = state_31189__$1;
(statearr_31195_32590[(1)] = (5));

} else {
var statearr_31196_32591 = state_31189__$1;
(statearr_31196_32591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (15))){
var inst_31167 = (state_31189[(8)]);
var state_31189__$1 = state_31189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31189__$1,(18),to,inst_31167);
} else {
if((state_val_31190 === (21))){
var inst_31180 = (state_31189[(2)]);
var state_31189__$1 = state_31189;
var statearr_31197_32592 = state_31189__$1;
(statearr_31197_32592[(2)] = inst_31180);

(statearr_31197_32592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (13))){
var inst_31182 = (state_31189[(2)]);
var state_31189__$1 = (function (){var statearr_31198 = state_31189;
(statearr_31198[(9)] = inst_31182);

return statearr_31198;
})();
var statearr_31199_32593 = state_31189__$1;
(statearr_31199_32593[(2)] = null);

(statearr_31199_32593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (6))){
var inst_31154 = (state_31189[(7)]);
var state_31189__$1 = state_31189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31189__$1,(11),inst_31154);
} else {
if((state_val_31190 === (17))){
var inst_31175 = (state_31189[(2)]);
var state_31189__$1 = state_31189;
if(cljs.core.truth_(inst_31175)){
var statearr_31200_32598 = state_31189__$1;
(statearr_31200_32598[(1)] = (19));

} else {
var statearr_31201_32599 = state_31189__$1;
(statearr_31201_32599[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (3))){
var inst_31187 = (state_31189[(2)]);
var state_31189__$1 = state_31189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31189__$1,inst_31187);
} else {
if((state_val_31190 === (12))){
var inst_31164 = (state_31189[(10)]);
var state_31189__$1 = state_31189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31189__$1,(14),inst_31164);
} else {
if((state_val_31190 === (2))){
var state_31189__$1 = state_31189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31189__$1,(4),results);
} else {
if((state_val_31190 === (19))){
var state_31189__$1 = state_31189;
var statearr_31202_32603 = state_31189__$1;
(statearr_31202_32603[(2)] = null);

(statearr_31202_32603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (11))){
var inst_31164 = (state_31189[(2)]);
var state_31189__$1 = (function (){var statearr_31203 = state_31189;
(statearr_31203[(10)] = inst_31164);

return statearr_31203;
})();
var statearr_31204_32604 = state_31189__$1;
(statearr_31204_32604[(2)] = null);

(statearr_31204_32604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (9))){
var state_31189__$1 = state_31189;
var statearr_31205_32605 = state_31189__$1;
(statearr_31205_32605[(2)] = null);

(statearr_31205_32605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (5))){
var state_31189__$1 = state_31189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31206_32606 = state_31189__$1;
(statearr_31206_32606[(1)] = (8));

} else {
var statearr_31207_32607 = state_31189__$1;
(statearr_31207_32607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (14))){
var inst_31167 = (state_31189[(8)]);
var inst_31167__$1 = (state_31189[(2)]);
var inst_31168 = (inst_31167__$1 == null);
var inst_31169 = cljs.core.not(inst_31168);
var state_31189__$1 = (function (){var statearr_31208 = state_31189;
(statearr_31208[(8)] = inst_31167__$1);

return statearr_31208;
})();
if(inst_31169){
var statearr_31209_32611 = state_31189__$1;
(statearr_31209_32611[(1)] = (15));

} else {
var statearr_31210_32612 = state_31189__$1;
(statearr_31210_32612[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (16))){
var state_31189__$1 = state_31189;
var statearr_31211_32613 = state_31189__$1;
(statearr_31211_32613[(2)] = false);

(statearr_31211_32613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (10))){
var inst_31161 = (state_31189[(2)]);
var state_31189__$1 = state_31189;
var statearr_31212_32614 = state_31189__$1;
(statearr_31212_32614[(2)] = inst_31161);

(statearr_31212_32614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (18))){
var inst_31172 = (state_31189[(2)]);
var state_31189__$1 = state_31189;
var statearr_31213_32618 = state_31189__$1;
(statearr_31213_32618[(2)] = inst_31172);

(statearr_31213_32618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31190 === (8))){
var inst_31158 = cljs.core.async.close_BANG_(to);
var state_31189__$1 = state_31189;
var statearr_31214_32619 = state_31189__$1;
(statearr_31214_32619[(2)] = inst_31158);

(statearr_31214_32619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0 = (function (){
var statearr_31215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__);

(statearr_31215[(1)] = (1));

return statearr_31215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1 = (function (state_31189){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31189);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31216){if((e31216 instanceof Object)){
var ex__30221__auto__ = e31216;
var statearr_31217_32623 = state_31189;
(statearr_31217_32623[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32624 = state_31189;
state_31189 = G__32624;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__ = function(state_31189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1.call(this,state_31189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31218 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31218[(6)] = c__30529__auto__);

return statearr_31218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
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
var G__31220 = arguments.length;
switch (G__31220) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__31222 = arguments.length;
switch (G__31222) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__31224 = arguments.length;
switch (G__31224) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30529__auto___32640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_31250){
var state_val_31251 = (state_31250[(1)]);
if((state_val_31251 === (7))){
var inst_31246 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31252_32644 = state_31250__$1;
(statearr_31252_32644[(2)] = inst_31246);

(statearr_31252_32644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (1))){
var state_31250__$1 = state_31250;
var statearr_31253_32645 = state_31250__$1;
(statearr_31253_32645[(2)] = null);

(statearr_31253_32645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (4))){
var inst_31227 = (state_31250[(7)]);
var inst_31227__$1 = (state_31250[(2)]);
var inst_31228 = (inst_31227__$1 == null);
var state_31250__$1 = (function (){var statearr_31254 = state_31250;
(statearr_31254[(7)] = inst_31227__$1);

return statearr_31254;
})();
if(cljs.core.truth_(inst_31228)){
var statearr_31255_32646 = state_31250__$1;
(statearr_31255_32646[(1)] = (5));

} else {
var statearr_31256_32650 = state_31250__$1;
(statearr_31256_32650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (13))){
var state_31250__$1 = state_31250;
var statearr_31257_32651 = state_31250__$1;
(statearr_31257_32651[(2)] = null);

(statearr_31257_32651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (6))){
var inst_31227 = (state_31250[(7)]);
var inst_31233 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31227) : p.call(null,inst_31227));
var state_31250__$1 = state_31250;
if(cljs.core.truth_(inst_31233)){
var statearr_31258_32655 = state_31250__$1;
(statearr_31258_32655[(1)] = (9));

} else {
var statearr_31259_32656 = state_31250__$1;
(statearr_31259_32656[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (3))){
var inst_31248 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31250__$1,inst_31248);
} else {
if((state_val_31251 === (12))){
var state_31250__$1 = state_31250;
var statearr_31260_32657 = state_31250__$1;
(statearr_31260_32657[(2)] = null);

(statearr_31260_32657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (2))){
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31250__$1,(4),ch);
} else {
if((state_val_31251 === (11))){
var inst_31227 = (state_31250[(7)]);
var inst_31237 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31250__$1,(8),inst_31237,inst_31227);
} else {
if((state_val_31251 === (9))){
var state_31250__$1 = state_31250;
var statearr_31261_32661 = state_31250__$1;
(statearr_31261_32661[(2)] = tc);

(statearr_31261_32661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (5))){
var inst_31230 = cljs.core.async.close_BANG_(tc);
var inst_31231 = cljs.core.async.close_BANG_(fc);
var state_31250__$1 = (function (){var statearr_31262 = state_31250;
(statearr_31262[(8)] = inst_31230);

return statearr_31262;
})();
var statearr_31263_32662 = state_31250__$1;
(statearr_31263_32662[(2)] = inst_31231);

(statearr_31263_32662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (14))){
var inst_31244 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
var statearr_31264_32667 = state_31250__$1;
(statearr_31264_32667[(2)] = inst_31244);

(statearr_31264_32667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (10))){
var state_31250__$1 = state_31250;
var statearr_31265_32672 = state_31250__$1;
(statearr_31265_32672[(2)] = fc);

(statearr_31265_32672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31251 === (8))){
var inst_31239 = (state_31250[(2)]);
var state_31250__$1 = state_31250;
if(cljs.core.truth_(inst_31239)){
var statearr_31266_32679 = state_31250__$1;
(statearr_31266_32679[(1)] = (12));

} else {
var statearr_31267_32680 = state_31250__$1;
(statearr_31267_32680[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__30218__auto__ = null;
var cljs$core$async$state_machine__30218__auto____0 = (function (){
var statearr_31268 = [null,null,null,null,null,null,null,null,null];
(statearr_31268[(0)] = cljs$core$async$state_machine__30218__auto__);

(statearr_31268[(1)] = (1));

return statearr_31268;
});
var cljs$core$async$state_machine__30218__auto____1 = (function (state_31250){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31250);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31269){if((e31269 instanceof Object)){
var ex__30221__auto__ = e31269;
var statearr_31270_32688 = state_31250;
(statearr_31270_32688[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31269;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32689 = state_31250;
state_31250 = G__32689;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$state_machine__30218__auto__ = function(state_31250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30218__auto____1.call(this,state_31250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30218__auto____0;
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30218__auto____1;
return cljs$core$async$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31271 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31271[(6)] = c__30529__auto___32640);

return statearr_31271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_31292){
var state_val_31293 = (state_31292[(1)]);
if((state_val_31293 === (7))){
var inst_31288 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
var statearr_31294_32698 = state_31292__$1;
(statearr_31294_32698[(2)] = inst_31288);

(statearr_31294_32698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (1))){
var inst_31272 = init;
var state_31292__$1 = (function (){var statearr_31295 = state_31292;
(statearr_31295[(7)] = inst_31272);

return statearr_31295;
})();
var statearr_31296_32705 = state_31292__$1;
(statearr_31296_32705[(2)] = null);

(statearr_31296_32705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (4))){
var inst_31275 = (state_31292[(8)]);
var inst_31275__$1 = (state_31292[(2)]);
var inst_31276 = (inst_31275__$1 == null);
var state_31292__$1 = (function (){var statearr_31297 = state_31292;
(statearr_31297[(8)] = inst_31275__$1);

return statearr_31297;
})();
if(cljs.core.truth_(inst_31276)){
var statearr_31298_32706 = state_31292__$1;
(statearr_31298_32706[(1)] = (5));

} else {
var statearr_31299_32707 = state_31292__$1;
(statearr_31299_32707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (6))){
var inst_31279 = (state_31292[(9)]);
var inst_31272 = (state_31292[(7)]);
var inst_31275 = (state_31292[(8)]);
var inst_31279__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31272,inst_31275) : f.call(null,inst_31272,inst_31275));
var inst_31280 = cljs.core.reduced_QMARK_(inst_31279__$1);
var state_31292__$1 = (function (){var statearr_31300 = state_31292;
(statearr_31300[(9)] = inst_31279__$1);

return statearr_31300;
})();
if(inst_31280){
var statearr_31301_32708 = state_31292__$1;
(statearr_31301_32708[(1)] = (8));

} else {
var statearr_31302_32709 = state_31292__$1;
(statearr_31302_32709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (3))){
var inst_31290 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31292__$1,inst_31290);
} else {
if((state_val_31293 === (2))){
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31292__$1,(4),ch);
} else {
if((state_val_31293 === (9))){
var inst_31279 = (state_31292[(9)]);
var inst_31272 = inst_31279;
var state_31292__$1 = (function (){var statearr_31303 = state_31292;
(statearr_31303[(7)] = inst_31272);

return statearr_31303;
})();
var statearr_31304_32713 = state_31292__$1;
(statearr_31304_32713[(2)] = null);

(statearr_31304_32713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (5))){
var inst_31272 = (state_31292[(7)]);
var state_31292__$1 = state_31292;
var statearr_31305_32714 = state_31292__$1;
(statearr_31305_32714[(2)] = inst_31272);

(statearr_31305_32714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (10))){
var inst_31286 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
var statearr_31306_32715 = state_31292__$1;
(statearr_31306_32715[(2)] = inst_31286);

(statearr_31306_32715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (8))){
var inst_31279 = (state_31292[(9)]);
var inst_31282 = cljs.core.deref(inst_31279);
var state_31292__$1 = state_31292;
var statearr_31307_32716 = state_31292__$1;
(statearr_31307_32716[(2)] = inst_31282);

(statearr_31307_32716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30218__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30218__auto____0 = (function (){
var statearr_31308 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31308[(0)] = cljs$core$async$reduce_$_state_machine__30218__auto__);

(statearr_31308[(1)] = (1));

return statearr_31308;
});
var cljs$core$async$reduce_$_state_machine__30218__auto____1 = (function (state_31292){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31292);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31309){if((e31309 instanceof Object)){
var ex__30221__auto__ = e31309;
var statearr_31310_32719 = state_31292;
(statearr_31310_32719[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32721 = state_31292;
state_31292 = G__32721;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30218__auto__ = function(state_31292){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30218__auto____1.call(this,state_31292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30218__auto____0;
cljs$core$async$reduce_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30218__auto____1;
return cljs$core$async$reduce_$_state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31311 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31311[(6)] = c__30529__auto__);

return statearr_31311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_31317){
var state_val_31318 = (state_31317[(1)]);
if((state_val_31318 === (1))){
var inst_31312 = cljs.core.async.reduce(f__$1,init,ch);
var state_31317__$1 = state_31317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31317__$1,(2),inst_31312);
} else {
if((state_val_31318 === (2))){
var inst_31314 = (state_31317[(2)]);
var inst_31315 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31314) : f__$1.call(null,inst_31314));
var state_31317__$1 = state_31317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31317__$1,inst_31315);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30218__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30218__auto____0 = (function (){
var statearr_31319 = [null,null,null,null,null,null,null];
(statearr_31319[(0)] = cljs$core$async$transduce_$_state_machine__30218__auto__);

(statearr_31319[(1)] = (1));

return statearr_31319;
});
var cljs$core$async$transduce_$_state_machine__30218__auto____1 = (function (state_31317){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31317);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31320){if((e31320 instanceof Object)){
var ex__30221__auto__ = e31320;
var statearr_31321_32726 = state_31317;
(statearr_31321_32726[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32727 = state_31317;
state_31317 = G__32727;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30218__auto__ = function(state_31317){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30218__auto____1.call(this,state_31317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30218__auto____0;
cljs$core$async$transduce_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30218__auto____1;
return cljs$core$async$transduce_$_state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31322 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31322[(6)] = c__30529__auto__);

return statearr_31322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
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
var G__31324 = arguments.length;
switch (G__31324) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_31349){
var state_val_31350 = (state_31349[(1)]);
if((state_val_31350 === (7))){
var inst_31331 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31351_32732 = state_31349__$1;
(statearr_31351_32732[(2)] = inst_31331);

(statearr_31351_32732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (1))){
var inst_31325 = cljs.core.seq(coll);
var inst_31326 = inst_31325;
var state_31349__$1 = (function (){var statearr_31352 = state_31349;
(statearr_31352[(7)] = inst_31326);

return statearr_31352;
})();
var statearr_31353_32733 = state_31349__$1;
(statearr_31353_32733[(2)] = null);

(statearr_31353_32733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (4))){
var inst_31326 = (state_31349[(7)]);
var inst_31329 = cljs.core.first(inst_31326);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31349__$1,(7),ch,inst_31329);
} else {
if((state_val_31350 === (13))){
var inst_31343 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31354_32737 = state_31349__$1;
(statearr_31354_32737[(2)] = inst_31343);

(statearr_31354_32737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (6))){
var inst_31334 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
if(cljs.core.truth_(inst_31334)){
var statearr_31355_32739 = state_31349__$1;
(statearr_31355_32739[(1)] = (8));

} else {
var statearr_31356_32740 = state_31349__$1;
(statearr_31356_32740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (3))){
var inst_31347 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31349__$1,inst_31347);
} else {
if((state_val_31350 === (12))){
var state_31349__$1 = state_31349;
var statearr_31357_32741 = state_31349__$1;
(statearr_31357_32741[(2)] = null);

(statearr_31357_32741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (2))){
var inst_31326 = (state_31349[(7)]);
var state_31349__$1 = state_31349;
if(cljs.core.truth_(inst_31326)){
var statearr_31358_32743 = state_31349__$1;
(statearr_31358_32743[(1)] = (4));

} else {
var statearr_31359_32745 = state_31349__$1;
(statearr_31359_32745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (11))){
var inst_31340 = cljs.core.async.close_BANG_(ch);
var state_31349__$1 = state_31349;
var statearr_31360_32746 = state_31349__$1;
(statearr_31360_32746[(2)] = inst_31340);

(statearr_31360_32746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (9))){
var state_31349__$1 = state_31349;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31361_32747 = state_31349__$1;
(statearr_31361_32747[(1)] = (11));

} else {
var statearr_31362_32748 = state_31349__$1;
(statearr_31362_32748[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (5))){
var inst_31326 = (state_31349[(7)]);
var state_31349__$1 = state_31349;
var statearr_31363_32749 = state_31349__$1;
(statearr_31363_32749[(2)] = inst_31326);

(statearr_31363_32749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (10))){
var inst_31345 = (state_31349[(2)]);
var state_31349__$1 = state_31349;
var statearr_31364_32750 = state_31349__$1;
(statearr_31364_32750[(2)] = inst_31345);

(statearr_31364_32750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31350 === (8))){
var inst_31326 = (state_31349[(7)]);
var inst_31336 = cljs.core.next(inst_31326);
var inst_31326__$1 = inst_31336;
var state_31349__$1 = (function (){var statearr_31365 = state_31349;
(statearr_31365[(7)] = inst_31326__$1);

return statearr_31365;
})();
var statearr_31366_32751 = state_31349__$1;
(statearr_31366_32751[(2)] = null);

(statearr_31366_32751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__30218__auto__ = null;
var cljs$core$async$state_machine__30218__auto____0 = (function (){
var statearr_31367 = [null,null,null,null,null,null,null,null];
(statearr_31367[(0)] = cljs$core$async$state_machine__30218__auto__);

(statearr_31367[(1)] = (1));

return statearr_31367;
});
var cljs$core$async$state_machine__30218__auto____1 = (function (state_31349){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31349);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31368){if((e31368 instanceof Object)){
var ex__30221__auto__ = e31368;
var statearr_31369_32760 = state_31349;
(statearr_31369_32760[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31368;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32764 = state_31349;
state_31349 = G__32764;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$state_machine__30218__auto__ = function(state_31349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30218__auto____1.call(this,state_31349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30218__auto____0;
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30218__auto____1;
return cljs$core$async$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31370 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31370[(6)] = c__30529__auto__);

return statearr_31370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31371 = (function (ch,cs,meta31372){
this.ch = ch;
this.cs = cs;
this.meta31372 = meta31372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31373,meta31372__$1){
var self__ = this;
var _31373__$1 = this;
return (new cljs.core.async.t_cljs$core$async31371(self__.ch,self__.cs,meta31372__$1));
}));

(cljs.core.async.t_cljs$core$async31371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31373){
var self__ = this;
var _31373__$1 = this;
return self__.meta31372;
}));

(cljs.core.async.t_cljs$core$async31371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31371.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31371.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31371.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31371.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31372","meta31372",472923314,null)], null);
}));

(cljs.core.async.t_cljs$core$async31371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31371");

(cljs.core.async.t_cljs$core$async31371.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31371.
 */
cljs.core.async.__GT_t_cljs$core$async31371 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31371(ch__$1,cs__$1,meta31372){
return (new cljs.core.async.t_cljs$core$async31371(ch__$1,cs__$1,meta31372));
});

}

return (new cljs.core.async.t_cljs$core$async31371(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30529__auto___32793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_31508){
var state_val_31509 = (state_31508[(1)]);
if((state_val_31509 === (7))){
var inst_31504 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31510_32794 = state_31508__$1;
(statearr_31510_32794[(2)] = inst_31504);

(statearr_31510_32794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (20))){
var inst_31407 = (state_31508[(7)]);
var inst_31419 = cljs.core.first(inst_31407);
var inst_31420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31419,(0),null);
var inst_31421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31419,(1),null);
var state_31508__$1 = (function (){var statearr_31511 = state_31508;
(statearr_31511[(8)] = inst_31420);

return statearr_31511;
})();
if(cljs.core.truth_(inst_31421)){
var statearr_31512_32795 = state_31508__$1;
(statearr_31512_32795[(1)] = (22));

} else {
var statearr_31513_32796 = state_31508__$1;
(statearr_31513_32796[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (27))){
var inst_31456 = (state_31508[(9)]);
var inst_31376 = (state_31508[(10)]);
var inst_31451 = (state_31508[(11)]);
var inst_31449 = (state_31508[(12)]);
var inst_31456__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31449,inst_31451);
var inst_31457 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31456__$1,inst_31376,done);
var state_31508__$1 = (function (){var statearr_31514 = state_31508;
(statearr_31514[(9)] = inst_31456__$1);

return statearr_31514;
})();
if(cljs.core.truth_(inst_31457)){
var statearr_31515_32797 = state_31508__$1;
(statearr_31515_32797[(1)] = (30));

} else {
var statearr_31516_32798 = state_31508__$1;
(statearr_31516_32798[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (1))){
var state_31508__$1 = state_31508;
var statearr_31517_32799 = state_31508__$1;
(statearr_31517_32799[(2)] = null);

(statearr_31517_32799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (24))){
var inst_31407 = (state_31508[(7)]);
var inst_31426 = (state_31508[(2)]);
var inst_31427 = cljs.core.next(inst_31407);
var inst_31385 = inst_31427;
var inst_31386 = null;
var inst_31387 = (0);
var inst_31388 = (0);
var state_31508__$1 = (function (){var statearr_31518 = state_31508;
(statearr_31518[(13)] = inst_31387);

(statearr_31518[(14)] = inst_31388);

(statearr_31518[(15)] = inst_31386);

(statearr_31518[(16)] = inst_31385);

(statearr_31518[(17)] = inst_31426);

return statearr_31518;
})();
var statearr_31519_32800 = state_31508__$1;
(statearr_31519_32800[(2)] = null);

(statearr_31519_32800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (39))){
var state_31508__$1 = state_31508;
var statearr_31523_32801 = state_31508__$1;
(statearr_31523_32801[(2)] = null);

(statearr_31523_32801[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (4))){
var inst_31376 = (state_31508[(10)]);
var inst_31376__$1 = (state_31508[(2)]);
var inst_31377 = (inst_31376__$1 == null);
var state_31508__$1 = (function (){var statearr_31524 = state_31508;
(statearr_31524[(10)] = inst_31376__$1);

return statearr_31524;
})();
if(cljs.core.truth_(inst_31377)){
var statearr_31525_32802 = state_31508__$1;
(statearr_31525_32802[(1)] = (5));

} else {
var statearr_31526_32803 = state_31508__$1;
(statearr_31526_32803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (15))){
var inst_31387 = (state_31508[(13)]);
var inst_31388 = (state_31508[(14)]);
var inst_31386 = (state_31508[(15)]);
var inst_31385 = (state_31508[(16)]);
var inst_31403 = (state_31508[(2)]);
var inst_31404 = (inst_31388 + (1));
var tmp31520 = inst_31387;
var tmp31521 = inst_31386;
var tmp31522 = inst_31385;
var inst_31385__$1 = tmp31522;
var inst_31386__$1 = tmp31521;
var inst_31387__$1 = tmp31520;
var inst_31388__$1 = inst_31404;
var state_31508__$1 = (function (){var statearr_31527 = state_31508;
(statearr_31527[(13)] = inst_31387__$1);

(statearr_31527[(14)] = inst_31388__$1);

(statearr_31527[(15)] = inst_31386__$1);

(statearr_31527[(16)] = inst_31385__$1);

(statearr_31527[(18)] = inst_31403);

return statearr_31527;
})();
var statearr_31528_32804 = state_31508__$1;
(statearr_31528_32804[(2)] = null);

(statearr_31528_32804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (21))){
var inst_31430 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31532_32805 = state_31508__$1;
(statearr_31532_32805[(2)] = inst_31430);

(statearr_31532_32805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (31))){
var inst_31456 = (state_31508[(9)]);
var inst_31460 = done(null);
var inst_31461 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31456);
var state_31508__$1 = (function (){var statearr_31533 = state_31508;
(statearr_31533[(19)] = inst_31460);

return statearr_31533;
})();
var statearr_31534_32807 = state_31508__$1;
(statearr_31534_32807[(2)] = inst_31461);

(statearr_31534_32807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (32))){
var inst_31450 = (state_31508[(20)]);
var inst_31448 = (state_31508[(21)]);
var inst_31451 = (state_31508[(11)]);
var inst_31449 = (state_31508[(12)]);
var inst_31463 = (state_31508[(2)]);
var inst_31464 = (inst_31451 + (1));
var tmp31529 = inst_31450;
var tmp31530 = inst_31448;
var tmp31531 = inst_31449;
var inst_31448__$1 = tmp31530;
var inst_31449__$1 = tmp31531;
var inst_31450__$1 = tmp31529;
var inst_31451__$1 = inst_31464;
var state_31508__$1 = (function (){var statearr_31535 = state_31508;
(statearr_31535[(20)] = inst_31450__$1);

(statearr_31535[(21)] = inst_31448__$1);

(statearr_31535[(11)] = inst_31451__$1);

(statearr_31535[(22)] = inst_31463);

(statearr_31535[(12)] = inst_31449__$1);

return statearr_31535;
})();
var statearr_31536_32809 = state_31508__$1;
(statearr_31536_32809[(2)] = null);

(statearr_31536_32809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (40))){
var inst_31476 = (state_31508[(23)]);
var inst_31480 = done(null);
var inst_31481 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31476);
var state_31508__$1 = (function (){var statearr_31537 = state_31508;
(statearr_31537[(24)] = inst_31480);

return statearr_31537;
})();
var statearr_31538_32814 = state_31508__$1;
(statearr_31538_32814[(2)] = inst_31481);

(statearr_31538_32814[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (33))){
var inst_31467 = (state_31508[(25)]);
var inst_31469 = cljs.core.chunked_seq_QMARK_(inst_31467);
var state_31508__$1 = state_31508;
if(inst_31469){
var statearr_31539_32815 = state_31508__$1;
(statearr_31539_32815[(1)] = (36));

} else {
var statearr_31540_32816 = state_31508__$1;
(statearr_31540_32816[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (13))){
var inst_31397 = (state_31508[(26)]);
var inst_31400 = cljs.core.async.close_BANG_(inst_31397);
var state_31508__$1 = state_31508;
var statearr_31541_32817 = state_31508__$1;
(statearr_31541_32817[(2)] = inst_31400);

(statearr_31541_32817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (22))){
var inst_31420 = (state_31508[(8)]);
var inst_31423 = cljs.core.async.close_BANG_(inst_31420);
var state_31508__$1 = state_31508;
var statearr_31542_32818 = state_31508__$1;
(statearr_31542_32818[(2)] = inst_31423);

(statearr_31542_32818[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (36))){
var inst_31467 = (state_31508[(25)]);
var inst_31471 = cljs.core.chunk_first(inst_31467);
var inst_31472 = cljs.core.chunk_rest(inst_31467);
var inst_31473 = cljs.core.count(inst_31471);
var inst_31448 = inst_31472;
var inst_31449 = inst_31471;
var inst_31450 = inst_31473;
var inst_31451 = (0);
var state_31508__$1 = (function (){var statearr_31543 = state_31508;
(statearr_31543[(20)] = inst_31450);

(statearr_31543[(21)] = inst_31448);

(statearr_31543[(11)] = inst_31451);

(statearr_31543[(12)] = inst_31449);

return statearr_31543;
})();
var statearr_31544_32819 = state_31508__$1;
(statearr_31544_32819[(2)] = null);

(statearr_31544_32819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (41))){
var inst_31467 = (state_31508[(25)]);
var inst_31483 = (state_31508[(2)]);
var inst_31484 = cljs.core.next(inst_31467);
var inst_31448 = inst_31484;
var inst_31449 = null;
var inst_31450 = (0);
var inst_31451 = (0);
var state_31508__$1 = (function (){var statearr_31545 = state_31508;
(statearr_31545[(20)] = inst_31450);

(statearr_31545[(21)] = inst_31448);

(statearr_31545[(27)] = inst_31483);

(statearr_31545[(11)] = inst_31451);

(statearr_31545[(12)] = inst_31449);

return statearr_31545;
})();
var statearr_31546_32820 = state_31508__$1;
(statearr_31546_32820[(2)] = null);

(statearr_31546_32820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (43))){
var state_31508__$1 = state_31508;
var statearr_31547_32821 = state_31508__$1;
(statearr_31547_32821[(2)] = null);

(statearr_31547_32821[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (29))){
var inst_31492 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31548_32822 = state_31508__$1;
(statearr_31548_32822[(2)] = inst_31492);

(statearr_31548_32822[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (44))){
var inst_31501 = (state_31508[(2)]);
var state_31508__$1 = (function (){var statearr_31549 = state_31508;
(statearr_31549[(28)] = inst_31501);

return statearr_31549;
})();
var statearr_31550_32823 = state_31508__$1;
(statearr_31550_32823[(2)] = null);

(statearr_31550_32823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (6))){
var inst_31440 = (state_31508[(29)]);
var inst_31439 = cljs.core.deref(cs);
var inst_31440__$1 = cljs.core.keys(inst_31439);
var inst_31441 = cljs.core.count(inst_31440__$1);
var inst_31442 = cljs.core.reset_BANG_(dctr,inst_31441);
var inst_31447 = cljs.core.seq(inst_31440__$1);
var inst_31448 = inst_31447;
var inst_31449 = null;
var inst_31450 = (0);
var inst_31451 = (0);
var state_31508__$1 = (function (){var statearr_31551 = state_31508;
(statearr_31551[(20)] = inst_31450);

(statearr_31551[(21)] = inst_31448);

(statearr_31551[(29)] = inst_31440__$1);

(statearr_31551[(30)] = inst_31442);

(statearr_31551[(11)] = inst_31451);

(statearr_31551[(12)] = inst_31449);

return statearr_31551;
})();
var statearr_31552_32824 = state_31508__$1;
(statearr_31552_32824[(2)] = null);

(statearr_31552_32824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (28))){
var inst_31448 = (state_31508[(21)]);
var inst_31467 = (state_31508[(25)]);
var inst_31467__$1 = cljs.core.seq(inst_31448);
var state_31508__$1 = (function (){var statearr_31553 = state_31508;
(statearr_31553[(25)] = inst_31467__$1);

return statearr_31553;
})();
if(inst_31467__$1){
var statearr_31554_32825 = state_31508__$1;
(statearr_31554_32825[(1)] = (33));

} else {
var statearr_31555_32826 = state_31508__$1;
(statearr_31555_32826[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (25))){
var inst_31450 = (state_31508[(20)]);
var inst_31451 = (state_31508[(11)]);
var inst_31453 = (inst_31451 < inst_31450);
var inst_31454 = inst_31453;
var state_31508__$1 = state_31508;
if(cljs.core.truth_(inst_31454)){
var statearr_31556_32827 = state_31508__$1;
(statearr_31556_32827[(1)] = (27));

} else {
var statearr_31557_32828 = state_31508__$1;
(statearr_31557_32828[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (34))){
var state_31508__$1 = state_31508;
var statearr_31558_32829 = state_31508__$1;
(statearr_31558_32829[(2)] = null);

(statearr_31558_32829[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (17))){
var state_31508__$1 = state_31508;
var statearr_31559_32830 = state_31508__$1;
(statearr_31559_32830[(2)] = null);

(statearr_31559_32830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (3))){
var inst_31506 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31508__$1,inst_31506);
} else {
if((state_val_31509 === (12))){
var inst_31435 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31560_32831 = state_31508__$1;
(statearr_31560_32831[(2)] = inst_31435);

(statearr_31560_32831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (2))){
var state_31508__$1 = state_31508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31508__$1,(4),ch);
} else {
if((state_val_31509 === (23))){
var state_31508__$1 = state_31508;
var statearr_31561_32832 = state_31508__$1;
(statearr_31561_32832[(2)] = null);

(statearr_31561_32832[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (35))){
var inst_31490 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31562_32833 = state_31508__$1;
(statearr_31562_32833[(2)] = inst_31490);

(statearr_31562_32833[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (19))){
var inst_31407 = (state_31508[(7)]);
var inst_31411 = cljs.core.chunk_first(inst_31407);
var inst_31412 = cljs.core.chunk_rest(inst_31407);
var inst_31413 = cljs.core.count(inst_31411);
var inst_31385 = inst_31412;
var inst_31386 = inst_31411;
var inst_31387 = inst_31413;
var inst_31388 = (0);
var state_31508__$1 = (function (){var statearr_31563 = state_31508;
(statearr_31563[(13)] = inst_31387);

(statearr_31563[(14)] = inst_31388);

(statearr_31563[(15)] = inst_31386);

(statearr_31563[(16)] = inst_31385);

return statearr_31563;
})();
var statearr_31564_32838 = state_31508__$1;
(statearr_31564_32838[(2)] = null);

(statearr_31564_32838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (11))){
var inst_31407 = (state_31508[(7)]);
var inst_31385 = (state_31508[(16)]);
var inst_31407__$1 = cljs.core.seq(inst_31385);
var state_31508__$1 = (function (){var statearr_31565 = state_31508;
(statearr_31565[(7)] = inst_31407__$1);

return statearr_31565;
})();
if(inst_31407__$1){
var statearr_31566_32841 = state_31508__$1;
(statearr_31566_32841[(1)] = (16));

} else {
var statearr_31567_32842 = state_31508__$1;
(statearr_31567_32842[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (9))){
var inst_31437 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31568_32844 = state_31508__$1;
(statearr_31568_32844[(2)] = inst_31437);

(statearr_31568_32844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (5))){
var inst_31383 = cljs.core.deref(cs);
var inst_31384 = cljs.core.seq(inst_31383);
var inst_31385 = inst_31384;
var inst_31386 = null;
var inst_31387 = (0);
var inst_31388 = (0);
var state_31508__$1 = (function (){var statearr_31569 = state_31508;
(statearr_31569[(13)] = inst_31387);

(statearr_31569[(14)] = inst_31388);

(statearr_31569[(15)] = inst_31386);

(statearr_31569[(16)] = inst_31385);

return statearr_31569;
})();
var statearr_31570_32846 = state_31508__$1;
(statearr_31570_32846[(2)] = null);

(statearr_31570_32846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (14))){
var state_31508__$1 = state_31508;
var statearr_31571_32847 = state_31508__$1;
(statearr_31571_32847[(2)] = null);

(statearr_31571_32847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (45))){
var inst_31498 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31572_32848 = state_31508__$1;
(statearr_31572_32848[(2)] = inst_31498);

(statearr_31572_32848[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (26))){
var inst_31440 = (state_31508[(29)]);
var inst_31494 = (state_31508[(2)]);
var inst_31495 = cljs.core.seq(inst_31440);
var state_31508__$1 = (function (){var statearr_31573 = state_31508;
(statearr_31573[(31)] = inst_31494);

return statearr_31573;
})();
if(inst_31495){
var statearr_31574_32849 = state_31508__$1;
(statearr_31574_32849[(1)] = (42));

} else {
var statearr_31575_32850 = state_31508__$1;
(statearr_31575_32850[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (16))){
var inst_31407 = (state_31508[(7)]);
var inst_31409 = cljs.core.chunked_seq_QMARK_(inst_31407);
var state_31508__$1 = state_31508;
if(inst_31409){
var statearr_31576_32851 = state_31508__$1;
(statearr_31576_32851[(1)] = (19));

} else {
var statearr_31577_32852 = state_31508__$1;
(statearr_31577_32852[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (38))){
var inst_31487 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31578_32853 = state_31508__$1;
(statearr_31578_32853[(2)] = inst_31487);

(statearr_31578_32853[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (30))){
var state_31508__$1 = state_31508;
var statearr_31579_32854 = state_31508__$1;
(statearr_31579_32854[(2)] = null);

(statearr_31579_32854[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (10))){
var inst_31388 = (state_31508[(14)]);
var inst_31386 = (state_31508[(15)]);
var inst_31396 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31386,inst_31388);
var inst_31397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31396,(0),null);
var inst_31398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31396,(1),null);
var state_31508__$1 = (function (){var statearr_31580 = state_31508;
(statearr_31580[(26)] = inst_31397);

return statearr_31580;
})();
if(cljs.core.truth_(inst_31398)){
var statearr_31581_32855 = state_31508__$1;
(statearr_31581_32855[(1)] = (13));

} else {
var statearr_31582_32856 = state_31508__$1;
(statearr_31582_32856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (18))){
var inst_31433 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31583_32857 = state_31508__$1;
(statearr_31583_32857[(2)] = inst_31433);

(statearr_31583_32857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (42))){
var state_31508__$1 = state_31508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31508__$1,(45),dchan);
} else {
if((state_val_31509 === (37))){
var inst_31476 = (state_31508[(23)]);
var inst_31376 = (state_31508[(10)]);
var inst_31467 = (state_31508[(25)]);
var inst_31476__$1 = cljs.core.first(inst_31467);
var inst_31477 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31476__$1,inst_31376,done);
var state_31508__$1 = (function (){var statearr_31584 = state_31508;
(statearr_31584[(23)] = inst_31476__$1);

return statearr_31584;
})();
if(cljs.core.truth_(inst_31477)){
var statearr_31585_32858 = state_31508__$1;
(statearr_31585_32858[(1)] = (39));

} else {
var statearr_31586_32859 = state_31508__$1;
(statearr_31586_32859[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (8))){
var inst_31387 = (state_31508[(13)]);
var inst_31388 = (state_31508[(14)]);
var inst_31390 = (inst_31388 < inst_31387);
var inst_31391 = inst_31390;
var state_31508__$1 = state_31508;
if(cljs.core.truth_(inst_31391)){
var statearr_31587_32860 = state_31508__$1;
(statearr_31587_32860[(1)] = (10));

} else {
var statearr_31588_32861 = state_31508__$1;
(statearr_31588_32861[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__30218__auto__ = null;
var cljs$core$async$mult_$_state_machine__30218__auto____0 = (function (){
var statearr_31589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31589[(0)] = cljs$core$async$mult_$_state_machine__30218__auto__);

(statearr_31589[(1)] = (1));

return statearr_31589;
});
var cljs$core$async$mult_$_state_machine__30218__auto____1 = (function (state_31508){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31508);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31590){if((e31590 instanceof Object)){
var ex__30221__auto__ = e31590;
var statearr_31591_32862 = state_31508;
(statearr_31591_32862[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31590;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32864 = state_31508;
state_31508 = G__32864;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30218__auto__ = function(state_31508){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30218__auto____1.call(this,state_31508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30218__auto____0;
cljs$core$async$mult_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30218__auto____1;
return cljs$core$async$mult_$_state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31592 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31592[(6)] = c__30529__auto___32793);

return statearr_31592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31594 = arguments.length;
switch (G__31594) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32870 = arguments.length;
var i__4790__auto___32871 = (0);
while(true){
if((i__4790__auto___32871 < len__4789__auto___32870)){
args__4795__auto__.push((arguments[i__4790__auto___32871]));

var G__32872 = (i__4790__auto___32871 + (1));
i__4790__auto___32871 = G__32872;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31599){
var map__31600 = p__31599;
var map__31600__$1 = (((((!((map__31600 == null))))?(((((map__31600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31600):map__31600);
var opts = map__31600__$1;
var statearr_31602_32873 = state;
(statearr_31602_32873[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31603_32874 = state;
(statearr_31603_32874[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31604_32875 = state;
(statearr_31604_32875[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31595){
var G__31596 = cljs.core.first(seq31595);
var seq31595__$1 = cljs.core.next(seq31595);
var G__31597 = cljs.core.first(seq31595__$1);
var seq31595__$2 = cljs.core.next(seq31595__$1);
var G__31598 = cljs.core.first(seq31595__$2);
var seq31595__$3 = cljs.core.next(seq31595__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31596,G__31597,G__31598,seq31595__$3);
}));

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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31605 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31606){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31606 = meta31606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31607,meta31606__$1){
var self__ = this;
var _31607__$1 = this;
return (new cljs.core.async.t_cljs$core$async31605(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31606__$1));
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31607){
var self__ = this;
var _31607__$1 = this;
return self__.meta31606;
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31605.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31606","meta31606",51141772,null)], null);
}));

(cljs.core.async.t_cljs$core$async31605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31605");

(cljs.core.async.t_cljs$core$async31605.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31605.
 */
cljs.core.async.__GT_t_cljs$core$async31605 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31605(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31606){
return (new cljs.core.async.t_cljs$core$async31605(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31606));
});

}

return (new cljs.core.async.t_cljs$core$async31605(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30529__auto___32900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_31709){
var state_val_31710 = (state_31709[(1)]);
if((state_val_31710 === (7))){
var inst_31624 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31711_32901 = state_31709__$1;
(statearr_31711_32901[(2)] = inst_31624);

(statearr_31711_32901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (20))){
var inst_31636 = (state_31709[(7)]);
var state_31709__$1 = state_31709;
var statearr_31712_32904 = state_31709__$1;
(statearr_31712_32904[(2)] = inst_31636);

(statearr_31712_32904[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (27))){
var state_31709__$1 = state_31709;
var statearr_31713_32905 = state_31709__$1;
(statearr_31713_32905[(2)] = null);

(statearr_31713_32905[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (1))){
var inst_31611 = (state_31709[(8)]);
var inst_31611__$1 = calc_state();
var inst_31613 = (inst_31611__$1 == null);
var inst_31614 = cljs.core.not(inst_31613);
var state_31709__$1 = (function (){var statearr_31714 = state_31709;
(statearr_31714[(8)] = inst_31611__$1);

return statearr_31714;
})();
if(inst_31614){
var statearr_31715_32906 = state_31709__$1;
(statearr_31715_32906[(1)] = (2));

} else {
var statearr_31716_32907 = state_31709__$1;
(statearr_31716_32907[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (24))){
var inst_31669 = (state_31709[(9)]);
var inst_31660 = (state_31709[(10)]);
var inst_31683 = (state_31709[(11)]);
var inst_31683__$1 = (inst_31660.cljs$core$IFn$_invoke$arity$1 ? inst_31660.cljs$core$IFn$_invoke$arity$1(inst_31669) : inst_31660.call(null,inst_31669));
var state_31709__$1 = (function (){var statearr_31717 = state_31709;
(statearr_31717[(11)] = inst_31683__$1);

return statearr_31717;
})();
if(cljs.core.truth_(inst_31683__$1)){
var statearr_31718_32911 = state_31709__$1;
(statearr_31718_32911[(1)] = (29));

} else {
var statearr_31719_32912 = state_31709__$1;
(statearr_31719_32912[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (4))){
var inst_31627 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31627)){
var statearr_31720_32913 = state_31709__$1;
(statearr_31720_32913[(1)] = (8));

} else {
var statearr_31721_32914 = state_31709__$1;
(statearr_31721_32914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (15))){
var inst_31654 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31654)){
var statearr_31722_32915 = state_31709__$1;
(statearr_31722_32915[(1)] = (19));

} else {
var statearr_31723_32916 = state_31709__$1;
(statearr_31723_32916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (21))){
var inst_31659 = (state_31709[(12)]);
var inst_31659__$1 = (state_31709[(2)]);
var inst_31660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31659__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31659__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31659__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31709__$1 = (function (){var statearr_31724 = state_31709;
(statearr_31724[(12)] = inst_31659__$1);

(statearr_31724[(13)] = inst_31661);

(statearr_31724[(10)] = inst_31660);

return statearr_31724;
})();
return cljs.core.async.ioc_alts_BANG_(state_31709__$1,(22),inst_31662);
} else {
if((state_val_31710 === (31))){
var inst_31691 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31691)){
var statearr_31725_32918 = state_31709__$1;
(statearr_31725_32918[(1)] = (32));

} else {
var statearr_31726_32919 = state_31709__$1;
(statearr_31726_32919[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (32))){
var inst_31668 = (state_31709[(14)]);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31709__$1,(35),out,inst_31668);
} else {
if((state_val_31710 === (33))){
var inst_31659 = (state_31709[(12)]);
var inst_31636 = inst_31659;
var state_31709__$1 = (function (){var statearr_31727 = state_31709;
(statearr_31727[(7)] = inst_31636);

return statearr_31727;
})();
var statearr_31728_32922 = state_31709__$1;
(statearr_31728_32922[(2)] = null);

(statearr_31728_32922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (13))){
var inst_31636 = (state_31709[(7)]);
var inst_31643 = inst_31636.cljs$lang$protocol_mask$partition0$;
var inst_31644 = (inst_31643 & (64));
var inst_31645 = inst_31636.cljs$core$ISeq$;
var inst_31646 = (cljs.core.PROTOCOL_SENTINEL === inst_31645);
var inst_31647 = ((inst_31644) || (inst_31646));
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31647)){
var statearr_31729_32923 = state_31709__$1;
(statearr_31729_32923[(1)] = (16));

} else {
var statearr_31730_32924 = state_31709__$1;
(statearr_31730_32924[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (22))){
var inst_31668 = (state_31709[(14)]);
var inst_31669 = (state_31709[(9)]);
var inst_31667 = (state_31709[(2)]);
var inst_31668__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31667,(0),null);
var inst_31669__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31667,(1),null);
var inst_31670 = (inst_31668__$1 == null);
var inst_31671 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31669__$1,change);
var inst_31672 = ((inst_31670) || (inst_31671));
var state_31709__$1 = (function (){var statearr_31731 = state_31709;
(statearr_31731[(14)] = inst_31668__$1);

(statearr_31731[(9)] = inst_31669__$1);

return statearr_31731;
})();
if(cljs.core.truth_(inst_31672)){
var statearr_31732_32925 = state_31709__$1;
(statearr_31732_32925[(1)] = (23));

} else {
var statearr_31733_32926 = state_31709__$1;
(statearr_31733_32926[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (36))){
var inst_31659 = (state_31709[(12)]);
var inst_31636 = inst_31659;
var state_31709__$1 = (function (){var statearr_31734 = state_31709;
(statearr_31734[(7)] = inst_31636);

return statearr_31734;
})();
var statearr_31735_32927 = state_31709__$1;
(statearr_31735_32927[(2)] = null);

(statearr_31735_32927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (29))){
var inst_31683 = (state_31709[(11)]);
var state_31709__$1 = state_31709;
var statearr_31736_32928 = state_31709__$1;
(statearr_31736_32928[(2)] = inst_31683);

(statearr_31736_32928[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (6))){
var state_31709__$1 = state_31709;
var statearr_31737_32929 = state_31709__$1;
(statearr_31737_32929[(2)] = false);

(statearr_31737_32929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (28))){
var inst_31679 = (state_31709[(2)]);
var inst_31680 = calc_state();
var inst_31636 = inst_31680;
var state_31709__$1 = (function (){var statearr_31738 = state_31709;
(statearr_31738[(15)] = inst_31679);

(statearr_31738[(7)] = inst_31636);

return statearr_31738;
})();
var statearr_31739_32930 = state_31709__$1;
(statearr_31739_32930[(2)] = null);

(statearr_31739_32930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (25))){
var inst_31705 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31740_32931 = state_31709__$1;
(statearr_31740_32931[(2)] = inst_31705);

(statearr_31740_32931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (34))){
var inst_31703 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31741_32932 = state_31709__$1;
(statearr_31741_32932[(2)] = inst_31703);

(statearr_31741_32932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (17))){
var state_31709__$1 = state_31709;
var statearr_31742_32933 = state_31709__$1;
(statearr_31742_32933[(2)] = false);

(statearr_31742_32933[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (3))){
var state_31709__$1 = state_31709;
var statearr_31743_32934 = state_31709__$1;
(statearr_31743_32934[(2)] = false);

(statearr_31743_32934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (12))){
var inst_31707 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31709__$1,inst_31707);
} else {
if((state_val_31710 === (2))){
var inst_31611 = (state_31709[(8)]);
var inst_31616 = inst_31611.cljs$lang$protocol_mask$partition0$;
var inst_31617 = (inst_31616 & (64));
var inst_31618 = inst_31611.cljs$core$ISeq$;
var inst_31619 = (cljs.core.PROTOCOL_SENTINEL === inst_31618);
var inst_31620 = ((inst_31617) || (inst_31619));
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31620)){
var statearr_31744_32935 = state_31709__$1;
(statearr_31744_32935[(1)] = (5));

} else {
var statearr_31745_32936 = state_31709__$1;
(statearr_31745_32936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (23))){
var inst_31668 = (state_31709[(14)]);
var inst_31674 = (inst_31668 == null);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31674)){
var statearr_31746_32937 = state_31709__$1;
(statearr_31746_32937[(1)] = (26));

} else {
var statearr_31747_32938 = state_31709__$1;
(statearr_31747_32938[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (35))){
var inst_31694 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31694)){
var statearr_31748_32939 = state_31709__$1;
(statearr_31748_32939[(1)] = (36));

} else {
var statearr_31749_32944 = state_31709__$1;
(statearr_31749_32944[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (19))){
var inst_31636 = (state_31709[(7)]);
var inst_31656 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31636);
var state_31709__$1 = state_31709;
var statearr_31750_32945 = state_31709__$1;
(statearr_31750_32945[(2)] = inst_31656);

(statearr_31750_32945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (11))){
var inst_31636 = (state_31709[(7)]);
var inst_31640 = (inst_31636 == null);
var inst_31641 = cljs.core.not(inst_31640);
var state_31709__$1 = state_31709;
if(inst_31641){
var statearr_31751_32946 = state_31709__$1;
(statearr_31751_32946[(1)] = (13));

} else {
var statearr_31752_32947 = state_31709__$1;
(statearr_31752_32947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (9))){
var inst_31611 = (state_31709[(8)]);
var state_31709__$1 = state_31709;
var statearr_31753_32948 = state_31709__$1;
(statearr_31753_32948[(2)] = inst_31611);

(statearr_31753_32948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (5))){
var state_31709__$1 = state_31709;
var statearr_31754_32949 = state_31709__$1;
(statearr_31754_32949[(2)] = true);

(statearr_31754_32949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (14))){
var state_31709__$1 = state_31709;
var statearr_31755_32950 = state_31709__$1;
(statearr_31755_32950[(2)] = false);

(statearr_31755_32950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (26))){
var inst_31669 = (state_31709[(9)]);
var inst_31676 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31669);
var state_31709__$1 = state_31709;
var statearr_31756_32951 = state_31709__$1;
(statearr_31756_32951[(2)] = inst_31676);

(statearr_31756_32951[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (16))){
var state_31709__$1 = state_31709;
var statearr_31757_32952 = state_31709__$1;
(statearr_31757_32952[(2)] = true);

(statearr_31757_32952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (38))){
var inst_31699 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31758_32953 = state_31709__$1;
(statearr_31758_32953[(2)] = inst_31699);

(statearr_31758_32953[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (30))){
var inst_31669 = (state_31709[(9)]);
var inst_31661 = (state_31709[(13)]);
var inst_31660 = (state_31709[(10)]);
var inst_31686 = cljs.core.empty_QMARK_(inst_31660);
var inst_31687 = (inst_31661.cljs$core$IFn$_invoke$arity$1 ? inst_31661.cljs$core$IFn$_invoke$arity$1(inst_31669) : inst_31661.call(null,inst_31669));
var inst_31688 = cljs.core.not(inst_31687);
var inst_31689 = ((inst_31686) && (inst_31688));
var state_31709__$1 = state_31709;
var statearr_31759_32954 = state_31709__$1;
(statearr_31759_32954[(2)] = inst_31689);

(statearr_31759_32954[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (10))){
var inst_31611 = (state_31709[(8)]);
var inst_31632 = (state_31709[(2)]);
var inst_31633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31632,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31632,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31632,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31636 = inst_31611;
var state_31709__$1 = (function (){var statearr_31760 = state_31709;
(statearr_31760[(7)] = inst_31636);

(statearr_31760[(16)] = inst_31635);

(statearr_31760[(17)] = inst_31634);

(statearr_31760[(18)] = inst_31633);

return statearr_31760;
})();
var statearr_31761_32959 = state_31709__$1;
(statearr_31761_32959[(2)] = null);

(statearr_31761_32959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (18))){
var inst_31651 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31762_32960 = state_31709__$1;
(statearr_31762_32960[(2)] = inst_31651);

(statearr_31762_32960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (37))){
var state_31709__$1 = state_31709;
var statearr_31763_32962 = state_31709__$1;
(statearr_31763_32962[(2)] = null);

(statearr_31763_32962[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (8))){
var inst_31611 = (state_31709[(8)]);
var inst_31629 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31611);
var state_31709__$1 = state_31709;
var statearr_31764_32963 = state_31709__$1;
(statearr_31764_32963[(2)] = inst_31629);

(statearr_31764_32963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__30218__auto__ = null;
var cljs$core$async$mix_$_state_machine__30218__auto____0 = (function (){
var statearr_31765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31765[(0)] = cljs$core$async$mix_$_state_machine__30218__auto__);

(statearr_31765[(1)] = (1));

return statearr_31765;
});
var cljs$core$async$mix_$_state_machine__30218__auto____1 = (function (state_31709){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31709);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31766){if((e31766 instanceof Object)){
var ex__30221__auto__ = e31766;
var statearr_31767_32964 = state_31709;
(statearr_31767_32964[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32965 = state_31709;
state_31709 = G__32965;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30218__auto__ = function(state_31709){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30218__auto____1.call(this,state_31709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30218__auto____0;
cljs$core$async$mix_$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30218__auto____1;
return cljs$core$async$mix_$_state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31768 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31768[(6)] = c__30529__auto___32900);

return statearr_31768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31770 = arguments.length;
switch (G__31770) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__31773 = arguments.length;
switch (G__31773) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31771_SHARP_){
if(cljs.core.truth_((p1__31771_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31771_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31771_SHARP_.call(null,topic)))){
return p1__31771_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31771_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31774 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31775){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31775 = meta31775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31776,meta31775__$1){
var self__ = this;
var _31776__$1 = this;
return (new cljs.core.async.t_cljs$core$async31774(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31775__$1));
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31776){
var self__ = this;
var _31776__$1 = this;
return self__.meta31775;
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31775","meta31775",739762635,null)], null);
}));

(cljs.core.async.t_cljs$core$async31774.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31774");

(cljs.core.async.t_cljs$core$async31774.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31774");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31774.
 */
cljs.core.async.__GT_t_cljs$core$async31774 = (function cljs$core$async$__GT_t_cljs$core$async31774(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31775){
return (new cljs.core.async.t_cljs$core$async31774(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31775));
});

}

return (new cljs.core.async.t_cljs$core$async31774(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30529__auto___32981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_31848){
var state_val_31849 = (state_31848[(1)]);
if((state_val_31849 === (7))){
var inst_31844 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31850_32982 = state_31848__$1;
(statearr_31850_32982[(2)] = inst_31844);

(statearr_31850_32982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (20))){
var state_31848__$1 = state_31848;
var statearr_31851_32983 = state_31848__$1;
(statearr_31851_32983[(2)] = null);

(statearr_31851_32983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (1))){
var state_31848__$1 = state_31848;
var statearr_31852_32984 = state_31848__$1;
(statearr_31852_32984[(2)] = null);

(statearr_31852_32984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (24))){
var inst_31827 = (state_31848[(7)]);
var inst_31836 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31827);
var state_31848__$1 = state_31848;
var statearr_31853_32986 = state_31848__$1;
(statearr_31853_32986[(2)] = inst_31836);

(statearr_31853_32986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (4))){
var inst_31779 = (state_31848[(8)]);
var inst_31779__$1 = (state_31848[(2)]);
var inst_31780 = (inst_31779__$1 == null);
var state_31848__$1 = (function (){var statearr_31854 = state_31848;
(statearr_31854[(8)] = inst_31779__$1);

return statearr_31854;
})();
if(cljs.core.truth_(inst_31780)){
var statearr_31855_32987 = state_31848__$1;
(statearr_31855_32987[(1)] = (5));

} else {
var statearr_31856_32988 = state_31848__$1;
(statearr_31856_32988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (15))){
var inst_31821 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31857_32989 = state_31848__$1;
(statearr_31857_32989[(2)] = inst_31821);

(statearr_31857_32989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (21))){
var inst_31841 = (state_31848[(2)]);
var state_31848__$1 = (function (){var statearr_31858 = state_31848;
(statearr_31858[(9)] = inst_31841);

return statearr_31858;
})();
var statearr_31859_32990 = state_31848__$1;
(statearr_31859_32990[(2)] = null);

(statearr_31859_32990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (13))){
var inst_31803 = (state_31848[(10)]);
var inst_31805 = cljs.core.chunked_seq_QMARK_(inst_31803);
var state_31848__$1 = state_31848;
if(inst_31805){
var statearr_31860_32992 = state_31848__$1;
(statearr_31860_32992[(1)] = (16));

} else {
var statearr_31861_32993 = state_31848__$1;
(statearr_31861_32993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (22))){
var inst_31833 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
if(cljs.core.truth_(inst_31833)){
var statearr_31862_32994 = state_31848__$1;
(statearr_31862_32994[(1)] = (23));

} else {
var statearr_31863_32995 = state_31848__$1;
(statearr_31863_32995[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (6))){
var inst_31829 = (state_31848[(11)]);
var inst_31779 = (state_31848[(8)]);
var inst_31827 = (state_31848[(7)]);
var inst_31827__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31779) : topic_fn.call(null,inst_31779));
var inst_31828 = cljs.core.deref(mults);
var inst_31829__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31828,inst_31827__$1);
var state_31848__$1 = (function (){var statearr_31864 = state_31848;
(statearr_31864[(11)] = inst_31829__$1);

(statearr_31864[(7)] = inst_31827__$1);

return statearr_31864;
})();
if(cljs.core.truth_(inst_31829__$1)){
var statearr_31865_32996 = state_31848__$1;
(statearr_31865_32996[(1)] = (19));

} else {
var statearr_31866_32997 = state_31848__$1;
(statearr_31866_32997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (25))){
var inst_31838 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31867_32999 = state_31848__$1;
(statearr_31867_32999[(2)] = inst_31838);

(statearr_31867_32999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (17))){
var inst_31803 = (state_31848[(10)]);
var inst_31812 = cljs.core.first(inst_31803);
var inst_31813 = cljs.core.async.muxch_STAR_(inst_31812);
var inst_31814 = cljs.core.async.close_BANG_(inst_31813);
var inst_31815 = cljs.core.next(inst_31803);
var inst_31789 = inst_31815;
var inst_31790 = null;
var inst_31791 = (0);
var inst_31792 = (0);
var state_31848__$1 = (function (){var statearr_31868 = state_31848;
(statearr_31868[(12)] = inst_31789);

(statearr_31868[(13)] = inst_31791);

(statearr_31868[(14)] = inst_31814);

(statearr_31868[(15)] = inst_31792);

(statearr_31868[(16)] = inst_31790);

return statearr_31868;
})();
var statearr_31869_33000 = state_31848__$1;
(statearr_31869_33000[(2)] = null);

(statearr_31869_33000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (3))){
var inst_31846 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31848__$1,inst_31846);
} else {
if((state_val_31849 === (12))){
var inst_31823 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31870_33001 = state_31848__$1;
(statearr_31870_33001[(2)] = inst_31823);

(statearr_31870_33001[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (2))){
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31848__$1,(4),ch);
} else {
if((state_val_31849 === (23))){
var state_31848__$1 = state_31848;
var statearr_31871_33003 = state_31848__$1;
(statearr_31871_33003[(2)] = null);

(statearr_31871_33003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (19))){
var inst_31829 = (state_31848[(11)]);
var inst_31779 = (state_31848[(8)]);
var inst_31831 = cljs.core.async.muxch_STAR_(inst_31829);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31848__$1,(22),inst_31831,inst_31779);
} else {
if((state_val_31849 === (11))){
var inst_31789 = (state_31848[(12)]);
var inst_31803 = (state_31848[(10)]);
var inst_31803__$1 = cljs.core.seq(inst_31789);
var state_31848__$1 = (function (){var statearr_31872 = state_31848;
(statearr_31872[(10)] = inst_31803__$1);

return statearr_31872;
})();
if(inst_31803__$1){
var statearr_31873_33008 = state_31848__$1;
(statearr_31873_33008[(1)] = (13));

} else {
var statearr_31874_33009 = state_31848__$1;
(statearr_31874_33009[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (9))){
var inst_31825 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31875_33011 = state_31848__$1;
(statearr_31875_33011[(2)] = inst_31825);

(statearr_31875_33011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (5))){
var inst_31786 = cljs.core.deref(mults);
var inst_31787 = cljs.core.vals(inst_31786);
var inst_31788 = cljs.core.seq(inst_31787);
var inst_31789 = inst_31788;
var inst_31790 = null;
var inst_31791 = (0);
var inst_31792 = (0);
var state_31848__$1 = (function (){var statearr_31876 = state_31848;
(statearr_31876[(12)] = inst_31789);

(statearr_31876[(13)] = inst_31791);

(statearr_31876[(15)] = inst_31792);

(statearr_31876[(16)] = inst_31790);

return statearr_31876;
})();
var statearr_31877_33012 = state_31848__$1;
(statearr_31877_33012[(2)] = null);

(statearr_31877_33012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (14))){
var state_31848__$1 = state_31848;
var statearr_31881_33013 = state_31848__$1;
(statearr_31881_33013[(2)] = null);

(statearr_31881_33013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (16))){
var inst_31803 = (state_31848[(10)]);
var inst_31807 = cljs.core.chunk_first(inst_31803);
var inst_31808 = cljs.core.chunk_rest(inst_31803);
var inst_31809 = cljs.core.count(inst_31807);
var inst_31789 = inst_31808;
var inst_31790 = inst_31807;
var inst_31791 = inst_31809;
var inst_31792 = (0);
var state_31848__$1 = (function (){var statearr_31882 = state_31848;
(statearr_31882[(12)] = inst_31789);

(statearr_31882[(13)] = inst_31791);

(statearr_31882[(15)] = inst_31792);

(statearr_31882[(16)] = inst_31790);

return statearr_31882;
})();
var statearr_31883_33014 = state_31848__$1;
(statearr_31883_33014[(2)] = null);

(statearr_31883_33014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (10))){
var inst_31789 = (state_31848[(12)]);
var inst_31791 = (state_31848[(13)]);
var inst_31792 = (state_31848[(15)]);
var inst_31790 = (state_31848[(16)]);
var inst_31797 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31790,inst_31792);
var inst_31798 = cljs.core.async.muxch_STAR_(inst_31797);
var inst_31799 = cljs.core.async.close_BANG_(inst_31798);
var inst_31800 = (inst_31792 + (1));
var tmp31878 = inst_31789;
var tmp31879 = inst_31791;
var tmp31880 = inst_31790;
var inst_31789__$1 = tmp31878;
var inst_31790__$1 = tmp31880;
var inst_31791__$1 = tmp31879;
var inst_31792__$1 = inst_31800;
var state_31848__$1 = (function (){var statearr_31884 = state_31848;
(statearr_31884[(12)] = inst_31789__$1);

(statearr_31884[(13)] = inst_31791__$1);

(statearr_31884[(15)] = inst_31792__$1);

(statearr_31884[(17)] = inst_31799);

(statearr_31884[(16)] = inst_31790__$1);

return statearr_31884;
})();
var statearr_31885_33016 = state_31848__$1;
(statearr_31885_33016[(2)] = null);

(statearr_31885_33016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (18))){
var inst_31818 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31886_33017 = state_31848__$1;
(statearr_31886_33017[(2)] = inst_31818);

(statearr_31886_33017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (8))){
var inst_31791 = (state_31848[(13)]);
var inst_31792 = (state_31848[(15)]);
var inst_31794 = (inst_31792 < inst_31791);
var inst_31795 = inst_31794;
var state_31848__$1 = state_31848;
if(cljs.core.truth_(inst_31795)){
var statearr_31887_33018 = state_31848__$1;
(statearr_31887_33018[(1)] = (10));

} else {
var statearr_31888_33019 = state_31848__$1;
(statearr_31888_33019[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__30218__auto__ = null;
var cljs$core$async$state_machine__30218__auto____0 = (function (){
var statearr_31889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31889[(0)] = cljs$core$async$state_machine__30218__auto__);

(statearr_31889[(1)] = (1));

return statearr_31889;
});
var cljs$core$async$state_machine__30218__auto____1 = (function (state_31848){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31848);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31890){if((e31890 instanceof Object)){
var ex__30221__auto__ = e31890;
var statearr_31891_33020 = state_31848;
(statearr_31891_33020[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33022 = state_31848;
state_31848 = G__33022;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$state_machine__30218__auto__ = function(state_31848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30218__auto____1.call(this,state_31848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30218__auto____0;
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30218__auto____1;
return cljs$core$async$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31892 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31892[(6)] = c__30529__auto___32981);

return statearr_31892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31894 = arguments.length;
switch (G__31894) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__31896 = arguments.length;
switch (G__31896) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__31898 = arguments.length;
switch (G__31898) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30529__auto___33029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_31937){
var state_val_31938 = (state_31937[(1)]);
if((state_val_31938 === (7))){
var state_31937__$1 = state_31937;
var statearr_31939_33030 = state_31937__$1;
(statearr_31939_33030[(2)] = null);

(statearr_31939_33030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (1))){
var state_31937__$1 = state_31937;
var statearr_31940_33031 = state_31937__$1;
(statearr_31940_33031[(2)] = null);

(statearr_31940_33031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (4))){
var inst_31901 = (state_31937[(7)]);
var inst_31903 = (inst_31901 < cnt);
var state_31937__$1 = state_31937;
if(cljs.core.truth_(inst_31903)){
var statearr_31941_33032 = state_31937__$1;
(statearr_31941_33032[(1)] = (6));

} else {
var statearr_31942_33033 = state_31937__$1;
(statearr_31942_33033[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (15))){
var inst_31933 = (state_31937[(2)]);
var state_31937__$1 = state_31937;
var statearr_31943_33034 = state_31937__$1;
(statearr_31943_33034[(2)] = inst_31933);

(statearr_31943_33034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (13))){
var inst_31926 = cljs.core.async.close_BANG_(out);
var state_31937__$1 = state_31937;
var statearr_31944_33035 = state_31937__$1;
(statearr_31944_33035[(2)] = inst_31926);

(statearr_31944_33035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (6))){
var state_31937__$1 = state_31937;
var statearr_31945_33036 = state_31937__$1;
(statearr_31945_33036[(2)] = null);

(statearr_31945_33036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (3))){
var inst_31935 = (state_31937[(2)]);
var state_31937__$1 = state_31937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31937__$1,inst_31935);
} else {
if((state_val_31938 === (12))){
var inst_31923 = (state_31937[(8)]);
var inst_31923__$1 = (state_31937[(2)]);
var inst_31924 = cljs.core.some(cljs.core.nil_QMARK_,inst_31923__$1);
var state_31937__$1 = (function (){var statearr_31946 = state_31937;
(statearr_31946[(8)] = inst_31923__$1);

return statearr_31946;
})();
if(cljs.core.truth_(inst_31924)){
var statearr_31947_33037 = state_31937__$1;
(statearr_31947_33037[(1)] = (13));

} else {
var statearr_31948_33039 = state_31937__$1;
(statearr_31948_33039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (2))){
var inst_31900 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31901 = (0);
var state_31937__$1 = (function (){var statearr_31949 = state_31937;
(statearr_31949[(9)] = inst_31900);

(statearr_31949[(7)] = inst_31901);

return statearr_31949;
})();
var statearr_31950_33040 = state_31937__$1;
(statearr_31950_33040[(2)] = null);

(statearr_31950_33040[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (11))){
var inst_31901 = (state_31937[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31937,(10),Object,null,(9));
var inst_31910 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31901) : chs__$1.call(null,inst_31901));
var inst_31911 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31901) : done.call(null,inst_31901));
var inst_31912 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31910,inst_31911);
var state_31937__$1 = state_31937;
var statearr_31951_33041 = state_31937__$1;
(statearr_31951_33041[(2)] = inst_31912);


cljs.core.async.impl.ioc_helpers.process_exception(state_31937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (9))){
var inst_31901 = (state_31937[(7)]);
var inst_31914 = (state_31937[(2)]);
var inst_31915 = (inst_31901 + (1));
var inst_31901__$1 = inst_31915;
var state_31937__$1 = (function (){var statearr_31952 = state_31937;
(statearr_31952[(7)] = inst_31901__$1);

(statearr_31952[(10)] = inst_31914);

return statearr_31952;
})();
var statearr_31953_33042 = state_31937__$1;
(statearr_31953_33042[(2)] = null);

(statearr_31953_33042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (5))){
var inst_31921 = (state_31937[(2)]);
var state_31937__$1 = (function (){var statearr_31954 = state_31937;
(statearr_31954[(11)] = inst_31921);

return statearr_31954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31937__$1,(12),dchan);
} else {
if((state_val_31938 === (14))){
var inst_31923 = (state_31937[(8)]);
var inst_31928 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31923);
var state_31937__$1 = state_31937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31937__$1,(16),out,inst_31928);
} else {
if((state_val_31938 === (16))){
var inst_31930 = (state_31937[(2)]);
var state_31937__$1 = (function (){var statearr_31955 = state_31937;
(statearr_31955[(12)] = inst_31930);

return statearr_31955;
})();
var statearr_31956_33043 = state_31937__$1;
(statearr_31956_33043[(2)] = null);

(statearr_31956_33043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (10))){
var inst_31905 = (state_31937[(2)]);
var inst_31906 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31937__$1 = (function (){var statearr_31957 = state_31937;
(statearr_31957[(13)] = inst_31905);

return statearr_31957;
})();
var statearr_31958_33044 = state_31937__$1;
(statearr_31958_33044[(2)] = inst_31906);


cljs.core.async.impl.ioc_helpers.process_exception(state_31937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (8))){
var inst_31919 = (state_31937[(2)]);
var state_31937__$1 = state_31937;
var statearr_31959_33045 = state_31937__$1;
(statearr_31959_33045[(2)] = inst_31919);

(statearr_31959_33045[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__30218__auto__ = null;
var cljs$core$async$state_machine__30218__auto____0 = (function (){
var statearr_31960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31960[(0)] = cljs$core$async$state_machine__30218__auto__);

(statearr_31960[(1)] = (1));

return statearr_31960;
});
var cljs$core$async$state_machine__30218__auto____1 = (function (state_31937){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31937);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e31961){if((e31961 instanceof Object)){
var ex__30221__auto__ = e31961;
var statearr_31962_33053 = state_31937;
(statearr_31962_33053[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33054 = state_31937;
state_31937 = G__33054;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$state_machine__30218__auto__ = function(state_31937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30218__auto____1.call(this,state_31937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30218__auto____0;
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30218__auto____1;
return cljs$core$async$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_31963 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_31963[(6)] = c__30529__auto___33029);

return statearr_31963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31966 = arguments.length;
switch (G__31966) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30529__auto___33056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_31998){
var state_val_31999 = (state_31998[(1)]);
if((state_val_31999 === (7))){
var inst_31977 = (state_31998[(7)]);
var inst_31978 = (state_31998[(8)]);
var inst_31977__$1 = (state_31998[(2)]);
var inst_31978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31977__$1,(0),null);
var inst_31979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31977__$1,(1),null);
var inst_31980 = (inst_31978__$1 == null);
var state_31998__$1 = (function (){var statearr_32000 = state_31998;
(statearr_32000[(7)] = inst_31977__$1);

(statearr_32000[(9)] = inst_31979);

(statearr_32000[(8)] = inst_31978__$1);

return statearr_32000;
})();
if(cljs.core.truth_(inst_31980)){
var statearr_32001_33057 = state_31998__$1;
(statearr_32001_33057[(1)] = (8));

} else {
var statearr_32002_33058 = state_31998__$1;
(statearr_32002_33058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (1))){
var inst_31967 = cljs.core.vec(chs);
var inst_31968 = inst_31967;
var state_31998__$1 = (function (){var statearr_32003 = state_31998;
(statearr_32003[(10)] = inst_31968);

return statearr_32003;
})();
var statearr_32004_33059 = state_31998__$1;
(statearr_32004_33059[(2)] = null);

(statearr_32004_33059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (4))){
var inst_31968 = (state_31998[(10)]);
var state_31998__$1 = state_31998;
return cljs.core.async.ioc_alts_BANG_(state_31998__$1,(7),inst_31968);
} else {
if((state_val_31999 === (6))){
var inst_31994 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32005_33060 = state_31998__$1;
(statearr_32005_33060[(2)] = inst_31994);

(statearr_32005_33060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (3))){
var inst_31996 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31998__$1,inst_31996);
} else {
if((state_val_31999 === (2))){
var inst_31968 = (state_31998[(10)]);
var inst_31970 = cljs.core.count(inst_31968);
var inst_31971 = (inst_31970 > (0));
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31971)){
var statearr_32007_33061 = state_31998__$1;
(statearr_32007_33061[(1)] = (4));

} else {
var statearr_32008_33062 = state_31998__$1;
(statearr_32008_33062[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (11))){
var inst_31968 = (state_31998[(10)]);
var inst_31987 = (state_31998[(2)]);
var tmp32006 = inst_31968;
var inst_31968__$1 = tmp32006;
var state_31998__$1 = (function (){var statearr_32009 = state_31998;
(statearr_32009[(11)] = inst_31987);

(statearr_32009[(10)] = inst_31968__$1);

return statearr_32009;
})();
var statearr_32010_33064 = state_31998__$1;
(statearr_32010_33064[(2)] = null);

(statearr_32010_33064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (9))){
var inst_31978 = (state_31998[(8)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31998__$1,(11),out,inst_31978);
} else {
if((state_val_31999 === (5))){
var inst_31992 = cljs.core.async.close_BANG_(out);
var state_31998__$1 = state_31998;
var statearr_32011_33065 = state_31998__$1;
(statearr_32011_33065[(2)] = inst_31992);

(statearr_32011_33065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (10))){
var inst_31990 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32012_33066 = state_31998__$1;
(statearr_32012_33066[(2)] = inst_31990);

(statearr_32012_33066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (8))){
var inst_31977 = (state_31998[(7)]);
var inst_31979 = (state_31998[(9)]);
var inst_31968 = (state_31998[(10)]);
var inst_31978 = (state_31998[(8)]);
var inst_31982 = (function (){var cs = inst_31968;
var vec__31973 = inst_31977;
var v = inst_31978;
var c = inst_31979;
return (function (p1__31964_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31964_SHARP_);
});
})();
var inst_31983 = cljs.core.filterv(inst_31982,inst_31968);
var inst_31968__$1 = inst_31983;
var state_31998__$1 = (function (){var statearr_32013 = state_31998;
(statearr_32013[(10)] = inst_31968__$1);

return statearr_32013;
})();
var statearr_32014_33068 = state_31998__$1;
(statearr_32014_33068[(2)] = null);

(statearr_32014_33068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__30218__auto__ = null;
var cljs$core$async$state_machine__30218__auto____0 = (function (){
var statearr_32015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32015[(0)] = cljs$core$async$state_machine__30218__auto__);

(statearr_32015[(1)] = (1));

return statearr_32015;
});
var cljs$core$async$state_machine__30218__auto____1 = (function (state_31998){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_31998);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e32016){if((e32016 instanceof Object)){
var ex__30221__auto__ = e32016;
var statearr_32017_33069 = state_31998;
(statearr_32017_33069[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33070 = state_31998;
state_31998 = G__33070;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$state_machine__30218__auto__ = function(state_31998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30218__auto____1.call(this,state_31998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30218__auto____0;
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30218__auto____1;
return cljs$core$async$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32018 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_32018[(6)] = c__30529__auto___33056);

return statearr_32018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__32020 = arguments.length;
switch (G__32020) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30529__auto___33072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_32044){
var state_val_32045 = (state_32044[(1)]);
if((state_val_32045 === (7))){
var inst_32026 = (state_32044[(7)]);
var inst_32026__$1 = (state_32044[(2)]);
var inst_32027 = (inst_32026__$1 == null);
var inst_32028 = cljs.core.not(inst_32027);
var state_32044__$1 = (function (){var statearr_32046 = state_32044;
(statearr_32046[(7)] = inst_32026__$1);

return statearr_32046;
})();
if(inst_32028){
var statearr_32047_33073 = state_32044__$1;
(statearr_32047_33073[(1)] = (8));

} else {
var statearr_32048_33074 = state_32044__$1;
(statearr_32048_33074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (1))){
var inst_32021 = (0);
var state_32044__$1 = (function (){var statearr_32049 = state_32044;
(statearr_32049[(8)] = inst_32021);

return statearr_32049;
})();
var statearr_32050_33075 = state_32044__$1;
(statearr_32050_33075[(2)] = null);

(statearr_32050_33075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (4))){
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32044__$1,(7),ch);
} else {
if((state_val_32045 === (6))){
var inst_32039 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32051_33076 = state_32044__$1;
(statearr_32051_33076[(2)] = inst_32039);

(statearr_32051_33076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (3))){
var inst_32041 = (state_32044[(2)]);
var inst_32042 = cljs.core.async.close_BANG_(out);
var state_32044__$1 = (function (){var statearr_32052 = state_32044;
(statearr_32052[(9)] = inst_32041);

return statearr_32052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32044__$1,inst_32042);
} else {
if((state_val_32045 === (2))){
var inst_32021 = (state_32044[(8)]);
var inst_32023 = (inst_32021 < n);
var state_32044__$1 = state_32044;
if(cljs.core.truth_(inst_32023)){
var statearr_32053_33077 = state_32044__$1;
(statearr_32053_33077[(1)] = (4));

} else {
var statearr_32054_33078 = state_32044__$1;
(statearr_32054_33078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (11))){
var inst_32021 = (state_32044[(8)]);
var inst_32031 = (state_32044[(2)]);
var inst_32032 = (inst_32021 + (1));
var inst_32021__$1 = inst_32032;
var state_32044__$1 = (function (){var statearr_32055 = state_32044;
(statearr_32055[(8)] = inst_32021__$1);

(statearr_32055[(10)] = inst_32031);

return statearr_32055;
})();
var statearr_32056_33079 = state_32044__$1;
(statearr_32056_33079[(2)] = null);

(statearr_32056_33079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (9))){
var state_32044__$1 = state_32044;
var statearr_32057_33081 = state_32044__$1;
(statearr_32057_33081[(2)] = null);

(statearr_32057_33081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (5))){
var state_32044__$1 = state_32044;
var statearr_32058_33085 = state_32044__$1;
(statearr_32058_33085[(2)] = null);

(statearr_32058_33085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (10))){
var inst_32036 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32059_33086 = state_32044__$1;
(statearr_32059_33086[(2)] = inst_32036);

(statearr_32059_33086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (8))){
var inst_32026 = (state_32044[(7)]);
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32044__$1,(11),out,inst_32026);
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
});
return (function() {
var cljs$core$async$state_machine__30218__auto__ = null;
var cljs$core$async$state_machine__30218__auto____0 = (function (){
var statearr_32060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32060[(0)] = cljs$core$async$state_machine__30218__auto__);

(statearr_32060[(1)] = (1));

return statearr_32060;
});
var cljs$core$async$state_machine__30218__auto____1 = (function (state_32044){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_32044);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e32061){if((e32061 instanceof Object)){
var ex__30221__auto__ = e32061;
var statearr_32062_33091 = state_32044;
(statearr_32062_33091[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33092 = state_32044;
state_32044 = G__33092;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$state_machine__30218__auto__ = function(state_32044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30218__auto____1.call(this,state_32044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30218__auto____0;
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30218__auto____1;
return cljs$core$async$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32063 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_32063[(6)] = c__30529__auto___33072);

return statearr_32063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32065 = (function (f,ch,meta32066){
this.f = f;
this.ch = ch;
this.meta32066 = meta32066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32067,meta32066__$1){
var self__ = this;
var _32067__$1 = this;
return (new cljs.core.async.t_cljs$core$async32065(self__.f,self__.ch,meta32066__$1));
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32067){
var self__ = this;
var _32067__$1 = this;
return self__.meta32066;
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32068 = (function (f,ch,meta32066,_,fn1,meta32069){
this.f = f;
this.ch = ch;
this.meta32066 = meta32066;
this._ = _;
this.fn1 = fn1;
this.meta32069 = meta32069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32070,meta32069__$1){
var self__ = this;
var _32070__$1 = this;
return (new cljs.core.async.t_cljs$core$async32068(self__.f,self__.ch,self__.meta32066,self__._,self__.fn1,meta32069__$1));
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32070){
var self__ = this;
var _32070__$1 = this;
return self__.meta32069;
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32064_SHARP_){
var G__32071 = (((p1__32064_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32064_SHARP_) : self__.f.call(null,p1__32064_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32071) : f1.call(null,G__32071));
});
}));

(cljs.core.async.t_cljs$core$async32068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32066","meta32066",-1003302684,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32065","cljs.core.async/t_cljs$core$async32065",-1628997228,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32069","meta32069",763657709,null)], null);
}));

(cljs.core.async.t_cljs$core$async32068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32068");

(cljs.core.async.t_cljs$core$async32068.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32068.
 */
cljs.core.async.__GT_t_cljs$core$async32068 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32068(f__$1,ch__$1,meta32066__$1,___$2,fn1__$1,meta32069){
return (new cljs.core.async.t_cljs$core$async32068(f__$1,ch__$1,meta32066__$1,___$2,fn1__$1,meta32069));
});

}

return (new cljs.core.async.t_cljs$core$async32068(self__.f,self__.ch,self__.meta32066,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32072 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32072) : self__.f.call(null,G__32072));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32066","meta32066",-1003302684,null)], null);
}));

(cljs.core.async.t_cljs$core$async32065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32065");

(cljs.core.async.t_cljs$core$async32065.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32065.
 */
cljs.core.async.__GT_t_cljs$core$async32065 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32065(f__$1,ch__$1,meta32066){
return (new cljs.core.async.t_cljs$core$async32065(f__$1,ch__$1,meta32066));
});

}

return (new cljs.core.async.t_cljs$core$async32065(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32073 = (function (f,ch,meta32074){
this.f = f;
this.ch = ch;
this.meta32074 = meta32074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32075,meta32074__$1){
var self__ = this;
var _32075__$1 = this;
return (new cljs.core.async.t_cljs$core$async32073(self__.f,self__.ch,meta32074__$1));
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32075){
var self__ = this;
var _32075__$1 = this;
return self__.meta32074;
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32074","meta32074",1175675589,null)], null);
}));

(cljs.core.async.t_cljs$core$async32073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32073");

(cljs.core.async.t_cljs$core$async32073.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32073.
 */
cljs.core.async.__GT_t_cljs$core$async32073 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32073(f__$1,ch__$1,meta32074){
return (new cljs.core.async.t_cljs$core$async32073(f__$1,ch__$1,meta32074));
});

}

return (new cljs.core.async.t_cljs$core$async32073(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32076 = (function (p,ch,meta32077){
this.p = p;
this.ch = ch;
this.meta32077 = meta32077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32078,meta32077__$1){
var self__ = this;
var _32078__$1 = this;
return (new cljs.core.async.t_cljs$core$async32076(self__.p,self__.ch,meta32077__$1));
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32078){
var self__ = this;
var _32078__$1 = this;
return self__.meta32077;
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32077","meta32077",-1464118207,null)], null);
}));

(cljs.core.async.t_cljs$core$async32076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32076");

(cljs.core.async.t_cljs$core$async32076.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32076.
 */
cljs.core.async.__GT_t_cljs$core$async32076 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32076(p__$1,ch__$1,meta32077){
return (new cljs.core.async.t_cljs$core$async32076(p__$1,ch__$1,meta32077));
});

}

return (new cljs.core.async.t_cljs$core$async32076(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32080 = arguments.length;
switch (G__32080) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30529__auto___33101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_32101){
var state_val_32102 = (state_32101[(1)]);
if((state_val_32102 === (7))){
var inst_32097 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32103_33102 = state_32101__$1;
(statearr_32103_33102[(2)] = inst_32097);

(statearr_32103_33102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (1))){
var state_32101__$1 = state_32101;
var statearr_32104_33103 = state_32101__$1;
(statearr_32104_33103[(2)] = null);

(statearr_32104_33103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (4))){
var inst_32083 = (state_32101[(7)]);
var inst_32083__$1 = (state_32101[(2)]);
var inst_32084 = (inst_32083__$1 == null);
var state_32101__$1 = (function (){var statearr_32105 = state_32101;
(statearr_32105[(7)] = inst_32083__$1);

return statearr_32105;
})();
if(cljs.core.truth_(inst_32084)){
var statearr_32106_33105 = state_32101__$1;
(statearr_32106_33105[(1)] = (5));

} else {
var statearr_32107_33106 = state_32101__$1;
(statearr_32107_33106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (6))){
var inst_32083 = (state_32101[(7)]);
var inst_32088 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32083) : p.call(null,inst_32083));
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32088)){
var statearr_32108_33107 = state_32101__$1;
(statearr_32108_33107[(1)] = (8));

} else {
var statearr_32109_33108 = state_32101__$1;
(statearr_32109_33108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (3))){
var inst_32099 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32101__$1,inst_32099);
} else {
if((state_val_32102 === (2))){
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32101__$1,(4),ch);
} else {
if((state_val_32102 === (11))){
var inst_32091 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32110_33109 = state_32101__$1;
(statearr_32110_33109[(2)] = inst_32091);

(statearr_32110_33109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (9))){
var state_32101__$1 = state_32101;
var statearr_32111_33111 = state_32101__$1;
(statearr_32111_33111[(2)] = null);

(statearr_32111_33111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (5))){
var inst_32086 = cljs.core.async.close_BANG_(out);
var state_32101__$1 = state_32101;
var statearr_32112_33112 = state_32101__$1;
(statearr_32112_33112[(2)] = inst_32086);

(statearr_32112_33112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (10))){
var inst_32094 = (state_32101[(2)]);
var state_32101__$1 = (function (){var statearr_32113 = state_32101;
(statearr_32113[(8)] = inst_32094);

return statearr_32113;
})();
var statearr_32114_33113 = state_32101__$1;
(statearr_32114_33113[(2)] = null);

(statearr_32114_33113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (8))){
var inst_32083 = (state_32101[(7)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32101__$1,(11),out,inst_32083);
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
});
return (function() {
var cljs$core$async$state_machine__30218__auto__ = null;
var cljs$core$async$state_machine__30218__auto____0 = (function (){
var statearr_32115 = [null,null,null,null,null,null,null,null,null];
(statearr_32115[(0)] = cljs$core$async$state_machine__30218__auto__);

(statearr_32115[(1)] = (1));

return statearr_32115;
});
var cljs$core$async$state_machine__30218__auto____1 = (function (state_32101){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_32101);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e32116){if((e32116 instanceof Object)){
var ex__30221__auto__ = e32116;
var statearr_32117_33121 = state_32101;
(statearr_32117_33121[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33125 = state_32101;
state_32101 = G__33125;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$state_machine__30218__auto__ = function(state_32101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30218__auto____1.call(this,state_32101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30218__auto____0;
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30218__auto____1;
return cljs$core$async$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32118 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_32118[(6)] = c__30529__auto___33101);

return statearr_32118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32120 = arguments.length;
switch (G__32120) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30529__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_32182){
var state_val_32183 = (state_32182[(1)]);
if((state_val_32183 === (7))){
var inst_32178 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32184_33136 = state_32182__$1;
(statearr_32184_33136[(2)] = inst_32178);

(statearr_32184_33136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (20))){
var inst_32148 = (state_32182[(7)]);
var inst_32159 = (state_32182[(2)]);
var inst_32160 = cljs.core.next(inst_32148);
var inst_32134 = inst_32160;
var inst_32135 = null;
var inst_32136 = (0);
var inst_32137 = (0);
var state_32182__$1 = (function (){var statearr_32185 = state_32182;
(statearr_32185[(8)] = inst_32134);

(statearr_32185[(9)] = inst_32137);

(statearr_32185[(10)] = inst_32135);

(statearr_32185[(11)] = inst_32136);

(statearr_32185[(12)] = inst_32159);

return statearr_32185;
})();
var statearr_32186_33138 = state_32182__$1;
(statearr_32186_33138[(2)] = null);

(statearr_32186_33138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (1))){
var state_32182__$1 = state_32182;
var statearr_32187_33154 = state_32182__$1;
(statearr_32187_33154[(2)] = null);

(statearr_32187_33154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (4))){
var inst_32123 = (state_32182[(13)]);
var inst_32123__$1 = (state_32182[(2)]);
var inst_32124 = (inst_32123__$1 == null);
var state_32182__$1 = (function (){var statearr_32188 = state_32182;
(statearr_32188[(13)] = inst_32123__$1);

return statearr_32188;
})();
if(cljs.core.truth_(inst_32124)){
var statearr_32189_33155 = state_32182__$1;
(statearr_32189_33155[(1)] = (5));

} else {
var statearr_32190_33156 = state_32182__$1;
(statearr_32190_33156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (15))){
var state_32182__$1 = state_32182;
var statearr_32194_33157 = state_32182__$1;
(statearr_32194_33157[(2)] = null);

(statearr_32194_33157[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (21))){
var state_32182__$1 = state_32182;
var statearr_32195_33158 = state_32182__$1;
(statearr_32195_33158[(2)] = null);

(statearr_32195_33158[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (13))){
var inst_32134 = (state_32182[(8)]);
var inst_32137 = (state_32182[(9)]);
var inst_32135 = (state_32182[(10)]);
var inst_32136 = (state_32182[(11)]);
var inst_32144 = (state_32182[(2)]);
var inst_32145 = (inst_32137 + (1));
var tmp32191 = inst_32134;
var tmp32192 = inst_32135;
var tmp32193 = inst_32136;
var inst_32134__$1 = tmp32191;
var inst_32135__$1 = tmp32192;
var inst_32136__$1 = tmp32193;
var inst_32137__$1 = inst_32145;
var state_32182__$1 = (function (){var statearr_32196 = state_32182;
(statearr_32196[(8)] = inst_32134__$1);

(statearr_32196[(14)] = inst_32144);

(statearr_32196[(9)] = inst_32137__$1);

(statearr_32196[(10)] = inst_32135__$1);

(statearr_32196[(11)] = inst_32136__$1);

return statearr_32196;
})();
var statearr_32197_33159 = state_32182__$1;
(statearr_32197_33159[(2)] = null);

(statearr_32197_33159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (22))){
var state_32182__$1 = state_32182;
var statearr_32198_33160 = state_32182__$1;
(statearr_32198_33160[(2)] = null);

(statearr_32198_33160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (6))){
var inst_32123 = (state_32182[(13)]);
var inst_32132 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32123) : f.call(null,inst_32123));
var inst_32133 = cljs.core.seq(inst_32132);
var inst_32134 = inst_32133;
var inst_32135 = null;
var inst_32136 = (0);
var inst_32137 = (0);
var state_32182__$1 = (function (){var statearr_32199 = state_32182;
(statearr_32199[(8)] = inst_32134);

(statearr_32199[(9)] = inst_32137);

(statearr_32199[(10)] = inst_32135);

(statearr_32199[(11)] = inst_32136);

return statearr_32199;
})();
var statearr_32200_33167 = state_32182__$1;
(statearr_32200_33167[(2)] = null);

(statearr_32200_33167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (17))){
var inst_32148 = (state_32182[(7)]);
var inst_32152 = cljs.core.chunk_first(inst_32148);
var inst_32153 = cljs.core.chunk_rest(inst_32148);
var inst_32154 = cljs.core.count(inst_32152);
var inst_32134 = inst_32153;
var inst_32135 = inst_32152;
var inst_32136 = inst_32154;
var inst_32137 = (0);
var state_32182__$1 = (function (){var statearr_32201 = state_32182;
(statearr_32201[(8)] = inst_32134);

(statearr_32201[(9)] = inst_32137);

(statearr_32201[(10)] = inst_32135);

(statearr_32201[(11)] = inst_32136);

return statearr_32201;
})();
var statearr_32202_33168 = state_32182__$1;
(statearr_32202_33168[(2)] = null);

(statearr_32202_33168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (3))){
var inst_32180 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32182__$1,inst_32180);
} else {
if((state_val_32183 === (12))){
var inst_32168 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32203_33169 = state_32182__$1;
(statearr_32203_33169[(2)] = inst_32168);

(statearr_32203_33169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (2))){
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32182__$1,(4),in$);
} else {
if((state_val_32183 === (23))){
var inst_32176 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32204_33176 = state_32182__$1;
(statearr_32204_33176[(2)] = inst_32176);

(statearr_32204_33176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (19))){
var inst_32163 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32205_33177 = state_32182__$1;
(statearr_32205_33177[(2)] = inst_32163);

(statearr_32205_33177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (11))){
var inst_32134 = (state_32182[(8)]);
var inst_32148 = (state_32182[(7)]);
var inst_32148__$1 = cljs.core.seq(inst_32134);
var state_32182__$1 = (function (){var statearr_32206 = state_32182;
(statearr_32206[(7)] = inst_32148__$1);

return statearr_32206;
})();
if(inst_32148__$1){
var statearr_32207_33178 = state_32182__$1;
(statearr_32207_33178[(1)] = (14));

} else {
var statearr_32208_33179 = state_32182__$1;
(statearr_32208_33179[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (9))){
var inst_32170 = (state_32182[(2)]);
var inst_32171 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32182__$1 = (function (){var statearr_32209 = state_32182;
(statearr_32209[(15)] = inst_32170);

return statearr_32209;
})();
if(cljs.core.truth_(inst_32171)){
var statearr_32210_33180 = state_32182__$1;
(statearr_32210_33180[(1)] = (21));

} else {
var statearr_32211_33181 = state_32182__$1;
(statearr_32211_33181[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (5))){
var inst_32126 = cljs.core.async.close_BANG_(out);
var state_32182__$1 = state_32182;
var statearr_32212_33182 = state_32182__$1;
(statearr_32212_33182[(2)] = inst_32126);

(statearr_32212_33182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (14))){
var inst_32148 = (state_32182[(7)]);
var inst_32150 = cljs.core.chunked_seq_QMARK_(inst_32148);
var state_32182__$1 = state_32182;
if(inst_32150){
var statearr_32213_33183 = state_32182__$1;
(statearr_32213_33183[(1)] = (17));

} else {
var statearr_32214_33184 = state_32182__$1;
(statearr_32214_33184[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (16))){
var inst_32166 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32215_33185 = state_32182__$1;
(statearr_32215_33185[(2)] = inst_32166);

(statearr_32215_33185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (10))){
var inst_32137 = (state_32182[(9)]);
var inst_32135 = (state_32182[(10)]);
var inst_32142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32135,inst_32137);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32182__$1,(13),out,inst_32142);
} else {
if((state_val_32183 === (18))){
var inst_32148 = (state_32182[(7)]);
var inst_32157 = cljs.core.first(inst_32148);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32182__$1,(20),out,inst_32157);
} else {
if((state_val_32183 === (8))){
var inst_32137 = (state_32182[(9)]);
var inst_32136 = (state_32182[(11)]);
var inst_32139 = (inst_32137 < inst_32136);
var inst_32140 = inst_32139;
var state_32182__$1 = state_32182;
if(cljs.core.truth_(inst_32140)){
var statearr_32216_33192 = state_32182__$1;
(statearr_32216_33192[(1)] = (10));

} else {
var statearr_32217_33193 = state_32182__$1;
(statearr_32217_33193[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30218__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30218__auto____0 = (function (){
var statearr_32218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32218[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30218__auto__);

(statearr_32218[(1)] = (1));

return statearr_32218;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30218__auto____1 = (function (state_32182){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_32182);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e32219){if((e32219 instanceof Object)){
var ex__30221__auto__ = e32219;
var statearr_32220_33197 = state_32182;
(statearr_32220_33197[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33198 = state_32182;
state_32182 = G__33198;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30218__auto__ = function(state_32182){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30218__auto____1.call(this,state_32182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30218__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30218__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32221 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_32221[(6)] = c__30529__auto__);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));

return c__30529__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32223 = arguments.length;
switch (G__32223) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32225 = arguments.length;
switch (G__32225) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32227 = arguments.length;
switch (G__32227) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30529__auto___33227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_32251){
var state_val_32252 = (state_32251[(1)]);
if((state_val_32252 === (7))){
var inst_32246 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32253_33229 = state_32251__$1;
(statearr_32253_33229[(2)] = inst_32246);

(statearr_32253_33229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (1))){
var inst_32228 = null;
var state_32251__$1 = (function (){var statearr_32254 = state_32251;
(statearr_32254[(7)] = inst_32228);

return statearr_32254;
})();
var statearr_32255_33230 = state_32251__$1;
(statearr_32255_33230[(2)] = null);

(statearr_32255_33230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (4))){
var inst_32231 = (state_32251[(8)]);
var inst_32231__$1 = (state_32251[(2)]);
var inst_32232 = (inst_32231__$1 == null);
var inst_32233 = cljs.core.not(inst_32232);
var state_32251__$1 = (function (){var statearr_32256 = state_32251;
(statearr_32256[(8)] = inst_32231__$1);

return statearr_32256;
})();
if(inst_32233){
var statearr_32257_33231 = state_32251__$1;
(statearr_32257_33231[(1)] = (5));

} else {
var statearr_32258_33232 = state_32251__$1;
(statearr_32258_33232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (6))){
var state_32251__$1 = state_32251;
var statearr_32259_33234 = state_32251__$1;
(statearr_32259_33234[(2)] = null);

(statearr_32259_33234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (3))){
var inst_32248 = (state_32251[(2)]);
var inst_32249 = cljs.core.async.close_BANG_(out);
var state_32251__$1 = (function (){var statearr_32260 = state_32251;
(statearr_32260[(9)] = inst_32248);

return statearr_32260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32251__$1,inst_32249);
} else {
if((state_val_32252 === (2))){
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32251__$1,(4),ch);
} else {
if((state_val_32252 === (11))){
var inst_32231 = (state_32251[(8)]);
var inst_32240 = (state_32251[(2)]);
var inst_32228 = inst_32231;
var state_32251__$1 = (function (){var statearr_32261 = state_32251;
(statearr_32261[(7)] = inst_32228);

(statearr_32261[(10)] = inst_32240);

return statearr_32261;
})();
var statearr_32262_33235 = state_32251__$1;
(statearr_32262_33235[(2)] = null);

(statearr_32262_33235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (9))){
var inst_32231 = (state_32251[(8)]);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32251__$1,(11),out,inst_32231);
} else {
if((state_val_32252 === (5))){
var inst_32228 = (state_32251[(7)]);
var inst_32231 = (state_32251[(8)]);
var inst_32235 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32231,inst_32228);
var state_32251__$1 = state_32251;
if(inst_32235){
var statearr_32264_33236 = state_32251__$1;
(statearr_32264_33236[(1)] = (8));

} else {
var statearr_32265_33237 = state_32251__$1;
(statearr_32265_33237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (10))){
var inst_32243 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32266_33238 = state_32251__$1;
(statearr_32266_33238[(2)] = inst_32243);

(statearr_32266_33238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (8))){
var inst_32228 = (state_32251[(7)]);
var tmp32263 = inst_32228;
var inst_32228__$1 = tmp32263;
var state_32251__$1 = (function (){var statearr_32267 = state_32251;
(statearr_32267[(7)] = inst_32228__$1);

return statearr_32267;
})();
var statearr_32268_33240 = state_32251__$1;
(statearr_32268_33240[(2)] = null);

(statearr_32268_33240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__30218__auto__ = null;
var cljs$core$async$state_machine__30218__auto____0 = (function (){
var statearr_32269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32269[(0)] = cljs$core$async$state_machine__30218__auto__);

(statearr_32269[(1)] = (1));

return statearr_32269;
});
var cljs$core$async$state_machine__30218__auto____1 = (function (state_32251){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_32251);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e32270){if((e32270 instanceof Object)){
var ex__30221__auto__ = e32270;
var statearr_32271_33252 = state_32251;
(statearr_32271_33252[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33254 = state_32251;
state_32251 = G__33254;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$state_machine__30218__auto__ = function(state_32251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30218__auto____1.call(this,state_32251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30218__auto____0;
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30218__auto____1;
return cljs$core$async$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32272 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_32272[(6)] = c__30529__auto___33227);

return statearr_32272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32274 = arguments.length;
switch (G__32274) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30529__auto___33264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_32312){
var state_val_32313 = (state_32312[(1)]);
if((state_val_32313 === (7))){
var inst_32308 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32314_33265 = state_32312__$1;
(statearr_32314_33265[(2)] = inst_32308);

(statearr_32314_33265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (1))){
var inst_32275 = (new Array(n));
var inst_32276 = inst_32275;
var inst_32277 = (0);
var state_32312__$1 = (function (){var statearr_32315 = state_32312;
(statearr_32315[(7)] = inst_32277);

(statearr_32315[(8)] = inst_32276);

return statearr_32315;
})();
var statearr_32316_33266 = state_32312__$1;
(statearr_32316_33266[(2)] = null);

(statearr_32316_33266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (4))){
var inst_32280 = (state_32312[(9)]);
var inst_32280__$1 = (state_32312[(2)]);
var inst_32281 = (inst_32280__$1 == null);
var inst_32282 = cljs.core.not(inst_32281);
var state_32312__$1 = (function (){var statearr_32317 = state_32312;
(statearr_32317[(9)] = inst_32280__$1);

return statearr_32317;
})();
if(inst_32282){
var statearr_32318_33267 = state_32312__$1;
(statearr_32318_33267[(1)] = (5));

} else {
var statearr_32319_33268 = state_32312__$1;
(statearr_32319_33268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (15))){
var inst_32302 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32320_33273 = state_32312__$1;
(statearr_32320_33273[(2)] = inst_32302);

(statearr_32320_33273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (13))){
var state_32312__$1 = state_32312;
var statearr_32321_33278 = state_32312__$1;
(statearr_32321_33278[(2)] = null);

(statearr_32321_33278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (6))){
var inst_32277 = (state_32312[(7)]);
var inst_32298 = (inst_32277 > (0));
var state_32312__$1 = state_32312;
if(cljs.core.truth_(inst_32298)){
var statearr_32322_33279 = state_32312__$1;
(statearr_32322_33279[(1)] = (12));

} else {
var statearr_32323_33280 = state_32312__$1;
(statearr_32323_33280[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (3))){
var inst_32310 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32312__$1,inst_32310);
} else {
if((state_val_32313 === (12))){
var inst_32276 = (state_32312[(8)]);
var inst_32300 = cljs.core.vec(inst_32276);
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32312__$1,(15),out,inst_32300);
} else {
if((state_val_32313 === (2))){
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32312__$1,(4),ch);
} else {
if((state_val_32313 === (11))){
var inst_32292 = (state_32312[(2)]);
var inst_32293 = (new Array(n));
var inst_32276 = inst_32293;
var inst_32277 = (0);
var state_32312__$1 = (function (){var statearr_32324 = state_32312;
(statearr_32324[(7)] = inst_32277);

(statearr_32324[(8)] = inst_32276);

(statearr_32324[(10)] = inst_32292);

return statearr_32324;
})();
var statearr_32325_33281 = state_32312__$1;
(statearr_32325_33281[(2)] = null);

(statearr_32325_33281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (9))){
var inst_32276 = (state_32312[(8)]);
var inst_32290 = cljs.core.vec(inst_32276);
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32312__$1,(11),out,inst_32290);
} else {
if((state_val_32313 === (5))){
var inst_32277 = (state_32312[(7)]);
var inst_32280 = (state_32312[(9)]);
var inst_32276 = (state_32312[(8)]);
var inst_32285 = (state_32312[(11)]);
var inst_32284 = (inst_32276[inst_32277] = inst_32280);
var inst_32285__$1 = (inst_32277 + (1));
var inst_32286 = (inst_32285__$1 < n);
var state_32312__$1 = (function (){var statearr_32326 = state_32312;
(statearr_32326[(12)] = inst_32284);

(statearr_32326[(11)] = inst_32285__$1);

return statearr_32326;
})();
if(cljs.core.truth_(inst_32286)){
var statearr_32327_33286 = state_32312__$1;
(statearr_32327_33286[(1)] = (8));

} else {
var statearr_32328_33287 = state_32312__$1;
(statearr_32328_33287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (14))){
var inst_32305 = (state_32312[(2)]);
var inst_32306 = cljs.core.async.close_BANG_(out);
var state_32312__$1 = (function (){var statearr_32330 = state_32312;
(statearr_32330[(13)] = inst_32305);

return statearr_32330;
})();
var statearr_32331_33291 = state_32312__$1;
(statearr_32331_33291[(2)] = inst_32306);

(statearr_32331_33291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (10))){
var inst_32296 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32332_33296 = state_32312__$1;
(statearr_32332_33296[(2)] = inst_32296);

(statearr_32332_33296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (8))){
var inst_32276 = (state_32312[(8)]);
var inst_32285 = (state_32312[(11)]);
var tmp32329 = inst_32276;
var inst_32276__$1 = tmp32329;
var inst_32277 = inst_32285;
var state_32312__$1 = (function (){var statearr_32333 = state_32312;
(statearr_32333[(7)] = inst_32277);

(statearr_32333[(8)] = inst_32276__$1);

return statearr_32333;
})();
var statearr_32334_33297 = state_32312__$1;
(statearr_32334_33297[(2)] = null);

(statearr_32334_33297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__30218__auto__ = null;
var cljs$core$async$state_machine__30218__auto____0 = (function (){
var statearr_32335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32335[(0)] = cljs$core$async$state_machine__30218__auto__);

(statearr_32335[(1)] = (1));

return statearr_32335;
});
var cljs$core$async$state_machine__30218__auto____1 = (function (state_32312){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_32312);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e32336){if((e32336 instanceof Object)){
var ex__30221__auto__ = e32336;
var statearr_32337_33309 = state_32312;
(statearr_32337_33309[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33310 = state_32312;
state_32312 = G__33310;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$state_machine__30218__auto__ = function(state_32312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30218__auto____1.call(this,state_32312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30218__auto____0;
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30218__auto____1;
return cljs$core$async$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32338 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_32338[(6)] = c__30529__auto___33264);

return statearr_32338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32340 = arguments.length;
switch (G__32340) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30529__auto___33316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30530__auto__ = (function (){var switch__30217__auto__ = (function (state_32382){
var state_val_32383 = (state_32382[(1)]);
if((state_val_32383 === (7))){
var inst_32378 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32384_33317 = state_32382__$1;
(statearr_32384_33317[(2)] = inst_32378);

(statearr_32384_33317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (1))){
var inst_32341 = [];
var inst_32342 = inst_32341;
var inst_32343 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32382__$1 = (function (){var statearr_32385 = state_32382;
(statearr_32385[(7)] = inst_32343);

(statearr_32385[(8)] = inst_32342);

return statearr_32385;
})();
var statearr_32386_33318 = state_32382__$1;
(statearr_32386_33318[(2)] = null);

(statearr_32386_33318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (4))){
var inst_32346 = (state_32382[(9)]);
var inst_32346__$1 = (state_32382[(2)]);
var inst_32347 = (inst_32346__$1 == null);
var inst_32348 = cljs.core.not(inst_32347);
var state_32382__$1 = (function (){var statearr_32387 = state_32382;
(statearr_32387[(9)] = inst_32346__$1);

return statearr_32387;
})();
if(inst_32348){
var statearr_32388_33319 = state_32382__$1;
(statearr_32388_33319[(1)] = (5));

} else {
var statearr_32389_33320 = state_32382__$1;
(statearr_32389_33320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (15))){
var inst_32372 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32390_33321 = state_32382__$1;
(statearr_32390_33321[(2)] = inst_32372);

(statearr_32390_33321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (13))){
var state_32382__$1 = state_32382;
var statearr_32391_33322 = state_32382__$1;
(statearr_32391_33322[(2)] = null);

(statearr_32391_33322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (6))){
var inst_32342 = (state_32382[(8)]);
var inst_32367 = inst_32342.length;
var inst_32368 = (inst_32367 > (0));
var state_32382__$1 = state_32382;
if(cljs.core.truth_(inst_32368)){
var statearr_32392_33323 = state_32382__$1;
(statearr_32392_33323[(1)] = (12));

} else {
var statearr_32393_33324 = state_32382__$1;
(statearr_32393_33324[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (3))){
var inst_32380 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32382__$1,inst_32380);
} else {
if((state_val_32383 === (12))){
var inst_32342 = (state_32382[(8)]);
var inst_32370 = cljs.core.vec(inst_32342);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32382__$1,(15),out,inst_32370);
} else {
if((state_val_32383 === (2))){
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32382__$1,(4),ch);
} else {
if((state_val_32383 === (11))){
var inst_32350 = (state_32382[(10)]);
var inst_32346 = (state_32382[(9)]);
var inst_32360 = (state_32382[(2)]);
var inst_32361 = [];
var inst_32362 = inst_32361.push(inst_32346);
var inst_32342 = inst_32361;
var inst_32343 = inst_32350;
var state_32382__$1 = (function (){var statearr_32394 = state_32382;
(statearr_32394[(7)] = inst_32343);

(statearr_32394[(11)] = inst_32360);

(statearr_32394[(12)] = inst_32362);

(statearr_32394[(8)] = inst_32342);

return statearr_32394;
})();
var statearr_32395_33326 = state_32382__$1;
(statearr_32395_33326[(2)] = null);

(statearr_32395_33326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (9))){
var inst_32342 = (state_32382[(8)]);
var inst_32358 = cljs.core.vec(inst_32342);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32382__$1,(11),out,inst_32358);
} else {
if((state_val_32383 === (5))){
var inst_32350 = (state_32382[(10)]);
var inst_32343 = (state_32382[(7)]);
var inst_32346 = (state_32382[(9)]);
var inst_32350__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32346) : f.call(null,inst_32346));
var inst_32351 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32350__$1,inst_32343);
var inst_32352 = cljs.core.keyword_identical_QMARK_(inst_32343,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32353 = ((inst_32351) || (inst_32352));
var state_32382__$1 = (function (){var statearr_32396 = state_32382;
(statearr_32396[(10)] = inst_32350__$1);

return statearr_32396;
})();
if(cljs.core.truth_(inst_32353)){
var statearr_32397_33327 = state_32382__$1;
(statearr_32397_33327[(1)] = (8));

} else {
var statearr_32398_33328 = state_32382__$1;
(statearr_32398_33328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (14))){
var inst_32375 = (state_32382[(2)]);
var inst_32376 = cljs.core.async.close_BANG_(out);
var state_32382__$1 = (function (){var statearr_32400 = state_32382;
(statearr_32400[(13)] = inst_32375);

return statearr_32400;
})();
var statearr_32401_33329 = state_32382__$1;
(statearr_32401_33329[(2)] = inst_32376);

(statearr_32401_33329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (10))){
var inst_32365 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32402_33330 = state_32382__$1;
(statearr_32402_33330[(2)] = inst_32365);

(statearr_32402_33330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (8))){
var inst_32350 = (state_32382[(10)]);
var inst_32346 = (state_32382[(9)]);
var inst_32342 = (state_32382[(8)]);
var inst_32355 = inst_32342.push(inst_32346);
var tmp32399 = inst_32342;
var inst_32342__$1 = tmp32399;
var inst_32343 = inst_32350;
var state_32382__$1 = (function (){var statearr_32403 = state_32382;
(statearr_32403[(14)] = inst_32355);

(statearr_32403[(7)] = inst_32343);

(statearr_32403[(8)] = inst_32342__$1);

return statearr_32403;
})();
var statearr_32404_33331 = state_32382__$1;
(statearr_32404_33331[(2)] = null);

(statearr_32404_33331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__30218__auto__ = null;
var cljs$core$async$state_machine__30218__auto____0 = (function (){
var statearr_32405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32405[(0)] = cljs$core$async$state_machine__30218__auto__);

(statearr_32405[(1)] = (1));

return statearr_32405;
});
var cljs$core$async$state_machine__30218__auto____1 = (function (state_32382){
while(true){
var ret_value__30219__auto__ = (function (){try{while(true){
var result__30220__auto__ = switch__30217__auto__(state_32382);
if(cljs.core.keyword_identical_QMARK_(result__30220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30220__auto__;
}
break;
}
}catch (e32406){if((e32406 instanceof Object)){
var ex__30221__auto__ = e32406;
var statearr_32407_33342 = state_32382;
(statearr_32407_33342[(5)] = ex__30221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33343 = state_32382;
state_32382 = G__33343;
continue;
} else {
return ret_value__30219__auto__;
}
break;
}
});
cljs$core$async$state_machine__30218__auto__ = function(state_32382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30218__auto____1.call(this,state_32382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30218__auto____0;
cljs$core$async$state_machine__30218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30218__auto____1;
return cljs$core$async$state_machine__30218__auto__;
})()
})();
var state__30531__auto__ = (function (){var statearr_32408 = (f__30530__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30530__auto__.cljs$core$IFn$_invoke$arity$0() : f__30530__auto__.call(null));
(statearr_32408[(6)] = c__30529__auto___33316);

return statearr_32408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30531__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
