// Compiled by ClojureScript 1.10.339 {}
goog.provide('promesa.protocols');
goog.require('cljs.core');

/**
 * A basic future abstraction.
 * @interface
 */
promesa.protocols.IPromise = function(){};

/**
 * Chain a promise.
 */
promesa.protocols._map = (function promesa$protocols$_map(_,callback){
if(((!((_ == null))) && (!((_.promesa$protocols$IPromise$_map$arity$2 == null))))){
return _.promesa$protocols$IPromise$_map$arity$2(_,callback);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (promesa.protocols._map[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,callback);
} else {
var m__4244__auto____$1 = (promesa.protocols._map["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-map",_);
}
}
}
});

/**
 * Chain a promise.
 */
promesa.protocols._bind = (function promesa$protocols$_bind(_,callback){
if(((!((_ == null))) && (!((_.promesa$protocols$IPromise$_bind$arity$2 == null))))){
return _.promesa$protocols$IPromise$_bind$arity$2(_,callback);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (promesa.protocols._bind[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,callback);
} else {
var m__4244__auto____$1 = (promesa.protocols._bind["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-bind",_);
}
}
}
});

/**
 * Catch a error in a promise.
 */
promesa.protocols._catch = (function promesa$protocols$_catch(_,callback){
if(((!((_ == null))) && (!((_.promesa$protocols$IPromise$_catch$arity$2 == null))))){
return _.promesa$protocols$IPromise$_catch$arity$2(_,callback);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (promesa.protocols._catch[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,callback);
} else {
var m__4244__auto____$1 = (promesa.protocols._catch["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-catch",_);
}
}
}
});


/**
 * Additional state/introspection abstraction.
 * @interface
 */
promesa.protocols.IState = function(){};

/**
 * Extract the current value.
 */
promesa.protocols._extract = (function promesa$protocols$_extract(_){
if(((!((_ == null))) && (!((_.promesa$protocols$IState$_extract$arity$1 == null))))){
return _.promesa$protocols$IState$_extract$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (promesa.protocols._extract[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (promesa.protocols._extract["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-extract",_);
}
}
}
});

/**
 * Returns true if a promise is resolved.
 */
promesa.protocols._resolved_QMARK_ = (function promesa$protocols$_resolved_QMARK_(_){
if(((!((_ == null))) && (!((_.promesa$protocols$IState$_resolved_QMARK_$arity$1 == null))))){
return _.promesa$protocols$IState$_resolved_QMARK_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (promesa.protocols._resolved_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (promesa.protocols._resolved_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-resolved?",_);
}
}
}
});

/**
 * Returns true if a promise is rejected.
 */
promesa.protocols._rejected_QMARK_ = (function promesa$protocols$_rejected_QMARK_(_){
if(((!((_ == null))) && (!((_.promesa$protocols$IState$_rejected_QMARK_$arity$1 == null))))){
return _.promesa$protocols$IState$_rejected_QMARK_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (promesa.protocols._rejected_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (promesa.protocols._rejected_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-rejected?",_);
}
}
}
});

/**
 * Retutns true if a promise is pending.
 */
promesa.protocols._pending_QMARK_ = (function promesa$protocols$_pending_QMARK_(_){
if(((!((_ == null))) && (!((_.promesa$protocols$IState$_pending_QMARK_$arity$1 == null))))){
return _.promesa$protocols$IState$_pending_QMARK_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (promesa.protocols._pending_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (promesa.protocols._pending_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-pending?",_);
}
}
}
});


/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

/**
 * Create a promise instance.
 */
promesa.protocols._promise = (function promesa$protocols$_promise(_){
if(((!((_ == null))) && (!((_.promesa$protocols$IPromiseFactory$_promise$arity$1 == null))))){
return _.promesa$protocols$IPromiseFactory$_promise$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (promesa.protocols._promise[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (promesa.protocols._promise["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IPromiseFactory.-promise",_);
}
}
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

promesa.protocols._cancel = (function promesa$protocols$_cancel(_){
if(((!((_ == null))) && (!((_.promesa$protocols$ICancellable$_cancel$arity$1 == null))))){
return _.promesa$protocols$ICancellable$_cancel$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (promesa.protocols._cancel[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (promesa.protocols._cancel["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICancellable.-cancel",_);
}
}
}
});

promesa.protocols._cancelled_QMARK_ = (function promesa$protocols$_cancelled_QMARK_(_){
if(((!((_ == null))) && (!((_.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 == null))))){
return _.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (promesa.protocols._cancelled_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (promesa.protocols._cancelled_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICancellable.-cancelled?",_);
}
}
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

/**
 * Schedule a function to be executed in future.
 */
promesa.protocols._schedule = (function promesa$protocols$_schedule(_,ms,func){
if(((!((_ == null))) && (!((_.promesa$protocols$IScheduler$_schedule$arity$3 == null))))){
return _.promesa$protocols$IScheduler$_schedule$arity$3(_,ms,func);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (promesa.protocols._schedule[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,ms,func);
} else {
var m__4244__auto____$1 = (promesa.protocols._schedule["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,ms,func);
} else {
throw cljs.core.missing_protocol.call(null,"IScheduler.-schedule",_);
}
}
}
});


//# sourceMappingURL=protocols.js.map
