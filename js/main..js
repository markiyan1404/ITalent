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

/***/ "./3d/ts/3d.ts":
/*!*********************!*\
  !*** ./3d/ts/3d.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crate3D\": function() { return /* binding */ crate3D; },\n/* harmony export */   \"show3D\": function() { return /* binding */ show3D; }\n/* harmony export */ });\n/* harmony import */ var _scss_3d_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/3d.scss */ \"./3d/scss/3d.scss\");\n/* harmony import */ var _scss_adap_adap_3d_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../scss/adap/adap-3d.scss */ \"./3d/scss/adap/adap-3d.scss\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"../node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"../node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"../node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n\n\n\n\n\n\nvar crate3D = function crate3D(url) {\n  var monkeyUrl = url;\n  var renderer = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  document.body.appendChild(renderer.domElement);\n  var scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();\n\n  var genarateWindow = function genarateWindow() {\n    var camera = new three__WEBPACK_IMPORTED_MODULE_5__.PerspectiveCamera(45, window.innerWidth * 0.96 / window.innerHeight, 0.1, 1000);\n    var orbit = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(camera, renderer.domElement);\n    camera.position.set(0, 0, 1);\n    orbit.update();\n\n    function animation() {\n      renderer.render(scene, camera);\n    }\n\n    function onWindowResize() {\n      camera.aspect = window.innerWidth / window.innerHeight;\n      camera.updateProjectionMatrix();\n      if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).width() < 1000) renderer.setSize(window.innerWidth, window.innerHeight);else renderer.setSize(window.innerWidth * 0.96, window.innerHeight);\n    }\n\n    onWindowResize();\n    renderer.setAnimationLoop(animation);\n  };\n\n  jquery__WEBPACK_IMPORTED_MODULE_2__(window).on(\"resize\", function () {\n    genarateWindow();\n  });\n  var assetLoader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_4__.GLTFLoader();\n  assetLoader.load(monkeyUrl.href, function (gltf) {\n    var model = gltf.scene;\n    scene.add(model);\n    model.position.set(1, 1, 1);\n  }, undefined, function (error) {\n    console.error(error);\n  });\n  var pLight = new three__WEBPACK_IMPORTED_MODULE_5__.PointLight(0xFFFFFF, 1.1);\n  pLight.position.set(0, 0, 1);\n  scene.add(pLight);\n  var aLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(0xFFFFFF, 1.1);\n  scene.add(aLight);\n\n  var changeColor = function changeColor() {\n    var getContrastColor = getComputedStyle(document.documentElement).getPropertyValue(\"--contrastColorWhite\");\n    if (getContrastColor === \"#fff\") getContrastColor = 0x0B0B0B;\n    if (getContrastColor === \"#0b0b0b\" || getContrastColor === \"#080808\") getContrastColor = 0xFFFFFF;\n    renderer.setClearColor(getContrastColor);\n  };\n\n  changeColor();\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".colors__black\").on(\"click\", function () {\n    return renderer.setClearColor(0x0B0B0B);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".colors__white\").on(\"click\", function () {\n    return renderer.setClearColor(0xFFFFFF);\n  });\n  genarateWindow();\n  generateClose(); //   adaptation();\n  // $(window).on(\"resize\", (): void => adaptation());\n}; // Generate close\n\nvar generateClose = function generateClose() {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\"body\").append(\"<span class='body__close-container'><div class='close-container__close mouse-active2'>&#10010;</div></span>\");\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".close-container__close\").on(\"click\", function () {\n    var _this = this;\n\n    jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show1\").addClass(\"hide3D\");\n    setTimeout(function () {\n      return jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show2\").addClass(\"hide3D\");\n    }, 700); // Hide animation \n\n    setTimeout(function () {\n      jquery__WEBPACK_IMPORTED_MODULE_2__(\"[data-engine]\").remove();\n      jquery__WEBPACK_IMPORTED_MODULE_2__(_this).remove();\n      jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show1\").removeClass(\"hide3D\");\n      jquery__WEBPACK_IMPORTED_MODULE_2__(\".hide3D\").fadeOut(300);\n      setTimeout(function () {\n        return jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show2\").removeClass(\"hide3D\").css(\"display\", \"block\");\n      }, 350);\n    }, 1600);\n  });\n}; // const adaptation = (): void => {\n//     if ($(window).width() < 1000) $(\"[data-engine]\").css({\"top\": \"4vh\", \"height\": \"96vh\"});\n//     else $(\"[data-engine]\").css({\"top\": \"0\", \"height\": \"100vh\"});\n// }; \n// Show animation\n\n\nvar show3D = function show3D(way) {\n  jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show1\").addClass(\"show3D\");\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show2\").addClass(\"show3D\");\n  }, 700);\n  setTimeout(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show1\").removeClass(\"show3D\");\n    jquery__WEBPACK_IMPORTED_MODULE_2__(\".show3D\").fadeOut(300);\n    setTimeout(function () {\n      return jquery__WEBPACK_IMPORTED_MODULE_2__(\".anim-show2\").removeClass(\"show3D\").css(\"display\", \"block\");\n    }, 350);\n  }, 1500);\n  setTimeout(function () {\n    crate3D(way);\n  }, 1500);\n};\ncrate3D(new URL(/* asset import */ __webpack_require__(/*! ../../3d/textures/main/scene.gltf */ \"./3d/textures/main/scene.gltf\"), __webpack_require__.b));\n\n//# sourceURL=webpack:///./3d/ts/3d.ts?");

