goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48010 = arguments.length;
switch (G__48010) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48020 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48020 = (function (f,blockable,meta48021){
this.f = f;
this.blockable = blockable;
this.meta48021 = meta48021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48022,meta48021__$1){
var self__ = this;
var _48022__$1 = this;
return (new cljs.core.async.t_cljs$core$async48020(self__.f,self__.blockable,meta48021__$1));
}));

(cljs.core.async.t_cljs$core$async48020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48022){
var self__ = this;
var _48022__$1 = this;
return self__.meta48021;
}));

(cljs.core.async.t_cljs$core$async48020.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async48020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async48020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48021","meta48021",568745234,null)], null);
}));

(cljs.core.async.t_cljs$core$async48020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48020");

(cljs.core.async.t_cljs$core$async48020.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48020.
 */
cljs.core.async.__GT_t_cljs$core$async48020 = (function cljs$core$async$__GT_t_cljs$core$async48020(f__$1,blockable__$1,meta48021){
return (new cljs.core.async.t_cljs$core$async48020(f__$1,blockable__$1,meta48021));
});

}

return (new cljs.core.async.t_cljs$core$async48020(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48192 = arguments.length;
switch (G__48192) {
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
var G__48205 = arguments.length;
switch (G__48205) {
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
var G__48213 = arguments.length;
switch (G__48213) {
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
var val_50539 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50539) : fn1.call(null,val_50539));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50539) : fn1.call(null,val_50539));
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
var G__48289 = arguments.length;
switch (G__48289) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4706__auto___50541 = n;
var x_50542 = (0);
while(true){
if((x_50542 < n__4706__auto___50541)){
(a[x_50542] = x_50542);

var G__50543 = (x_50542 + (1));
x_50542 = G__50543;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48359 = (function (flag,meta48360){
this.flag = flag;
this.meta48360 = meta48360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48361,meta48360__$1){
var self__ = this;
var _48361__$1 = this;
return (new cljs.core.async.t_cljs$core$async48359(self__.flag,meta48360__$1));
}));

(cljs.core.async.t_cljs$core$async48359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48361){
var self__ = this;
var _48361__$1 = this;
return self__.meta48360;
}));

(cljs.core.async.t_cljs$core$async48359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async48359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48360","meta48360",-726711859,null)], null);
}));

(cljs.core.async.t_cljs$core$async48359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48359");

(cljs.core.async.t_cljs$core$async48359.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48359.
 */
cljs.core.async.__GT_t_cljs$core$async48359 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48359(flag__$1,meta48360){
return (new cljs.core.async.t_cljs$core$async48359(flag__$1,meta48360));
});

}

return (new cljs.core.async.t_cljs$core$async48359(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48375 = (function (flag,cb,meta48376){
this.flag = flag;
this.cb = cb;
this.meta48376 = meta48376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48377,meta48376__$1){
var self__ = this;
var _48377__$1 = this;
return (new cljs.core.async.t_cljs$core$async48375(self__.flag,self__.cb,meta48376__$1));
}));

(cljs.core.async.t_cljs$core$async48375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48377){
var self__ = this;
var _48377__$1 = this;
return self__.meta48376;
}));

(cljs.core.async.t_cljs$core$async48375.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async48375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48376","meta48376",-1338654685,null)], null);
}));

(cljs.core.async.t_cljs$core$async48375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48375");

(cljs.core.async.t_cljs$core$async48375.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48375.
 */
cljs.core.async.__GT_t_cljs$core$async48375 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48375(flag__$1,cb__$1,meta48376){
return (new cljs.core.async.t_cljs$core$async48375(flag__$1,cb__$1,meta48376));
});

}

