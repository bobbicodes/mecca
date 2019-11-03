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
mecca.upload.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__20271_SHARP_){
return p1__20271_SHARP_.target.result;
}));
mecca.upload.upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.first_file);
mecca.upload.file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.extract_result);
mecca.upload.put_upload = (function mecca$upload$put_upload(e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.upload_reqs,e);
});
var c__14735__auto___20294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___20294){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___20294){
return (function (state_20284){
var state_val_20285 = (state_20284[(1)]);
if((state_val_20285 === (1))){
var state_20284__$1 = state_20284;
var statearr_20286_20295 = state_20284__$1;
(statearr_20286_20295[(2)] = null);

(statearr_20286_20295[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20285 === (2))){
var inst_20274 = (new FileReader());
var state_20284__$1 = (function (){var statearr_20287 = state_20284;
(statearr_20287[(7)] = inst_20274);

return statearr_20287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20284__$1,(4),mecca.upload.upload_reqs);
} else {
if((state_val_20285 === (3))){
var inst_20282 = (state_20284[(2)]);
var state_20284__$1 = state_20284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20284__$1,inst_20282);
} else {
if((state_val_20285 === (4))){
var inst_20274 = (state_20284[(7)]);
var inst_20276 = (state_20284[(2)]);
var inst_20277 = (function (){var reader = inst_20274;
var file = inst_20276;
return ((function (reader,file,inst_20274,inst_20276,state_val_20285,c__14735__auto___20294){
return (function (p1__20272_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.file_reads,p1__20272_SHARP_);
});
;})(reader,file,inst_20274,inst_20276,state_val_20285,c__14735__auto___20294))
})();
var inst_20278 = inst_20274.onload = inst_20277;
var inst_20279 = inst_20274.readAsArrayBuffer(inst_20276);
var state_20284__$1 = (function (){var statearr_20288 = state_20284;
(statearr_20288[(8)] = inst_20279);

(statearr_20288[(9)] = inst_20278);

return statearr_20288;
})();
var statearr_20289_20296 = state_20284__$1;
(statearr_20289_20296[(2)] = null);

(statearr_20289_20296[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__14735__auto___20294))
;
return ((function (switch__14552__auto__,c__14735__auto___20294){
return (function() {
var mecca$upload$state_machine__14553__auto__ = null;
var mecca$upload$state_machine__14553__auto____0 = (function (){
var statearr_20290 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20290[(0)] = mecca$upload$state_machine__14553__auto__);

(statearr_20290[(1)] = (1));

return statearr_20290;
});
var mecca$upload$state_machine__14553__auto____1 = (function (state_20284){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_20284);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e20291){if((e20291 instanceof Object)){
var ex__14556__auto__ = e20291;
var statearr_20292_20297 = state_20284;
(statearr_20292_20297[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20284);

return cljs.core.cst$kw$recur;
} else {
throw e20291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__20298 = state_20284;
state_20284 = G__20298;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$upload$state_machine__14553__auto__ = function(state_20284){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__14553__auto____0.call(this);
case 1:
return mecca$upload$state_machine__14553__auto____1.call(this,state_20284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__14553__auto____0;
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__14553__auto____1;
return mecca$upload$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___20294))
})();
var state__14737__auto__ = (function (){var statearr_20293 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_20293[(6)] = c__14735__auto___20294);

return statearr_20293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___20294))
);

var c__14735__auto___20321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___20321){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___20321){
return (function (state_20311){
var state_val_20312 = (state_20311[(1)]);
if((state_val_20312 === (1))){
var state_20311__$1 = state_20311;
var statearr_20313_20322 = state_20311__$1;
(statearr_20313_20322[(2)] = null);

(statearr_20313_20322[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20312 === (2))){
var inst_20300 = cljs.core.PersistentVector.EMPTY_NODE;
var state_20311__$1 = (function (){var statearr_20314 = state_20311;
(statearr_20314[(7)] = inst_20300);

return statearr_20314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20311__$1,(4),mecca.upload.file_reads);
} else {
if((state_val_20312 === (3))){
var inst_20309 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20311__$1,inst_20309);
} else {
if((state_val_20312 === (4))){
var inst_20300 = (state_20311[(7)]);
var inst_20302 = (state_20311[(2)]);
var inst_20303 = (new ArrayBuffer(inst_20302));
var inst_20304 = [cljs.core.cst$kw$file_DASH_upload,inst_20303];
var inst_20305 = (new cljs.core.PersistentVector(null,2,(5),inst_20300,inst_20304,null));
var inst_20306 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_20305) : re_frame.core.dispatch.call(null,inst_20305));
var state_20311__$1 = (function (){var statearr_20315 = state_20311;
(statearr_20315[(8)] = inst_20306);

return statearr_20315;
})();
var statearr_20316_20323 = state_20311__$1;
(statearr_20316_20323[(2)] = null);

(statearr_20316_20323[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__14735__auto___20321))
;
return ((function (switch__14552__auto__,c__14735__auto___20321){
return (function() {
var mecca$upload$state_machine__14553__auto__ = null;
var mecca$upload$state_machine__14553__auto____0 = (function (){
var statearr_20317 = [null,null,null,null,null,null,null,null,null];
(statearr_20317[(0)] = mecca$upload$state_machine__14553__auto__);

(statearr_20317[(1)] = (1));

return statearr_20317;
});
var mecca$upload$state_machine__14553__auto____1 = (function (state_20311){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_20311);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e20318){if((e20318 instanceof Object)){
var ex__14556__auto__ = e20318;
var statearr_20319_20324 = state_20311;
(statearr_20319_20324[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20311);

return cljs.core.cst$kw$recur;
} else {
throw e20318;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__20325 = state_20311;
state_20311 = G__20325;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$upload$state_machine__14553__auto__ = function(state_20311){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__14553__auto____0.call(this);
case 1:
return mecca$upload$state_machine__14553__auto____1.call(this,state_20311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__14553__auto____0;
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__14553__auto____1;
return mecca$upload$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___20321))
})();
var state__14737__auto__ = (function (){var statearr_20320 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_20320[(6)] = c__14735__auto___20321);

return statearr_20320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___20321))
);

