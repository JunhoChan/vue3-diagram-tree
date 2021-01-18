(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("VueDiagramTree", [], factory);
	else if(typeof exports === 'object')
		exports["VueDiagramTree"] = factory(require("vue"));
	else
		root["VueDiagramTree"] = factory(root["Vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".jh-diagram-tree{width:100%;height:100%}.jh-diagram-tree .diagram-tree-node,.jh-diagram-tree .tree-node-children,.jh-diagram-tree .diagram-tree-node-label{position:relative}.jh-diagram-tree .diagram-tree-node::before,.jh-diagram-tree .diagram-tree-node::after,.jh-diagram-tree .tree-node-children::before,.jh-diagram-tree .tree-node-children::after,.jh-diagram-tree .diagram-tree-node-label::before,.jh-diagram-tree .diagram-tree-node-label::after{content:\"\";position:absolute;margin:0;padding:0}.jh-diagram-tree .tree-node-children{display:none}.jh-diagram-tree .diagram-tree-node:not(.is-expand)>.diagram-tree-node-label::after{border:none}.jh-diagram-tree .diagram-tree-node-label{display:inline-block;padding:10px 20px;border-radius:10px;border:1px solid #bcc3dc;cursor:pointer}.jh-diagram-tree .diagram-tree-node-label:hover{border:1px solid #1890ff;color:#1890ff}.diagram-tree-node-btn{position:absolute;background-color:transparent;width:15px;height:15px;line-height:0;border-radius:50%;color:#bcc3dc;outline:none;border:1px solid #bcc3dc;cursor:pointer}.diagram-tree-node-btn:hover{border:1px solid #1890ff;color:#1890ff}.jh-diagram-tree[class~=is-verticle]>.diagram-tree-node{display:table;text-align:center;margin:0 auto}.jh-diagram-tree[class~=is-verticle]>.diagram-tree-node{margin-bottom:40px}.jh-diagram-tree[class~=is-verticle]>.diagram-tree-node>.diagram-tree-node-label::before{border:none}.jh-diagram-tree[class~=is-verticle] .diagram-tree-node+.diagram-tree-node{padding-left:20px}.jh-diagram-tree[class~=is-verticle] .is-expand>.tree-node-children{display:flex;flex-grow:0;justify-content:center;margin-top:20px;padding-top:20px;flex:0}.jh-diagram-tree[class~=is-verticle] .is-expand>.tree-node-children .diagram-tree-node[class~=is-single]::before{border:none}.jh-diagram-tree[class~=is-verticle] .is-expand>.tree-node-children .diagram-tree-node::before{top:-20px;left:0px;width:100%;border-top:1px solid #454f66}.jh-diagram-tree[class~=is-verticle] .is-expand>.tree-node-children .diagram-tree-node:first-child::before,.jh-diagram-tree[class~=is-verticle] .is-expand>.tree-node-children .diagram-tree-node:last-child::before{width:50%}.jh-diagram-tree[class~=is-verticle] .is-expand>.tree-node-children .diagram-tree-node:first-child::before{left:50%}.jh-diagram-tree[class~=is-verticle] .is-expand>.tree-node-children .diagram-tree-node:last-child::before{width:calc(50% + 10px)}.jh-diagram-tree[class~=is-verticle] .diagram-tree-node-label::before,.jh-diagram-tree[class~=is-verticle] .diagram-tree-node-label::after{top:-21px;border-left:1px solid #454f66;height:20px;left:50%}.jh-diagram-tree[class~=is-verticle] .diagram-tree-node-label::after{top:calc(100% + 1px)}.jh-diagram-tree[class~=is-verticle] .is-empty-child>.diagram-tree-node-label::after{border:none}.jh-diagram-tree[class~=is-verticle] .diagram-tree-node-btn{bottom:-18px;left:calc(50% + 5px)}.jh-diagram-tree[class~=is-verticle] .is-empty-child .diagram-tree-node-btn{display:none}.jh-diagram-tree[class~=is-horizonal] .diagram-tree-node{display:flex;align-items:center;align-content:center}.jh-diagram-tree[class~=is-horizonal] .diagram-tree-node+.diagram-tree-node{padding-top:20px}.jh-diagram-tree[class~=is-horizonal] .diagram-tree-node::before{top:0;left:-20px;border-left:1px solid #454f66;height:100%}.jh-diagram-tree[class~=is-horizonal] .diagram-tree-node:first-child::before,.jh-diagram-tree[class~=is-horizonal] .diagram-tree-node:last-child::before{top:50%;height:50%}.jh-diagram-tree[class~=is-horizonal] .diagram-tree-node:last-child::before{top:0;height:calc(50% + 10px)}.jh-diagram-tree[class~=is-horizonal] .is-expand>.tree-node-children{display:flex;flex-direction:column;margin-left:20px;padding-left:20px}.jh-diagram-tree[class~=is-horizonal]>.diagram-tree-node::before,.jh-diagram-tree[class~=is-horizonal] .is-single::before,.jh-diagram-tree[class~=is-horizonal] .is-empty-child>.diagram-tree-node-label::after,.jh-diagram-tree[class~=is-horizonal]>.diagram-tree-node>.diagram-tree-node-label::before{border:none}.jh-diagram-tree[class~=is-horizonal] .diagram-tree-node-label::before,.jh-diagram-tree[class~=is-horizonal] .diagram-tree-node-label::after{left:-21px;top:50%;border-top:1px solid #454f66;width:20px}.jh-diagram-tree[class~=is-horizonal] .diagram-tree-node-label::after{left:calc(100% + 1px)}.jh-diagram-tree[class~=is-horizonal] .diagram-tree-node-btn{right:-18px;bottom:calc(50% + 5px)}.jh-diagram-tree[class~=is-horizonal] .is-empty-child .diagram-tree-node-btn{display:none}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueDiagramTree", function() { return /* reexport */ components_DiagramTree_0; });

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./components/DiagramTree/node.tsx




function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Object(external_root_Vue_commonjs_vue_commonjs2_vue_["isVNode"])(s);
}

var node_renderValidChildNode = function renderValidChildNode(childData, layer) {
  var childNodes = childData && childData.length ? childData.map(function (child, index, self) {
    return node_createNodeElement(child, self.length === 1, layer);
  }) : null;
  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_["createVNode"])("div", {
    "class": "tree-node-children"
  }, _isSlot(childNodes) ? childNodes : {
    default: function _default() {
      return [childNodes];
    }
  });
};

var node_createNodeElement = function createNodeElement(treeData, isSingle, layer) {
  var toggleExpand = function toggleExpand() {
    treeData.noExpand = !treeData.noExpand;
  };

  var enableExpand = Object(external_root_Vue_commonjs_vue_commonjs2_vue_["inject"])("enableExpand", false);
  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_["createVNode"])("div", {
    "class": ['diagram-tree-node', {
      'is-expand': !treeData.noExpand,
      'is-single': isSingle,
      'is-empty-child': !treeData.children || treeData.children.length === 0
    }]
  }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_["createVNode"])("div", {
    "class": "diagram-tree-node-label"
  }, [treeData.title, enableExpand ? Object(external_root_Vue_commonjs_vue_commonjs2_vue_["createVNode"])("button", {
    "title": treeData.noExpand ? "展开" : "隐藏",
    "class": "diagram-tree-node-btn",
    "onClick": toggleExpand
  }, [treeData.noExpand ? "+" : "-"]) : null]), node_renderValidChildNode(treeData.children, layer + 1)]);
};

