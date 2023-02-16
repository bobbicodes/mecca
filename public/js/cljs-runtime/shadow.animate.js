goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_54059 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_54059(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_54060 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_54060(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_54061 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_54061(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_54062 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_54062(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_54063 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_54063(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53650){
var vec__53651 = p__53650;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53651,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53651,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__4221__auto__ = delay;
if(cljs.core.truth_(and__4221__auto__)){
return (delay > (0));
} else {
return and__4221__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_54064 = (function (animator){
var x__4521__auto__ = (((animator == null))?null:animator);
var m__4522__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4522__auto__.call(null,animator));
} else {
var m__4519__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4519__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_54064(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_54065 = (function (animator){
var x__4521__auto__ = (((animator == null))?null:animator);
var m__4522__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4522__auto__.call(null,animator));
} else {
var m__4519__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4519__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_54065(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_54066 = (function (animator){
var x__4521__auto__ = (((animator == null))?null:animator);
var m__4522__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4522__auto__.call(null,animator));
} else {
var m__4519__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4519__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_54066(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_54067 = (function (animator){
var x__4521__auto__ = (((animator == null))?null:animator);
var m__4522__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4522__auto__.call(null,animator));
} else {
var m__4519__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4519__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_54067(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4706__auto__ = self__.items.length;
var i__48997__auto__ = (0);
while(true){
if((i__48997__auto__ < n__4706__auto__)){
var map__53765_54068 = (self__.items[i__48997__auto__]);
var map__53765_54069__$1 = cljs.core.__destructure_map(map__53765_54068);
var el_54070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53765_54069__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_54071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53765_54069__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_54070,from_54071);

var G__54072 = (i__48997__auto__ + (1));
i__48997__auto__ = G__54072;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4706__auto__ = self__.items.length;
var i__48997__auto__ = (0);
while(true){
if((i__48997__auto__ < n__4706__auto__)){
var map__53769_54073 = (self__.items[i__48997__auto__]);
var map__53769_54074__$1 = cljs.core.__destructure_map(map__53769_54073);
var el_54075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53769_54074__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_54076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53769_54074__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_54077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53769_54074__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_54076["transition"] = transition_54077);

goog.style.setStyle(el_54075,to_54076);

var G__54078 = (i__48997__auto__ + (1));
i__48997__auto__ = G__54078;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4706__auto__ = self__.items.length;
var i__48997__auto__ = (0);
while(true){
if((i__48997__auto__ < n__4706__auto__)){
var map__53770_54079 = (self__.items[i__48997__auto__]);
var map__53770_54080__$1 = cljs.core.__destructure_map(map__53770_54079);
var el_54081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53770_54080__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_54082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53770_54080__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_54082["transition"] = null);

goog.style.setStyle(el_54081,toggles_54082);

var G__54083 = (i__48997__auto__ + (1));
i__48997__auto__ = G__54083;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k53772,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__53776 = k53772;
var G__53776__$1 = (((G__53776 instanceof cljs.core.Keyword))?G__53776.fqn:null);
switch (G__53776__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53772,else__4475__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__53777){
var vec__53778 = p__53777;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53778,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53778,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53771){
var self__ = this;
var G__53771__$1 = this;
return (new cljs.core.RecordIter((0),G__53771__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53773,other53774){
var self__ = this;
var this53773__$1 = this;
return (((!((other53774 == null)))) && ((((this53773__$1.constructor === other53774.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53773__$1.el,other53774.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53773__$1.from,other53774.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53773__$1.to,other53774.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53773__$1.toggles,other53774.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53773__$1.transition,other53774.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53773__$1.__extmap,other53774.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k53772){
var self__ = this;
var this__4479__auto____$1 = this;
var G__53817 = k53772;
var G__53817__$1 = (((G__53817 instanceof cljs.core.Keyword))?G__53817.fqn:null);
switch (G__53817__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53772);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__53771){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__53818 = cljs.core.keyword_identical_QMARK_;
var expr__53819 = k__4481__auto__;
if(cljs.core.truth_((pred__53818.cljs$core$IFn$_invoke$arity$2 ? pred__53818.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__53819) : pred__53818.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__53819)))){
return (new shadow.animate.AnimationStep(G__53771,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53818.cljs$core$IFn$_invoke$arity$2 ? pred__53818.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__53819) : pred__53818.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__53819)))){
return (new shadow.animate.AnimationStep(self__.el,G__53771,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53818.cljs$core$IFn$_invoke$arity$2 ? pred__53818.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__53819) : pred__53818.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__53819)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__53771,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53818.cljs$core$IFn$_invoke$arity$2 ? pred__53818.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__53819) : pred__53818.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__53819)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__53771,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53818.cljs$core$IFn$_invoke$arity$2 ? pred__53818.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__53819) : pred__53818.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__53819)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__53771,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__53771),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__53771){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__53771,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__53775){
var extmap__4512__auto__ = (function (){var G__53868 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53775,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__53775)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53868);
} else {
return G__53868;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__53775),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__53775),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__53775),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__53775),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__53775),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$animate$setup_$_iter__53901(s__53902){
return (new cljs.core.LazySeq(null,(function (){
var s__53902__$1 = s__53902;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53902__$1);
if(temp__5753__auto__){
var s__53902__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53902__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__53902__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__53904 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__53903 = (0);
while(true){
if((i__53903 < size__4621__auto__)){
var vec__53905 = cljs.core._nth(c__4620__auto__,i__53903);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53905,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53905,(1),null);
cljs.core.chunk_append(b__53904,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__54101 = (i__53903 + (1));
i__53903 = G__54101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53904),shadow$animate$setup_$_iter__53901(cljs.core.chunk_rest(s__53902__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53904),null);
}
} else {
var vec__53942 = cljs.core.first(s__53902__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53942,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53942,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__53901(cljs.core.rest(s__53902__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__49039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__49040__auto__ = (function (){var switch__48931__auto__ = (function (state_53952){
var state_val_53953 = (state_53952[(1)]);
if((state_val_53953 === (1))){
var inst_53946 = shadow.animate.get_duration(animator);
var inst_53947 = cljs.core.async.timeout(inst_53946);
var state_53952__$1 = state_53952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53952__$1,(2),inst_53947);
} else {
if((state_val_53953 === (2))){
var inst_53949 = (state_53952[(2)]);
var inst_53950 = shadow.animate.finish_BANG_(animator);
var state_53952__$1 = (function (){var statearr_53954 = state_53952;
(statearr_53954[(7)] = inst_53950);

(statearr_53954[(8)] = inst_53949);

return statearr_53954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53952__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__48932__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__48932__auto____0 = (function (){
var statearr_53955 = [null,null,null,null,null,null,null,null,null];
(statearr_53955[(0)] = shadow$animate$continue_BANG__$_state_machine__48932__auto__);

(statearr_53955[(1)] = (1));

return statearr_53955;
});
var shadow$animate$continue_BANG__$_state_machine__48932__auto____1 = (function (state_53952){
while(true){
var ret_value__48933__auto__ = (function (){try{while(true){
var result__48934__auto__ = switch__48931__auto__(state_53952);
if(cljs.core.keyword_identical_QMARK_(result__48934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48934__auto__;
}
break;
}
}catch (e53956){var ex__48935__auto__ = e53956;
var statearr_53957_54115 = state_53952;
(statearr_53957_54115[(2)] = ex__48935__auto__);


if(cljs.core.seq((state_53952[(4)]))){
var statearr_53958_54117 = state_53952;
(statearr_53958_54117[(1)] = cljs.core.first((state_53952[(4)])));

} else {
throw ex__48935__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54118 = state_53952;
state_53952 = G__54118;
continue;
} else {
return ret_value__48933__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__48932__auto__ = function(state_53952){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__48932__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__48932__auto____1.call(this,state_53952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__48932__auto____0;
shadow$animate$continue_BANG__$_state_machine__48932__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__48932__auto____1;
return shadow$animate$continue_BANG__$_state_machine__48932__auto__;
})()
})();
var state__49041__auto__ = (function (){var statearr_53959 = f__49040__auto__();
(statearr_53959[(6)] = c__49039__auto__);

return statearr_53959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__49041__auto__);
}));

return c__49039__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__53961 = arguments.length;
switch (G__53961) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate53962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate53962 = (function (attr,from,to,timing,delay,meta53963){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta53963 = meta53963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate53962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53964,meta53963__$1){
var self__ = this;
var _53964__$1 = this;
return (new shadow.animate.t_shadow$animate53962(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta53963__$1));
}));

(shadow.animate.t_shadow$animate53962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53964){
var self__ = this;
var _53964__$1 = this;
return self__.meta53963;
}));

(shadow.animate.t_shadow$animate53962.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate53962.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate53962.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate53962.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate53962.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate53962.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate53962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta53963","meta53963",-1498200821,null)], null);
}));

(shadow.animate.t_shadow$animate53962.cljs$lang$type = true);

(shadow.animate.t_shadow$animate53962.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate53962");

(shadow.animate.t_shadow$animate53962.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.animate/t_shadow$animate53962");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate53962.
 */
shadow.animate.__GT_t_shadow$animate53962 = (function shadow$animate$__GT_t_shadow$animate53962(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta53963){
return (new shadow.animate.t_shadow$animate53962(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta53963));
});

}

return (new shadow.animate.t_shadow$animate53962(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate53986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate53986 = (function (attr,from,to,meta53987){
this.attr = attr;
this.from = from;
this.to = to;
this.meta53987 = meta53987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate53986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53988,meta53987__$1){
var self__ = this;
var _53988__$1 = this;
return (new shadow.animate.t_shadow$animate53986(self__.attr,self__.from,self__.to,meta53987__$1));
}));

(shadow.animate.t_shadow$animate53986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53988){
var self__ = this;
var _53988__$1 = this;
return self__.meta53987;
}));

(shadow.animate.t_shadow$animate53986.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate53986.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate53986.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate53986.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate53986.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate53986.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate53986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta53987","meta53987",1028507569,null)], null);
}));

(shadow.animate.t_shadow$animate53986.cljs$lang$type = true);

(shadow.animate.t_shadow$animate53986.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate53986");

(shadow.animate.t_shadow$animate53986.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.animate/t_shadow$animate53986");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate53986.
 */
shadow.animate.__GT_t_shadow$animate53986 = (function shadow$animate$toggle_$___GT_t_shadow$animate53986(attr__$1,from__$1,to__$1,meta53987){
return (new shadow.animate.t_shadow$animate53986(attr__$1,from__$1,to__$1,meta53987));
});

}

return (new shadow.animate.t_shadow$animate53986(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__53995 = arguments.length;
switch (G__53995) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate53996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate53996 = (function (attrs,meta53997){
this.attrs = attrs;
this.meta53997 = meta53997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate53996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53998,meta53997__$1){
var self__ = this;
var _53998__$1 = this;
return (new shadow.animate.t_shadow$animate53996(self__.attrs,meta53997__$1));
}));

(shadow.animate.t_shadow$animate53996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53998){
var self__ = this;
var _53998__$1 = this;
return self__.meta53997;
}));

(shadow.animate.t_shadow$animate53996.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate53996.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate53996.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate53996.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate53996.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate53996.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate53996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta53997","meta53997",-334644079,null)], null);
}));

(shadow.animate.t_shadow$animate53996.cljs$lang$type = true);

(shadow.animate.t_shadow$animate53996.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate53996");

(shadow.animate.t_shadow$animate53996.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.animate/t_shadow$animate53996");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate53996.
 */
shadow.animate.__GT_t_shadow$animate53996 = (function shadow$animate$__GT_t_shadow$animate53996(attrs__$1,meta53997){
return (new shadow.animate.t_shadow$animate53996(attrs__$1,meta53997));
});

}

return (new shadow.animate.t_shadow$animate53996(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate54004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate54004 = (function (attr,meta54005){
this.attr = attr;
this.meta54005 = meta54005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate54004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54006,meta54005__$1){
var self__ = this;
var _54006__$1 = this;
return (new shadow.animate.t_shadow$animate54004(self__.attr,meta54005__$1));
}));

(shadow.animate.t_shadow$animate54004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54006){
var self__ = this;
var _54006__$1 = this;
return self__.meta54005;
}));

(shadow.animate.t_shadow$animate54004.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate54004.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate54004.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate54004.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate54004.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate54004.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate54004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta54005","meta54005",646824048,null)], null);
}));

(shadow.animate.t_shadow$animate54004.cljs$lang$type = true);

(shadow.animate.t_shadow$animate54004.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate54004");

(shadow.animate.t_shadow$animate54004.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.animate/t_shadow$animate54004");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate54004.
 */
shadow.animate.__GT_t_shadow$animate54004 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate54004(attr__$1,meta54005){
return (new shadow.animate.t_shadow$animate54004(attr__$1,meta54005));
});

}

return (new shadow.animate.t_shadow$animate54004(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4835__auto__ = [];
var len__4829__auto___54155 = arguments.length;
var i__4830__auto___54156 = (0);
while(true){
if((i__4830__auto___54156 < len__4829__auto___54155)){
args__4835__auto__.push((arguments[i__4830__auto___54156]));

var G__54163 = (i__4830__auto___54156 + (1));
i__4830__auto___54156 = G__54163;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5751__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var adef = temp__5751__auto__;
var G__54174 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__54175 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__54176 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__54177 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__54178 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__54179 = cljs.core.rest(transitions__$1);
to = G__54174;
from = G__54175;
toggles = G__54176;
timings = G__54177;
delays = G__54178;
transitions__$1 = G__54179;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate54030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate54030 = (function (transitions,to,from,toggles,timings,delays,temp__5751__auto__,meta54031){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5751__auto__ = temp__5751__auto__;
this.meta54031 = meta54031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate54030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_54032,meta54031__$1){
var self__ = this;
var _54032__$1 = this;
return (new shadow.animate.t_shadow$animate54030(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5751__auto__,meta54031__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate54030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_54032){
var self__ = this;
var _54032__$1 = this;
return self__.meta54031;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate54030.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate54030.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate54030.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate54030.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate54030.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate54030.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate54030.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5751__auto__","temp__5751__auto__",870218099,null),new cljs.core.Symbol(null,"meta54031","meta54031",1222818235,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate54030.cljs$lang$type = true);

(shadow.animate.t_shadow$animate54030.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate54030");

(shadow.animate.t_shadow$animate54030.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.animate/t_shadow$animate54030");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

/**
 * Positional factory function for shadow.animate/t_shadow$animate54030.
 */
shadow.animate.__GT_t_shadow$animate54030 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function shadow$animate$__GT_t_shadow$animate54030(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5751__auto____$1,meta54031){
return (new shadow.animate.t_shadow$animate54030(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5751__auto____$1,meta54031));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
;

}

return (new shadow.animate.t_shadow$animate54030(transitions__$1,to,from,toggles,timings,delays,temp__5751__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq54009){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54009));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__54038 = arguments.length;
switch (G__54038) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__54040 = arguments.length;
switch (G__54040) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__54044 = arguments.length;
switch (G__54044) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate54045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate54045 = (function (from,to,timing,delay,meta54046){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta54046 = meta54046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate54045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54047,meta54046__$1){
var self__ = this;
var _54047__$1 = this;
return (new shadow.animate.t_shadow$animate54045(self__.from,self__.to,self__.timing,self__.delay,meta54046__$1));
}));

(shadow.animate.t_shadow$animate54045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54047){
var self__ = this;
var _54047__$1 = this;
return self__.meta54046;
}));

(shadow.animate.t_shadow$animate54045.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate54045.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate54045.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate54045.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate54045.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate54045.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate54045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta54046","meta54046",1921648978,null)], null);
}));

(shadow.animate.t_shadow$animate54045.cljs$lang$type = true);

(shadow.animate.t_shadow$animate54045.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate54045");

(shadow.animate.t_shadow$animate54045.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.animate/t_shadow$animate54045");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate54045.
 */
shadow.animate.__GT_t_shadow$animate54045 = (function shadow$animate$__GT_t_shadow$animate54045(from__$1,to__$1,timing__$1,delay__$1,meta54046){
return (new shadow.animate.t_shadow$animate54045(from__$1,to__$1,timing__$1,delay__$1,meta54046));
});

}

return (new shadow.animate.t_shadow$animate54045(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__54052 = arguments.length;
switch (G__54052) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate54053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate54053 = (function (from,to,timing,delay,meta54054){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta54054 = meta54054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate54053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54055,meta54054__$1){
var self__ = this;
var _54055__$1 = this;
return (new shadow.animate.t_shadow$animate54053(self__.from,self__.to,self__.timing,self__.delay,meta54054__$1));
}));

(shadow.animate.t_shadow$animate54053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54055){
var self__ = this;
var _54055__$1 = this;
return self__.meta54054;
}));

(shadow.animate.t_shadow$animate54053.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate54053.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate54053.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate54053.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate54053.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate54053.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate54053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta54054","meta54054",1534230831,null)], null);
}));

(shadow.animate.t_shadow$animate54053.cljs$lang$type = true);

(shadow.animate.t_shadow$animate54053.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate54053");

(shadow.animate.t_shadow$animate54053.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.animate/t_shadow$animate54053");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate54053.
 */
shadow.animate.__GT_t_shadow$animate54053 = (function shadow$animate$__GT_t_shadow$animate54053(from__$1,to__$1,timing__$1,delay__$1,meta54054){
return (new shadow.animate.t_shadow$animate54053(from__$1,to__$1,timing__$1,delay__$1,meta54054));
});

}

return (new shadow.animate.t_shadow$animate54053(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
