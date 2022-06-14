/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./navigation/ts/components/check_page_language.ts":
/*!*********************************************************!*\
  !*** ./navigation/ts/components/check_page_language.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeLang\": function() { return /* binding */ changeLang; },\n/* harmony export */   \"contentUpdate\": function() { return /* binding */ contentUpdate; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n// Get language form Local Storage\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"load\", function () {\n  var appLang = localStorage.getItem(\"lang\");\n\n  if (appLang === null) {\n    var userLanguage;\n    var userLang = navigator.language;\n    if (userLang === \"en\" || userLang === \"en-US\") userLanguage = \"en\";else if (userLang === \"uk\") userLanguage = \"ua\";else if (userLang === \"es\") userLanguage = \"es\";else userLanguage = \"en\";\n    contentUpdate(userLanguage);\n  } else contentUpdate(appLang);\n}); // Change language\n\nvar changeLang = function changeLang(langVal) {\n  return contentUpdate(langVal);\n}; // Change content\n\nvar contentUpdate = function contentUpdate(language) {\n  var pageName = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").attr(\"data-name\"),\n      pageType = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").attr(\"data-type\");\n  if (pageName === \"main\") __webpack_require__.e(/*! import() */ \"main_content_main_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../main/content/main.json */ \"./main/content/main.json\", 19)).then(function (content) {\n    return importContent(content[\"default\"], language);\n  });\n  if (pageName === \"paintings\") __webpack_require__.e(/*! import() */ \"paintings_content_contentPaintings_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../paintings/content/contentPaintings.json */ \"./paintings/content/contentPaintings.json\", 19)).then(function (content) {\n    return importContent(content[\"default\"], language);\n  });\n  if (pageType === \"painting\") __webpack_require__(\"./paintings/painting/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageName, \".json\")).then(function (content) {\n    return importContent(content[\"default\"], language);\n  });\n  if (pageType === \"painting_author\") __webpack_require__(\"./paintings/painting/author/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageName, \".json\")).then(function (content) {\n    return importContent(content[\"default\"], language);\n  });\n  if (pageName === \"sculptures\") __webpack_require__.e(/*! import() */ \"sculptures_content_sculptures_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../sculptures/content/sculptures.json */ \"./sculptures/content/sculptures.json\", 19)).then(function (content) {\n    return importContent(content[\"default\"], language);\n  });\n  if (pageType === \"sculpture\") __webpack_require__(\"./sculptures/sculpture/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageName, \".json\")).then(function (content) {\n    return importContent(content[\"default\"], language);\n  });\n  if (pageType === \"sculpture_author\") __webpack_require__(\"./sculptures/sculpture/author/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageName, \".json\")).then(function (content) {\n    return importContent(content[\"default\"], language);\n  });\n  if (pageName === \"architecture\") __webpack_require__.e(/*! import() */ \"architecture_content_architecture_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../architecture/content/architecture.json */ \"./architecture/content/architecture.json\", 19)).then(function (content) {\n    return importContent(content[\"default\"], language);\n  });\n  if (pageType === \"architecture_type\") __webpack_require__(\"./architecture/architecture_type/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageName, \".json\")).then(function (content) {\n    return importContent(content[\"default\"], language);\n  });\n\n  if (pageType === \"architecture_exemple\") {\n    __webpack_require__(\"./architecture/architecture_type/architecture_exemple/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(pageName, \".json\")).then(function (content) {\n      return importContent(content[\"default\"], language);\n    });\n  }\n\n  if (pageName === \"404\") __webpack_require__.e(/*! import() */ \"404_content_404_json\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../404/content/404.json */ \"./404/content/404.json\", 19)).then(function (content) {\n    return importContent(content[\"default\"], language);\n  });\n};\njquery__WEBPACK_IMPORTED_MODULE_0__(\".choice__language\").on(\"click\", function () {\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"ua\")) contentUpdate(\"ua\");\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"en\")) contentUpdate(\"en\");\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass(\"es\")) contentUpdate(\"es\");\n});\n\nfunction importContent(obj, language) {\n  var content = obj[language],\n      contentNum = Object.entries(content).length;\n\n  for (var l = 0; l < contentNum + repeatItem(); l++) {\n    var getSelectorExport = jquery__WEBPACK_IMPORTED_MODULE_0__(\".language\")[l];\n    if (getSelectorExport === undefined) continue;\n    var getAttrExport = getSelectorExport.getAttribute(\"data-key\");\n    getSelectorExport.innerHTML = content[getAttrExport];\n  }\n}\n\n;\n\nvar repeatItem = function repeatItem() {\n  var allContentChangeBlocks = [];\n\n  for (var i = 0; i < jquery__WEBPACK_IMPORTED_MODULE_0__(\".language\").length; i++) {\n    allContentChangeBlocks.push(jquery__WEBPACK_IMPORTED_MODULE_0__(\".language\")[i].attributes[\"data-key\"].textContent);\n  }\n\n  var toFindDuplicates = function toFindDuplicates(array) {\n    return array.filter(function (item, index) {\n      return array.indexOf(item) !== index;\n    });\n  };\n\n  return toFindDuplicates(allContentChangeBlocks).length;\n};\n\n//# sourceURL=webpack:///./navigation/ts/components/check_page_language.ts?");

