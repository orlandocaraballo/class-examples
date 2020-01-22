/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _orlando__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orlando */ \"./src/orlando.js\");\n// ALL CODE IMPORTED FROM THIS FILE WILL BE BUNDLED\n// INTO OUR bundle.js THAT IS USED IN OUR index.html FILE\n\n// this style of module is called CommonJS module\n//    typically you will see this in your backend\nconst {\n  patrishaName,\n  patrishaAge,\n  patrishaGender,\n  patrishaInfo\n} = __webpack_require__(/*! ./patrisha */ \"./src/patrisha.js\");\n\nconsole.log(\"Patrisha's info ->\", patrishaName, patrishaAge, patrishaGender);\nconsole.log(patrishaInfo());\n\n// this is called a EcmaScript module\n//    typically you will see in your frontend\n//    Note: NodeJS is slowly moving towards this style of module going forward\n\n\nconsole.log(\"Orlando's info ->\", _orlando__WEBPACK_IMPORTED_MODULE_0__[\"orlandoName\"], _orlando__WEBPACK_IMPORTED_MODULE_0__[\"orlandoAge\"], _orlando__WEBPACK_IMPORTED_MODULE_0__[\"orlandoGender\"]);\nconsole.log(Object(_orlando__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/orlando.js":
/*!************************!*\
  !*** ./src/orlando.js ***!
  \************************/
/*! exports provided: orlandoName, orlandoAge, orlandoGender, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orlandoName\", function() { return orlandoName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orlandoAge\", function() { return orlandoAge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orlandoGender\", function() { return orlandoGender; });\n// these are referred to as named exports\n//    we can have as many named exports as we please\n// we must remember that whatever we name our exports\n//    will be the same name that is used on the file that imports these variables\nconst orlandoName = \"orlando\";\nconst orlandoAge = 35;\nconst orlandoGender = \"male\";\n\n// this is referred to as a default export\n// there can be only default export per module\n//    we can rename our default export in the file that imports it\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return `${orlandoName} / ${orlandoAge} / ${orlandoGender}`;\n});\n\n\n//# sourceURL=webpack:///./src/orlando.js?");

/***/ }),

/***/ "./src/patrisha.js":
/*!*************************!*\
  !*** ./src/patrisha.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const name = \"patrisha\";\nconst age = \"35\";\nconst gender = \"female\";\n\nmodule.exports = {\n  patrishaName: name,\n  patrishaAge: age,\n  patrishaGender: gender,\n  patrishaInfo: () => {\n    return `${name} - ${age} - ${gender}`;\n  }\n};\n\n\n//# sourceURL=webpack:///./src/patrisha.js?");

/***/ })

/******/ });