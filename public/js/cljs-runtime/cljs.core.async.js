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
var G__34863 = arguments.length;
switch (G__34863) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34864 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34864 = (function (f,blockable,meta34865){
this.f = f;
this.blockable = blockable;
this.meta34865 = meta34865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34866,meta34865__$1){
var self__ = this;
var _34866__$1 = this;
return (new cljs.core.async.t_cljs$core$async34864(self__.f,self__.blockable,meta34865__$1));
}));

(cljs.core.async.t_cljs$core$async34864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34866){
var self__ = this;
var _34866__$1 = this;
return self__.meta34865;
}));

(cljs.core.async.t_cljs$core$async34864.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34864.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34865","meta34865",1092759367,null)], null);
}));

(cljs.core.async.t_cljs$core$async34864.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34864");

(cljs.core.async.t_cljs$core$async34864.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34864");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34864.
 */
cljs.core.async.__GT_t_cljs$core$async34864 = (function cljs$core$async$__GT_t_cljs$core$async34864(f__$1,blockable__$1,meta34865){
return (new cljs.core.async.t_cljs$core$async34864(f__$1,blockable__$1,meta34865));
});

}

return (new cljs.core.async.t_cljs$core$async34864(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34882 = arguments.length;
switch (G__34882) {
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
var G__34884 = arguments.length;
switch (G__34884) {
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
var G__34890 = arguments.length;
switch (G__34890) {
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
var val_36710 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36710) : fn1.call(null,val_36710));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36710) : fn1.call(null,val_36710));
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
var G__34898 = arguments.length;
switch (G__34898) {
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
var n__4666__auto___36719 = n;
var x_36720 = (0);
while(true){
if((x_36720 < n__4666__auto___36719)){
(a[x_36720] = x_36720);

var G__36722 = (x_36720 + (1));
x_36720 = G__36722;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34899 = (function (flag,meta34900){
this.flag = flag;
this.meta34900 = meta34900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34901,meta34900__$1){
var self__ = this;
var _34901__$1 = this;
return (new cljs.core.async.t_cljs$core$async34899(self__.flag,meta34900__$1));
}));

(cljs.core.async.t_cljs$core$async34899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34901){
var self__ = this;
var _34901__$1 = this;
return self__.meta34900;
}));

(cljs.core.async.t_cljs$core$async34899.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34899.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34900","meta34900",1506581841,null)], null);
}));

(cljs.core.async.t_cljs$core$async34899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34899");

(cljs.core.async.t_cljs$core$async34899.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34899.
 */
cljs.core.async.__GT_t_cljs$core$async34899 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34899(flag__$1,meta34900){
return (new cljs.core.async.t_cljs$core$async34899(flag__$1,meta34900));
});

}

return (new cljs.core.async.t_cljs$core$async34899(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34902 = (function (flag,cb,meta34903){
this.flag = flag;
this.cb = cb;
this.meta34903 = meta34903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34904,meta34903__$1){
var self__ = this;
var _34904__$1 = this;
return (new cljs.core.async.t_cljs$core$async34902(self__.flag,self__.cb,meta34903__$1));
}));

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34904){
var self__ = this;
var _34904__$1 = this;
return self__.meta34903;
}));

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34903","meta34903",1032352852,null)], null);
}));

(cljs.core.async.t_cljs$core$async34902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34902");

(cljs.core.async.t_cljs$core$async34902.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34902.
 */
cljs.core.async.__GT_t_cljs$core$async34902 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34902(flag__$1,cb__$1,meta34903){
return (new cljs.core.async.t_cljs$core$async34902(flag__$1,cb__$1,meta34903));
});

}

