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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/index.js":
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./frontend/router.js\");\n/* harmony import */ var _libs_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/template */ \"./frontend/libs/template.js\");\n/* harmony import */ var _tests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tests */ \"./frontend/tests.js\");\n\r\n\r\n\r\n\r\n$(document).ready(() => {\r\n  Object(_libs_template__WEBPACK_IMPORTED_MODULE_1__[\"initTemplate\"])();\r\n  Object(_router__WEBPACK_IMPORTED_MODULE_0__[\"initRouting\"])();\r\n  _tests__WEBPACK_IMPORTED_MODULE_2__[\"TestPage\"].initTestPage();\r\n});\r\n\n\n//# sourceURL=webpack:///./frontend/index.js?");

/***/ }),

/***/ "./frontend/libs/api.js":
/*!******************************!*\
  !*** ./frontend/libs/api.js ***!
  \******************************/
/*! exports provided: JQuerySerializeArrayToJSON, apiRequest, getAllTests, postATest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JQuerySerializeArrayToJSON\", function() { return JQuerySerializeArrayToJSON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiRequest\", function() { return apiRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllTests\", function() { return getAllTests; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postATest\", function() { return postATest; });\nconst API_URL = `//${window.location.host}/api/`;\r\n\r\nfunction JQuerySerializeArrayToJSON(serializedArray) {\r\n  var data = {};\r\n\r\n  serializedArray.forEach(obj => {\r\n    data[obj.name] = obj.value;\r\n  });\r\n\r\n  return data;\r\n}\r\n\r\nasync function apiRequest(resource, method, payload) {\r\n  let buildedURL = `${API_URL}${resource}`;\r\n\r\n  switch (method) {\r\n    case 'post':\r\n      return await $.ajax(buildedURL, {\r\n        data: JSON.stringify(payload),\r\n        method: 'POST',\r\n        contentType: 'application/json'\r\n      });\r\n\r\n    case 'get':\r\n      return await $.getJSON(buildedURL);\r\n  }\r\n}\r\n\r\nasync function getAllTests() {\r\n  return await apiRequest('tests', 'get', null);\r\n}\r\n\r\nasync function postATest(test) {\r\n  return await apiRequest('tests', 'post', test);\r\n}\r\n\n\n//# sourceURL=webpack:///./frontend/libs/api.js?");

/***/ }),

/***/ "./frontend/libs/template.js":
/*!***********************************!*\
  !*** ./frontend/libs/template.js ***!
  \***********************************/
/*! exports provided: initTemplate, bootstrapTmpl, replaceTmplVal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initTemplate\", function() { return initTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bootstrapTmpl\", function() { return bootstrapTmpl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replaceTmplVal\", function() { return replaceTmplVal; });\nfunction initTemplate() {\r\n  $('.tmpl').hide();  \r\n}\r\n\r\nfunction bootstrapTmpl(initTestPage) {\r\n  let ele = $(initTestPage);\r\n  $(initTestPage).remove();\r\n  \r\n  ele.removeClass([initTestPage.replace('.',''), 'tmpl']);\r\n  ele.show();\r\n  return ele;\r\n}\r\n\r\nfunction replaceTmplVal(ele, name, val) {\r\n  return ele.html(ele.html().replace(`{{${name}}}`, val))\r\n}\r\n\n\n//# sourceURL=webpack:///./frontend/libs/template.js?");

/***/ }),

/***/ "./frontend/router.js":
/*!****************************!*\
  !*** ./frontend/router.js ***!
  \****************************/
