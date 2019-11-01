// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.castle');
goog.require('cljs.core');
goog.require('cljs.core.constants');
mecca.castle.mortar_row = (function mecca$castle$mortar_row(x,y,width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + (width * (8))),cljs.core.cst$kw$y1,(y + 3.5),cljs.core.cst$kw$y2,(y + 3.5),cljs.core.cst$kw$stroke,"black"], null)], null);
});
mecca.castle.brick_row = (function mecca$castle$brick_row(x,y,width,offset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + ((8) * width)),cljs.core.cst$kw$y1,(1.5 + y),cljs.core.cst$kw$y2,(1.5 + y),cljs.core.cst$kw$stroke_DASH_width,(3),cljs.core.cst$kw$stroke_DASH_dasharray,"7 1",cljs.core.cst$kw$stroke_DASH_dashoffset,offset,cljs.core.cst$kw$stroke,"#c74a0a"], null)], null);
});
mecca.castle.mortar_columns = (function mecca$castle$mortar_columns(x,y,width,offset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + ((8) * width)),cljs.core.cst$kw$y1,(1.5 + y),cljs.core.cst$kw$y2,(1.5 + y),cljs.core.cst$kw$stroke_DASH_width,(3),cljs.core.cst$kw$stroke_DASH_dasharray,"1 7",cljs.core.cst$kw$stroke_DASH_dashoffset,offset,cljs.core.cst$kw$stroke,"black"], null)], null);
});
mecca.castle.brick_row_pair = (function mecca$castle$brick_row_pair(x,y,width){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row,x,y,width,(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.mortar_columns,x,y,width,(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.mortar_row,x,y,width], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row,x,(y + (4)),width,(4)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.mortar_columns,x,(y + (4)),width,(5)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.mortar_row,x,(y + (4)),width], null)], null);
});
mecca.castle.castle_arch = (function mecca$castle$castle_arch(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,(function (){var iter__4324__auto__ = (function mecca$castle$castle_arch_$_iter__20425(s__20426){
return (new cljs.core.LazySeq(null,(function (){
var s__20426__$1 = s__20426;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20426__$1);
if(temp__5457__auto__){
var s__20426__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20426__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20426__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20428 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20427 = (0);
while(true){
if((i__20427 < size__4323__auto__)){
var vec__20429 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20427);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20429,(0),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20429,(1),null);
cljs.core.chunk_append(b__20428,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,(x + ((40) - dx)),cljs.core.cst$kw$x2,((x + (40)) + dx),cljs.core.cst$kw$y1,(48.5 + dy),cljs.core.cst$kw$y2,(48.5 + dy),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,2.1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dy,dx], null)], null)));

var G__20435 = (i__20427 + (1));
i__20427 = G__20435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20428),mecca$castle$castle_arch_$_iter__20425(cljs.core.chunk_rest(s__20426__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20428),null);
}
} else {
var vec__20432 = cljs.core.first(s__20426__$2);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20432,(0),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20432,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,(x + ((40) - dx)),cljs.core.cst$kw$x2,((x + (40)) + dx),cljs.core.cst$kw$y1,(48.5 + dy),cljs.core.cst$kw$y2,(48.5 + dy),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,2.1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dy,dx], null)], null)),mecca$castle$castle_arch_$_iter__20425(cljs.core.rest(s__20426__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [16.5,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [17.5,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [18.5,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.5,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [21.5,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [22.5,(8)], null)], null));
})()], null);
});
mecca.castle.castle_door = (function mecca$castle$castle_door(x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$width,(16),cljs.core.cst$kw$height,(24),cljs.core.cst$kw$fill,"black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.castle_arch,(x - (32)),y], null)], null);
});
mecca.castle.castle_roof = (function mecca$castle$castle_roof(x,y,width){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + width),cljs.core.cst$kw$y1,(y + 0.5),cljs.core.cst$kw$y2,(y + 0.5),cljs.core.cst$kw$stroke_DASH_width,(1),cljs.core.cst$kw$stroke_DASH_dasharray,"9 7",cljs.core.cst$kw$stroke_DASH_dashoffset,(-11),cljs.core.cst$kw$stroke,"#fbbbaf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + width),cljs.core.cst$kw$y1,(y + (4)),cljs.core.cst$kw$y2,(y + (4)),cljs.core.cst$kw$stroke_DASH_width,(6),cljs.core.cst$kw$stroke_DASH_dasharray,"1 7",cljs.core.cst$kw$stroke_DASH_dashoffset,(5),cljs.core.cst$kw$stroke,"#fbbbaf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + width),cljs.core.cst$kw$y1,(y + (4)),cljs.core.cst$kw$y2,(y + (4)),cljs.core.cst$kw$stroke_DASH_width,(6),cljs.core.cst$kw$stroke_DASH_dasharray,"7 9",cljs.core.cst$kw$stroke_DASH_dashoffset,(4),cljs.core.cst$kw$stroke,"#c74a0a"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + width),cljs.core.cst$kw$y1,(y + 7.5),cljs.core.cst$kw$y2,(y + 7.5),cljs.core.cst$kw$stroke_DASH_width,(1),cljs.core.cst$kw$stroke_DASH_dasharray,"9 7",cljs.core.cst$kw$stroke_DASH_dashoffset,(-11),cljs.core.cst$kw$stroke,"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x1,x,cljs.core.cst$kw$x2,(x + width),cljs.core.cst$kw$y1,(y + 7.5),cljs.core.cst$kw$y2,(y + 7.5),cljs.core.cst$kw$stroke_DASH_width,(1),cljs.core.cst$kw$stroke_DASH_dasharray,"9 7",cljs.core.cst$kw$stroke_DASH_dashoffset,(13),cljs.core.cst$kw$stroke,"#fbbbaf"], null)], null)], null);
});
mecca.castle.brick_face = (function mecca$castle$brick_face(x,y,width){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transform,"scale (0.15)",cljs.core.cst$kw$opacity,(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.castle_roof,x,y,((8) * width)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row_pair,x,(y + (8)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row_pair,x,(y + (16)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row_pair,x,(y + (24)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row_pair,x,(y + (32)),width], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.brick_row_pair,x,(y + (40)),width], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,(10)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mecca.castle.castle_door,((32) + x),(y + (24))], null):null)], null);
});
