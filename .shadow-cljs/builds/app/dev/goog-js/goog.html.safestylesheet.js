["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/html/safestylesheet.js"],"~:js","goog.provide(\"goog.html.SafeStyleSheet\");\ngoog.require(\"goog.array\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.html.SafeStyle\");\ngoog.require(\"goog.object\");\ngoog.require(\"goog.string.Const\");\ngoog.require(\"goog.string.TypedString\");\ngoog.require(\"goog.string.internal\");\n/**\n * @final\n * @struct\n * @constructor\n * @implements {goog.string.TypedString}\n */\ngoog.html.SafeStyleSheet = function() {\n  /** @private @type {string} */ this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = \"\";\n  /** @private @const @type {!Object} */ this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;\n};\n/** @const @override */ goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;\n/** @private @const @type {!Object} */ goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};\n/**\n * @param {string} selector\n * @param {(!goog.html.SafeStyle.PropertyMap|!goog.html.SafeStyle)} style\n * @return {!goog.html.SafeStyleSheet}\n * @throws {Error}\n */\ngoog.html.SafeStyleSheet.createRule = function(selector, style) {\n  if (goog.string.internal.contains(selector, \"\\x3c\")) {\n    throw new Error(\"Selector does not allow '\\x3c', got: \" + selector);\n  }\n  var selectorToCheck = selector.replace(/('|\")((?!\\1)[^\\r\\n\\f\\\\]|\\\\[\\s\\S])*\\1/g, \"\");\n  if (!/^[-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|]+$/.test(selectorToCheck)) {\n    throw new Error(\"Selector allows only [-_a-zA-Z0-9#.:* ,\\x3e+~[\\\\]()\\x3d^$|] and \" + \"strings, got: \" + selector);\n  }\n  if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(selectorToCheck)) {\n    throw new Error(\"() and [] in selector must be balanced, got: \" + selector);\n  }\n  if (!(style instanceof goog.html.SafeStyle)) {\n    style = goog.html.SafeStyle.create(style);\n  }\n  var styleSheet = selector + \"{\" + goog.html.SafeStyle.unwrap(style).replace(/</g, \"\\\\3C \") + \"}\";\n  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);\n};\n/**\n * @private\n * @param {string} s\n * @return {boolean}\n */\ngoog.html.SafeStyleSheet.hasBalancedBrackets_ = function(s) {\n  var brackets = {\"(\":\")\", \"[\":\"]\"};\n  var expectedBrackets = [];\n  for (var i = 0; i < s.length; i++) {\n    var ch = s[i];\n    if (brackets[ch]) {\n      expectedBrackets.push(brackets[ch]);\n    } else {\n      if (goog.object.contains(brackets, ch)) {\n        if (expectedBrackets.pop() != ch) {\n          return false;\n        }\n      }\n    }\n  }\n  return expectedBrackets.length == 0;\n};\n/**\n * @param {...(!goog.html.SafeStyleSheet|!Array<!goog.html.SafeStyleSheet>)} var_args\n * @return {!goog.html.SafeStyleSheet}\n */\ngoog.html.SafeStyleSheet.concat = function(var_args) {\n  var result = \"\";\n  /**\n   * @param {(!goog.html.SafeStyleSheet|!Array<!goog.html.SafeStyleSheet>)} argument\n   */\n  var addArgument = function(argument) {\n    if (goog.isArray(argument)) {\n      goog.array.forEach(argument, addArgument);\n    } else {\n      result += goog.html.SafeStyleSheet.unwrap(argument);\n    }\n  };\n  goog.array.forEach(arguments, addArgument);\n  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(result);\n};\n/**\n * @param {!goog.string.Const} styleSheet\n * @return {!goog.html.SafeStyleSheet}\n */\ngoog.html.SafeStyleSheet.fromConstant = function(styleSheet) {\n  var styleSheetString = goog.string.Const.unwrap(styleSheet);\n  if (styleSheetString.length === 0) {\n    return goog.html.SafeStyleSheet.EMPTY;\n  }\n  goog.asserts.assert(!goog.string.internal.contains(styleSheetString, \"\\x3c\"), \"Forbidden '\\x3c' character in style sheet string: \" + styleSheetString);\n  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheetString);\n};\n/** @override */ goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {\n  return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;\n};\nif (goog.DEBUG) {\n  /** @override */ goog.html.SafeStyleSheet.prototype.toString = function() {\n    return \"SafeStyleSheet{\" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + \"}\";\n  };\n}\n/**\n * @param {!goog.html.SafeStyleSheet} safeStyleSheet\n * @return {string}\n */\ngoog.html.SafeStyleSheet.unwrap = function(safeStyleSheet) {\n  if (safeStyleSheet instanceof goog.html.SafeStyleSheet && safeStyleSheet.constructor === goog.html.SafeStyleSheet && safeStyleSheet.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {\n    return safeStyleSheet.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;\n  } else {\n    goog.asserts.fail(\"expected object of type SafeStyleSheet, got '\" + safeStyleSheet + \"' of type \" + goog.typeOf(safeStyleSheet));\n    return \"type_error:SafeStyleSheet\";\n  }\n};\n/**\n * @package\n * @param {string} styleSheet\n * @return {!goog.html.SafeStyleSheet}\n */\ngoog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(styleSheet) {\n  return (new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(styleSheet);\n};\n/**\n * @private\n * @param {string} styleSheet\n * @return {!goog.html.SafeStyleSheet}\n */\ngoog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(styleSheet) {\n  this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = styleSheet;\n  return this;\n};\n/** @const @type {!goog.html.SafeStyleSheet} */ goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(\"\");\n","~:source","// Copyright 2014 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview The SafeStyleSheet type and its builders.\n *\n * TODO(xtof): Link to document stating type contract.\n */\n\ngoog.provide('goog.html.SafeStyleSheet');\n\ngoog.require('goog.array');\ngoog.require('goog.asserts');\ngoog.require('goog.html.SafeStyle');\ngoog.require('goog.object');\ngoog.require('goog.string.Const');\ngoog.require('goog.string.TypedString');\ngoog.require('goog.string.internal');\n\n\n\n/**\n * A string-like object which represents a CSS style sheet and that carries the\n * security type contract that its value, as a string, will not cause untrusted\n * script execution (XSS) when evaluated as CSS in a browser.\n *\n * Instances of this type must be created via the factory method\n * `goog.html.SafeStyleSheet.fromConstant` and not by invoking its\n * constructor. The constructor intentionally takes no parameters and the type\n * is immutable; hence only a default instance corresponding to the empty string\n * can be obtained via constructor invocation.\n *\n * A SafeStyleSheet's string representation can safely be interpolated as the\n * content of a style element within HTML. The SafeStyleSheet string should\n * not be escaped before interpolation.\n *\n * Values of this type must be composable, i.e. for any two values\n * `styleSheet1` and `styleSheet2` of this type,\n * {@code goog.html.SafeStyleSheet.unwrap(styleSheet1) +\n * goog.html.SafeStyleSheet.unwrap(styleSheet2)} must itself be a value that\n * satisfies the SafeStyleSheet type constraint. This requirement implies that\n * for any value `styleSheet` of this type,\n * `goog.html.SafeStyleSheet.unwrap(styleSheet1)` must end in\n * \"beginning of rule\" context.\n\n * A SafeStyleSheet can be constructed via security-reviewed unchecked\n * conversions. In this case producers of SafeStyleSheet must ensure themselves\n * that the SafeStyleSheet does not contain unsafe script. Note in particular\n * that {@code &lt;} is dangerous, even when inside CSS strings, and so should\n * always be forbidden or CSS-escaped in user controlled input. For example, if\n * {@code &lt;/style&gt;&lt;script&gt;evil&lt;/script&gt;\"} were interpolated\n * inside a CSS string, it would break out of the context of the original\n * style element and `evil` would execute. Also note that within an HTML\n * style (raw text) element, HTML character references, such as\n * {@code &amp;lt;}, are not allowed. See\n *\n http://www.w3.org/TR/html5/scripting-1.html#restrictions-for-contents-of-script-elements\n * (similar considerations apply to the style element).\n *\n * @see goog.html.SafeStyleSheet#fromConstant\n * @constructor\n * @final\n * @struct\n * @implements {goog.string.TypedString}\n */\ngoog.html.SafeStyleSheet = function() {\n  /**\n   * The contained value of this SafeStyleSheet.  The field has a purposely\n   * ugly name to make (non-compiled) code that attempts to directly access this\n   * field stand out.\n   * @private {string}\n   */\n  this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = '';\n\n  /**\n   * A type marker used to implement additional run-time type checking.\n   * @see goog.html.SafeStyleSheet#unwrap\n   * @const {!Object}\n   * @private\n   */\n  this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =\n      goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;\n};\n\n\n/**\n * @override\n * @const\n */\ngoog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;\n\n\n/**\n * Type marker for the SafeStyleSheet type, used to implement additional\n * run-time type checking.\n * @const {!Object}\n * @private\n */\ngoog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};\n\n\n/**\n * Creates a style sheet consisting of one selector and one style definition.\n * Use {@link goog.html.SafeStyleSheet.concat} to create longer style sheets.\n * This function doesn't support @import, @media and similar constructs.\n * @param {string} selector CSS selector, e.g. '#id' or 'tag .class, #id'. We\n *     support CSS3 selectors: https://w3.org/TR/css3-selectors/#selectors.\n * @param {!goog.html.SafeStyle.PropertyMap|!goog.html.SafeStyle} style Style\n *     definition associated with the selector.\n * @return {!goog.html.SafeStyleSheet}\n * @throws {Error} If invalid selector is provided.\n */\ngoog.html.SafeStyleSheet.createRule = function(selector, style) {\n  if (goog.string.internal.contains(selector, '<')) {\n    throw new Error('Selector does not allow \\'<\\', got: ' + selector);\n  }\n\n  // Remove strings.\n  var selectorToCheck =\n      selector.replace(/('|\")((?!\\1)[^\\r\\n\\f\\\\]|\\\\[\\s\\S])*\\1/g, '');\n\n  // Check characters allowed in CSS3 selectors.\n  if (!/^[-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|]+$/.test(selectorToCheck)) {\n    throw new Error(\n        'Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\\\]()=^$|] and ' +\n        'strings, got: ' + selector);\n  }\n\n  // Check balanced () and [].\n  if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(selectorToCheck)) {\n    throw new Error('() and [] in selector must be balanced, got: ' + selector);\n  }\n\n  if (!(style instanceof goog.html.SafeStyle)) {\n    style = goog.html.SafeStyle.create(style);\n  }\n  var styleSheet = selector + '{' +\n      goog.html.SafeStyle.unwrap(style).replace(/</g, '\\\\3C ') + '}';\n  return goog.html.SafeStyleSheet\n      .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);\n};\n\n\n/**\n * Checks if a string has balanced () and [] brackets.\n * @param {string} s String to check.\n * @return {boolean}\n * @private\n */\ngoog.html.SafeStyleSheet.hasBalancedBrackets_ = function(s) {\n  var brackets = {'(': ')', '[': ']'};\n  var expectedBrackets = [];\n  for (var i = 0; i < s.length; i++) {\n    var ch = s[i];\n    if (brackets[ch]) {\n      expectedBrackets.push(brackets[ch]);\n    } else if (goog.object.contains(brackets, ch)) {\n      if (expectedBrackets.pop() != ch) {\n        return false;\n      }\n    }\n  }\n  return expectedBrackets.length == 0;\n};\n\n\n/**\n * Creates a new SafeStyleSheet object by concatenating values.\n * @param {...(!goog.html.SafeStyleSheet|!Array<!goog.html.SafeStyleSheet>)}\n *     var_args Values to concatenate.\n * @return {!goog.html.SafeStyleSheet}\n */\ngoog.html.SafeStyleSheet.concat = function(var_args) {\n  var result = '';\n\n  /**\n   * @param {!goog.html.SafeStyleSheet|!Array<!goog.html.SafeStyleSheet>}\n   *     argument\n   */\n  var addArgument = function(argument) {\n    if (goog.isArray(argument)) {\n      goog.array.forEach(argument, addArgument);\n    } else {\n      result += goog.html.SafeStyleSheet.unwrap(argument);\n    }\n  };\n\n  goog.array.forEach(arguments, addArgument);\n  return goog.html.SafeStyleSheet\n      .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(result);\n};\n\n\n/**\n * Creates a SafeStyleSheet object from a compile-time constant string.\n *\n * `styleSheet` must not have any &lt; characters in it, so that\n * the syntactic structure of the surrounding HTML is not affected.\n *\n * @param {!goog.string.Const} styleSheet A compile-time-constant string from\n *     which to create a SafeStyleSheet.\n * @return {!goog.html.SafeStyleSheet} A SafeStyleSheet object initialized to\n *     `styleSheet`.\n */\ngoog.html.SafeStyleSheet.fromConstant = function(styleSheet) {\n  var styleSheetString = goog.string.Const.unwrap(styleSheet);\n  if (styleSheetString.length === 0) {\n    return goog.html.SafeStyleSheet.EMPTY;\n  }\n  // > is a valid character in CSS selectors and there's no strict need to\n  // block it if we already block <.\n  goog.asserts.assert(\n      !goog.string.internal.contains(styleSheetString, '<'),\n      'Forbidden \\'<\\' character in style sheet string: ' + styleSheetString);\n  return goog.html.SafeStyleSheet\n      .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheetString);\n};\n\n\n/**\n * Returns this SafeStyleSheet's value as a string.\n *\n * IMPORTANT: In code where it is security relevant that an object's type is\n * indeed `SafeStyleSheet`, use `goog.html.SafeStyleSheet.unwrap`\n * instead of this method. If in doubt, assume that it's security relevant. In\n * particular, note that goog.html functions which return a goog.html type do\n * not guarantee the returned instance is of the right type. For example:\n *\n * <pre>\n * var fakeSafeHtml = new String('fake');\n * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;\n * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);\n * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by\n * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml\n * // instanceof goog.html.SafeHtml.\n * </pre>\n *\n * @see goog.html.SafeStyleSheet#unwrap\n * @override\n */\ngoog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {\n  return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;\n};\n\n\nif (goog.DEBUG) {\n  /**\n   * Returns a debug string-representation of this value.\n   *\n   * To obtain the actual string value wrapped in a SafeStyleSheet, use\n   * `goog.html.SafeStyleSheet.unwrap`.\n   *\n   * @see goog.html.SafeStyleSheet#unwrap\n   * @override\n   */\n  goog.html.SafeStyleSheet.prototype.toString = function() {\n    return 'SafeStyleSheet{' +\n        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + '}';\n  };\n}\n\n\n/**\n * Performs a runtime check that the provided object is indeed a\n * SafeStyleSheet object, and returns its value.\n *\n * @param {!goog.html.SafeStyleSheet} safeStyleSheet The object to extract from.\n * @return {string} The safeStyleSheet object's contained string, unless\n *     the run-time type check fails. In that case, `unwrap` returns an\n *     innocuous string, or, if assertions are enabled, throws\n *     `goog.asserts.AssertionError`.\n */\ngoog.html.SafeStyleSheet.unwrap = function(safeStyleSheet) {\n  // Perform additional Run-time type-checking to ensure that\n  // safeStyleSheet is indeed an instance of the expected type.  This\n  // provides some additional protection against security bugs due to\n  // application code that disables type checks.\n  // Specifically, the following checks are performed:\n  // 1. The object is an instance of the expected type.\n  // 2. The object is not an instance of a subclass.\n  // 3. The object carries a type marker for the expected type. \"Faking\" an\n  // object requires a reference to the type marker, which has names intended\n  // to stand out in code reviews.\n  if (safeStyleSheet instanceof goog.html.SafeStyleSheet &&\n      safeStyleSheet.constructor === goog.html.SafeStyleSheet &&\n      safeStyleSheet\n              .SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===\n          goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {\n    return safeStyleSheet.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;\n  } else {\n    goog.asserts.fail('expected object of type SafeStyleSheet, got \\'' +\n        safeStyleSheet + '\\' of type ' + goog.typeOf(safeStyleSheet));\n    return 'type_error:SafeStyleSheet';\n  }\n};\n\n\n/**\n * Package-internal utility method to create SafeStyleSheet instances.\n *\n * @param {string} styleSheet The string to initialize the SafeStyleSheet\n *     object with.\n * @return {!goog.html.SafeStyleSheet} The initialized SafeStyleSheet object.\n * @package\n */\ngoog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse =\n    function(styleSheet) {\n  return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(\n      styleSheet);\n};\n\n\n/**\n * Called from createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(). This\n * method exists only so that the compiler can dead code eliminate static\n * fields (like EMPTY) when they're not accessed.\n * @param {string} styleSheet\n * @return {!goog.html.SafeStyleSheet}\n * @private\n */\ngoog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ =\n    function(styleSheet) {\n  this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = styleSheet;\n  return this;\n};\n\n\n/**\n * A SafeStyleSheet instance corresponding to the empty string.\n * @const {!goog.html.SafeStyleSheet}\n */\ngoog.html.SafeStyleSheet.EMPTY =\n    goog.html.SafeStyleSheet\n        .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse('');\n","~:compiled-at",1665876050389,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.html.safestylesheet.js\",\n\"lineCount\":135,\n\"mappings\":\"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\",\n\"sources\":[\"goog/html/safestylesheet.js\"],\n\"sourcesContent\":[\"// Copyright 2014 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview The SafeStyleSheet type and its builders.\\n *\\n * TODO(xtof): Link to document stating type contract.\\n */\\n\\ngoog.provide('goog.html.SafeStyleSheet');\\n\\ngoog.require('goog.array');\\ngoog.require('goog.asserts');\\ngoog.require('goog.html.SafeStyle');\\ngoog.require('goog.object');\\ngoog.require('goog.string.Const');\\ngoog.require('goog.string.TypedString');\\ngoog.require('goog.string.internal');\\n\\n\\n\\n/**\\n * A string-like object which represents a CSS style sheet and that carries the\\n * security type contract that its value, as a string, will not cause untrusted\\n * script execution (XSS) when evaluated as CSS in a browser.\\n *\\n * Instances of this type must be created via the factory method\\n * `goog.html.SafeStyleSheet.fromConstant` and not by invoking its\\n * constructor. The constructor intentionally takes no parameters and the type\\n * is immutable; hence only a default instance corresponding to the empty string\\n * can be obtained via constructor invocation.\\n *\\n * A SafeStyleSheet's string representation can safely be interpolated as the\\n * content of a style element within HTML. The SafeStyleSheet string should\\n * not be escaped before interpolation.\\n *\\n * Values of this type must be composable, i.e. for any two values\\n * `styleSheet1` and `styleSheet2` of this type,\\n * {@code goog.html.SafeStyleSheet.unwrap(styleSheet1) +\\n * goog.html.SafeStyleSheet.unwrap(styleSheet2)} must itself be a value that\\n * satisfies the SafeStyleSheet type constraint. This requirement implies that\\n * for any value `styleSheet` of this type,\\n * `goog.html.SafeStyleSheet.unwrap(styleSheet1)` must end in\\n * \\\"beginning of rule\\\" context.\\n\\n * A SafeStyleSheet can be constructed via security-reviewed unchecked\\n * conversions. In this case producers of SafeStyleSheet must ensure themselves\\n * that the SafeStyleSheet does not contain unsafe script. Note in particular\\n * that {@code &lt;} is dangerous, even when inside CSS strings, and so should\\n * always be forbidden or CSS-escaped in user controlled input. For example, if\\n * {@code &lt;/style&gt;&lt;script&gt;evil&lt;/script&gt;\\\"} were interpolated\\n * inside a CSS string, it would break out of the context of the original\\n * style element and `evil` would execute. Also note that within an HTML\\n * style (raw text) element, HTML character references, such as\\n * {@code &amp;lt;}, are not allowed. See\\n *\\n http://www.w3.org/TR/html5/scripting-1.html#restrictions-for-contents-of-script-elements\\n * (similar considerations apply to the style element).\\n *\\n * @see goog.html.SafeStyleSheet#fromConstant\\n * @constructor\\n * @final\\n * @struct\\n * @implements {goog.string.TypedString}\\n */\\ngoog.html.SafeStyleSheet = function() {\\n  /**\\n   * The contained value of this SafeStyleSheet.  The field has a purposely\\n   * ugly name to make (non-compiled) code that attempts to directly access this\\n   * field stand out.\\n   * @private {string}\\n   */\\n  this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = '';\\n\\n  /**\\n   * A type marker used to implement additional run-time type checking.\\n   * @see goog.html.SafeStyleSheet#unwrap\\n   * @const {!Object}\\n   * @private\\n   */\\n  this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =\\n      goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;\\n};\\n\\n\\n/**\\n * @override\\n * @const\\n */\\ngoog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;\\n\\n\\n/**\\n * Type marker for the SafeStyleSheet type, used to implement additional\\n * run-time type checking.\\n * @const {!Object}\\n * @private\\n */\\ngoog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};\\n\\n\\n/**\\n * Creates a style sheet consisting of one selector and one style definition.\\n * Use {@link goog.html.SafeStyleSheet.concat} to create longer style sheets.\\n * This function doesn't support @import, @media and similar constructs.\\n * @param {string} selector CSS selector, e.g. '#id' or 'tag .class, #id'. We\\n *     support CSS3 selectors: https://w3.org/TR/css3-selectors/#selectors.\\n * @param {!goog.html.SafeStyle.PropertyMap|!goog.html.SafeStyle} style Style\\n *     definition associated with the selector.\\n * @return {!goog.html.SafeStyleSheet}\\n * @throws {Error} If invalid selector is provided.\\n */\\ngoog.html.SafeStyleSheet.createRule = function(selector, style) {\\n  if (goog.string.internal.contains(selector, '<')) {\\n    throw new Error('Selector does not allow \\\\'<\\\\', got: ' + selector);\\n  }\\n\\n  // Remove strings.\\n  var selectorToCheck =\\n      selector.replace(/('|\\\")((?!\\\\1)[^\\\\r\\\\n\\\\f\\\\\\\\]|\\\\\\\\[\\\\s\\\\S])*\\\\1/g, '');\\n\\n  // Check characters allowed in CSS3 selectors.\\n  if (!/^[-_a-zA-Z0-9#.:* ,>+~[\\\\]()=^$|]+$/.test(selectorToCheck)) {\\n    throw new Error(\\n        'Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\\\\\\\]()=^$|] and ' +\\n        'strings, got: ' + selector);\\n  }\\n\\n  // Check balanced () and [].\\n  if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(selectorToCheck)) {\\n    throw new Error('() and [] in selector must be balanced, got: ' + selector);\\n  }\\n\\n  if (!(style instanceof goog.html.SafeStyle)) {\\n    style = goog.html.SafeStyle.create(style);\\n  }\\n  var styleSheet = selector + '{' +\\n      goog.html.SafeStyle.unwrap(style).replace(/</g, '\\\\\\\\3C ') + '}';\\n  return goog.html.SafeStyleSheet\\n      .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);\\n};\\n\\n\\n/**\\n * Checks if a string has balanced () and [] brackets.\\n * @param {string} s String to check.\\n * @return {boolean}\\n * @private\\n */\\ngoog.html.SafeStyleSheet.hasBalancedBrackets_ = function(s) {\\n  var brackets = {'(': ')', '[': ']'};\\n  var expectedBrackets = [];\\n  for (var i = 0; i < s.length; i++) {\\n    var ch = s[i];\\n    if (brackets[ch]) {\\n      expectedBrackets.push(brackets[ch]);\\n    } else if (goog.object.contains(brackets, ch)) {\\n      if (expectedBrackets.pop() != ch) {\\n        return false;\\n      }\\n    }\\n  }\\n  return expectedBrackets.length == 0;\\n};\\n\\n\\n/**\\n * Creates a new SafeStyleSheet object by concatenating values.\\n * @param {...(!goog.html.SafeStyleSheet|!Array<!goog.html.SafeStyleSheet>)}\\n *     var_args Values to concatenate.\\n * @return {!goog.html.SafeStyleSheet}\\n */\\ngoog.html.SafeStyleSheet.concat = function(var_args) {\\n  var result = '';\\n\\n  /**\\n   * @param {!goog.html.SafeStyleSheet|!Array<!goog.html.SafeStyleSheet>}\\n   *     argument\\n   */\\n  var addArgument = function(argument) {\\n    if (goog.isArray(argument)) {\\n      goog.array.forEach(argument, addArgument);\\n    } else {\\n      result += goog.html.SafeStyleSheet.unwrap(argument);\\n    }\\n  };\\n\\n  goog.array.forEach(arguments, addArgument);\\n  return goog.html.SafeStyleSheet\\n      .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(result);\\n};\\n\\n\\n/**\\n * Creates a SafeStyleSheet object from a compile-time constant string.\\n *\\n * `styleSheet` must not have any &lt; characters in it, so that\\n * the syntactic structure of the surrounding HTML is not affected.\\n *\\n * @param {!goog.string.Const} styleSheet A compile-time-constant string from\\n *     which to create a SafeStyleSheet.\\n * @return {!goog.html.SafeStyleSheet} A SafeStyleSheet object initialized to\\n *     `styleSheet`.\\n */\\ngoog.html.SafeStyleSheet.fromConstant = function(styleSheet) {\\n  var styleSheetString = goog.string.Const.unwrap(styleSheet);\\n  if (styleSheetString.length === 0) {\\n    return goog.html.SafeStyleSheet.EMPTY;\\n  }\\n  // > is a valid character in CSS selectors and there's no strict need to\\n  // block it if we already block <.\\n  goog.asserts.assert(\\n      !goog.string.internal.contains(styleSheetString, '<'),\\n      'Forbidden \\\\'<\\\\' character in style sheet string: ' + styleSheetString);\\n  return goog.html.SafeStyleSheet\\n      .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheetString);\\n};\\n\\n\\n/**\\n * Returns this SafeStyleSheet's value as a string.\\n *\\n * IMPORTANT: In code where it is security relevant that an object's type is\\n * indeed `SafeStyleSheet`, use `goog.html.SafeStyleSheet.unwrap`\\n * instead of this method. If in doubt, assume that it's security relevant. In\\n * particular, note that goog.html functions which return a goog.html type do\\n * not guarantee the returned instance is of the right type. For example:\\n *\\n * <pre>\\n * var fakeSafeHtml = new String('fake');\\n * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;\\n * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);\\n * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by\\n * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml\\n * // instanceof goog.html.SafeHtml.\\n * </pre>\\n *\\n * @see goog.html.SafeStyleSheet#unwrap\\n * @override\\n */\\ngoog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {\\n  return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;\\n};\\n\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Returns a debug string-representation of this value.\\n   *\\n   * To obtain the actual string value wrapped in a SafeStyleSheet, use\\n   * `goog.html.SafeStyleSheet.unwrap`.\\n   *\\n   * @see goog.html.SafeStyleSheet#unwrap\\n   * @override\\n   */\\n  goog.html.SafeStyleSheet.prototype.toString = function() {\\n    return 'SafeStyleSheet{' +\\n        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + '}';\\n  };\\n}\\n\\n\\n/**\\n * Performs a runtime check that the provided object is indeed a\\n * SafeStyleSheet object, and returns its value.\\n *\\n * @param {!goog.html.SafeStyleSheet} safeStyleSheet The object to extract from.\\n * @return {string} The safeStyleSheet object's contained string, unless\\n *     the run-time type check fails. In that case, `unwrap` returns an\\n *     innocuous string, or, if assertions are enabled, throws\\n *     `goog.asserts.AssertionError`.\\n */\\ngoog.html.SafeStyleSheet.unwrap = function(safeStyleSheet) {\\n  // Perform additional Run-time type-checking to ensure that\\n  // safeStyleSheet is indeed an instance of the expected type.  This\\n  // provides some additional protection against security bugs due to\\n  // application code that disables type checks.\\n  // Specifically, the following checks are performed:\\n  // 1. The object is an instance of the expected type.\\n  // 2. The object is not an instance of a subclass.\\n  // 3. The object carries a type marker for the expected type. \\\"Faking\\\" an\\n  // object requires a reference to the type marker, which has names intended\\n  // to stand out in code reviews.\\n  if (safeStyleSheet instanceof goog.html.SafeStyleSheet &&\\n      safeStyleSheet.constructor === goog.html.SafeStyleSheet &&\\n      safeStyleSheet\\n              .SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===\\n          goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) {\\n    return safeStyleSheet.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;\\n  } else {\\n    goog.asserts.fail('expected object of type SafeStyleSheet, got \\\\'' +\\n        safeStyleSheet + '\\\\' of type ' + goog.typeOf(safeStyleSheet));\\n    return 'type_error:SafeStyleSheet';\\n  }\\n};\\n\\n\\n/**\\n * Package-internal utility method to create SafeStyleSheet instances.\\n *\\n * @param {string} styleSheet The string to initialize the SafeStyleSheet\\n *     object with.\\n * @return {!goog.html.SafeStyleSheet} The initialized SafeStyleSheet object.\\n * @package\\n */\\ngoog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse =\\n    function(styleSheet) {\\n  return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(\\n      styleSheet);\\n};\\n\\n\\n/**\\n * Called from createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(). This\\n * method exists only so that the compiler can dead code eliminate static\\n * fields (like EMPTY) when they're not accessed.\\n * @param {string} styleSheet\\n * @return {!goog.html.SafeStyleSheet}\\n * @private\\n */\\ngoog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ =\\n    function(styleSheet) {\\n  this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = styleSheet;\\n  return this;\\n};\\n\\n\\n/**\\n * A SafeStyleSheet instance corresponding to the empty string.\\n * @const {!goog.html.SafeStyleSheet}\\n */\\ngoog.html.SafeStyleSheet.EMPTY =\\n    goog.html.SafeStyleSheet\\n        .createSafeStyleSheetSecurityPrivateDoNotAccessOrElse('');\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"html\",\"SafeStyleSheet\",\"goog.html.SafeStyleSheet\",\"privateDoNotAccessOrElseSafeStyleSheetWrappedValue_\",\"SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_\",\"TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_\",\"prototype\",\"implementsGoogStringTypedString\",\"createRule\",\"goog.html.SafeStyleSheet.createRule\",\"selector\",\"style\",\"string\",\"internal\",\"contains\",\"Error\",\"selectorToCheck\",\"replace\",\"test\",\"hasBalancedBrackets_\",\"SafeStyle\",\"create\",\"styleSheet\",\"unwrap\",\"createSafeStyleSheetSecurityPrivateDoNotAccessOrElse\",\"goog.html.SafeStyleSheet.hasBalancedBrackets_\",\"s\",\"brackets\",\"expectedBrackets\",\"i\",\"length\",\"ch\",\"push\",\"object\",\"pop\",\"concat\",\"goog.html.SafeStyleSheet.concat\",\"var_args\",\"result\",\"addArgument\",\"argument\",\"isArray\",\"array\",\"forEach\",\"arguments\",\"fromConstant\",\"goog.html.SafeStyleSheet.fromConstant\",\"styleSheetString\",\"Const\",\"EMPTY\",\"asserts\",\"assert\",\"getTypedStringValue\",\"goog.html.SafeStyleSheet.prototype.getTypedStringValue\",\"DEBUG\",\"toString\",\"goog.html.SafeStyleSheet.prototype.toString\",\"goog.html.SafeStyleSheet.unwrap\",\"safeStyleSheet\",\"constructor\",\"fail\",\"typeOf\",\"goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse\",\"initSecurityPrivateDoNotAccessOrElse_\",\"goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_\"]\n}\n"]