/*! exports provided: initRouting, navigateTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRouting\", function() { return initRouting; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigateTo\", function() { return navigateTo; });\nconst ROUTES_CONFIG = [\r\n  {\r\n    path: '/',\r\n    divId: 'homepage'\r\n  },\r\n  {\r\n    path: '/home',\r\n    divId: 'homepage'\r\n  },\r\n  {\r\n    path: '/test',\r\n    divId: 'testpage'\r\n  }\r\n];\r\n\r\nfunction getPageFromConfig(path) {\r\n  return ROUTES_CONFIG.find(page => page.path === path);\r\n}\r\n\r\nfunction initRouting() {\r\n  $('main > *').hide();\r\n\r\n  if (window.location.hash.includes('#')) {\r\n    navigateTo(window.location.hash.substring(1));\r\n  } else {\r\n    navigateTo('/');\r\n  }\r\n\r\n  $(window).on('hashchange', e => {\r\n    navigateTo(window.location.hash.substring(1));\r\n  });\r\n}\r\n\r\nfunction navigateTo(path) {\r\n  $('main > *').hide();\r\n  let pageToNavigateTo = getPageFromConfig(path);\r\n\r\n  if (!pageToNavigateTo) {\r\n    window.location = '404.html';\r\n    return;\r\n  }\r\n\r\n  $(`#${pageToNavigateTo.divId}`).show();\r\n}\r\n\n\n//# sourceURL=webpack:///./frontend/router.js?");

/***/ }),

/***/ "./frontend/tests.js":
/*!***************************!*\
  !*** ./frontend/tests.js ***!
  \***************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TestPage\", function() { return TestPage; });\n/* harmony import */ var _libs_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/template */ \"./frontend/libs/template.js\");\n/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/api */ \"./frontend/libs/api.js\");\n\r\n\r\n\r\nconst TestPage = {\r\n  TEST_TABLE: null,\r\n  TEST_FORM: null,\r\n  TMPL_TEST_ROW: null,\r\n  tests: [],\r\n\r\n  initTestPage: function() {\r\n    this.TEST_TABLE = $('#testpage-testtable');\r\n    this.TMPL_TEST_ROW = Object(_libs_template__WEBPACK_IMPORTED_MODULE_0__[\"bootstrapTmpl\"])('.tmpl-testrow');\r\n    this.TEST_FORM = $('#testpage-formadd');\r\n\r\n    this.TEST_FORM.on('submit', e => {\r\n      this.submitForm(e);\r\n    });\r\n\r\n    this.updateTest().finally();\r\n  },\r\n  updateTest: async function() {\r\n    $('tbody > tr', this.TEST_TABLE).remove();\r\n\r\n    try {\r\n      this.tests = await Object(_libs_api__WEBPACK_IMPORTED_MODULE_1__[\"getAllTests\"])();\r\n      this.tests.forEach(test => {\r\n        let row = this.TMPL_TEST_ROW.clone();\r\n        row = Object(_libs_template__WEBPACK_IMPORTED_MODULE_0__[\"replaceTmplVal\"])(row, 'id', test.id);\r\n        row = Object(_libs_template__WEBPACK_IMPORTED_MODULE_0__[\"replaceTmplVal\"])(row, 'startDate', test.startHourDate);\r\n        row = Object(_libs_template__WEBPACK_IMPORTED_MODULE_0__[\"replaceTmplVal\"])(row, 'endDate', test.endHourDate);\r\n        row = Object(_libs_template__WEBPACK_IMPORTED_MODULE_0__[\"replaceTmplVal\"])(row, 'feedback', test.feedback);\r\n        row = Object(_libs_template__WEBPACK_IMPORTED_MODULE_0__[\"replaceTmplVal\"])(row, 'edition', test.edition);\r\n        row = Object(_libs_template__WEBPACK_IMPORTED_MODULE_0__[\"replaceTmplVal\"])(row, 'product', test.product);\r\n        $('tbody', this.TEST_TABLE).append(row);\r\n      });\r\n    } catch (err) {\r\n      console.error(err);\r\n    }\r\n  },\r\n  submitForm: function(e) {\r\n    e.preventDefault();\r\n    let test = Object(_libs_api__WEBPACK_IMPORTED_MODULE_1__[\"JQuerySerializeArrayToJSON\"])(this.TEST_FORM.serializeArray());\r\n\r\n    // TODO: Validation\r\n\r\n    Object(_libs_api__WEBPACK_IMPORTED_MODULE_1__[\"postATest\"])(test)\r\n      .then(() => {})\r\n      .catch(err => {\r\n        console.error(err);\r\n      })\r\n      .finally(() => {\r\n        this.updateTest();\r\n      });\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./frontend/tests.js?");

/***/ })

/******/ });