/***/ }),

/***/ "./architecture/architecture_type/architecture_exemple/content lazy recursive ^\\.\\/.*\\.json$":
/*!***********************************************************************************************************!*\
  !*** ./architecture/architecture_type/architecture_exemple/content/ lazy ^\.\/.*\.json$ namespace object ***!
  \***********************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./civic_center.json\": [\n\t\t\"./architecture/architecture_type/architecture_exemple/content/civic_center.json\",\n\t\t\"architecture_architecture_type_architecture_exemple_content_civic_center_json\"\n\t],\n\t\"./colosseum.json\": [\n\t\t\"./architecture/architecture_type/architecture_exemple/content/colosseum.json\",\n\t\t\"architecture_architecture_type_architecture_exemple_content_colosseum_json\"\n\t],\n\t\"./hotel-ritz.json\": [\n\t\t\"./architecture/architecture_type/architecture_exemple/content/hotel-ritz.json\",\n\t\t\"architecture_architecture_type_architecture_exemple_content_hotel-ritz_json\"\n\t],\n\t\"./maria-laach-abbey.json\": [\n\t\t\"./architecture/architecture_type/architecture_exemple/content/maria-laach-abbey.json\",\n\t\t\"architecture_architecture_type_architecture_exemple_content_maria-laach-abbey_json\"\n\t],\n\t\"./parthenon.json\": [\n\t\t\"./architecture/architecture_type/architecture_exemple/content/parthenon.json\",\n\t\t\"architecture_architecture_type_architecture_exemple_content_parthenon_json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = function() { return Object.keys(map); };\nwebpackAsyncContext.id = \"./architecture/architecture_type/architecture_exemple/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./architecture/architecture_type/architecture_exemple/content/_lazy_^\\.\\/.*\\.json$_namespace_object?");

/***/ }),

/***/ "./architecture/architecture_type/content lazy recursive ^\\.\\/.*\\.json$":
/*!**************************************************************************************!*\
  !*** ./architecture/architecture_type/content/ lazy ^\.\/.*\.json$ namespace object ***!
  \**************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./baroque.json\": [\n\t\t\"./architecture/architecture_type/content/baroque.json\",\n\t\t\"architecture_architecture_type_content_baroque_json\"\n\t],\n\t\"./beaux-arts.json\": [\n\t\t\"./architecture/architecture_type/content/beaux-arts.json\",\n\t\t\"architecture_architecture_type_content_beaux-arts_json\"\n\t],\n\t\"./classic.json\": [\n\t\t\"./architecture/architecture_type/content/classic.json\",\n\t\t\"architecture_architecture_type_content_classic_json\"\n\t],\n\t\"./gothic.json\": [\n\t\t\"./architecture/architecture_type/content/gothic.json\",\n\t\t\"architecture_architecture_type_content_gothic_json\"\n\t],\n\t\"./neoclassical.json\": [\n\t\t\"./architecture/architecture_type/content/neoclassical.json\",\n\t\t\"architecture_architecture_type_content_neoclassical_json\"\n\t],\n\t\"./renaissance-revival.json\": [\n\t\t\"./architecture/architecture_type/content/renaissance-revival.json\",\n\t\t\"architecture_architecture_type_content_renaissance-revival_json\"\n\t],\n\t\"./romanesque.json\": [\n\t\t\"./architecture/architecture_type/content/romanesque.json\",\n\t\t\"architecture_architecture_type_content_romanesque_json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = function() { return Object.keys(map); };\nwebpackAsyncContext.id = \"./architecture/architecture_type/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./architecture/architecture_type/content/_lazy_^\\.\\/.*\\.json$_namespace_object?");

/***/ }),

