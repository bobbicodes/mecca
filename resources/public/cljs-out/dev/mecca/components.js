// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mecca.music');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
mecca.components.scale_picker = (function mecca$components$scale_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Scale: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state)),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mecca.music.app_state,cljs.core.assoc,cljs.core.cst$kw$scale,e.target.value);
})], null),(function (){var iter__4324__auto__ = (function mecca$components$scale_picker_$_iter__12251(s__12252){
return (new cljs.core.LazySeq(null,(function (){
var s__12252__$1 = s__12252;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12252__$1);
if(temp__5457__auto__){
var s__12252__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12252__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12252__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12254 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12253 = (0);
while(true){
if((i__12253 < size__4323__auto__)){
var scale = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12253);
cljs.core.chunk_append(b__12254,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,scale], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scale], null)));

var G__12255 = (i__12253 + (1));
i__12253 = G__12255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12254),mecca$components$scale_picker_$_iter__12251(cljs.core.chunk_rest(s__12252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12254),null);
}
} else {
var scale = cljs.core.first(s__12252__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,scale], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,scale], null)),mecca$components$scale_picker_$_iter__12251(cljs.core.rest(s__12252__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.keys(mecca.music.scales));
})()], null)], null);
});
mecca.components.key_picker = (function mecca$components$key_picker(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Key: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state)),cljs.core.cst$kw$on_DASH_change,(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mecca.music.app_state,cljs.core.assoc,cljs.core.cst$kw$key,e.target.value);
})], null),(function (){var iter__4324__auto__ = (function mecca$components$key_picker_$_iter__12256(s__12257){
return (new cljs.core.LazySeq(null,(function (){
var s__12257__$1 = s__12257;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__12257__$1);
if(temp__5457__auto__){
var s__12257__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12257__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__12257__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__12259 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__12258 = (0);
while(true){
if((i__12258 < size__4323__auto__)){
var note = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__12258);
cljs.core.chunk_append(b__12259,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,note], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,note], null)));

var G__12260 = (i__12258 + (1));
i__12258 = G__12260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12259),mecca$components$key_picker_$_iter__12256(cljs.core.chunk_rest(s__12257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12259),null);
}
} else {
var note = cljs.core.first(s__12257__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,note], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,note], null)),mecca$components$key_picker_$_iter__12256(cljs.core.rest(s__12257__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(mecca.music.notes);
})()], null)], null);
});
mecca.components.octave_input = (function mecca$components$octave_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Octave: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"6%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$octave.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state)),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mecca.music.app_state,cljs.core.assoc,cljs.core.cst$kw$octave,e.target.value);
})], null)], null)], null);
});
mecca.components.tempo_input = (function mecca$components$tempo_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label," Tempo: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"8%",cljs.core.cst$kw$background_DASH_color,"lightgray"], null),cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$tempo.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mecca.music.app_state)),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mecca.music.app_state,cljs.core.assoc,cljs.core.cst$kw$tempo,e.target.value);
})], null)], null)], null);
});
