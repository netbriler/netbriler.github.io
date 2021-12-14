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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/typed.js */ "./src/js/modules/typed.js");
/* harmony import */ var _modules_typed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_typed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll.js */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_scroll_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_select_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/select.js */ "./src/js/modules/select.js");
/* harmony import */ var _modules_select_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_select_js__WEBPACK_IMPORTED_MODULE_3__);





_modules_typed_js__WEBPACK_IMPORTED_MODULE_0___default()();
_modules_menu_js__WEBPACK_IMPORTED_MODULE_1___default()();
_modules_scroll_js__WEBPACK_IMPORTED_MODULE_2___default()();
_modules_select_js__WEBPACK_IMPORTED_MODULE_3___default()();

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const body = document.body;
const menu_wrapper = document.querySelector('.menu__wrapper');
const hamburger = document.querySelector('.menu__hamburger');

function main() {

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu__hamburger_active');
        menu_wrapper.classList.toggle('menu__wrapper_active');
        body.classList.toggle('overflow-hidden');
    })

};

module.exports = main;

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const anchorsLinks = document.querySelectorAll('a[href^="#"]')
const anchorsButtons = document.querySelectorAll('button[data-href^="#"]')

function main() {

    for (let anchor of anchorsLinks) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href')
          
          document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      }

      for (let anchor of anchorsButtons) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('data-href')
          
          document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      }

};

module.exports = main;

/***/ }),

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
    const all_custom_selects = document.getElementsByClassName('custom-select');

    for (let i = 0; i < all_custom_selects.length; i++) {
        const custom_select = all_custom_selects[i];
        const select_element = custom_select.getElementsByTagName('select')[0];
        const custom_default_option = document.createElement('DIV');

        custom_default_option.setAttribute('class', 'custom-select__selected');
        custom_default_option.innerHTML = select_element.options[select_element.selectedIndex].innerHTML;

        custom_select.appendChild(custom_default_option);

        custom_options_list_element = document.createElement('DIV');
        custom_options_list_element.setAttribute('class', 'custom-select__items custom-select__items_hide');

        for (let j = 1; j < select_element.length; j++) {
            const custom_option_element = document.createElement('DIV');
            custom_option_element.innerHTML = select_element.options[j].innerHTML;

            custom_option_element.addEventListener('click', function () {

                for (let i = 0; i < select_element.length; i++) {

                    if (select_element.options[i].innerHTML == this.innerHTML) {
                        select_element.selectedIndex = i;
                        custom_default_option.innerHTML = this.innerHTML;
                        togleCustomSelect(custom_default_option);
                        break;
                    }
                }
            });

            custom_options_list_element.appendChild(custom_option_element);
        }


        custom_select.appendChild(custom_options_list_element);

        custom_default_option.addEventListener('click', function () {
            togleCustomSelect(this);
        });
    }


    function togleCustomSelect(element) {

        element.nextSibling.classList.toggle('custom-select__items_hide');
        element.classList.toggle('custom-select__arrow_active');
    }

}

/***/ }),

/***/ "./src/js/modules/typed.js":
/*!*********************************!*\
  !*** ./src/js/modules/typed.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const options = {
    strings: ["Разрабатываем корпоративные сайты",
        "Интернет магазины",
        "Landing Page",
        "Сайты визитки",
        "Личные сайты",
        "Интернет порталы",
        "Нестандартные сайты с вашим функционалом",
    ],
    typeSpeed: 30,
    backSpeed: 20,
    backDelay: 1500,
    loop: true,
    loopCount: false,
};

const typed = new Typed('#typed', options);

module.exports = function () {}

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map