["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/browserfeature.js"],"~:js","goog.provide(\"goog.dom.BrowserFeature\");\ngoog.require(\"goog.userAgent\");\n/** @define {boolean} */ goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS = goog.define(\"goog.dom.ASSUME_NO_OFFSCREEN_CANVAS\", false);\n/** @define {boolean} */ goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS = goog.define(\"goog.dom.ASSUME_OFFSCREEN_CANVAS\", false);\n/**\n * @private\n * @param {string} contextName\n * @return {boolean}\n */\ngoog.dom.BrowserFeature.detectOffscreenCanvas_ = function(contextName) {\n  try {\n    return Boolean((new self.OffscreenCanvas(0, 0)).getContext(contextName));\n  } catch (ex) {\n  }\n  return false;\n};\n/** @const @type {boolean} */ goog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D = !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS && (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS || goog.dom.BrowserFeature.detectOffscreenCanvas_(\"2d\"));\n/** @const @type {boolean} */ goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES = !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9);\n/** @const @type {boolean} */ goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE = !goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) || goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher(\"1.9.1\");\n/** @const @type {boolean} */ goog.dom.BrowserFeature.CAN_USE_INNER_TEXT = goog.userAgent.IE && !goog.userAgent.isVersionOrHigher(\"9\");\n/** @const @type {boolean} */ goog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY = goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT;\n/** @const @type {boolean} */ goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;\n/** @const @type {boolean} */ goog.dom.BrowserFeature.LEGACY_IE_RANGES = goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9);\n","~:source","// Copyright 2010 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Browser capability checks for the dom package.\n *\n */\n\n\ngoog.provide('goog.dom.BrowserFeature');\n\ngoog.require('goog.userAgent');\n\n\n/**\n * @define {boolean} Whether we know at compile time that the browser doesn't\n * support OffscreenCanvas.\n */\ngoog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS =\n    goog.define('goog.dom.ASSUME_NO_OFFSCREEN_CANVAS', false);\n\n/**\n * @define {boolean} Whether we know at compile time that the browser supports\n * all OffscreenCanvas contexts.\n */\n// TODO(user): Eventually this should default to \"FEATURESET_YEAR >= 202X\".\ngoog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS =\n    goog.define('goog.dom.ASSUME_OFFSCREEN_CANVAS', false);\n\n/**\n * Detects if a particular OffscreenCanvas context is supported.\n * @param {string} contextName name of the context to test.\n * @return {boolean} Whether the browser supports this OffscreenCanvas context.\n * @private\n */\ngoog.dom.BrowserFeature.detectOffscreenCanvas_ = function(contextName) {\n  // This code only gets removed because we forced @nosideeffects on\n  // the functions. See: b/138802376\n  try {\n    return Boolean(new self.OffscreenCanvas(0, 0).getContext(contextName));\n  } catch (ex) {\n  }\n  return false;\n};\n\n/**\n * Whether the browser supports OffscreenCanvas 2D context.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D =\n    !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS &&\n    (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS ||\n     goog.dom.BrowserFeature.detectOffscreenCanvas_('2d'));\n\n/**\n * Whether attributes 'name' and 'type' can be added to an element after it's\n * created. False in Internet Explorer prior to version 9.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES =\n    !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9);\n\n/**\n * Whether we can use element.children to access an element's Element\n * children. Available since Gecko 1.9.1, IE 9. (IE<9 also includes comment\n * nodes in the collection.)\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE =\n    !goog.userAgent.GECKO && !goog.userAgent.IE ||\n    goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) ||\n    goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher('1.9.1');\n\n/**\n * Opera, Safari 3, and Internet Explorer 9 all support innerText but they\n * include text nodes in script and style tags. Not document-mode-dependent.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_USE_INNER_TEXT =\n    (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher('9'));\n\n/**\n * MSIE, Opera, and Safari>=4 support element.parentElement to access an\n * element's parent if it is an Element.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY =\n    goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT;\n\n/**\n * Whether NoScope elements need a scoped element written before them in\n * innerHTML.\n * MSDN: http://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx#1\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;\n\n/**\n * Whether we use legacy IE range API.\n * @const {boolean}\n */\ngoog.dom.BrowserFeature.LEGACY_IE_RANGES =\n    goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9);\n","~:compiled-at",1665280832111,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.browserfeature.js\",\n\"lineCount\":24,\n\"mappings\":\"AAoBAA,IAAAC,QAAA,CAAa,yBAAb,CAAA;AAEAD,IAAAE,QAAA,CAAa,gBAAb,CAAA;AAOA,yBAAAF,IAAAG,IAAAC,eAAAC,2BAAA,GACIL,IAAAM,OAAA,CAAY,qCAAZ,EAAmD,KAAnD,CADJ;AAQA,yBAAAN,IAAAG,IAAAC,eAAAG,wBAAA,GACIP,IAAAM,OAAA,CAAY,kCAAZ,EAAgD,KAAhD,CADJ;AASA;;;;;AAAAN,IAAAG,IAAAC,eAAAI,uBAAA,GAAiDC,QAAQ,CAACC,WAAD,CAAc;AAGrE,KAAI;AACF,WAAOC,OAAA,CAAQC,CAAA,IAAIC,IAAAC,gBAAJ,CAAyB,CAAzB,EAA4B,CAA5B,CAAAF,YAAA,CAA0CF,WAA1C,CAAR,CAAP;AADE,GAEF,QAAOK,EAAP,CAAW;;AAEb,SAAO,KAAP;AAPqE,CAAvE;AAcA,8BAAAf,IAAAG,IAAAC,eAAAY,oBAAA,GACI,CAAChB,IAAAG,IAAAC,eAAAC,2BADL,KAEKL,IAAAG,IAAAC,eAAAG,wBAFL,IAGKP,IAAAG,IAAAC,eAAAI,uBAAA,CAA+C,IAA/C,CAHL;AAUA,8BAAAR,IAAAG,IAAAC,eAAAa,gCAAA,GACI,CAACjB,IAAAkB,UAAAC,GADL,IAC0BnB,IAAAkB,UAAAE,uBAAA,CAAsC,CAAtC,CAD1B;AASA,8BAAApB,IAAAG,IAAAC,eAAAiB,2BAAA,GACI,CAACrB,IAAAkB,UAAAI,MADL,IAC6B,CAACtB,IAAAkB,UAAAC,GAD9B,IAEInB,IAAAkB,UAAAC,GAFJ,IAEyBnB,IAAAkB,UAAAE,uBAAA,CAAsC,CAAtC,CAFzB,IAGIpB,IAAAkB,UAAAI,MAHJ,IAG4BtB,IAAAkB,UAAAK,kBAAA,CAAiC,OAAjC,CAH5B;AAUA,8BAAAvB,IAAAG,IAAAC,eAAAoB,mBAAA,GACKxB,IAAAkB,UAAAC,GADL,IAC0B,CAACnB,IAAAkB,UAAAK,kBAAA,CAAiC,GAAjC,CAD3B;AAQA,8BAAAvB,IAAAG,IAAAC,eAAAqB,gCAAA,GACIzB,IAAAkB,UAAAC,GADJ,IACyBnB,IAAAkB,UAAAQ,MADzB,IACiD1B,IAAAkB,UAAAS,OADjD;AASA,8BAAA3B,IAAAG,IAAAC,eAAAwB,gCAAA,GAA0D5B,IAAAkB,UAAAC,GAA1D;AAMA,8BAAAnB,IAAAG,IAAAC,eAAAyB,iBAAA,GACI7B,IAAAkB,UAAAC,GADJ,IACyB,CAACnB,IAAAkB,UAAAE,uBAAA,CAAsC,CAAtC,CAD1B;;\",\n\"sources\":[\"goog/dom/browserfeature.js\"],\n\"sourcesContent\":[\"// Copyright 2010 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Browser capability checks for the dom package.\\n *\\n */\\n\\n\\ngoog.provide('goog.dom.BrowserFeature');\\n\\ngoog.require('goog.userAgent');\\n\\n\\n/**\\n * @define {boolean} Whether we know at compile time that the browser doesn't\\n * support OffscreenCanvas.\\n */\\ngoog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS =\\n    goog.define('goog.dom.ASSUME_NO_OFFSCREEN_CANVAS', false);\\n\\n/**\\n * @define {boolean} Whether we know at compile time that the browser supports\\n * all OffscreenCanvas contexts.\\n */\\n// TODO(user): Eventually this should default to \\\"FEATURESET_YEAR >= 202X\\\".\\ngoog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS =\\n    goog.define('goog.dom.ASSUME_OFFSCREEN_CANVAS', false);\\n\\n/**\\n * Detects if a particular OffscreenCanvas context is supported.\\n * @param {string} contextName name of the context to test.\\n * @return {boolean} Whether the browser supports this OffscreenCanvas context.\\n * @private\\n */\\ngoog.dom.BrowserFeature.detectOffscreenCanvas_ = function(contextName) {\\n  // This code only gets removed because we forced @nosideeffects on\\n  // the functions. See: b/138802376\\n  try {\\n    return Boolean(new self.OffscreenCanvas(0, 0).getContext(contextName));\\n  } catch (ex) {\\n  }\\n  return false;\\n};\\n\\n/**\\n * Whether the browser supports OffscreenCanvas 2D context.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.OFFSCREEN_CANVAS_2D =\\n    !goog.dom.BrowserFeature.ASSUME_NO_OFFSCREEN_CANVAS &&\\n    (goog.dom.BrowserFeature.ASSUME_OFFSCREEN_CANVAS ||\\n     goog.dom.BrowserFeature.detectOffscreenCanvas_('2d'));\\n\\n/**\\n * Whether attributes 'name' and 'type' can be added to an element after it's\\n * created. False in Internet Explorer prior to version 9.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES =\\n    !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9);\\n\\n/**\\n * Whether we can use element.children to access an element's Element\\n * children. Available since Gecko 1.9.1, IE 9. (IE<9 also includes comment\\n * nodes in the collection.)\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE =\\n    !goog.userAgent.GECKO && !goog.userAgent.IE ||\\n    goog.userAgent.IE && goog.userAgent.isDocumentModeOrHigher(9) ||\\n    goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher('1.9.1');\\n\\n/**\\n * Opera, Safari 3, and Internet Explorer 9 all support innerText but they\\n * include text nodes in script and style tags. Not document-mode-dependent.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_USE_INNER_TEXT =\\n    (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher('9'));\\n\\n/**\\n * MSIE, Opera, and Safari>=4 support element.parentElement to access an\\n * element's parent if it is an Element.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.CAN_USE_PARENT_ELEMENT_PROPERTY =\\n    goog.userAgent.IE || goog.userAgent.OPERA || goog.userAgent.WEBKIT;\\n\\n/**\\n * Whether NoScope elements need a scoped element written before them in\\n * innerHTML.\\n * MSDN: http://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx#1\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT = goog.userAgent.IE;\\n\\n/**\\n * Whether we use legacy IE range API.\\n * @const {boolean}\\n */\\ngoog.dom.BrowserFeature.LEGACY_IE_RANGES =\\n    goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9);\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"dom\",\"BrowserFeature\",\"ASSUME_NO_OFFSCREEN_CANVAS\",\"define\",\"ASSUME_OFFSCREEN_CANVAS\",\"detectOffscreenCanvas_\",\"goog.dom.BrowserFeature.detectOffscreenCanvas_\",\"contextName\",\"Boolean\",\"getContext\",\"self\",\"OffscreenCanvas\",\"ex\",\"OFFSCREEN_CANVAS_2D\",\"CAN_ADD_NAME_OR_TYPE_ATTRIBUTES\",\"userAgent\",\"IE\",\"isDocumentModeOrHigher\",\"CAN_USE_CHILDREN_ATTRIBUTE\",\"GECKO\",\"isVersionOrHigher\",\"CAN_USE_INNER_TEXT\",\"CAN_USE_PARENT_ELEMENT_PROPERTY\",\"OPERA\",\"WEBKIT\",\"INNER_HTML_NEEDS_SCOPED_ELEMENT\",\"LEGACY_IE_RANGES\"]\n}\n"]