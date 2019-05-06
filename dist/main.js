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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.sass */ \"./src/sass/style.sass\");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/script.js */ \"./src/js/script.js\");\n/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Отключение стандартного скролла\r\ndocument.body.style.overflow = 'hidden';\r\n\r\n// Скролл страниц\r\n\r\nlet firstScreen = document.getElementById('first-screen');\r\nlet pagination = document.getElementById('pagination');\r\nlet next = document.getElementById('next');\r\nlet secondScreen = document.getElementById('second-screen');\r\nlet thirdScreen = document.getElementById('third-screen');\r\nlet startingPoint;\r\nlet sliderStartingPoint;\r\nlet handlePosition;\r\nlet sliderChange;\r\nlet sliderBgWidth;\r\n\r\nwindow.onscroll = function() {\r\nlet offsetFirst = window.pageYOffset;\r\nlet offsetSecond = 1536 - window.pageYOffset;\r\nfirstScreen.querySelector('.main-screen__title').style.transform = 'translateY(-'+offsetFirst/3+'px)';\r\nfirstScreen.querySelector('.main-screen__text.text-1').style.transform = 'translateY(-'+offsetFirst/3+'px)';\r\nfirstScreen.querySelector('.main-screen__text.text-2').style.transform = 'translateY(-'+offsetFirst/3+'px)';\r\nfirstScreen.querySelector('.main-screen__text.text-3').style.transform = 'translateY(-'+offsetFirst/3+'px)';\r\nfirstScreen.querySelector('.main-screen__text.text-4').style.transform = 'translateY(-'+offsetFirst/3+'px)';\r\nfirstScreen.querySelector('.main-screen__ellipses').style.transform = 'translateY(-'+offsetFirst/3+'px)';\r\n\r\nsecondScreen.querySelector('.ice-1').style.transform = 'translateY('+offsetSecond/3+'px)';\r\nsecondScreen.querySelector('.ice-2').style.transform = 'translateY('+offsetSecond/3+'px)';\r\nsecondScreen.querySelector('.ice-3').style.transform = 'translateY('+offsetSecond/3+'px)';\r\nsecondScreen.querySelector('.ice-4').style.transform = 'translateY('+offsetSecond/3+'px)';\r\nsecondScreen.querySelector('.second-screen__title').style.transform = 'translateY('+offsetSecond/3+'px)';\r\n}\r\n\r\nfunction funcTouchStartFirst (event) {\r\n\tstartingPoint = event.touches[0].clientY;\r\n}\r\nfunction funcTouchMoveFirst (event) {\r\n\tevent.preventDefault();\r\n}\r\nfunction funcTouchEndFirst (event) {\r\n\tlet touch = event.changedTouches[0];\r\n\tlet change = startingPoint - touch.clientY;\r\n\tif(change > 200) {\r\n\t\tlet scroller = setInterval(function() {\r\n\t\t\tlet scrollBy = 1536 / 24;\r\n\t\t\tif(window.pageYOffset < 1536) {\r\n\t\t\twindow.scrollBy(0, scrollBy);\r\n\t\t\t} else {\r\n\t\t\tclearInterval(scroller);\r\n\t\t\t}\r\n\t\t\t}, 15);\r\n\t\tnext.style.display = 'none';\r\n\t\tpagination.querySelector('.pagination__indicator:nth-child(2)').classList.add('indicator-active');\r\n\t\tpagination.querySelector('.pagination__indicator:nth-child(1)').classList.remove('indicator-active');\r\n\t}\r\n\tevent.preventDefault();\r\n}\r\n\r\nfirstScreen.addEventListener('touchstart', funcTouchStartFirst);\r\nfirstScreen.addEventListener('touchmove', funcTouchMoveFirst);\r\nfirstScreen.addEventListener('touchend', funcTouchEndFirst);\r\n\r\nfunction funcTouchStartSecond (event) {\r\n\tstartingPoint = event.touches[0].clientY;\r\n}\r\nfunction funcTouchMoveSecond (event) {\r\n\tevent.preventDefault();\r\n}\r\nfunction funcTouchEndSecond (event) {\r\n\tlet touch = event.changedTouches[0];\r\n\tlet change = startingPoint - touch.clientY;\r\n\tif(change > 200) {\r\n\t\tlet scroller = setInterval(function() {\r\n\t\t\tlet scrollBy = 1536 / 24;\r\n\t\t\tif(window.pageYOffset < 3072) {\r\n\t\t\twindow.scrollBy(0, scrollBy);\r\n\t\t\t} else {\r\n\t\t\tclearInterval(scroller);\r\n\t\t\t}\r\n\t\t\t}, 15);\r\n\t\tpagination.querySelector('.pagination__indicator:nth-child(3)').classList.add('indicator-active');\r\n\t\tpagination.querySelector('.pagination__indicator:nth-child(2)').classList.remove('indicator-active');\r\n\t}\r\n\tif(change < -200) {\r\n\t\tlet scroller = setInterval(function() {\r\n\t\t\tlet scrollBy = 1536 / 24;\r\n\t\t\tif(window.pageYOffset > 0) {\r\n\t\t\twindow.scrollBy(0, -scrollBy);\r\n\t\t\t} else {\r\n\t\t\tclearInterval(scroller);\r\n\t\t\t}\r\n\t\t}, 15);\r\n\t\tnext.style.display = 'block';\r\n\t\tpagination.querySelector('.pagination__indicator:nth-child(1)').classList.add('indicator-active');\r\n\t\tpagination.querySelector('.pagination__indicator:nth-child(2)').classList.remove('indicator-active');\r\n\t}\r\n\tevent.preventDefault();\r\n}\r\n\r\nsecondScreen.addEventListener('touchstart', funcTouchStartSecond);\r\nsecondScreen.addEventListener('touchmove', funcTouchMoveSecond);\r\nsecondScreen.addEventListener('touchend', funcTouchEndSecond);\r\n\r\nfunction funcTouchStartThird (event) {\r\n\tstartingPoint = event.touches[0].clientY;\r\n}\r\nfunction funcTouchMoveThird (event) {\r\n\tevent.preventDefault();\r\n}\r\nfunction funcTouchEndThird (event) {\r\n\tlet touch = event.changedTouches[0];\r\n\tlet change = startingPoint - touch.clientY;\r\n\tif(change < -200) {\r\n\t\tlet scroller = setInterval(function() {\r\n\t\t\tlet scrollBy = 1536 / 24;\r\n\t\t\tif(window.pageYOffset > 1536) {\r\n\t\t\twindow.scrollBy(0, -scrollBy);\r\n\t\t\t} else {\r\n\t\t\tclearInterval(scroller);\r\n\t\t\t}\r\n\t\t}, 15);\r\n\t\tpagination.querySelector('.pagination__indicator:nth-child(2)').classList.add('indicator-active');\r\n\t\tpagination.querySelector('.pagination__indicator:nth-child(3)').classList.remove('indicator-active');\r\n\t}\r\n\tevent.preventDefault();\r\n}\r\n\r\nthirdScreen.addEventListener('touchstart', funcTouchStartThird);\r\nthirdScreen.addEventListener('touchmove', funcTouchMoveThird);\r\nthirdScreen.addEventListener('touchend', funcTouchEndThird);\r\n\r\n\r\n// Скролл табов в 3-ем окне\r\nfunction sliderTouchStart (event) {\r\n\tsliderStartingPoint = event.touches[0].clientX;\r\n\thandlePosition = parseInt(window.getComputedStyle(this).left.slice(0, -2));\t\r\n\tsliderBgWidth = parseInt(window.getComputedStyle(thirdScreen.querySelector('.toggle .toggle__bar')).width.slice(0, -2));\r\n\tthis.style.transition = '';\r\n\tthirdScreen.querySelector('.toggle .toggle__bar').style.transition = '';\r\n\r\n}\r\n\r\nfunction sliderTouchMove (event) {\r\n\tsliderChange = event.touches[0].clientX - sliderStartingPoint;\r\n\tif(sliderChange + handlePosition > -50 && sliderChange + handlePosition < 1196){\r\n\t\tthis.style.left = sliderChange + handlePosition + 'px';\r\n\t\tthirdScreen.querySelector('.tabs-wrapper').style.transition = 'all 0.3s';\r\n\t\tif(sliderChange + handlePosition < 280) {\r\n\t\t\tthirdScreen.querySelector('.tabs-wrapper').style.transform = 'translateX(0)';\r\n\t\t} else if(sliderChange + handlePosition > 280 && sliderChange + handlePosition < 887) {\r\n\t\t\tthirdScreen.querySelector('.tabs-wrapper').style.transform = 'translateX(-2048px)';\r\n\t\t} else {\r\n\t\t\tthirdScreen.querySelector('.tabs-wrapper').style.transform = 'translateX(-4096px)';\r\n\t\t}\r\n\t\tthirdScreen.querySelector('.toggle .toggle__bar').style.width = sliderBgWidth+sliderChange+'px';\r\n\t}\r\n}\r\n\r\nfunction sliderTouchEnd (event) {\r\n\tthis.style.transition = 'all 0.3s';\r\n\tthirdScreen.querySelector('.toggle .toggle__bar').style.transition = 'all 0.3s';\r\n\tif(sliderChange + handlePosition < 280) {\r\n\t\tthis.style.left = '-22px';\r\n\t\tthirdScreen.querySelector('.toggle .toggle__bar').style.width = 0;\r\n\t} else if(sliderChange + handlePosition > 280 && sliderChange + handlePosition < 887) {\r\n\t\tthis.style.left = '587px';\r\n\t\tthirdScreen.querySelector('.toggle .toggle__bar').style.width = '600px';\r\n\t} else {\r\n\t\tthis.style.left = '1196px';\r\n\t\tthirdScreen.querySelector('.toggle .toggle__bar').style.width = '1200px';\r\n\t}\r\n}\r\n\r\n\r\n\r\n\r\nthirdScreen.querySelector('.toggle .toggle__handle').addEventListener('touchstart', sliderTouchStart);\r\nthirdScreen.querySelector('.toggle .toggle__handle').addEventListener('touchmove', sliderTouchMove);\r\nthirdScreen.querySelector('.toggle .toggle__handle').addEventListener('touchend', sliderTouchEnd);\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ "./src/sass/style.sass":
/*!*****************************!*\
  !*** ./src/sass/style.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/style.sass?");

/***/ })

/******/ });