/***/ }),

/***/ "./main/ts/components/window-1.ts":
/*!****************************************!*\
  !*** ./main/ts/components/window-1.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"../node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger.js */ \"../node_modules/gsap/ScrollTrigger.js\");\n\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window); // Scroll button\n\npage.on(\"load\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".window-1__button\").on(\"click\", function () {\n    var windowWidth = page.width();\n    var window2Top = jquery__WEBPACK_IMPORTED_MODULE_0__(\".window-2\").offset().top;\n\n    if (windowWidth <= 1000) {\n      var windowHeight = page.height() * 0.06;\n      window2Top = jquery__WEBPACK_IMPORTED_MODULE_0__(\".window-2\").offset().top - windowHeight;\n    }\n\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\"html\").animate({\n      scrollTop: window2Top\n    }, 700);\n  });\n}); // Paralax\n\ngsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);\nvar backgroundImage = jquery__WEBPACK_IMPORTED_MODULE_0__(\".window-1\");\ngsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to(backgroundImage, {\n  backgroundPositionY: \"40%\",\n  ease: \"none\",\n  scrollTrigger: {\n    trigger: backgroundImage,\n    start: \"+=0px\",\n    end: \"bottom top\",\n    scrub: 1.5\n  }\n});\n\n//# sourceURL=webpack:///./main/ts/components/window-1.ts?");

/***/ }),