var createOrganizationalTree = function createOrganizationalTree(treeData, enableExpand) {
  return treeData.map(function (node, index, self) {
    return node_createNodeElement(node, self.length === 1, 0);
  });
};
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(2);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--3-2!./components/DiagramTree/index.scss
var DiagramTree = __webpack_require__(1);

// CONCATENATED MODULE: ./components/DiagramTree/index.scss

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(DiagramTree["a" /* default */], options);



/* harmony default export */ var components_DiagramTree = (DiagramTree["a" /* default */].locals || {});
// CONCATENATED MODULE: ./components/DiagramTree/index.tsx




/* harmony default export */ var components_DiagramTree_0 = (Object(external_root_Vue_commonjs_vue_commonjs2_vue_["defineComponent"])({
  name: 'DiagramTree',
  props: {
    type: {
      type: String,
      default: "verticle"
    },
    layer: {
      type: Number,
      default: function _default() {
        return -1;
      }
    },
    enableExpand: Boolean,
    treeData: Array
  },
  setup: function setup(props) {
    Object(external_root_Vue_commonjs_vue_commonjs2_vue_["provide"])("enableExpand", props.enableExpand);
    var cacheTreeData = Object(external_root_Vue_commonjs_vue_commonjs2_vue_["reactive"])(props.treeData);
    var currentLayer = 0,
        quaee = [];
    cacheTreeData.forEach(function (data) {
      return quaee.push(data);
    });

    var _loop = function _loop() {
      var newQuaee = [];
      currentLayer++;
      quaee.forEach(function (item) {
        if (currentLayer === props.layer) item.noExpand = true;
        newQuaee = newQuaee.concat(item.children || []);
      });
      quaee = newQuaee;
    };

    while (props.layer > 0 && currentLayer < props.layer) {
      _loop();
    }

    return {
      cacheTreeData: cacheTreeData
    };
  },
  render: function render() {
    var type = this.type,
        enableExpand = this.enableExpand,
        cacheTreeData = this.cacheTreeData;
    return Object(external_root_Vue_commonjs_vue_commonjs2_vue_["createVNode"])("div", {
      "class": ['jh-diagram-tree', type === 'verticle' ? 'is-verticle' : 'is-horizonal']
    }, [createOrganizationalTree(cacheTreeData, enableExpand)]);
  }
}));
// CONCATENATED MODULE: ./components/main/index.ts

var components = [components_DiagramTree_0];

var install = function install(app) {
  components.forEach(function (component) {
    app.use(component);
  });
};


/* harmony default export */ var main = __webpack_exports__["default"] = ({
  install: install
});

/***/ })
/******/ ]);
});