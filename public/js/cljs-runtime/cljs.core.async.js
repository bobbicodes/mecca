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
var G__34404 = arguments.length;
switch (G__34404) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34405 = (function (f,blockable,meta34406){
this.f = f;
this.blockable = blockable;
this.meta34406 = meta34406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34407,meta34406__$1){
var self__ = this;
var _34407__$1 = this;
return (new cljs.core.async.t_cljs$core$async34405(self__.f,self__.blockable,meta34406__$1));
}));

(cljs.core.async.t_cljs$core$async34405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34407){
var self__ = this;
var _34407__$1 = this;
return self__.meta34406;
}));

(cljs.core.async.t_cljs$core$async34405.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34405.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34406","meta34406",-631664971,null)], null);
}));

(cljs.core.async.t_cljs$core$async34405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34405");

(cljs.core.async.t_cljs$core$async34405.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34405.
 */
cljs.core.async.__GT_t_cljs$core$async34405 = (function cljs$core$async$__GT_t_cljs$core$async34405(f__$1,blockable__$1,meta34406){
return (new cljs.core.async.t_cljs$core$async34405(f__$1,blockable__$1,meta34406));
});

}

return (new cljs.core.async.t_cljs$core$async34405(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34425 = arguments.length;
switch (G__34425) {
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
var G__34435 = arguments.length;
switch (G__34435) {
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
var G__34459 = arguments.length;
switch (G__34459) {
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
var val_36502 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36502) : fn1.call(null,val_36502));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36502) : fn1.call(null,val_36502));
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
var G__34499 = arguments.length;
switch (G__34499) {
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
var n__4666__auto___36511 = n;
var x_36512 = (0);
while(true){
if((x_36512 < n__4666__auto___36511)){
(a[x_36512] = x_36512);

var G__36518 = (x_36512 + (1));
x_36512 = G__36518;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34554 = (function (flag,meta34555){
this.flag = flag;
this.meta34555 = meta34555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34556,meta34555__$1){
var self__ = this;
var _34556__$1 = this;
return (new cljs.core.async.t_cljs$core$async34554(self__.flag,meta34555__$1));
}));

(cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34556){
var self__ = this;
var _34556__$1 = this;
return self__.meta34555;
}));

(cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34555","meta34555",190907183,null)], null);
}));

(cljs.core.async.t_cljs$core$async34554.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34554");

(cljs.core.async.t_cljs$core$async34554.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34554");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34554.
 */
cljs.core.async.__GT_t_cljs$core$async34554 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34554(flag__$1,meta34555){
return (new cljs.core.async.t_cljs$core$async34554(flag__$1,meta34555));
});

}

return (new cljs.core.async.t_cljs$core$async34554(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34565 = (function (flag,cb,meta34566){
this.flag = flag;
this.cb = cb;
this.meta34566 = meta34566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34567,meta34566__$1){
var self__ = this;
var _34567__$1 = this;
return (new cljs.core.async.t_cljs$core$async34565(self__.flag,self__.cb,meta34566__$1));
}));

(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34567){
var self__ = this;
var _34567__$1 = this;
return self__.meta34566;
}));

(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34566","meta34566",-1425621575,null)], null);
}));

(cljs.core.async.t_cljs$core$async34565.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34565");

(cljs.core.async.t_cljs$core$async34565.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34565");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34565.
 */
cljs.core.async.__GT_t_cljs$core$async34565 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34565(flag__$1,cb__$1,meta34566){
return (new cljs.core.async.t_cljs$core$async34565(flag__$1,cb__$1,meta34566));
});

}