/***/ "./main/ts/components/window-2.ts":
/*!****************************************!*\
  !*** ./main/ts/components/window-2.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n // Picting slider\n\nvar imageNum = 1;\nvar pictingsImages = jquery__WEBPACK_IMPORTED_MODULE_0__(\".images__img\");\n\nvar nextSlide = function nextSlide() {\n  var checkActiveImage = pictingsImages.hasClass(\"images__img-NOactive\") || pictingsImages.hasClass(\"images__img-prev-NOactive\");\n  if (checkActiveImage) return;else {\n    removeFromSlideClass();\n    imageNum++;\n    if (imageNum === 6) imageNum = 1;\n    var noActiveImage = \"\";\n    imageNum === 1 ? noActiveImage = \".images__img-\" + 5 : noActiveImage = \".images__img-\" + (imageNum - 1);\n    addToSlideClass(noActiveImage, \"images__img-NOactive\", \"images__img-active\");\n  }\n};\n\nvar prevSlide = function prevSlide() {\n  var checkActiveImage = pictingsImages.hasClass(\"images__img-NOactive\") || pictingsImages.hasClass(\"images__img-prev-NOactive\");\n  if (checkActiveImage) return;else {\n    removeFromSlideClass();\n    imageNum--;\n    if (imageNum === 0) imageNum = 5;\n    var noActiveImage = \"\";\n    imageNum === 5 ? noActiveImage = \".images__img-\" + 1 : noActiveImage = \".images__img-\" + (imageNum + 1);\n    addToSlideClass(noActiveImage, \"images__img-prev-NOactive\", \"images__img-prev-active\");\n  }\n};\n\nvar removeFromSlideClass = function removeFromSlideClass() {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(pictingsImages).removeClass(\"images__img-active images__img-prev-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".text-paint__name\").removeClass(\"text-paint__name-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".text-paint__cost\").removeClass(\"text-paint__cost-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".text-paint__description\").removeClass(\"text-paint__description-active\");\n};\n\nvar addToSlideClass = function addToSlideClass(noActiveImage, noActiveClass, activeClass) {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".text-paint__name-\" + imageNum).addClass(\"text-paint__name-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".text-paint__cost-\" + imageNum).addClass(\"text-paint__cost-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".text-paint__description-\" + imageNum).addClass(\"text-paint__description-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".images__img-\" + imageNum).addClass(activeClass);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(noActiveImage).addClass(noActiveClass);\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".\" + noActiveClass).removeClass(noActiveClass);\n  }, 1000);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".image-paint__number\").html(\"0\" + imageNum + \"/05\");\n};\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".image-paint__prev\").on(\"click\", prevSlide);\njquery__WEBPACK_IMPORTED_MODULE_0__(\".image-paint__next\").on(\"click\", nextSlide); // Generate background Blocks\n\nfor (var i = 0; i < 23; i++) {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".window-2__end\").append(\"<span class='end__block'></span>\");\n}\n\n//# sourceURL=webpack:///./main/ts/components/window-2.ts?");

/***/ }),

/***/ "./main/ts/components/window-3.ts":
/*!****************************************!*\
  !*** ./main/ts/components/window-3.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _3d_ts_3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../3d/ts/3d */ \"./3d/ts/3d.ts\");\n\n // Sculptures slider\n\nvar sculpturesNum = 2;\njquery__WEBPACK_IMPORTED_MODULE_0__(\".point__child\").on(\"click\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".point__child\").removeClass(\"point__child-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass(\"point__child-active\");\n  sculpturesNum = parseInt(this.className[26]);\n  chengSculture();\n});\n\nvar chengSculture = function chengSculture() {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".next-slide__image\").removeClass(\"next-slide__image-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".images__sculptur\").removeClass(\"images__sculptur-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".description__text\").removeClass(\"description__text-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".description__header\").removeClass(\"description__header-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".point__child\").removeClass(\"point__child-active\");\n  if (sculpturesNum === 6) sculpturesNum = 1;\n  if (sculpturesNum === 5) jquery__WEBPACK_IMPORTED_MODULE_0__(\".next-slide__image-\" + 1).addClass(\"next-slide__image-active\");else jquery__WEBPACK_IMPORTED_MODULE_0__(\".next-slide__image-\" + (sculpturesNum + 1)).addClass(\"next-slide__image-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".description__text-\" + sculpturesNum).addClass(\"description__text-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".description__header-\" + sculpturesNum).addClass(\"description__header-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".images__sculptur-\" + sculpturesNum).addClass(\"images__sculptur-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".point__child-\" + sculpturesNum).addClass(\"point__child-active\");\n  sculpturesNum++;\n};\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".next-slide__arrow\").on(\"click\", chengSculture); // 3D\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".description__button\").on(\"click\", function () {\n  var test = \"scene.gltf\";\n  (0,_3d_ts_3d__WEBPACK_IMPORTED_MODULE_1__.show3D)(new URL(/* asset import */ __webpack_require__(/*! ../../../3d/textures/main/scene.gltf */ \"./3d/textures/main/scene.gltf\"), __webpack_require__.b));\n});\n\n//# sourceURL=webpack:///./main/ts/components/window-3.ts?");

