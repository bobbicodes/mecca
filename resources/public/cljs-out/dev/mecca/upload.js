// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mecca.upload');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('cljs.core.async');
mecca.upload.first_file = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
mecca.upload.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__20266_SHARP_){
return p1__20266_SHARP_.target.result;
}));
mecca.upload.upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.first_file);
mecca.upload.file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.extract_result);
mecca.upload.put_upload = (function mecca$upload$put_upload(e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.upload_reqs,e);
});
var c__14735__auto___20289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___20289){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___20289){
return (function (state_20279){
var state_val_20280 = (state_20279[(1)]);
if((state_val_20280 === (1))){
var state_20279__$1 = state_20279;
var statearr_20281_20290 = state_20279__$1;
(statearr_20281_20290[(2)] = null);

(statearr_20281_20290[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20280 === (2))){
var inst_20269 = (new FileReader());
var state_20279__$1 = (function (){var statearr_20282 = state_20279;
(statearr_20282[(7)] = inst_20269);

return statearr_20282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20279__$1,(4),mecca.upload.upload_reqs);
} else {
if((state_val_20280 === (3))){
var inst_20277 = (state_20279[(2)]);
var state_20279__$1 = state_20279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20279__$1,inst_20277);
} else {
if((state_val_20280 === (4))){
var inst_20269 = (state_20279[(7)]);
var inst_20271 = (state_20279[(2)]);
var inst_20272 = (function (){var reader = inst_20269;
var file = inst_20271;
return ((function (reader,file,inst_20269,inst_20271,state_val_20280,c__14735__auto___20289){
return (function (p1__20267_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.file_reads,p1__20267_SHARP_);
});
;})(reader,file,inst_20269,inst_20271,state_val_20280,c__14735__auto___20289))
})();
var inst_20273 = inst_20269.onload = inst_20272;
var inst_20274 = inst_20269.readAsArrayBuffer(inst_20271);
var state_20279__$1 = (function (){var statearr_20283 = state_20279;
(statearr_20283[(8)] = inst_20273);

(statearr_20283[(9)] = inst_20274);

return statearr_20283;
})();
var statearr_20284_20291 = state_20279__$1;
(statearr_20284_20291[(2)] = null);

(statearr_20284_20291[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__14735__auto___20289))
;
return ((function (switch__14552__auto__,c__14735__auto___20289){
return (function() {
var mecca$upload$state_machine__14553__auto__ = null;
var mecca$upload$state_machine__14553__auto____0 = (function (){
var statearr_20285 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20285[(0)] = mecca$upload$state_machine__14553__auto__);

(statearr_20285[(1)] = (1));

return statearr_20285;
});
var mecca$upload$state_machine__14553__auto____1 = (function (state_20279){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_20279);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e20286){if((e20286 instanceof Object)){
var ex__14556__auto__ = e20286;
var statearr_20287_20292 = state_20279;
(statearr_20287_20292[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20279);

return cljs.core.cst$kw$recur;
} else {
throw e20286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__20293 = state_20279;
state_20279 = G__20293;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$upload$state_machine__14553__auto__ = function(state_20279){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__14553__auto____0.call(this);
case 1:
return mecca$upload$state_machine__14553__auto____1.call(this,state_20279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__14553__auto____0;
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__14553__auto____1;
return mecca$upload$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___20289))
})();
var state__14737__auto__ = (function (){var statearr_20288 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_20288[(6)] = c__14735__auto___20289);

return statearr_20288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___20289))
);

var c__14735__auto___20316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___20316){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___20316){
return (function (state_20306){
var state_val_20307 = (state_20306[(1)]);
if((state_val_20307 === (1))){
var state_20306__$1 = state_20306;
var statearr_20308_20317 = state_20306__$1;
(statearr_20308_20317[(2)] = null);

(statearr_20308_20317[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20307 === (2))){
var inst_20295 = cljs.core.PersistentVector.EMPTY_NODE;
var state_20306__$1 = (function (){var statearr_20309 = state_20306;
(statearr_20309[(7)] = inst_20295);

return statearr_20309;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20306__$1,(4),mecca.upload.file_reads);
} else {
if((state_val_20307 === (3))){
var inst_20304 = (state_20306[(2)]);
var state_20306__$1 = state_20306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20306__$1,inst_20304);
} else {
if((state_val_20307 === (4))){
var inst_20295 = (state_20306[(7)]);
var inst_20297 = (state_20306[(2)]);
var inst_20298 = (new ArrayBuffer(inst_20297));
var inst_20299 = [cljs.core.cst$kw$file_DASH_upload,inst_20298];
var inst_20300 = (new cljs.core.PersistentVector(null,2,(5),inst_20295,inst_20299,null));
var inst_20301 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_20300) : re_frame.core.dispatch.call(null,inst_20300));
var state_20306__$1 = (function (){var statearr_20310 = state_20306;
(statearr_20310[(8)] = inst_20301);

return statearr_20310;
})();
var statearr_20311_20318 = state_20306__$1;
(statearr_20311_20318[(2)] = null);

(statearr_20311_20318[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__14735__auto___20316))
;
return ((function (switch__14552__auto__,c__14735__auto___20316){
return (function() {
var mecca$upload$state_machine__14553__auto__ = null;
var mecca$upload$state_machine__14553__auto____0 = (function (){
var statearr_20312 = [null,null,null,null,null,null,null,null,null];
(statearr_20312[(0)] = mecca$upload$state_machine__14553__auto__);

(statearr_20312[(1)] = (1));

return statearr_20312;
});
var mecca$upload$state_machine__14553__auto____1 = (function (state_20306){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_20306);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e20313){if((e20313 instanceof Object)){
var ex__14556__auto__ = e20313;
var statearr_20314_20319 = state_20306;
(statearr_20314_20319[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20306);

return cljs.core.cst$kw$recur;
} else {
throw e20313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__20320 = state_20306;
state_20306 = G__20320;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$upload$state_machine__14553__auto__ = function(state_20306){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__14553__auto____0.call(this);
case 1:
return mecca$upload$state_machine__14553__auto____1.call(this,state_20306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__14553__auto____0;
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__14553__auto____1;
return mecca$upload$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___20316))
})();
var state__14737__auto__ = (function (){var statearr_20315 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_20315[(6)] = c__14735__auto___20316);

return statearr_20315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___20316))
);

