// Compiled by ClojureScript 1.10.339 {}
goog.provide('promesa.impl');
goog.require('cljs.core');
goog.require('promesa.protocols');
goog.require('org.bluebird');
promesa.impl.Promise = Promise.noConflict();
promesa.impl.Promise.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__8562_SHARP_){
return cb.call(null,p1__8562_SHARP_);
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__8563_SHARP_){
return cb.call(null,p1__8563_SHARP_);
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.caught(((function (it__$1){
return (function (p1__8564_SHARP_){
return cb.call(null,p1__8564_SHARP_);
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IState$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IState$_extract$arity$1 = (function (it){
var it__$1 = this;
if(cljs.core.truth_(it__$1.isRejected())){
return it__$1.reason();
} else {
return it__$1.value();
}
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_resolved_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isFulfilled();
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_rejected_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isRejected();
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_pending_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isPending();
});
goog.object.set(promesa.protocols.IPromise,"_",true);

goog.object.set(promesa.protocols._map,"_",(function (it,cb){
return promesa.protocols._map.call(null,promesa.impl.resolved.call(null,it),cb);
}));

goog.object.set(promesa.protocols._bind,"_",(function (it,cb){
return promesa.protocols._bind.call(null,promesa.impl.resolved.call(null,it),cb);
}));

goog.object.set(promesa.protocols._catch,"_",(function (it,cb){
return promesa.protocols._catch.call(null,promesa.impl.resolved.call(null,it),cb);
}));
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl.Promise.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl.Promise.reject(v);
});
goog.object.set(promesa.protocols.IPromiseFactory,"function",true);

goog.object.set(promesa.protocols._promise,"function",(function (func){
return (new promesa.impl.Promise(func));
}));

promesa.impl.Promise.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
});

Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected.call(null,e__$1);
});

goog.object.set(promesa.protocols.IPromiseFactory,"object",true);

goog.object.set(promesa.protocols._promise,"object",(function (v){
return promesa.impl.resolved.call(null,v);
}));

goog.object.set(promesa.protocols.IPromiseFactory,"number",true);

goog.object.set(promesa.protocols._promise,"number",(function (v){
return promesa.impl.resolved.call(null,v);
}));

goog.object.set(promesa.protocols.IPromiseFactory,"boolean",true);

goog.object.set(promesa.protocols._promise,"boolean",(function (v){
return promesa.impl.resolved.call(null,v);
}));

goog.object.set(promesa.protocols.IPromiseFactory,"string",true);

goog.object.set(promesa.protocols._promise,"string",(function (v){
return promesa.impl.resolved.call(null,v);
}));

goog.object.set(promesa.protocols.IPromiseFactory,"null",true);

goog.object.set(promesa.protocols._promise,"null",(function (v){
return promesa.impl.resolved.call(null,v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return ["#<Promise[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(promesa.protocols._pending_QMARK_.call(null,p))?"~":(cljs.core.truth_(promesa.protocols._rejected_QMARK_.call(null,p))?["error=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.protocols._extract.call(null,p))].join(''):["value=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.protocols._extract.call(null,p))].join('')
))),"]>"].join('');
});
promesa.impl.Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write.call(null,writer,promesa.impl.promise__GT_str.call(null,p__$1));
});

//# sourceMappingURL=impl.js.map