/***/ }),

/***/ "./main/ts/components/window-4.ts":
/*!****************************************!*\
  !*** ./main/ts/components/window-4.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n // Architecture images \n\nvar architectureImages = jquery__WEBPACK_IMPORTED_MODULE_0__(\".images-block__image-architecture\");\narchitectureImages.on(\"click\", function (e) {\n  var activeArchitecture = \".\" + jquery__WEBPACK_IMPORTED_MODULE_0__(this)[0].classList[1],\n      activeArchitectureText = jquery__WEBPACK_IMPORTED_MODULE_0__(activeArchitecture + \" .image-architecture__text\"),\n      activeArchitectureClose = jquery__WEBPACK_IMPORTED_MODULE_0__(activeArchitecture + \" .image-architecture__close-architecture\");\n  if (jquery__WEBPACK_IMPORTED_MODULE_0__(e.target).hasClass(\"close-architecture\")) return;\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".activeArchitecture\").addClass(\"noActiveArchitecture\");\n  architectureImages.removeClass(\"activeArchitecture\").addClass(\"mouse-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(activeArchitecture).addClass(\"activeArchitecture\").removeClass(\"noActiveArchitecture mouse-active\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".noActiveArchitecture .image-architecture__close-architecture\").fadeOut();\n  activeArchitectureClose.css(\"display\", \"flex\");\n  activeArchitectureText.fadeIn();\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".cursor\").removeClass(\"activeCursore\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".close-architecture\").on(\"click\", function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".images-block__image-architecture\").removeClass(\"activeArchitecture noActiveArchitecture\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(activeArchitecture).addClass(\"noActiveArchitecture\");\n    activeArchitectureClose.fadeOut();\n    activeArchitectureText.fadeOut();\n  });\n});\n\n//# sourceURL=webpack:///./main/ts/components/window-4.ts?");

/***/ }),

/***/ "./main/ts/components/window-5.ts":
/*!****************************************!*\
  !*** ./main/ts/components/window-5.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navigation_ts_components_menu_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../navigation/ts/components/menu_icon */ \"./navigation/ts/components/menu_icon.ts\");\n\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".text__button-footer\").on(\"click\", function () {\n  return (0,_navigation_ts_components_menu_icon__WEBPACK_IMPORTED_MODULE_1__.showMenu)();\n});\njquery__WEBPACK_IMPORTED_MODULE_0__(\".text__button-to-top\").on(\"click\", function () {\n  return jquery__WEBPACK_IMPORTED_MODULE_0__(\"html\").animate({\n    scrollTop: 0\n  }, 700);\n});\n\n//# sourceURL=webpack:///./main/ts/components/window-5.ts?");

/***/ }),

