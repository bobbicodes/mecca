goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.debug.Error");
  goog.module.declareLegacyNamespace();
  function DebugError(opt_msg) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DebugError);
    } else {
      const stack = (new Error).stack;
      if (stack) {
        this.stack = stack;
      }
    }
    if (opt_msg) {
      this.message = String(opt_msg);
    }
    this.reportErrorToServer = true;
  }
  goog.inherits(DebugError, Error);
  DebugError.prototype.name = "CustomError";
  exports = DebugError;
  return exports;
});

//# sourceMappingURL=goog.debug.error.js.map
