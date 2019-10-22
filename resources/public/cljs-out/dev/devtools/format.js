// Compiled by ClojureScript 1.10.339 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._header[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._header["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._has_body[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._body[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._body["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22231 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22231["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22232 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22232["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22233 = temp__5455__auto____$2;
return (o22233["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22234 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22234["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22235 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22235["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22236 = temp__5455__auto____$2;
return (o22236["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22237 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22237["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22238 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22238["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22239 = temp__5455__auto____$2;
return (o22239["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22240 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22240["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22241 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22241["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22242 = temp__5455__auto____$2;
return (o22242["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22243 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22243["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22244 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22244["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22245 = temp__5455__auto____$2;
return (o22245["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22246 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22246["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22247 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22247["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22248 = temp__5455__auto____$2;
return (o22248["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22249 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22249["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22250 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22250["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22251 = temp__5455__auto____$2;
return (o22251["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22253 = arguments.length;
var i__4532__auto___22254 = (0);
while(true){
if((i__4532__auto___22254 < len__4531__auto___22253)){
args__4534__auto__.push((arguments[i__4532__auto___22254]));

var G__22255 = (i__4532__auto___22254 + (1));
i__4532__auto___22254 = G__22255;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq22252){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22252));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22257 = arguments.length;
var i__4532__auto___22258 = (0);
while(true){
if((i__4532__auto___22258 < len__4531__auto___22257)){
args__4534__auto__.push((arguments[i__4532__auto___22258]));

var G__22259 = (i__4532__auto___22258 + (1));
i__4532__auto___22258 = G__22259;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq22256){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22256));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22261 = arguments.length;
var i__4532__auto___22262 = (0);
while(true){
if((i__4532__auto___22262 < len__4531__auto___22261)){
args__4534__auto__.push((arguments[i__4532__auto___22262]));

var G__22263 = (i__4532__auto___22262 + (1));
i__4532__auto___22262 = G__22263;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq22260){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22260));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22265 = arguments.length;
var i__4532__auto___22266 = (0);
while(true){
if((i__4532__auto___22266 < len__4531__auto___22265)){
args__4534__auto__.push((arguments[i__4532__auto___22266]));

var G__22267 = (i__4532__auto___22266 + (1));
i__4532__auto___22266 = G__22267;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq22264){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22264));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22269 = arguments.length;
var i__4532__auto___22270 = (0);
while(true){
if((i__4532__auto___22270 < len__4531__auto___22269)){
args__4534__auto__.push((arguments[i__4532__auto___22270]));

var G__22271 = (i__4532__auto___22270 + (1));
i__4532__auto___22270 = G__22271;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq22268){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22268));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22273 = arguments.length;
var i__4532__auto___22274 = (0);
while(true){
if((i__4532__auto___22274 < len__4531__auto___22273)){
args__4534__auto__.push((arguments[i__4532__auto___22274]));

var G__22275 = (i__4532__auto___22274 + (1));
i__4532__auto___22274 = G__22275;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq22272){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22272));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22277 = arguments.length;
var i__4532__auto___22278 = (0);
while(true){
if((i__4532__auto___22278 < len__4531__auto___22277)){
args__4534__auto__.push((arguments[i__4532__auto___22278]));

var G__22279 = (i__4532__auto___22278 + (1));
i__4532__auto___22278 = G__22279;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq22276){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22276));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22287 = arguments.length;
var i__4532__auto___22288 = (0);
while(true){
if((i__4532__auto___22288 < len__4531__auto___22287)){
args__4534__auto__.push((arguments[i__4532__auto___22288]));

var G__22289 = (i__4532__auto___22288 + (1));
i__4532__auto___22288 = G__22289;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__22283){
var vec__22284 = p__22283;
var state_override = cljs.core.nth.call(null,vec__22284,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__22284,state_override){
return (function (p1__22280_SHARP_){
return cljs.core.merge.call(null,p1__22280_SHARP_,state_override);
});})(vec__22284,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq22281){
var G__22282 = cljs.core.first.call(null,seq22281);
var seq22281__$1 = cljs.core.next.call(null,seq22281);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22282,seq22281__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22291 = arguments.length;
var i__4532__auto___22292 = (0);
while(true){
if((i__4532__auto___22292 < len__4531__auto___22291)){
args__4534__auto__.push((arguments[i__4532__auto___22292]));

var G__22293 = (i__4532__auto___22292 + (1));
i__4532__auto___22292 = G__22293;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq22290){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22290));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22296 = arguments.length;
var i__4532__auto___22297 = (0);
while(true){
if((i__4532__auto___22297 < len__4531__auto___22296)){
args__4534__auto__.push((arguments[i__4532__auto___22297]));

var G__22298 = (i__4532__auto___22297 + (1));
i__4532__auto___22297 = G__22298;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq22294){
var G__22295 = cljs.core.first.call(null,seq22294);
var seq22294__$1 = cljs.core.next.call(null,seq22294);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22295,seq22294__$1);
});


//# sourceMappingURL=format.js.map
