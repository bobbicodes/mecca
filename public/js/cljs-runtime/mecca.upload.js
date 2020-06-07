goog.provide('mecca.upload');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
mecca.upload.first_file = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
(target.value = "");

return file;
}));
mecca.upload.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__42696_SHARP_){
return p1__42696_SHARP_.target.result;
}));
mecca.upload.upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.first_file);
mecca.upload.file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),mecca.upload.extract_result);
mecca.upload.put_upload = (function mecca$upload$put_upload(e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.upload_reqs,e);
});
var c__34784__auto___42741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_42709){
var state_val_42710 = (state_42709[(1)]);
if((state_val_42710 === (1))){
var state_42709__$1 = state_42709;
var statearr_42711_42742 = state_42709__$1;
(statearr_42711_42742[(2)] = null);

(statearr_42711_42742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42710 === (2))){
var inst_42699 = (new FileReader());
var state_42709__$1 = (function (){var statearr_42712 = state_42709;
(statearr_42712[(7)] = inst_42699);

return statearr_42712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42709__$1,(4),mecca.upload.upload_reqs);
} else {
if((state_val_42710 === (3))){
var inst_42707 = (state_42709[(2)]);
var state_42709__$1 = state_42709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42709__$1,inst_42707);
} else {
if((state_val_42710 === (4))){
var inst_42699 = (state_42709[(7)]);
var inst_42701 = (state_42709[(2)]);
var inst_42702 = (function (){var reader = inst_42699;
var file = inst_42701;
return (function (p1__42697_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mecca.upload.file_reads,p1__42697_SHARP_);
});
})();
var inst_42703 = (inst_42699.onload = inst_42702);
var inst_42704 = inst_42699.readAsArrayBuffer(inst_42701);
var state_42709__$1 = (function (){var statearr_42713 = state_42709;
(statearr_42713[(8)] = inst_42703);

(statearr_42713[(9)] = inst_42704);

return statearr_42713;
})();
var statearr_42714_42743 = state_42709__$1;
(statearr_42714_42743[(2)] = null);

(statearr_42714_42743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var mecca$upload$state_machine__34463__auto__ = null;
var mecca$upload$state_machine__34463__auto____0 = (function (){
var statearr_42715 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42715[(0)] = mecca$upload$state_machine__34463__auto__);

(statearr_42715[(1)] = (1));

return statearr_42715;
});
var mecca$upload$state_machine__34463__auto____1 = (function (state_42709){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_42709);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e42716){if((e42716 instanceof Object)){
var ex__34466__auto__ = e42716;
var statearr_42717_42749 = state_42709;
(statearr_42717_42749[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42716;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42750 = state_42709;
state_42709 = G__42750;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
mecca$upload$state_machine__34463__auto__ = function(state_42709){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__34463__auto____0.call(this);
case 1:
return mecca$upload$state_machine__34463__auto____1.call(this,state_42709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__34463__auto____0;
mecca$upload$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__34463__auto____1;
return mecca$upload$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_42718 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_42718[(6)] = c__34784__auto___42741);

return statearr_42718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));

var c__34784__auto___42751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34785__auto__ = (function (){var switch__34462__auto__ = (function (state_42731){
var state_val_42732 = (state_42731[(1)]);
if((state_val_42732 === (1))){
var state_42731__$1 = state_42731;
var statearr_42733_42752 = state_42731__$1;
(statearr_42733_42752[(2)] = null);

(statearr_42733_42752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42732 === (2))){
var inst_42720 = cljs.core.PersistentVector.EMPTY_NODE;
var state_42731__$1 = (function (){var statearr_42734 = state_42731;
(statearr_42734[(7)] = inst_42720);

return statearr_42734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42731__$1,(4),mecca.upload.file_reads);
} else {
if((state_val_42732 === (3))){
var inst_42729 = (state_42731[(2)]);
var state_42731__$1 = state_42731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42731__$1,inst_42729);
} else {
if((state_val_42732 === (4))){
var inst_42720 = (state_42731[(7)]);
var inst_42722 = (state_42731[(2)]);
var inst_42723 = (new ArrayBuffer(inst_42722));
var inst_42724 = [new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),inst_42723];
var inst_42725 = (new cljs.core.PersistentVector(null,2,(5),inst_42720,inst_42724,null));
var inst_42726 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_42725) : re_frame.core.dispatch.call(null,inst_42725));
var state_42731__$1 = (function (){var statearr_42735 = state_42731;
(statearr_42735[(8)] = inst_42726);

return statearr_42735;
})();
var statearr_42736_42753 = state_42731__$1;
(statearr_42736_42753[(2)] = null);

(statearr_42736_42753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var mecca$upload$state_machine__34463__auto__ = null;
var mecca$upload$state_machine__34463__auto____0 = (function (){
var statearr_42737 = [null,null,null,null,null,null,null,null,null];
(statearr_42737[(0)] = mecca$upload$state_machine__34463__auto__);

(statearr_42737[(1)] = (1));

return statearr_42737;
});
var mecca$upload$state_machine__34463__auto____1 = (function (state_42731){
while(true){
var ret_value__34464__auto__ = (function (){try{while(true){
var result__34465__auto__ = switch__34462__auto__(state_42731);
if(cljs.core.keyword_identical_QMARK_(result__34465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34465__auto__;
}
break;
}
}catch (e42738){if((e42738 instanceof Object)){
var ex__34466__auto__ = e42738;
var statearr_42739_42754 = state_42731;
(statearr_42739_42754[(5)] = ex__34466__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42755 = state_42731;
state_42731 = G__42755;
continue;
} else {
return ret_value__34464__auto__;
}
break;
}
});
mecca$upload$state_machine__34463__auto__ = function(state_42731){
switch(arguments.length){
case 0:
return mecca$upload$state_machine__34463__auto____0.call(this);
case 1:
return mecca$upload$state_machine__34463__auto____1.call(this,state_42731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$upload$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$upload$state_machine__34463__auto____0;
mecca$upload$state_machine__34463__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$upload$state_machine__34463__auto____1;
return mecca$upload$state_machine__34463__auto__;
})()
})();
var state__34786__auto__ = (function (){var statearr_42740 = (f__34785__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34785__auto__.cljs$core$IFn$_invoke$arity$0() : f__34785__auto__.call(null));
(statearr_42740[(6)] = c__34784__auto___42751);

return statearr_42740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34786__auto__);
}));


//# sourceMappingURL=mecca.upload.js.map