/***/ "./paintings/painting/author/content lazy recursive ^\\.\\/.*\\.json$":
/*!*********************************************************************************!*\
  !*** ./paintings/painting/author/content/ lazy ^\.\/.*\.json$ namespace object ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./caspar-david-friedrich.json\": [\n\t\t\"./paintings/painting/author/content/caspar-david-friedrich.json\",\n\t\t\"paintings_painting_author_content_caspar-david-friedrich_json\"\n\t],\n\t\"./edouard-manet.json\": [\n\t\t\"./paintings/painting/author/content/edouard-manet.json\",\n\t\t\"paintings_painting_author_content_edouard-manet_json\"\n\t],\n\t\"./hieronymus-bosch.json\": [\n\t\t\"./paintings/painting/author/content/hieronymus-bosch.json\",\n\t\t\"paintings_painting_author_content_hieronymus-bosch_json\"\n\t],\n\t\"./jan-van-eyck.json\": [\n\t\t\"./paintings/painting/author/content/jan-van-eyck.json\",\n\t\t\"paintings_painting_author_content_jan-van-eyck_json\"\n\t],\n\t\"./johannes-vermeer.json\": [\n\t\t\"./paintings/painting/author/content/johannes-vermeer.json\",\n\t\t\"paintings_painting_author_content_johannes-vermeer_json\"\n\t],\n\t\"./leonardo-da-vinci.json\": [\n\t\t\"./paintings/painting/author/content/leonardo-da-vinci.json\",\n\t\t\"paintings_painting_author_content_leonardo-da-vinci_json\"\n\t],\n\t\"./michelangelo-buonarroti.json\": [\n\t\t\"./paintings/painting/author/content/michelangelo-buonarroti.json\",\n\t\t\"paintings_painting_author_content_michelangelo-buonarroti_json\"\n\t],\n\t\"./pierre-auguste-renoir.json\": [\n\t\t\"./paintings/painting/author/content/pierre-auguste-renoir.json\",\n\t\t\"paintings_painting_author_content_pierre-auguste-renoir_json\"\n\t],\n\t\"./pieter-bruegel.json\": [\n\t\t\"./paintings/painting/author/content/pieter-bruegel.json\",\n\t\t\"paintings_painting_author_content_pieter-bruegel_json\"\n\t],\n\t\"./rene-magritte.json\": [\n\t\t\"./paintings/painting/author/content/rene-magritte.json\",\n\t\t\"paintings_painting_author_content_rene-magritte_json\"\n\t],\n\t\"./sandro-botticelli.json\": [\n\t\t\"./paintings/painting/author/content/sandro-botticelli.json\",\n\t\t\"paintings_painting_author_content_sandro-botticelli_json\"\n\t],\n\t\"./theodore-gericault.json\": [\n\t\t\"./paintings/painting/author/content/theodore-gericault.json\",\n\t\t\"paintings_painting_author_content_theodore-gericault_json\"\n\t],\n\t\"./thomas-eakins.json\": [\n\t\t\"./paintings/painting/author/content/thomas-eakins.json\",\n\t\t\"paintings_painting_author_content_thomas-eakins_json\"\n\t],\n\t\"./vincent-van-gogh.json\": [\n\t\t\"./paintings/painting/author/content/vincent-van-gogh.json\",\n\t\t\"paintings_painting_author_content_vincent-van-gogh_json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = function() { return Object.keys(map); };\nwebpackAsyncContext.id = \"./paintings/painting/author/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./paintings/painting/author/content/_lazy_^\\.\\/.*\\.json$_namespace_object?");

/***/ }),