/***/ "./main/ts/main.ts":
/*!*************************!*\
  !*** ./main/ts/main.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../main/scss/main.scss */ \"./main/scss/main.scss\");\n/* harmony import */ var _main_scss_adap_adap_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../main/scss/adap/adap-main.scss */ \"./main/scss/adap/adap-main.scss\");\n/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! splitting */ \"../node_modules/splitting/dist/splitting.js\");\n/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(splitting__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ts_slowedScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ts/slowedScroll */ \"./ts/slowedScroll.ts\");\n/* harmony import */ var _components_window_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/window-1 */ \"./main/ts/components/window-1.ts\");\n/* harmony import */ var _components_window_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/window-2 */ \"./main/ts/components/window-2.ts\");\n/* harmony import */ var _components_window_3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/window-3 */ \"./main/ts/components/window-3.ts\");\n/* harmony import */ var _components_window_4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/window-4 */ \"./main/ts/components/window-4.ts\");\n/* harmony import */ var _components_window_5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/window-5 */ \"./main/ts/components/window-5.ts\");\n/* harmony import */ var _preloader_ts_preloader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../preloader/ts/preloader */ \"./preloader/ts/preloader.ts\");\n\n\n\n\n\n\n\n\n\n\n\nvar page = jquery__WEBPACK_IMPORTED_MODULE_0__(window); // Loader animation\n\nvar loaderContetnt = function loaderContetnt() {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").addClass(\"loadedPage\");\n  (0,_ts_slowedScroll__WEBPACK_IMPORTED_MODULE_4__.updateScroller)();\n  page.focus();\n  page.on(\"resize\", _ts_slowedScroll__WEBPACK_IMPORTED_MODULE_4__.onResize);\n  page.on(\"scroll\", _ts_slowedScroll__WEBPACK_IMPORTED_MODULE_4__.onScroll);\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".window-1\").attr(\"data-splitting\", \"words\");\n  splitting__WEBPACK_IMPORTED_MODULE_3__();\n};\n\nif (localStorage.getItem(\"firstLoad\") === null) {\n  var firstLoad = true;\n  setTimeout(loaderContetnt, 1700);\n  firstLoad = false;\n  firstLoad = String(firstLoad);\n  localStorage.setItem(\"firstLoad\", firstLoad);\n} else {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".preloader\").css(\"display\", \"none\");\n  setTimeout(loaderContetnt, 200);\n} // Animation show  \n\n\nvar reveal = function reveal() {\n  var revealBlocks = jquery__WEBPACK_IMPORTED_MODULE_0__(\".reveal-blocks\"),\n      revealTexts = jquery__WEBPACK_IMPORTED_MODULE_0__(\".reveal-texts\"),\n      windowHeight = page.innerHeight();\n\n  for (var i = 0; i < revealBlocks.length; i++) {\n    var elementTop = revealBlocks[i].getBoundingClientRect().top;\n\n    if (elementTop < windowHeight) {\n      jquery__WEBPACK_IMPORTED_MODULE_0__(revealBlocks[i]).addClass(\"scrolled\");\n    }\n  }\n\n  for (var t = 0; t < revealTexts.length; t++) {\n    var _elementTop = revealTexts[t].getBoundingClientRect().top - 50;\n\n    if (_elementTop < windowHeight) {\n      jquery__WEBPACK_IMPORTED_MODULE_0__(revealTexts[t]).attr(\"data-splitting\", \"words\");\n      jquery__WEBPACK_IMPORTED_MODULE_0__(revealTexts[t]).addClass(\"scrolled-text\");\n      splitting__WEBPACK_IMPORTED_MODULE_3__();\n    }\n  }\n};\n\npage.on(\"scroll\", reveal);\n\n//# sourceURL=webpack:///./main/ts/main.ts?");

/***/ }),