return (new cljs.core.async.t_cljs$core$async34565(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34580_SHARP_){
var G__34582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34580_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34582) : fret.call(null,G__34582));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34581_SHARP_){
var G__34583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34581_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34583) : fret.call(null,G__34583));
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
var G__36535 = (i + (1));
i = G__36535;
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
var len__4789__auto___36536 = arguments.length;
var i__4790__auto___36537 = (0);
while(true){
if((i__4790__auto___36537 < len__4789__auto___36536)){
args__4795__auto__.push((arguments[i__4790__auto___36537]));

var G__36538 = (i__4790__auto___36537 + (1));
i__4790__auto___36537 = G__36538;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34588){
var map__34589 = p__34588;
var map__34589__$1 = (((((!((map__34589 == null))))?(((((map__34589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34589):map__34589);
var opts = map__34589__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34585){
var G__34586 = cljs.core.first(seq34585);
var seq34585__$1 = cljs.core.next(seq34585);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34586,seq34585__$1);
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
var G__34594 = arguments.length;
switch (G__34594) {
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
var c__34280__auto___36540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_34632){
var state_val_34633 = (state_34632[(1)]);
if((state_val_34633 === (7))){
var inst_34627 = (state_34632[(2)]);
var state_34632__$1 = state_34632;
var statearr_34646_36541 = state_34632__$1;
(statearr_34646_36541[(2)] = inst_34627);

(statearr_34646_36541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (1))){
var state_34632__$1 = state_34632;
var statearr_34647_36542 = state_34632__$1;
(statearr_34647_36542[(2)] = null);

(statearr_34647_36542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (4))){
var inst_34610 = (state_34632[(7)]);
var inst_34610__$1 = (state_34632[(2)]);
var inst_34611 = (inst_34610__$1 == null);
var state_34632__$1 = (function (){var statearr_34657 = state_34632;
(statearr_34657[(7)] = inst_34610__$1);

return statearr_34657;
})();
if(cljs.core.truth_(inst_34611)){
var statearr_34659_36552 = state_34632__$1;
(statearr_34659_36552[(1)] = (5));

} else {
var statearr_34664_36553 = state_34632__$1;
(statearr_34664_36553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (13))){
var state_34632__$1 = state_34632;
var statearr_34665_36554 = state_34632__$1;
(statearr_34665_36554[(2)] = null);

(statearr_34665_36554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (6))){
var inst_34610 = (state_34632[(7)]);
var state_34632__$1 = state_34632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34632__$1,(11),to,inst_34610);
} else {
if((state_val_34633 === (3))){
var inst_34630 = (state_34632[(2)]);
var state_34632__$1 = state_34632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34632__$1,inst_34630);
} else {
if((state_val_34633 === (12))){
var state_34632__$1 = state_34632;
var statearr_34666_36555 = state_34632__$1;
(statearr_34666_36555[(2)] = null);

(statearr_34666_36555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (2))){
var state_34632__$1 = state_34632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34632__$1,(4),from);
} else {
if((state_val_34633 === (11))){
var inst_34620 = (state_34632[(2)]);
var state_34632__$1 = state_34632;
if(cljs.core.truth_(inst_34620)){
var statearr_34667_36556 = state_34632__$1;
(statearr_34667_36556[(1)] = (12));

} else {
var statearr_34668_36557 = state_34632__$1;
(statearr_34668_36557[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (9))){
var state_34632__$1 = state_34632;
var statearr_34669_36558 = state_34632__$1;
(statearr_34669_36558[(2)] = null);

(statearr_34669_36558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (5))){
var state_34632__$1 = state_34632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34670_36559 = state_34632__$1;
(statearr_34670_36559[(1)] = (8));

} else {
var statearr_34671_36560 = state_34632__$1;
(statearr_34671_36560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (14))){
var inst_34625 = (state_34632[(2)]);
var state_34632__$1 = state_34632;
var statearr_34672_36561 = state_34632__$1;
(statearr_34672_36561[(2)] = inst_34625);

(statearr_34672_36561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (10))){
var inst_34617 = (state_34632[(2)]);
var state_34632__$1 = state_34632;
var statearr_34673_36563 = state_34632__$1;
(statearr_34673_36563[(2)] = inst_34617);

(statearr_34673_36563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34633 === (8))){
var inst_34614 = cljs.core.async.close_BANG_(to);
var state_34632__$1 = state_34632;
var statearr_34674_36565 = state_34632__$1;
(statearr_34674_36565[(2)] = inst_34614);

(statearr_34674_36565[(1)] = (10));


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
var cljs$core$async$state_machine__33893__auto__ = null;
var cljs$core$async$state_machine__33893__auto____0 = (function (){
var statearr_34675 = [null,null,null,null,null,null,null,null];
(statearr_34675[(0)] = cljs$core$async$state_machine__33893__auto__);

(statearr_34675[(1)] = (1));

return statearr_34675;
});
var cljs$core$async$state_machine__33893__auto____1 = (function (state_34632){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_34632);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e34676){if((e34676 instanceof Object)){
var ex__33896__auto__ = e34676;
var statearr_34677_36566 = state_34632;
(statearr_34677_36566[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34676;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36567 = state_34632;
state_34632 = G__36567;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$state_machine__33893__auto__ = function(state_34632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33893__auto____1.call(this,state_34632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33893__auto____0;
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33893__auto____1;
return cljs$core$async$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_34679 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_34679[(6)] = c__34280__auto___36540);

return statearr_34679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
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
var process = (function (p__34680){
var vec__34681 = p__34680;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34681,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34681,(1),null);
var job = vec__34681;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34280__auto___36570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_34688){
var state_val_34689 = (state_34688[(1)]);
if((state_val_34689 === (1))){
var state_34688__$1 = state_34688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34688__$1,(2),res,v);
} else {
if((state_val_34689 === (2))){
var inst_34685 = (state_34688[(2)]);
var inst_34686 = cljs.core.async.close_BANG_(res);
var state_34688__$1 = (function (){var statearr_34690 = state_34688;
(statearr_34690[(7)] = inst_34685);

return statearr_34690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34688__$1,inst_34686);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0 = (function (){
var statearr_34691 = [null,null,null,null,null,null,null,null];
(statearr_34691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__);

(statearr_34691[(1)] = (1));

return statearr_34691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1 = (function (state_34688){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_34688);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e34692){if((e34692 instanceof Object)){
var ex__33896__auto__ = e34692;
var statearr_34693_36575 = state_34688;
(statearr_34693_36575[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36576 = state_34688;
state_34688 = G__36576;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__ = function(state_34688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1.call(this,state_34688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_34694 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_34694[(6)] = c__34280__auto___36570);

return statearr_34694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34695){
var vec__34696 = p__34695;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34696,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34696,(1),null);
var job = vec__34696;
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
var n__4666__auto___36581 = n;
var __36582 = (0);
while(true){
if((__36582 < n__4666__auto___36581)){
var G__34699_36583 = type;
var G__34699_36584__$1 = (((G__34699_36583 instanceof cljs.core.Keyword))?G__34699_36583.fqn:null);
switch (G__34699_36584__$1) {
case "compute":
var c__34280__auto___36586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36582,c__34280__auto___36586,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async){
return (function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = ((function (__36582,c__34280__auto___36586,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async){
return (function (state_34713){
var state_val_34714 = (state_34713[(1)]);
if((state_val_34714 === (1))){
var state_34713__$1 = state_34713;
var statearr_34715_36587 = state_34713__$1;
(statearr_34715_36587[(2)] = null);

(statearr_34715_36587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (2))){
var state_34713__$1 = state_34713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34713__$1,(4),jobs);
} else {
if((state_val_34714 === (3))){
var inst_34711 = (state_34713[(2)]);
var state_34713__$1 = state_34713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34713__$1,inst_34711);
} else {
if((state_val_34714 === (4))){
var inst_34703 = (state_34713[(2)]);
var inst_34704 = process(inst_34703);
var state_34713__$1 = state_34713;
if(cljs.core.truth_(inst_34704)){
var statearr_34716_36590 = state_34713__$1;
(statearr_34716_36590[(1)] = (5));

} else {
var statearr_34717_36591 = state_34713__$1;
(statearr_34717_36591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (5))){
var state_34713__$1 = state_34713;
var statearr_34718_36592 = state_34713__$1;
(statearr_34718_36592[(2)] = null);

(statearr_34718_36592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (6))){
var state_34713__$1 = state_34713;
var statearr_34719_36593 = state_34713__$1;
(statearr_34719_36593[(2)] = null);

(statearr_34719_36593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (7))){
var inst_34709 = (state_34713[(2)]);
var state_34713__$1 = state_34713;
var statearr_34720_36594 = state_34713__$1;
(statearr_34720_36594[(2)] = inst_34709);

(statearr_34720_36594[(1)] = (3));


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
});})(__36582,c__34280__auto___36586,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async))
;
return ((function (__36582,switch__33892__auto__,c__34280__auto___36586,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0 = (function (){
var statearr_34721 = [null,null,null,null,null,null,null];
(statearr_34721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__);

(statearr_34721[(1)] = (1));

return statearr_34721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1 = (function (state_34713){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_34713);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e34722){if((e34722 instanceof Object)){
var ex__33896__auto__ = e34722;
var statearr_34723_36595 = state_34713;
(statearr_34723_36595[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36596 = state_34713;
state_34713 = G__36596;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__ = function(state_34713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1.call(this,state_34713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__;
})()
;})(__36582,switch__33892__auto__,c__34280__auto___36586,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async))
})();
var state__34282__auto__ = (function (){var statearr_34724 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_34724[(6)] = c__34280__auto___36586);

return statearr_34724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
});})(__36582,c__34280__auto___36586,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async))
);


break;
case "async":
var c__34280__auto___36597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36582,c__34280__auto___36597,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async){
return (function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = ((function (__36582,c__34280__auto___36597,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async){
return (function (state_34737){
var state_val_34738 = (state_34737[(1)]);
if((state_val_34738 === (1))){
var state_34737__$1 = state_34737;
var statearr_34739_36598 = state_34737__$1;
(statearr_34739_36598[(2)] = null);

(statearr_34739_36598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (2))){
var state_34737__$1 = state_34737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34737__$1,(4),jobs);
} else {
if((state_val_34738 === (3))){
var inst_34735 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34737__$1,inst_34735);
} else {
if((state_val_34738 === (4))){
var inst_34727 = (state_34737[(2)]);
var inst_34728 = async(inst_34727);
var state_34737__$1 = state_34737;
if(cljs.core.truth_(inst_34728)){
var statearr_34741_36599 = state_34737__$1;
(statearr_34741_36599[(1)] = (5));

} else {
var statearr_34742_36600 = state_34737__$1;
(statearr_34742_36600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (5))){
var state_34737__$1 = state_34737;
var statearr_34743_36601 = state_34737__$1;
(statearr_34743_36601[(2)] = null);

(statearr_34743_36601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (6))){
var state_34737__$1 = state_34737;
var statearr_34744_36602 = state_34737__$1;
(statearr_34744_36602[(2)] = null);

(statearr_34744_36602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (7))){
var inst_34733 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
var statearr_34745_36603 = state_34737__$1;
(statearr_34745_36603[(2)] = inst_34733);

(statearr_34745_36603[(1)] = (3));


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
});})(__36582,c__34280__auto___36597,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async))
;
return ((function (__36582,switch__33892__auto__,c__34280__auto___36597,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0 = (function (){
var statearr_34746 = [null,null,null,null,null,null,null];
(statearr_34746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__);

(statearr_34746[(1)] = (1));

return statearr_34746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1 = (function (state_34737){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_34737);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e34747){if((e34747 instanceof Object)){
var ex__33896__auto__ = e34747;
var statearr_34748_36604 = state_34737;
(statearr_34748_36604[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36605 = state_34737;
state_34737 = G__36605;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__ = function(state_34737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1.call(this,state_34737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__;
})()
;})(__36582,switch__33892__auto__,c__34280__auto___36597,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async))
})();
var state__34282__auto__ = (function (){var statearr_34749 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_34749[(6)] = c__34280__auto___36597);

return statearr_34749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
});})(__36582,c__34280__auto___36597,G__34699_36583,G__34699_36584__$1,n__4666__auto___36581,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34699_36584__$1)].join('')));

}

var G__36606 = (__36582 + (1));
__36582 = G__36606;
continue;
} else {
}
break;
}

var c__34280__auto___36607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_34771){
var state_val_34772 = (state_34771[(1)]);
if((state_val_34772 === (7))){
var inst_34767 = (state_34771[(2)]);
var state_34771__$1 = state_34771;
var statearr_34774_36608 = state_34771__$1;
(statearr_34774_36608[(2)] = inst_34767);

(statearr_34774_36608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34772 === (1))){
var state_34771__$1 = state_34771;
var statearr_34775_36609 = state_34771__$1;
(statearr_34775_36609[(2)] = null);

(statearr_34775_36609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34772 === (4))){
var inst_34752 = (state_34771[(7)]);
var inst_34752__$1 = (state_34771[(2)]);
var inst_34753 = (inst_34752__$1 == null);
var state_34771__$1 = (function (){var statearr_34776 = state_34771;
(statearr_34776[(7)] = inst_34752__$1);

return statearr_34776;
})();
if(cljs.core.truth_(inst_34753)){
var statearr_34777_36610 = state_34771__$1;
(statearr_34777_36610[(1)] = (5));

} else {
var statearr_34778_36611 = state_34771__$1;
(statearr_34778_36611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34772 === (6))){
var inst_34757 = (state_34771[(8)]);
var inst_34752 = (state_34771[(7)]);
var inst_34757__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34759 = [inst_34752,inst_34757__$1];
var inst_34760 = (new cljs.core.PersistentVector(null,2,(5),inst_34758,inst_34759,null));
var state_34771__$1 = (function (){var statearr_34779 = state_34771;
(statearr_34779[(8)] = inst_34757__$1);

return statearr_34779;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34771__$1,(8),jobs,inst_34760);
} else {
if((state_val_34772 === (3))){
var inst_34769 = (state_34771[(2)]);
var state_34771__$1 = state_34771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34771__$1,inst_34769);
} else {
if((state_val_34772 === (2))){
var state_34771__$1 = state_34771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34771__$1,(4),from);
} else {
if((state_val_34772 === (9))){
var inst_34764 = (state_34771[(2)]);
var state_34771__$1 = (function (){var statearr_34780 = state_34771;
(statearr_34780[(9)] = inst_34764);

return statearr_34780;
})();
var statearr_34781_36612 = state_34771__$1;
(statearr_34781_36612[(2)] = null);

(statearr_34781_36612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34772 === (5))){
var inst_34755 = cljs.core.async.close_BANG_(jobs);
var state_34771__$1 = state_34771;
var statearr_34782_36613 = state_34771__$1;
(statearr_34782_36613[(2)] = inst_34755);

(statearr_34782_36613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34772 === (8))){
var inst_34757 = (state_34771[(8)]);
var inst_34762 = (state_34771[(2)]);
var state_34771__$1 = (function (){var statearr_34783 = state_34771;
(statearr_34783[(10)] = inst_34762);

return statearr_34783;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34771__$1,(9),results,inst_34757);
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
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0 = (function (){
var statearr_34784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__);

(statearr_34784[(1)] = (1));

return statearr_34784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1 = (function (state_34771){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_34771);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e34785){if((e34785 instanceof Object)){
var ex__33896__auto__ = e34785;
var statearr_34786_36614 = state_34771;
(statearr_34786_36614[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36615 = state_34771;
state_34771 = G__36615;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__ = function(state_34771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1.call(this,state_34771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_34792 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_34792[(6)] = c__34280__auto___36607);

return statearr_34792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));


var c__34280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_34830){
var state_val_34831 = (state_34830[(1)]);
if((state_val_34831 === (7))){
var inst_34826 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34832_36618 = state_34830__$1;
(statearr_34832_36618[(2)] = inst_34826);

(statearr_34832_36618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (20))){
var state_34830__$1 = state_34830;
var statearr_34833_36619 = state_34830__$1;
(statearr_34833_36619[(2)] = null);

(statearr_34833_36619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (1))){
var state_34830__$1 = state_34830;
var statearr_34836_36620 = state_34830__$1;
(statearr_34836_36620[(2)] = null);

(statearr_34836_36620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (4))){
var inst_34795 = (state_34830[(7)]);
var inst_34795__$1 = (state_34830[(2)]);
var inst_34796 = (inst_34795__$1 == null);
var state_34830__$1 = (function (){var statearr_34838 = state_34830;
(statearr_34838[(7)] = inst_34795__$1);

return statearr_34838;
})();
if(cljs.core.truth_(inst_34796)){
var statearr_34839_36621 = state_34830__$1;
(statearr_34839_36621[(1)] = (5));

} else {
var statearr_34840_36622 = state_34830__$1;
(statearr_34840_36622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (15))){
var inst_34808 = (state_34830[(8)]);
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34830__$1,(18),to,inst_34808);
} else {
if((state_val_34831 === (21))){
var inst_34821 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34841_36623 = state_34830__$1;
(statearr_34841_36623[(2)] = inst_34821);

(statearr_34841_36623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (13))){
var inst_34823 = (state_34830[(2)]);
var state_34830__$1 = (function (){var statearr_34845 = state_34830;
(statearr_34845[(9)] = inst_34823);

return statearr_34845;
})();
var statearr_34847_36625 = state_34830__$1;
(statearr_34847_36625[(2)] = null);

(statearr_34847_36625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (6))){
var inst_34795 = (state_34830[(7)]);
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34830__$1,(11),inst_34795);
} else {
if((state_val_34831 === (17))){
var inst_34816 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
if(cljs.core.truth_(inst_34816)){
var statearr_34849_36626 = state_34830__$1;
(statearr_34849_36626[(1)] = (19));

} else {
var statearr_34850_36627 = state_34830__$1;
(statearr_34850_36627[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (3))){
var inst_34828 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34830__$1,inst_34828);
} else {
if((state_val_34831 === (12))){
var inst_34805 = (state_34830[(10)]);
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34830__$1,(14),inst_34805);
} else {
if((state_val_34831 === (2))){
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34830__$1,(4),results);
} else {
if((state_val_34831 === (19))){
var state_34830__$1 = state_34830;
var statearr_34854_36628 = state_34830__$1;
(statearr_34854_36628[(2)] = null);

(statearr_34854_36628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (11))){
var inst_34805 = (state_34830[(2)]);
var state_34830__$1 = (function (){var statearr_34855 = state_34830;
(statearr_34855[(10)] = inst_34805);

return statearr_34855;
})();
var statearr_34858_36629 = state_34830__$1;
(statearr_34858_36629[(2)] = null);

(statearr_34858_36629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (9))){
var state_34830__$1 = state_34830;
var statearr_34859_36630 = state_34830__$1;
(statearr_34859_36630[(2)] = null);

(statearr_34859_36630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (5))){
var state_34830__$1 = state_34830;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34860_36635 = state_34830__$1;
(statearr_34860_36635[(1)] = (8));

} else {
var statearr_34861_36636 = state_34830__$1;
(statearr_34861_36636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (14))){
var inst_34808 = (state_34830[(8)]);
var inst_34808__$1 = (state_34830[(2)]);
var inst_34809 = (inst_34808__$1 == null);
var inst_34810 = cljs.core.not(inst_34809);
var state_34830__$1 = (function (){var statearr_34867 = state_34830;
(statearr_34867[(8)] = inst_34808__$1);

return statearr_34867;
})();
if(inst_34810){
var statearr_34868_36637 = state_34830__$1;
(statearr_34868_36637[(1)] = (15));

} else {
var statearr_34870_36641 = state_34830__$1;
(statearr_34870_36641[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (16))){
var state_34830__$1 = state_34830;
var statearr_34874_36642 = state_34830__$1;
(statearr_34874_36642[(2)] = false);

(statearr_34874_36642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (10))){
var inst_34802 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34880_36643 = state_34830__$1;
(statearr_34880_36643[(2)] = inst_34802);

(statearr_34880_36643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (18))){
var inst_34813 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34882_36644 = state_34830__$1;
(statearr_34882_36644[(2)] = inst_34813);

(statearr_34882_36644[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (8))){
var inst_34799 = cljs.core.async.close_BANG_(to);
var state_34830__$1 = state_34830;
var statearr_34889_36645 = state_34830__$1;
(statearr_34889_36645[(2)] = inst_34799);

(statearr_34889_36645[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0 = (function (){
var statearr_34892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__);

(statearr_34892[(1)] = (1));

return statearr_34892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1 = (function (state_34830){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_34830);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e34893){if((e34893 instanceof Object)){
var ex__33896__auto__ = e34893;
var statearr_34894_36646 = state_34830;
(statearr_34894_36646[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36647 = state_34830;
state_34830 = G__36647;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__ = function(state_34830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1.call(this,state_34830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_34904 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_34904[(6)] = c__34280__auto__);

return statearr_34904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));

return c__34280__auto__;
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
var G__34906 = arguments.length;
switch (G__34906) {
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
var G__34911 = arguments.length;
switch (G__34911) {
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
var G__34914 = arguments.length;
switch (G__34914) {
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
var c__34280__auto___36651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_34945){
var state_val_34946 = (state_34945[(1)]);
if((state_val_34946 === (7))){
var inst_34941 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34960_36652 = state_34945__$1;
(statearr_34960_36652[(2)] = inst_34941);

(statearr_34960_36652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (1))){
var state_34945__$1 = state_34945;
var statearr_34961_36653 = state_34945__$1;
(statearr_34961_36653[(2)] = null);

(statearr_34961_36653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (4))){
var inst_34918 = (state_34945[(7)]);
var inst_34918__$1 = (state_34945[(2)]);
var inst_34919 = (inst_34918__$1 == null);
var state_34945__$1 = (function (){var statearr_34962 = state_34945;
(statearr_34962[(7)] = inst_34918__$1);

return statearr_34962;
})();
if(cljs.core.truth_(inst_34919)){
var statearr_34963_36654 = state_34945__$1;
(statearr_34963_36654[(1)] = (5));

} else {
var statearr_34964_36655 = state_34945__$1;
(statearr_34964_36655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (13))){
var state_34945__$1 = state_34945;
var statearr_34965_36656 = state_34945__$1;
(statearr_34965_36656[(2)] = null);

(statearr_34965_36656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (6))){
var inst_34918 = (state_34945[(7)]);
var inst_34924 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34918) : p.call(null,inst_34918));
var state_34945__$1 = state_34945;
if(cljs.core.truth_(inst_34924)){
var statearr_34966_36657 = state_34945__$1;
(statearr_34966_36657[(1)] = (9));

} else {
var statearr_34967_36658 = state_34945__$1;
(statearr_34967_36658[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (3))){
var inst_34943 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34945__$1,inst_34943);
} else {
if((state_val_34946 === (12))){
var state_34945__$1 = state_34945;
var statearr_34968_36659 = state_34945__$1;
(statearr_34968_36659[(2)] = null);

(statearr_34968_36659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (2))){
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34945__$1,(4),ch);
} else {
if((state_val_34946 === (11))){
var inst_34918 = (state_34945[(7)]);
var inst_34928 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34945__$1,(8),inst_34928,inst_34918);
} else {
if((state_val_34946 === (9))){
var state_34945__$1 = state_34945;
var statearr_34970_36660 = state_34945__$1;
(statearr_34970_36660[(2)] = tc);

(statearr_34970_36660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (5))){
var inst_34921 = cljs.core.async.close_BANG_(tc);
var inst_34922 = cljs.core.async.close_BANG_(fc);
var state_34945__$1 = (function (){var statearr_34971 = state_34945;
(statearr_34971[(8)] = inst_34921);

return statearr_34971;
})();
var statearr_34972_36661 = state_34945__$1;
(statearr_34972_36661[(2)] = inst_34922);

(statearr_34972_36661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (14))){
var inst_34939 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34973_36662 = state_34945__$1;
(statearr_34973_36662[(2)] = inst_34939);

(statearr_34973_36662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (10))){
var state_34945__$1 = state_34945;
var statearr_34974_36663 = state_34945__$1;
(statearr_34974_36663[(2)] = fc);

(statearr_34974_36663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (8))){
var inst_34930 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
if(cljs.core.truth_(inst_34930)){
var statearr_34975_36664 = state_34945__$1;
(statearr_34975_36664[(1)] = (12));

} else {
var statearr_34976_36665 = state_34945__$1;
(statearr_34976_36665[(1)] = (13));

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
var cljs$core$async$state_machine__33893__auto__ = null;
var cljs$core$async$state_machine__33893__auto____0 = (function (){
var statearr_34977 = [null,null,null,null,null,null,null,null,null];
(statearr_34977[(0)] = cljs$core$async$state_machine__33893__auto__);

(statearr_34977[(1)] = (1));

return statearr_34977;
});
var cljs$core$async$state_machine__33893__auto____1 = (function (state_34945){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_34945);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e34978){if((e34978 instanceof Object)){
var ex__33896__auto__ = e34978;
var statearr_34979_36666 = state_34945;
(statearr_34979_36666[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36667 = state_34945;
state_34945 = G__36667;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$state_machine__33893__auto__ = function(state_34945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33893__auto____1.call(this,state_34945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33893__auto____0;
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33893__auto____1;
return cljs$core$async$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_34982 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_34982[(6)] = c__34280__auto___36651);

return statearr_34982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
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
var c__34280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_35020){
var state_val_35021 = (state_35020[(1)]);
if((state_val_35021 === (7))){
var inst_35016 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
var statearr_35026_36668 = state_35020__$1;
(statearr_35026_36668[(2)] = inst_35016);

(statearr_35026_36668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (1))){
var inst_34992 = init;
var state_35020__$1 = (function (){var statearr_35027 = state_35020;
(statearr_35027[(7)] = inst_34992);

return statearr_35027;
})();
var statearr_35028_36669 = state_35020__$1;
(statearr_35028_36669[(2)] = null);

(statearr_35028_36669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (4))){
var inst_34997 = (state_35020[(8)]);
var inst_34997__$1 = (state_35020[(2)]);
var inst_35003 = (inst_34997__$1 == null);
var state_35020__$1 = (function (){var statearr_35029 = state_35020;
(statearr_35029[(8)] = inst_34997__$1);

return statearr_35029;
})();
if(cljs.core.truth_(inst_35003)){
var statearr_35030_36670 = state_35020__$1;
(statearr_35030_36670[(1)] = (5));

} else {
var statearr_35031_36671 = state_35020__$1;
(statearr_35031_36671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (6))){
var inst_34997 = (state_35020[(8)]);
var inst_35007 = (state_35020[(9)]);
var inst_34992 = (state_35020[(7)]);
var inst_35007__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34992,inst_34997) : f.call(null,inst_34992,inst_34997));
var inst_35008 = cljs.core.reduced_QMARK_(inst_35007__$1);
var state_35020__$1 = (function (){var statearr_35032 = state_35020;
(statearr_35032[(9)] = inst_35007__$1);

return statearr_35032;
})();
if(inst_35008){
var statearr_35033_36672 = state_35020__$1;
(statearr_35033_36672[(1)] = (8));

} else {
var statearr_35034_36673 = state_35020__$1;
(statearr_35034_36673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (3))){
var inst_35018 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35020__$1,inst_35018);
} else {
if((state_val_35021 === (2))){
var state_35020__$1 = state_35020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35020__$1,(4),ch);
} else {
if((state_val_35021 === (9))){
var inst_35007 = (state_35020[(9)]);
var inst_34992 = inst_35007;
var state_35020__$1 = (function (){var statearr_35035 = state_35020;
(statearr_35035[(7)] = inst_34992);

return statearr_35035;
})();
var statearr_35036_36674 = state_35020__$1;
(statearr_35036_36674[(2)] = null);

(statearr_35036_36674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (5))){
var inst_34992 = (state_35020[(7)]);
var state_35020__$1 = state_35020;
var statearr_35037_36675 = state_35020__$1;
(statearr_35037_36675[(2)] = inst_34992);

(statearr_35037_36675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (10))){
var inst_35014 = (state_35020[(2)]);
var state_35020__$1 = state_35020;
var statearr_35038_36676 = state_35020__$1;
(statearr_35038_36676[(2)] = inst_35014);

(statearr_35038_36676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35021 === (8))){
var inst_35007 = (state_35020[(9)]);
var inst_35010 = cljs.core.deref(inst_35007);
var state_35020__$1 = state_35020;
var statearr_35039_36677 = state_35020__$1;
(statearr_35039_36677[(2)] = inst_35010);

(statearr_35039_36677[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__33893__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33893__auto____0 = (function (){
var statearr_35040 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35040[(0)] = cljs$core$async$reduce_$_state_machine__33893__auto__);

(statearr_35040[(1)] = (1));

return statearr_35040;
});
var cljs$core$async$reduce_$_state_machine__33893__auto____1 = (function (state_35020){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_35020);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e35041){if((e35041 instanceof Object)){
var ex__33896__auto__ = e35041;
var statearr_35042_36678 = state_35020;
(statearr_35042_36678[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35041;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36679 = state_35020;
state_35020 = G__36679;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33893__auto__ = function(state_35020){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33893__auto____1.call(this,state_35020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33893__auto____0;
cljs$core$async$reduce_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33893__auto____1;
return cljs$core$async$reduce_$_state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_35043 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_35043[(6)] = c__34280__auto__);

return statearr_35043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));

return c__34280__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_35049){
var state_val_35050 = (state_35049[(1)]);
if((state_val_35050 === (1))){
var inst_35044 = cljs.core.async.reduce(f__$1,init,ch);
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35049__$1,(2),inst_35044);
} else {
if((state_val_35050 === (2))){
var inst_35046 = (state_35049[(2)]);
var inst_35047 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35046) : f__$1.call(null,inst_35046));
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35049__$1,inst_35047);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33893__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33893__auto____0 = (function (){
var statearr_35051 = [null,null,null,null,null,null,null];
(statearr_35051[(0)] = cljs$core$async$transduce_$_state_machine__33893__auto__);

(statearr_35051[(1)] = (1));

return statearr_35051;
});
var cljs$core$async$transduce_$_state_machine__33893__auto____1 = (function (state_35049){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_35049);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e35052){if((e35052 instanceof Object)){
var ex__33896__auto__ = e35052;
var statearr_35053_36680 = state_35049;
(statearr_35053_36680[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36681 = state_35049;
state_35049 = G__36681;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33893__auto__ = function(state_35049){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33893__auto____1.call(this,state_35049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33893__auto____0;
cljs$core$async$transduce_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33893__auto____1;
return cljs$core$async$transduce_$_state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_35057 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_35057[(6)] = c__34280__auto__);

return statearr_35057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));

return c__34280__auto__;
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
var G__35059 = arguments.length;
switch (G__35059) {
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
var c__34280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_35089){
var state_val_35090 = (state_35089[(1)]);
if((state_val_35090 === (7))){
var inst_35071 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35091_36747 = state_35089__$1;
(statearr_35091_36747[(2)] = inst_35071);

(statearr_35091_36747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (1))){
var inst_35062 = cljs.core.seq(coll);
var inst_35064 = inst_35062;
var state_35089__$1 = (function (){var statearr_35092 = state_35089;
(statearr_35092[(7)] = inst_35064);

return statearr_35092;
})();
var statearr_35093_36748 = state_35089__$1;
(statearr_35093_36748[(2)] = null);

(statearr_35093_36748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (4))){
var inst_35064 = (state_35089[(7)]);
var inst_35069 = cljs.core.first(inst_35064);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35089__$1,(7),ch,inst_35069);
} else {
if((state_val_35090 === (13))){
var inst_35083 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35094_36749 = state_35089__$1;
(statearr_35094_36749[(2)] = inst_35083);

(statearr_35094_36749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (6))){
var inst_35074 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35074)){
var statearr_35095_36750 = state_35089__$1;
(statearr_35095_36750[(1)] = (8));

} else {
var statearr_35096_36751 = state_35089__$1;
(statearr_35096_36751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (3))){
var inst_35087 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35089__$1,inst_35087);
} else {
if((state_val_35090 === (12))){
var state_35089__$1 = state_35089;
var statearr_35097_36752 = state_35089__$1;
(statearr_35097_36752[(2)] = null);

(statearr_35097_36752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (2))){
var inst_35064 = (state_35089[(7)]);
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35064)){
var statearr_35098_36753 = state_35089__$1;
(statearr_35098_36753[(1)] = (4));

} else {
var statearr_35099_36754 = state_35089__$1;
(statearr_35099_36754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (11))){
var inst_35080 = cljs.core.async.close_BANG_(ch);
var state_35089__$1 = state_35089;
var statearr_35100_36755 = state_35089__$1;
(statearr_35100_36755[(2)] = inst_35080);

(statearr_35100_36755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (9))){
var state_35089__$1 = state_35089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35101_36756 = state_35089__$1;
(statearr_35101_36756[(1)] = (11));

} else {
var statearr_35102_36757 = state_35089__$1;
(statearr_35102_36757[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (5))){
var inst_35064 = (state_35089[(7)]);
var state_35089__$1 = state_35089;
var statearr_35103_36758 = state_35089__$1;
(statearr_35103_36758[(2)] = inst_35064);

(statearr_35103_36758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (10))){
var inst_35085 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35104_36759 = state_35089__$1;
(statearr_35104_36759[(2)] = inst_35085);

(statearr_35104_36759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (8))){
var inst_35064 = (state_35089[(7)]);
var inst_35076 = cljs.core.next(inst_35064);
var inst_35064__$1 = inst_35076;
var state_35089__$1 = (function (){var statearr_35105 = state_35089;
(statearr_35105[(7)] = inst_35064__$1);

return statearr_35105;
})();
var statearr_35106_36760 = state_35089__$1;
(statearr_35106_36760[(2)] = null);

(statearr_35106_36760[(1)] = (2));


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
var cljs$core$async$state_machine__33893__auto__ = null;
var cljs$core$async$state_machine__33893__auto____0 = (function (){
var statearr_35107 = [null,null,null,null,null,null,null,null];
(statearr_35107[(0)] = cljs$core$async$state_machine__33893__auto__);

(statearr_35107[(1)] = (1));

return statearr_35107;
});
var cljs$core$async$state_machine__33893__auto____1 = (function (state_35089){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_35089);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e35108){if((e35108 instanceof Object)){
var ex__33896__auto__ = e35108;
var statearr_35109_36761 = state_35089;
(statearr_35109_36761[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36762 = state_35089;
state_35089 = G__36762;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$state_machine__33893__auto__ = function(state_35089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33893__auto____1.call(this,state_35089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33893__auto____0;
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33893__auto____1;
return cljs$core$async$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_35110 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_35110[(6)] = c__34280__auto__);

return statearr_35110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));

return c__34280__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35116 = (function (ch,cs,meta35117){
this.ch = ch;
this.cs = cs;
this.meta35117 = meta35117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35118,meta35117__$1){
var self__ = this;
var _35118__$1 = this;
return (new cljs.core.async.t_cljs$core$async35116(self__.ch,self__.cs,meta35117__$1));
}));

(cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35118){
var self__ = this;
var _35118__$1 = this;
return self__.meta35117;
}));

(cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35116.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35117","meta35117",1740278159,null)], null);
}));

(cljs.core.async.t_cljs$core$async35116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35116");

(cljs.core.async.t_cljs$core$async35116.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35116.
 */
cljs.core.async.__GT_t_cljs$core$async35116 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35116(ch__$1,cs__$1,meta35117){
return (new cljs.core.async.t_cljs$core$async35116(ch__$1,cs__$1,meta35117));
});

}

return (new cljs.core.async.t_cljs$core$async35116(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34280__auto___36763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_35264){
var state_val_35265 = (state_35264[(1)]);
if((state_val_35265 === (7))){
var inst_35260 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35266_36764 = state_35264__$1;
(statearr_35266_36764[(2)] = inst_35260);

(statearr_35266_36764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (20))){
var inst_35163 = (state_35264[(7)]);
var inst_35175 = cljs.core.first(inst_35163);
var inst_35176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35175,(0),null);
var inst_35177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35175,(1),null);
var state_35264__$1 = (function (){var statearr_35267 = state_35264;
(statearr_35267[(8)] = inst_35176);

return statearr_35267;
})();
if(cljs.core.truth_(inst_35177)){
var statearr_35268_36765 = state_35264__$1;
(statearr_35268_36765[(1)] = (22));

} else {
var statearr_35269_36766 = state_35264__$1;
(statearr_35269_36766[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (27))){
var inst_35212 = (state_35264[(9)]);
var inst_35207 = (state_35264[(10)]);
var inst_35205 = (state_35264[(11)]);
var inst_35132 = (state_35264[(12)]);
var inst_35212__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35205,inst_35207);
var inst_35213 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35212__$1,inst_35132,done);
var state_35264__$1 = (function (){var statearr_35270 = state_35264;
(statearr_35270[(9)] = inst_35212__$1);

return statearr_35270;
})();
if(cljs.core.truth_(inst_35213)){
var statearr_35271_36767 = state_35264__$1;
(statearr_35271_36767[(1)] = (30));

} else {
var statearr_35272_36768 = state_35264__$1;
(statearr_35272_36768[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (1))){
var state_35264__$1 = state_35264;
var statearr_35273_36769 = state_35264__$1;
(statearr_35273_36769[(2)] = null);

(statearr_35273_36769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (24))){
var inst_35163 = (state_35264[(7)]);
var inst_35182 = (state_35264[(2)]);
var inst_35183 = cljs.core.next(inst_35163);
var inst_35141 = inst_35183;
var inst_35142 = null;
var inst_35143 = (0);
var inst_35144 = (0);
var state_35264__$1 = (function (){var statearr_35274 = state_35264;
(statearr_35274[(13)] = inst_35142);

(statearr_35274[(14)] = inst_35144);

(statearr_35274[(15)] = inst_35143);

(statearr_35274[(16)] = inst_35182);

(statearr_35274[(17)] = inst_35141);

return statearr_35274;
})();
var statearr_35275_36770 = state_35264__$1;
(statearr_35275_36770[(2)] = null);

(statearr_35275_36770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (39))){
var state_35264__$1 = state_35264;
var statearr_35279_36771 = state_35264__$1;
(statearr_35279_36771[(2)] = null);

(statearr_35279_36771[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (4))){
var inst_35132 = (state_35264[(12)]);
var inst_35132__$1 = (state_35264[(2)]);
var inst_35133 = (inst_35132__$1 == null);
var state_35264__$1 = (function (){var statearr_35280 = state_35264;
(statearr_35280[(12)] = inst_35132__$1);

return statearr_35280;
})();
if(cljs.core.truth_(inst_35133)){
var statearr_35281_36772 = state_35264__$1;
(statearr_35281_36772[(1)] = (5));

} else {
var statearr_35282_36773 = state_35264__$1;
(statearr_35282_36773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (15))){
var inst_35142 = (state_35264[(13)]);
var inst_35144 = (state_35264[(14)]);
var inst_35143 = (state_35264[(15)]);
var inst_35141 = (state_35264[(17)]);
var inst_35159 = (state_35264[(2)]);
var inst_35160 = (inst_35144 + (1));
var tmp35276 = inst_35142;
var tmp35277 = inst_35143;
var tmp35278 = inst_35141;
var inst_35141__$1 = tmp35278;
var inst_35142__$1 = tmp35276;
var inst_35143__$1 = tmp35277;
var inst_35144__$1 = inst_35160;
var state_35264__$1 = (function (){var statearr_35283 = state_35264;
(statearr_35283[(18)] = inst_35159);

(statearr_35283[(13)] = inst_35142__$1);

(statearr_35283[(14)] = inst_35144__$1);

(statearr_35283[(15)] = inst_35143__$1);

(statearr_35283[(17)] = inst_35141__$1);

return statearr_35283;
})();
var statearr_35284_36774 = state_35264__$1;
(statearr_35284_36774[(2)] = null);

(statearr_35284_36774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (21))){
var inst_35186 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35288_36775 = state_35264__$1;
(statearr_35288_36775[(2)] = inst_35186);

(statearr_35288_36775[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (31))){
var inst_35212 = (state_35264[(9)]);
var inst_35216 = done(null);
var inst_35217 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35212);
var state_35264__$1 = (function (){var statearr_35289 = state_35264;
(statearr_35289[(19)] = inst_35216);

return statearr_35289;
})();
var statearr_35290_36776 = state_35264__$1;
(statearr_35290_36776[(2)] = inst_35217);

(statearr_35290_36776[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (32))){
var inst_35207 = (state_35264[(10)]);
var inst_35205 = (state_35264[(11)]);
var inst_35206 = (state_35264[(20)]);
var inst_35204 = (state_35264[(21)]);
var inst_35219 = (state_35264[(2)]);
var inst_35220 = (inst_35207 + (1));
var tmp35285 = inst_35205;
var tmp35286 = inst_35206;
var tmp35287 = inst_35204;
var inst_35204__$1 = tmp35287;
var inst_35205__$1 = tmp35285;
var inst_35206__$1 = tmp35286;
var inst_35207__$1 = inst_35220;
var state_35264__$1 = (function (){var statearr_35291 = state_35264;
(statearr_35291[(10)] = inst_35207__$1);

(statearr_35291[(22)] = inst_35219);

(statearr_35291[(11)] = inst_35205__$1);

(statearr_35291[(20)] = inst_35206__$1);

(statearr_35291[(21)] = inst_35204__$1);

return statearr_35291;
})();
var statearr_35292_36777 = state_35264__$1;
(statearr_35292_36777[(2)] = null);

(statearr_35292_36777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (40))){
var inst_35232 = (state_35264[(23)]);
var inst_35236 = done(null);
var inst_35237 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35232);
var state_35264__$1 = (function (){var statearr_35293 = state_35264;
(statearr_35293[(24)] = inst_35236);

return statearr_35293;
})();
var statearr_35294_36778 = state_35264__$1;
(statearr_35294_36778[(2)] = inst_35237);

(statearr_35294_36778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (33))){
var inst_35223 = (state_35264[(25)]);
var inst_35225 = cljs.core.chunked_seq_QMARK_(inst_35223);
var state_35264__$1 = state_35264;
if(inst_35225){
var statearr_35295_36779 = state_35264__$1;
(statearr_35295_36779[(1)] = (36));

} else {
var statearr_35296_36780 = state_35264__$1;
(statearr_35296_36780[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (13))){
var inst_35153 = (state_35264[(26)]);
var inst_35156 = cljs.core.async.close_BANG_(inst_35153);
var state_35264__$1 = state_35264;
var statearr_35297_36781 = state_35264__$1;
(statearr_35297_36781[(2)] = inst_35156);

(statearr_35297_36781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (22))){
var inst_35176 = (state_35264[(8)]);
var inst_35179 = cljs.core.async.close_BANG_(inst_35176);
var state_35264__$1 = state_35264;
var statearr_35298_36782 = state_35264__$1;
(statearr_35298_36782[(2)] = inst_35179);

(statearr_35298_36782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (36))){
var inst_35223 = (state_35264[(25)]);
var inst_35227 = cljs.core.chunk_first(inst_35223);
var inst_35228 = cljs.core.chunk_rest(inst_35223);
var inst_35229 = cljs.core.count(inst_35227);
var inst_35204 = inst_35228;
var inst_35205 = inst_35227;
var inst_35206 = inst_35229;
var inst_35207 = (0);
var state_35264__$1 = (function (){var statearr_35299 = state_35264;
(statearr_35299[(10)] = inst_35207);

(statearr_35299[(11)] = inst_35205);

(statearr_35299[(20)] = inst_35206);

(statearr_35299[(21)] = inst_35204);

return statearr_35299;
})();
var statearr_35300_36783 = state_35264__$1;
(statearr_35300_36783[(2)] = null);

(statearr_35300_36783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (41))){
var inst_35223 = (state_35264[(25)]);
var inst_35239 = (state_35264[(2)]);
var inst_35240 = cljs.core.next(inst_35223);
var inst_35204 = inst_35240;
var inst_35205 = null;
var inst_35206 = (0);
var inst_35207 = (0);
var state_35264__$1 = (function (){var statearr_35301 = state_35264;
(statearr_35301[(27)] = inst_35239);

(statearr_35301[(10)] = inst_35207);

(statearr_35301[(11)] = inst_35205);

(statearr_35301[(20)] = inst_35206);

(statearr_35301[(21)] = inst_35204);

return statearr_35301;
})();
var statearr_35302_36784 = state_35264__$1;
(statearr_35302_36784[(2)] = null);

(statearr_35302_36784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (43))){
var state_35264__$1 = state_35264;
var statearr_35303_36785 = state_35264__$1;
(statearr_35303_36785[(2)] = null);

(statearr_35303_36785[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (29))){
var inst_35248 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35304_36786 = state_35264__$1;
(statearr_35304_36786[(2)] = inst_35248);

(statearr_35304_36786[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (44))){
var inst_35257 = (state_35264[(2)]);
var state_35264__$1 = (function (){var statearr_35305 = state_35264;
(statearr_35305[(28)] = inst_35257);

return statearr_35305;
})();
var statearr_35306_36787 = state_35264__$1;
(statearr_35306_36787[(2)] = null);

(statearr_35306_36787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (6))){
var inst_35196 = (state_35264[(29)]);
var inst_35195 = cljs.core.deref(cs);
var inst_35196__$1 = cljs.core.keys(inst_35195);
var inst_35197 = cljs.core.count(inst_35196__$1);
var inst_35198 = cljs.core.reset_BANG_(dctr,inst_35197);
var inst_35203 = cljs.core.seq(inst_35196__$1);
var inst_35204 = inst_35203;
var inst_35205 = null;
var inst_35206 = (0);
var inst_35207 = (0);
var state_35264__$1 = (function (){var statearr_35307 = state_35264;
(statearr_35307[(10)] = inst_35207);

(statearr_35307[(30)] = inst_35198);

(statearr_35307[(11)] = inst_35205);

(statearr_35307[(29)] = inst_35196__$1);

(statearr_35307[(20)] = inst_35206);

(statearr_35307[(21)] = inst_35204);

return statearr_35307;
})();
var statearr_35308_36788 = state_35264__$1;
(statearr_35308_36788[(2)] = null);

(statearr_35308_36788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (28))){
var inst_35223 = (state_35264[(25)]);
var inst_35204 = (state_35264[(21)]);
var inst_35223__$1 = cljs.core.seq(inst_35204);
var state_35264__$1 = (function (){var statearr_35309 = state_35264;
(statearr_35309[(25)] = inst_35223__$1);

return statearr_35309;
})();
if(inst_35223__$1){
var statearr_35310_36843 = state_35264__$1;
(statearr_35310_36843[(1)] = (33));

} else {
var statearr_35311_36844 = state_35264__$1;
(statearr_35311_36844[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (25))){
var inst_35207 = (state_35264[(10)]);
var inst_35206 = (state_35264[(20)]);
var inst_35209 = (inst_35207 < inst_35206);
var inst_35210 = inst_35209;
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35210)){
var statearr_35312_36845 = state_35264__$1;
(statearr_35312_36845[(1)] = (27));

} else {
var statearr_35313_36846 = state_35264__$1;
(statearr_35313_36846[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (34))){
var state_35264__$1 = state_35264;
var statearr_35314_36847 = state_35264__$1;
(statearr_35314_36847[(2)] = null);

(statearr_35314_36847[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (17))){
var state_35264__$1 = state_35264;
var statearr_35316_36848 = state_35264__$1;
(statearr_35316_36848[(2)] = null);

(statearr_35316_36848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (3))){
var inst_35262 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35264__$1,inst_35262);
} else {
if((state_val_35265 === (12))){
var inst_35191 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35317_36849 = state_35264__$1;
(statearr_35317_36849[(2)] = inst_35191);

(statearr_35317_36849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (2))){
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35264__$1,(4),ch);
} else {
if((state_val_35265 === (23))){
var state_35264__$1 = state_35264;
var statearr_35318_36850 = state_35264__$1;
(statearr_35318_36850[(2)] = null);

(statearr_35318_36850[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (35))){
var inst_35246 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35319_36851 = state_35264__$1;
(statearr_35319_36851[(2)] = inst_35246);

(statearr_35319_36851[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (19))){
var inst_35163 = (state_35264[(7)]);
var inst_35167 = cljs.core.chunk_first(inst_35163);
var inst_35168 = cljs.core.chunk_rest(inst_35163);
var inst_35169 = cljs.core.count(inst_35167);
var inst_35141 = inst_35168;
var inst_35142 = inst_35167;
var inst_35143 = inst_35169;
var inst_35144 = (0);
var state_35264__$1 = (function (){var statearr_35320 = state_35264;
(statearr_35320[(13)] = inst_35142);

(statearr_35320[(14)] = inst_35144);

(statearr_35320[(15)] = inst_35143);

(statearr_35320[(17)] = inst_35141);

return statearr_35320;
})();
var statearr_35321_36854 = state_35264__$1;
(statearr_35321_36854[(2)] = null);

(statearr_35321_36854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (11))){
var inst_35163 = (state_35264[(7)]);
var inst_35141 = (state_35264[(17)]);
var inst_35163__$1 = cljs.core.seq(inst_35141);
var state_35264__$1 = (function (){var statearr_35322 = state_35264;
(statearr_35322[(7)] = inst_35163__$1);

return statearr_35322;
})();
if(inst_35163__$1){
var statearr_35323_36857 = state_35264__$1;
(statearr_35323_36857[(1)] = (16));

} else {
var statearr_35324_36858 = state_35264__$1;
(statearr_35324_36858[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (9))){
var inst_35193 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35325_36859 = state_35264__$1;
(statearr_35325_36859[(2)] = inst_35193);

(statearr_35325_36859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (5))){
var inst_35139 = cljs.core.deref(cs);
var inst_35140 = cljs.core.seq(inst_35139);
var inst_35141 = inst_35140;
var inst_35142 = null;
var inst_35143 = (0);
var inst_35144 = (0);
var state_35264__$1 = (function (){var statearr_35326 = state_35264;
(statearr_35326[(13)] = inst_35142);

(statearr_35326[(14)] = inst_35144);

(statearr_35326[(15)] = inst_35143);

(statearr_35326[(17)] = inst_35141);

return statearr_35326;
})();
var statearr_35327_36860 = state_35264__$1;
(statearr_35327_36860[(2)] = null);

(statearr_35327_36860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (14))){
var state_35264__$1 = state_35264;
var statearr_35328_36861 = state_35264__$1;
(statearr_35328_36861[(2)] = null);

(statearr_35328_36861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (45))){
var inst_35254 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35329_36863 = state_35264__$1;
(statearr_35329_36863[(2)] = inst_35254);

(statearr_35329_36863[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (26))){
var inst_35196 = (state_35264[(29)]);
var inst_35250 = (state_35264[(2)]);
var inst_35251 = cljs.core.seq(inst_35196);
var state_35264__$1 = (function (){var statearr_35330 = state_35264;
(statearr_35330[(31)] = inst_35250);

return statearr_35330;
})();
if(inst_35251){
var statearr_35331_36865 = state_35264__$1;
(statearr_35331_36865[(1)] = (42));

} else {
var statearr_35332_36866 = state_35264__$1;
(statearr_35332_36866[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (16))){
var inst_35163 = (state_35264[(7)]);
var inst_35165 = cljs.core.chunked_seq_QMARK_(inst_35163);
var state_35264__$1 = state_35264;
if(inst_35165){
var statearr_35333_36867 = state_35264__$1;
(statearr_35333_36867[(1)] = (19));

} else {
var statearr_35334_36868 = state_35264__$1;
(statearr_35334_36868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (38))){
var inst_35243 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35335_36869 = state_35264__$1;
(statearr_35335_36869[(2)] = inst_35243);

(statearr_35335_36869[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (30))){
var state_35264__$1 = state_35264;
var statearr_35336_36870 = state_35264__$1;
(statearr_35336_36870[(2)] = null);

(statearr_35336_36870[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (10))){
var inst_35142 = (state_35264[(13)]);
var inst_35144 = (state_35264[(14)]);
var inst_35152 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35142,inst_35144);
var inst_35153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35152,(0),null);
var inst_35154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35152,(1),null);
var state_35264__$1 = (function (){var statearr_35337 = state_35264;
(statearr_35337[(26)] = inst_35153);

return statearr_35337;
})();
if(cljs.core.truth_(inst_35154)){
var statearr_35338_36871 = state_35264__$1;
(statearr_35338_36871[(1)] = (13));

} else {
var statearr_35339_36872 = state_35264__$1;
(statearr_35339_36872[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (18))){
var inst_35189 = (state_35264[(2)]);
var state_35264__$1 = state_35264;
var statearr_35340_36873 = state_35264__$1;
(statearr_35340_36873[(2)] = inst_35189);

(statearr_35340_36873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (42))){
var state_35264__$1 = state_35264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35264__$1,(45),dchan);
} else {
if((state_val_35265 === (37))){
var inst_35232 = (state_35264[(23)]);
var inst_35223 = (state_35264[(25)]);
var inst_35132 = (state_35264[(12)]);
var inst_35232__$1 = cljs.core.first(inst_35223);
var inst_35233 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35232__$1,inst_35132,done);
var state_35264__$1 = (function (){var statearr_35341 = state_35264;
(statearr_35341[(23)] = inst_35232__$1);

return statearr_35341;
})();
if(cljs.core.truth_(inst_35233)){
var statearr_35342_36874 = state_35264__$1;
(statearr_35342_36874[(1)] = (39));

} else {
var statearr_35343_36876 = state_35264__$1;
(statearr_35343_36876[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35265 === (8))){
var inst_35144 = (state_35264[(14)]);
var inst_35143 = (state_35264[(15)]);
var inst_35146 = (inst_35144 < inst_35143);
var inst_35147 = inst_35146;
var state_35264__$1 = state_35264;
if(cljs.core.truth_(inst_35147)){
var statearr_35344_36878 = state_35264__$1;
(statearr_35344_36878[(1)] = (10));

} else {
var statearr_35345_36879 = state_35264__$1;
(statearr_35345_36879[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__33893__auto__ = null;
var cljs$core$async$mult_$_state_machine__33893__auto____0 = (function (){
var statearr_35346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35346[(0)] = cljs$core$async$mult_$_state_machine__33893__auto__);

(statearr_35346[(1)] = (1));

return statearr_35346;
});
var cljs$core$async$mult_$_state_machine__33893__auto____1 = (function (state_35264){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_35264);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e35347){if((e35347 instanceof Object)){
var ex__33896__auto__ = e35347;
var statearr_35348_36880 = state_35264;
(statearr_35348_36880[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35347;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36881 = state_35264;
state_35264 = G__36881;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33893__auto__ = function(state_35264){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33893__auto____1.call(this,state_35264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33893__auto____0;
cljs$core$async$mult_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33893__auto____1;
return cljs$core$async$mult_$_state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_35349 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_35349[(6)] = c__34280__auto___36763);

return statearr_35349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
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
var G__35351 = arguments.length;
switch (G__35351) {
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
var len__4789__auto___36888 = arguments.length;
var i__4790__auto___36889 = (0);
while(true){
if((i__4790__auto___36889 < len__4789__auto___36888)){
args__4795__auto__.push((arguments[i__4790__auto___36889]));

var G__36894 = (i__4790__auto___36889 + (1));
i__4790__auto___36889 = G__36894;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35356){
var map__35357 = p__35356;
var map__35357__$1 = (((((!((map__35357 == null))))?(((((map__35357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35357):map__35357);
var opts = map__35357__$1;
var statearr_35359_36901 = state;
(statearr_35359_36901[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35374_36902 = state;
(statearr_35374_36902[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35375_36903 = state;
(statearr_35375_36903[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35352){
var G__35353 = cljs.core.first(seq35352);
var seq35352__$1 = cljs.core.next(seq35352);
var G__35354 = cljs.core.first(seq35352__$1);
var seq35352__$2 = cljs.core.next(seq35352__$1);
var G__35355 = cljs.core.first(seq35352__$2);
var seq35352__$3 = cljs.core.next(seq35352__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35353,G__35354,G__35355,seq35352__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35384 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35385){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35385 = meta35385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35386,meta35385__$1){
var self__ = this;
var _35386__$1 = this;
return (new cljs.core.async.t_cljs$core$async35384(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35385__$1));
}));

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35386){
var self__ = this;
var _35386__$1 = this;
return self__.meta35385;
}));

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35384.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35385","meta35385",-560303956,null)], null);
}));

(cljs.core.async.t_cljs$core$async35384.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35384");

(cljs.core.async.t_cljs$core$async35384.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35384");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35384.
 */
cljs.core.async.__GT_t_cljs$core$async35384 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35384(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35385){
return (new cljs.core.async.t_cljs$core$async35384(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35385));
});

}

return (new cljs.core.async.t_cljs$core$async35384(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34280__auto___36926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_35499){
var state_val_35500 = (state_35499[(1)]);
if((state_val_35500 === (7))){
var inst_35413 = (state_35499[(2)]);
var state_35499__$1 = state_35499;
var statearr_35501_36927 = state_35499__$1;
(statearr_35501_36927[(2)] = inst_35413);

(statearr_35501_36927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (20))){
var inst_35425 = (state_35499[(7)]);
var state_35499__$1 = state_35499;
var statearr_35502_36928 = state_35499__$1;
(statearr_35502_36928[(2)] = inst_35425);

(statearr_35502_36928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (27))){
var state_35499__$1 = state_35499;
var statearr_35503_36929 = state_35499__$1;
(statearr_35503_36929[(2)] = null);

(statearr_35503_36929[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (1))){
var inst_35400 = (state_35499[(8)]);
var inst_35400__$1 = calc_state();
var inst_35402 = (inst_35400__$1 == null);
var inst_35403 = cljs.core.not(inst_35402);
var state_35499__$1 = (function (){var statearr_35504 = state_35499;
(statearr_35504[(8)] = inst_35400__$1);

return statearr_35504;
})();
if(inst_35403){
var statearr_35505_36930 = state_35499__$1;
(statearr_35505_36930[(1)] = (2));

} else {
var statearr_35506_36931 = state_35499__$1;
(statearr_35506_36931[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (24))){
var inst_35458 = (state_35499[(9)]);
var inst_35449 = (state_35499[(10)]);
var inst_35473 = (state_35499[(11)]);
var inst_35473__$1 = (inst_35449.cljs$core$IFn$_invoke$arity$1 ? inst_35449.cljs$core$IFn$_invoke$arity$1(inst_35458) : inst_35449.call(null,inst_35458));
var state_35499__$1 = (function (){var statearr_35507 = state_35499;
(statearr_35507[(11)] = inst_35473__$1);

return statearr_35507;
})();
if(cljs.core.truth_(inst_35473__$1)){
var statearr_35508_36932 = state_35499__$1;
(statearr_35508_36932[(1)] = (29));

} else {
var statearr_35509_36933 = state_35499__$1;
(statearr_35509_36933[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (4))){
var inst_35416 = (state_35499[(2)]);
var state_35499__$1 = state_35499;
if(cljs.core.truth_(inst_35416)){
var statearr_35510_36938 = state_35499__$1;
(statearr_35510_36938[(1)] = (8));

} else {
var statearr_35511_36939 = state_35499__$1;
(statearr_35511_36939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (15))){
var inst_35443 = (state_35499[(2)]);
var state_35499__$1 = state_35499;
if(cljs.core.truth_(inst_35443)){
var statearr_35512_36940 = state_35499__$1;
(statearr_35512_36940[(1)] = (19));

} else {
var statearr_35513_36941 = state_35499__$1;
(statearr_35513_36941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (21))){
var inst_35448 = (state_35499[(12)]);
var inst_35448__$1 = (state_35499[(2)]);
var inst_35449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35448__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35448__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35448__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35499__$1 = (function (){var statearr_35514 = state_35499;
(statearr_35514[(13)] = inst_35450);

(statearr_35514[(10)] = inst_35449);

(statearr_35514[(12)] = inst_35448__$1);

return statearr_35514;
})();
return cljs.core.async.ioc_alts_BANG_(state_35499__$1,(22),inst_35451);
} else {
if((state_val_35500 === (31))){
var inst_35481 = (state_35499[(2)]);
var state_35499__$1 = state_35499;
if(cljs.core.truth_(inst_35481)){
var statearr_35515_36942 = state_35499__$1;
(statearr_35515_36942[(1)] = (32));

} else {
var statearr_35516_36943 = state_35499__$1;
(statearr_35516_36943[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (32))){
var inst_35457 = (state_35499[(14)]);
var state_35499__$1 = state_35499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35499__$1,(35),out,inst_35457);
} else {
if((state_val_35500 === (33))){
var inst_35448 = (state_35499[(12)]);
var inst_35425 = inst_35448;
var state_35499__$1 = (function (){var statearr_35517 = state_35499;
(statearr_35517[(7)] = inst_35425);

return statearr_35517;
})();
var statearr_35518_36944 = state_35499__$1;
(statearr_35518_36944[(2)] = null);

(statearr_35518_36944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (13))){
var inst_35425 = (state_35499[(7)]);
var inst_35432 = inst_35425.cljs$lang$protocol_mask$partition0$;
var inst_35433 = (inst_35432 & (64));
var inst_35434 = inst_35425.cljs$core$ISeq$;
var inst_35435 = (cljs.core.PROTOCOL_SENTINEL === inst_35434);
var inst_35436 = ((inst_35433) || (inst_35435));
var state_35499__$1 = state_35499;
if(cljs.core.truth_(inst_35436)){
var statearr_35519_36949 = state_35499__$1;
(statearr_35519_36949[(1)] = (16));

} else {
var statearr_35520_36950 = state_35499__$1;
(statearr_35520_36950[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (22))){
var inst_35458 = (state_35499[(9)]);
var inst_35457 = (state_35499[(14)]);
var inst_35456 = (state_35499[(2)]);
var inst_35457__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35456,(0),null);
var inst_35458__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35456,(1),null);
var inst_35459 = (inst_35457__$1 == null);
var inst_35461 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35458__$1,change);
var inst_35462 = ((inst_35459) || (inst_35461));
var state_35499__$1 = (function (){var statearr_35521 = state_35499;
(statearr_35521[(9)] = inst_35458__$1);

(statearr_35521[(14)] = inst_35457__$1);

return statearr_35521;
})();
if(cljs.core.truth_(inst_35462)){
var statearr_35522_36952 = state_35499__$1;
(statearr_35522_36952[(1)] = (23));

} else {
var statearr_35523_36953 = state_35499__$1;
(statearr_35523_36953[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (36))){
var inst_35448 = (state_35499[(12)]);
var inst_35425 = inst_35448;
var state_35499__$1 = (function (){var statearr_35524 = state_35499;
(statearr_35524[(7)] = inst_35425);

return statearr_35524;
})();
var statearr_35525_36954 = state_35499__$1;
(statearr_35525_36954[(2)] = null);

(statearr_35525_36954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (29))){
var inst_35473 = (state_35499[(11)]);
var state_35499__$1 = state_35499;
var statearr_35526_36956 = state_35499__$1;
(statearr_35526_36956[(2)] = inst_35473);

(statearr_35526_36956[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (6))){
var state_35499__$1 = state_35499;
var statearr_35527_36957 = state_35499__$1;
(statearr_35527_36957[(2)] = false);

(statearr_35527_36957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (28))){
var inst_35469 = (state_35499[(2)]);
var inst_35470 = calc_state();
var inst_35425 = inst_35470;
var state_35499__$1 = (function (){var statearr_35533 = state_35499;
(statearr_35533[(15)] = inst_35469);

(statearr_35533[(7)] = inst_35425);

return statearr_35533;
})();
var statearr_35534_36962 = state_35499__$1;
(statearr_35534_36962[(2)] = null);

(statearr_35534_36962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (25))){
var inst_35495 = (state_35499[(2)]);
var state_35499__$1 = state_35499;
var statearr_35535_36963 = state_35499__$1;
(statearr_35535_36963[(2)] = inst_35495);

(statearr_35535_36963[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (34))){
var inst_35493 = (state_35499[(2)]);
var state_35499__$1 = state_35499;
var statearr_35536_36964 = state_35499__$1;
(statearr_35536_36964[(2)] = inst_35493);

(statearr_35536_36964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (17))){
var state_35499__$1 = state_35499;
var statearr_35537_36965 = state_35499__$1;
(statearr_35537_36965[(2)] = false);

(statearr_35537_36965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (3))){
var state_35499__$1 = state_35499;
var statearr_35542_36966 = state_35499__$1;
(statearr_35542_36966[(2)] = false);

(statearr_35542_36966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (12))){
var inst_35497 = (state_35499[(2)]);
var state_35499__$1 = state_35499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35499__$1,inst_35497);
} else {
if((state_val_35500 === (2))){
var inst_35400 = (state_35499[(8)]);
var inst_35405 = inst_35400.cljs$lang$protocol_mask$partition0$;
var inst_35406 = (inst_35405 & (64));
var inst_35407 = inst_35400.cljs$core$ISeq$;
var inst_35408 = (cljs.core.PROTOCOL_SENTINEL === inst_35407);
var inst_35409 = ((inst_35406) || (inst_35408));
var state_35499__$1 = state_35499;
if(cljs.core.truth_(inst_35409)){
var statearr_35567_36967 = state_35499__$1;
(statearr_35567_36967[(1)] = (5));

} else {
var statearr_35568_36968 = state_35499__$1;
(statearr_35568_36968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (23))){
var inst_35457 = (state_35499[(14)]);
var inst_35464 = (inst_35457 == null);
var state_35499__$1 = state_35499;
if(cljs.core.truth_(inst_35464)){
var statearr_35569_36969 = state_35499__$1;
(statearr_35569_36969[(1)] = (26));

} else {
var statearr_35570_36970 = state_35499__$1;
(statearr_35570_36970[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (35))){
var inst_35484 = (state_35499[(2)]);
var state_35499__$1 = state_35499;
if(cljs.core.truth_(inst_35484)){
var statearr_35571_36971 = state_35499__$1;
(statearr_35571_36971[(1)] = (36));

} else {
var statearr_35577_36973 = state_35499__$1;
(statearr_35577_36973[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (19))){
var inst_35425 = (state_35499[(7)]);
var inst_35445 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35425);
var state_35499__$1 = state_35499;
var statearr_35578_36974 = state_35499__$1;
(statearr_35578_36974[(2)] = inst_35445);

(statearr_35578_36974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (11))){
var inst_35425 = (state_35499[(7)]);
var inst_35429 = (inst_35425 == null);
var inst_35430 = cljs.core.not(inst_35429);
var state_35499__$1 = state_35499;
if(inst_35430){
var statearr_35579_36975 = state_35499__$1;
(statearr_35579_36975[(1)] = (13));

} else {
var statearr_35580_36976 = state_35499__$1;
(statearr_35580_36976[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (9))){
var inst_35400 = (state_35499[(8)]);
var state_35499__$1 = state_35499;
var statearr_35581_36980 = state_35499__$1;
(statearr_35581_36980[(2)] = inst_35400);

(statearr_35581_36980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (5))){
var state_35499__$1 = state_35499;
var statearr_35582_36985 = state_35499__$1;
(statearr_35582_36985[(2)] = true);

(statearr_35582_36985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (14))){
var state_35499__$1 = state_35499;
var statearr_35584_36986 = state_35499__$1;
(statearr_35584_36986[(2)] = false);

(statearr_35584_36986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (26))){
var inst_35458 = (state_35499[(9)]);
var inst_35466 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35458);
var state_35499__$1 = state_35499;
var statearr_35585_36987 = state_35499__$1;
(statearr_35585_36987[(2)] = inst_35466);

(statearr_35585_36987[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (16))){
var state_35499__$1 = state_35499;
var statearr_35586_36988 = state_35499__$1;
(statearr_35586_36988[(2)] = true);

(statearr_35586_36988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (38))){
var inst_35489 = (state_35499[(2)]);
var state_35499__$1 = state_35499;
var statearr_35587_36989 = state_35499__$1;
(statearr_35587_36989[(2)] = inst_35489);

(statearr_35587_36989[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (30))){
var inst_35450 = (state_35499[(13)]);
var inst_35458 = (state_35499[(9)]);
var inst_35449 = (state_35499[(10)]);
var inst_35476 = cljs.core.empty_QMARK_(inst_35449);
var inst_35477 = (inst_35450.cljs$core$IFn$_invoke$arity$1 ? inst_35450.cljs$core$IFn$_invoke$arity$1(inst_35458) : inst_35450.call(null,inst_35458));
var inst_35478 = cljs.core.not(inst_35477);
var inst_35479 = ((inst_35476) && (inst_35478));
var state_35499__$1 = state_35499;
var statearr_35588_36990 = state_35499__$1;
(statearr_35588_36990[(2)] = inst_35479);

(statearr_35588_36990[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (10))){
var inst_35400 = (state_35499[(8)]);
var inst_35421 = (state_35499[(2)]);
var inst_35422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35421,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35421,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35421,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35425 = inst_35400;
var state_35499__$1 = (function (){var statearr_35589 = state_35499;
(statearr_35589[(16)] = inst_35423);

(statearr_35589[(17)] = inst_35424);

(statearr_35589[(18)] = inst_35422);

(statearr_35589[(7)] = inst_35425);

return statearr_35589;
})();
var statearr_35590_36991 = state_35499__$1;
(statearr_35590_36991[(2)] = null);

(statearr_35590_36991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (18))){
var inst_35440 = (state_35499[(2)]);
var state_35499__$1 = state_35499;
var statearr_35591_36992 = state_35499__$1;
(statearr_35591_36992[(2)] = inst_35440);

(statearr_35591_36992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (37))){
var state_35499__$1 = state_35499;
var statearr_35592_36993 = state_35499__$1;
(statearr_35592_36993[(2)] = null);

(statearr_35592_36993[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35500 === (8))){
var inst_35400 = (state_35499[(8)]);
var inst_35418 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35400);
var state_35499__$1 = state_35499;
var statearr_35593_36994 = state_35499__$1;
(statearr_35593_36994[(2)] = inst_35418);

(statearr_35593_36994[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__33893__auto__ = null;
var cljs$core$async$mix_$_state_machine__33893__auto____0 = (function (){
var statearr_35594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35594[(0)] = cljs$core$async$mix_$_state_machine__33893__auto__);

(statearr_35594[(1)] = (1));

return statearr_35594;
});
var cljs$core$async$mix_$_state_machine__33893__auto____1 = (function (state_35499){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_35499);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e35595){if((e35595 instanceof Object)){
var ex__33896__auto__ = e35595;
var statearr_35596_36995 = state_35499;
(statearr_35596_36995[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36996 = state_35499;
state_35499 = G__36996;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33893__auto__ = function(state_35499){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33893__auto____1.call(this,state_35499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33893__auto____0;
cljs$core$async$mix_$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33893__auto____1;
return cljs$core$async$mix_$_state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_35597 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_35597[(6)] = c__34280__auto___36926);

return statearr_35597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
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
var G__35602 = arguments.length;
switch (G__35602) {
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
var G__35607 = arguments.length;
switch (G__35607) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35605_SHARP_){
if(cljs.core.truth_((p1__35605_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35605_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35605_SHARP_.call(null,topic)))){
return p1__35605_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35605_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35608 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35609){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35609 = meta35609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35610,meta35609__$1){
var self__ = this;
var _35610__$1 = this;
return (new cljs.core.async.t_cljs$core$async35608(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35609__$1));
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35610){
var self__ = this;
var _35610__$1 = this;
return self__.meta35609;
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35609","meta35609",461725756,null)], null);
}));

(cljs.core.async.t_cljs$core$async35608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35608");

(cljs.core.async.t_cljs$core$async35608.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35608.
 */
cljs.core.async.__GT_t_cljs$core$async35608 = (function cljs$core$async$__GT_t_cljs$core$async35608(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35609){
return (new cljs.core.async.t_cljs$core$async35608(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35609));
});

}

return (new cljs.core.async.t_cljs$core$async35608(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34280__auto___37021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_35698){
var state_val_35699 = (state_35698[(1)]);
if((state_val_35699 === (7))){
var inst_35694 = (state_35698[(2)]);
var state_35698__$1 = state_35698;
var statearr_35700_37022 = state_35698__$1;
(statearr_35700_37022[(2)] = inst_35694);

(statearr_35700_37022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (20))){
var state_35698__$1 = state_35698;
var statearr_35701_37023 = state_35698__$1;
(statearr_35701_37023[(2)] = null);

(statearr_35701_37023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (1))){
var state_35698__$1 = state_35698;
var statearr_35702_37024 = state_35698__$1;
(statearr_35702_37024[(2)] = null);

(statearr_35702_37024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (24))){
var inst_35677 = (state_35698[(7)]);
var inst_35686 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35677);
var state_35698__$1 = state_35698;
var statearr_35703_37025 = state_35698__$1;
(statearr_35703_37025[(2)] = inst_35686);

(statearr_35703_37025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (4))){
var inst_35629 = (state_35698[(8)]);
var inst_35629__$1 = (state_35698[(2)]);
var inst_35630 = (inst_35629__$1 == null);
var state_35698__$1 = (function (){var statearr_35704 = state_35698;
(statearr_35704[(8)] = inst_35629__$1);

return statearr_35704;
})();
if(cljs.core.truth_(inst_35630)){
var statearr_35705_37026 = state_35698__$1;
(statearr_35705_37026[(1)] = (5));

} else {
var statearr_35706_37027 = state_35698__$1;
(statearr_35706_37027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (15))){
var inst_35671 = (state_35698[(2)]);
var state_35698__$1 = state_35698;
var statearr_35707_37028 = state_35698__$1;
(statearr_35707_37028[(2)] = inst_35671);

(statearr_35707_37028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (21))){
var inst_35691 = (state_35698[(2)]);
var state_35698__$1 = (function (){var statearr_35708 = state_35698;
(statearr_35708[(9)] = inst_35691);

return statearr_35708;
})();
var statearr_35709_37029 = state_35698__$1;
(statearr_35709_37029[(2)] = null);

(statearr_35709_37029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (13))){
var inst_35653 = (state_35698[(10)]);
var inst_35655 = cljs.core.chunked_seq_QMARK_(inst_35653);
var state_35698__$1 = state_35698;
if(inst_35655){
var statearr_35710_37030 = state_35698__$1;
(statearr_35710_37030[(1)] = (16));

} else {
var statearr_35711_37031 = state_35698__$1;
(statearr_35711_37031[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (22))){
var inst_35683 = (state_35698[(2)]);
var state_35698__$1 = state_35698;
if(cljs.core.truth_(inst_35683)){
var statearr_35712_37032 = state_35698__$1;
(statearr_35712_37032[(1)] = (23));

} else {
var statearr_35713_37033 = state_35698__$1;
(statearr_35713_37033[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (6))){
var inst_35629 = (state_35698[(8)]);
var inst_35679 = (state_35698[(11)]);
var inst_35677 = (state_35698[(7)]);
var inst_35677__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35629) : topic_fn.call(null,inst_35629));
var inst_35678 = cljs.core.deref(mults);
var inst_35679__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35678,inst_35677__$1);
var state_35698__$1 = (function (){var statearr_35714 = state_35698;
(statearr_35714[(11)] = inst_35679__$1);

(statearr_35714[(7)] = inst_35677__$1);

return statearr_35714;
})();
if(cljs.core.truth_(inst_35679__$1)){
var statearr_35715_37035 = state_35698__$1;
(statearr_35715_37035[(1)] = (19));

} else {
var statearr_35716_37036 = state_35698__$1;
(statearr_35716_37036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (25))){
var inst_35688 = (state_35698[(2)]);
var state_35698__$1 = state_35698;
var statearr_35717_37037 = state_35698__$1;
(statearr_35717_37037[(2)] = inst_35688);

(statearr_35717_37037[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (17))){
var inst_35653 = (state_35698[(10)]);
var inst_35662 = cljs.core.first(inst_35653);
var inst_35663 = cljs.core.async.muxch_STAR_(inst_35662);
var inst_35664 = cljs.core.async.close_BANG_(inst_35663);
var inst_35665 = cljs.core.next(inst_35653);
var inst_35639 = inst_35665;
var inst_35640 = null;
var inst_35641 = (0);
var inst_35642 = (0);
var state_35698__$1 = (function (){var statearr_35718 = state_35698;
(statearr_35718[(12)] = inst_35641);

(statearr_35718[(13)] = inst_35639);

(statearr_35718[(14)] = inst_35640);

(statearr_35718[(15)] = inst_35664);

(statearr_35718[(16)] = inst_35642);

return statearr_35718;
})();
var statearr_35719_37038 = state_35698__$1;
(statearr_35719_37038[(2)] = null);

(statearr_35719_37038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (3))){
var inst_35696 = (state_35698[(2)]);
var state_35698__$1 = state_35698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35698__$1,inst_35696);
} else {
if((state_val_35699 === (12))){
var inst_35673 = (state_35698[(2)]);
var state_35698__$1 = state_35698;
var statearr_35720_37040 = state_35698__$1;
(statearr_35720_37040[(2)] = inst_35673);

(statearr_35720_37040[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (2))){
var state_35698__$1 = state_35698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35698__$1,(4),ch);
} else {
if((state_val_35699 === (23))){
var state_35698__$1 = state_35698;
var statearr_35721_37041 = state_35698__$1;
(statearr_35721_37041[(2)] = null);

(statearr_35721_37041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (19))){
var inst_35629 = (state_35698[(8)]);
var inst_35679 = (state_35698[(11)]);
var inst_35681 = cljs.core.async.muxch_STAR_(inst_35679);
var state_35698__$1 = state_35698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35698__$1,(22),inst_35681,inst_35629);
} else {
if((state_val_35699 === (11))){
var inst_35639 = (state_35698[(13)]);
var inst_35653 = (state_35698[(10)]);
var inst_35653__$1 = cljs.core.seq(inst_35639);
var state_35698__$1 = (function (){var statearr_35722 = state_35698;
(statearr_35722[(10)] = inst_35653__$1);

return statearr_35722;
})();
if(inst_35653__$1){
var statearr_35723_37042 = state_35698__$1;
(statearr_35723_37042[(1)] = (13));

} else {
var statearr_35724_37043 = state_35698__$1;
(statearr_35724_37043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (9))){
var inst_35675 = (state_35698[(2)]);
var state_35698__$1 = state_35698;
var statearr_35725_37044 = state_35698__$1;
(statearr_35725_37044[(2)] = inst_35675);

(statearr_35725_37044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (5))){
var inst_35636 = cljs.core.deref(mults);
var inst_35637 = cljs.core.vals(inst_35636);
var inst_35638 = cljs.core.seq(inst_35637);
var inst_35639 = inst_35638;
var inst_35640 = null;
var inst_35641 = (0);
var inst_35642 = (0);
var state_35698__$1 = (function (){var statearr_35726 = state_35698;
(statearr_35726[(12)] = inst_35641);

(statearr_35726[(13)] = inst_35639);

(statearr_35726[(14)] = inst_35640);

(statearr_35726[(16)] = inst_35642);

return statearr_35726;
})();
var statearr_35727_37045 = state_35698__$1;
(statearr_35727_37045[(2)] = null);

(statearr_35727_37045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (14))){
var state_35698__$1 = state_35698;
var statearr_35731_37046 = state_35698__$1;
(statearr_35731_37046[(2)] = null);

(statearr_35731_37046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (16))){
var inst_35653 = (state_35698[(10)]);
var inst_35657 = cljs.core.chunk_first(inst_35653);
var inst_35658 = cljs.core.chunk_rest(inst_35653);
var inst_35659 = cljs.core.count(inst_35657);
var inst_35639 = inst_35658;
var inst_35640 = inst_35657;
var inst_35641 = inst_35659;
var inst_35642 = (0);
var state_35698__$1 = (function (){var statearr_35732 = state_35698;
(statearr_35732[(12)] = inst_35641);

(statearr_35732[(13)] = inst_35639);

(statearr_35732[(14)] = inst_35640);

(statearr_35732[(16)] = inst_35642);

return statearr_35732;
})();
var statearr_35733_37051 = state_35698__$1;
(statearr_35733_37051[(2)] = null);

(statearr_35733_37051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (10))){
var inst_35641 = (state_35698[(12)]);
var inst_35639 = (state_35698[(13)]);
var inst_35640 = (state_35698[(14)]);
var inst_35642 = (state_35698[(16)]);
var inst_35647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35640,inst_35642);
var inst_35648 = cljs.core.async.muxch_STAR_(inst_35647);
var inst_35649 = cljs.core.async.close_BANG_(inst_35648);
var inst_35650 = (inst_35642 + (1));
var tmp35728 = inst_35641;
var tmp35729 = inst_35639;
var tmp35730 = inst_35640;
var inst_35639__$1 = tmp35729;
var inst_35640__$1 = tmp35730;
var inst_35641__$1 = tmp35728;
var inst_35642__$1 = inst_35650;
var state_35698__$1 = (function (){var statearr_35734 = state_35698;
(statearr_35734[(12)] = inst_35641__$1);

(statearr_35734[(17)] = inst_35649);

(statearr_35734[(13)] = inst_35639__$1);

(statearr_35734[(14)] = inst_35640__$1);

(statearr_35734[(16)] = inst_35642__$1);

return statearr_35734;
})();
var statearr_35735_37056 = state_35698__$1;
(statearr_35735_37056[(2)] = null);

(statearr_35735_37056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (18))){
var inst_35668 = (state_35698[(2)]);
var state_35698__$1 = state_35698;
var statearr_35736_37057 = state_35698__$1;
(statearr_35736_37057[(2)] = inst_35668);

(statearr_35736_37057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35699 === (8))){
var inst_35641 = (state_35698[(12)]);
var inst_35642 = (state_35698[(16)]);
var inst_35644 = (inst_35642 < inst_35641);
var inst_35645 = inst_35644;
var state_35698__$1 = state_35698;
if(cljs.core.truth_(inst_35645)){
var statearr_35737_37060 = state_35698__$1;
(statearr_35737_37060[(1)] = (10));

} else {
var statearr_35738_37061 = state_35698__$1;
(statearr_35738_37061[(1)] = (11));

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
var cljs$core$async$state_machine__33893__auto__ = null;
var cljs$core$async$state_machine__33893__auto____0 = (function (){
var statearr_35739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35739[(0)] = cljs$core$async$state_machine__33893__auto__);

(statearr_35739[(1)] = (1));

return statearr_35739;
});
var cljs$core$async$state_machine__33893__auto____1 = (function (state_35698){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_35698);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e35740){if((e35740 instanceof Object)){
var ex__33896__auto__ = e35740;
var statearr_35741_37067 = state_35698;
(statearr_35741_37067[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37068 = state_35698;
state_35698 = G__37068;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$state_machine__33893__auto__ = function(state_35698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33893__auto____1.call(this,state_35698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33893__auto____0;
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33893__auto____1;
return cljs$core$async$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_35742 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_35742[(6)] = c__34280__auto___37021);

return statearr_35742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
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
var G__35744 = arguments.length;
switch (G__35744) {
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
var G__35755 = arguments.length;
switch (G__35755) {
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
var G__35761 = arguments.length;
switch (G__35761) {
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
var c__34280__auto___37072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_35800){
var state_val_35801 = (state_35800[(1)]);
if((state_val_35801 === (7))){
var state_35800__$1 = state_35800;
var statearr_35802_37073 = state_35800__$1;
(statearr_35802_37073[(2)] = null);

(statearr_35802_37073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (1))){
var state_35800__$1 = state_35800;
var statearr_35803_37074 = state_35800__$1;
(statearr_35803_37074[(2)] = null);

(statearr_35803_37074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (4))){
var inst_35764 = (state_35800[(7)]);
var inst_35766 = (inst_35764 < cnt);
var state_35800__$1 = state_35800;
if(cljs.core.truth_(inst_35766)){
var statearr_35804_37075 = state_35800__$1;
(statearr_35804_37075[(1)] = (6));

} else {
var statearr_35805_37076 = state_35800__$1;
(statearr_35805_37076[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (15))){
var inst_35796 = (state_35800[(2)]);
var state_35800__$1 = state_35800;
var statearr_35806_37077 = state_35800__$1;
(statearr_35806_37077[(2)] = inst_35796);

(statearr_35806_37077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (13))){
var inst_35789 = cljs.core.async.close_BANG_(out);
var state_35800__$1 = state_35800;
var statearr_35807_37078 = state_35800__$1;
(statearr_35807_37078[(2)] = inst_35789);

(statearr_35807_37078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (6))){
var state_35800__$1 = state_35800;
var statearr_35808_37079 = state_35800__$1;
(statearr_35808_37079[(2)] = null);

(statearr_35808_37079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (3))){
var inst_35798 = (state_35800[(2)]);
var state_35800__$1 = state_35800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35800__$1,inst_35798);
} else {
if((state_val_35801 === (12))){
var inst_35786 = (state_35800[(8)]);
var inst_35786__$1 = (state_35800[(2)]);
var inst_35787 = cljs.core.some(cljs.core.nil_QMARK_,inst_35786__$1);
var state_35800__$1 = (function (){var statearr_35809 = state_35800;
(statearr_35809[(8)] = inst_35786__$1);

return statearr_35809;
})();
if(cljs.core.truth_(inst_35787)){
var statearr_35810_37080 = state_35800__$1;
(statearr_35810_37080[(1)] = (13));

} else {
var statearr_35811_37081 = state_35800__$1;
(statearr_35811_37081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (2))){
var inst_35763 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35764 = (0);
var state_35800__$1 = (function (){var statearr_35812 = state_35800;
(statearr_35812[(7)] = inst_35764);

(statearr_35812[(9)] = inst_35763);

return statearr_35812;
})();
var statearr_35813_37082 = state_35800__$1;
(statearr_35813_37082[(2)] = null);

(statearr_35813_37082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (11))){
var inst_35764 = (state_35800[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35800,(10),Object,null,(9));
var inst_35773 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35764) : chs__$1.call(null,inst_35764));
var inst_35774 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35764) : done.call(null,inst_35764));
var inst_35775 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35773,inst_35774);
var state_35800__$1 = state_35800;
var statearr_35814_37083 = state_35800__$1;
(statearr_35814_37083[(2)] = inst_35775);


cljs.core.async.impl.ioc_helpers.process_exception(state_35800__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (9))){
var inst_35764 = (state_35800[(7)]);
var inst_35777 = (state_35800[(2)]);
var inst_35778 = (inst_35764 + (1));
var inst_35764__$1 = inst_35778;
var state_35800__$1 = (function (){var statearr_35815 = state_35800;
(statearr_35815[(7)] = inst_35764__$1);

(statearr_35815[(10)] = inst_35777);

return statearr_35815;
})();
var statearr_35816_37084 = state_35800__$1;
(statearr_35816_37084[(2)] = null);

(statearr_35816_37084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (5))){
var inst_35784 = (state_35800[(2)]);
var state_35800__$1 = (function (){var statearr_35817 = state_35800;
(statearr_35817[(11)] = inst_35784);

return statearr_35817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35800__$1,(12),dchan);
} else {
if((state_val_35801 === (14))){
var inst_35786 = (state_35800[(8)]);
var inst_35791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35786);
var state_35800__$1 = state_35800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35800__$1,(16),out,inst_35791);
} else {
if((state_val_35801 === (16))){
var inst_35793 = (state_35800[(2)]);
var state_35800__$1 = (function (){var statearr_35818 = state_35800;
(statearr_35818[(12)] = inst_35793);

return statearr_35818;
})();
var statearr_35819_37095 = state_35800__$1;
(statearr_35819_37095[(2)] = null);

(statearr_35819_37095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (10))){
var inst_35768 = (state_35800[(2)]);
var inst_35769 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35800__$1 = (function (){var statearr_35820 = state_35800;
(statearr_35820[(13)] = inst_35768);

return statearr_35820;
})();
var statearr_35821_37101 = state_35800__$1;
(statearr_35821_37101[(2)] = inst_35769);


cljs.core.async.impl.ioc_helpers.process_exception(state_35800__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35801 === (8))){
var inst_35782 = (state_35800[(2)]);
var state_35800__$1 = state_35800;
var statearr_35822_37105 = state_35800__$1;
(statearr_35822_37105[(2)] = inst_35782);

(statearr_35822_37105[(1)] = (5));


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
var cljs$core$async$state_machine__33893__auto__ = null;
var cljs$core$async$state_machine__33893__auto____0 = (function (){
var statearr_35823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35823[(0)] = cljs$core$async$state_machine__33893__auto__);

(statearr_35823[(1)] = (1));

return statearr_35823;
});
var cljs$core$async$state_machine__33893__auto____1 = (function (state_35800){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_35800);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e35824){if((e35824 instanceof Object)){
var ex__33896__auto__ = e35824;
var statearr_35825_37109 = state_35800;
(statearr_35825_37109[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37110 = state_35800;
state_35800 = G__37110;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$state_machine__33893__auto__ = function(state_35800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33893__auto____1.call(this,state_35800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33893__auto____0;
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33893__auto____1;
return cljs$core$async$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_35826 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_35826[(6)] = c__34280__auto___37072);

return statearr_35826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
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
var G__35829 = arguments.length;
switch (G__35829) {
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
var c__34280__auto___37121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_35861){
var state_val_35862 = (state_35861[(1)]);
if((state_val_35862 === (7))){
var inst_35841 = (state_35861[(7)]);
var inst_35840 = (state_35861[(8)]);
var inst_35840__$1 = (state_35861[(2)]);
var inst_35841__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35840__$1,(0),null);
var inst_35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35840__$1,(1),null);
var inst_35843 = (inst_35841__$1 == null);
var state_35861__$1 = (function (){var statearr_35863 = state_35861;
(statearr_35863[(9)] = inst_35842);

(statearr_35863[(7)] = inst_35841__$1);

(statearr_35863[(8)] = inst_35840__$1);

return statearr_35863;
})();
if(cljs.core.truth_(inst_35843)){
var statearr_35866_37125 = state_35861__$1;
(statearr_35866_37125[(1)] = (8));

} else {
var statearr_35868_37126 = state_35861__$1;
(statearr_35868_37126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (1))){
var inst_35830 = cljs.core.vec(chs);
var inst_35831 = inst_35830;
var state_35861__$1 = (function (){var statearr_35869 = state_35861;
(statearr_35869[(10)] = inst_35831);

return statearr_35869;
})();
var statearr_35870_37127 = state_35861__$1;
(statearr_35870_37127[(2)] = null);

(statearr_35870_37127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (4))){
var inst_35831 = (state_35861[(10)]);
var state_35861__$1 = state_35861;
return cljs.core.async.ioc_alts_BANG_(state_35861__$1,(7),inst_35831);
} else {
if((state_val_35862 === (6))){
var inst_35857 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
var statearr_35875_37129 = state_35861__$1;
(statearr_35875_37129[(2)] = inst_35857);

(statearr_35875_37129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (3))){
var inst_35859 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35861__$1,inst_35859);
} else {
if((state_val_35862 === (2))){
var inst_35831 = (state_35861[(10)]);
var inst_35833 = cljs.core.count(inst_35831);
var inst_35834 = (inst_35833 > (0));
var state_35861__$1 = state_35861;
if(cljs.core.truth_(inst_35834)){
var statearr_35880_37130 = state_35861__$1;
(statearr_35880_37130[(1)] = (4));

} else {
var statearr_35881_37131 = state_35861__$1;
(statearr_35881_37131[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (11))){
var inst_35831 = (state_35861[(10)]);
var inst_35850 = (state_35861[(2)]);
var tmp35876 = inst_35831;
var inst_35831__$1 = tmp35876;
var state_35861__$1 = (function (){var statearr_35882 = state_35861;
(statearr_35882[(10)] = inst_35831__$1);

(statearr_35882[(11)] = inst_35850);

return statearr_35882;
})();
var statearr_35883_37132 = state_35861__$1;
(statearr_35883_37132[(2)] = null);

(statearr_35883_37132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (9))){
var inst_35841 = (state_35861[(7)]);
var state_35861__$1 = state_35861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35861__$1,(11),out,inst_35841);
} else {
if((state_val_35862 === (5))){
var inst_35855 = cljs.core.async.close_BANG_(out);
var state_35861__$1 = state_35861;
var statearr_35884_37142 = state_35861__$1;
(statearr_35884_37142[(2)] = inst_35855);

(statearr_35884_37142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (10))){
var inst_35853 = (state_35861[(2)]);
var state_35861__$1 = state_35861;
var statearr_35885_37143 = state_35861__$1;
(statearr_35885_37143[(2)] = inst_35853);

(statearr_35885_37143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35862 === (8))){
var inst_35831 = (state_35861[(10)]);
var inst_35842 = (state_35861[(9)]);
var inst_35841 = (state_35861[(7)]);
var inst_35840 = (state_35861[(8)]);
var inst_35845 = (function (){var cs = inst_35831;
var vec__35836 = inst_35840;
var v = inst_35841;
var c = inst_35842;
return (function (p1__35827_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35827_SHARP_);
});
})();
var inst_35846 = cljs.core.filterv(inst_35845,inst_35831);
var inst_35831__$1 = inst_35846;
var state_35861__$1 = (function (){var statearr_35886 = state_35861;
(statearr_35886[(10)] = inst_35831__$1);

return statearr_35886;
})();
var statearr_35887_37150 = state_35861__$1;
(statearr_35887_37150[(2)] = null);

(statearr_35887_37150[(1)] = (2));


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
var cljs$core$async$state_machine__33893__auto__ = null;
var cljs$core$async$state_machine__33893__auto____0 = (function (){
var statearr_35888 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35888[(0)] = cljs$core$async$state_machine__33893__auto__);

(statearr_35888[(1)] = (1));

return statearr_35888;
});
var cljs$core$async$state_machine__33893__auto____1 = (function (state_35861){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_35861);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e35889){if((e35889 instanceof Object)){
var ex__33896__auto__ = e35889;
var statearr_35890_37151 = state_35861;
(statearr_35890_37151[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37164 = state_35861;
state_35861 = G__37164;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$state_machine__33893__auto__ = function(state_35861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33893__auto____1.call(this,state_35861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33893__auto____0;
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33893__auto____1;
return cljs$core$async$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_35891 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_35891[(6)] = c__34280__auto___37121);

return statearr_35891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
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
var G__35893 = arguments.length;
switch (G__35893) {
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
var c__34280__auto___37166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_35917){
var state_val_35918 = (state_35917[(1)]);
if((state_val_35918 === (7))){
var inst_35899 = (state_35917[(7)]);
var inst_35899__$1 = (state_35917[(2)]);
var inst_35900 = (inst_35899__$1 == null);
var inst_35901 = cljs.core.not(inst_35900);
var state_35917__$1 = (function (){var statearr_35919 = state_35917;
(statearr_35919[(7)] = inst_35899__$1);

return statearr_35919;
})();
if(inst_35901){
var statearr_35920_37167 = state_35917__$1;
(statearr_35920_37167[(1)] = (8));

} else {
var statearr_35921_37168 = state_35917__$1;
(statearr_35921_37168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (1))){
var inst_35894 = (0);
var state_35917__$1 = (function (){var statearr_35922 = state_35917;
(statearr_35922[(8)] = inst_35894);

return statearr_35922;
})();
var statearr_35923_37169 = state_35917__$1;
(statearr_35923_37169[(2)] = null);

(statearr_35923_37169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (4))){
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35917__$1,(7),ch);
} else {
if((state_val_35918 === (6))){
var inst_35912 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35924_37170 = state_35917__$1;
(statearr_35924_37170[(2)] = inst_35912);

(statearr_35924_37170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (3))){
var inst_35914 = (state_35917[(2)]);
var inst_35915 = cljs.core.async.close_BANG_(out);
var state_35917__$1 = (function (){var statearr_35925 = state_35917;
(statearr_35925[(9)] = inst_35914);

return statearr_35925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35917__$1,inst_35915);
} else {
if((state_val_35918 === (2))){
var inst_35894 = (state_35917[(8)]);
var inst_35896 = (inst_35894 < n);
var state_35917__$1 = state_35917;
if(cljs.core.truth_(inst_35896)){
var statearr_35926_37171 = state_35917__$1;
(statearr_35926_37171[(1)] = (4));

} else {
var statearr_35927_37172 = state_35917__$1;
(statearr_35927_37172[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (11))){
var inst_35894 = (state_35917[(8)]);
var inst_35904 = (state_35917[(2)]);
var inst_35905 = (inst_35894 + (1));
var inst_35894__$1 = inst_35905;
var state_35917__$1 = (function (){var statearr_35928 = state_35917;
(statearr_35928[(8)] = inst_35894__$1);

(statearr_35928[(10)] = inst_35904);

return statearr_35928;
})();
var statearr_35929_37173 = state_35917__$1;
(statearr_35929_37173[(2)] = null);

(statearr_35929_37173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (9))){
var state_35917__$1 = state_35917;
var statearr_35930_37174 = state_35917__$1;
(statearr_35930_37174[(2)] = null);

(statearr_35930_37174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (5))){
var state_35917__$1 = state_35917;
var statearr_35931_37175 = state_35917__$1;
(statearr_35931_37175[(2)] = null);

(statearr_35931_37175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (10))){
var inst_35909 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35932_37176 = state_35917__$1;
(statearr_35932_37176[(2)] = inst_35909);

(statearr_35932_37176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (8))){
var inst_35899 = (state_35917[(7)]);
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35917__$1,(11),out,inst_35899);
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
var cljs$core$async$state_machine__33893__auto__ = null;
var cljs$core$async$state_machine__33893__auto____0 = (function (){
var statearr_35933 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35933[(0)] = cljs$core$async$state_machine__33893__auto__);

(statearr_35933[(1)] = (1));

return statearr_35933;
});
var cljs$core$async$state_machine__33893__auto____1 = (function (state_35917){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_35917);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e35934){if((e35934 instanceof Object)){
var ex__33896__auto__ = e35934;
var statearr_35935_37177 = state_35917;
(statearr_35935_37177[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37178 = state_35917;
state_35917 = G__37178;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$state_machine__33893__auto__ = function(state_35917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33893__auto____1.call(this,state_35917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33893__auto____0;
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33893__auto____1;
return cljs$core$async$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_35936 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_35936[(6)] = c__34280__auto___37166);

return statearr_35936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35938 = (function (f,ch,meta35939){
this.f = f;
this.ch = ch;
this.meta35939 = meta35939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35940,meta35939__$1){
var self__ = this;
var _35940__$1 = this;
return (new cljs.core.async.t_cljs$core$async35938(self__.f,self__.ch,meta35939__$1));
}));

(cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35940){
var self__ = this;
var _35940__$1 = this;
return self__.meta35939;
}));

(cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35941 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35941 = (function (f,ch,meta35939,_,fn1,meta35942){
this.f = f;
this.ch = ch;
this.meta35939 = meta35939;
this._ = _;
this.fn1 = fn1;
this.meta35942 = meta35942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35943,meta35942__$1){
var self__ = this;
var _35943__$1 = this;
return (new cljs.core.async.t_cljs$core$async35941(self__.f,self__.ch,self__.meta35939,self__._,self__.fn1,meta35942__$1));
}));

(cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35943){
var self__ = this;
var _35943__$1 = this;
return self__.meta35942;
}));

(cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35937_SHARP_){
var G__35944 = (((p1__35937_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35937_SHARP_) : self__.f.call(null,p1__35937_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35944) : f1.call(null,G__35944));
});
}));

(cljs.core.async.t_cljs$core$async35941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35939","meta35939",1133791752,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35938","cljs.core.async/t_cljs$core$async35938",-78153783,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35942","meta35942",-1218955576,null)], null);
}));

(cljs.core.async.t_cljs$core$async35941.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35941");

(cljs.core.async.t_cljs$core$async35941.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35941");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35941.
 */
cljs.core.async.__GT_t_cljs$core$async35941 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35941(f__$1,ch__$1,meta35939__$1,___$2,fn1__$1,meta35942){
return (new cljs.core.async.t_cljs$core$async35941(f__$1,ch__$1,meta35939__$1,___$2,fn1__$1,meta35942));
});

}

return (new cljs.core.async.t_cljs$core$async35941(self__.f,self__.ch,self__.meta35939,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35945 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35945) : self__.f.call(null,G__35945));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35939","meta35939",1133791752,null)], null);
}));

(cljs.core.async.t_cljs$core$async35938.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35938");

(cljs.core.async.t_cljs$core$async35938.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35938");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35938.
 */
cljs.core.async.__GT_t_cljs$core$async35938 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35938(f__$1,ch__$1,meta35939){
return (new cljs.core.async.t_cljs$core$async35938(f__$1,ch__$1,meta35939));
});

}

return (new cljs.core.async.t_cljs$core$async35938(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35946 = (function (f,ch,meta35947){
this.f = f;
this.ch = ch;
this.meta35947 = meta35947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35948,meta35947__$1){
var self__ = this;
var _35948__$1 = this;
return (new cljs.core.async.t_cljs$core$async35946(self__.f,self__.ch,meta35947__$1));
}));

(cljs.core.async.t_cljs$core$async35946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35948){
var self__ = this;
var _35948__$1 = this;
return self__.meta35947;
}));

(cljs.core.async.t_cljs$core$async35946.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35946.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35946.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35946.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35946.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35946.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35947","meta35947",-1752922621,null)], null);
}));

(cljs.core.async.t_cljs$core$async35946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35946");

(cljs.core.async.t_cljs$core$async35946.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35946.
 */
cljs.core.async.__GT_t_cljs$core$async35946 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35946(f__$1,ch__$1,meta35947){
return (new cljs.core.async.t_cljs$core$async35946(f__$1,ch__$1,meta35947));
});

}

return (new cljs.core.async.t_cljs$core$async35946(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35949 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35949 = (function (p,ch,meta35950){
this.p = p;
this.ch = ch;
this.meta35950 = meta35950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35951,meta35950__$1){
var self__ = this;
var _35951__$1 = this;
return (new cljs.core.async.t_cljs$core$async35949(self__.p,self__.ch,meta35950__$1));
}));

(cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35951){
var self__ = this;
var _35951__$1 = this;
return self__.meta35950;
}));

(cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35950","meta35950",1491808835,null)], null);
}));

(cljs.core.async.t_cljs$core$async35949.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35949");

(cljs.core.async.t_cljs$core$async35949.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35949");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35949.
 */
cljs.core.async.__GT_t_cljs$core$async35949 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35949(p__$1,ch__$1,meta35950){
return (new cljs.core.async.t_cljs$core$async35949(p__$1,ch__$1,meta35950));
});

}

return (new cljs.core.async.t_cljs$core$async35949(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35954 = arguments.length;
switch (G__35954) {
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
var c__34280__auto___37225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_35975){
var state_val_35976 = (state_35975[(1)]);
if((state_val_35976 === (7))){
var inst_35971 = (state_35975[(2)]);
var state_35975__$1 = state_35975;
var statearr_35977_37226 = state_35975__$1;
(statearr_35977_37226[(2)] = inst_35971);

(statearr_35977_37226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (1))){
var state_35975__$1 = state_35975;
var statearr_35978_37227 = state_35975__$1;
(statearr_35978_37227[(2)] = null);

(statearr_35978_37227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (4))){
var inst_35957 = (state_35975[(7)]);
var inst_35957__$1 = (state_35975[(2)]);
var inst_35958 = (inst_35957__$1 == null);
var state_35975__$1 = (function (){var statearr_35979 = state_35975;
(statearr_35979[(7)] = inst_35957__$1);

return statearr_35979;
})();
if(cljs.core.truth_(inst_35958)){
var statearr_35980_37229 = state_35975__$1;
(statearr_35980_37229[(1)] = (5));

} else {
var statearr_35981_37230 = state_35975__$1;
(statearr_35981_37230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (6))){
var inst_35957 = (state_35975[(7)]);
var inst_35962 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35957) : p.call(null,inst_35957));
var state_35975__$1 = state_35975;
if(cljs.core.truth_(inst_35962)){
var statearr_35982_37232 = state_35975__$1;
(statearr_35982_37232[(1)] = (8));

} else {
var statearr_35983_37233 = state_35975__$1;
(statearr_35983_37233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (3))){
var inst_35973 = (state_35975[(2)]);
var state_35975__$1 = state_35975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35975__$1,inst_35973);
} else {
if((state_val_35976 === (2))){
var state_35975__$1 = state_35975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35975__$1,(4),ch);
} else {
if((state_val_35976 === (11))){
var inst_35965 = (state_35975[(2)]);
var state_35975__$1 = state_35975;
var statearr_35984_37234 = state_35975__$1;
(statearr_35984_37234[(2)] = inst_35965);

(statearr_35984_37234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (9))){
var state_35975__$1 = state_35975;
var statearr_35985_37235 = state_35975__$1;
(statearr_35985_37235[(2)] = null);

(statearr_35985_37235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (5))){
var inst_35960 = cljs.core.async.close_BANG_(out);
var state_35975__$1 = state_35975;
var statearr_35986_37236 = state_35975__$1;
(statearr_35986_37236[(2)] = inst_35960);

(statearr_35986_37236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (10))){
var inst_35968 = (state_35975[(2)]);
var state_35975__$1 = (function (){var statearr_35987 = state_35975;
(statearr_35987[(8)] = inst_35968);

return statearr_35987;
})();
var statearr_35988_37240 = state_35975__$1;
(statearr_35988_37240[(2)] = null);

(statearr_35988_37240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35976 === (8))){
var inst_35957 = (state_35975[(7)]);
var state_35975__$1 = state_35975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35975__$1,(11),out,inst_35957);
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
var cljs$core$async$state_machine__33893__auto__ = null;
var cljs$core$async$state_machine__33893__auto____0 = (function (){
var statearr_35989 = [null,null,null,null,null,null,null,null,null];
(statearr_35989[(0)] = cljs$core$async$state_machine__33893__auto__);

(statearr_35989[(1)] = (1));

return statearr_35989;
});
var cljs$core$async$state_machine__33893__auto____1 = (function (state_35975){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_35975);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e35990){if((e35990 instanceof Object)){
var ex__33896__auto__ = e35990;
var statearr_35991_37247 = state_35975;
(statearr_35991_37247[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35990;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37248 = state_35975;
state_35975 = G__37248;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$state_machine__33893__auto__ = function(state_35975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33893__auto____1.call(this,state_35975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33893__auto____0;
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33893__auto____1;
return cljs$core$async$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_35992 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_35992[(6)] = c__34280__auto___37225);

return statearr_35992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35994 = arguments.length;
switch (G__35994) {
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
var c__34280__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_36056){
var state_val_36057 = (state_36056[(1)]);
if((state_val_36057 === (7))){
var inst_36052 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36058_37251 = state_36056__$1;
(statearr_36058_37251[(2)] = inst_36052);

(statearr_36058_37251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (20))){
var inst_36022 = (state_36056[(7)]);
var inst_36033 = (state_36056[(2)]);
var inst_36034 = cljs.core.next(inst_36022);
var inst_36008 = inst_36034;
var inst_36009 = null;
var inst_36010 = (0);
var inst_36011 = (0);
var state_36056__$1 = (function (){var statearr_36059 = state_36056;
(statearr_36059[(8)] = inst_36008);

(statearr_36059[(9)] = inst_36009);

(statearr_36059[(10)] = inst_36033);

(statearr_36059[(11)] = inst_36010);

(statearr_36059[(12)] = inst_36011);

return statearr_36059;
})();
var statearr_36060_37252 = state_36056__$1;
(statearr_36060_37252[(2)] = null);

(statearr_36060_37252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (1))){
var state_36056__$1 = state_36056;
var statearr_36061_37253 = state_36056__$1;
(statearr_36061_37253[(2)] = null);

(statearr_36061_37253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (4))){
var inst_35997 = (state_36056[(13)]);
var inst_35997__$1 = (state_36056[(2)]);
var inst_35998 = (inst_35997__$1 == null);
var state_36056__$1 = (function (){var statearr_36062 = state_36056;
(statearr_36062[(13)] = inst_35997__$1);

return statearr_36062;
})();
if(cljs.core.truth_(inst_35998)){
var statearr_36063_37254 = state_36056__$1;
(statearr_36063_37254[(1)] = (5));

} else {
var statearr_36064_37255 = state_36056__$1;
(statearr_36064_37255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (15))){
var state_36056__$1 = state_36056;
var statearr_36068_37256 = state_36056__$1;
(statearr_36068_37256[(2)] = null);

(statearr_36068_37256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (21))){
var state_36056__$1 = state_36056;
var statearr_36069_37257 = state_36056__$1;
(statearr_36069_37257[(2)] = null);

(statearr_36069_37257[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (13))){
var inst_36008 = (state_36056[(8)]);
var inst_36009 = (state_36056[(9)]);
var inst_36010 = (state_36056[(11)]);
var inst_36011 = (state_36056[(12)]);
var inst_36018 = (state_36056[(2)]);
var inst_36019 = (inst_36011 + (1));
var tmp36065 = inst_36008;
var tmp36066 = inst_36009;
var tmp36067 = inst_36010;
var inst_36008__$1 = tmp36065;
var inst_36009__$1 = tmp36066;
var inst_36010__$1 = tmp36067;
var inst_36011__$1 = inst_36019;
var state_36056__$1 = (function (){var statearr_36070 = state_36056;
(statearr_36070[(8)] = inst_36008__$1);

(statearr_36070[(14)] = inst_36018);

(statearr_36070[(9)] = inst_36009__$1);

(statearr_36070[(11)] = inst_36010__$1);

(statearr_36070[(12)] = inst_36011__$1);

return statearr_36070;
})();
var statearr_36071_37258 = state_36056__$1;
(statearr_36071_37258[(2)] = null);

(statearr_36071_37258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (22))){
var state_36056__$1 = state_36056;
var statearr_36072_37259 = state_36056__$1;
(statearr_36072_37259[(2)] = null);

(statearr_36072_37259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (6))){
var inst_35997 = (state_36056[(13)]);
var inst_36006 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35997) : f.call(null,inst_35997));
var inst_36007 = cljs.core.seq(inst_36006);
var inst_36008 = inst_36007;
var inst_36009 = null;
var inst_36010 = (0);
var inst_36011 = (0);
var state_36056__$1 = (function (){var statearr_36073 = state_36056;
(statearr_36073[(8)] = inst_36008);

(statearr_36073[(9)] = inst_36009);

(statearr_36073[(11)] = inst_36010);

(statearr_36073[(12)] = inst_36011);

return statearr_36073;
})();
var statearr_36074_37262 = state_36056__$1;
(statearr_36074_37262[(2)] = null);

(statearr_36074_37262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (17))){
var inst_36022 = (state_36056[(7)]);
var inst_36026 = cljs.core.chunk_first(inst_36022);
var inst_36027 = cljs.core.chunk_rest(inst_36022);
var inst_36028 = cljs.core.count(inst_36026);
var inst_36008 = inst_36027;
var inst_36009 = inst_36026;
var inst_36010 = inst_36028;
var inst_36011 = (0);
var state_36056__$1 = (function (){var statearr_36077 = state_36056;
(statearr_36077[(8)] = inst_36008);

(statearr_36077[(9)] = inst_36009);

(statearr_36077[(11)] = inst_36010);

(statearr_36077[(12)] = inst_36011);

return statearr_36077;
})();
var statearr_36078_37264 = state_36056__$1;
(statearr_36078_37264[(2)] = null);

(statearr_36078_37264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (3))){
var inst_36054 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36056__$1,inst_36054);
} else {
if((state_val_36057 === (12))){
var inst_36042 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36079_37266 = state_36056__$1;
(statearr_36079_37266[(2)] = inst_36042);

(statearr_36079_37266[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (2))){
var state_36056__$1 = state_36056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36056__$1,(4),in$);
} else {
if((state_val_36057 === (23))){
var inst_36050 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36080_37267 = state_36056__$1;
(statearr_36080_37267[(2)] = inst_36050);

(statearr_36080_37267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (19))){
var inst_36037 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36081_37268 = state_36056__$1;
(statearr_36081_37268[(2)] = inst_36037);

(statearr_36081_37268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (11))){
var inst_36008 = (state_36056[(8)]);
var inst_36022 = (state_36056[(7)]);
var inst_36022__$1 = cljs.core.seq(inst_36008);
var state_36056__$1 = (function (){var statearr_36082 = state_36056;
(statearr_36082[(7)] = inst_36022__$1);

return statearr_36082;
})();
if(inst_36022__$1){
var statearr_36083_37288 = state_36056__$1;
(statearr_36083_37288[(1)] = (14));

} else {
var statearr_36084_37289 = state_36056__$1;
(statearr_36084_37289[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (9))){
var inst_36044 = (state_36056[(2)]);
var inst_36045 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36056__$1 = (function (){var statearr_36104 = state_36056;
(statearr_36104[(15)] = inst_36044);

return statearr_36104;
})();
if(cljs.core.truth_(inst_36045)){
var statearr_36105_37290 = state_36056__$1;
(statearr_36105_37290[(1)] = (21));

} else {
var statearr_36106_37291 = state_36056__$1;
(statearr_36106_37291[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (5))){
var inst_36000 = cljs.core.async.close_BANG_(out);
var state_36056__$1 = state_36056;
var statearr_36107_37292 = state_36056__$1;
(statearr_36107_37292[(2)] = inst_36000);

(statearr_36107_37292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (14))){
var inst_36022 = (state_36056[(7)]);
var inst_36024 = cljs.core.chunked_seq_QMARK_(inst_36022);
var state_36056__$1 = state_36056;
if(inst_36024){
var statearr_36108_37293 = state_36056__$1;
(statearr_36108_37293[(1)] = (17));

} else {
var statearr_36109_37294 = state_36056__$1;
(statearr_36109_37294[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (16))){
var inst_36040 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36110_37295 = state_36056__$1;
(statearr_36110_37295[(2)] = inst_36040);

(statearr_36110_37295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (10))){
var inst_36009 = (state_36056[(9)]);
var inst_36011 = (state_36056[(12)]);
var inst_36016 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36009,inst_36011);
var state_36056__$1 = state_36056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36056__$1,(13),out,inst_36016);
} else {
if((state_val_36057 === (18))){
var inst_36022 = (state_36056[(7)]);
var inst_36031 = cljs.core.first(inst_36022);
var state_36056__$1 = state_36056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36056__$1,(20),out,inst_36031);
} else {
if((state_val_36057 === (8))){
var inst_36010 = (state_36056[(11)]);
var inst_36011 = (state_36056[(12)]);
var inst_36013 = (inst_36011 < inst_36010);
var inst_36014 = inst_36013;
var state_36056__$1 = state_36056;
if(cljs.core.truth_(inst_36014)){
var statearr_36111_37296 = state_36056__$1;
(statearr_36111_37296[(1)] = (10));

} else {
var statearr_36112_37297 = state_36056__$1;
(statearr_36112_37297[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__33893__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33893__auto____0 = (function (){
var statearr_36113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36113[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33893__auto__);

(statearr_36113[(1)] = (1));

return statearr_36113;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33893__auto____1 = (function (state_36056){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_36056);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e36114){if((e36114 instanceof Object)){
var ex__33896__auto__ = e36114;
var statearr_36115_37298 = state_36056;
(statearr_36115_37298[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37299 = state_36056;
state_36056 = G__37299;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33893__auto__ = function(state_36056){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33893__auto____1.call(this,state_36056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33893__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33893__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_36116 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_36116[(6)] = c__34280__auto__);

return statearr_36116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));

return c__34280__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36118 = arguments.length;
switch (G__36118) {
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
var G__36120 = arguments.length;
switch (G__36120) {
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
var G__36122 = arguments.length;
switch (G__36122) {
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
var c__34280__auto___37305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_36146){
var state_val_36147 = (state_36146[(1)]);
if((state_val_36147 === (7))){
var inst_36141 = (state_36146[(2)]);
var state_36146__$1 = state_36146;
var statearr_36148_37306 = state_36146__$1;
(statearr_36148_37306[(2)] = inst_36141);

(statearr_36148_37306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36147 === (1))){
var inst_36123 = null;
var state_36146__$1 = (function (){var statearr_36149 = state_36146;
(statearr_36149[(7)] = inst_36123);

return statearr_36149;
})();
var statearr_36150_37307 = state_36146__$1;
(statearr_36150_37307[(2)] = null);

(statearr_36150_37307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36147 === (4))){
var inst_36126 = (state_36146[(8)]);
var inst_36126__$1 = (state_36146[(2)]);
var inst_36127 = (inst_36126__$1 == null);
var inst_36128 = cljs.core.not(inst_36127);
var state_36146__$1 = (function (){var statearr_36151 = state_36146;
(statearr_36151[(8)] = inst_36126__$1);

return statearr_36151;
})();
if(inst_36128){
var statearr_36152_37308 = state_36146__$1;
(statearr_36152_37308[(1)] = (5));

} else {
var statearr_36153_37309 = state_36146__$1;
(statearr_36153_37309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36147 === (6))){
var state_36146__$1 = state_36146;
var statearr_36154_37310 = state_36146__$1;
(statearr_36154_37310[(2)] = null);

(statearr_36154_37310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36147 === (3))){
var inst_36143 = (state_36146[(2)]);
var inst_36144 = cljs.core.async.close_BANG_(out);
var state_36146__$1 = (function (){var statearr_36155 = state_36146;
(statearr_36155[(9)] = inst_36143);

return statearr_36155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36146__$1,inst_36144);
} else {
if((state_val_36147 === (2))){
var state_36146__$1 = state_36146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36146__$1,(4),ch);
} else {
if((state_val_36147 === (11))){
var inst_36126 = (state_36146[(8)]);
var inst_36135 = (state_36146[(2)]);
var inst_36123 = inst_36126;
var state_36146__$1 = (function (){var statearr_36156 = state_36146;
(statearr_36156[(10)] = inst_36135);

(statearr_36156[(7)] = inst_36123);

return statearr_36156;
})();
var statearr_36157_37319 = state_36146__$1;
(statearr_36157_37319[(2)] = null);

(statearr_36157_37319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36147 === (9))){
var inst_36126 = (state_36146[(8)]);
var state_36146__$1 = state_36146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36146__$1,(11),out,inst_36126);
} else {
if((state_val_36147 === (5))){
var inst_36126 = (state_36146[(8)]);
var inst_36123 = (state_36146[(7)]);
var inst_36130 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36126,inst_36123);
var state_36146__$1 = state_36146;
if(inst_36130){
var statearr_36159_37324 = state_36146__$1;
(statearr_36159_37324[(1)] = (8));

} else {
var statearr_36160_37325 = state_36146__$1;
(statearr_36160_37325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36147 === (10))){
var inst_36138 = (state_36146[(2)]);
var state_36146__$1 = state_36146;
var statearr_36161_37326 = state_36146__$1;
(statearr_36161_37326[(2)] = inst_36138);

(statearr_36161_37326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36147 === (8))){
var inst_36123 = (state_36146[(7)]);
var tmp36158 = inst_36123;
var inst_36123__$1 = tmp36158;
var state_36146__$1 = (function (){var statearr_36162 = state_36146;
(statearr_36162[(7)] = inst_36123__$1);

return statearr_36162;
})();
var statearr_36163_37331 = state_36146__$1;
(statearr_36163_37331[(2)] = null);

(statearr_36163_37331[(1)] = (2));


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
var cljs$core$async$state_machine__33893__auto__ = null;
var cljs$core$async$state_machine__33893__auto____0 = (function (){
var statearr_36164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36164[(0)] = cljs$core$async$state_machine__33893__auto__);

(statearr_36164[(1)] = (1));

return statearr_36164;
});
var cljs$core$async$state_machine__33893__auto____1 = (function (state_36146){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_36146);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e36165){if((e36165 instanceof Object)){
var ex__33896__auto__ = e36165;
var statearr_36166_37337 = state_36146;
(statearr_36166_37337[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37338 = state_36146;
state_36146 = G__37338;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$state_machine__33893__auto__ = function(state_36146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33893__auto____1.call(this,state_36146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33893__auto____0;
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33893__auto____1;
return cljs$core$async$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_36167 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_36167[(6)] = c__34280__auto___37305);

return statearr_36167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36169 = arguments.length;
switch (G__36169) {
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
var c__34280__auto___37340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_36207){
var state_val_36208 = (state_36207[(1)]);
if((state_val_36208 === (7))){
var inst_36203 = (state_36207[(2)]);
var state_36207__$1 = state_36207;
var statearr_36235_37341 = state_36207__$1;
(statearr_36235_37341[(2)] = inst_36203);

(statearr_36235_37341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (1))){
var inst_36170 = (new Array(n));
var inst_36171 = inst_36170;
var inst_36172 = (0);
var state_36207__$1 = (function (){var statearr_36236 = state_36207;
(statearr_36236[(7)] = inst_36172);

(statearr_36236[(8)] = inst_36171);

return statearr_36236;
})();
var statearr_36237_37346 = state_36207__$1;
(statearr_36237_37346[(2)] = null);

(statearr_36237_37346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (4))){
var inst_36175 = (state_36207[(9)]);
var inst_36175__$1 = (state_36207[(2)]);
var inst_36176 = (inst_36175__$1 == null);
var inst_36177 = cljs.core.not(inst_36176);
var state_36207__$1 = (function (){var statearr_36239 = state_36207;
(statearr_36239[(9)] = inst_36175__$1);

return statearr_36239;
})();
if(inst_36177){
var statearr_36240_37347 = state_36207__$1;
(statearr_36240_37347[(1)] = (5));

} else {
var statearr_36242_37348 = state_36207__$1;
(statearr_36242_37348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (15))){
var inst_36197 = (state_36207[(2)]);
var state_36207__$1 = state_36207;
var statearr_36245_37379 = state_36207__$1;
(statearr_36245_37379[(2)] = inst_36197);

(statearr_36245_37379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (13))){
var state_36207__$1 = state_36207;
var statearr_36248_37380 = state_36207__$1;
(statearr_36248_37380[(2)] = null);

(statearr_36248_37380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (6))){
var inst_36172 = (state_36207[(7)]);
var inst_36193 = (inst_36172 > (0));
var state_36207__$1 = state_36207;
if(cljs.core.truth_(inst_36193)){
var statearr_36249_37381 = state_36207__$1;
(statearr_36249_37381[(1)] = (12));

} else {
var statearr_36251_37382 = state_36207__$1;
(statearr_36251_37382[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (3))){
var inst_36205 = (state_36207[(2)]);
var state_36207__$1 = state_36207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36207__$1,inst_36205);
} else {
if((state_val_36208 === (12))){
var inst_36171 = (state_36207[(8)]);
var inst_36195 = cljs.core.vec(inst_36171);
var state_36207__$1 = state_36207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36207__$1,(15),out,inst_36195);
} else {
if((state_val_36208 === (2))){
var state_36207__$1 = state_36207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36207__$1,(4),ch);
} else {
if((state_val_36208 === (11))){
var inst_36187 = (state_36207[(2)]);
var inst_36188 = (new Array(n));
var inst_36171 = inst_36188;
var inst_36172 = (0);
var state_36207__$1 = (function (){var statearr_36258 = state_36207;
(statearr_36258[(7)] = inst_36172);

(statearr_36258[(8)] = inst_36171);

(statearr_36258[(10)] = inst_36187);

return statearr_36258;
})();
var statearr_36263_37383 = state_36207__$1;
(statearr_36263_37383[(2)] = null);

(statearr_36263_37383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (9))){
var inst_36171 = (state_36207[(8)]);
var inst_36185 = cljs.core.vec(inst_36171);
var state_36207__$1 = state_36207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36207__$1,(11),out,inst_36185);
} else {
if((state_val_36208 === (5))){
var inst_36175 = (state_36207[(9)]);
var inst_36180 = (state_36207[(11)]);
var inst_36172 = (state_36207[(7)]);
var inst_36171 = (state_36207[(8)]);
var inst_36179 = (inst_36171[inst_36172] = inst_36175);
var inst_36180__$1 = (inst_36172 + (1));
var inst_36181 = (inst_36180__$1 < n);
var state_36207__$1 = (function (){var statearr_36269 = state_36207;
(statearr_36269[(11)] = inst_36180__$1);

(statearr_36269[(12)] = inst_36179);

return statearr_36269;
})();
if(cljs.core.truth_(inst_36181)){
var statearr_36270_37384 = state_36207__$1;
(statearr_36270_37384[(1)] = (8));

} else {
var statearr_36272_37385 = state_36207__$1;
(statearr_36272_37385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (14))){
var inst_36200 = (state_36207[(2)]);
var inst_36201 = cljs.core.async.close_BANG_(out);
var state_36207__$1 = (function (){var statearr_36276 = state_36207;
(statearr_36276[(13)] = inst_36200);

return statearr_36276;
})();
var statearr_36277_37386 = state_36207__$1;
(statearr_36277_37386[(2)] = inst_36201);

(statearr_36277_37386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (10))){
var inst_36191 = (state_36207[(2)]);
var state_36207__$1 = state_36207;
var statearr_36279_37388 = state_36207__$1;
(statearr_36279_37388[(2)] = inst_36191);

(statearr_36279_37388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (8))){
var inst_36180 = (state_36207[(11)]);
var inst_36171 = (state_36207[(8)]);
var tmp36274 = inst_36171;
var inst_36171__$1 = tmp36274;
var inst_36172 = inst_36180;
var state_36207__$1 = (function (){var statearr_36281 = state_36207;
(statearr_36281[(7)] = inst_36172);

(statearr_36281[(8)] = inst_36171__$1);

return statearr_36281;
})();
var statearr_36282_37389 = state_36207__$1;
(statearr_36282_37389[(2)] = null);

(statearr_36282_37389[(1)] = (2));


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
var cljs$core$async$state_machine__33893__auto__ = null;
var cljs$core$async$state_machine__33893__auto____0 = (function (){
var statearr_36285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36285[(0)] = cljs$core$async$state_machine__33893__auto__);

(statearr_36285[(1)] = (1));

return statearr_36285;
});
var cljs$core$async$state_machine__33893__auto____1 = (function (state_36207){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_36207);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e36287){if((e36287 instanceof Object)){
var ex__33896__auto__ = e36287;
var statearr_36290_37390 = state_36207;
(statearr_36290_37390[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37391 = state_36207;
state_36207 = G__37391;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$state_machine__33893__auto__ = function(state_36207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33893__auto____1.call(this,state_36207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33893__auto____0;
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33893__auto____1;
return cljs$core$async$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_36292 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_36292[(6)] = c__34280__auto___37340);

return statearr_36292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36298 = arguments.length;
switch (G__36298) {
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
var c__34280__auto___37413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34281__auto__ = (function (){var switch__33892__auto__ = (function (state_36399){
var state_val_36400 = (state_36399[(1)]);
if((state_val_36400 === (7))){
var inst_36395 = (state_36399[(2)]);
var state_36399__$1 = state_36399;
var statearr_36401_37421 = state_36399__$1;
(statearr_36401_37421[(2)] = inst_36395);

(statearr_36401_37421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (1))){
var inst_36358 = [];
var inst_36359 = inst_36358;
var inst_36360 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36399__$1 = (function (){var statearr_36402 = state_36399;
(statearr_36402[(7)] = inst_36360);

(statearr_36402[(8)] = inst_36359);

return statearr_36402;
})();
var statearr_36403_37430 = state_36399__$1;
(statearr_36403_37430[(2)] = null);

(statearr_36403_37430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (4))){
var inst_36363 = (state_36399[(9)]);
var inst_36363__$1 = (state_36399[(2)]);
var inst_36364 = (inst_36363__$1 == null);
var inst_36365 = cljs.core.not(inst_36364);
var state_36399__$1 = (function (){var statearr_36404 = state_36399;
(statearr_36404[(9)] = inst_36363__$1);

return statearr_36404;
})();
if(inst_36365){
var statearr_36405_37436 = state_36399__$1;
(statearr_36405_37436[(1)] = (5));

} else {
var statearr_36406_37437 = state_36399__$1;
(statearr_36406_37437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (15))){
var inst_36389 = (state_36399[(2)]);
var state_36399__$1 = state_36399;
var statearr_36407_37438 = state_36399__$1;
(statearr_36407_37438[(2)] = inst_36389);

(statearr_36407_37438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (13))){
var state_36399__$1 = state_36399;
var statearr_36408_37492 = state_36399__$1;
(statearr_36408_37492[(2)] = null);

(statearr_36408_37492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (6))){
var inst_36359 = (state_36399[(8)]);
var inst_36384 = inst_36359.length;
var inst_36385 = (inst_36384 > (0));
var state_36399__$1 = state_36399;
if(cljs.core.truth_(inst_36385)){
var statearr_36409_37493 = state_36399__$1;
(statearr_36409_37493[(1)] = (12));

} else {
var statearr_36410_37494 = state_36399__$1;
(statearr_36410_37494[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (3))){
var inst_36397 = (state_36399[(2)]);
var state_36399__$1 = state_36399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36399__$1,inst_36397);
} else {
if((state_val_36400 === (12))){
var inst_36359 = (state_36399[(8)]);
var inst_36387 = cljs.core.vec(inst_36359);
var state_36399__$1 = state_36399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36399__$1,(15),out,inst_36387);
} else {
if((state_val_36400 === (2))){
var state_36399__$1 = state_36399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36399__$1,(4),ch);
} else {
if((state_val_36400 === (11))){
var inst_36363 = (state_36399[(9)]);
var inst_36367 = (state_36399[(10)]);
var inst_36377 = (state_36399[(2)]);
var inst_36378 = [];
var inst_36379 = inst_36378.push(inst_36363);
var inst_36359 = inst_36378;
var inst_36360 = inst_36367;
var state_36399__$1 = (function (){var statearr_36411 = state_36399;
(statearr_36411[(7)] = inst_36360);

(statearr_36411[(8)] = inst_36359);

(statearr_36411[(11)] = inst_36377);

(statearr_36411[(12)] = inst_36379);

return statearr_36411;
})();
var statearr_36412_37497 = state_36399__$1;
(statearr_36412_37497[(2)] = null);

(statearr_36412_37497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (9))){
var inst_36359 = (state_36399[(8)]);
var inst_36375 = cljs.core.vec(inst_36359);
var state_36399__$1 = state_36399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36399__$1,(11),out,inst_36375);
} else {
if((state_val_36400 === (5))){
var inst_36360 = (state_36399[(7)]);
var inst_36363 = (state_36399[(9)]);
var inst_36367 = (state_36399[(10)]);
var inst_36367__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36363) : f.call(null,inst_36363));
var inst_36368 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36367__$1,inst_36360);
var inst_36369 = cljs.core.keyword_identical_QMARK_(inst_36360,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36370 = ((inst_36368) || (inst_36369));
var state_36399__$1 = (function (){var statearr_36413 = state_36399;
(statearr_36413[(10)] = inst_36367__$1);

return statearr_36413;
})();
if(cljs.core.truth_(inst_36370)){
var statearr_36414_37498 = state_36399__$1;
(statearr_36414_37498[(1)] = (8));

} else {
var statearr_36415_37499 = state_36399__$1;
(statearr_36415_37499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (14))){
var inst_36392 = (state_36399[(2)]);
var inst_36393 = cljs.core.async.close_BANG_(out);
var state_36399__$1 = (function (){var statearr_36417 = state_36399;
(statearr_36417[(13)] = inst_36392);

return statearr_36417;
})();
var statearr_36418_37501 = state_36399__$1;
(statearr_36418_37501[(2)] = inst_36393);

(statearr_36418_37501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (10))){
var inst_36382 = (state_36399[(2)]);
var state_36399__$1 = state_36399;
var statearr_36419_37502 = state_36399__$1;
(statearr_36419_37502[(2)] = inst_36382);

(statearr_36419_37502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36400 === (8))){
var inst_36363 = (state_36399[(9)]);
var inst_36359 = (state_36399[(8)]);
var inst_36367 = (state_36399[(10)]);
var inst_36372 = inst_36359.push(inst_36363);
var tmp36416 = inst_36359;
var inst_36359__$1 = tmp36416;
var inst_36360 = inst_36367;
var state_36399__$1 = (function (){var statearr_36420 = state_36399;
(statearr_36420[(7)] = inst_36360);

(statearr_36420[(14)] = inst_36372);

(statearr_36420[(8)] = inst_36359__$1);

return statearr_36420;
})();
var statearr_36421_37503 = state_36399__$1;
(statearr_36421_37503[(2)] = null);

(statearr_36421_37503[(1)] = (2));


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
var cljs$core$async$state_machine__33893__auto__ = null;
var cljs$core$async$state_machine__33893__auto____0 = (function (){
var statearr_36422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36422[(0)] = cljs$core$async$state_machine__33893__auto__);

(statearr_36422[(1)] = (1));

return statearr_36422;
});
var cljs$core$async$state_machine__33893__auto____1 = (function (state_36399){
while(true){
var ret_value__33894__auto__ = (function (){try{while(true){
var result__33895__auto__ = switch__33892__auto__(state_36399);
if(cljs.core.keyword_identical_QMARK_(result__33895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33895__auto__;
}
break;
}
}catch (e36423){if((e36423 instanceof Object)){
var ex__33896__auto__ = e36423;
var statearr_36424_37505 = state_36399;
(statearr_36424_37505[(5)] = ex__33896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37508 = state_36399;
state_36399 = G__37508;
continue;
} else {
return ret_value__33894__auto__;
}
break;
}
});
cljs$core$async$state_machine__33893__auto__ = function(state_36399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33893__auto____1.call(this,state_36399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33893__auto____0;
cljs$core$async$state_machine__33893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33893__auto____1;
return cljs$core$async$state_machine__33893__auto__;
})()
})();
var state__34282__auto__ = (function (){var statearr_36492 = (f__34281__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34281__auto__.cljs$core$IFn$_invoke$arity$0() : f__34281__auto__.call(null));
(statearr_36492[(6)] = c__34280__auto___37413);

return statearr_36492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34282__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
