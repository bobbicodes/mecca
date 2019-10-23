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
mecca.upload.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__20950_SHARP_){
return p1__20950_SHARP_.target.result;
}));
mecca.upload.upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.first_file);
mecca.upload.file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.extract_result);
mecca.upload.put_upload = (function mecca$upload$put_upload(e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.upload_reqs,e);
});
var c__14735__auto___20973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___20973){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___20973){
return (function (state_20963){
var state_val_20964 = (state_20963[(1)]);
if((state_val_20964 === (1))){
var state_20963__$1 = state_20963;
var statearr_20965_20974 = state_20963__$1;
(statearr_20965_20974[(2)] = null);

(statearr_20965_20974[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20964 === (2))){
var inst_20953 = (new FileReader());
var state_20963__$1 = (function (){var statearr_20966 = state_20963;
(statearr_20966[(7)] = inst_20953);

return statearr_20966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20963__$1,(4),mecca.upload.upload_reqs);
} else {
if((state_val_20964 === (3))){
var inst_20961 = (state_20963[(2)]);
var state_20963__$1 = state_20963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20963__$1,inst_20961);
} else {
if((state_val_20964 === (4))){
var inst_20953 = (state_20963[(7)]);
var inst_20955 = (state_20963[(2)]);
var inst_20956 = (function (){var reader = inst_20953;
var file = inst_20955;
return ((function (reader,file,inst_20953,inst_20955,state_val_20964,c__14735__auto___20973){
return (function (p1__20951_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.file_reads,p1__20951_SHARP_);
});
;})(reader,file,inst_20953,inst_20955,state_val_20964,c__14735__auto___20973))
})();
var inst_20957 = inst_20953.onload = inst_20956;
var inst_20958 = inst_20953.readAsArrayBuffer(inst_20955);
var state_20963__$1 = (function (){var statearr_20967 = state_20963;
(statearr_20967[(8)] = inst_20957);

(statearr_20967[(9)] = inst_20958);

return statearr_20967;
})();
var statearr_20968_20975 = state_20963__$1;
(statearr_20968_20975[(2)] = null);

(statearr_20968_20975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__14735__auto___20973))
;
return ((function (switch__14552__auto__,c__14735__auto___20973){
return (function() {
var mecca$upload$state_machine__14553__auto__ = null;
var mecca$upload$state_machine__14553__auto____0 = (function (){
var statearr_20969 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20969[(0)] = mecca$upload$state_machine__14553__auto__);

(statearr_20969[(1)] = (1));

return statearr_20969;
});
var mecca$upload$state_machine__14553__auto____1 = (function (state_20963){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_20963);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e20970){if((e20970 instanceof Object)){
var ex__14556__auto__ = e20970;
var statearr_20971_20976 = state_20963;
(statearr_20971_20976[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20963);

return cljs.core.cst$kw$recur;
} else {
throw e20970;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__20977 = state_20963;
state_20963 = G__20977;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$upload$state_machine__14553__auto__ = function(state_20963){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__14553__auto____0.call(this);
case 1:
return mecca$upload$state_machine__14553__auto____1.call(this,state_20963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__14553__auto____0;
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__14553__auto____1;
return mecca$upload$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___20973))
})();
var state__14737__auto__ = (function (){var statearr_20972 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_20972[(6)] = c__14735__auto___20973);

return statearr_20972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___20973))
);

var c__14735__auto___20999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14735__auto___20999){
return (function (){
var f__14736__auto__ = (function (){var switch__14552__auto__ = ((function (c__14735__auto___20999){
return (function (state_20989){
var state_val_20990 = (state_20989[(1)]);
if((state_val_20990 === (1))){
var state_20989__$1 = state_20989;
var statearr_20991_21000 = state_20989__$1;
(statearr_20991_21000[(2)] = null);

(statearr_20991_21000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20990 === (2))){
var inst_20979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20980 = [cljs.core.cst$kw$file_DASH_upload];
var inst_20981 = (new cljs.core.PersistentVector(null,1,(5),inst_20979,inst_20980,null));
var state_20989__$1 = (function (){var statearr_20992 = state_20989;
(statearr_20992[(7)] = inst_20981);

return statearr_20992;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20989__$1,(4),mecca.upload.file_reads);
} else {
if((state_val_20990 === (3))){
var inst_20987 = (state_20989[(2)]);
var state_20989__$1 = state_20989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20989__$1,inst_20987);
} else {
if((state_val_20990 === (4))){
var inst_20981 = (state_20989[(7)]);
var inst_20983 = (state_20989[(2)]);
var inst_20984 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$2(inst_20981,inst_20983) : re_frame.core.dispatch.call(null,inst_20981,inst_20983));
var state_20989__$1 = (function (){var statearr_20993 = state_20989;
(statearr_20993[(8)] = inst_20984);

return statearr_20993;
})();
var statearr_20994_21001 = state_20989__$1;
(statearr_20994_21001[(2)] = null);

(statearr_20994_21001[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__14735__auto___20999))
;
return ((function (switch__14552__auto__,c__14735__auto___20999){
return (function() {
var mecca$upload$state_machine__14553__auto__ = null;
var mecca$upload$state_machine__14553__auto____0 = (function (){
var statearr_20995 = [null,null,null,null,null,null,null,null,null];
(statearr_20995[(0)] = mecca$upload$state_machine__14553__auto__);

(statearr_20995[(1)] = (1));

return statearr_20995;
});
var mecca$upload$state_machine__14553__auto____1 = (function (state_20989){
while(true){
var ret_value__14554__auto__ = (function (){try{while(true){
var result__14555__auto__ = switch__14552__auto__(state_20989);
if(cljs.core.keyword_identical_QMARK_(result__14555__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14555__auto__;
}
break;
}
}catch (e20996){if((e20996 instanceof Object)){
var ex__14556__auto__ = e20996;
var statearr_20997_21002 = state_20989;
(statearr_20997_21002[(5)] = ex__14556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20989);

return cljs.core.cst$kw$recur;
} else {
throw e20996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14554__auto__,cljs.core.cst$kw$recur)){
var G__21003 = state_20989;
state_20989 = G__21003;
continue;
} else {
return ret_value__14554__auto__;
}
break;
}
});
mecca$upload$state_machine__14553__auto__ = function(state_20989){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__14553__auto____0.call(this);
case 1:
return mecca$upload$state_machine__14553__auto____1.call(this,state_20989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__14553__auto____0;
mecca$upload$state_machine__14553__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__14553__auto____1;
return mecca$upload$state_machine__14553__auto__;
})()
;})(switch__14552__auto__,c__14735__auto___20999))
})();
var state__14737__auto__ = (function (){var statearr_20998 = (f__14736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14736__auto__.cljs$core$IFn$_invoke$arity$0() : f__14736__auto__.call(null));
(statearr_20998[(6)] = c__14735__auto___20999);

return statearr_20998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14737__auto__);
});})(c__14735__auto___20999))
);