/***/ "./navigation/ts/components/menu_icon.ts":
/*!***********************************************!*\
  !*** ./navigation/ts/components/menu_icon.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenu\": function() { return /* binding */ showMenu; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nvar menuShow = jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show\"),\n    animShow1 = jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show1\"),\n    navigationMenuAndClouse = jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu, .navigation__clouse\"); // Show menu animation\n\nvar menuShowAnim = function menuShowAnim() {\n  menuShow.removeClass(\"anim-show-default anim-show-close\");\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show1\").addClass(\"anim-show-active\");\n  }, 10);\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show2\").addClass(\"anim-show-active\");\n  }, 150);\n  setTimeout(function () {\n    return menuShow.addClass(\"anim-show-default\");\n  }, 800);\n  setTimeout(function () {\n    return menuShow.removeClass(\"anim-show-active\");\n  }, 1000);\n}; // Hide menu animation\n\n\nvar menuHide = function menuHide() {\n  menuShow.removeClass(\"anim-show-default anim-show-close\");\n  animShow1.addClass(\"anim-show-close\");\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show2\").addClass(\"anim-show-close\");\n  }, 150);\n  setTimeout(function () {\n    return menuShow.fadeOut(300);\n  }, 900);\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".menu, .anim-show1\").css(\"display\", \"none\");\n  }, 800);\n}; // No spam click\n\n\nvar noClickMenuIcon = function noClickMenuIcon() {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu, .navigation__clouse\").attr(\"value\", \"true\");\n  setTimeout(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu, .navigation__clouse\").attr(\"value\", \"false\");\n  }, 1200);\n}; // Show menu\n\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu\").on(\"click\", function () {\n  return showMenu();\n});\nvar showMenu = function showMenu() {\n  var noClickBlocks = jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu, .navigation__clouse\").attr(\"value\");\n  if (noClickBlocks === \"true\") return;else {\n    noClickMenuIcon();\n    menuShowAnim();\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__clouse, .anim-show\").css(\"display\", \"flex\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu\").css(\"display\", \"none\");\n    setTimeout(function () {\n      return jquery__WEBPACK_IMPORTED_MODULE_0__(\".menu\").css(\"display\", \"flex\");\n    }, 800);\n  }\n}; // Hide menu\n\njquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__clouse\").on(\"click\", function () {\n  var noClickBlocks = navigationMenuAndClouse.attr(\"value\");\n  if (noClickBlocks === \"true\") return;else {\n    noClickMenuIcon();\n    menuHide();\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu\").css(\"display\", \"flex\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(this).css(\"display\", \"none\");\n    setTimeout(function () {\n      return jquery__WEBPACK_IMPORTED_MODULE_0__(\".active-menu__child\").removeClass(\"active-menu__child\");\n    }, 1000);\n    setTimeout(function () {\n      return jquery__WEBPACK_IMPORTED_MODULE_0__(\".anim-show\").removeClass(\"anim-show-close\");\n    }, 1500);\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\").css(\"overflow-y\", \"auto\");\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".navigation__menu\").addClass(\"notActiveMenuIcon\");\n  }\n});\n\n//# sourceURL=webpack:///./navigation/ts/components/menu_icon.ts?");

/***/ }),

/***/ "./preloader/ts/preloader.ts":
/*!***********************************!*\
  !*** ./preloader/ts/preloader.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _preloader_scss_preloader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../preloader/scss/preloader.scss */ \"./preloader/scss/preloader.scss\");\n/* harmony import */ var _preloader_scss_adap_preloader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../preloader/scss/adap.preloader.scss */ \"./preloader/scss/adap.preloader.scss\");\n\n\n\nsetTimeout(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".preloader-1\").css(\"display\", \"none\");\n  jquery__WEBPACK_IMPORTED_MODULE_0__(\".preloader-2\").fadeOut();\n}, 1900);\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"load\", function () {\n  var preloadImageNum = 0,\n      cycleOfPictures = 0;\n  setInterval(function () {\n    if (cycleOfPictures > 4) return;\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".preloader-1 img\").removeClass(\"preloaderActiveImage\");\n    preloadImageNum++;\n    jquery__WEBPACK_IMPORTED_MODULE_0__(\".preloader__image-\" + preloadImageNum).addClass(\"preloaderActiveImage\");\n\n    if (preloadImageNum >= 6) {\n      preloadImageNum = 1;\n      cycleOfPictures++;\n      jquery__WEBPACK_IMPORTED_MODULE_0__(\".preloader__image-1\").addClass(\"preloaderActiveImage\");\n    }\n  }, 175);\n});\n\n//# sourceURL=webpack:///./preloader/ts/preloader.ts?");

/***/ }),

