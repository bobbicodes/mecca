goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.array");
  goog.module.declareLegacyNamespace();
  const asserts = goog.require("goog.asserts");
  goog.NATIVE_ARRAY_PROTOTYPES = goog.define("goog.NATIVE_ARRAY_PROTOTYPES", goog.TRUSTED_SITE);
  const ASSUME_NATIVE_FUNCTIONS = goog.define("goog.array.ASSUME_NATIVE_FUNCTIONS", goog.FEATURESET_YEAR > 2012);
  exports.ASSUME_NATIVE_FUNCTIONS = ASSUME_NATIVE_FUNCTIONS;
  function peek(array) {
    return array[array.length - 1];
  }
  exports.peek = peek;
  exports.last = peek;
  const indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(arr, obj, opt_fromIndex) {
    asserts.assert(arr.length != null);
    return Array.prototype.indexOf.call(arr, obj, opt_fromIndex);
  } : function(arr, obj, opt_fromIndex) {
    var fromIndex = opt_fromIndex == null ? 0 : opt_fromIndex < 0 ? Math.max(0, arr.length + opt_fromIndex) : opt_fromIndex;
    if (typeof arr === "string") {
      if (typeof obj !== "string" || obj.length != 1) {
        return -1;
      }
      return arr.indexOf(obj, fromIndex);
    }
    for (var i = fromIndex; i < arr.length; i++) {
      if (i in arr && arr[i] === obj) {
        return i;
      }
    }
    return -1;
  };
  exports.indexOf = indexOf;
  const lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(arr, obj, opt_fromIndex) {
    asserts.assert(arr.length != null);
    var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
    return Array.prototype.lastIndexOf.call(arr, obj, fromIndex);
  } : function(arr, obj, opt_fromIndex) {
    var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
    if (fromIndex < 0) {
      fromIndex = Math.max(0, arr.length + fromIndex);
    }
    if (typeof arr === "string") {
      if (typeof obj !== "string" || obj.length != 1) {
        return -1;
      }
      return arr.lastIndexOf(obj, fromIndex);
    }
    for (var i = fromIndex; i >= 0; i--) {
      if (i in arr && arr[i] === obj) {
        return i;
      }
    }
    return -1;
  };
  exports.lastIndexOf = lastIndexOf;
  const forEach = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    Array.prototype.forEach.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    var l = arr.length;
    var arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (var i = 0; i < l; i++) {
      if (i in arr2) {
        f.call(opt_obj, arr2[i], i, arr);
      }
    }
  };
  exports.forEach = forEach;
  function forEachRight(arr, f, opt_obj) {
    var l = arr.length;
    var arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (var i = l - 1; i >= 0; --i) {
      if (i in arr2) {
        f.call(opt_obj, arr2[i], i, arr);
      }
    }
  }
  exports.forEachRight = forEachRight;
  const filter = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.filter.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    var l = arr.length;
    var res = [];
    var resLength = 0;
    var arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (var i = 0; i < l; i++) {
      if (i in arr2) {
        var val = arr2[i];
        if (f.call(opt_obj, val, i, arr)) {
          res[resLength++] = val;
        }
      }
    }
    return res;
  };
  exports.filter = filter;
  const map = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.map.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    var l = arr.length;
    var res = new Array(l);
    var arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (var i = 0; i < l; i++) {
      if (i in arr2) {
        res[i] = f.call(opt_obj, arr2[i], i, arr);
      }
    }
    return res;
  };
  exports.map = map;
  const reduce = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(arr, f, val, opt_obj) {
    asserts.assert(arr.length != null);
    if (opt_obj) {
      f = goog.bind(f, opt_obj);
    }
    return Array.prototype.reduce.call(arr, f, val);
  } : function(arr, f, val, opt_obj) {
    var rval = val;
    forEach(arr, function(val, index) {
      rval = f.call(opt_obj, rval, val, index, arr);
    });
    return rval;
  };
  exports.reduce = reduce;
  const reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(arr, f, val, opt_obj) {
    asserts.assert(arr.length != null);
    asserts.assert(f != null);
    if (opt_obj) {
      f = goog.bind(f, opt_obj);
    }
    return Array.prototype.reduceRight.call(arr, f, val);
  } : function(arr, f, val, opt_obj) {
    var rval = val;
    forEachRight(arr, function(val, index) {
      rval = f.call(opt_obj, rval, val, index, arr);
    });
    return rval;
  };
  exports.reduceRight = reduceRight;
  const some = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.some.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    var l = arr.length;
    var arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (var i = 0; i < l; i++) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return true;
      }
    }
    return false;
  };
  exports.some = some;
  const every = goog.NATIVE_ARRAY_PROTOTYPES && (ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(arr, f, opt_obj) {
    asserts.assert(arr.length != null);
    return Array.prototype.every.call(arr, f, opt_obj);
  } : function(arr, f, opt_obj) {
    var l = arr.length;
    var arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (var i = 0; i < l; i++) {
      if (i in arr2 && !f.call(opt_obj, arr2[i], i, arr)) {
        return false;
      }
    }
    return true;
  };
  exports.every = every;
  function count(arr, f, opt_obj) {
    var count = 0;
    forEach(arr, function(element, index, arr) {
      if (f.call(opt_obj, element, index, arr)) {
        ++count;
      }
    }, opt_obj);
    return count;
  }
  exports.count = count;
  function find(arr, f, opt_obj) {
    var i = findIndex(arr, f, opt_obj);
    return i < 0 ? null : typeof arr === "string" ? arr.charAt(i) : arr[i];
  }
  exports.find = find;
  function findIndex(arr, f, opt_obj) {
    var l = arr.length;
    var arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (var i = 0; i < l; i++) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return i;
      }
    }
    return -1;
  }
  exports.findIndex = findIndex;
  function findRight(arr, f, opt_obj) {
    var i = findIndexRight(arr, f, opt_obj);
    return i < 0 ? null : typeof arr === "string" ? arr.charAt(i) : arr[i];
  }
  exports.findRight = findRight;
  function findIndexRight(arr, f, opt_obj) {
    var l = arr.length;
    var arr2 = typeof arr === "string" ? arr.split("") : arr;
    for (var i = l - 1; i >= 0; i--) {
      if (i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
        return i;
      }
    }
    return -1;
  }
  exports.findIndexRight = findIndexRight;
  function contains(arr, obj) {
    return indexOf(arr, obj) >= 0;
  }
  exports.contains = contains;
  function isEmpty(arr) {
    return arr.length == 0;
  }
  exports.isEmpty = isEmpty;
  function clear(arr) {
    if (!Array.isArray(arr)) {
      for (var i = arr.length - 1; i >= 0; i--) {
        delete arr[i];
      }
    }
    arr.length = 0;
  }
  exports.clear = clear;
  function insert(arr, obj) {
    if (!contains(arr, obj)) {
      arr.push(obj);
    }
  }
  exports.insert = insert;
  function insertAt(arr, obj, opt_i) {
    splice(arr, opt_i, 0, obj);
  }
  exports.insertAt = insertAt;
  function insertArrayAt(arr, elementsToAdd, opt_i) {
    goog.partial(splice, arr, opt_i, 0).apply(null, elementsToAdd);
  }
  exports.insertArrayAt = insertArrayAt;
  function insertBefore(arr, obj, opt_obj2) {
    var i;
    if (arguments.length == 2 || (i = indexOf(arr, opt_obj2)) < 0) {
      arr.push(obj);
    } else {
      insertAt(arr, obj, i);
    }
  }
  exports.insertBefore = insertBefore;
  function remove(arr, obj) {
    var i = indexOf(arr, obj);
    var rv;
    if (rv = i >= 0) {
      removeAt(arr, i);
    }
    return rv;
  }
  exports.remove = remove;
  function removeLast(arr, obj) {
    var i = lastIndexOf(arr, obj);
    if (i >= 0) {
      removeAt(arr, i);
      return true;
    }
    return false;
  }
  exports.removeLast = removeLast;
  function removeAt(arr, i) {
    asserts.assert(arr.length != null);
    return Array.prototype.splice.call(arr, i, 1).length == 1;
  }
  exports.removeAt = removeAt;
  function removeIf(arr, f, opt_obj) {
    var i = findIndex(arr, f, opt_obj);
    if (i >= 0) {
      removeAt(arr, i);
      return true;
    }
    return false;
  }
  exports.removeIf = removeIf;
  function removeAllIf(arr, f, opt_obj) {
    var removedCount = 0;
    forEachRight(arr, function(val, index) {
      if (f.call(opt_obj, val, index, arr)) {
        if (removeAt(arr, index)) {
          removedCount++;
        }
      }
    });
    return removedCount;
  }
  exports.removeAllIf = removeAllIf;
  function concat(var_args) {
    return Array.prototype.concat.apply([], arguments);
  }
  exports.concat = concat;
  function join(var_args) {
    return Array.prototype.concat.apply([], arguments);
  }
  exports.join = join;
  function toArray(object) {
    var length = object.length;
    if (length > 0) {
      var rv = new Array(length);
      for (var i = 0; i < length; i++) {
        rv[i] = object[i];
      }
      return rv;
    }
    return [];
  }
  exports.toArray = toArray;
  const clone = toArray;
  exports.clone = clone;
  function extend(arr1, var_args) {
    for (var i = 1; i < arguments.length; i++) {
      var arr2 = arguments[i];
      if (goog.isArrayLike(arr2)) {
        var len1 = arr1.length || 0;
        var len2 = arr2.length || 0;
        arr1.length = len1 + len2;
        for (var j = 0; j < len2; j++) {
          arr1[len1 + j] = arr2[j];
        }
      } else {
        arr1.push(arr2);
      }
    }
  }
  exports.extend = extend;
  function splice(arr, index, howMany, var_args) {
    asserts.assert(arr.length != null);
    return Array.prototype.splice.apply(arr, slice(arguments, 1));
  }
  exports.splice = splice;
  function slice(arr, start, opt_end) {
    asserts.assert(arr.length != null);
    if (arguments.length <= 2) {
      return Array.prototype.slice.call(arr, start);
    } else {
      return Array.prototype.slice.call(arr, start, opt_end);
    }
  }
  exports.slice = slice;
  function removeDuplicates(arr, opt_rv, opt_hashFn) {
    var returnArray = opt_rv || arr;
    var defaultHashFn = function(item) {
      return goog.isObject(item) ? "o" + goog.getUid(item) : (typeof item).charAt(0) + item;
    };
    var hashFn = opt_hashFn || defaultHashFn;
    var seen = {}, cursorInsert = 0, cursorRead = 0;
    while (cursorRead < arr.length) {
      var current = arr[cursorRead++];
      var key = hashFn(current);
      if (!Object.prototype.hasOwnProperty.call(seen, key)) {
        seen[key] = true;
        returnArray[cursorInsert++] = current;
      }
    }
    returnArray.length = cursorInsert;
  }
  exports.removeDuplicates = removeDuplicates;
  function binarySearch(arr, target, opt_compareFn) {
    return binarySearch_(arr, opt_compareFn || defaultCompare, false, target);
  }
  exports.binarySearch = binarySearch;
  function binarySelect(arr, evaluator, opt_obj) {
    return binarySearch_(arr, evaluator, true, undefined, opt_obj);
  }
  exports.binarySelect = binarySelect;
  function binarySearch_(arr, compareFn, isEvaluator, opt_target, opt_selfObj) {
    var left = 0;
    var right = arr.length;
    var found;
    while (left < right) {
      var middle = left + (right - left >>> 1);
      var compareResult;
      if (isEvaluator) {
        compareResult = compareFn.call(opt_selfObj, arr[middle], middle, arr);
      } else {
        compareResult = compareFn(opt_target, arr[middle]);
      }
      if (compareResult > 0) {
        left = middle + 1;
      } else {
        right = middle;
        found = !compareResult;
      }
    }
    return found ? left : -left - 1;
  }
  function sort(arr, opt_compareFn) {
    arr.sort(opt_compareFn || defaultCompare);
  }
  exports.sort = sort;
  function stableSort(arr, opt_compareFn) {
    var compArr = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
      compArr[i] = {index:i, value:arr[i]};
    }
    var valueCompareFn = opt_compareFn || defaultCompare;
    function stableCompareFn(obj1, obj2) {
      return valueCompareFn(obj1.value, obj2.value) || obj1.index - obj2.index;
    }
    sort(compArr, stableCompareFn);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = compArr[i].value;
    }
  }
  exports.stableSort = stableSort;
  function sortByKey(arr, keyFn, opt_compareFn) {
    var keyCompareFn = opt_compareFn || defaultCompare;
    sort(arr, function(a, b) {
      return keyCompareFn(keyFn(a), keyFn(b));
    });
  }
  exports.sortByKey = sortByKey;
  function sortObjectsByKey(arr, key, opt_compareFn) {
    sortByKey(arr, function(obj) {
      return obj[key];
    }, opt_compareFn);
  }
  exports.sortObjectsByKey = sortObjectsByKey;
  function isSorted(arr, opt_compareFn, opt_strict) {
    var compare = opt_compareFn || defaultCompare;
    for (var i = 1; i < arr.length; i++) {
      var compareResult = compare(arr[i - 1], arr[i]);
      if (compareResult > 0 || compareResult == 0 && opt_strict) {
        return false;
      }
    }
    return true;
  }
  exports.isSorted = isSorted;
  function equals(arr1, arr2, opt_equalsFn) {
    if (!goog.isArrayLike(arr1) || !goog.isArrayLike(arr2) || arr1.length != arr2.length) {
      return false;
    }
    var l = arr1.length;
    var equalsFn = opt_equalsFn || defaultCompareEquality;
    for (var i = 0; i < l; i++) {
      if (!equalsFn(arr1[i], arr2[i])) {
        return false;
      }
    }
    return true;
  }
  exports.equals = equals;
  function compare3(arr1, arr2, opt_compareFn) {
    var compare = opt_compareFn || defaultCompare;
    var l = Math.min(arr1.length, arr2.length);
    for (var i = 0; i < l; i++) {
      var result = compare(arr1[i], arr2[i]);
      if (result != 0) {
        return result;
      }
    }
    return defaultCompare(arr1.length, arr2.length);
  }
  exports.compare3 = compare3;
  function defaultCompare(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  exports.defaultCompare = defaultCompare;
  function inverseDefaultCompare(a, b) {
    return -defaultCompare(a, b);
  }
  exports.inverseDefaultCompare = inverseDefaultCompare;
  function defaultCompareEquality(a, b) {
    return a === b;
  }
  exports.defaultCompareEquality = defaultCompareEquality;
  function binaryInsert(array, value, opt_compareFn) {
    var index = binarySearch(array, value, opt_compareFn);
    if (index < 0) {
      insertAt(array, value, -(index + 1));
      return true;
    }
    return false;
  }
  exports.binaryInsert = binaryInsert;
  function binaryRemove(array, value, opt_compareFn) {
    var index = binarySearch(array, value, opt_compareFn);
    return index >= 0 ? removeAt(array, index) : false;
  }
  exports.binaryRemove = binaryRemove;
  function bucket(array, sorter, opt_obj) {
    var buckets = {};
    for (var i = 0; i < array.length; i++) {
      var value = array[i];
      var key = sorter.call(opt_obj, value, i, array);
      if (key !== undefined) {
        var bucket = buckets[key] || (buckets[key] = []);
        bucket.push(value);
      }
    }
    return buckets;
  }
  exports.bucket = bucket;
  function toObject(arr, keyFunc, opt_obj) {
    var ret = {};
    forEach(arr, function(element, index) {
      ret[keyFunc.call(opt_obj, element, index, arr)] = element;
    });
    return ret;
  }
  exports.toObject = toObject;
  function range(startOrEnd, opt_end, opt_step) {
    var array = [];
    var start = 0;
    var end = startOrEnd;
    var step = opt_step || 1;
    if (opt_end !== undefined) {
      start = startOrEnd;
      end = opt_end;
    }
    if (step * (end - start) < 0) {
      return [];
    }
    if (step > 0) {
      for (var i = start; i < end; i += step) {
        array.push(i);
      }
    } else {
      for (var i = start; i > end; i += step) {
        array.push(i);
      }
    }
    return array;
  }
  exports.range = range;
  function repeat(value, n) {
    var array = [];
    for (var i = 0; i < n; i++) {
      array[i] = value;
    }
    return array;
  }
  exports.repeat = repeat;
  function flatten(var_args) {
    var CHUNK_SIZE = 8192;
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
      var element = arguments[i];
      if (Array.isArray(element)) {
        for (var c = 0; c < element.length; c += CHUNK_SIZE) {
          var chunk = slice(element, c, c + CHUNK_SIZE);
          var recurseResult = flatten.apply(null, chunk);
          for (var r = 0; r < recurseResult.length; r++) {
            result.push(recurseResult[r]);
          }
        }
      } else {
        result.push(element);
      }
    }
    return result;
  }
  exports.flatten = flatten;
  function rotate(array, n) {
    asserts.assert(array.length != null);
    if (array.length) {
      n %= array.length;
      if (n > 0) {
        Array.prototype.unshift.apply(array, array.splice(-n, n));
      } else {
        if (n < 0) {
          Array.prototype.push.apply(array, array.splice(0, -n));
        }
      }
    }
    return array;
  }
  exports.rotate = rotate;
  function moveItem(arr, fromIndex, toIndex) {
    asserts.assert(fromIndex >= 0 && fromIndex < arr.length);
    asserts.assert(toIndex >= 0 && toIndex < arr.length);
    var removedItems = Array.prototype.splice.call(arr, fromIndex, 1);
    Array.prototype.splice.call(arr, toIndex, 0, removedItems[0]);
  }
  exports.moveItem = moveItem;
  function zip(var_args) {
    if (!arguments.length) {
      return [];
    }
    var result = [];
    var minLen = arguments[0].length;
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i].length < minLen) {
        minLen = arguments[i].length;
      }
    }
    for (var i = 0; i < minLen; i++) {
      var value = [];
      for (var j = 0; j < arguments.length; j++) {
        value.push(arguments[j][i]);
      }
      result.push(value);
    }
    return result;
  }
  exports.zip = zip;
  function shuffle(arr, opt_randFn) {
    var randFn = opt_randFn || Math.random;
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(randFn() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
  exports.shuffle = shuffle;
  function copyByIndex(arr, index_arr) {
    var result = [];
    forEach(index_arr, function(index) {
      result.push(arr[index]);
    });
    return result;
  }
  exports.copyByIndex = copyByIndex;
  function concatMap(arr, f, opt_obj) {
    return concat.apply([], map(arr, f, opt_obj));
  }
  exports.concatMap = concatMap;
  return exports;
});

//# sourceMappingURL=goog.array.array.js.map
