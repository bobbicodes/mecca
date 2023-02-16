goog.provide("goog.debug.LogManager");
goog.provide("goog.debug.Loggable");
goog.provide("goog.debug.Logger");
goog.provide("goog.debug.Logger.Level");
goog.require("goog.debug");
goog.require("goog.log");
goog.require("goog.log.Level");
goog.require("goog.log.LogRecord");
goog.require("goog.log.Logger");
goog.debug.Loggable;
goog.debug.Logger = class {
  constructor(name) {
    this.name_ = name;
  }
  getName() {
    return this.name_;
  }
  addHandler(handler) {
    goog.log.addHandler(this, handler);
  }
  removeHandler(handler) {
    return goog.log.removeHandler(this, handler);
  }
  setLevel(level) {
    goog.log.setLevel(this, level);
  }
  getLevel() {
    return goog.log.getLevel(this);
  }
  getEffectiveLevel() {
    return goog.log.getEffectiveLevel(this);
  }
  isLoggable(level) {
    const googLogLevel = goog.log.Level[level.toString()];
    return goog.log.isLoggable(this, googLogLevel);
  }
  log(level, msg, opt_exception) {
    goog.log.log(this, level, msg, opt_exception);
  }
  getLogRecord(level, msg, opt_exception) {
    return goog.log.getLogRecord(this, level, msg, opt_exception);
  }
  shout(msg, opt_exception) {
    if (goog.debug.LOGGING_ENABLED) {
      this.log(goog.debug.Logger.Level.SHOUT, msg, opt_exception);
    }
  }
  severe(msg, opt_exception) {
    if (goog.debug.LOGGING_ENABLED) {
      this.log(goog.debug.Logger.Level.SEVERE, msg, opt_exception);
    }
  }
  warning(msg, opt_exception) {
    if (goog.debug.LOGGING_ENABLED) {
      this.log(goog.debug.Logger.Level.WARNING, msg, opt_exception);
    }
  }
  info(msg, opt_exception) {
    if (goog.debug.LOGGING_ENABLED) {
      this.log(goog.debug.Logger.Level.INFO, msg, opt_exception);
    }
  }
  config(msg, opt_exception) {
    if (goog.debug.LOGGING_ENABLED) {
      this.log(goog.debug.Logger.Level.CONFIG, msg, opt_exception);
    }
  }
  fine(msg, opt_exception) {
    if (goog.debug.LOGGING_ENABLED) {
      this.log(goog.debug.Logger.Level.FINE, msg, opt_exception);
    }
  }
  finer(msg, opt_exception) {
    if (goog.debug.LOGGING_ENABLED) {
      this.log(goog.debug.Logger.Level.FINER, msg, opt_exception);
    }
  }
  finest(msg, opt_exception) {
    if (goog.debug.LOGGING_ENABLED) {
      this.log(goog.debug.Logger.Level.FINEST, msg, opt_exception);
    }
  }
  logRecord(logRecord) {
    goog.log.publishLogRecord(this, logRecord);
  }
};
goog.debug.Logger.Level = goog.log.Level;
goog.debug.Logger.ROOT_LOGGER_NAME = "";
goog.debug.Logger.ENABLE_HIERARCHY = goog.define("goog.debug.Logger.ENABLE_HIERARCHY", true);
goog.debug.Logger.ENABLE_PROFILER_LOGGING = goog.define("goog.debug.Logger.ENABLE_PROFILER_LOGGING", false);
goog.debug.Logger.getLogger = function(name) {
  return goog.debug.LogManager.getLogger(name);
};
goog.debug.Logger.logToProfilers = function(msg) {
  if (goog.debug.Logger.ENABLE_PROFILER_LOGGING) {
    var msWriteProfilerMark = goog.global["msWriteProfilerMark"];
    if (msWriteProfilerMark) {
      msWriteProfilerMark(msg);
      return;
    }
    var console = goog.global["console"];
    if (console && console["timeStamp"]) {
      console["timeStamp"](msg);
    }
  }
};
goog.debug.LogManager = {};
goog.debug.LogManager.loggers_ = {};
goog.debug.LogManager.rootLogger_ = null;
goog.debug.LogManager.initialize = function() {
  if (!goog.debug.LogManager.rootLogger_) {
    goog.debug.LogManager.rootLogger_ = new goog.debug.Logger(goog.debug.Logger.ROOT_LOGGER_NAME);
    goog.debug.LogManager.loggers_[goog.debug.Logger.ROOT_LOGGER_NAME] = goog.debug.LogManager.rootLogger_;
    goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG);
  }
};
goog.debug.LogManager.getLoggers = function() {
  return goog.debug.LogManager.loggers_;
};
goog.debug.LogManager.getRoot = function() {
  goog.debug.LogManager.initialize();
  return goog.debug.LogManager.rootLogger_;
};
goog.debug.LogManager.getLogger = function(name) {
  goog.debug.LogManager.initialize();
  var ret = goog.debug.LogManager.loggers_[name];
  return ret || goog.debug.LogManager.createLogger_(name);
};
goog.debug.LogManager.createFunctionForCatchErrors = function(opt_logger) {
  return function(info) {
    var logger = opt_logger || goog.debug.LogManager.getRoot();
    goog.log.error(logger, "Error: " + info.message + " (" + info.fileName + " @ Line: " + info.line + ")");
  };
};
goog.debug.LogManager.createLogger_ = function(name) {
  var logger = new goog.debug.Logger(name);
  goog.debug.LogManager.loggers_[name] = logger;
  return logger;
};

//# sourceMappingURL=goog.debug.logger.js.map
