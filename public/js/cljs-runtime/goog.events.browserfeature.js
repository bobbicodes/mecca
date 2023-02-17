goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.events.BrowserFeature");
  goog.module.declareLegacyNamespace();
  const googUserAgent = goog.require("goog.userAgent");
  const purify = fn => {
    return {valueOf:fn}.valueOf();
  };
  exports = {HAS_W3C_BUTTON:!googUserAgent.IE || googUserAgent.isDocumentModeOrHigher(9), HAS_W3C_EVENT_SUPPORT:!googUserAgent.IE || googUserAgent.isDocumentModeOrHigher(9), SET_KEY_CODE_TO_PREVENT_DEFAULT:googUserAgent.IE && !googUserAgent.isVersionOrHigher("9"), HAS_NAVIGATOR_ONLINE_PROPERTY:!googUserAgent.WEBKIT || googUserAgent.isVersionOrHigher("528"), HAS_HTML5_NETWORK_EVENT_SUPPORT:googUserAgent.GECKO && googUserAgent.isVersionOrHigher("1.9b") || googUserAgent.IE && googUserAgent.isVersionOrHigher("8") || 
  googUserAgent.OPERA && googUserAgent.isVersionOrHigher("9.5") || googUserAgent.WEBKIT && googUserAgent.isVersionOrHigher("528"), HTML5_NETWORK_EVENTS_FIRE_ON_BODY:googUserAgent.GECKO && !googUserAgent.isVersionOrHigher("8") || googUserAgent.IE && !googUserAgent.isVersionOrHigher("9"), TOUCH_ENABLED:"ontouchstart" in goog.global || !!(goog.global["document"] && document.documentElement && "ontouchstart" in document.documentElement) || !!(goog.global["navigator"] && (goog.global["navigator"]["maxTouchPoints"] || 
  goog.global["navigator"]["msMaxTouchPoints"])), POINTER_EVENTS:"PointerEvent" in goog.global, MSPOINTER_EVENTS:"MSPointerEvent" in goog.global && !!(goog.global["navigator"] && goog.global["navigator"]["msPointerEnabled"]), PASSIVE_EVENTS:purify(function() {
    if (!goog.global.addEventListener || !Object.defineProperty) {
      return false;
    }
    var passive = false;
    var options = Object.defineProperty({}, "passive", {get:function() {
      passive = true;
    }});
    try {
      goog.global.addEventListener("test", goog.nullFunction, options);
      goog.global.removeEventListener("test", goog.nullFunction, options);
    } catch (e) {
    }
    return passive;
  })};
  return exports;
});

//# sourceMappingURL=goog.events.browserfeature.js.map
