/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./navigation/content/navigation.ts":
/*!******************************************!*\
  !*** ./navigation/content/navigation.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar menulangJSON = {\n  \"en\": {\n    \"en_language\": \"EN\",\n    \"ua_language\": \"UA\",\n    \"es_language\": \"ES\",\n    \"main\": \"main\",\n    \"paintings\": \"paintings\",\n    \"architecture\": \"architecture\",\n    \"sculptures\": \"sculptures\",\n    \"music\": \"music\",\n    \"active_language\": \"EN\",\n    \"contrast_colors\": \"Contrast color\",\n    \"main_colors\": \"Main color\"\n  },\n  \"es\": {\n    \"en_language\": \"ING\",\n    \"ua_language\": \"UCR\",\n    \"es_language\": \"ESP\",\n    \"main\": \"hogar\",\n    \"paintings\": \"pinturas\",\n    \"architecture\": \"arquitectura\",\n    \"sculptures\": \"escultura\",\n    \"music\": \"música\",\n    \"active_language\": \"ESP\",\n    \"contrast_colors\": \"color de contraste\",\n    \"main_colors\": \"Color principal\"\n  },\n  \"ua\": {\n    \"en_language\": \"АНГ\",\n    \"ua_language\": \"УКР\",\n    \"es_language\": \"ІСП\",\n    \"main\": \"головна\",\n    \"paintings\": \"картини\",\n    \"architecture\": \"архітектура\",\n    \"sculptures\": \"скульптури\",\n    \"music\": \"музика\",\n    \"active_language\": \"УКР\",\n    \"contrast_colors\": \"Контрастний колір\",\n    \"main_colors\": \"Основний колір\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (menulangJSON);\n\n//# sourceURL=webpack:///./navigation/content/navigation.ts?");

/***/ }),

/***/ "./navigation/ts/components/languages.ts":
/*!***********************************************!*\
  !*** ./navigation/ts/components/languages.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../content/navigation */ \"./navigation/content/navigation.ts\");\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window);\npage.on(\"resize\", function () {\n  languagesPosition();\n  activeLanguageBackground();\n}); // Change language\n\nvar changeLang = function changeLang(langVal) {\n  contentUpdate(langVal);\n  localStorage.setItem(\"lang\", langVal);\n}; // Change content navigation\n\n\nvar contentUpdate = function contentUpdate(cl) {\n  var currLangExport = Object.entries(_content_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])[Object.keys(_content_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).indexOf(cl)][1],\n      langContExport = Object.entries(currLangExport).length;\n\n  for (var i = 0; i < langContExport; i++) {\n    var getSelectorExport = jquery__WEBPACK_IMPORTED_MODULE_0__(\".language-export\")[i],\n        getAttrExport = getSelectorExport.getAttribute(\"data-key\");\n    getSelectorExport.innerHTML = currLangExport[getAttrExport];\n  }\n}; // Get language form Local Storage\n\n\nvar checkUserLangue = function checkUserLangue() {\n  var appLang = localStorage.getItem(\"lang\");\n\n  if (appLang === null) {\n    var userLanguage;\n    var userLang = navigator.language;\n    if (userLang === \"en\" || userLang === \"en-US\") userLanguage = \"en\";else if (userLang === \"uk\") userLanguage = \"ua\";else if (userLang === \"es\") userLanguage = \"es\";else userLanguage = \"en\";\n    contentUpdate(userLanguage);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".\" + userLanguage).addClass(\"languages-active\");\n    localStorage.setItem(\"lang\", userLanguage);\n  } else contentUpdate(appLang);\n\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".\" + appLang).addClass(\"languages-active\");\n};\n\ncheckUserLangue(); // Chouse language\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".choice__language\").on(\"click\", function () {\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"ua\")) changeLang(\"ua\");\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"en\")) changeLang(\"en\");\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"es\")) changeLang(\"es\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".choice__language\").removeClass(\"languages-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass(\"languages-active\");\n}); // Languages modal window position\n\nvar languagesPosition = function languagesPosition() {\n  var languagesHeight = jquery__WEBPACK_IMPORTED_MODULE_0__(\".languages__choice\").height(),\n      bodyHeight = page.height(),\n      languagesPosition = (bodyHeight - languagesHeight) / 2 + \"px\";\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".languages__choice\").css(\"top\", languagesPosition);\n}; // Show/hide languages modal window\n\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".languages__language\").on(\"click\", function () {\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"languages-active\")) {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".languages__choice\").fadeOut(300);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).removeClass(\"languages-active\");\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass(\"languages-active\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".languages__choice\").fadeIn(300);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".languages__choice\").css(\"display\", \"flex\");\n\n    if (localStorage.getItem(\"activeLanguagePosition\") === null) {\n      var activeLangNav = jquery__WEBPACK_IMPORTED_MODULE_0__(\".choice-active\");\n      activeLangNav.css(\"transition\", \"none\");\n      activeLanguageBackground();\n      setTimeout(function () {\n        return activeLangNav.css(\"transition\", \"all 0.3s ease-in-out\");\n      }, 300);\n    }\n\n    activeLanguage();\n  }\n\n  languagesPosition();\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").on(\"click\", function (e) {\n  var clickLeng, clickLeng2;\n\n  if (e.target.localName === \"path\" || e.target.localName === \"svg\") {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".languages__choice\").fadeOut(300);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".languages__language\").removeClass(\"languages-active\");\n  } else {\n    clickLeng = e.target.className.indexOf(\"choice__language\");\n    clickLeng2 = e.target.className.indexOf(\"languages\");\n    if (clickLeng === 0 || clickLeng2 === 0) return;else {\n      jquery__WEBPACK_IMPORTED_MODULE_0__(\".languages__choice\").fadeOut(300);\n      jquery__WEBPACK_IMPORTED_MODULE_0__(\".languages__language\").removeClass(\"languages-active\");\n    }\n  }\n}); // Language active background\n\nvar languagesActiveBackground = jquery__WEBPACK_IMPORTED_MODULE_0__(\".choice-active\");\n\nvar activeLanguage = function activeLanguage() {\n  var languageHeight = jquery__WEBPACK_IMPORTED_MODULE_0__(\".choice__language\").innerHeight();\n  languagesActiveBackground.height(languageHeight);\n};\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".choice__language\").on(\"click\", function () {\n  return activeLanguageBackground();\n});\n\nvar activeLanguageBackground = function activeLanguageBackground() {\n  var language = jquery__WEBPACK_IMPORTED_MODULE_0__(\".languages-active\"),\n      languageHeight = language.innerHeight(),\n      topOffset = \"translateY(\" + language.position().top + \"px)\";\n  languagesActiveBackground.height(languageHeight);\n  languagesActiveBackground.css(\"transform\", topOffset);\n}; // Language active background reload position\n\n\nvar checkActiveLanguage = function checkActiveLanguage() {\n  var activeLanguagePosition = localStorage.getItem(\"lang\");\n  if (activeLanguagePosition === null) return;else {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".\" + activeLanguagePosition).addClass(\"languages-active\");\n    activeLanguageBackground();\n  }\n};\n\ncheckActiveLanguage();\n\n//# sourceURL=webpack:///./navigation/ts/components/languages.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"languages": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], function() { return __webpack_require__("./navigation/ts/components/languages.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;