return (new cljs.core.async.t_cljs$core$async34902(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34905_SHARP_){
var G__34907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34905_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34907) : fret.call(null,G__34907));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34906_SHARP_){
var G__34908 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34906_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34908) : fret.call(null,G__34908));
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
var G__36741 = (i + (1));
i = G__36741;
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
var len__4789__auto___36742 = arguments.length;
var i__4790__auto___36743 = (0);
while(true){
if((i__4790__auto___36743 < len__4789__auto___36742)){
args__4795__auto__.push((arguments[i__4790__auto___36743]));

var G__36744 = (i__4790__auto___36743 + (1));
i__4790__auto___36743 = G__36744;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34911){
var map__34912 = p__34911;
var map__34912__$1 = (((((!((map__34912 == null))))?(((((map__34912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34912):map__34912);
var opts = map__34912__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34909){
var G__34910 = cljs.core.first(seq34909);
var seq34909__$1 = cljs.core.next(seq34909);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34910,seq34909__$1);
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
var G__34916 = arguments.length;
switch (G__34916) {
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
var c__34784__auto___36767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_34940){
var state_val_34941 = (state_34940[(1)]);
if((state_val_34941 === (7))){
var inst_34936 = (state_34940[(2)]);
var state_34940__$1 = state_34940;
var statearr_34942_36771 = state_34940__$1;
(statearr_34942_36771[(2)] = inst_34936);

(statearr_34942_36771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (1))){
var state_34940__$1 = state_34940;
var statearr_34943_36772 = state_34940__$1;
(statearr_34943_36772[(2)] = null);

(statearr_34943_36772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (4))){
var inst_34919 = (state_34940[(7)]);
var inst_34919__$1 = (state_34940[(2)]);
var inst_34920 = (inst_34919__$1 == null);
var state_34940__$1 = (function (){var statearr_34944 = state_34940;
(statearr_34944[(7)] = inst_34919__$1);

return statearr_34944;
})();
if(cljs.core.truth_(inst_34920)){
var statearr_34945_36774 = state_34940__$1;
(statearr_34945_36774[(1)] = (5));

} else {
var statearr_34946_36775 = state_34940__$1;
(statearr_34946_36775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (13))){
var state_34940__$1 = state_34940;
var statearr_34949_36776 = state_34940__$1;
(statearr_34949_36776[(2)] = null);

(statearr_34949_36776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (6))){
var inst_34919 = (state_34940[(7)]);
var state_34940__$1 = state_34940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34940__$1,(11),to,inst_34919);
} else {
if((state_val_34941 === (3))){
var inst_34938 = (state_34940[(2)]);
var state_34940__$1 = state_34940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34940__$1,inst_34938);
} else {
if((state_val_34941 === (12))){
var state_34940__$1 = state_34940;
var statearr_34950_36781 = state_34940__$1;
(statearr_34950_36781[(2)] = null);

(statearr_34950_36781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (2))){
var state_34940__$1 = state_34940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34940__$1,(4),from);
} else {
if((state_val_34941 === (11))){
var inst_34929 = (state_34940[(2)]);
var state_34940__$1 = state_34940;
if(cljs.core.truth_(inst_34929)){
var statearr_34951_36782 = state_34940__$1;
(statearr_34951_36782[(1)] = (12));

} else {
var statearr_34952_36783 = state_34940__$1;
(statearr_34952_36783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (9))){
var state_34940__$1 = state_34940;
var statearr_34953_36786 = state_34940__$1;
(statearr_34953_36786[(2)] = null);

(statearr_34953_36786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (5))){
var state_34940__$1 = state_34940;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34954_36787 = state_34940__$1;
(statearr_34954_36787[(1)] = (8));

} else {
var statearr_34955_36788 = state_34940__$1;
(statearr_34955_36788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (14))){
var inst_34934 = (state_34940[(2)]);
var state_34940__$1 = state_34940;
var statearr_34956_36791 = state_34940__$1;
(statearr_34956_36791[(2)] = inst_34934);

(statearr_34956_36791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (10))){
var inst_34926 = (state_34940[(2)]);
var state_34940__$1 = state_34940;
var statearr_34961_36793 = state_34940__$1;
(statearr_34961_36793[(2)] = inst_34926);

(statearr_34961_36793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (8))){
var inst_34923 = cljs.core.async.close_BANG_(to);
var state_34940__$1 = state_34940;
var statearr_34964_36795 = state_34940__$1;
(statearr_34964_36795[(2)] = inst_34923);

(statearr_34964_36795[(1)] = (10));


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
var cljs$core$async$state_machine__34463__auto__ = null;
var cljs$core$async$state_machine__34463__auto____0 = (function (){
var statearr_34967 = [null,null,null,null,null,null,null,null];
(statearr_34967[(0)] = cljs$core$async$state_machine__34463__auto__);

(statearr_34967[(1)] = (1));

return statearr_34967;
});
var cljs$core$async$state_machine__34463__auto____1 = (function (state_34940){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_34940);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e34968){if((e34968 instanceof Object)){
var ex__34466__auto__ = e34968;
var statearr_34973_36797 = state_34940;
(statearr_34973_36797[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36801 = state_34940;
state_34940 = G__36801;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$state_machine__34463__auto__ = function(state_34940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34463__auto____1.call(this,state_34940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34463__auto____0;
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34463__auto____1;
return cljs$core$async$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_34978 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_34978[(6)] = c__34784__auto___36767);

return statearr_34978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
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
var process = (function (p__34986){
var vec__34987 = p__34986;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987,(1),null);
var job = vec__34987;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34784__auto___36805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_35000){
var state_val_35001 = (state_35000[(1)]);
if((state_val_35001 === (1))){
var state_35000__$1 = state_35000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35000__$1,(2),res,v);
} else {
if((state_val_35001 === (2))){
var inst_34997 = (state_35000[(2)]);
var inst_34998 = cljs.core.async.close_BANG_(res);
var state_35000__$1 = (function (){var statearr_35007 = state_35000;
(statearr_35007[(7)] = inst_34997);

return statearr_35007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35000__$1,inst_34998);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0 = (function (){
var statearr_35008 = [null,null,null,null,null,null,null,null];
(statearr_35008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__);

(statearr_35008[(1)] = (1));

return statearr_35008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1 = (function (state_35000){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_35000);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e35009){if((e35009 instanceof Object)){
var ex__34466__auto__ = e35009;
var statearr_35014_36811 = state_35000;
(statearr_35014_36811[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36812 = state_35000;
state_35000 = G__36812;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__ = function(state_35000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1.call(this,state_35000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_35018 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_35018[(6)] = c__34784__auto___36805);

return statearr_35018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35019){
var vec__35020 = p__35019;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35020,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35020,(1),null);
var job = vec__35020;
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
var n__4666__auto___36816 = n;
var __36817 = (0);
while(true){
if((__36817 < n__4666__auto___36816)){
var G__35023_36818 = type;
var G__35023_36819__$1 = (((G__35023_36818 instanceof cljs.core.Keyword))?G__35023_36818.fqn:null);
switch (G__35023_36819__$1) {
case "compute":
var c__34784__auto___36821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36817,c__34784__auto___36821,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async){
return (function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = ((function (__36817,c__34784__auto___36821,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async){
return (function (state_35040){
var state_val_35041 = (state_35040[(1)]);
if((state_val_35041 === (1))){
var state_35040__$1 = state_35040;
var statearr_35046_36822 = state_35040__$1;
(statearr_35046_36822[(2)] = null);

(statearr_35046_36822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (2))){
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35040__$1,(4),jobs);
} else {
if((state_val_35041 === (3))){
var inst_35034 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35040__$1,inst_35034);
} else {
if((state_val_35041 === (4))){
var inst_35026 = (state_35040[(2)]);
var inst_35027 = process(inst_35026);
var state_35040__$1 = state_35040;
if(cljs.core.truth_(inst_35027)){
var statearr_35052_36823 = state_35040__$1;
(statearr_35052_36823[(1)] = (5));

} else {
var statearr_35053_36824 = state_35040__$1;
(statearr_35053_36824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (5))){
var state_35040__$1 = state_35040;
var statearr_35058_36825 = state_35040__$1;
(statearr_35058_36825[(2)] = null);

(statearr_35058_36825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (6))){
var state_35040__$1 = state_35040;
var statearr_35063_36826 = state_35040__$1;
(statearr_35063_36826[(2)] = null);

(statearr_35063_36826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35041 === (7))){
var inst_35032 = (state_35040[(2)]);
var state_35040__$1 = state_35040;
var statearr_35064_36827 = state_35040__$1;
(statearr_35064_36827[(2)] = inst_35032);

(statearr_35064_36827[(1)] = (3));


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
});})(__36817,c__34784__auto___36821,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async))
;
return ((function (__36817,switch__34462__auto__,c__34784__auto___36821,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0 = (function (){
var statearr_35070 = [null,null,null,null,null,null,null];
(statearr_35070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__);

(statearr_35070[(1)] = (1));

return statearr_35070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1 = (function (state_35040){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_35040);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e35071){if((e35071 instanceof Object)){
var ex__34466__auto__ = e35071;
var statearr_35074_36837 = state_35040;
(statearr_35074_36837[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36838 = state_35040;
state_35040 = G__36838;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__ = function(state_35040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1.call(this,state_35040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__;
})()
;})(__36817,switch__34462__auto__,c__34784__auto___36821,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async))
})();
var state__34786__auto__ = (function (){var statearr_35077 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_35077[(6)] = c__34784__auto___36821);

return statearr_35077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
});})(__36817,c__34784__auto___36821,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async))
);


break;
case "async":
var c__34784__auto___36839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36817,c__34784__auto___36839,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async){
return (function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = ((function (__36817,c__34784__auto___36839,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async){
return (function (state_35093){
var state_val_35095 = (state_35093[(1)]);
if((state_val_35095 === (1))){
var state_35093__$1 = state_35093;
var statearr_35107_36840 = state_35093__$1;
(statearr_35107_36840[(2)] = null);

(statearr_35107_36840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (2))){
var state_35093__$1 = state_35093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35093__$1,(4),jobs);
} else {
if((state_val_35095 === (3))){
var inst_35091 = (state_35093[(2)]);
var state_35093__$1 = state_35093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35093__$1,inst_35091);
} else {
if((state_val_35095 === (4))){
var inst_35082 = (state_35093[(2)]);
var inst_35084 = async(inst_35082);
var state_35093__$1 = state_35093;
if(cljs.core.truth_(inst_35084)){
var statearr_35108_36841 = state_35093__$1;
(statearr_35108_36841[(1)] = (5));

} else {
var statearr_35109_36842 = state_35093__$1;
(statearr_35109_36842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (5))){
var state_35093__$1 = state_35093;
var statearr_35110_36843 = state_35093__$1;
(statearr_35110_36843[(2)] = null);

(statearr_35110_36843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (6))){
var state_35093__$1 = state_35093;
var statearr_35111_36844 = state_35093__$1;
(statearr_35111_36844[(2)] = null);

(statearr_35111_36844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35095 === (7))){
var inst_35089 = (state_35093[(2)]);
var state_35093__$1 = state_35093;
var statearr_35112_36845 = state_35093__$1;
(statearr_35112_36845[(2)] = inst_35089);

(statearr_35112_36845[(1)] = (3));


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
});})(__36817,c__34784__auto___36839,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async))
;
return ((function (__36817,switch__34462__auto__,c__34784__auto___36839,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0 = (function (){
var statearr_35113 = [null,null,null,null,null,null,null];
(statearr_35113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__);

(statearr_35113[(1)] = (1));

return statearr_35113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1 = (function (state_35093){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_35093);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e35114){if((e35114 instanceof Object)){
var ex__34466__auto__ = e35114;
var statearr_35115_36846 = state_35093;
(statearr_35115_36846[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36847 = state_35093;
state_35093 = G__36847;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__ = function(state_35093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1.call(this,state_35093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__;
})()
;})(__36817,switch__34462__auto__,c__34784__auto___36839,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async))
})();
var state__34786__auto__ = (function (){var statearr_35120 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_35120[(6)] = c__34784__auto___36839);

return statearr_35120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
});})(__36817,c__34784__auto___36839,G__35023_36818,G__35023_36819__$1,n__4666__auto___36816,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35023_36819__$1)].join('')));

}

var G__36848 = (__36817 + (1));
__36817 = G__36848;
continue;
} else {
}
break;
}

var c__34784__auto___36849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_35144){
var state_val_35145 = (state_35144[(1)]);
if((state_val_35145 === (7))){
var inst_35140 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
var statearr_35152_36850 = state_35144__$1;
(statearr_35152_36850[(2)] = inst_35140);

(statearr_35152_36850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (1))){
var state_35144__$1 = state_35144;
var statearr_35156_36851 = state_35144__$1;
(statearr_35156_36851[(2)] = null);

(statearr_35156_36851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (4))){
var inst_35123 = (state_35144[(7)]);
var inst_35123__$1 = (state_35144[(2)]);
var inst_35124 = (inst_35123__$1 == null);
var state_35144__$1 = (function (){var statearr_35159 = state_35144;
(statearr_35159[(7)] = inst_35123__$1);

return statearr_35159;
})();
if(cljs.core.truth_(inst_35124)){
var statearr_35161_36856 = state_35144__$1;
(statearr_35161_36856[(1)] = (5));

} else {
var statearr_35172_36857 = state_35144__$1;
(statearr_35172_36857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (6))){
var inst_35123 = (state_35144[(7)]);
var inst_35128 = (state_35144[(8)]);
var inst_35128__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35130 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35132 = [inst_35123,inst_35128__$1];
var inst_35133 = (new cljs.core.PersistentVector(null,2,(5),inst_35130,inst_35132,null));
var state_35144__$1 = (function (){var statearr_35178 = state_35144;
(statearr_35178[(8)] = inst_35128__$1);

return statearr_35178;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35144__$1,(8),jobs,inst_35133);
} else {
if((state_val_35145 === (3))){
var inst_35142 = (state_35144[(2)]);
var state_35144__$1 = state_35144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35144__$1,inst_35142);
} else {
if((state_val_35145 === (2))){
var state_35144__$1 = state_35144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35144__$1,(4),from);
} else {
if((state_val_35145 === (9))){
var inst_35137 = (state_35144[(2)]);
var state_35144__$1 = (function (){var statearr_35180 = state_35144;
(statearr_35180[(9)] = inst_35137);

return statearr_35180;
})();
var statearr_35181_36859 = state_35144__$1;
(statearr_35181_36859[(2)] = null);

(statearr_35181_36859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (5))){
var inst_35126 = cljs.core.async.close_BANG_(jobs);
var state_35144__$1 = state_35144;
var statearr_35182_36860 = state_35144__$1;
(statearr_35182_36860[(2)] = inst_35126);

(statearr_35182_36860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35145 === (8))){
var inst_35128 = (state_35144[(8)]);
var inst_35135 = (state_35144[(2)]);
var state_35144__$1 = (function (){var statearr_35183 = state_35144;
(statearr_35183[(10)] = inst_35135);

return statearr_35183;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35144__$1,(9),results,inst_35128);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0 = (function (){
var statearr_35184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35184[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__);

(statearr_35184[(1)] = (1));

return statearr_35184;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1 = (function (state_35144){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_35144);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e35185){if((e35185 instanceof Object)){
var ex__34466__auto__ = e35185;
var statearr_35186_36863 = state_35144;
(statearr_35186_36863[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35185;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36865 = state_35144;
state_35144 = G__36865;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__ = function(state_35144){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1.call(this,state_35144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_35192 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_35192[(6)] = c__34784__auto___36849);

return statearr_35192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));


var c__34784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_35230){
var state_val_35231 = (state_35230[(1)]);
if((state_val_35231 === (7))){
var inst_35226 = (state_35230[(2)]);
var state_35230__$1 = state_35230;
var statearr_35248_36867 = state_35230__$1;
(statearr_35248_36867[(2)] = inst_35226);

(statearr_35248_36867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (20))){
var state_35230__$1 = state_35230;
var statearr_35249_36868 = state_35230__$1;
(statearr_35249_36868[(2)] = null);

(statearr_35249_36868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (1))){
var state_35230__$1 = state_35230;
var statearr_35250_36869 = state_35230__$1;
(statearr_35250_36869[(2)] = null);

(statearr_35250_36869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (4))){
var inst_35195 = (state_35230[(7)]);
var inst_35195__$1 = (state_35230[(2)]);
var inst_35196 = (inst_35195__$1 == null);
var state_35230__$1 = (function (){var statearr_35251 = state_35230;
(statearr_35251[(7)] = inst_35195__$1);

return statearr_35251;
})();
if(cljs.core.truth_(inst_35196)){
var statearr_35252_36870 = state_35230__$1;
(statearr_35252_36870[(1)] = (5));

} else {
var statearr_35257_36871 = state_35230__$1;
(statearr_35257_36871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (15))){
var inst_35208 = (state_35230[(8)]);
var state_35230__$1 = state_35230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35230__$1,(18),to,inst_35208);
} else {
if((state_val_35231 === (21))){
var inst_35221 = (state_35230[(2)]);
var state_35230__$1 = state_35230;
var statearr_35264_36872 = state_35230__$1;
(statearr_35264_36872[(2)] = inst_35221);

(statearr_35264_36872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (13))){
var inst_35223 = (state_35230[(2)]);
var state_35230__$1 = (function (){var statearr_35265 = state_35230;
(statearr_35265[(9)] = inst_35223);

return statearr_35265;
})();
var statearr_35266_36873 = state_35230__$1;
(statearr_35266_36873[(2)] = null);

(statearr_35266_36873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (6))){
var inst_35195 = (state_35230[(7)]);
var state_35230__$1 = state_35230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35230__$1,(11),inst_35195);
} else {
if((state_val_35231 === (17))){
var inst_35216 = (state_35230[(2)]);
var state_35230__$1 = state_35230;
if(cljs.core.truth_(inst_35216)){
var statearr_35267_36874 = state_35230__$1;
(statearr_35267_36874[(1)] = (19));

} else {
var statearr_35268_36875 = state_35230__$1;
(statearr_35268_36875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (3))){
var inst_35228 = (state_35230[(2)]);
var state_35230__$1 = state_35230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35230__$1,inst_35228);
} else {
if((state_val_35231 === (12))){
var inst_35205 = (state_35230[(10)]);
var state_35230__$1 = state_35230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35230__$1,(14),inst_35205);
} else {
if((state_val_35231 === (2))){
var state_35230__$1 = state_35230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35230__$1,(4),results);
} else {
if((state_val_35231 === (19))){
var state_35230__$1 = state_35230;
var statearr_35269_36879 = state_35230__$1;
(statearr_35269_36879[(2)] = null);

(statearr_35269_36879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (11))){
var inst_35205 = (state_35230[(2)]);
var state_35230__$1 = (function (){var statearr_35270 = state_35230;
(statearr_35270[(10)] = inst_35205);

return statearr_35270;
})();
var statearr_35271_36880 = state_35230__$1;
(statearr_35271_36880[(2)] = null);

(statearr_35271_36880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (9))){
var state_35230__$1 = state_35230;
var statearr_35272_36881 = state_35230__$1;
(statearr_35272_36881[(2)] = null);

(statearr_35272_36881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (5))){
var state_35230__$1 = state_35230;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35273_36882 = state_35230__$1;
(statearr_35273_36882[(1)] = (8));

} else {
var statearr_35282_36883 = state_35230__$1;
(statearr_35282_36883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (14))){
var inst_35208 = (state_35230[(8)]);
var inst_35208__$1 = (state_35230[(2)]);
var inst_35209 = (inst_35208__$1 == null);
var inst_35210 = cljs.core.not(inst_35209);
var state_35230__$1 = (function (){var statearr_35290 = state_35230;
(statearr_35290[(8)] = inst_35208__$1);

return statearr_35290;
})();
if(inst_35210){
var statearr_35304_36884 = state_35230__$1;
(statearr_35304_36884[(1)] = (15));

} else {
var statearr_35305_36885 = state_35230__$1;
(statearr_35305_36885[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (16))){
var state_35230__$1 = state_35230;
var statearr_35306_36886 = state_35230__$1;
(statearr_35306_36886[(2)] = false);

(statearr_35306_36886[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (10))){
var inst_35202 = (state_35230[(2)]);
var state_35230__$1 = state_35230;
var statearr_35309_36887 = state_35230__$1;
(statearr_35309_36887[(2)] = inst_35202);

(statearr_35309_36887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (18))){
var inst_35213 = (state_35230[(2)]);
var state_35230__$1 = state_35230;
var statearr_35310_36889 = state_35230__$1;
(statearr_35310_36889[(2)] = inst_35213);

(statearr_35310_36889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (8))){
var inst_35199 = cljs.core.async.close_BANG_(to);
var state_35230__$1 = state_35230;
var statearr_35311_36890 = state_35230__$1;
(statearr_35311_36890[(2)] = inst_35199);

(statearr_35311_36890[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0 = (function (){
var statearr_35312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__);

(statearr_35312[(1)] = (1));

return statearr_35312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1 = (function (state_35230){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_35230);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e35313){if((e35313 instanceof Object)){
var ex__34466__auto__ = e35313;
var statearr_35314_36894 = state_35230;
(statearr_35314_36894[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36895 = state_35230;
state_35230 = G__36895;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__ = function(state_35230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1.call(this,state_35230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34463__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_35315 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_35315[(6)] = c__34784__auto__);

return statearr_35315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

return c__34784__auto__;
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
var G__35332 = arguments.length;
switch (G__35332) {
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
var G__35341 = arguments.length;
switch (G__35341) {
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
var G__35348 = arguments.length;
switch (G__35348) {
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
var c__34784__auto___36900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_35374){
var state_val_35375 = (state_35374[(1)]);
if((state_val_35375 === (7))){
var inst_35370 = (state_35374[(2)]);
var state_35374__$1 = state_35374;
var statearr_35376_36901 = state_35374__$1;
(statearr_35376_36901[(2)] = inst_35370);

(statearr_35376_36901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35375 === (1))){
var state_35374__$1 = state_35374;
var statearr_35377_36902 = state_35374__$1;
(statearr_35377_36902[(2)] = null);

(statearr_35377_36902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35375 === (4))){
var inst_35351 = (state_35374[(7)]);
var inst_35351__$1 = (state_35374[(2)]);
var inst_35352 = (inst_35351__$1 == null);
var state_35374__$1 = (function (){var statearr_35378 = state_35374;
(statearr_35378[(7)] = inst_35351__$1);

return statearr_35378;
})();
if(cljs.core.truth_(inst_35352)){
var statearr_35379_36904 = state_35374__$1;
(statearr_35379_36904[(1)] = (5));

} else {
var statearr_35380_36905 = state_35374__$1;
(statearr_35380_36905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35375 === (13))){
var state_35374__$1 = state_35374;
var statearr_35381_36907 = state_35374__$1;
(statearr_35381_36907[(2)] = null);

(statearr_35381_36907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35375 === (6))){
var inst_35351 = (state_35374[(7)]);
var inst_35357 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35351) : p.call(null,inst_35351));
var state_35374__$1 = state_35374;
if(cljs.core.truth_(inst_35357)){
var statearr_35382_36908 = state_35374__$1;
(statearr_35382_36908[(1)] = (9));

} else {
var statearr_35384_36909 = state_35374__$1;
(statearr_35384_36909[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35375 === (3))){
var inst_35372 = (state_35374[(2)]);
var state_35374__$1 = state_35374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35374__$1,inst_35372);
} else {
if((state_val_35375 === (12))){
var state_35374__$1 = state_35374;
var statearr_35385_36910 = state_35374__$1;
(statearr_35385_36910[(2)] = null);

(statearr_35385_36910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35375 === (2))){
var state_35374__$1 = state_35374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35374__$1,(4),ch);
} else {
if((state_val_35375 === (11))){
var inst_35351 = (state_35374[(7)]);
var inst_35361 = (state_35374[(2)]);
var state_35374__$1 = state_35374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35374__$1,(8),inst_35361,inst_35351);
} else {
if((state_val_35375 === (9))){
var state_35374__$1 = state_35374;
var statearr_35386_36911 = state_35374__$1;
(statearr_35386_36911[(2)] = tc);

(statearr_35386_36911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35375 === (5))){
var inst_35354 = cljs.core.async.close_BANG_(tc);
var inst_35355 = cljs.core.async.close_BANG_(fc);
var state_35374__$1 = (function (){var statearr_35387 = state_35374;
(statearr_35387[(8)] = inst_35354);

return statearr_35387;
})();
var statearr_35389_36912 = state_35374__$1;
(statearr_35389_36912[(2)] = inst_35355);

(statearr_35389_36912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35375 === (14))){
var inst_35368 = (state_35374[(2)]);
var state_35374__$1 = state_35374;
var statearr_35390_36914 = state_35374__$1;
(statearr_35390_36914[(2)] = inst_35368);

(statearr_35390_36914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35375 === (10))){
var state_35374__$1 = state_35374;
var statearr_35391_36916 = state_35374__$1;
(statearr_35391_36916[(2)] = fc);

(statearr_35391_36916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35375 === (8))){
var inst_35363 = (state_35374[(2)]);
var state_35374__$1 = state_35374;
if(cljs.core.truth_(inst_35363)){
var statearr_35392_36917 = state_35374__$1;
(statearr_35392_36917[(1)] = (12));

} else {
var statearr_35393_36918 = state_35374__$1;
(statearr_35393_36918[(1)] = (13));

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
var cljs$core$async$state_machine__34463__auto__ = null;
var cljs$core$async$state_machine__34463__auto____0 = (function (){
var statearr_35398 = [null,null,null,null,null,null,null,null,null];
(statearr_35398[(0)] = cljs$core$async$state_machine__34463__auto__);

(statearr_35398[(1)] = (1));

return statearr_35398;
});
var cljs$core$async$state_machine__34463__auto____1 = (function (state_35374){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_35374);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e35403){if((e35403 instanceof Object)){
var ex__34466__auto__ = e35403;
var statearr_35404_36919 = state_35374;
(statearr_35404_36919[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36920 = state_35374;
state_35374 = G__36920;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$state_machine__34463__auto__ = function(state_35374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34463__auto____1.call(this,state_35374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34463__auto____0;
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34463__auto____1;
return cljs$core$async$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_35409 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_35409[(6)] = c__34784__auto___36900);

return statearr_35409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
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
var c__34784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_35430){
var state_val_35431 = (state_35430[(1)]);
if((state_val_35431 === (7))){
var inst_35426 = (state_35430[(2)]);
var state_35430__$1 = state_35430;
var statearr_35432_36921 = state_35430__$1;
(statearr_35432_36921[(2)] = inst_35426);

(statearr_35432_36921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (1))){
var inst_35410 = init;
var state_35430__$1 = (function (){var statearr_35433 = state_35430;
(statearr_35433[(7)] = inst_35410);

return statearr_35433;
})();
var statearr_35434_36922 = state_35430__$1;
(statearr_35434_36922[(2)] = null);

(statearr_35434_36922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (4))){
var inst_35413 = (state_35430[(8)]);
var inst_35413__$1 = (state_35430[(2)]);
var inst_35414 = (inst_35413__$1 == null);
var state_35430__$1 = (function (){var statearr_35435 = state_35430;
(statearr_35435[(8)] = inst_35413__$1);

return statearr_35435;
})();
if(cljs.core.truth_(inst_35414)){
var statearr_35436_36923 = state_35430__$1;
(statearr_35436_36923[(1)] = (5));

} else {
var statearr_35437_36924 = state_35430__$1;
(statearr_35437_36924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (6))){
var inst_35413 = (state_35430[(8)]);
var inst_35417 = (state_35430[(9)]);
var inst_35410 = (state_35430[(7)]);
var inst_35417__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35410,inst_35413) : f.call(null,inst_35410,inst_35413));
var inst_35418 = cljs.core.reduced_QMARK_(inst_35417__$1);
var state_35430__$1 = (function (){var statearr_35438 = state_35430;
(statearr_35438[(9)] = inst_35417__$1);

return statearr_35438;
})();
if(inst_35418){
var statearr_35439_36925 = state_35430__$1;
(statearr_35439_36925[(1)] = (8));

} else {
var statearr_35440_36926 = state_35430__$1;
(statearr_35440_36926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (3))){
var inst_35428 = (state_35430[(2)]);
var state_35430__$1 = state_35430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35430__$1,inst_35428);
} else {
if((state_val_35431 === (2))){
var state_35430__$1 = state_35430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35430__$1,(4),ch);
} else {
if((state_val_35431 === (9))){
var inst_35417 = (state_35430[(9)]);
var inst_35410 = inst_35417;
var state_35430__$1 = (function (){var statearr_35441 = state_35430;
(statearr_35441[(7)] = inst_35410);

return statearr_35441;
})();
var statearr_35442_36927 = state_35430__$1;
(statearr_35442_36927[(2)] = null);

(statearr_35442_36927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (5))){
var inst_35410 = (state_35430[(7)]);
var state_35430__$1 = state_35430;
var statearr_35443_36928 = state_35430__$1;
(statearr_35443_36928[(2)] = inst_35410);

(statearr_35443_36928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (10))){
var inst_35424 = (state_35430[(2)]);
var state_35430__$1 = state_35430;
var statearr_35444_36929 = state_35430__$1;
(statearr_35444_36929[(2)] = inst_35424);

(statearr_35444_36929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (8))){
var inst_35417 = (state_35430[(9)]);
var inst_35420 = cljs.core.deref(inst_35417);
var state_35430__$1 = state_35430;
var statearr_35445_36930 = state_35430__$1;
(statearr_35445_36930[(2)] = inst_35420);

(statearr_35445_36930[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34463__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34463__auto____0 = (function (){
var statearr_35446 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35446[(0)] = cljs$core$async$reduce_$_state_machine__34463__auto__);

(statearr_35446[(1)] = (1));

return statearr_35446;
});
var cljs$core$async$reduce_$_state_machine__34463__auto____1 = (function (state_35430){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_35430);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e35447){if((e35447 instanceof Object)){
var ex__34466__auto__ = e35447;
var statearr_35448_36931 = state_35430;
(statearr_35448_36931[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35447;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36932 = state_35430;
state_35430 = G__36932;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34463__auto__ = function(state_35430){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34463__auto____1.call(this,state_35430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34463__auto____0;
cljs$core$async$reduce_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34463__auto____1;
return cljs$core$async$reduce_$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_35449 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_35449[(6)] = c__34784__auto__);

return statearr_35449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

return c__34784__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_35455){
var state_val_35456 = (state_35455[(1)]);
if((state_val_35456 === (1))){
var inst_35450 = cljs.core.async.reduce(f__$1,init,ch);
var state_35455__$1 = state_35455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35455__$1,(2),inst_35450);
} else {
if((state_val_35456 === (2))){
var inst_35452 = (state_35455[(2)]);
var inst_35453 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35452) : f__$1.call(null,inst_35452));
var state_35455__$1 = state_35455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35455__$1,inst_35453);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34463__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34463__auto____0 = (function (){
var statearr_35457 = [null,null,null,null,null,null,null];
(statearr_35457[(0)] = cljs$core$async$transduce_$_state_machine__34463__auto__);

(statearr_35457[(1)] = (1));

return statearr_35457;
});
var cljs$core$async$transduce_$_state_machine__34463__auto____1 = (function (state_35455){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_35455);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e35458){if((e35458 instanceof Object)){
var ex__34466__auto__ = e35458;
var statearr_35459_36936 = state_35455;
(statearr_35459_36936[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35458;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36938 = state_35455;
state_35455 = G__36938;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34463__auto__ = function(state_35455){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34463__auto____1.call(this,state_35455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34463__auto____0;
cljs$core$async$transduce_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34463__auto____1;
return cljs$core$async$transduce_$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_35460 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_35460[(6)] = c__34784__auto__);

return statearr_35460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

return c__34784__auto__;
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
var G__35462 = arguments.length;
switch (G__35462) {
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
var c__34784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_35487){
var state_val_35488 = (state_35487[(1)]);
if((state_val_35488 === (7))){
var inst_35469 = (state_35487[(2)]);
var state_35487__$1 = state_35487;
var statearr_35489_36940 = state_35487__$1;
(statearr_35489_36940[(2)] = inst_35469);

(statearr_35489_36940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35488 === (1))){
var inst_35463 = cljs.core.seq(coll);
var inst_35464 = inst_35463;
var state_35487__$1 = (function (){var statearr_35490 = state_35487;
(statearr_35490[(7)] = inst_35464);

return statearr_35490;
})();
var statearr_35491_36942 = state_35487__$1;
(statearr_35491_36942[(2)] = null);

(statearr_35491_36942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35488 === (4))){
var inst_35464 = (state_35487[(7)]);
var inst_35467 = cljs.core.first(inst_35464);
var state_35487__$1 = state_35487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35487__$1,(7),ch,inst_35467);
} else {
if((state_val_35488 === (13))){
var inst_35481 = (state_35487[(2)]);
var state_35487__$1 = state_35487;
var statearr_35492_36944 = state_35487__$1;
(statearr_35492_36944[(2)] = inst_35481);

(statearr_35492_36944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35488 === (6))){
var inst_35472 = (state_35487[(2)]);
var state_35487__$1 = state_35487;
if(cljs.core.truth_(inst_35472)){
var statearr_35493_36945 = state_35487__$1;
(statearr_35493_36945[(1)] = (8));

} else {
var statearr_35494_36946 = state_35487__$1;
(statearr_35494_36946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35488 === (3))){
var inst_35485 = (state_35487[(2)]);
var state_35487__$1 = state_35487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35487__$1,inst_35485);
} else {
if((state_val_35488 === (12))){
var state_35487__$1 = state_35487;
var statearr_35495_36949 = state_35487__$1;
(statearr_35495_36949[(2)] = null);

(statearr_35495_36949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35488 === (2))){
var inst_35464 = (state_35487[(7)]);
var state_35487__$1 = state_35487;
if(cljs.core.truth_(inst_35464)){
var statearr_35496_36950 = state_35487__$1;
(statearr_35496_36950[(1)] = (4));

} else {
var statearr_35497_36951 = state_35487__$1;
(statearr_35497_36951[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35488 === (11))){
var inst_35478 = cljs.core.async.close_BANG_(ch);
var state_35487__$1 = state_35487;
var statearr_35498_36954 = state_35487__$1;
(statearr_35498_36954[(2)] = inst_35478);

(statearr_35498_36954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35488 === (9))){
var state_35487__$1 = state_35487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35499_36955 = state_35487__$1;
(statearr_35499_36955[(1)] = (11));

} else {
var statearr_35500_36956 = state_35487__$1;
(statearr_35500_36956[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35488 === (5))){
var inst_35464 = (state_35487[(7)]);
var state_35487__$1 = state_35487;
var statearr_35501_36957 = state_35487__$1;
(statearr_35501_36957[(2)] = inst_35464);

(statearr_35501_36957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35488 === (10))){
var inst_35483 = (state_35487[(2)]);
var state_35487__$1 = state_35487;
var statearr_35502_36958 = state_35487__$1;
(statearr_35502_36958[(2)] = inst_35483);

(statearr_35502_36958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35488 === (8))){
var inst_35464 = (state_35487[(7)]);
var inst_35474 = cljs.core.next(inst_35464);
var inst_35464__$1 = inst_35474;
var state_35487__$1 = (function (){var statearr_35503 = state_35487;
(statearr_35503[(7)] = inst_35464__$1);

return statearr_35503;
})();
var statearr_35504_36959 = state_35487__$1;
(statearr_35504_36959[(2)] = null);

(statearr_35504_36959[(1)] = (2));


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
var cljs$core$async$state_machine__34463__auto__ = null;
var cljs$core$async$state_machine__34463__auto____0 = (function (){
var statearr_35505 = [null,null,null,null,null,null,null,null];
(statearr_35505[(0)] = cljs$core$async$state_machine__34463__auto__);

(statearr_35505[(1)] = (1));

return statearr_35505;
});
var cljs$core$async$state_machine__34463__auto____1 = (function (state_35487){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_35487);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e35506){if((e35506 instanceof Object)){
var ex__34466__auto__ = e35506;
var statearr_35507_36960 = state_35487;
(statearr_35507_36960[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36961 = state_35487;
state_35487 = G__36961;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$state_machine__34463__auto__ = function(state_35487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34463__auto____1.call(this,state_35487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34463__auto____0;
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34463__auto____1;
return cljs$core$async$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_35508 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_35508[(6)] = c__34784__auto__);

return statearr_35508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

return c__34784__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35509 = (function (ch,cs,meta35510){
this.ch = ch;
this.cs = cs;
this.meta35510 = meta35510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35511,meta35510__$1){
var self__ = this;
var _35511__$1 = this;
return (new cljs.core.async.t_cljs$core$async35509(self__.ch,self__.cs,meta35510__$1));
}));

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35511){
var self__ = this;
var _35511__$1 = this;
return self__.meta35510;
}));

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35510","meta35510",-905803141,null)], null);
}));

(cljs.core.async.t_cljs$core$async35509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35509");

(cljs.core.async.t_cljs$core$async35509.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35509.
 */
cljs.core.async.__GT_t_cljs$core$async35509 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35509(ch__$1,cs__$1,meta35510){
return (new cljs.core.async.t_cljs$core$async35509(ch__$1,cs__$1,meta35510));
});

}

return (new cljs.core.async.t_cljs$core$async35509(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34784__auto___36968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_35646){
var state_val_35647 = (state_35646[(1)]);
if((state_val_35647 === (7))){
var inst_35642 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
var statearr_35648_36969 = state_35646__$1;
(statearr_35648_36969[(2)] = inst_35642);

(statearr_35648_36969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (20))){
var inst_35545 = (state_35646[(7)]);
var inst_35557 = cljs.core.first(inst_35545);
var inst_35558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35557,(0),null);
var inst_35559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35557,(1),null);
var state_35646__$1 = (function (){var statearr_35649 = state_35646;
(statearr_35649[(8)] = inst_35558);

return statearr_35649;
})();
if(cljs.core.truth_(inst_35559)){
var statearr_35650_36972 = state_35646__$1;
(statearr_35650_36972[(1)] = (22));

} else {
var statearr_35651_36973 = state_35646__$1;
(statearr_35651_36973[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (27))){
var inst_35514 = (state_35646[(9)]);
var inst_35589 = (state_35646[(10)]);
var inst_35594 = (state_35646[(11)]);
var inst_35587 = (state_35646[(12)]);
var inst_35594__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35587,inst_35589);
var inst_35595 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35594__$1,inst_35514,done);
var state_35646__$1 = (function (){var statearr_35652 = state_35646;
(statearr_35652[(11)] = inst_35594__$1);

return statearr_35652;
})();
if(cljs.core.truth_(inst_35595)){
var statearr_35653_36974 = state_35646__$1;
(statearr_35653_36974[(1)] = (30));

} else {
var statearr_35654_36975 = state_35646__$1;
(statearr_35654_36975[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (1))){
var state_35646__$1 = state_35646;
var statearr_35655_36976 = state_35646__$1;
(statearr_35655_36976[(2)] = null);

(statearr_35655_36976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (24))){
var inst_35545 = (state_35646[(7)]);
var inst_35564 = (state_35646[(2)]);
var inst_35565 = cljs.core.next(inst_35545);
var inst_35523 = inst_35565;
var inst_35524 = null;
var inst_35525 = (0);
var inst_35526 = (0);
var state_35646__$1 = (function (){var statearr_35656 = state_35646;
(statearr_35656[(13)] = inst_35524);

(statearr_35656[(14)] = inst_35525);

(statearr_35656[(15)] = inst_35564);

(statearr_35656[(16)] = inst_35526);

(statearr_35656[(17)] = inst_35523);

return statearr_35656;
})();
var statearr_35657_36977 = state_35646__$1;
(statearr_35657_36977[(2)] = null);

(statearr_35657_36977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (39))){
var state_35646__$1 = state_35646;
var statearr_35661_36978 = state_35646__$1;
(statearr_35661_36978[(2)] = null);

(statearr_35661_36978[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (4))){
var inst_35514 = (state_35646[(9)]);
var inst_35514__$1 = (state_35646[(2)]);
var inst_35515 = (inst_35514__$1 == null);
var state_35646__$1 = (function (){var statearr_35662 = state_35646;
(statearr_35662[(9)] = inst_35514__$1);

return statearr_35662;
})();
if(cljs.core.truth_(inst_35515)){
var statearr_35663_36979 = state_35646__$1;
(statearr_35663_36979[(1)] = (5));

} else {
var statearr_35664_36980 = state_35646__$1;
(statearr_35664_36980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (15))){
var inst_35524 = (state_35646[(13)]);
var inst_35525 = (state_35646[(14)]);
var inst_35526 = (state_35646[(16)]);
var inst_35523 = (state_35646[(17)]);
var inst_35541 = (state_35646[(2)]);
var inst_35542 = (inst_35526 + (1));
var tmp35658 = inst_35524;
var tmp35659 = inst_35525;
var tmp35660 = inst_35523;
var inst_35523__$1 = tmp35660;
var inst_35524__$1 = tmp35658;
var inst_35525__$1 = tmp35659;
var inst_35526__$1 = inst_35542;
var state_35646__$1 = (function (){var statearr_35665 = state_35646;
(statearr_35665[(13)] = inst_35524__$1);

(statearr_35665[(14)] = inst_35525__$1);

(statearr_35665[(16)] = inst_35526__$1);

(statearr_35665[(17)] = inst_35523__$1);

(statearr_35665[(18)] = inst_35541);

return statearr_35665;
})();
var statearr_35666_36982 = state_35646__$1;
(statearr_35666_36982[(2)] = null);

(statearr_35666_36982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (21))){
var inst_35568 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
var statearr_35670_36983 = state_35646__$1;
(statearr_35670_36983[(2)] = inst_35568);

(statearr_35670_36983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (31))){
var inst_35594 = (state_35646[(11)]);
var inst_35598 = done(null);
var inst_35599 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35594);
var state_35646__$1 = (function (){var statearr_35671 = state_35646;
(statearr_35671[(19)] = inst_35598);

return statearr_35671;
})();
var statearr_35672_36984 = state_35646__$1;
(statearr_35672_36984[(2)] = inst_35599);

(statearr_35672_36984[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (32))){
var inst_35586 = (state_35646[(20)]);
var inst_35589 = (state_35646[(10)]);
var inst_35588 = (state_35646[(21)]);
var inst_35587 = (state_35646[(12)]);
var inst_35601 = (state_35646[(2)]);
var inst_35602 = (inst_35589 + (1));
var tmp35667 = inst_35586;
var tmp35668 = inst_35588;
var tmp35669 = inst_35587;
var inst_35586__$1 = tmp35667;
var inst_35587__$1 = tmp35669;
var inst_35588__$1 = tmp35668;
var inst_35589__$1 = inst_35602;
var state_35646__$1 = (function (){var statearr_35673 = state_35646;
(statearr_35673[(20)] = inst_35586__$1);

(statearr_35673[(10)] = inst_35589__$1);

(statearr_35673[(22)] = inst_35601);

(statearr_35673[(21)] = inst_35588__$1);

(statearr_35673[(12)] = inst_35587__$1);

return statearr_35673;
})();
var statearr_35674_36985 = state_35646__$1;
(statearr_35674_36985[(2)] = null);

(statearr_35674_36985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (40))){
var inst_35614 = (state_35646[(23)]);
var inst_35618 = done(null);
var inst_35619 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35614);
var state_35646__$1 = (function (){var statearr_35675 = state_35646;
(statearr_35675[(24)] = inst_35618);

return statearr_35675;
})();
var statearr_35676_36990 = state_35646__$1;
(statearr_35676_36990[(2)] = inst_35619);

(statearr_35676_36990[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (33))){
var inst_35605 = (state_35646[(25)]);
var inst_35607 = cljs.core.chunked_seq_QMARK_(inst_35605);
var state_35646__$1 = state_35646;
if(inst_35607){
var statearr_35677_36991 = state_35646__$1;
(statearr_35677_36991[(1)] = (36));

} else {
var statearr_35678_36992 = state_35646__$1;
(statearr_35678_36992[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (13))){
var inst_35535 = (state_35646[(26)]);
var inst_35538 = cljs.core.async.close_BANG_(inst_35535);
var state_35646__$1 = state_35646;
var statearr_35679_36993 = state_35646__$1;
(statearr_35679_36993[(2)] = inst_35538);

(statearr_35679_36993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (22))){
var inst_35558 = (state_35646[(8)]);
var inst_35561 = cljs.core.async.close_BANG_(inst_35558);
var state_35646__$1 = state_35646;
var statearr_35680_36997 = state_35646__$1;
(statearr_35680_36997[(2)] = inst_35561);

(statearr_35680_36997[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (36))){
var inst_35605 = (state_35646[(25)]);
var inst_35609 = cljs.core.chunk_first(inst_35605);
var inst_35610 = cljs.core.chunk_rest(inst_35605);
var inst_35611 = cljs.core.count(inst_35609);
var inst_35586 = inst_35610;
var inst_35587 = inst_35609;
var inst_35588 = inst_35611;
var inst_35589 = (0);
var state_35646__$1 = (function (){var statearr_35681 = state_35646;
(statearr_35681[(20)] = inst_35586);

(statearr_35681[(10)] = inst_35589);

(statearr_35681[(21)] = inst_35588);

(statearr_35681[(12)] = inst_35587);

return statearr_35681;
})();
var statearr_35682_36998 = state_35646__$1;
(statearr_35682_36998[(2)] = null);

(statearr_35682_36998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (41))){
var inst_35605 = (state_35646[(25)]);
var inst_35621 = (state_35646[(2)]);
var inst_35622 = cljs.core.next(inst_35605);
var inst_35586 = inst_35622;
var inst_35587 = null;
var inst_35588 = (0);
var inst_35589 = (0);
var state_35646__$1 = (function (){var statearr_35683 = state_35646;
(statearr_35683[(20)] = inst_35586);

(statearr_35683[(10)] = inst_35589);

(statearr_35683[(27)] = inst_35621);

(statearr_35683[(21)] = inst_35588);

(statearr_35683[(12)] = inst_35587);

return statearr_35683;
})();
var statearr_35684_37002 = state_35646__$1;
(statearr_35684_37002[(2)] = null);

(statearr_35684_37002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (43))){
var state_35646__$1 = state_35646;
var statearr_35685_37003 = state_35646__$1;
(statearr_35685_37003[(2)] = null);

(statearr_35685_37003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (29))){
var inst_35630 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
var statearr_35686_37004 = state_35646__$1;
(statearr_35686_37004[(2)] = inst_35630);

(statearr_35686_37004[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (44))){
var inst_35639 = (state_35646[(2)]);
var state_35646__$1 = (function (){var statearr_35687 = state_35646;
(statearr_35687[(28)] = inst_35639);

return statearr_35687;
})();
var statearr_35688_37005 = state_35646__$1;
(statearr_35688_37005[(2)] = null);

(statearr_35688_37005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (6))){
var inst_35578 = (state_35646[(29)]);
var inst_35577 = cljs.core.deref(cs);
var inst_35578__$1 = cljs.core.keys(inst_35577);
var inst_35579 = cljs.core.count(inst_35578__$1);
var inst_35580 = cljs.core.reset_BANG_(dctr,inst_35579);
var inst_35585 = cljs.core.seq(inst_35578__$1);
var inst_35586 = inst_35585;
var inst_35587 = null;
var inst_35588 = (0);
var inst_35589 = (0);
var state_35646__$1 = (function (){var statearr_35689 = state_35646;
(statearr_35689[(30)] = inst_35580);

(statearr_35689[(20)] = inst_35586);

(statearr_35689[(29)] = inst_35578__$1);

(statearr_35689[(10)] = inst_35589);

(statearr_35689[(21)] = inst_35588);

(statearr_35689[(12)] = inst_35587);

return statearr_35689;
})();
var statearr_35690_37009 = state_35646__$1;
(statearr_35690_37009[(2)] = null);

(statearr_35690_37009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (28))){
var inst_35586 = (state_35646[(20)]);
var inst_35605 = (state_35646[(25)]);
var inst_35605__$1 = cljs.core.seq(inst_35586);
var state_35646__$1 = (function (){var statearr_35691 = state_35646;
(statearr_35691[(25)] = inst_35605__$1);

return statearr_35691;
})();
if(inst_35605__$1){
var statearr_35692_37010 = state_35646__$1;
(statearr_35692_37010[(1)] = (33));

} else {
var statearr_35693_37011 = state_35646__$1;
(statearr_35693_37011[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (25))){
var inst_35589 = (state_35646[(10)]);
var inst_35588 = (state_35646[(21)]);
var inst_35591 = (inst_35589 < inst_35588);
var inst_35592 = inst_35591;
var state_35646__$1 = state_35646;
if(cljs.core.truth_(inst_35592)){
var statearr_35694_37015 = state_35646__$1;
(statearr_35694_37015[(1)] = (27));

} else {
var statearr_35695_37016 = state_35646__$1;
(statearr_35695_37016[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (34))){
var state_35646__$1 = state_35646;
var statearr_35696_37017 = state_35646__$1;
(statearr_35696_37017[(2)] = null);

(statearr_35696_37017[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (17))){
var state_35646__$1 = state_35646;
var statearr_35697_37018 = state_35646__$1;
(statearr_35697_37018[(2)] = null);

(statearr_35697_37018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (3))){
var inst_35644 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35646__$1,inst_35644);
} else {
if((state_val_35647 === (12))){
var inst_35573 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
var statearr_35699_37021 = state_35646__$1;
(statearr_35699_37021[(2)] = inst_35573);

(statearr_35699_37021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (2))){
var state_35646__$1 = state_35646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35646__$1,(4),ch);
} else {
if((state_val_35647 === (23))){
var state_35646__$1 = state_35646;
var statearr_35700_37022 = state_35646__$1;
(statearr_35700_37022[(2)] = null);

(statearr_35700_37022[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (35))){
var inst_35628 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
var statearr_35701_37023 = state_35646__$1;
(statearr_35701_37023[(2)] = inst_35628);

(statearr_35701_37023[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (19))){
var inst_35545 = (state_35646[(7)]);
var inst_35549 = cljs.core.chunk_first(inst_35545);
var inst_35550 = cljs.core.chunk_rest(inst_35545);
var inst_35551 = cljs.core.count(inst_35549);
var inst_35523 = inst_35550;
var inst_35524 = inst_35549;
var inst_35525 = inst_35551;
var inst_35526 = (0);
var state_35646__$1 = (function (){var statearr_35702 = state_35646;
(statearr_35702[(13)] = inst_35524);

(statearr_35702[(14)] = inst_35525);

(statearr_35702[(16)] = inst_35526);

(statearr_35702[(17)] = inst_35523);

return statearr_35702;
})();
var statearr_35703_37024 = state_35646__$1;
(statearr_35703_37024[(2)] = null);

(statearr_35703_37024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (11))){
var inst_35545 = (state_35646[(7)]);
var inst_35523 = (state_35646[(17)]);
var inst_35545__$1 = cljs.core.seq(inst_35523);
var state_35646__$1 = (function (){var statearr_35704 = state_35646;
(statearr_35704[(7)] = inst_35545__$1);

return statearr_35704;
})();
if(inst_35545__$1){
var statearr_35705_37028 = state_35646__$1;
(statearr_35705_37028[(1)] = (16));

} else {
var statearr_35706_37029 = state_35646__$1;
(statearr_35706_37029[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (9))){
var inst_35575 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
var statearr_35712_37030 = state_35646__$1;
(statearr_35712_37030[(2)] = inst_35575);

(statearr_35712_37030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (5))){
var inst_35521 = cljs.core.deref(cs);
var inst_35522 = cljs.core.seq(inst_35521);
var inst_35523 = inst_35522;
var inst_35524 = null;
var inst_35525 = (0);
var inst_35526 = (0);
var state_35646__$1 = (function (){var statearr_35713 = state_35646;
(statearr_35713[(13)] = inst_35524);

(statearr_35713[(14)] = inst_35525);

(statearr_35713[(16)] = inst_35526);

(statearr_35713[(17)] = inst_35523);

return statearr_35713;
})();
var statearr_35714_37034 = state_35646__$1;
(statearr_35714_37034[(2)] = null);

(statearr_35714_37034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (14))){
var state_35646__$1 = state_35646;
var statearr_35715_37035 = state_35646__$1;
(statearr_35715_37035[(2)] = null);

(statearr_35715_37035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (45))){
var inst_35636 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
var statearr_35717_37036 = state_35646__$1;
(statearr_35717_37036[(2)] = inst_35636);

(statearr_35717_37036[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (26))){
var inst_35578 = (state_35646[(29)]);
var inst_35632 = (state_35646[(2)]);
var inst_35633 = cljs.core.seq(inst_35578);
var state_35646__$1 = (function (){var statearr_35720 = state_35646;
(statearr_35720[(31)] = inst_35632);

return statearr_35720;
})();
if(inst_35633){
var statearr_35724_37044 = state_35646__$1;
(statearr_35724_37044[(1)] = (42));

} else {
var statearr_35725_37045 = state_35646__$1;
(statearr_35725_37045[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (16))){
var inst_35545 = (state_35646[(7)]);
var inst_35547 = cljs.core.chunked_seq_QMARK_(inst_35545);
var state_35646__$1 = state_35646;
if(inst_35547){
var statearr_35726_37046 = state_35646__$1;
(statearr_35726_37046[(1)] = (19));

} else {
var statearr_35727_37047 = state_35646__$1;
(statearr_35727_37047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (38))){
var inst_35625 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
var statearr_35728_37048 = state_35646__$1;
(statearr_35728_37048[(2)] = inst_35625);

(statearr_35728_37048[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (30))){
var state_35646__$1 = state_35646;
var statearr_35729_37052 = state_35646__$1;
(statearr_35729_37052[(2)] = null);

(statearr_35729_37052[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (10))){
var inst_35524 = (state_35646[(13)]);
var inst_35526 = (state_35646[(16)]);
var inst_35534 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35524,inst_35526);
var inst_35535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35534,(0),null);
var inst_35536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35534,(1),null);
var state_35646__$1 = (function (){var statearr_35730 = state_35646;
(statearr_35730[(26)] = inst_35535);

return statearr_35730;
})();
if(cljs.core.truth_(inst_35536)){
var statearr_35731_37053 = state_35646__$1;
(statearr_35731_37053[(1)] = (13));

} else {
var statearr_35732_37054 = state_35646__$1;
(statearr_35732_37054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (18))){
var inst_35571 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
var statearr_35733_37055 = state_35646__$1;
(statearr_35733_37055[(2)] = inst_35571);

(statearr_35733_37055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (42))){
var state_35646__$1 = state_35646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35646__$1,(45),dchan);
} else {
if((state_val_35647 === (37))){
var inst_35514 = (state_35646[(9)]);
var inst_35605 = (state_35646[(25)]);
var inst_35614 = (state_35646[(23)]);
var inst_35614__$1 = cljs.core.first(inst_35605);
var inst_35615 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35614__$1,inst_35514,done);
var state_35646__$1 = (function (){var statearr_35734 = state_35646;
(statearr_35734[(23)] = inst_35614__$1);

return statearr_35734;
})();
if(cljs.core.truth_(inst_35615)){
var statearr_35735_37059 = state_35646__$1;
(statearr_35735_37059[(1)] = (39));

} else {
var statearr_35736_37060 = state_35646__$1;
(statearr_35736_37060[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (8))){
var inst_35525 = (state_35646[(14)]);
var inst_35526 = (state_35646[(16)]);
var inst_35528 = (inst_35526 < inst_35525);
var inst_35529 = inst_35528;
var state_35646__$1 = state_35646;
if(cljs.core.truth_(inst_35529)){
var statearr_35737_37061 = state_35646__$1;
(statearr_35737_37061[(1)] = (10));

} else {
var statearr_35738_37065 = state_35646__$1;
(statearr_35738_37065[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34463__auto__ = null;
var cljs$core$async$mult_$_state_machine__34463__auto____0 = (function (){
var statearr_35739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35739[(0)] = cljs$core$async$mult_$_state_machine__34463__auto__);

(statearr_35739[(1)] = (1));

return statearr_35739;
});
var cljs$core$async$mult_$_state_machine__34463__auto____1 = (function (state_35646){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_35646);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e35740){if((e35740 instanceof Object)){
var ex__34466__auto__ = e35740;
var statearr_35741_37066 = state_35646;
(statearr_35741_37066[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37067 = state_35646;
state_35646 = G__37067;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34463__auto__ = function(state_35646){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34463__auto____1.call(this,state_35646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34463__auto____0;
cljs$core$async$mult_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34463__auto____1;
return cljs$core$async$mult_$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_35747 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_35747[(6)] = c__34784__auto___36968);

return statearr_35747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
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
var G__35749 = arguments.length;
switch (G__35749) {
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
var len__4789__auto___37097 = arguments.length;
var i__4790__auto___37098 = (0);
while(true){
if((i__4790__auto___37098 < len__4789__auto___37097)){
args__4795__auto__.push((arguments[i__4790__auto___37098]));

var G__37099 = (i__4790__auto___37098 + (1));
i__4790__auto___37098 = G__37099;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35770){
var map__35771 = p__35770;
var map__35771__$1 = (((((!((map__35771 == null))))?(((((map__35771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35771):map__35771);
var opts = map__35771__$1;
var statearr_35773_37101 = state;
(statearr_35773_37101[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35774_37102 = state;
(statearr_35774_37102[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35775_37103 = state;
(statearr_35775_37103[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35765){
var G__35766 = cljs.core.first(seq35765);
var seq35765__$1 = cljs.core.next(seq35765);
var G__35767 = cljs.core.first(seq35765__$1);
var seq35765__$2 = cljs.core.next(seq35765__$1);
var G__35768 = cljs.core.first(seq35765__$2);
var seq35765__$3 = cljs.core.next(seq35765__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35766,G__35767,G__35768,seq35765__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35780 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35781){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35781 = meta35781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35782,meta35781__$1){
var self__ = this;
var _35782__$1 = this;
return (new cljs.core.async.t_cljs$core$async35780(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35781__$1));
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35782){
var self__ = this;
var _35782__$1 = this;
return self__.meta35781;
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35781","meta35781",-1188276579,null)], null);
}));

(cljs.core.async.t_cljs$core$async35780.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35780");

(cljs.core.async.t_cljs$core$async35780.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35780");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35780.
 */
cljs.core.async.__GT_t_cljs$core$async35780 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35780(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35781){
return (new cljs.core.async.t_cljs$core$async35780(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35781));
});

}

return (new cljs.core.async.t_cljs$core$async35780(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34784__auto___37109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_35894){
var state_val_35895 = (state_35894[(1)]);
if((state_val_35895 === (7))){
var inst_35805 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
var statearr_35896_37110 = state_35894__$1;
(statearr_35896_37110[(2)] = inst_35805);

(statearr_35896_37110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (20))){
var inst_35817 = (state_35894[(7)]);
var state_35894__$1 = state_35894;
var statearr_35898_37111 = state_35894__$1;
(statearr_35898_37111[(2)] = inst_35817);

(statearr_35898_37111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (27))){
var state_35894__$1 = state_35894;
var statearr_35902_37115 = state_35894__$1;
(statearr_35902_37115[(2)] = null);

(statearr_35902_37115[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (1))){
var inst_35792 = (state_35894[(8)]);
var inst_35792__$1 = calc_state();
var inst_35794 = (inst_35792__$1 == null);
var inst_35795 = cljs.core.not(inst_35794);
var state_35894__$1 = (function (){var statearr_35905 = state_35894;
(statearr_35905[(8)] = inst_35792__$1);

return statearr_35905;
})();
if(inst_35795){
var statearr_35906_37117 = state_35894__$1;
(statearr_35906_37117[(1)] = (2));

} else {
var statearr_35907_37118 = state_35894__$1;
(statearr_35907_37118[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (24))){
var inst_35867 = (state_35894[(9)]);
var inst_35841 = (state_35894[(10)]);
var inst_35850 = (state_35894[(11)]);
var inst_35867__$1 = (inst_35841.cljs$core$IFn$_invoke$arity$1 ? inst_35841.cljs$core$IFn$_invoke$arity$1(inst_35850) : inst_35841.call(null,inst_35850));
var state_35894__$1 = (function (){var statearr_35908 = state_35894;
(statearr_35908[(9)] = inst_35867__$1);

return statearr_35908;
})();
if(cljs.core.truth_(inst_35867__$1)){
var statearr_35909_37119 = state_35894__$1;
(statearr_35909_37119[(1)] = (29));

} else {
var statearr_35910_37121 = state_35894__$1;
(statearr_35910_37121[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (4))){
var inst_35808 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
if(cljs.core.truth_(inst_35808)){
var statearr_35911_37122 = state_35894__$1;
(statearr_35911_37122[(1)] = (8));

} else {
var statearr_35912_37124 = state_35894__$1;
(statearr_35912_37124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (15))){
var inst_35835 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
if(cljs.core.truth_(inst_35835)){
var statearr_35917_37125 = state_35894__$1;
(statearr_35917_37125[(1)] = (19));

} else {
var statearr_35918_37126 = state_35894__$1;
(statearr_35918_37126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (21))){
var inst_35840 = (state_35894[(12)]);
var inst_35840__$1 = (state_35894[(2)]);
var inst_35841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35840__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35840__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35840__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35894__$1 = (function (){var statearr_35919 = state_35894;
(statearr_35919[(13)] = inst_35842);

(statearr_35919[(10)] = inst_35841);

(statearr_35919[(12)] = inst_35840__$1);

return statearr_35919;
})();
return cljs.core.async.ioc_alts_BANG_(state_35894__$1,(22),inst_35843);
} else {
if((state_val_35895 === (31))){
var inst_35876 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
if(cljs.core.truth_(inst_35876)){
var statearr_35920_37127 = state_35894__$1;
(statearr_35920_37127[(1)] = (32));

} else {
var statearr_35921_37128 = state_35894__$1;
(statearr_35921_37128[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (32))){
var inst_35849 = (state_35894[(14)]);
var state_35894__$1 = state_35894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35894__$1,(35),out,inst_35849);
} else {
if((state_val_35895 === (33))){
var inst_35840 = (state_35894[(12)]);
var inst_35817 = inst_35840;
var state_35894__$1 = (function (){var statearr_35923 = state_35894;
(statearr_35923[(7)] = inst_35817);

return statearr_35923;
})();
var statearr_35924_37129 = state_35894__$1;
(statearr_35924_37129[(2)] = null);

(statearr_35924_37129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (13))){
var inst_35817 = (state_35894[(7)]);
var inst_35824 = inst_35817.cljs$lang$protocol_mask$partition0$;
var inst_35825 = (inst_35824 & (64));
var inst_35826 = inst_35817.cljs$core$ISeq$;
var inst_35827 = (cljs.core.PROTOCOL_SENTINEL === inst_35826);
var inst_35828 = ((inst_35825) || (inst_35827));
var state_35894__$1 = state_35894;
if(cljs.core.truth_(inst_35828)){
var statearr_35925_37130 = state_35894__$1;
(statearr_35925_37130[(1)] = (16));

} else {
var statearr_35926_37131 = state_35894__$1;
(statearr_35926_37131[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (22))){
var inst_35849 = (state_35894[(14)]);
var inst_35850 = (state_35894[(11)]);
var inst_35848 = (state_35894[(2)]);
var inst_35849__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35848,(0),null);
var inst_35850__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35848,(1),null);
var inst_35853 = (inst_35849__$1 == null);
var inst_35854 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35850__$1,change);
var inst_35855 = ((inst_35853) || (inst_35854));
var state_35894__$1 = (function (){var statearr_35927 = state_35894;
(statearr_35927[(14)] = inst_35849__$1);

(statearr_35927[(11)] = inst_35850__$1);

return statearr_35927;
})();
if(cljs.core.truth_(inst_35855)){
var statearr_35928_37136 = state_35894__$1;
(statearr_35928_37136[(1)] = (23));

} else {
var statearr_35929_37137 = state_35894__$1;
(statearr_35929_37137[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (36))){
var inst_35840 = (state_35894[(12)]);
var inst_35817 = inst_35840;
var state_35894__$1 = (function (){var statearr_35930 = state_35894;
(statearr_35930[(7)] = inst_35817);

return statearr_35930;
})();
var statearr_35931_37138 = state_35894__$1;
(statearr_35931_37138[(2)] = null);

(statearr_35931_37138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (29))){
var inst_35867 = (state_35894[(9)]);
var state_35894__$1 = state_35894;
var statearr_35932_37141 = state_35894__$1;
(statearr_35932_37141[(2)] = inst_35867);

(statearr_35932_37141[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (6))){
var state_35894__$1 = state_35894;
var statearr_35933_37144 = state_35894__$1;
(statearr_35933_37144[(2)] = false);

(statearr_35933_37144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (28))){
var inst_35862 = (state_35894[(2)]);
var inst_35863 = calc_state();
var inst_35817 = inst_35863;
var state_35894__$1 = (function (){var statearr_35934 = state_35894;
(statearr_35934[(7)] = inst_35817);

(statearr_35934[(15)] = inst_35862);

return statearr_35934;
})();
var statearr_35935_37145 = state_35894__$1;
(statearr_35935_37145[(2)] = null);

(statearr_35935_37145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (25))){
var inst_35890 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
var statearr_35936_37146 = state_35894__$1;
(statearr_35936_37146[(2)] = inst_35890);

(statearr_35936_37146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (34))){
var inst_35888 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
var statearr_35937_37150 = state_35894__$1;
(statearr_35937_37150[(2)] = inst_35888);

(statearr_35937_37150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (17))){
var state_35894__$1 = state_35894;
var statearr_35938_37155 = state_35894__$1;
(statearr_35938_37155[(2)] = false);

(statearr_35938_37155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (3))){
var state_35894__$1 = state_35894;
var statearr_35939_37156 = state_35894__$1;
(statearr_35939_37156[(2)] = false);

(statearr_35939_37156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (12))){
var inst_35892 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35894__$1,inst_35892);
} else {
if((state_val_35895 === (2))){
var inst_35792 = (state_35894[(8)]);
var inst_35797 = inst_35792.cljs$lang$protocol_mask$partition0$;
var inst_35798 = (inst_35797 & (64));
var inst_35799 = inst_35792.cljs$core$ISeq$;
var inst_35800 = (cljs.core.PROTOCOL_SENTINEL === inst_35799);
var inst_35801 = ((inst_35798) || (inst_35800));
var state_35894__$1 = state_35894;
if(cljs.core.truth_(inst_35801)){
var statearr_35940_37163 = state_35894__$1;
(statearr_35940_37163[(1)] = (5));

} else {
var statearr_35941_37164 = state_35894__$1;
(statearr_35941_37164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (23))){
var inst_35849 = (state_35894[(14)]);
var inst_35857 = (inst_35849 == null);
var state_35894__$1 = state_35894;
if(cljs.core.truth_(inst_35857)){
var statearr_35942_37165 = state_35894__$1;
(statearr_35942_37165[(1)] = (26));

} else {
var statearr_35943_37166 = state_35894__$1;
(statearr_35943_37166[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (35))){
var inst_35879 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
if(cljs.core.truth_(inst_35879)){
var statearr_35944_37167 = state_35894__$1;
(statearr_35944_37167[(1)] = (36));

} else {
var statearr_35945_37168 = state_35894__$1;
(statearr_35945_37168[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (19))){
var inst_35817 = (state_35894[(7)]);
var inst_35837 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35817);
var state_35894__$1 = state_35894;
var statearr_35946_37169 = state_35894__$1;
(statearr_35946_37169[(2)] = inst_35837);

(statearr_35946_37169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (11))){
var inst_35817 = (state_35894[(7)]);
var inst_35821 = (inst_35817 == null);
var inst_35822 = cljs.core.not(inst_35821);
var state_35894__$1 = state_35894;
if(inst_35822){
var statearr_35947_37170 = state_35894__$1;
(statearr_35947_37170[(1)] = (13));

} else {
var statearr_35948_37171 = state_35894__$1;
(statearr_35948_37171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (9))){
var inst_35792 = (state_35894[(8)]);
var state_35894__$1 = state_35894;
var statearr_35949_37172 = state_35894__$1;
(statearr_35949_37172[(2)] = inst_35792);

(statearr_35949_37172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (5))){
var state_35894__$1 = state_35894;
var statearr_35950_37173 = state_35894__$1;
(statearr_35950_37173[(2)] = true);

(statearr_35950_37173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (14))){
var state_35894__$1 = state_35894;
var statearr_35951_37174 = state_35894__$1;
(statearr_35951_37174[(2)] = false);

(statearr_35951_37174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (26))){
var inst_35850 = (state_35894[(11)]);
var inst_35859 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35850);
var state_35894__$1 = state_35894;
var statearr_35952_37175 = state_35894__$1;
(statearr_35952_37175[(2)] = inst_35859);

(statearr_35952_37175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (16))){
var state_35894__$1 = state_35894;
var statearr_35953_37182 = state_35894__$1;
(statearr_35953_37182[(2)] = true);

(statearr_35953_37182[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (38))){
var inst_35884 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
var statearr_35954_37183 = state_35894__$1;
(statearr_35954_37183[(2)] = inst_35884);

(statearr_35954_37183[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (30))){
var inst_35842 = (state_35894[(13)]);
var inst_35841 = (state_35894[(10)]);
var inst_35850 = (state_35894[(11)]);
var inst_35871 = cljs.core.empty_QMARK_(inst_35841);
var inst_35872 = (inst_35842.cljs$core$IFn$_invoke$arity$1 ? inst_35842.cljs$core$IFn$_invoke$arity$1(inst_35850) : inst_35842.call(null,inst_35850));
var inst_35873 = cljs.core.not(inst_35872);
var inst_35874 = ((inst_35871) && (inst_35873));
var state_35894__$1 = state_35894;
var statearr_35955_37184 = state_35894__$1;
(statearr_35955_37184[(2)] = inst_35874);

(statearr_35955_37184[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (10))){
var inst_35792 = (state_35894[(8)]);
var inst_35813 = (state_35894[(2)]);
var inst_35814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35813,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35813,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35813,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35817 = inst_35792;
var state_35894__$1 = (function (){var statearr_35956 = state_35894;
(statearr_35956[(7)] = inst_35817);

(statearr_35956[(16)] = inst_35815);

(statearr_35956[(17)] = inst_35814);

(statearr_35956[(18)] = inst_35816);

return statearr_35956;
})();
var statearr_35957_37185 = state_35894__$1;
(statearr_35957_37185[(2)] = null);

(statearr_35957_37185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (18))){
var inst_35832 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
var statearr_35958_37186 = state_35894__$1;
(statearr_35958_37186[(2)] = inst_35832);

(statearr_35958_37186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (37))){
var state_35894__$1 = state_35894;
var statearr_35959_37187 = state_35894__$1;
(statearr_35959_37187[(2)] = null);

(statearr_35959_37187[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (8))){
var inst_35792 = (state_35894[(8)]);
var inst_35810 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35792);
var state_35894__$1 = state_35894;
var statearr_35960_37188 = state_35894__$1;
(statearr_35960_37188[(2)] = inst_35810);

(statearr_35960_37188[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__34463__auto__ = null;
var cljs$core$async$mix_$_state_machine__34463__auto____0 = (function (){
var statearr_35961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35961[(0)] = cljs$core$async$mix_$_state_machine__34463__auto__);

(statearr_35961[(1)] = (1));

return statearr_35961;
});
var cljs$core$async$mix_$_state_machine__34463__auto____1 = (function (state_35894){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_35894);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e35962){if((e35962 instanceof Object)){
var ex__34466__auto__ = e35962;
var statearr_35963_37195 = state_35894;
(statearr_35963_37195[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37196 = state_35894;
state_35894 = G__37196;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34463__auto__ = function(state_35894){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34463__auto____1.call(this,state_35894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34463__auto____0;
cljs$core$async$mix_$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34463__auto____1;
return cljs$core$async$mix_$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_35964 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_35964[(6)] = c__34784__auto___37109);

return statearr_35964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
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
var G__35966 = arguments.length;
switch (G__35966) {
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
var G__35969 = arguments.length;
switch (G__35969) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35967_SHARP_){
if(cljs.core.truth_((p1__35967_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35967_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35967_SHARP_.call(null,topic)))){
return p1__35967_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35967_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35970 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35971){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35971 = meta35971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35972,meta35971__$1){
var self__ = this;
var _35972__$1 = this;
return (new cljs.core.async.t_cljs$core$async35970(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35971__$1));
}));

(cljs.core.async.t_cljs$core$async35970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35972){
var self__ = this;
var _35972__$1 = this;
return self__.meta35971;
}));

(cljs.core.async.t_cljs$core$async35970.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35970.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35970.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35970.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35970.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35970.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35971","meta35971",-236070176,null)], null);
}));

(cljs.core.async.t_cljs$core$async35970.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35970");

(cljs.core.async.t_cljs$core$async35970.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35970");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35970.
 */
cljs.core.async.__GT_t_cljs$core$async35970 = (function cljs$core$async$__GT_t_cljs$core$async35970(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35971){
return (new cljs.core.async.t_cljs$core$async35970(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35971));
});

}

return (new cljs.core.async.t_cljs$core$async35970(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34784__auto___37206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_36044){
var state_val_36045 = (state_36044[(1)]);
if((state_val_36045 === (7))){
var inst_36040 = (state_36044[(2)]);
var state_36044__$1 = state_36044;
var statearr_36046_37208 = state_36044__$1;
(statearr_36046_37208[(2)] = inst_36040);

(statearr_36046_37208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (20))){
var state_36044__$1 = state_36044;
var statearr_36047_37209 = state_36044__$1;
(statearr_36047_37209[(2)] = null);

(statearr_36047_37209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (1))){
var state_36044__$1 = state_36044;
var statearr_36048_37214 = state_36044__$1;
(statearr_36048_37214[(2)] = null);

(statearr_36048_37214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (24))){
var inst_36023 = (state_36044[(7)]);
var inst_36032 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36023);
var state_36044__$1 = state_36044;
var statearr_36049_37215 = state_36044__$1;
(statearr_36049_37215[(2)] = inst_36032);

(statearr_36049_37215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (4))){
var inst_35975 = (state_36044[(8)]);
var inst_35975__$1 = (state_36044[(2)]);
var inst_35976 = (inst_35975__$1 == null);
var state_36044__$1 = (function (){var statearr_36050 = state_36044;
(statearr_36050[(8)] = inst_35975__$1);

return statearr_36050;
})();
if(cljs.core.truth_(inst_35976)){
var statearr_36051_37216 = state_36044__$1;
(statearr_36051_37216[(1)] = (5));

} else {
var statearr_36052_37217 = state_36044__$1;
(statearr_36052_37217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (15))){
var inst_36017 = (state_36044[(2)]);
var state_36044__$1 = state_36044;
var statearr_36053_37218 = state_36044__$1;
(statearr_36053_37218[(2)] = inst_36017);

(statearr_36053_37218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (21))){
var inst_36037 = (state_36044[(2)]);
var state_36044__$1 = (function (){var statearr_36054 = state_36044;
(statearr_36054[(9)] = inst_36037);

return statearr_36054;
})();
var statearr_36055_37219 = state_36044__$1;
(statearr_36055_37219[(2)] = null);

(statearr_36055_37219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (13))){
var inst_35999 = (state_36044[(10)]);
var inst_36001 = cljs.core.chunked_seq_QMARK_(inst_35999);
var state_36044__$1 = state_36044;
if(inst_36001){
var statearr_36056_37220 = state_36044__$1;
(statearr_36056_37220[(1)] = (16));

} else {
var statearr_36057_37221 = state_36044__$1;
(statearr_36057_37221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (22))){
var inst_36029 = (state_36044[(2)]);
var state_36044__$1 = state_36044;
if(cljs.core.truth_(inst_36029)){
var statearr_36058_37222 = state_36044__$1;
(statearr_36058_37222[(1)] = (23));

} else {
var statearr_36059_37223 = state_36044__$1;
(statearr_36059_37223[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (6))){
var inst_35975 = (state_36044[(8)]);
var inst_36025 = (state_36044[(11)]);
var inst_36023 = (state_36044[(7)]);
var inst_36023__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35975) : topic_fn.call(null,inst_35975));
var inst_36024 = cljs.core.deref(mults);
var inst_36025__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36024,inst_36023__$1);
var state_36044__$1 = (function (){var statearr_36060 = state_36044;
(statearr_36060[(11)] = inst_36025__$1);

(statearr_36060[(7)] = inst_36023__$1);

return statearr_36060;
})();
if(cljs.core.truth_(inst_36025__$1)){
var statearr_36061_37224 = state_36044__$1;
(statearr_36061_37224[(1)] = (19));

} else {
var statearr_36066_37227 = state_36044__$1;
(statearr_36066_37227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (25))){
var inst_36034 = (state_36044[(2)]);
var state_36044__$1 = state_36044;
var statearr_36067_37228 = state_36044__$1;
(statearr_36067_37228[(2)] = inst_36034);

(statearr_36067_37228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (17))){
var inst_35999 = (state_36044[(10)]);
var inst_36008 = cljs.core.first(inst_35999);
var inst_36009 = cljs.core.async.muxch_STAR_(inst_36008);
var inst_36010 = cljs.core.async.close_BANG_(inst_36009);
var inst_36011 = cljs.core.next(inst_35999);
var inst_35985 = inst_36011;
var inst_35986 = null;
var inst_35987 = (0);
var inst_35988 = (0);
var state_36044__$1 = (function (){var statearr_36068 = state_36044;
(statearr_36068[(12)] = inst_35985);

(statearr_36068[(13)] = inst_35987);

(statearr_36068[(14)] = inst_35988);

(statearr_36068[(15)] = inst_35986);

(statearr_36068[(16)] = inst_36010);

return statearr_36068;
})();
var statearr_36069_37231 = state_36044__$1;
(statearr_36069_37231[(2)] = null);

(statearr_36069_37231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (3))){
var inst_36042 = (state_36044[(2)]);
var state_36044__$1 = state_36044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36044__$1,inst_36042);
} else {
if((state_val_36045 === (12))){
var inst_36019 = (state_36044[(2)]);
var state_36044__$1 = state_36044;
var statearr_36073_37232 = state_36044__$1;
(statearr_36073_37232[(2)] = inst_36019);

(statearr_36073_37232[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (2))){
var state_36044__$1 = state_36044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36044__$1,(4),ch);
} else {
if((state_val_36045 === (23))){
var state_36044__$1 = state_36044;
var statearr_36076_37233 = state_36044__$1;
(statearr_36076_37233[(2)] = null);

(statearr_36076_37233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (19))){
var inst_35975 = (state_36044[(8)]);
var inst_36025 = (state_36044[(11)]);
var inst_36027 = cljs.core.async.muxch_STAR_(inst_36025);
var state_36044__$1 = state_36044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36044__$1,(22),inst_36027,inst_35975);
} else {
if((state_val_36045 === (11))){
var inst_35985 = (state_36044[(12)]);
var inst_35999 = (state_36044[(10)]);
var inst_35999__$1 = cljs.core.seq(inst_35985);
var state_36044__$1 = (function (){var statearr_36077 = state_36044;
(statearr_36077[(10)] = inst_35999__$1);

return statearr_36077;
})();
if(inst_35999__$1){
var statearr_36078_37234 = state_36044__$1;
(statearr_36078_37234[(1)] = (13));

} else {
var statearr_36079_37236 = state_36044__$1;
(statearr_36079_37236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (9))){
var inst_36021 = (state_36044[(2)]);
var state_36044__$1 = state_36044;
var statearr_36080_37237 = state_36044__$1;
(statearr_36080_37237[(2)] = inst_36021);

(statearr_36080_37237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (5))){
var inst_35982 = cljs.core.deref(mults);
var inst_35983 = cljs.core.vals(inst_35982);
var inst_35984 = cljs.core.seq(inst_35983);
var inst_35985 = inst_35984;
var inst_35986 = null;
var inst_35987 = (0);
var inst_35988 = (0);
var state_36044__$1 = (function (){var statearr_36081 = state_36044;
(statearr_36081[(12)] = inst_35985);

(statearr_36081[(13)] = inst_35987);

(statearr_36081[(14)] = inst_35988);

(statearr_36081[(15)] = inst_35986);

return statearr_36081;
})();
var statearr_36082_37239 = state_36044__$1;
(statearr_36082_37239[(2)] = null);

(statearr_36082_37239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (14))){
var state_36044__$1 = state_36044;
var statearr_36086_37240 = state_36044__$1;
(statearr_36086_37240[(2)] = null);

(statearr_36086_37240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (16))){
var inst_35999 = (state_36044[(10)]);
var inst_36003 = cljs.core.chunk_first(inst_35999);
var inst_36004 = cljs.core.chunk_rest(inst_35999);
var inst_36005 = cljs.core.count(inst_36003);
var inst_35985 = inst_36004;
var inst_35986 = inst_36003;
var inst_35987 = inst_36005;
var inst_35988 = (0);
var state_36044__$1 = (function (){var statearr_36087 = state_36044;
(statearr_36087[(12)] = inst_35985);

(statearr_36087[(13)] = inst_35987);

(statearr_36087[(14)] = inst_35988);

(statearr_36087[(15)] = inst_35986);

return statearr_36087;
})();
var statearr_36088_37241 = state_36044__$1;
(statearr_36088_37241[(2)] = null);

(statearr_36088_37241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (10))){
var inst_35985 = (state_36044[(12)]);
var inst_35987 = (state_36044[(13)]);
var inst_35988 = (state_36044[(14)]);
var inst_35986 = (state_36044[(15)]);
var inst_35993 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35986,inst_35988);
var inst_35994 = cljs.core.async.muxch_STAR_(inst_35993);
var inst_35995 = cljs.core.async.close_BANG_(inst_35994);
var inst_35996 = (inst_35988 + (1));
var tmp36083 = inst_35985;
var tmp36084 = inst_35987;
var tmp36085 = inst_35986;
var inst_35985__$1 = tmp36083;
var inst_35986__$1 = tmp36085;
var inst_35987__$1 = tmp36084;
var inst_35988__$1 = inst_35996;
var state_36044__$1 = (function (){var statearr_36089 = state_36044;
(statearr_36089[(12)] = inst_35985__$1);

(statearr_36089[(13)] = inst_35987__$1);

(statearr_36089[(14)] = inst_35988__$1);

(statearr_36089[(15)] = inst_35986__$1);

(statearr_36089[(17)] = inst_35995);

return statearr_36089;
})();
var statearr_36090_37242 = state_36044__$1;
(statearr_36090_37242[(2)] = null);

(statearr_36090_37242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (18))){
var inst_36014 = (state_36044[(2)]);
var state_36044__$1 = state_36044;
var statearr_36091_37243 = state_36044__$1;
(statearr_36091_37243[(2)] = inst_36014);

(statearr_36091_37243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36045 === (8))){
var inst_35987 = (state_36044[(13)]);
var inst_35988 = (state_36044[(14)]);
var inst_35990 = (inst_35988 < inst_35987);
var inst_35991 = inst_35990;
var state_36044__$1 = state_36044;
if(cljs.core.truth_(inst_35991)){
var statearr_36095_37244 = state_36044__$1;
(statearr_36095_37244[(1)] = (10));

} else {
var statearr_36096_37245 = state_36044__$1;
(statearr_36096_37245[(1)] = (11));

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
var cljs$core$async$state_machine__34463__auto__ = null;
var cljs$core$async$state_machine__34463__auto____0 = (function (){
var statearr_36103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36103[(0)] = cljs$core$async$state_machine__34463__auto__);

(statearr_36103[(1)] = (1));

return statearr_36103;
});
var cljs$core$async$state_machine__34463__auto____1 = (function (state_36044){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_36044);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e36104){if((e36104 instanceof Object)){
var ex__34466__auto__ = e36104;
var statearr_36108_37248 = state_36044;
(statearr_36108_37248[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37249 = state_36044;
state_36044 = G__37249;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$state_machine__34463__auto__ = function(state_36044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34463__auto____1.call(this,state_36044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34463__auto____0;
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34463__auto____1;
return cljs$core$async$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_36112 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_36112[(6)] = c__34784__auto___37206);

return statearr_36112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
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
var G__36120 = arguments.length;
switch (G__36120) {
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
var G__36128 = arguments.length;
switch (G__36128) {
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
var G__36139 = arguments.length;
switch (G__36139) {
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
var c__34784__auto___37253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_36191){
var state_val_36192 = (state_36191[(1)]);
if((state_val_36192 === (7))){
var state_36191__$1 = state_36191;
var statearr_36193_37254 = state_36191__$1;
(statearr_36193_37254[(2)] = null);

(statearr_36193_37254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (1))){
var state_36191__$1 = state_36191;
var statearr_36194_37255 = state_36191__$1;
(statearr_36194_37255[(2)] = null);

(statearr_36194_37255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (4))){
var inst_36154 = (state_36191[(7)]);
var inst_36156 = (inst_36154 < cnt);
var state_36191__$1 = state_36191;
if(cljs.core.truth_(inst_36156)){
var statearr_36195_37256 = state_36191__$1;
(statearr_36195_37256[(1)] = (6));

} else {
var statearr_36196_37257 = state_36191__$1;
(statearr_36196_37257[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (15))){
var inst_36186 = (state_36191[(2)]);
var state_36191__$1 = state_36191;
var statearr_36197_37258 = state_36191__$1;
(statearr_36197_37258[(2)] = inst_36186);

(statearr_36197_37258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (13))){
var inst_36179 = cljs.core.async.close_BANG_(out);
var state_36191__$1 = state_36191;
var statearr_36198_37259 = state_36191__$1;
(statearr_36198_37259[(2)] = inst_36179);

(statearr_36198_37259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (6))){
var state_36191__$1 = state_36191;
var statearr_36205_37260 = state_36191__$1;
(statearr_36205_37260[(2)] = null);

(statearr_36205_37260[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (3))){
var inst_36188 = (state_36191[(2)]);
var state_36191__$1 = state_36191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36191__$1,inst_36188);
} else {
if((state_val_36192 === (12))){
var inst_36176 = (state_36191[(8)]);
var inst_36176__$1 = (state_36191[(2)]);
var inst_36177 = cljs.core.some(cljs.core.nil_QMARK_,inst_36176__$1);
var state_36191__$1 = (function (){var statearr_36221 = state_36191;
(statearr_36221[(8)] = inst_36176__$1);

return statearr_36221;
})();
if(cljs.core.truth_(inst_36177)){
var statearr_36222_37262 = state_36191__$1;
(statearr_36222_37262[(1)] = (13));

} else {
var statearr_36223_37263 = state_36191__$1;
(statearr_36223_37263[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (2))){
var inst_36153 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36154 = (0);
var state_36191__$1 = (function (){var statearr_36227 = state_36191;
(statearr_36227[(9)] = inst_36153);

(statearr_36227[(7)] = inst_36154);

return statearr_36227;
})();
var statearr_36228_37264 = state_36191__$1;
(statearr_36228_37264[(2)] = null);

(statearr_36228_37264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (11))){
var inst_36154 = (state_36191[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36191,(10),Object,null,(9));
var inst_36163 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36154) : chs__$1.call(null,inst_36154));
var inst_36164 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36154) : done.call(null,inst_36154));
var inst_36165 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36163,inst_36164);
var state_36191__$1 = state_36191;
var statearr_36238_37269 = state_36191__$1;
(statearr_36238_37269[(2)] = inst_36165);


cljs.core.async.impl.ioc_helpers.process_exception(state_36191__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (9))){
var inst_36154 = (state_36191[(7)]);
var inst_36167 = (state_36191[(2)]);
var inst_36168 = (inst_36154 + (1));
var inst_36154__$1 = inst_36168;
var state_36191__$1 = (function (){var statearr_36242 = state_36191;
(statearr_36242[(10)] = inst_36167);

(statearr_36242[(7)] = inst_36154__$1);

return statearr_36242;
})();
var statearr_36246_37270 = state_36191__$1;
(statearr_36246_37270[(2)] = null);

(statearr_36246_37270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (5))){
var inst_36174 = (state_36191[(2)]);
var state_36191__$1 = (function (){var statearr_36251 = state_36191;
(statearr_36251[(11)] = inst_36174);

return statearr_36251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36191__$1,(12),dchan);
} else {
if((state_val_36192 === (14))){
var inst_36176 = (state_36191[(8)]);
var inst_36181 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36176);
var state_36191__$1 = state_36191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36191__$1,(16),out,inst_36181);
} else {
if((state_val_36192 === (16))){
var inst_36183 = (state_36191[(2)]);
var state_36191__$1 = (function (){var statearr_36252 = state_36191;
(statearr_36252[(12)] = inst_36183);

return statearr_36252;
})();
var statearr_36253_37271 = state_36191__$1;
(statearr_36253_37271[(2)] = null);

(statearr_36253_37271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (10))){
var inst_36158 = (state_36191[(2)]);
var inst_36159 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36191__$1 = (function (){var statearr_36254 = state_36191;
(statearr_36254[(13)] = inst_36158);

return statearr_36254;
})();
var statearr_36255_37272 = state_36191__$1;
(statearr_36255_37272[(2)] = inst_36159);


cljs.core.async.impl.ioc_helpers.process_exception(state_36191__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36192 === (8))){
var inst_36172 = (state_36191[(2)]);
var state_36191__$1 = state_36191;
var statearr_36256_37273 = state_36191__$1;
(statearr_36256_37273[(2)] = inst_36172);

(statearr_36256_37273[(1)] = (5));


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
var cljs$core$async$state_machine__34463__auto__ = null;
var cljs$core$async$state_machine__34463__auto____0 = (function (){
var statearr_36257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36257[(0)] = cljs$core$async$state_machine__34463__auto__);

(statearr_36257[(1)] = (1));

return statearr_36257;
});
var cljs$core$async$state_machine__34463__auto____1 = (function (state_36191){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_36191);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e36258){if((e36258 instanceof Object)){
var ex__34466__auto__ = e36258;
var statearr_36259_37274 = state_36191;
(statearr_36259_37274[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37279 = state_36191;
state_36191 = G__37279;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$state_machine__34463__auto__ = function(state_36191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34463__auto____1.call(this,state_36191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34463__auto____0;
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34463__auto____1;
return cljs$core$async$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_36260 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_36260[(6)] = c__34784__auto___37253);

return statearr_36260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
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
var G__36263 = arguments.length;
switch (G__36263) {
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
var c__34784__auto___37284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_36295){
var state_val_36296 = (state_36295[(1)]);
if((state_val_36296 === (7))){
var inst_36275 = (state_36295[(7)]);
var inst_36274 = (state_36295[(8)]);
var inst_36274__$1 = (state_36295[(2)]);
var inst_36275__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36274__$1,(0),null);
var inst_36276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36274__$1,(1),null);
var inst_36277 = (inst_36275__$1 == null);
var state_36295__$1 = (function (){var statearr_36297 = state_36295;
(statearr_36297[(7)] = inst_36275__$1);

(statearr_36297[(8)] = inst_36274__$1);

(statearr_36297[(9)] = inst_36276);

return statearr_36297;
})();
if(cljs.core.truth_(inst_36277)){
var statearr_36298_37285 = state_36295__$1;
(statearr_36298_37285[(1)] = (8));

} else {
var statearr_36299_37286 = state_36295__$1;
(statearr_36299_37286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (1))){
var inst_36264 = cljs.core.vec(chs);
var inst_36265 = inst_36264;
var state_36295__$1 = (function (){var statearr_36300 = state_36295;
(statearr_36300[(10)] = inst_36265);

return statearr_36300;
})();
var statearr_36301_37287 = state_36295__$1;
(statearr_36301_37287[(2)] = null);

(statearr_36301_37287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (4))){
var inst_36265 = (state_36295[(10)]);
var state_36295__$1 = state_36295;
return cljs.core.async.ioc_alts_BANG_(state_36295__$1,(7),inst_36265);
} else {
if((state_val_36296 === (6))){
var inst_36291 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
var statearr_36302_37288 = state_36295__$1;
(statearr_36302_37288[(2)] = inst_36291);

(statearr_36302_37288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (3))){
var inst_36293 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36295__$1,inst_36293);
} else {
if((state_val_36296 === (2))){
var inst_36265 = (state_36295[(10)]);
var inst_36267 = cljs.core.count(inst_36265);
var inst_36268 = (inst_36267 > (0));
var state_36295__$1 = state_36295;
if(cljs.core.truth_(inst_36268)){
var statearr_36304_37289 = state_36295__$1;
(statearr_36304_37289[(1)] = (4));

} else {
var statearr_36305_37290 = state_36295__$1;
(statearr_36305_37290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (11))){
var inst_36265 = (state_36295[(10)]);
var inst_36284 = (state_36295[(2)]);
var tmp36303 = inst_36265;
var inst_36265__$1 = tmp36303;
var state_36295__$1 = (function (){var statearr_36306 = state_36295;
(statearr_36306[(11)] = inst_36284);

(statearr_36306[(10)] = inst_36265__$1);

return statearr_36306;
})();
var statearr_36307_37291 = state_36295__$1;
(statearr_36307_37291[(2)] = null);

(statearr_36307_37291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (9))){
var inst_36275 = (state_36295[(7)]);
var state_36295__$1 = state_36295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36295__$1,(11),out,inst_36275);
} else {
if((state_val_36296 === (5))){
var inst_36289 = cljs.core.async.close_BANG_(out);
var state_36295__$1 = state_36295;
var statearr_36308_37295 = state_36295__$1;
(statearr_36308_37295[(2)] = inst_36289);

(statearr_36308_37295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (10))){
var inst_36287 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
var statearr_36309_37296 = state_36295__$1;
(statearr_36309_37296[(2)] = inst_36287);

(statearr_36309_37296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (8))){
var inst_36275 = (state_36295[(7)]);
var inst_36274 = (state_36295[(8)]);
var inst_36276 = (state_36295[(9)]);
var inst_36265 = (state_36295[(10)]);
var inst_36279 = (function (){var cs = inst_36265;
var vec__36270 = inst_36274;
var v = inst_36275;
var c = inst_36276;
return (function (p1__36261_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36261_SHARP_);
});
})();
var inst_36280 = cljs.core.filterv(inst_36279,inst_36265);
var inst_36265__$1 = inst_36280;
var state_36295__$1 = (function (){var statearr_36310 = state_36295;
(statearr_36310[(10)] = inst_36265__$1);

return statearr_36310;
})();
var statearr_36311_37300 = state_36295__$1;
(statearr_36311_37300[(2)] = null);

(statearr_36311_37300[(1)] = (2));


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
var cljs$core$async$state_machine__34463__auto__ = null;
var cljs$core$async$state_machine__34463__auto____0 = (function (){
var statearr_36312 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36312[(0)] = cljs$core$async$state_machine__34463__auto__);

(statearr_36312[(1)] = (1));

return statearr_36312;
});
var cljs$core$async$state_machine__34463__auto____1 = (function (state_36295){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_36295);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e36313){if((e36313 instanceof Object)){
var ex__34466__auto__ = e36313;
var statearr_36314_37308 = state_36295;
(statearr_36314_37308[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37309 = state_36295;
state_36295 = G__37309;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$state_machine__34463__auto__ = function(state_36295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34463__auto____1.call(this,state_36295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34463__auto____0;
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34463__auto____1;
return cljs$core$async$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_36315 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_36315[(6)] = c__34784__auto___37284);

return statearr_36315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
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
var G__36317 = arguments.length;
switch (G__36317) {
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
var c__34784__auto___37311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_36341){
var state_val_36342 = (state_36341[(1)]);
if((state_val_36342 === (7))){
var inst_36323 = (state_36341[(7)]);
var inst_36323__$1 = (state_36341[(2)]);
var inst_36324 = (inst_36323__$1 == null);
var inst_36325 = cljs.core.not(inst_36324);
var state_36341__$1 = (function (){var statearr_36343 = state_36341;
(statearr_36343[(7)] = inst_36323__$1);

return statearr_36343;
})();
if(inst_36325){
var statearr_36344_37314 = state_36341__$1;
(statearr_36344_37314[(1)] = (8));

} else {
var statearr_36345_37315 = state_36341__$1;
(statearr_36345_37315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (1))){
var inst_36318 = (0);
var state_36341__$1 = (function (){var statearr_36346 = state_36341;
(statearr_36346[(8)] = inst_36318);

return statearr_36346;
})();
var statearr_36347_37317 = state_36341__$1;
(statearr_36347_37317[(2)] = null);

(statearr_36347_37317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (4))){
var state_36341__$1 = state_36341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36341__$1,(7),ch);
} else {
if((state_val_36342 === (6))){
var inst_36336 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
var statearr_36348_37319 = state_36341__$1;
(statearr_36348_37319[(2)] = inst_36336);

(statearr_36348_37319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (3))){
var inst_36338 = (state_36341[(2)]);
var inst_36339 = cljs.core.async.close_BANG_(out);
var state_36341__$1 = (function (){var statearr_36349 = state_36341;
(statearr_36349[(9)] = inst_36338);

return statearr_36349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36341__$1,inst_36339);
} else {
if((state_val_36342 === (2))){
var inst_36318 = (state_36341[(8)]);
var inst_36320 = (inst_36318 < n);
var state_36341__$1 = state_36341;
if(cljs.core.truth_(inst_36320)){
var statearr_36350_37320 = state_36341__$1;
(statearr_36350_37320[(1)] = (4));

} else {
var statearr_36351_37321 = state_36341__$1;
(statearr_36351_37321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (11))){
var inst_36318 = (state_36341[(8)]);
var inst_36328 = (state_36341[(2)]);
var inst_36329 = (inst_36318 + (1));
var inst_36318__$1 = inst_36329;
var state_36341__$1 = (function (){var statearr_36352 = state_36341;
(statearr_36352[(8)] = inst_36318__$1);

(statearr_36352[(10)] = inst_36328);

return statearr_36352;
})();
var statearr_36353_37324 = state_36341__$1;
(statearr_36353_37324[(2)] = null);

(statearr_36353_37324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (9))){
var state_36341__$1 = state_36341;
var statearr_36354_37328 = state_36341__$1;
(statearr_36354_37328[(2)] = null);

(statearr_36354_37328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (5))){
var state_36341__$1 = state_36341;
var statearr_36355_37329 = state_36341__$1;
(statearr_36355_37329[(2)] = null);

(statearr_36355_37329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (10))){
var inst_36333 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
var statearr_36356_37330 = state_36341__$1;
(statearr_36356_37330[(2)] = inst_36333);

(statearr_36356_37330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (8))){
var inst_36323 = (state_36341[(7)]);
var state_36341__$1 = state_36341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36341__$1,(11),out,inst_36323);
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
var cljs$core$async$state_machine__34463__auto__ = null;
var cljs$core$async$state_machine__34463__auto____0 = (function (){
var statearr_36357 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36357[(0)] = cljs$core$async$state_machine__34463__auto__);

(statearr_36357[(1)] = (1));

return statearr_36357;
});
var cljs$core$async$state_machine__34463__auto____1 = (function (state_36341){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_36341);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e36358){if((e36358 instanceof Object)){
var ex__34466__auto__ = e36358;
var statearr_36359_37332 = state_36341;
(statearr_36359_37332[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37333 = state_36341;
state_36341 = G__37333;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$state_machine__34463__auto__ = function(state_36341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34463__auto____1.call(this,state_36341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34463__auto____0;
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34463__auto____1;
return cljs$core$async$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_36360 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_36360[(6)] = c__34784__auto___37311);

return statearr_36360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36362 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36362 = (function (f,ch,meta36363){
this.f = f;
this.ch = ch;
this.meta36363 = meta36363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36364,meta36363__$1){
var self__ = this;
var _36364__$1 = this;
return (new cljs.core.async.t_cljs$core$async36362(self__.f,self__.ch,meta36363__$1));
}));

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36364){
var self__ = this;
var _36364__$1 = this;
return self__.meta36363;
}));

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36365 = (function (f,ch,meta36363,_,fn1,meta36366){
this.f = f;
this.ch = ch;
this.meta36363 = meta36363;
this._ = _;
this.fn1 = fn1;
this.meta36366 = meta36366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36367,meta36366__$1){
var self__ = this;
var _36367__$1 = this;
return (new cljs.core.async.t_cljs$core$async36365(self__.f,self__.ch,self__.meta36363,self__._,self__.fn1,meta36366__$1));
}));

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36367){
var self__ = this;
var _36367__$1 = this;
return self__.meta36366;
}));

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36361_SHARP_){
var G__36368 = (((p1__36361_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36361_SHARP_) : self__.f.call(null,p1__36361_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36368) : f1.call(null,G__36368));
});
}));

(cljs.core.async.t_cljs$core$async36365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36363","meta36363",297710205,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36362","cljs.core.async/t_cljs$core$async36362",-1951059513,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36366","meta36366",676356982,null)], null);
}));

(cljs.core.async.t_cljs$core$async36365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36365");

(cljs.core.async.t_cljs$core$async36365.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36365.
 */
cljs.core.async.__GT_t_cljs$core$async36365 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36365(f__$1,ch__$1,meta36363__$1,___$2,fn1__$1,meta36366){
return (new cljs.core.async.t_cljs$core$async36365(f__$1,ch__$1,meta36363__$1,___$2,fn1__$1,meta36366));
});

}

return (new cljs.core.async.t_cljs$core$async36365(self__.f,self__.ch,self__.meta36363,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36369 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36369) : self__.f.call(null,G__36369));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36362.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36363","meta36363",297710205,null)], null);
}));

(cljs.core.async.t_cljs$core$async36362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36362");

(cljs.core.async.t_cljs$core$async36362.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36362.
 */
cljs.core.async.__GT_t_cljs$core$async36362 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36362(f__$1,ch__$1,meta36363){
return (new cljs.core.async.t_cljs$core$async36362(f__$1,ch__$1,meta36363));
});

}

return (new cljs.core.async.t_cljs$core$async36362(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36370 = (function (f,ch,meta36371){
this.f = f;
this.ch = ch;
this.meta36371 = meta36371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36372,meta36371__$1){
var self__ = this;
var _36372__$1 = this;
return (new cljs.core.async.t_cljs$core$async36370(self__.f,self__.ch,meta36371__$1));
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36372){
var self__ = this;
var _36372__$1 = this;
return self__.meta36371;
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36371","meta36371",1376530487,null)], null);
}));

(cljs.core.async.t_cljs$core$async36370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36370");

(cljs.core.async.t_cljs$core$async36370.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36370.
 */
cljs.core.async.__GT_t_cljs$core$async36370 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36370(f__$1,ch__$1,meta36371){
return (new cljs.core.async.t_cljs$core$async36370(f__$1,ch__$1,meta36371));
});

}

return (new cljs.core.async.t_cljs$core$async36370(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36373 = (function (p,ch,meta36374){
this.p = p;
this.ch = ch;
this.meta36374 = meta36374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36375,meta36374__$1){
var self__ = this;
var _36375__$1 = this;
return (new cljs.core.async.t_cljs$core$async36373(self__.p,self__.ch,meta36374__$1));
}));

(cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36375){
var self__ = this;
var _36375__$1 = this;
return self__.meta36374;
}));

(cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36374","meta36374",322303601,null)], null);
}));

(cljs.core.async.t_cljs$core$async36373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36373");

(cljs.core.async.t_cljs$core$async36373.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36373.
 */
cljs.core.async.__GT_t_cljs$core$async36373 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36373(p__$1,ch__$1,meta36374){
return (new cljs.core.async.t_cljs$core$async36373(p__$1,ch__$1,meta36374));
});

}

return (new cljs.core.async.t_cljs$core$async36373(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36377 = arguments.length;
switch (G__36377) {
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
var c__34784__auto___37347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_36398){
var state_val_36399 = (state_36398[(1)]);
if((state_val_36399 === (7))){
var inst_36394 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
var statearr_36400_37348 = state_36398__$1;
(statearr_36400_37348[(2)] = inst_36394);

(statearr_36400_37348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (1))){
var state_36398__$1 = state_36398;
var statearr_36401_37349 = state_36398__$1;
(statearr_36401_37349[(2)] = null);

(statearr_36401_37349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (4))){
var inst_36380 = (state_36398[(7)]);
var inst_36380__$1 = (state_36398[(2)]);
var inst_36381 = (inst_36380__$1 == null);
var state_36398__$1 = (function (){var statearr_36402 = state_36398;
(statearr_36402[(7)] = inst_36380__$1);

return statearr_36402;
})();
if(cljs.core.truth_(inst_36381)){
var statearr_36403_37351 = state_36398__$1;
(statearr_36403_37351[(1)] = (5));

} else {
var statearr_36404_37355 = state_36398__$1;
(statearr_36404_37355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (6))){
var inst_36380 = (state_36398[(7)]);
var inst_36385 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36380) : p.call(null,inst_36380));
var state_36398__$1 = state_36398;
if(cljs.core.truth_(inst_36385)){
var statearr_36405_37356 = state_36398__$1;
(statearr_36405_37356[(1)] = (8));

} else {
var statearr_36406_37357 = state_36398__$1;
(statearr_36406_37357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (3))){
var inst_36396 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36398__$1,inst_36396);
} else {
if((state_val_36399 === (2))){
var state_36398__$1 = state_36398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36398__$1,(4),ch);
} else {
if((state_val_36399 === (11))){
var inst_36388 = (state_36398[(2)]);
var state_36398__$1 = state_36398;
var statearr_36407_37358 = state_36398__$1;
(statearr_36407_37358[(2)] = inst_36388);

(statearr_36407_37358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (9))){
var state_36398__$1 = state_36398;
var statearr_36408_37359 = state_36398__$1;
(statearr_36408_37359[(2)] = null);

(statearr_36408_37359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (5))){
var inst_36383 = cljs.core.async.close_BANG_(out);
var state_36398__$1 = state_36398;
var statearr_36409_37360 = state_36398__$1;
(statearr_36409_37360[(2)] = inst_36383);

(statearr_36409_37360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (10))){
var inst_36391 = (state_36398[(2)]);
var state_36398__$1 = (function (){var statearr_36410 = state_36398;
(statearr_36410[(8)] = inst_36391);

return statearr_36410;
})();
var statearr_36411_37361 = state_36398__$1;
(statearr_36411_37361[(2)] = null);

(statearr_36411_37361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36399 === (8))){
var inst_36380 = (state_36398[(7)]);
var state_36398__$1 = state_36398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36398__$1,(11),out,inst_36380);
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
var cljs$core$async$state_machine__34463__auto__ = null;
var cljs$core$async$state_machine__34463__auto____0 = (function (){
var statearr_36412 = [null,null,null,null,null,null,null,null,null];
(statearr_36412[(0)] = cljs$core$async$state_machine__34463__auto__);

(statearr_36412[(1)] = (1));

return statearr_36412;
});
var cljs$core$async$state_machine__34463__auto____1 = (function (state_36398){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_36398);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e36413){if((e36413 instanceof Object)){
var ex__34466__auto__ = e36413;
var statearr_36414_37362 = state_36398;
(statearr_36414_37362[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37363 = state_36398;
state_36398 = G__37363;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$state_machine__34463__auto__ = function(state_36398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34463__auto____1.call(this,state_36398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34463__auto____0;
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34463__auto____1;
return cljs$core$async$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_36415 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_36415[(6)] = c__34784__auto___37347);

return statearr_36415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36417 = arguments.length;
switch (G__36417) {
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
var c__34784__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_36479){
var state_val_36480 = (state_36479[(1)]);
if((state_val_36480 === (7))){
var inst_36475 = (state_36479[(2)]);
var state_36479__$1 = state_36479;
var statearr_36481_37366 = state_36479__$1;
(statearr_36481_37366[(2)] = inst_36475);

(statearr_36481_37366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (20))){
var inst_36445 = (state_36479[(7)]);
var inst_36456 = (state_36479[(2)]);
var inst_36457 = cljs.core.next(inst_36445);
var inst_36431 = inst_36457;
var inst_36432 = null;
var inst_36433 = (0);
var inst_36434 = (0);
var state_36479__$1 = (function (){var statearr_36482 = state_36479;
(statearr_36482[(8)] = inst_36433);

(statearr_36482[(9)] = inst_36432);

(statearr_36482[(10)] = inst_36431);

(statearr_36482[(11)] = inst_36456);

(statearr_36482[(12)] = inst_36434);

return statearr_36482;
})();
var statearr_36483_37367 = state_36479__$1;
(statearr_36483_37367[(2)] = null);

(statearr_36483_37367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (1))){
var state_36479__$1 = state_36479;
var statearr_36484_37368 = state_36479__$1;
(statearr_36484_37368[(2)] = null);

(statearr_36484_37368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (4))){
var inst_36420 = (state_36479[(13)]);
var inst_36420__$1 = (state_36479[(2)]);
var inst_36421 = (inst_36420__$1 == null);
var state_36479__$1 = (function (){var statearr_36485 = state_36479;
(statearr_36485[(13)] = inst_36420__$1);

return statearr_36485;
})();
if(cljs.core.truth_(inst_36421)){
var statearr_36486_37369 = state_36479__$1;
(statearr_36486_37369[(1)] = (5));

} else {
var statearr_36487_37370 = state_36479__$1;
(statearr_36487_37370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (15))){
var state_36479__$1 = state_36479;
var statearr_36491_37371 = state_36479__$1;
(statearr_36491_37371[(2)] = null);

(statearr_36491_37371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (21))){
var state_36479__$1 = state_36479;
var statearr_36492_37375 = state_36479__$1;
(statearr_36492_37375[(2)] = null);

(statearr_36492_37375[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (13))){
var inst_36433 = (state_36479[(8)]);
var inst_36432 = (state_36479[(9)]);
var inst_36431 = (state_36479[(10)]);
var inst_36434 = (state_36479[(12)]);
var inst_36441 = (state_36479[(2)]);
var inst_36442 = (inst_36434 + (1));
var tmp36488 = inst_36433;
var tmp36489 = inst_36432;
var tmp36490 = inst_36431;
var inst_36431__$1 = tmp36490;
var inst_36432__$1 = tmp36489;
var inst_36433__$1 = tmp36488;
var inst_36434__$1 = inst_36442;
var state_36479__$1 = (function (){var statearr_36493 = state_36479;
(statearr_36493[(8)] = inst_36433__$1);

(statearr_36493[(9)] = inst_36432__$1);

(statearr_36493[(10)] = inst_36431__$1);

(statearr_36493[(12)] = inst_36434__$1);

(statearr_36493[(14)] = inst_36441);

return statearr_36493;
})();
var statearr_36494_37380 = state_36479__$1;
(statearr_36494_37380[(2)] = null);

(statearr_36494_37380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (22))){
var state_36479__$1 = state_36479;
var statearr_36495_37381 = state_36479__$1;
(statearr_36495_37381[(2)] = null);

(statearr_36495_37381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (6))){
var inst_36420 = (state_36479[(13)]);
var inst_36429 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36420) : f.call(null,inst_36420));
var inst_36430 = cljs.core.seq(inst_36429);
var inst_36431 = inst_36430;
var inst_36432 = null;
var inst_36433 = (0);
var inst_36434 = (0);
var state_36479__$1 = (function (){var statearr_36496 = state_36479;
(statearr_36496[(8)] = inst_36433);

(statearr_36496[(9)] = inst_36432);

(statearr_36496[(10)] = inst_36431);

(statearr_36496[(12)] = inst_36434);

return statearr_36496;
})();
var statearr_36497_37382 = state_36479__$1;
(statearr_36497_37382[(2)] = null);

(statearr_36497_37382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (17))){
var inst_36445 = (state_36479[(7)]);
var inst_36449 = cljs.core.chunk_first(inst_36445);
var inst_36450 = cljs.core.chunk_rest(inst_36445);
var inst_36451 = cljs.core.count(inst_36449);
var inst_36431 = inst_36450;
var inst_36432 = inst_36449;
var inst_36433 = inst_36451;
var inst_36434 = (0);
var state_36479__$1 = (function (){var statearr_36498 = state_36479;
(statearr_36498[(8)] = inst_36433);

(statearr_36498[(9)] = inst_36432);

(statearr_36498[(10)] = inst_36431);

(statearr_36498[(12)] = inst_36434);

return statearr_36498;
})();
var statearr_36499_37383 = state_36479__$1;
(statearr_36499_37383[(2)] = null);

(statearr_36499_37383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (3))){
var inst_36477 = (state_36479[(2)]);
var state_36479__$1 = state_36479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36479__$1,inst_36477);
} else {
if((state_val_36480 === (12))){
var inst_36465 = (state_36479[(2)]);
var state_36479__$1 = state_36479;
var statearr_36500_37384 = state_36479__$1;
(statearr_36500_37384[(2)] = inst_36465);

(statearr_36500_37384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (2))){
var state_36479__$1 = state_36479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36479__$1,(4),in$);
} else {
if((state_val_36480 === (23))){
var inst_36473 = (state_36479[(2)]);
var state_36479__$1 = state_36479;
var statearr_36501_37385 = state_36479__$1;
(statearr_36501_37385[(2)] = inst_36473);

(statearr_36501_37385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (19))){
var inst_36460 = (state_36479[(2)]);
var state_36479__$1 = state_36479;
var statearr_36502_37386 = state_36479__$1;
(statearr_36502_37386[(2)] = inst_36460);

(statearr_36502_37386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (11))){
var inst_36445 = (state_36479[(7)]);
var inst_36431 = (state_36479[(10)]);
var inst_36445__$1 = cljs.core.seq(inst_36431);
var state_36479__$1 = (function (){var statearr_36503 = state_36479;
(statearr_36503[(7)] = inst_36445__$1);

return statearr_36503;
})();
if(inst_36445__$1){
var statearr_36504_37387 = state_36479__$1;
(statearr_36504_37387[(1)] = (14));

} else {
var statearr_36505_37388 = state_36479__$1;
(statearr_36505_37388[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (9))){
var inst_36467 = (state_36479[(2)]);
var inst_36468 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36479__$1 = (function (){var statearr_36506 = state_36479;
(statearr_36506[(15)] = inst_36467);

return statearr_36506;
})();
if(cljs.core.truth_(inst_36468)){
var statearr_36507_37389 = state_36479__$1;
(statearr_36507_37389[(1)] = (21));

} else {
var statearr_36508_37390 = state_36479__$1;
(statearr_36508_37390[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (5))){
var inst_36423 = cljs.core.async.close_BANG_(out);
var state_36479__$1 = state_36479;
var statearr_36509_37391 = state_36479__$1;
(statearr_36509_37391[(2)] = inst_36423);

(statearr_36509_37391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (14))){
var inst_36445 = (state_36479[(7)]);
var inst_36447 = cljs.core.chunked_seq_QMARK_(inst_36445);
var state_36479__$1 = state_36479;
if(inst_36447){
var statearr_36510_37393 = state_36479__$1;
(statearr_36510_37393[(1)] = (17));

} else {
var statearr_36511_37394 = state_36479__$1;
(statearr_36511_37394[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (16))){
var inst_36463 = (state_36479[(2)]);
var state_36479__$1 = state_36479;
var statearr_36512_37395 = state_36479__$1;
(statearr_36512_37395[(2)] = inst_36463);

(statearr_36512_37395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36480 === (10))){
var inst_36432 = (state_36479[(9)]);
var inst_36434 = (state_36479[(12)]);
var inst_36439 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36432,inst_36434);
var state_36479__$1 = state_36479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36479__$1,(13),out,inst_36439);
} else {
if((state_val_36480 === (18))){
var inst_36445 = (state_36479[(7)]);
var inst_36454 = cljs.core.first(inst_36445);
var state_36479__$1 = state_36479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36479__$1,(20),out,inst_36454);
} else {
if((state_val_36480 === (8))){
var inst_36433 = (state_36479[(8)]);
var inst_36434 = (state_36479[(12)]);
var inst_36436 = (inst_36434 < inst_36433);
var inst_36437 = inst_36436;
var state_36479__$1 = state_36479;
if(cljs.core.truth_(inst_36437)){
var statearr_36513_37397 = state_36479__$1;
(statearr_36513_37397[(1)] = (10));

} else {
var statearr_36514_37398 = state_36479__$1;
(statearr_36514_37398[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34463__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34463__auto____0 = (function (){
var statearr_36515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36515[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34463__auto__);

(statearr_36515[(1)] = (1));

return statearr_36515;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34463__auto____1 = (function (state_36479){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_36479);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e36516){if((e36516 instanceof Object)){
var ex__34466__auto__ = e36516;
var statearr_36517_37400 = state_36479;
(statearr_36517_37400[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37401 = state_36479;
state_36479 = G__37401;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34463__auto__ = function(state_36479){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34463__auto____1.call(this,state_36479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34463__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34463__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_36518 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_36518[(6)] = c__34784__auto__);

return statearr_36518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

return c__34784__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36520 = arguments.length;
switch (G__36520) {
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
var G__36522 = arguments.length;
switch (G__36522) {
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
var G__36524 = arguments.length;
switch (G__36524) {
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
var c__34784__auto___37412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_36548){
var state_val_36549 = (state_36548[(1)]);
if((state_val_36549 === (7))){
var inst_36543 = (state_36548[(2)]);
var state_36548__$1 = state_36548;
var statearr_36550_37413 = state_36548__$1;
(statearr_36550_37413[(2)] = inst_36543);

(statearr_36550_37413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36549 === (1))){
var inst_36525 = null;
var state_36548__$1 = (function (){var statearr_36551 = state_36548;
(statearr_36551[(7)] = inst_36525);

return statearr_36551;
})();
var statearr_36552_37415 = state_36548__$1;
(statearr_36552_37415[(2)] = null);

(statearr_36552_37415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36549 === (4))){
var inst_36528 = (state_36548[(8)]);
var inst_36528__$1 = (state_36548[(2)]);
var inst_36529 = (inst_36528__$1 == null);
var inst_36530 = cljs.core.not(inst_36529);
var state_36548__$1 = (function (){var statearr_36553 = state_36548;
(statearr_36553[(8)] = inst_36528__$1);

return statearr_36553;
})();
if(inst_36530){
var statearr_36554_37419 = state_36548__$1;
(statearr_36554_37419[(1)] = (5));

} else {
var statearr_36555_37420 = state_36548__$1;
(statearr_36555_37420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36549 === (6))){
var state_36548__$1 = state_36548;
var statearr_36556_37421 = state_36548__$1;
(statearr_36556_37421[(2)] = null);

(statearr_36556_37421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36549 === (3))){
var inst_36545 = (state_36548[(2)]);
var inst_36546 = cljs.core.async.close_BANG_(out);
var state_36548__$1 = (function (){var statearr_36557 = state_36548;
(statearr_36557[(9)] = inst_36545);

return statearr_36557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36548__$1,inst_36546);
} else {
if((state_val_36549 === (2))){
var state_36548__$1 = state_36548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36548__$1,(4),ch);
} else {
if((state_val_36549 === (11))){
var inst_36528 = (state_36548[(8)]);
var inst_36537 = (state_36548[(2)]);
var inst_36525 = inst_36528;
var state_36548__$1 = (function (){var statearr_36558 = state_36548;
(statearr_36558[(10)] = inst_36537);

(statearr_36558[(7)] = inst_36525);

return statearr_36558;
})();
var statearr_36559_37422 = state_36548__$1;
(statearr_36559_37422[(2)] = null);

(statearr_36559_37422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36549 === (9))){
var inst_36528 = (state_36548[(8)]);
var state_36548__$1 = state_36548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36548__$1,(11),out,inst_36528);
} else {
if((state_val_36549 === (5))){
var inst_36525 = (state_36548[(7)]);
var inst_36528 = (state_36548[(8)]);
var inst_36532 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36528,inst_36525);
var state_36548__$1 = state_36548;
if(inst_36532){
var statearr_36561_37423 = state_36548__$1;
(statearr_36561_37423[(1)] = (8));

} else {
var statearr_36562_37424 = state_36548__$1;
(statearr_36562_37424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36549 === (10))){
var inst_36540 = (state_36548[(2)]);
var state_36548__$1 = state_36548;
var statearr_36563_37425 = state_36548__$1;
(statearr_36563_37425[(2)] = inst_36540);

(statearr_36563_37425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36549 === (8))){
var inst_36525 = (state_36548[(7)]);
var tmp36560 = inst_36525;
var inst_36525__$1 = tmp36560;
var state_36548__$1 = (function (){var statearr_36564 = state_36548;
(statearr_36564[(7)] = inst_36525__$1);

return statearr_36564;
})();
var statearr_36565_37426 = state_36548__$1;
(statearr_36565_37426[(2)] = null);

(statearr_36565_37426[(1)] = (2));


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
var cljs$core$async$state_machine__34463__auto__ = null;
var cljs$core$async$state_machine__34463__auto____0 = (function (){
var statearr_36566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36566[(0)] = cljs$core$async$state_machine__34463__auto__);

(statearr_36566[(1)] = (1));

return statearr_36566;
});
var cljs$core$async$state_machine__34463__auto____1 = (function (state_36548){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_36548);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e36567){if((e36567 instanceof Object)){
var ex__34466__auto__ = e36567;
var statearr_36568_37428 = state_36548;
(statearr_36568_37428[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36567;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37429 = state_36548;
state_36548 = G__37429;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$state_machine__34463__auto__ = function(state_36548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34463__auto____1.call(this,state_36548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34463__auto____0;
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34463__auto____1;
return cljs$core$async$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_36569 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_36569[(6)] = c__34784__auto___37412);

return statearr_36569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36571 = arguments.length;
switch (G__36571) {
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
var c__34784__auto___37431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_36609){
var state_val_36610 = (state_36609[(1)]);
if((state_val_36610 === (7))){
var inst_36605 = (state_36609[(2)]);
var state_36609__$1 = state_36609;
var statearr_36611_37432 = state_36609__$1;
(statearr_36611_37432[(2)] = inst_36605);

(statearr_36611_37432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36610 === (1))){
var inst_36572 = (new Array(n));
var inst_36573 = inst_36572;
var inst_36574 = (0);
var state_36609__$1 = (function (){var statearr_36612 = state_36609;
(statearr_36612[(7)] = inst_36574);

(statearr_36612[(8)] = inst_36573);

return statearr_36612;
})();
var statearr_36613_37436 = state_36609__$1;
(statearr_36613_37436[(2)] = null);

(statearr_36613_37436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36610 === (4))){
var inst_36577 = (state_36609[(9)]);
var inst_36577__$1 = (state_36609[(2)]);
var inst_36578 = (inst_36577__$1 == null);
var inst_36579 = cljs.core.not(inst_36578);
var state_36609__$1 = (function (){var statearr_36614 = state_36609;
(statearr_36614[(9)] = inst_36577__$1);

return statearr_36614;
})();
if(inst_36579){
var statearr_36615_37441 = state_36609__$1;
(statearr_36615_37441[(1)] = (5));

} else {
var statearr_36616_37442 = state_36609__$1;
(statearr_36616_37442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36610 === (15))){
var inst_36599 = (state_36609[(2)]);
var state_36609__$1 = state_36609;
var statearr_36617_37443 = state_36609__$1;
(statearr_36617_37443[(2)] = inst_36599);

(statearr_36617_37443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36610 === (13))){
var state_36609__$1 = state_36609;
var statearr_36618_37444 = state_36609__$1;
(statearr_36618_37444[(2)] = null);

(statearr_36618_37444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36610 === (6))){
var inst_36574 = (state_36609[(7)]);
var inst_36595 = (inst_36574 > (0));
var state_36609__$1 = state_36609;
if(cljs.core.truth_(inst_36595)){
var statearr_36619_37445 = state_36609__$1;
(statearr_36619_37445[(1)] = (12));

} else {
var statearr_36620_37446 = state_36609__$1;
(statearr_36620_37446[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36610 === (3))){
var inst_36607 = (state_36609[(2)]);
var state_36609__$1 = state_36609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36609__$1,inst_36607);
} else {
if((state_val_36610 === (12))){
var inst_36573 = (state_36609[(8)]);
var inst_36597 = cljs.core.vec(inst_36573);
var state_36609__$1 = state_36609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36609__$1,(15),out,inst_36597);
} else {
if((state_val_36610 === (2))){
var state_36609__$1 = state_36609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36609__$1,(4),ch);
} else {
if((state_val_36610 === (11))){
var inst_36589 = (state_36609[(2)]);
var inst_36590 = (new Array(n));
var inst_36573 = inst_36590;
var inst_36574 = (0);
var state_36609__$1 = (function (){var statearr_36621 = state_36609;
(statearr_36621[(7)] = inst_36574);

(statearr_36621[(8)] = inst_36573);

(statearr_36621[(10)] = inst_36589);

return statearr_36621;
})();
var statearr_36622_37447 = state_36609__$1;
(statearr_36622_37447[(2)] = null);

(statearr_36622_37447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36610 === (9))){
var inst_36573 = (state_36609[(8)]);
var inst_36587 = cljs.core.vec(inst_36573);
var state_36609__$1 = state_36609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36609__$1,(11),out,inst_36587);
} else {
if((state_val_36610 === (5))){
var inst_36574 = (state_36609[(7)]);
var inst_36577 = (state_36609[(9)]);
var inst_36573 = (state_36609[(8)]);
var inst_36582 = (state_36609[(11)]);
var inst_36581 = (inst_36573[inst_36574] = inst_36577);
var inst_36582__$1 = (inst_36574 + (1));
var inst_36583 = (inst_36582__$1 < n);
var state_36609__$1 = (function (){var statearr_36623 = state_36609;
(statearr_36623[(11)] = inst_36582__$1);

(statearr_36623[(12)] = inst_36581);

return statearr_36623;
})();
if(cljs.core.truth_(inst_36583)){
var statearr_36624_37448 = state_36609__$1;
(statearr_36624_37448[(1)] = (8));

} else {
var statearr_36625_37449 = state_36609__$1;
(statearr_36625_37449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36610 === (14))){
var inst_36602 = (state_36609[(2)]);
var inst_36603 = cljs.core.async.close_BANG_(out);
var state_36609__$1 = (function (){var statearr_36627 = state_36609;
(statearr_36627[(13)] = inst_36602);

return statearr_36627;
})();
var statearr_36628_37450 = state_36609__$1;
(statearr_36628_37450[(2)] = inst_36603);

(statearr_36628_37450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36610 === (10))){
var inst_36593 = (state_36609[(2)]);
var state_36609__$1 = state_36609;
var statearr_36629_37452 = state_36609__$1;
(statearr_36629_37452[(2)] = inst_36593);

(statearr_36629_37452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36610 === (8))){
var inst_36573 = (state_36609[(8)]);
var inst_36582 = (state_36609[(11)]);
var tmp36626 = inst_36573;
var inst_36573__$1 = tmp36626;
var inst_36574 = inst_36582;
var state_36609__$1 = (function (){var statearr_36630 = state_36609;
(statearr_36630[(7)] = inst_36574);

(statearr_36630[(8)] = inst_36573__$1);

return statearr_36630;
})();
var statearr_36631_37453 = state_36609__$1;
(statearr_36631_37453[(2)] = null);

(statearr_36631_37453[(1)] = (2));


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
var cljs$core$async$state_machine__34463__auto__ = null;
var cljs$core$async$state_machine__34463__auto____0 = (function (){
var statearr_36632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36632[(0)] = cljs$core$async$state_machine__34463__auto__);

(statearr_36632[(1)] = (1));

return statearr_36632;
});
var cljs$core$async$state_machine__34463__auto____1 = (function (state_36609){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_36609);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e36633){if((e36633 instanceof Object)){
var ex__34466__auto__ = e36633;
var statearr_36634_37454 = state_36609;
(statearr_36634_37454[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36633;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37456 = state_36609;
state_36609 = G__37456;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$state_machine__34463__auto__ = function(state_36609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34463__auto____1.call(this,state_36609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34463__auto____0;
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34463__auto____1;
return cljs$core$async$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_36635 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_36635[(6)] = c__34784__auto___37431);

return statearr_36635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36637 = arguments.length;
switch (G__36637) {
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
var c__34784__auto___37458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_36679){
var state_val_36680 = (state_36679[(1)]);
if((state_val_36680 === (7))){
var inst_36675 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36681_37459 = state_36679__$1;
(statearr_36681_37459[(2)] = inst_36675);

(statearr_36681_37459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (1))){
var inst_36638 = [];
var inst_36639 = inst_36638;
var inst_36640 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36679__$1 = (function (){var statearr_36682 = state_36679;
(statearr_36682[(7)] = inst_36639);

(statearr_36682[(8)] = inst_36640);

return statearr_36682;
})();
var statearr_36683_37460 = state_36679__$1;
(statearr_36683_37460[(2)] = null);

(statearr_36683_37460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (4))){
var inst_36643 = (state_36679[(9)]);
var inst_36643__$1 = (state_36679[(2)]);
var inst_36644 = (inst_36643__$1 == null);
var inst_36645 = cljs.core.not(inst_36644);
var state_36679__$1 = (function (){var statearr_36684 = state_36679;
(statearr_36684[(9)] = inst_36643__$1);

return statearr_36684;
})();
if(inst_36645){
var statearr_36685_37461 = state_36679__$1;
(statearr_36685_37461[(1)] = (5));

} else {
var statearr_36686_37462 = state_36679__$1;
(statearr_36686_37462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (15))){
var inst_36669 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36687_37463 = state_36679__$1;
(statearr_36687_37463[(2)] = inst_36669);

(statearr_36687_37463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (13))){
var state_36679__$1 = state_36679;
var statearr_36688_37464 = state_36679__$1;
(statearr_36688_37464[(2)] = null);

(statearr_36688_37464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (6))){
var inst_36639 = (state_36679[(7)]);
var inst_36664 = inst_36639.length;
var inst_36665 = (inst_36664 > (0));
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36665)){
var statearr_36689_37469 = state_36679__$1;
(statearr_36689_37469[(1)] = (12));

} else {
var statearr_36690_37470 = state_36679__$1;
(statearr_36690_37470[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (3))){
var inst_36677 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36679__$1,inst_36677);
} else {
if((state_val_36680 === (12))){
var inst_36639 = (state_36679[(7)]);
var inst_36667 = cljs.core.vec(inst_36639);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36679__$1,(15),out,inst_36667);
} else {
if((state_val_36680 === (2))){
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36679__$1,(4),ch);
} else {
if((state_val_36680 === (11))){
var inst_36643 = (state_36679[(9)]);
var inst_36647 = (state_36679[(10)]);
var inst_36657 = (state_36679[(2)]);
var inst_36658 = [];
var inst_36659 = inst_36658.push(inst_36643);
var inst_36639 = inst_36658;
var inst_36640 = inst_36647;
var state_36679__$1 = (function (){var statearr_36691 = state_36679;
(statearr_36691[(7)] = inst_36639);

(statearr_36691[(11)] = inst_36657);

(statearr_36691[(8)] = inst_36640);

(statearr_36691[(12)] = inst_36659);

return statearr_36691;
})();
var statearr_36692_37475 = state_36679__$1;
(statearr_36692_37475[(2)] = null);

(statearr_36692_37475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (9))){
var inst_36639 = (state_36679[(7)]);
var inst_36655 = cljs.core.vec(inst_36639);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36679__$1,(11),out,inst_36655);
} else {
if((state_val_36680 === (5))){
var inst_36643 = (state_36679[(9)]);
var inst_36640 = (state_36679[(8)]);
var inst_36647 = (state_36679[(10)]);
var inst_36647__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36643) : f.call(null,inst_36643));
var inst_36648 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36647__$1,inst_36640);
var inst_36649 = cljs.core.keyword_identical_QMARK_(inst_36640,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36650 = ((inst_36648) || (inst_36649));
var state_36679__$1 = (function (){var statearr_36693 = state_36679;
(statearr_36693[(10)] = inst_36647__$1);

return statearr_36693;
})();
if(cljs.core.truth_(inst_36650)){
var statearr_36694_37478 = state_36679__$1;
(statearr_36694_37478[(1)] = (8));

} else {
var statearr_36695_37479 = state_36679__$1;
(statearr_36695_37479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (14))){
var inst_36672 = (state_36679[(2)]);
var inst_36673 = cljs.core.async.close_BANG_(out);
var state_36679__$1 = (function (){var statearr_36697 = state_36679;
(statearr_36697[(13)] = inst_36672);

return statearr_36697;
})();
var statearr_36698_37480 = state_36679__$1;
(statearr_36698_37480[(2)] = inst_36673);

(statearr_36698_37480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (10))){
var inst_36662 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36699_37481 = state_36679__$1;
(statearr_36699_37481[(2)] = inst_36662);

(statearr_36699_37481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (8))){
var inst_36639 = (state_36679[(7)]);
var inst_36643 = (state_36679[(9)]);
var inst_36647 = (state_36679[(10)]);
var inst_36652 = inst_36639.push(inst_36643);
var tmp36696 = inst_36639;
var inst_36639__$1 = tmp36696;
var inst_36640 = inst_36647;
var state_36679__$1 = (function (){var statearr_36700 = state_36679;
(statearr_36700[(7)] = inst_36639__$1);

(statearr_36700[(8)] = inst_36640);

(statearr_36700[(14)] = inst_36652);

return statearr_36700;
})();
var statearr_36701_37482 = state_36679__$1;
(statearr_36701_37482[(2)] = null);

(statearr_36701_37482[(1)] = (2));


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
var cljs$core$async$state_machine__34463__auto__ = null;
var cljs$core$async$state_machine__34463__auto____0 = (function (){
var statearr_36702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36702[(0)] = cljs$core$async$state_machine__34463__auto__);

(statearr_36702[(1)] = (1));

return statearr_36702;
});
var cljs$core$async$state_machine__34463__auto____1 = (function (state_36679){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_36679);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e36703){if((e36703 instanceof Object)){
var ex__34466__auto__ = e36703;
var statearr_36704_37483 = state_36679;
(statearr_36704_37483[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37484 = state_36679;
state_36679 = G__37484;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
cljs$core$async$state_machine__34463__auto__ = function(state_36679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34463__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34463__auto____1.call(this,state_36679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34463__auto____0;
cljs$core$async$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34463__auto____1;
return cljs$core$async$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_36705 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_36705[(6)] = c__34784__auto___37458);

return statearr_36705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
