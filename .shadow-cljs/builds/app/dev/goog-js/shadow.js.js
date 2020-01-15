["^ ","~:resource-id",["~:shadow.build.classpath/resource","shadow/js.js"],"~:js","goog.provide(\"shadow.js\");\n/** @dict */ shadow.js.files = {};\n/** @dict */ shadow.js.nativeRequires = {};\n/** @define {string} */ shadow.js.NODE_ENV = goog.define(\"shadow.js.NODE_ENV\", \"development\");\nshadow.js.requireStack = [];\nshadow.js.add_native_require = function(name, obj) {\n  shadow.js.nativeRequires[name] = obj;\n};\n/**\n * @return {ShadowJS}\n */\nshadow.js.jsRequire = function(name, opts) {\n  var nativeObj = shadow.js.nativeRequires[name];\n  if (nativeObj !== undefined) {\n    return nativeObj;\n  }\n  try {\n    if (goog.DEBUG) {\n      if (name instanceof String && name.indexOf(\"/\") != -1) {\n        console.warn(\"Tried to dynamically require '\" + name + \"' from '\" + shadow.js.requireStack[shadow.js.requireStack.length - 1] + \"'. This is not supported and may cause issues.\");\n      }\n    }\n    shadow.js.requireStack.push(name);\n    var module = shadow.js.files[name];\n    var moduleFn = shadow$provide[name];\n    if (module === undefined) {\n      if (moduleFn === undefined) {\n        throw \"Module not provided: \" + name;\n      }\n      module = {};\n      module[\"exports\"] = {};\n      shadow.js.files[name] = module;\n    }\n    if (moduleFn) {\n      delete shadow$provide[name];\n      try {\n        moduleFn.call(module, goog.global, shadow.js.jsRequire, module, module[\"exports\"]);\n      } catch (e) {\n        console.warn(\"shadow-cljs - failed to load\", name);\n        throw e;\n      }\n      if (opts) {\n        var globals = opts[\"globals\"];\n        if (globals) {\n          for (var i = 0; i < globals.length; i++) {\n            window[globals[i]] = module[\"exports\"];\n          }\n        }\n      }\n    }\n  } finally {\n    shadow.js.requireStack.pop();\n  }\n  return module[\"exports\"];\n};\n/** @dict */ shadow.js.modules = {};\nshadow.js.require = function(name, opts) {\n  return shadow.js.jsRequire(name, opts);\n};\n","~:source","goog.provide(\"shadow.js\");\n\n/**\n * @dict\n */\nshadow.js.files = {};\n\n/**\n * @dict\n */\nshadow.js.nativeRequires = {};\n\n/**\n * @define {string}\n * all occurences should be removed by NodeEnvInline but for safety we keep it arround\n */\nshadow.js.NODE_ENV = goog.define(\"shadow.js.NODE_ENV\", \"development\");\n\nshadow.js.requireStack = [];\n\nshadow.js.add_native_require = function(name, obj) {\n  shadow.js.nativeRequires[name] = obj;\n};\n\n/**\n * @return {ShadowJS}\n */\nshadow.js.jsRequire = function(name, opts) {\n  var nativeObj = shadow.js.nativeRequires[name];\n  if (nativeObj !== undefined) {\n    return nativeObj;\n  }\n\n  try {\n    if (goog.DEBUG) {\n      if (name instanceof String && name.indexOf(\"/\") != -1) {\n        console.warn(\n          \"Tried to dynamically require '\" +\n            name +\n            \"' from '\" +\n            shadow.js.requireStack[shadow.js.requireStack.length - 1] +\n            \"'. This is not supported and may cause issues.\"\n        );\n      }\n    }\n\n    shadow.js.requireStack.push(name);\n\n    var module = shadow.js.files[name];\n    var moduleFn = shadow$provide[name];\n\n    // module must be created before calling moduleFn due to circular deps\n    if (module === undefined) {\n      if (moduleFn === undefined) {\n        throw (\"Module not provided: \" + name);\n      }\n      module = {};\n      module[\"exports\"] = {};\n      shadow.js.files[name] = module;\n    }\n\n    if (moduleFn) {\n      delete shadow$provide[name];\n\n      try {\n        moduleFn.call(\n          module,\n          goog.global,\n          shadow.js.jsRequire,\n          module,\n          module[\"exports\"]\n        );\n      } catch (e) {\n        console.warn(\"shadow-cljs - failed to load\", name);\n        throw e;\n      }\n\n      if (opts) {\n        var globals = opts[\"globals\"];\n        if (globals) {\n          for (var i = 0; i < globals.length; i++) {\n            window[globals[i]] = module[\"exports\"];\n          }\n        }\n      }\n    }\n  } finally {\n    shadow.js.requireStack.pop();\n  }\n\n  return module[\"exports\"];\n};\n\n/**\n * @dict\n */\nshadow.js.modules = {};\n\nshadow.js.require = function(name, opts) {\n  return shadow.js.jsRequire(name, opts);\n  /*\n  var mod = shadow.js.modules[name];\n\n  if (typeof(mod) == 'undefined') {\n    var exports = shadow.js.jsRequire(name, opts);\n\n    if (exports && exports[\"__esModule\"]) {\n        mod = exports;\n    } else {\n        mod = {\"default\":exports};\n    }\n\n    shadow.js.modules[name] = mod;\n  }\n\n  return mod;\n  */\n};\n","~:compiled-at",1579073929527,"~:source-map-json","{\n\"version\":3,\n\"file\":\"shadow.js.js\",\n\"lineCount\":60,\n\"mappings\":\"AAAAA,IAAAC,QAAA,CAAa,WAAb,CAAA;AAKA,aAAAC,MAAAC,GAAAC,MAAA,GAAkB,EAAlB;AAKA,aAAAF,MAAAC,GAAAE,eAAA,GAA2B,EAA3B;AAMA,wBAAAH,MAAAC,GAAAG,SAAA,GAAqBN,IAAAO,OAAA,CAAY,oBAAZ,EAAkC,aAAlC,CAArB;AAEAL,MAAAC,GAAAK,aAAA,GAAyB,EAAzB;AAEAN,MAAAC,GAAAM,mBAAA,GAA+BC,QAAQ,CAACC,IAAD,EAAOC,GAAP,CAAY;AACjDV,QAAAC,GAAAE,eAAA,CAAyBM,IAAzB,CAAA,GAAiCC,GAAjC;AADiD,CAAnD;AAOA;;;AAAAV,MAAAC,GAAAU,UAAA,GAAsBC,QAAQ,CAACH,IAAD,EAAOI,IAAP,CAAa;AACzC,MAAIC,YAAYd,MAAAC,GAAAE,eAAA,CAAyBM,IAAzB,CAAhB;AACA,MAAIK,SAAJ,KAAkBC,SAAlB;AACE,WAAOD,SAAP;AADF;AAIA,KAAI;AACF,QAAIhB,IAAAkB,MAAJ;AACE,UAAIP,IAAJ,YAAoBQ,MAApB,IAA8BR,IAAAS,QAAA,CAAa,GAAb,CAA9B,IAAoD,EAApD;AACEC,eAAAC,KAAA,CACE,gCADF,GAEIX,IAFJ,GAGI,UAHJ,GAIIT,MAAAC,GAAAK,aAAA,CAAuBN,MAAAC,GAAAK,aAAAe,OAAvB,GAAuD,CAAvD,CAJJ,GAKI,gDALJ,CAAA;AADF;AADF;AAYArB,UAAAC,GAAAK,aAAAgB,KAAA,CAA4Bb,IAA5B,CAAA;AAEA,QAAIc,SAASvB,MAAAC,GAAAC,MAAA,CAAgBO,IAAhB,CAAb;AACA,QAAIe,WAAWC,cAAA,CAAehB,IAAf,CAAf;AAGA,QAAIc,MAAJ,KAAeR,SAAf,CAA0B;AACxB,UAAIS,QAAJ,KAAiBT,SAAjB;AACE,cAAO,uBAAP,GAAiCN,IAAjC;AADF;AAGAc,YAAA,GAAS,EAAT;AACAA,YAAA,CAAO,SAAP,CAAA,GAAoB,EAApB;AACAvB,YAAAC,GAAAC,MAAA,CAAgBO,IAAhB,CAAA,GAAwBc,MAAxB;AANwB;AAS1B,QAAIC,QAAJ,CAAc;AACZ,aAAOC,cAAA,CAAehB,IAAf,CAAP;AAEA,SAAI;AACFe,gBAAAE,KAAA,CACEH,MADF,EAEEzB,IAAA6B,OAFF,EAGE3B,MAAAC,GAAAU,UAHF,EAIEY,MAJF,EAKEA,MAAA,CAAO,SAAP,CALF,CAAA;AADE,OAQF,QAAOK,CAAP,CAAU;AACVT,eAAAC,KAAA,CAAa,8BAAb,EAA6CX,IAA7C,CAAA;AACA,cAAMmB,CAAN;AAFU;AAKZ,UAAIf,IAAJ,CAAU;AACR,YAAIgB,UAAUhB,IAAA,CAAK,SAAL,CAAd;AACA,YAAIgB,OAAJ;AACE,eAAK,IAAIC,IAAI,CAAb,EAAgBA,CAAhB,GAAoBD,OAAAR,OAApB,EAAoCS,CAAA,EAApC;AACEC,kBAAA,CAAOF,OAAA,CAAQC,CAAR,CAAP,CAAA,GAAqBP,MAAA,CAAO,SAAP,CAArB;AADF;AADF;AAFQ;AAhBE;AA5BZ,GAAJ,QAqDU;AACRvB,UAAAC,GAAAK,aAAA0B,IAAA,EAAA;AADQ;AAIV,SAAOT,MAAA,CAAO,SAAP,CAAP;AA/DyC,CAA3C;AAqEA,aAAAvB,MAAAC,GAAAgC,QAAA,GAAoB,EAApB;AAEAjC,MAAAC,GAAAiC,QAAA,GAAoBC,QAAQ,CAAC1B,IAAD,EAAOI,IAAP,CAAa;AACvC,SAAOb,MAAAC,GAAAU,UAAA,CAAoBF,IAApB,EAA0BI,IAA1B,CAAP;AADuC,CAAzC;;\",\n\"sources\":[\"shadow/js.js\"],\n\"sourcesContent\":[\"goog.provide(\\\"shadow.js\\\");\\n\\n/**\\n * @dict\\n */\\nshadow.js.files = {};\\n\\n/**\\n * @dict\\n */\\nshadow.js.nativeRequires = {};\\n\\n/**\\n * @define {string}\\n * all occurences should be removed by NodeEnvInline but for safety we keep it arround\\n */\\nshadow.js.NODE_ENV = goog.define(\\\"shadow.js.NODE_ENV\\\", \\\"development\\\");\\n\\nshadow.js.requireStack = [];\\n\\nshadow.js.add_native_require = function(name, obj) {\\n  shadow.js.nativeRequires[name] = obj;\\n};\\n\\n/**\\n * @return {ShadowJS}\\n */\\nshadow.js.jsRequire = function(name, opts) {\\n  var nativeObj = shadow.js.nativeRequires[name];\\n  if (nativeObj !== undefined) {\\n    return nativeObj;\\n  }\\n\\n  try {\\n    if (goog.DEBUG) {\\n      if (name instanceof String && name.indexOf(\\\"/\\\") != -1) {\\n        console.warn(\\n          \\\"Tried to dynamically require '\\\" +\\n            name +\\n            \\\"' from '\\\" +\\n            shadow.js.requireStack[shadow.js.requireStack.length - 1] +\\n            \\\"'. This is not supported and may cause issues.\\\"\\n        );\\n      }\\n    }\\n\\n    shadow.js.requireStack.push(name);\\n\\n    var module = shadow.js.files[name];\\n    var moduleFn = shadow$provide[name];\\n\\n    // module must be created before calling moduleFn due to circular deps\\n    if (module === undefined) {\\n      if (moduleFn === undefined) {\\n        throw (\\\"Module not provided: \\\" + name);\\n      }\\n      module = {};\\n      module[\\\"exports\\\"] = {};\\n      shadow.js.files[name] = module;\\n    }\\n\\n    if (moduleFn) {\\n      delete shadow$provide[name];\\n\\n      try {\\n        moduleFn.call(\\n          module,\\n          goog.global,\\n          shadow.js.jsRequire,\\n          module,\\n          module[\\\"exports\\\"]\\n        );\\n      } catch (e) {\\n        console.warn(\\\"shadow-cljs - failed to load\\\", name);\\n        throw e;\\n      }\\n\\n      if (opts) {\\n        var globals = opts[\\\"globals\\\"];\\n        if (globals) {\\n          for (var i = 0; i < globals.length; i++) {\\n            window[globals[i]] = module[\\\"exports\\\"];\\n          }\\n        }\\n      }\\n    }\\n  } finally {\\n    shadow.js.requireStack.pop();\\n  }\\n\\n  return module[\\\"exports\\\"];\\n};\\n\\n/**\\n * @dict\\n */\\nshadow.js.modules = {};\\n\\nshadow.js.require = function(name, opts) {\\n  return shadow.js.jsRequire(name, opts);\\n  /*\\n  var mod = shadow.js.modules[name];\\n\\n  if (typeof(mod) == 'undefined') {\\n    var exports = shadow.js.jsRequire(name, opts);\\n\\n    if (exports && exports[\\\"__esModule\\\"]) {\\n        mod = exports;\\n    } else {\\n        mod = {\\\"default\\\":exports};\\n    }\\n\\n    shadow.js.modules[name] = mod;\\n  }\\n\\n  return mod;\\n  */\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"shadow\",\"js\",\"files\",\"nativeRequires\",\"NODE_ENV\",\"define\",\"requireStack\",\"add_native_require\",\"shadow.js.add_native_require\",\"name\",\"obj\",\"jsRequire\",\"shadow.js.jsRequire\",\"opts\",\"nativeObj\",\"undefined\",\"DEBUG\",\"String\",\"indexOf\",\"console\",\"warn\",\"length\",\"push\",\"module\",\"moduleFn\",\"shadow$provide\",\"call\",\"global\",\"e\",\"globals\",\"i\",\"window\",\"pop\",\"modules\",\"require\",\"shadow.js.require\"]\n}\n"]