/***/ "./paintings/painting/content lazy recursive ^\\.\\/.*\\.json$":
/*!**************************************************************************!*\
  !*** ./paintings/painting/content/ lazy ^\.\/.*\.json$ namespace object ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./arnolfini-portrait.json\": [\n\t\t\"./paintings/painting/content/arnolfini-portrait.json\",\n\t\t\"paintings_painting_content_arnolfini-portrait_json\"\n\t],\n\t\"./birth-of-venus.json\": [\n\t\t\"./paintings/painting/content/birth-of-venus.json\",\n\t\t\"paintings_painting_content_birth-of-venus_json\"\n\t],\n\t\"./breakfast-on-the-grass.json\": [\n\t\t\"./paintings/painting/content/breakfast-on-the-grass.json\",\n\t\t\"paintings_painting_content_breakfast-on-the-grass_json\"\n\t],\n\t\"./creation-of-adam.json\": [\n\t\t\"./paintings/painting/content/creation-of-adam.json\",\n\t\t\"paintings_painting_content_creation-of-adam_json\"\n\t],\n\t\"./garden-of-earthly-delights.json\": [\n\t\t\"./paintings/painting/content/garden-of-earthly-delights.json\",\n\t\t\"paintings_painting_content_garden-of-earthly-delights_json\"\n\t],\n\t\"./girl-with-a-pearl-earring.json\": [\n\t\t\"./paintings/painting/content/girl-with-a-pearl-earring.json\",\n\t\t\"paintings_painting_content_girl-with-a-pearl-earring_json\"\n\t],\n\t\"./gross-clinic.json\": [\n\t\t\"./paintings/painting/content/gross-clinic.json\",\n\t\t\"paintings_painting_content_gross-clinic_json\"\n\t],\n\t\"./harvesters.json\": [\n\t\t\"./paintings/painting/content/harvesters.json\",\n\t\t\"paintings_painting_content_harvesters_json\"\n\t],\n\t\"./luncheon-of-the-boating-party.json\": [\n\t\t\"./paintings/painting/content/luncheon-of-the-boating-party.json\",\n\t\t\"paintings_painting_content_luncheon-of-the-boating-party_json\"\n\t],\n\t\"./mona-lisa.json\": [\n\t\t\"./paintings/painting/content/mona-lisa.json\",\n\t\t\"paintings_painting_content_mona-lisa_json\"\n\t],\n\t\"./raft-of-the-medusa.json\": [\n\t\t\"./paintings/painting/content/raft-of-the-medusa.json\",\n\t\t\"paintings_painting_content_raft-of-the-medusa_json\"\n\t],\n\t\"./self-portrait-with-bandaged-ear.json\": [\n\t\t\"./paintings/painting/content/self-portrait-with-bandaged-ear.json\",\n\t\t\"paintings_painting_content_self-portrait-with-bandaged-ear_json\"\n\t],\n\t\"./son-of-man.json\": [\n\t\t\"./paintings/painting/content/son-of-man.json\",\n\t\t\"paintings_painting_content_son-of-man_json\"\n\t],\n\t\"./starry-night.json\": [\n\t\t\"./paintings/painting/content/starry-night.json\",\n\t\t\"paintings_painting_content_starry-night_json\"\n\t],\n\t\"./wanderer-above-the-sea-of-fog.json\": [\n\t\t\"./paintings/painting/content/wanderer-above-the-sea-of-fog.json\",\n\t\t\"paintings_painting_content_wanderer-above-the-sea-of-fog_json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = function() { return Object.keys(map); };\nwebpackAsyncContext.id = \"./paintings/painting/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./paintings/painting/content/_lazy_^\\.\\/.*\\.json$_namespace_object?");

/***/ }),