/***/ "./ts/slowedScroll.ts":
/*!****************************!*\
  !*** ./ts/slowedScroll.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateScroller\": function() { return /* binding */ updateScroller; },\n/* harmony export */   \"onScroll\": function() { return /* binding */ onScroll; },\n/* harmony export */   \"onResize\": function() { return /* binding */ onResize; }\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"../node_modules/gsap/index.js\");\n\n // Slowed scroll\n\n;\nvar scroller = {\n  target: jquery__WEBPACK_IMPORTED_MODULE_0__(\"#scroll-container\"),\n  ease: 0.045,\n  // scroll speed\n  endY: 0,\n  y: 0,\n  resizeRequest: 1,\n  scrollRequest: 0\n};\nif (jquery__WEBPACK_IMPORTED_MODULE_0__(window).width() < 1000) scroller.ease = 0.70;\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"resize\", function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0__(window).width() < 1000 ? scroller.ease = 0.70 : scroller.ease = 0.045;\n});\nvar requestId = null;\ngsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(scroller.target, {\n  rotation: 0,\n  force3D: true\n});\nvar updateScroller = function updateScroller() {\n  var html = jquery__WEBPACK_IMPORTED_MODULE_0__(\"html\"),\n      body = jquery__WEBPACK_IMPORTED_MODULE_0__(\"body\"),\n      resized = scroller.resizeRequest > 0;\n\n  if (resized) {\n    var height = scroller.target.innerHeight();\n    body.css(\"height\", height);\n    scroller.resizeRequest = 0;\n  }\n\n  var scrollY = jquery__WEBPACK_IMPORTED_MODULE_0__(window).scrollTop() || html.scrollTop() || body.scrollTop() || 0;\n  scroller.endY = scrollY;\n  scroller.y += (scrollY - scroller.y) * scroller.ease;\n\n  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {\n    scroller.y = scrollY;\n    scroller.scrollRequest = 0;\n  }\n\n  gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(scroller.target, {\n    y: -scroller.y\n  });\n  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;\n};\nvar onScroll = function onScroll() {\n  scroller.scrollRequest++;\n\n  if (!requestId) {\n    requestId = requestAnimationFrame(updateScroller);\n  }\n};\nvar onResize = function onResize() {\n  setTimeout(function () {\n    scroller.resizeRequest++;\n    requestId = requestAnimationFrame(updateScroller);\n  }, 270);\n};\njquery__WEBPACK_IMPORTED_MODULE_0__(window).on(\"load\", function () {\n  var chengsWindowHeightBlocks = jquery__WEBPACK_IMPORTED_MODULE_0__(\".choice__language, .point__child, .next-slide__arrow, .image-paint__button\");\n  chengsWindowHeightBlocks.on(\"click\", function () {\n    updateScroller();\n    window.focus();\n    onResize();\n  });\n}); // Add overflow: auto; and add position: static; plus change top\n\n//# sourceURL=webpack:///./ts/slowedScroll.ts?");

/***/ }),

/***/ "./3d/scss/3d.scss":
/*!*************************!*\
  !*** ./3d/scss/3d.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./3d/scss/3d.scss?");

/***/ }),

/***/ "./3d/scss/adap/adap-3d.scss":
/*!***********************************!*\
  !*** ./3d/scss/adap/adap-3d.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./3d/scss/adap/adap-3d.scss?");

/***/ }),

/***/ "./main/scss/adap/adap-main.scss":
/*!***************************************!*\
  !*** ./main/scss/adap/adap-main.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./main/scss/adap/adap-main.scss?");

/***/ }),

/***/ "./main/scss/main.scss":
/*!*****************************!*\
  !*** ./main/scss/main.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./main/scss/main.scss?");

/***/ }),

/***/ "./preloader/scss/adap.preloader.scss":
/*!********************************************!*\
  !*** ./preloader/scss/adap.preloader.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./preloader/scss/adap.preloader.scss?");

/***/ }),

/***/ "./preloader/scss/preloader.scss":
/*!***************************************!*\
  !*** ./preloader/scss/preloader.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./preloader/scss/preloader.scss?");

/***/ }),

/***/ "./3d/textures/main/scene.gltf":
/*!*************************************!*\
  !*** ./3d/textures/main/scene.gltf ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e98c905ba15e323a83d5.gltf\";\n\n//# sourceURL=webpack:///./3d/textures/main/scene.gltf?");

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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js","vendors-node_modules_splitting_dist_splitting_js-node_modules_three_examples_jsm_controls_Orb-3165c1"], function() { return __webpack_require__("./main/ts/main.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;