return (new cljs.core.async.t_cljs$core$async48375(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__48407_SHARP_){
var G__48409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48407_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48409) : fret.call(null,G__48409));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48408_SHARP_){
var G__48410 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48408_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48410) : fret.call(null,G__48410));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50547 = (i + (1));
i = G__50547;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4835__auto__ = [];
var len__4829__auto___50551 = arguments.length;
var i__4830__auto___50552 = (0);
while(true){
if((i__4830__auto___50552 < len__4829__auto___50551)){
args__4835__auto__.push((arguments[i__4830__auto___50552]));

var G__50553 = (i__4830__auto___50552 + (1));
i__4830__auto___50552 = G__50553;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48413){
var map__48414 = p__48413;
var map__48414__$1 = cljs.core.__destructure_map(map__48414);
var opts = map__48414__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48411){
var G__48412 = cljs.core.first(seq48411);
var seq48411__$1 = cljs.core.next(seq48411);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48412,seq48411__$1);
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
var G__48447 = arguments.length;
switch (G__48447) {
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
var c__47942__auto___50560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_48502){
var state_val_48503 = (state_48502[(1)]);
if((state_val_48503 === (7))){
var inst_48498 = (state_48502[(2)]);
var state_48502__$1 = state_48502;
var statearr_48504_50568 = state_48502__$1;
(statearr_48504_50568[(2)] = inst_48498);

(statearr_48504_50568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (1))){
var state_48502__$1 = state_48502;
var statearr_48505_50574 = state_48502__$1;
(statearr_48505_50574[(2)] = null);

(statearr_48505_50574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (4))){
var inst_48481 = (state_48502[(7)]);
var inst_48481__$1 = (state_48502[(2)]);
var inst_48482 = (inst_48481__$1 == null);
var state_48502__$1 = (function (){var statearr_48506 = state_48502;
(statearr_48506[(7)] = inst_48481__$1);

return statearr_48506;
})();
if(cljs.core.truth_(inst_48482)){
var statearr_48507_50581 = state_48502__$1;
(statearr_48507_50581[(1)] = (5));

} else {
var statearr_48508_50582 = state_48502__$1;
(statearr_48508_50582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (13))){
var state_48502__$1 = state_48502;
var statearr_48509_50583 = state_48502__$1;
(statearr_48509_50583[(2)] = null);

(statearr_48509_50583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (6))){
var inst_48481 = (state_48502[(7)]);
var state_48502__$1 = state_48502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48502__$1,(11),to,inst_48481);
} else {
if((state_val_48503 === (3))){
var inst_48500 = (state_48502[(2)]);
var state_48502__$1 = state_48502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48502__$1,inst_48500);
} else {
if((state_val_48503 === (12))){
var state_48502__$1 = state_48502;
var statearr_48510_50584 = state_48502__$1;
(statearr_48510_50584[(2)] = null);

(statearr_48510_50584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (2))){
var state_48502__$1 = state_48502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48502__$1,(4),from);
} else {
if((state_val_48503 === (11))){
var inst_48491 = (state_48502[(2)]);
var state_48502__$1 = state_48502;
if(cljs.core.truth_(inst_48491)){
var statearr_48511_50585 = state_48502__$1;
(statearr_48511_50585[(1)] = (12));

} else {
var statearr_48512_50586 = state_48502__$1;
(statearr_48512_50586[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (9))){
var state_48502__$1 = state_48502;
var statearr_48513_50587 = state_48502__$1;
(statearr_48513_50587[(2)] = null);

(statearr_48513_50587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (5))){
var state_48502__$1 = state_48502;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48514_50588 = state_48502__$1;
(statearr_48514_50588[(1)] = (8));

} else {
var statearr_48515_50589 = state_48502__$1;
(statearr_48515_50589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (14))){
var inst_48496 = (state_48502[(2)]);
var state_48502__$1 = state_48502;
var statearr_48516_50590 = state_48502__$1;
(statearr_48516_50590[(2)] = inst_48496);

(statearr_48516_50590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (10))){
var inst_48488 = (state_48502[(2)]);
var state_48502__$1 = state_48502;
var statearr_48517_50591 = state_48502__$1;
(statearr_48517_50591[(2)] = inst_48488);

(statearr_48517_50591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48503 === (8))){
var inst_48485 = cljs.core.async.close_BANG_(to);
var state_48502__$1 = state_48502;
var statearr_48518_50592 = state_48502__$1;
(statearr_48518_50592[(2)] = inst_48485);

(statearr_48518_50592[(1)] = (10));


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
var cljs$core$async$state_machine__47758__auto__ = null;
var cljs$core$async$state_machine__47758__auto____0 = (function (){
var statearr_48519 = [null,null,null,null,null,null,null,null];
(statearr_48519[(0)] = cljs$core$async$state_machine__47758__auto__);

(statearr_48519[(1)] = (1));

return statearr_48519;
});
var cljs$core$async$state_machine__47758__auto____1 = (function (state_48502){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_48502);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e48520){var ex__47761__auto__ = e48520;
var statearr_48521_50593 = state_48502;
(statearr_48521_50593[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_48502[(4)]))){
var statearr_48522_50594 = state_48502;
(statearr_48522_50594[(1)] = cljs.core.first((state_48502[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50597 = state_48502;
state_48502 = G__50597;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$state_machine__47758__auto__ = function(state_48502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47758__auto____1.call(this,state_48502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47758__auto____0;
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47758__auto____1;
return cljs$core$async$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_48538 = f__47943__auto__();
(statearr_48538[(6)] = c__47942__auto___50560);

return statearr_48538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
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
var process = (function (p__48542){
var vec__48543 = p__48542;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48543,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48543,(1),null);
var job = vec__48543;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47942__auto___50599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_48550){
var state_val_48551 = (state_48550[(1)]);
if((state_val_48551 === (1))){
var state_48550__$1 = state_48550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48550__$1,(2),res,v);
} else {
if((state_val_48551 === (2))){
var inst_48547 = (state_48550[(2)]);
var inst_48548 = cljs.core.async.close_BANG_(res);
var state_48550__$1 = (function (){var statearr_48552 = state_48550;
(statearr_48552[(7)] = inst_48547);

return statearr_48552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48550__$1,inst_48548);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0 = (function (){
var statearr_48553 = [null,null,null,null,null,null,null,null];
(statearr_48553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__);

(statearr_48553[(1)] = (1));

return statearr_48553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1 = (function (state_48550){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_48550);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e48554){var ex__47761__auto__ = e48554;
var statearr_48555_50603 = state_48550;
(statearr_48555_50603[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_48550[(4)]))){
var statearr_48556_50604 = state_48550;
(statearr_48556_50604[(1)] = cljs.core.first((state_48550[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50605 = state_48550;
state_48550 = G__50605;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__ = function(state_48550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1.call(this,state_48550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_48557 = f__47943__auto__();
(statearr_48557[(6)] = c__47942__auto___50599);

return statearr_48557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__48558){
var vec__48559 = p__48558;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48559,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48559,(1),null);
var job = vec__48559;
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
var n__4706__auto___50610 = n;
var __50611 = (0);
while(true){
if((__50611 < n__4706__auto___50610)){
var G__48562_50612 = type;
var G__48562_50613__$1 = (((G__48562_50612 instanceof cljs.core.Keyword))?G__48562_50612.fqn:null);
switch (G__48562_50613__$1) {
case "compute":
var c__47942__auto___50615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50611,c__47942__auto___50615,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async){
return (function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = ((function (__50611,c__47942__auto___50615,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async){
return (function (state_48575){
var state_val_48576 = (state_48575[(1)]);
if((state_val_48576 === (1))){
var state_48575__$1 = state_48575;
var statearr_48577_50616 = state_48575__$1;
(statearr_48577_50616[(2)] = null);

(statearr_48577_50616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48576 === (2))){
var state_48575__$1 = state_48575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48575__$1,(4),jobs);
} else {
if((state_val_48576 === (3))){
var inst_48573 = (state_48575[(2)]);
var state_48575__$1 = state_48575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48575__$1,inst_48573);
} else {
if((state_val_48576 === (4))){
var inst_48565 = (state_48575[(2)]);
var inst_48566 = process(inst_48565);
var state_48575__$1 = state_48575;
if(cljs.core.truth_(inst_48566)){
var statearr_48578_50619 = state_48575__$1;
(statearr_48578_50619[(1)] = (5));

} else {
var statearr_48579_50620 = state_48575__$1;
(statearr_48579_50620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48576 === (5))){
var state_48575__$1 = state_48575;
var statearr_48580_50621 = state_48575__$1;
(statearr_48580_50621[(2)] = null);

(statearr_48580_50621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48576 === (6))){
var state_48575__$1 = state_48575;
var statearr_48581_50622 = state_48575__$1;
(statearr_48581_50622[(2)] = null);

(statearr_48581_50622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48576 === (7))){
var inst_48571 = (state_48575[(2)]);
var state_48575__$1 = state_48575;
var statearr_48582_50623 = state_48575__$1;
(statearr_48582_50623[(2)] = inst_48571);

(statearr_48582_50623[(1)] = (3));


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
});})(__50611,c__47942__auto___50615,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async))
;
return ((function (__50611,switch__47757__auto__,c__47942__auto___50615,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0 = (function (){
var statearr_48583 = [null,null,null,null,null,null,null];
(statearr_48583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__);

(statearr_48583[(1)] = (1));

return statearr_48583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1 = (function (state_48575){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_48575);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e48584){var ex__47761__auto__ = e48584;
var statearr_48585_50624 = state_48575;
(statearr_48585_50624[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_48575[(4)]))){
var statearr_48586_50629 = state_48575;
(statearr_48586_50629[(1)] = cljs.core.first((state_48575[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50631 = state_48575;
state_48575 = G__50631;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__ = function(state_48575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1.call(this,state_48575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__;
})()
;})(__50611,switch__47757__auto__,c__47942__auto___50615,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async))
})();
var state__47944__auto__ = (function (){var statearr_48587 = f__47943__auto__();
(statearr_48587[(6)] = c__47942__auto___50615);

return statearr_48587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
});})(__50611,c__47942__auto___50615,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async))
);


break;
case "async":
var c__47942__auto___50638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50611,c__47942__auto___50638,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async){
return (function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = ((function (__50611,c__47942__auto___50638,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async){
return (function (state_48600){
var state_val_48601 = (state_48600[(1)]);
if((state_val_48601 === (1))){
var state_48600__$1 = state_48600;
var statearr_48602_50649 = state_48600__$1;
(statearr_48602_50649[(2)] = null);

(statearr_48602_50649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48601 === (2))){
var state_48600__$1 = state_48600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48600__$1,(4),jobs);
} else {
if((state_val_48601 === (3))){
var inst_48598 = (state_48600[(2)]);
var state_48600__$1 = state_48600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48600__$1,inst_48598);
} else {
if((state_val_48601 === (4))){
var inst_48590 = (state_48600[(2)]);
var inst_48591 = async(inst_48590);
var state_48600__$1 = state_48600;
if(cljs.core.truth_(inst_48591)){
var statearr_48603_50650 = state_48600__$1;
(statearr_48603_50650[(1)] = (5));

} else {
var statearr_48604_50651 = state_48600__$1;
(statearr_48604_50651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48601 === (5))){
var state_48600__$1 = state_48600;
var statearr_48605_50652 = state_48600__$1;
(statearr_48605_50652[(2)] = null);

(statearr_48605_50652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48601 === (6))){
var state_48600__$1 = state_48600;
var statearr_48606_50653 = state_48600__$1;
(statearr_48606_50653[(2)] = null);

(statearr_48606_50653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48601 === (7))){
var inst_48596 = (state_48600[(2)]);
var state_48600__$1 = state_48600;
var statearr_48607_50654 = state_48600__$1;
(statearr_48607_50654[(2)] = inst_48596);

(statearr_48607_50654[(1)] = (3));


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
});})(__50611,c__47942__auto___50638,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async))
;
return ((function (__50611,switch__47757__auto__,c__47942__auto___50638,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0 = (function (){
var statearr_48608 = [null,null,null,null,null,null,null];
(statearr_48608[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__);

(statearr_48608[(1)] = (1));

return statearr_48608;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1 = (function (state_48600){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_48600);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e48609){var ex__47761__auto__ = e48609;
var statearr_48610_50660 = state_48600;
(statearr_48610_50660[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_48600[(4)]))){
var statearr_48611_50665 = state_48600;
(statearr_48611_50665[(1)] = cljs.core.first((state_48600[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50668 = state_48600;
state_48600 = G__50668;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__ = function(state_48600){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1.call(this,state_48600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__;
})()
;})(__50611,switch__47757__auto__,c__47942__auto___50638,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async))
})();
var state__47944__auto__ = (function (){var statearr_48612 = f__47943__auto__();
(statearr_48612[(6)] = c__47942__auto___50638);

return statearr_48612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
});})(__50611,c__47942__auto___50638,G__48562_50612,G__48562_50613__$1,n__4706__auto___50610,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48562_50613__$1)].join('')));

}

var G__50670 = (__50611 + (1));
__50611 = G__50670;
continue;
} else {
}
break;
}

var c__47942__auto___50671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_48634){
var state_val_48635 = (state_48634[(1)]);
if((state_val_48635 === (7))){
var inst_48630 = (state_48634[(2)]);
var state_48634__$1 = state_48634;
var statearr_48639_50681 = state_48634__$1;
(statearr_48639_50681[(2)] = inst_48630);

(statearr_48639_50681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48635 === (1))){
var state_48634__$1 = state_48634;
var statearr_48640_50682 = state_48634__$1;
(statearr_48640_50682[(2)] = null);

(statearr_48640_50682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48635 === (4))){
var inst_48615 = (state_48634[(7)]);
var inst_48615__$1 = (state_48634[(2)]);
var inst_48616 = (inst_48615__$1 == null);
var state_48634__$1 = (function (){var statearr_48641 = state_48634;
(statearr_48641[(7)] = inst_48615__$1);

return statearr_48641;
})();
if(cljs.core.truth_(inst_48616)){
var statearr_48642_50699 = state_48634__$1;
(statearr_48642_50699[(1)] = (5));

} else {
var statearr_48643_50701 = state_48634__$1;
(statearr_48643_50701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48635 === (6))){
var inst_48620 = (state_48634[(8)]);
var inst_48615 = (state_48634[(7)]);
var inst_48620__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_48621 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48622 = [inst_48615,inst_48620__$1];
var inst_48623 = (new cljs.core.PersistentVector(null,2,(5),inst_48621,inst_48622,null));
var state_48634__$1 = (function (){var statearr_48644 = state_48634;
(statearr_48644[(8)] = inst_48620__$1);

return statearr_48644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48634__$1,(8),jobs,inst_48623);
} else {
if((state_val_48635 === (3))){
var inst_48632 = (state_48634[(2)]);
var state_48634__$1 = state_48634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48634__$1,inst_48632);
} else {
if((state_val_48635 === (2))){
var state_48634__$1 = state_48634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48634__$1,(4),from);
} else {
if((state_val_48635 === (9))){
var inst_48627 = (state_48634[(2)]);
var state_48634__$1 = (function (){var statearr_48648 = state_48634;
(statearr_48648[(9)] = inst_48627);

return statearr_48648;
})();
var statearr_48649_50706 = state_48634__$1;
(statearr_48649_50706[(2)] = null);

(statearr_48649_50706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48635 === (5))){
var inst_48618 = cljs.core.async.close_BANG_(jobs);
var state_48634__$1 = state_48634;
var statearr_48650_50707 = state_48634__$1;
(statearr_48650_50707[(2)] = inst_48618);

(statearr_48650_50707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48635 === (8))){
var inst_48620 = (state_48634[(8)]);
var inst_48625 = (state_48634[(2)]);
var state_48634__$1 = (function (){var statearr_48651 = state_48634;
(statearr_48651[(10)] = inst_48625);

return statearr_48651;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48634__$1,(9),results,inst_48620);
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
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0 = (function (){
var statearr_48652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__);

(statearr_48652[(1)] = (1));

return statearr_48652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1 = (function (state_48634){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_48634);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e48653){var ex__47761__auto__ = e48653;
var statearr_48654_50708 = state_48634;
(statearr_48654_50708[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_48634[(4)]))){
var statearr_48655_50709 = state_48634;
(statearr_48655_50709[(1)] = cljs.core.first((state_48634[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50710 = state_48634;
state_48634 = G__50710;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__ = function(state_48634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1.call(this,state_48634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_48656 = f__47943__auto__();
(statearr_48656[(6)] = c__47942__auto___50671);

return statearr_48656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));


var c__47942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_48694){
var state_val_48695 = (state_48694[(1)]);
if((state_val_48695 === (7))){
var inst_48690 = (state_48694[(2)]);
var state_48694__$1 = state_48694;
var statearr_48696_50711 = state_48694__$1;
(statearr_48696_50711[(2)] = inst_48690);

(statearr_48696_50711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (20))){
var state_48694__$1 = state_48694;
var statearr_48697_50712 = state_48694__$1;
(statearr_48697_50712[(2)] = null);

(statearr_48697_50712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (1))){
var state_48694__$1 = state_48694;
var statearr_48698_50713 = state_48694__$1;
(statearr_48698_50713[(2)] = null);

(statearr_48698_50713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (4))){
var inst_48659 = (state_48694[(7)]);
var inst_48659__$1 = (state_48694[(2)]);
var inst_48660 = (inst_48659__$1 == null);
var state_48694__$1 = (function (){var statearr_48699 = state_48694;
(statearr_48699[(7)] = inst_48659__$1);

return statearr_48699;
})();
if(cljs.core.truth_(inst_48660)){
var statearr_48700_50714 = state_48694__$1;
(statearr_48700_50714[(1)] = (5));

} else {
var statearr_48701_50715 = state_48694__$1;
(statearr_48701_50715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (15))){
var inst_48672 = (state_48694[(8)]);
var state_48694__$1 = state_48694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48694__$1,(18),to,inst_48672);
} else {
if((state_val_48695 === (21))){
var inst_48685 = (state_48694[(2)]);
var state_48694__$1 = state_48694;
var statearr_48702_50716 = state_48694__$1;
(statearr_48702_50716[(2)] = inst_48685);

(statearr_48702_50716[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (13))){
var inst_48687 = (state_48694[(2)]);
var state_48694__$1 = (function (){var statearr_48703 = state_48694;
(statearr_48703[(9)] = inst_48687);

return statearr_48703;
})();
var statearr_48706_50717 = state_48694__$1;
(statearr_48706_50717[(2)] = null);

(statearr_48706_50717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (6))){
var inst_48659 = (state_48694[(7)]);
var state_48694__$1 = state_48694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48694__$1,(11),inst_48659);
} else {
if((state_val_48695 === (17))){
var inst_48680 = (state_48694[(2)]);
var state_48694__$1 = state_48694;
if(cljs.core.truth_(inst_48680)){
var statearr_48707_50718 = state_48694__$1;
(statearr_48707_50718[(1)] = (19));

} else {
var statearr_48708_50719 = state_48694__$1;
(statearr_48708_50719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (3))){
var inst_48692 = (state_48694[(2)]);
var state_48694__$1 = state_48694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48694__$1,inst_48692);
} else {
if((state_val_48695 === (12))){
var inst_48669 = (state_48694[(10)]);
var state_48694__$1 = state_48694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48694__$1,(14),inst_48669);
} else {
if((state_val_48695 === (2))){
var state_48694__$1 = state_48694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48694__$1,(4),results);
} else {
if((state_val_48695 === (19))){
var state_48694__$1 = state_48694;
var statearr_48710_50721 = state_48694__$1;
(statearr_48710_50721[(2)] = null);

(statearr_48710_50721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (11))){
var inst_48669 = (state_48694[(2)]);
var state_48694__$1 = (function (){var statearr_48711 = state_48694;
(statearr_48711[(10)] = inst_48669);

return statearr_48711;
})();
var statearr_48712_50722 = state_48694__$1;
(statearr_48712_50722[(2)] = null);

(statearr_48712_50722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (9))){
var state_48694__$1 = state_48694;
var statearr_48713_50723 = state_48694__$1;
(statearr_48713_50723[(2)] = null);

(statearr_48713_50723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (5))){
var state_48694__$1 = state_48694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48714_50724 = state_48694__$1;
(statearr_48714_50724[(1)] = (8));

} else {
var statearr_48715_50725 = state_48694__$1;
(statearr_48715_50725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (14))){
var inst_48674 = (state_48694[(11)]);
var inst_48672 = (state_48694[(8)]);
var inst_48672__$1 = (state_48694[(2)]);
var inst_48673 = (inst_48672__$1 == null);
var inst_48674__$1 = cljs.core.not(inst_48673);
var state_48694__$1 = (function (){var statearr_48716 = state_48694;
(statearr_48716[(11)] = inst_48674__$1);

(statearr_48716[(8)] = inst_48672__$1);

return statearr_48716;
})();
if(inst_48674__$1){
var statearr_48717_50726 = state_48694__$1;
(statearr_48717_50726[(1)] = (15));

} else {
var statearr_48718_50727 = state_48694__$1;
(statearr_48718_50727[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (16))){
var inst_48674 = (state_48694[(11)]);
var state_48694__$1 = state_48694;
var statearr_48719_50728 = state_48694__$1;
(statearr_48719_50728[(2)] = inst_48674);

(statearr_48719_50728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (10))){
var inst_48666 = (state_48694[(2)]);
var state_48694__$1 = state_48694;
var statearr_48720_50729 = state_48694__$1;
(statearr_48720_50729[(2)] = inst_48666);

(statearr_48720_50729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (18))){
var inst_48677 = (state_48694[(2)]);
var state_48694__$1 = state_48694;
var statearr_48721_50730 = state_48694__$1;
(statearr_48721_50730[(2)] = inst_48677);

(statearr_48721_50730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48695 === (8))){
var inst_48663 = cljs.core.async.close_BANG_(to);
var state_48694__$1 = state_48694;
var statearr_48722_50735 = state_48694__$1;
(statearr_48722_50735[(2)] = inst_48663);

(statearr_48722_50735[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0 = (function (){
var statearr_48730 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__);

(statearr_48730[(1)] = (1));

return statearr_48730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1 = (function (state_48694){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_48694);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e48731){var ex__47761__auto__ = e48731;
var statearr_48732_50744 = state_48694;
(statearr_48732_50744[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_48694[(4)]))){
var statearr_48733_50745 = state_48694;
(statearr_48733_50745[(1)] = cljs.core.first((state_48694[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50746 = state_48694;
state_48694 = G__50746;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__ = function(state_48694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1.call(this,state_48694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_48734 = f__47943__auto__();
(statearr_48734[(6)] = c__47942__auto__);

return statearr_48734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));

return c__47942__auto__;
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
var G__48736 = arguments.length;
switch (G__48736) {
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
var G__48738 = arguments.length;
switch (G__48738) {
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
var G__48740 = arguments.length;
switch (G__48740) {
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
var c__47942__auto___50751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_48766){
var state_val_48767 = (state_48766[(1)]);
if((state_val_48767 === (7))){
var inst_48762 = (state_48766[(2)]);
var state_48766__$1 = state_48766;
var statearr_48768_50752 = state_48766__$1;
(statearr_48768_50752[(2)] = inst_48762);

(statearr_48768_50752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (1))){
var state_48766__$1 = state_48766;
var statearr_48769_50753 = state_48766__$1;
(statearr_48769_50753[(2)] = null);

(statearr_48769_50753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (4))){
var inst_48743 = (state_48766[(7)]);
var inst_48743__$1 = (state_48766[(2)]);
var inst_48744 = (inst_48743__$1 == null);
var state_48766__$1 = (function (){var statearr_48770 = state_48766;
(statearr_48770[(7)] = inst_48743__$1);

return statearr_48770;
})();
if(cljs.core.truth_(inst_48744)){
var statearr_48771_50754 = state_48766__$1;
(statearr_48771_50754[(1)] = (5));

} else {
var statearr_48772_50755 = state_48766__$1;
(statearr_48772_50755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (13))){
var state_48766__$1 = state_48766;
var statearr_48773_50756 = state_48766__$1;
(statearr_48773_50756[(2)] = null);

(statearr_48773_50756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (6))){
var inst_48743 = (state_48766[(7)]);
var inst_48749 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48743) : p.call(null,inst_48743));
var state_48766__$1 = state_48766;
if(cljs.core.truth_(inst_48749)){
var statearr_48774_50757 = state_48766__$1;
(statearr_48774_50757[(1)] = (9));

} else {
var statearr_48775_50758 = state_48766__$1;
(statearr_48775_50758[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (3))){
var inst_48764 = (state_48766[(2)]);
var state_48766__$1 = state_48766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48766__$1,inst_48764);
} else {
if((state_val_48767 === (12))){
var state_48766__$1 = state_48766;
var statearr_48776_50759 = state_48766__$1;
(statearr_48776_50759[(2)] = null);

(statearr_48776_50759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (2))){
var state_48766__$1 = state_48766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48766__$1,(4),ch);
} else {
if((state_val_48767 === (11))){
var inst_48743 = (state_48766[(7)]);
var inst_48753 = (state_48766[(2)]);
var state_48766__$1 = state_48766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48766__$1,(8),inst_48753,inst_48743);
} else {
if((state_val_48767 === (9))){
var state_48766__$1 = state_48766;
var statearr_48777_50760 = state_48766__$1;
(statearr_48777_50760[(2)] = tc);

(statearr_48777_50760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (5))){
var inst_48746 = cljs.core.async.close_BANG_(tc);
var inst_48747 = cljs.core.async.close_BANG_(fc);
var state_48766__$1 = (function (){var statearr_48778 = state_48766;
(statearr_48778[(8)] = inst_48746);

return statearr_48778;
})();
var statearr_48779_50761 = state_48766__$1;
(statearr_48779_50761[(2)] = inst_48747);

(statearr_48779_50761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (14))){
var inst_48760 = (state_48766[(2)]);
var state_48766__$1 = state_48766;
var statearr_48780_50762 = state_48766__$1;
(statearr_48780_50762[(2)] = inst_48760);

(statearr_48780_50762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (10))){
var state_48766__$1 = state_48766;
var statearr_48781_50767 = state_48766__$1;
(statearr_48781_50767[(2)] = fc);

(statearr_48781_50767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (8))){
var inst_48755 = (state_48766[(2)]);
var state_48766__$1 = state_48766;
if(cljs.core.truth_(inst_48755)){
var statearr_48782_50768 = state_48766__$1;
(statearr_48782_50768[(1)] = (12));

} else {
var statearr_48783_50769 = state_48766__$1;
(statearr_48783_50769[(1)] = (13));

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
var cljs$core$async$state_machine__47758__auto__ = null;
var cljs$core$async$state_machine__47758__auto____0 = (function (){
var statearr_48784 = [null,null,null,null,null,null,null,null,null];
(statearr_48784[(0)] = cljs$core$async$state_machine__47758__auto__);

(statearr_48784[(1)] = (1));

return statearr_48784;
});
var cljs$core$async$state_machine__47758__auto____1 = (function (state_48766){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_48766);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e48785){var ex__47761__auto__ = e48785;
var statearr_48786_50770 = state_48766;
(statearr_48786_50770[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_48766[(4)]))){
var statearr_48787_50771 = state_48766;
(statearr_48787_50771[(1)] = cljs.core.first((state_48766[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50772 = state_48766;
state_48766 = G__50772;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$state_machine__47758__auto__ = function(state_48766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47758__auto____1.call(this,state_48766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47758__auto____0;
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47758__auto____1;
return cljs$core$async$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_48788 = f__47943__auto__();
(statearr_48788[(6)] = c__47942__auto___50751);

return statearr_48788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
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
var c__47942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_48810){
var state_val_48811 = (state_48810[(1)]);
if((state_val_48811 === (7))){
var inst_48806 = (state_48810[(2)]);
var state_48810__$1 = state_48810;
var statearr_48812_50773 = state_48810__$1;
(statearr_48812_50773[(2)] = inst_48806);

(statearr_48812_50773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (1))){
var inst_48789 = init;
var inst_48790 = inst_48789;
var state_48810__$1 = (function (){var statearr_48813 = state_48810;
(statearr_48813[(7)] = inst_48790);

return statearr_48813;
})();
var statearr_48814_50774 = state_48810__$1;
(statearr_48814_50774[(2)] = null);

(statearr_48814_50774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (4))){
var inst_48793 = (state_48810[(8)]);
var inst_48793__$1 = (state_48810[(2)]);
var inst_48794 = (inst_48793__$1 == null);
var state_48810__$1 = (function (){var statearr_48815 = state_48810;
(statearr_48815[(8)] = inst_48793__$1);

return statearr_48815;
})();
if(cljs.core.truth_(inst_48794)){
var statearr_48816_50775 = state_48810__$1;
(statearr_48816_50775[(1)] = (5));

} else {
var statearr_48817_50776 = state_48810__$1;
(statearr_48817_50776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (6))){
var inst_48790 = (state_48810[(7)]);
var inst_48793 = (state_48810[(8)]);
var inst_48797 = (state_48810[(9)]);
var inst_48797__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_48790,inst_48793) : f.call(null,inst_48790,inst_48793));
var inst_48798 = cljs.core.reduced_QMARK_(inst_48797__$1);
var state_48810__$1 = (function (){var statearr_48818 = state_48810;
(statearr_48818[(9)] = inst_48797__$1);

return statearr_48818;
})();
if(inst_48798){
var statearr_48819_50777 = state_48810__$1;
(statearr_48819_50777[(1)] = (8));

} else {
var statearr_48820_50778 = state_48810__$1;
(statearr_48820_50778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (3))){
var inst_48808 = (state_48810[(2)]);
var state_48810__$1 = state_48810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48810__$1,inst_48808);
} else {
if((state_val_48811 === (2))){
var state_48810__$1 = state_48810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48810__$1,(4),ch);
} else {
if((state_val_48811 === (9))){
var inst_48797 = (state_48810[(9)]);
var inst_48790 = inst_48797;
var state_48810__$1 = (function (){var statearr_48863 = state_48810;
(statearr_48863[(7)] = inst_48790);

return statearr_48863;
})();
var statearr_48864_50779 = state_48810__$1;
(statearr_48864_50779[(2)] = null);

(statearr_48864_50779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (5))){
var inst_48790 = (state_48810[(7)]);
var state_48810__$1 = state_48810;
var statearr_48865_50780 = state_48810__$1;
(statearr_48865_50780[(2)] = inst_48790);

(statearr_48865_50780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (10))){
var inst_48804 = (state_48810[(2)]);
var state_48810__$1 = state_48810;
var statearr_48866_50781 = state_48810__$1;
(statearr_48866_50781[(2)] = inst_48804);

(statearr_48866_50781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48811 === (8))){
var inst_48797 = (state_48810[(9)]);
var inst_48800 = cljs.core.deref(inst_48797);
var state_48810__$1 = state_48810;
var statearr_48867_50782 = state_48810__$1;
(statearr_48867_50782[(2)] = inst_48800);

(statearr_48867_50782[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__47758__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47758__auto____0 = (function (){
var statearr_48868 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48868[(0)] = cljs$core$async$reduce_$_state_machine__47758__auto__);

(statearr_48868[(1)] = (1));

return statearr_48868;
});
var cljs$core$async$reduce_$_state_machine__47758__auto____1 = (function (state_48810){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_48810);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e48869){var ex__47761__auto__ = e48869;
var statearr_48870_50783 = state_48810;
(statearr_48870_50783[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_48810[(4)]))){
var statearr_48871_50784 = state_48810;
(statearr_48871_50784[(1)] = cljs.core.first((state_48810[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50785 = state_48810;
state_48810 = G__50785;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47758__auto__ = function(state_48810){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47758__auto____1.call(this,state_48810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47758__auto____0;
cljs$core$async$reduce_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47758__auto____1;
return cljs$core$async$reduce_$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_48875 = f__47943__auto__();
(statearr_48875[(6)] = c__47942__auto__);

return statearr_48875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));

return c__47942__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_48881){
var state_val_48882 = (state_48881[(1)]);
if((state_val_48882 === (1))){
var inst_48876 = cljs.core.async.reduce(f__$1,init,ch);
var state_48881__$1 = state_48881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48881__$1,(2),inst_48876);
} else {
if((state_val_48882 === (2))){
var inst_48878 = (state_48881[(2)]);
var inst_48879 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48878) : f__$1.call(null,inst_48878));
var state_48881__$1 = state_48881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48881__$1,inst_48879);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47758__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47758__auto____0 = (function (){
var statearr_48883 = [null,null,null,null,null,null,null];
(statearr_48883[(0)] = cljs$core$async$transduce_$_state_machine__47758__auto__);

(statearr_48883[(1)] = (1));

return statearr_48883;
});
var cljs$core$async$transduce_$_state_machine__47758__auto____1 = (function (state_48881){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_48881);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e48884){var ex__47761__auto__ = e48884;
var statearr_48885_50810 = state_48881;
(statearr_48885_50810[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_48881[(4)]))){
var statearr_48886_50811 = state_48881;
(statearr_48886_50811[(1)] = cljs.core.first((state_48881[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50813 = state_48881;
state_48881 = G__50813;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47758__auto__ = function(state_48881){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47758__auto____1.call(this,state_48881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47758__auto____0;
cljs$core$async$transduce_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47758__auto____1;
return cljs$core$async$transduce_$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_48887 = f__47943__auto__();
(statearr_48887[(6)] = c__47942__auto__);

return statearr_48887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));

return c__47942__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__48889 = arguments.length;
switch (G__48889) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_48914){
var state_val_48915 = (state_48914[(1)]);
if((state_val_48915 === (7))){
var inst_48896 = (state_48914[(2)]);
var state_48914__$1 = state_48914;
var statearr_48916_50815 = state_48914__$1;
(statearr_48916_50815[(2)] = inst_48896);

(statearr_48916_50815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48915 === (1))){
var inst_48890 = cljs.core.seq(coll);
var inst_48891 = inst_48890;
var state_48914__$1 = (function (){var statearr_48917 = state_48914;
(statearr_48917[(7)] = inst_48891);

return statearr_48917;
})();
var statearr_48918_50816 = state_48914__$1;
(statearr_48918_50816[(2)] = null);

(statearr_48918_50816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48915 === (4))){
var inst_48891 = (state_48914[(7)]);
var inst_48894 = cljs.core.first(inst_48891);
var state_48914__$1 = state_48914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48914__$1,(7),ch,inst_48894);
} else {
if((state_val_48915 === (13))){
var inst_48908 = (state_48914[(2)]);
var state_48914__$1 = state_48914;
var statearr_48919_50817 = state_48914__$1;
(statearr_48919_50817[(2)] = inst_48908);

(statearr_48919_50817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48915 === (6))){
var inst_48899 = (state_48914[(2)]);
var state_48914__$1 = state_48914;
if(cljs.core.truth_(inst_48899)){
var statearr_48920_50818 = state_48914__$1;
(statearr_48920_50818[(1)] = (8));

} else {
var statearr_48921_50820 = state_48914__$1;
(statearr_48921_50820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48915 === (3))){
var inst_48912 = (state_48914[(2)]);
var state_48914__$1 = state_48914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48914__$1,inst_48912);
} else {
if((state_val_48915 === (12))){
var state_48914__$1 = state_48914;
var statearr_48922_50821 = state_48914__$1;
(statearr_48922_50821[(2)] = null);

(statearr_48922_50821[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48915 === (2))){
var inst_48891 = (state_48914[(7)]);
var state_48914__$1 = state_48914;
if(cljs.core.truth_(inst_48891)){
var statearr_48923_50822 = state_48914__$1;
(statearr_48923_50822[(1)] = (4));

} else {
var statearr_48924_50823 = state_48914__$1;
(statearr_48924_50823[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48915 === (11))){
var inst_48905 = cljs.core.async.close_BANG_(ch);
var state_48914__$1 = state_48914;
var statearr_48925_50824 = state_48914__$1;
(statearr_48925_50824[(2)] = inst_48905);

(statearr_48925_50824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48915 === (9))){
var state_48914__$1 = state_48914;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48926_50825 = state_48914__$1;
(statearr_48926_50825[(1)] = (11));

} else {
var statearr_48927_50826 = state_48914__$1;
(statearr_48927_50826[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48915 === (5))){
var inst_48891 = (state_48914[(7)]);
var state_48914__$1 = state_48914;
var statearr_48928_50827 = state_48914__$1;
(statearr_48928_50827[(2)] = inst_48891);

(statearr_48928_50827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48915 === (10))){
var inst_48910 = (state_48914[(2)]);
var state_48914__$1 = state_48914;
var statearr_48929_50828 = state_48914__$1;
(statearr_48929_50828[(2)] = inst_48910);

(statearr_48929_50828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48915 === (8))){
var inst_48891 = (state_48914[(7)]);
var inst_48901 = cljs.core.next(inst_48891);
var inst_48891__$1 = inst_48901;
var state_48914__$1 = (function (){var statearr_48930 = state_48914;
(statearr_48930[(7)] = inst_48891__$1);

return statearr_48930;
})();
var statearr_48931_50829 = state_48914__$1;
(statearr_48931_50829[(2)] = null);

(statearr_48931_50829[(1)] = (2));


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
var cljs$core$async$state_machine__47758__auto__ = null;
var cljs$core$async$state_machine__47758__auto____0 = (function (){
var statearr_48932 = [null,null,null,null,null,null,null,null];
(statearr_48932[(0)] = cljs$core$async$state_machine__47758__auto__);

(statearr_48932[(1)] = (1));

return statearr_48932;
});
var cljs$core$async$state_machine__47758__auto____1 = (function (state_48914){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_48914);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e48933){var ex__47761__auto__ = e48933;
var statearr_48934_50831 = state_48914;
(statearr_48934_50831[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_48914[(4)]))){
var statearr_48935_50832 = state_48914;
(statearr_48935_50832[(1)] = cljs.core.first((state_48914[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50833 = state_48914;
state_48914 = G__50833;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$state_machine__47758__auto__ = function(state_48914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47758__auto____1.call(this,state_48914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47758__auto____0;
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47758__auto____1;
return cljs$core$async$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_48936 = f__47943__auto__();
(statearr_48936[(6)] = c__47942__auto__);

return statearr_48936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));

return c__47942__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48938 = arguments.length;
switch (G__48938) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_50835 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_50835(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50838 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_50838(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50839 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_50839(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50840 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_50840(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48948 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48948 = (function (ch,cs,meta48949){
this.ch = ch;
this.cs = cs;
this.meta48949 = meta48949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48950,meta48949__$1){
var self__ = this;
var _48950__$1 = this;
return (new cljs.core.async.t_cljs$core$async48948(self__.ch,self__.cs,meta48949__$1));
}));

(cljs.core.async.t_cljs$core$async48948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48950){
var self__ = this;
var _48950__$1 = this;
return self__.meta48949;
}));

(cljs.core.async.t_cljs$core$async48948.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48948.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48948.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48948.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48948.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48948.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48949","meta48949",2087562090,null)], null);
}));

(cljs.core.async.t_cljs$core$async48948.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48948");

(cljs.core.async.t_cljs$core$async48948.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48948");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48948.
 */
cljs.core.async.__GT_t_cljs$core$async48948 = (function cljs$core$async$mult_$___GT_t_cljs$core$async48948(ch__$1,cs__$1,meta48949){
return (new cljs.core.async.t_cljs$core$async48948(ch__$1,cs__$1,meta48949));
});

}

return (new cljs.core.async.t_cljs$core$async48948(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__47942__auto___50843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_49106){
var state_val_49107 = (state_49106[(1)]);
if((state_val_49107 === (7))){
var inst_49102 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49108_50844 = state_49106__$1;
(statearr_49108_50844[(2)] = inst_49102);

(statearr_49108_50844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (20))){
var inst_49007 = (state_49106[(7)]);
var inst_49019 = cljs.core.first(inst_49007);
var inst_49020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49019,(0),null);
var inst_49021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49019,(1),null);
var state_49106__$1 = (function (){var statearr_49109 = state_49106;
(statearr_49109[(8)] = inst_49020);

return statearr_49109;
})();
if(cljs.core.truth_(inst_49021)){
var statearr_49110_50845 = state_49106__$1;
(statearr_49110_50845[(1)] = (22));

} else {
var statearr_49111_50846 = state_49106__$1;
(statearr_49111_50846[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (27))){
var inst_49056 = (state_49106[(9)]);
var inst_48976 = (state_49106[(10)]);
var inst_49049 = (state_49106[(11)]);
var inst_49051 = (state_49106[(12)]);
var inst_49056__$1 = cljs.core._nth(inst_49049,inst_49051);
var inst_49057 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49056__$1,inst_48976,done);
var state_49106__$1 = (function (){var statearr_49112 = state_49106;
(statearr_49112[(9)] = inst_49056__$1);

return statearr_49112;
})();
if(cljs.core.truth_(inst_49057)){
var statearr_49113_50847 = state_49106__$1;
(statearr_49113_50847[(1)] = (30));

} else {
var statearr_49114_50848 = state_49106__$1;
(statearr_49114_50848[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (1))){
var state_49106__$1 = state_49106;
var statearr_49115_50849 = state_49106__$1;
(statearr_49115_50849[(2)] = null);

(statearr_49115_50849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (24))){
var inst_49007 = (state_49106[(7)]);
var inst_49026 = (state_49106[(2)]);
var inst_49027 = cljs.core.next(inst_49007);
var inst_48985 = inst_49027;
var inst_48986 = null;
var inst_48987 = (0);
var inst_48988 = (0);
var state_49106__$1 = (function (){var statearr_49116 = state_49106;
(statearr_49116[(13)] = inst_49026);

(statearr_49116[(14)] = inst_48985);

(statearr_49116[(15)] = inst_48986);

(statearr_49116[(16)] = inst_48988);

(statearr_49116[(17)] = inst_48987);

return statearr_49116;
})();
var statearr_49117_50852 = state_49106__$1;
(statearr_49117_50852[(2)] = null);

(statearr_49117_50852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (39))){
var state_49106__$1 = state_49106;
var statearr_49121_50853 = state_49106__$1;
(statearr_49121_50853[(2)] = null);

(statearr_49121_50853[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (4))){
var inst_48976 = (state_49106[(10)]);
var inst_48976__$1 = (state_49106[(2)]);
var inst_48977 = (inst_48976__$1 == null);
var state_49106__$1 = (function (){var statearr_49122 = state_49106;
(statearr_49122[(10)] = inst_48976__$1);

return statearr_49122;
})();
if(cljs.core.truth_(inst_48977)){
var statearr_49123_50895 = state_49106__$1;
(statearr_49123_50895[(1)] = (5));

} else {
var statearr_49124_50896 = state_49106__$1;
(statearr_49124_50896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (15))){
var inst_48985 = (state_49106[(14)]);
var inst_48986 = (state_49106[(15)]);
var inst_48988 = (state_49106[(16)]);
var inst_48987 = (state_49106[(17)]);
var inst_49003 = (state_49106[(2)]);
var inst_49004 = (inst_48988 + (1));
var tmp49118 = inst_48985;
var tmp49119 = inst_48986;
var tmp49120 = inst_48987;
var inst_48985__$1 = tmp49118;
var inst_48986__$1 = tmp49119;
var inst_48987__$1 = tmp49120;
var inst_48988__$1 = inst_49004;
var state_49106__$1 = (function (){var statearr_49125 = state_49106;
(statearr_49125[(14)] = inst_48985__$1);

(statearr_49125[(15)] = inst_48986__$1);

(statearr_49125[(18)] = inst_49003);

(statearr_49125[(16)] = inst_48988__$1);

(statearr_49125[(17)] = inst_48987__$1);

return statearr_49125;
})();
var statearr_49126_50897 = state_49106__$1;
(statearr_49126_50897[(2)] = null);

(statearr_49126_50897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (21))){
var inst_49030 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49130_50898 = state_49106__$1;
(statearr_49130_50898[(2)] = inst_49030);

(statearr_49130_50898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (31))){
var inst_49056 = (state_49106[(9)]);
var inst_49060 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49056);
var state_49106__$1 = state_49106;
var statearr_49131_50899 = state_49106__$1;
(statearr_49131_50899[(2)] = inst_49060);

(statearr_49131_50899[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (32))){
var inst_49049 = (state_49106[(11)]);
var inst_49051 = (state_49106[(12)]);
var inst_49048 = (state_49106[(19)]);
var inst_49050 = (state_49106[(20)]);
var inst_49062 = (state_49106[(2)]);
var inst_49063 = (inst_49051 + (1));
var tmp49127 = inst_49049;
var tmp49128 = inst_49048;
var tmp49129 = inst_49050;
var inst_49048__$1 = tmp49128;
var inst_49049__$1 = tmp49127;
var inst_49050__$1 = tmp49129;
var inst_49051__$1 = inst_49063;
var state_49106__$1 = (function (){var statearr_49132 = state_49106;
(statearr_49132[(21)] = inst_49062);

(statearr_49132[(11)] = inst_49049__$1);

(statearr_49132[(12)] = inst_49051__$1);

(statearr_49132[(19)] = inst_49048__$1);

(statearr_49132[(20)] = inst_49050__$1);

return statearr_49132;
})();
var statearr_49133_50900 = state_49106__$1;
(statearr_49133_50900[(2)] = null);

(statearr_49133_50900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (40))){
var inst_49075 = (state_49106[(22)]);
var inst_49079 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49075);
var state_49106__$1 = state_49106;
var statearr_49134_50901 = state_49106__$1;
(statearr_49134_50901[(2)] = inst_49079);

(statearr_49134_50901[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (33))){
var inst_49066 = (state_49106[(23)]);
var inst_49068 = cljs.core.chunked_seq_QMARK_(inst_49066);
var state_49106__$1 = state_49106;
if(inst_49068){
var statearr_49135_50902 = state_49106__$1;
(statearr_49135_50902[(1)] = (36));

} else {
var statearr_49136_50904 = state_49106__$1;
(statearr_49136_50904[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (13))){
var inst_48997 = (state_49106[(24)]);
var inst_49000 = cljs.core.async.close_BANG_(inst_48997);
var state_49106__$1 = state_49106;
var statearr_49137_50905 = state_49106__$1;
(statearr_49137_50905[(2)] = inst_49000);

(statearr_49137_50905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (22))){
var inst_49020 = (state_49106[(8)]);
var inst_49023 = cljs.core.async.close_BANG_(inst_49020);
var state_49106__$1 = state_49106;
var statearr_49138_50907 = state_49106__$1;
(statearr_49138_50907[(2)] = inst_49023);

(statearr_49138_50907[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (36))){
var inst_49066 = (state_49106[(23)]);
var inst_49070 = cljs.core.chunk_first(inst_49066);
var inst_49071 = cljs.core.chunk_rest(inst_49066);
var inst_49072 = cljs.core.count(inst_49070);
var inst_49048 = inst_49071;
var inst_49049 = inst_49070;
var inst_49050 = inst_49072;
var inst_49051 = (0);
var state_49106__$1 = (function (){var statearr_49139 = state_49106;
(statearr_49139[(11)] = inst_49049);

(statearr_49139[(12)] = inst_49051);

(statearr_49139[(19)] = inst_49048);

(statearr_49139[(20)] = inst_49050);

return statearr_49139;
})();
var statearr_49140_50908 = state_49106__$1;
(statearr_49140_50908[(2)] = null);

(statearr_49140_50908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (41))){
var inst_49066 = (state_49106[(23)]);
var inst_49081 = (state_49106[(2)]);
var inst_49082 = cljs.core.next(inst_49066);
var inst_49048 = inst_49082;
var inst_49049 = null;
var inst_49050 = (0);
var inst_49051 = (0);
var state_49106__$1 = (function (){var statearr_49141 = state_49106;
(statearr_49141[(25)] = inst_49081);

(statearr_49141[(11)] = inst_49049);

(statearr_49141[(12)] = inst_49051);

(statearr_49141[(19)] = inst_49048);

(statearr_49141[(20)] = inst_49050);

return statearr_49141;
})();
var statearr_49142_50909 = state_49106__$1;
(statearr_49142_50909[(2)] = null);

(statearr_49142_50909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (43))){
var state_49106__$1 = state_49106;
var statearr_49143_50941 = state_49106__$1;
(statearr_49143_50941[(2)] = null);

(statearr_49143_50941[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (29))){
var inst_49090 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49144_50942 = state_49106__$1;
(statearr_49144_50942[(2)] = inst_49090);

(statearr_49144_50942[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (44))){
var inst_49099 = (state_49106[(2)]);
var state_49106__$1 = (function (){var statearr_49145 = state_49106;
(statearr_49145[(26)] = inst_49099);

return statearr_49145;
})();
var statearr_49146_50943 = state_49106__$1;
(statearr_49146_50943[(2)] = null);

(statearr_49146_50943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (6))){
var inst_49040 = (state_49106[(27)]);
var inst_49039 = cljs.core.deref(cs);
var inst_49040__$1 = cljs.core.keys(inst_49039);
var inst_49041 = cljs.core.count(inst_49040__$1);
var inst_49042 = cljs.core.reset_BANG_(dctr,inst_49041);
var inst_49047 = cljs.core.seq(inst_49040__$1);
var inst_49048 = inst_49047;
var inst_49049 = null;
var inst_49050 = (0);
var inst_49051 = (0);
var state_49106__$1 = (function (){var statearr_49147 = state_49106;
(statearr_49147[(27)] = inst_49040__$1);

(statearr_49147[(28)] = inst_49042);

(statearr_49147[(11)] = inst_49049);

(statearr_49147[(12)] = inst_49051);

(statearr_49147[(19)] = inst_49048);

(statearr_49147[(20)] = inst_49050);

return statearr_49147;
})();
var statearr_49148_50944 = state_49106__$1;
(statearr_49148_50944[(2)] = null);

(statearr_49148_50944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (28))){
var inst_49066 = (state_49106[(23)]);
var inst_49048 = (state_49106[(19)]);
var inst_49066__$1 = cljs.core.seq(inst_49048);
var state_49106__$1 = (function (){var statearr_49178 = state_49106;
(statearr_49178[(23)] = inst_49066__$1);

return statearr_49178;
})();
if(inst_49066__$1){
var statearr_49179_50945 = state_49106__$1;
(statearr_49179_50945[(1)] = (33));

} else {
var statearr_49180_50946 = state_49106__$1;
(statearr_49180_50946[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (25))){
var inst_49051 = (state_49106[(12)]);
var inst_49050 = (state_49106[(20)]);
var inst_49053 = (inst_49051 < inst_49050);
var inst_49054 = inst_49053;
var state_49106__$1 = state_49106;
if(cljs.core.truth_(inst_49054)){
var statearr_49181_50947 = state_49106__$1;
(statearr_49181_50947[(1)] = (27));

} else {
var statearr_49182_50948 = state_49106__$1;
(statearr_49182_50948[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (34))){
var state_49106__$1 = state_49106;
var statearr_49183_50951 = state_49106__$1;
(statearr_49183_50951[(2)] = null);

(statearr_49183_50951[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (17))){
var state_49106__$1 = state_49106;
var statearr_49184_50952 = state_49106__$1;
(statearr_49184_50952[(2)] = null);

(statearr_49184_50952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (3))){
var inst_49104 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49106__$1,inst_49104);
} else {
if((state_val_49107 === (12))){
var inst_49035 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49185_50955 = state_49106__$1;
(statearr_49185_50955[(2)] = inst_49035);

(statearr_49185_50955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (2))){
var state_49106__$1 = state_49106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49106__$1,(4),ch);
} else {
if((state_val_49107 === (23))){
var state_49106__$1 = state_49106;
var statearr_49186_50956 = state_49106__$1;
(statearr_49186_50956[(2)] = null);

(statearr_49186_50956[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (35))){
var inst_49088 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49187_50958 = state_49106__$1;
(statearr_49187_50958[(2)] = inst_49088);

(statearr_49187_50958[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (19))){
var inst_49007 = (state_49106[(7)]);
var inst_49011 = cljs.core.chunk_first(inst_49007);
var inst_49012 = cljs.core.chunk_rest(inst_49007);
var inst_49013 = cljs.core.count(inst_49011);
var inst_48985 = inst_49012;
var inst_48986 = inst_49011;
var inst_48987 = inst_49013;
var inst_48988 = (0);
var state_49106__$1 = (function (){var statearr_49188 = state_49106;
(statearr_49188[(14)] = inst_48985);

(statearr_49188[(15)] = inst_48986);

(statearr_49188[(16)] = inst_48988);

(statearr_49188[(17)] = inst_48987);

return statearr_49188;
})();
var statearr_49189_50964 = state_49106__$1;
(statearr_49189_50964[(2)] = null);

(statearr_49189_50964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (11))){
var inst_49007 = (state_49106[(7)]);
var inst_48985 = (state_49106[(14)]);
var inst_49007__$1 = cljs.core.seq(inst_48985);
var state_49106__$1 = (function (){var statearr_49190 = state_49106;
(statearr_49190[(7)] = inst_49007__$1);

return statearr_49190;
})();
if(inst_49007__$1){
var statearr_49191_50966 = state_49106__$1;
(statearr_49191_50966[(1)] = (16));

} else {
var statearr_49192_50967 = state_49106__$1;
(statearr_49192_50967[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (9))){
var inst_49037 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49193_50968 = state_49106__$1;
(statearr_49193_50968[(2)] = inst_49037);

(statearr_49193_50968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (5))){
var inst_48983 = cljs.core.deref(cs);
var inst_48984 = cljs.core.seq(inst_48983);
var inst_48985 = inst_48984;
var inst_48986 = null;
var inst_48987 = (0);
var inst_48988 = (0);
var state_49106__$1 = (function (){var statearr_49194 = state_49106;
(statearr_49194[(14)] = inst_48985);

(statearr_49194[(15)] = inst_48986);

(statearr_49194[(16)] = inst_48988);

(statearr_49194[(17)] = inst_48987);

return statearr_49194;
})();
var statearr_49195_50980 = state_49106__$1;
(statearr_49195_50980[(2)] = null);

(statearr_49195_50980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (14))){
var state_49106__$1 = state_49106;
var statearr_49196_50984 = state_49106__$1;
(statearr_49196_50984[(2)] = null);

(statearr_49196_50984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (45))){
var inst_49096 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49197_50987 = state_49106__$1;
(statearr_49197_50987[(2)] = inst_49096);

(statearr_49197_50987[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (26))){
var inst_49040 = (state_49106[(27)]);
var inst_49092 = (state_49106[(2)]);
var inst_49093 = cljs.core.seq(inst_49040);
var state_49106__$1 = (function (){var statearr_49198 = state_49106;
(statearr_49198[(29)] = inst_49092);

return statearr_49198;
})();
if(inst_49093){
var statearr_49199_50989 = state_49106__$1;
(statearr_49199_50989[(1)] = (42));

} else {
var statearr_49200_50991 = state_49106__$1;
(statearr_49200_50991[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (16))){
var inst_49007 = (state_49106[(7)]);
var inst_49009 = cljs.core.chunked_seq_QMARK_(inst_49007);
var state_49106__$1 = state_49106;
if(inst_49009){
var statearr_49201_50997 = state_49106__$1;
(statearr_49201_50997[(1)] = (19));

} else {
var statearr_49202_51000 = state_49106__$1;
(statearr_49202_51000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (38))){
var inst_49085 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49203_51001 = state_49106__$1;
(statearr_49203_51001[(2)] = inst_49085);

(statearr_49203_51001[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (30))){
var state_49106__$1 = state_49106;
var statearr_49204_51004 = state_49106__$1;
(statearr_49204_51004[(2)] = null);

(statearr_49204_51004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (10))){
var inst_48986 = (state_49106[(15)]);
var inst_48988 = (state_49106[(16)]);
var inst_48996 = cljs.core._nth(inst_48986,inst_48988);
var inst_48997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48996,(0),null);
var inst_48998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48996,(1),null);
var state_49106__$1 = (function (){var statearr_49205 = state_49106;
(statearr_49205[(24)] = inst_48997);

return statearr_49205;
})();
if(cljs.core.truth_(inst_48998)){
var statearr_49206_51008 = state_49106__$1;
(statearr_49206_51008[(1)] = (13));

} else {
var statearr_49207_51009 = state_49106__$1;
(statearr_49207_51009[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (18))){
var inst_49033 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49208_51012 = state_49106__$1;
(statearr_49208_51012[(2)] = inst_49033);

(statearr_49208_51012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (42))){
var state_49106__$1 = state_49106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49106__$1,(45),dchan);
} else {
if((state_val_49107 === (37))){
var inst_49066 = (state_49106[(23)]);
var inst_48976 = (state_49106[(10)]);
var inst_49075 = (state_49106[(22)]);
var inst_49075__$1 = cljs.core.first(inst_49066);
var inst_49076 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49075__$1,inst_48976,done);
var state_49106__$1 = (function (){var statearr_49209 = state_49106;
(statearr_49209[(22)] = inst_49075__$1);

return statearr_49209;
})();
if(cljs.core.truth_(inst_49076)){
var statearr_49210_51015 = state_49106__$1;
(statearr_49210_51015[(1)] = (39));

} else {
var statearr_49211_51017 = state_49106__$1;
(statearr_49211_51017[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (8))){
var inst_48988 = (state_49106[(16)]);
var inst_48987 = (state_49106[(17)]);
var inst_48990 = (inst_48988 < inst_48987);
var inst_48991 = inst_48990;
var state_49106__$1 = state_49106;
if(cljs.core.truth_(inst_48991)){
var statearr_49215_51019 = state_49106__$1;
(statearr_49215_51019[(1)] = (10));

} else {
var statearr_49216_51020 = state_49106__$1;
(statearr_49216_51020[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__47758__auto__ = null;
var cljs$core$async$mult_$_state_machine__47758__auto____0 = (function (){
var statearr_49217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49217[(0)] = cljs$core$async$mult_$_state_machine__47758__auto__);

(statearr_49217[(1)] = (1));

return statearr_49217;
});
var cljs$core$async$mult_$_state_machine__47758__auto____1 = (function (state_49106){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_49106);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e49218){var ex__47761__auto__ = e49218;
var statearr_49219_51021 = state_49106;
(statearr_49219_51021[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_49106[(4)]))){
var statearr_49220_51022 = state_49106;
(statearr_49220_51022[(1)] = cljs.core.first((state_49106[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51025 = state_49106;
state_49106 = G__51025;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47758__auto__ = function(state_49106){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47758__auto____1.call(this,state_49106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47758__auto____0;
cljs$core$async$mult_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47758__auto____1;
return cljs$core$async$mult_$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_49221 = f__47943__auto__();
(statearr_49221[(6)] = c__47942__auto___50843);

return statearr_49221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
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
var G__49223 = arguments.length;
switch (G__49223) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_51027 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_51027(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_51028 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_51028(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_51029 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_51029(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_51030 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_51030(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_51031 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_51031(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51032 = arguments.length;
var i__4830__auto___51033 = (0);
while(true){
if((i__4830__auto___51033 < len__4829__auto___51032)){
args__4835__auto__.push((arguments[i__4830__auto___51033]));

var G__51034 = (i__4830__auto___51033 + (1));
i__4830__auto___51033 = G__51034;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49247){
var map__49249 = p__49247;
var map__49249__$1 = cljs.core.__destructure_map(map__49249);
var opts = map__49249__$1;
var statearr_49250_51035 = state;
(statearr_49250_51035[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_49251_51036 = state;
(statearr_49251_51036[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_49252_51037 = state;
(statearr_49252_51037[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49242){
var G__49243 = cljs.core.first(seq49242);
var seq49242__$1 = cljs.core.next(seq49242);
var G__49244 = cljs.core.first(seq49242__$1);
var seq49242__$2 = cljs.core.next(seq49242__$1);
var G__49245 = cljs.core.first(seq49242__$2);
var seq49242__$3 = cljs.core.next(seq49242__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49243,G__49244,G__49245,seq49242__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49265 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49265 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49266){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49266 = meta49266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49267,meta49266__$1){
var self__ = this;
var _49267__$1 = this;
return (new cljs.core.async.t_cljs$core$async49265(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49266__$1));
}));

(cljs.core.async.t_cljs$core$async49265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49267){
var self__ = this;
var _49267__$1 = this;
return self__.meta49266;
}));

(cljs.core.async.t_cljs$core$async49265.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async49265.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49265.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49265.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49265.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49265.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49265.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49266","meta49266",301237653,null)], null);
}));

(cljs.core.async.t_cljs$core$async49265.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49265");

(cljs.core.async.t_cljs$core$async49265.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49265");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49265.
 */
cljs.core.async.__GT_t_cljs$core$async49265 = (function cljs$core$async$mix_$___GT_t_cljs$core$async49265(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49266){
return (new cljs.core.async.t_cljs$core$async49265(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49266));
});

}

return (new cljs.core.async.t_cljs$core$async49265(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47942__auto___51054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_49344){
var state_val_49345 = (state_49344[(1)]);
if((state_val_49345 === (7))){
var inst_49304 = (state_49344[(2)]);
var state_49344__$1 = state_49344;
if(cljs.core.truth_(inst_49304)){
var statearr_49346_51055 = state_49344__$1;
(statearr_49346_51055[(1)] = (8));

} else {
var statearr_49347_51056 = state_49344__$1;
(statearr_49347_51056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (20))){
var inst_49297 = (state_49344[(7)]);
var state_49344__$1 = state_49344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49344__$1,(23),out,inst_49297);
} else {
if((state_val_49345 === (1))){
var inst_49280 = calc_state();
var inst_49281 = cljs.core.__destructure_map(inst_49280);
var inst_49282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49281,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49281,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49281,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49285 = inst_49280;
var state_49344__$1 = (function (){var statearr_49348 = state_49344;
(statearr_49348[(8)] = inst_49285);

(statearr_49348[(9)] = inst_49284);

(statearr_49348[(10)] = inst_49282);

(statearr_49348[(11)] = inst_49283);

return statearr_49348;
})();
var statearr_49349_51061 = state_49344__$1;
(statearr_49349_51061[(2)] = null);

(statearr_49349_51061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (24))){
var inst_49288 = (state_49344[(12)]);
var inst_49285 = inst_49288;
var state_49344__$1 = (function (){var statearr_49359 = state_49344;
(statearr_49359[(8)] = inst_49285);

return statearr_49359;
})();
var statearr_49360_51065 = state_49344__$1;
(statearr_49360_51065[(2)] = null);

(statearr_49360_51065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (4))){
var inst_49297 = (state_49344[(7)]);
var inst_49299 = (state_49344[(13)]);
var inst_49296 = (state_49344[(2)]);
var inst_49297__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49296,(0),null);
var inst_49298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49296,(1),null);
var inst_49299__$1 = (inst_49297__$1 == null);
var state_49344__$1 = (function (){var statearr_49361 = state_49344;
(statearr_49361[(7)] = inst_49297__$1);

(statearr_49361[(14)] = inst_49298);

(statearr_49361[(13)] = inst_49299__$1);

return statearr_49361;
})();
if(cljs.core.truth_(inst_49299__$1)){
var statearr_49362_51066 = state_49344__$1;
(statearr_49362_51066[(1)] = (5));

} else {
var statearr_49363_51067 = state_49344__$1;
(statearr_49363_51067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (15))){
var inst_49318 = (state_49344[(15)]);
var inst_49289 = (state_49344[(16)]);
var inst_49318__$1 = cljs.core.empty_QMARK_(inst_49289);
var state_49344__$1 = (function (){var statearr_49364 = state_49344;
(statearr_49364[(15)] = inst_49318__$1);

return statearr_49364;
})();
if(inst_49318__$1){
var statearr_49365_51068 = state_49344__$1;
(statearr_49365_51068[(1)] = (17));

} else {
var statearr_49366_51069 = state_49344__$1;
(statearr_49366_51069[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (21))){
var inst_49288 = (state_49344[(12)]);
var inst_49285 = inst_49288;
var state_49344__$1 = (function (){var statearr_49367 = state_49344;
(statearr_49367[(8)] = inst_49285);

return statearr_49367;
})();
var statearr_49368_51070 = state_49344__$1;
(statearr_49368_51070[(2)] = null);

(statearr_49368_51070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (13))){
var inst_49311 = (state_49344[(2)]);
var inst_49312 = calc_state();
var inst_49285 = inst_49312;
var state_49344__$1 = (function (){var statearr_49369 = state_49344;
(statearr_49369[(17)] = inst_49311);

(statearr_49369[(8)] = inst_49285);

return statearr_49369;
})();
var statearr_49370_51074 = state_49344__$1;
(statearr_49370_51074[(2)] = null);

(statearr_49370_51074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (22))){
var inst_49338 = (state_49344[(2)]);
var state_49344__$1 = state_49344;
var statearr_49371_51075 = state_49344__$1;
(statearr_49371_51075[(2)] = inst_49338);

(statearr_49371_51075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (6))){
var inst_49298 = (state_49344[(14)]);
var inst_49302 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49298,change);
var state_49344__$1 = state_49344;
var statearr_49372_51076 = state_49344__$1;
(statearr_49372_51076[(2)] = inst_49302);

(statearr_49372_51076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (25))){
var state_49344__$1 = state_49344;
var statearr_49373_51077 = state_49344__$1;
(statearr_49373_51077[(2)] = null);

(statearr_49373_51077[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (17))){
var inst_49298 = (state_49344[(14)]);
var inst_49290 = (state_49344[(18)]);
var inst_49320 = (inst_49290.cljs$core$IFn$_invoke$arity$1 ? inst_49290.cljs$core$IFn$_invoke$arity$1(inst_49298) : inst_49290.call(null,inst_49298));
var inst_49321 = cljs.core.not(inst_49320);
var state_49344__$1 = state_49344;
var statearr_49374_51078 = state_49344__$1;
(statearr_49374_51078[(2)] = inst_49321);

(statearr_49374_51078[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (3))){
var inst_49342 = (state_49344[(2)]);
var state_49344__$1 = state_49344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49344__$1,inst_49342);
} else {
if((state_val_49345 === (12))){
var state_49344__$1 = state_49344;
var statearr_49375_51079 = state_49344__$1;
(statearr_49375_51079[(2)] = null);

(statearr_49375_51079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (2))){
var inst_49285 = (state_49344[(8)]);
var inst_49288 = (state_49344[(12)]);
var inst_49288__$1 = cljs.core.__destructure_map(inst_49285);
var inst_49289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49288__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49288__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49288__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49344__$1 = (function (){var statearr_49380 = state_49344;
(statearr_49380[(16)] = inst_49289);

(statearr_49380[(12)] = inst_49288__$1);

(statearr_49380[(18)] = inst_49290);

return statearr_49380;
})();
return cljs.core.async.ioc_alts_BANG_(state_49344__$1,(4),inst_49291);
} else {
if((state_val_49345 === (23))){
var inst_49329 = (state_49344[(2)]);
var state_49344__$1 = state_49344;
if(cljs.core.truth_(inst_49329)){
var statearr_49382_51083 = state_49344__$1;
(statearr_49382_51083[(1)] = (24));

} else {
var statearr_49383_51084 = state_49344__$1;
(statearr_49383_51084[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (19))){
var inst_49324 = (state_49344[(2)]);
var state_49344__$1 = state_49344;
var statearr_49384_51085 = state_49344__$1;
(statearr_49384_51085[(2)] = inst_49324);

(statearr_49384_51085[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (11))){
var inst_49298 = (state_49344[(14)]);
var inst_49308 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_49298);
var state_49344__$1 = state_49344;
var statearr_49385_51086 = state_49344__$1;
(statearr_49385_51086[(2)] = inst_49308);

(statearr_49385_51086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (9))){
var inst_49298 = (state_49344[(14)]);
var inst_49315 = (state_49344[(19)]);
var inst_49289 = (state_49344[(16)]);
var inst_49315__$1 = (inst_49289.cljs$core$IFn$_invoke$arity$1 ? inst_49289.cljs$core$IFn$_invoke$arity$1(inst_49298) : inst_49289.call(null,inst_49298));
var state_49344__$1 = (function (){var statearr_49386 = state_49344;
(statearr_49386[(19)] = inst_49315__$1);

return statearr_49386;
})();
if(cljs.core.truth_(inst_49315__$1)){
var statearr_49387_51090 = state_49344__$1;
(statearr_49387_51090[(1)] = (14));

} else {
var statearr_49388_51091 = state_49344__$1;
(statearr_49388_51091[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (5))){
var inst_49299 = (state_49344[(13)]);
var state_49344__$1 = state_49344;
var statearr_49389_51092 = state_49344__$1;
(statearr_49389_51092[(2)] = inst_49299);

(statearr_49389_51092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (14))){
var inst_49315 = (state_49344[(19)]);
var state_49344__$1 = state_49344;
var statearr_49390_51093 = state_49344__$1;
(statearr_49390_51093[(2)] = inst_49315);

(statearr_49390_51093[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (26))){
var inst_49334 = (state_49344[(2)]);
var state_49344__$1 = state_49344;
var statearr_49391_51094 = state_49344__$1;
(statearr_49391_51094[(2)] = inst_49334);

(statearr_49391_51094[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (16))){
var inst_49326 = (state_49344[(2)]);
var state_49344__$1 = state_49344;
if(cljs.core.truth_(inst_49326)){
var statearr_49393_51095 = state_49344__$1;
(statearr_49393_51095[(1)] = (20));

} else {
var statearr_49394_51096 = state_49344__$1;
(statearr_49394_51096[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (10))){
var inst_49340 = (state_49344[(2)]);
var state_49344__$1 = state_49344;
var statearr_49395_51097 = state_49344__$1;
(statearr_49395_51097[(2)] = inst_49340);

(statearr_49395_51097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (18))){
var inst_49318 = (state_49344[(15)]);
var state_49344__$1 = state_49344;
var statearr_49396_51098 = state_49344__$1;
(statearr_49396_51098[(2)] = inst_49318);

(statearr_49396_51098[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49345 === (8))){
var inst_49297 = (state_49344[(7)]);
var inst_49306 = (inst_49297 == null);
var state_49344__$1 = state_49344;
if(cljs.core.truth_(inst_49306)){
var statearr_49397_51099 = state_49344__$1;
(statearr_49397_51099[(1)] = (11));

} else {
var statearr_49398_51100 = state_49344__$1;
(statearr_49398_51100[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__47758__auto__ = null;
var cljs$core$async$mix_$_state_machine__47758__auto____0 = (function (){
var statearr_49399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49399[(0)] = cljs$core$async$mix_$_state_machine__47758__auto__);

(statearr_49399[(1)] = (1));

return statearr_49399;
});
var cljs$core$async$mix_$_state_machine__47758__auto____1 = (function (state_49344){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_49344);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e49400){var ex__47761__auto__ = e49400;
var statearr_49401_51101 = state_49344;
(statearr_49401_51101[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_49344[(4)]))){
var statearr_49402_51102 = state_49344;
(statearr_49402_51102[(1)] = cljs.core.first((state_49344[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51103 = state_49344;
state_49344 = G__51103;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47758__auto__ = function(state_49344){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47758__auto____1.call(this,state_49344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47758__auto____0;
cljs$core$async$mix_$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47758__auto____1;
return cljs$core$async$mix_$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_49403 = f__47943__auto__();
(statearr_49403[(6)] = c__47942__auto___51054);

return statearr_49403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_51104 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_51104(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_51105 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_51105(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_51131 = (function() {
var G__51132 = null;
var G__51132__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__51132__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__51132 = function(p,v){
switch(arguments.length){
case 1:
return G__51132__1.call(this,p);
case 2:
return G__51132__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51132.cljs$core$IFn$_invoke$arity$1 = G__51132__1;
G__51132.cljs$core$IFn$_invoke$arity$2 = G__51132__2;
return G__51132;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49426 = arguments.length;
switch (G__49426) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51131(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_51131(p,v);
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
var G__49429 = arguments.length;
switch (G__49429) {
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
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__49427_SHARP_){
if(cljs.core.truth_((p1__49427_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49427_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49427_SHARP_.call(null,topic)))){
return p1__49427_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49427_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49430 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49431){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49431 = meta49431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49432,meta49431__$1){
var self__ = this;
var _49432__$1 = this;
return (new cljs.core.async.t_cljs$core$async49430(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49431__$1));
}));

(cljs.core.async.t_cljs$core$async49430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49432){
var self__ = this;
var _49432__$1 = this;
return self__.meta49431;
}));

(cljs.core.async.t_cljs$core$async49430.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49430.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49430.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49430.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async49430.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49430.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49431","meta49431",369843042,null)], null);
}));

(cljs.core.async.t_cljs$core$async49430.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49430");

(cljs.core.async.t_cljs$core$async49430.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49430");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49430.
 */
cljs.core.async.__GT_t_cljs$core$async49430 = (function cljs$core$async$__GT_t_cljs$core$async49430(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49431){
return (new cljs.core.async.t_cljs$core$async49430(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49431));
});

}

return (new cljs.core.async.t_cljs$core$async49430(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47942__auto___51188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_49513){
var state_val_49514 = (state_49513[(1)]);
if((state_val_49514 === (7))){
var inst_49509 = (state_49513[(2)]);
var state_49513__$1 = state_49513;
var statearr_49515_51189 = state_49513__$1;
(statearr_49515_51189[(2)] = inst_49509);

(statearr_49515_51189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (20))){
var state_49513__$1 = state_49513;
var statearr_49516_51190 = state_49513__$1;
(statearr_49516_51190[(2)] = null);

(statearr_49516_51190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (1))){
var state_49513__$1 = state_49513;
var statearr_49517_51191 = state_49513__$1;
(statearr_49517_51191[(2)] = null);

(statearr_49517_51191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (24))){
var inst_49492 = (state_49513[(7)]);
var inst_49501 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49492);
var state_49513__$1 = state_49513;
var statearr_49518_51192 = state_49513__$1;
(statearr_49518_51192[(2)] = inst_49501);

(statearr_49518_51192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (4))){
var inst_49444 = (state_49513[(8)]);
var inst_49444__$1 = (state_49513[(2)]);
var inst_49445 = (inst_49444__$1 == null);
var state_49513__$1 = (function (){var statearr_49523 = state_49513;
(statearr_49523[(8)] = inst_49444__$1);

return statearr_49523;
})();
if(cljs.core.truth_(inst_49445)){
var statearr_49524_51193 = state_49513__$1;
(statearr_49524_51193[(1)] = (5));

} else {
var statearr_49525_51194 = state_49513__$1;
(statearr_49525_51194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (15))){
var inst_49486 = (state_49513[(2)]);
var state_49513__$1 = state_49513;
var statearr_49526_51195 = state_49513__$1;
(statearr_49526_51195[(2)] = inst_49486);

(statearr_49526_51195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (21))){
var inst_49506 = (state_49513[(2)]);
var state_49513__$1 = (function (){var statearr_49527 = state_49513;
(statearr_49527[(9)] = inst_49506);

return statearr_49527;
})();
var statearr_49528_51196 = state_49513__$1;
(statearr_49528_51196[(2)] = null);

(statearr_49528_51196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (13))){
var inst_49468 = (state_49513[(10)]);
var inst_49470 = cljs.core.chunked_seq_QMARK_(inst_49468);
var state_49513__$1 = state_49513;
if(inst_49470){
var statearr_49529_51197 = state_49513__$1;
(statearr_49529_51197[(1)] = (16));

} else {
var statearr_49530_51198 = state_49513__$1;
(statearr_49530_51198[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (22))){
var inst_49498 = (state_49513[(2)]);
var state_49513__$1 = state_49513;
if(cljs.core.truth_(inst_49498)){
var statearr_49531_51199 = state_49513__$1;
(statearr_49531_51199[(1)] = (23));

} else {
var statearr_49532_51216 = state_49513__$1;
(statearr_49532_51216[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (6))){
var inst_49494 = (state_49513[(11)]);
var inst_49444 = (state_49513[(8)]);
var inst_49492 = (state_49513[(7)]);
var inst_49492__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49444) : topic_fn.call(null,inst_49444));
var inst_49493 = cljs.core.deref(mults);
var inst_49494__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49493,inst_49492__$1);
var state_49513__$1 = (function (){var statearr_49533 = state_49513;
(statearr_49533[(11)] = inst_49494__$1);

(statearr_49533[(7)] = inst_49492__$1);

return statearr_49533;
})();
if(cljs.core.truth_(inst_49494__$1)){
var statearr_49534_51218 = state_49513__$1;
(statearr_49534_51218[(1)] = (19));

} else {
var statearr_49535_51219 = state_49513__$1;
(statearr_49535_51219[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (25))){
var inst_49503 = (state_49513[(2)]);
var state_49513__$1 = state_49513;
var statearr_49536_51220 = state_49513__$1;
(statearr_49536_51220[(2)] = inst_49503);

(statearr_49536_51220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (17))){
var inst_49468 = (state_49513[(10)]);
var inst_49477 = cljs.core.first(inst_49468);
var inst_49478 = cljs.core.async.muxch_STAR_(inst_49477);
var inst_49479 = cljs.core.async.close_BANG_(inst_49478);
var inst_49480 = cljs.core.next(inst_49468);
var inst_49454 = inst_49480;
var inst_49455 = null;
var inst_49456 = (0);
var inst_49457 = (0);
var state_49513__$1 = (function (){var statearr_49537 = state_49513;
(statearr_49537[(12)] = inst_49479);

(statearr_49537[(13)] = inst_49454);

(statearr_49537[(14)] = inst_49456);

(statearr_49537[(15)] = inst_49457);

(statearr_49537[(16)] = inst_49455);

return statearr_49537;
})();
var statearr_49538_51221 = state_49513__$1;
(statearr_49538_51221[(2)] = null);

(statearr_49538_51221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (3))){
var inst_49511 = (state_49513[(2)]);
var state_49513__$1 = state_49513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49513__$1,inst_49511);
} else {
if((state_val_49514 === (12))){
var inst_49488 = (state_49513[(2)]);
var state_49513__$1 = state_49513;
var statearr_49539_51222 = state_49513__$1;
(statearr_49539_51222[(2)] = inst_49488);

(statearr_49539_51222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (2))){
var state_49513__$1 = state_49513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49513__$1,(4),ch);
} else {
if((state_val_49514 === (23))){
var state_49513__$1 = state_49513;
var statearr_49540_51223 = state_49513__$1;
(statearr_49540_51223[(2)] = null);

(statearr_49540_51223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (19))){
var inst_49494 = (state_49513[(11)]);
var inst_49444 = (state_49513[(8)]);
var inst_49496 = cljs.core.async.muxch_STAR_(inst_49494);
var state_49513__$1 = state_49513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49513__$1,(22),inst_49496,inst_49444);
} else {
if((state_val_49514 === (11))){
var inst_49468 = (state_49513[(10)]);
var inst_49454 = (state_49513[(13)]);
var inst_49468__$1 = cljs.core.seq(inst_49454);
var state_49513__$1 = (function (){var statearr_49541 = state_49513;
(statearr_49541[(10)] = inst_49468__$1);

return statearr_49541;
})();
if(inst_49468__$1){
var statearr_49542_51235 = state_49513__$1;
(statearr_49542_51235[(1)] = (13));

} else {
var statearr_49543_51236 = state_49513__$1;
(statearr_49543_51236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (9))){
var inst_49490 = (state_49513[(2)]);
var state_49513__$1 = state_49513;
var statearr_49544_51237 = state_49513__$1;
(statearr_49544_51237[(2)] = inst_49490);

(statearr_49544_51237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (5))){
var inst_49451 = cljs.core.deref(mults);
var inst_49452 = cljs.core.vals(inst_49451);
var inst_49453 = cljs.core.seq(inst_49452);
var inst_49454 = inst_49453;
var inst_49455 = null;
var inst_49456 = (0);
var inst_49457 = (0);
var state_49513__$1 = (function (){var statearr_49545 = state_49513;
(statearr_49545[(13)] = inst_49454);

(statearr_49545[(14)] = inst_49456);

(statearr_49545[(15)] = inst_49457);

(statearr_49545[(16)] = inst_49455);

return statearr_49545;
})();
var statearr_49546_51238 = state_49513__$1;
(statearr_49546_51238[(2)] = null);

(statearr_49546_51238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (14))){
var state_49513__$1 = state_49513;
var statearr_49550_51239 = state_49513__$1;
(statearr_49550_51239[(2)] = null);

(statearr_49550_51239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (16))){
var inst_49468 = (state_49513[(10)]);
var inst_49472 = cljs.core.chunk_first(inst_49468);
var inst_49473 = cljs.core.chunk_rest(inst_49468);
var inst_49474 = cljs.core.count(inst_49472);
var inst_49454 = inst_49473;
var inst_49455 = inst_49472;
var inst_49456 = inst_49474;
var inst_49457 = (0);
var state_49513__$1 = (function (){var statearr_49551 = state_49513;
(statearr_49551[(13)] = inst_49454);

(statearr_49551[(14)] = inst_49456);

(statearr_49551[(15)] = inst_49457);

(statearr_49551[(16)] = inst_49455);

return statearr_49551;
})();
var statearr_49552_51240 = state_49513__$1;
(statearr_49552_51240[(2)] = null);

(statearr_49552_51240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (10))){
var inst_49454 = (state_49513[(13)]);
var inst_49456 = (state_49513[(14)]);
var inst_49457 = (state_49513[(15)]);
var inst_49455 = (state_49513[(16)]);
var inst_49462 = cljs.core._nth(inst_49455,inst_49457);
var inst_49463 = cljs.core.async.muxch_STAR_(inst_49462);
var inst_49464 = cljs.core.async.close_BANG_(inst_49463);
var inst_49465 = (inst_49457 + (1));
var tmp49547 = inst_49454;
var tmp49548 = inst_49456;
var tmp49549 = inst_49455;
var inst_49454__$1 = tmp49547;
var inst_49455__$1 = tmp49549;
var inst_49456__$1 = tmp49548;
var inst_49457__$1 = inst_49465;
var state_49513__$1 = (function (){var statearr_49553 = state_49513;
(statearr_49553[(13)] = inst_49454__$1);

(statearr_49553[(14)] = inst_49456__$1);

(statearr_49553[(17)] = inst_49464);

(statearr_49553[(15)] = inst_49457__$1);

(statearr_49553[(16)] = inst_49455__$1);

return statearr_49553;
})();
var statearr_49554_51241 = state_49513__$1;
(statearr_49554_51241[(2)] = null);

(statearr_49554_51241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (18))){
var inst_49483 = (state_49513[(2)]);
var state_49513__$1 = state_49513;
var statearr_49555_51242 = state_49513__$1;
(statearr_49555_51242[(2)] = inst_49483);

(statearr_49555_51242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49514 === (8))){
var inst_49456 = (state_49513[(14)]);
var inst_49457 = (state_49513[(15)]);
var inst_49459 = (inst_49457 < inst_49456);
var inst_49460 = inst_49459;
var state_49513__$1 = state_49513;
if(cljs.core.truth_(inst_49460)){
var statearr_49556_51243 = state_49513__$1;
(statearr_49556_51243[(1)] = (10));

} else {
var statearr_49557_51244 = state_49513__$1;
(statearr_49557_51244[(1)] = (11));

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
var cljs$core$async$state_machine__47758__auto__ = null;
var cljs$core$async$state_machine__47758__auto____0 = (function (){
var statearr_49558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49558[(0)] = cljs$core$async$state_machine__47758__auto__);

(statearr_49558[(1)] = (1));

return statearr_49558;
});
var cljs$core$async$state_machine__47758__auto____1 = (function (state_49513){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_49513);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e49559){var ex__47761__auto__ = e49559;
var statearr_49560_51245 = state_49513;
(statearr_49560_51245[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_49513[(4)]))){
var statearr_49561_51246 = state_49513;
(statearr_49561_51246[(1)] = cljs.core.first((state_49513[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51247 = state_49513;
state_49513 = G__51247;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$state_machine__47758__auto__ = function(state_49513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47758__auto____1.call(this,state_49513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47758__auto____0;
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47758__auto____1;
return cljs$core$async$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_49584 = f__47943__auto__();
(statearr_49584[(6)] = c__47942__auto___51188);

return statearr_49584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
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
var G__49586 = arguments.length;
switch (G__49586) {
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
var G__49588 = arguments.length;
switch (G__49588) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__49596 = arguments.length;
switch (G__49596) {
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
var c__47942__auto___51251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_49659){
var state_val_49660 = (state_49659[(1)]);
if((state_val_49660 === (7))){
var state_49659__$1 = state_49659;
var statearr_49661_51252 = state_49659__$1;
(statearr_49661_51252[(2)] = null);

(statearr_49661_51252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (1))){
var state_49659__$1 = state_49659;
var statearr_49662_51253 = state_49659__$1;
(statearr_49662_51253[(2)] = null);

(statearr_49662_51253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (4))){
var inst_49616 = (state_49659[(7)]);
var inst_49615 = (state_49659[(8)]);
var inst_49618 = (inst_49616 < inst_49615);
var state_49659__$1 = state_49659;
if(cljs.core.truth_(inst_49618)){
var statearr_49663_51254 = state_49659__$1;
(statearr_49663_51254[(1)] = (6));

} else {
var statearr_49664_51255 = state_49659__$1;
(statearr_49664_51255[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (15))){
var inst_49645 = (state_49659[(9)]);
var inst_49650 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49645);
var state_49659__$1 = state_49659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49659__$1,(17),out,inst_49650);
} else {
if((state_val_49660 === (13))){
var inst_49645 = (state_49659[(9)]);
var inst_49645__$1 = (state_49659[(2)]);
var inst_49646 = cljs.core.some(cljs.core.nil_QMARK_,inst_49645__$1);
var state_49659__$1 = (function (){var statearr_49665 = state_49659;
(statearr_49665[(9)] = inst_49645__$1);

return statearr_49665;
})();
if(cljs.core.truth_(inst_49646)){
var statearr_49666_51256 = state_49659__$1;
(statearr_49666_51256[(1)] = (14));

} else {
var statearr_49667_51257 = state_49659__$1;
(statearr_49667_51257[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (6))){
var state_49659__$1 = state_49659;
var statearr_49668_51258 = state_49659__$1;
(statearr_49668_51258[(2)] = null);

(statearr_49668_51258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (17))){
var inst_49652 = (state_49659[(2)]);
var state_49659__$1 = (function (){var statearr_49670 = state_49659;
(statearr_49670[(10)] = inst_49652);

return statearr_49670;
})();
var statearr_49671_51259 = state_49659__$1;
(statearr_49671_51259[(2)] = null);

(statearr_49671_51259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (3))){
var inst_49657 = (state_49659[(2)]);
var state_49659__$1 = state_49659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49659__$1,inst_49657);
} else {
if((state_val_49660 === (12))){
var _ = (function (){var statearr_49672 = state_49659;
(statearr_49672[(4)] = cljs.core.rest((state_49659[(4)])));

return statearr_49672;
})();
var state_49659__$1 = state_49659;
var ex49669 = (state_49659__$1[(2)]);
var statearr_49673_51260 = state_49659__$1;
(statearr_49673_51260[(5)] = ex49669);


if((ex49669 instanceof Object)){
var statearr_49683_51261 = state_49659__$1;
(statearr_49683_51261[(1)] = (11));

(statearr_49683_51261[(5)] = null);

} else {
throw ex49669;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (2))){
var inst_49614 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49615 = cnt;
var inst_49616 = (0);
var state_49659__$1 = (function (){var statearr_49684 = state_49659;
(statearr_49684[(7)] = inst_49616);

(statearr_49684[(8)] = inst_49615);

(statearr_49684[(11)] = inst_49614);

return statearr_49684;
})();
var statearr_49685_51262 = state_49659__$1;
(statearr_49685_51262[(2)] = null);

(statearr_49685_51262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (11))){
var inst_49622 = (state_49659[(2)]);
var inst_49625 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49659__$1 = (function (){var statearr_49686 = state_49659;
(statearr_49686[(12)] = inst_49622);

return statearr_49686;
})();
var statearr_49691_51263 = state_49659__$1;
(statearr_49691_51263[(2)] = inst_49625);

(statearr_49691_51263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (9))){
var inst_49616 = (state_49659[(7)]);
var _ = (function (){var statearr_49692 = state_49659;
(statearr_49692[(4)] = cljs.core.cons((12),(state_49659[(4)])));

return statearr_49692;
})();
var inst_49631 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49616) : chs__$1.call(null,inst_49616));
var inst_49632 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49616) : done.call(null,inst_49616));
var inst_49633 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49631,inst_49632);
var ___$1 = (function (){var statearr_49693 = state_49659;
(statearr_49693[(4)] = cljs.core.rest((state_49659[(4)])));

return statearr_49693;
})();
var state_49659__$1 = state_49659;
var statearr_49694_51264 = state_49659__$1;
(statearr_49694_51264[(2)] = inst_49633);

(statearr_49694_51264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (5))){
var inst_49643 = (state_49659[(2)]);
var state_49659__$1 = (function (){var statearr_49695 = state_49659;
(statearr_49695[(13)] = inst_49643);

return statearr_49695;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49659__$1,(13),dchan);
} else {
if((state_val_49660 === (14))){
var inst_49648 = cljs.core.async.close_BANG_(out);
var state_49659__$1 = state_49659;
var statearr_49696_51265 = state_49659__$1;
(statearr_49696_51265[(2)] = inst_49648);

(statearr_49696_51265[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (16))){
var inst_49655 = (state_49659[(2)]);
var state_49659__$1 = state_49659;
var statearr_49697_51266 = state_49659__$1;
(statearr_49697_51266[(2)] = inst_49655);

(statearr_49697_51266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (10))){
var inst_49616 = (state_49659[(7)]);
var inst_49636 = (state_49659[(2)]);
var inst_49637 = (inst_49616 + (1));
var inst_49616__$1 = inst_49637;
var state_49659__$1 = (function (){var statearr_49698 = state_49659;
(statearr_49698[(7)] = inst_49616__$1);

(statearr_49698[(14)] = inst_49636);

return statearr_49698;
})();
var statearr_49699_51267 = state_49659__$1;
(statearr_49699_51267[(2)] = null);

(statearr_49699_51267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49660 === (8))){
var inst_49641 = (state_49659[(2)]);
var state_49659__$1 = state_49659;
var statearr_49700_51268 = state_49659__$1;
(statearr_49700_51268[(2)] = inst_49641);

(statearr_49700_51268[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__47758__auto__ = null;
var cljs$core$async$state_machine__47758__auto____0 = (function (){
var statearr_49701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49701[(0)] = cljs$core$async$state_machine__47758__auto__);

(statearr_49701[(1)] = (1));

return statearr_49701;
});
var cljs$core$async$state_machine__47758__auto____1 = (function (state_49659){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_49659);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e49703){var ex__47761__auto__ = e49703;
var statearr_49704_51269 = state_49659;
(statearr_49704_51269[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_49659[(4)]))){
var statearr_49705_51270 = state_49659;
(statearr_49705_51270[(1)] = cljs.core.first((state_49659[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51271 = state_49659;
state_49659 = G__51271;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$state_machine__47758__auto__ = function(state_49659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47758__auto____1.call(this,state_49659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47758__auto____0;
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47758__auto____1;
return cljs$core$async$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_49706 = f__47943__auto__();
(statearr_49706[(6)] = c__47942__auto___51251);

return statearr_49706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
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
var G__49709 = arguments.length;
switch (G__49709) {
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
var c__47942__auto___51273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_49741){
var state_val_49742 = (state_49741[(1)]);
if((state_val_49742 === (7))){
var inst_49721 = (state_49741[(7)]);
var inst_49720 = (state_49741[(8)]);
var inst_49720__$1 = (state_49741[(2)]);
var inst_49721__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49720__$1,(0),null);
var inst_49722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49720__$1,(1),null);
var inst_49723 = (inst_49721__$1 == null);
var state_49741__$1 = (function (){var statearr_49743 = state_49741;
(statearr_49743[(7)] = inst_49721__$1);

(statearr_49743[(9)] = inst_49722);

(statearr_49743[(8)] = inst_49720__$1);

return statearr_49743;
})();
if(cljs.core.truth_(inst_49723)){
var statearr_49744_51274 = state_49741__$1;
(statearr_49744_51274[(1)] = (8));

} else {
var statearr_49745_51275 = state_49741__$1;
(statearr_49745_51275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49742 === (1))){
var inst_49710 = cljs.core.vec(chs);
var inst_49711 = inst_49710;
var state_49741__$1 = (function (){var statearr_49746 = state_49741;
(statearr_49746[(10)] = inst_49711);

return statearr_49746;
})();
var statearr_49747_51276 = state_49741__$1;
(statearr_49747_51276[(2)] = null);

(statearr_49747_51276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49742 === (4))){
var inst_49711 = (state_49741[(10)]);
var state_49741__$1 = state_49741;
return cljs.core.async.ioc_alts_BANG_(state_49741__$1,(7),inst_49711);
} else {
if((state_val_49742 === (6))){
var inst_49737 = (state_49741[(2)]);
var state_49741__$1 = state_49741;
var statearr_49748_51277 = state_49741__$1;
(statearr_49748_51277[(2)] = inst_49737);

(statearr_49748_51277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49742 === (3))){
var inst_49739 = (state_49741[(2)]);
var state_49741__$1 = state_49741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49741__$1,inst_49739);
} else {
if((state_val_49742 === (2))){
var inst_49711 = (state_49741[(10)]);
var inst_49713 = cljs.core.count(inst_49711);
var inst_49714 = (inst_49713 > (0));
var state_49741__$1 = state_49741;
if(cljs.core.truth_(inst_49714)){
var statearr_49750_51278 = state_49741__$1;
(statearr_49750_51278[(1)] = (4));

} else {
var statearr_49751_51279 = state_49741__$1;
(statearr_49751_51279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49742 === (11))){
var inst_49711 = (state_49741[(10)]);
var inst_49730 = (state_49741[(2)]);
var tmp49749 = inst_49711;
var inst_49711__$1 = tmp49749;
var state_49741__$1 = (function (){var statearr_49757 = state_49741;
(statearr_49757[(10)] = inst_49711__$1);

(statearr_49757[(11)] = inst_49730);

return statearr_49757;
})();
var statearr_49758_51280 = state_49741__$1;
(statearr_49758_51280[(2)] = null);

(statearr_49758_51280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49742 === (9))){
var inst_49721 = (state_49741[(7)]);
var state_49741__$1 = state_49741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49741__$1,(11),out,inst_49721);
} else {
if((state_val_49742 === (5))){
var inst_49735 = cljs.core.async.close_BANG_(out);
var state_49741__$1 = state_49741;
var statearr_49776_51281 = state_49741__$1;
(statearr_49776_51281[(2)] = inst_49735);

(statearr_49776_51281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49742 === (10))){
var inst_49733 = (state_49741[(2)]);
var state_49741__$1 = state_49741;
var statearr_49777_51282 = state_49741__$1;
(statearr_49777_51282[(2)] = inst_49733);

(statearr_49777_51282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49742 === (8))){
var inst_49711 = (state_49741[(10)]);
var inst_49721 = (state_49741[(7)]);
var inst_49722 = (state_49741[(9)]);
var inst_49720 = (state_49741[(8)]);
var inst_49725 = (function (){var cs = inst_49711;
var vec__49716 = inst_49720;
var v = inst_49721;
var c = inst_49722;
return (function (p1__49707_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49707_SHARP_);
});
})();
var inst_49726 = cljs.core.filterv(inst_49725,inst_49711);
var inst_49711__$1 = inst_49726;
var state_49741__$1 = (function (){var statearr_49781 = state_49741;
(statearr_49781[(10)] = inst_49711__$1);

return statearr_49781;
})();
var statearr_49782_51283 = state_49741__$1;
(statearr_49782_51283[(2)] = null);

(statearr_49782_51283[(1)] = (2));


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
var cljs$core$async$state_machine__47758__auto__ = null;
var cljs$core$async$state_machine__47758__auto____0 = (function (){
var statearr_49783 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49783[(0)] = cljs$core$async$state_machine__47758__auto__);

(statearr_49783[(1)] = (1));

return statearr_49783;
});
var cljs$core$async$state_machine__47758__auto____1 = (function (state_49741){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_49741);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e49785){var ex__47761__auto__ = e49785;
var statearr_49786_51284 = state_49741;
(statearr_49786_51284[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_49741[(4)]))){
var statearr_49787_51285 = state_49741;
(statearr_49787_51285[(1)] = cljs.core.first((state_49741[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51286 = state_49741;
state_49741 = G__51286;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$state_machine__47758__auto__ = function(state_49741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47758__auto____1.call(this,state_49741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47758__auto____0;
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47758__auto____1;
return cljs$core$async$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_49791 = f__47943__auto__();
(statearr_49791[(6)] = c__47942__auto___51273);

return statearr_49791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
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
var G__49793 = arguments.length;
switch (G__49793) {
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
var c__47942__auto___51288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_49817){
var state_val_49818 = (state_49817[(1)]);
if((state_val_49818 === (7))){
var inst_49799 = (state_49817[(7)]);
var inst_49799__$1 = (state_49817[(2)]);
var inst_49800 = (inst_49799__$1 == null);
var inst_49801 = cljs.core.not(inst_49800);
var state_49817__$1 = (function (){var statearr_49819 = state_49817;
(statearr_49819[(7)] = inst_49799__$1);

return statearr_49819;
})();
if(inst_49801){
var statearr_49820_51289 = state_49817__$1;
(statearr_49820_51289[(1)] = (8));

} else {
var statearr_49821_51290 = state_49817__$1;
(statearr_49821_51290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (1))){
var inst_49794 = (0);
var state_49817__$1 = (function (){var statearr_49822 = state_49817;
(statearr_49822[(8)] = inst_49794);

return statearr_49822;
})();
var statearr_49823_51291 = state_49817__$1;
(statearr_49823_51291[(2)] = null);

(statearr_49823_51291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (4))){
var state_49817__$1 = state_49817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49817__$1,(7),ch);
} else {
if((state_val_49818 === (6))){
var inst_49812 = (state_49817[(2)]);
var state_49817__$1 = state_49817;
var statearr_49824_51292 = state_49817__$1;
(statearr_49824_51292[(2)] = inst_49812);

(statearr_49824_51292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (3))){
var inst_49814 = (state_49817[(2)]);
var inst_49815 = cljs.core.async.close_BANG_(out);
var state_49817__$1 = (function (){var statearr_49825 = state_49817;
(statearr_49825[(9)] = inst_49814);

return statearr_49825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49817__$1,inst_49815);
} else {
if((state_val_49818 === (2))){
var inst_49794 = (state_49817[(8)]);
var inst_49796 = (inst_49794 < n);
var state_49817__$1 = state_49817;
if(cljs.core.truth_(inst_49796)){
var statearr_49826_51293 = state_49817__$1;
(statearr_49826_51293[(1)] = (4));

} else {
var statearr_49827_51294 = state_49817__$1;
(statearr_49827_51294[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (11))){
var inst_49794 = (state_49817[(8)]);
var inst_49804 = (state_49817[(2)]);
var inst_49805 = (inst_49794 + (1));
var inst_49794__$1 = inst_49805;
var state_49817__$1 = (function (){var statearr_49828 = state_49817;
(statearr_49828[(10)] = inst_49804);

(statearr_49828[(8)] = inst_49794__$1);

return statearr_49828;
})();
var statearr_49829_51295 = state_49817__$1;
(statearr_49829_51295[(2)] = null);

(statearr_49829_51295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (9))){
var state_49817__$1 = state_49817;
var statearr_49830_51296 = state_49817__$1;
(statearr_49830_51296[(2)] = null);

(statearr_49830_51296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (5))){
var state_49817__$1 = state_49817;
var statearr_49833_51297 = state_49817__$1;
(statearr_49833_51297[(2)] = null);

(statearr_49833_51297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (10))){
var inst_49809 = (state_49817[(2)]);
var state_49817__$1 = state_49817;
var statearr_49835_51298 = state_49817__$1;
(statearr_49835_51298[(2)] = inst_49809);

(statearr_49835_51298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49818 === (8))){
var inst_49799 = (state_49817[(7)]);
var state_49817__$1 = state_49817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49817__$1,(11),out,inst_49799);
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
var cljs$core$async$state_machine__47758__auto__ = null;
var cljs$core$async$state_machine__47758__auto____0 = (function (){
var statearr_49839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49839[(0)] = cljs$core$async$state_machine__47758__auto__);

(statearr_49839[(1)] = (1));

return statearr_49839;
});
var cljs$core$async$state_machine__47758__auto____1 = (function (state_49817){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_49817);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e49840){var ex__47761__auto__ = e49840;
var statearr_49841_51299 = state_49817;
(statearr_49841_51299[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_49817[(4)]))){
var statearr_49842_51300 = state_49817;
(statearr_49842_51300[(1)] = cljs.core.first((state_49817[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51301 = state_49817;
state_49817 = G__51301;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$state_machine__47758__auto__ = function(state_49817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47758__auto____1.call(this,state_49817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47758__auto____0;
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47758__auto____1;
return cljs$core$async$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_49846 = f__47943__auto__();
(statearr_49846[(6)] = c__47942__auto___51288);

return statearr_49846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49850 = (function (f,ch,meta49851){
this.f = f;
this.ch = ch;
this.meta49851 = meta49851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49852,meta49851__$1){
var self__ = this;
var _49852__$1 = this;
return (new cljs.core.async.t_cljs$core$async49850(self__.f,self__.ch,meta49851__$1));
}));

(cljs.core.async.t_cljs$core$async49850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49852){
var self__ = this;
var _49852__$1 = this;
return self__.meta49851;
}));

(cljs.core.async.t_cljs$core$async49850.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49850.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49850.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49872 = (function (f,ch,meta49851,_,fn1,meta49873){
this.f = f;
this.ch = ch;
this.meta49851 = meta49851;
this._ = _;
this.fn1 = fn1;
this.meta49873 = meta49873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49874,meta49873__$1){
var self__ = this;
var _49874__$1 = this;
return (new cljs.core.async.t_cljs$core$async49872(self__.f,self__.ch,self__.meta49851,self__._,self__.fn1,meta49873__$1));
}));

(cljs.core.async.t_cljs$core$async49872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49874){
var self__ = this;
var _49874__$1 = this;
return self__.meta49873;
}));

(cljs.core.async.t_cljs$core$async49872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49847_SHARP_){
var G__49883 = (((p1__49847_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49847_SHARP_) : self__.f.call(null,p1__49847_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49883) : f1.call(null,G__49883));
});
}));

(cljs.core.async.t_cljs$core$async49872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49851","meta49851",-1450044978,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49850","cljs.core.async/t_cljs$core$async49850",242599081,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49873","meta49873",50017917,null)], null);
}));

(cljs.core.async.t_cljs$core$async49872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49872");

(cljs.core.async.t_cljs$core$async49872.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49872.
 */
cljs.core.async.__GT_t_cljs$core$async49872 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49872(f__$1,ch__$1,meta49851__$1,___$2,fn1__$1,meta49873){
return (new cljs.core.async.t_cljs$core$async49872(f__$1,ch__$1,meta49851__$1,___$2,fn1__$1,meta49873));
});

}

return (new cljs.core.async.t_cljs$core$async49872(self__.f,self__.ch,self__.meta49851,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49898 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49898) : self__.f.call(null,G__49898));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49850.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49851","meta49851",-1450044978,null)], null);
}));

(cljs.core.async.t_cljs$core$async49850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49850");

(cljs.core.async.t_cljs$core$async49850.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49850.
 */
cljs.core.async.__GT_t_cljs$core$async49850 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49850(f__$1,ch__$1,meta49851){
return (new cljs.core.async.t_cljs$core$async49850(f__$1,ch__$1,meta49851));
});

}

return (new cljs.core.async.t_cljs$core$async49850(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49903 = (function (f,ch,meta49904){
this.f = f;
this.ch = ch;
this.meta49904 = meta49904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49905,meta49904__$1){
var self__ = this;
var _49905__$1 = this;
return (new cljs.core.async.t_cljs$core$async49903(self__.f,self__.ch,meta49904__$1));
}));

(cljs.core.async.t_cljs$core$async49903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49905){
var self__ = this;
var _49905__$1 = this;
return self__.meta49904;
}));

(cljs.core.async.t_cljs$core$async49903.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49903.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49903.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49904","meta49904",-226741602,null)], null);
}));

(cljs.core.async.t_cljs$core$async49903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49903");

(cljs.core.async.t_cljs$core$async49903.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49903.
 */
cljs.core.async.__GT_t_cljs$core$async49903 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49903(f__$1,ch__$1,meta49904){
return (new cljs.core.async.t_cljs$core$async49903(f__$1,ch__$1,meta49904));
});

}

return (new cljs.core.async.t_cljs$core$async49903(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49920 = (function (p,ch,meta49921){
this.p = p;
this.ch = ch;
this.meta49921 = meta49921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49922,meta49921__$1){
var self__ = this;
var _49922__$1 = this;
return (new cljs.core.async.t_cljs$core$async49920(self__.p,self__.ch,meta49921__$1));
}));

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49922){
var self__ = this;
var _49922__$1 = this;
return self__.meta49921;
}));

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49921","meta49921",799158680,null)], null);
}));

(cljs.core.async.t_cljs$core$async49920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49920");

(cljs.core.async.t_cljs$core$async49920.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49920.
 */
cljs.core.async.__GT_t_cljs$core$async49920 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49920(p__$1,ch__$1,meta49921){
return (new cljs.core.async.t_cljs$core$async49920(p__$1,ch__$1,meta49921));
});

}

return (new cljs.core.async.t_cljs$core$async49920(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49948 = arguments.length;
switch (G__49948) {
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
var c__47942__auto___51326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_49969){
var state_val_49970 = (state_49969[(1)]);
if((state_val_49970 === (7))){
var inst_49965 = (state_49969[(2)]);
var state_49969__$1 = state_49969;
var statearr_49971_51327 = state_49969__$1;
(statearr_49971_51327[(2)] = inst_49965);

(statearr_49971_51327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (1))){
var state_49969__$1 = state_49969;
var statearr_49972_51328 = state_49969__$1;
(statearr_49972_51328[(2)] = null);

(statearr_49972_51328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (4))){
var inst_49951 = (state_49969[(7)]);
var inst_49951__$1 = (state_49969[(2)]);
var inst_49952 = (inst_49951__$1 == null);
var state_49969__$1 = (function (){var statearr_49973 = state_49969;
(statearr_49973[(7)] = inst_49951__$1);

return statearr_49973;
})();
if(cljs.core.truth_(inst_49952)){
var statearr_49974_51329 = state_49969__$1;
(statearr_49974_51329[(1)] = (5));

} else {
var statearr_49975_51330 = state_49969__$1;
(statearr_49975_51330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (6))){
var inst_49951 = (state_49969[(7)]);
var inst_49956 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49951) : p.call(null,inst_49951));
var state_49969__$1 = state_49969;
if(cljs.core.truth_(inst_49956)){
var statearr_49977_51331 = state_49969__$1;
(statearr_49977_51331[(1)] = (8));

} else {
var statearr_49978_51332 = state_49969__$1;
(statearr_49978_51332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (3))){
var inst_49967 = (state_49969[(2)]);
var state_49969__$1 = state_49969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49969__$1,inst_49967);
} else {
if((state_val_49970 === (2))){
var state_49969__$1 = state_49969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49969__$1,(4),ch);
} else {
if((state_val_49970 === (11))){
var inst_49959 = (state_49969[(2)]);
var state_49969__$1 = state_49969;
var statearr_49979_51333 = state_49969__$1;
(statearr_49979_51333[(2)] = inst_49959);

(statearr_49979_51333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (9))){
var state_49969__$1 = state_49969;
var statearr_49980_51334 = state_49969__$1;
(statearr_49980_51334[(2)] = null);

(statearr_49980_51334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (5))){
var inst_49954 = cljs.core.async.close_BANG_(out);
var state_49969__$1 = state_49969;
var statearr_49981_51335 = state_49969__$1;
(statearr_49981_51335[(2)] = inst_49954);

(statearr_49981_51335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (10))){
var inst_49962 = (state_49969[(2)]);
var state_49969__$1 = (function (){var statearr_49982 = state_49969;
(statearr_49982[(8)] = inst_49962);

return statearr_49982;
})();
var statearr_49983_51336 = state_49969__$1;
(statearr_49983_51336[(2)] = null);

(statearr_49983_51336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (8))){
var inst_49951 = (state_49969[(7)]);
var state_49969__$1 = state_49969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49969__$1,(11),out,inst_49951);
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
var cljs$core$async$state_machine__47758__auto__ = null;
var cljs$core$async$state_machine__47758__auto____0 = (function (){
var statearr_49984 = [null,null,null,null,null,null,null,null,null];
(statearr_49984[(0)] = cljs$core$async$state_machine__47758__auto__);

(statearr_49984[(1)] = (1));

return statearr_49984;
});
var cljs$core$async$state_machine__47758__auto____1 = (function (state_49969){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_49969);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e49985){var ex__47761__auto__ = e49985;
var statearr_49986_51343 = state_49969;
(statearr_49986_51343[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_49969[(4)]))){
var statearr_49987_51344 = state_49969;
(statearr_49987_51344[(1)] = cljs.core.first((state_49969[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51345 = state_49969;
state_49969 = G__51345;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$state_machine__47758__auto__ = function(state_49969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47758__auto____1.call(this,state_49969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47758__auto____0;
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47758__auto____1;
return cljs$core$async$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_49988 = f__47943__auto__();
(statearr_49988[(6)] = c__47942__auto___51326);

return statearr_49988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49990 = arguments.length;
switch (G__49990) {
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
var c__47942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_50055){
var state_val_50056 = (state_50055[(1)]);
if((state_val_50056 === (7))){
var inst_50049 = (state_50055[(2)]);
var state_50055__$1 = state_50055;
var statearr_50057_51347 = state_50055__$1;
(statearr_50057_51347[(2)] = inst_50049);

(statearr_50057_51347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (20))){
var inst_50018 = (state_50055[(7)]);
var inst_50029 = (state_50055[(2)]);
var inst_50031 = cljs.core.next(inst_50018);
var inst_50004 = inst_50031;
var inst_50005 = null;
var inst_50006 = (0);
var inst_50007 = (0);
var state_50055__$1 = (function (){var statearr_50071 = state_50055;
(statearr_50071[(8)] = inst_50029);

(statearr_50071[(9)] = inst_50005);

(statearr_50071[(10)] = inst_50006);

(statearr_50071[(11)] = inst_50007);

(statearr_50071[(12)] = inst_50004);

return statearr_50071;
})();
var statearr_50072_51348 = state_50055__$1;
(statearr_50072_51348[(2)] = null);

(statearr_50072_51348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (1))){
var state_50055__$1 = state_50055;
var statearr_50080_51349 = state_50055__$1;
(statearr_50080_51349[(2)] = null);

(statearr_50080_51349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (4))){
var inst_49993 = (state_50055[(13)]);
var inst_49993__$1 = (state_50055[(2)]);
var inst_49994 = (inst_49993__$1 == null);
var state_50055__$1 = (function (){var statearr_50081 = state_50055;
(statearr_50081[(13)] = inst_49993__$1);

return statearr_50081;
})();
if(cljs.core.truth_(inst_49994)){
var statearr_50082_51350 = state_50055__$1;
(statearr_50082_51350[(1)] = (5));

} else {
var statearr_50083_51351 = state_50055__$1;
(statearr_50083_51351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (15))){
var state_50055__$1 = state_50055;
var statearr_50087_51352 = state_50055__$1;
(statearr_50087_51352[(2)] = null);

(statearr_50087_51352[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (21))){
var state_50055__$1 = state_50055;
var statearr_50088_51353 = state_50055__$1;
(statearr_50088_51353[(2)] = null);

(statearr_50088_51353[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (13))){
var inst_50005 = (state_50055[(9)]);
var inst_50006 = (state_50055[(10)]);
var inst_50007 = (state_50055[(11)]);
var inst_50004 = (state_50055[(12)]);
var inst_50014 = (state_50055[(2)]);
var inst_50015 = (inst_50007 + (1));
var tmp50084 = inst_50005;
var tmp50085 = inst_50006;
var tmp50086 = inst_50004;
var inst_50004__$1 = tmp50086;
var inst_50005__$1 = tmp50084;
var inst_50006__$1 = tmp50085;
var inst_50007__$1 = inst_50015;
var state_50055__$1 = (function (){var statearr_50089 = state_50055;
(statearr_50089[(14)] = inst_50014);

(statearr_50089[(9)] = inst_50005__$1);

(statearr_50089[(10)] = inst_50006__$1);

(statearr_50089[(11)] = inst_50007__$1);

(statearr_50089[(12)] = inst_50004__$1);

return statearr_50089;
})();
var statearr_50090_51354 = state_50055__$1;
(statearr_50090_51354[(2)] = null);

(statearr_50090_51354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (22))){
var state_50055__$1 = state_50055;
var statearr_50091_51355 = state_50055__$1;
(statearr_50091_51355[(2)] = null);

(statearr_50091_51355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (6))){
var inst_49993 = (state_50055[(13)]);
var inst_50002 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49993) : f.call(null,inst_49993));
var inst_50003 = cljs.core.seq(inst_50002);
var inst_50004 = inst_50003;
var inst_50005 = null;
var inst_50006 = (0);
var inst_50007 = (0);
var state_50055__$1 = (function (){var statearr_50092 = state_50055;
(statearr_50092[(9)] = inst_50005);

(statearr_50092[(10)] = inst_50006);

(statearr_50092[(11)] = inst_50007);

(statearr_50092[(12)] = inst_50004);

return statearr_50092;
})();
var statearr_50093_51356 = state_50055__$1;
(statearr_50093_51356[(2)] = null);

(statearr_50093_51356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (17))){
var inst_50018 = (state_50055[(7)]);
var inst_50022 = cljs.core.chunk_first(inst_50018);
var inst_50023 = cljs.core.chunk_rest(inst_50018);
var inst_50024 = cljs.core.count(inst_50022);
var inst_50004 = inst_50023;
var inst_50005 = inst_50022;
var inst_50006 = inst_50024;
var inst_50007 = (0);
var state_50055__$1 = (function (){var statearr_50094 = state_50055;
(statearr_50094[(9)] = inst_50005);

(statearr_50094[(10)] = inst_50006);

(statearr_50094[(11)] = inst_50007);

(statearr_50094[(12)] = inst_50004);

return statearr_50094;
})();
var statearr_50097_51357 = state_50055__$1;
(statearr_50097_51357[(2)] = null);

(statearr_50097_51357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (3))){
var inst_50051 = (state_50055[(2)]);
var state_50055__$1 = state_50055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50055__$1,inst_50051);
} else {
if((state_val_50056 === (12))){
var inst_50039 = (state_50055[(2)]);
var state_50055__$1 = state_50055;
var statearr_50098_51358 = state_50055__$1;
(statearr_50098_51358[(2)] = inst_50039);

(statearr_50098_51358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (2))){
var state_50055__$1 = state_50055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50055__$1,(4),in$);
} else {
if((state_val_50056 === (23))){
var inst_50047 = (state_50055[(2)]);
var state_50055__$1 = state_50055;
var statearr_50100_51359 = state_50055__$1;
(statearr_50100_51359[(2)] = inst_50047);

(statearr_50100_51359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (19))){
var inst_50034 = (state_50055[(2)]);
var state_50055__$1 = state_50055;
var statearr_50102_51360 = state_50055__$1;
(statearr_50102_51360[(2)] = inst_50034);

(statearr_50102_51360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (11))){
var inst_50004 = (state_50055[(12)]);
var inst_50018 = (state_50055[(7)]);
var inst_50018__$1 = cljs.core.seq(inst_50004);
var state_50055__$1 = (function (){var statearr_50103 = state_50055;
(statearr_50103[(7)] = inst_50018__$1);

return statearr_50103;
})();
if(inst_50018__$1){
var statearr_50104_51361 = state_50055__$1;
(statearr_50104_51361[(1)] = (14));

} else {
var statearr_50105_51362 = state_50055__$1;
(statearr_50105_51362[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (9))){
var inst_50041 = (state_50055[(2)]);
var inst_50042 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_50055__$1 = (function (){var statearr_50106 = state_50055;
(statearr_50106[(15)] = inst_50041);

return statearr_50106;
})();
if(cljs.core.truth_(inst_50042)){
var statearr_50107_51363 = state_50055__$1;
(statearr_50107_51363[(1)] = (21));

} else {
var statearr_50108_51364 = state_50055__$1;
(statearr_50108_51364[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (5))){
var inst_49996 = cljs.core.async.close_BANG_(out);
var state_50055__$1 = state_50055;
var statearr_50109_51365 = state_50055__$1;
(statearr_50109_51365[(2)] = inst_49996);

(statearr_50109_51365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (14))){
var inst_50018 = (state_50055[(7)]);
var inst_50020 = cljs.core.chunked_seq_QMARK_(inst_50018);
var state_50055__$1 = state_50055;
if(inst_50020){
var statearr_50110_51366 = state_50055__$1;
(statearr_50110_51366[(1)] = (17));

} else {
var statearr_50111_51367 = state_50055__$1;
(statearr_50111_51367[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (16))){
var inst_50037 = (state_50055[(2)]);
var state_50055__$1 = state_50055;
var statearr_50112_51368 = state_50055__$1;
(statearr_50112_51368[(2)] = inst_50037);

(statearr_50112_51368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50056 === (10))){
var inst_50005 = (state_50055[(9)]);
var inst_50007 = (state_50055[(11)]);
var inst_50012 = cljs.core._nth(inst_50005,inst_50007);
var state_50055__$1 = state_50055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50055__$1,(13),out,inst_50012);
} else {
if((state_val_50056 === (18))){
var inst_50018 = (state_50055[(7)]);
var inst_50027 = cljs.core.first(inst_50018);
var state_50055__$1 = state_50055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50055__$1,(20),out,inst_50027);
} else {
if((state_val_50056 === (8))){
var inst_50006 = (state_50055[(10)]);
var inst_50007 = (state_50055[(11)]);
var inst_50009 = (inst_50007 < inst_50006);
var inst_50010 = inst_50009;
var state_50055__$1 = state_50055;
if(cljs.core.truth_(inst_50010)){
var statearr_50113_51369 = state_50055__$1;
(statearr_50113_51369[(1)] = (10));

} else {
var statearr_50115_51370 = state_50055__$1;
(statearr_50115_51370[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__47758__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47758__auto____0 = (function (){
var statearr_50116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50116[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47758__auto__);

(statearr_50116[(1)] = (1));

return statearr_50116;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47758__auto____1 = (function (state_50055){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_50055);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e50117){var ex__47761__auto__ = e50117;
var statearr_50118_51371 = state_50055;
(statearr_50118_51371[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_50055[(4)]))){
var statearr_50119_51378 = state_50055;
(statearr_50119_51378[(1)] = cljs.core.first((state_50055[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51379 = state_50055;
state_50055 = G__51379;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47758__auto__ = function(state_50055){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47758__auto____1.call(this,state_50055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47758__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47758__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_50121 = f__47943__auto__();
(statearr_50121[(6)] = c__47942__auto__);

return statearr_50121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));

return c__47942__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50173 = arguments.length;
switch (G__50173) {
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
var G__50179 = arguments.length;
switch (G__50179) {
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
var G__50197 = arguments.length;
switch (G__50197) {
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
var c__47942__auto___51383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_50227){
var state_val_50228 = (state_50227[(1)]);
if((state_val_50228 === (7))){
var inst_50222 = (state_50227[(2)]);
var state_50227__$1 = state_50227;
var statearr_50229_51384 = state_50227__$1;
(statearr_50229_51384[(2)] = inst_50222);

(statearr_50229_51384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (1))){
var inst_50203 = null;
var state_50227__$1 = (function (){var statearr_50230 = state_50227;
(statearr_50230[(7)] = inst_50203);

return statearr_50230;
})();
var statearr_50231_51385 = state_50227__$1;
(statearr_50231_51385[(2)] = null);

(statearr_50231_51385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (4))){
var inst_50206 = (state_50227[(8)]);
var inst_50206__$1 = (state_50227[(2)]);
var inst_50207 = (inst_50206__$1 == null);
var inst_50208 = cljs.core.not(inst_50207);
var state_50227__$1 = (function (){var statearr_50233 = state_50227;
(statearr_50233[(8)] = inst_50206__$1);

return statearr_50233;
})();
if(inst_50208){
var statearr_50234_51386 = state_50227__$1;
(statearr_50234_51386[(1)] = (5));

} else {
var statearr_50235_51387 = state_50227__$1;
(statearr_50235_51387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (6))){
var state_50227__$1 = state_50227;
var statearr_50236_51388 = state_50227__$1;
(statearr_50236_51388[(2)] = null);

(statearr_50236_51388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (3))){
var inst_50224 = (state_50227[(2)]);
var inst_50225 = cljs.core.async.close_BANG_(out);
var state_50227__$1 = (function (){var statearr_50237 = state_50227;
(statearr_50237[(9)] = inst_50224);

return statearr_50237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50227__$1,inst_50225);
} else {
if((state_val_50228 === (2))){
var state_50227__$1 = state_50227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50227__$1,(4),ch);
} else {
if((state_val_50228 === (11))){
var inst_50206 = (state_50227[(8)]);
var inst_50216 = (state_50227[(2)]);
var inst_50203 = inst_50206;
var state_50227__$1 = (function (){var statearr_50239 = state_50227;
(statearr_50239[(7)] = inst_50203);

(statearr_50239[(10)] = inst_50216);

return statearr_50239;
})();
var statearr_50241_51389 = state_50227__$1;
(statearr_50241_51389[(2)] = null);

(statearr_50241_51389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (9))){
var inst_50206 = (state_50227[(8)]);
var state_50227__$1 = state_50227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50227__$1,(11),out,inst_50206);
} else {
if((state_val_50228 === (5))){
var inst_50203 = (state_50227[(7)]);
var inst_50206 = (state_50227[(8)]);
var inst_50211 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50206,inst_50203);
var state_50227__$1 = state_50227;
if(inst_50211){
var statearr_50243_51390 = state_50227__$1;
(statearr_50243_51390[(1)] = (8));

} else {
var statearr_50245_51391 = state_50227__$1;
(statearr_50245_51391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (10))){
var inst_50219 = (state_50227[(2)]);
var state_50227__$1 = state_50227;
var statearr_50246_51392 = state_50227__$1;
(statearr_50246_51392[(2)] = inst_50219);

(statearr_50246_51392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (8))){
var inst_50203 = (state_50227[(7)]);
var tmp50242 = inst_50203;
var inst_50203__$1 = tmp50242;
var state_50227__$1 = (function (){var statearr_50247 = state_50227;
(statearr_50247[(7)] = inst_50203__$1);

return statearr_50247;
})();
var statearr_50248_51395 = state_50227__$1;
(statearr_50248_51395[(2)] = null);

(statearr_50248_51395[(1)] = (2));


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
var cljs$core$async$state_machine__47758__auto__ = null;
var cljs$core$async$state_machine__47758__auto____0 = (function (){
var statearr_50249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50249[(0)] = cljs$core$async$state_machine__47758__auto__);

(statearr_50249[(1)] = (1));

return statearr_50249;
});
var cljs$core$async$state_machine__47758__auto____1 = (function (state_50227){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_50227);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e50250){var ex__47761__auto__ = e50250;
var statearr_50251_51400 = state_50227;
(statearr_50251_51400[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_50227[(4)]))){
var statearr_50252_51401 = state_50227;
(statearr_50252_51401[(1)] = cljs.core.first((state_50227[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51402 = state_50227;
state_50227 = G__51402;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$state_machine__47758__auto__ = function(state_50227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47758__auto____1.call(this,state_50227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47758__auto____0;
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47758__auto____1;
return cljs$core$async$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_50253 = f__47943__auto__();
(statearr_50253[(6)] = c__47942__auto___51383);

return statearr_50253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50256 = arguments.length;
switch (G__50256) {
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
var c__47942__auto___51404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_50298){
var state_val_50299 = (state_50298[(1)]);
if((state_val_50299 === (7))){
var inst_50294 = (state_50298[(2)]);
var state_50298__$1 = state_50298;
var statearr_50300_51405 = state_50298__$1;
(statearr_50300_51405[(2)] = inst_50294);

(statearr_50300_51405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (1))){
var inst_50261 = (new Array(n));
var inst_50262 = inst_50261;
var inst_50263 = (0);
var state_50298__$1 = (function (){var statearr_50301 = state_50298;
(statearr_50301[(7)] = inst_50262);

(statearr_50301[(8)] = inst_50263);

return statearr_50301;
})();
var statearr_50302_51406 = state_50298__$1;
(statearr_50302_51406[(2)] = null);

(statearr_50302_51406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (4))){
var inst_50266 = (state_50298[(9)]);
var inst_50266__$1 = (state_50298[(2)]);
var inst_50267 = (inst_50266__$1 == null);
var inst_50268 = cljs.core.not(inst_50267);
var state_50298__$1 = (function (){var statearr_50303 = state_50298;
(statearr_50303[(9)] = inst_50266__$1);

return statearr_50303;
})();
if(inst_50268){
var statearr_50304_51407 = state_50298__$1;
(statearr_50304_51407[(1)] = (5));

} else {
var statearr_50305_51408 = state_50298__$1;
(statearr_50305_51408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (15))){
var inst_50288 = (state_50298[(2)]);
var state_50298__$1 = state_50298;
var statearr_50306_51409 = state_50298__$1;
(statearr_50306_51409[(2)] = inst_50288);

(statearr_50306_51409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (13))){
var state_50298__$1 = state_50298;
var statearr_50307_51410 = state_50298__$1;
(statearr_50307_51410[(2)] = null);

(statearr_50307_51410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (6))){
var inst_50263 = (state_50298[(8)]);
var inst_50284 = (inst_50263 > (0));
var state_50298__$1 = state_50298;
if(cljs.core.truth_(inst_50284)){
var statearr_50340_51411 = state_50298__$1;
(statearr_50340_51411[(1)] = (12));

} else {
var statearr_50341_51412 = state_50298__$1;
(statearr_50341_51412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (3))){
var inst_50296 = (state_50298[(2)]);
var state_50298__$1 = state_50298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50298__$1,inst_50296);
} else {
if((state_val_50299 === (12))){
var inst_50262 = (state_50298[(7)]);
var inst_50286 = cljs.core.vec(inst_50262);
var state_50298__$1 = state_50298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50298__$1,(15),out,inst_50286);
} else {
if((state_val_50299 === (2))){
var state_50298__$1 = state_50298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50298__$1,(4),ch);
} else {
if((state_val_50299 === (11))){
var inst_50278 = (state_50298[(2)]);
var inst_50279 = (new Array(n));
var inst_50262 = inst_50279;
var inst_50263 = (0);
var state_50298__$1 = (function (){var statearr_50342 = state_50298;
(statearr_50342[(7)] = inst_50262);

(statearr_50342[(8)] = inst_50263);

(statearr_50342[(10)] = inst_50278);

return statearr_50342;
})();
var statearr_50343_51413 = state_50298__$1;
(statearr_50343_51413[(2)] = null);

(statearr_50343_51413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (9))){
var inst_50262 = (state_50298[(7)]);
var inst_50276 = cljs.core.vec(inst_50262);
var state_50298__$1 = state_50298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50298__$1,(11),out,inst_50276);
} else {
if((state_val_50299 === (5))){
var inst_50262 = (state_50298[(7)]);
var inst_50266 = (state_50298[(9)]);
var inst_50263 = (state_50298[(8)]);
var inst_50271 = (state_50298[(11)]);
var inst_50270 = (inst_50262[inst_50263] = inst_50266);
var inst_50271__$1 = (inst_50263 + (1));
var inst_50272 = (inst_50271__$1 < n);
var state_50298__$1 = (function (){var statearr_50345 = state_50298;
(statearr_50345[(11)] = inst_50271__$1);

(statearr_50345[(12)] = inst_50270);

return statearr_50345;
})();
if(cljs.core.truth_(inst_50272)){
var statearr_50346_51414 = state_50298__$1;
(statearr_50346_51414[(1)] = (8));

} else {
var statearr_50347_51415 = state_50298__$1;
(statearr_50347_51415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (14))){
var inst_50291 = (state_50298[(2)]);
var inst_50292 = cljs.core.async.close_BANG_(out);
var state_50298__$1 = (function (){var statearr_50353 = state_50298;
(statearr_50353[(13)] = inst_50291);

return statearr_50353;
})();
var statearr_50354_51416 = state_50298__$1;
(statearr_50354_51416[(2)] = inst_50292);

(statearr_50354_51416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (10))){
var inst_50282 = (state_50298[(2)]);
var state_50298__$1 = state_50298;
var statearr_50355_51417 = state_50298__$1;
(statearr_50355_51417[(2)] = inst_50282);

(statearr_50355_51417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50299 === (8))){
var inst_50262 = (state_50298[(7)]);
var inst_50271 = (state_50298[(11)]);
var tmp50352 = inst_50262;
var inst_50262__$1 = tmp50352;
var inst_50263 = inst_50271;
var state_50298__$1 = (function (){var statearr_50356 = state_50298;
(statearr_50356[(7)] = inst_50262__$1);

(statearr_50356[(8)] = inst_50263);

return statearr_50356;
})();
var statearr_50357_51418 = state_50298__$1;
(statearr_50357_51418[(2)] = null);

(statearr_50357_51418[(1)] = (2));


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
var cljs$core$async$state_machine__47758__auto__ = null;
var cljs$core$async$state_machine__47758__auto____0 = (function (){
var statearr_50358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50358[(0)] = cljs$core$async$state_machine__47758__auto__);

(statearr_50358[(1)] = (1));

return statearr_50358;
});
var cljs$core$async$state_machine__47758__auto____1 = (function (state_50298){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_50298);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e50359){var ex__47761__auto__ = e50359;
var statearr_50360_51419 = state_50298;
(statearr_50360_51419[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_50298[(4)]))){
var statearr_50361_51420 = state_50298;
(statearr_50361_51420[(1)] = cljs.core.first((state_50298[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51421 = state_50298;
state_50298 = G__51421;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$state_machine__47758__auto__ = function(state_50298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47758__auto____1.call(this,state_50298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47758__auto____0;
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47758__auto____1;
return cljs$core$async$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_50362 = f__47943__auto__();
(statearr_50362[(6)] = c__47942__auto___51404);

return statearr_50362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50364 = arguments.length;
switch (G__50364) {
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
var c__47942__auto___51423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47943__auto__ = (function (){var switch__47757__auto__ = (function (state_50471){
var state_val_50472 = (state_50471[(1)]);
if((state_val_50472 === (7))){
var inst_50414 = (state_50471[(2)]);
var state_50471__$1 = state_50471;
var statearr_50479_51424 = state_50471__$1;
(statearr_50479_51424[(2)] = inst_50414);

(statearr_50479_51424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (1))){
var inst_50369 = [];
var inst_50370 = inst_50369;
var inst_50371 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50471__$1 = (function (){var statearr_50480 = state_50471;
(statearr_50480[(7)] = inst_50370);

(statearr_50480[(8)] = inst_50371);

return statearr_50480;
})();
var statearr_50481_51425 = state_50471__$1;
(statearr_50481_51425[(2)] = null);

(statearr_50481_51425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (4))){
var inst_50374 = (state_50471[(9)]);
var inst_50374__$1 = (state_50471[(2)]);
var inst_50375 = (inst_50374__$1 == null);
var inst_50376 = cljs.core.not(inst_50375);
var state_50471__$1 = (function (){var statearr_50482 = state_50471;
(statearr_50482[(9)] = inst_50374__$1);

return statearr_50482;
})();
if(inst_50376){
var statearr_50483_51426 = state_50471__$1;
(statearr_50483_51426[(1)] = (5));

} else {
var statearr_50484_51432 = state_50471__$1;
(statearr_50484_51432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (15))){
var inst_50370 = (state_50471[(7)]);
var inst_50406 = cljs.core.vec(inst_50370);
var state_50471__$1 = state_50471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50471__$1,(18),out,inst_50406);
} else {
if((state_val_50472 === (13))){
var inst_50396 = (state_50471[(2)]);
var state_50471__$1 = state_50471;
var statearr_50485_51439 = state_50471__$1;
(statearr_50485_51439[(2)] = inst_50396);

(statearr_50485_51439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (6))){
var inst_50370 = (state_50471[(7)]);
var inst_50398 = inst_50370.length;
var inst_50399 = (inst_50398 > (0));
var state_50471__$1 = state_50471;
if(cljs.core.truth_(inst_50399)){
var statearr_50486_51440 = state_50471__$1;
(statearr_50486_51440[(1)] = (15));

} else {
var statearr_50487_51441 = state_50471__$1;
(statearr_50487_51441[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (17))){
var inst_50411 = (state_50471[(2)]);
var inst_50412 = cljs.core.async.close_BANG_(out);
var state_50471__$1 = (function (){var statearr_50488 = state_50471;
(statearr_50488[(10)] = inst_50411);

return statearr_50488;
})();
var statearr_50489_51442 = state_50471__$1;
(statearr_50489_51442[(2)] = inst_50412);

(statearr_50489_51442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (3))){
var inst_50416 = (state_50471[(2)]);
var state_50471__$1 = state_50471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50471__$1,inst_50416);
} else {
if((state_val_50472 === (12))){
var inst_50370 = (state_50471[(7)]);
var inst_50389 = cljs.core.vec(inst_50370);
var state_50471__$1 = state_50471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50471__$1,(14),out,inst_50389);
} else {
if((state_val_50472 === (2))){
var state_50471__$1 = state_50471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50471__$1,(4),ch);
} else {
if((state_val_50472 === (11))){
var inst_50370 = (state_50471[(7)]);
var inst_50374 = (state_50471[(9)]);
var inst_50378 = (state_50471[(11)]);
var inst_50386 = inst_50370.push(inst_50374);
var tmp50490 = inst_50370;
var inst_50370__$1 = tmp50490;
var inst_50371 = inst_50378;
var state_50471__$1 = (function (){var statearr_50491 = state_50471;
(statearr_50491[(7)] = inst_50370__$1);

(statearr_50491[(8)] = inst_50371);

(statearr_50491[(12)] = inst_50386);

return statearr_50491;
})();
var statearr_50492_51443 = state_50471__$1;
(statearr_50492_51443[(2)] = null);

(statearr_50492_51443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (9))){
var inst_50371 = (state_50471[(8)]);
var inst_50382 = cljs.core.keyword_identical_QMARK_(inst_50371,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_50471__$1 = state_50471;
var statearr_50493_51444 = state_50471__$1;
(statearr_50493_51444[(2)] = inst_50382);

(statearr_50493_51444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (5))){
var inst_50379 = (state_50471[(13)]);
var inst_50371 = (state_50471[(8)]);
var inst_50374 = (state_50471[(9)]);
var inst_50378 = (state_50471[(11)]);
var inst_50378__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50374) : f.call(null,inst_50374));
var inst_50379__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50378__$1,inst_50371);
var state_50471__$1 = (function (){var statearr_50494 = state_50471;
(statearr_50494[(13)] = inst_50379__$1);

(statearr_50494[(11)] = inst_50378__$1);

return statearr_50494;
})();
if(inst_50379__$1){
var statearr_50495_51445 = state_50471__$1;
(statearr_50495_51445[(1)] = (8));

} else {
var statearr_50496_51446 = state_50471__$1;
(statearr_50496_51446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (14))){
var inst_50374 = (state_50471[(9)]);
var inst_50378 = (state_50471[(11)]);
var inst_50391 = (state_50471[(2)]);
var inst_50392 = [];
var inst_50393 = inst_50392.push(inst_50374);
var inst_50370 = inst_50392;
var inst_50371 = inst_50378;
var state_50471__$1 = (function (){var statearr_50497 = state_50471;
(statearr_50497[(7)] = inst_50370);

(statearr_50497[(14)] = inst_50391);

(statearr_50497[(8)] = inst_50371);

(statearr_50497[(15)] = inst_50393);

return statearr_50497;
})();
var statearr_50498_51447 = state_50471__$1;
(statearr_50498_51447[(2)] = null);

(statearr_50498_51447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (16))){
var state_50471__$1 = state_50471;
var statearr_50499_51448 = state_50471__$1;
(statearr_50499_51448[(2)] = null);

(statearr_50499_51448[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (10))){
var inst_50384 = (state_50471[(2)]);
var state_50471__$1 = state_50471;
if(cljs.core.truth_(inst_50384)){
var statearr_50500_51449 = state_50471__$1;
(statearr_50500_51449[(1)] = (11));

} else {
var statearr_50501_51450 = state_50471__$1;
(statearr_50501_51450[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (18))){
var inst_50408 = (state_50471[(2)]);
var state_50471__$1 = state_50471;
var statearr_50502_51451 = state_50471__$1;
(statearr_50502_51451[(2)] = inst_50408);

(statearr_50502_51451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50472 === (8))){
var inst_50379 = (state_50471[(13)]);
var state_50471__$1 = state_50471;
var statearr_50503_51452 = state_50471__$1;
(statearr_50503_51452[(2)] = inst_50379);

(statearr_50503_51452[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__47758__auto__ = null;
var cljs$core$async$state_machine__47758__auto____0 = (function (){
var statearr_50504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50504[(0)] = cljs$core$async$state_machine__47758__auto__);

(statearr_50504[(1)] = (1));

return statearr_50504;
});
var cljs$core$async$state_machine__47758__auto____1 = (function (state_50471){
while(true){
var ret_value__47759__auto__ = (function (){try{while(true){
var result__47760__auto__ = switch__47757__auto__(state_50471);
if(cljs.core.keyword_identical_QMARK_(result__47760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47760__auto__;
}
break;
}
}catch (e50505){var ex__47761__auto__ = e50505;
var statearr_50506_51453 = state_50471;
(statearr_50506_51453[(2)] = ex__47761__auto__);


if(cljs.core.seq((state_50471[(4)]))){
var statearr_50507_51454 = state_50471;
(statearr_50507_51454[(1)] = cljs.core.first((state_50471[(4)])));

} else {
throw ex__47761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51455 = state_50471;
state_50471 = G__51455;
continue;
} else {
return ret_value__47759__auto__;
}
break;
}
});
cljs$core$async$state_machine__47758__auto__ = function(state_50471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47758__auto____1.call(this,state_50471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47758__auto____0;
cljs$core$async$state_machine__47758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47758__auto____1;
return cljs$core$async$state_machine__47758__auto__;
})()
})();
var state__47944__auto__ = (function (){var statearr_50529 = f__47943__auto__();
(statearr_50529[(6)] = c__47942__auto___51423);

return statearr_50529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47944__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