/***/ "./sculptures/sculpture/author/content lazy recursive ^\\.\\/.*\\.json$":
/*!***********************************************************************************!*\
  !*** ./sculptures/sculpture/author/content/ lazy ^\.\/.*\.json$ namespace object ***!
  \***********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./auguste-rodin.json\": [\n\t\t\"./sculptures/sculpture/author/content/auguste-rodin.json\",\n\t\t\"sculptures_sculpture_author_content_auguste-rodin_json\"\n\t],\n\t\"./benvenuto-cellini.json\": [\n\t\t\"./sculptures/sculpture/author/content/benvenuto-cellini.json\",\n\t\t\"sculptures_sculpture_author_content_benvenuto-cellini_json\"\n\t],\n\t\"./constantine-brancusi.json\": [\n\t\t\"./sculptures/sculpture/author/content/constantine-brancusi.json\",\n\t\t\"sculptures_sculpture_author_content_constantine-brancusi_json\"\n\t],\n\t\"./gian-lorenzo-bernini.json\": [\n\t\t\"./sculptures/sculpture/author/content/gian-lorenzo-bernini.json\",\n\t\t\"sculptures_sculpture_author_content_gian-lorenzo-bernini_json\"\n\t],\n\t\"./michelangelo-buonarroti.json\": [\n\t\t\"./sculptures/sculpture/author/content/michelangelo-buonarroti.json\",\n\t\t\"sculptures_sculpture_author_content_michelangelo-buonarroti_json\"\n\t],\n\t\"./myron.json\": [\n\t\t\"./sculptures/sculpture/author/content/myron.json\",\n\t\t\"sculptures_sculpture_author_content_myron_json\"\n\t],\n\t\"./pliny-the-elder.json\": [\n\t\t\"./sculptures/sculpture/author/content/pliny-the-elder.json\",\n\t\t\"sculptures_sculpture_author_content_pliny-the-elder_json\"\n\t],\n\t\"./thutmose.json\": [\n\t\t\"./sculptures/sculpture/author/content/thutmose.json\",\n\t\t\"sculptures_sculpture_author_content_thutmose_json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = function() { return Object.keys(map); };\nwebpackAsyncContext.id = \"./sculptures/sculpture/author/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./sculptures/sculpture/author/content/_lazy_^\\.\\/.*\\.json$_namespace_object?");

/***/ }),

/***/ "./sculptures/sculpture/content lazy recursive ^\\.\\/.*\\.json$":
/*!****************************************************************************!*\
  !*** ./sculptures/sculpture/content/ lazy ^\.\/.*\.json$ namespace object ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./augustus-of-prima-porta.json\": [\n\t\t\"./sculptures/sculpture/content/augustus-of-prima-porta.json\",\n\t\t\"sculptures_sculpture_content_augustus-of-prima-porta_json\"\n\t],\n\t\"./david.json\": [\n\t\t\"./sculptures/sculpture/content/david.json\",\n\t\t\"sculptures_sculpture_content_david_json\"\n\t],\n\t\"./ecstasy-of-saint-teresa.json\": [\n\t\t\"./sculptures/sculpture/content/ecstasy-of-saint-teresa.json\",\n\t\t\"sculptures_sculpture_content_ecstasy-of-saint-teresa_json\"\n\t],\n\t\"./laocoon-and-his-sons.json\": [\n\t\t\"./sculptures/sculpture/content/laocoon-and-his-sons.json\",\n\t\t\"sculptures_sculpture_content_laocoon-and-his-sons_json\"\n\t],\n\t\"./mademoiselle-pogany.json\": [\n\t\t\"./sculptures/sculpture/content/mademoiselle-pogany.json\",\n\t\t\"sculptures_sculpture_content_mademoiselle-pogany_json\"\n\t],\n\t\"./nefertiti-bust.json\": [\n\t\t\"./sculptures/sculpture/content/nefertiti-bust.json\",\n\t\t\"sculptures_sculpture_content_nefertiti-bust_json\"\n\t],\n\t\"./perseus.json\": [\n\t\t\"./sculptures/sculpture/content/perseus.json\",\n\t\t\"sculptures_sculpture_content_perseus_json\"\n\t],\n\t\"./the-discus-thrower.json\": [\n\t\t\"./sculptures/sculpture/content/the-discus-thrower.json\",\n\t\t\"sculptures_sculpture_content_the-discus-thrower_json\"\n\t],\n\t\"./thinker.json\": [\n\t\t\"./sculptures/sculpture/content/thinker.json\",\n\t\t\"sculptures_sculpture_content_thinker_json\"\n\t],\n\t\"./venus-de-milo.json\": [\n\t\t\"./sculptures/sculpture/content/venus-de-milo.json\",\n\t\t\"sculptures_sculpture_content_venus-de-milo_json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = function() { return Object.keys(map); };\nwebpackAsyncContext.id = \"./sculptures/sculpture/content lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./sculptures/sculpture/content/_lazy_^\\.\\/.*\\.json$_namespace_object?");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "./js/" + chunkId + "..js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
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
/******/ 			"check_page_language": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], function() { return __webpack_require__("./navigation/ts/components/check_page_language.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;