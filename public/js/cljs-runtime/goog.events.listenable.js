goog.provide("goog.events.Listenable");
goog.provide("goog.events.ListenableKey");
goog.require("goog.events.EventId");
goog.requireType("goog.events.EventLike");
goog.events.Listenable = function() {
};
goog.events.Listenable.IMPLEMENTED_BY_PROP = "closure_listenable_" + (Math.random() * 1e6 | 0);
goog.events.Listenable.addImplementation = function(cls) {
  cls.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = true;
};
goog.events.Listenable.isImplementedBy = function(obj) {
  return !!(obj && obj[goog.events.Listenable.IMPLEMENTED_BY_PROP]);
};
goog.events.Listenable.prototype.listen = function(type, listener, opt_useCapture, opt_listenerScope) {
};
goog.events.Listenable.prototype.listenOnce = function(type, listener, opt_useCapture, opt_listenerScope) {
};
goog.events.Listenable.prototype.unlisten = function(type, listener, opt_useCapture, opt_listenerScope) {
};
goog.events.Listenable.prototype.unlistenByKey = function(key) {
};
goog.events.Listenable.prototype.dispatchEvent = function(e) {
};
goog.events.Listenable.prototype.removeAllListeners = function(opt_type) {
};
goog.events.Listenable.prototype.getParentEventTarget = function() {
};
goog.events.Listenable.prototype.fireListeners = function(type, capture, eventObject) {
};
goog.events.Listenable.prototype.getListeners = function(type, capture) {
};
goog.events.Listenable.prototype.getListener = function(type, listener, capture, opt_listenerScope) {
};
goog.events.Listenable.prototype.hasListener = function(opt_type, opt_capture) {
};
goog.events.ListenableKey = function() {
};
goog.events.ListenableKey.counter_ = 0;
goog.events.ListenableKey.reserveKey = function() {
  return ++goog.events.ListenableKey.counter_;
};
goog.events.ListenableKey.prototype.src;
goog.events.ListenableKey.prototype.type;
goog.events.ListenableKey.prototype.listener;
goog.events.ListenableKey.prototype.capture;
goog.events.ListenableKey.prototype.handler;
goog.events.ListenableKey.prototype.key;

//# sourceMappingURL=goog.events.listenable.js.map
